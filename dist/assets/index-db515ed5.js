function gd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function yd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xr = {},
  wd = {
    get exports() {
      return xr;
    },
    set exports(e) {
      xr = e;
    },
  },
  io = {},
  R = {},
  Sd = {
    get exports() {
      return R;
    },
    set exports(e) {
      R = e;
    },
  },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vr = Symbol.for("react.element"),
  kd = Symbol.for("react.portal"),
  Ed = Symbol.for("react.fragment"),
  xd = Symbol.for("react.strict_mode"),
  Cd = Symbol.for("react.profiler"),
  Pd = Symbol.for("react.provider"),
  _d = Symbol.for("react.context"),
  Rd = Symbol.for("react.forward_ref"),
  Nd = Symbol.for("react.suspense"),
  Ld = Symbol.for("react.memo"),
  Dd = Symbol.for("react.lazy"),
  sa = Symbol.iterator;
function Md(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sa && e[sa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Us = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  As = Object.assign,
  $s = {};
function Vn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $s),
    (this.updater = n || Us);
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bs() {}
Bs.prototype = Vn.prototype;
function ou(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $s),
    (this.updater = n || Us);
}
var iu = (ou.prototype = new Bs());
iu.constructor = ou;
As(iu, Vn.prototype);
iu.isPureReactComponent = !0;
var ca = Array.isArray,
  Ws = Object.prototype.hasOwnProperty,
  uu = { current: null },
  Hs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ws.call(t, r) && !Hs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Vr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: uu.current,
  };
}
function Td(e, t) {
  return {
    $$typeof: Vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function zd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fa = /\/+/g;
function Oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zd("" + e.key)
    : t.toString(36);
}
function kl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vr:
          case kd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Oo(i, 0) : r),
      ca(l)
        ? ((n = ""),
          e != null && (n = e.replace(fa, "$&/") + "/"),
          kl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (au(l) &&
            (l = Td(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(fa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ca(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Oo(o, u);
      i += kl(o, t, n, a, l);
    }
  else if (((a = Md(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Oo(o, u++)), (i += kl(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function ll(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Od(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null },
  El = { transition: null },
  Fd = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: El,
    ReactCurrentOwner: uu,
  };
B.Children = {
  map: ll,
  forEach: function (e, t, n) {
    ll(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ll(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ll(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!au(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Vn;
B.Fragment = Ed;
B.Profiler = Cd;
B.PureComponent = ou;
B.StrictMode = xd;
B.Suspense = Nd;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fd;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = As({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = uu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Ws.call(t, a) &&
        !Hs.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Vr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: _d,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pd, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Vs;
B.createFactory = function (e) {
  var t = Vs.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Rd, render: e };
};
B.isValidElement = au;
B.lazy = function (e) {
  return { $$typeof: Dd, _payload: { _status: -1, _result: e }, _init: Od };
};
B.memo = function (e, t) {
  return { $$typeof: Ld, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = El.transition;
  El.transition = {};
  try {
    e();
  } finally {
    El.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return Re.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Re.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Re.current.useEffect(e, t);
};
B.useId = function () {
  return Re.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Re.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Re.current.useRef(e);
};
B.useState = function (e) {
  return Re.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Re.current.useTransition();
};
B.version = "18.2.0";
(function (e) {
  e.exports = B;
})(Sd);
const Qs = yd(R),
  si = gd({ __proto__: null, default: Qs }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = R,
  Id = Symbol.for("react.element"),
  Ud = Symbol.for("react.fragment"),
  Ad = Object.prototype.hasOwnProperty,
  $d = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ks(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ad.call(t, r) && !Bd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Id,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: $d.current,
  };
}
io.Fragment = Ud;
io.jsx = Ks;
io.jsxs = Ks;
(function (e) {
  e.exports = io;
})(wd);
const Wd = xr.Fragment,
  Q = xr.jsx,
  Ot = xr.jsxs;
var ci = {},
  fi = {},
  Hd = {
    get exports() {
      return fi;
    },
    set exports(e) {
      fi = e;
    },
  },
  Ue = {},
  di = {},
  Vd = {
    get exports() {
      return di;
    },
    set exports(e) {
      di = e;
    },
  },
  Ys = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, j) {
    var $ = _.length;
    _.push(j);
    e: for (; 0 < $; ) {
      var Y = ($ - 1) >>> 1,
        ae = _[Y];
      if (0 < l(ae, j)) (_[Y] = j), (_[$] = ae), ($ = Y);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var j = _[0],
      $ = _.pop();
    if ($ !== j) {
      _[0] = $;
      e: for (var Y = 0, ae = _.length, pn = ae >>> 1; Y < pn; ) {
        var nt = 2 * (Y + 1) - 1,
          Xn = _[nt],
          ft = nt + 1,
          hn = _[ft];
        if (0 > l(Xn, $))
          ft < ae && 0 > l(hn, Xn)
            ? ((_[Y] = hn), (_[ft] = $), (Y = ft))
            : ((_[Y] = Xn), (_[nt] = $), (Y = nt));
        else if (ft < ae && 0 > l(hn, $)) (_[Y] = hn), (_[ft] = $), (Y = ft);
        else break e;
      }
    }
    return j;
  }
  function l(_, j) {
    var $ = _.sortIndex - j.sortIndex;
    return $ !== 0 ? $ : _.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    c = [],
    h = 1,
    m = null,
    s = 3,
    y = !1,
    k = !1,
    w = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= _)
        r(c), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(c);
    }
  }
  function v(_) {
    if (((w = !1), p(_), !k))
      if (n(a) !== null) (k = !0), Yn(C);
      else {
        var j = n(c);
        j !== null && ue(v, j.startTime - _);
      }
  }
  function C(_, j) {
    (k = !1), w && ((w = !1), d(T), (T = -1)), (y = !0);
    var $ = s;
    try {
      for (
        p(j), m = n(a);
        m !== null && (!(m.expirationTime > j) || (_ && !re()));

      ) {
        var Y = m.callback;
        if (typeof Y == "function") {
          (m.callback = null), (s = m.priorityLevel);
          var ae = Y(m.expirationTime <= j);
          (j = e.unstable_now()),
            typeof ae == "function" ? (m.callback = ae) : m === n(a) && r(a),
            p(j);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var pn = !0;
      else {
        var nt = n(c);
        nt !== null && ue(v, nt.startTime - j), (pn = !1);
      }
      return pn;
    } finally {
      (m = null), (s = $), (y = !1);
    }
  }
  var N = !1,
    D = null,
    T = -1,
    G = 5,
    I = -1;
  function re() {
    return !(e.unstable_now() - I < G);
  }
  function Ke() {
    if (D !== null) {
      var _ = e.unstable_now();
      I = _;
      var j = !0;
      try {
        j = D(!0, _);
      } finally {
        j ? ct() : ((N = !1), (D = null));
      }
    } else N = !1;
  }
  var ct;
  if (typeof f == "function")
    ct = function () {
      f(Ke);
    };
  else if (typeof MessageChannel < "u") {
    var qr = new MessageChannel(),
      _o = qr.port2;
    (qr.port1.onmessage = Ke),
      (ct = function () {
        _o.postMessage(null);
      });
  } else
    ct = function () {
      P(Ke, 0);
    };
  function Yn(_) {
    (D = _), N || ((N = !0), ct());
  }
  function ue(_, j) {
    T = P(function () {
      _(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || y || ((k = !0), Yn(C));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (G = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return s;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (_) {
      switch (s) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = s;
      }
      var $ = s;
      s = j;
      try {
        return _();
      } finally {
        s = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, j) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var $ = s;
      s = _;
      try {
        return j();
      } finally {
        s = $;
      }
    }),
    (e.unstable_scheduleCallback = function (_, j, $) {
      var Y = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? Y + $ : Y))
          : ($ = Y),
        _)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = $ + ae),
        (_ = {
          id: h++,
          callback: j,
          priorityLevel: _,
          startTime: $,
          expirationTime: ae,
          sortIndex: -1,
        }),
        $ > Y
          ? ((_.sortIndex = $),
            t(c, _),
            n(a) === null &&
              _ === n(c) &&
              (w ? (d(T), (T = -1)) : (w = !0), ue(v, $ - Y)))
          : ((_.sortIndex = ae), t(a, _), k || y || ((k = !0), Yn(C))),
        _
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (_) {
      var j = s;
      return function () {
        var $ = s;
        s = j;
        try {
          return _.apply(this, arguments);
        } finally {
          s = $;
        }
      };
    });
})(Ys);
(function (e) {
  e.exports = Ys;
})(Vd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xs = R,
  Ie = di;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gs = new Set(),
  Cr = {};
function cn(e, t) {
  In(e, t), In(e + "Capture", t);
}
function In(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) Gs.add(t[e]);
}
var St = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pi = Object.prototype.hasOwnProperty,
  Qd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  da = {},
  pa = {};
function Kd(e) {
  return pi.call(pa, e)
    ? !0
    : pi.call(da, e)
    ? !1
    : Qd.test(e)
    ? (pa[e] = !0)
    : ((da[e] = !0), !1);
}
function Yd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Xd(e, t, n, r) {
  if (t === null || typeof t > "u" || Yd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ye[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ye[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ye[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ye[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ye[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ye[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ye[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var su = /[\-:]([a-z])/g;
function cu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(su, cu);
    ye[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(su, cu);
    ye[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(su, cu);
  ye[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ye[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ye[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fu(e, t, n, r) {
  var l = ye.hasOwnProperty(t) ? ye[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xd(t, n, l, r) && (n = null),
    r || l === null
      ? Kd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = Xs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ol = Symbol.for("react.element"),
  gn = Symbol.for("react.portal"),
  yn = Symbol.for("react.fragment"),
  du = Symbol.for("react.strict_mode"),
  hi = Symbol.for("react.profiler"),
  Zs = Symbol.for("react.provider"),
  Js = Symbol.for("react.context"),
  pu = Symbol.for("react.forward_ref"),
  mi = Symbol.for("react.suspense"),
  vi = Symbol.for("react.suspense_list"),
  hu = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  qs = Symbol.for("react.offscreen"),
  ha = Symbol.iterator;
function qn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ha && e[ha]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Fo;
function ar(e) {
  if (Fo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fo = (t && t[1]) || "";
    }
  return (
    `
` +
    Fo +
    e
  );
}
var jo = !1;
function Io(e, t) {
  if (!e || jo) return "";
  jo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (jo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function Gd(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Io(e.type, !1)), e;
    case 11:
      return (e = Io(e.type.render, !1)), e;
    case 1:
      return (e = Io(e.type, !0)), e;
    default:
      return "";
  }
}
function gi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yn:
      return "Fragment";
    case gn:
      return "Portal";
    case hi:
      return "Profiler";
    case du:
      return "StrictMode";
    case mi:
      return "Suspense";
    case vi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Js:
        return (e.displayName || "Context") + ".Consumer";
      case Zs:
        return (e._context.displayName || "Context") + ".Provider";
      case pu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case hu:
        return (
          (t = e.displayName || null), t !== null ? t : gi(e.type) || "Memo"
        );
      case Nt:
        (t = e._payload), (e = e._init);
        try {
          return gi(e(t));
        } catch {}
    }
  return null;
}
function Zd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gi(t);
    case 8:
      return t === du ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function bs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jd(e) {
  var t = bs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function il(e) {
  e._valueTracker || (e._valueTracker = Jd(e));
}
function ec(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = bs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function zl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yi(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function tc(e, t) {
  (t = t.checked), t != null && fu(e, "checked", t, !1);
}
function wi(e, t) {
  tc(e, t);
  var n = Ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Si(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Si(e, t.type, Ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function va(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Si(e, t, n) {
  (t !== "number" || zl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var sr = Array.isArray;
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ki(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ga(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (sr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function nc(e, t) {
  var n = Ht(t.value),
    r = Ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ya(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? rc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ul,
  lc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ul = ul || document.createElement("div"),
          ul.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ul.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qd = ["Webkit", "ms", "Moz", "O"];
Object.keys(pr).forEach(function (e) {
  qd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pr[t] = pr[e]);
  });
});
function oc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pr.hasOwnProperty(e) && pr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ic(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = oc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var bd = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xi(e, t) {
  if (t) {
    if (bd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Ci(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pi = null;
function mu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _i = null,
  Mn = null,
  Tn = null;
function wa(e) {
  if ((e = Yr(e))) {
    if (typeof _i != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = fo(t)), _i(e.stateNode, e.type, t));
  }
}
function uc(e) {
  Mn ? (Tn ? Tn.push(e) : (Tn = [e])) : (Mn = e);
}
function ac() {
  if (Mn) {
    var e = Mn,
      t = Tn;
    if (((Tn = Mn = null), wa(e), t)) for (e = 0; e < t.length; e++) wa(t[e]);
  }
}
function sc(e, t) {
  return e(t);
}
function cc() {}
var Uo = !1;
function fc(e, t, n) {
  if (Uo) return e(t, n);
  Uo = !0;
  try {
    return sc(e, t, n);
  } finally {
    (Uo = !1), (Mn !== null || Tn !== null) && (cc(), ac());
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Ri = !1;
if (St)
  try {
    var bn = {};
    Object.defineProperty(bn, "passive", {
      get: function () {
        Ri = !0;
      },
    }),
      window.addEventListener("test", bn, bn),
      window.removeEventListener("test", bn, bn);
  } catch {
    Ri = !1;
  }
function ep(e, t, n, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var hr = !1,
  Ol = null,
  Fl = !1,
  Ni = null,
  tp = {
    onError: function (e) {
      (hr = !0), (Ol = e);
    },
  };
function np(e, t, n, r, l, o, i, u, a) {
  (hr = !1), (Ol = null), ep.apply(tp, arguments);
}
function rp(e, t, n, r, l, o, i, u, a) {
  if ((np.apply(this, arguments), hr)) {
    if (hr) {
      var c = Ol;
      (hr = !1), (Ol = null);
    } else throw Error(x(198));
    Fl || ((Fl = !0), (Ni = c));
  }
}
function fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Sa(e) {
  if (fn(e) !== e) throw Error(x(188));
}
function lp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = fn(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Sa(l), e;
        if (o === r) return Sa(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function pc(e) {
  return (e = lp(e)), e !== null ? hc(e) : null;
}
function hc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var mc = Ie.unstable_scheduleCallback,
  ka = Ie.unstable_cancelCallback,
  op = Ie.unstable_shouldYield,
  ip = Ie.unstable_requestPaint,
  ie = Ie.unstable_now,
  up = Ie.unstable_getCurrentPriorityLevel,
  vu = Ie.unstable_ImmediatePriority,
  vc = Ie.unstable_UserBlockingPriority,
  jl = Ie.unstable_NormalPriority,
  ap = Ie.unstable_LowPriority,
  gc = Ie.unstable_IdlePriority,
  uo = null,
  ut = null;
function sp(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(uo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var be = Math.clz32 ? Math.clz32 : dp,
  cp = Math.log,
  fp = Math.LN2;
function dp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cp(e) / fp) | 0)) | 0;
}
var al = 64,
  sl = 4194304;
function cr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Il(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = cr(u)) : ((o &= i), o !== 0 && (r = cr(o)));
  } else (i = n & ~l), i !== 0 ? (r = cr(i)) : o !== 0 && (r = cr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function pp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function hp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - be(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = pp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Li(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yc() {
  var e = al;
  return (al <<= 1), !(al & 4194240) && (al = 64), e;
}
function Ao(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - be(t)),
    (e[t] = n);
}
function mp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - be(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function gu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var X = 0;
function wc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sc,
  yu,
  kc,
  Ec,
  xc,
  Di = !1,
  cl = [],
  Ft = null,
  jt = null,
  It = null,
  Rr = new Map(),
  Nr = new Map(),
  Dt = [],
  vp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ea(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ft = null;
      break;
    case "dragenter":
    case "dragleave":
      jt = null;
      break;
    case "mouseover":
    case "mouseout":
      It = null;
      break;
    case "pointerover":
    case "pointerout":
      Rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Nr.delete(t.pointerId);
  }
}
function er(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Yr(t)), t !== null && yu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function gp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Ft = er(Ft, e, t, n, r, l)), !0;
    case "dragenter":
      return (jt = er(jt, e, t, n, r, l)), !0;
    case "mouseover":
      return (It = er(It, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Rr.set(o, er(Rr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Nr.set(o, er(Nr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Cc(e) {
  var t = qt(e.target);
  if (t !== null) {
    var n = fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dc(n)), t !== null)) {
          (e.blockedOn = t),
            xc(e.priority, function () {
              kc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pi = r), n.target.dispatchEvent(r), (Pi = null);
    } else return (t = Yr(n)), t !== null && yu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xa(e, t, n) {
  xl(e) && n.delete(t);
}
function yp() {
  (Di = !1),
    Ft !== null && xl(Ft) && (Ft = null),
    jt !== null && xl(jt) && (jt = null),
    It !== null && xl(It) && (It = null),
    Rr.forEach(xa),
    Nr.forEach(xa);
}
function tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Di ||
      ((Di = !0),
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, yp)));
}
function Lr(e) {
  function t(l) {
    return tr(l, e);
  }
  if (0 < cl.length) {
    tr(cl[0], e);
    for (var n = 1; n < cl.length; n++) {
      var r = cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ft !== null && tr(Ft, e),
      jt !== null && tr(jt, e),
      It !== null && tr(It, e),
      Rr.forEach(t),
      Nr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    Cc(n), n.blockedOn === null && Dt.shift();
}
var zn = Ct.ReactCurrentBatchConfig,
  Ul = !0;
function wp(e, t, n, r) {
  var l = X,
    o = zn.transition;
  zn.transition = null;
  try {
    (X = 1), wu(e, t, n, r);
  } finally {
    (X = l), (zn.transition = o);
  }
}
function Sp(e, t, n, r) {
  var l = X,
    o = zn.transition;
  zn.transition = null;
  try {
    (X = 4), wu(e, t, n, r);
  } finally {
    (X = l), (zn.transition = o);
  }
}
function wu(e, t, n, r) {
  if (Ul) {
    var l = Mi(e, t, n, r);
    if (l === null) Go(e, t, r, Al, n), Ea(e, r);
    else if (gp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ea(e, r), t & 4 && -1 < vp.indexOf(e))) {
      for (; l !== null; ) {
        var o = Yr(l);
        if (
          (o !== null && Sc(o),
          (o = Mi(e, t, n, r)),
          o === null && Go(e, t, r, Al, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Go(e, t, r, null, n);
  }
}
var Al = null;
function Mi(e, t, n, r) {
  if (((Al = null), (e = mu(r)), (e = qt(e)), e !== null))
    if (((t = fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Al = e), null;
}
function Pc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (up()) {
        case vu:
          return 1;
        case vc:
          return 4;
        case jl:
        case ap:
          return 16;
        case gc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  Su = null,
  Cl = null;
function _c() {
  if (Cl) return Cl;
  var e,
    t = Su,
    n = t.length,
    r,
    l = "value" in Tt ? Tt.value : Tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Cl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Pl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fl() {
  return !0;
}
function Ca() {
  return !1;
}
function Ae(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fl
        : Ca),
      (this.isPropagationStopped = Ca),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fl));
      },
      persist: function () {},
      isPersistent: fl,
    }),
    t
  );
}
var Qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ku = Ae(Qn),
  Kr = ne({}, Qn, { view: 0, detail: 0 }),
  kp = Ae(Kr),
  $o,
  Bo,
  nr,
  ao = ne({}, Kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Eu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== nr &&
            (nr && e.type === "mousemove"
              ? (($o = e.screenX - nr.screenX), (Bo = e.screenY - nr.screenY))
              : (Bo = $o = 0),
            (nr = e)),
          $o);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bo;
    },
  }),
  Pa = Ae(ao),
  Ep = ne({}, ao, { dataTransfer: 0 }),
  xp = Ae(Ep),
  Cp = ne({}, Kr, { relatedTarget: 0 }),
  Wo = Ae(Cp),
  Pp = ne({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _p = Ae(Pp),
  Rp = ne({}, Qn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Np = Ae(Rp),
  Lp = ne({}, Qn, { data: 0 }),
  _a = Ae(Lp),
  Dp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Mp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Tp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tp[e]) ? !!t[e] : !1;
}
function Eu() {
  return zp;
}
var Op = ne({}, Kr, {
    key: function (e) {
      if (e.key) {
        var t = Dp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Pl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Mp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Eu,
    charCode: function (e) {
      return e.type === "keypress" ? Pl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Pl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Fp = Ae(Op),
  jp = ne({}, ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ra = Ae(jp),
  Ip = ne({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Eu,
  }),
  Up = Ae(Ip),
  Ap = ne({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $p = Ae(Ap),
  Bp = ne({}, ao, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Wp = Ae(Bp),
  Hp = [9, 13, 27, 32],
  xu = St && "CompositionEvent" in window,
  mr = null;
St && "documentMode" in document && (mr = document.documentMode);
var Vp = St && "TextEvent" in window && !mr,
  Rc = St && (!xu || (mr && 8 < mr && 11 >= mr)),
  Na = String.fromCharCode(32),
  La = !1;
function Nc(e, t) {
  switch (e) {
    case "keyup":
      return Hp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Lc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wn = !1;
function Qp(e, t) {
  switch (e) {
    case "compositionend":
      return Lc(t);
    case "keypress":
      return t.which !== 32 ? null : ((La = !0), Na);
    case "textInput":
      return (e = t.data), e === Na && La ? null : e;
    default:
      return null;
  }
}
function Kp(e, t) {
  if (wn)
    return e === "compositionend" || (!xu && Nc(e, t))
      ? ((e = _c()), (Cl = Su = Tt = null), (wn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Da(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yp[e.type] : t === "textarea";
}
function Dc(e, t, n, r) {
  uc(r),
    (t = $l(t, "onChange")),
    0 < t.length &&
      ((n = new ku("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var vr = null,
  Dr = null;
function Xp(e) {
  Bc(e, 0);
}
function so(e) {
  var t = En(e);
  if (ec(t)) return e;
}
function Gp(e, t) {
  if (e === "change") return t;
}
var Mc = !1;
if (St) {
  var Ho;
  if (St) {
    var Vo = "oninput" in document;
    if (!Vo) {
      var Ma = document.createElement("div");
      Ma.setAttribute("oninput", "return;"),
        (Vo = typeof Ma.oninput == "function");
    }
    Ho = Vo;
  } else Ho = !1;
  Mc = Ho && (!document.documentMode || 9 < document.documentMode);
}
function Ta() {
  vr && (vr.detachEvent("onpropertychange", Tc), (Dr = vr = null));
}
function Tc(e) {
  if (e.propertyName === "value" && so(Dr)) {
    var t = [];
    Dc(t, Dr, e, mu(e)), fc(Xp, t);
  }
}
function Zp(e, t, n) {
  e === "focusin"
    ? (Ta(), (vr = t), (Dr = n), vr.attachEvent("onpropertychange", Tc))
    : e === "focusout" && Ta();
}
function Jp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return so(Dr);
}
function qp(e, t) {
  if (e === "click") return so(t);
}
function bp(e, t) {
  if (e === "input" || e === "change") return so(t);
}
function eh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tt = typeof Object.is == "function" ? Object.is : eh;
function Mr(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!pi.call(t, l) || !tt(e[l], t[l])) return !1;
  }
  return !0;
}
function za(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Oa(e, t) {
  var n = za(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = za(n);
  }
}
function zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Oc() {
  for (var e = window, t = zl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zl(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function th(e) {
  var t = Oc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Cu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Oa(n, o));
        var i = Oa(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var nh = St && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  Ti = null,
  gr = null,
  zi = !1;
function Fa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zi ||
    Sn == null ||
    Sn !== zl(r) ||
    ((r = Sn),
    "selectionStart" in r && Cu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (gr && Mr(gr, r)) ||
      ((gr = r),
      (r = $l(Ti, "onSelect")),
      0 < r.length &&
        ((t = new ku("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sn))));
}
function dl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: dl("Animation", "AnimationEnd"),
    animationiteration: dl("Animation", "AnimationIteration"),
    animationstart: dl("Animation", "AnimationStart"),
    transitionend: dl("Transition", "TransitionEnd"),
  },
  Qo = {},
  Fc = {};
St &&
  ((Fc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function co(e) {
  if (Qo[e]) return Qo[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fc) return (Qo[e] = t[n]);
  return e;
}
var jc = co("animationend"),
  Ic = co("animationiteration"),
  Uc = co("animationstart"),
  Ac = co("transitionend"),
  $c = new Map(),
  ja =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qt(e, t) {
  $c.set(e, t), cn(t, [e]);
}
for (var Ko = 0; Ko < ja.length; Ko++) {
  var Yo = ja[Ko],
    rh = Yo.toLowerCase(),
    lh = Yo[0].toUpperCase() + Yo.slice(1);
  Qt(rh, "on" + lh);
}
Qt(jc, "onAnimationEnd");
Qt(Ic, "onAnimationIteration");
Qt(Uc, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(Ac, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var fr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  oh = new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));
function Ia(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), rp(r, t, void 0, e), (e.currentTarget = null);
}
function Bc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Ia(l, u, c), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Ia(l, u, c), (o = a);
        }
    }
  }
  if (Fl) throw ((e = Ni), (Fl = !1), (Ni = null), e);
}
function J(e, t) {
  var n = t[Ui];
  n === void 0 && (n = t[Ui] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wc(t, e, 2, !1), n.add(r));
}
function Xo(e, t, n) {
  var r = 0;
  t && (r |= 4), Wc(n, e, r, t);
}
var pl = "_reactListening" + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[pl]) {
    (e[pl] = !0),
      Gs.forEach(function (n) {
        n !== "selectionchange" && (oh.has(n) || Xo(n, !1, e), Xo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pl] || ((t[pl] = !0), Xo("selectionchange", !1, t));
  }
}
function Wc(e, t, n, r) {
  switch (Pc(t)) {
    case 1:
      var l = wp;
      break;
    case 4:
      l = Sp;
      break;
    default:
      l = wu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ri ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Go(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = qt(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  fc(function () {
    var c = o,
      h = mu(n),
      m = [];
    e: {
      var s = $c.get(e);
      if (s !== void 0) {
        var y = ku,
          k = e;
        switch (e) {
          case "keypress":
            if (Pl(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Fp;
            break;
          case "focusin":
            (k = "focus"), (y = Wo);
            break;
          case "focusout":
            (k = "blur"), (y = Wo);
            break;
          case "beforeblur":
          case "afterblur":
            y = Wo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Pa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = xp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Up;
            break;
          case jc:
          case Ic:
          case Uc:
            y = _p;
            break;
          case Ac:
            y = $p;
            break;
          case "scroll":
            y = kp;
            break;
          case "wheel":
            y = Wp;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Np;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ra;
        }
        var w = (t & 4) !== 0,
          P = !w && e === "scroll",
          d = w ? (s !== null ? s + "Capture" : null) : s;
        w = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              d !== null && ((v = _r(f, d)), v != null && w.push(zr(f, v, p)))),
            P)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((s = new y(s, k, null, n, h)), m.push({ event: s, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((s = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          s &&
            n !== Pi &&
            (k = n.relatedTarget || n.fromElement) &&
            (qt(k) || k[kt]))
        )
          break e;
        if (
          (y || s) &&
          ((s =
            h.window === h
              ? h
              : (s = h.ownerDocument)
              ? s.defaultView || s.parentWindow
              : window),
          y
            ? ((k = n.relatedTarget || n.toElement),
              (y = c),
              (k = k ? qt(k) : null),
              k !== null &&
                ((P = fn(k)), k !== P || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((y = null), (k = c)),
          y !== k)
        ) {
          if (
            ((w = Pa),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Ra),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (P = y == null ? s : En(y)),
            (p = k == null ? s : En(k)),
            (s = new w(v, f + "leave", y, n, h)),
            (s.target = P),
            (s.relatedTarget = p),
            (v = null),
            qt(h) === c &&
              ((w = new w(d, f + "enter", k, n, h)),
              (w.target = p),
              (w.relatedTarget = P),
              (v = w)),
            (P = v),
            y && k)
          )
            t: {
              for (w = y, d = k, f = 0, p = w; p; p = vn(p)) f++;
              for (p = 0, v = d; v; v = vn(v)) p++;
              for (; 0 < f - p; ) (w = vn(w)), f--;
              for (; 0 < p - f; ) (d = vn(d)), p--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = vn(w)), (d = vn(d));
              }
              w = null;
            }
          else w = null;
          y !== null && Ua(m, s, y, w, !1),
            k !== null && P !== null && Ua(m, P, k, w, !0);
        }
      }
      e: {
        if (
          ((s = c ? En(c) : window),
          (y = s.nodeName && s.nodeName.toLowerCase()),
          y === "select" || (y === "input" && s.type === "file"))
        )
          var C = Gp;
        else if (Da(s))
          if (Mc) C = bp;
          else {
            C = Jp;
            var N = Zp;
          }
        else
          (y = s.nodeName) &&
            y.toLowerCase() === "input" &&
            (s.type === "checkbox" || s.type === "radio") &&
            (C = qp);
        if (C && (C = C(e, c))) {
          Dc(m, C, n, h);
          break e;
        }
        N && N(e, s, c),
          e === "focusout" &&
            (N = s._wrapperState) &&
            N.controlled &&
            s.type === "number" &&
            Si(s, "number", s.value);
      }
      switch (((N = c ? En(c) : window), e)) {
        case "focusin":
          (Da(N) || N.contentEditable === "true") &&
            ((Sn = N), (Ti = c), (gr = null));
          break;
        case "focusout":
          gr = Ti = Sn = null;
          break;
        case "mousedown":
          zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zi = !1), Fa(m, n, h);
          break;
        case "selectionchange":
          if (nh) break;
        case "keydown":
        case "keyup":
          Fa(m, n, h);
      }
      var D;
      if (xu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        wn
          ? Nc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Rc &&
          n.locale !== "ko" &&
          (wn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && wn && (D = _c())
            : ((Tt = h),
              (Su = "value" in Tt ? Tt.value : Tt.textContent),
              (wn = !0))),
        (N = $l(c, T)),
        0 < N.length &&
          ((T = new _a(T, e, null, n, h)),
          m.push({ event: T, listeners: N }),
          D ? (T.data = D) : ((D = Lc(n)), D !== null && (T.data = D)))),
        (D = Vp ? Qp(e, n) : Kp(e, n)) &&
          ((c = $l(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new _a("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = D)));
    }
    Bc(m, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $l(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = _r(e, n)),
      o != null && r.unshift(zr(e, o, l)),
      (o = _r(e, t)),
      o != null && r.push(zr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ua(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((a = _r(n, o)), a != null && i.unshift(zr(n, a, u)))
        : l || ((a = _r(n, o)), a != null && i.push(zr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ih = /\r\n?/g,
  uh = /\u0000|\uFFFD/g;
function Aa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ih,
      `
`
    )
    .replace(uh, "");
}
function hl(e, t, n) {
  if (((t = Aa(t)), Aa(e) !== t && n)) throw Error(x(425));
}
function Bl() {}
var Oi = null,
  Fi = null;
function ji(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ii = typeof setTimeout == "function" ? setTimeout : void 0,
  ah = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $a = typeof Promise == "function" ? Promise : void 0,
  sh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $a < "u"
      ? function (e) {
          return $a.resolve(null).then(e).catch(ch);
        }
      : Ii;
function ch(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Lr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Lr(t);
}
function Ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ba(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kn = Math.random().toString(36).slice(2),
  it = "__reactFiber$" + Kn,
  Or = "__reactProps$" + Kn,
  kt = "__reactContainer$" + Kn,
  Ui = "__reactEvents$" + Kn,
  fh = "__reactListeners$" + Kn,
  dh = "__reactHandles$" + Kn;
function qt(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[kt] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ba(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = Ba(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[it] || e[kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function fo(e) {
  return e[Or] || null;
}
var Ai = [],
  xn = -1;
function Kt(e) {
  return { current: e };
}
function q(e) {
  0 > xn || ((e.current = Ai[xn]), (Ai[xn] = null), xn--);
}
function Z(e, t) {
  xn++, (Ai[xn] = e.current), (e.current = t);
}
var Vt = {},
  xe = Kt(Vt),
  Me = Kt(!1),
  ln = Vt;
function Un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Wl() {
  q(Me), q(xe);
}
function Wa(e, t, n) {
  if (xe.current !== Vt) throw Error(x(168));
  Z(xe, t), Z(Me, n);
}
function Hc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Zd(e) || "Unknown", l));
  return ne({}, n, r);
}
function Hl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (ln = xe.current),
    Z(xe, e),
    Z(Me, Me.current),
    !0
  );
}
function Ha(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Hc(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Me),
      q(xe),
      Z(xe, e))
    : q(Me),
    Z(Me, n);
}
var mt = null,
  po = !1,
  Jo = !1;
function Vc(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
function ph(e) {
  (po = !0), Vc(e);
}
function Yt() {
  if (!Jo && mt !== null) {
    Jo = !0;
    var e = 0,
      t = X;
    try {
      var n = mt;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (mt = null), (po = !1);
    } catch (l) {
      throw (mt !== null && (mt = mt.slice(e + 1)), mc(vu, Yt), l);
    } finally {
      (X = t), (Jo = !1);
    }
  }
  return null;
}
var Cn = [],
  Pn = 0,
  Vl = null,
  Ql = 0,
  $e = [],
  Be = 0,
  on = null,
  vt = 1,
  gt = "";
function Gt(e, t) {
  (Cn[Pn++] = Ql), (Cn[Pn++] = Vl), (Vl = e), (Ql = t);
}
function Qc(e, t, n) {
  ($e[Be++] = vt), ($e[Be++] = gt), ($e[Be++] = on), (on = e);
  var r = vt;
  e = gt;
  var l = 32 - be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - be(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (vt = (1 << (32 - be(t) + l)) | (n << l) | r),
      (gt = o + e);
  } else (vt = (1 << o) | (n << l) | r), (gt = e);
}
function Pu(e) {
  e.return !== null && (Gt(e, 1), Qc(e, 1, 0));
}
function _u(e) {
  for (; e === Vl; )
    (Vl = Cn[--Pn]), (Cn[Pn] = null), (Ql = Cn[--Pn]), (Cn[Pn] = null);
  for (; e === on; )
    (on = $e[--Be]),
      ($e[Be] = null),
      (gt = $e[--Be]),
      ($e[Be] = null),
      (vt = $e[--Be]),
      ($e[Be] = null);
}
var je = null,
  Fe = null,
  b = !1,
  qe = null;
function Kc(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Va(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Fe = Ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = on !== null ? { id: vt, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bi(e) {
  if (b) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!Va(e, t)) {
        if ($i(e)) throw Error(x(418));
        t = Ut(n.nextSibling);
        var r = je;
        t && Va(e, t)
          ? Kc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (je = e));
      }
    } else {
      if ($i(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (b = !1), (je = e);
    }
  }
}
function Qa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function ml(e) {
  if (e !== je) return !1;
  if (!b) return Qa(e), (b = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ji(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if ($i(e)) throw (Yc(), Error(x(418)));
    for (; t; ) Kc(e, t), (t = Ut(t.nextSibling));
  }
  if ((Qa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = je ? Ut(e.stateNode.nextSibling) : null;
  return !0;
}
function Yc() {
  for (var e = Fe; e; ) e = Ut(e.nextSibling);
}
function An() {
  (Fe = je = null), (b = !1);
}
function Ru(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var hh = Ct.ReactCurrentBatchConfig;
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Kl = Kt(null),
  Yl = null,
  _n = null,
  Nu = null;
function Lu() {
  Nu = _n = Yl = null;
}
function Du(e) {
  var t = Kl.current;
  q(Kl), (e._currentValue = t);
}
function Wi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function On(e, t) {
  (Yl = e),
    (Nu = _n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function Ve(e) {
  var t = e._currentValue;
  if (Nu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
      if (Yl === null) throw Error(x(308));
      (_n = e), (Yl.dependencies = { lanes: 0, firstContext: e });
    } else _n = _n.next = e;
  return t;
}
var bt = null;
function Mu(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
function Xc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Mu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Et(e, r)
  );
}
function Et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Tu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Et(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Mu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Et(e, n)
  );
}
function _l(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n);
  }
}
function Ka(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Xl(e, t, n, r) {
  var l = e.updateQueue;
  Lt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      c = a.next;
    (a.next = null), i === null ? (o = c) : (i.next = c), (i = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = a = null), (u = o);
    do {
      var s = u.lane,
        y = u.eventTime;
      if ((r & s) === s) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            w = u;
          switch (((s = t), (y = n), w.tag)) {
            case 1:
              if (((k = w.payload), typeof k == "function")) {
                m = k.call(y, m, s);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = w.payload),
                (s = typeof k == "function" ? k.call(y, m, s) : k),
                s == null)
              )
                break e;
              m = ne({}, m, s);
              break e;
            case 2:
              Lt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (s = l.effects),
          s === null ? (l.effects = [u]) : s.push(u));
      } else
        (y = {
          eventTime: y,
          lane: s,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = y), (a = m)) : (h = h.next = y),
          (i |= s);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (s = u),
          (u = s.next),
          (s.next = null),
          (l.lastBaseUpdate = s),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = m),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (an |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Ya(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Zc = new Xs.Component().refs;
function Hi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ho = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      l = Bt(e),
      o = yt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = At(e, o, l)),
      t !== null && (et(t, e, l, r), _l(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      l = Bt(e),
      o = yt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = At(e, o, l)),
      t !== null && (et(t, e, l, r), _l(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = _e(),
      r = Bt(e),
      l = yt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = At(e, l, r)),
      t !== null && (et(t, e, r, n), _l(t, e, r));
  },
};
function Xa(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Mr(n, r) || !Mr(l, o)
      : !0
  );
}
function Jc(e, t, n) {
  var r = !1,
    l = Vt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ve(o))
      : ((l = Te(t) ? ln : xe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Un(e, l) : Vt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ho),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ga(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ho.enqueueReplaceState(t, t.state, null);
}
function Vi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Zc), Tu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ve(o))
    : ((o = Te(t) ? ln : xe.current), (l.context = Un(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Hi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ho.enqueueReplaceState(l, l.state, null),
      Xl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Zc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function vl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Za(e) {
  var t = e._init;
  return t(e._payload);
}
function qc(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [f]), (d.flags |= 16)) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = Wt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((d.flags |= 2), f) : p)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, p, v) {
    return f === null || f.tag !== 6
      ? ((f = li(p, d.mode, v)), (f.return = d), f)
      : ((f = l(f, p)), (f.return = d), f);
  }
  function a(d, f, p, v) {
    var C = p.type;
    return C === yn
      ? h(d, f, p.props.children, v, p.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Nt &&
            Za(C) === f.type))
      ? ((v = l(f, p.props)), (v.ref = rr(d, f, p)), (v.return = d), v)
      : ((v = Tl(p.type, p.key, p.props, null, d.mode, v)),
        (v.ref = rr(d, f, p)),
        (v.return = d),
        v);
  }
  function c(d, f, p, v) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = oi(p, d.mode, v)), (f.return = d), f)
      : ((f = l(f, p.children || [])), (f.return = d), f);
  }
  function h(d, f, p, v, C) {
    return f === null || f.tag !== 7
      ? ((f = rn(p, d.mode, v, C)), (f.return = d), f)
      : ((f = l(f, p)), (f.return = d), f);
  }
  function m(d, f, p) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = li("" + f, d.mode, p)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ol:
          return (
            (p = Tl(f.type, f.key, f.props, null, d.mode, p)),
            (p.ref = rr(d, null, f)),
            (p.return = d),
            p
          );
        case gn:
          return (f = oi(f, d.mode, p)), (f.return = d), f;
        case Nt:
          var v = f._init;
          return m(d, v(f._payload), p);
      }
      if (sr(f) || qn(f))
        return (f = rn(f, d.mode, p, null)), (f.return = d), f;
      vl(d, f);
    }
    return null;
  }
  function s(d, f, p, v) {
    var C = f !== null ? f.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : u(d, f, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ol:
          return p.key === C ? a(d, f, p, v) : null;
        case gn:
          return p.key === C ? c(d, f, p, v) : null;
        case Nt:
          return (C = p._init), s(d, f, C(p._payload), v);
      }
      if (sr(p) || qn(p)) return C !== null ? null : h(d, f, p, v, null);
      vl(d, p);
    }
    return null;
  }
  function y(d, f, p, v, C) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(p) || null), u(f, d, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ol:
          return (d = d.get(v.key === null ? p : v.key) || null), a(f, d, v, C);
        case gn:
          return (d = d.get(v.key === null ? p : v.key) || null), c(f, d, v, C);
        case Nt:
          var N = v._init;
          return y(d, f, p, N(v._payload), C);
      }
      if (sr(v) || qn(v)) return (d = d.get(p) || null), h(f, d, v, C, null);
      vl(f, v);
    }
    return null;
  }
  function k(d, f, p, v) {
    for (
      var C = null, N = null, D = f, T = (f = 0), G = null;
      D !== null && T < p.length;
      T++
    ) {
      D.index > T ? ((G = D), (D = null)) : (G = D.sibling);
      var I = s(d, D, p[T], v);
      if (I === null) {
        D === null && (D = G);
        break;
      }
      e && D && I.alternate === null && t(d, D),
        (f = o(I, f, T)),
        N === null ? (C = I) : (N.sibling = I),
        (N = I),
        (D = G);
    }
    if (T === p.length) return n(d, D), b && Gt(d, T), C;
    if (D === null) {
      for (; T < p.length; T++)
        (D = m(d, p[T], v)),
          D !== null &&
            ((f = o(D, f, T)), N === null ? (C = D) : (N.sibling = D), (N = D));
      return b && Gt(d, T), C;
    }
    for (D = r(d, D); T < p.length; T++)
      (G = y(D, d, T, p[T], v)),
        G !== null &&
          (e && G.alternate !== null && D.delete(G.key === null ? T : G.key),
          (f = o(G, f, T)),
          N === null ? (C = G) : (N.sibling = G),
          (N = G));
    return (
      e &&
        D.forEach(function (re) {
          return t(d, re);
        }),
      b && Gt(d, T),
      C
    );
  }
  function w(d, f, p, v) {
    var C = qn(p);
    if (typeof C != "function") throw Error(x(150));
    if (((p = C.call(p)), p == null)) throw Error(x(151));
    for (
      var N = (C = null), D = f, T = (f = 0), G = null, I = p.next();
      D !== null && !I.done;
      T++, I = p.next()
    ) {
      D.index > T ? ((G = D), (D = null)) : (G = D.sibling);
      var re = s(d, D, I.value, v);
      if (re === null) {
        D === null && (D = G);
        break;
      }
      e && D && re.alternate === null && t(d, D),
        (f = o(re, f, T)),
        N === null ? (C = re) : (N.sibling = re),
        (N = re),
        (D = G);
    }
    if (I.done) return n(d, D), b && Gt(d, T), C;
    if (D === null) {
      for (; !I.done; T++, I = p.next())
        (I = m(d, I.value, v)),
          I !== null &&
            ((f = o(I, f, T)), N === null ? (C = I) : (N.sibling = I), (N = I));
      return b && Gt(d, T), C;
    }
    for (D = r(d, D); !I.done; T++, I = p.next())
      (I = y(D, d, T, I.value, v)),
        I !== null &&
          (e && I.alternate !== null && D.delete(I.key === null ? T : I.key),
          (f = o(I, f, T)),
          N === null ? (C = I) : (N.sibling = I),
          (N = I));
    return (
      e &&
        D.forEach(function (Ke) {
          return t(d, Ke);
        }),
      b && Gt(d, T),
      C
    );
  }
  function P(d, f, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === yn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ol:
          e: {
            for (var C = p.key, N = f; N !== null; ) {
              if (N.key === C) {
                if (((C = p.type), C === yn)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (f = l(N, p.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Nt &&
                    Za(C) === N.type)
                ) {
                  n(d, N.sibling),
                    (f = l(N, p.props)),
                    (f.ref = rr(d, N, p)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            p.type === yn
              ? ((f = rn(p.props.children, d.mode, v, p.key)),
                (f.return = d),
                (d = f))
              : ((v = Tl(p.type, p.key, p.props, null, d.mode, v)),
                (v.ref = rr(d, f, p)),
                (v.return = d),
                (d = v));
          }
          return i(d);
        case gn:
          e: {
            for (N = p.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, p.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = oi(p, d.mode, v)), (f.return = d), (d = f);
          }
          return i(d);
        case Nt:
          return (N = p._init), P(d, f, N(p._payload), v);
      }
      if (sr(p)) return k(d, f, p, v);
      if (qn(p)) return w(d, f, p, v);
      vl(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, p)), (f.return = d), (d = f))
          : (n(d, f), (f = li(p, d.mode, v)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return P;
}
var $n = qc(!0),
  bc = qc(!1),
  Xr = {},
  at = Kt(Xr),
  Fr = Kt(Xr),
  jr = Kt(Xr);
function en(e) {
  if (e === Xr) throw Error(x(174));
  return e;
}
function zu(e, t) {
  switch ((Z(jr, t), Z(Fr, e), Z(at, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ei(t, e));
  }
  q(at), Z(at, t);
}
function Bn() {
  q(at), q(Fr), q(jr);
}
function ef(e) {
  en(jr.current);
  var t = en(at.current),
    n = Ei(t, e.type);
  t !== n && (Z(Fr, e), Z(at, n));
}
function Ou(e) {
  Fr.current === e && (q(at), q(Fr));
}
var ee = Kt(0);
function Gl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qo = [];
function Fu() {
  for (var e = 0; e < qo.length; e++)
    qo[e]._workInProgressVersionPrimary = null;
  qo.length = 0;
}
var Rl = Ct.ReactCurrentDispatcher,
  bo = Ct.ReactCurrentBatchConfig,
  un = 0,
  te = null,
  fe = null,
  pe = null,
  Zl = !1,
  yr = !1,
  Ir = 0,
  mh = 0;
function Se() {
  throw Error(x(321));
}
function ju(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!tt(e[n], t[n])) return !1;
  return !0;
}
function Iu(e, t, n, r, l, o) {
  if (
    ((un = o),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Rl.current = e === null || e.memoizedState === null ? wh : Sh),
    (e = n(r, l)),
    yr)
  ) {
    o = 0;
    do {
      if (((yr = !1), (Ir = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (pe = fe = null),
        (t.updateQueue = null),
        (Rl.current = kh),
        (e = n(r, l));
    } while (yr);
  }
  if (
    ((Rl.current = Jl),
    (t = fe !== null && fe.next !== null),
    (un = 0),
    (pe = fe = te = null),
    (Zl = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Uu() {
  var e = Ir !== 0;
  return (Ir = 0), e;
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (te.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function Qe() {
  if (fe === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = pe === null ? te.memoizedState : pe.next;
  if (t !== null) (pe = t), (fe = e);
  else {
    if (e === null) throw Error(x(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      pe === null ? (te.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ei(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = fe,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      c = o;
    do {
      var h = c.lane;
      if ((un & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((u = a = m), (i = r)) : (a = a.next = m),
          (te.lanes |= h),
          (an |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (i = r) : (a.next = u),
      tt(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (te.lanes |= o), (an |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    tt(o, t.memoizedState) || (De = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function tf() {}
function nf(e, t) {
  var n = te,
    r = Qe(),
    l = t(),
    o = !tt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (De = !0)),
    (r = r.queue),
    Au(of.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ar(9, lf.bind(null, n, r, l, t), void 0, null),
      he === null)
    )
      throw Error(x(349));
    un & 30 || rf(n, t, l);
  }
  return l;
}
function rf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function lf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), uf(t) && af(e);
}
function of(e, t, n) {
  return n(function () {
    uf(t) && af(e);
  });
}
function uf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function af(e) {
  var t = Et(e, 1);
  t !== null && et(t, e, 1, -1);
}
function Ja(e) {
  var t = ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yh.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sf() {
  return Qe().memoizedState;
}
function Nl(e, t, n, r) {
  var l = ot();
  (te.flags |= e),
    (l.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function mo(e, t, n, r) {
  var l = Qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var i = fe.memoizedState;
    if (((o = i.destroy), r !== null && ju(r, i.deps))) {
      l.memoizedState = Ar(t, n, o, r);
      return;
    }
  }
  (te.flags |= e), (l.memoizedState = Ar(1 | t, n, o, r));
}
function qa(e, t) {
  return Nl(8390656, 8, e, t);
}
function Au(e, t) {
  return mo(2048, 8, e, t);
}
function cf(e, t) {
  return mo(4, 2, e, t);
}
function ff(e, t) {
  return mo(4, 4, e, t);
}
function df(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), mo(4, 4, df.bind(null, t, e), n)
  );
}
function $u() {}
function hf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ju(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ju(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vf(e, t, n) {
  return un & 21
    ? (tt(n, t) || ((n = yc()), (te.lanes |= n), (an |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function vh(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = bo.transition;
  bo.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (bo.transition = r);
  }
}
function gf() {
  return Qe().memoizedState;
}
function gh(e, t, n) {
  var r = Bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yf(e))
  )
    wf(t, n);
  else if (((n = Xc(e, t, n, r)), n !== null)) {
    var l = _e();
    et(n, e, r, l), Sf(n, t, r);
  }
}
function yh(e, t, n) {
  var r = Bt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yf(e)) wf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), tt(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Mu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xc(e, t, l, r)),
      n !== null && ((l = _e()), et(n, e, r, l), Sf(n, t, r));
  }
}
function yf(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function wf(e, t) {
  yr = Zl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Sf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n);
  }
}
var Jl = {
    readContext: Ve,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1,
  },
  wh = {
    readContext: Ve,
    useCallback: function (e, t) {
      return (ot().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ve,
    useEffect: qa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Nl(4194308, 4, df.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ot();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gh.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ja,
    useDebugValue: $u,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = Ja(!1),
        t = e[0];
      return (e = vh.bind(null, e[1])), (ot().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        l = ot();
      if (b) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(x(349));
        un & 30 || rf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        qa(of.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ar(9, lf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = he.identifierPrefix;
      if (b) {
        var n = gt,
          r = vt;
        (n = (r & ~(1 << (32 - be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sh = {
    readContext: Ve,
    useCallback: hf,
    useContext: Ve,
    useEffect: Au,
    useImperativeHandle: pf,
    useInsertionEffect: cf,
    useLayoutEffect: ff,
    useMemo: mf,
    useReducer: ei,
    useRef: sf,
    useState: function () {
      return ei(Ur);
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = Qe();
      return vf(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(Ur)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: tf,
    useSyncExternalStore: nf,
    useId: gf,
    unstable_isNewReconciler: !1,
  },
  kh = {
    readContext: Ve,
    useCallback: hf,
    useContext: Ve,
    useEffect: Au,
    useImperativeHandle: pf,
    useInsertionEffect: cf,
    useLayoutEffect: ff,
    useMemo: mf,
    useReducer: ti,
    useRef: sf,
    useState: function () {
      return ti(Ur);
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = Qe();
      return fe === null ? (t.memoizedState = e) : vf(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(Ur)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: tf,
    useSyncExternalStore: nf,
    useId: gf,
    unstable_isNewReconciler: !1,
  };
function Wn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Gd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Eh = typeof WeakMap == "function" ? WeakMap : Map;
function kf(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bl || ((bl = !0), (tu = r)), Qi(e, t);
    }),
    n
  );
}
function Ef(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Qi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Qi(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ba(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Eh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = jh.bind(null, e, t, n)), t.then(e, e));
}
function es(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ts(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), At(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xh = Ct.ReactCurrentOwner,
  De = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? bc(t, null, n, r) : $n(t, e.child, n, r);
}
function ns(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    On(t, l),
    (r = Iu(e, t, n, r, o, l)),
    (n = Uu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        xt(e, t, l))
      : (b && n && Pu(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
  );
}
function rs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Xu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), xf(e, t, o, r, l))
      : ((e = Tl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Mr), n(i, r) && e.ref === t.ref)
    )
      return xt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Mr(o, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), xt(e, t, l);
  }
  return Ki(e, t, n, r, l);
}
function Cf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(Nn, Oe),
        (Oe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(Nn, Oe),
          (Oe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Z(Nn, Oe),
        (Oe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(Nn, Oe),
      (Oe |= r);
  return Pe(e, t, l, n), t.child;
}
function Pf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ki(e, t, n, r, l) {
  var o = Te(n) ? ln : xe.current;
  return (
    (o = Un(t, o)),
    On(t, l),
    (n = Iu(e, t, n, r, o, l)),
    (r = Uu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        xt(e, t, l))
      : (b && r && Pu(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
  );
}
function ls(e, t, n, r, l) {
  if (Te(n)) {
    var o = !0;
    Hl(t);
  } else o = !1;
  if ((On(t, l), t.stateNode === null))
    Ll(e, t), Jc(t, n, r), Vi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ve(c))
      : ((c = Te(n) ? ln : xe.current), (c = Un(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== c) && Ga(t, i, r, c)),
      (Lt = !1);
    var s = t.memoizedState;
    (i.state = s),
      Xl(t, r, i, l),
      (a = t.memoizedState),
      u !== r || s !== a || Me.current || Lt
        ? (typeof h == "function" && (Hi(t, n, h, r), (a = t.memoizedState)),
          (u = Lt || Xa(t, n, u, r, s, a, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Gc(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Ze(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (s = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ve(a))
        : ((a = Te(n) ? ln : xe.current), (a = Un(t, a)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || s !== a) && Ga(t, i, r, a)),
      (Lt = !1),
      (s = t.memoizedState),
      (i.state = s),
      Xl(t, r, i, l);
    var k = t.memoizedState;
    u !== m || s !== k || Me.current || Lt
      ? (typeof y == "function" && (Hi(t, n, y, r), (k = t.memoizedState)),
        (c = Lt || Xa(t, n, c, r, s, k, a) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && s === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && s === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && s === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && s === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yi(e, t, n, r, o, l);
}
function Yi(e, t, n, r, l, o) {
  Pf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ha(t, n, !1), xt(e, t, o);
  (r = t.stateNode), (xh.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = $n(t, e.child, null, o)), (t.child = $n(t, null, u, o)))
      : Pe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Ha(t, n, !0),
    t.child
  );
}
function _f(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wa(e, t.context, !1),
    zu(e, t.containerInfo);
}
function os(e, t, n, r, l) {
  return An(), Ru(l), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var Xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rf(e, t, n) {
  var r = t.pendingProps,
    l = ee.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Z(ee, l & 1),
    e === null)
  )
    return (
      Bi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = yo(i, r, 0, null)),
              (e = rn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Gi(n)),
              (t.memoizedState = Xi),
              e)
            : Bu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ch(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Wt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Wt(u, o)) : ((o = rn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Gi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Wt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bu(e, t) {
  return (
    (t = yo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gl(e, t, n, r) {
  return (
    r !== null && Ru(r),
    $n(t, e.child, null, n),
    (e = Bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ch(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ni(Error(x(422)))), gl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = yo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = rn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && $n(t, e.child, null, i),
        (t.child.memoizedState = Gi(i)),
        (t.memoizedState = Xi),
        o);
  if (!(t.mode & 1)) return gl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(x(419))), (r = ni(o, r, void 0)), gl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), De || u)) {
    if (((r = he), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Et(e, l), et(r, e, l, -1));
    }
    return Yu(), (r = ni(Error(x(421)))), gl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ih.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Fe = Ut(l.nextSibling)),
      (je = t),
      (b = !0),
      (qe = null),
      e !== null &&
        (($e[Be++] = vt),
        ($e[Be++] = gt),
        ($e[Be++] = on),
        (vt = e.id),
        (gt = e.overflow),
        (on = t)),
      (t = Bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function is(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wi(e.return, t, n);
}
function ri(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Nf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Pe(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && is(e, n, t);
        else if (e.tag === 19) is(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Z(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ri(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ri(t, !0, n, null, o);
        break;
      case "together":
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ll(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (an |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ph(e, t, n) {
  switch (t.tag) {
    case 3:
      _f(t), An();
      break;
    case 5:
      ef(t);
      break;
    case 1:
      Te(t.type) && Hl(t);
      break;
    case 4:
      zu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      Z(Kl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Rf(e, t, n)
          : (Z(ee, ee.current & 1),
            (e = xt(e, t, n)),
            e !== null ? e.sibling : null);
      Z(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Z(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cf(e, t, n);
  }
  return xt(e, t, n);
}
var Lf, Zi, Df, Mf;
Lf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zi = function () {};
Df = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), en(at.current);
    var o = null;
    switch (n) {
      case "input":
        (l = yi(e, l)), (r = yi(e, r)), (o = []);
        break;
      case "select":
        (l = ne({}, l, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ki(e, l)), (r = ki(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bl);
    }
    xi(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Cr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && a !== u && (a != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Cr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && J("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Mf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lr(e, t) {
  if (!b)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _h(e, t, n) {
  var r = t.pendingProps;
  switch ((_u(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(t), null;
    case 1:
      return Te(t.type) && Wl(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Bn(),
        q(Me),
        q(xe),
        Fu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ml(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (lu(qe), (qe = null)))),
        Zi(e, t),
        ke(t),
        null
      );
    case 5:
      Ou(t);
      var l = en(jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Df(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ke(t), null;
        }
        if (((e = en(at.current)), ml(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[it] = t), (r[Or] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < fr.length; l++) J(fr[l], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              ma(r, o), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              ga(r, o), J("invalid", r);
          }
          xi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      hl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      hl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Cr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              il(r), va(r, o, !0);
              break;
            case "textarea":
              il(r), ya(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Bl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = rc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[it] = t),
            (e[Or] = r),
            Lf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ci(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < fr.length; l++) J(fr[l], e);
                l = r;
                break;
              case "source":
                J("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (l = r);
                break;
              case "details":
                J("toggle", e), (l = r);
                break;
              case "input":
                ma(e, r), (l = yi(e, r)), J("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ne({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                ga(e, r), (l = ki(e, r)), J("invalid", e);
                break;
              default:
                l = r;
            }
            xi(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? ic(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && lc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Pr(e, a)
                    : typeof a == "number" && Pr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Cr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && J("scroll", e)
                      : a != null && fu(e, o, a, i));
              }
            switch (n) {
              case "input":
                il(e), va(e, r, !1);
                break;
              case "textarea":
                il(e), ya(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Dn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Bl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) Mf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = en(jr.current)), en(at.current), ml(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (o = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                hl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (q(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && Fe !== null && t.mode & 1 && !(t.flags & 128))
          Yc(), An(), (t.flags |= 98560), (o = !1);
        else if (((o = ml(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[it] = t;
          } else
            An(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (o = !1);
        } else qe !== null && (lu(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? de === 0 && (de = 3) : Yu())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Bn(), Zi(e, t), e === null && Tr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return Du(t.type._context), ke(t), null;
    case 17:
      return Te(t.type) && Wl(), ke(t), null;
    case 19:
      if ((q(ee), (o = t.memoizedState), o === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) lr(o, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Gl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    lr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > Hn &&
            ((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !b)
            )
              return ke(t), null;
          } else
            2 * ie() - o.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = ee.current),
          Z(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Oe & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Rh(e, t) {
  switch ((_u(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Wl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Bn(),
        q(Me),
        q(xe),
        Fu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ou(t), null;
    case 13:
      if ((q(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        An();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(ee), null;
    case 4:
      return Bn(), null;
    case 10:
      return Du(t.type._context), null;
    case 22:
    case 23:
      return Ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yl = !1,
  Ee = !1,
  Nh = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function Ji(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var us = !1;
function Lh(e, t) {
  if (((Oi = Ul), (e = Oc()), Cu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            c = 0,
            h = 0,
            m = e,
            s = null;
          t: for (;;) {
            for (
              var y;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (a = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (y = m.firstChild) !== null;

            )
              (s = m), (m = y);
            for (;;) {
              if (m === e) break t;
              if (
                (s === n && ++c === l && (u = i),
                s === o && ++h === r && (a = i),
                (y = m.nextSibling) !== null)
              )
                break;
              (m = s), (s = m.parentNode);
            }
            m = y;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fi = { focusedElem: e, selectionRange: n }, Ul = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var w = k.memoizedProps,
                    P = k.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ze(t.type, w),
                      P
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (v) {
          oe(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (k = us), (us = !1), k;
}
function wr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ji(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function qi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Tf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Tf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[Or], delete t[Ui], delete t[fh], delete t[dh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function as(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bi(e, t, n), e = e.sibling; e !== null; ) bi(e, t, n), (e = e.sibling);
}
function eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), (e = e.sibling);
}
var me = null,
  Je = !1;
function _t(e, t, n) {
  for (n = n.child; n !== null; ) Of(e, t, n), (n = n.sibling);
}
function Of(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(uo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || Rn(n, t);
    case 6:
      var r = me,
        l = Je;
      (me = null),
        _t(e, t, n),
        (me = r),
        (Je = l),
        me !== null &&
          (Je
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (Je
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zo(e.parentNode, n)
              : e.nodeType === 1 && Zo(e, n),
            Lr(e))
          : Zo(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (l = Je),
        (me = n.stateNode.containerInfo),
        (Je = !0),
        _t(e, t, n),
        (me = r),
        (Je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ji(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      _t(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (Rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          oe(n, t, u);
        }
      _t(e, t, n);
      break;
    case 21:
      _t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), _t(e, t, n), (Ee = r))
        : _t(e, t, n);
      break;
    default:
      _t(e, t, n);
  }
}
function ss(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nh()),
      t.forEach(function (r) {
        var l = Uh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (me = u.stateNode), (Je = !1);
              break e;
            case 3:
              (me = u.stateNode.containerInfo), (Je = !0);
              break e;
            case 4:
              (me = u.stateNode.containerInfo), (Je = !0);
              break e;
          }
          u = u.return;
        }
        if (me === null) throw Error(x(160));
        Of(o, i, l), (me = null), (Je = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        oe(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ff(t, e), (t = t.sibling);
}
function Ff(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), lt(e), r & 4)) {
        try {
          wr(3, e, e.return), vo(3, e);
        } catch (w) {
          oe(e, e.return, w);
        }
        try {
          wr(5, e, e.return);
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      break;
    case 1:
      Ge(t, e), lt(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        lt(e),
        r & 512 && n !== null && Rn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Pr(l, "");
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && tc(l, o),
              Ci(u, i);
            var c = Ci(u, o);
            for (i = 0; i < a.length; i += 2) {
              var h = a[i],
                m = a[i + 1];
              h === "style"
                ? ic(l, m)
                : h === "dangerouslySetInnerHTML"
                ? lc(l, m)
                : h === "children"
                ? Pr(l, m)
                : fu(l, h, m, c);
            }
            switch (u) {
              case "input":
                wi(l, o);
                break;
              case "textarea":
                nc(l, o);
                break;
              case "select":
                var s = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Dn(l, !!o.multiple, y, !1)
                  : s !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Dn(l, !!o.multiple, o.defaultValue, !0)
                      : Dn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Or] = o;
          } catch (w) {
            oe(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lr(t.containerInfo);
        } catch (w) {
          oe(e, e.return, w);
        }
      break;
    case 4:
      Ge(t, e), lt(e);
      break;
    case 13:
      Ge(t, e),
        lt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Vu = ie())),
        r & 4 && ss(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (c = Ee) || h), Ge(t, e), (Ee = c)) : Ge(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (L = e, h = e.child; h !== null; ) {
            for (m = L = h; L !== null; ) {
              switch (((s = L), (y = s.child), s.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wr(4, s, s.return);
                  break;
                case 1:
                  Rn(s, s.return);
                  var k = s.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = s), (n = s.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (w) {
                      oe(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Rn(s, s.return);
                  break;
                case 22:
                  if (s.memoizedState !== null) {
                    fs(m);
                    continue;
                  }
              }
              y !== null ? ((y.return = s), (L = y)) : fs(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (a = m.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = oc("display", i)));
              } catch (w) {
                oe(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (w) {
                oe(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), lt(e), r & 4 && ss(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Pr(l, ""), (r.flags &= -33));
          var o = as(e);
          eu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = as(e);
          bi(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      oe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dh(e, t, n) {
  (L = e), jf(e);
}
function jf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || yl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Ee;
        u = yl;
        var c = Ee;
        if (((yl = i), (Ee = a) && !c))
          for (L = l; L !== null; )
            (i = L),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ds(l)
                : a !== null
                ? ((a.return = i), (L = a))
                : ds(l);
        for (; o !== null; ) (L = o), jf(o), (o = o.sibling);
        (L = l), (yl = u), (Ee = c);
      }
      cs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (L = o)) : cs(e);
  }
}
function cs(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || vo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ya(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ya(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Lr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        Ee || (t.flags & 512 && qi(t));
      } catch (s) {
        oe(t, t.return, s);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function fs(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function ds(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vo(4, t);
          } catch (a) {
            oe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              oe(t, l, a);
            }
          }
          var o = t.return;
          try {
            qi(t);
          } catch (a) {
            oe(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qi(t);
          } catch (a) {
            oe(t, i, a);
          }
      }
    } catch (a) {
      oe(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (L = u);
      break;
    }
    L = t.return;
  }
}
var Mh = Math.ceil,
  ql = Ct.ReactCurrentDispatcher,
  Wu = Ct.ReactCurrentOwner,
  He = Ct.ReactCurrentBatchConfig,
  V = 0,
  he = null,
  ce = null,
  ge = 0,
  Oe = 0,
  Nn = Kt(0),
  de = 0,
  $r = null,
  an = 0,
  go = 0,
  Hu = 0,
  Sr = null,
  Le = null,
  Vu = 0,
  Hn = 1 / 0,
  pt = null,
  bl = !1,
  tu = null,
  $t = null,
  wl = !1,
  zt = null,
  eo = 0,
  kr = 0,
  nu = null,
  Dl = -1,
  Ml = 0;
function _e() {
  return V & 6 ? ie() : Dl !== -1 ? Dl : (Dl = ie());
}
function Bt(e) {
  return e.mode & 1
    ? V & 2 && ge !== 0
      ? ge & -ge
      : hh.transition !== null
      ? (Ml === 0 && (Ml = yc()), Ml)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pc(e.type))),
        e)
    : 1;
}
function et(e, t, n, r) {
  if (50 < kr) throw ((kr = 0), (nu = null), Error(x(185)));
  Qr(e, n, r),
    (!(V & 2) || e !== he) &&
      (e === he && (!(V & 2) && (go |= n), de === 4 && Mt(e, ge)),
      ze(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Hn = ie() + 500), po && Yt()));
}
function ze(e, t) {
  var n = e.callbackNode;
  hp(e, t);
  var r = Il(e, e === he ? ge : 0);
  if (r === 0)
    n !== null && ka(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ka(n), t === 1))
      e.tag === 0 ? ph(ps.bind(null, e)) : Vc(ps.bind(null, e)),
        sh(function () {
          !(V & 6) && Yt();
        }),
        (n = null);
    else {
      switch (wc(r)) {
        case 1:
          n = vu;
          break;
        case 4:
          n = vc;
          break;
        case 16:
          n = jl;
          break;
        case 536870912:
          n = gc;
          break;
        default:
          n = jl;
      }
      n = Vf(n, If.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function If(e, t) {
  if (((Dl = -1), (Ml = 0), V & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = Il(e, e === he ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = to(e, r);
  else {
    t = r;
    var l = V;
    V |= 2;
    var o = Af();
    (he !== e || ge !== t) && ((pt = null), (Hn = ie() + 500), nn(e, t));
    do
      try {
        Oh();
        break;
      } catch (u) {
        Uf(e, u);
      }
    while (1);
    Lu(),
      (ql.current = o),
      (V = l),
      ce !== null ? (t = 0) : ((he = null), (ge = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Li(e)), l !== 0 && ((r = l), (t = ru(e, l)))), t === 1)
    )
      throw ((n = $r), nn(e, 0), Mt(e, r), ze(e, ie()), n);
    if (t === 6) Mt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Th(l) &&
          ((t = to(e, r)),
          t === 2 && ((o = Li(e)), o !== 0 && ((r = o), (t = ru(e, o)))),
          t === 1))
      )
        throw ((n = $r), nn(e, 0), Mt(e, r), ze(e, ie()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Zt(e, Le, pt);
          break;
        case 3:
          if (
            (Mt(e, r), (r & 130023424) === r && ((t = Vu + 500 - ie()), 10 < t))
          ) {
            if (Il(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              _e(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ii(Zt.bind(null, e, Le, pt), t);
            break;
          }
          Zt(e, Le, pt);
          break;
        case 4:
          if ((Mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - be(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Mh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ii(Zt.bind(null, e, Le, pt), r);
            break;
          }
          Zt(e, Le, pt);
          break;
        case 5:
          Zt(e, Le, pt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ze(e, ie()), e.callbackNode === n ? If.bind(null, e) : null;
}
function ru(e, t) {
  var n = Sr;
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = to(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && lu(t)),
    e
  );
}
function lu(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function Th(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!tt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Mt(e, t) {
  for (
    t &= ~Hu,
      t &= ~go,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ps(e) {
  if (V & 6) throw Error(x(327));
  Fn();
  var t = Il(e, 0);
  if (!(t & 1)) return ze(e, ie()), null;
  var n = to(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Li(e);
    r !== 0 && ((t = r), (n = ru(e, r)));
  }
  if (n === 1) throw ((n = $r), nn(e, 0), Mt(e, t), ze(e, ie()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, Le, pt),
    ze(e, ie()),
    null
  );
}
function Qu(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((Hn = ie() + 500), po && Yt());
  }
}
function sn(e) {
  zt !== null && zt.tag === 0 && !(V & 6) && Fn();
  var t = V;
  V |= 1;
  var n = He.transition,
    r = X;
  try {
    if (((He.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (He.transition = n), (V = t), !(V & 6) && Yt();
  }
}
function Ku() {
  (Oe = Nn.current), q(Nn);
}
function nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ah(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((_u(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wl();
          break;
        case 3:
          Bn(), q(Me), q(xe), Fu();
          break;
        case 5:
          Ou(r);
          break;
        case 4:
          Bn();
          break;
        case 13:
          q(ee);
          break;
        case 19:
          q(ee);
          break;
        case 10:
          Du(r.type._context);
          break;
        case 22:
        case 23:
          Ku();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ce = e = Wt(e.current, null)),
    (ge = Oe = t),
    (de = 0),
    ($r = null),
    (Hu = go = an = 0),
    (Le = Sr = null),
    bt !== null)
  ) {
    for (t = 0; t < bt.length; t++)
      if (((n = bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    bt = null;
  }
  return e;
}
function Uf(e, t) {
  do {
    var n = ce;
    try {
      if ((Lu(), (Rl.current = Jl), Zl)) {
        for (var r = te.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zl = !1;
      }
      if (
        ((un = 0),
        (pe = fe = te = null),
        (yr = !1),
        (Ir = 0),
        (Wu.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), ($r = t), (ce = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = ge),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var s = h.alternate;
            s
              ? ((h.updateQueue = s.updateQueue),
                (h.memoizedState = s.memoizedState),
                (h.lanes = s.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = es(i);
          if (y !== null) {
            (y.flags &= -257),
              ts(y, i, u, o, t),
              y.mode & 1 && ba(o, c, t),
              (t = y),
              (a = c);
            var k = t.updateQueue;
            if (k === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ba(o, c, t), Yu();
              break e;
            }
            a = Error(x(426));
          }
        } else if (b && u.mode & 1) {
          var P = es(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              ts(P, i, u, o, t),
              Ru(Wn(a, u));
            break e;
          }
        }
        (o = a = Wn(a, u)),
          de !== 4 && (de = 2),
          Sr === null ? (Sr = [o]) : Sr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = kf(o, a, t);
              Ka(o, d);
              break e;
            case 1:
              u = a;
              var f = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    ($t === null || !$t.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Ef(o, u, t);
                Ka(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Bf(n);
    } catch (C) {
      (t = C), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Af() {
  var e = ql.current;
  return (ql.current = Jl), e === null ? Jl : e;
}
function Yu() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    he === null || (!(an & 268435455) && !(go & 268435455)) || Mt(he, ge);
}
function to(e, t) {
  var n = V;
  V |= 2;
  var r = Af();
  (he !== e || ge !== t) && ((pt = null), nn(e, t));
  do
    try {
      zh();
      break;
    } catch (l) {
      Uf(e, l);
    }
  while (1);
  if ((Lu(), (V = n), (ql.current = r), ce !== null)) throw Error(x(261));
  return (he = null), (ge = 0), de;
}
function zh() {
  for (; ce !== null; ) $f(ce);
}
function Oh() {
  for (; ce !== null && !op(); ) $f(ce);
}
function $f(e) {
  var t = Hf(e.alternate, e, Oe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bf(e) : (ce = t),
    (Wu.current = null);
}
function Bf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Rh(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (ce = null);
        return;
      }
    } else if (((n = _h(n, t, Oe)), n !== null)) {
      ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function Zt(e, t, n) {
  var r = X,
    l = He.transition;
  try {
    (He.transition = null), (X = 1), Fh(e, t, n, r);
  } finally {
    (He.transition = l), (X = r);
  }
  return null;
}
function Fh(e, t, n, r) {
  do Fn();
  while (zt !== null);
  if (V & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (mp(e, o),
    e === he && ((ce = he = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wl ||
      ((wl = !0),
      Vf(jl, function () {
        return Fn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = He.transition), (He.transition = null);
    var i = X;
    X = 1;
    var u = V;
    (V |= 4),
      (Wu.current = null),
      Lh(e, n),
      Ff(n, e),
      th(Fi),
      (Ul = !!Oi),
      (Fi = Oi = null),
      (e.current = n),
      Dh(n),
      ip(),
      (V = u),
      (X = i),
      (He.transition = o);
  } else e.current = n;
  if (
    (wl && ((wl = !1), (zt = e), (eo = l)),
    (o = e.pendingLanes),
    o === 0 && ($t = null),
    sp(n.stateNode),
    ze(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (bl) throw ((bl = !1), (e = tu), (tu = null), e);
  return (
    eo & 1 && e.tag !== 0 && Fn(),
    (o = e.pendingLanes),
    o & 1 ? (e === nu ? kr++ : ((kr = 0), (nu = e))) : (kr = 0),
    Yt(),
    null
  );
}
function Fn() {
  if (zt !== null) {
    var e = wc(eo),
      t = He.transition,
      n = X;
    try {
      if (((He.transition = null), (X = 16 > e ? 16 : e), zt === null))
        var r = !1;
      else {
        if (((e = zt), (zt = null), (eo = 0), V & 6)) throw Error(x(331));
        var l = V;
        for (V |= 4, L = e.current; L !== null; ) {
          var o = L,
            i = o.child;
          if (L.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (L = c; L !== null; ) {
                  var h = L;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (L = m);
                  else
                    for (; L !== null; ) {
                      h = L;
                      var s = h.sibling,
                        y = h.return;
                      if ((Tf(h), h === c)) {
                        L = null;
                        break;
                      }
                      if (s !== null) {
                        (s.return = y), (L = s);
                        break;
                      }
                      L = y;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var P = w.sibling;
                    (w.sibling = null), (w = P);
                  } while (w !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (L = i);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (L = d);
                break e;
              }
              L = o.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          i = L;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (L = p);
          else
            e: for (i = f; L !== null; ) {
              if (((u = L), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vo(9, u);
                  }
                } catch (C) {
                  oe(u, u.return, C);
                }
              if (u === i) {
                L = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (L = v);
                break e;
              }
              L = u.return;
            }
        }
        if (
          ((V = l), Yt(), ut && typeof ut.onPostCommitFiberRoot == "function")
        )
          try {
            ut.onPostCommitFiberRoot(uo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (He.transition = t);
    }
  }
  return !1;
}
function hs(e, t, n) {
  (t = Wn(n, t)),
    (t = kf(e, t, 1)),
    (e = At(e, t, 1)),
    (t = _e()),
    e !== null && (Qr(e, 1, t), ze(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) hs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = Ef(t, e, 1)),
            (t = At(t, e, 1)),
            (e = _e()),
            t !== null && (Qr(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = _e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ge & n) === n &&
      (de === 4 || (de === 3 && (ge & 130023424) === ge && 500 > ie() - Vu)
        ? nn(e, 0)
        : (Hu |= n)),
    ze(e, t);
}
function Wf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sl), (sl <<= 1), !(sl & 130023424) && (sl = 4194304))
      : (t = 1));
  var n = _e();
  (e = Et(e, t)), e !== null && (Qr(e, t, n), ze(e, n));
}
function Ih(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wf(e, n);
}
function Uh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Wf(e, n);
}
var Hf;
Hf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), Ph(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), b && t.flags & 1048576 && Qc(t, Ql, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ll(e, t), (e = t.pendingProps);
      var l = Un(t, xe.current);
      On(t, n), (l = Iu(null, t, r, e, l, n));
      var o = Uu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Hl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Tu(t),
            (l.updater = ho),
            (t.stateNode = l),
            (l._reactInternals = t),
            Vi(t, r, e, n),
            (t = Yi(null, t, r, !0, o, n)))
          : ((t.tag = 0), b && o && Pu(t), Pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ll(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = $h(r)),
          (e = Ze(r, e)),
          l)
        ) {
          case 0:
            t = Ki(null, t, r, e, n);
            break e;
          case 1:
            t = ls(null, t, r, e, n);
            break e;
          case 11:
            t = ns(null, t, r, e, n);
            break e;
          case 14:
            t = rs(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Ki(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        ls(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((_f(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Gc(e, t),
          Xl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Wn(Error(x(423)), t)), (t = os(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Wn(Error(x(424)), t)), (t = os(e, t, r, n, l));
            break e;
          } else
            for (
              Fe = Ut(t.stateNode.containerInfo.firstChild),
                je = t,
                b = !0,
                qe = null,
                n = bc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((An(), r === l)) {
            t = xt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ef(t),
        e === null && Bi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ji(r, l) ? (i = null) : o !== null && ji(r, o) && (t.flags |= 32),
        Pf(e, t),
        Pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Bi(t), null;
    case 13:
      return Rf(e, t, n);
    case 4:
      return (
        zu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        ns(e, t, r, l, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          Z(Kl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (tt(o.value, i)) {
            if (o.children === l.children && !Me.current) {
              t = xt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = yt(-1, n & -n)), (a.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (c.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Wi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(x(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Wi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        On(t, n),
        (l = Ve(l)),
        (r = r(l)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ze(r, t.pendingProps)),
        (l = Ze(r.type, l)),
        rs(e, t, r, l, n)
      );
    case 15:
      return xf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Ll(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Hl(t)) : (e = !1),
        On(t, n),
        Jc(t, r, l),
        Vi(t, r, l, n),
        Yi(null, t, r, !0, e, n)
      );
    case 19:
      return Nf(e, t, n);
    case 22:
      return Cf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Vf(e, t) {
  return mc(e, t);
}
function Ah(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function We(e, t, n, r) {
  return new Ah(e, t, n, r);
}
function Xu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $h(e) {
  if (typeof e == "function") return Xu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pu)) return 11;
    if (e === hu) return 14;
  }
  return 2;
}
function Wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Tl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Xu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case yn:
        return rn(n.children, l, o, t);
      case du:
        (i = 8), (l |= 8);
        break;
      case hi:
        return (
          (e = We(12, n, t, l | 2)), (e.elementType = hi), (e.lanes = o), e
        );
      case mi:
        return (e = We(13, n, t, l)), (e.elementType = mi), (e.lanes = o), e;
      case vi:
        return (e = We(19, n, t, l)), (e.elementType = vi), (e.lanes = o), e;
      case qs:
        return yo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zs:
              i = 10;
              break e;
            case Js:
              i = 9;
              break e;
            case pu:
              i = 11;
              break e;
            case hu:
              i = 14;
              break e;
            case Nt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function rn(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function yo(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = qs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function li(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function oi(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ao(0)),
    (this.expirationTimes = Ao(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ao(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Gu(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new Bh(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = We(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tu(o),
    e
  );
}
function Wh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qf(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (fn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Hc(e, n, t);
  }
  return t;
}
function Kf(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Gu(n, r, !0, e, l, o, i, u, a)),
    (e.context = Qf(null)),
    (n = e.current),
    (r = _e()),
    (l = Bt(n)),
    (o = yt(r, l)),
    (o.callback = t ?? null),
    At(n, o, l),
    (e.current.lanes = l),
    Qr(e, l, r),
    ze(e, r),
    e
  );
}
function wo(e, t, n, r) {
  var l = t.current,
    o = _e(),
    i = Bt(l);
  return (
    (n = Qf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = At(l, t, i)),
    e !== null && (et(e, l, i, o), _l(e, l, i)),
    i
  );
}
function no(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ms(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  ms(e, t), (e = e.alternate) && ms(e, t);
}
function Hh() {
  return null;
}
var Yf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ju(e) {
  this._internalRoot = e;
}
So.prototype.render = Ju.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  wo(e, t, null, null);
};
So.prototype.unmount = Ju.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    sn(function () {
      wo(null, e, null, null);
    }),
      (t[kt] = null);
  }
};
function So(e) {
  this._internalRoot = e;
}
So.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ec();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && Cc(e);
  }
};
function qu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ko(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function vs() {}
function Vh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = no(i);
        o.call(c);
      };
    }
    var i = Kf(t, r, e, 0, null, !1, !1, "", vs);
    return (
      (e._reactRootContainer = i),
      (e[kt] = i.current),
      Tr(e.nodeType === 8 ? e.parentNode : e),
      sn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = no(a);
      u.call(c);
    };
  }
  var a = Gu(e, 0, !1, null, null, !1, !1, "", vs);
  return (
    (e._reactRootContainer = a),
    (e[kt] = a.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    sn(function () {
      wo(t, a, n, r);
    }),
    a
  );
}
function Eo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = no(i);
        u.call(a);
      };
    }
    wo(t, i, e, l);
  } else i = Vh(n, t, e, l, r);
  return no(i);
}
Sc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cr(t.pendingLanes);
        n !== 0 &&
          (gu(t, n | 1), ze(t, ie()), !(V & 6) && ((Hn = ie() + 500), Yt()));
      }
      break;
    case 13:
      sn(function () {
        var r = Et(e, 1);
        if (r !== null) {
          var l = _e();
          et(r, e, 1, l);
        }
      }),
        Zu(e, 1);
  }
};
yu = function (e) {
  if (e.tag === 13) {
    var t = Et(e, 134217728);
    if (t !== null) {
      var n = _e();
      et(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
kc = function (e) {
  if (e.tag === 13) {
    var t = Bt(e),
      n = Et(e, t);
    if (n !== null) {
      var r = _e();
      et(n, e, t, r);
    }
    Zu(e, t);
  }
};
Ec = function () {
  return X;
};
xc = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
_i = function (e, t, n) {
  switch (t) {
    case "input":
      if ((wi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = fo(r);
            if (!l) throw Error(x(90));
            ec(r), wi(r, l);
          }
        }
      }
      break;
    case "textarea":
      nc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
  }
};
sc = Qu;
cc = sn;
var Qh = { usingClientEntryPoint: !1, Events: [Yr, En, fo, uc, ac, Qu] },
  or = {
    findFiberByHostInstance: qt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Kh = {
    bundleType: or.bundleType,
    version: or.version,
    rendererPackageName: or.rendererPackageName,
    rendererConfig: or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: or.findFiberByHostInstance || Hh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sl.isDisabled && Sl.supportsFiber)
    try {
      (uo = Sl.inject(Kh)), (ut = Sl);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qh;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qu(t)) throw Error(x(200));
  return Wh(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!qu(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = Yf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Gu(e, 1, !1, null, null, n, !1, r, l)),
    (e[kt] = t.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    new Ju(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = pc(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return sn(e);
};
Ue.hydrate = function (e, t, n) {
  if (!ko(t)) throw Error(x(200));
  return Eo(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!qu(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Yf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Kf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[kt] = t.current),
    Tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new So(t);
};
Ue.render = function (e, t, n) {
  if (!ko(t)) throw Error(x(200));
  return Eo(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!ko(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (sn(function () {
        Eo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[kt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Qu;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ko(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Eo(e, t, n, !1, r);
};
Ue.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ue);
})(Hd);
var gs = fi;
(ci.createRoot = gs.createRoot), (ci.hydrateRoot = gs.hydrateRoot);
/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function K() {
  return (
    (K = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    K.apply(this, arguments)
  );
}
var se;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(se || (se = {}));
const ys = "popstate";
function Yh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Br(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : st(l);
  }
  return Gh(t, n, null, e);
}
function A(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Xh() {
  return Math.random().toString(36).substr(2, 8);
}
function ws(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Br(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    K(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Pt(t) : t,
      { state: n, key: (t && t.key) || r || Xh() }
    )
  );
}
function st(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Pt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Gh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = se.Pop,
    a = null,
    c = h();
  c == null && ((c = 0), i.replaceState(K({}, i.state, { idx: c }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = se.Pop;
    let P = h(),
      d = P == null ? null : P - c;
    (c = P), a && a({ action: u, location: w.location, delta: d });
  }
  function s(P, d) {
    u = se.Push;
    let f = Br(w.location, P, d);
    n && n(f, P), (c = h() + 1);
    let p = ws(f, c),
      v = w.createHref(f);
    try {
      i.pushState(p, "", v);
    } catch {
      l.location.assign(v);
    }
    o && a && a({ action: u, location: w.location, delta: 1 });
  }
  function y(P, d) {
    u = se.Replace;
    let f = Br(w.location, P, d);
    n && n(f, P), (c = h());
    let p = ws(f, c),
      v = w.createHref(f);
    i.replaceState(p, "", v),
      o && a && a({ action: u, location: w.location, delta: 0 });
  }
  function k(P) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof P == "string" ? P : st(P);
    return (
      A(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(P) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ys, m),
        (a = P),
        () => {
          l.removeEventListener(ys, m), (a = null);
        }
      );
    },
    createHref(P) {
      return t(l, P);
    },
    createURL: k,
    encodeLocation(P) {
      let d = k(P);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: s,
    replace: y,
    go(P) {
      return i.go(P);
    },
  };
  return w;
}
var ve;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ve || (ve = {}));
function Zh(e) {
  return e.index === !0;
}
function Xf(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, l) => {
      let o = [...t, l],
        i = typeof r.id == "string" ? r.id : o.join("-");
      return (
        A(
          r.index !== !0 || !r.children,
          "Cannot specify children on an index route"
        ),
        A(
          !n.has(i),
          'Found a route id collision on id "' +
            i +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        n.add(i),
        Zh(r)
          ? K({}, r, { id: i })
          : K({}, r, {
              id: i,
              children: r.children ? Xf(r.children, o, n) : void 0,
            })
      );
    })
  );
}
function dr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Pt(t) : t,
    l = Jf(r.pathname || "/", n);
  if (l == null) return null;
  let o = Gf(e);
  Jh(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = im(o[u], sm(l));
  return i;
}
function Gf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (A(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = wt([r, a.relativePath]),
      h = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (A(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Gf(o.children, t, h, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: lm(c, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of Zf(o.path)) l(o, i, a);
    }),
    t
  );
}
function Zf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Zf(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Jh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : om(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const qh = /^:\w+$/,
  bh = 3,
  em = 2,
  tm = 1,
  nm = 10,
  rm = -2,
  Ss = (e) => e === "*";
function lm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ss) && (r += rm),
    t && (r += em),
    n
      .filter((l) => !Ss(l))
      .reduce((l, o) => l + (qh.test(o) ? bh : o === "" ? tm : nm), r)
  );
}
function om(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function im(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      h = um(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        c
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: wt([l, h.pathname]),
      pathnameBase: pm(wt([l, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== "/" && (l = wt([l, h.pathnameBase]));
  }
  return o;
}
function um(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = am(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((c, h, m) => {
      if (h === "*") {
        let s = u[m] || "";
        i = o.slice(0, o.length - s.length).replace(/(.)\/+$/, "$1");
      }
      return (c[h] = cm(u[m] || "", h)), c;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function am(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Wr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function sm(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Wr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function cm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Wr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Jf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Wr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function fm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Pt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : dm(n, t)) : t,
    search: hm(r),
    hash: mm(l),
  };
}
function dm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ii(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xo(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function bu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Pt(e))
    : ((l = K({}, e)),
      A(
        !l.pathname || !l.pathname.includes("?"),
        ii("?", "pathname", "search", l)
      ),
      A(
        !l.pathname || !l.pathname.includes("#"),
        ii("#", "pathname", "hash", l)
      ),
      A(!l.search || !l.search.includes("#"), ii("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let s = i.split("/");
      for (; s[0] === ".."; ) s.shift(), (m -= 1);
      l.pathname = s.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let a = fm(l, u),
    c = i && i !== "/" && i.endsWith("/"),
    h = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || h) && (a.pathname += "/"), a;
}
const wt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  pm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  mm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ks extends Error {}
class vm {
  constructor(t, n) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      A(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects"
      );
    let r;
    (this.abortPromise = new Promise((o, i) => (r = i))),
      (this.controller = new AbortController());
    let l = () => r(new ks("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", l)),
      this.controller.signal.addEventListener("abort", l),
      (this.data = Object.entries(t).reduce((o, i) => {
        let [u, a] = i;
        return Object.assign(o, { [u]: this.trackPromise(u, a) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = n);
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, null, l),
      (l) => this.onSettle(r, t, l)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, "_tracked", { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, l) {
    return this.controller.signal.aborted && r instanceof ks
      ? (this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => r }),
        Promise.reject(r))
      : (this.pendingKeysSet.delete(n),
        this.done && this.unlistenAbortSignal(),
        r
          ? (Object.defineProperty(t, "_error", { get: () => r }),
            this.emit(!1, n),
            Promise.reject(r))
          : (Object.defineProperty(t, "_data", { get: () => l }),
            this.emit(!1, n),
            l));
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)),
      this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener("abort", r),
        (n = await new Promise((l) => {
          this.subscribe((o) => {
            t.removeEventListener("abort", r), (o || this.done) && l(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      A(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds"
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: ym(l) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function gm(e) {
  return e instanceof Promise && e._tracked === !0;
}
function ym(e) {
  if (!gm(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class ea {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function qf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const bf = ["post", "put", "patch", "delete"],
  wm = new Set(bf),
  Sm = ["get", ...bf],
  km = new Set(Sm),
  Em = new Set([301, 302, 303, 307, 308]),
  xm = new Set([307, 308]),
  ui = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Cm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Es = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ed =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Pm = !ed;
function _m(e) {
  A(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t = Xf(e.routes),
    n = null,
    r = new Set(),
    l = null,
    o = null,
    i = null,
    u = e.hydrationData != null,
    a = dr(t, e.history.location, e.basename),
    c = null;
  if (a == null) {
    let g = Rt(404, { pathname: e.history.location.pathname }),
      { matches: S, route: E } = Ns(t);
    (a = S), (c = { [E.id]: g });
  }
  let h = !a.some((g) => g.route.loader) || e.hydrationData != null,
    m,
    s = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: a,
      initialized: h,
      navigation: ui,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || c,
      fetchers: new Map(),
      blockers: new Map(),
    },
    y = se.Pop,
    k = !1,
    w,
    P = !1,
    d = !1,
    f = [],
    p = [],
    v = new Map(),
    C = 0,
    N = -1,
    D = new Map(),
    T = new Set(),
    G = new Map(),
    I = new Map(),
    re = null,
    Ke = new Map(),
    ct = !1;
  function qr() {
    return (
      (n = e.history.listen((g) => {
        let { action: S, location: E, delta: z } = g;
        if (ct) {
          ct = !1;
          return;
        }
        Wr(
          re != null && z === null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let M = ia({
          currentLocation: s.location,
          nextLocation: E,
          historyAction: S,
        });
        if (M && z != null) {
          (ct = !0),
            e.history.go(z * -1),
            el(M, {
              state: "blocked",
              location: E,
              proceed() {
                el(M, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: E,
                }),
                  e.history.go(z);
              },
              reset() {
                Zn(M), ue({ blockers: new Map(m.state.blockers) });
              },
            });
          return;
        }
        return Y(S, E);
      })),
      s.initialized || Y(se.Pop, s.location),
      m
    );
  }
  function _o() {
    n && n(),
      r.clear(),
      w && w.abort(),
      s.fetchers.forEach((g, S) => Lo(S)),
      s.blockers.forEach((g, S) => Zn(S));
  }
  function Yn(g) {
    return r.add(g), () => r.delete(g);
  }
  function ue(g) {
    (s = K({}, s, g)), r.forEach((S) => S(s));
  }
  function _(g, S) {
    var E, z;
    let M =
        s.actionData != null &&
        s.navigation.formMethod != null &&
        ht(s.navigation.formMethod) &&
        s.navigation.state === "loading" &&
        ((E = g.state) == null ? void 0 : E._isRedirect) !== !0,
      U;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? (U = S.actionData)
        : (U = null)
      : M
      ? (U = s.actionData)
      : (U = null);
    let F = S.loaderData
      ? Rs(s.loaderData, S.loaderData, S.matches || [], S.errors)
      : s.loaderData;
    for (let [O] of Ke) Zn(O);
    let H =
      k === !0 ||
      (s.navigation.formMethod != null &&
        ht(s.navigation.formMethod) &&
        ((z = g.state) == null ? void 0 : z._isRedirect) !== !0);
    ue(
      K({}, S, {
        actionData: U,
        loaderData: F,
        historyAction: y,
        location: g,
        initialized: !0,
        navigation: ui,
        revalidation: "idle",
        restoreScrollPosition: ua(g, S.matches || s.matches),
        preventScrollReset: H,
        blockers: new Map(s.blockers),
      })
    ),
      P ||
        y === se.Pop ||
        (y === se.Push
          ? e.history.push(g, g.state)
          : y === se.Replace && e.history.replace(g, g.state)),
      (y = se.Pop),
      (k = !1),
      (P = !1),
      (d = !1),
      (f = []),
      (p = []);
  }
  async function j(g, S) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let { path: E, submission: z, error: M } = xs(g, S),
      U = s.location,
      F = Br(s.location, E, S && S.state);
    F = K({}, F, e.history.encodeLocation(F));
    let H = S && S.replace != null ? S.replace : void 0,
      O = se.Push;
    H === !0
      ? (O = se.Replace)
      : H === !1 ||
        (z != null &&
          ht(z.formMethod) &&
          z.formAction === s.location.pathname + s.location.search &&
          (O = se.Replace));
    let Ce =
        S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0,
      W = ia({ currentLocation: U, nextLocation: F, historyAction: O });
    if (W) {
      el(W, {
        state: "blocked",
        location: F,
        proceed() {
          el(W, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            j(g, S);
        },
        reset() {
          Zn(W), ue({ blockers: new Map(s.blockers) });
        },
      });
      return;
    }
    return await Y(O, F, {
      submission: z,
      pendingError: M,
      preventScrollReset: Ce,
      replace: S && S.replace,
    });
  }
  function $() {
    if (
      (Ro(),
      ue({ revalidation: "loading" }),
      s.navigation.state !== "submitting")
    ) {
      if (s.navigation.state === "idle") {
        Y(s.historyAction, s.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Y(y || s.historyAction, s.navigation.location, {
        overrideNavigation: s.navigation,
      });
    }
  }
  async function Y(g, S, E) {
    w && w.abort(),
      (w = null),
      (y = g),
      (P = (E && E.startUninterruptedRevalidation) === !0),
      pd(s.location, s.matches),
      (k = (E && E.preventScrollReset) === !0);
    let z = E && E.overrideNavigation,
      M = dr(t, S, e.basename);
    if (!M) {
      let le = Rt(404, { pathname: S.pathname }),
        { matches: Ye, route: Xe } = Ns(t);
      Do(), _(S, { matches: Ye, loaderData: {}, errors: { [Xe.id]: le } });
      return;
    }
    if (
      Mm(s.location, S) &&
      !(E && E.submission && ht(E.submission.formMethod))
    ) {
      _(S, { matches: M });
      return;
    }
    w = new AbortController();
    let U = ur(e.history, S, w.signal, E && E.submission),
      F,
      H;
    if (E && E.pendingError) H = { [Ln(M).route.id]: E.pendingError };
    else if (E && E.submission && ht(E.submission.formMethod)) {
      let le = await ae(U, S, E.submission, M, { replace: E.replace });
      if (le.shortCircuited) return;
      (F = le.pendingActionData),
        (H = le.pendingActionError),
        (z = K({ state: "loading", location: S }, E.submission)),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: O,
      loaderData: Ce,
      errors: W,
    } = await pn(U, S, M, z, E && E.submission, E && E.replace, F, H);
    O ||
      ((w = null),
      _(
        S,
        K({ matches: M }, F ? { actionData: F } : {}, {
          loaderData: Ce,
          errors: W,
        })
      ));
  }
  async function ae(g, S, E, z, M) {
    Ro();
    let U = K({ state: "submitting", location: S }, E);
    ue({ navigation: U });
    let F,
      H = Ts(z, S);
    if (!H.route.action)
      F = {
        type: ve.error,
        error: Rt(405, {
          method: g.method,
          pathname: S.pathname,
          routeId: H.route.id,
        }),
      };
    else if (((F = await ir("action", g, H, z, m.basename)), g.signal.aborted))
      return { shortCircuited: !0 };
    if (jn(F)) {
      let O;
      return (
        M && M.replace != null
          ? (O = M.replace)
          : (O = F.location === s.location.pathname + s.location.search),
        await Gn(s, F, { submission: E, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if (Er(F)) {
      let O = Ln(z, H.route.id);
      return (
        (M && M.replace) !== !0 && (y = se.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: F.error } }
      );
    }
    if (tn(F)) throw Rt(400, { type: "defer-action" });
    return { pendingActionData: { [H.route.id]: F.data } };
  }
  async function pn(g, S, E, z, M, U, F, H) {
    let O = z;
    O ||
      (O = K(
        {
          state: "loading",
          location: S,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        M
      ));
    let Ce =
        M ||
        (O.formMethod && O.formAction && O.formData && O.formEncType
          ? {
              formMethod: O.formMethod,
              formAction: O.formAction,
              formData: O.formData,
              formEncType: O.formEncType,
            }
          : void 0),
      [W, le] = Cs(e.history, s, E, Ce, S, d, f, p, F, H, G);
    if (
      (Do(
        (we) =>
          !(E && E.some((rt) => rt.route.id === we)) ||
          (W && W.some((rt) => rt.route.id === we))
      ),
      W.length === 0 && le.length === 0)
    )
      return (
        _(
          S,
          K(
            { matches: E, loaderData: {}, errors: H || null },
            F ? { actionData: F } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    if (!P) {
      le.forEach((rt) => {
        let Xt = s.fetchers.get(rt.key),
          rl = {
            state: "loading",
            data: Xt && Xt.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        s.fetchers.set(rt.key, rl);
      });
      let we = F || s.actionData;
      ue(
        K(
          { navigation: O },
          we
            ? Object.keys(we).length === 0
              ? { actionData: null }
              : { actionData: we }
            : {},
          le.length > 0 ? { fetchers: new Map(s.fetchers) } : {}
        )
      );
    }
    (N = ++C), le.forEach((we) => v.set(we.key, w));
    let {
      results: Ye,
      loaderResults: Xe,
      fetcherResults: Jn,
    } = await ra(s.matches, E, W, le, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    le.forEach((we) => v.delete(we.key));
    let tl = Ls(Ye);
    if (tl) return await Gn(s, tl, { replace: U }), { shortCircuited: !0 };
    let { loaderData: nl, errors: mn } = _s(s, E, W, Xe, H, le, Jn, I);
    I.forEach((we, rt) => {
      we.subscribe((Xt) => {
        (Xt || we.done) && I.delete(rt);
      });
    }),
      cd();
    let Mo = oa(N);
    return K(
      { loaderData: nl, errors: mn },
      Mo || le.length > 0 ? { fetchers: new Map(s.fetchers) } : {}
    );
  }
  function nt(g) {
    return s.fetchers.get(g) || Cm;
  }
  function Xn(g, S, E, z) {
    if (Pm)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    v.has(g) && br(g);
    let M = dr(t, E, e.basename);
    if (!M) {
      No(g, S, Rt(404, { pathname: E }));
      return;
    }
    let { path: U, submission: F } = xs(E, z, !0),
      H = Ts(M, U);
    if (((k = (z && z.preventScrollReset) === !0), F && ht(F.formMethod))) {
      ft(g, S, U, H, M, F);
      return;
    }
    G.set(g, { routeId: S, path: U, match: H, matches: M }),
      hn(g, S, U, H, M, F);
  }
  async function ft(g, S, E, z, M, U) {
    if ((Ro(), G.delete(g), !z.route.action)) {
      let dt = Rt(405, { method: U.formMethod, pathname: E, routeId: S });
      No(g, S, dt);
      return;
    }
    let F = s.fetchers.get(g),
      H = K({ state: "submitting" }, U, {
        data: F && F.data,
        " _hasFetcherDoneAnything ": !0,
      });
    s.fetchers.set(g, H), ue({ fetchers: new Map(s.fetchers) });
    let O = new AbortController(),
      Ce = ur(e.history, E, O.signal, U);
    v.set(g, O);
    let W = await ir("action", Ce, z, M, m.basename);
    if (Ce.signal.aborted) {
      v.get(g) === O && v.delete(g);
      return;
    }
    if (jn(W)) {
      v.delete(g), T.add(g);
      let dt = K({ state: "loading" }, U, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        s.fetchers.set(g, dt),
        ue({ fetchers: new Map(s.fetchers) }),
        Gn(s, W, { isFetchActionRedirect: !0 })
      );
    }
    if (Er(W)) {
      No(g, S, W.error);
      return;
    }
    if (tn(W)) throw Rt(400, { type: "defer-action" });
    let le = s.navigation.location || s.location,
      Ye = ur(e.history, le, O.signal),
      Xe =
        s.navigation.state !== "idle"
          ? dr(t, s.navigation.location, e.basename)
          : s.matches;
    A(Xe, "Didn't find any matches after fetcher action");
    let Jn = ++C;
    D.set(g, Jn);
    let tl = K({ state: "loading", data: W.data }, U, {
      " _hasFetcherDoneAnything ": !0,
    });
    s.fetchers.set(g, tl);
    let [nl, mn] = Cs(
      e.history,
      s,
      Xe,
      U,
      le,
      d,
      f,
      p,
      { [z.route.id]: W.data },
      void 0,
      G
    );
    mn
      .filter((dt) => dt.key !== g)
      .forEach((dt) => {
        let zo = dt.key,
          aa = s.fetchers.get(zo),
          vd = {
            state: "loading",
            data: aa && aa.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        s.fetchers.set(zo, vd), v.set(zo, O);
      }),
      ue({ fetchers: new Map(s.fetchers) });
    let {
      results: Mo,
      loaderResults: we,
      fetcherResults: rt,
    } = await ra(s.matches, Xe, nl, mn, Ye);
    if (O.signal.aborted) return;
    D.delete(g), v.delete(g), mn.forEach((dt) => v.delete(dt.key));
    let Xt = Ls(Mo);
    if (Xt) return Gn(s, Xt);
    let { loaderData: rl, errors: To } = _s(
        s,
        s.matches,
        nl,
        we,
        void 0,
        mn,
        rt,
        I
      ),
      hd = {
        state: "idle",
        data: W.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    s.fetchers.set(g, hd);
    let md = oa(Jn);
    s.navigation.state === "loading" && Jn > N
      ? (A(y, "Expected pending action"),
        w && w.abort(),
        _(s.navigation.location, {
          matches: Xe,
          loaderData: rl,
          errors: To,
          fetchers: new Map(s.fetchers),
        }))
      : (ue(
          K(
            { errors: To, loaderData: Rs(s.loaderData, rl, Xe, To) },
            md ? { fetchers: new Map(s.fetchers) } : {}
          )
        ),
        (d = !1));
  }
  async function hn(g, S, E, z, M, U) {
    let F = s.fetchers.get(g),
      H = K(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        U,
        { data: F && F.data, " _hasFetcherDoneAnything ": !0 }
      );
    s.fetchers.set(g, H), ue({ fetchers: new Map(s.fetchers) });
    let O = new AbortController(),
      Ce = ur(e.history, E, O.signal);
    v.set(g, O);
    let W = await ir("loader", Ce, z, M, m.basename);
    if (
      (tn(W) && (W = (await ld(W, Ce.signal, !0)) || W),
      v.get(g) === O && v.delete(g),
      Ce.signal.aborted)
    )
      return;
    if (jn(W)) {
      await Gn(s, W);
      return;
    }
    if (Er(W)) {
      let Ye = Ln(s.matches, S);
      s.fetchers.delete(g),
        ue({
          fetchers: new Map(s.fetchers),
          errors: { [Ye.route.id]: W.error },
        });
      return;
    }
    A(!tn(W), "Unhandled fetcher deferred data");
    let le = {
      state: "idle",
      data: W.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    s.fetchers.set(g, le), ue({ fetchers: new Map(s.fetchers) });
  }
  async function Gn(g, S, E) {
    var z;
    let {
      submission: M,
      replace: U,
      isFetchActionRedirect: F,
    } = E === void 0 ? {} : E;
    S.revalidate && (d = !0);
    let H = Br(
      g.location,
      S.location,
      K({ _isRedirect: !0 }, F ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (A(H, "Expected a location on the redirect navigation"),
      ed && typeof ((z = window) == null ? void 0 : z.location) < "u")
    ) {
      let Xe = e.history.createURL(S.location).origin;
      if (window.location.origin !== Xe) {
        U
          ? window.location.replace(S.location)
          : window.location.assign(S.location);
        return;
      }
    }
    w = null;
    let O = U === !0 ? se.Replace : se.Push,
      {
        formMethod: Ce,
        formAction: W,
        formEncType: le,
        formData: Ye,
      } = g.navigation;
    !M &&
      Ce &&
      W &&
      Ye &&
      le &&
      (M = { formMethod: Ce, formAction: W, formEncType: le, formData: Ye }),
      xm.has(S.status) && M && ht(M.formMethod)
        ? await Y(O, H, {
            submission: K({}, M, { formAction: S.location }),
            preventScrollReset: k,
          })
        : await Y(O, H, {
            overrideNavigation: {
              state: "loading",
              location: H,
              formMethod: M ? M.formMethod : void 0,
              formAction: M ? M.formAction : void 0,
              formEncType: M ? M.formEncType : void 0,
              formData: M ? M.formData : void 0,
            },
            preventScrollReset: k,
          });
  }
  async function ra(g, S, E, z, M) {
    let U = await Promise.all([
        ...E.map((O) => ir("loader", M, O, S, m.basename)),
        ...z.map((O) =>
          ir(
            "loader",
            ur(e.history, O.path, M.signal),
            O.match,
            O.matches,
            m.basename
          )
        ),
      ]),
      F = U.slice(0, E.length),
      H = U.slice(E.length);
    return (
      await Promise.all([
        Ds(g, E, F, M.signal, !1, s.loaderData),
        Ds(
          g,
          z.map((O) => O.match),
          H,
          M.signal,
          !0
        ),
      ]),
      { results: U, loaderResults: F, fetcherResults: H }
    );
  }
  function Ro() {
    (d = !0),
      f.push(...Do()),
      G.forEach((g, S) => {
        v.has(S) && (p.push(S), br(S));
      });
  }
  function No(g, S, E) {
    let z = Ln(s.matches, S);
    Lo(g), ue({ errors: { [z.route.id]: E }, fetchers: new Map(s.fetchers) });
  }
  function Lo(g) {
    v.has(g) && br(g),
      G.delete(g),
      D.delete(g),
      T.delete(g),
      s.fetchers.delete(g);
  }
  function br(g) {
    let S = v.get(g);
    A(S, "Expected fetch controller: " + g), S.abort(), v.delete(g);
  }
  function la(g) {
    for (let S of g) {
      let z = {
        state: "idle",
        data: nt(S).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      s.fetchers.set(S, z);
    }
  }
  function cd() {
    let g = [];
    for (let S of T) {
      let E = s.fetchers.get(S);
      A(E, "Expected fetcher: " + S),
        E.state === "loading" && (T.delete(S), g.push(S));
    }
    la(g);
  }
  function oa(g) {
    let S = [];
    for (let [E, z] of D)
      if (z < g) {
        let M = s.fetchers.get(E);
        A(M, "Expected fetcher: " + E),
          M.state === "loading" && (br(E), D.delete(E), S.push(E));
      }
    return la(S), S.length > 0;
  }
  function fd(g, S) {
    let E = s.blockers.get(g) || Es;
    return (
      Ke.get(g) !== S &&
        (Ke.set(g, S),
        re == null
          ? (re = g)
          : g !== re && Wr(!1, "A router only supports one blocker at a time")),
      E
    );
  }
  function Zn(g) {
    s.blockers.delete(g), Ke.delete(g), re === g && (re = null);
  }
  function el(g, S) {
    let E = s.blockers.get(g) || Es;
    A(
      (E.state === "unblocked" && S.state === "blocked") ||
        (E.state === "blocked" && S.state === "blocked") ||
        (E.state === "blocked" && S.state === "proceeding") ||
        (E.state === "blocked" && S.state === "unblocked") ||
        (E.state === "proceeding" && S.state === "unblocked"),
      "Invalid blocker state transition: " + E.state + " -> " + S.state
    ),
      s.blockers.set(g, S),
      ue({ blockers: new Map(s.blockers) });
  }
  function ia(g) {
    let { currentLocation: S, nextLocation: E, historyAction: z } = g;
    if (re == null) return;
    let M = Ke.get(re);
    A(M, "Could not find a function for the active blocker");
    let U = s.blockers.get(re);
    if (
      !(U && U.state === "proceeding") &&
      M({ currentLocation: S, nextLocation: E, historyAction: z })
    )
      return re;
  }
  function Do(g) {
    let S = [];
    return (
      I.forEach((E, z) => {
        (!g || g(z)) && (E.cancel(), S.push(z), I.delete(z));
      }),
      S
    );
  }
  function dd(g, S, E) {
    if (
      ((l = g), (i = S), (o = E || ((z) => z.key)), !u && s.navigation === ui)
    ) {
      u = !0;
      let z = ua(s.location, s.matches);
      z != null && ue({ restoreScrollPosition: z });
    }
    return () => {
      (l = null), (i = null), (o = null);
    };
  }
  function pd(g, S) {
    if (l && o && i) {
      let E = S.map((M) => Ms(M, s.loaderData)),
        z = o(g, E) || g.key;
      l[z] = i();
    }
  }
  function ua(g, S) {
    if (l && o && i) {
      let E = S.map((U) => Ms(U, s.loaderData)),
        z = o(g, E) || g.key,
        M = l[z];
      if (typeof M == "number") return M;
    }
    return null;
  }
  return (
    (m = {
      get basename() {
        return e.basename;
      },
      get state() {
        return s;
      },
      get routes() {
        return t;
      },
      initialize: qr,
      subscribe: Yn,
      enableScrollRestoration: dd,
      navigate: j,
      fetch: Xn,
      revalidate: $,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: nt,
      deleteFetcher: Lo,
      dispose: _o,
      getBlocker: fd,
      deleteBlocker: Zn,
      _internalFetchControllers: v,
      _internalActiveDeferreds: I,
    }),
    m
  );
}
function Rm(e) {
  return e != null && "formData" in e;
}
function xs(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == "string" ? e : st(e);
  if (!t || !Rm(t)) return { path: r };
  if (t.formMethod && !zm(t.formMethod))
    return { path: r, error: Rt(405, { method: t.formMethod }) };
  let l;
  if (
    t.formData &&
    ((l = {
      formMethod: t.formMethod || "get",
      formAction: rd(r),
      formEncType: (t && t.formEncType) || "application/x-www-form-urlencoded",
      formData: t.formData,
    }),
    ht(l.formMethod))
  )
    return { path: r, submission: l };
  let o = Pt(r),
    i = nd(t.formData);
  return (
    n && o.search && od(o.search) && i.append("index", ""),
    (o.search = "?" + i),
    { path: st(o), submission: l }
  );
}
function Nm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Cs(e, t, n, r, l, o, i, u, a, c, h) {
  let m = c ? Object.values(c)[0] : a ? Object.values(a)[0] : void 0,
    s = e.createURL(t.location),
    y = e.createURL(l),
    k = o || s.toString() === y.toString() || s.search !== y.search,
    w = c ? Object.keys(c)[0] : void 0,
    d = Nm(n, w).filter((p, v) => {
      if (p.route.loader == null) return !1;
      if (Lm(t.loaderData, t.matches[v], p) || i.some((D) => D === p.route.id))
        return !0;
      let C = t.matches[v],
        N = p;
      return Ps(
        p,
        K(
          {
            currentUrl: s,
            currentParams: C.params,
            nextUrl: y,
            nextParams: N.params,
          },
          r,
          { actionResult: m, defaultShouldRevalidate: k || td(C, N) }
        )
      );
    }),
    f = [];
  return (
    h &&
      h.forEach((p, v) => {
        if (n.some((C) => C.route.id === p.routeId))
          u.includes(v)
            ? f.push(K({ key: v }, p))
            : Ps(
                p.match,
                K(
                  {
                    currentUrl: s,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: y,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: m, defaultShouldRevalidate: k }
                )
              ) && f.push(K({ key: v }, p));
        else return;
      }),
    [d, f]
  );
}
function Lm(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function td(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ps(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function ir(e, t, n, r, l, o, i, u) {
  l === void 0 && (l = "/"), o === void 0 && (o = !1), i === void 0 && (i = !1);
  let a,
    c,
    h,
    m = new Promise((y, k) => (h = k)),
    s = () => h();
  t.signal.addEventListener("abort", s);
  try {
    let y = n.route[e];
    A(
      y,
      "Could not find the " + e + ' to run on the "' + n.route.id + '" route'
    ),
      (c = await Promise.race([
        y({ request: t, params: n.params, context: u }),
        m,
      ])),
      A(
        c !== void 0,
        "You defined " +
          (e === "action" ? "an action" : "a loader") +
          " for route " +
          ('"' +
            n.route.id +
            "\" but didn't return anything from your `" +
            e +
            "` ") +
          "function. Please return a value or `null`."
      );
  } catch (y) {
    (a = ve.error), (c = y);
  } finally {
    t.signal.removeEventListener("abort", s);
  }
  if (Tm(c)) {
    let y = c.status;
    if (Em.has(y)) {
      let P = c.headers.get("Location");
      if (
        (A(
          P,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(P))
      ) {
        if (!o) {
          let f = new URL(t.url),
            p = P.startsWith("//") ? new URL(f.protocol + P) : new URL(P);
          p.origin === f.origin && (P = p.pathname + p.search + p.hash);
        }
      } else {
        let f = r.slice(0, r.indexOf(n) + 1),
          p = xo(f).map((C) => C.pathnameBase),
          v = bu(P, p, new URL(t.url).pathname);
        if ((A(st(v), "Unable to resolve redirect location: " + P), l)) {
          let C = v.pathname;
          v.pathname = C === "/" ? l : wt([l, C]);
        }
        P = st(v);
      }
      if (o) throw (c.headers.set("Location", P), c);
      return {
        type: ve.redirect,
        status: y,
        location: P,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (i) throw { type: a || ve.data, response: c };
    let k,
      w = c.headers.get("Content-Type");
    return (
      w && /\bapplication\/json\b/.test(w)
        ? (k = await c.json())
        : (k = await c.text()),
      a === ve.error
        ? { type: a, error: new ea(y, c.statusText, k), headers: c.headers }
        : { type: ve.data, data: k, statusCode: c.status, headers: c.headers }
    );
  }
  return a === ve.error
    ? { type: a, error: c }
    : c instanceof vm
    ? { type: ve.deferred, deferredData: c }
    : { type: ve.data, data: c };
}
function ur(e, t, n, r) {
  let l = e.createURL(rd(t)).toString(),
    o = { signal: n };
  if (r && ht(r.formMethod)) {
    let { formMethod: i, formEncType: u, formData: a } = r;
    (o.method = i.toUpperCase()),
      (o.body = u === "application/x-www-form-urlencoded" ? nd(a) : a);
  }
  return new Request(l, o);
}
function nd(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function Dm(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    c = {};
  return (
    n.forEach((h, m) => {
      let s = t[m].route.id;
      if (
        (A(!jn(h), "Cannot handle redirect results in processLoaderData"),
        Er(h))
      ) {
        let y = Ln(e, s),
          k = h.error;
        r && ((k = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[y.route.id] == null && (i[y.route.id] = k),
          (o[s] = void 0),
          a || ((a = !0), (u = qf(h.error) ? h.error.status : 500)),
          h.headers && (c[s] = h.headers);
      } else
        tn(h)
          ? (l.set(s, h.deferredData), (o[s] = h.deferredData.data))
          : (o[s] = h.data),
          h.statusCode != null &&
            h.statusCode !== 200 &&
            !a &&
            (u = h.statusCode),
          h.headers && (c[s] = h.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: c }
  );
}
function _s(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: c } = Dm(t, n, r, l, u);
  for (let h = 0; h < o.length; h++) {
    let { key: m, match: s } = o[h];
    A(
      i !== void 0 && i[h] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = i[h];
    if (Er(y)) {
      let k = Ln(e.matches, s.route.id);
      (c && c[k.route.id]) || (c = K({}, c, { [k.route.id]: y.error })),
        e.fetchers.delete(m);
    } else if (jn(y)) A(!1, "Unhandled fetcher revalidation redirect");
    else if (tn(y)) A(!1, "Unhandled fetcher deferred data");
    else {
      let k = {
        state: "idle",
        data: y.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      e.fetchers.set(m, k);
    }
  }
  return { loaderData: a, errors: c };
}
function Rs(e, t, n, r) {
  let l = K({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Ln(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ns(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Rt(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action" && (u = "defer() is not supported in actions"))
      : e === 403
      ? ((i = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (u =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ea(e || 500, i, new Error(u), !0)
  );
}
function Ls(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (jn(n)) return n;
  }
}
function rd(e) {
  let t = typeof e == "string" ? Pt(e) : e;
  return st(K({}, t, { hash: "" }));
}
function Mm(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function tn(e) {
  return e.type === ve.deferred;
}
function Er(e) {
  return e.type === ve.error;
}
function jn(e) {
  return (e && e.type) === ve.redirect;
}
function Tm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function zm(e) {
  return km.has(e);
}
function ht(e) {
  return wm.has(e);
}
async function Ds(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i],
      c = e.find((m) => m.route.id === a.route.id),
      h = c != null && !td(c, a) && (o && o[a.route.id]) !== void 0;
    tn(u) &&
      (l || h) &&
      (await ld(u, r, l).then((m) => {
        m && (n[i] = m || n[i]);
      }));
  }
}
async function ld(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ve.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ve.error, error: l };
      }
    return { type: ve.data, data: e.deferredData.data };
  }
}
function od(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ms(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Ts(e, t) {
  let n = typeof t == "string" ? Pt(t).search : t.search;
  if (e[e.length - 1].route.index && od(n || "")) return e[e.length - 1];
  let r = xo(e);
  return r[r.length - 1];
}
/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ro() {
  return (
    (ro = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ro.apply(this, arguments)
  );
}
function Om(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Fm = typeof Object.is == "function" ? Object.is : Om,
  { useState: jm, useEffect: Im, useLayoutEffect: Um, useDebugValue: Am } = si;
function $m(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = jm({ inst: { value: r, getSnapshot: t } });
  return (
    Um(() => {
      (l.value = r), (l.getSnapshot = t), ai(l) && o({ inst: l });
    }, [e, r, t]),
    Im(
      () => (
        ai(l) && o({ inst: l }),
        e(() => {
          ai(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    Am(r),
    r
  );
}
function ai(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Fm(n, r);
  } catch {
    return !0;
  }
}
function Bm(e, t, n) {
  return t();
}
const Wm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Hm = !Wm,
  Vm = Hm ? Bm : $m,
  Qm = "useSyncExternalStore" in si ? ((e) => e.useSyncExternalStore)(si) : Vm,
  ta = R.createContext(null),
  Co = R.createContext(null),
  Gr = R.createContext(null),
  Po = R.createContext(null),
  dn = R.createContext({ outlet: null, matches: [] }),
  id = R.createContext(null);
function Km(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zr() || A(!1);
  let { basename: r, navigator: l } = R.useContext(Gr),
    { hash: o, pathname: i, search: u } = na(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : wt([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function Zr() {
  return R.useContext(Po) != null;
}
function Jr() {
  return Zr() || A(!1), R.useContext(Po).location;
}
function Ym() {
  Zr() || A(!1);
  let { basename: e, navigator: t } = R.useContext(Gr),
    { matches: n } = R.useContext(dn),
    { pathname: r } = Jr(),
    l = JSON.stringify(xo(n).map((u) => u.pathnameBase)),
    o = R.useRef(!1);
  return (
    R.useEffect(() => {
      o.current = !0;
    }),
    R.useCallback(
      function (u, a) {
        if ((a === void 0 && (a = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let c = bu(u, JSON.parse(l), r, a.relative === "path");
        e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : wt([e, c.pathname])),
          (a.replace ? t.replace : t.push)(c, a.state, a);
      },
      [e, t, l, r]
    )
  );
}
const Xm = R.createContext(null);
function Gm(e) {
  let t = R.useContext(dn).outlet;
  return t && R.createElement(Xm.Provider, { value: e }, t);
}
function na(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = R.useContext(dn),
    { pathname: l } = Jr(),
    o = JSON.stringify(xo(r).map((i) => i.pathnameBase));
  return R.useMemo(() => bu(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Zm(e, t) {
  Zr() || A(!1);
  let { navigator: n } = R.useContext(Gr),
    r = R.useContext(Co),
    { matches: l } = R.useContext(dn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Jr(),
    c;
  if (t) {
    var h;
    let w = typeof t == "string" ? Pt(t) : t;
    u === "/" || ((h = w.pathname) != null && h.startsWith(u)) || A(!1),
      (c = w);
  } else c = a;
  let m = c.pathname || "/",
    s = u === "/" ? m : m.slice(u.length) || "/",
    y = dr(e, { pathname: s }),
    k = ev(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, i, w.params),
            pathname: wt([
              u,
              n.encodeLocation
                ? n.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? u
                : wt([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && k
    ? R.createElement(
        Po.Provider,
        {
          value: {
            location: ro(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: se.Pop,
          },
        },
        k
      )
    : k;
}
function Jm() {
  let e = lv(),
    t = qf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: l }, n) : null,
    o
  );
}
class qm extends R.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? R.createElement(
          dn.Provider,
          { value: this.props.routeContext },
          R.createElement(id.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function bm(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = R.useContext(ta);
  return (
    l &&
      l.static &&
      l.staticContext &&
      n.route.errorElement &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(dn.Provider, { value: t }, r)
  );
}
function ev(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id])
    );
    o >= 0 || A(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let a = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      c = n ? i.route.errorElement || R.createElement(Jm, null) : null,
      h = t.concat(r.slice(0, u + 1)),
      m = () =>
        R.createElement(
          bm,
          { match: i, routeContext: { outlet: o, matches: h } },
          a ? c : i.route.element !== void 0 ? i.route.element : o
        );
    return n && (i.route.errorElement || u === 0)
      ? R.createElement(qm, {
          location: n.location,
          component: c,
          error: a,
          children: m(),
          routeContext: { outlet: null, matches: h },
        })
      : m();
  }, null);
}
var zs;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(zs || (zs = {}));
var lo;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(lo || (lo = {}));
function tv(e) {
  let t = R.useContext(Co);
  return t || A(!1), t;
}
function nv(e) {
  let t = R.useContext(dn);
  return t || A(!1), t;
}
function rv(e) {
  let t = nv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || A(!1), n.route.id;
}
function lv() {
  var e;
  let t = R.useContext(id),
    n = tv(lo.UseRouteError),
    r = rv(lo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ov(e) {
  let { fallbackElement: t, router: n } = e,
    r = Qm(
      n.subscribe,
      () => n.state,
      () => n.state
    ),
    l = R.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (i) => n.navigate(i),
        push: (i, u, a) =>
          n.navigate(i, {
            state: u,
            preventScrollReset: a == null ? void 0 : a.preventScrollReset,
          }),
        replace: (i, u, a) =>
          n.navigate(i, {
            replace: !0,
            state: u,
            preventScrollReset: a == null ? void 0 : a.preventScrollReset,
          }),
      }),
      [n]
    ),
    o = n.basename || "/";
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      ta.Provider,
      { value: { router: n, navigator: l, static: !1, basename: o } },
      R.createElement(
        Co.Provider,
        { value: r },
        R.createElement(
          uv,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: l,
          },
          n.state.initialized ? R.createElement(av, null) : t
        )
      )
    ),
    null
  );
}
function iv(e) {
  return Gm(e.context);
}
function Jt(e) {
  A(!1);
}
function uv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = se.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Zr() && A(!1);
  let u = t.replace(/^\/*/, "/"),
    a = R.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = Pt(r));
  let {
      pathname: c = "/",
      search: h = "",
      hash: m = "",
      state: s = null,
      key: y = "default",
    } = r,
    k = R.useMemo(() => {
      let w = Jf(c, u);
      return w == null
        ? null
        : { pathname: w, search: h, hash: m, state: s, key: y };
    }, [u, c, h, m, s, y]);
  return k == null
    ? null
    : R.createElement(
        Gr.Provider,
        { value: a },
        R.createElement(Po.Provider, {
          children: n,
          value: { location: k, navigationType: l },
        })
      );
}
function av(e) {
  let { children: t, location: n } = e,
    r = R.useContext(ta),
    l = r && !t ? r.router.routes : oo(t);
  return Zm(l, n);
}
var Os;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Os || (Os = {}));
new Promise(() => {});
function oo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    R.Children.forEach(e, (r, l) => {
      if (!R.isValidElement(r)) return;
      if (r.type === R.Fragment) {
        n.push.apply(n, oo(r.props.children, t));
        return;
      }
      r.type !== Jt && A(!1), !r.props.index || !r.props.children || A(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (i.children = oo(r.props.children, o)), n.push(i);
    }),
    n
  );
}
function ud(e) {
  return e.map((t) => {
    let n = ro({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = ud(n.children)),
      n
    );
  });
}
/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hr() {
  return (
    (Hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hr.apply(this, arguments)
  );
}
function ad(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function sv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function cv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !sv(e);
}
const fv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  dv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function pv(e, t) {
  return _m({
    basename: t == null ? void 0 : t.basename,
    history: Yh({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || hv(),
    routes: ud(e),
  }).initialize();
}
function hv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Hr({}, t, { errors: mv(t.errors) })), t;
}
function mv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new ea(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      let o = new Error(l.message);
      (o.stack = ""), (n[r] = o);
    } else n[r] = l;
  return n;
}
const vv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  gv = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: c,
        preventScrollReset: h,
      } = t,
      m = ad(t, fv),
      s = typeof c == "string" ? c : st(c),
      y = /^[a-z+]+:\/\//i.test(s) || s.startsWith("//"),
      k = s,
      w = !1;
    if (vv && y) {
      let p = new URL(window.location.href),
        v = s.startsWith("//") ? new URL(p.protocol + s) : new URL(s);
      v.origin === p.origin ? (k = v.pathname + v.search + v.hash) : (w = !0);
    }
    let P = Km(k, { relative: l }),
      d = yv(k, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: h,
        relative: l,
      });
    function f(p) {
      r && r(p), p.defaultPrevented || d(p);
    }
    return R.createElement(
      "a",
      Hr({}, m, { href: y ? s : P, onClick: w || o ? r : f, ref: n, target: a })
    );
  }),
  Fs = R.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: u,
        to: a,
        children: c,
      } = t,
      h = ad(t, dv),
      m = na(a, { relative: h.relative }),
      s = Jr(),
      y = R.useContext(Co),
      { navigator: k } = R.useContext(Gr),
      w = k.encodeLocation ? k.encodeLocation(m).pathname : m.pathname,
      P = s.pathname,
      d =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    l ||
      ((P = P.toLowerCase()),
      (d = d ? d.toLowerCase() : null),
      (w = w.toLowerCase()));
    let f = P === w || (!i && P.startsWith(w) && P.charAt(w.length) === "/"),
      p =
        d != null &&
        (d === w || (!i && d.startsWith(w) && d.charAt(w.length) === "/")),
      v = f ? r : void 0,
      C;
    typeof o == "function"
      ? (C = o({ isActive: f, isPending: p }))
      : (C = [o, f ? "active" : null, p ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let N = typeof u == "function" ? u({ isActive: f, isPending: p }) : u;
    return R.createElement(
      gv,
      Hr({}, h, { "aria-current": v, className: C, ref: n, style: N, to: a }),
      typeof c == "function" ? c({ isActive: f, isPending: p }) : c
    );
  });
var js;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(js || (js = {}));
var Is;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Is || (Is = {}));
function yv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Ym(),
    a = Jr(),
    c = na(e, { relative: i });
  return R.useCallback(
    (h) => {
      if (cv(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : st(a) === st(c);
        u(e, { replace: m, state: l, preventScrollReset: o, relative: i });
      }
    },
    [a, u, c, r, l, n, e, o, i]
  );
}
function wv() {
  return Q("h1", { children: "This is the Creative page" });
}
function Sv() {
  return Q("h1", { children: "This is the Philosophy page." });
}
const kv = "/assets/me-9efcb9d4.png";
function Ev() {
  return Ot(Wd, {
    children: [
      Q("header", {
        children: Ot("p", {
          className: "text-center font-bold text-3xl",
          children: [
            "Hi, my name is ",
            Q("span", {
              className: "text-5xl text-zinc-500",
              children: "Saar Paz.",
            }),
          ],
        }),
      }),
      Ot("section", {
        className:
          "flex justify-evenly text-justify align-middle max-h-min mx-20 mt-5 border-8 border-onPrimaryBg p-10 gap-10 max-xl:flex-col max-xl:items-center",
        children: [
          Q("img", {
            className: "h-96 w-96 rounded-full object-contain",
            src: kv,
            alt: "profile picture",
          }),
          Q("p", {
            className: "w-3/4 text-xl self-center	max-h-96 break-words",
            children:
              "Enthusiastic web developer and problem solver. Certified programmer and PC technician. Skilled in Javascript, ECMAScript ,TypeScript, React, Node.js, Redux, CSS, HTML, Python... Experience in functional, OOP, State-oriented programming. Working today as a web developer on a React-Node.js based online website editor. Fast learner, autodidact, passionate for knowledge and analytical thinking. People’s person. Has past in Solidity, Arduino and Python projects.",
          }),
        ],
      }),
    ],
  });
}
function xv() {
  return Q("h1", { children: "This is the Developer page." });
}
function Cv() {
  let e = { textDecoration: "underline" };
  return Q("nav", {
    className: "relative container mx-auto p-6",
    children: Ot("ul", {
      className: "flex items-center justify-between",
      children: [
        Q("li", {
          className: "mr-auto",
          children: Q("h1", {
            children: Ot(Fs, {
              className:
                "mx-auto bg-neutralBg text-onNeutralBg border-8 border-onNeutralBg p-2 max-w-lg",
              to: "/",
              children: [
                Q("span", {
                  className: "fas fa-code pr-3",
                  "aria-hidden": "true",
                }),
                Q("span", { children: "Saar Paz" }),
              ],
            }),
          }),
        }),
        [
          ["Home", "/"],
          ["Developer", "/developer"],
          ["Philosopher", "/philosopher"],
          ["Creator", "/creator"],
        ].map(([t, n]) =>
          Q(
            "li",
            {
              children: Q(Fs, {
                className: "mx-1 ",
                to: n,
                style: ({ isActive: r }) => (r ? e : void 0),
                children: t,
              }),
            },
            t
          )
        ),
      ],
    }),
  });
}
const sd = ["green", "red", "blue"],
  Pv = ["light", "dark"],
  _v = {
    blue: "bg-blue-600 hover:bg-blue-500",
    red: "bg-red-600 hover:bg-red-500",
    green: "bg-green-600 hover:bg-green-500",
  };
function Rv({
  changeColor: e,
  selectedColor: t,
  changeMode: n,
  selectedMode: r,
}) {
  const l = () => {
    n(r === "light" ? "dark" : "light");
  };
  return Ot("div", {
    className: "absolute ml-0 mt-40",
    children: [
      sd.map((o) => {
        const i = t === o ? "border-4 border-black border-double" : null;
        return Q(
          "span",
          {
            className: `block h-10 w-10 cursor-pointer ${_v[o]} ${i}`,
            onClick: () => e(o),
          },
          o
        );
      }),
      Q("span", {
        className:
          "bg-onNeutralBg h-6 w-10 rounded-full relative inline-flex items-center",
        onClick: l,
        children: Q("span", {
          className: `h-4 w-4 bg-neutralBg rounded-full block ${
            r === "light"
              ? "translate-x-1"
              : r === "dark"
              ? "translate-x-5"
              : null
          }`,
        }),
      }),
    ],
  });
}
const Nv = { dark: "theme-dark", light: "theme-light" };
function Lv() {
  const [e, t] = R.useState(sd[0]),
    [n, r] = R.useState(Pv[0]);
  return Ot("div", {
    className: [
      "font-mono bg-primaryBg h-screen",
      e && `theme-${e}`,
      n && Nv[n],
    ]
      .filter(Boolean)
      .join(" "),
    children: [
      Q(Rv, {
        changeColor: t,
        selectedColor: e,
        changeMode: r,
        selectedMode: n,
      }),
      Q(Cv, {}),
      Q(iv, {}),
    ],
  });
}
const Dv = pv(
  oo(
    Q(Jt, {
      path: "/",
      element: Q(Lv, {}),
      children: Ot(Jt, {
        children: [
          Q(Jt, { index: !0, element: Q(Ev, {}) }),
          Q(Jt, { path: "developer", element: Q(xv, {}) }),
          Q(Jt, { path: "philosopher", element: Q(Sv, {}) }),
          Q(Jt, { path: "creator", element: Q(wv, {}) }),
        ],
      }),
    })
  )
);
ci.createRoot(document.getElementById("root")).render(
  Q(Qs.StrictMode, { children: Q(ov, { router: Dv }) })
);
