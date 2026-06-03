(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 654816, (e, t, r) => {
    let a = {
            en: {
                name: "English",
                fullLocale: "en-GB",
                shopifyLocale: "EN",
                ledgerWebsiteLocale: "en",
                ledgerSupportLocale: "en"
            },
            fr: {
                name: "Français",
                fullLocale: "fr-FR",
                shopifyLocale: "FR",
                ledgerWebsiteLocale: "fr",
                ledgerSupportLocale: "fr"
            },
            tr: {
                name: "Türkçe",
                fullLocale: "tr-TR",
                shopifyLocale: "TR",
                ledgerWebsiteLocale: "tr",
                ledgerSupportLocale: "tr"
            },
            de: {
                name: "Deutsch",
                fullLocale: "de-DE",
                shopifyLocale: "DE",
                ledgerWebsiteLocale: "de",
                ledgerSupportLocale: "de"
            },
            pt: {
                name: "Português",
                fullLocale: "pt-BR",
                shopifyLocale: "PT_BR",
                ledgerWebsiteLocale: "pt-br",
                ledgerSupportLocale: "pt-BR"
            },
            es: {
                name: "Español",
                fullLocale: "es-ES",
                shopifyLocale: "ES",
                ledgerWebsiteLocale: "es",
                ledgerSupportLocale: "es"
            },
            ru: {
                name: "Русский",
                fullLocale: "ru-RU",
                shopifyLocale: "RU",
                ledgerWebsiteLocale: "ru",
                ledgerSupportLocale: "ru"
            },
            zh: {
                name: "简体中文",
                fullLocale: "zh-CN",
                shopifyLocale: "ZH_CN",
                ledgerWebsiteLocale: "zh-hans",
                ledgerSupportLocale: "zh-CN"
            },
            ja: {
                name: "日本語",
                fullLocale: "ja-JP",
                shopifyLocale: "JA",
                ledgerWebsiteLocale: "ja",
                ledgerSupportLocale: "ja"
            },
            ko: {
                name: "한국어",
                fullLocale: "ko-KR",
                shopifyLocale: "KO",
                ledgerWebsiteLocale: "ko",
                ledgerSupportLocale: "ko"
            },
            ar: {
                name: "العربية",
                fullLocale: "ar-AE",
                shopifyLocale: "AR",
                ledgerWebsiteLocale: "ar",
                ledgerSupportLocale: "ar"
            },
            th: {
                name: "ภาษาไทย",
                fullLocale: "th-TH",
                shopifyLocale: "TH",
                ledgerWebsiteLocale: "th",
                ledgerSupportLocale: "th"
            }
        },
        i = Object.entries(a).map(([e, {
            fullLocale: t,
            name: r,
            shopifyLocale: a,
            ledgerWebsiteLocale: i,
            ledgerSupportLocale: n
        }]) => ({
            locale: e,
            name: r,
            fullLocale: t,
            shopifyLocale: a,
            ledgerWebsiteLocale: i,
            ledgerSupportLocale: n
        }));
    t.exports = {
        locales: a,
        defaultLocale: "en",
        localeMap: i,
        namespaces: ["cart", "common", "footer", "sections", "tokenGating", "deviceComparison", "walletTypeComparison", "productUpgrade", "recoveryKeyClaim", "resellers", "configurator", "platformsComparison"]
    }
}, 738368, e => {
    "use strict";
    var t, r, a, i = ((t = {}).IMAGE = "IMAGE", t.VIDEO = "VIDEO", t),
        n = ((r = {}).MAX_QUANTITY_REACHED = "MAX_QUANTITY_REACHED", r),
        s = ((a = {}).PRODUCTION = "prd", a.STAGING = "stg", a.DEVELOPMENT = "dev", a);
    e.s(["CartError", () => n, "Environment", () => s, "ProductMediaType", () => i])
}, 78415, e => {
    "use strict";
    e.s(["default", 0, (e, t) => {
        let r = e ? .slice().reverse().find(e => e ? .key === t);
        if (r && null !== r.value) try {
            return JSON.parse(r.value.toLowerCase())
        } catch {
            return r.value
        }
        return null
    }])
}, 148728, 229620, 831184, 369330, 318897, e => {
    "use strict";
    let t;
    e.i(350461);
    var r, a, i, n, s, o, u, d, l, c = e.i(738368);
    e.s(["getIsBrowser", 0, function() {
        return !0
    }, "isBrowser", 0, !0, "isProduction", 0, () => "prd" === c.Environment.PRODUCTION], 229620), e.s([], 831184);
    let h = (e, t) => "function" == typeof window.requestIdleCallback ? window.requestIdleCallback(e, t) : setTimeout(() => {
        e({
            didTimeout: !1,
            timeRemaining: () => 50
        })
    }, 0);
    e.s(["default", 0, h], 148728);
    var f = e.i(251462),
        p = e.i(190077);
    (r = n || (n = {})).assertEqual = e => e, r.assertIs = function(e) {}, r.assertNever = function(e) {
        throw Error()
    }, r.arrayToEnum = e => {
        let t = {};
        for (let r of e) t[r] = r;
        return t
    }, r.getValidEnumValues = e => {
        let t = r.objectKeys(e).filter(t => "number" != typeof e[e[t]]),
            a = {};
        for (let r of t) a[r] = e[r];
        return r.objectValues(a)
    }, r.objectValues = e => r.objectKeys(e).map(function(t) {
        return e[t]
    }), r.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
        let t = [];
        for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
        return t
    }, r.find = (e, t) => {
        for (let r of e)
            if (t(r)) return r
    }, r.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e, r.joinValues = function(e, t = " | ") {
        return e.map(e => "string" == typeof e ? `'${e}'` : e).join(t)
    }, r.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t, (s || (s = {})).mergeShapes = (e, t) => ({ ...e,
        ...t
    });
    let m = n.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
        v = e => {
            switch (typeof e) {
                case "undefined":
                    return m.undefined;
                case "string":
                    return m.string;
                case "number":
                    return isNaN(e) ? m.nan : m.number;
                case "boolean":
                    return m.boolean;
                case "function":
                    return m.function;
                case "bigint":
                    return m.bigint;
                case "symbol":
                    return m.symbol;
                case "object":
                    if (Array.isArray(e)) return m.array;
                    if (null === e) return m.null;
                    if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch) return m.promise;
                    if ("u" > typeof Map && e instanceof Map) return m.map;
                    if ("u" > typeof Set && e instanceof Set) return m.set;
                    if ("u" > typeof Date && e instanceof Date) return m.date;
                    return m.object;
                default:
                    return m.unknown
            }
        },
        y = n.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class g extends Error {
        get errors() {
            return this.issues
        }
        constructor(e) {
            super(), this.issues = [], this.addIssue = e => {
                this.issues = [...this.issues, e]
            }, this.addIssues = (e = []) => {
                this.issues = [...this.issues, ...e]
            };
            const t = new.target.prototype;
            Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e
        }
        format(e) {
            let t = e || function(e) {
                    return e.message
                },
                r = {
                    _errors: []
                },
                a = e => {
                    for (let i of e.issues)
                        if ("invalid_union" === i.code) i.unionErrors.map(a);
                        else if ("invalid_return_type" === i.code) a(i.returnTypeError);
                    else if ("invalid_arguments" === i.code) a(i.argumentsError);
                    else if (0 === i.path.length) r._errors.push(t(i));
                    else {
                        let e = r,
                            a = 0;
                        for (; a < i.path.length;) {
                            let r = i.path[a];
                            a === i.path.length - 1 ? (e[r] = e[r] || {
                                _errors: []
                            }, e[r]._errors.push(t(i))) : e[r] = e[r] || {
                                _errors: []
                            }, e = e[r], a++
                        }
                    }
                };
            return a(this), r
        }
        static assert(e) {
            if (!(e instanceof g)) throw Error(`Not a ZodError: ${e}`)
        }
        toString() {
            return this.message
        }
        get message() {
            return JSON.stringify(this.issues, n.jsonStringifyReplacer, 2)
        }
        get isEmpty() {
            return 0 === this.issues.length
        }
        flatten(e = e => e.message) {
            let t = {},
                r = [];
            for (let a of this.issues) a.path.length > 0 ? (t[a.path[0]] = t[a.path[0]] || [], t[a.path[0]].push(e(a))) : r.push(e(a));
            return {
                formErrors: r,
                fieldErrors: t
            }
        }
        get formErrors() {
            return this.flatten()
        }
    }
    g.create = e => new g(e);
    let _ = (e, t) => {
            let r;
            switch (e.code) {
                case y.invalid_type:
                    r = e.received === m.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
                    break;
                case y.invalid_literal:
                    r = `Invalid literal value, expected ${JSON.stringify(e.expected,n.jsonStringifyReplacer)}`;
                    break;
                case y.unrecognized_keys:
                    r = `Unrecognized key(s) in object: ${n.joinValues(e.keys,", ")}`;
                    break;
                case y.invalid_union:
                    r = "Invalid input";
                    break;
                case y.invalid_union_discriminator:
                    r = `Invalid discriminator value. Expected ${n.joinValues(e.options)}`;
                    break;
                case y.invalid_enum_value:
                    r = `Invalid enum value. Expected ${n.joinValues(e.options)}, received '${e.received}'`;
                    break;
                case y.invalid_arguments:
                    r = "Invalid function arguments";
                    break;
                case y.invalid_return_type:
                    r = "Invalid function return type";
                    break;
                case y.invalid_date:
                    r = "Invalid date";
                    break;
                case y.invalid_string:
                    "object" == typeof e.validation ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, "number" == typeof e.validation.position && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : n.assertNever(e.validation) : r = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
                    break;
                case y.too_small:
                    r = "array" === e.type ? `Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)` : "string" === e.type ? `String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)` : "number" === e.type ? `Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}` : "date" === e.type ? `Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
                    break;
                case y.too_big:
                    r = "array" === e.type ? `Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)` : "string" === e.type ? `String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)` : "number" === e.type ? `Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : "bigint" === e.type ? `BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : "date" === e.type ? `Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
                    break;
                case y.custom:
                    r = "Invalid input";
                    break;
                case y.invalid_intersection_types:
                    r = "Intersection results could not be merged";
                    break;
                case y.not_multiple_of:
                    r = `Number must be a multiple of ${e.multipleOf}`;
                    break;
                case y.not_finite:
                    r = "Number must be finite";
                    break;
                default:
                    r = t.defaultError, n.assertNever(e)
            }
            return {
                message: r
            }
        },
        b = _;

    function C() {
        return b
    }
    let w = e => {
        let {
            data: t,
            path: r,
            errorMaps: a,
            issueData: i
        } = e, n = [...r, ...i.path || []], s = { ...i,
            path: n
        };
        if (void 0 !== i.message) return { ...i,
            path: n,
            message: i.message
        };
        let o = "";
        for (let e of a.filter(e => !!e).slice().reverse()) o = e(s, {
            data: t,
            defaultError: o
        }).message;
        return { ...i,
            path: n,
            message: o
        }
    };

    function k(e, t) {
        let r = C(),
            a = w({
                issueData: t,
                data: e.data,
                path: e.path,
                errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, r, r === _ ? void 0 : _].filter(e => !!e)
            });
        e.common.issues.push(a)
    }
    class x {
        constructor() {
            this.value = "valid"
        }
        dirty() {
            "valid" === this.value && (this.value = "dirty")
        }
        abort() {
            "aborted" !== this.value && (this.value = "aborted")
        }
        static mergeArray(e, t) {
            let r = [];
            for (let a of t) {
                if ("aborted" === a.status) return T;
                "dirty" === a.status && e.dirty(), r.push(a.value)
            }
            return {
                status: e.value,
                value: r
            }
        }
        static async mergeObjectAsync(e, t) {
            let r = [];
            for (let e of t) {
                let t = await e.key,
                    a = await e.value;
                r.push({
                    key: t,
                    value: a
                })
            }
            return x.mergeObjectSync(e, r)
        }
        static mergeObjectSync(e, t) {
            let r = {};
            for (let a of t) {
                let {
                    key: t,
                    value: i
                } = a;
                if ("aborted" === t.status || "aborted" === i.status) return T;
                "dirty" === t.status && e.dirty(), "dirty" === i.status && e.dirty(), "__proto__" !== t.value && (void 0 !== i.value || a.alwaysSet) && (r[t.value] = i.value)
            }
            return {
                status: e.value,
                value: r
            }
        }
    }
    let T = Object.freeze({
            status: "aborted"
        }),
        E = e => ({
            status: "dirty",
            value: e
        }),
        S = e => ({
            status: "valid",
            value: e
        }),
        I = e => "aborted" === e.status,
        O = e => "dirty" === e.status,
        L = e => "valid" === e.status,
        A = e => "u" > typeof Promise && e instanceof Promise;

    function R(e, t, r, a) {
        if ("a" === r && !a) throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !a : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e)
    }

    function N(e, t, r, a, i) {
        if ("m" === a) throw TypeError("Private method is not writable");
        if ("a" === a && !i) throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === a ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
    }
    "function" == typeof SuppressedError && SuppressedError, (a = o || (o = {})).errToObj = e => "string" == typeof e ? {
        message: e
    } : e || {}, a.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message;
    class Z {
        constructor(e, t, r, a) {
            this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = a
        }
        get path() {
            return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
        }
    }
    let $ = (e, t) => {
        if (L(t)) return {
            success: !0,
            data: t.value
        };
        if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
        return {
            success: !1,
            get error() {
                if (this._error) return this._error;
                let t = new g(e.common.issues);
                return this._error = t, this._error
            }
        }
    };

    function P(e) {
        if (!e) return {};
        let {
            errorMap: t,
            invalid_type_error: r,
            required_error: a,
            description: i
        } = e;
        if (t && (r || a)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
        return t ? {
            errorMap: t,
            description: i
        } : {
            errorMap: (t, i) => {
                var n, s;
                let {
                    message: o
                } = e;
                return "invalid_enum_value" === t.code ? {
                    message: null != o ? o : i.defaultError
                } : void 0 === i.data ? {
                    message: null != (n = null != o ? o : a) ? n : i.defaultError
                } : "invalid_type" !== t.code ? {
                    message: i.defaultError
                } : {
                    message: null != (s = null != o ? o : r) ? s : i.defaultError
                }
            },
            description: i
        }
    }
    class j {
        get description() {
            return this._def.description
        }
        _getType(e) {
            return v(e.data)
        }
        _getOrReturnCtx(e, t) {
            return t || {
                common: e.parent.common,
                data: e.data,
                parsedType: v(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
        _processInputParams(e) {
            return {
                status: new x,
                ctx: {
                    common: e.parent.common,
                    data: e.data,
                    parsedType: v(e.data),
                    schemaErrorMap: this._def.errorMap,
                    path: e.path,
                    parent: e.parent
                }
            }
        }
        _parseSync(e) {
            let t = this._parse(e);
            if (A(t)) throw Error("Synchronous parse encountered promise.");
            return t
        }
        _parseAsync(e) {
            return Promise.resolve(this._parse(e))
        }
        parse(e, t) {
            let r = this.safeParse(e, t);
            if (r.success) return r.data;
            throw r.error
        }
        safeParse(e, t) {
            var r;
            let a = {
                    common: {
                        issues: [],
                        async: null != (r = null == t ? void 0 : t.async) && r,
                        contextualErrorMap: null == t ? void 0 : t.errorMap
                    },
                    path: (null == t ? void 0 : t.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: e,
                    parsedType: v(e)
                },
                i = this._parseSync({
                    data: e,
                    path: a.path,
                    parent: a
                });
            return $(a, i)
        }
        "~validate" (e) {
            var t, r;
            let a = {
                common: {
                    issues: [],
                    async: !!this["~standard"].async
                },
                path: [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: v(e)
            };
            if (!this["~standard"].async) try {
                let t = this._parseSync({
                    data: e,
                    path: [],
                    parent: a
                });
                return L(t) ? {
                    value: t.value
                } : {
                    issues: a.common.issues
                }
            } catch (e) {
                (null == (r = null == (t = null == e ? void 0 : e.message) ? void 0 : t.toLowerCase()) ? void 0 : r.includes("encountered")) && (this["~standard"].async = !0), a.common = {
                    issues: [],
                    async: !0
                }
            }
            return this._parseAsync({
                data: e,
                path: [],
                parent: a
            }).then(e => L(e) ? {
                value: e.value
            } : {
                issues: a.common.issues
            })
        }
        async parseAsync(e, t) {
            let r = await this.safeParseAsync(e, t);
            if (r.success) return r.data;
            throw r.error
        }
        async safeParseAsync(e, t) {
            let r = {
                    common: {
                        issues: [],
                        contextualErrorMap: null == t ? void 0 : t.errorMap,
                        async: !0
                    },
                    path: (null == t ? void 0 : t.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: e,
                    parsedType: v(e)
                },
                a = this._parse({
                    data: e,
                    path: r.path,
                    parent: r
                });
            return $(r, await (A(a) ? a : Promise.resolve(a)))
        }
        refine(e, t) {
            return this._refinement((r, a) => {
                let i = e(r),
                    n = () => a.addIssue({
                        code: y.custom,
                        ..."string" == typeof t || void 0 === t ? {
                            message: t
                        } : "function" == typeof t ? t(r) : t
                    });
                return "u" > typeof Promise && i instanceof Promise ? i.then(e => !!e || (n(), !1)) : !!i || (n(), !1)
            })
        }
        refinement(e, t) {
            return this._refinement((r, a) => !!e(r) || (a.addIssue("function" == typeof t ? t(r, a) : t), !1))
        }
        _refinement(e) {
            return new eA({
                schema: this,
                typeName: l.ZodEffects,
                effect: {
                    type: "refinement",
                    refinement: e
                }
            })
        }
        superRefine(e) {
            return this._refinement(e)
        }
        constructor(e) {
            this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
                version: 1,
                vendor: "zod",
                validate: e => this["~validate"](e)
            }
        }
        optional() {
            return eR.create(this, this._def)
        }
        nullable() {
            return eN.create(this, this._def)
        }
        nullish() {
            return this.nullable().optional()
        }
        array() {
            return ep.create(this)
        }
        promise() {
            return eL.create(this, this._def)
        }
        or(e) {
            return ev.create([this, e], this._def)
        }
        and(e) {
            return e_.create(this, e, this._def)
        }
        transform(e) {
            return new eA({ ...P(this._def),
                schema: this,
                typeName: l.ZodEffects,
                effect: {
                    type: "transform",
                    transform: e
                }
            })
        }
        default (e) {
            return new eZ({ ...P(this._def),
                innerType: this,
                defaultValue: "function" == typeof e ? e : () => e,
                typeName: l.ZodDefault
            })
        }
        brand() {
            return new eM({
                typeName: l.ZodBranded,
                type: this,
                ...P(this._def)
            })
        } catch (e) {
            return new e$({ ...P(this._def),
                innerType: this,
                catchValue: "function" == typeof e ? e : () => e,
                typeName: l.ZodCatch
            })
        }
        describe(e) {
            return new this.constructor({ ...this._def,
                description: e
            })
        }
        pipe(e) {
            return eD.create(this, e)
        }
        readonly() {
            return eF.create(this)
        }
        isOptional() {
            return this.safeParse(void 0).success
        }
        isNullable() {
            return this.safeParse(null).success
        }
    }
    let M = /^c[^\s-]{8,}$/i,
        D = /^[0-9a-z]+$/,
        F = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        U = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        V = /^[a-z0-9_-]{21}$/i,
        z = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        q = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        B = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        K = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        W = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        H = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        G = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        Y = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        Q = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        J = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
        X = RegExp(`^${J}$`);

    function ee(e) {
        let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
        return e.precision ? t = `${t}\\.\\d{${e.precision}}` : null == e.precision && (t = `${t}(\\.\\d+)?`), t
    }

    function et(e) {
        let t = `${J}T${ee(e)}`,
            r = [];
        return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, RegExp(`^${t}$`)
    }
    class er extends j {
        _parse(e) {
            var r, a, i, s;
            let o;
            if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== m.string) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.string,
                    received: t.parsedType
                }), T
            }
            let u = new x;
            for (let d of this._def.checks)
                if ("min" === d.kind) e.data.length < d.value && (k(o = this._getOrReturnCtx(e, o), {
                    code: y.too_small,
                    minimum: d.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: d.message
                }), u.dirty());
                else if ("max" === d.kind) e.data.length > d.value && (k(o = this._getOrReturnCtx(e, o), {
                code: y.too_big,
                maximum: d.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: d.message
            }), u.dirty());
            else if ("length" === d.kind) {
                let t = e.data.length > d.value,
                    r = e.data.length < d.value;
                (t || r) && (o = this._getOrReturnCtx(e, o), t ? k(o, {
                    code: y.too_big,
                    maximum: d.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: d.message
                }) : r && k(o, {
                    code: y.too_small,
                    minimum: d.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: d.message
                }), u.dirty())
            } else if ("email" === d.kind) B.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "email",
                code: y.invalid_string,
                message: d.message
            }), u.dirty());
            else if ("emoji" === d.kind) t || (t = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), t.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "emoji",
                code: y.invalid_string,
                message: d.message
            }), u.dirty());
            else if ("uuid" === d.kind) U.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "uuid",
                code: y.invalid_string,
                message: d.message
            }), u.dirty());
            else if ("nanoid" === d.kind) V.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "nanoid",
                code: y.invalid_string,
                message: d.message
            }), u.dirty());
            else if ("cuid" === d.kind) M.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "cuid",
                code: y.invalid_string,
                message: d.message
            }), u.dirty());
            else if ("cuid2" === d.kind) D.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "cuid2",
                code: y.invalid_string,
                message: d.message
            }), u.dirty());
            else if ("ulid" === d.kind) F.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "ulid",
                code: y.invalid_string,
                message: d.message
            }), u.dirty());
            else if ("url" === d.kind) try {
                new URL(e.data)
            } catch (t) {
                k(o = this._getOrReturnCtx(e, o), {
                    validation: "url",
                    code: y.invalid_string,
                    message: d.message
                }), u.dirty()
            } else "regex" === d.kind ? (d.regex.lastIndex = 0, d.regex.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "regex",
                code: y.invalid_string,
                message: d.message
            }), u.dirty())) : "trim" === d.kind ? e.data = e.data.trim() : "includes" === d.kind ? e.data.includes(d.value, d.position) || (k(o = this._getOrReturnCtx(e, o), {
                code: y.invalid_string,
                validation: {
                    includes: d.value,
                    position: d.position
                },
                message: d.message
            }), u.dirty()) : "toLowerCase" === d.kind ? e.data = e.data.toLowerCase() : "toUpperCase" === d.kind ? e.data = e.data.toUpperCase() : "startsWith" === d.kind ? e.data.startsWith(d.value) || (k(o = this._getOrReturnCtx(e, o), {
                code: y.invalid_string,
                validation: {
                    startsWith: d.value
                },
                message: d.message
            }), u.dirty()) : "endsWith" === d.kind ? e.data.endsWith(d.value) || (k(o = this._getOrReturnCtx(e, o), {
                code: y.invalid_string,
                validation: {
                    endsWith: d.value
                },
                message: d.message
            }), u.dirty()) : "datetime" === d.kind ? et(d).test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                code: y.invalid_string,
                validation: "datetime",
                message: d.message
            }), u.dirty()) : "date" === d.kind ? X.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                code: y.invalid_string,
                validation: "date",
                message: d.message
            }), u.dirty()) : "time" === d.kind ? RegExp(`^${ee(d)}$`).test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                code: y.invalid_string,
                validation: "time",
                message: d.message
            }), u.dirty()) : "duration" === d.kind ? q.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "duration",
                code: y.invalid_string,
                message: d.message
            }), u.dirty()) : "ip" === d.kind ? (r = e.data, !(("v4" === (a = d.version) || !a) && K.test(r) || ("v6" === a || !a) && H.test(r)) && 1 && (k(o = this._getOrReturnCtx(e, o), {
                validation: "ip",
                code: y.invalid_string,
                message: d.message
            }), u.dirty())) : "jwt" === d.kind ? ! function(e, t) {
                if (!z.test(e)) return !1;
                try {
                    let [r] = e.split("."), a = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), i = JSON.parse(atob(a));
                    if ("object" != typeof i || null === i || !i.typ || !i.alg || t && i.alg !== t) return !1;
                    return !0
                } catch (e) {
                    return !1
                }
            }(e.data, d.alg) && (k(o = this._getOrReturnCtx(e, o), {
                validation: "jwt",
                code: y.invalid_string,
                message: d.message
            }), u.dirty()) : "cidr" === d.kind ? (i = e.data, !(("v4" === (s = d.version) || !s) && W.test(i) || ("v6" === s || !s) && G.test(i)) && 1 && (k(o = this._getOrReturnCtx(e, o), {
                validation: "cidr",
                code: y.invalid_string,
                message: d.message
            }), u.dirty())) : "base64" === d.kind ? Y.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "base64",
                code: y.invalid_string,
                message: d.message
            }), u.dirty()) : "base64url" === d.kind ? Q.test(e.data) || (k(o = this._getOrReturnCtx(e, o), {
                validation: "base64url",
                code: y.invalid_string,
                message: d.message
            }), u.dirty()) : n.assertNever(d);
            return {
                status: u.value,
                value: e.data
            }
        }
        _regex(e, t, r) {
            return this.refinement(t => e.test(t), {
                validation: t,
                code: y.invalid_string,
                ...o.errToObj(r)
            })
        }
        _addCheck(e) {
            return new er({ ...this._def,
                checks: [...this._def.checks, e]
            })
        }
        email(e) {
            return this._addCheck({
                kind: "email",
                ...o.errToObj(e)
            })
        }
        url(e) {
            return this._addCheck({
                kind: "url",
                ...o.errToObj(e)
            })
        }
        emoji(e) {
            return this._addCheck({
                kind: "emoji",
                ...o.errToObj(e)
            })
        }
        uuid(e) {
            return this._addCheck({
                kind: "uuid",
                ...o.errToObj(e)
            })
        }
        nanoid(e) {
            return this._addCheck({
                kind: "nanoid",
                ...o.errToObj(e)
            })
        }
        cuid(e) {
            return this._addCheck({
                kind: "cuid",
                ...o.errToObj(e)
            })
        }
        cuid2(e) {
            return this._addCheck({
                kind: "cuid2",
                ...o.errToObj(e)
            })
        }
        ulid(e) {
            return this._addCheck({
                kind: "ulid",
                ...o.errToObj(e)
            })
        }
        base64(e) {
            return this._addCheck({
                kind: "base64",
                ...o.errToObj(e)
            })
        }
        base64url(e) {
            return this._addCheck({
                kind: "base64url",
                ...o.errToObj(e)
            })
        }
        jwt(e) {
            return this._addCheck({
                kind: "jwt",
                ...o.errToObj(e)
            })
        }
        ip(e) {
            return this._addCheck({
                kind: "ip",
                ...o.errToObj(e)
            })
        }
        cidr(e) {
            return this._addCheck({
                kind: "cidr",
                ...o.errToObj(e)
            })
        }
        datetime(e) {
            var t, r;
            return "string" == typeof e ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                local: !1,
                message: e
            }) : this._addCheck({
                kind: "datetime",
                precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                offset: null != (t = null == e ? void 0 : e.offset) && t,
                local: null != (r = null == e ? void 0 : e.local) && r,
                ...o.errToObj(null == e ? void 0 : e.message)
            })
        }
        date(e) {
            return this._addCheck({
                kind: "date",
                message: e
            })
        }
        time(e) {
            return "string" == typeof e ? this._addCheck({
                kind: "time",
                precision: null,
                message: e
            }) : this._addCheck({
                kind: "time",
                precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                ...o.errToObj(null == e ? void 0 : e.message)
            })
        }
        duration(e) {
            return this._addCheck({
                kind: "duration",
                ...o.errToObj(e)
            })
        }
        regex(e, t) {
            return this._addCheck({
                kind: "regex",
                regex: e,
                ...o.errToObj(t)
            })
        }
        includes(e, t) {
            return this._addCheck({
                kind: "includes",
                value: e,
                position: null == t ? void 0 : t.position,
                ...o.errToObj(null == t ? void 0 : t.message)
            })
        }
        startsWith(e, t) {
            return this._addCheck({
                kind: "startsWith",
                value: e,
                ...o.errToObj(t)
            })
        }
        endsWith(e, t) {
            return this._addCheck({
                kind: "endsWith",
                value: e,
                ...o.errToObj(t)
            })
        }
        min(e, t) {
            return this._addCheck({
                kind: "min",
                value: e,
                ...o.errToObj(t)
            })
        }
        max(e, t) {
            return this._addCheck({
                kind: "max",
                value: e,
                ...o.errToObj(t)
            })
        }
        length(e, t) {
            return this._addCheck({
                kind: "length",
                value: e,
                ...o.errToObj(t)
            })
        }
        nonempty(e) {
            return this.min(1, o.errToObj(e))
        }
        trim() {
            return new er({ ...this._def,
                checks: [...this._def.checks, {
                    kind: "trim"
                }]
            })
        }
        toLowerCase() {
            return new er({ ...this._def,
                checks: [...this._def.checks, {
                    kind: "toLowerCase"
                }]
            })
        }
        toUpperCase() {
            return new er({ ...this._def,
                checks: [...this._def.checks, {
                    kind: "toUpperCase"
                }]
            })
        }
        get isDatetime() {
            return !!this._def.checks.find(e => "datetime" === e.kind)
        }
        get isDate() {
            return !!this._def.checks.find(e => "date" === e.kind)
        }
        get isTime() {
            return !!this._def.checks.find(e => "time" === e.kind)
        }
        get isDuration() {
            return !!this._def.checks.find(e => "duration" === e.kind)
        }
        get isEmail() {
            return !!this._def.checks.find(e => "email" === e.kind)
        }
        get isURL() {
            return !!this._def.checks.find(e => "url" === e.kind)
        }
        get isEmoji() {
            return !!this._def.checks.find(e => "emoji" === e.kind)
        }
        get isUUID() {
            return !!this._def.checks.find(e => "uuid" === e.kind)
        }
        get isNANOID() {
            return !!this._def.checks.find(e => "nanoid" === e.kind)
        }
        get isCUID() {
            return !!this._def.checks.find(e => "cuid" === e.kind)
        }
        get isCUID2() {
            return !!this._def.checks.find(e => "cuid2" === e.kind)
        }
        get isULID() {
            return !!this._def.checks.find(e => "ulid" === e.kind)
        }
        get isIP() {
            return !!this._def.checks.find(e => "ip" === e.kind)
        }
        get isCIDR() {
            return !!this._def.checks.find(e => "cidr" === e.kind)
        }
        get isBase64() {
            return !!this._def.checks.find(e => "base64" === e.kind)
        }
        get isBase64url() {
            return !!this._def.checks.find(e => "base64url" === e.kind)
        }
        get minLength() {
            let e = null;
            for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
            return e
        }
        get maxLength() {
            let e = null;
            for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
            return e
        }
    }
    er.create = e => {
        var t;
        return new er({
            checks: [],
            typeName: l.ZodString,
            coerce: null != (t = null == e ? void 0 : e.coerce) && t,
            ...P(e)
        })
    };
    class ea extends j {
        constructor() {
            super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
        }
        _parse(e) {
            let t;
            if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== m.number) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.number,
                    received: t.parsedType
                }), T
            }
            let r = new x;
            for (let a of this._def.checks) "int" === a.kind ? n.isInteger(e.data) || (k(t = this._getOrReturnCtx(e, t), {
                code: y.invalid_type,
                expected: "integer",
                received: "float",
                message: a.message
            }), r.dirty()) : "min" === a.kind ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (k(t = this._getOrReturnCtx(e, t), {
                code: y.too_small,
                minimum: a.value,
                type: "number",
                inclusive: a.inclusive,
                exact: !1,
                message: a.message
            }), r.dirty()) : "max" === a.kind ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (k(t = this._getOrReturnCtx(e, t), {
                code: y.too_big,
                maximum: a.value,
                type: "number",
                inclusive: a.inclusive,
                exact: !1,
                message: a.message
            }), r.dirty()) : "multipleOf" === a.kind ? 0 !== function(e, t) {
                let r = (e.toString().split(".")[1] || "").length,
                    a = (t.toString().split(".")[1] || "").length,
                    i = r > a ? r : a;
                return parseInt(e.toFixed(i).replace(".", "")) % parseInt(t.toFixed(i).replace(".", "")) / Math.pow(10, i)
            }(e.data, a.value) && (k(t = this._getOrReturnCtx(e, t), {
                code: y.not_multiple_of,
                multipleOf: a.value,
                message: a.message
            }), r.dirty()) : "finite" === a.kind ? Number.isFinite(e.data) || (k(t = this._getOrReturnCtx(e, t), {
                code: y.not_finite,
                message: a.message
            }), r.dirty()) : n.assertNever(a);
            return {
                status: r.value,
                value: e.data
            }
        }
        gte(e, t) {
            return this.setLimit("min", e, !0, o.toString(t))
        }
        gt(e, t) {
            return this.setLimit("min", e, !1, o.toString(t))
        }
        lte(e, t) {
            return this.setLimit("max", e, !0, o.toString(t))
        }
        lt(e, t) {
            return this.setLimit("max", e, !1, o.toString(t))
        }
        setLimit(e, t, r, a) {
            return new ea({ ...this._def,
                checks: [...this._def.checks, {
                    kind: e,
                    value: t,
                    inclusive: r,
                    message: o.toString(a)
                }]
            })
        }
        _addCheck(e) {
            return new ea({ ...this._def,
                checks: [...this._def.checks, e]
            })
        }
        int(e) {
            return this._addCheck({
                kind: "int",
                message: o.toString(e)
            })
        }
        positive(e) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: !1,
                message: o.toString(e)
            })
        }
        negative(e) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: !1,
                message: o.toString(e)
            })
        }
        nonpositive(e) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: !0,
                message: o.toString(e)
            })
        }
        nonnegative(e) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: !0,
                message: o.toString(e)
            })
        }
        multipleOf(e, t) {
            return this._addCheck({
                kind: "multipleOf",
                value: e,
                message: o.toString(t)
            })
        }
        finite(e) {
            return this._addCheck({
                kind: "finite",
                message: o.toString(e)
            })
        }
        safe(e) {
            return this._addCheck({
                kind: "min",
                inclusive: !0,
                value: Number.MIN_SAFE_INTEGER,
                message: o.toString(e)
            })._addCheck({
                kind: "max",
                inclusive: !0,
                value: Number.MAX_SAFE_INTEGER,
                message: o.toString(e)
            })
        }
        get minValue() {
            let e = null;
            for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
            return e
        }
        get maxValue() {
            let e = null;
            for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
            return e
        }
        get isInt() {
            return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && n.isInteger(e.value))
        }
        get isFinite() {
            let e = null,
                t = null;
            for (let r of this._def.checks)
                if ("finite" === r.kind || "int" === r.kind || "multipleOf" === r.kind) return !0;
                else "min" === r.kind ? (null === t || r.value > t) && (t = r.value) : "max" === r.kind && (null === e || r.value < e) && (e = r.value);
            return Number.isFinite(t) && Number.isFinite(e)
        }
    }
    ea.create = e => new ea({
        checks: [],
        typeName: l.ZodNumber,
        coerce: (null == e ? void 0 : e.coerce) || !1,
        ...P(e)
    });
    class ei extends j {
        constructor() {
            super(...arguments), this.min = this.gte, this.max = this.lte
        }
        _parse(e) {
            let t;
            if (this._def.coerce) try {
                e.data = BigInt(e.data)
            } catch (t) {
                return this._getInvalidInput(e)
            }
            if (this._getType(e) !== m.bigint) return this._getInvalidInput(e);
            let r = new x;
            for (let a of this._def.checks) "min" === a.kind ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (k(t = this._getOrReturnCtx(e, t), {
                code: y.too_small,
                type: "bigint",
                minimum: a.value,
                inclusive: a.inclusive,
                message: a.message
            }), r.dirty()) : "max" === a.kind ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (k(t = this._getOrReturnCtx(e, t), {
                code: y.too_big,
                type: "bigint",
                maximum: a.value,
                inclusive: a.inclusive,
                message: a.message
            }), r.dirty()) : "multipleOf" === a.kind ? e.data % a.value !== BigInt(0) && (k(t = this._getOrReturnCtx(e, t), {
                code: y.not_multiple_of,
                multipleOf: a.value,
                message: a.message
            }), r.dirty()) : n.assertNever(a);
            return {
                status: r.value,
                value: e.data
            }
        }
        _getInvalidInput(e) {
            let t = this._getOrReturnCtx(e);
            return k(t, {
                code: y.invalid_type,
                expected: m.bigint,
                received: t.parsedType
            }), T
        }
        gte(e, t) {
            return this.setLimit("min", e, !0, o.toString(t))
        }
        gt(e, t) {
            return this.setLimit("min", e, !1, o.toString(t))
        }
        lte(e, t) {
            return this.setLimit("max", e, !0, o.toString(t))
        }
        lt(e, t) {
            return this.setLimit("max", e, !1, o.toString(t))
        }
        setLimit(e, t, r, a) {
            return new ei({ ...this._def,
                checks: [...this._def.checks, {
                    kind: e,
                    value: t,
                    inclusive: r,
                    message: o.toString(a)
                }]
            })
        }
        _addCheck(e) {
            return new ei({ ...this._def,
                checks: [...this._def.checks, e]
            })
        }
        positive(e) {
            return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: !1,
                message: o.toString(e)
            })
        }
        negative(e) {
            return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: !1,
                message: o.toString(e)
            })
        }
        nonpositive(e) {
            return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: !0,
                message: o.toString(e)
            })
        }
        nonnegative(e) {
            return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: !0,
                message: o.toString(e)
            })
        }
        multipleOf(e, t) {
            return this._addCheck({
                kind: "multipleOf",
                value: e,
                message: o.toString(t)
            })
        }
        get minValue() {
            let e = null;
            for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
            return e
        }
        get maxValue() {
            let e = null;
            for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
            return e
        }
    }
    ei.create = e => {
        var t;
        return new ei({
            checks: [],
            typeName: l.ZodBigInt,
            coerce: null != (t = null == e ? void 0 : e.coerce) && t,
            ...P(e)
        })
    };
    class en extends j {
        _parse(e) {
            if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.boolean,
                    received: t.parsedType
                }), T
            }
            return S(e.data)
        }
    }
    en.create = e => new en({
        typeName: l.ZodBoolean,
        coerce: (null == e ? void 0 : e.coerce) || !1,
        ...P(e)
    });
    class es extends j {
        _parse(e) {
            let t;
            if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== m.date) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.date,
                    received: t.parsedType
                }), T
            }
            if (isNaN(e.data.getTime())) return k(this._getOrReturnCtx(e), {
                code: y.invalid_date
            }), T;
            let r = new x;
            for (let a of this._def.checks) "min" === a.kind ? e.data.getTime() < a.value && (k(t = this._getOrReturnCtx(e, t), {
                code: y.too_small,
                message: a.message,
                inclusive: !0,
                exact: !1,
                minimum: a.value,
                type: "date"
            }), r.dirty()) : "max" === a.kind ? e.data.getTime() > a.value && (k(t = this._getOrReturnCtx(e, t), {
                code: y.too_big,
                message: a.message,
                inclusive: !0,
                exact: !1,
                maximum: a.value,
                type: "date"
            }), r.dirty()) : n.assertNever(a);
            return {
                status: r.value,
                value: new Date(e.data.getTime())
            }
        }
        _addCheck(e) {
            return new es({ ...this._def,
                checks: [...this._def.checks, e]
            })
        }
        min(e, t) {
            return this._addCheck({
                kind: "min",
                value: e.getTime(),
                message: o.toString(t)
            })
        }
        max(e, t) {
            return this._addCheck({
                kind: "max",
                value: e.getTime(),
                message: o.toString(t)
            })
        }
        get minDate() {
            let e = null;
            for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
            return null != e ? new Date(e) : null
        }
        get maxDate() {
            let e = null;
            for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
            return null != e ? new Date(e) : null
        }
    }
    es.create = e => new es({
        checks: [],
        coerce: (null == e ? void 0 : e.coerce) || !1,
        typeName: l.ZodDate,
        ...P(e)
    });
    class eo extends j {
        _parse(e) {
            if (this._getType(e) !== m.symbol) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.symbol,
                    received: t.parsedType
                }), T
            }
            return S(e.data)
        }
    }
    eo.create = e => new eo({
        typeName: l.ZodSymbol,
        ...P(e)
    });
    class eu extends j {
        _parse(e) {
            if (this._getType(e) !== m.undefined) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.undefined,
                    received: t.parsedType
                }), T
            }
            return S(e.data)
        }
    }
    eu.create = e => new eu({
        typeName: l.ZodUndefined,
        ...P(e)
    });
    class ed extends j {
        _parse(e) {
            if (this._getType(e) !== m.null) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.null,
                    received: t.parsedType
                }), T
            }
            return S(e.data)
        }
    }
    ed.create = e => new ed({
        typeName: l.ZodNull,
        ...P(e)
    });
    class el extends j {
        constructor() {
            super(...arguments), this._any = !0
        }
        _parse(e) {
            return S(e.data)
        }
    }
    el.create = e => new el({
        typeName: l.ZodAny,
        ...P(e)
    });
    class ec extends j {
        constructor() {
            super(...arguments), this._unknown = !0
        }
        _parse(e) {
            return S(e.data)
        }
    }
    ec.create = e => new ec({
        typeName: l.ZodUnknown,
        ...P(e)
    });
    class eh extends j {
        _parse(e) {
            let t = this._getOrReturnCtx(e);
            return k(t, {
                code: y.invalid_type,
                expected: m.never,
                received: t.parsedType
            }), T
        }
    }
    eh.create = e => new eh({
        typeName: l.ZodNever,
        ...P(e)
    });
    class ef extends j {
        _parse(e) {
            if (this._getType(e) !== m.undefined) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.void,
                    received: t.parsedType
                }), T
            }
            return S(e.data)
        }
    }
    ef.create = e => new ef({
        typeName: l.ZodVoid,
        ...P(e)
    });
    class ep extends j {
        _parse(e) {
            let {
                ctx: t,
                status: r
            } = this._processInputParams(e), a = this._def;
            if (t.parsedType !== m.array) return k(t, {
                code: y.invalid_type,
                expected: m.array,
                received: t.parsedType
            }), T;
            if (null !== a.exactLength) {
                let e = t.data.length > a.exactLength.value,
                    i = t.data.length < a.exactLength.value;
                (e || i) && (k(t, {
                    code: e ? y.too_big : y.too_small,
                    minimum: i ? a.exactLength.value : void 0,
                    maximum: e ? a.exactLength.value : void 0,
                    type: "array",
                    inclusive: !0,
                    exact: !0,
                    message: a.exactLength.message
                }), r.dirty())
            }
            if (null !== a.minLength && t.data.length < a.minLength.value && (k(t, {
                    code: y.too_small,
                    minimum: a.minLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: a.minLength.message
                }), r.dirty()), null !== a.maxLength && t.data.length > a.maxLength.value && (k(t, {
                    code: y.too_big,
                    maximum: a.maxLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: a.maxLength.message
                }), r.dirty()), t.common.async) return Promise.all([...t.data].map((e, r) => a.type._parseAsync(new Z(t, e, t.path, r)))).then(e => x.mergeArray(r, e));
            let i = [...t.data].map((e, r) => a.type._parseSync(new Z(t, e, t.path, r)));
            return x.mergeArray(r, i)
        }
        get element() {
            return this._def.type
        }
        min(e, t) {
            return new ep({ ...this._def,
                minLength: {
                    value: e,
                    message: o.toString(t)
                }
            })
        }
        max(e, t) {
            return new ep({ ...this._def,
                maxLength: {
                    value: e,
                    message: o.toString(t)
                }
            })
        }
        length(e, t) {
            return new ep({ ...this._def,
                exactLength: {
                    value: e,
                    message: o.toString(t)
                }
            })
        }
        nonempty(e) {
            return this.min(1, e)
        }
    }
    ep.create = (e, t) => new ep({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: l.ZodArray,
        ...P(t)
    });
    class em extends j {
        constructor() {
            super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
        }
        _getCached() {
            if (null !== this._cached) return this._cached;
            let e = this._def.shape(),
                t = n.objectKeys(e);
            return this._cached = {
                shape: e,
                keys: t
            }
        }
        _parse(e) {
            if (this._getType(e) !== m.object) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.object,
                    received: t.parsedType
                }), T
            }
            let {
                status: t,
                ctx: r
            } = this._processInputParams(e), {
                shape: a,
                keys: i
            } = this._getCached(), n = [];
            if (!(this._def.catchall instanceof eh && "strip" === this._def.unknownKeys))
                for (let e in r.data) i.includes(e) || n.push(e);
            let s = [];
            for (let e of i) {
                let t = a[e],
                    i = r.data[e];
                s.push({
                    key: {
                        status: "valid",
                        value: e
                    },
                    value: t._parse(new Z(r, i, r.path, e)),
                    alwaysSet: e in r.data
                })
            }
            if (this._def.catchall instanceof eh) {
                let e = this._def.unknownKeys;
                if ("passthrough" === e)
                    for (let e of n) s.push({
                        key: {
                            status: "valid",
                            value: e
                        },
                        value: {
                            status: "valid",
                            value: r.data[e]
                        }
                    });
                else if ("strict" === e) n.length > 0 && (k(r, {
                    code: y.unrecognized_keys,
                    keys: n
                }), t.dirty());
                else if ("strip" === e);
                else throw Error("Internal ZodObject error: invalid unknownKeys value.")
            } else {
                let e = this._def.catchall;
                for (let t of n) {
                    let a = r.data[t];
                    s.push({
                        key: {
                            status: "valid",
                            value: t
                        },
                        value: e._parse(new Z(r, a, r.path, t)),
                        alwaysSet: t in r.data
                    })
                }
            }
            return r.common.async ? Promise.resolve().then(async () => {
                let e = [];
                for (let t of s) {
                    let r = await t.key,
                        a = await t.value;
                    e.push({
                        key: r,
                        value: a,
                        alwaysSet: t.alwaysSet
                    })
                }
                return e
            }).then(e => x.mergeObjectSync(t, e)) : x.mergeObjectSync(t, s)
        }
        get shape() {
            return this._def.shape()
        }
        strict(e) {
            return o.errToObj, new em({ ...this._def,
                unknownKeys: "strict",
                ...void 0 !== e ? {
                    errorMap: (t, r) => {
                        var a, i, n, s;
                        let u = null != (n = null == (i = (a = this._def).errorMap) ? void 0 : i.call(a, t, r).message) ? n : r.defaultError;
                        return "unrecognized_keys" === t.code ? {
                            message: null != (s = o.errToObj(e).message) ? s : u
                        } : {
                            message: u
                        }
                    }
                } : {}
            })
        }
        strip() {
            return new em({ ...this._def,
                unknownKeys: "strip"
            })
        }
        passthrough() {
            return new em({ ...this._def,
                unknownKeys: "passthrough"
            })
        }
        extend(e) {
            return new em({ ...this._def,
                shape: () => ({ ...this._def.shape(),
                    ...e
                })
            })
        }
        merge(e) {
            return new em({
                unknownKeys: e._def.unknownKeys,
                catchall: e._def.catchall,
                shape: () => ({ ...this._def.shape(),
                    ...e._def.shape()
                }),
                typeName: l.ZodObject
            })
        }
        setKey(e, t) {
            return this.augment({
                [e]: t
            })
        }
        catchall(e) {
            return new em({ ...this._def,
                catchall: e
            })
        }
        pick(e) {
            let t = {};
            return n.objectKeys(e).forEach(r => {
                e[r] && this.shape[r] && (t[r] = this.shape[r])
            }), new em({ ...this._def,
                shape: () => t
            })
        }
        omit(e) {
            let t = {};
            return n.objectKeys(this.shape).forEach(r => {
                e[r] || (t[r] = this.shape[r])
            }), new em({ ...this._def,
                shape: () => t
            })
        }
        deepPartial() {
            return function e(t) {
                if (t instanceof em) {
                    let r = {};
                    for (let a in t.shape) {
                        let i = t.shape[a];
                        r[a] = eR.create(e(i))
                    }
                    return new em({ ...t._def,
                        shape: () => r
                    })
                }
                if (t instanceof ep) return new ep({ ...t._def,
                    type: e(t.element)
                });
                if (t instanceof eR) return eR.create(e(t.unwrap()));
                if (t instanceof eN) return eN.create(e(t.unwrap()));
                if (t instanceof eb) return eb.create(t.items.map(t => e(t)));
                else return t
            }(this)
        }
        partial(e) {
            let t = {};
            return n.objectKeys(this.shape).forEach(r => {
                let a = this.shape[r];
                e && !e[r] ? t[r] = a : t[r] = a.optional()
            }), new em({ ...this._def,
                shape: () => t
            })
        }
        required(e) {
            let t = {};
            return n.objectKeys(this.shape).forEach(r => {
                if (e && !e[r]) t[r] = this.shape[r];
                else {
                    let e = this.shape[r];
                    for (; e instanceof eR;) e = e._def.innerType;
                    t[r] = e
                }
            }), new em({ ...this._def,
                shape: () => t
            })
        }
        keyof() {
            return eS(n.objectKeys(this.shape))
        }
    }
    em.create = (e, t) => new em({
        shape: () => e,
        unknownKeys: "strip",
        catchall: eh.create(),
        typeName: l.ZodObject,
        ...P(t)
    }), em.strictCreate = (e, t) => new em({
        shape: () => e,
        unknownKeys: "strict",
        catchall: eh.create(),
        typeName: l.ZodObject,
        ...P(t)
    }), em.lazycreate = (e, t) => new em({
        shape: e,
        unknownKeys: "strip",
        catchall: eh.create(),
        typeName: l.ZodObject,
        ...P(t)
    });
    class ev extends j {
        _parse(e) {
            let {
                ctx: t
            } = this._processInputParams(e), r = this._def.options;
            if (t.common.async) return Promise.all(r.map(async e => {
                let r = { ...t,
                    common: { ...t.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await e._parseAsync({
                        data: t.data,
                        path: t.path,
                        parent: r
                    }),
                    ctx: r
                }
            })).then(function(e) {
                for (let t of e)
                    if ("valid" === t.result.status) return t.result;
                for (let r of e)
                    if ("dirty" === r.result.status) return t.common.issues.push(...r.ctx.common.issues), r.result;
                let r = e.map(e => new g(e.ctx.common.issues));
                return k(t, {
                    code: y.invalid_union,
                    unionErrors: r
                }), T
            }); {
                let e, a = [];
                for (let i of r) {
                    let r = { ...t,
                            common: { ...t.common,
                                issues: []
                            },
                            parent: null
                        },
                        n = i._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: r
                        });
                    if ("valid" === n.status) return n;
                    "dirty" !== n.status || e || (e = {
                        result: n,
                        ctx: r
                    }), r.common.issues.length && a.push(r.common.issues)
                }
                if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
                let i = a.map(e => new g(e));
                return k(t, {
                    code: y.invalid_union,
                    unionErrors: i
                }), T
            }
        }
        get options() {
            return this._def.options
        }
    }
    ev.create = (e, t) => new ev({
        options: e,
        typeName: l.ZodUnion,
        ...P(t)
    });
    let ey = e => {
        if (e instanceof eT) return ey(e.schema);
        if (e instanceof eA) return ey(e.innerType());
        if (e instanceof eE) return [e.value];
        if (e instanceof eI) return e.options;
        if (e instanceof eO) return n.objectValues(e.enum);
        else if (e instanceof eZ) return ey(e._def.innerType);
        else if (e instanceof eu) return [void 0];
        else if (e instanceof ed) return [null];
        else if (e instanceof eR) return [void 0, ...ey(e.unwrap())];
        else if (e instanceof eN) return [null, ...ey(e.unwrap())];
        else if (e instanceof eM) return ey(e.unwrap());
        else if (e instanceof eF) return ey(e.unwrap());
        else if (e instanceof e$) return ey(e._def.innerType);
        else return []
    };
    class eg extends j {
        _parse(e) {
            let {
                ctx: t
            } = this._processInputParams(e);
            if (t.parsedType !== m.object) return k(t, {
                code: y.invalid_type,
                expected: m.object,
                received: t.parsedType
            }), T;
            let r = this.discriminator,
                a = t.data[r],
                i = this.optionsMap.get(a);
            return i ? t.common.async ? i._parseAsync({
                data: t.data,
                path: t.path,
                parent: t
            }) : i._parseSync({
                data: t.data,
                path: t.path,
                parent: t
            }) : (k(t, {
                code: y.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r]
            }), T)
        }
        get discriminator() {
            return this._def.discriminator
        }
        get options() {
            return this._def.options
        }
        get optionsMap() {
            return this._def.optionsMap
        }
        static create(e, t, r) {
            let a = new Map;
            for (let r of t) {
                let t = ey(r.shape[e]);
                if (!t.length) throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                for (let i of t) {
                    if (a.has(i)) throw Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
                    a.set(i, r)
                }
            }
            return new eg({
                typeName: l.ZodDiscriminatedUnion,
                discriminator: e,
                options: t,
                optionsMap: a,
                ...P(r)
            })
        }
    }
    class e_ extends j {
        _parse(e) {
            let {
                status: t,
                ctx: r
            } = this._processInputParams(e), a = (e, a) => {
                if (I(e) || I(a)) return T;
                let i = function e(t, r) {
                    let a = v(t),
                        i = v(r);
                    if (t === r) return {
                        valid: !0,
                        data: t
                    };
                    if (a === m.object && i === m.object) {
                        let a = n.objectKeys(r),
                            i = n.objectKeys(t).filter(e => -1 !== a.indexOf(e)),
                            s = { ...t,
                                ...r
                            };
                        for (let a of i) {
                            let i = e(t[a], r[a]);
                            if (!i.valid) return {
                                valid: !1
                            };
                            s[a] = i.data
                        }
                        return {
                            valid: !0,
                            data: s
                        }
                    }
                    if (a === m.array && i === m.array) {
                        if (t.length !== r.length) return {
                            valid: !1
                        };
                        let a = [];
                        for (let i = 0; i < t.length; i++) {
                            let n = e(t[i], r[i]);
                            if (!n.valid) return {
                                valid: !1
                            };
                            a.push(n.data)
                        }
                        return {
                            valid: !0,
                            data: a
                        }
                    }
                    if (a === m.date && i === m.date && +t == +r) return {
                        valid: !0,
                        data: t
                    };
                    return {
                        valid: !1
                    }
                }(e.value, a.value);
                return i.valid ? ((O(e) || O(a)) && t.dirty(), {
                    status: t.value,
                    value: i.data
                }) : (k(r, {
                    code: y.invalid_intersection_types
                }), T)
            };
            return r.common.async ? Promise.all([this._def.left._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }), this._def.right._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            })]).then(([e, t]) => a(e, t)) : a(this._def.left._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            }), this._def.right._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            }))
        }
    }
    e_.create = (e, t, r) => new e_({
        left: e,
        right: t,
        typeName: l.ZodIntersection,
        ...P(r)
    });
    class eb extends j {
        _parse(e) {
            let {
                status: t,
                ctx: r
            } = this._processInputParams(e);
            if (r.parsedType !== m.array) return k(r, {
                code: y.invalid_type,
                expected: m.array,
                received: r.parsedType
            }), T;
            if (r.data.length < this._def.items.length) return k(r, {
                code: y.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }), T;
            !this._def.rest && r.data.length > this._def.items.length && (k(r, {
                code: y.too_big,
                maximum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }), t.dirty());
            let a = [...r.data].map((e, t) => {
                let a = this._def.items[t] || this._def.rest;
                return a ? a._parse(new Z(r, e, r.path, t)) : null
            }).filter(e => !!e);
            return r.common.async ? Promise.all(a).then(e => x.mergeArray(t, e)) : x.mergeArray(t, a)
        }
        get items() {
            return this._def.items
        }
        rest(e) {
            return new eb({ ...this._def,
                rest: e
            })
        }
    }
    eb.create = (e, t) => {
        if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new eb({
            items: e,
            typeName: l.ZodTuple,
            rest: null,
            ...P(t)
        })
    };
    class eC extends j {
        get keySchema() {
            return this._def.keyType
        }
        get valueSchema() {
            return this._def.valueType
        }
        _parse(e) {
            let {
                status: t,
                ctx: r
            } = this._processInputParams(e);
            if (r.parsedType !== m.object) return k(r, {
                code: y.invalid_type,
                expected: m.object,
                received: r.parsedType
            }), T;
            let a = [],
                i = this._def.keyType,
                n = this._def.valueType;
            for (let e in r.data) a.push({
                key: i._parse(new Z(r, e, r.path, e)),
                value: n._parse(new Z(r, r.data[e], r.path, e)),
                alwaysSet: e in r.data
            });
            return r.common.async ? x.mergeObjectAsync(t, a) : x.mergeObjectSync(t, a)
        }
        get element() {
            return this._def.valueType
        }
        static create(e, t, r) {
            return new eC(t instanceof j ? {
                keyType: e,
                valueType: t,
                typeName: l.ZodRecord,
                ...P(r)
            } : {
                keyType: er.create(),
                valueType: e,
                typeName: l.ZodRecord,
                ...P(t)
            })
        }
    }
    class ew extends j {
        get keySchema() {
            return this._def.keyType
        }
        get valueSchema() {
            return this._def.valueType
        }
        _parse(e) {
            let {
                status: t,
                ctx: r
            } = this._processInputParams(e);
            if (r.parsedType !== m.map) return k(r, {
                code: y.invalid_type,
                expected: m.map,
                received: r.parsedType
            }), T;
            let a = this._def.keyType,
                i = this._def.valueType,
                n = [...r.data.entries()].map(([e, t], n) => ({
                    key: a._parse(new Z(r, e, r.path, [n, "key"])),
                    value: i._parse(new Z(r, t, r.path, [n, "value"]))
                }));
            if (r.common.async) {
                let e = new Map;
                return Promise.resolve().then(async () => {
                    for (let r of n) {
                        let a = await r.key,
                            i = await r.value;
                        if ("aborted" === a.status || "aborted" === i.status) return T;
                        ("dirty" === a.status || "dirty" === i.status) && t.dirty(), e.set(a.value, i.value)
                    }
                    return {
                        status: t.value,
                        value: e
                    }
                })
            } {
                let e = new Map;
                for (let r of n) {
                    let a = r.key,
                        i = r.value;
                    if ("aborted" === a.status || "aborted" === i.status) return T;
                    ("dirty" === a.status || "dirty" === i.status) && t.dirty(), e.set(a.value, i.value)
                }
                return {
                    status: t.value,
                    value: e
                }
            }
        }
    }
    ew.create = (e, t, r) => new ew({
        valueType: t,
        keyType: e,
        typeName: l.ZodMap,
        ...P(r)
    });
    class ek extends j {
        _parse(e) {
            let {
                status: t,
                ctx: r
            } = this._processInputParams(e);
            if (r.parsedType !== m.set) return k(r, {
                code: y.invalid_type,
                expected: m.set,
                received: r.parsedType
            }), T;
            let a = this._def;
            null !== a.minSize && r.data.size < a.minSize.value && (k(r, {
                code: y.too_small,
                minimum: a.minSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: a.minSize.message
            }), t.dirty()), null !== a.maxSize && r.data.size > a.maxSize.value && (k(r, {
                code: y.too_big,
                maximum: a.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: a.maxSize.message
            }), t.dirty());
            let i = this._def.valueType;

            function n(e) {
                let r = new Set;
                for (let a of e) {
                    if ("aborted" === a.status) return T;
                    "dirty" === a.status && t.dirty(), r.add(a.value)
                }
                return {
                    status: t.value,
                    value: r
                }
            }
            let s = [...r.data.values()].map((e, t) => i._parse(new Z(r, e, r.path, t)));
            return r.common.async ? Promise.all(s).then(e => n(e)) : n(s)
        }
        min(e, t) {
            return new ek({ ...this._def,
                minSize: {
                    value: e,
                    message: o.toString(t)
                }
            })
        }
        max(e, t) {
            return new ek({ ...this._def,
                maxSize: {
                    value: e,
                    message: o.toString(t)
                }
            })
        }
        size(e, t) {
            return this.min(e, t).max(e, t)
        }
        nonempty(e) {
            return this.min(1, e)
        }
    }
    ek.create = (e, t) => new ek({
        valueType: e,
        minSize: null,
        maxSize: null,
        typeName: l.ZodSet,
        ...P(t)
    });
    class ex extends j {
        constructor() {
            super(...arguments), this.validate = this.implement
        }
        _parse(e) {
            let {
                ctx: t
            } = this._processInputParams(e);
            if (t.parsedType !== m.function) return k(t, {
                code: y.invalid_type,
                expected: m.function,
                received: t.parsedType
            }), T;

            function r(e, r) {
                return w({
                    data: e,
                    path: t.path,
                    errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, C(), _].filter(e => !!e),
                    issueData: {
                        code: y.invalid_arguments,
                        argumentsError: r
                    }
                })
            }

            function a(e, r) {
                return w({
                    data: e,
                    path: t.path,
                    errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, C(), _].filter(e => !!e),
                    issueData: {
                        code: y.invalid_return_type,
                        returnTypeError: r
                    }
                })
            }
            let i = {
                    errorMap: t.common.contextualErrorMap
                },
                n = t.data;
            if (this._def.returns instanceof eL) {
                let e = this;
                return S(async function(...t) {
                    let s = new g([]),
                        o = await e._def.args.parseAsync(t, i).catch(e => {
                            throw s.addIssue(r(t, e)), s
                        }),
                        u = await Reflect.apply(n, this, o);
                    return await e._def.returns._def.type.parseAsync(u, i).catch(e => {
                        throw s.addIssue(a(u, e)), s
                    })
                })
            } {
                let e = this;
                return S(function(...t) {
                    let s = e._def.args.safeParse(t, i);
                    if (!s.success) throw new g([r(t, s.error)]);
                    let o = Reflect.apply(n, this, s.data),
                        u = e._def.returns.safeParse(o, i);
                    if (!u.success) throw new g([a(o, u.error)]);
                    return u.data
                })
            }
        }
        parameters() {
            return this._def.args
        }
        returnType() {
            return this._def.returns
        }
        args(...e) {
            return new ex({ ...this._def,
                args: eb.create(e).rest(ec.create())
            })
        }
        returns(e) {
            return new ex({ ...this._def,
                returns: e
            })
        }
        implement(e) {
            return this.parse(e)
        }
        strictImplement(e) {
            return this.parse(e)
        }
        static create(e, t, r) {
            return new ex({
                args: e || eb.create([]).rest(ec.create()),
                returns: t || ec.create(),
                typeName: l.ZodFunction,
                ...P(r)
            })
        }
    }
    class eT extends j {
        get schema() {
            return this._def.getter()
        }
        _parse(e) {
            let {
                ctx: t
            } = this._processInputParams(e);
            return this._def.getter()._parse({
                data: t.data,
                path: t.path,
                parent: t
            })
        }
    }
    eT.create = (e, t) => new eT({
        getter: e,
        typeName: l.ZodLazy,
        ...P(t)
    });
    class eE extends j {
        _parse(e) {
            if (e.data !== this._def.value) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    received: t.data,
                    code: y.invalid_literal,
                    expected: this._def.value
                }), T
            }
            return {
                status: "valid",
                value: e.data
            }
        }
        get value() {
            return this._def.value
        }
    }

    function eS(e, t) {
        return new eI({
            values: e,
            typeName: l.ZodEnum,
            ...P(t)
        })
    }
    eE.create = (e, t) => new eE({
        value: e,
        typeName: l.ZodLiteral,
        ...P(t)
    });
    class eI extends j {
        constructor() {
            super(...arguments), u.set(this, void 0)
        }
        _parse(e) {
            if ("string" != typeof e.data) {
                let t = this._getOrReturnCtx(e),
                    r = this._def.values;
                return k(t, {
                    expected: n.joinValues(r),
                    received: t.parsedType,
                    code: y.invalid_type
                }), T
            }
            if (R(this, u, "f") || N(this, u, new Set(this._def.values), "f"), !R(this, u, "f").has(e.data)) {
                let t = this._getOrReturnCtx(e),
                    r = this._def.values;
                return k(t, {
                    received: t.data,
                    code: y.invalid_enum_value,
                    options: r
                }), T
            }
            return S(e.data)
        }
        get options() {
            return this._def.values
        }
        get enum() {
            let e = {};
            for (let t of this._def.values) e[t] = t;
            return e
        }
        get Values() {
            let e = {};
            for (let t of this._def.values) e[t] = t;
            return e
        }
        get Enum() {
            let e = {};
            for (let t of this._def.values) e[t] = t;
            return e
        }
        extract(e, t = this._def) {
            return eI.create(e, { ...this._def,
                ...t
            })
        }
        exclude(e, t = this._def) {
            return eI.create(this.options.filter(t => !e.includes(t)), { ...this._def,
                ...t
            })
        }
    }
    u = new WeakMap, eI.create = eS;
    class eO extends j {
        constructor() {
            super(...arguments), d.set(this, void 0)
        }
        _parse(e) {
            let t = n.getValidEnumValues(this._def.values),
                r = this._getOrReturnCtx(e);
            if (r.parsedType !== m.string && r.parsedType !== m.number) {
                let e = n.objectValues(t);
                return k(r, {
                    expected: n.joinValues(e),
                    received: r.parsedType,
                    code: y.invalid_type
                }), T
            }
            if (R(this, d, "f") || N(this, d, new Set(n.getValidEnumValues(this._def.values)), "f"), !R(this, d, "f").has(e.data)) {
                let e = n.objectValues(t);
                return k(r, {
                    received: r.data,
                    code: y.invalid_enum_value,
                    options: e
                }), T
            }
            return S(e.data)
        }
        get enum() {
            return this._def.values
        }
    }
    d = new WeakMap, eO.create = (e, t) => new eO({
        values: e,
        typeName: l.ZodNativeEnum,
        ...P(t)
    });
    class eL extends j {
        unwrap() {
            return this._def.type
        }
        _parse(e) {
            let {
                ctx: t
            } = this._processInputParams(e);
            return t.parsedType !== m.promise && !1 === t.common.async ? (k(t, {
                code: y.invalid_type,
                expected: m.promise,
                received: t.parsedType
            }), T) : S((t.parsedType === m.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap
            })))
        }
    }
    eL.create = (e, t) => new eL({
        type: e,
        typeName: l.ZodPromise,
        ...P(t)
    });
    class eA extends j {
        innerType() {
            return this._def.schema
        }
        sourceType() {
            return this._def.schema._def.typeName === l.ZodEffects ? this._def.schema.sourceType() : this._def.schema
        }
        _parse(e) {
            let {
                status: t,
                ctx: r
            } = this._processInputParams(e), a = this._def.effect || null, i = {
                addIssue: e => {
                    k(r, e), e.fatal ? t.abort() : t.dirty()
                },
                get path() {
                    return r.path
                }
            };
            if (i.addIssue = i.addIssue.bind(i), "preprocess" === a.type) {
                let e = a.transform(r.data, i);
                if (r.common.async) return Promise.resolve(e).then(async e => {
                    if ("aborted" === t.value) return T;
                    let a = await this._def.schema._parseAsync({
                        data: e,
                        path: r.path,
                        parent: r
                    });
                    return "aborted" === a.status ? T : "dirty" === a.status || "dirty" === t.value ? E(a.value) : a
                }); {
                    if ("aborted" === t.value) return T;
                    let a = this._def.schema._parseSync({
                        data: e,
                        path: r.path,
                        parent: r
                    });
                    return "aborted" === a.status ? T : "dirty" === a.status || "dirty" === t.value ? E(a.value) : a
                }
            }
            if ("refinement" === a.type) {
                let e = e => {
                    let t = a.refinement(e, i);
                    if (r.common.async) return Promise.resolve(t);
                    if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                    return e
                };
                if (!1 !== r.common.async) return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(r => "aborted" === r.status ? T : ("dirty" === r.status && t.dirty(), e(r.value).then(() => ({
                    status: t.value,
                    value: r.value
                })))); {
                    let a = this._def.schema._parseSync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    });
                    return "aborted" === a.status ? T : ("dirty" === a.status && t.dirty(), e(a.value), {
                        status: t.value,
                        value: a.value
                    })
                }
            }
            if ("transform" === a.type)
                if (!1 !== r.common.async) return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(e => L(e) ? Promise.resolve(a.transform(e.value, i)).then(e => ({
                    status: t.value,
                    value: e
                })) : e);
                else {
                    let e = this._def.schema._parseSync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    });
                    if (!L(e)) return e;
                    let n = a.transform(e.value, i);
                    if (n instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                    return {
                        status: t.value,
                        value: n
                    }
                }
            n.assertNever(a)
        }
    }
    eA.create = (e, t, r) => new eA({
        schema: e,
        typeName: l.ZodEffects,
        effect: t,
        ...P(r)
    }), eA.createWithPreprocess = (e, t, r) => new eA({
        schema: t,
        effect: {
            type: "preprocess",
            transform: e
        },
        typeName: l.ZodEffects,
        ...P(r)
    });
    class eR extends j {
        _parse(e) {
            return this._getType(e) === m.undefined ? S(void 0) : this._def.innerType._parse(e)
        }
        unwrap() {
            return this._def.innerType
        }
    }
    eR.create = (e, t) => new eR({
        innerType: e,
        typeName: l.ZodOptional,
        ...P(t)
    });
    class eN extends j {
        _parse(e) {
            return this._getType(e) === m.null ? S(null) : this._def.innerType._parse(e)
        }
        unwrap() {
            return this._def.innerType
        }
    }
    eN.create = (e, t) => new eN({
        innerType: e,
        typeName: l.ZodNullable,
        ...P(t)
    });
    class eZ extends j {
        _parse(e) {
            let {
                ctx: t
            } = this._processInputParams(e), r = t.data;
            return t.parsedType === m.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
                data: r,
                path: t.path,
                parent: t
            })
        }
        removeDefault() {
            return this._def.innerType
        }
    }
    eZ.create = (e, t) => new eZ({
        innerType: e,
        typeName: l.ZodDefault,
        defaultValue: "function" == typeof t.default ? t.default : () => t.default,
        ...P(t)
    });
    class e$ extends j {
        _parse(e) {
            let {
                ctx: t
            } = this._processInputParams(e), r = { ...t,
                common: { ...t.common,
                    issues: []
                }
            }, a = this._def.innerType._parse({
                data: r.data,
                path: r.path,
                parent: { ...r
                }
            });
            return A(a) ? a.then(e => ({
                status: "valid",
                value: "valid" === e.status ? e.value : this._def.catchValue({
                    get error() {
                        return new g(r.common.issues)
                    },
                    input: r.data
                })
            })) : {
                status: "valid",
                value: "valid" === a.status ? a.value : this._def.catchValue({
                    get error() {
                        return new g(r.common.issues)
                    },
                    input: r.data
                })
            }
        }
        removeCatch() {
            return this._def.innerType
        }
    }
    e$.create = (e, t) => new e$({
        innerType: e,
        typeName: l.ZodCatch,
        catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
        ...P(t)
    });
    class eP extends j {
        _parse(e) {
            if (this._getType(e) !== m.nan) {
                let t = this._getOrReturnCtx(e);
                return k(t, {
                    code: y.invalid_type,
                    expected: m.nan,
                    received: t.parsedType
                }), T
            }
            return {
                status: "valid",
                value: e.data
            }
        }
    }
    eP.create = e => new eP({
        typeName: l.ZodNaN,
        ...P(e)
    });
    let ej = Symbol("zod_brand");
    class eM extends j {
        _parse(e) {
            let {
                ctx: t
            } = this._processInputParams(e), r = t.data;
            return this._def.type._parse({
                data: r,
                path: t.path,
                parent: t
            })
        }
        unwrap() {
            return this._def.type
        }
    }
    class eD extends j {
        _parse(e) {
            let {
                status: t,
                ctx: r
            } = this._processInputParams(e);
            if (r.common.async) return (async () => {
                let e = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return "aborted" === e.status ? T : "dirty" === e.status ? (t.dirty(), E(e.value)) : this._def.out._parseAsync({
                    data: e.value,
                    path: r.path,
                    parent: r
                })
            })(); {
                let e = this._def.in._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return "aborted" === e.status ? T : "dirty" === e.status ? (t.dirty(), {
                    status: "dirty",
                    value: e.value
                }) : this._def.out._parseSync({
                    data: e.value,
                    path: r.path,
                    parent: r
                })
            }
        }
        static create(e, t) {
            return new eD({ in: e,
                out: t,
                typeName: l.ZodPipeline
            })
        }
    }
    class eF extends j {
        _parse(e) {
            let t = this._def.innerType._parse(e),
                r = e => (L(e) && (e.value = Object.freeze(e.value)), e);
            return A(t) ? t.then(e => r(e)) : r(t)
        }
        unwrap() {
            return this._def.innerType
        }
    }

    function eU(e, t) {
        let r = "function" == typeof e ? e(t) : "string" == typeof e ? {
            message: e
        } : e;
        return "string" == typeof r ? {
            message: r
        } : r
    }

    function eV(e, t = {}, r) {
        return e ? el.create().superRefine((a, i) => {
            var n, s;
            let o = e(a);
            if (o instanceof Promise) return o.then(e => {
                var n, s;
                if (!e) {
                    let e = eU(t, a),
                        o = null == (s = null != (n = e.fatal) ? n : r) || s;
                    i.addIssue({
                        code: "custom",
                        ...e,
                        fatal: o
                    })
                }
            });
            if (!o) {
                let e = eU(t, a),
                    o = null == (s = null != (n = e.fatal) ? n : r) || s;
                i.addIssue({
                    code: "custom",
                    ...e,
                    fatal: o
                })
            }
        }) : el.create()
    }
    eF.create = (e, t) => new eF({
        innerType: e,
        typeName: l.ZodReadonly,
        ...P(t)
    });
    let ez = {
        object: em.lazycreate
    };
    (i = l || (l = {})).ZodString = "ZodString", i.ZodNumber = "ZodNumber", i.ZodNaN = "ZodNaN", i.ZodBigInt = "ZodBigInt", i.ZodBoolean = "ZodBoolean", i.ZodDate = "ZodDate", i.ZodSymbol = "ZodSymbol", i.ZodUndefined = "ZodUndefined", i.ZodNull = "ZodNull", i.ZodAny = "ZodAny", i.ZodUnknown = "ZodUnknown", i.ZodNever = "ZodNever", i.ZodVoid = "ZodVoid", i.ZodArray = "ZodArray", i.ZodObject = "ZodObject", i.ZodUnion = "ZodUnion", i.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", i.ZodIntersection = "ZodIntersection", i.ZodTuple = "ZodTuple", i.ZodRecord = "ZodRecord", i.ZodMap = "ZodMap", i.ZodSet = "ZodSet", i.ZodFunction = "ZodFunction", i.ZodLazy = "ZodLazy", i.ZodLiteral = "ZodLiteral", i.ZodEnum = "ZodEnum", i.ZodEffects = "ZodEffects", i.ZodNativeEnum = "ZodNativeEnum", i.ZodOptional = "ZodOptional", i.ZodNullable = "ZodNullable", i.ZodDefault = "ZodDefault", i.ZodCatch = "ZodCatch", i.ZodPromise = "ZodPromise", i.ZodBranded = "ZodBranded", i.ZodPipeline = "ZodPipeline", i.ZodReadonly = "ZodReadonly";
    let eq = er.create,
        eB = ea.create,
        eK = eP.create,
        eW = ei.create,
        eH = en.create,
        eG = es.create,
        eY = eo.create,
        eQ = eu.create,
        eJ = ed.create,
        eX = el.create,
        e0 = ec.create,
        e1 = eh.create,
        e2 = ef.create,
        e9 = ep.create,
        e4 = em.create,
        e8 = em.strictCreate,
        e5 = ev.create,
        e6 = eg.create,
        e3 = e_.create,
        e7 = eb.create,
        te = eC.create,
        tt = ew.create,
        tr = ek.create,
        ta = ex.create,
        ti = eT.create,
        tn = eE.create,
        ts = eI.create,
        to = eO.create,
        tu = eL.create,
        td = eA.create,
        tl = eR.create,
        tc = eN.create,
        th = eA.createWithPreprocess,
        tf = eD.create;
    var tp = Object.freeze({
        __proto__: null,
        defaultErrorMap: _,
        setErrorMap: function(e) {
            b = e
        },
        getErrorMap: C,
        makeIssue: w,
        EMPTY_PATH: [],
        addIssueToContext: k,
        ParseStatus: x,
        INVALID: T,
        DIRTY: E,
        OK: S,
        isAborted: I,
        isDirty: O,
        isValid: L,
        isAsync: A,
        get util() {
            return n
        },
        get objectUtil() {
            return s
        },
        ZodParsedType: m,
        getParsedType: v,
        ZodType: j,
        datetimeRegex: et,
        ZodString: er,
        ZodNumber: ea,
        ZodBigInt: ei,
        ZodBoolean: en,
        ZodDate: es,
        ZodSymbol: eo,
        ZodUndefined: eu,
        ZodNull: ed,
        ZodAny: el,
        ZodUnknown: ec,
        ZodNever: eh,
        ZodVoid: ef,
        ZodArray: ep,
        ZodObject: em,
        ZodUnion: ev,
        ZodDiscriminatedUnion: eg,
        ZodIntersection: e_,
        ZodTuple: eb,
        ZodRecord: eC,
        ZodMap: ew,
        ZodSet: ek,
        ZodFunction: ex,
        ZodLazy: eT,
        ZodLiteral: eE,
        ZodEnum: eI,
        ZodNativeEnum: eO,
        ZodPromise: eL,
        ZodEffects: eA,
        ZodTransformer: eA,
        ZodOptional: eR,
        ZodNullable: eN,
        ZodDefault: eZ,
        ZodCatch: e$,
        ZodNaN: eP,
        BRAND: ej,
        ZodBranded: eM,
        ZodPipeline: eD,
        ZodReadonly: eF,
        custom: eV,
        Schema: j,
        ZodSchema: j,
        late: ez,
        get ZodFirstPartyTypeKind() {
            return l
        },
        coerce: {
            string: e => er.create({ ...e,
                coerce: !0
            }),
            number: e => ea.create({ ...e,
                coerce: !0
            }),
            boolean: e => en.create({ ...e,
                coerce: !0
            }),
            bigint: e => ei.create({ ...e,
                coerce: !0
            }),
            date: e => es.create({ ...e,
                coerce: !0
            })
        },
        any: eX,
        array: e9,
        bigint: eW,
        boolean: eH,
        date: eG,
        discriminatedUnion: e6,
        effect: td,
        enum: ts,
        function: ta,
        instanceof: (e, t = {
            message: `Input not instance of ${e.name}`
        }) => eV(t => t instanceof e, t),
        intersection: e3,
        lazy: ti,
        literal: tn,
        map: tt,
        nan: eK,
        nativeEnum: to,
        never: e1,
        null: eJ,
        nullable: tc,
        number: eB,
        object: e4,
        oboolean: () => eH().optional(),
        onumber: () => eB().optional(),
        optional: tl,
        ostring: () => eq().optional(),
        pipeline: tf,
        preprocess: th,
        promise: tu,
        record: te,
        set: tr,
        strictObject: e8,
        string: eq,
        symbol: eY,
        transformer: td,
        tuple: e7,
        undefined: eQ,
        union: e5,
        unknown: e0,
        void: e2,
        NEVER: T,
        ZodIssueCode: y,
        quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: g
    });
    e.s(["z", 0, tp], 369330);
    let tm = tp.object({
            tags: tp.record(tp.unknown())
        }),
        tv = tp.object({
            params: tp.object({
                visitors: tp.array(tp.object({
                    snapshots: tp.array(tp.object({
                        events: tp.array(tm)
                    }))
                }))
            })
        }),
        ty = "__trackingID",
        tg = "pending",
        t_ = null,
        tb = {
            status: "idle"
        },
        tC = [];

    function tw() {
        t_ && "accepted" === tg && (tb = {
            status: "ready",
            client: t_
        }, function() {
            if ("ready" !== tb.status || 0 === tC.length) return;
            let e = [...tC];
            for (let t of (tC = [], e)) tb.client.track(t.key, t.tags)
        }())
    }
    let tk = function(e, t) {
        if ("ready" !== tb.status) return Promise.resolve();
        let r = tb.client,
            a = (0, p.v4)();
        return new Promise(i => {
            let n = setTimeout(i, 1e3),
                s = r.notificationCenter.addNotificationListener(f.enums.NOTIFICATION_TYPES.LOG_EVENT, e => {
                    tv.safeParse(e).success && function(e, t) {
                        try {
                            for (let r of t.params.visitors)
                                for (let t of r.snapshots)
                                    for (let r of t.events)
                                        if (ty in r.tags) return r.tags[ty] === e
                        } catch {}
                        return !1
                    }(a, e) && (r.notificationCenter.removeNotificationListener(s), clearTimeout(n), i())
                });
            r.track(e, { ...t,
                [ty]: a
            })
        })
    };
    e.s(["setClient", 0, function(e) {
        t_ = e, tw()
    }, "setConsent", 0, function(e) {
        tg = e, "accepted" === e && tw(), "refused" === e && (tb = {
            status: "disabled"
        })
    }, "track", 0, function(e, t) {
        h(() => {
            let r = {
                key: e,
                tags: t
            };
            "ready" !== tb.status ? tC.push(r) : tb.client.track(r.key, r.tags)
        })
    }, "trackAsync", 0, tk], 318897)
}, 833758, 181475, 614041, e => {
    "use strict";
    e.i(350461);
    var t, r = e.i(261576),
        a = e.i(480495),
        i = e.i(217837),
        n = e.i(203828),
        s = e.i(191788),
        o = e.i(65074),
        u = e.i(148728),
        d = e.i(318897),
        l = ((t = {}).NECESSARY = "C0001", t.PERFORMANCE = "C0002", t.FUNCTIONAL = "C0003", t.TARGETING = "C0004", t);
    let c = () => void 0;

    function h(e) {
        if (!(0, a.getCookie)("OptanonAlertBoxClosed")) return "pending";
        let t = (0, a.getCookie)("OptanonConsent");
        return t && String(t).includes(`${e}:1`) ? "accepted" : "refused"
    }

    function f(e, t) {
        if ("accepted" === h(t)) return e(), c;
        if (window.OneTrust ? .OnConsentChanged) return p(e, t);
        let r = 0,
            a = null,
            i = !1,
            n = () => {
                if (!i) {
                    if ("accepted" === h(t)) {
                        i = !0, e();
                        return
                    }
                    if (window.OneTrust ? .OnConsentChanged) {
                        i = !0, p(e, t);
                        return
                    }(r += 1) < 50 && (a = setTimeout(n, 100))
                }
            },
            s = () => {
                window.removeEventListener("oneTrustReady", s), n()
            };
        return window.addEventListener("oneTrustReady", s), a = setTimeout(n, 100), () => {
            window.removeEventListener("oneTrustReady", s), a && clearTimeout(a)
        }
    }

    function p(e, t) {
        if ("accepted" === h(t)) return e(), c;
        if (!window.OneTrust ? .OnConsentChanged) return c;
        let r = !1;
        return window.OneTrust.OnConsentChanged(() => {
            r || "accepted" !== h(t) || (r = !0, e())
        }), c
    }

    function m() {
        window.OneTrust ? .OnConsentChanged && ((0, d.setConsent)(h("C0002")), window.OneTrust.OnConsentChanged(() => {
            (0, d.setConsent)(h("C0002"))
        }))
    }
    e.s(["CONSENT_UPDATED_EVENT_NAME", 0, "OneTrustGroupsUpdated", "ConsentCategory", () => l, "getConsentState", 0, h, "initializeConsentSync", 0, function() {
        window.OneTrust ? (0, u.default)(m) : window.addEventListener("oneTrustReady", () => (0, u.default)(m))
    }, "onConsentAccepted", 0, f], 181475);
    let v = "ledger.referrale_code",
        y = "ledger.affiliate_uuid",
        g = "ledger.affiliate_tracker";
    e.s(["COOKIE_AFFILIATE_TRACKER", 0, g, "COOKIE_AFFILIATE_UUID", 0, y, "COOKIE_CAMPAIGN_ACTIVE", 0, "ledger.campaign_active", "COOKIE_REFERRAL_CODE", 0, v], 614041);
    let _ = !1,
        b = new Date;
    b.setDate(new Date().getDate() + 1);
    let C = new Date;
    C.setDate(C.getDate() + 30);
    let w = {
            expires: b
        },
        k = {
            expires: C
        },
        x = e => "string" == typeof e && "" !== e,
        T = () => {
            (0, a.deleteCookie)(y), (0, a.deleteCookie)(g), (0, a.deleteCookie)(v)
        };

    function E() {
        var e;
        let t, r, i, n = (0, a.getCookie)(y),
            s = (0, a.getCookie)(g),
            o = (0, a.getCookie)(v);
        return t = (e = {
            [y]: n,
            [g]: s,
            [v]: o
        })[y], r = e[g], i = e[v], x(t) && x(r) ? {
            activeEntryChannel: "affiliate-anonymous",
            affiliateReference: t,
            affiliateTracker: r
        } : x(t) ? {
            activeEntryChannel: "affiliate-anonymous",
            affiliateReference: t
        } : x(i) ? {
            activeEntryChannel: "referral",
            referralCode: i
        } : {
            activeEntryChannel: null
        }
    }
    e.s(["default", 0, () => {
        let e, t, u, d, c, p, m, b, C, x, S, I = (0, r.c)(23),
            O = (0, i.useSearchParams)(),
            L = (0, n.useRouter)();
        I[0] !== O ? (e = O ? .get("referral_code"), I[0] = O, I[1] = e) : e = I[1];
        let A = e;
        I[2] !== O ? (t = O ? .get("remove_referral"), I[2] = O, I[3] = t) : t = I[3];
        let R = t;
        I[4] !== O ? (u = O ? .get("r"), I[4] = O, I[5] = u) : u = I[5];
        let N = u;
        I[6] !== O ? (d = O ? .get("tracker"), I[6] = O, I[7] = d) : d = I[7];
        let Z = d;
        I[8] !== O ? (c = O ? .get("ir"), I[8] = O, I[9] = c) : c = I[9];
        let $ = c,
            P = (0, s.useRef)(null),
            j = (0, s.useRef)(null),
            [M, D] = (0, s.useState)(E);
        I[10] === Symbol.for("react.memo_cache_sentinel") ? (p = () => () => {
            j.current ? .()
        }, m = [], I[10] = p, I[11] = m) : (p = I[10], m = I[11]), (0, s.useEffect)(p, m), I[12] !== $ || I[13] !== N || I[14] !== Z || I[15] !== A || I[16] !== R || I[17] !== L ? (b = () => {
            if (R) {
                (0, a.deleteCookie)(v), (0, o.clearCartId)(), L.push({
                    pathname: L.pathname,
                    query: void 0
                }).then(() => {
                    L.reload()
                });
                return
            }
            if ($) {
                T(), D({
                    activeEntryChannel: null
                });
                return
            }
            if (N) {
                D({
                    activeEntryChannel: "affiliate-anonymous",
                    affiliateReference: N,
                    affiliateTracker: Z ? ? void 0
                }), P.current = {
                    type: "affiliate",
                    reference: N,
                    tracker: Z
                };
                let e = () => {
                    let e = P.current;
                    if (e ? .type === "affiliate") {
                        var t;
                        T(), t = e.reference, _ || (fetch("https://affiliate.ledger.com/api/v1.0/affiliate/hit", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({
                                affiliate_uuid: t,
                                referrer: window.document.referrer
                            })
                        }), _ = !0), (0, a.setCookie)(y, e.reference, k), (0, a.setCookie)(g, e.tracker, k), P.current = null
                    }
                };
                "accepted" === h(l.TARGETING) ? e() : j.current = f(e, l.TARGETING);
                return
            }
            if (A) {
                D({
                    activeEntryChannel: "referral",
                    referralCode: A
                }), P.current = {
                    type: "referral",
                    code: A
                };
                let e = () => {
                    let e = P.current;
                    e ? .type === "referral" && (T(), (0, a.setCookie)(v, e.code, w), P.current = null)
                };
                "accepted" === h(l.TARGETING) ? e() : j.current = f(e, l.TARGETING);
                return
            }
        }, C = [A, N, Z, $, R, L], I[12] = $, I[13] = N, I[14] = Z, I[15] = A, I[16] = R, I[17] = L, I[18] = b, I[19] = C) : (b = I[18], C = I[19]), (0, s.useEffect)(b, C), I[20] === Symbol.for("react.memo_cache_sentinel") ? (x = e => D(e), I[20] = x) : x = I[20];
        let F = x;
        return I[21] !== M ? (S = {
            entryChannel: M,
            addNameToAffiliate: F
        }, I[21] = M, I[22] = S) : S = I[22], S
    }], 833758)
}, 982288, e => {
    "use strict";
    var t = e.i(480495);
    e.i(833758);
    var r = e.i(614041);
    let a = {
            BTC: 0,
            SOL: 0
        },
        i = async (e, t) => {
            let r = new URL("/api/crypto-vouchers", window.location.origin);
            r.searchParams.set("skus", e.cartLineSkus), e.referralCode && r.searchParams.set("referralCode", e.referralCode), e.affiliateReference && r.searchParams.set("affiliateReference", e.affiliateReference), t && r.searchParams.set("preview", "true");
            let a = await fetch(r.toString());
            if (!a.ok) throw Error(`Failed to fetch crypto vouchers: ${a.statusText}`);
            return a.json()
        },
        n = async (e, n) => {
            if (!e ? .cartLines.length) return {
                cryptoVouchersTotal: a
            };
            let s = e.cartLines.map(e => `${e.sku},${e.quantity}`).join(";"),
                o = (0, t.getCookie)(r.COOKIE_REFERRAL_CODE),
                u = (0, t.getCookie)(r.COOKIE_AFFILIATE_UUID),
                d = (0, t.getCookie)(r.COOKIE_CAMPAIGN_ACTIVE);
            if (!(o || u || d)) return {
                cryptoVouchersTotal: a
            };
            try {
                let {
                    cryptoVouchersTotal: e
                } = await i({
                    cartLineSkus: s,
                    referralCode: o,
                    affiliateReference: u
                }, n);
                return {
                    cryptoVouchersTotal: e
                }
            } catch (e) {
                return console.error("Error fetching crypto vouchers:", e), {
                    cryptoVouchersTotal: a
                }
            }
        };
    e.s(["fetchCryptoVoucherValue", 0, n])
}, 163726, e => {
    "use strict";
    var t = e.i(982288),
        r = e.i(78415);
    let a = async (e, a) => {
        let i = e ? .lines.nodes.map(e => {
                let {
                    id: t,
                    quantity: a,
                    cost: i,
                    merchandise: n,
                    attributes: s
                } = e, {
                    id: o,
                    image: u,
                    title: d,
                    sku: l,
                    product: c,
                    compareAtPrice: h
                } = n, {
                    title: f,
                    handle: p,
                    id: m,
                    metafields: v,
                    variants: y,
                    tags: g
                } = c, _ = v ? .find(e => e ? .key === "maximum_quantity"), b = parseFloat(_ ? .value || "8"), C = y.edges.length > 1, w = f.concat(C ? ` - ${d}` : "");
                return {
                    id: t,
                    maxQuantityAllowed: b,
                    variantId: o,
                    productId: m,
                    quantity: a,
                    productTitle: f,
                    tags: g,
                    sku: l,
                    fullTitle: w,
                    variantTitle: y.edges.length > 1 && d,
                    handle: p,
                    image: u,
                    cost: i,
                    compareAtPrice: h,
                    attributes: s,
                    linkedProductLineId: (0, r.default)(s, "__linkedProductLineId")
                }
            }) || [],
            n = {
                attributes: e.attributes,
                id: e.id,
                totalQuantity: e.totalQuantity,
                cartLines: i,
                cost: e.cost,
                checkoutUrl: e.checkoutUrl
            },
            {
                cryptoVouchersTotal: s
            } = await (0, t.fetchCryptoVoucherValue)(n, a);
        return { ...n,
            cryptoVoucherValue: s
        }
    };
    e.s(["MAX_QUANTITY_DEFAULT", 0, 8, "default", 0, a])
}, 675565, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(215067);
    e.s(["useEventListener", 0, function(e, a, i, n) {
        let s = (0, r.useLatestValue)(i);
        (0, t.useEffect)(() => {
            function t(e) {
                s.current(e)
            }
            return (e = null != e ? e : window).addEventListener(a, t, n), () => e.removeEventListener(a, t, n)
        }, [e, a, n])
    }])
}, 28335, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(778530),
        a = e.i(855367),
        i = e.i(780795),
        n = e.i(993481);
    let s = (0, t.createContext)(null);

    function o(e = null) {
        var r;
        return null != (r = (0, t.useContext)(s)) ? r : e
    }
    e.s(["MainTreeProvider", 0, function({
        children: e,
        node: n
    }) {
        let [u, d] = (0, t.useState)(null), l = o(null != n ? n : u);
        return t.default.createElement(s.Provider, {
            value: l
        }, e, null === l && t.default.createElement(r.Hidden, {
            features: r.HiddenFeatures.Hidden,
            ref: e => {
                var t, r;
                if (e) {
                    for (let n of null != (r = null == (t = (0, i.getOwnerDocument)(e)) ? void 0 : t.querySelectorAll("html > *, body > *")) ? r : [])
                        if (n !== document.body && n !== document.head && a.isElement(n) && null != n && n.contains(e)) {
                            d(n);
                            break
                        }
                }
            }
        }))
    }, "useMainTreeNode", 0, o, "useRootContainers", 0, function({
        defaultContainers: e = [],
        portals: t,
        mainTreeNode: r
    } = {}) {
        let s = (0, n.useEvent)(() => {
            var n, s;
            let o = (0, i.getOwnerDocument)(r),
                u = [];
            for (let t of e) null !== t && (a.isElement(t) ? u.push(t) : "current" in t && a.isElement(t.current) && u.push(t.current));
            if (null != t && t.current)
                for (let e of t.current) u.push(e);
            for (let e of null != (n = null == o ? void 0 : o.querySelectorAll("html > *, body > *")) ? n : []) e !== document.body && e !== document.head && a.isElement(e) && "headlessui-portal-root" !== e.id && (r && (e.contains(r) || e.contains(null == (s = null == r ? void 0 : r.getRootNode()) ? void 0 : s.host)) || u.some(t => e.contains(t)) || u.push(e));
            return u
        });
        return {
            resolveContainers: s,
            contains: (0, n.useEvent)(e => s().some(t => t.contains(e)))
        }
    }])
}, 627544, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(181093);
    e.s(["useServerHandoffComplete", 0, function() {
        let e, a = (e = "u" < typeof document, "useSyncExternalStore" in t && (0, t.useSyncExternalStore)(() => () => {}, () => !1, () => !e)),
            [i, n] = t.useState(r.env.isHandoffComplete);
        return i && !1 === r.env.isHandoffComplete && n(!1), t.useEffect(() => {
            !0 !== i && n(!0)
        }, [i]), t.useEffect(() => r.env.handoff(), []), !a && i
    }])
}, 226586, e => {
    "use strict";
    var t = e.i(191788);
    let r = (0, t.createContext)(() => {});
    e.s(["CloseProvider", 0, function({
        value: e,
        children: a
    }) {
        return t.default.createElement(r.Provider, {
            value: e
        }, a)
    }])
}, 448985, e => {
    "use strict";
    let t;
    var r = e.i(191788),
        a = e.i(395031),
        i = ((t = i || {})[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t);
    e.s(["Direction", 0, i, "useTabDirection", 0, function() {
        let e = (0, r.useRef)(0);
        return (0, a.useWindowEvent)(!0, "keydown", t => {
            "Tab" === t.key && (e.current = +!!t.shiftKey)
        }, !0), e
    }])
}, 651358, 636832, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(993481);
    e.s(["useWatch", 0, function(e, a) {
        let i = (0, t.useRef)([]),
            n = (0, r.useEvent)(e);
        (0, t.useEffect)(() => {
            let e = [...i.current];
            for (let [t, r] of a.entries())
                if (i.current[t] !== r) {
                    let t = n(a, e);
                    return i.current = a, t
                }
        }, [n, ...a])
    }], 651358);
    var a = e.i(855367),
        i = e.i(565383);
    let n = [];

    function s() {
        "loading" !== document.readyState && ((() => {
            function e(e) {
                if (!a.isHTMLorSVGElement(e.target) || e.target === document.body || n[0] === e.target) return;
                let t = e.target;
                t = t.closest(i.focusableSelector), n.unshift(null != t ? t : e.target), (n = n.filter(e => null != e && e.isConnected)).splice(10)
            }
            window.addEventListener("click", e, {
                capture: !0
            }), window.addEventListener("mousedown", e, {
                capture: !0
            }), window.addEventListener("focus", e, {
                capture: !0
            }), document.body.addEventListener("click", e, {
                capture: !0
            }), document.body.addEventListener("mousedown", e, {
                capture: !0
            }), document.body.addEventListener("focus", e, {
                capture: !0
            })
        })(), document.removeEventListener("DOMContentLoaded", s))
    }
    "u" > typeof window && "u" > typeof document && (document.addEventListener("DOMContentLoaded", s), s()), e.s(["history", () => n], 636832)
}, 295485, e => {
    "use strict";
    let t;
    var r = e.i(191788),
        a = e.i(626171),
        i = e.i(993481),
        n = e.i(785046),
        s = e.i(264728),
        o = e.i(215067),
        u = e.i(627544),
        d = e.i(156833),
        l = e.i(880281),
        c = e.i(896694),
        h = e.i(321713),
        f = e.i(426417),
        p = e.i(774664);

    function m(e) {
        var t;
        return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || !(0, p.isFragment)(null != (t = e.as) ? t : C) || 1 === r.default.Children.count(e.children)
    }
    let v = (0, r.createContext)(null);
    v.displayName = "TransitionContext";
    var y = ((t = y || {}).Visible = "visible", t.Hidden = "hidden", t);
    let g = (0, r.createContext)(null);

    function _(e) {
        return "children" in e ? _(e.children) : e.current.filter(({
            el: e
        }) => null !== e.current).filter(({
            state: e
        }) => "visible" === e).length > 0
    }

    function b(e, t) {
        let s = (0, o.useLatestValue)(e),
            u = (0, r.useRef)([]),
            d = (0, n.useIsMounted)(),
            l = (0, a.useDisposables)(),
            c = (0, i.useEvent)((e, t = p.RenderStrategy.Hidden) => {
                let r = u.current.findIndex(({
                    el: t
                }) => t === e); - 1 !== r && ((0, f.match)(t, {
                    [p.RenderStrategy.Unmount]() {
                        u.current.splice(r, 1)
                    },
                    [p.RenderStrategy.Hidden]() {
                        u.current[r].state = "hidden"
                    }
                }), l.microTask(() => {
                    var e;
                    !_(u) && d.current && (null == (e = s.current) || e.call(s))
                }))
            }),
            h = (0, i.useEvent)(e => {
                let t = u.current.find(({
                    el: t
                }) => t === e);
                return t ? "visible" !== t.state && (t.state = "visible") : u.current.push({
                    el: e,
                    state: "visible"
                }), () => c(e, p.RenderStrategy.Unmount)
            }),
            m = (0, r.useRef)([]),
            v = (0, r.useRef)(Promise.resolve()),
            y = (0, r.useRef)({
                enter: [],
                leave: []
            }),
            g = (0, i.useEvent)((e, r, a) => {
                m.current.splice(0), t && (t.chains.current[r] = t.chains.current[r].filter(([t]) => t !== e)), null == t || t.chains.current[r].push([e, new Promise(e => {
                    m.current.push(e)
                })]), null == t || t.chains.current[r].push([e, new Promise(e => {
                    Promise.all(y.current[r].map(([e, t]) => t)).then(() => e())
                })]), "enter" === r ? v.current = v.current.then(() => null == t ? void 0 : t.wait.current).then(() => a(r)) : a(r)
            }),
            b = (0, i.useEvent)((e, t, r) => {
                Promise.all(y.current[t].splice(0).map(([e, t]) => t)).then(() => {
                    var e;
                    null == (e = m.current.shift()) || e()
                }).then(() => r(t))
            });
        return (0, r.useMemo)(() => ({
            children: u,
            register: h,
            unregister: c,
            onStart: g,
            onStop: b,
            wait: v,
            chains: y
        }), [h, c, u, g, b, y, v])
    }
    g.displayName = "NestingContext";
    let C = r.Fragment,
        w = p.RenderFeatures.RenderStrategy,
        k = (0, p.forwardRefWithAs)(function(e, t) {
            let {
                show: a,
                appear: n = !1,
                unmount: o = !0,
                ...l
            } = e, h = (0, r.useRef)(null), f = m(e), y = (0, d.useSyncRefs)(...f ? [h, t] : null === t ? [] : [t]);
            (0, u.useServerHandoffComplete)();
            let C = (0, c.useOpenClosed)();
            if (void 0 === a && null !== C && (a = (C & c.State.Open) === c.State.Open), void 0 === a) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
            let [k, T] = (0, r.useState)(a ? "visible" : "hidden"), E = b(() => {
                a || T("hidden")
            }), [S, I] = (0, r.useState)(!0), O = (0, r.useRef)([a]);
            (0, s.useIsoMorphicEffect)(() => {
                !1 !== S && O.current[O.current.length - 1] !== a && (O.current.push(a), I(!1))
            }, [O, a]);
            let L = (0, r.useMemo)(() => ({
                show: a,
                appear: n,
                initial: S
            }), [a, n, S]);
            (0, s.useIsoMorphicEffect)(() => {
                a ? T("visible") : _(E) || null === h.current || T("hidden")
            }, [a, E]);
            let A = {
                    unmount: o
                },
                R = (0, i.useEvent)(() => {
                    var t;
                    S && I(!1), null == (t = e.beforeEnter) || t.call(e)
                }),
                N = (0, i.useEvent)(() => {
                    var t;
                    S && I(!1), null == (t = e.beforeLeave) || t.call(e)
                }),
                Z = (0, p.useRender)();
            return r.default.createElement(g.Provider, {
                value: E
            }, r.default.createElement(v.Provider, {
                value: L
            }, Z({
                ourProps: { ...A,
                    as: r.Fragment,
                    children: r.default.createElement(x, {
                        ref: y,
                        ...A,
                        ...l,
                        beforeEnter: R,
                        beforeLeave: N
                    })
                },
                theirProps: {},
                defaultTag: r.Fragment,
                features: w,
                visible: "visible" === k,
                name: "Transition"
            })))
        }),
        x = (0, p.forwardRefWithAs)(function(e, t) {
            var a, n;
            let {
                transition: o = !0,
                beforeEnter: y,
                afterEnter: k,
                beforeLeave: x,
                afterLeave: T,
                enter: E,
                enterFrom: S,
                enterTo: I,
                entered: O,
                leave: L,
                leaveFrom: A,
                leaveTo: R,
                ...N
            } = e, [Z, $] = (0, r.useState)(null), P = (0, r.useRef)(null), j = m(e), M = (0, d.useSyncRefs)(...j ? [P, t, $] : null === t ? [] : [t]), D = null == (a = N.unmount) || a ? p.RenderStrategy.Unmount : p.RenderStrategy.Hidden, {
                show: F,
                appear: U,
                initial: V
            } = function() {
                let e = (0, r.useContext)(v);
                if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }(), [z, q] = (0, r.useState)(F ? "visible" : "hidden"), B = function() {
                let e = (0, r.useContext)(g);
                if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }(), {
                register: K,
                unregister: W
            } = B;
            (0, s.useIsoMorphicEffect)(() => K(P), [K, P]), (0, s.useIsoMorphicEffect)(() => {
                if (D === p.RenderStrategy.Hidden && P.current) return F && "visible" !== z ? void q("visible") : (0, f.match)(z, {
                    hidden: () => W(P),
                    visible: () => K(P)
                })
            }, [z, P, K, W, F, D]);
            let H = (0, u.useServerHandoffComplete)();
            (0, s.useIsoMorphicEffect)(() => {
                if (j && H && "visible" === z && null === P.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
            }, [P, z, H, j]);
            let G = V && !U,
                Y = U && F && V,
                Q = (0, r.useRef)(!1),
                J = b(() => {
                    Q.current || (q("hidden"), W(P))
                }, B),
                X = (0, i.useEvent)(e => {
                    Q.current = !0, J.onStart(P, e ? "enter" : "leave", e => {
                        "enter" === e ? null == y || y() : "leave" === e && (null == x || x())
                    })
                }),
                ee = (0, i.useEvent)(e => {
                    let t = e ? "enter" : "leave";
                    Q.current = !1, J.onStop(P, t, e => {
                        "enter" === e ? null == k || k() : "leave" === e && (null == T || T())
                    }), "leave" !== t || _(J) || (q("hidden"), W(P))
                });
            (0, r.useEffect)(() => {
                j && o || (X(F), ee(F))
            }, [F, j, o]);
            let et = !(!o || !j || !H || G),
                [, er] = (0, l.useTransition)(et, Z, F, {
                    start: X,
                    end: ee
                }),
                ea = (0, p.compact)({
                    ref: M,
                    className: (null == (n = (0, h.classNames)(N.className, Y && E, Y && S, er.enter && E, er.enter && er.closed && S, er.enter && !er.closed && I, er.leave && L, er.leave && !er.closed && A, er.leave && er.closed && R, !er.transition && F && O)) ? void 0 : n.trim()) || void 0,
                    ...(0, l.transitionDataAttributes)(er)
                }),
                ei = 0;
            "visible" === z && (ei |= c.State.Open), "hidden" === z && (ei |= c.State.Closed), F && "hidden" === z && (ei |= c.State.Opening), F || "visible" !== z || (ei |= c.State.Closing);
            let en = (0, p.useRender)();
            return r.default.createElement(g.Provider, {
                value: J
            }, r.default.createElement(c.OpenClosedProvider, {
                value: ei
            }, en({
                ourProps: ea,
                theirProps: N,
                defaultTag: C,
                features: w,
                visible: "visible" === z,
                name: "Transition.Child"
            })))
        }),
        T = (0, p.forwardRefWithAs)(function(e, t) {
            let a = null !== (0, r.useContext)(v),
                i = null !== (0, c.useOpenClosed)();
            return r.default.createElement(r.default.Fragment, null, !a && i ? r.default.createElement(k, {
                ref: t,
                ...e
            }) : r.default.createElement(x, {
                ref: t,
                ...e
            }))
        }),
        E = Object.assign(k, {
            Child: T,
            Root: k
        });
    e.s(["Transition", 0, E, "TransitionChild", 0, T])
}, 149818, 505888, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(191788),
        a = e.i(747748);
    let i = e => {
            let t = (0, a.createStore)(e),
                i = e => (function(e, t = e => e) {
                    let a = r.default.useSyncExternalStore(e.subscribe, r.default.useCallback(() => t(e.getState()), [e, t]), r.default.useCallback(() => t(e.getInitialState()), [e, t]));
                    return r.default.useDebugValue(a), a
                })(t, e);
            return Object.assign(i, t), i
        },
        n = e => e ? i(e) : i;
    e.s(["create", 0, n], 505888);
    let s = n((e, t) => ({
            trustServicesMap: {},
            productToTrustServices: {},
            actions: {
                setTrustServices: t => {
                    e(e => ({ ...e,
                        trustServicesMap: t.trustServicesMap,
                        productToTrustServices: t.productToTrustServices
                    }))
                },
                getTrustServicesFrom: e => {
                    let {
                        productToTrustServices: r,
                        trustServicesMap: a
                    } = t();
                    return (r[e] ? ? []).map(e => a[e]).filter(Boolean)
                },
                getRecoverFrom: e => t().actions.getTrustServicesFrom(e).find(e => "ledger-recover" === e.handle || "ledger-recover-6-months" === e.handle),
                getRecover: () => Object.values(t().trustServicesMap).find(e => "ledger-recover" === e.handle)
            }
        })),
        o = () => s(d),
        u = () => s(l);

    function d(e) {
        let {
            trustServicesMap: t
        } = e;
        return t
    }

    function l(e) {
        let {
            actions: t
        } = e;
        return t.setTrustServices
    }

    function c(e) {
        let {
            productToTrustServices: t
        } = e;
        return t
    }

    function h(e) {
        return "ledger-recover" === e.handle || "ledger-recover-6-months" === e.handle
    }

    function f(e) {
        return "ledger-recover" === e.handle
    }
    e.s(["getTrustServiceByVariantId", 0, e => {
        let {
            trustServicesMap: t
        } = s.getState();
        return Object.values(t).find(t => t.variant ? .id === e)
    }, "getTrustServiceEffectiveHandle", 0, (e, t) => {
        let {
            trustServicesMap: r
        } = s.getState();
        if (r[e]) return e;
        let a = e.toLowerCase(),
            i = a.includes("ledger-recover"),
            n = a.includes("ledger-replace"),
            o = i || n;
        if (o && t) return t;
        if (!o) return e;
        let u = Object.values(r).filter(e => i ? "ledger-recover" === e.handle : e.handle.startsWith("ledger-replace")).find(e => e.variant ? .handle);
        return u ? .variant.handle || e
    }, "useSetTrustServices", 0, u, "useTrustServicesApi", 0, () => {
        let e, r, a, i, n = (0, t.c)(11),
            d = o(),
            l = s(c),
            p = u();
        return n[0] !== l || n[1] !== d ? (e = e => (l[e] ? ? []).map(e => d[e]).filter(Boolean), r = e => (l[e] ? ? []).map(e => d[e]).filter(Boolean).find(h), n[0] = l, n[1] = d, n[2] = e, n[3] = r) : (e = n[2], r = n[3]), n[4] !== d ? (a = () => Object.values(d).find(f), n[4] = d, n[5] = a) : a = n[5], n[6] !== p || n[7] !== e || n[8] !== r || n[9] !== a ? (i = {
            setTrustServices: p,
            getTrustServicesFrom: e,
            getRecoverFrom: r,
            getRecover: a
        }, n[6] = p, n[7] = e, n[8] = r, n[9] = a, n[10] = i) : i = n[10], i
    }, "useTrustServicesMap", 0, o], 149818)
}, 468411, e => {
    "use strict";
    e.s(["removeShopifyPrefix", 0, e => e.split("/").at(-1), "toNumericId", 0, e => {
        let t = e.split("/").at(-1);
        return !t || t.length < 1 ? 0 : Number.parseInt(t, 10)
    }, "toShopifyVariantId", 0, e => e < 1 || Number.isNaN(e) ? "" : `gid://shopify/ProductVariant/${e}`])
}, 870256, e => {
    "use strict";
    e.s(["oneDay", 0, 864e5, "oneYear", 0, 31536e6])
}, 948123, e => {
    "use strict";
    var t = e.i(465235),
        r = e.i(271585),
        a = e.i(451415),
        i = class extends r.Removable {#
            e;#
            t;#
            r;
            constructor(e) {
                super(), this.mutationId = e.mutationId, this.#t = e.mutationCache, this.#e = [], this.state = e.state || n(), this.setOptions(e.options), this.scheduleGc()
            }
            setOptions(e) {
                this.options = e, this.updateGcTime(this.options.gcTime)
            }
            get meta() {
                return this.options.meta
            }
            addObserver(e) {
                this.#e.includes(e) || (this.#e.push(e), this.clearGcTimeout(), this.#t.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.#e = this.#e.filter(t => t !== e), this.scheduleGc(), this.#t.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: e
                })
            }
            optionalRemove() {
                this.#e.length || ("pending" === this.state.status ? this.scheduleGc() : this.#t.remove(this))
            }
            continue () {
                return this.#r ? .continue() ? ? this.execute(this.state.variables)
            }
            async execute(e) {
                this.#r = (0, a.createRetryer)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error("No mutationFn found")),
                    onFail: (e, t) => {
                        this.#a({
                            type: "failed",
                            failureCount: e,
                            error: t
                        })
                    },
                    onPause: () => {
                        this.#a({
                            type: "pause"
                        })
                    },
                    onContinue: () => {
                        this.#a({
                            type: "continue"
                        })
                    },
                    retry: this.options.retry ? ? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => this.#t.canRun(this)
                });
                let t = "pending" === this.state.status,
                    r = !this.#r.canStart();
                try {
                    if (!t) {
                        this.#a({
                            type: "pending",
                            variables: e,
                            isPaused: r
                        }), await this.#t.config.onMutate ? .(e, this);
                        let t = await this.options.onMutate ? .(e);
                        t !== this.state.context && this.#a({
                            type: "pending",
                            context: t,
                            variables: e,
                            isPaused: r
                        })
                    }
                    let a = await this.#r.start();
                    return await this.#t.config.onSuccess ? .(a, e, this.state.context, this), await this.options.onSuccess ? .(a, e, this.state.context), await this.#t.config.onSettled ? .(a, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(a, null, e, this.state.context), this.#a({
                        type: "success",
                        data: a
                    }), a
                } catch (t) {
                    try {
                        throw await this.#t.config.onError ? .(t, e, this.state.context, this), await this.options.onError ? .(t, e, this.state.context), await this.#t.config.onSettled ? .(void 0, t, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, t, e, this.state.context), t
                    } finally {
                        this.#a({
                            type: "error",
                            error: t
                        })
                    }
                } finally {
                    this.#t.runNext(this)
                }
            }#
            a(e) {
                this.state = (t => {
                    switch (e.type) {
                        case "failed":
                            return { ...t,
                                failureCount: e.failureCount,
                                failureReason: e.error
                            };
                        case "pause":
                            return { ...t,
                                isPaused: !0
                            };
                        case "continue":
                            return { ...t,
                                isPaused: !1
                            };
                        case "pending":
                            return { ...t,
                                context: e.context,
                                data: void 0,
                                failureCount: 0,
                                failureReason: null,
                                error: null,
                                isPaused: e.isPaused,
                                status: "pending",
                                variables: e.variables,
                                submittedAt: Date.now()
                            };
                        case "success":
                            return { ...t,
                                data: e.data,
                                failureCount: 0,
                                failureReason: null,
                                error: null,
                                status: "success",
                                isPaused: !1
                            };
                        case "error":
                            return { ...t,
                                data: void 0,
                                error: e.error,
                                failureCount: t.failureCount + 1,
                                failureReason: e.error,
                                isPaused: !1,
                                status: "error"
                            }
                    }
                })(this.state), t.notifyManager.batch(() => {
                    this.#e.forEach(t => {
                        t.onMutationUpdate(e)
                    }), this.#t.notify({
                        mutation: this,
                        type: "updated",
                        action: e
                    })
                })
            }
        };

    function n() {
        return {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: "idle",
            variables: void 0,
            submittedAt: 0
        }
    }
    e.s(["Mutation", 0, i, "getDefaultState", 0, n])
}, 292905, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(948123),
        a = e.i(465235),
        i = e.i(895564),
        n = e.i(456298),
        s = class extends i.Subscribable {#
            i;#
            n = void 0;#
            s;#
            o;
            constructor(e, t) {
                super(), this.#i = e, this.setOptions(t), this.bindMethods(), this.#u()
            }
            bindMethods() {
                this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
            }
            setOptions(e) {
                let t = this.options;
                this.options = this.#i.defaultMutationOptions(e), (0, n.shallowEqualObjects)(this.options, t) || this.#i.getMutationCache().notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#s,
                    observer: this
                }), t ? .mutationKey && this.options.mutationKey && (0, n.hashKey)(t.mutationKey) !== (0, n.hashKey)(this.options.mutationKey) ? this.reset() : this.#s ? .state.status === "pending" && this.#s.setOptions(this.options)
            }
            onUnsubscribe() {
                this.hasListeners() || this.#s ? .removeObserver(this)
            }
            onMutationUpdate(e) {
                this.#u(), this.#d(e)
            }
            getCurrentResult() {
                return this.#n
            }
            reset() {
                this.#s ? .removeObserver(this), this.#s = void 0, this.#u(), this.#d()
            }
            mutate(e, t) {
                return this.#o = t, this.#s ? .removeObserver(this), this.#s = this.#i.getMutationCache().build(this.#i, this.options), this.#s.addObserver(this), this.#s.execute(e)
            }#
            u() {
                let e = this.#s ? .state ? ? (0, r.getDefaultState)();
                this.#n = { ...e,
                    isPending: "pending" === e.status,
                    isSuccess: "success" === e.status,
                    isError: "error" === e.status,
                    isIdle: "idle" === e.status,
                    mutate: this.mutate,
                    reset: this.reset
                }
            }#
            d(e) {
                a.notifyManager.batch(() => {
                    if (this.#o && this.hasListeners()) {
                        let t = this.#n.variables,
                            r = this.#n.context;
                        e ? .type === "success" ? (this.#o.onSuccess ? .(e.data, t, r), this.#o.onSettled ? .(e.data, null, t, r)) : e ? .type === "error" && (this.#o.onError ? .(e.error, t, r), this.#o.onSettled ? .(void 0, e.error, t, r))
                    }
                    this.listeners.forEach(e => {
                        e(this.#n)
                    })
                })
            }
        },
        o = e.i(285700),
        u = e.i(153435);
    e.s(["useMutation", 0, function(e, r) {
        let i = (0, o.useQueryClient)(r),
            [n] = t.useState(() => new s(i, e));
        t.useEffect(() => {
            n.setOptions(e)
        }, [n, e]);
        let d = t.useSyncExternalStore(t.useCallback(e => n.subscribe(a.notifyManager.batchCalls(e)), [n]), () => n.getCurrentResult(), () => n.getCurrentResult()),
            l = t.useCallback((e, t) => {
                n.mutate(e, t).catch(u.noop)
            }, [n]);
        if (d.error && (0, u.shouldThrowError)(n.options.throwOnError, [d.error])) throw d.error;
        return { ...d,
            mutate: l,
            mutateAsync: d.mutate
        }
    }], 292905)
}, 644594, e => {
    "use strict";
    let t = (0, e.i(191788).createContext)({
            isDrawerLoading: !1,
            setIsDrawerLoading: () => {
                throw Error("Replace default setIsDrawerLoading method before calling it")
            },
            isDrawerOpen: !1,
            setIsDrawerOpen: () => {
                throw Error("Replace default setIsDrawerOpen method before calling it")
            },
            drawerStep: {
                step: "cart"
            },
            setDrawerStep: () => {
                throw Error("Replace default setDrawerStep method before calling it")
            },
            slideDrawer: !1,
            setSlideDrawer: () => {
                throw Error("Replace default setSlideDrawer method before calling it")
            },
            sideCartBanner: null,
            setSideCartBanner: () => {
                throw Error("Replace default setSideCartBanner method before calling it")
            }
        }),
        {
            Provider: r
        } = t;
    e.s(["DrawerContext", 0, t, "default", 0, r])
}, 999750, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        a = e.i(191788),
        i = e.i(833758);
    let n = (0, a.createContext)({
        entryChannel: {
            activeEntryChannel: null
        },
        addNameToAffiliate: () => null
    });
    e.s(["EntryChannelContext", 0, n, "EntryChannelProvider", 0, e => {
        let a, s = (0, r.c)(3),
            {
                children: o
            } = e,
            u = (0, i.default)();
        return s[0] !== o || s[1] !== u ? (a = (0, t.jsx)(n.Provider, {
            value: u,
            children: o
        }), s[0] = o, s[1] = u, s[2] = a) : a = s[2], a
    }])
}, 253770, e => {
    "use strict";
    var t = e.i(191788);
    let r = {
            activeCryptoVouchers: [],
            handlesForAllCryptoVouchers: []
        },
        a = (0, t.createContext)({
            cryptoVouchers: r,
            setCryptoVouchers: () => null
        }),
        {
            Provider: i
        } = a;
    e.s(["DEFAULT_CRYPTO_VOUCHERS", 0, r, "cryptoVouchersContext", 0, a, "default", 0, i])
}, 641645, e => {
    "use strict";
    var t = e.i(410219);
    let r = t.gql `
  attributes {
    key
    value
  }
  id
  totalQuantity
  createdAt
  updatedAt
  checkoutUrl
  lines(first: 10) {
    nodes {
      id
      quantity
      cost {
        amountPerQuantity {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
      }
      attributes {
        key
        value
      }
      merchandise {
        ... on ProductVariant {
          id
          title
          price {
            amount
            currencyCode
          }
          sku
          compareAtPrice {
          amount
          currencyCode
          }
          image {
            url
          }
          product {
            id
            title
            handle
            metafields(
              identifiers: [
                { namespace: "custom", key: "maximum_quantity" }
              ]
            ) {
              value
              key
            }
            tags
            variants(first: 2) {
              edges {
                node {
                  id
                }
              }
            }
            images(first: 1) {
              nodes {
                id
                url
              }
            }
          }
        }
      }
    }
  }
  cost {
    totalAmount {
      amount
      currencyCode
    }
    subtotalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
    totalDutyAmount {
      amount
      currencyCode
    }
  }
`;
    e.s(["default", 0, r])
}, 551966, e => {
    "use strict";
    var t = e.i(149818);
    e.s(["default", 0, ({
        cart: e,
        impactedProducts: r
    }) => {
        if (!e) return !1;
        let a = e.cartLines.reduce((e, {
            handle: r,
            variantId: a,
            quantity: i
        }) => {
            let n = r.toLowerCase().includes("ledger-recover") || r.toLowerCase().includes("ledger-replace") ? (0, t.getTrustServiceEffectiveHandle)(r, a) : (0, t.getTrustServiceEffectiveHandle)(r);
            return { ...e,
                [n]: (e[n] || 0) + i
            }
        }, {});
        return r.some(({
            handle: e,
            maxQuantityAllowed: r,
            quantityToAdd: i
        }) => (a[(0, t.getTrustServiceEffectiveHandle)(e)] || 0) + i > r)
    }])
}, 589756, 777051, 197224, 919906, 501743, 282855, 62727, 152642, e => {
    "use strict";
    var t = e.i(410219),
        r = e.i(738368),
        a = e.i(409043),
        i = e.i(65074),
        n = e.i(641645),
        s = e.i(163726),
        o = e.i(551966),
        u = e.i(149818),
        d = e.i(480495);
    e.i(831184);
    var l = e.i(229620),
        c = e.i(870256);
    let h = null;

    function f() {
        let e, t;
        if (!l.isBrowser) return "";
        if (h) return h;
        let r = (0, d.getCookie)("optimizely_user_id");
        return h = r ? String(r) : (e = crypto.randomUUID(), t = new Date(Date.now() + c.oneYear), (0, d.setCookie)("optimizely_user_id", e, {
            expires: t,
            path: "/",
            sameSite: "strict",
            secure: (0, l.isProduction)()
        }), e)
    }
    e.s(["resolveUserID", 0, f], 777051);
    let p = ({
            key: e
        }) => "referral" !== e && "affiliate" !== e,
        m = t.gql `
  mutation CartCreate($attributes: [AttributeInput!]!, $lines: [CartLineInput!]!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language, country: $country) {
  cartCreate(input: {attributes: $attributes, lines: $lines}) {
    cart {
      ${n.default}
    }
  }
}
`,
        v = t.gql `
  mutation CartLinesAddWithAttributes(
    $attributes: [AttributeInput!]!
    $lines: [CartLineInput!]!
    $cartId: ID!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(language: $language, country: $country) {
    cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
      cart {
        attributes {
          key
          value
        }
      }
    }
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${n.default}
      }
    }
  }
`;
    t.gql `
  mutation CartLinesUpdate(
    $lines: [CartLineUpdateInput!]!
    $cartId: ID!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(language: $language, country: $country) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${n.default}
      }
    }    
  }
`;
    let y = async ({
            cart: e,
            productsToAdd: t,
            entryChannel: n,
            language: d,
            country: l,
            locale: c,
            isPreview: h,
            overrideCartCookieName: y,
            isLedgerLiveMobileApp: g = !1
        }) => {
            let _ = t.map(({
                product: {
                    handle: e,
                    maxQuantityAllowed: t
                },
                quantityToAdd: r = 1
            }) => ({
                handle: (0, u.getTrustServiceEffectiveHandle)(e),
                maxQuantityAllowed: t,
                quantityToAdd: r
            }));
            if ((0, o.default)({
                    cart: e,
                    impactedProducts: _
                })) return { ...e,
                error: r.CartError.MAX_QUANTITY_REACHED
            };
            let b = t.map(({
                    variantId: t,
                    quantityToAdd: r = 1,
                    linkedProduct: a,
                    uniqueId: i
                }) => ({
                    merchandiseId: t,
                    quantity: r,
                    attributes: [{
                        key: "__linkedProductLineId",
                        value: a && "boolean" != typeof a ? a.id : "false"
                    }, {
                        key: "__uniqueId",
                        value: i || (e ? e.cartLines.find(e => e.variantId === t && !e.linkedProductLineId) ? .attributes.slice().reverse().find(e => "__uniqueId" === e.key) ? .value : null) || "false"
                    }]
                })),
                C = function(e, t, r = !1, a = [], i = !1) {
                    let n = "referral" === e.activeEntryChannel ? [{
                            key: "referral",
                            value: JSON.stringify({
                                referral_code: e.referralCode
                            })
                        }] : [],
                        s = "affiliate-anonymous" === e.activeEntryChannel || "affiliate-named" === e.activeEntryChannel ? [{
                            key: "affiliate",
                            value: JSON.stringify({
                                affiliate_reference: e.affiliateReference,
                                affiliate_tracker: e.affiliateTracker
                            })
                        }] : [],
                        o = n.length > 0 || s.length > 0 ? a.filter(p) : a,
                        u = o.find(({
                            key: e
                        }) => "user_locale" === e) ? [] : [{
                            key: "user_locale",
                            value: t.userLocale
                        }],
                        d = [{
                            key: "preview_mode",
                            value: JSON.stringify({
                                previewMode: r
                            })
                        }],
                        l = f();
                    return [...o.filter(({
                        key: e
                    }) => "preview_mode" !== e && "ledger_live_mobile_app" !== e && "_optimizely_visitor_id" !== e), ...n, ...s, ...u, ...d, {
                        key: "ledger_live_mobile_app",
                        value: i ? "true" : "false"
                    }, {
                        key: "_optimizely_visitor_id",
                        value: l
                    }]
                }(n, {
                    userLocale: c
                }, h, e ? .attributes, g),
                w = e ? .id;
            if (w) {
                let {
                    cartLinesAdd: e,
                    cartAttributesUpdate: t
                } = await a.shopify.request(v, {
                    attributes: C,
                    cartId: w,
                    lines: b,
                    language: d,
                    country: l
                });
                return (0, i.setCartId)(w, {
                    cardIdCookieName: y
                }), (0, s.default)({ ...e.cart,
                    attributes: t.cart.attributes
                }, h)
            }
            let {
                cartCreate: k
            } = await a.shopify.request(m, {
                attributes: C,
                lines: b,
                language: d,
                country: l
            }), {
                cart: x
            } = k;
            return (0, i.setCartId)(x ? .id, {
                cardIdCookieName: y
            }), (0, s.default)(x, h)
        },
        g = (e, t) => t.find(({
            linkedProductLineId: t
        }) => e === t);
    e.s(["default", 0, g], 197224);
    let _ = t.gql `
  cartLinesAdd(cartId: $cartId, lines: $linesToAdd) {
    cart {
      ${n.default}
    }
  }
`,
        b = async ({
            cartId: e,
            linesToUpdate: r,
            linesToAdd: o = [],
            language: u,
            country: d,
            isPreview: l,
            overrideCartCookieName: c
        }) => {
            let h = o.length > 0,
                f = t.gql `
  mutation (
    $linesToUpdate: [CartLineUpdateInput!]!,
    ${h?"$linesToAdd: [CartLineInput!]!,":""}
    $cartId: ID!,
    $language: LanguageCode,
    $country: CountryCode
  ) @inContext(language: $language, country: $country) {
    cartLinesUpdate(
      cartId: $cartId,
      lines: $linesToUpdate
    ) {
      cart {
        ${n.default}
      }
    }
    ${h?_:""}
  } 
`,
                p = {
                    cartId: e,
                    linesToUpdate: r,
                    language: u,
                    country: d,
                    ...h && {
                        linesToAdd: o
                    }
                },
                m = await a.shopify.request(f, p),
                v = m.cartLinesAdd ? .cart || m.cartLinesUpdate.cart;
            return (0, i.setCartId)(v ? .id, {
                cardIdCookieName: c
            }), (0, s.default)(v, l)
        };
    e.s(["default", 0, b], 919906);
    let C = async ({
        cart: e,
        cartLine: t,
        quantityIncrement: a,
        language: i,
        country: n,
        getTrustServicesFrom: s,
        isPreview: u,
        overrideCartCookieName: d
    }) => {
        let {
            id: l,
            quantity: c,
            handle: h,
            maxQuantityAllowed: f
        } = t;
        if ((0, o.default)({
                cart: e,
                impactedProducts: [{
                    handle: h,
                    maxQuantityAllowed: f,
                    quantityToAdd: a
                }]
            })) return { ...e,
            error: r.CartError.MAX_QUANTITY_REACHED
        };
        let p = c + a,
            m = [((e, t) => {
                let {
                    id: r,
                    variantId: a,
                    linkedProductLineId: i,
                    attributes: n
                } = e;
                return {
                    id: r,
                    merchandiseId: a,
                    quantity: t,
                    attributes: [...n.filter(e => "__linkedProductLineId" !== e.key), {
                        key: "__linkedProductLineId",
                        value: i || "false"
                    }]
                }
            })(t, p)],
            v = g(l, e.cartLines);
        return v && m.push(((e, t) => {
            let {
                id: r,
                variantId: a,
                attributes: i
            } = e;
            return {
                id: r,
                merchandiseId: a,
                quantity: t,
                attributes: [...i.filter(e => "__linkedProductLineId" !== e.key), {
                    key: "__linkedProductLineId",
                    value: e.linkedProductLineId.toString()
                }]
            }
        })(v, p)), 0 === p && m.push(...(({
            cart: e,
            handle: t,
            getTrustServicesFrom: r
        }) => ((e, t, r) => {
            var a;
            let i, n = r(t);
            if (!n.length || e.cartLines.filter(({
                    handle: e
                }) => e === t).length > 1) return [];
            let s = e.cartLines.filter(e => n.some(t => t.variant.id === e.variantId)),
                o = (a = e.cartLines.filter(e => e.handle !== t).flatMap(e => r(e.handle)), i = [], a.forEach(e => {
                    i.some(t => t.handle === e.handle) || i.push(e)
                }), i);
            return s.filter(e => !o.some(t => t.variant.id === e.variantId))
        })(e, t, r).filter(e => !e.linkedProductLineId).map(e => ({
            id: e.id,
            merchandiseId: e.variantId,
            quantity: 0,
            attributes: []
        })))({
            cart: e,
            handle: h,
            getTrustServicesFrom: s
        })), b({
            cartId: e.id,
            linesToUpdate: m,
            linesToAdd: [],
            country: n,
            language: i,
            isPreview: u,
            overrideCartCookieName: d
        })
    };
    e.s(["default", 0, C], 501743), e.s([], 282855);
    let w = async ({
        productsToAdd: e,
        isDrawerOpen: t,
        setIsDrawerLoading: r,
        setIsDrawerOpen: a,
        cart: i,
        entryChannel: n,
        language: s,
        country: o,
        locale: u,
        getTrustServicesFrom: d,
        isPreview: l,
        restrictedRegion: c = !1,
        openDrawer: h = !0,
        overrideCartCookieName: f,
        isLedgerLiveMobileApp: p = !1
    }) => {
        if ("TR" === o) {
            let e = ((e, t) => {
                let r = new URL("https://www.ledger.com");
                if (!t || "" === t.trim()) return r.toString();
                let [a, ...i] = t.split("?"), [n, s] = i.join("?").split("#"), o = a.trim().replace(/^\/+|\/+$/g, "").replace(/\/+/g, "/"), u = {
                    pt: "pt-br",
                    zh: "zh-hans"
                }[e] || e;
                return r.pathname = "en" !== u ? `/${u}/${o}` : `/${o}`, n && (r.search = n), s && (r.hash = s), decodeURIComponent(r.toString())
            })(u || "en", "reseller#reseller-official");
            return window.location.href = e, {
                isDrawerOpenAlreadyOpen: t,
                newCart: null
            }
        }
        if (!t && h && a(!0), c) return {
            isDrawerOpenAlreadyOpen: !1,
            newCart: null
        };
        r(!0);
        let m = await y({
                cart: i,
                productsToAdd: e,
                entryChannel: n,
                language: s,
                country: o,
                locale: u || "en",
                isPreview: l,
                overrideCartCookieName: f,
                isLedgerLiveMobileApp: p
            }),
            v = ((e, t, r) => {
                let a = t.find(({
                    product: e
                }) => r(e.handle).length > 0) || null;
                if (!a) return null;
                let i = e.cartLines.find(e => e.variantId === a.variantId),
                    n = e.cartLines.find(({
                        linkedProductLineId: e
                    }) => e === i ? .id),
                    s = (i ? .quantity || 0) - (n ? .quantity || 0);
                return i && n && s ? {
                    cartLineOfTrustService: n,
                    quantityIncrement: s
                } : null
            })(m, e, d);
        return v ? {
            isDrawerOpenAlreadyOpen: t,
            newCart: await C({
                cart: m,
                cartLine: v.cartLineOfTrustService,
                quantityIncrement: v.quantityIncrement,
                language: s,
                country: o,
                activeEntryChannel: n,
                getTrustServicesFrom: d,
                isPreview: l,
                overrideCartCookieName: f
            })
        } : {
            isDrawerOpenAlreadyOpen: t,
            newCart: m
        }
    };
    e.s(["default", 0, w], 589756);
    let k = (e, t, r, a) => {
        if (!a) return [];
        let i = e.filter(({
                allowedCountries: e
            }) => t && e ? .includes(t)),
            n = r.find(({
                linkedProductLineId: e
            }) => e && r.some(t => e === t.id && a.includes(t.variantId))),
            s = new Set;
        for (let e of r) {
            let t = (0, u.getTrustServiceByVariantId)(e.variantId),
                r = t ? .variant ? .handle;
            r && s.add(r)
        }
        let o = new Set;
        for (let e of r) {
            if (!e.linkedProductLineId) continue;
            let t = r.find(t => t.id === e.linkedProductLineId);
            if (!t || !a ? .includes(t.variantId)) continue;
            let i = (0, u.getTrustServiceByVariantId)(e.variantId),
                n = i ? .variant ? .handle;
            n && o.add(n)
        }
        let d = i.filter(e => {
            let t = e.linkedToProduct,
                r = e.variant ? .handle;
            if (!r) return !1;
            let a = s.has(r),
                i = o.has(r);
            return (t ? i : a) && (n || !t)
        });
        return i.filter(e => !d.includes(e))
    };
    e.s(["default", 0, k], 62727), e.s(["default", 0, ({
        cart: e,
        productsAdded: t,
        countryCode: r,
        setDrawerStep: a,
        getTrustServicesFrom: i
    }) => {
        let n = t.find(({
            product: {
                handle: e
            }
        }) => i(e).length > 0);
        if (!n) return;
        let s = n.product.handle,
            o = e.cartLines.find(e => e.handle === s);
        if (!o) return;
        let u = k(i(s), r, e.cartLines, [o.variantId]);
        a(u.length > 0 ? {
            step: "trustServices",
            options: {
                addedProduct: o,
                trustServices: u
            }
        } : {
            step: "cart"
        })
    }], 152642)
}, 196258, e => {
    "use strict";
    e.s(["TrackingTags", 0, ["Hardware Wallets", "Accessories", "Bundle"]])
}, 351688, e => {
    "use strict";
    var t = e.i(196258),
        r = e.i(468411);
    let a = ({
            productId: e,
            handle: a,
            variantId: i,
            cost: n,
            quantity: s,
            tags: o
        }) => ({
            category: o.find(e => t.TrackingTags.find(t => t === e)) || "",
            id: `shopify_US_${(0,r.toNumericId)(e)}_${(0,r.toNumericId)(i)}`,
            name: a,
            variant: (0, r.toNumericId)(i).toString(),
            price: Number(n.amountPerQuantity.amount),
            quantity: s
        }),
        i = ({
            productId: e,
            handle: a,
            variantId: i,
            cost: n,
            quantity: s,
            tags: o
        }, u) => ({
            item_category: o.find(e => t.TrackingTags.find(t => t === e)) || "",
            index: u,
            discount: "",
            item_brand: "ledger",
            item_id: `shopify_US_${(0,r.toNumericId)(e)}_${(0,r.toNumericId)(i)}`,
            item_name: a,
            item_variant: (0, r.toNumericId)(i).toString(),
            price: Number(n.totalAmount.amount),
            quantity: s
        });
    e.s(["formatAddToCartLines", 0, (e, t) => e.cartLines.filter(e => t.find(t => e.variantId === t.variantId)).map(e => ({ ...e,
        quantity: t.find(t => e.variantId === t.variantId) ? .quantityToAdd || 1
    })).map(a), "formatRemoveFromCartLines", 0, (e, t) => e ? .cartLines.filter(({
        id: e
    }) => e === t).map(a), "formatTrackingDetails", 0, ({
        category: e,
        price: t,
        productHandle: a,
        productId: i,
        variantId: n
    }) => ({
        currencyCode: t.currency,
        products: [{
            name: `${a}`,
            id: `shopify_US_${(0,r.toNumericId)(i)}_${(0,r.toNumericId)(n)}`,
            price: t.amount,
            category: e,
            variant: (0, r.toNumericId)(n).toString()
        }]
    }), "formatUpdateQuantityLines", 0, (e, t) => e.cartLines.filter(({
        id: e
    }) => e === t).map(a), "productClickMapping", 0, (e, t, a, i) => ({
        click: {
            actionField: {
                list: a
            },
            products: [{
                position: t,
                name: e.handle,
                id: `shopify_US_${(0,r.toNumericId)(e.id)}_${(0,r.toNumericId)(e.variants[0].id)}`,
                price: i.amount,
                category: a
            }]
        }
    }), "trackViewCart", 0, e => e ? .cartLines.map(i) || []])
}, 899906, 206612, e => {
    "use strict";
    var t = e.i(152642),
        r = e.i(351688);
    let a = e => e.cost ? .totalAmount ? .currencyCode ? ? "";
    e.s(["default", 0, a], 206612), e.s(["default", 0, ({
        isDrawerOpenAlreadyOpen: e,
        newCart: i,
        productsAdded: n,
        setDrawerStep: s,
        setIsDrawerLoading: o,
        trackEvent: u,
        getTrustServicesFrom: d,
        country: l,
        updateCartCache: c,
        placement: h,
        openDrawer: f = !0,
        skipTracking: p = !1,
        onDrawerOpen: m
    }) => {
        i && !p && (u("add_to_cart", {
            currencyCode: a(i),
            add: {
                products: (0, r.formatAddToCartLines)(i, n)
            },
            placement: h
        }), e || u("view_cart", {
            items: (0, r.trackViewCart)(i)
        })), o(!1), f && (m ? m(s) : (0, t.default)({
            cart: i,
            productsAdded: n,
            countryCode: l,
            setDrawerStep: s,
            getTrustServicesFrom: d
        })), c(i)
    }], 899906)
}, 147300, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function(e) {
        console.warn("[react-gtm]", e)
    }
}, 456003, (e, t, r) => {
    "use strict";
    var a, i = (a = e.r(147300)) && a.__esModule ? a : {
        default: a
    };
    t.exports = {
        tags: function(e) {
            var t = e.id,
                r = e.events,
                a = e.dataLayer,
                n = e.dataLayerName,
                s = e.preview,
                o = "&gtm_auth=" + e.auth,
                u = "&gtm_preview=" + s;
            t || (0, i.default)("GTM Id is required");
            var d = "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(r).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + o + u + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + n + "','" + t + "');";
            return {
                iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + o + u + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
                script: d,
                dataLayerVar: this.dataLayer(a, n)
            }
        },
        dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
        }
    }
}, 221663, (e, t, r) => {
    "use strict";
    var a, i = (a = e.r(456003)) && a.__esModule ? a : {
        default: a
    };
    t.exports = {
        dataScript: function(e) {
            var t = document.createElement("script");
            return t.innerHTML = e, t
        },
        gtm: function(e) {
            var t = i.default.tags(e);
            return {
                noScript: function() {
                    var e = document.createElement("noscript");
                    return e.innerHTML = t.iframe, e
                },
                script: function() {
                    var e = document.createElement("script");
                    return e.innerHTML = t.script, e
                },
                dataScript: this.dataScript(t.dataLayerVar)
            }
        },
        initialize: function(e) {
            var t = e.gtmId,
                r = e.events,
                a = e.dataLayer,
                i = e.dataLayerName,
                n = e.auth,
                s = e.preview,
                o = this.gtm({
                    id: t,
                    events: void 0 === r ? {} : r,
                    dataLayer: a || void 0,
                    dataLayerName: void 0 === i ? "dataLayer" : i,
                    auth: void 0 === n ? "" : n,
                    preview: void 0 === s ? "" : s
                });
            a && document.head.appendChild(o.dataScript), document.head.insertBefore(o.script(), document.head.childNodes[0]), document.body.insertBefore(o.noScript(), document.body.childNodes[0])
        },
        dataLayer: function(e) {
            var t = e.dataLayer,
                r = e.dataLayerName,
                a = void 0 === r ? "dataLayer" : r;
            if (window[a]) return window[a].push(t);
            var n = i.default.dataLayer(t, a),
                s = this.dataScript(n);
            document.head.insertBefore(s, document.head.childNodes[0])
        }
    }
}, 830746, (e, t, r) => {
    "use strict";
    var a;
    t.exports = ((a = e.r(221663)) && a.__esModule ? a : {
        default: a
    }).default
}, 478797, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(830746),
        a = e.i(203828),
        i = e.i(219501);
    e.i(831184);
    var n = e.i(229620),
        s = e.i(148728),
        o = e.i(318897);

    function u(e) {
        return {
            has_recover: e.some(h),
            has_replace: e.some(c),
            has_badges: e.some(l),
            has_accessories: e.some(d)
        }
    }

    function d(e) {
        return e.id.toLowerCase().startsWith("acc-") && !e.id.toLowerCase().includes("badge")
    }

    function l(e) {
        return e.name.toLowerCase().includes("badge")
    }

    function c(e) {
        return e.name.toLowerCase().includes("replace")
    }

    function h(e) {
        return e.name.toLowerCase().includes("recover")
    }
    e.s(["default", 0, function() {
        let e, d, l, c, h = (0, t.c)(13),
            {
                locale: f
            } = (0, a.useRouter)(),
            {
                countryCode: p
            } = (0, i.default)();
        h[0] !== p || h[1] !== f ? (e = (e, t) => {
            n.isBrowser && (0, s.default)(() => {
                let a = function(e) {
                        return "add" in e && "products" in e.add && void 0 !== e.add.products
                    },
                    i = function(e) {
                        return "remove" in e && "products" in e.remove && void 0 !== e.remove.products
                    },
                    n = u(a(t) ? t.add.products : i(t) ? t.remove.products : []);
                if (r.default.dataLayer({
                        dataLayer: {
                            event: e,
                            site_language: f,
                            user_country: p,
                            ecommerce: t,
                            ...n
                        }
                    }), ("add_to_cart" === e || "buy_now" === e) && a(t)) {
                    let r = t.add.products[0];
                    r && (0, o.track)(e, {
                        $opt_event_properties: {
                            price: r.price,
                            quantity: r.quantity,
                            item_category: r.category,
                            item_name: r.name,
                            item_variant: r.variant,
                            site_language: f,
                            user_country: p,
                            placement: t.placement,
                            ...u(t.add.products)
                        }
                    })
                }
                if ("removeFromCart" === e && i(t)) {
                    let e = t.remove.products[0];
                    e && (0, o.track)("remove_from_cart", {
                        $opt_event_properties: {
                            price: e.price,
                            quantity: e.quantity,
                            item_category: e.category,
                            item_name: e.name,
                            item_variant: e.variant,
                            site_language: f,
                            user_country: p
                        }
                    })
                }
            })
        }, h[0] = p, h[1] = f, h[2] = e) : e = h[2];
        let m = e;
        h[3] !== p || h[4] !== f ? (d = e => {
            n.isBrowser && (0, s.default)(() => {
                ["config_recover_info_click", "config_badge_toggle_on", "config_magnet_toggle_on", "config_recover_toggle_on", "config_replace_toggle_on"].includes(e) && (r.default.dataLayer({
                    dataLayer: {
                        event: e,
                        site_language: f,
                        user_country: p
                    }
                }), (0, o.track)(e, {
                    $opt_event_properties: {
                        site_language: f,
                        user_country: p
                    }
                }))
            })
        }, h[3] = p, h[4] = f, h[5] = d) : d = h[5];
        let v = d;
        h[6] !== p || h[7] !== f ? (l = e => {
            n.isBrowser && ((0, s.default)(() => {
                r.default.dataLayer({
                    dataLayer: {
                        event: "page_view",
                        site_language: f,
                        ...e
                    }
                })
            }), (0, o.track)("page_view", {
                $opt_event_properties: {
                    site_language: f,
                    user_country: p,
                    page_type: e.page_type,
                    item_category: e.item_category
                }
            }))
        }, h[6] = p, h[7] = f, h[8] = l) : l = h[8];
        let y = l;
        return h[9] !== v || h[10] !== m || h[11] !== y ? (c = {
            trackEvent: m,
            trackConfiguratorInteraction: v,
            trackPage: y
        }, h[9] = v, h[10] = m, h[11] = y, h[12] = c) : c = h[12], c
    }])
}, 477180, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(203828),
        a = e.i(654816),
        i = e.i(219501);
    e.s(["default", 0, () => {
        let e, n, s = (0, t.c)(5),
            {
                locale: o
            } = (0, r.useRouter)(),
            u = (0, i.default)().countryCode;
        s[0] !== o ? (e = a.localeMap.find(e => e.locale === o) ? .shopifyLocale || "EN", s[0] = o, s[1] = e) : e = s[1];
        let d = e;
        return s[2] !== u || s[3] !== d ? (n = {
            country: u,
            language: d
        }, s[2] = u, s[3] = d, s[4] = n) : n = s[4], n
    }, "useSafeCountryAndLanguage", 0, function() {
        let e, n, s = (0, t.c)(5),
            {
                locale: o
            } = (0, r.useRouter)();
        s[0] !== o ? (e = a.localeMap.find(e => e.locale === o) ? .shopifyLocale || "EN", s[0] = o, s[1] = e) : e = s[1];
        let u = e,
            d = (0, i.default)().countryCode;
        return s[2] !== d || s[3] !== u ? (n = {
            language: u,
            country: d
        }, s[2] = d, s[3] = u, s[4] = n) : n = s[4], n
    }])
}, 112698, 690825, e => {
    "use strict";
    var t = e.i(410219),
        r = e.i(641645),
        a = e.i(409043),
        i = e.i(163726);
    let n = t.gql `
  query ($id: ID!, $language: LanguageCode , $country: CountryCode) @inContext(language: $language, country: $country) {
    cart(id: $id) {
       ${r.default}
    }
  }
`,
        s = async ({
            language: e,
            country: t,
            isPreview: r,
            cartId: s
        }) => {
            if (!s) return null;
            let {
                cart: o
            } = await a.shopify.request(n, {
                id: s,
                language: e,
                country: t
            });
            return (0, i.default)(o, r)
        };
    e.s(["fetchCart", 0, s], 112698);
    let o = t.gql `
  mutation ($lines: [CartLineUpdateInput!]!, $cartId: ID!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language, country: $country) {
    cartLinesUpdate(
        cartId: $cartId
        lines: $lines
    ) {
      cart {
        ${r.default}
      }
    }
  }
`,
        u = ["__hasBitcoinVoucher", "__isBitcoinVoucher"],
        d = async (e, t, r, n) => {
            if (!e || e.cartLines.filter(e => e.attributes.some(e => u.find(t => e.key === t))).length < 1) return e;
            let s = e.cartLines.map(({
                    id: e,
                    quantity: t,
                    variantId: r,
                    attributes: a
                }) => ({
                    id: e,
                    quantity: t,
                    merchandiseId: r,
                    attributes: a.filter(({
                        key: e
                    }) => !u.includes(e))
                })),
                d = e.id,
                {
                    cartLinesUpdate: l
                } = await a.shopify.request(o, {
                    cartId: d,
                    lines: s,
                    language: t,
                    country: r
                }),
                {
                    cart: c
                } = l;
            return (0, i.default)(c, n)
        };
    e.s(["default", 0, d], 690825)
}, 215217, 25741, 770948, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(893930),
        a = e.i(285700),
        i = e.i(112698),
        n = e.i(690825),
        s = e.i(477180),
        o = e.i(480495);
    e.i(833758);
    var u = e.i(614041),
        d = e.i(410219),
        l = e.i(641645),
        c = e.i(409043),
        h = e.i(163726);
    let f = d.gql `
  mutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $language: LanguageCode, $country: CountryCode) @inContext(language: $language,country: $country) {
    cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
      cart {
        ${l.default}
      }
    }
  }
`,
        p = async ({
            newAttributes: e,
            cart: t,
            language: r,
            country: a,
            isPreview: i
        }) => {
            let n = e.map(e => e.key),
                s = [...t.attributes.filter(e => !n.includes(e.key)), ...e],
                {
                    cartAttributesUpdate: {
                        cart: o
                    }
                } = await c.shopify.request(f, {
                    attributes: s,
                    cartId: t.id,
                    language: r,
                    country: a
                });
            return (0, h.default)(o, i)
        };
    e.s(["default", 0, p], 25741);
    let m = async (e, t, r, a) => {
        if (!e) return e;
        let i = (0, o.getCookie)(u.COOKIE_REFERRAL_CODE),
            n = e.attributes.some(({
                key: e
            }) => "referral" === e);
        if (i && n || !i && !n) return e;
        let s = e.attributes.filter(({
            key: e
        }) => "referral" !== e);
        return await p({
            newAttributes: s,
            cart: e,
            language: t,
            country: r,
            isPreview: a
        })
    };
    var v = e.i(203828),
        y = e.i(65074);
    let g = ["cart"],
        _ = e => {
            let r, o, u, d, l = (0, t.c)(16),
                {
                    overrideCartCookieName: c
                } = void 0 === e ? {} : e,
                h = (0, a.useQueryClient)(),
                {
                    language: f,
                    country: p
                } = (0, s.default)(),
                {
                    isPreview: _
                } = (0, v.useRouter)(),
                b = (0, y.getCartId)({
                    cardIdCookieName: c
                }),
                C = c ? ? null,
                w = b ? ? null;
            l[0] !== p || l[1] !== C || l[2] !== w ? (r = [...g, p, C, w], l[0] = p, l[1] = C, l[2] = w, l[3] = r) : r = l[3];
            let k = r;
            l[4] !== h || l[5] !== k ? (o = e => {
                h.setQueryData(k, e)
            }, l[4] = h, l[5] = k, l[6] = o) : o = l[6];
            let x = o;
            l[7] !== b || l[8] !== p || l[9] !== _ || l[10] !== f ? (u = async () => {
                let e = await (0, i.fetchCart)({
                        cartId: b,
                        language: f,
                        country: p,
                        isPreview: _
                    }),
                    t = await m(e, f, p, _);
                return await (0, n.default)(t, f, p, _)
            }, l[7] = b, l[8] = p, l[9] = _, l[10] = f, l[11] = u) : u = l[11];
            let T = u;
            return l[12] !== T || l[13] !== k || l[14] !== x ? (d = {
                updateCartCache: x,
                fetchCartFn: T,
                queryKey: k
            }, l[12] = T, l[13] = k, l[14] = x, l[15] = d) : d = l[15], d
        };
    e.s(["CART_QUERY_KEY", 0, g, "default", 0, _], 770948), e.s(["default", 0, e => {
        let a, i, n, o = (0, t.c)(9),
            {
                country: u
            } = (0, s.default)(),
            d = e ? .overrideCartCookieName;
        o[0] !== d ? (a = {
            overrideCartCookieName: d
        }, o[0] = d, o[1] = a) : a = o[1];
        let {
            queryKey: l,
            fetchCartFn: c
        } = _(a), h = !!u;
        o[2] !== c || o[3] !== l || o[4] !== h ? (i = {
            queryKey: l,
            queryFn: c,
            enabled: h,
            staleTime: 1 / 0
        }, o[2] = c, o[3] = l, o[4] = h, o[5] = i) : i = o[5];
        let {
            data: f,
            isLoading: p
        } = (0, r.useQuery)(i), m = void 0 === f ? null : f;
        return o[6] !== m || o[7] !== p ? (n = {
            cart: m,
            cartFetching: p
        }, o[6] = m, o[7] = p, o[8] = n) : n = o[8], n
    }], 215217)
}, 79564, 351414, 229270, 191051, 864412, e => {
    "use strict";
    var t, r = e.i(261576),
        a = e.i(191788),
        i = e.i(203828),
        n = e.i(292905),
        s = e.i(644594),
        o = e.i(999750),
        u = e.i(253770),
        d = e.i(149818),
        l = e.i(589756),
        c = e.i(899906),
        h = e.i(478797),
        f = e.i(477180),
        p = e.i(770948),
        m = e.i(215217),
        v = e.i(595990),
        y = e.i(480495),
        g = e.i(866671);
    let _ = () => {
        let e = (0, i.useRouter)();
        return async (t, r, a) => {
            try {
                let i, n, s, o, u = t[0].product.handle;
                if (("ledger-flex" !== u || !a.isFlexRedirectEnabled) && ("ledger-nano-gen5" !== u || !a.isGen5RedirectEnabled) && 1) return (0, l.default)(r);
                i = `buy-${u}`, n = (0, y.getCookies)(), s = (0, g.default)(), Object.keys(n).filter(e => e.startsWith(i)).forEach(e => (0, y.deleteCookie)(e, {
                    path: "/",
                    domain: s
                }));
                let d = (o = `${Date.now().toString(36)}${Math.random().toString(36).slice(2,8)}`, `buy-${u}-${o}`),
                    c = await (0, l.default)({ ...r,
                        cart: null,
                        openDrawer: !1,
                        overrideCartCookieName: d
                    });
                if (c ? .newCart) {
                    let r = t[0] ? .variantId,
                        a = "string" == typeof r && r ? `/${u}/buy?variant=${encodeURIComponent(r)}` : `/${u}/buy`;
                    await e.push(a)
                }
            } catch (e) {
                console.error("Unable to add to cart and redirect", e)
            }
            return {
                isDrawerOpenAlreadyOpen: r.isDrawerOpen,
                newCart: null
            }
        }
    };
    e.s(["default", 0, _], 351414);
    var b = e.i(219501);
    let C = ["CU", "IR", "KP", "SY"],
        w = {
            UA: ["43", "14", "12"]
        },
        k = () => {
            let {
                countryCode: e,
                regionCode: t
            } = (0, b.default)();
            if (!e) return !1;
            let r = e.toUpperCase();
            if (C.includes(r)) return !0;
            let a = w[r];
            return !!(a && t && a.includes(t.toUpperCase()))
        };

    function x() {
        return "ReactNativeWebView" in window
    }
    e.s(["default", 0, k], 229270), e.s(["isLedgerLiveMobileApp", 0, x], 191051);
    var T = ((t = T || {}).GEN_5_PURCHASE_INTENT = "gen5_added_to_cart", t.FLEX_PURCHASE_INTENT = "flex_added_to_cart", t);
    let E = "ledger-nano-gen5",
        S = "ledger-flex",
        I = [{
            handle: E,
            attribute: "gen5_added_to_cart"
        }, {
            handle: S,
            attribute: "flex_added_to_cart"
        }];

    function O(e) {
        return function(t) {
            return t.some(({
                product: t
            }) => t.handle === e)
        }
    }
    let L = O(E),
        A = O(S);
    e.s(["addOptimizelyAttrsForProductHandle", 0, function(e, t) {
        if (!t || "string" != typeof e) return;
        let r = I.find(({
            handle: t
        }) => e === t);
        if (r) {
            var a = r.attribute;
            return t ? t.setUser({
                id: t.user.id,
                attributes: { ...t.user.attributes,
                    [a]: "true"
                }
            }) : void 0
        }
    }, "flexAddedToCart", 0, A, "gen5AddedToCart", 0, L], 864412), e.s(["default", 0, e => {
        let t, y, g, b, C, w, T, E = (0, r.c)(41);
        E[0] !== e ? (t = void 0 === e ? {} : e, E[0] = e, E[1] = t) : t = E[1];
        let {
            placement: S,
            openDrawer: I,
            overrideCartCookieName: O
        } = t, {
            setIsDrawerOpen: R,
            isDrawerOpen: N,
            setIsDrawerLoading: Z,
            setDrawerStep: $
        } = (0, a.useContext)(s.DrawerContext), P = k();
        E[2] !== O ? (y = {
            overrideCartCookieName: O
        }, E[2] = O, E[3] = y) : y = E[3];
        let {
            cart: j
        } = (0, m.default)(y), {
            trackEvent: M
        } = (0, h.default)(), {
            entryChannel: D
        } = (0, a.useContext)(o.EntryChannelContext), {
            cryptoVouchers: F
        } = (0, a.useContext)(u.cryptoVouchersContext), {
            getTrustServicesFrom: U
        } = (0, d.useTrustServicesApi)(), {
            locale: V,
            isPreview: z,
            pathname: q
        } = (0, i.useRouter)(), {
            language: B,
            country: K
        } = (0, f.default)();
        E[4] !== O ? (g = {
            overrideCartCookieName: O
        }, E[4] = O, E[5] = g) : g = E[5];
        let {
            updateCartCache: W
        } = (0, p.default)(g), {
            decideFeatureFlag: H
        } = (0, v.useDecideFeatureFlag)(), G = _();
        E[6] !== j || E[7] !== K || E[8] !== F || E[9] !== H || E[10] !== D || E[11] !== U || E[12] !== N || E[13] !== z || E[14] !== B || E[15] !== V || E[16] !== I || E[17] !== O || E[18] !== q || E[19] !== G || E[20] !== P || E[21] !== Z || E[22] !== R ? (b = async e => {
            let t = {
                    productsToAdd: e,
                    isDrawerOpen: N,
                    setIsDrawerOpen: R,
                    setIsDrawerLoading: Z,
                    cryptoVouchers: F,
                    cart: j,
                    country: K,
                    entryChannel: D,
                    language: B,
                    locale: V,
                    getTrustServicesFrom: U,
                    isPreview: z,
                    restrictedRegion: P,
                    openDrawer: I,
                    overrideCartCookieName: O,
                    isLedgerLiveMobileApp: x()
                },
                {
                    enabled: r
                } = H("flex_configurator_redirect", {
                    decideIf: A(e)
                }),
                {
                    enabled: a
                } = H("gen5_configurator_redirect", {
                    decideIf: L(e)
                });
            return N || !a && !r || 0 === e.length || q.includes("/buy") ? (0, l.default)(t) : G(e, t, {
                isFlexRedirectEnabled: r,
                isGen5RedirectEnabled: a
            })
        }, E[6] = j, E[7] = K, E[8] = F, E[9] = H, E[10] = D, E[11] = U, E[12] = N, E[13] = z, E[14] = B, E[15] = V, E[16] = I, E[17] = O, E[18] = q, E[19] = G, E[20] = P, E[21] = Z, E[22] = R, E[23] = b) : b = E[23];
        let Y = b;
        E[24] !== K || E[25] !== U || E[26] !== I || E[27] !== S || E[28] !== $ || E[29] !== Z || E[30] !== M || E[31] !== W ? (C = (e, t) => {
            let {
                isDrawerOpenAlreadyOpen: r,
                newCart: a
            } = e;
            a ? (0, c.default)({
                isDrawerOpenAlreadyOpen: r,
                newCart: a,
                productsAdded: t,
                setDrawerStep: $,
                country: K,
                getTrustServicesFrom: U,
                setIsDrawerLoading: Z,
                trackEvent: M,
                updateCartCache: W,
                placement: S,
                openDrawer: I
            }) : Z(!1)
        }, E[24] = K, E[25] = U, E[26] = I, E[27] = S, E[28] = $, E[29] = Z, E[30] = M, E[31] = W, E[32] = C) : C = E[32];
        let Q = C;
        E[33] !== Y || E[34] !== Q ? (w = {
            mutationFn: Y,
            onSuccess: Q
        }, E[33] = Y, E[34] = Q, E[35] = w) : w = E[35];
        let {
            mutate: J,
            mutateAsync: X,
            isPending: ee,
            isSuccess: et
        } = (0, n.useMutation)(w);
        return E[36] !== J || E[37] !== X || E[38] !== ee || E[39] !== et ? (T = {
            add: J,
            addAsync: X,
            addLoading: ee,
            addSuccess: et
        }, E[36] = J, E[37] = X, E[38] = ee, E[39] = et, E[40] = T) : T = E[40], T
    }], 79564)
}, 439048, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(780795),
        a = e.i(264728);
    e.s(["useTreeWalker", 0, function(e, {
        container: i,
        accept: n,
        walk: s
    }) {
        let o = (0, t.useRef)(n),
            u = (0, t.useRef)(s);
        (0, t.useEffect)(() => {
            o.current = n, u.current = s
        }, [n, s]), (0, a.useIsoMorphicEffect)(() => {
            if (!i || !e) return;
            let t = (0, r.getOwnerDocument)(i);
            if (!t) return;
            let a = o.current,
                n = u.current,
                s = Object.assign(e => a(e), {
                    acceptNode: a
                }),
                d = t.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, s, !1);
            for (; d.nextNode();) n(d.currentNode)
        }, [i, e, o, u])
    }])
}]);

//# sourceMappingURL=01owuuhy1nxy9.js.map