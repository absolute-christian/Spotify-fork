// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { R as e, c as s, j as o } from "./vendor-ui-BwX-1h7U.js";
import { k as n, cj as a, ci as i, ck as c, cl as t } from "./globals-Bc3qFUyf.js";
const l = {
    sm: {
      side: "h-7 w-7",
      sideIcon: "h-3.5 w-3.5",
      play: "h-8 w-8",
      playIcon: "h-4 w-4",
      gap: "gap-0.5"
    },
    md: {
      side: "h-8 w-8",
      sideIcon: "h-4 w-4",
      play: "h-9 w-9",
      playIcon: "h-5 w-5",
      gap: "gap-1"
    },
    lg: {
      side: "h-10 w-10",
      sideIcon: "h-5 w-5",
      play: "h-12 w-12",
      playIcon: "h-7 w-7",
      gap: "gap-2"
    }
  },
  d = {
    white: {
      side: "text-white/65 hover:text-white",
      play: "text-white"
    },
    foreground: {
      side: "text-foreground/70 hover:text-foreground",
      play: "text-foreground"
    }
  },
  r = e.memo(function (e2) {
    const r2 = s.c(40),
      {
        isPlaying: g,
        isLoading: h,
        toggle: m,
        prev: y,
        next: w,
        repeat: f,
        shuffle: I,
        size: u,
        tone: x,
        justify: v,
        direction: j,
        className: C
      } = e2,
      N = void 0 !== h && h,
      k = void 0 === v ? "center" : v,
      b = void 0 === j ? "row" : j,
      P = l[void 0 === u ? "md" : u],
      L = d[void 0 === x ? "white" : x];
    let S;
    r2[0] !== L.side || r2[1] !== P.side ? (S = n(P.side, "border-none bg-transparent shadow-none hover:bg-transparent active:scale-90", L.side), r2[0] = L.side, r2[1] = P.side, r2[2] = S) : S = r2[2];
    const W = S,
      z = "column" === b ? "flex-col" : "flex-row",
      B = "between" === k ? "justify-between" : "justify-center";
    let M, R, T, q, A, D, E, F;
    return r2[3] !== C || r2[4] !== P.gap || r2[5] !== z || r2[6] !== B ? (M = n("flex items-center pointer-events-auto", z, B, P.gap, C), r2[3] = C, r2[4] = P.gap, r2[5] = z, r2[6] = B, r2[7] = M) : M = r2[7], r2[8] !== f || r2[9] !== P.sideIcon || r2[10] !== W ? (R = f && o.jsx(a, {
      repeatMode: f.mode,
      onClick: f.onClick,
      className: W,
      iconClassName: P.sideIcon
    }), r2[8] = f, r2[9] = P.sideIcon, r2[10] = W, r2[11] = R) : R = r2[11], r2[12] !== y || r2[13] !== P.sideIcon || r2[14] !== W ? (T = o.jsx(i, {
      direction: "previous",
      onClick: y,
      className: W,
      iconClassName: P.sideIcon
    }), r2[12] = y, r2[13] = P.sideIcon, r2[14] = W, r2[15] = T) : T = r2[15], r2[16] !== L.play || r2[17] !== P.play ? (q = n(P.play, "rounded-none bg-transparent shadow-none hover:bg-transparent active:scale-90", L.play), r2[16] = L.play, r2[17] = P.play, r2[18] = q) : q = r2[18], r2[19] !== N || r2[20] !== g || r2[21] !== P.playIcon || r2[22] !== q || r2[23] !== m ? (A = o.jsx(c, {
      isPlaying: g,
      toggle: m,
      isLoading: N,
      className: q,
      iconClassName: P.playIcon,
      iconWeight: "Bold"
    }), r2[19] = N, r2[20] = g, r2[21] = P.playIcon, r2[22] = q, r2[23] = m, r2[24] = A) : A = r2[24], r2[25] !== w || r2[26] !== P.sideIcon || r2[27] !== W ? (D = o.jsx(i, {
      direction: "next",
      onClick: w,
      className: W,
      iconClassName: P.sideIcon
    }), r2[25] = w, r2[26] = P.sideIcon, r2[27] = W, r2[28] = D) : D = r2[28], r2[29] !== P.sideIcon || r2[30] !== I || r2[31] !== W ? (E = I && o.jsx(t, {
      isShuffled: I.isShuffled,
      shuffleType: I.type,
      onClick: I.onClick,
      className: W,
      iconClassName: P.sideIcon
    }), r2[29] = P.sideIcon, r2[30] = I, r2[31] = W, r2[32] = E) : E = r2[32], r2[33] !== R || r2[34] !== T || r2[35] !== A || r2[36] !== D || r2[37] !== E || r2[38] !== M ? (F = o.jsxs("div", {
      className: M,
      onClick: p,
      children: [R, T, A, D, E]
    }), r2[33] = R, r2[34] = T, r2[35] = A, r2[36] = D, r2[37] = E, r2[38] = M, r2[39] = F) : F = r2[39], F;
  });
function p(e2) {
  return e2.stopPropagation();
}
export { r as Transport, r as W };
