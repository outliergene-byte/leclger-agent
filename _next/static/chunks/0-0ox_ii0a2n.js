(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 679320, (u, t, e) => {
    "use strict";
    t.exports = function(u) {
        for (var t = [], e = u.length, h = 0; h < e; h++) {
            var n = u.charCodeAt(h);
            if (n >= 55296 && n <= 56319 && e > h + 1) {
                var s = u.charCodeAt(h + 1);
                s >= 56320 && s <= 57343 && (n = (n - 55296) * 1024 + s - 56320 + 65536, h += 1)
            }
            if (n < 128) {
                t.push(n);
                continue
            }
            if (n < 2048) {
                t.push(n >> 6 | 192), t.push(63 & n | 128);
                continue
            }
            if (n < 55296 || n >= 57344 && n < 65536) {
                t.push(n >> 12 | 224), t.push(n >> 6 & 63 | 128), t.push(63 & n | 128);
                continue
            }
            if (n >= 65536 && n <= 1114111) {
                t.push(n >> 18 | 240), t.push(n >> 12 & 63 | 128), t.push(n >> 6 & 63 | 128), t.push(63 & n | 128);
                continue
            }
            t.push(239, 191, 189)
        }
        return new Uint8Array(t).buffer
    }
}]);

//# sourceMappingURL=08fo5pwsf8goj.js.map