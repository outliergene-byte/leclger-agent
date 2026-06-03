(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 969743, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        i = e.i(198311),
        l = e.i(491900),
        r = e.i(793087),
        s = e.i(63120),
        n = e.i(191788);
    e.s(["TextMaskReveal", 0, e => {
        let d, o, c, m, u, x, h = (0, a.c)(9),
            {
                children: f
            } = e,
            p = (0, n.useRef)(null);
        h[0] === Symbol.for("react.memo_cache_sentinel") ? (d = {
            target: p,
            offset: ["start start", "end end"]
        }, h[0] = d) : d = h[0];
        let {
            scrollYProgress: g
        } = (0, r.useScroll)(d);
        h[1] === Symbol.for("react.memo_cache_sentinel") ? (o = [0, 1], c = ["-1783.29px 0px", "1000px 0"], h[1] = o, h[2] = c) : (o = h[1], c = h[2]);
        let v = (0, s.useTransform)(g, o, c),
            [j, b] = (0, n.useState)(!1);
        h[3] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
            0 === e && b(!0)
        }, h[3] = m) : m = h[3], (0, l.useMotionValueEvent)(g, "change", m);
        let y = j ? "-1783.29px 0px" : v;
        return h[4] !== y ? (u = {
            maskPosition: y
        }, h[4] = y, h[5] = u) : u = h[5], h[6] !== f || h[7] !== u ? (x = (0, t.jsx)(i.motion.div, {
            ref: p,
            className: "animation-text-mask z-1",
            style: u,
            children: f
        }), h[6] = f, h[7] = u, h[8] = x) : x = h[8], x
    }])
}, 842948, 613142, 631935, 569837, 174715, e => {
    "use strict";
    var t = e.i(391398);
    e.i(664157);
    var a = e.i(271179),
        i = e.i(335536),
        l = e.i(992219),
        r = e.i(191788),
        s = e.i(657610),
        n = e.i(495854),
        d = e.i(767574),
        o = e.i(969743),
        c = e.i(261576),
        m = e.i(198311);
    let u = e => {
        let a, i, l, r, s, d, o, u, x = (0, c.c)(13),
            {
                fill: h,
                position: f
            } = e,
            p = "right" === (void 0 === f ? "right" : f) && "-scale-x-100";
        x[0] !== p ? (a = (0, n.default)("z-1 pointer-events-none absolute inset-0 h-lvh w-full overflow-hidden", p), x[0] = p, x[1] = a) : a = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (i = {
            opacity: 0,
            x: "-72%",
            y: "-35%",
            scale: .5,
            rotate: "-9deg"
        }, l = {
            opacity: 1,
            x: "-50%",
            y: "-16%",
            scale: 1,
            rotate: "-9deg"
        }, r = {
            duration: 2,
            ease: "linear",
            delay: .75
        }, x[2] = i, x[3] = l, x[4] = r) : (i = x[2], l = x[3], r = x[4]);
        let g = h || "white";
        return x[5] !== g ? (s = (0, t.jsx)("g", {
            filter: "url(#filter)",
            children: (0, t.jsx)("ellipse", {
                cx: "1924.71",
                cy: "273.501",
                rx: "1924.71",
                ry: "273.501",
                transform: "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
                fill: g,
                fillOpacity: "0.21"
            })
        }), x[5] = g, x[6] = s) : s = x[6], x[7] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)("defs", {
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
        }), x[7] = d) : d = x[7], x[8] !== s ? (o = (0, t.jsxs)(m.motion.svg, {
            initial: i,
            whileInView: l,
            transition: r,
            className: "z-1 pointer-events-none absolute right-0 h-full w-full opacity-0 md:w-[138%] lg:w-[84%]",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 3787 2842",
            fill: "none",
            children: [s, d]
        }), x[8] = s, x[9] = o) : o = x[9], x[10] !== o || x[11] !== a ? (u = (0, t.jsx)("div", {
            className: a,
            children: o
        }), x[10] = o, x[11] = a, x[12] = u) : u = x[12], u
    };
    e.s(["SpotlightAnimation", 0, u], 613142), e.i(214495);
    var x = e.i(744295),
        h = e.i(44073);
    e.i(906550);
    var f = e.i(722846),
        p = e.i(264516);
    e.i(338018);
    var g = e.i(985129);
    e.s(["default", 0, ({
        tagLabel: e,
        title: c,
        theme: v,
        devices: j,
        isVariant: b = !1,
        dataCsOverrideId: y,
        dataCsOverrideIdTab: w
    }) => {
        let k = (0, r.useRef)(j.map(() => (0, r.createRef)())),
            N = (0, r.useRef)(null),
            _ = (0, s.useInView)(N, {
                once: !0
            }),
            [S, I] = (0, r.useState)(0),
            {
                t: T
            } = (0, a.useTranslation)("common");
        return (0, r.useEffect)(() => {
            _ && k.current.forEach(e => {
                e.current && e.current.play()
            })
        }, [_]), (0, t.jsxs)("div", {
            ref: N,
            className: (0, n.default)("dark" === v ? "bg-black text-white" : "bg-neutral-50 text-black", "relative"),
            "data-cs-override-id": y,
            children: [(0, t.jsx)(u, {
                position: "left"
            }), (0, t.jsx)(x.default, {
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [(0, t.jsx)(m.motion.div, {
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
                        children: e && (0, t.jsx)(h.default, {
                            label: e,
                            theme: v,
                            variant: "grey"
                        })
                    }), c && (0, t.jsx)(o.TextMaskReveal, {
                        children: (0, t.jsx)("h3", {
                            className: (0, n.default)("responsive-display-1 ru:responsive-display-2 text-center text-transparent", "dark" === v && "-mb-16 bg-linear-to-r from-white/15 via-white to-white/15 bg-clip-text pb-32"),
                            children: c
                        })
                    }), (0, t.jsxs)(i.TabGroup, {
                        selectedIndex: S,
                        onChange: I,
                        children: [(0, t.jsx)(i.TabPanels, {
                            children: j.map(({
                                videoUrl: e,
                                title: a
                            }, r) => (0, t.jsx)(i.TabPanel, {
                                unmount: !1,
                                children: (0, t.jsx)(l.default, {
                                    autoPlay: !0,
                                    muted: !0,
                                    loop: !0,
                                    playsInline: !0,
                                    source: e,
                                    ref: k.current[r],
                                    className: "h-[300px] md:h-[560px]"
                                })
                            }, `video-panel-${r}-${a}`))
                        }), b && (0, t.jsx)(i.TabList, {
                            className: (0, n.default)("mx-auto flex w-fit flex-row gap-4 rounded-full p-[2px] transition-all", {
                                "bg-neutral-800": "dark" === v,
                                "flex flex-col items-center gap-8": b
                            }),
                            children: (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    className: "flex justify-center gap-16",
                                    children: j.map(e => {
                                        let a = (0, d.default)(e ? .sku || "");
                                        return a ? (0, t.jsx)(i.Tab, {
                                            "data-cs-override-id": w,
                                            children: ({
                                                selected: e
                                            }) => (0, t.jsx)(g.default, {
                                                isSelected: e,
                                                colorName: T(`variantColors.${(0,p.toCamelCase)(a.variantTitle)}`),
                                                colorClassName: a.colorClass,
                                                theme: v
                                            })
                                        }, e.title) : null
                                    })
                                }), (0, t.jsx)("div", {
                                    children: (0, d.default)(j[S].sku || "") ? .variantTitle
                                })]
                            })
                        }), !b && j.length > 1 && (0, t.jsx)(f.default, {
                            tabsList: j.map(({
                                title: e
                            }) => e),
                            theme: v,
                            selectedIndex: S
                        })]
                    })]
                })
            })]
        })
    }], 631935), e.s([], 842948), e.s(["default", 0, e => {
        let a, i, l, r, s = (0, c.c)(10),
            {
                text: d,
                type: o
            } = e,
            m = void 0 === o ? "page" : o,
            u = "header" === m ? "bg-neutral-900 p-8" : "bg-black pb-80";
        s[0] !== u ? (a = (0, n.default)(u, "text-center"), s[0] = u, s[1] = a) : a = s[1];
        let x = "header" === m ? "italic text-gray-400 body-3" : "mx-auto max-w-3xl px-16 text-white body-4 lg:px-0";
        return s[2] !== x ? (i = (0, n.default)(x), s[2] = x, s[3] = i) : i = s[3], s[4] !== i || s[5] !== d ? (l = (0, t.jsx)("p", {
            className: i,
            children: d
        }), s[4] = i, s[5] = d, s[6] = l) : l = s[6], s[7] !== a || s[8] !== l ? (r = (0, t.jsx)("div", {
            "data-testid": "disclaimer",
            className: a,
            children: l
        }), s[7] = a, s[8] = l, s[9] = r) : r = s[9], r
    }], 569837), e.s([], 174715)
}, 917350, e => {
    "use strict";
    e.i(753221), e.s([])
}, 277551, e => {
    "use strict";
    e.i(544808), e.s([])
}, 633905, 923027, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        i = e.i(126019);
    e.i(286941);
    var l = e.i(126762),
        r = e.i(495854),
        s = e.i(992219),
        n = e.i(455108);
    e.i(919993);
    var d = e.i(636985);
    let o = e => {
            let i, l, s = (0, a.c)(8),
                {
                    position: n,
                    animatedOnStart: d,
                    theme: o
                } = e,
                c = d && "opacity-0",
                m = "top-left" === n && "top-[23px] -ms-[7px] border-s border-t",
                u = "bottom-right" === n && "-top-[23px] float-end -me-[7px] border-e border-b",
                x = "dark" === o && "border-white",
                h = "light" === o && "border-neutral-400";
            return s[0] !== c || s[1] !== m || s[2] !== u || s[3] !== x || s[4] !== h ? (i = (0, r.default)("relative block h-[30px] w-[14px]", c, m, u, x, h), s[0] = c, s[1] = m, s[2] = u, s[3] = x, s[4] = h, s[5] = i) : i = s[5], s[6] !== i ? (l = (0, t.jsx)("div", {
                className: i
            }), s[6] = i, s[7] = l) : l = s[7], l
        },
        c = e => {
            let l, n, d, o = (0, a.c)(13),
                {
                    videoUrl: c,
                    videoMobileUrl: m,
                    videoTitle: u,
                    image: x,
                    title: h,
                    imageMobile: f,
                    theme: p
                } = e;
            return o[0] !== x || o[1] !== f || o[2] !== p || o[3] !== h || o[4] !== c ? (l = !c && x && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(i.default, {
                    src: x.url,
                    alt: h,
                    height: 640,
                    width: 568,
                    priority: !0,
                    className: (0, r.default)("h-fit border border-solid object-cover", f && "hidden md:block", "dark" === p && "border-neutral-700", "light" === p && "border-neutral-200"),
                    "data-testid": "feature-spotlight-image"
                }), f && (0, t.jsx)(i.default, {
                    src: f.url,
                    alt: h,
                    height: 376,
                    width: 333,
                    priority: !0,
                    className: (0, r.default)("border-sol block h-fit border object-cover md:hidden", "dark" === p && "border-neutral-700", "light" === p && "border-neutral-200"),
                    "data-testid": "feature-spotlight-image-mobile"
                })]
            }), o[0] = x, o[1] = f, o[2] = p, o[3] = h, o[4] = c, o[5] = l) : l = o[5], o[6] !== m || o[7] !== u || o[8] !== c ? (n = c && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(s.default, {
                    className: (0, r.default)("h-auto w-full", m && "hidden md:block"),
                    title: u ? ? void 0,
                    muted: !0,
                    playsInline: !0,
                    autoPlay: !0,
                    source: c,
                    "data-testid": "feature-spotlight-video"
                }), m && (0, t.jsx)(s.default, {
                    className: "block h-auto w-full md:hidden",
                    title: u ? ? void 0,
                    muted: !0,
                    playsInline: !0,
                    autoPlay: !0,
                    source: m,
                    "data-testid": "feature-spotlight-video-mobile"
                })]
            }), o[6] = m, o[7] = u, o[8] = c, o[9] = n) : n = o[9], o[10] !== l || o[11] !== n ? (d = (0, t.jsxs)(t.Fragment, {
                children: [l, n]
            }), o[10] = l, o[11] = n, o[12] = d) : d = o[12], d
        };
    e.s(["CornerDecoration", 0, o, "default", 0, e => {
        let i, s, m, u, x, h, f, p, g, v, j, b, y = (0, a.c)(41),
            {
                featureSpotlight: w,
                theme: k,
                isMediaOnRight: N
            } = e;
        y[0] !== w ? (i = w || {}, y[0] = w, y[1] = i) : i = y[1];
        let {
            image: _,
            imageMobile: S,
            title: I,
            subtitle: T,
            description: C,
            videoUrl: V,
            videoMobileUrl: O,
            videoTitle: P,
            link: B,
            dataCsOverrideId: R
        } = i, M = void 0 !== N && N ? "md:flex-row-reverse" : "md:flex-row", F = "dark" === k ? "text-white" : "text-neutral-800";
        return y[2] !== M || y[3] !== F ? (s = (0, r.default)("flex flex-col-reverse gap-32 md:gap-80", M, F), y[2] = M, y[3] = F, y[4] = s) : s = y[4], y[5] !== k ? (m = (0, t.jsx)(o, {
            position: "top-left",
            theme: k
        }), y[5] = k, y[6] = m) : m = y[6], y[7] !== _ || y[8] !== S || y[9] !== k || y[10] !== I || y[11] !== O || y[12] !== P || y[13] !== V ? (u = (0, t.jsx)(c, {
            videoUrl: V,
            videoMobileUrl: O,
            videoTitle: P,
            image: _,
            title: I,
            imageMobile: S,
            theme: k
        }), y[7] = _, y[8] = S, y[9] = k, y[10] = I, y[11] = O, y[12] = P, y[13] = V, y[14] = u) : u = y[14], y[15] !== k ? (x = (0, t.jsx)(o, {
            position: "bottom-right",
            theme: k
        }), y[15] = k, y[16] = x) : x = y[16], y[17] !== m || y[18] !== u || y[19] !== x ? (h = (0, t.jsxs)("div", {
            className: "-my-[23px] w-fit max-w-[343px] flex-1 self-center md:max-w-[568px]",
            children: [m, u, x]
        }), y[17] = m, y[18] = u, y[19] = x, y[20] = h) : h = y[20], y[21] !== T || y[22] !== k ? (f = T && (0, t.jsx)(n.default.TagHud, {
            label: T,
            size: "medium",
            theme: k,
            variant: "light" === k ? "grey" : "purple"
        }), y[21] = T, y[22] = k, y[23] = f) : f = y[23], y[24] !== I ? (p = (0, t.jsx)("h2", {
            className: "responsive-display-4",
            children: I
        }), y[24] = I, y[25] = p) : p = y[25], y[26] !== C ? (g = C && (0, t.jsx)(l.default, {
            content: C,
            className: "[&>p]:heading-4 [&_li]:m-0 [&_li_p]:m-0"
        }), y[26] = C, y[27] = g) : g = y[27], y[28] !== B || y[29] !== k ? (v = B && (0, t.jsx)(d.default, {
            link: B,
            theme: k
        }), y[28] = B, y[29] = k, y[30] = v) : v = y[30], y[31] !== f || y[32] !== p || y[33] !== g || y[34] !== v ? (j = (0, t.jsxs)("div", {
            className: "flex flex-1 flex-col gap-16 self-center",
            children: [f, p, g, v]
        }), y[31] = f, y[32] = p, y[33] = g, y[34] = v, y[35] = j) : j = y[35], y[36] !== R || y[37] !== j || y[38] !== s || y[39] !== h ? (b = (0, t.jsx)(n.default.Section, {
            verticalSpacing: "none",
            children: (0, t.jsxs)("div", {
                className: s,
                "data-testid": "feature-spotlight-component",
                "data-cs-override-id": R,
                children: [h, j]
            })
        }), y[36] = R, y[37] = j, y[38] = s, y[39] = h, y[40] = b) : b = y[40], b
    }], 923027), e.s([], 633905)
}, 611275, 6714, 260144, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        i = e.i(191788),
        l = e.i(491900),
        r = e.i(793087),
        s = e.i(498817),
        n = e.i(198311),
        d = e.i(126019),
        o = e.i(455108);
    e.i(286941);
    var c = e.i(126762),
        m = e.i(992219),
        u = e.i(923027),
        x = e.i(495854);
    e.i(919993);
    var h = e.i(636985);
    let f = e => {
            let i, l, r, s, o, c, u = (0, a.c)(22),
                {
                    videoUrl: h,
                    imageUrl: f,
                    imageTitle: p,
                    loopVideo: g,
                    theme: v
                } = e;
            if (h) {
                let e, a, i, l, r, s;
                u[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                    opacity: 0
                }, a = {
                    opacity: 1
                }, i = {
                    opacity: 0
                }, l = {
                    duration: .3
                }, u[0] = e, u[1] = a, u[2] = i, u[3] = l) : (e = u[0], a = u[1], i = u[2], l = u[3]);
                let d = "dark" === v && "border-neutral-700",
                    o = "light" === v && "border-neutral-200";
                return u[4] !== d || u[5] !== o ? (r = (0, x.default)("h-auto w-full border border-solid", d, o), u[4] = d, u[5] = o, u[6] = r) : r = u[6], u[7] !== g || u[8] !== r || u[9] !== h ? (s = (0, t.jsx)(n.motion.div, {
                    initial: e,
                    animate: a,
                    exit: i,
                    transition: l,
                    children: (0, t.jsx)(m.default, {
                        className: r,
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        source: h,
                        height: 640,
                        width: 568,
                        loop: g
                    }, h)
                }), u[7] = g, u[8] = r, u[9] = h, u[10] = s) : s = u[10], s
            }
            u[11] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                opacity: 0
            }, l = {
                opacity: 1
            }, r = {
                opacity: 0
            }, s = {
                duration: .3
            }, u[11] = i, u[12] = l, u[13] = r, u[14] = s) : (i = u[11], l = u[12], r = u[13], s = u[14]);
            let j = "dark" === v && "border-neutral-700",
                b = "light" === v && "border-neutral-200";
            return u[15] !== j || u[16] !== b ? (o = (0, x.default)("h-auto w-full border border-solid object-cover", j, b), u[15] = j, u[16] = b, u[17] = o) : o = u[17], u[18] !== p || u[19] !== f || u[20] !== o ? (c = (0, t.jsx)(n.motion.div, {
                initial: i,
                animate: l,
                exit: r,
                transition: s,
                children: (0, t.jsx)(d.default, {
                    src: f,
                    alt: p,
                    height: 640,
                    width: 568,
                    priority: !0,
                    className: o
                })
            }), u[18] = p, u[19] = f, u[20] = o, u[21] = c) : c = u[21], c
        },
        p = e => {
            let d, m, p, g, v, j, b, y, w, k, N, _, S = (0, a.c)(43),
                {
                    content: I,
                    dataCsOverrideId: T,
                    theme: C
                } = e,
                [V, O] = (0, i.useState)(0),
                P = (0, i.useRef)(null),
                B = 1 === I.length;
            S[0] === Symbol.for("react.memo_cache_sentinel") ? (d = {
                target: P,
                offset: ["start start", "end end"]
            }, S[0] = d) : d = S[0];
            let {
                scrollYProgress: R
            } = (0, r.useScroll)(d), M = I.length;
            S[1] !== M || S[2] !== I ? (m = e => {
                let t = I.map((e, t) => t / Math.max(M - 1, 1));
                O(t.reduce((a, i, l) => Math.abs(e - i) < Math.abs(e - t[a]) ? l : a, 0))
            }, S[1] = M, S[2] = I, S[3] = m) : m = S[3], (0, l.useMotionValueEvent)(R, "change", m);
            let F = I[V] ? .videoUrl,
                U = !B && "h-[50vh] 2xl:h-[60vh]";
            S[4] !== U ? (p = (0, x.default)("sticky top-[25vh] flex items-center 2xl:top-[20vh]", U), S[4] = U, S[5] = p) : p = S[5], S[6] !== C ? (g = (0, t.jsx)(u.CornerDecoration, {
                position: "top-left",
                theme: C
            }), S[6] = C, S[7] = g) : g = S[7];
            let D = F ? ? void 0,
                z = I[V] ? .image ? .url || "",
                L = I[V] ? .image ? .title || "",
                $ = I[V] ? .loopVideo;
            S[8] !== V || S[9] !== D || S[10] !== z || S[11] !== L || S[12] !== $ || S[13] !== C ? (v = (0, t.jsx)("div", {
                className: "relative",
                children: (0, t.jsx)(s.AnimatePresence, {
                    mode: "wait",
                    children: (0, t.jsx)(f, {
                        videoUrl: D,
                        imageUrl: z,
                        imageTitle: L,
                        loopVideo: $,
                        theme: C
                    }, V)
                })
            }), S[8] = V, S[9] = D, S[10] = z, S[11] = L, S[12] = $, S[13] = C, S[14] = v) : v = S[14], S[15] !== C ? (j = (0, t.jsx)(u.CornerDecoration, {
                position: "bottom-right",
                theme: C
            }), S[15] = C, S[16] = j) : j = S[16], S[17] !== v || S[18] !== j || S[19] !== g ? (b = (0, t.jsxs)("div", {
                children: [g, v, j]
            }), S[17] = v, S[18] = j, S[19] = g, S[20] = b) : b = S[20], S[21] !== b || S[22] !== p ? (y = (0, t.jsx)("div", {
                className: p,
                children: b
            }), S[21] = b, S[22] = p, S[23] = y) : y = S[23];
            let E = B && "justify-center";
            if (S[24] !== E ? (w = (0, x.default)("relative flex h-full flex-col items-start gap-40", E), S[24] = E, S[25] = w) : w = S[25], S[26] !== V || S[27] !== I || S[28] !== T || S[29] !== B || S[30] !== C) {
                let e;
                S[32] !== V || S[33] !== T || S[34] !== B || S[35] !== C ? (e = (e, a) => (0, t.jsx)("div", {
                    className: (0, x.default)("flex flex-col items-center justify-center text-white md:flex-row", !B && "min-h-[50vh] 2xl:min-h-[60vh]"),
                    children: (0, t.jsx)(n.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: V === a ? 1 : .3
                        },
                        className: (0, x.default)("text-2xl font-bold", "dark" === C ? "text-slate-100" : "text-neutral-800"),
                        "data-cs-override-id": T && `${T}-${a+1}`,
                        children: (0, t.jsxs)("div", {
                            className: "flex flex-1 flex-col gap-16 self-center",
                            children: [e.subtitle && (0, t.jsx)(o.default.TagHud, {
                                label: e.subtitle,
                                size: "medium",
                                theme: C,
                                variant: "light" === C ? "grey" : "purple"
                            }), (0, t.jsx)("h2", {
                                className: "responsive-display-4",
                                children: e.title
                            }), e.description && (0, t.jsx)(c.default, {
                                content: e.description,
                                className: "[&>p]:heading-4 p]:font-normal [&_li]:m-0 [&_li_p]:m-0"
                            }), e.link && (0, t.jsx)(h.default, {
                                link: e.link,
                                theme: C
                            })]
                        })
                    })
                }, e.title + a), S[32] = V, S[33] = T, S[34] = B, S[35] = C, S[36] = e) : e = S[36], k = I.map(e), S[26] = V, S[27] = I, S[28] = T, S[29] = B, S[30] = C, S[31] = k
            } else k = S[31];
            return S[37] !== w || S[38] !== k ? (N = (0, t.jsx)("div", {
                className: w,
                children: k
            }), S[37] = w, S[38] = k, S[39] = N) : N = S[39], S[40] !== y || S[41] !== N ? (_ = (0, t.jsxs)("div", {
                className: "no-scrollbar relative grid w-full scroll-m-0 auto-rows-max grid-cols-[1fr_1fr] justify-center gap-40 pt-[6.25vh] xl:gap-80",
                ref: P,
                "data-testid": "sticky-scroll-spotlights",
                children: [y, N]
            }), S[40] = y, S[41] = N, S[42] = _) : _ = S[42], _
        };
    e.i(633905), e.s(["default", 0, e => {
        let i, l, r, s, n, d, c, m = (0, a.c)(25),
            {
                featureSpotlights: h,
                dataCsOverrideId: f,
                theme: g
            } = e,
            v = "dark" == g ? "bg-black" : "bg-neutral-50";
        m[0] !== v ? (i = (0, x.default)(v), m[0] = v, m[1] = i) : i = m[1];
        let j = "dark" == g ? "text-white" : "text-black";
        if (m[2] !== j ? (l = (0, x.default)("flex flex-col gap-80 md:flex-row", j), m[2] = j, m[3] = l) : l = m[3], m[4] !== f || m[5] !== h || m[6] !== g ? (r = (0, t.jsx)("div", {
                className: "hidden md:flex md:flex-col",
                "data-testid": "scrolling-spotlights-desktop",
                children: (0, t.jsx)(p, {
                    content: h,
                    dataCsOverrideId: f,
                    theme: g
                })
            }), m[4] = f, m[5] = h, m[6] = g, m[7] = r) : r = m[7], m[8] !== f || m[9] !== h || m[10] !== g) {
            let e;
            m[12] !== f || m[13] !== h.length || m[14] !== g ? (e = (e, a) => (0, t.jsxs)("div", {
                children: [(0, t.jsx)(u.default, {
                    theme: g,
                    featureSpotlight: { ...e,
                        dataCsOverrideId: f && `${f}-${a+1}`
                    }
                }), a < h.length - 1 && (0, t.jsx)("div", {
                    className: "pt-16",
                    children: (0, t.jsx)(o.default.Divider, {
                        theme: g
                    })
                })]
            }, `separator-${a}`), m[12] = f, m[13] = h.length, m[14] = g, m[15] = e) : e = m[15], s = h.map(e), m[8] = f, m[9] = h, m[10] = g, m[11] = s
        } else s = m[11];
        return m[16] !== s ? (n = (0, t.jsx)("div", {
            children: (0, t.jsx)("div", {
                className: "flex flex-col gap-16 md:hidden",
                "data-testid": "scrolling-spotlights-mobile",
                children: s
            })
        }), m[16] = s, m[17] = n) : n = m[17], m[18] !== l || m[19] !== r || m[20] !== n ? (d = (0, t.jsx)(o.default.Section, {
            children: (0, t.jsxs)("div", {
                className: l,
                children: [r, n]
            })
        }), m[18] = l, m[19] = r, m[20] = n, m[21] = d) : d = m[21], m[22] !== i || m[23] !== d ? (c = (0, t.jsx)("div", {
            className: i,
            children: d
        }), m[22] = i, m[23] = d, m[24] = c) : c = m[24], c
    }], 6714), e.s([], 611275), e.s(["default", 0, e => {
        let i, l, r, s, c, m, u, h = (0, a.c)(23),
            {
                theme: f,
                tags: p,
                images: g,
                title: v,
                subTitle: j
            } = e,
            b = void 0 === f ? "dark" : f,
            y = "dark" === b ? "bg-black text-white" : "bg-neutral-50 text-black";
        if (h[0] !== y ? (i = (0, x.default)("relative flex max-w-full flex-col justify-center py-48 text-center md:py-56 xl:mx-0", y), h[0] = y, h[1] = i) : i = h[1], h[2] !== j || h[3] !== b || h[4] !== v ? (l = (v || j) && (0, t.jsxs)("div", {
                className: (0, x.default)("mx-auto flex w-full max-w-3xl flex-col gap-16 self-center bg-center bg-no-repeat px-16 md:px-0", "dark" === b ? "bg-dot-large-neutral-600" : "bg-dot-large-white"),
                children: [(0, t.jsx)(n.motion.h3, {
                    initial: {
                        opacity: 0,
                        y: 64
                    },
                    transition: {
                        duration: .6
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "responsive-display-4",
                    children: v
                }), (0, t.jsx)(n.motion.p, {
                    initial: {
                        opacity: 0,
                        y: 64
                    },
                    transition: {
                        duration: .6
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "heading-4",
                    children: j
                })]
            }), h[2] = j, h[3] = b, h[4] = v, h[5] = l) : l = h[5], h[6] !== p || h[7] !== b ? (r = p && p.length > 0 && (0, t.jsx)(n.motion.div, {
                className: "flex flex-wrap justify-center gap-8",
                initial: {
                    opacity: 0,
                    y: 64
                },
                transition: {
                    duration: .6
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: p.map(e => (0, t.jsx)(o.default.TagHud, {
                    variant: "grey",
                    theme: b,
                    size: "medium",
                    label: e,
                    className: "whitespace-nowrap"
                }, e))
            }), h[6] = p, h[7] = b, h[8] = r) : r = h[8], h[9] !== l || h[10] !== r ? (s = (0, t.jsx)(o.default.Section, {
                verticalSpacing: "none",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col gap-40",
                    children: [l, r]
                })
            }), h[9] = l, h[10] = r, h[11] = s) : s = h[11], h[12] !== g || h[13] !== b) {
            let e;
            h[15] !== b ? (e = (e, a) => (0, t.jsx)(d.default, {
                height: 480,
                width: 352,
                src: e.url,
                alt: e.title ? ? "",
                className: (0, x.default)(a > 3 && "hidden md:block", a > 5 && "hidden lg:block", "bg-grey h-full border", "dark" === b ? "border-neutral-600" : "border-neutral-200")
            }, e.url ? ? ""), h[15] = b, h[16] = e) : e = h[16], c = g.map(e), h[12] = g, h[13] = b, h[14] = c
        } else c = h[14];
        return h[17] !== c ? (m = (0, t.jsx)("div", {
            className: "mx-auto mt-40 max-w-(--breakpoint-2xl) justify-center overflow-hidden md:flex md:px-40 lg:px-48 xl:px-96",
            children: (0, t.jsx)("div", {
                className: "-mr-96 -ml-96 grid grid-cols-4 gap-16 md:grid-cols-6 lg:mr-0 lg:ml-0 lg:w-full lg:gap-32",
                children: c
            })
        }), h[17] = c, h[18] = m) : m = h[18], h[19] !== i || h[20] !== s || h[21] !== m ? (u = (0, t.jsxs)("div", {
            className: i,
            children: [s, m]
        }), h[19] = i, h[20] = s, h[21] = m, h[22] = u) : u = h[22], u
    }], 260144)
}, 15301, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(191788);
    e.i(663485);
    var i = e.i(98887),
        l = e.i(261576),
        r = e.i(198311),
        s = e.i(657610),
        n = e.i(495854),
        d = e.i(969743),
        o = e.i(455108);
    let c = e => {
        let i, c, m, u, x, h, f, p, g = (0, l.c)(16),
            {
                title: v,
                image: j,
                dataCsOverrideId: b
            } = e,
            y = (0, a.useRef)(null);
        g[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
            once: !0
        }, g[0] = i) : i = g[0];
        let w = (0, s.useInView)(y, i);
        g[1] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, n.default)("responsive-display-1 text-center", "bg-linear-to-r from-white/15 via-white to-white/15 bg-clip-text text-transparent", "pb-12 -mb-12"), g[1] = c) : c = g[1], g[2] !== v ? (m = (0, t.jsx)(d.TextMaskReveal, {
            children: (0, t.jsx)("h3", {
                className: c,
                children: v
            })
        }), g[2] = v, g[3] = m) : m = g[3], g[4] === Symbol.for("react.memo_cache_sentinel") ? (u = {
            opacity: 0,
            y: 50
        }, g[4] = u) : u = g[4], g[5] !== w ? (x = w && {
            opacity: 1,
            y: 0
        }, g[5] = w, g[6] = x) : x = g[6], g[7] === Symbol.for("react.memo_cache_sentinel") ? (h = {
            duration: 2
        }, g[7] = h) : h = g[7];
        let k = j.title || "";
        return g[8] !== j.url || g[9] !== x || g[10] !== k ? (f = (0, t.jsx)(r.motion.img, {
            initial: u,
            animate: x,
            transition: h,
            src: j.url,
            alt: k,
            className: "relative z-2 -m-32 mx-auto -translate-y-20 lg:max-h-[800px] lg:min-h-[620px] lg:object-scale-down"
        }), g[8] = j.url, g[9] = x, g[10] = k, g[11] = f) : f = g[11], g[12] !== b || g[13] !== m || g[14] !== f ? (p = (0, t.jsx)(o.default.Section, {
            children: (0, t.jsxs)("div", {
                ref: y,
                className: "relative overflow-hidden text-center",
                "data-cs-override-id": b,
                id: "MainAttractionStax",
                children: [m, f]
            })
        }), g[12] = b, g[13] = m, g[14] = f, g[15] = p) : p = g[15], p
    };
    var m = e.i(747815);
    let u = e => {
        let a, i, s, n, d, c, m = (0, l.c)(8),
            {
                infos: u
            } = e;
        return u.length < 1 ? null : (m[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
            opacity: 0
        }, i = {
            opacity: 1
        }, s = {
            duration: .3,
            ease: "easeOut"
        }, m[0] = a, m[1] = i, m[2] = s) : (a = m[0], i = m[1], s = m[2]), m[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("div", {
            className: "pointer-events-none absolute inset-0 bg-black mask-[radial-gradient(ellipse_at_center,transparent_45%,black)]"
        }), m[3] = n) : n = m[3], m[4] !== u ? (d = u.map(x), m[4] = u, m[5] = d) : d = m[5], m[6] !== d ? (c = (0, t.jsx)(r.motion.div, {
            initial: a,
            animate: i,
            transition: s,
            className: "relative bg-black bg-dot-neutral-600",
            children: (0, t.jsxs)(o.default.Section, {
                verticalSpacing: "x-small",
                children: [n, (0, t.jsx)("div", {
                    className: "grid text-white md:grid-flow-col",
                    children: d
                })]
            })
        }), m[6] = d, m[7] = c) : c = m[7], c)
    };

    function x(e, i) {
        return (0, t.jsxs)(a.Fragment, {
            children: [0 !== i && (0, t.jsx)("div", {
                className: "mx-auto h-px w-40 bg-neutral-600 md:h-full md:w-px"
            }), (0, t.jsx)(r.motion.div, {
                initial: {
                    opacity: 0,
                    translateY: 32
                },
                animate: {
                    opacity: 1,
                    translateY: 0
                },
                transition: {
                    duration: .3,
                    ease: "easeOut"
                },
                className: "grid items-center justify-center py-24",
                children: e
            })]
        }, e)
    }
    e.i(611275);
    var h = e.i(6714),
        f = e.i(992219),
        p = e.i(613142),
        g = e.i(260144);
    let v = e => {
        let a, i, r, s, c, m, u, x = (0, l.c)(20),
            {
                title: h,
                secondaryTitle: v,
                description: j,
                hudTags: b,
                images: y,
                videoDesktop: w,
                videoMobile: k,
                videoTitle: N,
                dataCSOverrideId: _
            } = e,
            S = N || "";
        x[0] !== S ? (a = {
            muted: !0,
            title: S,
            playsInline: !0,
            autoPlay: !0,
            loop: !0,
            role: "video"
        }, x[0] = S, x[1] = a) : a = x[1];
        let I = a;
        x[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.default)("bg-black text-white", "relative flex max-w-full flex-col justify-center pt-96 text-center md:pt-128 xl:mx-0"), x[2] = i) : i = x[2], x[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(p.SpotlightAnimation, {
            fill: "#fff"
        }), x[3] = r) : r = x[3], x[4] !== h || x[5] !== w || x[6] !== k || x[7] !== I ? (s = (h || w) && (0, t.jsxs)("div", {
            className: "flex flex-col gap-48 md:gap-96",
            children: [h && (0, t.jsx)(d.TextMaskReveal, {
                children: (0, t.jsx)("h2", {
                    className: "responsive-display-1 ru:responsive-display-2 -mb-16 bg-linear-to-r from-white/15 via-white to-white/15 bg-clip-text pb-32 text-transparent",
                    children: h
                })
            }), w && (0, t.jsx)(f.default, { ...I,
                source: w,
                className: (0, n.default)("w-full", k && "hidden md:block")
            }), k && (0, t.jsx)(f.default, { ...I,
                source: k,
                className: "w-full md:hidden"
            })]
        }), x[4] = h, x[5] = w, x[6] = k, x[7] = I, x[8] = s) : s = x[8], x[9] !== s ? (c = (0, t.jsx)(o.default.Section, {
            verticalSpacing: "none",
            children: (0, t.jsx)("div", {
                className: "flex flex-col gap-64",
                children: s
            })
        }), x[9] = s, x[10] = c) : c = x[10];
        let T = v ? ? null,
            C = j ? ? null;
        return x[11] !== b || x[12] !== y || x[13] !== T || x[14] !== C ? (m = (0, t.jsx)(g.default, {
            images: y,
            title: T,
            subTitle: C,
            tags: b,
            theme: "dark"
        }), x[11] = b, x[12] = y, x[13] = T, x[14] = C, x[15] = m) : m = x[15], x[16] !== _ || x[17] !== c || x[18] !== m ? (u = (0, t.jsxs)("div", {
            className: i,
            "data-cs-override-id": _,
            children: [r, c, m]
        }), x[16] = _, x[17] = c, x[18] = m, x[19] = u) : u = x[19], u
    };
    e.i(506411);
    var j = e.i(237341);
    e.i(274250);
    var b = e.i(170255);
    e.i(536168);
    var y = e.i(452693);
    e.i(917350);
    var w = e.i(753221);
    e.i(601917);
    var k = e.i(125125),
        N = e.i(63535);
    e.i(277551);
    var _ = e.i(544808);
    e.i(633905);
    var S = e.i(923027);
    e.i(883820);
    var I = e.i(748016);
    e.i(842948);
    var T = e.i(631935);
    e.i(174715);
    var C = e.i(569837),
        V = e.i(9446);
    e.i(413202);
    var O = e.i(188532),
        P = e.i(780629);
    e.s(["__N_SSG", 0, !0, "default", 0, function({
        settings: e,
        footer: l,
        navigationData: r,
        pageData: s
    }) {
        let {
            pageMeta: n,
            hero: d,
            heroVideoUrl: x,
            heroHighlightImage: f,
            heroHighlightText: p,
            enrichedVariants: g,
            mainAttraction: B,
            compactRecap: R,
            featuresSpotlight: M,
            nftSpotlightSection: F,
            supportedCryptoBlock: U,
            faqBlock: D,
            stickyNavigation: z,
            product: L,
            bigSectionBlock: $,
            comparison: E,
            focusFeatureBlock: A,
            batterySpotlight: G,
            detailsSpotlight: W,
            detailsFeatures: q,
            recoverFocusBlock: H,
            introDesignBlock: X,
            disclaimer: K,
            ledgerWalletBlock: Y
        } = s, J = "dark", [Q, Z] = (0, a.useState)(g[0]), ee = (0, a.useRef)(null), et = (0, a.useRef)(z ? .length ? z.map(() => a.default.createRef()) : []);
        return (0, t.jsxs)(i.default, {
            pageMeta: n,
            siteSettings: e,
            footer: l,
            navigationData: r,
            hideNavOnScroll: !!z,
            trackingData: {
                page_type: "product detail page"
            },
            theme: J,
            children: [z && (0, t.jsx)(y.default, {
                navigation: z,
                product: L,
                currentVariant: Q,
                setCurrentVariant: Z,
                variants: g,
                sectionRefs: et.current
            }), (0, t.jsxs)("div", {
                className: "bg-black",
                children: [(0, t.jsx)(m.default, {
                    setCurrentVariant: Z,
                    currentVariant: Q,
                    description: d.longDescription || "",
                    title: d.title,
                    videoUrl: x,
                    loopVideo: d.loopVideo,
                    productVariants: g,
                    highlightBlock: {
                        image: f,
                        text: p
                    },
                    heroProductFeatures: d.productFeatures ? ? [],
                    theme: J,
                    scrollToButton: e => (0, V.scrollTo)(e, ee),
                    miniTitle: d.miniTitle,
                    primaryVariants: L.primaryVariants,
                    secondaryVariants: L.secondaryVariants
                }), (0, t.jsx)(u, {
                    infos: R
                }), (0, t.jsx)(w.default, {
                    id: "main-attraction",
                    ref: ee,
                    children: (0, t.jsx)(c, {
                        image: B.image,
                        title: B.title,
                        dataCsOverrideId: "stax-assets"
                    })
                }), (0, t.jsx)(w.default, {
                    id: "uncompromised-security",
                    ...et.current && {
                        ref: et.current[0]
                    },
                    children: (0, t.jsx)(h.default, {
                        featureSpotlights: M,
                        dataCsOverrideId: "stax-USPs",
                        theme: "dark"
                    })
                }), (0, t.jsx)(o.default.Divider, {
                    theme: "dark"
                }), G && (0, t.jsx)(o.default.Section, {
                    children: (0, t.jsx)(S.default, {
                        featureSpotlight: { ...G,
                            dataCsOverrideId: "stax-USPs-3"
                        },
                        theme: "dark",
                        isMediaOnRight: !0
                    })
                }), (0, t.jsx)(w.default, {
                    id: "customisable-display",
                    ...et.current && {
                        ref: et.current[1]
                    },
                    children: (0, t.jsx)(v, { ...F,
                        dataCSOverrideId: "stax-customization"
                    })
                }), (0, t.jsx)(w.default, {
                    id: "revolutionary",
                    ...et.current && {
                        ref: et.current[2]
                    },
                    children: (0, t.jsx)(T.default, {
                        devices: [X.device],
                        theme: "dark",
                        tagLabel: X.tag,
                        title: X.title,
                        dataCsOverrideId: "stax-magnet-shell"
                    })
                }), W && (0, t.jsx)(S.default, {
                    featureSpotlight: { ...W,
                        dataCsOverrideId: "stax-magnet-shell"
                    },
                    theme: "dark"
                }), q && (0, t.jsx)(I.default, {
                    sizeVariant: "default",
                    contentBlocks: q,
                    theme: "dark",
                    dataCsOverrideId: "Stax-USPs"
                }), A && (0, t.jsx)(_.default, { ...A,
                    theme: "dark",
                    dataCsOverrideId: "block-securitykey",
                    contentBlockVariant: "Ledger Security Focus Feature"
                }), (0, t.jsx)(k.default, { ...$
                }), Y && ("Ledger Wallet V4 Info" === Y.sectionInformationVariant ? (0, t.jsx)(P.LedgerWalletInfoNew, {
                    contentBlocks: Y.contentBlocks,
                    theme: "dark",
                    dataCSOverrideId: "block-LedgerWalletInfo"
                }) : (0, t.jsx)(O.default, {
                    title: Y.title,
                    description: Y.subtitle,
                    tag: Y.tag ? ? null,
                    image: Y.image ? ? null,
                    contentBlocks: Y.contentBlocks,
                    disclaimer: Y.disclaimer,
                    theme: "dark",
                    dataCSOverrideId: "block-LedgerWalletInfo"
                })), U && (0, t.jsx)(j.default, {
                    contentBlock: { ...U,
                        dataCsOverrideId: "block-supportedcrypto"
                    }
                }), H && (0, t.jsx)(_.default, { ...H
                }), E && (0, t.jsx)(N.default, {
                    dataCSOverrideId: "block-comparison",
                    productsToCompareByDevice: E.productsToCompareByDevice,
                    subtitle: E.subtitle,
                    template: E.template,
                    theme: "dark",
                    title: E.title
                }), D && (0, t.jsx)(b.default, {
                    faq: D
                }), K && (0, t.jsx)(C.default, {
                    text: K
                })]
            })]
        })
    }], 15301)
}, 386988, (e, t, a) => {
    let i = "/pages/ledger-stax";
    (window.__NEXT_P = window.__NEXT_P || []).push([i, () => e.r(15301)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([i])
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

//# sourceMappingURL=02z02ls_vpjc~.js.map