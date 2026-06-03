(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 214495, 744295, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(495854);
    e.s(["default", 0, ({
        children: e,
        dataCsOverrideId: n,
        verticalSpacing: o = "small",
        as: i = "section",
        className: a
    }) => {
        let l = (0, r.default)("mx-auto max-w-(--breakpoint-2xl) px-16 md:px-40 lg:px-48 xl:px-96", "x-small" === o && "py-48 md:py-64", "small" === o && "py-48 md:py-80", "medium" === o && "py-80 md:py-128", "large" === o && "py-128 md:py-160", "none" === o && "py-0", a);
        return (0, t.createElement)(i, {
            "data-cs-override-id": n,
            className: l
        }, e)
    }], 744295), e.s([], 214495)
}, 44073, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        n = e.i(648684);
    e.i(108399);
    var o = e.i(860231),
        i = e.i(495854);
    let a = (0, n.cva)("flex h-fit w-fit flex-row items-center gap-4 uppercase", {
            variants: {
                size: {
                    small: "body-4 px-4",
                    medium: "body-3 lg:body-2 px-6 py-[2px]"
                },
                theme: {
                    light: "",
                    dark: "text-white"
                },
                variant: {
                    purple: "",
                    grey: "",
                    orange: ""
                }
            },
            compoundVariants: [{
                theme: "dark",
                variant: "purple",
                class: "bg-purple/30"
            }, {
                theme: "dark",
                variant: "grey",
                class: "bg-white/10"
            }, {
                theme: "light",
                variant: "purple",
                class: "bg-purple-200 text-purple-900"
            }, {
                theme: "light",
                variant: "grey",
                class: "bg-neutral-200"
            }, {
                theme: "light",
                variant: "orange",
                class: "bg-orange-100 text-orange-950"
            }],
            defaultVariants: {
                theme: "light",
                size: "medium",
                variant: "purple"
            }
        }),
        l = (0, n.cva)("m-1 w-fit p-2", {
            variants: {
                variant: {
                    purple: "border-corner-purple",
                    grey: "border-corner-neutral-400",
                    orange: "border-corner-primary"
                }
            },
            defaultVariants: {
                variant: "purple"
            }
        }),
        s = e => {
            let n, s, u, c, d, f, p, h, m, v, y, b, g, E = (0, r.c)(29);
            E[0] !== e ? ({
                className: n,
                cornerClassName: s,
                theme: p,
                variant: h,
                label: c,
                icon: u,
                size: f,
                ...d
            } = e, E[0] = e, E[1] = n, E[2] = s, E[3] = u, E[4] = c, E[5] = d, E[6] = f, E[7] = p, E[8] = h) : (n = E[1], s = E[2], u = E[3], c = E[4], d = E[5], f = E[6], p = E[7], h = E[8]);
            let S = "dark" === p ? "white" : "purple" === h ? "purple" : "black";
            return E[9] !== s || E[10] !== h ? (m = (0, i.default)(l({
                variant: h
            }), s), E[9] = s, E[10] = h, E[11] = m) : m = E[11], E[12] !== n || E[13] !== f || E[14] !== p || E[15] !== h ? (v = (0, i.default)(a({
                theme: p,
                variant: h,
                size: f
            }), n), E[12] = n, E[13] = f, E[14] = p, E[15] = h, E[16] = v) : v = E[16], E[17] !== S || E[18] !== u || E[19] !== f ? (y = u && (0, t.jsx)(o.default, {
                "aria-hidden": "true",
                strokeWidth: 3.5,
                name: u,
                size: "small" === f ? 12 : 16,
                color: S
            }), E[17] = S, E[18] = u, E[19] = f, E[20] = y) : y = E[20], E[21] !== c || E[22] !== d || E[23] !== v || E[24] !== y ? (b = (0, t.jsxs)("div", {
                className: v,
                ...d,
                children: [y, c]
            }), E[21] = c, E[22] = d, E[23] = v, E[24] = y, E[25] = b) : b = E[25], E[26] !== m || E[27] !== b ? (g = (0, t.jsx)("div", {
                className: m,
                children: b
            }), E[26] = m, E[27] = b, E[28] = g) : g = E[28], g
        };
    s.displayName = "TagHud", e.s(["default", 0, s])
}, 945210, 383375, 682129, 628710, 938936, 381234, 16951, 981047, 276284, 108113, 236663, 708235, 19101, 313271, 590149, 642285, 394324, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        n = e.i(495854);
    let o = e => {
        let o, i, a = (0, r.c)(7),
            {
                children: l,
                isCardBodyCentered: s,
                size: u
            } = e,
            c = void 0 === u ? "medium" : u,
            d = void 0 !== s && s && "justify-center",
            f = "small" === c && "gap-12 px-0 py-8 sm:items-center sm:px-16 sm:py-24 lg:px-16 xl:px-16",
            p = "medium" === c && "gap-16";
        return a[0] !== d || a[1] !== f || a[2] !== p ? (o = (0, n.default)("flex h-full flex-1 flex-col items-start p-16 pb-32 md:group-data-[orientation=horizontal]/card:pt-32", d, f, p), a[0] = d, a[1] = f, a[2] = p, a[3] = o) : o = a[3], a[4] !== l || a[5] !== o ? (i = (0, t.jsx)("div", {
            className: o,
            children: l
        }), a[4] = l, a[5] = o, a[6] = i) : i = a[6], i
    };
    e.s(["default", 0, o], 383375);
    var i = e.i(648684),
        a = e.i(191788);
    let l = (0, i.cva)("group/card relative flex h-full flex-col rounded-xs border transition-colors duration-300", {
            variants: {
                theme: {
                    light: "border-neutral-200 bg-white md:hover:border-neutral-400",
                    dark: "border-neutral-600 bg-black text-white hover:bg-neutral-800"
                },
                highlighted: {
                    true: "border-neutral-600 bg-linear-to-tl from-neutral-800 via-black via-35% to-neutral-950 hover:bg-none"
                },
                horizontal: {
                    true: "lg:flex-row"
                },
                size: {
                    medium: "",
                    small: "border-0 bg-transparent sm:border"
                }
            },
            compoundVariants: [{
                theme: "light",
                size: "small",
                class: "sm:bg-white"
            }, {
                theme: "dark",
                size: "small",
                class: "sm:bg-black"
            }],
            defaultVariants: {
                theme: "light"
            }
        }),
        s = a.forwardRef(({
            className: e,
            theme: r,
            highlighted: o,
            horizontal: i,
            size: a,
            ...s
        }, u) => (0, t.jsx)("div", {
            ref: u,
            "data-orientation": i ? "horizontal" : "vertical",
            className: (0, n.default)(l({
                theme: r,
                size: a,
                horizontal: i,
                highlighted: "dark" === r ? o : null
            }), e),
            ...s
        }));
    s.displayName = "CardBorder", e.s(["default", 0, s], 682129);
    var u = e.i(41158);
    let c = e => {
        let o, i, a, l = (0, r.c)(10),
            {
                children: s,
                href: c,
                className: d,
                onClick: f,
                size: p
            } = e,
            h = void 0 === p ? "medium" : p;
        if (l[0] !== s || l[1] !== d || l[2] !== c || l[3] !== f || l[4] !== h) {
            i = Symbol.for("react.early_return_sentinel");
            e: {
                let e = (0, n.default)("relative cursor-pointer scroll-smooth", "medium" === h && "h-fix min-h-256 basis-[40%] lg:min-h-256", d);
                if (c) {
                    i = (0, t.jsx)(u.default, {
                        href: c,
                        className: e,
                        children: s
                    });
                    break e
                }
                if (f) {
                    i = (0, t.jsx)("button", {
                        type: "button",
                        onClick: f,
                        className: e,
                        children: s
                    });
                    break e
                }
                o = (0, n.default)(e, "cursor-default")
            }
            l[0] = s, l[1] = d, l[2] = c, l[3] = f, l[4] = h, l[5] = o, l[6] = i
        } else o = l[5], i = l[6];
        return i !== Symbol.for("react.early_return_sentinel") ? i : (l[7] !== s || l[8] !== o ? (a = (0, t.jsx)("div", {
            className: o,
            children: s
        }), l[7] = s, l[8] = o, l[9] = a) : a = l[9], a)
    };
    e.s(["default", 0, c], 628710);
    let d = e => {
        let o, i, a, l = (0, r.c)(9),
            {
                title: s,
                href: c,
                className: d,
                size: f
            } = e,
            p = void 0 === f ? "medium" : f;
        return l[0] !== d || l[1] !== p ? (o = (0, n.default)({
            "heading-5-semi-bold": "small" === p
        }, {
            "heading-3-semi-bold": "medium" === p
        }, d), l[0] = d, l[1] = p, l[2] = o) : o = l[2], l[3] !== c || l[4] !== s ? (i = c ? (0, t.jsx)(u.default, {
            href: c,
            children: s
        }) : s, l[3] = c, l[4] = s, l[5] = i) : i = l[5], l[6] !== o || l[7] !== i ? (a = (0, t.jsx)("h3", {
            className: o,
            children: i
        }), l[6] = o, l[7] = i, l[8] = a) : a = l[8], a
    };
    e.s(["default", 0, d], 938936), e.i(664157);
    var f = e.i(271179);
    e.i(108399);
    var p = e.i(860231),
        h = e.i(126019);
    e.s([], 945210), e.s(["CardBorder", 0, s], 381234), e.s(["CardTitle", 0, d], 16951), e.s(["CardHeader", 0, c], 981047), e.s(["CardBody", 0, o], 276284), e.s(["CardFooter", 0, e => {
        let o, i, a = (0, r.c)(5),
            {
                children: l,
                isCardBodyCentered: s
            } = e,
            u = !(void 0 !== s && s) && "mt-auto";
        return a[0] !== u ? (o = (0, n.default)("flex w-full flex-col gap-16", u), a[0] = u, a[1] = o) : o = a[1], a[2] !== l || a[3] !== o ? (i = (0, t.jsx)("div", {
            className: o,
            children: l
        }), a[2] = l, a[3] = o, a[4] = i) : i = a[4], i
    }], 108113), e.s(["CardFreeShipping", 0, e => {
        let n, o, i, a, l = (0, r.c)(9),
            {
                theme: s
            } = e,
            {
                t: u
            } = (0, f.useTranslation)("common"),
            c = "dark" === s ? "white" : "black";
        return l[0] !== c ? (n = (0, t.jsx)(p.default, {
            color: c,
            name: "truck",
            size: 16
        }), l[0] = c, l[1] = n) : n = l[1], l[2] !== u ? (o = u("productCards.freeShipping"), l[2] = u, l[3] = o) : o = l[3], l[4] !== o ? (i = (0, t.jsx)("span", {
            className: "body-3",
            children: o
        }), l[4] = o, l[5] = i) : i = l[5], l[6] !== n || l[7] !== i ? (a = (0, t.jsxs)("div", {
            className: "flex items-center gap-4 justify-self-end",
            children: [n, i]
        }), l[6] = n, l[7] = i, l[8] = a) : a = l[8], a
    }], 236663), e.s(["CardImageWithRecover", 0, e => {
        let n, o, i, a = (0, r.c)(9),
            {
                currentVariant: l,
                productHandle: s,
                recoverCardImageUrl: u
            } = e,
            c = `comparison-${s}-picture`;
        return a[0] !== l.image.url || a[1] !== l.title || a[2] !== c ? (n = (0, t.jsx)(h.default, {
            src: l.image.url,
            alt: l.title,
            fill: !0,
            priority: !0,
            sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
            className: "z-10 -translate-x-56 object-contain md:-translate-x-24 lg:-translate-x-56 rtl:translate-x-56 md:rtl:translate-x-24 lg:rtl:translate-x-56",
            "data-cs-override-id": c
        }), a[0] = l.image.url, a[1] = l.title, a[2] = c, a[3] = n) : n = a[3], a[4] !== u ? (o = (0, t.jsx)(h.default, {
            src: u,
            alt: "",
            width: 200,
            height: 200,
            priority: !0,
            className: "relative mr-32 md:mr-48 lg:mr-64",
            "data-cs-override-id": "recover-picture"
        }), a[4] = u, a[5] = o) : o = a[5], a[6] !== n || a[7] !== o ? (i = (0, t.jsxs)("div", {
            className: "relative flex h-256 items-center justify-end md:h-256",
            children: [n, o]
        }), a[6] = n, a[7] = o, a[8] = i) : i = a[8], i
    }], 708235), e.s([], 313271), e.s(["default", () => v], 19101);
    var m = e.i(455108);
    let v = e => {
        let o, i, a = (0, r.c)(4),
            {
                theme: l
            } = e,
            s = "dark" === (void 0 === l ? "light" : l) ? "bg-neutral-600" : "bg-neutral-300";
        return a[0] !== s ? (o = (0, n.default)("h-px w-full shrink-0", s), a[0] = s, a[1] = o) : o = a[1], a[2] !== o ? (i = (0, t.jsx)(m.default.Section, {
            verticalSpacing: "none",
            children: (0, t.jsx)("div", {
                className: o
            })
        }), a[2] = o, a[3] = i) : i = a[3], i
    };
    e.s(["default", 0, e => {
        let o, i, a, l, s, u, c, d = (0, r.c)(13),
            {
                className: p
            } = e,
            {
                t: h
            } = (0, f.useTranslation)("common");
        return d[0] !== p ? (o = (0, n.default)("h-16 w-16 animate-spin fill-black text-gray-200", p), d[0] = p, d[1] = o) : o = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
        }), a = (0, t.jsx)("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
        }), d[2] = i, d[3] = a) : (i = d[2], a = d[3]), d[4] !== o ? (l = (0, t.jsxs)("svg", {
            "aria-hidden": "true",
            className: o,
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [i, a]
        }), d[4] = o, d[5] = l) : l = d[5], d[6] !== h ? (s = h("loading"), d[6] = h, d[7] = s) : s = d[7], d[8] !== s ? (u = (0, t.jsx)("span", {
            className: "sr-only",
            children: s
        }), d[8] = s, d[9] = u) : u = d[9], d[10] !== l || d[11] !== u ? (c = (0, t.jsxs)("div", {
            role: "status",
            "data-testid": "loading",
            className: "relative",
            children: [l, u]
        }), d[10] = l, d[11] = u, d[12] = c) : c = d[12], c
    }], 590149), e.s(["HudBox", 0, e => {
        let o, i, a = (0, r.c)(6),
            {
                className: l,
                children: s,
                theme: u
            } = e,
            c = "dark" === u ? "bg-white/5 text-white" : "bg-neutral-200/15 text-black";
        return a[0] !== l || a[1] !== c ? (o = (0, n.default)("flex transform flex-col gap-8 p-16 backdrop-blur hud-box-purple", c, l), a[0] = l, a[1] = c, a[2] = o) : o = a[2], a[3] !== s || a[4] !== o ? (i = (0, t.jsx)("div", {
            className: o,
            children: s
        }), a[3] = s, a[4] = o, a[5] = i) : i = a[5], i
    }], 642285), e.s(["HudBoxBasic", () => y], 394324);
    let y = e => {
        let n, o, i, a, l, s, u = (0, r.c)(12);
        return u[0] !== e ? ({
            title: i,
            description: n,
            ...o
        } = e, u[0] = e, u[1] = n, u[2] = o, u[3] = i) : (n = u[1], o = u[2], i = u[3]), u[4] !== i ? (a = (0, t.jsx)("h3", {
            className: "heading-4-semi-bold",
            children: i
        }), u[4] = i, u[5] = a) : a = u[5], u[6] !== n ? (l = (0, t.jsxs)("p", {
            children: [" ", n]
        }), u[6] = n, u[7] = l) : l = u[7], u[8] !== o || u[9] !== a || u[10] !== l ? (s = (0, t.jsxs)(m.default.HudBox, { ...o,
            children: [a, l]
        }), u[8] = o, u[9] = a, u[10] = l, u[11] = s) : s = u[11], s
    }
}, 698935, (e, t, r) => {
    "use strict";
    t.exports = e => {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }
}, 148075, (e, t, r) => {
    "use strict";
    var n, o, i, a, l, s = e.r(698935);
    r.BLOCKS = void 0, (n = r.BLOCKS || (r.BLOCKS = {})).DOCUMENT = "document", n.PARAGRAPH = "paragraph", n.HEADING_1 = "heading-1", n.HEADING_2 = "heading-2", n.HEADING_3 = "heading-3", n.HEADING_4 = "heading-4", n.HEADING_5 = "heading-5", n.HEADING_6 = "heading-6", n.OL_LIST = "ordered-list", n.UL_LIST = "unordered-list", n.LIST_ITEM = "list-item", n.HR = "hr", n.QUOTE = "blockquote", n.EMBEDDED_ENTRY = "embedded-entry-block", n.EMBEDDED_ASSET = "embedded-asset-block", n.EMBEDDED_RESOURCE = "embedded-resource-block", n.TABLE = "table", n.TABLE_ROW = "table-row", n.TABLE_CELL = "table-cell", n.TABLE_HEADER_CELL = "table-header-cell", r.INLINES = void 0, (o = r.INLINES || (r.INLINES = {})).ASSET_HYPERLINK = "asset-hyperlink", o.EMBEDDED_ENTRY = "embedded-entry-inline", o.EMBEDDED_RESOURCE = "embedded-resource-inline", o.ENTRY_HYPERLINK = "entry-hyperlink", o.HYPERLINK = "hyperlink", o.RESOURCE_HYPERLINK = "resource-hyperlink", r.MARKS = void 0, (i = r.MARKS || (r.MARKS = {})).BOLD = "bold", i.ITALIC = "italic", i.UNDERLINE = "underline", i.CODE = "code", i.SUPERSCRIPT = "superscript", i.SUBSCRIPT = "subscript", i.STRIKETHROUGH = "strikethrough";
    var u = function(e, t) {
        return (u = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        })(e, t)
    };

    function c(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
            this.constructor = e
        }
        u(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }

    function d(e, t, r) {
        if (r || 2 == arguments.length)
            for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
    }
    "function" == typeof SuppressedError && SuppressedError;
    var f = [r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE, r.BLOCKS.TABLE],
        p = [r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE],
        h = [r.BLOCKS.TABLE, r.BLOCKS.TABLE_ROW, r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL],
        m = [r.BLOCKS.HR, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE],
        v = ((a = {})[r.BLOCKS.OL_LIST] = [r.BLOCKS.LIST_ITEM], a[r.BLOCKS.UL_LIST] = [r.BLOCKS.LIST_ITEM], a[r.BLOCKS.LIST_ITEM] = p, a[r.BLOCKS.QUOTE] = [r.BLOCKS.PARAGRAPH], a[r.BLOCKS.TABLE] = [r.BLOCKS.TABLE_ROW], a[r.BLOCKS.TABLE_ROW] = [r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL], a[r.BLOCKS.TABLE_CELL] = [r.BLOCKS.PARAGRAPH, r.BLOCKS.UL_LIST, r.BLOCKS.OL_LIST], a[r.BLOCKS.TABLE_HEADER_CELL] = [r.BLOCKS.PARAGRAPH], a),
        y = [r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6],
        b = d([r.BLOCKS.PARAGRAPH], y, !0),
        g = [r.BLOCKS.DOCUMENT, r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.LIST_ITEM, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.INLINES.HYPERLINK, r.INLINES.ENTRY_HYPERLINK, r.INLINES.ASSET_HYPERLINK, r.INLINES.EMBEDDED_ENTRY, "text"],
        E = [r.MARKS.BOLD, r.MARKS.CODE, r.MARKS.ITALIC, r.MARKS.UNDERLINE],
        S = {
            nodeType: r.BLOCKS.DOCUMENT,
            data: {},
            content: [{
                nodeType: r.BLOCKS.PARAGRAPH,
                data: {},
                content: [{
                    nodeType: "text",
                    value: "",
                    marks: [],
                    data: {}
                }]
            }]
        };

    function x(e, t) {
        for (var r = 0, n = Object.keys(e); r < n.length; r++)
            if (t === e[n[r]]) return !0;
        return !1
    }
    var w = Object.freeze({
            __proto__: null,
            isBlock: function(e) {
                return x(r.BLOCKS, e.nodeType)
            },
            isInline: function(e) {
                return x(r.INLINES, e.nodeType)
            },
            isText: function(e) {
                return "text" === e.nodeType
            }
        }),
        C = function(e) {
            var t = e.path,
                r = e.property,
                n = e.typeName,
                o = e.value;
            return {
                details: 'The type of "'.concat(r, '" is incorrect, expected type: ').concat(n),
                name: "type",
                path: t.toArray(),
                type: n,
                value: o
            }
        },
        L = function(e) {
            var t = e.min,
                r = e.value;
            return {
                name: "size",
                min: t,
                path: e.path.toArray(),
                details: "Size must be at least ".concat(t),
                value: r
            }
        },
        R = function(e) {
            var t = e.max,
                r = e.value;
            return {
                name: "size",
                max: t,
                path: e.path.toArray(),
                details: "Size must be at most ".concat(t),
                value: r
            }
        },
        O = function(e) {
            var t = e.expected,
                r = e.value,
                n = e.path;
            return {
                details: "Value must be one of expected values",
                name: "in",
                expected: d([], t, !0).sort(),
                path: n.toArray(),
                value: r
            }
        },
        T = function(e) {
            var t = e.property,
                r = e.path;
            return {
                details: 'The property "'.concat(t, '" is not expected'),
                name: "unexpected",
                path: r.toArray()
            }
        },
        I = function(e) {
            var t = e.property,
                r = e.path;
            return {
                details: 'The property "'.concat(t, '" is required here'),
                name: "required",
                path: r.toArray()
            }
        },
        N = function() {
            function e(e, t) {
                var r = this;
                this.obj = e, this.path = t, this._errors = [], this.catch = function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    (e = r._errors).push.apply(e, t)
                }, this.exists = function(e) {
                    return e in r.obj || (r.catch(I({
                        property: e,
                        path: r.path.of(e)
                    })), !1)
                }, this.object = function(e) {
                    var t, n = e ? r.obj[e] : r.obj;
                    if (e && !r.exists(e)) return !1;
                    if (s(n)) return !0;
                    var o = e ? r.path.of(e) : r.path,
                        i = null != (t = null != e ? e : r.path.last()) ? t : "value";
                    return r.catch(C({
                        typeName: "Object",
                        property: i,
                        path: o,
                        value: n
                    })), !1
                }, this.string = function(e) {
                    var t = r.obj[e];
                    return (!e || !!r.exists(e)) && ("string" == typeof t || (r.catch(C({
                        typeName: "String",
                        property: e,
                        path: r.path.of(e),
                        value: t
                    })), !1))
                }, this.number = function(e, t) {
                    var n = r.obj[e];
                    return !!t && !(e in r.obj) || !!r.exists(e) && (!("number" != typeof n || Number.isNaN(n)) || (r.catch(C({
                        typeName: "Number",
                        property: e,
                        path: r.path.of(e),
                        value: n
                    })), !1))
                }, this.array = function(e) {
                    var t = r.obj[e];
                    return (!e || !!r.exists(e)) && (!!Array.isArray(t) || (r.catch(C({
                        typeName: "Array",
                        property: e,
                        path: r.path.of(e),
                        value: t
                    })), !1))
                }, this.enum = function(e, t) {
                    var n = r.obj[e];
                    return !!("string" == typeof n && t.includes(n)) || (r.catch(O({
                        expected: t,
                        value: n,
                        path: r.path.of(e)
                    })), !1)
                }, this.empty = function(e) {
                    if (!r.array(e)) return !1;
                    var t = r.obj[e];
                    return 0 === t.length || (r.catch(R({
                        max: 0,
                        value: t,
                        path: r.path.of(e)
                    })), !1)
                }, this.minLength = function(e, t) {
                    if (!r.array(e)) return !1;
                    var n = r.obj[e];
                    return n.length >= t || (r.catch(L({
                        min: t,
                        value: n,
                        path: r.path.of(e)
                    })), !1)
                }, this.noAdditionalProperties = function(e) {
                    var t = Object.keys(r.obj).sort().filter(function(t) {
                        return !e.includes(t)
                    });
                    return t.forEach(function(e) {
                        return r.catch(T({
                            property: e,
                            path: r.path.of(e)
                        }))
                    }), 0 === t.length
                }, this.each = function(e, t) {
                    if (r.array(e)) {
                        var n = r.obj[e],
                            o = !1;
                        n.forEach(function(n, i) {
                            if (!o) {
                                var a = t(n, r.path.of(e).of(i));
                                a.length > 0 && (o = !0), r.catch.apply(r, a)
                            }
                        })
                    }
                }
            }
            return Object.defineProperty(e.prototype, "errors", {
                get: function() {
                    var e = this,
                        t = function(e) {
                            return JSON.stringify({
                                details: e.details,
                                path: e.path
                            })
                        };
                    return this._errors.filter(function(r, n) {
                        return e._errors.findIndex(function(e) {
                            return t(r) === t(e)
                        }) === n
                    })
                },
                enumerable: !1,
                configurable: !0
            }), e
        }(),
        A = [],
        D = function() {
            function e(e, t) {
                this.contentRule = e, this.validateData = t
            }
            return e.prototype.assert = function(e, t) {
                var r, n, o = new N(e, t);
                if (!o.object()) return o.errors;
                o.noAdditionalProperties(["nodeType", "data", "content"]);
                var i = Array.isArray(this.contentRule) ? {
                        nodeTypes: this.contentRule
                    } : this.contentRule(e, t),
                    a = i.nodeTypes,
                    l = i.min,
                    s = void 0 === l ? 0 : l;
                if (0 === a.length && s > 0) throw Error("Invalid content rule. Cannot have enforce a 'min' of ".concat(s, " with no nodeTypes"));
                if (o.minLength("content", s), 0 === a.length ? o.empty("content") : o.each("content", function(e, t) {
                        var r = new N(e, t);
                        return r.object() && r.enum("nodeType", a), r.errors
                    }), o.object("data")) {
                    var u = null != (n = null == (r = this.validateData) ? void 0 : r.call(this, e.data, t.of("data"))) ? n : [];
                    o.catch.apply(o, u)
                }
                return o.errors
            }, e
        }(),
        _ = function(e) {
            function t(t, r) {
                var n = e.call(this, r, function(e, t) {
                    return n.assertLink(e, t)
                }) || this;
                return n.linkType = t, n.assertLink = function(e, t) {
                    var r = new N(e, t);
                    if (r.object("target")) {
                        var o = new N(e.target.sys, t.of("target").of("sys"));
                        o.object() && (o.enum("type", [n.type]), o.enum("linkType", [n.linkType]), "Link" === n.type ? (o.string("id"), o.noAdditionalProperties(["type", "linkType", "id"])) : "ResourceLink" === n.type && (o.string("urn"), o.noAdditionalProperties(["type", "linkType", "urn"]))), r.catch.apply(r, o.errors)
                    }
                    return r.noAdditionalProperties(["target"]), r.errors
                }, n.type = n.linkType.startsWith("Contentful:") ? "ResourceLink" : "Link", n
            }
            return c(t, e), t
        }(D),
        P = function(e) {
            function t() {
                var t = e.call(this, ["text"], function(e, r) {
                    return t.assertLink(e, r)
                }) || this;
                return t.assertLink = function(e, t) {
                    var r = new N(e, t);
                    return r.string("uri"), r.noAdditionalProperties(["uri"]), r.errors
                }, t
            }
            return c(t, e), t
        }(D),
        B = function(e, t) {
            return new D(e, t)
        },
        k = function(e, t) {
            return new _(e, t)
        },
        j = function e(t) {
            void 0 === t && (t = []);
            var r = this;
            this.path = t, this.of = function(t) {
                return new e(d(d([], r.path, !0), [t], !1))
            }, this.isRoot = function() {
                return 0 === r.path.length
            }, this.last = function() {
                return r.path[r.path.length - 1]
            }, this.toArray = function() {
                return r.path
            }
        },
        K = B(d(d([], Object.values(r.INLINES), !0), ["text"], !1).sort()),
        M = B([r.BLOCKS.LIST_ITEM]),
        H = k("Entry", A),
        F = B(function() {
            return {
                nodeTypes: [r.BLOCKS.PARAGRAPH],
                min: 1
            }
        }, function(e, t) {
            var r = new N(e, t);
            return r.noAdditionalProperties(["colspan", "rowspan"]), r.number("colspan", !0), r.number("rowspan", !0), r.errors
        }),
        z = ((l = {})[r.BLOCKS.DOCUMENT] = B(f), l[r.BLOCKS.PARAGRAPH] = K, l[r.BLOCKS.HEADING_1] = K, l[r.BLOCKS.HEADING_2] = K, l[r.BLOCKS.HEADING_3] = K, l[r.BLOCKS.HEADING_4] = K, l[r.BLOCKS.HEADING_5] = K, l[r.BLOCKS.HEADING_6] = K, l[r.BLOCKS.QUOTE] = B(v[r.BLOCKS.QUOTE]), l[r.BLOCKS.EMBEDDED_ENTRY] = H, l[r.BLOCKS.EMBEDDED_ASSET] = k("Asset", A), l[r.BLOCKS.EMBEDDED_RESOURCE] = k("Contentful:Entry", A), l[r.BLOCKS.HR] = B(A), l[r.BLOCKS.OL_LIST] = M, l[r.BLOCKS.UL_LIST] = M, l[r.BLOCKS.LIST_ITEM] = B(d([], p, !0).sort()), l[r.BLOCKS.TABLE] = B(function() {
            return {
                nodeTypes: [r.BLOCKS.TABLE_ROW],
                min: 1
            }
        }), l[r.BLOCKS.TABLE_ROW] = B(function() {
            return {
                nodeTypes: [r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL],
                min: 1
            }
        }), l[r.BLOCKS.TABLE_CELL] = F, l[r.BLOCKS.TABLE_HEADER_CELL] = F, l[r.INLINES.HYPERLINK] = new P, l[r.INLINES.EMBEDDED_ENTRY] = H, l[r.INLINES.EMBEDDED_RESOURCE] = k("Contentful:Entry", A), l[r.INLINES.ENTRY_HYPERLINK] = k("Entry", ["text"]), l[r.INLINES.ASSET_HYPERLINK] = k("Asset", ["text"]), l[r.INLINES.RESOURCE_HYPERLINK] = k("Contentful:Entry", ["text"]), l);
    r.CONTAINERS = v, r.EMPTY_DOCUMENT = S, r.HEADINGS = y, r.LIST_ITEM_BLOCKS = p, r.TABLE_BLOCKS = h, r.TEXT_CONTAINERS = b, r.TOP_LEVEL_BLOCKS = f, r.V1_MARKS = E, r.V1_NODE_TYPES = g, r.VOID_BLOCKS = m, r.helpers = w, r.validateRichTextDocument = function(e) {
        var t = new j,
            n = new N(e, t);
        return (n.object() && n.enum("nodeType", [r.BLOCKS.DOCUMENT]), n.errors.length > 0) ? n.errors : function e(t, r) {
            if ("text" === t.nodeType) {
                var n;
                return (n = new N(t, r)).object() && (n.noAdditionalProperties(["nodeType", "data", "value", "marks"]), n.object("data"), n.each("marks", function(e, t) {
                    var r = new N(e, t);
                    return r.object() && r.string("type"), r.errors
                }), n.string("value")), n.errors
            }
            var o = z[t.nodeType].assert(t, r);
            if (o.length > 0) return o;
            var i = new N(t, r);
            return i.each("content", function(t, r) {
                return e(t, r)
            }), i.errors
        }(e, t)
    }
}, 479668, (e, t, r) => {
    "use strict";
    var n, o, i = e.r(191788),
        a = e.r(148075),
        l = function() {
            return (l = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };
    "function" == typeof SuppressedError && SuppressedError;
    var s = ((n = {})[a.BLOCKS.DOCUMENT] = function(e, t) {
            return t
        }, n[a.BLOCKS.PARAGRAPH] = function(e, t) {
            return i.createElement("p", null, t)
        }, n[a.BLOCKS.HEADING_1] = function(e, t) {
            return i.createElement("h1", null, t)
        }, n[a.BLOCKS.HEADING_2] = function(e, t) {
            return i.createElement("h2", null, t)
        }, n[a.BLOCKS.HEADING_3] = function(e, t) {
            return i.createElement("h3", null, t)
        }, n[a.BLOCKS.HEADING_4] = function(e, t) {
            return i.createElement("h4", null, t)
        }, n[a.BLOCKS.HEADING_5] = function(e, t) {
            return i.createElement("h5", null, t)
        }, n[a.BLOCKS.HEADING_6] = function(e, t) {
            return i.createElement("h6", null, t)
        }, n[a.BLOCKS.EMBEDDED_ENTRY] = function(e, t) {
            return i.createElement("div", null, t)
        }, n[a.BLOCKS.EMBEDDED_RESOURCE] = function(e, t) {
            return i.createElement("div", null, t)
        }, n[a.BLOCKS.UL_LIST] = function(e, t) {
            return i.createElement("ul", null, t)
        }, n[a.BLOCKS.OL_LIST] = function(e, t) {
            return i.createElement("ol", null, t)
        }, n[a.BLOCKS.LIST_ITEM] = function(e, t) {
            return i.createElement("li", null, t)
        }, n[a.BLOCKS.QUOTE] = function(e, t) {
            return i.createElement("blockquote", null, t)
        }, n[a.BLOCKS.HR] = function() {
            return i.createElement("hr", null)
        }, n[a.BLOCKS.TABLE] = function(e, t) {
            return i.createElement("table", null, i.createElement("tbody", null, t))
        }, n[a.BLOCKS.TABLE_ROW] = function(e, t) {
            return i.createElement("tr", null, t)
        }, n[a.BLOCKS.TABLE_HEADER_CELL] = function(e, t) {
            return i.createElement("th", null, t)
        }, n[a.BLOCKS.TABLE_CELL] = function(e, t) {
            return i.createElement("td", null, t)
        }, n[a.INLINES.ASSET_HYPERLINK] = function(e) {
            return c(a.INLINES.ASSET_HYPERLINK, e)
        }, n[a.INLINES.ENTRY_HYPERLINK] = function(e) {
            return c(a.INLINES.ENTRY_HYPERLINK, e)
        }, n[a.INLINES.RESOURCE_HYPERLINK] = function(e) {
            return d(a.INLINES.RESOURCE_HYPERLINK, e)
        }, n[a.INLINES.EMBEDDED_ENTRY] = function(e) {
            return c(a.INLINES.EMBEDDED_ENTRY, e)
        }, n[a.INLINES.EMBEDDED_RESOURCE] = function(e, t) {
            return d(a.INLINES.EMBEDDED_RESOURCE, e)
        }, n[a.INLINES.HYPERLINK] = function(e, t) {
            return i.createElement("a", {
                href: e.data.uri
            }, t)
        }, n),
        u = ((o = {})[a.MARKS.BOLD] = function(e) {
            return i.createElement("b", null, e)
        }, o[a.MARKS.ITALIC] = function(e) {
            return i.createElement("i", null, e)
        }, o[a.MARKS.UNDERLINE] = function(e) {
            return i.createElement("u", null, e)
        }, o[a.MARKS.CODE] = function(e) {
            return i.createElement("code", null, e)
        }, o[a.MARKS.SUPERSCRIPT] = function(e) {
            return i.createElement("sup", null, e)
        }, o[a.MARKS.SUBSCRIPT] = function(e) {
            return i.createElement("sub", null, e)
        }, o[a.MARKS.STRIKETHROUGH] = function(e) {
            return i.createElement("s", null, e)
        }, o);

    function c(e, t) {
        return i.createElement("span", {
            key: t.data.target.sys.id
        }, "type: ", t.nodeType, " id: ", t.data.target.sys.id)
    }

    function d(e, t) {
        return i.createElement("span", {
            key: t.data.target.sys.urn
        }, "type: ", t.nodeType, " urn: ", t.data.target.sys.urn)
    }
    r.documentToReactComponents = function(e, t) {
        return (void 0 === t && (t = {}), e) ? function e(t, r) {
            var n = r.renderNode,
                o = r.renderMark,
                l = r.renderText,
                s = r.preserveWhitespace;
            if (a.helpers.isText(t)) {
                var u = l ? l(t.value) : t.value;
                if (s && !l) {
                    var c = (u = u.replace(/ {2,}/g, function(e) {
                            return " ".repeat(e.length)
                        })).split("\n"),
                        d = [];
                    c.forEach(function(e, t) {
                        d.push(e), t !== c.length - 1 && d.push(i.createElement("br", null))
                    }), u = d
                }
                return t.marks.reduce(function(e, t) {
                    return o[t.type] ? o[t.type](e) : e
                }, u)
            }
            var f, p = (f = t.content, f.map(function(t, n) {
                var o;
                return o = e(t, r), i.isValidElement(o) && null === o.key ? i.cloneElement(o, {
                    key: n
                }) : o
            }));
            return t.nodeType && n[t.nodeType] ? n[t.nodeType](t, p) : i.createElement(i.Fragment, null, p)
        }(e, {
            renderNode: l(l({}, s), t.renderNode),
            renderMark: l(l({}, u), t.renderMark),
            renderText: t.renderText,
            preserveWhitespace: t.preserveWhitespace
        }) : null
    }
}, 265890, e => {
    "use strict";
    e.s(["normalizeRichTextContent", 0, function(e) {
        let t, r, n;
        if (!e) return null;
        if ("json" in e) {
            if (!e.json ? .nodeType) return null;
            if (t = e.json, e.links ? .entries) {
                if (r = {}, e.links.entries.block)
                    for (let t of e.links.entries.block) t && (r[t.sys.id] = t);
                if (e.links.entries.inline)
                    for (let t of e.links.entries.inline) t && (r[t.sys.id] = t)
            }
            if (e.links ? .assets ? .block)
                for (let t of (n = {}, e.links.assets.block)) t && (n[t.sys.id] = t)
        } else {
            if (!e.nodeType || !e.data || !e.content) return null;
            t = e
        }
        return {
            json: t,
            ...r && {
                entryMap: r
            },
            ...n && {
                assetMap: n
            }
        }
    }])
}, 286941, 126762, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        n = e.i(479668),
        o = e.i(495854);
    e.i(350461);
    var i = e.i(148075),
        a = e.i(126019),
        l = e.i(265890);
    e.i(108399);
    var s = e.i(860231),
        u = e.i(44073);
    let c = "shop.ledger.com",
        d = (e, r, n, i) => {
            if (!n) return r;
            let a = n[e.data.target.sys.id];
            if (a ? .__typename === "Icon") return (0, t.jsx)("span", {
                className: "me-2 inline-block shrink-0 align-middle",
                children: (0, t.jsx)(s.default, {
                    name: a.identifier,
                    size: i ? .embeddedIconSize ? ? 24
                })
            });
            if (a ? .__typename === "BlockRichText") {
                let e = (0, l.normalizeRichTextContent)(a.text);
                if (e && i ? .renderBlockRichText) {
                    let r = a.isPadding ? "p-12 md:px-16" : "",
                        n = a.isBackgroundColour ? "rounded-xs bg-neutral-50" : "";
                    return (0, t.jsx)("div", {
                        className: (0, o.default)(n, r, "[&>.rich-text>p:first-of-type]:mb-4"),
                        children: i.renderBlockRichText(e, {
                            theme: i.theme,
                            embeddedIconSize: i.embeddedIconSize,
                            embeddedAssetSize: i.embeddedAssetSize,
                            insideBlockRichTextTypography: i.insideBlockRichTextTypography,
                            tagSize: i.tagSize
                        })
                    })
                }
                return null
            }
            return r
        },
        f = e => {
            let l, s, p, h, m = (0, r.c)(22),
                {
                    content: v,
                    className: y,
                    itemProp: b,
                    openLinkInNewTab: g,
                    callToAction: E,
                    customRenderers: S,
                    isInsideBlockRichText: x,
                    theme: w,
                    embeddedIconSize: C,
                    embeddedAssetSize: L,
                    insideBlockRichTextTypography: R,
                    tagSize: O
                } = e,
                T = void 0 !== g && g,
                I = void 0 !== x && x,
                N = void 0 === w ? "light" : w,
                A = void 0 === C ? 24 : C,
                D = void 0 === L ? 32 : L,
                _ = void 0 === R ? "body" : R,
                P = void 0 === O ? "medium" : O,
                {
                    json: B,
                    entryMap: k,
                    assetMap: j
                } = v;
            m[0] !== P ? (l = (e, r) => (0, t.jsx)(f, {
                content: e,
                isInsideBlockRichText: !0,
                theme: r.theme,
                embeddedIconSize: r.embeddedIconSize,
                embeddedAssetSize: r.embeddedAssetSize,
                insideBlockRichTextTypography: r.insideBlockRichTextTypography,
                tagSize: P
            }), m[0] = P, m[1] = l) : l = m[1];
            let K = l;
            return m[2] !== y ? (s = (0, o.default)("rich-text", y), m[2] = y, m[3] = s) : s = m[3], m[4] !== j || m[5] !== E || m[6] !== S || m[7] !== D || m[8] !== A || m[9] !== k || m[10] !== _ || m[11] !== I || m[12] !== B || m[13] !== T || m[14] !== K || m[15] !== P || m[16] !== N ? (p = (0, n.documentToReactComponents)(B, (({
                openLinkInNewTab: e,
                callToAction: r,
                entryMap: n,
                assetMap: l,
                customRenderers: s,
                isInsideBlockRichText: f,
                theme: p,
                embeddedIconSize: h = 24,
                embeddedAssetSize: m = 32,
                insideBlockRichTextTypography: v = "body",
                renderBlockRichText: y,
                tagSize: b = "medium"
            }) => ({
                renderNode: {
                    [i.BLOCKS.PARAGRAPH]: (e, r) => {
                        if (!r || "string" == typeof r && "" === r.trim() || Array.isArray(r) && r.every(e => !e || "string" == typeof e && "" === e.trim())) return null;
                        let n = (0, o.default)("my-0", "caption" === v ? "body-3 pr-1" : "body-1 pr-6");
                        return (0, t.jsx)("p", {
                            className: (0, o.default)(!f && "mb-16 whitespace-pre-line", f && n),
                            children: r
                        })
                    },
                    [i.BLOCKS.HEADING_4]: (e, r) => (0, t.jsx)("h4", {
                        className: (0, o.default)(f && "mb-16"),
                        children: r
                    }),
                    [i.BLOCKS.HEADING_5]: (e, r) => (0, t.jsx)("h5", {
                        className: (0, o.default)(f && "mb-16"),
                        children: r
                    }),
                    [i.BLOCKS.HEADING_6]: (e, r) => (0, t.jsx)("h6", {
                        className: (0, o.default)(f && "mb-16"),
                        children: r
                    }),
                    [i.BLOCKS.UL_LIST]: (e, r) => (0, t.jsx)("ul", {
                        className: (0, o.default)(!f && "rich-text-p:m-0", f && "flex list-none flex-col gap-4 ps-0 [&_p]:flex [&_p]:items-center [&_p]:gap-8"),
                        children: r
                    }),
                    [i.BLOCKS.OL_LIST]: (e, r) => (0, t.jsx)("ol", {
                        className: (0, o.default)(!f && "mt-0", f && "mt-0 flex list-none flex-col gap-4 ps-0"),
                        children: r
                    }),
                    [i.BLOCKS.LIST_ITEM]: (e, r) => (0, t.jsx)("li", {
                        className: (0, o.default)(f && "body-3 md:body-1 mt-0 mb-0 flex items-center gap-8 ps-0"),
                        children: r
                    }),
                    [i.BLOCKS.QUOTE]: (e, r) => f ? (0, t.jsx)(u.default, {
                        label: r,
                        variant: "purple",
                        size: b
                    }) : (0, t.jsx)("blockquote", {
                        children: r
                    }),
                    [i.BLOCKS.EMBEDDED_ENTRY]: (e, t) => d(e, t, n, {
                        embeddedIconSize: h,
                        embeddedAssetSize: m,
                        insideBlockRichTextTypography: v,
                        theme: p,
                        renderBlockRichText: y,
                        tagSize: b
                    }),
                    [i.BLOCKS.EMBEDDED_ASSET]: e => {
                        if (!l) return null;
                        let r = l[e.data.target.sys.id];
                        return r ? .url ? (0, t.jsx)(a.default, {
                            src: r.url,
                            alt: r.description ? ? "",
                            width: m,
                            height: m,
                            className: "mt-0 mb-0 inline-block max-h-32 align-middle"
                        }) : null
                    },
                    [i.INLINES.EMBEDDED_ENTRY]: (e, t) => d(e, t, n, {
                        embeddedIconSize: h,
                        embeddedAssetSize: m,
                        insideBlockRichTextTypography: v,
                        theme: p,
                        renderBlockRichText: y,
                        tagSize: b
                    }),
                    [i.INLINES.HYPERLINK]: (n, i) => {
                        let a = n.data.uri,
                            l = c && !a.includes(c),
                            s = (0, o.default)("underline", "dark" === p ? "text-white" : "text-black");
                        return r && a.includes(r.href) ? (0, t.jsx)("a", {
                            "data-cs-override-id": r.href,
                            onClick: r.function,
                            className: s,
                            children: i
                        }) : l || e ? (0, t.jsx)("a", {
                            href: a,
                            rel: "noopener",
                            target: "_blank",
                            className: s,
                            children: i
                        }) : (0, t.jsx)("a", {
                            href: a,
                            className: s,
                            children: i
                        })
                    },
                    ...s
                }
            }))({
                openLinkInNewTab: T,
                callToAction: E,
                entryMap: k,
                assetMap: j,
                customRenderers: S,
                isInsideBlockRichText: I,
                theme: N,
                embeddedIconSize: A,
                embeddedAssetSize: D,
                insideBlockRichTextTypography: _,
                renderBlockRichText: K,
                tagSize: P
            })), m[4] = j, m[5] = E, m[6] = S, m[7] = D, m[8] = A, m[9] = k, m[10] = _, m[11] = I, m[12] = B, m[13] = T, m[14] = K, m[15] = P, m[16] = N, m[17] = p) : p = m[17], m[18] !== b || m[19] !== p || m[20] !== s ? (h = (0, t.jsx)("div", {
                className: s,
                itemProp: b,
                "data-testid": "rich-text",
                children: p
            }), m[18] = b, m[19] = p, m[20] = s, m[21] = h) : h = m[21], h
        };
    e.s(["default", 0, f], 126762), e.s([], 286941)
}, 455108, 671185, 479293, 357006, 352162, 724537, 674534, 998657, 64899, 776833, 64592, 55037, 593427, 349577, 189280, 865823, 993953, 616066, 335536, 722846, e => {
    "use strict";
    let t, r, n, o;
    e.s(["default", () => nj], 455108), e.i(214495);
    var i, a, l, s, u, c, d, f, p = e.i(744295),
        h = e.i(44073);
    e.i(945210);
    var m = e.i(381234),
        v = e.i(16951),
        y = e.i(981047),
        b = e.i(276284),
        g = e.i(108113),
        E = e.i(236663),
        S = e.i(708235);
    e.i(313271);
    var x = e.i(19101),
        w = e.i(590149),
        C = e.i(642285),
        L = e.i(394324),
        R = e.i(391398),
        O = e.i(261576);
    e.i(286941);
    var T = e.i(126762),
        I = e.i(495854),
        N = e.i(191788),
        A = e.i(730943);

    function D(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
    }

    function _(e, t, {
        checkForDefaultPrevented: r = !0
    } = {}) {
        return function(n) {
            if (e ? .(n), !1 === r || !n.defaultPrevented) return t ? .(n)
        }
    }

    function P(e, t = []) {
        let r = [],
            n = () => {
                let t = r.map(e => N.createContext(e));
                return function(r) {
                    let n = r ? .[e] || t;
                    return N.useMemo(() => ({
                        [`__scope${e}`]: { ...r,
                            [e]: n
                        }
                    }), [r, n])
                }
            };
        return n.scopeName = e, [function(t, n) {
            let o = N.createContext(n),
                i = r.length;
            r = [...r, n];
            let a = t => {
                let {
                    scope: r,
                    children: n,
                    ...a
                } = t, l = r ? .[e] ? .[i] || o, s = N.useMemo(() => a, Object.values(a));
                return (0, R.jsx)(l.Provider, {
                    value: s,
                    children: n
                })
            };
            return a.displayName = t + "Provider", [a, function(r, a) {
                let l = a ? .[e] ? .[i] || o,
                    s = N.useContext(l);
                if (s) return s;
                if (void 0 !== n) return n;
                throw Error(`\`${r}\` must be used within \`${t}\``)
            }]
        }, function(...e) {
            let t = e[0];
            if (1 === e.length) return t;
            let r = () => {
                let r = e.map(e => ({
                    useScope: e(),
                    scopeName: e.scopeName
                }));
                return function(e) {
                    let n = r.reduce((t, {
                        useScope: r,
                        scopeName: n
                    }) => {
                        let o = r(e)[`__scope${n}`];
                        return { ...t,
                            ...o
                        }
                    }, {});
                    return N.useMemo(() => ({
                        [`__scope${t.scopeName}`]: n
                    }), [n])
                }
            };
            return r.scopeName = t.scopeName, r
        }(n, ...t)]
    }

    function B(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function k(...e) {
        return t => {
            let r = !1,
                n = e.map(e => {
                    let n = B(e, t);
                    return r || "function" != typeof n || (r = !0), n
                });
            if (r) return () => {
                for (let t = 0; t < n.length; t++) {
                    let r = n[t];
                    "function" == typeof r ? r() : B(e[t], null)
                }
            }
        }
    }

    function j(...e) {
        return N.useCallback(k(...e), e)
    }

    function K(e) {
        var t;
        let r, n = (t = e, (r = N.forwardRef((e, t) => {
                let {
                    children: r,
                    ...n
                } = e;
                if (N.isValidElement(r)) {
                    var o;
                    let e, i, a = (o = r, (i = (e = Object.getOwnPropertyDescriptor(o.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? o.ref : (i = (e = Object.getOwnPropertyDescriptor(o, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? o.props.ref : o.props.ref || o.ref),
                        l = function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let o = e[n],
                                    i = t[n];
                                /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                    let t = i(...e);
                                    return o(...e), t
                                } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                    ...i
                                } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(n, r.props);
                    return r.type !== N.Fragment && (l.ref = t ? k(t, a) : a), N.cloneElement(r, l)
                }
                return N.Children.count(r) > 1 ? N.Children.only(null) : null
            })).displayName = `${t}.SlotClone`, r),
            o = N.forwardRef((e, t) => {
                let {
                    children: r,
                    ...o
                } = e, i = N.Children.toArray(r), a = i.find(H);
                if (a) {
                    let e = a.props.children,
                        r = i.map(t => t !== a ? t : N.Children.count(e) > 1 ? N.Children.only(null) : N.isValidElement(e) ? e.props.children : null);
                    return (0, R.jsx)(n, { ...o,
                        ref: t,
                        children: N.isValidElement(e) ? N.cloneElement(e, void 0, r) : null
                    })
                }
                return (0, R.jsx)(n, { ...o,
                    ref: t,
                    children: r
                })
            });
        return o.displayName = `${e}.Slot`, o
    }
    "u" > typeof window && window.document && window.document.createElement, e.s(["composeEventHandlers", 0, _], 671185), e.s(["createContextScope", 0, P], 479293), e.s(["composeRefs", 0, k, "useComposedRefs", 0, j], 357006);
    var M = Symbol("radix.slottable");

    function H(e) {
        return N.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === M
    }

    function F(e) {
        let t = e + "CollectionProvider",
            [r, n] = P(t),
            [o, i] = r(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            }),
            a = e => {
                let {
                    scope: t,
                    children: r
                } = e, n = N.default.useRef(null), i = N.default.useRef(new Map).current;
                return (0, R.jsx)(o, {
                    scope: t,
                    itemMap: i,
                    collectionRef: n,
                    children: r
                })
            };
        a.displayName = t;
        let l = e + "CollectionSlot",
            s = K(l),
            u = N.default.forwardRef((e, t) => {
                let {
                    scope: r,
                    children: n
                } = e, o = j(t, i(l, r).collectionRef);
                return (0, R.jsx)(s, {
                    ref: o,
                    children: n
                })
            });
        u.displayName = l;
        let c = e + "CollectionItemSlot",
            d = "data-radix-collection-item",
            f = K(c),
            p = N.default.forwardRef((e, t) => {
                let {
                    scope: r,
                    children: n,
                    ...o
                } = e, a = N.default.useRef(null), l = j(t, a), s = i(c, r);
                return N.default.useEffect(() => (s.itemMap.set(a, {
                    ref: a,
                    ...o
                }), () => void s.itemMap.delete(a))), (0, R.jsx)(f, { ...{
                        [d]: ""
                    },
                    ref: l,
                    children: n
                })
            });
        return p.displayName = c, [{
            Provider: a,
            Slot: u,
            ItemSlot: p
        }, function(t) {
            let r = i(e + "CollectionConsumer", t);
            return N.default.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${d}]`));
                return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
            }, [r.collectionRef, r.itemMap])
        }, n]
    }
    var z = new WeakMap;

    function U(e, t) {
        var r, n;
        let o, i, a;
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let l = (r = e, n = t, o = r.length, (a = (i = W(n)) >= 0 ? i : o + i) < 0 || a >= o ? -1 : a);
        return -1 === l ? void 0 : e[l]
    }

    function W(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
    }(class e extends Map {#
        e;
        constructor(e) {
            super(e), this.#e = [...super.keys()], z.set(this, !0)
        }
        set(e, t) {
            return z.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
        }
        insert(e, t, r) {
            let n, o = this.has(t),
                i = this.#e.length,
                a = W(e),
                l = a >= 0 ? a : i + a,
                s = l < 0 || l >= i ? -1 : l;
            if (s === this.size || o && s === this.size - 1 || -1 === s) return this.set(t, r), this;
            let u = this.size + +!o;
            a < 0 && l++;
            let c = [...this.#e],
                d = !1;
            for (let e = l; e < u; e++)
                if (l === e) {
                    let i = c[e];
                    c[e] === t && (i = c[e + 1]), o && this.delete(t), n = this.get(i), this.set(t, r)
                } else {
                    d || c[e - 1] !== t || (d = !0);
                    let r = c[d ? e : e - 1],
                        o = n;
                    n = this.get(r), this.delete(r), this.set(r, o)
                }
            return this
        }
        with(t, r, n) {
            let o = new e(this);
            return o.insert(t, r, n), o
        }
        before(e) {
            let t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
        }
        setBefore(e, t, r) {
            let n = this.#e.indexOf(e);
            return -1 === n ? this : this.insert(n, t, r)
        }
        after(e) {
            let t = this.#e.indexOf(e);
            if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t)
        }
        setAfter(e, t, r) {
            let n = this.#e.indexOf(e);
            return -1 === n ? this : this.insert(n + 1, t, r)
        }
        first() {
            return this.entryAt(0)
        }
        last() {
            return this.entryAt(-1)
        }
        clear() {
            return this.#e = [], super.clear()
        }
        delete(e) {
            let t = super.delete(e);
            return t && this.#e.splice(this.#e.indexOf(e), 1), t
        }
        deleteAt(e) {
            let t = this.keyAt(e);
            return void 0 !== t && this.delete(t)
        }
        at(e) {
            let t = U(this.#e, e);
            if (void 0 !== t) return this.get(t)
        }
        entryAt(e) {
            let t = U(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
        }
        indexOf(e) {
            return this.#e.indexOf(e)
        }
        keyAt(e) {
            return U(this.#e, e)
        }
        from(e, t) {
            let r = this.indexOf(e);
            if (-1 === r) return;
            let n = r + t;
            return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
        }
        keyFrom(e, t) {
            let r = this.indexOf(e);
            if (-1 === r) return;
            let n = r + t;
            return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
        }
        find(e, t) {
            let r = 0;
            for (let n of this) {
                if (Reflect.apply(e, t, [n, r, this])) return n;
                r++
            }
        }
        findIndex(e, t) {
            let r = 0;
            for (let n of this) {
                if (Reflect.apply(e, t, [n, r, this])) return r;
                r++
            }
            return -1
        }
        filter(t, r) {
            let n = [],
                o = 0;
            for (let e of this) Reflect.apply(t, r, [e, o, this]) && n.push(e), o++;
            return new e(n)
        }
        map(t, r) {
            let n = [],
                o = 0;
            for (let e of this) n.push([e[0], Reflect.apply(t, r, [e, o, this])]), o++;
            return new e(n)
        }
        reduce(...e) {
            let [t, r] = e, n = 0, o = r ? ? this.at(0);
            for (let r of this) o = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [o, r, n, this]), n++;
            return o
        }
        reduceRight(...e) {
            let [t, r] = e, n = r ? ? this.at(-1);
            for (let r = this.size - 1; r >= 0; r--) {
                let o = this.at(r);
                n = r === this.size - 1 && 1 === e.length ? o : Reflect.apply(t, this, [n, o, r, this])
            }
            return n
        }
        toSorted(t) {
            return new e([...this.entries()].sort(t))
        }
        toReversed() {
            let t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
                let r = this.keyAt(e),
                    n = this.get(r);
                t.set(r, n)
            }
            return t
        }
        toSpliced(...t) {
            let r = [...this.entries()];
            return r.splice(...t), new e(r)
        }
        slice(t, r) {
            let n = new e,
                o = this.size - 1;
            if (void 0 === t) return n;
            t < 0 && (t += this.size), void 0 !== r && r > 0 && (o = r - 1);
            for (let e = t; e <= o; e++) {
                let t = this.keyAt(e),
                    r = this.get(t);
                n.set(t, r)
            }
            return n
        }
        every(e, t) {
            let r = 0;
            for (let n of this) {
                if (!Reflect.apply(e, t, [n, r, this])) return !1;
                r++
            }
            return !0
        }
        some(e, t) {
            let r = 0;
            for (let n of this) {
                if (Reflect.apply(e, t, [n, r, this])) return !0;
                r++
            }
            return !1
        }
    }), e.s(["createCollection", 0, F], 352162);
    var G = N.createContext(void 0);

    function Y(e) {
        let t = N.useContext(G);
        return e || t || "ltr"
    }
    e.s(["useDirection", 0, Y], 724537);
    var V = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        let r = K(`Primitive.${t}`),
            n = N.forwardRef((e, n) => {
                let {
                    asChild: o,
                    ...i
                } = e;
                return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, R.jsx)(o ? r : t, { ...i,
                    ref: n
                })
            });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

    function $(e, t) {
        e && A.flushSync(() => e.dispatchEvent(t))
    }

    function X(e) {
        let t = N.useRef(e);
        return N.useEffect(() => {
            t.current = e
        }), N.useMemo(() => (...e) => t.current ? .(...e), [])
    }
    e.s(["Primitive", 0, V, "dispatchDiscreteCustomEvent", 0, $], 674534), e.s(["useCallbackRef", 0, X], 998657);
    var q = "dismissableLayer.update",
        Q = N.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        }),
        Z = N.forwardRef((e, t) => {
            let {
                disableOutsidePointerEvents: r = !1,
                onEscapeKeyDown: n,
                onPointerDownOutside: o,
                onFocusOutside: i,
                onInteractOutside: a,
                onDismiss: l,
                ...s
            } = e, u = N.useContext(Q), [c, f] = N.useState(null), p = c ? .ownerDocument ? ? globalThis ? .document, [, h] = N.useState({}), m = j(t, e => f(e)), v = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(y), g = c ? v.indexOf(c) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, S = g >= b, x = function(e, t = globalThis ? .document) {
                let r = X(e),
                    n = N.useRef(!1),
                    o = N.useRef(() => {});
                return N.useEffect(() => {
                    let e = e => {
                            if (e.target && !n.current) {
                                let n = function() {
                                        ee("dismissableLayer.pointerDownOutside", r, i, {
                                            discrete: !0
                                        })
                                    },
                                    i = {
                                        originalEvent: e
                                    };
                                "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                                    once: !0
                                })) : n()
                            } else t.removeEventListener("click", o.current);
                            n.current = !1
                        },
                        i = window.setTimeout(() => {
                            t.addEventListener("pointerdown", e)
                        }, 0);
                    return () => {
                        window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                    }
                }, [t, r]), {
                    onPointerDownCapture: () => n.current = !0
                }
            }(e => {
                let t = e.target,
                    r = [...u.branches].some(e => e.contains(t));
                S && !r && (o ? .(e), a ? .(e), e.defaultPrevented || l ? .())
            }, p), w = function(e, t = globalThis ? .document) {
                let r = X(e),
                    n = N.useRef(!1);
                return N.useEffect(() => {
                    let e = e => {
                        e.target && !n.current && ee("dismissableLayer.focusOutside", r, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    };
                    return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                }, [t, r]), {
                    onFocusCapture: () => n.current = !0,
                    onBlurCapture: () => n.current = !1
                }
            }(e => {
                let t = e.target;
                ![...u.branches].some(e => e.contains(t)) && (i ? .(e), a ? .(e), e.defaultPrevented || l ? .())
            }, p);
            return ! function(e, t = globalThis ? .document) {
                let r = X(e);
                N.useEffect(() => {
                    let e = e => {
                        "Escape" === e.key && r(e)
                    };
                    return t.addEventListener("keydown", e, {
                        capture: !0
                    }), () => t.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }, [r, t])
            }(e => {
                g === u.layers.size - 1 && (n ? .(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
            }, p), N.useEffect(() => {
                if (c) return r && (0 === u.layersWithOutsidePointerEventsDisabled.size && (d = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), J(), () => {
                    r && 1 === u.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = d)
                }
            }, [c, p, r, u]), N.useEffect(() => () => {
                c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), J())
            }, [c, u]), N.useEffect(() => {
                let e = () => h({});
                return document.addEventListener(q, e), () => document.removeEventListener(q, e)
            }, []), (0, R.jsx)(V.div, { ...s,
                ref: m,
                style: {
                    pointerEvents: E ? S ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: _(e.onFocusCapture, w.onFocusCapture),
                onBlurCapture: _(e.onBlurCapture, w.onBlurCapture),
                onPointerDownCapture: _(e.onPointerDownCapture, x.onPointerDownCapture)
            })
        });

    function J() {
        let e = new CustomEvent(q);
        document.dispatchEvent(e)
    }

    function ee(e, t, r, {
        discrete: n
    }) {
        let o = r.originalEvent.target,
            i = new CustomEvent(e, {
                bubbles: !1,
                cancelable: !0,
                detail: r
            });
        t && o.addEventListener(e, t, {
            once: !0
        }), n ? $(o, i) : o.dispatchEvent(i)
    }
    Z.displayName = "DismissableLayer", N.forwardRef((e, t) => {
        let r = N.useContext(Q),
            n = N.useRef(null),
            o = j(t, n);
        return N.useEffect(() => {
            let e = n.current;
            if (e) return r.branches.add(e), () => {
                r.branches.delete(e)
            }
        }, [r.branches]), (0, R.jsx)(V.div, { ...e,
            ref: o
        })
    }).displayName = "DismissableLayerBranch", e.s(["DismissableLayer", 0, Z], 64899);
    var et = 0;

    function er() {
        let e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
    }
    var en = "focusScope.autoFocusOnMount",
        eo = "focusScope.autoFocusOnUnmount",
        ei = {
            bubbles: !1,
            cancelable: !0
        },
        ea = N.forwardRef((e, t) => {
            let {
                loop: r = !1,
                trapped: n = !1,
                onMountAutoFocus: o,
                onUnmountAutoFocus: i,
                ...a
            } = e, [l, s] = N.useState(null), u = X(o), c = X(i), d = N.useRef(null), f = j(t, e => s(e)), p = N.useRef({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            N.useEffect(() => {
                if (n) {
                    let e = function(e) {
                            if (p.paused || !l) return;
                            let t = e.target;
                            l.contains(t) ? d.current = t : eu(d.current, {
                                select: !0
                            })
                        },
                        t = function(e) {
                            if (p.paused || !l) return;
                            let t = e.relatedTarget;
                            null !== t && (l.contains(t) || eu(d.current, {
                                select: !0
                            }))
                        };
                    document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                    let r = new MutationObserver(function(e) {
                        if (document.activeElement === document.body)
                            for (let t of e) t.removedNodes.length > 0 && eu(l)
                    });
                    return l && r.observe(l, {
                        childList: !0,
                        subtree: !0
                    }), () => {
                        document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                    }
                }
            }, [n, l, p.paused]), N.useEffect(() => {
                if (l) {
                    ec.add(p);
                    let e = document.activeElement;
                    if (!l.contains(e)) {
                        let t = new CustomEvent(en, ei);
                        l.addEventListener(en, u), l.dispatchEvent(t), t.defaultPrevented || (function(e, {
                            select: t = !1
                        } = {}) {
                            let r = document.activeElement;
                            for (let n of e)
                                if (eu(n, {
                                        select: t
                                    }), document.activeElement !== r) return
                        }(el(l).filter(e => "A" !== e.tagName), {
                            select: !0
                        }), document.activeElement === e && eu(l))
                    }
                    return () => {
                        l.removeEventListener(en, u), setTimeout(() => {
                            let t = new CustomEvent(eo, ei);
                            l.addEventListener(eo, c), l.dispatchEvent(t), t.defaultPrevented || eu(e ? ? document.body, {
                                select: !0
                            }), l.removeEventListener(eo, c), ec.remove(p)
                        }, 0)
                    }
                }
            }, [l, u, c, p]);
            let h = N.useCallback(e => {
                if (!r && !n || p.paused) return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                    o = document.activeElement;
                if (t && o) {
                    var i;
                    let t, n = e.currentTarget,
                        [a, l] = [es(t = el(i = n), i), es(t.reverse(), i)];
                    a && l ? e.shiftKey || o !== l ? e.shiftKey && o === a && (e.preventDefault(), r && eu(l, {
                        select: !0
                    })) : (e.preventDefault(), r && eu(a, {
                        select: !0
                    })) : o === n && e.preventDefault()
                }
            }, [r, n, p.paused]);
            return (0, R.jsx)(V.div, {
                tabIndex: -1,
                ...a,
                ref: f,
                onKeyDown: h
            })
        });

    function el(e) {
        let t = [],
            r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
    }

    function es(e, t) {
        for (let r of e)
            if (! function(e, {
                    upTo: t
                }) {
                    if ("hidden" === getComputedStyle(e).visibility) return !0;
                    for (; e && (void 0 === t || e !== t);) {
                        if ("none" === getComputedStyle(e).display) return !0;
                        e = e.parentElement
                    }
                    return !1
                }(r, {
                    upTo: t
                })) return r
    }

    function eu(e, {
        select: t = !1
    } = {}) {
        if (e && e.focus) {
            var r;
            let n = document.activeElement;
            e.focus({
                preventScroll: !0
            }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
        }
    }
    ea.displayName = "FocusScope";
    var ec = (o = [], {
        add(e) {
            let t = o[0];
            e !== t && t ? .pause(), (o = ed(o, e)).unshift(e)
        },
        remove(e) {
            o = ed(o, e), o[0] ? .resume()
        }
    });

    function ed(e, t) {
        let r = [...e],
            n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
    }
    var ef = globalThis ? .document ? N.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", 0, ef], 776833);
    var ep = N[" useId ".trim().toString()] || (() => void 0),
        eh = 0;

    function em(e) {
        let [t, r] = N.useState(ep());
        return ef(() => {
            e || r(e => e ? ? String(eh++))
        }, [e]), e || (t ? `radix-${t}` : "")
    }
    e.s(["useId", 0, em], 64592);
    var ev = e.i(195600),
        ey = e.i(95963),
        eb = N.forwardRef((e, t) => {
            let {
                children: r,
                width: n = 10,
                height: o = 5,
                ...i
            } = e;
            return (0, R.jsx)(V.svg, { ...i,
                ref: t,
                width: n,
                height: o,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none",
                children: e.asChild ? r : (0, R.jsx)("polygon", {
                    points: "0,0 30,0 15,10"
                })
            })
        });
    eb.displayName = "Arrow";
    var eg = "Popper",
        [eE, eS] = P(eg),
        [ex, ew] = eE(eg),
        eC = e => {
            let {
                __scopePopper: t,
                children: r
            } = e, [n, o] = N.useState(null);
            return (0, R.jsx)(ex, {
                scope: t,
                anchor: n,
                onAnchorChange: o,
                children: r
            })
        };
    eC.displayName = eg;
    var eL = "PopperAnchor",
        eR = N.forwardRef((e, t) => {
            let {
                __scopePopper: r,
                virtualRef: n,
                ...o
            } = e, i = ew(eL, r), a = N.useRef(null), l = j(t, a), s = N.useRef(null);
            return N.useEffect(() => {
                let e = s.current;
                s.current = n ? .current || a.current, e !== s.current && i.onAnchorChange(s.current)
            }), n ? null : (0, R.jsx)(V.div, { ...o,
                ref: l
            })
        });
    eR.displayName = eL;
    var eO = "PopperContent",
        [eT, eI] = eE(eO),
        eN = N.forwardRef((e, t) => {
            let {
                __scopePopper: r,
                side: n = "bottom",
                sideOffset: o = 0,
                align: i = "center",
                alignOffset: a = 0,
                arrowPadding: l = 0,
                avoidCollisions: s = !0,
                collisionBoundary: u = [],
                collisionPadding: c = 0,
                sticky: d = "partial",
                hideWhenDetached: f = !1,
                updatePositionStrategy: p = "optimized",
                onPlaced: h,
                ...m
            } = e, v = ew(eO, r), [y, b] = N.useState(null), g = j(t, e => b(e)), [E, S] = N.useState(null), x = function(e) {
                let [t, r] = N.useState(void 0);
                return ef(() => {
                    if (e) {
                        r({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let n, o;
                            if (!Array.isArray(t) || !t.length) return;
                            let i = t[0];
                            if ("borderBoxSize" in i) {
                                let e = i.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                n = t.inlineSize, o = t.blockSize
                            } else n = e.offsetWidth, o = e.offsetHeight;
                            r({
                                width: n,
                                height: o
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    r(void 0)
                }, [e]), t
            }(E), w = x ? .width ? ? 0, C = x ? .height ? ? 0, L = "number" == typeof c ? c : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...c
            }, O = Array.isArray(u) ? u : [u], T = O.length > 0, I = {
                padding: L,
                boundary: O.filter(eP),
                altBoundary: T
            }, {
                refs: A,
                floatingStyles: D,
                placement: _,
                isPositioned: P,
                middlewareData: B
            } = (0, ev.useFloating)({
                strategy: "fixed",
                placement: n + ("center" !== i ? "-" + i : ""),
                whileElementsMounted: (...e) => (0, ey.autoUpdate)(...e, {
                    animationFrame: "always" === p
                }),
                elements: {
                    reference: v.anchor
                },
                middleware: [(0, ev.offset)({
                    mainAxis: o + C,
                    alignmentAxis: a
                }), s && (0, ev.shift)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === d ? (0, ev.limitShift)() : void 0,
                    ...I
                }), s && (0, ev.flip)({ ...I
                }), (0, ev.size)({ ...I,
                    apply: ({
                        elements: e,
                        rects: t,
                        availableWidth: r,
                        availableHeight: n
                    }) => {
                        let {
                            width: o,
                            height: i
                        } = t.reference, a = e.floating.style;
                        a.setProperty("--radix-popper-available-width", `${r}px`), a.setProperty("--radix-popper-available-height", `${n}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
                    }
                }), E && (0, ev.arrow)({
                    element: E,
                    padding: l
                }), eB({
                    arrowWidth: w,
                    arrowHeight: C
                }), f && (0, ev.hide)({
                    strategy: "referenceHidden",
                    ...I
                })]
            }), [k, K] = ek(_), M = X(h);
            ef(() => {
                P && M ? .()
            }, [P, M]);
            let H = B.arrow ? .x,
                F = B.arrow ? .y,
                z = B.arrow ? .centerOffset !== 0,
                [U, W] = N.useState();
            return ef(() => {
                y && W(window.getComputedStyle(y).zIndex)
            }, [y]), (0, R.jsx)("div", {
                ref: A.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: { ...D,
                    transform: P ? D.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: U,
                    "--radix-popper-transform-origin": [B.transformOrigin ? .x, B.transformOrigin ? .y].join(" "),
                    ...B.hide ? .referenceHidden && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: (0, R.jsx)(eT, {
                    scope: r,
                    placedSide: k,
                    onArrowChange: S,
                    arrowX: H,
                    arrowY: F,
                    shouldHideArrow: z,
                    children: (0, R.jsx)(V.div, {
                        "data-side": k,
                        "data-align": K,
                        ...m,
                        ref: g,
                        style: { ...m.style,
                            animation: P ? void 0 : "none"
                        }
                    })
                })
            })
        });
    eN.displayName = eO;
    var eA = "PopperArrow",
        eD = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        },
        e_ = N.forwardRef(function(e, t) {
            let {
                __scopePopper: r,
                ...n
            } = e, o = eI(eA, r), i = eD[o.placedSide];
            return (0, R.jsx)("span", {
                ref: o.onArrowChange,
                style: {
                    position: "absolute",
                    left: o.arrowX,
                    top: o.arrowY,
                    [i]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[o.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[o.placedSide],
                    visibility: o.shouldHideArrow ? "hidden" : void 0
                },
                children: (0, R.jsx)(eb, { ...n,
                    ref: t,
                    style: { ...n.style,
                        display: "block"
                    }
                })
            })
        });

    function eP(e) {
        return null !== e
    }
    e_.displayName = eA;
    var eB = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
            let {
                placement: r,
                rects: n,
                middlewareData: o
            } = t, i = o.arrow ? .centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [s, u] = ek(r), c = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[u], d = (o.arrow ? .x ? ? 0) + a / 2, f = (o.arrow ? .y ? ? 0) + l / 2, p = "", h = "";
            return "bottom" === s ? (p = i ? c : `${d}px`, h = `${-l}px`) : "top" === s ? (p = i ? c : `${d}px`, h = `${n.floating.height+l}px`) : "right" === s ? (p = `${-l}px`, h = i ? c : `${f}px`) : "left" === s && (p = `${n.floating.width+l}px`, h = i ? c : `${f}px`), {
                data: {
                    x: p,
                    y: h
                }
            }
        }
    });

    function ek(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r]
    }
    N.forwardRef((e, t) => {
        let {
            container: r,
            ...n
        } = e, [o, i] = N.useState(!1);
        ef(() => i(!0), []);
        let a = r || o && globalThis ? .document ? .body;
        return a ? A.default.createPortal((0, R.jsx)(V.div, { ...n,
            ref: t
        }), a) : null
    }).displayName = "Portal", N[" useEffectEvent ".trim().toString()], N[" useInsertionEffect ".trim().toString()];
    var ej = N[" useInsertionEffect ".trim().toString()] || ef;

    function eK({
        prop: e,
        defaultProp: t,
        onChange: r = () => {},
        caller: n
    }) {
        let [o, i, a] = function({
            defaultProp: e,
            onChange: t
        }) {
            let [r, n] = N.useState(e), o = N.useRef(r), i = N.useRef(t);
            return ej(() => {
                i.current = t
            }, [t]), N.useEffect(() => {
                o.current !== r && (i.current ? .(r), o.current = r)
            }, [r, o]), [r, n, i]
        }({
            defaultProp: t,
            onChange: r
        }), l = void 0 !== e, s = l ? e : o; {
            let t = N.useRef(void 0 !== e);
            N.useEffect(() => {
                let e = t.current;
                if (e !== l) {
                    let t = l ? "controlled" : "uncontrolled";
                    console.warn(`${n} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                }
                t.current = l
            }, [l, n])
        }
        return [s, N.useCallback(t => {
            if (l) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && a.current ? .(r)
            } else i(t)
        }, [l, e, i, a])]
    }

    function eM(e) {
        let t = N.useRef({
            value: e,
            previous: e
        });
        return N.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
    }
    Symbol("RADIX:SYNC_STATE"), e.s(["useControllableState", 0, eK], 55037), e.s(["usePrevious", 0, eM], 593427);
    var eH = Object.freeze({
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal"
        }),
        eF = N.forwardRef((e, t) => (0, R.jsx)(V.span, { ...e,
            ref: t,
            style: { ...eH,
                ...e.style
            }
        }));
    eF.displayName = "VisuallyHidden", e.s(["Root", 0, eF, "VISUALLY_HIDDEN_STYLES", 0, eH], 349577);
    var ez = new WeakMap,
        eU = new WeakMap,
        eW = {},
        eG = 0,
        eY = function(e) {
            return e && (e.host || eY(e.parentNode))
        },
        eV = function(e, t, r, n) {
            var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (t.contains(e)) return e;
                var r = eY(e);
                return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
            }).filter(function(e) {
                return !!e
            });
            eW[r] || (eW[r] = new WeakMap);
            var i = eW[r],
                a = [],
                l = new Set,
                s = new Set(o),
                u = function(e) {
                    !e || l.has(e) || (l.add(e), u(e.parentNode))
                };
            o.forEach(u);
            var c = function(e) {
                !e || s.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (l.has(e)) c(e);
                    else try {
                        var t = e.getAttribute(n),
                            o = null !== t && "false" !== t,
                            s = (ez.get(e) || 0) + 1,
                            u = (i.get(e) || 0) + 1;
                        ez.set(e, s), i.set(e, u), a.push(e), 1 === s && o && eU.set(e, !0), 1 === u && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                    } catch (t) {
                        console.error("aria-hidden: cannot operate on ", e, t)
                    }
                })
            };
            return c(t), l.clear(), eG++,
                function() {
                    a.forEach(function(e) {
                        var t = ez.get(e) - 1,
                            o = i.get(e) - 1;
                        ez.set(e, t), i.set(e, o), t || (eU.has(e) || e.removeAttribute(n), eU.delete(e)), o || e.removeAttribute(r)
                    }), --eG || (ez = new WeakMap, ez = new WeakMap, eU = new WeakMap, eW = {})
                }
        },
        e$ = function(e, t, r) {
            void 0 === r && (r = "data-aria-hidden");
            var n = Array.from(Array.isArray(e) ? e : [e]),
                o = t || ("u" < typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
            return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), eV(n, o, r, "aria-hidden")) : function() {
                return null
            }
        },
        eX = function(e, t) {
            return (eX = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, t)
        },
        eq = function() {
            return (eq = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

    function eQ(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    }

    function eZ(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function eJ(e, t, r) {
        if (r || 2 == arguments.length)
            for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
    }

    function e0(e) {
        return this instanceof e0 ? (this.v = e, this) : new e0(e)
    }
    "function" == typeof SuppressedError && SuppressedError, e.s(["__assign", () => eq, "__asyncGenerator", 0, function(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
            i = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, u)
            }
        }), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function a(e, t) {
            o[e] && (n[e] = function(t) {
                return new Promise(function(r, n) {
                    i.push([e, t, r, n]) > 1 || l(e, t)
                })
            }, t && (n[e] = t(n[e])))
        }

        function l(e, t) {
            try {
                var r;
                (r = o[e](t)).value instanceof e0 ? Promise.resolve(r.value.v).then(s, u) : c(i[0][2], r)
            } catch (e) {
                c(i[0][3], e)
            }
        }

        function s(e) {
            l("next", e)
        }

        function u(e) {
            l("throw", e)
        }

        function c(e, t) {
            e(t), i.shift(), i.length && l(i[0][0], i[0][1])
        }
    }, "__asyncValues", 0, function(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = eZ(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function n(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(n, o) {
                    var i, a, l;
                    i = n, a = o, l = (t = e[r](t)).done, Promise.resolve(t.value).then(function(e) {
                        i({
                            value: e,
                            done: l
                        })
                    }, a)
                })
            }
        }
    }, "__await", 0, e0, "__awaiter", 0, function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, l)
            }
            s((n = n.apply(e, t || [])).next())
        })
    }, "__extends", 0, function(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
            this.constructor = e
        }
        eX(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, "__generator", 0, function(e, t) {
        var r, n, o, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = l(0), a.throw = l(1), a.return = l(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function l(l) {
            return function(s) {
                var u = [l, s];
                if (r) throw TypeError("Generator is already executing.");
                for (; a && (a = 0, u[0] && (i = 0)), i;) try {
                    if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                    switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                        case 0:
                        case 1:
                            o = u;
                            break;
                        case 4:
                            return i.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = u[1], u = [0];
                            continue;
                        case 7:
                            u = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                i.label = u[1];
                                break
                            }
                            if (6 === u[0] && i.label < o[1]) {
                                i.label = o[1], o = u;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(u);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    u = t.call(e, i)
                } catch (e) {
                    u = [6, e], n = 0
                } finally {
                    r = o = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__read", 0, function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, i = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }, "__rest", 0, eQ, "__spreadArray", 0, eJ, "__values", 0, eZ], 189280);
    var e1 = "right-scroll-bar-position",
        e2 = "width-before-scroll-bar";

    function e6(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
    }
    var e4 = "u" > typeof window ? N.useLayoutEffect : N.useEffect,
        e3 = new WeakMap,
        e5 = (void 0 === i && (i = {}), (void 0 === a && (a = function(e) {
            return e
        }), l = [], s = !1, u = {
            read: function() {
                if (s) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return l.length ? l[l.length - 1] : null
            },
            useMedium: function(e) {
                var t = a(e, s);
                return l.push(t),
                    function() {
                        l = l.filter(function(e) {
                            return e !== t
                        })
                    }
            },
            assignSyncMedium: function(e) {
                for (s = !0; l.length;) {
                    var t = l;
                    l = [], t.forEach(e)
                }
                l = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return l
                    }
                }
            },
            assignMedium: function(e) {
                s = !0;
                var t = [];
                if (l.length) {
                    var r = l;
                    l = [], r.forEach(e), t = l
                }
                var n = function() {
                        var r = t;
                        t = [], r.forEach(e)
                    },
                    o = function() {
                        return Promise.resolve().then(n)
                    };
                o(), l = {
                    push: function(e) {
                        t.push(e), o()
                    },
                    filter: function(e) {
                        return t = t.filter(e), l
                    }
                }
            }
        }).options = eq({
            async: !0,
            ssr: !1
        }, i), u),
        e8 = function() {},
        e9 = N.forwardRef(function(e, t) {
            var r, n, o, i, a = N.useRef(null),
                l = N.useState({
                    onScrollCapture: e8,
                    onWheelCapture: e8,
                    onTouchMoveCapture: e8
                }),
                s = l[0],
                u = l[1],
                c = e.forwardProps,
                d = e.children,
                f = e.className,
                p = e.removeScrollBar,
                h = e.enabled,
                m = e.shards,
                v = e.sideCar,
                y = e.noIsolation,
                b = e.inert,
                g = e.allowPinchZoom,
                E = e.as,
                S = e.gapMode,
                x = eQ(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                w = (r = [a, t], n = function(e) {
                    return r.forEach(function(t) {
                        return e6(t, e)
                    })
                }, (o = (0, N.useState)(function() {
                    return {
                        value: null,
                        callback: n,
                        facade: {
                            get current() {
                                return o.value
                            },
                            set current(value) {
                                var e = o.value;
                                e !== value && (o.value = value, o.callback(value, e))
                            }
                        }
                    }
                })[0]).callback = n, i = o.facade, e4(function() {
                    var e = e3.get(i);
                    if (e) {
                        var t = new Set(e),
                            n = new Set(r),
                            o = i.current;
                        t.forEach(function(e) {
                            n.has(e) || e6(e, null)
                        }), n.forEach(function(e) {
                            t.has(e) || e6(e, o)
                        })
                    }
                    e3.set(i, r)
                }, [r]), i),
                C = eq(eq({}, x), s);
            return N.createElement(N.Fragment, null, h && N.createElement(v, {
                sideCar: e5,
                removeScrollBar: p,
                shards: m,
                noIsolation: y,
                inert: b,
                setCallbacks: u,
                allowPinchZoom: !!g,
                lockRef: a,
                gapMode: S
            }), c ? N.cloneElement(N.Children.only(d), eq(eq({}, C), {
                ref: w
            })) : N.createElement(void 0 === E ? "div" : E, eq({}, C, {
                className: f,
                ref: w
            }), d))
        });
    e9.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
    }, e9.classNames = {
        fullWidth: e2,
        zeroRight: e1
    };
    var e7 = function(e) {
        var t = e.sideCar,
            r = eQ(e, ["sideCar"]);
        if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
        var n = t.read();
        if (!n) throw Error("Sidecar medium not found");
        return N.createElement(n, eq({}, r))
    };
    e7.isSideCarExport = !0;
    var te = function() {
            var e = 0,
                t = null;
            return {
                add: function(r) {
                    if (0 == e && (t = function() {
                            if (!document) return null;
                            var e = document.createElement("style");
                            e.type = "text/css";
                            var t = f || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                            return t && e.setAttribute("nonce", t), e
                        }())) {
                        var n, o;
                        (n = t).styleSheet ? n.styleSheet.cssText = r : n.appendChild(document.createTextNode(r)), o = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(o)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                }
            }
        },
        tt = function() {
            var e = te();
            return function(t, r) {
                N.useEffect(function() {
                    return e.add(t),
                        function() {
                            e.remove()
                        }
                }, [t && r])
            }
        },
        tr = function() {
            var e = tt();
            return function(t) {
                return e(t.styles, t.dynamic), null
            }
        },
        tn = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        },
        to = function(e) {
            return parseInt(e || "", 10) || 0
        },
        ti = function(e) {
            var t = window.getComputedStyle(document.body),
                r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                n = t["padding" === e ? "paddingTop" : "marginTop"],
                o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [to(r), to(n), to(o)]
        },
        ta = function(e) {
            if (void 0 === e && (e = "margin"), "u" < typeof window) return tn;
            var t = ti(e),
                r = document.documentElement.clientWidth,
                n = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, n - r + t[2] - t[0])
            }
        },
        tl = tr(),
        ts = "data-scroll-locked",
        tu = function(e, t, r, n) {
            var o = e.left,
                i = e.top,
                a = e.right,
                l = e.gap;
            return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(l, "px ").concat(n, ";\n  }\n  body[").concat(ts, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(l, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(e1, " {\n    right: ").concat(l, "px ").concat(n, ";\n  }\n  \n  .").concat(e2, " {\n    margin-right: ").concat(l, "px ").concat(n, ";\n  }\n  \n  .").concat(e1, " .").concat(e1, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(e2, " .").concat(e2, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(ts, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        tc = function() {
            var e = parseInt(document.body.getAttribute(ts) || "0", 10);
            return isFinite(e) ? e : 0
        },
        td = function() {
            N.useEffect(function() {
                return document.body.setAttribute(ts, (tc() + 1).toString()),
                    function() {
                        var e = tc() - 1;
                        e <= 0 ? document.body.removeAttribute(ts) : document.body.setAttribute(ts, e.toString())
                    }
            }, [])
        },
        tf = function(e) {
            var t = e.noRelative,
                r = e.noImportant,
                n = e.gapMode,
                o = void 0 === n ? "margin" : n;
            td();
            var i = N.useMemo(function() {
                return ta(o)
            }, [o]);
            return N.createElement(tl, {
                styles: tu(i, !t, o, r ? "" : "!important")
            })
        },
        tp = !1;
    if ("u" > typeof window) try {
        var th = Object.defineProperty({}, "passive", {
            get: function() {
                return tp = !0, !0
            }
        });
        window.addEventListener("test", th, th), window.removeEventListener("test", th, th)
    } catch (e) {
        tp = !1
    }
    var tm = !!tp && {
            passive: !1
        },
        tv = function(e, t) {
            if (!(e instanceof Element)) return !1;
            var r = window.getComputedStyle(e);
            return "hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t])
        },
        ty = function(e, t) {
            var r = t.ownerDocument,
                n = t;
            do {
                if ("u" > typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), tb(e, n)) {
                    var o = tg(e, n);
                    if (o[1] > o[2]) return !0
                }
                n = n.parentNode
            } while (n && n !== r.body) return !1
        },
        tb = function(e, t) {
            return "v" === e ? tv(t, "overflowY") : tv(t, "overflowX")
        },
        tg = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        },
        tE = function(e, t, r, n, o) {
            var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                l = a * n,
                s = r.target,
                u = t.contains(s),
                c = !1,
                d = l > 0,
                f = 0,
                p = 0;
            do {
                var h = tg(e, s),
                    m = h[0],
                    v = h[1] - h[2] - a * m;
                (m || v) && tb(e, s) && (f += v, p += m), s = s instanceof ShadowRoot ? s.host : s.parentNode
            } while (!u && s !== document.body || u && (t.contains(s) || t === s)) return d && (o && 1 > Math.abs(f) || !o && l > f) ? c = !0 : !d && (o && 1 > Math.abs(p) || !o && -l > p) && (c = !0), c
        },
        tS = function(e) {
            return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        tx = function(e) {
            return [e.deltaX, e.deltaY]
        },
        tw = function(e) {
            return e && "current" in e ? e.current : e
        },
        tC = 0,
        tL = [];
    let tR = (c = function(e) {
        var t = N.useRef([]),
            r = N.useRef([0, 0]),
            n = N.useRef(),
            o = N.useState(tC++)[0],
            i = N.useState(tr)[0],
            a = N.useRef(e);
        N.useEffect(function() {
            a.current = e
        }, [e]), N.useEffect(function() {
            if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var t = eJ([e.lockRef.current], (e.shards || []).map(tw), !0).filter(Boolean);
                return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
            }
        }, [e.inert, e.lockRef.current, e.shards]);
        var l = N.useCallback(function(e, t) {
                if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
                var o, i = tS(e),
                    l = r.current,
                    s = "deltaX" in e ? e.deltaX : l[0] - i[0],
                    u = "deltaY" in e ? e.deltaY : l[1] - i[1],
                    c = e.target,
                    d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === c.type) return !1;
                var f = ty(d, c);
                if (!f) return !0;
                if (f ? o = d : (o = "v" === d ? "h" : "v", f = ty(d, c)), !f) return !1;
                if (!n.current && "changedTouches" in e && (s || u) && (n.current = o), !o) return !0;
                var p = n.current || o;
                return tE(p, t, e, "h" === p ? s : u, !0)
            }, []),
            s = N.useCallback(function(e) {
                if (tL.length && tL[tL.length - 1] === i) {
                    var r = "deltaY" in e ? tx(e) : tS(e),
                        n = t.current.filter(function(t) {
                            var n;
                            return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta, n[0] === r[0] && n[1] === r[1])
                        })[0];
                    if (n && n.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!n) {
                        var o = (a.current.shards || []).map(tw).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, []),
            u = N.useCallback(function(e, r, n, o) {
                var i = {
                    name: e,
                    delta: r,
                    target: n,
                    should: o,
                    shadowParent: function(e) {
                        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                        return t
                    }(n)
                };
                t.current.push(i), setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, []),
            c = N.useCallback(function(e) {
                r.current = tS(e), n.current = void 0
            }, []),
            d = N.useCallback(function(t) {
                u(t.type, tx(t), t.target, l(t, e.lockRef.current))
            }, []),
            f = N.useCallback(function(t) {
                u(t.type, tS(t), t.target, l(t, e.lockRef.current))
            }, []);
        N.useEffect(function() {
            return tL.push(i), e.setCallbacks({
                    onScrollCapture: d,
                    onWheelCapture: d,
                    onTouchMoveCapture: f
                }), document.addEventListener("wheel", s, tm), document.addEventListener("touchmove", s, tm), document.addEventListener("touchstart", c, tm),
                function() {
                    tL = tL.filter(function(e) {
                        return e !== i
                    }), document.removeEventListener("wheel", s, tm), document.removeEventListener("touchmove", s, tm), document.removeEventListener("touchstart", c, tm)
                }
        }, []);
        var p = e.removeScrollBar,
            h = e.inert;
        return N.createElement(N.Fragment, null, h ? N.createElement(i, {
            styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
        }) : null, p ? N.createElement(tf, {
            gapMode: e.gapMode
        }) : null)
    }, e5.useMedium(c), e7);
    var tO = N.forwardRef(function(e, t) {
        return N.createElement(e9, eq({}, e, {
            ref: t,
            sideCar: tR
        }))
    });
    tO.classNames = e9.classNames, e.s(["RemoveScroll", 0, tO], 865823);
    var tT = [" ", "Enter", "ArrowUp", "ArrowDown"],
        tI = [" ", "Enter"],
        tN = "Select",
        [tA, tD, t_] = F(tN),
        [tP, tB] = P(tN, [t_, eS]),
        tk = eS(),
        [tj, tK] = tP(tN),
        [tM, tH] = tP(tN),
        tF = e => {
            let {
                __scopeSelect: t,
                children: r,
                open: n,
                defaultOpen: o,
                onOpenChange: i,
                value: a,
                defaultValue: l,
                onValueChange: s,
                dir: u,
                name: c,
                autoComplete: d,
                disabled: f,
                required: p,
                form: h
            } = e, m = tk(t), [v, y] = N.useState(null), [b, g] = N.useState(null), [E, S] = N.useState(!1), x = Y(u), [w, C] = eK({
                prop: n,
                defaultProp: o ? ? !1,
                onChange: i,
                caller: tN
            }), [L, O] = eK({
                prop: a,
                defaultProp: l,
                onChange: s,
                caller: tN
            }), T = N.useRef(null), I = !v || h || !!v.closest("form"), [A, D] = N.useState(new Set), _ = Array.from(A).map(e => e.props.value).join(";");
            return (0, R.jsx)(eC, { ...m,
                children: (0, R.jsxs)(tj, {
                    required: p,
                    scope: t,
                    trigger: v,
                    onTriggerChange: y,
                    valueNode: b,
                    onValueNodeChange: g,
                    valueNodeHasChildren: E,
                    onValueNodeHasChildrenChange: S,
                    contentId: em(),
                    value: L,
                    onValueChange: O,
                    open: w,
                    onOpenChange: C,
                    dir: x,
                    triggerPointerDownPosRef: T,
                    disabled: f,
                    children: [(0, R.jsx)(tA.Provider, {
                        scope: t,
                        children: (0, R.jsx)(tM, {
                            scope: e.__scopeSelect,
                            onNativeOptionAdd: N.useCallback(e => {
                                D(t => new Set(t).add(e))
                            }, []),
                            onNativeOptionRemove: N.useCallback(e => {
                                D(t => {
                                    let r = new Set(t);
                                    return r.delete(e), r
                                })
                            }, []),
                            children: r
                        })
                    }), I ? (0, R.jsxs)(rh, {
                        "aria-hidden": !0,
                        required: p,
                        tabIndex: -1,
                        name: c,
                        autoComplete: d,
                        value: L,
                        onChange: e => O(e.target.value),
                        disabled: f,
                        form: h,
                        children: [void 0 === L ? (0, R.jsx)("option", {
                            value: ""
                        }) : null, Array.from(A)]
                    }, _) : null]
                })
            })
        };
    tF.displayName = tN;
    var tz = "SelectTrigger",
        tU = N.forwardRef((e, t) => {
            let {
                __scopeSelect: r,
                disabled: n = !1,
                ...o
            } = e, i = tk(r), a = tK(tz, r), l = a.disabled || n, s = j(t, a.onTriggerChange), u = tD(r), c = N.useRef("touch"), [d, f, p] = rv(e => {
                let t = u().filter(e => !e.disabled),
                    r = t.find(e => e.value === a.value),
                    n = ry(t, e, r);
                void 0 !== n && a.onValueChange(n.value)
            }), h = e => {
                l || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY)
                })
            };
            return (0, R.jsx)(eR, {
                asChild: !0,
                ...i,
                children: (0, R.jsx)(V.button, {
                    type: "button",
                    role: "combobox",
                    "aria-controls": a.contentId,
                    "aria-expanded": a.open,
                    "aria-required": a.required,
                    "aria-autocomplete": "none",
                    dir: a.dir,
                    "data-state": a.open ? "open" : "closed",
                    disabled: l,
                    "data-disabled": l ? "" : void 0,
                    "data-placeholder": rm(a.value) ? "" : void 0,
                    ...o,
                    ref: s,
                    onClick: _(o.onClick, e => {
                        e.currentTarget.focus(), "mouse" !== c.current && h(e)
                    }),
                    onPointerDown: _(o.onPointerDown, e => {
                        c.current = e.pointerType;
                        let t = e.target;
                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
                    }),
                    onKeyDown: _(o.onKeyDown, e => {
                        let t = "" !== d.current;
                        e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), (!t || " " !== e.key) && tT.includes(e.key) && (h(), e.preventDefault())
                    })
                })
            })
        });
    tU.displayName = tz;
    var tW = "SelectValue",
        tG = N.forwardRef((e, t) => {
            let {
                __scopeSelect: r,
                className: n,
                style: o,
                children: i,
                placeholder: a = "",
                ...l
            } = e, s = tK(tW, r), {
                onValueNodeHasChildrenChange: u
            } = s, c = void 0 !== i, d = j(t, s.onValueNodeChange);
            return ef(() => {
                u(c)
            }, [u, c]), (0, R.jsx)(V.span, { ...l,
                ref: d,
                style: {
                    pointerEvents: "none"
                },
                children: rm(s.value) ? (0, R.jsx)(R.Fragment, {
                    children: a
                }) : i
            })
        });
    tG.displayName = tW, N.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            children: n,
            ...o
        } = e;
        return (0, R.jsx)(V.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: n || "▼"
        })
    }).displayName = "SelectIcon";
    var tY = "SelectContent",
        tV = N.forwardRef((e, t) => {
            let r = tK(tY, e.__scopeSelect),
                [n, o] = N.useState();
            return (ef(() => {
                o(new DocumentFragment)
            }, []), r.open) ? (0, R.jsx)(tQ, { ...e,
                ref: t
            }) : n ? A.createPortal((0, R.jsx)(t$, {
                scope: e.__scopeSelect,
                children: (0, R.jsx)(tA.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, R.jsx)("div", {
                        children: e.children
                    })
                })
            }), n) : null
        });
    tV.displayName = tY;
    var [t$, tX] = tP(tY), tq = K("SelectContent.RemoveScroll"), tQ = N.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            side: l,
            sideOffset: s,
            align: u,
            alignOffset: c,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
        } = e, b = tK(tY, r), [g, E] = N.useState(null), [S, x] = N.useState(null), w = j(t, e => E(e)), [C, L] = N.useState(null), [O, T] = N.useState(null), I = tD(r), [A, D] = N.useState(!1), P = N.useRef(!1);
        N.useEffect(() => {
            if (g) return e$(g)
        }, [g]), N.useEffect(() => {
            let e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ? ? er()), document.body.insertAdjacentElement("beforeend", e[1] ? ? er()), et++, () => {
                1 === et && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), et--
            }
        }, []);
        let B = N.useCallback(e => {
                let [t, ...r] = I().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
                for (let r of e)
                    if (r === o || (r ? .scrollIntoView({
                            block: "nearest"
                        }), r === t && S && (S.scrollTop = 0), r === n && S && (S.scrollTop = S.scrollHeight), r ? .focus(), document.activeElement !== o)) return
            }, [I, S]),
            k = N.useCallback(() => B([C, g]), [B, C, g]);
        N.useEffect(() => {
            A && k()
        }, [A, k]);
        let {
            onOpenChange: K,
            triggerPointerDownPosRef: M
        } = b;
        N.useEffect(() => {
            if (g) {
                let e = {
                        x: 0,
                        y: 0
                    },
                    t = t => {
                        e = {
                            x: Math.abs(Math.round(t.pageX) - (M.current ? .x ? ? 0)),
                            y: Math.abs(Math.round(t.pageY) - (M.current ? .y ? ? 0))
                        }
                    },
                    r = r => {
                        e.x <= 10 && e.y <= 10 ? r.preventDefault() : g.contains(r.target) || K(!1), document.removeEventListener("pointermove", t), M.current = null
                    };
                return null !== M.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                        capture: !0
                    })
                }
            }
        }, [g, K, M]), N.useEffect(() => {
            let e = () => K(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
        }, [K]);
        let [H, F] = rv(e => {
            let t = I().filter(e => !e.disabled),
                r = t.find(e => e.ref.current === document.activeElement),
                n = ry(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
        }), z = N.useCallback((e, t, r) => {
            let n = !P.current && !r;
            (void 0 !== b.value && b.value === t || n) && (L(e), n && (P.current = !0))
        }, [b.value]), U = N.useCallback(() => g ? .focus(), [g]), W = N.useCallback((e, t, r) => {
            let n = !P.current && !r;
            (void 0 !== b.value && b.value === t || n) && T(e)
        }, [b.value]), G = "popper" === n ? tJ : tZ, Y = G === tJ ? {
            side: l,
            sideOffset: s,
            align: u,
            alignOffset: c,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v
        } : {};
        return (0, R.jsx)(t$, {
            scope: r,
            content: g,
            viewport: S,
            onViewportChange: x,
            itemRefCallback: z,
            selectedItem: C,
            onItemLeave: U,
            itemTextRefCallback: W,
            focusSelectedItem: k,
            selectedItemText: O,
            position: n,
            isPositioned: A,
            searchRef: H,
            children: (0, R.jsx)(tO, {
                as: tq,
                allowPinchZoom: !0,
                children: (0, R.jsx)(ea, {
                    asChild: !0,
                    trapped: b.open,
                    onMountAutoFocus: e => {
                        e.preventDefault()
                    },
                    onUnmountAutoFocus: _(o, e => {
                        b.trigger ? .focus({
                            preventScroll: !0
                        }), e.preventDefault()
                    }),
                    children: (0, R.jsx)(Z, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: i,
                        onPointerDownOutside: a,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: () => b.onOpenChange(!1),
                        children: (0, R.jsx)(G, {
                            role: "listbox",
                            id: b.contentId,
                            "data-state": b.open ? "open" : "closed",
                            dir: b.dir,
                            onContextMenu: e => e.preventDefault(),
                            ...y,
                            ...Y,
                            onPlaced: () => D(!0),
                            ref: w,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...y.style
                            },
                            onKeyDown: _(y.onKeyDown, e => {
                                let t = e.ctrlKey || e.altKey || e.metaKey;
                                if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || F(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                    let t = I().filter(e => !e.disabled).map(e => e.ref.current);
                                    if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                        let r = e.target,
                                            n = t.indexOf(r);
                                        t = t.slice(n + 1)
                                    }
                                    setTimeout(() => B(t)), e.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
    tQ.displayName = "SelectContentImpl";
    var tZ = N.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            onPlaced: n,
            ...o
        } = e, i = tK(tY, r), a = tX(tY, r), [l, s] = N.useState(null), [u, c] = N.useState(null), d = j(t, e => c(e)), f = tD(r), p = N.useRef(!1), h = N.useRef(!0), {
            viewport: m,
            selectedItem: v,
            selectedItemText: y,
            focusSelectedItem: b
        } = a, g = N.useCallback(() => {
            if (i.trigger && i.valueNode && l && u && m && v && y) {
                let e = i.trigger.getBoundingClientRect(),
                    t = u.getBoundingClientRect(),
                    r = i.valueNode.getBoundingClientRect(),
                    o = y.getBoundingClientRect();
                if ("rtl" !== i.dir) {
                    let n = o.left - t.left,
                        i = r.left - n,
                        a = e.left - i,
                        s = e.width + a,
                        u = Math.max(s, t.width),
                        c = D(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                    l.style.minWidth = s + "px", l.style.left = c + "px"
                } else {
                    let n = t.right - o.right,
                        i = window.innerWidth - r.right - n,
                        a = window.innerWidth - e.right - i,
                        s = e.width + a,
                        u = Math.max(s, t.width),
                        c = D(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                    l.style.minWidth = s + "px", l.style.right = c + "px"
                }
                let a = f(),
                    s = window.innerHeight - 20,
                    c = m.scrollHeight,
                    d = window.getComputedStyle(u),
                    h = parseInt(d.borderTopWidth, 10),
                    b = parseInt(d.paddingTop, 10),
                    g = parseInt(d.borderBottomWidth, 10),
                    E = h + b + c + parseInt(d.paddingBottom, 10) + g,
                    S = Math.min(5 * v.offsetHeight, E),
                    x = window.getComputedStyle(m),
                    w = parseInt(x.paddingTop, 10),
                    C = parseInt(x.paddingBottom, 10),
                    L = e.top + e.height / 2 - 10,
                    R = v.offsetHeight / 2,
                    O = h + b + (v.offsetTop + R);
                if (O <= L) {
                    let e = a.length > 0 && v === a[a.length - 1].ref.current;
                    l.style.bottom = "0px";
                    let t = Math.max(s - L, R + (e ? C : 0) + (u.clientHeight - m.offsetTop - m.offsetHeight) + g);
                    l.style.height = O + t + "px"
                } else {
                    let e = a.length > 0 && v === a[0].ref.current;
                    l.style.top = "0px";
                    let t = Math.max(L, h + m.offsetTop + (e ? w : 0) + R);
                    l.style.height = t + (E - O) + "px", m.scrollTop = O - L + m.offsetTop
                }
                l.style.margin = "10px 0", l.style.minHeight = S + "px", l.style.maxHeight = s + "px", n ? .(), requestAnimationFrame(() => p.current = !0)
            }
        }, [f, i.trigger, i.valueNode, l, u, m, v, y, i.dir, n]);
        ef(() => g(), [g]);
        let [E, S] = N.useState();
        ef(() => {
            u && S(window.getComputedStyle(u).zIndex)
        }, [u]);
        let x = N.useCallback(e => {
            e && !0 === h.current && (g(), b ? .(), h.current = !1)
        }, [g, b]);
        return (0, R.jsx)(t0, {
            scope: r,
            contentWrapper: l,
            shouldExpandOnScrollRef: p,
            onScrollButtonChange: x,
            children: (0, R.jsx)("div", {
                ref: s,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: E
                },
                children: (0, R.jsx)(V.div, { ...o,
                    ref: d,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...o.style
                    }
                })
            })
        })
    });
    tZ.displayName = "SelectItemAlignedPosition";
    var tJ = N.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = 10,
            ...i
        } = e, a = tk(r);
        return (0, R.jsx)(eN, { ...a,
            ...i,
            ref: t,
            align: n,
            collisionPadding: o,
            style: {
                boxSizing: "border-box",
                ...i.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
    tJ.displayName = "SelectPopperPosition";
    var [t0, t1] = tP(tY, {}), t2 = "SelectViewport", t6 = N.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            nonce: n,
            ...o
        } = e, i = tX(t2, r), a = t1(t2, r), l = j(t, i.onViewportChange), s = N.useRef(0);
        return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                },
                nonce: n
            }), (0, R.jsx)(tA.Slot, {
                scope: r,
                children: (0, R.jsx)(V.div, {
                    "data-radix-select-viewport": "",
                    role: "presentation",
                    ...o,
                    ref: l,
                    style: {
                        position: "relative",
                        flex: 1,
                        overflow: "hidden auto",
                        ...o.style
                    },
                    onScroll: _(o.onScroll, e => {
                        let t = e.currentTarget,
                            {
                                contentWrapper: r,
                                shouldExpandOnScrollRef: n
                            } = a;
                        if (n ? .current && r) {
                            let e = Math.abs(s.current - t.scrollTop);
                            if (e > 0) {
                                let n = window.innerHeight - 20,
                                    o = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                if (o < n) {
                                    let i = o + e,
                                        a = Math.min(n, i),
                                        l = i - a;
                                    r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = l > 0 ? l : 0, r.style.justifyContent = "flex-end")
                                }
                            }
                        }
                        s.current = t.scrollTop
                    })
                })
            })]
        })
    });
    t6.displayName = t2;
    var t4 = "SelectGroup",
        [t3, t5] = tP(t4),
        t8 = N.forwardRef((e, t) => {
            let {
                __scopeSelect: r,
                ...n
            } = e, o = em();
            return (0, R.jsx)(t3, {
                scope: r,
                id: o,
                children: (0, R.jsx)(V.div, {
                    role: "group",
                    "aria-labelledby": o,
                    ...n,
                    ref: t
                })
            })
        });
    t8.displayName = t4;
    var t9 = "SelectLabel",
        t7 = N.forwardRef((e, t) => {
            let {
                __scopeSelect: r,
                ...n
            } = e, o = t5(t9, r);
            return (0, R.jsx)(V.div, {
                id: o.id,
                ...n,
                ref: t
            })
        });
    t7.displayName = t9;
    var re = "SelectItem",
        [rt, rr] = tP(re),
        rn = N.forwardRef((e, t) => {
            let {
                __scopeSelect: r,
                value: n,
                disabled: o = !1,
                textValue: i,
                ...a
            } = e, l = tK(re, r), s = tX(re, r), u = l.value === n, [c, d] = N.useState(i ? ? ""), [f, p] = N.useState(!1), h = j(t, e => s.itemRefCallback ? .(e, n, o)), m = em(), v = N.useRef("touch"), y = () => {
                o || (l.onValueChange(n), l.onOpenChange(!1))
            };
            if ("" === n) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
            return (0, R.jsx)(rt, {
                scope: r,
                value: n,
                disabled: o,
                textId: m,
                isSelected: u,
                onItemTextChange: N.useCallback(e => {
                    d(t => t || (e ? .textContent ? ? "").trim())
                }, []),
                children: (0, R.jsx)(tA.ItemSlot, {
                    scope: r,
                    value: n,
                    disabled: o,
                    textValue: c,
                    children: (0, R.jsx)(V.div, {
                        role: "option",
                        "aria-labelledby": m,
                        "data-highlighted": f ? "" : void 0,
                        "aria-selected": u && f,
                        "data-state": u ? "checked" : "unchecked",
                        "aria-disabled": o || void 0,
                        "data-disabled": o ? "" : void 0,
                        tabIndex: o ? void 0 : -1,
                        ...a,
                        ref: h,
                        onFocus: _(a.onFocus, () => p(!0)),
                        onBlur: _(a.onBlur, () => p(!1)),
                        onClick: _(a.onClick, () => {
                            "mouse" !== v.current && y()
                        }),
                        onPointerUp: _(a.onPointerUp, () => {
                            "mouse" === v.current && y()
                        }),
                        onPointerDown: _(a.onPointerDown, e => {
                            v.current = e.pointerType
                        }),
                        onPointerMove: _(a.onPointerMove, e => {
                            v.current = e.pointerType, o ? s.onItemLeave ? .() : "mouse" === v.current && e.currentTarget.focus({
                                preventScroll: !0
                            })
                        }),
                        onPointerLeave: _(a.onPointerLeave, e => {
                            e.currentTarget === document.activeElement && s.onItemLeave ? .()
                        }),
                        onKeyDown: _(a.onKeyDown, e => {
                            (s.searchRef ? .current === "" || " " !== e.key) && (tI.includes(e.key) && y(), " " === e.key && e.preventDefault())
                        })
                    })
                })
            })
        });
    rn.displayName = re;
    var ro = "SelectItemText",
        ri = N.forwardRef((e, t) => {
            let {
                __scopeSelect: r,
                className: n,
                style: o,
                ...i
            } = e, a = tK(ro, r), l = tX(ro, r), s = rr(ro, r), u = tH(ro, r), [c, d] = N.useState(null), f = j(t, e => d(e), s.onItemTextChange, e => l.itemTextRefCallback ? .(e, s.value, s.disabled)), p = c ? .textContent, h = N.useMemo(() => (0, R.jsx)("option", {
                value: s.value,
                disabled: s.disabled,
                children: p
            }, s.value), [s.disabled, s.value, p]), {
                onNativeOptionAdd: m,
                onNativeOptionRemove: v
            } = u;
            return ef(() => (m(h), () => v(h)), [m, v, h]), (0, R.jsxs)(R.Fragment, {
                children: [(0, R.jsx)(V.span, {
                    id: s.textId,
                    ...i,
                    ref: f
                }), s.isSelected && a.valueNode && !a.valueNodeHasChildren ? A.createPortal(i.children, a.valueNode) : null]
            })
        });
    ri.displayName = ro;
    var ra = "SelectItemIndicator";
    N.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            ...n
        } = e;
        return rr(ra, r).isSelected ? (0, R.jsx)(V.span, {
            "aria-hidden": !0,
            ...n,
            ref: t
        }) : null
    }).displayName = ra;
    var rl = "SelectScrollUpButton",
        rs = N.forwardRef((e, t) => {
            let r = tX(rl, e.__scopeSelect),
                n = t1(rl, e.__scopeSelect),
                [o, i] = N.useState(!1),
                a = j(t, n.onScrollButtonChange);
            return ef(() => {
                if (r.viewport && r.isPositioned) {
                    let e = function() {
                            i(t.scrollTop > 0)
                        },
                        t = r.viewport;
                    return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                }
            }, [r.viewport, r.isPositioned]), o ? (0, R.jsx)(rd, { ...e,
                ref: a,
                onAutoScroll: () => {
                    let {
                        viewport: e,
                        selectedItem: t
                    } = r;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                }
            }) : null
        });
    rs.displayName = rl;
    var ru = "SelectScrollDownButton",
        rc = N.forwardRef((e, t) => {
            let r = tX(ru, e.__scopeSelect),
                n = t1(ru, e.__scopeSelect),
                [o, i] = N.useState(!1),
                a = j(t, n.onScrollButtonChange);
            return ef(() => {
                if (r.viewport && r.isPositioned) {
                    let e = function() {
                            let e = t.scrollHeight - t.clientHeight;
                            i(Math.ceil(t.scrollTop) < e)
                        },
                        t = r.viewport;
                    return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                }
            }, [r.viewport, r.isPositioned]), o ? (0, R.jsx)(rd, { ...e,
                ref: a,
                onAutoScroll: () => {
                    let {
                        viewport: e,
                        selectedItem: t
                    } = r;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                }
            }) : null
        });
    rc.displayName = ru;
    var rd = N.forwardRef((e, t) => {
            let {
                __scopeSelect: r,
                onAutoScroll: n,
                ...o
            } = e, i = tX("SelectScrollButton", r), a = N.useRef(null), l = tD(r), s = N.useCallback(() => {
                null !== a.current && (window.clearInterval(a.current), a.current = null)
            }, []);
            return N.useEffect(() => () => s(), [s]), ef(() => {
                let e = l().find(e => e.ref.current === document.activeElement);
                e ? .ref.current ? .scrollIntoView({
                    block: "nearest"
                })
            }, [l]), (0, R.jsx)(V.div, {
                "aria-hidden": !0,
                ...o,
                ref: t,
                style: {
                    flexShrink: 0,
                    ...o.style
                },
                onPointerDown: _(o.onPointerDown, () => {
                    null === a.current && (a.current = window.setInterval(n, 50))
                }),
                onPointerMove: _(o.onPointerMove, () => {
                    i.onItemLeave ? .(), null === a.current && (a.current = window.setInterval(n, 50))
                }),
                onPointerLeave: _(o.onPointerLeave, () => {
                    s()
                })
            })
        }),
        rf = N.forwardRef((e, t) => {
            let {
                __scopeSelect: r,
                ...n
            } = e;
            return (0, R.jsx)(V.div, {
                "aria-hidden": !0,
                ...n,
                ref: t
            })
        });
    rf.displayName = "SelectSeparator";
    var rp = "SelectArrow";
    N.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            ...n
        } = e, o = tk(r), i = tK(rp, r), a = tX(rp, r);
        return i.open && "popper" === a.position ? (0, R.jsx)(e_, { ...o,
            ...n,
            ref: t
        }) : null
    }).displayName = rp;
    var rh = N.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
    }, n) => {
        let o = N.useRef(null),
            i = j(n, o),
            a = eM(t);
        return N.useEffect(() => {
            let e = o.current;
            if (!e) return;
            let r = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
            if (a !== t && r) {
                let n = new Event("change", {
                    bubbles: !0
                });
                r.call(e, t), e.dispatchEvent(n)
            }
        }, [a, t]), (0, R.jsx)(V.select, { ...r,
            style: { ...eH,
                ...r.style
            },
            ref: i,
            defaultValue: t
        })
    });

    function rm(e) {
        return "" === e || void 0 === e
    }

    function rv(e) {
        let t = X(e),
            r = N.useRef(""),
            n = N.useRef(0),
            o = N.useCallback(e => {
                let o = r.current + e;
                t(o),
                    function e(t) {
                        r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
                    }(o)
            }, [t]),
            i = N.useCallback(() => {
                r.current = "", window.clearTimeout(n.current)
            }, []);
        return N.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i]
    }

    function ry(e, t, r) {
        var n, o;
        let i = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
            a = r ? e.indexOf(r) : -1,
            l = (n = e, o = Math.max(a, 0), n.map((e, t) => n[(o + t) % n.length]));
        1 === i.length && (l = l.filter(e => e !== r));
        let s = l.find(e => e.textValue.toLowerCase().startsWith(i.toLowerCase()));
        return s !== r ? s : void 0
    }
    rh.displayName = "SelectBubbleInput";
    var rb = e => {
        var t;
        let r, n, {
                present: o,
                children: i
            } = e,
            a = function(e) {
                var t, r;
                let [n, o] = N.useState(), i = N.useRef(null), a = N.useRef(e), l = N.useRef("none"), [s, u] = (t = e ? "mounted" : "unmounted", r = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                }, N.useReducer((e, t) => r[e][t] ? ? e, t));
                return N.useEffect(() => {
                    let e = rg(i.current);
                    l.current = "mounted" === s ? e : "none"
                }, [s]), ef(() => {
                    let t = i.current,
                        r = a.current;
                    if (r !== e) {
                        let n = l.current,
                            o = rg(t);
                        e ? u("MOUNT") : "none" === o || t ? .display === "none" ? u("UNMOUNT") : r && n !== o ? u("ANIMATION_OUT") : u("UNMOUNT"), a.current = e
                    }
                }, [e, u]), ef(() => {
                    if (n) {
                        let e, t = n.ownerDocument.defaultView ? ? window,
                            r = r => {
                                let o = rg(i.current).includes(CSS.escape(r.animationName));
                                if (r.target === n && o && (u("ANIMATION_END"), !a.current)) {
                                    let r = n.style.animationFillMode;
                                    n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                                    })
                                }
                            },
                            o = e => {
                                e.target === n && (l.current = rg(i.current))
                            };
                        return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                            t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                        }
                    }
                    u("ANIMATION_END")
                }, [n, u]), {
                    isPresent: ["mounted", "unmountSuspended"].includes(s),
                    ref: N.useCallback(e => {
                        i.current = e ? getComputedStyle(e) : null, o(e)
                    }, [])
                }
            }(o),
            l = "function" == typeof i ? i({
                present: a.isPresent
            }) : N.Children.only(i),
            s = j(a.ref, (t = l, (n = (r = Object.getOwnPropertyDescriptor(t.props, "ref") ? .get) && "isReactWarning" in r && r.isReactWarning) ? t.ref : (n = (r = Object.getOwnPropertyDescriptor(t, "ref") ? .get) && "isReactWarning" in r && r.isReactWarning) ? t.props.ref : t.props.ref || t.ref));
        return "function" == typeof i || a.isPresent ? N.cloneElement(l, {
            ref: s
        }) : null
    };

    function rg(e) {
        return e ? .animationName || "none"
    }
    rb.displayName = "Presence", e.s(["Presence", 0, rb], 993953);
    var rE = "ScrollArea",
        [rS, rx] = P(rE),
        [rw, rC] = rS(rE),
        rL = N.forwardRef((e, t) => {
            let {
                __scopeScrollArea: r,
                type: n = "hover",
                dir: o,
                scrollHideDelay: i = 600,
                ...a
            } = e, [l, s] = N.useState(null), [u, c] = N.useState(null), [d, f] = N.useState(null), [p, h] = N.useState(null), [m, v] = N.useState(null), [y, b] = N.useState(0), [g, E] = N.useState(0), [S, x] = N.useState(!1), [w, C] = N.useState(!1), L = j(t, e => s(e)), O = Y(o);
            return (0, R.jsx)(rw, {
                scope: r,
                type: n,
                dir: O,
                scrollHideDelay: i,
                scrollArea: l,
                viewport: u,
                onViewportChange: c,
                content: d,
                onContentChange: f,
                scrollbarX: p,
                onScrollbarXChange: h,
                scrollbarXEnabled: S,
                onScrollbarXEnabledChange: x,
                scrollbarY: m,
                onScrollbarYChange: v,
                scrollbarYEnabled: w,
                onScrollbarYEnabledChange: C,
                onCornerWidthChange: b,
                onCornerHeightChange: E,
                children: (0, R.jsx)(V.div, {
                    dir: O,
                    ...a,
                    ref: L,
                    style: {
                        position: "relative",
                        "--radix-scroll-area-corner-width": y + "px",
                        "--radix-scroll-area-corner-height": g + "px",
                        ...e.style
                    }
                })
            })
        });
    rL.displayName = rE;
    var rR = "ScrollAreaViewport",
        rO = N.forwardRef((e, t) => {
            let {
                __scopeScrollArea: r,
                children: n,
                nonce: o,
                ...i
            } = e, a = rC(rR, r), l = j(t, N.useRef(null), a.onViewportChange);
            return (0, R.jsxs)(R.Fragment, {
                children: [(0, R.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: o
                }), (0, R.jsx)(V.div, {
                    "data-radix-scroll-area-viewport": "",
                    ...i,
                    ref: l,
                    style: {
                        overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                        overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                        ...e.style
                    },
                    children: (0, R.jsx)("div", {
                        ref: a.onContentChange,
                        style: {
                            minWidth: "100%",
                            display: "table"
                        },
                        children: n
                    })
                })]
            })
        });
    rO.displayName = rR;
    var rT = "ScrollAreaScrollbar",
        rI = N.forwardRef((e, t) => {
            let {
                forceMount: r,
                ...n
            } = e, o = rC(rT, e.__scopeScrollArea), {
                onScrollbarXEnabledChange: i,
                onScrollbarYEnabledChange: a
            } = o, l = "horizontal" === e.orientation;
            return N.useEffect(() => (l ? i(!0) : a(!0), () => {
                l ? i(!1) : a(!1)
            }), [l, i, a]), "hover" === o.type ? (0, R.jsx)(rN, { ...n,
                ref: t,
                forceMount: r
            }) : "scroll" === o.type ? (0, R.jsx)(rA, { ...n,
                ref: t,
                forceMount: r
            }) : "auto" === o.type ? (0, R.jsx)(rD, { ...n,
                ref: t,
                forceMount: r
            }) : "always" === o.type ? (0, R.jsx)(r_, { ...n,
                ref: t
            }) : null
        });
    rI.displayName = rT;
    var rN = N.forwardRef((e, t) => {
            let {
                forceMount: r,
                ...n
            } = e, o = rC(rT, e.__scopeScrollArea), [i, a] = N.useState(!1);
            return N.useEffect(() => {
                let e = o.scrollArea,
                    t = 0;
                if (e) {
                    let r = () => {
                            window.clearTimeout(t), a(!0)
                        },
                        n = () => {
                            t = window.setTimeout(() => a(!1), o.scrollHideDelay)
                        };
                    return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                        window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
                    }
                }
            }, [o.scrollArea, o.scrollHideDelay]), (0, R.jsx)(rb, {
                present: r || i,
                children: (0, R.jsx)(rD, {
                    "data-state": i ? "visible" : "hidden",
                    ...n,
                    ref: t
                })
            })
        }),
        rA = N.forwardRef((e, t) => {
            var r;
            let {
                forceMount: n,
                ...o
            } = e, i = rC(rT, e.__scopeScrollArea), a = "horizontal" === e.orientation, l = rq(() => u("SCROLL_END"), 100), [s, u] = (r = {
                hidden: {
                    SCROLL: "scrolling"
                },
                scrolling: {
                    SCROLL_END: "idle",
                    POINTER_ENTER: "interacting"
                },
                interacting: {
                    SCROLL: "interacting",
                    POINTER_LEAVE: "idle"
                },
                idle: {
                    HIDE: "hidden",
                    SCROLL: "scrolling",
                    POINTER_ENTER: "interacting"
                }
            }, N.useReducer((e, t) => r[e][t] ? ? e, "hidden"));
            return N.useEffect(() => {
                if ("idle" === s) {
                    let e = window.setTimeout(() => u("HIDE"), i.scrollHideDelay);
                    return () => window.clearTimeout(e)
                }
            }, [s, i.scrollHideDelay, u]), N.useEffect(() => {
                let e = i.viewport,
                    t = a ? "scrollLeft" : "scrollTop";
                if (e) {
                    let r = e[t],
                        n = () => {
                            let n = e[t];
                            r !== n && (u("SCROLL"), l()), r = n
                        };
                    return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
                }
            }, [i.viewport, a, u, l]), (0, R.jsx)(rb, {
                present: n || "hidden" !== s,
                children: (0, R.jsx)(r_, {
                    "data-state": "hidden" === s ? "hidden" : "visible",
                    ...o,
                    ref: t,
                    onPointerEnter: _(e.onPointerEnter, () => u("POINTER_ENTER")),
                    onPointerLeave: _(e.onPointerLeave, () => u("POINTER_LEAVE"))
                })
            })
        }),
        rD = N.forwardRef((e, t) => {
            let r = rC(rT, e.__scopeScrollArea),
                {
                    forceMount: n,
                    ...o
                } = e,
                [i, a] = N.useState(!1),
                l = "horizontal" === e.orientation,
                s = rq(() => {
                    if (r.viewport) {
                        let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                            t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                        a(l ? e : t)
                    }
                }, 10);
            return rQ(r.viewport, s), rQ(r.content, s), (0, R.jsx)(rb, {
                present: n || i,
                children: (0, R.jsx)(r_, {
                    "data-state": i ? "visible" : "hidden",
                    ...o,
                    ref: t
                })
            })
        }),
        r_ = N.forwardRef((e, t) => {
            let {
                orientation: r = "vertical",
                ...n
            } = e, o = rC(rT, e.__scopeScrollArea), i = N.useRef(null), a = N.useRef(0), [l, s] = N.useState({
                content: 0,
                viewport: 0,
                scrollbar: {
                    size: 0,
                    paddingStart: 0,
                    paddingEnd: 0
                }
            }), u = rG(l.viewport, l.content), c = { ...n,
                sizes: l,
                onSizesChange: s,
                hasThumb: !!(u > 0 && u < 1),
                onThumbChange: e => i.current = e,
                onThumbPointerUp: () => a.current = 0,
                onThumbPointerDown: e => a.current = e
            };

            function d(e, t) {
                return function(e, t, r, n = "ltr") {
                    let o = rY(r),
                        i = t || o / 2,
                        a = r.scrollbar.paddingStart + i,
                        l = r.scrollbar.size - r.scrollbar.paddingEnd - (o - i),
                        s = r.content - r.viewport;
                    return r$([a, l], "ltr" === n ? [0, s] : [-1 * s, 0])(e)
                }(e, a.current, l, t)
            }
            return "horizontal" === r ? (0, R.jsx)(rP, { ...c,
                ref: t,
                onThumbPositionChange: () => {
                    if (o.viewport && i.current) {
                        let e = rV(o.viewport.scrollLeft, l, o.dir);
                        i.current.style.transform = `translate3d(${e}px, 0, 0)`
                    }
                },
                onWheelScroll: e => {
                    o.viewport && (o.viewport.scrollLeft = e)
                },
                onDragScroll: e => {
                    o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
                }
            }) : "vertical" === r ? (0, R.jsx)(rB, { ...c,
                ref: t,
                onThumbPositionChange: () => {
                    if (o.viewport && i.current) {
                        let e = rV(o.viewport.scrollTop, l);
                        i.current.style.transform = `translate3d(0, ${e}px, 0)`
                    }
                },
                onWheelScroll: e => {
                    o.viewport && (o.viewport.scrollTop = e)
                },
                onDragScroll: e => {
                    o.viewport && (o.viewport.scrollTop = d(e))
                }
            }) : null
        }),
        rP = N.forwardRef((e, t) => {
            let {
                sizes: r,
                onSizesChange: n,
                ...o
            } = e, i = rC(rT, e.__scopeScrollArea), [a, l] = N.useState(), s = N.useRef(null), u = j(t, s, i.onScrollbarXChange);
            return N.useEffect(() => {
                s.current && l(getComputedStyle(s.current))
            }, [s]), (0, R.jsx)(rK, {
                "data-orientation": "horizontal",
                ...o,
                ref: u,
                sizes: r,
                style: {
                    bottom: 0,
                    left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                    right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                    "--radix-scroll-area-thumb-width": rY(r) + "px",
                    ...e.style
                },
                onThumbPointerDown: t => e.onThumbPointerDown(t.x),
                onDragScroll: t => e.onDragScroll(t.x),
                onWheelScroll: (t, r) => {
                    if (i.viewport) {
                        var n, o;
                        let a = i.viewport.scrollLeft + t.deltaX;
                        e.onWheelScroll(a), n = a, o = r, n > 0 && n < o && t.preventDefault()
                    }
                },
                onResize: () => {
                    s.current && i.viewport && a && n({
                        content: i.viewport.scrollWidth,
                        viewport: i.viewport.offsetWidth,
                        scrollbar: {
                            size: s.current.clientWidth,
                            paddingStart: rW(a.paddingLeft),
                            paddingEnd: rW(a.paddingRight)
                        }
                    })
                }
            })
        }),
        rB = N.forwardRef((e, t) => {
            let {
                sizes: r,
                onSizesChange: n,
                ...o
            } = e, i = rC(rT, e.__scopeScrollArea), [a, l] = N.useState(), s = N.useRef(null), u = j(t, s, i.onScrollbarYChange);
            return N.useEffect(() => {
                s.current && l(getComputedStyle(s.current))
            }, [s]), (0, R.jsx)(rK, {
                "data-orientation": "vertical",
                ...o,
                ref: u,
                sizes: r,
                style: {
                    top: 0,
                    right: "ltr" === i.dir ? 0 : void 0,
                    left: "rtl" === i.dir ? 0 : void 0,
                    bottom: "var(--radix-scroll-area-corner-height)",
                    "--radix-scroll-area-thumb-height": rY(r) + "px",
                    ...e.style
                },
                onThumbPointerDown: t => e.onThumbPointerDown(t.y),
                onDragScroll: t => e.onDragScroll(t.y),
                onWheelScroll: (t, r) => {
                    if (i.viewport) {
                        var n, o;
                        let a = i.viewport.scrollTop + t.deltaY;
                        e.onWheelScroll(a), n = a, o = r, n > 0 && n < o && t.preventDefault()
                    }
                },
                onResize: () => {
                    s.current && i.viewport && a && n({
                        content: i.viewport.scrollHeight,
                        viewport: i.viewport.offsetHeight,
                        scrollbar: {
                            size: s.current.clientHeight,
                            paddingStart: rW(a.paddingTop),
                            paddingEnd: rW(a.paddingBottom)
                        }
                    })
                }
            })
        }),
        [rk, rj] = rS(rT),
        rK = N.forwardRef((e, t) => {
            let {
                __scopeScrollArea: r,
                sizes: n,
                hasThumb: o,
                onThumbChange: i,
                onThumbPointerUp: a,
                onThumbPointerDown: l,
                onThumbPositionChange: s,
                onDragScroll: u,
                onWheelScroll: c,
                onResize: d,
                ...f
            } = e, p = rC(rT, r), [h, m] = N.useState(null), v = j(t, e => m(e)), y = N.useRef(null), b = N.useRef(""), g = p.viewport, E = n.content - n.viewport, S = X(c), x = X(s), w = rq(d, 10);

            function C(e) {
                y.current && u({
                    x: e.clientX - y.current.left,
                    y: e.clientY - y.current.top
                })
            }
            return N.useEffect(() => {
                let e = e => {
                    let t = e.target;
                    h ? .contains(t) && S(e, E)
                };
                return document.addEventListener("wheel", e, {
                    passive: !1
                }), () => document.removeEventListener("wheel", e, {
                    passive: !1
                })
            }, [g, h, E, S]), N.useEffect(x, [n, x]), rQ(h, w), rQ(p.content, w), (0, R.jsx)(rk, {
                scope: r,
                scrollbar: h,
                hasThumb: o,
                onThumbChange: X(i),
                onThumbPointerUp: X(a),
                onThumbPositionChange: x,
                onThumbPointerDown: X(l),
                children: (0, R.jsx)(V.div, { ...f,
                    ref: v,
                    style: {
                        position: "absolute",
                        ...f.style
                    },
                    onPointerDown: _(e.onPointerDown, e => {
                        0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
                    }),
                    onPointerMove: _(e.onPointerMove, C),
                    onPointerUp: _(e.onPointerUp, e => {
                        let t = e.target;
                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
                    })
                })
            })
        }),
        rM = "ScrollAreaThumb",
        rH = N.forwardRef((e, t) => {
            let {
                forceMount: r,
                ...n
            } = e, o = rj(rM, e.__scopeScrollArea);
            return (0, R.jsx)(rb, {
                present: r || o.hasThumb,
                children: (0, R.jsx)(rF, {
                    ref: t,
                    ...n
                })
            })
        }),
        rF = N.forwardRef((e, t) => {
            let {
                __scopeScrollArea: r,
                style: n,
                ...o
            } = e, i = rC(rM, r), a = rj(rM, r), {
                onThumbPositionChange: l
            } = a, s = j(t, e => a.onThumbChange(e)), u = N.useRef(void 0), c = rq(() => {
                u.current && (u.current(), u.current = void 0)
            }, 100);
            return N.useEffect(() => {
                let e = i.viewport;
                if (e) {
                    let t = () => {
                        c(), u.current || (u.current = rX(e, l), l())
                    };
                    return l(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
                }
            }, [i.viewport, c, l]), (0, R.jsx)(V.div, {
                "data-state": a.hasThumb ? "visible" : "hidden",
                ...o,
                ref: s,
                style: {
                    width: "var(--radix-scroll-area-thumb-width)",
                    height: "var(--radix-scroll-area-thumb-height)",
                    ...n
                },
                onPointerDownCapture: _(e.onPointerDownCapture, e => {
                    let t = e.target.getBoundingClientRect(),
                        r = e.clientX - t.left,
                        n = e.clientY - t.top;
                    a.onThumbPointerDown({
                        x: r,
                        y: n
                    })
                }),
                onPointerUp: _(e.onPointerUp, a.onThumbPointerUp)
            })
        });
    rH.displayName = rM;
    var rz = "ScrollAreaCorner";
    N.forwardRef((e, t) => {
        let r = rC(rz, e.__scopeScrollArea),
            n = !!(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, R.jsx)(rU, { ...e,
            ref: t
        }) : null
    }).displayName = rz;
    var rU = N.forwardRef((e, t) => {
        let {
            __scopeScrollArea: r,
            ...n
        } = e, o = rC(rz, r), [i, a] = N.useState(0), [l, s] = N.useState(0), u = !!(i && l);
        return rQ(o.scrollbarX, () => {
            let e = o.scrollbarX ? .offsetHeight || 0;
            o.onCornerHeightChange(e), s(e)
        }), rQ(o.scrollbarY, () => {
            let e = o.scrollbarY ? .offsetWidth || 0;
            o.onCornerWidthChange(e), a(e)
        }), u ? (0, R.jsx)(V.div, { ...n,
            ref: t,
            style: {
                width: i,
                height: l,
                position: "absolute",
                right: "ltr" === o.dir ? 0 : void 0,
                left: "rtl" === o.dir ? 0 : void 0,
                bottom: 0,
                ...e.style
            }
        }) : null
    });

    function rW(e) {
        return e ? parseInt(e, 10) : 0
    }

    function rG(e, t) {
        let r = e / t;
        return isNaN(r) ? 0 : r
    }

    function rY(e) {
        let t = rG(e.viewport, e.content),
            r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
        return Math.max((e.scrollbar.size - r) * t, 18)
    }

    function rV(e, t, r = "ltr") {
        let n = rY(t),
            o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
            i = t.scrollbar.size - o,
            a = t.content - t.viewport,
            l = D(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return r$([0, a], [0, i - n])(l)
    }

    function r$(e, t) {
        return r => {
            if (e[0] === e[1] || t[0] === t[1]) return t[0];
            let n = (t[1] - t[0]) / (e[1] - e[0]);
            return t[0] + n * (r - e[0])
        }
    }
    var rX = (e, t = () => {}) => {
        let r = {
                left: e.scrollLeft,
                top: e.scrollTop
            },
            n = 0;
        return ! function o() {
            let i = {
                    left: e.scrollLeft,
                    top: e.scrollTop
                },
                a = r.left !== i.left,
                l = r.top !== i.top;
            (a || l) && t(), r = i, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
    };

    function rq(e, t) {
        let r = X(e),
            n = N.useRef(0);
        return N.useEffect(() => () => window.clearTimeout(n.current), []), N.useCallback(() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
    }

    function rQ(e, t) {
        let r = X(t);
        ef(() => {
            let t = 0;
            if (e) {
                let n = new ResizeObserver(() => {
                    cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
                });
                return n.observe(e), () => {
                    window.cancelAnimationFrame(t), n.unobserve(e)
                }
            }
        }, [e, r])
    }
    let rZ = N.createContext("light"),
        rJ = N.forwardRef((e, t) => {
            let r, n, o, i, a, l = (0, O.c)(12);
            l[0] !== e ? ({
                className: n,
                children: r,
                ...o
            } = e, l[0] = e, l[1] = r, l[2] = n, l[3] = o) : (r = l[1], n = l[2], o = l[3]);
            let s = "dark" === N.useContext(rZ) ? "border-neutral-700 hover:border-neutral-500 focus:ring-neutral-500" : "border-neutral-200 hover:border-neutral-300 focus:ring-neutral-400";
            return l[4] !== n || l[5] !== s ? (i = (0, I.default)("body-1 flex h-40 items-center justify-between gap-8 rounded-full border bg-transparent px-12 py-8 font-normal whitespace-nowrap transition-colors focus:ring-2 focus:outline-none focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 rtl:flex-row-reverse [&>span]:line-clamp-1", s, n), l[4] = n, l[5] = s, l[6] = i) : i = l[6], l[7] !== r || l[8] !== o || l[9] !== t || l[10] !== i ? (a = (0, R.jsx)(tU, {
                ref: t,
                className: i,
                ...o,
                children: r
            }), l[7] = r, l[8] = o, l[9] = t, l[10] = i, l[11] = a) : a = l[11], a
        });
    rJ.displayName = tU.displayName;
    let r0 = N.forwardRef((e, t) => {
        let r, n, o, i, a = (0, O.c)(9);
        return a[0] !== e ? ({
            className: r,
            ...n
        } = e, a[0] = e, a[1] = r, a[2] = n) : (r = a[1], n = a[2]), a[3] !== r ? (o = (0, I.default)("flex cursor-default items-center justify-center py-16", r), a[3] = r, a[4] = o) : o = a[4], a[5] !== n || a[6] !== t || a[7] !== o ? (i = (0, R.jsx)(rs, {
            ref: t,
            className: o,
            ...n
        }), a[5] = n, a[6] = t, a[7] = o, a[8] = i) : i = a[8], i
    });
    r0.displayName = rs.displayName;
    let r1 = N.forwardRef((e, t) => {
        let r, n, o, i, a = (0, O.c)(9);
        return a[0] !== e ? ({
            className: r,
            ...n
        } = e, a[0] = e, a[1] = r, a[2] = n) : (r = a[1], n = a[2]), a[3] !== r ? (o = (0, I.default)("flex cursor-default items-center justify-center py-16", r), a[3] = r, a[4] = o) : o = a[4], a[5] !== n || a[6] !== t || a[7] !== o ? (i = (0, R.jsx)(rc, {
            ref: t,
            className: o,
            ...n
        }), a[5] = n, a[6] = t, a[7] = o, a[8] = i) : i = a[8], i
    });
    r1.displayName = rc.displayName;
    let r2 = N.forwardRef((e, t) => {
        let r, n, o, i, a, l, s, u, c, d, f, p, h, m, v = (0, O.c)(31);
        v[0] !== e ? ({
            className: n,
            children: r,
            position: a,
            maxHeight: l,
            style: i,
            ...o
        } = e, v[0] = e, v[1] = r, v[2] = n, v[3] = o, v[4] = i, v[5] = a, v[6] = l) : (r = v[1], n = v[2], o = v[3], i = v[4], a = v[5], l = v[6]);
        let y = void 0 === a ? "popper" : a,
            b = void 0 === l ? 300 : l,
            g = N.useContext(rZ),
            E = "dark" === g ? "border-neutral-800 bg-neutral-950" : "border-neutral-200 bg-white";
        v[7] !== n || v[8] !== E ? (s = (0, I.default)("z-dialog absolute w-fit max-w-[360px] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-sm border shadow-[0px_8px_40px_0px_rgba(0,0,0,0.16)]", E, n), v[7] = n, v[8] = E, v[9] = s) : s = v[9];
        let S = "number" == typeof b ? `${b}px` : b;
        v[10] !== S ? (u = {
            maxHeight: S
        }, v[10] = S, v[11] = u) : u = v[11], v[12] !== r ? (c = (0, R.jsx)(t6, {
            className: "flex w-full flex-col gap-8 p-8",
            children: r
        }), v[12] = r, v[13] = c) : c = v[13], v[14] !== u || v[15] !== c ? (d = (0, R.jsx)(rO, {
            className: "w-full p-0",
            style: u,
            children: c
        }), v[14] = u, v[15] = c, v[16] = d) : d = v[16];
        let x = "dark" === g ? "bg-neutral-700" : "bg-neutral-200";
        return v[17] !== x ? (f = (0, I.default)("flex-1 rounded-full", x), v[17] = x, v[18] = f) : f = v[18], v[19] !== f ? (p = (0, R.jsx)(rI, {
            className: "flex touch-none py-8 select-none data-[orientation=vertical]:w-[2px]",
            orientation: "vertical",
            children: (0, R.jsx)(rH, {
                className: f
            })
        }), v[19] = f, v[20] = p) : p = v[20], v[21] !== p || v[22] !== d ? (h = (0, R.jsxs)(rL, {
            className: "w-full",
            type: "auto",
            children: [d, p]
        }), v[21] = p, v[22] = d, v[23] = h) : h = v[23], v[24] !== y || v[25] !== o || v[26] !== t || v[27] !== i || v[28] !== h || v[29] !== s ? (m = (0, R.jsx)(tV, {
            align: "start",
            ref: t,
            className: s,
            position: y,
            style: i,
            ...o,
            onCloseAutoFocus: r5,
            children: h
        }), v[24] = y, v[25] = o, v[26] = t, v[27] = i, v[28] = h, v[29] = s, v[30] = m) : m = v[30], m
    });
    r2.displayName = tV.displayName;
    let r6 = N.forwardRef((e, t) => {
        let r, n, o, i, a = (0, O.c)(9);
        return a[0] !== e ? ({
            className: r,
            ...n
        } = e, a[0] = e, a[1] = r, a[2] = n) : (r = a[1], n = a[2]), a[3] !== r ? (o = (0, I.default)("body-1-semi-bold px-8 py-24", r), a[3] = r, a[4] = o) : o = a[4], a[5] !== n || a[6] !== t || a[7] !== o ? (i = (0, R.jsx)(t7, {
            ref: t,
            className: o,
            ...n
        }), a[5] = n, a[6] = t, a[7] = o, a[8] = i) : i = a[8], i
    });
    r6.displayName = t7.displayName;
    let r4 = N.forwardRef((e, t) => {
        let r, n, o, i, a, l, s, u, c = (0, O.c)(19);
        c[0] !== e ? ({
            className: n,
            children: r,
            leading: o,
            ...i
        } = e, c[0] = e, c[1] = r, c[2] = n, c[3] = o, c[4] = i) : (r = c[1], n = c[2], o = c[3], i = c[4]);
        let d = "dark" === N.useContext(rZ) ? "border-neutral-800 bg-neutral-950 text-white hover:bg-neutral-900 focus:bg-neutral-900" : "border-neutral-100 bg-white hover:bg-neutral-50 focus:bg-neutral-50",
            f = o ? "ps-8 pe-20" : "px-20";
        return c[5] !== n || c[6] !== d || c[7] !== f ? (a = (0, I.default)("body-1 flex w-full min-w-max cursor-pointer items-center gap-8 rounded-full border py-8 font-normal whitespace-nowrap outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50", d, f, n), c[5] = n, c[6] = d, c[7] = f, c[8] = a) : a = c[8], c[9] !== o ? (l = o ? (0, R.jsx)("span", {
            className: "shrink-0",
            children: o
        }) : null, c[9] = o, c[10] = l) : l = c[10], c[11] !== r ? (s = (0, R.jsx)(ri, {
            children: r
        }), c[11] = r, c[12] = s) : s = c[12], c[13] !== i || c[14] !== t || c[15] !== a || c[16] !== l || c[17] !== s ? (u = (0, R.jsxs)(rn, {
            ref: t,
            className: a,
            ...i,
            children: [l, s]
        }), c[13] = i, c[14] = t, c[15] = a, c[16] = l, c[17] = s, c[18] = u) : u = c[18], u
    });
    r4.displayName = rn.displayName;
    let r3 = N.forwardRef((e, t) => {
        let r, n, o, i, a = (0, O.c)(9);
        return a[0] !== e ? ({
            className: r,
            ...n
        } = e, a[0] = e, a[1] = r, a[2] = n) : (r = a[1], n = a[2]), a[3] !== r ? (o = (0, I.default)("-mx-16 my-16 h-px bg-neutral-200", r), a[3] = r, a[4] = o) : o = a[4], a[5] !== n || a[6] !== t || a[7] !== o ? (i = (0, R.jsx)(rf, {
            ref: t,
            className: o,
            ...n
        }), a[5] = n, a[6] = t, a[7] = o, a[8] = i) : i = a[8], i
    });

    function r5(e) {
        return e.preventDefault()
    }
    r3.displayName = rf.displayName, e.s(["Select", 0, e => {
        let t, r, n, o, i = (0, O.c)(8);
        i[0] !== e ? ({
            theme: r,
            ...t
        } = e, i[0] = e, i[1] = t, i[2] = r) : (t = i[1], r = i[2]);
        let a = void 0 === r ? "light" : r;
        return i[3] !== t ? (n = (0, R.jsx)(tF, { ...t
        }), i[3] = t, i[4] = n) : n = i[4], i[5] !== n || i[6] !== a ? (o = (0, R.jsx)(rZ.Provider, {
            value: a,
            children: n
        }), i[5] = n, i[6] = a, i[7] = o) : o = i[7], o
    }, "SelectContent", 0, r2, "SelectGroup", 0, t8, "SelectItem", 0, r4, "SelectLabel", 0, r6, "SelectScrollDownButton", 0, r1, "SelectScrollUpButton", 0, r0, "SelectSeparator", 0, r3, "SelectTrigger", 0, rJ, "SelectValue", 0, tG], 616066);
    var r8 = e.i(616066),
        r9 = e.i(578584),
        r7 = e.i(441243),
        ne = e.i(872016),
        nt = e.i(993481),
        nr = e.i(264728),
        nn = e.i(215067),
        no = e.i(399030),
        ni = e.i(608404),
        na = e.i(156833),
        nl = e.i(785046),
        ns = e.i(778530);

    function nu({
        onFocus: e
    }) {
        let [t, r] = (0, N.useState)(!0), n = (0, nl.useIsMounted)();
        return t ? N.default.createElement(ns.Hidden, {
            as: "button",
            type: "button",
            features: ns.HiddenFeatures.Focusable,
            onFocus: t => {
                t.preventDefault();
                let o, i = 50;
                o = requestAnimationFrame(function t() {
                    if (i-- <= 0) {
                        o && cancelAnimationFrame(o);
                        return
                    }
                    if (e()) {
                        if (cancelAnimationFrame(o), !n.current) return;
                        r(!1);
                        return
                    }
                    o = requestAnimationFrame(t)
                })
            }
        }) : null
    }
    var nc = e.i(565383),
        nd = e.i(426417),
        nf = e.i(638403),
        np = e.i(780795),
        nh = e.i(774664);
    let nm = N.createContext(null);

    function nv({
        children: e
    }) {
        let t = N.useRef({
            groups: new Map,
            get(e, t) {
                var r;
                let n = this.groups.get(e);
                n || (n = new Map, this.groups.set(e, n));
                let o = null != (r = n.get(t)) ? r : 0;
                return n.set(t, o + 1), [Array.from(n.keys()).indexOf(t), function() {
                    let e = n.get(t);
                    e > 1 ? n.set(t, e - 1) : n.delete(t)
                }]
            }
        });
        return N.createElement(nm.Provider, {
            value: t
        }, e)
    }

    function ny(e) {
        let t = N.useContext(nm);
        if (!t) throw Error("You must wrap your component in a <StableCollection>");
        let r = N.useId(),
            [n, o] = t.current.get(e, r);
        return N.useEffect(() => o, []), n
    }
    var nb = e.i(78270),
        ng = ((t = ng || {})[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t),
        nE = ((r = nE || {})[r.Less = -1] = "Less", r[r.Equal = 0] = "Equal", r[r.Greater = 1] = "Greater", r),
        nS = ((n = nS || {})[n.SetSelectedIndex = 0] = "SetSelectedIndex", n[n.RegisterTab = 1] = "RegisterTab", n[n.UnregisterTab = 2] = "UnregisterTab", n[n.RegisterPanel = 3] = "RegisterPanel", n[n.UnregisterPanel = 4] = "UnregisterPanel", n);
    let nx = {
            0(e, t) {
                var r;
                let n = (0, nc.sortByDomNode)(e.tabs, e => e.current),
                    o = (0, nc.sortByDomNode)(e.panels, e => e.current),
                    i = n.filter(e => {
                        var t;
                        return !(null != (t = e.current) && t.hasAttribute("disabled"))
                    }),
                    a = { ...e,
                        tabs: n,
                        panels: o
                    };
                if (t.index < 0 || t.index > n.length - 1) {
                    let r = (0, nd.match)(Math.sign(t.index - e.selectedIndex), {
                        [-1]: () => 1,
                        0: () => (0, nd.match)(Math.sign(t.index), {
                            [-1]: () => 0,
                            0: () => 0,
                            1: () => 1
                        }),
                        1: () => 0
                    });
                    if (0 === i.length) return a;
                    let o = (0, nd.match)(r, {
                        0: () => n.indexOf(i[0]),
                        1: () => n.indexOf(i[i.length - 1])
                    });
                    return { ...a,
                        selectedIndex: -1 === o ? e.selectedIndex : o
                    }
                }
                let l = n.slice(0, t.index),
                    s = [...n.slice(t.index), ...l].find(e => i.includes(e));
                if (!s) return a;
                let u = null != (r = n.indexOf(s)) ? r : e.selectedIndex;
                return -1 === u && (u = e.selectedIndex), { ...a,
                    selectedIndex: u
                }
            },
            1(e, t) {
                if (e.tabs.includes(t.tab)) return e;
                let r = e.tabs[e.selectedIndex],
                    n = (0, nc.sortByDomNode)([...e.tabs, t.tab], e => e.current),
                    o = e.selectedIndex;
                return e.info.current.isControlled || -1 === (o = n.indexOf(r)) && (o = e.selectedIndex), { ...e,
                    tabs: n,
                    selectedIndex: o
                }
            },
            2: (e, t) => ({ ...e,
                tabs: e.tabs.filter(e => e !== t.tab)
            }),
            3: (e, t) => e.panels.includes(t.panel) ? e : { ...e,
                panels: (0, nc.sortByDomNode)([...e.panels, t.panel], e => e.current)
            },
            4: (e, t) => ({ ...e,
                panels: e.panels.filter(e => e !== t.panel)
            })
        },
        nw = (0, N.createContext)(null);

    function nC(e) {
        let t = (0, N.useContext)(nw);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, nC), t
        }
        return t
    }
    nw.displayName = "TabsDataContext";
    let nL = (0, N.createContext)(null);

    function nR(e) {
        let t = (0, N.useContext)(nL);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, nR), t
        }
        return t
    }

    function nO(e, t) {
        return (0, nd.match)(t.type, nx, e, t)
    }
    nL.displayName = "TabsActionsContext";
    let nT = nh.RenderFeatures.RenderStrategy | nh.RenderFeatures.Static,
        nI = (0, nh.forwardRefWithAs)(function(e, t) {
            var r, n;
            let o = (0, N.useId)(),
                {
                    id: i = `headlessui-tabs-tab-${o}`,
                    disabled: a = !1,
                    autoFocus: l = !1,
                    ...s
                } = e,
                {
                    orientation: u,
                    activation: c,
                    selectedIndex: d,
                    tabs: f,
                    panels: p
                } = nC("Tab"),
                h = nR("Tab"),
                m = nC("Tab"),
                [v, y] = (0, N.useState)(null),
                b = (0, N.useRef)(null),
                g = (0, na.useSyncRefs)(b, t, y);
            (0, nr.useIsoMorphicEffect)(() => h.registerTab(b), [h, b]);
            let E = ny("tabs"),
                S = f.indexOf(b); - 1 === S && (S = E);
            let x = S === d,
                w = (0, nt.useEvent)(e => {
                    let t = e();
                    if (t === nc.FocusResult.Success && "auto" === c) {
                        let e = (0, np.getActiveElement)(b.current),
                            t = m.tabs.findIndex(t => t.current === e); - 1 !== t && h.change(t)
                    }
                    return t
                }),
                C = (0, nt.useEvent)(e => {
                    let t = f.map(e => e.current).filter(Boolean);
                    if (e.key === nb.Keys.Space || e.key === nb.Keys.Enter) {
                        e.preventDefault(), e.stopPropagation(), h.change(S);
                        return
                    }
                    switch (e.key) {
                        case nb.Keys.Home:
                        case nb.Keys.PageUp:
                            return e.preventDefault(), e.stopPropagation(), w(() => (0, nc.focusIn)(t, nc.Focus.First));
                        case nb.Keys.End:
                        case nb.Keys.PageDown:
                            return e.preventDefault(), e.stopPropagation(), w(() => (0, nc.focusIn)(t, nc.Focus.Last))
                    }
                    if (w(() => (0, nd.match)(u, {
                            vertical: () => e.key === nb.Keys.ArrowUp ? (0, nc.focusIn)(t, nc.Focus.Previous | nc.Focus.WrapAround) : e.key === nb.Keys.ArrowDown ? (0, nc.focusIn)(t, nc.Focus.Next | nc.Focus.WrapAround) : nc.FocusResult.Error,
                            horizontal: () => e.key === nb.Keys.ArrowLeft ? (0, nc.focusIn)(t, nc.Focus.Previous | nc.Focus.WrapAround) : e.key === nb.Keys.ArrowRight ? (0, nc.focusIn)(t, nc.Focus.Next | nc.Focus.WrapAround) : nc.FocusResult.Error
                        })) === nc.FocusResult.Success) return e.preventDefault()
                }),
                L = (0, N.useRef)(!1),
                R = (0, nt.useEvent)(() => {
                    var e;
                    L.current || (L.current = !0, null == (e = b.current) || e.focus({
                        preventScroll: !0
                    }), h.change(S), (0, nf.microTask)(() => {
                        L.current = !1
                    }))
                }),
                O = (0, nt.useEvent)(e => {
                    e.preventDefault()
                }),
                {
                    isFocusVisible: T,
                    focusProps: I
                } = (0, r9.useFocusRing)({
                    autoFocus: l
                }),
                {
                    isHovered: A,
                    hoverProps: D
                } = (0, r7.useHover)({
                    isDisabled: a
                }),
                {
                    pressed: _,
                    pressProps: P
                } = (0, ne.useActivePress)({
                    disabled: a
                }),
                B = (0, ni.useSlot)({
                    selected: x,
                    hover: A,
                    active: _,
                    focus: T,
                    autofocus: l,
                    disabled: a
                }),
                k = (0, nh.mergeProps)({
                    ref: g,
                    onKeyDown: C,
                    onMouseDown: O,
                    onClick: R,
                    id: i,
                    role: "tab",
                    type: (0, no.useResolveButtonType)(e, v),
                    "aria-controls": null == (n = null == (r = p[S]) ? void 0 : r.current) ? void 0 : n.id,
                    "aria-selected": x,
                    tabIndex: x ? 0 : -1,
                    disabled: a || void 0,
                    autoFocus: l
                }, I, D, P);
            return (0, nh.useRender)()({
                ourProps: k,
                theirProps: s,
                slot: B,
                defaultTag: "button",
                name: "Tabs.Tab"
            })
        }),
        nN = (0, nh.forwardRefWithAs)(function(e, t) {
            let {
                defaultIndex: r = 0,
                vertical: n = !1,
                manual: o = !1,
                onChange: i,
                selectedIndex: a = null,
                ...l
            } = e, s = n ? "vertical" : "horizontal", u = o ? "manual" : "auto", c = null !== a, d = (0, nn.useLatestValue)({
                isControlled: c
            }), f = (0, na.useSyncRefs)(t), [p, h] = (0, N.useReducer)(nO, {
                info: d,
                selectedIndex: null != a ? a : r,
                tabs: [],
                panels: []
            }), m = (0, ni.useSlot)({
                selectedIndex: p.selectedIndex
            }), v = (0, nn.useLatestValue)(i || (() => {})), y = (0, nn.useLatestValue)(p.tabs), b = (0, N.useMemo)(() => ({
                orientation: s,
                activation: u,
                ...p
            }), [s, u, p]), g = (0, nt.useEvent)(e => (h({
                type: 1,
                tab: e
            }), () => h({
                type: 2,
                tab: e
            }))), E = (0, nt.useEvent)(e => (h({
                type: 3,
                panel: e
            }), () => h({
                type: 4,
                panel: e
            }))), S = (0, nt.useEvent)(e => {
                x.current !== e && v.current(e), c || h({
                    type: 0,
                    index: e
                })
            }), x = (0, nn.useLatestValue)(c ? e.selectedIndex : p.selectedIndex), w = (0, N.useMemo)(() => ({
                registerTab: g,
                registerPanel: E,
                change: S
            }), []);
            (0, nr.useIsoMorphicEffect)(() => {
                h({
                    type: 0,
                    index: null != a ? a : r
                })
            }, [a]), (0, nr.useIsoMorphicEffect)(() => {
                if (void 0 === x.current || p.tabs.length <= 0) return;
                let e = (0, nc.sortByDomNode)(p.tabs, e => e.current);
                e.some((e, t) => p.tabs[t] !== e) && S(e.indexOf(p.tabs[x.current]))
            });
            let C = (0, nh.useRender)();
            return N.default.createElement(nv, null, N.default.createElement(nL.Provider, {
                value: w
            }, N.default.createElement(nw.Provider, {
                value: b
            }, b.tabs.length <= 0 && N.default.createElement(nu, {
                onFocus: () => {
                    var e, t;
                    for (let r of y.current)
                        if ((null == (e = r.current) ? void 0 : e.tabIndex) === 0) return null == (t = r.current) || t.focus(), !0;
                    return !1
                }
            }), C({
                ourProps: {
                    ref: f
                },
                theirProps: l,
                slot: m,
                defaultTag: "div",
                name: "Tabs"
            }))))
        }),
        nA = (0, nh.forwardRefWithAs)(function(e, t) {
            let {
                orientation: r,
                selectedIndex: n
            } = nC("Tab.List"), o = (0, na.useSyncRefs)(t), i = (0, ni.useSlot)({
                selectedIndex: n
            });
            return (0, nh.useRender)()({
                ourProps: {
                    ref: o,
                    role: "tablist",
                    "aria-orientation": r
                },
                theirProps: e,
                slot: i,
                defaultTag: "div",
                name: "Tabs.List"
            })
        }),
        nD = (0, nh.forwardRefWithAs)(function(e, t) {
            let {
                selectedIndex: r
            } = nC("Tab.Panels"), n = (0, na.useSyncRefs)(t), o = (0, ni.useSlot)({
                selectedIndex: r
            });
            return (0, nh.useRender)()({
                ourProps: {
                    ref: n
                },
                theirProps: e,
                slot: o,
                defaultTag: "div",
                name: "Tabs.Panels"
            })
        }),
        n_ = (0, nh.forwardRefWithAs)(function(e, t) {
            var r, n, o, i;
            let a = (0, N.useId)(),
                {
                    id: l = `headlessui-tabs-panel-${a}`,
                    tabIndex: s = 0,
                    ...u
                } = e,
                {
                    selectedIndex: c,
                    tabs: d,
                    panels: f
                } = nC("Tab.Panel"),
                p = nR("Tab.Panel"),
                h = (0, N.useRef)(null),
                m = (0, na.useSyncRefs)(h, t);
            (0, nr.useIsoMorphicEffect)(() => p.registerPanel(h), [p, h]);
            let v = ny("panels"),
                y = f.indexOf(h); - 1 === y && (y = v);
            let b = y === c,
                {
                    isFocusVisible: g,
                    focusProps: E
                } = (0, r9.useFocusRing)(),
                S = (0, ni.useSlot)({
                    selected: b,
                    focus: g
                }),
                x = (0, nh.mergeProps)({
                    ref: m,
                    id: l,
                    role: "tabpanel",
                    "aria-labelledby": null == (n = null == (r = d[y]) ? void 0 : r.current) ? void 0 : n.id,
                    tabIndex: b ? s : -1
                }, E),
                w = (0, nh.useRender)();
            return b || null != (o = u.unmount) && !o || null != (i = u.static) && i ? w({
                ourProps: x,
                theirProps: u,
                slot: S,
                defaultTag: "div",
                features: nT,
                visible: b,
                name: "Tabs.Panel"
            }) : N.default.createElement(ns.Hidden, {
                "aria-hidden": "true",
                ...x
            })
        }),
        nP = Object.assign(nI, {
            Group: nN,
            List: nA,
            Panels: nD,
            Panel: n_
        });
    e.s(["Tab", 0, nP, "TabGroup", 0, nN, "TabList", 0, nA, "TabPanel", 0, n_, "TabPanels", 0, nD], 335536);
    var nB = e.i(198311);
    let nk = e => {
        let t, r, n, o, i, a, l, s, u, c, d, f, p, h = (0, O.c)(28),
            {
                tabsList: m,
                selectedIndex: v,
                theme: y
            } = e,
            b = void 0 === y ? "dark" : y;
        h[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
            left: 0,
            width: 0
        }, h[0] = t) : t = h[0];
        let [g, E] = (0, N.useState)(t);
        h[1] === Symbol.for("react.memo_cache_sentinel") ? (r = [], h[1] = r) : r = h[1];
        let S = (0, N.useRef)(r);
        h[2] !== v ? (n = () => {
            let e = () => {
                let e = S.current[v];
                e && E({
                    left: e.offsetLeft,
                    width: e.offsetWidth
                })
            };
            return e(), window.addEventListener("resize", () => requestAnimationFrame(e)), () => window.removeEventListener("resize", e)
        }, h[2] = v, h[3] = n) : n = h[3], h[4] !== v || h[5] !== m ? (o = [m, v], h[4] = v, h[5] = m, h[6] = o) : o = h[6], (0, N.useEffect)(n, o);
        let x = "dark" === b && "dark";
        h[7] !== x ? (i = (0, I.default)("relative flex justify-center", x), h[7] = x, h[8] = i) : i = h[8];
        let w = "dark" === b ? "bg-surface" : "bg-neutral-100";
        return h[9] !== w ? (a = (0, I.default)("inline-flex rounded-full p-2", w), h[9] = w, h[10] = a) : a = h[10], h[11] !== g.left || h[12] !== g.width ? (l = {
            left: g.left,
            width: g.width
        }, h[11] = g.left, h[12] = g.width, h[13] = l) : l = h[13], h[14] === Symbol.for("react.memo_cache_sentinel") ? (s = {
            type: "spring",
            stiffness: 300,
            damping: 30
        }, h[14] = s) : s = h[14], h[15] !== l ? (u = (0, R.jsx)(nB.motion.div, {
            "aria-hidden": !0,
            className: "border-base pointer-events-none absolute top-0 bottom-0 rounded-full border",
            animate: l,
            transition: s
        }), h[15] = l, h[16] = u) : u = h[16], h[17] !== m ? (c = m.map((e, t) => (0, R.jsx)(nP, {
            ref: e => {
                S.current[t] = e
            },
            className: (0, I.default)("body-3 relative z-10 rounded-full px-16 py-8 transition-colors outline-none", "aria-[selected=false]:hover:bg-surface-hover"),
            children: e
        }, e)), h[17] = m, h[18] = c) : c = h[18], h[19] !== u || h[20] !== c ? (d = (0, R.jsxs)(nA, {
            className: "relative inline-flex gap-4 rounded-full bg-transparent text-base",
            children: [u, c]
        }), h[19] = u, h[20] = c, h[21] = d) : d = h[21], h[22] !== d || h[23] !== a ? (f = (0, R.jsx)("div", {
            className: a,
            children: d
        }), h[22] = d, h[23] = a, h[24] = f) : f = h[24], h[25] !== f || h[26] !== i ? (p = (0, R.jsx)("div", {
            className: i,
            children: f
        }), h[25] = f, h[26] = i, h[27] = p) : p = h[27], p
    };
    e.s(["default", 0, nk], 722846);
    let nj = {
        Section: p.default,
        TagHud: h.default,
        CardBorder: m.CardBorder,
        CardTitle: v.CardTitle,
        CardHeader: y.CardHeader,
        CardBody: b.CardBody,
        CardFooter: g.CardFooter,
        CardFreeShipping: E.CardFreeShipping,
        CardImageWithRecover: S.CardImageWithRecover,
        Divider: x.default,
        HudBox: C.HudBox,
        HudBoxBasic: L.HudBoxBasic,
        HudBoxWithRichText: e => {
            let t, r, n, o, i, a, l, s, u = (0, O.c)(17);
            u[0] !== e ? ({
                theme: n,
                title: o,
                richText: r,
                ...t
            } = e, u[0] = e, u[1] = t, u[2] = r, u[3] = n, u[4] = o) : (t = u[1], r = u[2], n = u[3], o = u[4]), u[5] !== o ? (i = (0, R.jsx)("h3", {
                className: "heading-4-semi-bold",
                children: o
            }), u[5] = o, u[6] = i) : i = u[6];
            let c = "dark" === n ? "rich-text-a:text-white" : "rich-text-a:text-black";
            return u[7] !== c ? (a = (0, I.default)(c), u[7] = c, u[8] = a) : a = u[8], u[9] !== r || u[10] !== a ? (l = (0, R.jsx)(T.default, {
                content: r,
                className: a
            }), u[9] = r, u[10] = a, u[11] = l) : l = u[11], u[12] !== t || u[13] !== i || u[14] !== l || u[15] !== n ? (s = (0, R.jsxs)(nj.HudBox, {
                theme: n,
                ...t,
                children: [i, l]
            }), u[12] = t, u[13] = i, u[14] = l, u[15] = n, u[16] = s) : s = u[16], s
        },
        LoadingSpinner: w.default,
        Switch: nk,
        ...r8
    }
}, 660600, 363749, e => {
    "use strict";
    let t, r, n, o;
    var i = e.i(578584),
        a = e.i(441243),
        l = e.i(191788),
        s = e.i(730943),
        u = e.i(872016),
        c = e.i(759146),
        d = e.i(829672),
        f = e.i(160374),
        p = e.i(626171),
        h = e.i(880150),
        m = e.i(993481),
        v = e.i(71147),
        y = e.i(373483),
        b = e.i(264728),
        g = e.i(215067),
        E = e.i(468327),
        S = e.i(587264),
        x = e.i(476925),
        w = e.i(941888),
        C = e.i(399030),
        L = e.i(104067),
        R = e.i(608404),
        O = e.i(156833),
        T = e.i(855367);
    let I = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

    function N(e) {
        var t, r;
        let n = null != (t = e.innerText) ? t : "",
            o = e.cloneNode(!0);
        if (!T.isHTMLElement(o)) return n;
        let i = !1;
        for (let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), i = !0;
        let a = i ? null != (r = o.innerText) ? r : "" : n;
        return I.test(a) && (a = a.replace(I, "")), a
    }

    function A(e) {
        let t = (0, l.useRef)(""),
            r = (0, l.useRef)("");
        return (0, m.useEvent)(() => {
            let n = e.current;
            if (!n) return "";
            let o = n.innerText;
            if (t.current === o) return r.current;
            let i = (function(e) {
                let t = e.getAttribute("aria-label");
                if ("string" == typeof t) return t.trim();
                let r = e.getAttribute("aria-labelledby");
                if (r) {
                    let e = r.split(" ").map(e => {
                        let t = document.getElementById(e);
                        if (t) {
                            let e = t.getAttribute("aria-label");
                            return "string" == typeof e ? e.trim() : N(t).trim()
                        }
                        return null
                    }).filter(Boolean);
                    if (e.length > 0) return e.join(", ")
                }
                return N(e).trim()
            })(n).trim().toLowerCase();
            return t.current = o, r.current = i, i
        })
    }
    e.s(["useTextValue", 0, A], 363749);
    var D = e.i(798294),
        _ = e.i(880281),
        P = e.i(760360),
        B = e.i(315503),
        k = e.i(128708),
        j = e.i(448714),
        K = e.i(196061),
        M = e.i(896694),
        H = e.i(331774),
        F = e.i(459778),
        z = e.i(387706),
        U = e.i(760004),
        W = e.i(565383),
        G = e.i(447105),
        Y = e.i(426417),
        V = e.i(780795),
        $ = e.i(774664),
        X = e.i(472381),
        q = e.i(78270),
        Q = e.i(709769),
        Z = e.i(962750),
        J = e.i(214929),
        ee = e.i(161614),
        et = Object.defineProperty,
        er = (e, t, r) => {
            let n;
            return (n = "symbol" != typeof t ? t + "" : t) in e ? et(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[n] = r, r
        },
        en = ((t = en || {})[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t),
        eo = ((r = eo || {})[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r),
        ei = ((n = ei || {})[n.Pointer = 0] = "Pointer", n[n.Other = 1] = "Other", n),
        ea = ((o = ea || {})[o.OpenListbox = 0] = "OpenListbox", o[o.CloseListbox = 1] = "CloseListbox", o[o.GoToOption = 2] = "GoToOption", o[o.Search = 3] = "Search", o[o.ClearSearch = 4] = "ClearSearch", o[o.SelectOption = 5] = "SelectOption", o[o.RegisterOptions = 6] = "RegisterOptions", o[o.UnregisterOptions = 7] = "UnregisterOptions", o[o.SetButtonElement = 8] = "SetButtonElement", o[o.SetOptionsElement = 9] = "SetOptionsElement", o[o.SortOptions = 10] = "SortOptions", o[o.MarkButtonAsMoved = 11] = "MarkButtonAsMoved", o);

    function el(e, t = e => e) {
        let r = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
            n = (0, W.sortByDomNode)(t(e.options.slice()), e => e.dataRef.current.domRef.current),
            o = r ? n.indexOf(r) : null;
        return -1 === o && (o = null), {
            options: n,
            activeOptionIndex: o
        }
    }
    let es = {
        1(e) {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let t = e.buttonElement ? ee.ElementPositionState.Tracked((0, ee.computeVisualPosition)(e.buttonElement)) : e.buttonPositionState;
            return { ...e,
                activeOptionIndex: null,
                pendingFocus: {
                    focus: z.Focus.Nothing
                },
                listboxState: 1,
                __demoMode: !1,
                buttonPositionState: t
            }
        },
        0(e, t) {
            if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
            let r = e.activeOptionIndex,
                {
                    isSelected: n
                } = e.dataRef.current,
                o = e.options.findIndex(e => n(e.dataRef.current.value));
            return -1 !== o && (r = o), { ...e,
                frozenValue: !1,
                pendingFocus: t.focus,
                listboxState: 0,
                activeOptionIndex: r,
                __demoMode: !1,
                buttonPositionState: ee.ElementPositionState.Idle
            }
        },
        2(e, t) {
            var r, n, o, i, a;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let l = { ...e,
                searchQuery: "",
                activationTrigger: null != (r = t.trigger) ? r : 1,
                __demoMode: !1
            };
            if (t.focus === z.Focus.Nothing) return { ...l,
                activeOptionIndex: null
            };
            if (t.focus === z.Focus.Specific) return { ...l,
                activeOptionIndex: e.options.findIndex(e => e.id === t.id)
            };
            if (t.focus === z.Focus.Previous) {
                let r = e.activeOptionIndex;
                if (null !== r) {
                    let i = e.options[r].dataRef.current.domRef,
                        a = (0, z.calculateActiveIndex)(t, {
                            resolveItems: () => e.options,
                            resolveActiveIndex: () => e.activeOptionIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                    if (null !== a) {
                        let t = e.options[a].dataRef.current.domRef;
                        if ((null == (n = i.current) ? void 0 : n.previousElementSibling) === t.current || (null == (o = t.current) ? void 0 : o.previousElementSibling) === null) return { ...l,
                            activeOptionIndex: a
                        }
                    }
                }
            } else if (t.focus === z.Focus.Next) {
                let r = e.activeOptionIndex;
                if (null !== r) {
                    let n = e.options[r].dataRef.current.domRef,
                        o = (0, z.calculateActiveIndex)(t, {
                            resolveItems: () => e.options,
                            resolveActiveIndex: () => e.activeOptionIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                    if (null !== o) {
                        let t = e.options[o].dataRef.current.domRef;
                        if ((null == (i = n.current) ? void 0 : i.nextElementSibling) === t.current || (null == (a = t.current) ? void 0 : a.nextElementSibling) === null) return { ...l,
                            activeOptionIndex: o
                        }
                    }
                }
            }
            let s = el(e),
                u = (0, z.calculateActiveIndex)(t, {
                    resolveItems: () => s.options,
                    resolveActiveIndex: () => s.activeOptionIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                });
            return { ...l,
                ...s,
                activeOptionIndex: u
            }
        },
        3: (e, t) => {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let r = +("" === e.searchQuery),
                n = e.searchQuery + t.value.toLowerCase(),
                o = (null !== e.activeOptionIndex ? e.options.slice(e.activeOptionIndex + r).concat(e.options.slice(0, e.activeOptionIndex + r)) : e.options).find(e => {
                    var t;
                    return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n))
                }),
                i = o ? e.options.indexOf(o) : -1;
            return -1 === i || i === e.activeOptionIndex ? { ...e,
                searchQuery: n
            } : { ...e,
                searchQuery: n,
                activeOptionIndex: i,
                activationTrigger: 1
            }
        },
        4: e => e.dataRef.current.disabled || 1 === e.listboxState || "" === e.searchQuery ? e : { ...e,
            searchQuery: ""
        },
        5: e => 0 === e.dataRef.current.mode ? { ...e,
            frozenValue: !0
        } : { ...e
        },
        6: (e, t) => {
            let r = e.options.concat(t.options),
                n = e.activeOptionIndex;
            if (e.pendingFocus.focus !== z.Focus.Nothing && (n = (0, z.calculateActiveIndex)(e.pendingFocus, {
                    resolveItems: () => r,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                })), null === e.activeOptionIndex) {
                let {
                    isSelected: t
                } = e.dataRef.current;
                if (t) {
                    let e = r.findIndex(e => null == t ? void 0 : t(e.dataRef.current.value)); - 1 !== e && (n = e)
                }
            }
            return { ...e,
                options: r,
                activeOptionIndex: n,
                pendingFocus: {
                    focus: z.Focus.Nothing
                },
                pendingShouldSort: !0
            }
        },
        7: (e, t) => {
            let r = e.options,
                n = [],
                o = new Set(t.options);
            for (let [e, t] of r.entries())
                if (o.has(t.id) && (n.push(e), o.delete(t.id), 0 === o.size)) break;
            if (n.length > 0)
                for (let e of (r = r.slice(), n.reverse())) r.splice(e, 1);
            return { ...e,
                options: r,
                activationTrigger: 1
            }
        },
        8: (e, t) => e.buttonElement === t.element ? e : { ...e,
            buttonElement: t.element
        },
        9: (e, t) => e.optionsElement === t.element ? e : { ...e,
            optionsElement: t.element
        },
        10: e => e.pendingShouldSort ? { ...e,
            ...el(e),
            pendingShouldSort: !1
        } : e,
        11: e => "Tracked" !== e.buttonPositionState.kind ? e : { ...e,
            buttonPositionState: ee.ElementPositionState.Moved
        }
    };
    class eu extends J.Machine {
        constructor(e) {
            super(e), er(this, "actions", {
                onChange: e => {
                    let {
                        onChange: t,
                        compare: r,
                        mode: n,
                        value: o
                    } = this.state.dataRef.current;
                    return (0, Y.match)(n, {
                        0: () => null == t ? void 0 : t(e),
                        1: () => {
                            let n = o.slice(),
                                i = n.findIndex(t => r(t, e));
                            return -1 === i ? n.push(e) : n.splice(i, 1), null == t ? void 0 : t(n)
                        }
                    })
                },
                registerOption: (0, J.batch)(() => {
                    let e = [],
                        t = new Set;
                    return [(r, n) => {
                        t.has(n) || (t.add(n), e.push({
                            id: r,
                            dataRef: n
                        }))
                    }, () => (t.clear(), this.send({
                        type: 6,
                        options: e.splice(0)
                    }))]
                }),
                unregisterOption: (0, J.batch)(() => {
                    let e = [];
                    return [t => e.push(t), () => {
                        this.send({
                            type: 7,
                            options: e.splice(0)
                        })
                    }]
                }),
                goToOption: (0, J.batch)(() => {
                    let e = null;
                    return [(t, r) => {
                        e = {
                            type: 2,
                            ...t,
                            trigger: r
                        }
                    }, () => e && this.send(e)]
                }),
                closeListbox: () => {
                    this.send({
                        type: 1
                    })
                },
                openListbox: e => {
                    this.send({
                        type: 0,
                        focus: e
                    })
                },
                selectActiveOption: () => {
                    var e;
                    if (null !== this.state.activeOptionIndex) {
                        let {
                            dataRef: e
                        } = this.state.options[this.state.activeOptionIndex];
                        this.actions.selectOption(e.current.value)
                    } else 0 === this.state.dataRef.current.mode && (this.actions.closeListbox(), null == (e = this.state.buttonElement) || e.focus({
                        preventScroll: !0
                    }))
                },
                selectOption: e => {
                    this.send({
                        type: 5,
                        value: e
                    })
                },
                search: e => {
                    this.send({
                        type: 3,
                        value: e
                    })
                },
                clearSearch: () => {
                    this.send({
                        type: 4
                    })
                },
                setButtonElement: e => {
                    this.send({
                        type: 8,
                        element: e
                    })
                },
                setOptionsElement: e => {
                    this.send({
                        type: 9,
                        element: e
                    })
                }
            }), er(this, "selectors", {
                activeDescendantId(e) {
                    var t;
                    let r = e.activeOptionIndex,
                        n = e.options;
                    return null === r || null == (t = n[r]) ? void 0 : t.id
                },
                isActive(e, t) {
                    var r;
                    let n = e.activeOptionIndex,
                        o = e.options;
                    return null !== n && (null == (r = o[n]) ? void 0 : r.id) === t
                },
                hasFrozenValue: e => e.frozenValue,
                shouldScrollIntoView(e, t) {
                    return !e.__demoMode && 0 === e.listboxState && 0 !== e.activationTrigger && this.isActive(e, t)
                },
                didButtonMove: e => "Moved" === e.buttonPositionState.kind
            }), this.on(6, () => {
                requestAnimationFrame(() => {
                    this.send({
                        type: 10
                    })
                })
            }); {
                let e = this.state.id,
                    t = H.stackMachines.get(null);
                this.disposables.add(t.on(H.ActionTypes.Push, r => {
                    t.selectors.isTop(r, e) || 0 !== this.state.listboxState || this.actions.closeListbox()
                })), this.on(0, () => t.actions.push(e)), this.on(1, () => t.actions.pop(e))
            }
            this.disposables.group(e => {
                this.on(1, t => {
                    t.buttonElement && (e.dispose(), e.add((0, ee.detectMovement)(t.buttonElement, t.buttonPositionState, () => {
                        this.send({
                            type: 11
                        })
                    })))
                })
            }), this.on(5, (e, t) => {
                var r;
                this.actions.onChange(t.value), 0 === this.state.dataRef.current.mode && (this.actions.closeListbox(), null == (r = this.state.buttonElement) || r.focus({
                    preventScroll: !0
                }))
            })
        }
        static new({
            id: e,
            __demoMode: t = !1
        }) {
            return new eu({
                id: e,
                dataRef: {
                    current: {}
                },
                listboxState: +!t,
                options: [],
                searchQuery: "",
                activeOptionIndex: null,
                activationTrigger: 1,
                buttonElement: null,
                optionsElement: null,
                pendingShouldSort: !1,
                pendingFocus: {
                    focus: z.Focus.Nothing
                },
                frozenValue: !1,
                __demoMode: t,
                buttonPositionState: ee.ElementPositionState.Idle
            })
        }
        reduce(e, t) {
            return (0, Y.match)(t.type, es, e, t)
        }
    }
    var ec = e.i(721867);
    let ed = (0, l.createContext)(null);

    function ef(e) {
        let t = (0, l.useContext)(ed);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, ep), t
        }
        return t
    }

    function ep({
        id: e,
        __demoMode: t = !1
    }) {
        let r = (0, l.useMemo)(() => eu.new({
            id: e,
            __demoMode: t
        }), []);
        return (0, ec.useOnUnmount)(() => r.dispose()), r
    }
    let eh = (0, l.createContext)(null);

    function em(e) {
        let t = (0, l.useContext)(eh);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, em), t
        }
        return t
    }
    eh.displayName = "ListboxDataContext";
    let ev = l.Fragment,
        ey = (0, l.createContext)(!1),
        eb = $.RenderFeatures.RenderStrategy | $.RenderFeatures.Static,
        eg = l.Fragment,
        eE = (0, $.forwardRefWithAs)(function(e, t) {
            let r = (0, l.useId)(),
                n = (0, P.useDisabled)(),
                {
                    value: o,
                    defaultValue: i,
                    form: a,
                    name: s,
                    onChange: u,
                    by: p,
                    invalid: h = !1,
                    disabled: m = n || !1,
                    horizontal: v = !1,
                    multiple: y = !1,
                    __demoMode: g = !1,
                    ...E
                } = e,
                x = (0, O.useSyncRefs)(t),
                w = (0, f.useDefaultValue)(i),
                [C = y ? [] : void 0, L] = (0, d.useControllable)(o, u, w),
                T = ep({
                    id: r,
                    __demoMode: g
                }),
                I = (0, l.useRef)({
                    static: !1,
                    hold: !1
                }),
                N = (0, l.useRef)(new Map),
                A = (0, c.useByComparator)(p),
                D = (0, l.useCallback)(e => (0, Y.match)(_.mode, {
                    [eo.Multi]: () => C.some(t => A(t, e)),
                    [eo.Single]: () => A(C, e)
                }), [C]),
                _ = (0, R.useSlot)({
                    value: C,
                    disabled: m,
                    invalid: h,
                    mode: y ? eo.Multi : eo.Single,
                    orientation: v ? "horizontal" : "vertical",
                    onChange: L,
                    compare: A,
                    isSelected: D,
                    optionsPropsRef: I,
                    listRef: N
                });
            (0, b.useIsoMorphicEffect)(() => {
                T.state.dataRef.current = _
            }, [_]);
            let j = (0, F.useSlice)(T, e => e.listboxState),
                K = H.stackMachines.get(null),
                z = (0, F.useSlice)(K, (0, l.useCallback)(e => K.selectors.isTop(e, r), [K, r])),
                [U, G] = (0, F.useSlice)(T, e => [e.buttonElement, e.optionsElement]);
            (0, S.useOutsideClick)(z, [U, G], (e, t) => {
                T.send({
                    type: ea.CloseListbox
                }), (0, W.isFocusableElement)(t, W.FocusableMode.Loose) || (e.preventDefault(), null == U || U.focus())
            });
            let V = (0, R.useSlot)({
                    open: j === en.Open,
                    disabled: m,
                    invalid: h,
                    value: C
                }),
                [X, q] = (0, Q.useLabels)({
                    inherit: !0
                }),
                Z = (0, l.useCallback)(() => {
                    if (void 0 !== w) return null == L ? void 0 : L(w)
                }, [L, w]),
                J = (0, $.useRender)();
            return l.default.createElement(q, {
                value: X,
                props: {
                    htmlFor: null == U ? void 0 : U.id
                },
                slot: {
                    open: j === en.Open,
                    disabled: m
                }
            }, l.default.createElement(B.FloatingProvider, null, l.default.createElement(ed.Provider, {
                value: T
            }, l.default.createElement(eh.Provider, {
                value: _
            }, l.default.createElement(M.OpenClosedProvider, {
                value: (0, Y.match)(j, {
                    [en.Open]: M.State.Open,
                    [en.Closed]: M.State.Closed
                })
            }, null != s && null != C && l.default.createElement(k.FormFields, {
                disabled: m,
                data: {
                    [s]: C
                },
                form: a,
                onReset: Z
            }), J({
                ourProps: {
                    ref: x
                },
                theirProps: E,
                slot: V,
                defaultTag: ev,
                name: "Listbox"
            }))))))
        }),
        eS = (0, $.forwardRefWithAs)(function(e, t) {
            let r = (0, l.useId)(),
                n = (0, K.useProvidedId)(),
                o = em("Listbox.Button"),
                c = ef("Listbox.Button"),
                {
                    id: d = n || `headlessui-listbox-button-${r}`,
                    disabled: f = o.disabled || !1,
                    autoFocus: p = !1,
                    ...h
                } = e,
                y = (0, O.useSyncRefs)(t, (0, B.useFloatingReference)(), c.actions.setButtonElement),
                b = (0, B.useFloatingReferenceProps)(),
                [g, E, S] = (0, F.useSlice)(c, e => [e.listboxState, e.buttonElement, e.optionsElement]),
                x = g === en.Open;
            (0, w.useQuickRelease)(x, {
                trigger: E,
                action: (0, l.useCallback)(e => {
                    if (null != E && E.contains(e.target)) return w.Action.Ignore;
                    let t = e.target.closest('[role="option"]:not([data-disabled])');
                    return T.isHTMLElement(t) ? w.Action.Select(t) : null != S && S.contains(e.target) ? w.Action.Ignore : w.Action.Close
                }, [E, S]),
                close: c.actions.closeListbox,
                select: c.actions.selectActiveOption
            });
            let L = (0, m.useEvent)(e => {
                    switch (e.key) {
                        case q.Keys.Enter:
                            (0, G.attemptSubmit)(e.currentTarget);
                            break;
                        case q.Keys.Space:
                        case q.Keys.ArrowDown:
                            e.preventDefault(), c.actions.openListbox({
                                focus: o.value ? z.Focus.Nothing : z.Focus.First
                            });
                            break;
                        case q.Keys.ArrowUp:
                            e.preventDefault(), c.actions.openListbox({
                                focus: o.value ? z.Focus.Nothing : z.Focus.Last
                            })
                    }
                }),
                I = (0, m.useEvent)(e => {
                    e.key === q.Keys.Space && e.preventDefault()
                }),
                N = (0, v.useHandleToggle)(e => {
                    var t;
                    c.state.listboxState === en.Open ? ((0, s.flushSync)(() => c.actions.closeListbox()), null == (t = c.state.buttonElement) || t.focus({
                        preventScroll: !0
                    })) : (e.preventDefault(), c.actions.openListbox({
                        focus: z.Focus.Nothing
                    }))
                }),
                A = (0, m.useEvent)(e => e.preventDefault()),
                D = (0, Q.useLabelledBy)([d]),
                _ = (0, X.useDescribedBy)(),
                {
                    isFocusVisible: P,
                    focusProps: k
                } = (0, i.useFocusRing)({
                    autoFocus: p
                }),
                {
                    isHovered: j,
                    hoverProps: M
                } = (0, a.useHover)({
                    isDisabled: f
                }),
                {
                    pressed: H,
                    pressProps: U
                } = (0, u.useActivePress)({
                    disabled: f
                }),
                W = (0, R.useSlot)({
                    open: g === en.Open,
                    active: H || g === en.Open,
                    disabled: f,
                    invalid: o.invalid,
                    value: o.value,
                    hover: j,
                    focus: P,
                    autofocus: p
                }),
                Y = (0, F.useSlice)(c, e => e.listboxState === en.Open),
                V = (0, $.mergeProps)(b(), {
                    ref: y,
                    id: d,
                    type: (0, C.useResolveButtonType)(e, E),
                    "aria-haspopup": "listbox",
                    "aria-controls": null == S ? void 0 : S.id,
                    "aria-expanded": Y,
                    "aria-labelledby": D,
                    "aria-describedby": _,
                    disabled: f || void 0,
                    autoFocus: p,
                    onKeyDown: L,
                    onKeyUp: I,
                    onKeyPress: A
                }, N, k, M, U);
            return (0, $.useRender)()({
                ourProps: V,
                theirProps: h,
                slot: W,
                defaultTag: "button",
                name: "Listbox.Button"
            })
        }),
        ex = Q.Label,
        ew = (0, $.forwardRefWithAs)(function(e, t) {
            let r = (0, l.useId)(),
                {
                    id: n = `headlessui-listbox-options-${r}`,
                    anchor: o,
                    portal: i = !1,
                    modal: a = !0,
                    transition: u = !1,
                    ...c
                } = e,
                d = (0, B.useResolvedAnchor)(o),
                [f, v] = (0, l.useState)(null);
            d && (i = !0);
            let b = em("Listbox.Options"),
                g = ef("Listbox.Options"),
                [S, w, C, T] = (0, F.useSlice)(g, e => [e.listboxState, e.buttonElement, e.optionsElement, e.__demoMode]),
                I = (0, x.useOwnerDocument)(w),
                N = (0, x.useOwnerDocument)(C),
                A = (0, M.useOpenClosed)(),
                [D, P] = (0, _.useTransition)(u, f, null !== A ? (A & M.State.Open) === M.State.Open : S === en.Open);
            (0, E.useOnDisappear)(D, w, g.actions.closeListbox);
            let k = !T && a && S === en.Open;
            (0, L.useScrollLock)(k, N);
            let K = !T && a && S === en.Open;
            (0, y.useInertOthers)(K, {
                allowed: (0, l.useCallback)(() => [w, C], [w, C])
            });
            let H = !(0, F.useSlice)(g, g.selectors.didButtonMove) && D,
                U = (0, F.useSlice)(g, g.selectors.hasFrozenValue) && !e.static,
                G = (0, j.useFrozenData)(U, b.value),
                X = (0, l.useCallback)(e => b.compare(G, e), [b.compare, G]),
                Q = (0, F.useSlice)(g, e => {
                    var t;
                    if (null == d || !(null != (t = null == d ? void 0 : d.to) && t.includes("selection"))) return null;
                    let r = e.options.findIndex(e => X(e.dataRef.current.value));
                    return -1 === r && (r = 0), r
                }),
                J = (() => {
                    if (null == d) return;
                    if (null === Q) return { ...d,
                        inner: void 0
                    };
                    let e = Array.from(b.listRef.current.values());
                    return { ...d,
                        inner: {
                            listRef: {
                                current: e
                            },
                            index: Q
                        }
                    }
                })(),
                [ee, et] = (0, B.useFloatingPanel)(J),
                er = (0, B.useFloatingPanelProps)(),
                ei = (0, O.useSyncRefs)(t, d ? ee : null, g.actions.setOptionsElement, v),
                ea = (0, p.useDisposables)();
            (0, l.useEffect)(() => {
                C && S === en.Open && ((0, V.isActiveElement)(C) || null == C || C.focus({
                    preventScroll: !0
                }))
            }, [S, C]);
            let el = (0, m.useEvent)(e => {
                    var t;
                    switch (ea.dispose(), e.key) {
                        case q.Keys.Space:
                            if ("" !== g.state.searchQuery) return e.preventDefault(), e.stopPropagation(), g.actions.search(e.key);
                        case q.Keys.Enter:
                            e.preventDefault(), e.stopPropagation(), g.actions.selectActiveOption();
                            break;
                        case (0, Y.match)(b.orientation, {
                            vertical: q.Keys.ArrowDown,
                            horizontal: q.Keys.ArrowRight
                        }):
                            return e.preventDefault(), e.stopPropagation(), g.actions.goToOption({
                                focus: z.Focus.Next
                            });
                        case (0, Y.match)(b.orientation, {
                            vertical: q.Keys.ArrowUp,
                            horizontal: q.Keys.ArrowLeft
                        }):
                            return e.preventDefault(), e.stopPropagation(), g.actions.goToOption({
                                focus: z.Focus.Previous
                            });
                        case q.Keys.Home:
                        case q.Keys.PageUp:
                            return e.preventDefault(), e.stopPropagation(), g.actions.goToOption({
                                focus: z.Focus.First
                            });
                        case q.Keys.End:
                        case q.Keys.PageDown:
                            return e.preventDefault(), e.stopPropagation(), g.actions.goToOption({
                                focus: z.Focus.Last
                            });
                        case q.Keys.Escape:
                            e.preventDefault(), e.stopPropagation(), (0, s.flushSync)(() => g.actions.closeListbox()), null == (t = g.state.buttonElement) || t.focus({
                                preventScroll: !0
                            });
                            return;
                        case q.Keys.Tab:
                            e.preventDefault(), e.stopPropagation(), (0, s.flushSync)(() => g.actions.closeListbox()), (0, W.focusFrom)(g.state.buttonElement, e.shiftKey ? W.Focus.Previous : W.Focus.Next);
                            break;
                        default:
                            1 === e.key.length && (g.actions.search(e.key), ea.setTimeout(() => g.actions.clearSearch(), 350))
                    }
                }),
                es = (0, F.useSlice)(g, e => {
                    var t;
                    return null == (t = e.buttonElement) ? void 0 : t.id
                }),
                eu = (0, R.useSlot)({
                    open: S === en.Open
                }),
                ec = (0, $.mergeProps)(d ? er() : {}, {
                    id: n,
                    ref: ei,
                    "aria-activedescendant": (0, F.useSlice)(g, g.selectors.activeDescendantId),
                    "aria-multiselectable": b.mode === eo.Multi || void 0,
                    "aria-labelledby": es,
                    "aria-orientation": b.orientation,
                    onKeyDown: el,
                    role: "listbox",
                    tabIndex: S === en.Open ? 0 : void 0,
                    style: { ...c.style,
                        ...et,
                        "--button-width": (0, h.useElementSize)(D, w, !0).width
                    },
                    ...(0, _.transitionDataAttributes)(P)
                }),
                ed = (0, $.useRender)(),
                ep = (0, l.useMemo)(() => b.mode === eo.Multi ? b : { ...b,
                    isSelected: X
                }, [b, X]);
            return l.default.createElement(Z.Portal, {
                enabled: !!i && (e.static || D),
                ownerDocument: I
            }, l.default.createElement(eh.Provider, {
                value: ep
            }, ed({
                ourProps: ec,
                theirProps: c,
                slot: eu,
                defaultTag: "div",
                features: eb,
                visible: H,
                name: "Listbox.Options"
            })))
        }),
        eC = (0, $.forwardRefWithAs)(function(e, t) {
            let r = (0, l.useId)(),
                {
                    id: n = `headlessui-listbox-option-${r}`,
                    disabled: o = !1,
                    value: i,
                    ...a
                } = e,
                s = !0 === (0, l.useContext)(ey),
                u = em("Listbox.Option"),
                c = ef("Listbox.Option"),
                d = (0, F.useSlice)(c, e => c.selectors.isActive(e, n)),
                f = u.isSelected(i),
                p = (0, l.useRef)(null),
                h = A(p),
                v = (0, g.useLatestValue)({
                    disabled: o,
                    value: i,
                    domRef: p,
                    get textValue() {
                        return h()
                    }
                }),
                y = (0, O.useSyncRefs)(t, p, e => {
                    e ? u.listRef.current.set(n, e) : u.listRef.current.delete(n)
                }),
                E = (0, F.useSlice)(c, e => c.selectors.shouldScrollIntoView(e, n));
            (0, b.useIsoMorphicEffect)(() => {
                if (E) return (0, U.disposables)().requestAnimationFrame(() => {
                    var e, t;
                    null == (t = null == (e = p.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                        block: "nearest"
                    })
                })
            }, [E, p]), (0, b.useIsoMorphicEffect)(() => {
                if (!s) return c.actions.registerOption(n, v), () => c.actions.unregisterOption(n)
            }, [v, n, s]);
            let S = (0, m.useEvent)(e => {
                    if (o) return e.preventDefault();
                    c.actions.selectOption(i)
                }),
                x = (0, m.useEvent)(() => {
                    if (o) return c.actions.goToOption({
                        focus: z.Focus.Nothing
                    });
                    c.actions.goToOption({
                        focus: z.Focus.Specific,
                        id: n
                    })
                }),
                w = (0, D.useTrackedPointer)(),
                C = (0, m.useEvent)(e => w.update(e)),
                L = (0, m.useEvent)(e => {
                    w.wasMoved(e) && (o || d && c.state.activationTrigger === ei.Pointer || c.actions.goToOption({
                        focus: z.Focus.Specific,
                        id: n
                    }, ei.Pointer))
                }),
                T = (0, m.useEvent)(e => {
                    w.wasMoved(e) && (o || d && c.state.activationTrigger === ei.Pointer && c.actions.goToOption({
                        focus: z.Focus.Nothing
                    }))
                }),
                I = (0, R.useSlot)({
                    active: d,
                    focus: d,
                    selected: f,
                    disabled: o,
                    selectedOption: f && s
                }),
                N = s ? {} : {
                    id: n,
                    ref: y,
                    role: "option",
                    tabIndex: !0 === o ? void 0 : -1,
                    "aria-disabled": !0 === o || void 0,
                    "aria-selected": f,
                    disabled: void 0,
                    onClick: S,
                    onFocus: x,
                    onPointerEnter: C,
                    onMouseEnter: C,
                    onPointerMove: L,
                    onMouseMove: L,
                    onPointerLeave: T,
                    onMouseLeave: T
                },
                _ = (0, $.useRender)();
            return !f && s ? null : _({
                ourProps: N,
                theirProps: a,
                slot: I,
                defaultTag: "div",
                name: "Listbox.Option"
            })
        }),
        eL = Object.assign(eE, {
            Button: eS,
            Label: ex,
            Options: ew,
            Option: eC,
            SelectedOption: (0, $.forwardRefWithAs)(function(e, t) {
                let {
                    options: r,
                    placeholder: n,
                    ...o
                } = e, i = {
                    ref: (0, O.useSyncRefs)(t)
                }, a = em("ListboxSelectedOption"), s = (0, R.useSlot)({}), u = void 0 === a.value || null === a.value || a.mode === eo.Multi && Array.isArray(a.value) && 0 === a.value.length, c = (0, $.useRender)();
                return l.default.createElement(ey.Provider, {
                    value: !0
                }, c({
                    ourProps: i,
                    theirProps: { ...o,
                        children: l.default.createElement(l.default.Fragment, null, n && u ? n : r)
                    },
                    slot: s,
                    defaultTag: eg,
                    name: "ListboxSelectedOption"
                }))
            })
        });
    e.s(["Listbox", 0, eL, "ListboxButton", 0, eS, "ListboxOption", 0, eC, "ListboxOptions", 0, ew], 660600)
}]);

//# sourceMappingURL=0x79zd3a0p_rk.js.map