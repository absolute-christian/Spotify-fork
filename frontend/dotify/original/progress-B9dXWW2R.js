// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { R as e, c as t, j as n, r } from "./vendor-ui-BwX-1h7U.js";
import { k as s } from "./globals-Bc3qFUyf.js";
const a = e.memo(function (e2) {
    const r2 = t.c(34),
      {
        variant: a2,
        mode: o2,
        marquee: l2,
        truncate: i2,
        text: m2,
        title: d2,
        children: f2,
        className: v,
        containerClassName: h,
        style: k,
        isParentHovered: x,
        hoverScope: p,
        fadeWidth: b,
        speedMsPerPx: y,
        minDurationMs: g,
        durationSec: N,
        gapClassName: w,
        playOnHover: S,
        forceActive: j,
        direction: W,
        centerWhenIdle: M,
        onClick: L
      } = e2,
      C = void 0 === v ? "" : v,
      E = void 0 === h ? "" : h,
      $ = void 0 !== x && x,
      R = void 0 === b ? 14 : b,
      _ = void 0 === y ? 18 : y,
      I = void 0 === g ? 1e3 : g,
      P = void 0 === N ? 8 : N,
      z = void 0 === w ? "ml-8" : w,
      H = void 0 !== S && S,
      D = void 0 !== j && j,
      O = void 0 === W ? "left" : W,
      T = void 0 !== M && M,
      q = a2 || o2 || (l2 ? "marquee" : i2 ? "truncate" : "scrollable"),
      X = null != f2 ? f2 : m2;
    if ("truncate" === q) {
      let e3, t2;
      return r2[0] !== C || r2[1] !== E ? (e3 = s("block truncate min-w-0", E, C), r2[0] = C, r2[1] = E, r2[2] = e3) : e3 = r2[2], r2[3] !== X || r2[4] !== L || r2[5] !== k || r2[6] !== e3 ? (t2 = n.jsx("span", {
        className: e3,
        style: k,
        onClick: L,
        children: X
      }), r2[3] = X, r2[4] = L, r2[5] = k, r2[6] = e3, r2[7] = t2) : t2 = r2[7], t2;
    }
    if ("marquee" === q) {
      const e3 = L;
      let t2;
      return r2[8] !== T || r2[9] !== C || r2[10] !== E || r2[11] !== X || r2[12] !== O || r2[13] !== P || r2[14] !== D || r2[15] !== z || r2[16] !== p || r2[17] !== H || r2[18] !== e3 || r2[19] !== m2 || r2[20] !== d2 ? (t2 = n.jsx(u, {
        title: d2,
        text: m2,
        className: C,
        containerClassName: E,
        durationSec: P,
        gapClassName: z,
        playOnHover: H,
        forceActive: D,
        direction: O,
        centerWhenIdle: T,
        hoverScope: p,
        onClick: e3,
        children: X
      }), r2[8] = T, r2[9] = C, r2[10] = E, r2[11] = X, r2[12] = O, r2[13] = P, r2[14] = D, r2[15] = z, r2[16] = p, r2[17] = H, r2[18] = e3, r2[19] = m2, r2[20] = d2, r2[21] = t2) : t2 = r2[21], t2;
    }
    let A;
    return r2[22] !== C || r2[23] !== E || r2[24] !== X || r2[25] !== R || r2[26] !== p || r2[27] !== $ || r2[28] !== I || r2[29] !== L || r2[30] !== _ || r2[31] !== k || r2[32] !== d2 ? (A = n.jsx(c, {
      title: d2,
      className: C,
      containerClassName: E,
      style: k,
      isParentHovered: $,
      hoverScope: p,
      fadeWidth: R,
      speedMsPerPx: _,
      minDurationMs: I,
      onClick: L,
      children: X
    }), r2[22] = C, r2[23] = E, r2[24] = X, r2[25] = R, r2[26] = p, r2[27] = $, r2[28] = I, r2[29] = L, r2[30] = _, r2[31] = k, r2[32] = d2, r2[33] = A) : A = r2[33], A;
  }),
  o = new WeakMap();
let l = null;
function i(e2, t2) {
  if ("undefined" == typeof ResizeObserver) return () => {};
  null != l || (l = new ResizeObserver(e3 => {
    const t3 = new Set();
    for (const n2 of e3) if (n2.contentRect.width > 0) {
      const e4 = o.get(n2.target);
      e4 && t3.add(e4);
    }
    t3.forEach(e4 => e4());
  }));
  for (const n2 of e2) n2 && (o.set(n2, t2), l.observe(n2));
  return () => {
    for (const t3 of e2) t3 && (o.delete(t3), null == l || l.unobserve(t3));
  };
}
const c = e.memo(function (e2) {
    const a2 = t.c(37),
      {
        children: o2,
        className: l2,
        containerClassName: c2,
        style: u2,
        isParentHovered: m2,
        hoverScope: d2,
        fadeWidth: f2,
        speedMsPerPx: v,
        minDurationMs: h,
        onClick: k
      } = e2,
      x = r.useRef(null),
      p = r.useRef(null),
      [b, y] = r.useState(0),
      [g, N] = r.useState(false),
      [w, S] = r.useState(false);
    let j;
    a2[0] === Symbol.for("react.memo_cache_sentinel") ? (j = () => {
      if (!x.current || !p.current || 0 === x.current.clientWidth) return;
      const e3 = p.current.scrollWidth - x.current.clientWidth;
      y(Math.max(0, e3));
    }, a2[0] = j) : j = a2[0];
    const W = j,
      M = m2 || g || w;
    let L, C, E, $, R, _, I;
    a2[1] === Symbol.for("react.memo_cache_sentinel") ? (L = () => (W(), i([x.current, p.current], W)), a2[1] = L) : L = a2[1], a2[2] !== o2 ? (C = [W, o2], a2[2] = o2, a2[3] = C) : C = a2[3], r.useLayoutEffect(L, C), a2[4] !== d2 ? (E = () => {
      var e3;
      const t2 = d2 ? null == (e3 = x.current) ? void 0 : e3.closest(d2) : null;
      if (!t2) return;
      let n2 = null;
      const r2 = () => {
          n2 && clearTimeout(n2), n2 = setTimeout(() => {
            n2 = null, W(), S(true);
          }, 150);
        },
        s2 = () => {
          n2 && clearTimeout(n2), n2 = null, S(false);
        };
      return t2.addEventListener("mouseenter", r2), t2.addEventListener("mouseleave", s2), t2.matches(":hover") && r2(), () => {
        n2 && clearTimeout(n2), t2.removeEventListener("mouseenter", r2), t2.removeEventListener("mouseleave", s2);
      };
    }, $ = [d2, W], a2[4] = d2, a2[5] = E, a2[6] = $) : (E = a2[5], $ = a2[6]), r.useEffect(E, $), a2[7] !== m2 ? (R = () => {
      m2 && W();
    }, _ = [m2, W], a2[7] = m2, a2[8] = R, a2[9] = _) : (R = a2[8], _ = a2[9]), r.useEffect(R, _);
    e: {
      if (b <= 0) {
        let e4;
        a2[10] === Symbol.for("react.memo_cache_sentinel") ? (e4 = {}, a2[10] = e4) : e4 = a2[10], I = e4;
        break e;
      }
      const e3 = `${f2}px`;
      if (M) {
        const t3 = `linear-gradient(to right, transparent 0px, black ${e3}, black calc(100% - ${e3}), transparent 100%)`;
        let n3;
        a2[11] !== t3 ? (n3 = {
          maskImage: t3,
          WebkitMaskImage: t3,
          transition: "mask-image 200ms ease, -webkit-mask-image 200ms ease"
        }, a2[11] = t3, a2[12] = n3) : n3 = a2[12], I = n3;
        break e;
      }
      const t2 = `linear-gradient(to right, black 0px, black calc(100% - ${e3}), transparent 100%)`;
      let n2;
      a2[13] !== t2 ? (n2 = {
        maskImage: t2,
        WebkitMaskImage: t2,
        transition: "mask-image 200ms ease, -webkit-mask-image 200ms ease"
      }, a2[13] = t2, a2[14] = n2) : n2 = a2[14], I = n2;
    }
    const P = I;
    let z, H, D, O;
    a2[15] !== c2 ? (z = s("relative flex min-w-0 overflow-hidden text-left [&.text-center]:justify-center", c2), a2[15] = c2, a2[16] = z) : z = a2[16], a2[17] !== P || a2[18] !== u2 ? (H = {
      ...u2,
      ...P
    }, a2[17] = P, a2[18] = u2, a2[19] = H) : H = a2[19], a2[20] === Symbol.for("react.memo_cache_sentinel") ? (D = () => {
      W(), N(true);
    }, O = () => N(false), a2[20] = D, a2[21] = O) : (D = a2[20], O = a2[21]);
    const T = M && b > 0 && "will-change-transform";
    let q;
    a2[22] !== l2 || a2[23] !== T ? (q = s("block shrink-0 whitespace-nowrap", T, l2), a2[22] = l2, a2[23] = T, a2[24] = q) : q = a2[24];
    const X = M && b > 0 ? `translateX(-${b + 4}px)` : "translateX(0)",
      A = M ? `transform ${Math.max(h, b * v)}ms linear` : "transform 750ms cubic-bezier(0.16, 1, 0.3, 1)";
    let B, F, G;
    return a2[25] !== X || a2[26] !== A ? (B = {
      transform: X,
      transition: A
    }, a2[25] = X, a2[26] = A, a2[27] = B) : B = a2[27], a2[28] !== o2 || a2[29] !== q || a2[30] !== B ? (F = n.jsx("span", {
      ref: p,
      className: q,
      style: B,
      children: o2
    }), a2[28] = o2, a2[29] = q, a2[30] = B, a2[31] = F) : F = a2[31], a2[32] !== k || a2[33] !== H || a2[34] !== F || a2[35] !== z ? (G = n.jsx("span", {
      ref: x,
      className: z,
      style: H,
      onClick: k,
      onMouseEnter: D,
      onMouseLeave: O,
      children: F
    }), a2[32] = k, a2[33] = H, a2[34] = F, a2[35] = z, a2[36] = G) : G = a2[36], G;
  }),
  u = e.memo(function (e2) {
    const a2 = t.c(52),
      {
        children: o2,
        className: l2,
        containerClassName: c2,
        durationSec: u2,
        gapClassName: m2,
        playOnHover: d2,
        forceActive: f2,
        direction: v,
        centerWhenIdle: h,
        hoverScope: k,
        onClick: x
      } = e2,
      p = void 0 === u2 ? 8 : u2,
      b = void 0 === m2 ? "ml-8" : m2,
      y = void 0 !== d2 && d2,
      g = void 0 !== f2 && f2,
      N = void 0 === v ? "left" : v,
      w = void 0 !== h && h,
      S = r.useRef(null),
      j = r.useRef(null),
      W = r.useRef(null),
      [M, L] = r.useState(false),
      [C, E] = r.useState(false),
      [$, R] = r.useState(false),
      [_, I] = r.useState(false),
      P = r.useRef(0),
      z = r.useRef(false),
      H = r.useRef(0),
      D = M && (!y || C || g || $);
    let O, T, q, X, A;
    a2[0] !== p || a2[1] !== D ? (O = () => {
      if (D) return P.current = performance.now(), z.current = true, void I(false);
      if (!z.current) return;
      z.current = false;
      const e3 = 1e3 * p;
      H.current = (performance.now() - P.current) % e3 / e3, I(true);
    }, T = [D, p], a2[0] = p, a2[1] = D, a2[2] = O, a2[3] = T) : (O = a2[2], T = a2[3]), r.useLayoutEffect(O, T), a2[4] !== N || a2[5] !== _ ? (X = () => {
      const e3 = j.current;
      if (!_ || !e3) return;
      const t2 = e3.offsetWidth / 2,
        n2 = "left" === N ? H.current : 1 - H.current,
        r2 = -n2 * t2,
        s2 = n2 > 0.5 ? -t2 : 0,
        a3 = e3.animate([{
          transform: `translateX(${r2}px)`
        }, {
          transform: `translateX(${s2}px)`
        }], {
          duration: Math.min(700, Math.max(260, 3 * Math.abs(s2 - r2))),
          easing: "cubic-bezier(0.16, 1, 0.3, 1)"
        });
      return a3.onfinish = () => I(false), () => a3.cancel();
    }, q = [_, N], a2[4] = N, a2[5] = _, a2[6] = q, a2[7] = X) : (q = a2[6], X = a2[7]), r.useLayoutEffect(X, q), a2[8] === Symbol.for("react.memo_cache_sentinel") ? (A = () => {
      if (!S.current || !W.current) return;
      const e3 = W.current.scrollWidth,
        t2 = S.current.clientWidth;
      if (0 === t2) return;
      const n2 = e3 > t2 + 2;
      L(e4 => e4 === n2 ? e4 : n2);
    }, a2[8] = A) : A = a2[8];
    const B = A;
    let F, G, J, K;
    a2[9] !== k ? (F = () => {
      var e3;
      const t2 = k ? null == (e3 = S.current) ? void 0 : e3.closest(k) : null;
      if (!t2) return;
      const n2 = () => {
          B(), R(true);
        },
        r2 = () => R(false);
      return t2.addEventListener("mouseenter", n2), t2.addEventListener("mouseleave", r2), t2.matches(":hover") && n2(), () => {
        t2.removeEventListener("mouseenter", n2), t2.removeEventListener("mouseleave", r2);
      };
    }, G = [k, B], a2[9] = k, a2[10] = F, a2[11] = G) : (F = a2[10], G = a2[11]), r.useEffect(F, G), a2[12] === Symbol.for("react.memo_cache_sentinel") ? (J = () => (B(), i([S.current, W.current], B)), a2[12] = J) : J = a2[12], a2[13] !== o2 ? (K = [B, o2], a2[13] = o2, a2[14] = K) : K = a2[14], r.useLayoutEffect(J, K);
    const Q = w && !D && "justify-center";
    let U;
    a2[15] !== c2 || a2[16] !== Q ? (U = s("max-w-full min-w-0 relative overflow-x-hidden overflow-y-visible flex items-center", Q, c2), a2[15] = c2, a2[16] = Q, a2[17] = U) : U = a2[17];
    const V = y && M ? 0 : void 0;
    let Y, Z, ee, te, ne, re;
    a2[18] !== y ? (Y = () => {
      B(), y && E(true);
    }, Z = y ? () => E(false) : void 0, a2[18] = y, a2[19] = Y, a2[20] = Z) : (Y = a2[19], Z = a2[20]), a2[21] !== y ? (ee = () => {
      B(), y && E(true);
    }, te = y ? () => E(false) : void 0, a2[21] = y, a2[22] = ee, a2[23] = te) : (ee = a2[22], te = a2[23]), a2[24] !== M ? (ne = M ? {
      WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 98%)",
      maskImage: "linear-gradient(to right, black 80%, transparent 98%)"
    } : void 0, a2[24] = M, a2[25] = ne) : ne = a2[25], a2[26] !== l2 ? (re = s("whitespace-nowrap flex items-center", l2), a2[26] = l2, a2[27] = re) : re = a2[27];
    const se = D ? `smooth-scroll-${N} ${p}s linear infinite` : void 0;
    let ae, oe, le, ie, ce;
    return a2[28] !== se ? (ae = {
      animation: se
    }, a2[28] = se, a2[29] = ae) : ae = a2[29], a2[30] !== o2 ? (oe = n.jsx("span", {
      ref: W,
      className: "inline-block",
      children: o2
    }), a2[30] = o2, a2[31] = oe) : oe = a2[31], a2[32] !== o2 || a2[33] !== b || a2[34] !== _ || a2[35] !== D ? (le = (D || _) && n.jsxs(n.Fragment, {
      children: [n.jsx("span", {
        className: b,
        children: o2
      }), n.jsx("span", {
        "aria-hidden": true,
        className: b
      })]
    }), a2[32] = o2, a2[33] = b, a2[34] = _, a2[35] = D, a2[36] = le) : le = a2[36], a2[37] !== re || a2[38] !== ae || a2[39] !== oe || a2[40] !== le ? (ie = n.jsxs("div", {
      ref: j,
      className: re,
      style: ae,
      children: [oe, le]
    }), a2[37] = re, a2[38] = ae, a2[39] = oe, a2[40] = le, a2[41] = ie) : ie = a2[41], a2[42] !== x || a2[43] !== U || a2[44] !== V || a2[45] !== Y || a2[46] !== Z || a2[47] !== ee || a2[48] !== te || a2[49] !== ne || a2[50] !== ie ? (ce = n.jsx("div", {
      ref: S,
      className: U,
      tabIndex: V,
      onClick: x,
      onMouseEnter: Y,
      onMouseLeave: Z,
      onFocus: ee,
      onBlur: te,
      style: ne,
      children: ie
    }), a2[42] = x, a2[43] = U, a2[44] = V, a2[45] = Y, a2[46] = Z, a2[47] = ee, a2[48] = te, a2[49] = ne, a2[50] = ie, a2[51] = ce) : ce = a2[51], ce;
  }),
  m = e2 => {
    const r2 = t.c(2);
    let s2;
    return r2[0] !== e2 ? (s2 = n.jsx(a, {
      variant: "marquee",
      ...e2
    }), r2[0] = e2, r2[1] = s2) : s2 = r2[1], s2;
  },
  d = m,
  f = e2 => {
    var r2, s2, a2, o2, l2, i2;
    const c2 = t.c(23),
      {
        size: u2,
        progress: m2,
        shape: d2,
        strokeWidth: f2,
        strokeLinecap: v,
        radius: h,
        rect: k,
        track: x,
        stroke: p,
        className: b,
        style: y
      } = e2,
      g = void 0 === v ? "round" : v,
      N = `0 0 ${u2} ${u2}`;
    let w, S, j;
    return c2[0] !== u2 || c2[1] !== f2 || c2[2] !== x ? (w = x && n.jsx("circle", {
      cx: u2 / 2,
      cy: u2 / 2,
      r: x.radius,
      fill: "none",
      stroke: x.stroke,
      strokeWidth: null != (r2 = x.strokeWidth) ? r2 : f2
    }), c2[0] = u2, c2[1] = f2, c2[2] = x, c2[3] = w) : w = c2[3], c2[4] !== b || c2[5] !== m2 || c2[6] !== h || c2[7] !== (null == k ? void 0 : k.rx) || c2[8] !== (null == k ? void 0 : k.size) || c2[9] !== (null == k ? void 0 : k.x) || c2[10] !== (null == k ? void 0 : k.y) || c2[11] !== d2 || c2[12] !== u2 || c2[13] !== p || c2[14] !== g || c2[15] !== f2 || c2[16] !== y ? (S = "circle" === d2 ? n.jsx("circle", {
      cx: u2 / 2,
      cy: u2 / 2,
      r: h,
      fill: "none",
      stroke: null != p ? p : "currentColor",
      strokeWidth: f2,
      strokeLinecap: g,
      className: b,
      style: y,
      pathLength: 100,
      strokeDasharray: `${m2} 100`
    }) : n.jsx("rect", {
      x: null != (s2 = null == k ? void 0 : k.x) ? s2 : 0,
      y: null != (a2 = null == k ? void 0 : k.y) ? a2 : 0,
      width: null != (o2 = null == k ? void 0 : k.size) ? o2 : 0,
      height: null != (l2 = null == k ? void 0 : k.size) ? l2 : 0,
      rx: null != (i2 = null == k ? void 0 : k.rx) ? i2 : 0,
      fill: "none",
      stroke: null != p ? p : "currentColor",
      strokeWidth: f2,
      strokeLinecap: g,
      className: b,
      style: y,
      pathLength: 100,
      strokeDasharray: `${m2} 100`
    }), c2[4] = b, c2[5] = m2, c2[6] = h, c2[7] = null == k ? void 0 : k.rx, c2[8] = null == k ? void 0 : k.size, c2[9] = null == k ? void 0 : k.x, c2[10] = null == k ? void 0 : k.y, c2[11] = d2, c2[12] = u2, c2[13] = p, c2[14] = g, c2[15] = f2, c2[16] = y, c2[17] = S) : S = c2[17], c2[18] !== u2 || c2[19] !== N || c2[20] !== w || c2[21] !== S ? (j = n.jsxs("svg", {
      className: "absolute inset-0 -rotate-90",
      viewBox: N,
      width: u2,
      height: u2,
      children: [w, S]
    }), c2[18] = u2, c2[19] = N, c2[20] = w, c2[21] = S, c2[22] = j) : j = c2[22], j;
  };
export { a as T, m as M, f as P, d as a };
