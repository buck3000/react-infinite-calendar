var Kn = Object.defineProperty;
var Zn = (t, e, n) => e in t ? Kn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var tn = (t, e, n) => Zn(t, typeof e != "symbol" ? e + "" : e, n);
import X, { isValidElement as gt, cloneElement as yt, Children as er, useRef as W, useCallback as S, useState as Z, useEffect as Ce, useMemo as V, forwardRef as tr, useId as nr, useDeferredValue as rr } from "react";
import l from "prop-types";
import ft from "react-dom";
function ar(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ht = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function or() {
  if (nn) return Je;
  nn = 1;
  var t = X, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, u, d) {
    var f, h = {}, p = null, D = null;
    d !== void 0 && (p = "" + d), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (D = u.ref);
    for (f in u) r.call(u, f) && !o.hasOwnProperty(f) && (h[f] = u[f]);
    if (c && c.defaultProps) for (f in u = c.defaultProps, u) h[f] === void 0 && (h[f] = u[f]);
    return { $$typeof: e, type: c, key: p, ref: D, props: h, _owner: a.current };
  }
  return Je.Fragment = n, Je.jsx = i, Je.jsxs = i, Je;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function sr() {
  return rn || (rn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = X, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), _ = Symbol.iterator, v = "@@iterator";
    function x(s) {
      if (s === null || typeof s != "object")
        return null;
      var m = _ && s[_] || s[v];
      return typeof m == "function" ? m : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(s) {
      {
        for (var m = arguments.length, y = new Array(m > 1 ? m - 1 : 0), E = 1; E < m; E++)
          y[E - 1] = arguments[E];
        b("error", s, y);
      }
    }
    function b(s, m, y) {
      {
        var E = R.ReactDebugCurrentFrame, j = E.getStackAddendum();
        j !== "" && (m += "%s", y = y.concat([j]));
        var N = y.map(function(k) {
          return String(k);
        });
        N.unshift("Warning: " + m), Function.prototype.apply.call(console[s], console, N);
      }
    }
    var M = !1, O = !1, F = !1, U = !1, ee = !1, G;
    G = Symbol.for("react.module.reference");
    function A(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === o || ee || s === a || s === d || s === f || U || s === D || M || O || F || typeof s == "object" && s !== null && (s.$$typeof === p || s.$$typeof === h || s.$$typeof === i || s.$$typeof === c || s.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === G || s.getModuleId !== void 0));
    }
    function oe(s, m, y) {
      var E = s.displayName;
      if (E)
        return E;
      var j = m.displayName || m.name || "";
      return j !== "" ? y + "(" + j + ")" : y;
    }
    function me(s) {
      return s.displayName || "Context";
    }
    function B(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var m = s;
            return me(m) + ".Consumer";
          case i:
            var y = s;
            return me(y._context) + ".Provider";
          case u:
            return oe(s, s.render, "ForwardRef");
          case h:
            var E = s.displayName || null;
            return E !== null ? E : B(s.type) || "Memo";
          case p: {
            var j = s, N = j._payload, k = j._init;
            try {
              return B(k(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, se = 0, ie, C, $, Q, Y, ce, ye;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function it() {
      {
        if (se === 0) {
          ie = console.log, C = console.info, $ = console.warn, Q = console.error, Y = console.group, ce = console.groupCollapsed, ye = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        se++;
      }
    }
    function Et() {
      {
        if (se--, se === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, s, {
              value: ie
            }),
            info: L({}, s, {
              value: C
            }),
            warn: L({}, s, {
              value: $
            }),
            error: L({}, s, {
              value: Q
            }),
            group: L({}, s, {
              value: Y
            }),
            groupCollapsed: L({}, s, {
              value: ce
            }),
            groupEnd: L({}, s, {
              value: ye
            })
          });
        }
        se < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xe = R.ReactCurrentDispatcher, ze;
    function be(s, m, y) {
      {
        if (ze === void 0)
          try {
            throw Error();
          } catch (j) {
            var E = j.stack.trim().match(/\n( *(at )?)/);
            ze = E && E[1] || "";
          }
        return `
` + ze + s;
      }
    }
    var Qe = !1, xe;
    {
      var _t = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new _t();
    }
    function ct(s, m) {
      if (!s || Qe)
        return "";
      {
        var y = xe.get(s);
        if (y !== void 0)
          return y;
      }
      var E;
      Qe = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Xe.current, Xe.current = null, it();
      try {
        if (m) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (te) {
              E = te;
            }
            Reflect.construct(s, [], k);
          } else {
            try {
              k.call();
            } catch (te) {
              E = te;
            }
            s.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            E = te;
          }
          s();
        }
      } catch (te) {
        if (te && E && typeof te.stack == "string") {
          for (var T = te.stack.split(`
`), J = E.stack.split(`
`), I = T.length - 1, q = J.length - 1; I >= 1 && q >= 0 && T[I] !== J[q]; )
            q--;
          for (; I >= 1 && q >= 0; I--, q--)
            if (T[I] !== J[q]) {
              if (I !== 1 || q !== 1)
                do
                  if (I--, q--, q < 0 || T[I] !== J[q]) {
                    var ue = `
` + T[I].replace(" at new ", " at ");
                    return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && xe.set(s, ue), ue;
                  }
                while (I >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        Qe = !1, Xe.current = N, Et(), Error.prepareStackTrace = j;
      }
      var He = s ? s.displayName || s.name : "", ke = He ? be(He) : "";
      return typeof s == "function" && xe.set(s, ke), ke;
    }
    function lt(s, m, y) {
      return ct(s, !1);
    }
    function Dt(s) {
      var m = s.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ye(s, m, y) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return ct(s, Dt(s));
      if (typeof s == "string")
        return be(s);
      switch (s) {
        case d:
          return be("Suspense");
        case f:
          return be("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            return lt(s.render);
          case h:
            return Ye(s.type, m, y);
          case p: {
            var E = s, j = E._payload, N = E._init;
            try {
              return Ye(N(j), m, y);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, ut = {}, dt = R.ReactDebugCurrentFrame;
    function We(s) {
      if (s) {
        var m = s._owner, y = Ye(s.type, s._source, m ? m.type : null);
        dt.setExtraStackFrame(y);
      } else
        dt.setExtraStackFrame(null);
    }
    function Ot(s, m, y, E, j) {
      {
        var N = Function.call.bind(Te);
        for (var k in s)
          if (N(s, k)) {
            var T = void 0;
            try {
              if (typeof s[k] != "function") {
                var J = Error((E || "React class") + ": " + y + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              T = s[k](m, k, E, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              T = I;
            }
            T && !(T instanceof Error) && (We(j), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", y, k, typeof T), We(null)), T instanceof Error && !(T.message in ut) && (ut[T.message] = !0, We(j), w("Failed %s type: %s", y, T.message), We(null));
          }
      }
    }
    var St = Array.isArray;
    function de(s) {
      return St(s);
    }
    function Ee(s) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, y = m && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return y;
      }
    }
    function ne(s) {
      try {
        return le(s), !1;
      } catch {
        return !0;
      }
    }
    function le(s) {
      return "" + s;
    }
    function ve(s) {
      if (ne(s))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ee(s)), le(s);
    }
    var _e = R.ReactCurrentOwner, Ae = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fe, $e;
    function Fn(s) {
      if (Te.call(s, "ref")) {
        var m = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Yn(s) {
      if (Te.call(s, "key")) {
        var m = Object.getOwnPropertyDescriptor(s, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Wn(s, m) {
      typeof s.ref == "string" && _e.current;
    }
    function An(s, m) {
      {
        var y = function() {
          fe || (fe = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function $n(s, m) {
      {
        var y = function() {
          $e || ($e = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var In = function(s, m, y, E, j, N, k) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: s,
        key: m,
        ref: y,
        props: k,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function Hn(s, m, y, E, j) {
      {
        var N, k = {}, T = null, J = null;
        y !== void 0 && (ve(y), T = "" + y), Yn(m) && (ve(m.key), T = "" + m.key), Fn(m) && (J = m.ref, Wn(m, j));
        for (N in m)
          Te.call(m, N) && !Ae.hasOwnProperty(N) && (k[N] = m[N]);
        if (s && s.defaultProps) {
          var I = s.defaultProps;
          for (N in I)
            k[N] === void 0 && (k[N] = I[N]);
        }
        if (T || J) {
          var q = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          T && An(k, q), J && $n(k, q);
        }
        return In(s, T, J, j, E, _e.current, k);
      }
    }
    var Ct = R.ReactCurrentOwner, Xt = R.ReactDebugCurrentFrame;
    function Ie(s) {
      if (s) {
        var m = s._owner, y = Ye(s.type, s._source, m ? m.type : null);
        Xt.setExtraStackFrame(y);
      } else
        Xt.setExtraStackFrame(null);
    }
    var Tt;
    Tt = !1;
    function kt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === e;
    }
    function zt() {
      {
        if (Ct.current) {
          var s = B(Ct.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function qn(s) {
      return "";
    }
    var Qt = {};
    function Ln(s) {
      {
        var m = zt();
        if (!m) {
          var y = typeof s == "string" ? s : s.displayName || s.name;
          y && (m = `

Check the top-level render call using <` + y + ">.");
        }
        return m;
      }
    }
    function Jt(s, m) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var y = Ln(m);
        if (Qt[y])
          return;
        Qt[y] = !0;
        var E = "";
        s && s._owner && s._owner !== Ct.current && (E = " It was passed a child from " + B(s._owner.type) + "."), Ie(s), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, E), Ie(null);
      }
    }
    function Kt(s, m) {
      {
        if (typeof s != "object")
          return;
        if (de(s))
          for (var y = 0; y < s.length; y++) {
            var E = s[y];
            kt(E) && Jt(E, m);
          }
        else if (kt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var j = x(s);
          if (typeof j == "function" && j !== s.entries)
            for (var N = j.call(s), k; !(k = N.next()).done; )
              kt(k.value) && Jt(k.value, m);
        }
      }
    }
    function Vn(s) {
      {
        var m = s.type;
        if (m == null || typeof m == "string")
          return;
        var y;
        if (typeof m == "function")
          y = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === h))
          y = m.propTypes;
        else
          return;
        if (y) {
          var E = B(m);
          Ot(y, s.props, "prop", E, s);
        } else if (m.PropTypes !== void 0 && !Tt) {
          Tt = !0;
          var j = B(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Un(s) {
      {
        for (var m = Object.keys(s.props), y = 0; y < m.length; y++) {
          var E = m[y];
          if (E !== "children" && E !== "key") {
            Ie(s), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), Ie(null);
            break;
          }
        }
        s.ref !== null && (Ie(s), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    var Zt = {};
    function en(s, m, y, E, j, N) {
      {
        var k = A(s);
        if (!k) {
          var T = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = qn();
          J ? T += J : T += zt();
          var I;
          s === null ? I = "null" : de(s) ? I = "array" : s !== void 0 && s.$$typeof === e ? (I = "<" + (B(s.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : I = typeof s, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, T);
        }
        var q = Hn(s, m, y, j, N);
        if (q == null)
          return q;
        if (k) {
          var ue = m.children;
          if (ue !== void 0)
            if (E)
              if (de(ue)) {
                for (var He = 0; He < ue.length; He++)
                  Kt(ue[He], s);
                Object.freeze && Object.freeze(ue);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kt(ue, s);
        }
        if (Te.call(m, "key")) {
          var ke = B(s), te = Object.keys(m).filter(function(Jn) {
            return Jn !== "key";
          }), Mt = te.length > 0 ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Zt[ke + Mt]) {
            var Qn = te.length > 0 ? "{" + te.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Mt, ke, Qn, ke), Zt[ke + Mt] = !0;
          }
        }
        return s === r ? Un(q) : Vn(q), q;
      }
    }
    function Gn(s, m, y) {
      return en(s, m, y, !0);
    }
    function Bn(s, m, y) {
      return en(s, m, y, !1);
    }
    var Xn = Bn, zn = Gn;
    Ke.Fragment = r, Ke.jsx = Xn, Ke.jsxs = zn;
  }()), Ke;
}
var an;
function ir() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? ht.exports = or() : ht.exports = sr()), ht.exports;
}
var g = ir(), Rt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var on;
function cr() {
  return on || (on = 1, function(t) {
    (function() {
      var e = {}.hasOwnProperty;
      function n() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var c = arguments[i];
          c && (o = a(o, r(c)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var i = "";
        for (var c in o)
          e.call(o, c) && o[c] && (i = a(i, c));
        return i;
      }
      function a(o, i) {
        return i ? o ? o + " " + i : o + i : o;
      }
      t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
    })();
  }(Rt)), Rt.exports;
}
var lr = cr();
const ae = /* @__PURE__ */ ar(lr), ur = !!(typeof window < "u" && window.document && window.document.createElement);
let mt;
function dr(t) {
  if ((!mt && mt !== 0 || t) && ur) {
    const e = document.createElement("div");
    e.style.position = "absolute", e.style.top = "-9999px", e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e), mt = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
  }
  return mt;
}
const wn = 6048e5, fr = 864e5, sn = Symbol.for("constructDateFrom");
function he(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && sn in t ? t[sn](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function H(t, e) {
  return he(e || t, t);
}
function hr(t, e, n) {
  const r = H(t, n?.in);
  return isNaN(e) ? he(t, NaN) : (e && r.setDate(r.getDate() + e), r);
}
let mr = {};
function st() {
  return mr;
}
function at(t, e) {
  const n = st(), r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = H(t, e?.in), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function vt(t, e) {
  return at(t, { ...e, weekStartsOn: 1 });
}
function bn(t, e) {
  const n = H(t, e?.in), r = n.getFullYear(), a = he(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = vt(a), i = he(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const c = vt(i);
  return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function cn(t) {
  const e = H(t), n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), +t - +n;
}
function Ht(t, ...e) {
  const n = he.bind(
    null,
    e.find((r) => typeof r == "object")
  );
  return e.map(n);
}
function Ne(t, e) {
  const n = H(t, e?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function pr(t, e, n) {
  const [r, a] = Ht(
    n?.in,
    t,
    e
  ), o = Ne(r), i = Ne(a), c = +o - cn(o), u = +i - cn(i);
  return Math.round((c - u) / fr);
}
function gr(t, e) {
  const n = bn(t, e), r = he(t, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), vt(r);
}
function yr(t, e, n) {
  const [r, a] = Ht(
    n?.in,
    t,
    e
  );
  return +Ne(r) == +Ne(a);
}
function vr(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function wr(t) {
  return !(!vr(t) && typeof t != "number" || isNaN(+H(t)));
}
function br(t, e) {
  const n = H(t, e?.in);
  return n.setHours(23, 59, 59, 999), n;
}
function xr(t, e) {
  const n = H(t, e?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Er(t, e) {
  const n = H(t, e?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const _r = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Dr = (t, e, n) => {
  let r;
  const a = _r[t];
  return typeof a == "string" ? r = a : e === 1 ? r = a.one : r = a.other.replace("{{count}}", e.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function jt(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
const Or = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Sr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Cr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Tr = {
  date: jt({
    formats: Or,
    defaultWidth: "full"
  }),
  time: jt({
    formats: Sr,
    defaultWidth: "full"
  }),
  dateTime: jt({
    formats: Cr,
    defaultWidth: "full"
  })
}, kr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Mr = (t, e, n, r) => kr[t];
function Ze(t) {
  return (e, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && t.formattingValues) {
      const i = t.defaultFormattingWidth || t.defaultWidth, c = n?.width ? String(n.width) : i;
      a = t.formattingValues[c] || t.formattingValues[i];
    } else {
      const i = t.defaultWidth, c = n?.width ? String(n.width) : t.defaultWidth;
      a = t.values[c] || t.values[i];
    }
    const o = t.argumentCallback ? t.argumentCallback(e) : e;
    return a[o];
  };
}
const Rr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, jr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Pr = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Nr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Fr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Yr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Wr = (t, e) => {
  const n = Number(t), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ar = {
  ordinalNumber: Wr,
  era: Ze({
    values: Rr,
    defaultWidth: "wide"
  }),
  quarter: Ze({
    values: jr,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ze({
    values: Pr,
    defaultWidth: "wide"
  }),
  day: Ze({
    values: Nr,
    defaultWidth: "wide"
  }),
  dayPeriod: Ze({
    values: Fr,
    defaultWidth: "wide",
    formattingValues: Yr,
    defaultFormattingWidth: "wide"
  })
};
function et(t) {
  return (e, n = {}) => {
    const r = n.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], o = e.match(a);
    if (!o)
      return null;
    const i = o[0], c = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(c) ? Ir(c, (h) => h.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      $r(c, (h) => h.test(i))
    );
    let d;
    d = t.valueCallback ? t.valueCallback(u) : u, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = e.slice(i.length);
    return { value: d, rest: f };
  };
}
function $r(t, e) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
      return n;
}
function Ir(t, e) {
  for (let n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function Hr(t) {
  return (e, n = {}) => {
    const r = e.match(t.matchPattern);
    if (!r) return null;
    const a = r[0], o = e.match(t.parsePattern);
    if (!o) return null;
    let i = t.valueCallback ? t.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const c = e.slice(a.length);
    return { value: i, rest: c };
  };
}
const qr = /^(\d+)(th|st|nd|rd)?/i, Lr = /\d+/i, Vr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ur = {
  any: [/^b/i, /^(a|c)/i]
}, Gr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Br = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Qr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Jr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Kr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Zr = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ea = {
  ordinalNumber: Hr({
    matchPattern: qr,
    parsePattern: Lr,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: et({
    matchPatterns: Vr,
    defaultMatchWidth: "wide",
    parsePatterns: Ur,
    defaultParseWidth: "any"
  }),
  quarter: et({
    matchPatterns: Gr,
    defaultMatchWidth: "wide",
    parsePatterns: Br,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: et({
    matchPatterns: Xr,
    defaultMatchWidth: "wide",
    parsePatterns: zr,
    defaultParseWidth: "any"
  }),
  day: et({
    matchPatterns: Qr,
    defaultMatchWidth: "wide",
    parsePatterns: Jr,
    defaultParseWidth: "any"
  }),
  dayPeriod: et({
    matchPatterns: Kr,
    defaultMatchWidth: "any",
    parsePatterns: Zr,
    defaultParseWidth: "any"
  })
}, xn = {
  code: "en-US",
  formatDistance: Dr,
  formatLong: Tr,
  formatRelative: Mr,
  localize: Ar,
  match: ea,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ta(t, e) {
  const n = H(t, e?.in);
  return pr(n, Er(n)) + 1;
}
function na(t, e) {
  const n = H(t, e?.in), r = +vt(n) - +gr(n);
  return Math.round(r / wn) + 1;
}
function En(t, e) {
  const n = H(t, e?.in), r = n.getFullYear(), a = st(), o = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, i = he(e?.in || t, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const c = at(i, e), u = he(e?.in || t, 0);
  u.setFullYear(r, 0, o), u.setHours(0, 0, 0, 0);
  const d = at(u, e);
  return +n >= +c ? r + 1 : +n >= +d ? r : r - 1;
}
function ra(t, e) {
  const n = st(), r = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = En(t, e), o = he(e?.in || t, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), at(o, e);
}
function aa(t, e) {
  const n = H(t, e?.in), r = +at(n, e) - +ra(n, e);
  return Math.round(r / wn) + 1;
}
function P(t, e) {
  const n = t < 0 ? "-" : "", r = Math.abs(t).toString().padStart(e, "0");
  return n + r;
}
const De = {
  // Year
  y(t, e) {
    const n = t.getFullYear(), r = n > 0 ? n : 1 - n;
    return P(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(t, e) {
    const n = t.getMonth();
    return e === "M" ? String(n + 1) : P(n + 1, 2);
  },
  // Day of the month
  d(t, e) {
    return P(t.getDate(), e.length);
  },
  // AM or PM
  a(t, e) {
    const n = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t, e) {
    return P(t.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t, e) {
    return P(t.getHours(), e.length);
  },
  // Minute
  m(t, e) {
    return P(t.getMinutes(), e.length);
  },
  // Second
  s(t, e) {
    return P(t.getSeconds(), e.length);
  },
  // Fraction of second
  S(t, e) {
    const n = e.length, r = t.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return P(a, e.length);
  }
}, qe = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ln = {
  // Era
  G: function(t, e, n) {
    const r = t.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(t, e, n) {
    if (e === "yo") {
      const r = t.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return De.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, n, r) {
    const a = En(t, r), o = a > 0 ? a : 1 - a;
    if (e === "YY") {
      const i = o % 100;
      return P(i, 2);
    }
    return e === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : P(o, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    const n = bn(t);
    return P(n, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, e) {
    const n = t.getFullYear();
    return P(n, e.length);
  },
  // Quarter
  Q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return P(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return P(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return De.M(t, e);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return P(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t, e, n, r) {
    const a = aa(t, r);
    return e === "wo" ? n.ordinalNumber(a, { unit: "week" }) : P(a, e.length);
  },
  // ISO week of year
  I: function(t, e, n) {
    const r = na(t);
    return e === "Io" ? n.ordinalNumber(r, { unit: "week" }) : P(r, e.length);
  },
  // Day of the month
  d: function(t, e, n) {
    return e === "do" ? n.ordinalNumber(t.getDate(), { unit: "date" }) : De.d(t, e);
  },
  // Day of year
  D: function(t, e, n) {
    const r = ta(t);
    return e === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : P(r, e.length);
  },
  // Day of week
  E: function(t, e, n) {
    const r = t.getDay();
    switch (e) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, n, r) {
    const a = t.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return P(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, n, r) {
    const a = t.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return P(o, e.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, n) {
    const r = t.getDay(), a = r === 0 ? 7 : r;
    switch (e) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return P(a, e.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, n) {
    const a = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r === 12 ? a = qe.noon : r === 0 ? a = qe.midnight : a = r / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r >= 17 ? a = qe.evening : r >= 12 ? a = qe.afternoon : r >= 4 ? a = qe.morning : a = qe.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, n) {
    if (e === "ho") {
      let r = t.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return De.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, n) {
    return e === "Ho" ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : De.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, n) {
    const r = t.getHours() % 12;
    return e === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : P(r, e.length);
  },
  // Hour [1-24]
  k: function(t, e, n) {
    let r = t.getHours();
    return r === 0 && (r = 24), e === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : P(r, e.length);
  },
  // Minute
  m: function(t, e, n) {
    return e === "mo" ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : De.m(t, e);
  },
  // Second
  s: function(t, e, n) {
    return e === "so" ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : De.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return De.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, n) {
    const r = t.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      // Hours and optional minutes
      case "X":
        return dn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Me(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Me(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Hours and optional minutes
      case "x":
        return dn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Me(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Me(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + un(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Me(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + un(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Me(r, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, n) {
    const r = Math.trunc(+t / 1e3);
    return P(r, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, n) {
    return P(+t, e.length);
  }
};
function un(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + e + P(o, 2);
}
function dn(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + P(Math.abs(t) / 60, 2) : Me(t, e);
}
function Me(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = P(Math.trunc(r / 60), 2), o = P(r % 60, 2);
  return n + a + e + o;
}
const fn = (t, e) => {
  switch (t) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, _n = (t, e) => {
  switch (t) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, oa = (t, e) => {
  const n = t.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return fn(t, e);
  let o;
  switch (r) {
    case "P":
      o = e.dateTime({ width: "short" });
      break;
    case "PP":
      o = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = e.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", fn(r, e)).replace("{{time}}", _n(a, e));
}, sa = {
  p: _n,
  P: oa
}, ia = /^D+$/, ca = /^Y+$/, la = ["D", "DD", "YY", "YYYY"];
function ua(t) {
  return ia.test(t);
}
function da(t) {
  return ca.test(t);
}
function fa(t, e, n) {
  const r = ha(t, e, n);
  if (console.warn(r), la.includes(t)) throw new RangeError(r);
}
function ha(t, e, n) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ma = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, pa = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ga = /^'([^]*?)'?$/, ya = /''/g, va = /[a-zA-Z]/;
function z(t, e, n) {
  const r = st(), a = n?.locale ?? r.locale ?? xn, o = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, c = H(t, n?.in);
  if (!wr(c))
    throw new RangeError("Invalid time value");
  let u = e.match(pa).map((f) => {
    const h = f[0];
    if (h === "p" || h === "P") {
      const p = sa[h];
      return p(f, a.formatLong);
    }
    return f;
  }).join("").match(ma).map((f) => {
    if (f === "''")
      return { isToken: !1, value: "'" };
    const h = f[0];
    if (h === "'")
      return { isToken: !1, value: wa(f) };
    if (ln[h])
      return { isToken: !0, value: f };
    if (h.match(va))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: f };
  });
  a.localize.preprocessor && (u = a.localize.preprocessor(c, u));
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return u.map((f) => {
    if (!f.isToken) return f.value;
    const h = f.value;
    (!n?.useAdditionalWeekYearTokens && da(h) || !n?.useAdditionalDayOfYearTokens && ua(h)) && fa(h, e, String(t));
    const p = ln[h[0]];
    return p(c, h, a.localize, d);
  }).join("");
}
function wa(t) {
  const e = t.match(ga);
  return e ? e[1].replace(ya, "'") : t;
}
function qt(t, e) {
  return H(t, e?.in).getDay();
}
function ba(t, e) {
  const n = H(t, e?.in), r = n.getFullYear(), a = n.getMonth(), o = he(n, 0);
  return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function xa() {
  return Object.assign({}, st());
}
function Dn(t, e) {
  return +H(t) > +H(e);
}
function Lt(t, e) {
  return +H(t) < +H(e);
}
function re(t, e, n, r) {
  const a = () => he(n, NaN), o = xa();
  return o.locale, o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate, o.weekStartsOn ?? o.locale?.options?.weekStartsOn, t ? a() : H(n, r?.in);
}
function Ea(t, e, n) {
  const [r, a] = Ht(
    n?.in,
    t,
    e
  );
  return r.getFullYear() === a.getFullYear();
}
const _a = (t) => 1 - --t * t * t * t, Da = (t, e, n, r) => n > r ? e : t + (e - t) * _a(n / r);
function Oa({
  fromValue: t,
  toValue: e,
  onUpdate: n,
  onComplete: r,
  duration: a = 600
}) {
  const o = performance.now(), i = () => {
    const c = performance.now() - o;
    n(Da(t, e, c, a)), c <= a ? window.requestAnimationFrame(i) : r && r();
  };
  window.requestAnimationFrame(i);
}
const we = {
  down: 40,
  enter: 13,
  left: 37,
  right: 39,
  up: 38
};
function Sa(t, e, n) {
  const r = [], a = new Date(t, e, 1), o = ba(a), i = Ta(n);
  let c = qt(new Date(t, e, 1)), u = 0;
  for (let d = 1; d <= o; d++)
    r[u] || (r[u] = []), r[u].push(d), c === i && u++, c = c < 6 ? c + 1 : 0;
  return {
    date: a,
    rows: r
  };
}
function Ca(t, e, n) {
  const r = typeof t == "number" ? new Date(t, 0, 1) : t;
  return Math.ceil(
    (Math.round((e - r) / (60 * 60 * 24 * 1e3)) + r.getDay() + 1 - n) / 7
  );
}
function Ta(t) {
  return t === 0 ? 6 : t - 1;
}
class ka {
  constructor() {
    tn(this, "clear", () => {
      this.lastPosition = null, this.delta = 0;
    });
  }
  getScrollSpeed(e) {
    return this.lastPosition != null && (this.delta = e - this.lastPosition), this.lastPosition = e, clearTimeout(this._timeout), this._timeout = setTimeout(this.clear, 50), this.delta;
  }
}
const Ma = dr();
function Se() {
}
function On(t, {
  disabledDates: e = [],
  disabledDays: n = [],
  minDate: r,
  maxDate: a
}) {
  return !t || e.some((o) => yr(o, t)) || n && n.indexOf(qt(t)) !== -1 || r && Lt(t, Ne(r)) || a && Dn(t, br(a)) ? null : t;
}
function Ra(t, e, n) {
  return `${t}-${("0" + (e + 1)).slice(-2)}-${("0" + n).slice(-2)}`;
}
const Sn = (t) => (e) => (n) => /* @__PURE__ */ g.jsx(e, { ...t, ...n });
function ja(t, e) {
  let n = null, r = null;
  const a = () => t.apply(this, r);
  return function() {
    r = arguments, clearTimeout(n), n = setTimeout(a, e);
  };
}
function Yt(t, e, n = 1) {
  const r = Math.max(Math.ceil((e - t) / n), 0), a = Array(r);
  for (let o = 0; o < r; o++, t += n)
    a[o] = t;
  return a;
}
const Pa = "_root_100gv_1", Na = "_show_100gv_20", Fa = "_chevron_100gv_24", Ya = "_chevronUp_100gv_35", Wa = "_chevronDown_100gv_38", tt = {
  root: Pa,
  show: Na,
  chevron: Fa,
  chevronUp: Ya,
  chevronDown: Wa
}, Wt = 1, At = -1, Aa = "M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z", Cn = ({ scrollToDate: t, show: e, theme: n, todayLabel: r }) => {
  const a = () => {
    t(/* @__PURE__ */ new Date(), -40, !0);
  };
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: ae(tt.root, {
        [tt.show]: e,
        [tt.chevronUp]: e === Wt,
        [tt.chevronDown]: e === At
      }),
      style: {
        backgroundColor: n.floatingNav.background,
        color: n.floatingNav.color
      },
      onClick: a,
      children: [
        r,
        /* @__PURE__ */ g.jsx(
          "svg",
          {
            className: tt.chevron,
            x: "0px",
            y: "0px",
            width: "14px",
            height: "14px",
            viewBox: "0 0 512 512",
            children: /* @__PURE__ */ g.jsx(
              "path",
              {
                fill: n.floatingNav.chevron || n.floatingNav.color,
                d: Aa
              }
            )
          }
        )
      ]
    }
  );
};
Cn.propTypes = {
  scrollToDate: l.func.isRequired,
  show: l.oneOfType([l.number, l.bool]),
  theme: l.shape({
    floatingNav: l.shape({
      background: l.string.isRequired,
      color: l.string.isRequired,
      chevron: l.string
    }).isRequired
  }).isRequired,
  todayLabel: l.string.isRequired
};
function ot() {
  return ot = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ot.apply(null, arguments);
}
function Vt(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (e.indexOf(r) !== -1) continue;
    n[r] = t[r];
  }
  return n;
}
function $t(t, e) {
  return $t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, $t(t, e);
}
function Ut(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, $t(t, e);
}
function $a(t, e) {
  return t.classList ? !!e && t.classList.contains(e) : (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ") !== -1;
}
function Ia(t, e) {
  t.classList ? t.classList.add(e) : $a(t, e) || (typeof t.className == "string" ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e));
}
function hn(t, e) {
  return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Ha(t, e) {
  t.classList ? t.classList.remove(e) : typeof t.className == "string" ? t.className = hn(t.className, e) : t.setAttribute("class", hn(t.className && t.className.baseVal || "", e));
}
const mn = {
  disabled: !1
};
var qa = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
  enter: l.number,
  exit: l.number,
  appear: l.number
}).isRequired]) : null, La = process.env.NODE_ENV !== "production" ? l.oneOfType([l.string, l.shape({
  enter: l.string,
  exit: l.string,
  active: l.string
}), l.shape({
  enter: l.string,
  enterDone: l.string,
  enterActive: l.string,
  exit: l.string,
  exitDone: l.string,
  exitActive: l.string
})]) : null;
const wt = X.createContext(null);
var Tn = function(e) {
  return e.scrollTop;
}, nt = "unmounted", Re = "exited", je = "entering", Ue = "entered", It = "exiting", ge = /* @__PURE__ */ function(t) {
  Ut(e, t);
  function e(r, a) {
    var o;
    o = t.call(this, r, a) || this;
    var i = a, c = i && !i.isMounting ? r.enter : r.appear, u;
    return o.appearStatus = null, r.in ? c ? (u = Re, o.appearStatus = je) : u = Ue : r.unmountOnExit || r.mountOnEnter ? u = nt : u = Re, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  e.getDerivedStateFromProps = function(a, o) {
    var i = a.in;
    return i && o.status === nt ? {
      status: Re
    } : null;
  };
  var n = e.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(a) {
    var o = null;
    if (a !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== je && i !== Ue && (o = je) : (i === je || i === Ue) && (o = It);
    }
    this.updateStatus(!1, o);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var a = this.props.timeout, o, i, c;
    return o = i = c = a, a != null && typeof a != "number" && (o = a.exit, i = a.enter, c = a.appear !== void 0 ? a.appear : i), {
      exit: o,
      enter: i,
      appear: c
    };
  }, n.updateStatus = function(a, o) {
    if (a === void 0 && (a = !1), o !== null)
      if (this.cancelNextCallback(), o === je) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : ft.findDOMNode(this);
          i && Tn(i);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Re && this.setState({
      status: nt
    });
  }, n.performEnter = function(a) {
    var o = this, i = this.props.enter, c = this.context ? this.context.isMounting : a, u = this.props.nodeRef ? [c] : [ft.findDOMNode(this), c], d = u[0], f = u[1], h = this.getTimeouts(), p = c ? h.appear : h.enter;
    if (!a && !i || mn.disabled) {
      this.safeSetState({
        status: Ue
      }, function() {
        o.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: je
    }, function() {
      o.props.onEntering(d, f), o.onTransitionEnd(p, function() {
        o.safeSetState({
          status: Ue
        }, function() {
          o.props.onEntered(d, f);
        });
      });
    });
  }, n.performExit = function() {
    var a = this, o = this.props.exit, i = this.getTimeouts(), c = this.props.nodeRef ? void 0 : ft.findDOMNode(this);
    if (!o || mn.disabled) {
      this.safeSetState({
        status: Re
      }, function() {
        a.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: It
    }, function() {
      a.props.onExiting(c), a.onTransitionEnd(i.exit, function() {
        a.safeSetState({
          status: Re
        }, function() {
          a.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(a, o) {
    o = this.setNextCallback(o), this.setState(a, o);
  }, n.setNextCallback = function(a) {
    var o = this, i = !0;
    return this.nextCallback = function(c) {
      i && (i = !1, o.nextCallback = null, a(c));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(a, o) {
    this.setNextCallback(o);
    var i = this.props.nodeRef ? this.props.nodeRef.current : ft.findDOMNode(this), c = a == null && !this.props.addEndListener;
    if (!i || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], d = u[0], f = u[1];
      this.props.addEndListener(d, f);
    }
    a != null && setTimeout(this.nextCallback, a);
  }, n.render = function() {
    var a = this.state.status;
    if (a === nt)
      return null;
    var o = this.props, i = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var c = Vt(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ X.createElement(wt.Provider, {
        value: null
      }, typeof i == "function" ? i(a, c) : X.cloneElement(X.Children.only(i), c))
    );
  }, e;
}(X.Component);
ge.contextType = wt;
ge.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: l.shape({
    current: typeof Element > "u" ? l.any : function(t, e, n, r, a, o) {
      var i = t[e];
      return l.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(t, e, n, r, a, o);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: l.oneOfType([l.func.isRequired, l.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: l.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: l.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: l.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: l.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: l.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: l.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(e) {
    var n = qa;
    e.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      a[o - 1] = arguments[o];
    return n.apply(void 0, [e].concat(a));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: l.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: l.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: l.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: l.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: l.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: l.func
} : {};
function Le() {
}
ge.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Le,
  onEntering: Le,
  onEntered: Le,
  onExit: Le,
  onExiting: Le,
  onExited: Le
};
ge.UNMOUNTED = nt;
ge.EXITED = Re;
ge.ENTERING = je;
ge.ENTERED = Ue;
ge.EXITING = It;
var Va = function(e, n) {
  return e && n && n.split(" ").forEach(function(r) {
    return Ia(e, r);
  });
}, Pt = function(e, n) {
  return e && n && n.split(" ").forEach(function(r) {
    return Ha(e, r);
  });
}, bt = /* @__PURE__ */ function(t) {
  Ut(e, t);
  function e() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(c, u) {
      var d = r.resolveArguments(c, u), f = d[0], h = d[1];
      r.removeClasses(f, "exit"), r.addClass(f, h ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(c, u);
    }, r.onEntering = function(c, u) {
      var d = r.resolveArguments(c, u), f = d[0], h = d[1], p = h ? "appear" : "enter";
      r.addClass(f, p, "active"), r.props.onEntering && r.props.onEntering(c, u);
    }, r.onEntered = function(c, u) {
      var d = r.resolveArguments(c, u), f = d[0], h = d[1], p = h ? "appear" : "enter";
      r.removeClasses(f, p), r.addClass(f, p, "done"), r.props.onEntered && r.props.onEntered(c, u);
    }, r.onExit = function(c) {
      var u = r.resolveArguments(c), d = u[0];
      r.removeClasses(d, "appear"), r.removeClasses(d, "enter"), r.addClass(d, "exit", "base"), r.props.onExit && r.props.onExit(c);
    }, r.onExiting = function(c) {
      var u = r.resolveArguments(c), d = u[0];
      r.addClass(d, "exit", "active"), r.props.onExiting && r.props.onExiting(c);
    }, r.onExited = function(c) {
      var u = r.resolveArguments(c), d = u[0];
      r.removeClasses(d, "exit"), r.addClass(d, "exit", "done"), r.props.onExited && r.props.onExited(c);
    }, r.resolveArguments = function(c, u) {
      return r.props.nodeRef ? [r.props.nodeRef.current, c] : [c, u];
    }, r.getClassNames = function(c) {
      var u = r.props.classNames, d = typeof u == "string", f = d && u ? u + "-" : "", h = d ? "" + f + c : u[c], p = d ? h + "-active" : u[c + "Active"], D = d ? h + "-done" : u[c + "Done"];
      return {
        baseClassName: h,
        activeClassName: p,
        doneClassName: D
      };
    }, r;
  }
  var n = e.prototype;
  return n.addClass = function(a, o, i) {
    var c = this.getClassNames(o)[i + "ClassName"], u = this.getClassNames("enter"), d = u.doneClassName;
    o === "appear" && i === "done" && d && (c += " " + d), i === "active" && a && Tn(a), c && (this.appliedClasses[o][i] = c, Va(a, c));
  }, n.removeClasses = function(a, o) {
    var i = this.appliedClasses[o], c = i.base, u = i.active, d = i.done;
    this.appliedClasses[o] = {}, c && Pt(a, c), u && Pt(a, u), d && Pt(a, d);
  }, n.render = function() {
    var a = this.props;
    a.classNames;
    var o = Vt(a, ["classNames"]);
    return /* @__PURE__ */ X.createElement(ge, ot({}, o, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, e;
}(X.Component);
bt.defaultProps = {
  classNames: ""
};
bt.propTypes = process.env.NODE_ENV !== "production" ? ot({}, ge.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: La,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: l.func
}) : {};
function Ua(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Gt(t, e) {
  var n = function(o) {
    return e && gt(o) ? e(o) : o;
  }, r = /* @__PURE__ */ Object.create(null);
  return t && er.map(t, function(a) {
    return a;
  }).forEach(function(a) {
    r[a.key] = n(a);
  }), r;
}
function Ga(t, e) {
  t = t || {}, e = e || {};
  function n(f) {
    return f in e ? e[f] : t[f];
  }
  var r = /* @__PURE__ */ Object.create(null), a = [];
  for (var o in t)
    o in e ? a.length && (r[o] = a, a = []) : a.push(o);
  var i, c = {};
  for (var u in e) {
    if (r[u])
      for (i = 0; i < r[u].length; i++) {
        var d = r[u][i];
        c[r[u][i]] = n(d);
      }
    c[u] = n(u);
  }
  for (i = 0; i < a.length; i++)
    c[a[i]] = n(a[i]);
  return c;
}
function Pe(t, e, n) {
  return n[e] != null ? n[e] : t.props[e];
}
function Ba(t, e) {
  return Gt(t.children, function(n) {
    return yt(n, {
      onExited: e.bind(null, n),
      in: !0,
      appear: Pe(n, "appear", t),
      enter: Pe(n, "enter", t),
      exit: Pe(n, "exit", t)
    });
  });
}
function Xa(t, e, n) {
  var r = Gt(t.children), a = Ga(e, r);
  return Object.keys(a).forEach(function(o) {
    var i = a[o];
    if (gt(i)) {
      var c = o in e, u = o in r, d = e[o], f = gt(d) && !d.props.in;
      u && (!c || f) ? a[o] = yt(i, {
        onExited: n.bind(null, i),
        in: !0,
        exit: Pe(i, "exit", t),
        enter: Pe(i, "enter", t)
      }) : !u && c && !f ? a[o] = yt(i, {
        in: !1
      }) : u && c && gt(d) && (a[o] = yt(i, {
        onExited: n.bind(null, i),
        in: d.props.in,
        exit: Pe(i, "exit", t),
        enter: Pe(i, "enter", t)
      }));
    }
  }), a;
}
var za = Object.values || function(t) {
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}, Qa = {
  component: "div",
  childFactory: function(e) {
    return e;
  }
}, xt = /* @__PURE__ */ function(t) {
  Ut(e, t);
  function e(r, a) {
    var o;
    o = t.call(this, r, a) || this;
    var i = o.handleExited.bind(Ua(o));
    return o.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, o;
  }
  var n = e.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, e.getDerivedStateFromProps = function(a, o) {
    var i = o.children, c = o.handleExited, u = o.firstRender;
    return {
      children: u ? Ba(a, c) : Xa(a, i, c),
      firstRender: !1
    };
  }, n.handleExited = function(a, o) {
    var i = Gt(this.props.children);
    a.key in i || (a.props.onExited && a.props.onExited(o), this.mounted && this.setState(function(c) {
      var u = ot({}, c.children);
      return delete u[a.key], {
        children: u
      };
    }));
  }, n.render = function() {
    var a = this.props, o = a.component, i = a.childFactory, c = Vt(a, ["component", "childFactory"]), u = this.state.contextValue, d = za(this.state.children).map(i);
    return delete c.appear, delete c.enter, delete c.exit, o === null ? /* @__PURE__ */ X.createElement(wt.Provider, {
      value: u
    }, d) : /* @__PURE__ */ X.createElement(wt.Provider, {
      value: u
    }, /* @__PURE__ */ X.createElement(o, c, d));
  }, e;
}(X.Component);
xt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: l.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: l.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: l.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: l.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: l.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: l.func
} : {};
xt.defaultProps = Qa;
const Ja = "_root_11jcu_1", Ka = "_landscape_11jcu_14", Za = "_dateWrapper_11jcu_20", eo = "_day_11jcu_20", to = "_wrapper_11jcu_25", no = "_blank_11jcu_31", ro = "_active_11jcu_46", ao = "_year_11jcu_55", oo = "_date_11jcu_20", so = "_range_11jcu_69", pe = {
  root: Ja,
  landscape: Ka,
  dateWrapper: Za,
  day: eo,
  wrapper: to,
  blank: no,
  active: ro,
  year: ao,
  date: oo,
  range: so
}, io = "_enter_1dfih_1", co = "_enterActive_1dfih_7", lo = "_leave_1dfih_12", uo = "_leaveActive_1dfih_17", fo = {
  enter: io,
  enterActive: co,
  leave: lo,
  leaveActive: uo
};
function rt(t, {
  display: e,
  key: n,
  locale: { locale: r },
  dateFormat: a,
  onYearClick: o,
  scrollToDate: i,
  setDisplay: c,
  shouldAnimate: u
}) {
  const d = t instanceof Date ? t : new Date(t), f = d && !isNaN(d.getTime()) && [
    {
      active: e === "years",
      handleClick: (h) => {
        o(d, h, n), c("years");
      },
      item: "year",
      title: e === "days" ? "Change year" : null,
      value: d.getFullYear()
    },
    {
      active: e === "days",
      handleClick: (h) => {
        e !== "days" ? c("days") : d && i(d, -40, !0);
      },
      item: "day",
      title: e === "days" ? `Scroll to ${z(d, a)}` : null,
      value: z(d, a)
    }
  ];
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      className: pe.wrapper,
      "aria-label": z(d, `${a} yyyy`),
      children: f.map(({ handleClick: h, item: p, value: D, active: _, title: v }) => {
        const x = W(null);
        return /* @__PURE__ */ g.jsx(
          "div",
          {
            className: ae(pe.dateWrapper, pe[p], {
              [pe.active]: _
            }),
            title: v,
            children: /* @__PURE__ */ g.jsx(xt, { component: null, children: /* @__PURE__ */ g.jsx(
              bt,
              {
                classNames: fo,
                timeout: 250,
                appear: u,
                enter: u,
                exit: u,
                nodeRef: x,
                children: /* @__PURE__ */ g.jsx(
                  "span",
                  {
                    ref: x,
                    className: pe.date,
                    "aria-hidden": !0,
                    onClick: h,
                    children: D
                  }
                )
              },
              `${p}-${D}`
            ) })
          },
          p
        );
      })
    },
    n
  );
}
const kn = ({
  dateFormat: t,
  display: e,
  layout: n,
  locale: r,
  onYearClick: a = Se,
  selected: o,
  shouldAnimate: i,
  theme: c,
  renderSelection: u = rt
}) => /* @__PURE__ */ g.jsx(
  "div",
  {
    "data-testid": "calendar-header",
    className: ae(pe.root, {
      [pe.landscape]: n === "landscape"
    }),
    style: {
      backgroundColor: c.headerColor,
      color: c.textColor.active
    },
    children: o ? u(o, {
      dateFormat: t,
      display: e,
      key: "selection",
      locale: r,
      onYearClick: a,
      scrollToDate: Se,
      setDisplay: Se,
      shouldAnimate: i
    }) : /* @__PURE__ */ g.jsx("div", { className: ae(pe.wrapper, pe.blank), children: r.blank })
  }
);
kn.propTypes = {
  dateFormat: l.string,
  display: l.string,
  layout: l.string,
  locale: l.object,
  onYearClick: l.func,
  selected: l.any,
  shouldAnimate: l.bool,
  theme: l.object
};
function Mn({
  count: t,
  getScrollElement: e,
  estimateSize: n,
  overscan: r = 2,
  getItemKey: a
}) {
  const [o, i] = Z(0), [c, u] = Z(0), d = W(null), f = W(/* @__PURE__ */ new Map());
  Ce(() => {
    d.current = e?.();
  }, [e]);
  const h = S((v) => {
    const x = v.target.scrollTop;
    i(x);
  }, []);
  Ce(() => {
    const v = d.current;
    if (!v) return;
    v.addEventListener("scroll", h, { passive: !0 });
    const x = () => {
      u(v.clientHeight);
    };
    return x(), window.addEventListener("resize", x), () => {
      v.removeEventListener("scroll", h), window.removeEventListener("resize", x);
    };
  }, [h]);
  const p = V(() => {
    if (t === 0 || c === 0)
      return { startIndex: 0, endIndex: 0, visibleItems: [] };
    const v = n?.() || 50, x = Math.max(0, Math.floor(o / v) - r), R = Math.min(
      t - 1,
      Math.ceil((o + c) / v) + r
    ), w = [];
    for (let b = x; b <= R; b++) {
      const M = b * v;
      w.push({
        index: b,
        start: M,
        size: v,
        end: M + v,
        key: a?.(b) || b
      });
    }
    return { startIndex: x, endIndex: R, visibleItems: w };
  }, [t, c, o, n, r, a]), D = V(() => {
    const v = n?.() || 50;
    return t * v;
  }, [t, n]), _ = S((v) => {
    if (!v) return;
    const x = parseInt(v.getAttribute("data-index") || "0", 10);
    f.current.has(x) || f.current.set(x, v.offsetHeight);
  }, []);
  return {
    getVirtualItems: () => p.visibleItems,
    getTotalSize: () => D,
    measureElement: _,
    scrollToIndex: (v) => {
      const x = d.current;
      if (!x) return;
      const R = n?.() || 50, w = v * R;
      x.scrollTop = w;
    },
    scrollToOffset: (v) => {
      const x = d.current;
      x && (x.scrollTop = v);
    }
  };
}
const ho = X.forwardRef(({
  count: t,
  estimateSize: e,
  renderItem: n,
  height: r,
  width: a,
  overscan: o = 2,
  getItemKey: i,
  className: c,
  style: u,
  onScroll: d
}, f) => {
  const h = W(null), p = Mn({
    count: t,
    getScrollElement: () => h.current,
    estimateSize: e,
    overscan: o,
    getItemKey: i
  }), D = S((_) => {
    d?.(_);
  }, [d]);
  return X.useImperativeHandle(f, () => ({
    scrollToIndex: p.scrollToIndex,
    scrollToOffset: p.scrollToOffset,
    getScrollElement: () => h.current
  }), [p.scrollToIndex, p.scrollToOffset]), /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: h,
      className: c,
      style: {
        height: r,
        width: a,
        overflow: "auto",
        ...u
      },
      onScroll: D,
      children: /* @__PURE__ */ g.jsx(
        "div",
        {
          style: {
            height: p.getTotalSize(),
            width: "100%",
            position: "relative"
          },
          children: p.getVirtualItems().map(
            (_, v) => n({
              ..._,
              measureElement: p.measureElement
            }, v)
          )
        }
      )
    }
  );
});
ho.displayName = "SimpleVirtualList";
const mo = "_rows_1wsvd_1", po = "_row_1wsvd_1", go = "_partial_1wsvd_20", yo = "_label_1wsvd_28", vo = "_partialFirstRow_1wsvd_54", Ve = {
  rows: mo,
  row: po,
  partial: go,
  label: yo,
  partialFirstRow: vo
}, wo = ({
  DayComponent: t,
  disabledDates: e,
  disabledDays: n,
  monthDate: r,
  locale: a,
  maxDate: o,
  minDate: i,
  rowHeight: c,
  rows: u,
  selected: d,
  today: f,
  theme: h,
  passThrough: p,
  showOverlay: D,
  style: _
}) => {
  const v = V(() => {
    const R = f.getFullYear(), w = r.getFullYear(), b = r.getMonth(), M = z(r, "MMM", { locale: a.locale }), O = [], F = z(f, "yyyy-MM-dd"), U = z(i, "yyyy-MM-dd"), ee = z(o, "yyyy-MM-dd");
    for (let G = 0, A = u.length; G < A; G++) {
      const oe = u[G], me = [];
      let B = qt(new Date(w, b, oe[0]));
      for (let L = 0, se = oe.length; L < se; L++) {
        const ie = oe[L], C = Ra(w, b, ie), $ = C === F, Q = i && C < U || o && C > ee || n && n.length && n.indexOf(B) !== -1 || e && e.length && e.indexOf(C) !== -1;
        me[L] = /* @__PURE__ */ g.jsx(
          t,
          {
            currentYear: R,
            date: C,
            day: ie,
            selected: d,
            isDisabled: Q,
            isToday: $,
            locale: a,
            month: b,
            monthShort: M,
            theme: h,
            year: w,
            ...p.Day
          },
          `day-${ie}`
        ), B += 1;
      }
      O[G] = /* @__PURE__ */ g.jsx(
        "ul",
        {
          className: ae(Ve.row, { [Ve.partial]: oe.length !== 7 }),
          style: { height: c },
          role: "row",
          "aria-label": `Week ${G + 1}`,
          children: me
        },
        `Row-${G}`
      );
    }
    return O;
  }, [t, e, n, r, a, o, i, c, u, d, f, h, p]), x = Ea(r, f) ? "MMMM" : "MMMM yyyy";
  return /* @__PURE__ */ g.jsx("div", { className: Ve.root, style: { ..._, lineHeight: `${c}px` }, children: /* @__PURE__ */ g.jsxs("div", { className: Ve.rows, children: [
    v,
    D && /* @__PURE__ */ g.jsx(
      "label",
      {
        className: ae(Ve.label, {
          [Ve.partialFirstRow]: u[0].length !== 7
        }),
        style: { backgroundColor: h.overlayColor },
        children: /* @__PURE__ */ g.jsx("span", { children: z(r, x, { locale: a.locale }) })
      }
    )
  ] }) });
}, bo = "_root_u4ye3_1", xo = "_scrolling_u4ye3_6", pn = {
  root: bo,
  scrolling: xo
}, Eo = 5, Bt = tr(({
  DayComponent: t,
  disabledDates: e,
  disabledDays: n,
  height: r,
  isScrolling: a,
  locale: o,
  maxDate: i,
  min: c,
  minDate: u,
  months: d,
  onDaySelect: f,
  onScroll: h,
  overscanMonthCount: p,
  passThrough: D = {},
  rowHeight: _,
  scrollDate: v,
  selectedDate: x,
  showOverlay: R,
  theme: w,
  today: b,
  width: M
}, O) => {
  const F = S((C) => {
    if (!C || !c || !o) return 0;
    const { weekStartsOn: $ } = o;
    return Ca(xr(c), re(C), $) * _ - (r - _ / 2) / 2;
  }, [c, _, o, r]), [U, ee] = Z(() => F(v)), G = W({});
  W([]);
  const A = W(null), oe = S((C) => {
    if (!G.current[C]) {
      const { weekStartsOn: $ } = o, [Q, Y] = C.split(":"), ce = Sa(Q, Y, $);
      G.current[C] = ce;
    }
    return G.current[C];
  }, [o]);
  Ce(() => {
    ee(F(v));
  }, [v, F]);
  const me = S((C, $ = 0, ...Q) => {
    const Y = F(C);
    B(Y + $, ...Q);
  }, [F]), B = S((C = 0, $ = !1, Q = Se) => {
    const Y = () => {
      typeof globalThis < "u" && globalThis.setTimeout(() => {
        A.current && (A.current.style.overflowY = "auto"), Q();
      }, 0);
    };
    A.current && (A.current.style.overflowY = "hidden"), $ ? Oa({
      fromValue: A.current?.scrollTop || 0,
      toValue: C,
      onUpdate: (ce, ye) => {
        A.current && (A.current.scrollTop = ce), ee(ce), ye && ye();
      },
      onComplete: Y
    }) : typeof globalThis < "u" && globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame(() => {
      A.current && (A.current.scrollTop = C), Y();
    }) : (A.current && (A.current.scrollTop = C), Y());
  }, []), L = Mn({
    count: d.length,
    getScrollElement: () => A.current,
    estimateSize: () => _ * Eo,
    getItemKey: (C) => `${d[C].year}:${d[C].month}`,
    overscan: p || 2
  }), se = S((C) => {
    const { index: $ } = C, { month: Q, year: Y } = d[$], ce = `${Y}:${Q}`, { date: ye, rows: Fe } = oe(ce);
    return /* @__PURE__ */ g.jsx(
      "div",
      {
        "data-index": $,
        ref: C.measureElement,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          transform: `translateY(${C.start}px)`
        },
        children: /* @__PURE__ */ g.jsx(
          wo,
          {
            selected: x,
            DayComponent: t,
            monthDate: ye,
            disabledDates: e,
            disabledDays: n,
            maxDate: i,
            minDate: u,
            rows: Fe,
            rowHeight: _,
            isScrolling: !1,
            showOverlay: R,
            today: b,
            theme: w,
            locale: o,
            passThrough: D,
            ...D.Month
          }
        )
      },
      ce
    );
  }, [oe, d, x, e, n, i, u, _, R, b, w, o, D]), ie = S((C) => {
    const $ = C.currentTarget.scrollTop;
    ee($), h && h($, C);
  }, [h]);
  return X.useImperativeHandle(O, () => ({
    getScrollElement: () => A.current,
    scrollToDate: me,
    scrollTo: B
  }), [me, B]), /* @__PURE__ */ g.jsx(
    "div",
    {
      "data-testid": "calendar-month-list",
      ref: A,
      className: ae(pn.root, { [pn.scrolling]: a }),
      style: {
        height: r,
        width: M,
        overflow: "auto",
        lineHeight: `${_}px`
      },
      onScroll: ie,
      children: /* @__PURE__ */ g.jsx(
        "div",
        {
          style: {
            height: L.getTotalSize(),
            width: "100%",
            position: "relative"
          },
          children: L.getVirtualItems().map((C) => se(C))
        }
      )
    }
  );
});
Bt.propTypes = {
  disabledDates: l.arrayOf(l.string),
  disabledDays: l.arrayOf(l.number),
  height: l.number.isRequired,
  isScrolling: l.bool,
  locale: l.object.isRequired,
  maxDate: l.instanceOf(Date),
  min: l.instanceOf(Date).isRequired,
  minDate: l.instanceOf(Date),
  months: l.arrayOf(l.object).isRequired,
  onDaySelect: l.func,
  onScroll: l.func,
  overscanMonthCount: l.number,
  rowHeight: l.number.isRequired,
  scrollDate: l.instanceOf(Date),
  // Made optional to fix PropTypes warning
  selectedDate: l.instanceOf(Date),
  showOverlay: l.bool,
  theme: l.object.isRequired,
  today: l.instanceOf(Date).isRequired,
  width: l.oneOfType([l.number, l.string]).isRequired
};
Bt.displayName = "MonthList";
const _o = "_root_1mb1m_1", Do = "_day_1mb1m_11", gn = {
  root: _o,
  day: Do
}, Rn = ({ weekdays: t, weekStartsOn: e, theme: n }) => {
  const r = [...t.slice(e, 7), ...t.slice(0, e)];
  return /* @__PURE__ */ g.jsx(
    "ul",
    {
      "data-testid": "calendar-weekdays",
      className: gn.root,
      style: {
        backgroundColor: n.weekdayColor,
        color: n.textColor.active,
        paddingRight: Ma
      },
      "aria-hidden": !0,
      children: r.map((a, o) => /* @__PURE__ */ g.jsx("li", { className: gn.day, children: a }, `Weekday-${o}`))
    }
  );
};
Rn.propTypes = {
  weekdays: l.arrayOf(l.string).isRequired,
  weekStartsOn: l.number.isRequired,
  theme: l.shape({
    weekdayColor: l.string.isRequired,
    textColor: l.shape({
      active: l.string.isRequired
    }).isRequired
  }).isRequired
};
const Oo = "_root_l9718_1", So = "_year_l9718_39", Co = "_disabled_l9718_98", To = "_active_l9718_108", ko = "_currentYear_l9718_118", Oe = {
  root: Oo,
  year: So,
  disabled: Co,
  active: To,
  currentYear: ko
}, jn = ({
  height: t,
  hideOnSelect: e,
  locale: n,
  max: r,
  maxDate: a,
  min: o,
  minDate: i,
  scrollToDate: c,
  selected: u,
  setDisplay: d,
  showMonths: f,
  theme: h,
  today: p,
  width: D,
  years: _
}) => {
  const v = W(null), [x, R] = Z(u && u.getFullYear());
  Ce(() => {
    u && u.getFullYear() !== x && R(u.getFullYear());
  }, [u, x]);
  const w = S((b, M) => {
    M.stopPropagation();
    const O = new Date(b, 0, 1);
    c(O, 0, !0), e && d("days"), R(b);
  }, [c, e, d]);
  return /* @__PURE__ */ g.jsx(
    "ul",
    {
      "data-testid": "calendar-years",
      className: Oe.root,
      ref: v,
      style: { height: t, width: D },
      children: _.map((b) => {
        const M = b === x;
        return /* @__PURE__ */ g.jsxs(
          "li",
          {
            className: ae(Oe.year, {
              [Oe.active]: M,
              [Oe.currentYear]: b === p.getFullYear()
            }),
            onClick: (O) => w(b, O),
            style: {
              color: M ? h.selectionColor : null
            },
            children: [
              /* @__PURE__ */ g.jsx("div", { className: Oe.yearLabel, children: b }),
              f && M && /* @__PURE__ */ g.jsx("ol", { className: Oe.months, children: n.months.map((O, F) => {
                const U = new Date(b, F, 1), ee = U < o || U > r || U < i || U > a;
                return /* @__PURE__ */ g.jsx(
                  "li",
                  {
                    className: ae(Oe.month, {
                      [Oe.disabled]: ee
                    }),
                    onClick: (G) => {
                      G.stopPropagation(), ee || (c(U, 0, !0), d("days"));
                    },
                    style: {
                      color: ee ? null : h.selectionColor
                    },
                    children: O.substr(0, 3)
                  },
                  `${b}-${F}`
                );
              }) })
            ]
          },
          b
        );
      })
    }
  );
};
jn.propTypes = {
  height: l.number.isRequired,
  hideOnSelect: l.bool,
  locale: l.object.isRequired,
  max: l.instanceOf(Date).isRequired,
  maxDate: l.instanceOf(Date),
  min: l.instanceOf(Date).isRequired,
  minDate: l.instanceOf(Date),
  scrollToDate: l.func.isRequired,
  selected: l.instanceOf(Date),
  setDisplay: l.func.isRequired,
  showMonths: l.bool,
  theme: l.object.isRequired,
  today: l.instanceOf(Date).isRequired,
  width: l.oneOfType([l.number, l.string]).isRequired,
  years: l.array.isRequired
};
const Mo = "_root_wj34c_1", Ro = "_enabled_wj34c_11", jo = "_highlighted_wj34c_11", Po = "_today_wj34c_37", No = "_disabled_wj34c_44", Fo = "_selected_wj34c_63", Yo = "_month_wj34c_66", Wo = "_year_wj34c_66", Ao = "_selection_wj34c_72", $o = "_day_wj34c_88", Io = "_range_wj34c_119", Ho = "_start_wj34c_119", qo = "_end_wj34c_119", Lo = "_betweenRange_wj34c_145", K = {
  root: Mo,
  enabled: Ro,
  highlighted: jo,
  today: Po,
  disabled: No,
  selected: Fo,
  month: Yo,
  year: Wo,
  selection: Ao,
  day: $o,
  range: Io,
  start: Ho,
  end: qo,
  betweenRange: Lo
}, Vo = ({
  className: t,
  currentYear: e,
  date: n,
  day: r,
  handlers: a,
  isDisabled: o,
  isHighlighted: i,
  isToday: c,
  isSelected: u,
  locale: { todayLabel: d },
  monthShort: f,
  onClick: h,
  theme: { selectionColor: p, todayColor: D, textColor: _ },
  year: v,
  selectionStyle: x
}) => {
  const R = S(() => {
    !o && typeof h == "function" && h(re(n));
  }, [o, h, n]), w = S(() => /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: K.selection,
      "data-date": n,
      style: {
        backgroundColor: p,
        color: _.active,
        ...x
      },
      children: [
        /* @__PURE__ */ g.jsx("span", { className: K.month, children: c ? d.short || d.long : f }),
        /* @__PURE__ */ g.jsx("span", { className: K.day, children: r })
      ]
    }
  ), [n, p, _, x, c, d, f, r]), b = V(() => u ? typeof p == "function" ? p(n) : p : c ? D : null, [u, p, n, c, D]);
  return /* @__PURE__ */ g.jsxs(
    "li",
    {
      style: b ? { color: b } : null,
      className: ae(K.root, {
        [K.today]: c,
        [K.highlighted]: i,
        [K.selected]: u,
        [K.disabled]: o,
        [K.enabled]: !o
      }, t),
      onClick: R,
      "data-date": n,
      ...a,
      children: [
        r === 1 && /* @__PURE__ */ g.jsx("span", { className: K.month, children: f }),
        c ? /* @__PURE__ */ g.jsx("span", { children: r }) : r,
        r === 1 && e !== v && /* @__PURE__ */ g.jsx("span", { className: K.year, children: v }),
        u && w()
      ]
    }
  );
}, Uo = X.memo(Vo, (t, e) => t.isSelected === e.isSelected && t.isHighlighted === e.isHighlighted && t.isDisabled === e.isDisabled && t.isToday === e.isToday && t.date === e.date && t.selectionStyle === e.selectionStyle), Go = ({ min: t, max: e, minDate: n, maxDate: r, monthListRef: a }) => {
  const o = W(0), i = W(0), c = W(re(t)), u = W(re(e)), d = W(re(n)), f = W(re(r)), h = S(() => new ka().getScrollSpeed, []), p = S(() => o.current, []), D = S((w) => a.current && a.current.getDateOffset(w), [a]), _ = S((w) => a.current && a.current.scrollTo(w), [a]), v = S((w = /* @__PURE__ */ new Date(), b, M, O) => a.current && a.current.scrollToDate(
    w,
    b,
    M,
    O
  ), [a]), x = S((w) => w ? w.map((b) => {
    try {
      const M = b instanceof Date ? b : new Date(b);
      return z(M, "yyyy-MM-dd");
    } catch {
      return console.warn("Invalid date format in disabledDates:", b), null;
    }
  }).filter(Boolean) : null, []), R = S((w, b) => {
    o.current = w, i.current = b;
  }, []);
  return {
    scrollTop: o,
    scrollSpeed: i,
    minParsed: c,
    maxParsed: u,
    minDateParsed: d,
    maxDateParsed: f,
    getScrollSpeed: h,
    getCurrentOffset: p,
    getDateOffset: D,
    scrollTo: _,
    scrollToDate: v,
    getDisabledDates: x,
    updateScrollPosition: R
  };
}, Bo = ({ min: t, max: e }) => {
  const n = W(null), r = W(null), a = W([]), o = S((c = t, u = e) => {
    try {
      n.current = typeof c == "string" ? new Date(c) : c, r.current = typeof u == "string" ? new Date(u) : u;
      const d = n.current.getFullYear(), f = n.current.getMonth(), h = r.current.getFullYear(), p = r.current.getMonth(), D = [];
      for (let _ = d; _ <= h; _++)
        for (let v = 0; v < 12; v++)
          _ === d && v < f || _ === h && v > p || D.push({ month: v, year: _ });
      return a.current = D, a.current;
    } catch (d) {
      console.error("Error updating months:", d);
      const f = (/* @__PURE__ */ new Date()).getFullYear();
      return a.current = Array.from({ length: 12 }, (h, p) => ({ month: p, year: f })), a.current;
    }
  }, [t, e]), i = S(() => {
    if ((!n.current || !r.current) && o(), n.current.getFullYear() === 2020 && r.current.getFullYear() === 2020)
      return [2020, 2021];
    const c = n.current.getFullYear(), u = r.current.getFullYear();
    return c <= u ? Yt(c, u + 1) : [c];
  }, [o]);
  return Ce(() => {
    o();
  }, []), {
    months: a,
    minDate: n,
    maxDate: r,
    updateMonths: o,
    getYearsRange: i
  };
}, Xo = {
  hideYearsOnSelect: !0,
  layout: "portrait",
  overscanMonthCount: 2,
  shouldHeaderAnimate: !0,
  showHeader: !0,
  showMonthsForYears: !0,
  showOverlay: !0,
  showTodayHelper: !0,
  showWeekdays: !0,
  todayHelperRowOffset: 4
}, zo = {
  blank: "Select a date...",
  headerFormat: "ddd, MMM Do",
  todayLabel: {
    long: "Today"
  },
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekStartsOn: 0
}, Qo = {
  accentColor: "#448AFF",
  floatingNav: {
    background: "rgba(56, 87, 138, 0.94)",
    chevron: "#FFA726",
    color: "#FFF"
  },
  headerColor: "#448AFF",
  selectionColor: "#559FFF",
  textColor: {
    active: "#FFF",
    default: "#333"
  },
  todayColor: "#FFA726",
  weekdayColor: "#559FFF"
}, Jo = ({ display: t, displayOptions: e, locale: n, theme: r }) => {
  const [a, o] = Z(t), i = S((f) => {
    if (o(f), typeof window < "u" && window.__VITEST__)
      return f;
  }, []);
  Ce(() => {
    t !== a && o(t);
  }, [t, a]);
  const c = S((f = e) => ({ ...Xo, ...f }), [e]), u = S(() => ({ ...zo, ...n }), [n]), d = S(() => ({ ...Qo, ...r }), [r]);
  return {
    display: a,
    setDisplay: i,
    getDisplayOptions: c,
    getLocale: u,
    getTheme: d
  };
}, Ko = "_root_1h6w5_1", Zo = "_landscape_1h6w5_13", es = "_wrapper_1h6w5_17", ts = "_listWrapper_1h6w5_26", ns = {
  root: Ko,
  landscape: Zo,
  wrapper: es,
  listWrapper: ts
}, pt = {
  container: ns
}, rs = {
  autoFocus: !0,
  DayComponent: Uo,
  display: "days",
  displayOptions: {},
  HeaderComponent: kn,
  height: 500,
  keyboardSupport: !0,
  max: new Date(2050, 11, 31),
  maxDate: new Date(2050, 11, 31),
  min: new Date(1980, 0, 1),
  minDate: new Date(1980, 0, 1),
  onHighlightedDateChange: Se,
  onScroll: Se,
  onScrollEnd: Se,
  onSelect: Se,
  passThrough: {},
  rowHeight: 56,
  tabIndex: 1,
  width: 400,
  YearsComponent: jn
}, Pn = (t) => {
  const e = { ...rs, ...t }, n = nr(), r = W(null), a = W(null), o = W(null), i = W(null), c = W(Ne(/* @__PURE__ */ new Date())), [u, d] = Z(!1), f = rr(u), [h, p] = Z(!1), { display: D, setDisplayMode: _, getDisplayOptions: v, getLocale: x, getTheme: R } = Jo({
    display: e.display,
    displayOptions: e.displayOptions,
    locale: e.locale,
    theme: e.theme
  }), { months: w, minDate: b, maxDate: M, min: O, max: F, updateMonths: U } = Bo({
    min: e.min,
    max: e.max
  }), {
    scrollTop: ee,
    getScrollSpeed: G,
    getDateOffset: A,
    scrollToDate: oe,
    getDisabledDates: me,
    updateScrollPosition: B
  } = Go({
    min: e.min,
    max: e.max,
    minDate: e.minDate,
    maxDate: e.maxDate,
    monthListRef: a
  });
  Ce(() => {
    U(), e.autoFocus && r.current && r.current.focus();
  }, [U, e.autoFocus]);
  const L = S((ne = /* @__PURE__ */ new Date(), le, ve) => oe(
    ne,
    le,
    ve && e.display === "days",
    () => d(!1)
  ), [e.display, oe]), se = S(ja(() => {
    const { onScrollEnd: ne } = e, { showTodayHelper: le } = v();
    u && d(!1), le && ie(0), ne(ee.current);
  }, 150), [e.onScrollEnd, u, v]), ie = S((ne) => {
    const le = ee.current, { height: ve, rowHeight: _e } = e, { todayHelperRowOffset: Ae } = v();
    let fe;
    i.current || (i.current = A(c.current)), le >= i.current + (ve - _e) / 2 + _e * Ae ? h !== Wt && (fe = Wt) : le <= i.current - ve / 2 - _e * (Ae + 1) ? h !== At && (fe = At) : h && ne <= 1 && (fe = !1), le === 0 && (fe = !1), fe != null && p(fe);
  }, [e.height, e.rowHeight, v, A, h]), C = S((ne, le) => {
    const { onScroll: ve, rowHeight: _e } = e, { showTodayHelper: Ae, showOverlay: fe } = v(), $e = Math.abs(G(ne));
    B(ne, $e), fe && $e > _e && !u && d(!0), Ae && ie($e), ve(ne, le), se();
  }, [e.onScroll, e.rowHeight, v, u, ie, se, B, G]), $ = S((ne) => {
    _(ne);
  }, [_]), {
    className: Q,
    passThrough: Y,
    DayComponent: ce,
    disabledDays: ye,
    displayDate: Fe,
    height: it,
    HeaderComponent: Et,
    rowHeight: Xe,
    scrollDate: ze,
    selected: be,
    tabIndex: Qe,
    width: xe,
    YearsComponent: _t
  } = e, {
    hideYearsOnSelect: ct,
    layout: lt,
    overscanMonthCount: Dt,
    shouldHeaderAnimate: Ye,
    showHeader: Te,
    showMonthsForYears: ut,
    showOverlay: dt,
    showTodayHelper: We,
    showWeekdays: Ot
  } = v(), St = me(e.disabledDates), de = x(), Ee = R();
  return c.current = Ne(/* @__PURE__ */ new Date()), /* @__PURE__ */ g.jsxs(
    "div",
    {
      tabIndex: Qe,
      className: ae(Q, pt.container.root, {
        [pt.container.landscape]: lt === "landscape"
      }),
      style: { color: Ee.textColor.default, width: xe },
      role: "application",
      "aria-label": "Interactive Calendar",
      "aria-describedby": `${n}-description`,
      ref: r,
      ...Y && Y.rootNode ? Y.rootNode : {},
      children: [
        /* @__PURE__ */ g.jsx("div", { id: `${n}-description`, className: "sr-only", children: "Use arrow keys to navigate dates, Enter to select, Escape to close year view" }),
        Te && /* @__PURE__ */ g.jsx(
          Et,
          {
            selected: be,
            shouldAnimate: !!(Ye && D !== "years"),
            layout: lt,
            theme: Ee,
            locale: de,
            scrollToDate: L,
            setDisplay: $,
            dateFormat: de.headerFormat,
            display: D,
            displayDate: Fe,
            ...Y && Y.Header ? Y.Header : {}
          }
        ),
        /* @__PURE__ */ g.jsxs("div", { className: pt.container.wrapper, children: [
          Ot && /* @__PURE__ */ g.jsx(Rn, { weekdays: de.weekdays, weekStartsOn: de.weekStartsOn, theme: Ee }),
          /* @__PURE__ */ g.jsxs("div", { className: pt.container.listWrapper, children: [
            We && /* @__PURE__ */ g.jsx(
              Cn,
              {
                scrollToDate: L,
                show: h,
                today: c.current,
                theme: Ee,
                todayLabel: de.todayLabel.long
              }
            ),
            /* @__PURE__ */ g.jsx(
              Bt,
              {
                ref: a,
                DayComponent: ce,
                disabledDates: St,
                disabledDays: ye,
                height: it,
                isScrolling: f,
                locale: de,
                maxDate: M && M.current ? M.current : e.maxDate,
                min: O && O.current ? O.current : e.min,
                minDate: b && b.current ? b.current : e.minDate,
                months: w && w.current ? w.current : [],
                onScroll: C,
                overscanMonthCount: Dt,
                passThrough: Y,
                theme: Ee,
                today: c.current,
                rowHeight: Xe,
                selected: be,
                scrollDate: ze,
                showOverlay: dt,
                width: xe
              }
            )
          ] }),
          D === "years" && /* @__PURE__ */ g.jsx(
            _t,
            {
              ref: o,
              height: it,
              hideOnSelect: ct,
              locale: de,
              max: F && F.current ? F.current : e.max,
              maxDate: M && M.current ? M.current : e.maxDate,
              min: O && O.current ? O.current : e.min,
              minDate: b && b.current ? b.current : e.minDate,
              scrollToDate: L,
              selected: be,
              setDisplay: $,
              showMonths: ut,
              theme: Ee,
              today: c.current,
              width: xe,
              years: O && O.current && F && F.current ? Yt(O.current.getFullYear(), F.current.getFullYear() + 1) : Yt(e.min.getFullYear(), e.max.getFullYear() + 1),
              ...Y && Y.Years ? Y.Years : {}
            }
          )
        ] })
      ]
    }
  );
};
Pn.propTypes = {
  autoFocus: l.bool,
  className: l.string,
  DayComponent: l.func,
  disabledDates: l.arrayOf(l.instanceOf(Date)),
  disabledDays: l.arrayOf(l.number),
  display: l.oneOf(["years", "days"]),
  displayOptions: l.shape({
    hideYearsOnSelect: l.bool,
    layout: l.oneOf(["portrait", "landscape"]),
    overscanMonthCount: l.number,
    shouldHeaderAnimate: l.bool,
    showHeader: l.bool,
    showMonthsForYears: l.bool,
    showOverlay: l.bool,
    showTodayHelper: l.bool,
    showWeekdays: l.bool,
    todayHelperRowOffset: l.number
  }),
  height: l.number,
  keyboardSupport: l.bool,
  locale: l.shape({
    blank: l.string,
    headerFormat: l.string,
    todayLabel: l.shape({
      long: l.string,
      short: l.string
    }),
    weekdays: l.arrayOf(l.string),
    weekStartsOn: l.oneOf([0, 1, 2, 3, 4, 5, 6])
  }),
  max: l.instanceOf(Date),
  maxDate: l.instanceOf(Date),
  min: l.instanceOf(Date),
  minDate: l.instanceOf(Date),
  onScroll: l.func,
  onScrollEnd: l.func,
  onSelect: l.func,
  rowHeight: l.number,
  tabIndex: l.number,
  theme: l.shape({
    floatingNav: l.shape({
      background: l.string,
      chevron: l.string,
      color: l.string
    }),
    headerColor: l.string,
    selectionColor: l.oneOfType([l.string, l.func]),
    textColor: l.shape({
      active: l.string,
      default: l.string
    }),
    todayColor: l.string,
    weekdayColor: l.string
  }),
  width: l.oneOfType([l.string, l.number]),
  YearsComponent: l.func
};
const as = (t) => (e) => {
  const n = e.selected === e.date;
  return /* @__PURE__ */ g.jsx(t, { ...e, isSelected: n });
}, os = (t) => (e) => {
  const n = re(e.selected);
  return /* @__PURE__ */ g.jsx(t, { ...e, selected: n });
}, ss = (t) => (e) => {
  const {
    DayComponent: n,
    onSelect: r,
    YearsComponent: a,
    selected: o,
    ...i
  } = e, [c, u] = Z(o || /* @__PURE__ */ new Date()), d = V(() => as(n), [n]), f = V(() => os(a), [a]), h = V(() => On(o, e), [o, e]), p = S((v) => {
    const x = re(v);
    r(x), u(x);
  }, [r]), D = V(() => ({
    Day: { onClick: r },
    Years: { onSelect: p }
  }), [r, p]), _ = h ? z(h, "yyyy-MM-dd") : null;
  return /* @__PURE__ */ g.jsx(
    t,
    {
      ...i,
      DayComponent: d,
      YearsComponent: f,
      selected: _,
      scrollDate: c,
      setScrollDate: u,
      passThrough: D
    }
  );
}, is = (t) => (e) => {
  const n = e.highlightedDate === e.date;
  return /* @__PURE__ */ g.jsx(t, { ...e, isHighlighted: n });
}, js = (t) => (e) => {
  const { DayComponent: n, minDate: r, maxDate: a, selected: o, displayDate: i, passThrough: c } = e, [u, d] = Z(o || /* @__PURE__ */ new Date()), f = S((v) => {
  }, []), h = S((v) => {
    cs(v, {
      minDate: r,
      maxDate: a,
      passThrough: { Day: { onClick: c.Day.onClick } },
      setScrollDate: f,
      setHighlight: d,
      highlightedDate: u,
      selected: o,
      displayDate: i
    });
  }, [u, r, a, c, f, d, o, i]), p = V(() => is(n), [n]), D = u ? z(u, "yyyy-MM-dd") : null, _ = V(() => ({
    ...c,
    Day: {
      ...c.Day,
      highlightedDate: D,
      onClick: (v) => {
        d(null), c.Day.onClick(v);
      }
    },
    rootNode: { onKeyDown: h }
  }), [c, D, h]);
  return /* @__PURE__ */ g.jsx(
    t,
    {
      ...e,
      DayComponent: p,
      highlightedDate: u,
      setHighlight: d,
      passThrough: _
    }
  );
};
function cs(t, e) {
  const {
    minDate: n,
    maxDate: r,
    passThrough: { Day: { onClick: a } },
    setScrollDate: o,
    setHighlight: i,
    highlightedDate: c,
    selected: u,
    displayDate: d
  } = e, f = c || u.start || d || u || /* @__PURE__ */ new Date();
  let h = 0;
  switch ([we.left, we.up, we.right, we.down].indexOf(t.keyCode) > -1 && typeof t.preventDefault == "function" && t.preventDefault(), t.keyCode) {
    case we.enter:
      a && a(f);
      return;
    case we.left:
      h = -1;
      break;
    case we.right:
      h = 1;
      break;
    case we.down:
      h = 7;
      break;
    case we.up:
      h = -7;
      break;
    default:
      h = 0;
  }
  if (h) {
    let p = hr(f, h);
    Lt(p, n) ? p = new Date(n) : Dn(p, r) && (p = new Date(r)), o(p), i(p);
  }
}
const ls = "_root_1lyf2_1", us = "_slide_1lyf2_1", ds = "_wrapper_1lyf2_20", fs = "_arrow_1lyf2_25", hs = "_arrowRight_1lyf2_45", ms = "_arrowLeft_1lyf2_49", Be = {
  root: ls,
  slide: us,
  wrapper: ds,
  arrow: fs,
  arrowRight: hs,
  arrowLeft: ms
}, ps = "_enter_dtohs_1", gs = "_enterActive_dtohs_5", ys = "_leave_dtohs_10", vs = "_leaveActive_dtohs_14", ws = {
  enter: ps,
  enterActive: gs,
  leave: ys,
  leaveActive: vs
}, Ge = {
  LEFT: 0,
  RIGHT: 1
}, yn = ({ direction: t, onClick: e }) => /* @__PURE__ */ g.jsx(
  "div",
  {
    className: ae(Be.arrow, {
      [Be.arrowLeft]: t === Ge.LEFT,
      [Be.arrowRight]: t === Ge.RIGHT
    }),
    onClick: () => e(t),
    children: /* @__PURE__ */ g.jsx("svg", { x: "0px", y: "0px", viewBox: "0 0 26 46", children: /* @__PURE__ */ g.jsx("path", { d: "M31.232233,34.767767 C32.2085438,35.7440777 33.7914562,35.7440777 34.767767,34.767767 C35.7440777,33.7914562 35.7440777,32.2085438 34.767767,31.232233 L14.767767,11.232233 C13.7914562,10.2559223 12.2085438,10.2559223 11.232233,11.232233 L-8.767767,31.232233 C-9.7440777,32.2085438 -9.7440777,33.7914562 -8.767767,34.767767 C-7.7914562,35.7440777 -6.2085438,35.7440777 -5.232233,34.767767 L12.9997921,16.5357418 L31.232233,34.767767 Z", id: "Shape", fill: "#FFF", transform: "translate(13.000000, 23.000000) rotate(90.000000) translate(-13.000000, -23.000000) " }) })
  }
), bs = ({ children: t, index: e, onChange: n }) => {
  const r = S((a) => {
    let o = e;
    switch (a) {
      case Ge.LEFT:
        o = Math.max(0, e - 1);
        break;
      case Ge.RIGHT:
        o = Math.min(e + 1, t.length - 1);
        break;
      default:
        return;
    }
    n(o);
  }, [e, t.length, n]);
  return /* @__PURE__ */ g.jsxs("div", { className: Be.root, children: [
    e !== 0 && /* @__PURE__ */ g.jsx(yn, { onClick: r, direction: Ge.LEFT }),
    /* @__PURE__ */ g.jsx("div", { className: Be.wrapper, style: { transform: `translate3d(-${100 * e}%, 0, 0)` }, children: /* @__PURE__ */ g.jsx(xt, { component: null, children: X.Children.map(t, (a, o) => {
      const i = W(null);
      return /* @__PURE__ */ g.jsx(
        bt,
        {
          classNames: ws,
          timeout: 300,
          nodeRef: i,
          children: /* @__PURE__ */ g.jsx("div", { ref: i, className: Be.slide, style: { transform: `translateX(${100 * o}%)` }, children: a })
        },
        o
      );
    }) }) }),
    e !== t.length - 1 && /* @__PURE__ */ g.jsx(yn, { onClick: r, direction: Ge.RIGHT })
  ] });
}, xs = ({ renderSelection: t, setDisplayDate: e }) => ({
  renderSelection: (n, { scrollToDate: r, displayDate: a, ...o }) => {
    if (!n.length)
      return null;
    const i = n.sort(), c = n.indexOf(z(re(a), "yyyy-MM-dd"));
    return /* @__PURE__ */ g.jsx(
      bs,
      {
        index: c !== -1 ? c : i.length - 1,
        onChange: (u) => e(
          i[u],
          () => setTimeout(() => r(i[u], 0, !0), 50)
        ),
        children: i.map(
          (u, d) => rt(u, {
            ...o,
            key: d,
            scrollToDate: r,
            shouldAnimate: !1
          })
        )
      }
    );
  }
}), Es = (t) => Sn(xs)(t), _s = (t) => (e) => {
  const n = e.selected.indexOf(e.date) !== -1;
  return /* @__PURE__ */ g.jsx(t, { ...e, isSelected: n });
}, Ds = (t) => (e) => {
  const n = e.displayDate ? re(e.displayDate) : null;
  return /* @__PURE__ */ g.jsx(t, { ...e, selected: n });
}, Ps = (t) => (e) => {
  const { DayComponent: n, HeaderComponent: r, YearsComponent: a, selected: o, ...i } = e, [c, u] = Z(vn(e)), [d, f] = Z(vn(e)), h = V(() => _s(n), [n]), p = V(() => Es(r), [r]), D = V(() => Ds(a), [a]), _ = S((w) => {
    e.onSelect(w), f(w);
  }, [e.onSelect]), v = S((w, b, M) => {
    M(re(w));
  }, []), x = V(() => e.selected.filter((w) => On(w, e)).map((w) => z(w, "yyyy-MM-dd")), [e.selected, e]), R = V(() => ({
    Day: {
      onClick: (w) => _(w)
    },
    Header: {
      setDisplayDate: f
    },
    Years: {
      displayDate: d,
      onSelect: (w, b, M) => v(w, b, M),
      selected: d
    }
  }), [_, f, d, v]);
  return /* @__PURE__ */ g.jsx(
    t,
    {
      ...i,
      DayComponent: h,
      HeaderComponent: p,
      YearsComponent: D,
      scrollDate: c,
      setScrollDate: u,
      displayDate: d,
      setDisplayDate: f,
      passThrough: R,
      selected: x
    }
  );
};
function vn({ selected: t }) {
  return t.length ? t[0] : /* @__PURE__ */ new Date();
}
function Ns(t, e) {
  const r = e.map((a) => z(a, "yyyy-MM-dd")).indexOf(z(t, "yyyy-MM-dd"));
  return r === -1 ? [...e, t] : [...e.slice(0, r), ...e.slice(r + 1)];
}
const Os = Sn(({ renderSelection: t }) => ({
  renderSelection: (e, n) => {
    if (!e || !e.start && !e.end)
      return null;
    if (e.start === e.end)
      return rt(e.start, n);
    const r = n.locale && n.locale.headerFormat || "MMM Do";
    return /* @__PURE__ */ g.jsxs("div", { className: pe.range, style: { color: n.theme.headerColor }, children: [
      rt(e.start, { ...n, dateFormat: r, key: "start", shouldAnimate: !1 }),
      rt(e.end, { ...n, dateFormat: r, key: "end", shouldAnimate: !1 })
    ] });
  }
}));
let Nn = !1;
const Nt = {
  END: 3,
  // End date selection
  HOVER: 2,
  // Hover during selection
  START: 1
  // Start date selection
}, Ss = (t) => (e) => {
  const { date: n, selected: r, theme: a } = e, o = n >= r.start && n <= r.end, i = n === r.start, c = n === r.end, u = !(i && c), d = u && (i && { backgroundColor: a.accentColor } || c && { borderColor: a.accentColor });
  return /* @__PURE__ */ g.jsx(
    t,
    {
      ...e,
      className: o && u && ae(K.range, {
        [K.start]: i,
        [K.betweenRange]: !i && !c,
        [K.end]: c
      }),
      isSelected: o,
      selectionStyle: d
    }
  );
}, Fs = (t) => (e) => {
  const { DayComponent: n, HeaderComponent: r, YearsComponent: a, selected: o, onSelect: i, ...c } = e, [u, d] = Z(Cs(e)), [f, h] = Z("start"), [p, D] = Z(null), _ = V(() => Ss(n), [n]), v = V(() => Os(r), [r]), x = S((O) => {
    p ? (i({
      eventType: Nt.END,
      ...Ft({
        start: p,
        end: O
      })
    }), D(null)) : (i({ eventType: Nt.START, start: O, end: O }), D(O));
  }, [i, p]), R = S((O) => {
    const F = O.target.getAttribute("data-date"), U = F && re(F);
    U && i({
      eventType: Nt.HOVER,
      ...Ft({
        start: p,
        end: U
      })
    });
  }, [i, p]), w = S((O) => {
    d(O), i(
      Ft(
        Object.assign({}, o, { [f]: re(O) })
      )
    );
  }, [f, i, o]), b = V(() => ({
    start: o && z(o.start, "yyyy-MM-dd"),
    end: o && z(o.end, "yyyy-MM-dd")
  }), [o]), M = V(() => ({
    Day: {
      onClick: (O) => x(O),
      handlers: {
        onMouseOver: !Nn && p ? (O) => R(O) : null
      }
    },
    Years: {
      selected: o && o[f],
      onSelect: (O) => w(O)
    },
    Header: {
      onYearClick: (O, F, U) => h(U || "start")
    }
  }), [x, R, w, f, p, o]);
  return /* @__PURE__ */ g.jsx(
    t,
    {
      ...c,
      DayComponent: _,
      HeaderComponent: v,
      scrollDate: u,
      setScrollDate: d,
      displayKey: f,
      setDisplayKey: h,
      selectionStart: p,
      setSelectionStart: D,
      passThrough: M,
      selected: b
    }
  );
};
function Ft({ start: t, end: e }) {
  return Lt(t, e) ? { start: t, end: e } : { start: e, end: t };
}
function Cs({ selected: t }) {
  return t && t.start || /* @__PURE__ */ new Date();
}
typeof window < "u" && window.addEventListener("touchstart", function t() {
  Nn = !0, window.removeEventListener("touchstart", t, !1);
});
const Ys = ({
  selected: t,
  onSelect: e,
  interpolateSelection: n = (o) => o,
  Component: r = ss(Pn),
  ...a
}) => {
  const [o, i] = Z(t || /* @__PURE__ */ new Date());
  Ce(() => {
    t !== o && i(t);
  }, [t]);
  const c = S(
    (u) => {
      typeof e == "function" && e(u), i(n(u, u));
    },
    [e, n]
  );
  return /* @__PURE__ */ g.jsx(
    r,
    {
      ...a,
      onSelect: c,
      selected: o
    }
  );
};
export {
  Pn as Calendar,
  Nt as EVENT_TYPE,
  Ys as default,
  Ns as defaultMultipleDateInterpolation,
  ss as withDateSelection,
  js as withKeyboardSupport,
  Ps as withMultipleDates,
  Fs as withRange
};
//# sourceMappingURL=react-infinite-calendar.es.js.map
