(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 958678, (e, t, r) => {
    t.exports = e.r(280963)
}, 276025, 60714, 665617, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(958678);

    function a() {
        return (a = Object.assign.bind()).apply(this, arguments)
    }

    function l(e, t) {
        if (null == e) return {};
        var r, a, l = {},
            n = Object.keys(e);
        for (a = 0; a < n.length; a++) r = n[a], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
    }
    var n = ["keyOverride"],
        i = ["crossOrigin"],
        s = {
            templateTitle: "",
            noindex: !1,
            nofollow: !1,
            norobots: !1,
            defaultOpenGraphImageWidth: 0,
            defaultOpenGraphImageHeight: 0,
            defaultOpenGraphVideoWidth: 0,
            defaultOpenGraphVideoHeight: 0
        },
        o = function(e, r, a) {
            void 0 === r && (r = []);
            var l = void 0 === a ? {} : a,
                n = l.defaultWidth,
                i = l.defaultHeight;
            return r.reduce(function(r, a, l) {
                return r.push(t.default.createElement("meta", {
                    key: "og:" + e + ":0" + l,
                    property: "og:" + e,
                    content: a.url
                })), a.alt && r.push(t.default.createElement("meta", {
                    key: "og:" + e + ":alt0" + l,
                    property: "og:" + e + ":alt",
                    content: a.alt
                })), a.secureUrl && r.push(t.default.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + l,
                    property: "og:" + e + ":secure_url",
                    content: a.secureUrl.toString()
                })), a.type && r.push(t.default.createElement("meta", {
                    key: "og:" + e + ":type0" + l,
                    property: "og:" + e + ":type",
                    content: a.type.toString()
                })), a.width ? r.push(t.default.createElement("meta", {
                    key: "og:" + e + ":width0" + l,
                    property: "og:" + e + ":width",
                    content: a.width.toString()
                })) : n && r.push(t.default.createElement("meta", {
                    key: "og:" + e + ":width0" + l,
                    property: "og:" + e + ":width",
                    content: n.toString()
                })), a.height ? r.push(t.default.createElement("meta", {
                    key: "og:" + e + ":height" + l,
                    property: "og:" + e + ":height",
                    content: a.height.toString()
                })) : i && r.push(t.default.createElement("meta", {
                    key: "og:" + e + ":height" + l,
                    property: "og:" + e + ":height",
                    content: i.toString()
                })), r
            }, [])
        },
        c = function(e) {
            var r, c, d, u, m, h = [];
            e.titleTemplate && (s.templateTitle = e.titleTemplate);
            var f = "";
            e.title ? (f = e.title, s.templateTitle && (f = s.templateTitle.replace(/%s/g, function() {
                return f
            }))) : e.defaultTitle && (f = e.defaultTitle), f && h.push(t.default.createElement("title", {
                key: "title"
            }, f));
            var p = void 0 === e.noindex ? s.noindex || e.dangerouslySetAllPagesToNoIndex : e.noindex,
                x = void 0 === e.nofollow ? s.nofollow || e.dangerouslySetAllPagesToNoFollow : e.nofollow,
                v = e.norobots || s.norobots,
                g = "";
            if (e.robotsProps) {
                var b = e.robotsProps,
                    y = b.nosnippet,
                    w = b.maxSnippet,
                    j = b.maxImagePreview,
                    k = b.maxVideoPreview,
                    N = b.noarchive,
                    E = b.noimageindex,
                    C = b.notranslate,
                    S = b.unavailableAfter;
                g = (y ? ",nosnippet" : "") + (w ? ",max-snippet:" + w : "") + (j ? ",max-image-preview:" + j : "") + (N ? ",noarchive" : "") + (S ? ",unavailable_after:" + S : "") + (E ? ",noimageindex" : "") + (k ? ",max-video-preview:" + k : "") + (C ? ",notranslate" : "")
            }
            if (e.norobots && (s.norobots = !0), p || x ? (e.dangerouslySetAllPagesToNoIndex && (s.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (s.nofollow = !0), h.push(t.default.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: (p ? "noindex" : "index") + "," + (x ? "nofollow" : "follow") + g
                }))) : (!v || g) && h.push(t.default.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + g
                })), e.description && h.push(t.default.createElement("meta", {
                    key: "description",
                    name: "description",
                    content: e.description
                })), e.themeColor && h.push(t.default.createElement("meta", {
                    key: "theme-color",
                    name: "theme-color",
                    content: e.themeColor
                })), e.mobileAlternate && h.push(t.default.createElement("link", {
                    rel: "alternate",
                    key: "mobileAlternate",
                    media: e.mobileAlternate.media,
                    href: e.mobileAlternate.href
                })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
                    h.push(t.default.createElement("link", {
                        rel: "alternate",
                        key: "languageAlternate-" + e.hrefLang,
                        hrefLang: e.hrefLang,
                        href: e.href
                    }))
                }), e.twitter && (e.twitter.cardType && h.push(t.default.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType
                })), e.twitter.site && h.push(t.default.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site
                })), e.twitter.handle && h.push(t.default.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle
                }))), e.facebook && e.facebook.appId && h.push(t.default.createElement("meta", {
                    key: "fb:app_id",
                    property: "fb:app_id",
                    content: e.facebook.appId
                })), (null != (r = e.openGraph) && r.title || f) && h.push(t.default.createElement("meta", {
                    key: "og:title",
                    property: "og:title",
                    content: (null == (u = e.openGraph) ? void 0 : u.title) || f
                })), (null != (c = e.openGraph) && c.description || e.description) && h.push(t.default.createElement("meta", {
                    key: "og:description",
                    property: "og:description",
                    content: (null == (m = e.openGraph) ? void 0 : m.description) || e.description
                })), e.openGraph) {
                if ((e.openGraph.url || e.canonical) && h.push(t.default.createElement("meta", {
                        key: "og:url",
                        property: "og:url",
                        content: e.openGraph.url || e.canonical
                    })), e.openGraph.type) {
                    var R = e.openGraph.type.toLowerCase();
                    h.push(t.default.createElement("meta", {
                        key: "og:type",
                        property: "og:type",
                        content: R
                    })), "profile" === R && e.openGraph.profile ? (e.openGraph.profile.firstName && h.push(t.default.createElement("meta", {
                        key: "profile:first_name",
                        property: "profile:first_name",
                        content: e.openGraph.profile.firstName
                    })), e.openGraph.profile.lastName && h.push(t.default.createElement("meta", {
                        key: "profile:last_name",
                        property: "profile:last_name",
                        content: e.openGraph.profile.lastName
                    })), e.openGraph.profile.username && h.push(t.default.createElement("meta", {
                        key: "profile:username",
                        property: "profile:username",
                        content: e.openGraph.profile.username
                    })), e.openGraph.profile.gender && h.push(t.default.createElement("meta", {
                        key: "profile:gender",
                        property: "profile:gender",
                        content: e.openGraph.profile.gender
                    }))) : "book" === R && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, r) {
                        h.push(t.default.createElement("meta", {
                            key: "book:author:0" + r,
                            property: "book:author",
                            content: e
                        }))
                    }), e.openGraph.book.isbn && h.push(t.default.createElement("meta", {
                        key: "book:isbn",
                        property: "book:isbn",
                        content: e.openGraph.book.isbn
                    })), e.openGraph.book.releaseDate && h.push(t.default.createElement("meta", {
                        key: "book:release_date",
                        property: "book:release_date",
                        content: e.openGraph.book.releaseDate
                    })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, r) {
                        h.push(t.default.createElement("meta", {
                            key: "book:tag:0" + r,
                            property: "book:tag",
                            content: e
                        }))
                    })) : "article" === R && e.openGraph.article ? (e.openGraph.article.publishedTime && h.push(t.default.createElement("meta", {
                        key: "article:published_time",
                        property: "article:published_time",
                        content: e.openGraph.article.publishedTime
                    })), e.openGraph.article.modifiedTime && h.push(t.default.createElement("meta", {
                        key: "article:modified_time",
                        property: "article:modified_time",
                        content: e.openGraph.article.modifiedTime
                    })), e.openGraph.article.expirationTime && h.push(t.default.createElement("meta", {
                        key: "article:expiration_time",
                        property: "article:expiration_time",
                        content: e.openGraph.article.expirationTime
                    })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, r) {
                        h.push(t.default.createElement("meta", {
                            key: "article:author:0" + r,
                            property: "article:author",
                            content: e
                        }))
                    }), e.openGraph.article.section && h.push(t.default.createElement("meta", {
                        key: "article:section",
                        property: "article:section",
                        content: e.openGraph.article.section
                    })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, r) {
                        h.push(t.default.createElement("meta", {
                            key: "article:tag:0" + r,
                            property: "article:tag",
                            content: e
                        }))
                    })) : ("video.movie" === R || "video.episode" === R || "video.tv_show" === R || "video.other" === R) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, r) {
                        e.profile && h.push(t.default.createElement("meta", {
                            key: "video:actor:0" + r,
                            property: "video:actor",
                            content: e.profile
                        })), e.role && h.push(t.default.createElement("meta", {
                            key: "video:actor:role:0" + r,
                            property: "video:actor:role",
                            content: e.role
                        }))
                    }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, r) {
                        h.push(t.default.createElement("meta", {
                            key: "video:director:0" + r,
                            property: "video:director",
                            content: e
                        }))
                    }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, r) {
                        h.push(t.default.createElement("meta", {
                            key: "video:writer:0" + r,
                            property: "video:writer",
                            content: e
                        }))
                    }), e.openGraph.video.duration && h.push(t.default.createElement("meta", {
                        key: "video:duration",
                        property: "video:duration",
                        content: e.openGraph.video.duration.toString()
                    })), e.openGraph.video.releaseDate && h.push(t.default.createElement("meta", {
                        key: "video:release_date",
                        property: "video:release_date",
                        content: e.openGraph.video.releaseDate
                    })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, r) {
                        h.push(t.default.createElement("meta", {
                            key: "video:tag:0" + r,
                            property: "video:tag",
                            content: e
                        }))
                    }), e.openGraph.video.series && h.push(t.default.createElement("meta", {
                        key: "video:series",
                        property: "video:series",
                        content: e.openGraph.video.series
                    })))
                }
                e.defaultOpenGraphImageWidth && (s.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (s.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && h.push.apply(h, o("image", e.openGraph.images, {
                    defaultWidth: s.defaultOpenGraphImageWidth,
                    defaultHeight: s.defaultOpenGraphImageHeight
                })), e.defaultOpenGraphVideoWidth && (s.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (s.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && h.push.apply(h, o("video", e.openGraph.videos, {
                    defaultWidth: s.defaultOpenGraphVideoWidth,
                    defaultHeight: s.defaultOpenGraphVideoHeight
                })), e.openGraph.audio && h.push.apply(h, o("audio", e.openGraph.audio)), e.openGraph.locale && h.push(t.default.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale
                })), (e.openGraph.siteName || e.openGraph.site_name) && h.push(t.default.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name
                }))
            }
            return e.canonical && h.push(t.default.createElement("link", {
                rel: "canonical",
                href: e.canonical,
                key: "canonical"
            })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
                var r, i, s = e.keyOverride,
                    o = l(e, n);
                h.push(t.default.createElement("meta", a({
                    key: "meta:" + (null != (r = null != (i = null != s ? s : o.name) ? i : o.property) ? r : o.httpEquiv)
                }, o)))
            }), null != (d = e.additionalLinkTags) && d.length && e.additionalLinkTags.forEach(function(e) {
                var r, n = e.crossOrigin,
                    s = l(e, i);
                h.push(t.default.createElement("link", a({
                    key: "link" + (null != (r = s.keyOverride) ? r : s.href) + s.rel
                }, s, {
                    crossOrigin: "anonymous" === n || "use-credentials" === n || "" === n ? n : void 0
                })))
            }), h
        },
        d = function(e) {
            return t.default.createElement(r.default, null, c(e))
        },
        u = function(e, t) {
            var r = t;
            return Array.isArray(r) && 1 === r.length && (r = a({}, t[0])), {
                __html: JSON.stringify(Array.isArray(r) ? r.map(function(t) {
                    return m(e, t)
                }) : m(e, r), x)
            }
        },
        m = function(e, t) {
            var r = t.id,
                l = a({}, (void 0 === r ? void 0 : r) ? {
                    "@id": t.id
                } : {}, t);
            return delete l.id, a({
                "@context": "https://schema.org",
                "@type": e
            }, l)
        },
        h = Object.freeze({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        }),
        f = RegExp("[" + Object.keys(h).join("") + "]", "g"),
        p = function(e) {
            return h[e]
        },
        x = function(e, t) {
            switch (typeof t) {
                case "object":
                    if (null === t) return;
                    return t;
                case "number":
                case "boolean":
                case "bigint":
                    return t;
                case "string":
                    return t.replace(f, p);
                default:
                    return
            }
        },
        v = ["type", "keyOverride", "scriptKey", "scriptId", "dataArray", "useAppDir"];

    function g(e) {
        var n = e.type,
            i = void 0 === n ? "Thing" : n,
            s = e.keyOverride,
            o = e.scriptKey,
            c = e.scriptId,
            d = void 0 === c ? void 0 : c,
            m = e.dataArray,
            h = e.useAppDir,
            f = l(e, v),
            p = function() {
                return t.default.createElement("script", {
                    type: "application/ld+json",
                    id: d,
                    "data-testid": d,
                    dangerouslySetInnerHTML: u(i, void 0 === m ? a({}, f) : m),
                    key: "jsonld-" + o + (s ? "-" + s : "")
                })
            };
        return void 0 !== h && h ? t.default.createElement(p, null) : t.default.createElement(r.default, null, p())
    }

    function b(e) {
        if ("string" == typeof e) return {
            "@type": "Person",
            name: e
        };
        if (e.name) {
            var t;
            return {
                "@type": null != (t = null == e ? void 0 : e.type) ? t : "Person",
                name: e.name,
                url: null == e ? void 0 : e.url
            }
        }
    }

    function y(e) {
        if (e) return {
            "@type": "ImageObject",
            url: e
        }
    }
    var w = ["reviewRating", "author", "publisher"],
        j = ["seller"];

    function k(e) {
        function t(e) {
            var t = e.seller,
                r = l(e, j);
            return a({}, r, {
                "@type": "Offer"
            }, t && {
                seller: {
                    "@type": "Organization",
                    name: t.name
                }
            })
        }
        return Array.isArray(e) ? e.map(t) : e ? t(e) : void 0
    }
    var N = ["type", "keyOverride", "images", "brand", "reviews", "aggregateRating", "manufacturerLogo", "manufacturerName", "offers", "aggregateOffer", "productName"];
    e.s(["NextSeo", 0, function(e) {
        var r = e.title,
            a = e.themeColor,
            l = e.noindex,
            n = e.nofollow,
            i = e.robotsProps,
            s = e.description,
            o = e.canonical,
            c = e.openGraph,
            u = e.facebook,
            m = e.twitter,
            h = e.additionalMetaTags,
            f = e.titleTemplate,
            p = e.defaultTitle,
            x = e.mobileAlternate,
            v = e.languageAlternates,
            g = e.additionalLinkTags;
        return t.default.createElement(t.default.Fragment, null, t.default.createElement(d, {
            title: r,
            themeColor: a,
            noindex: l,
            nofollow: n,
            robotsProps: i,
            description: s,
            canonical: o,
            facebook: u,
            openGraph: c,
            additionalMetaTags: h,
            twitter: m,
            titleTemplate: f,
            defaultTitle: p,
            mobileAlternate: x,
            languageAlternates: v,
            additionalLinkTags: g
        }))
    }, "ProductJsonLd", 0, function(e) {
        var r = e.type,
            n = e.keyOverride,
            i = e.images,
            s = e.brand,
            o = e.reviews,
            c = e.aggregateRating,
            d = e.manufacturerLogo,
            u = e.manufacturerName,
            m = e.offers,
            h = e.aggregateOffer,
            f = e.productName,
            p = l(e, N),
            x = a({}, p, {
                image: i,
                brand: function(e) {
                    if (e) return {
                        "@type": "Brand",
                        name: e
                    }
                }(s),
                review: function(e) {
                    function t(e) {
                        var t = e.reviewRating,
                            r = e.author,
                            n = e.publisher,
                            i = l(e, w);
                        return a({}, i, {
                            "@type": "Review"
                        }, r && {
                            author: Array.isArray(r) ? r.map(function(e) {
                                return b(e)
                            }).filter(function(e) {
                                return !!e
                            }) : r ? b(r) : void 0
                        }, t && {
                            reviewRating: function(e) {
                                if (e) return a({}, e, {
                                    "@type": "Rating"
                                })
                            }(t)
                        }, n && {
                            publisher: function(e) {
                                if (e) return {
                                    "@type": "Organization",
                                    name: e,
                                    logo: y(void 0)
                                }
                            }(n.name)
                        })
                    }
                    return Array.isArray(e) ? e.map(t) : e ? t(e) : void 0
                }(o),
                aggregateRating: function(e) {
                    if (e) return {
                        "@type": "AggregateRating",
                        ratingCount: e.ratingCount,
                        reviewCount: e.reviewCount,
                        bestRating: e.bestRating,
                        ratingValue: e.ratingValue,
                        worstRating: e.worstRating
                    }
                }(c),
                manufacturer: function(e) {
                    if (e && (e.manufacturerName || e.manufacturerLogo)) return {
                        "@type": "Organization",
                        name: e.manufacturerName,
                        logo: y(e.manufacturerLogo)
                    }
                }({
                    manufacturerLogo: d,
                    manufacturerName: u
                }),
                offers: m ? k(m) : function(e) {
                    if (e) return {
                        "@type": "AggregateOffer",
                        priceCurrency: e.priceCurrency,
                        highPrice: e.highPrice,
                        lowPrice: e.lowPrice,
                        offerCount: e.offerCount,
                        offers: k(e.offers)
                    }
                }(h),
                name: f
            });
        return t.default.createElement(g, a({
            type: void 0 === r ? "Product" : r,
            keyOverride: n
        }, x, {
            scriptKey: "Product"
        }))
    }], 276025);
    var E = e.i(391398),
        C = e.i(261576),
        S = e.i(41158);
    e.i(108399);
    var R = e.i(860231);
    let I = e => {
            let t, r, a, l = (0, C.c)(6),
                {
                    onClick: n,
                    label: i
                } = e;
            return l[0] !== i ? (t = (0, E.jsx)("span", {
                className: "hidden md:inline-flex",
                children: i
            }), l[0] = i, l[1] = t) : t = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, E.jsx)("span", {
                className: "inline-flex transition-all md:ms-[28px] md:group-hover:ms-40",
                children: (0, E.jsx)(R.default, {
                    name: "arrowRight",
                    size: 25,
                    color: "white",
                    strokeWidth: 3.5
                })
            }), l[2] = r) : r = l[2], l[3] !== n || l[4] !== t ? (a = (0, E.jsxs)("button", {
                "data-testid": "website-banner-button",
                type: "button",
                onClick: n,
                className: "group heading-3-semi-bold flex h-auto w-full shrink grow basis-0 items-center justify-center bg-white/10 p-8 font-normal text-white hover:bg-[#DDB3FF] md:justify-start md:ps-32",
                children: [t, r]
            }), l[3] = n, l[4] = t, l[5] = a) : a = l[5], a
        },
        T = e => {
            let t, r, a, l = (0, C.c)(6),
                {
                    href: n,
                    label: i
                } = e;
            return l[0] !== i ? (t = (0, E.jsx)("span", {
                children: i
            }), l[0] = i, l[1] = t) : t = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, E.jsx)("span", {
                className: "relative left-0 ms-8 inline-flex transition-all duration-300 group-hover:left-12",
                children: (0, E.jsx)(R.default, {
                    name: "arrowRight",
                    size: 25,
                    color: "white",
                    strokeWidth: 3.5
                })
            }), l[2] = r) : r = l[2], l[3] !== n || l[4] !== t ? (a = (0, E.jsxs)(S.default, {
                "data-testid": "website-banner-link",
                href: n,
                role: "button",
                className: "group body-3 md:body-1 hidden h-auto w-full shrink grow basis-0 items-center justify-center border-t border-neutral-500 bg-white/10 px-32 py-8 text-white transition-all duration-300 hover:bg-white/20 md:flex md:justify-center md:border-t-0 md:border-l md:font-normal",
                children: [t, r]
            }), l[3] = n, l[4] = t, l[5] = a) : a = l[5], a
        };
    e.s(["default", 0, e => {
        let t, r, a, l, n = (0, C.c)(15),
            {
                label: i,
                onClick: s,
                href: o,
                bannerText: c
            } = e;
        return n[0] !== c || n[1] !== o ? (t = o && (0, E.jsxs)(S.default, {
            href: o,
            className: "body-2 md:body-1 flex h-full shrink grow-[4] basis-0 items-center justify-center gap-16 px-14 py-14 text-left text-white md:inline-block md:justify-between md:text-center md:font-normal md:text-balance lg:ps-0",
            children: [(0, E.jsx)("span", {
                children: c
            }), (0, E.jsx)("span", {
                className: "md:hidden",
                children: (0, E.jsx)(R.default, {
                    name: "arrowRight",
                    size: 25,
                    color: "white",
                    strokeWidth: 3.5
                })
            })]
        }), n[0] = c, n[1] = o, n[2] = t) : t = n[2], n[3] !== o || n[4] !== i || n[5] !== s ? (r = !o && s && i && (0, E.jsx)(I, {
            onClick: s,
            label: i
        }), n[3] = o, n[4] = i, n[5] = s, n[6] = r) : r = n[6], n[7] !== o || n[8] !== i || n[9] !== s ? (a = !s && o && i && (0, E.jsx)(T, {
            href: o,
            label: i
        }), n[7] = o, n[8] = i, n[9] = s, n[10] = a) : a = n[10], n[11] !== t || n[12] !== r || n[13] !== a ? (l = (0, E.jsxs)("div", {
            "data-testid": "website-banner",
            className: "z-navigation animate-topBannerAnimation relative flex flex-col justify-center bg-black bg-linear-to-r from-neutral-300/50 via-neutral-300/10 via-75% to-neutral-300/30 text-white md:flex-row",
            children: [t, r, a]
        }), n[11] = t, n[12] = r, n[13] = a, n[14] = l) : l = n[14], l
    }], 60714), e.s([], 665617)
}, 254979, e => {
    "use strict";

    function t(e) {
        return null != e
    }
    e.s(["filterNotNil", 0, function(e) {
        return e ? .filter(t) ? ? []
    }, "mapNotNil", 0, function(e, r) {
        return e ? e.filter(t).map(r).filter(t) : []
    }, "toArrayOfAtLeastOne", 0, function(e) {
        return e.length > 0 ? e : null
    }, "toArrayOfAtLeastTwo", 0, function(e) {
        return e && e.length > 1 ? e : null
    }])
}, 447104, (e, t, r) => {
    ! function() {
        "use strict";
        var e = {
                114: function(e) {
                    function t(e) {
                        if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
                    }

                    function r(e, t) {
                        for (var r, a = "", l = 0, n = -1, i = 0, s = 0; s <= e.length; ++s) {
                            if (s < e.length) r = e.charCodeAt(s);
                            else if (47 === r) break;
                            else r = 47;
                            if (47 === r) {
                                if (n === s - 1 || 1 === i);
                                else if (n !== s - 1 && 2 === i) {
                                    if (a.length < 2 || 2 !== l || 46 !== a.charCodeAt(a.length - 1) || 46 !== a.charCodeAt(a.length - 2)) {
                                        if (a.length > 2) {
                                            var o = a.lastIndexOf("/");
                                            if (o !== a.length - 1) {
                                                -1 === o ? (a = "", l = 0) : l = (a = a.slice(0, o)).length - 1 - a.lastIndexOf("/"), n = s, i = 0;
                                                continue
                                            }
                                        } else if (2 === a.length || 1 === a.length) {
                                            a = "", l = 0, n = s, i = 0;
                                            continue
                                        }
                                    }
                                    t && (a.length > 0 ? a += "/.." : a = "..", l = 2)
                                } else a.length > 0 ? a += "/" + e.slice(n + 1, s) : a = e.slice(n + 1, s), l = s - n - 1;
                                n = s, i = 0
                            } else 46 === r && -1 !== i ? ++i : i = -1
                        }
                        return a
                    }
                    var a = {
                        resolve: function() {
                            for (var e, a, l = "", n = !1, i = arguments.length - 1; i >= -1 && !n; i--) i >= 0 ? a = arguments[i] : (void 0 === e && (e = ""), a = e), t(a), 0 !== a.length && (l = a + "/" + l, n = 47 === a.charCodeAt(0));
                            if (l = r(l, !n), n)
                                if (l.length > 0) return "/" + l;
                                else return "/";
                            return l.length > 0 ? l : "."
                        },
                        normalize: function(e) {
                            if (t(e), 0 === e.length) return ".";
                            var a = 47 === e.charCodeAt(0),
                                l = 47 === e.charCodeAt(e.length - 1);
                            return (0 !== (e = r(e, !a)).length || a || (e = "."), e.length > 0 && l && (e += "/"), a) ? "/" + e : e
                        },
                        isAbsolute: function(e) {
                            return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                        },
                        join: function() {
                            if (0 == arguments.length) return ".";
                            for (var e, r = 0; r < arguments.length; ++r) {
                                var l = arguments[r];
                                t(l), l.length > 0 && (void 0 === e ? e = l : e += "/" + l)
                            }
                            return void 0 === e ? "." : a.normalize(e)
                        },
                        relative: function(e, r) {
                            if (t(e), t(r), e === r || (e = a.resolve(e)) === (r = a.resolve(r))) return "";
                            for (var l = 1; l < e.length && 47 === e.charCodeAt(l); ++l);
                            for (var n = e.length, i = n - l, s = 1; s < r.length && 47 === r.charCodeAt(s); ++s);
                            for (var o = r.length - s, c = i < o ? i : o, d = -1, u = 0; u <= c; ++u) {
                                if (u === c) {
                                    if (o > c) {
                                        if (47 === r.charCodeAt(s + u)) return r.slice(s + u + 1);
                                        else if (0 === u) return r.slice(s + u)
                                    } else i > c && (47 === e.charCodeAt(l + u) ? d = u : 0 === u && (d = 0));
                                    break
                                }
                                var m = e.charCodeAt(l + u);
                                if (m !== r.charCodeAt(s + u)) break;
                                47 === m && (d = u)
                            }
                            var h = "";
                            for (u = l + d + 1; u <= n; ++u)(u === n || 47 === e.charCodeAt(u)) && (0 === h.length ? h += ".." : h += "/..");
                            return h.length > 0 ? h + r.slice(s + d) : (s += d, 47 === r.charCodeAt(s) && ++s, r.slice(s))
                        },
                        _makeLong: function(e) {
                            return e
                        },
                        dirname: function(e) {
                            if (t(e), 0 === e.length) return ".";
                            for (var r = e.charCodeAt(0), a = 47 === r, l = -1, n = !0, i = e.length - 1; i >= 1; --i)
                                if (47 === (r = e.charCodeAt(i))) {
                                    if (!n) {
                                        l = i;
                                        break
                                    }
                                } else n = !1;
                            return -1 === l ? a ? "/" : "." : a && 1 === l ? "//" : e.slice(0, l)
                        },
                        basename: function(e, r) {
                            if (void 0 !== r && "string" != typeof r) throw TypeError('"ext" argument must be a string');
                            t(e);
                            var a, l = 0,
                                n = -1,
                                i = !0;
                            if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                                if (r.length === e.length && r === e) return "";
                                var s = r.length - 1,
                                    o = -1;
                                for (a = e.length - 1; a >= 0; --a) {
                                    var c = e.charCodeAt(a);
                                    if (47 === c) {
                                        if (!i) {
                                            l = a + 1;
                                            break
                                        }
                                    } else -1 === o && (i = !1, o = a + 1), s >= 0 && (c === r.charCodeAt(s) ? -1 == --s && (n = a) : (s = -1, n = o))
                                }
                                return l === n ? n = o : -1 === n && (n = e.length), e.slice(l, n)
                            }
                            for (a = e.length - 1; a >= 0; --a)
                                if (47 === e.charCodeAt(a)) {
                                    if (!i) {
                                        l = a + 1;
                                        break
                                    }
                                } else -1 === n && (i = !1, n = a + 1);
                            return -1 === n ? "" : e.slice(l, n)
                        },
                        extname: function(e) {
                            t(e);
                            for (var r = -1, a = 0, l = -1, n = !0, i = 0, s = e.length - 1; s >= 0; --s) {
                                var o = e.charCodeAt(s);
                                if (47 === o) {
                                    if (!n) {
                                        a = s + 1;
                                        break
                                    }
                                    continue
                                } - 1 === l && (n = !1, l = s + 1), 46 === o ? -1 === r ? r = s : 1 !== i && (i = 1) : -1 !== r && (i = -1)
                            }
                            return -1 === r || -1 === l || 0 === i || 1 === i && r === l - 1 && r === a + 1 ? "" : e.slice(r, l)
                        },
                        format: function(e) {
                            var t, r;
                            if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                            return t = e.dir || e.root, r = e.base || (e.name || "") + (e.ext || ""), t ? t === e.root ? t + r : t + "/" + r : r
                        },
                        parse: function(e) {
                            t(e);
                            var r, a = {
                                root: "",
                                dir: "",
                                base: "",
                                ext: "",
                                name: ""
                            };
                            if (0 === e.length) return a;
                            var l = e.charCodeAt(0),
                                n = 47 === l;
                            n ? (a.root = "/", r = 1) : r = 0;
                            for (var i = -1, s = 0, o = -1, c = !0, d = e.length - 1, u = 0; d >= r; --d) {
                                if (47 === (l = e.charCodeAt(d))) {
                                    if (!c) {
                                        s = d + 1;
                                        break
                                    }
                                    continue
                                } - 1 === o && (c = !1, o = d + 1), 46 === l ? -1 === i ? i = d : 1 !== u && (u = 1) : -1 !== i && (u = -1)
                            }
                            return -1 === i || -1 === o || 0 === u || 1 === u && i === o - 1 && i === s + 1 ? -1 !== o && (0 === s && n ? a.base = a.name = e.slice(1, o) : a.base = a.name = e.slice(s, o)) : (0 === s && n ? (a.name = e.slice(1, i), a.base = e.slice(1, o)) : (a.name = e.slice(s, i), a.base = e.slice(s, o)), a.ext = e.slice(i, o)), s > 0 ? a.dir = e.slice(0, s - 1) : n && (a.dir = "/"), a
                        },
                        sep: "/",
                        delimiter: ":",
                        win32: null,
                        posix: null
                    };
                    a.posix = a, e.exports = a
                }
            },
            r = {};

        function a(t) {
            var l = r[t];
            if (void 0 !== l) return l.exports;
            var n = r[t] = {
                    exports: {}
                },
                i = !0;
            try {
                e[t](n, n.exports, a), i = !1
            } finally {
                i && delete r[t]
            }
            return n.exports
        }
        a.ab = "/ROOT/node_modules/next/dist/compiled/path-browserify/", t.exports = a(114)
    }()
}, 47811, (e, t, r) => {
    let a = e.r(447104),
        {
            locales: l,
            defaultLocale: n
        } = e.r(654816);
    t.exports = {
        i18n: {
            locales: Object.keys(l),
            defaultLocale: n,
            localeDetection: !1
        },
        localePath: a.resolve("./public/locales")
    }
}, 978443, 761226, 698501, 511058, 243111, 338391, 146342, 308520, 379566, 541118, 33190, 601216, 985370, 709823, 371305, 982560, 365731, 467521, 827378, 366072, 933900, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var a = e.i(271179),
        l = e.i(41158),
        n = e.i(191788);
    e.i(108399);
    var i = e.i(860231),
        s = e.i(495854),
        o = e.i(254979);
    let c = e => {
        let a, l = (0, r.c)(14),
            {
                currentLocale: c,
                locales: d,
                onChange: u,
                theme: m
            } = e,
            [h, f] = (0, n.useState)(!1);
        if (l[0] !== c || l[1] !== h || l[2] !== d || l[3] !== u || l[4] !== m) {
            let e, r, n, p, x;
            l[6] !== c ? (e = e => {
                let {
                    locale: t
                } = e;
                return t === c
            }, l[6] = c, l[7] = e) : e = l[7];
            let v = d.find(e);
            l[8] !== c ? (r = e => {
                let {
                    locale: t
                } = e;
                return t !== c
            }, l[8] = c, l[9] = r) : r = l[9];
            let g = d.filter(r),
                b = (0, o.filterNotNil)([v, ...g]),
                y = "dark" === m ? "text-white" : "text-black",
                w = "dark" === m ? "bg-black" : "bg-white",
                j = "dark" === m ? "white" : "black",
                k = "dark" === m ? "border-white" : "border-black";
            l[10] === Symbol.for("react.memo_cache_sentinel") ? (n = () => f(!0), p = () => f(!1), l[10] = n, l[11] = p) : (n = l[10], p = l[11]), l[12] !== y ? (x = (0, s.default)("relative cursor-pointer py-24", y), l[12] = y, l[13] = x) : x = l[13], a = (0, t.jsx)("div", {
                "data-testid": "locale-selector",
                onMouseEnter: n,
                onMouseLeave: p,
                className: x,
                children: h ? (0, t.jsx)("ul", {
                    className: (0, s.default)("absolute start-0 top-0 z-10 w-max rounded-lg border-2", w, k),
                    "data-testid": "locale-selector__locales",
                    children: b.map(e => {
                        let {
                            locale: r,
                            name: a
                        } = e;
                        return (0, t.jsx)("li", {
                            value: r,
                            children: (0, t.jsxs)("button", {
                                type: "button",
                                className: "flex items-center gap-8 px-24 py-16",
                                "data-testid": "locale-selector__locale",
                                tabIndex: 0,
                                onKeyDown: e => {
                                    "Escape" === e.key && f(!1)
                                },
                                onClick: () => {
                                    r !== c && u(r), f(!1)
                                },
                                children: [a, " ", r === c && (0, t.jsx)(i.default, {
                                    name: "chevronDown",
                                    size: 20,
                                    color: j,
                                    strokeWidth: 3.5
                                })]
                            })
                        }, r)
                    })
                }) : (0, t.jsxs)("button", {
                    type: "button",
                    className: (0, s.default)("absolute start-0 top-0 flex w-fit items-center gap-8 rounded-lg border-2 px-24 py-16", w, k),
                    "data-testid": "locale-selector__button",
                    tabIndex: 0,
                    onClick: () => f(!h),
                    children: [v ? .name, " ", (0, t.jsx)(i.default, {
                        name: "chevronDown",
                        size: 20,
                        color: j,
                        strokeWidth: 3.5
                    })]
                })
            }), l[0] = c, l[1] = h, l[2] = d, l[3] = u, l[4] = m, l[5] = a
        } else a = l[5];
        return a
    };
    var d = e.i(126019),
        u = e.i(203828),
        m = e.i(654816);
    let h = () => {
        let e, t, a, l, n = (0, r.c)(12),
            i = (0, u.useRouter)(),
            s = i.locale,
            o = i.locales;
        n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [], n[0] = e) : e = n[0];
        let c = e;
        n[1] !== s || n[2] !== i || n[3] !== o ? (t = e => {
            o.includes(e) && e !== s && i.push(i.asPath, "", {
                locale: e
            }).then(() => i.reload())
        }, n[1] = s, n[2] = i, n[3] = o, n[4] = t) : t = n[4];
        let d = t;
        if (n[5] !== o) {
            let e;
            n[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (e, t) => {
                let r = m.locales[t].name,
                    a = m.locales[t].fullLocale;
                return r && !c.includes(a) ? [...e, {
                    locale: t,
                    name: r,
                    fullLocale: a
                }] : e
            }, n[7] = e) : e = n[7], a = o.reduce(e, []), n[5] = o, n[6] = a
        } else a = n[6];
        let h = a;
        return n[8] !== s || n[9] !== h || n[10] !== d ? (l = {
            locale: s,
            setLocale: d,
            locales: h
        }, n[8] = s, n[9] = h, n[10] = d, n[11] = l) : l = n[11], l
    };
    e.s(["default", 0, h], 761226);
    let f = e => {
            let a, n, i = (0, r.c)(7),
                {
                    theme: s,
                    responsive: o
                } = e,
                {
                    locale: c
                } = h(),
                u = "en" === c ? "https://www.ledger.com" : `https://www.ledger.com/${m.locales[c].ledgerWebsiteLocale}`,
                f = "dark" === s ? "/ledger-logo-long-white.svg" : "/ledger-logo-long-black.svg",
                p = "dark" === s ? "/ledger-logo-short-white.svg" : "/ledger-logo-short-black.svg";
            return i[0] !== f || i[1] !== o || i[2] !== p ? (a = o ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(d.default, {
                    src: p,
                    alt: "Ledger",
                    priority: !0,
                    fill: !0,
                    className: "block lg:hidden"
                }), (0, t.jsx)(d.default, {
                    src: f,
                    alt: "Ledger",
                    priority: !0,
                    fill: !0,
                    className: "hidden lg:block"
                })]
            }) : (0, t.jsx)(d.default, {
                src: f,
                alt: "Ledger",
                priority: !0,
                fill: !0
            }), i[0] = f, i[1] = o, i[2] = p, i[3] = a) : a = i[3], i[4] !== u || i[5] !== a ? (n = (0, t.jsx)(l.default, {
                href: u,
                className: "w-full",
                "data-testid": "home-link",
                children: a
            }), i[4] = u, i[5] = a, i[6] = n) : n = i[6], n
        },
        p = () => {
            let e, a = (0, r.c)(1);
            return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
                "data-testid": "payment-logos",
                className: "mt-12",
                children: (0, t.jsx)(d.default, {
                    src: "/images/paymentsLogo.webp",
                    alt: "payments methods",
                    height: 44,
                    width: 228
                })
            }), a[0] = e) : e = a[0], e
        },
        x = e => {
            let a, l, i, s = (0, r.c)(5),
                {
                    name: o
                } = e,
                [c, d] = (0, n.useState)(!1);
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                d(!0)
            }, l = [], s[0] = a, s[1] = l) : (a = s[0], l = s[1]), (0, n.useEffect)(a, l), s[2] !== c || s[3] !== o ? (i = c ? (0, t.jsx)("button", {
                className: "b-0 ot-sdk-show-settings max-w-fit cursor-pointer pb-8 pt-16 text-left",
                type: "button",
                "data-testid": "cookie-consent-link",
                children: o
            }) : null, s[2] = c, s[3] = o, s[4] = i) : i = s[4], i
        };
    e.s(["default", 0, x], 698501);
    var v = e.i(455108);
    let g = e => {
            let a, l, n, i, s = (0, r.c)(9),
                {
                    navData: o
                } = e,
                c = o ? .name;
            return s[0] !== c ? (a = (0, t.jsx)("div", {
                className: "body-1-semi-bold",
                children: c
            }), s[0] = c, s[1] = a) : a = s[1], s[2] !== o.children ? (l = o.children ? .map(w), s[2] = o.children, s[3] = l) : l = s[3], s[4] !== l ? (n = (0, t.jsx)("div", {
                className: "flex flex-col pt-12 text-neutral-400 body-3",
                children: l
            }), s[4] = l, s[5] = n) : n = s[5], s[6] !== a || s[7] !== n ? (i = (0, t.jsxs)("div", {
                "data-testid": "desktop-nav__subnav",
                children: [a, n]
            }), s[6] = a, s[7] = n, s[8] = i) : i = s[8], i
        },
        b = e => {
            let a, l, n, i, s, o, c, d, u, m, h, f, p, x, v, b = (0, r.c)(40),
                {
                    navData: y
                } = e;
            return b[0] !== y[0] ? (a = y[0] && (0, t.jsx)(g, {
                navData: y[0]
            }), b[0] = y[0], b[1] = a) : a = b[1], b[2] !== y[1] ? (l = y[1] && (0, t.jsx)(g, {
                navData: y[1]
            }), b[2] = y[1], b[3] = l) : l = b[3], b[4] !== y[2] ? (n = y[2] && (0, t.jsx)(g, {
                navData: y[2]
            }), b[4] = y[2], b[5] = n) : n = b[5], b[6] !== a || b[7] !== l || b[8] !== n ? (i = (0, t.jsxs)("div", {
                className: "flex flex-1 flex-col gap-40 pe-8",
                children: [a, l, n]
            }), b[6] = a, b[7] = l, b[8] = n, b[9] = i) : i = b[9], b[10] !== y[3] ? (s = y[3] && (0, t.jsx)(g, {
                navData: y[3]
            }), b[10] = y[3], b[11] = s) : s = b[11], b[12] !== y[4] ? (o = y[4] && (0, t.jsx)(g, {
                navData: y[4]
            }), b[12] = y[4], b[13] = o) : o = b[13], b[14] !== y[5] ? (c = y[5] && (0, t.jsx)(g, {
                navData: y[5]
            }), b[14] = y[5], b[15] = c) : c = b[15], b[16] !== y[6] ? (d = y[6] && (0, t.jsx)(g, {
                navData: y[6]
            }), b[16] = y[6], b[17] = d) : d = b[17], b[18] !== y[7] ? (u = y[7] && (0, t.jsx)(g, {
                navData: y[7]
            }), b[18] = y[7], b[19] = u) : u = b[19], b[20] !== s || b[21] !== o || b[22] !== c || b[23] !== d || b[24] !== u ? (m = (0, t.jsxs)("div", {
                className: "flex flex-1 flex-col gap-40 px-8",
                children: [s, o, c, d, u]
            }), b[20] = s, b[21] = o, b[22] = c, b[23] = d, b[24] = u, b[25] = m) : m = b[25], b[26] !== y[8] ? (h = y[8] && (0, t.jsx)(g, {
                navData: y[8]
            }), b[26] = y[8], b[27] = h) : h = b[27], b[28] !== y[9] ? (f = y[9] && (0, t.jsx)(g, {
                navData: y[9]
            }), b[28] = y[9], b[29] = f) : f = b[29], b[30] !== y[10] ? (p = y[10] && (0, t.jsx)(g, {
                navData: y[10]
            }), b[30] = y[10], b[31] = p) : p = b[31], b[32] !== h || b[33] !== f || b[34] !== p ? (x = (0, t.jsxs)("div", {
                className: "flex flex-1 flex-col gap-40 ps-8",
                children: [h, f, p]
            }), b[32] = h, b[33] = f, b[34] = p, b[35] = x) : x = b[35], b[36] !== m || b[37] !== x || b[38] !== i ? (v = (0, t.jsxs)("div", {
                "data-testid": "desktop-nav",
                className: "col-span-9 mt-56 hidden flex-row sm:flex lg:ms-12 lg:mt-0",
                children: [i, m, x]
            }), b[36] = m, b[37] = x, b[38] = i, b[39] = v) : v = b[39], v
        },
        y = e => {
            let a, l, o = (0, r.c)(7),
                {
                    navData: c
                } = e,
                [d, u] = (0, n.useState)("");
            if (o[0] !== d || o[1] !== c) {
                let e;
                o[3] !== d ? (e = e => (0, t.jsxs)("div", {
                    children: [(0, t.jsxs)("button", {
                        type: "button",
                        className: "flex w-full cursor-pointer items-center justify-between gap-8 p-12 ps-0 body-3",
                        tabIndex: 0,
                        onClick: () => {
                            d === e.name ? u("") : u(e.name)
                        },
                        children: [(0, t.jsx)("span", {
                            children: e.name
                        }), (0, t.jsx)(i.default, {
                            name: "chevronDown",
                            size: 20,
                            color: "white",
                            strokeWidth: 3.5
                        })]
                    }), (0, t.jsx)("ul", {
                        "data-testid": "mobile-nav__subnav",
                        className: (0, s.default)("overflow-hidden duration-300", d === e.name ? "visible max-h-[24rem]" : "invisible max-h-0"),
                        children: e.children ? .map(j)
                    })]
                }, `${e.name}`), o[3] = d, o[4] = e) : e = o[4], a = c.map(e), o[0] = d, o[1] = c, o[2] = a
            } else a = o[2];
            return o[5] !== a ? (l = (0, t.jsx)("div", {
                "data-testid": "mobile-nav",
                className: "mt-32 w-full sm:hidden",
                children: a
            }), o[5] = a, o[6] = l) : l = o[6], l
        };

    function w(e) {
        return "cookieConsent" === e.type ? (0, t.jsx)(x, {
            name: e.name
        }, e.name) : (0, t.jsx)(l.default, {
            href: e.href,
            target: e.isExternal ? "_blank" : "_self",
            className: "max-w-fit cursor-pointer pb-8 pt-4",
            children: e.name
        }, e.name)
    }

    function j(e) {
        let {
            name: r,
            href: a,
            isExternal: n,
            type: i
        } = e;
        return (0, t.jsx)("li", {
            className: "px-12 py-8 text-neutral-400 body-3",
            children: "cookieConsent" === i ? (0, t.jsx)(x, {
                name: r
            }) : (0, t.jsx)(l.default, {
                href: a,
                target: n ? "_blank" : "_self",
                children: r
            })
        }, `${r}-${a}`)
    }
    e.s(["default", 0, e => {
        let l, n, i, s, o, d, u, m, x, g, w, j, k, N, E, C = (0, r.c)(35),
            {
                navData: S
            } = e,
            {
                t: R
            } = (0, a.useTranslation)("footer"),
            {
                locale: I,
                setLocale: T,
                locales: P
            } = h();
        return C[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("div", {
            className: "relative flex h-40 w-112 justify-start",
            children: (0, t.jsx)(f, {
                theme: "dark"
            })
        }), C[0] = l) : l = C[0], C[1] !== I || C[2] !== P || C[3] !== T ? (n = (0, t.jsx)("div", {
            className: "py-24",
            children: (0, t.jsx)(c, {
                locales: P,
                currentLocale: I,
                onChange: T,
                theme: "dark"
            })
        }), C[1] = I, C[2] = P, C[3] = T, C[4] = n) : n = C[4], C[5] !== R ? (i = R("copyright"), C[5] = R, C[6] = i) : i = C[6], C[7] !== i ? (s = (0, t.jsx)("p", {
            children: i
        }), C[7] = i, C[8] = s) : s = C[8], C[9] !== R ? (o = R("address"), C[9] = R, C[10] = o) : o = C[10], C[11] !== o ? (d = (0, t.jsx)("p", {
            className: "py-8",
            children: o
        }), C[11] = o, C[12] = d) : d = C[12], C[13] !== R ? (u = R("paymentsMethods"), C[13] = R, C[14] = u) : u = C[14], C[15] !== u ? (m = (0, t.jsx)("p", {
            children: u
        }), C[15] = u, C[16] = m) : m = C[16], C[17] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, t.jsx)(p, {}), C[17] = x) : x = C[17], C[18] !== m ? (g = (0, t.jsxs)("div", {
            className: "h-auto",
            children: [m, x]
        }), C[18] = m, C[19] = g) : g = C[19], C[20] !== g || C[21] !== s || C[22] !== d ? (w = (0, t.jsxs)("div", {
            className: "grid gap-8 text-neutral-400 body-4",
            children: [s, d, g]
        }), C[20] = g, C[21] = s, C[22] = d, C[23] = w) : w = C[23], C[24] !== w || C[25] !== n ? (j = (0, t.jsx)("div", {
            className: "col-span-3 body-3",
            children: (0, t.jsxs)("div", {
                className: "grid gap-8",
                children: [l, n, w]
            })
        }), C[24] = w, C[25] = n, C[26] = j) : j = C[26], C[27] !== S ? (k = S && (0, t.jsx)(b, {
            navData: S
        }), C[27] = S, C[28] = k) : k = C[28], C[29] !== S ? (N = S && (0, t.jsx)(y, {
            navData: S
        }), C[29] = S, C[30] = N) : N = C[30], C[31] !== j || C[32] !== k || C[33] !== N ? (E = (0, t.jsx)("footer", {
            className: "bg-black",
            "data-testid": "footer",
            children: (0, t.jsx)(v.default.Section, {
                children: (0, t.jsxs)("div", {
                    className: "text-white lg:grid lg:grid-cols-12",
                    children: [j, k, N]
                })
            })
        }), C[31] = j, C[32] = k, C[33] = N, C[34] = E) : E = C[34], E
    }], 511058), e.s([], 978443);
    var k = e.i(47811),
        N = e.i(149028);
    let E = (e, t) => {
        let r = (0, N.default)(),
            a = "en" === e ? "" : `/${e}`,
            l = t.split("/");
        return "products" === l[1] && 4 === l.length ? (l.pop(), `${r}${a}${l.join("/")}`) : `${r}${a}${t}`
    };
    e.s(["default", 0, E], 243111), e.s(["default", 0, e => [{
        hrefLang: "x-default",
        href: E("en", e)
    }, ...k.i18n.locales.map(t => ({
        hrefLang: "zh-cn" === t ? "zh-Hans" : t,
        href: E(t, e)
    }))]], 338391), e.s(["default", 0, () => [{
        rel: "icon",
        href: "/favicons/ledger-favicon-shop_16x16.png",
        sizes: "16x16",
        class: "dynamic-favicon"
    }, {
        rel: "icon",
        href: "/favicons/ledger-favicon-shop_32x32.png",
        sizes: "32x32",
        class: "dynamic-favicon"
    }, {
        rel: "icon",
        href: "/favicons/ledger-favicon-shop_96x96.png",
        sizes: "96x96",
        class: "dynamic-favicon"
    }, {
        rel: "apple-touch-icon",
        href: "/favicons/ledger-favicon-shop_200x200.png",
        class: "dynamic-favicon"
    }, {
        rel: "shortcut icon",
        href: "/favicons/ledger-favicon-shop_200x200.png"
    }]], 146342);
    var C = e.i(148728);
    let S = "idle",
        R = 0,
        I = () => {
            (0, C.default)(() => {
                let e = window.OneTrust;
                e.Init(), e.LoadBanner();
                let t = document.getElementsByClassName("ot-sdk-show-settings");
                for (let r = 0; r < t.length; r += 1) t[r].onclick = function(t) {
                    t.stopImmediatePropagation(), e.ToggleInfoDisplay()
                };
                window.dispatchEvent(new Event("oneTrustReady"))
            })
        },
        T = () => {
            if ("initialized" === S) return void I();
            if ("initializing" !== S) {
                if (S = "initializing", window.OneTrust ? .Init) {
                    S = "initialized", I();
                    return
                }
                if (R >= 10) {
                    console.error("Failed to initialize OneTrust"), S = "failed";
                    return
                }
                R += 1, setTimeout(() => {
                    S = "idle", T()
                }, 100)
            }
        };

    function P() {
        T()
    }
    e.s(["default", 0, () => {
        let e, t = (0, r.c)(2),
            {
                asPath: a
            } = (0, u.useRouter)();
        t[0] !== a ? (e = [a], t[0] = a, t[1] = e) : e = t[1], (0, n.useEffect)(P, e)
    }], 308520);
    var F = e.i(480495);

    function _(e) {
        let [t, r] = e.split(":");
        (0, F.setCookie)(t, void 0 === r ? "on" : r)
    }
    e.s(["default", 0, () => {
        let {
            query: e
        } = (0, u.useRouter)();
        "string" != typeof e ? .ff || e.ff.split(";").forEach(_)
    }], 379566);
    let D = {
        1095624: "demoABTastyCampaign",
        1126376: "bestSellersPreprod",
        1122379: "homeShopHeroProd",
        1149601: "accordionQuestionLNX",
        1164345: "sidecartAccessoryHighlightPreprod",
        1170843: "sidecartAccessoryHighlightProd",
        1185331: "recoverPriceTest",
        1173711: "switchBlockLnxPDP",
        1226918: "sidecartRecover6MonthsPreprod",
        1220532: "sidecartRecover6MonthsProd",
        1e6: "sidecartRecover3YearsPreprod",
        1000001: "sidecartRecover3YearsProd"
    };
    var L = e.i(866671);
    let A = "abtasty_executedCampaign";
    e.s(["default", 0, () => {
        let e, t, a, l, i, s, o = (0, r.c)(8);
        o[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {}, o[0] = e) : e = o[0];
        let [c, d] = (0, n.useState)(e);
        o[1] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
            d(Object.values(D).reduce((e, t) => {
                let r = (0, F.getCookie)(t);
                return "string" != typeof r ? e : { ...e,
                    [t]: JSON.parse(r)
                }
            }, {}))
        }, a = [], o[1] = t, o[2] = a) : (t = o[1], a = o[2]), (0, n.useEffect)(t, a), o[3] !== c ? (l = e => {
            let t, {
                    campaignId: r,
                    variationId: a
                } = e.detail || {},
                l = (t = Object.keys(D).find(e => Number(e) === r)) ? D[t] : null;
            if (l && r && a) {
                let e, t, n, i = { ...c,
                    [l]: {
                        campaignId: r,
                        variationId: a
                    }
                };
                e = (0, L.default)(), n = (t = new Date).getMonth() + 3, t.setMonth(n), (0, F.setCookie)(l, {
                    campaignId: r,
                    variationId: a
                }, {
                    path: "/",
                    domain: e,
                    expires: t
                }), d(i)
            }
        }, o[3] = c, o[4] = l) : l = o[4];
        let u = l;
        return o[5] !== u ? (i = () => (window.addEventListener(A, u), () => {
            window.removeEventListener(A, u)
        }), s = [u], o[5] = u, o[6] = i, o[7] = s) : (i = o[6], s = o[7]), (0, n.useEffect)(i, s), c
    }], 541118);
    let O = "ledger.campaign_active";
    e.s(["setCryptoVouchersCookies", 0, e => {
        if (e.filter(e => "campaign" === e.type).length > 0) {
            let e = new Date;
            e.setDate(new Date().getDate() + 1), (0, F.setCookie)(O, "true", {
                expires: e
            })
        } else(0, F.deleteCookie)(O)
    }], 33190);
    var M = e.i(644594),
        U = e.i(478797),
        G = e.i(351688),
        V = e.i(215217);
    e.s(["default", 0, () => {
        let {
            setIsDrawerOpen: e,
            isDrawerOpen: t
        } = (0, n.useContext)(M.DrawerContext), {
            cart: r
        } = (0, V.default)(), {
            trackEvent: a
        } = (0, U.default)(), l = (0, u.useRouter)();
        return (0, n.useEffect)(() => {
            "/cart" === l.asPath && e(!0)
        }, [l.asPath, e]), {
            toggleSideCart: (0, n.useCallback)(() => {
                t || a("view_cart", {
                    items: (0, G.trackViewCart)(r)
                }), e(e => !e)
            }, [t]),
            cartItemCount: r ? .totalQuantity || 0
        }
    }], 601216);
    var z = e.i(730943),
        H = e.i(479293),
        B = e.i(671185),
        K = e.i(674534),
        $ = e.i(55037),
        W = e.i(357006),
        q = e.i(724537),
        Q = e.i(993953),
        Y = e.i(64592),
        Z = e.i(352162),
        J = e.i(64899),
        X = e.i(593427),
        ee = e.i(776833),
        et = e.i(998657),
        er = e.i(349577),
        ea = "NavigationMenu",
        [el, en, ei] = (0, Z.createCollection)(ea),
        [es, eo, ec] = (0, Z.createCollection)(ea),
        [ed, eu] = (0, H.createContextScope)(ea, [ei, ec]),
        [em, eh] = ed(ea),
        [ef, ep] = ed(ea),
        ex = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                value: l,
                onValueChange: i,
                defaultValue: s,
                delayDuration: o = 200,
                skipDelayDuration: c = 300,
                orientation: d = "horizontal",
                dir: u,
                ...m
            } = e, [h, f] = n.useState(null), p = (0, W.useComposedRefs)(r, e => f(e)), x = (0, q.useDirection)(u), v = n.useRef(0), g = n.useRef(0), b = n.useRef(0), [y, w] = n.useState(!0), [j, k] = (0, $.useControllableState)({
                prop: l,
                onChange: e => {
                    let t = c > 0;
                    "" !== e ? (window.clearTimeout(b.current), t && w(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(() => w(!0), c)), i ? .(e)
                },
                defaultProp: s ? ? "",
                caller: ea
            }), N = n.useCallback(() => {
                window.clearTimeout(g.current), g.current = window.setTimeout(() => k(""), 150)
            }, [k]), E = n.useCallback(e => {
                window.clearTimeout(g.current), k(e)
            }, [k]), C = n.useCallback(e => {
                j === e ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
                    window.clearTimeout(g.current), k(e)
                }, o)
            }, [j, k, o]);
            return n.useEffect(() => () => {
                window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current)
            }, []), (0, t.jsx)(eg, {
                scope: a,
                isRootMenu: !0,
                value: j,
                dir: x,
                orientation: d,
                rootNavigationMenu: h,
                onTriggerEnter: e => {
                    window.clearTimeout(v.current), y ? C(e) : E(e)
                },
                onTriggerLeave: () => {
                    window.clearTimeout(v.current), N()
                },
                onContentEnter: () => window.clearTimeout(g.current),
                onContentLeave: N,
                onItemSelect: e => {
                    k(t => t === e ? "" : e)
                },
                onItemDismiss: () => k(""),
                children: (0, t.jsx)(K.Primitive.nav, {
                    "aria-label": "Main",
                    "data-orientation": d,
                    dir: x,
                    ...m,
                    ref: p
                })
            })
        });
    ex.displayName = ea;
    var ev = "NavigationMenuSub";
    n.forwardRef((e, r) => {
        let {
            __scopeNavigationMenu: a,
            value: l,
            onValueChange: n,
            defaultValue: i,
            orientation: s = "horizontal",
            ...o
        } = e, c = eh(ev, a), [d, u] = (0, $.useControllableState)({
            prop: l,
            onChange: n,
            defaultProp: i ? ? "",
            caller: ev
        });
        return (0, t.jsx)(eg, {
            scope: a,
            isRootMenu: !1,
            value: d,
            dir: c.dir,
            orientation: s,
            rootNavigationMenu: c.rootNavigationMenu,
            onTriggerEnter: e => u(e),
            onItemSelect: e => u(e),
            onItemDismiss: () => u(""),
            children: (0, t.jsx)(K.Primitive.div, {
                "data-orientation": s,
                ...o,
                ref: r
            })
        })
    }).displayName = ev;
    var eg = e => {
            let {
                scope: r,
                isRootMenu: a,
                rootNavigationMenu: l,
                dir: i,
                orientation: s,
                children: o,
                value: c,
                onItemSelect: d,
                onItemDismiss: u,
                onTriggerEnter: m,
                onTriggerLeave: h,
                onContentEnter: f,
                onContentLeave: p
            } = e, [x, v] = n.useState(null), [g, b] = n.useState(new Map), [y, w] = n.useState(null);
            return (0, t.jsx)(em, {
                scope: r,
                isRootMenu: a,
                rootNavigationMenu: l,
                value: c,
                previousValue: (0, X.usePrevious)(c),
                baseId: (0, Y.useId)(),
                dir: i,
                orientation: s,
                viewport: x,
                onViewportChange: v,
                indicatorTrack: y,
                onIndicatorTrackChange: w,
                onTriggerEnter: (0, et.useCallbackRef)(m),
                onTriggerLeave: (0, et.useCallbackRef)(h),
                onContentEnter: (0, et.useCallbackRef)(f),
                onContentLeave: (0, et.useCallbackRef)(p),
                onItemSelect: (0, et.useCallbackRef)(d),
                onItemDismiss: (0, et.useCallbackRef)(u),
                onViewportContentChange: n.useCallback((e, t) => {
                    b(r => (r.set(e, t), new Map(r)))
                }, []),
                onViewportContentRemove: n.useCallback(e => {
                    b(t => t.has(e) ? (t.delete(e), new Map(t)) : t)
                }, []),
                children: (0, t.jsx)(el.Provider, {
                    scope: r,
                    children: (0, t.jsx)(ef, {
                        scope: r,
                        items: g,
                        children: o
                    })
                })
            })
        },
        eb = "NavigationMenuList",
        ey = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                ...l
            } = e, n = eh(eb, a), i = (0, t.jsx)(K.Primitive.ul, {
                "data-orientation": n.orientation,
                ...l,
                ref: r
            });
            return (0, t.jsx)(K.Primitive.div, {
                style: {
                    position: "relative"
                },
                ref: n.onIndicatorTrackChange,
                children: (0, t.jsx)(el.Slot, {
                    scope: a,
                    children: n.isRootMenu ? (0, t.jsx)(eU, {
                        asChild: !0,
                        children: i
                    }) : i
                })
            })
        });
    ey.displayName = eb;
    var ew = "NavigationMenuItem",
        [ej, ek] = ed(ew),
        eN = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                value: l,
                ...i
            } = e, s = (0, Y.useId)(), o = n.useRef(null), c = n.useRef(null), d = n.useRef(null), u = n.useRef(() => {}), m = n.useRef(!1), h = n.useCallback((e = "start") => {
                if (o.current) {
                    u.current();
                    let t = ez(o.current);
                    t.length && eH("start" === e ? t : t.reverse())
                }
            }, []), f = n.useCallback(() => {
                if (o.current) {
                    var e;
                    let t = ez(o.current);
                    t.length && ((e = t).forEach(e => {
                        e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                    }), u.current = () => {
                        e.forEach(e => {
                            let t = e.dataset.tabindex;
                            e.setAttribute("tabindex", t)
                        })
                    })
                }
            }, []);
            return (0, t.jsx)(ej, {
                scope: a,
                value: l || s || "LEGACY_REACT_AUTO_VALUE",
                triggerRef: c,
                contentRef: o,
                focusProxyRef: d,
                wasEscapeCloseRef: m,
                onEntryKeyDown: h,
                onFocusProxyEnter: h,
                onRootContentClose: f,
                onContentFocusOutside: f,
                children: (0, t.jsx)(K.Primitive.li, { ...i,
                    ref: r
                })
            })
        });
    eN.displayName = ew;
    var eE = "NavigationMenuTrigger",
        eC = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                disabled: l,
                ...i
            } = e, s = eh(eE, e.__scopeNavigationMenu), o = ek(eE, e.__scopeNavigationMenu), c = n.useRef(null), d = (0, W.useComposedRefs)(c, o.triggerRef, r), u = e$(s.baseId, o.value), m = eW(s.baseId, o.value), h = n.useRef(!1), f = n.useRef(!1), p = o.value === s.value;
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(el.ItemSlot, {
                    scope: a,
                    value: o.value,
                    children: (0, t.jsx)(eV, {
                        asChild: !0,
                        children: (0, t.jsx)(K.Primitive.button, {
                            id: u,
                            disabled: l,
                            "data-disabled": l ? "" : void 0,
                            "data-state": eK(p),
                            "aria-expanded": p,
                            "aria-controls": m,
                            ...i,
                            ref: d,
                            onPointerEnter: (0, B.composeEventHandlers)(e.onPointerEnter, () => {
                                f.current = !1, o.wasEscapeCloseRef.current = !1
                            }),
                            onPointerMove: (0, B.composeEventHandlers)(e.onPointerMove, eq(() => {
                                l || f.current || o.wasEscapeCloseRef.current || h.current || (s.onTriggerEnter(o.value), h.current = !0)
                            })),
                            onPointerLeave: (0, B.composeEventHandlers)(e.onPointerLeave, eq(() => {
                                l || (s.onTriggerLeave(), h.current = !1)
                            })),
                            onClick: (0, B.composeEventHandlers)(e.onClick, () => {
                                s.onItemSelect(o.value), f.current = p
                            }),
                            onKeyDown: (0, B.composeEventHandlers)(e.onKeyDown, e => {
                                let t = {
                                    horizontal: "ArrowDown",
                                    vertical: "rtl" === s.dir ? "ArrowLeft" : "ArrowRight"
                                }[s.orientation];
                                p && e.key === t && (o.onEntryKeyDown(), e.preventDefault())
                            })
                        })
                    })
                }), p && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(er.Root, {
                        "aria-hidden": !0,
                        tabIndex: 0,
                        ref: o.focusProxyRef,
                        onFocus: e => {
                            let t = o.contentRef.current,
                                r = e.relatedTarget,
                                a = r === c.current,
                                l = t ? .contains(r);
                            (a || !l) && o.onFocusProxyEnter(a ? "start" : "end")
                        }
                    }), s.viewport && (0, t.jsx)("span", {
                        "aria-owns": m
                    })]
                })]
            })
        });
    eC.displayName = eE;
    var eS = "navigationMenu.linkSelect",
        eR = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                active: l,
                onSelect: n,
                ...i
            } = e;
            return (0, t.jsx)(eV, {
                asChild: !0,
                children: (0, t.jsx)(K.Primitive.a, {
                    "data-active": l ? "" : void 0,
                    "aria-current": l ? "page" : void 0,
                    ...i,
                    ref: r,
                    onClick: (0, B.composeEventHandlers)(e.onClick, e => {
                        let t = e.target,
                            r = new CustomEvent(eS, {
                                bubbles: !0,
                                cancelable: !0
                            });
                        if (t.addEventListener(eS, e => n ? .(e), {
                                once: !0
                            }), (0, K.dispatchDiscreteCustomEvent)(t, r), !r.defaultPrevented && !e.metaKey) {
                            let e = new CustomEvent(eD, {
                                bubbles: !0,
                                cancelable: !0
                            });
                            (0, K.dispatchDiscreteCustomEvent)(t, e)
                        }
                    }, {
                        checkForDefaultPrevented: !1
                    })
                })
            })
        });
    eR.displayName = "NavigationMenuLink";
    var eI = "NavigationMenuIndicator";
    n.forwardRef((e, r) => {
        let {
            forceMount: a,
            ...l
        } = e, n = eh(eI, e.__scopeNavigationMenu), i = !!n.value;
        return n.indicatorTrack ? z.default.createPortal((0, t.jsx)(Q.Presence, {
            present: a || i,
            children: (0, t.jsx)(eT, { ...l,
                ref: r
            })
        }), n.indicatorTrack) : null
    }).displayName = eI;
    var eT = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                ...l
            } = e, i = eh(eI, a), s = en(a), [o, c] = n.useState(null), [d, u] = n.useState(null), m = "horizontal" === i.orientation, h = !!i.value;
            n.useEffect(() => {
                let e = s(),
                    t = e.find(e => e.value === i.value) ? .ref.current;
                t && c(t)
            }, [s, i.value]);
            let f = () => {
                o && u({
                    size: m ? o.offsetWidth : o.offsetHeight,
                    offset: m ? o.offsetLeft : o.offsetTop
                })
            };
            return eB(o, f), eB(i.indicatorTrack, f), d ? (0, t.jsx)(K.Primitive.div, {
                "aria-hidden": !0,
                "data-state": h ? "visible" : "hidden",
                "data-orientation": i.orientation,
                ...l,
                ref: r,
                style: {
                    position: "absolute",
                    ...m ? {
                        left: 0,
                        width: d.size + "px",
                        transform: `translateX(${d.offset}px)`
                    } : {
                        top: 0,
                        height: d.size + "px",
                        transform: `translateY(${d.offset}px)`
                    },
                    ...l.style
                }
            }) : null
        }),
        eP = "NavigationMenuContent",
        eF = n.forwardRef((e, r) => {
            let {
                forceMount: a,
                ...l
            } = e, n = eh(eP, e.__scopeNavigationMenu), i = ek(eP, e.__scopeNavigationMenu), s = (0, W.useComposedRefs)(i.contentRef, r), o = i.value === n.value, c = {
                value: i.value,
                triggerRef: i.triggerRef,
                focusProxyRef: i.focusProxyRef,
                wasEscapeCloseRef: i.wasEscapeCloseRef,
                onContentFocusOutside: i.onContentFocusOutside,
                onRootContentClose: i.onRootContentClose,
                ...l
            };
            return n.viewport ? (0, t.jsx)(e_, {
                forceMount: a,
                ...c,
                ref: s
            }) : (0, t.jsx)(Q.Presence, {
                present: a || o,
                children: (0, t.jsx)(eL, {
                    "data-state": eK(o),
                    ...c,
                    ref: s,
                    onPointerEnter: (0, B.composeEventHandlers)(e.onPointerEnter, n.onContentEnter),
                    onPointerLeave: (0, B.composeEventHandlers)(e.onPointerLeave, eq(n.onContentLeave)),
                    style: {
                        pointerEvents: !o && n.isRootMenu ? "none" : void 0,
                        ...c.style
                    }
                })
            })
        });
    eF.displayName = eP;
    var e_ = n.forwardRef((e, t) => {
            let {
                onViewportContentChange: r,
                onViewportContentRemove: a
            } = eh(eP, e.__scopeNavigationMenu);
            return (0, ee.useLayoutEffect)(() => {
                r(e.value, {
                    ref: t,
                    ...e
                })
            }, [e, t, r]), (0, ee.useLayoutEffect)(() => () => a(e.value), [e.value, a]), null
        }),
        eD = "navigationMenu.rootContentDismiss",
        eL = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                value: l,
                triggerRef: i,
                focusProxyRef: s,
                wasEscapeCloseRef: o,
                onRootContentClose: c,
                onContentFocusOutside: d,
                ...u
            } = e, m = eh(eP, a), h = n.useRef(null), f = (0, W.useComposedRefs)(h, r), p = e$(m.baseId, l), x = eW(m.baseId, l), v = en(a), g = n.useRef(null), {
                onItemDismiss: b
            } = m;
            n.useEffect(() => {
                let e = h.current;
                if (m.isRootMenu && e) {
                    let t = () => {
                        b(), c(), e.contains(document.activeElement) && i.current ? .focus()
                    };
                    return e.addEventListener(eD, t), () => e.removeEventListener(eD, t)
                }
            }, [m.isRootMenu, e.value, i, b, c]);
            let y = n.useMemo(() => {
                let e = v().map(e => e.value);
                "rtl" === m.dir && e.reverse();
                let t = e.indexOf(m.value),
                    r = e.indexOf(m.previousValue),
                    a = l === m.value,
                    n = r === e.indexOf(l);
                if (!a && !n) return g.current;
                let i = (() => {
                    if (t !== r) {
                        if (a && -1 !== r) return t > r ? "from-end" : "from-start";
                        if (n && -1 !== t) return t > r ? "to-start" : "to-end"
                    }
                    return null
                })();
                return g.current = i, i
            }, [m.previousValue, m.value, m.dir, v, l]);
            return (0, t.jsx)(eU, {
                asChild: !0,
                children: (0, t.jsx)(J.DismissableLayer, {
                    id: x,
                    "aria-labelledby": p,
                    "data-motion": y,
                    "data-orientation": m.orientation,
                    ...u,
                    ref: f,
                    disableOutsidePointerEvents: !1,
                    onDismiss: () => {
                        let e = new Event(eD, {
                            bubbles: !0,
                            cancelable: !0
                        });
                        h.current ? .dispatchEvent(e)
                    },
                    onFocusOutside: (0, B.composeEventHandlers)(e.onFocusOutside, e => {
                        d();
                        let t = e.target;
                        m.rootNavigationMenu ? .contains(t) && e.preventDefault()
                    }),
                    onPointerDownOutside: (0, B.composeEventHandlers)(e.onPointerDownOutside, e => {
                        let t = e.target,
                            r = v().some(e => e.ref.current ? .contains(t)),
                            a = m.isRootMenu && m.viewport ? .contains(t);
                        (r || a || !m.isRootMenu) && e.preventDefault()
                    }),
                    onKeyDown: (0, B.composeEventHandlers)(e.onKeyDown, e => {
                        let t = e.altKey || e.ctrlKey || e.metaKey;
                        if ("Tab" === e.key && !t) {
                            let t = ez(e.currentTarget),
                                r = document.activeElement,
                                a = t.findIndex(e => e === r);
                            eH(e.shiftKey ? t.slice(0, a).reverse() : t.slice(a + 1, t.length)) ? e.preventDefault() : s.current ? .focus()
                        }
                    }),
                    onEscapeKeyDown: (0, B.composeEventHandlers)(e.onEscapeKeyDown, e => {
                        o.current = !0
                    })
                })
            })
        }),
        eA = "NavigationMenuViewport",
        eO = n.forwardRef((e, r) => {
            let {
                forceMount: a,
                ...l
            } = e, n = !!eh(eA, e.__scopeNavigationMenu).value;
            return (0, t.jsx)(Q.Presence, {
                present: a || n,
                children: (0, t.jsx)(eM, { ...l,
                    ref: r
                })
            })
        });
    eO.displayName = eA;
    var eM = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                children: l,
                ...i
            } = e, s = eh(eA, a), o = (0, W.useComposedRefs)(r, s.onViewportChange), c = ep(eP, e.__scopeNavigationMenu), [d, u] = n.useState(null), [m, h] = n.useState(null), f = d ? d ? .width + "px" : void 0, p = d ? d ? .height + "px" : void 0, x = !!s.value, v = x ? s.value : s.previousValue;
            return eB(m, () => {
                m && u({
                    width: m.offsetWidth,
                    height: m.offsetHeight
                })
            }), (0, t.jsx)(K.Primitive.div, {
                "data-state": eK(x),
                "data-orientation": s.orientation,
                ...i,
                ref: o,
                style: {
                    pointerEvents: !x && s.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": f,
                    "--radix-navigation-menu-viewport-height": p,
                    ...i.style
                },
                onPointerEnter: (0, B.composeEventHandlers)(e.onPointerEnter, s.onContentEnter),
                onPointerLeave: (0, B.composeEventHandlers)(e.onPointerLeave, eq(s.onContentLeave)),
                children: Array.from(c.items).map(([e, {
                    ref: r,
                    forceMount: a,
                    ...l
                }]) => {
                    let n = v === e;
                    return (0, t.jsx)(Q.Presence, {
                        present: a || n,
                        children: (0, t.jsx)(eL, { ...l,
                            ref: (0, W.composeRefs)(r, e => {
                                n && e && h(e)
                            })
                        })
                    }, e)
                })
            })
        }),
        eU = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                ...l
            } = e, n = eh("FocusGroup", a);
            return (0, t.jsx)(es.Provider, {
                scope: a,
                children: (0, t.jsx)(es.Slot, {
                    scope: a,
                    children: (0, t.jsx)(K.Primitive.div, {
                        dir: n.dir,
                        ...l,
                        ref: r
                    })
                })
            })
        }),
        eG = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        eV = n.forwardRef((e, r) => {
            let {
                __scopeNavigationMenu: a,
                ...l
            } = e, n = eo(a), i = eh("FocusGroupItem", a);
            return (0, t.jsx)(es.ItemSlot, {
                scope: a,
                children: (0, t.jsx)(K.Primitive.button, { ...l,
                    ref: r,
                    onKeyDown: (0, B.composeEventHandlers)(e.onKeyDown, e => {
                        if (["Home", "End", ...eG].includes(e.key)) {
                            let t = n().map(e => e.ref.current);
                            if (["rtl" === i.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), eG.includes(e.key)) {
                                let r = t.indexOf(e.currentTarget);
                                t = t.slice(r + 1)
                            }
                            setTimeout(() => eH(t)), e.preventDefault()
                        }
                    })
                })
            })
        });

    function ez(e) {
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

    function eH(e) {
        let t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
    }

    function eB(e, t) {
        let r = (0, et.useCallbackRef)(t);
        (0, ee.useLayoutEffect)(() => {
            let t = 0;
            if (e) {
                let a = new ResizeObserver(() => {
                    cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
                });
                return a.observe(e), () => {
                    window.cancelAnimationFrame(t), a.unobserve(e)
                }
            }
        }, [e, r])
    }

    function eK(e) {
        return e ? "open" : "closed"
    }

    function e$(e, t) {
        return `${e}-trigger-${t}`
    }

    function eW(e, t) {
        return `${e}-content-${t}`
    }

    function eq(e) {
        return t => "mouse" === t.pointerType ? e(t) : void 0
    }
    e.s(["Content", 0, eF, "Item", 0, eN, "Link", 0, eR, "List", 0, ey, "Root", 0, ex, "Trigger", 0, eC, "Viewport", 0, eO], 985370), e.s(["default", 0, e => {
        let l, n, i, o, c, d, u = (0, r.c)(20),
            {
                svgIcon: m,
                theme: h,
                isDisabled: f,
                invert: p,
                toggleSideCart: x,
                cartItemCount: v,
                isHomePage: g
            } = e,
            {
                t: b
            } = (0, a.useTranslation)("header");
        u[0] !== b ? (l = b("cartButton.yourCart"), u[0] = b, u[1] = l) : l = u[1];
        let y = f ? "cart-button-disabled" : "cart-button",
            w = "light" === h || p ? "invert" : "group-hover:invert",
            j = void 0 !== g && g ? "invert" : "group-hover:invert";
        return u[2] !== w || u[3] !== j ? (n = (0, s.default)("h-20 w-20", "transition-all duration-300 ease-in-out", w, j), u[2] = w, u[3] = j, u[4] = n) : n = u[4], u[5] !== m ? (i = {
            __html: m
        }, u[5] = m, u[6] = i) : i = u[6], u[7] !== n || u[8] !== i ? (o = (0, t.jsx)("div", {
            className: n,
            dangerouslySetInnerHTML: i
        }), u[7] = n, u[8] = i, u[9] = o) : o = u[9], u[10] !== v || u[11] !== b ? (c = v > 0 && (0, t.jsxs)("span", {
            "data-testid": "product-quantity",
            className: (0, s.default)("bg-primary absolute -inset-e-8 -top-6 flex items-center justify-center rounded-full text-white", "body-4 h-16 w-16"),
            children: [(0, t.jsx)("span", {
                className: "sr-only",
                children: b("cartButton.productQuantity")
            }), v]
        }), u[10] = v, u[11] = b, u[12] = c) : c = u[12], u[13] !== f || u[14] !== l || u[15] !== y || u[16] !== o || u[17] !== c || u[18] !== x ? (d = (0, t.jsxs)("button", {
            type: "button",
            className: "relative",
            onClick: x,
            "aria-label": l,
            "data-testid": y,
            disabled: f,
            "data-cs-override-id": "cart-access",
            children: [o, c]
        }), u[13] = f, u[14] = l, u[15] = y, u[16] = o, u[17] = c, u[18] = x, u[19] = d) : d = u[19], d
    }], 709823), e.s(["default", 0, e => {
        let a, n, i, o, c, u, f = (0, r.c)(19),
            {
                mobileImage: p,
                desktopImage: x,
                altText: v,
                theme: g,
                invert: b,
                isHomePage: y
            } = e,
            {
                locale: w
            } = h(),
            j = "en" === w ? "https://www.ledger.com" : `https://www.ledger.com/${m.locales[w].ledgerWebsiteLocale}`,
            k = "light" === g || b ? "invert" : "group-hover:invert",
            N = void 0 !== y && y ? "invert" : "group-hover:invert";
        f[0] !== k || f[1] !== N ? (a = (0, s.default)("block transition-all duration-300 ease-in-out lg:hidden", k, N), f[0] = k, f[1] = N, f[2] = a) : a = f[2], f[3] !== v || f[4] !== p || f[5] !== a ? (n = (0, t.jsx)(d.default, {
            src: p,
            alt: v,
            priority: !0,
            fill: !0,
            className: a
        }), f[3] = v, f[4] = p, f[5] = a, f[6] = n) : n = f[6];
        let E = "light" === g || b ? "invert" : "group-hover:invert";
        return f[7] !== E ? (i = (0, s.default)("hidden transition-all duration-300 ease-in-out lg:block", E), f[7] = E, f[8] = i) : i = f[8], f[9] !== v || f[10] !== x || f[11] !== i ? (o = (0, t.jsx)(d.default, {
            src: x,
            alt: v,
            priority: !0,
            fill: !0,
            className: i
        }), f[9] = v, f[10] = x, f[11] = i, f[12] = o) : o = f[12], f[13] !== n || f[14] !== o ? (c = (0, t.jsxs)(t.Fragment, {
            children: [n, o]
        }), f[13] = n, f[14] = o, f[15] = c) : c = f[15], f[16] !== j || f[17] !== c ? (u = (0, t.jsx)(l.default, {
            href: j,
            "data-testid": "home-logo",
            className: "relative flex basis-40 py-16 lg:basis-96 lg:py-0",
            children: c
        }), f[16] = j, f[17] = c, f[18] = u) : u = f[18], u
    }], 371305);
    var eQ = e.i(616066);

    function eY(e) {
        let {
            name: r,
            locale: a
        } = e;
        return (0, t.jsx)(eQ.SelectItem, {
            value: a,
            children: r
        }, a)
    }
    e.s(["default", 0, e => {
        let a, l, n, o, c, d, u, m, f, p, x, v, g, b, y = (0, r.c)(37),
            {
                theme: w,
                invert: j,
                isLanguageSelectOpen: k,
                setIsLanguageSelectOpen: N
            } = e,
            E = void 0 === w ? "light" : w,
            {
                locales: C,
                locale: S,
                setLocale: R
            } = h();
        if (y[0] !== S || y[1] !== C || y[2] !== N || y[3] !== R) {
            let e;
            y[11] !== S ? (e = e => e.locale === S, y[11] = S, y[12] = e) : e = y[12];
            let t = C.find(e);
            l = eQ.Select, c = "light", d = e => {
                e !== t ? .locale && R(e)
            }, u = N, a = eQ.SelectTrigger, n = "body-1 w-64 cursor-pointer justify-end gap-8 border-none ps-0 font-normal", o = t ? .locale.toUpperCase() ? ? "EN", y[0] = S, y[1] = C, y[2] = N, y[3] = R, y[4] = a, y[5] = l, y[6] = n, y[7] = o, y[8] = c, y[9] = d, y[10] = u
        } else a = y[4], l = y[5], n = y[6], o = y[7], c = y[8], d = y[9], u = y[10];
        let I = void 0 !== j && j && "dark" === E && "invert",
            T = "dark" === E ? "text-white" : "text-black group-hover:text-white";
        y[13] !== I || y[14] !== T ? (m = (0, s.default)("transition-all duration-300 ease-in-out", "lg:group-hover:invert", I, T), y[13] = I, y[14] = T, y[15] = m) : m = y[15];
        let P = k ? "chevronUp" : "chevronDown";
        return y[16] !== P ? (f = (0, t.jsx)(i.default, {
            name: P,
            size: 20,
            color: "current",
            strokeWidth: 3.5
        }), y[16] = P, y[17] = f) : f = y[17], y[18] !== m || y[19] !== f ? (p = (0, t.jsx)("span", {
            className: m,
            children: f
        }), y[18] = m, y[19] = f, y[20] = p) : p = y[20], y[21] !== a || y[22] !== p || y[23] !== n || y[24] !== o ? (x = (0, t.jsxs)(a, {
            className: n,
            children: [o, p]
        }), y[21] = a, y[22] = p, y[23] = n, y[24] = o, y[25] = x) : x = y[25], y[26] !== C ? (v = C.map(eY), y[26] = C, y[27] = v) : v = y[27], y[28] !== v ? (g = (0, t.jsx)(eQ.SelectContent, {
            className: "z-[5001]",
            children: v
        }), y[28] = v, y[29] = g) : g = y[29], y[30] !== l || y[31] !== x || y[32] !== g || y[33] !== c || y[34] !== d || y[35] !== u ? (b = (0, t.jsxs)(l, {
            theme: c,
            onValueChange: d,
            onOpenChange: u,
            children: [x, g]
        }), y[30] = l, y[31] = x, y[32] = g, y[33] = c, y[34] = d, y[35] = u, y[36] = b) : b = y[36], b
    }], 982560);
    let eZ = e => {
        let t = document.getElementById(e);
        t && (t.scrollIntoView({
            behavior: "smooth"
        }), history.pushState(null, "", `#${e}`))
    };
    e.s(["smoothScroll", 0, eZ], 365731);
    let eJ = e => {
            let t, a = (0, r.c)(4),
                {
                    setIsMobileTabOpen: l,
                    setSelectedDesktopMenuTab: n
                } = e,
                i = (0, u.useRouter)();
            return a[0] !== i || a[1] !== l || a[2] !== n ? (t = async e => {
                n && n(""), l && l(!1);
                let t = new URL(e, window.location.href),
                    r = t.pathname.replace(/\/$/, "") === i.pathname.replace(/\/$/, "") && t.hash,
                    a = t.hash.substring(1);
                r ? eZ(a) : await i.push(e)
            }, a[0] = i, a[1] = l, a[2] = n, a[3] = t) : t = a[3], t
        },
        eX = e => {
            let a, n, i, o = (0, r.c)(9),
                {
                    content: c,
                    setSelectedDesktopMenuTab: m
                } = e,
                {
                    pathname: h
                } = (0, u.useRouter)();
            return c ? (o[0] !== c.title ? (a = (0, t.jsx)("p", {
                className: "heading-4-semi-bold mb-16 text-neutral-950",
                children: c.title
            }), o[0] = c.title, o[1] = a) : a = o[1], o[2] !== c.sections || o[3] !== h || o[4] !== m ? (n = c.sections.length > 1 && (0, t.jsx)("div", {
                className: "flex flex-row flex-wrap gap-12 divide-none rtl:flex-row-reverse",
                children: c.sections.map((e, r) => {
                    let {
                        url: a,
                        image: n,
                        tag: i,
                        label: o,
                        subtitle: c,
                        imageShadowStyle: u,
                        external: f,
                        extraLabel: p
                    } = e;
                    return a && (0, t.jsxs)(l.default, {
                        href: a,
                        className: (0, s.default)("group/section flex max-w-[166px] flex-col gap-0 py-8"),
                        target: f ? "_blank" : void 0,
                        ...!f && {
                            onClick: () => {
                                a && a.includes(h) && m && m("")
                            }
                        },
                        children: [n && (0, t.jsx)("div", {
                            className: (0, s.default)("flex flex-col items-center", "fixed" === u && "-mb-20"),
                            children: (0, t.jsxs)("div", {
                                className: (0, s.default)("flex flex-col items-center", "fixed" === u && "-mb-20"),
                                children: [(0, t.jsx)("div", {
                                    className: (0, s.default)("relative z-10 h-160 w-160", u && "transform transition-transform duration-200 ease-out will-change-transform group-hover/section:-translate-y-8"),
                                    children: (0, t.jsx)(d.default, {
                                        src: n,
                                        alt: "",
                                        fill: !0,
                                        priority: !0,
                                        sizes: "(max-width: 1024px) 50vw, 33vw",
                                        className: "object-contain"
                                    })
                                }), u && (0, t.jsx)("div", {
                                    className: (0, s.default)("hidden md:block", "fixed" === u && "h-8 w-128 -translate-y-12 bg-linear-to-r from-black via-black to-black opacity-20 blur-sm", "small" === u && "blur-xxs h-4 w-32 translate-x-1.5 -translate-y-4 rounded-[100%] bg-black opacity-50 transition-opacity duration-200 ease-out group-hover/section:opacity-20", "large" === u && "blur-xxs h-4 w-80 -translate-y-8 rounded-[100%] bg-black opacity-50 transition-opacity duration-200 ease-out group-hover/section:opacity-20")
                                })]
                            })
                        }), (0, t.jsxs)("div", {
                            className: (0, s.default)("flex grow flex-col items-center justify-start bg-white text-center", "fixed" === u && "z-10 pt-8"),
                            children: [(0, t.jsxs)("p", {
                                className: "body-1-semi-bold text-neutral-800",
                                children: [o, p && (0, t.jsxs)("span", {
                                    className: "body-3",
                                    children: [" ", p]
                                })]
                            }), c && (0, t.jsx)("p", {
                                className: "body-3 text-neutral-600",
                                children: c
                            }), i && (0, t.jsx)("div", {
                                className: "mt-4",
                                children: (0, t.jsx)(v.default.TagHud, {
                                    label: i,
                                    size: "small",
                                    className: "px-4",
                                    cornerClassName: "px-1 py-1"
                                })
                            })]
                        })]
                    }, r)
                })
            }), o[2] = c.sections, o[3] = h, o[4] = m, o[5] = n) : n = o[5], o[6] !== a || o[7] !== n ? (i = (0, t.jsxs)(t.Fragment, {
                children: [a, n]
            }), o[6] = a, o[7] = n, o[8] = i) : i = o[8], i) : null
        };
    e.s(["DesktopPrimarySection", 0, eX, "MobilePrimarySection", 0, e => {
        let a, n, o, c = (0, r.c)(7),
            {
                content: u,
                setIsMobileTabOpen: m
            } = e;
        c[0] !== m ? (a = {
            setIsMobileTabOpen: m
        }, c[0] = m, c[1] = a) : a = c[1];
        let h = eJ(a);
        return u ? (c[2] !== u.sections || c[3] !== h ? (n = u.sections.length > 1 && (0, t.jsx)("div", {
            className: "flex flex-col gap-0 divide-y divide-neutral-200",
            children: u.sections.map((e, r) => {
                let {
                    url: a,
                    image: n,
                    tag: o,
                    label: c,
                    subtitle: u,
                    imageShadowStyle: m,
                    external: f,
                    extraLabel: p
                } = e;
                return a && (0, t.jsxs)(l.default, {
                    "data-cs-override-id": a,
                    href: a,
                    target: f ? "_blank" : void 0,
                    className: (0, s.default)("flex flex-row gap-16 p-8 rtl:flex-row-reverse"),
                    ...!f && {
                        onClick: e => {
                            e.preventDefault(), h(a)
                        }
                    },
                    children: [n && (0, t.jsx)("div", {
                        className: (0, s.default)("group/section"),
                        children: (0, t.jsx)("div", {
                            className: (0, s.default)("relative z-10 h-80 w-64", m && "will-change-transform"),
                            children: (0, t.jsx)(d.default, {
                                src: n,
                                alt: "",
                                fill: !0,
                                priority: !0,
                                sizes: "(max-width: 768px) 100vw",
                                className: "object-contain"
                            })
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex grow flex-col justify-center gap-4 bg-white rtl:items-end",
                        children: [(0, t.jsxs)("p", {
                            className: "body-1-semi-bold text-neutral-800",
                            children: [c, p && (0, t.jsxs)("span", {
                                className: "body-3",
                                children: [" ", p]
                            })]
                        }), u && (0, t.jsx)("p", {
                            className: "body-3 text-neutral-600",
                            children: u
                        }), o && (0, t.jsx)(v.default.TagHud, {
                            label: o,
                            size: "small",
                            className: "px-4",
                            cornerClassName: "px-1 py-1"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "flex flex-none flex-col justify-center text-neutral-300 rtl:rotate-180",
                        children: (0, t.jsx)(i.default, {
                            name: "chevronRight",
                            size: 24,
                            strokeWidth: 1.5,
                            color: "current"
                        })
                    })]
                }, r)
            })
        }), c[2] = u.sections, c[3] = h, c[4] = n) : n = c[4], c[5] !== n ? (o = (0, t.jsx)(t.Fragment, {
            children: n
        }), c[5] = n, c[6] = o) : o = c[6], o) : null
    }], 467521);
    let e0 = e => {
        let a, n, i, o, c, d, u = (0, r.c)(18),
            {
                content: m,
                setIsMobileTabOpen: h,
                setSelectedDesktopMenuTab: f,
                columnDisplay: p
            } = e;
        u[0] !== h || u[1] !== f ? (a = {
            setIsMobileTabOpen: h,
            setSelectedDesktopMenuTab: f
        }, u[0] = h, u[1] = f, u[2] = a) : a = u[2];
        let x = eJ(a);
        if (!m) return null;
        u[3] !== m.title ? (n = (0, t.jsx)("p", {
            className: "mb-12 text-neutral-950 heading-4-semi-bold md:mb-16",
            children: m.title
        }), u[3] = m.title, u[4] = n) : n = u[4];
        let v = void 0 !== p && p ? "md:grid md:grid-flow-col md:grid-rows-3 rtl:justify-end" : "md:flex md:flex-col";
        if (u[5] !== v ? (i = (0, s.default)("flex flex-col gap-12 md:gap-8 rtl:items-end rtl:text-right rtl:md:gap-x-12", v), u[5] = v, u[6] = i) : i = u[6], u[7] !== m.sections || u[8] !== x) {
            let e;
            u[10] !== x ? (e = (e, r) => {
                let {
                    url: a,
                    label: n,
                    highlighted: i,
                    svgIcon: o,
                    external: c
                } = e;
                return a && (0, t.jsxs)("div", {
                    className: "flex items-center gap-12 rtl:flex-row-reverse",
                    children: [(0, t.jsx)("div", {
                        className: "h-20 w-20 shrink-0",
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }), (0, t.jsx)(l.default, {
                        className: (0, s.default)("transform text-black transition-transform duration-300 ease-out hover:translate-x-2 rtl:text-right", i ? "body-1-semi-bold" : "body-1 font-normal"),
                        href: a,
                        target: c ? "_blank" : void 0,
                        "data-cs-override-id": a,
                        ...!c && {
                            onClick: e => {
                                e.preventDefault(), x(a)
                            }
                        },
                        children: n
                    })]
                }, r)
            }, u[10] = x, u[11] = e) : e = u[11], o = m.sections.map(e), u[7] = m.sections, u[8] = x, u[9] = o
        } else o = u[9];
        return u[12] !== i || u[13] !== o ? (c = (0, t.jsx)("div", {
            className: i,
            children: o
        }), u[12] = i, u[13] = o, u[14] = c) : c = u[14], u[15] !== n || u[16] !== c ? (d = (0, t.jsxs)("div", {
            className: "max-w-md",
            children: [n, c]
        }), u[15] = n, u[16] = c, u[17] = d) : d = u[17], d
    };
    e.s(["default", 0, e0], 827378);
    let e1 = e => {
        let a, n, s, o, c, u, m, h, f = (0, r.c)(17),
            {
                content: p
            } = e;
        if (!p) return null;
        let {
            title: x,
            image: v,
            backgroundImage: g,
            link: b
        } = p, y = b ? .url || "";
        return f[0] !== g ? (a = g && (0, t.jsx)(d.default, {
            src: g.url,
            alt: "",
            fill: !0,
            className: "inset-0 z-0 object-cover"
        }), f[0] = g, f[1] = a) : a = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("div", {
            className: "absolute inset-0 z-10 bg-black/0 lg:transition-colors lg:duration-300 lg:group-hover/dynamic:bg-black/40"
        }), f[2] = n) : n = f[2], f[3] !== x ? (s = x && (0, t.jsx)("p", {
            className: "line-clamp-2",
            children: x
        }), f[3] = x, f[4] = s) : s = f[4], f[5] !== s ? (o = (0, t.jsx)("div", {
            className: "body-2 lg:body-1-semi-bold relative z-20 max-w-160 py-16 pl-24 text-white lg:max-w-256 xl:max-w-160 2xl:max-w-256 rtl:pr-24",
            children: s
        }), f[5] = s, f[6] = o) : o = f[6], f[7] !== v ? (c = v && (0, t.jsx)(d.default, {
            src: v.url,
            alt: v.title || "",
            height: 139,
            width: 112,
            className: "absolute right-32 bottom-0 z-20 h-64 w-96 xl:h-80 xl:w-112 2xl:h-[112px] 2xl:w-[139px] rtl:right-auto rtl:left-32"
        }), f[7] = v, f[8] = c) : c = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("div", {
            className: "absolute top-0 right-16 bottom-0 z-20 flex items-center text-white lg:transition-all lg:duration-300 lg:group-hover/dynamic:right-12 rtl:right-auto rtl:left-16 rtl:rotate-180",
            children: (0, t.jsx)(i.default, {
                name: "chevronRight",
                size: 24,
                strokeWidth: 1.5,
                color: "current"
            })
        }), f[9] = u) : u = f[9], f[10] !== a || f[11] !== o || f[12] !== c ? (m = (0, t.jsxs)("div", {
            className: "group/dynamic relative flex h-auto min-h-80 max-w-md cursor-pointer items-center rtl:flex-row-reverse",
            children: [a, n, o, c, u]
        }), f[10] = a, f[11] = o, f[12] = c, f[13] = m) : m = f[13], f[14] !== m || f[15] !== y ? (h = (0, t.jsx)(l.default, {
            href: y,
            "data-cs-override-id": y,
            children: m
        }), f[14] = m, f[15] = y, f[16] = h) : h = f[16], h
    };
    e.s(["default", 0, e1], 366072);
    var e2 = e.i(865823);
    e.s(["default", 0, e => {
        let a, l = (0, r.c)(6),
            {
                entry: n,
                setSelectedDesktopMenuTab: i
            } = e;
        if (!n) return null;
        let {
            url: o,
            sectionTitle: c,
            content: d,
            external: u
        } = n;
        return l[0] !== d || l[1] !== u || l[2] !== c || l[3] !== i || l[4] !== o ? (a = o ? (0, t.jsx)(eR, {
            className: "body-3 group-hover/li:tab-halo-bottom-primary flex h-full w-full items-center px-24 py-12 select-none",
            href: o,
            target: u ? "_blank" : void 0,
            "data-cs-override-id": c,
            children: c
        }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(eC, {
                className: "body-3 data-[state=open]:tab-halo-bottom-primary flex h-full w-full items-center px-24 py-12 select-none",
                "data-cs-override-id": c,
                children: c
            }), d && (0, t.jsx)(eF, {
                className: "relative box-border max-h-[500px] min-h-256 w-full max-w-none min-w-full bg-white",
                children: (0, t.jsx)(e2.RemoveScroll, {
                    className: "box-border h-(--radix-navigation-menu-viewport-height) w-full min-w-full overflow-y-scroll",
                    removeScrollBar: !0,
                    children: (0, t.jsxs)("div", {
                        className: (0, s.default)("mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col gap-16 px-40 py-24 md:px-56 xl:flex-row xl:gap-24 xl:px-96 xl:py-32 rtl:flex-row-reverse rtl:text-right", (d.secondarySection || d.dynamicSection) && "divide-y-2 divide-neutral-200 xl:divide-x-2 xl:divide-y-0 xl:rtl:divide-x-reverse"),
                        children: [(0, t.jsx)("div", {
                            className: "w-full min-w-0 xl:flex-[2]",
                            children: (0, t.jsx)(eX, {
                                content: d.primarySectionDesktop,
                                setSelectedDesktopMenuTab: i
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col justify-between gap-24 pt-20 xl:flex-1 xl:ps-16 xl:pe-16 xl:pt-0",
                            children: [(0, t.jsx)(e0, {
                                content: d.secondarySection,
                                columnDisplay: !!d.dynamicSection,
                                setSelectedDesktopMenuTab: i
                            }), (0, t.jsx)(e1, {
                                content: d.dynamicSection
                            })]
                        })]
                    })
                })
            })]
        }), l[0] = d, l[1] = u, l[2] = c, l[3] = i, l[4] = o, l[5] = a) : a = l[5], a
    }], 933900)
}, 491900, e => {
    "use strict";
    var t = e.i(191788);
    e.s(["useMotionValueEvent", 0, function(e, r, a) {
        (0, t.useInsertionEffect)(() => e.on(r, a), [e, r, a])
    }])
}, 726849, 189029, 719363, 394228, 396415, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(191788),
        l = e.i(198311),
        n = e.i(495854),
        i = e.i(601216),
        s = e.i(985370),
        o = e.i(709823),
        c = e.i(371305),
        d = e.i(982560),
        u = e.i(933900),
        m = e.i(793087),
        h = e.i(491900);
    let f = e => {
        let t, l, n, i, s = (0, r.c)(10),
            o = void 0 !== e && e,
            {
                scrollYProgress: c,
                scrollY: d
            } = (0, m.useScroll)(),
            [u, f] = (0, a.useState)(!0),
            [p, x] = (0, a.useState)(!1),
            [v, g] = (0, a.useState)(0);
        s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = performance.now(), s[0] = t) : t = s[0];
        let b = (0, a.useRef)(t);
        return s[1] !== d ? (l = e => {
            let t = d.getPrevious() ? ? 0,
                r = performance.now();
            g(Math.abs((e - t) / (r - b.current))), b.current = r
        }, s[1] = d, s[2] = l) : l = s[2], (0, h.useMotionValueEvent)(d, "change", l), s[3] !== o || s[4] !== c ? (n = e => {
            if ("number" == typeof e) {
                let t = c.getPrevious() ? ? 0;
                .01 > c.get() || e - t < 0 && !o ? f(!0) : (f(!1), x(!0)), .05 > c.get() && x(!1)
            }
        }, s[3] = o, s[4] = c, s[5] = n) : n = s[5], (0, h.useMotionValueEvent)(c, "change", n), s[6] !== p || s[7] !== v || s[8] !== u ? (i = {
            visible: u,
            navOnScroll: p,
            scrollSpeed: v
        }, s[6] = p, s[7] = v, s[8] = u, s[9] = i) : i = s[9], i
    };
    e.s(["default", 0, e => {
        let m, h, p, x, v, g, b, y, w, j, k, N, E, C, S, R, I, T, P, F = (0, r.c)(57),
            {
                data: _,
                hideNavOnScroll: D,
                theme: L
            } = e,
            {
                toggleSideCart: A,
                cartItemCount: O
            } = (0, i.default)(),
            [M, U] = (0, a.useState)(""),
            [G, V] = (0, a.useState)(!1),
            {
                visible: z,
                navOnScroll: H,
                scrollSpeed: B
            } = f(D),
            K = H || G,
            $ = !z && "pointer-events-none";
        F[0] !== $ ? (m = (0, n.default)("pointer group z-navigation sticky top-0 hidden w-full lg:block", $), F[0] = $, F[1] = m) : m = F[1], F[2] === Symbol.for("react.memo_cache_sentinel") ? (h = {
            opacity: 1,
            y: 0
        }, F[2] = h) : h = F[2];
        let W = z ? 0 : -200,
            q = B > 1 ? 0 : .2;
        F[3] !== q ? (p = {
            duration: q
        }, F[3] = q, F[4] = p) : p = F[4], F[5] !== W || F[6] !== p ? (x = {
            y: W,
            transition: p
        }, F[5] = W, F[6] = p, F[7] = x) : x = F[7];
        let Q = K ? "bg-white text-black" : "light" === L ? "bg-gradient-navigation-light text-black" : "bg-gradient-navigation-dark text-white";
        if (F[8] !== Q ? (v = (0, n.default)("relative flex w-full justify-between gap-16 px-40 xl:px-96 rtl:flex-row-reverse", "text-white backdrop-blur-2xl transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-black", Q), F[8] = Q, F[9] = v) : v = F[9], F[10] !== _.logo || F[11] !== K || F[12] !== L ? (g = (0, t.jsx)(c.default, { ..._.logo,
                theme: L,
                invert: K
            }), F[10] = _.logo, F[11] = K, F[12] = L, F[13] = g) : g = F[13], F[14] !== _.sections) {
            let e;
            F[16] === Symbol.for("react.memo_cache_sentinel") ? (e = e => (0, t.jsx)(s.Item, {
                value: e.sectionId,
                className: "group/li",
                children: (0, t.jsx)(u.default, {
                    entry: e,
                    setSelectedDesktopMenuTab: U
                })
            }, `menu-${e.sectionId}`), F[16] = e) : e = F[16], b = _.sections.map(e), F[14] = _.sections, F[15] = b
        } else b = F[15];
        F[17] !== b ? (y = (0, t.jsx)(s.List, {
            className: "flex h-(--navigation-height-desktop) items-stretch justify-center rtl:flex-row-reverse",
            children: b
        }), F[17] = b, F[18] = y) : y = F[18], F[19] !== G || F[20] !== K || F[21] !== L ? (w = (0, t.jsx)(d.default, {
            theme: L,
            invert: K,
            isLanguageSelectOpen: G,
            setIsLanguageSelectOpen: V
        }), F[19] = G, F[20] = K, F[21] = L, F[22] = w) : w = F[22], F[23] !== O || F[24] !== _.cartIcon || F[25] !== K || F[26] !== L || F[27] !== A ? (j = (0, t.jsx)(o.default, {
            svgIcon: _.cartIcon,
            theme: L,
            invert: K,
            toggleSideCart: A,
            cartItemCount: O
        }), F[23] = O, F[24] = _.cartIcon, F[25] = K, F[26] = L, F[27] = A, F[28] = j) : j = F[28], F[29] !== w || F[30] !== j ? (k = (0, t.jsxs)("div", {
            className: "flex items-center justify-center gap-12 rtl:flex-row-reverse rtl:gap-24",
            children: [w, j]
        }), F[29] = w, F[30] = j, F[31] = k) : k = F[31];
        let Y = K || "light" === L ? "bg-navigation-divider-light" : "bg-navigation-divider-dark";
        F[32] !== Y ? (N = (0, n.default)("group-hover:bg-navigation-divider-light absolute right-0 bottom-0 left-0 block h-2", Y), F[32] = Y, F[33] = N) : N = F[33], F[34] !== N ? (E = (0, t.jsx)("div", {
            className: N
        }), F[34] = N, F[35] = E) : E = F[35], F[36] !== g || F[37] !== y || F[38] !== k || F[39] !== E || F[40] !== x || F[41] !== v ? (C = (0, t.jsxs)(l.motion.div, {
            initial: h,
            animate: x,
            className: v,
            children: [g, y, k, E]
        }), F[36] = g, F[37] = y, F[38] = k, F[39] = E, F[40] = x, F[41] = v, F[42] = C) : C = F[42];
        let Z = !z;
        return F[43] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, n.default)("relative h-(--radix-navigation-menu-viewport-height) w-full max-w-none min-w-full origin-[top_center] overflow-hidden bg-white", "data-[state=closed]:animate-exitFromBottom data-[state=open]:animate-enterFromTop"), F[43] = S) : S = F[43], F[44] !== Z ? (R = (0, t.jsx)("div", {
            className: "absolute top-full right-0 left-0 -z-10 w-full",
            children: (0, t.jsx)(s.Viewport, {
                hidden: Z,
                className: S
            })
        }), F[44] = Z, F[45] = R) : R = F[45], F[46] !== M || F[47] !== C || F[48] !== m || F[49] !== R ? (I = (0, t.jsxs)(s.Root, {
            delayDuration: 50,
            skipDelayDuration: 0,
            onValueChange: U,
            className: m,
            value: M,
            children: [C, R]
        }), F[46] = M, F[47] = C, F[48] = m, F[49] = R, F[50] = I) : I = F[50], F[51] !== M || F[52] !== z ? (T = M && z && (0, t.jsx)("div", {
            className: "fixed top-(--radix-navigation-menu-viewport-height) left-0 z-50 h-screen w-screen overflow-hidden bg-black/20"
        }), F[51] = M, F[52] = z, F[53] = T) : T = F[53], F[54] !== I || F[55] !== T ? (P = (0, t.jsxs)(t.Fragment, {
            children: [I, T]
        }), F[54] = I, F[55] = T, F[56] = P) : P = F[56], P
    }], 726849);
    let p = e => {
        let a, l, i, s, o, c, d, u = (0, r.c)(17),
            {
                theme: m,
                toggleMenu: h,
                navOnScroll: f,
                isHomePage: p,
                isMenuOpen: x
            } = e,
            v = !("light" === m || f || p) && "group-hover:invert";
        u[0] !== v ? (a = (0, n.default)(v), u[0] = v, u[1] = a) : a = u[1];
        let g = x && "rotate-45";
        u[2] !== g ? (l = (0, n.default)(g), u[2] = g, u[3] = l) : l = u[3];
        let b = x ? "-24.5px" : "0";
        u[4] !== b ? (i = (0, t.jsx)("path", {
            className: "stroke-linecap-round fill-none stroke-current stroke-1 transition-all duration-500",
            style: {
                strokeDasharray: "10 34.75",
                strokeDashoffset: b
            },
            d: "m 7.5,8.25 h 10 c 0,0 2.261109,-0.163647 2.261109,-2.127226 0,-1.963579 -2.006087,-2.989501 -3.724937,-2.714785 -1.71885,0.274716 -3.409265,1.042904 -3.409265,4.092011 v 10"
        }), u[4] = b, u[5] = i) : i = u[5], u[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("path", {
            className: "stroke-linecap-round fill-none stroke-current stroke-1 transition-all duration-500",
            d: "m 7.5,12.5 h 10"
        }), u[6] = s) : s = u[6];
        let y = x ? "-34.5px" : "0";
        return u[7] !== y ? (o = (0, t.jsx)("path", {
            className: "stroke-linecap-round fill-none stroke-current stroke-1 transition-all duration-500",
            style: {
                strokeDasharray: "10 45",
                strokeDashoffset: y
            },
            d: "m 7.5,16.75 h 10 c 3.199069,0 3.839472,-2.929446 3.839472,-6.712884 0,-3.783438 -1.196646,-6.818529 -4.166879,-6.818529 -2.970233,0 -4.439812,1.748607 -4.423821,4.281414 l 0.060634,10"
        }), u[7] = y, u[8] = o) : o = u[8], u[9] !== l || u[10] !== i || u[11] !== o ? (c = (0, t.jsxs)("svg", {
            className: l,
            viewBox: "0 0 24 24",
            width: "36",
            height: "36",
            children: [i, s, o]
        }), u[9] = l, u[10] = i, u[11] = o, u[12] = c) : c = u[12], u[13] !== c || u[14] !== a || u[15] !== h ? (d = (0, t.jsx)("button", {
            onClick: h,
            "aria-label": "Cart-toggle-button",
            className: a,
            children: c
        }), u[13] = c, u[14] = a, u[15] = h, u[16] = d) : d = u[16], d
    };
    var x = e.i(671185),
        v = e.i(479293),
        g = e.i(352162),
        b = e.i(357006),
        y = e.i(64592),
        w = e.i(674534),
        j = e.i(998657),
        k = e.i(55037),
        N = e.i(724537),
        E = "rovingFocusGroup.onEntryFocus",
        C = {
            bubbles: !1,
            cancelable: !0
        },
        S = "RovingFocusGroup",
        [R, I, T] = (0, g.createCollection)(S),
        [P, F] = (0, v.createContextScope)(S, [T]),
        [_, D] = P(S),
        L = a.forwardRef((e, r) => (0, t.jsx)(R.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, t.jsx)(R.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0, t.jsx)(A, { ...e,
                    ref: r
                })
            })
        }));
    L.displayName = S;
    var A = a.forwardRef((e, r) => {
            let {
                __scopeRovingFocusGroup: l,
                orientation: n,
                loop: i = !1,
                dir: s,
                currentTabStopId: o,
                defaultCurrentTabStopId: c,
                onCurrentTabStopIdChange: d,
                onEntryFocus: u,
                preventScrollOnEntryFocus: m = !1,
                ...h
            } = e, f = a.useRef(null), p = (0, b.useComposedRefs)(r, f), v = (0, N.useDirection)(s), [g, y] = (0, k.useControllableState)({
                prop: o,
                defaultProp: c ? ? null,
                onChange: d,
                caller: S
            }), [R, T] = a.useState(!1), P = (0, j.useCallbackRef)(u), F = I(l), D = a.useRef(!1), [L, A] = a.useState(0);
            return a.useEffect(() => {
                let e = f.current;
                if (e) return e.addEventListener(E, P), () => e.removeEventListener(E, P)
            }, [P]), (0, t.jsx)(_, {
                scope: l,
                orientation: n,
                dir: v,
                loop: i,
                currentTabStopId: g,
                onItemFocus: a.useCallback(e => y(e), [y]),
                onItemShiftTab: a.useCallback(() => T(!0), []),
                onFocusableItemAdd: a.useCallback(() => A(e => e + 1), []),
                onFocusableItemRemove: a.useCallback(() => A(e => e - 1), []),
                children: (0, t.jsx)(w.Primitive.div, {
                    tabIndex: R || 0 === L ? -1 : 0,
                    "data-orientation": n,
                    ...h,
                    ref: p,
                    style: {
                        outline: "none",
                        ...e.style
                    },
                    onMouseDown: (0, x.composeEventHandlers)(e.onMouseDown, () => {
                        D.current = !0
                    }),
                    onFocus: (0, x.composeEventHandlers)(e.onFocus, e => {
                        let t = !D.current;
                        if (e.target === e.currentTarget && t && !R) {
                            let t = new CustomEvent(E, C);
                            if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                let e = F().filter(e => e.focusable);
                                G([e.find(e => e.active), e.find(e => e.id === g), ...e].filter(Boolean).map(e => e.ref.current), m)
                            }
                        }
                        D.current = !1
                    }),
                    onBlur: (0, x.composeEventHandlers)(e.onBlur, () => T(!1))
                })
            })
        }),
        O = "RovingFocusGroupItem",
        M = a.forwardRef((e, r) => {
            let {
                __scopeRovingFocusGroup: l,
                focusable: n = !0,
                active: i = !1,
                tabStopId: s,
                children: o,
                ...c
            } = e, d = (0, y.useId)(), u = s || d, m = D(O, l), h = m.currentTabStopId === u, f = I(l), {
                onFocusableItemAdd: p,
                onFocusableItemRemove: v,
                currentTabStopId: g
            } = m;
            return a.useEffect(() => {
                if (n) return p(), () => v()
            }, [n, p, v]), (0, t.jsx)(R.ItemSlot, {
                scope: l,
                id: u,
                focusable: n,
                active: i,
                children: (0, t.jsx)(w.Primitive.span, {
                    tabIndex: h ? 0 : -1,
                    "data-orientation": m.orientation,
                    ...c,
                    ref: r,
                    onMouseDown: (0, x.composeEventHandlers)(e.onMouseDown, e => {
                        n ? m.onItemFocus(u) : e.preventDefault()
                    }),
                    onFocus: (0, x.composeEventHandlers)(e.onFocus, () => m.onItemFocus(u)),
                    onKeyDown: (0, x.composeEventHandlers)(e.onKeyDown, e => {
                        if ("Tab" === e.key && e.shiftKey) return void m.onItemShiftTab();
                        if (e.target !== e.currentTarget) return;
                        let t = function(e, t, r) {
                            var a;
                            let l = (a = e.key, "rtl" !== r ? a : "ArrowLeft" === a ? "ArrowRight" : "ArrowRight" === a ? "ArrowLeft" : a);
                            if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(l)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(l))) return U[l]
                        }(e, m.orientation, m.dir);
                        if (void 0 !== t) {
                            if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                            e.preventDefault();
                            let l = f().filter(e => e.focusable).map(e => e.ref.current);
                            if ("last" === t) l.reverse();
                            else if ("prev" === t || "next" === t) {
                                var r, a;
                                "prev" === t && l.reverse();
                                let n = l.indexOf(e.currentTarget);
                                l = m.loop ? (r = l, a = n + 1, r.map((e, t) => r[(a + t) % r.length])) : l.slice(n + 1)
                            }
                            setTimeout(() => G(l))
                        }
                    }),
                    children: "function" == typeof o ? o({
                        isCurrentTabStop: h,
                        hasTabStop: null != g
                    }) : o
                })
            })
        });
    M.displayName = O;
    var U = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };

    function G(e, t = !1) {
        let r = document.activeElement;
        for (let a of e)
            if (a === r || (a.focus({
                    preventScroll: t
                }), document.activeElement !== r)) return
    }
    var V = e.i(993953),
        z = "Tabs",
        [H, B] = (0, v.createContextScope)(z, [F]),
        K = F(),
        [$, W] = H(z),
        q = a.forwardRef((e, r) => {
            let {
                __scopeTabs: a,
                value: l,
                onValueChange: n,
                defaultValue: i,
                orientation: s = "horizontal",
                dir: o,
                activationMode: c = "automatic",
                ...d
            } = e, u = (0, N.useDirection)(o), [m, h] = (0, k.useControllableState)({
                prop: l,
                onChange: n,
                defaultProp: i ? ? "",
                caller: z
            });
            return (0, t.jsx)($, {
                scope: a,
                baseId: (0, y.useId)(),
                value: m,
                onValueChange: h,
                orientation: s,
                dir: u,
                activationMode: c,
                children: (0, t.jsx)(w.Primitive.div, {
                    dir: u,
                    "data-orientation": s,
                    ...d,
                    ref: r
                })
            })
        });
    q.displayName = z;
    var Q = "TabsList",
        Y = a.forwardRef((e, r) => {
            let {
                __scopeTabs: a,
                loop: l = !0,
                ...n
            } = e, i = W(Q, a), s = K(a);
            return (0, t.jsx)(L, {
                asChild: !0,
                ...s,
                orientation: i.orientation,
                dir: i.dir,
                loop: l,
                children: (0, t.jsx)(w.Primitive.div, {
                    role: "tablist",
                    "aria-orientation": i.orientation,
                    ...n,
                    ref: r
                })
            })
        });
    Y.displayName = Q;
    var Z = "TabsTrigger",
        J = a.forwardRef((e, r) => {
            let {
                __scopeTabs: a,
                value: l,
                disabled: n = !1,
                ...i
            } = e, s = W(Z, a), o = K(a), c = et(s.baseId, l), d = er(s.baseId, l), u = l === s.value;
            return (0, t.jsx)(M, {
                asChild: !0,
                ...o,
                focusable: !n,
                active: u,
                children: (0, t.jsx)(w.Primitive.button, {
                    type: "button",
                    role: "tab",
                    "aria-selected": u,
                    "aria-controls": d,
                    "data-state": u ? "active" : "inactive",
                    "data-disabled": n ? "" : void 0,
                    disabled: n,
                    id: c,
                    ...i,
                    ref: r,
                    onMouseDown: (0, x.composeEventHandlers)(e.onMouseDown, e => {
                        n || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : s.onValueChange(l)
                    }),
                    onKeyDown: (0, x.composeEventHandlers)(e.onKeyDown, e => {
                        [" ", "Enter"].includes(e.key) && s.onValueChange(l)
                    }),
                    onFocus: (0, x.composeEventHandlers)(e.onFocus, () => {
                        let e = "manual" !== s.activationMode;
                        u || n || !e || s.onValueChange(l)
                    })
                })
            })
        });
    J.displayName = Z;
    var X = "TabsContent",
        ee = a.forwardRef((e, r) => {
            let {
                __scopeTabs: l,
                value: n,
                forceMount: i,
                children: s,
                ...o
            } = e, c = W(X, l), d = et(c.baseId, n), u = er(c.baseId, n), m = n === c.value, h = a.useRef(m);
            return a.useEffect(() => {
                let e = requestAnimationFrame(() => h.current = !1);
                return () => cancelAnimationFrame(e)
            }, []), (0, t.jsx)(V.Presence, {
                present: i || m,
                children: ({
                    present: a
                }) => (0, t.jsx)(w.Primitive.div, {
                    "data-state": m ? "active" : "inactive",
                    "data-orientation": c.orientation,
                    role: "tabpanel",
                    "aria-labelledby": d,
                    hidden: !a,
                    id: u,
                    tabIndex: 0,
                    ...o,
                    ref: r,
                    style: { ...e.style,
                        animationDuration: h.current ? "0s" : void 0
                    },
                    children: a && s
                })
            })
        });

    function et(e, t) {
        return `${e}-trigger-${t}`
    }

    function er(e, t) {
        return `${e}-content-${t}`
    }
    ee.displayName = X, e.s(["Content", 0, ee, "List", 0, Y, "Root", 0, q, "Tabs", 0, q, "TabsContent", 0, ee, "TabsList", 0, Y, "TabsTrigger", 0, J, "Trigger", 0, J, "createTabsScope", 0, B], 942529);
    var ea = e.i(942529),
        el = e.i(467521),
        en = e.i(827378),
        ei = e.i(366072),
        es = e.i(41158),
        eo = e.i(865823);
    e.i(108399);
    var ec = e.i(860231),
        ed = e.i(761226);
    let eu = () => {
        let e, l, n, i, s, o, c, d, u = (0, r.c)(22),
            [m, h] = (0, a.useState)(!1),
            {
                locales: f,
                locale: p,
                setLocale: x
            } = (0, ed.default)();
        if (u[0] !== p || u[1] !== f) {
            let t;
            u[3] !== p ? (t = e => e.locale === p, u[3] = p, u[4] = t) : t = u[4], e = f.find(t), u[0] = p, u[1] = f, u[2] = e
        } else e = u[2];
        let v = e;
        u[5] !== v ? .locale || u[6] !== x ? (l = e => {
            e !== v ? .locale && (x(e), h(!1))
        }, u[5] = v ? .locale, u[6] = x, u[7] = l) : l = u[7];
        let g = l,
            b = v ? .locale;
        u[8] !== g ? (n = e => g(e.target.value), u[8] = g, u[9] = n) : n = u[9], u[10] === Symbol.for("react.memo_cache_sentinel") ? (i = () => h(!0), u[10] = i) : i = u[10], u[11] !== f ? (s = f.map(em), u[11] = f, u[12] = s) : s = u[12], u[13] !== b || u[14] !== n || u[15] !== s ? (o = (0, t.jsx)("select", {
            value: b,
            onChange: n,
            className: "w-full appearance-none border-none bg-inherit text-black outline-none body-1 font-normal",
            onClick: i,
            children: s
        }), u[13] = b, u[14] = n, u[15] = s, u[16] = o) : o = u[16];
        let y = m ? "chevronUp" : "chevronDown";
        return u[17] !== y ? (c = (0, t.jsx)("span", {
            className: "pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-neutral-400",
            children: (0, t.jsx)(ec.default, {
                name: y,
                size: 20,
                color: "current",
                strokeWidth: 3.5
            })
        }), u[17] = y, u[18] = c) : c = u[18], u[19] !== o || u[20] !== c ? (d = (0, t.jsxs)("div", {
            className: "relative w-full",
            children: [o, c]
        }), u[19] = o, u[20] = c, u[21] = d) : d = u[21], d
    };

    function em(e) {
        let {
            name: r,
            locale: a
        } = e;
        return (0, t.jsx)("option", {
            value: a,
            children: r
        }, a)
    }
    let eh = e => {
        let l, i, s, o, c = (0, r.c)(21),
            {
                entry: d,
                isMenuOpen: u,
                navOnScroll: m,
                bannerVisible: h,
                setIsMenuOpen: f
            } = e,
            {
                sections: p
            } = d,
            x = (0, a.useRef)([]);
        if (!d) return null;
        let v = eo.RemoveScroll,
            g = p[0].sectionId,
            b = p.map((e, r) => {
                let {
                    sectionId: a,
                    sectionTitle: l,
                    url: i,
                    external: s
                } = e;
                return (0, t.jsx)("div", {
                    className: "flex-1",
                    ref: e => {
                        x.current[r] = e
                    },
                    onClick: () => {
                        x.current[r] && x.current[r].scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "center"
                        })
                    },
                    children: (0, t.jsx)(ea.Trigger, {
                        value: a,
                        className: (0, n.default)("group flex w-full select-none items-center justify-center border-b border-neutral-200 px-16 py-24 body-3 data-[state=active]:border-b-transparent", "whitespace-nowrap data-[state=active]:tab-halo-bottom-primary"),
                        "data-cs-override-id": l,
                        asChild: !!i,
                        children: i ? (0, t.jsx)(es.default, {
                            className: "flex w-full justify-center whitespace-nowrap",
                            href: i,
                            target: s ? "_blank" : void 0,
                            "data-cs-override-id": l,
                            children: l
                        }) : l
                    })
                }, `menu-${a}`)
            });
        if (c[0] !== ea.List || c[1] !== b ? (l = (0, t.jsx)(ea.List, {
                className: "no-scrollbar flex flex-nowrap items-center divide-x divide-neutral-200 overflow-x-auto border-x border-t border-neutral-200 bg-white text-black rtl:flex-row-reverse",
                children: b
            }), c[0] = ea.List, c[1] = b, c[2] = l) : l = c[2], c[3] !== h || c[4] !== m || c[5] !== p || c[6] !== f) {
            let e;
            c[8] !== h || c[9] !== m || c[10] !== f ? (e = e => {
                let {
                    content: r,
                    sectionId: a
                } = e;
                return r && (0, t.jsxs)(ea.Content, {
                    value: a,
                    forceMount: !0,
                    className: (0, n.default)("scroll overflow-y-scroll bg-white data-[state=inactive]:hidden", "h-[calc(100dvh-(var(--navigation-height-mobile)+var(--banner-height-mobile)+var(--navigation-tabs-height-mobile)))]", (m || !h) && "h-[calc(100dvh-(var(--navigation-height-mobile)+var(--navigation-tabs-height-mobile)))]"),
                    children: [(0, t.jsx)("div", {
                        className: "w-full p-16 md:hidden md:p-32 rtl:text-right",
                        children: (0, t.jsx)(el.MobilePrimarySection, {
                            content: r.primarySectionMobile,
                            setIsMobileTabOpen: f
                        })
                    }), (0, t.jsx)("div", {
                        className: "hidden p-16 md:block md:p-32 rtl:text-right",
                        children: (0, t.jsx)(el.DesktopPrimarySection, {
                            content: r.primarySectionDesktop
                        })
                    }), r.secondarySection || r.dynamicSection ? (0, t.jsxs)("div", {
                        className: "flex flex-col gap-16 divide-y divide-neutral-200 bg-neutral-100 p-24 md:p-32",
                        children: [(0, t.jsxs)("div", {
                            className: "flex w-full flex-col gap-16 rtl:items-end rtl:text-right",
                            children: [(0, t.jsx)(en.default, {
                                content: r.secondarySection,
                                setIsMobileTabOpen: f
                            }), (0, t.jsx)(ei.default, {
                                content: r.dynamicSection
                            })]
                        }), (0, t.jsx)("div", {
                            className: "pt-16 lg:hidden",
                            children: (0, t.jsx)(eu, {})
                        })]
                    }) : (0, t.jsx)("div", {
                        className: "mx-16 border-t border-neutral-200 pt-16 lg:hidden",
                        children: (0, t.jsx)(eu, {})
                    })]
                }, `menu-${a}`)
            }, c[8] = h, c[9] = m, c[10] = f, c[11] = e) : e = c[11], i = p.map(e), c[3] = h, c[4] = m, c[5] = p, c[6] = f, c[7] = i
        } else i = c[7];
        return c[12] !== p[0].sectionId || c[13] !== i || c[14] !== ea.Root || c[15] !== l ? (s = (0, t.jsxs)(ea.Root, {
            defaultValue: g,
            className: "flex flex-col",
            children: [l, i]
        }), c[12] = p[0].sectionId, c[13] = i, c[14] = ea.Root, c[15] = l, c[16] = s) : s = c[16], c[17] !== v || c[18] !== u || c[19] !== s ? (o = (0, t.jsx)(v, {
            forwardProps: !0,
            enabled: u,
            children: s
        }), c[17] = v, c[18] = u, c[19] = s, c[20] = o) : o = c[20], o
    };

    function ef(e) {
        return !e
    }
    e.s(["default", 0, e => {
        let s, d, u, m, h, x, v, g, b, y, w, j, k, N, E, C, S, R = (0, r.c)(56),
            {
                data: I,
                theme: T,
                isHomePage: P,
                bannerVisible: F
            } = e,
            {
                toggleSideCart: _,
                cartItemCount: D
            } = (0, i.default)(),
            [L, A] = (0, a.useState)(!1),
            {
                visible: O,
                navOnScroll: M
            } = f();
        R[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
            A(ef)
        }, R[0] = s) : s = R[0];
        let U = s;
        R[1] !== _ ? (d = () => {
            _(), A(!1)
        }, R[1] = _, R[2] = d) : d = R[2];
        let G = d,
            V = I.sections[0].sectionId;
        R[3] === Symbol.for("react.memo_cache_sentinel") ? (u = {
            opacity: 1,
            y: 0
        }, R[3] = u) : u = R[3];
        let z = O ? 0 : -150;
        R[4] !== z ? (m = {
            y: z
        }, R[4] = z, R[5] = m) : m = R[5], R[6] === Symbol.for("react.memo_cache_sentinel") ? (h = {
            duration: .2
        }, R[6] = h) : h = R[6];
        let H = M ? "bg-white text-black" : "light" === T || P ? "bg-gradient-navigation-light text-black" : "bg-gradient-navigation-dark text-white";
        R[7] !== H ? (x = (0, n.default)("relative flex flex-col justify-between backdrop-blur-2xl", "transition-all duration-300 ease-in-out group-hover:bg-white", H), R[7] = H, R[8] = x) : x = R[8], R[9] !== I.logo || R[10] !== P || R[11] !== M || R[12] !== T ? (v = (0, t.jsx)(c.default, { ...I.logo,
            theme: T,
            invert: M,
            isHomePage: P
        }), R[9] = I.logo, R[10] = P, R[11] = M, R[12] = T, R[13] = v) : v = R[13], R[14] !== D || R[15] !== I.cartIcon || R[16] !== P || R[17] !== M || R[18] !== G || R[19] !== T ? (g = (0, t.jsx)(o.default, {
            svgIcon: I.cartIcon,
            theme: T,
            invert: M,
            toggleSideCart: G,
            cartItemCount: D,
            isHomePage: P
        }), R[14] = D, R[15] = I.cartIcon, R[16] = P, R[17] = M, R[18] = G, R[19] = T, R[20] = g) : g = R[20], R[21] !== P || R[22] !== L || R[23] !== M || R[24] !== T ? (b = (0, t.jsx)(p, {
            navOnScroll: M,
            toggleMenu: U,
            theme: T,
            isHomePage: P,
            isMenuOpen: L
        }), R[21] = P, R[22] = L, R[23] = M, R[24] = T, R[25] = b) : b = R[25], R[26] !== g || R[27] !== b ? (y = (0, t.jsxs)("div", {
            className: "flex items-center gap-12",
            children: [g, b]
        }), R[26] = g, R[27] = b, R[28] = y) : y = R[28], R[29] !== v || R[30] !== y ? (w = (0, t.jsxs)("div", {
            className: "flex items-center justify-between px-16 py-20",
            children: [v, y]
        }), R[29] = v, R[30] = y, R[31] = w) : w = R[31];
        let B = !L && "hidden";
        return R[32] !== B ? (j = (0, n.default)(B), R[32] = B, R[33] = j) : j = R[33], R[34] !== F || R[35] !== I || R[36] !== L || R[37] !== M ? (k = (0, t.jsx)(eh, {
            entry: I,
            isMenuOpen: L,
            navOnScroll: M,
            bannerVisible: F,
            setIsMenuOpen: A
        }), R[34] = F, R[35] = I, R[36] = L, R[37] = M, R[38] = k) : k = R[38], R[39] !== j || R[40] !== k ? (N = (0, t.jsx)("div", {
            className: j,
            children: k
        }), R[39] = j, R[40] = k, R[41] = N) : N = R[41], R[42] !== P || R[43] !== L || R[44] !== M || R[45] !== T ? (E = !L && (0, t.jsx)("div", {
            className: (0, n.default)("group-hover:bg-navigation-divider-light absolute bottom-0 left-0 right-0 block h-2", M || "light" === T || P ? "bg-navigation-divider-light" : "bg-navigation-divider-dark")
        }), R[42] = P, R[43] = L, R[44] = M, R[45] = T, R[46] = E) : E = R[46], R[47] !== w || R[48] !== N || R[49] !== E || R[50] !== m || R[51] !== x ? (C = (0, t.jsxs)(l.motion.div, {
            initial: u,
            animate: m,
            transition: h,
            className: x,
            children: [w, N, E]
        }), R[47] = w, R[48] = N, R[49] = E, R[50] = m, R[51] = x, R[52] = C) : C = R[52], R[53] !== I.sections[0].sectionId || R[54] !== C ? (S = (0, t.jsx)("nav", {
            className: "group sticky top-0 z-navigation lg:hidden",
            defaultValue: V,
            children: C
        }), R[53] = I.sections[0].sectionId, R[54] = C, R[55] = S) : S = R[55], S
    }], 189029);
    var ep = e.i(595990),
        ex = e.i(541118);
    e.s(["default", 0, () => {
        let e = (0, ex.default)(),
            t = (0, ep.useFeatureFlag)("sidecart_ab").enabled,
            r = e.sidecartAccessoryHighlightPreprod && 1444040 === e.sidecartAccessoryHighlightPreprod.variationId,
            a = e.sidecartAccessoryHighlightProd && 1452164 === e.sidecartAccessoryHighlightProd.variationId;
        return t || r || a
    }], 719363), e.i(664157);
    var ev = e.i(271179);
    e.s(["default", 0, e => {
        let a, l, i, s, o, c = (0, r.c)(18),
            {
                count: d,
                theme: u,
                onClick: m,
                size: h,
                isDisabled: f
            } = e,
            p = "dark" === u ? "white" : "black",
            {
                t: x
            } = (0, ev.useTranslation)("header"),
            v = "small" === h ? 22 : 60;
        c[0] !== m ? (a = () => m(), c[0] = m, c[1] = a) : a = c[1], c[2] !== x ? (l = x("cartButton.yourCart"), c[2] = x, c[3] = l) : l = c[3];
        let g = f ? "cart-button-disabled" : "cart-button";
        return c[4] !== p || c[5] !== v ? (i = (0, t.jsx)("span", {
            children: (0, t.jsx)(ec.default, {
                name: "cart",
                size: v,
                color: p
            })
        }), c[4] = p, c[5] = v, c[6] = i) : i = c[6], c[7] !== d || c[8] !== h || c[9] !== x ? (s = d > 0 && (0, t.jsxs)("span", {
            "data-testid": "product-quantity",
            className: (0, n.default)("bg-primary absolute -inset-e-8 -top-6 flex items-center justify-center rounded-full text-white", "small" === h && "body-4 h-16 w-16"),
            children: [(0, t.jsx)("span", {
                className: "sr-only",
                children: x("cartButton.productQuantity")
            }), d]
        }), c[7] = d, c[8] = h, c[9] = x, c[10] = s) : s = c[10], c[11] !== f || c[12] !== a || c[13] !== l || c[14] !== g || c[15] !== i || c[16] !== s ? (o = (0, t.jsxs)("button", {
            type: "button",
            className: "relative",
            onClick: a,
            "aria-label": l,
            "data-testid": g,
            disabled: f,
            children: [i, s]
        }), c[11] = f, c[12] = a, c[13] = l, c[14] = g, c[15] = i, c[16] = s, c[17] = o) : o = c[17], o
    }], 394228), e.s([], 396415)
}, 923160, 217863, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(495854);
    e.s(["default", 0, e => {
        let l, n, i, s = (0, r.c)(11),
            {
                rating: o,
                size: c,
                color: d
            } = e,
            u = void 0 === d ? "black" : d;
        if (s[0] !== u || s[1] !== o || s[2] !== c) {
            let e, r = (e => {
                let t = Math.round(2 * (e > 5 ? 5 : e)) / 2,
                    r = Math.floor(t),
                    a = t - r == .5,
                    l = 5 - r - !!a,
                    n = [];
                for (let e = 0; e < r; e += 1) n.push({
                    key: `${e}-full`,
                    value: "full"
                });
                a && n.push({
                    key: "0-half",
                    value: "half"
                });
                for (let e = 0; e < l; e += 1) n.push({
                    key: `${e}-empty`,
                    value: "empty"
                });
                return n
            })(o);
            l = "flex justify-start gap-4 align-middle", s[5] !== u || s[6] !== c ? (e = e => (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: (0, a.default)("small" === c && "w-12", "medium" === c && "w-16", "large" === c && "w-24", "h-auto fill-current", "primary" === u && "text-primary", "white" === u && "text-white hover:text-neutral-300", "black" === u && "text-black"),
                viewBox: "0 0 16 16",
                "data-testid": `review__star__${e.value}`,
                children: "full" === e.value && (0, t.jsx)("path", {
                    d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                }) || "half" === e.value && (0, t.jsx)("path", {
                    d: "M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                }) || (0, t.jsx)("path", {
                    d: "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                })
            }, e.key), s[5] = u, s[6] = c, s[7] = e) : e = s[7], n = r.map(e), s[0] = u, s[1] = o, s[2] = c, s[3] = l, s[4] = n
        } else l = s[3], n = s[4];
        return s[8] !== l || s[9] !== n ? (i = (0, t.jsx)("div", {
            className: l,
            children: n
        }), s[8] = l, s[9] = n, s[10] = i) : i = s[10], i
    }], 217863), e.s([], 923160)
}, 516131, 232567, 485885, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(893930);
    let a = async e => {
            let t = `/api/recommendations?${e}`;
            try {
                let e = await fetch(t);
                return await e.json()
            } catch (e) {
                throw Error(`API Error: ${e instanceof Error?e.message:"Unknown error"}`)
            }
        },
        l = e => {
            let t = new URLSearchParams;
            return e.forEach(({
                id: e,
                variantId: r
            }) => t.append("id", r ? `${e}:${r}` : `${e}`)), t.toString()
        };
    var n = e.i(468411);

    function i(e) {
        let {
            productId: t,
            variantId: r
        } = e;
        return {
            id: (0, n.toNumericId)(t),
            variantId: (0, n.toNumericId)(r)
        }
    }

    function s(e, t) {
        return e.id > t.id ? 1 : -1
    }
    e.s(["default", 0, e => {
        let n, o, c, d = (0, t.c)(7);
        d[0] !== e ? .cartLines ? (n = l((e ? .cartLines.map(i) || []).sort(s)), d[0] = e ? .cartLines, d[1] = n) : n = d[1];
        let u = n;
        d[2] !== u ? (o = {
            queryKey: ["recommendations", u],
            queryFn: () => a(u)
        }, d[2] = u, d[3] = o) : o = d[3];
        let {
            data: m,
            isError: h
        } = (0, r.useQuery)(o);
        if (!m ? .recommendations || h) {
            let e;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                recommendations: null
            }, d[4] = e) : e = d[4], e
        }
        return d[5] !== m.recommendations ? (c = {
            recommendations: m.recommendations
        }, d[5] = m.recommendations, d[6] = c) : c = d[6], c
    }], 516131);
    let o = async (e, t) => {
        try {
            let r = l(e),
                a = await fetch(`/api/products/summaries?${r}&locale=${t}`, {
                    headers: {
                        "Cache-Control": "public, max-age=300, stale-while-revalidate=300, stale-if-error=3600"
                    }
                });
            return await a.json()
        } catch (e) {
            throw Error(`API Error: ${e instanceof Error?e.message:"Unknown error"}`)
        }
    };
    var c = e.i(761226),
        d = e.i(595990),
        u = e.i(219501);
    let m = ["belkin-boost-charge", "ledger-flex-magnet-folio", "ledger-flex-protective-case", "ledger-nano-case", "ledger-nano-pod", "ledger-otg-kit", "ledger-stax-magnet-shell", "pudgy-penguins-ledger-flex-case", "the-billfodl", "anker-wireless-charger", "pudgy-penguins-ledger-flex-bundle", "ledger-stax-alpine-formula-1-team"],
        h = (e, t) => "US" === t && m.some(t => e.includes(t)),
        f = e => {
            let r, a = (0, t.c)(5),
                {
                    countryCode: l
                } = (0, u.default)(),
                {
                    enabled: n
                } = (0, d.useFeatureFlag)("us_inventory_availability");
            if (n) return e;
            if (a[0] !== l || a[1] !== e) {
                let t;
                a[3] !== l ? (t = e => {
                    let {
                        handle: t
                    } = e;
                    return !h(t, l)
                }, a[3] = l, a[4] = t) : t = a[4], r = e.filter(t), a[0] = l, a[1] = e, a[2] = r
            } else r = a[2];
            return r
        };
    e.s(["useAllowedProducts", 0, f, "useIsUSTariffsEffected", 0, e => {
        let r, a = (0, t.c)(3),
            {
                countryCode: l
            } = (0, u.default)(),
            {
                enabled: n
            } = (0, d.useFeatureFlag)("us_inventory_availability");
        return !n && (a[0] !== l || a[1] !== e ? (r = h(e, l), a[0] = l, a[1] = e, a[2] = r) : r = a[2], r)
    }], 232567), e.s(["default", 0, e => {
        let a, l, n, i, s, d = (0, t.c)(13),
            {
                locale: u
            } = (0, c.default)();
        d[0] !== e ? (a = ["product summaries", e], d[0] = e, d[1] = a) : a = d[1], d[2] !== e || d[3] !== u ? (l = () => o(e, u), d[2] = e, d[3] = u, d[4] = l) : l = d[4];
        let m = e.length > 0;
        d[5] !== a || d[6] !== l || d[7] !== m ? (n = {
            queryKey: a,
            queryFn: l,
            enabled: m
        }, d[5] = a, d[6] = l, d[7] = m, d[8] = n) : n = d[8];
        let {
            data: h
        } = (0, r.useQuery)(n);
        d[9] !== h ? .summaries ? (i = h ? .summaries || [], d[9] = h ? .summaries, d[10] = i) : i = d[10];
        let p = f(i);
        return d[11] !== p ? (s = {
            summaries: p
        }, d[11] = p, d[12] = s) : s = d[12], s
    }], 485885)
}, 264516, e => {
    "use strict";
    e.s(["toCamelCase", 0, e => e.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (e, t) => 0 === t ? e.toLowerCase() : e.toUpperCase()).replace(/\W+/g, ""), "toKebabCase", 0, e => e.replace(/\s+/g, "-").toLowerCase()])
}, 766442, 594335, 701894, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(893930),
        a = e.i(219501);
    let l = "Sorry, we had an unexpected error, try again in a few minutes or contact support.";
    async function n(e) {
        let t;
        if (204 === e.status) return null;
        try {
            t = await e.json()
        } catch (t) {
            throw console.error("Error parsing JSON response:", t), Error(l, {
                cause: e
            })
        }
        if (!e.ok) {
            let r;
            if (null !== (r = t) && "object" == typeof r && "error" in r && "string" == typeof r.error) throw Error(t.error, {
                cause: e
            });
            throw Error(l, {
                cause: e
            })
        }
        return t
    }
    async function i() {
        return n(await fetch("/api/inventory/us-availability", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }))
    }
    async function s(e) {
        let t = await fetch("/api/inventory/us-alert-oos", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        await n(t)
    }
    e.s(["toClientJsonResponse", 0, n], 594335), e.s(["fetchUSInventoryAvailability", 0, i, "notifyUSAlertOutOfStock", 0, s], 701894);
    var o = e.i(595990),
        c = e.i(468411);
    async function d() {
        let e = await i();
        return new Set(e ? .unavailableVariantIds || [])
    }

    function u(e) {
        return Math.min(1e3 * 2 ** e, 3e4)
    }
    e.s(["default", 0, () => {
        let e, l, n, i = (0, t.c)(5),
            {
                countryCode: s,
                isLoading: m
            } = (0, a.default)(),
            {
                enabled: h
            } = (0, o.useFeatureFlag)("us_inventory_availability");
        i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = ["us-inventory-availability"], i[0] = e) : e = i[0];
        let f = h && "US" === s && !m;
        i[1] !== f ? (l = {
            queryKey: e,
            queryFn: d,
            enabled: f,
            staleTime: 6e4,
            gcTime: 6e5,
            retry: 3,
            retryDelay: u
        }, i[1] = f, i[2] = l) : l = i[2];
        let {
            data: p
        } = (0, r.useQuery)(l);
        return i[3] !== p ? (n = {
            isUSAvailable: e => {
                let t = (0, c.toNumericId)(e);
                return !p ? .has(t)
            }
        }, i[3] = p, i[4] = n) : n = i[4], n
    }], 766442)
}, 212376, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(219501);
    e.i(350461);
    let a = {
            LNX: new Set(["lnx", "lnx-orange-btc-enfres", "lnxx3-enfr", "lnx-ocm", "lnx-pst-pink-enfres", "lnx-emr-green-enfres", "lnx-sph-blue-enfres", "lnx-gold-enfres", "lnx-lbill-enfr", "lnx-bob-market", "lnxb-dfz-redeem", "lnx-market-ftr", "lnx-samsung-de", "lnx-bydfi", "lnx-vantage-markets", "lnx-thesis"]),
            LNSP: new Set(["lnsp", "lnspx3", "lnsp-emr-green-enfres", "lnsp-pst-pink-enfres", "lnsp-orange-btc-enfres", "lnsp-nep-blue-enfres", "lnsp-oxid-green-enfres", "lnsp-crim-magenta-enfres", "lnsp-ferro-fuch-enfres", "lnsp-bonk", "lnsp-sph-blue-enfres", "lnspx3-enfr", "lnsp-gold-enfres", "lnsp-coolcats", "lnsp-brycent-scuf", "lnsp-nouns", "lnsp-decentralized-masters", "lnsp-full-purple-enfres", "bdl-flx-lnsp-rkey-enfres", "lnx-lnsp"])
        },
        l = new Map([{
            countryCode: "GB",
            restrictedSKULists: []
        }, {
            countryCode: "IL",
            restrictedSKULists: ["LNSP"]
        }, {
            countryCode: "AE",
            restrictedSKULists: ["LNSP"]
        }, {
            countryCode: "BH",
            restrictedSKULists: ["LNSP"]
        }, {
            countryCode: "JO",
            restrictedSKULists: ["LNSP"]
        }, {
            countryCode: "KW",
            restrictedSKULists: ["LNSP"]
        }, {
            countryCode: "LB",
            restrictedSKULists: ["LNSP"]
        }, {
            countryCode: "OM",
            restrictedSKULists: ["LNSP"]
        }, {
            countryCode: "QA",
            restrictedSKULists: ["LNSP"]
        }, {
            countryCode: "SA",
            restrictedSKULists: ["LNSP"]
        }].map(({
            countryCode: e,
            restrictedSKULists: t
        }) => [e, t]));
    e.s(["default", 0, () => {
        let e, n = (0, t.c)(3),
            {
                countryCode: i,
                isLoading: s
            } = (0, r.default)();
        return n[0] !== i || n[1] !== s ? (e = {
            isDeviceAvailable: e => {
                if (s || null === i) return !0;
                let t = l.get(i);
                return !t || !t.some(t => a[t].has(e))
            }
        }, n[0] = i, n[1] = s, n[2] = e) : e = n[2], e
    }], 212376)
}, 799444, 150257, 726774, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(203828),
        a = e.i(191788);
    e.i(350461);
    var l = e.i(465235),
        n = e.i(273340),
        i = e.i(895564),
        s = e.i(456298);

    function o(e, t) {
        return e.filter(e => !t.includes(e))
    }
    var c = class extends i.Subscribable {#
            e;#
            t;#
            r;#
            a;#
            l;#
            n;#
            i;#
            s;
            constructor(e, t, r) {
                super(), this.#e = e, this.#a = r, this.#r = [], this.#l = [], this.#t = [], this.setQueries(t)
            }
            onSubscribe() {
                1 === this.listeners.size && this.#l.forEach(e => {
                    e.subscribe(t => {
                        this.#o(e, t)
                    })
                })
            }
            onUnsubscribe() {
                this.listeners.size || this.destroy()
            }
            destroy() {
                this.listeners = new Set, this.#l.forEach(e => {
                    e.destroy()
                })
            }
            setQueries(e, t, r) {
                this.#r = e, this.#a = t, l.notifyManager.batch(() => {
                    let e = this.#l,
                        t = this.#c(this.#r);
                    t.forEach(e => e.observer.setOptions(e.defaultedQueryOptions, r));
                    let a = t.map(e => e.observer),
                        l = a.map(e => e.getCurrentResult()),
                        n = a.some((t, r) => t !== e[r]);
                    e.length === a.length && !n || (this.#l = a, this.#t = l, this.hasListeners() && (o(e, a).forEach(e => {
                        e.destroy()
                    }), o(a, e).forEach(e => {
                        e.subscribe(t => {
                            this.#o(e, t)
                        })
                    }), this.#d()))
                })
            }
            getCurrentResult() {
                return this.#t
            }
            getQueries() {
                return this.#l.map(e => e.getCurrentQuery())
            }
            getObservers() {
                return this.#l
            }
            getOptimisticResult(e, t) {
                let r = this.#c(e).map(e => e.observer.getOptimisticResult(e.defaultedQueryOptions));
                return [r, e => this.#u(e ? ? r, t), () => this.#m(r, e)]
            }#
            m(e, t) {
                let r = this.#c(t);
                return r.map((t, a) => {
                    let l = e[a];
                    return t.defaultedQueryOptions.notifyOnChangeProps ? l : t.observer.trackResult(l, e => {
                        r.forEach(t => {
                            t.observer.trackProp(e)
                        })
                    })
                })
            }#
            u(e, t) {
                return t ? (this.#n && this.#t === this.#s && t === this.#i || (this.#i = t, this.#s = this.#t, this.#n = (0, s.replaceEqualDeep)(this.#n, t(e))), this.#n) : e
            }#
            c(e) {
                let t = new Map(this.#l.map(e => [e.options.queryHash, e])),
                    r = [];
                return e.forEach(e => {
                    let a = this.#e.defaultQueryOptions(e),
                        l = t.get(a.queryHash);
                    l ? r.push({
                        defaultedQueryOptions: a,
                        observer: l
                    }) : r.push({
                        defaultedQueryOptions: a,
                        observer: new n.QueryObserver(this.#e, a)
                    })
                }), r
            }#
            o(e, t) {
                let r = this.#l.indexOf(e);
                if (-1 !== r) {
                    var a;
                    let e;
                    this.#t = (a = this.#t, (e = a.slice(0))[r] = t, e), this.#d()
                }
            }#
            d() {
                this.hasListeners() && this.#n !== this.#u(this.#m(this.#t, this.#r), this.#a ? .combine) && l.notifyManager.batch(() => {
                    this.listeners.forEach(e => {
                        e(this.#t)
                    })
                })
            }
        },
        d = e.i(285700),
        u = e.i(222826),
        m = e.i(540784),
        h = e.i(636277),
        f = e.i(268082),
        p = e.i(153435);

    function x({
        queries: e,
        ...t
    }, r) {
        let i = (0, d.useQueryClient)(r),
            s = (0, u.useIsRestoring)(),
            o = (0, m.useQueryErrorResetBoundary)(),
            v = a.useMemo(() => e.map(e => {
                let t = i.defaultQueryOptions(e);
                return t._optimisticResults = s ? "isRestoring" : "optimistic", t
            }), [e, i, s]);
        v.forEach(e => {
            (0, f.ensureSuspenseTimers)(e), (0, h.ensurePreventErrorBoundaryRetry)(e, o)
        }), (0, h.useClearResetErrorBoundary)(o);
        let [g] = a.useState(() => new c(i, v, t)), [b, y, w] = g.getOptimisticResult(v, t.combine), j = !s && !1 !== t.subscribed;
        a.useSyncExternalStore(a.useCallback(e => j ? g.subscribe(l.notifyManager.batchCalls(e)) : p.noop, [g, j]), () => g.getCurrentResult(), () => g.getCurrentResult()), a.useEffect(() => {
            g.setQueries(v, t, {
                listeners: !1
            })
        }, [v, t, g]);
        let k = b.some((e, t) => (0, f.shouldSuspend)(v[t], e)) ? b.flatMap((e, t) => {
            let r = v[t];
            if (r) {
                let t = new n.QueryObserver(i, r);
                if ((0, f.shouldSuspend)(r, e)) return (0, f.fetchOptimistic)(r, t, o);
                (0, f.willFetch)(e, s) && (0, f.fetchOptimistic)(r, t, o)
            }
            return []
        }) : [];
        if (k.length > 0) throw Promise.all(k);
        let N = b.find((e, t) => {
            let r = v[t];
            return r && (0, h.getHasError)({
                result: e,
                errorResetBoundary: o,
                throwOnError: r.throwOnError,
                query: i.getQueryCache().get(r.queryHash),
                suspense: v[t] ? .suspense
            })
        });
        if (N ? .error) throw N.error;
        return y(w())
    }
    e.s(["useQueries", 0, x], 150257);
    var v = e.i(410219),
        g = e.i(409043);
    let b = v.gql `
  query ProductPricing($id: ID!, $language: LanguageCode, $country: CountryCode)
  @inContext(language: $language, country: $country) {
    node(id: $id) {
      ... on ProductVariant {
        quantityAvailable
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
      }
    }
  }
`,
        y = async (e, t, r, a) => {
            try {
                let l = await g.shopify.request(b, {
                        id: e,
                        language: t,
                        country: r
                    }),
                    {
                        price: n,
                        quantityAvailable: i
                    } = l.node,
                    {
                        compareAtPrice: s
                    } = l.node,
                    o = n.currencyCode,
                    c = Number(n.amount),
                    d = s && Number(s.amount),
                    u = s ? Intl.NumberFormat(t, {
                        style: "currency",
                        currency: o,
                        trailingZeroDisplay: "stripIfInteger"
                    }).format(Number(s.amount)) : null,
                    m = Intl.NumberFormat(t, {
                        style: "currency",
                        currency: o,
                        trailingZeroDisplay: "stripIfInteger"
                    }).format(Number(c));
                return {
                    amount: c,
                    currency: o,
                    label: m,
                    taxMessage: a,
                    compareAtLabel: u,
                    compareAtAmount: d,
                    quantityAvailable: i
                }
            } catch (e) {
                throw Error(`API Error: ${e instanceof Error?e.message:"Unknown error"}`)
            }
        };
    e.s(["default", 0, y], 726774);
    var w = e.i(468411),
        j = e.i(870256),
        k = e.i(219501);

    function N(e) {
        return e.isPending
    }

    function E(e) {
        return e.isError
    }

    function C(e) {
        return e.data
    }
    e.s(["default", 0, e => {
        let a, l, n, i, s, o = (0, t.c)(18),
            {
                locale: c
            } = (0, r.useRouter)();
        o[0] !== e ? (a = e.map(w.toNumericId), o[0] = e, o[1] = a) : a = o[1];
        let d = a,
            u = (0, k.default)().countryCode;
        if (o[2] !== u || o[3] !== d || o[4] !== c || o[5] !== e) {
            let t;
            o[7] !== u || o[8] !== d || o[9] !== c ? (t = e => ({
                queryKey: [e, u],
                queryFn: () => y(e, c ? .toUpperCase() ? ? "EN", u, ""),
                enabled: !!(d.length > 0 && u),
                staleTime: j.oneDay
            }), o[7] = u, o[8] = d, o[9] = c, o[10] = t) : t = o[10], l = e.map(t), o[2] = u, o[3] = d, o[4] = c, o[5] = e, o[6] = l
        } else l = o[6];
        o[11] !== l ? (n = {
            queries: l
        }, o[11] = l, o[12] = n) : n = o[12];
        let m = x(n),
            h = m.some(N),
            f = m.some(E);
        o[13] !== m ? (i = m.map(C), o[13] = m, o[14] = i) : i = o[14];
        let p = i;
        if (h || f) {
            let e;
            return o[15] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                prices: null
            }, o[15] = e) : e = o[15], e
        }
        return o[16] !== p ? (s = {
            prices: p
        }, o[16] = p, o[17] = s) : s = o[17], s
    }], 799444)
}, 991288, 992775, 496282, 840767, 137933, 128498, 786864, 364422, 380522, 576358, 264367, 178387, e => {
    "use strict";
    let t, r, a;
    var l = e.i(391398),
        n = e.i(261576),
        i = e.i(126019),
        s = e.i(41158),
        o = e.i(191788),
        c = e.i(198311);
    e.i(664157);
    var d = e.i(271179);
    e.i(923160);
    var u = e.i(217863),
        m = e.i(516131);
    e.i(643781);
    var h = e.i(989606),
        f = e.i(644594),
        p = e.i(485885),
        x = e.i(468411),
        v = e.i(264516),
        g = e.i(766442),
        b = e.i(212376),
        y = e.i(495854),
        w = e.i(79564),
        j = e.i(799444);
    let k = e => {
        let t, r, a, l = (0, n.c)(7),
            i = Number(e);
        l[0] !== i ? (t = (0, x.toShopifyVariantId)(i), l[0] = i, l[1] = t) : t = l[1];
        let s = t;
        l[2] !== s ? (r = [s], l[2] = s, l[3] = r) : r = l[3];
        let {
            prices: o
        } = (0, j.default)(r);
        if (!o) return null;
        let {
            label: c,
            compareAtLabel: d
        } = o[0];
        return l[4] !== d || l[5] !== c ? (a = {
            label: c,
            compareAtLabel: d
        }, l[4] = d, l[5] = c, l[6] = a) : a = l[6], a
    };
    var N = e.i(455108);
    let E = {
            hidden: {
                opacity: 1
            },
            visible: {
                opacity: 1,
                transition: {
                    delayChildren: .1,
                    staggerChildren: .1
                }
            }
        },
        C = {
            hidden: {
                y: 10,
                opacity: 0
            },
            visible: {
                y: 0,
                opacity: 1
            }
        },
        S = e => {
            let t, r, a, i = (0, n.c)(7),
                {
                    variantId: s
                } = e,
                o = k(s);
            if (!o) return null;
            let {
                label: c,
                compareAtLabel: d
            } = o;
            return i[0] !== d ? (t = (0, l.jsx)("div", {
                className: "body-4 mt-auto text-gray-500 line-through",
                children: d
            }), i[0] = d, i[1] = t) : t = i[1], i[2] !== c ? (r = (0, l.jsx)("div", {
                className: "body-2 pb-8",
                children: c
            }), i[2] = c, i[3] = r) : r = i[3], i[4] !== t || i[5] !== r ? (a = (0, l.jsxs)(l.Fragment, {
                children: [t, r]
            }), i[4] = t, i[5] = r, i[6] = a) : a = i[6], a
        },
        R = e => {
            let t, r, a, m, p, g, b, j, E, R, I, T, P, F, _, D, L, A, O, M, U = (0, n.c)(57),
                {
                    productSummary: G,
                    drawerRef: V
                } = e,
                {
                    t: z
                } = (0, d.useTranslation)("cart");
            U[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                placement: "recommendedForYou"
            }, U[0] = t) : t = U[0];
            let {
                add: H
            } = (0, w.default)(t), {
                setIsDrawerOpen: B
            } = (0, o.useContext)(f.DrawerContext), {
                maxQuantityAllowed: K,
                handle: $,
                image: W,
                rating: q,
                title: Q,
                totalReviews: Y
            } = G;
            U[1] !== V ? (r = () => {
                V ? .current ? .scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }, U[1] = V, U[2] = r) : r = U[2];
            let Z = r;
            U[3] !== H || U[4] !== $ || U[5] !== K || U[6] !== G.variantId || U[7] !== Z ? (a = () => {
                H([{
                    product: {
                        handle: $,
                        maxQuantityAllowed: K
                    },
                    variantId: (0, x.toShopifyVariantId)(G.variantId)
                }]), Z()
            }, U[3] = H, U[4] = $, U[5] = K, U[6] = G.variantId, U[7] = Z, U[8] = a) : a = U[8];
            let J = a,
                X = (e => {
                    let t = (0, n.c)(9),
                        r = k(e);
                    if (r ? .compareAtLabel) {
                        let e, a, l;
                        if (t[0] !== r.label) {
                            let a;
                            t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = /[^0-9.]+/g, t[2] = a) : a = t[2], e = r.label.replace(a, ""), t[0] = r.label, t[1] = e
                        } else e = t[1];
                        let n = Number(e);
                        if (t[3] !== r.compareAtLabel) {
                            let e;
                            t[5] === Symbol.for("react.memo_cache_sentinel") ? (e = /[^0-9.]+/g, t[5] = e) : e = t[5], a = r.compareAtLabel.replace(e, ""), t[3] = r.compareAtLabel, t[4] = a
                        } else a = t[4];
                        let i = Number(a);
                        return t[6] !== i || t[7] !== n ? (l = Math.round((i - n) / i * 100), t[6] = i, t[7] = n, t[8] = l) : l = t[8], l
                    }
                    return null
                })(`${G.variantId}`);
            U[9] !== Q ? (m = (0, v.toKebabCase)(Q), U[9] = Q, U[10] = m) : m = U[10];
            let ee = `recommendation-access-product-${m}`,
                et = `/products/${$}`;
            U[11] !== B ? (p = () => B(!1), U[11] = B, U[12] = p) : p = U[12], U[13] !== X ? (g = X && (0, l.jsx)("div", {
                className: "absolute top-8 left-8",
                children: (0, l.jsx)(N.default.TagHud, {
                    label: `-${X}%`
                })
            }), U[13] = X, U[14] = g) : g = U[14];
            let er = W.url,
                ea = X && "bg-purple-100";
            U[15] !== ea ? (b = (0, y.default)("h-144 w-112 flex-auto rounded-xs bg-neutral-200 object-contain", ea), U[15] = ea, U[16] = b) : b = U[16], U[17] !== W.url || U[18] !== b ? (j = (0, l.jsx)(i.default, {
                src: er,
                alt: "",
                className: b,
                width: 112,
                height: 144
            }), U[17] = W.url, U[18] = b, U[19] = j) : j = U[19], U[20] !== j || U[21] !== g ? (E = (0, l.jsxs)("div", {
                className: "mb-32 flex flex-1 cursor-pointer items-center justify-center",
                children: [g, j]
            }), U[20] = j, U[21] = g, U[22] = E) : E = U[22], U[23] !== E || U[24] !== et || U[25] !== p ? (R = (0, l.jsx)(s.default, {
                href: et,
                onClick: p,
                children: E
            }), U[23] = E, U[24] = et, U[25] = p, U[26] = R) : R = U[26];
            let el = `/products/${$}`;
            U[27] !== B ? (I = () => B(!1), U[27] = B, U[28] = I) : I = U[28], U[29] !== Q ? (T = (0, l.jsx)("div", {
                className: "body-1-semi-bold cursor-pointer",
                children: Q
            }), U[29] = Q, U[30] = T) : T = U[30], U[31] !== el || U[32] !== I || U[33] !== T ? (P = (0, l.jsx)(s.default, {
                href: el,
                onClick: I,
                children: T
            }), U[31] = el, U[32] = I, U[33] = T, U[34] = P) : P = U[34], U[35] !== q || U[36] !== Y ? (F = Y > 0 && (0, l.jsx)("div", {
                className: "mt-auto py-8",
                children: (0, l.jsx)(u.default, {
                    rating: q,
                    size: "small"
                })
            }), U[35] = q, U[36] = Y, U[37] = F) : F = U[37];
            let en = `${G.variantId}`;
            U[38] !== en ? (_ = (0, l.jsx)(S, {
                variantId: en
            }), U[38] = en, U[39] = _) : _ = U[39];
            let ei = `add-to-cart-bestseller-product-${G.variantId}`;
            return U[40] !== z ? (D = z("sidecart.addToCart"), U[40] = z, U[41] = D) : D = U[41], U[42] !== J || U[43] !== ei || U[44] !== D ? (L = (0, l.jsx)(h.default, {
                dataCsOverrideId: ei,
                size: "small",
                label: D,
                icon: "cart",
                variant: "primary-black",
                onClick: J
            }), U[42] = J, U[43] = ei, U[44] = D, U[45] = L) : L = U[45], U[46] !== _ || U[47] !== L ? (A = (0, l.jsxs)("div", {
                className: "mt-auto flex h-80 flex-col",
                children: [_, L]
            }), U[46] = _, U[47] = L, U[48] = A) : A = U[48], U[49] !== P || U[50] !== F || U[51] !== A ? (O = (0, l.jsxs)("div", {
                className: "flex flex-col justify-between",
                children: [P, F, A]
            }), U[49] = P, U[50] = F, U[51] = A, U[52] = O) : O = U[52], U[53] !== R || U[54] !== O || U[55] !== ee ? (M = (0, l.jsxs)(c.motion.div, {
                className: "grid-auto-rows relative grid h-full w-auto auto-rows-[auto_1fr]",
                variants: C,
                "data-cs-override-id": ee,
                children: [R, O]
            }), U[53] = R, U[54] = O, U[55] = ee, U[56] = M) : M = U[56], M
        };
    e.s(["default", 0, e => {
        let t, r, a, i, s, o, u, h = (0, n.c)(21),
            {
                basedOn: f,
                drawerRef: v
            } = e,
            {
                t: y
            } = (0, d.useTranslation)("cart"),
            {
                isUSAvailable: w
            } = (0, g.default)(),
            {
                isDeviceAvailable: j
            } = (0, b.default)(),
            {
                recommendations: k
            } = (0, m.default)(f);
        h[0] !== k ? (t = k || [], h[0] = k, h[1] = t) : t = h[1];
        let {
            summaries: N
        } = (0, p.default)(t);
        h[2] !== j || h[3] !== w ? (r = e => e.availableForSale && w((0, x.toShopifyVariantId)(e.variantId)) && j(e.sku), h[2] = j, h[3] = w, h[4] = r) : r = h[4];
        let C = r;
        if (N.length < 1) return null;
        if (h[5] !== y ? (a = y("sidecart.recommendedForYou"), h[5] = y, h[6] = a) : a = h[6], h[7] !== a ? (i = (0, l.jsx)("h4", {
                className: "heading-5-semi-bold mb-12",
                children: a
            }), h[7] = a, h[8] = i) : i = h[8], h[9] !== v || h[10] !== C || h[11] !== N) {
            let e;
            h[13] !== v || h[14] !== C ? (e = e => C(e) && (0, l.jsx)(R, {
                productSummary: e,
                drawerRef: v
            }, e.handle), h[13] = v, h[14] = C, h[15] = e) : e = h[15], s = N.map(e), h[9] = v, h[10] = C, h[11] = N, h[12] = s
        } else s = h[12];
        return h[16] !== s ? (o = (0, l.jsx)(c.motion.div, {
            className: "grid grid-cols-2 gap-x-12 gap-y-24 md:grid-cols-3",
            variants: E,
            initial: "hidden",
            animate: "visible",
            children: s
        }), h[16] = s, h[17] = o) : o = h[17], h[18] !== i || h[19] !== o ? (u = (0, l.jsxs)("div", {
            className: "p-16 sm:p-32",
            children: [i, o]
        }), h[18] = i, h[19] = o, h[20] = u) : u = h[20], u
    }], 992775), e.s([], 991288);
    var I = e.i(738368),
        T = e.i(219501),
        P = e.i(197224),
        F = e.i(149818),
        _ = e.i(203828);
    e.i(108399);
    var D = e.i(860231),
        L = e.i(292905);
    e.i(282855);
    var A = e.i(501743),
        O = e.i(999750),
        M = e.i(351688),
        U = e.i(206612),
        G = e.i(478797),
        V = e.i(477180),
        z = e.i(770948);
    let H = (e, t) => {
        let r, a, l, i, s, c, d, u, m, h, f, p, x, v, g, b = (0, n.c)(43);
        b[0] !== t ? (r = void 0 === t ? {} : t, b[0] = t, b[1] = r) : r = b[1];
        let {
            overrideCartCookieName: y,
            disableTracking: w
        } = r, j = void 0 !== w && w;
        b[2] !== y ? (a = {
            overrideCartCookieName: y
        }, b[2] = y, b[3] = a) : a = b[3];
        let {
            updateCartCache: k
        } = (0, z.default)(a), {
            language: N,
            country: E
        } = (0, V.default)(), {
            entryChannel: C
        } = (0, o.useContext)(O.EntryChannelContext), {
            getTrustServicesFrom: S
        } = (0, F.useTrustServicesApi)(), {
            trackEvent: R
        } = (0, G.default)(), {
            isPreview: I
        } = (0, _.useRouter)();
        b[4] !== j || b[5] !== R ? (l = (e, t) => {
            j || R("removeFromCart", {
                remove: {
                    products: (0, M.formatRemoveFromCartLines)(e, t)
                }
            })
        }, b[4] = j, b[5] = R, b[6] = l) : l = b[6];
        let T = l;
        b[7] !== j || b[8] !== R ? (i = (e, t) => {
            j || R("updateQuantityFromCart", {
                currencyCode: (0, U.default)(e),
                add: {
                    products: (0, M.formatUpdateQuantityLines)(e, t)
                }
            })
        }, b[7] = j, b[8] = R, b[9] = i) : i = b[9];
        let P = i;
        b[10] !== e || b[11] !== E || b[12] !== C || b[13] !== S || b[14] !== I || b[15] !== N || b[16] !== y ? (s = t => r => {
            let a, {
                    cartLineId: l,
                    newQuantity: n
                } = r,
                i = e ? .cartLines.find(e => e.id === l);
            return e && i ? (a = "remove" !== t && n ? n - i.quantity : -i.quantity, (0, A.default)({
                cart: e,
                cartLine: i,
                quantityIncrement: a,
                language: N,
                country: E,
                activeEntryChannel: C,
                getTrustServicesFrom: S,
                isPreview: I,
                overrideCartCookieName: y
            })) : Promise.resolve(null)
        }, b[10] = e, b[11] = E, b[12] = C, b[13] = S, b[14] = I, b[15] = N, b[16] = y, b[17] = s) : s = b[17];
        let D = s;
        b[18] !== D ? (c = D("update"), b[18] = D, b[19] = c) : c = b[19];
        let H = c;
        b[20] !== D ? (d = D("remove"), b[20] = D, b[21] = d) : d = b[21];
        let B = d;
        b[22] !== e || b[23] !== k ? (u = t => (r, a) => {
            let {
                cartLineId: l
            } = a;
            e && t(e, l), k(r)
        }, b[22] = e, b[23] = k, b[24] = u) : u = b[24];
        let K = u;
        b[25] !== K || b[26] !== P ? (m = K(P), b[25] = K, b[26] = P, b[27] = m) : m = b[27];
        let $ = m;
        b[28] !== K || b[29] !== T ? (h = K(T), b[28] = K, b[29] = T, b[30] = h) : h = b[30];
        let W = h;
        b[31] === Symbol.for("react.memo_cache_sentinel") ? (f = ["removeFromCart"], b[31] = f) : f = b[31], b[32] !== W || b[33] !== B ? (p = {
            mutationFn: B,
            mutationKey: f,
            onSuccess: W
        }, b[32] = W, b[33] = B, b[34] = p) : p = b[34];
        let {
            mutateAsync: q,
            isPending: Q
        } = (0, L.useMutation)(p);
        b[35] === Symbol.for("react.memo_cache_sentinel") ? (x = ["updateQuantity"], b[35] = x) : x = b[35], b[36] !== $ || b[37] !== H ? (v = {
            mutationFn: H,
            mutationKey: x,
            onSuccess: $
        }, b[36] = $, b[37] = H, b[38] = v) : v = b[38];
        let {
            mutateAsync: Y,
            isPending: Z
        } = (0, L.useMutation)(v), J = Q || Z;
        return b[39] !== J || b[40] !== q || b[41] !== Y ? (g = {
            updateQuantity: Y,
            remove: q,
            quantityUpdating: J
        }, b[39] = J, b[40] = q, b[41] = Y, b[42] = g) : g = b[42], g
    };
    e.s(["default", 0, H], 496282);
    var B = e.i(215217);

    function K(e) {
        let {
            handle: t,
            title: r
        } = e;
        return [t, r]
    }

    function $(e) {
        return {
            id: e
        }
    }

    function W(e) {
        return (0, x.toNumericId)(e.productId)
    }
    let q = function() {
            let e, t, r, a, l = (0, n.c)(8),
                {
                    cart: i
                } = (0, B.default)();
            i ? .cartLines, l[0] !== i ? .cartLines ? (e = new Set(i ? .cartLines.map(W)), l[0] = i ? .cartLines, l[1] = e) : e = l[1], l[2] !== e ? (t = [...e].map($), l[2] = e, l[3] = t) : t = l[3];
            let s = t,
                {
                    summaries: o
                } = (0, p.default)(s);
            l[4] !== o ? (r = Object.fromEntries(o.map(K)), l[4] = o, l[5] = r) : r = l[5];
            let c = r;
            return l[6] !== c ? (a = (e, t) => c[e] ? ? t, l[6] = c, l[7] = a) : a = l[7], a
        },
        Q = e => {
            let t, r, a, i, s, o, c, u, m, h, f, p, x, v, g, b, y, w = (0, n.c)(43),
                {
                    linkedProduct: j
                } = e;
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (t = ["common", "cart"], w[0] = t) : t = w[0];
            let {
                t: k
            } = (0, d.useTranslation)(t), {
                cart: N
            } = (0, B.default)(), {
                remove: E
            } = H(N), {
                locale: C
            } = (0, _.useRouter)();
            w[1] !== j.id || w[2] !== E ? (r = () => {
                E({
                    cartLineId: j.id
                })
            }, w[1] = j.id, w[2] = E, w[3] = r) : r = w[3];
            let S = r;
            w[4] !== j.cost ? .totalAmount ? .amount || w[5] !== j.cost ? .totalAmount ? .currencyCode || w[6] !== C ? (a = Intl.NumberFormat(C, {
                style: "currency",
                currency: j ? .cost ? .totalAmount ? .currencyCode,
                trailingZeroDisplay: "stripIfInteger"
            }).format(Number(j ? .cost ? .totalAmount ? .amount)), w[4] = j.cost ? .totalAmount ? .amount, w[5] = j.cost ? .totalAmount ? .currencyCode, w[6] = C, w[7] = a) : a = w[7];
            let R = a,
                I = q();
            w[8] !== I || w[9] !== j.handle ? (i = I(j.handle), w[8] = I, w[9] = j.handle, w[10] = i) : i = w[10];
            let T = i,
                P = j.variantTitle ? ` - ${j.variantTitle}` : "",
                F = T ? `${T}${P}` : j.fullTitle;
            w[11] !== j.handle ? (s = j ? .handle ? .includes("replace"), w[11] = j.handle, w[12] = s) : s = w[12];
            let L = s;
            w[13] !== F ? (o = (0, l.jsx)("div", {
                className: "body-1-semi-bold",
                children: F
            }), w[13] = F, w[14] = o) : o = w[14], w[15] !== L || w[16] !== k ? (c = L && (0, l.jsx)("div", {
                className: "body-3 text-neutral-600",
                children: k("cart:sidecart.replaceDescription")
            }), w[15] = L, w[16] = k, w[17] = c) : c = w[17], w[18] !== o || w[19] !== c ? (u = (0, l.jsxs)("div", {
                children: [o, c]
            }), w[18] = o, w[19] = c, w[20] = u) : u = w[20];
            let A = j ? .quantity;
            return w[21] !== A ? (m = (0, l.jsx)("div", {
                className: "flex aspect-square min-w-[40px] items-center justify-center rounded-full bg-neutral-100 px-8 py-16 text-center",
                children: (0, l.jsx)("span", {
                    className: "body-3",
                    children: A
                })
            }), w[21] = A, w[22] = m) : m = w[22], w[23] !== k ? (h = k("common:controls.remove"), w[23] = k, w[24] = h) : h = w[24], w[25] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, l.jsx)("div", {
                className: "text-black transition-all duration-300 ease-in-out hover:text-neutral-600",
                children: (0, l.jsx)(D.default, {
                    name: "trash",
                    size: 24,
                    strokeWidth: 3.5,
                    color: "current"
                })
            }), w[25] = f) : f = w[25], w[26] !== S || w[27] !== h ? (p = (0, l.jsx)("button", {
                onClick: S,
                tabIndex: 0,
                type: "button",
                "aria-label": h,
                children: f
            }), w[26] = S, w[27] = h, w[28] = p) : p = w[28], w[29] !== R ? (x = (0, l.jsx)("div", {
                className: "heading-5-semi-bold ml-auto block md:hidden",
                children: R
            }), w[29] = R, w[30] = x) : x = w[30], w[31] !== m || w[32] !== p || w[33] !== x ? (v = (0, l.jsxs)("div", {
                className: "flex items-center gap-16",
                children: [m, p, x]
            }), w[31] = m, w[32] = p, w[33] = x, w[34] = v) : v = w[34], w[35] !== v || w[36] !== u ? (g = (0, l.jsx)("div", {
                className: "flex w-full flex-col justify-center",
                children: (0, l.jsxs)("div", {
                    className: "flex flex-col gap-16 sm:flex-row sm:items-center sm:justify-between",
                    children: [u, v]
                })
            }), w[35] = v, w[36] = u, w[37] = g) : g = w[37], w[38] !== R ? (b = (0, l.jsx)("div", {
                className: "hidden heading-5-semi-bold mb-32 md:mb-0 md:block",
                children: R
            }), w[38] = R, w[39] = b) : b = w[39], w[40] !== g || w[41] !== b ? (y = (0, l.jsx)("div", {
                className: "flex flex-col gap-16 rounded-md border border-gray-100 bg-neutral-50 p-16",
                "data-testid": "sidecart-trust-services",
                children: (0, l.jsxs)("div", {
                    className: "flex items-end gap-16 md:items-center",
                    children: [g, b]
                })
            }), w[40] = g, w[41] = b, w[42] = y) : y = w[42], y
        };
    var Y = e.i(578584),
        Z = e.i(441243),
        J = e.i(730943),
        X = e.i(872016),
        ee = e.i(626171),
        et = e.i(880150),
        er = e.i(993481),
        ea = e.i(71147),
        el = e.i(373483),
        en = e.i(264728),
        ei = e.i(468327),
        es = e.i(587264),
        eo = e.i(476925),
        ec = e.i(941888),
        ed = e.i(399030),
        eu = e.i(104067),
        em = e.i(608404),
        eh = e.i(156833),
        ef = e.i(363749),
        ep = e.i(798294),
        ex = e.i(880281),
        ev = e.i(439048),
        eg = e.i(315503),
        eb = e.i(896694),
        ey = e.i(331774),
        ew = e.i(459778),
        ej = e.i(387706),
        ek = e.i(760004),
        eN = e.i(855367),
        eE = e.i(565383),
        eC = e.i(426417),
        eS = e.i(780795),
        eR = e.i(774664),
        eI = e.i(472381),
        eT = e.i(78270),
        eP = e.i(709769),
        eF = e.i(962750),
        e_ = e.i(214929),
        eD = e.i(161614),
        eL = Object.defineProperty,
        eA = (e, t, r) => {
            let a;
            return (a = "symbol" != typeof t ? t + "" : t) in e ? eL(e, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[a] = r, r
        },
        eO = ((t = eO || {})[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t),
        eM = ((r = eM || {})[r.Pointer = 0] = "Pointer", r[r.Other = 1] = "Other", r),
        eU = ((a = eU || {})[a.OpenMenu = 0] = "OpenMenu", a[a.CloseMenu = 1] = "CloseMenu", a[a.GoToItem = 2] = "GoToItem", a[a.Search = 3] = "Search", a[a.ClearSearch = 4] = "ClearSearch", a[a.RegisterItems = 5] = "RegisterItems", a[a.UnregisterItems = 6] = "UnregisterItems", a[a.SetButtonElement = 7] = "SetButtonElement", a[a.SetItemsElement = 8] = "SetItemsElement", a[a.SortItems = 9] = "SortItems", a[a.MarkButtonAsMoved = 10] = "MarkButtonAsMoved", a);

    function eG(e, t = e => e) {
        let r = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
            a = (0, eE.sortByDomNode)(t(e.items.slice()), e => e.dataRef.current.domRef.current),
            l = r ? a.indexOf(r) : null;
        return -1 === l && (l = null), {
            items: a,
            activeItemIndex: l
        }
    }
    let eV = {
        1(e) {
            if (1 === e.menuState) return e;
            let t = e.buttonElement ? eD.ElementPositionState.Tracked((0, eD.computeVisualPosition)(e.buttonElement)) : e.buttonPositionState;
            return { ...e,
                activeItemIndex: null,
                pendingFocus: {
                    focus: ej.Focus.Nothing
                },
                menuState: 1,
                buttonPositionState: t
            }
        },
        0: (e, t) => 0 === e.menuState ? e : { ...e,
            __demoMode: !1,
            pendingFocus: t.focus,
            menuState: 0,
            buttonPositionState: eD.ElementPositionState.Idle
        },
        2: (e, t) => {
            var r, a, l, n, i;
            if (1 === e.menuState) return e;
            let s = { ...e,
                searchQuery: "",
                activationTrigger: null != (r = t.trigger) ? r : 1,
                __demoMode: !1
            };
            if (t.focus === ej.Focus.Nothing) return { ...s,
                activeItemIndex: null
            };
            if (t.focus === ej.Focus.Specific) return { ...s,
                activeItemIndex: e.items.findIndex(e => e.id === t.id)
            };
            if (t.focus === ej.Focus.Previous) {
                let r = e.activeItemIndex;
                if (null !== r) {
                    let n = e.items[r].dataRef.current.domRef,
                        i = (0, ej.calculateActiveIndex)(t, {
                            resolveItems: () => e.items,
                            resolveActiveIndex: () => e.activeItemIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                    if (null !== i) {
                        let t = e.items[i].dataRef.current.domRef;
                        if ((null == (a = n.current) ? void 0 : a.previousElementSibling) === t.current || (null == (l = t.current) ? void 0 : l.previousElementSibling) === null) return { ...s,
                            activeItemIndex: i
                        }
                    }
                }
            } else if (t.focus === ej.Focus.Next) {
                let r = e.activeItemIndex;
                if (null !== r) {
                    let a = e.items[r].dataRef.current.domRef,
                        l = (0, ej.calculateActiveIndex)(t, {
                            resolveItems: () => e.items,
                            resolveActiveIndex: () => e.activeItemIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                    if (null !== l) {
                        let t = e.items[l].dataRef.current.domRef;
                        if ((null == (n = a.current) ? void 0 : n.nextElementSibling) === t.current || (null == (i = t.current) ? void 0 : i.nextElementSibling) === null) return { ...s,
                            activeItemIndex: l
                        }
                    }
                }
            }
            let o = eG(e),
                c = (0, ej.calculateActiveIndex)(t, {
                    resolveItems: () => o.items,
                    resolveActiveIndex: () => o.activeItemIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                });
            return { ...s,
                ...o,
                activeItemIndex: c
            }
        },
        3: (e, t) => {
            let r = +("" === e.searchQuery),
                a = e.searchQuery + t.value.toLowerCase(),
                l = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find(e => {
                    var t;
                    return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(a)) && !e.dataRef.current.disabled
                }),
                n = l ? e.items.indexOf(l) : -1;
            return -1 === n || n === e.activeItemIndex ? { ...e,
                searchQuery: a
            } : { ...e,
                searchQuery: a,
                activeItemIndex: n,
                activationTrigger: 1
            }
        },
        4: e => "" === e.searchQuery ? e : { ...e,
            searchQuery: "",
            searchActiveItemIndex: null
        },
        5: (e, t) => {
            let r = e.items.concat(t.items.map(e => e)),
                a = e.activeItemIndex;
            return e.pendingFocus.focus !== ej.Focus.Nothing && (a = (0, ej.calculateActiveIndex)(e.pendingFocus, {
                resolveItems: () => r,
                resolveActiveIndex: () => e.activeItemIndex,
                resolveId: e => e.id,
                resolveDisabled: e => e.dataRef.current.disabled
            })), { ...e,
                items: r,
                activeItemIndex: a,
                pendingFocus: {
                    focus: ej.Focus.Nothing
                },
                pendingShouldSort: !0
            }
        },
        6: (e, t) => {
            let r = e.items,
                a = [],
                l = new Set(t.items);
            for (let [e, t] of r.entries())
                if (l.has(t.id) && (a.push(e), l.delete(t.id), 0 === l.size)) break;
            if (a.length > 0)
                for (let e of (r = r.slice(), a.reverse())) r.splice(e, 1);
            return { ...e,
                items: r,
                activationTrigger: 1
            }
        },
        7: (e, t) => e.buttonElement === t.element ? e : { ...e,
            buttonElement: t.element
        },
        8: (e, t) => e.itemsElement === t.element ? e : { ...e,
            itemsElement: t.element
        },
        9: e => e.pendingShouldSort ? { ...e,
            ...eG(e),
            pendingShouldSort: !1
        } : e,
        10: e => "Tracked" !== e.buttonPositionState.kind ? e : { ...e,
            buttonPositionState: eD.ElementPositionState.Moved
        }
    };
    class ez extends e_.Machine {
        constructor(e) {
            super(e), eA(this, "actions", {
                registerItem: (0, e_.batch)(() => {
                    let e = [],
                        t = new Set;
                    return [(r, a) => {
                        t.has(a) || (t.add(a), e.push({
                            id: r,
                            dataRef: a
                        }))
                    }, () => (t.clear(), this.send({
                        type: 5,
                        items: e.splice(0)
                    }))]
                }),
                unregisterItem: (0, e_.batch)(() => {
                    let e = [];
                    return [t => e.push(t), () => this.send({
                        type: 6,
                        items: e.splice(0)
                    })]
                })
            }), eA(this, "selectors", {
                activeDescendantId(e) {
                    var t;
                    let r = e.activeItemIndex,
                        a = e.items;
                    return null === r || null == (t = a[r]) ? void 0 : t.id
                },
                isActive(e, t) {
                    var r;
                    let a = e.activeItemIndex,
                        l = e.items;
                    return null !== a && (null == (r = l[a]) ? void 0 : r.id) === t
                },
                shouldScrollIntoView(e, t) {
                    return !e.__demoMode && 0 === e.menuState && 0 !== e.activationTrigger && this.isActive(e, t)
                },
                didButtonMove: e => "Moved" === e.buttonPositionState.kind
            }), this.on(5, () => {
                this.disposables.requestAnimationFrame(() => {
                    this.send({
                        type: 9
                    })
                })
            }); {
                let e = this.state.id,
                    t = ey.stackMachines.get(null);
                this.disposables.add(t.on(ey.ActionTypes.Push, r => {
                    t.selectors.isTop(r, e) || 0 !== this.state.menuState || this.send({
                        type: 1
                    })
                })), this.on(0, () => t.actions.push(e)), this.on(1, () => t.actions.pop(e))
            }
            this.disposables.group(e => {
                this.on(1, t => {
                    t.buttonElement && (e.dispose(), e.add((0, eD.detectMovement)(t.buttonElement, t.buttonPositionState, () => {
                        this.send({
                            type: 10
                        })
                    })))
                })
            })
        }
        static new({
            id: e,
            __demoMode: t = !1
        }) {
            return new ez({
                id: e,
                __demoMode: t,
                menuState: +!t,
                buttonElement: null,
                itemsElement: null,
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1,
                pendingShouldSort: !1,
                pendingFocus: {
                    focus: ej.Focus.Nothing
                },
                buttonPositionState: eD.ElementPositionState.Idle
            })
        }
        reduce(e, t) {
            return (0, eC.match)(t.type, eV, e, t)
        }
    }
    var eH = e.i(721867);
    let eB = (0, o.createContext)(null);

    function eK(e) {
        let t = (0, o.useContext)(eB);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, e$), t
        }
        return t
    }

    function e$({
        id: e,
        __demoMode: t = !1
    }) {
        let r = (0, o.useMemo)(() => ez.new({
            id: e,
            __demoMode: t
        }), []);
        return (0, eH.useOnUnmount)(() => r.dispose()), r
    }
    let eW = o.Fragment,
        eq = eR.RenderFeatures.RenderStrategy | eR.RenderFeatures.Static,
        eQ = o.Fragment,
        eY = (0, eR.forwardRefWithAs)(function(e, t) {
            let r = (0, o.useId)(),
                {
                    __demoMode: a = !1,
                    ...l
                } = e,
                n = e$({
                    id: r,
                    __demoMode: a
                }),
                [i, s, c] = (0, ew.useSlice)(n, e => [e.menuState, e.itemsElement, e.buttonElement]),
                d = (0, eh.useSyncRefs)(t),
                u = ey.stackMachines.get(null),
                m = (0, ew.useSlice)(u, (0, o.useCallback)(e => u.selectors.isTop(e, r), [u, r]));
            (0, es.useOutsideClick)(m, [c, s], (e, t) => {
                var r;
                n.send({
                    type: eU.CloseMenu
                }), (0, eE.isFocusableElement)(t, eE.FocusableMode.Loose) || (e.preventDefault(), null == (r = n.state.buttonElement) || r.focus())
            });
            let h = (0, er.useEvent)(() => {
                    n.send({
                        type: eU.CloseMenu
                    })
                }),
                f = (0, em.useSlot)({
                    open: i === eO.Open,
                    close: h
                }),
                p = (0, eR.useRender)();
            return o.default.createElement(eg.FloatingProvider, null, o.default.createElement(eB.Provider, {
                value: n
            }, o.default.createElement(eb.OpenClosedProvider, {
                value: (0, eC.match)(i, {
                    [eO.Open]: eb.State.Open,
                    [eO.Closed]: eb.State.Closed
                })
            }, p({
                ourProps: {
                    ref: d
                },
                theirProps: l,
                slot: f,
                defaultTag: eW,
                name: "Menu"
            }))))
        }),
        eZ = (0, eR.forwardRefWithAs)(function(e, t) {
            let r = eK("Menu.Button"),
                a = (0, o.useId)(),
                {
                    id: l = `headlessui-menu-button-${a}`,
                    disabled: n = !1,
                    autoFocus: i = !1,
                    ...s
                } = e,
                c = (0, o.useRef)(null),
                d = (0, eg.useFloatingReferenceProps)(),
                u = (0, eh.useSyncRefs)(t, c, (0, eg.useFloatingReference)(), (0, er.useEvent)(e => r.send({
                    type: eU.SetButtonElement,
                    element: e
                }))),
                m = (0, er.useEvent)(e => {
                    switch (e.key) {
                        case eT.Keys.Space:
                        case eT.Keys.Enter:
                        case eT.Keys.ArrowDown:
                            e.preventDefault(), e.stopPropagation(), r.send({
                                type: eU.OpenMenu,
                                focus: {
                                    focus: ej.Focus.First
                                }
                            });
                            break;
                        case eT.Keys.ArrowUp:
                            e.preventDefault(), e.stopPropagation(), r.send({
                                type: eU.OpenMenu,
                                focus: {
                                    focus: ej.Focus.Last
                                }
                            })
                    }
                }),
                h = (0, er.useEvent)(e => {
                    e.key === eT.Keys.Space && e.preventDefault()
                }),
                [f, p, x] = (0, ew.useSlice)(r, e => [e.menuState, e.buttonElement, e.itemsElement]),
                v = f === eO.Open;
            (0, ec.useQuickRelease)(v, {
                trigger: p,
                action: (0, o.useCallback)(e => {
                    if (null != p && p.contains(e.target)) return ec.Action.Ignore;
                    let t = e.target.closest('[role="menuitem"]:not([data-disabled])');
                    return eN.isHTMLElement(t) ? ec.Action.Select(t) : null != x && x.contains(e.target) ? ec.Action.Ignore : ec.Action.Close
                }, [p, x]),
                close: (0, o.useCallback)(() => r.send({
                    type: eU.CloseMenu
                }), []),
                select: (0, o.useCallback)(e => e.click(), [])
            });
            let g = (0, ea.useHandleToggle)(e => {
                    var t;
                    n || (f === eO.Open ? ((0, J.flushSync)(() => r.send({
                        type: eU.CloseMenu
                    })), null == (t = c.current) || t.focus({
                        preventScroll: !0
                    })) : (e.preventDefault(), r.send({
                        type: eU.OpenMenu,
                        focus: {
                            focus: ej.Focus.Nothing
                        },
                        trigger: eM.Pointer
                    })))
                }),
                {
                    isFocusVisible: b,
                    focusProps: y
                } = (0, Y.useFocusRing)({
                    autoFocus: i
                }),
                {
                    isHovered: w,
                    hoverProps: j
                } = (0, Z.useHover)({
                    isDisabled: n
                }),
                {
                    pressed: k,
                    pressProps: N
                } = (0, X.useActivePress)({
                    disabled: n
                }),
                E = (0, em.useSlot)({
                    open: f === eO.Open,
                    active: k || f === eO.Open,
                    disabled: n,
                    hover: w,
                    focus: b,
                    autofocus: i
                }),
                C = (0, eR.mergeProps)(d(), {
                    ref: u,
                    id: l,
                    type: (0, ed.useResolveButtonType)(e, c.current),
                    "aria-haspopup": "menu",
                    "aria-controls": null == x ? void 0 : x.id,
                    "aria-expanded": f === eO.Open,
                    disabled: n || void 0,
                    autoFocus: i,
                    onKeyDown: m,
                    onKeyUp: h
                }, g, y, j, N);
            return (0, eR.useRender)()({
                ourProps: C,
                theirProps: s,
                slot: E,
                defaultTag: "button",
                name: "Menu.Button"
            })
        }),
        eJ = (0, eR.forwardRefWithAs)(function(e, t) {
            let r = (0, o.useId)(),
                {
                    id: a = `headlessui-menu-items-${r}`,
                    anchor: l,
                    portal: n = !1,
                    modal: i = !0,
                    transition: s = !1,
                    ...c
                } = e,
                d = (0, eg.useResolvedAnchor)(l),
                u = eK("Menu.Items"),
                [m, h] = (0, eg.useFloatingPanel)(d),
                f = (0, eg.useFloatingPanelProps)(),
                [p, x] = (0, o.useState)(null),
                v = (0, eh.useSyncRefs)(t, d ? m : null, (0, er.useEvent)(e => u.send({
                    type: eU.SetItemsElement,
                    element: e
                })), x),
                [g, b] = (0, ew.useSlice)(u, e => [e.menuState, e.buttonElement]),
                y = (0, eo.useOwnerDocument)(b),
                w = (0, eo.useOwnerDocument)(p);
            d && (n = !0);
            let j = (0, eb.useOpenClosed)(),
                [k, N] = (0, ex.useTransition)(s, p, null !== j ? (j & eb.State.Open) === eb.State.Open : g === eO.Open);
            (0, ei.useOnDisappear)(k, b, () => {
                u.send({
                    type: eU.CloseMenu
                })
            });
            let E = (0, ew.useSlice)(u, e => e.__demoMode),
                C = !E && i && g === eO.Open;
            (0, eu.useScrollLock)(C, w);
            let S = !E && i && g === eO.Open;
            (0, el.useInertOthers)(S, {
                allowed: (0, o.useCallback)(() => [b, p], [b, p])
            });
            let R = !(0, ew.useSlice)(u, u.selectors.didButtonMove) && k;
            (0, o.useEffect)(() => {
                p && g === eO.Open && ((0, eS.isActiveElement)(p) || p.focus({
                    preventScroll: !0
                }))
            }, [g, p]), (0, ev.useTreeWalker)(g === eO.Open, {
                container: p,
                accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                walk(e) {
                    e.setAttribute("role", "none")
                }
            });
            let I = (0, ee.useDisposables)(),
                T = (0, er.useEvent)(e => {
                    var t, r, a;
                    switch (I.dispose(), e.key) {
                        case eT.Keys.Space:
                            if ("" !== u.state.searchQuery) return e.preventDefault(), e.stopPropagation(), u.send({
                                type: eU.Search,
                                value: e.key
                            });
                        case eT.Keys.Enter:
                            if (e.preventDefault(), e.stopPropagation(), null !== u.state.activeItemIndex) {
                                let {
                                    dataRef: e
                                } = u.state.items[u.state.activeItemIndex];
                                null == (r = null == (t = e.current) ? void 0 : t.domRef.current) || r.click()
                            }
                            u.send({
                                type: eU.CloseMenu
                            }), (0, eE.restoreFocusIfNecessary)(u.state.buttonElement);
                            break;
                        case eT.Keys.ArrowDown:
                            return e.preventDefault(), e.stopPropagation(), u.send({
                                type: eU.GoToItem,
                                focus: ej.Focus.Next
                            });
                        case eT.Keys.ArrowUp:
                            return e.preventDefault(), e.stopPropagation(), u.send({
                                type: eU.GoToItem,
                                focus: ej.Focus.Previous
                            });
                        case eT.Keys.Home:
                        case eT.Keys.PageUp:
                            return e.preventDefault(), e.stopPropagation(), u.send({
                                type: eU.GoToItem,
                                focus: ej.Focus.First
                            });
                        case eT.Keys.End:
                        case eT.Keys.PageDown:
                            return e.preventDefault(), e.stopPropagation(), u.send({
                                type: eU.GoToItem,
                                focus: ej.Focus.Last
                            });
                        case eT.Keys.Escape:
                            e.preventDefault(), e.stopPropagation(), (0, J.flushSync)(() => u.send({
                                type: eU.CloseMenu
                            })), null == (a = u.state.buttonElement) || a.focus({
                                preventScroll: !0
                            });
                            break;
                        case eT.Keys.Tab:
                            e.preventDefault(), e.stopPropagation(), (0, J.flushSync)(() => u.send({
                                type: eU.CloseMenu
                            })), (0, eE.focusFrom)(u.state.buttonElement, e.shiftKey ? eE.Focus.Previous : eE.Focus.Next);
                            break;
                        default:
                            1 === e.key.length && (u.send({
                                type: eU.Search,
                                value: e.key
                            }), I.setTimeout(() => u.send({
                                type: eU.ClearSearch
                            }), 350))
                    }
                }),
                P = (0, er.useEvent)(e => {
                    e.key === eT.Keys.Space && e.preventDefault()
                }),
                F = (0, em.useSlot)({
                    open: g === eO.Open
                }),
                _ = (0, eR.mergeProps)(d ? f() : {}, {
                    "aria-activedescendant": (0, ew.useSlice)(u, u.selectors.activeDescendantId),
                    "aria-labelledby": (0, ew.useSlice)(u, e => {
                        var t;
                        return null == (t = e.buttonElement) ? void 0 : t.id
                    }),
                    id: a,
                    onKeyDown: T,
                    onKeyUp: P,
                    role: "menu",
                    tabIndex: g === eO.Open ? 0 : void 0,
                    ref: v,
                    style: { ...c.style,
                        ...h,
                        "--button-width": (0, et.useElementSize)(k, b, !0).width
                    },
                    ...(0, ex.transitionDataAttributes)(N)
                }),
                D = (0, eR.useRender)();
            return o.default.createElement(eF.Portal, {
                enabled: !!n && (e.static || k),
                ownerDocument: y
            }, D({
                ourProps: _,
                theirProps: c,
                slot: F,
                defaultTag: "div",
                features: eq,
                visible: R,
                name: "Menu.Items"
            }))
        }),
        eX = (0, eR.forwardRefWithAs)(function(e, t) {
            let r = (0, o.useId)(),
                {
                    id: a = `headlessui-menu-item-${r}`,
                    disabled: l = !1,
                    ...n
                } = e,
                i = eK("Menu.Item"),
                s = (0, ew.useSlice)(i, e => i.selectors.isActive(e, a)),
                c = (0, o.useRef)(null),
                d = (0, eh.useSyncRefs)(t, c),
                u = (0, ew.useSlice)(i, e => i.selectors.shouldScrollIntoView(e, a));
            (0, en.useIsoMorphicEffect)(() => {
                if (u) return (0, ek.disposables)().requestAnimationFrame(() => {
                    var e, t;
                    null == (t = null == (e = c.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                        block: "nearest"
                    })
                })
            }, [u, c]);
            let m = (0, ef.useTextValue)(c),
                h = (0, o.useRef)({
                    disabled: l,
                    domRef: c,
                    get textValue() {
                        return m()
                    }
                });
            (0, en.useIsoMorphicEffect)(() => {
                h.current.disabled = l
            }, [h, l]), (0, en.useIsoMorphicEffect)(() => (i.actions.registerItem(a, h), () => i.actions.unregisterItem(a)), [h, a]);
            let f = (0, er.useEvent)(() => {
                    i.send({
                        type: eU.CloseMenu
                    })
                }),
                p = (0, er.useEvent)(e => {
                    if (l) return e.preventDefault();
                    i.send({
                        type: eU.CloseMenu
                    }), (0, eE.restoreFocusIfNecessary)(i.state.buttonElement)
                }),
                x = (0, er.useEvent)(() => {
                    if (l) return i.send({
                        type: eU.GoToItem,
                        focus: ej.Focus.Nothing
                    });
                    i.send({
                        type: eU.GoToItem,
                        focus: ej.Focus.Specific,
                        id: a
                    })
                }),
                v = (0, ep.useTrackedPointer)(),
                g = (0, er.useEvent)(e => v.update(e)),
                b = (0, er.useEvent)(e => {
                    v.wasMoved(e) && (l || s || i.send({
                        type: eU.GoToItem,
                        focus: ej.Focus.Specific,
                        id: a,
                        trigger: eM.Pointer
                    }))
                }),
                y = (0, er.useEvent)(e => {
                    v.wasMoved(e) && (l || s && i.state.activationTrigger === eM.Pointer && i.send({
                        type: eU.GoToItem,
                        focus: ej.Focus.Nothing
                    }))
                }),
                [w, j] = (0, eP.useLabels)(),
                [k, N] = (0, eI.useDescriptions)(),
                E = (0, em.useSlot)({
                    active: s,
                    focus: s,
                    disabled: l,
                    close: f
                }),
                C = (0, eR.useRender)();
            return o.default.createElement(j, null, o.default.createElement(N, null, C({
                ourProps: {
                    id: a,
                    ref: d,
                    role: "menuitem",
                    tabIndex: !0 === l ? void 0 : -1,
                    "aria-disabled": !0 === l || void 0,
                    "aria-labelledby": w,
                    "aria-describedby": k,
                    disabled: void 0,
                    onClick: p,
                    onFocus: x,
                    onPointerEnter: g,
                    onMouseEnter: g,
                    onPointerMove: b,
                    onMouseMove: b,
                    onPointerLeave: y,
                    onMouseLeave: y
                },
                theirProps: n,
                slot: E,
                defaultTag: eQ,
                name: "Menu.Item"
            })))
        }),
        e0 = Object.assign(eY, {
            Button: eZ,
            Items: eJ,
            Item: eX,
            Section: (0, eR.forwardRefWithAs)(function(e, t) {
                let [r, a] = (0, eP.useLabels)(), l = (0, eR.useRender)();
                return o.default.createElement(a, null, l({
                    ourProps: {
                        ref: t,
                        "aria-labelledby": r,
                        role: "group"
                    },
                    theirProps: e,
                    slot: {},
                    defaultTag: "div",
                    name: "Menu.Section"
                }))
            }),
            Heading: (0, eR.forwardRefWithAs)(function(e, t) {
                let r = (0, o.useId)(),
                    {
                        id: a = `headlessui-menu-heading-${r}`,
                        ...l
                    } = e,
                    n = (0, eP.useLabelContext)();
                (0, en.useIsoMorphicEffect)(() => n.register(a), [a, n.register]);
                let i = {
                    id: a,
                    ref: t,
                    role: "presentation",
                    ...n.props
                };
                return (0, eR.useRender)()({
                    ourProps: i,
                    theirProps: l,
                    slot: {},
                    defaultTag: "header",
                    name: "Menu.Heading"
                })
            }),
            Separator: (0, eR.forwardRefWithAs)(function(e, t) {
                return (0, eR.useRender)()({
                    ourProps: {
                        ref: t,
                        role: "separator"
                    },
                    theirProps: e,
                    slot: {},
                    defaultTag: "div",
                    name: "Menu.Separator"
                })
            })
        });
    e.s(["Menu", 0, e0, "MenuButton", 0, eZ, "MenuItem", 0, eX, "MenuItems", 0, eJ], 840767);
    let e1 = e => {
        let t, r, a, i, s, o, c, u, m, h, f, p, x = (0, n.c)(30),
            {
                selectedQuantity: v,
                maxQuantity: g,
                onChange: b,
                size: w
            } = e,
            j = void 0 === g ? 8 : g,
            k = void 0 === w ? "large" : w;
        x[0] !== j ? (t = () => Array.from({
            length: Math.min(j, 48)
        }, e2), x[0] = j, x[1] = t) : t = x[1];
        let N = t,
            {
                t: E
            } = (0, d.useTranslation)("common");
        if (j <= 1) return null;
        x[2] !== E ? (r = E("chooseQuantity"), x[2] = E, x[3] = r) : r = x[3];
        let C = "small" === k;
        x[4] !== C ? (a = (0, y.default)("flex w-fit items-center gap-4 rounded-full border border-neutral-300 px-32 py-20 text-black transition-all duration-300 ease-in-out hover:border-neutral-400 active:border-neutral-500", {
            "px-16 py-8": C
        }), x[4] = C, x[5] = a) : a = x[5];
        let S = "small" === k ? "body-3" : "body-1 font-normal";
        x[6] !== S ? (i = (0, y.default)(S), x[6] = S, x[7] = i) : i = x[7], x[8] !== v || x[9] !== i ? (s = (0, l.jsx)("span", {
            className: i,
            children: v
        }), x[8] = v, x[9] = i, x[10] = s) : s = x[10], x[11] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, l.jsx)(D.default, {
            name: "chevronDown",
            size: 20,
            color: "black",
            strokeWidth: 3.5
        }), x[11] = o) : o = x[11], x[12] !== r || x[13] !== a || x[14] !== s ? (c = (0, l.jsxs)(eZ, {
            "data-testid": "quantity-selector__button",
            "aria-label": r,
            className: a,
            children: [s, o]
        }), x[12] = r, x[13] = a, x[14] = s, x[15] = c) : c = x[15];
        let R = "small" === k;
        return x[16] !== R ? (u = (0, y.default)("absolute top-[74px] z-20 flex max-h-160 w-full flex-col overflow-scroll rounded-xs border border-neutral-300 bg-white text-black", {
            "-top-48": R
        }), x[16] = R, x[17] = u) : u = x[17], x[18] !== N ? (m = N(), x[18] = N, x[19] = m) : m = x[19], x[20] !== b || x[21] !== v || x[22] !== m ? (h = m.map(e => (0, l.jsx)(eX, {
            "data-testid": "quantity-selector__option",
            onClick: () => {
                e !== v && b(e)
            },
            as: "button",
            className: "flex w-full cursor-pointer items-center justify-center gap-8 px-16 py-8 hover:bg-neutral-50 active:bg-neutral-50",
            children: e
        }, e)), x[20] = b, x[21] = v, x[22] = m, x[23] = h) : h = x[23], x[24] !== u || x[25] !== h ? (f = (0, l.jsx)(eJ, {
            className: u,
            children: h
        }), x[24] = u, x[25] = h, x[26] = f) : f = x[26], x[27] !== c || x[28] !== f ? (p = (0, l.jsx)(e0, {
            "data-testid": "quantity-selector__options",
            children: (0, l.jsxs)("div", {
                className: "relative",
                children: [c, f]
            })
        }), x[27] = c, x[28] = f, x[29] = p) : p = x[29], p
    };

    function e2(e, t) {
        return t + 1
    }
    let e3 = e => {
        let t, r = (0, n.c)(4),
            {
                label: a,
                loading: i,
                compareAtLabel: s
            } = e;
        return r[0] !== s || r[1] !== a || r[2] !== i ? (t = i ? (0, l.jsx)(N.default.LoadingSpinner, {}) : (0, l.jsxs)(l.Fragment, {
            children: [s && (0, l.jsx)("span", {
                className: "text-gray-400 line-through",
                children: s
            }), (0, l.jsx)("div", {
                className: "heading-5-semi-bold",
                children: a
            })]
        }), r[0] = s, r[1] = a, r[2] = i, r[3] = t) : t = r[3], t
    };
    e.s(["default", 0, e3], 137933);
    let e4 = ({
        price: e,
        quantityAmount: t = 1,
        locale: r = "en-US",
        currencyCode: a = "EUR"
    }) => {
        let l = Number(e) * t;
        if (isNaN(l)) return null;
        try {
            return Intl.NumberFormat(r, {
                style: "currency",
                currency: a,
                trailingZeroDisplay: "stripIfInteger"
            }).format(l)
        } catch {
            return null
        }
    };
    e.s(["default", 0, e4], 128498);
    let e6 = e => {
        let t, r, a, s, c, u, m, h, f, p, x, v, g, b, w, j, k, N, E, C, S, R, I, T = (0, n.c)(79),
            {
                cartLine: P
            } = e,
            {
                t: F
            } = (0, d.useTranslation)("common"),
            {
                t: L
            } = (0, d.useTranslation)("cart"),
            {
                cart: A
            } = (0, B.default)(),
            {
                remove: O,
                updateQuantity: M,
                quantityUpdating: U
            } = H(A),
            {
                quantity: G,
                image: V,
                id: z,
                variantTitle: K,
                productTitle: $,
                maxQuantityAllowed: W,
                compareAtPrice: Q,
                handle: Y
            } = P,
            Z = q();
        T[0] !== Z || T[1] !== Y || T[2] !== $ ? (t = Z(Y, $), T[0] = Z, T[1] = Y, T[2] = $, T[3] = t) : t = T[3];
        let J = t,
            {
                locale: X
            } = (0, _.useRouter)(),
            [ee, et] = (0, o.useState)(G),
            [er, ea] = (0, o.useState)(null);
        T[4] !== z || T[5] !== O ? (r = () => {
            O({
                cartLineId: z
            })
        }, T[4] = z, T[5] = O, T[6] = r) : r = T[6];
        let el = r;
        T[7] !== z || T[8] !== M ? (a = async e => {
            et(e), await M({
                cartLineId: z,
                newQuantity: e
            })
        }, T[7] = z, T[8] = M, T[9] = a) : a = T[9];
        let en = a,
            {
                amount: ei,
                currencyCode: es
            } = P.cost.totalAmount;
        T[10] !== es || T[11] !== X || T[12] !== ei ? (s = e4({
            price: ei,
            locale: X,
            currencyCode: es
        }), T[10] = es, T[11] = X, T[12] = ei, T[13] = s) : s = T[13];
        let eo = s,
            ec = "ledger-stax" === Y;
        T[14] !== Q ? .amount || T[15] !== es || T[16] !== X || T[17] !== ee ? (c = () => {
            let e = Q ? .amount;
            ea(e ? e4({
                price: e,
                quantityAmount: ee,
                locale: X,
                currencyCode: es
            }) : null)
        }, T[14] = Q ? .amount, T[15] = es, T[16] = X, T[17] = ee, T[18] = c) : c = T[18];
        let ed = Q ? .amount;
        T[19] !== es || T[20] !== X || T[21] !== ee || T[22] !== ed ? (u = [ee, ed, X, es], T[19] = es, T[20] = X, T[21] = ee, T[22] = ed, T[23] = u) : u = T[23], (0, o.useEffect)(c, u);
        let eu = "ledger-recover" === Y,
            em = eu && "rounded-lg bg-neutral-50 px-20 py-12";
        T[24] !== em ? (m = (0, y.default)("flex items-end gap-16 md:items-center", em), T[24] = em, T[25] = m) : m = T[25], T[26] !== J || T[27] !== V || T[28] !== eu ? (h = !eu && (0, l.jsx)("div", {
            className: "flex h-[104px] min-w-[96px] items-center justify-center self-center rounded-xs bg-neutral-100",
            children: (0, l.jsx)(i.default, {
                src: V.url,
                alt: J ? ? "",
                width: 65,
                height: 88
            })
        }), T[26] = J, T[27] = V, T[28] = eu, T[29] = h) : h = T[29];
        let eh = eu ? "gap-16 sm:flex-row md:justify-start" : "justify-between";
        T[30] !== eh ? (f = (0, y.default)("flex w-full flex-col justify-between", eh), T[30] = eh, T[31] = f) : f = T[31];
        let ef = !eu && "mb-32";
        return T[32] !== ef ? (p = (0, y.default)(ef), T[32] = ef, T[33] = p) : p = T[33], T[34] !== J ? (x = (0, l.jsx)("div", {
            className: "body-1-semi-bold",
            children: J
        }), T[34] = J, T[35] = x) : x = T[35], T[36] !== ec || T[37] !== L ? (v = ec && (0, l.jsx)("div", {
            className: "body-3 text-neutral-600",
            children: L("sidecart.magnetShellIncluded")
        }), T[36] = ec, T[37] = L, T[38] = v) : v = T[38], T[39] !== K ? (g = K && (0, l.jsx)("div", {
            className: "body-3 text-neutral-600",
            children: K
        }), T[39] = K, T[40] = g) : g = T[40], T[41] !== p || T[42] !== x || T[43] !== v || T[44] !== g ? (b = (0, l.jsx)("div", {
            className: "flex items-center justify-between",
            children: (0, l.jsxs)("div", {
                className: p,
                children: [x, v, g]
            })
        }), T[41] = p, T[42] = x, T[43] = v, T[44] = g, T[45] = b) : b = T[45], T[46] !== W || T[47] !== ee || T[48] !== en ? (w = (0, l.jsx)(e1, {
            maxQuantity: W,
            selectedQuantity: ee,
            onChange: en,
            size: "small"
        }), T[46] = W, T[47] = ee, T[48] = en, T[49] = w) : w = T[49], T[50] !== F ? (j = F("controls.remove"), T[50] = F, T[51] = j) : j = T[51], T[52] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, l.jsx)("div", {
            className: "text-black transition-all duration-300 ease-in-out hover:text-neutral-600",
            children: (0, l.jsx)(D.default, {
                name: "trash",
                size: 24,
                strokeWidth: 3.5,
                color: "current"
            })
        }), T[52] = k) : k = T[52], T[53] !== el || T[54] !== j ? (N = (0, l.jsx)("button", {
            onClick: el,
            tabIndex: 0,
            type: "button",
            "aria-label": j,
            children: k
        }), T[53] = el, T[54] = j, T[55] = N) : N = T[55], T[56] !== eu || T[57] !== U || T[58] !== er || T[59] !== eo ? (E = eo && (0, l.jsx)("div", {
            className: (0, y.default)("mb-32 ms-auto block self-end text-end md:hidden", !eu && "me-16"),
            children: (0, l.jsx)(e3, {
                label: eo,
                loading: U,
                compareAtLabel: er
            })
        }), T[56] = eu, T[57] = U, T[58] = er, T[59] = eo, T[60] = E) : E = T[60], T[61] !== w || T[62] !== N || T[63] !== E ? (C = (0, l.jsxs)("div", {
            className: "flex items-center gap-16",
            children: [w, N, E]
        }), T[61] = w, T[62] = N, T[63] = E, T[64] = C) : C = T[64], T[65] !== f || T[66] !== b || T[67] !== C ? (S = (0, l.jsxs)("div", {
            className: f,
            children: [b, C]
        }), T[65] = f, T[66] = b, T[67] = C, T[68] = S) : S = T[68], T[69] !== eu || T[70] !== U || T[71] !== er || T[72] !== eo ? (R = eo && (0, l.jsx)("div", {
            className: (0, y.default)("hidden text-end md:block", !eu && "me-16"),
            children: (0, l.jsx)(e3, {
                label: eo,
                loading: U,
                compareAtLabel: er
            })
        }), T[69] = eu, T[70] = U, T[71] = er, T[72] = eo, T[73] = R) : R = T[73], T[74] !== h || T[75] !== S || T[76] !== R || T[77] !== m ? (I = (0, l.jsxs)("div", {
            className: m,
            children: [h, S, R]
        }), T[74] = h, T[75] = S, T[76] = R, T[77] = m, T[78] = I) : I = T[78], I
    };
    e.i(286941);
    var e5 = e.i(126762);
    let e8 = e => {
        let t, r, a, i, s, c = (0, n.c)(13),
            {
                cartLine: d,
                trustServices: u
            } = e,
            {
                setDrawerStep: m
            } = (0, o.useContext)(f.DrawerContext);
        c[0] !== m || c[1] !== u ? (t = e => {
            m({
                step: "trustServices",
                options: {
                    addedProduct: e,
                    trustServices: u,
                    cameFromCart: !0
                }
            })
        }, c[0] = m, c[1] = u, c[2] = t) : t = c[2];
        let h = t;
        c[3] !== u ? (r = u ? .find(e9) || {}, c[3] = u, c[4] = r) : r = c[4];
        let {
            serviceUpsellLink: p
        } = r;
        return p ? (c[5] !== d || c[6] !== h ? (a = () => h(d), c[5] = d, c[6] = h, c[7] = a) : a = c[7], c[8] !== p ? (i = (0, l.jsx)(e5.default, {
            className: "text-left leading-7 body-3 rich-text-p:my-0",
            content: p
        }), c[8] = p, c[9] = i) : i = c[9], c[10] !== a || c[11] !== i ? (s = (0, l.jsx)("button", {
            type: "button",
            onClick: a,
            className: "flex gap-4 rounded-md border border-gray-100 bg-neutral-50 px-12 py-16",
            "data-cs-override-id": "cart-trust-panel-access",
            children: i
        }), c[10] = a, c[11] = i, c[12] = s) : s = c[12], s) : null
    };

    function e9(e) {
        return e.serviceUpsellLink
    }
    var e7 = e.i(62727);
    let te = e => {
            let t, r, a, i, s, o, c, d, u = (0, n.c)(24),
                {
                    cartLine: m,
                    cartLines: h
                } = e,
                {
                    id: f,
                    linkedProductLineId: p
                } = m,
                {
                    getTrustServicesFrom: x
                } = (0, F.useTrustServicesApi)();
            u[0] !== h || u[1] !== f ? (t = (0, P.default)(f, h), u[0] = h, u[1] = f, u[2] = t) : t = u[2];
            let v = t,
                {
                    countryCode: g
                } = (0, T.default)();
            if (u[3] !== m.handle || u[4] !== m.variantId || u[5] !== h || u[6] !== g || u[7] !== x) {
                let e = x(m.handle);
                r = (0, e7.default)(e, g, h, [m.variantId]), u[3] = m.handle, u[4] = m.variantId, u[5] = h, u[6] = g, u[7] = x, u[8] = r
            } else r = u[8];
            let b = r,
                y = b.length > 0;
            return p ? null : (u[9] !== m ? (a = (0, l.jsx)(e6, {
                cartLine: m
            }), u[9] = m, u[10] = a) : a = u[10], u[11] !== v ? (i = v && (0, l.jsx)(Q, {
                linkedProduct: v
            }), u[11] = v, u[12] = i) : i = u[12], u[13] !== m || u[14] !== b || u[15] !== y ? (s = y && (0, l.jsx)(e8, {
                cartLine: m,
                trustServices: b
            }), u[13] = m, u[14] = b, u[15] = y, u[16] = s) : s = u[16], u[17] !== a || u[18] !== i || u[19] !== s ? (o = (0, l.jsxs)("div", {
                className: "flex flex-col gap-16 px-16 py-24 md:gap-24 md:p-32",
                "data-testid": "sidecart-product",
                children: [a, i, s]
            }), u[17] = a, u[18] = i, u[19] = s, u[20] = o) : o = u[20], u[21] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, l.jsx)("hr", {
                className: "mx-16 border-0 border-t border-neutral-300 last:hidden md:mx-32"
            }), u[21] = c) : c = u[21], u[22] !== o ? (d = (0, l.jsxs)(l.Fragment, {
                children: [o, c]
            }), u[22] = o, u[23] = d) : d = u[23], d)
        },
        tt = () => {
            let e, t, r = (0, n.c)(4),
                {
                    t: a
                } = (0, d.useTranslation)("cart");
            return r[0] !== a ? (e = a("sidecart.maxQuantityReached"), r[0] = a, r[1] = e) : e = r[1], r[2] !== e ? (t = (0, l.jsx)("p", {
                "data-testid": "sidecart-error",
                className: "bg-[#FDC] px-16 py-8 text-center body-3",
                children: e
            }), r[2] = e, r[3] = t) : t = r[3], t
        };
    var tr = e.i(465235),
        ta = e.i(285700),
        tl = e.i(456298);

    function tn(e, t) {
        let r = (0, ta.useQueryClient)(t);
        return function(e = {}, t) {
            let r = (0, ta.useQueryClient)(t).getMutationCache(),
                a = o.useRef(e),
                l = o.useRef(null);
            return l.current || (l.current = ti(r, e)), o.useEffect(() => {
                a.current = e
            }), o.useSyncExternalStore(o.useCallback(e => r.subscribe(() => {
                let t = (0, tl.replaceEqualDeep)(l.current, ti(r, a.current));
                l.current !== t && (l.current = t, tr.notifyManager.schedule(e))
            }), [r]), () => l.current, () => l.current)
        }({
            filters: { ...e,
                status: "pending"
            }
        }, r).length
    }

    function ti(e, t) {
        return e.findAll(t.filters).map(e => t.select ? t.select(e) : e.state)
    }
    let ts = () => {
            var e;
            let t, r, a, l, i, s, c = (0, n.c)(6),
                {
                    country: d
                } = (0, V.default)();
            c[0] !== d ? (t = [...z.CART_QUERY_KEY, d], c[0] = d, c[1] = t) : t = c[1];
            let u = t;
            c[2] !== u ? (r = {
                queryKey: u
            }, c[2] = u, c[3] = r) : r = c[3];
            let m = (e = r, s = (i = (0, ta.useQueryClient)(void 0)).getQueryCache(), o.useSyncExternalStore(o.useCallback(e => s.subscribe(tr.notifyManager.batchCalls(e)), [s]), () => i.isFetching(e), () => i.isFetching(e)));
            c[4] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                mutationKey: ["updateQuantity"]
            }, c[4] = a) : a = c[4];
            let h = tn(a);
            c[5] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                mutationKey: ["removeFromCart"]
            }, c[5] = l) : l = c[5];
            let f = tn(l);
            return m > 0 || h > 0 || f > 0
        },
        to = e => {
            let t, r, a, s, o, c, u = (0, n.c)(18),
                {
                    bitcoinVoucherImage: m,
                    voucherValue: h,
                    crypto: f
                } = e,
                p = ts(),
                {
                    t: x
                } = (0, d.useTranslation)("cart");
            return u[0] !== x ? (t = x("sidecart.voucher"), u[0] = x, u[1] = t) : t = u[1], u[2] !== m || u[3] !== t ? (r = (0, l.jsx)("div", {
                className: "flex h-[96px] min-w-[96px] items-center justify-center self-center rounded-xs bg-neutral-100",
                children: (0, l.jsx)(i.default, {
                    src: m,
                    alt: t,
                    width: 100,
                    height: 100
                })
            }), u[2] = m, u[3] = t, u[4] = r) : r = u[4], u[5] !== p ? (a = p && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    "data-testid": "skeleton-loader",
                    className: "mb-12 h-16 max-w-256 animate-pulse rounded-xs bg-neutral-200"
                }), (0, l.jsx)("div", {
                    "data-testid": "skeleton-loader",
                    className: "h-8 max-w-160 animate-pulse rounded-xs bg-neutral-200"
                })]
            }), u[5] = p, u[6] = a) : a = u[6], u[7] !== p || u[8] !== f || u[9] !== x || u[10] !== h ? (s = !p && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("span", {
                    className: "body-1-semi-bold",
                    children: x("BTC" === f ? "sidecart.voucherTotalBitcoin" : "sidecart.voucherTotalSolana", {
                        amount: h
                    })
                }), (0, l.jsx)("div", {
                    className: "text-neutral-600 body-3",
                    children: x("sidecart.voucherDescription")
                })]
            }), u[7] = p, u[8] = f, u[9] = x, u[10] = h, u[11] = s) : s = u[11], u[12] !== a || u[13] !== s ? (o = (0, l.jsxs)("div", {
                className: "flex w-full flex-col justify-center",
                children: [a, s]
            }), u[12] = a, u[13] = s, u[14] = o) : o = u[14], u[15] !== r || u[16] !== o ? (c = (0, l.jsxs)("div", {
                className: "flex items-center gap-16 p-16 py-16 md:p-32 md:py-16",
                "data-testid": "sidecart-crypto-voucher",
                children: [r, o]
            }), u[15] = r, u[16] = o, u[17] = c) : c = u[17], c
        },
        tc = () => {
            let e, t, r = (0, n.c)(4),
                {
                    cart: a
                } = (0, B.default)();
            if (!a ? .cryptoVoucherValue ? .BTC && !a ? .cryptoVoucherValue ? .SOL) return null;
            r[0] !== a.cryptoVoucherValue ? (e = Object.entries(a.cryptoVoucherValue), r[0] = a.cryptoVoucherValue, r[1] = e) : e = r[1];
            let i = e;
            return i ? (r[2] !== i ? (t = (0, l.jsx)(l.Fragment, {
                children: i.map(td)
            }), r[2] = i, r[3] = t) : t = r[3], t) : null
        };

    function td(e) {
        let [t, r] = e;
        return 0 === r ? null : "BTC" === t ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(to, {
                bitcoinVoucherImage: "https://cdn.shopify.com/s/files/1/2974/4858/files/Shop_cart_voucher_1.png?v=1730977830",
                voucherValue: r,
                crypto: t
            }, t), (0, l.jsx)("hr", {
                className: "mx-16 border-0 border-t border-neutral-300 last:hidden md:mx-32"
            })]
        }) : "SOL" === t ? (0, l.jsx)(to, {
            bitcoinVoucherImage: "https://cdn.shopify.com/s/files/1/0762/0952/0914/files/solana_voucher.png?v=1746624572",
            voucherValue: r,
            crypto: t
        }, t) : void 0
    }
    e.s(["default", 0, e => {
        let t, r, a, i, s, o, c, d = (0, n.c)(19),
            {
                cart: u,
                allVoucherHandles: m
            } = e;
        if (d[0] !== m || d[1] !== u.cartLines || d[2] !== u.error) {
            let e;
            d[7] !== m ? (e = e => {
                let {
                    handle: t
                } = e;
                return !m.includes(t)
            }, d[7] = m, d[8] = e) : e = d[8];
            let n = u.cartLines.filter(e).reverse();
            d[9] !== u.error ? (i = u.error === I.CartError.MAX_QUANTITY_REACHED && (0, l.jsx)(tt, {}), d[9] = u.error, d[10] = i) : i = d[10], t = "border-b border-neutral-300 bg-white", r = "sidecart-body", a = n.map(e => (0, l.jsx)(te, {
                cartLines: n,
                cartLine: e
            }, e.id)), d[0] = m, d[1] = u.cartLines, d[2] = u.error, d[3] = t, d[4] = r, d[5] = a, d[6] = i
        } else t = d[3], r = d[4], a = d[5], i = d[6];
        return d[11] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, l.jsx)(tc, {}), d[11] = s) : s = d[11], d[12] !== t || d[13] !== r || d[14] !== a ? (o = (0, l.jsxs)("div", {
            className: t,
            "data-testid": r,
            children: [a, s]
        }), d[12] = t, d[13] = r, d[14] = a, d[15] = o) : o = d[15], d[16] !== i || d[17] !== o ? (c = (0, l.jsxs)(l.Fragment, {
            children: [i, o]
        }), d[16] = i, d[17] = o, d[18] = c) : c = d[18], c
    }], 786864), e.s([], 364422);
    let tu = {
        AE: {
            currency: "AED",
            threshold: 740
        },
        AG: {
            currency: "EUR",
            threshold: 190
        },
        AI: {
            currency: "EUR",
            threshold: 190
        },
        AO: {
            currency: "EUR",
            threshold: 190
        },
        AR: {
            currency: "EUR",
            threshold: 190
        },
        AS: {
            currency: "EUR",
            threshold: 190
        },
        AT: {
            currency: "EUR",
            threshold: 190
        },
        AU: {
            currency: "AUD",
            threshold: 320
        },
        AW: {
            currency: "EUR",
            threshold: 190
        },
        BB: {
            currency: "EUR",
            threshold: 190
        },
        BD: {
            currency: "EUR",
            threshold: 190
        },
        BE: {
            currency: "EUR",
            threshold: 190
        },
        BF: {
            currency: "EUR",
            threshold: 190
        },
        BG: {
            currency: "BGN",
            threshold: 370
        },
        BH: {
            currency: "EUR",
            threshold: 190
        },
        BI: {
            currency: "EUR",
            threshold: 190
        },
        BJ: {
            currency: "EUR",
            threshold: 190
        },
        BM: {
            currency: "EUR",
            threshold: 190
        },
        BN: {
            currency: "EUR",
            threshold: 190
        },
        BO: {
            currency: "EUR",
            threshold: 190
        },
        BR: {
            currency: "USD",
            threshold: 190
        },
        BS: {
            currency: "EUR",
            threshold: 190
        },
        BT: {
            currency: "EUR",
            threshold: 190
        },
        BW: {
            currency: "EUR",
            threshold: 190
        },
        BZ: {
            currency: "EUR",
            threshold: 190
        },
        CA: {
            currency: "CAD",
            threshold: 285
        },
        CD: {
            currency: "EUR",
            threshold: 190
        },
        CH: {
            currency: "CHF",
            threshold: 200
        },
        CK: {
            currency: "EUR",
            threshold: 190
        },
        CL: {
            currency: "EUR",
            threshold: 190
        },
        CM: {
            currency: "EUR",
            threshold: 190
        },
        CN: {
            currency: "CNY",
            threshold: 1460
        },
        CO: {
            currency: "EUR",
            threshold: 190
        },
        CR: {
            currency: "EUR",
            threshold: 190
        },
        CV: {
            currency: "EUR",
            threshold: 190
        },
        CW: {
            currency: "EUR",
            threshold: 190
        },
        CY: {
            currency: "EUR",
            threshold: 190
        },
        CZ: {
            currency: "CZK",
            threshold: 4750
        },
        DE: {
            currency: "EUR",
            threshold: 190
        },
        DJ: {
            currency: "EUR",
            threshold: 190
        },
        DK: {
            currency: "DKK",
            threshold: 1420
        },
        DM: {
            currency: "EUR",
            threshold: 190
        },
        DO: {
            currency: "EUR",
            threshold: 190
        },
        EC: {
            currency: "EUR",
            threshold: 190
        },
        EE: {
            currency: "EUR",
            threshold: 190
        },
        ES: {
            currency: "EUR",
            threshold: 190
        },
        ET: {
            currency: "EUR",
            threshold: 190
        },
        FI: {
            currency: "EUR",
            threshold: 190
        },
        FJ: {
            currency: "EUR",
            threshold: 190
        },
        FK: {
            currency: "EUR",
            threshold: 190
        },
        FR: {
            currency: "EUR",
            threshold: 190
        },
        GA: {
            currency: "EUR",
            threshold: 190
        },
        GB: {
            currency: "GBP",
            threshold: 170
        },
        GD: {
            currency: "EUR",
            threshold: 190
        },
        GH: {
            currency: "EUR",
            threshold: 190
        },
        GM: {
            currency: "EUR",
            threshold: 190
        },
        GN: {
            currency: "EUR",
            threshold: 190
        },
        GR: {
            currency: "EUR",
            threshold: 190
        },
        GT: {
            currency: "EUR",
            threshold: 190
        },
        GU: {
            currency: "EUR",
            threshold: 190
        },
        GW: {
            currency: "EUR",
            threshold: 190
        },
        GY: {
            currency: "EUR",
            threshold: 190
        },
        HK: {
            currency: "HKD",
            threshold: 1550
        },
        HN: {
            currency: "EUR",
            threshold: 190
        },
        HR: {
            currency: "EUR",
            threshold: 190
        },
        HU: {
            currency: "HUF",
            threshold: 78e3
        },
        ID: {
            currency: "EUR",
            threshold: 190
        },
        IE: {
            currency: "EUR",
            threshold: 190
        },
        IL: {
            currency: "ILS",
            threshold: 720
        },
        IT: {
            currency: "EUR",
            threshold: 190
        },
        JM: {
            currency: "EUR",
            threshold: 190
        },
        JO: {
            currency: "EUR",
            threshold: 190
        },
        JP: {
            currency: "JPY",
            threshold: 30500
        },
        KE: {
            currency: "EUR",
            threshold: 190
        },
        KG: {
            currency: "EUR",
            threshold: 190
        },
        KI: {
            currency: "EUR",
            threshold: 190
        },
        KM: {
            currency: "EUR",
            threshold: 190
        },
        KN: {
            currency: "EUR",
            threshold: 190
        },
        KR: {
            currency: "KRW",
            threshold: 287e3
        },
        KY: {
            currency: "EUR",
            threshold: 190
        },
        KZ: {
            currency: "EUR",
            threshold: 190
        },
        LA: {
            currency: "EUR",
            threshold: 190
        },
        LB: {
            currency: "EUR",
            threshold: 190
        },
        LC: {
            currency: "EUR",
            threshold: 190
        },
        LR: {
            currency: "EUR",
            threshold: 190
        },
        LS: {
            currency: "EUR",
            threshold: 190
        },
        LT: {
            currency: "EUR",
            threshold: 190
        },
        LU: {
            currency: "EUR",
            threshold: 190
        },
        LV: {
            currency: "EUR",
            threshold: 190
        },
        MG: {
            currency: "EUR",
            threshold: 190
        },
        MH: {
            currency: "EUR",
            threshold: 190
        },
        MO: {
            currency: "EUR",
            threshold: 190
        },
        MR: {
            currency: "EUR",
            threshold: 190
        },
        MS: {
            currency: "EUR",
            threshold: 190
        },
        MT: {
            currency: "EUR",
            threshold: 190
        },
        MU: {
            currency: "EUR",
            threshold: 190
        },
        MV: {
            currency: "EUR",
            threshold: 190
        },
        MW: {
            currency: "EUR",
            threshold: 190
        },
        MZ: {
            currency: "EUR",
            threshold: 190
        },
        NA: {
            currency: "EUR",
            threshold: 190
        },
        NG: {
            currency: "EUR",
            threshold: 190
        },
        NI: {
            currency: "EUR",
            threshold: 190
        },
        NL: {
            currency: "EUR",
            threshold: 190
        },
        NO: {
            currency: "NOK",
            threshold: 2230
        },
        NR: {
            currency: "EUR",
            threshold: 190
        },
        NU: {
            currency: "EUR",
            threshold: 190
        },
        NZ: {
            currency: "NZD",
            threshold: 350
        },
        PA: {
            currency: "EUR",
            threshold: 190
        },
        PE: {
            currency: "EUR",
            threshold: 190
        },
        PG: {
            currency: "EUR",
            threshold: 190
        },
        PL: {
            currency: "PLN",
            threshold: 815
        },
        PT: {
            currency: "EUR",
            threshold: 190
        },
        PW: {
            currency: "EUR",
            threshold: 190
        },
        PY: {
            currency: "EUR",
            threshold: 190
        },
        QA: {
            currency: "EUR",
            threshold: 190
        },
        RO: {
            currency: "RON",
            threshold: 950
        },
        RW: {
            currency: "EUR",
            threshold: 190
        },
        SA: {
            currency: "SAR",
            threshold: 800
        },
        SB: {
            currency: "EUR",
            threshold: 190
        },
        SC: {
            currency: "EUR",
            threshold: 190
        },
        SE: {
            currency: "SEK",
            threshold: 2200
        },
        SG: {
            currency: "SGD",
            threshold: 275
        },
        SI: {
            currency: "EUR",
            threshold: 190
        },
        SK: {
            currency: "EUR",
            threshold: 190
        },
        SL: {
            currency: "EUR",
            threshold: 190
        },
        SN: {
            currency: "EUR",
            threshold: 190
        },
        SR: {
            currency: "EUR",
            threshold: 190
        },
        SV: {
            currency: "EUR",
            threshold: 190
        },
        SZ: {
            currency: "EUR",
            threshold: 190
        },
        TC: {
            currency: "EUR",
            threshold: 190
        },
        TD: {
            currency: "EUR",
            threshold: 190
        },
        TG: {
            currency: "EUR",
            threshold: 190
        },
        TH: {
            currency: "THB",
            threshold: 6750
        },
        TM: {
            currency: "THB",
            threshold: 190
        },
        TO: {
            currency: "EUR",
            threshold: 190
        },
        TT: {
            currency: "EUR",
            threshold: 190
        },
        TV: {
            currency: "EUR",
            threshold: 190
        },
        TW: {
            currency: "NTD",
            threshold: 6500
        },
        TZ: {
            currency: "EUR",
            threshold: 190
        },
        UA: {
            currency: "EUR",
            threshold: 190
        },
        UG: {
            currency: "EUR",
            threshold: 190
        },
        US: {
            currency: "USD",
            threshold: 190
        },
        UY: {
            currency: "EUR",
            threshold: 190
        },
        UZ: {
            currency: "EUR",
            threshold: 190
        },
        VC: {
            currency: "EUR",
            threshold: 190
        },
        VE: {
            currency: "EUR",
            threshold: 190
        },
        VI: {
            currency: "EUR",
            threshold: 190
        },
        VU: {
            currency: "EUR",
            threshold: 190
        },
        ZA: {
            currency: "EUR",
            threshold: 190
        },
        ZM: {
            currency: "EUR",
            threshold: 190
        },
        ZW: {
            currency: "EUR",
            threshold: 190
        }
    };
    e.s(["default", 0, tu], 380522);
    let tm = e => {
        let t, r, a, l, i, s, o, c = (0, n.c)(16);
        c[0] !== e ? (t = void 0 === e ? {} : e, c[0] = e, c[1] = t) : t = c[1];
        let {
            overrideCartCookieName: d
        } = t;
        c[2] !== d ? (r = {
            overrideCartCookieName: d
        }, c[2] = d, c[3] = r) : r = c[3];
        let {
            cart: u
        } = (0, B.default)(r), {
            countryCode: m
        } = (0, T.default)(), {
            locale: h
        } = (0, _.useRouter)();
        c[4] === Symbol.for("react.memo_cache_sentinel") ? (a = {
            isFreeShipping: null,
            cartValueWithoutNonPhysicalProducts: null,
            freeShippingThreshold: null,
            formattedAmountBeforeFreeShipping: null
        }, c[4] = a) : a = c[4];
        let f = a;
        if (!u || !m || !h) return f;
        c[5] !== u.cost ? .totalAmount ? (l = u.cost ? .totalAmount || {}, c[5] = u.cost ? .totalAmount, c[6] = l) : l = c[6];
        let {
            amount: p,
            currencyCode: x
        } = l, v = void 0 === x ? "EUR" : x, g = tu[m];
        if (!g) return f;
        let {
            currency: b,
            threshold: y
        } = g;
        if (b !== v) return f;
        let w = (o = u.cartLines) ? o.reduce((e, t) => t.handle.startsWith("ledger-replace") || t.handle.startsWith("ledger-recover") ? e + parseFloat(t.cost.totalAmount.amount) : e, 0) : 0,
            j = u.cost ? .totalTaxAmount ? .amount || "0",
            k = parseFloat(void 0 === p ? "0" : p) - (w + parseFloat(j)),
            N = y - k;
        if (c[7] !== v || c[8] !== h || c[9] !== N) i = Intl.NumberFormat(h, {
            style: "currency",
            currency: v,
            trailingZeroDisplay: "stripIfInteger"
        }).format(N), c[7] = v, c[8] = h, c[9] = N, c[10] = i;
        else i = c[10];
        let E = i,
            C = k >= y;
        return c[11] !== k || c[12] !== E || c[13] !== C || c[14] !== y ? (s = {
            isFreeShipping: C,
            cartValueWithoutNonPhysicalProducts: k,
            freeShippingThreshold: y,
            formattedAmountBeforeFreeShipping: E
        }, c[11] = k, c[12] = E, c[13] = C, c[14] = y, c[15] = s) : s = c[15], s
    };
    e.s(["default", 0, tm], 576358), e.i(47620);
    let th = e => {
        let t, r, a, i, s, o, c, u, m = (0, n.c)(20),
            {
                overrideCartCookieName: h,
                className: f
            } = e;
        m[0] !== h ? (t = {
            overrideCartCookieName: h
        }, m[0] = h, m[1] = t) : t = m[1];
        let {
            cart: p
        } = (0, B.default)(t), {
            t: x
        } = (0, d.useTranslation)("cart"), v = ts();
        return p ? .cryptoVoucherValue ? .BTC || p ? .cryptoVoucherValue ? .SOL ? (m[2] !== f ? (r = (0, y.default)("flex items-center justify-between", f), m[2] = f, m[3] = r) : r = m[3], m[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, l.jsx)(D.default, {
            name: "dollar",
            size: 20
        }), m[4] = a) : a = m[4], m[5] !== x ? (i = x("sidecart.voucher"), m[5] = x, m[6] = i) : i = m[6], m[7] !== i ? (s = (0, l.jsxs)("p", {
            className: "flex items-center gap-4",
            children: [a, i]
        }), m[7] = i, m[8] = s) : s = m[8], m[9] !== p || m[10] !== v || m[11] !== x ? (o = !v && (0, l.jsxs)("div", {
            className: "flex items-center gap-8",
            children: [p.cryptoVoucherValue.BTC > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(N.default.TagHud, {
                    size: "medium",
                    color: "green",
                    label: x("sidecart.voucherTotalBTC", {
                        amount: p.cryptoVoucherValue.BTC
                    })
                }), (0, l.jsx)("span", {
                    className: "last:hidden",
                    children: "+"
                })]
            }), p.cryptoVoucherValue.SOL > 0 && (0, l.jsx)(N.default.TagHud, {
                size: "medium",
                color: "green",
                label: x("sidecart.voucherTotalSOL", {
                    amount: p.cryptoVoucherValue.SOL
                })
            })]
        }), m[9] = p, m[10] = v, m[11] = x, m[12] = o) : o = m[12], m[13] !== v ? (c = v && (0, l.jsx)("div", {
            "data-testid": "skeleton-loader",
            className: "h-8 w-144 animate-pulse rounded-xs bg-neutral-200"
        }), m[13] = v, m[14] = c) : c = m[14], m[15] !== r || m[16] !== s || m[17] !== o || m[18] !== c ? (u = (0, l.jsxs)("div", {
            className: r,
            "data-testid": "sidecart-crypto-voucher-footer",
            children: [s, o, c]
        }), m[15] = r, m[16] = s, m[17] = o, m[18] = c, m[19] = u) : u = m[19], u) : null
    };
    e.s(["default", 0, th], 264367), e.s(["default", 0, () => {
        let e, t, r, a, i, s, o = (0, n.c)(22),
            {
                t: c
            } = (0, d.useTranslation)("cart"),
            {
                cart: u,
                cartFetching: m
            } = (0, B.default)(),
            f = (0, _.useRouter)(),
            {
                locale: p
            } = f,
            x = u ? .cost ? .subtotalAmount ? .currencyCode ? ? "EUR",
            v = !m && u && u.totalQuantity > 0,
            g = v ? u.cost ? .totalAmount ? .amount : null,
            {
                isFreeShipping: b
            } = tm(),
            w = ts();
        o[0] !== x || o[1] !== p || o[2] !== g ? (e = Intl.NumberFormat(p, {
            style: "currency",
            currency: x,
            trailingZeroDisplay: "stripIfInteger"
        }).format(Number(g)), o[0] = x, o[1] = p, o[2] = g, o[3] = e) : e = o[3];
        let j = e;
        o[4] !== u ? .checkoutUrl || o[5] !== f ? (t = () => {
            u ? .checkoutUrl && f.push(u ? .checkoutUrl)
        }, o[4] = u ? .checkoutUrl, o[5] = f, o[6] = t) : t = o[6];
        let k = t;
        o[7] !== w || o[8] !== j || o[9] !== v || o[10] !== b || o[11] !== c ? (r = v && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: "body-3 flex flex-col justify-between gap-4",
                children: null !== b && (0, l.jsxs)("div", {
                    className: "flex h-24 flex-row items-center justify-between",
                    children: [(0, l.jsx)("div", {
                        className: "text-start text-neutral-700",
                        children: c("sidecart.estimatedShipping")
                    }), !w && (0, l.jsx)("div", {
                        className: (0, y.default)("text-end", b ? "" : "py-16"),
                        children: b ? (0, l.jsx)(N.default.TagHud, {
                            variant: "purple",
                            label: c("sidecart.freeShipping")
                        }) : c("sidecart.calculatedAtCheckout")
                    }), w && (0, l.jsx)("div", {
                        "data-testid": "skeleton-loader",
                        className: "h-8 w-64 animate-pulse self-center rounded-xs bg-neutral-200"
                    })]
                })
            }), (0, l.jsxs)("div", {
                className: "body-1-semi-bold flex justify-between",
                children: [(0, l.jsx)("div", {
                    children: c("sidecart.total")
                }), !w && (0, l.jsx)("div", {
                    "data-testid": "sidecart-total",
                    children: j
                }), w && (0, l.jsx)("div", {
                    "data-testid": "skeleton-loader",
                    className: "h-12 w-64 animate-pulse self-center rounded-xs bg-neutral-200"
                })]
            }), (0, l.jsx)(th, {
                className: "body-3 border-t border-neutral-300 pt-12 text-neutral-700"
            })]
        }), o[7] = w, o[8] = j, o[9] = v, o[10] = b, o[11] = c, o[12] = r) : r = o[12], o[13] !== c ? (a = c("sidecart.checkout"), o[13] = c, o[14] = a) : a = o[14];
        let E = !v;
        return o[15] !== k || o[16] !== a || o[17] !== E ? (i = (0, l.jsx)(h.default, {
            label: a,
            type: "submit",
            size: "medium",
            variant: "primary-black",
            isDisabled: E,
            onClick: k,
            dataCsOverrideId: "checkout-cta",
            isFull: !0
        }), o[15] = k, o[16] = a, o[17] = E, o[18] = i) : i = o[18], o[19] !== r || o[20] !== i ? (s = (0, l.jsxs)("div", {
            "data-testid": "sidecart-footer",
            className: "flex flex-col gap-12",
            children: [r, i]
        }), o[19] = r, o[20] = i, o[21] = s) : s = o[21], s
    }], 178387)
}, 529669, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var a = e.i(271179);
    e.i(108399);
    var l = e.i(860231);
    e.s(["default", 0, e => {
        let n, i, s, o = (0, r.c)(10),
            {
                drawerCloseRef: c,
                onClick: d,
                dataCsOverrideId: u,
                iconColor: m
            } = e,
            h = void 0 === m ? "black" : m,
            {
                t: f
            } = (0, a.useTranslation)("common");
        return o[0] !== f ? (n = f("close"), o[0] = f, o[1] = n) : n = o[1], o[2] !== h ? (i = (0, t.jsx)(l.default, {
            name: "close",
            size: 18,
            strokeWidth: 3.5,
            color: h
        }), o[2] = h, o[3] = i) : i = o[3], o[4] !== u || o[5] !== c || o[6] !== d || o[7] !== n || o[8] !== i ? (s = (0, t.jsx)("button", {
            "data-cs-override-id": u,
            ref: c,
            type: "button",
            className: "inline-block",
            onClick: d,
            "aria-label": n,
            "data-testid": "drawer-button",
            children: i
        }), o[4] = u, o[5] = c, o[6] = d, o[7] = n, o[8] = i, o[9] = s) : s = o[9], s
    }])
}, 996913, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(495854);
    e.s(["default", 0, e => {
        let l, n, i = (0, r.c)(6),
            {
                smallPrint: s,
                children: o
            } = e,
            c = !s;
        return i[0] !== c ? (l = (0, a.default)("sticky bottom-0 z-10 mt-auto border-t border-t-gray-300 bg-white", {
            "px-16 py-16 md:px-32": c
        }), i[0] = c, i[1] = l) : l = i[1], i[2] !== o || i[3] !== s || i[4] !== l ? (n = (0, t.jsxs)("div", {
            className: l,
            children: [s, o]
        }), i[2] = o, i[3] = s, i[4] = l, i[5] = n) : n = i[5], n
    }])
}, 382691, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.s(["default", 0, e => {
        let a, l = (0, r.c)(2),
            {
                children: n
            } = e;
        return l[0] !== n ? (a = (0, t.jsx)("div", {
            className: "sticky top-0 z-50 flex flex-row items-center gap-12 border-b border-b-gray-300 bg-white px-16 py-16 sm:px-32 sm:py-24",
            children: n
        }), l[0] = n, l[1] = a) : a = l[1], a
    }])
}, 748306, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var a = e.i(271179),
        l = e.i(126019),
        n = e.i(799444),
        i = e.i(468411);
    e.i(643781);
    var s = e.i(989606),
        o = e.i(516131),
        c = e.i(485885),
        d = e.i(766442),
        u = e.i(212376);
    e.i(923160);
    var m = e.i(217863);
    e.i(259936);
    var h = e.i(838779),
        f = e.i(79564);
    let p = [{
            productHandle: "ledger-nano-s-plus",
            accessoryHandle: "ledger-nano-pod/ledger-nano-s-plus-pod"
        }, {
            productHandle: "ledger-nano-x",
            accessoryHandle: "ledger-nano-pod/ledger-nano-x-pod"
        }],
        x = e => {
            let a, l, s, o, c, d = (0, r.c)(11),
                {
                    variantId: u
                } = e,
                m = Number(u);
            d[0] !== m ? (a = (0, i.toShopifyVariantId)(m), d[0] = m, d[1] = a) : a = d[1];
            let h = a;
            d[2] !== h ? (l = [h], d[2] = h, d[3] = l) : l = d[3];
            let {
                prices: f
            } = (0, n.default)(l);
            if (!f) return null;
            let {
                label: p,
                compareAtLabel: x
            } = f[0];
            return d[4] !== x ? (s = x && (0, t.jsx)("div", {
                className: "body-4 mt-auto text-gray-300 line-through",
                children: x
            }), d[4] = x, d[5] = s) : s = d[5], d[6] !== p ? (o = (0, t.jsx)("div", {
                className: "body-3",
                children: p
            }), d[6] = p, d[7] = o) : o = d[7], d[8] !== s || d[9] !== o ? (c = (0, t.jsxs)(t.Fragment, {
                children: [s, o]
            }), d[8] = s, d[9] = o, d[10] = c) : c = d[10], c
        };

    function v(e) {
        return e.tags.includes("Hardware Wallets")
    }
    e.s(["default", 0, e => {
        let n, g, b, y, w, j, k, N, E, C, S, R, I, T, P, F, _, D, L, A, O, M, U, G, V, z, H = (0, r.c)(62),
            {
                currentCart: B
            } = e,
            {
                t: K
            } = (0, a.useTranslation)("cart");
        H[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
            placement: "sidecartAccessory"
        }, H[0] = n) : n = H[0];
        let {
            add: $
        } = (0, f.default)(n), {
            isUSAvailable: W
        } = (0, d.default)(), {
            isDeviceAvailable: q
        } = (0, u.default)(), {
            recommendations: Q
        } = (0, o.default)(B);
        H[1] !== Q ? (g = Q || [], H[1] = Q, H[2] = g) : g = H[2];
        let {
            summaries: Y
        } = (0, c.default)(g);
        if (H[3] !== $ || H[4] !== B ? .cartLines || H[5] !== q || H[6] !== W || H[7] !== Y || H[8] !== K) {
            S = Symbol.for("react.early_return_sentinel");
            e: {
                let e, t, r = B ? .cartLines.filter(v);
                if (!r) {
                    S = null;
                    break e
                }
                H[18] !== $ ? (e = e => {
                    let {
                        variantId: t,
                        handle: r,
                        maxQuantityAllowed: a
                    } = e;
                    $([{
                        product: {
                            handle: r,
                            maxQuantityAllowed: a
                        },
                        variantId: (0, i.toShopifyVariantId)(t)
                    }])
                }, H[18] = $, H[19] = e) : e = H[19],
                y = e;
                let a = r[0];w = (t = p.find(({
                    productHandle: e
                }) => e === a ? .handle)) ? Y.find(({
                    handle: e
                }) => e === t.accessoryHandle) : null;
                let l = w ? .availableForSale && w && W((0, i.toShopifyVariantId)(w.variantId)) && q(w.sku);
                if (!w || !l) {
                    S = null;
                    break e
                }
                N = w.handle,
                E = "flex flex-col bg-neutral-50 p-16 pb-0 md:p-32 md:pb-0",
                C = "cart-crosssell-highlight-section",
                k = "bg-metallic rounded-xs",
                b = h.default,
                j = K("sidecart.highlightProductTitle", {
                    productTitle: a.productTitle
                })
            }
            H[3] = $, H[4] = B ? .cartLines, H[5] = q, H[6] = W, H[7] = Y, H[8] = K, H[9] = b, H[10] = y, H[11] = w, H[12] = j, H[13] = k, H[14] = N, H[15] = E, H[16] = C, H[17] = S
        } else b = H[9], y = H[10], w = H[11], j = H[12], k = H[13], N = H[14], E = H[15], C = H[16], S = H[17];
        if (S !== Symbol.for("react.early_return_sentinel")) return S;
        H[20] !== b || H[21] !== j ? (R = (0, t.jsx)(b, {
            label: j
        }), H[20] = b, H[21] = j, H[22] = R) : R = H[22], H[23] !== w.image.url ? (I = (0, t.jsx)(l.default, {
            src: w.image.url,
            alt: "",
            className: "h-112 w-112 flex-auto object-contain",
            width: 112,
            height: 112
        }), H[23] = w.image.url, H[24] = I) : I = H[24], H[25] !== w.title ? (T = (0, t.jsx)("span", {
            className: "heading-5-semi-bold",
            children: w.title
        }), H[25] = w.title, H[26] = T) : T = H[26], H[27] === Symbol.for("react.memo_cache_sentinel") ? (P = (0, t.jsx)("span", {
            className: "body-3",
            children: "Allows you to keep your Ledger Nano secure."
        }), H[27] = P) : P = H[27], H[28] !== w.rating || H[29] !== w.totalReviews ? (F = w.totalReviews > 0 && (0, t.jsx)(m.default, {
            rating: w.rating,
            size: "small"
        }), H[28] = w.rating, H[29] = w.totalReviews, H[30] = F) : F = H[30], H[31] !== F ? (_ = (0, t.jsx)("div", {
            children: F
        }), H[31] = F, H[32] = _) : _ = H[32];
        let Z = `${w.variantId}`;
        return H[33] !== Z ? (D = (0, t.jsx)(x, {
            variantId: Z
        }), H[33] = Z, H[34] = D) : D = H[34], H[35] !== K ? (L = K("sidecart.addToCart"), H[35] = K, H[36] = L) : L = H[36], H[37] !== y || H[38] !== w ? (A = () => y(w), H[37] = y, H[38] = w, H[39] = A) : A = H[39], H[40] !== L || H[41] !== A ? (O = (0, t.jsx)(s.default, {
            label: L,
            onClick: A,
            variant: "primary-black",
            icon: "cart",
            size: "small",
            dataCsOverrideId: "add-to-cart-bestseller-highlight"
        }), H[40] = L, H[41] = A, H[42] = O) : O = H[42], H[43] !== D || H[44] !== O ? (M = (0, t.jsxs)("div", {
            className: "mt-16 flex flex-row items-center gap-8",
            children: [D, O]
        }), H[43] = D, H[44] = O, H[45] = M) : M = H[45], H[46] !== T || H[47] !== _ || H[48] !== M ? (U = (0, t.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [T, P, _, M]
        }), H[46] = T, H[47] = _, H[48] = M, H[49] = U) : U = H[49], H[50] !== I || H[51] !== U ? (G = (0, t.jsxs)("div", {
            className: "flex gap-16 pt-16 pr-48 pb-24 pl-16",
            children: [I, U]
        }), H[50] = I, H[51] = U, H[52] = G) : G = H[52], H[53] !== G || H[54] !== k || H[55] !== R ? (V = (0, t.jsxs)("div", {
            className: k,
            children: [R, G]
        }), H[53] = G, H[54] = k, H[55] = R, H[56] = V) : V = H[56], H[57] !== V || H[58] !== N || H[59] !== E || H[60] !== C ? (z = (0, t.jsx)("div", {
            className: E,
            "data-cs-override-id": C,
            children: V
        }, N), H[57] = V, H[58] = N, H[59] = E, H[60] = C, H[61] = z) : z = H[61], z
    }])
}, 157762, 458902, 396106, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(495854);
    e.i(664157);
    var l = e.i(271179),
        n = e.i(191788);
    e.i(108399);
    var i = e.i(860231);
    let s = e => {
        let s, o, c, d, u = (0, r.c)(11),
            {
                textToCopy: m,
                className: h
            } = e,
            [f, p] = (0, n.useState)(!1),
            {
                t: x
            } = (0, l.useTranslation)("common");
        u[0] !== m ? (s = () => {
            navigator ? .clipboard && (navigator.clipboard.writeText(m), p(!0))
        }, u[0] = m, u[1] = s) : s = u[1];
        let v = s;
        return navigator.clipboard ? (u[2] !== h ? (o = (0, a.default)("text-purple body-4", h), u[2] = h, u[3] = o) : o = u[3], u[4] !== f || u[5] !== x ? (c = f ? (0, t.jsxs)("div", {
            className: "flex items-center justify-center gap-4",
            children: [(0, t.jsx)("span", {
                children: x("productCards.copied")
            }), (0, t.jsx)(i.default, {
                name: "check",
                size: 14,
                strokeWidth: 2.5,
                color: "current"
            })]
        }) : (0, t.jsx)("span", {
            children: x("productCards.copyCode")
        }), u[4] = f, u[5] = x, u[6] = c) : c = u[6], u[7] !== v || u[8] !== o || u[9] !== c ? (d = (0, t.jsx)("button", {
            type: "button",
            onClick: v,
            className: o,
            children: c
        }), u[7] = v, u[8] = o, u[9] = c, u[10] = d) : d = u[10], d) : null
    };
    e.s(["default", 0, s], 458902), e.s([], 396106), e.i(286941);
    var o = e.i(126762);
    e.s(["default", 0, e => {
        let l, n, i, c, d = (0, r.c)(13),
            {
                promoInfoText: u,
                theme: m,
                promoInfoLink: h,
                clipboardCopyClassName: f
            } = e,
            p = "light" === m ? "bg-purple-100" : "bg-neutral-700";
        return d[0] !== p ? (l = (0, a.default)("flex w-fit items-center gap-16 rounded-xs p-8", p), d[0] = p, d[1] = l) : l = d[1], d[2] !== u || d[3] !== m ? (n = u && (0, t.jsx)(o.default, {
            className: (0, a.default)("text-left body-4 rich-text-p:my-0", {
                "rich-text-p:text-white": "dark" === m
            }),
            content: u
        }), d[2] = u, d[3] = m, d[4] = n) : n = d[4], d[5] !== f || d[6] !== h || d[7] !== m ? (i = h && (0, t.jsx)("div", {
            className: (0, a.default)("body-4", "light" === m ? "text-purple-800" : "text-purple"),
            children: h.textToCopy ? (0, t.jsx)(s, {
                textToCopy: h.textToCopy,
                className: f
            }) : h.label
        }), d[5] = f, d[6] = h, d[7] = m, d[8] = i) : i = d[8], d[9] !== l || d[10] !== n || d[11] !== i ? (c = (0, t.jsxs)("div", {
            className: l,
            children: [n, i]
        }), d[9] = l, d[10] = n, d[11] = i, d[12] = c) : c = d[12], c
    }], 157762)
}, 705224, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var a = e.i(271179),
        l = e.i(191788),
        n = e.i(215217),
        i = e.i(719363);
    e.i(396415);
    var s = e.i(394228);
    e.i(991288);
    var o = e.i(992775);
    e.i(364422);
    var c = e.i(786864),
        d = e.i(178387),
        u = e.i(529669),
        m = e.i(996913),
        h = e.i(382691),
        f = e.i(748306),
        p = e.i(644594),
        x = e.i(126762),
        v = e.i(157762);
    let g = e => {
        let a, n, i, s = (0, r.c)(7),
            {
                cart: o
            } = e,
            {
                sideCartBanner: c
            } = (0, l.useContext)(p.DrawerContext);
        if (!c) return null;
        let {
            bannerInteraction: d,
            label: u,
            sideCartTopBannerVariantsSkuLimitation: m
        } = c;
        return 0 === m.length || m.some(e => o ? .cartLines.some(t => t.sku === e)) ? (s[0] !== u ? (a = (0, t.jsx)(x.default, {
            className: "rich-text-p:my-0",
            content: u
        }), s[0] = u, s[1] = a) : a = s[1], s[2] !== d ? (n = d && (0, t.jsx)(v.default, {
            theme: "light",
            promoInfoLink: d,
            clipboardCopyClassName: "text-purple-800"
        }), s[2] = d, s[3] = n) : n = s[3], s[4] !== a || s[5] !== n ? (i = (0, t.jsxs)("div", {
            className: "flex flex-row items-center justify-around bg-purple-100 px-32 py-8 rich-text-p:body-3 md:justify-center",
            children: [a, n]
        }), s[4] = a, s[5] = n, s[6] = i) : i = s[6], i) : null
    };
    var b = e.i(253770),
        y = e.i(576358);
    let w = () => {
        let e, l, n, i, s, o, c, d = (0, r.c)(17),
            {
                t: u
            } = (0, a.useTranslation)("cart"),
            {
                isFreeShipping: m,
                cartValueWithoutNonPhysicalProducts: h,
                freeShippingThreshold: f,
                formattedAmountBeforeFreeShipping: p
            } = (0, y.default)();
        if (m || !h || !f || !p) return null;
        d[0] !== u ? (e = u("sidecart.getFreeShipping"), d[0] = u, d[1] = e) : e = d[1], d[2] !== e ? (l = (0, t.jsx)("span", {
            className: "body-1 font-normal",
            children: e
        }), d[2] = e, d[3] = l) : l = d[3], d[4] !== p || d[5] !== u ? (n = u("sidecart.amountBeforeFreeShipping", {
            amount: p
        }), d[4] = p, d[5] = u, d[6] = n) : n = d[6], d[7] !== n ? (i = (0, t.jsx)("span", {
            className: "body-1-semi-bold",
            children: n
        }), d[7] = n, d[8] = i) : i = d[8], d[9] !== l || d[10] !== i ? (s = (0, t.jsxs)("div", {
            className: "mb-32 flex flex-col items-start justify-between md:flex-row md:items-center",
            children: [l, i]
        }), d[9] = l, d[10] = i, d[11] = s) : s = d[11];
        let x = `${h/f*100}%`;
        return d[12] !== x ? (o = (0, t.jsx)("div", {
            className: "h-[6px] rounded-xs bg-neutral-200",
            children: (0, t.jsx)("div", {
                className: "h-full rounded-xs bg-linear-to-r from-[#ffa97f] to-[#ff5300]",
                "data-testid": "progressbar",
                style: {
                    width: x
                }
            })
        }), d[12] = x, d[13] = o) : o = d[13], d[14] !== s || d[15] !== o ? (c = (0, t.jsxs)("div", {
            className: "border-b border-neutral-200 bg-neutral-50 px-16 py-16 sm:px-32",
            "data-cs-override-id": "shipping-threshold",
            children: [s, o]
        }), d[14] = s, d[15] = o, d[16] = c) : c = d[16], c
    };
    e.s(["default", 0, e => {
        let p, x, v, y, j, k, N, E, C, S, R, I, T, P = (0, r.c)(37),
            {
                toggleDrawer: F,
                itemCount: _,
                drawerRef: D,
                drawerCloseRef: L
            } = e,
            {
                cart: A
            } = (0, n.default)(),
            {
                cryptoVouchers: O
            } = (0, l.useContext)(b.cryptoVouchersContext),
            {
                handlesForAllCryptoVouchers: M
            } = O,
            {
                t: U
            } = (0, a.useTranslation)("cart"),
            G = (0, i.default)();
        return P[0] !== _ || P[1] !== U ? (p = U(_ > 0 ? "sidecart.title" : "sidecart.titleEmpty"), P[0] = _, P[1] = U, P[2] = p) : p = P[2], P[3] !== p ? (x = (0, t.jsx)("h3", {
            "data-testid": "drawer-title",
            className: "flex-1 heading-5-semi-bold",
            children: p
        }), P[3] = p, P[4] = x) : x = P[4], P[5] !== _ || P[6] !== F ? (v = (0, t.jsx)(s.default, {
            count: _,
            theme: "light",
            size: "small",
            onClick: F,
            isDisabled: !0
        }), P[5] = _, P[6] = F, P[7] = v) : v = P[7], P[8] !== L || P[9] !== F ? (y = (0, t.jsx)(u.default, {
            drawerCloseRef: L,
            onClick: F
        }), P[8] = L, P[9] = F, P[10] = y) : y = P[10], P[11] !== x || P[12] !== v || P[13] !== y ? (j = (0, t.jsxs)(h.default, {
            children: [x, v, y]
        }), P[11] = x, P[12] = v, P[13] = y, P[14] = j) : j = P[14], P[15] !== A ? (k = (0, t.jsx)(g, {
            cart: A
        }), N = A && (0, t.jsx)(w, {}), P[15] = A, P[16] = k, P[17] = N) : (k = P[16], N = P[17]), P[18] !== A || P[19] !== M ? (E = A && (0, t.jsx)(c.default, {
            allVoucherHandles: M,
            cart: A
        }), P[18] = A, P[19] = M, P[20] = E) : E = P[20], P[21] !== A || P[22] !== G ? (C = A && G && (0, t.jsx)(f.default, {
            currentCart: A
        }), P[21] = A, P[22] = G, P[23] = C) : C = P[23], P[24] !== A || P[25] !== D ? (S = (0, t.jsx)(o.default, {
            basedOn: A,
            drawerRef: D
        }), P[24] = A, P[25] = D, P[26] = S) : S = P[26], P[27] !== C || P[28] !== S || P[29] !== k || P[30] !== N || P[31] !== E ? (R = (0, t.jsxs)("div", {
            id: "sidecart-drawer",
            className: "flex-auto bg-neutral-50",
            children: [k, N, E, C, S]
        }), P[27] = C, P[28] = S, P[29] = k, P[30] = N, P[31] = E, P[32] = R) : R = P[32], P[33] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, t.jsx)(m.default, {
            children: (0, t.jsx)(d.default, {})
        }), P[33] = I) : I = P[33], P[34] !== R || P[35] !== j ? (T = (0, t.jsxs)(t.Fragment, {
            children: [j, R, I]
        }), P[34] = R, P[35] = j, P[36] = T) : T = P[36], T
    }], 705224)
}, 329460, e => {
    "use strict";
    let t, r, a;
    var l = e.i(191788),
        n = e.i(78270),
        i = e.i(675565),
        s = e.i(530106),
        o = e.i(993481),
        c = e.i(373483),
        d = e.i(264728),
        u = e.i(468327),
        m = e.i(587264),
        h = e.i(476925),
        f = e.i(28335),
        p = e.i(104067),
        x = e.i(627544),
        v = e.i(608404),
        g = e.i(156833),
        b = e.i(226586),
        y = e.i(896694),
        w = e.i(375621),
        j = e.i(331774),
        k = e.i(459778),
        N = e.i(426417),
        E = e.i(774664),
        C = e.i(472381),
        S = e.i(626171),
        R = e.i(785046),
        I = e.i(721867),
        T = e.i(448985),
        P = e.i(651358),
        F = e.i(778530),
        _ = e.i(636832),
        D = e.i(855367),
        L = e.i(565383),
        A = e.i(638403),
        O = e.i(780795);

    function M(e) {
        if (!e) return new Set;
        if ("function" == typeof e) return new Set(e());
        let t = new Set;
        for (let r of e.current) D.isElement(r.current) && t.add(r.current);
        return t
    }
    var U = ((t = U || {})[t.None = 0] = "None", t[t.InitialFocus = 1] = "InitialFocus", t[t.TabLock = 2] = "TabLock", t[t.FocusLock = 4] = "FocusLock", t[t.RestoreFocus = 8] = "RestoreFocus", t[t.AutoFocus = 16] = "AutoFocus", t);
    let G = Object.assign((0, E.forwardRefWithAs)(function(e, t) {
        let r = (0, l.useRef)(null),
            a = (0, g.useSyncRefs)(r, t),
            {
                initialFocus: n,
                initialFocusFallback: c,
                containers: d,
                features: u = 15,
                ...m
            } = e;
        (0, x.useServerHandoffComplete)() || (u = 0);
        let f = (0, h.useOwnerDocument)(r.current);
        ! function(e, {
            ownerDocument: t
        }) {
            let r = !!(8 & e),
                a = function(e = !0) {
                    let t = (0, l.useRef)(_.history.slice());
                    return (0, P.useWatch)(([e], [r]) => {
                        !0 === r && !1 === e && (0, A.microTask)(() => {
                            t.current.splice(0)
                        }), !1 === r && !0 === e && (t.current = _.history.slice())
                    }, [e, _.history, t]), (0, o.useEvent)(() => {
                        var e;
                        return null != (e = t.current.find(e => null != e && e.isConnected)) ? e : null
                    })
                }(r);
            (0, P.useWatch)(() => {
                r || (0, O.isActiveElement)(null == t ? void 0 : t.body) && (0, L.focusElement)(a())
            }, [r]), (0, I.useOnUnmount)(() => {
                r && (0, L.focusElement)(a())
            })
        }(u, {
            ownerDocument: f
        });
        let p = function(e, {
            ownerDocument: t,
            container: r,
            initialFocus: a,
            initialFocusFallback: n
        }) {
            let i = (0, l.useRef)(null),
                o = (0, s.useIsTopLayer)(!!(1 & e), "focus-trap#initial-focus"),
                c = (0, R.useIsMounted)();
            return (0, P.useWatch)(() => {
                if (0 === e) return;
                if (!o) {
                    null != n && n.current && (0, L.focusElement)(n.current);
                    return
                }
                let l = r.current;
                l && (0, A.microTask)(() => {
                    if (!c.current) return;
                    let r = null == t ? void 0 : t.activeElement;
                    if (null != a && a.current) {
                        if ((null == a ? void 0 : a.current) === r) {
                            i.current = r;
                            return
                        }
                    } else if (l.contains(r)) {
                        i.current = r;
                        return
                    }
                    if (null != a && a.current)(0, L.focusElement)(a.current);
                    else {
                        if (16 & e) {
                            if ((0, L.focusIn)(l, L.Focus.First | L.Focus.AutoFocus) !== L.FocusResult.Error) return
                        } else if ((0, L.focusIn)(l, L.Focus.First) !== L.FocusResult.Error) return;
                        if (null != n && n.current && ((0, L.focusElement)(n.current), (null == t ? void 0 : t.activeElement) === n.current)) return;
                        console.warn("There are no focusable elements inside the <FocusTrap />")
                    }
                    i.current = null == t ? void 0 : t.activeElement
                })
            }, [n, o, e]), i
        }(u, {
            ownerDocument: f,
            container: r,
            initialFocus: n,
            initialFocusFallback: c
        });
        ! function(e, {
            ownerDocument: t,
            container: r,
            containers: a,
            previousActiveElement: l
        }) {
            let n = (0, R.useIsMounted)(),
                s = !!(4 & e);
            (0, i.useEventListener)(null == t ? void 0 : t.defaultView, "focus", e => {
                if (!s || !n.current) return;
                let t = M(a);
                D.isHTMLElement(r.current) && t.add(r.current);
                let i = l.current;
                if (!i) return;
                let o = e.target;
                D.isHTMLElement(o) ? V(t, o) ? (l.current = o, (0, L.focusElement)(o)) : (e.preventDefault(), e.stopPropagation(), (0, L.focusElement)(i)) : (0, L.focusElement)(l.current)
            }, !0)
        }(u, {
            ownerDocument: f,
            container: r,
            containers: d,
            previousActiveElement: p
        });
        let v = (0, T.useTabDirection)(),
            b = (0, o.useEvent)(e => {
                if (!D.isHTMLElement(r.current)) return;
                let t = r.current;
                (0, N.match)(v.current, {
                    [T.Direction.Forwards]: () => {
                        (0, L.focusIn)(t, L.Focus.First, {
                            skipElements: [e.relatedTarget, c]
                        })
                    },
                    [T.Direction.Backwards]: () => {
                        (0, L.focusIn)(t, L.Focus.Last, {
                            skipElements: [e.relatedTarget, c]
                        })
                    }
                })
            }),
            y = (0, s.useIsTopLayer)(!!(2 & u), "focus-trap#tab-lock"),
            w = (0, S.useDisposables)(),
            j = (0, l.useRef)(!1),
            k = (0, E.useRender)();
        return l.default.createElement(l.default.Fragment, null, y && l.default.createElement(F.Hidden, {
            as: "button",
            type: "button",
            "data-headlessui-focus-guard": !0,
            onFocus: b,
            features: F.HiddenFeatures.Focusable
        }), k({
            ourProps: {
                ref: a,
                onKeyDown(e) {
                    "Tab" == e.key && (j.current = !0, w.requestAnimationFrame(() => {
                        j.current = !1
                    }))
                },
                onBlur(e) {
                    if (!(4 & u)) return;
                    let t = M(d);
                    D.isHTMLElement(r.current) && t.add(r.current);
                    let a = e.relatedTarget;
                    D.isHTMLorSVGElement(a) && "true" !== a.dataset.headlessuiFocusGuard && (V(t, a) || (j.current ? (0, L.focusIn)(r.current, (0, N.match)(v.current, {
                        [T.Direction.Forwards]: () => L.Focus.Next,
                        [T.Direction.Backwards]: () => L.Focus.Previous
                    }) | L.Focus.WrapAround, {
                        relativeTo: e.target
                    }) : D.isHTMLorSVGElement(e.target) && (0, L.focusElement)(e.target)))
                }
            },
            theirProps: m,
            defaultTag: "div",
            name: "FocusTrap"
        }), y && l.default.createElement(F.Hidden, {
            as: "button",
            type: "button",
            "data-headlessui-focus-guard": !0,
            onFocus: b,
            features: F.HiddenFeatures.Focusable
        }))
    }), {
        features: U
    });

    function V(e, t) {
        for (let r of e)
            if (r.contains(t)) return !0;
        return !1
    }
    var z = e.i(962750),
        H = e.i(295485),
        B = ((r = B || {})[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r),
        K = ((a = K || {})[a.SetTitleId = 0] = "SetTitleId", a);
    let $ = {
            0: (e, t) => e.titleId === t.id ? e : { ...e,
                titleId: t.id
            }
        },
        W = (0, l.createContext)(null);

    function q(e) {
        let t = (0, l.useContext)(W);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, q), t
        }
        return t
    }

    function Q(e, t) {
        return (0, N.match)(t.type, $, e, t)
    }
    W.displayName = "DialogContext";
    let Y = (0, E.forwardRefWithAs)(function(e, t) {
            let r = (0, l.useId)(),
                {
                    id: a = `headlessui-dialog-${r}`,
                    open: N,
                    onClose: S,
                    initialFocus: R,
                    role: I = "dialog",
                    autoFocus: T = !0,
                    __demoMode: P = !1,
                    unmount: F = !1,
                    ..._
                } = e,
                D = (0, l.useRef)(!1);
            I = "dialog" === I || "alertdialog" === I ? I : (D.current || (D.current = !0, console.warn(`Invalid role [${I}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
            let L = (0, y.useOpenClosed)();
            void 0 === N && null !== L && (N = (L & y.State.Open) === y.State.Open);
            let A = (0, l.useRef)(null),
                O = (0, g.useSyncRefs)(A, t),
                M = (0, h.useOwnerDocument)(A.current),
                V = +!N,
                [H, B] = (0, l.useReducer)(Q, {
                    titleId: null,
                    descriptionId: null,
                    panelRef: (0, l.createRef)()
                }),
                K = (0, o.useEvent)(() => S(!1)),
                $ = (0, o.useEvent)(e => B({
                    type: 0,
                    id: e
                })),
                q = !!(0, x.useServerHandoffComplete)() && 0 === V,
                [Y, X] = (0, z.useNestedPortals)(),
                ee = (0, f.useMainTreeNode)(),
                {
                    resolveContainers: et
                } = (0, f.useRootContainers)({
                    mainTreeNode: ee,
                    portals: Y,
                    defaultContainers: [{
                        get current() {
                            var er;
                            return null != (er = H.panelRef.current) ? er : A.current
                        }
                    }]
                }),
                ea = null !== L && (L & y.State.Closing) === y.State.Closing;
            (0, c.useInertOthers)(!P && !ea && q, {
                allowed: (0, o.useEvent)(() => {
                    var e, t;
                    return [null != (t = null == (e = A.current) ? void 0 : e.closest("[data-headlessui-portal]")) ? t : null]
                }),
                disallowed: (0, o.useEvent)(() => {
                    var e;
                    return [null != (e = null == ee ? void 0 : ee.closest("body > *:not(#headlessui-portal-root)")) ? e : null]
                })
            });
            let el = j.stackMachines.get(null);
            (0, d.useIsoMorphicEffect)(() => {
                if (q) return el.actions.push(a), () => el.actions.pop(a)
            }, [el, a, q]);
            let en = (0, k.useSlice)(el, (0, l.useCallback)(e => el.selectors.isTop(e, a), [el, a]));
            (0, m.useOutsideClick)(en, et, e => {
                e.preventDefault(), K()
            }),
            function(e, t = "u" > typeof document ? document.defaultView : null, r) {
                let a = (0, s.useIsTopLayer)(e, "escape");
                (0, i.useEventListener)(t, "keydown", e => {
                    a && (e.defaultPrevented || e.key === n.Keys.Escape && r(e))
                })
            }(en, null == M ? void 0 : M.defaultView, e => {
                e.preventDefault(), e.stopPropagation(), document.activeElement && "blur" in document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur(), K()
            }), (0, p.useScrollLock)(!P && !ea && q, M, et), (0, u.useOnDisappear)(q, A, K);
            let [ei, es] = (0, C.useDescriptions)(), eo = (0, l.useMemo)(() => [{
                dialogState: V,
                close: K,
                setTitleId: $,
                unmount: F
            }, H], [V, K, $, F, H]), ec = (0, v.useSlot)({
                open: 0 === V
            }), ed = {
                ref: O,
                id: a,
                role: I,
                tabIndex: -1,
                "aria-modal": P ? void 0 : 0 === V || void 0,
                "aria-labelledby": H.titleId,
                "aria-describedby": ei,
                unmount: F
            }, eu = ! function() {
                var e;
                let [t] = (0, l.useState)(() => "u" > typeof window && "function" == typeof window.matchMedia ? window.matchMedia("(pointer: coarse)") : null), [r, a] = (0, l.useState)(null != (e = null == t ? void 0 : t.matches) && e);
                return (0, d.useIsoMorphicEffect)(() => {
                    if (t) return t.addEventListener("change", e), () => t.removeEventListener("change", e);

                    function e(e) {
                        a(e.matches)
                    }
                }, [t]), r
            }(), em = U.None;
            q && !P && (em |= U.RestoreFocus, em |= U.TabLock, T && (em |= U.AutoFocus), eu && (em |= U.InitialFocus));
            let eh = (0, E.useRender)();
            return l.default.createElement(y.ResetOpenClosedProvider, null, l.default.createElement(w.ForcePortalRoot, {
                force: !0
            }, l.default.createElement(z.Portal, null, l.default.createElement(W.Provider, {
                value: eo
            }, l.default.createElement(z.PortalGroup, {
                target: A
            }, l.default.createElement(w.ForcePortalRoot, {
                force: !1
            }, l.default.createElement(es, {
                slot: ec
            }, l.default.createElement(X, null, l.default.createElement(G, {
                initialFocus: R,
                initialFocusFallback: A,
                containers: et,
                features: em
            }, l.default.createElement(b.CloseProvider, {
                value: K
            }, eh({
                ourProps: ed,
                theirProps: _,
                slot: ec,
                defaultTag: Z,
                features: J,
                visible: 0 === V,
                name: "Dialog"
            })))))))))))
        }),
        Z = "div",
        J = E.RenderFeatures.RenderStrategy | E.RenderFeatures.Static,
        X = (0, E.forwardRefWithAs)(function(e, t) {
            let {
                transition: r = !1,
                open: a,
                ...n
            } = e, i = (0, y.useOpenClosed)(), s = e.hasOwnProperty("open") || null !== i, o = e.hasOwnProperty("onClose");
            if (!s && !o) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
            if (!s) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
            if (!o) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
            if (!i && "boolean" != typeof e.open) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
            if ("function" != typeof e.onClose) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
            return (void 0 !== a || r) && !n.static ? l.default.createElement(f.MainTreeProvider, null, l.default.createElement(H.Transition, {
                show: a,
                transition: r,
                unmount: n.unmount
            }, l.default.createElement(Y, {
                ref: t,
                ...n
            }))) : l.default.createElement(f.MainTreeProvider, null, l.default.createElement(Y, {
                ref: t,
                open: a,
                ...n
            }))
        }),
        ee = (0, E.forwardRefWithAs)(function(e, t) {
            let r = (0, l.useId)(),
                {
                    id: a = `headlessui-dialog-panel-${r}`,
                    transition: n = !1,
                    ...i
                } = e,
                [{
                    dialogState: s,
                    unmount: c
                }, d] = q("Dialog.Panel"),
                u = (0, g.useSyncRefs)(t, d.panelRef),
                m = (0, v.useSlot)({
                    open: 0 === s
                }),
                h = (0, o.useEvent)(e => {
                    e.stopPropagation()
                }),
                f = n ? H.TransitionChild : l.Fragment,
                p = (0, E.useRender)();
            return l.default.createElement(f, { ...n ? {
                    unmount: c
                } : {}
            }, p({
                ourProps: {
                    ref: u,
                    id: a,
                    onClick: h
                },
                theirProps: i,
                slot: m,
                defaultTag: "div",
                name: "Dialog.Panel"
            }))
        }),
        et = (0, E.forwardRefWithAs)(function(e, t) {
            let {
                transition: r = !1,
                ...a
            } = e, [{
                dialogState: n,
                unmount: i
            }] = q("Dialog.Backdrop"), s = (0, v.useSlot)({
                open: 0 === n
            }), o = r ? H.TransitionChild : l.Fragment, c = (0, E.useRender)();
            return l.default.createElement(o, { ...r ? {
                    unmount: i
                } : {}
            }, c({
                ourProps: {
                    ref: t,
                    "aria-hidden": !0
                },
                theirProps: a,
                slot: s,
                defaultTag: "div",
                name: "Dialog.Backdrop"
            }))
        }),
        er = (0, E.forwardRefWithAs)(function(e, t) {
            let r = (0, l.useId)(),
                {
                    id: a = `headlessui-dialog-title-${r}`,
                    ...n
                } = e,
                [{
                    dialogState: i,
                    setTitleId: s
                }] = q("Dialog.Title"),
                o = (0, g.useSyncRefs)(t);
            (0, l.useEffect)(() => (s(a), () => s(null)), [a, s]);
            let c = (0, v.useSlot)({
                open: 0 === i
            });
            return (0, E.useRender)()({
                ourProps: {
                    ref: o,
                    id: a
                },
                theirProps: n,
                slot: c,
                defaultTag: "h2",
                name: "Dialog.Title"
            })
        }),
        ea = (C.Description, Object.assign(X, {
            Panel: ee,
            Title: er,
            Description: C.Description
        }));
    e.s(["Dialog", 0, ea, "DialogBackdrop", 0, et, "DialogPanel", 0, ee], 329460)
}, 881106, 498817, 800087, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(329460);
    e.i(350461);
    var l = e.i(191788),
        n = e.i(811535),
        i = e.i(357126),
        s = e.i(39016),
        o = e.i(362946),
        c = e.i(251723),
        d = l,
        u = e.i(112600);

    function m(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class h extends d.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
                let e = t.offsetParent,
                    r = (0, c.isHTMLElement)(e) && e.offsetWidth || 0,
                    a = this.props.sizeRef.current;
                a.height = t.offsetHeight || 0, a.width = t.offsetWidth || 0, a.top = t.offsetTop, a.left = t.offsetLeft, a.right = r - a.width - a.left
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function f({
        children: e,
        isPresent: r,
        anchorX: a,
        root: n
    }) {
        let i = (0, d.useId)(),
            s = (0, d.useRef)(null),
            o = (0, d.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            }),
            {
                nonce: c
            } = (0, d.useContext)(u.MotionConfigContext),
            p = function(...e) {
                return l.useCallback(function(...e) {
                    return t => {
                        let r = !1,
                            a = e.map(e => {
                                let a = m(e, t);
                                return r || "function" != typeof a || (r = !0), a
                            });
                        if (r) return () => {
                            for (let t = 0; t < a.length; t++) {
                                let r = a[t];
                                "function" == typeof r ? r() : m(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(s, e ? .ref);
        return (0, d.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: l,
                left: d,
                right: u
            } = o.current;
            if (r || !s.current || !e || !t) return;
            let m = "left" === a ? `left: ${d}` : `right: ${u}`;
            s.current.dataset.motionPopId = i;
            let h = document.createElement("style");
            c && (h.nonce = c);
            let f = n ? ? document.head;
            return f.appendChild(h), h.sheet && h.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${m}px !important;
            top: ${l}px !important;
          }
        `), () => {
                f.contains(h) && f.removeChild(h)
            }
        }, [r]), (0, t.jsx)(h, {
            isPresent: r,
            childRef: s,
            sizeRef: o,
            children: d.cloneElement(e, {
                ref: p
            })
        })
    }
    let p = ({
        children: e,
        initial: r,
        isPresent: a,
        onExitComplete: n,
        custom: s,
        presenceAffectsLayout: c,
        mode: d,
        anchorX: u,
        root: m
    }) => {
        let h = (0, i.useConstant)(x),
            p = (0, l.useId)(),
            v = !0,
            g = (0, l.useMemo)(() => (v = !1, {
                id: p,
                initial: r,
                isPresent: a,
                custom: s,
                onExitComplete: e => {
                    for (let t of (h.set(e, !0), h.values()))
                        if (!t) return;
                    n && n()
                },
                register: e => (h.set(e, !1), () => h.delete(e))
            }), [a, h, n]);
        return c && v && (g = { ...g
        }), (0, l.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1))
        }, [a]), l.useEffect(() => {
            a || h.size || !n || n()
        }, [a]), "popLayout" === d && (e = (0, t.jsx)(f, {
            isPresent: a,
            anchorX: u,
            root: m,
            children: e
        })), (0, t.jsx)(o.PresenceContext.Provider, {
            value: g,
            children: e
        })
    };

    function x() {
        return new Map
    }
    var v = e.i(986398);
    let g = e => e.key || "";

    function b(e) {
        let t = [];
        return l.Children.forEach(e, e => {
            (0, l.isValidElement)(e) && t.push(e)
        }), t
    }
    let y = ({
        children: e,
        custom: r,
        initial: a = !0,
        onExitComplete: o,
        presenceAffectsLayout: c = !0,
        mode: d = "sync",
        propagate: u = !1,
        anchorX: m = "left",
        root: h
    }) => {
        let [f, x] = (0, v.usePresence)(u), y = (0, l.useMemo)(() => b(e), [e]), w = u && !f ? [] : y.map(g), j = (0, l.useRef)(!0), k = (0, l.useRef)(y), N = (0, i.useConstant)(() => new Map), [E, C] = (0, l.useState)(y), [S, R] = (0, l.useState)(y);
        (0, s.useIsomorphicLayoutEffect)(() => {
            j.current = !1, k.current = y;
            for (let e = 0; e < S.length; e++) {
                let t = g(S[e]);
                w.includes(t) ? N.delete(t) : !0 !== N.get(t) && N.set(t, !1)
            }
        }, [S, w.length, w.join("-")]);
        let I = [];
        if (y !== E) {
            let e = [...y];
            for (let t = 0; t < S.length; t++) {
                let r = S[t],
                    a = g(r);
                w.includes(a) || (e.splice(t, 0, r), I.push(r))
            }
            return "wait" === d && I.length && (e = I), R(b(e)), C(y), null
        }
        let {
            forceRender: T
        } = (0, l.useContext)(n.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: S.map(e => {
                let l = g(e),
                    n = (!u || !!f) && (y === S || w.includes(l));
                return (0, t.jsx)(p, {
                    isPresent: n,
                    initial: (!j.current || !!a) && void 0,
                    custom: r,
                    presenceAffectsLayout: c,
                    mode: d,
                    root: h,
                    onExitComplete: n ? void 0 : () => {
                        if (!N.has(l)) return;
                        N.set(l, !0);
                        let e = !0;
                        N.forEach(t => {
                            t || (e = !1)
                        }), e && (T ? .(), R(k.current), u && x ? .(), o && o())
                    },
                    anchorX: m,
                    children: e
                }, l)
            })
        })
    };
    e.s(["AnimatePresence", 0, y], 498817);
    var w = e.i(198311),
        j = e.i(495854),
        k = e.i(455108);
    let N = () => {
        let e, a, l, n, i = (0, r.c)(4);
        return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
            opacity: 0
        }, i[0] = e) : e = i[0], i[1] === Symbol.for("react.memo_cache_sentinel") ? (a = {
            opacity: 1,
            transition: {
                duration: .3,
                ease: "easeOut"
            }
        }, i[1] = a) : a = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (l = {
            opacity: 0,
            transition: {
                duration: .2,
                ease: "easeIn"
            }
        }, i[2] = l) : l = i[2], i[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(w.motion.div, {
            initial: e,
            animate: a,
            exit: l,
            "aria-hidden": "true",
            children: (0, t.jsx)("div", {
                className: "fixed inset-0 bg-black/25"
            })
        }), i[3] = n) : n = i[3], n
    };
    e.s(["default", 0, e => {
        let l, n, i = (0, r.c)(10),
            {
                afterLeave: s,
                children: o,
                closeModal: c,
                isOpen: d,
                isLoading: u,
                dataCsOverrideId: m,
                slideLeft: h
            } = e,
            f = void 0 !== u && u,
            p = void 0 !== h && h;
        return i[0] !== o || i[1] !== c || i[2] !== m || i[3] !== f || i[4] !== d || i[5] !== p ? (l = d && (0, t.jsxs)(a.Dialog, {
            as: "div",
            className: "relative z-dialog",
            open: d,
            onClose: c,
            children: [(0, t.jsx)(N, {}), (0, t.jsx)(a.DialogPanel, {
                initial: {
                    x: "100%"
                },
                animate: p ? {
                    x: -250,
                    transition: {
                        duration: .3,
                        ease: "easeInOut"
                    }
                } : {
                    x: 0,
                    transition: {
                        duration: .3,
                        ease: "easeOut"
                    }
                },
                exit: {
                    x: "100%",
                    transition: {
                        duration: .2,
                        ease: "easeIn"
                    }
                },
                as: w.motion.div,
                className: (0, j.default)("fixed inset-y-0 right-0 flex w-screen max-h-dvh flex-col overflow-auto bg-white text-start align-middle shadow-xl transform md:w-[600px]"),
                "data-cs-override-id": m,
                "data-testid": "side-drawer",
                children: f ? (0, t.jsx)("div", {
                    className: "flex h-full items-center justify-center",
                    children: (0, t.jsx)(k.default.LoadingSpinner, {
                        className: "h-32 w-32"
                    })
                }) : o
            })]
        }), i[0] = o, i[1] = c, i[2] = m, i[3] = f, i[4] = d, i[5] = p, i[6] = l) : l = i[6], i[7] !== s || i[8] !== l ? (n = (0, t.jsx)(y, {
            onExitComplete: s,
            children: l
        }), i[7] = s, i[8] = l, i[9] = n) : n = i[9], n
    }], 800087), e.s([], 881106)
}, 389875, 813185, 992072, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var a = e.i(271179),
        l = e.i(495854);
    e.i(643781);
    var n = e.i(989606),
        i = e.i(996913),
        s = e.i(455108);
    e.i(286941);
    var o = e.i(126762),
        c = e.i(191788),
        d = e.i(190077),
        u = e.i(644594),
        m = e.i(292905),
        h = e.i(149818),
        f = e.i(410219),
        p = e.i(641645),
        x = e.i(409043);
    let v = f.gql `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${p.default}
      }
      userErrors {
        field
        message
      }
    }
  }
`,
        g = async (e, t, r) => {
            try {
                return await x.shopify.request(v, {
                    cartId: e,
                    lines: {
                        id: t.id,
                        attributes: [...t.attributes.filter(e => "__uniqueId" !== e.key), {
                            key: "__uniqueId",
                            value: r
                        }]
                    }
                })
            } catch (e) {
                throw Error(`API Error: ${e instanceof Error?e.message:"Unknown error"}`)
            }
        };
    var b = e.i(163726),
        y = e.i(79564),
        w = e.i(770948),
        j = e.i(203828);
    let k = e => {
        let t, a, l, n, i, s, o = (0, r.c)(18);
        o[0] !== e ? (t = void 0 === e ? {} : e, o[0] = e, o[1] = t) : t = o[1];
        let {
            overrideCartCookieName: c,
            openDrawer: d
        } = t;
        o[2] !== c ? (a = {
            overrideCartCookieName: c
        }, o[2] = c, o[3] = a) : a = o[3];
        let {
            updateCartCache: u
        } = (0, w.default)(a);
        o[4] !== d || o[5] !== c ? (l = {
            overrideCartCookieName: c,
            openDrawer: d
        }, o[4] = d, o[5] = c, o[6] = l) : l = o[6];
        let {
            addAsync: f
        } = (0, y.default)(l), {
            isPreview: p
        } = (0, j.useRouter)(), x = (0, h.useTrustServicesMap)();
        o[7] !== f || o[8] !== p ? (n = async e => {
            let {
                productsToAdd: t,
                cartId: r,
                cartLine: a,
                uniqueId: l
            } = e;
            await f(t);
            let {
                cartLinesUpdate: n
            } = await g(r, a, l), {
                cart: i
            } = n;
            return (0, b.default)(i, p)
        }, o[7] = f, o[8] = p, o[9] = n) : n = o[9], o[10] !== n || o[11] !== u ? (i = {
            mutationFn: n,
            onSuccess: u
        }, o[10] = n, o[11] = u, o[12] = i) : i = o[12];
        let {
            mutate: v,
            mutateAsync: k,
            isPending: N
        } = (0, m.useMutation)(i);
        return o[13] !== v || o[14] !== k || o[15] !== N || o[16] !== x ? (s = {
            trustServicesMap: x,
            addTrustServicesAndUpdateLinkedProduct: v,
            addTrustServicesAndUpdateLinkedProductAsync: k,
            isAddTrustServicesAndUpdateLinkedProductLoading: N
        }, o[13] = v, o[14] = k, o[15] = N, o[16] = x, o[17] = s) : s = o[17], s
    };
    var N = e.i(215217);
    let E = e => {
        let t, a = (0, r.c)(5),
            {
                drawerStep: l
            } = (0, c.useContext)(u.DrawerContext),
            n = l.options ? .addedProduct,
            {
                cart: i
            } = (0, N.default)(),
            {
                addTrustServicesAndUpdateLinkedProduct: s
            } = k();
        return a[0] !== s || a[1] !== i || a[2] !== n || a[3] !== e ? (t = {
            addToCart: () => {
                if (!n) return;
                let t = (0, d.v4)();
                s({
                    productsToAdd: e.map(e => ({
                        product: {
                            handle: e.variant ? .handle || e.handle,
                            maxQuantityAllowed: e.variant.maxQuantityAllowed
                        },
                        variantId: e.variant.id,
                        linkedProduct: !!e.linkedToProduct && n,
                        uniqueId: e.linkedToProduct ? t : null,
                        quantityToAdd: e.matchedQuantity ? n ? .quantity : 1
                    })),
                    cartId: i.id,
                    cartLine: n,
                    uniqueId: t
                })
            }
        }, a[0] = s, a[1] = i, a[2] = n, a[3] = e, a[4] = t) : t = a[4], t
    };

    function C(e) {
        return e.legalDisclaimer
    }
    e.s(["default", 0, E], 813185), e.s(["default", 0, e => {
        let c, d, u, m, h, f, p, x = (0, r.c)(22),
            {
                selectedTrustServices: v,
                goBackToCart: g
            } = e,
            {
                t: b
            } = (0, a.useTranslation)("cart"),
            {
                t: y
            } = (0, a.useTranslation)("common"),
            {
                isAddTrustServicesAndUpdateLinkedProductLoading: w
            } = k(),
            {
                addToCart: j
            } = E(v);
        x[0] !== j || x[1] !== g ? (c = () => {
            j(), g()
        }, x[0] = j, x[1] = g, x[2] = c) : c = x[2];
        let N = c,
            S = v.length > 0;
        x[3] !== v ? (d = v.find(C), x[3] = v, x[4] = d) : d = x[4];
        let R = d;
        x[5] !== R ? .legalDisclaimer ? (u = R ? .legalDisclaimer && (0, t.jsx)(o.default, {
            openLinkInNewTab: !0,
            className: (0, l.default)("rich-text-p:m-0 rich-text-p:body-4 border-t-gray-300 bg-neutral-50 px-16 py-16 text-gray-500 md:px-32"),
            content: R ? .legalDisclaimer
        }), x[5] = R ? .legalDisclaimer, x[6] = u) : u = x[6];
        let I = !S;
        return x[7] !== I ? (m = (0, l.default)("p-16 md:px-32", {
            "p-0 md:p-0 [&>button]:ring-black": I
        }), x[7] = I, x[8] = m) : m = x[8], x[9] !== N || x[10] !== g || x[11] !== w || x[12] !== S || x[13] !== b || x[14] !== y ? (h = w ? (0, t.jsx)("div", {
            className: "bg-primary flex w-full items-center justify-center rounded-full px-24 py-16",
            children: (0, t.jsx)(s.default.LoadingSpinner, {})
        }) : (0, t.jsxs)(t.Fragment, {
            children: [S && (0, t.jsx)(n.default, {
                label: y("productCards.addToCard"),
                isFull: !0,
                variant: "primary-orange",
                size: "medium",
                onClick: N,
                dataCsOverrideId: "trust-panel-add-to-cart"
            }), !S && (0, t.jsx)(n.default, {
                label: b("sidecart.skip"),
                isFull: !0,
                size: "medium",
                variant: "secondary-black",
                onClick: g,
                dataCsOverrideId: "trust-panel-skip",
                dataTestId: "trust-services-skip"
            })]
        }), x[9] = N, x[10] = g, x[11] = w, x[12] = S, x[13] = b, x[14] = y, x[15] = h) : h = x[15], x[16] !== m || x[17] !== h ? (f = (0, t.jsx)("div", {
            className: m,
            children: h
        }), x[16] = m, x[17] = h, x[18] = f) : f = x[18], x[19] !== u || x[20] !== f ? (p = (0, t.jsx)(i.default, {
            smallPrint: u,
            children: f
        }), x[19] = u, x[20] = f, x[21] = p) : p = x[21], p
    }], 389875);
    var S = e.i(126019),
        R = e.i(529669),
        I = e.i(382691);
    e.i(108399);
    var T = e.i(860231);
    e.s(["default", 0, e => {
        let l, n, i, s, o, c, d, u, m = (0, r.c)(17),
            {
                linkedProduct: h,
                goBackToCart: f
            } = e,
            {
                t: p
            } = (0, a.useTranslation)("cart");
        return m[0] !== h ? (l = h && (0, t.jsx)(S.default, {
            src: h.image.url,
            alt: "",
            width: 40,
            height: 40,
            className: "shrink-0 rounded-sm border border-neutral-200 px-4"
        }), m[0] = h, m[1] = l) : l = m[1], m[2] !== p ? (n = p("sidecart.addedToCart"), m[2] = p, m[3] = n) : n = m[3], m[4] !== n ? (i = (0, t.jsx)("span", {
            className: "shrink-0",
            children: n
        }), m[4] = n, m[5] = i) : i = m[5], m[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("span", {
            className: "inline-flex h-32 shrink-0 leading-none",
            children: (0, t.jsx)(T.default, {
                name: "success",
                size: 60,
                strokeWidth: .5,
                color: "white"
            })
        }), m[6] = s) : s = m[6], m[7] !== i ? (o = (0, t.jsxs)("div", {
            className: "flex items-center gap-12",
            children: [i, s]
        }), m[7] = i, m[8] = o) : o = m[8], m[9] !== l || m[10] !== o ? (c = (0, t.jsx)("h3", {
            className: "heading-5-semi-bold flex min-h-0 flex-1 items-center",
            children: (0, t.jsxs)("div", {
                className: "flex flex-wrap items-center gap-12",
                children: [l, o]
            })
        }), m[9] = l, m[10] = o, m[11] = c) : c = m[11], m[12] !== f ? (d = (0, t.jsx)(R.default, {
            onClick: f,
            dataCsOverrideId: "trust-panel-close"
        }), m[12] = f, m[13] = d) : d = m[13], m[14] !== c || m[15] !== d ? (u = (0, t.jsxs)(I.default, {
            children: [c, d]
        }), m[14] = c, m[15] = d, m[16] = u) : u = m[16], u
    }], 992072)
}, 978722, e => {
    "use strict";
    let t;
    var r = e.i(578584),
        a = e.i(441243),
        l = e.i(191788),
        n = e.i(759146),
        i = e.i(829672),
        s = e.i(160374),
        o = e.i(993481),
        c = e.i(264728),
        d = e.i(215067),
        u = e.i(608404),
        m = e.i(156833),
        h = e.i(760360),
        f = e.i(128708),
        p = e.i(196061),
        x = e.i(330317),
        v = e.i(565383),
        g = e.i(447105),
        b = e.i(426417),
        y = e.i(780795),
        w = e.i(774664),
        j = e.i(472381),
        k = e.i(78270),
        N = e.i(709769),
        E = ((t = E || {})[t.RegisterOption = 0] = "RegisterOption", t[t.UnregisterOption = 1] = "UnregisterOption", t);
    let C = {
            0(e, t) {
                let r = [...e.options, {
                    id: t.id,
                    element: t.element,
                    propsRef: t.propsRef
                }];
                return { ...e,
                    options: (0, v.sortByDomNode)(r, e => e.element.current)
                }
            },
            1(e, t) {
                let r = e.options.slice(),
                    a = e.options.findIndex(e => e.id === t.id);
                return -1 === a ? e : (r.splice(a, 1), { ...e,
                    options: r
                })
            }
        },
        S = (0, l.createContext)(null);

    function R(e) {
        let t = (0, l.useContext)(S);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, R), t
        }
        return t
    }
    S.displayName = "RadioGroupDataContext";
    let I = (0, l.createContext)(null);

    function T(e) {
        let t = (0, l.useContext)(I);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, T), t
        }
        return t
    }

    function P(e, t) {
        return (0, b.match)(t.type, C, e, t)
    }
    I.displayName = "RadioGroupActionsContext";
    let F = (0, w.forwardRefWithAs)(function(e, t) {
            let r = (0, l.useId)(),
                a = (0, h.useDisabled)(),
                {
                    id: c = `headlessui-radiogroup-${r}`,
                    value: d,
                    form: p,
                    name: x,
                    onChange: b,
                    by: E,
                    disabled: C = a || !1,
                    defaultValue: R,
                    tabIndex: T = 0,
                    ...F
                } = e,
                _ = (0, n.useByComparator)(E),
                [D, L] = (0, l.useReducer)(P, {
                    options: []
                }),
                A = D.options,
                [O, M] = (0, N.useLabels)(),
                [U, G] = (0, j.useDescriptions)(),
                V = (0, l.useRef)(null),
                z = (0, m.useSyncRefs)(V, t),
                H = (0, s.useDefaultValue)(R),
                [B, K] = (0, i.useControllable)(d, b, H),
                $ = (0, l.useMemo)(() => A.find(e => !e.propsRef.current.disabled), [A]),
                W = (0, l.useMemo)(() => A.some(e => _(e.propsRef.current.value, B)), [A, B]),
                q = (0, o.useEvent)(e => {
                    var t;
                    if (C || _(e, B)) return !1;
                    let r = null == (t = A.find(t => _(t.propsRef.current.value, e))) ? void 0 : t.propsRef.current;
                    return (null == r || !r.disabled) && (null == K || K(e), !0)
                }),
                Q = (0, o.useEvent)(e => {
                    if (!V.current) return;
                    let t = A.filter(e => !1 === e.propsRef.current.disabled).map(e => e.element.current);
                    switch (e.key) {
                        case k.Keys.Enter:
                            (0, g.attemptSubmit)(e.currentTarget);
                            break;
                        case k.Keys.ArrowLeft:
                        case k.Keys.ArrowUp:
                            if (e.preventDefault(), e.stopPropagation(), (0, v.focusIn)(t, v.Focus.Previous | v.Focus.WrapAround) === v.FocusResult.Success) {
                                let e = A.find(e => (0, y.isActiveElement)(e.element.current));
                                e && q(e.propsRef.current.value)
                            }
                            break;
                        case k.Keys.ArrowRight:
                        case k.Keys.ArrowDown:
                            if (e.preventDefault(), e.stopPropagation(), (0, v.focusIn)(t, v.Focus.Next | v.Focus.WrapAround) === v.FocusResult.Success) {
                                let e = A.find(e => (0, y.isActiveElement)(e.element.current));
                                e && q(e.propsRef.current.value)
                            }
                            break;
                        case k.Keys.Space:
                            {
                                e.preventDefault(),
                                e.stopPropagation();
                                let t = A.find(e => (0, y.isActiveElement)(e.element.current));t && q(t.propsRef.current.value)
                            }
                    }
                }),
                Y = (0, o.useEvent)(e => (L({
                    type: 0,
                    ...e
                }), () => L({
                    type: 1,
                    id: e.id
                }))),
                Z = (0, l.useMemo)(() => ({
                    value: B,
                    firstOption: $,
                    containsCheckedOption: W,
                    disabled: C,
                    compare: _,
                    tabIndex: T,
                    ...D
                }), [B, $, W, C, _, T, D]),
                J = (0, l.useMemo)(() => ({
                    registerOption: Y,
                    change: q
                }), [Y, q]),
                X = (0, u.useSlot)({
                    value: B
                }),
                ee = (0, l.useCallback)(() => {
                    if (void 0 !== H) return q(H)
                }, [q, H]),
                et = (0, w.useRender)();
            return l.default.createElement(G, {
                name: "RadioGroup.Description"
            }, l.default.createElement(M, {
                name: "RadioGroup.Label"
            }, l.default.createElement(I.Provider, {
                value: J
            }, l.default.createElement(S.Provider, {
                value: Z
            }, null != x && l.default.createElement(f.FormFields, {
                disabled: C,
                data: {
                    [x]: B || "on"
                },
                overrides: {
                    type: "radio",
                    checked: null != B
                },
                form: p,
                onReset: ee
            }), et({
                ourProps: {
                    ref: z,
                    id: c,
                    role: "radiogroup",
                    "aria-labelledby": O,
                    "aria-describedby": U,
                    onKeyDown: Q
                },
                theirProps: F,
                slot: X,
                defaultTag: "div",
                name: "RadioGroup"
            })))))
        }),
        _ = (0, w.forwardRefWithAs)(function(e, t) {
            var n;
            let i = R("RadioGroup.Option"),
                s = T("RadioGroup.Option"),
                h = (0, l.useId)(),
                {
                    id: f = `headlessui-radiogroup-option-${h}`,
                    value: p,
                    disabled: v = i.disabled || !1,
                    autoFocus: g = !1,
                    ...b
                } = e,
                y = (0, l.useRef)(null),
                k = (0, m.useSyncRefs)(y, t),
                [E, C] = (0, N.useLabels)(),
                [S, I] = (0, j.useDescriptions)(),
                P = (0, d.useLatestValue)({
                    value: p,
                    disabled: v
                });
            (0, c.useIsoMorphicEffect)(() => s.registerOption({
                id: f,
                element: y,
                propsRef: P
            }), [f, s, y, P]);
            let F = (0, o.useEvent)(e => {
                    var t;
                    if ((0, x.isDisabledReactIssue7711)(e.currentTarget)) return e.preventDefault();
                    s.change(p) && (null == (t = y.current) || t.focus())
                }),
                _ = (null == (n = i.firstOption) ? void 0 : n.id) === f,
                {
                    isFocusVisible: D,
                    focusProps: L
                } = (0, r.useFocusRing)({
                    autoFocus: g
                }),
                {
                    isHovered: A,
                    hoverProps: O
                } = (0, a.useHover)({
                    isDisabled: v
                }),
                M = i.compare(i.value, p),
                U = (0, w.mergeProps)({
                    ref: k,
                    id: f,
                    role: "radio",
                    "aria-checked": M ? "true" : "false",
                    "aria-labelledby": E,
                    "aria-describedby": S,
                    "aria-disabled": !!v || void 0,
                    tabIndex: v ? -1 : M || !i.containsCheckedOption && _ ? i.tabIndex : -1,
                    onClick: v ? void 0 : F,
                    autoFocus: g
                }, L, O),
                G = (0, u.useSlot)({
                    checked: M,
                    disabled: v,
                    active: D,
                    hover: A,
                    focus: D,
                    autofocus: g
                }),
                V = (0, w.useRender)();
            return l.default.createElement(I, {
                name: "RadioGroup.Description"
            }, l.default.createElement(C, {
                name: "RadioGroup.Label"
            }, V({
                ourProps: U,
                theirProps: b,
                slot: G,
                defaultTag: "div",
                name: "RadioGroup.Option"
            })))
        }),
        D = (0, w.forwardRefWithAs)(function(e, t) {
            var n;
            let i = R("Radio"),
                s = T("Radio"),
                f = (0, l.useId)(),
                v = (0, p.useProvidedId)(),
                g = (0, h.useDisabled)(),
                {
                    id: b = v || `headlessui-radio-${f}`,
                    value: y,
                    disabled: k = i.disabled || g || !1,
                    autoFocus: E = !1,
                    ...C
                } = e,
                S = (0, l.useRef)(null),
                I = (0, m.useSyncRefs)(S, t),
                P = (0, N.useLabelledBy)(),
                F = (0, j.useDescribedBy)(),
                _ = (0, d.useLatestValue)({
                    value: y,
                    disabled: k
                });
            (0, c.useIsoMorphicEffect)(() => s.registerOption({
                id: b,
                element: S,
                propsRef: _
            }), [b, s, S, _]);
            let D = (0, o.useEvent)(e => {
                    var t;
                    if ((0, x.isDisabledReactIssue7711)(e.currentTarget)) return e.preventDefault();
                    s.change(y) && (null == (t = S.current) || t.focus())
                }),
                {
                    isFocusVisible: L,
                    focusProps: A
                } = (0, r.useFocusRing)({
                    autoFocus: E
                }),
                {
                    isHovered: O,
                    hoverProps: M
                } = (0, a.useHover)({
                    isDisabled: k
                }),
                U = (null == (n = i.firstOption) ? void 0 : n.id) === b,
                G = i.compare(i.value, y),
                V = (0, w.mergeProps)({
                    ref: I,
                    id: b,
                    role: "radio",
                    "aria-checked": G ? "true" : "false",
                    "aria-labelledby": P,
                    "aria-describedby": F,
                    "aria-disabled": !!k || void 0,
                    tabIndex: k ? -1 : G || !i.containsCheckedOption && U ? i.tabIndex : -1,
                    autoFocus: E,
                    onClick: k ? void 0 : D
                }, A, M),
                z = (0, u.useSlot)({
                    checked: G,
                    disabled: k,
                    hover: O,
                    focus: L,
                    autofocus: E
                });
            return (0, w.useRender)()({
                ourProps: V,
                theirProps: C,
                slot: z,
                defaultTag: "span",
                name: "Radio"
            })
        }),
        L = Object.assign(F, {
            Option: _,
            Radio: D,
            Label: N.Label,
            Description: j.Description
        });
    e.s(["Radio", 0, D, "RadioGroup", 0, L])
}, 857107, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(978722),
        l = e.i(495854),
        n = e.i(44073);
    e.s(["default", 0, e => {
        let i, s, o, c, d, u, m = (0, r.c)(18),
            {
                label: h,
                selectedOption: f,
                children: p,
                optionValue: x,
                dataCsOverrideId: v,
                dataTestId: g,
                priceTag: b,
                shadow: y
            } = e,
            w = void 0 !== y && y;
        return m[0] !== f || m[1] !== w ? (i = e => {
            let {
                checked: t
            } = e;
            return (0, l.default)("group flex cursor-pointer flex-col overflow-hidden rounded-xs p-16", "hover:border-purple border border-neutral-200 transition-[colors,opacity,box-shadow] duration-300 ease-in-out", {
                "border-purple": t
            }, {
                "border-neutral-300 opacity-50 hover:opacity-100": !t && f
            }, {
                "shadow-md": w
            })
        }, m[0] = f, m[1] = w, m[2] = i) : i = m[2], m[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("div", {
            className: "group-data-[checked]:bg-purple box-border size-20 shrink-0 cursor-pointer rounded-full border border-neutral-300 p-2 group-data-[checked]:bg-clip-content",
            "aria-hidden": !0
        }), m[3] = s) : s = m[3], m[4] !== h ? (o = (0, t.jsx)("span", {
            className: "body-1-semi-bold cursor-pointer",
            children: h
        }), m[4] = h, m[5] = o) : o = m[5], m[6] !== b ? (c = b && (0, t.jsx)("div", {
            className: "ml-auto flex",
            children: (0, t.jsx)(n.default, {
                label: b,
                variant: "purple",
                size: "medium"
            })
        }), m[6] = b, m[7] = c) : c = m[7], m[8] !== o || m[9] !== c ? (d = (0, t.jsxs)("div", {
            className: "flex items-center gap-12",
            children: [s, o, c]
        }), m[8] = o, m[9] = c, m[10] = d) : d = m[10], m[11] !== p || m[12] !== v || m[13] !== g || m[14] !== x || m[15] !== i || m[16] !== d ? (u = (0, t.jsxs)(a.Radio, {
            "data-cs-override-id": v,
            value: x,
            className: i,
            "data-testid": g,
            children: [d, p]
        }), m[11] = p, m[12] = v, m[13] = g, m[14] = x, m[15] = i, m[16] = d, m[17] = u) : u = m[17], u
    }])
}, 969821, e => {
    "use strict";
    let t, r;
    var a, l = e.i(578584),
        n = e.i(441243),
        i = e.i(191788),
        s = e.i(872016),
        o = e.i(993481),
        c = e.i(399030),
        d = e.i(608404),
        u = e.i(156833),
        m = e.i(880281),
        h = e.i(226586),
        f = e.i(896694),
        p = e.i(330317),
        x = e.i(855367),
        v = e.i(426417),
        g = e.i(780795),
        b = e.i(774664);
    let y = null != (a = i.default.startTransition) ? a : function(e) {
        e()
    };
    var w = e.i(78270),
        j = ((t = j || {})[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t),
        k = ((r = k || {})[r.ToggleDisclosure = 0] = "ToggleDisclosure", r[r.CloseDisclosure = 1] = "CloseDisclosure", r[r.SetButtonId = 2] = "SetButtonId", r[r.SetPanelId = 3] = "SetPanelId", r[r.SetButtonElement = 4] = "SetButtonElement", r[r.SetPanelElement = 5] = "SetPanelElement", r);
    let N = {
            0: e => ({ ...e,
                disclosureState: (0, v.match)(e.disclosureState, {
                    0: 1,
                    1: 0
                })
            }),
            1: e => 1 === e.disclosureState ? e : { ...e,
                disclosureState: 1
            },
            2: (e, t) => e.buttonId === t.buttonId ? e : { ...e,
                buttonId: t.buttonId
            },
            3: (e, t) => e.panelId === t.panelId ? e : { ...e,
                panelId: t.panelId
            },
            4: (e, t) => e.buttonElement === t.element ? e : { ...e,
                buttonElement: t.element
            },
            5: (e, t) => e.panelElement === t.element ? e : { ...e,
                panelElement: t.element
            }
        },
        E = (0, i.createContext)(null);

    function C(e) {
        let t = (0, i.useContext)(E);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Disclosure /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, C), t
        }
        return t
    }
    E.displayName = "DisclosureContext";
    let S = (0, i.createContext)(null);
    S.displayName = "DisclosureAPIContext";
    let R = (0, i.createContext)(null);

    function I(e, t) {
        return (0, v.match)(t.type, N, e, t)
    }
    R.displayName = "DisclosurePanelContext";
    let T = i.Fragment,
        P = b.RenderFeatures.RenderStrategy | b.RenderFeatures.Static,
        F = (0, b.forwardRefWithAs)(function(e, t) {
            let {
                defaultOpen: r = !1,
                ...a
            } = e, l = (0, i.useRef)(null), n = (0, u.useSyncRefs)(t, (0, u.optionalRef)(e => {
                l.current = e
            }, void 0 === e.as || (0, b.isFragment)(e.as))), s = (0, i.useReducer)(I, {
                disclosureState: +!r,
                buttonElement: null,
                panelElement: null,
                buttonId: null,
                panelId: null
            }), [{
                disclosureState: c,
                buttonId: m
            }, p] = s, y = (0, o.useEvent)(e => {
                p({
                    type: 1
                });
                let t = (0, g.getOwnerDocument)(l.current);
                if (!t || !m) return;
                let r = e ? x.isHTMLorSVGElement(e) ? e : "current" in e && x.isHTMLorSVGElement(e.current) ? e.current : t.getElementById(m) : t.getElementById(m);
                null == r || r.focus()
            }), w = (0, i.useMemo)(() => ({
                close: y
            }), [y]), j = (0, d.useSlot)({
                open: 0 === c,
                close: y
            }), k = (0, b.useRender)();
            return i.default.createElement(E.Provider, {
                value: s
            }, i.default.createElement(S.Provider, {
                value: w
            }, i.default.createElement(h.CloseProvider, {
                value: y
            }, i.default.createElement(f.OpenClosedProvider, {
                value: (0, v.match)(c, {
                    0: f.State.Open,
                    1: f.State.Closed
                })
            }, k({
                ourProps: {
                    ref: n
                },
                theirProps: a,
                slot: j,
                defaultTag: T,
                name: "Disclosure"
            })))))
        }),
        _ = (0, b.forwardRefWithAs)(function(e, t) {
            let r = (0, i.useId)(),
                {
                    id: a = `headlessui-disclosure-button-${r}`,
                    disabled: m = !1,
                    autoFocus: h = !1,
                    ...f
                } = e,
                [x, v] = C("Disclosure.Button"),
                g = (0, i.useContext)(R),
                y = null !== g && g === x.panelId,
                j = (0, i.useRef)(null),
                k = (0, u.useSyncRefs)(j, t, (0, o.useEvent)(e => {
                    if (!y) return v({
                        type: 4,
                        element: e
                    })
                }));
            (0, i.useEffect)(() => {
                if (!y) return v({
                    type: 2,
                    buttonId: a
                }), () => {
                    v({
                        type: 2,
                        buttonId: null
                    })
                }
            }, [a, v, y]);
            let N = (0, o.useEvent)(e => {
                    var t;
                    if (y) {
                        if (1 === x.disclosureState) return;
                        switch (e.key) {
                            case w.Keys.Space:
                            case w.Keys.Enter:
                                e.preventDefault(), e.stopPropagation(), v({
                                    type: 0
                                }), null == (t = x.buttonElement) || t.focus()
                        }
                    } else switch (e.key) {
                        case w.Keys.Space:
                        case w.Keys.Enter:
                            e.preventDefault(), e.stopPropagation(), v({
                                type: 0
                            })
                    }
                }),
                E = (0, o.useEvent)(e => {
                    e.key === w.Keys.Space && e.preventDefault()
                }),
                S = (0, o.useEvent)(e => {
                    var t;
                    (0, p.isDisabledReactIssue7711)(e.currentTarget) || m || (y ? (v({
                        type: 0
                    }), null == (t = x.buttonElement) || t.focus()) : v({
                        type: 0
                    }))
                }),
                {
                    isFocusVisible: I,
                    focusProps: T
                } = (0, l.useFocusRing)({
                    autoFocus: h
                }),
                {
                    isHovered: P,
                    hoverProps: F
                } = (0, n.useHover)({
                    isDisabled: m
                }),
                {
                    pressed: _,
                    pressProps: D
                } = (0, s.useActivePress)({
                    disabled: m
                }),
                L = (0, d.useSlot)({
                    open: 0 === x.disclosureState,
                    hover: P,
                    active: _,
                    disabled: m,
                    focus: I,
                    autofocus: h
                }),
                A = (0, c.useResolveButtonType)(e, x.buttonElement),
                O = y ? (0, b.mergeProps)({
                    ref: k,
                    type: A,
                    disabled: m || void 0,
                    autoFocus: h,
                    onKeyDown: N,
                    onClick: S
                }, T, F, D) : (0, b.mergeProps)({
                    ref: k,
                    id: a,
                    type: A,
                    "aria-expanded": 0 === x.disclosureState,
                    "aria-controls": x.panelElement ? x.panelId : void 0,
                    disabled: m || void 0,
                    autoFocus: h,
                    onKeyDown: N,
                    onKeyUp: E,
                    onClick: S
                }, T, F, D);
            return (0, b.useRender)()({
                ourProps: O,
                theirProps: f,
                slot: L,
                defaultTag: "button",
                name: "Disclosure.Button"
            })
        }),
        D = (0, b.forwardRefWithAs)(function(e, t) {
            let r = (0, i.useId)(),
                {
                    id: a = `headlessui-disclosure-panel-${r}`,
                    transition: l = !1,
                    ...n
                } = e,
                [s, c] = C("Disclosure.Panel"),
                {
                    close: h
                } = function e(t) {
                    let r = (0, i.useContext)(S);
                    if (null === r) {
                        let r = Error(`<${t} /> is missing a parent <Disclosure /> component.`);
                        throw Error.captureStackTrace && Error.captureStackTrace(r, e), r
                    }
                    return r
                }("Disclosure.Panel"),
                [p, x] = (0, i.useState)(null),
                v = (0, u.useSyncRefs)(t, (0, o.useEvent)(e => {
                    y(() => c({
                        type: 5,
                        element: e
                    }))
                }), x);
            (0, i.useEffect)(() => (c({
                type: 3,
                panelId: a
            }), () => {
                c({
                    type: 3,
                    panelId: null
                })
            }), [a, c]);
            let g = (0, f.useOpenClosed)(),
                [w, j] = (0, m.useTransition)(l, p, null !== g ? (g & f.State.Open) === f.State.Open : 0 === s.disclosureState),
                k = (0, d.useSlot)({
                    open: 0 === s.disclosureState,
                    close: h
                }),
                N = {
                    ref: v,
                    id: a,
                    ...(0, m.transitionDataAttributes)(j)
                },
                E = (0, b.useRender)();
            return i.default.createElement(f.ResetOpenClosedProvider, null, i.default.createElement(R.Provider, {
                value: s.panelId
            }, E({
                ourProps: N,
                theirProps: n,
                slot: k,
                defaultTag: "div",
                features: P,
                visible: w,
                name: "Disclosure.Panel"
            })))
        }),
        L = Object.assign(F, {
            Button: _,
            Panel: D
        });
    e.s(["Disclosure", 0, L, "DisclosureButton", 0, _, "DisclosurePanel", 0, D], 969821)
}, 161465, 458211, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(286941);
    var a = e.i(126762),
        l = e.i(455108),
        n = e.i(495854);
    e.s(["default", 0, e => {
        let i, s, o, c, d, u, m, h = (0, r.c)(21),
            {
                titleAlignment: f,
                title: p,
                sectionSpecifications: x,
                theme: v,
                transparentBg: g
            } = e,
            b = void 0 === f ? "default" : f,
            y = void 0 === v ? "light" : v,
            {
                specificationBlocks: w
            } = x,
            j = "dark" === y ? "bg-black" : "bg-neutral-50",
            k = void 0 !== g && g && "bg-transparent";
        if (h[0] !== j || h[1] !== k ? (i = (0, n.default)(j, k), h[0] = j, h[1] = k, h[2] = i) : i = h[2], h[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("div", {
                id: "specifications"
            }), h[3] = s) : s = h[3], h[4] !== y || h[5] !== p || h[6] !== b ? (o = p && (0, t.jsx)("h2", {
                className: (0, n.default)("dark" === y ? "text-white" : "text-black", "center" === b && "text-center", "pb-32 responsive-display-4", "md:pb-80 md:responsive-display-4"),
                children: p
            }), h[4] = y, h[5] = p, h[6] = b, h[7] = o) : o = h[7], h[8] !== w || h[9] !== y) {
            let e;
            h[11] !== y ? (e = e => (0, t.jsxs)("div", {
                className: "box-border w-full",
                "data-testid": "specification-block",
                children: [(0, t.jsx)("h3", {
                    className: (0, n.default)("dark" === y ? "text-white" : "text-black", "pb-12 heading-5-semi-bold"),
                    children: e.title
                }), (0, t.jsx)("div", {
                    className: (0, n.default)("dark" === y ? "text-white" : "text-gray-600"),
                    children: e.content && (0, t.jsx)(a.default, {
                        content: e.content,
                        className: (0, n.default)("rich-text-h3:mb-0 rich-text-h3:body-3 rich-text-p:m-0 rich-text-p:body-3", "dark" === y ? "rich-text-h3:text-white marker:rich-text-li:text-white" : "rich-text-h3:text-black")
                    })
                })]
            }, e.title), h[11] = y, h[12] = e) : e = h[12], c = w.map(e), h[8] = w, h[9] = y, h[10] = c
        } else c = h[10];
        return h[13] !== c ? (d = (0, t.jsx)("div", {
            className: "grid gap-x-48 gap-y-32 body-3 md:grid-cols-3 md:gap-y-56",
            children: c
        }), h[13] = c, h[14] = d) : d = h[14], h[15] !== d || h[16] !== o ? (u = (0, t.jsxs)(l.default.Section, {
            children: [o, d]
        }), h[15] = d, h[16] = o, h[17] = u) : u = h[17], h[18] !== u || h[19] !== i ? (m = (0, t.jsxs)("div", {
            className: i,
            children: [s, u]
        }), h[18] = u, h[19] = i, h[20] = m) : m = h[20], m
    }], 458211), e.s([], 161465)
}, 409931, 943960, 636985, 919993, 906550, 462948, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(329460),
        l = e.i(295485);
    e.i(664157);
    var n = e.i(271179),
        i = e.i(191788);
    e.i(643781);
    var s = e.i(989606);
    e.i(108399);
    var o = e.i(860231),
        c = e.i(495854);
    e.s(["default", 0, e => {
        let d, u, m, h, f, p, x, v, g, b, y, w, j, k, N, E = (0, r.c)(38),
            {
                children: C,
                closeModal: S,
                isOpen: R,
                title: I,
                theme: T
            } = e,
            P = void 0 === T ? "dark" : T,
            {
                t: F
            } = (0, n.useTranslation)("common"),
            [_, D] = (0, i.useState)(!1);
        if (E[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
                D(!0)
            }, u = [], E[0] = d, E[1] = u) : (d = E[0], u = E[1]), (0, i.useEffect)(d, u), !_) return null;
        E[2] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, t.jsx)(a.DialogBackdrop, {
            transition: !0,
            className: "fixed inset-0 bg-black/25 transition-opacity duration-300 ease-out data-closed:opacity-0"
        }), E[2] = m) : m = E[2];
        let L = "light" === P;
        E[3] !== L ? (h = (0, c.default)("no-scrollbar fixed inset-x-0 bottom-0 max-h-[calc(100%-theme(space.12))] overflow-y-auto rounded-t-2xl md:max-h-[calc(100%-theme(space.36))]", "w-screen transform bg-neutral-900 text-white", {
            "bg-white text-black": L
        }), E[3] = L, E[4] = h) : h = E[4], E[5] !== F ? (f = F("close"), E[5] = F, E[6] = f) : f = E[6];
        let A = "light" === P,
            O = "light" === P ? "black" : "white";
        return E[7] !== A || E[8] !== O ? (p = (0, t.jsx)(o.default, {
            name: "circledCross",
            size: 30,
            strokeWidth: .5,
            isFilled: A,
            color: O
        }), E[7] = A, E[8] = O, E[9] = p) : p = E[9], E[10] !== S || E[11] !== p || E[12] !== f ? (x = (0, t.jsx)("div", {
            className: "sticky top-0 z-30 flex justify-end rounded-t-2xl px-16 py-16 md:px-24 md:pb-8 md:pt-32",
            children: (0, t.jsx)("button", {
                type: "button",
                className: "inline-block hover:opacity-80",
                onClick: S,
                "aria-label": f,
                "data-testid": "drawer-button",
                children: p
            })
        }), E[10] = S, E[11] = p, E[12] = f, E[13] = x) : x = E[13], E[14] !== I ? (v = (0, t.jsx)("h2", {
            className: "px-16 text-center heading-1-semi-bold",
            children: I
        }), E[14] = I, E[15] = v) : v = E[15], E[16] !== C ? (g = (0, t.jsx)("div", {
            className: "mx-auto max-w-[calc(var(--breakpoint-2xl)+theme(space.36))]",
            children: C
        }), E[16] = C, E[17] = g) : g = E[17], E[18] !== F ? (b = F("continueShopping"), E[18] = F, E[19] = b) : b = E[19], E[20] !== F ? (y = F("close"), E[20] = F, E[21] = y) : y = E[21], E[22] !== S || E[23] !== b || E[24] !== y ? (w = (0, t.jsx)("div", {
            className: "flex justify-center pb-64 [&>button>span]:text-primary",
            children: (0, t.jsx)(s.default, {
                variant: "link-black",
                label: b,
                "aria-label": y,
                onClick: S
            })
        }), E[22] = S, E[23] = b, E[24] = y, E[25] = w) : w = E[25], E[26] !== x || E[27] !== v || E[28] !== g || E[29] !== w || E[30] !== h ? (j = (0, t.jsx)(l.TransitionChild, {
            as: i.Fragment,
            enter: "ease-out duration-500 transition-transform",
            enterFrom: "translate-y-full",
            enterTo: "translate-y-0",
            leave: "ease-in duration-500 transition-transform",
            leaveFrom: "translate-y-0",
            leaveTo: "translate-y-full",
            unmount: !1,
            children: (0, t.jsxs)(a.DialogPanel, {
                className: h,
                children: [x, v, g, w]
            })
        }), E[26] = x, E[27] = v, E[28] = g, E[29] = w, E[30] = h, E[31] = j) : j = E[31], E[32] !== S || E[33] !== j ? (k = (0, t.jsxs)(a.Dialog, {
            as: "div",
            className: "relative z-dialog",
            onClose: S,
            unmount: !1,
            children: [m, j]
        }), E[32] = S, E[33] = j, E[34] = k) : k = E[34], E[35] !== R || E[36] !== k ? (N = (0, t.jsx)(l.Transition, {
            show: R,
            appear: !0,
            unmount: !1,
            as: i.Fragment,
            children: k
        }), E[35] = R, E[36] = k, E[37] = N) : N = E[37], N
    }], 943960), e.s([], 409931), e.s(["default", () => k], 462948);
    var d = e.i(198311);
    e.i(286941);
    var u = e.i(126762);
    e.s([], 919993), e.s(["default", () => h], 636985), e.i(828684);
    var m = e.i(454720);
    let h = e => {
            let a = (0, r.c)(9),
                {
                    link: l,
                    theme: n,
                    size: i
                } = e,
                o = void 0 === n ? "dark" : n,
                c = void 0 === i ? "medium" : i;
            if (l ? .dynamicDrawerContent ? .length) {
                let e;
                return a[0] !== l.dynamicDrawerContent || a[1] !== l.label || a[2] !== o ? (e = (0, t.jsx)(m.default, {
                    label: l.label,
                    dynamicDrawerContent: l.dynamicDrawerContent,
                    drawerTheme: o
                }), a[0] = l.dynamicDrawerContent, a[1] = l.label, a[2] = o, a[3] = e) : e = a[3], e
            }
            if (l ? .url) {
                let e, r = "dark" === o ? "link-white" : "link-black";
                return a[4] !== l.label || a[5] !== l.url || a[6] !== c || a[7] !== r ? (e = (0, t.jsx)(s.default, {
                    variant: r,
                    icon: "arrowRight",
                    href: l.url,
                    label: l.label,
                    nowrap: !1,
                    size: c
                }), a[4] = l.label, a[5] = l.url, a[6] = c, a[7] = r, a[8] = e) : e = a[8], e
            }
            return null
        },
        f = e => {
            let a, l = (0, r.c)(3),
                {
                    theme: n
                } = e,
                i = "dark" === n ? "0.1" : "0.5",
                s = "dark" === n ? "black" : "white";
            return l[0] !== i || l[1] !== s ? (a = (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "56",
                height: "48",
                viewBox: "0 0 56 48",
                fill: "none",
                children: (0, t.jsx)("path", {
                    opacity: i,
                    d: "M0 0H56V16V32L40 48H0V0Z",
                    fill: s
                })
            }), l[0] = i, l[1] = s, l[2] = a) : a = l[2], a
        };
    var p = e.i(126019);
    let x = (0, e.i(648684).cva)("relative flex flex-1 flex-col border", {
            variants: {
                variant: {
                    Standard: ["before:pointer-events-none before:absolute before:start-0 before:top-0 before:z-10 before:block before:h-28 before:w-16 before:-translate-x-px before:-translate-y-px before:border-s before:border-t", "after:pointer-events-none after:absolute after:end-0 after:bottom-0 after:z-10 after:block after:h-28 after:w-16 after:translate-x-px after:translate-y-px after:border-e after:border-b after:border-white"],
                    Compact: ""
                },
                theme: {
                    light: "border-neutral-200",
                    dark: ""
                }
            },
            compoundVariants: [{
                variant: "Standard",
                theme: "light",
                className: "bg-white/10 before:border-neutral-400 after:border-neutral-400"
            }, {
                variant: "Standard",
                theme: "dark",
                className: "border-white/10 bg-white/5 before:border-neutral-500 after:border-neutral-500"
            }, {
                variant: "Compact",
                theme: "light",
                className: "bg-white"
            }, {
                variant: "Compact",
                theme: "dark",
                className: "border-neutral-600 bg-neutral-900"
            }],
            defaultVariants: {
                variant: "Standard",
                theme: "dark"
            }
        }),
        v = e => {
            let a, l, n, i, s, o, m, v, g, b, y, w, j, k, N = (0, r.c)(42),
                {
                    image: E,
                    description: C,
                    title: S,
                    link: R,
                    index: I,
                    showNumbers: T,
                    theme: P,
                    size: F
                } = e,
                _ = void 0 === F ? "Standard" : F;
            N[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                opacity: 0,
                translateY: 32
            }, N[0] = a) : a = N[0];
            let D = (I + 1) * .2;
            N[1] !== D ? (l = {
                duration: .6,
                delay: D,
                ease: "easeOut"
            }, N[1] = D, N[2] = l) : l = N[2], N[3] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                opacity: 1,
                translateY: 0
            }, i = {
                once: !0
            }, N[3] = n, N[4] = i) : (n = N[3], i = N[4]), N[5] !== _ || N[6] !== P ? (s = (0, c.default)(x({
                variant: _ || "Standard",
                theme: P || "dark"
            }), "w-full min-w-0 md:flex-1"), N[5] = _, N[6] = P, N[7] = s) : s = N[7];
            let L = `feature-details-${I+1}`;
            N[8] !== I || N[9] !== T || N[10] !== P ? (o = T && (0, t.jsxs)("div", {
                className: (0, c.default)("heading-3-semi-bold absolute start-8 top-8 flex items-center justify-center text-center", "dark" === P ? "text-white" : "text-black"),
                children: [(0, t.jsx)(f, {
                    theme: P
                }), (0, t.jsx)("span", {
                    className: "absolute pe-8",
                    children: I + 1
                })]
            }), N[8] = I, N[9] = T, N[10] = P, N[11] = o) : o = N[11], N[12] !== E ? (m = E && (0, t.jsx)(p.default, {
                src: E.url,
                alt: E.title ? ? "",
                height: 260,
                width: 384,
                className: "flex max-h-256 w-full bg-white/20 object-cover md:max-h-full"
            }), N[12] = E, N[13] = m) : m = N[13];
            let A = "Compact" === _ ? "items-center gap-12 p-24 text-center" : "gap-16 p-32 text-start";
            N[14] !== A ? (v = (0, c.default)("flex flex-col", A), N[14] = A, N[15] = v) : v = N[15];
            let O = "Compact" === _ ? "heading-4-semi-bold" : "heading-3-semi-bold";
            return N[16] !== O ? (g = (0, c.default)("m-0", O), N[16] = O, N[17] = g) : g = N[17], N[18] !== g || N[19] !== S ? (b = (0, t.jsx)("h3", {
                className: g,
                children: S
            }), N[18] = g, N[19] = S, N[20] = b) : b = N[20], N[21] !== C || N[22] !== _ || N[23] !== P ? (y = C && (0, t.jsx)(t.Fragment, {
                children: "string" == typeof C ? (0, t.jsx)("p", {
                    className: (0, c.default)("Compact" === _ ? "body-1 font-normal" : "heading-4", "dark" === P ? "text-neutral-200" : "text-neutral-800"),
                    children: C
                }) : (0, t.jsx)(u.default, {
                    content: C,
                    className: (0, c.default)("rich-text-p:m-0", "Compact" === _ ? "body-1 font-normal" : "heading-4", "dark" === P ? "text-neutral-200" : "text-neutral-800")
                })
            }), N[21] = C, N[22] = _, N[23] = P, N[24] = y) : y = N[24], N[25] !== R || N[26] !== _ || N[27] !== P ? (w = R && (0, t.jsx)(h, {
                link: R,
                theme: P,
                size: "Compact" === _ ? "small" : "large"
            }), N[25] = R, N[26] = _, N[27] = P, N[28] = w) : w = N[28], N[29] !== v || N[30] !== b || N[31] !== y || N[32] !== w ? (j = (0, t.jsxs)("div", {
                className: v,
                children: [b, y, w]
            }), N[29] = v, N[30] = b, N[31] = y, N[32] = w, N[33] = j) : j = N[33], N[34] !== I || N[35] !== m || N[36] !== j || N[37] !== l || N[38] !== s || N[39] !== L || N[40] !== o ? (k = (0, t.jsxs)(d.motion.div, {
                initial: a,
                transition: l,
                whileInView: n,
                viewport: i,
                className: s,
                "data-cs-override-id": L,
                children: [o, m, j]
            }, I), N[34] = I, N[35] = m, N[36] = j, N[37] = l, N[38] = s, N[39] = L, N[40] = o, N[41] = k) : k = N[41], k
        };
    var g = e.i(335536),
        b = e.i(660600);
    let y = e => {
        let a, l, n = (0, r.c)(8),
            {
                tabsList: i,
                setSelectedIndex: s,
                selectedIndex: d,
                theme: u
            } = e,
            m = void 0 === u ? "dark" : u;
        return n[0] !== d || n[1] !== i || n[2] !== m ? (a = e => {
            let {
                open: r
            } = e;
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)(b.ListboxButton, {
                    className: (0, c.default)("sm:body-3 relative flex w-full cursor-default items-center justify-between rounded-xs border border-neutral-300 bg-white py-8 ps-12 pe-12 text-start", "dark" === m ? "border-gray-300 bg-neutral-800 text-white" : "border-neutral-400 bg-neutral-100 text-black"),
                    children: [i[d], (0, t.jsx)(o.default, {
                        name: "chevronDown",
                        size: 25,
                        color: "light" === m ? "black" : "white"
                    })]
                }), r && (0, t.jsx)(b.ListboxOptions, {
                    static: !0,
                    className: (0, c.default)("body-1 font-normal sm:body-3 absolute z-20 mt-4 max-h-256 w-full overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none", "dark" === m ? "border-gray-300 bg-neutral-800 text-white" : "border-neutral-400 bg-neutral-100 text-black"),
                    children: i.map((e, r) => (0, t.jsx)(b.ListboxOption, {
                        className: (0, c.default)("relative cursor-default py-8 ps-12 pe-16 ring-black/5 select-none", "dark" === m ? "data-focus:bg-white/10" : "data-focus:bg-black/10"),
                        value: r,
                        children: e
                    }, e))
                })]
            })
        }, n[0] = d, n[1] = i, n[2] = m, n[3] = a) : a = n[3], n[4] !== d || n[5] !== s || n[6] !== a ? (l = (0, t.jsx)(b.Listbox, {
            value: d,
            onChange: s,
            children: a
        }), n[4] = d, n[5] = s, n[6] = a, n[7] = l) : l = n[7], l
    };
    e.i(214495);
    var w = e.i(744295),
        j = e.i(722846);
    e.s([], 906550);
    let k = e => {
        let a, l, n, s, o, m, h, f, p, x, b, k, E, C, S, R, I, T, P, F, _, D, L = (0, r.c)(72),
            {
                title: A,
                subtitle: O,
                text: M,
                showNumbers: U,
                hideBackground: G,
                cards: V,
                cards2: z,
                cards3: H,
                tab1: B,
                tab2: K,
                tab3: $,
                theme: W,
                size: q
            } = e,
            Q = void 0 === U || U,
            Y = void 0 === W ? "dark" : W,
            Z = void 0 === q ? "Standard" : q,
            [J, X] = (0, i.useState)(0);
        if (!V || V.length < 1) return null;
        L[0] !== B || L[1] !== K || L[2] !== $ ? (a = [B, K, $].filter(Boolean), L[0] = B, L[1] = K, L[2] = $, L[3] = a) : a = L[3];
        let ee = a;
        if (L[4] !== V || L[5] !== z || L[6] !== H || L[7] !== G || L[8] !== J || L[9] !== Q || L[10] !== Z || L[11] !== O || L[12] !== ee || L[13] !== Y || L[14] !== A) {
            let e = [V, z, H].filter(N),
                r = !G && ("dark" === Y ? "bg-black text-white" : "bg-neutral-50 text-black");
            L[30] !== r ? (p = (0, c.default)(r), L[30] = r, L[31] = p) : p = L[31], x = "features-block", b = "features-block", s = w.default;
            let a = "Compact" === Z ? "items-start text-start" : "items-center text-center";
            L[32] !== a ? (m = (0, c.default)("flex flex-col", a), L[32] = a, L[33] = m) : m = L[33], L[34] !== O || L[35] !== A ? (h = A && (0, t.jsx)(d.motion.h2, {
                initial: {
                    opacity: 0,
                    translateY: 32
                },
                transition: {
                    duration: .6,
                    ease: "easeOut"
                },
                whileInView: {
                    opacity: 1,
                    translateY: 0
                },
                viewport: {
                    once: !0
                },
                className: (0, c.default)("responsive-display-4", O ? "mb-12" : "mb-32"),
                children: A
            }), L[34] = O, L[35] = A, L[36] = h) : h = L[36], L[37] !== O || L[38] !== Y ? (f = O && (0, t.jsx)(d.motion.p, {
                initial: {
                    opacity: 0,
                    translateY: 32
                },
                transition: {
                    duration: .6,
                    ease: "easeOut"
                },
                whileInView: {
                    opacity: 1,
                    translateY: 0
                },
                viewport: {
                    once: !0
                },
                className: (0, c.default)("heading-4 mb-32", "light" === Y && "text-neutral-800"),
                children: O
            }), L[37] = O, L[38] = Y, L[39] = f) : f = L[39], n = g.TabGroup, C = J, S = X, R = "w-full", L[40] !== J || L[41] !== Z || L[42] !== ee || L[43] !== Y ? (o = ee.length > 1 && "Compact" !== Z && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "mb-32 hidden sm:block",
                    children: (0, t.jsx)(j.default, {
                        tabsList: ee,
                        theme: Y,
                        selectedIndex: J
                    })
                }), (0, t.jsx)("div", {
                    className: "relative mb-32 sm:hidden",
                    children: (0, t.jsx)(y, {
                        tabsList: ee,
                        theme: Y,
                        selectedIndex: J,
                        setSelectedIndex: X
                    })
                })]
            }), L[40] = J, L[41] = Z, L[42] = ee, L[43] = Y, L[44] = o) : o = L[44], l = g.TabPanels, k = "w-full", E = e.map((e, r) => (0, t.jsx)(g.TabPanel, {
                className: "flex w-full flex-col gap-24 md:flex-row md:items-stretch",
                children: e ? .map((e, r) => {
                    let {
                        image: a,
                        description: l,
                        title: n,
                        link: i
                    } = e;
                    return (0, t.jsx)(v, {
                        image: a,
                        description: l,
                        title: n,
                        link: i,
                        index: r,
                        showNumbers: !!Q && "Compact" !== Z,
                        theme: Y,
                        size: Z
                    }, r)
                })
            }, `section-${r}`)), L[4] = V, L[5] = z, L[6] = H, L[7] = G, L[8] = J, L[9] = Q, L[10] = Z, L[11] = O, L[12] = ee, L[13] = Y, L[14] = A, L[15] = l, L[16] = n, L[17] = s, L[18] = o, L[19] = m, L[20] = h, L[21] = f, L[22] = p, L[23] = x, L[24] = b, L[25] = k, L[26] = E, L[27] = C, L[28] = S, L[29] = R
        } else l = L[15], n = L[16], s = L[17], o = L[18], m = L[19], h = L[20], f = L[21], p = L[22], x = L[23], b = L[24], k = L[25], E = L[26], C = L[27], S = L[28], R = L[29];
        return L[45] !== l || L[46] !== k || L[47] !== E ? (I = (0, t.jsx)(l, {
            className: k,
            children: E
        }), L[45] = l, L[46] = k, L[47] = E, L[48] = I) : I = L[48], L[49] !== n || L[50] !== o || L[51] !== I || L[52] !== C || L[53] !== S || L[54] !== R ? (T = (0, t.jsxs)(n, {
            selectedIndex: C,
            onChange: S,
            className: R,
            children: [o, I]
        }), L[49] = n, L[50] = o, L[51] = I, L[52] = C, L[53] = S, L[54] = R, L[55] = T) : T = L[55], L[56] !== m || L[57] !== h || L[58] !== f || L[59] !== T ? (P = (0, t.jsxs)("div", {
            className: m,
            children: [h, f, T]
        }), L[56] = m, L[57] = h, L[58] = f, L[59] = T, L[60] = P) : P = L[60], L[61] !== M ? (F = M && (0, t.jsx)("div", {
            className: "mt-32 flex items-center justify-center text-center",
            children: (0, t.jsx)(u.default, {
                content: M,
                className: "rich-text-p:block rich-text-p:w-full rich-text-p:text-neutral-500 rich-text-p:body-3 rich-text-a:text-neutral-500 block w-full"
            })
        }), L[61] = M, L[62] = F) : F = L[62], L[63] !== s || L[64] !== P || L[65] !== F ? (_ = (0, t.jsxs)(s, {
            children: [P, F]
        }), L[63] = s, L[64] = P, L[65] = F, L[66] = _) : _ = L[66], L[67] !== p || L[68] !== x || L[69] !== b || L[70] !== _ ? (D = (0, t.jsx)("div", {
            className: p,
            "data-cs-override-id": x,
            "data-testid": b,
            children: _
        }), L[67] = p, L[68] = x, L[69] = b, L[70] = _, L[71] = D) : D = L[71], D
    };

    function N(e) {
        return e ? .length
    }
}, 692932, 355168, e => {
    "use strict";
    e.s(["default", () => o], 692932);
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(149818);
    e.i(234236);
    var l = e.i(387464),
        n = e.i(126019),
        i = e.i(495854);
    let s = e => {
        let a, l, s, o = (0, r.c)(10),
            {
                keySellingFeatures: c,
                theme: d
            } = e,
            u = void 0 === d ? "light" : d,
            m = "dark" === u ? "border-neutral-600" : "border-neutral-200";
        if (o[0] !== m ? (a = (0, i.default)("flex justify-center gap-16 rounded-md border px-16 py-16 md:gap-24 md:px-24", m), o[0] = m, o[1] = a) : a = o[1], o[2] !== c || o[3] !== u) {
            let e;
            o[5] !== u ? (e = e => (0, t.jsxs)("div", {
                className: (0, i.default)("flex flex-1 flex-col items-center gap-8", "dark" === u && "invert"),
                children: [(0, t.jsx)(n.default, {
                    src: e.url,
                    alt: e.title ? ? "",
                    width: 40,
                    height: 40
                }), (0, t.jsx)("span", {
                    className: "text-center text-neutral-700 body-4",
                    children: e.description ? ? ""
                })]
            }, e.title), o[5] = u, o[6] = e) : e = o[6], l = c.map(e), o[2] = c, o[3] = u, o[4] = l
        } else l = o[4];
        return o[7] !== a || o[8] !== l ? (s = (0, t.jsx)("div", {
            className: a,
            "data-cs-override-id": "recover-ksp-block",
            children: l
        }), o[7] = a, o[8] = l, o[9] = s) : s = o[9], s
    };
    e.s(["default", 0, s], 355168);
    let o = e => {
        let n, o, c, d, u, m, h, f = (0, r.c)(21),
            {
                theme: p
            } = e,
            x = void 0 === p ? "light" : p,
            {
                getRecover: v
            } = (0, a.useTrustServicesApi)();
        f[0] !== v ? (n = v(), f[0] = v, f[1] = n) : n = f[1];
        let g = n;
        if (!g) return null;
        let {
            keySellingFeatures: b,
            questions: y
        } = g, w = b.items, j = y.items;
        return f[2] !== g.secondaryDrawerTitle || f[3] !== x ? (o = g.secondaryDrawerTitle && (0, t.jsx)("h3", {
            className: (0, i.default)("w-full heading-1-semi-bold", "dark" === x ? "text-white" : "text-black"),
            children: g.secondaryDrawerTitle
        }), f[2] = g.secondaryDrawerTitle, f[3] = x, f[4] = o) : o = f[4], f[5] !== g.secondaryDrawerSubtitle || f[6] !== x ? (c = g.secondaryDrawerSubtitle && (0, t.jsx)("p", {
            className: (0, i.default)("w-full heading-3-semi-bold font-normal", "dark" === x ? "text-neutral-300" : "text-neutral-800"),
            children: g.secondaryDrawerSubtitle
        }), f[5] = g.secondaryDrawerSubtitle, f[6] = x, f[7] = c) : c = f[7], f[8] !== o || f[9] !== c ? (d = (0, t.jsxs)("div", {
            className: "flex w-full flex-col items-center gap-16 text-center",
            children: [o, c]
        }), f[8] = o, f[9] = c, f[10] = d) : d = f[10], f[11] !== w || f[12] !== x ? (u = w && w.length > 0 && (0, t.jsx)("div", {
            className: "w-full max-w-[536px]",
            children: (0, t.jsx)(s, {
                keySellingFeatures: w,
                theme: x
            })
        }), f[11] = w, f[12] = x, f[13] = u) : u = f[13], f[14] !== j || f[15] !== x ? (m = j && j.length > 0 && (0, t.jsx)("div", {
            className: "w-full max-w-[536px]",
            children: (0, t.jsx)(l.default, {
                theme: x,
                questions: j,
                dataCsOverrideId: null
            })
        }), f[14] = j, f[15] = x, f[16] = m) : m = f[16], f[17] !== d || f[18] !== u || f[19] !== m ? (h = (0, t.jsxs)("div", {
            className: "flex flex-col items-center gap-32 px-8 pb-32 pt-40",
            children: [d, u, m]
        }), f[17] = d, f[18] = u, f[19] = m, f[20] = h) : h = f[20], h
    }
}, 828684, 557398, 270314, 992219, 227452, 47857, 843888, 946262, 827031, 454720, e => {
    "use strict";
    e.s([], 828684), e.s(["default", () => q], 454720);
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(648684),
        l = e.i(191788);
    e.i(664157);
    var n = e.i(271179);
    e.s(["default", () => W], 827031), e.i(161465);
    var i = e.i(458211);
    e.i(409931);
    var s = e.i(943960),
        o = e.i(462948),
        c = e.i(692932);
    e.i(214495);
    var d = e.i(744295),
        u = e.i(126019),
        m = e.i(495854),
        h = e.i(860231),
        f = e.i(799444);
    e.i(831184);
    var p = e.i(229620);
    let x = e => {
        let t, a, l, i, s = (0, r.c)(11),
            {
                products: o,
                sku: c,
                translationKey: d,
                useLowest: u
            } = e,
            m = void 0 !== u && u,
            {
                t: h
            } = (0, n.useTranslation)("common");
        s[0] !== o || s[1] !== c ? (t = c ? o.filter(e => e.sku === c) : o, s[0] = o, s[1] = c, s[2] = t) : t = s[2];
        let p = t;
        s[3] !== p ? (a = p.map(v), s[3] = p, s[4] = a) : a = s[4];
        let x = a,
            {
                prices: g
            } = (0, f.default)(x);
        if (!g) return null;
        if (s[5] !== g || s[6] !== h || s[7] !== d || s[8] !== m) {
            i = Symbol.for("react.early_return_sentinel");
            e: {
                let e = m ? 0 === g.length ? null : g.reduce((e, t) => t.amount < e.amount ? t : e).label ? ? null : g[0] ? .label ? ? null;
                if (!e) {
                    i = null;
                    break e
                }
                l = h(d, {
                    price: e
                })
            }
            s[5] = g, s[6] = h, s[7] = d, s[8] = m, s[9] = l, s[10] = i
        } else l = s[9], i = s[10];
        return i !== Symbol.for("react.early_return_sentinel") ? i : l
    };

    function v(e) {
        return (0, p.isProduction)() ? e.id.production : e.id.staging
    }
    let g = [{
            id: {
                staging: "gid://shopify/ProductVariant/48988283961618",
                production: "gid://shopify/ProductVariant/48033097482570"
            },
            sku: "lrecover-subs-6m"
        }, {
            id: {
                staging: "gid://shopify/ProductVariant/45654546284818",
                production: "gid://shopify/ProductVariant/47168023232842"
            },
            sku: "lrecover-subs-1y"
        }, {
            id: {
                staging: "gid://shopify/ProductVariant/45654546317586",
                production: "gid://shopify/ProductVariant/47168023265610"
            },
            sku: "lrecover-subs-3y"
        }],
        b = [{
            id: {
                staging: "gid://shopify/ProductVariant/48376074567954",
                production: "gid://shopify/ProductVariant/47825738367306"
            },
            sku: "cryptotag-zeus-01"
        }, {
            id: {
                staging: "gid://shopify/ProductVariant/45252820533522",
                production: "gid://shopify/ProductVariant/39340115787848"
            },
            sku: "lbill"
        }];
    e.i(643781);
    var y = e.i(989606);
    let w = e => {
        var a;
        let l, n, i, s, o, c, d, u = (0, r.c)(8),
            {
                bundle: m
            } = e,
            h = ((o = (0, r.c)(1))[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                products: b,
                translationKey: "productCards.lowestPriceFrom",
                useLowest: !0
            }, o[0] = s) : s = o[0], x(s)),
            f = (a = "lrecover-subs-1y", (d = (0, r.c)(2))[0] !== a ? (c = {
                products: g,
                sku: a,
                translationKey: "productCards.pricePerYear"
            }, d[0] = a, d[1] = c) : c = d[1], x(c));
        if ("metalProtection" !== m.id && "ledgerRecover" !== m.id) return null;
        let {
            id: p,
            link: v
        } = m, {
            label: w,
            url: j
        } = v, k = "metalProtection" === p ? h : f;
        return k ? (u[0] !== k ? (l = (0, t.jsx)("p", {
            className: "heading-5-semi-bold md:heading-4-semi-bold",
            children: k
        }), u[0] = k, u[1] = l) : l = u[1], u[2] !== w || u[3] !== j ? (n = (0, t.jsx)(y.default, {
            variant: "primary-black",
            size: "medium",
            label: w,
            href: j
        }), u[2] = w, u[3] = j, u[4] = n) : n = u[4], u[5] !== l || u[6] !== n ? (i = (0, t.jsxs)(t.Fragment, {
            children: [l, n]
        }), u[5] = l, u[6] = n, u[7] = i) : i = u[7], i) : null
    };
    e.i(47620);
    var j = e.i(79564);
    let k = e => {
        let a, l, i, s, o, c, d, u = (0, r.c)(19),
            {
                productVariant: m
            } = e,
            {
                handle: h,
                maxQuantityAllowed: p,
                variantId: x
            } = m;
        u[0] !== x ? (a = [x], u[0] = x, u[1] = a) : a = u[1];
        let {
            prices: v
        } = (0, f.default)(a), {
            t: g
        } = (0, n.useTranslation)("common");
        u[2] === Symbol.for("react.memo_cache_sentinel") ? (l = {
            placement: "comparisonTable"
        }, u[2] = l) : l = u[2];
        let {
            add: b
        } = (0, j.default)(l), w = v ? .[0] ? .label;
        if (!w) return null;
        u[3] !== b || u[4] !== h || u[5] !== p || u[6] !== x ? (i = () => b([{
            product: {
                handle: h,
                maxQuantityAllowed: p
            },
            variantId: x
        }]), u[3] = b, u[4] = h, u[5] = p, u[6] = x, u[7] = i) : i = u[7];
        let k = i;
        u[8] !== w ? (s = (0, t.jsx)("p", {
            className: "heading-5-semi-bold md:heading-4-semi-bold",
            children: w
        }), u[8] = w, u[9] = s) : s = u[9], u[10] !== g ? (o = g("productCards.addToCard"), u[10] = g, u[11] = o) : o = u[11];
        let N = `add-to-cart-comparison-table-${h}`;
        return u[12] !== k || u[13] !== o || u[14] !== N ? (c = (0, t.jsx)(y.default, {
            label: o,
            onClick: k,
            dataCsOverrideId: N,
            size: "medium"
        }), u[12] = k, u[13] = o, u[14] = N, u[15] = c) : c = u[15], u[16] !== s || u[17] !== c ? (d = (0, t.jsxs)(t.Fragment, {
            children: [s, c]
        }), u[16] = s, u[17] = c, u[18] = d) : d = u[18], d
    };
    var N = e.i(44073);
    let E = e => {
        let a, n, i, s, o, c, d, u, h = (0, r.c)(19),
            {
                table: f
            } = e;
        switch (f.totalColumns) {
            case 3:
                a = "grid-cols-2 lg:grid-cols-3";
                break;
            case 4:
                a = "grid-cols-2 lg:grid-cols-4";
                break;
            default:
                a = "grid-cols-2"
        }
        let p = a;
        switch (f.totalColumns) {
            case 3:
                n = "col-span-2 lg:col-span-3";
                break;
            case 4:
                n = "col-span-2 lg:col-span-4";
                break;
            default:
                n = "col-span-2"
        }
        let x = n;
        if (h[0] !== p ? (i = (0, m.default)("grid", p), h[0] = p, h[1] = i) : i = h[1], h[2] !== f.headers ? (s = f.headers.map(S), h[2] = f.headers, h[3] = s) : s = h[3], h[4] !== s ? (o = (0, t.jsx)("thead", {
                className: "contents",
                children: (0, t.jsx)("tr", {
                    className: "contents",
                    children: s
                })
            }), h[4] = s, h[5] = o) : o = h[5], h[6] !== x || h[7] !== f.sections || h[8] !== f.totalColumns) {
            let e;
            h[10] !== x || h[11] !== f.totalColumns ? (e = e => (0, t.jsxs)(l.Fragment, {
                children: [(0, t.jsx)("tr", {
                    className: "contents",
                    children: (0, t.jsx)("th", {
                        className: (0, m.default)("border-y border-neutral-200 bg-neutral-100 p-16 heading-5-semi-bold md:border-b md:border-t-0", x),
                        colSpan: f.totalColumns,
                        children: e.title
                    })
                }), e.rows.map(F)]
            }, e.title), h[10] = x, h[11] = f.totalColumns, h[12] = e) : e = h[12], c = f.sections.map(e), h[6] = x, h[7] = f.sections, h[8] = f.totalColumns, h[9] = c
        } else c = h[9];
        return h[13] !== c ? (d = (0, t.jsx)("tbody", {
            className: "contents",
            children: c
        }), h[13] = c, h[14] = d) : d = h[14], h[15] !== i || h[16] !== o || h[17] !== d ? (u = (0, t.jsxs)("table", {
            className: i,
            children: [o, d]
        }), h[15] = i, h[16] = o, h[17] = d, h[18] = u) : u = h[18], u
    };

    function C(e, r) {
        return (0, t.jsx)("div", {
            className: "mt-16 text-neutral-600 body-3",
            children: e
        }, r)
    }

    function S(e, r) {
        return (0, t.jsxs)("th", {
            className: (0, m.default)("flex flex-col justify-between border-s border-neutral-200 p-16 pb-24", r > 1 && "hidden lg:flex lg:flex-col", 0 === r && "border-0"),
            children: [(0, t.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [e.headerTag && (0, t.jsx)("div", {
                    className: "relative -mt-16 h-16 self-center",
                    children: (0, t.jsx)(N.default, {
                        size: "small",
                        variant: "purple",
                        label: e.headerTag
                    })
                }), (0, t.jsx)("div", {
                    className: "relative aspect-square h-112 w-112 md:h-[200px] md:w-[200px]",
                    children: (0, t.jsx)(u.default, {
                        src: e.image.url,
                        alt: e.title,
                        fill: !0,
                        priority: !0,
                        className: "object-contain"
                    })
                }), (0, t.jsx)("div", {
                    className: "mb-16 heading-5-semi-bold",
                    children: e.title
                }), (0, t.jsxs)("div", {
                    className: "text-neutral-600 body-3 md:body-1 md:font-normal",
                    children: [e.description[0], e.description.slice(1).map(C)]
                })]
            }), (0, t.jsxs)("div", {
                className: "mt-16 flex flex-col items-center gap-16",
                children: [e.bundle && (0, t.jsx)(w, {
                    bundle: e.bundle
                }), e.productVariant && (0, t.jsx)(k, {
                    productVariant: e.productVariant
                })]
            })]
        }, e.title)
    }

    function R(e) {
        return (0, h.isValidIcon)(e)
    }

    function I(e, r) {
        return (0, t.jsxs)(l.Fragment, {
            children: [(0, t.jsx)("span", {
                className: "block md:hidden",
                children: (0, t.jsx)(h.default, {
                    name: e,
                    size: 24,
                    color: "black",
                    strokeWidth: 2.5 * ("flex" !== e)
                }, r)
            }), (0, t.jsx)("span", {
                className: "hidden md:block",
                children: (0, t.jsx)(h.default, {
                    name: e,
                    size: 32,
                    color: "black",
                    strokeWidth: 2.5 * ("flex" !== e)
                }, r)
            })]
        }, e + r)
    }

    function T(e, r) {
        return (0, t.jsx)("div", {
            children: e
        }, r)
    }

    function P(e, r) {
        return (0, t.jsxs)("td", {
            className: (0, m.default)("flex flex-col items-center justify-center gap-8 border-s border-neutral-200 px-8 py-24", r > 1 && "hidden lg:flex", 0 === r && "border-0"),
            children: [e.iconIds.length > 0 && (0, t.jsx)("div", {
                className: "flex items-center gap-8",
                children: e.iconIds.filter(R).map(I)
            }), (0, t.jsx)("div", {
                className: "flex flex-col items-center text-center text-neutral-800 body-3",
                children: e.text.map(T)
            })]
        }, r)
    }

    function F(e, r) {
        return (0, t.jsx)("tr", {
            className: "contents",
            children: e.cells.map(P)
        }, r)
    }
    var _ = e.i(660600);
    e.i(108399);
    let D = e => {
            let a, l, n, i, s, o, c, d, f, p, x, v = (0, r.c)(44),
                {
                    onChange: g,
                    options: b,
                    theme: y
                } = e,
                w = void 0 === y ? "light" : y,
                j = b[0];
            if (v[0] !== j.image.url || v[1] !== j.label || v[2] !== j.value || v[3] !== g || v[4] !== b || v[5] !== w) {
                let e, r, f, p, x, y = b.slice(1);
                l = _.Listbox, c = j.value, d = g, s = "relative";
                let k = "dark" === w && "border-neutral-600 bg-black text-white",
                    N = "light" === w && "border-neutral-300 bg-white text-black";
                v[14] !== k || v[15] !== N ? (e = (0, m.default)("relative flex w-full cursor-default items-center gap-8 rounded-xs border px-12 py-8 text-left sm:body-3", k, N), v[14] = k, v[15] = N, v[16] = e) : e = v[16], v[17] !== j.image.url ? (r = (0, t.jsx)(u.default, {
                    src: j.image.url,
                    alt: "",
                    width: 32,
                    height: 32,
                    className: "h-32 w-32 object-contain"
                }), v[17] = j.image.url, v[18] = r) : r = v[18], v[19] !== j.label ? (f = (0, t.jsx)("span", {
                    className: "block truncate",
                    children: j.label
                }), v[19] = j.label, v[20] = f) : f = v[20], v[21] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)("div", {
                    className: "ms-auto",
                    children: (0, t.jsx)(h.default, {
                        name: "chevronDown",
                        size: 25,
                        strokeWidth: 3.5,
                        color: "current"
                    })
                }), v[21] = p) : p = v[21], v[22] !== e || v[23] !== r || v[24] !== f ? (o = (0, t.jsxs)(_.ListboxButton, {
                    className: e,
                    children: [r, f, p]
                }), v[22] = e, v[23] = r, v[24] = f, v[25] = o) : o = v[25], a = _.ListboxOptions;
                let E = "dark" === w && "bg-black text-white ring-neutral-800",
                    C = "light" === w && "bg-white text-black ring-neutral-200";
                v[26] !== E || v[27] !== C ? (n = (0, m.default)("absolute z-20 mt-16 max-h-256 w-full overflow-auto rounded-xs py-16 shadow-lg ring-1 body-1 font-normal focus:outline-none sm:body-3", E, C), v[26] = E, v[27] = C, v[28] = n) : n = v[28], v[29] !== w ? (x = e => {
                    let {
                        image: r,
                        label: a,
                        value: l
                    } = e;
                    return (0, t.jsxs)(_.ListboxOption, {
                        className: (0, m.default)("relative flex cursor-default select-none gap-8 py-8 pl-12 pr-16", "dark" === w && "text-white hover:bg-neutral-900 focus:bg-neutral-900"),
                        value: l,
                        children: [(0, t.jsx)(u.default, {
                            src: r.url,
                            alt: "",
                            width: 32,
                            height: 32,
                            className: "h-32 w-32 object-contain"
                        }), (0, t.jsx)("span", {
                            className: "block truncate",
                            children: a
                        })]
                    }, l)
                }, v[29] = w, v[30] = x) : x = v[30], i = y.map(x), v[0] = j.image.url, v[1] = j.label, v[2] = j.value, v[3] = g, v[4] = b, v[5] = w, v[6] = a, v[7] = l, v[8] = n, v[9] = i, v[10] = s, v[11] = o, v[12] = c, v[13] = d
            } else a = v[6], l = v[7], n = v[8], i = v[9], s = v[10], o = v[11], c = v[12], d = v[13];
            return v[31] !== a || v[32] !== n || v[33] !== i ? (f = (0, t.jsx)(a, {
                className: n,
                children: i
            }), v[31] = a, v[32] = n, v[33] = i, v[34] = f) : f = v[34], v[35] !== s || v[36] !== o || v[37] !== f ? (p = (0, t.jsxs)("div", {
                className: s,
                children: [o, f]
            }), v[35] = s, v[36] = o, v[37] = f, v[38] = p) : p = v[38], v[39] !== l || v[40] !== c || v[41] !== d || v[42] !== p ? (x = (0, t.jsx)(l, {
                value: c,
                onChange: d,
                children: p
            }), v[39] = l, v[40] = c, v[41] = d, v[42] = p, v[43] = x) : x = v[43], x
        },
        L = e => {
            let a, l, i, s, o, c, d, u, h, f, p = (0, r.c)(22),
                {
                    comparisons: x,
                    setPosition: v
                } = e,
                {
                    t: g
                } = (0, n.useTranslation)("sections");
            if (p[0] !== x) {
                let e = x.map(A);
                a = [e[0], ...e.slice(2)], l = e.slice(1), p[0] = x, p[1] = a, p[2] = l
            } else a = p[1], l = p[2];
            let b = l;
            p[3] !== v ? (i = e => v(e, 0), p[3] = v, p[4] = i) : i = p[4];
            let y = i;
            p[5] !== v ? (s = e => v(e, 1), p[5] = v, p[6] = s) : s = p[6];
            let w = s;
            return p[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, m.default)("text-center body-1-semi-bold"), p[7] = o) : o = p[7], p[8] !== g ? (c = g("comparison.selectLabel"), p[8] = g, p[9] = c) : c = p[9], p[10] !== c ? (d = (0, t.jsx)("p", {
                className: o,
                children: c
            }), p[10] = c, p[11] = d) : d = p[11], p[12] !== a || p[13] !== y ? (u = (0, t.jsx)(D, {
                onChange: y,
                options: a
            }), p[12] = a, p[13] = y, p[14] = u) : u = p[14], p[15] !== b || p[16] !== w ? (h = (0, t.jsx)(D, {
                onChange: w,
                options: b
            }), p[15] = b, p[16] = w, p[17] = h) : h = p[17], p[18] !== d || p[19] !== u || p[20] !== h ? (f = (0, t.jsxs)("div", {
                className: "mb-20 flex flex-col gap-12",
                children: [d, u, h]
            }), p[18] = d, p[19] = u, p[20] = h, p[21] = f) : f = p[21], f
        };

    function A(e) {
        let {
            image: t,
            title: r
        } = e;
        return {
            image: t,
            label: r,
            value: r
        }
    }
    let O = e => {
        let a, n, i, s, o, c, u, m, h = (0, r.c)(15),
            {
                comparisons: f,
                localizedSectionTitles: p,
                title: x,
                verticalSpacing: v
            } = e,
            g = void 0 === v ? "small" : v,
            [b, y] = (0, l.useState)(f),
            w = (c = b.map(e => ({
                title: e.title,
                headerTag: e.headerTag,
                description: e.description,
                image: e.image,
                bundle: "linkedBundle" === e.type ? {
                    id: e.bundleId,
                    link: e.link
                } : null,
                productVariant: "productVariant" === e.type ? e.productVariant : null
            })), u = new Set, b.forEach(e => {
                e.details.forEach(e => {
                    u.add(e.key)
                })
            }), m = Array.from(u).map(e => {
                let t = b.map(t => {
                    let r = t.details.find(t => t.key === e);
                    return {
                        iconIds: r ? .iconIds || [],
                        text: r ? .text || []
                    }
                });
                return {
                    title: p[e],
                    rows: [{
                        cells: t
                    }]
                }
            }), {
                totalColumns: b.length,
                headers: c,
                sections: m
            });
        h[0] !== b ? (a = (e, t) => {
            let r = b.find(t => {
                    let {
                        title: r
                    } = t;
                    return r === e
                }),
                a = +(0 === t),
                l = 0 === t ? r : b[0],
                n = 1 === t ? r : b[1],
                i = b.filter((e, t) => e !== r && t !== a);
            l && n && l !== n && y([l, n, ...i])
        }, h[0] = b, h[1] = a) : a = h[1];
        let j = a;
        return h[2] !== x ? (n = x && (0, t.jsx)("h2", {
            className: "mb-56 text-center responsive-display-4",
            children: x
        }), h[2] = x, h[3] = n) : n = h[3], h[4] !== f.length || h[5] !== b || h[6] !== j ? (i = f.length > 2 && (0, t.jsx)("div", {
            className: "lg:hidden",
            children: (0, t.jsx)(L, {
                comparisons: b,
                setPosition: j
            })
        }), h[4] = f.length, h[5] = b, h[6] = j, h[7] = i) : i = h[7], h[8] !== w ? (s = (0, t.jsx)(E, {
            table: w
        }), h[8] = w, h[9] = s) : s = h[9], h[10] !== n || h[11] !== i || h[12] !== s || h[13] !== g ? (o = (0, t.jsx)("div", {
            className: "bg-white",
            children: (0, t.jsxs)(d.default, {
                dataCsOverrideId: "recovery-solutions",
                verticalSpacing: g,
                children: [n, i, s]
            })
        }), h[10] = n, h[11] = i, h[12] = s, h[13] = g, h[14] = o) : o = h[14], o
    };
    e.s(["default", 0, O], 557398);
    let M = [{
            type: "simple",
            headerTag: "",
            image: {
                url: "/images/recovery-solutions/basicRecoverySheets-light.webp"
            },
            title: "Basic Recovery Sheets",
            description: ["Classic sheets of paper you can use to hand write your 24-word Secret Recovery Phrase. Your primary back up access to your assets.", "Included with all Ledger devices"],
            details: [{
                key: "backupCompatibility",
                iconIds: ["flex", "stax", "nano"],
                text: ["All Ledger devices"]
            }, {
                key: "seedProtection",
                iconIds: ["starFill"],
                text: ["Offline record", "Legible by anyone"]
            }, {
                key: "risks",
                iconIds: ["starFill"],
                text: ["High risks"]
            }, {
                key: "backupProtection",
                iconIds: ["cross"],
                text: ["Legible by anyone"]
            }, {
                key: "risksMistakes",
                iconIds: [],
                text: ["Subject to copy errors"]
            }, {
                key: "setupAndRestore",
                iconIds: [],
                text: ["10 minutes"]
            }]
        }, {
            type: "productVariant",
            productVariant: {
                handle: "ledger-recovery-key",
                maxQuantityAllowed: 8,
                variantId: "gid://shopify/ProductVariant/51260118794570"
            },
            headerTag: "New",
            image: {
                url: "/images/recovery-solutions/ledgerRecoveryKey-light.webp"
            },
            title: "Ledger Recovery Key",
            description: ["A fully encrypted physical backup of your Secret Recovery Phrase you can use to restore access to your assets with a quick, simple tap.", "Included with all new touchscreen devices"],
            details: [{
                key: "backupCompatibility",
                iconIds: ["flex", "stax"],
                text: ["All Ledger touchscreen devices"]
            }, {
                key: "seedProtection",
                iconIds: ["starFill", "starFill"],
                text: ["Offline backup", "Illegible"]
            }, {
                key: "risks",
                iconIds: ["starFill", "starFill"],
                text: ["Medium risks"]
            }, {
                key: "backupProtection",
                iconIds: ["starFill", "starFill", "starFill"],
                text: ["PIN-protected Secure element"]
            }, {
                key: "risksMistakes",
                iconIds: [],
                text: ["No risk"]
            }, {
                key: "setupAndRestore",
                iconIds: [],
                text: ["2 minutes"]
            }]
        }, {
            type: "linkedBundle",
            bundleId: "ledgerRecover",
            link: {
                label: "See bundle offers",
                url: "/pages/ledger-recover"
            },
            headerTag: "",
            image: {
                url: "/images/recovery-solutions/ledgerRecover-light.webp"
            },
            title: "Ledger Recover",
            description: ["An advanced technology subscription service to back up and restore access to your assets anywhere, any time using only your identity."],
            details: [{
                key: "backupCompatibility",
                iconIds: ["flex", "stax", "nano"],
                text: ["All Ledger devices"]
            }, {
                key: "seedProtection",
                iconIds: ["starFill", "starFill", "starFill"],
                text: ["Online backup", "Illegible"]
            }, {
                key: "risks",
                iconIds: ["starFill", "starFill", "starFill"],
                text: ["Very low risks"]
            }, {
                key: "backupProtection",
                iconIds: ["starFill", "starFill", "starFill"],
                text: ["Encrypted, fragmented through HSMs, accessed with your identity only"]
            }, {
                key: "risksMistakes",
                iconIds: [],
                text: ["No risk"]
            }, {
                key: "setupAndRestore",
                iconIds: [],
                text: ["15-30 minutes"]
            }]
        }, {
            type: "linkedBundle",
            link: {
                label: "See products",
                url: "/#category-srp-accessories"
            },
            bundleId: "metalProtection",
            headerTag: "",
            image: {
                url: "/images/recovery-solutions/metalProtection-light.webp"
            },
            title: "Metal protection",
            description: ["An advanced technology subscription service to back up and restore access to your assets anywhere, any time using only your identity."],
            details: [{
                key: "backupCompatibility",
                iconIds: ["flex", "stax", "nano"],
                text: ["All Ledger devices"]
            }, {
                key: "seedProtection",
                iconIds: ["starFill"],
                text: ["Offline record", "Legible by anyone"]
            }, {
                key: "risks",
                iconIds: ["starFill", "starFill"],
                text: ["Medium risks"]
            }, {
                key: "backupProtection",
                iconIds: ["cross"],
                text: ["Legible by anyone"]
            }, {
                key: "risksMistakes",
                iconIds: [],
                text: ["metalProtection.risksMistakes"]
            }, {
                key: "setupAndRestore",
                iconIds: [],
                text: ["15 minutes"]
            }]
        }],
        U = {
            backupCompatibility: "Device compatibility",
            seedProtection: "24-word seed phrase protection",
            risks: "Risk of loss, theft and destruction ",
            backupProtection: "Wallet backup access",
            risksMistakes: "Risk of mistakes",
            setupAndRestore: "Setup & restore duration"
        },
        G = e => {
            let a, l = (0, r.c)(2),
                {
                    data: n
                } = e;
            return l[0] !== n.title ? (a = (0, t.jsx)(O, {
                comparisons: M,
                localizedSectionTitles: U,
                title: n.title,
                verticalSpacing: "none"
            }), l[0] = n.title, l[1] = a) : a = l[1], a
        },
        V = (0, l.forwardRef)(({
            source: e,
            ...r
        }, a) => (0, t.jsx)("video", { ...r,
            ref: a,
            src: e
        }));
    V.displayName = "Video", e.s(["default", 0, V], 270314), e.s(["default", 0, V], 992219);
    let z = e => {
        let a, l = (0, r.c)(5),
            {
                image: n,
                video: i
            } = e;
        if (i) {
            let e;
            return l[0] !== i.url ? (e = (0, t.jsx)(V, {
                disablePictureInPicture: !0,
                className: "w-full rounded-xs",
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                source: i.url
            }), l[0] = i.url, l[1] = e) : e = l[1], e
        }
        if (!n) return null;
        let s = n.title || "";
        return l[2] !== n.url || l[3] !== s ? (a = (0, t.jsx)(u.default, {
            src: n.url,
            alt: s,
            width: 550,
            height: 330,
            priority: !0,
            className: "w-full rounded-xs"
        }), l[2] = n.url, l[3] = s, l[4] = a) : a = l[4], a
    };
    e.s(["default", 0, z], 227452), e.s([], 47857), e.i(286941);
    var H = e.i(126762);
    let B = e => {
        let a, l, n = (0, r.c)(6),
            {
                richText: i,
                theme: s
            } = e,
            o = void 0 === s ? "light" : s,
            c = "dark" === o && "rich-text-p:text-white rich-text-a:text-white";
        n[0] !== c ? (a = (0, m.default)("rich-text-h6:my-24 rich-text-h6:heading-3-semi-bold rich-text-h6:font-normal rich-text-p:my-24 rich-text-p:text-neutral-600 rich-text-p:body-1 rich-text-p:font-normal", c), n[0] = c, n[1] = a) : a = n[1];
        let d = o || "light";
        return n[2] !== i || n[3] !== a || n[4] !== d ? (l = (0, t.jsx)(H.default, {
            className: a,
            content: i,
            theme: d
        }), n[2] = i, n[3] = a, n[4] = d, n[5] = l) : l = n[5], l
    };
    e.s(["default", 0, B], 843888), e.s([], 946262);
    let K = e => {
            let a, l, n, i = (0, r.c)(9),
                {
                    image: s,
                    video: o,
                    description: c,
                    theme: d
                } = e;
            return i[0] !== s || i[1] !== o ? (a = (0, t.jsx)(z, {
                image: s,
                video: o
            }), i[0] = s, i[1] = o, i[2] = a) : a = i[2], i[3] !== c || i[4] !== d ? (l = (0, t.jsx)(B, {
                richText: c,
                theme: d
            }), i[3] = c, i[4] = d, i[5] = l) : l = i[5], i[6] !== a || i[7] !== l ? (n = (0, t.jsxs)("div", {
                className: "grid items-center gap-16 px-16 py-32 md:grid-cols-2 md:gap-80 md:px-112 md:py-48",
                children: [a, l]
            }), i[6] = a, i[7] = l, i[8] = n) : n = i[8], n
        },
        $ = e => {
            let a = (0, r.c)(15),
                {
                    item: l,
                    drawerTheme: n
                } = e,
                s = void 0 === n ? "dark" : n;
            switch (l.type) {
                case "SectionSpecifications":
                    {
                        let e, r = l.data;
                        return a[0] !== s || a[1] !== r ? (e = (0, t.jsx)(i.default, {
                            title: r.title,
                            sectionSpecifications: r,
                            theme: s,
                            titleAlignment: "center",
                            transparentBg: !0
                        }), a[0] = s, a[1] = r, a[2] = e) : e = a[2],
                        e
                    }
                case "ContentBlock":
                    {
                        let e, r = l.data;
                        if (!r.description) return null;
                        return a[3] !== r.description || a[4] !== r.image || a[5] !== r.video || a[6] !== s ? (e = (0, t.jsx)(K, {
                            image: r.image,
                            video: r.video,
                            description: r.description,
                            theme: s
                        }), a[3] = r.description, a[4] = r.image, a[5] = r.video, a[6] = s, a[7] = e) : e = a[7],
                        e
                    }
                case "ProductAssociatedService":
                    {
                        let e;
                        return a[8] !== s ? (e = (0, t.jsx)(c.default, {
                            theme: s
                        }), a[8] = s, a[9] = e) : e = a[9],
                        e
                    }
                case "CardsBlock":
                    {
                        let e, r = l.data;
                        return a[10] !== r || a[11] !== s ? (e = (0, t.jsx)(o.default, { ...r,
                            title: null,
                            theme: s,
                            hideBackground: !0
                        }), a[10] = r, a[11] = s, a[12] = e) : e = a[12],
                        e
                    }
                case "ComparisonSection":
                    {
                        let e, r = l.data;
                        return a[13] !== r ? (e = (0, t.jsx)(G, {
                            data: r
                        }), a[13] = r, a[14] = e) : e = a[14],
                        e
                    }
                default:
                    return null
            }
        },
        W = e => {
            let a, l, n, i = (0, r.c)(11),
                {
                    dynamicDrawerContent: o,
                    commonProps: c,
                    drawerTheme: d,
                    close: u
                } = e,
                m = void 0 === d ? "dark" : d;
            if (!o || o.length < 1) return null;
            if (i[0] !== m || i[1] !== o) {
                let e;
                i[3] !== m ? (e = (e, r) => (0, t.jsx)($, {
                    item: e,
                    drawerTheme: m
                }, `${e.type}-${r}`), i[3] = m, i[4] = e) : e = i[4], a = o.map(e), i[0] = m, i[1] = o, i[2] = a
            } else a = i[2];
            return i[5] !== a ? (l = (0, t.jsx)("div", {
                className: "flex flex-col",
                children: a
            }), i[5] = a, i[6] = l) : l = i[6], i[7] !== u || i[8] !== c || i[9] !== l ? (n = (0, t.jsx)(s.default, { ...c,
                closeModal: u,
                children: l
            }), i[7] = u, i[8] = c, i[9] = l, i[10] = n) : n = i[10], n
        },
        q = e => {
            let i, s, o, c, d, u, f, p = (0, r.c)(26),
                {
                    label: x,
                    dynamicDrawerContent: v,
                    drawerTheme: g,
                    dataCsOverrideId: b,
                    variant: w,
                    variantIcon: j,
                    buttonProps: k,
                    children: N,
                    buttonClassname: E,
                    onClick: C
                } = e,
                S = void 0 === g ? "dark" : g;
            p[0] !== k ? (i = void 0 === k ? {} : k, p[0] = k, p[1] = i) : i = p[1];
            let R = i,
                I = (e => {
                    let t = (0, r.c)(3),
                        {
                            t: a
                        } = (0, n.useTranslation)("sections");
                    if (!e || e.length < 1) return "";
                    let l = e[0];
                    switch (l.type) {
                        case "SectionSpecifications":
                            {
                                let e;
                                return t[0] !== l.data ? .title || t[1] !== a ? (e = l.data ? .title || a("specifications.title"), t[0] = l.data ? .title, t[1] = a, t[2] = e) : e = t[2],
                                e
                            }
                        case "CardsBlock":
                        case "ContentBlock":
                        case "ComparisonSection":
                            return l.data ? .title || "";
                        default:
                            return ""
                    }
                })(v),
                [T, P] = (0, l.useState)(!1);
            p[2] === Symbol.for("react.memo_cache_sentinel") ? (s = () => P(!1), p[2] = s) : s = p[2];
            let F = s;
            p[3] !== C ? (o = () => {
                P(!0), C ? .()
            }, p[3] = C, p[4] = o) : o = p[4];
            let _ = o;
            p[5] !== S || p[6] !== T || p[7] !== I ? (c = {
                isOpen: T,
                title: I,
                theme: S
            }, p[5] = S, p[6] = T, p[7] = I, p[8] = c) : c = p[8];
            let D = c;
            if (p[9] !== E || p[10] !== R || p[11] !== N || p[12] !== b || p[13] !== S || p[14] !== x || p[15] !== _ || p[16] !== w || p[17] !== j) {
                let e = (0, a.cva)("", {
                    variants: {
                        intent: {
                            "underline-body": "body-1 font-normal underline hover:cursor-pointer",
                            "underline-caption": "body-3 underline hover:cursor-pointer",
                            "underline-body-highlight": "body-1-semi-bold underline hover:cursor-pointer",
                            primary: "text-primary body-1-semi-bold w-fit text-start hover:cursor-pointer"
                        }
                    }
                });
                d = N ? (0, t.jsx)("button", {
                    className: E ? ? e({
                        intent: "primary"
                    }),
                    type: "button",
                    onClick: _,
                    "data-cs-override": b,
                    children: N
                }) : (0, t.jsx)(t.Fragment, {
                    children: w ? (0, t.jsxs)("button", {
                        className: (0, m.default)(e({
                            intent: w
                        }), "group flex items-center gap-4"),
                        type: "button",
                        onClick: _,
                        "data-cs-override": b,
                        children: [x, j && (0, t.jsx)("div", {
                            className: "transition-all group-hover:translate-x-8 group-hover:transform rtl:group-hover:-translate-x-8",
                            children: (0, t.jsx)(h.default, {
                                name: j,
                                size: 24
                            })
                        })]
                    }) : (0, t.jsx)(y.default, {
                        label: x,
                        icon: "arrowRight",
                        variant: "dark" === S ? "link-white" : "link-black",
                        onClick: _,
                        dataCsOverrideId: b,
                        nowrap: !1,
                        ...R
                    })
                }), p[9] = E, p[10] = R, p[11] = N, p[12] = b, p[13] = S, p[14] = x, p[15] = _, p[16] = w, p[17] = j, p[18] = d
            } else d = p[18];
            return p[19] !== D || p[20] !== S || p[21] !== v ? (u = (0, t.jsx)(W, {
                drawerTheme: S,
                dynamicDrawerContent: v,
                close: F,
                commonProps: D
            }), p[19] = D, p[20] = S, p[21] = v, p[22] = u) : u = p[22], p[23] !== d || p[24] !== u ? (f = (0, t.jsxs)(t.Fragment, {
                children: [d, u]
            }), p[23] = d, p[24] = u, p[25] = f) : f = p[25], f
        }
}, 234236, 387464, e => {
    "use strict";
    e.s([], 234236), e.s(["default", () => c], 387464);
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(969821),
        l = e.i(295485);
    e.i(108399);
    var n = e.i(860231);
    e.i(286941);
    var i = e.i(126762),
        s = e.i(495854);
    e.i(828684);
    var o = e.i(454720);
    let c = e => {
        let c, d, u = (0, r.c)(9),
            {
                questions: m,
                dataCsOverrideId: h,
                theme: f
            } = e,
            p = void 0 === f ? "light" : f;
        if (u[0] !== h || u[1] !== m || u[2] !== p) {
            let e;
            u[4] !== h || u[5] !== p ? (e = (e, r) => {
                let {
                    question: c,
                    answer: d,
                    link: u
                } = e;
                return (0, t.jsx)(a.Disclosure, {
                    as: "div",
                    className: (0, s.default)("group w-full rounded-xs border px-16 py-16 transition duration-300 ease-in-out hover:border-neutral-400", "dark" === p ? "border-neutral-600" : "border-neutral-200"),
                    children: e => {
                        let {
                            open: m
                        } = e;
                        return (0, t.jsxs)("article", {
                            className: "w-full",
                            itemScope: !0,
                            itemProp: "mainEntity",
                            itemType: "https://schema.org/Question",
                            children: [(0, t.jsx)(a.DisclosureButton, {
                                className: "w-full",
                                "data-cs-override-id": `${h}-question-${r+1}-interaction`,
                                children: (0, t.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, t.jsx)("span", {
                                        itemProp: "name",
                                        className: "body-1-semi-bold text-left",
                                        children: c
                                    }), (0, t.jsx)("div", {
                                        className: (0, s.default)("ms-auto text-neutral-400 transition duration-300 ease-in-out group-hover:text-black", {
                                            "rotate-45 transition": m,
                                            "rotate-90 transition": !m
                                        }),
                                        children: (0, t.jsx)(n.default, {
                                            name: "plus",
                                            size: 25,
                                            strokeWidth: 3.5,
                                            color: "dark" === p ? "white" : "current"
                                        })
                                    })]
                                })
                            }), (0, t.jsx)(l.Transition, {
                                as: "div",
                                className: "overflow-auto overflow-y-hidden",
                                enter: "transition transition-[max-height] duration-500 ease-in",
                                enterFrom: "transform max-h-0",
                                enterTo: "transform max-h-screen",
                                leave: "transition transition-[max-height] duration-300 ease-out",
                                leaveFrom: "transform max-h-screen",
                                leaveTo: "transform max-h-0",
                                children: (0, t.jsxs)(a.DisclosurePanel, {
                                    itemScope: !0,
                                    itemProp: "acceptedAnswer",
                                    itemType: "https://schema.org/Answer",
                                    children: [(0, t.jsx)(i.default, {
                                        itemProp: "text",
                                        content: d,
                                        className: (0, s.default)("body-1 rich-text-a:text-primary rich-text-a:no-underline self-center text-start font-normal", "dark" === p ? "text-neutral-300" : "text-neutral-700")
                                    }), u ? .dynamicDrawerContent && (0, t.jsx)("div", {
                                        className: "mb-32",
                                        children: (0, t.jsx)(o.default, {
                                            label: u.label,
                                            dynamicDrawerContent: u.dynamicDrawerContent,
                                            drawerTheme: "light",
                                            dataCsOverrideId: "learn-more-recover",
                                            variant: "primary"
                                        })
                                    })]
                                })
                            })]
                        })
                    }
                }, c)
            }, u[4] = h, u[5] = p, u[6] = e) : e = u[6], c = m.map(e), u[0] = h, u[1] = m, u[2] = p, u[3] = c
        } else c = u[3];
        return u[7] !== c ? (d = (0, t.jsx)("div", {
            className: "flex flex-col gap-16",
            itemScope: !0,
            itemType: "https://schema.org/FAQPage",
            children: c
        }), u[7] = c, u[8] = d) : d = u[8], d
    }
}, 912239, 983175, 279870, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        a = e.i(198311),
        l = e.i(793087),
        n = e.i(63120);
    e.i(881106);
    var i = e.i(800087);
    e.i(234236);
    var s = e.i(387464),
        o = e.i(355168),
        c = e.i(261576);
    e.i(664157);
    var d = e.i(271179);
    e.i(643781);
    var u = e.i(989606),
        m = e.i(996913);
    e.i(286941);
    var h = e.i(126762),
        f = e.i(799444),
        p = e.i(495854),
        x = e.i(44073);
    let v = e => {
        let a, l, n, i, s, o, v, g, b, y, w, j = (0, c.c)(32),
            {
                service: k,
                firstVariant: N,
                priceTag: E,
                closeDrawer: C,
                setIsAddToCardClicked: S
            } = e,
            {
                t: R
            } = (0, d.useTranslation)("common"),
            [I, T] = (0, r.useState)(!1);
        j[0] !== N.id ? (a = [N.id], j[0] = N.id, j[1] = a) : a = j[1];
        let {
            prices: P
        } = (0, f.default)(a), {
            secondaryLegalDisclaimer: F
        } = k;
        j[2] !== F || j[3] !== I ? (l = F && I && (0, t.jsx)("div", {
            className: "border-t-gray-300 bg-neutral-50 px-16 py-16 text-gray-500",
            children: (0, t.jsx)(h.default, {
                openLinkInNewTab: !0,
                className: "rich-text-p:m-0 rich-text-p:body-4",
                content: F
            })
        }), j[2] = F, j[3] = I, j[4] = l) : l = j[4];
        let _ = I && F;
        return j[5] !== _ ? (n = (0, p.default)("flex flex-col gap-16 md:flex-row", {
            "px-16 py-16 md:px-32": _
        }), j[5] = _, j[6] = n) : n = j[6], j[7] !== E ? (i = E && (0, t.jsx)("div", {
            className: "mt-16 w-fit md:mt-0",
            children: (0, t.jsx)(x.default, {
                label: E,
                variant: "purple",
                size: "medium"
            })
        }), j[7] = E, j[8] = i) : i = j[8], j[9] !== P ? (s = P ? .[0] && (0, t.jsxs)(t.Fragment, {
            children: [P[0].compareAtLabel && (0, t.jsx)("span", {
                className: "me-32 text-gray-400 line-through",
                children: P[0].compareAtLabel
            }), (0, t.jsx)("span", {
                className: "heading-4-semi-bold",
                children: P[0].label
            })]
        }), j[9] = P, j[10] = s) : s = j[10], j[11] !== s ? (o = (0, t.jsx)("div", {
            children: s
        }), j[11] = s, j[12] = o) : o = j[12], j[13] !== i || j[14] !== o ? (v = (0, t.jsxs)("div", {
            className: "flex flex-1 flex-row items-center justify-between gap-16 md:flex-col md:items-start md:gap-0",
            children: [i, o]
        }), j[13] = i, j[14] = o, j[15] = v) : v = j[15], j[16] !== I || j[17] !== R ? (g = !I && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                className: "hidden md:block",
                children: (0, t.jsx)(u.default, {
                    label: R("productCards.addLedgerRecover"),
                    variant: "primary-black",
                    onClick: () => T(!0),
                    dataCsOverrideId: "more-details-drawer-subscribe"
                })
            }), (0, t.jsx)("div", {
                className: "block md:hidden",
                children: (0, t.jsx)(u.default, {
                    isFull: !0,
                    label: R("productCards.addLedgerRecover"),
                    variant: "primary-black",
                    onClick: () => T(!0),
                    dataCsOverrideId: "more-details-drawer-subscribe"
                })
            })]
        }), j[16] = I, j[17] = R, j[18] = g) : g = j[18], j[19] !== C || j[20] !== S || j[21] !== I || j[22] !== R ? (b = I && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                className: "hidden md:block",
                children: (0, t.jsx)(u.default, {
                    label: R("productCards.confirm"),
                    variant: "primary-black",
                    onClick: () => {
                        C(), S(!0)
                    },
                    dataCsOverrideId: "more-details-drawer-confirm"
                })
            }), (0, t.jsx)("div", {
                className: "block md:hidden",
                children: (0, t.jsx)(u.default, {
                    isFull: !0,
                    label: R("productCards.confirm"),
                    variant: "primary-black",
                    onClick: () => {
                        C(), S(!0)
                    },
                    dataCsOverrideId: "more-details-drawer-confirm"
                })
            })]
        }), j[19] = C, j[20] = S, j[21] = I, j[22] = R, j[23] = b) : b = j[23], j[24] !== b || j[25] !== n || j[26] !== v || j[27] !== g ? (y = (0, t.jsxs)("div", {
            className: n,
            children: [v, g, b]
        }), j[24] = b, j[25] = n, j[26] = v, j[27] = g, j[28] = y) : y = j[28], j[29] !== y || j[30] !== l ? (w = (0, t.jsx)(m.default, {
            smallPrint: l,
            children: y
        }), j[29] = y, j[30] = l, j[31] = w) : w = j[31], w
    };
    var g = e.i(126019),
        b = e.i(529669);
    let y = e => {
        let r, l, n, i, s, o, d, u, m, h, f, p = (0, c.c)(26),
            {
                closeDrawer: x,
                headerTitle: v,
                image: y,
                height: w
            } = e;
        return p[0] !== w ? (r = {
            height: w
        }, p[0] = w, p[1] = r) : r = p[1], p[2] !== v ? (l = (0, t.jsx)("div", {
            className: "flex h-40 flex-1 items-center",
            children: (0, t.jsx)("span", {
                className: "body-1-semi-bold",
                children: v
            })
        }), p[2] = v, p[3] = l) : l = p[3], p[4] !== x ? (n = (0, t.jsx)(b.default, {
            onClick: x,
            iconColor: "white",
            dataCsOverrideId: "more-details-drawer-close"
        }), p[4] = x, p[5] = n) : n = p[5], p[6] !== l || p[7] !== n ? (i = (0, t.jsxs)("div", {
            className: "z-50 flex w-full items-center px-32 py-24 text-white",
            children: [l, n]
        }), p[6] = l, p[7] = n, p[8] = i) : i = p[8], p[9] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("div", {
            className: "absolute z-40 h-full w-full bg-linear-to-b from-black/60 to-white/10"
        }), p[9] = s) : s = p[9], p[10] !== y ? (o = y && (0, t.jsx)("div", {
            className: "absolute bottom-0 z-30 w-full",
            children: (0, t.jsx)(g.default, {
                src: y.url,
                alt: y.title ? ? "",
                height: 200,
                width: 600
            })
        }), p[10] = y, p[11] = o) : o = p[11], p[12] !== r || p[13] !== i || p[14] !== o ? (d = (0, t.jsxs)(a.motion.div, {
            className: "sticky z-30 hidden flex-row items-start gap-12 bg-white md:flex",
            style: r,
            children: [i, s, o]
        }), p[12] = r, p[13] = i, p[14] = o, p[15] = d) : d = p[15], p[16] !== v ? (u = (0, t.jsx)("span", {
            className: "body-1-semi-bold flex-1",
            children: v
        }), p[16] = v, p[17] = u) : u = p[17], p[18] !== x ? (m = (0, t.jsx)("div", {
            className: "block",
            children: (0, t.jsx)(b.default, {
                onClick: x,
                iconColor: "black",
                dataCsOverrideId: "more-details-drawer-close"
            })
        }), p[18] = x, p[19] = m) : m = p[19], p[20] !== u || p[21] !== m ? (h = (0, t.jsx)("div", {
            className: "sticky z-30 flex flex-row items-start gap-12 bg-white md:hidden",
            children: (0, t.jsxs)("div", {
                className: "z-50 flex w-full items-center p-16 text-black",
                children: [u, m]
            })
        }), p[20] = u, p[21] = m, p[22] = h) : h = p[22], p[23] !== h || p[24] !== d ? (f = (0, t.jsxs)(t.Fragment, {
            children: [d, h]
        }), p[23] = h, p[24] = d, p[25] = f) : f = p[25], f
    };
    var w = e.i(813185),
        j = e.i(644594),
        k = e.i(264516),
        N = e.i(478797),
        E = e.i(219501);
    e.s(["default", 0, ({
        closeDrawer: e,
        isDrawerOpen: c,
        service: d,
        firstVariant: u
    }) => {
        let {
            questions: m,
            image: h,
            headerTitle: f,
            keySellingFeatures: p,
            optionPriceTag: x,
            secondaryDrawerTitle: g,
            secondaryDrawerSubtitle: b
        } = d, C = m.items, S = p.items, {
            setDrawerStep: R
        } = (0, r.useContext)(j.DrawerContext), {
            addToCart: I
        } = (0, w.default)([d]), {
            trackPage: T
        } = (0, N.default)(), [P, F] = (0, r.useState)(!1), _ = (0, r.useRef)(null), {
            scrollY: D
        } = (0, l.useScroll)({
            container: _.current ? _ : void 0
        }), L = (0, n.useTransform)(D, [0, 91], [180, 89]), A = (0, n.useTransform)(D, [0, 91], [0, 91]), {
            countryCode: O
        } = (0, E.default)();
        return (0, r.useEffect)(() => {
            c && O && T({
                event: "cs-recover-details-panel",
                user_country: O,
                page_type: "view_side_cart"
            })
        }, [c]), (0, t.jsx)("div", {
            className: "block",
            children: (0, t.jsx)(i.default, {
                isOpen: c,
                closeModal: e,
                afterLeave: P ? () => {
                    I(), R({
                        step: "cart"
                    })
                } : void 0,
                children: (0, t.jsxs)("div", {
                    className: "flex h-full flex-col",
                    children: [(0, t.jsx)(y, {
                        closeDrawer: e,
                        headerTitle: f,
                        image: h,
                        height: L
                    }), (0, t.jsxs)("div", {
                        ref: _,
                        className: "flex flex-1 flex-col gap-32 overflow-auto px-16 py-16 md:px-32 md:py-32",
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col gap-16",
                            children: [(0, t.jsx)(a.motion.div, {
                                style: {
                                    paddingTop: A
                                }
                            }), g && (0, t.jsx)("h5", {
                                className: "heading-3-semi-bold",
                                children: g
                            }), b && (0, t.jsx)("span", {
                                className: "text-neutral-700 body-1 font-normal",
                                children: b
                            }), S && S.length > 0 && (0, t.jsx)(o.default, {
                                keySellingFeatures: S
                            })]
                        }), C && C.length > 0 && (0, t.jsx)(s.default, {
                            questions: C,
                            dataCsOverrideId: (0, k.toKebabCase)(f)
                        })]
                    }), (0, t.jsx)(v, {
                        service: d,
                        firstVariant: u,
                        priceTag: x,
                        closeDrawer: e,
                        setIsAddToCardClicked: F
                    })]
                })
            })
        })
    }], 983175), e.s([], 912239);
    let C = {
        title: "1-year subscription redeem code",
        tag: "Discounted annual price",
        content: `
    <ul>
        <li>Ledger Recover lets you create your wallet’s digital spare key.</li>
        <li>Your digital spare key is tied to your identity.</li>
        <li>Recover wallet access anytime by simply verifying your identity.</li>
    </ul>
    `,
        feedbackMessage: "Activate coverage by using the redeem code during device setup"
    };
    e.s(["ABRecoverRedeemNotifContent", 0, C], 279870)
}, 722068, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(648684);
    e.i(108399);
    var l = e.i(860231);
    let n = (0, a.cva)("flex w-fit items-center gap-8 rounded-xs border [&>p]:body-3", {
        variants: {
            size: {
                tiny: "px-8 py-16",
                small: "py-8 pl-12 pr-16",
                large: "p-16"
            },
            theme: {
                light: "",
                dark: ""
            },
            width: {
                full: "w-full",
                fit: ""
            },
            variant: {
                default: "",
                error: "",
                warning: "",
                success: "",
                information: ""
            }
        },
        compoundVariants: [{
            variant: "default",
            theme: "light",
            class: "border-neutral-200 bg-white/20 text-black"
        }, {
            variant: "default",
            theme: "dark",
            class: "border-neutral-600 bg-black/20 text-white"
        }, {
            variant: "error",
            theme: "light",
            class: "border-red-500 bg-red-50 text-red-900"
        }, {
            variant: "error",
            theme: "dark",
            class: "border-red-500 bg-red-950 text-red-100"
        }, {
            variant: "success",
            theme: "light",
            class: "border-green-400 bg-green-50 text-green-900"
        }, {
            variant: "success",
            theme: "dark",
            class: "border-green-400 bg-green-950 text-green-100"
        }, {
            variant: "warning",
            theme: "light",
            class: "border-orange-200 bg-orange-50 text-orange-900"
        }, {
            variant: "warning",
            theme: "dark",
            class: "border-orange-800 bg-orange-950 text-orange-100"
        }, {
            variant: "information",
            theme: "light",
            class: "rounded-s border-neutral-200 bg-neutral-100 text-black"
        }, {
            variant: "information",
            theme: "dark",
            class: "rounded-s border-none bg-neutral-800 text-white"
        }],
        defaultVariants: {
            size: "small",
            variant: "default",
            theme: "light"
        }
    });
    e.s(["default", 0, e => {
        let a, i, s, o, c = (0, r.c)(16),
            {
                message: d,
                icon: u,
                size: m,
                theme: h,
                variant: f,
                width: p,
                animatedIcon: x
            } = e,
            v = void 0 === m ? "small" : m,
            g = void 0 === h ? "light" : h,
            b = void 0 === f ? "default" : f,
            y = void 0 === p ? "fit" : p,
            w = void 0 === x ? void 0 : x;
        c[0] !== v || c[1] !== g || c[2] !== b || c[3] !== y ? (a = n({
            size: v,
            variant: b,
            theme: g,
            width: y
        }), c[0] = v, c[1] = g, c[2] = b, c[3] = y, c[4] = a) : a = c[4];
        let j = `${a}`;
        return c[5] !== w || c[6] !== u || c[7] !== v || c[8] !== b ? (i = w || (0, t.jsx)("div", {
            className: "shrink-0",
            children: (0, t.jsx)(l.default, {
                name: u || ("error" === b ? "deleteCircle" : "success" === b ? "checkmarckCircle" : "information"),
                size: "tiny" === v ? 16 : "small" === v ? 24 : 40,
                color: "current"
            })
        }), c[5] = w, c[6] = u, c[7] = v, c[8] = b, c[9] = i) : i = c[9], c[10] !== d ? (s = (0, t.jsx)("p", {
            children: d
        }), c[10] = d, c[11] = s) : s = c[11], c[12] !== j || c[13] !== i || c[14] !== s ? (o = (0, t.jsxs)("div", {
            className: j,
            children: [i, s]
        }), c[12] = j, c[13] = i, c[14] = s, c[15] = o) : o = c[15], o
    }])
}, 632920, e => {
    "use strict";
    e.i(722068), e.s([])
}, 766742, 711908, 230627, 425487, 226917, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(191788),
        l = e.i(726849),
        n = e.i(189029),
        i = e.i(295485),
        s = e.i(644594),
        o = e.i(705224);
    e.i(881106);
    var c = e.i(800087),
        d = e.i(389875),
        u = e.i(992072);
    e.i(664157);
    var m = e.i(271179),
        h = e.i(529669),
        f = e.i(709769),
        p = e.i(978722),
        x = e.i(126762),
        v = e.i(857107),
        g = e.i(838779),
        b = e.i(799444);
    e.i(912239);
    var y = e.i(983175),
        w = e.i(44073),
        j = e.i(595990),
        k = e.i(279870);
    e.i(632920);
    var N = e.i(722068);
    let E = e => {
            let l, n, i, o, c, d, u, m, h, E, C, S, R, I, T, P, F = (0, r.c)(65),
                {
                    setSelectedTrustServices: _,
                    selectedTrustServices: D,
                    service: L,
                    totalTrustServices: A,
                    goBackToCart: O
                } = e,
                [M, U] = (0, a.useState)(null),
                [G, V] = (0, a.useState)(!1),
                {
                    setSlideDrawer: z
                } = (0, a.useContext)(s.DrawerContext),
                H = (0, j.useFeatureFlag)("sidecart_recover_3years").enabled,
                {
                    headerTitle: B,
                    handle: K,
                    subtitle: $,
                    headerTag: W,
                    linkToDetailsPanel: q,
                    optionLabel: Q,
                    noCoverageLabel: Y,
                    optionDescription: Z,
                    optionDisclaimer: J,
                    optionPriceTag: X,
                    variant: ee
                } = L,
                et = (0, j.useFeatureFlag)("recover_redeem_notif").enabled && "ledger-recover" === K;
            F[0] !== z ? (l = () => {
                z(!1), V(!1)
            }, F[0] = z, F[1] = l) : l = F[1];
            let er = l;
            F[2] !== z ? (n = () => {
                V(!0), z(!0)
            }, F[2] = z, F[3] = n) : n = F[3];
            let ea = n,
                el = ee ? .id;
            F[4] !== el ? (i = el ? [el] : [], F[4] = el, F[5] = i) : i = F[5];
            let {
                prices: en
            } = (0, b.default)(i), ei = en ? .[0] ? .label, es = en ? .[0] ? .compareAtLabel;
            F[6] !== O || F[7] !== M || F[8] !== D || F[9] !== L || F[10] !== el || F[11] !== _ || F[12] !== A ? (o = () => {
                "noCoverage" === M && 1 === A ? O() : "noCoverage" !== M && M ? D ? .some(e => e.variant.id === M) || _([...D, L]) : _(D ? .filter(e => e.variant.id !== el))
            }, F[6] = O, F[7] = M, F[8] = D, F[9] = L, F[10] = el, F[11] = _, F[12] = A, F[13] = o) : o = F[13], F[14] !== M || F[15] !== el ? (c = [M, el], F[14] = M, F[15] = el, F[16] = c) : c = F[16], (0, a.useEffect)(o, c), F[17] !== B ? (d = (0, t.jsx)(f.Label, {
                className: "heading-5-semi-bold",
                children: B
            }), F[17] = B, F[18] = d) : d = F[18], F[19] !== W ? (u = W && (0, t.jsx)("div", {
                className: "w-fit shrink-0",
                children: (0, t.jsx)(g.default, {
                    label: W,
                    size: "small"
                })
            }), F[19] = W, F[20] = u) : u = F[20], F[21] !== d || F[22] !== u ? (m = (0, t.jsxs)("div", {
                className: "flex items-center justify-between gap-12",
                children: [d, u]
            }), F[21] = d, F[22] = u, F[23] = m) : m = F[23], F[24] !== $ ? (h = (0, t.jsx)("h4", {
                className: "body-1-semi-bold text-neutral-500",
                children: $
            }), F[24] = $, F[25] = h) : h = F[25], F[26] !== m || F[27] !== h ? (E = (0, t.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [m, h]
            }), F[26] = m, F[27] = h, F[28] = E) : E = F[28], F[29] !== Z ? (C = !!Z && !1, F[29] = Z, F[30] = C) : C = F[30], F[31] !== es || F[32] !== Z || F[33] !== J || F[34] !== K || F[35] !== et || F[36] !== H || F[37] !== Q || F[38] !== ei || F[39] !== X || F[40] !== M || F[41] !== el ? (S = et ? (0, t.jsxs)(v.default, {
                label: k.ABRecoverRedeemNotifContent.title,
                selectedOption: M,
                optionValue: el,
                dataCsOverrideId: `${K}-subscribe`,
                dataTestId: `ts-${K}-option`,
                children: [(0, t.jsxs)("div", {
                    className: "ps-32 pe-8",
                    children: [(0, t.jsx)("div", {
                        className: "body-3 text-neutral-700 [&>li]:my-0 [&>li]:ps-24 [&>ul]:my-0 [&>ul]:list-disc [&>ul]:px-24",
                        dangerouslySetInnerHTML: {
                            __html: k.ABRecoverRedeemNotifContent.content
                        }
                    }), (0, t.jsxs)("div", {
                        className: "mt-4 md:flex md:items-center",
                        children: [es && (0, t.jsx)("span", {
                            className: "me-32 text-gray-400 line-through",
                            children: es
                        }), ei && (0, t.jsx)("span", {
                            className: "body-1-semi-bold",
                            children: ei
                        }), X && (0, t.jsx)("div", {
                            className: "mt-4 w-fit md:mt-0 md:ml-auto",
                            children: (0, t.jsx)(w.default, {
                                label: k.ABRecoverRedeemNotifContent.tag,
                                variant: "purple",
                                size: "medium"
                            })
                        })]
                    }), J && (0, t.jsx)(x.default, {
                        content: J,
                        className: "body-3 rich-text-p:mt-0 rich-text-a:text-gray-400 mt-16 text-gray-400 italic"
                    })]
                }), (0, t.jsx)("div", {
                    className: "mt-16 [&>div]:w-full",
                    children: (0, t.jsx)(N.default, {
                        message: k.ABRecoverRedeemNotifContent.feedbackMessage
                    })
                })]
            }) : (0, t.jsx)(v.default, {
                label: Q,
                selectedOption: M,
                optionValue: el,
                dataCsOverrideId: `${K}-subscribe`,
                dataTestId: `ts-${K}-option`,
                shadow: H,
                children: (0, t.jsxs)("div", {
                    className: "ps-32 pe-8",
                    children: [!!Z && (0, t.jsx)(x.default, {
                        content: Z,
                        className: "my-8 body-3 rich-text-p:my-0 rich-text-p:body-3 rich-text-li:my-0 rich-text-li:body-3 rich-text-ol:my-0 rich-text-ol:px-24 rich-text-ul:my-0 rich-text-ul:px-24"
                    }), (0, t.jsxs)("div", {
                        className: "md:flex md:items-center",
                        children: [es && (0, t.jsx)("span", {
                            className: "me-32 text-gray-400 line-through",
                            children: es
                        }), ei && (0, t.jsx)("span", {
                            className: "body-1-semi-bold",
                            children: ei
                        }), X && (0, t.jsx)("div", {
                            className: "mt-4 w-fit md:mt-0 md:ml-auto",
                            children: (0, t.jsx)(w.default, {
                                label: X,
                                variant: "purple",
                                size: "medium"
                            })
                        })]
                    }), !!J && (0, t.jsx)(x.default, {
                        content: J,
                        className: "body-3 rich-text-p:mt-0 rich-text-a:text-gray-400 mt-16 text-gray-400 italic"
                    })]
                })
            }), F[31] = es, F[32] = Z, F[33] = J, F[34] = K, F[35] = et, F[36] = H, F[37] = Q, F[38] = ei, F[39] = X, F[40] = M, F[41] = el, F[42] = S) : S = F[42];
            let eo = `${K}-decline`,
                ec = `ts-${K}-decline`;
            return F[43] !== H || F[44] !== Y || F[45] !== M || F[46] !== eo || F[47] !== ec ? (R = (0, t.jsx)(v.default, {
                label: Y,
                selectedOption: M,
                optionValue: "noCoverage",
                dataCsOverrideId: eo,
                dataTestId: ec,
                shadow: H
            }), F[43] = H, F[44] = Y, F[45] = M, F[46] = eo, F[47] = ec, F[48] = R) : R = F[48], F[49] !== q || F[50] !== ea ? (I = q && (0, t.jsx)("button", {
                type: "button",
                className: "text-primary body-1 font-normal text-start",
                onClick: ea,
                "data-cs-override-id": "recover-detail-open",
                children: q
            }), F[49] = q, F[50] = ea, F[51] = I) : I = F[51], F[52] !== er || F[53] !== G || F[54] !== L || F[55] !== ee ? (T = (0, t.jsx)(y.default, {
                closeDrawer: er,
                isDrawerOpen: G,
                service: L,
                firstVariant: ee
            }), F[52] = er, F[53] = G, F[54] = L, F[55] = ee, F[56] = T) : T = F[56], F[57] !== M || F[58] !== E || F[59] !== C || F[60] !== S || F[61] !== R || F[62] !== I || F[63] !== T ? (P = (0, t.jsxs)(p.RadioGroup, {
                className: "flex flex-col gap-16 pb-24",
                value: M,
                onChange: U,
                children: [E, C, S, R, I, T]
            }), F[57] = M, F[58] = E, F[59] = C, F[60] = S, F[61] = R, F[62] = I, F[63] = T, F[64] = P) : P = F[64], P
        },
        C = e => {
            let a, l, n, i, s, o, c, d = (0, r.c)(25),
                {
                    goBackToCart: u,
                    cameFromCart: f,
                    selectedTrustServices: p,
                    setSelectedTrustServices: x,
                    trustServicesList: v
                } = e,
                {
                    t: g
                } = (0, m.useTranslation)("cart");
            if (d[0] !== g ? (a = g("sidecart.getEnhancedPeaceOfMind"), d[0] = g, d[1] = a) : a = d[1], d[2] !== a ? (l = (0, t.jsx)("h2", {
                    className: "heading-4-semi-bold",
                    children: a
                }), d[2] = a, d[3] = l) : l = d[3], d[4] !== f || d[5] !== u ? (n = f && (0, t.jsx)(h.default, {
                    onClick: u,
                    dataCsOverrideId: "trust-panel-close"
                }), d[4] = f, d[5] = u, d[6] = n) : n = d[6], d[7] !== l || d[8] !== n ? (i = (0, t.jsxs)("div", {
                    className: "mb-24 flex items-center justify-between",
                    children: [l, n]
                }), d[7] = l, d[8] = n, d[9] = i) : i = d[9], d[10] !== u || d[11] !== p || d[12] !== x || d[13] !== v) {
                let e;
                d[15] !== u || d[16] !== p || d[17] !== x || d[18] !== v.length ? (e = e => (0, t.jsx)(E, {
                    setSelectedTrustServices: x,
                    selectedTrustServices: p,
                    service: e,
                    totalTrustServices: v.length,
                    goBackToCart: u
                }, e.variant.handle), d[15] = u, d[16] = p, d[17] = x, d[18] = v.length, d[19] = e) : e = d[19], s = v.map(e), d[10] = u, d[11] = p, d[12] = x, d[13] = v, d[14] = s
            } else s = d[14];
            return d[20] !== s ? (o = (0, t.jsx)("div", {
                className: "flex flex-col gap-24",
                children: s
            }), d[20] = s, d[21] = o) : o = d[21], d[22] !== i || d[23] !== o ? (c = (0, t.jsxs)("div", {
                className: "px-16 py-24 sm:px-32",
                children: [i, o]
            }), d[22] = i, d[23] = o, d[24] = c) : c = d[24], c
        },
        S = ["lnsp-bonk", "flex-bonk-rkey-enfres"],
        R = e => {
            let l, n, i, o, c, m, h, f = (0, r.c)(24),
                {
                    trustServicesList: p
                } = e,
                {
                    setDrawerStep: x,
                    drawerStep: v
                } = (0, a.useContext)(s.DrawerContext);
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [], f[0] = l) : l = f[0];
            let [g, b] = (0, a.useState)(l);
            if (!p) return null;
            f[1] !== x ? (n = () => {
                x({
                    step: "cart"
                })
            }, f[1] = x, f[2] = n) : n = f[2];
            let y = n,
                w = v.options ? .addedProduct,
                j = v.options ? .cameFromCart;
            if (f[3] !== w || f[4] !== p) {
                let e;
                f[6] !== w ? (e = e => {
                    let t = e.handle.startsWith("ledger-replace"),
                        r = w ? .sku && S.includes(w.sku);
                    return !t || !r
                }, f[6] = w, f[7] = e) : e = f[7], i = p.filter(e), f[3] = w, f[4] = p, f[5] = i
            } else i = f[5];
            let k = i;
            return f[8] !== j || f[9] !== y || f[10] !== w ? (o = !j && (0, t.jsx)(u.default, {
                linkedProduct: w,
                goBackToCart: y
            }), f[8] = j, f[9] = y, f[10] = w, f[11] = o) : o = f[11], f[12] !== j || f[13] !== k || f[14] !== y || f[15] !== g ? (c = (0, t.jsx)(C, {
                cameFromCart: j,
                goBackToCart: y,
                selectedTrustServices: g,
                trustServicesList: k,
                setSelectedTrustServices: b
            }), f[12] = j, f[13] = k, f[14] = y, f[15] = g, f[16] = c) : c = f[16], f[17] !== y || f[18] !== g ? (m = (0, t.jsx)(d.default, {
                selectedTrustServices: g,
                goBackToCart: y
            }), f[17] = y, f[18] = g, f[19] = m) : m = f[19], f[20] !== o || f[21] !== c || f[22] !== m ? (h = (0, t.jsxs)(t.Fragment, {
                children: [o, c, m]
            }), f[20] = o, f[21] = c, f[22] = m, f[23] = h) : h = f[23], h
        };
    var I = e.i(229270),
        T = e.i(109007),
        P = e.i(382691),
        F = e.i(126019);
    let _ = e => {
            let a, l, n, i, s, o, c, d, u, f, p, x, v = (0, r.c)(28),
                {
                    toggleDrawer: g,
                    drawerCloseRef: b
                } = e,
                {
                    t: y
                } = (0, m.useTranslation)("cart");
            return v[0] !== y ? (a = y("sidecart.restrictedCartHeading"), v[0] = y, v[1] = a) : a = v[1], v[2] !== a ? (l = (0, t.jsx)("h3", {
                className: "flex-1 heading-5-semi-bold",
                children: a
            }), v[2] = a, v[3] = l) : l = v[3], v[4] !== b || v[5] !== g ? (n = (0, t.jsx)(h.default, {
                drawerCloseRef: b,
                onClick: g
            }), v[4] = b, v[5] = g, v[6] = n) : n = v[6], v[7] !== l || v[8] !== n ? (i = (0, t.jsxs)(P.default, {
                children: [l, n]
            }), v[7] = l, v[8] = n, v[9] = i) : i = v[9], v[10] !== y ? (s = y("sidecart.restrictedCartTitle"), v[10] = y, v[11] = s) : s = v[11], v[12] !== s ? (o = (0, t.jsx)(F.default, {
                src: "https://cdn.shopify.com/s/files/1/2974/4858/files/visual.png?v=1748007029",
                alt: s,
                width: 254,
                height: 222
            }), v[12] = s, v[13] = o) : o = v[13], v[14] !== y ? (c = y("sidecart.restrictedCartTitle"), v[14] = y, v[15] = c) : c = v[15], v[16] !== c ? (d = (0, t.jsx)("h4", {
                className: "pb-32 text-center heading-3-semi-bold",
                children: c
            }), v[16] = c, v[17] = d) : d = v[17], v[18] === Symbol.for("react.memo_cache_sentinel") ? (u = [(0, t.jsx)("a", {
                href: "https://support.ledger.com/article/Why-Ledger-Complies-with-Sanctions",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "restrictedCartDescription.link")], v[18] = u) : u = v[18], v[19] !== y ? (f = (0, t.jsx)("p", {
                className: "block border border-neutral-200 p-16 body-3 [&>a]:underline",
                children: (0, t.jsx)(T.Trans, {
                    i18nKey: "sidecart.restrictedCartDescription",
                    t: y,
                    components: u
                })
            }), v[19] = y, v[20] = f) : f = v[20], v[21] !== f || v[22] !== o || v[23] !== d ? (p = (0, t.jsx)("div", {
                id: "sidecart-restricted-drawer",
                className: "flex flex-auto items-center justify-center bg-white px-32 py-40",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [o, d, f]
                })
            }), v[21] = f, v[22] = o, v[23] = d, v[24] = p) : p = v[24], v[25] !== p || v[26] !== i ? (x = (0, t.jsxs)(t.Fragment, {
                children: [i, p]
            }), v[25] = p, v[26] = i, v[27] = x) : x = v[27], x
        },
        D = e => {
            let a, l = (0, r.c)(3),
                {
                    show: n,
                    children: s
                } = e;
            return l[0] !== s || l[1] !== n ? (a = (0, t.jsx)(i.Transition, {
                as: "div",
                show: n,
                enter: "transition ease-in-out duration-500 transform",
                enterFrom: "opacity-30 translate-y-24",
                enterTo: "opacity-100 translate-y-0",
                className: "flex h-full flex-col",
                children: s
            }), l[0] = s, l[1] = n, l[2] = a) : a = l[2], a
        },
        L = e => {
            let l, n, i, d, u = (0, r.c)(19),
                {
                    toggleDrawer: m,
                    itemCount: h,
                    isDrawerOpen: f
                } = e,
                p = (0, a.useRef)(null),
                x = (0, a.useRef)(null),
                {
                    drawerStep: v,
                    setDrawerStep: g,
                    isDrawerLoading: b,
                    slideDrawer: y,
                    setSlideDrawer: w
                } = (0, a.useContext)(s.DrawerContext),
                j = (0, I.default)();
            u[0] !== v ? .options ? (l = v ? .options ? ? {}, u[0] = v ? .options, u[1] = l) : l = u[1];
            let {
                trustServices: k
            } = l;
            u[2] !== g || u[3] !== w ? (n = () => {
                w(!1), g({
                    step: "cart"
                })
            }, u[2] = g, u[3] = w, u[4] = n) : n = u[4];
            let N = v ? .step === "trustServices" ? "trust-panel-display" : "";
            return u[5] !== v ? .step || u[6] !== j || u[7] !== h || u[8] !== m || u[9] !== k ? (i = j ? (0, t.jsx)(_, {
                toggleDrawer: m
            }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(D, {
                    show: v ? .step === "cart",
                    children: (0, t.jsx)(o.default, {
                        drawerRef: p,
                        itemCount: h,
                        toggleDrawer: m,
                        drawerCloseRef: x
                    })
                }), (0, t.jsx)(D, {
                    show: v ? .step === "trustServices",
                    children: (0, t.jsx)(R, {
                        trustServicesList: k
                    })
                })]
            }), u[5] = v ? .step, u[6] = j, u[7] = h, u[8] = m, u[9] = k, u[10] = i) : i = u[10], u[11] !== b || u[12] !== f || u[13] !== y || u[14] !== n || u[15] !== N || u[16] !== i || u[17] !== m ? (d = (0, t.jsx)("div", {
                className: "block",
                children: (0, t.jsx)(c.default, {
                    isOpen: f,
                    isLoading: b,
                    closeModal: m,
                    slideLeft: y,
                    afterLeave: n,
                    dataCsOverrideId: N,
                    children: i
                })
            }), u[11] = b, u[12] = f, u[13] = y, u[14] = n, u[15] = N, u[16] = i, u[17] = m, u[18] = d) : d = u[18], d
        };
    var A = e.i(601216),
        O = e.i(349057),
        M = e.i(478797),
        U = e.i(351688),
        G = e.i(215217),
        V = e.i(219501),
        z = e.i(455108);
    e.i(47620), e.i(108399);
    var H = e.i(860231),
        B = e.i(495854);
    let K = e => {
        let a, l, n, i, s, o, c, d, u, h = (0, r.c)(17),
            {
                toggleDrawer: f
            } = e,
            {
                t: p
            } = (0, m.useTranslation)("header"),
            {
                cart: x
            } = (0, G.default)(),
            v = x ? .totalQuantity;
        return !v || v < 1 ? null : (h[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, B.default)("flex items-center justify-center", "border border-neutral-300", "bg-linear-to-br from-white/70 to-white/50 shadow-lg backdrop-blur-md", "px-16 py-[10px] sm:px-24 sm:py-12", "transition-all duration-300 ease-in-out hover:border-neutral-400", "rounded-[32px] sm:rounded-full"), h[0] = a) : a = h[0], h[1] !== p ? (l = p("cartButton.yourCart"), h[1] = p, h[2] = l) : l = h[2], h[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("span", {
            className: "hidden sm:block",
            children: (0, t.jsx)(H.default, {
                name: "cart",
                size: 30,
                color: "black"
            })
        }), h[3] = n) : n = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("span", {
            className: "block sm:hidden",
            children: (0, t.jsx)(H.default, {
                name: "cart",
                size: 24,
                color: "black"
            })
        }), h[4] = i) : i = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, B.default)("bg-primary ring-primary body-4 absolute -inset-e-0.5 -top-8 flex h-12 w-12 scale-90 items-center justify-center rounded-full text-white ring-2 sm:inset-e-0 sm:top-0 sm:scale-100"), h[5] = s) : s = h[5], h[6] !== p ? (o = p("cartButton.productQuantity"), h[6] = p, h[7] = o) : o = h[7], h[8] !== o ? (c = (0, t.jsx)("span", {
            className: "sr-only",
            children: o
        }), h[8] = o, h[9] = c) : c = h[9], h[10] !== v || h[11] !== c ? (d = (0, t.jsxs)("div", {
            className: "relative h-24 w-24 sm:h-32 sm:w-32",
            children: [n, i, (0, t.jsxs)("span", {
                "data-testid": "product-quantity",
                className: s,
                children: [c, v]
            })]
        }), h[10] = v, h[11] = c, h[12] = d) : d = h[12], h[13] !== l || h[14] !== d || h[15] !== f ? (u = (0, t.jsx)("button", {
            type: "button",
            className: a,
            onClick: f,
            "aria-label": l,
            children: d
        }), h[13] = l, h[14] = d, h[15] = f, h[16] = u) : u = h[16], u)
    };

    function $() {
        window.history.back()
    }

    function W() {
        window.history.forward()
    }
    let q = () => {
            let e, l, n, i, s, o, c, d, u, h, f, p, x = (0, r.c)(28),
                {
                    t: v
                } = (0, m.useTranslation)("header"),
                {
                    navBack: g,
                    navForward: b,
                    disableForward: y,
                    disableBack: w
                } = (() => {
                    let e, t, l, n = (0, r.c)(5),
                        [i, s] = (0, a.useState)(!1),
                        [o, c] = (0, a.useState)(!1);
                    return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                        let e = () => {
                            s(window.navigation ? .canGoBack === !1), c(window.navigation ? .canGoForward === !1)
                        };
                        return e(), window.navigation && window.navigation.addEventListener("navigate", e), () => {
                            window.navigation && window.navigation.removeEventListener("navigate", e)
                        }
                    }, t = [], n[0] = e, n[1] = t) : (e = n[0], t = n[1]), (0, a.useEffect)(e, t), n[2] !== i || n[3] !== o ? (l = {
                        navBack: $,
                        navForward: W,
                        disableForward: o,
                        disableBack: i
                    }, n[2] = i, n[3] = o, n[4] = l) : l = n[4], l
                })();
            x[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, B.default)("flex items-center justify-center gap-12", "border border-neutral-300", "bg-linear-to-br from-white/70 to-white/50 shadow-lg backdrop-blur-md", "px-16 py-[10px] sm:px-24 sm:py-12", "transition-all duration-300 ease-in-out hover:border-neutral-400", "rounded-[32px] sm:rounded-full"), x[0] = e) : e = x[0], x[1] !== v ? (l = v("navigation.back"), x[1] = v, x[2] = l) : l = x[2];
            let j = w && "opacity-30";
            x[3] !== j ? (n = (0, B.default)(j), x[3] = j, x[4] = n) : n = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)(H.default, {
                name: "arrowLeft",
                size: 30,
                color: "black"
            }), x[5] = i) : i = x[5], x[6] !== n ? (s = (0, t.jsx)("span", {
                className: n,
                children: i
            }), x[6] = n, x[7] = s) : s = x[7], x[8] !== w || x[9] !== g || x[10] !== l || x[11] !== s ? (o = (0, t.jsx)("button", {
                type: "button",
                disabled: w,
                onClick: g,
                "aria-label": l,
                children: s
            }), x[8] = w, x[9] = g, x[10] = l, x[11] = s, x[12] = o) : o = x[12], x[13] !== v ? (c = v("navigation.forward"), x[13] = v, x[14] = c) : c = x[14];
            let k = y && "opacity-30";
            return x[15] !== k ? (d = (0, B.default)(k), x[15] = k, x[16] = d) : d = x[16], x[17] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)(H.default, {
                name: "arrowRight",
                size: 30,
                color: "black"
            }), x[17] = u) : u = x[17], x[18] !== d ? (h = (0, t.jsx)("span", {
                className: d,
                children: u
            }), x[18] = d, x[19] = h) : h = x[19], x[20] !== y || x[21] !== b || x[22] !== h || x[23] !== c ? (f = (0, t.jsx)("button", {
                type: "button",
                disabled: y,
                onClick: b,
                "aria-label": c,
                children: h
            }), x[20] = y, x[21] = b, x[22] = h, x[23] = c, x[24] = f) : f = x[24], x[25] !== f || x[26] !== o ? (p = (0, t.jsxs)("div", {
                className: e,
                children: [o, f]
            }), x[25] = f, x[26] = o, x[27] = p) : p = x[27], p
        },
        Q = e => {
            let a, l, n = (0, r.c)(3),
                {
                    toggleDrawer: i
                } = e;
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("div", {
                className: "pointer-events-auto invisible sm:visible",
                children: (0, t.jsx)(q, {})
            }), n[0] = a) : a = n[0], n[1] !== i ? (l = (0, t.jsx)("nav", {
                "data-testid": "ledgerlive-navigation",
                className: "pointer-events-none fixed top-0 z-20 w-full py-16 sm:bottom-0 sm:top-auto sm:py-24",
                children: (0, t.jsx)(z.default.Section, {
                    as: "div",
                    verticalSpacing: "none",
                    children: (0, t.jsxs)("div", {
                        className: "flex justify-between",
                        children: [a, (0, t.jsx)("div", {
                            className: "pointer-events-auto",
                            children: (0, t.jsx)(K, {
                                toggleDrawer: i
                            })
                        })]
                    })
                })
            }), n[1] = i, n[2] = l) : l = n[2], l
        };
    e.s(["default", 0, e => {
        let i, o, c, d, u, m, h = (0, r.c)(26),
            {
                trackingPageType: f
            } = e,
            {
                cart: p
            } = (0, G.default)(),
            {
                isDrawerOpen: x,
                drawerStep: v,
                isDrawerLoading: g
            } = (0, a.useContext)(s.DrawerContext),
            {
                toggleSideCart: b,
                cartItemCount: y
            } = (0, A.default)(),
            {
                trackPage: w,
                trackEvent: j
            } = (0, M.default)(),
            {
                countryCode: k
            } = (0, V.default)(),
            {
                enteredViaLedgerLive: N
            } = (0, O.default)();
        h[0] !== k || h[1] !== v || h[2] !== g || h[3] !== x || h[4] !== w || h[5] !== f ? (i = () => {
            !x || !f || g || k && w({
                page_type: f,
                user_country: k,
                event: "cart" === v.step ? "view_side_cart" : "cross-sell-trust-panel"
            })
        }, h[0] = k, h[1] = v, h[2] = g, h[3] = x, h[4] = w, h[5] = f, h[6] = i) : i = h[6], h[7] !== v || h[8] !== x ? (o = [x, v], h[7] = v, h[8] = x, h[9] = o) : o = h[9], (0, a.useEffect)(i, o), h[10] !== p || h[11] !== x || h[12] !== b || h[13] !== j ? (c = () => {
            x || j("view_cart", {
                items: (0, U.trackViewCart)(p)
            }), b()
        }, h[10] = p, h[11] = x, h[12] = b, h[13] = j, h[14] = c) : c = h[14];
        let E = c;
        return h[15] !== N || h[16] !== e || h[17] !== E ? (d = N ? (0, t.jsx)(Q, {
            toggleDrawer: E
        }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(l.default, { ...e
            }), (0, t.jsx)(n.default, { ...e
            })]
        }), h[15] = N, h[16] = e, h[17] = E, h[18] = d) : d = h[18], h[19] !== y || h[20] !== x || h[21] !== E ? (u = (0, t.jsx)(L, {
            itemCount: y,
            toggleDrawer: E,
            isDrawerOpen: x
        }), h[19] = y, h[20] = x, h[21] = E, h[22] = u) : u = h[22], h[23] !== d || h[24] !== u ? (m = (0, t.jsxs)(t.Fragment, {
            children: [d, u]
        }), h[23] = d, h[24] = u, h[25] = m) : m = h[25], m
    }], 711908), e.s([], 766742);
    var Y = e.i(999750);
    e.s(["default", 0, e => {
        let t, l, n = (0, r.c)(5),
            {
                entryChannel: i,
                addNameToAffiliate: s
            } = (0, a.useContext)(Y.EntryChannelContext),
            [o, c] = (0, a.useState)(i);
        return n[0] !== s || n[1] !== i || n[2] !== e ? (t = () => {
            if ("affiliate-anonymous" === i.activeEntryChannel) {
                let t = e.find(e => {
                    let {
                        affiliateId: t
                    } = e;
                    return t === i.affiliateReference
                });
                if (t) {
                    let e = { ...i,
                        activeEntryChannel: "affiliate-named",
                        affiliateName: t.displayName,
                        cryptoVouchers: t.cryptoVouchers
                    };
                    s(e), c(e)
                }
            } else c(i)
        }, l = [s, i, e], n[0] = s, n[1] = i, n[2] = e, n[3] = t, n[4] = l) : (t = n[3], l = n[4]), (0, a.useEffect)(t, l), o
    }], 230627);
    var Z = e.i(41158);
    let J = [{
        title: "Reddit",
        url: "https://www.reddit.com/r/ledgerwallet/",
        iconName: "reddit"
    }, {
        title: "GitHub",
        url: "https://github.com/LedgerHQ",
        iconName: "github"
    }, {
        title: "Facebook",
        url: "https://www.facebook.com/Ledger",
        iconName: "facebook"
    }, {
        title: "Instagram",
        url: "https://www.instagram.com/ledger",
        iconName: "instagram"
    }, {
        title: "X",
        url: "https://x.com/Ledger",
        iconName: "x"
    }, {
        title: "YouTube",
        url: "https://www.youtube.com/Ledger",
        iconName: "youtube"
    }, {
        title: "LinkedIn",
        url: "https://www.linkedin.com/company/ledgerhq",
        iconName: "linkedin"
    }, {
        title: "TikTok",
        url: "https://www.tiktok.com/@ledger",
        iconName: "tiktok"
    }, {
        title: "Discord",
        url: "https://developers.ledger.com/discord-pro",
        iconName: "discord"
    }];

    function X(e) {
        let {
            title: r,
            url: a,
            iconName: l
        } = e;
        return (0, t.jsx)("li", {
            children: (0, t.jsxs)(Z.default, {
                href: a,
                target: "_blank",
                title: r,
                className: "block rounded-full bg-white/5 p-12 transition-all duration-300 ease-in-out hover:bg-white/10",
                children: [(0, t.jsx)(H.default, {
                    name: l,
                    size: 22,
                    color: "white",
                    isFilled: !0
                }), (0, t.jsx)("span", {
                    className: "sr-only",
                    children: r
                })]
            })
        }, r)
    }
    e.s(["default", 0, e => {
        let a, l, n, i, s, o, c, d = (0, r.c)(35),
            {
                socialLinks: u,
                socialTitle: h
            } = e,
            {
                t: f
            } = (0, m.useTranslation)("footer");
        if (d[0] !== u || d[1] !== h || d[2] !== f) {
            let e, r, o, c, m, p, x, v;
            d[8] !== u ? (e = e => {
                let {
                    iconName: t
                } = e;
                return u.includes(t)
            }, d[8] = u, d[9] = e) : e = d[9];
            let g = J.filter(e);
            i = "flex flex-col gap-16", d[10] !== h ? (r = (0, t.jsx)("h4", {
                className: "text-white heading-1-semi-bold",
                children: h
            }), d[10] = h, d[11] = r) : r = d[11], d[12] !== f ? (o = f("socialBar.description1"), d[12] = f, d[13] = o) : o = d[13], d[14] !== o ? (c = (0, t.jsx)("p", {
                children: o
            }), d[14] = o, d[15] = c) : c = d[15], d[16] !== f ? (m = f("socialBar.description2"), d[16] = f, d[17] = m) : m = d[17], d[18] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)(Z.default, {
                href: "mailto:media@ledger.com",
                className: "text-neutral-200 body-1-semi-bold",
                children: "media@ledger.com"
            }), d[18] = p) : p = d[18], d[19] !== m ? (x = (0, t.jsxs)("p", {
                children: [m, " ", p]
            }), d[19] = m, d[20] = x) : x = d[20], d[21] !== x || d[22] !== c ? (v = (0, t.jsxs)("div", {
                className: "text-neutral-200",
                children: [c, x]
            }), d[21] = x, d[22] = c, d[23] = v) : v = d[23], d[24] !== v || d[25] !== r ? (s = (0, t.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [r, v]
            }), d[24] = v, d[25] = r, d[26] = s) : s = d[26], a = "flex flex-wrap gap-8", l = "social-bar__links", n = g.map(X), d[0] = u, d[1] = h, d[2] = f, d[3] = a, d[4] = l, d[5] = n, d[6] = i, d[7] = s
        } else a = d[3], l = d[4], n = d[5], i = d[6], s = d[7];
        return d[27] !== a || d[28] !== l || d[29] !== n ? (o = (0, t.jsx)("ul", {
            className: a,
            "data-testid": l,
            children: n
        }), d[27] = a, d[28] = l, d[29] = n, d[30] = o) : o = d[30], d[31] !== i || d[32] !== s || d[33] !== o ? (c = (0, t.jsxs)("div", {
            className: i,
            children: [s, o]
        }), d[31] = i, d[32] = s, d[33] = o, d[34] = c) : c = d[34], c
    }], 425487), e.s([], 226917)
}, 605672, e => {
    "use strict";
    var t = e.i(594335);
    async function r(e, a, l, n = {}) {
        let i = await fetch(e, { ...n,
            method: a,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                ...n.headers
            },
            ..."GET" !== a && {
                body: JSON.stringify(l)
            }
        });
        return (0, t.toClientJsonResponse)(i)
    }
    e.s(["jsonMutationFetch", 0, r])
}, 663485, 244964, 37935, 375244, 98887, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(191788),
        l = e.i(203828),
        n = e.i(276025),
        i = e.i(217837),
        s = e.i(119134);
    e.i(665617);
    var o = e.i(60714);
    e.i(978443);
    var c = e.i(511058),
        d = e.i(761226),
        u = e.i(338391),
        m = e.i(243111),
        h = e.i(146342),
        f = e.i(149028),
        p = e.i(478797),
        x = e.i(219501),
        v = e.i(253770),
        g = e.i(308520),
        b = e.i(379566),
        y = e.i(541118),
        w = e.i(644594);
    e.i(664157);
    var j = e.i(271179),
        k = e.i(33190);
    e.i(766742);
    var N = e.i(711908),
        E = e.i(230627);
    e.i(226917);
    var C = e.i(425487),
        S = e.i(41158);
    e.i(350461);
    var R = e.i(535947);
    e.i(643781);
    var I = e.i(989606),
        T = e.i(455108),
        P = e.i(292905),
        F = e.i(605672);

    function _(e) {
        return (0, F.jsonMutationFetch)("/api/eloqua-form", "POST", e)
    }
    let D = () => {
        let e, t, a = (0, r.c)(7);
        a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
            mutationFn: _,
            retry: 1
        }, a[0] = e) : e = a[0];
        let {
            mutate: l,
            isSuccess: n,
            isPending: i,
            isError: s,
            reset: o
        } = (0, P.useMutation)(e);
        return a[1] !== s || a[2] !== i || a[3] !== n || a[4] !== o || a[5] !== l ? (t = {
            sendEmailToEloqua: l,
            isSuccess: n,
            isPending: i,
            isError: s,
            reset: o
        }, a[1] = s, a[2] = i, a[3] = n, a[4] = o, a[5] = l, a[6] = t) : t = a[6], t
    };
    e.s(["useSendEloquaForm", 0, D], 244964);
    let L = e => {
            let l, n, s, o, c, u, m, h = (0, r.c)(21),
                {
                    emailPlaceHolder: f,
                    buttonText: p,
                    eloquaFormId: x
                } = e,
                {
                    locale: v
                } = (0, d.default)(),
                {
                    sendEmailToEloqua: g,
                    isPending: b
                } = D(),
                y = (0, i.useRouter)(),
                [w, j] = (0, a.useState)(""),
                [k, N] = (0, a.useState)(!1),
                E = (0, a.useRef)(null),
                C = "6Ld5wAUrAAAAAPxTES7LrOw7W8VBA5s4W6e8PtfJ",
                S = x ? ? "UntitledForm-1664173584588";
            if (!S) return null;
            h[0] !== x || h[1] !== w || h[2] !== v || h[3] !== y || h[4] !== g ? (l = e => {
                e && (g({
                    email: w,
                    captchaToken: e,
                    locale: v,
                    formName: x
                }), y.push("/pages/thank-you-newsletter"))
            }, h[0] = x, h[1] = w, h[2] = v, h[3] = y, h[4] = g, h[5] = l) : l = h[5];
            let P = l;
            return h[6] === Symbol.for("react.memo_cache_sentinel") ? (n = e => {
                e.preventDefault(), E.current ? .execute()
            }, h[6] = n) : n = h[6], h[7] === Symbol.for("react.memo_cache_sentinel") ? (s = e => {
                N(!0), j(e.target.value)
            }, h[7] = s) : s = h[7], h[8] !== f ? (o = (0, t.jsx)("div", {
                className: "flex h-fit w-full",
                children: (0, t.jsx)("input", {
                    "data-cs-mask": !0,
                    placeholder: f,
                    type: "email",
                    className: "body-1 w-full cursor-pointer appearance-none rounded-full border border-neutral-600 bg-transparent px-24 py-12 leading-tight text-white placeholder-white transition-all duration-300 ease-in-out hover:border-white",
                    required: !0,
                    name: "M14KZX",
                    size: 22,
                    "data-testid": "eloqua-input-email",
                    onChange: s
                })
            }), h[8] = f, h[9] = o) : o = h[9], h[10] !== p || h[11] !== b ? (c = (0, t.jsx)("div", {
                className: "flex h-fit w-full",
                children: b ? (0, t.jsx)("div", {
                    className: "flex w-full items-center justify-center rounded-full bg-black px-24 py-16",
                    children: (0, t.jsx)(T.default.LoadingSpinner, {})
                }) : (0, t.jsx)(I.default, {
                    label: p,
                    variant: "primary-white",
                    type: "submit",
                    icon: "arrowRight",
                    dataTestId: "newsletter-button",
                    size: "medium"
                })
            }), h[10] = p, h[11] = b, h[12] = c) : c = h[12], h[13] !== P || h[14] !== k ? (u = k && C && (0, t.jsx)(R.default, {
                ref: E,
                size: "invisible",
                sitekey: C,
                onChange: P
            }), h[13] = P, h[14] = k, h[15] = u) : u = h[15], h[16] !== S || h[17] !== o || h[18] !== c || h[19] !== u ? (m = (0, t.jsxs)("form", {
                className: "my-20 grid grid-cols-1 gap-8 lg:grid-cols-2",
                target: "_blank",
                method: "POST",
                name: S,
                "data-testid": "eloqua-form",
                onSubmit: n,
                children: [o, c, u]
            }), h[16] = S, h[17] = o, h[18] = c, h[19] = u, h[20] = m) : m = h[20], m
        },
        A = e => {
            let a, l, n, i, s, o, c, d, u, m, h, f = (0, r.c)(28),
                {
                    newsletterTitle: p,
                    eloquaFormId: x
                } = e,
                {
                    t: v
                } = (0, j.useTranslation)("footer");
            return f[0] !== p ? (a = (0, t.jsx)("h4", {
                className: "text-white heading-1-semi-bold",
                children: p
            }), f[0] = p, f[1] = a) : a = f[1], f[2] !== v ? (l = v("newsletter.description"), f[2] = v, f[3] = l) : l = f[3], f[4] !== l ? (n = (0, t.jsx)("p", {
                className: "text-neutral-200",
                children: l
            }), f[4] = l, f[5] = n) : n = f[5], f[6] !== v ? (i = v("newsletter.buttonText"), f[6] = v, f[7] = i) : i = f[7], f[8] !== v ? (s = v("newsletter.placeHolder"), f[8] = v, f[9] = s) : s = f[9], f[10] !== x || f[11] !== i || f[12] !== s ? (o = (0, t.jsx)(L, {
                buttonText: i,
                emailPlaceHolder: s,
                eloquaFormId: x
            }), f[10] = x, f[11] = i, f[12] = s, f[13] = o) : o = f[13], f[14] !== v ? (c = v("newsletter.privacyPolicy"), f[14] = v, f[15] = c) : c = f[15], f[16] !== v ? (d = v("newsletter.privacyPolicyLink"), f[16] = v, f[17] = d) : d = f[17], f[18] !== d ? (u = (0, t.jsx)(S.default, {
                href: "/pages/privacy-notice#ledger-newsletter",
                className: "underline underline-offset-2",
                children: d
            }), f[18] = d, f[19] = u) : u = f[19], f[20] !== c || f[21] !== u ? (m = (0, t.jsxs)("p", {
                className: "text-neutral-400 body-4",
                children: [c, " ", u]
            }), f[20] = c, f[21] = u, f[22] = m) : m = f[22], f[23] !== a || f[24] !== m || f[25] !== n || f[26] !== o ? (h = (0, t.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [a, n, o, m]
            }), f[23] = a, f[24] = m, f[25] = n, f[26] = o, f[27] = h) : h = f[27], h
        };
    e.i(313271);
    var O = e.i(19101);
    e.i(214495);
    var M = e.i(744295);
    let U = e => {
        let a, l, n, i, s, o, c = (0, r.c)(13),
            {
                socialAndNewsletter: d
            } = e,
            {
                socialTitle: u,
                newsletterTitle: m,
                socialLinks: h,
                eloquaFormId: f
            } = d;
        return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(O.default, {
            theme: "dark"
        }), c[0] = a) : a = c[0], c[1] !== h || c[2] !== u ? (l = (0, t.jsx)(C.default, {
            socialLinks: h,
            socialTitle: u
        }), c[1] = h, c[2] = u, c[3] = l) : l = c[3], c[4] !== f || c[5] !== m ? (n = (0, t.jsx)(A, {
            newsletterTitle: m,
            eloquaFormId: f
        }), c[4] = f, c[5] = m, c[6] = n) : n = c[6], c[7] !== l || c[8] !== n ? (i = (0, t.jsx)(M.default, {
            children: (0, t.jsxs)("div", {
                className: "mx-auto grid w-full max-w-(--breakpoint-2xl) grid-cols-1 gap-48 md:grid-cols-2",
                children: [l, n]
            })
        }), c[7] = l, c[8] = n, c[9] = i) : i = c[9], c[10] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(O.default, {
            theme: "dark"
        }), c[10] = s) : s = c[10], c[11] !== i ? (o = (0, t.jsxs)("div", {
            className: "bg-grey-linear",
            children: [a, i, s]
        }), c[11] = i, c[12] = o) : o = c[12], o
    };
    e.s(["default", 0, U], 37935), e.s([], 375244);
    let G = {};
    e.s(["default", 0, e => {
        let C, S, R, I, T, P, F, _, D, L, A, O, M, V, z, H, B, K, $, W, q, Q, Y, Z, J, X = (0, r.c)(79),
            {
                pageMeta: ee,
                trackingData: et,
                siteSettings: er,
                footer: ea,
                navigationData: el,
                children: en,
                theme: ei,
                isHomePage: es,
                hideNavOnScroll: eo
            } = e,
            ec = void 0 === ei ? "light" : ei,
            ed = void 0 !== es && es,
            eu = void 0 !== eo && eo,
            {
                locale: em
            } = (0, d.default)(),
            {
                asPath: eh
            } = (0, l.useRouter)(),
            {
                countryCode: ef
            } = (0, x.default)(),
            {
                t: ep
            } = (0, j.useTranslation)("common"),
            {
                t: ex
            } = (0, j.useTranslation)("footer");
        (0, g.default)(), (0, b.default)(), (0, y.default)();
        let ev = (0, i.usePathname)() ? ? "";
        X[0] !== em || X[1] !== ev ? (C = (0, m.default)(em, ev), X[0] = em, X[1] = ev, X[2] = C) : C = X[2];
        let eg = C,
            {
                trackPage: eb
            } = (0, p.default)(),
            {
                setCryptoVouchers: ey
            } = (0, a.useContext)(v.cryptoVouchersContext),
            {
                setSideCartBanner: ew
            } = (0, a.useContext)(w.DrawerContext),
            {
                marketingBanner: ej,
                cryptoVouchers: ek,
                namedAffiliates: eN,
                sideCartBanner: eE
            } = er;
        X[3] !== eN ? (S = eN ? ? [], X[3] = eN, X[4] = S) : S = X[4], (0, E.default)(S), X[5] !== ek || X[6] !== ey || X[7] !== ew || X[8] !== eE ? (R = () => {
            ey(ek), (0, k.setCryptoVouchersCookies)(ek.activeCryptoVouchers), ew(eE)
        }, I = [ey, ek, ew, eE], X[5] = ek, X[6] = ey, X[7] = ew, X[8] = eE, X[9] = R, X[10] = I) : (R = X[9], I = X[10]), (0, a.useEffect)(R, I), X[11] !== eh || X[12] !== ef || X[13] !== eb || X[14] !== et ? (T = () => {
            let e = {
                    asPath: eh,
                    countryCode: ef
                },
                t = (0, s.default)(e, G);
            G = e, !t && ef && eb({ ...et,
                user_country: ef
            })
        }, P = [eh, ef, eb, et], X[11] = eh, X[12] = ef, X[13] = eb, X[14] = et, X[15] = T, X[16] = P) : (T = X[15], P = X[16]), (0, a.useEffect)(T, P), X[17] !== ej || X[18] !== ev ? (F = ej && !ej ? .buttonLink.endsWith(ev), X[17] = ej, X[18] = ev, X[19] = F) : F = X[19];
        let eC = F,
            eS = "TR" === ef,
            eR = ee ? .title ? `${ee?.title} | Ledger` : void 0;
        X[20] !== ee ? .seoNoIndexNoFollow || X[21] !== ev ? (_ = ee ? .seoNoIndexNoFollow === !0 || ev.startsWith("/r/"), X[20] = ee ? .seoNoIndexNoFollow, X[21] = ev, X[22] = _) : _ = X[22];
        let eI = _,
            eT = ee ? .description ? ? void 0;
        X[23] !== ev ? (D = (0, u.default)(ev), X[23] = ev, X[24] = D) : D = X[24], X[25] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, h.default)(), A = [{
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1"
        }], X[25] = L, X[26] = A) : (L = X[25], A = X[26]);
        let eP = ee ? .description ? ? void 0;
        X[27] !== ee ? .image ? .url ? (O = ee ? .image ? .url ? ? `${(0,f.default)()}/images/opengraphh_200x.png`, X[27] = ee ? .image ? .url, X[28] = O) : O = X[28];
        let eF = ee ? .image ? .description ? ? ee ? .image ? .title ? ? eR;
        X[29] !== O || X[30] !== eF ? (M = [{
            url: O,
            alt: eF
        }], X[29] = O, X[30] = eF, X[31] = M) : M = X[31], X[32] !== eg || X[33] !== em || X[34] !== eR || X[35] !== eP || X[36] !== M ? (V = {
            title: eR,
            description: eP,
            url: eg,
            site_name: "Ledger",
            type: "website",
            locale: em,
            images: M
        }, X[32] = eg, X[33] = em, X[34] = eR, X[35] = eP, X[36] = M, X[37] = V) : V = X[37], X[38] !== eg || X[39] !== eI || X[40] !== eR || X[41] !== eT || X[42] !== D || X[43] !== V ? (z = (0, t.jsx)(n.NextSeo, {
            title: eR,
            description: eT,
            themeColor: "light only",
            canonical: eg,
            languageAlternates: D,
            additionalLinkTags: L,
            additionalMetaTags: A,
            noindex: eI,
            nofollow: eI,
            openGraph: V
        }), X[38] = eg, X[39] = eI, X[40] = eR, X[41] = eT, X[42] = D, X[43] = V, X[44] = z) : z = X[44], X[45] !== eC || X[46] !== eS || X[47] !== em || X[48] !== ej || X[49] !== ep ? (H = eS ? (0, t.jsx)(o.default, {
            bannerText: ep("bannerCountrySpecificText.bannerText"),
            label: ep("bannerCountrySpecificText.label"),
            href: `https://www.ledger.com/${"en"!==em?`${em}/`:""}reseller`
        }) : eC && (0, t.jsx)(o.default, {
            bannerText: ej.bannerText,
            label: ej.buttonLabel,
            href: ej.buttonLink
        }), X[45] = eC, X[46] = eS, X[47] = em, X[48] = ej, X[49] = ep, X[50] = H) : H = X[50], X[51] !== H ? (B = (0, t.jsx)(t.Fragment, {
            children: H
        }), X[51] = H, X[52] = B) : B = X[52];
        let e_ = eC || eS;
        return X[53] !== eu || X[54] !== ed || X[55] !== el || X[56] !== e_ || X[57] !== ec || X[58] !== et.page_type ? (K = (0, t.jsx)(N.default, {
            data: el,
            theme: ec,
            hideNavOnScroll: eu,
            isHomePage: ed,
            bannerVisible: e_,
            trackingPageType: et.page_type
        }), X[53] = eu, X[54] = ed, X[55] = el, X[56] = e_, X[57] = ec, X[58] = et.page_type, X[59] = K) : K = X[59], X[60] !== en ? ($ = (0, t.jsx)("main", {
            children: en
        }), X[60] = en, X[61] = $) : $ = X[61], X[62] !== ex ? (W = ex("socialBar.title"), X[62] = ex, X[63] = W) : W = X[63], X[64] !== ex ? (q = ex("newsletter.title"), X[64] = ex, X[65] = q) : q = X[65], X[66] === Symbol.for("react.memo_cache_sentinel") ? (Q = ["github", "facebook", "instagram", "x", "youtube", "linkedin", "tiktok", "discord"], X[66] = Q) : Q = X[66], X[67] !== W || X[68] !== q ? (Y = (0, t.jsx)(U, {
            socialAndNewsletter: {
                socialTitle: W,
                newsletterTitle: q,
                socialLinks: Q
            }
        }), X[67] = W, X[68] = q, X[69] = Y) : Y = X[69], X[70] !== ea ? (Z = (0, t.jsx)(c.default, {
            navData: ea
        }), X[70] = ea, X[71] = Z) : Z = X[71], X[72] !== z || X[73] !== B || X[74] !== K || X[75] !== $ || X[76] !== Y || X[77] !== Z ? (J = (0, t.jsxs)(t.Fragment, {
            children: [z, B, K, $, Y, Z]
        }), X[72] = z, X[73] = B, X[74] = K, X[75] = $, X[76] = Y, X[77] = Z, X[78] = J) : J = X[78], J
    }], 98887), e.s([], 663485)
}]);

//# sourceMappingURL=0bknlcj3txxlj.js.map