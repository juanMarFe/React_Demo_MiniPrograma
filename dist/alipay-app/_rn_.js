const _my = require("./__antmove/api/index.js")(my);
const wx = _my;
!(function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
            n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function(e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function(e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
            )
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function(t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 11));
})([
    function(e, t) {
        (e.exports = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t, n) {
        var r = n(9);
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, r(o.key), o);
            }
        }
        (e.exports = function(e, t, n) {
            return (
                t && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t) {
        function n(t) {
            return (
                (e.exports = n =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  "function" == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? "symbol"
                                  : typeof e;
                          }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports),
                n(t)
            );
        }
        (e.exports = n),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t, n) {
        var r = n(13);
        (e.exports = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError(
                    "Super expression must either be null or a function"
                );
            (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
            })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && r(e, t);
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t, n) {
        var r = n(2).default,
            o = n(14);
        (e.exports = function(e, t) {
            if (t && ("object" === r(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
                throw new TypeError(
                    "Derived constructors may only return object or undefined"
                );
            return o(e);
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t) {
        function n(t) {
            return (
                (e.exports = n = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function(e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports),
                n(t)
            );
        }
        (e.exports = n),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = r(n(7)),
            a = r(n(15)),
            i = r(n(2)),
            c = r(n(4)),
            u = r(n(5)),
            s = r(n(3)),
            l = r(n(0)),
            p = r(n(1));
        function f(e) {
            return "function" == typeof e
                ? function() {
                      for (
                          var t = arguments.length, n = new Array(t), r = 0;
                          r < t;
                          r++
                      )
                          n[r] = arguments[r];
                      var o = e.apply(this, n);
                      return d(o), o;
                  }
                : d(e);
        }
        function d(e) {
            return (
                "object" !== i(e) ||
                    null === e ||
                    (e.isReactElement
                        ? (e.isGeneric = !0)
                        : Object.values(e).forEach(function(e) {
                              e && e.isReactElement && (e.isGeneric = !0);
                          })),
                e
            );
        }
        var y = {},
            h = {
                getCompInstByUUID: function getCompInstByUUID(e) {
                    var t = "".concat(e).concat("__comp");
                    return y[t];
                },
                setCompInst: function setCompInst(e, t) {
                    var n = "".concat(e).concat("__comp");
                    y[n] = t;
                },
                getWxInstByUUID: function getWxInstByUUID(e) {
                    var t = "".concat(e).concat("__wx");
                    return y[t];
                },
                setWxCompInst: function setWxCompInst(e, t) {
                    var n = "".concat(e).concat("__wx");
                    y[n] = t;
                },
                removeWxInst: function removeWxInst(e) {
                    var t = "".concat(e).concat("__wx");
                    y[t] && delete y[t];
                },
                removeUUID: function removeUUID(e) {
                    var t = "".concat(e).concat("__wx"),
                        n = "".concat(e).concat("__comp"),
                        r = y[n];
                    r && "function" == typeof r._ref && r._ref(null),
                        delete y[t],
                        delete y[n];
                },
                removeCompInst: function removeCompInst(e) {
                    var t = "".concat(e).concat("__comp");
                    y[t] &&
                        ("function" == typeof y[t]._ref && y[t]._ref(null),
                        delete y[t]);
                },
                compExist: function compExist(e) {
                    var t = "".concat(e.__diuu__).concat("__comp");
                    return !!y[t];
                }
            },
            m = { childContext: {}, _c: [] };
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function g(e, t) {
            var n = h.getCompInstByUUID(e.data.diuu);
            if (n && n.props && n.props[t]) return n.props[t];
        }
        function b(e, t) {
            return e.constructor.childContextTypes
                ? (function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                              ? v(Object(n), !0).forEach(function(t) {
                                    o(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n)
                                )
                              : v(Object(n)).forEach(function(t) {
                                    Object.defineProperty(
                                        e,
                                        t,
                                        Object.getOwnPropertyDescriptor(n, t)
                                    );
                                });
                      }
                      return e;
                  })({}, t, {}, e.getChildContext())
                : t;
        }
        function _(e, t) {
            var n = e.contextTypes;
            if (n) {
                for (var r = Object.keys(n), o = {}, a = 0; a < r.length; a++) {
                    var i = r[a];
                    o[i] = t[i];
                }
                return o;
            }
            return {};
        }
        function x(e, t, n) {
            for (
                var r = n.split(/[.\[]/), o = e, a = 0;
                a < r.length - 1;
                a++
            ) {
                var i = r[a];
                if ("]" === i.charAt(i.length - 1)) {
                    var c = Number(i.substring(0, i.length - 1));
                    o = Number.isNaN(c) ? o[i] : o[c];
                } else o = o[i];
            }
            o[r[r.length - 1]] = t;
        }
        function O(e, t, n) {
            if (!e || 0 === e.length) return [];
            for (var r = new Set(t), o = 0; o < e.length; o++) {
                var a = e[o];
                r.has(a) || w(a, n);
            }
        }
        function w(e, t) {
            for (var n = 0; n < e._c.length; n++) {
                w(e._c[n], t);
            }
            t.push(e);
        }
        function S(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.componentWillUnmount && n.componentWillUnmount(),
                    h.removeCompInst(n.__diuu__);
            }
        }
        function C(e, t, n) {
            for (
                var r = t + n, o = h.getCompInstByUUID(e);
                o && o instanceof _e;

            )
                o = o._c[0];
            var a = o.__eventHanderMap[r];
            return (
                a ||
                    ("begin" !== n && "end" !== n) ||
                    (a = o.__eventHanderMap[t + "regionchange"]),
                a
            );
        }
        function j() {
            var e = getCurrentPages();
            return e[e.length - 1];
        }
        function P(e) {
            if (!e || e.length <= 3) return !1;
            var t = e.charCodeAt(2);
            return (
                111 === e.charCodeAt(0) &&
                110 === e.charCodeAt(1) &&
                t >= 65 &&
                t <= 90
            );
        }
        var k = {
                VIEW: "view",
                SCROLL: "scroll",
                INNERTEXT: "InnerText",
                OUTERTEXT: "OuterText"
            },
            E = {
                alignItems: { name: "align-items", type: 3 },
                alignSelf: { name: "align-self", type: 3 },
                backfaceVisibility: { name: "backface-visibility", type: 3 },
                backgroundColor: { name: "background-color", type: 3 },
                borderBottomColor: { name: "border-bottom-color", type: 3 },
                borderBottomLeftRadius: {
                    name: "border-bottom-left-radius",
                    type: 1
                },
                borderBottomRightRadius: {
                    name: "border-bottom-right-radius",
                    type: 1
                },
                borderBottomWidth: { name: "border-bottom-width", type: 1 },
                borderColor: { name: "border-color", type: 3 },
                borderLeftColor: { name: "border-left-color", type: 3 },
                borderLeftWidth: { name: "border-left-width", type: 1 },
                borderRadius: { name: "border-radius", type: 1 },
                borderRightColor: { name: "border-right-color", type: 3 },
                borderRightWidth: { name: "border-right-width", type: 1 },
                borderStyle: { name: "border-style", type: 3 },
                borderTopColor: { name: "border-top-color", type: 3 },
                borderTopLeftRadius: {
                    name: "border-top-left-radius",
                    type: 1
                },
                borderTopRightRadius: {
                    name: "border-top-right-radius",
                    type: 1
                },
                borderTopWidth: { name: "border-top-width", type: 1 },
                borderWidth: { name: "border-width", type: 1 },
                bottom: { name: "bottom", type: 2 },
                color: { name: "color", type: 3 },
                display: { name: "display", type: 3 },
                flexDirection: { name: "flex-direction", type: 3 },
                flexShrink: { name: "flex-shrink", type: 3 },
                flexWrap: { name: "flex-wrap", type: 3 },
                fontFamily: { name: "font-family", type: 3 },
                fontSize: { name: "font-size", type: 1 },
                fontStyle: { name: "font-style", type: 3 },
                fontWeight: { name: "font-weight", type: 3 },
                fontVariant: { name: "font-variant", type: 3 },
                height: { name: "height", type: 2 },
                justifyContent: { name: "justify-content", type: 3 },
                left: { name: "left", type: 2 },
                letterSpacing: { name: "letter-spacing", type: 1 },
                lineHeight: { name: "line-height", type: 1 },
                margin: { name: "margin", type: 2 },
                marginBottom: { name: "margin-bottom", type: 2 },
                marginLeft: { name: "margin-left", type: 2 },
                marginRight: { name: "margin-right", type: 2 },
                marginTop: { name: "margin-top", type: 2 },
                maxHeight: { name: "max-height", type: 2 },
                maxWidth: { name: "max-width", type: 2 },
                minHeight: { name: "min-height", type: 2 },
                minWidth: { name: "min-width", type: 2 },
                opacity: { name: "opacity", type: 3 },
                overflow: { name: "overflow", type: 3 },
                padding: { name: "padding", type: 2 },
                paddingBottom: { name: "padding-bottom", type: 2 },
                paddingLeft: { name: "padding-left", type: 2 },
                paddingRight: { name: "padding-right", type: 2 },
                paddingTop: { name: "padding-top", type: 2 },
                position: { name: "position", type: 3 },
                right: { name: "right", type: 2 },
                textAlign: { name: "text-align", type: 3 },
                textAlignVertical: { name: "text-align-vertical", type: 3 },
                textDecorationColor: { name: "text-decoration-color", type: 3 },
                textDecorationLine: { name: "text-decoration-line", type: 3 },
                textDecorationStyle: { name: "text-decoration-style", type: 3 },
                textTransform: { name: "text-transform", type: 3 },
                top: { name: "top", type: 2 },
                width: { name: "width", type: 2 },
                writingDirection: { name: "writing-direction", type: 3 },
                zIndex: { name: "z-index", type: 3 }
            };
        function U(e, t) {
            var n = null,
                r = null;
            if (
                ((n =
                    "string" == typeof e
                        ? e
                        : (function(e) {
                              if (!e) return "";
                              var t = "";
                              if (e.shadowOffset) {
                                  var n = e.shadowOffset,
                                      r = n.width,
                                      o = void 0 === r ? 0 : r,
                                      a = n.height,
                                      i = void 0 === a ? 0 : a;
                                  t += "box-shadow: "
                                      .concat(o, "px ")
                                      .concat(i, "px ")
                                      .concat(e.shadowColor || "", "; ");
                              }
                              if (e.textShadowOffset) {
                                  var c = e.textShadowOffset,
                                      u = c.width,
                                      s = void 0 === u ? 0 : u,
                                      l = c.height,
                                      p = void 0 === l ? 0 : l;
                                  t += "text-shadow: "
                                      .concat(s, "px ")
                                      .concat(p, "px ")
                                      .concat(e.textShadowColor || "", "; ");
                              }
                              for (var f in e) {
                                  var d = e[f];
                                  if (
                                      "shadowOffset" !== f &&
                                      "shadowColor" !== f &&
                                      "textShadowOffset" !== f &&
                                      "textShadowColor" !== f
                                  )
                                      if ("transform" !== f) {
                                          if ("flex" !== f) {
                                              if ("marginHorizontal" !== f) {
                                                  if ("marginVertical" !== f) {
                                                      if (
                                                          "paddingHorizontal" !==
                                                          f
                                                      ) {
                                                          if (
                                                              "paddingVertical" !==
                                                              f
                                                          ) {
                                                              if (
                                                                  void 0 !==
                                                                  E[f]
                                                              ) {
                                                                  var y = "";
                                                                  switch (
                                                                      E[f].type
                                                                  ) {
                                                                      case 3:
                                                                          y = d;
                                                                          break;
                                                                      case 1:
                                                                          y = "".concat(
                                                                              d,
                                                                              "px"
                                                                          );
                                                                          break;
                                                                      case 2:
                                                                          y = Number(
                                                                              d
                                                                          )
                                                                              ? "".concat(
                                                                                    d,
                                                                                    "px"
                                                                                )
                                                                              : d;
                                                                  }
                                                                  t += ""
                                                                      .concat(
                                                                          E[f]
                                                                              .name,
                                                                          ": "
                                                                      )
                                                                      .concat(
                                                                          y,
                                                                          ";"
                                                                      );
                                                              } else
                                                                  console.warn(
                                                                      "style对象: ",
                                                                      e,
                                                                      " 存在不支持属性：",
                                                                      f
                                                                  );
                                                          } else {
                                                              var h = Number(d)
                                                                  ? "".concat(
                                                                        d,
                                                                        "px"
                                                                    )
                                                                  : d;
                                                              t += "padding-top: "
                                                                  .concat(
                                                                      h,
                                                                      " ; padding-bottom: "
                                                                  )
                                                                  .concat(
                                                                      h,
                                                                      ";"
                                                                  );
                                                          }
                                                      } else {
                                                          var m = Number(d)
                                                              ? "".concat(
                                                                    d,
                                                                    "px"
                                                                )
                                                              : d;
                                                          t += "padding-left: "
                                                              .concat(
                                                                  m,
                                                                  " ; padding-right: "
                                                              )
                                                              .concat(m, ";");
                                                      }
                                                  } else {
                                                      var v = Number(d)
                                                          ? "".concat(d, "px")
                                                          : d;
                                                      t += "margin-top: "
                                                          .concat(
                                                              v,
                                                              "; margin-bottom: "
                                                          )
                                                          .concat(v, ";");
                                                  }
                                              } else {
                                                  var g = Number(d)
                                                      ? "".concat(d, "px")
                                                      : d;
                                                  t += "margin-left: "
                                                      .concat(
                                                          g,
                                                          "; margin-right: "
                                                      )
                                                      .concat(g, ";");
                                              }
                                          } else
                                              d >= 1 &&
                                                  (t += "flex: ".concat(
                                                      d,
                                                      " 1 0%;"
                                                  ));
                                      } else {
                                          var b = R(d);
                                          t += "transform: ".concat(b, ";");
                                      }
                              }
                              return t;
                          })(
                              (r = (function e(t) {
                                  if (null === t || "object" !== i(t)) return;
                                  if (!Array.isArray(t)) return t;
                                  for (
                                      var n = {}, r = 0, o = t.length;
                                      r < o;
                                      ++r
                                  ) {
                                      var a = e(t[r]);
                                      if (a) for (var c in a) n[c] = a[c];
                                  }
                                  return n;
                              })(e))
                          )),
                !t)
            )
                return n;
            var o = "";
            return (
                "InnerText" === t
                    ? (o = "_3_")
                    : "OuterText" === t
                    ? ((o = "_2_"),
                      r && !r.height && (o += "max-height: 100%;"),
                      r && !r.width && (o += "max-width: 100%;"))
                    : (o = "scroll" === t ? "_4_" : "_1_"),
                "".concat(o).concat(n)
            );
        }
        function R(e) {
            var t = "";
            return (
                e.forEach(function(e) {
                    for (var n in e) {
                        var r = e[n];
                        t +=
                            "translateX" === n || "translateY" === n
                                ? "".concat(n, "(").concat(r, "px) ")
                                : "".concat(n, "(").concat(r, ") ");
                    }
                }),
                t
            );
        }
        var I,
            D = Object.prototype.hasOwnProperty;
        function W(e, t) {
            if (I(e, t)) return !0;
            if (
                "object" !== i(e) ||
                null === e ||
                "object" !== i(t) ||
                null === t
            )
                return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (var o = 0; o < n.length; o++)
                if (
                    !(
                        "children" === n[o] ||
                        (D.call(t, n[o]) && I(e[n[o]], t[n[o]]))
                    )
                )
                    return !1;
            return !0;
        }
        I =
            "function" == typeof Object.is
                ? Object.is
                : function(e, t) {
                      return e === t
                          ? 0 !== e || 0 !== t || 1 / e == 1 / t
                          : e != e && t != t;
                  };
        var T = {
                0: "1",
                1: "2",
                2: "3",
                3: "4",
                4: "5",
                5: "6",
                6: "7",
                7: "8",
                8: "9",
                9: "A",
                A: "B",
                B: "C",
                C: "D",
                D: "E",
                E: "F",
                F: "G",
                G: "H",
                H: "I",
                I: "J",
                J: "K",
                K: "L",
                L: "M",
                M: "N",
                N: "O",
                O: "P",
                P: "Q",
                Q: "R",
                R: "S",
                S: "T",
                T: "U",
                U: "V",
                V: "W",
                W: "X",
                X: "Y",
                Y: "Z",
                Z: "a",
                a: "b",
                b: "c",
                c: "d",
                d: "e",
                e: "f",
                f: "g",
                g: "h",
                h: "i",
                i: "j",
                j: "k",
                k: "l",
                l: "m",
                m: "n",
                n: "o",
                o: "p",
                p: "q",
                q: "r",
                r: "s",
                s: "t",
                t: "u",
                u: "v",
                v: "w",
                w: "x",
                x: "y",
                y: "z",
                z: "0"
            },
            A = ["a", "0", "0", "0", "0", "0", "0", "0"];
        function M() {
            for (var e = 7; N(e) && e > 0; ) e -= 1;
            return A.join("");
        }
        function N(e) {
            var t = A[e];
            return (A[e] = T[t]), "z" === t;
        }
        var F = null,
            B = null;
        function L(e) {
            F ? ((e.nextEffect = F), (F.preEffect = e), (F = e)) : (B = F = e);
        }
        function V(e) {
            F ? ((B.nextEffect = e), (e.preEffect = B), (B = e)) : (B = F = e);
        }
        function H() {
            var e = { lastEffect: B, firstEffect: F };
            return (B = F = null), e;
        }
        function K(e) {
            if (e === m || e.isPageComp)
                e.styleEffect &&
                    (L({ inst: e, tag: 2, data: e.styleEffect }),
                    (e.styleEffect = void 0));
            else {
                var t = e._styleKey,
                    n = e._r[t];
                if ("_5_" !== n) {
                    if (((e._r[t] = "_5_"), n !== e._myOutStyle))
                        !1 === e._myOutStyle && L({ tag: 3, inst: e }),
                            (e._myOutStyle = n),
                            x(e._p, n, e._outStyleKey),
                            ((e._p.styleEffect = e._p.styleEffect || {})[
                                e._outStyleKey
                            ] = n);
                    e.styleEffect = void 0;
                }
                e.styleEffect &&
                    (L({ inst: e, tag: 2, data: e.styleEffect }),
                    (e.styleEffect = void 0));
            }
        }
        function z(e, t) {
            if (e !== m && !e.isPageComp) {
                var n = e._styleKey;
                n
                    ? (!1 !== e._r[n] &&
                          !1 === e._myOutStyle &&
                          (t.hasMpInit = !0),
                      (e._myOutStyle = e._r[n]),
                      (e._r[n] = "_5_"))
                    : (e._myOutStyle = !1),
                    x(e._p, e._myOutStyle, e._outStyleKey);
            }
        }
        function X(e) {
            if (e.didSelfUpdate) {
                var t = ee(e),
                    n = t.hasForceUpdate,
                    r = t.nextState,
                    o = t.callbacks,
                    a = te(e, n, e.props, r);
                a && e.componentWillUpdate && e.componentWillUpdate(e.props, r),
                    a &&
                        e.UNSAFE_componentWillUpdate &&
                        e.UNSAFE_componentWillUpdate(e.props, r),
                    (e.state = r);
                var i = {};
                if (!a) {
                    if (e.didChildUpdate) {
                        for (var c = 0; c < e._c.length; c++) {
                            X(e._c[c]);
                        }
                        K(e);
                    }
                    return (e.didChildUpdate = !1), void (e.didSelfUpdate = !1);
                }
                (i.tag = 0), (i.callbacks = o), (i.inst = e), V(i);
                var u = e._c;
                ne(e);
                var s = e.render();
                s && s.isReactElement
                    ? ((s.isFirstEle = !0),
                      (e._styleKey = "".concat(s.diuu, "style")))
                    : (e._styleKey = void 0),
                    Q(s, e, b(e, e._parentContext), e._r, e._or, "_r"),
                    O(u, e._c, ue),
                    (function(e, t) {
                        if (e !== m && !e.isPageComp) {
                            var n,
                                r = e._styleKey;
                            if (
                                (r
                                    ? ((n = e._r[r]), (e._r[r] = "_5_"))
                                    : (n = !1),
                                n !== e._myOutStyle)
                            )
                                !1 === e._myOutStyle && (t.hasMpInit = !0),
                                    (e._myOutStyle = n),
                                    x(e._p, n, e._outStyleKey),
                                    ((e._p.styleEffect =
                                        e._p.styleEffect || {})[
                                        e._outStyleKey
                                    ] = n);
                        }
                    })(e, i),
                    (e.didChildUpdate = !1),
                    (e.didSelfUpdate = !1);
            } else if (e.didChildUpdate) {
                for (var l = 0; l < e._c.length; l++) {
                    X(e._c[l]);
                }
                K(e), (e.didChildUpdate = !1), (e.didSelfUpdate = !1);
            }
        }
        function Q(e, t, n, r, o, a) {
            try {
                if (
                    "string" == typeof e ||
                    "number" == typeof e ||
                    "boolean" == typeof e ||
                    null == e ||
                    "slot" === e
                )
                    return;
                if (Array.isArray(e) || (e.props && e.props._FF))
                    return void console.warn(
                        "组件暂不支持直接render数组/Fragment！"
                    );
                var c = e.ref,
                    u = e.nodeName,
                    s = e.tempName;
                "string" == typeof c && console.warn("ref 暂时只支持函数形式!"),
                    r && s && (r.tempName = s),
                    "template" === u
                        ? (function(e, t, n, r, o, a) {
                              var c = e.tempVnode,
                                  u = e.datakey;
                              if ("boolean" == typeof c || null == c)
                                  return void (r[u] = "");
                              if ("string" == typeof c || "number" == typeof c)
                                  return void (r[u] = c);
                              if (e.props.isTextElement) {
                                  return (
                                      console.error(
                                          "Text子元素JSX表达式的值只能是简单类型！"
                                      ),
                                      void (r[u] = "")
                                  );
                              }
                              if (Array.isArray(c)) {
                                  var s = {};
                                  if (o && o[u] && Array.isArray(o[u])) {
                                      var l = o[u];
                                      s = (function(e, t) {
                                          for (
                                              var n = {}, r = 0;
                                              r < e.length;
                                              r++
                                          ) {
                                              var o = e[r],
                                                  a =
                                                      void 0 === o[t]
                                                          ? "index_".concat(r)
                                                          : o[t];
                                              n[a] = o;
                                          }
                                          return n;
                                      })(l, "key");
                                  }
                                  r[u] = [];
                                  for (var p = 0; p < c.length; p++) {
                                      var f = c[p];
                                      if (null != f && "boolean" != typeof f)
                                          if (
                                              "string" != typeof f &&
                                              "number" != typeof f
                                          ) {
                                              "object" === i(f) &&
                                                  (f.isTempMap = !0);
                                              var d = f.key;
                                              void 0 === d &&
                                                  (console.warn(
                                                      "JSX数组，需要明确指定key！否则行为会有潜在的差异"
                                                  ),
                                                  (d = f.key = "index_".concat(
                                                      p
                                                  )));
                                              var y = { key: d, diuu: f.diuu };
                                              r[u].push(y);
                                              var h = r[u].length - 1;
                                              Q(
                                                  f,
                                                  t,
                                                  n,
                                                  y,
                                                  s[d],
                                                  ""
                                                      .concat(a, ".")
                                                      .concat(u, "[")
                                                      .concat(h, "]")
                                              );
                                          } else r[u].push(f);
                                  }
                              } else {
                                  var m = null;
                                  o && o[u] && o[u].tempName && (m = o[u]);
                                  var v = {};
                                  (r[u] = v),
                                      Q(
                                          c,
                                          t,
                                          n,
                                          v,
                                          m,
                                          "".concat(a, ".").concat(u)
                                      );
                              }
                          })(e, t, n, r, o, a)
                        : "phblock" === u
                        ? (function(e, t, n, r, o, a) {
                              for (
                                  var i = e.props,
                                      c = e.children,
                                      u = Object.keys(i),
                                      s = 0;
                                  s < u.length;
                                  s++
                              ) {
                                  var l = u[s],
                                      p = i[l];
                                  "children" !== l && (r[l] = p);
                              }
                              for (var f = 0; f < c.length; f++) {
                                  Q(c[f], t, n, r, o, a);
                              }
                          })(e, t, n, r, o, a)
                        : e.isGeneric && "_r" !== a
                        ? (function(e, t, n, r, o, a) {
                              var i = o && o._generic,
                                  c = {},
                                  u = null;
                              if (i) {
                                  if (!(u = h.getCompInstByUUID(i)))
                                      return void q(e);
                                  t._c.push(u), (c.tag = 0), (c.inst = u), V(c);
                              } else
                                  (u = new me()),
                                      (i = M()),
                                      (u.__diuu__ = i),
                                      t._c.push(u),
                                      (u._p = t),
                                      h.setCompInst(i, u),
                                      (c.tag = 1),
                                      (c.inst = u),
                                      V(c);
                              r._generic = i;
                              var s = u._c;
                              ne(u),
                                  e && e.isReactElement
                                      ? ((e.isFirstEle = !0),
                                        (u._styleKey = "".concat(
                                            e.diuu,
                                            "style"
                                        )))
                                      : (u._styleKey = void 0);
                              (u._outStyleKey = ""
                                  .concat(a, ".")
                                  .concat("_generic", "style")),
                                  delete e.isTempMap,
                                  delete e.key,
                                  Q(e, u, n, u._r, u._or, "_r"),
                                  O(s, u._c, ue),
                                  z(u, c),
                                  (u.didChildUpdate = !1),
                                  (u.didSelfUpdate = !1);
                          })(e, t, n, r, o, a)
                        : "string" == typeof u
                        ? (function(e, t, n, r, o, a) {
                              var i = e.animation,
                                  c = e.props,
                                  u = e.diuu,
                                  s = e.isFirstEle,
                                  l = e.children,
                                  p = Object.keys(c),
                                  f = c._o,
                                  d = [];
                              if (f)
                                  for (var y = 0; y < p.length; y++) {
                                      var h = p[y],
                                          m = c[h];
                                      "children" !== h &&
                                          "_o" !== h &&
                                          ("src" === h
                                              ? (r["".concat(u).concat(h)] =
                                                    m.uri || m)
                                              : "function" == typeof m
                                              ? d.push(h)
                                              : "mode" === h
                                              ? (r["".concat(u).concat(h)] = Z(
                                                    m
                                                ))
                                              : "style" === h && "6" !== f
                                              ? (r["".concat(u).concat(h)] = U(
                                                    m,
                                                    s || e.TWFBStylePath
                                                        ? f
                                                        : null
                                                ))
                                              : "activeOpacity" === h
                                              ? (r[
                                                    "".concat(u, "hoverClass")
                                                ] = $(m))
                                              : (r[
                                                    "".concat(u).concat(h)
                                                ] = m));
                                  }
                              else
                                  for (var v = 0; v < p.length; v++) {
                                      var g = p[v],
                                          b = c[g];
                                      -1 !== g.indexOf("-") &&
                                          (g = g.replace(re, "Y")),
                                          "children" !== g &&
                                              ("function" == typeof b
                                                  ? d.push(g)
                                                  : (r["".concat(u).concat(g)] =
                                                        "style" === g
                                                            ? U(b)
                                                            : b));
                                  }
                              if (d.length > 0) {
                                  var _ = G(e, o),
                                      x = _.diuu,
                                      O = _.diuuKey;
                                  _.shouldReuse || (x = M()),
                                      (r[O] = x),
                                      d.forEach(function(e) {
                                          var n = c[e];
                                          "onLayout" === e &&
                                              (r.parentDiuu = t.__diuu__),
                                              (t.__eventHanderMap[
                                                  "".concat(x).concat(
                                                      (function(e) {
                                                          switch (e) {
                                                              case "onPress":
                                                                  return "tap";
                                                              case "onLongPress":
                                                                  return "longpress";
                                                              case "onLoad":
                                                                  return "load";
                                                              case "onError":
                                                                  return "error";
                                                              default:
                                                                  return e.startsWith(
                                                                      "bind"
                                                                  )
                                                                      ? e.substring(
                                                                            4
                                                                        )
                                                                      : e.startsWith(
                                                                            "catch"
                                                                        )
                                                                      ? e.substring(
                                                                            5
                                                                        )
                                                                      : e;
                                                          }
                                                      })(e)
                                                  )
                                              ] = J(n));
                                      });
                              }
                              c.style ||
                                  "6" === f ||
                                  (!s && !e.TWFBStylePath) ||
                                  (r["".concat(u, "style")] = U("", f));
                              void 0 === c.activeOpacity &&
                                  "7" === f &&
                                  (r["".concat(u, "hoverClass")] = $(0.2));
                              void 0 === c.activeOpacity &&
                                  "8" === f &&
                                  (r["".concat(u, "hoverClass")] = $(1));
                              void 0 !== c.numberOfLines &&
                                  (r["".concat(u, "style")] =
                                      (r["".concat(u, "style")] || "") +
                                      Y(c.numberOfLines));
                              i && (r["".concat(u, "animation")] = i);
                              ("6" !== f && "8" !== f) ||
                                  (1 !== l.length &&
                                      console.warn(
                                          f,
                                          "必须有且只有一个子元素"
                                      ));
                              "6" === f &&
                                  (l[0].TWFBStylePath = ""
                                      .concat(a, ".")
                                      .concat(u, "style"));
                              for (var w = 0; w < l.length; w++) {
                                  Q(l[w], t, n, r, o, a);
                              }
                              if ("6" === f) {
                                  var S = "".concat(u, "style"),
                                      C = l[0];
                                  if (C.datakey) {
                                      var j = C.tempVnode.diuu,
                                          P =
                                              r[C.datakey].v[
                                                  "".concat(j, "style")
                                              ];
                                      (r[S] = P),
                                          (r[C.datakey].v[
                                              "".concat(j, "style")
                                          ] = "_5_");
                                  } else {
                                      var k = C.diuu,
                                          E = r["".concat(k, "style")];
                                      (r[S] = E),
                                          (r["".concat(k, "style")] = "_5_");
                                  }
                              }
                          })(e, t, n, r, o, a)
                        : u.prototype && Object.getPrototypeOf(u) === ve
                        ? (function(e, t, n, r, o, a) {
                              var i = e.animation,
                                  c = e.nodeName,
                                  u = e.props,
                                  s = e.diuu,
                                  l = G(e, o),
                                  p = l.diuu,
                                  f = l.diuuKey,
                                  d = l.shouldReuse,
                                  y = null,
                                  v = {};
                              if (d) {
                                  if (!(y = h.getCompInstByUUID(p)))
                                      return void q(e);
                                  (r[f] = p),
                                      (y.props = u),
                                      (y.context = _(c, n)),
                                      t._c.push(y),
                                      (v.tag = 0),
                                      (v.inst = y),
                                      V(v);
                              } else {
                                  var g,
                                      x = _(c, n);
                                  (y = new c(u, x)),
                                      t === m
                                          ? ((g = s), (y.isPageComp = !0))
                                          : ((g = M()), (r[f] = g)),
                                      (y.__diuu__ = g),
                                      t._c.push(y),
                                      (y._p = t),
                                      t instanceof _e &&
                                          ((y.hocWrapped = !0),
                                          t.isPageComp && (y.isPageComp = !0)),
                                      h.setCompInst(g, y),
                                      (v.tag = 1),
                                      (v.inst = y),
                                      V(v);
                              }
                              var w = y._c;
                              ne(y);
                              var S = y.render();
                              S && S.isReactElement
                                  ? ((S.isFirstEle = !0),
                                    (y._styleKey = "".concat(S.diuu, "style")))
                                  : (y._styleKey = void 0);
                              y._outStyleKey = ""
                                  .concat(a, ".")
                                  .concat(s, "style");
                              var C = b(y, n);
                              Q(S, y, C, y._r, y._or, "_r"),
                                  O(w, y._c, ue),
                                  i && (r["".concat(s, "animation")] = i);
                              z(y, v),
                                  (y.didChildUpdate = !1),
                                  (y.didSelfUpdate = !1);
                          })(e, t, n, r, o, a)
                        : u.prototype && Object.getPrototypeOf(u) === xe
                        ? (function(e, t, n, r, o, a) {
                              var i = e.nodeName,
                                  c = e.props,
                                  u = e.animation,
                                  s = e.ref,
                                  l = e.diuu,
                                  p = e.children,
                                  f = G(e, o),
                                  d = f.diuu,
                                  y = f.diuuKey,
                                  m = f.shouldReuse,
                                  v = null;
                              if (m) {
                                  if (!(v = h.getCompInstByUUID(d)))
                                      return void q(e);
                                  v.props = {};
                              } else
                                  ((v = new i()).props = {}),
                                      (d = M()),
                                      (v.__diuu__ = d),
                                      h.setCompInst(d, v);
                              r[y] = d;
                              for (
                                  var g = Object.keys(c), b = 0;
                                  b < g.length;
                                  b++
                              ) {
                                  var _ = g[b],
                                      x = c[_];
                                  if ("children" !== _)
                                      if ("refreshControl" === _) {
                                          var O = x.props,
                                              w = O.refreshing,
                                              S = void 0 !== w && w,
                                              C = O.onRefresh;
                                          (r["".concat(y, "refreshing")] = S),
                                              C
                                                  ? ((r[
                                                        "".concat(
                                                            y,
                                                            "onRefreshPassed"
                                                        )
                                                    ] = !0),
                                                    (v.props.onRefresh = J(C)))
                                                  : (r[
                                                        "".concat(
                                                            y,
                                                            "onRefreshPassed"
                                                        )
                                                    ] = !1);
                                      } else
                                          "function" == typeof x
                                              ? (v.props[_] = J(x))
                                              : (r["".concat(y).concat(_)] =
                                                    void 0 === x ? null : x);
                              }
                              if ("function" == typeof v.getStyle) {
                                  var j = v.getStyle(c);
                                  for (var P in j)
                                      r["".concat(y).concat(P)] = j[P];
                              } else
                                  console.warn(
                                      "基本组件必须提供getStyle方法！"
                                  );
                              c.numberOfLines &&
                                  (r["".concat(y, "style")] =
                                      r["".concat(y, "style")] +
                                      Y(c.numberOfLines));
                              "function" == typeof s && (s(v), (v._ref = s));
                              u && (r["".concat(l, "animation")] = u);
                              for (var k = 0; k < p.length; k++) {
                                  Q(p[k], t, n, r, o, a);
                              }
                          })(e, t, n, r, o, a)
                        : "function" == typeof u
                        ? (function(e, t, n, r, o, a) {
                              var i = e.animation,
                                  c = e.ref,
                                  u = e.nodeName,
                                  s = e.props,
                                  l = e.diuu,
                                  p = null,
                                  f = G(e, o),
                                  d = f.diuu,
                                  y = f.diuuKey,
                                  v = f.shouldReuse,
                                  g = {};
                              if (v) {
                                  if (!(p = h.getCompInstByUUID(d)))
                                      return void q(e);
                                  (r[y] = d),
                                      p.componentWillReceiveProps &&
                                          p.componentWillReceiveProps(s),
                                      p.UNSAFE_componentWillReceiveProps &&
                                          p.UNSAFE_componentWillReceiveProps(s);
                                  var w = ee(p),
                                      S = w.hasForceUpdate,
                                      C = w.nextState,
                                      j = w.callbacks,
                                      P = te(p, S, s, C);
                                  if (
                                      (P &&
                                          p.componentWillUpdate &&
                                          p.componentWillUpdate(s, C),
                                      P &&
                                          p.UNSAFE_componentWillUpdate &&
                                          p.UNSAFE_componentWillUpdate(s, C),
                                      (p.props = s),
                                      (p.context = _(u, n)),
                                      (p.state = C),
                                      t._c.push(p),
                                      !P)
                                  ) {
                                      if (p.didChildUpdate)
                                          for (
                                              var k = 0;
                                              k < p._c.length;
                                              k++
                                          ) {
                                              X(p._c[k]);
                                          }
                                      return (
                                          (function(e) {
                                              if (e === m || e.isPageComp)
                                                  e.styleEffect &&
                                                      (L({
                                                          inst: e,
                                                          tag: 2,
                                                          data: e.styleEffect
                                                      }),
                                                      (e.styleEffect = void 0));
                                              else {
                                                  var t = e._styleKey;
                                                  t
                                                      ? "_5_" !== e._r[t] &&
                                                        (!1 !== e._r[t] &&
                                                            !1 ===
                                                                e._myOutStyle &&
                                                            L({
                                                                tag: 3,
                                                                inst: e
                                                            }),
                                                        (e._myOutStyle =
                                                            e._r[t]),
                                                        (e._r[t] = "_5_"),
                                                        (e.styleEffect = void 0))
                                                      : (e._myOutStyle = !1),
                                                      x(
                                                          e._p,
                                                          e._myOutStyle,
                                                          e._outStyleKey
                                                      ),
                                                      e.styleEffect &&
                                                          (L({
                                                              inst: e,
                                                              tag: 2,
                                                              data:
                                                                  e.styleEffect
                                                          }),
                                                          (e.styleEffect = void 0));
                                              }
                                          })(p),
                                          (p.didChildUpdate = !1),
                                          void (p.didSelfUpdate = !1)
                                      );
                                  }
                                  (g.tag = 0),
                                      (g.inst = p),
                                      (g.callbacks = j),
                                      V(g);
                              } else {
                                  var E = _(u, n);
                                  (p = new u(s, E)).props || (p.props = s),
                                      p.context || (p.context = E),
                                      p.componentWillMount &&
                                          p.componentWillMount(),
                                      p.UNSAFE_componentWillMount &&
                                          p.UNSAFE_componentWillMount();
                                  var U = null;
                                  t === m
                                      ? ((U = l), (p.isPageComp = !0))
                                      : ((U = M()), (r[y] = U)),
                                      (p.__diuu__ = U),
                                      t._c.push(p),
                                      (p._p = t),
                                      t instanceof _e &&
                                          ((p.hocWrapped = !0),
                                          t.isPageComp && (p.isPageComp = !0)),
                                      h.setCompInst(U, p),
                                      (g.tag = 1),
                                      (g.inst = p),
                                      V(g);
                              }
                              var R = p._c;
                              ne(p);
                              var I = p.render();
                              I && I.isReactElement
                                  ? ((I.isFirstEle = !0),
                                    (p._styleKey = "".concat(I.diuu, "style")))
                                  : (p._styleKey = void 0);
                              (p._outStyleKey = ""
                                  .concat(a, ".")
                                  .concat(l, "style")),
                                  (p._parentContext = n);
                              var D = b(p, n);
                              Q(I, p, D, p._r, p._or, "_r"),
                                  O(R, p._c, ue),
                                  "function" == typeof c &&
                                      (c(p), (p._ref = c));
                              i && (r["".concat(l, "animation")] = i);
                              z(p, g),
                                  (p.didChildUpdate = !1),
                                  (p.didSelfUpdate = !1);
                          })(e, t, n, r, o, a)
                        : e.__source &&
                          console.error(
                              ""
                                  .concat(
                                      e.__source.fileName,
                                      " 存在形式<XX/> 其中XX是"
                                  )
                                  .concat(e.nodeName, "！请排查")
                          );
            } catch (e) {
                console.error(e);
            }
        }
        function J(e) {
            return function() {
                for (
                    var t = this, n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                )
                    r[o] = arguments[o];
                le(function() {
                    e.apply(t, r);
                });
            };
        }
        function G(e, t) {
            var n = e.key,
                r = e.isTempMap,
                o = e.diuu;
            if (!t) return { diuu: "", diuuKey: o, shouldReuse: !1 };
            var a = null,
                i = !1;
            void 0 !== n &&
                t &&
                r &&
                ((a = t[t.diuu]), (i = t.tempName === e.tempName));
            return (
                !r && t && (i = !!(a = t[o])),
                { diuu: a, diuuKey: o, shouldReuse: i }
            );
        }
        function q(e) {
            console.warn(
                "未知原因导致React 实例丢失， please create an issue! 错误节点：",
                e
            );
        }
        function Y(e) {
            return null == e
                ? ""
                : "overflow:hidden;display: -webkit-box;;text-overflow:ellipsis;-webkit-line-clamp:" +
                      e +
                      ";-webkit-box-orient: vertical; word-wrap:break-word;";
        }
        function Z(e) {
            return "cover" === e
                ? "aspectFill"
                : "contain" === e
                ? "aspectFit"
                : "stretch" === e
                ? "scaleToFill"
                : "repeat" === e
                ? (console.warn("Image的resizeMode属性小程序端不支持repeat"),
                  "aspectFill")
                : "aspectFill";
        }
        function $(e) {
            var t = Math.round(10 * e);
            return "touchableOpacity".concat(t);
        }
        function ee(e) {
            if (!e.updateQueue || 0 === e.updateQueue.length)
                return {
                    hasForceUpdate: !1,
                    nextState: e.state,
                    callbacks: void 0
                };
            for (
                var t = !1,
                    n = [],
                    r = Object.assign({}, e.state),
                    o = !1,
                    a = 0;
                a < e.updateQueue.length;
                a++
            ) {
                var c = e.updateQueue[a];
                if (0 === c.tag) {
                    var u = c.payload;
                    if ("function" == typeof u) {
                        var s = u.call(e, r);
                        Object.assign(r, s);
                    }
                    "object" === i(u) && Object.assign(r, u), (o = !0);
                } else 2 === c.tag && (t = !0);
                c.callback &&
                    "function" == typeof c.callback &&
                    n.push(c.callback);
            }
            return (
                (e.updateQueue = []),
                {
                    hasForceUpdate: t,
                    callbacks: n.length > 0 ? n : void 0,
                    nextState: o ? r : e.state
                }
            );
        }
        function te(e, t, n, r) {
            return (
                !!t || !e.shouldComponentUpdate || e.shouldComponentUpdate(n, r)
            );
        }
        function ne(e) {
            (e._or = e._r), (e._r = {}), (e._c = []), (e.__eventHanderMap = {});
        }
        var re = new RegExp("-", "g");
        function oe(e, t, n, r) {
            if (e !== t) {
                var o = i(e);
                if (o !== i(t) || null == t)
                    !(function e(t, n, r) {
                        var o = i(t);
                        if (Array.isArray(t)) {
                            if (0 === t.length) return void (r[n] = t);
                            for (var a = 0; a < t.length; a++) {
                                e(t[a], "".concat(n, "[").concat(a, "]"), r);
                            }
                        } else if ("object" === o && null !== t) {
                            var c = Object.keys(t);
                            if (0 === c.length) return void (r[n] = t);
                            for (var u = 0; u < c.length; u++) {
                                var s = c[u];
                                e(t[s], "".concat(n, ".").concat(s), r);
                            }
                        } else r[n] = t;
                    })(e, n, r);
                else if (Array.isArray(e)) {
                    if (e.length < t.length) return void (r[n] = e);
                    for (var a = 0; a < e.length; a++) {
                        oe(e[a], t[a], "".concat(n, "[").concat(a, "]"), r);
                    }
                } else if ("object" === o && null !== o) {
                    if (e.__isAnimation__) return void (r[n] = e);
                    var c = Object.keys(e);
                    if (
                        (function(e, t) {
                            var n = new Set(t);
                            return e.some(function(e) {
                                return !n.has(e);
                            });
                        })(Object.keys(t), c)
                    )
                        return void (r[n] = e);
                    for (var u = 0; u < c.length; u++) {
                        var s = c[u];
                        oe(e[s], t[s], "".concat(n, ".").concat(s), r);
                    }
                } else r[n] = e;
            }
        }
        var ae = {};
        var ie = !1,
            ce = !1,
            ue = [];
        function se(e, t) {
            e.updateQueue.push(t),
                (function(e) {
                    e.didSelfUpdate = !0;
                    var t = e._p;
                    for (; t && !t.didChildUpdate; )
                        (t.didChildUpdate = !0), (t = t._p);
                })(e),
                pe();
        }
        function le(e) {
            ce ? e() : ((ce = !0), e(), (ce = !1), pe());
        }
        function pe() {
            if (!ce && !ie) {
                (ie = !0), X(m), (ie = !1), S(ue), (ue = []);
                var e = H();
                ye(e.firstEffect, e.lastEffect);
            }
        }
        function fe(e, t) {
            (ie = !0),
                Q(e, m, m.childContext, null, null, null),
                (ie = !1),
                h.setWxCompInst(t.data.diuu, t);
            var n = H();
            ye(n.firstEffect, n.lastEffect);
        }
        function de(e) {
            Q(Se(e, { diuu: "fakeUUID" }), m, {}, {}, null, null);
            var t = H().lastEffect.inst,
                n = b(t, t._parentContext);
            Object.assign(m.childContext, n), (m._c = []);
        }
        function ye(e, t) {
            if (e) {
                var n = j();
                n.groupSetData(function() {
                    for (var r, o, a, i = e; i; ) {
                        var c = i,
                            u = c.tag,
                            s = c.inst;
                        if (
                            s.isPageComp &&
                            s instanceof _e &&
                            0 === Object.keys(s._r).length
                        )
                            s.getWxInst().setData({ _r: {} }),
                                (i = i.nextEffect);
                        else if (s instanceof _e || !1 === s._myOutStyle)
                            i = i.nextEffect;
                        else {
                            if (2 === u) s.getWxInst().setData(i.data);
                            if (3 === u) s.getWxInst().setData({ _r: s._r });
                            if (1 === u) s.getWxInst().setData({ _r: s._r });
                            if (0 === u) {
                                var l = s.getWxInst();
                                if (i.hasMpInit) l.setData({ _r: s._r });
                                else {
                                    var p =
                                        ((r = s._r),
                                        (o = s._or),
                                        (a = void 0),
                                        oe(r, o, "_r", (a = {})),
                                        a);
                                    0 !== Object.keys(p).length && l.setData(p);
                                }
                                s._or = null;
                            }
                            i = i.nextEffect;
                        }
                    }
                    n.setData({}, function() {
                        le(function() {
                            !(function(e) {
                                var t = e;
                                for (; t; ) {
                                    var n = t,
                                        r = n.tag,
                                        o = n.inst;
                                    1 === r &&
                                        o.componentDidMount &&
                                        o.componentDidMount(),
                                        0 === r &&
                                            (o.componentDidUpdate &&
                                                o.componentDidUpdate(),
                                            t.callbacks &&
                                                t.callbacks.forEach(function(
                                                    e
                                                ) {
                                                    e && e();
                                                })),
                                        (t = t.preEffect);
                                }
                            })(t),
                                wx
                                    .createSelectorQuery()
                                    .selectAll(
                                        ".m-lt, .page-container >>> .m-lt"
                                    )
                                    .boundingClientRect()
                                    .exec(function(e) {
                                        var t = e[0];
                                        0 !== t.length &&
                                            (console.warn(
                                                "注意：小程序onLayout参数的x,y是相对于视口的位置"
                                            ),
                                            le(function() {
                                                var e = j().data.diuu,
                                                    n = ae[e],
                                                    r = {};
                                                t.forEach(function(e) {
                                                    var t = e.dataset.diuu;
                                                    if (
                                                        n &&
                                                        n[t] &&
                                                        ((o = n[t]),
                                                        (a = e),
                                                        o.x === a.left &&
                                                            o.y === a.top &&
                                                            o.width ===
                                                                a.width &&
                                                            o.height ===
                                                                a.height)
                                                    )
                                                        r[t] = n[t];
                                                    else {
                                                        var o, a;
                                                        r[t] = {
                                                            x: e.left,
                                                            y: e.top,
                                                            width: e.width,
                                                            height: e.height
                                                        };
                                                        var i = C(
                                                            e.dataset.parent,
                                                            t,
                                                            "onLayout"
                                                        );
                                                        i &&
                                                            i({
                                                                nativeEvent: {
                                                                    layout: r[t]
                                                                }
                                                            });
                                                    }
                                                }),
                                                    (ae[e] = r);
                                            }));
                                    });
                        });
                    });
                });
            }
        }
        var he = (function() {
                function e() {
                    l(this, e);
                }
                return (
                    p(e, [
                        {
                            key: "getWxInst",
                            value: function value() {
                                var e = null;
                                if (this.hocWrapped) {
                                    for (var t = this._p; t.hocWrapped; )
                                        t = t._p;
                                    e = t.__diuu__;
                                } else e = this.__diuu__;
                                return h.getWxInstByUUID(e);
                            }
                        }
                    ]),
                    e
                );
            })(),
            me = (function(e) {
                function t() {
                    return l(this, t), c(this, u(t).apply(this, arguments));
                }
                return s(t, e), t;
            })(he),
            ve = (function(e) {
                function t(e, n) {
                    var r;
                    return (
                        l(this, t),
                        ((r = c(this, u(t).call(this))).props = e),
                        (r.context = n),
                        r
                    );
                }
                return s(t, e), t;
            })(he),
            ge = (function(e) {
                function t(e, n) {
                    var r;
                    return (
                        l(this, t),
                        ((r = c(this, u(t).call(this))).props = e),
                        (r.context = n),
                        (r.updateQueue = []),
                        r
                    );
                }
                return (
                    s(t, e),
                    p(t, [
                        {
                            key: "forceUpdate",
                            value: function value(e) {
                                se(this, { tag: 2, callback: e });
                            }
                        },
                        {
                            key: "setState",
                            value: function value(e, t) {
                                se(this, { tag: 0, payload: e, callback: t });
                            }
                        }
                    ]),
                    t
                );
            })(he),
            be = (function(e) {
                function t() {
                    return l(this, t), c(this, u(t).apply(this, arguments));
                }
                return (
                    s(t, e),
                    p(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function value(e, t) {
                                return !(W(e, this.props) && W(t, this.state));
                            }
                        }
                    ]),
                    t
                );
            })(ge),
            _e = (function(e) {
                function t(e, n) {
                    return l(this, t), c(this, u(t).call(this, e, n));
                }
                return s(t, e), t;
            })(ge),
            xe = (function() {
                function e() {
                    l(this, e);
                }
                return (
                    p(e, [
                        {
                            key: "getWxInst",
                            value: function value() {
                                return h.getWxInstByUUID(this.__diuu__);
                            }
                        },
                        {
                            key: "transformViewStyle",
                            value: function value(e) {
                                return U(e, "view");
                            }
                        },
                        {
                            key: "transformScrollViewStyle",
                            value: function value(e) {
                                return U(e, "scroll");
                            }
                        },
                        {
                            key: "transformTextStyle",
                            value: function value(e) {
                                return U(e, "OuterText");
                            }
                        },
                        {
                            key: "transformStyle",
                            value: function value(e) {
                                return U(e);
                            }
                        }
                    ]),
                    e
                );
            })();
        function Oe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function we(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Oe(Object(n), !0).forEach(function(t) {
                          o(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : Oe(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                          );
                      });
            }
            return e;
        }
        function Se(e, t) {
            if (e || !t.__source) {
                if (!e.notSupport) {
                    for (
                        var n = [],
                            r = arguments.length,
                            o = new Array(r > 2 ? r - 2 : 0),
                            i = 2;
                        i < r;
                        i++
                    )
                        o[i - 2] = arguments[i];
                    for (var c = 0; c < o.length; c++)
                        o[c] instanceof Array
                            ? (n = n.concat(o[c]))
                            : n.push(o[c]);
                    var u = t || {},
                        s = u.animation,
                        l = u.ref,
                        p = u.key,
                        d = u.tempName,
                        y = u.tempVnode,
                        h = u.CPTVnode,
                        m = u.datakey,
                        v = u.diuu,
                        g = u.__source,
                        b =
                            (u.__self,
                            a(u, [
                                "animation",
                                "ref",
                                "key",
                                "tempName",
                                "tempVnode",
                                "CPTVnode",
                                "datakey",
                                "diuu",
                                "__source",
                                "__self"
                            ]));
                    for (var _ in ("string" == typeof t.ref &&
                        console.warn("ref只支持函数形式，不支持字符串"),
                    (t.onStartShouldSetResponder ||
                        t.onMoveShouldSetResponder ||
                        t.onResponderGrant ||
                        t.onResponderReject ||
                        t.onResponderMove ||
                        t.onResponderRelease ||
                        t.onResponderTerminationRequest ||
                        t.onResponderTerminate) &&
                        console.warn("小程序不支持手势响应系统"),
                    b)) {
                        var x = b[_];
                        "style" !== _ && (P(_) || (b[_] = f(x)));
                    }
                    var O = b;
                    e.defaultProps && (O = we({}, e.defaultProps, {}, b)),
                        (O.children =
                            "string" == typeof e ||
                            (e.prototype && Object.getPrototypeOf(e) === xe)
                                ? n
                                : f(n));
                    var w = v;
                    return (
                        v || "function" != typeof e || (w = "HOCKEY"),
                        {
                            isReactElement: !0,
                            nodeName: e,
                            props: O,
                            key: p,
                            diuu: w,
                            ref: l,
                            children: n,
                            animation: s,
                            tempName: d,
                            tempVnode: y,
                            CPTVnode: h,
                            datakey: m,
                            __source: g
                        }
                    );
                }
                e.notSupport();
            } else
                console.error(
                    "".concat(
                        t.__source.fileName,
                        " 文件存在 <XX />, 其中XX为undefined！请排查"
                    )
                );
        }
        function Ce(e) {
            var t = {
                properties: { diuu: null },
                attached: function attached() {
                    this.data.diuu && h.setWxCompInst(this.data.diuu, this);
                },
                detached: function detached() {
                    h.removeWxInst(this.data.diuu);
                },
                methods: {
                    eventHandler: function eventHandler(e) {
                        var t = C(
                            this.data.diuu,
                            e.currentTarget.dataset.diuu,
                            e.type
                        );
                        t && t(e);
                    }
                }
            };
            return (
                e &&
                    ((t.methods.onLoad = function(t) {
                        var n = this,
                            r = t.params,
                            o = {};
                        r && (o = JSON.parse(decodeURIComponent(r)));
                        var a = M();
                        (this.data.diuu = a),
                            wx._getCompByPath(e).then(function(e) {
                                fe(
                                    Se(e, {
                                        rawQuery: t,
                                        routerParams: o,
                                        diuu: a
                                    }),
                                    n
                                );
                                var r = h.getCompInstByUUID(n.data.diuu);
                                if (r.componentDidFocus) {
                                    var i = r.componentDidFocus,
                                        c = r.componentDidMount;
                                    (r.componentDidFocus = void 0),
                                        (r.componentDidMount = function() {
                                            c && c.call(r),
                                                i.call(r),
                                                (r.componentDidFocus = i),
                                                (r.componentDidMount = c);
                                        });
                                }
                            });
                    }),
                    (t.methods.onShow = function() {
                        var e = h.getCompInstByUUID(this.data.diuu);
                        e &&
                            e.componentDidFocus &&
                            le(function() {
                                e.componentDidFocus();
                            });
                    }),
                    (t.methods.onHide = function() {
                        var e = h.getCompInstByUUID(this.data.diuu);
                        e.componentWillUnfocus && e.componentWillUnfocus();
                    }),
                    (t.methods.onUnload = function() {
                        var e,
                            t = h.getCompInstByUUID(this.data.diuu);
                        t.componentWillUnfocus && t.componentWillUnfocus(),
                            (function(e) {
                                m._c = m._c.filter(function(t) {
                                    return t !== e;
                                });
                                var t = [];
                                w(e, t), S(t);
                            })(t),
                            (e = this.data.diuu),
                            delete ae[e];
                    })),
                t
            );
        }
        function je(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Pe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? je(Object(n), !0).forEach(function(t) {
                          o(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : je(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                          );
                      });
            }
            return e;
        }
        var ke = {
                renderPage: fe,
                Component: ge,
                PureComponent: be,
                FuncComponent: ve,
                HocComponent: _e,
                createElement: Se,
                WxNormalComp: Ce,
                RNBaseComponent: xe,
                tackleWithStyleObj: U,
                styleType: k,
                h: Se,
                instanceManager: h,
                getPropsMethod: g,
                unstable_batchedUpdates: le,
                renderApp: de
            },
            Ee = Se;
        (wx.__bridge = {
            reactCompHelper: function reactCompHelper(e) {
                e.properties = Pe({}, e.properties, { diuu: null });
                var t = e.attached;
                e.attached = function() {
                    var e = this.data;
                    Object.defineProperty(this, "data", {
                        get: function get() {
                            var t = h.getCompInstByUUID(e.diuu);
                            return t ? Pe({}, e, {}, t.props) : e;
                        }
                    }),
                        t && t.call(this),
                        h.setWxCompInst(this.data.diuu, this);
                };
                var n = e.detached;
                return (
                    (e.detached = function() {
                        n && n.call(this), h.removeUUID(this.data.diuu);
                    }),
                    e.methods || (e.methods = {}),
                    (e.methods.getReactComp = function() {
                        return h.getCompInstByUUID(this.data.diuu);
                    }),
                    e
                );
            },
            WxNormalComp: Ce
        }),
            (t.Component = ge),
            (t.FuncComponent = ve),
            (t.HocComponent = _e),
            (t.PureComponent = be),
            (t.RNBaseComponent = xe),
            (t.WxNormalComp = Ce),
            (t.createElement = Se),
            (t.default = ke),
            (t.getPropsMethod = g),
            (t.h = Ee),
            (t.instanceManager = h),
            (t.renderApp = de),
            (t.renderPage = fe),
            (t.styleType = k),
            (t.tackleWithStyleObj = U),
            (t.unstable_batchedUpdates = le);
    },
    function(e, t, n) {
        var r = n(9);
        (e.exports = function(e, t, n) {
            return (
                (t = r(t)) in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (e[t] = n),
                e
            );
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t) {
        (e.exports = function(e) {
            return e && e.__esModule ? e : { default: e };
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t, n) {
        var r = n(2).default,
            o = n(12);
        (e.exports = function(e) {
            var t = o(e, "string");
            return "symbol" === r(t) ? t : String(t);
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(6),
            a = r(n(7)),
            i = r(n(0)),
            c = r(n(1)),
            u = r(n(4)),
            s = r(n(5)),
            l = r(n(3)),
            p = r(n(2));
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        var d = o.styleType.SCROLL;
        function y(e, t) {
            return o.createElement("template", { datakey: t, tempVnode: e });
        }
        var h = (function(e) {
            function t() {
                return i(this, t), u(this, s(t).apply(this, arguments));
            }
            return (
                l(t, e),
                c(t, [
                    {
                        key: "scrollToOffset",
                        value: function value(e) {
                            o.instanceManager
                                .getWxInstByUUID(this.__diuu__)
                                .scrollToOffset(e);
                        }
                    },
                    {
                        key: "scrollTo",
                        value: function value(e) {
                            o.instanceManager
                                .getWxInstByUUID(this.__diuu__)
                                .scrollTo(e);
                        }
                    },
                    {
                        key: "scrollToIndex",
                        value: function value(e) {
                            o.instanceManager
                                .getWxInstByUUID(this.__diuu__)
                                .scrollToIndex(e);
                        }
                    },
                    {
                        key: "componentWillReceiveProps",
                        value: function value(e) {
                            void 0 !== this.props.refreshing &&
                                this.props.refreshing !== e.refreshing &&
                                o.instanceManager
                                    .getWxInstByUUID(this.__diuu__)
                                    .setData({ sr: e.refreshing });
                        }
                    },
                    {
                        key: "getStyleAndDiuu",
                        value: function value() {
                            var e = this.props,
                                t = e.style,
                                n = e.contentContainerStyle;
                            return {
                                diuu: "",
                                style: o.tackleWithStyleObj(t, d),
                                contentContainerStyle: o.tackleWithStyleObj(n)
                            };
                        }
                    },
                    {
                        key: "render",
                        value: function value() {
                            var e = this.props,
                                t = e.ListHeaderComponent,
                                n = e.ListFooterComponent,
                                r = e.ListEmptyComponent,
                                i = e.data,
                                c = e.renderItem,
                                u = e.keyExtractor,
                                s = e.contentContainerStyle,
                                l = void 0 === s ? "" : s,
                                p = e.numColumns,
                                d = void 0 === p ? 1 : p,
                                h = e.onEndReachedThreshold,
                                m = void 0 === h ? 0.1 : h,
                                v = e.refreshing,
                                g = void 0 !== v && v,
                                b = e.horizontal,
                                _ = void 0 !== b && b,
                                x = e.onRefresh,
                                O = e.getItemLayout,
                                w = e.stickyHeaderIndices,
                                S = void 0 === w ? [] : w,
                                C = [];
                            if (t) {
                                var j = t.isReactElement ? t : t();
                                C.push(y(j, "ListHeaderComponent"));
                            }
                            if (r && i && 0 === i.length) {
                                var P = r.isReactElement ? r : r();
                                C.push(y(P, "ListEmptyComponent"));
                            }
                            if (i && i.length > 0) {
                                var k = o.createElement("template", {
                                    datakey: "renderItem",
                                    tempVnode: i.map(function(e, t) {
                                        var n = c({ item: e, index: t }),
                                            r = t;
                                        return (
                                            (r = u ? u(e, t) : e.key),
                                            n.isReactElement && (n.key = r),
                                            n
                                        );
                                    })
                                });
                                C.push(k);
                            }
                            if (n) {
                                var E = n.isReactElement ? n : n();
                                C.push(y(E, "ListFooterComponent"));
                            }
                            var U = S;
                            t &&
                                (U = S.map(function(e) {
                                    return e - 1;
                                }));
                            var R = (function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n =
                                            null != arguments[t]
                                                ? arguments[t]
                                                : {};
                                        t % 2
                                            ? f(Object(n), !0).forEach(function(
                                                  t
                                              ) {
                                                  a(e, t, n[t]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                  e,
                                                  Object.getOwnPropertyDescriptors(
                                                      n
                                                  )
                                              )
                                            : f(Object(n)).forEach(function(t) {
                                                  Object.defineProperty(
                                                      e,
                                                      t,
                                                      Object.getOwnPropertyDescriptor(
                                                          n,
                                                          t
                                                      )
                                                  );
                                              });
                                    }
                                    return e;
                                })(
                                    {
                                        contentContainerStyle: l,
                                        stickyHeaderIndices: U,
                                        numColumns: d,
                                        onEndReachedThreshold: 600 * m,
                                        horizontal: _,
                                        refreshing: g,
                                        onRefreshPassed: !!x
                                    },
                                    this.getStyleAndDiuu()
                                ),
                                I = [],
                                D = 0;
                            if (
                                Array.isArray(U) &&
                                U.length > 0 &&
                                "function" == typeof O
                            )
                                for (var W = 0; W < U.length; W++) {
                                    var T = D,
                                        A = O(i, U[W]),
                                        M = A.offset,
                                        N = A.length,
                                        F = A.index;
                                    I.push({
                                        baseOffset: M,
                                        length: N,
                                        index: F,
                                        topPosition: T
                                    }),
                                        (D += N);
                                }
                            return (
                                Object.assign(R, { stickyInfos: I }),
                                o.createElement.apply(
                                    void 0,
                                    ["phblock", R].concat(C)
                                )
                            );
                        }
                    }
                ]),
                t
            );
        })(o.PureComponent);
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? m(Object(n), !0).forEach(function(t) {
                          a(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : m(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                          );
                      });
            }
            return e;
        }
        var g = o.styleType.SCROLL;
        function b(e, t) {
            return o.createElement("template", { datakey: t, tempVnode: e });
        }
        var _ = (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [
                        {
                            key: "componentWillReceiveProps",
                            value: function value(e) {
                                void 0 !== this.props.refreshing &&
                                    this.props.refreshing !== e.refreshing &&
                                    o.instanceManager
                                        .getWxInstByUUID(this.__diuu__)
                                        .setData({ sr: e.refreshing });
                            }
                        },
                        {
                            key: "getStyleAndDiuu",
                            value: function value() {
                                var e = this.props,
                                    t = e.style,
                                    n = e.contentContainerStyle;
                                return {
                                    diuu: "",
                                    style: o.tackleWithStyleObj(t, g),
                                    contentContainerStyle: o.tackleWithStyleObj(
                                        n
                                    )
                                };
                            }
                        },
                        {
                            key: "render",
                            value: function value() {
                                var e = this.props,
                                    t = e.ListHeaderComponent,
                                    n = e.ListFooterComponent,
                                    r = e.sections,
                                    a = e.renderItem,
                                    i = e.renderSectionFooter,
                                    c = e.renderSectionHeader,
                                    u = e.keyExtractor,
                                    s = e.contentContainerStyle,
                                    l = void 0 === s ? "" : s,
                                    p = e.numColumns,
                                    f = void 0 === p ? 1 : p,
                                    d = e.onEndReachedThreshold,
                                    y = void 0 === d ? null : d,
                                    h = e.refreshing,
                                    m = void 0 !== h && h,
                                    g = e.onRefresh,
                                    _ = e.renderScrollComponent,
                                    x = [];
                                if (t) {
                                    var O = t.isReactElement ? t : t();
                                    x.push(b(O, "ListHeaderComponent"));
                                }
                                if (r && r.length > 0) {
                                    var w = o.createElement("template", {
                                        datakey: "sections",
                                        tempVnode: r.map(function(e, t) {
                                            var n = [];
                                            if (c) {
                                                var r = c({ section: e });
                                                n.push(
                                                    b(r, "renderSectionHeader")
                                                );
                                            }
                                            if (
                                                e.data &&
                                                e.data.length > 0 &&
                                                a
                                            ) {
                                                var s = o.createElement(
                                                    "template",
                                                    {
                                                        datakey: "renderItem",
                                                        tempVnode: e.data.map(
                                                            function(t, n) {
                                                                var r = a({
                                                                        item: t,
                                                                        index: n,
                                                                        section: e
                                                                    }),
                                                                    o = n;
                                                                return (
                                                                    (o = u
                                                                        ? u(
                                                                              t,
                                                                              n
                                                                          )
                                                                        : t.key),
                                                                    r.isReactElement &&
                                                                        (r.key = o),
                                                                    r
                                                                );
                                                            }
                                                        )
                                                    }
                                                );
                                                n.push(s);
                                            }
                                            if (i) {
                                                var l = i({ section: e });
                                                n.push(
                                                    b(l, "renderSectionFooter")
                                                );
                                            }
                                            return o.createElement.apply(
                                                void 0,
                                                [
                                                    "phblock",
                                                    {
                                                        key: e.key || t,
                                                        tempName:
                                                            "sectionsRender"
                                                    }
                                                ].concat(n)
                                            );
                                        })
                                    });
                                    x.push(w);
                                }
                                if (n) {
                                    var S = n.isReactElement ? n : n();
                                    x.push(b(S, "ListFooterComponent"));
                                }
                                return o.createElement.apply(
                                    void 0,
                                    [
                                        "phblock",
                                        v(
                                            {
                                                contentContainerStyle: l,
                                                numColumns: f,
                                                onEndReachedThreshold: y
                                                    ? 300 * y
                                                    : 0,
                                                refreshing: m,
                                                onRefreshPassed: !!g,
                                                renderScrollComponentPassed: !!_
                                            },
                                            this.getStyleAndDiuu()
                                        )
                                    ].concat(x)
                                );
                            }
                        }
                    ]),
                    t
                );
            })(o.PureComponent),
            x = (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [
                        {
                            key: "scrollTo",
                            value: function value(e) {
                                this.getWxInst().scrollTo(e);
                            }
                        },
                        {
                            key: "scrollToEnd",
                            value: function value() {
                                this.getWxInst().scrollTo({
                                    x: 9999999,
                                    y: 9999999
                                });
                            }
                        },
                        {
                            key: "getStyle",
                            value: function value(e) {
                                return {
                                    style: this.transformScrollViewStyle(
                                        e.style
                                    ),
                                    contentContainerStyle: this.transformStyle(
                                        e.contentContainerStyle
                                    )
                                };
                            }
                        }
                    ]),
                    t
                );
            })(o.RNBaseComponent),
            O = (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [
                        {
                            key: "getStyle",
                            value: function value(e) {
                                return { style: "" };
                            }
                        }
                    ]),
                    t
                );
            })(o.RNBaseComponent);
        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        var S = o.styleType.VIEW,
            C = (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [
                        {
                            key: "getStyleAndDiuu",
                            value: function value() {
                                var e = this.props.style;
                                return {
                                    diuu: "",
                                    style: o.tackleWithStyleObj(e, S)
                                };
                            }
                        },
                        {
                            key: "getSelectableIndex",
                            value: function value(e) {
                                for (
                                    var t = this.props.selectedValue, n = 0;
                                    n < e.length;
                                    n++
                                ) {
                                    if (e[n].value === t) return [n];
                                }
                                return [0];
                            }
                        },
                        {
                            key: "render",
                            value: function value() {
                                var e = this.props.children,
                                    t = [],
                                    n = o.createElement("template", {
                                        datakey: "childrenData",
                                        tempVnode: e.map(function(e, n) {
                                            var r = e,
                                                a = e.props,
                                                i = a.label,
                                                c = a.value;
                                            t.push({ label: i, value: c });
                                            var u = n;
                                            return o.createElement(
                                                "childrenCPT",
                                                {
                                                    key: u,
                                                    diuu: "childrenDIUU",
                                                    CPTVnode: r,
                                                    tempName: "children"
                                                }
                                            );
                                        })
                                    }),
                                    r = this.getSelectableIndex(t);
                                return o.createElement(
                                    "phblock",
                                    (function(e) {
                                        for (
                                            var t = 1;
                                            t < arguments.length;
                                            t++
                                        ) {
                                            var n =
                                                null != arguments[t]
                                                    ? arguments[t]
                                                    : {};
                                            t % 2
                                                ? w(Object(n), !0).forEach(
                                                      function(t) {
                                                          a(e, t, n[t]);
                                                      }
                                                  )
                                                : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(
                                                      e,
                                                      Object.getOwnPropertyDescriptors(
                                                          n
                                                      )
                                                  )
                                                : w(Object(n)).forEach(function(
                                                      t
                                                  ) {
                                                      Object.defineProperty(
                                                          e,
                                                          t,
                                                          Object.getOwnPropertyDescriptor(
                                                              n,
                                                              t
                                                          )
                                                      );
                                                  });
                                        }
                                        return e;
                                    })(
                                        {
                                            itemLength: e.length,
                                            pickData: t,
                                            seleIndex: r
                                        },
                                        this.getStyleAndDiuu()
                                    ),
                                    n
                                );
                            }
                        }
                    ]),
                    t
                );
            })(o.PureComponent);
        C.Item = O;
        var j = (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [
                        {
                            key: "getStyle",
                            value: function value(e) {
                                return {
                                    style: this.transformViewStyle(e.style)
                                };
                            }
                        },
                        {
                            key: "focus",
                            value: function value() {
                                this.getWxInst().focus();
                            }
                        },
                        {
                            key: "isFocused",
                            value: function value() {
                                this.getWxInst().isFocused();
                            }
                        }
                    ]),
                    t
                );
            })(o.RNBaseComponent),
            P = (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [
                        {
                            key: "getStyle",
                            value: function value(e) {
                                return { style: this.transformViewStyle("") };
                            }
                        }
                    ]),
                    t
                );
            })(o.RNBaseComponent),
            k = (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [
                        {
                            key: "getStyle",
                            value: function value(e) {
                                return { style: U(e) };
                            }
                        }
                    ]),
                    t
                );
            })(o.RNBaseComponent);
        function E(e, t, n) {
            return '<rect width="7" height="20" x="46.5" y="40" fill="'
                .concat(e, '" style="opacity: ')
                .concat(t, '" rx="5" ry="5" transform="')
                .concat(n, '"/>');
        }
        function U(e) {
            var t = e.animating,
                n = void 0 === t || t,
                r = e.color,
                o = e.hidesWhenStopped,
                a = e.size,
                i = null;
            "small" === a && (i = 20), "large" === a && (i = 36);
            var c = '\n      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 100 100" version="1.1">\n      <path fill="none" d="M0 0h100v100H0z"/>\n      '
                .concat(E(r, 1, "translate(0 -30)"), "\n      ")
                .concat(E(r, 0.93, "rotate(30 105.98 65)"), "\n      ")
                .concat(E(r, 0.86, "rotate(60 75.98 65)"), "\n      ")
                .concat(E(r, 0.79, "rotate(90 65 65)"), "\n      ")
                .concat(E(r, 0.73, "rotate(120 58.66 65)"), "\n      ")
                .concat(E(r, 0.66, "rotate(150 54.02 65)"), "\n      ")
                .concat(E(r, 0.59, "rotate(180 50 65)"), "\n      ")
                .concat(E(r, 0.53, "rotate(-150 45.98 65)"), "\n      ")
                .concat(E(r, 0.46, "rotate(-120 41.34 65)"), "\n      ")
                .concat(E(r, 0.39, "rotate(-90 35 65)"), "\n      ")
                .concat(E(r, 0.33, "rotate(-60 24.02 65)"), "\n      ")
                .concat(E(r, 0.26, "rotate(-30 -5.98 65)"), "\n  </svg>");
            return "\n    width: "
                .concat(i, "px;\n    height: ")
                .concat(i, "px;\n    display: flex;\n    ")
                .concat(
                    n ? "animation: wxai 1s steps(12, end) infinite;" : ";",
                    "\n    "
                )
                .concat(
                    !n && o ? "visibility: hidden;" : ";",
                    "\n    background: transparent url('data:image/svg+xml;charset=utf8, "
                )
                .concat(
                    encodeURIComponent(c),
                    "') no-repeat;\n    background-size: 100%;\n    "
                );
        }
        var R = (function(e) {
            function t() {
                return i(this, t), u(this, s(t).apply(this, arguments));
            }
            return (
                l(t, e),
                c(t, [
                    {
                        key: "getStyle",
                        value: function value(e) {
                            return {
                                style: this.transformViewStyle(e.style),
                                imageStyle: this.transformStyle(e.imageStyle),
                                resizeMode: I(e.resizeMode)
                            };
                        }
                    }
                ]),
                t
            );
        })(o.RNBaseComponent);
        function I(e) {
            return "cover" === e
                ? "aspectFill"
                : "contain" === e
                ? "aspectFit"
                : "stretch" === e
                ? "scaleToFill"
                : "repeat" === e
                ? (console.warn("Image的resizeMode属性小程序端不支持repeat"),
                  "aspectFill")
                : "aspectFill";
        }
        function D(e, t, n) {
            var r = "";
            return (
                (r += e ? "visibility: visible;" : "visibility: hidden;"),
                (r += t
                    ? "background-color: transparent;"
                    : "background-color: white;"),
                "none" === n ||
                    ("slide" === n
                        ? ((r += "transition: all 0.3s;"),
                          (r += e ? "top: 0;" : "top: 100vh;"))
                        : "fade" === n &&
                          ((r += "transition: all 0.2s;"),
                          (r += e ? "opacity: 1" : "opacity: 0"))),
                r
            );
        }
        var W = (function(e) {
            function t() {
                return i(this, t), u(this, s(t).apply(this, arguments));
            }
            return (
                l(t, e),
                c(t, [
                    {
                        key: "getStyle",
                        value: function value(e) {
                            var t = e.visible,
                                n = e.transparent,
                                r = e.animationType;
                            return {
                                style: "display: flex; position: fixed; top:0; bottom:0; left:0; right:0; z-index: 100000; ".concat(
                                    D(t, n, r)
                                )
                            };
                        }
                    }
                ]),
                t
            );
        })(o.RNBaseComponent);
        var T = {
                create: function create(e) {
                    return e;
                },
                flatten: function e(t) {
                    if (null !== t && "object" === p(t)) {
                        if (!Array.isArray(t)) return t;
                        for (var n = {}, r = 0, o = t.length; r < o; ++r) {
                            var a = e(t[r]);
                            if (a) for (var i in a) n[i] = a[i];
                        }
                        return n;
                    }
                },
                absoluteFill: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            A = {
                OS: "wx",
                select: function select(e) {
                    return e.wx;
                }
            },
            M = null;
        function N() {
            return M || (M = wx.getSystemInfoSync());
        }
        var F = {
                get: function get(e) {
                    if ("window" === e) {
                        var t = N(),
                            n = t.screenHeight;
                        return {
                            width: t.screenWidth,
                            height: n,
                            windowHeight: t.windowHeight
                        };
                    }
                }
            },
            B = {
                alert: function alert(e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                        n =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : [],
                        r = { title: e, content: (t += "") };
                    if (
                        (0 === n.length && (r.showCancel = !1),
                        1 === n.length &&
                            ((r.showCancel = !1),
                            (r.confirmText = n[0].text || "确认"),
                            n[0].onPress && (r.success = n[0].onPress)),
                        n.length >= 2)
                    ) {
                        var o = n[0],
                            a = n[1];
                        (r.cancelText = a.text || "取消"),
                            a.onPress && (r.fail = a.onPress),
                            (r.confirmText = o.text || "确认"),
                            o.onPress && (r.success = o.onPress);
                    }
                    wx.showModal(r);
                }
            },
            L = {
                get: function get() {
                    return N().pixelRatio;
                }
            },
            V = {
                getItem: function getItem(e, t) {
                    return new Promise(function(n, r) {
                        wx.getStorage({
                            key: e,
                            success: function success(e) {
                                n(e.data);
                            },
                            fail: function fail(e) {
                                r(e);
                            },
                            complete: function complete(e) {
                                t && t(e);
                            }
                        });
                    });
                },
                setItem: function setItem(e, t, n) {
                    return new Promise(function(r, o) {
                        wx.setStorage({
                            key: e,
                            data: t,
                            success: function success() {
                                r(null);
                            },
                            fail: function fail(e) {
                                o(e);
                            },
                            complete: function complete(e) {
                                n && n(e);
                            }
                        });
                    });
                },
                removeItem: function removeItem(e, t) {
                    return new Promise(function(n, r) {
                        wx.setStorage({
                            key: e,
                            success: function success() {
                                n(null);
                            },
                            fail: function fail(e) {
                                r(e);
                            },
                            complete: function complete(e) {
                                t && t(e);
                            }
                        });
                    });
                },
                clear: function clear(e) {
                    return new Promise(function(t, n) {
                        wx.clearStorage({
                            success: function success() {
                                t(null);
                            },
                            fail: function fail(e) {
                                n(e);
                            },
                            complete: function complete(t) {
                                e && e(t);
                            }
                        });
                    });
                }
            };
        function H(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function K(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? H(Object(n), !0).forEach(function(t) {
                          a(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : H(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                          );
                      });
            }
            return e;
        }
        function z(e) {
            var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                n = t.method,
                r = void 0 === n ? "GET" : n,
                o = t.body,
                a = t.headers;
            return new Promise(function(t, n) {
                wx.request({
                    url: e,
                    data: o,
                    header: K({ "Content-Type": "application/json" }, a),
                    method: r.toUpperCase(),
                    success: function success(e) {
                        var n = {
                            json: function json() {
                                return Promise.resolve(e.data);
                            },
                            headers: e.header,
                            status: e.statusCode
                        };
                        t(n);
                    },
                    fail: function fail(e) {
                        n(e);
                    }
                });
            });
        }
        function X() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
            wx.showModal({ title: "alert", content: e + "", showCancel: !1 });
        }
        var Q = Date.now();
        var J = 0,
            G = 0,
            q = [],
            Y = function Y(e) {
                if (0 === q.length) {
                    var t = Date.now() - Q,
                        n = Math.max(0, 1e3 / 60 - (t - J));
                    (J = n + t),
                        setTimeout(function() {
                            var e = q.slice(0);
                            q.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled)
                                    try {
                                        e[t].callback(J);
                                    } catch (e) {
                                        setTimeout(function() {
                                            throw e;
                                        }, 0);
                                    }
                        }, Math.round(n));
                }
                return q.push({ handle: ++G, callback: e, cancelled: !1 }), G;
            },
            Z = function Z(e) {
                for (var t = 0; t < q.length; t++)
                    q[t].handle === e && (q[t].cancelled = !0);
            };
        function $() {
            return (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [
                        {
                            key: "getStyle",
                            value: function value(e) {
                                return {
                                    style: this.transformViewStyle(e.style)
                                };
                            }
                        }
                    ]),
                    t
                );
            })(o.RNBaseComponent);
        }
        var ee = $(),
            te = $(),
            ne = $(),
            re = $(),
            oe = {
                removeEventListener: function removeEventListener() {
                    console.error("尚不支持 AppState!");
                },
                addEventListener: function addEventListener() {
                    console.error("尚不支持 AppState!");
                }
            },
            ae = {
                addListener: function addListener() {
                    return (
                        console.error(
                            "尚不支持 NativeAppEventEmitter! use @areslabs/wx-eventemitter instead"
                        ),
                        function() {
                            console.error(
                                "尚不支持 NativeAppEventEmitter! use @areslabs/wx-eventemitter instead"
                            );
                        }
                    );
                }
            },
            ie = {
                addListener: function addListener() {
                    return (
                        console.error("use @areslabs/wx-eventemitter instead"),
                        function() {
                            console.error(
                                "use @areslabs/wx-eventemitter instead"
                            );
                        }
                    );
                }
            },
            ce = {
                ActivityIndicator: k,
                ImageBackground: R,
                Button: P,
                FlatList: h,
                SectionList: _,
                Modal: W,
                Picker: C,
                Slider: ee,
                Switch: te,
                TextInput: j,
                ScrollView: x,
                RefreshControl: ne,
                WebView: re,
                StyleSheet: T,
                Platform: A,
                Dimensions: F,
                Alert: B,
                PixelRatio: L,
                AsyncStorage: V,
                fetch: z,
                alert: X,
                requestAnimationFrame: Y,
                cancelAnimationFrame: Z,
                unstable_batchedUpdates: o.unstable_batchedUpdates,
                AppState: oe,
                NativeAppEventEmitter: ae,
                DeviceEventEmitter: ie
            };
        Object.defineProperty(t, "unstable_batchedUpdates", {
            enumerable: !0,
            get: function get() {
                return o.unstable_batchedUpdates;
            }
        }),
            (t.ActivityIndicator = k),
            (t.Alert = B),
            (t.AppState = oe),
            (t.AsyncStorage = V),
            (t.Button = P),
            (t.DeviceEventEmitter = ie),
            (t.Dimensions = F),
            (t.FlatList = h),
            (t.ImageBackground = R),
            (t.Modal = W),
            (t.NativeAppEventEmitter = ae),
            (t.Picker = C),
            (t.PixelRatio = L),
            (t.Platform = A),
            (t.RefreshControl = ne),
            (t.ScrollView = x),
            (t.SectionList = _),
            (t.Slider = ee),
            (t.StyleSheet = T),
            (t.Switch = te),
            (t.TextInput = j),
            (t.WebView = re),
            (t.alert = X),
            (t.cancelAnimationFrame = Z),
            (t.default = ce),
            (t.fetch = z),
            (t.requestAnimationFrame = Y);
    },
    function(e, t, n) {
        var r = n(8),
            o = r(n(0)),
            a = r(n(1)),
            i = r(n(3)),
            c = r(n(4)),
            u = r(n(5)),
            s = n(10),
            l = r(n(6)),
            p = r(n(17)),
            f = n(18),
            d = n(19);
        function y(e) {
            var t = (function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return (
                        Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function() {})
                        ),
                        !0
                    );
                } catch (e) {
                    return !1;
                }
            })();
            return function() {
                var n,
                    r = (0, u.default)(e);
                if (t) {
                    var o = (0, u.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return (0, c.default)(this, n);
            };
        }
        var h = l.default.h,
            m = (function(e) {
                (0, i.default)(n, e);
                var t = y(n);
                function n() {
                    return (0, o.default)(this, n), t.apply(this, arguments);
                }
                return (
                    (0, a.default)(n, [
                        {
                            key: "render",
                            value: function value() {
                                return h(
                                    d.Router,
                                    { diuu: "b_" },
                                    h(
                                        d.TabRouter,
                                        { text: "F", diuu: "c_" },
                                        h(d.Route, {
                                            key: "A",
                                            component: p.default,
                                            diuu: "d_"
                                        }),
                                        h(d.Route, {
                                            key: "B",
                                            component: p.default,
                                            diuu: "e_"
                                        }),
                                        h(d.Route, {
                                            key: "D",
                                            component: p.default,
                                            diuu: "f_"
                                        })
                                    )
                                );
                            }
                        }
                    ]),
                    n
                );
            })(l.default.Component);
        s.AppRegistry.registerComponent(f.name, function() {
            return m;
        }),
            l.default.renderApp(RNAppClass),
            (wx._historyConfig = { A: "/App", B: "/App", D: "/App" }),
            (wx._pageCompMaps = {
                App: p.default,
                App: p.default,
                App: p.default
            }),
            (wx._getCompByPath = function(e) {
                return new Promise(function(t) {
                    wx._pageCompMaps[e]
                        ? t(wx._pageCompMaps[e])
                        : (wx._pageCompMaps[e] = t);
                });
            });
    },
    function(e, t, n) {
        var r = n(2).default;
        (e.exports = function(e, t) {
            if ("object" !== r(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" !== r(o)) return o;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                );
            }
            return ("string" === t ? String : Number)(e);
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t) {
        function n(t, r) {
            return (
                (e.exports = n = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function(e, t) {
                          return (e.__proto__ = t), e;
                      }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports),
                n(t, r)
            );
        }
        (e.exports = n),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t) {
        (e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return e;
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t, n) {
        var r = n(16);
        (e.exports = function(e, t) {
            if (null == e) return {};
            var n,
                o,
                a = r(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                    (n = i[o]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t) {
        (e.exports = function(e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function(e, t, n) {
        var r = n(8);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
        var o = r(n(0)),
            a = r(n(1)),
            i = r(n(3)),
            c = r(n(4)),
            u = r(n(5)),
            s = r(n(6)),
            l = n(10);
        function p(e) {
            var t = (function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return (
                        Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function() {})
                        ),
                        !0
                    );
                } catch (e) {
                    return !1;
                }
            })();
            return function() {
                var n,
                    r = (0, u.default)(e);
                if (t) {
                    var o = (0, u.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return (0, c.default)(this, n);
            };
        }
        var f = s.default.h,
            d = (function(e) {
                (0, i.default)(n, e);
                var t = p(n);
                function n() {
                    return (0, o.default)(this, n), t.apply(this, arguments);
                }
                return (
                    (0, a.default)(n, [
                        {
                            key: "render",
                            value: function value() {
                                return f(
                                    "view",
                                    {
                                        style: y.box,
                                        _o: "1",
                                        diuu: "b_",
                                        tempName: "b"
                                    },
                                    f(
                                        "view",
                                        { style: y.text, _o: "4", diuu: "c_" },
                                        "Hello, world!"
                                    )
                                );
                            }
                        }
                    ]),
                    n
                );
            })(s.default.FuncComponent),
            y = l.StyleSheet.create({
                box: { padding: 10 },
                text: { fontWeight: "bold" }
            }),
            h = d;
        t.default = h;
    },
    function(e) {
        e.exports = JSON.parse('{"name":"test2","displayName":"test2"}');
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = r(n(7)),
            a = n(6),
            i = (r(a), r(n(0))),
            c = r(n(1)),
            u = r(n(4)),
            s = r(n(5)),
            l = r(n(3));
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? p(Object(n), !0).forEach(function(t) {
                          o(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : p(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                          );
                      });
            }
            return e;
        }
        var d = (history = {
                push: function push(e, t) {
                    var n = wx._historyConfig[e],
                        r = "";
                    t &&
                        (r = "?params=".concat(
                            encodeURIComponent(JSON.stringify(t))
                        )),
                        wx.navigateTo({ url: "".concat(n).concat(r) });
                },
                replace: function replace(e, t) {
                    var n = wx._historyConfig[e],
                        r = "";
                    t &&
                        (r = "?params=".concat(
                            encodeURIComponent(JSON.stringify(t))
                        )),
                        wx.redirectTo({ url: "".concat(n).concat(r) });
                },
                pop: function pop() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1;
                    wx.navigateBack({ delta: e });
                },
                back: function back() {
                    this.pop(1);
                },
                popToTop: function popToTop() {
                    var e = this.getCurrentRoutes();
                    this.pop(e.length - 1);
                },
                getCurrentRoutes: function getCurrentRoutes() {
                    return getCurrentPages();
                },
                popTo: function popTo(e) {
                    for (
                        var t = wx._historyConfig[e].substring(1),
                            n = this.getCurrentRoutes(),
                            r = 0;
                        r < n.length;
                        r++
                    ) {
                        n[r].__route__ === t &&
                            r !== n.length - 1 &&
                            wx.navigateBack({ delta: n.length - 1 - r });
                    }
                },
                popToWithProps: function popToWithProps(e, t) {
                    for (
                        var n = wx._historyConfig[e].substring(1),
                            r = this.getCurrentRoutes(),
                            o = 0;
                        o < r.length;
                        o++
                    ) {
                        var i = r[o];
                        i.__route__ === n &&
                            o !== r.length - 1 &&
                            (function() {
                                var e = a.instanceManager.getCompInstByUUID(
                                    i.data.diuu
                                );
                                wx.navigateBack({
                                    delta: r.length - 1 - o,
                                    success: function success() {
                                        var n = e.props,
                                            r = f({}, n, {
                                                routerParams: f(
                                                    {},
                                                    n.routerParams,
                                                    {},
                                                    t
                                                )
                                            });
                                        e.componentWillReceiveProps &&
                                            e.componentWillReceiveProps(r),
                                            (e.props = r),
                                            e.setState({});
                                    }
                                });
                            })();
                    }
                },
                switchTab: function switchTab(e) {
                    var t = wx._historyConfig[e];
                    wx.switchTab({ url: t });
                }
            }),
            y = (function(e) {
                function t() {
                    return i(this, t), u(this, s(t).apply(this, arguments));
                }
                return (
                    l(t, e),
                    c(t, [{ key: "render", value: function value() {} }]),
                    t
                );
            })(a.Component),
            h = y,
            m = y,
            v = y;
        (t.Route = m), (t.Router = h), (t.TabRouter = v), (t.history = d);
    }
]);
