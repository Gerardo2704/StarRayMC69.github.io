"object" == typeof navigator && function() {
	"use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var n = function(e) {
            return e && e.Math == Math && e
        },
        r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
        i = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        o = !i((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        a = {}.propertyIsEnumerable,
        s = Object.getOwnPropertyDescriptor,
        c = {
            f: s && !a.call({
                1: 2
            }, 1) ? function(e) {
                var t = s(this, e);
                return !!t && t.enumerable
            } : a
        },
        u = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        l = {}.toString,
        f = function(e) {
            return l.call(e).slice(8, -1)
        },
        h = "".split,
        p = i((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == f(e) ? h.call(e, "") : Object(e)
        } : Object,
        d = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        g = function(e) {
            return p(d(e))
        },
        m = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        v = function(e, t) {
            if (!m(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !m(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !m(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !m(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        y = {}.hasOwnProperty,
        b = function(e, t) {
            return y.call(e, t)
        },
        w = r.document,
        _ = m(w) && m(w.createElement),
        E = function(e) {
            return _ ? w.createElement(e) : {}
        },
        k = !o && !i((function() {
            return 7 != Object.defineProperty(E("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        S = Object.getOwnPropertyDescriptor,
        T = {
            f: o ? S : function(e, t) {
                if (e = g(e), t = v(t, !0), k) try {
                    return S(e, t)
                } catch (e) {}
                if (b(e, t)) return u(!c.f.call(e, t), e[t])
            }
        },
        x = function(e) {
            if (!m(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        A = Object.defineProperty,
        O = {
            f: o ? A : function(e, t, n) {
                if (x(e), t = v(t, !0), x(n), k) try {
                    return A(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        P = o ? function(e, t, n) {
            return O.f(e, t, u(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        C = function(e, t) {
            try {
                P(r, e, t)
            } catch (n) {
                r[e] = t
            }
            return t
        },
        I = "__core-js_shared__",
        j = r[I] || C(I, {}),
        R = Function.toString;
    "function" != typeof j.inspectSource && (j.inspectSource = function(e) {
        return R.call(e)
    });
    var L, N, M, U = j.inspectSource,
        D = r.WeakMap,
        F = "function" == typeof D && /native code/.test(U(D)),
        B = t((function(e) {
            (e.exports = function(e, t) {
                return j[e] || (j[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        q = 0,
        H = Math.random(),
        V = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++q + H).toString(36)
        },
        W = B("keys"),
        z = function(e) {
            return W[e] || (W[e] = V(e))
        },
        Y = {},
        $ = r.WeakMap;
    if (F) {
        var G = new $,
            K = G.get,
            X = G.has,
            J = G.set;
        L = function(e, t) {
            return J.call(G, e, t), t
        }, N = function(e) {
            return K.call(G, e) || {}
        }, M = function(e) {
            return X.call(G, e)
        }
    } else {
        var Q = z("state");
        Y[Q] = !0, L = function(e, t) {
            return P(e, Q, t), t
        }, N = function(e) {
            return b(e, Q) ? e[Q] : {}
        }, M = function(e) {
            return b(e, Q)
        }
    }
    var Z = {
            set: L,
            get: N,
            has: M,
            enforce: function(e) {
                return M(e) ? N(e) : L(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!m(t) || (n = N(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        ee = t((function(e) {
            var t = Z.get,
                n = Z.enforce,
                i = String(String).split("String");
            (e.exports = function(e, t, o, a) {
                var s = !!a && !!a.unsafe,
                    c = !!a && !!a.enumerable,
                    u = !!a && !!a.noTargetGet;
                "function" == typeof o && ("string" != typeof t || b(o, "name") || P(o, "name", t), n(o).source = i.join("string" == typeof t ? t : "")), e !== r ? (s ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = o : P(e, t, o)) : c ? e[t] = o : C(t, o)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && t(this).source || U(this)
            }))
        })),
        te = r,
        ne = function(e) {
            return "function" == typeof e ? e : void 0
        },
        re = function(e, t) {
            return arguments.length < 2 ? ne(te[e]) || ne(r[e]) : te[e] && te[e][t] || r[e] && r[e][t]
        },
        ie = Math.ceil,
        oe = Math.floor,
        ae = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? oe : ie)(e)
        },
        se = Math.min,
        ce = function(e) {
            return e > 0 ? se(ae(e), 9007199254740991) : 0
        },
        ue = Math.max,
        le = Math.min,
        fe = function(e, t) {
            var n = ae(e);
            return n < 0 ? ue(n + t, 0) : le(n, t)
        },
        he = function(e) {
            return function(t, n, r) {
                var i, o = g(t),
                    a = ce(o.length),
                    s = fe(r, a);
                if (e && n != n) {
                    for (; a > s;)
                        if ((i = o[s++]) != i) return !0
                } else
                    for (; a > s; s++)
                        if ((e || s in o) && o[s] === n) return e || s || 0;
                return !e && -1
            }
        },
        pe = {
            includes: he(!0),
            indexOf: he(!1)
        },
        de = pe.indexOf,
        ge = function(e, t) {
            var n, r = g(e),
                i = 0,
                o = [];
            for (n in r) !b(Y, n) && b(r, n) && o.push(n);
            for (; t.length > i;) b(r, n = t[i++]) && (~de(o, n) || o.push(n));
            return o
        },
        me = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ve = me.concat("length", "prototype"),
        ye = {
            f: Object.getOwnPropertyNames || function(e) {
                return ge(e, ve)
            }
        },
        be = {
            f: Object.getOwnPropertySymbols
        },
        we = re("Reflect", "ownKeys") || function(e) {
            var t = ye.f(x(e)),
                n = be.f;
            return n ? t.concat(n(e)) : t
        },
        _e = function(e, t) {
            for (var n = we(t), r = O.f, i = T.f, o = 0; o < n.length; o++) {
                var a = n[o];
                b(e, a) || r(e, a, i(t, a))
            }
        },
        Ee = /#|\.prototype\./,
        ke = function(e, t) {
            var n = Te[Se(e)];
            return n == Ae || n != xe && ("function" == typeof t ? i(t) : !!t)
        },
        Se = ke.normalize = function(e) {
            return String(e).replace(Ee, ".").toLowerCase()
        },
        Te = ke.data = {},
        xe = ke.NATIVE = "N",
        Ae = ke.POLYFILL = "P",
        Oe = ke,
        Pe = T.f,
        Ce = function(e, t) {
            var n, i, o, a, s, c = e.target,
                u = e.global,
                l = e.stat;
            if (n = u ? r : l ? r[c] || C(c, {}) : (r[c] || {}).prototype)
                for (i in t) {
                    if (a = t[i], o = e.noTargetGet ? (s = Pe(n, i)) && s.value : n[i], !Oe(u ? i : c + (l ? "." : "#") + i, e.forced) && void 0 !== o) {
                        if (typeof a == typeof o) continue;
                        _e(a, o)
                    }(e.sham || o && o.sham) && P(a, "sham", !0), ee(n, i, a, e)
                }
        },
        Ie = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        je = function(e, t, n) {
            if (Ie(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        Re = function(e) {
            return Object(d(e))
        },
        Le = Array.isArray || function(e) {
            return "Array" == f(e)
        },
        Ne = !!Object.getOwnPropertySymbols && !i((function() {
            return !String(Symbol())
        })),
        Me = Ne && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ue = B("wks"),
        De = r.Symbol,
        Fe = Me ? De : De && De.withoutSetter || V,
        Be = function(e) {
            return b(Ue, e) || (Ne && b(De, e) ? Ue[e] = De[e] : Ue[e] = Fe("Symbol." + e)), Ue[e]
        },
        qe = Be("species"),
        He = function(e, t) {
            var n;
            return Le(e) && ("function" != typeof(n = e.constructor) || n !== Array && !Le(n.prototype) ? m(n) && null === (n = n[qe]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        Ve = [].push,
        We = function(e) {
            var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                i = 4 == e,
                o = 6 == e,
                a = 5 == e || o;
            return function(s, c, u, l) {
                for (var f, h, d = Re(s), g = p(d), m = je(c, u, 3), v = ce(g.length), y = 0, b = l || He, w = t ? b(s, v) : n ? b(s, 0) : void 0; v > y; y++)
                    if ((a || y in g) && (h = m(f = g[y], y, d), e))
                        if (t) w[y] = h;
                        else if (h) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return y;
                    case 2:
                        Ve.call(w, f)
                } else if (i) return !1;
                return o ? -1 : r || i ? i : w
            }
        },
        ze = {
            forEach: We(0),
            map: We(1),
            filter: We(2),
            some: We(3),
            every: We(4),
            find: We(5),
            findIndex: We(6)
        },
        Ye = function(e, t) {
            var n = [][e];
            return !!n && i((function() {
                n.call(null, t || function() {
                    throw 1
                }, 1)
            }))
        },
        $e = Object.defineProperty,
        Ge = {},
        Ke = function(e) {
            throw e
        },
        Xe = function(e, t) {
            if (b(Ge, e)) return Ge[e];
            t || (t = {});
            var n = [][e],
                r = !!b(t, "ACCESSORS") && t.ACCESSORS,
                a = b(t, 0) ? t[0] : Ke,
                s = b(t, 1) ? t[1] : void 0;
            return Ge[e] = !!n && !i((function() {
                if (r && !o) return !0;
                var e = {
                    length: -1
                };
                r ? $e(e, 1, {
                    enumerable: !0,
                    get: Ke
                }) : e[1] = 1, n.call(e, a, s)
            }))
        },
        Je = ze.forEach,
        Qe = Ye("forEach"),
        Ze = Xe("forEach"),
        et = Qe && Ze ? [].forEach : function(e) {
            return Je(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    Ce({
        target: "Array",
        proto: !0,
        forced: [].forEach != et
    }, {
        forEach: et
    });
    var tt = function(e, t, n, r) {
            try {
                return r ? t(x(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && x(i.call(e)), t
            }
        },
        nt = {},
        rt = Be("iterator"),
        it = Array.prototype,
        ot = function(e) {
            return void 0 !== e && (nt.Array === e || it[rt] === e)
        },
        at = function(e, t, n) {
            var r = v(t);
            r in e ? O.f(e, r, u(0, n)) : e[r] = n
        },
        st = {};
    st[Be("toStringTag")] = "z";
    var ct = "[object z]" === String(st),
        ut = Be("toStringTag"),
        lt = "Arguments" == f(function() {
            return arguments
        }()),
        ft = ct ? f : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), ut)) ? n : lt ? f(t) : "Object" == (r = f(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        ht = Be("iterator"),
        pt = function(e) {
            if (null != e) return e[ht] || e["@@iterator"] || nt[ft(e)]
        },
        dt = function(e) {
            var t, n, r, i, o, a, s = Re(e),
                c = "function" == typeof this ? this : Array,
                u = arguments.length,
                l = u > 1 ? arguments[1] : void 0,
                f = void 0 !== l,
                h = pt(s),
                p = 0;
            if (f && (l = je(l, u > 2 ? arguments[2] : void 0, 2)), null == h || c == Array && ot(h))
                for (n = new c(t = ce(s.length)); t > p; p++) a = f ? l(s[p], p) : s[p], at(n, p, a);
            else
                for (o = (i = h.call(s)).next, n = new c; !(r = o.call(i)).done; p++) a = f ? tt(i, l, [r.value, p], !0) : r.value, at(n, p, a);
            return n.length = p, n
        },
        gt = Be("iterator"),
        mt = !1;
    try {
        var vt = 0,
            yt = {
                next: function() {
                    return {
                        done: !!vt++
                    }
                },
                return: function() {
                    mt = !0
                }
            };
        yt[gt] = function() {
            return this
        }, Array.from(yt, (function() {
            throw 2
        }))
    } catch (e) {}
    var bt = function(e, t) {
            if (!t && !mt) return !1;
            var n = !1;
            try {
                var r = {};
                r[gt] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(r)
            } catch (e) {}
            return n
        },
        wt = !bt((function(e) {
            Array.from(e)
        }));
    Ce({
        target: "Array",
        stat: !0,
        forced: wt
    }, {
        from: dt
    });
    var _t, Et = Object.keys || function(e) {
            return ge(e, me)
        },
        kt = o ? Object.defineProperties : function(e, t) {
            x(e);
            for (var n, r = Et(t), i = r.length, o = 0; i > o;) O.f(e, n = r[o++], t[n]);
            return e
        },
        St = re("document", "documentElement"),
        Tt = z("IE_PROTO"),
        xt = function() {},
        At = function(e) {
            return "<script>" + e + "</" + "script>"
        },
        Ot = function() {
            try {
                _t = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            Ot = _t ? function(e) {
                e.write(At("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(_t) : ((t = E("iframe")).style.display = "none", St.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(At("document.F=Object")), e.close(), e.F);
            for (var n = me.length; n--;) delete Ot.prototype[me[n]];
            return Ot()
        };
    Y[Tt] = !0;
    var Pt = Object.create || function(e, t) {
            var n;
            return null !== e ? (xt.prototype = x(e), n = new xt, xt.prototype = null, n[Tt] = e) : n = Ot(), void 0 === t ? n : kt(n, t)
        },
        Ct = Be("unscopables"),
        It = Array.prototype;
    null == It[Ct] && O.f(It, Ct, {
        configurable: !0,
        value: Pt(null)
    });
    var jt = function(e) {
            It[Ct][e] = !0
        },
        Rt = pe.includes,
        Lt = Xe("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    Ce({
        target: "Array",
        proto: !0,
        forced: !Lt
    }, {
        includes: function(e) {
            return Rt(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), jt("includes");
    var Nt, Mt, Ut = re("navigator", "userAgent") || "",
        Dt = r.process,
        Ft = Dt && Dt.versions,
        Bt = Ft && Ft.v8;
    Bt ? Mt = (Nt = Bt.split("."))[0] + Nt[1] : Ut && (!(Nt = Ut.match(/Edge\/(\d+)/)) || Nt[1] >= 74) && (Nt = Ut.match(/Chrome\/(\d+)/)) && (Mt = Nt[1]);
    var qt = Mt && +Mt,
        Ht = Be("species"),
        Vt = function(e) {
            return qt >= 51 || !i((function() {
                var t = [];
                return (t.constructor = {})[Ht] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            }))
        },
        Wt = ze.map,
        zt = Vt("map"),
        Yt = Xe("map");
    Ce({
        target: "Array",
        proto: !0,
        forced: !zt || !Yt
    }, {
        map: function(e) {
            return Wt(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var $t = i((function() {
        Et(1)
    }));
    Ce({
        target: "Object",
        stat: !0,
        forced: $t
    }, {
        keys: function(e) {
            return Et(Re(e))
        }
    });
    var Gt = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function(n, r) {
                return x(n),
                    function(e) {
                        if (!m(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(r), t ? e.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        Kt = function(e, t, n) {
            var r, i;
            return Gt && "function" == typeof(r = t.constructor) && r !== n && m(i = r.prototype) && i !== n.prototype && Gt(e, i), e
        },
        Xt = Be("match"),
        Jt = function(e) {
            var t;
            return m(e) && (void 0 !== (t = e[Xt]) ? !!t : "RegExp" == f(e))
        },
        Qt = function() {
            var e = x(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        };

    function Zt(e, t) {
        return RegExp(e, t)
    }
    var en = {
            UNSUPPORTED_Y: i((function() {
                var e = Zt("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })),
            BROKEN_CARET: i((function() {
                var e = Zt("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        tn = Be("species"),
        nn = function(e) {
            var t = re(e),
                n = O.f;
            o && t && !t[tn] && n(t, tn, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        rn = O.f,
        on = ye.f,
        an = Z.set,
        sn = Be("match"),
        cn = r.RegExp,
        un = cn.prototype,
        ln = /a/g,
        fn = /a/g,
        hn = new cn(ln) !== ln,
        pn = en.UNSUPPORTED_Y;
    if (o && Oe("RegExp", !hn || pn || i((function() {
            return fn[sn] = !1, cn(ln) != ln || cn(fn) == fn || "/a/i" != cn(ln, "i")
        })))) {
        for (var dn = function(e, t) {
                var n, r = this instanceof dn,
                    i = Jt(e),
                    o = void 0 === t;
                if (!r && i && e.constructor === dn && o) return e;
                hn ? i && !o && (e = e.source) : e instanceof dn && (o && (t = Qt.call(e)), e = e.source), pn && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                var a = Kt(hn ? new cn(e, t) : cn(e, t), r ? this : un, dn);
                return pn && n && an(a, {
                    sticky: n
                }), a
            }, gn = function(e) {
                e in dn || rn(dn, e, {
                    configurable: !0,
                    get: function() {
                        return cn[e]
                    },
                    set: function(t) {
                        cn[e] = t
                    }
                })
            }, mn = on(cn), vn = 0; mn.length > vn;) gn(mn[vn++]);
        un.constructor = dn, dn.prototype = un, ee(r, "RegExp", dn)
    }
    nn("RegExp");
    var yn = RegExp.prototype.exec,
        bn = String.prototype.replace,
        wn = yn,
        _n = function() {
            var e = /a/,
                t = /b*/g;
            return yn.call(e, "a"), yn.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        }(),
        En = en.UNSUPPORTED_Y || en.BROKEN_CARET,
        kn = void 0 !== /()??/.exec("")[1];
    (_n || kn || En) && (wn = function(e) {
        var t, n, r, i, o = this,
            a = En && o.sticky,
            s = Qt.call(o),
            c = o.source,
            u = 0,
            l = e;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), l = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (c = "(?: " + c + ")", l = " " + l, u++), n = new RegExp("^(?:" + c + ")", s)), kn && (n = new RegExp("^" + c + "$(?!\\s)", s)), _n && (t = o.lastIndex), r = yn.call(a ? n : o, l), a ? r ? (r.input = r.input.slice(u), r[0] = r[0].slice(u), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : _n && r && (o.lastIndex = o.global ? r.index + r[0].length : t), kn && r && r.length > 1 && bn.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    });
    var Sn = wn;
    Ce({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Sn
    }, {
        exec: Sn
    });
    var Tn = "toString",
        xn = RegExp.prototype,
        An = xn.toString,
        On = i((function() {
            return "/a/b" != An.call({
                source: "a",
                flags: "b"
            })
        })),
        Pn = An.name != Tn;
    (On || Pn) && ee(RegExp.prototype, Tn, (function() {
        var e = x(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in xn) ? Qt.call(e) : n)
    }), {
        unsafe: !0
    });
    var Cn = function(e) {
            if (Jt(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        },
        In = Be("match");
    Ce({
        target: "String",
        proto: !0,
        forced: ! function(e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[In] = !1, "/./" [e](t)
                } catch (e) {}
            }
            return !1
        }("includes")
    }, {
        includes: function(e) {
            return !!~String(d(this)).indexOf(Cn(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var jn, Rn, Ln, Nn = function(e) {
            return function(t, n) {
                var r, i, o = String(d(t)),
                    a = ae(n),
                    s = o.length;
                return a < 0 || a >= s ? e ? "" : void 0 : (r = o.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : i - 56320 + (r - 55296 << 10) + 65536
            }
        },
        Mn = {
            codeAt: Nn(!1),
            charAt: Nn(!0)
        },
        Un = !i((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        Dn = z("IE_PROTO"),
        Fn = Object.prototype,
        Bn = Un ? Object.getPrototypeOf : function(e) {
            return e = Re(e), b(e, Dn) ? e[Dn] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Fn : null
        },
        qn = Be("iterator"),
        Hn = !1;
    [].keys && ("next" in (Ln = [].keys()) ? (Rn = Bn(Bn(Ln))) !== Object.prototype && (jn = Rn) : Hn = !0), null == jn && (jn = {}), b(jn, qn) || P(jn, qn, (function() {
        return this
    }));
    var Vn = {
            IteratorPrototype: jn,
            BUGGY_SAFARI_ITERATORS: Hn
        },
        Wn = O.f,
        zn = Be("toStringTag"),
        Yn = function(e, t, n) {
            e && !b(e = n ? e : e.prototype, zn) && Wn(e, zn, {
                configurable: !0,
                value: t
            })
        },
        $n = Vn.IteratorPrototype,
        Gn = function() {
            return this
        },
        Kn = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = Pt($n, {
                next: u(1, n)
            }), Yn(e, r, !1), nt[r] = Gn, e
        },
        Xn = Vn.IteratorPrototype,
        Jn = Vn.BUGGY_SAFARI_ITERATORS,
        Qn = Be("iterator"),
        Zn = "keys",
        er = "values",
        tr = "entries",
        nr = function() {
            return this
        },
        rr = function(e, t, n, r, i, o, a) {
            Kn(n, t, r);
            var s, c, u, l = function(e) {
                    if (e === i && g) return g;
                    if (!Jn && e in p) return p[e];
                    switch (e) {
                        case Zn:
                        case er:
                        case tr:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                f = t + " Iterator",
                h = !1,
                p = e.prototype,
                d = p[Qn] || p["@@iterator"] || i && p[i],
                g = !Jn && d || l(i),
                m = "Array" == t && p.entries || d;
            if (m && (s = Bn(m.call(new e)), Xn !== Object.prototype && s.next && (Bn(s) !== Xn && (Gt ? Gt(s, Xn) : "function" != typeof s[Qn] && P(s, Qn, nr)), Yn(s, f, !0))), i == er && d && d.name !== er && (h = !0, g = function() {
                    return d.call(this)
                }), p[Qn] !== g && P(p, Qn, g), nt[t] = g, i)
                if (c = {
                        values: l(er),
                        keys: o ? g : l(Zn),
                        entries: l(tr)
                    }, a)
                    for (u in c)(Jn || h || !(u in p)) && ee(p, u, c[u]);
                else Ce({
                    target: t,
                    proto: !0,
                    forced: Jn || h
                }, c);
            return c
        },
        ir = Mn.charAt,
        or = "String Iterator",
        ar = Z.set,
        sr = Z.getterFor(or);
    rr(String, "String", (function(e) {
        ar(this, {
            type: or,
            string: String(e),
            index: 0
        })
    }), (function() {
        var e, t = sr(this),
            n = t.string,
            r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = ir(n, r), t.index += e.length, {
            value: e,
            done: !1
        })
    }));
    var cr = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var ur in cr) {
        var lr = r[ur],
            fr = lr && lr.prototype;
        if (fr && fr.forEach !== et) try {
            P(fr, "forEach", et)
        } catch (e) {
            fr.forEach = et
        }
    }
    var hr = document.getElementById("container"),
        pr = "tab-focus";
    document.addEventListener("focusout", (function(e) {
            e.target.classList && !hr.contains(e.target) && e.target.classList.remove(pr)
        })), document.addEventListener("keydown", (function(e) {
            9 === e.keyCode && setTimeout((function() {
                var e = document.activeElement;
                e && e.classList && !hr.contains(e) && e.classList.add(pr)
            }), 10)
        })),
        function() {
            if ("undefined" != typeof window) try {
                var e = new window.CustomEvent("test", {
                    cancelable: !0
                });
                if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default")
            } catch (e) {
                var t = function(e, t) {
                    var n, r;
                    return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r = n.preventDefault, n.preventDefault = function() {
                        r.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }, n
                };
                t.prototype = window.Event.prototype, window.CustomEvent = t
            }
        }();
    var dr = ye.f,
        gr = {}.toString,
        mr = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        vr = {
            f: function(e) {
                return mr && "[object Window]" == gr.call(e) ? function(e) {
                    try {
                        return dr(e)
                    } catch (e) {
                        return mr.slice()
                    }
                }(e) : dr(g(e))
            }
        },
        yr = {
            f: Be
        },
        br = O.f,
        wr = function(e) {
            var t = te.Symbol || (te.Symbol = {});
            b(t, e) || br(t, e, {
                value: yr.f(e)
            })
        },
        _r = ze.forEach,
        Er = z("hidden"),
        kr = "Symbol",
        Sr = Be("toPrimitive"),
        Tr = Z.set,
        xr = Z.getterFor(kr),
        Ar = Object.prototype,
        Or = r.Symbol,
        Pr = re("JSON", "stringify"),
        Cr = T.f,
        Ir = O.f,
        jr = vr.f,
        Rr = c.f,
        Lr = B("symbols"),
        Nr = B("op-symbols"),
        Mr = B("string-to-symbol-registry"),
        Ur = B("symbol-to-string-registry"),
        Dr = B("wks"),
        Fr = r.QObject,
        Br = !Fr || !Fr.prototype || !Fr.prototype.findChild,
        qr = o && i((function() {
            return 7 != Pt(Ir({}, "a", {
                get: function() {
                    return Ir(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(e, t, n) {
            var r = Cr(Ar, t);
            r && delete Ar[t], Ir(e, t, n), r && e !== Ar && Ir(Ar, t, r)
        } : Ir,
        Hr = function(e, t) {
            var n = Lr[e] = Pt(Or.prototype);
            return Tr(n, {
                type: kr,
                tag: e,
                description: t
            }), o || (n.description = t), n
        },
        Vr = Me ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof Or
        },
        Wr = function(e, t, n) {
            e === Ar && Wr(Nr, t, n), x(e);
            var r = v(t, !0);
            return x(n), b(Lr, r) ? (n.enumerable ? (b(e, Er) && e[Er][r] && (e[Er][r] = !1), n = Pt(n, {
                enumerable: u(0, !1)
            })) : (b(e, Er) || Ir(e, Er, u(1, {})), e[Er][r] = !0), qr(e, r, n)) : Ir(e, r, n)
        },
        zr = function(e, t) {
            x(e);
            var n = g(t),
                r = Et(n).concat(Kr(n));
            return _r(r, (function(t) {
                o && !Yr.call(n, t) || Wr(e, t, n[t])
            })), e
        },
        Yr = function(e) {
            var t = v(e, !0),
                n = Rr.call(this, t);
            return !(this === Ar && b(Lr, t) && !b(Nr, t)) && (!(n || !b(this, t) || !b(Lr, t) || b(this, Er) && this[Er][t]) || n)
        },
        $r = function(e, t) {
            var n = g(e),
                r = v(t, !0);
            if (n !== Ar || !b(Lr, r) || b(Nr, r)) {
                var i = Cr(n, r);
                return !i || !b(Lr, r) || b(n, Er) && n[Er][r] || (i.enumerable = !0), i
            }
        },
        Gr = function(e) {
            var t = jr(g(e)),
                n = [];
            return _r(t, (function(e) {
                b(Lr, e) || b(Y, e) || n.push(e)
            })), n
        },
        Kr = function(e) {
            var t = e === Ar,
                n = jr(t ? Nr : g(e)),
                r = [];
            return _r(n, (function(e) {
                !b(Lr, e) || t && !b(Ar, e) || r.push(Lr[e])
            })), r
        };
    if (Ne || (ee((Or = function() {
            if (this instanceof Or) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = V(e),
                n = function(e) {
                    this === Ar && n.call(Nr, e), b(this, Er) && b(this[Er], t) && (this[Er][t] = !1), qr(this, t, u(1, e))
                };
            return o && Br && qr(Ar, t, {
                configurable: !0,
                set: n
            }), Hr(t, e)
        }).prototype, "toString", (function() {
            return xr(this).tag
        })), ee(Or, "withoutSetter", (function(e) {
            return Hr(V(e), e)
        })), c.f = Yr, O.f = Wr, T.f = $r, ye.f = vr.f = Gr, be.f = Kr, yr.f = function(e) {
            return Hr(Be(e), e)
        }, o && (Ir(Or.prototype, "description", {
            configurable: !0,
            get: function() {
                return xr(this).description
            }
        }), ee(Ar, "propertyIsEnumerable", Yr, {
            unsafe: !0
        }))), Ce({
            global: !0,
            wrap: !0,
            forced: !Ne,
            sham: !Ne
        }, {
            Symbol: Or
        }), _r(Et(Dr), (function(e) {
            wr(e)
        })), Ce({
            target: kr,
            stat: !0,
            forced: !Ne
        }, {
            for: function(e) {
                var t = String(e);
                if (b(Mr, t)) return Mr[t];
                var n = Or(t);
                return Mr[t] = n, Ur[n] = t, n
            },
            keyFor: function(e) {
                if (!Vr(e)) throw TypeError(e + " is not a symbol");
                if (b(Ur, e)) return Ur[e]
            },
            useSetter: function() {
                Br = !0
            },
            useSimple: function() {
                Br = !1
            }
        }), Ce({
            target: "Object",
            stat: !0,
            forced: !Ne,
            sham: !o
        }, {
            create: function(e, t) {
                return void 0 === t ? Pt(e) : zr(Pt(e), t)
            },
            defineProperty: Wr,
            defineProperties: zr,
            getOwnPropertyDescriptor: $r
        }), Ce({
            target: "Object",
            stat: !0,
            forced: !Ne
        }, {
            getOwnPropertyNames: Gr,
            getOwnPropertySymbols: Kr
        }), Ce({
            target: "Object",
            stat: !0,
            forced: i((function() {
                be.f(1)
            }))
        }, {
            getOwnPropertySymbols: function(e) {
                return be.f(Re(e))
            }
        }), Pr) {
        var Xr = !Ne || i((function() {
            var e = Or();
            return "[null]" != Pr([e]) || "{}" != Pr({
                a: e
            }) || "{}" != Pr(Object(e))
        }));
        Ce({
            target: "JSON",
            stat: !0,
            forced: Xr
        }, {
            stringify: function(e, t, n) {
                for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
                if (r = t, (m(t) || void 0 !== e) && !Vr(e)) return Le(t) || (t = function(e, t) {
                    if ("function" == typeof r && (t = r.call(this, e, t)), !Vr(t)) return t
                }), i[1] = t, Pr.apply(null, i)
            }
        })
    }
    Or.prototype[Sr] || P(Or.prototype, Sr, Or.prototype.valueOf), Yn(Or, kr), Y[Er] = !0;
    var Jr = O.f,
        Qr = r.Symbol;
    if (o && "function" == typeof Qr && (!("description" in Qr.prototype) || void 0 !== Qr().description)) {
        var Zr = {},
            ei = function() {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof ei ? new Qr(e) : void 0 === e ? Qr() : Qr(e);
                return "" === e && (Zr[t] = !0), t
            };
        _e(ei, Qr);
        var ti = ei.prototype = Qr.prototype;
        ti.constructor = ei;
        var ni = ti.toString,
            ri = "Symbol(test)" == String(Qr("test")),
            ii = /^Symbol\((.*)\)[^)]+$/;
        Jr(ti, "description", {
            configurable: !0,
            get: function() {
                var e = m(this) ? this.valueOf() : this,
                    t = ni.call(e);
                if (b(Zr, e)) return "";
                var n = ri ? t.slice(7, -1) : t.replace(ii, "$1");
                return "" === n ? void 0 : n
            }
        }), Ce({
            global: !0,
            forced: !0
        }, {
            Symbol: ei
        })
    }
    wr("iterator");
    var oi = pe.indexOf,
        ai = [].indexOf,
        si = !!ai && 1 / [1].indexOf(1, -0) < 0,
        ci = Ye("indexOf"),
        ui = Xe("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    Ce({
        target: "Array",
        proto: !0,
        forced: si || !ci || !ui
    }, {
        indexOf: function(e) {
            return si ? ai.apply(this, arguments) || 0 : oi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var li = "Array Iterator",
        fi = Z.set,
        hi = Z.getterFor(li),
        pi = rr(Array, "Array", (function(e, t) {
            fi(this, {
                type: li,
                target: g(e),
                index: 0,
                kind: t
            })
        }), (function() {
            var e = hi(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }), "values");
    nt.Arguments = nt.Array, jt("keys"), jt("values"), jt("entries");
    var di = [].join,
        gi = p != Object,
        mi = Ye("join", ",");
    Ce({
        target: "Array",
        proto: !0,
        forced: gi || !mi
    }, {
        join: function(e) {
            return di.call(g(this), void 0 === e ? "," : e)
        }
    });
    var vi = Vt("slice"),
        yi = Xe("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        bi = Be("species"),
        wi = [].slice,
        _i = Math.max;
    Ce({
        target: "Array",
        proto: !0,
        forced: !vi || !yi
    }, {
        slice: function(e, t) {
            var n, r, i, o = g(this),
                a = ce(o.length),
                s = fe(e, a),
                c = fe(void 0 === t ? a : t, a);
            if (Le(o) && ("function" != typeof(n = o.constructor) || n !== Array && !Le(n.prototype) ? m(n) && null === (n = n[bi]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return wi.call(o, s, c);
            for (r = new(void 0 === n ? Array : n)(_i(c - s, 0)), i = 0; s < c; s++, i++) s in o && at(r, i, o[s]);
            return r.length = i, r
        }
    });
    var Ei = ct ? {}.toString : function() {
        return "[object " + ft(this) + "]"
    };
    ct || ee(Object.prototype, "toString", Ei, {
        unsafe: !0
    });
    var ki = Be("species"),
        Si = !i((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        Ti = "$0" === "a".replace(/./, "$0"),
        xi = Be("replace"),
        Ai = !!/./ [xi] && "" === /./ [xi]("a", "$0"),
        Oi = !i((function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        Pi = function(e, t, n, r) {
            var o = Be(e),
                a = !i((function() {
                    var t = {};
                    return t[o] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                s = a && !i((function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[ki] = function() {
                        return n
                    }, n.flags = "", n[o] = /./ [o]), n.exec = function() {
                        return t = !0, null
                    }, n[o](""), !t
                }));
            if (!a || !s || "replace" === e && (!Si || !Ti || Ai) || "split" === e && !Oi) {
                var c = /./ [o],
                    u = n(o, "" [e], (function(e, t, n, r, i) {
                        return t.exec === Sn ? a && !i ? {
                            done: !0,
                            value: c.call(t, n, r)
                        } : {
                            done: !0,
                            value: e.call(n, t, r)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: Ti,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ai
                    }),
                    l = u[0],
                    f = u[1];
                ee(String.prototype, e, l), ee(RegExp.prototype, o, 2 == t ? function(e, t) {
                    return f.call(e, this, t)
                } : function(e) {
                    return f.call(e, this)
                })
            }
            r && P(RegExp.prototype[o], "sham", !0)
        },
        Ci = Mn.charAt,
        Ii = function(e, t, n) {
            return t + (n ? Ci(e, t).length : 1)
        },
        ji = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var r = n.call(e, t);
                if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
                return r
            }
            if ("RegExp" !== f(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Sn.call(e, t)
        },
        Ri = Math.max,
        Li = Math.min,
        Ni = Math.floor,
        Mi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Ui = /\$([$&'`]|\d\d?)/g;
    Pi("replace", 2, (function(e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = r.REPLACE_KEEPS_$0,
            a = i ? "$" : "$0";
        return [function(n, r) {
            var i = d(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }, function(e, r) {
            if (!i && o || "string" == typeof r && -1 === r.indexOf(a)) {
                var c = n(t, e, this, r);
                if (c.done) return c.value
            }
            var u = x(e),
                l = String(this),
                f = "function" == typeof r;
            f || (r = String(r));
            var h = u.global;
            if (h) {
                var p = u.unicode;
                u.lastIndex = 0
            }
            for (var d = [];;) {
                var g = ji(u, l);
                if (null === g) break;
                if (d.push(g), !h) break;
                "" === String(g[0]) && (u.lastIndex = Ii(l, ce(u.lastIndex), p))
            }
            for (var m, v = "", y = 0, b = 0; b < d.length; b++) {
                g = d[b];
                for (var w = String(g[0]), _ = Ri(Li(ae(g.index), l.length), 0), E = [], k = 1; k < g.length; k++) E.push(void 0 === (m = g[k]) ? m : String(m));
                var S = g.groups;
                if (f) {
                    var T = [w].concat(E, _, l);
                    void 0 !== S && T.push(S);
                    var A = String(r.apply(void 0, T))
                } else A = s(w, l, _, E, S, r);
                _ >= y && (v += l.slice(y, _) + A, y = _ + w.length)
            }
            return v + l.slice(y)
        }];

        function s(e, n, r, i, o, a) {
            var s = r + e.length,
                c = i.length,
                u = Ui;
            return void 0 !== o && (o = Re(o), u = Mi), t.call(a, u, (function(t, a) {
                var u;
                switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, r);
                    case "'":
                        return n.slice(s);
                    case "<":
                        u = o[a.slice(1, -1)];
                        break;
                    default:
                        var l = +a;
                        if (0 === l) return t;
                        if (l > c) {
                            var f = Ni(l / 10);
                            return 0 === f ? t : f <= c ? void 0 === i[f - 1] ? a.charAt(1) : i[f - 1] + a.charAt(1) : t
                        }
                        u = i[l - 1]
                }
                return void 0 === u ? "" : u
            }))
        }
    }));
    var Di = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    Pi("search", 1, (function(e, t, n) {
        return [function(t) {
            var n = d(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = x(e),
                o = String(this),
                a = i.lastIndex;
            Di(a, 0) || (i.lastIndex = 0);
            var s = ji(i, o);
            return Di(i.lastIndex, a) || (i.lastIndex = a), null === s ? -1 : s.index
        }]
    }));
    var Fi = Be("species"),
        Bi = function(e, t) {
            var n, r = x(e).constructor;
            return void 0 === r || null == (n = x(r)[Fi]) ? t : Ie(n)
        },
        qi = [].push,
        Hi = Math.min,
        Vi = 4294967295,
        Wi = !i((function() {
            return !RegExp(Vi, "y")
        }));
    Pi("split", 2, (function(e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var r = String(d(this)),
                i = void 0 === n ? Vi : n >>> 0;
            if (0 === i) return [];
            if (void 0 === e) return [r];
            if (!Jt(e)) return t.call(r, e, i);
            for (var o, a, s, c = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, f = new RegExp(e.source, u + "g");
                (o = Sn.call(f, r)) && !((a = f.lastIndex) > l && (c.push(r.slice(l, o.index)), o.length > 1 && o.index < r.length && qi.apply(c, o.slice(1)), s = o[0].length, l = a, c.length >= i));) f.lastIndex === o.index && f.lastIndex++;
            return l === r.length ? !s && f.test("") || c.push("") : c.push(r.slice(l)), c.length > i ? c.slice(0, i) : c
        } : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function(t, n) {
            var i = d(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }, function(e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done) return o.value;
            var a = x(e),
                s = String(this),
                c = Bi(a, RegExp),
                u = a.unicode,
                l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Wi ? "y" : "g"),
                f = new c(Wi ? a : "^(?:" + a.source + ")", l),
                h = void 0 === i ? Vi : i >>> 0;
            if (0 === h) return [];
            if (0 === s.length) return null === ji(f, s) ? [s] : [];
            for (var p = 0, d = 0, g = []; d < s.length;) {
                f.lastIndex = Wi ? d : 0;
                var m, v = ji(f, Wi ? s : s.slice(d));
                if (null === v || (m = Hi(ce(f.lastIndex + (Wi ? 0 : d)), s.length)) === p) d = Ii(s, d, u);
                else {
                    if (g.push(s.slice(p, d)), g.length === h) return g;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]), g.length === h) return g;
                    d = p = m
                }
            }
            return g.push(s.slice(p)), g
        }]
    }), !Wi);
    var zi = Be("iterator"),
        Yi = Be("toStringTag"),
        $i = pi.values;
    for (var Gi in cr) {
        var Ki = r[Gi],
            Xi = Ki && Ki.prototype;
        if (Xi) {
            if (Xi[zi] !== $i) try {
                P(Xi, zi, $i)
            } catch (e) {
                Xi[zi] = $i
            }
            if (Xi[Yi] || P(Xi, Yi, Gi), cr[Gi])
                for (var Ji in pi)
                    if (Xi[Ji] !== pi[Ji]) try {
                        P(Xi, Ji, pi[Ji])
                    } catch (e) {
                        Xi[Ji] = pi[Ji]
                    }
        }
    }
    var Qi = Be("iterator"),
        Zi = !i((function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"),
                t = e.searchParams,
                n = "";
            return e.pathname = "c%20d", t.forEach((function(e, r) {
                t.delete("b"), n += r + e
            })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[Qi] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        })),
        eo = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        },
        to = Object.assign,
        no = Object.defineProperty,
        ro = !to || i((function() {
            if (o && 1 !== to({
                    b: 1
                }, to(no({}, "a", {
                    enumerable: !0,
                    get: function() {
                        no(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach((function(e) {
                t[e] = e
            })), 7 != to({}, e)[n] || Et(to({}, t)).join("") != r
        })) ? function(e, t) {
            for (var n = Re(e), r = arguments.length, i = 1, a = be.f, s = c.f; r > i;)
                for (var u, l = p(arguments[i++]), f = a ? Et(l).concat(a(l)) : Et(l), h = f.length, d = 0; h > d;) u = f[d++], o && !s.call(l, u) || (n[u] = l[u]);
            return n
        } : to,
        io = 2147483647,
        oo = /[^\0-\u007E]/,
        ao = /[.\u3002\uFF0E\uFF61]/g,
        so = "Overflow: input needs wider integers to process",
        co = Math.floor,
        uo = String.fromCharCode,
        lo = function(e) {
            return e + 22 + 75 * (e < 26)
        },
        fo = function(e, t, n) {
            var r = 0;
            for (e = n ? co(e / 700) : e >> 1, e += co(e / t); e > 455; r += 36) e = co(e / 35);
            return co(r + 36 * e / (e + 38))
        },
        ho = function(e) {
            var t, n, r = [],
                i = (e = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var i = e.charCodeAt(n++);
                        if (i >= 55296 && i <= 56319 && n < r) {
                            var o = e.charCodeAt(n++);
                            56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--)
                        } else t.push(i)
                    }
                    return t
                }(e)).length,
                o = 128,
                a = 0,
                s = 72;
            for (t = 0; t < e.length; t++)(n = e[t]) < 128 && r.push(uo(n));
            var c = r.length,
                u = c;
            for (c && r.push("-"); u < i;) {
                var l = io;
                for (t = 0; t < e.length; t++)(n = e[t]) >= o && n < l && (l = n);
                var f = u + 1;
                if (l - o > co((io - a) / f)) throw RangeError(so);
                for (a += (l - o) * f, o = l, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < o && ++a > io) throw RangeError(so);
                    if (n == o) {
                        for (var h = a, p = 36;; p += 36) {
                            var d = p <= s ? 1 : p >= s + 26 ? 26 : p - s;
                            if (h < d) break;
                            var g = h - d,
                                m = 36 - d;
                            r.push(uo(lo(d + g % m))), h = co(g / m)
                        }
                        r.push(uo(lo(h))), s = fo(a, f, u == c), a = 0, ++u
                    }
                }++a, ++o
            }
            return r.join("")
        },
        po = function(e, t, n) {
            for (var r in t) ee(e, r, t[r], n);
            return e
        },
        go = function(e) {
            var t = pt(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return x(t.call(e))
        },
        mo = re("fetch"),
        vo = re("Headers"),
        yo = Be("iterator"),
        bo = "URLSearchParams",
        wo = "URLSearchParamsIterator",
        _o = Z.set,
        Eo = Z.getterFor(bo),
        ko = Z.getterFor(wo),
        So = /\+/g,
        To = Array(4),
        xo = function(e) {
            return To[e - 1] || (To[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        },
        Ao = function(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        },
        Oo = function(e) {
            var t = e.replace(So, " "),
                n = 4;
            try {
                return decodeURIComponent(t)
            } catch (e) {
                for (; n;) t = t.replace(xo(n--), Ao);
                return t
            }
        },
        Po = /[!'()~]|%20/g,
        Co = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        Io = function(e) {
            return Co[e]
        },
        jo = function(e) {
            return encodeURIComponent(e).replace(Po, Io)
        },
        Ro = function(e, t) {
            if (t)
                for (var n, r, i = t.split("&"), o = 0; o < i.length;)(n = i[o++]).length && (r = n.split("="), e.push({
                    key: Oo(r.shift()),
                    value: Oo(r.join("="))
                }))
        },
        Lo = function(e) {
            this.entries.length = 0, Ro(this.entries, e)
        },
        No = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments")
        },
        Mo = Kn((function(e, t) {
            _o(this, {
                type: wo,
                iterator: go(Eo(e).entries),
                kind: t
            })
        }), "Iterator", (function() {
            var e = ko(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
        })),
        Uo = function() {
            eo(this, Uo, bo);
            var e, t, n, r, i, o, a, s, c, u = arguments.length > 0 ? arguments[0] : void 0,
                l = this,
                f = [];
            if (_o(l, {
                    type: bo,
                    entries: f,
                    updateURL: function() {},
                    updateSearchParams: Lo
                }), void 0 !== u)
                if (m(u))
                    if ("function" == typeof(e = pt(u)))
                        for (n = (t = e.call(u)).next; !(r = n.call(t)).done;) {
                            if ((a = (o = (i = go(x(r.value))).next).call(i)).done || (s = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                            f.push({
                                key: a.value + "",
                                value: s.value + ""
                            })
                        } else
                            for (c in u) b(u, c) && f.push({
                                key: c,
                                value: u[c] + ""
                            });
                    else Ro(f, "string" == typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
        },
        Do = Uo.prototype;
    po(Do, {
        append: function(e, t) {
            No(arguments.length, 2);
            var n = Eo(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }), n.updateURL()
        },
        delete: function(e) {
            No(arguments.length, 1);
            for (var t = Eo(this), n = t.entries, r = e + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
            t.updateURL()
        },
        get: function(e) {
            No(arguments.length, 1);
            for (var t = Eo(this).entries, n = e + "", r = 0; r < t.length; r++)
                if (t[r].key === n) return t[r].value;
            return null
        },
        getAll: function(e) {
            No(arguments.length, 1);
            for (var t = Eo(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
            return r
        },
        has: function(e) {
            No(arguments.length, 1);
            for (var t = Eo(this).entries, n = e + "", r = 0; r < t.length;)
                if (t[r++].key === n) return !0;
            return !1
        },
        set: function(e, t) {
            No(arguments.length, 1);
            for (var n, r = Eo(this), i = r.entries, o = !1, a = e + "", s = t + "", c = 0; c < i.length; c++)(n = i[c]).key === a && (o ? i.splice(c--, 1) : (o = !0, n.value = s));
            o || i.push({
                key: a,
                value: s
            }), r.updateURL()
        },
        sort: function() {
            var e, t, n, r = Eo(this),
                i = r.entries,
                o = i.slice();
            for (i.length = 0, n = 0; n < o.length; n++) {
                for (e = o[n], t = 0; t < n; t++)
                    if (i[t].key > e.key) {
                        i.splice(t, 0, e);
                        break
                    } t === n && i.push(e)
            }
            r.updateURL()
        },
        forEach: function(e) {
            for (var t, n = Eo(this).entries, r = je(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
        },
        keys: function() {
            return new Mo(this, "keys")
        },
        values: function() {
            return new Mo(this, "values")
        },
        entries: function() {
            return new Mo(this, "entries")
        }
    }, {
        enumerable: !0
    }), ee(Do, yo, Do.entries), ee(Do, "toString", (function() {
        for (var e, t = Eo(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(jo(e.key) + "=" + jo(e.value));
        return n.join("&")
    }), {
        enumerable: !0
    }), Yn(Uo, bo), Ce({
        global: !0,
        forced: !Zi
    }, {
        URLSearchParams: Uo
    }), Zi || "function" != typeof mo || "function" != typeof vo || Ce({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            var t, n, r, i = [e];
            return arguments.length > 1 && (m(t = arguments[1]) && (n = t.body, ft(n) === bo && ((r = t.headers ? new vo(t.headers) : new vo).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = Pt(t, {
                body: u(0, String(n)),
                headers: u(0, r)
            }))), i.push(t)), mo.apply(this, i)
        }
    });
    var Fo, Bo = {
            URLSearchParams: Uo,
            getState: Eo
        },
        qo = Mn.codeAt,
        Ho = r.URL,
        Vo = Bo.URLSearchParams,
        Wo = Bo.getState,
        zo = Z.set,
        Yo = Z.getterFor("URL"),
        $o = Math.floor,
        Go = Math.pow,
        Ko = "Invalid scheme",
        Xo = "Invalid host",
        Jo = "Invalid port",
        Qo = /[A-Za-z]/,
        Zo = /[\d+-.A-Za-z]/,
        ea = /\d/,
        ta = /^(0x|0X)/,
        na = /^[0-7]+$/,
        ra = /^\d+$/,
        ia = /^[\dA-Fa-f]+$/,
        oa = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        aa = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        sa = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        ca = /[\u0009\u000A\u000D]/g,
        ua = function(e, t) {
            var n, r, i;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return Xo;
                if (!(n = fa(t.slice(1, -1)))) return Xo;
                e.host = n
            } else if (ba(e)) {
                if (t = function(e) {
                        var t, n, r = [],
                            i = e.toLowerCase().replace(ao, ".").split(".");
                        for (t = 0; t < i.length; t++) n = i[t], r.push(oo.test(n) ? "xn--" + ho(n) : n);
                        return r.join(".")
                    }(t), oa.test(t)) return Xo;
                if (null === (n = la(t))) return Xo;
                e.host = n
            } else {
                if (aa.test(t)) return Xo;
                for (n = "", r = dt(t), i = 0; i < r.length; i++) n += va(r[i], pa);
                e.host = n
            }
        },
        la = function(e) {
            var t, n, r, i, o, a, s, c = e.split(".");
            if (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4) return e;
            for (n = [], r = 0; r < t; r++) {
                if ("" == (i = c[r])) return e;
                if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = ta.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0;
                else {
                    if (!(10 == o ? ra : 8 == o ? na : ia).test(i)) return e;
                    a = parseInt(i, o)
                }
                n.push(a)
            }
            for (r = 0; r < t; r++)
                if (a = n[r], r == t - 1) {
                    if (a >= Go(256, 5 - t)) return null
                } else if (a > 255) return null;
            for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * Go(256, 3 - r);
            return s
        },
        fa = function(e) {
            var t, n, r, i, o, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0],
                u = 0,
                l = null,
                f = 0,
                h = function() {
                    return e.charAt(f)
                };
            if (":" == h()) {
                if (":" != e.charAt(1)) return;
                f += 2, l = ++u
            }
            for (; h();) {
                if (8 == u) return;
                if (":" != h()) {
                    for (t = n = 0; n < 4 && ia.test(h());) t = 16 * t + parseInt(h(), 16), f++, n++;
                    if ("." == h()) {
                        if (0 == n) return;
                        if (f -= n, u > 6) return;
                        for (r = 0; h();) {
                            if (i = null, r > 0) {
                                if (!("." == h() && r < 4)) return;
                                f++
                            }
                            if (!ea.test(h())) return;
                            for (; ea.test(h());) {
                                if (o = parseInt(h(), 10), null === i) i = o;
                                else {
                                    if (0 == i) return;
                                    i = 10 * i + o
                                }
                                if (i > 255) return;
                                f++
                            }
                            c[u] = 256 * c[u] + i, 2 != ++r && 4 != r || u++
                        }
                        if (4 != r) return;
                        break
                    }
                    if (":" == h()) {
                        if (f++, !h()) return
                    } else if (h()) return;
                    c[u++] = t
                } else {
                    if (null !== l) return;
                    f++, l = ++u
                }
            }
            if (null !== l)
                for (a = u - l, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s;
            else if (8 != u) return;
            return c
        },
        ha = function(e) {
            var t, n, r, i;
            if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = $o(e / 256);
                return t.join(".")
            }
            if ("object" == typeof e) {
                for (t = "", r = function(e) {
                        for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                        return i > n && (t = r, n = i), t
                    }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                return "[" + t + "]"
            }
            return e
        },
        pa = {},
        da = ro({}, pa, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        ga = ro({}, da, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        ma = ro({}, ga, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        va = function(e, t) {
            var n = qo(e, 0);
            return n > 32 && n < 127 && !b(t, e) ? e : encodeURIComponent(e)
        },
        ya = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        ba = function(e) {
            return b(ya, e.scheme)
        },
        wa = function(e) {
            return "" != e.username || "" != e.password
        },
        _a = function(e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
        },
        Ea = function(e, t) {
            var n;
            return 2 == e.length && Qo.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
        },
        ka = function(e) {
            var t;
            return e.length > 1 && Ea(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
        },
        Sa = function(e) {
            var t = e.path,
                n = t.length;
            !n || "file" == e.scheme && 1 == n && Ea(t[0], !0) || t.pop()
        },
        Ta = function(e) {
            return "." === e || "%2e" === e.toLowerCase()
        },
        xa = {},
        Aa = {},
        Oa = {},
        Pa = {},
        Ca = {},
        Ia = {},
        ja = {},
        Ra = {},
        La = {},
        Na = {},
        Ma = {},
        Ua = {},
        Da = {},
        Fa = {},
        Ba = {},
        qa = {},
        Ha = {},
        Va = {},
        Wa = {},
        za = {},
        Ya = {},
        $a = function(e, t, n, r) {
            var i, o, a, s, c, u = n || xa,
                l = 0,
                f = "",
                h = !1,
                p = !1,
                d = !1;
            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(sa, "")), t = t.replace(ca, ""), i = dt(t); l <= i.length;) {
                switch (o = i[l], u) {
                    case xa:
                        if (!o || !Qo.test(o)) {
                            if (n) return Ko;
                            u = Oa;
                            continue
                        }
                        f += o.toLowerCase(), u = Aa;
                        break;
                    case Aa:
                        if (o && (Zo.test(o) || "+" == o || "-" == o || "." == o)) f += o.toLowerCase();
                        else {
                            if (":" != o) {
                                if (n) return Ko;
                                f = "", u = Oa, l = 0;
                                continue
                            }
                            if (n && (ba(e) != b(ya, f) || "file" == f && (wa(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                            if (e.scheme = f, n) return void(ba(e) && ya[e.scheme] == e.port && (e.port = null));
                            f = "", "file" == e.scheme ? u = Fa : ba(e) && r && r.scheme == e.scheme ? u = Pa : ba(e) ? u = Ra : "/" == i[l + 1] ? (u = Ca, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), u = Wa)
                        }
                        break;
                    case Oa:
                        if (!r || r.cannotBeABaseURL && "#" != o) return Ko;
                        if (r.cannotBeABaseURL && "#" == o) {
                            e.scheme = r.scheme, e.path = r.path.slice(), e.query = r.query, e.fragment = "", e.cannotBeABaseURL = !0, u = Ya;
                            break
                        }
                        u = "file" == r.scheme ? Fa : Ia;
                        continue;
                    case Pa:
                        if ("/" != o || "/" != i[l + 1]) {
                            u = Ia;
                            continue
                        }
                        u = La, l++;
                        break;
                    case Ca:
                        if ("/" == o) {
                            u = Na;
                            break
                        }
                        u = Va;
                        continue;
                    case Ia:
                        if (e.scheme = r.scheme, o == Fo) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query;
                        else if ("/" == o || "\\" == o && ba(e)) u = ja;
                        else if ("?" == o) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = "", u = za;
                        else {
                            if ("#" != o) {
                                e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.path.pop(), u = Va;
                                continue
                            }
                            e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query, e.fragment = "", u = Ya
                        }
                        break;
                    case ja:
                        if (!ba(e) || "/" != o && "\\" != o) {
                            if ("/" != o) {
                                e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, u = Va;
                                continue
                            }
                            u = Na
                        } else u = La;
                        break;
                    case Ra:
                        if (u = La, "/" != o || "/" != f.charAt(l + 1)) continue;
                        l++;
                        break;
                    case La:
                        if ("/" != o && "\\" != o) {
                            u = Na;
                            continue
                        }
                        break;
                    case Na:
                        if ("@" == o) {
                            h && (f = "%40" + f), h = !0, a = dt(f);
                            for (var g = 0; g < a.length; g++) {
                                var m = a[g];
                                if (":" != m || d) {
                                    var v = va(m, ma);
                                    d ? e.password += v : e.username += v
                                } else d = !0
                            }
                            f = ""
                        } else if (o == Fo || "/" == o || "?" == o || "#" == o || "\\" == o && ba(e)) {
                            if (h && "" == f) return "Invalid authority";
                            l -= dt(f).length + 1, f = "", u = Ma
                        } else f += o;
                        break;
                    case Ma:
                    case Ua:
                        if (n && "file" == e.scheme) {
                            u = qa;
                            continue
                        }
                        if (":" != o || p) {
                            if (o == Fo || "/" == o || "?" == o || "#" == o || "\\" == o && ba(e)) {
                                if (ba(e) && "" == f) return Xo;
                                if (n && "" == f && (wa(e) || null !== e.port)) return;
                                if (s = ua(e, f)) return s;
                                if (f = "", u = Ha, n) return;
                                continue
                            }
                            "[" == o ? p = !0 : "]" == o && (p = !1), f += o
                        } else {
                            if ("" == f) return Xo;
                            if (s = ua(e, f)) return s;
                            if (f = "", u = Da, n == Ua) return
                        }
                        break;
                    case Da:
                        if (!ea.test(o)) {
                            if (o == Fo || "/" == o || "?" == o || "#" == o || "\\" == o && ba(e) || n) {
                                if ("" != f) {
                                    var y = parseInt(f, 10);
                                    if (y > 65535) return Jo;
                                    e.port = ba(e) && y === ya[e.scheme] ? null : y, f = ""
                                }
                                if (n) return;
                                u = Ha;
                                continue
                            }
                            return Jo
                        }
                        f += o;
                        break;
                    case Fa:
                        if (e.scheme = "file", "/" == o || "\\" == o) u = Ba;
                        else {
                            if (!r || "file" != r.scheme) {
                                u = Va;
                                continue
                            }
                            if (o == Fo) e.host = r.host, e.path = r.path.slice(), e.query = r.query;
                            else if ("?" == o) e.host = r.host, e.path = r.path.slice(), e.query = "", u = za;
                            else {
                                if ("#" != o) {
                                    ka(i.slice(l).join("")) || (e.host = r.host, e.path = r.path.slice(), Sa(e)), u = Va;
                                    continue
                                }
                                e.host = r.host, e.path = r.path.slice(), e.query = r.query, e.fragment = "", u = Ya
                            }
                        }
                        break;
                    case Ba:
                        if ("/" == o || "\\" == o) {
                            u = qa;
                            break
                        }
                        r && "file" == r.scheme && !ka(i.slice(l).join("")) && (Ea(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host), u = Va;
                        continue;
                    case qa:
                        if (o == Fo || "/" == o || "\\" == o || "?" == o || "#" == o) {
                            if (!n && Ea(f)) u = Va;
                            else if ("" == f) {
                                if (e.host = "", n) return;
                                u = Ha
                            } else {
                                if (s = ua(e, f)) return s;
                                if ("localhost" == e.host && (e.host = ""), n) return;
                                f = "", u = Ha
                            }
                            continue
                        }
                        f += o;
                        break;
                    case Ha:
                        if (ba(e)) {
                            if (u = Va, "/" != o && "\\" != o) continue
                        } else if (n || "?" != o)
                            if (n || "#" != o) {
                                if (o != Fo && (u = Va, "/" != o)) continue
                            } else e.fragment = "", u = Ya;
                        else e.query = "", u = za;
                        break;
                    case Va:
                        if (o == Fo || "/" == o || "\\" == o && ba(e) || !n && ("?" == o || "#" == o)) {
                            if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (Sa(e), "/" == o || "\\" == o && ba(e) || e.path.push("")) : Ta(f) ? "/" == o || "\\" == o && ba(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && Ea(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (o == Fo || "?" == o || "#" == o))
                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                            "?" == o ? (e.query = "", u = za) : "#" == o && (e.fragment = "", u = Ya)
                        } else f += va(o, ga);
                        break;
                    case Wa:
                        "?" == o ? (e.query = "", u = za) : "#" == o ? (e.fragment = "", u = Ya) : o != Fo && (e.path[0] += va(o, pa));
                        break;
                    case za:
                        n || "#" != o ? o != Fo && ("'" == o && ba(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : va(o, pa)) : (e.fragment = "", u = Ya);
                        break;
                    case Ya:
                        o != Fo && (e.fragment += va(o, da))
                }
                l++
            }
        },
        Ga = function(e) {
            var t, n, r = eo(this, Ga, "URL"),
                i = arguments.length > 1 ? arguments[1] : void 0,
                a = String(e),
                s = zo(r, {
                    type: "URL"
                });
            if (void 0 !== i)
                if (i instanceof Ga) t = Yo(i);
                else if (n = $a(t = {}, String(i))) throw TypeError(n);
            if (n = $a(s, a, null, t)) throw TypeError(n);
            var c = s.searchParams = new Vo,
                u = Wo(c);
            u.updateSearchParams(s.query), u.updateURL = function() {
                s.query = String(c) || null
            }, o || (r.href = Xa.call(r), r.origin = Ja.call(r), r.protocol = Qa.call(r), r.username = Za.call(r), r.password = es.call(r), r.host = ts.call(r), r.hostname = ns.call(r), r.port = rs.call(r), r.pathname = is.call(r), r.search = os.call(r), r.searchParams = as.call(r), r.hash = ss.call(r))
        },
        Ka = Ga.prototype,
        Xa = function() {
            var e = Yo(this),
                t = e.scheme,
                n = e.username,
                r = e.password,
                i = e.host,
                o = e.port,
                a = e.path,
                s = e.query,
                c = e.fragment,
                u = t + ":";
            return null !== i ? (u += "//", wa(e) && (u += n + (r ? ":" + r : "") + "@"), u += ha(i), null !== o && (u += ":" + o)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
        },
        Ja = function() {
            var e = Yo(this),
                t = e.scheme,
                n = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
            return "file" != t && ba(e) ? t + "://" + ha(e.host) + (null !== n ? ":" + n : "") : "null"
        },
        Qa = function() {
            return Yo(this).scheme + ":"
        },
        Za = function() {
            return Yo(this).username
        },
        es = function() {
            return Yo(this).password
        },
        ts = function() {
            var e = Yo(this),
                t = e.host,
                n = e.port;
            return null === t ? "" : null === n ? ha(t) : ha(t) + ":" + n
        },
        ns = function() {
            var e = Yo(this).host;
            return null === e ? "" : ha(e)
        },
        rs = function() {
            var e = Yo(this).port;
            return null === e ? "" : String(e)
        },
        is = function() {
            var e = Yo(this),
                t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        },
        os = function() {
            var e = Yo(this).query;
            return e ? "?" + e : ""
        },
        as = function() {
            return Yo(this).searchParams
        },
        ss = function() {
            var e = Yo(this).fragment;
            return e ? "#" + e : ""
        },
        cs = function(e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            }
        };
    if (o && kt(Ka, {
            href: cs(Xa, (function(e) {
                var t = Yo(this),
                    n = String(e),
                    r = $a(t, n);
                if (r) throw TypeError(r);
                Wo(t.searchParams).updateSearchParams(t.query)
            })),
            origin: cs(Ja),
            protocol: cs(Qa, (function(e) {
                var t = Yo(this);
                $a(t, String(e) + ":", xa)
            })),
            username: cs(Za, (function(e) {
                var t = Yo(this),
                    n = dt(String(e));
                if (!_a(t)) {
                    t.username = "";
                    for (var r = 0; r < n.length; r++) t.username += va(n[r], ma)
                }
            })),
            password: cs(es, (function(e) {
                var t = Yo(this),
                    n = dt(String(e));
                if (!_a(t)) {
                    t.password = "";
                    for (var r = 0; r < n.length; r++) t.password += va(n[r], ma)
                }
            })),
            host: cs(ts, (function(e) {
                var t = Yo(this);
                t.cannotBeABaseURL || $a(t, String(e), Ma)
            })),
            hostname: cs(ns, (function(e) {
                var t = Yo(this);
                t.cannotBeABaseURL || $a(t, String(e), Ua)
            })),
            port: cs(rs, (function(e) {
                var t = Yo(this);
                _a(t) || ("" == (e = String(e)) ? t.port = null : $a(t, e, Da))
            })),
            pathname: cs(is, (function(e) {
                var t = Yo(this);
                t.cannotBeABaseURL || (t.path = [], $a(t, e + "", Ha))
            })),
            search: cs(os, (function(e) {
                var t = Yo(this);
                "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", $a(t, e, za)), Wo(t.searchParams).updateSearchParams(t.query)
            })),
            searchParams: cs(as),
            hash: cs(ss, (function(e) {
                var t = Yo(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", $a(t, e, Ya)) : t.fragment = null
            }))
        }), ee(Ka, "toJSON", (function() {
            return Xa.call(this)
        }), {
            enumerable: !0
        }), ee(Ka, "toString", (function() {
            return Xa.call(this)
        }), {
            enumerable: !0
        }), Ho) {
        var us = Ho.createObjectURL,
            ls = Ho.revokeObjectURL;
        us && ee(Ga, "createObjectURL", (function(e) {
            return us.apply(Ho, arguments)
        })), ls && ee(Ga, "revokeObjectURL", (function(e) {
            return ls.apply(Ho, arguments)
        }))
    }

    function fs(e) {
        return (fs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function hs(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ps(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ds(e, t, n) {
        return t && ps(e.prototype, t), n && ps(e, n), e
    }

    function gs(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ms(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function vs(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ms(Object(n), !0).forEach((function(t) {
                gs(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ms(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function ys(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function bs(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || _s(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ws(e) {
        return function(e) {
            if (Array.isArray(e)) return Es(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || _s(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function _s(e, t) {
        if (e) {
            if ("string" == typeof e) return Es(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Es(e, t) : void 0
        }
    }

    function Es(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    Yn(Ga, "URL"), Ce({
            global: !0,
            forced: !Zi,
            sham: !o
        }, {
            URL: Ga
        }),
        function(e) {
            var t = function() {
                    try {
                        return !!Symbol.iterator
                    } catch (e) {
                        return !1
                    }
                }(),
                n = function(e) {
                    var n = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t && (n[Symbol.iterator] = function() {
                        return n
                    }), n
                },
                r = function(e) {
                    return encodeURIComponent(e).replace(/%20/g, "+")
                },
                i = function(e) {
                    return decodeURIComponent(String(e).replace(/\+/g, " "))
                };
            (function() {
                try {
                    var t = e.URLSearchParams;
                    return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set
                } catch (e) {
                    return !1
                }
            })() || function() {
                var i = function e(t) {
                        Object.defineProperty(this, "_entries", {
                            writable: !0,
                            value: {}
                        });
                        var n = fs(t);
                        if ("undefined" === n);
                        else if ("string" === n) "" !== t && this._fromString(t);
                        else if (t instanceof e) {
                            var r = this;
                            t.forEach((function(e, t) {
                                r.append(t, e)
                            }))
                        } else {
                            if (null === t || "object" !== n) throw new TypeError("Unsupported input's type for URLSearchParams");
                            if ("[object Array]" === Object.prototype.toString.call(t))
                                for (var i = 0; i < t.length; i++) {
                                    var o = t[i];
                                    if ("[object Array]" !== Object.prototype.toString.call(o) && 2 === o.length) throw new TypeError("Expected [string, any] as entry at index " + i + " of URLSearchParams's input");
                                    this.append(o[0], o[1])
                                } else
                                    for (var a in t) t.hasOwnProperty(a) && this.append(a, t[a])
                        }
                    },
                    o = i.prototype;
                o.append = function(e, t) {
                    e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
                }, o.delete = function(e) {
                    delete this._entries[e]
                }, o.get = function(e) {
                    return e in this._entries ? this._entries[e][0] : null
                }, o.getAll = function(e) {
                    return e in this._entries ? this._entries[e].slice(0) : []
                }, o.has = function(e) {
                    return e in this._entries
                }, o.set = function(e, t) {
                    this._entries[e] = [String(t)]
                }, o.forEach = function(e, t) {
                    var n;
                    for (var r in this._entries)
                        if (this._entries.hasOwnProperty(r)) {
                            n = this._entries[r];
                            for (var i = 0; i < n.length; i++) e.call(t, n[i], r, this)
                        }
                }, o.keys = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push(n)
                    })), n(e)
                }, o.values = function() {
                    var e = [];
                    return this.forEach((function(t) {
                        e.push(t)
                    })), n(e)
                }, o.entries = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push([n, t])
                    })), n(e)
                }, t && (o[Symbol.iterator] = o.entries), o.toString = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push(r(n) + "=" + r(t))
                    })), e.join("&")
                }, e.URLSearchParams = i
            }();
            var o = e.URLSearchParams.prototype;
            "function" != typeof o.sort && (o.sort = function() {
                var e = this,
                    t = [];
                this.forEach((function(n, r) {
                    t.push([r, n]), e._entries || e.delete(r)
                })), t.sort((function(e, t) {
                    return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
                })), e._entries && (e._entries = {});
                for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1])
            }), "function" != typeof o._fromString && Object.defineProperty(o, "_fromString", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function(e) {
                    if (this._entries) this._entries = {};
                    else {
                        var t = [];
                        this.forEach((function(e, n) {
                            t.push(n)
                        }));
                        for (var n = 0; n < t.length; n++) this.delete(t[n])
                    }
                    var r, o = (e = e.replace(/^\?/, "")).split("&");
                    for (n = 0; n < o.length; n++) r = o[n].split("="), this.append(i(r[0]), r.length > 1 ? i(r[1]) : "")
                }
            })
        }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e),
        function(e) {
            if (function() {
                    try {
                        var t = new e.URL("b", "http://a");
                        return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams
                    } catch (e) {
                        return !1
                    }
                }() || function() {
                    var t = e.URL,
                        n = function(t, n) {
                            "string" != typeof t && (t = String(t));
                            var r, i = document;
                            if (n && (void 0 === e.location || n !== e.location.href)) {
                                (r = (i = document.implementation.createHTMLDocument("")).createElement("base")).href = n, i.head.appendChild(r);
                                try {
                                    if (0 !== r.href.indexOf(n)) throw new Error(r.href)
                                } catch (e) {
                                    throw new Error("URL unable to set base " + n + " due to " + e)
                                }
                            }
                            var o = i.createElement("a");
                            if (o.href = t, r && (i.body.appendChild(o), o.href = o.href), ":" === o.protocol || !/:/.test(o.href)) throw new TypeError("Invalid URL");
                            Object.defineProperty(this, "_anchorElement", {
                                value: o
                            });
                            var a = new e.URLSearchParams(this.search),
                                s = !0,
                                c = !0,
                                u = this;
                            ["append", "delete", "set"].forEach((function(e) {
                                var t = a[e];
                                a[e] = function() {
                                    t.apply(a, arguments), s && (c = !1, u.search = a.toString(), c = !0)
                                }
                            })), Object.defineProperty(this, "searchParams", {
                                value: a,
                                enumerable: !0
                            });
                            var l = void 0;
                            Object.defineProperty(this, "_updateSearchParams", {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: function() {
                                    this.search !== l && (l = this.search, c && (s = !1, this.searchParams._fromString(this.search), s = !0))
                                }
                            })
                        },
                        r = n.prototype;
                    ["hash", "host", "hostname", "port", "protocol"].forEach((function(e) {
                        ! function(e) {
                            Object.defineProperty(r, e, {
                                get: function() {
                                    return this._anchorElement[e]
                                },
                                set: function(t) {
                                    this._anchorElement[e] = t
                                },
                                enumerable: !0
                            })
                        }(e)
                    })), Object.defineProperty(r, "search", {
                        get: function() {
                            return this._anchorElement.search
                        },
                        set: function(e) {
                            this._anchorElement.search = e, this._updateSearchParams()
                        },
                        enumerable: !0
                    }), Object.defineProperties(r, {
                        toString: {
                            get: function() {
                                var e = this;
                                return function() {
                                    return e.href
                                }
                            }
                        },
                        href: {
                            get: function() {
                                return this._anchorElement.href.replace(/\?$/, "")
                            },
                            set: function(e) {
                                this._anchorElement.href = e, this._updateSearchParams()
                            },
                            enumerable: !0
                        },
                        pathname: {
                            get: function() {
                                return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                            },
                            set: function(e) {
                                this._anchorElement.pathname = e
                            },
                            enumerable: !0
                        },
                        origin: {
                            get: function() {
                                var e = {
                                        "http:": 80,
                                        "https:": 443,
                                        "ftp:": 21
                                    } [this._anchorElement.protocol],
                                    t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                                return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                            },
                            enumerable: !0
                        },
                        password: {
                            get: function() {
                                return ""
                            },
                            set: function(e) {},
                            enumerable: !0
                        },
                        username: {
                            get: function() {
                                return ""
                            },
                            set: function(e) {},
                            enumerable: !0
                        }
                    }), n.createObjectURL = function(e) {
                        return t.createObjectURL.apply(t, arguments)
                    }, n.revokeObjectURL = function(e) {
                        return t.revokeObjectURL.apply(t, arguments)
                    }, e.URL = n
                }(), void 0 !== e.location && !("origin" in e.location)) {
                var t = function() {
                    return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
                };
                try {
                    Object.defineProperty(e.location, "origin", {
                        get: t,
                        enumerable: !0
                    })
                } catch (n) {
                    setInterval((function() {
                        e.location.origin = t()
                    }), 100)
                }
            }
        }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e), wr("asyncIterator");
    var ks = Be("isConcatSpreadable"),
        Ss = 9007199254740991,
        Ts = "Maximum allowed index exceeded",
        xs = qt >= 51 || !i((function() {
            var e = [];
            return e[ks] = !1, e.concat()[0] !== e
        })),
        As = Vt("concat"),
        Os = function(e) {
            if (!m(e)) return !1;
            var t = e[ks];
            return void 0 !== t ? !!t : Le(e)
        };
    Ce({
        target: "Array",
        proto: !0,
        forced: !xs || !As
    }, {
        concat: function(e) {
            var t, n, r, i, o, a = Re(this),
                s = He(a, 0),
                c = 0;
            for (t = -1, r = arguments.length; t < r; t++)
                if (Os(o = -1 === t ? a : arguments[t])) {
                    if (c + (i = ce(o.length)) > Ss) throw TypeError(Ts);
                    for (n = 0; n < i; n++, c++) n in o && at(s, c, o[n])
                } else {
                    if (c >= Ss) throw TypeError(Ts);
                    at(s, c++, o)
                } return s.length = c, s
        }
    }), Ce({
        target: "Object",
        stat: !0,
        forced: Object.assign !== ro
    }, {
        assign: ro
    });
    var Ps = T.f,
        Cs = i((function() {
            Ps(1)
        }));
    Ce({
        target: "Object",
        stat: !0,
        forced: !o || Cs,
        sham: !o
    }, {
        getOwnPropertyDescriptor: function(e, t) {
            return Ps(g(e), t)
        }
    });
    var Is, js, Rs, Ls = r.Promise,
        Ns = t((function(e) {
            var t = function(e, t) {
                this.stopped = e, this.result = t
            };
            (e.exports = function(e, n, r, i, o) {
                var a, s, c, u, l, f, h, p = je(n, r, i ? 2 : 1);
                if (o) a = e;
                else {
                    if ("function" != typeof(s = pt(e))) throw TypeError("Target is not iterable");
                    if (ot(s)) {
                        for (c = 0, u = ce(e.length); u > c; c++)
                            if ((l = i ? p(x(h = e[c])[0], h[1]) : p(e[c])) && l instanceof t) return l;
                        return new t(!1)
                    }
                    a = s.call(e)
                }
                for (f = a.next; !(h = f.call(a)).done;)
                    if ("object" == typeof(l = tt(a, p, h.value, i)) && l && l instanceof t) return l;
                return new t(!1)
            }).stop = function(e) {
                return new t(!0, e)
            }
        })),
        Ms = /(iphone|ipod|ipad).*applewebkit/i.test(Ut),
        Us = r.location,
        Ds = r.setImmediate,
        Fs = r.clearImmediate,
        Bs = r.process,
        qs = r.MessageChannel,
        Hs = r.Dispatch,
        Vs = 0,
        Ws = {},
        zs = "onreadystatechange",
        Ys = function(e) {
            if (Ws.hasOwnProperty(e)) {
                var t = Ws[e];
                delete Ws[e], t()
            }
        },
        $s = function(e) {
            return function() {
                Ys(e)
            }
        },
        Gs = function(e) {
            Ys(e.data)
        },
        Ks = function(e) {
            r.postMessage(e + "", Us.protocol + "//" + Us.host)
        };
    Ds && Fs || (Ds = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return Ws[++Vs] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, Is(Vs), Vs
    }, Fs = function(e) {
        delete Ws[e]
    }, "process" == f(Bs) ? Is = function(e) {
        Bs.nextTick($s(e))
    } : Hs && Hs.now ? Is = function(e) {
        Hs.now($s(e))
    } : qs && !Ms ? (Rs = (js = new qs).port2, js.port1.onmessage = Gs, Is = je(Rs.postMessage, Rs, 1)) : !r.addEventListener || "function" != typeof postMessage || r.importScripts || i(Ks) || "file:" === Us.protocol ? Is = zs in E("script") ? function(e) {
        St.appendChild(E("script")).onreadystatechange = function() {
            St.removeChild(this), Ys(e)
        }
    } : function(e) {
        setTimeout($s(e), 0)
    } : (Is = Ks, r.addEventListener("message", Gs, !1)));
    var Xs, Js, Qs, Zs, ec, tc, nc, rc, ic = {
            set: Ds,
            clear: Fs
        },
        oc = T.f,
        ac = ic.set,
        sc = r.MutationObserver || r.WebKitMutationObserver,
        cc = r.process,
        uc = r.Promise,
        lc = "process" == f(cc),
        fc = oc(r, "queueMicrotask"),
        hc = fc && fc.value;
    hc || (Xs = function() {
        var e, t;
        for (lc && (e = cc.domain) && e.exit(); Js;) {
            t = Js.fn, Js = Js.next;
            try {
                t()
            } catch (e) {
                throw Js ? Zs() : Qs = void 0, e
            }
        }
        Qs = void 0, e && e.enter()
    }, lc ? Zs = function() {
        cc.nextTick(Xs)
    } : sc && !Ms ? (ec = !0, tc = document.createTextNode(""), new sc(Xs).observe(tc, {
        characterData: !0
    }), Zs = function() {
        tc.data = ec = !ec
    }) : uc && uc.resolve ? (nc = uc.resolve(void 0), rc = nc.then, Zs = function() {
        rc.call(nc, Xs)
    }) : Zs = function() {
        ac.call(r, Xs)
    });
    var pc, dc, gc, mc, vc = hc || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            Qs && (Qs.next = t), Js || (Js = t, Zs()), Qs = t
        },
        yc = function(e) {
            var t, n;
            this.promise = new e((function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            })), this.resolve = Ie(t), this.reject = Ie(n)
        },
        bc = {
            f: function(e) {
                return new yc(e)
            }
        },
        wc = function(e, t) {
            if (x(e), m(t) && t.constructor === e) return t;
            var n = bc.f(e);
            return (0, n.resolve)(t), n.promise
        },
        _c = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        },
        Ec = ic.set,
        kc = Be("species"),
        Sc = "Promise",
        Tc = Z.get,
        xc = Z.set,
        Ac = Z.getterFor(Sc),
        Oc = Ls,
        Pc = r.TypeError,
        Cc = r.document,
        Ic = r.process,
        jc = re("fetch"),
        Rc = bc.f,
        Lc = Rc,
        Nc = "process" == f(Ic),
        Mc = !!(Cc && Cc.createEvent && r.dispatchEvent),
        Uc = "unhandledrejection",
        Dc = Oe(Sc, (function() {
            if (!(U(Oc) !== String(Oc))) {
                if (66 === qt) return !0;
                if (!Nc && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (qt >= 51 && /native code/.test(Oc)) return !1;
            var e = Oc.resolve(1),
                t = function(e) {
                    e((function() {}), (function() {}))
                };
            return (e.constructor = {})[kc] = t, !(e.then((function() {})) instanceof t)
        })),
        Fc = Dc || !bt((function(e) {
            Oc.all(e).catch((function() {}))
        })),
        Bc = function(e) {
            var t;
            return !(!m(e) || "function" != typeof(t = e.then)) && t
        },
        qc = function(e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var r = t.reactions;
                vc((function() {
                    for (var i = t.value, o = 1 == t.state, a = 0; r.length > a;) {
                        var s, c, u, l = r[a++],
                            f = o ? l.ok : l.fail,
                            h = l.resolve,
                            p = l.reject,
                            d = l.domain;
                        try {
                            f ? (o || (2 === t.rejection && zc(e, t), t.rejection = 1), !0 === f ? s = i : (d && d.enter(), s = f(i), d && (d.exit(), u = !0)), s === l.promise ? p(Pc("Promise-chain cycle")) : (c = Bc(s)) ? c.call(s, h, p) : h(s)) : p(i)
                        } catch (e) {
                            d && !u && d.exit(), p(e)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && Vc(e, t)
                }))
            }
        },
        Hc = function(e, t, n) {
            var i, o;
            Mc ? ((i = Cc.createEvent("Event")).promise = t, i.reason = n, i.initEvent(e, !1, !0), r.dispatchEvent(i)) : i = {
                promise: t,
                reason: n
            }, (o = r["on" + e]) ? o(i) : e === Uc && function(e, t) {
                var n = r.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }("Unhandled promise rejection", n)
        },
        Vc = function(e, t) {
            Ec.call(r, (function() {
                var n, r = t.value;
                if (Wc(t) && (n = _c((function() {
                        Nc ? Ic.emit("unhandledRejection", r, e) : Hc(Uc, e, r)
                    })), t.rejection = Nc || Wc(t) ? 2 : 1, n.error)) throw n.value
            }))
        },
        Wc = function(e) {
            return 1 !== e.rejection && !e.parent
        },
        zc = function(e, t) {
            Ec.call(r, (function() {
                Nc ? Ic.emit("rejectionHandled", e) : Hc("rejectionhandled", e, t.value)
            }))
        },
        Yc = function(e, t, n, r) {
            return function(i) {
                e(t, n, i, r)
            }
        },
        $c = function(e, t, n, r) {
            t.done || (t.done = !0, r && (t = r), t.value = n, t.state = 2, qc(e, t, !0))
        },
        Gc = function(e, t, n, r) {
            if (!t.done) {
                t.done = !0, r && (t = r);
                try {
                    if (e === n) throw Pc("Promise can't be resolved itself");
                    var i = Bc(n);
                    i ? vc((function() {
                        var r = {
                            done: !1
                        };
                        try {
                            i.call(n, Yc(Gc, e, r, t), Yc($c, e, r, t))
                        } catch (n) {
                            $c(e, r, n, t)
                        }
                    })) : (t.value = n, t.state = 1, qc(e, t, !1))
                } catch (n) {
                    $c(e, {
                        done: !1
                    }, n, t)
                }
            }
        };
    Dc && (Oc = function(e) {
        eo(this, Oc, Sc), Ie(e), pc.call(this);
        var t = Tc(this);
        try {
            e(Yc(Gc, this, t), Yc($c, this, t))
        } catch (e) {
            $c(this, t, e)
        }
    }, (pc = function(e) {
        xc(this, {
            type: Sc,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = po(Oc.prototype, {
        then: function(e, t) {
            var n = Ac(this),
                r = Rc(Bi(this, Oc));
            return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = Nc ? Ic.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && qc(this, n, !1), r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), dc = function() {
        var e = new pc,
            t = Tc(e);
        this.promise = e, this.resolve = Yc(Gc, e, t), this.reject = Yc($c, e, t)
    }, bc.f = Rc = function(e) {
        return e === Oc || e === gc ? new dc(e) : Lc(e)
    }, "function" == typeof Ls && (mc = Ls.prototype.then, ee(Ls.prototype, "then", (function(e, t) {
        var n = this;
        return new Oc((function(e, t) {
            mc.call(n, e, t)
        })).then(e, t)
    }), {
        unsafe: !0
    }), "function" == typeof jc && Ce({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return wc(Oc, jc.apply(r, arguments))
        }
    }))), Ce({
        global: !0,
        wrap: !0,
        forced: Dc
    }, {
        Promise: Oc
    }), Yn(Oc, Sc, !1), nn(Sc), gc = re(Sc), Ce({
        target: Sc,
        stat: !0,
        forced: Dc
    }, {
        reject: function(e) {
            var t = Rc(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), Ce({
        target: Sc,
        stat: !0,
        forced: Dc
    }, {
        resolve: function(e) {
            return wc(this, e)
        }
    }), Ce({
        target: Sc,
        stat: !0,
        forced: Fc
    }, {
        all: function(e) {
            var t = this,
                n = Rc(t),
                r = n.resolve,
                i = n.reject,
                o = _c((function() {
                    var n = Ie(t.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    Ns(e, (function(e) {
                        var c = a++,
                            u = !1;
                        o.push(void 0), s++, n.call(t, e).then((function(e) {
                            u || (u = !0, o[c] = e, --s || r(o))
                        }), i)
                    })), --s || r(o)
                }));
            return o.error && i(o.value), n.promise
        },
        race: function(e) {
            var t = this,
                n = Rc(t),
                r = n.reject,
                i = _c((function() {
                    var i = Ie(t.resolve);
                    Ns(e, (function(e) {
                        i.call(t, e).then(n.resolve, r)
                    }))
                }));
            return i.error && r(i.value), n.promise
        }
    });
    /*! *****************************************************************************
    	Copyright (c) Microsoft Corporation. All rights reserved.
    	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    	this file except in compliance with the License. You may obtain a copy of the
    	License at http://www.apache.org/licenses/LICENSE-2.0

    	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    	MERCHANTABLITY OR NON-INFRINGEMENT.

    	See the Apache Version 2.0 License for specific language governing permissions
    	and limitations under the License.
    	***************************************************************************** */
    var Kc = function(e, t) {
        return (Kc = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };

    function Xc(e, t) {
        function n() {
            this.constructor = e
        }
        Kc(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var Jc, Qc, Zc = function() {
        return (Zc = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function eu(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    }

    function tu() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(eu(arguments[t]));
        return e
    }! function(e) {
        e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e.Critical = "critical"
    }(Jc || (Jc = {})),
    function(e) {
        e.fromString = function(t) {
            switch (t) {
                case "debug":
                    return e.Debug;
                case "info":
                    return e.Info;
                case "warn":
                case "warning":
                    return e.Warning;
                case "error":
                    return e.Error;
                case "fatal":
                    return e.Fatal;
                case "critical":
                    return e.Critical;
                case "log":
                default:
                    return e.Log
            }
        }
    }(Jc || (Jc = {})),
    function(e) {
        e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.Invalid = "invalid", e.Failed = "failed"
    }(Qc || (Qc = {})),
    function(e) {
        e.fromHttpCode = function(t) {
            return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
        }
    }(Qc || (Qc = {}));
    var nu = O.f,
        ru = Function.prototype,
        iu = ru.toString,
        ou = /^\s*function ([^ (]*)/,
        au = "name";
    o && !(au in ru) && nu(ru, au, {
        configurable: !0,
        get: function() {
            try {
                return iu.call(this).match(ou)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var su = Object.setPrototypeOf || ({
            __proto__: []
        }
        instanceof Array ? function(e, t) {
            return e.__proto__ = t, e
        } : function(e, t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            return e
        });
    var cu = function(e) {
        function t(t) {
            var n = this.constructor,
                r = e.call(this, t) || this;
            return r.message = t, r.name = n.prototype.constructor.name, su(r, n.prototype), r
        }
        return Xc(t, e), t
    }(Error);

    function uu(e) {
        switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return yu(e, Error)
        }
    }

    function lu(e) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(e)
    }

    function fu(e) {
        return "[object DOMError]" === Object.prototype.toString.call(e)
    }

    function hu(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }

    function pu(e) {
        return null === e || "object" !== fs(e) && "function" != typeof e
    }

    function du(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function gu(e) {
        return "undefined" != typeof Event && yu(e, Event)
    }

    function mu(e) {
        return "undefined" != typeof Element && yu(e, Element)
    }

    function vu(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }

    function yu(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
    Pi("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = d(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = x(e),
                o = String(this);
            if (!i.global) return ji(i, o);
            var a = i.unicode;
            i.lastIndex = 0;
            for (var s, c = [], u = 0; null !== (s = ji(i, o));) {
                var l = String(s[0]);
                c[u] = l, "" === l && (i.lastIndex = Ii(o, ce(i.lastIndex), a)), u++
            }
            return 0 === u ? null : c
        }]
    }));
    var bu, wu = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
        _u = O.f,
        Eu = r.Int8Array,
        ku = Eu && Eu.prototype,
        Su = r.Uint8ClampedArray,
        Tu = Su && Su.prototype,
        xu = Eu && Bn(Eu),
        Au = ku && Bn(ku),
        Ou = Object.prototype,
        Pu = Ou.isPrototypeOf,
        Cu = Be("toStringTag"),
        Iu = V("TYPED_ARRAY_TAG"),
        ju = wu && !!Gt && "Opera" !== ft(r.opera),
        Ru = !1,
        Lu = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        },
        Nu = function(e) {
            return m(e) && b(Lu, ft(e))
        };
    for (bu in Lu) r[bu] || (ju = !1);
    if ((!ju || "function" != typeof xu || xu === Function.prototype) && (xu = function() {
            throw TypeError("Incorrect invocation")
        }, ju))
        for (bu in Lu) r[bu] && Gt(r[bu], xu);
    if ((!ju || !Au || Au === Ou) && (Au = xu.prototype, ju))
        for (bu in Lu) r[bu] && Gt(r[bu].prototype, Au);
    if (ju && Bn(Tu) !== Au && Gt(Tu, Au), o && !b(Au, Cu))
        for (bu in Ru = !0, _u(Au, Cu, {
                get: function() {
                    return m(this) ? this[Iu] : void 0
                }
            }), Lu) r[bu] && P(r[bu], Iu, bu);
    var Mu = {
            NATIVE_ARRAY_BUFFER_VIEWS: ju,
            TYPED_ARRAY_TAG: Ru && Iu,
            aTypedArray: function(e) {
                if (Nu(e)) return e;
                throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function(e) {
                if (Gt) {
                    if (Pu.call(xu, e)) return e
                } else
                    for (var t in Lu)
                        if (b(Lu, bu)) {
                            var n = r[t];
                            if (n && (e === n || Pu.call(n, e))) return e
                        } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function(e, t, n) {
                if (o) {
                    if (n)
                        for (var i in Lu) {
                            var a = r[i];
                            a && b(a.prototype, e) && delete a.prototype[e]
                        }
                    Au[e] && !n || ee(Au, e, n ? t : ju && ku[e] || t)
                }
            },
            exportTypedArrayStaticMethod: function(e, t, n) {
                var i, a;
                if (o) {
                    if (Gt) {
                        if (n)
                            for (i in Lu)(a = r[i]) && b(a, e) && delete a[e];
                        if (xu[e] && !n) return;
                        try {
                            return ee(xu, e, n ? t : ju && Eu[e] || t)
                        } catch (e) {}
                    }
                    for (i in Lu) !(a = r[i]) || a[e] && !n || ee(a, e, t)
                }
            },
            isView: function(e) {
                var t = ft(e);
                return "DataView" === t || b(Lu, t)
            },
            isTypedArray: Nu,
            TypedArray: xu,
            TypedArrayPrototype: Au
        },
        Uu = Mu.NATIVE_ARRAY_BUFFER_VIEWS,
        Du = r.ArrayBuffer,
        Fu = r.Int8Array,
        Bu = !Uu || !i((function() {
            Fu(1)
        })) || !i((function() {
            new Fu(-1)
        })) || !bt((function(e) {
            new Fu, new Fu(null), new Fu(1.5), new Fu(e)
        }), !0) || i((function() {
            return 1 !== new Fu(new Du(2), 1, void 0).length
        })),
        qu = function(e) {
            if (void 0 === e) return 0;
            var t = ae(e),
                n = ce(t);
            if (t !== n) throw RangeError("Wrong length or index");
            return n
        },
        Hu = 1 / 0,
        Vu = Math.abs,
        Wu = Math.pow,
        zu = Math.floor,
        Yu = Math.log,
        $u = Math.LN2,
        Gu = function(e, t, n) {
            var r, i, o, a = new Array(n),
                s = 8 * n - t - 1,
                c = (1 << s) - 1,
                u = c >> 1,
                l = 23 === t ? Wu(2, -24) - Wu(2, -77) : 0,
                f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                h = 0;
            for ((e = Vu(e)) != e || e === Hu ? (i = e != e ? 1 : 0, r = c) : (r = zu(Yu(e) / $u), e * (o = Wu(2, -r)) < 1 && (r--, o *= 2), (e += r + u >= 1 ? l / o : l * Wu(2, 1 - u)) * o >= 2 && (r++, o /= 2), r + u >= c ? (i = 0, r = c) : r + u >= 1 ? (i = (e * o - 1) * Wu(2, t), r += u) : (i = e * Wu(2, u - 1) * Wu(2, t), r = 0)); t >= 8; a[h++] = 255 & i, i /= 256, t -= 8);
            for (r = r << t | i, s += t; s > 0; a[h++] = 255 & r, r /= 256, s -= 8);
            return a[--h] |= 128 * f, a
        },
        Ku = function(e, t) {
            var n, r = e.length,
                i = 8 * r - t - 1,
                o = (1 << i) - 1,
                a = o >> 1,
                s = i - 7,
                c = r - 1,
                u = e[c--],
                l = 127 & u;
            for (u >>= 7; s > 0; l = 256 * l + e[c], c--, s -= 8);
            for (n = l & (1 << -s) - 1, l >>= -s, s += t; s > 0; n = 256 * n + e[c], c--, s -= 8);
            if (0 === l) l = 1 - a;
            else {
                if (l === o) return n ? NaN : u ? -1 / 0 : Hu;
                n += Wu(2, t), l -= a
            }
            return (u ? -1 : 1) * n * Wu(2, l - t)
        },
        Xu = function(e) {
            for (var t = Re(this), n = ce(t.length), r = arguments.length, i = fe(r > 1 ? arguments[1] : void 0, n), o = r > 2 ? arguments[2] : void 0, a = void 0 === o ? n : fe(o, n); a > i;) t[i++] = e;
            return t
        },
        Ju = ye.f,
        Qu = O.f,
        Zu = Z.get,
        el = Z.set,
        tl = "ArrayBuffer",
        nl = "DataView",
        rl = "Wrong index",
        il = r.ArrayBuffer,
        ol = il,
        al = r.DataView,
        sl = al && al.prototype,
        cl = Object.prototype,
        ul = r.RangeError,
        ll = Gu,
        fl = Ku,
        hl = function(e) {
            return [255 & e]
        },
        pl = function(e) {
            return [255 & e, e >> 8 & 255]
        },
        dl = function(e) {
            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        },
        gl = function(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        },
        ml = function(e) {
            return ll(e, 23, 4)
        },
        vl = function(e) {
            return ll(e, 52, 8)
        },
        yl = function(e, t) {
            Qu(e.prototype, t, {
                get: function() {
                    return Zu(this)[t]
                }
            })
        },
        bl = function(e, t, n, r) {
            var i = qu(n),
                o = Zu(e);
            if (i + t > o.byteLength) throw ul(rl);
            var a = Zu(o.buffer).bytes,
                s = i + o.byteOffset,
                c = a.slice(s, s + t);
            return r ? c : c.reverse()
        },
        wl = function(e, t, n, r, i, o) {
            var a = qu(n),
                s = Zu(e);
            if (a + t > s.byteLength) throw ul(rl);
            for (var c = Zu(s.buffer).bytes, u = a + s.byteOffset, l = r(+i), f = 0; f < t; f++) c[u + f] = l[o ? f : t - f - 1]
        };
    if (wu) {
        if (!i((function() {
                il(1)
            })) || !i((function() {
                new il(-1)
            })) || i((function() {
                return new il, new il(1.5), new il(NaN), il.name != tl
            }))) {
            for (var _l, El = (ol = function(e) {
                    return eo(this, ol), new il(qu(e))
                }).prototype = il.prototype, kl = Ju(il), Sl = 0; kl.length > Sl;)(_l = kl[Sl++]) in ol || P(ol, _l, il[_l]);
            El.constructor = ol
        }
        Gt && Bn(sl) !== cl && Gt(sl, cl);
        var Tl = new al(new ol(2)),
            xl = sl.setInt8;
        Tl.setInt8(0, 2147483648), Tl.setInt8(1, 2147483649), !Tl.getInt8(0) && Tl.getInt8(1) || po(sl, {
            setInt8: function(e, t) {
                xl.call(this, e, t << 24 >> 24)
            },
            setUint8: function(e, t) {
                xl.call(this, e, t << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else ol = function(e) {
        eo(this, ol, tl);
        var t = qu(e);
        el(this, {
            bytes: Xu.call(new Array(t), 0),
            byteLength: t
        }), o || (this.byteLength = t)
    }, al = function(e, t, n) {
        eo(this, al, nl), eo(e, ol, nl);
        var r = Zu(e).byteLength,
            i = ae(t);
        if (i < 0 || i > r) throw ul("Wrong offset");
        if (i + (n = void 0 === n ? r - i : ce(n)) > r) throw ul("Wrong length");
        el(this, {
            buffer: e,
            byteLength: n,
            byteOffset: i
        }), o || (this.buffer = e, this.byteLength = n, this.byteOffset = i)
    }, o && (yl(ol, "byteLength"), yl(al, "buffer"), yl(al, "byteLength"), yl(al, "byteOffset")), po(al.prototype, {
        getInt8: function(e) {
            return bl(this, 1, e)[0] << 24 >> 24
        },
        getUint8: function(e) {
            return bl(this, 1, e)[0]
        },
        getInt16: function(e) {
            var t = bl(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
            return (t[1] << 8 | t[0]) << 16 >> 16
        },
        getUint16: function(e) {
            var t = bl(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
            return t[1] << 8 | t[0]
        },
        getInt32: function(e) {
            return gl(bl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
        },
        getUint32: function(e) {
            return gl(bl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        },
        getFloat32: function(e) {
            return fl(bl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
        },
        getFloat64: function(e) {
            return fl(bl(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
        },
        setInt8: function(e, t) {
            wl(this, 1, e, hl, t)
        },
        setUint8: function(e, t) {
            wl(this, 1, e, hl, t)
        },
        setInt16: function(e, t) {
            wl(this, 2, e, pl, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint16: function(e, t) {
            wl(this, 2, e, pl, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setInt32: function(e, t) {
            wl(this, 4, e, dl, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint32: function(e, t) {
            wl(this, 4, e, dl, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat32: function(e, t) {
            wl(this, 4, e, ml, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat64: function(e, t) {
            wl(this, 8, e, vl, t, arguments.length > 2 ? arguments[2] : void 0)
        }
    });
    Yn(ol, tl), Yn(al, nl);
    var Al = {
            ArrayBuffer: ol,
            DataView: al
        },
        Ol = function(e, t) {
            var n = function(e) {
                var t = ae(e);
                if (t < 0) throw RangeError("The argument can't be less than 0");
                return t
            }(e);
            if (n % t) throw RangeError("Wrong offset");
            return n
        },
        Pl = Mu.aTypedArrayConstructor,
        Cl = function(e) {
            var t, n, r, i, o, a, s = Re(e),
                c = arguments.length,
                u = c > 1 ? arguments[1] : void 0,
                l = void 0 !== u,
                f = pt(s);
            if (null != f && !ot(f))
                for (a = (o = f.call(s)).next, s = []; !(i = a.call(o)).done;) s.push(i.value);
            for (l && c > 2 && (u = je(u, arguments[2], 2)), n = ce(s.length), r = new(Pl(this))(n), t = 0; n > t; t++) r[t] = l ? u(s[t], t) : s[t];
            return r
        };
    t((function(e) {
        var t = ye.f,
            n = ze.forEach,
            i = Z.get,
            a = Z.set,
            s = O.f,
            c = T.f,
            l = Math.round,
            f = r.RangeError,
            h = Al.ArrayBuffer,
            p = Al.DataView,
            d = Mu.NATIVE_ARRAY_BUFFER_VIEWS,
            g = Mu.TYPED_ARRAY_TAG,
            y = Mu.TypedArray,
            w = Mu.TypedArrayPrototype,
            _ = Mu.aTypedArrayConstructor,
            E = Mu.isTypedArray,
            k = "BYTES_PER_ELEMENT",
            S = "Wrong length",
            x = function(e, t) {
                for (var n = 0, r = t.length, i = new(_(e))(r); r > n;) i[n] = t[n++];
                return i
            },
            A = function(e, t) {
                s(e, t, {
                    get: function() {
                        return i(this)[t]
                    }
                })
            },
            C = function(e) {
                var t;
                return e instanceof h || "ArrayBuffer" == (t = ft(e)) || "SharedArrayBuffer" == t
            },
            I = function(e, t) {
                return E(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            },
            j = function(e, t) {
                return I(e, t = v(t, !0)) ? u(2, e[t]) : c(e, t)
            },
            R = function(e, t, n) {
                return !(I(e, t = v(t, !0)) && m(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? s(e, t, n) : (e[t] = n.value, e)
            };
        o ? (d || (T.f = j, O.f = R, A(w, "buffer"), A(w, "byteOffset"), A(w, "byteLength"), A(w, "length")), Ce({
            target: "Object",
            stat: !0,
            forced: !d
        }, {
            getOwnPropertyDescriptor: j,
            defineProperty: R
        }), e.exports = function(e, o, c) {
            var u = e.match(/\d+$/)[0] / 8,
                v = e + (c ? "Clamped" : "") + "Array",
                b = "get" + e,
                _ = "set" + e,
                T = r[v],
                A = T,
                O = A && A.prototype,
                I = {},
                j = function(e, t) {
                    s(e, t, {
                        get: function() {
                            return function(e, t) {
                                var n = i(e);
                                return n.view[b](t * u + n.byteOffset, !0)
                            }(this, t)
                        },
                        set: function(e) {
                            return function(e, t, n) {
                                var r = i(e);
                                c && (n = (n = l(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), r.view[_](t * u + r.byteOffset, n, !0)
                            }(this, t, e)
                        },
                        enumerable: !0
                    })
                };
            d ? Bu && (A = o((function(e, t, n, r) {
                return eo(e, A, v), Kt(m(t) ? C(t) ? void 0 !== r ? new T(t, Ol(n, u), r) : void 0 !== n ? new T(t, Ol(n, u)) : new T(t) : E(t) ? x(A, t) : Cl.call(A, t) : new T(qu(t)), e, A)
            })), Gt && Gt(A, y), n(t(T), (function(e) {
                e in A || P(A, e, T[e])
            })), A.prototype = O) : (A = o((function(e, t, n, r) {
                eo(e, A, v);
                var i, o, s, c = 0,
                    l = 0;
                if (m(t)) {
                    if (!C(t)) return E(t) ? x(A, t) : Cl.call(A, t);
                    i = t, l = Ol(n, u);
                    var d = t.byteLength;
                    if (void 0 === r) {
                        if (d % u) throw f(S);
                        if ((o = d - l) < 0) throw f(S)
                    } else if ((o = ce(r) * u) + l > d) throw f(S);
                    s = o / u
                } else s = qu(t), i = new h(o = s * u);
                for (a(e, {
                        buffer: i,
                        byteOffset: l,
                        byteLength: o,
                        length: s,
                        view: new p(i)
                    }); c < s;) j(e, c++)
            })), Gt && Gt(A, y), O = A.prototype = Pt(w)), O.constructor !== A && P(O, "constructor", A), g && P(O, g, v), I[v] = A, Ce({
                global: !0,
                forced: A != T,
                sham: !d
            }, I), k in A || P(A, k, u), k in O || P(O, k, u), nn(v)
        }) : e.exports = function() {}
    }))("Uint16", (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }));
    var Il = Math.min,
        jl = [].copyWithin || function(e, t) {
            var n = Re(this),
                r = ce(n.length),
                i = fe(e, r),
                o = fe(t, r),
                a = arguments.length > 2 ? arguments[2] : void 0,
                s = Il((void 0 === a ? r : fe(a, r)) - o, r - i),
                c = 1;
            for (o < i && i < o + s && (c = -1, o += s - 1, i += s - 1); s-- > 0;) o in n ? n[i] = n[o] : delete n[i], i += c, o += c;
            return n
        },
        Rl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("copyWithin", (function(e, t) {
        return jl.call(Rl(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
    }));
    var Ll = ze.every,
        Nl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("every", (function(e) {
        return Ll(Nl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Ml = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("fill", (function(e) {
        return Xu.apply(Ml(this), arguments)
    }));
    var Ul = ze.filter,
        Dl = Mu.aTypedArray,
        Fl = Mu.aTypedArrayConstructor;
    (0, Mu.exportTypedArrayMethod)("filter", (function(e) {
        for (var t = Ul(Dl(this), e, arguments.length > 1 ? arguments[1] : void 0), n = Bi(this, this.constructor), r = 0, i = t.length, o = new(Fl(n))(i); i > r;) o[r] = t[r++];
        return o
    }));
    var Bl = ze.find,
        ql = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("find", (function(e) {
        return Bl(ql(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Hl = ze.findIndex,
        Vl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("findIndex", (function(e) {
        return Hl(Vl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Wl = ze.forEach,
        zl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("forEach", (function(e) {
        Wl(zl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Yl = pe.includes,
        $l = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("includes", (function(e) {
        return Yl($l(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Gl = pe.indexOf,
        Kl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("indexOf", (function(e) {
        return Gl(Kl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Xl = Be("iterator"),
        Jl = r.Uint8Array,
        Ql = pi.values,
        Zl = pi.keys,
        ef = pi.entries,
        tf = Mu.aTypedArray,
        nf = Mu.exportTypedArrayMethod,
        rf = Jl && Jl.prototype[Xl],
        of = !!rf && ("values" == rf.name || null == rf.name),
        af = function() {
            return Ql.call(tf(this))
        };
    nf("entries", (function() {
        return ef.call(tf(this))
    })), nf("keys", (function() {
        return Zl.call(tf(this))
    })), nf("values", af, ! of ), nf(Xl, af, ! of );
    var sf = Mu.aTypedArray,
        cf = [].join;
    (0, Mu.exportTypedArrayMethod)("join", (function(e) {
        return cf.apply(sf(this), arguments)
    }));
    var uf = Math.min,
        lf = [].lastIndexOf,
        ff = !!lf && 1 / [1].lastIndexOf(1, -0) < 0,
        hf = Ye("lastIndexOf"),
        pf = Xe("indexOf", {
            ACCESSORS: !0,
            1: 0
        }),
        df = ff || !hf || !pf ? function(e) {
            if (ff) return lf.apply(this, arguments) || 0;
            var t = g(this),
                n = ce(t.length),
                r = n - 1;
            for (arguments.length > 1 && (r = uf(r, ae(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in t && t[r] === e) return r || 0;
            return -1
        } : lf,
        gf = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("lastIndexOf", (function(e) {
        return df.apply(gf(this), arguments)
    }));
    var mf = ze.map,
        vf = Mu.aTypedArray,
        yf = Mu.aTypedArrayConstructor;
    (0, Mu.exportTypedArrayMethod)("map", (function(e) {
        return mf(vf(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, t) {
            return new(yf(Bi(e, e.constructor)))(t)
        }))
    }));
    var bf = function(e) {
            return function(t, n, r, i) {
                Ie(n);
                var o = Re(t),
                    a = p(o),
                    s = ce(o.length),
                    c = e ? s - 1 : 0,
                    u = e ? -1 : 1;
                if (r < 2)
                    for (;;) {
                        if (c in a) {
                            i = a[c], c += u;
                            break
                        }
                        if (c += u, e ? c < 0 : s <= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? c >= 0 : s > c; c += u) c in a && (i = n(i, a[c], c, o));
                return i
            }
        },
        wf = {
            left: bf(!1),
            right: bf(!0)
        },
        _f = wf.left,
        Ef = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("reduce", (function(e) {
        return _f(Ef(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var kf = wf.right,
        Sf = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("reduceRight", (function(e) {
        return kf(Sf(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Tf = Mu.aTypedArray,
        xf = Mu.exportTypedArrayMethod,
        Af = Math.floor;
    xf("reverse", (function() {
        for (var e, t = this, n = Tf(t).length, r = Af(n / 2), i = 0; i < r;) e = t[i], t[i++] = t[--n], t[n] = e;
        return t
    }));
    var Of = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("set", (function(e) {
        Of(this);
        var t = Ol(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = this.length,
            r = Re(e),
            i = ce(r.length),
            o = 0;
        if (i + t > n) throw RangeError("Wrong length");
        for (; o < i;) this[t + o] = r[o++]
    }), i((function() {
        new Int8Array(1).set({})
    })));
    var Pf = Mu.aTypedArray,
        Cf = Mu.aTypedArrayConstructor,
        If = [].slice;
    (0, Mu.exportTypedArrayMethod)("slice", (function(e, t) {
        for (var n = If.call(Pf(this), e, t), r = Bi(this, this.constructor), i = 0, o = n.length, a = new(Cf(r))(o); o > i;) a[i] = n[i++];
        return a
    }), i((function() {
        new Int8Array(1).slice()
    })));
    var jf = ze.some,
        Rf = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("some", (function(e) {
        return jf(Rf(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Lf = Mu.aTypedArray,
        Nf = [].sort;
    (0, Mu.exportTypedArrayMethod)("sort", (function(e) {
        return Nf.call(Lf(this), e)
    }));
    var Mf = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("subarray", (function(e, t) {
        var n = Mf(this),
            r = n.length,
            i = fe(e, r);
        return new(Bi(n, n.constructor))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, ce((void 0 === t ? r : fe(t, r)) - i))
    }));
    var Uf = r.Int8Array,
        Df = Mu.aTypedArray,
        Ff = Mu.exportTypedArrayMethod,
        Bf = [].toLocaleString,
        qf = [].slice,
        Hf = !!Uf && i((function() {
            Bf.call(new Uf(1))
        }));
    Ff("toLocaleString", (function() {
        return Bf.apply(Hf ? qf.call(Df(this)) : Df(this), arguments)
    }), i((function() {
        return [1, 2].toLocaleString() != new Uf([1, 2]).toLocaleString()
    })) || !i((function() {
        Uf.prototype.toLocaleString.call([1, 2])
    })));
    var Vf = Mu.exportTypedArrayMethod,
        Wf = r.Uint8Array,
        zf = Wf && Wf.prototype || {},
        Yf = [].toString,
        $f = [].join;
    i((function() {
        Yf.call({})
    })) && (Yf = function() {
        return $f.call(this)
    });
    var Gf = zf.toString != Yf;

    function Kf(e, t) {
        return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
    }

    function Xf(e, t) {
        if (!Array.isArray(e)) return "";
        for (var n = [], r = 0; r < e.length; r++) {
            var i = e[r];
            try {
                n.push(String(i))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }

    function Jf(e, t) {
        return !!hu(e) && (n = t, "[object RegExp]" === Object.prototype.toString.call(n) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t));
        var n
    }

    function Qf() {
        return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }
    Vf("toString", Yf, Gf);
    var Zf = {};

    function eh() {
        return Qf() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : Zf
    }

    function th() {
        var e = eh(),
            t = e.crypto || e.msCrypto;
        if (void 0 !== t && t.getRandomValues) {
            var n = new Uint16Array(8);
            t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
            var r = function(e) {
                for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                return t
            };
            return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }))
    }

    function nh(e) {
        if (!e) return {};
        var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        var n = t[6] || "",
            r = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + n + r
        }
    }

    function rh(e) {
        if (e.message) return e.message;
        if (e.exception && e.exception.values && e.exception.values[0]) {
            var t = e.exception.values[0];
            return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
        }
        return e.event_id || "<unknown>"
    }

    function ih(e) {
        var t = eh();
        if (!("console" in t)) return e();
        var n = t.console,
            r = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
            e in t.console && n[e].__sentry_original__ && (r[e] = n[e], n[e] = n[e].__sentry_original__)
        }));
        var i = e();
        return Object.keys(r).forEach((function(e) {
            n[e] = r[e]
        })), i
    }

    function oh(e, t, n) {
        e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].value = e.exception.values[0].value || t || "", e.exception.values[0].type = e.exception.values[0].type || n || "Error"
    }

    function ah(e, t) {
        void 0 === t && (t = {});
        try {
            e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}, Object.keys(t).forEach((function(n) {
                e.exception.values[0].mechanism[n] = t[n]
            }))
        } catch (e) {}
    }

    function sh(e) {
        try {
            for (var t = e, n = [], r = 0, i = 0, o = " > ".length, a = void 0; t && r++ < 5 && !("html" === (a = ch(t)) || r > 1 && i + n.length * o + a.length >= 80);) n.push(a), i += a.length, t = t.parentNode;
            return n.reverse().join(" > ")
        } catch (e) {
            return "<unknown>"
        }
    }

    function ch(e) {
        var t, n, r, i, o, a = e,
            s = [];
        if (!a || !a.tagName) return "";
        if (s.push(a.tagName.toLowerCase()), a.id && s.push("#" + a.id), (t = a.className) && hu(t))
            for (n = t.split(/\s+/), o = 0; o < n.length; o++) s.push("." + n[o]);
        var c = ["type", "name", "title", "alt"];
        for (o = 0; o < c.length; o++) r = c[o], (i = a.getAttribute(r)) && s.push("[" + r + '="' + i + '"]');
        return s.join("")
    }
    var uh = Date.now(),
        lh = 0,
        fh = {
            now: function() {
                var e = Date.now() - uh;
                return e < lh && (e = lh), lh = e, e
            },
            timeOrigin: uh
        },
        hh = function() {
            if (Qf()) try {
                return (e = module, t = "perf_hooks", e.require(t)).performance
            } catch (e) {
                return fh
            }
            var e, t;
            return eh().performance && void 0 === performance.timeOrigin && (performance.timeOrigin = performance.timing && performance.timing.navigationStart || uh), eh().performance || fh
        }();

    function ph() {
        return (hh.timeOrigin + hh.now()) / 1e3
    }

    function dh(e, t) {
        if (!t) return 6e4;
        var n = parseInt("" + t, 10);
        if (!isNaN(n)) return 1e3 * n;
        var r = Date.parse("" + t);
        return isNaN(r) ? 6e4 : r - e
    }
    var gh = "<anonymous>";

    function mh(e) {
        try {
            return e && "function" == typeof e && e.name || gh
        } catch (e) {
            return gh
        }
    }
    var vh = eh(),
        yh = "Sentry Logger ",
        bh = function() {
            function e() {
                this._enabled = !1
            }
            return e.prototype.disable = function() {
                this._enabled = !1
            }, e.prototype.enable = function() {
                this._enabled = !0
            }, e.prototype.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled && ih((function() {
                    vh.console.log(yh + "[Log]: " + e.join(" "))
                }))
            }, e.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled && ih((function() {
                    vh.console.warn(yh + "[Warn]: " + e.join(" "))
                }))
            }, e.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled && ih((function() {
                    vh.console.error(yh + "[Error]: " + e.join(" "))
                }))
            }, e
        }();
    vh.__SENTRY__ = vh.__SENTRY__ || {};
    var wh = vh.__SENTRY__.logger || (vh.__SENTRY__.logger = new bh),
        _h = Vt("splice"),
        Eh = Xe("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        kh = Math.max,
        Sh = Math.min,
        Th = 9007199254740991,
        xh = "Maximum allowed length exceeded";
    Ce({
        target: "Array",
        proto: !0,
        forced: !_h || !Eh
    }, {
        splice: function(e, t) {
            var n, r, i, o, a, s, c = Re(this),
                u = ce(c.length),
                l = fe(e, u),
                f = arguments.length;
            if (0 === f ? n = r = 0 : 1 === f ? (n = 0, r = u - l) : (n = f - 2, r = Sh(kh(ae(t), 0), u - l)), u + n - r > Th) throw TypeError(xh);
            for (i = He(c, r), o = 0; o < r; o++)(a = l + o) in c && at(i, o, c[a]);
            if (i.length = r, n < r) {
                for (o = l; o < u - r; o++) s = o + n, (a = o + r) in c ? c[s] = c[a] : delete c[s];
                for (o = u; o > u - r + n; o--) delete c[o - 1]
            } else if (n > r)
                for (o = u - r; o > l; o--) s = o + n - 1, (a = o + r - 1) in c ? c[s] = c[a] : delete c[s];
            for (o = 0; o < n; o++) c[o + l] = arguments[o + 2];
            return c.length = u - r + n, i
        }
    });
    var Ah = !i((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        Oh = t((function(e) {
            var t = O.f,
                n = V("meta"),
                r = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                o = function(e) {
                    t(e, n, {
                        value: {
                            objectID: "O" + ++r,
                            weakData: {}
                        }
                    })
                },
                a = e.exports = {
                    REQUIRED: !1,
                    fastKey: function(e, t) {
                        if (!m(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!b(e, n)) {
                            if (!i(e)) return "F";
                            if (!t) return "E";
                            o(e)
                        }
                        return e[n].objectID
                    },
                    getWeakData: function(e, t) {
                        if (!b(e, n)) {
                            if (!i(e)) return !0;
                            if (!t) return !1;
                            o(e)
                        }
                        return e[n].weakData
                    },
                    onFreeze: function(e) {
                        return Ah && a.REQUIRED && i(e) && !b(e, n) && o(e), e
                    }
                };
            Y[n] = !0
        })),
        Ph = (Oh.REQUIRED, Oh.fastKey, Oh.getWeakData, Oh.onFreeze, Oh.getWeakData),
        Ch = Z.set,
        Ih = Z.getterFor,
        jh = ze.find,
        Rh = ze.findIndex,
        Lh = 0,
        Nh = function(e) {
            return e.frozen || (e.frozen = new Mh)
        },
        Mh = function() {
            this.entries = []
        },
        Uh = function(e, t) {
            return jh(e.entries, (function(e) {
                return e[0] === t
            }))
        };
    Mh.prototype = {
            get: function(e) {
                var t = Uh(this, e);
                if (t) return t[1]
            },
            has: function(e) {
                return !!Uh(this, e)
            },
            set: function(e, t) {
                var n = Uh(this, e);
                n ? n[1] = t : this.entries.push([e, t])
            },
            delete: function(e) {
                var t = Rh(this.entries, (function(t) {
                    return t[0] === e
                }));
                return ~t && this.entries.splice(t, 1), !!~t
            }
        },
        function(e, t, n) {
            var o = -1 !== e.indexOf("Map"),
                a = -1 !== e.indexOf("Weak"),
                s = o ? "set" : "add",
                c = r[e],
                u = c && c.prototype,
                l = c,
                f = {},
                h = function(e) {
                    var t = u[e];
                    ee(u, e, "add" == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : "delete" == e ? function(e) {
                        return !(a && !m(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function(e) {
                        return a && !m(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function(e) {
                        return !(a && !m(e)) && t.call(this, 0 === e ? 0 : e)
                    } : function(e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if (Oe(e, "function" != typeof c || !(a || u.forEach && !i((function() {
                    (new c).entries().next()
                }))))) l = n.getConstructor(t, e, o, s), Oh.REQUIRED = !0;
            else if (Oe(e, !0)) {
                var p = new l,
                    d = p[s](a ? {} : -0, 1) != p,
                    g = i((function() {
                        p.has(1)
                    })),
                    v = bt((function(e) {
                        new c(e)
                    })),
                    y = !a && i((function() {
                        for (var e = new c, t = 5; t--;) e[s](t, t);
                        return !e.has(-0)
                    }));
                v || ((l = t((function(t, n) {
                    eo(t, l, e);
                    var r = Kt(new c, t, l);
                    return null != n && Ns(n, r[s], r, o), r
                }))).prototype = u, u.constructor = l), (g || y) && (h("delete"), h("has"), o && h("get")), (y || d) && h(s), a && u.clear && delete u.clear
            }
            f[e] = l, Ce({
                global: !0,
                forced: l != c
            }, f), Yn(l, e), a || n.setStrong(l, e, o)
        }("WeakSet", (function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }), {
            getConstructor: function(e, t, n, r) {
                var i = e((function(e, o) {
                        eo(e, i, t), Ch(e, {
                            type: t,
                            id: Lh++,
                            frozen: void 0
                        }), null != o && Ns(o, e[r], e, n)
                    })),
                    o = Ih(t),
                    a = function(e, t, n) {
                        var r = o(e),
                            i = Ph(x(t), !0);
                        return !0 === i ? Nh(r).set(t, n) : i[r.id] = n, e
                    };
                return po(i.prototype, {
                    delete: function(e) {
                        var t = o(this);
                        if (!m(e)) return !1;
                        var n = Ph(e);
                        return !0 === n ? Nh(t).delete(e) : n && b(n, t.id) && delete n[t.id]
                    },
                    has: function(e) {
                        var t = o(this);
                        if (!m(e)) return !1;
                        var n = Ph(e);
                        return !0 === n ? Nh(t).has(e) : n && b(n, t.id)
                    }
                }), po(i.prototype, n ? {
                    get: function(e) {
                        var t = o(this);
                        if (m(e)) {
                            var n = Ph(e);
                            return !0 === n ? Nh(t).get(e) : n ? n[t.id] : void 0
                        }
                    },
                    set: function(e, t) {
                        return a(this, e, t)
                    }
                } : {
                    add: function(e) {
                        return a(this, e, !0)
                    }
                }), i
            }
        });
    var Dh = function() {
        function e() {
            this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
        }
        return e.prototype.memoize = function(e) {
            if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
            for (var t = 0; t < this._inner.length; t++) {
                if (this._inner[t] === e) return !0
            }
            return this._inner.push(e), !1
        }, e.prototype.unmemoize = function(e) {
            if (this._hasWeakSet) this._inner.delete(e);
            else
                for (var t = 0; t < this._inner.length; t++)
                    if (this._inner[t] === e) {
                        this._inner.splice(t, 1);
                        break
                    }
        }, e
    }();

    function Fh(e, t, n) {
        if (t in e) {
            var r = e[t],
                i = n(r);
            if ("function" == typeof i) try {
                i.prototype = i.prototype || {}, Object.defineProperties(i, {
                    __sentry_original__: {
                        enumerable: !1,
                        value: r
                    }
                })
            } catch (e) {}
            e[t] = i
        }
    }

    function Bh(e) {
        if (uu(e)) {
            var t = e,
                n = {
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                };
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }
        if (gu(e)) {
            var i = e,
                o = {};
            o.type = i.type;
            try {
                o.target = mu(i.target) ? sh(i.target) : Object.prototype.toString.call(i.target)
            } catch (e) {
                o.target = "<unknown>"
            }
            try {
                o.currentTarget = mu(i.currentTarget) ? sh(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
            } catch (e) {
                o.currentTarget = "<unknown>"
            }
            for (var r in "undefined" != typeof CustomEvent && yu(e, CustomEvent) && (o.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
            return o
        }
        return e
    }

    function qh(e) {
        return function(e) {
            return ~-encodeURI(e).split(/%..|./).length
        }(JSON.stringify(e))
    }

    function Hh(e, t, n) {
        void 0 === t && (t = 3), void 0 === n && (n = 102400);
        var r = zh(e, t);
        return qh(r) > n ? Hh(e, t - 1, n) : r
    }

    function Vh(e, t) {
        return "domain" === t && e && "object" === fs(e) && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" != typeof global && e === global ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : du(n = e) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + mh(e) + "]" : e;
        var n
    }

    function Wh(e, t, n, r) {
        if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new Dh), 0 === n) return function(e) {
            var t = Object.prototype.toString.call(e);
            if ("string" == typeof e) return e;
            if ("[object Object]" === t) return "[Object]";
            if ("[object Array]" === t) return "[Array]";
            var n = Vh(e);
            return pu(n) ? n : t
        }(t);
        if (null != t && "function" == typeof t.toJSON) return t.toJSON();
        var i = Vh(t, e);
        if (pu(i)) return i;
        var o = Bh(t),
            a = Array.isArray(t) ? [] : {};
        if (r.memoize(t)) return "[Circular ~]";
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (a[s] = Wh(s, o[s], n - 1, r));
        return r.unmemoize(t), a
    }

    function zh(e, t) {
        try {
            return JSON.parse(JSON.stringify(e, (function(e, n) {
                return Wh(e, n, t)
            })))
        } catch (e) {
            return "**non-serializable**"
        }
    }

    function Yh(e, t) {
        void 0 === t && (t = 40);
        var n = Object.keys(Bh(e));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= t) return Kf(n[0], t);
        for (var r = n.length; r > 0; r--) {
            var i = n.slice(0, r).join(", ");
            if (!(i.length > t)) return r === n.length ? i : Kf(i, t)
        }
        return ""
    }
    Ce({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function() {
            return URL.prototype.toString.call(this)
        }
    });
    var $h = ze.filter,
        Gh = Vt("filter"),
        Kh = Xe("filter");
    Ce({
        target: "Array",
        proto: !0,
        forced: !Gh || !Kh
    }, {
        filter: function(e) {
            return $h(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Xh, Jh = !!Ls && i((function() {
        Ls.prototype.finally.call({
            then: function() {}
        }, (function() {}))
    }));
    Ce({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: Jh
        }, {
            finally: function(e) {
                var t = Bi(this, re("Promise")),
                    n = "function" == typeof e;
                return this.then(n ? function(n) {
                    return wc(t, e()).then((function() {
                        return n
                    }))
                } : e, n ? function(n) {
                    return wc(t, e()).then((function() {
                        throw n
                    }))
                } : e)
            }
        }), "function" != typeof Ls || Ls.prototype.finally || ee(Ls.prototype, "finally", re("Promise").prototype.finally),
        function(e) {
            e.PENDING = "PENDING", e.RESOLVED = "RESOLVED", e.REJECTED = "REJECTED"
        }(Xh || (Xh = {}));
    var Qh = function() {
            function e(e) {
                var t = this;
                this._state = Xh.PENDING, this._handlers = [], this._resolve = function(e) {
                    t._setResult(Xh.RESOLVED, e)
                }, this._reject = function(e) {
                    t._setResult(Xh.REJECTED, e)
                }, this._setResult = function(e, n) {
                    t._state === Xh.PENDING && (vu(n) ? n.then(t._resolve, t._reject) : (t._state = e, t._value = n, t._executeHandlers()))
                }, this._attachHandler = function(e) {
                    t._handlers = t._handlers.concat(e), t._executeHandlers()
                }, this._executeHandlers = function() {
                    if (t._state !== Xh.PENDING) {
                        var e = t._handlers.slice();
                        t._handlers = [], e.forEach((function(e) {
                            e.done || (t._state === Xh.RESOLVED && e.onfulfilled && e.onfulfilled(t._value), t._state === Xh.REJECTED && e.onrejected && e.onrejected(t._value), e.done = !0)
                        }))
                    }
                };
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            return e.prototype.toString = function() {
                return "[object SyncPromise]"
            }, e.resolve = function(t) {
                return new e((function(e) {
                    e(t)
                }))
            }, e.reject = function(t) {
                return new e((function(e, n) {
                    n(t)
                }))
            }, e.all = function(t) {
                return new e((function(n, r) {
                    if (Array.isArray(t))
                        if (0 !== t.length) {
                            var i = t.length,
                                o = [];
                            t.forEach((function(t, a) {
                                e.resolve(t).then((function(e) {
                                    o[a] = e, 0 === (i -= 1) && n(o)
                                })).then(null, r)
                            }))
                        } else n([]);
                    else r(new TypeError("Promise.all requires an array as input."))
                }))
            }, e.prototype.then = function(t, n) {
                var r = this;
                return new e((function(e, i) {
                    r._attachHandler({
                        done: !1,
                        onfulfilled: function(n) {
                            if (t) try {
                                return void e(t(n))
                            } catch (e) {
                                return void i(e)
                            } else e(n)
                        },
                        onrejected: function(t) {
                            if (n) try {
                                return void e(n(t))
                            } catch (e) {
                                return void i(e)
                            } else i(t)
                        }
                    })
                }))
            }, e.prototype.catch = function(e) {
                return this.then((function(e) {
                    return e
                }), e)
            }, e.prototype.finally = function(t) {
                var n = this;
                return new e((function(e, r) {
                    var i, o;
                    return n.then((function(e) {
                        o = !1, i = e, t && t()
                    }), (function(e) {
                        o = !0, i = e, t && t()
                    })).then((function() {
                        o ? r(i) : e(i)
                    }))
                }))
            }, e
        }(),
        Zh = function() {
            function e(e) {
                this._limit = e, this._buffer = []
            }
            return e.prototype.isReady = function() {
                return void 0 === this._limit || this.length() < this._limit
            }, e.prototype.add = function(e) {
                var t = this;
                return this.isReady() ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e), e.then((function() {
                    return t.remove(e)
                })).then(null, (function() {
                    return t.remove(e).then(null, (function() {}))
                })), e) : Qh.reject(new cu("Not adding Promise due to buffer limit reached."))
            }, e.prototype.remove = function(e) {
                return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
            }, e.prototype.length = function() {
                return this._buffer.length
            }, e.prototype.drain = function(e) {
                var t = this;
                return new Qh((function(n) {
                    var r = setTimeout((function() {
                        e && e > 0 && n(!1)
                    }), e);
                    Qh.all(t._buffer).then((function() {
                        clearTimeout(r), n(!0)
                    })).then(null, (function() {
                        n(!0)
                    }))
                }))
            }, e
        }();

    function ep() {
        if (!("fetch" in eh())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (e) {
            return !1
        }
    }

    function tp(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function np() {
        if (!ep()) return !1;
        try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), !0
        } catch (e) {
            return !1
        }
    }
    var rp, ip = eh(),
        op = {},
        ap = {};

    function sp(e) {
        if (!ap[e]) switch (ap[e] = !0, e) {
            case "console":
                ! function() {
                    if (!("console" in ip)) return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
                        e in ip.console && Fh(ip.console, e, (function(t) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                up("console", {
                                    args: n,
                                    level: e
                                }), t && Function.prototype.apply.call(t, ip.console, n)
                            }
                        }))
                    }))
                }();
                break;
            case "dom":
                ! function() {
                    if (!("document" in ip)) return;
                    ip.document.addEventListener("click", gp("click", up.bind(null, "dom")), !1), ip.document.addEventListener("keypress", mp(up.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach((function(e) {
                        var t = ip[e] && ip[e].prototype;
                        t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (Fh(t, "addEventListener", (function(e) {
                            return function(t, n, r) {
                                return n && n.handleEvent ? ("click" === t && Fh(n, "handleEvent", (function(e) {
                                    return function(t) {
                                        return gp("click", up.bind(null, "dom"))(t), e.call(this, t)
                                    }
                                })), "keypress" === t && Fh(n, "handleEvent", (function(e) {
                                    return function(t) {
                                        return mp(up.bind(null, "dom"))(t), e.call(this, t)
                                    }
                                }))) : ("click" === t && gp("click", up.bind(null, "dom"), !0)(this), "keypress" === t && mp(up.bind(null, "dom"))(this)), e.call(this, t, n, r)
                            }
                        })), Fh(t, "removeEventListener", (function(e) {
                            return function(t, n, r) {
                                var i = n;
                                try {
                                    i = i && (i.__sentry_wrapped__ || i)
                                } catch (e) {}
                                return e.call(this, t, i, r)
                            }
                        })))
                    }))
                }();
                break;
            case "xhr":
                ! function() {
                    if (!("XMLHttpRequest" in ip)) return;
                    var e = XMLHttpRequest.prototype;
                    Fh(e, "open", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = t[1];
                            return this.__sentry_xhr__ = {
                                method: hu(t[0]) ? t[0].toUpperCase() : t[0],
                                url: t[1]
                            }, hu(r) && "POST" === this.__sentry_xhr__.method && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0), e.apply(this, t)
                        }
                    })), Fh(e, "send", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = this,
                                i = {
                                    args: t,
                                    startTimestamp: Date.now(),
                                    xhr: r
                                };
                            return up("xhr", Zc({}, i)), r.addEventListener("readystatechange", (function() {
                                if (4 === r.readyState) {
                                    try {
                                        r.__sentry_xhr__ && (r.__sentry_xhr__.status_code = r.status)
                                    } catch (e) {}
                                    up("xhr", Zc({}, i, {
                                        endTimestamp: Date.now()
                                    }))
                                }
                            })), e.apply(this, t)
                        }
                    }))
                }();
                break;
            case "fetch":
                ! function() {
                    if (! function() {
                            if (!ep()) return !1;
                            var e = eh();
                            if (tp(e.fetch)) return !0;
                            var t = !1,
                                n = e.document;
                            if (n && "function" == typeof n.createElement) try {
                                var r = n.createElement("iframe");
                                r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = tp(r.contentWindow.fetch)), n.head.removeChild(r)
                            } catch (e) {
                                wh.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                            }
                            return t
                        }()) return;
                    Fh(ip, "fetch", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = {
                                args: t,
                                fetchData: {
                                    method: lp(t),
                                    url: fp(t)
                                },
                                startTimestamp: Date.now()
                            };
                            return up("fetch", Zc({}, r)), e.apply(ip, t).then((function(e) {
                                return up("fetch", Zc({}, r, {
                                    endTimestamp: Date.now(),
                                    response: e
                                })), e
                            }), (function(e) {
                                throw up("fetch", Zc({}, r, {
                                    endTimestamp: Date.now(),
                                    error: e
                                })), e
                            }))
                        }
                    }))
                }();
                break;
            case "history":
                ! function() {
                    if (! function() {
                            var e = eh(),
                                t = e.chrome,
                                n = t && t.app && t.app.runtime,
                                r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
                            return !n && r
                        }()) return;
                    var e = ip.onpopstate;

                    function t(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = t.length > 2 ? t[2] : void 0;
                            if (r) {
                                var i = rp,
                                    o = String(r);
                                rp = o, up("history", {
                                    from: i,
                                    to: o
                                })
                            }
                            return e.apply(this, t)
                        }
                    }
                    ip.onpopstate = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = ip.location.href,
                            i = rp;
                        if (rp = r, up("history", {
                                from: i,
                                to: r
                            }), e) return e.apply(this, t)
                    }, Fh(ip.history, "pushState", t), Fh(ip.history, "replaceState", t)
                }();
                break;
            case "error":
                vp = ip.onerror, ip.onerror = function(e, t, n, r, i) {
                    return up("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: e,
                        url: t
                    }), !!vp && vp.apply(this, arguments)
                };
                break;
            case "unhandledrejection":
                yp = ip.onunhandledrejection, ip.onunhandledrejection = function(e) {
                    return up("unhandledrejection", e), !yp || yp.apply(this, arguments)
                };
                break;
            default:
                wh.warn("unknown instrumentation type:", e)
        }
    }

    function cp(e) {
        e && "string" == typeof e.type && "function" == typeof e.callback && (op[e.type] = op[e.type] || [], op[e.type].push(e.callback), sp(e.type))
    }

    function up(e, t) {
        var n, r;
        if (e && op[e]) try {
            for (var i = function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                    if (n) return n.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(op[e] || []), o = i.next(); !o.done; o = i.next()) {
                var a = o.value;
                try {
                    a(t)
                } catch (t) {
                    wh.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + mh(a) + "\nError: " + t)
                }
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (r = i.return) && r.call(i)
            } finally {
                if (n) throw n.error
            }
        }
    }

    function lp(e) {
        return void 0 === e && (e = []), "Request" in ip && yu(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function fp(e) {
        return void 0 === e && (e = []), "string" == typeof e[0] ? e[0] : "Request" in ip && yu(e[0], Request) ? e[0].url : String(e[0])
    }
    var hp, pp, dp = 0;

    function gp(e, t, n) {
        return void 0 === n && (n = !1),
            function(r) {
                hp = void 0, r && pp !== r && (pp = r, dp && clearTimeout(dp), n ? dp = setTimeout((function() {
                    t({
                        event: r,
                        name: e
                    })
                })) : t({
                    event: r,
                    name: e
                }))
            }
    }

    function mp(e) {
        return function(t) {
            var n;
            try {
                n = t.target
            } catch (e) {
                return
            }
            var r = n && n.tagName;
            r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && (hp || gp("input", e)(t), clearTimeout(hp), hp = setTimeout((function() {
                hp = void 0
            }), 1e3))
        }
    }
    var vp = null;
    var yp = null;
    var bp = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
        wp = "Invalid Dsn",
        _p = function() {
            function e(e) {
                "string" == typeof e ? this._fromString(e) : this._fromComponents(e), this._validate()
            }
            return e.prototype.toString = function(e) {
                void 0 === e && (e = !1);
                var t = this,
                    n = t.host,
                    r = t.path,
                    i = t.pass,
                    o = t.port,
                    a = t.projectId;
                return t.protocol + "://" + t.user + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + a
            }, e.prototype._fromString = function(e) {
                var t = bp.exec(e);
                if (!t) throw new cu(wp);
                var n = eu(t.slice(1), 6),
                    r = n[0],
                    i = n[1],
                    o = n[2],
                    a = void 0 === o ? "" : o,
                    s = n[3],
                    c = n[4],
                    u = void 0 === c ? "" : c,
                    l = "",
                    f = n[5],
                    h = f.split("/");
                h.length > 1 && (l = h.slice(0, -1).join("/"), f = h.pop()), this._fromComponents({
                    host: s,
                    pass: a,
                    path: l,
                    projectId: f,
                    port: u,
                    protocol: r,
                    user: i
                })
            }, e.prototype._fromComponents = function(e) {
                this.protocol = e.protocol, this.user = e.user, this.pass = e.pass || "", this.host = e.host, this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId
            }, e.prototype._validate = function() {
                var e = this;
                if (["protocol", "user", "host", "projectId"].forEach((function(t) {
                        if (!e[t]) throw new cu(wp)
                    })), "http" !== this.protocol && "https" !== this.protocol) throw new cu(wp);
                if (this.port && isNaN(parseInt(this.port, 10))) throw new cu(wp)
            }, e
        }(),
        Ep = function() {
            function e() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._context = {}
            }
            return e.prototype.addScopeListener = function(e) {
                this._scopeListeners.push(e)
            }, e.prototype.addEventProcessor = function(e) {
                return this._eventProcessors.push(e), this
            }, e.prototype._notifyScopeListeners = function() {
                var e = this;
                this._notifyingListeners || (this._notifyingListeners = !0, setTimeout((function() {
                    e._scopeListeners.forEach((function(t) {
                        t(e)
                    })), e._notifyingListeners = !1
                })))
            }, e.prototype._notifyEventProcessors = function(e, t, n, r) {
                var i = this;
                return void 0 === r && (r = 0), new Qh((function(o, a) {
                    var s = e[r];
                    if (null === t || "function" != typeof s) o(t);
                    else {
                        var c = s(Zc({}, t), n);
                        vu(c) ? c.then((function(t) {
                            return i._notifyEventProcessors(e, t, n, r + 1).then(o)
                        })).then(null, a) : i._notifyEventProcessors(e, c, n, r + 1).then(o).then(null, a)
                    }
                }))
            }, e.prototype.setUser = function(e) {
                return this._user = e || {}, this._notifyScopeListeners(), this
            }, e.prototype.setTags = function(e) {
                return this._tags = Zc({}, this._tags, e), this._notifyScopeListeners(), this
            }, e.prototype.setTag = function(e, t) {
                var n;
                return this._tags = Zc({}, this._tags, ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, e.prototype.setExtras = function(e) {
                return this._extra = Zc({}, this._extra, e), this._notifyScopeListeners(), this
            }, e.prototype.setExtra = function(e, t) {
                var n;
                return this._extra = Zc({}, this._extra, ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, e.prototype.setFingerprint = function(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }, e.prototype.setLevel = function(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }, e.prototype.setTransaction = function(e) {
                return this._transaction = e, this._span && (this._span.transaction = e), this._notifyScopeListeners(), this
            }, e.prototype.setContext = function(e, t) {
                var n;
                return this._context = Zc({}, this._context, ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, e.prototype.setSpan = function(e) {
                return this._span = e, this._notifyScopeListeners(), this
            }, e.prototype.getSpan = function() {
                return this._span
            }, e.clone = function(t) {
                var n = new e;
                return t && (n._breadcrumbs = tu(t._breadcrumbs), n._tags = Zc({}, t._tags), n._extra = Zc({}, t._extra), n._context = Zc({}, t._context), n._user = t._user, n._level = t._level, n._span = t._span, n._transaction = t._transaction, n._fingerprint = t._fingerprint, n._eventProcessors = tu(t._eventProcessors)), n
            }, e.prototype.clear = function() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._context = {}, this._level = void 0, this._transaction = void 0, this._fingerprint = void 0, this._span = void 0, this._notifyScopeListeners(), this
            }, e.prototype.addBreadcrumb = function(e, t) {
                var n = Zc({
                    timestamp: ph()
                }, e);
                return this._breadcrumbs = void 0 !== t && t >= 0 ? tu(this._breadcrumbs, [n]).slice(-t) : tu(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
            }, e.prototype.clearBreadcrumbs = function() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }, e.prototype._applyFingerprint = function(e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            }, e.prototype.applyToEvent = function(e, t) {
                return this._extra && Object.keys(this._extra).length && (e.extra = Zc({}, this._extra, e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = Zc({}, this._tags, e.tags)), this._user && Object.keys(this._user).length && (e.user = Zc({}, this._user, e.user)), this._context && Object.keys(this._context).length && (e.contexts = Zc({}, this._context, e.contexts)), this._level && (e.level = this._level), this._transaction && (e.transaction = this._transaction), this._span && (e.contexts = Zc({
                    trace: this._span.getTraceContext()
                }, e.contexts)), this._applyFingerprint(e), e.breadcrumbs = tu(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, this._notifyEventProcessors(tu(kp(), this._eventProcessors), e, t)
            }, e
        }();

    function kp() {
        var e = eh();
        return e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [], e.__SENTRY__.globalEventProcessors
    }

    function Sp(e) {
        kp().push(e)
    }
    var Tp = function() {
        function e(e, t, n) {
            void 0 === t && (t = new Ep), void 0 === n && (n = 3), this._version = n, this._stack = [], this._stack.push({
                client: e,
                scope: t
            })
        }
        return e.prototype._invokeClient = function(e) {
            for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var i = this.getStackTop();
            i && i.client && i.client[e] && (t = i.client)[e].apply(t, tu(n, [i.scope]))
        }, e.prototype.isOlderThan = function(e) {
            return this._version < e
        }, e.prototype.bindClient = function(e) {
            this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
        }, e.prototype.pushScope = function() {
            var e = this.getStack(),
                t = e.length > 0 ? e[e.length - 1].scope : void 0,
                n = Ep.clone(t);
            return this.getStack().push({
                client: this.getClient(),
                scope: n
            }), n
        }, e.prototype.popScope = function() {
            return void 0 !== this.getStack().pop()
        }, e.prototype.withScope = function(e) {
            var t = this.pushScope();
            try {
                e(t)
            } finally {
                this.popScope()
            }
        }, e.prototype.getClient = function() {
            return this.getStackTop().client
        }, e.prototype.getScope = function() {
            return this.getStackTop().scope
        }, e.prototype.getStack = function() {
            return this._stack
        }, e.prototype.getStackTop = function() {
            return this._stack[this._stack.length - 1]
        }, e.prototype.captureException = function(e, t) {
            var n = this._lastEventId = th(),
                r = t;
            if (!t) {
                var i = void 0;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (e) {
                    i = e
                }
                r = {
                    originalException: e,
                    syntheticException: i
                }
            }
            return this._invokeClient("captureException", e, Zc({}, r, {
                event_id: n
            })), n
        }, e.prototype.captureMessage = function(e, t, n) {
            var r = this._lastEventId = th(),
                i = n;
            if (!n) {
                var o = void 0;
                try {
                    throw new Error(e)
                } catch (e) {
                    o = e
                }
                i = {
                    originalException: e,
                    syntheticException: o
                }
            }
            return this._invokeClient("captureMessage", e, t, Zc({}, i, {
                event_id: r
            })), r
        }, e.prototype.captureEvent = function(e, t) {
            var n = this._lastEventId = th();
            return this._invokeClient("captureEvent", e, Zc({}, t, {
                event_id: n
            })), n
        }, e.prototype.lastEventId = function() {
            return this._lastEventId
        }, e.prototype.addBreadcrumb = function(e, t) {
            var n = this.getStackTop();
            if (n.scope && n.client) {
                var r = n.client.getOptions && n.client.getOptions() || {},
                    i = r.beforeBreadcrumb,
                    o = void 0 === i ? null : i,
                    a = r.maxBreadcrumbs,
                    s = void 0 === a ? 100 : a;
                if (!(s <= 0)) {
                    var c = ph(),
                        u = Zc({
                            timestamp: c
                        }, e),
                        l = o ? ih((function() {
                            return o(u, t)
                        })) : u;
                    null !== l && n.scope.addBreadcrumb(l, Math.min(s, 100))
                }
            }
        }, e.prototype.setUser = function(e) {
            var t = this.getStackTop();
            t.scope && t.scope.setUser(e)
        }, e.prototype.setTags = function(e) {
            var t = this.getStackTop();
            t.scope && t.scope.setTags(e)
        }, e.prototype.setExtras = function(e) {
            var t = this.getStackTop();
            t.scope && t.scope.setExtras(e)
        }, e.prototype.setTag = function(e, t) {
            var n = this.getStackTop();
            n.scope && n.scope.setTag(e, t)
        }, e.prototype.setExtra = function(e, t) {
            var n = this.getStackTop();
            n.scope && n.scope.setExtra(e, t)
        }, e.prototype.setContext = function(e, t) {
            var n = this.getStackTop();
            n.scope && n.scope.setContext(e, t)
        }, e.prototype.configureScope = function(e) {
            var t = this.getStackTop();
            t.scope && t.client && e(t.scope)
        }, e.prototype.run = function(e) {
            var t = Ap(this);
            try {
                e(this)
            } finally {
                Ap(t)
            }
        }, e.prototype.getIntegration = function(e) {
            var t = this.getClient();
            if (!t) return null;
            try {
                return t.getIntegration(e)
            } catch (t) {
                return wh.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
            }
        }, e.prototype.startSpan = function(e, t) {
            return void 0 === t && (t = !1), this._callExtensionMethod("startSpan", e, t)
        }, e.prototype.traceHeaders = function() {
            return this._callExtensionMethod("traceHeaders")
        }, e.prototype._callExtensionMethod = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = xp(),
                i = r.__SENTRY__;
            if (i && i.extensions && "function" == typeof i.extensions[e]) return i.extensions[e].apply(this, t);
            wh.warn("Extension method " + e + " couldn't be found, doing nothing.")
        }, e
    }();

    function xp() {
        var e = eh();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function Ap(e) {
        var t = xp(),
            n = Cp(t);
        return Ip(t, e), n
    }

    function Op() {
        var e = xp();
        return Pp(e) && !Cp(e).isOlderThan(3) || Ip(e, new Tp), Qf() ? function(e) {
            try {
                var t = "domain",
                    n = xp().__SENTRY__;
                if (!n || !n.extensions || !n.extensions[t]) return Cp(e);
                var r = n.extensions[t].active;
                if (!r) return Cp(e);
                if (!Pp(r) || Cp(r).isOlderThan(3)) {
                    var i = Cp(e).getStackTop();
                    Ip(r, new Tp(i.client, Ep.clone(i.scope)))
                }
                return Cp(r)
            } catch (t) {
                return Cp(e)
            }
        }(e) : Cp(e)
    }

    function Pp(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function Cp(e) {
        return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = new Tp), e.__SENTRY__.hub
    }

    function Ip(e, t) {
        return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0)
    }

    function jp(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = Op();
        if (r && r[e]) return r[e].apply(r, tu(t));
        throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
    }

    function Rp(e) {
        var t;
        try {
            throw new Error("Sentry syntheticException")
        } catch (e) {
            t = e
        }
        return jp("captureException", e, {
            originalException: e,
            syntheticException: t
        })
    }

    function Lp(e) {
        jp("withScope", e)
    }
    var Np = function() {
            function e(e) {
                this.dsn = e, this._dsnObject = new _p(e)
            }
            return e.prototype.getDsn = function() {
                return this._dsnObject
            }, e.prototype.getStoreEndpoint = function() {
                return "" + this._getBaseUrl() + this.getStoreEndpointPath()
            }, e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                var e, t = {
                    sentry_key: this._dsnObject.user,
                    sentry_version: "7"
                };
                return this.getStoreEndpoint() + "?" + (e = t, Object.keys(e).map((function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                })).join("&"))
            }, e.prototype._getBaseUrl = function() {
                var e = this._dsnObject,
                    t = e.protocol ? e.protocol + ":" : "",
                    n = e.port ? ":" + e.port : "";
                return t + "//" + e.host + n
            }, e.prototype.getStoreEndpointPath = function() {
                var e = this._dsnObject;
                return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
            }, e.prototype.getRequestHeaders = function(e, t) {
                var n = this._dsnObject,
                    r = ["Sentry sentry_version=7"];
                return r.push("sentry_client=" + e + "/" + t), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            }, e.prototype.getReportDialogEndpoint = function(e) {
                void 0 === e && (e = {});
                var t = this._dsnObject,
                    n = this._getBaseUrl() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/",
                    r = [];
                for (var i in r.push("dsn=" + t.toString()), e)
                    if ("user" === i) {
                        if (!e.user) continue;
                        e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                    } else r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                return r.length ? n + "?" + r.join("&") : n
            }, e
        }(),
        Mp = [];

    function Up(e) {
        var t = {};
        return function(e) {
            var t = e.defaultIntegrations && tu(e.defaultIntegrations) || [],
                n = e.integrations,
                r = [];
            if (Array.isArray(n)) {
                var i = n.map((function(e) {
                        return e.name
                    })),
                    o = [];
                t.forEach((function(e) {
                    -1 === i.indexOf(e.name) && -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name))
                })), n.forEach((function(e) {
                    -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name))
                }))
            } else "function" == typeof n ? (r = n(t), r = Array.isArray(r) ? r : [r]) : r = tu(t);
            var a = r.map((function(e) {
                    return e.name
                })),
                s = "Debug";
            return -1 !== a.indexOf(s) && r.push.apply(r, tu(r.splice(a.indexOf(s), 1))), r
        }(e).forEach((function(e) {
            t[e.name] = e,
                function(e) {
                    -1 === Mp.indexOf(e.name) && (e.setupOnce(Sp, Op), Mp.push(e.name), wh.log("Integration installed: " + e.name))
                }(e)
        })), t
    }
    var Dp, Fp = function() {
            function e(e, t) {
                this._integrations = {}, this._processing = !1, this._backend = new e(t), this._options = t, t.dsn && (this._dsn = new _p(t.dsn))
            }
            return e.prototype.captureException = function(e, t, n) {
                var r = this,
                    i = t && t.event_id;
                return this._processing = !0, this._getBackend().eventFromException(e, t).then((function(e) {
                    return r._processEvent(e, t, n)
                })).then((function(e) {
                    i = e && e.event_id, r._processing = !1
                })).then(null, (function(e) {
                    wh.error(e), r._processing = !1
                })), i
            }, e.prototype.captureMessage = function(e, t, n, r) {
                var i = this,
                    o = n && n.event_id;
                return this._processing = !0, (pu(e) ? this._getBackend().eventFromMessage("" + e, t, n) : this._getBackend().eventFromException(e, n)).then((function(e) {
                    return i._processEvent(e, n, r)
                })).then((function(e) {
                    o = e && e.event_id, i._processing = !1
                })).then(null, (function(e) {
                    wh.error(e), i._processing = !1
                })), o
            }, e.prototype.captureEvent = function(e, t, n) {
                var r = this,
                    i = t && t.event_id;
                return this._processing = !0, this._processEvent(e, t, n).then((function(e) {
                    i = e && e.event_id, r._processing = !1
                })).then(null, (function(e) {
                    wh.error(e), r._processing = !1
                })), i
            }, e.prototype.getDsn = function() {
                return this._dsn
            }, e.prototype.getOptions = function() {
                return this._options
            }, e.prototype.flush = function(e) {
                var t = this;
                return this._isClientProcessing(e).then((function(n) {
                    return clearInterval(n.interval), t._getBackend().getTransport().close(e).then((function(e) {
                        return n.ready && e
                    }))
                }))
            }, e.prototype.close = function(e) {
                var t = this;
                return this.flush(e).then((function(e) {
                    return t.getOptions().enabled = !1, e
                }))
            }, e.prototype.setupIntegrations = function() {
                this._isEnabled() && (this._integrations = Up(this._options))
            }, e.prototype.getIntegration = function(e) {
                try {
                    return this._integrations[e.id] || null
                } catch (t) {
                    return wh.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
                }
            }, e.prototype._isClientProcessing = function(e) {
                var t = this;
                return new Qh((function(n) {
                    var r = 0,
                        i = 0;
                    clearInterval(i), i = setInterval((function() {
                        t._processing ? (r += 1, e && r >= e && n({
                            interval: i,
                            ready: !1
                        })) : n({
                            interval: i,
                            ready: !0
                        })
                    }), 1)
                }))
            }, e.prototype._getBackend = function() {
                return this._backend
            }, e.prototype._isEnabled = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }, e.prototype._prepareEvent = function(e, t, n) {
                var r = this,
                    i = this.getOptions(),
                    o = i.environment,
                    a = i.release,
                    s = i.dist,
                    c = i.maxValueLength,
                    u = void 0 === c ? 250 : c,
                    l = i.normalizeDepth,
                    f = void 0 === l ? 3 : l,
                    h = Zc({}, e);
                void 0 === h.environment && void 0 !== o && (h.environment = o), void 0 === h.release && void 0 !== a && (h.release = a), void 0 === h.dist && void 0 !== s && (h.dist = s), h.message && (h.message = Kf(h.message, u));
                var p = h.exception && h.exception.values && h.exception.values[0];
                p && p.value && (p.value = Kf(p.value, u));
                var d = h.request;
                d && d.url && (d.url = Kf(d.url, u)), void 0 === h.event_id && (h.event_id = n && n.event_id ? n.event_id : th()), this._addIntegrations(h.sdk);
                var g = Qh.resolve(h);
                return t && (g = t.applyToEvent(h, n)), g.then((function(e) {
                    return "number" == typeof f && f > 0 ? r._normalizeEvent(e, f) : e
                }))
            }, e.prototype._normalizeEvent = function(e, t) {
                return e ? Zc({}, e, e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map((function(e) {
                        return Zc({}, e, e.data && {
                            data: zh(e.data, t)
                        })
                    }))
                }, e.user && {
                    user: zh(e.user, t)
                }, e.contexts && {
                    contexts: zh(e.contexts, t)
                }, e.extra && {
                    extra: zh(e.extra, t)
                }) : null
            }, e.prototype._addIntegrations = function(e) {
                var t = Object.keys(this._integrations);
                e && t.length > 0 && (e.integrations = t)
            }, e.prototype._processEvent = function(e, t, n) {
                var r = this,
                    i = this.getOptions(),
                    o = i.beforeSend,
                    a = i.sampleRate;
                return this._isEnabled() ? "number" == typeof a && Math.random() > a ? Qh.reject("This event has been sampled, will not send event.") : new Qh((function(i, a) {
                    r._prepareEvent(e, n, t).then((function(e) {
                        if (null !== e) {
                            var n = e;
                            if (t && t.data && !0 === t.data.__sentry__ || !o) return r._getBackend().sendEvent(n), void i(n);
                            var s = o(e, t);
                            if (void 0 === s) wh.error("`beforeSend` method has to return `null` or a valid event.");
                            else if (vu(s)) r._handleAsyncBeforeSend(s, i, a);
                            else {
                                if (null === (n = s)) return wh.log("`beforeSend` returned `null`, will not send event."), void i(null);
                                r._getBackend().sendEvent(n), i(n)
                            }
                        } else a("An event processor returned null, will not send event.")
                    })).then(null, (function(e) {
                        r.captureException(e, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: e
                        }), a("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                    }))
                })) : Qh.reject("SDK not enabled, will not send event.")
            }, e.prototype._handleAsyncBeforeSend = function(e, t, n) {
                var r = this;
                e.then((function(e) {
                    null !== e ? (r._getBackend().sendEvent(e), t(e)) : n("`beforeSend` returned `null`, will not send event.")
                })).then(null, (function(e) {
                    n("beforeSend rejected with " + e)
                }))
            }, e
        }(),
        Bp = function() {
            function e() {}
            return e.prototype.sendEvent = function(e) {
                return Qh.resolve({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: Qc.Skipped
                })
            }, e.prototype.close = function(e) {
                return Qh.resolve(!0)
            }, e
        }(),
        qp = function() {
            function e(e) {
                this._options = e, this._options.dsn || wh.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
            }
            return e.prototype._setupTransport = function() {
                return new Bp
            }, e.prototype.eventFromException = function(e, t) {
                throw new cu("Backend has to implement `eventFromException` method")
            }, e.prototype.eventFromMessage = function(e, t, n) {
                throw new cu("Backend has to implement `eventFromMessage` method")
            }, e.prototype.sendEvent = function(e) {
                this._transport.sendEvent(e).then(null, (function(e) {
                    wh.error("Error while sending event: " + e)
                }))
            }, e.prototype.getTransport = function() {
                return this._transport
            }, e
        }();
    var Hp = function() {
            function e() {
                this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                Dp = Function.prototype.toString, Function.prototype.toString = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.__sentry_original__ || this;
                    return Dp.apply(n, e)
                }
            }, e.id = "FunctionToString", e
        }(),
        Vp = ze.some,
        Wp = Ye("some"),
        zp = Xe("some");
    Ce({
        target: "Array",
        proto: !0,
        forced: !Wp || !zp
    }, {
        some: function(e) {
            return Vp(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Yp = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        $p = function() {
            function e(t) {
                void 0 === t && (t = {}), this._options = t, this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                Sp((function(t) {
                    var n = Op();
                    if (!n) return t;
                    var r = n.getIntegration(e);
                    if (r) {
                        var i = n.getClient(),
                            o = i ? i.getOptions() : {},
                            a = r._mergeOptions(o);
                        if (r._shouldDropEvent(t, a)) return null
                    }
                    return t
                }))
            }, e.prototype._shouldDropEvent = function(e, t) {
                return this._isSentryError(e, t) ? (wh.warn("Event dropped due to being internal Sentry Error.\nEvent: " + rh(e)), !0) : this._isIgnoredError(e, t) ? (wh.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + rh(e)), !0) : this._isBlacklistedUrl(e, t) ? (wh.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + rh(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0) : !this._isWhitelistedUrl(e, t) && (wh.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + rh(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0)
            }, e.prototype._isSentryError = function(e, t) {
                if (void 0 === t && (t = {}), !t.ignoreInternal) return !1;
                try {
                    return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
                } catch (e) {
                    return !1
                }
            }, e.prototype._isIgnoredError = function(e, t) {
                return void 0 === t && (t = {}), !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some((function(e) {
                    return t.ignoreErrors.some((function(t) {
                        return Jf(e, t)
                    }))
                }))
            }, e.prototype._isBlacklistedUrl = function(e, t) {
                if (void 0 === t && (t = {}), !t.blacklistUrls || !t.blacklistUrls.length) return !1;
                var n = this._getEventFilterUrl(e);
                return !!n && t.blacklistUrls.some((function(e) {
                    return Jf(n, e)
                }))
            }, e.prototype._isWhitelistedUrl = function(e, t) {
                if (void 0 === t && (t = {}), !t.whitelistUrls || !t.whitelistUrls.length) return !0;
                var n = this._getEventFilterUrl(e);
                return !n || t.whitelistUrls.some((function(e) {
                    return Jf(n, e)
                }))
            }, e.prototype._mergeOptions = function(e) {
                return void 0 === e && (e = {}), {
                    blacklistUrls: tu(this._options.blacklistUrls || [], e.blacklistUrls || []),
                    ignoreErrors: tu(this._options.ignoreErrors || [], e.ignoreErrors || [], Yp),
                    ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal,
                    whitelistUrls: tu(this._options.whitelistUrls || [], e.whitelistUrls || [])
                }
            }, e.prototype._getPossibleEventMessages = function(e) {
                if (e.message) return [e.message];
                if (e.exception) try {
                    var t = e.exception.values && e.exception.values[0] || {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        i = t.value,
                        o = void 0 === i ? "" : i;
                    return ["" + o, r + ": " + o]
                } catch (t) {
                    return wh.error("Cannot extract message for event " + rh(e)), []
                }
                return []
            }, e.prototype._getEventFilterUrl = function(e) {
                try {
                    if (e.stacktrace) {
                        var t = e.stacktrace.frames;
                        return t && t[t.length - 1].filename || null
                    }
                    if (e.exception) {
                        var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                        return n && n[n.length - 1].filename || null
                    }
                    return null
                } catch (t) {
                    return wh.error("Cannot extract url for event " + rh(e)), null
                }
            }, e.id = "InboundFilters", e
        }(),
        Gp = "?",
        Kp = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Xp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
        Jp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Qp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Zp = /\((\S*)(?::(\d+))(?::(\d+))\)/;

    function ed(e) {
        var t = null,
            n = e && e.framesToPop;
        try {
            if (t = function(e) {
                    if (!e || !e.stacktrace) return null;
                    for (var t, n = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, o = n.split("\n"), a = [], s = 0; s < o.length; s += 2) {
                        var c = null;
                        (t = r.exec(o[s])) ? c = {
                            url: t[2],
                            func: t[3],
                            args: [],
                            line: +t[1],
                            column: null
                        }: (t = i.exec(o[s])) && (c = {
                            url: t[6],
                            func: t[3] || t[4],
                            args: t[5] ? t[5].split(",") : [],
                            line: +t[1],
                            column: +t[2]
                        }), c && (!c.func && c.line && (c.func = Gp), a.push(c))
                    }
                    if (!a.length) return null;
                    return {
                        message: nd(e),
                        name: e.name,
                        stack: a
                    }
                }(e)) return td(t, n)
        } catch (e) {}
        try {
            if (t = function(e) {
                    if (!e || !e.stack) return null;
                    for (var t, n, r, i = [], o = e.stack.split("\n"), a = 0; a < o.length; ++a) {
                        if (n = Kp.exec(o[a])) {
                            var s = n[2] && 0 === n[2].indexOf("native");
                            n[2] && 0 === n[2].indexOf("eval") && (t = Zp.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]), r = {
                                url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                func: n[1] || Gp,
                                args: s ? [n[2]] : [],
                                line: n[3] ? +n[3] : null,
                                column: n[4] ? +n[4] : null
                            }
                        } else if (n = Jp.exec(o[a])) r = {
                            url: n[2],
                            func: n[1] || Gp,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                        else {
                            if (!(n = Xp.exec(o[a]))) continue;
                            n[3] && n[3].indexOf(" > eval") > -1 && (t = Qp.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = t[1], n[4] = t[2], n[5] = "") : 0 !== a || n[5] || void 0 === e.columnNumber || (i[0].column = e.columnNumber + 1), r = {
                                url: n[3],
                                func: n[1] || Gp,
                                args: n[2] ? n[2].split(",") : [],
                                line: n[4] ? +n[4] : null,
                                column: n[5] ? +n[5] : null
                            }
                        }!r.func && r.line && (r.func = Gp), i.push(r)
                    }
                    if (!i.length) return null;
                    return {
                        message: nd(e),
                        name: e.name,
                        stack: i
                    }
                }(e)) return td(t, n)
        } catch (e) {}
        return {
            message: nd(e),
            name: e && e.name,
            stack: [],
            failed: !0
        }
    }

    function td(e, t) {
        try {
            return Zc({}, e, {
                stack: e.stack.slice(t)
            })
        } catch (t) {
            return e
        }
    }

    function nd(e) {
        var t = e && e.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
    }

    function rd(e) {
        var t = od(e.stack),
            n = {
                type: e.name,
                value: e.message
            };
        return t && t.length && (n.stacktrace = {
            frames: t
        }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
    }

    function id(e) {
        return {
            exception: {
                values: [rd(e)]
            }
        }
    }

    function od(e) {
        if (!e || !e.length) return [];
        var t = e,
            n = t[0].func || "",
            r = t[t.length - 1].func || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.map((function(e) {
            return {
                colno: null === e.column ? void 0 : e.column,
                filename: e.url || t[0].url,
                function: e.func || "?",
                in_app: !0,
                lineno: null === e.line ? void 0 : e.line
            }
        })).slice(0, 50).reverse()
    }

    function ad(e, t, n) {
        var r, i;
        if (void 0 === n && (n = {}), lu(e) && e.error) return r = id(ed(e = e.error));
        if (fu(e) || (i = e, "[object DOMException]" === Object.prototype.toString.call(i))) {
            var o = e,
                a = o.name || (fu(o) ? "DOMError" : "DOMException"),
                s = o.message ? a + ": " + o.message : a;
            return oh(r = sd(s, t, n), s), r
        }
        return uu(e) ? r = id(ed(e)) : du(e) || gu(e) ? (ah(r = function(e, t, n) {
            var r = {
                exception: {
                    values: [{
                        type: gu(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Yh(e)
                    }]
                },
                extra: {
                    __serialized__: Hh(e)
                }
            };
            if (t) {
                var i = od(ed(t).stack);
                r.stacktrace = {
                    frames: i
                }
            }
            return r
        }(e, t, n.rejection), {
            synthetic: !0
        }), r) : (oh(r = sd(e, t, n), "" + e, void 0), ah(r, {
            synthetic: !0
        }), r)
    }

    function sd(e, t, n) {
        void 0 === n && (n = {});
        var r = {
            message: e
        };
        if (n.attachStacktrace && t) {
            var i = od(ed(t).stack);
            r.stacktrace = {
                frames: i
            }
        }
        return r
    }
    var cd = function() {
            function e(e) {
                this.options = e, this._buffer = new Zh(30), this.url = new Np(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
            }
            return e.prototype.sendEvent = function(e) {
                throw new cu("Transport Class has to implement `sendEvent` method")
            }, e.prototype.close = function(e) {
                return this._buffer.drain(e)
            }, e
        }(),
        ud = eh(),
        ld = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._disabledUntil = new Date(Date.now()), t
            }
            return Xc(t, e), t.prototype.sendEvent = function(e) {
                var t = this;
                if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                    event: e,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                });
                var n = {
                    body: JSON.stringify(e),
                    method: "POST",
                    referrerPolicy: np() ? "origin" : ""
                };
                return void 0 !== this.options.headers && (n.headers = this.options.headers), this._buffer.add(new Qh((function(e, r) {
                    ud.fetch(t.url, n).then((function(n) {
                        var i = Qc.fromHttpCode(n.status);
                        if (i !== Qc.Success) {
                            if (i === Qc.RateLimit) {
                                var o = Date.now();
                                t._disabledUntil = new Date(o + dh(o, n.headers.get("Retry-After"))), wh.warn("Too many requests, backing off till: " + t._disabledUntil)
                            }
                            r(n)
                        } else e({
                            status: i
                        })
                    })).catch(r)
                })))
            }, t
        }(cd),
        fd = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._disabledUntil = new Date(Date.now()), t
            }
            return Xc(t, e), t.prototype.sendEvent = function(e) {
                var t = this;
                return new Date(Date.now()) < this._disabledUntil ? Promise.reject({
                    event: e,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                }) : this._buffer.add(new Qh((function(n, r) {
                    var i = new XMLHttpRequest;
                    for (var o in i.onreadystatechange = function() {
                            if (4 === i.readyState) {
                                var e = Qc.fromHttpCode(i.status);
                                if (e !== Qc.Success) {
                                    if (e === Qc.RateLimit) {
                                        var o = Date.now();
                                        t._disabledUntil = new Date(o + dh(o, i.getResponseHeader("Retry-After"))), wh.warn("Too many requests, backing off till: " + t._disabledUntil)
                                    }
                                    r(i)
                                } else n({
                                    status: e
                                })
                            }
                        }, i.open("POST", t.url), t.options.headers) t.options.headers.hasOwnProperty(o) && i.setRequestHeader(o, t.options.headers[o]);
                    i.send(JSON.stringify(e))
                })))
            }, t
        }(cd),
        hd = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Xc(t, e), t.prototype._setupTransport = function() {
                if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                var t = Zc({}, this._options.transportOptions, {
                    dsn: this._options.dsn
                });
                return this._options.transport ? new this._options.transport(t) : ep() ? new ld(t) : new fd(t)
            }, t.prototype.eventFromException = function(e, t) {
                var n = ad(e, t && t.syntheticException || void 0, {
                    attachStacktrace: this._options.attachStacktrace
                });
                return ah(n, {
                    handled: !0,
                    type: "generic"
                }), n.level = Jc.Error, t && t.event_id && (n.event_id = t.event_id), Qh.resolve(n)
            }, t.prototype.eventFromMessage = function(e, t, n) {
                void 0 === t && (t = Jc.Info);
                var r = sd(e, n && n.syntheticException || void 0, {
                    attachStacktrace: this._options.attachStacktrace
                });
                return r.level = t, n && n.event_id && (r.event_id = n.event_id), Qh.resolve(r)
            }, t
        }(qp),
        pd = "5.15.5",
        dd = function(e) {
            function t(t) {
                return void 0 === t && (t = {}), e.call(this, hd, t) || this
            }
            return Xc(t, e), t.prototype._prepareEvent = function(t, n, r) {
                return t.platform = t.platform || "javascript", t.sdk = Zc({}, t.sdk, {
                    name: "sentry.javascript.browser",
                    packages: tu(t.sdk && t.sdk.packages || [], [{
                        name: "npm:@sentry/browser",
                        version: pd
                    }]),
                    version: pd
                }), e.prototype._prepareEvent.call(this, t, n, r)
            }, t.prototype.showReportDialog = function(e) {
                void 0 === e && (e = {});
                var t = eh().document;
                if (t)
                    if (this._isEnabled()) {
                        var n = e.dsn || this.getDsn();
                        if (e.eventId)
                            if (n) {
                                var r = t.createElement("script");
                                r.async = !0, r.src = new Np(n).getReportDialogEndpoint(e), e.onLoad && (r.onload = e.onLoad), (t.head || t.body).appendChild(r)
                            } else wh.error("Missing `Dsn` option in showReportDialog call");
                        else wh.error("Missing `eventId` option in showReportDialog call")
                    } else wh.error("Trying to call showReportDialog with Sentry Client is disabled")
            }, t
        }(Fp),
        gd = 0;

    function md() {
        return gd > 0
    }

    function vd() {
        gd += 1, setTimeout((function() {
            gd -= 1
        }))
    }

    function yd(e, t, n) {
        if (void 0 === t && (t = {}), "function" != typeof e) return e;
        try {
            if (e.__sentry__) return e;
            if (e.__sentry_wrapped__) return e.__sentry_wrapped__
        } catch (t) {
            return e
        }
        var r = function() {
            var r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                var i = r.map((function(e) {
                    return yd(e, t)
                }));
                return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
            } catch (e) {
                throw vd(), Lp((function(n) {
                    n.addEventProcessor((function(e) {
                        var n = Zc({}, e);
                        return t.mechanism && (oh(n, void 0, void 0), ah(n, t.mechanism)), n.extra = Zc({}, n.extra, {
                            arguments: r
                        }), n
                    })), Rp(e)
                })), e
            }
        };
        try {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
        } catch (e) {}
        e.prototype = e.prototype || {}, r.prototype = e.prototype, Object.defineProperty(e, "__sentry_wrapped__", {
            enumerable: !1,
            value: r
        }), Object.defineProperties(r, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: e
            }
        });
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get: function() {
                    return e.name
                }
            })
        } catch (e) {}
        return r
    }
    var bd = function() {
            function e(t) {
                this.name = e.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = Zc({
                    onerror: !0,
                    onunhandledrejection: !0
                }, t)
            }
            return e.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50, this._options.onerror && (wh.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (wh.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
            }, e.prototype._installGlobalOnErrorHandler = function() {
                var t = this;
                this._onErrorHandlerInstalled || (cp({
                    callback: function(n) {
                        var r = n.error,
                            i = Op(),
                            o = i.getIntegration(e),
                            a = r && !0 === r.__sentry_own_request__;
                        if (o && !md() && !a) {
                            var s = i.getClient(),
                                c = pu(r) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(ad(r, void 0, {
                                    attachStacktrace: s && s.getOptions().attachStacktrace,
                                    rejection: !1
                                }), n.url, n.line, n.column);
                            ah(c, {
                                handled: !1,
                                type: "onerror"
                            }), i.captureEvent(c, {
                                originalException: r
                            })
                        }
                    },
                    type: "error"
                }), this._onErrorHandlerInstalled = !0)
            }, e.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                var t = this;
                this._onUnhandledRejectionHandlerInstalled || (cp({
                    callback: function(n) {
                        var r = n;
                        try {
                            "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                        } catch (e) {}
                        var i = Op(),
                            o = i.getIntegration(e),
                            a = r && !0 === r.__sentry_own_request__;
                        if (!o || md() || a) return !0;
                        var s = i.getClient(),
                            c = pu(r) ? t._eventFromIncompleteRejection(r) : ad(r, void 0, {
                                attachStacktrace: s && s.getOptions().attachStacktrace,
                                rejection: !0
                            });
                        c.level = Jc.Error, ah(c, {
                            handled: !1,
                            type: "onunhandledrejection"
                        }), i.captureEvent(c, {
                            originalException: r
                        })
                    },
                    type: "unhandledrejection"
                }), this._onUnhandledRejectionHandlerInstalled = !0)
            }, e.prototype._eventFromIncompleteOnError = function(e, t, n, r) {
                var i, o = lu(e) ? e.message : e;
                if (hu(o)) {
                    var a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                    a && (i = a[1], o = a[2])
                }
                var s = {
                    exception: {
                        values: [{
                            type: i || "Error",
                            value: o
                        }]
                    }
                };
                return this._enhanceEventWithInitialFrame(s, t, n, r)
            }, e.prototype._eventFromIncompleteRejection = function(e) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + e
                        }]
                    }
                }
            }, e.prototype._enhanceEventWithInitialFrame = function(e, t, n, r) {
                e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}, e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
                var i = isNaN(parseInt(r, 10)) ? void 0 : r,
                    o = isNaN(parseInt(n, 10)) ? void 0 : n,
                    a = hu(t) && t.length > 0 ? t : function() {
                        try {
                            return document.location.href
                        } catch (e) {
                            return ""
                        }
                    }();
                return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                    colno: i,
                    filename: a,
                    function: "?",
                    in_app: !0,
                    lineno: o
                }), e
            }, e.id = "GlobalHandlers", e
        }(),
        wd = function() {
            function e() {
                this._ignoreOnError = 0, this.name = e.id
            }
            return e.prototype._wrapTimeFunction = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = t[0];
                    return t[0] = yd(r, {
                        mechanism: {
                            data: {
                                function: mh(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), e.apply(this, t)
                }
            }, e.prototype._wrapRAF = function(e) {
                return function(t) {
                    return e(yd(t, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: mh(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, e.prototype._wrapEventTarget = function(e) {
                var t = eh(),
                    n = t[e] && t[e].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Fh(n, "addEventListener", (function(t) {
                    return function(n, r, i) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = yd(r.handleEvent.bind(r), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: mh(r),
                                        target: e
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (e) {}
                        return t.call(this, n, yd(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: mh(r),
                                    target: e
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), i)
                    }
                })), Fh(n, "removeEventListener", (function(e) {
                    return function(t, n, r) {
                        var i = n;
                        try {
                            i = i && (i.__sentry_wrapped__ || i)
                        } catch (e) {}
                        return e.call(this, t, i, r)
                    }
                })))
            }, e.prototype._wrapXHR = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = this,
                        i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    return i.forEach((function(e) {
                        e in r && "function" == typeof r[e] && Fh(r, e, (function(t) {
                            var n = {
                                mechanism: {
                                    data: {
                                        function: e,
                                        handler: mh(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            };
                            return t.__sentry_original__ && (n.mechanism.data.handler = mh(t.__sentry_original__)), yd(t, n)
                        }))
                    })), e.apply(this, t)
                }
            }, e.prototype.setupOnce = function() {
                this._ignoreOnError = this._ignoreOnError;
                var e = eh();
                Fh(e, "setTimeout", this._wrapTimeFunction.bind(this)), Fh(e, "setInterval", this._wrapTimeFunction.bind(this)), Fh(e, "requestAnimationFrame", this._wrapRAF.bind(this)), "XMLHttpRequest" in e && Fh(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this._wrapEventTarget.bind(this))
            }, e.id = "TryCatch", e
        }(),
        _d = function() {
            function e(t) {
                this.name = e.id, this._options = Zc({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, t)
            }
            return e.prototype._consoleBreadcrumb = function(e) {
                var t = {
                    category: "console",
                    data: {
                        arguments: e.args,
                        logger: "console"
                    },
                    level: Jc.fromString(e.level),
                    message: Xf(e.args, " ")
                };
                if ("assert" === e.level) {
                    if (!1 !== e.args[0]) return;
                    t.message = "Assertion failed: " + (Xf(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
                }
                Op().addBreadcrumb(t, {
                    input: e.args,
                    level: e.level
                })
            }, e.prototype._domBreadcrumb = function(e) {
                var t;
                try {
                    t = e.event.target ? sh(e.event.target) : sh(e.event)
                } catch (e) {
                    t = "<unknown>"
                }
                0 !== t.length && Op().addBreadcrumb({
                    category: "ui." + e.name,
                    message: t
                }, {
                    event: e.event,
                    name: e.name
                })
            }, e.prototype._xhrBreadcrumb = function(e) {
                if (e.endTimestamp) {
                    if (e.xhr.__sentry_own_request__) return;
                    Op().addBreadcrumb({
                        category: "xhr",
                        data: e.xhr.__sentry_xhr__,
                        type: "http"
                    }, {
                        xhr: e.xhr
                    })
                } else this._options.sentry && e.xhr.__sentry_own_request__ && Ed(e.args[0])
            }, e.prototype._fetchBreadcrumb = function(e) {
                if (e.endTimestamp) {
                    var t = Op().getClient(),
                        n = t && t.getDsn();
                    if (this._options.sentry && n) {
                        var r = new Np(n).getStoreEndpoint();
                        if (r && -1 !== e.fetchData.url.indexOf(r) && "POST" === e.fetchData.method && e.args[1] && e.args[1].body) return void Ed(e.args[1].body)
                    }
                    e.error ? Op().addBreadcrumb({
                        category: "fetch",
                        data: Zc({}, e.fetchData, {
                            status_code: e.response.status
                        }),
                        level: Jc.Error,
                        type: "http"
                    }, {
                        data: e.error,
                        input: e.args
                    }) : Op().addBreadcrumb({
                        category: "fetch",
                        data: Zc({}, e.fetchData, {
                            status_code: e.response.status
                        }),
                        type: "http"
                    }, {
                        input: e.args,
                        response: e.response
                    })
                }
            }, e.prototype._historyBreadcrumb = function(e) {
                var t = eh(),
                    n = e.from,
                    r = e.to,
                    i = nh(t.location.href),
                    o = nh(n),
                    a = nh(r);
                o.path || (o = i), i.protocol === a.protocol && i.host === a.host && (r = a.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), Op().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: n,
                        to: r
                    }
                })
            }, e.prototype.setupOnce = function() {
                var e = this;
                this._options.console && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._consoleBreadcrumb.apply(e, tu(t))
                    },
                    type: "console"
                }), this._options.dom && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._domBreadcrumb.apply(e, tu(t))
                    },
                    type: "dom"
                }), this._options.xhr && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._xhrBreadcrumb.apply(e, tu(t))
                    },
                    type: "xhr"
                }), this._options.fetch && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._fetchBreadcrumb.apply(e, tu(t))
                    },
                    type: "fetch"
                }), this._options.history && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._historyBreadcrumb.apply(e, tu(t))
                    },
                    type: "history"
                })
            }, e.id = "Breadcrumbs", e
        }();

    function Ed(e) {
        try {
            var t = JSON.parse(e);
            Op().addBreadcrumb({
                category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                event_id: t.event_id,
                level: t.level || Jc.fromString("error"),
                message: rh(t)
            }, {
                event: t
            })
        } catch (e) {
            wh.error("Error while adding sentry type breadcrumb")
        }
    }
    var kd = function() {
            function e(t) {
                void 0 === t && (t = {}), this.name = e.id, this._key = t.key || "cause", this._limit = t.limit || 5
            }
            return e.prototype.setupOnce = function() {
                Sp((function(t, n) {
                    var r = Op().getIntegration(e);
                    return r ? r._handler(t, n) : t
                }))
            }, e.prototype._handler = function(e, t) {
                if (!(e.exception && e.exception.values && t && yu(t.originalException, Error))) return e;
                var n = this._walkErrorTree(t.originalException, this._key);
                return e.exception.values = tu(n, e.exception.values), e
            }, e.prototype._walkErrorTree = function(e, t, n) {
                if (void 0 === n && (n = []), !yu(e[t], Error) || n.length + 1 >= this._limit) return n;
                var r = rd(ed(e[t]));
                return this._walkErrorTree(e[t], t, tu([r], n))
            }, e.id = "LinkedErrors", e
        }(),
        Sd = eh(),
        Td = function() {
            function e() {
                this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                Sp((function(t) {
                    if (Op().getIntegration(e)) {
                        if (!Sd.navigator || !Sd.location) return t;
                        var n = t.request || {};
                        return n.url = n.url || Sd.location.href, n.headers = n.headers || {}, n.headers["User-Agent"] = Sd.navigator.userAgent, Zc({}, t, {
                            request: n
                        })
                    }
                    return t
                }))
            }, e.id = "UserAgent", e
        }(),
        xd = [new $p, new Hp, new wd, new _d, new bd, new kd, new Td];

    function Ad(e) {
        if (void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = xd), void 0 === e.release) {
            var t = eh();
            t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
        }! function(e, t) {
            !0 === t.debug && wh.enable();
            var n = Op(),
                r = new e(t);
            n.bindClient(r)
        }(dd, e)
    }
    var Od = ze.find,
        Pd = "find",
        Cd = !0,
        Id = Xe(Pd);
    Pd in [] && Array(1).find((function() {
        Cd = !1
    })), Ce({
        target: "Array",
        proto: !0,
        forced: Cd || !Id
    }, {
        find: function(e) {
            return Od(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), jt(Pd);
    var jd = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
        Rd = RegExp("^" + jd + jd + "*"),
        Ld = RegExp(jd + jd + "*$"),
        Nd = function(e) {
            return function(t) {
                var n = String(d(t));
                return 1 & e && (n = n.replace(Rd, "")), 2 & e && (n = n.replace(Ld, "")), n
            }
        },
        Md = {
            start: Nd(1),
            end: Nd(2),
            trim: Nd(3)
        },
        Ud = ye.f,
        Dd = T.f,
        Fd = O.f,
        Bd = Md.trim,
        qd = "Number",
        Hd = r.Number,
        Vd = Hd.prototype,
        Wd = f(Pt(Vd)) == qd,
        zd = function(e) {
            var t, n, r, i, o, a, s, c, u = v(e, !1);
            if ("string" == typeof u && u.length > 2)
                if (43 === (t = (u = Bd(u)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                switch (u.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, i = 55;
                        break;
                    default:
                        return +u
                }
                for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
                    if ((c = o.charCodeAt(s)) < 48 || c > i) return NaN;
                return parseInt(o, r)
            }
            return +u
        };
    if (Oe(qd, !Hd(" 0o1") || !Hd("0b1") || Hd("+0x1"))) {
        for (var Yd, $d = function(e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof $d && (Wd ? i((function() {
                    Vd.valueOf.call(n)
                })) : f(n) != qd) ? Kt(new Hd(zd(t)), n, $d) : zd(t)
            }, Gd = o ? Ud(Hd) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Kd = 0; Gd.length > Kd; Kd++) b(Hd, Yd = Gd[Kd]) && !b($d, Yd) && Fd($d, Yd, Dd(Hd, Yd));
        $d.prototype = Vd, Vd.constructor = $d, ee(r, qd, $d)
    }
    Ce({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(e) {
            return e != e
        }
    });
    var Xd = c.f,
        Jd = function(e) {
            return function(t) {
                for (var n, r = g(t), i = Et(r), a = i.length, s = 0, c = []; a > s;) n = i[s++], o && !Xd.call(r, n) || c.push(e ? [n, r[n]] : r[n]);
                return c
            }
        },
        Qd = {
            entries: Jd(!0),
            values: Jd(!1)
        }.entries;

    function Zd(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function eg(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function tg(e, t, n) {
        return t && eg(e.prototype, t), n && eg(e, n), e
    }

    function ng(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function rg(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    Ce({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return Qd(e)
        }
    });
    var ig = function(e) {
            return null != e ? e.constructor : null
        },
        og = function(e, t) {
            return !!(e && t && e instanceof t)
        },
        ag = function(e) {
            return null == e
        },
        sg = function(e) {
            return ig(e) === Object
        },
        cg = function(e) {
            return ig(e) === String
        },
        ug = function(e) {
            return Array.isArray(e)
        },
        lg = function(e) {
            return og(e, NodeList)
        },
        fg = ag,
        hg = sg,
        pg = function(e) {
            return ig(e) === Number && !Number.isNaN(e)
        },
        dg = cg,
        gg = function(e) {
            return ig(e) === Boolean
        },
        mg = ug,
        vg = lg,
        yg = function(e) {
            return og(e, Element)
        },
        bg = function(e) {
            return og(e, Event)
        },
        wg = function(e) {
            return ag(e) || (cg(e) || ug(e) || lg(e)) && !e.length || sg(e) && !Object.keys(e).length
        },
        _g = {
            facebook: {
                domain: "facebook.com",
                url: function(e) {
                    return "https://graph.facebook.com/?id=".concat(e, "&fields=og_object{engagement}")
                },
                shareCount: function(e) {
                    return e.og_object.engagement.count
                },
                popup: {
                    width: 640,
                    height: 360
                }
            },
            twitter: {
                domain: "twitter.com",
                url: function() {
                    return null
                },
                shareCount: function() {
                    return null
                },
                popup: {
                    width: 640,
                    height: 240
                }
            },
            pinterest: {
                domain: "pinterest.com",
                url: function(e) {
                    return "https://widgets.pinterest.com/v1/urls/count.json?url=".concat(e)
                },
                shareCount: function(e) {
                    return e.count
                },
                popup: {
                    width: 830,
                    height: 700
                }
            },
            github: {
                domain: "github.com",
                url: function(e, t) {
                    return "https://api.github.com/repos/".concat(e).concat(dg(t) ? "?access_token=".concat(t) : "")
                },
                shareCount: function(e) {
                    return e.data.stargazers_count
                }
            },
            youtube: {
                domain: "youtube.com",
                url: function(e, t) {
                    return "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=".concat(e, "&key=").concat(t)
                },
                shareCount: function(e) {
                    if (!wg(e.error)) return null;
                    var t = rg(e.items, 1)[0];
                    return wg(t) ? null : t.statistics.subscriberCount
                }
            }
        },
        Eg = {
            debug: !1,
            wrapper: {
                className: "shr"
            },
            count: {
                className: "shr__count",
                displayZero: !1,
                format: !0,
                position: "after",
                increment: !0
            },
            tokens: {
                github: "",
                youtube: ""
            },
            storage: {
                enabled: !0,
                key: "shr",
                ttl: 3e5
            }
        };

    function kg(e) {
        return new Promise((function(t, n) {
            var r = "jsonp_callback_".concat(Math.round(1e5 * Math.random())),
                i = document.createElement("script");
            i.addEventListener("error", (function(e) {
                return n(e)
            })), window[r] = function(e) {
                delete window[r], document.body.removeChild(i), t(e)
            };
            var o = new URL(e);
            o.searchParams.set("callback", r), i.setAttribute("src", o.toString()), document.body.appendChild(i)
        }))
    }
    var Sg = function() {},
        Tg = function() {
            function e() {
                var t = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
                Zd(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
            }
            return tg(e, [{
                key: "log",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : Sg
                }
            }, {
                key: "warn",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : Sg
                }
            }, {
                key: "error",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : Sg
                }
            }]), e
        }();

    function xg(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }.call(e, t)
    }

    function Ag(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach((function(e, n) {
            var r = 0 < n ? t.cloneNode(!0) : t,
                i = e.parentNode,
                o = e.nextSibling;
            r.appendChild(e), o ? i.insertBefore(r, o) : i.appendChild(r)
        }))
    }

    function Og(e, t, n) {
        var r = document.createElement(e);
        return hg(t) && function(e, t) {
            !yg(e) || wg(t) || Object.entries(t).filter((function(e) {
                var t = rg(e, 2)[1];
                return !fg(t)
            })).forEach((function(t) {
                var n = rg(t, 2),
                    r = n[0],
                    i = n[1];
                return e.setAttribute(r, i)
            }))
        }(r, t), dg(n) && (r.innerText = n), r
    }

    function Pg(e) {
        var t = /\./.test(1.1.toLocaleString()) ? "." : ",",
            n = new RegExp("\\".concat(t, "\\d+$"));
        return Math.round(e).toLocaleString().replace(n, "")
    }

    function Cg() {
        for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!n.length) return e;
        var i = n.shift();
        return hg(i) ? (Object.keys(i).forEach((function(t) {
            hg(i[t]) ? (!Object.keys(e).includes(t) && Object.assign(e, ng({}, t, {})), Cg(e[t], i[t])) : Object.assign(e, ng({}, t, i[t]))
        })), Cg.apply(void 0, [e].concat(n))) : e
    }
    var Ig = function() {
        function e(t, n) {
            var r = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            Zd(this, e), this.enabled = r && e.supported, this.key = t, this.ttl = n
        }
        return tg(e, [{
            key: "get",
            value: function(t) {
                if (!e.supported || !this.enabled) return null;
                var n = window.localStorage.getItem(this.key);
                if (wg(n)) return null;
                var r = window.localStorage.getItem("".concat(this.key, "_ttl"));
                if (wg(r) || r < Date.now()) return null;
                var i = JSON.parse(n);
                return dg(t) && t.length ? i[t] : i
            }
        }, {
            key: "set",
            value: function(t) {
                if (e.supported && this.enabled && hg(t)) {
                    var n = this.get();
                    wg(n) && (n = {}), Cg(n, t), window.localStorage.setItem(this.key, JSON.stringify(n)), window.localStorage.setItem("".concat(this.key, "_ttl"), Date.now() + this.ttl)
                }
            }
        }], [{
            key: "supported",
            get: function() {
                try {
                    return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
                } catch (e) {
                    return !1
                }
            }
        }]), e
    }();
    var jg = function() {
            function e(t, n) {
                var r = this;
                Zd(this, e), this.elements = {
                    count: null,
                    trigger: null,
                    popup: null
                }, yg(t) ? this.elements.trigger = t : dg(t) && (this.elements.trigger = document.querySelector(t)), yg(this.elements.trigger) && wg(this.elements.trigger.shr) && (this.config = Cg({}, Eg, n, {
                    networks: _g
                }), this.console = new Tg(this.config.debug), this.storage = new Ig(this.config.storage.key, this.config.storage.ttl, this.config.storage.enabled), this.getCount().then((function(e) {
                    return r.updateDisplay(e)
                })).catch((function() {})), this.listeners(!0), this.elements.trigger.shr = this)
            }
            return tg(e, [{
                key: "destroy",
                value: function() {
                    this.listeners(!1)
                }
            }, {
                key: "listeners",
                value: function() {
                    var e = this,
                        t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? "addEventListener" : "removeEventListener";
                    this.elements.trigger[t]("click", (function(t) {
                        return e.share(t)
                    }), !1)
                }
            }, {
                key: "share",
                value: function(e) {
                    var t = this;
                    this.openPopup(e);
                    var n = this.config.count.increment;
                    this.getCount().then((function(e) {
                        return t.updateDisplay(e, n)
                    })).catch((function() {}))
                }
            }, {
                key: "openPopup",
                value: function(e) {
                    if (!wg(this.network) && this.networkConfig.popup) {
                        bg(e) && e.preventDefault();
                        var t = this.networkConfig.popup,
                            n = t.width,
                            r = t.height,
                            i = "shr-popup--".concat(this.network);
                        if (this.popup && !this.popup.closed) this.popup.focus(), this.console.log("Popup re-focused.");
                        else {
                            var o = void 0 === window.screenLeft ? window.screen.left : window.screenLeft,
                                a = void 0 === window.screenTop ? window.screen.top : window.screenTop,
                                s = window.screen.width / 2 - n / 2 + o,
                                c = window.screen.height / 2 - r / 2 + a;
                            this.popup = window.open(this.href, i, "top=".concat(c, ",left=").concat(s, ",width=").concat(n, ",height=").concat(r)), this.popup && !this.popup.closed && gg(this.popup.closed) ? (this.popup.focus(), this.console.log("Popup opened.")) : this.console.error("Popup blocked.")
                        }
                    }
                }
            }, {
                key: "getCount",
                value: function() {
                    var e = this,
                        t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return new Promise((function(n, r) {
                        var i = e.apiUrl;
                        if (wg(i)) r(new Error("No URL available for ".concat(e.network, ".")));
                        else {
                            if (t) {
                                var o = e.storage.get(e.target);
                                if (!wg(o) && Object.keys(o).includes(e.network)) {
                                    var a = o[e.network];
                                    return n(pg(a) ? a : 0), void e.console.log("getCount for '".concat(e.target, "' for '").concat(e.network, "' resolved from cache."))
                                }
                            }
                            kg(i).then((function(t) {
                                var r = 0,
                                    i = e.elements.trigger.getAttribute("data-shr-display");
                                r = wg(i) ? e.networkConfig.shareCount(t) : t[i], wg(r) ? r = 0 : (r = parseInt(r, 10), !pg(r) && (r = 0)), e.storage.set(ng({}, e.target, ng({}, e.network, r))), n(r)
                            })).catch(r)
                        }
                    }))
                }
            }, {
                key: "updateDisplay",
                value: function(e) {
                    var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                        n = this.config,
                        r = n.count,
                        i = n.wrapper,
                        o = t ? e + 1 : e,
                        a = r.position.toLowerCase();
                    if (0 < o || r.displayZero) {
                        var s = function(e) {
                                return Math.round(o / e * 10) / 10
                            },
                            c = Pg(o);
                        r.format && (1e6 < o ? c = "".concat(s(1e6), "M") : 1e3 < o && (c = "".concat(s(1e3), "K"))), yg(this.elements.count) ? this.elements.count.textContent = c : (Ag(this.elements.trigger, Og("span", {
                            class: i.className
                        })), this.elements.count = Og("span", {
                            class: "".concat(r.className, " ").concat(r.className, "--").concat(a)
                        }, c), this.elements.trigger.insertAdjacentElement("after" === a ? "afterend" : "beforebegin", this.elements.count))
                    }
                }
            }, {
                key: "href",
                get: function() {
                    return yg(this.elements.trigger) ? this.elements.trigger.href : null
                }
            }, {
                key: "network",
                get: function() {
                    var e = this;
                    if (!yg(this.elements.trigger)) return null;
                    var t = this.config.networks;
                    return Object.keys(t).find((function(n) {
                        return function(e) {
                            var t = new URL(e).hostname,
                                n = t.split("."),
                                r = n.length;
                            return 2 < r && (t = "".concat(n[r - 2], ".").concat(n[r - 1]), 2 === n[r - 2].length && 2 === n[r - 1].length && (t = "".concat(n[r - 3], ".").concat(t))), t
                        }(e.href) === t[n].domain
                    }))
                }
            }, {
                key: "networkConfig",
                get: function() {
                    return wg(this.network) ? null : this.config.networks[this.network]
                }
            }, {
                key: "target",
                get: function() {
                    if (wg(this.network)) return null;
                    var e = new URL(this.href);
                    switch (this.network) {
                        case "facebook":
                            return e.searchParams.get("u");
                        case "github":
                            return e.pathname.substring(1);
                        case "youtube":
                            return e.pathname.split("/").pop();
                        default:
                            return e.searchParams.get("url")
                    }
                }
            }, {
                key: "apiUrl",
                get: function() {
                    if (wg(this.network)) return null;
                    var e = this.config.tokens;
                    switch (this.network) {
                        case "github":
                            return this.networkConfig.url(this.target, e.github);
                        case "youtube":
                            return this.networkConfig.url(this.target, e.youtube);
                        default:
                            return this.networkConfig.url(encodeURIComponent(this.target))
                    }
                }
            }], [{
                key: "setup",
                value: function(t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        r = null;
                    if (dg(t) ? r = Array.from(document.querySelectorAll(t)) : yg(t) ? r = [t] : vg(t) ? r = Array.from(t) : mg(t) && (r = t.filter(yg)), wg(r)) return null;
                    var i = Object.assign({}, Eg, n);
                    return dg(t) && i.watch && new MutationObserver((function(n) {
                        Array.from(n).forEach((function(n) {
                            Array.from(n.addedNodes).forEach((function(n) {
                                yg(n) && xg(n, t) && new e(n, i)
                            }))
                        }))
                    })).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    }), r.map((function(t) {
                        return new e(t, n)
                    }))
                }
            }]), e
        }(),
        Rg = function(e) {
            return e && e.Math == Math && e
        },
        Lg = Rg("object" == typeof globalThis && globalThis) || Rg("object" == typeof window && window) || Rg("object" == typeof self && self) || Rg("object" == typeof e && e) || function() {
            return this
        }() || Function("return this")(),
        Ng = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        Mg = !Ng((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        Ug = {}.propertyIsEnumerable,
        Dg = Object.getOwnPropertyDescriptor,
        Fg = {
            f: Dg && !Ug.call({
                1: 2
            }, 1) ? function(e) {
                var t = Dg(this, e);
                return !!t && t.enumerable
            } : Ug
        },
        Bg = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        qg = {}.toString,
        Hg = function(e) {
            return qg.call(e).slice(8, -1)
        },
        Vg = "".split,
        Wg = Ng((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == Hg(e) ? Vg.call(e, "") : Object(e)
        } : Object,
        zg = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        Yg = function(e) {
            return Wg(zg(e))
        },
        $g = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        Gg = function(e, t) {
            if (!$g(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !$g(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !$g(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !$g(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        Kg = {}.hasOwnProperty,
        Xg = function(e, t) {
            return Kg.call(e, t)
        },
        Jg = Lg.document,
        Qg = $g(Jg) && $g(Jg.createElement),
        Zg = function(e) {
            return Qg ? Jg.createElement(e) : {}
        },
        em = !Mg && !Ng((function() {
            return 7 != Object.defineProperty(Zg("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        tm = Object.getOwnPropertyDescriptor,
        nm = {
            f: Mg ? tm : function(e, t) {
                if (e = Yg(e), t = Gg(t, !0), em) try {
                    return tm(e, t)
                } catch (e) {}
                if (Xg(e, t)) return Bg(!Fg.f.call(e, t), e[t])
            }
        },
        rm = function(e) {
            if (!$g(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        im = Object.defineProperty,
        om = {
            f: Mg ? im : function(e, t, n) {
                if (rm(e), t = Gg(t, !0), rm(n), em) try {
                    return im(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        am = Mg ? function(e, t, n) {
            return om.f(e, t, Bg(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        sm = function(e, t) {
            try {
                am(Lg, e, t)
            } catch (n) {
                Lg[e] = t
            }
            return t
        },
        cm = "__core-js_shared__",
        um = Lg[cm] || sm(cm, {}),
        lm = Function.toString;
    "function" != typeof um.inspectSource && (um.inspectSource = function(e) {
        return lm.call(e)
    });
    var fm, hm, pm, dm = um.inspectSource,
        gm = Lg.WeakMap,
        mm = "function" == typeof gm && /native code/.test(dm(gm)),
        vm = t((function(e) {
            (e.exports = function(e, t) {
                return um[e] || (um[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.7.0",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        ym = 0,
        bm = Math.random(),
        wm = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++ym + bm).toString(36)
        },
        _m = vm("keys"),
        Em = function(e) {
            return _m[e] || (_m[e] = wm(e))
        },
        km = {},
        Sm = Lg.WeakMap;
    if (mm) {
        var Tm = um.state || (um.state = new Sm),
            xm = Tm.get,
            Am = Tm.has,
            Om = Tm.set;
        fm = function(e, t) {
            return t.facade = e, Om.call(Tm, e, t), t
        }, hm = function(e) {
            return xm.call(Tm, e) || {}
        }, pm = function(e) {
            return Am.call(Tm, e)
        }
    } else {
        var Pm = Em("state");
        km[Pm] = !0, fm = function(e, t) {
            return t.facade = e, am(e, Pm, t), t
        }, hm = function(e) {
            return Xg(e, Pm) ? e[Pm] : {}
        }, pm = function(e) {
            return Xg(e, Pm)
        }
    }
    var Cm, Im, jm = {
            set: fm,
            get: hm,
            has: pm,
            enforce: function(e) {
                return pm(e) ? hm(e) : fm(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!$g(t) || (n = hm(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        Rm = t((function(e) {
            var t = jm.get,
                n = jm.enforce,
                r = String(String).split("String");
            (e.exports = function(e, t, i, o) {
                var a, s = !!o && !!o.unsafe,
                    c = !!o && !!o.enumerable,
                    u = !!o && !!o.noTargetGet;
                "function" == typeof i && ("string" != typeof t || Xg(i, "name") || am(i, "name", t), (a = n(i)).source || (a.source = r.join("string" == typeof t ? t : ""))), e !== Lg ? (s ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = i : am(e, t, i)) : c ? e[t] = i : sm(t, i)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && t(this).source || dm(this)
            }))
        })),
        Lm = Lg,
        Nm = function(e) {
            return "function" == typeof e ? e : void 0
        },
        Mm = function(e, t) {
            return arguments.length < 2 ? Nm(Lm[e]) || Nm(Lg[e]) : Lm[e] && Lm[e][t] || Lg[e] && Lg[e][t]
        },
        Um = Math.ceil,
        Dm = Math.floor,
        Fm = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? Dm : Um)(e)
        },
        Bm = Math.min,
        qm = function(e) {
            return e > 0 ? Bm(Fm(e), 9007199254740991) : 0
        },
        Hm = Math.max,
        Vm = Math.min,
        Wm = function(e, t) {
            var n = Fm(e);
            return n < 0 ? Hm(n + t, 0) : Vm(n, t)
        },
        zm = function(e) {
            return function(t, n, r) {
                var i, o = Yg(t),
                    a = qm(o.length),
                    s = Wm(r, a);
                if (e && n != n) {
                    for (; a > s;)
                        if ((i = o[s++]) != i) return !0
                } else
                    for (; a > s; s++)
                        if ((e || s in o) && o[s] === n) return e || s || 0;
                return !e && -1
            }
        },
        Ym = {
            includes: zm(!0),
            indexOf: zm(!1)
        },
        $m = Ym.indexOf,
        Gm = function(e, t) {
            var n, r = Yg(e),
                i = 0,
                o = [];
            for (n in r) !Xg(km, n) && Xg(r, n) && o.push(n);
            for (; t.length > i;) Xg(r, n = t[i++]) && (~$m(o, n) || o.push(n));
            return o
        },
        Km = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Xm = Km.concat("length", "prototype"),
        Jm = {
            f: Object.getOwnPropertyNames || function(e) {
                return Gm(e, Xm)
            }
        },
        Qm = {
            f: Object.getOwnPropertySymbols
        },
        Zm = Mm("Reflect", "ownKeys") || function(e) {
            var t = Jm.f(rm(e)),
                n = Qm.f;
            return n ? t.concat(n(e)) : t
        },
        ev = function(e, t) {
            for (var n = Zm(t), r = om.f, i = nm.f, o = 0; o < n.length; o++) {
                var a = n[o];
                Xg(e, a) || r(e, a, i(t, a))
            }
        },
        tv = /#|\.prototype\./,
        nv = function(e, t) {
            var n = iv[rv(e)];
            return n == av || n != ov && ("function" == typeof t ? Ng(t) : !!t)
        },
        rv = nv.normalize = function(e) {
            return String(e).replace(tv, ".").toLowerCase()
        },
        iv = nv.data = {},
        ov = nv.NATIVE = "N",
        av = nv.POLYFILL = "P",
        sv = nv,
        cv = nm.f,
        uv = function(e, t) {
            var n, r, i, o, a, s = e.target,
                c = e.global,
                u = e.stat;
            if (n = c ? Lg : u ? Lg[s] || sm(s, {}) : (Lg[s] || {}).prototype)
                for (r in t) {
                    if (o = t[r], i = e.noTargetGet ? (a = cv(n, r)) && a.value : n[r], !sv(c ? r : s + (u ? "." : "#") + r, e.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        ev(o, i)
                    }(e.sham || i && i.sham) && am(o, "sham", !0), Rm(n, r, o, e)
                }
        },
        lv = Array.isArray || function(e) {
            return "Array" == Hg(e)
        },
        fv = function(e) {
            return Object(zg(e))
        },
        hv = function(e, t, n) {
            var r = Gg(t);
            r in e ? om.f(e, r, Bg(0, n)) : e[r] = n
        },
        pv = !!Object.getOwnPropertySymbols && !Ng((function() {
            return !String(Symbol())
        })),
        dv = pv && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        gv = vm("wks"),
        mv = Lg.Symbol,
        vv = dv ? mv : mv && mv.withoutSetter || wm,
        yv = function(e) {
            return Xg(gv, e) || (pv && Xg(mv, e) ? gv[e] = mv[e] : gv[e] = vv("Symbol." + e)), gv[e]
        },
        bv = yv("species"),
        wv = function(e, t) {
            var n;
            return lv(e) && ("function" != typeof(n = e.constructor) || n !== Array && !lv(n.prototype) ? $g(n) && null === (n = n[bv]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        _v = Mm("navigator", "userAgent") || "",
        Ev = Lg.process,
        kv = Ev && Ev.versions,
        Sv = kv && kv.v8;
    Sv ? Im = (Cm = Sv.split("."))[0] + Cm[1] : _v && (!(Cm = _v.match(/Edge\/(\d+)/)) || Cm[1] >= 74) && (Cm = _v.match(/Chrome\/(\d+)/)) && (Im = Cm[1]);
    var Tv = Im && +Im,
        xv = yv("species"),
        Av = function(e) {
            return Tv >= 51 || !Ng((function() {
                var t = [];
                return (t.constructor = {})[xv] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            }))
        },
        Ov = yv("isConcatSpreadable"),
        Pv = 9007199254740991,
        Cv = "Maximum allowed index exceeded",
        Iv = Tv >= 51 || !Ng((function() {
            var e = [];
            return e[Ov] = !1, e.concat()[0] !== e
        })),
        jv = Av("concat"),
        Rv = function(e) {
            if (!$g(e)) return !1;
            var t = e[Ov];
            return void 0 !== t ? !!t : lv(e)
        };
    uv({
        target: "Array",
        proto: !0,
        forced: !Iv || !jv
    }, {
        concat: function(e) {
            var t, n, r, i, o, a = fv(this),
                s = wv(a, 0),
                c = 0;
            for (t = -1, r = arguments.length; t < r; t++)
                if (Rv(o = -1 === t ? a : arguments[t])) {
                    if (c + (i = qm(o.length)) > Pv) throw TypeError(Cv);
                    for (n = 0; n < i; n++, c++) n in o && hv(s, c, o[n])
                } else {
                    if (c >= Pv) throw TypeError(Cv);
                    hv(s, c++, o)
                } return s.length = c, s
        }
    });
    var Lv = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        Nv = function(e, t, n) {
            if (Lv(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        Mv = [].push,
        Uv = function(e) {
            var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                i = 4 == e,
                o = 6 == e,
                a = 5 == e || o;
            return function(s, c, u, l) {
                for (var f, h, p = fv(s), d = Wg(p), g = Nv(c, u, 3), m = qm(d.length), v = 0, y = l || wv, b = t ? y(s, m) : n ? y(s, 0) : void 0; m > v; v++)
                    if ((a || v in d) && (h = g(f = d[v], v, p), e))
                        if (t) b[v] = h;
                        else if (h) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return v;
                    case 2:
                        Mv.call(b, f)
                } else if (i) return !1;
                return o ? -1 : r || i ? i : b
            }
        },
        Dv = {
            forEach: Uv(0),
            map: Uv(1),
            filter: Uv(2),
            some: Uv(3),
            every: Uv(4),
            find: Uv(5),
            findIndex: Uv(6)
        },
        Fv = Object.defineProperty,
        Bv = {},
        qv = function(e) {
            throw e
        },
        Hv = function(e, t) {
            if (Xg(Bv, e)) return Bv[e];
            t || (t = {});
            var n = [][e],
                r = !!Xg(t, "ACCESSORS") && t.ACCESSORS,
                i = Xg(t, 0) ? t[0] : qv,
                o = Xg(t, 1) ? t[1] : void 0;
            return Bv[e] = !!n && !Ng((function() {
                if (r && !Mg) return !0;
                var e = {
                    length: -1
                };
                r ? Fv(e, 1, {
                    enumerable: !0,
                    get: qv
                }) : e[1] = 1, n.call(e, i, o)
            }))
        },
        Vv = Dv.filter,
        Wv = Av("filter"),
        zv = Hv("filter");
    uv({
        target: "Array",
        proto: !0,
        forced: !Wv || !zv
    }, {
        filter: function(e) {
            return Vv(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Yv, $v = Object.keys || function(e) {
            return Gm(e, Km)
        },
        Gv = Mg ? Object.defineProperties : function(e, t) {
            rm(e);
            for (var n, r = $v(t), i = r.length, o = 0; i > o;) om.f(e, n = r[o++], t[n]);
            return e
        },
        Kv = Mm("document", "documentElement"),
        Xv = Em("IE_PROTO"),
        Jv = function() {},
        Qv = function(e) {
            return "<script>" + e + "</" + "script>"
        },
        Zv = function() {
            try {
                Yv = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            Zv = Yv ? function(e) {
                e.write(Qv("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(Yv) : ((t = Zg("iframe")).style.display = "none", Kv.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(Qv("document.F=Object")), e.close(), e.F);
            for (var n = Km.length; n--;) delete Zv.prototype[Km[n]];
            return Zv()
        };
    km[Xv] = !0;
    var ey = Object.create || function(e, t) {
            var n;
            return null !== e ? (Jv.prototype = rm(e), n = new Jv, Jv.prototype = null, n[Xv] = e) : n = Zv(), void 0 === t ? n : Gv(n, t)
        },
        ty = yv("unscopables"),
        ny = Array.prototype;
    null == ny[ty] && om.f(ny, ty, {
        configurable: !0,
        value: ey(null)
    });
    var ry = function(e) {
            ny[ty][e] = !0
        },
        iy = Dv.find,
        oy = "find",
        ay = !0,
        sy = Hv(oy);
    oy in [] && Array(1).find((function() {
        ay = !1
    })), uv({
        target: "Array",
        proto: !0,
        forced: ay || !sy
    }, {
        find: function(e) {
            return iy(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), ry(oy);
    var cy = function(e) {
            var t = e.return;
            if (void 0 !== t) return rm(t.call(e)).value
        },
        uy = function(e, t, n, r) {
            try {
                return r ? t(rm(n)[0], n[1]) : t(n)
            } catch (t) {
                throw cy(e), t
            }
        },
        ly = {},
        fy = yv("iterator"),
        hy = Array.prototype,
        py = function(e) {
            return void 0 !== e && (ly.Array === e || hy[fy] === e)
        },
        dy = {};
    dy[yv("toStringTag")] = "z";
    var gy = "[object z]" === String(dy),
        my = yv("toStringTag"),
        vy = "Arguments" == Hg(function() {
            return arguments
        }()),
        yy = gy ? Hg : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), my)) ? n : vy ? Hg(t) : "Object" == (r = Hg(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        by = yv("iterator"),
        wy = function(e) {
            if (null != e) return e[by] || e["@@iterator"] || ly[yy(e)]
        },
        _y = function(e) {
            var t, n, r, i, o, a, s = fv(e),
                c = "function" == typeof this ? this : Array,
                u = arguments.length,
                l = u > 1 ? arguments[1] : void 0,
                f = void 0 !== l,
                h = wy(s),
                p = 0;
            if (f && (l = Nv(l, u > 2 ? arguments[2] : void 0, 2)), null == h || c == Array && py(h))
                for (n = new c(t = qm(s.length)); t > p; p++) a = f ? l(s[p], p) : s[p], hv(n, p, a);
            else
                for (o = (i = h.call(s)).next, n = new c; !(r = o.call(i)).done; p++) a = f ? uy(i, l, [r.value, p], !0) : r.value, hv(n, p, a);
            return n.length = p, n
        },
        Ey = yv("iterator"),
        ky = !1;
    try {
        var Sy = 0,
            Ty = {
                next: function() {
                    return {
                        done: !!Sy++
                    }
                },
                return: function() {
                    ky = !0
                }
            };
        Ty[Ey] = function() {
            return this
        }, Array.from(Ty, (function() {
            throw 2
        }))
    } catch (e) {}
    var xy = function(e, t) {
            if (!t && !ky) return !1;
            var n = !1;
            try {
                var r = {};
                r[Ey] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(r)
            } catch (e) {}
            return n
        },
        Ay = !xy((function(e) {
            Array.from(e)
        }));
    uv({
        target: "Array",
        stat: !0,
        forced: Ay
    }, {
        from: _y
    });
    var Oy = Ym.includes,
        Py = Hv("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    uv({
        target: "Array",
        proto: !0,
        forced: !Py
    }, {
        includes: function(e) {
            return Oy(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), ry("includes");
    var Cy, Iy, jy, Ry = !Ng((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        Ly = Em("IE_PROTO"),
        Ny = Object.prototype,
        My = Ry ? Object.getPrototypeOf : function(e) {
            return e = fv(e), Xg(e, Ly) ? e[Ly] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ny : null
        },
        Uy = yv("iterator"),
        Dy = !1;
    [].keys && ("next" in (jy = [].keys()) ? (Iy = My(My(jy))) !== Object.prototype && (Cy = Iy) : Dy = !0), null == Cy && (Cy = {}), Xg(Cy, Uy) || am(Cy, Uy, (function() {
        return this
    }));
    var Fy = {
            IteratorPrototype: Cy,
            BUGGY_SAFARI_ITERATORS: Dy
        },
        By = om.f,
        qy = yv("toStringTag"),
        Hy = function(e, t, n) {
            e && !Xg(e = n ? e : e.prototype, qy) && By(e, qy, {
                configurable: !0,
                value: t
            })
        },
        Vy = Fy.IteratorPrototype,
        Wy = function() {
            return this
        },
        zy = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = ey(Vy, {
                next: Bg(1, n)
            }), Hy(e, r, !1), ly[r] = Wy, e
        },
        Yy = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function(n, r) {
                return rm(n),
                    function(e) {
                        if (!$g(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(r), t ? e.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        $y = Fy.IteratorPrototype,
        Gy = Fy.BUGGY_SAFARI_ITERATORS,
        Ky = yv("iterator"),
        Xy = "keys",
        Jy = "values",
        Qy = "entries",
        Zy = function() {
            return this
        },
        eb = function(e, t, n, r, i, o, a) {
            zy(n, t, r);
            var s, c, u, l = function(e) {
                    if (e === i && g) return g;
                    if (!Gy && e in p) return p[e];
                    switch (e) {
                        case Xy:
                        case Jy:
                        case Qy:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                f = t + " Iterator",
                h = !1,
                p = e.prototype,
                d = p[Ky] || p["@@iterator"] || i && p[i],
                g = !Gy && d || l(i),
                m = "Array" == t && p.entries || d;
            if (m && (s = My(m.call(new e)), $y !== Object.prototype && s.next && (My(s) !== $y && (Yy ? Yy(s, $y) : "function" != typeof s[Ky] && am(s, Ky, Zy)), Hy(s, f, !0))), i == Jy && d && d.name !== Jy && (h = !0, g = function() {
                    return d.call(this)
                }), p[Ky] !== g && am(p, Ky, g), ly[t] = g, i)
                if (c = {
                        values: l(Jy),
                        keys: o ? g : l(Xy),
                        entries: l(Qy)
                    }, a)
                    for (u in c)(Gy || h || !(u in p)) && Rm(p, u, c[u]);
                else uv({
                    target: t,
                    proto: !0,
                    forced: Gy || h
                }, c);
            return c
        },
        tb = "Array Iterator",
        nb = jm.set,
        rb = jm.getterFor(tb),
        ib = eb(Array, "Array", (function(e, t) {
            nb(this, {
                type: tb,
                target: Yg(e),
                index: 0,
                kind: t
            })
        }), (function() {
            var e = rb(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }), "values");
    ly.Arguments = ly.Array, ry("keys"), ry("values"), ry("entries");
    var ob = function(e, t) {
            var n = [][e];
            return !!n && Ng((function() {
                n.call(null, t || function() {
                    throw 1
                }, 1)
            }))
        },
        ab = [].join,
        sb = Wg != Object,
        cb = ob("join", ",");
    uv({
        target: "Array",
        proto: !0,
        forced: sb || !cb
    }, {
        join: function(e) {
            return ab.call(Yg(this), void 0 === e ? "," : e)
        }
    });
    var ub = Dv.map,
        lb = Av("map"),
        fb = Hv("map");
    uv({
        target: "Array",
        proto: !0,
        forced: !lb || !fb
    }, {
        map: function(e) {
            return ub(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var hb = function(e, t, n) {
            var r, i;
            return Yy && "function" == typeof(r = t.constructor) && r !== n && $g(i = r.prototype) && i !== n.prototype && Yy(e, i), e
        },
        pb = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        db = "[" + pb + "]",
        gb = RegExp("^" + db + db + "*"),
        mb = RegExp(db + db + "*$"),
        vb = function(e) {
            return function(t) {
                var n = String(zg(t));
                return 1 & e && (n = n.replace(gb, "")), 2 & e && (n = n.replace(mb, "")), n
            }
        },
        yb = {
            start: vb(1),
            end: vb(2),
            trim: vb(3)
        },
        bb = Jm.f,
        wb = nm.f,
        _b = om.f,
        Eb = yb.trim,
        kb = "Number",
        Sb = Lg.Number,
        Tb = Sb.prototype,
        xb = Hg(ey(Tb)) == kb,
        Ab = function(e) {
            var t, n, r, i, o, a, s, c, u = Gg(e, !1);
            if ("string" == typeof u && u.length > 2)
                if (43 === (t = (u = Eb(u)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                switch (u.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, i = 55;
                        break;
                    default:
                        return +u
                }
                for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
                    if ((c = o.charCodeAt(s)) < 48 || c > i) return NaN;
                return parseInt(o, r)
            }
            return +u
        };
    if (sv(kb, !Sb(" 0o1") || !Sb("0b1") || Sb("+0x1"))) {
        for (var Ob, Pb = function(e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof Pb && (xb ? Ng((function() {
                    Tb.valueOf.call(n)
                })) : Hg(n) != kb) ? hb(new Sb(Ab(t)), n, Pb) : Ab(t)
            }, Cb = Mg ? bb(Sb) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Ib = 0; Cb.length > Ib; Ib++) Xg(Sb, Ob = Cb[Ib]) && !Xg(Pb, Ob) && _b(Pb, Ob, wb(Sb, Ob));
        Pb.prototype = Tb, Tb.constructor = Pb, Rm(Lg, kb, Pb)
    }
    var jb = Ng((function() {
        $v(1)
    }));
    uv({
        target: "Object",
        stat: !0,
        forced: jb
    }, {
        keys: function(e) {
            return $v(fv(e))
        }
    });
    var Rb = gy ? {}.toString : function() {
        return "[object " + yy(this) + "]"
    };
    gy || Rm(Object.prototype, "toString", Rb, {
        unsafe: !0
    });
    var Lb = function() {
        var e = rm(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    };

    function Nb(e, t) {
        return RegExp(e, t)
    }
    var Mb = {
            UNSUPPORTED_Y: Ng((function() {
                var e = Nb("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })),
            BROKEN_CARET: Ng((function() {
                var e = Nb("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        Ub = RegExp.prototype.exec,
        Db = String.prototype.replace,
        Fb = Ub,
        Bb = function() {
            var e = /a/,
                t = /b*/g;
            return Ub.call(e, "a"), Ub.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        }(),
        qb = Mb.UNSUPPORTED_Y || Mb.BROKEN_CARET,
        Hb = void 0 !== /()??/.exec("")[1];
    (Bb || Hb || qb) && (Fb = function(e) {
        var t, n, r, i, o = this,
            a = qb && o.sticky,
            s = Lb.call(o),
            c = o.source,
            u = 0,
            l = e;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), l = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (c = "(?: " + c + ")", l = " " + l, u++), n = new RegExp("^(?:" + c + ")", s)), Hb && (n = new RegExp("^" + c + "$(?!\\s)", s)), Bb && (t = o.lastIndex), r = Ub.call(a ? n : o, l), a ? r ? (r.input = r.input.slice(u), r[0] = r[0].slice(u), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : Bb && r && (o.lastIndex = o.global ? r.index + r[0].length : t), Hb && r && r.length > 1 && Db.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    });
    var Vb = Fb;
    uv({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Vb
    }, {
        exec: Vb
    });
    var Wb = "toString",
        zb = RegExp.prototype,
        Yb = zb.toString,
        $b = Ng((function() {
            return "/a/b" != Yb.call({
                source: "a",
                flags: "b"
            })
        })),
        Gb = Yb.name != Wb;
    ($b || Gb) && Rm(RegExp.prototype, Wb, (function() {
        var e = rm(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in zb) ? Lb.call(e) : n)
    }), {
        unsafe: !0
    });
    var Kb = yv("match"),
        Xb = function(e) {
            var t;
            return $g(e) && (void 0 !== (t = e[Kb]) ? !!t : "RegExp" == Hg(e))
        },
        Jb = function(e) {
            if (Xb(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        },
        Qb = yv("match"),
        Zb = function(e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[Qb] = !1, "/./" [e](t)
                } catch (e) {}
            }
            return !1
        };
    uv({
        target: "String",
        proto: !0,
        forced: !Zb("includes")
    }, {
        includes: function(e) {
            return !!~String(zg(this)).indexOf(Jb(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ew = function(e) {
            return function(t, n) {
                var r, i, o = String(zg(t)),
                    a = Fm(n),
                    s = o.length;
                return a < 0 || a >= s ? e ? "" : void 0 : (r = o.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : i - 56320 + (r - 55296 << 10) + 65536
            }
        },
        tw = {
            codeAt: ew(!1),
            charAt: ew(!0)
        },
        nw = tw.charAt,
        rw = "String Iterator",
        iw = jm.set,
        ow = jm.getterFor(rw);
    eb(String, "String", (function(e) {
        iw(this, {
            type: rw,
            string: String(e),
            index: 0
        })
    }), (function() {
        var e, t = ow(this),
            n = t.string,
            r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = nw(n, r), t.index += e.length, {
            value: e,
            done: !1
        })
    }));
    var aw = yv("species"),
        sw = !Ng((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        cw = "$0" === "a".replace(/./, "$0"),
        uw = yv("replace"),
        lw = !!/./ [uw] && "" === /./ [uw]("a", "$0"),
        fw = !Ng((function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        hw = function(e, t, n, r) {
            var i = yv(e),
                o = !Ng((function() {
                    var t = {};
                    return t[i] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                a = o && !Ng((function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[aw] = function() {
                        return n
                    }, n.flags = "", n[i] = /./ [i]), n.exec = function() {
                        return t = !0, null
                    }, n[i](""), !t
                }));
            if (!o || !a || "replace" === e && (!sw || !cw || lw) || "split" === e && !fw) {
                var s = /./ [i],
                    c = n(i, "" [e], (function(e, t, n, r, i) {
                        return t.exec === Vb ? o && !i ? {
                            done: !0,
                            value: s.call(t, n, r)
                        } : {
                            done: !0,
                            value: e.call(n, t, r)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: cw,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: lw
                    }),
                    u = c[0],
                    l = c[1];
                Rm(String.prototype, e, u), Rm(RegExp.prototype, i, 2 == t ? function(e, t) {
                    return l.call(e, this, t)
                } : function(e) {
                    return l.call(e, this)
                })
            }
            r && am(RegExp.prototype[i], "sham", !0)
        },
        pw = Object.is || function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        },
        dw = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var r = n.call(e, t);
                if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
                return r
            }
            if ("RegExp" !== Hg(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Vb.call(e, t)
        };
    hw("search", 1, (function(e, t, n) {
        return [function(t) {
            var n = zg(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = rm(e),
                o = String(this),
                a = i.lastIndex;
            pw(a, 0) || (i.lastIndex = 0);
            var s = dw(i, o);
            return pw(i.lastIndex, a) || (i.lastIndex = a), null === s ? -1 : s.index
        }]
    }));
    var gw = function(e, t, n) {
            for (var r in t) Rm(e, r, t[r], n);
            return e
        },
        mw = !Ng((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        vw = t((function(e) {
            var t = om.f,
                n = wm("meta"),
                r = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                o = function(e) {
                    t(e, n, {
                        value: {
                            objectID: "O" + ++r,
                            weakData: {}
                        }
                    })
                },
                a = e.exports = {
                    REQUIRED: !1,
                    fastKey: function(e, t) {
                        if (!$g(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!Xg(e, n)) {
                            if (!i(e)) return "F";
                            if (!t) return "E";
                            o(e)
                        }
                        return e[n].objectID
                    },
                    getWeakData: function(e, t) {
                        if (!Xg(e, n)) {
                            if (!i(e)) return !0;
                            if (!t) return !1;
                            o(e)
                        }
                        return e[n].weakData
                    },
                    onFreeze: function(e) {
                        return mw && a.REQUIRED && i(e) && !Xg(e, n) && o(e), e
                    }
                };
            km[n] = !0
        })),
        yw = (vw.REQUIRED, vw.fastKey, vw.getWeakData, vw.onFreeze, function(e, t) {
            this.stopped = e, this.result = t
        }),
        bw = function(e, t, n) {
            var r, i, o, a, s, c, u, l = n && n.that,
                f = !(!n || !n.AS_ENTRIES),
                h = !(!n || !n.IS_ITERATOR),
                p = !(!n || !n.INTERRUPTED),
                d = Nv(t, l, 1 + f + p),
                g = function(e) {
                    return r && cy(r), new yw(!0, e)
                },
                m = function(e) {
                    return f ? (rm(e), p ? d(e[0], e[1], g) : d(e[0], e[1])) : p ? d(e, g) : d(e)
                };
            if (h) r = e;
            else {
                if ("function" != typeof(i = wy(e))) throw TypeError("Target is not iterable");
                if (py(i)) {
                    for (o = 0, a = qm(e.length); a > o; o++)
                        if ((s = m(e[o])) && s instanceof yw) return s;
                    return new yw(!1)
                }
                r = i.call(e)
            }
            for (c = r.next; !(u = c.call(r)).done;) {
                try {
                    s = m(u.value)
                } catch (e) {
                    throw cy(r), e
                }
                if ("object" == typeof s && s && s instanceof yw) return s
            }
            return new yw(!1)
        },
        ww = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        },
        _w = vw.getWeakData,
        Ew = jm.set,
        kw = jm.getterFor,
        Sw = Dv.find,
        Tw = Dv.findIndex,
        xw = 0,
        Aw = function(e) {
            return e.frozen || (e.frozen = new Ow)
        },
        Ow = function() {
            this.entries = []
        },
        Pw = function(e, t) {
            return Sw(e.entries, (function(e) {
                return e[0] === t
            }))
        };
    Ow.prototype = {
        get: function(e) {
            var t = Pw(this, e);
            if (t) return t[1]
        },
        has: function(e) {
            return !!Pw(this, e)
        },
        set: function(e, t) {
            var n = Pw(this, e);
            n ? n[1] = t : this.entries.push([e, t])
        },
        delete: function(e) {
            var t = Tw(this.entries, (function(t) {
                return t[0] === e
            }));
            return ~t && this.entries.splice(t, 1), !!~t
        }
    };
    var Cw = {
            getConstructor: function(e, t, n, r) {
                var i = e((function(e, o) {
                        ww(e, i, t), Ew(e, {
                            type: t,
                            id: xw++,
                            frozen: void 0
                        }), null != o && bw(o, e[r], {
                            that: e,
                            AS_ENTRIES: n
                        })
                    })),
                    o = kw(t),
                    a = function(e, t, n) {
                        var r = o(e),
                            i = _w(rm(t), !0);
                        return !0 === i ? Aw(r).set(t, n) : i[r.id] = n, e
                    };
                return gw(i.prototype, {
                    delete: function(e) {
                        var t = o(this);
                        if (!$g(e)) return !1;
                        var n = _w(e);
                        return !0 === n ? Aw(t).delete(e) : n && Xg(n, t.id) && delete n[t.id]
                    },
                    has: function(e) {
                        var t = o(this);
                        if (!$g(e)) return !1;
                        var n = _w(e);
                        return !0 === n ? Aw(t).has(e) : n && Xg(n, t.id)
                    }
                }), gw(i.prototype, n ? {
                    get: function(e) {
                        var t = o(this);
                        if ($g(e)) {
                            var n = _w(e);
                            return !0 === n ? Aw(t).get(e) : n ? n[t.id] : void 0
                        }
                    },
                    set: function(e, t) {
                        return a(this, e, t)
                    }
                } : {
                    add: function(e) {
                        return a(this, e, !0)
                    }
                }), i
            }
        },
        Iw = (t((function(e) {
            var t, n = jm.enforce,
                r = !Lg.ActiveXObject && "ActiveXObject" in Lg,
                i = Object.isExtensible,
                o = function(e) {
                    return function() {
                        return e(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                a = e.exports = function(e, t, n) {
                    var r = -1 !== e.indexOf("Map"),
                        i = -1 !== e.indexOf("Weak"),
                        o = r ? "set" : "add",
                        a = Lg[e],
                        s = a && a.prototype,
                        c = a,
                        u = {},
                        l = function(e) {
                            var t = s[e];
                            Rm(s, e, "add" == e ? function(e) {
                                return t.call(this, 0 === e ? 0 : e), this
                            } : "delete" == e ? function(e) {
                                return !(i && !$g(e)) && t.call(this, 0 === e ? 0 : e)
                            } : "get" == e ? function(e) {
                                return i && !$g(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                            } : "has" == e ? function(e) {
                                return !(i && !$g(e)) && t.call(this, 0 === e ? 0 : e)
                            } : function(e, n) {
                                return t.call(this, 0 === e ? 0 : e, n), this
                            })
                        };
                    if (sv(e, "function" != typeof a || !(i || s.forEach && !Ng((function() {
                            (new a).entries().next()
                        }))))) c = n.getConstructor(t, e, r, o), vw.REQUIRED = !0;
                    else if (sv(e, !0)) {
                        var f = new c,
                            h = f[o](i ? {} : -0, 1) != f,
                            p = Ng((function() {
                                f.has(1)
                            })),
                            d = xy((function(e) {
                                new a(e)
                            })),
                            g = !i && Ng((function() {
                                for (var e = new a, t = 5; t--;) e[o](t, t);
                                return !e.has(-0)
                            }));
                        d || ((c = t((function(t, n) {
                            ww(t, c, e);
                            var i = hb(new a, t, c);
                            return null != n && bw(n, i[o], {
                                that: i,
                                AS_ENTRIES: r
                            }), i
                        }))).prototype = s, s.constructor = c), (p || g) && (l("delete"), l("has"), r && l("get")), (g || h) && l(o), i && s.clear && delete s.clear
                    }
                    return u[e] = c, uv({
                        global: !0,
                        forced: c != a
                    }, u), Hy(c, e), i || n.setStrong(c, e, r), c
                }("WeakMap", o, Cw);
            if (mm && r) {
                t = Cw.getConstructor(o, "WeakMap", !0), vw.REQUIRED = !0;
                var s = a.prototype,
                    c = s.delete,
                    u = s.has,
                    l = s.get,
                    f = s.set;
                gw(s, {
                    delete: function(e) {
                        if ($g(e) && !i(e)) {
                            var r = n(this);
                            return r.frozen || (r.frozen = new t), c.call(this, e) || r.frozen.delete(e)
                        }
                        return c.call(this, e)
                    },
                    has: function(e) {
                        if ($g(e) && !i(e)) {
                            var r = n(this);
                            return r.frozen || (r.frozen = new t), u.call(this, e) || r.frozen.has(e)
                        }
                        return u.call(this, e)
                    },
                    get: function(e) {
                        if ($g(e) && !i(e)) {
                            var r = n(this);
                            return r.frozen || (r.frozen = new t), u.call(this, e) ? l.call(this, e) : r.frozen.get(e)
                        }
                        return l.call(this, e)
                    },
                    set: function(e, r) {
                        if ($g(e) && !i(e)) {
                            var o = n(this);
                            o.frozen || (o.frozen = new t), u.call(this, e) ? f.call(this, e, r) : o.frozen.set(e, r)
                        } else f.call(this, e, r);
                        return this
                    }
                })
            }
        })), {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }),
        jw = yv("iterator"),
        Rw = yv("toStringTag"),
        Lw = ib.values;
    for (var Nw in Iw) {
        var Mw = Lg[Nw],
            Uw = Mw && Mw.prototype;
        if (Uw) {
            if (Uw[jw] !== Lw) try {
                am(Uw, jw, Lw)
            } catch (e) {
                Uw[jw] = Lw
            }
            if (Uw[Rw] || am(Uw, Rw, Nw), Iw[Nw])
                for (var Dw in ib)
                    if (Uw[Dw] !== ib[Dw]) try {
                        am(Uw, Dw, ib[Dw])
                    } catch (e) {
                        Uw[Dw] = ib[Dw]
                    }
        }
    }
    var Fw = Dv.every,
        Bw = ob("every"),
        qw = Hv("every");
    uv({
        target: "Array",
        proto: !0,
        forced: !Bw || !qw
    }, {
        every: function(e) {
            return Fw(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Hw = Dv.forEach,
        Vw = ob("forEach"),
        Ww = Hv("forEach"),
        zw = Vw && Ww ? [].forEach : function(e) {
            return Hw(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    uv({
        target: "Array",
        proto: !0,
        forced: [].forEach != zw
    }, {
        forEach: zw
    });
    var Yw = Ym.indexOf,
        $w = [].indexOf,
        Gw = !!$w && 1 / [1].indexOf(1, -0) < 0,
        Kw = ob("indexOf"),
        Xw = Hv("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    uv({
        target: "Array",
        proto: !0,
        forced: Gw || !Kw || !Xw
    }, {
        indexOf: function(e) {
            return Gw ? $w.apply(this, arguments) || 0 : Yw(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Jw = Object.assign,
        Qw = Object.defineProperty,
        Zw = !Jw || Ng((function() {
            if (Mg && 1 !== Jw({
                    b: 1
                }, Jw(Qw({}, "a", {
                    enumerable: !0,
                    get: function() {
                        Qw(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach((function(e) {
                t[e] = e
            })), 7 != Jw({}, e)[n] || $v(Jw({}, t)).join("") != r
        })) ? function(e, t) {
            for (var n = fv(e), r = arguments.length, i = 1, o = Qm.f, a = Fg.f; r > i;)
                for (var s, c = Wg(arguments[i++]), u = o ? $v(c).concat(o(c)) : $v(c), l = u.length, f = 0; l > f;) s = u[f++], Mg && !a.call(c, s) || (n[s] = c[s]);
            return n
        } : Jw;
    uv({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Zw
    }, {
        assign: Zw
    });
    var e_ = yv("species"),
        t_ = function(e, t) {
            var n, r = rm(e).constructor;
            return void 0 === r || null == (n = rm(r)[e_]) ? t : Lv(n)
        },
        n_ = tw.charAt,
        r_ = function(e, t, n) {
            return t + (n ? n_(e, t).length : 1)
        },
        i_ = [].push,
        o_ = Math.min,
        a_ = 4294967295,
        s_ = !Ng((function() {
            return !RegExp(a_, "y")
        }));
    hw("split", 2, (function(e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var r = String(zg(this)),
                i = void 0 === n ? a_ : n >>> 0;
            if (0 === i) return [];
            if (void 0 === e) return [r];
            if (!Xb(e)) return t.call(r, e, i);
            for (var o, a, s, c = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, f = new RegExp(e.source, u + "g");
                (o = Vb.call(f, r)) && !((a = f.lastIndex) > l && (c.push(r.slice(l, o.index)), o.length > 1 && o.index < r.length && i_.apply(c, o.slice(1)), s = o[0].length, l = a, c.length >= i));) f.lastIndex === o.index && f.lastIndex++;
            return l === r.length ? !s && f.test("") || c.push("") : c.push(r.slice(l)), c.length > i ? c.slice(0, i) : c
        } : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function(t, n) {
            var i = zg(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }, function(e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done) return o.value;
            var a = rm(e),
                s = String(this),
                c = t_(a, RegExp),
                u = a.unicode,
                l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (s_ ? "y" : "g"),
                f = new c(s_ ? a : "^(?:" + a.source + ")", l),
                h = void 0 === i ? a_ : i >>> 0;
            if (0 === h) return [];
            if (0 === s.length) return null === dw(f, s) ? [s] : [];
            for (var p = 0, d = 0, g = []; d < s.length;) {
                f.lastIndex = s_ ? d : 0;
                var m, v = dw(f, s_ ? s : s.slice(d));
                if (null === v || (m = o_(qm(f.lastIndex + (s_ ? 0 : d)), s.length)) === p) d = r_(s, d, u);
                else {
                    if (g.push(s.slice(p, d)), g.length === h) return g;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]), g.length === h) return g;
                    d = p = m
                }
            }
            return g.push(s.slice(p)), g
        }]
    }), !s_);
    var c_ = yb.trim;
    for (var u_ in uv({
            target: "String",
            proto: !0,
            forced: function(e) {
                return Ng((function() {
                    return !!pb[e]() || "​᠎" != "​᠎" [e]() || pb[e].name !== e
                }))
            }("trim")
        }, {
            trim: function() {
                return c_(this)
            }
        }), Iw) {
        var l_ = Lg[u_],
            f_ = l_ && l_.prototype;
        if (f_ && f_.forEach !== zw) try {
            am(f_, "forEach", zw)
        } catch (e) {
            f_.forEach = zw
        }
    }
    var h_ = yv("iterator"),
        p_ = !Ng((function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"),
                t = e.searchParams,
                n = "";
            return e.pathname = "c%20d", t.forEach((function(e, r) {
                t.delete("b"), n += r + e
            })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[h_] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        })),
        d_ = 2147483647,
        g_ = /[^\0-\u007E]/,
        m_ = /[.\u3002\uFF0E\uFF61]/g,
        v_ = "Overflow: input needs wider integers to process",
        y_ = Math.floor,
        b_ = String.fromCharCode,
        w_ = function(e) {
            return e + 22 + 75 * (e < 26)
        },
        __ = function(e, t, n) {
            var r = 0;
            for (e = n ? y_(e / 700) : e >> 1, e += y_(e / t); e > 455; r += 36) e = y_(e / 35);
            return y_(r + 36 * e / (e + 38))
        },
        E_ = function(e) {
            var t, n, r = [],
                i = (e = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var i = e.charCodeAt(n++);
                        if (i >= 55296 && i <= 56319 && n < r) {
                            var o = e.charCodeAt(n++);
                            56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--)
                        } else t.push(i)
                    }
                    return t
                }(e)).length,
                o = 128,
                a = 0,
                s = 72;
            for (t = 0; t < e.length; t++)(n = e[t]) < 128 && r.push(b_(n));
            var c = r.length,
                u = c;
            for (c && r.push("-"); u < i;) {
                var l = d_;
                for (t = 0; t < e.length; t++)(n = e[t]) >= o && n < l && (l = n);
                var f = u + 1;
                if (l - o > y_((d_ - a) / f)) throw RangeError(v_);
                for (a += (l - o) * f, o = l, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < o && ++a > d_) throw RangeError(v_);
                    if (n == o) {
                        for (var h = a, p = 36;; p += 36) {
                            var d = p <= s ? 1 : p >= s + 26 ? 26 : p - s;
                            if (h < d) break;
                            var g = h - d,
                                m = 36 - d;
                            r.push(b_(w_(d + g % m))), h = y_(g / m)
                        }
                        r.push(b_(w_(h))), s = __(a, f, u == c), a = 0, ++u
                    }
                }++a, ++o
            }
            return r.join("")
        },
        k_ = function(e) {
            var t = wy(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return rm(t.call(e))
        },
        S_ = Mm("fetch"),
        T_ = Mm("Headers"),
        x_ = yv("iterator"),
        A_ = "URLSearchParams",
        O_ = "URLSearchParamsIterator",
        P_ = jm.set,
        C_ = jm.getterFor(A_),
        I_ = jm.getterFor(O_),
        j_ = /\+/g,
        R_ = Array(4),
        L_ = function(e) {
            return R_[e - 1] || (R_[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        },
        N_ = function(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        },
        M_ = function(e) {
            var t = e.replace(j_, " "),
                n = 4;
            try {
                return decodeURIComponent(t)
            } catch (e) {
                for (; n;) t = t.replace(L_(n--), N_);
                return t
            }
        },
        U_ = /[!'()~]|%20/g,
        D_ = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        F_ = function(e) {
            return D_[e]
        },
        B_ = function(e) {
            return encodeURIComponent(e).replace(U_, F_)
        },
        q_ = function(e, t) {
            if (t)
                for (var n, r, i = t.split("&"), o = 0; o < i.length;)(n = i[o++]).length && (r = n.split("="), e.push({
                    key: M_(r.shift()),
                    value: M_(r.join("="))
                }))
        },
        H_ = function(e) {
            this.entries.length = 0, q_(this.entries, e)
        },
        V_ = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments")
        },
        W_ = zy((function(e, t) {
            P_(this, {
                type: O_,
                iterator: k_(C_(e).entries),
                kind: t
            })
        }), "Iterator", (function() {
            var e = I_(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
        })),
        z_ = function() {
            ww(this, z_, A_);
            var e, t, n, r, i, o, a, s, c, u = arguments.length > 0 ? arguments[0] : void 0,
                l = this,
                f = [];
            if (P_(l, {
                    type: A_,
                    entries: f,
                    updateURL: function() {},
                    updateSearchParams: H_
                }), void 0 !== u)
                if ($g(u))
                    if ("function" == typeof(e = wy(u)))
                        for (n = (t = e.call(u)).next; !(r = n.call(t)).done;) {
                            if ((a = (o = (i = k_(rm(r.value))).next).call(i)).done || (s = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                            f.push({
                                key: a.value + "",
                                value: s.value + ""
                            })
                        } else
                            for (c in u) Xg(u, c) && f.push({
                                key: c,
                                value: u[c] + ""
                            });
                    else q_(f, "string" == typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
        },
        Y_ = z_.prototype;
    gw(Y_, {
        append: function(e, t) {
            V_(arguments.length, 2);
            var n = C_(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }), n.updateURL()
        },
        delete: function(e) {
            V_(arguments.length, 1);
            for (var t = C_(this), n = t.entries, r = e + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
            t.updateURL()
        },
        get: function(e) {
            V_(arguments.length, 1);
            for (var t = C_(this).entries, n = e + "", r = 0; r < t.length; r++)
                if (t[r].key === n) return t[r].value;
            return null
        },
        getAll: function(e) {
            V_(arguments.length, 1);
            for (var t = C_(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
            return r
        },
        has: function(e) {
            V_(arguments.length, 1);
            for (var t = C_(this).entries, n = e + "", r = 0; r < t.length;)
                if (t[r++].key === n) return !0;
            return !1
        },
        set: function(e, t) {
            V_(arguments.length, 1);
            for (var n, r = C_(this), i = r.entries, o = !1, a = e + "", s = t + "", c = 0; c < i.length; c++)(n = i[c]).key === a && (o ? i.splice(c--, 1) : (o = !0, n.value = s));
            o || i.push({
                key: a,
                value: s
            }), r.updateURL()
        },
        sort: function() {
            var e, t, n, r = C_(this),
                i = r.entries,
                o = i.slice();
            for (i.length = 0, n = 0; n < o.length; n++) {
                for (e = o[n], t = 0; t < n; t++)
                    if (i[t].key > e.key) {
                        i.splice(t, 0, e);
                        break
                    } t === n && i.push(e)
            }
            r.updateURL()
        },
        forEach: function(e) {
            for (var t, n = C_(this).entries, r = Nv(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
        },
        keys: function() {
            return new W_(this, "keys")
        },
        values: function() {
            return new W_(this, "values")
        },
        entries: function() {
            return new W_(this, "entries")
        }
    }, {
        enumerable: !0
    }), Rm(Y_, x_, Y_.entries), Rm(Y_, "toString", (function() {
        for (var e, t = C_(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(B_(e.key) + "=" + B_(e.value));
        return n.join("&")
    }), {
        enumerable: !0
    }), Hy(z_, A_), uv({
        global: !0,
        forced: !p_
    }, {
        URLSearchParams: z_
    }), p_ || "function" != typeof S_ || "function" != typeof T_ || uv({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            var t, n, r, i = [e];
            return arguments.length > 1 && ($g(t = arguments[1]) && (n = t.body, yy(n) === A_ && ((r = t.headers ? new T_(t.headers) : new T_).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = ey(t, {
                body: Bg(0, String(n)),
                headers: Bg(0, r)
            }))), i.push(t)), S_.apply(this, i)
        }
    });
    var $_, G_ = {
            URLSearchParams: z_,
            getState: C_
        },
        K_ = tw.codeAt,
        X_ = Lg.URL,
        J_ = G_.URLSearchParams,
        Q_ = G_.getState,
        Z_ = jm.set,
        eE = jm.getterFor("URL"),
        tE = Math.floor,
        nE = Math.pow,
        rE = "Invalid scheme",
        iE = "Invalid host",
        oE = "Invalid port",
        aE = /[A-Za-z]/,
        sE = /[\d+-.A-Za-z]/,
        cE = /\d/,
        uE = /^(0x|0X)/,
        lE = /^[0-7]+$/,
        fE = /^\d+$/,
        hE = /^[\dA-Fa-f]+$/,
        pE = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        dE = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        gE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        mE = /[\u0009\u000A\u000D]/g,
        vE = function(e, t) {
            var n, r, i;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return iE;
                if (!(n = bE(t.slice(1, -1)))) return iE;
                e.host = n
            } else if (AE(e)) {
                if (t = function(e) {
                        var t, n, r = [],
                            i = e.toLowerCase().replace(m_, ".").split(".");
                        for (t = 0; t < i.length; t++) n = i[t], r.push(g_.test(n) ? "xn--" + E_(n) : n);
                        return r.join(".")
                    }(t), pE.test(t)) return iE;
                if (null === (n = yE(t))) return iE;
                e.host = n
            } else {
                if (dE.test(t)) return iE;
                for (n = "", r = _y(t), i = 0; i < r.length; i++) n += TE(r[i], _E);
                e.host = n
            }
        },
        yE = function(e) {
            var t, n, r, i, o, a, s, c = e.split(".");
            if (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4) return e;
            for (n = [], r = 0; r < t; r++) {
                if ("" == (i = c[r])) return e;
                if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = uE.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0;
                else {
                    if (!(10 == o ? fE : 8 == o ? lE : hE).test(i)) return e;
                    a = parseInt(i, o)
                }
                n.push(a)
            }
            for (r = 0; r < t; r++)
                if (a = n[r], r == t - 1) {
                    if (a >= nE(256, 5 - t)) return null
                } else if (a > 255) return null;
            for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * nE(256, 3 - r);
            return s
        },
        bE = function(e) {
            var t, n, r, i, o, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0],
                u = 0,
                l = null,
                f = 0,
                h = function() {
                    return e.charAt(f)
                };
            if (":" == h()) {
                if (":" != e.charAt(1)) return;
                f += 2, l = ++u
            }
            for (; h();) {
                if (8 == u) return;
                if (":" != h()) {
                    for (t = n = 0; n < 4 && hE.test(h());) t = 16 * t + parseInt(h(), 16), f++, n++;
                    if ("." == h()) {
                        if (0 == n) return;
                        if (f -= n, u > 6) return;
                        for (r = 0; h();) {
                            if (i = null, r > 0) {
                                if (!("." == h() && r < 4)) return;
                                f++
                            }
                            if (!cE.test(h())) return;
                            for (; cE.test(h());) {
                                if (o = parseInt(h(), 10), null === i) i = o;
                                else {
                                    if (0 == i) return;
                                    i = 10 * i + o
                                }
                                if (i > 255) return;
                                f++
                            }
                            c[u] = 256 * c[u] + i, 2 != ++r && 4 != r || u++
                        }
                        if (4 != r) return;
                        break
                    }
                    if (":" == h()) {
                        if (f++, !h()) return
                    } else if (h()) return;
                    c[u++] = t
                } else {
                    if (null !== l) return;
                    f++, l = ++u
                }
            }
            if (null !== l)
                for (a = u - l, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s;
            else if (8 != u) return;
            return c
        },
        wE = function(e) {
            var t, n, r, i;
            if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = tE(e / 256);
                return t.join(".")
            }
            if ("object" == typeof e) {
                for (t = "", r = function(e) {
                        for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                        return i > n && (t = r, n = i), t
                    }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                return "[" + t + "]"
            }
            return e
        },
        _E = {},
        EE = Zw({}, _E, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        kE = Zw({}, EE, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        SE = Zw({}, kE, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        TE = function(e, t) {
            var n = K_(e, 0);
            return n > 32 && n < 127 && !Xg(t, e) ? e : encodeURIComponent(e)
        },
        xE = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        AE = function(e) {
            return Xg(xE, e.scheme)
        },
        OE = function(e) {
            return "" != e.username || "" != e.password
        },
        PE = function(e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
        },
        CE = function(e, t) {
            var n;
            return 2 == e.length && aE.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
        },
        IE = function(e) {
            var t;
            return e.length > 1 && CE(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
        },
        jE = function(e) {
            var t = e.path,
                n = t.length;
            !n || "file" == e.scheme && 1 == n && CE(t[0], !0) || t.pop()
        },
        RE = function(e) {
            return "." === e || "%2e" === e.toLowerCase()
        },
        LE = {},
        NE = {},
        ME = {},
        UE = {},
        DE = {},
        FE = {},
        BE = {},
        qE = {},
        HE = {},
        VE = {},
        WE = {},
        zE = {},
        YE = {},
        $E = {},
        GE = {},
        KE = {},
        XE = {},
        JE = {},
        QE = {},
        ZE = {},
        ek = {},
        tk = function(e, t, n, r) {
            var i, o, a, s, c, u = n || LE,
                l = 0,
                f = "",
                h = !1,
                p = !1,
                d = !1;
            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(gE, "")), t = t.replace(mE, ""), i = _y(t); l <= i.length;) {
                switch (o = i[l], u) {
                    case LE:
                        if (!o || !aE.test(o)) {
                            if (n) return rE;
                            u = ME;
                            continue
                        }
                        f += o.toLowerCase(), u = NE;
                        break;
                    case NE:
                        if (o && (sE.test(o) || "+" == o || "-" == o || "." == o)) f += o.toLowerCase();
                        else {
                            if (":" != o) {
                                if (n) return rE;
                                f = "", u = ME, l = 0;
                                continue
                            }
                            if (n && (AE(e) != Xg(xE, f) || "file" == f && (OE(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                            if (e.scheme = f, n) return void(AE(e) && xE[e.scheme] == e.port && (e.port = null));
                            f = "", "file" == e.scheme ? u = $E : AE(e) && r && r.scheme == e.scheme ? u = UE : AE(e) ? u = qE : "/" == i[l + 1] ? (u = DE, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), u = QE)
                        }
                        break;
                    case ME:
                        if (!r || r.cannotBeABaseURL && "#" != o) return rE;
                        if (r.cannotBeABaseURL && "#" == o) {
                            e.scheme = r.scheme, e.path = r.path.slice(), e.query = r.query, e.fragment = "", e.cannotBeABaseURL = !0, u = ek;
                            break
                        }
                        u = "file" == r.scheme ? $E : FE;
                        continue;
                    case UE:
                        if ("/" != o || "/" != i[l + 1]) {
                            u = FE;
                            continue
                        }
                        u = HE, l++;
                        break;
                    case DE:
                        if ("/" == o) {
                            u = VE;
                            break
                        }
                        u = JE;
                        continue;
                    case FE:
                        if (e.scheme = r.scheme, o == $_) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query;
                        else if ("/" == o || "\\" == o && AE(e)) u = BE;
                        else if ("?" == o) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = "", u = ZE;
                        else {
                            if ("#" != o) {
                                e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.path.pop(), u = JE;
                                continue
                            }
                            e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query, e.fragment = "", u = ek
                        }
                        break;
                    case BE:
                        if (!AE(e) || "/" != o && "\\" != o) {
                            if ("/" != o) {
                                e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, u = JE;
                                continue
                            }
                            u = VE
                        } else u = HE;
                        break;
                    case qE:
                        if (u = HE, "/" != o || "/" != f.charAt(l + 1)) continue;
                        l++;
                        break;
                    case HE:
                        if ("/" != o && "\\" != o) {
                            u = VE;
                            continue
                        }
                        break;
                    case VE:
                        if ("@" == o) {
                            h && (f = "%40" + f), h = !0, a = _y(f);
                            for (var g = 0; g < a.length; g++) {
                                var m = a[g];
                                if (":" != m || d) {
                                    var v = TE(m, SE);
                                    d ? e.password += v : e.username += v
                                } else d = !0
                            }
                            f = ""
                        } else if (o == $_ || "/" == o || "?" == o || "#" == o || "\\" == o && AE(e)) {
                            if (h && "" == f) return "Invalid authority";
                            l -= _y(f).length + 1, f = "", u = WE
                        } else f += o;
                        break;
                    case WE:
                    case zE:
                        if (n && "file" == e.scheme) {
                            u = KE;
                            continue
                        }
                        if (":" != o || p) {
                            if (o == $_ || "/" == o || "?" == o || "#" == o || "\\" == o && AE(e)) {
                                if (AE(e) && "" == f) return iE;
                                if (n && "" == f && (OE(e) || null !== e.port)) return;
                                if (s = vE(e, f)) return s;
                                if (f = "", u = XE, n) return;
                                continue
                            }
                            "[" == o ? p = !0 : "]" == o && (p = !1), f += o
                        } else {
                            if ("" == f) return iE;
                            if (s = vE(e, f)) return s;
                            if (f = "", u = YE, n == zE) return
                        }
                        break;
                    case YE:
                        if (!cE.test(o)) {
                            if (o == $_ || "/" == o || "?" == o || "#" == o || "\\" == o && AE(e) || n) {
                                if ("" != f) {
                                    var y = parseInt(f, 10);
                                    if (y > 65535) return oE;
                                    e.port = AE(e) && y === xE[e.scheme] ? null : y, f = ""
                                }
                                if (n) return;
                                u = XE;
                                continue
                            }
                            return oE
                        }
                        f += o;
                        break;
                    case $E:
                        if (e.scheme = "file", "/" == o || "\\" == o) u = GE;
                        else {
                            if (!r || "file" != r.scheme) {
                                u = JE;
                                continue
                            }
                            if (o == $_) e.host = r.host, e.path = r.path.slice(), e.query = r.query;
                            else if ("?" == o) e.host = r.host, e.path = r.path.slice(), e.query = "", u = ZE;
                            else {
                                if ("#" != o) {
                                    IE(i.slice(l).join("")) || (e.host = r.host, e.path = r.path.slice(), jE(e)), u = JE;
                                    continue
                                }
                                e.host = r.host, e.path = r.path.slice(), e.query = r.query, e.fragment = "", u = ek
                            }
                        }
                        break;
                    case GE:
                        if ("/" == o || "\\" == o) {
                            u = KE;
                            break
                        }
                        r && "file" == r.scheme && !IE(i.slice(l).join("")) && (CE(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host), u = JE;
                        continue;
                    case KE:
                        if (o == $_ || "/" == o || "\\" == o || "?" == o || "#" == o) {
                            if (!n && CE(f)) u = JE;
                            else if ("" == f) {
                                if (e.host = "", n) return;
                                u = XE
                            } else {
                                if (s = vE(e, f)) return s;
                                if ("localhost" == e.host && (e.host = ""), n) return;
                                f = "", u = XE
                            }
                            continue
                        }
                        f += o;
                        break;
                    case XE:
                        if (AE(e)) {
                            if (u = JE, "/" != o && "\\" != o) continue
                        } else if (n || "?" != o)
                            if (n || "#" != o) {
                                if (o != $_ && (u = JE, "/" != o)) continue
                            } else e.fragment = "", u = ek;
                        else e.query = "", u = ZE;
                        break;
                    case JE:
                        if (o == $_ || "/" == o || "\\" == o && AE(e) || !n && ("?" == o || "#" == o)) {
                            if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (jE(e), "/" == o || "\\" == o && AE(e) || e.path.push("")) : RE(f) ? "/" == o || "\\" == o && AE(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && CE(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (o == $_ || "?" == o || "#" == o))
                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                            "?" == o ? (e.query = "", u = ZE) : "#" == o && (e.fragment = "", u = ek)
                        } else f += TE(o, kE);
                        break;
                    case QE:
                        "?" == o ? (e.query = "", u = ZE) : "#" == o ? (e.fragment = "", u = ek) : o != $_ && (e.path[0] += TE(o, _E));
                        break;
                    case ZE:
                        n || "#" != o ? o != $_ && ("'" == o && AE(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : TE(o, _E)) : (e.fragment = "", u = ek);
                        break;
                    case ek:
                        o != $_ && (e.fragment += TE(o, EE))
                }
                l++
            }
        },
        nk = function(e) {
            var t, n, r = ww(this, nk, "URL"),
                i = arguments.length > 1 ? arguments[1] : void 0,
                o = String(e),
                a = Z_(r, {
                    type: "URL"
                });
            if (void 0 !== i)
                if (i instanceof nk) t = eE(i);
                else if (n = tk(t = {}, String(i))) throw TypeError(n);
            if (n = tk(a, o, null, t)) throw TypeError(n);
            var s = a.searchParams = new J_,
                c = Q_(s);
            c.updateSearchParams(a.query), c.updateURL = function() {
                a.query = String(s) || null
            }, Mg || (r.href = ik.call(r), r.origin = ok.call(r), r.protocol = ak.call(r), r.username = sk.call(r), r.password = ck.call(r), r.host = uk.call(r), r.hostname = lk.call(r), r.port = fk.call(r), r.pathname = hk.call(r), r.search = pk.call(r), r.searchParams = dk.call(r), r.hash = gk.call(r))
        },
        rk = nk.prototype,
        ik = function() {
            var e = eE(this),
                t = e.scheme,
                n = e.username,
                r = e.password,
                i = e.host,
                o = e.port,
                a = e.path,
                s = e.query,
                c = e.fragment,
                u = t + ":";
            return null !== i ? (u += "//", OE(e) && (u += n + (r ? ":" + r : "") + "@"), u += wE(i), null !== o && (u += ":" + o)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
        },
        ok = function() {
            var e = eE(this),
                t = e.scheme,
                n = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
            return "file" != t && AE(e) ? t + "://" + wE(e.host) + (null !== n ? ":" + n : "") : "null"
        },
        ak = function() {
            return eE(this).scheme + ":"
        },
        sk = function() {
            return eE(this).username
        },
        ck = function() {
            return eE(this).password
        },
        uk = function() {
            var e = eE(this),
                t = e.host,
                n = e.port;
            return null === t ? "" : null === n ? wE(t) : wE(t) + ":" + n
        },
        lk = function() {
            var e = eE(this).host;
            return null === e ? "" : wE(e)
        },
        fk = function() {
            var e = eE(this).port;
            return null === e ? "" : String(e)
        },
        hk = function() {
            var e = eE(this),
                t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        },
        pk = function() {
            var e = eE(this).query;
            return e ? "?" + e : ""
        },
        dk = function() {
            return eE(this).searchParams
        },
        gk = function() {
            var e = eE(this).fragment;
            return e ? "#" + e : ""
        },
        mk = function(e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            }
        };
    if (Mg && Gv(rk, {
            href: mk(ik, (function(e) {
                var t = eE(this),
                    n = String(e),
                    r = tk(t, n);
                if (r) throw TypeError(r);
                Q_(t.searchParams).updateSearchParams(t.query)
            })),
            origin: mk(ok),
            protocol: mk(ak, (function(e) {
                var t = eE(this);
                tk(t, String(e) + ":", LE)
            })),
            username: mk(sk, (function(e) {
                var t = eE(this),
                    n = _y(String(e));
                if (!PE(t)) {
                    t.username = "";
                    for (var r = 0; r < n.length; r++) t.username += TE(n[r], SE)
                }
            })),
            password: mk(ck, (function(e) {
                var t = eE(this),
                    n = _y(String(e));
                if (!PE(t)) {
                    t.password = "";
                    for (var r = 0; r < n.length; r++) t.password += TE(n[r], SE)
                }
            })),
            host: mk(uk, (function(e) {
                var t = eE(this);
                t.cannotBeABaseURL || tk(t, String(e), WE)
            })),
            hostname: mk(lk, (function(e) {
                var t = eE(this);
                t.cannotBeABaseURL || tk(t, String(e), zE)
            })),
            port: mk(fk, (function(e) {
                var t = eE(this);
                PE(t) || ("" == (e = String(e)) ? t.port = null : tk(t, e, YE))
            })),
            pathname: mk(hk, (function(e) {
                var t = eE(this);
                t.cannotBeABaseURL || (t.path = [], tk(t, e + "", XE))
            })),
            search: mk(pk, (function(e) {
                var t = eE(this);
                "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", tk(t, e, ZE)), Q_(t.searchParams).updateSearchParams(t.query)
            })),
            searchParams: mk(dk),
            hash: mk(gk, (function(e) {
                var t = eE(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", tk(t, e, ek)) : t.fragment = null
            }))
        }), Rm(rk, "toJSON", (function() {
            return ik.call(this)
        }), {
            enumerable: !0
        }), Rm(rk, "toString", (function() {
            return ik.call(this)
        }), {
            enumerable: !0
        }), X_) {
        var vk = X_.createObjectURL,
            yk = X_.revokeObjectURL;
        vk && Rm(nk, "createObjectURL", (function(e) {
            return vk.apply(X_, arguments)
        })), yk && Rm(nk, "revokeObjectURL", (function(e) {
            return yk.apply(X_, arguments)
        }))
    }
    Hy(nk, "URL"), uv({
        global: !0,
        forced: !p_,
        sham: !Mg
    }, {
        URL: nk
    });
    var bk = Dv.some,
        wk = ob("some"),
        _k = Hv("some");
    uv({
        target: "Array",
        proto: !0,
        forced: !wk || !_k
    }, {
        some: function(e) {
            return bk(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ek = "".repeat || function(e) {
            var t = String(zg(this)),
                n = "",
                r = Fm(e);
            if (r < 0 || r == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; r > 0;
                (r >>>= 1) && (t += t)) 1 & r && (n += t);
            return n
        },
        kk = 1..toFixed,
        Sk = Math.floor,
        Tk = function(e, t, n) {
            return 0 === t ? n : t % 2 == 1 ? Tk(e, t - 1, n * e) : Tk(e * e, t / 2, n)
        },
        xk = kk && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !Ng((function() {
            kk.call({})
        }));
    uv({
        target: "Number",
        proto: !0,
        forced: xk
    }, {
        toFixed: function(e) {
            var t, n, r, i, o = function(e) {
                    if ("number" != typeof e && "Number" != Hg(e)) throw TypeError("Incorrect invocation");
                    return +e
                }(this),
                a = Fm(e),
                s = [0, 0, 0, 0, 0, 0],
                c = "",
                u = "0",
                l = function(e, t) {
                    for (var n = -1, r = t; ++n < 6;) r += e * s[n], s[n] = r % 1e7, r = Sk(r / 1e7)
                },
                f = function(e) {
                    for (var t = 6, n = 0; --t >= 0;) n += s[t], s[t] = Sk(n / e), n = n % e * 1e7
                },
                h = function() {
                    for (var e = 6, t = ""; --e >= 0;)
                        if ("" !== t || 0 === e || 0 !== s[e]) {
                            var n = String(s[e]);
                            t = "" === t ? n : t + Ek.call("0", 7 - n.length) + n
                        } return t
                };
            if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits");
            if (o != o) return "NaN";
            if (o <= -1e21 || o >= 1e21) return String(o);
            if (o < 0 && (c = "-", o = -o), o > 1e-21)
                if (n = (t = function(e) {
                        for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                        for (; n >= 2;) t += 1, n /= 2;
                        return t
                    }(o * Tk(2, 69, 1)) - 69) < 0 ? o * Tk(2, -t, 1) : o / Tk(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
                    for (l(0, n), r = a; r >= 7;) l(1e7, 0), r -= 7;
                    for (l(Tk(10, r, 1), 0), r = t - 1; r >= 23;) f(1 << 23), r -= 23;
                    f(1 << r), l(1, 1), f(2), u = h()
                } else l(0, n), l(1 << -t, 0), u = h() + Ek.call("0", a);
            return u = a > 0 ? c + ((i = u.length) <= a ? "0." + Ek.call("0", a - i) + u : u.slice(0, i - a) + "." + u.slice(i - a)) : c + u
        }
    });
    var Ak = Fg.f,
        Ok = function(e) {
            return function(t) {
                for (var n, r = Yg(t), i = $v(r), o = i.length, a = 0, s = []; o > a;) n = i[a++], Mg && !Ak.call(r, n) || s.push(e ? [n, r[n]] : r[n]);
                return s
            }
        },
        Pk = {
            entries: Ok(!0),
            values: Ok(!1)
        },
        Ck = Pk.entries;
    uv({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return Ck(e)
        }
    });
    var Ik = Pk.values;
    uv({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return Ik(e)
        }
    });
    var jk = Math.max,
        Rk = Math.min,
        Lk = Math.floor,
        Nk = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Mk = /\$([$&'`]|\d\d?)/g;
    hw("replace", 2, (function(e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = r.REPLACE_KEEPS_$0,
            a = i ? "$" : "$0";
        return [function(n, r) {
            var i = zg(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }, function(e, r) {
            if (!i && o || "string" == typeof r && -1 === r.indexOf(a)) {
                var c = n(t, e, this, r);
                if (c.done) return c.value
            }
            var u = rm(e),
                l = String(this),
                f = "function" == typeof r;
            f || (r = String(r));
            var h = u.global;
            if (h) {
                var p = u.unicode;
                u.lastIndex = 0
            }
            for (var d = [];;) {
                var g = dw(u, l);
                if (null === g) break;
                if (d.push(g), !h) break;
                "" === String(g[0]) && (u.lastIndex = r_(l, qm(u.lastIndex), p))
            }
            for (var m, v = "", y = 0, b = 0; b < d.length; b++) {
                g = d[b];
                for (var w = String(g[0]), _ = jk(Rk(Fm(g.index), l.length), 0), E = [], k = 1; k < g.length; k++) E.push(void 0 === (m = g[k]) ? m : String(m));
                var S = g.groups;
                if (f) {
                    var T = [w].concat(E, _, l);
                    void 0 !== S && T.push(S);
                    var x = String(r.apply(void 0, T))
                } else x = s(w, l, _, E, S, r);
                _ >= y && (v += l.slice(y, _) + x, y = _ + w.length)
            }
            return v + l.slice(y)
        }];

        function s(e, n, r, i, o, a) {
            var s = r + e.length,
                c = i.length,
                u = Mk;
            return void 0 !== o && (o = fv(o), u = Nk), t.call(a, u, (function(t, a) {
                var u;
                switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, r);
                    case "'":
                        return n.slice(s);
                    case "<":
                        u = o[a.slice(1, -1)];
                        break;
                    default:
                        var l = +a;
                        if (0 === l) return t;
                        if (l > c) {
                            var f = Lk(l / 10);
                            return 0 === f ? t : f <= c ? void 0 === i[f - 1] ? a.charAt(1) : i[f - 1] + a.charAt(1) : t
                        }
                        u = i[l - 1]
                }
                return void 0 === u ? "" : u
            }))
        }
    }));
    var Uk = Jm.f,
        Dk = {}.toString,
        Fk = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Bk = {
            f: function(e) {
                return Fk && "[object Window]" == Dk.call(e) ? function(e) {
                    try {
                        return Uk(e)
                    } catch (e) {
                        return Fk.slice()
                    }
                }(e) : Uk(Yg(e))
            }
        },
        qk = {
            f: yv
        },
        Hk = om.f,
        Vk = Dv.forEach,
        Wk = Em("hidden"),
        zk = "Symbol",
        Yk = yv("toPrimitive"),
        $k = jm.set,
        Gk = jm.getterFor(zk),
        Kk = Object.prototype,
        Xk = Lg.Symbol,
        Jk = Mm("JSON", "stringify"),
        Qk = nm.f,
        Zk = om.f,
        eS = Bk.f,
        tS = Fg.f,
        nS = vm("symbols"),
        rS = vm("op-symbols"),
        iS = vm("string-to-symbol-registry"),
        oS = vm("symbol-to-string-registry"),
        aS = vm("wks"),
        sS = Lg.QObject,
        cS = !sS || !sS.prototype || !sS.prototype.findChild,
        uS = Mg && Ng((function() {
            return 7 != ey(Zk({}, "a", {
                get: function() {
                    return Zk(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(e, t, n) {
            var r = Qk(Kk, t);
            r && delete Kk[t], Zk(e, t, n), r && e !== Kk && Zk(Kk, t, r)
        } : Zk,
        lS = function(e, t) {
            var n = nS[e] = ey(Xk.prototype);
            return $k(n, {
                type: zk,
                tag: e,
                description: t
            }), Mg || (n.description = t), n
        },
        fS = dv ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof Xk
        },
        hS = function(e, t, n) {
            e === Kk && hS(rS, t, n), rm(e);
            var r = Gg(t, !0);
            return rm(n), Xg(nS, r) ? (n.enumerable ? (Xg(e, Wk) && e[Wk][r] && (e[Wk][r] = !1), n = ey(n, {
                enumerable: Bg(0, !1)
            })) : (Xg(e, Wk) || Zk(e, Wk, Bg(1, {})), e[Wk][r] = !0), uS(e, r, n)) : Zk(e, r, n)
        },
        pS = function(e, t) {
            rm(e);
            var n = Yg(t),
                r = $v(n).concat(vS(n));
            return Vk(r, (function(t) {
                Mg && !dS.call(n, t) || hS(e, t, n[t])
            })), e
        },
        dS = function(e) {
            var t = Gg(e, !0),
                n = tS.call(this, t);
            return !(this === Kk && Xg(nS, t) && !Xg(rS, t)) && (!(n || !Xg(this, t) || !Xg(nS, t) || Xg(this, Wk) && this[Wk][t]) || n)
        },
        gS = function(e, t) {
            var n = Yg(e),
                r = Gg(t, !0);
            if (n !== Kk || !Xg(nS, r) || Xg(rS, r)) {
                var i = Qk(n, r);
                return !i || !Xg(nS, r) || Xg(n, Wk) && n[Wk][r] || (i.enumerable = !0), i
            }
        },
        mS = function(e) {
            var t = eS(Yg(e)),
                n = [];
            return Vk(t, (function(e) {
                Xg(nS, e) || Xg(km, e) || n.push(e)
            })), n
        },
        vS = function(e) {
            var t = e === Kk,
                n = eS(t ? rS : Yg(e)),
                r = [];
            return Vk(n, (function(e) {
                !Xg(nS, e) || t && !Xg(Kk, e) || r.push(nS[e])
            })), r
        };
    if (pv || (Rm((Xk = function() {
            if (this instanceof Xk) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = wm(e),
                n = function(e) {
                    this === Kk && n.call(rS, e), Xg(this, Wk) && Xg(this[Wk], t) && (this[Wk][t] = !1), uS(this, t, Bg(1, e))
                };
            return Mg && cS && uS(Kk, t, {
                configurable: !0,
                set: n
            }), lS(t, e)
        }).prototype, "toString", (function() {
            return Gk(this).tag
        })), Rm(Xk, "withoutSetter", (function(e) {
            return lS(wm(e), e)
        })), Fg.f = dS, om.f = hS, nm.f = gS, Jm.f = Bk.f = mS, Qm.f = vS, qk.f = function(e) {
            return lS(yv(e), e)
        }, Mg && (Zk(Xk.prototype, "description", {
            configurable: !0,
            get: function() {
                return Gk(this).description
            }
        }), Rm(Kk, "propertyIsEnumerable", dS, {
            unsafe: !0
        }))), uv({
            global: !0,
            wrap: !0,
            forced: !pv,
            sham: !pv
        }, {
            Symbol: Xk
        }), Vk($v(aS), (function(e) {
            ! function(e) {
                var t = Lm.Symbol || (Lm.Symbol = {});
                Xg(t, e) || Hk(t, e, {
                    value: qk.f(e)
                })
            }(e)
        })), uv({
            target: zk,
            stat: !0,
            forced: !pv
        }, {
            for: function(e) {
                var t = String(e);
                if (Xg(iS, t)) return iS[t];
                var n = Xk(t);
                return iS[t] = n, oS[n] = t, n
            },
            keyFor: function(e) {
                if (!fS(e)) throw TypeError(e + " is not a symbol");
                if (Xg(oS, e)) return oS[e]
            },
            useSetter: function() {
                cS = !0
            },
            useSimple: function() {
                cS = !1
            }
        }), uv({
            target: "Object",
            stat: !0,
            forced: !pv,
            sham: !Mg
        }, {
            create: function(e, t) {
                return void 0 === t ? ey(e) : pS(ey(e), t)
            },
            defineProperty: hS,
            defineProperties: pS,
            getOwnPropertyDescriptor: gS
        }), uv({
            target: "Object",
            stat: !0,
            forced: !pv
        }, {
            getOwnPropertyNames: mS,
            getOwnPropertySymbols: vS
        }), uv({
            target: "Object",
            stat: !0,
            forced: Ng((function() {
                Qm.f(1)
            }))
        }, {
            getOwnPropertySymbols: function(e) {
                return Qm.f(fv(e))
            }
        }), Jk) {
        var yS = !pv || Ng((function() {
            var e = Xk();
            return "[null]" != Jk([e]) || "{}" != Jk({
                a: e
            }) || "{}" != Jk(Object(e))
        }));
        uv({
            target: "JSON",
            stat: !0,
            forced: yS
        }, {
            stringify: function(e, t, n) {
                for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
                if (r = t, ($g(t) || void 0 !== e) && !fS(e)) return lv(t) || (t = function(e, t) {
                    if ("function" == typeof r && (t = r.call(this, e, t)), !fS(t)) return t
                }), i[1] = t, Jk.apply(null, i)
            }
        })
    }
    Xk.prototype[Yk] || am(Xk.prototype, Yk, Xk.prototype.valueOf), Hy(Xk, zk), km[Wk] = !0, uv({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(e) {
            return e != e
        }
    });
    var bS = nm.f,
        wS = Ng((function() {
            bS(1)
        }));

    function _S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ES(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function kS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function SS(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? kS(Object(n), !0).forEach((function(t) {
                ES(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kS(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    uv({
        target: "Object",
        stat: !0,
        forced: !Mg || wS,
        sham: !Mg
    }, {
        getOwnPropertyDescriptor: function(e, t) {
            return bS(Yg(e), t)
        }
    }), uv({
        target: "Object",
        stat: !0,
        sham: !Mg
    }, {
        getOwnPropertyDescriptors: function(e) {
            for (var t, n, r = Yg(e), i = nm.f, o = Zm(r), a = {}, s = 0; o.length > s;) void 0 !== (n = i(r, t = o[s++])) && hv(a, t, n);
            return a
        }
    }), hw("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = zg(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = rm(e),
                o = String(this);
            if (!i.global) return dw(i, o);
            var a = i.unicode;
            i.lastIndex = 0;
            for (var s, c = [], u = 0; null !== (s = dw(i, o));) {
                var l = String(s[0]);
                c[u] = l, "" === l && (i.lastIndex = r_(o, qm(i.lastIndex), a)), u++
            }
            return 0 === u ? null : c
        }]
    }));
    var TS = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };

    function xS(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }.call(e, t)
    }
    var AS = function(e) {
            return null != e ? e.constructor : null
        },
        OS = function(e, t) {
            return !!(e && t && e instanceof t)
        },
        PS = function(e) {
            return null == e
        },
        CS = function(e) {
            return AS(e) === Object
        },
        IS = function(e) {
            return AS(e) === String
        },
        jS = function(e) {
            return Array.isArray(e)
        },
        RS = function(e) {
            return OS(e, NodeList)
        },
        LS = IS,
        NS = jS,
        MS = RS,
        US = function(e) {
            return OS(e, Element)
        },
        DS = function(e) {
            return OS(e, Event)
        },
        FS = function(e) {
            return PS(e) || (IS(e) || jS(e) || RS(e)) && !e.length || CS(e) && !Object.keys(e).length
        };

    function BS(e, t) {
        if (1 > t) {
            var n = function(e) {
                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
            }(t);
            return parseFloat(e.toFixed(n))
        }
        return Math.round(e / t) * t
    }
    var qS, HS, VS, WS = function() {
            function e(t, n) {
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), US(t) ? this.element = t : LS(t) && (this.element = document.querySelector(t)), US(this.element) && FS(this.element.rangeTouch) && (this.config = SS({}, TS, {}, n), this.init())
            }
            return function(e, t, n) {
                t && _S(e.prototype, t), n && _S(e, n)
            }(e, [{
                key: "init",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                }
            }, {
                key: "destroy",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                }
            }, {
                key: "listeners",
                value: function(e) {
                    var t = this,
                        n = e ? "addEventListener" : "removeEventListener";
                    ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                        t.element[n](e, (function(e) {
                            return t.set(e)
                        }), !1)
                    }))
                }
            }, {
                key: "get",
                value: function(t) {
                    if (!e.enabled || !DS(t)) return null;
                    var n, r = t.target,
                        i = t.changedTouches[0],
                        o = parseFloat(r.getAttribute("min")) || 0,
                        a = parseFloat(r.getAttribute("max")) || 100,
                        s = parseFloat(r.getAttribute("step")) || 1,
                        c = r.getBoundingClientRect(),
                        u = 100 / c.width * (this.config.thumbWidth / 2) / 100;
                    return 0 > (n = 100 / c.width * (i.clientX - c.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * u : 50 < n && (n += 2 * (n - 50) * u), o + BS(n / 100 * (a - o), s)
                }
            }, {
                key: "set",
                value: function(t) {
                    e.enabled && DS(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                        if (e && t) {
                            var n = new Event(t, {
                                bubbles: !0
                            });
                            e.dispatchEvent(n)
                        }
                    }(t.target, "touchend" === t.type ? "change" : "input"))
                }
            }], [{
                key: "setup",
                value: function(t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        r = null;
                    if (FS(t) || LS(t) ? r = Array.from(document.querySelectorAll(LS(t) ? t : 'input[type="range"]')) : US(t) ? r = [t] : MS(t) ? r = Array.from(t) : NS(t) && (r = t.filter(US)), FS(r)) return null;
                    var i = SS({}, TS, {}, n);
                    if (LS(t) && i.watch) {
                        var o = new MutationObserver((function(n) {
                            Array.from(n).forEach((function(n) {
                                Array.from(n.addedNodes).forEach((function(n) {
                                    US(n) && xS(n, t) && new e(n, i)
                                }))
                            }))
                        }));
                        o.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                    return r.map((function(t) {
                        return new e(t, n)
                    }))
                }
            }, {
                key: "enabled",
                get: function() {
                    return "ontouchstart" in document.documentElement
                }
            }]), e
        }(),
        zS = Lg.Promise,
        YS = yv("species"),
        $S = function(e) {
            var t = Mm(e),
                n = om.f;
            Mg && t && !t[YS] && n(t, YS, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        GS = /(iphone|ipod|ipad).*applewebkit/i.test(_v),
        KS = "process" == Hg(Lg.process),
        XS = Lg.location,
        JS = Lg.setImmediate,
        QS = Lg.clearImmediate,
        ZS = Lg.process,
        eT = Lg.MessageChannel,
        tT = Lg.Dispatch,
        nT = 0,
        rT = {},
        iT = "onreadystatechange",
        oT = function(e) {
            if (rT.hasOwnProperty(e)) {
                var t = rT[e];
                delete rT[e], t()
            }
        },
        aT = function(e) {
            return function() {
                oT(e)
            }
        },
        sT = function(e) {
            oT(e.data)
        },
        cT = function(e) {
            Lg.postMessage(e + "", XS.protocol + "//" + XS.host)
        };
    JS && QS || (JS = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return rT[++nT] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, qS(nT), nT
    }, QS = function(e) {
        delete rT[e]
    }, KS ? qS = function(e) {
        ZS.nextTick(aT(e))
    } : tT && tT.now ? qS = function(e) {
        tT.now(aT(e))
    } : eT && !GS ? (VS = (HS = new eT).port2, HS.port1.onmessage = sT, qS = Nv(VS.postMessage, VS, 1)) : Lg.addEventListener && "function" == typeof postMessage && !Lg.importScripts && XS && "file:" !== XS.protocol && !Ng(cT) ? (qS = cT, Lg.addEventListener("message", sT, !1)) : qS = iT in Zg("script") ? function(e) {
        Kv.appendChild(Zg("script")).onreadystatechange = function() {
            Kv.removeChild(this), oT(e)
        }
    } : function(e) {
        setTimeout(aT(e), 0)
    });
    var uT, lT, fT, hT, pT, dT, gT, mT, vT = {
            set: JS,
            clear: QS
        },
        yT = nm.f,
        bT = vT.set,
        wT = Lg.MutationObserver || Lg.WebKitMutationObserver,
        _T = Lg.document,
        ET = Lg.process,
        kT = Lg.Promise,
        ST = yT(Lg, "queueMicrotask"),
        TT = ST && ST.value;
    TT || (uT = function() {
        var e, t;
        for (KS && (e = ET.domain) && e.exit(); lT;) {
            t = lT.fn, lT = lT.next;
            try {
                t()
            } catch (e) {
                throw lT ? hT() : fT = void 0, e
            }
        }
        fT = void 0, e && e.enter()
    }, !GS && !KS && wT && _T ? (pT = !0, dT = _T.createTextNode(""), new wT(uT).observe(dT, {
        characterData: !0
    }), hT = function() {
        dT.data = pT = !pT
    }) : kT && kT.resolve ? (gT = kT.resolve(void 0), mT = gT.then, hT = function() {
        mT.call(gT, uT)
    }) : hT = KS ? function() {
        ET.nextTick(uT)
    } : function() {
        bT.call(Lg, uT)
    });
    var xT, AT, OT, PT, CT = TT || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            fT && (fT.next = t), lT || (lT = t, hT()), fT = t
        },
        IT = function(e) {
            var t, n;
            this.promise = new e((function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            })), this.resolve = Lv(t), this.reject = Lv(n)
        },
        jT = {
            f: function(e) {
                return new IT(e)
            }
        },
        RT = function(e, t) {
            if (rm(e), $g(t) && t.constructor === e) return t;
            var n = jT.f(e);
            return (0, n.resolve)(t), n.promise
        },
        LT = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        },
        NT = vT.set,
        MT = yv("species"),
        UT = "Promise",
        DT = jm.get,
        FT = jm.set,
        BT = jm.getterFor(UT),
        qT = zS,
        HT = Lg.TypeError,
        VT = Lg.document,
        WT = Lg.process,
        zT = Mm("fetch"),
        YT = jT.f,
        $T = YT,
        GT = !!(VT && VT.createEvent && Lg.dispatchEvent),
        KT = "function" == typeof PromiseRejectionEvent,
        XT = "unhandledrejection",
        JT = sv(UT, (function() {
            if (!(dm(qT) !== String(qT))) {
                if (66 === Tv) return !0;
                if (!KS && !KT) return !0
            }
            if (Tv >= 51 && /native code/.test(qT)) return !1;
            var e = qT.resolve(1),
                t = function(e) {
                    e((function() {}), (function() {}))
                };
            return (e.constructor = {})[MT] = t, !(e.then((function() {})) instanceof t)
        })),
        QT = JT || !xy((function(e) {
            qT.all(e).catch((function() {}))
        })),
        ZT = function(e) {
            var t;
            return !(!$g(e) || "function" != typeof(t = e.then)) && t
        },
        ex = function(e, t) {
            if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                CT((function() {
                    for (var r = e.value, i = 1 == e.state, o = 0; n.length > o;) {
                        var a, s, c, u = n[o++],
                            l = i ? u.ok : u.fail,
                            f = u.resolve,
                            h = u.reject,
                            p = u.domain;
                        try {
                            l ? (i || (2 === e.rejection && ix(e), e.rejection = 1), !0 === l ? a = r : (p && p.enter(), a = l(r), p && (p.exit(), c = !0)), a === u.promise ? h(HT("Promise-chain cycle")) : (s = ZT(a)) ? s.call(a, f, h) : f(a)) : h(r)
                        } catch (e) {
                            p && !c && p.exit(), h(e)
                        }
                    }
                    e.reactions = [], e.notified = !1, t && !e.rejection && nx(e)
                }))
            }
        },
        tx = function(e, t, n) {
            var r, i;
            GT ? ((r = VT.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), Lg.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
            }, !KT && (i = Lg["on" + e]) ? i(r) : e === XT && function(e, t) {
                var n = Lg.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }("Unhandled promise rejection", n)
        },
        nx = function(e) {
            NT.call(Lg, (function() {
                var t, n = e.facade,
                    r = e.value;
                if (rx(e) && (t = LT((function() {
                        KS ? WT.emit("unhandledRejection", r, n) : tx(XT, n, r)
                    })), e.rejection = KS || rx(e) ? 2 : 1, t.error)) throw t.value
            }))
        },
        rx = function(e) {
            return 1 !== e.rejection && !e.parent
        },
        ix = function(e) {
            NT.call(Lg, (function() {
                var t = e.facade;
                KS ? WT.emit("rejectionHandled", t) : tx("rejectionhandled", t, e.value)
            }))
        },
        ox = function(e, t, n) {
            return function(r) {
                e(t, r, n)
            }
        },
        ax = function(e, t, n) {
            e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, ex(e, !0))
        },
        sx = function(e, t, n) {
            if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                    if (e.facade === t) throw HT("Promise can't be resolved itself");
                    var r = ZT(t);
                    r ? CT((function() {
                        var n = {
                            done: !1
                        };
                        try {
                            r.call(t, ox(sx, n, e), ox(ax, n, e))
                        } catch (t) {
                            ax(n, t, e)
                        }
                    })) : (e.value = t, e.state = 1, ex(e, !1))
                } catch (t) {
                    ax({
                        done: !1
                    }, t, e)
                }
            }
        };
    JT && (qT = function(e) {
        ww(this, qT, UT), Lv(e), xT.call(this);
        var t = DT(this);
        try {
            e(ox(sx, t), ox(ax, t))
        } catch (e) {
            ax(t, e)
        }
    }, (xT = function(e) {
        FT(this, {
            type: UT,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = gw(qT.prototype, {
        then: function(e, t) {
            var n = BT(this),
                r = YT(t_(this, qT));
            return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = KS ? WT.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && ex(n, !1), r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), AT = function() {
        var e = new xT,
            t = DT(e);
        this.promise = e, this.resolve = ox(sx, t), this.reject = ox(ax, t)
    }, jT.f = YT = function(e) {
        return e === qT || e === OT ? new AT(e) : $T(e)
    }, "function" == typeof zS && (PT = zS.prototype.then, Rm(zS.prototype, "then", (function(e, t) {
        var n = this;
        return new qT((function(e, t) {
            PT.call(n, e, t)
        })).then(e, t)
    }), {
        unsafe: !0
    }), "function" == typeof zT && uv({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return RT(qT, zT.apply(Lg, arguments))
        }
    }))), uv({
        global: !0,
        wrap: !0,
        forced: JT
    }, {
        Promise: qT
    }), Hy(qT, UT, !1), $S(UT), OT = Mm(UT), uv({
        target: UT,
        stat: !0,
        forced: JT
    }, {
        reject: function(e) {
            var t = YT(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), uv({
        target: UT,
        stat: !0,
        forced: JT
    }, {
        resolve: function(e) {
            return RT(this, e)
        }
    }), uv({
        target: UT,
        stat: !0,
        forced: QT
    }, {
        all: function(e) {
            var t = this,
                n = YT(t),
                r = n.resolve,
                i = n.reject,
                o = LT((function() {
                    var n = Lv(t.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    bw(e, (function(e) {
                        var c = a++,
                            u = !1;
                        o.push(void 0), s++, n.call(t, e).then((function(e) {
                            u || (u = !0, o[c] = e, --s || r(o))
                        }), i)
                    })), --s || r(o)
                }));
            return o.error && i(o.value), n.promise
        },
        race: function(e) {
            var t = this,
                n = YT(t),
                r = n.reject,
                i = LT((function() {
                    var i = Lv(t.resolve);
                    bw(e, (function(e) {
                        i.call(t, e).then(n.resolve, r)
                    }))
                }));
            return i.error && r(i.value), n.promise
        }
    });
    var cx, ux = nm.f,
        lx = "".startsWith,
        fx = Math.min,
        hx = Zb("startsWith"),
        px = !(hx || (cx = ux(String.prototype, "startsWith"), !cx || cx.writable));
    uv({
        target: "String",
        proto: !0,
        forced: !px && !hx
    }, {
        startsWith: function(e) {
            var t = String(zg(this));
            Jb(e);
            var n = qm(fx(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                r = String(e);
            return lx ? lx.call(t, r, n) : t.slice(n, n + r.length) === r
        }
    });
    var dx, gx, mx, vx = function(e) {
            return null != e ? e.constructor : null
        },
        yx = function(e, t) {
            return Boolean(e && t && e instanceof t)
        },
        bx = function(e) {
            return null == e
        },
        wx = function(e) {
            return vx(e) === Object
        },
        _x = function(e) {
            return vx(e) === String
        },
        Ex = function(e) {
            return vx(e) === Function
        },
        kx = function(e) {
            return Array.isArray(e)
        },
        Sx = function(e) {
            return yx(e, NodeList)
        },
        Tx = function(e) {
            return bx(e) || (_x(e) || kx(e) || Sx(e)) && !e.length || wx(e) && !Object.keys(e).length
        },
        xx = bx,
        Ax = wx,
        Ox = function(e) {
            return vx(e) === Number && !Number.isNaN(e)
        },
        Px = _x,
        Cx = function(e) {
            return vx(e) === Boolean
        },
        Ix = Ex,
        jx = kx,
        Rx = Sx,
        Lx = function(e) {
            return yx(e, Element)
        },
        Nx = function(e) {
            return yx(e, Event)
        },
        Mx = function(e) {
            return yx(e, KeyboardEvent)
        },
        Ux = function(e) {
            return yx(e, TextTrack) || !bx(e) && _x(e.kind)
        },
        Dx = function(e) {
            return yx(e, Promise) && Ex(e.then)
        },
        Fx = function(e) {
            if (yx(e, window.URL)) return !0;
            if (!_x(e)) return !1;
            var t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
            try {
                return !Tx(new URL(t).hostname)
            } catch (e) {
                return !1
            }
        },
        Bx = Tx,
        qx = (dx = document.createElement("span"), gx = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, mx = Object.keys(gx).find((function(e) {
            return void 0 !== dx.style[e]
        })), !!Px(mx) && gx[mx]);

    function Hx(e, t) {
        setTimeout((function() {
            try {
                e.hidden = !0, e.offsetHeight, e.hidden = !1
            } catch (e) {}
        }), t)
    }
    var Vx = {
            isIE:
                /* @cc_on!@ */
                !!document.documentMode,
            isEdge: window.navigator.userAgent.includes("Edge"),
            isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
            isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        },
        Wx = function(e) {
            return function(t, n, r, i) {
                Lv(n);
                var o = fv(t),
                    a = Wg(o),
                    s = qm(o.length),
                    c = e ? s - 1 : 0,
                    u = e ? -1 : 1;
                if (r < 2)
                    for (;;) {
                        if (c in a) {
                            i = a[c], c += u;
                            break
                        }
                        if (c += u, e ? c < 0 : s <= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? c >= 0 : s > c; c += u) c in a && (i = n(i, a[c], c, o));
                return i
            }
        },
        zx = {
            left: Wx(!1),
            right: Wx(!0)
        }.left,
        Yx = ob("reduce"),
        $x = Hv("reduce", {
            1: 0
        });

    function Gx(e, t) {
        return t.split(".").reduce((function(e, t) {
            return e && e[t]
        }), e)
    }

    function Kx() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!n.length) return e;
        var i = n.shift();
        return Ax(i) ? (Object.keys(i).forEach((function(t) {
            Ax(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, gs({}, t, {})), Kx(e[t], i[t])) : Object.assign(e, gs({}, t, i[t]))
        })), Kx.apply(void 0, [e].concat(n))) : e
    }

    function Xx(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach((function(e, n) {
            var r = n > 0 ? t.cloneNode(!0) : t,
                i = e.parentNode,
                o = e.nextSibling;
            r.appendChild(e), o ? i.insertBefore(r, o) : i.appendChild(r)
        }))
    }

    function Jx(e, t) {
        Lx(e) && !Bx(t) && Object.entries(t).filter((function(e) {
            var t = bs(e, 2)[1];
            return !xx(t)
        })).forEach((function(t) {
            var n = bs(t, 2),
                r = n[0],
                i = n[1];
            return e.setAttribute(r, i)
        }))
    }

    function Qx(e, t, n) {
        var r = document.createElement(e);
        return Ax(t) && Jx(r, t), Px(n) && (r.innerText = n), r
    }

    function Zx(e, t, n, r) {
        Lx(t) && t.appendChild(Qx(e, n, r))
    }

    function eA(e) {
        Rx(e) || jx(e) ? Array.from(e).forEach(eA) : Lx(e) && Lx(e.parentNode) && e.parentNode.removeChild(e)
    }

    function tA(e) {
        if (Lx(e))
            for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
    }

    function nA(e, t) {
        return Lx(t) && Lx(t.parentNode) && Lx(e) ? (t.parentNode.replaceChild(e, t), e) : null
    }

    function rA(e, t) {
        if (!Px(e) || Bx(e)) return {};
        var n = {},
            r = Kx({}, t);
        return e.split(",").forEach((function(e) {
            var t = e.trim(),
                i = t.replace(".", ""),
                o = t.replace(/[[\]]/g, "").split("="),
                a = bs(o, 1)[0],
                s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
                case ".":
                    Px(r.class) ? n.class = "".concat(r.class, " ").concat(i) : n.class = i;
                    break;
                case "#":
                    n.id = t.replace("#", "");
                    break;
                case "[":
                    n[a] = s
            }
        })), Kx(r, n)
    }

    function iA(e, t) {
        if (Lx(e)) {
            var n = t;
            Cx(n) || (n = !e.hidden), e.hidden = n
        }
    }

    function oA(e, t, n) {
        if (Rx(e)) return Array.from(e).map((function(e) {
            return oA(e, t, n)
        }));
        if (Lx(e)) {
            var r = "toggle";
            return void 0 !== n && (r = n ? "add" : "remove"), e.classList[r](t), e.classList.contains(t)
        }
        return !1
    }

    function aA(e, t) {
        return Lx(e) && e.classList.contains(t)
    }

    function sA(e, t) {
        var n = Element.prototype;
        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
    }

    function cA(e) {
        return this.elements.container.querySelectorAll(e)
    }

    function uA(e) {
        return this.elements.container.querySelector(e)
    }

    function lA() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        Lx(e) && (e.focus({
            preventScroll: !0
        }), t && oA(e, this.config.classNames.tabFocus))
    }
    uv({
        target: "Array",
        proto: !0,
        forced: !Yx || !$x || !KS && Tv > 79 && Tv < 83
    }, {
        reduce: function(e) {
            return zx(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var fA, hA = {
            "audio/ogg": "vorbis",
            "audio/wav": "1",
            "video/webm": "vp8, vorbis",
            "video/mp4": "avc1.42E01E, mp4a.40.2",
            "video/ogg": "theora"
        },
        pA = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function(e, t, n) {
                var r = Vx.isIPhone && n && pA.playsinline,
                    i = pA[e] || "html5" !== t;
                return {
                    api: i,
                    ui: i && pA.rangeInput && ("video" !== e || !Vx.isIPhone || r)
                }
            },
            pip: !(Vx.isIPhone || !Ix(Qx("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || Qx("video").disablePictureInPicture)),
            airplay: Ix(window.WebKitPlaybackTargetAvailabilityEvent),
            playsinline: "playsInline" in document.createElement("video"),
            mime: function(e) {
                if (Bx(e)) return !1;
                var t = bs(e.split("/"), 1)[0],
                    n = e;
                if (!this.isHTML5 || t !== this.type) return !1;
                Object.keys(hA).includes(n) && (n += '; codecs="'.concat(hA[e], '"'));
                try {
                    return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                } catch (e) {
                    return !1
                }
            },
            textTracks: "textTracks" in document.createElement("video"),
            rangeInput: (fA = document.createElement("input"), fA.type = "range", "range" === fA.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== qx,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        dA = function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        return e = !0, null
                    }
                });
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
            } catch (e) {}
            return e
        }();

    function gA(e, t, n) {
        var r = this,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e && "addEventListener" in e && !Bx(t) && Ix(n)) {
            var s = t.split(" "),
                c = a;
            dA && (c = {
                passive: o,
                capture: a
            }), s.forEach((function(t) {
                r && r.eventListeners && i && r.eventListeners.push({
                    element: e,
                    type: t,
                    callback: n,
                    options: c
                }), e[i ? "addEventListener" : "removeEventListener"](t, n, c)
            }))
        }
    }

    function mA(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        gA.call(this, e, t, n, !0, r, i)
    }

    function vA(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        gA.call(this, e, t, n, !1, r, i)
    }

    function yA(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            a = function a() {
                vA(e, n, a, i, o);
                for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                r.apply(t, c)
            };
        gA.call(this, e, n, a, !0, i, o)
    }

    function bA(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (Lx(e) && !Bx(t)) {
            var i = new CustomEvent(t, {
                bubbles: n,
                detail: vs(vs({}, r), {}, {
                    plyr: this
                })
            });
            e.dispatchEvent(i)
        }
    }

    function wA() {
        this && this.eventListeners && (this.eventListeners.forEach((function(e) {
            var t = e.element,
                n = e.type,
                r = e.callback,
                i = e.options;
            t.removeEventListener(n, r, i)
        })), this.eventListeners = [])
    }

    function _A() {
        var e = this;
        return new Promise((function(t) {
            return e.ready ? setTimeout(t, 0) : mA.call(e, e.elements.container, "ready", t)
        })).then((function() {}))
    }

    function EA(e) {
        Dx(e) && e.then(null, (function() {}))
    }

    function kA(e) {
        return !!(jx(e) || Px(e) && e.includes(":")) && (jx(e) ? e : e.split(":")).map(Number).every(Ox)
    }

    function SA(e) {
        if (!jx(e) || !e.every(Ox)) return null;
        var t = bs(e, 2),
            n = t[0],
            r = t[1],
            i = function e(t, n) {
                return 0 === n ? t : e(n, t % n)
            }(n, r);
        return [n / i, r / i]
    }

    function TA(e) {
        var t = function(e) {
                return kA(e) ? e.split(":").map(Number) : null
            },
            n = t(e);
        if (null === n && (n = t(this.config.ratio)), null === n && !Bx(this.embed) && jx(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
            var r = this.media;
            n = SA([r.videoWidth, r.videoHeight])
        }
        return n
    }

    function xA(e) {
        if (!this.isVideo) return {};
        var t = this.elements.wrapper,
            n = TA.call(this, e),
            r = bs(jx(n) ? n : [0, 0], 2),
            i = 100 / r[0] * r[1];
        if (t.style.paddingBottom = "".concat(i, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            var o = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                a = (o - i) / (o / 50);
            this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(a, "%)")
        } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
        return {
            padding: i,
            ratio: n
        }
    }
    var AA = {
        getSources: function() {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) {
                var n = t.getAttribute("type");
                return !!Bx(n) || pA.mime.call(e, n)
            })) : []
        },
        getQualityOptions: function() {
            return this.config.quality.forced ? this.config.quality.options : AA.getSources.call(this).map((function(e) {
                return Number(e.getAttribute("size"))
            })).filter(Boolean)
        },
        setup: function() {
            if (this.isHTML5) {
                var e = this;
                e.options.speed = e.config.speed.options, Bx(this.config.ratio) || xA.call(e), Object.defineProperty(e.media, "quality", {
                    get: function() {
                        var t = AA.getSources.call(e).find((function(t) {
                            return t.getAttribute("src") === e.source
                        }));
                        return t && Number(t.getAttribute("size"))
                    },
                    set: function(t) {
                        if (e.quality !== t) {
                            if (e.config.quality.forced && Ix(e.config.quality.onChange)) e.config.quality.onChange(t);
                            else {
                                var n = AA.getSources.call(e).find((function(e) {
                                    return Number(e.getAttribute("size")) === t
                                }));
                                if (!n) return;
                                var r = e.media,
                                    i = r.currentTime,
                                    o = r.paused,
                                    a = r.preload,
                                    s = r.readyState,
                                    c = r.playbackRate;
                                e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", (function() {
                                    e.speed = c, e.currentTime = i, o || EA(e.play())
                                })), e.media.load())
                            }
                            bA.call(e, e.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            }
        },
        cancelRequests: function() {
            this.isHTML5 && (eA(AA.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
        }
    };

    function OA(e) {
        return jx(e) ? e.filter((function(t, n) {
            return e.indexOf(t) === n
        })) : e
    }
    var PA = Av("slice"),
        CA = Hv("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        IA = yv("species"),
        jA = [].slice,
        RA = Math.max;
    uv({
        target: "Array",
        proto: !0,
        forced: !PA || !CA
    }, {
        slice: function(e, t) {
            var n, r, i, o = Yg(this),
                a = qm(o.length),
                s = Wm(e, a),
                c = Wm(void 0 === t ? a : t, a);
            if (lv(o) && ("function" != typeof(n = o.constructor) || n !== Array && !lv(n.prototype) ? $g(n) && null === (n = n[IA]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return jA.call(o, s, c);
            for (r = new(void 0 === n ? Array : n)(RA(c - s, 0)), i = 0; s < c; s++, i++) s in o && hv(r, i, o[s]);
            return r.length = i, r
        }
    });
    var LA = om.f,
        NA = Jm.f,
        MA = jm.set,
        UA = yv("match"),
        DA = Lg.RegExp,
        FA = DA.prototype,
        BA = /a/g,
        qA = /a/g,
        HA = new DA(BA) !== BA,
        VA = Mb.UNSUPPORTED_Y;
    if (Mg && sv("RegExp", !HA || VA || Ng((function() {
            return qA[UA] = !1, DA(BA) != BA || DA(qA) == qA || "/a/i" != DA(BA, "i")
        })))) {
        for (var WA = function(e, t) {
                var n, r = this instanceof WA,
                    i = Xb(e),
                    o = void 0 === t;
                if (!r && i && e.constructor === WA && o) return e;
                HA ? i && !o && (e = e.source) : e instanceof WA && (o && (t = Lb.call(e)), e = e.source), VA && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                var a = hb(HA ? new DA(e, t) : DA(e, t), r ? this : FA, WA);
                return VA && n && MA(a, {
                    sticky: n
                }), a
            }, zA = function(e) {
                e in WA || LA(WA, e, {
                    configurable: !0,
                    get: function() {
                        return DA[e]
                    },
                    set: function(t) {
                        DA[e] = t
                    }
                })
            }, YA = NA(DA), $A = 0; YA.length > $A;) zA(YA[$A++]);
        FA.constructor = WA, WA.prototype = FA, Rm(Lg, "RegExp", WA)
    }

    function GA(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return Bx(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) {
            return n[t].toString()
        }))
    }
    $S("RegExp");
    var KA = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
        },
        XA = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.toString().replace(/\w\S*/g, (function(e) {
                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            }))
        };

    function JA() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.toString();
        return t = KA(t, "-", " "), t = KA(t, "_", " "), t = XA(t), KA(t, " ", "")
    }

    function QA(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
    }
    var ZA = {
            pip: "PIP",
            airplay: "AirPlay",
            html5: "HTML5",
            vimeo: "Vimeo",
            youtube: "YouTube"
        },
        eO = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (Bx(e) || Bx(t)) return "";
            var n = Gx(t.i18n, e);
            if (Bx(n)) return Object.keys(ZA).includes(e) ? ZA[e] : "";
            var r = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(r).forEach((function(e) {
                var t = bs(e, 2),
                    r = t[0],
                    i = t[1];
                n = KA(n, r, i)
            })), n
        },
        tO = function() {
            function e(t) {
                hs(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
            }
            return ds(e, [{
                key: "get",
                value: function(t) {
                    if (!e.supported || !this.enabled) return null;
                    var n = window.localStorage.getItem(this.key);
                    if (Bx(n)) return null;
                    var r = JSON.parse(n);
                    return Px(t) && t.length ? r[t] : r
                }
            }, {
                key: "set",
                value: function(t) {
                    if (e.supported && this.enabled && Ax(t)) {
                        var n = this.get();
                        Bx(n) && (n = {}), Kx(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
                    }
                }
            }], [{
                key: "supported",
                get: function() {
                    try {
                        if (!("localStorage" in window)) return !1;
                        var e = "___test";
                        return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }();

    function nO(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise((function(n, r) {
            try {
                var i = new XMLHttpRequest;
                if (!("withCredentials" in i)) return;
                i.addEventListener("load", (function() {
                    if ("text" === t) try {
                        n(JSON.parse(i.responseText))
                    } catch (e) {
                        n(i.responseText)
                    } else n(i.response)
                })), i.addEventListener("error", (function() {
                    throw new Error(i.status)
                })), i.open("GET", e, !0), i.responseType = t, i.send()
            } catch (e) {
                r(e)
            }
        }))
    }

    function rO(e, t) {
        if (Px(e)) {
            var n = "cache",
                r = Px(t),
                i = function() {
                    return null !== document.getElementById(t)
                },
                o = function(e, t) {
                    e.innerHTML = t, r && i() || document.body.insertAdjacentElement("afterbegin", e)
                };
            if (!r || !i()) {
                var a = tO.supported,
                    s = document.createElement("div");
                if (s.setAttribute("hidden", ""), r && s.setAttribute("id", t), a) {
                    var c = window.localStorage.getItem("".concat(n, "-").concat(t));
                    if (null !== c) {
                        var u = JSON.parse(c);
                        o(s, u.content)
                    }
                }
                nO(e).then((function(e) {
                    Bx(e) || (a && window.localStorage.setItem("".concat(n, "-").concat(t), JSON.stringify({
                        content: e
                    })), o(s, e))
                })).catch((function() {}))
            }
        }
    }
    var iO = Math.ceil,
        oO = Math.floor;
    uv({
        target: "Math",
        stat: !0
    }, {
        trunc: function(e) {
            return (e > 0 ? oO : iO)(e)
        }
    });
    var aO = function(e) {
            return Math.trunc(e / 60 / 60 % 60, 10)
        },
        sO = function(e) {
            return Math.trunc(e / 60 % 60, 10)
        },
        cO = function(e) {
            return Math.trunc(e % 60, 10)
        };

    function uO() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!Ox(e)) return uO(void 0, t, n);
        var r = function(e) {
                return "0".concat(e).slice(-2)
            },
            i = aO(e),
            o = sO(e),
            a = cO(e);
        return i = t || i > 0 ? "".concat(i, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(i).concat(r(o), ":").concat(r(a))
    }
    var lO = {
        getIconUrl: function() {
            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || Vx.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements: function() {
            try {
                return this.elements.controls = uA.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: cA.call(this, this.config.selectors.buttons.play),
                    pause: uA.call(this, this.config.selectors.buttons.pause),
                    restart: uA.call(this, this.config.selectors.buttons.restart),
                    rewind: uA.call(this, this.config.selectors.buttons.rewind),
                    fastForward: uA.call(this, this.config.selectors.buttons.fastForward),
                    mute: uA.call(this, this.config.selectors.buttons.mute),
                    pip: uA.call(this, this.config.selectors.buttons.pip),
                    airplay: uA.call(this, this.config.selectors.buttons.airplay),
                    settings: uA.call(this, this.config.selectors.buttons.settings),
                    captions: uA.call(this, this.config.selectors.buttons.captions),
                    fullscreen: uA.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = uA.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: uA.call(this, this.config.selectors.inputs.seek),
                    volume: uA.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: uA.call(this, this.config.selectors.display.buffer),
                    currentTime: uA.call(this, this.config.selectors.display.currentTime),
                    duration: uA.call(this, this.config.selectors.display.duration)
                }, Lx(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
            }
        },
        createIcon: function(e, t) {
            var n = "http://www.w3.org/2000/svg",
                r = lO.getIconUrl.call(this),
                i = "".concat(r.cors ? "" : r.url, "#").concat(this.config.iconPrefix),
                o = document.createElementNS(n, "svg");
            Jx(o, Kx(t, {
                "aria-hidden": "true",
                focusable: "false"
            }));
            var a = document.createElementNS(n, "use"),
                s = "".concat(i, "-").concat(e);
            return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), o.appendChild(a), o
        },
        createLabel: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = eO(e, this.config),
                r = vs(vs({}, t), {}, {
                    class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                });
            return Qx("span", r, n)
        },
        createBadge: function(e) {
            if (Bx(e)) return null;
            var t = Qx("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(Qx("span", {
                class: this.config.classNames.menu.badge
            }, e)), t
        },
        createButton: function(e, t) {
            var n = this,
                r = Kx({}, t),
                i = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                    return (e = JA(e)).charAt(0).toLowerCase() + e.slice(1)
                }(e),
                o = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    labelPressed: null,
                    iconPressed: null
                };
            switch (["element", "icon", "label"].forEach((function(e) {
                Object.keys(r).includes(e) && (o[e] = r[e], delete r[e])
            })), "button" !== o.element || Object.keys(r).includes("type") || (r.type = "button"), Object.keys(r).includes("class") ? r.class.split(" ").some((function(e) {
                return e === n.config.classNames.control
            })) || Kx(r, {
                class: "".concat(r.class, " ").concat(this.config.classNames.control)
            }) : r.class = this.config.classNames.control, e) {
                case "play":
                    o.toggle = !0, o.label = "play", o.labelPressed = "pause", o.icon = "play", o.iconPressed = "pause";
                    break;
                case "mute":
                    o.toggle = !0, o.label = "mute", o.labelPressed = "unmute", o.icon = "volume", o.iconPressed = "muted";
                    break;
                case "captions":
                    o.toggle = !0, o.label = "enableCaptions", o.labelPressed = "disableCaptions", o.icon = "captions-off", o.iconPressed = "captions-on";
                    break;
                case "fullscreen":
                    o.toggle = !0, o.label = "enterFullscreen", o.labelPressed = "exitFullscreen", o.icon = "enter-fullscreen", o.iconPressed = "exit-fullscreen";
                    break;
                case "play-large":
                    r.class += " ".concat(this.config.classNames.control, "--overlaid"), i = "play", o.label = "play", o.icon = "play";
                    break;
                default:
                    Bx(o.label) && (o.label = i), Bx(o.icon) && (o.icon = e)
            }
            var a = Qx(o.element);
            return o.toggle ? (a.appendChild(lO.createIcon.call(this, o.iconPressed, {
                class: "icon--pressed"
            })), a.appendChild(lO.createIcon.call(this, o.icon, {
                class: "icon--not-pressed"
            })), a.appendChild(lO.createLabel.call(this, o.labelPressed, {
                class: "label--pressed"
            })), a.appendChild(lO.createLabel.call(this, o.label, {
                class: "label--not-pressed"
            }))) : (a.appendChild(lO.createIcon.call(this, o.icon)), a.appendChild(lO.createLabel.call(this, o.label))), Kx(r, rA(this.config.selectors.buttons[i], r)), Jx(a, r), "play" === i ? (jx(this.elements.buttons[i]) || (this.elements.buttons[i] = []), this.elements.buttons[i].push(a)) : this.elements.buttons[i] = a, a
        },
        createRange: function(e, t) {
            var n = Qx("input", Kx(rA(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": eO(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = n, lO.updateRangeFill.call(this, n), WS.setup(n), n
        },
        createProgress: function(e, t) {
            var n = Qx("progress", Kx(rA(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                n.appendChild(Qx("span", null, "0"));
                var r = {
                        played: "played",
                        buffer: "buffered"
                    } [e],
                    i = r ? eO(r, this.config) : "";
                n.innerText = "% ".concat(i.toLowerCase())
            }
            return this.elements.display[e] = n, n
        },
        createTime: function(e, t) {
            var n = rA(this.config.selectors.display[e], t),
                r = Qx("div", Kx(n, {
                    class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                    "aria-label": eO(e, this.config)
                }), "00:00");
            return this.elements.display[e] = r, r
        },
        bindMenuItemShortcuts: function(e, t) {
            var n = this;
            mA.call(this, e, "keydown keyup", (function(r) {
                if ([32, 38, 39, 40].includes(r.which) && (r.preventDefault(), r.stopPropagation(), "keydown" !== r.type)) {
                    var i, o = sA(e, '[role="menuitemradio"]');
                    if (!o && [32, 39].includes(r.which)) lO.showMenuPanel.call(n, t, !0);
                    else 32 !== r.which && (40 === r.which || o && 39 === r.which ? (i = e.nextElementSibling, Lx(i) || (i = e.parentNode.firstElementChild)) : (i = e.previousElementSibling, Lx(i) || (i = e.parentNode.lastElementChild)), lA.call(n, i, !0))
                }
            }), !1), mA.call(this, e, "keyup", (function(e) {
                13 === e.which && lO.focusFirstMenuItem.call(n, null, !0)
            }))
        },
        createMenuItem: function(e) {
            var t = this,
                n = e.value,
                r = e.list,
                i = e.type,
                o = e.title,
                a = e.badge,
                s = void 0 === a ? null : a,
                c = e.checked,
                u = void 0 !== c && c,
                l = rA(this.config.selectors.inputs[i]),
                f = Qx("button", Kx(l, {
                    type: "button",
                    role: "menuitemradio",
                    class: "".concat(this.config.classNames.control, " ").concat(l.class ? l.class : "").trim(),
                    "aria-checked": u,
                    value: n
                })),
                h = Qx("span");
            h.innerHTML = o, Lx(s) && h.appendChild(s), f.appendChild(h), Object.defineProperty(f, "checked", {
                enumerable: !0,
                get: function() {
                    return "true" === f.getAttribute("aria-checked")
                },
                set: function(e) {
                    e && Array.from(f.parentNode.children).filter((function(e) {
                        return sA(e, '[role="menuitemradio"]')
                    })).forEach((function(e) {
                        return e.setAttribute("aria-checked", "false")
                    })), f.setAttribute("aria-checked", e ? "true" : "false")
                }
            }), this.listeners.bind(f, "click keyup", (function(e) {
                if (!Mx(e) || 32 === e.which) {
                    switch (e.preventDefault(), e.stopPropagation(), f.checked = !0, i) {
                        case "language":
                            t.currentTrack = Number(n);
                            break;
                        case "quality":
                            t.quality = n;
                            break;
                        case "speed":
                            t.speed = parseFloat(n)
                    }
                    lO.showMenuPanel.call(t, "home", Mx(e))
                }
            }), i, !1), lO.bindMenuItemShortcuts.call(this, f, i), r.appendChild(f)
        },
        formatTime: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!Ox(e)) return e;
            var n = aO(this.duration) > 0;
            return uO(e, n, t)
        },
        updateTimeDisplay: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            Lx(e) && Ox(t) && (e.innerText = lO.formatTime(t, n))
        },
        updateVolume: function() {
            this.supported.ui && (Lx(this.elements.inputs.volume) && lO.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Lx(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            Lx(e) && (e.value = t, lO.updateRangeFill.call(this, e))
        },
        updateProgress: function(e) {
            var t = this;
            if (this.supported.ui && Nx(e)) {
                var n = 0;
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        n = function(e, t) {
                            return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
                        }(this.currentTime, this.duration), "timeupdate" === e.type && lO.setRange.call(this, this.elements.inputs.seek, n);
                        break;
                    case "playing":
                    case "progress":
                        ! function(e, n) {
                            var r = Ox(n) ? n : 0,
                                i = Lx(e) ? e : t.elements.display.buffer;
                            if (Lx(i)) {
                                i.value = r;
                                var o = i.getElementsByTagName("span")[0];
                                Lx(o) && (o.childNodes[0].nodeValue = r)
                            }
                        }(this.elements.display.buffer, 100 * this.buffered)
                }
            }
        },
        updateRangeFill: function(e) {
            var t = Nx(e) ? e.target : e;
            if (Lx(t) && "range" === t.getAttribute("type")) {
                if (sA(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    var n = lO.formatTime(this.currentTime),
                        r = lO.formatTime(this.duration),
                        i = eO("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", i.replace("{currentTime}", n).replace("{duration}", r))
                } else if (sA(t, this.config.selectors.inputs.volume)) {
                    var o = 100 * t.value;
                    t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
                } else t.setAttribute("aria-valuenow", t.value);
                Vx.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
            }
        },
        updateSeekTooltip: function(e) {
            var t = this;
            if (this.config.tooltips.seek && Lx(this.elements.inputs.seek) && Lx(this.elements.display.seekTooltip) && 0 !== this.duration) {
                var n = "".concat(this.config.classNames.tooltip, "--visible"),
                    r = function(e) {
                        return oA(t.elements.display.seekTooltip, n, e)
                    };
                if (this.touch) r(!1);
                else {
                    var i = 0,
                        o = this.elements.progress.getBoundingClientRect();
                    if (Nx(e)) i = 100 / o.width * (e.pageX - o.left);
                    else {
                        if (!aA(this.elements.display.seekTooltip, n)) return;
                        i = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    i < 0 ? i = 0 : i > 100 && (i = 100), lO.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i), this.elements.display.seekTooltip.style.left = "".concat(i, "%"), Nx(e) && ["mouseenter", "mouseleave"].includes(e.type) && r("mouseenter" === e.type)
                }
            }
        },
        timeUpdate: function(e) {
            var t = !Lx(this.elements.display.duration) && this.config.invertTime;
            lO.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || lO.updateProgress.call(this, e)
        },
        durationUpdate: function() {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if (this.duration >= Math.pow(2, 32)) return iA(this.elements.display.currentTime, !0), void iA(this.elements.progress, !0);
                Lx(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = Lx(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && lO.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && lO.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), lO.updateSeekTooltip.call(this)
            }
        },
        toggleMenuButton: function(e, t) {
            iA(this.elements.settings.buttons[e], !t)
        },
        updateSetting: function(e, t, n) {
            var r = this.elements.settings.panels[e],
                i = null,
                o = t;
            if ("captions" === e) i = this.currentTrack;
            else {
                if (i = Bx(n) ? this[e] : n, Bx(i) && (i = this.config[e].default), !Bx(this.options[e]) && !this.options[e].includes(i)) return void this.debug.warn("Unsupported value of '".concat(i, "' for ").concat(e));
                if (!this.config[e].options.includes(i)) return void this.debug.warn("Disabled value of '".concat(i, "' for ").concat(e))
            }
            if (Lx(o) || (o = r && r.querySelector('[role="menu"]')), Lx(o)) {
                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = lO.getLabel.call(this, e, i);
                var a = o && o.querySelector('[value="'.concat(i, '"]'));
                Lx(a) && (a.checked = !0)
            }
        },
        getLabel: function(e, t) {
            switch (e) {
                case "speed":
                    return 1 === t ? eO("normal", this.config) : "".concat(t, "&times;");
                case "quality":
                    if (Ox(t)) {
                        var n = eO("qualityLabel.".concat(t), this.config);
                        return n.length ? n : "".concat(t, "p")
                    }
                    return XA(t);
                case "captions":
                    return pO.getLabel.call(this);
                default:
                    return null
            }
        },
        setQualityMenu: function(e) {
            var t = this;
            if (Lx(this.elements.settings.panels.quality)) {
                var n = "quality",
                    r = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                jx(e) && (this.options.quality = OA(e).filter((function(e) {
                    return t.config.quality.options.includes(e)
                })));
                var i = !Bx(this.options.quality) && this.options.quality.length > 1;
                if (lO.toggleMenuButton.call(this, n, i), tA(r), lO.checkMenu.call(this), i) {
                    var o = function(e) {
                        var n = eO("qualityBadge.".concat(e), t.config);
                        return n.length ? lO.createBadge.call(t, n) : null
                    };
                    this.options.quality.sort((function(e, n) {
                        var r = t.config.quality.options;
                        return r.indexOf(e) > r.indexOf(n) ? 1 : -1
                    })).forEach((function(e) {
                        lO.createMenuItem.call(t, {
                            value: e,
                            list: r,
                            type: n,
                            title: lO.getLabel.call(t, "quality", e),
                            badge: o(e)
                        })
                    })), lO.updateSetting.call(this, n, r)
                }
            }
        },
        setCaptionsMenu: function() {
            var e = this;
            if (Lx(this.elements.settings.panels.captions)) {
                var t = "captions",
                    n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                    r = pO.getTracks.call(this),
                    i = Boolean(r.length);
                if (lO.toggleMenuButton.call(this, t, i), tA(n), lO.checkMenu.call(this), i) {
                    var o = r.map((function(t, r) {
                        return {
                            value: r,
                            checked: e.captions.toggled && e.currentTrack === r,
                            title: pO.getLabel.call(e, t),
                            badge: t.language && lO.createBadge.call(e, t.language.toUpperCase()),
                            list: n,
                            type: "language"
                        }
                    }));
                    o.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: eO("disabled", this.config),
                        list: n,
                        type: "language"
                    }), o.forEach(lO.createMenuItem.bind(this)), lO.updateSetting.call(this, t, n)
                }
            }
        },
        setSpeedMenu: function() {
            var e = this;
            if (Lx(this.elements.settings.panels.speed)) {
                var t = "speed",
                    n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                this.options.speed = this.options.speed.filter((function(t) {
                    return t >= e.minimumSpeed && t <= e.maximumSpeed
                }));
                var r = !Bx(this.options.speed) && this.options.speed.length > 1;
                lO.toggleMenuButton.call(this, t, r), tA(n), lO.checkMenu.call(this), r && (this.options.speed.forEach((function(r) {
                    lO.createMenuItem.call(e, {
                        value: r,
                        list: n,
                        type: t,
                        title: lO.getLabel.call(e, "speed", r)
                    })
                })), lO.updateSetting.call(this, t, n))
            }
        },
        checkMenu: function() {
            var e = this.elements.settings.buttons,
                t = !Bx(e) && Object.values(e).some((function(e) {
                    return !e.hidden
                }));
            iA(this.elements.settings.menu, !t)
        },
        focusFirstMenuItem: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.elements.settings.popup.hidden) {
                var n = e;
                Lx(n) || (n = Object.values(this.elements.settings.panels).find((function(e) {
                    return !e.hidden
                })));
                var r = n.querySelector('[role^="menuitem"]');
                lA.call(this, r, t)
            }
        },
        toggleMenu: function(e) {
            var t = this.elements.settings.popup,
                n = this.elements.buttons.settings;
            if (Lx(t) && Lx(n)) {
                var r = t.hidden,
                    i = r;
                if (Cx(e)) i = e;
                else if (Mx(e) && 27 === e.which) i = !1;
                else if (Nx(e)) {
                    var o = Ix(e.composedPath) ? e.composedPath()[0] : e.target,
                        a = t.contains(o);
                    if (a || !a && e.target !== n && i) return
                }
                n.setAttribute("aria-expanded", i), iA(t, !i), oA(this.elements.container, this.config.classNames.menu.open, i), i && Mx(e) ? lO.focusFirstMenuItem.call(this, null, !0) : i || r || lA.call(this, n, Mx(e))
            }
        },
        getMenuSize: function(e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            var n = t.scrollWidth,
                r = t.scrollHeight;
            return eA(t), {
                width: n,
                height: r
            }
        },
        showMenuPanel: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
            if (Lx(r)) {
                var i = r.parentNode,
                    o = Array.from(i.children).find((function(e) {
                        return !e.hidden
                    }));
                if (pA.transitions && !pA.reducedMotion) {
                    i.style.width = "".concat(o.scrollWidth, "px"), i.style.height = "".concat(o.scrollHeight, "px");
                    var a = lO.getMenuSize.call(this, r),
                        s = function t(n) {
                            n.target === i && ["width", "height"].includes(n.propertyName) && (i.style.width = "", i.style.height = "", vA.call(e, i, qx, t))
                        };
                    mA.call(this, i, qx, s), i.style.width = "".concat(a.width, "px"), i.style.height = "".concat(a.height, "px")
                }
                iA(o, !0), iA(r, !1), lO.focusFirstMenuItem.call(this, r, n)
            }
        },
        setDownloadUrl: function() {
            var e = this.elements.buttons.download;
            Lx(e) && e.setAttribute("href", this.download)
        },
        create: function(e) {
            var t = this,
                n = lO.bindMenuItemShortcuts,
                r = lO.createButton,
                i = lO.createProgress,
                o = lO.createRange,
                a = lO.createTime,
                s = lO.setQualityMenu,
                c = lO.setSpeedMenu,
                u = lO.showMenuPanel;
            this.elements.controls = null, jx(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(r.call(this, "play-large"));
            var l = Qx("div", rA(this.config.selectors.controls.wrapper));
            this.elements.controls = l;
            var f = {
                class: "plyr__controls__item"
            };
            return OA(jx(this.config.controls) ? this.config.controls : []).forEach((function(s) {
                if ("restart" === s && l.appendChild(r.call(t, "restart", f)), "rewind" === s && l.appendChild(r.call(t, "rewind", f)), "play" === s && l.appendChild(r.call(t, "play", f)), "fast-forward" === s && l.appendChild(r.call(t, "fast-forward", f)), "progress" === s) {
                    var c = Qx("div", {
                            class: "".concat(f.class, " plyr__progress__container")
                        }),
                        h = Qx("div", rA(t.config.selectors.progress));
                    if (h.appendChild(o.call(t, "seek", {
                            id: "plyr-seek-".concat(e.id)
                        })), h.appendChild(i.call(t, "buffer")), t.config.tooltips.seek) {
                        var p = Qx("span", {
                            class: t.config.classNames.tooltip
                        }, "00:00");
                        h.appendChild(p), t.elements.display.seekTooltip = p
                    }
                    t.elements.progress = h, c.appendChild(t.elements.progress), l.appendChild(c)
                }
                if ("current-time" === s && l.appendChild(a.call(t, "currentTime", f)), "duration" === s && l.appendChild(a.call(t, "duration", f)), "mute" === s || "volume" === s) {
                    var d = t.elements.volume;
                    if (Lx(d) && l.contains(d) || (d = Qx("div", Kx({}, f, {
                            class: "".concat(f.class, " plyr__volume").trim()
                        })), t.elements.volume = d, l.appendChild(d)), "mute" === s && d.appendChild(r.call(t, "mute")), "volume" === s && !Vx.isIos) {
                        var g = {
                            max: 1,
                            step: .05,
                            value: t.config.volume
                        };
                        d.appendChild(o.call(t, "volume", Kx(g, {
                            id: "plyr-volume-".concat(e.id)
                        })))
                    }
                }
                if ("captions" === s && l.appendChild(r.call(t, "captions", f)), "settings" === s && !Bx(t.config.settings)) {
                    var m = Qx("div", Kx({}, f, {
                        class: "".concat(f.class, " plyr__menu").trim(),
                        hidden: ""
                    }));
                    m.appendChild(r.call(t, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-".concat(e.id),
                        "aria-expanded": !1
                    }));
                    var v = Qx("div", {
                            class: "plyr__menu__container",
                            id: "plyr-settings-".concat(e.id),
                            hidden: ""
                        }),
                        y = Qx("div"),
                        b = Qx("div", {
                            id: "plyr-settings-".concat(e.id, "-home")
                        }),
                        w = Qx("div", {
                            role: "menu"
                        });
                    b.appendChild(w), y.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function(r) {
                        var i = Qx("button", Kx(rA(t.config.selectors.buttons.settings), {
                            type: "button",
                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        n.call(t, i, r), mA.call(t, i, "click", (function() {
                            u.call(t, r, !1)
                        }));
                        var o = Qx("span", null, eO(r, t.config)),
                            a = Qx("span", {
                                class: t.config.classNames.menu.value
                            });
                        a.innerHTML = e[r], o.appendChild(a), i.appendChild(o), w.appendChild(i);
                        var s = Qx("div", {
                                id: "plyr-settings-".concat(e.id, "-").concat(r),
                                hidden: ""
                            }),
                            c = Qx("button", {
                                type: "button",
                                class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                            });
                        c.appendChild(Qx("span", {
                            "aria-hidden": !0
                        }, eO(r, t.config))), c.appendChild(Qx("span", {
                            class: t.config.classNames.hidden
                        }, eO("menuBack", t.config))), mA.call(t, s, "keydown", (function(e) {
                            37 === e.which && (e.preventDefault(), e.stopPropagation(), u.call(t, "home", !0))
                        }), !1), mA.call(t, c, "click", (function() {
                            u.call(t, "home", !1)
                        })), s.appendChild(c), s.appendChild(Qx("div", {
                            role: "menu"
                        })), y.appendChild(s), t.elements.settings.buttons[r] = i, t.elements.settings.panels[r] = s
                    })), v.appendChild(y), m.appendChild(v), l.appendChild(m), t.elements.settings.popup = v, t.elements.settings.menu = m
                }
                if ("pip" === s && pA.pip && l.appendChild(r.call(t, "pip", f)), "airplay" === s && pA.airplay && l.appendChild(r.call(t, "airplay", f)), "download" === s) {
                    var _ = Kx({}, f, {
                        element: "a",
                        href: t.download,
                        target: "_blank"
                    });
                    t.isHTML5 && (_.download = "");
                    var E = t.config.urls.download;
                    !Fx(E) && t.isEmbed && Kx(_, {
                        icon: "logo-".concat(t.provider),
                        label: t.provider
                    }), l.appendChild(r.call(t, "download", _))
                }
                "fullscreen" === s && l.appendChild(r.call(t, "fullscreen", f))
            })), this.isHTML5 && s.call(this, AA.getQualityOptions.call(this)), c.call(this), l
        },
        inject: function() {
            var e = this;
            if (this.config.loadSprite) {
                var t = lO.getIconUrl.call(this);
                t.cors && rO(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            var n = null;
            this.elements.controls = null;
            var r = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                },
                i = !0;
            Ix(this.config.controls) && (this.config.controls = this.config.controls.call(this, r)), this.config.controls || (this.config.controls = []), Lx(this.config.controls) || Px(this.config.controls) ? n = this.config.controls : (n = lO.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: pO.getLabel.call(this)
            }), i = !1);
            var o, a;
            if (i && Px(this.config.controls) && (o = n, Object.entries(r).forEach((function(e) {
                    var t = bs(e, 2),
                        n = t[0],
                        r = t[1];
                    o = KA(o, "{".concat(n, "}"), r)
                })), n = o), Px(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), Lx(a) || (a = this.elements.container), a[Lx(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), Lx(this.elements.controls) || lO.findElements.call(this), !Bx(this.elements.buttons)) {
                var s = function(t) {
                    var n = e.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: function() {
                            return aA(t, n)
                        },
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            oA(t, n, e)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) {
                    jx(e) || Rx(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e)
                }))
            }
            if (Vx.isEdge && Hx(a), this.config.tooltips.controls) {
                var c = this.config,
                    u = c.classNames,
                    l = c.selectors,
                    f = "".concat(l.controls.wrapper, " ").concat(l.labels, " .").concat(u.hidden),
                    h = cA.call(this, f);
                Array.from(h).forEach((function(t) {
                    oA(t, e.config.classNames.hidden, !1), oA(t, e.config.classNames.tooltip, !0)
                }))
            }
        }
    };

    function fO(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = e;
        if (t) {
            var r = document.createElement("a");
            r.href = n, n = r.href
        }
        try {
            return new URL(n)
        } catch (e) {
            return null
        }
    }

    function hO(e) {
        var t = new URLSearchParams;
        return Ax(e) && Object.entries(e).forEach((function(e) {
            var n = bs(e, 2),
                r = n[0],
                i = n[1];
            t.set(r, i)
        })), t
    }
    var pO = {
            setup: function() {
                if (this.supported.ui)
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !pA.textTracks) jx(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && lO.setCaptionsMenu.call(this);
                    else {
                        if (Lx(this.elements.captions) || (this.elements.captions = Qx("div", rA(this.config.selectors.captions)), function(e, t) {
                                Lx(e) && Lx(t) && t.parentNode.insertBefore(e, t.nextSibling)
                            }(this.elements.captions, this.elements.wrapper)), Vx.isIE && window.URL) {
                            var e = this.media.querySelectorAll("track");
                            Array.from(e).forEach((function(e) {
                                var t = e.getAttribute("src"),
                                    n = fO(t);
                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && nO(t, "blob").then((function(t) {
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                })).catch((function() {
                                    eA(e)
                                }))
                            }))
                        }
                        var t = OA((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) {
                                return e.split("-")[0]
                            }))),
                            n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        if ("auto" === n) n = bs(t, 1)[0];
                        var r = this.storage.get("captions");
                        if (Cx(r) || (r = this.config.captions.active), Object.assign(this.captions, {
                                toggled: !1,
                                active: r,
                                language: n,
                                languages: t
                            }), this.isHTML5) {
                            var i = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            mA.call(this, this.media.textTracks, i, pO.update.bind(this))
                        }
                        setTimeout(pO.update.bind(this), 0)
                    }
            },
            update: function() {
                var e = this,
                    t = pO.getTracks.call(this, !0),
                    n = this.captions,
                    r = n.active,
                    i = n.language,
                    o = n.meta,
                    a = n.currentTrackNode,
                    s = Boolean(t.find((function(e) {
                        return e.language === i
                    })));
                this.isHTML5 && this.isVideo && t.filter((function(e) {
                    return !o.get(e)
                })).forEach((function(t) {
                    e.debug.log("Track added", t), o.set(t, {
                        default: "showing" === t.mode
                    }), "showing" === t.mode && (t.mode = "hidden"), mA.call(e, t, "cuechange", (function() {
                        return pO.updateCues.call(e)
                    }))
                })), (s && this.language !== i || !t.includes(a)) && (pO.setLanguage.call(this, i), pO.toggle.call(this, r && s)), oA(this.elements.container, this.config.classNames.captions.enabled, !Bx(t)), jx(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && lO.setCaptionsMenu.call(this)
            },
            toggle: function(e) {
                var t = this,
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (this.supported.ui) {
                    var r = this.captions.toggled,
                        i = this.config.classNames.captions.active,
                        o = xx(e) ? !r : e;
                    if (o !== r) {
                        if (n || (this.captions.active = o, this.storage.set({
                                captions: o
                            })), !this.language && o && !n) {
                            var a = pO.getTracks.call(this),
                                s = pO.findTrack.call(this, [this.captions.language].concat(ws(this.captions.languages)), !0);
                            return this.captions.language = s.language, void pO.set.call(this, a.indexOf(s))
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), oA(this.elements.container, i, o), this.captions.toggled = o, lO.updateSetting.call(this, "captions"), bA.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
                    }
                    setTimeout((function() {
                        o && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden")
                    }))
                }
            },
            set: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = pO.getTracks.call(this);
                if (-1 !== e)
                    if (Ox(e))
                        if (e in n) {
                            if (this.captions.currentTrack !== e) {
                                this.captions.currentTrack = e;
                                var r = n[e],
                                    i = r || {},
                                    o = i.language;
                                this.captions.currentTrackNode = r, lO.updateSetting.call(this, "captions"), t || (this.captions.language = o, this.storage.set({
                                    language: o
                                })), this.isVimeo && this.embed.enableTextTrack(o), bA.call(this, this.media, "languagechange")
                            }
                            pO.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && pO.updateCues.call(this)
                        } else this.debug.warn("Track not found", e);
                else this.debug.warn("Invalid caption argument", e);
                else pO.toggle.call(this, !1, t)
            },
            setLanguage: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (Px(e)) {
                    var n = e.toLowerCase();
                    this.captions.language = n;
                    var r = pO.getTracks.call(this),
                        i = pO.findTrack.call(this, [n]);
                    pO.set.call(this, r.indexOf(i), t)
                } else this.debug.warn("Invalid language argument", e)
            },
            getTracks: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = Array.from((this.media || {}).textTracks || []);
                return n.filter((function(n) {
                    return !e.isHTML5 || t || e.captions.meta.has(n)
                })).filter((function(e) {
                    return ["captions", "subtitles"].includes(e.kind)
                }))
            },
            findTrack: function(e) {
                var t, n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = pO.getTracks.call(this),
                    o = function(e) {
                        return Number((n.captions.meta.get(e) || {}).default)
                    },
                    a = Array.from(i).sort((function(e, t) {
                        return o(t) - o(e)
                    }));
                return e.every((function(e) {
                    return !(t = a.find((function(t) {
                        return t.language === e
                    })))
                })), t || (r ? a[0] : void 0)
            },
            getCurrentTrack: function() {
                return pO.getTracks.call(this)[this.currentTrack]
            },
            getLabel: function(e) {
                var t = e;
                return !Ux(t) && pA.textTracks && this.captions.toggled && (t = pO.getCurrentTrack.call(this)), Ux(t) ? Bx(t.label) ? Bx(t.language) ? eO("enabled", this.config) : e.language.toUpperCase() : t.label : eO("disabled", this.config)
            },
            updateCues: function(e) {
                if (this.supported.ui)
                    if (Lx(this.elements.captions))
                        if (xx(e) || Array.isArray(e)) {
                            var t = e;
                            if (!t) {
                                var n = pO.getCurrentTrack.call(this);
                                t = Array.from((n || {}).activeCues || []).map((function(e) {
                                    return e.getCueAsHTML()
                                })).map(QA)
                            }
                            var r = t.map((function(e) {
                                return e.trim()
                            })).join("\n");
                            if (r !== this.elements.captions.innerHTML) {
                                tA(this.elements.captions);
                                var i = Qx("span", rA(this.config.selectors.caption));
                                i.innerHTML = r, this.elements.captions.appendChild(i), bA.call(this, this.media, "cuechange")
                            }
                        } else this.debug.warn("updateCues: Invalid input", e);
                else this.debug.warn("No captions element to render to")
            }
        },
        dO = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            playsinline: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: null,
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.6.3/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                forced: !1,
                onChange: null
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            captions: {
                active: !1,
                language: "auto",
                update: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                pip: "PIP",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD"
                }
            },
            urls: {
                download: null,
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/oembed.json?url={0}"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                },
                googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption"
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: {
                    time: "plyr__time"
                },
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                tabFocus: "plyr__tab-focus",
                previewThumbnails: {
                    thumbContainer: "plyr__preview-thumb",
                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                    imageContainer: "plyr__preview-thumb__image-container",
                    timeContainer: "plyr__preview-thumb__time-container",
                    scrubbingContainer: "plyr__preview-scrubbing",
                    scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                }
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            ads: {
                enabled: !1,
                publisherId: "",
                tagUrl: ""
            },
            previewThumbnails: {
                enabled: !1,
                src: ""
            },
            vimeo: {
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: !1,
                customControls: !0,
                referrerPolicy: null,
                premium: !1
            },
            youtube: {
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                customControls: !0,
                noCookie: !1
            }
        },
        gO = "picture-in-picture",
        mO = "inline",
        vO = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        yO = "audio",
        bO = "video";
    var wO = function() {},
        _O = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                hs(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
            }
            return ds(e, [{
                key: "log",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : wO
                }
            }, {
                key: "warn",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : wO
                }
            }, {
                key: "error",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : wO
                }
            }]), e
        }(),
        EO = function() {
            function e(t) {
                var n = this;
                hs(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                    x: 0,
                    y: 0
                }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                    return (Element.prototype.closest || function() {
                        var e = this;
                        do {
                            if (sA.matches(e, t)) return e;
                            e = e.parentElement || e.parentNode
                        } while (null !== e && 1 === e.nodeType);
                        return null
                    }).call(e, t)
                }(this.player.elements.container, t.config.fullscreen.container), mA.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
                    n.onChange()
                })), mA.call(this.player, this.player.elements.container, "dblclick", (function(e) {
                    Lx(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.player.listeners.proxy(e, n.toggle, "fullscreen")
                })), mA.call(this, this.player.elements.container, "keydown", (function(e) {
                    return n.trapFocus(e)
                })), this.update()
            }
            return ds(e, [{
                key: "onChange",
                value: function() {
                    if (this.enabled) {
                        var e = this.player.elements.buttons.fullscreen;
                        Lx(e) && (e.pressed = this.active);
                        var t = this.target === this.player.media ? this.target : this.player.elements.container;
                        bA.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                    }
                }
            }, {
                key: "toggleFallback",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e ? this.scrollPosition = {
                            x: window.scrollX || 0,
                            y: window.scrollY || 0
                        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", oA(this.target, this.player.config.classNames.fullscreen.fallback, e), Vx.isIos) {
                        var t = document.head.querySelector('meta[name="viewport"]'),
                            n = "viewport-fit=cover";
                        t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                        var r = Px(t.content) && t.content.includes(n);
                        e ? (this.cleanupViewport = !r, r || (t.content += ",".concat(n))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) {
                            return e.trim() !== n
                        })).join(","))
                    }
                    this.onChange()
                }
            }, {
                key: "trapFocus",
                value: function(e) {
                    if (!Vx.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                        var t = document.activeElement,
                            n = cA.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                            r = bs(n, 1)[0],
                            i = n[n.length - 1];
                        t !== i || e.shiftKey ? t === r && e.shiftKey && (i.focus(), e.preventDefault()) : (r.focus(), e.preventDefault())
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var t;
                    this.enabled ? (t = this.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", this.player.debug.log("".concat(t, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled");
                    oA(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                }
            }, {
                key: "enter",
                value: function() {
                    this.enabled && (Vx.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !e.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? Bx(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
                        navigationUI: "hide"
                    }))
                }
            }, {
                key: "exit",
                value: function() {
                    if (this.enabled)
                        if (Vx.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), EA(this.player.play());
                        else if (!e.native || this.forceFallback) this.toggleFallback(!1);
                    else if (this.prefix) {
                        if (!Bx(this.prefix)) {
                            var t = "moz" === this.prefix ? "Cancel" : "Exit";
                            document["".concat(this.prefix).concat(t).concat(this.property)]()
                        }
                    } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                }
            }, {
                key: "toggle",
                value: function() {
                    this.active ? this.exit() : this.enter()
                }
            }, {
                key: "usingNative",
                get: function() {
                    return e.native && !this.forceFallback
                }
            }, {
                key: "enabled",
                get: function() {
                    return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                }
            }, {
                key: "active",
                get: function() {
                    if (!this.enabled) return !1;
                    if (!e.native || this.forceFallback) return aA(this.target, this.player.config.classNames.fullscreen.fallback);
                    var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
                    return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
                }
            }, {
                key: "target",
                get: function() {
                    return Vx.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                }
            }], [{
                key: "native",
                get: function() {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                }
            }, {
                key: "prefix",
                get: function() {
                    if (Ix(document.exitFullscreen)) return "";
                    var e = "";
                    return ["webkit", "moz", "ms"].some((function(t) {
                        return !(!Ix(document["".concat(t, "ExitFullscreen")]) && !Ix(document["".concat(t, "CancelFullScreen")])) && (e = t, !0)
                    })), e
                }
            }, {
                key: "property",
                get: function() {
                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                }
            }]), e
        }(),
        kO = Math.sign || function(e) {
            return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
        };

    function SO(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise((function(n, r) {
            var i = new Image,
                o = function() {
                    delete i.onload, delete i.onerror, (i.naturalWidth >= t ? n : r)(i)
                };
            Object.assign(i, {
                onload: o,
                onerror: o,
                src: e
            })
        }))
    }
    uv({
        target: "Math",
        stat: !0
    }, {
        sign: kO
    });
    var TO = {
            addStyleHook: function() {
                oA(this.elements.container, this.config.selectors.container.replace(".", ""), !0), oA(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function() {
                var e = this;
                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void TO.toggleNativeControls.call(this, !0);
                Lx(this.elements.controls) || (lO.inject.call(this), this.listeners.controls()), TO.toggleNativeControls.call(this), this.isHTML5 && pO.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, lO.updateVolume.call(this), lO.timeUpdate.call(this), TO.checkPlaying.call(this), oA(this.elements.container, this.config.classNames.pip.supported, pA.pip && this.isHTML5 && this.isVideo), oA(this.elements.container, this.config.classNames.airplay.supported, pA.airplay && this.isHTML5), oA(this.elements.container, this.config.classNames.isIos, Vx.isIos), oA(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() {
                    bA.call(e, e.media, "ready")
                }), 0), TO.setTitle.call(this), this.poster && TO.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && lO.durationUpdate.call(this)
            },
            setTitle: function() {
                var e = eO("play", this.config);
                if (Px(this.config.title) && !Bx(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) {
                        t.setAttribute("aria-label", e)
                    })), this.isEmbed) {
                    var t = uA.call(this, "iframe");
                    if (!Lx(t)) return;
                    var n = Bx(this.config.title) ? "video" : this.config.title,
                        r = eO("frameTitle", this.config);
                    t.setAttribute("title", r.replace("{title}", n))
                }
            },
            togglePoster: function(e) {
                oA(this.elements.container, this.config.classNames.posterEnabled, e)
            },
            setPoster: function(e) {
                var t = this,
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), _A.call(this).then((function() {
                    return SO(e)
                })).catch((function(n) {
                    throw e === t.poster && TO.togglePoster.call(t, !1), n
                })).then((function() {
                    if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                })).then((function() {
                    return Object.assign(t.elements.poster.style, {
                        backgroundImage: "url('".concat(e, "')"),
                        backgroundSize: ""
                    }), TO.togglePoster.call(t, !0), e
                })))
            },
            checkPlaying: function(e) {
                var t = this;
                oA(this.elements.container, this.config.classNames.playing, this.playing), oA(this.elements.container, this.config.classNames.paused, this.paused), oA(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) {
                    Object.assign(e, {
                        pressed: t.playing
                    }), e.setAttribute("aria-label", eO(t.playing ? "pause" : "play", t.config))
                })), Nx(e) && "timeupdate" === e.type || TO.toggleControls.call(this)
            },
            checkLoading: function(e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() {
                    oA(t.elements.container, t.config.classNames.loading, t.loading), TO.toggleControls.call(t)
                }), this.loading ? 250 : 0)
            },
            toggleControls: function(e) {
                var t = this.elements.controls;
                if (t && this.config.hideControls) {
                    var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                    this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                }
            },
            migrateStyles: function() {
                var e = this;
                Object.values(vs({}, this.media.style)).filter((function(e) {
                    return !Bx(e) && Px(e) && e.startsWith("--plyr")
                })).forEach((function(t) {
                    e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t)
                })), Bx(this.media.style) && this.media.removeAttribute("style")
            }
        },
        xO = function() {
            function e(t) {
                hs(this, e), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
            }
            return ds(e, [{
                key: "handleKey",
                value: function(e) {
                    var t = this.player,
                        n = t.elements,
                        r = e.keyCode ? e.keyCode : e.which,
                        i = "keydown" === e.type,
                        o = i && r === this.lastKey;
                    if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && Ox(r)) {
                        if (i) {
                            var a = document.activeElement;
                            if (Lx(a)) {
                                var s = t.config.selectors.editable;
                                if (a !== n.inputs.seek && sA(a, s)) return;
                                if (32 === e.which && sA(a, 'button, [role^="menuitem"]')) return
                            }
                            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(r) && (e.preventDefault(), e.stopPropagation()), r) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    o || (t.currentTime = t.duration / 10 * (r - 48));
                                    break;
                                case 32:
                                case 75:
                                    o || EA(t.togglePlay());
                                    break;
                                case 38:
                                    t.increaseVolume(.1);
                                    break;
                                case 40:
                                    t.decreaseVolume(.1);
                                    break;
                                case 77:
                                    o || (t.muted = !t.muted);
                                    break;
                                case 39:
                                    t.forward();
                                    break;
                                case 37:
                                    t.rewind();
                                    break;
                                case 70:
                                    t.fullscreen.toggle();
                                    break;
                                case 67:
                                    o || t.toggleCaptions();
                                    break;
                                case 76:
                                    t.loop = !t.loop
                            }
                            27 === r && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = r
                        } else this.lastKey = null
                    }
                }
            }, {
                key: "toggleMenu",
                value: function(e) {
                    lO.toggleMenu.call(this.player, e)
                }
            }, {
                key: "firstTouch",
                value: function() {
                    var e = this.player,
                        t = e.elements;
                    e.touch = !0, oA(t.container, e.config.classNames.isTouch, !0)
                }
            }, {
                key: "setTabFocus",
                value: function(e) {
                    var t = this.player,
                        n = t.elements;
                    if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                        "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                        var r, i = e.timeStamp - this.lastKeyDown <= 20;
                        if ("focus" !== e.type || i) r = t.config.classNames.tabFocus, oA(cA.call(t, ".".concat(r)), r, !1), "focusout" !== e.type && (this.focusTimer = setTimeout((function() {
                            var e = document.activeElement;
                            n.container.contains(e) && oA(document.activeElement, t.config.classNames.tabFocus, !0)
                        }), 10))
                    }
                }
            }, {
                key: "global",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.player;
                    t.config.keyboard.global && gA.call(t, window, "keydown keyup", this.handleKey, e, !1), gA.call(t, document.body, "click", this.toggleMenu, e), yA.call(t, document.body, "touchstart", this.firstTouch), gA.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                }
            }, {
                key: "container",
                value: function() {
                    var e = this.player,
                        t = e.config,
                        n = e.elements,
                        r = e.timers;
                    !t.keyboard.global && t.keyboard.focused && mA.call(e, n.container, "keydown keyup", this.handleKey, !1), mA.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                        var i = n.controls;
                        i && "enterfullscreen" === t.type && (i.pressed = !1, i.hover = !1);
                        var o = 0;
                        ["touchstart", "touchmove", "mousemove"].includes(t.type) && (TO.toggleControls.call(e, !0), o = e.touch ? 3e3 : 2e3), clearTimeout(r.controls), r.controls = setTimeout((function() {
                            return TO.toggleControls.call(e, !1)
                        }), o)
                    }));
                    var i = function(t) {
                            if (!t) return xA.call(e);
                            var r = n.container.getBoundingClientRect(),
                                i = r.width,
                                o = r.height;
                            return xA.call(e, "".concat(i, ":").concat(o))
                        },
                        o = function() {
                            clearTimeout(r.resized), r.resized = setTimeout(i, 50)
                        };
                    mA.call(e, n.container, "enterfullscreen exitfullscreen", (function(t) {
                        var r = e.fullscreen,
                            a = r.target,
                            s = r.usingNative;
                        if (a === n.container && (e.isEmbed || !Bx(e.config.ratio))) {
                            var c = "enterfullscreen" === t.type,
                                u = i(c);
                            u.padding;
                            ! function(t, n, r) {
                                if (e.isVimeo && !e.config.vimeo.premium) {
                                    var i = e.elements.wrapper.firstChild,
                                        o = bs(t, 2)[1],
                                        a = bs(TA.call(e), 2),
                                        s = a[0],
                                        c = a[1];
                                    i.style.maxWidth = r ? "".concat(o / c * s, "px") : null, i.style.margin = r ? "0 auto" : null
                                }
                            }(u.ratio, 0, c), c && setTimeout((function() {
                                return Hx(n.container)
                            }), 100), s || (c ? mA.call(e, window, "resize", o) : vA.call(e, window, "resize", o))
                        }
                    }))
                }
            }, {
                key: "media",
                value: function() {
                    var e = this,
                        t = this.player,
                        n = t.elements;
                    if (mA.call(t, t.media, "timeupdate seeking seeked", (function(e) {
                            return lO.timeUpdate.call(t, e)
                        })), mA.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) {
                            return lO.durationUpdate.call(t, e)
                        })), mA.call(t, t.media, "ended", (function() {
                            t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
                        })), mA.call(t, t.media, "progress playing seeking seeked", (function(e) {
                            return lO.updateProgress.call(t, e)
                        })), mA.call(t, t.media, "volumechange", (function(e) {
                            return lO.updateVolume.call(t, e)
                        })), mA.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) {
                            return TO.checkPlaying.call(t, e)
                        })), mA.call(t, t.media, "waiting canplay seeked playing", (function(e) {
                            return TO.checkLoading.call(t, e)
                        })), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                        var r = uA.call(t, ".".concat(t.config.classNames.video));
                        if (!Lx(r)) return;
                        mA.call(t, n.container, "click", (function(i) {
                            ([n.container, r].includes(i.target) || r.contains(i.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(i, t.restart, "restart"), e.proxy(i, (function() {
                                EA(t.play())
                            }), "play")) : e.proxy(i, (function() {
                                EA(t.togglePlay())
                            }), "play")))
                        }))
                    }
                    t.supported.ui && t.config.disableContextMenu && mA.call(t, n.wrapper, "contextmenu", (function(e) {
                        e.preventDefault()
                    }), !1), mA.call(t, t.media, "volumechange", (function() {
                        t.storage.set({
                            volume: t.volume,
                            muted: t.muted
                        })
                    })), mA.call(t, t.media, "ratechange", (function() {
                        lO.updateSetting.call(t, "speed"), t.storage.set({
                            speed: t.speed
                        })
                    })), mA.call(t, t.media, "qualitychange", (function(e) {
                        lO.updateSetting.call(t, "quality", null, e.detail.quality)
                    })), mA.call(t, t.media, "ready qualitychange", (function() {
                        lO.setDownloadUrl.call(t)
                    }));
                    var i = t.config.events.concat(["keyup", "keydown"]).join(" ");
                    mA.call(t, t.media, i, (function(e) {
                        var r = e.detail,
                            i = void 0 === r ? {} : r;
                        "error" === e.type && (i = t.media.error), bA.call(t, n.container, e.type, !0, i)
                    }))
                }
            }, {
                key: "proxy",
                value: function(e, t, n) {
                    var r = this.player,
                        i = r.config.listeners[n],
                        o = !0;
                    Ix(i) && (o = i.call(r, e)), !1 !== o && Ix(t) && t.call(r, e)
                }
            }, {
                key: "bind",
                value: function(e, t, n, r) {
                    var i = this,
                        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        a = this.player,
                        s = a.config.listeners[r],
                        c = Ix(s);
                    mA.call(a, e, t, (function(e) {
                        return i.proxy(e, n, r)
                    }), o && !c)
                }
            }, {
                key: "controls",
                value: function() {
                    var e = this,
                        t = this.player,
                        n = t.elements,
                        r = Vx.isIE ? "change" : "input";
                    if (n.buttons.play && Array.from(n.buttons.play).forEach((function(n) {
                            e.bind(n, "click", (function() {
                                EA(t.togglePlay())
                            }), "play")
                        })), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", (function() {
                            t.lastSeekTime = Date.now(), t.rewind()
                        }), "rewind"), this.bind(n.buttons.fastForward, "click", (function() {
                            t.lastSeekTime = Date.now(), t.forward()
                        }), "fastForward"), this.bind(n.buttons.mute, "click", (function() {
                            t.muted = !t.muted
                        }), "mute"), this.bind(n.buttons.captions, "click", (function() {
                            return t.toggleCaptions()
                        })), this.bind(n.buttons.download, "click", (function() {
                            bA.call(t, t.media, "download")
                        }), "download"), this.bind(n.buttons.fullscreen, "click", (function() {
                            t.fullscreen.toggle()
                        }), "fullscreen"), this.bind(n.buttons.pip, "click", (function() {
                            t.pip = "toggle"
                        }), "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", (function(e) {
                            e.stopPropagation(), e.preventDefault(), lO.toggleMenu.call(t, e)
                        }), null, !1), this.bind(n.buttons.settings, "keyup", (function(e) {
                            var n = e.which;
                            [13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), lO.toggleMenu.call(t, e)) : lO.focusFirstMenuItem.call(t, null, !0))
                        }), null, !1), this.bind(n.settings.menu, "keydown", (function(e) {
                            27 === e.which && lO.toggleMenu.call(t, e)
                        })), this.bind(n.inputs.seek, "mousedown mousemove", (function(e) {
                            var t = n.progress.getBoundingClientRect(),
                                r = 100 / t.width * (e.pageX - t.left);
                            e.currentTarget.setAttribute("seek-value", r)
                        })), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
                            var n = e.currentTarget,
                                r = e.keyCode ? e.keyCode : e.which,
                                i = "play-on-seeked";
                            if (!Mx(e) || 39 === r || 37 === r) {
                                t.lastSeekTime = Date.now();
                                var o = n.hasAttribute(i),
                                    a = ["mouseup", "touchend", "keyup"].includes(e.type);
                                o && a ? (n.removeAttribute(i), EA(t.play())) : !a && t.playing && (n.setAttribute(i, ""), t.pause())
                            }
                        })), Vx.isIos) {
                        var i = cA.call(t, 'input[type="range"]');
                        Array.from(i).forEach((function(t) {
                            return e.bind(t, r, (function(e) {
                                return Hx(e.target)
                            }))
                        }))
                    }
                    this.bind(n.inputs.seek, r, (function(e) {
                        var n = e.currentTarget,
                            r = n.getAttribute("seek-value");
                        Bx(r) && (r = n.value), n.removeAttribute("seek-value"), t.currentTime = r / n.max * t.duration
                    }), "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", (function(e) {
                        return lO.updateSeekTooltip.call(t, e)
                    })), this.bind(n.progress, "mousemove touchmove", (function(e) {
                        var n = t.previewThumbnails;
                        n && n.loaded && n.startMove(e)
                    })), this.bind(n.progress, "mouseleave touchend click", (function() {
                        var e = t.previewThumbnails;
                        e && e.loaded && e.endMove(!1, !0)
                    })), this.bind(n.progress, "mousedown touchstart", (function(e) {
                        var n = t.previewThumbnails;
                        n && n.loaded && n.startScrubbing(e)
                    })), this.bind(n.progress, "mouseup touchend", (function(e) {
                        var n = t.previewThumbnails;
                        n && n.loaded && n.endScrubbing(e)
                    })), Vx.isWebkit && Array.from(cA.call(t, 'input[type="range"]')).forEach((function(n) {
                        e.bind(n, "input", (function(e) {
                            return lO.updateRangeFill.call(t, e.target)
                        }))
                    })), t.config.toggleInvert && !Lx(n.display.duration) && this.bind(n.display.currentTime, "click", (function() {
                        0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, lO.timeUpdate.call(t))
                    })), this.bind(n.inputs.volume, r, (function(e) {
                        t.volume = e.target.value
                    }), "volume"), this.bind(n.controls, "mouseenter mouseleave", (function(e) {
                        n.controls.hover = !t.touch && "mouseenter" === e.type
                    })), n.fullscreen && Array.from(n.fullscreen.children).filter((function(e) {
                        return !e.contains(n.container)
                    })).forEach((function(r) {
                        e.bind(r, "mouseenter mouseleave", (function(e) {
                            n.controls.hover = !t.touch && "mouseenter" === e.type
                        }))
                    })), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) {
                        n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                    })), this.bind(n.controls, "focusin", (function() {
                        var r = t.config,
                            i = t.timers;
                        oA(n.controls, r.classNames.noTransition, !0), TO.toggleControls.call(t, !0), setTimeout((function() {
                            oA(n.controls, r.classNames.noTransition, !1)
                        }), 0);
                        var o = e.touch ? 3e3 : 4e3;
                        clearTimeout(i.controls), i.controls = setTimeout((function() {
                            return TO.toggleControls.call(t, !1)
                        }), o)
                    })), this.bind(n.inputs.volume, "wheel", (function(e) {
                        var n = e.webkitDirectionInvertedFromDevice,
                            r = bs([e.deltaX, -e.deltaY].map((function(e) {
                                return n ? -e : e
                            })), 2),
                            i = r[0],
                            o = r[1],
                            a = Math.sign(Math.abs(i) > Math.abs(o) ? i : o);
                        t.increaseVolume(a / 50);
                        var s = t.media.volume;
                        (1 === a && s < 1 || -1 === a && s > 0) && e.preventDefault()
                    }), "volume", !1)
                }
            }]), e
        }(),
        AO = Av("splice"),
        OO = Hv("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        PO = Math.max,
        CO = Math.min,
        IO = 9007199254740991,
        jO = "Maximum allowed length exceeded";
    uv({
        target: "Array",
        proto: !0,
        forced: !AO || !OO
    }, {
        splice: function(e, t) {
            var n, r, i, o, a, s, c = fv(this),
                u = qm(c.length),
                l = Wm(e, u),
                f = arguments.length;
            if (0 === f ? n = r = 0 : 1 === f ? (n = 0, r = u - l) : (n = f - 2, r = CO(PO(Fm(t), 0), u - l)), u + n - r > IO) throw TypeError(jO);
            for (i = wv(c, r), o = 0; o < r; o++)(a = l + o) in c && hv(i, o, c[a]);
            if (i.length = r, n < r) {
                for (o = l; o < u - r; o++) s = o + n, (a = o + r) in c ? c[s] = c[a] : delete c[s];
                for (o = u; o > u - r + n; o--) delete c[o - 1]
            } else if (n > r)
                for (o = u - r; o > l; o--) s = o + n - 1, (a = o + r - 1) in c ? c[s] = c[a] : delete c[s];
            for (o = 0; o < n; o++) c[o + l] = arguments[o + 2];
            return c.length = u - r + n, i
        }
    });
    var RO = t((function(e, t) {
        e.exports = function() {
            var e = function() {},
                t = {},
                n = {},
                r = {};

            function i(e, t) {
                e = e.push ? e : [e];
                var i, o, a, s = [],
                    c = e.length,
                    u = c;
                for (i = function(e, n) {
                        n.length && s.push(e), --u || t(s)
                    }; c--;) o = e[c], (a = n[o]) ? i(o, a) : (r[o] = r[o] || []).push(i)
            }

            function o(e, t) {
                if (e) {
                    var i = r[e];
                    if (n[e] = t, i)
                        for (; i.length;) i[0](e, t), i.splice(0, 1)
                }
            }

            function a(t, n) {
                t.call && (t = {
                    success: t
                }), n.length ? (t.error || e)(n) : (t.success || e)(t)
            }

            function s(t, n, r, i) {
                var o, a, c = document,
                    u = r.async,
                    l = (r.numRetries || 0) + 1,
                    f = r.before || e,
                    h = t.replace(/[\?|#].*$/, ""),
                    p = t.replace(/^(css|img)!/, "");
                i = i || 0, /(^css!|\.css$)/.test(h) ? ((a = c.createElement("link")).rel = "stylesheet", a.href = p, (o = "hideFocus" in a) && a.relList && (o = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (a = c.createElement("img")).src = p : ((a = c.createElement("script")).src = t, a.async = void 0 === u || u), a.onload = a.onerror = a.onbeforeload = function(e) {
                    var c = e.type[0];
                    if (o) try {
                        a.sheet.cssText.length || (c = "e")
                    } catch (e) {
                        18 != e.code && (c = "e")
                    }
                    if ("e" == c) {
                        if ((i += 1) < l) return s(t, n, r, i)
                    } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
                    n(t, c, e.defaultPrevented)
                }, !1 !== f(t, a) && c.head.appendChild(a)
            }

            function c(e, t, n) {
                var r, i, o = (e = e.push ? e : [e]).length,
                    a = o,
                    c = [];
                for (r = function(e, n, r) {
                        if ("e" == n && c.push(e), "b" == n) {
                            if (!r) return;
                            c.push(e)
                        }--o || t(c)
                    }, i = 0; i < a; i++) s(e[i], r, n)
            }

            function u(e, n, r) {
                var i, s;
                if (n && n.trim && (i = n), s = (i ? r : n) || {}, i) {
                    if (i in t) throw "LoadJS";
                    t[i] = !0
                }

                function u(t, n) {
                    c(e, (function(e) {
                        a(s, e), t && a({
                            success: t,
                            error: n
                        }, e), o(i, e)
                    }), s)
                }
                if (s.returnPromise) return new Promise(u);
                u()
            }
            return u.ready = function(e, t) {
                return i(e, (function(e) {
                    a(t, e)
                })), u
            }, u.done = function(e) {
                o(e, [])
            }, u.reset = function() {
                t = {}, n = {}, r = {}
            }, u.isDefined = function(e) {
                return e in t
            }, u
        }()
    }));

    function LO(e) {
        return new Promise((function(t, n) {
            RO(e, {
                success: t,
                error: n
            })
        }))
    }

    function NO(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, bA.call(this, this.media, e ? "play" : "pause"))
    }
    var MO = {
        setup: function() {
            var e = this;
            oA(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, xA.call(e), Ax(window.Vimeo) ? MO.ready.call(e) : LO(e.config.urls.vimeo.sdk).then((function() {
                MO.ready.call(e)
            })).catch((function(t) {
                e.debug.warn("Vimeo SDK (player.js) failed to load", t)
            }))
        },
        ready: function() {
            var e = this,
                t = this,
                n = t.config.vimeo,
                r = n.premium,
                i = n.referrerPolicy,
                o = ys(n, ["premium", "referrerPolicy"]);
            r && Object.assign(o, {
                controls: !1,
                sidedock: !1
            });
            var a = hO(vs({
                    loop: t.config.loop.active,
                    autoplay: t.autoplay,
                    muted: t.muted,
                    gesture: "media",
                    playsinline: !this.config.fullscreen.iosNative
                }, o)),
                s = t.media.getAttribute("src");
            Bx(s) && (s = t.media.getAttribute(t.config.attributes.embed.id));
            var c, u = Bx(c = s) ? null : Ox(Number(c)) ? c : c.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : c,
                l = Qx("iframe"),
                f = GA(t.config.urls.vimeo.iframe, u, a);
            if (l.setAttribute("src", f), l.setAttribute("allowfullscreen", ""), l.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), Bx(i) || l.setAttribute("referrerPolicy", i), r || !n.customControls) l.setAttribute("data-poster", t.poster), t.media = nA(l, t.media);
            else {
                var h = Qx("div", {
                    class: t.config.classNames.embedContainer,
                    "data-poster": t.poster
                });
                h.appendChild(l), t.media = nA(h, t.media)
            }
            n.customControls || nO(GA(t.config.urls.vimeo.api, f)).then((function(e) {
                !Bx(e) && e.thumbnail_url && TO.setPoster.call(t, e.thumbnail_url).catch((function() {}))
            })), t.embed = new window.Vimeo.Player(l, {
                autopause: t.config.autopause,
                muted: t.muted
            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                return NO.call(t, !0), t.embed.play()
            }, t.media.pause = function() {
                return NO.call(t, !1), t.embed.pause()
            }, t.media.stop = function() {
                t.pause(), t.currentTime = 0
            };
            var p = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
                get: function() {
                    return p
                },
                set: function(e) {
                    var n = t.embed,
                        r = t.media,
                        i = t.paused,
                        o = t.volume,
                        a = i && !n.hasPlayed;
                    r.seeking = !0, bA.call(t, r, "seeking"), Promise.resolve(a && n.setVolume(0)).then((function() {
                        return n.setCurrentTime(e)
                    })).then((function() {
                        return a && n.pause()
                    })).then((function() {
                        return a && n.setVolume(o)
                    })).catch((function() {}))
                }
            });
            var d = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
                get: function() {
                    return d
                },
                set: function(e) {
                    t.embed.setPlaybackRate(e).then((function() {
                        d = e, bA.call(t, t.media, "ratechange")
                    })).catch((function() {
                        t.options.speed = [1]
                    }))
                }
            });
            var g = t.config.volume;
            Object.defineProperty(t.media, "volume", {
                get: function() {
                    return g
                },
                set: function(e) {
                    t.embed.setVolume(e).then((function() {
                        g = e, bA.call(t, t.media, "volumechange")
                    }))
                }
            });
            var m = t.config.muted;
            Object.defineProperty(t.media, "muted", {
                get: function() {
                    return m
                },
                set: function(e) {
                    var n = !!Cx(e) && e;
                    t.embed.setVolume(n ? 0 : t.config.volume).then((function() {
                        m = n, bA.call(t, t.media, "volumechange")
                    }))
                }
            });
            var v, y = t.config.loop;
            Object.defineProperty(t.media, "loop", {
                get: function() {
                    return y
                },
                set: function(e) {
                    var n = Cx(e) ? e : t.config.loop.active;
                    t.embed.setLoop(n).then((function() {
                        y = n
                    }))
                }
            }), t.embed.getVideoUrl().then((function(e) {
                v = e, lO.setDownloadUrl.call(t)
            })).catch((function(t) {
                e.debug.warn(t)
            })), Object.defineProperty(t.media, "currentSrc", {
                get: function() {
                    return v
                }
            }), Object.defineProperty(t.media, "ended", {
                get: function() {
                    return t.currentTime === t.duration
                }
            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(n) {
                var r = bs(n, 2),
                    i = r[0],
                    o = r[1];
                t.embed.ratio = [i, o], xA.call(e)
            })), t.embed.setAutopause(t.config.autopause).then((function(e) {
                t.config.autopause = e
            })), t.embed.getVideoTitle().then((function(n) {
                t.config.title = n, TO.setTitle.call(e)
            })), t.embed.getCurrentTime().then((function(e) {
                p = e, bA.call(t, t.media, "timeupdate")
            })), t.embed.getDuration().then((function(e) {
                t.media.duration = e, bA.call(t, t.media, "durationchange")
            })), t.embed.getTextTracks().then((function(e) {
                t.media.textTracks = e, pO.setup.call(t)
            })), t.embed.on("cuechange", (function(e) {
                var n = e.cues,
                    r = (void 0 === n ? [] : n).map((function(e) {
                        return function(e) {
                            var t = document.createDocumentFragment(),
                                n = document.createElement("div");
                            return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                        }(e.text)
                    }));
                pO.updateCues.call(t, r)
            })), t.embed.on("loaded", (function() {
                (t.embed.getPaused().then((function(e) {
                    NO.call(t, !e), e || bA.call(t, t.media, "playing")
                })), Lx(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
            })), t.embed.on("bufferstart", (function() {
                bA.call(t, t.media, "waiting")
            })), t.embed.on("bufferend", (function() {
                bA.call(t, t.media, "playing")
            })), t.embed.on("play", (function() {
                NO.call(t, !0), bA.call(t, t.media, "playing")
            })), t.embed.on("pause", (function() {
                NO.call(t, !1)
            })), t.embed.on("timeupdate", (function(e) {
                t.media.seeking = !1, p = e.seconds, bA.call(t, t.media, "timeupdate")
            })), t.embed.on("progress", (function(e) {
                t.media.buffered = e.percent, bA.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && bA.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) {
                    e !== t.media.duration && (t.media.duration = e, bA.call(t, t.media, "durationchange"))
                }))
            })), t.embed.on("seeked", (function() {
                t.media.seeking = !1, bA.call(t, t.media, "seeked")
            })), t.embed.on("ended", (function() {
                t.media.paused = !0, bA.call(t, t.media, "ended")
            })), t.embed.on("error", (function(e) {
                t.media.error = e, bA.call(t, t.media, "error")
            })), n.customControls && setTimeout((function() {
                return TO.build.call(t)
            }), 0)
        }
    };

    function UO(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, bA.call(this, this.media, e ? "play" : "pause"))
    }

    function DO(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
    }
    var FO = {
            setup: function() {
                var e = this;
                if (oA(this.elements.wrapper, this.config.classNames.embed, !0), Ax(window.YT) && Ix(window.YT.Player)) FO.ready.call(this);
                else {
                    var t = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function() {
                        Ix(t) && t(), FO.ready.call(e)
                    }, LO(this.config.urls.youtube.sdk).catch((function(t) {
                        e.debug.warn("YouTube API failed to load", t)
                    }))
                }
            },
            getTitle: function(e) {
                var t = this;
                nO(GA(this.config.urls.youtube.api, e)).then((function(e) {
                    if (Ax(e)) {
                        var n = e.title,
                            r = e.height,
                            i = e.width;
                        t.config.title = n, TO.setTitle.call(t), t.embed.ratio = [i, r]
                    }
                    xA.call(t)
                })).catch((function() {
                    xA.call(t)
                }))
            },
            ready: function() {
                var e = this,
                    t = e.config.youtube,
                    n = e.media && e.media.getAttribute("id");
                if (Bx(n) || !n.startsWith("youtube-")) {
                    var r = e.media.getAttribute("src");
                    Bx(r) && (r = e.media.getAttribute(this.config.attributes.embed.id));
                    var i, o, a = Bx(i = r) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i,
                        s = Qx("div", {
                            id: (o = e.provider, "".concat(o, "-").concat(Math.floor(1e4 * Math.random()))),
                            "data-poster": t.customControls ? e.poster : void 0
                        });
                    if (e.media = nA(s, e.media), t.customControls) {
                        var c = function(e) {
                            return "https://i.ytimg.com/vi/".concat(a, "/").concat(e, "default.jpg")
                        };
                        SO(c("maxres"), 121).catch((function() {
                            return SO(c("sd"), 121)
                        })).catch((function() {
                            return SO(c("hq"))
                        })).then((function(t) {
                            return TO.setPoster.call(e, t.src)
                        })).then((function(t) {
                            t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                        })).catch((function() {}))
                    }
                    e.embed = new window.YT.Player(e.media, {
                        videoId: a,
                        host: DO(t),
                        playerVars: Kx({}, {
                            autoplay: e.config.autoplay ? 1 : 0,
                            hl: e.config.hl,
                            controls: e.supported.ui && t.customControls ? 0 : 1,
                            disablekb: 1,
                            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language,
                            widget_referrer: window ? window.location.href : null
                        }, t),
                        events: {
                            onError: function(t) {
                                if (!e.media.error) {
                                    var n = t.data,
                                        r = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        } [n] || "An unknown error occured";
                                    e.media.error = {
                                        code: n,
                                        message: r
                                    }, bA.call(e, e.media, "error")
                                }
                            },
                            onPlaybackRateChange: function(t) {
                                var n = t.target;
                                e.media.playbackRate = n.getPlaybackRate(), bA.call(e, e.media, "ratechange")
                            },
                            onReady: function(n) {
                                if (!Ix(e.media.play)) {
                                    var r = n.target;
                                    FO.getTitle.call(e, a), e.media.play = function() {
                                        UO.call(e, !0), r.playVideo()
                                    }, e.media.pause = function() {
                                        UO.call(e, !1), r.pauseVideo()
                                    }, e.media.stop = function() {
                                        r.stopVideo()
                                    }, e.media.duration = r.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                        get: function() {
                                            return Number(r.getCurrentTime())
                                        },
                                        set: function(t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, bA.call(e, e.media, "seeking"), r.seekTo(t)
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: function() {
                                            return r.getPlaybackRate()
                                        },
                                        set: function(e) {
                                            r.setPlaybackRate(e)
                                        }
                                    });
                                    var i = e.config.volume;
                                    Object.defineProperty(e.media, "volume", {
                                        get: function() {
                                            return i
                                        },
                                        set: function(t) {
                                            i = t, r.setVolume(100 * i), bA.call(e, e.media, "volumechange")
                                        }
                                    });
                                    var o = e.config.muted;
                                    Object.defineProperty(e.media, "muted", {
                                        get: function() {
                                            return o
                                        },
                                        set: function(t) {
                                            var n = Cx(t) ? t : o;
                                            o = n, r[n ? "mute" : "unMute"](), r.setVolume(100 * i), bA.call(e, e.media, "volumechange")
                                        }
                                    }), Object.defineProperty(e.media, "currentSrc", {
                                        get: function() {
                                            return r.getVideoUrl()
                                        }
                                    }), Object.defineProperty(e.media, "ended", {
                                        get: function() {
                                            return e.currentTime === e.duration
                                        }
                                    });
                                    var s = r.getAvailablePlaybackRates();
                                    e.options.speed = s.filter((function(t) {
                                        return e.config.speed.options.includes(t)
                                    })), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), bA.call(e, e.media, "timeupdate"), bA.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() {
                                        e.media.buffered = r.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && bA.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), bA.call(e, e.media, "canplaythrough"))
                                    }), 200), t.customControls && setTimeout((function() {
                                        return TO.build.call(e)
                                    }), 50)
                                }
                            },
                            onStateChange: function(n) {
                                var r = n.target;
                                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(n.data) && (e.media.seeking = !1, bA.call(e, e.media, "seeked")), n.data) {
                                    case -1:
                                        bA.call(e, e.media, "timeupdate"), e.media.buffered = r.getVideoLoadedFraction(), bA.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        UO.call(e, !1), e.media.loop ? (r.stopVideo(), r.playVideo()) : bA.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (UO.call(e, !0), bA.call(e, e.media, "playing"), e.timers.playing = setInterval((function() {
                                            bA.call(e, e.media, "timeupdate")
                                        }), 50), e.media.duration !== r.getDuration() && (e.media.duration = r.getDuration(), bA.call(e, e.media, "durationchange")));
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(), UO.call(e, !1);
                                        break;
                                    case 3:
                                        bA.call(e, e.media, "waiting")
                                }
                                bA.call(e, e.elements.container, "statechange", !1, {
                                    code: n.data
                                })
                            }
                        }
                    })
                }
            }
        },
        BO = {
            setup: function() {
                this.media ? (oA(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), oA(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && oA(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = Qx("div", {
                    class: this.config.classNames.video
                }), Xx(this.media, this.elements.wrapper), this.elements.poster = Qx("div", {
                    class: this.config.classNames.poster,
                    hidden: ""
                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? AA.setup.call(this) : this.isYouTube ? FO.setup.call(this) : this.isVimeo && MO.setup.call(this)) : this.debug.warn("No media element found!")
            }
        },
        qO = function() {
            function e(t) {
                var n = this;
                hs(this, e), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                    container: null,
                    displayContainer: null
                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) {
                    n.on("loaded", e), n.on("error", t)
                })), this.load()
            }
            return ds(e, [{
                key: "load",
                value: function() {
                    var e = this;
                    this.enabled && (Ax(window.google) && Ax(window.google.ima) ? this.ready() : LO(this.player.config.urls.googleIMA.sdk).then((function() {
                        e.ready()
                    })).catch((function() {
                        e.trigger("error", new Error("Google IMA SDK failed to load"))
                    })))
                }
            }, {
                key: "ready",
                value: function() {
                    var e, t = this;
                    this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() {
                        t.clearSafetyTimer("onAdsManagerLoaded()")
                    })), this.listeners(), this.setupIMA()
                }
            }, {
                key: "setupIMA",
                value: function() {
                    var e = this;
                    this.elements.container = Qx("div", {
                        class: this.player.config.classNames.ads
                    }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) {
                        return e.onAdsManagerLoaded(t)
                    }), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) {
                        return e.onAdError(t)
                    }), !1), this.requestAds()
                }
            }, {
                key: "requestAds",
                value: function() {
                    var e = this.player.elements.container;
                    try {
                        var t = new google.ima.AdsRequest;
                        t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
                    } catch (e) {
                        this.onAdError(e)
                    }
                }
            }, {
                key: "pollCountdown",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                    var n = function() {
                        var t = uO(Math.max(e.manager.getRemainingTime(), 0)),
                            n = "".concat(eO("advertisement", e.player.config), " - ").concat(t);
                        e.elements.container.setAttribute("data-badge-text", n)
                    };
                    this.countdownTimer = setInterval(n, 100)
                }
            }, {
                key: "onAdsManagerLoaded",
                value: function(e) {
                    var t = this;
                    if (this.enabled) {
                        var n = new google.ima.AdsRenderingSettings;
                        n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                            return t.onAdError(e)
                        })), Object.keys(google.ima.AdEvent.Type).forEach((function(e) {
                            t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) {
                                return t.onAdEvent(e)
                            }))
                        })), this.trigger("loaded")
                    }
                }
            }, {
                key: "addCuePoints",
                value: function() {
                    var e = this;
                    Bx(this.cuePoints) || this.cuePoints.forEach((function(t) {
                        if (0 !== t && -1 !== t && t < e.player.duration) {
                            var n = e.player.elements.progress;
                            if (Lx(n)) {
                                var r = 100 / e.player.duration * t,
                                    i = Qx("span", {
                                        class: e.player.config.classNames.cues
                                    });
                                i.style.left = "".concat(r.toString(), "%"), n.appendChild(i)
                            }
                        }
                    }))
                }
            }, {
                key: "onAdEvent",
                value: function(e) {
                    var t = this,
                        n = this.player.elements.container,
                        r = e.getAd(),
                        i = e.getAdData();
                    switch (function(e) {
                        bA.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                    }(e.type), e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            this.trigger("loaded"), this.pollCountdown(!0), r.isLinear() || (r.width = n.offsetWidth, r.height = n.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                            this.manager.setVolume(this.player.volume);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            this.player.ended ? this.loadAds() : this.loader.contentComplete();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            this.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            this.pollCountdown(), this.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.LOG:
                            i.adError && this.player.debug.warn("Non-fatal ad error: ".concat(i.adError.getMessage()))
                    }
                }
            }, {
                key: "onAdError",
                value: function(e) {
                    this.cancel(), this.player.debug.warn("Ads error", e)
                }
            }, {
                key: "listeners",
                value: function() {
                    var e, t = this,
                        n = this.player.elements.container;
                    this.player.on("canplay", (function() {
                        t.addCuePoints()
                    })), this.player.on("ended", (function() {
                        t.loader.contentComplete()
                    })), this.player.on("timeupdate", (function() {
                        e = t.player.currentTime
                    })), this.player.on("seeked", (function() {
                        var n = t.player.currentTime;
                        Bx(t.cuePoints) || t.cuePoints.forEach((function(r, i) {
                            e < r && r < n && (t.manager.discardAdBreak(), t.cuePoints.splice(i, 1))
                        }))
                    })), window.addEventListener("resize", (function() {
                        t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL)
                    }))
                }
            }, {
                key: "play",
                value: function() {
                    var e = this,
                        t = this.player.elements.container;
                    this.managerPromise || this.resumeContent(), this.managerPromise.then((function() {
                        e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();
                        try {
                            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                        } catch (t) {
                            e.onAdError(t)
                        }
                    })).catch((function() {}))
                }
            }, {
                key: "resumeContent",
                value: function() {
                    this.elements.container.style.zIndex = "", this.playing = !1, EA(this.player.media.play())
                }
            }, {
                key: "pauseContent",
                value: function() {
                    this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                }
            }, {
                key: "cancel",
                value: function() {
                    this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                }
            }, {
                key: "loadAds",
                value: function() {
                    var e = this;
                    this.managerPromise.then((function() {
                        e.manager && e.manager.destroy(), e.managerPromise = new Promise((function(t) {
                            e.on("loaded", t), e.player.debug.log(e.manager)
                        })), e.initialized = !1, e.requestAds()
                    })).catch((function() {}))
                }
            }, {
                key: "trigger",
                value: function(e) {
                    for (var t = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    var o = this.events[e];
                    jx(o) && o.forEach((function(e) {
                        Ix(e) && e.apply(t, r)
                    }))
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return jx(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                }
            }, {
                key: "startSafetyTimer",
                value: function(e, t) {
                    var n = this;
                    this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout((function() {
                        n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                    }), e)
                }
            }, {
                key: "clearSafetyTimer",
                value: function(e) {
                    xx(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                }
            }, {
                key: "enabled",
                get: function() {
                    var e = this.config;
                    return this.player.isHTML5 && this.player.isVideo && e.enabled && (!Bx(e.publisherId) || Fx(e.tagUrl))
                }
            }, {
                key: "tagUrl",
                get: function() {
                    var e = this.config;
                    if (Fx(e.tagUrl)) return e.tagUrl;
                    var t = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: e.publisherId
                    };
                    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(hO(t))
                }
            }]), e
        }(),
        HO = Dv.findIndex,
        VO = "findIndex",
        WO = !0,
        zO = Hv(VO);
    VO in [] && Array(1).findIndex((function() {
        WO = !1
    })), uv({
        target: "Array",
        proto: !0,
        forced: WO || !zO
    }, {
        findIndex: function(e) {
            return HO(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), ry(VO);
    var YO = Math.min,
        $O = [].lastIndexOf,
        GO = !!$O && 1 / [1].lastIndexOf(1, -0) < 0,
        KO = ob("lastIndexOf"),
        XO = Hv("indexOf", {
            ACCESSORS: !0,
            1: 0
        }),
        JO = GO || !KO || !XO ? function(e) {
            if (GO) return $O.apply(this, arguments) || 0;
            var t = Yg(this),
                n = qm(t.length),
                r = n - 1;
            for (arguments.length > 1 && (r = YO(r, Fm(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in t && t[r] === e) return r || 0;
            return -1
        } : $O;
    uv({
        target: "Array",
        proto: !0,
        forced: JO !== [].lastIndexOf
    }, {
        lastIndexOf: JO
    });
    var QO = function(e, t) {
            var n = {};
            return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n
        },
        ZO = function() {
            function e(t) {
                hs(this, e), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                    thumb: {},
                    scrubbing: {}
                }, this.load()
            }
            return ds(e, [{
                key: "load",
                value: function() {
                    var e = this;
                    this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() {
                        e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0)
                    }))
                }
            }, {
                key: "getThumbnails",
                value: function() {
                    var e = this;
                    return new Promise((function(t) {
                        var n = e.player.config.previewThumbnails.src;
                        if (Bx(n)) throw new Error("Missing previewThumbnails.src config attribute");
                        var r = function() {
                            e.thumbnails.sort((function(e, t) {
                                return e.height - t.height
                            })), e.player.debug.log("Preview thumbnails", e.thumbnails), t()
                        };
                        if (Ix(n)) n((function(t) {
                            e.thumbnails = t, r()
                        }));
                        else {
                            var i = (Px(n) ? [n] : n).map((function(t) {
                                return e.getThumbnail(t)
                            }));
                            Promise.all(i).then(r)
                        }
                    }))
                }
            }, {
                key: "getThumbnail",
                value: function(e) {
                    var t = this;
                    return new Promise((function(n) {
                        nO(e).then((function(r) {
                            var i, o, a = {
                                frames: (i = r, o = [], i.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                                    var t = {};
                                    e.split(/\r\n|\n|\r/).forEach((function(e) {
                                        if (Ox(t.startTime)) {
                                            if (!Bx(e.trim()) && Bx(t.text)) {
                                                var n = e.trim().split("#xywh="),
                                                    r = bs(n, 1);
                                                if (t.text = r[0], n[1]) {
                                                    var i = bs(n[1].split(","), 4);
                                                    t.x = i[0], t.y = i[1], t.w = i[2], t.h = i[3]
                                                }
                                            }
                                        } else {
                                            var o = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                            o && (t.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])), t.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
                                        }
                                    })), t.text && o.push(t)
                                })), o),
                                height: null,
                                urlPrefix: ""
                            };
                            a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                            var s = new Image;
                            s.onload = function() {
                                a.height = s.naturalHeight, a.width = s.naturalWidth, t.thumbnails.push(a), n()
                            }, s.src = a.urlPrefix + a.frames[0].text
                        }))
                    }))
                }
            }, {
                key: "startMove",
                value: function(e) {
                    if (this.loaded && Nx(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                        if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                        else {
                            var t = this.player.elements.progress.getBoundingClientRect(),
                                n = 100 / t.width * (e.pageX - t.left);
                            this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = uO(this.seekTime)
                        }
                        this.showImageAtCurrentTime()
                    }
                }
            }, {
                key: "endMove",
                value: function() {
                    this.toggleThumbContainer(!1, !0)
                }
            }, {
                key: "startScrubbing",
                value: function(e) {
                    (xx(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                }
            }, {
                key: "endScrubbing",
                value: function() {
                    var e = this;
                    this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : yA.call(this.player, this.player.media, "timeupdate", (function() {
                        e.mouseDown || e.toggleScrubbingContainer(!1)
                    }))
                }
            }, {
                key: "listeners",
                value: function() {
                    var e = this;
                    this.player.on("play", (function() {
                        e.toggleThumbContainer(!1, !0)
                    })), this.player.on("seeked", (function() {
                        e.toggleThumbContainer(!1)
                    })), this.player.on("timeupdate", (function() {
                        e.lastTime = e.player.media.currentTime
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    this.elements.thumb.container = Qx("div", {
                        class: this.player.config.classNames.previewThumbnails.thumbContainer
                    }), this.elements.thumb.imageContainer = Qx("div", {
                        class: this.player.config.classNames.previewThumbnails.imageContainer
                    }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                    var e = Qx("div", {
                        class: this.player.config.classNames.previewThumbnails.timeContainer
                    });
                    this.elements.thumb.time = Qx("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), Lx(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = Qx("div", {
                        class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                    }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                }
            }, {
                key: "showImageAtCurrentTime",
                value: function() {
                    var e = this;
                    this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                    var t = this.thumbnails[0].frames.findIndex((function(t) {
                            return e.seekTime >= t.startTime && e.seekTime <= t.endTime
                        })),
                        n = t >= 0,
                        r = 0;
                    this.mouseDown || this.toggleThumbContainer(n), n && (this.thumbnails.forEach((function(n, i) {
                        e.loadedImages.includes(n.frames[t].text) && (r = i)
                    })), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(r)))
                }
            }, {
                key: "loadImage",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = this.showingThumb,
                        r = this.thumbnails[t],
                        i = r.urlPrefix,
                        o = r.frames[n],
                        a = r.frames[n].text,
                        s = i + a;
                    if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, o, t, n, a, !1), this.currentImageElement.dataset.index = n, this.removeOldImages(this.currentImageElement);
                    else {
                        this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                        var c = new Image;
                        c.src = s, c.dataset.index = n, c.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log("Loading image: ".concat(s)), c.onload = function() {
                            return e.showImage(c, o, t, n, a, !0)
                        }, this.loadingImage = c, this.removeOldImages(c)
                    }
                }
            }, {
                key: "showImage",
                value: function(e, t, n, r, i) {
                    var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    this.player.debug.log("Showing thumb: ".concat(i, ". num: ").concat(r, ". qual: ").concat(n, ". newimg: ").concat(o)), this.setImageSizeAndOffset(e, t), o && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(i) || this.loadedImages.push(i)), this.preloadNearby(r, !0).then(this.preloadNearby(r, !1)).then(this.getHigherQuality(n, e, t, i))
                }
            }, {
                key: "removeOldImages",
                value: function(e) {
                    var t = this;
                    Array.from(this.currentImageContainer.children).forEach((function(n) {
                        if ("img" === n.tagName.toLowerCase()) {
                            var r = t.usingSprites ? 500 : 1e3;
                            if (n.dataset.index !== e.dataset.index && !n.dataset.deleting) {
                                n.dataset.deleting = !0;
                                var i = t.currentImageContainer;
                                setTimeout((function() {
                                    i.removeChild(n), t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))
                                }), r)
                            }
                        }
                    }))
                }
            }, {
                key: "preloadNearby",
                value: function(e) {
                    var t = this,
                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return new Promise((function(r) {
                        setTimeout((function() {
                            var i = t.thumbnails[0].frames[e].text;
                            if (t.showingThumbFilename === i) {
                                var o;
                                o = n ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                                var a = !1;
                                o.forEach((function(e) {
                                    var n = e.text;
                                    if (n !== i && !t.loadedImages.includes(n)) {
                                        a = !0, t.player.debug.log("Preloading thumb filename: ".concat(n));
                                        var o = t.thumbnails[0].urlPrefix + n,
                                            s = new Image;
                                        s.src = o, s.onload = function() {
                                            t.player.debug.log("Preloaded thumb filename: ".concat(n)), t.loadedImages.includes(n) || t.loadedImages.push(n), r()
                                        }
                                    }
                                })), a || r()
                            }
                        }), 300)
                    }))
                }
            }, {
                key: "getHigherQuality",
                value: function(e, t, n, r) {
                    var i = this;
                    if (e < this.thumbnails.length - 1) {
                        var o = t.naturalHeight;
                        this.usingSprites && (o = n.h), o < this.thumbContainerHeight && setTimeout((function() {
                            i.showingThumbFilename === r && (i.player.debug.log("Showing higher quality thumb for: ".concat(r)), i.loadImage(e + 1))
                        }), 300)
                    }
                }
            }, {
                key: "toggleThumbContainer",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                    this.elements.thumb.container.classList.toggle(n, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                }
            }, {
                key: "toggleScrubbingContainer",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                    this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                }
            }, {
                key: "determineContainerAutoSizing",
                value: function() {
                    (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                }
            }, {
                key: "setThumbContainerSizeAndPos",
                value: function() {
                    if (this.sizeSpecifiedInCSS) {
                        if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                            var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                            this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                            var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                            this.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                        }
                    } else {
                        var n = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(n, "px")
                    }
                    this.setThumbContainerPos()
                }
            }, {
                key: "setThumbContainerPos",
                value: function() {
                    var e = this.player.elements.progress.getBoundingClientRect(),
                        t = this.player.elements.container.getBoundingClientRect(),
                        n = this.elements.thumb.container,
                        r = t.left - e.left + 10,
                        i = t.right - e.left - n.clientWidth - 10,
                        o = this.mousePosX - e.left - n.clientWidth / 2;
                    o < r && (o = r), o > i && (o = i), n.style.left = "".concat(o, "px")
                }
            }, {
                key: "setScrubbingContainerSize",
                value: function() {
                    var e = QO(this.thumbAspectRatio, {
                            width: this.player.media.clientWidth,
                            height: this.player.media.clientHeight
                        }),
                        t = e.width,
                        n = e.height;
                    this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(n, "px")
                }
            }, {
                key: "setImageSizeAndOffset",
                value: function(e, t) {
                    if (this.usingSprites) {
                        var n = this.thumbContainerHeight / t.h;
                        e.style.height = "".concat(e.naturalHeight * n, "px"), e.style.width = "".concat(e.naturalWidth * n, "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px")
                    }
                }
            }, {
                key: "enabled",
                get: function() {
                    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                }
            }, {
                key: "currentImageContainer",
                get: function() {
                    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                }
            }, {
                key: "usingSprites",
                get: function() {
                    return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                }
            }, {
                key: "thumbAspectRatio",
                get: function() {
                    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                }
            }, {
                key: "thumbContainerHeight",
                get: function() {
                    return this.mouseDown ? QO(this.thumbAspectRatio, {
                        width: this.player.media.clientWidth,
                        height: this.player.media.clientHeight
                    }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                }
            }, {
                key: "currentImageElement",
                get: function() {
                    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                },
                set: function(e) {
                    this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                }
            }]), e
        }(),
        eP = {
            insertElements: function(e, t) {
                var n = this;
                Px(t) ? Zx(e, this.media, {
                    src: t
                }) : jx(t) && t.forEach((function(t) {
                    Zx(e, n.media, t)
                }))
            },
            change: function(e) {
                var t = this;
                Gx(e, "sources.length") ? (AA.cancelRequests.call(this), this.destroy.call(this, (function() {
                    t.options.quality = [], eA(t.media), t.media = null, Lx(t.elements.container) && t.elements.container.removeAttribute("class");
                    var n = e.sources,
                        r = e.type,
                        i = bs(n, 1)[0],
                        o = i.provider,
                        a = void 0 === o ? vO.html5 : o,
                        s = i.src,
                        c = "html5" === a ? r : "div",
                        u = "html5" === a ? {} : {
                            src: s
                        };
                    Object.assign(t, {
                        provider: a,
                        type: r,
                        supported: pA.check(r, a, t.config.playsinline),
                        media: Qx(c, u)
                    }), t.elements.container.appendChild(t.media), Cx(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), Bx(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), TO.addStyleHook.call(t), t.isHTML5 && eP.insertElements.call(t, "source", n), t.config.title = e.title, BO.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && eP.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && TO.build.call(t), t.isHTML5 && t.media.load(), Bx(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new ZO(t))), t.fullscreen.update()
                }), !0)) : this.debug.warn("Invalid source format")
            }
        };
    var tP, nP = function() {
        function e(t, n) {
            var r = this;
            if (hs(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = pA.touch, this.media = t, Px(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Rx(this.media) || jx(this.media)) && (this.media = this.media[0]), this.config = Kx({}, dO, e.defaults, n || {}, function() {
                    try {
                        return JSON.parse(r.media.getAttribute("data-plyr-config"))
                    } catch (e) {
                        return {}
                    }
                }()), this.elements = {
                    container: null,
                    fullscreen: null,
                    captions: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                        popup: null,
                        menu: null,
                        panels: {},
                        buttons: {}
                    }
                }, this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap
                }, this.fullscreen = {
                    active: !1
                }, this.options = {
                    speed: [],
                    quality: []
                }, this.debug = new _O(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", pA), !xx(this.media) && Lx(this.media))
                if (this.media.plyr) this.debug.warn("Target already setup");
                else if (this.config.enabled)
                if (pA.check().api) {
                    var i = this.media.cloneNode(!0);
                    i.autoplay = !1, this.elements.original = i;
                    var o = this.media.tagName.toLowerCase(),
                        a = null,
                        s = null;
                    switch (o) {
                        case "div":
                            if (a = this.media.querySelector("iframe"), Lx(a)) {
                                if (s = fO(a.getAttribute("src")), this.provider = function(e) {
                                        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? vO.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? vO.vimeo : null
                                    }(s.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", s.search.length) {
                                    var c = ["1", "true"];
                                    c.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(s.searchParams.get("playsinline")), this.config.youtube.hl = s.searchParams.get("hl")) : this.config.playsinline = !0
                                }
                            } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (Bx(this.provider) || !Object.keys(vO).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                            this.type = bO;
                            break;
                        case "video":
                        case "audio":
                            this.type = o, this.provider = vO.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                    }
                    this.supported = pA.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new xO(this), this.storage = new tO(this), this.media.plyr = this, Lx(this.elements.container) || (this.elements.container = Qx("div", {
                        tabindex: 0
                    }), Xx(this.media, this.elements.container)), TO.migrateStyles.call(this), TO.addStyleHook.call(this), BO.setup.call(this), this.config.debug && mA.call(this, this.elements.container, this.config.events.join(" "), (function(e) {
                        r.debug.log("event: ".concat(e.type))
                    })), this.fullscreen = new EO(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && TO.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new qO(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (function() {
                        return EA(r.play())
                    })), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new ZO(this))) : this.debug.error("Setup failed: no support")
                } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
            else this.debug.error("Setup failed: no suitable element passed")
        }
        return ds(e, [{
            key: "play",
            value: function() {
                var e = this;
                return Ix(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() {
                    return e.ads.play()
                })).catch((function() {
                    return EA(e.media.play())
                })), this.media.play()) : null
            }
        }, {
            key: "pause",
            value: function() {
                return this.playing && Ix(this.media.pause) ? this.media.pause() : null
            }
        }, {
            key: "togglePlay",
            value: function(e) {
                return (Cx(e) ? e : !this.playing) ? this.play() : this.pause()
            }
        }, {
            key: "stop",
            value: function() {
                this.isHTML5 ? (this.pause(), this.restart()) : Ix(this.media.stop) && this.media.stop()
            }
        }, {
            key: "restart",
            value: function() {
                this.currentTime = 0
            }
        }, {
            key: "rewind",
            value: function(e) {
                this.currentTime -= Ox(e) ? e : this.config.seekTime
            }
        }, {
            key: "forward",
            value: function(e) {
                this.currentTime += Ox(e) ? e : this.config.seekTime
            }
        }, {
            key: "increaseVolume",
            value: function(e) {
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t + (Ox(e) ? e : 0)
            }
        }, {
            key: "decreaseVolume",
            value: function(e) {
                this.increaseVolume(-e)
            }
        }, {
            key: "toggleCaptions",
            value: function(e) {
                pO.toggle.call(this, e, !1)
            }
        }, {
            key: "airplay",
            value: function() {
                pA.airplay && this.media.webkitShowPlaybackTargetPicker()
            }
        }, {
            key: "toggleControls",
            value: function(e) {
                if (this.supported.ui && !this.isAudio) {
                    var t = aA(this.elements.container, this.config.classNames.hideControls),
                        n = void 0 === e ? void 0 : !e,
                        r = oA(this.elements.container, this.config.classNames.hideControls, n);
                    if (r && jx(this.config.controls) && this.config.controls.includes("settings") && !Bx(this.config.settings) && lO.toggleMenu.call(this, !1), r !== t) {
                        var i = r ? "controlshidden" : "controlsshown";
                        bA.call(this, this.media, i)
                    }
                    return !r
                }
                return !1
            }
        }, {
            key: "on",
            value: function(e, t) {
                mA.call(this, this.elements.container, e, t)
            }
        }, {
            key: "once",
            value: function(e, t) {
                yA.call(this, this.elements.container, e, t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                vA(this.elements.container, e, t)
            }
        }, {
            key: "destroy",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.ready) {
                    var r = function() {
                        document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (eA(t.elements.buttons.play), eA(t.elements.captions), eA(t.elements.controls), eA(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), Ix(e) && e()) : (wA.call(t), AA.cancelRequests.call(t), nA(t.elements.original, t.elements.container), bA.call(t, t.elements.original, "destroyed", !0), Ix(e) && e.call(t.elements.original), t.ready = !1, setTimeout((function() {
                            t.elements = null, t.media = null
                        }), 200))
                    };
                    this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (TO.toggleNativeControls.call(this, !0), r()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && Ix(this.embed.destroy) && this.embed.destroy(), r()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(r), setTimeout(r, 200))
                }
            }
        }, {
            key: "supports",
            value: function(e) {
                return pA.mime.call(this, e)
            }
        }, {
            key: "isHTML5",
            get: function() {
                return this.provider === vO.html5
            }
        }, {
            key: "isEmbed",
            get: function() {
                return this.isYouTube || this.isVimeo
            }
        }, {
            key: "isYouTube",
            get: function() {
                return this.provider === vO.youtube
            }
        }, {
            key: "isVimeo",
            get: function() {
                return this.provider === vO.vimeo
            }
        }, {
            key: "isVideo",
            get: function() {
                return this.type === bO
            }
        }, {
            key: "isAudio",
            get: function() {
                return this.type === yO
            }
        }, {
            key: "playing",
            get: function() {
                return Boolean(this.ready && !this.paused && !this.ended)
            }
        }, {
            key: "paused",
            get: function() {
                return Boolean(this.media.paused)
            }
        }, {
            key: "stopped",
            get: function() {
                return Boolean(this.paused && 0 === this.currentTime)
            }
        }, {
            key: "ended",
            get: function() {
                return Boolean(this.media.ended)
            }
        }, {
            key: "currentTime",
            set: function(e) {
                if (this.duration) {
                    var t = Ox(e) && e > 0;
                    this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                }
            },
            get: function() {
                return Number(this.media.currentTime)
            }
        }, {
            key: "buffered",
            get: function() {
                var e = this.media.buffered;
                return Ox(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
            }
        }, {
            key: "seeking",
            get: function() {
                return Boolean(this.media.seeking)
            }
        }, {
            key: "duration",
            get: function() {
                var e = parseFloat(this.config.duration),
                    t = (this.media || {}).duration,
                    n = Ox(t) && t !== 1 / 0 ? t : 0;
                return e || n
            }
        }, {
            key: "volume",
            set: function(e) {
                var t = e;
                Px(t) && (t = Number(t)), Ox(t) || (t = this.storage.get("volume")), Ox(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !Bx(e) && this.muted && t > 0 && (this.muted = !1)
            },
            get: function() {
                return Number(this.media.volume)
            }
        }, {
            key: "muted",
            set: function(e) {
                var t = e;
                Cx(t) || (t = this.storage.get("muted")), Cx(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            },
            get: function() {
                return Boolean(this.media.muted)
            }
        }, {
            key: "hasAudio",
            get: function() {
                return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
            }
        }, {
            key: "speed",
            set: function(e) {
                var t = this,
                    n = null;
                Ox(e) && (n = e), Ox(n) || (n = this.storage.get("speed")), Ox(n) || (n = this.config.speed.selected);
                var r = this.minimumSpeed,
                    i = this.maximumSpeed;
                n = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                    return Math.min(Math.max(e, t), n)
                }(n, r, i), this.config.speed.selected = n, setTimeout((function() {
                    t.media.playbackRate = n
                }), 0)
            },
            get: function() {
                return Number(this.media.playbackRate)
            }
        }, {
            key: "minimumSpeed",
            get: function() {
                return this.isYouTube ? Math.min.apply(Math, ws(this.options.speed)) : this.isVimeo ? .5 : .0625
            }
        }, {
            key: "maximumSpeed",
            get: function() {
                return this.isYouTube ? Math.max.apply(Math, ws(this.options.speed)) : this.isVimeo ? 2 : 16
            }
        }, {
            key: "quality",
            set: function(e) {
                var t = this.config.quality,
                    n = this.options.quality;
                if (n.length) {
                    var r = [!Bx(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(Ox),
                        i = !0;
                    if (!n.includes(r)) {
                        var o = function(e, t) {
                            return jx(e) && e.length ? e.reduce((function(e, n) {
                                return Math.abs(n - t) < Math.abs(e - t) ? n : e
                            })) : null
                        }(n, r);
                        this.debug.warn("Unsupported quality option: ".concat(r, ", using ").concat(o, " instead")), r = o, i = !1
                    }
                    t.selected = r, this.media.quality = r, i && this.storage.set({
                        quality: r
                    })
                }
            },
            get: function() {
                return this.media.quality
            }
        }, {
            key: "loop",
            set: function(e) {
                var t = Cx(e) ? e : this.config.loop.active;
                this.config.loop.active = t, this.media.loop = t
            },
            get: function() {
                return Boolean(this.media.loop)
            }
        }, {
            key: "source",
            set: function(e) {
                eP.change.call(this, e)
            },
            get: function() {
                return this.media.currentSrc
            }
        }, {
            key: "download",
            get: function() {
                var e = this.config.urls.download;
                return Fx(e) ? e : this.source
            },
            set: function(e) {
                Fx(e) && (this.config.urls.download = e, lO.setDownloadUrl.call(this))
            }
        }, {
            key: "poster",
            set: function(e) {
                this.isVideo ? TO.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video")
            },
            get: function() {
                return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
            }
        }, {
            key: "ratio",
            get: function() {
                if (!this.isVideo) return null;
                var e = SA(TA.call(this));
                return jx(e) ? e.join(":") : e
            },
            set: function(e) {
                this.isVideo ? Px(e) && kA(e) ? (this.config.ratio = e, xA.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
            }
        }, {
            key: "autoplay",
            set: function(e) {
                var t = Cx(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            },
            get: function() {
                return Boolean(this.config.autoplay)
            }
        }, {
            key: "currentTrack",
            set: function(e) {
                pO.set.call(this, e, !1)
            },
            get: function() {
                var e = this.captions,
                    t = e.toggled,
                    n = e.currentTrack;
                return t ? n : -1
            }
        }, {
            key: "language",
            set: function(e) {
                pO.setLanguage.call(this, e, !1)
            },
            get: function() {
                return (pO.getCurrentTrack.call(this) || {}).language
            }
        }, {
            key: "pip",
            set: function(e) {
                if (pA.pip) {
                    var t = Cx(e) ? e : !this.pip;
                    Ix(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? gO : mO), Ix(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                }
            },
            get: function() {
                return pA.pip ? Bx(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === gO : null
            }
        }], [{
            key: "supported",
            value: function(e, t, n) {
                return pA.check(e, t, n)
            }
        }, {
            key: "loadSprite",
            value: function(e, t) {
                return rO(e, t)
            }
        }, {
            key: "setup",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = null;
                return Px(t) ? r = Array.from(document.querySelectorAll(t)) : Rx(t) ? r = Array.from(t) : jx(t) && (r = t.filter(Lx)), Bx(r) ? null : r.map((function(t) {
                    return new e(t, n)
                }))
            }
        }]), e
    }();
    nP.defaults = (tP = dO, JSON.parse(JSON.stringify(tP)));
    var rP, iP = {
            video: {
                type: "video",
                title: "View From A Blue Moon",
                sources: [{
                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                    type: "video/mp4",
                    size: 576
                }, {
                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
                    type: "video/mp4",
                    size: 720
                }, {
                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
                    type: "video/mp4",
                    size: 1080
                }, {
                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4",
                    type: "video/mp4",
                    size: 1440
                }],
                poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
                tracks: [{
                    kind: "captions",
                    label: "English",
                    srclang: "en",
                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
                    default: !0
                }, {
                    kind: "captions",
                    label: "French",
                    srclang: "fr",
                    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
                }],
                previewThumbnails: {
                    src: ["https://cdn.plyr.io/static/demo/thumbs/100p.vtt", "https://cdn.plyr.io/static/demo/thumbs/240p.vtt"]
                }
            },
            audio: {
                type: "audio",
                title: "Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",
                sources: [{
                    src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
                    type: "audio/mp3"
                }, {
                    src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",
                    type: "audio/ogg"
                }]
            },
            youtube: {
                type: "video",
                sources: [{
                    src: "https://youtube.com/watch?v=bTqVqk7FSmY",
                    provider: "youtube"
                }]
            },
            vimeo: {
                type: "video",
                sources: [{
                    src: "https://vimeo.com/40648169",
                    provider: "vimeo"
                }]
            }
        },
        oP = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return e && e.classList[n ? "add" : "remove"](t)
        };
    rP = "plyr.io", window.location.host === rP && Ad({
        dsn: "https://d4ad9866ad834437a4754e23937071e4@sentry.io/305555",
        whitelistUrls: [rP].map((function(e) {
            return new RegExp("https://(([a-z0-9])+(.))*".concat(e))
        }))
    }), document.addEventListener("DOMContentLoaded", (function() {
        jg.setup(".js-shr", {
            count: {
                className: "button__count"
            },
            wrapper: {
                className: "button--with-count"
            }
        });
        var e = new nP("#player", {
            debug: !0,
            title: "View From A Blue Moon",
            iconUrl: "https://cdn.plyr.io/3.6.3/demo.svg",
            keyboard: {
                global: !0
            },
            tooltips: {
                controls: !0
            },
            captions: {
                active: !0
            },
            ads: {
                enabled: window.location.host.includes(rP),
                publisherId: "918848828995742"
            },
            previewThumbnails: {
                enabled: !0,
                src: ["https://cdn.plyr.io/static/demo/thumbs/100p.vtt", "https://cdn.plyr.io/static/demo/thumbs/240p.vtt"]
            },
            vimeo: {
                referrerPolicy: "no-referrer"
            }
        });
        window.player = e;
        var t = document.querySelectorAll("[data-source]"),
            n = Object.keys(iP),
            r = Boolean(window.history && window.history.pushState),
            i = window.location.hash.substring(1),
            o = i.length;

        function a(e) {
            Array.from(t).forEach((function(e) {
                return oP(e.parentElement, "active", !1)
            })), oP(document.querySelector('[data-source="'.concat(e, '"]')), "active", !0), Array.from(document.querySelectorAll(".plyr__cite")).forEach((function(e) {
                e.hidden = !0
            })), document.querySelector(".plyr__cite--".concat(e)).hidden = !1
        }

        function s(t, r) {
            !n.includes(t) || !r && t === i || !i.length && "video" === t || (e.source = iP[t], i = t, a(t))
        }
        Array.from(t).forEach((function(e) {
            e.addEventListener("click", (function() {
                var t = e.getAttribute("data-source");
                s(t), r && window.history.pushState({
                    type: t
                }, "", "#".concat(t))
            }))
        })), window.addEventListener("popstate", (function(e) {
            e.state && Object.keys(e.state).includes("type") && s(e.state.type)
        })), o || (i = "video"), r && n.includes(i) && window.history.replaceState({
            type: i
        }, "", o ? "#".concat(i) : ""), "video" !== i && s(i, !0), a(i)
    }))
}();
//# sourceMappingURL=demo.js.map