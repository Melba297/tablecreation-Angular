/*
 AngularJS v1.5.9
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (B) {
    'use strict';
    function N(a) {
        return function () {
            var b = arguments[0], d;
            d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.9/" + (a ? a + "/" : "") + b;
            for (b = 1; b < arguments.length; b++) {
                d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
                var c = encodeURIComponent, e;
                e = arguments[b];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                d += c(e)
            }
            return Error(d)
        }
    }
    function ra(a) {
        if (null == a || Xa(a))
            return !1;
        if (K(a) || H(a) || E && a instanceof E)
            return !0;
        var b = "length" in Object(a) && a.length;
        return Z(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item)
    }
    function q(a, b, d) {
        var c, e;
        if (a)
            if (F(a))
                for (c in a)
                    "prototype" === c || "length" === c || "name" === c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
            else if (K(a) || ra(a)) {
                var f = "object" !== typeof a;
                c = 0;
                for (e = a.length; c < e; c++)
                    (f || c in a) && b.call(d, a[c], c, a)
            } else if (a.forEach && a.forEach !== q)
                a.forEach(b, d, a);
            else if (zc(a))
                for (c in a)
                    b.call(d, a[c], c, a);
            else if ("function" === typeof a.hasOwnProperty)
                for (c in a)
                    a.hasOwnProperty(c) && b.call(d, a[c], c, a);
            else
                for (c in a)
                    sa.call(a, c) && b.call(d, a[c], c, a);
        return a
    }
    function Ac(a, b, d) {
        for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++)
            b.call(d, a[c[e]], c[e]);
        return c
    }
    function Bc(a) {
        return function (b, d) {
            a(d, b)
        }
    }
    function me() {
        return ++sb
    }
    function Sb(a, b, d) {
        for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g = b[e];
            if (I(g) || F(g))
                for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                    var m = h[k]
                        , n = g[m];
                    d && I(n) ? ba(n) ? a[m] = new Date(n.valueOf()) : Ya(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Tb(n) ? a[m] = n.clone() : (I(a[m]) || (a[m] = K(n) ? [] : {}),
                        Sb(a[m], [n], !0)) : a[m] = n
                }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a
    }
    function R(a) {
        return Sb(a, ta.call(arguments, 1), !1)
    }
    function ne(a) {
        return Sb(a, ta.call(arguments, 1), !0)
    }
    function aa(a) {
        return parseInt(a, 10)
    }
    function Ub(a, b) {
        return R(Object.create(a), b)
    }
    function C() { }
    function Za(a) {
        return a
    }
    function ma(a) {
        return function () {
            return a
        }
    }
    function Cc(a) {
        return F(a.toString) && a.toString !== na
    }
    function z(a) {
        return "undefined" === typeof a
    }
    function u(a) {
        return "undefined" !== typeof a
    }
    function I(a) {
        return null !== a && "object" === typeof a
    }
    function zc(a) {
        return null !== a && "object" === typeof a && !Dc(a)
    }
    function H(a) {
        return "string" === typeof a
    }
    function Z(a) {
        return "number" === typeof a
    }
    function ba(a) {
        return "[object Date]" === na.call(a)
    }
    function F(a) {
        return "function" === typeof a
    }
    function Ya(a) {
        return "[object RegExp]" === na.call(a)
    }
    function Xa(a) {
        return a && a.window === a
    }
    function $a(a) {
        return a && a.$evalAsync && a.$watch
    }
    function Ia(a) {
        return "boolean" === typeof a
    }
    function oe(a) {
        return a && Z(a.length) && pe.test(na.call(a))
    }
    function Tb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }
    function qe(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++)
            b[a[d]] = !0;
        return b
    }
    function ua(a) {
        return P(a.nodeName || a[0] && a[0].nodeName)
    }
    function ab(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d
    }
    function pa(a, b) {
        function d(a, b) {
            var d = b.$$hashKey, e;
            if (K(a)) {
                e = 0;
                for (var f = a.length; e < f; e++)
                    b.push(c(a[e]))
            } else if (zc(a))
                for (e in a)
                    b[e] = c(a[e]);
            else if (a && "function" === typeof a.hasOwnProperty)
                for (e in a)
                    a.hasOwnProperty(e) && (b[e] = c(a[e]));
            else
                for (e in a)
                    sa.call(a, e) && (b[e] = c(a[e]));
            d ? b.$$hashKey = d : delete b.$$hashKey;
            return b
        }
        function c(a) {
            if (!I(a))
                return a;
            var b = f.indexOf(a);
            if (-1 !== b)
                return g[b];
            if (Xa(a) || $a(a))
                throw va("cpws");
            var b = !1
                , c = e(a);
            void 0 === c && (c = K(a) ? [] : Object.create(Dc(a)),
                b = !0);
            f.push(a);
            g.push(c);
            return b ? d(a, c) : c
        }
        function e(a) {
            switch (na.call(a)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new a.constructor(c(a.buffer), a.byteOffset, a.length);
                case "[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        (new Uint8Array(b)).set(new Uint8Array(a));
                        return b
                    }
                    return a.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new a.constructor(a.valueOf());
                case "[object RegExp]":
                    return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]),
                        b.lastIndex = a.lastIndex,
                        b;
                case "[object Blob]":
                    return new a.constructor([a], {
                        type: a.type
                    })
            }
            if (F(a.cloneNode))
                return a.cloneNode(!0)
        }
        var f = []
            , g = [];
        if (b) {
            if (oe(b) || "[object ArrayBuffer]" === na.call(b))
                throw va("cpta");
            if (a === b)
                throw va("cpi");
            K(b) ? b.length = 0 : q(b, function (a, d) {
                "$$hashKey" !== d && delete b[d]
            });
            f.push(a);
            g.push(b);
            return d(a, b)
        }
        return c(a)
    }
    function oa(a, b) {
        if (a === b)
            return !0;
        if (null === a || null === b)
            return !1;
        if (a !== a && b !== b)
            return !0;
        var d = typeof a, c;
        if (d === typeof b && "object" === d)
            if (K(a)) {
                if (!K(b))
                    return !1;
                if ((d = a.length) === b.length) {
                    for (c = 0; c < d; c++)
                        if (!oa(a[c], b[c]))
                            return !1;
                    return !0
                }
            } else {
                if (ba(a))
                    return ba(b) ? oa(a.getTime(), b.getTime()) : !1;
                if (Ya(a))
                    return Ya(b) ? a.toString() === b.toString() : !1;
                if ($a(a) || $a(b) || Xa(a) || Xa(b) || K(b) || ba(b) || Ya(b))
                    return !1;
                d = S();
                for (c in a)
                    if ("$" !== c.charAt(0) && !F(a[c])) {
                        if (!oa(a[c], b[c]))
                            return !1;
                        d[c] = !0
                    }
                for (c in b)
                    if (!(c in d) && "$" !== c.charAt(0) && u(b[c]) && !F(b[c]))
                        return !1;
                return !0
            }
        return !1
    }
    function bb(a, b, d) {
        return a.concat(ta.call(b, d))
    }
    function cb(a, b) {
        var d = 2 < arguments.length ? ta.call(arguments, 2) : [];
        return !F(b) || b instanceof RegExp ? b : d.length ? function () {
            return arguments.length ? b.apply(a, bb(d, arguments, 0)) : b.apply(a, d)
        }
            : function () {
                return arguments.length ? b.apply(a, arguments) : b.call(a)
            }
    }
    function re(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Xa(b) ? d = "$WINDOW" : b && B.document === b ? d = "$DOCUMENT" : $a(b) && (d = "$SCOPE");
        return d
    }
    function db(a, b) {
        if (!z(a))
            return Z(b) || (b = b ? 2 : null),
                JSON.stringify(a, re, b)
    }
    function Ec(a) {
        return H(a) ? JSON.parse(a) : a
    }
    function Fc(a, b) {
        a = a.replace(se, "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
        return X(d) ? b : d
    }
    function Vb(a, b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        b = Fc(b, c);
        d *= b - c;
        a = new Date(a.getTime());
        a.setMinutes(a.getMinutes() + d);
        return a
    }
    function wa(a) {
        a = E(a).clone();
        try {
            a.empty()
        } catch (b) { }
        var d = E("<div>").append(a).html();
        try {
            return a[0].nodeType === Ma ? P(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + P(b)
            })
        } catch (c) {
            return P(d)
        }
    }
    function Gc(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) { }
    }
    function Hc(a) {
        var b = {};
        q((a || "").split("&"), function (a) {
            var c, e, f;
            a && (e = a = a.replace(/\+/g, "%20"),
                c = a.indexOf("="),
                -1 !== c && (e = a.substring(0, c),
                    f = a.substring(c + 1)),
                e = Gc(e),
                u(e) && (f = u(f) ? Gc(f) : !0,
                    sa.call(b, e) ? K(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
        });
        return b
    }
    function Wb(a) {
        var b = [];
        q(a, function (a, c) {
            K(a) ? q(a, function (a) {
                b.push(ca(c, !0) + (!0 === a ? "" : "=" + ca(a, !0)))
            }) : b.push(ca(c, !0) + (!0 === a ? "" : "=" + ca(a, !0)))
        });
        return b.length ? b.join("&") : ""
    }
    function tb(a) {
        return ca(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function ca(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }
    function te(a, b) {
        var d, c, e = Na.length;
        for (c = 0; c < e; ++c)
            if (d = Na[c] + b,
                H(d = a.getAttribute(d)))
                return d;
        return null
    }
    function ue(a, b) {
        var d, c, e = {};
        q(Na, function (b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a,
                c = a.getAttribute(b))
        });
        q(Na, function (b) {
            b += "app";
            var e;
            !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e,
                c = e.getAttribute(b))
        });
        d && (ve ? (e.strictDi = null !== te(d, "strict-di"),
            b(d, c ? [c] : [], e)) : B.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
    }
    function Ic(a, b, d) {
        I(d) || (d = {});
        d = R({
            strictDi: !1
        }, d);
        var c = function () {
            a = E(a);
            if (a.injector()) {
                var c = a[0] === B.document ? "document" : wa(a);
                throw va("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            b = b || [];
            b.unshift(["$provide", function (b) {
                b.value("$rootElement", a)
            }
            ]);
            d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }
            ]);
            b.unshift("ng");
            c = eb(b, d.strictDi);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }
            ]);
            return c
        }
            , e = /^NG_ENABLE_DEBUG_INFO!/
            , f = /^NG_DEFER_BOOTSTRAP!/;
        B && e.test(B.name) && (d.debugInfoEnabled = !0,
            B.name = B.name.replace(e, ""));
        if (B && !f.test(B.name))
            return c();
        B.name = B.name.replace(f, "");
        ga.resumeBootstrap = function (a) {
            q(a, function (a) {
                b.push(a)
            });
            return c()
        }
            ;
        F(ga.resumeDeferredBootstrap) && ga.resumeDeferredBootstrap()
    }
    function we() {
        B.name = "NG_ENABLE_DEBUG_INFO!" + B.name;
        B.location.reload()
    }
    function xe(a) {
        a = ga.element(a).injector();
        if (!a)
            throw va("test");
        return a.get("$$testability")
    }
    function Jc(a, b) {
        b = b || "_";
        return a.replace(ye, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }
    function ze() {
        var a;
        if (!Kc) {
            var b = ub();
            (xa = z(b) ? B.jQuery : b ? B[b] : void 0) && xa.fn.on ? (E = xa,
                R(xa.fn, {
                    scope: Oa.scope,
                    isolateScope: Oa.isolateScope,
                    controller: Oa.controller,
                    injector: Oa.injector,
                    inheritedData: Oa.inheritedData
                }),
                a = xa.cleanData,
                xa.cleanData = function (b) {
                    for (var c, e = 0, f; null != (f = b[e]); e++)
                        (c = xa._data(f, "events")) && c.$destroy && xa(f).triggerHandler("$destroy");
                    a(b)
                }
            ) : E = T;
            ga.element = E;
            Kc = !0
        }
    }
    function vb(a, b, d) {
        if (!a)
            throw va("areq", b || "?", d || "required");
        return a
    }
    function Pa(a, b, d) {
        d && K(a) && (a = a[a.length - 1]);
        vb(F(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
        return a
    }
    function Qa(a, b) {
        if ("hasOwnProperty" === a)
            throw va("badname", b);
    }
    function Lc(a, b, d) {
        if (!b)
            return a;
        b = b.split(".");
        for (var c, e = a, f = b.length, g = 0; g < f; g++)
            c = b[g],
                a && (a = (e = a)[c]);
        return !d && F(a) ? cb(e, a) : a
    }
    function wb(a) {
        for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++)
            if (c || a[e] !== b)
                c || (c = E(ta.call(a, 0, e))),
                    c.push(b);
        return c || a
    }
    function S() {
        return Object.create(null)
    }
    function Ae(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var d = N("$injector")
            , c = N("ng");
        a = b(a, "angular", Object);
        a.$$minErr = a.$$minErr || N;
        return b(a, "module", function () {
            var a = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f)
                    throw c("badname", "module");
                g && a.hasOwnProperty(f) && (a[f] = null);
                return b(a, f, function () {
                    function a(b, d, e, f) {
                        f || (f = c);
                        return function () {
                            f[e || "push"]([b, d, arguments]);
                            return J
                        }
                    }
                    function b(a, d) {
                        return function (b, e) {
                            e && F(e) && (e.$$moduleName = f);
                            c.push([a, d, arguments]);
                            return J
                        }
                    }
                    if (!g)
                        throw d("nomod", f);
                    var c = []
                        , e = []
                        , p = []
                        , x = a("$injector", "invoke", "push", e)
                        , J = {
                            _invokeQueue: c,
                            _configBlocks: e,
                            _runBlocks: p,
                            requires: g,
                            name: f,
                            provider: b("$provide", "provider"),
                            factory: b("$provide", "factory"),
                            service: b("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            decorator: b("$provide", "decorator"),
                            animation: b("$animateProvider", "register"),
                            filter: b("$filterProvider", "register"),
                            controller: b("$controllerProvider", "register"),
                            directive: b("$compileProvider", "directive"),
                            component: b("$compileProvider", "component"),
                            config: x,
                            run: function (a) {
                                p.push(a);
                                return this
                            }
                        };
                    h && x(h);
                    return J
                })
            }
        })
    }
    function ia(a, b) {
        if (K(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++)
                b[d] = a[d]
        } else if (I(a))
            for (d in b = b || {},
                a)
                if ("$" !== d.charAt(0) || "$" !== d.charAt(1))
                    b[d] = a[d];
        return b || a
    }
    function Be(a) {
        R(a, {
            bootstrap: Ic,
            copy: pa,
            extend: R,
            merge: ne,
            equals: oa,
            element: E,
            forEach: q,
            injector: eb,
            noop: C,
            bind: cb,
            toJson: db,
            fromJson: Ec,
            identity: Za,
            isUndefined: z,
            isDefined: u,
            isString: H,
            isFunction: F,
            isObject: I,
            isNumber: Z,
            isElement: Tb,
            isArray: K,
            version: Ce,
            isDate: ba,
            lowercase: P,
            uppercase: xb,
            callbacks: {
                $$counter: 0
            },
            getTestability: xe,
            $$minErr: N,
            $$csp: ya,
            reloadWithDebugInfo: we
        });
        Xb = Ae(B);
        Xb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({
                $$sanitizeUri: De
            });
            a.provider("$compile", Mc).directive({
                a: Ee,
                input: Nc,
                textarea: Nc,
                form: Fe,
                script: Ge,
                select: He,
                option: Ie,
                ngBind: Je,
                ngBindHtml: Ke,
                ngBindTemplate: Le,
                ngClass: Me,
                ngClassEven: Ne,
                ngClassOdd: Oe,
                ngCloak: Pe,
                ngController: Qe,
                ngForm: Re,
                ngHide: Se,
                ngIf: Te,
                ngInclude: Ue,
                ngInit: Ve,
                ngNonBindable: We,
                ngPluralize: Xe,
                ngRepeat: Ye,
                ngShow: Ze,
                ngStyle: $e,
                ngSwitch: af,
                ngSwitchWhen: bf,
                ngSwitchDefault: cf,
                ngOptions: df,
                ngTransclude: ef,
                ngModel: ff,
                ngList: gf,
                ngChange: hf,
                pattern: Oc,
                ngPattern: Oc,
                required: Pc,
                ngRequired: Pc,
                minlength: Qc,
                ngMinlength: Qc,
                maxlength: Rc,
                ngMaxlength: Rc,
                ngValue: jf,
                ngModelOptions: kf
            }).directive({
                ngInclude: lf
            }).directive(yb).directive(Sc);
            a.provider({
                $anchorScroll: mf,
                $animate: nf,
                $animateCss: of,
                $$animateJs: pf,
                $$animateQueue: qf,
                $$AnimateRunner: rf,
                $$animateAsyncRun: sf,
                $browser: tf,
                $cacheFactory: uf,
                $controller: vf,
                $document: wf,
                $exceptionHandler: xf,
                $filter: Tc,
                $$forceReflow: yf,
                $interpolate: zf,
                $interval: Af,
                $http: Bf,
                $httpParamSerializer: Cf,
                $httpParamSerializerJQLike: Df,
                $httpBackend: Ef,
                $xhrFactory: Ff,
                $jsonpCallbacks: Gf,
                $location: Hf,
                $log: If,
                $parse: Jf,
                $rootScope: Kf,
                $q: Lf,
                $$q: Mf,
                $sce: Nf,
                $sceDelegate: Of,
                $sniffer: Pf,
                $templateCache: Qf,
                $templateRequest: Rf,
                $$testability: Sf,
                $timeout: Tf,
                $window: Uf,
                $$rAF: Vf,
                $$jqLite: Wf,
                $$HashMap: Xf,
                $$cookieReader: Yf
            })
        }
        ])
    }
    function fb(a) {
        return a.replace(Zf, function (a, d, c, e) {
            return e ? c.toUpperCase() : c
        }).replace($f, "Moz$1")
    }
    function Uc(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a
    }
    function Vc(a, b) {
        var d, c, e = b.createDocumentFragment(), f = [];
        if (Yb.test(a)) {
            d = e.appendChild(b.createElement("div"));
            c = (ag.exec(a) || ["", ""])[1].toLowerCase();
            c = ja[c] || ja._default;
            d.innerHTML = c[1] + a.replace(bg, "<$1></$2>") + c[2];
            for (c = c[0]; c--;)
                d = d.lastChild;
            f = bb(f, d.childNodes);
            d = e.firstChild;
            d.textContent = ""
        } else
            f.push(b.createTextNode(a));
        e.textContent = "";
        e.innerHTML = "";
        q(f, function (a) {
            e.appendChild(a)
        });
        return e
    }
    function Wc(a, b) {
        var d = a.parentNode;
        d && d.replaceChild(b, a);
        b.appendChild(a)
    }
    function T(a) {
        if (a instanceof T)
            return a;
        var b;
        H(a) && (a = U(a),
            b = !0);
        if (!(this instanceof T)) {
            if (b && "<" !== a.charAt(0))
                throw Zb("nosel");
            return new T(a)
        }
        if (b) {
            b = B.document;
            var d;
            a = (d = cg.exec(a)) ? [b.createElement(d[1])] : (d = Vc(a, b)) ? d.childNodes : []
        }
        Xc(this, a)
    }
    function $b(a) {
        return a.cloneNode(!0)
    }
    function zb(a, b) {
        b || gb(a);
        if (a.querySelectorAll)
            for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++)
                gb(d[c])
    }
    function Yc(a, b, d, c) {
        if (u(c))
            throw Zb("offargs");
        var e = (c = Ab(a)) && c.events
            , f = c && c.handle;
        if (f)
            if (b) {
                var g = function (b) {
                    var c = e[b];
                    u(d) && ab(c || [], d);
                    u(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1),
                        delete e[b])
                };
                q(b.split(" "), function (a) {
                    g(a);
                    Bb[a] && g(Bb[a])
                })
            } else
                for (b in e)
                    "$destroy" !== b && a.removeEventListener(b, f, !1),
                        delete e[b]
    }
    function gb(a, b) {
        var d = a.ng339
            , c = d && hb[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"),
            Yc(a)),
            delete hb[d],
            a.ng339 = void 0))
    }
    function Ab(a, b) {
        var d = a.ng339
            , d = d && hb[d];
        b && !d && (a.ng339 = d = ++dg,
            d = hb[d] = {
                events: {},
                data: {},
                handle: void 0
            });
        return d
    }
    function ac(a, b, d) {
        if (Uc(a)) {
            var c = u(d)
                , e = !c && b && !I(b)
                , f = !b;
            a = (a = Ab(a, !e)) && a.data;
            if (c)
                a[b] = d;
            else {
                if (f)
                    return a;
                if (e)
                    return a && a[b];
                R(a, b)
            }
        }
    }
    function Cb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }
    function Db(a, b) {
        b && a.setAttribute && q(b.split(" "), function (b) {
            a.setAttribute("class", U((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(b) + " ", " ")))
        })
    }
    function Eb(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(b.split(" "), function (a) {
                a = U(a);
                -1 === d.indexOf(" " + a + " ") && (d += a + " ")
            });
            a.setAttribute("class", U(d))
        }
    }
    function Xc(a, b) {
        if (b)
            if (b.nodeType)
                a[a.length++] = b;
            else {
                var d = b.length;
                if ("number" === typeof d && b.window !== b) {
                    if (d)
                        for (var c = 0; c < d; c++)
                            a[a.length++] = b[c]
                } else
                    a[a.length++] = b
            }
    }
    function Zc(a, b) {
        return Fb(a, "$" + (b || "ngController") + "Controller")
    }
    function Fb(a, b, d) {
        9 === a.nodeType && (a = a.documentElement);
        for (b = K(b) ? b : [b]; a;) {
            for (var c = 0, e = b.length; c < e; c++)
                if (u(d = E.data(a, b[c])))
                    return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }
    function $c(a) {
        for (zb(a, !0); a.firstChild;)
            a.removeChild(a.firstChild)
    }
    function Gb(a, b) {
        b || zb(a);
        var d = a.parentNode;
        d && d.removeChild(a)
    }
    function eg(a, b) {
        b = b || B;
        if ("complete" === b.document.readyState)
            b.setTimeout(a);
        else
            E(b).on("load", a)
    }
    function ad(a, b) {
        var d = Hb[b.toLowerCase()];
        return d && bd[ua(a)] && d
    }
    function fg(a, b) {
        var d = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            }
                ;
            var f = b[d || c.type]
                , g = f ? f.length : 0;
            if (g) {
                if (z(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                }
                    ;
                var k = f.specialHandlerWrapper || gg;
                1 < g && (f = ia(f));
                for (var l = 0; l < g; l++)
                    c.isImmediatePropagationStopped() || k(a, c, f[l])
            }
        };
        d.elem = a;
        return d
    }
    function gg(a, b, d) {
        d.call(a, b)
    }
    function hg(a, b, d) {
        var c = b.relatedTarget;
        c && (c === a || ig.call(a, c)) || d.call(a, b)
    }
    function Wf() {
        this.$get = function () {
            return R(T, {
                hasClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Cb(a, b)
                },
                addClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Eb(a, b)
                },
                removeClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Db(a, b)
                }
            })
        }
    }
    function za(a, b) {
        var d = a && a.$$hashKey;
        if (d)
            return "function" === typeof d && (d = a.$$hashKey()),
                d;
        d = typeof a;
        return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || me)() : d + ":" + a
    }
    function Ra(a, b) {
        if (b) {
            var d = 0;
            this.nextUid = function () {
                return ++d
            }
        }
        q(a, this.put, this)
    }
    function cd(a) {
        a = (Function.prototype.toString.call(a) + " ").replace(jg, "");
        return a.match(kg) || a.match(lg)
    }
    function mg(a) {
        return (a = cd(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }
    function eb(a, b) {
        function d(a) {
            return function (b, c) {
                if (I(b))
                    q(b, Bc(a));
                else
                    return a(b, c)
            }
        }
        function c(a, b) {
            Qa(a, "service");
            if (F(b) || K(b))
                b = p.instantiate(b);
            if (!b.$get)
                throw Da("pget", a);
            return n[a + "Provider"] = b
        }
        function e(a, b) {
            return function () {
                var c = t.invoke(b, this);
                if (z(c))
                    throw Da("undef", a);
                return c
            }
        }
        function f(a, b, d) {
            return c(a, {
                $get: !1 !== d ? e(a, b) : b
            })
        }
        function g(a) {
            vb(z(a) || K(a), "modulesToLoad", "not an array");
            var b = [], c;
            q(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b]
                            , f = p.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        H(a) ? (c = Xb(a),
                            b = b.concat(g(c.requires)).concat(c._runBlocks),
                            d(c._invokeQueue),
                            d(c._configBlocks)) : F(a) ? b.push(p.invoke(a)) : K(a) ? b.push(p.invoke(a)) : Pa(a, "module")
                    } catch (e) {
                        throw K(a) && (a = a[a.length - 1]),
                        e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack),
                        Da("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }
        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k)
                        throw Da("cdep", b + " <- " + l.join(" <- "));
                    return a[b]
                }
                try {
                    return l.unshift(b),
                        a[b] = k,
                        a[b] = c(b, e),
                        a[b]
                } catch (f) {
                    throw a[b] === k && delete a[b],
                    f;
                } finally {
                    l.shift()
                }
            }
            function e(a, c, f) {
                var g = [];
                a = eb.$$annotate(a, b, f);
                for (var h = 0, k = a.length; h < k; h++) {
                    var l = a[h];
                    if ("string" !== typeof l)
                        throw Da("itkn", l);
                    g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f))
                }
                return g
            }
            return {
                invoke: function (a, b, c, d) {
                    "string" === typeof c && (d = c,
                        c = null);
                    c = e(a, c, d);
                    K(a) && (a = a[a.length - 1]);
                    d = 11 >= Fa ? !1 : "function" === typeof a && /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a) + " ");
                    return d ? (c.unshift(null),
                        new (Function.prototype.bind.apply(a, c))) : a.apply(b, c)
                },
                instantiate: function (a, b, c) {
                    var d = K(a) ? a[a.length - 1] : a;
                    a = e(a, b, c);
                    a.unshift(null);
                    return new (Function.prototype.bind.apply(d, a))
                },
                get: d,
                annotate: eb.$$annotate,
                has: function (b) {
                    return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
                }
            }
        }
        b = !0 === b;
        var k = {}
            , l = []
            , m = new Ra([], !0)
            , n = {
                $provide: {
                    provider: d(c),
                    factory: d(f),
                    service: d(function (a, b) {
                        return f(a, ["$injector", function (a) {
                            return a.instantiate(b)
                        }
                        ])
                    }),
                    value: d(function (a, b) {
                        return f(a, ma(b), !1)
                    }),
                    constant: d(function (a, b) {
                        Qa(a, "constant");
                        n[a] = b;
                        x[a] = b
                    }),
                    decorator: function (a, b) {
                        var c = p.get(a + "Provider")
                            , d = c.$get;
                        c.$get = function () {
                            var a = t.invoke(d, c);
                            return t.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            }
            , p = n.$injector = h(n, function (a, b) {
                ga.isString(b) && l.push(b);
                throw Da("unpr", l.join(" <- "));
            })
            , x = {}
            , J = h(x, function (a, b) {
                var c = p.get(a + "Provider", b);
                return t.invoke(c.$get, c, void 0, a)
            })
            , t = J;
        n.$injectorProvider = {
            $get: ma(J)
        };
        var s = g(a)
            , t = J.get("$injector");
        t.strictDi = b;
        q(s, function (a) {
            a && t.invoke(a)
        });
        return t
    }
    function mf() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }
            ;
        this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === ua(a))
                        return b = a,
                            !0
                });
                return b
            }
            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    F(c) ? c = c() : Tb(c) ? (c = c[0],
                        c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Z(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top,
                        b.scrollBy(0, a - c))
                } else
                    b.scrollTo(0, 0)
            }
            function g(a) {
                a = H(a) ? a : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }
            var h = b.document;
            a && c.$watch(function () {
                return d.hash()
            }, function (a, b) {
                a === b && "" === a || eg(function () {
                    c.$evalAsync(g)
                })
            });
            return g
        }
        ]
    }
    function jb(a, b) {
        if (!a && !b)
            return "";
        if (!a)
            return b;
        if (!b)
            return a;
        K(a) && (a = a.join(" "));
        K(b) && (b = b.join(" "));
        return a + " " + b
    }
    function ng(a) {
        H(a) && (a = a.split(" "));
        var b = S();
        q(a, function (a) {
            a.length && (b[a] = !0)
        });
        return b
    }
    function Ea(a) {
        return I(a) ? a : {}
    }
    function og(a, b, d, c) {
        function e(a) {
            try {
                a.apply(null, ta.call(arguments, 1))
            } finally {
                if (J--,
                    0 === J)
                    for (; t.length;)
                        try {
                            t.pop()()
                        } catch (b) {
                            d.error(b)
                        }
            }
        }
        function f() {
            w = null;
            g();
            h()
        }
        function g() {
            s = O();
            s = z(s) ? null : s;
            oa(s, A) && (s = A);
            A = s
        }
        function h() {
            if (y !== k.url() || D !== s)
                y = k.url(),
                    D = s,
                    q(L, function (a) {
                        a(k.url(), s)
                    })
        }
        var k = this
            , l = a.location
            , m = a.history
            , n = a.setTimeout
            , p = a.clearTimeout
            , x = {};
        k.isMock = !1;
        var J = 0
            , t = [];
        k.$$completeOutstandingRequest = e;
        k.$$incOutstandingRequestCount = function () {
            J++
        }
            ;
        k.notifyWhenNoOutstandingRequests = function (a) {
            0 === J ? a() : t.push(a)
        }
            ;
        var s, D, y = l.href, ib = b.find("base"), w = null, O = c.history ? function () {
            try {
                return m.state
            } catch (a) { }
        }
            : C;
        g();
        D = s;
        k.url = function (b, d, e) {
            z(e) && (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = D === e;
                if (y === b && (!c.history || f))
                    return k;
                var h = y && Ja(y) === Ja(b);
                y = b;
                D = e;
                !c.history || h && f ? (h || (w = b),
                    d ? l.replace(b) : h ? (d = l,
                        e = b.indexOf("#"),
                        e = -1 === e ? "" : b.substr(e),
                        d.hash = e) : l.href = b,
                    l.href !== b && (w = b)) : (m[d ? "replaceState" : "pushState"](e, "", b),
                        g(),
                        D = s);
                w && (w = b);
                return k
            }
            return w || l.href.replace(/%27/g, "'")
        }
            ;
        k.state = function () {
            return s
        }
            ;
        var L = []
            , Q = !1
            , A = null;
        k.onUrlChange = function (b) {
            if (!Q) {
                if (c.history)
                    E(a).on("popstate", f);
                E(a).on("hashchange", f);
                Q = !0
            }
            L.push(b);
            return b
        }
            ;
        k.$$applicationDestroyed = function () {
            E(a).off("hashchange popstate", f)
        }
            ;
        k.$$checkUrlChange = h;
        k.baseHref = function () {
            var a = ib.attr("href");
            return a ? a.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
        }
            ;
        k.defer = function (a, b) {
            var c;
            J++;
            c = n(function () {
                delete x[c];
                e(a)
            }, b || 0);
            x[c] = !0;
            return c
        }
            ;
        k.defer.cancel = function (a) {
            return x[a] ? (delete x[a],
                p(a),
                e(C),
                !0) : !1
        }
    }
    function tf() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
            return new og(a, c, b, d)
        }
        ]
    }
    function uf() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a !== n && (p ? p === a && (p = a.n) : p = a,
                        f(a.n, a.p),
                        f(a, n),
                        n = a,
                        n.n = null)
                }
                function f(a, b) {
                    a !== b && (a && (a.p = b),
                        b && (b.n = a))
                }
                if (a in b)
                    throw N("$cacheFactory")("iid", a);
                var g = 0
                    , h = R({}, c, {
                        id: a
                    })
                    , k = S()
                    , l = c && c.capacity || Number.MAX_VALUE
                    , m = S()
                    , n = null
                    , p = null;
                return b[a] = {
                    put: function (a, b) {
                        if (!z(b)) {
                            if (l < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = {
                                    key: a
                                });
                                e(c)
                            }
                            a in k || g++;
                            k[a] = b;
                            g > l && this.remove(p.key);
                            return b
                        }
                    },
                    get: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)
                                return;
                            e(b)
                        }
                        return k[a]
                    },
                    remove: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)
                                return;
                            b === n && (n = b.p);
                            b === p && (p = b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        a in k && (delete k[a],
                            g--)
                    },
                    removeAll: function () {
                        k = S();
                        g = 0;
                        m = S();
                        n = p = null
                    },
                    destroy: function () {
                        m = h = k = null;
                        delete b[a]
                    },
                    info: function () {
                        return R({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            a.info = function () {
                var a = {};
                q(b, function (b, e) {
                    a[e] = b.info()
                });
                return a
            }
                ;
            a.get = function (a) {
                return b[a]
            }
                ;
            return a
        }
    }
    function Qf() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }
        ]
    }
    function Mc(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/
                , e = S();
            q(a, function (a, f) {
                if (a in n)
                    e[f] = n[a];
                else {
                    var g = a.match(d);
                    if (!g)
                        throw da("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[f] = {
                        mode: g[1][0],
                        collection: "*" === g[2],
                        optional: "?" === g[3],
                        attrName: g[4] || f
                    };
                    g[4] && (n[a] = e[f])
                }
            });
            return e
        }
        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== P(b))
                throw da("baddir", a);
            if (a !== a.trim())
                throw da("baddir", a);
        }
        function e(a) {
            var b = a.require || a.controller && a.name;
            !K(b) && I(b) && q(b, function (a, c) {
                var d = a.match(l);
                a.substring(d[0].length) || (b[c] = d[0] + c)
            });
            return b
        }
        var f = {}
            , g = /^\s*directive:\s*([\w\-]+)\s+(.*)$/
            , h = /(([\w\-]+)(?::([^;]+))?;?)/
            , k = qe("ngSrc,ngSrcset,src,srcset")
            , l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/
            , m = /^(on[a-z]+|formaction)$/
            , n = S();
        this.directive = function D(b, d) {
            Qa(b, "directive");
            H(b) ? (c(b),
                vb(d, "directiveFactory"),
                f.hasOwnProperty(b) || (f[b] = [],
                    a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
                        var d = [];
                        q(f[b], function (f, g) {
                            try {
                                var h = a.invoke(f);
                                F(h) ? h = {
                                    compile: ma(h)
                                } : !h.compile && h.link && (h.compile = ma(h.link));
                                h.priority = h.priority || 0;
                                h.index = g;
                                h.name = h.name || b;
                                h.require = e(h);
                                h.restrict = h.restrict || "EA";
                                h.$$moduleName = f.$$moduleName;
                                d.push(h)
                            } catch (k) {
                                c(k)
                            }
                        });
                        return d
                    }
                    ])),
                f[b].push(d)) : q(b, Bc(D));
            return this
        }
            ;
        this.component = function (a, b) {
            function c(a) {
                function e(b) {
                    return F(b) || K(b) ? function (c, d) {
                        return a.invoke(b, this, {
                            $element: c,
                            $attrs: d
                        })
                    }
                        : b
                }
                var f = b.template || b.templateUrl ? b.template : ""
                    , g = {
                        controller: d,
                        controllerAs: dd(b.controller) || b.controllerAs || "$ctrl",
                        template: e(f),
                        templateUrl: e(b.templateUrl),
                        transclude: b.transclude,
                        scope: {},
                        bindToController: b.bindings || {},
                        restrict: "E",
                        require: b.require
                    };
                q(b, function (a, b) {
                    "$" === b.charAt(0) && (g[b] = a)
                });
                return g
            }
            var d = b.controller || function () { }
                ;
            q(b, function (a, b) {
                "$" === b.charAt(0) && (c[b] = a,
                    F(d) && (d[b] = a))
            });
            c.$inject = ["$injector"];
            return this.directive(a, c)
        }
            ;
        this.aHrefSanitizationWhitelist = function (a) {
            return u(a) ? (b.aHrefSanitizationWhitelist(a),
                this) : b.aHrefSanitizationWhitelist()
        }
            ;
        this.imgSrcSanitizationWhitelist = function (a) {
            return u(a) ? (b.imgSrcSanitizationWhitelist(a),
                this) : b.imgSrcSanitizationWhitelist()
        }
            ;
        var p = !0;
        this.debugInfoEnabled = function (a) {
            return u(a) ? (p = a,
                this) : p
        }
            ;
        var x = 10;
        this.onChangesTtl = function (a) {
            return arguments.length ? (x = a,
                this) : x
        }
            ;
        var J = !0;
        this.commentDirectivesEnabled = function (a) {
            return arguments.length ? (J = a,
                this) : J
        }
            ;
        var t = !0;
        this.cssClassDirectivesEnabled = function (a) {
            return arguments.length ? (t = a,
                this) : t
        }
            ;
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, L, Q, A, G, v) {
            function M() {
                try {
                    if (!--qa)
                        throw fa = void 0,
                        da("infchng", x);
                    Q.$apply(function () {
                        for (var a = [], b = 0, c = fa.length; b < c; ++b)
                            try {
                                fa[b]()
                            } catch (d) {
                                a.push(d)
                            }
                        fa = void 0;
                        if (a.length)
                            throw a;
                    })
                } finally {
                    qa++
                }
            }
            function bc(a, b) {
                if (b) {
                    var c = Object.keys(b), d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++)
                        f = c[d],
                            this[f] = b[f]
                } else
                    this.$attr = {};
                this.$$element = a
            }
            function r(a, b, c) {
                pa.innerHTML = "<span " + b + ">";
                b = pa.firstChild.attributes;
                var d = b[0];
                b.removeNamedItem(d.name);
                d.value = c;
                a.attributes.setNamedItem(d)
            }
            function Ha(a, b) {
                try {
                    a.addClass(b)
                } catch (c) { }
            }
            function $(a, b, c, d, e) {
                a instanceof E || (a = E(a));
                for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
                    var k = a[g];
                    k.nodeType === Ma && k.nodeValue.match(f) && Wc(k, a[g] = B.document.createElement("span"))
                }
                var l = Aa(a, b, a, c, d, e);
                $.$$addScopeClass(a);
                var m = null;
                return function (b, c, d) {
                    vb(b, "scope");
                    e && e.needsNewScope && (b = b.$parent.$new());
                    d = d || {};
                    var f = d.parentBoundTranscludeFn
                        , g = d.transcludeControllers;
                    d = d.futureParentElement;
                    f && f.$$boundTransclude && (f = f.$$boundTransclude);
                    m || (m = (d = d && d[0]) ? "foreignobject" !== ua(d) && na.call(d).match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== m ? E(ba(m, E("<div>").append(a).html())) : c ? Oa.clone.call(a) : a;
                    if (g)
                        for (var h in g)
                            d.data("$" + h + "Controller", g[h].instance);
                    $.$$addScopeInfo(d, b);
                    c && c(d, b);
                    l && l(b, d, d, f);
                    return d
                }
            }
            function Aa(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, m, p, y, x;
                    if (n)
                        for (x = Array(c.length),
                            m = 0; m < h.length; m += 3)
                            f = h[m],
                                x[f] = c[f];
                    else
                        x = c;
                    m = 0;
                    for (p = h.length; m < p;)
                        k = x[h[m++]],
                            c = h[m++],
                            f = h[m++],
                            c ? (c.scope ? (l = a.$new(),
                                $.$$addScopeInfo(E(k), l)) : l = a,
                                y = c.transcludeOnThisElement ? ha(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ha(a, b) : null,
                                c(f, l, k, d, y)) : f && f(a, k.childNodes, void 0, e)
                }
                for (var h = [], k, l, m, p, n, y = 0; y < a.length; y++) {
                    k = new bc;
                    l = dc(a[y], [], k, 0 === y ? d : void 0, e);
                    (f = l.length ? Sa(l, a[y], k, b, c, null, [], [], f) : null) && f.scope && $.$$addScopeClass(k.$$element);
                    k = f && f.terminal || !(m = a[y].childNodes) || !m.length ? null : Aa(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || k)
                        h.push(y, f, k),
                            p = !0,
                            n = n || f;
                    f = null
                }
                return p ? g : null
            }
            function ha(a, b, c) {
                function d(e, f, g, h, k) {
                    e || (e = a.$new(!1, k),
                        e.$$transcluded = !0);
                    return b(e, f, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: g,
                        futureParentElement: h
                    })
                }
                var e = d.$$slots = S(), f;
                for (f in b.$$slots)
                    e[f] = b.$$slots[f] ? ha(a, b.$$slots[f], c) : null;
                return d
            }
            function dc(a, b, c, d, e) {
                var f = c.$attr, g;
                switch (a.nodeType) {
                    case 1:
                        g = ua(a);
                        V(b, Ba(g), "E", d, e);
                        for (var k, l, m, p, n = a.attributes, y = 0, x = n && n.length; y < x; y++) {
                            var A = !1
                                , L = !1;
                            k = n[y];
                            l = k.name;
                            m = U(k.value);
                            k = Ba(l);
                            (p = Da.test(k)) && (l = l.replace(ed, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            }));
                            (k = k.match(Ea)) && Y(k[1]) && (A = l,
                                L = l.substr(0, l.length - 5) + "end",
                                l = l.substr(0, l.length - 6));
                            k = Ba(l.toLowerCase());
                            f[k] = l;
                            if (p || !c.hasOwnProperty(k))
                                c[k] = m,
                                    ad(a, k) && (c[k] = !0);
                            ma(a, b, m, k, p);
                            V(b, k, "A", d, e, A, L)
                        }
                        "input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off");
                        if (!Ca)
                            break;
                        f = a.className;
                        I(f) && (f = f.animVal);
                        if (H(f) && "" !== f)
                            for (; a = h.exec(f);)
                                k = Ba(a[2]),
                                    V(b, k, "C", d, e) && (c[k] = U(a[3])),
                                    f = f.substr(a.index + a[0].length);
                        break;
                    case Ma:
                        if (11 === Fa)
                            for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Ma;)
                                a.nodeValue += a.nextSibling.nodeValue,
                                    a.parentNode.removeChild(a.nextSibling);
                        ga(b, a.nodeValue);
                        break;
                    case 8:
                        if (!xa)
                            break;
                        N(a, b, c, d, e)
                }
                b.sort(ea);
                return b
            }
            function N(a, b, c, d, e) {
                try {
                    var f = g.exec(a.nodeValue);
                    if (f) {
                        var h = Ba(f[1]);
                        V(b, h, "M", d, e) && (c[h] = U(f[2]))
                    }
                } catch (k) { }
            }
            function fd(a, b, c) {
                var d = []
                    , e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)
                            throw da("uterdir", b, c);
                        1 === a.nodeType && (a.hasAttribute(b) && e++,
                            a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else
                    d.push(a);
                return E(d)
            }
            function gd(a, b, c) {
                return function (d, e, f, g, h) {
                    e = fd(e[0], b, c);
                    return a(d, e, f, g, h)
                }
            }
            function fc(a, b, c, d, e, f) {
                var g;
                return a ? $(b, c, d, e, f) : function () {
                    g || (g = $(b, c, d, e, f),
                        b = c = f = null);
                    return g.apply(this, arguments)
                }
            }
            function Sa(a, b, d, e, f, g, h, k, l) {
                function m(a, b, c, d) {
                    if (a) {
                        c && (a = gd(a, c, d));
                        a.require = v.require;
                        a.directiveName = w;
                        if (A === v || v.$$isolateScope)
                            a = ja(a, {
                                isolateScope: !0
                            });
                        h.push(a)
                    }
                    if (b) {
                        c && (b = gd(b, c, d));
                        b.require = v.require;
                        b.directiveName = w;
                        if (A === v || v.$$isolateScope)
                            b = ja(b, {
                                isolateScope: !0
                            });
                        k.push(b)
                    }
                }
                function p(a, e, f, g, l) {
                    function m(a, b, c, d) {
                        var e;
                        $a(a) || (d = c,
                            c = b,
                            b = a,
                            a = void 0);
                        J && (e = D);
                        c || (c = J ? M.parent() : M);
                        if (d) {
                            var f = l.$$slots[d];
                            if (f)
                                return f(a, b, e, c, r);
                            if (z(f))
                                throw da("noslot", d, wa(M));
                        } else
                            return l(a, b, e, c, r)
                    }
                    var n, v, t, G, Q, D, w, M;
                    b === f ? (g = d,
                        M = d.$$element) : (M = E(f),
                            g = new bc(M, d));
                    Q = e;
                    A ? G = e.$new(!0) : y && (Q = e.$parent);
                    l && (w = m,
                        w.$$boundTransclude = l,
                        w.isSlotFilled = function (a) {
                            return !!l.$$slots[a]
                        }
                    );
                    x && (D = T(M, g, w, x, G, e, A));
                    A && ($.$$addScopeInfo(M, G, !0, !(L && (L === A || L === A.$$originalDirective))),
                        $.$$addScopeClass(M, !0),
                        G.$$isolateBindings = A.$$isolateBindings,
                        v = ka(e, g, G, G.$$isolateBindings, A),
                        v.removeWatches && G.$on("$destroy", v.removeWatches));
                    for (n in D) {
                        v = x[n];
                        t = D[n];
                        var cc = v.$$bindings.bindToController;
                        t.bindingInfo = t.identifier && cc ? ka(Q, g, t.instance, cc, v) : {};
                        var O = t();
                        O !== t.instance && (t.instance = O,
                            M.data("$" + v.name + "Controller", O),
                            t.bindingInfo.removeWatches && t.bindingInfo.removeWatches(),
                            t.bindingInfo = ka(Q, g, t.instance, cc, v))
                    }
                    q(x, function (a, b) {
                        var c = a.require;
                        a.bindToController && !K(c) && I(c) && R(D[b].instance, kb(b, c, M, D))
                    });
                    q(D, function (a) {
                        var b = a.instance;
                        if (F(b.$onChanges))
                            try {
                                b.$onChanges(a.bindingInfo.initialChanges)
                            } catch (d) {
                                c(d)
                            }
                        if (F(b.$onInit))
                            try {
                                b.$onInit()
                            } catch (e) {
                                c(e)
                            }
                        F(b.$doCheck) && (Q.$watch(function () {
                            b.$doCheck()
                        }),
                            b.$doCheck());
                        F(b.$onDestroy) && Q.$on("$destroy", function () {
                            b.$onDestroy()
                        })
                    });
                    n = 0;
                    for (v = h.length; n < v; n++)
                        t = h[n],
                            la(t, t.isolateScope ? G : e, M, g, t.require && kb(t.directiveName, t.require, M, D), w);
                    var r = e;
                    A && (A.template || null === A.templateUrl) && (r = G);
                    a && a(r, f.childNodes, void 0, l);
                    for (n = k.length - 1; 0 <= n; n--)
                        t = k[n],
                            la(t, t.isolateScope ? G : e, M, g, t.require && kb(t.directiveName, t.require, M, D), w);
                    q(D, function (a) {
                        a = a.instance;
                        F(a.$postLink) && a.$postLink()
                    })
                }
                l = l || {};
                for (var n = -Number.MAX_VALUE, y = l.newScopeDirective, x = l.controllerDirectives, A = l.newIsolateScopeDirective, L = l.templateDirective, t = l.nonTlbTranscludeDirective, Q = !1, D = !1, J = l.hasElementTranscludeDirective, G = d.$$element = E(b), v, w, M, O = e, r, Ga = !1, Ha = !1, u, C = 0, Aa = a.length; C < Aa; C++) {
                    v = a[C];
                    var B = v.$$start
                        , H = v.$$end;
                    B && (G = fd(b, B, H));
                    M = void 0;
                    if (n > v.priority)
                        break;
                    if (u = v.scope)
                        v.templateUrl || (I(u) ? (X("new/isolated scope", A || y, v, G),
                            A = v) : X("new/isolated scope", A, v, G)),
                            y = y || v;
                    w = v.name;
                    if (!Ga && (v.replace && (v.templateUrl || v.template) || v.transclude && !v.$$tlb)) {
                        for (u = C + 1; Ga = a[u++];)
                            if (Ga.transclude && !Ga.$$tlb || Ga.replace && (Ga.templateUrl || Ga.template)) {
                                Ha = !0;
                                break
                            }
                        Ga = !0
                    }
                    !v.templateUrl && v.controller && (u = v.controller,
                        x = x || S(),
                        X("'" + w + "' controller", x[w], v, G),
                        x[w] = v);
                    if (u = v.transclude)
                        if (Q = !0,
                            v.$$tlb || (X("transclusion", t, v, G),
                                t = v),
                            "element" === u)
                            J = !0,
                                n = v.priority,
                                M = G,
                                G = d.$$element = E($.$$createComment(w, d[w])),
                                b = G[0],
                                ca(f, ta.call(M, 0), b),
                                M[0].$$parentNode = M[0].parentNode,
                                O = fc(Ha, M, e, n, g && g.name, {
                                    nonTlbTranscludeDirective: t
                                });
                        else {
                            var ha = S();
                            M = E($b(b)).contents();
                            if (I(u)) {
                                M = [];
                                var N = S()
                                    , P = S();
                                q(u, function (a, b) {
                                    var c = "?" === a.charAt(0);
                                    a = c ? a.substring(1) : a;
                                    N[a] = b;
                                    ha[b] = null;
                                    P[b] = c
                                });
                                q(G.contents(), function (a) {
                                    var b = N[Ba(ua(a))];
                                    b ? (P[b] = !0,
                                        ha[b] = ha[b] || [],
                                        ha[b].push(a)) : M.push(a)
                                });
                                q(P, function (a, b) {
                                    if (!a)
                                        throw da("reqslot", b);
                                });
                                for (var Sa in ha)
                                    ha[Sa] && (ha[Sa] = fc(Ha, ha[Sa], e))
                            }
                            G.empty();
                            O = fc(Ha, M, e, void 0, void 0, {
                                needsNewScope: v.$$isolateScope || v.$$newScope
                            });
                            O.$$slots = ha
                        }
                    if (v.template)
                        if (D = !0,
                            X("template", L, v, G),
                            L = v,
                            u = F(v.template) ? v.template(G, d) : v.template,
                            u = za(u),
                            v.replace) {
                            g = v;
                            M = Yb.test(u) ? hd(ba(v.templateNamespace, U(u))) : [];
                            b = M[0];
                            if (1 !== M.length || 1 !== b.nodeType)
                                throw da("tplrt", w, "");
                            ca(f, G, b);
                            Aa = {
                                $attr: {}
                            };
                            u = dc(b, [], Aa);
                            var V = a.splice(C + 1, a.length - (C + 1));
                            (A || y) && W(u, A, y);
                            a = a.concat(u).concat(V);
                            Z(d, Aa);
                            Aa = a.length
                        } else
                            G.html(u);
                    if (v.templateUrl)
                        D = !0,
                            X("template", L, v, G),
                            L = v,
                            v.replace && (g = v),
                            p = aa(a.splice(C, a.length - C), G, d, f, Q && O, h, k, {
                                controllerDirectives: x,
                                newScopeDirective: y !== v && y,
                                newIsolateScopeDirective: A,
                                templateDirective: L,
                                nonTlbTranscludeDirective: t
                            }),
                            Aa = a.length;
                    else if (v.compile)
                        try {
                            r = v.compile(G, d, O);
                            var ec = v.$$originalDirective || v;
                            F(r) ? m(null, cb(ec, r), B, H) : r && m(cb(ec, r.pre), cb(ec, r.post), B, H)
                        } catch (Y) {
                            c(Y, wa(G))
                        }
                    v.terminal && (p.terminal = !0,
                        n = Math.max(n, v.priority))
                }
                p.scope = y && !0 === y.scope;
                p.transcludeOnThisElement = Q;
                p.templateOnThisElement = D;
                p.transclude = O;
                l.hasElementTranscludeDirective = J;
                return p
            }
            function kb(a, b, c, d) {
                var e;
                if (H(b)) {
                    var f = b.match(l);
                    b = b.substring(f[0].length);
                    var g = f[1] || f[3]
                        , f = "?" === f[2];
                    "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                    if (!e) {
                        var h = "$" + b + "Controller";
                        e = g ? c.inheritedData(h) : c.data(h)
                    }
                    if (!e && !f)
                        throw da("ctreq", b, a);
                } else if (K(b))
                    for (e = [],
                        g = 0,
                        f = b.length; g < f; g++)
                        e[g] = kb(a, b[g], c, d);
                else
                    I(b) && (e = {},
                        q(b, function (b, f) {
                            e[f] = kb(a, b, c, d)
                        }));
                return e || null
            }
            function T(a, b, c, d, e, f, g) {
                var h = S(), k;
                for (k in d) {
                    var l = d[k]
                        , m = {
                            $scope: l === g || l.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        }
                        , p = l.controller;
                    "@" === p && (p = b[l.name]);
                    m = L(p, m, !0, l.controllerAs);
                    h[l.name] = m;
                    a.data("$" + l.name + "Controller", m.instance)
                }
                return h
            }
            function W(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++)
                    a[d] = Ub(a[d], {
                        $$isolateScope: b,
                        $$newScope: c
                    })
            }
            function V(b, e, g, h, k, l, m) {
                if (e === k)
                    return null;
                k = null;
                if (f.hasOwnProperty(e)) {
                    var p;
                    e = a.get(e + "Directive");
                    for (var n = 0, y = e.length; n < y; n++)
                        try {
                            if (p = e[n],
                                (z(h) || h > p.priority) && -1 !== p.restrict.indexOf(g)) {
                                l && (p = Ub(p, {
                                    $$start: l,
                                    $$end: m
                                }));
                                if (!p.$$bindings) {
                                    var x = p
                                        , v = p
                                        , A = p.name
                                        , t = {
                                            isolateScope: null,
                                            bindToController: null
                                        };
                                    I(v.scope) && (!0 === v.bindToController ? (t.bindToController = d(v.scope, A, !0),
                                        t.isolateScope = {}) : t.isolateScope = d(v.scope, A, !1));
                                    I(v.bindToController) && (t.bindToController = d(v.bindToController, A, !0));
                                    if (I(t.bindToController)) {
                                        var L = v.controller
                                            , G = v.controllerAs;
                                        if (!L)
                                            throw da("noctrl", A);
                                        if (!dd(L, G))
                                            throw da("noident", A);
                                    }
                                    var Q = x.$$bindings = t;
                                    I(Q.isolateScope) && (p.$$isolateBindings = Q.isolateScope)
                                }
                                b.push(p);
                                k = p
                            }
                        } catch (J) {
                            c(J)
                        }
                }
                return k
            }
            function Y(b) {
                if (f.hasOwnProperty(b))
                    for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++)
                        if (b = c[d],
                            b.multiElement)
                            return !0;
                return !1
            }
            function Z(a, b) {
                var c = b.$attr
                    , d = a.$attr;
                q(a, function (d, e) {
                    "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]),
                        a.$set(e, d, !0, c[e]))
                });
                q(b, function (b, e) {
                    a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b,
                        "class" !== e && "style" !== e && (d[e] = c[e]))
                })
            }
            function aa(a, b, c, d, f, g, h, k) {
                var l = [], m, p, n = b[0], y = a.shift(), x = Ub(y, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: y
                }), v = F(y.templateUrl) ? y.templateUrl(b, c) : y.templateUrl, A = y.templateNamespace;
                b.empty();
                e(v).then(function (e) {
                    var t, L;
                    e = za(e);
                    if (y.replace) {
                        e = Yb.test(e) ? hd(ba(A, U(e))) : [];
                        t = e[0];
                        if (1 !== e.length || 1 !== t.nodeType)
                            throw da("tplrt", y.name, v);
                        e = {
                            $attr: {}
                        };
                        ca(d, b, t);
                        var G = dc(t, [], e);
                        I(y.scope) && W(G, !0);
                        a = G.concat(a);
                        Z(c, e)
                    } else
                        t = n,
                            b.html(e);
                    a.unshift(x);
                    m = Sa(a, t, c, f, b, y, g, h, k);
                    q(d, function (a, c) {
                        a === t && (d[c] = b[0])
                    });
                    for (p = Aa(b[0].childNodes, f); l.length;) {
                        e = l.shift();
                        L = l.shift();
                        var Q = l.shift()
                            , D = l.shift()
                            , G = b[0];
                        if (!e.$$destroyed) {
                            if (L !== n) {
                                var J = L.className;
                                k.hasElementTranscludeDirective && y.replace || (G = $b(t));
                                ca(Q, E(L), G);
                                Ha(E(G), J)
                            }
                            L = m.transcludeOnThisElement ? ha(e, m.transclude, D) : D;
                            m(p, e, G, d, L)
                        }
                    }
                    l = null
                });
                return function (a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = ha(b, m.transclude, e)),
                        m(p, b, c, d, a)))
                }
            }
            function ea(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }
            function X(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }
                if (b)
                    throw da("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, wa(d));
            }
            function ga(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function (a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && $.$$addBindingClass(a);
                        return function (a, c) {
                            var e = c.parent();
                            b || $.$$addBindingClass(e);
                            $.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function (a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }
            function ba(a, b) {
                a = P(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = B.document.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }
            function ia(a, b) {
                if ("srcdoc" === b)
                    return A.HTML;
                var c = ua(a);
                if ("src" === b || "ngSrc" === b) {
                    if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c))
                        return A.RESOURCE_URL
                } else if ("xlinkHref" === b || "form" === c && "action" === b)
                    return A.RESOURCE_URL
            }
            function ma(a, c, d, e, f) {
                var g = ia(a, e);
                f = k[e] || f;
                var h = b(d, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === ua(a))
                        throw da("selmulti", wa(a));
                    c.push({
                        priority: 100,
                        compile: function () {
                            return {
                                pre: function (a, c, k) {
                                    c = k.$$observers || (k.$$observers = S());
                                    if (m.test(e))
                                        throw da("nodomevents");
                                    var l = k[e];
                                    l !== d && (h = l && b(l, !0, g, f),
                                        d = l);
                                    h && (k[e] = h(a),
                                        (c[e] || (c[e] = [])).$$inter = !0,
                                        (k.$$observers && k.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                                            "class" === e && a !== b ? k.$updateClass(a, b) : k.$set(e, a)
                                        }))
                                }
                            }
                        }
                    })
                }
            }
            function ca(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, h;
                if (a)
                    for (g = 0,
                        h = a.length; g < h; g++)
                        if (a[g] === d) {
                            a[g++] = c;
                            h = g + e - 1;
                            for (var k = a.length; g < k; g++,
                                h++)
                                h < k ? a[g] = a[h] : delete a[g];
                            a.length -= e - 1;
                            a.context === d && (a.context = c);
                            break
                        }
                f && f.replaceChild(c, d);
                a = B.document.createDocumentFragment();
                for (g = 0; g < e; g++)
                    a.appendChild(b[g]);
                E.hasData(d) && (E.data(c, E.data(d)),
                    E(d).off("$destroy"));
                E.cleanData(a.querySelectorAll("*"));
                for (g = 1; g < e; g++)
                    delete b[g];
                b[0] = c;
                b.length = 1
            }
            function ja(a, b) {
                return R(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }
            function la(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, wa(d))
                }
            }
            function ka(a, c, d, e, f) {
                function g(b, c, e) {
                    F(d.$onChanges) && c !== e && (fa || (a.$$postDigest(M),
                        fa = []),
                        m || (m = {},
                            fa.push(h)),
                        m[b] && (e = m[b].previousValue),
                        m[b] = new Ib(e, c))
                }
                function h() {
                    d.$onChanges(m);
                    m = void 0
                }
                var k = [], l = {}, m;
                q(e, function (e, h) {
                    var m = e.attrName, p = e.optional, x, v, t, A;
                    switch (e.mode) {
                        case "@":
                            p || sa.call(c, m) || (d[h] = c[m] = void 0);
                            c.$observe(m, function (a) {
                                if (H(a) || Ia(a))
                                    g(h, a, d[h]),
                                        d[h] = a
                            });
                            c.$$observers[m].$$scope = a;
                            x = c[m];
                            H(x) ? d[h] = b(x)(a) : Ia(x) && (d[h] = x);
                            l[h] = new Ib(gc, d[h]);
                            break;
                        case "=":
                            if (!sa.call(c, m)) {
                                if (p)
                                    break;
                                c[m] = void 0
                            }
                            if (p && !c[m])
                                break;
                            v = n(c[m]);
                            A = v.literal ? oa : function (a, b) {
                                return a === b || a !== a && b !== b
                            }
                                ;
                            t = v.assign || function () {
                                x = d[h] = v(a);
                                throw da("nonassign", c[m], m, f.name);
                            }
                                ;
                            x = d[h] = v(a);
                            p = function (b) {
                                A(b, d[h]) || (A(b, x) ? t(a, b = d[h]) : d[h] = b);
                                return x = b
                            }
                                ;
                            p.$stateful = !0;
                            p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, v.literal);
                            k.push(p);
                            break;
                        case "<":
                            if (!sa.call(c, m)) {
                                if (p)
                                    break;
                                c[m] = void 0
                            }
                            if (p && !c[m])
                                break;
                            v = n(c[m]);
                            var L = d[h] = v(a);
                            l[h] = new Ib(gc, d[h]);
                            p = a.$watch(v, function (a, b) {
                                if (b === a) {
                                    if (b === L)
                                        return;
                                    b = L
                                }
                                g(h, a, b);
                                d[h] = a
                            }, v.literal);
                            k.push(p);
                            break;
                        case "&":
                            v = c.hasOwnProperty(m) ? n(c[m]) : C;
                            if (v === C && p)
                                break;
                            d[h] = function (b) {
                                return v(a, b)
                            }
                    }
                });
                return {
                    initialChanges: l,
                    removeWatches: k.length && function () {
                        for (var a = 0, b = k.length; a < b; ++a)
                            k[a]()
                    }
                }
            }
            var ra = /^\w/, pa = B.document.createElement("div"), xa = J, Ca = t, qa = x, fa;
            bc.prototype = {
                $normalize: Ba,
                $addClass: function (a) {
                    a && 0 < a.length && G.addClass(this.$$element, a)
                },
                $removeClass: function (a) {
                    a && 0 < a.length && G.removeClass(this.$$element, a)
                },
                $updateClass: function (a, b) {
                    var c = id(a, b);
                    c && c.length && G.addClass(this.$$element, c);
                    (c = id(b, a)) && c.length && G.removeClass(this.$$element, c)
                },
                $set: function (a, b, d, e) {
                    var f = ad(this.$$element[0], a)
                        , g = jd[a]
                        , h = a;
                    f ? (this.$$element.prop(a, b),
                        e = f) : g && (this[g] = b,
                            h = g);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Jc(a, "-"));
                    f = ua(this.$$element);
                    if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a)
                        this[a] = b = v(b, "src" === a);
                    else if ("img" === f && "srcset" === a && u(b)) {
                        for (var f = "", g = U(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++)
                            var m = 2 * l
                                , f = f + v(U(g[m]), !0)
                                , f = f + (" " + U(g[m + 1]));
                        g = U(g[2 * l]).split(/\s/);
                        f += v(U(g[0]), !0);
                        2 === g.length && (f += " " + U(g[1]));
                        this[a] = b = f
                    }
                    !1 !== d && (null === b || z(b) ? this.$$element.removeAttr(e) : ra.test(e) ? this.$$element.attr(e, b) : r(this.$$element[0], e, b));
                    (a = this.$$observers) && q(a[h], function (a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                },
                $observe: function (a, b) {
                    var c = this
                        , d = c.$$observers || (c.$$observers = S())
                        , e = d[a] || (d[a] = []);
                    e.push(b);
                    Q.$evalAsync(function () {
                        e.$$inter || !c.hasOwnProperty(a) || z(c[a]) || b(c[a])
                    });
                    return function () {
                        ab(e, b)
                    }
                }
            };
            var va = b.startSymbol()
                , ya = b.endSymbol()
                , za = "{{" === va && "}}" === ya ? Za : function (a) {
                    return a.replace(/\{\{/g, va).replace(/}}/g, ya)
                }
                , Da = /^ngAttr[A-Z]/
                , Ea = /^(.+)Start$/;
            $.$$addBindingInfo = p ? function (a, b) {
                var c = a.data("$binding") || [];
                K(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            }
                : C;
            $.$$addBindingClass = p ? function (a) {
                Ha(a, "ng-binding")
            }
                : C;
            $.$$addScopeInfo = p ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            }
                : C;
            $.$$addScopeClass = p ? function (a, b) {
                Ha(a, b ? "ng-isolate-scope" : "ng-scope")
            }
                : C;
            $.$$createComment = function (a, b) {
                var c = "";
                p && (c = " " + (a || "") + ": ",
                    b && (c += b + " "));
                return B.document.createComment(c)
            }
                ;
            return $
        }
        ]
    }
    function Ib(a, b) {
        this.previousValue = a;
        this.currentValue = b
    }
    function Ba(a) {
        return fb(a.replace(ed, ""))
    }
    function id(a, b) {
        var d = ""
            , c = a.split(/\s+/)
            , e = b.split(/\s+/)
            , f = 0;
        a: for (; f < c.length; f++) {
            for (var g = c[f], h = 0; h < e.length; h++)
                if (g === e[h])
                    continue a;
            d += (0 < d.length ? " " : "") + g
        }
        return d
    }
    function hd(a) {
        a = E(a);
        var b = a.length;
        if (1 >= b)
            return a;
        for (; b--;)
            8 === a[b].nodeType && pg.call(a, b, 1);
        return a
    }
    function dd(a, b) {
        if (b && H(b))
            return b;
        if (H(a)) {
            var d = kd.exec(a);
            if (d)
                return d[3]
        }
    }
    function vf() {
        var a = {}
            , b = !1;
        this.has = function (b) {
            return a.hasOwnProperty(b)
        }
            ;
        this.register = function (b, c) {
            Qa(b, "controller");
            I(b) ? R(a, b) : a[b] = c
        }
            ;
        this.allowGlobals = function () {
            b = !0
        }
            ;
        this.$get = ["$injector", "$window", function (d, c) {
            function e(a, b, c, d) {
                if (!a || !I(a.$scope))
                    throw N("$controller")("noscp", d, b);
                a.$scope[b] = c
            }
            return function (f, g, h, k) {
                var l, m, n;
                h = !0 === h;
                k && H(k) && (n = k);
                if (H(f)) {
                    k = f.match(kd);
                    if (!k)
                        throw qg("ctrlfmt", f);
                    m = k[1];
                    n = n || k[3];
                    f = a.hasOwnProperty(m) ? a[m] : Lc(g.$scope, m, !0) || (b ? Lc(c, m, !0) : void 0);
                    Pa(f, m, !0)
                }
                if (h)
                    return h = (K(f) ? f[f.length - 1] : f).prototype,
                        l = Object.create(h || null),
                        n && e(g, n, l, m || f.name),
                        R(function () {
                            var a = d.invoke(f, l, g, m);
                            a !== l && (I(a) || F(a)) && (l = a,
                                n && e(g, n, l, m || f.name));
                            return l
                        }, {
                            instance: l,
                            identifier: n
                        });
                l = d.instantiate(f, g, m);
                n && e(g, n, l, m || f.name);
                return l
            }
        }
        ]
    }
    function wf() {
        this.$get = ["$window", function (a) {
            return E(a.document)
        }
        ]
    }
    function xf() {
        this.$get = ["$log", function (a) {
            return function (b, d) {
                a.error.apply(a, arguments)
            }
        }
        ]
    }
    function hc(a) {
        return I(a) ? ba(a) ? a.toISOString() : db(a) : a
    }
    function Cf() {
        this.$get = function () {
            return function (a) {
                if (!a)
                    return "";
                var b = [];
                Ac(a, function (a, c) {
                    null === a || z(a) || (K(a) ? q(a, function (a) {
                        b.push(ca(c) + "=" + ca(hc(a)))
                    }) : b.push(ca(c) + "=" + ca(hc(a))))
                });
                return b.join("&")
            }
        }
    }
    function Df() {
        this.$get = function () {
            return function (a) {
                function b(a, e, f) {
                    null === a || z(a) || (K(a) ? q(a, function (a, c) {
                        b(a, e + "[" + (I(a) ? c : "") + "]")
                    }) : I(a) && !ba(a) ? Ac(a, function (a, c) {
                        b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
                    }) : d.push(ca(e) + "=" + ca(hc(a))))
                }
                if (!a)
                    return "";
                var d = [];
                b(a, "", !0);
                return d.join("&")
            }
        }
    }
    function ic(a, b) {
        if (H(a)) {
            var d = a.replace(rg, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(ld)) || (c = (c = d.match(sg)) && tg[c[0]].test(d));
                c && (a = Ec(d))
            }
        }
        return a
    }
    function md(a) {
        var b = S(), d;
        H(a) ? q(a.split("\n"), function (a) {
            d = a.indexOf(":");
            var e = P(U(a.substr(0, d)));
            a = U(a.substr(d + 1));
            e && (b[e] = b[e] ? b[e] + ", " + a : a)
        }) : I(a) && q(a, function (a, d) {
            var f = P(d)
                , g = U(a);
            f && (b[f] = b[f] ? b[f] + ", " + g : g)
        });
        return b
    }
    function nd(a) {
        var b;
        return function (d) {
            b || (b = md(a));
            return d ? (d = b[P(d)],
                void 0 === d && (d = null),
                d) : b
        }
    }
    function od(a, b, d, c) {
        if (F(c))
            return c(a, b, d);
        q(c, function (c) {
            a = c(a, b, d)
        });
        return a
    }
    function Bf() {
        var a = this.defaults = {
            transformResponse: [ic],
            transformRequest: [function (a) {
                return I(a) && "[object File]" !== na.call(a) && "[object Blob]" !== na.call(a) && "[object FormData]" !== na.call(a) ? db(a) : a
            }
            ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: ia(jc),
                put: ia(jc),
                patch: ia(jc)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }
            , b = !1;
        this.useApplyAsync = function (a) {
            return u(a) ? (b = !!a,
                this) : b
        }
            ;
        var d = !0;
        this.useLegacyPromiseExtensions = function (a) {
            return u(a) ? (d = !!a,
                this) : d
        }
            ;
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
            function m(b) {
                function c(a, b) {
                    for (var d = 0, e = b.length; d < e;) {
                        var f = b[d++]
                            , g = b[d++];
                        a = a.then(f, g)
                    }
                    b.length = 0;
                    return a
                }
                function e(a, b) {
                    var c, d = {};
                    q(a, function (a, e) {
                        F(a) ? (c = a(b),
                            null != c && (d[e] = c)) : d[e] = a
                    });
                    return d
                }
                function f(a) {
                    var b = R({}, a);
                    b.data = od(a.data, a.headers, a.status, g.transformResponse);
                    a = a.status;
                    return 200 <= a && 300 > a ? b : k.reject(b)
                }
                if (!I(b))
                    throw N("$http")("badreq", b);
                if (!H(b.url))
                    throw N("$http")("badreq", b.url);
                var g = R({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                g.headers = function (b) {
                    var c = a.headers, d = R({}, b.headers), f, g, h, c = R({}, c.common, c[P(b.method)]);
                    a: for (f in c) {
                        g = P(f);
                        for (h in d)
                            if (P(h) === g)
                                continue a;
                        d[f] = c[f]
                    }
                    return e(d, ia(b))
                }(b);
                g.method = xb(g.method);
                g.paramSerializer = H(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;
                var h = []
                    , m = []
                    , p = k.when(g);
                q(J, function (a) {
                    (a.request || a.requestError) && h.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && m.push(a.response, a.responseError)
                });
                p = c(p, h);
                p = p.then(function (b) {
                    var c = b.headers
                        , d = od(b.data, nd(c), void 0, b.transformRequest);
                    z(d) && q(c, function (a, b) {
                        "content-type" === P(b) && delete c[b]
                    });
                    z(b.withCredentials) && !z(a.withCredentials) && (b.withCredentials = a.withCredentials);
                    return n(b, d).then(f, f)
                });
                p = c(p, m);
                d ? (p.success = function (a) {
                    Pa(a, "fn");
                    p.then(function (b) {
                        a(b.data, b.status, b.headers, g)
                    });
                    return p
                }
                    ,
                    p.error = function (a) {
                        Pa(a, "fn");
                        p.then(null, function (b) {
                            a(b.data, b.status, b.headers, g)
                        });
                        return p
                    }
                ) : (p.success = pd("success"),
                    p.error = pd("error"));
                return p
            }
            function n(c, d) {
                function g(a) {
                    if (a) {
                        var c = {};
                        q(a, function (a, d) {
                            c[d] = function (c) {
                                function d() {
                                    a(c)
                                }
                                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d)
                            }
                        });
                        return c
                    }
                }
                function l(a, c, d, e) {
                    function f() {
                        n(c, a, d, e)
                    }
                    A && (200 <= a && 300 > a ? A.put(M, [a, c, md(d), e]) : A.remove(M));
                    b ? h.$applyAsync(f) : (f(),
                        h.$$phase || h.$apply())
                }
                function n(a, b, d, e) {
                    b = -1 <= b ? b : 0;
                    (200 <= b && 300 > b ? L.resolve : L.reject)({
                        data: a,
                        status: b,
                        headers: nd(d),
                        config: c,
                        statusText: e
                    })
                }
                function J(a) {
                    n(a.data, a.status, ia(a.headers()), a.statusText)
                }
                function O() {
                    var a = m.pendingRequests.indexOf(c);
                    -1 !== a && m.pendingRequests.splice(a, 1)
                }
                var L = k.defer(), Q = L.promise, A, G, v = c.headers, M = p(c.url, c.paramSerializer(c.params));
                m.pendingRequests.push(c);
                Q.then(O, O);
                !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (A = I(c.cache) ? c.cache : I(a.cache) ? a.cache : x);
                A && (G = A.get(M),
                    u(G) ? G && F(G.then) ? G.then(J, J) : K(G) ? n(G[1], G[0], ia(G[2]), G[3]) : n(G, 200, {}, "OK") : A.put(M, Q));
                z(G) && ((G = qd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (v[c.xsrfHeaderName || a.xsrfHeaderName] = G),
                    e(c.method, M, d, l, v, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
                return Q
            }
            function p(a, b) {
                0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);
                return a
            }
            var x = g("$http");
            a.paramSerializer = H(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var J = [];
            q(c, function (a) {
                J.unshift(H(a) ? l.get(a) : l.invoke(a))
            });
            m.pendingRequests = [];
            (function (a) {
                q(arguments, function (a) {
                    m[a] = function (b, c) {
                        return m(R({}, c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            }
            )("get", "delete", "head", "jsonp");
            (function (a) {
                q(arguments, function (a) {
                    m[a] = function (b, c, d) {
                        return m(R({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            }
            )("post", "put", "patch");
            m.defaults = a;
            return m
        }
        ]
    }
    function Ff() {
        this.$get = function () {
            return function () {
                return new B.XMLHttpRequest
            }
        }
    }
    function Ef() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
            return ug(a, c, a.defer, b, d[0])
        }
        ]
    }
    function ug(a, b, d, c, e) {
        function f(a, b, d) {
            a = a.replace("JSON_CALLBACK", b);
            var f = e.createElement("script")
                , m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function (a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1
                    , x = "unknown";
                a && ("load" !== a.type || c.wasCalled(b) || (a = {
                    type: "error"
                }),
                    x = a.type,
                    g = "error" === a.type ? 404 : 200);
                d && d(g, x)
            }
                ;
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }
        return function (e, h, k, l, m, n, p, x, J, t) {
            function s() {
                ib && ib();
                w && w.abort()
            }
            function D(b, c, e, f, g) {
                u(L) && d.cancel(L);
                ib = w = null;
                b(c, e, f, g);
                a.$$completeOutstandingRequest(C)
            }
            a.$$incOutstandingRequestCount();
            h = h || a.url();
            if ("jsonp" === P(e))
                var y = c.createCallback(h)
                    , ib = f(h, y, function (a, b) {
                        var d = 200 === a && c.getResponse(y);
                        D(l, a, d, "", b);
                        c.removeCallback(y)
                    });
            else {
                var w = b(e, h);
                w.open(e, h, !0);
                q(m, function (a, b) {
                    u(a) && w.setRequestHeader(b, a)
                });
                w.onload = function () {
                    var a = w.statusText || ""
                        , b = "response" in w ? w.response : w.responseText
                        , c = 1223 === w.status ? 204 : w.status;
                    0 === c && (c = b ? 200 : "file" === Ca(h).protocol ? 404 : 0);
                    D(l, c, b, w.getAllResponseHeaders(), a)
                }
                    ;
                e = function () {
                    D(l, -1, null, null, "")
                }
                    ;
                w.onerror = e;
                w.onabort = e;
                w.ontimeout = e;
                q(J, function (a, b) {
                    w.addEventListener(b, a)
                });
                q(t, function (a, b) {
                    w.upload.addEventListener(b, a)
                });
                p && (w.withCredentials = !0);
                if (x)
                    try {
                        w.responseType = x
                    } catch (O) {
                        if ("json" !== x)
                            throw O;
                    }
                w.send(z(k) ? null : k)
            }
            if (0 < n)
                var L = d(s, n);
            else
                n && F(n.then) && n.then(s)
        }
    }
    function zf() {
        var a = "{{"
            , b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b,
                this) : a
        }
            ;
        this.endSymbol = function (a) {
            return a ? (b = a,
                this) : b
        }
            ;
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
            function f(a) {
                return "\\\\\\" + a
            }
            function g(c) {
                return c.replace(n, a).replace(p, b)
            }
            function h(a, b, c, d) {
                var e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c);
                return e
            }
            function k(f, k, p, n) {
                function D(a) {
                    try {
                        var b = a;
                        a = p ? e.getTrusted(p, b) : e.valueOf(b);
                        var d;
                        if (n && !u(a))
                            d = a;
                        else if (null == a)
                            d = "";
                        else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = db(a)
                            }
                            d = a
                        }
                        return d
                    } catch (g) {
                        c(Ka.interr(f, g))
                    }
                }
                if (!f.length || -1 === f.indexOf(a)) {
                    var y;
                    k || (k = g(f),
                        y = ma(k),
                        y.exp = f,
                        y.expressions = [],
                        y.$$watchDelegate = h);
                    return y
                }
                n = !!n;
                var q, w, O = 0, L = [], Q = [];
                y = f.length;
                for (var A = [], G = []; O < y;)
                    if (-1 !== (q = f.indexOf(a, O)) && -1 !== (w = f.indexOf(b, q + l)))
                        O !== q && A.push(g(f.substring(O, q))),
                            O = f.substring(q + l, w),
                            L.push(O),
                            Q.push(d(O, D)),
                            O = w + m,
                            G.push(A.length),
                            A.push("");
                    else {
                        O !== y && A.push(g(f.substring(O)));
                        break
                    }
                p && 1 < A.length && Ka.throwNoconcat(f);
                if (!k || L.length) {
                    var v = function (a) {
                        for (var b = 0, c = L.length; b < c; b++) {
                            if (n && z(a[b]))
                                return;
                            A[G[b]] = a[b]
                        }
                        return A.join("")
                    };
                    return R(function (a) {
                        var b = 0
                            , d = L.length
                            , e = Array(d);
                        try {
                            for (; b < d; b++)
                                e[b] = Q[b](a);
                            return v(e)
                        } catch (g) {
                            c(Ka.interr(f, g))
                        }
                    }, {
                        exp: f,
                        expressions: L,
                        $$watchDelegate: function (a, b) {
                            var c;
                            return a.$watchGroup(Q, function (d, e) {
                                var f = v(d);
                                F(b) && b.call(this, f, d !== e ? c : f, a);
                                c = f
                            })
                        }
                    })
                }
            }
            var l = a.length
                , m = b.length
                , n = new RegExp(a.replace(/./g, f), "g")
                , p = new RegExp(b.replace(/./g, f), "g");
            k.startSymbol = function () {
                return a
            }
                ;
            k.endSymbol = function () {
                return b
            }
                ;
            return k
        }
        ]
    }
    function Af() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
            function f(f, k, l, m) {
                function n() {
                    p ? f.apply(null, x) : f(s)
                }
                var p = 4 < arguments.length
                    , x = p ? ta.call(arguments, 4) : []
                    , J = b.setInterval
                    , t = b.clearInterval
                    , s = 0
                    , D = u(m) && !m
                    , y = (D ? c : d).defer()
                    , q = y.promise;
                l = u(l) ? l : 0;
                q.$$intervalId = J(function () {
                    D ? e.defer(n) : a.$evalAsync(n);
                    y.notify(s++);
                    0 < l && s >= l && (y.resolve(s),
                        t(q.$$intervalId),
                        delete g[q.$$intervalId]);
                    D || a.$apply()
                }, k);
                g[q.$$intervalId] = y;
                return q
            }
            var g = {};
            f.cancel = function (a) {
                return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"),
                    b.clearInterval(a.$$intervalId),
                    delete g[a.$$intervalId],
                    !0) : !1
            }
                ;
            return f
        }
        ]
    }
    function kc(a) {
        a = a.split("/");
        for (var b = a.length; b--;)
            a[b] = tb(a[b]);
        return a.join("/")
    }
    function rd(a, b) {
        var d = Ca(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = aa(d.port) || vg[d.protocol] || null
    }
    function sd(a, b) {
        if (wg.test(a))
            throw lb("badpath", a);
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = Ca(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = Hc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }
    function ka(a, b) {
        if (0 === b.lastIndexOf(a, 0))
            return b.substr(a.length)
    }
    function Ja(a) {
        var b = a.indexOf("#");
        return -1 === b ? a : a.substr(0, b)
    }
    function mb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }
    function lc(a, b, d) {
        this.$$html5 = !0;
        d = d || "";
        rd(a, this);
        this.$$parse = function (a) {
            var d = ka(b, a);
            if (!H(d))
                throw lb("ipthprfx", a, b);
            sd(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        }
            ;
        this.$$compose = function () {
            var a = Wb(this.$$search)
                , d = this.$$hash ? "#" + tb(this.$$hash) : "";
            this.$$url = kc(this.$$path) + (a ? "?" + a : "") + d;
            this.$$absUrl = b + this.$$url.substr(1)
        }
            ;
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])
                return this.hash(e.slice(1)),
                    !0;
            var f, g;
            u(f = ka(a, c)) ? (g = f,
                g = d && u(f = ka(d, f)) ? b + (ka("/", f) || f) : a + g) : u(f = ka(b, c)) ? g = b + f : b === c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g
        }
    }
    function mc(a, b, d) {
        rd(a, this);
        this.$$parse = function (c) {
            var e = ka(a, c) || ka(b, c), f;
            z(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "",
                z(e) && (a = c,
                    this.replace())) : (f = ka(d, e),
                        z(f) && (f = e));
            sd(f, this);
            c = this.$$path;
            var e = a
                , g = /^\/[A-Z]:(\/.*)/;
            0 === f.lastIndexOf(e, 0) && (f = f.replace(e, ""));
            g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
            this.$$path = c;
            this.$$compose()
        }
            ;
        this.$$compose = function () {
            var b = Wb(this.$$search)
                , e = this.$$hash ? "#" + tb(this.$$hash) : "";
            this.$$url = kc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "")
        }
            ;
        this.$$parseLinkUrl = function (b, d) {
            return Ja(a) === Ja(b) ? (this.$$parse(b),
                !0) : !1
        }
    }
    function td(a, b, d) {
        this.$$html5 = !0;
        mc.apply(this, arguments);
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])
                return this.hash(e.slice(1)),
                    !0;
            var f, g;
            a === Ja(c) ? f = c : (g = ka(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
            f && this.$$parse(f);
            return !!f
        }
            ;
        this.$$compose = function () {
            var b = Wb(this.$$search)
                , e = this.$$hash ? "#" + tb(this.$$hash) : "";
            this.$$url = kc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + d + this.$$url
        }
    }
    function Jb(a) {
        return function () {
            return this[a]
        }
    }
    function ud(a, b) {
        return function (d) {
            if (z(d))
                return this[a];
            this[a] = b(d);
            this.$$compose();
            return this
        }
    }
    function Hf() {
        var a = ""
            , b = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function (b) {
            return u(b) ? (a = b,
                this) : a
        }
            ;
        this.html5Mode = function (a) {
            return Ia(a) ? (b.enabled = a,
                this) : I(a) ? (Ia(a.enabled) && (b.enabled = a.enabled),
                    Ia(a.requireBase) && (b.requireBase = a.requireBase),
                    Ia(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks),
                    this) : b
        }
            ;
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
            function h(a, b, d) {
                var e = l.url()
                    , f = l.$$state;
                try {
                    c.url(a, b, d),
                        l.$$state = c.state()
                } catch (g) {
                    throw l.url(e),
                    l.$$state = f,
                    g;
                }
            }
            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
            }
            var l, m;
            m = c.baseHref();
            var n = c.url(), p;
            if (b.enabled) {
                if (!m && b.requireBase)
                    throw lb("nobase");
                p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
                m = e.history ? lc : td
            } else
                p = Ja(n),
                    m = mc;
            var x = p.substr(0, Ja(p).lastIndexOf("/") + 1);
            l = new m(p, x, "#" + a);
            l.$$parseLinkUrl(n, n);
            l.$$state = c.state();
            var J = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
                    for (var e = E(a.target); "a" !== ua(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0])
                            return;
                    var h = e.prop("href")
                        , k = e.attr("href") || e.attr("xlink:href");
                    I(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ca(h.animVal).href);
                    J.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(),
                        l.absUrl() !== c.url() && (d.$apply(),
                            g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            mb(l.absUrl()) !== mb(n) && c.url(l.absUrl(), !0);
            var t = !0;
            c.onUrlChange(function (a, b) {
                z(ka(x, a)) ? g.location.href = a : (d.$evalAsync(function () {
                    var c = l.absUrl(), e = l.$$state, f;
                    a = mb(a);
                    l.$$parse(a);
                    l.$$state = b;
                    f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() === a && (f ? (l.$$parse(c),
                        l.$$state = e,
                        h(c, !1, e)) : (t = !1,
                            k(c, e)))
                }),
                    d.$$phase || d.$digest())
            });
            d.$watch(function () {
                var a = mb(c.url())
                    , b = mb(l.absUrl())
                    , f = c.state()
                    , g = l.$$replace
                    , m = a !== b || l.$$html5 && e.history && f !== l.$$state;
                if (t || m)
                    t = !1,
                        d.$evalAsync(function () {
                            var b = l.absUrl()
                                , c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
                            l.absUrl() === b && (c ? (l.$$parse(a),
                                l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state),
                                    k(a, f)))
                        });
                l.$$replace = !1
            });
            return l
        }
        ]
    }
    function If() {
        var a = !0
            , b = this;
        this.debugEnabled = function (b) {
            return u(b) ? (a = b,
                this) : a
        }
            ;
        this.$get = ["$window", function (d) {
            function c(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }
            function e(a) {
                var b = d.console || {}
                    , e = b[a] || b.log || C;
                a = !1;
                try {
                    a = !!e.apply
                } catch (k) { }
                return a ? function () {
                    var a = [];
                    q(arguments, function (b) {
                        a.push(c(b))
                    });
                    return e.apply(b, a)
                }
                    : function (a, b) {
                        e(a, null == b ? "" : b)
                    }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function () {
                    var c = e("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }
        ]
    }
    function Ta(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)
            throw ea("isecfld", b);
        return a
    }
    function xg(a) {
        return a + ""
    }
    function qa(a, b) {
        if (a) {
            if (a.constructor === a)
                throw ea("isecfn", b);
            if (a.window === a)
                throw ea("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find))
                throw ea("isecdom", b);
            if (a === Object)
                throw ea("isecobj", b);
        }
        return a
    }
    function vd(a, b) {
        if (a) {
            if (a.constructor === a)
                throw ea("isecfn", b);
            if (a === yg || a === zg || a === Ag)
                throw ea("isecff", b);
        }
    }
    function Kb(a, b) {
        if (a && (a === wd || a === xd || a === yd || a === zd || a === Ad || a === Bd || a === Bg || a === Cg || a === Lb || a === Dg || a === Cd || a === Eg))
            throw ea("isecaf", b);
    }
    function Fg(a, b) {
        return "undefined" !== typeof a ? a : b
    }
    function Dd(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
    }
    function W(a, b) {
        var d, c, e;
        switch (a.type) {
            case r.Program:
                d = !0;
                q(a.body, function (a) {
                    W(a.expression, b);
                    d = d && a.expression.constant
                });
                a.constant = d;
                break;
            case r.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case r.UnaryExpression:
                W(a.argument, b);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case r.BinaryExpression:
                W(a.left, b);
                W(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case r.LogicalExpression:
                W(a.left, b);
                W(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case r.ConditionalExpression:
                W(a.test, b);
                W(a.alternate, b);
                W(a.consequent, b);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case r.Identifier:
                a.constant = !1;
                a.toWatch = [a];
                break;
            case r.MemberExpression:
                W(a.object, b);
                a.computed && W(a.property, b);
                a.constant = a.object.constant && (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case r.CallExpression:
                d = e = a.filter ? !b(a.callee.name).$stateful : !1;
                c = [];
                q(a.arguments, function (a) {
                    W(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = e ? c : [a];
                break;
            case r.AssignmentExpression:
                W(a.left, b);
                W(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case r.ArrayExpression:
                d = !0;
                c = [];
                q(a.elements, function (a) {
                    W(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case r.ObjectExpression:
                d = !0;
                c = [];
                q(a.properties, function (a) {
                    W(a.value, b);
                    d = d && a.value.constant && !a.computed;
                    a.value.constant || c.push.apply(c, a.value.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case r.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case r.LocalsExpression:
                a.constant = !1,
                    a.toWatch = []
        }
    }
    function Ed(a) {
        if (1 === a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : void 0
        }
    }
    function Fd(a) {
        return a.type === r.Identifier || a.type === r.MemberExpression
    }
    function Gd(a) {
        if (1 === a.body.length && Fd(a.body[0].expression))
            return {
                type: r.AssignmentExpression,
                left: a.body[0].expression,
                right: {
                    type: r.NGValueParameter
                },
                operator: "="
            }
    }
    function Hd(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === r.Literal || a.body[0].expression.type === r.ArrayExpression || a.body[0].expression.type === r.ObjectExpression)
    }
    function Id(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }
    function Jd(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }
    function Mb(a) {
        return "constructor" === a
    }
    function nc(a) {
        return F(a.valueOf) ? a.valueOf() : Gg.call(a)
    }
    function Jf() {
        var a = S(), b = S(), d = {
            "true": !0,
            "false": !1,
            "null": null,
            undefined: void 0
        }, c, e;
        this.addLiteral = function (a, b) {
            d[a] = b
        }
            ;
        this.setIdentifierFns = function (a, b) {
            c = a;
            e = b;
            return this
        }
            ;
        this.$get = ["$filter", function (f) {
            function g(c, d, e) {
                var g, k, J;
                e = e || D;
                switch (typeof c) {
                    case "string":
                        J = c = c.trim();
                        var A = e ? b : a;
                        g = A[J];
                        if (!g) {
                            ":" === c.charAt(0) && ":" === c.charAt(1) && (k = !0,
                                c = c.substring(2));
                            g = e ? s : t;
                            var G = new oc(g);
                            g = (new pc(G, f, g)).parse(c);
                            g.constant ? g.$$watchDelegate = p : k ? g.$$watchDelegate = g.literal ? n : m : g.inputs && (g.$$watchDelegate = l);
                            e && (g = h(g));
                            A[J] = g
                        }
                        return x(g, d);
                    case "function":
                        return x(c, d);
                    default:
                        return x(C, d)
                }
            }
            function h(a) {
                function b(c, d, e, f) {
                    var g = D;
                    D = !0;
                    try {
                        return a(c, d, e, f)
                    } finally {
                        D = g
                    }
                }
                if (!a)
                    return a;
                b.$$watchDelegate = a.$$watchDelegate;
                b.assign = h(a.assign);
                b.constant = a.constant;
                b.literal = a.literal;
                for (var c = 0; a.inputs && c < a.inputs.length; ++c)
                    a.inputs[c] = h(a.inputs[c]);
                b.inputs = a.inputs;
                return b
            }
            function k(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = nc(a),
                    "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }
            function l(a, b, c, d, e) {
                var f = d.inputs, g;
                if (1 === f.length) {
                    var h = k
                        , f = f[0];
                    return a.$watch(function (a) {
                        var b = f(a);
                        k(b, h) || (g = d(a, void 0, void 0, [b]),
                            h = b && nc(b));
                        return g
                    }, b, c, e)
                }
                for (var l = [], m = [], p = 0, n = f.length; p < n; p++)
                    l[p] = k,
                        m[p] = null;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, e = f.length; c < e; c++) {
                        var h = f[c](a);
                        if (b || (b = !k(h, l[c])))
                            m[c] = h,
                                l[c] = h && nc(h)
                    }
                    b && (g = d(a, void 0, void 0, m));
                    return g
                }, b, c, e)
            }
            function m(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a;
                    F(b) && b.apply(this, arguments);
                    u(a) && d.$$postDigest(function () {
                        u(f) && e()
                    })
                }, c)
            }
            function n(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    q(a, function (a) {
                        u(a) || (b = !1)
                    });
                    return b
                }
                var f, g;
                return f = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    g = a;
                    F(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function () {
                        e(g) && f()
                    })
                }, c)
            }
            function p(a, b, c, d) {
                var e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c);
                return e
            }
            function x(a, b) {
                if (!b)
                    return a;
                var c = a.$$watchDelegate
                    , d = !1
                    , c = c !== n && c !== m ? function (c, e, f, g) {
                        f = d && g ? g[0] : a(c, e, f, g);
                        return b(f, c, e)
                    }
                        : function (c, d, e, f) {
                            e = a(c, d, e, f);
                            c = b(e, c, d);
                            return u(e) ? c : e
                        }
                    ;
                a.$$watchDelegate && a.$$watchDelegate !== l ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = l,
                    d = !a.inputs,
                    c.inputs = a.inputs ? a.inputs : [a]);
                return c
            }
            var J = ya().noUnsafeEval
                , t = {
                    csp: J,
                    expensiveChecks: !1,
                    literals: pa(d),
                    isIdentifierStart: F(c) && c,
                    isIdentifierContinue: F(e) && e
                }
                , s = {
                    csp: J,
                    expensiveChecks: !0,
                    literals: pa(d),
                    isIdentifierStart: F(c) && c,
                    isIdentifierContinue: F(e) && e
                }
                , D = !1;
            g.$$runningExpensiveChecks = function () {
                return D
            }
                ;
            return g
        }
        ]
    }
    function Lf() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return Kd(function (b) {
                a.$evalAsync(b)
            }, b)
        }
        ]
    }
    function Mf() {
        this.$get = ["$browser", "$exceptionHandler", function (a, b) {
            return Kd(function (b) {
                a.defer(b)
            }, b)
        }
        ]
    }
    function Kd(a, b) {
        function d() {
            this.$$state = {
                status: 0
            }
        }
        function c(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }
        function e(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0,
                a(function () {
                    var a, d, e;
                    e = c.pending;
                    c.processScheduled = !1;
                    c.pending = void 0;
                    for (var f = 0, g = e.length; f < g; ++f) {
                        d = e[f][0];
                        a = e[f][c.status];
                        try {
                            F(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                        } catch (h) {
                            d.reject(h),
                                b(h)
                        }
                    }
                }))
        }
        function f() {
            this.promise = new d
        }
        var g = N("$q", TypeError)
            , h = function () {
                var a = new f;
                a.resolve = c(a, a.resolve);
                a.reject = c(a, a.reject);
                a.notify = c(a, a.notify);
                return a
            };
        R(d.prototype, {
            then: function (a, b, c) {
                if (z(a) && z(b) && z(c))
                    return this;
                var d = new f;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && e(this.$$state);
                return d.promise
            },
            "catch": function (a) {
                return this.then(null, a)
            },
            "finally": function (a, b) {
                return this.then(function (b) {
                    return l(b, !0, a)
                }, function (b) {
                    return l(b, !1, a)
                }, b)
            }
        });
        R(f.prototype, {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a))
            },
            $$resolve: function (a) {
                function d(a) {
                    k || (k = !0,
                        h.$$resolve(a))
                }
                function f(a) {
                    k || (k = !0,
                        h.$$reject(a))
                }
                var g, h = this, k = !1;
                try {
                    if (I(a) || F(a))
                        g = a && a.then;
                    F(g) ? (this.promise.$$state.status = -1,
                        g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a,
                            this.promise.$$state.status = 1,
                            e(this.promise.$$state))
                } catch (l) {
                    f(l),
                        b(l)
                }
            },
            reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function (a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                e(this.promise.$$state)
            },
            notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && a(function () {
                    for (var a, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        a = d[f][3];
                        try {
                            e.notify(F(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var k = function (a, b) {
            var c = new f;
            b ? c.resolve(a) : c.reject(a);
            return c.promise
        }
            , l = function (a, b, c) {
                var d = null;
                try {
                    F(c) && (d = c())
                } catch (e) {
                    return k(e, !1)
                }
                return d && F(d.then) ? d.then(function () {
                    return k(a, b)
                }, function (a) {
                    return k(a, !1)
                }) : k(a, b)
            }
            , m = function (a, b, c, d) {
                var e = new f;
                e.resolve(a);
                return e.promise.then(b, c, d)
            }
            , n = function (a) {
                if (!F(a))
                    throw g("norslvr", a);
                var b = new f;
                a(function (a) {
                    b.resolve(a)
                }, function (a) {
                    b.reject(a)
                });
                return b.promise
            };
        n.prototype = d.prototype;
        n.defer = h;
        n.reject = function (a) {
            var b = new f;
            b.reject(a);
            return b.promise
        }
            ;
        n.when = m;
        n.resolve = m;
        n.all = function (a) {
            var b = new f
                , c = 0
                , d = K(a) ? [] : {};
            q(a, function (a, e) {
                c++;
                m(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a,
                        --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        }
            ;
        n.race = function (a) {
            var b = h();
            q(a, function (a) {
                m(a).then(b.resolve, b.reject)
            });
            return b.promise
        }
            ;
        return n
    }
    function Vf() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame
                , c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame
                , e = !!d
                , f = e ? function (a) {
                    var b = d(a);
                    return function () {
                        c(b)
                    }
                }
                    : function (a) {
                        var c = b(a, 16.66, !1);
                        return function () {
                            b.cancel(c)
                        }
                    }
                ;
            f.supported = e;
            return f
        }
        ]
    }
    function Kf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++sb;
                this.$$ChildScope = null
            }
            b.prototype = a;
            return b
        }
        var b = 10
            , d = N("$rootScope")
            , c = null
            , e = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        }
            ;
        this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }
            function l(a) {
                9 === Fa && (a.$$childHead && l(a.$$childHead),
                    a.$$nextSibling && l(a.$$nextSibling));
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }
            function m() {
                this.$id = ++sb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }
            function n(a) {
                if (D.$$phase)
                    throw d("inprog", D.$$phase);
                D.$$phase = a
            }
            function p(a, b) {
                do
                    a.$$watchersCount += b;
                while (a = a.$parent)
            }
            function x(a, b, c) {
                do
                    a.$$listenerCount[c] -= b,
                        0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                while (a = a.$parent)
            }
            function J() { }
            function t() {
                for (; w.length;)
                    try {
                        w.shift()()
                    } catch (a) {
                        f(a)
                    }
                e = null
            }
            function s() {
                null === e && (e = h.defer(function () {
                    D.$apply(t)
                }))
            }
            m.prototype = {
                constructor: m,
                $new: function (b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new m,
                        d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)),
                            d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d,
                        c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (b || c !== this) && d.$on("$destroy", k);
                    return d
                },
                $watch: function (a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate)
                        return f.$$watchDelegate(this, b, d, f, a);
                    var h = this
                        , k = h.$$watchers
                        , l = {
                            fn: b,
                            last: J,
                            get: f,
                            exp: e || a,
                            eq: !!d
                        };
                    c = null;
                    F(b) || (l.fn = C);
                    k || (k = h.$$watchers = []);
                    k.unshift(l);
                    p(this, 1);
                    return function () {
                        0 <= ab(k, l) && p(h, -1);
                        c = null
                    }
                },
                $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1,
                            b(e, e, g)) : b(e, d, g)
                    }
                    var d = Array(a.length)
                        , e = Array(a.length)
                        , f = []
                        , g = this
                        , h = !1
                        , k = !0;
                    if (!a.length) {
                        var l = !0;
                        g.$evalAsync(function () {
                            l && b(e, e, g)
                        });
                        return function () {
                            l = !1
                        }
                    }
                    if (1 === a.length)
                        return this.$watch(a[0], function (a, c, f) {
                            e[0] = a;
                            d[0] = c;
                            b(e, a === c ? e : d, f)
                        });
                    q(a, function (a, b) {
                        var k = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0,
                                g.$evalAsync(c))
                        });
                        f.push(k)
                    });
                    return function () {
                        for (; f.length;)
                            f.shift()()
                    }
                },
                $watchCollection: function (a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!z(e)) {
                            if (I(e))
                                if (ra(e))
                                    for (f !== n && (f = n,
                                        s = f.length = 0,
                                        l++),
                                        a = e.length,
                                        s !== a && (l++,
                                            f.length = s = a),
                                        b = 0; b < a; b++)
                                        h = f[b],
                                            g = e[b],
                                            d = h !== h && g !== g,
                                            d || h === g || (l++,
                                                f[b] = g);
                                else {
                                    f !== p && (f = p = {},
                                        s = 0,
                                        l++);
                                    a = 0;
                                    for (b in e)
                                        sa.call(e, b) && (a++,
                                            g = e[b],
                                            h = f[b],
                                            b in f ? (d = h !== h && g !== g,
                                                d || h === g || (l++,
                                                    f[b] = g)) : (s++,
                                                        f[b] = g,
                                                        l++));
                                    if (s > a)
                                        for (b in l++,
                                            f)
                                            sa.call(e, b) || (s--,
                                                delete f[b])
                                }
                            else
                                f !== e && (f = e,
                                    l++);
                            return l
                        }
                    }
                    c.$stateful = !0;
                    var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), n = [], p = {}, x = !0, s = 0;
                    return this.$watch(m, function () {
                        x ? (x = !1,
                            b(e, e, d)) : b(e, h, d);
                        if (k)
                            if (I(e))
                                if (ra(e)) {
                                    h = Array(e.length);
                                    for (var a = 0; a < e.length; a++)
                                        h[a] = e[a]
                                } else
                                    for (a in h = {},
                                        e)
                                        sa.call(e, a) && (h[a] = e[a]);
                            else
                                h = e
                    })
                },
                $digest: function () {
                    var a, g, k, l, m, p, x, s, q = b, w, u = [], z, C;
                    n("$digest");
                    h.$$checkUrlChange();
                    this === D && null !== e && (h.defer.cancel(e),
                        t());
                    c = null;
                    do {
                        s = !1;
                        w = this;
                        for (p = 0; p < y.length; p++) {
                            try {
                                C = y[p],
                                    C.scope.$eval(C.expression, C.locals)
                            } catch (B) {
                                f(B)
                            }
                            c = null
                        }
                        y.length = 0;
                        a: do {
                            if (p = w.$$watchers)
                                for (x = p.length; x--;)
                                    try {
                                        if (a = p[x])
                                            if (m = a.get,
                                                (g = m(w)) !== (k = a.last) && !(a.eq ? oa(g, k) : X(g) && X(k)))
                                                s = !0,
                                                    c = a,
                                                    a.last = a.eq ? pa(g, null) : g,
                                                    l = a.fn,
                                                    l(g, k === J ? g : k, w),
                                                    5 > q && (z = 4 - q,
                                                        u[z] || (u[z] = []),
                                                        u[z].push({
                                                            msg: F(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                                            newVal: g,
                                                            oldVal: k
                                                        }));
                                            else if (a === c) {
                                                s = !1;
                                                break a
                                            }
                                    } catch (E) {
                                        f(E)
                                    }
                            if (!(p = w.$$watchersCount && w.$$childHead || w !== this && w.$$nextSibling))
                                for (; w !== this && !(p = w.$$nextSibling);)
                                    w = w.$parent
                        } while (w = p); if ((s || y.length) && !q--)
                            throw D.$$phase = null,
                            d("infdig", b, u);
                    } while (s || y.length); for (D.$$phase = null; O < r.length;)
                        try {
                            r[O++]()
                        } catch (H) {
                            f(H)
                        }
                    r.length = O = 0
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === D && h.$$applicationDestroyed();
                        p(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount)
                            x(this, this.$$listenerCount[b], b);
                        a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
                        a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = C;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return C
                        }
                            ;
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        l(this)
                    }
                },
                $eval: function (a, b) {
                    return g(a)(this, b)
                },
                $evalAsync: function (a, b) {
                    D.$$phase || y.length || h.defer(function () {
                        y.length && D.$digest()
                    });
                    y.push({
                        scope: this,
                        expression: g(a),
                        locals: b
                    })
                },
                $$postDigest: function (a) {
                    r.push(a)
                },
                $apply: function (a) {
                    try {
                        n("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            D.$$phase = null
                        }
                    } catch (b) {
                        f(b)
                    } finally {
                        try {
                            D.$digest()
                        } catch (c) {
                            throw f(c),
                            c;
                        }
                    }
                },
                $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && w.push(b);
                    a = g(a);
                    s()
                },
                $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do
                        d.$$listenerCount[a] || (d.$$listenerCount[a] = 0),
                            d.$$listenerCount[a]++;
                    while (d = d.$parent); var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null,
                            x(e, 1, a))
                    }
                },
                $emit: function (a, b) {
                    var c = [], d, e = this, g = !1, h = {
                        name: a,
                        targetScope: e,
                        stopPropagation: function () {
                            g = !0
                        },
                        preventDefault: function () {
                            h.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    }, k = bb([h], arguments, 1), l, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        l = 0;
                        for (m = d.length; l < m; l++)
                            if (d[l])
                                try {
                                    d[l].apply(null, k)
                                } catch (n) {
                                    f(n)
                                }
                            else
                                d.splice(l, 1),
                                    l--,
                                    m--;
                        if (g)
                            return h.currentScope = null,
                                h;
                        e = e.$parent
                    } while (e); h.currentScope = null;
                    return h
                },
                $broadcast: function (a, b) {
                    var c = this
                        , d = this
                        , e = {
                            name: a,
                            targetScope: this,
                            preventDefault: function () {
                                e.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[a])
                        return e;
                    for (var g = bb([e], arguments, 1), h, k; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++)
                            if (d[h])
                                try {
                                    d[h].apply(null, g)
                                } catch (l) {
                                    f(l)
                                }
                            else
                                d.splice(h, 1),
                                    h--,
                                    k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                            for (; c !== this && !(d = c.$$nextSibling);)
                                c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var D = new m
                , y = D.$$asyncQueue = []
                , r = D.$$postDigestQueue = []
                , w = D.$$applyAsyncQueue = []
                , O = 0;
            return D
        }
        ]
    }
    function De() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/
            , b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return u(b) ? (a = b,
                this) : a
        }
            ;
        this.imgSrcSanitizationWhitelist = function (a) {
            return u(a) ? (b = a,
                this) : b
        }
            ;
        this.$get = function () {
            return function (d, c) {
                var e = c ? b : a, f;
                f = Ca(d).href;
                return "" === f || f.match(e) ? d : "unsafe:" + f
            }
        }
    }
    function Hg(a) {
        if ("self" === a)
            return a;
        if (H(a)) {
            if (-1 < a.indexOf("***"))
                throw fa("iwcard", a);
            a = Ld(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + a + "$")
        }
        if (Ya(a))
            return new RegExp("^" + a.source + "$");
        throw fa("imatcher");
    }
    function Md(a) {
        var b = [];
        u(a) && q(a, function (a) {
            b.push(Hg(a))
        });
        return b
    }
    function Of() {
        this.SCE_CONTEXTS = la;
        var a = ["self"]
            , b = [];
        this.resourceUrlWhitelist = function (b) {
            arguments.length && (a = Md(b));
            return a
        }
            ;
        this.resourceUrlBlacklist = function (a) {
            arguments.length && (b = Md(a));
            return b
        }
            ;
        this.$get = ["$injector", function (d) {
            function c(a, b) {
                return "self" === a ? qd(b) : !!a.exec(b.href)
            }
            function e(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }
                    ;
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }
                    ;
                return b
            }
            var f = function (a) {
                throw fa("unsafe");
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e()
                , h = {};
            h[la.HTML] = e(g);
            h[la.CSS] = e(g);
            h[la.URL] = e(g);
            h[la.JS] = e(g);
            h[la.RESOURCE_URL] = e(h[la.URL]);
            return {
                trustAs: function (a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c)
                        throw fa("icontext", a, b);
                    if (null === b || z(b) || "" === b)
                        return b;
                    if ("string" !== typeof b)
                        throw fa("itype", a);
                    return new c(b)
                },
                getTrusted: function (d, e) {
                    if (null === e || z(e) || "" === e)
                        return e;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && e instanceof g)
                        return e.$$unwrapTrustedValue();
                    if (d === la.RESOURCE_URL) {
                        var g = Ca(e.toString()), n, p, x = !1;
                        n = 0;
                        for (p = a.length; n < p; n++)
                            if (c(a[n], g)) {
                                x = !0;
                                break
                            }
                        if (x)
                            for (n = 0,
                                p = b.length; n < p; n++)
                                if (c(b[n], g)) {
                                    x = !1;
                                    break
                                }
                        if (x)
                            return e;
                        throw fa("insecurl", e.toString());
                    }
                    if (d === la.HTML)
                        return f(e);
                    throw fa("unsafe");
                },
                valueOf: function (a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }
        ]
    }
    function Nf() {
        var a = !0;
        this.enabled = function (b) {
            arguments.length && (a = !!b);
            return a
        }
            ;
        this.$get = ["$parse", "$sceDelegate", function (b, d) {
            if (a && 8 > Fa)
                throw fa("iequirks");
            var c = ia(la);
            c.isEnabled = function () {
                return a
            }
                ;
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs = c.getTrusted = function (a, b) {
                return b
            }
                ,
                c.valueOf = Za);
            c.parseAs = function (a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function (b) {
                    return c.getTrusted(a, b)
                })
            }
                ;
            var e = c.parseAs
                , f = c.getTrusted
                , g = c.trustAs;
            q(la, function (a, b) {
                var d = P(b);
                c[fb("parse_as_" + d)] = function (b) {
                    return e(a, b)
                }
                    ;
                c[fb("get_trusted_" + d)] = function (b) {
                    return f(a, b)
                }
                    ;
                c[fb("trust_as_" + d)] = function (b) {
                    return g(a, b)
                }
            });
            return c
        }
        ]
    }
    function Pf() {
        this.$get = ["$window", "$document", function (a, b) {
            var d = {}, c = !(a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState, e = aa((/android (\d+)/.exec(P((a.navigator || {}).userAgent)) || [])[1]), f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, h, k = /^(Moz|webkit|ms)(?=[A-Z])/, l = g.body && g.body.style, m = !1, n = !1;
            if (l) {
                for (var p in l)
                    if (m = k.exec(p)) {
                        h = m[0];
                        h = h[0].toUpperCase() + h.substr(1);
                        break
                    }
                h || (h = "WebkitOpacity" in l && "webkit");
                m = !!("transition" in l || h + "Transition" in l);
                n = !!("animation" in l || h + "Animation" in l);
                !e || m && n || (m = H(l.webkitTransition),
                    n = H(l.webkitAnimation))
            }
            return {
                history: !(!c || 4 > e || f),
                hasEvent: function (a) {
                    if ("input" === a && 11 >= Fa)
                        return !1;
                    if (z(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b
                    }
                    return d[a]
                },
                csp: ya(),
                vendorPrefix: h,
                transitions: m,
                animations: n,
                android: e
            }
        }
        ]
    }
    function Rf() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b,
                this) : a
        }
            ;
        this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
            function f(g, h) {
                f.totalPendingRequests++;
                if (!H(g) || z(b.get(g)))
                    g = e.getTrustedResourceUrl(g);
                var k = d.defaults && d.defaults.transformResponse;
                K(k) ? k = k.filter(function (a) {
                    return a !== ic
                }) : k === ic && (k = null);
                return d.get(g, R({
                    cache: b,
                    transformResponse: k
                }, a))["finally"](function () {
                    f.totalPendingRequests--
                }).then(function (a) {
                    b.put(g, a.data);
                    return a.data
                }, function (a) {
                    if (!h)
                        throw Ig("tpload", g, a.status, a.statusText);
                    return c.reject(a)
                })
            }
            f.totalPendingRequests = 0;
            return f
        }
        ]
    }
    function Sf() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
            return {
                findBindings: function (a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    q(a, function (a) {
                        var c = ga.element(a).data("$binding");
                        c && q(c, function (c) {
                            d ? (new RegExp("(^|\\s)" + Ld(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                },
                findModels: function (a, b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length)
                            return k
                    }
                },
                getLocation: function () {
                    return d.url()
                },
                setLocation: function (b) {
                    b !== d.url() && (d.url(b),
                        a.$digest())
                },
                whenStable: function (a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }
        ]
    }
    function Tf() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
            function f(f, k, l) {
                F(f) || (l = k,
                    k = f,
                    f = C);
                var m = ta.call(arguments, 3), n = u(l) && !l, p = (n ? c : d).defer(), x = p.promise, q;
                q = b.defer(function () {
                    try {
                        p.resolve(f.apply(null, m))
                    } catch (b) {
                        p.reject(b),
                            e(b)
                    } finally {
                        delete g[x.$$timeoutId]
                    }
                    n || a.$apply()
                }, k);
                x.$$timeoutId = q;
                g[q] = p;
                return x
            }
            var g = {};
            f.cancel = function (a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"),
                    delete g[a.$$timeoutId],
                    b.defer.cancel(a.$$timeoutId)) : !1
            }
                ;
            return f
        }
        ]
    }
    function Ca(a) {
        Fa && (V.setAttribute("href", a),
            a = V.href);
        V.setAttribute("href", a);
        return {
            href: V.href,
            protocol: V.protocol ? V.protocol.replace(/:$/, "") : "",
            host: V.host,
            search: V.search ? V.search.replace(/^\?/, "") : "",
            hash: V.hash ? V.hash.replace(/^#/, "") : "",
            hostname: V.hostname,
            port: V.port,
            pathname: "/" === V.pathname.charAt(0) ? V.pathname : "/" + V.pathname
        }
    }
    function qd(a) {
        a = H(a) ? Ca(a) : a;
        return a.protocol === Nd.protocol && a.host === Nd.host
    }
    function Uf() {
        this.$get = ma(B)
    }
    function Od(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var d = a[0] || {}
            , c = {}
            , e = "";
        return function () {
            var a, g, h, k, l;
            a = d.cookie || "";
            if (a !== e)
                for (e = a,
                    a = e.split("; "),
                    c = {},
                    h = 0; h < a.length; h++)
                    g = a[h],
                        k = g.indexOf("="),
                        0 < k && (l = b(g.substring(0, k)),
                            z(c[l]) && (c[l] = b(g.substring(k + 1))));
            return c
        }
    }
    function Yf() {
        this.$get = Od
    }
    function Tc(a) {
        function b(d, c) {
            if (I(d)) {
                var e = {};
                q(d, function (a, c) {
                    e[c] = b(c, a)
                });
                return e
            }
            return a.factory(d + "Filter", c)
        }
        this.register = b;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }
        ];
        b("currency", Pd);
        b("date", Qd);
        b("filter", Jg);
        b("json", Kg);
        b("limitTo", Lg);
        b("lowercase", Mg);
        b("number", Rd);
        b("orderBy", Sd);
        b("uppercase", Ng)
    }
    function Jg() {
        return function (a, b, d, c) {
            if (!ra(a)) {
                if (null == a)
                    return a;
                throw N("filter")("notarray", a);
            }
            c = c || "$";
            var e;
            switch (qc(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    e = !0;
                case "object":
                    b = Og(b, d, c, e);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }
    function Og(a, b, d, c) {
        var e = I(a) && d in a;
        !0 === b ? b = oa : F(b) || (b = function (a, b) {
            if (z(a))
                return !1;
            if (null === a || null === b)
                return a === b;
            if (I(b) || I(a) && !Cc(a))
                return !1;
            a = P("" + a);
            b = P("" + b);
            return -1 !== a.indexOf(b)
        }
        );
        return function (f) {
            return e && !I(f) ? La(f, a[d], b, d, !1) : La(f, a, b, d, c)
        }
    }
    function La(a, b, d, c, e, f) {
        var g = qc(a)
            , h = qc(b);
        if ("string" === h && "!" === b.charAt(0))
            return !La(a, b.substring(1), d, c, e);
        if (K(a))
            return a.some(function (a) {
                return La(a, b, d, c, e)
            });
        switch (g) {
            case "object":
                var k;
                if (e) {
                    for (k in a)
                        if ("$" !== k.charAt(0) && La(a[k], b, d, c, !0))
                            return !0;
                    return f ? !1 : La(a, b, d, c, !1)
                }
                if ("object" === h) {
                    for (k in b)
                        if (f = b[k],
                            !F(f) && !z(f) && (g = k === c,
                                !La(g ? a : a[k], f, d, c, g, g)))
                            return !1;
                    return !0
                }
                return d(a, b);
            case "function":
                return !1;
            default:
                return d(a, b)
        }
    }
    function qc(a) {
        return null === a ? "null" : typeof a
    }
    function Pd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, e) {
            z(c) && (c = b.CURRENCY_SYM);
            z(e) && (e = b.PATTERNS[1].maxFrac);
            return null == a ? a : Td(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c)
        }
    }
    function Rd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Td(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }
    function Pg(a) {
        var b = 0, d, c, e, f, g;
        -1 < (c = a.indexOf(Ud)) && (a = a.replace(Ud, ""));
        0 < (e = a.search(/e/i)) ? (0 > c && (c = e),
            c += +a.slice(e + 1),
            a = a.substring(0, e)) : 0 > c && (c = a.length);
        for (e = 0; a.charAt(e) === rc; e++)
            ;
        if (e === (g = a.length))
            d = [0],
                c = 1;
        else {
            for (g--; a.charAt(g) === rc;)
                g--;
            c -= e;
            d = [];
            for (f = 0; e <= g; e++,
                f++)
                d[f] = +a.charAt(e)
        }
        c > Vd && (d = d.splice(0, Vd - 1),
            b = c - 1,
            c = 1);
        return {
            d: d,
            e: b,
            i: c
        }
    }
    function Qg(a, b, d, c) {
        var e = a.d
            , f = e.length - a.i;
        b = z(b) ? Math.min(Math.max(d, f), c) : +b;
        d = b + a.i;
        c = e[d];
        if (0 < d) {
            e.splice(Math.max(a.i, d));
            for (var g = d; g < e.length; g++)
                e[g] = 0
        } else
            for (f = Math.max(0, f),
                a.i = 1,
                e.length = Math.max(1, d = b + 1),
                e[0] = 0,
                g = 1; g < d; g++)
                e[g] = 0;
        if (5 <= c)
            if (0 > d - 1) {
                for (c = 0; c > d; c--)
                    e.unshift(0),
                        a.i++;
                e.unshift(1);
                a.i++
            } else
                e[d - 1]++;
        for (; f < Math.max(0, b); f++)
            e.push(0);
        if (b = e.reduceRight(function (a, b, c, d) {
            b += a;
            d[c] = b % 10;
            return Math.floor(b / 10)
        }, 0))
            e.unshift(b),
                a.i++
    }
    function Td(a, b, d, c, e) {
        if (!H(a) && !Z(a) || isNaN(a))
            return "";
        var f = !isFinite(a)
            , g = !1
            , h = Math.abs(a) + ""
            , k = "";
        if (f)
            k = "\u221e";
        else {
            g = Pg(h);
            Qg(g, e, b.minFrac, b.maxFrac);
            k = g.d;
            h = g.i;
            e = g.e;
            f = [];
            for (g = k.reduce(function (a, b) {
                return a && !b
            }, !0); 0 > h;)
                k.unshift(0),
                    h++;
            0 < h ? f = k.splice(h, k.length) : (f = k,
                k = [0]);
            h = [];
            for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;)
                h.unshift(k.splice(-b.gSize, k.length).join(""));
            k.length && h.unshift(k.join(""));
            k = h.join(d);
            f.length && (k += c + f.join(""));
            e && (k += "e+" + e)
        }
        return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf
    }
    function Nb(a, b, d, c) {
        var e = "";
        if (0 > a || c && 0 >= a)
            c ? a = -a + 1 : (a = -a,
                e = "-");
        for (a = "" + a; a.length < b;)
            a = rc + a;
        d && (a = a.substr(a.length - b));
        return e + a
    }
    function Y(a, b, d, c, e) {
        d = d || 0;
        return function (f) {
            f = f["get" + a]();
            if (0 < d || f > -d)
                f += d;
            0 === f && -12 === d && (f = 12);
            return Nb(f, b, c, e)
        }
    }
    function nb(a, b, d) {
        return function (c, e) {
            var f = c["get" + a]()
                , g = xb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
            return e[g][f]
        }
    }
    function Wd(a) {
        var b = (new Date(a, 0, 1)).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }
    function Xd(a) {
        return function (b) {
            var d = Wd(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
            b = 1 + Math.round(b / 6048E5);
            return Nb(b, a)
        }
    }
    function sc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
    }
    function Qd(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var f = 0
                    , g = 0
                    , h = b[8] ? a.setUTCFullYear : a.setFullYear
                    , k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = aa(b[9] + b[10]),
                    g = aa(b[9] + b[11]));
                h.call(a, aa(b[1]), aa(b[2]) - 1, aa(b[3]));
                f = aa(b[4] || 0) - f;
                g = aa(b[5] || 0) - g;
                h = aa(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, f, g, h, b)
            }
            return a
        }
        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, f) {
            var g = "", h = [], k, l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            H(c) && (c = Rg.test(c) ? aa(c) : b(c));
            Z(c) && (c = new Date(c));
            if (!ba(c) || !isFinite(c.getTime()))
                return c;
            for (; d;)
                (l = Sg.exec(d)) ? (h = bb(h, l, 1),
                    d = h.pop()) : (h.push(d),
                        d = null);
            var m = c.getTimezoneOffset();
            f && (m = Fc(f, m),
                c = Vb(c, f, !0));
            q(h, function (b) {
                k = Tg[b];
                g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }
    function Kg() {
        return function (a, b) {
            z(b) && (b = 2);
            return db(a, b)
        }
    }
    function Lg() {
        return function (a, b, d) {
            b = Infinity === Math.abs(Number(b)) ? Number(b) : aa(b);
            if (X(b))
                return a;
            Z(a) && (a = a.toString());
            if (!ra(a))
                return a;
            d = !d || isNaN(d) ? 0 : aa(d);
            d = 0 > d ? Math.max(0, a.length + d) : d;
            return 0 <= b ? tc(a, d, d + b) : 0 === d ? tc(a, b, a.length) : tc(a, Math.max(0, d + b), d)
        }
    }
    function tc(a, b, d) {
        return H(a) ? a.slice(b, d) : ta.call(a, b, d)
    }
    function Sd(a) {
        function b(b) {
            return b.map(function (b) {
                var c = 1
                    , d = Za;
                if (F(b))
                    d = b;
                else if (H(b)) {
                    if ("+" === b.charAt(0) || "-" === b.charAt(0))
                        c = "-" === b.charAt(0) ? -1 : 1,
                            b = b.substring(1);
                    if ("" !== b && (d = a(b),
                        d.constant))
                        var e = d()
                            , d = function (a) {
                                return a[e]
                            }
                }
                return {
                    get: d,
                    descending: c
                }
            })
        }
        function d(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }
        function c(a, b) {
            var c = 0
                , d = a.type
                , k = b.type;
            if (d === k) {
                var k = a.value
                    , l = b.value;
                "string" === d ? (k = k.toLowerCase(),
                    l = l.toLowerCase()) : "object" === d && (I(k) && (k = a.index),
                        I(l) && (l = b.index));
                k !== l && (c = k < l ? -1 : 1)
            } else
                c = d < k ? -1 : 1;
            return c
        }
        return function (a, f, g, h) {
            if (null == a)
                return a;
            if (!ra(a))
                throw N("orderBy")("notarray", a);
            K(f) || (f = [f]);
            0 === f.length && (f = ["+"]);
            var k = b(f)
                , l = g ? -1 : 1
                , m = F(h) ? h : c;
            a = Array.prototype.map.call(a, function (a, b) {
                return {
                    value: a,
                    tieBreaker: {
                        value: b,
                        type: "number",
                        index: b
                    },
                    predicateValues: k.map(function (c) {
                        var e = c.get(a);
                        c = typeof e;
                        if (null === e)
                            c = "string",
                                e = "null";
                        else if ("object" === c)
                            a: {
                                if (F(e.valueOf) && (e = e.valueOf(),
                                    d(e)))
                                    break a;
                                Cc(e) && (e = e.toString(),
                                    d(e))
                            }
                        return {
                            value: e,
                            type: c,
                            index: b
                        }
                    })
                }
            });
            a.sort(function (a, b) {
                for (var c = 0, d = k.length; c < d; c++) {
                    var e = m(a.predicateValues[c], b.predicateValues[c]);
                    if (e)
                        return e * k[c].descending * l
                }
                return m(a.tieBreaker, b.tieBreaker) * l
            });
            return a = a.map(function (a) {
                return a.value
            })
        }
    }
    function Ua(a) {
        F(a) && (a = {
            link: a
        });
        a.restrict = a.restrict || "AC";
        return ma(a)
    }
    function Yd(a, b, d, c, e) {
        var f = this
            , g = [];
        f.$error = {};
        f.$$success = {};
        f.$pending = void 0;
        f.$name = e(b.name || b.ngForm || "")(d);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        f.$$parentForm = Ob;
        f.$rollbackViewValue = function () {
            q(g, function (a) {
                a.$rollbackViewValue()
            })
        }
            ;
        f.$commitViewValue = function () {
            q(g, function (a) {
                a.$commitViewValue()
            })
        }
            ;
        f.$addControl = function (a) {
            Qa(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a);
            a.$$parentForm = f
        }
            ;
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        }
            ;
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            q(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            });
            q(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            q(f.$$success, function (b, c) {
                f.$setValidity(c, null, a)
            });
            ab(g, a);
            a.$$parentForm = Ob
        }
            ;
        Zd({
            ctrl: this,
            $element: a,
            set: function (a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            },
            unset: function (a, b, c) {
                var d = a[b];
                d && (ab(d, c),
                    0 === d.length && delete a[b])
            },
            $animate: c
        });
        f.$setDirty = function () {
            c.removeClass(a, Va);
            c.addClass(a, Pb);
            f.$dirty = !0;
            f.$pristine = !1;
            f.$$parentForm.$setDirty()
        }
            ;
        f.$setPristine = function () {
            c.setClass(a, Va, Pb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            q(g, function (a) {
                a.$setPristine()
            })
        }
            ;
        f.$setUntouched = function () {
            q(g, function (a) {
                a.$setUntouched()
            })
        }
            ;
        f.$setSubmitted = function () {
            c.addClass(a, "ng-submitted");
            f.$submitted = !0;
            f.$$parentForm.$setSubmitted()
        }
    }
    function uc(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }
    function Wa(a, b, d, c, e, f) {
        var g = P(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function () {
                h = !0
            });
            b.on("compositionend", function () {
                h = !1;
                l()
            })
        }
        var k, l = function (a) {
            k && (f.defer.cancel(k),
                k = null);
            if (!h) {
                var e = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim || (e = U(e));
                (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input"))
            b.on("input", l);
        else {
            var m = function (a, b, c) {
                k || (k = f.defer(function () {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (e.hasEvent("paste"))
                b.on("paste cut", m)
        }
        b.on("change", l);
        if ($d[g] && c.$$hasNativeValidators && g === d.type)
            b.on("keydown wheel mousedown", function (a) {
                if (!k) {
                    var b = this.validity
                        , c = b.badInput
                        , d = b.typeMismatch;
                    k = f.defer(function () {
                        k = null;
                        b.badInput === c && b.typeMismatch === d || l(a)
                    })
                }
            });
        c.$render = function () {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a)
        }
    }
    function Qb(a, b) {
        return function (d, c) {
            var e, f;
            if (ba(d))
                return d;
            if (H(d)) {
                '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (Ug.test(d))
                    return new Date(d);
                a.lastIndex = 0;
                if (e = a.exec(d))
                    return e.shift(),
                        f = c ? {
                            yyyy: c.getFullYear(),
                            MM: c.getMonth() + 1,
                            dd: c.getDate(),
                            HH: c.getHours(),
                            mm: c.getMinutes(),
                            ss: c.getSeconds(),
                            sss: c.getMilliseconds() / 1E3
                        } : {
                                yyyy: 1970,
                                MM: 1,
                                dd: 1,
                                HH: 0,
                                mm: 0,
                                ss: 0,
                                sss: 0
                            },
                        q(e, function (a, c) {
                            c < b.length && (f[b[c]] = +a)
                        }),
                        new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }
    function ob(a, b, d, c) {
        return function (e, f, g, h, k, l, m) {
            function n(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }
            function p(a) {
                return u(a) && !ba(a) ? d(a) || void 0 : a
            }
            vc(e, f, g, h);
            Wa(e, f, g, h, k, l);
            var x = h && h.$options && h.$options.timezone, q;
            h.$$parserName = a;
            h.$parsers.push(function (a) {
                if (h.$isEmpty(a))
                    return null;
                if (b.test(a))
                    return a = d(a, q),
                        x && (a = Vb(a, x)),
                        a
            });
            h.$formatters.push(function (a) {
                if (a && !ba(a))
                    throw pb("datefmt", a);
                if (n(a))
                    return (q = a) && x && (q = Vb(q, x, !0)),
                        m("date")(a, c, x);
                q = null;
                return ""
            });
            if (u(g.min) || g.ngMin) {
                var t;
                h.$validators.min = function (a) {
                    return !n(a) || z(t) || d(a) >= t
                }
                    ;
                g.$observe("min", function (a) {
                    t = p(a);
                    h.$validate()
                })
            }
            if (u(g.max) || g.ngMax) {
                var s;
                h.$validators.max = function (a) {
                    return !n(a) || z(s) || d(a) <= s
                }
                    ;
                g.$observe("max", function (a) {
                    s = p(a);
                    h.$validate()
                })
            }
        }
    }
    function vc(a, b, d, c) {
        (c.$$hasNativeValidators = I(b[0].validity)) && c.$parsers.push(function (a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? void 0 : a
        })
    }
    function ae(a) {
        a.$$parserName = "number";
        a.$parsers.push(function (b) {
            if (a.$isEmpty(b))
                return null;
            if (Vg.test(b))
                return parseFloat(b)
        });
        a.$formatters.push(function (b) {
            if (!a.$isEmpty(b)) {
                if (!Z(b))
                    throw pb("numfmt", b);
                b = b.toString()
            }
            return b
        })
    }
    function qb(a) {
        u(a) && !Z(a) && (a = parseFloat(a));
        return X(a) ? void 0 : a
    }
    function wc(a) {
        var b = a.toString()
            , d = b.indexOf(".");
        return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1
    }
    function be(a, b, d, c, e) {
        if (u(c)) {
            a = a(c);
            if (!a.constant)
                throw pb("constexpr", d, c);
            return a(b)
        }
        return e
    }
    function xc(a, b) {
        a = "ngClass" + a;
        return ["$animate", function (d) {
            function c(a, b) {
                var c = []
                    , d = 0;
                a: for (; d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++)
                        if (e === b[m])
                            continue a;
                    c.push(e)
                }
                return c
            }
            function e(a) {
                var b = [];
                return K(a) ? (q(a, function (a) {
                    b = b.concat(e(a))
                }),
                    b) : H(a) ? a.split(" ") : I(a) ? (q(a, function (a, c) {
                        a && (b = b.concat(c.split(" ")))
                    }),
                        b) : a
            }
            return {
                restrict: "AC",
                link: function (f, g, h) {
                    function k(a) {
                        a = l(a, 1);
                        h.$addClass(a)
                    }
                    function l(a, b) {
                        var c = g.data("$classCounts") || S()
                            , d = [];
                        q(a, function (a) {
                            if (0 < b || c[a])
                                c[a] = (c[a] || 0) + b,
                                    c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }
                    function m(a, b) {
                        var e = c(b, a)
                            , f = c(a, b)
                            , e = l(e, 1)
                            , f = l(f, -1);
                        e && e.length && d.addClass(g, e);
                        f && f.length && d.removeClass(g, f)
                    }
                    function n(a) {
                        if (!0 === b || (f.$index & 1) === b) {
                            var c = e(a || []);
                            if (!p)
                                k(c);
                            else if (!oa(a, p)) {
                                var d = e(p);
                                m(d, c)
                            }
                        }
                        p = K(a) ? a.map(function (a) {
                            return ia(a)
                        }) : ia(a)
                    }
                    var p;
                    f.$watch(h[a], n, !0);
                    h.$observe("class", function (b) {
                        n(f.$eval(h[a]))
                    });
                    "ngClass" !== a && f.$watch("$index", function (c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var m = e(f.$eval(h[a]));
                            g === b ? k(m) : (g = l(m, -1),
                                h.$removeClass(g))
                        }
                    })
                }
            }
        }
        ]
    }
    function Zd(a) {
        function b(a, b) {
            b && !f[a] ? (k.addClass(e, a),
                f[a] = !0) : !b && f[a] && (k.removeClass(e, a),
                    f[a] = !1)
        }
        function d(a, c) {
            a = a ? "-" + Jc(a, "-") : "";
            b(rb + a, !0 === c);
            b(ce + a, !1 === c)
        }
        var c = a.ctrl
            , e = a.$element
            , f = {}
            , g = a.set
            , h = a.unset
            , k = a.$animate;
        f[ce] = !(f[rb] = e.hasClass(rb));
        c.$setValidity = function (a, e, f) {
            z(e) ? (c.$pending || (c.$pending = {}),
                g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f),
                    de(c.$pending) && (c.$pending = void 0));
            Ia(e) ? e ? (h(c.$error, a, f),
                g(c.$$success, a, f)) : (g(c.$error, a, f),
                    h(c.$$success, a, f)) : (h(c.$error, a, f),
                        h(c.$$success, a, f));
            c.$pending ? (b(ee, !0),
                c.$valid = c.$invalid = void 0,
                d("", null)) : (b(ee, !1),
                    c.$valid = de(c.$error),
                    c.$invalid = !c.$valid,
                    d("", c.$valid));
            e = c.$pending && c.$pending[a] ? void 0 : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
            d(a, e);
            c.$$parentForm.$setValidity(a, e, c)
        }
    }
    function de(a) {
        if (a)
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !1;
        return !0
    }
    var Wg = /^\/(.+)\/([a-z]*)$/, sa = Object.prototype.hasOwnProperty, P = function (a) {
        return H(a) ? a.toLowerCase() : a
    }, xb = function (a) {
        return H(a) ? a.toUpperCase() : a
    }, Fa, E, xa, ta = [].slice, pg = [].splice, Xg = [].push, na = Object.prototype.toString, Dc = Object.getPrototypeOf, va = N("ng"), ga = B.angular || (B.angular = {}), Xb, sb = 0;
    Fa = B.document.documentMode;
    var X = Number.isNaN || function (a) {
        return a !== a
    }
        ;
    C.$inject = [];
    Za.$inject = [];
    var K = Array.isArray
        , pe = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/
        , U = function (a) {
            return H(a) ? a.trim() : a
        }
        , Ld = function (a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }
        , ya = function () {
            if (!u(ya.rules)) {
                var a = B.document.querySelector("[ng-csp]") || B.document.querySelector("[data-ng-csp]");
                if (a) {
                    var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                    ya.rules = {
                        noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                        noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                    }
                } else {
                    a = ya;
                    try {
                        new Function(""),
                            b = !1
                    } catch (d) {
                        b = !0
                    }
                    a.rules = {
                        noUnsafeEval: b,
                        noInlineStyle: !1
                    }
                }
            }
            return ya.rules
        }
        , ub = function () {
            if (u(ub.name_))
                return ub.name_;
            var a, b, d = Na.length, c, e;
            for (b = 0; b < d; ++b)
                if (c = Na[b],
                    a = B.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
                    e = a.getAttribute(c + "jq");
                    break
                }
            return ub.name_ = e
        }
        , se = /:/g
        , Na = ["ng-", "data-ng-", "ng:", "x-ng-"]
        , ve = function (a) {
            if (!a.currentScript)
                return !0;
            var b = a.currentScript.getAttribute("src")
                , d = a.createElement("a");
            d.href = b;
            b = d.protocol;
            if (a.location.protocol === b)
                return !0;
            switch (b) {
                case "http:":
                case "https:":
                case "ftp:":
                case "blob:":
                case "file:":
                case "data:":
                    return !0;
                default:
                    return !1
            }
        }(B.document)
        , ye = /[A-Z]/g
        , Kc = !1
        , Ma = 3
        , Ce = {
            full: "1.5.9",
            major: 1,
            minor: 5,
            dot: 9,
            codeName: "timeturning-lockdown"
        };
    T.expando = "ng339";
    var hb = T.cache = {}
        , dg = 1;
    T._data = function (a) {
        return this.cache[a[this.expando]] || {}
    }
        ;
    var Zf = /([:\-_]+(.))/g
        , $f = /^moz([A-Z])/
        , Bb = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        }
        , Zb = N("jqLite")
        , cg = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
        , Yb = /<|&#?\w+;/
        , ag = /<([\w:-]+)/
        , bg = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
        , ja = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ja.optgroup = ja.option;
    ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;
    ja.th = ja.td;
    var ig = B.Node.prototype.contains || function (a) {
        return !!(this.compareDocumentPosition(a) & 16)
    }
        , Oa = T.prototype = {
            ready: function (a) {
                function b() {
                    d || (d = !0,
                        a())
                }
                var d = !1;
                "complete" === B.document.readyState ? B.setTimeout(b) : (this.on("DOMContentLoaded", b),
                    T(B).on("load", b))
            },
            toString: function () {
                var a = [];
                q(this, function (b) {
                    a.push("" + b)
                });
                return "[" + a.join(", ") + "]"
            },
            eq: function (a) {
                return 0 <= a ? E(this[a]) : E(this[this.length + a])
            },
            length: 0,
            push: Xg,
            sort: [].sort,
            splice: [].splice
        }
        , Hb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
        Hb[P(a)] = a
    });
    var bd = {};
    q("input select option textarea button form details".split(" "), function (a) {
        bd[a] = !0
    });
    var jd = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    q({
        data: ac,
        removeData: gb,
        hasData: function (a) {
            for (var b in hb[a.ng339])
                return !0;
            return !1
        },
        cleanData: function (a) {
            for (var b = 0, d = a.length; b < d; b++)
                gb(a[b])
        }
    }, function (a, b) {
        T[b] = a
    });
    q({
        data: ac,
        inheritedData: Fb,
        scope: function (a) {
            return E.data(a, "$scope") || Fb(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function (a) {
            return E.data(a, "$isolateScope") || E.data(a, "$isolateScopeNoTemplate")
        },
        controller: Zc,
        injector: function (a) {
            return Fb(a, "$injector")
        },
        removeAttr: function (a, b) {
            a.removeAttribute(b)
        },
        hasClass: Cb,
        css: function (a, b, d) {
            b = fb(b);
            if (u(d))
                a.style[b] = d;
            else
                return a.style[b]
        },
        attr: function (a, b, d) {
            var c = a.nodeType;
            if (c !== Ma && 2 !== c && 8 !== c)
                if (c = P(b),
                    Hb[c])
                    if (u(d))
                        d ? (a[b] = !0,
                            a.setAttribute(b, c)) : (a[b] = !1,
                                a.removeAttribute(c));
                    else
                        return a[b] || (a.attributes.getNamedItem(b) || C).specified ? c : void 0;
                else if (u(d))
                    a.setAttribute(b, d);
                else if (a.getAttribute)
                    return a = a.getAttribute(b, 2),
                        null === a ? void 0 : a
        },
        prop: function (a, b, d) {
            if (u(d))
                a[b] = d;
            else
                return a[b]
        },
        text: function () {
            function a(a, d) {
                if (z(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Ma ? a.textContent : ""
                }
                a.textContent = d
            }
            a.$dv = "";
            return a
        }(),
        val: function (a, b) {
            if (z(b)) {
                if (a.multiple && "select" === ua(a)) {
                    var d = [];
                    q(a.options, function (a) {
                        a.selected && d.push(a.value || a.text)
                    });
                    return 0 === d.length ? null : d
                }
                return a.value
            }
            a.value = b
        },
        html: function (a, b) {
            if (z(b))
                return a.innerHTML;
            zb(a, !0);
            a.innerHTML = b
        },
        empty: $c
    }, function (a, b) {
        T.prototype[b] = function (b, c) {
            var e, f, g = this.length;
            if (a !== $c && z(2 === a.length && a !== Cb && a !== Zc ? b : c)) {
                if (I(b)) {
                    for (e = 0; e < g; e++)
                        if (a === ac)
                            a(this[e], b);
                        else
                            for (f in b)
                                a(this[e], f, b[f]);
                    return this
                }
                e = a.$dv;
                g = z(e) ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = a(this[f], b, c);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++)
                a(this[e], b, c);
            return this
        }
    });
    q({
        removeData: gb,
        on: function (a, b, d, c) {
            if (u(c))
                throw Zb("onargs");
            if (Uc(a)) {
                c = Ab(a, !0);
                var e = c.events
                    , f = c.handle;
                f || (f = c.handle = fg(a, e));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, h = function (b, c, g) {
                    var h = e[b];
                    h || (h = e[b] = [],
                        h.specialHandlerWrapper = c,
                        "$destroy" === b || g || a.addEventListener(b, f, !1));
                    h.push(d)
                }; g--;)
                    b = c[g],
                        Bb[b] ? (h(Bb[b], hg),
                            h(b, void 0, !0)) : h(b)
            }
        },
        off: Yc,
        one: function (a, b, d) {
            a = E(a);
            a.on(b, function e() {
                a.off(b, d);
                a.off(b, e)
            });
            a.on(b, d)
        },
        replaceWith: function (a, b) {
            var d, c = a.parentNode;
            zb(a);
            q(new T(b), function (b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b
            })
        },
        children: function (a) {
            var b = [];
            q(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            });
            return b
        },
        contents: function (a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function (a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new T(b);
                for (var d = 0, c = b.length; d < c; d++)
                    a.appendChild(b[d])
            }
        },
        prepend: function (a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                q(new T(b), function (b) {
                    a.insertBefore(b, d)
                })
            }
        },
        wrap: function (a, b) {
            Wc(a, E(b).eq(0).clone()[0])
        },
        remove: Gb,
        detach: function (a) {
            Gb(a, !0)
        },
        after: function (a, b) {
            var d = a
                , c = a.parentNode;
            b = new T(b);
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e];
                c.insertBefore(g, d.nextSibling);
                d = g
            }
        },
        addClass: Eb,
        removeClass: Db,
        toggleClass: function (a, b, d) {
            b && q(b.split(" "), function (b) {
                var e = d;
                z(e) && (e = !Cb(a, b));
                (e ? Eb : Db)(a, b)
            })
        },
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function (a) {
            return a.nextElementSibling
        },
        find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: $b,
        triggerHandler: function (a, b, d) {
            var c, e, f = b.type || b, g = Ab(a);
            if (g = (g = g && g.events) && g[f])
                c = {
                    preventDefault: function () {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function () {
                        return !0 === this.defaultPrevented
                    },
                    stopImmediatePropagation: function () {
                        this.immediatePropagationStopped = !0
                    },
                    isImmediatePropagationStopped: function () {
                        return !0 === this.immediatePropagationStopped
                    },
                    stopPropagation: C,
                    type: f,
                    target: a
                },
                    b.type && (c = R(c, b)),
                    b = ia(g),
                    e = d ? [c].concat(d) : [c],
                    q(b, function (b) {
                        c.isImmediatePropagationStopped() || b.apply(a, e)
                    })
        }
    }, function (a, b) {
        T.prototype[b] = function (b, c, e) {
            for (var f, g = 0, h = this.length; g < h; g++)
                z(f) ? (f = a(this[g], b, c, e),
                    u(f) && (f = E(f))) : Xc(f, a(this[g], b, c, e));
            return u(f) ? f : this
        }
            ;
        T.prototype.bind = T.prototype.on;
        T.prototype.unbind = T.prototype.off
    });
    Ra.prototype = {
        put: function (a, b) {
            this[za(a, this.nextUid)] = b
        },
        get: function (a) {
            return this[za(a, this.nextUid)]
        },
        remove: function (a) {
            var b = this[a = za(a, this.nextUid)];
            delete this[a];
            return b
        }
    };
    var Xf = [function () {
        this.$get = [function () {
            return Ra
        }
        ]
    }
    ]
        , kg = /^([^\(]+?)=>/
        , lg = /^[^\(]*\(\s*([^\)]*)\)/m
        , Yg = /,/
        , Zg = /^\s*(_?)(\S+?)\1\s*$/
        , jg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
        , Da = N("$injector");
    eb.$$annotate = function (a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b)
                        throw H(d) && d || (d = a.name || mg(a)),
                        Da("strictdi", d);
                    b = cd(a);
                    q(b[1].split(Yg), function (a) {
                        a.replace(Zg, function (a, b, d) {
                            c.push(d)
                        })
                    })
                }
                a.$inject = c
            }
        } else
            K(a) ? (b = a.length - 1,
                Pa(a[b], "fn"),
                c = a.slice(0, b)) : Pa(a, "fn", !0);
        return c
    }
        ;
    var fe = N("$animate")
        , pf = function () {
            this.$get = C
        }
        , qf = function () {
            var a = new Ra
                , b = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
                function e(a, b, c) {
                    var d = !1;
                    b && (b = H(b) ? b.split(" ") : K(b) ? b : [],
                        q(b, function (b) {
                            b && (d = !0,
                                a[b] = c)
                        }));
                    return d
                }
                function f() {
                    q(b, function (b) {
                        var c = a.get(b);
                        if (c) {
                            var d = ng(b.attr("class"))
                                , e = ""
                                , f = "";
                            q(c, function (a, b) {
                                a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
                            });
                            q(b, function (a) {
                                e && Eb(a, e);
                                f && Db(a, f)
                            });
                            a.remove(b)
                        }
                    });
                    b.length = 0
                }
                return {
                    enabled: C,
                    on: C,
                    off: C,
                    pin: C,
                    push: function (g, h, k, l) {
                        l && l();
                        k = k || {};
                        k.from && g.css(k.from);
                        k.to && g.css(k.to);
                        if (k.addClass || k.removeClass)
                            if (h = k.addClass,
                                l = k.removeClass,
                                k = a.get(g) || {},
                                h = e(k, h, !0),
                                l = e(k, l, !1),
                                h || l)
                                a.put(g, k),
                                    b.push(g),
                                    1 === b.length && c.$$postDigest(f);
                        g = new d;
                        g.complete();
                        return g
                    }
                }
            }
            ]
        }
        , nf = ["$provide", function (a) {
            var b = this;
            this.$$registeredAnimations = Object.create(null);
            this.register = function (d, c) {
                if (d && "." !== d.charAt(0))
                    throw fe("notcsel", d);
                var e = d + "-animation";
                b.$$registeredAnimations[d.substr(1)] = e;
                a.factory(e, c)
            }
                ;
            this.classNameFilter = function (a) {
                if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))
                    throw fe("nongcls", "ng-animate");
                return this.$$classNameFilter
            }
                ;
            this.$get = ["$$animateQueue", function (a) {
                function b(a, c, d) {
                    if (d) {
                        var h;
                        a: {
                            for (h = 0; h < d.length; h++) {
                                var k = d[h];
                                if (1 === k.nodeType) {
                                    h = k;
                                    break a
                                }
                            }
                            h = void 0
                        }
                        !h || h.parentNode || h.previousElementSibling || (d = null)
                    }
                    d ? d.after(a) : c.prepend(a)
                }
                return {
                    on: a.on,
                    off: a.off,
                    pin: a.pin,
                    enabled: a.enabled,
                    cancel: function (a) {
                        a.end && a.end()
                    },
                    enter: function (e, f, g, h) {
                        f = f && E(f);
                        g = g && E(g);
                        f = f || g.parent();
                        b(e, f, g);
                        return a.push(e, "enter", Ea(h))
                    },
                    move: function (e, f, g, h) {
                        f = f && E(f);
                        g = g && E(g);
                        f = f || g.parent();
                        b(e, f, g);
                        return a.push(e, "move", Ea(h))
                    },
                    leave: function (b, c) {
                        return a.push(b, "leave", Ea(c), function () {
                            b.remove()
                        })
                    },
                    addClass: function (b, c, g) {
                        g = Ea(g);
                        g.addClass = jb(g.addclass, c);
                        return a.push(b, "addClass", g)
                    },
                    removeClass: function (b, c, g) {
                        g = Ea(g);
                        g.removeClass = jb(g.removeClass, c);
                        return a.push(b, "removeClass", g)
                    },
                    setClass: function (b, c, g, h) {
                        h = Ea(h);
                        h.addClass = jb(h.addClass, c);
                        h.removeClass = jb(h.removeClass, g);
                        return a.push(b, "setClass", h)
                    },
                    animate: function (b, c, g, h, k) {
                        k = Ea(k);
                        k.from = k.from ? R(k.from, c) : c;
                        k.to = k.to ? R(k.to, g) : g;
                        k.tempClasses = jb(k.tempClasses, h || "ng-inline-animate");
                        return a.push(b, "animate", k)
                    }
                }
            }
            ]
        }
        ]
        , sf = function () {
            this.$get = ["$$rAF", function (a) {
                function b(b) {
                    d.push(b);
                    1 < d.length || a(function () {
                        for (var a = 0; a < d.length; a++)
                            d[a]();
                        d = []
                    })
                }
                var d = [];
                return function () {
                    var a = !1;
                    b(function () {
                        a = !0
                    });
                    return function (d) {
                        a ? d() : b(d)
                    }
                }
            }
            ]
        }
        , rf = function () {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
                function f(a) {
                    this.setHost(a);
                    var b = d();
                    this._doneCallbacks = [];
                    this._tick = function (a) {
                        var d = c[0];
                        d && d.hidden ? e(a, 0, !1) : b(a)
                    }
                        ;
                    this._state = 0
                }
                f.chain = function (a, b) {
                    function c() {
                        if (d === a.length)
                            b(!0);
                        else
                            a[d](function (a) {
                                !1 === a ? b(!1) : (d++,
                                    c())
                            })
                    }
                    var d = 0;
                    c()
                }
                    ;
                f.all = function (a, b) {
                    function c(f) {
                        e = e && f;
                        ++d === a.length && b(e)
                    }
                    var d = 0
                        , e = !0;
                    q(a, function (a) {
                        a.done(c)
                    })
                }
                    ;
                f.prototype = {
                    setHost: function (a) {
                        this.host = a || {}
                    },
                    done: function (a) {
                        2 === this._state ? a() : this._doneCallbacks.push(a)
                    },
                    progress: C,
                    getPromise: function () {
                        if (!this.promise) {
                            var b = this;
                            this.promise = a(function (a, c) {
                                b.done(function (b) {
                                    !1 === b ? c() : a()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function (a, b) {
                        return this.getPromise().then(a, b)
                    },
                    "catch": function (a) {
                        return this.getPromise()["catch"](a)
                    },
                    "finally": function (a) {
                        return this.getPromise()["finally"](a)
                    },
                    pause: function () {
                        this.host.pause && this.host.pause()
                    },
                    resume: function () {
                        this.host.resume && this.host.resume()
                    },
                    end: function () {
                        this.host.end && this.host.end();
                        this._resolve(!0)
                    },
                    cancel: function () {
                        this.host.cancel && this.host.cancel();
                        this._resolve(!1)
                    },
                    complete: function (a) {
                        var b = this;
                        0 === b._state && (b._state = 1,
                            b._tick(function () {
                                b._resolve(a)
                            }))
                    },
                    _resolve: function (a) {
                        2 !== this._state && (q(this._doneCallbacks, function (b) {
                            b(a)
                        }),
                            this._doneCallbacks.length = 0,
                            this._state = 2)
                    }
                };
                return f
            }
            ]
        }
        , of = function () {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
                return function (b, e) {
                    function f() {
                        a(function () {
                            g.addClass && (b.addClass(g.addClass),
                                g.addClass = null);
                            g.removeClass && (b.removeClass(g.removeClass),
                                g.removeClass = null);
                            g.to && (b.css(g.to),
                                g.to = null);
                            h || k.complete();
                            h = !0
                        });
                        return k
                    }
                    var g = e || {};
                    g.$$prepared || (g = pa(g));
                    g.cleanupStyles && (g.from = g.to = null);
                    g.from && (b.css(g.from),
                        g.from = null);
                    var h, k = new d;
                    return {
                        start: f,
                        end: f
                    }
                }
            }
            ]
        }
        , da = N("$compile")
        , gc = new function () { }
        ;
    Mc.$inject = ["$provide", "$$sanitizeUriProvider"];
    Ib.prototype.isFirstChange = function () {
        return this.previousValue === gc
    }
        ;
    var ed = /^((?:x|data)[:\-_])/i
        , qg = N("$controller")
        , kd = /^(\S+)(\s+as\s+([\w$]+))?$/
        , yf = function () {
            this.$get = ["$document", function (a) {
                return function (b) {
                    b ? !b.nodeType && b instanceof E && (b = b[0]) : b = a[0].body;
                    return b.offsetWidth + 1
                }
            }
            ]
        }
        , ld = "application/json"
        , jc = {
            "Content-Type": ld + ";charset=utf-8"
        }
        , sg = /^\[|^\{(?!\{)/
        , tg = {
            "[": /]$/,
            "{": /}$/
        }
        , rg = /^\)\]\}',?\n/
        , $g = N("$http")
        , pd = function (a) {
            return function () {
                throw $g("legacy", a);
            }
        }
        , Ka = ga.$interpolateMinErr = N("$interpolate");
    Ka.throwNoconcat = function (a) {
        throw Ka("noconcat", a);
    }
        ;
    Ka.interr = function (a, b) {
        return Ka("interr", a, b.toString())
    }
        ;
    var Gf = function () {
        this.$get = ["$window", function (a) {
            function b(a) {
                var b = function (a) {
                    b.data = a;
                    b.called = !0
                };
                b.id = a;
                return b
            }
            var d = a.angular.callbacks
                , c = {};
            return {
                createCallback: function (a) {
                    a = "_" + (d.$$counter++).toString(36);
                    var f = "angular.callbacks." + a
                        , g = b(a);
                    c[f] = d[a] = g;
                    return f
                },
                wasCalled: function (a) {
                    return c[a].called
                },
                getResponse: function (a) {
                    return c[a].data
                },
                removeCallback: function (a) {
                    delete d[c[a].id];
                    delete c[a]
                }
            }
        }
        ]
    }
        , ah = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/
        , vg = {
            http: 80,
            https: 443,
            ftp: 21
        }
        , lb = N("$location")
        , wg = /^\s*[\\/]{2,}/
        , bh = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: Jb("$$absUrl"),
            url: function (a) {
                if (z(a))
                    return this.$$url;
                var b = ah.exec(a);
                (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
                (b[2] || b[1] || "" === a) && this.search(b[3] || "");
                this.hash(b[5] || "");
                return this
            },
            protocol: Jb("$$protocol"),
            host: Jb("$$host"),
            port: Jb("$$port"),
            path: ud("$$path", function (a) {
                a = null !== a ? a.toString() : "";
                return "/" === a.charAt(0) ? a : "/" + a
            }),
            search: function (a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (H(a) || Z(a))
                            a = a.toString(),
                                this.$$search = Hc(a);
                        else if (I(a))
                            a = pa(a, {}),
                                q(a, function (b, c) {
                                    null == b && delete a[c]
                                }),
                                this.$$search = a;
                        else
                            throw lb("isrcharg");
                        break;
                    default:
                        z(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                this.$$compose();
                return this
            },
            hash: ud("$$hash", function (a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function () {
                this.$$replace = !0;
                return this
            }
        };
    q([td, mc, lc], function (a) {
        a.prototype = Object.create(bh);
        a.prototype.state = function (b) {
            if (!arguments.length)
                return this.$$state;
            if (a !== lc || !this.$$html5)
                throw lb("nostate");
            this.$$state = z(b) ? null : b;
            return this
        }
    });
    var ea = N("$parse")
        , wd = [].constructor
        , xd = (!1).constructor
        , yd = Function.constructor
        , zd = (0).constructor
        , Ad = {}.constructor
        , Bd = "".constructor
        , Bg = wd.prototype
        , Cg = xd.prototype
        , Lb = yd.prototype
        , Dg = zd.prototype
        , Cd = Ad.prototype
        , Eg = Bd.prototype
        , yg = Lb.call
        , zg = Lb.apply
        , Ag = Lb.bind
        , Gg = Cd.valueOf
        , Rb = S();
    q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Rb[a] = !0
    });
    var ch = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "\t",
        v: "\v",
        "'": "'",
        '"': '"'
    }
        , oc = function (a) {
            this.options = a
        };
    oc.prototype = {
        constructor: oc,
        lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)
                if (a = this.text.charAt(this.index),
                    '"' === a || "'" === a)
                    this.readString(a);
                else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))
                    this.readNumber();
                else if (this.isIdentifierStart(this.peekMultichar()))
                    this.readIdent();
                else if (this.is(a, "(){}[].,;:?"))
                    this.tokens.push({
                        index: this.index,
                        text: a
                    }),
                        this.index++;
                else if (this.isWhitespace(a))
                    this.index++;
                else {
                    var b = a + this.peek()
                        , d = b + this.peek(2)
                        , c = Rb[b]
                        , e = Rb[d];
                    Rb[a] || c || e ? (a = e ? d : c ? b : a,
                        this.tokens.push({
                            index: this.index,
                            text: a,
                            operator: !0
                        }),
                        this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            return this.tokens
        },
        is: function (a, b) {
            return -1 !== b.indexOf(a)
        },
        peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        },
        isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdentifierStart: function (a) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a)
        },
        isValidIdentifierStart: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isIdentifierContinue: function (a) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a)
        },
        isValidIdentifierContinue: function (a, b) {
            return this.isValidIdentifierStart(a, b) || this.isNumber(a)
        },
        codePointAt: function (a) {
            return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888
        },
        peekMultichar: function () {
            var a = this.text.charAt(this.index)
                , b = this.peek();
            if (!b)
                return a;
            var d = a.charCodeAt(0)
                , c = b.charCodeAt(0);
            return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a
        },
        isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function (a, b, d) {
            d = d || this.index;
            b = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
            throw ea("lexerr", a, b, this.text);
        },
        readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = P(this.text.charAt(this.index));
                if ("." === d || this.isNumber(d))
                    a += d;
                else {
                    var c = this.peek();
                    if ("e" === d && this.isExpOperator(c))
                        a += d;
                    else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1))
                        a += d;
                    else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1))
                        break;
                    else
                        this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function () {
            var a = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var b = this.peekMultichar();
                if (!this.isIdentifierContinue(b))
                    break;
                this.index += b.length
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function (a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index)
                    , c = c + f;
                if (e)
                    "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5),
                        e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"),
                        this.index += 4,
                        d += String.fromCharCode(parseInt(e, 16))) : d += ch[f] || f,
                        e = !1;
                else if ("\\" === f)
                    e = !0;
                else {
                    if (f === a) {
                        this.index++;
                        this.tokens.push({
                            index: b,
                            text: c,
                            constant: !0,
                            value: d
                        });
                        return
                    }
                    d += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var r = function (a, b) {
        this.lexer = a;
        this.options = b
    };
    r.Program = "Program";
    r.ExpressionStatement = "ExpressionStatement";
    r.AssignmentExpression = "AssignmentExpression";
    r.ConditionalExpression = "ConditionalExpression";
    r.LogicalExpression = "LogicalExpression";
    r.BinaryExpression = "BinaryExpression";
    r.UnaryExpression = "UnaryExpression";
    r.CallExpression = "CallExpression";
    r.MemberExpression = "MemberExpression";
    r.Identifier = "Identifier";
    r.Literal = "Literal";
    r.ArrayExpression = "ArrayExpression";
    r.Property = "Property";
    r.ObjectExpression = "ObjectExpression";
    r.ThisExpression = "ThisExpression";
    r.LocalsExpression = "LocalsExpression";
    r.NGValueParameter = "NGValueParameter";
    r.prototype = {
        ast: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a
        },
        program: function () {
            for (var a = []; ;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()),
                    !this.expect(";"))
                    return {
                        type: r.Program,
                        body: a
                    }
        },
        expressionStatement: function () {
            return {
                type: r.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function () {
            for (var a = this.expression(); this.expect("|");)
                a = this.filter(a);
            return a
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary();
            this.expect("=") && (a = {
                type: r.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            });
            return a
        },
        ternary: function () {
            var a = this.logicalOR(), b, d;
            return this.expect("?") && (b = this.expression(),
                this.consume(":")) ? (d = this.expression(),
                {
                    type: r.ConditionalExpression,
                    test: a,
                    alternate: b,
                    consequent: d
                }) : a
        },
        logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");)
                a = {
                    type: r.LogicalExpression,
                    operator: "||",
                    left: a,
                    right: this.logicalAND()
                };
            return a
        },
        logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");)
                a = {
                    type: r.LogicalExpression,
                    operator: "&&",
                    left: a,
                    right: this.equality()
                };
            return a
        },
        equality: function () {
            for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");)
                a = {
                    type: r.BinaryExpression,
                    operator: b.text,
                    left: a,
                    right: this.relational()
                };
            return a
        },
        relational: function () {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");)
                a = {
                    type: r.BinaryExpression,
                    operator: b.text,
                    left: a,
                    right: this.additive()
                };
            return a
        },
        additive: function () {
            for (var a = this.multiplicative(), b; b = this.expect("+", "-");)
                a = {
                    type: r.BinaryExpression,
                    operator: b.text,
                    left: a,
                    right: this.multiplicative()
                };
            return a
        },
        multiplicative: function () {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%");)
                a = {
                    type: r.BinaryExpression,
                    operator: b.text,
                    left: a,
                    right: this.unary()
                };
            return a
        },
        unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: r.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(),
                this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                    type: r.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");)
                "(" === b.text ? (a = {
                    type: r.CallExpression,
                    callee: a,
                    arguments: this.parseArguments()
                },
                    this.consume(")")) : "[" === b.text ? (a = {
                        type: r.MemberExpression,
                        object: a,
                        property: this.expression(),
                        computed: !0
                    },
                        this.consume("]")) : "." === b.text ? a = {
                            type: r.MemberExpression,
                            object: a,
                            property: this.identifier(),
                            computed: !1
                        } : this.throwError("IMPOSSIBLE");
            return a
        },
        filter: function (a) {
            a = [a];
            for (var b = {
                type: r.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":");)
                a.push(this.expression());
            return b
        },
        parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text) {
                do
                    a.push(this.filterChain());
                while (this.expect(","))
            }
            return a
        },
        identifier: function () {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier", a);
            return {
                type: r.Identifier,
                name: a.text
            }
        },
        constant: function () {
            return {
                type: r.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]"))
                        break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {
                type: r.ArrayExpression,
                elements: a
            }
        },
        object: function () {
            var a = [], b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}"))
                        break;
                    b = {
                        type: r.Property,
                        kind: "init"
                    };
                    this.peek().constant ? (b.key = this.constant(),
                        b.computed = !1,
                        this.consume(":"),
                        b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(),
                            b.computed = !1,
                            this.peek(":") ? (this.consume(":"),
                                b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["),
                                    b.key = this.expression(),
                                    this.consume("]"),
                                    b.computed = !0,
                                    this.consume(":"),
                                    b.value = this.expression()) : this.throwError("invalid key", this.peek());
                    a.push(b)
                } while (this.expect(","))
            }
            this.consume("}");
            return {
                type: r.ObjectExpression,
                properties: a
            }
        },
        throwError: function (a, b) {
            throw ea("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        consume: function (a) {
            if (0 === this.tokens.length)
                throw ea("ueoe", this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return b
        },
        peekToken: function () {
            if (0 === this.tokens.length)
                throw ea("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function (a, b, d, c) {
            return this.peekAhead(0, a, b, d, c)
        },
        peekAhead: function (a, b, d, c, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === d || f === c || f === e || !(b || d || c || e))
                    return a
            }
            return !1
        },
        expect: function (a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(),
                a) : !1
        },
        selfReferential: {
            "this": {
                type: r.ThisExpression
            },
            $locals: {
                type: r.LocalsExpression
            }
        }
    };
    Id.prototype = {
        compile: function (a, b) {
            var d = this
                , c = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            };
            W(c, d.$filter);
            var e = "", f;
            this.stage = "assign";
            if (f = Gd(c))
                this.state.computing = "assign",
                    e = this.nextId(),
                    this.recurse(f, e),
                    this.return_(e),
                    e = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            f = Ed(c.body);
            d.stage = "inputs";
            q(f, function (a, b) {
                var c = "fn" + b;
                d.state[c] = {
                    vars: [],
                    body: [],
                    own: {}
                };
                d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e);
                d.return_(e);
                d.state.inputs.push(c);
                a.watchId = b
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(c);
            e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
            e = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e))(this.$filter, Ta, qa, vd, xg, Kb, Fg, Dd, a);
            this.state = this.stage = void 0;
            e.literal = Hd(c);
            e.constant = c.constant;
            return e
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function () {
            var a = []
                , b = this.state.inputs
                , d = this;
            q(b, function (b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"))
            });
            b.length && a.push("fn.inputs=[" + b.join(",") + "];");
            return a.join("")
        },
        generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        },
        filterPrefix: function () {
            var a = []
                , b = this;
            q(this.state.filters, function (d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")")
            });
            return a.length ? "var " + a.join(",") + ";" : ""
        },
        varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        },
        body: function (a) {
            return this.state[a].body.join("")
        },
        recurse: function (a, b, d, c, e, f) {
            var g, h, k = this, l, m, n;
            c = c || C;
            if (!f && u(a.watchId))
                b = b || this.nextId(),
                    this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));
            else
                switch (a.type) {
                    case r.Program:
                        q(a.body, function (b, c) {
                            k.recurse(b.expression, void 0, void 0, function (a) {
                                h = a
                            });
                            c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
                        });
                        break;
                    case r.Literal:
                        m = this.escape(a.value);
                        this.assign(b, m);
                        c(m);
                        break;
                    case r.UnaryExpression:
                        this.recurse(a.argument, void 0, void 0, function (a) {
                            h = a
                        });
                        m = a.operator + "(" + this.ifDefined(h, 0) + ")";
                        this.assign(b, m);
                        c(m);
                        break;
                    case r.BinaryExpression:
                        this.recurse(a.left, void 0, void 0, function (a) {
                            g = a
                        });
                        this.recurse(a.right, void 0, void 0, function (a) {
                            h = a
                        });
                        m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
                        this.assign(b, m);
                        c(m);
                        break;
                    case r.LogicalExpression:
                        b = b || this.nextId();
                        k.recurse(a.left, b);
                        k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                        c(b);
                        break;
                    case r.ConditionalExpression:
                        b = b || this.nextId();
                        k.recurse(a.test, b);
                        k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                        c(b);
                        break;
                    case r.Identifier:
                        b = b || this.nextId();
                        d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"),
                            d.computed = !1,
                            d.name = a.name);
                        Ta(a.name);
                        k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                            k.if_("inputs" === k.stage || "s", function () {
                                e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                                k.assign(b, k.nonComputedMember("s", a.name))
                            })
                        }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
                        (k.state.expensiveChecks || Mb(a.name)) && k.addEnsureSafeObject(b);
                        c(b);
                        break;
                    case r.MemberExpression:
                        g = d && (d.context = this.nextId()) || this.nextId();
                        b = b || this.nextId();
                        k.recurse(a.object, g, void 0, function () {
                            k.if_(k.notNull(g), function () {
                                e && 1 !== e && k.addEnsureSafeAssignContext(g);
                                if (a.computed)
                                    h = k.nextId(),
                                        k.recurse(a.property, h),
                                        k.getStringValue(h),
                                        k.addEnsureSafeMemberName(h),
                                        e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")),
                                        m = k.ensureSafeObject(k.computedMember(g, h)),
                                        k.assign(b, m),
                                        d && (d.computed = !0,
                                            d.name = h);
                                else {
                                    Ta(a.property.name);
                                    e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));
                                    m = k.nonComputedMember(g, a.property.name);
                                    if (k.state.expensiveChecks || Mb(a.property.name))
                                        m = k.ensureSafeObject(m);
                                    k.assign(b, m);
                                    d && (d.computed = !1,
                                        d.name = a.property.name)
                                }
                            }, function () {
                                k.assign(b, "undefined")
                            });
                            c(b)
                        }, !!e);
                        break;
                    case r.CallExpression:
                        b = b || this.nextId();
                        a.filter ? (h = k.filter(a.callee.name),
                            l = [],
                            q(a.arguments, function (a) {
                                var b = k.nextId();
                                k.recurse(a, b);
                                l.push(b)
                            }),
                            m = h + "(" + l.join(",") + ")",
                            k.assign(b, m),
                            c(b)) : (h = k.nextId(),
                                g = {},
                                l = [],
                                k.recurse(a.callee, h, g, function () {
                                    k.if_(k.notNull(h), function () {
                                        k.addEnsureSafeFunction(h);
                                        q(a.arguments, function (a) {
                                            k.recurse(a, k.nextId(), void 0, function (a) {
                                                l.push(k.ensureSafeObject(a))
                                            })
                                        });
                                        g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context),
                                            m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
                                        m = k.ensureSafeObject(m);
                                        k.assign(b, m)
                                    }, function () {
                                        k.assign(b, "undefined")
                                    });
                                    c(b)
                                }));
                        break;
                    case r.AssignmentExpression:
                        h = this.nextId();
                        g = {};
                        if (!Fd(a.left))
                            throw ea("lval");
                        this.recurse(a.left, void 0, g, function () {
                            k.if_(k.notNull(g.context), function () {
                                k.recurse(a.right, h);
                                k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
                                k.addEnsureSafeAssignContext(g.context);
                                m = k.member(g.context, g.name, g.computed) + a.operator + h;
                                k.assign(b, m);
                                c(b || m)
                            })
                        }, 1);
                        break;
                    case r.ArrayExpression:
                        l = [];
                        q(a.elements, function (a) {
                            k.recurse(a, k.nextId(), void 0, function (a) {
                                l.push(a)
                            })
                        });
                        m = "[" + l.join(",") + "]";
                        this.assign(b, m);
                        c(m);
                        break;
                    case r.ObjectExpression:
                        l = [];
                        n = !1;
                        q(a.properties, function (a) {
                            a.computed && (n = !0)
                        });
                        n ? (b = b || this.nextId(),
                            this.assign(b, "{}"),
                            q(a.properties, function (a) {
                                a.computed ? (g = k.nextId(),
                                    k.recurse(a.key, g)) : g = a.key.type === r.Identifier ? a.key.name : "" + a.key.value;
                                h = k.nextId();
                                k.recurse(a.value, h);
                                k.assign(k.member(b, g, a.computed), h)
                            })) : (q(a.properties, function (b) {
                                k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                                    l.push(k.escape(b.key.type === r.Identifier ? b.key.name : "" + b.key.value) + ":" + a)
                                })
                            }),
                                m = "{" + l.join(",") + "}",
                                this.assign(b, m));
                        c(b || m);
                        break;
                    case r.ThisExpression:
                        this.assign(b, "s");
                        c("s");
                        break;
                    case r.LocalsExpression:
                        this.assign(b, "l");
                        c("l");
                        break;
                    case r.NGValueParameter:
                        this.assign(b, "v"),
                            c("v")
                }
        },
        getHasOwnProperty: function (a, b) {
            var d = a + "." + b
                , c = this.current().own;
            c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
            return c[d]
        },
        assign: function (a, b) {
            if (a)
                return this.current().body.push(a, "=", b, ";"),
                    a
        },
        filter: function (a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
            return this.state.filters[a]
        },
        ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        },
        plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        },
        return_: function (a) {
            this.current().body.push("return ", a, ";")
        },
        if_: function (a, b, d) {
            if (!0 === a)
                b();
            else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"),
                    d(),
                    c.push("}"))
            }
        },
        not: function (a) {
            return "!(" + a + ")"
        },
        notNull: function (a) {
            return a + "!=null"
        },
        nonComputedMember: function (a, b) {
            var d = /[^$_a-zA-Z0-9]/g;
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
        },
        computedMember: function (a, b) {
            return a + "[" + b + "]"
        },
        member: function (a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        },
        addEnsureSafeObject: function (a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        },
        addEnsureSafeMemberName: function (a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        },
        addEnsureSafeFunction: function (a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        },
        addEnsureSafeAssignContext: function (a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        },
        ensureSafeObject: function (a) {
            return "ensureSafeObject(" + a + ",text)"
        },
        ensureSafeMemberName: function (a) {
            return "ensureSafeMemberName(" + a + ",text)"
        },
        ensureSafeFunction: function (a) {
            return "ensureSafeFunction(" + a + ",text)"
        },
        getStringValue: function (a) {
            this.assign(a, "getStringValue(" + a + ")")
        },
        ensureSafeAssignContext: function (a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        },
        lazyRecurse: function (a, b, d, c, e, f) {
            var g = this;
            return function () {
                g.recurse(a, b, d, c, e, f)
            }
        },
        lazyAssign: function (a, b) {
            var d = this;
            return function () {
                d.assign(a, b)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function (a) {
            if (H(a))
                return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (Z(a))
                return a.toString();
            if (!0 === a)
                return "true";
            if (!1 === a)
                return "false";
            if (null === a)
                return "null";
            if ("undefined" === typeof a)
                return "undefined";
            throw ea("esc");
        },
        nextId: function (a, b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d
        },
        current: function () {
            return this.state[this.state.computing]
        }
    };
    Jd.prototype = {
        compile: function (a, b) {
            var d = this
                , c = this.astBuilder.ast(a);
            this.expression = a;
            this.expensiveChecks = b;
            W(c, d.$filter);
            var e, f;
            if (e = Gd(c))
                f = this.recurse(e);
            e = Ed(c.body);
            var g;
            e && (g = [],
                q(e, function (a, b) {
                    var c = d.recurse(a);
                    a.input = c;
                    g.push(c);
                    a.watchId = b
                }));
            var h = [];
            q(c.body, function (a) {
                h.push(d.recurse(a.expression))
            });
            e = 0 === c.body.length ? C : 1 === c.body.length ? h[0] : function (a, b) {
                var c;
                q(h, function (d) {
                    c = d(a, b)
                });
                return c
            }
                ;
            f && (e.assign = function (a, b, c) {
                return f(a, c, b)
            }
            );
            g && (e.inputs = g);
            e.literal = Hd(c);
            e.constant = c.constant;
            return e
        },
        recurse: function (a, b, d) {
            var c, e, f = this, g;
            if (a.input)
                return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case r.Literal:
                    return this.value(a.value, b);
                case r.UnaryExpression:
                    return e = this.recurse(a.argument),
                        this["unary" + a.operator](e, b);
                case r.BinaryExpression:
                    return c = this.recurse(a.left),
                        e = this.recurse(a.right),
                        this["binary" + a.operator](c, e, b);
                case r.LogicalExpression:
                    return c = this.recurse(a.left),
                        e = this.recurse(a.right),
                        this["binary" + a.operator](c, e, b);
                case r.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case r.Identifier:
                    return Ta(a.name, f.expression),
                        f.identifier(a.name, f.expensiveChecks || Mb(a.name), b, d, f.expression);
                case r.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d),
                        a.computed || (Ta(a.property.name, f.expression),
                            e = a.property.name),
                        a.computed && (e = this.recurse(a.property)),
                        a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
                case r.CallExpression:
                    return g = [],
                        q(a.arguments, function (a) {
                            g.push(f.recurse(a))
                        }),
                        a.filter && (e = this.$filter(a.callee.name)),
                        a.filter || (e = this.recurse(a.callee, !0)),
                        a.filter ? function (a, c, d, f) {
                            for (var n = [], p = 0; p < g.length; ++p)
                                n.push(g[p](a, c, d, f));
                            a = e.apply(void 0, n, f);
                            return b ? {
                                context: void 0,
                                name: void 0,
                                value: a
                            } : a
                        }
                            : function (a, c, d, m) {
                                var n = e(a, c, d, m), p;
                                if (null != n.value) {
                                    qa(n.context, f.expression);
                                    vd(n.value, f.expression);
                                    p = [];
                                    for (var q = 0; q < g.length; ++q)
                                        p.push(qa(g[q](a, c, d, m), f.expression));
                                    p = qa(n.value.apply(n.context, p), f.expression)
                                }
                                return b ? {
                                    value: p
                                } : p
                            }
                        ;
                case r.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1),
                        e = this.recurse(a.right),
                        function (a, d, g, m) {
                            var n = c(a, d, g, m);
                            a = e(a, d, g, m);
                            qa(n.value, f.expression);
                            Kb(n.context);
                            n.context[n.name] = a;
                            return b ? {
                                value: a
                            } : a
                        }
                        ;
                case r.ArrayExpression:
                    return g = [],
                        q(a.elements, function (a) {
                            g.push(f.recurse(a))
                        }),
                        function (a, c, d, e) {
                            for (var f = [], p = 0; p < g.length; ++p)
                                f.push(g[p](a, c, d, e));
                            return b ? {
                                value: f
                            } : f
                        }
                        ;
                case r.ObjectExpression:
                    return g = [],
                        q(a.properties, function (a) {
                            a.computed ? g.push({
                                key: f.recurse(a.key),
                                computed: !0,
                                value: f.recurse(a.value)
                            }) : g.push({
                                key: a.key.type === r.Identifier ? a.key.name : "" + a.key.value,
                                computed: !1,
                                value: f.recurse(a.value)
                            })
                        }),
                        function (a, c, d, e) {
                            for (var f = {}, p = 0; p < g.length; ++p)
                                g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
                            return b ? {
                                value: f
                            } : f
                        }
                        ;
                case r.ThisExpression:
                    return function (a) {
                        return b ? {
                            value: a
                        } : a
                    }
                        ;
                case r.LocalsExpression:
                    return function (a, c) {
                        return b ? {
                            value: c
                        } : c
                    }
                        ;
                case r.NGValueParameter:
                    return function (a, c, d) {
                        return b ? {
                            value: d
                        } : d
                    }
            }
        },
        "unary+": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = u(d) ? +d : 0;
                return b ? {
                    value: d
                } : d
            }
        },
        "unary-": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = u(d) ? -d : 0;
                return b ? {
                    value: d
                } : d
            }
        },
        "unary!": function (a, b) {
            return function (d, c, e, f) {
                d = !a(d, c, e, f);
                return b ? {
                    value: d
                } : d
            }
        },
        "binary+": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = Dd(h, c);
                return d ? {
                    value: h
                } : h
            }
        },
        "binary-": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = (u(h) ? h : 0) - (u(c) ? c : 0);
                return d ? {
                    value: h
                } : h
            }
        },
        "binary*": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) * b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary/": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) / b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary%": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) % b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary===": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) === b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary!==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) !== b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) == b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary!=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) != b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary<": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) < b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary>": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) > b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary<=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) <= b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary>=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) >= b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary&&": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) && b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary||": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) || b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "ternary?:": function (a, b, d, c) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
                return c ? {
                    value: e
                } : e
            }
        },
        value: function (a, b) {
            return function () {
                return b ? {
                    context: void 0,
                    name: void 0,
                    value: a
                } : a
            }
        },
        identifier: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                f = g && a in g ? g : f;
                c && 1 !== c && f && !f[a] && (f[a] = {});
                g = f ? f[a] : void 0;
                b && qa(g, e);
                return d ? {
                    context: f,
                    name: a,
                    value: g
                } : g
            }
        },
        computedMember: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                var l = a(f, g, h, k), m, n;
                null != l && (m = b(f, g, h, k),
                    m += "",
                    Ta(m, e),
                    c && 1 !== c && (Kb(l),
                        l && !l[m] && (l[m] = {})),
                    n = l[m],
                    qa(n, e));
                return d ? {
                    context: l,
                    name: m,
                    value: n
                } : n
            }
        },
        nonComputedMember: function (a, b, d, c, e, f) {
            return function (g, h, k, l) {
                g = a(g, h, k, l);
                e && 1 !== e && (Kb(g),
                    g && !g[b] && (g[b] = {}));
                h = null != g ? g[b] : void 0;
                (d || Mb(b)) && qa(h, f);
                return c ? {
                    context: g,
                    name: b,
                    value: h
                } : h
            }
        },
        inputs: function (a, b) {
            return function (d, c, e, f) {
                return f ? f[b] : a(d, c, e)
            }
        }
    };
    var pc = function (a, b, d) {
        this.lexer = a;
        this.$filter = b;
        this.options = d;
        this.ast = new r(a, d);
        this.astCompiler = d.csp ? new Jd(this.ast, b) : new Id(this.ast, b)
    };
    pc.prototype = {
        constructor: pc,
        parse: function (a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var fa = N("$sce")
        , la = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        }
        , Ig = N("$compile")
        , V = B.document.createElement("a")
        , Nd = Ca(B.location.href);
    Od.$inject = ["$document"];
    Tc.$inject = ["$provide"];
    var Vd = 22
        , Ud = "."
        , rc = "0";
    Pd.$inject = ["$locale"];
    Rd.$inject = ["$locale"];
    var Tg = {
        yyyy: Y("FullYear", 4, 0, !1, !0),
        yy: Y("FullYear", 2, 0, !0, !0),
        y: Y("FullYear", 1, 0, !1, !0),
        MMMM: nb("Month"),
        MMM: nb("Month", !0),
        MM: Y("Month", 2, 1),
        M: Y("Month", 1, 1),
        LLLL: nb("Month", !1, !0),
        dd: Y("Date", 2),
        d: Y("Date", 1),
        HH: Y("Hours", 2),
        H: Y("Hours", 1),
        hh: Y("Hours", 2, -12),
        h: Y("Hours", 1, -12),
        mm: Y("Minutes", 2),
        m: Y("Minutes", 1),
        ss: Y("Seconds", 2),
        s: Y("Seconds", 1),
        sss: Y("Milliseconds", 3),
        EEEE: nb("Day"),
        EEE: nb("Day", !0),
        a: function (a, b) {
            return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
        },
        Z: function (a, b, d) {
            a = -1 * d;
            return a = (0 <= a ? "+" : "") + (Nb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Nb(Math.abs(a % 60), 2))
        },
        ww: Xd(2),
        w: Xd(1),
        G: sc,
        GG: sc,
        GGG: sc,
        GGGG: function (a, b) {
            return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
        }
    }
        , Sg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/
        , Rg = /^\-?\d+$/;
    Qd.$inject = ["$locale"];
    var Mg = ma(P)
        , Ng = ma(xb);
    Sd.$inject = ["$parse"];
    var Ee = ma({
        restrict: "E",
        compile: function (a, b) {
            if (!b.href && !b.xlinkHref)
                return function (a, b) {
                    if ("a" === b[0].nodeName.toLowerCase()) {
                        var e = "[object SVGAnimatedString]" === na.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function (a) {
                            b.attr(e) || a.preventDefault()
                        })
                    }
                }
        }
    })
        , yb = {};
    q(Hb, function (a, b) {
        function d(a, d, e) {
            a.$watch(e[c], function (a) {
                e.$set(b, !!a)
            })
        }
        if ("multiple" !== a) {
            var c = Ba("ng-" + b)
                , e = d;
            "checked" === a && (e = function (a, b, e) {
                e.ngModel !== e[c] && d(a, b, e)
            }
            );
            yb[c] = function () {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                }
            }
        }
    });
    q(jd, function (a, b) {
        yb[b] = function () {
            return {
                priority: 100,
                link: function (a, c, e) {
                    if ("ngPattern" === b && "/" === e.ngPattern.charAt(0) && (c = e.ngPattern.match(Wg))) {
                        e.$set("ngPattern", new RegExp(c[1], c[2]));
                        return
                    }
                    a.$watch(e[b], function (a) {
                        e.$set(b, a)
                    })
                }
            }
        }
    });
    q(["src", "srcset", "href"], function (a) {
        var b = Ba("ng-" + a);
        yb[b] = function () {
            return {
                priority: 99,
                link: function (d, c, e) {
                    var f = a
                        , g = a;
                    "href" === a && "[object SVGAnimatedString]" === na.call(c.prop("href")) && (g = "xlinkHref",
                        e.$attr[g] = "xlink:href",
                        f = null);
                    e.$observe(b, function (b) {
                        b ? (e.$set(g, b),
                            Fa && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
                    })
                }
            }
        }
    });
    var Ob = {
        $addControl: C,
        $$renameControl: function (a, b) {
            a.$name = b
        },
        $removeControl: C,
        $setValidity: C,
        $setDirty: C,
        $setPristine: C,
        $setSubmitted: C
    };
    Yd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var ge = function (a) {
        return ["$timeout", "$parse", function (b, d) {
            function c(a) {
                return "" === a ? d('this[""]').assign : d(a).assign || C
            }
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                require: ["form", "^^?form"],
                controller: Yd,
                compile: function (d, f) {
                    d.addClass(Va).addClass(rb);
                    var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                    return {
                        pre: function (a, d, e, f) {
                            var n = f[0];
                            if (!("action" in e)) {
                                var p = function (b) {
                                    a.$apply(function () {
                                        n.$commitViewValue();
                                        n.$setSubmitted()
                                    });
                                    b.preventDefault()
                                };
                                d[0].addEventListener("submit", p, !1);
                                d.on("$destroy", function () {
                                    b(function () {
                                        d[0].removeEventListener("submit", p, !1)
                                    }, 0, !1)
                                })
                            }
                            (f[1] || n.$$parentForm).$addControl(n);
                            var q = g ? c(n.$name) : C;
                            g && (q(a, n),
                                e.$observe(g, function (b) {
                                    n.$name !== b && (q(a, void 0),
                                        n.$$parentForm.$$renameControl(n, b),
                                        q = c(n.$name),
                                        q(a, n))
                                }));
                            d.on("$destroy", function () {
                                n.$$parentForm.$removeControl(n);
                                q(a, void 0);
                                R(n, Ob)
                            })
                        }
                    }
                }
            }
        }
        ]
    }
        , Fe = ge()
        , Re = ge(!0)
        , Ug = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/
        , dh = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i
        , eh = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
        , Vg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/
        , he = /^(\d{4,})-(\d{2})-(\d{2})$/
        , ie = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/
        , yc = /^(\d{4,})-W(\d\d)$/
        , je = /^(\d{4,})-(\d\d)$/
        , ke = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/
        , $d = S();
    q(["date", "datetime-local", "month", "time", "week"], function (a) {
        $d[a] = !0
    });
    var le = {
        text: function (a, b, d, c, e, f) {
            Wa(a, b, d, c, e, f);
            uc(c)
        },
        date: ob("date", he, Qb(he, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": ob("datetimelocal", ie, Qb(ie, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: ob("time", ke, Qb(ke, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: ob("week", yc, function (a, b) {
            if (ba(a))
                return a;
            if (H(a)) {
                yc.lastIndex = 0;
                var d = yc.exec(a);
                if (d) {
                    var c = +d[1]
                        , e = +d[2]
                        , f = d = 0
                        , g = 0
                        , h = 0
                        , k = Wd(c)
                        , e = 7 * (e - 1);
                    b && (d = b.getHours(),
                        f = b.getMinutes(),
                        g = b.getSeconds(),
                        h = b.getMilliseconds());
                    return new Date(c, 0, k.getDate() + e, d, f, g, h)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: ob("month", je, Qb(je, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (a, b, d, c, e, f) {
            vc(a, b, d, c);
            Wa(a, b, d, c, e, f);
            ae(c);
            var g, h;
            if (u(d.min) || d.ngMin)
                c.$validators.min = function (a) {
                    return c.$isEmpty(a) || z(g) || a >= g
                }
                    ,
                    d.$observe("min", function (a) {
                        g = qb(a);
                        c.$validate()
                    });
            if (u(d.max) || d.ngMax)
                c.$validators.max = function (a) {
                    return c.$isEmpty(a) || z(h) || a <= h
                }
                    ,
                    d.$observe("max", function (a) {
                        h = qb(a);
                        c.$validate()
                    })
        },
        url: function (a, b, d, c, e, f) {
            Wa(a, b, d, c, e, f);
            uc(c);
            c.$$parserName = "url";
            c.$validators.url = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || dh.test(d)
            }
        },
        email: function (a, b, d, c, e, f) {
            Wa(a, b, d, c, e, f);
            uc(c);
            c.$$parserName = "email";
            c.$validators.email = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || eh.test(d)
            }
        },
        radio: function (a, b, d, c) {
            z(d.name) && b.attr("name", ++sb);
            b.on("click", function (a) {
                b[0].checked && c.$setViewValue(d.value, a && a.type)
            });
            c.$render = function () {
                b[0].checked = d.value === c.$viewValue
            }
                ;
            d.$observe("value", c.$render)
        },
        range: function (a, b, d, c, e, f) {
            function g(a, c) {
                b.attr(a, d[a]);
                d.$observe(a, c)
            }
            function h(a) {
                n = qb(a);
                X(c.$modelValue) || (m ? (a = b.val(),
                    n > a && (a = n,
                        b.val(a)),
                    c.$setViewValue(a)) : c.$validate())
            }
            function k(a) {
                p = qb(a);
                X(c.$modelValue) || (m ? (a = b.val(),
                    p < a && (b.val(p),
                        a = p < n ? n : p),
                    c.$setViewValue(a)) : c.$validate())
            }
            function l(a) {
                q = qb(a);
                X(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate())
            }
            vc(a, b, d, c);
            ae(c);
            Wa(a, b, d, c, e, f);
            var m = c.$$hasNativeValidators && "range" === b[0].type
                , n = m ? 0 : void 0
                , p = m ? 100 : void 0
                , q = m ? 1 : void 0
                , r = b[0].validity;
            a = u(d.min);
            e = u(d.max);
            f = u(d.step);
            var t = c.$render;
            c.$render = m && u(r.rangeUnderflow) && u(r.rangeOverflow) ? function () {
                t();
                c.$setViewValue(b.val())
            }
                : t;
            a && (c.$validators.min = m ? function () {
                return !0
            }
                : function (a, b) {
                    return c.$isEmpty(b) || z(n) || b >= n
                }
                ,
                g("min", h));
            e && (c.$validators.max = m ? function () {
                return !0
            }
                : function (a, b) {
                    return c.$isEmpty(b) || z(p) || b <= p
                }
                ,
                g("max", k));
            f && (c.$validators.step = m ? function () {
                return !r.stepMismatch
            }
                : function (a, b) {
                    var d;
                    if (!(d = c.$isEmpty(b) || z(q))) {
                        d = n || 0;
                        var e = q
                            , f = Number(b);
                        if ((f | 0) !== f || (d | 0) !== d || (e | 0) !== e) {
                            var g = Math.max(wc(f), wc(d), wc(e))
                                , g = Math.pow(10, g)
                                , f = f * g;
                            d *= g;
                            e *= g
                        }
                        d = 0 === (f - d) % e
                    }
                    return d
                }
                ,
                g("step", l))
        },
        checkbox: function (a, b, d, c, e, f, g, h) {
            var k = be(h, a, "ngTrueValue", d.ngTrueValue, !0)
                , l = be(h, a, "ngFalseValue", d.ngFalseValue, !1);
            b.on("click", function (a) {
                c.$setViewValue(b[0].checked, a && a.type)
            });
            c.$render = function () {
                b[0].checked = c.$viewValue
            }
                ;
            c.$isEmpty = function (a) {
                return !1 === a
            }
                ;
            c.$formatters.push(function (a) {
                return oa(a, k)
            });
            c.$parsers.push(function (a) {
                return a ? k : l
            })
        },
        hidden: C,
        button: C,
        submit: C,
        reset: C,
        file: C
    }
        , Nc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function (e, f, g, h) {
                        if (h[0]) {
                            var k = P(g.type);
                            "range" !== k || g.hasOwnProperty("ngInputRange") || (k = "text");
                            (le[k] || le.text)(e, f, g, h[0], b, a, d, c)
                        }
                    }
                }
            }
        }
        ]
        , fh = /^(true|false|\d+)$/
        , jf = function () {
            return {
                restrict: "A",
                priority: 100,
                compile: function (a, b) {
                    return fh.test(b.ngValue) ? function (a, b, e) {
                        e.$set("value", a.$eval(e.ngValue))
                    }
                        : function (a, b, e) {
                            a.$watch(e.ngValue, function (a) {
                                e.$set("value", a)
                            })
                        }
                }
            }
        }
        , Je = ["$compile", function (a) {
            return {
                restrict: "AC",
                compile: function (b) {
                    a.$$addBindingClass(b);
                    return function (b, c, e) {
                        a.$$addBindingInfo(c, e.ngBind);
                        c = c[0];
                        b.$watch(e.ngBind, function (a) {
                            c.textContent = z(a) ? "" : a
                        })
                    }
                }
            }
        }
        ]
        , Le = ["$interpolate", "$compile", function (a, b) {
            return {
                compile: function (d) {
                    b.$$addBindingClass(d);
                    return function (c, d, f) {
                        c = a(d.attr(f.$attr.ngBindTemplate));
                        b.$$addBindingInfo(d, c.expressions);
                        d = d[0];
                        f.$observe("ngBindTemplate", function (a) {
                            d.textContent = z(a) ? "" : a
                        })
                    }
                }
            }
        }
        ]
        , Ke = ["$sce", "$parse", "$compile", function (a, b, d) {
            return {
                restrict: "A",
                compile: function (c, e) {
                    var f = b(e.ngBindHtml)
                        , g = b(e.ngBindHtml, function (b) {
                            return a.valueOf(b)
                        });
                    d.$$addBindingClass(c);
                    return function (b, c, e) {
                        d.$$addBindingInfo(c, e.ngBindHtml);
                        b.$watch(g, function () {
                            var d = f(b);
                            c.html(a.getTrustedHtml(d) || "")
                        })
                    }
                }
            }
        }
        ]
        , hf = ma({
            restrict: "A",
            require: "ngModel",
            link: function (a, b, d, c) {
                c.$viewChangeListeners.push(function () {
                    a.$eval(d.ngChange)
                })
            }
        })
        , Me = xc("", !0)
        , Oe = xc("Odd", 0)
        , Ne = xc("Even", 1)
        , Pe = Ua({
            compile: function (a, b) {
                b.$set("ngCloak", void 0);
                a.removeClass("ng-cloak")
            }
        })
        , Qe = [function () {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }
        ]
        , Sc = {}
        , gh = {
            blur: !0,
            focus: !0
        };
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = Ba("ng-" + a);
        Sc[b] = ["$parse", "$rootScope", function (d, c) {
            return {
                restrict: "A",
                compile: function (e, f) {
                    var g = d(f[b], null, !0);
                    return function (b, d) {
                        d.on(a, function (d) {
                            var e = function () {
                                g(b, {
                                    $event: d
                                })
                            };
                            gh[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }
        ]
    });
    var Te = ["$animate", "$compile", function (a, b) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (d, c, e, f, g) {
                var h, k, l;
                d.$watch(e.ngIf, function (d) {
                    d ? k || g(function (d, f) {
                        k = f;
                        d[d.length++] = b.$$createComment("end ngIf", e.ngIf);
                        h = {
                            clone: d
                        };
                        a.enter(d, c.parent(), c)
                    }) : (l && (l.remove(),
                        l = null),
                        k && (k.$destroy(),
                            k = null),
                        h && (l = wb(h.clone),
                            a.leave(l).then(function () {
                                l = null
                            }),
                            h = null))
                })
            }
        }
    }
    ]
        , Ue = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ga.noop,
                compile: function (c, e) {
                    var f = e.ngInclude || e.src
                        , g = e.onload || ""
                        , h = e.autoscroll;
                    return function (c, e, m, n, p) {
                        var q = 0, r, t, s, D = function () {
                            t && (t.remove(),
                                t = null);
                            r && (r.$destroy(),
                                r = null);
                            s && (d.leave(s).then(function () {
                                t = null
                            }),
                                t = s,
                                s = null)
                        };
                        c.$watch(f, function (f) {
                            var m = function () {
                                !u(h) || h && !c.$eval(h) || b()
                            }
                                , w = ++q;
                            f ? (a(f, !0).then(function (a) {
                                if (!c.$$destroyed && w === q) {
                                    var b = c.$new();
                                    n.template = a;
                                    a = p(b, function (a) {
                                        D();
                                        d.enter(a, null, e).then(m)
                                    });
                                    r = b;
                                    s = a;
                                    r.$emit("$includeContentLoaded", f);
                                    c.$eval(g)
                                }
                            }, function () {
                                c.$$destroyed || w !== q || (D(),
                                    c.$emit("$includeContentError", f))
                            }),
                                c.$emit("$includeContentRequested", f)) : (D(),
                                    n.template = null)
                        })
                    }
                }
            }
        }
        ]
        , lf = ["$compile", function (a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function (b, d, c, e) {
                    na.call(d[0]).match(/SVG/) ? (d.empty(),
                        a(Vc(e.template, B.document).childNodes)(b, function (a) {
                            d.append(a)
                        }, {
                            futureParentElement: d
                        })) : (d.html(e.template),
                            a(d.contents())(b))
                }
            }
        }
        ]
        , Ve = Ua({
            priority: 450,
            compile: function () {
                return {
                    pre: function (a, b, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        })
        , gf = function () {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function (a, b, d, c) {
                    var e = b.attr(d.$attr.ngList) || ", "
                        , f = "false" !== d.ngTrim
                        , g = f ? U(e) : e;
                    c.$parsers.push(function (a) {
                        if (!z(a)) {
                            var b = [];
                            a && q(a.split(g), function (a) {
                                a && b.push(f ? U(a) : a)
                            });
                            return b
                        }
                    });
                    c.$formatters.push(function (a) {
                        if (K(a))
                            return a.join(e)
                    });
                    c.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }
        , rb = "ng-valid"
        , ce = "ng-invalid"
        , Va = "ng-pristine"
        , Pb = "ng-dirty"
        , ee = "ng-pending"
        , pb = N("ngModel")
        , hh = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = void 0;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = void 0;
            this.$name = l(d.name || "", !1)(a);
            this.$$parentForm = Ob;
            var m = e(d.ngModel), n = m.assign, p = m, r = n, J = null, t, s = this;
            this.$$setOptions = function (a) {
                if ((s.$options = a) && a.getterSetter) {
                    var b = e(d.ngModel + "()")
                        , f = e(d.ngModel + "($$$p)");
                    p = function (a) {
                        var c = m(a);
                        F(c) && (c = b(a));
                        return c
                    }
                        ;
                    r = function (a, b) {
                        F(m(a)) ? f(a, {
                            $$$p: b
                        }) : n(a, b)
                    }
                } else if (!m.assign)
                    throw pb("nonassign", d.ngModel, wa(c));
            }
                ;
            this.$render = C;
            this.$isEmpty = function (a) {
                return z(a) || "" === a || null === a || a !== a
            }
                ;
            this.$$updateEmptyClasses = function (a) {
                s.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"),
                    f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"),
                        f.addClass(c, "ng-not-empty"))
            }
                ;
            var D = 0;
            Zd({
                ctrl: this,
                $element: c,
                set: function (a, b) {
                    a[b] = !0
                },
                unset: function (a, b) {
                    delete a[b]
                },
                $animate: f
            });
            this.$setPristine = function () {
                s.$dirty = !1;
                s.$pristine = !0;
                f.removeClass(c, Pb);
                f.addClass(c, Va)
            }
                ;
            this.$setDirty = function () {
                s.$dirty = !0;
                s.$pristine = !1;
                f.removeClass(c, Va);
                f.addClass(c, Pb);
                s.$$parentForm.$setDirty()
            }
                ;
            this.$setUntouched = function () {
                s.$touched = !1;
                s.$untouched = !0;
                f.setClass(c, "ng-untouched", "ng-touched")
            }
                ;
            this.$setTouched = function () {
                s.$touched = !0;
                s.$untouched = !1;
                f.setClass(c, "ng-touched", "ng-untouched")
            }
                ;
            this.$rollbackViewValue = function () {
                g.cancel(J);
                s.$viewValue = s.$$lastCommittedViewValue;
                s.$render()
            }
                ;
            this.$validate = function () {
                if (!X(s.$modelValue)) {
                    var a = s.$$rawModelValue
                        , b = s.$valid
                        , c = s.$modelValue
                        , d = s.$options && s.$options.allowInvalid;
                    s.$$runValidators(a, s.$$lastCommittedViewValue, function (e) {
                        d || b === e || (s.$modelValue = e ? a : void 0,
                            s.$modelValue !== c && s.$$writeModelToScope())
                    })
                }
            }
                ;
            this.$$runValidators = function (a, b, c) {
                function d() {
                    var c = !0;
                    q(s.$validators, function (d, e) {
                        var g = d(a, b);
                        c = c && g;
                        f(e, g)
                    });
                    return c ? !0 : (q(s.$asyncValidators, function (a, b) {
                        f(b, null)
                    }),
                        !1)
                }
                function e() {
                    var c = []
                        , d = !0;
                    q(s.$asyncValidators, function (e, g) {
                        var h = e(a, b);
                        if (!h || !F(h.then))
                            throw pb("nopromise", h);
                        f(g, void 0);
                        c.push(h.then(function () {
                            f(g, !0)
                        }, function () {
                            d = !1;
                            f(g, !1)
                        }))
                    });
                    c.length ? k.all(c).then(function () {
                        g(d)
                    }, C) : g(!0)
                }
                function f(a, b) {
                    h === D && s.$setValidity(a, b)
                }
                function g(a) {
                    h === D && c(a)
                }
                D++;
                var h = D;
                (function () {
                    var a = s.$$parserName || "parse";
                    if (z(t))
                        f(a, null);
                    else
                        return t || (q(s.$validators, function (a, b) {
                            f(b, null)
                        }),
                            q(s.$asyncValidators, function (a, b) {
                                f(b, null)
                            })),
                            f(a, t),
                            t;
                    return !0
                }
                )() ? d() ? e() : g(!1) : g(!1)
            }
                ;
            this.$commitViewValue = function () {
                var a = s.$viewValue;
                g.cancel(J);
                if (s.$$lastCommittedViewValue !== a || "" === a && s.$$hasNativeValidators)
                    s.$$updateEmptyClasses(a),
                        s.$$lastCommittedViewValue = a,
                        s.$pristine && this.$setDirty(),
                        this.$$parseAndValidate()
            }
                ;
            this.$$parseAndValidate = function () {
                var b = s.$$lastCommittedViewValue;
                if (t = z(b) ? void 0 : !0)
                    for (var c = 0; c < s.$parsers.length; c++)
                        if (b = s.$parsers[c](b),
                            z(b)) {
                            t = !1;
                            break
                        }
                X(s.$modelValue) && (s.$modelValue = p(a));
                var d = s.$modelValue
                    , e = s.$options && s.$options.allowInvalid;
                s.$$rawModelValue = b;
                e && (s.$modelValue = b,
                    s.$modelValue !== d && s.$$writeModelToScope());
                s.$$runValidators(b, s.$$lastCommittedViewValue, function (a) {
                    e || (s.$modelValue = a ? b : void 0,
                        s.$modelValue !== d && s.$$writeModelToScope())
                })
            }
                ;
            this.$$writeModelToScope = function () {
                r(a, s.$modelValue);
                q(s.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }
                ;
            this.$setViewValue = function (a, b) {
                s.$viewValue = a;
                s.$options && !s.$options.updateOnDefault || s.$$debounceViewValueCommit(b)
            }
                ;
            this.$$debounceViewValueCommit = function (b) {
                var c = 0
                    , d = s.$options;
                d && u(d.debounce) && (d = d.debounce,
                    Z(d) ? c = d : Z(d[b]) ? c = d[b] : Z(d["default"]) && (c = d["default"]));
                g.cancel(J);
                c ? J = g(function () {
                    s.$commitViewValue()
                }, c) : h.$$phase ? s.$commitViewValue() : a.$apply(function () {
                    s.$commitViewValue()
                })
            }
                ;
            a.$watch(function () {
                var b = p(a);
                if (b !== s.$modelValue && (s.$modelValue === s.$modelValue || b === b)) {
                    s.$modelValue = s.$$rawModelValue = b;
                    t = void 0;
                    for (var c = s.$formatters, d = c.length, e = b; d--;)
                        e = c[d](e);
                    s.$viewValue !== e && (s.$$updateEmptyClasses(e),
                        s.$viewValue = s.$$lastCommittedViewValue = e,
                        s.$render(),
                        s.$$runValidators(s.$modelValue, s.$viewValue, C))
                }
                return b
            })
        }
        ]
        , ff = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: hh,
                priority: 1,
                compile: function (b) {
                    b.addClass(Va).addClass("ng-untouched").addClass(rb);
                    return {
                        pre: function (a, b, e, f) {
                            var g = f[0];
                            b = f[1] || g.$$parentForm;
                            g.$$setOptions(f[2] && f[2].$options);
                            b.$addControl(g);
                            e.$observe("name", function (a) {
                                g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                            });
                            a.$on("$destroy", function () {
                                g.$$parentForm.$removeControl(g)
                            })
                        },
                        post: function (b, c, e, f) {
                            var g = f[0];
                            if (g.$options && g.$options.updateOn)
                                c.on(g.$options.updateOn, function (a) {
                                    g.$$debounceViewValueCommit(a && a.type)
                                });
                            c.on("blur", function () {
                                g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched))
                            })
                        }
                    }
                }
            }
        }
        ]
        , ih = /(\s+|^)default(\s+|$)/
        , kf = function () {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function (a, b) {
                    var d = this;
                    this.$options = pa(a.$eval(b.ngModelOptions));
                    u(this.$options.updateOn) ? (this.$options.updateOnDefault = !1,
                        this.$options.updateOn = U(this.$options.updateOn.replace(ih, function () {
                            d.$options.updateOnDefault = !0;
                            return " "
                        }))) : this.$options.updateOnDefault = !0
                }
                ]
            }
        }
        , We = Ua({
            terminal: !0,
            priority: 1E3
        })
        , jh = N("ngOptions")
        , kh = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/
        , df = ["$compile", "$document", "$parse", function (a, b, d) {
            function c(a, b, c) {
                function e(a, b, c, d, f) {
                    this.selectValue = a;
                    this.viewValue = b;
                    this.label = c;
                    this.group = d;
                    this.disabled = f
                }
                function f(a) {
                    var b;
                    if (!q && ra(a))
                        b = a;
                    else {
                        b = [];
                        for (var c in a)
                            a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }
                var n = a.match(kh);
                if (!n)
                    throw jh("iexp", a, wa(b));
                var p = n[5] || n[7]
                    , q = n[6];
                a = / as /.test(n[0]) && n[1];
                var r = n[9];
                b = d(n[2] ? n[1] : p);
                var t = a && d(a) || b
                    , s = r && d(r)
                    , u = r ? function (a, b) {
                        return s(c, b)
                    }
                        : function (a) {
                            return za(a)
                        }
                    , y = function (a, b) {
                        return u(a, A(a, b))
                    }
                    , z = d(n[2] || n[1])
                    , w = d(n[3] || "")
                    , C = d(n[4] || "")
                    , F = d(n[8])
                    , B = {}
                    , A = q ? function (a, b) {
                        B[q] = b;
                        B[p] = a;
                        return B
                    }
                        : function (a) {
                            B[p] = a;
                            return B
                        }
                    ;
                return {
                    trackBy: r,
                    getTrackByValue: y,
                    getWatchables: d(F, function (a) {
                        var b = [];
                        a = a || [];
                        for (var d = f(a), e = d.length, g = 0; g < e; g++) {
                            var h = a === d ? g : d[g]
                                , l = a[h]
                                , h = A(l, h)
                                , l = u(l, h);
                            b.push(l);
                            if (n[2] || n[1])
                                l = z(c, h),
                                    b.push(l);
                            n[4] && (h = C(c, h),
                                b.push(h))
                        }
                        return b
                    }),
                    getOptions: function () {
                        for (var a = [], b = {}, d = F(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
                            var p = d === g ? n : g[n]
                                , q = A(d[p], p)
                                , s = t(c, q)
                                , p = u(s, q)
                                , x = z(c, q)
                                , B = w(c, q)
                                , q = C(c, q)
                                , s = new e(p, s, x, B, q);
                            a.push(s);
                            b[p] = s
                        }
                        return {
                            items: a,
                            selectValueMap: b,
                            getOptionFromViewValue: function (a) {
                                return b[y(a)]
                            },
                            getViewValueFromOption: function (a) {
                                return r ? ga.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }
            var e = B.document.createElement("option")
                , f = B.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function (a, b, c, d) {
                        d[0].registerOption = C
                    },
                    post: function (d, h, k, l) {
                        function m(a, b) {
                            a.element = b;
                            b.disabled = a.disabled;
                            a.label !== b.label && (b.label = a.label,
                                b.textContent = a.label);
                            a.value !== b.value && (b.value = a.selectValue)
                        }
                        function n() {
                            var a = w && p.readValue();
                            if (w)
                                for (var b = w.items.length - 1; 0 <= b; b--) {
                                    var c = w.items[b];
                                    u(c.group) ? Gb(c.element.parentNode) : Gb(c.element)
                                }
                            w = B.getOptions();
                            var d = {};
                            y && h.prepend(t);
                            w.items.forEach(function (a) {
                                var b;
                                if (u(a.group)) {
                                    b = d[a.group];
                                    b || (b = f.cloneNode(!1),
                                        F.appendChild(b),
                                        b.label = null === a.group ? "null" : a.group,
                                        d[a.group] = b);
                                    var c = e.cloneNode(!1)
                                } else
                                    b = F,
                                        c = e.cloneNode(!1);
                                b.appendChild(c);
                                m(a, c)
                            });
                            h[0].appendChild(F);
                            r.$render();
                            r.$isEmpty(a) || (b = p.readValue(),
                                (B.trackBy || z ? oa(a, b) : a === b) || (r.$setViewValue(b),
                                    r.$render()))
                        }
                        var p = l[0], r = l[1], z = k.multiple, t;
                        l = 0;
                        for (var s = h.children(), D = s.length; l < D; l++)
                            if ("" === s[l].value) {
                                t = s.eq(l);
                                break
                            }
                        var y = !!t
                            , C = E(e.cloneNode(!1));
                        C.val("?");
                        var w, B = c(k.ngOptions, h, d), F = b[0].createDocumentFragment(), H = function () {
                            y ? t.removeAttr("selected") : t.remove()
                        };
                        z ? (r.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        }
                            ,
                            p.writeValue = function (a) {
                                w.items.forEach(function (a) {
                                    a.element.selected = !1
                                });
                                a && a.forEach(function (a) {
                                    if (a = w.getOptionFromViewValue(a))
                                        a.element.selected = !0
                                })
                            }
                            ,
                            p.readValue = function () {
                                var a = h.val() || []
                                    , b = [];
                                q(a, function (a) {
                                    (a = w.selectValueMap[a]) && !a.disabled && b.push(w.getViewValueFromOption(a))
                                });
                                return b
                            }
                            ,
                            B.trackBy && d.$watchCollection(function () {
                                if (K(r.$viewValue))
                                    return r.$viewValue.map(function (a) {
                                        return B.getTrackByValue(a)
                                    })
                            }, function () {
                                r.$render()
                            })) : (p.writeValue = function (a) {
                                var b = w.selectValueMap[h.val()]
                                    , c = w.getOptionFromViewValue(a);
                                b && b.element.removeAttribute("selected");
                                c ? (h[0].value !== c.selectValue && (C.remove(),
                                    H(),
                                    h[0].value = c.selectValue,
                                    c.element.selected = !0),
                                    c.element.setAttribute("selected", "selected")) : null === a || y ? (C.remove(),
                                        y || h.prepend(t),
                                        h.val(""),
                                        t.prop("selected", !0),
                                        t.attr("selected", !0)) : (H(),
                                            h.prepend(C),
                                            h.val("?"),
                                            C.prop("selected", !0),
                                            C.attr("selected", !0))
                            }
                                ,
                                p.readValue = function () {
                                    var a = w.selectValueMap[h.val()];
                                    return a && !a.disabled ? (H(),
                                        C.remove(),
                                        w.getViewValueFromOption(a)) : null
                                }
                                ,
                                B.trackBy && d.$watch(function () {
                                    return B.getTrackByValue(r.$viewValue)
                                }, function () {
                                    r.$render()
                                }));
                        y ? (t.remove(),
                            a(t)(d),
                            t.removeClass("ng-scope")) : t = E(e.cloneNode(!1));
                        h.empty();
                        n();
                        d.$watchCollection(B.getWatchables, n)
                    }
                }
            }
        }
        ]
        , Xe = ["$locale", "$interpolate", "$log", function (a, b, d) {
            var c = /{}/g
                , e = /^when(Minus)?(.+)$/;
            return {
                link: function (f, g, h) {
                    function k(a) {
                        g.text(a || "")
                    }
                    var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), n = h.offset || 0, p = f.$eval(m) || {}, r = {}, u = b.startSymbol(), t = b.endSymbol(), s = u + l + "-" + n + t, D = ga.noop, y;
                    q(h, function (a, b) {
                        var c = e.exec(b);
                        c && (c = (c[1] ? "-" : "") + P(c[2]),
                            p[c] = g.attr(h.$attr[b]))
                    });
                    q(p, function (a, d) {
                        r[d] = b(a.replace(c, s))
                    });
                    f.$watch(l, function (b) {
                        var c = parseFloat(b)
                            , e = X(c);
                        e || c in p || (c = a.pluralCat(c - n));
                        c === y || e && X(y) || (D(),
                            e = r[c],
                            z(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m),
                                D = C,
                                k()) : D = f.$watch(e, k),
                            y = c)
                    })
                }
            }
        }
        ]
        , Ye = ["$parse", "$animate", "$compile", function (a, b, d) {
            var c = N("ngRepeat")
                , e = function (a, b, c, d, e, m, n) {
                    a[c] = d;
                    e && (a[e] = m);
                    a.$index = b;
                    a.$first = 0 === b;
                    a.$last = b === n - 1;
                    a.$middle = !(a.$first || a.$last);
                    a.$odd = !(a.$even = 0 === (b & 1))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (f, g) {
                    var h = g.ngRepeat
                        , k = d.$$createComment("end ngRepeat", h)
                        , l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!l)
                        throw c("iexp", h);
                    var m = l[1]
                        , n = l[2]
                        , p = l[3]
                        , r = l[4]
                        , l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!l)
                        throw c("iidexp", m);
                    var u = l[3] || l[1]
                        , t = l[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))
                        throw c("badident", p);
                    var s, z, y, C, w = {
                        $id: za
                    };
                    r ? s = a(r) : (y = function (a, b) {
                        return za(b)
                    }
                        ,
                        C = function (a) {
                            return a
                        }
                    );
                    return function (a, d, f, g, l) {
                        s && (z = function (b, c, d) {
                            t && (w[t] = b);
                            w[u] = c;
                            w.$index = d;
                            return s(a, w)
                        }
                        );
                        var m = S();
                        a.$watchCollection(n, function (f) {
                            var g, n, s = d[0], r, x = S(), w, B, F, A, H, E, I;
                            p && (a[p] = f);
                            if (ra(f))
                                H = f,
                                    n = z || y;
                            else
                                for (I in n = z || C,
                                    H = [],
                                    f)
                                    sa.call(f, I) && "$" !== I.charAt(0) && H.push(I);
                            w = H.length;
                            I = Array(w);
                            for (g = 0; g < w; g++)
                                if (B = f === H ? g : H[g],
                                    F = f[B],
                                    A = n(B, F, g),
                                    m[A])
                                    E = m[A],
                                        delete m[A],
                                        x[A] = E,
                                        I[g] = E;
                                else {
                                    if (x[A])
                                        throw q(I, function (a) {
                                            a && a.scope && (m[a.id] = a)
                                        }),
                                        c("dupes", h, A, F);
                                    I[g] = {
                                        id: A,
                                        scope: void 0,
                                        clone: void 0
                                    };
                                    x[A] = !0
                                }
                            for (r in m) {
                                E = m[r];
                                A = wb(E.clone);
                                b.leave(A);
                                if (A[0].parentNode)
                                    for (g = 0,
                                        n = A.length; g < n; g++)
                                        A[g].$$NG_REMOVED = !0;
                                E.scope.$destroy()
                            }
                            for (g = 0; g < w; g++)
                                if (B = f === H ? g : H[g],
                                    F = f[B],
                                    E = I[g],
                                    E.scope) {
                                    r = s;
                                    do
                                        r = r.nextSibling;
                                    while (r && r.$$NG_REMOVED); E.clone[0] !== r && b.move(wb(E.clone), null, s);
                                    s = E.clone[E.clone.length - 1];
                                    e(E.scope, g, u, F, t, B, w)
                                } else
                                    l(function (a, c) {
                                        E.scope = c;
                                        var d = k.cloneNode(!1);
                                        a[a.length++] = d;
                                        b.enter(a, null, s);
                                        s = d;
                                        E.clone = a;
                                        x[E.id] = E;
                                        e(E.scope, g, u, F, t, B, w)
                                    });
                            m = x
                        })
                    }
                }
            }
        }
        ]
        , Ze = ["$animate", function (a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (b, d, c) {
                    b.$watch(c.ngShow, function (b) {
                        a[b ? "removeClass" : "addClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }
        ]
        , Se = ["$animate", function (a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (b, d, c) {
                    b.$watch(c.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }
        ]
        , $e = Ua(function (a, b, d) {
            a.$watch(d.ngStyle, function (a, d) {
                d && a !== d && q(d, function (a, c) {
                    b.css(c, "")
                });
                a && b.css(a)
            }, !0)
        })
        , af = ["$animate", "$compile", function (a, b) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function () {
                    this.cases = {}
                }
                ],
                link: function (d, c, e, f) {
                    var g = []
                        , h = []
                        , k = []
                        , l = []
                        , m = function (a, b) {
                            return function () {
                                a.splice(b, 1)
                            }
                        };
                    d.$watch(e.ngSwitch || e.on, function (c) {
                        var d, e;
                        d = 0;
                        for (e = k.length; d < e; ++d)
                            a.cancel(k[d]);
                        d = k.length = 0;
                        for (e = l.length; d < e; ++d) {
                            var r = wb(h[d].clone);
                            l[d].$destroy();
                            (k[d] = a.leave(r)).then(m(k, d))
                        }
                        h.length = 0;
                        l.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
                            c.transclude(function (d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.$$createComment("end ngSwitchWhen");
                                h.push({
                                    clone: d
                                });
                                a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }
        ]
        , bf = Ua({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];
                c.cases["!" + d.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        })
        , cf = Ua({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["?"] = c.cases["?"] || [];
                c.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        })
        , lh = N("ngTransclude")
        , ef = ["$compile", function (a) {
            return {
                restrict: "EAC",
                terminal: !0,
                compile: function (b) {
                    var d = a(b.contents());
                    b.empty();
                    return function (a, b, f, g, h) {
                        function k() {
                            d(a, function (a) {
                                b.append(a)
                            })
                        }
                        if (!h)
                            throw lh("orphan", wa(b));
                        f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");
                        f = f.ngTransclude || f.ngTranscludeSlot;
                        h(function (a, c) {
                            a.length ? b.append(a) : (k(),
                                c.$destroy())
                        }, null, f);
                        f && !h.isSlotFilled(f) && k()
                    }
                }
            }
        }
        ]
        , Ge = ["$templateCache", function (a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function (b, d) {
                    "text/ng-template" === d.type && a.put(d.id, b[0].text)
                }
            }
        }
        ]
        , mh = {
            $setViewValue: C,
            $render: C
        }
        , nh = ["$element", "$scope", function (a, b) {
            var d = this
                , c = new Ra;
            d.ngModelCtrl = mh;
            d.unknownOption = E(B.document.createElement("option"));
            d.renderUnknownOption = function (b) {
                b = "? " + za(b) + " ?";
                d.unknownOption.val(b);
                a.prepend(d.unknownOption);
                a.val(b)
            }
                ;
            b.$on("$destroy", function () {
                d.renderUnknownOption = C
            });
            d.removeUnknownOption = function () {
                d.unknownOption.parent() && d.unknownOption.remove()
            }
                ;
            d.readValue = function () {
                d.removeUnknownOption();
                return a.val()
            }
                ;
            d.writeValue = function (b) {
                d.hasOption(b) ? (d.removeUnknownOption(),
                    a.val(b),
                    "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(),
                        a.val("")) : d.renderUnknownOption(b)
            }
                ;
            d.addOption = function (a, b) {
                if (8 !== b[0].nodeType) {
                    Qa(a, '"option value"');
                    "" === a && (d.emptyOption = b);
                    var g = c.get(a) || 0;
                    c.put(a, g + 1);
                    d.ngModelCtrl.$render();
                    b[0].hasAttribute("selected") && (b[0].selected = !0)
                }
            }
                ;
            d.removeOption = function (a) {
                var b = c.get(a);
                b && (1 === b ? (c.remove(a),
                    "" === a && (d.emptyOption = void 0)) : c.put(a, b - 1))
            }
                ;
            d.hasOption = function (a) {
                return !!c.get(a)
            }
                ;
            d.registerOption = function (a, b, c, h, k) {
                if (h) {
                    var l;
                    c.$observe("value", function (a) {
                        u(l) && d.removeOption(l);
                        l = a;
                        d.addOption(a, b)
                    })
                } else
                    k ? a.$watch(k, function (a, e) {
                        c.$set("value", a);
                        e !== a && d.removeOption(e);
                        d.addOption(a, b)
                    }) : d.addOption(c.value, b);
                b.on("$destroy", function () {
                    d.removeOption(c.value);
                    d.ngModelCtrl.$render()
                })
            }
        }
        ]
        , He = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: nh,
                priority: 1,
                link: {
                    pre: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            f.ngModelCtrl = e;
                            b.on("change", function () {
                                a.$apply(function () {
                                    e.$setViewValue(f.readValue())
                                })
                            });
                            if (d.multiple) {
                                f.readValue = function () {
                                    var a = [];
                                    q(b.find("option"), function (b) {
                                        b.selected && a.push(b.value)
                                    });
                                    return a
                                }
                                    ;
                                f.writeValue = function (a) {
                                    var c = new Ra(a);
                                    q(b.find("option"), function (a) {
                                        a.selected = u(c.get(a.value))
                                    })
                                }
                                    ;
                                var g, h = NaN;
                                a.$watch(function () {
                                    h !== e.$viewValue || oa(g, e.$viewValue) || (g = ia(e.$viewValue),
                                        e.$render());
                                    h = e.$viewValue
                                });
                                e.$isEmpty = function (a) {
                                    return !a || 0 === a.length
                                }
                            }
                        }
                    },
                    post: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            e.$render = function () {
                                f.writeValue(e.$viewValue)
                            }
                        }
                    }
                }
            }
        }
        , Ie = ["$interpolate", function (a) {
            return {
                restrict: "E",
                priority: 100,
                compile: function (b, d) {
                    if (u(d.value))
                        var c = a(d.value, !0);
                    else {
                        var e = a(b.text(), !0);
                        e || d.$set("value", b.text())
                    }
                    return function (a, b, d) {
                        var k = b.parent();
                        (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e)
                    }
                }
            }
        }
        ]
        , Pc = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, d, c) {
                    c && (d.required = !0,
                        c.$validators.required = function (a, b) {
                            return !d.required || !c.$isEmpty(b)
                        }
                        ,
                        d.$observe("required", function () {
                            c.$validate()
                        }))
                }
            }
        }
        , Oc = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, d, c) {
                    if (c) {
                        var e, f = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            H(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test)
                                throw N("ngPattern")("noregexp", f, a, wa(b));
                            e = a || void 0;
                            c.$validate()
                        });
                        c.$validators.pattern = function (a, b) {
                            return c.$isEmpty(b) || z(e) || e.test(b)
                        }
                    }
                }
            }
        }
        , Rc = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, d, c) {
                    if (c) {
                        var e = -1;
                        d.$observe("maxlength", function (a) {
                            a = aa(a);
                            e = X(a) ? -1 : a;
                            c.$validate()
                        });
                        c.$validators.maxlength = function (a, b) {
                            return 0 > e || c.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        }
        , Qc = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, d, c) {
                    if (c) {
                        var e = 0;
                        d.$observe("minlength", function (a) {
                            e = aa(a) || 0;
                            c.$validate()
                        });
                        c.$validators.minlength = function (a, b) {
                            return c.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    B.angular.bootstrap ? B.console && console.log("WARNING: Tried to load angular more than once.") : (ze(),
        Be(ga),
        ga.module("ngLocale", [], ["$provide", function (a) {
            function b(a) {
                a += "";
                var b = a.indexOf(".");
                return -1 == b ? 0 : a.length - b - 1
            }
            a.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["AM", "PM"],
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                    WEEKENDRANGE: [5, 6],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "-\u00a4",
                        negSuf: "",
                        posPre: "\u00a4",
                        posSuf: ""
                    }]
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function (a, c) {
                    var e = a | 0
                        , f = c;
                    void 0 === f && (f = Math.min(b(a), 3));
                    Math.pow(10, f);
                    return 1 == e && 0 == f ? "one" : "other"
                }
            })
        }
        ]),
        E(B.document).ready(function () {
            ue(B.document, Ic)
        }))
}
)(window);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
