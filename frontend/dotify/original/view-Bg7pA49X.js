// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { overlayEventManager as _, overlayInvoke as P, overlaySettingsRepository as S, overlayEmit as C, overlayStorage as f } from "../runtime.jsx";
import { R as e, c as t, j as s, m as i, A as a, r as n } from "./vendor-ui-BwX-1h7U.js";
import { k as l, I as o, aj as r, cs as c, T as d, s as u, bP as m, j as h, u as x, cN as p, cO as g, cE as v, dc as y, cQ as b, e8 as w, h as j, e9 as N, e6 as k, l as z } from "./globals-Bc3qFUyf.js";
import { W as M } from "./transport-B7U9wFta.js";
import { M as T, T as E, P as L } from "./progress-B9dXWW2R.js";
const W = e.createContext(null);
function $() {
  const t2 = e.useContext(W);
  if (!t2) throw new Error("Overlay layouts render inside OverlayContext");
  return t2;
}
function A(e2) {
  const a2 = t.c(34),
    {
      volume: n2,
      size: r2,
      barClassName: c2,
      className: d2
    } = e2,
    u2 = void 0 === r2 ? "sm" : r2;
  let m2;
  a2[0] !== n2 ? (m2 = Math.round(100 * n2), a2[0] = n2, a2[1] = m2) : m2 = a2[1];
  const h2 = m2,
    f2 = 0 === n2 ? o.volumeMute : n2 < 0.5 ? o.volumeNone : o.volume,
    x2 = "md" === u2;
  let p2, g2, v2, y2;
  a2[2] === Symbol.for("react.memo_cache_sentinel") ? (p2 = {
    opacity: 0,
    scale: 0.9
  }, g2 = {
    opacity: 1,
    scale: 1
  }, v2 = {
    opacity: 0,
    scale: 0.9
  }, y2 = {
    duration: 0.15
  }, a2[2] = p2, a2[3] = g2, a2[4] = v2, a2[5] = y2) : (p2 = a2[2], g2 = a2[3], v2 = a2[4], y2 = a2[5]);
  const b2 = x2 ? "gap-2" : "gap-1.5";
  let w2;
  a2[6] !== d2 || a2[7] !== b2 ? (w2 = l("flex items-center", b2, d2), a2[6] = d2, a2[7] = b2, a2[8] = w2) : w2 = a2[8];
  const j2 = x2 ? "w-4 h-4" : "w-3.5 h-3.5";
  let N2, k2, C2;
  a2[9] !== j2 ? (N2 = l("text-white/80 shrink-0", j2), a2[9] = j2, a2[10] = N2) : N2 = a2[10], a2[11] !== f2 || a2[12] !== N2 ? (k2 = s.jsx(f2, {
    className: N2
  }), a2[11] = f2, a2[12] = N2, a2[13] = k2) : k2 = a2[13], a2[14] !== c2 ? (C2 = l("h-1 bg-white/20 rounded-full overflow-hidden", c2), a2[14] = c2, a2[15] = C2) : C2 = a2[15];
  const S2 = `${h2}%`;
  let z2, P2, _2, M2;
  a2[16] !== S2 ? (z2 = {
    width: S2
  }, a2[16] = S2, a2[17] = z2) : z2 = a2[17], a2[18] === Symbol.for("react.memo_cache_sentinel") ? (P2 = {
    type: "spring",
    stiffness: 400,
    damping: 30
  }, a2[18] = P2) : P2 = a2[18], a2[19] !== z2 ? (_2 = s.jsx(i.div, {
    className: "h-full bg-white rounded-full",
    animate: z2,
    transition: P2
  }), a2[19] = z2, a2[20] = _2) : _2 = a2[20], a2[21] !== C2 || a2[22] !== _2 ? (M2 = s.jsx("div", {
    className: C2,
    children: _2
  }), a2[21] = C2, a2[22] = _2, a2[23] = M2) : M2 = a2[23];
  const T2 = x2 ? "text-caption min-w-[26px]" : "text-micro min-w-[22px]";
  let E2, L2, W2;
  return a2[24] !== T2 ? (E2 = l("font-medium text-white/80 text-right", T2), a2[24] = T2, a2[25] = E2) : E2 = a2[25], a2[26] !== h2 || a2[27] !== E2 ? (L2 = s.jsxs("span", {
    className: E2,
    children: [h2, "%"]
  }), a2[26] = h2, a2[27] = E2, a2[28] = L2) : L2 = a2[28], a2[29] !== k2 || a2[30] !== M2 || a2[31] !== L2 || a2[32] !== w2 ? (W2 = s.jsxs(i.div, {
    initial: p2,
    animate: g2,
    exit: v2,
    transition: y2,
    className: w2,
    children: [k2, M2, L2]
  }), a2[29] = k2, a2[30] = M2, a2[31] = L2, a2[32] = w2, a2[33] = W2) : W2 = a2[33], W2;
}
function U(e2) {
  const i2 = t.c(22),
    {
      title: a2,
      artist: n2,
      titleClassName: o2,
      artistClassName: r2,
      containerClassName: c2,
      artistAddon: d2,
      artistRowClassName: u2
    } = e2,
    m2 = void 0 === c2 ? "w-full overflow-visible" : c2;
  let h2, f2, x2, p2, g2, v2, y2, b2;
  return i2[0] !== m2 ? (h2 = l("flex flex-col min-w-0 justify-center leading-tight", m2), i2[0] = m2, i2[1] = h2) : h2 = i2[1], i2[2] !== o2 ? (f2 = l("font-semibold text-sm truncate text-foreground/95", o2), i2[2] = o2, i2[3] = f2) : f2 = i2[3], i2[4] !== f2 || i2[5] !== a2 ? (x2 = s.jsx(T, {
    text: a2,
    className: f2
  }), i2[4] = f2, i2[5] = a2, i2[6] = x2) : x2 = i2[6], i2[7] !== u2 ? (p2 = l("flex min-w-0 items-center gap-1.5", u2), i2[7] = u2, i2[8] = p2) : p2 = i2[8], i2[9] !== r2 ? (g2 = l("text-xs text-muted-foreground/75", r2), i2[9] = r2, i2[10] = g2) : g2 = i2[10], i2[11] !== n2 || i2[12] !== g2 ? (v2 = s.jsx(E, {
    containerClassName: "min-w-0",
    className: g2,
    children: n2
  }), i2[11] = n2, i2[12] = g2, i2[13] = v2) : v2 = i2[13], i2[14] !== d2 || i2[15] !== p2 || i2[16] !== v2 ? (y2 = s.jsxs("div", {
    className: p2,
    children: [v2, d2]
  }), i2[14] = d2, i2[15] = p2, i2[16] = v2, i2[17] = y2) : y2 = i2[17], i2[18] !== h2 || i2[19] !== x2 || i2[20] !== y2 ? (b2 = s.jsxs("div", {
    className: h2,
    children: [x2, y2]
  }), i2[18] = h2, i2[19] = x2, i2[20] = y2, i2[21] = b2) : b2 = i2[21], b2;
}
function D() {
  const e2 = t.c(10),
    {
      currentSong: i2
    } = $();
  let a2, n2;
  e2[0] !== i2 ? (a2 = s.jsx(c, {
    song: i2,
    variant: "glass",
    size: "sm"
  }), e2[0] = i2, e2[1] = a2) : a2 = e2[1], e2[2] !== i2 ? (n2 = (null == i2 ? void 0 : i2.id) ? {
    id: i2.id
  } : null, e2[2] = i2, e2[3] = n2) : n2 = e2[3];
  const l2 = !!(null == i2 ? void 0 : i2.isCached);
  let o2, r2;
  return e2[4] !== n2 || e2[5] !== l2 ? (o2 = s.jsx(d, {
    song: n2,
    isCached: l2,
    className: "h-3 w-3 text-white/65"
  }), e2[4] = n2, e2[5] = l2, e2[6] = o2) : o2 = e2[6], e2[7] !== a2 || e2[8] !== o2 ? (r2 = s.jsxs("span", {
    className: "inline-flex shrink-0 items-center gap-1 empty:hidden",
    onPointerDown: I,
    children: [a2, o2]
  }), e2[7] = a2, e2[8] = o2, e2[9] = r2) : r2 = e2[9], r2;
}
function I(e2) {
  return e2.stopPropagation();
}
function R(e2) {
  const i2 = t.c(13),
    {
      title: a2,
      artist: n2,
      isTitleAnimating: o2
    } = $();
  let r2;
  i2[0] === Symbol.for("react.memo_cache_sentinel") ? (r2 = s.jsx(D, {}), i2[0] = r2) : r2 = i2[0];
  const c2 = o2 && "animate-track-title-in";
  let d2;
  i2[1] !== e2.titleClassName || i2[2] !== c2 ? (d2 = l(e2.titleClassName, c2), i2[1] = e2.titleClassName, i2[2] = c2, i2[3] = d2) : d2 = i2[3];
  const u2 = o2 && "animate-track-artist-in";
  let m2, h2;
  return i2[4] !== e2.artistClassName || i2[5] !== u2 ? (m2 = l(e2.artistClassName, u2), i2[4] = e2.artistClassName, i2[5] = u2, i2[6] = m2) : m2 = i2[6], i2[7] !== n2 || i2[8] !== e2 || i2[9] !== d2 || i2[10] !== m2 || i2[11] !== a2 ? (h2 = s.jsx(U, {
    ...e2,
    title: a2,
    artist: n2,
    artistAddon: r2,
    titleClassName: d2,
    artistClassName: m2
  }), i2[7] = n2, i2[8] = e2, i2[9] = d2, i2[10] = m2, i2[11] = a2, i2[12] = h2) : h2 = i2[12], h2;
}
function V() {
  const e2 = t.c(4),
    {
      isLoading: i2,
      isPlaying: a2,
      WaveformVisualizer: n2
    } = $();
  let l2;
  return e2[0] !== n2 || e2[1] !== i2 || e2[2] !== a2 ? (l2 = i2 ? s.jsx(r, {
    className: "h-4 w-4 text-white/85",
    borderClassName: "border-[1.5px]"
  }) : s.jsx(n2, {
    isPlaying: a2
  }), e2[0] = n2, e2[1] = i2, e2[2] = a2, e2[3] = l2) : l2 = e2[3], l2;
}
function H(e2) {
  const a2 = t.c(41),
    {
      rootKey: n2,
      rise: o2,
      className: r2,
      children: c2
    } = e2,
    {
      isDraggable: d2,
      isClosing: u2,
      opacity: m2,
      scale: h2,
      borderClass: f2,
      glassStyle: x2,
      glassEnabled: p2,
      width: g2,
      height: v2,
      coverTintUnfilled: y2,
      setIsHovered: b2,
      handleSeekPointerDown: w2,
      handleSeekPointerMove: j2,
      handleSeekPointerUp: N2,
      handleVolumeWheel: k2
    } = $(),
    C2 = !p2 && "bg-background";
  let S2, z2;
  a2[0] !== f2 || a2[1] !== C2 ? (S2 = l("w-full h-full select-none text-white overflow-hidden", f2, C2), a2[0] = f2, a2[1] = C2, a2[2] = S2) : S2 = a2[2], a2[3] !== x2 || a2[4] !== v2 || a2[5] !== g2 ? (z2 = {
    width: g2,
    height: v2,
    ...x2
  }, a2[3] = x2, a2[4] = v2, a2[5] = g2, a2[6] = z2) : z2 = a2[6];
  const P2 = d2 ? "" : void 0;
  let _2, M2, T2, E2, L2, W2, A2, U2, D2;
  return a2[7] !== o2 ? (_2 = {
    opacity: 0,
    scale: 0.95,
    y: o2
  }, a2[7] = o2, a2[8] = _2) : _2 = a2[8], a2[9] !== u2 || a2[10] !== m2 || a2[11] !== o2 || a2[12] !== h2 ? (M2 = u2 ? {
    opacity: 0,
    scale: 0.95,
    y: o2
  } : {
    opacity: m2,
    scale: h2,
    y: 0
  }, a2[9] = u2, a2[10] = m2, a2[11] = o2, a2[12] = h2, a2[13] = M2) : M2 = a2[13], a2[14] === Symbol.for("react.memo_cache_sentinel") ? (T2 = {
    type: "spring",
    stiffness: 350,
    damping: 30
  }, a2[14] = T2) : T2 = a2[14], a2[15] !== f2 || a2[16] !== r2 ? (E2 = l("cursor-pointer w-full h-full overflow-hidden relative", r2, f2), a2[15] = f2, a2[16] = r2, a2[17] = E2) : E2 = a2[17], a2[18] !== b2 ? (W2 = () => b2(true), L2 = () => b2(false), a2[18] = b2, a2[19] = L2, a2[20] = W2) : (L2 = a2[19], W2 = a2[20]), a2[21] !== y2 ? (A2 = s.jsx("div", {
    className: "absolute inset-0 z-0 pointer-events-none",
    style: {
      backgroundColor: y2
    }
  }), a2[21] = y2, a2[22] = A2) : A2 = a2[22], a2[23] !== c2 || a2[24] !== w2 || a2[25] !== j2 || a2[26] !== N2 || a2[27] !== k2 || a2[28] !== n2 || a2[29] !== L2 || a2[30] !== A2 || a2[31] !== P2 || a2[32] !== _2 || a2[33] !== M2 || a2[34] !== E2 || a2[35] !== W2 ? (U2 = s.jsxs(i.div, {
    "data-tauri-drag-region": P2,
    initial: _2,
    animate: M2,
    transition: T2,
    className: E2,
    onPointerDown: w2,
    onPointerMove: j2,
    onPointerUp: N2,
    onPointerCancel: N2,
    onWheel: k2,
    onMouseEnter: W2,
    onMouseLeave: L2,
    children: [A2, c2],
    "data-native-overlay-surface": ""
  }, n2), a2[23] = c2, a2[24] = w2, a2[25] = j2, a2[26] = N2, a2[27] = k2, a2[28] = n2, a2[29] = L2, a2[30] = A2, a2[31] = P2, a2[32] = _2, a2[33] = M2, a2[34] = E2, a2[35] = W2, a2[36] = U2) : U2 = a2[36], a2[37] !== U2 || a2[38] !== S2 || a2[39] !== z2 ? (D2 = s.jsx("div", {
    className: S2,
    style: z2,
    children: U2
  }), a2[37] = U2, a2[38] = S2, a2[39] = z2, a2[40] = D2) : D2 = a2[40], D2;
}
function O(e2) {
  const n2 = t.c(11),
    {
      size: l2,
      className: o2
    } = e2,
    {
      coverUrl: r2
    } = $(),
    c2 = r2 || "no-cover";
  let d2, m2, h2, f2;
  n2[0] === Symbol.for("react.memo_cache_sentinel") ? (d2 = {
    opacity: 0,
    scale: 0.95
  }, m2 = {
    opacity: 1,
    scale: 1
  }, h2 = {
    opacity: 0,
    scale: 1.05
  }, f2 = {
    duration: 0.35,
    ease: "easeInOut"
  }, n2[0] = d2, n2[1] = m2, n2[2] = h2, n2[3] = f2) : (d2 = n2[0], m2 = n2[1], h2 = n2[2], f2 = n2[3]);
  const x2 = r2 || void 0;
  let p2, g2;
  return n2[4] !== o2 || n2[5] !== l2 || n2[6] !== x2 ? (p2 = s.jsx(u, {
    src: x2,
    size: l2,
    className: o2
  }), n2[4] = o2, n2[5] = l2, n2[6] = x2, n2[7] = p2) : p2 = n2[7], n2[8] !== c2 || n2[9] !== p2 ? (g2 = s.jsx(a, {
    mode: "popLayout",
    children: s.jsx(i.div, {
      initial: d2,
      animate: m2,
      exit: h2,
      transition: f2,
      className: "absolute inset-0 w-full h-full",
      children: p2
    }, c2)
  }), n2[8] = c2, n2[9] = p2, n2[10] = g2) : g2 = n2[10], g2;
}
function B(e2) {
  const n2 = t.c(16),
    {
      className: l2,
      volume: o2,
      axis: r2,
      duration: c2,
      controlsClassName: d2
    } = e2,
    {
      volume: u2,
      showVolumeActive: m2,
      isHovered: h2,
      isPlaying: f2,
      isLoading: x2,
      toggle: p2,
      prev: g2,
      next: v2
    } = $();
  let y2, b2;
  return n2[0] !== r2 || n2[1] !== d2 || n2[2] !== c2 || n2[3] !== h2 || n2[4] !== x2 || n2[5] !== f2 || n2[6] !== u2 || n2[7] !== v2 || n2[8] !== g2 || n2[9] !== m2 || n2[10] !== p2 || n2[11] !== o2 ? (y2 = s.jsx(a, {
    initial: true,
    children: m2 ? s.jsx(i.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      transition: {
        duration: 0.15
      },
      children: s.jsx(A, {
        volume: u2,
        ...o2
      })
    }, "volume") : h2 ? s.jsx(i.div, {
      initial: {
        opacity: 0,
        scale: 0.8,
        [r2]: 5
      },
      animate: {
        opacity: 1,
        scale: 1,
        [r2]: 0
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        [r2]: 5
      },
      transition: {
        duration: c2
      },
      className: d2,
      onClick: q,
      children: s.jsx(M, {
        isPlaying: f2,
        isLoading: x2,
        toggle: p2,
        prev: g2,
        next: v2,
        size: "sm"
      })
    }, "controls") : s.jsx(i.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      transition: {
        duration: c2
      },
      children: s.jsx(V, {})
    }, "visualizer")
  }), n2[0] = r2, n2[1] = d2, n2[2] = c2, n2[3] = h2, n2[4] = x2, n2[5] = f2, n2[6] = u2, n2[7] = v2, n2[8] = g2, n2[9] = m2, n2[10] = p2, n2[11] = o2, n2[12] = y2) : y2 = n2[12], n2[13] !== l2 || n2[14] !== y2 ? (b2 = s.jsx("div", {
    className: l2,
    children: y2
  }), n2[13] = l2, n2[14] = y2, n2[15] = b2) : b2 = n2[15], b2;
}
function q(e2) {
  return e2.stopPropagation();
}
const F = {
    width: 248,
    height: 48,
    radius: 24
  },
  K = {
    width: 320,
    height: 136,
    radius: 24
  },
  Y = {
    type: "spring",
    stiffness: 420,
    damping: 34,
    mass: 0.8
  },
  X = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      duration: 0.14
    }
  };
const Q = () => {
    const e2 = t.c(49),
      {
        isDraggable: n2,
        isClosing: o2,
        opacity: r2,
        glassStyle: c2,
        glassEnabled: d2,
        position: h2,
        progress: f2,
        isPlaying: x2,
        isLoading: p2,
        coverUrl: g2,
        coverTintUnfilled: v2,
        progressTint: y2,
        currentTime: b2,
        duration: w2,
        repeatMode: j2,
        isShuffled: N2,
        shuffleType: k2,
        volume: C2,
        showVolumeActive: S2,
        isHovered: z2,
        setIsHovered: P2,
        handleSeekPointerDown: _2,
        handleSeekPointerMove: T2,
        handleSeekPointerUp: E2,
        handleVolumeWheel: L2,
        toggle: W2,
        prev: U2,
        next: D2,
        cycleRepeat: I2,
        toggleShuffle: H2
      } = $(),
      O2 = z2,
      B2 = O2 ? K : F;
    let q2;
    e2[0] !== h2 ? (q2 = l("flex h-screen w-screen flex-col select-none", function (e3) {
      const t2 = e3.startsWith("bottom") ? "justify-end" : "center" === e3 ? "justify-center" : "justify-start",
        s2 = e3.endsWith("left") ? "items-start" : e3.endsWith("right") ? "items-end" : "items-center";
      return l(t2, s2);
    }(h2)), e2[0] = h2, e2[1] = q2) : q2 = e2[1];
    const Q2 = n2 ? "" : void 0;
    let G2, J2;
    e2[2] === Symbol.for("react.memo_cache_sentinel") ? (G2 = {
      opacity: 0,
      scale: 0.9
    }, e2[2] = G2) : G2 = e2[2], e2[3] !== o2 || e2[4] !== r2 || e2[5] !== B2 ? (J2 = o2 ? {
      opacity: 0,
      scale: 0.9
    } : {
      opacity: r2,
      scale: 1,
      width: B2.width,
      height: B2.height,
      borderRadius: B2.radius
    }, e2[3] = o2, e2[4] = r2, e2[5] = B2, e2[6] = J2) : J2 = e2[6];
    const Z2 = !d2 && "bg-background";
    let ee2, te2, se2, ie2, ae2, ne2, le2;
    return e2[7] !== Z2 ? (ee2 = l("relative overflow-hidden text-white", Z2), e2[7] = Z2, e2[8] = ee2) : ee2 = e2[8], e2[9] !== P2 ? (te2 = () => P2(true), se2 = () => P2(false), e2[9] = P2, e2[10] = te2, e2[11] = se2) : (te2 = e2[10], se2 = e2[11]), e2[12] !== v2 ? (ie2 = s.jsx("div", {
      className: "pointer-events-none absolute inset-0",
      style: {
        backgroundColor: v2
      }
    }), e2[12] = v2, e2[13] = ie2) : ie2 = e2[13], e2[14] !== g2 || e2[15] !== b2 || e2[16] !== I2 || e2[17] !== w2 || e2[18] !== _2 || e2[19] !== T2 || e2[20] !== E2 || e2[21] !== p2 || e2[22] !== x2 || e2[23] !== N2 || e2[24] !== D2 || e2[25] !== O2 || e2[26] !== U2 || e2[27] !== f2 || e2[28] !== y2 || e2[29] !== j2 || e2[30] !== S2 || e2[31] !== k2 || e2[32] !== W2 || e2[33] !== H2 || e2[34] !== C2 ? (ae2 = s.jsx(a, {
      mode: "popLayout",
      initial: true,
      children: O2 ? s.jsxs(i.div, {
        ...X,
        className: "relative flex h-full w-full flex-col gap-2 p-3",
        children: [s.jsxs("div", {
          className: "flex min-h-0 flex-1 gap-3",
          children: [s.jsxs("div", {
            className: "flex min-w-0 flex-1 flex-col",
            children: [s.jsx(R, {
              titleClassName: "text-headline font-semibold text-white",
              artistClassName: "text-footnote text-white/60"
            }), s.jsx("div", {
              className: "mt-auto",
              children: s.jsx(a, {
                mode: "popLayout",
                initial: true,
                children: S2 ? s.jsx(A, {
                  volume: C2,
                  size: "md",
                  barClassName: "w-20"
                }, "volume") : s.jsxs(i.span, {
                  ...X,
                  className: "block text-caption text-white/50",
                  children: [m(b2), " / ", m(w2)]
                }, "time")
              })
            })]
          }), s.jsx("div", {
            className: "aspect-square h-full shrink-0 overflow-hidden rounded-xl bg-white/5",
            children: s.jsx(u, {
              src: g2 || void 0,
              size: "md",
              className: "h-full w-full object-cover"
            })
          })]
        }), s.jsx("div", {
          className: "-my-1.5 cursor-pointer py-1.5",
          onPointerDown: _2,
          onPointerMove: T2,
          onPointerUp: E2,
          onPointerCancel: E2,
          children: s.jsx("div", {
            className: "h-1 w-full overflow-hidden rounded-full bg-white/15",
            children: s.jsx("div", {
              className: "h-full rounded-full",
              style: {
                width: `${f2}%`,
                backgroundColor: y2,
                transition: "width 0.3s ease"
              }
            })
          })
        }), s.jsx(M, {
          isPlaying: x2,
          isLoading: p2,
          toggle: W2,
          prev: U2,
          next: D2,
          repeat: {
            mode: j2,
            onClick: I2
          },
          shuffle: {
            isShuffled: N2,
            type: k2,
            onClick: H2
          },
          justify: "between",
          className: "px-1"
        })]
      }, "open") : s.jsxs(i.div, {
        ...X,
        className: "relative flex h-full w-full items-center gap-2.5 pl-2 pr-3",
        children: [s.jsx("div", {
          className: "size-8 shrink-0 overflow-hidden rounded-full bg-white/5",
          children: s.jsx(u, {
            src: g2 || void 0,
            size: "sm",
            className: "h-full w-full object-cover"
          })
        }), s.jsx(R, {
          containerClassName: "min-w-0 flex-1",
          titleClassName: "text-callout font-semibold text-white",
          artistClassName: "text-micro text-white/60"
        }), s.jsx(V, {})]
      }, "rest")
    }), e2[14] = g2, e2[15] = b2, e2[16] = I2, e2[17] = w2, e2[18] = _2, e2[19] = T2, e2[20] = E2, e2[21] = p2, e2[22] = x2, e2[23] = N2, e2[24] = D2, e2[25] = O2, e2[26] = U2, e2[27] = f2, e2[28] = y2, e2[29] = j2, e2[30] = S2, e2[31] = k2, e2[32] = W2, e2[33] = H2, e2[34] = C2, e2[35] = ae2) : ae2 = e2[35], e2[36] !== c2 || e2[37] !== L2 || e2[38] !== Q2 || e2[39] !== J2 || e2[40] !== ee2 || e2[41] !== te2 || e2[42] !== se2 || e2[43] !== ie2 || e2[44] !== ae2 ? (ne2 = s.jsxs(i.div, {
      "data-tauri-drag-region": Q2,
      initial: G2,
      animate: J2,
      transition: Y,
      className: ee2,
      style: c2,
      onWheel: L2,
      onMouseEnter: te2,
      onMouseLeave: se2,
      children: [ie2, ae2],
      "data-native-overlay-surface": ""
    }), e2[36] = c2, e2[37] = L2, e2[38] = Q2, e2[39] = J2, e2[40] = ee2, e2[41] = te2, e2[42] = se2, e2[43] = ie2, e2[44] = ae2, e2[45] = ne2) : ne2 = e2[45], e2[46] !== q2 || e2[47] !== ne2 ? (le2 = s.jsx("div", {
      className: q2,
      children: ne2
    }), e2[46] = q2, e2[47] = ne2, e2[48] = le2) : le2 = e2[48], le2;
  },
  G = () => {
    const e2 = t.c(11),
      {
        isDraggable: i2,
        progress: a2,
        progressTint: n2
      } = $(),
      l2 = `${a2}%`;
    let o2, r2;
    e2[0] !== n2 || e2[1] !== l2 ? (o2 = s.jsx("div", {
      className: "absolute left-0 bottom-0 h-1 z-0 pointer-events-none animate-pulse",
      style: {
        width: l2,
        backgroundColor: n2,
        transition: "width 0.3s ease"
      }
    }), e2[0] = n2, e2[1] = l2, e2[2] = o2) : o2 = e2[2], e2[3] === Symbol.for("react.memo_cache_sentinel") ? (r2 = s.jsx("div", {
      className: "relative w-[48px] h-[48px] rounded-[10px] overflow-hidden bg-white/5 flex-shrink-0 z-10 shadow-md",
      children: s.jsx(O, {
        size: "sm",
        className: "w-full h-full object-cover"
      })
    }), e2[3] = r2) : r2 = e2[3];
    const c2 = i2 ? "" : void 0;
    let d2, u2, m2, h2;
    return e2[4] === Symbol.for("react.memo_cache_sentinel") ? (d2 = s.jsx(R, {
      titleClassName: "text-xs font-semibold text-white leading-tight",
      artistClassName: "text-micro text-white/60 leading-tight"
    }), e2[4] = d2) : d2 = e2[4], e2[5] !== c2 ? (u2 = s.jsx("div", {
      "data-tauri-drag-region": c2,
      className: "flex-1 min-w-0 mx-2.5 text-left z-10 flex flex-col justify-center leading-normal",
      children: d2
    }), e2[5] = c2, e2[6] = u2) : u2 = e2[6], e2[7] === Symbol.for("react.memo_cache_sentinel") ? (m2 = s.jsx(B, {
      className: "grid items-center justify-items-end flex-shrink-0 z-10 pr-0.5 min-w-[54px] *:[grid-area:1/1]",
      volume: {
        size: "sm",
        barClassName: "w-8",
        className: "pr-0.5"
      },
      axis: "x",
      duration: 0.12,
      controlsClassName: "flex items-center gap-0.5"
    }), e2[7] = m2) : m2 = e2[7], e2[8] !== o2 || e2[9] !== u2 ? (h2 = s.jsxs(H, {
      rootKey: "corner-root",
      rise: 10,
      className: "flex items-center px-3 py-2 justify-between",
      children: [o2, r2, u2, m2]
    }), e2[8] = o2, e2[9] = u2, e2[10] = h2) : h2 = e2[10], h2;
  },
  J = () => {
    const e2 = t.c(17),
      {
        isDraggable: i2,
        progress: a2,
        coverTint: n2,
        handleVolumeWheel: l2
      } = $(),
      o2 = `${a2}%`;
    let r2, c2, d2;
    e2[0] !== n2 || e2[1] !== o2 ? (r2 = s.jsx("div", {
      className: "absolute left-0 top-0 h-full z-0 pointer-events-none",
      style: {
        width: o2,
        backgroundColor: n2,
        transition: "width 0.3s ease"
      }
    }), e2[0] = n2, e2[1] = o2, e2[2] = r2) : r2 = e2[2], e2[3] === Symbol.for("react.memo_cache_sentinel") ? (c2 = s.jsx(O, {
      size: "sm",
      className: "w-full h-full object-cover"
    }), e2[3] = c2) : c2 = e2[3], e2[4] !== l2 ? (d2 = s.jsx("div", {
      className: "relative w-10 h-10 rounded-full overflow-hidden bg-white/5 flex-shrink-0 z-10 shadow-lg",
      onWheel: l2,
      children: c2
    }), e2[4] = l2, e2[5] = d2) : d2 = e2[5];
    const u2 = i2 ? "" : void 0,
      m2 = i2 ? "" : void 0;
    let h2, f2, x2, p2, g2;
    return e2[6] === Symbol.for("react.memo_cache_sentinel") ? (h2 = s.jsx(R, {
      titleClassName: "text-sm font-semibold text-white leading-tight",
      artistClassName: "text-xs text-white/65 leading-tight",
      containerClassName: "w-full min-w-0"
    }), e2[6] = h2) : h2 = e2[6], e2[7] !== m2 ? (f2 = s.jsx("div", {
      "data-tauri-drag-region": m2,
      className: "flex flex-col justify-center w-full min-w-0",
      children: h2
    }), e2[7] = m2, e2[8] = f2) : f2 = e2[8], e2[9] !== u2 || e2[10] !== f2 ? (x2 = s.jsx("div", {
      "data-tauri-drag-region": u2,
      className: "flex-1 min-w-0 mx-3 text-left z-10 flex items-center h-full",
      children: f2
    }), e2[9] = u2, e2[10] = f2, e2[11] = x2) : x2 = e2[11], e2[12] === Symbol.for("react.memo_cache_sentinel") ? (p2 = s.jsx(B, {
      className: "grid items-center justify-items-end flex-shrink-0 w-[100px] relative z-10 pr-1 *:[grid-area:1/1]",
      volume: {
        size: "md",
        barClassName: "w-12",
        className: "pr-1"
      },
      axis: "x",
      duration: 0.15,
      controlsClassName: "flex items-center gap-0.5 pointer-events-auto"
    }), e2[12] = p2) : p2 = e2[12], e2[13] !== r2 || e2[14] !== d2 || e2[15] !== x2 ? (g2 = s.jsxs(H, {
      rootKey: "island-root",
      rise: 15,
      className: "flex items-center justify-between px-3",
      children: [r2, d2, x2, p2]
    }), e2[13] = r2, e2[14] = d2, e2[15] = x2, e2[16] = g2) : g2 = e2[16], g2;
  };
function Z(e2) {
  return "left-center" === e2 ? "left" : "right-center" === e2 ? "right" : e2.startsWith("bottom") ? "bottom" : "top";
}
const ee = {
    top: "items-start justify-center",
    bottom: "items-end justify-center",
    left: "items-center justify-start",
    right: "items-center justify-end"
  },
  te = {
    top: "rounded-b-[18px]",
    bottom: "rounded-t-[18px]",
    left: "rounded-r-[18px]",
    right: "rounded-l-[18px]"
  },
  se = "#000";
function ie(e2) {
  const n2 = t.c(40),
    {
      edge: o2
    } = e2,
    {
      width: r2,
      height: c2,
      borderClass: d2,
      glassStyle: m2,
      progress: h2,
      progressTint: f2,
      coverUrl: x2,
      title: p2,
      artist: g2,
      isPlaying: v2,
      isLoading: y2,
      toggle: b2,
      prev: w2,
      next: j2,
      isHovered: N2,
      setIsHovered: k2,
      handleVolumeWheel: C2,
      showVolumeActive: S2,
      volume: z2
    } = $();
  let P2, _2, T2, E2, W2, U2, I2;
  n2[0] !== d2 ? (P2 = l("flex select-none flex-col items-center overflow-hidden px-2 py-3 text-white", d2), n2[0] = d2, n2[1] = P2) : P2 = n2[1], n2[2] !== m2 || n2[3] !== c2 || n2[4] !== r2 ? (_2 = {
    width: r2,
    height: c2,
    ...m2
  }, n2[2] = m2, n2[3] = c2, n2[4] = r2, n2[5] = _2) : _2 = n2[5], n2[6] !== k2 ? (T2 = () => k2(true), E2 = () => k2(false), n2[6] = k2, n2[7] = T2, n2[8] = E2) : (T2 = n2[7], E2 = n2[8]), n2[9] === Symbol.for("react.memo_cache_sentinel") ? (W2 = {
    radius: 26.5,
    stroke: "rgba(255, 255, 255, 0.08)",
    strokeWidth: 1.5
  }, U2 = {
    transition: "stroke-dasharray 0.3s ease"
  }, n2[9] = W2, n2[10] = U2) : (W2 = n2[9], U2 = n2[10]), n2[11] !== h2 || n2[12] !== f2 ? (I2 = s.jsx(L, {
    size: 56,
    progress: h2,
    shape: "circle",
    strokeWidth: 1.5,
    radius: 26.5,
    stroke: f2,
    track: W2,
    style: U2
  }), n2[11] = h2, n2[12] = f2, n2[13] = I2) : I2 = n2[13];
  const R2 = x2 || void 0;
  let H2, O2, B2, q2, F2;
  return n2[14] !== R2 ? (H2 = s.jsx("div", {
    className: "absolute inset-[3px] overflow-hidden rounded-full bg-white/5",
    children: s.jsx(u, {
      src: R2,
      size: "md",
      className: "h-full w-full rounded-full object-cover"
    })
  }), n2[14] = R2, n2[15] = H2) : H2 = n2[15], n2[16] !== I2 || n2[17] !== H2 ? (O2 = s.jsxs("div", {
    className: "relative flex h-14 w-14 shrink-0 items-center justify-center",
    children: [I2, H2]
  }), n2[16] = I2, n2[17] = H2, n2[18] = O2) : O2 = n2[18], n2[19] === Symbol.for("react.memo_cache_sentinel") ? (B2 = s.jsx("div", {
    className: "mt-1.5 flex shrink-0 justify-center",
    children: s.jsx(D, {})
  }), n2[19] = B2) : B2 = n2[19], n2[20] !== g2 || n2[21] !== o2 || n2[22] !== N2 || n2[23] !== y2 || n2[24] !== v2 || n2[25] !== j2 || n2[26] !== w2 || n2[27] !== S2 || n2[28] !== p2 || n2[29] !== b2 || n2[30] !== z2 ? (q2 = s.jsx("div", {
    className: "relative mt-3 min-h-0 w-full flex-1",
    children: s.jsx(a, {
      initial: true,
      children: S2 ? s.jsx(i.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: 0.15
        },
        className: "absolute inset-0 flex items-center justify-center",
        children: s.jsx(A, {
          volume: z2,
          size: "sm",
          barClassName: "w-10",
          className: "px-1"
        })
      }, "volume") : N2 ? s.jsx(i.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: 0.15
        },
        className: "absolute inset-0 flex items-center justify-center",
        children: s.jsx(M, {
          isPlaying: v2,
          isLoading: y2,
          toggle: b2,
          prev: w2,
          next: j2,
          size: "sm",
          direction: "column"
        })
      }, "transport") : s.jsxs(i.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: 0.15
        },
        className: l("absolute inset-0 flex items-center [justify-content:safe_center] gap-1.5 overflow-hidden whitespace-nowrap [writing-mode:vertical-rl]", "[mask-image:linear-gradient(to_bottom,black_82%,transparent)]", "left" === o2 && "rotate-180"),
        children: [s.jsx("span", {
          className: "text-xs font-semibold",
          children: p2
        }), g2 && s.jsx("span", {
          className: "text-micro text-white/60",
          children: g2
        }), y2 && s.jsx("span", {
          className: "[writing-mode:horizontal-tb]",
          children: s.jsx(V, {})
        })]
      }, "title")
    })
  }), n2[20] = g2, n2[21] = o2, n2[22] = N2, n2[23] = y2, n2[24] = v2, n2[25] = j2, n2[26] = w2, n2[27] = S2, n2[28] = p2, n2[29] = b2, n2[30] = z2, n2[31] = q2) : q2 = n2[31], n2[32] !== C2 || n2[33] !== P2 || n2[34] !== O2 || n2[35] !== q2 || n2[36] !== _2 || n2[37] !== T2 || n2[38] !== E2 ? (F2 = s.jsxs("div", {
    className: P2,
    style: _2,
    onMouseEnter: T2,
    onMouseLeave: E2,
    onWheel: C2,
    children: [O2, B2, q2],
    "data-native-overlay-surface": ""
  }), n2[32] = C2, n2[33] = P2, n2[34] = O2, n2[35] = q2, n2[36] = _2, n2[37] = T2, n2[38] = E2, n2[39] = F2) : F2 = n2[39], F2;
}
const ae = () => {
    const e2 = t.c(26),
      i2 = $();
    let a2;
    e2[0] !== i2.position ? (a2 = Z(i2.position), e2[0] = i2.position, e2[1] = a2) : a2 = e2[1];
    const o2 = a2,
      r2 = function (e3) {
        const s2 = t.c(3),
          [i3, a3] = n.useState(se);
        let l2, o3;
        return s2[0] !== e3 ? (l2 = () => {
          let t2 = false;
          if (e3) return h(e3).then(e4 => {
            t2 || a3(e4 ? `rgb(${Math.round(0.3 * e4.r)}, ${Math.round(0.3 * e4.g)}, ${Math.round(0.3 * e4.b)})` : se);
          }), () => {
            t2 = true;
          };
          a3(se);
        }, o3 = [e3], s2[0] = e3, s2[1] = l2, s2[2] = o3) : (l2 = s2[1], o3 = s2[2]), n.useEffect(l2, o3), i3;
      }(i2.coverUrl),
      c2 = te[o2];
    let d2, u2;
    e2[2] !== r2 ? (d2 = {
      backgroundColor: r2,
      transition: "background-color 0.6s ease"
    }, e2[2] = r2, e2[3] = d2) : d2 = e2[3], e2[4] !== i2 || e2[5] !== c2 || e2[6] !== d2 ? (u2 = {
      ...i2,
      isDraggable: false,
      borderClass: c2,
      glassEnabled: true,
      glassStyle: d2,
      coverTint: "transparent",
      coverTintUnfilled: "transparent"
    }, e2[4] = i2, e2[5] = c2, e2[6] = d2, e2[7] = u2) : u2 = e2[7];
    const m2 = u2,
      f2 = ee[o2];
    let x2;
    e2[8] !== f2 ? (x2 = l("flex h-screen w-screen", f2), e2[8] = f2, e2[9] = x2) : x2 = e2[9];
    const p2 = `dock-${o2}`;
    let g2, v2;
    e2[10] !== p2 ? (g2 = l("dock-body", p2), e2[10] = p2, e2[11] = g2) : g2 = e2[11], e2[12] !== r2 ? (v2 = {
      "--dock-bg": r2
    }, e2[12] = r2, e2[13] = v2) : v2 = e2[13];
    const y2 = v2;
    let b2, w2, j2, N2;
    return e2[14] !== o2 ? (b2 = "left" === o2 || "right" === o2 ? s.jsx(ie, {
      edge: o2
    }) : s.jsx(J, {}), e2[14] = o2, e2[15] = b2) : b2 = e2[15], e2[16] !== m2 || e2[17] !== b2 ? (w2 = s.jsx(W.Provider, {
      value: m2,
      children: b2
    }), e2[16] = m2, e2[17] = b2, e2[18] = w2) : w2 = e2[18], e2[19] !== w2 || e2[20] !== g2 || e2[21] !== y2 ? (j2 = s.jsx("div", {
      className: g2,
      style: y2,
      children: w2
    }), e2[19] = w2, e2[20] = g2, e2[21] = y2, e2[22] = j2) : j2 = e2[22], e2[23] !== j2 || e2[24] !== x2 ? (N2 = s.jsx("div", {
      className: x2,
      children: j2
    }), e2[23] = j2, e2[24] = x2, e2[25] = N2) : N2 = e2[25], N2;
  },
  ne = () => {
    const e2 = t.c(19),
      {
        isDraggable: i2,
        progress: a2,
        progressTint: n2,
        coverTint: l2
      } = $(),
      o2 = `${a2}%`;
    let r2, c2, d2, u2, m2, h2;
    e2[0] !== l2 || e2[1] !== o2 ? (r2 = s.jsx("div", {
      className: "absolute inset-x-0 bottom-0 pointer-events-none z-0",
      style: {
        height: o2,
        backgroundColor: l2,
        transition: "height 0.3s ease"
      }
    }), e2[0] = l2, e2[1] = o2, e2[2] = r2) : r2 = e2[2], e2[3] === Symbol.for("react.memo_cache_sentinel") ? (c2 = {
      radius: 32.5,
      stroke: "rgba(255, 255, 255, 0.06)",
      strokeWidth: 1.5
    }, d2 = {
      transition: "stroke-dasharray 0.3s ease"
    }, e2[3] = c2, e2[4] = d2) : (c2 = e2[3], d2 = e2[4]), e2[5] !== a2 || e2[6] !== n2 ? (u2 = s.jsx(L, {
      size: 68,
      progress: a2,
      shape: "circle",
      strokeWidth: 1.5,
      radius: 32.5,
      stroke: n2,
      track: c2,
      style: d2
    }), e2[5] = a2, e2[6] = n2, e2[7] = u2) : u2 = e2[7], e2[8] === Symbol.for("react.memo_cache_sentinel") ? (m2 = s.jsx("div", {
      className: "absolute inset-[3px] w-[62px] h-[62px] rounded-full overflow-hidden bg-white/5 shadow-lg",
      children: s.jsx(O, {
        size: "md",
        className: "w-full h-full rounded-full object-cover"
      })
    }), e2[8] = m2) : m2 = e2[8], e2[9] !== u2 ? (h2 = s.jsxs("div", {
      className: "relative w-[68px] h-[68px] flex items-center justify-center z-10 flex-shrink-0 mt-1",
      children: [u2, m2]
    }), e2[9] = u2, e2[10] = h2) : h2 = e2[10];
    const f2 = i2 ? "" : void 0;
    let x2, p2, g2, v2;
    return e2[11] === Symbol.for("react.memo_cache_sentinel") ? (x2 = s.jsx(R, {
      titleClassName: "text-xs font-semibold text-center w-full text-white leading-tight",
      artistClassName: "text-micro leading-tight text-white/60",
      artistRowClassName: "justify-center"
    }), e2[11] = x2) : x2 = e2[11], e2[12] !== f2 ? (p2 = s.jsx("div", {
      "data-tauri-drag-region": f2,
      className: "w-full flex flex-col justify-center items-center text-center z-10 overflow-hidden mt-3 px-1",
      children: x2
    }), e2[12] = f2, e2[13] = p2) : p2 = e2[13], e2[14] === Symbol.for("react.memo_cache_sentinel") ? (g2 = s.jsx(B, {
      className: "w-full grid place-items-center z-10 min-h-[40px] mt-auto pb-0.5 *:[grid-area:1/1]",
      volume: {
        size: "sm",
        barClassName: "w-10",
        className: "px-2"
      },
      axis: "y",
      duration: 0.15,
      controlsClassName: "flex items-center gap-1.5 pointer-events-auto"
    }), e2[14] = g2) : g2 = e2[14], e2[15] !== r2 || e2[16] !== h2 || e2[17] !== p2 ? (v2 = s.jsxs(H, {
      rootKey: "vertical-root",
      rise: 15,
      className: "flex flex-col items-center justify-start px-2.5 py-3.5",
      children: [r2, h2, p2, g2]
    }), e2[15] = r2, e2[16] = h2, e2[17] = p2, e2[18] = v2) : v2 = e2[18], v2;
  },
  le = e2 => {
    const a2 = t.c(13),
      {
        isPlaying: n2
      } = e2;
    let l2, o2, r2, c2, d2;
    return a2[0] !== n2 ? (l2 = s.jsx(i.div, {
      animate: n2 ? {
        height: ["30%", "100%", "30%"]
      } : {
        height: "30%"
      },
      transition: n2 ? {
        repeat: 1 / 0,
        duration: 0.8,
        ease: "easeInOut"
      } : {
        duration: 0.2
      },
      className: "w-[2px] bg-white/80 rounded-[1px]"
    }), a2[0] = n2, a2[1] = l2) : l2 = a2[1], a2[2] !== n2 ? (o2 = s.jsx(i.div, {
      animate: n2 ? {
        height: ["20%", "100%", "20%"]
      } : {
        height: "20%"
      },
      transition: n2 ? {
        repeat: 1 / 0,
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.15
      } : {
        duration: 0.2
      },
      className: "w-[2px] bg-white/80 rounded-[1px]"
    }), a2[2] = n2, a2[3] = o2) : o2 = a2[3], a2[4] !== n2 ? (r2 = s.jsx(i.div, {
      animate: n2 ? {
        height: ["40%", "100%", "40%"]
      } : {
        height: "40%"
      },
      transition: n2 ? {
        repeat: 1 / 0,
        duration: 0.9,
        ease: "easeInOut",
        delay: 0.3
      } : {
        duration: 0.2
      },
      className: "w-[2px] bg-white/80 rounded-[1px]"
    }), a2[4] = n2, a2[5] = r2) : r2 = a2[5], a2[6] !== n2 ? (c2 = s.jsx(i.div, {
      animate: n2 ? {
        height: ["15%", "100%", "15%"]
      } : {
        height: "15%"
      },
      transition: n2 ? {
        repeat: 1 / 0,
        duration: 0.7,
        ease: "easeInOut",
        delay: 0.45
      } : {
        duration: 0.2
      },
      className: "w-[2px] bg-white/80 rounded-[1px]"
    }), a2[6] = n2, a2[7] = c2) : c2 = a2[7], a2[8] !== l2 || a2[9] !== o2 || a2[10] !== r2 || a2[11] !== c2 ? (d2 = s.jsxs("div", {
      className: "flex items-end gap-[3px] h-3 px-2 select-none pointer-events-none",
      children: [l2, o2, r2, c2]
    }), a2[8] = l2, a2[9] = o2, a2[10] = r2, a2[11] = c2, a2[12] = d2) : d2 = a2[12], d2;
  },
  oe = new Set(["island", "card", "docked"]);
function re() {
  var e2;
  const [t2, i2] = n.useState(false),
    [a2, l2] = n.useState(() => {
      var e3;
      try {
        return null != (e3 = f.load("dotify-is-playing")) && e3;
      } catch {
        return false;
      }
    }),
    [o2, r2] = n.useState(() => {
      try {
        return f.load("dotify-current-song");
      } catch {
        return null;
      }
    }),
    [c2, d2] = n.useState(0),
    [u2, m2] = n.useState(0),
    [h2, M2] = n.useState(1),
    [T2, E2] = n.useState("none"),
    [L2, $2] = n.useState(false),
    [A2, U2] = n.useState("none"),
    [D2, I2] = n.useState(false),
    [R2, V2] = n.useState(false),
    [H2, O2] = n.useState(false),
    [B2, q2] = n.useState(false),
    F2 = n.useRef(null),
    K2 = n.useRef(false),
    Y2 = n.useRef(false),
    X2 = x(e3 => e3.setSettings),
    ee2 = x(e3 => e3.settings),
    te2 = x(e3 => {
      var t3, s2;
      return null == (s2 = null == (t3 = e3.settings) ? void 0 : t3.playerSettings) ? void 0 : s2.overlay;
    }) || {
      mode: "disabled",
      position: "top-right",
      opacity: 0.9,
      size: 100,
      w: 340,
      h: 58,
      border: "default"
    },
    se2 = "docked" === te2.mode ? `${Z(te2.position)}-center` : te2.position,
    ie2 = "card" === te2.mode,
    re2 = "left-center" === se2 || "right-center" === se2,
    ce = "top-left" === se2 || "top-right" === se2 || "bottom-left" === se2 || "bottom-right" === se2,
    de = n.useMemo(() => (te2.size || 100) / 100, [te2.size]),
    ue = "docked" === te2.mode,
    me = n.useMemo(() => ie2 ? 320 : re2 ? ue ? 80 : 96 : ce ? 200 : te2.w || 340, [te2.w, re2, ce, ie2, ue]),
    he = n.useMemo(() => ie2 ? 136 : re2 ? ue ? 200 : 240 : ce ? 80 : te2.h || 58, [te2.h, re2, ce, ie2, ue]),
    fe = n.useMemo(() => {
      const e3 = "pill" === (te2.border || "default");
      return re2 ? e3 ? "rounded-full" : "rounded-[8px]" : ce ? e3 ? "rounded-2xl" : "rounded-[8px]" : e3 ? "rounded-full" : "rounded-[6px]";
    }, [te2.border, re2, ce]),
    xe = null == (e2 = null == ee2 ? void 0 : ee2.uiSettings) ? void 0 : e2.transparency,
    pe = !!(null == xe ? void 0 : xe.enabled),
    ge = n.useMemo(() => {
      var e3, t3;
      if (!pe) return {};
      const s2 = Math.max(0, null != (t3 = null == (e3 = null == xe ? void 0 : xe.glass) ? void 0 : e3.blur) ? t3 : 6);
      return {
        backdropFilter: `blur(${s2}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${s2}px) saturate(180%)`,
        backgroundColor: "rgba(13, 13, 13, 0.46)",
        border: "1px solid rgba(255, 255, 255, 0.08)"
      };
    }, [pe, null == xe ? void 0 : xe.glass]),
    ve = p(),
    ye = o2 ? ve(o2) : "",
    be = (null == o2 ? void 0 : o2.title) || "",
    we = (null == o2 ? void 0 : o2.artist) || "",
    je = g(null == o2 ? void 0 : o2.id),
    Ne = u2 > 0 ? Math.min(100, c2 / u2 * 100) : 0,
    {
      topCover: ke,
      bottomCover: Ce,
      showTop: Se
    } = v(ye || null),
    ze = y(ye, 0.22) || "rgba(255, 255, 255, 0.08)",
    Pe = y(ye, 0.08) || "rgba(255, 255, 255, 0.03)",
    _e = y(ye, 0.6) || "#ffffff",
    Me = n.useCallback(e3 => {
      var t3, s2, i3, a3, n2;
      const l3 = null == (t3 = e3.uiSettings) ? void 0 : t3.transparency;
      if (!l3) return;
      const o3 = (l3.opacity / 100).toString();
      if (document.documentElement.style.setProperty("--opacity", o3), l3.enabled) {
        document.documentElement.setAttribute("data-transparency-enabled", "true"), document.documentElement.classList.remove("blur-disabled"), document.body.classList.add("glass-effect");
        const e4 = Math.max(0, null != (i3 = null == (s2 = l3.glass) ? void 0 : s2.blur) ? i3 : 1);
        document.documentElement.style.setProperty("--glass-blur", `${e4}px`), document.documentElement.style.setProperty("--glass-border", `${null != (n2 = null == (a3 = l3.glass) ? void 0 : a3.border) ? n2 : 1}px`), document.documentElement.style.setProperty("--background-blur", "0px"), 0 === e4 ? document.documentElement.setAttribute("data-glass-no-blur", "true") : document.documentElement.removeAttribute("data-glass-no-blur");
      } else document.documentElement.removeAttribute("data-transparency-enabled"), document.documentElement.classList.add("blur-disabled"), document.body.classList.remove("glass-effect"), document.documentElement.removeAttribute("data-glass-no-blur");
    }, []),
    Te = n.useCallback(e3 => {
      var t3;
      const s2 = null == (t3 = e3.themeSettings) ? void 0 : t3.theme;
      let i3 = b.find(e4 => e4.id === s2);
      if (i3) {
        const e4 = w(i3.id);
        if (e4) {
          const t4 = j(e4, "dark");
          t4 && (i3 = t4);
        } else "light" === i3.id && (i3 = b.find(e5 => "dark" === e5.id) || i3);
      } else i3 = b.find(e4 => "dark" === e4.id);
      i3 && N(i3), k("dark");
    }, []),
    Ee = n.useCallback(async () => {
      let e3 = 5;
      for (; e3 > 0;) {
        try {
          C("request-miniplayer-sync").catch(() => {});
          const e4 = await S.getSettings();
          if (e4) return X2(e4), Te(e4), Me(e4), true;
        } catch (t3) {
          z.error("system", "Failed to refresh overlay state, retries left:", e3 - 1, t3);
        }
        e3--, e3 > 0 && (await new Promise(e4 => setTimeout(e4, 500)));
      }
      return false;
    }, [X2, Te, Me]);
  n.useEffect(() => {
    oe.has(te2.mode) && (Y2.current ? P("overlay", {
      action: "update",
      payload: {
        w: te2.w,
        h: te2.h,
        size: te2.size,
        mode: te2.mode,
        position: te2.position
      }
    }).catch(e3 => z.warn("overlay", "Failed to update overlay window:", e3)) : Y2.current = true);
  }, [te2.w, te2.h, te2.size, te2.mode, te2.position]), n.useEffect(() => {
    const e3 = document.documentElement;
    e3.classList.add("overlay-window"), e3.classList.remove("light"), e3.classList.add("dark");
    const t3 = b.find(e4 => "dark" === e4.id);
    return t3 && (N(t3), k("dark")), Ee().then(e4 => {
      e4 || S.getSettings().then(e5 => {
        e5 && (X2(e5), Te(e5), Me(e5));
      });
    }), () => {
      e3.classList.remove("overlay-window");
    };
  }, [Ee, Te, Me, X2]), n.useEffect(() => {
    const e3 = e4 => {
      "Escape" === e4.key && Fe();
    };
    return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
  }, []), n.useEffect(() => {
    const e3 = _("overlay");
    return Promise.all([e3.listen("miniplayer-sync", t3 => {
      if (e3.disposed) return;
      const s2 = t3.payload;
      l2(s2.isPlaying), i2(!!s2.isLoading), r2(s2.currentSong), K2.current || d2(s2.currentTime), m2(s2.duration), void 0 !== s2.volume && M2(s2.volume), s2.repeatMode && E2(s2.repeatMode), void 0 !== s2.isShuffled && $2(s2.isShuffled), s2.shuffleType && U2(s2.shuffleType);
    }), e3.listen("settings-changed", t3 => {
      e3.disposed || t3.payload && (X2(t3.payload), Te(t3.payload), Me(t3.payload));
    }), e3.listen("overlay-state-changed", t3 => {
      if (!e3.disposed && t3.payload) if (t3.payload.active) {
        V2(false);
        try {
          const e4 = f.load("dotify-current-song"),
            t4 = f.load("dotify-is-playing");
          null !== e4 && r2(e4), null !== t4 && l2(t4);
        } catch (s2) {
          z.warn("overlay", "Storage load failed:", s2);
        }
        C("request-miniplayer-sync").catch(() => {});
      } else V2(true);
    })]).then(() => {
      e3.disposed || C("request-miniplayer-sync").catch(() => {});
    }), () => e3.dispose();
  }, [X2, Ee, Me]);
  const Le = n.useCallback(e3 => C("media-button", e3).catch(() => {}), []),
    We = n.useCallback(() => Le("toggle"), [Le]),
    $e = n.useCallback(() => Le("next"), [Le]),
    Ae = n.useCallback(() => Le("previous"), [Le]),
    Ue = n.useCallback(() => Le("cycle-repeat"), [Le]),
    De = n.useCallback(() => Le("toggle-shuffle"), [Le]),
    Ie = n.useCallback(e3 => {
      d2(e3), Le(`seek:${e3}`);
    }, [Le]),
    Re = n.useCallback(e3 => {
      M2(e3), Le(`volume:${e3}`), q2(true), F2.current && clearTimeout(F2.current), F2.current = setTimeout(() => {
        q2(false);
      }, 1e3);
    }, [Le]),
    Ve = n.useCallback((e3, t3, s2) => {
      if (!u2) return null;
      if (re2) {
        const e4 = s2.bottom - t3;
        return Math.max(0, Math.min(1, e4 / s2.height)) * u2;
      }
      {
        const t4 = e3 - s2.left;
        return Math.max(0, Math.min(1, t4 / s2.width)) * u2;
      }
    }, [u2, re2]),
    He = n.useCallback(e3 => {
      if (e3.target.closest("button") || !u2) return;
      K2.current = true, e3.currentTarget.setPointerCapture(e3.pointerId);
      const t3 = Ve(e3.clientX, e3.clientY, e3.currentTarget.getBoundingClientRect());
      null !== t3 && d2(t3);
    }, [u2, Ve]),
    Oe = n.useCallback(e3 => {
      if (!K2.current) return;
      const t3 = Ve(e3.clientX, e3.clientY, e3.currentTarget.getBoundingClientRect());
      null !== t3 && d2(t3);
    }, [Ve]),
    Be = n.useCallback(e3 => {
      if (!K2.current) return;
      K2.current = false;
      const t3 = Ve(e3.clientX, e3.clientY, e3.currentTarget.getBoundingClientRect());
      null !== t3 && Ie(t3);
    }, [Ve, Ie]),
    qe = n.useCallback(e3 => {
      e3.stopPropagation();
      const t3 = e3.deltaY > 0 ? -0.05 : 0.05,
        s2 = Math.max(0, Math.min(1, h2 + t3));
      Re(s2);
    }, [h2, Re]),
    Fe = () => {
      V2(true), setTimeout(() => {
        P("window", {
          action: "toggle_overlay"
        }).catch(() => V2(false));
      }, 200);
    };
  if (n.useEffect(() => () => {
    F2.current && clearTimeout(F2.current);
  }, []), "disabled" === te2.mode || "fullscreen" === te2.mode) return null;
  const Ke = {
    isDraggable: "docked" !== te2.mode && "center" === te2.position,
    isClosing: R2,
    opacity: te2.opacity,
    scale: de,
    borderClass: fe,
    glassStyle: ge,
    glassEnabled: pe,
    width: me,
    height: he,
    position: se2,
    currentSong: o2,
    title: be,
    artist: we,
    isTitleAnimating: je,
    coverUrl: ye,
    topCover: ke,
    bottomCover: Ce,
    showTop: Se,
    progress: Ne,
    currentTime: c2,
    duration: u2,
    repeatMode: T2,
    isShuffled: L2,
    shuffleType: A2,
    isPlaying: a2,
    isLoading: t2,
    progressTint: _e,
    coverTint: ze,
    coverTintUnfilled: Pe,
    volume: h2,
    showVolumeActive: B2,
    WaveformVisualizer: le,
    isCoverHovered: H2,
    isHovered: D2,
    setIsHovered: I2,
    setIsCoverHovered: O2,
    handleSeekPointerDown: He,
    handleSeekPointerMove: Oe,
    handleSeekPointerUp: Be,
    handleVolumeWheel: qe,
    toggle: We,
    prev: Ae,
    next: $e,
    cycleRepeat: Ue,
    toggleShuffle: De
  };
  return s.jsx(W.Provider, {
    value: Ke,
    children: "card" === te2.mode ? s.jsx(Q, {}) : "docked" === te2.mode ? s.jsx(ae, {}) : re2 ? s.jsx(ne, {}) : ce ? s.jsx(G, {}) : s.jsx(J, {})
  });
}
export default re;
