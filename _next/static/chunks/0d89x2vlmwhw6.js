(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 343024, l => {
    "use strict";
    var s = l.i(391398),
        t = l.i(261576),
        e = l.i(191788),
        a = l.i(595990);
    let n = {
        CompareSignersButton: (0, e.lazy)(() => l.A(724795)),
        TestBanner: (0, e.lazy)(() => l.A(813256)),
        PlatformsComparison: (0, e.lazy)(() => l.A(308040)),
        PlatformsComparisonDApps: (0, e.lazy)(() => l.A(469956))
    };
    l.s(["default", 0, function(l) {
        let i, r = (0, t.c)(2),
            {
                componentId: o,
                featureFlagId: u
            } = l,
            {
                enabled: c
            } = (0, a.useFeatureFlag)(u);
        if (!c) return null;
        let m = n[o];
        return m ? (r[0] !== m ? (i = (0, s.jsx)(e.Suspense, {
            fallback: null,
            children: (0, s.jsx)(m, {})
        }), r[0] = m, r[1] = i) : i = r[1], i) : null
    }], 343024)
}, 912393, l => {
    l.n(l.i(343024))
}, 724795, l => {
    l.v(s => Promise.all(["static/chunks/17a9bk7g7pkd4.js"].map(s => l.l(s))).then(() => s(708611)))
}, 813256, l => {
    l.v(s => Promise.all(["static/chunks/0oe13bs2mi38~.js"].map(s => l.l(s))).then(() => s(90435)))
}, 308040, l => {
    l.v(s => Promise.all(["static/chunks/0rk5fe3b4y792.js"].map(s => l.l(s))).then(() => s(951444)))
}, 469956, l => {
    l.v(s => Promise.all(["static/chunks/0ybfvx7wp4~6w.js"].map(s => l.l(s))).then(() => s(185508)))
}]);

//# sourceMappingURL=0_326qsulfy_i.js.map