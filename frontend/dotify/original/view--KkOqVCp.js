// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { Nothing as St, Nothing as pt, NativeAudioButton as ft, Nothing as Ae } from "../runtime.jsx";
import { capCoverImage as __fork_coverLoaded } from "../runtime.jsx";
import { c as e, j as t, R as s, r as l, u as a } from "./vendor-ui-BwX-1h7U.js";
import { aM as r, aN as i, aO as o, aP as c, aQ as u, aR as d, aS as m, aT as f, aU as x, E as h, aV as p, aW as v, a as g, aX as w, a$ as N, b0 as S, aj as k, V as z, ak as M, ai as C, b1 as _, b2 as P, b3 as E, b4 as I, T as R, b5 as T, b6 as q, b7 as A, b8 as F, b9 as B, ba as L, bb as $, a3 as D } from "./main-DVjTVWDM.js";
import { b as O, Q as V, bO as W, k as Q, cN as H, N as K, cE as U, z as Y, K as J, s as X, fY as Z, a6 as ee, B as ne, I as le, L as oe, d9 as ce, t as ue, cs as de, bz as me, fp as fe, cO as xe, u as he } from "./globals-Bc3qFUyf.js";
import { T as ze, M as Me } from "./progress-B9dXWW2R.js";
import { A as Ce } from "./seek-KEpYCFv_.js";
function _e(s2) {
  const n2 = e.c(10),
    {
      left: l2,
      right: a2,
      edge: r2,
      hidden: i2,
      menuOpen: o2
    } = s2,
    c2 = void 0 !== r2 && r2 || void 0,
    u2 = void 0 !== i2 && i2 || void 0,
    d2 = void 0 !== o2 && o2 || void 0;
  let m2, f2, x2;
  return n2[0] !== l2 ? (m2 = l2 && t.jsx("div", {
    className: "cover-action-zone",
    "data-side": "left",
    children: l2
  }), n2[0] = l2, n2[1] = m2) : m2 = n2[1], n2[2] !== a2 ? (f2 = a2 && t.jsx("div", {
    className: "cover-action-zone",
    "data-side": "right",
    children: a2
  }), n2[2] = a2, n2[3] = f2) : f2 = n2[3], n2[4] !== c2 || n2[5] !== u2 || n2[6] !== d2 || n2[7] !== m2 || n2[8] !== f2 ? (x2 = t.jsxs("div", {
    className: "cover-corner-actions",
    "data-edge": c2,
    "data-hidden": u2,
    "data-menu-open": d2,
    children: [m2, f2]
  }), n2[4] = c2, n2[5] = u2, n2[6] = d2, n2[7] = m2, n2[8] = f2, n2[9] = x2) : x2 = n2[9], x2;
}
const Fe = s.memo(function (s2) {
    const n2 = e.c(13),
      {
        url: l2,
        isVisible: a2,
        coverSettings: r2,
        playerStyle: i2,
        isBigStyle: o2
      } = s2;
    if (!l2) return null;
    const c2 = "plate" === i2 && "rounded-full";
    let u2;
    n2[0] !== c2 ? (u2 = Q(c2), n2[0] = c2, n2[1] = u2) : u2 = n2[1];
    const d2 = a2 ? 1 : 0;
    let m2, f2, x2;
    return n2[2] !== d2 ? (m2 = {
      position: "absolute",
      inset: 0,
      opacity: d2,
      transition: "opacity 0.25s ease-in-out"
    }, n2[2] = d2, n2[3] = m2) : m2 = n2[3], n2[4] !== r2 || n2[5] !== o2 || n2[6] !== i2 || n2[7] !== l2 ? (f2 = "plate" === i2 ? t.jsx("div", {
      className: "cover-container relative size-full rounded-full",
      children: t.jsx("div", {
        className: "absolute inset-0 overflow-hidden rounded-full",
        children: t.jsx(X, {
          src: l2,
          size: 500,
          plain: true,
          showLoading: false,
          disablePlayerTracking: true,
          disableHoverEffect: true,
          className: "w-full h-full rounded-full"
        })
      })
    }) : r2.coverincover ? t.jsxs("div", {
      className: "relative w-full h-full flex items-center justify-center overflow-hidden",
      children: [t.jsx(X, {
        src: l2,
        size: "sm",
        showLoading: false,
        disablePlayerTracking: true,
        disableHoverEffect: true,
        className: "absolute inset-0 w-full h-full filter blur-2xl scale-125"
      }), t.jsx("div", {
        className: "absolute inset-0 bg-background/40"
      }), t.jsx(X, {
        src: l2,
        size: 500,
        showLoading: false,
        disablePlayerTracking: true,
        disableHoverEffect: true,
        className: Q("relative w-3/4 h-3/4 z-5", "rounded-lg", o2 && "aspect-square"),
        onLoadCapture: o2 ? __fork_coverLoaded : undefined,
        style: o2 ? {
          width: "min(75cqw,75cqh,500px,var(--cover-native-size,500px))",
          height: "min(75cqw,75cqh,500px,var(--cover-native-size,500px))"
        } : undefined
      })],
      style: o2 ? {
        containerType: "size"
      } : undefined
    }) : t.jsx(X, {
      src: l2,
      size: 500,
      showLoading: false,
      disablePlayerTracking: true,
      disableHoverEffect: true,
      className: Q("relative w-full h-full cover-container", o2 && "scale-105")
    }), n2[4] = r2, n2[5] = o2, n2[6] = i2, n2[7] = l2, n2[8] = f2) : f2 = n2[8], n2[9] !== u2 || n2[10] !== m2 || n2[11] !== f2 ? (x2 = t.jsx("div", {
      className: u2,
      style: m2,
      children: f2
    }), n2[9] = u2, n2[10] = m2, n2[11] = f2, n2[12] = x2) : x2 = n2[12], x2;
  }),
  Be = s.memo(function (s2) {
    var n2;
    const a2 = e.c(75),
      {
        className: h2,
        showGlassButtons: p2,
        isCompactMode: v2,
        showLike: g2,
        showDislike: w2,
        showPlaylist: y2,
        disableCanvas: b2
      } = s2,
      j2 = void 0 !== p2 && p2,
      N2 = void 0 !== v2 && v2,
      S2 = void 0 === g2 || g2,
      k2 = void 0 !== w2 && w2,
      z2 = void 0 === y2 || y2,
      M2 = void 0 !== b2 && b2,
      {
        currentSong: C2,
        coverSettings: _2,
        playerCustomSettings: P2,
        playerLayout: E2,
        showVisualizer: I2
      } = r(),
      R2 = P2.playerStyle;
    let T2;
    a2[0] !== R2 ? (T2 = e2 => "plate" === R2 && e2.isPlaying, a2[0] = R2, a2[1] = T2) : T2 = a2[1];
    const q2 = O(T2),
      A2 = P2.showQueue,
      F2 = H(),
      B2 = K(Le),
      L2 = V($e),
      $2 = V(De);
    let D2;
    a2[2] !== C2 || a2[3] !== F2 ? (D2 = C2 ? F2(C2) : null, a2[2] = C2, a2[3] = F2, a2[4] = D2) : D2 = a2[4];
    const G2 = D2,
      X2 = i(C2),
      [Z2, ee2] = l.useState(false),
      [te2, se2] = l.useState(false),
      {
        topCover: ne2,
        bottomCover: le2,
        showTop: ae2
      } = U(G2),
      {
        t: re2
      } = Y(),
      ie2 = "big" === R2,
      oe2 = Boolean(X2) && "plate" !== R2 && !M2,
      ce2 = "left" === E2 || "right" === E2,
      [ue2] = W(),
      de2 = I2 && !ue2.visualizer.onSlider;
    let me2;
    a2[5] !== B2 ? (me2 = null == (n2 = B2("visualizer")) ? void 0 : n2.url, a2[5] = B2, a2[6] = me2) : me2 = a2[6];
    const fe2 = me2,
      xe2 = null == C2 ? void 0 : C2.id;
    let he2;
    a2[7] !== I2 || a2[8] !== xe2 || a2[9] !== fe2 ? (he2 = t.jsx(Ae, {
      trackKey: xe2,
      showVisualizer: I2,
      visualizerGif: fe2,
      className: "w-full h-full"
    }), a2[7] = I2, a2[8] = xe2, a2[9] = fe2, a2[10] = he2) : he2 = a2[10];
    const pe2 = he2;
    let ve2, ge2;
    if (a2[11] === Symbol.for("react.memo_cache_sentinel") ? (ve2 = () => {
      ee2(false);
    }, a2[11] = ve2) : ve2 = a2[11], a2[12] !== X2 ? (ge2 = [X2], a2[12] = X2, a2[13] = ge2) : ge2 = a2[13], l.useEffect(ve2, ge2), !C2 && !ne2 && !le2 || L2 || !$2) {
      let e2;
      return a2[14] === Symbol.for("react.memo_cache_sentinel") ? (e2 = t.jsx("div", {
        className: "w-full h-full aspect-square max-w-full max-h-full flex items-center justify-center rounded-2xl bg-secondary/10 mx-auto",
        children: t.jsx(J.Track, {
          className: "h-1/3 w-1/3 text-muted-foreground/50 flex-shrink-0"
        })
      }), a2[14] = e2) : e2 = a2[14], e2;
    }
    const we2 = ie2 ? "group/cover group w-full h-full flex-1 overflow-hidden rounded-2xl" : "flex items-center justify-center group w-full h-full max-h-full max-w-full",
      ye2 = !ie2 && "default" === E2 && A2 && "aspect-square max-w-[380px] 2xl:max-w-[450px] max-h-full",
      be2 = !ie2 && ce2 && "w-full h-full max-w-full max-h-full aspect-square mx-auto",
      je2 = !A2 && !ie2 && "aspect-square max-w-[500px] 2xl:max-w-[600px] max-h-full mx-auto",
      Ne2 = N2 && !ie2 && "max-w-[280px]",
      Se2 = "default" === R2 && !ie2 && "rounded-2xl overflow-hidden";
    let ke2;
    a2[15] !== h2 || a2[16] !== we2 || a2[17] !== ye2 || a2[18] !== be2 || a2[19] !== je2 || a2[20] !== Ne2 || a2[21] !== Se2 ? (ke2 = Q("relative group/cover text-muted-foreground/40", we2, ye2, be2, je2, Ne2, Se2, h2), a2[15] = h2, a2[16] = we2, a2[17] = ye2, a2[18] = be2, a2[19] = je2, a2[20] = Ne2, a2[21] = Se2, a2[22] = ke2) : ke2 = a2[22];
    const ze2 = ke2;
    let Me2, Ce2;
    a2[23] !== ze2 || a2[24] !== q2 || a2[25] !== R2 ? (Me2 = "plate" === R2 ? Q("player-style-plate relative group/cover group size-[100cqmin] shrink-0 text-muted-foreground/40", q2 && "playing") : ze2, a2[23] = ze2, a2[24] = q2, a2[25] = R2, a2[26] = Me2) : Me2 = a2[26], a2[27] !== le2 || a2[28] !== Z2 || a2[29] !== ne2 ? (Ce2 = !ne2 && !le2 && !Z2 && t.jsx("div", {
      className: "absolute inset-0 flex items-center justify-center pointer-events-none z-0",
      children: t.jsx(J.Track, {
        className: "w-1/3 h-1/3 text-muted-foreground/50"
      })
    }), a2[27] = le2, a2[28] = Z2, a2[29] = ne2, a2[30] = Ce2) : Ce2 = a2[30];
    const Pe2 = !Z2 && !ae2;
    let Ee2;
    a2[31] !== le2 || a2[32] !== _2 || a2[33] !== ie2 || a2[34] !== R2 || a2[35] !== Pe2 ? (Ee2 = t.jsx(Fe, {
      url: le2,
      isVisible: Pe2,
      coverSettings: _2,
      playerStyle: R2,
      isBigStyle: ie2
    }), a2[31] = le2, a2[32] = _2, a2[33] = ie2, a2[34] = R2, a2[35] = Pe2, a2[36] = Ee2) : Ee2 = a2[36];
    const Ie2 = !Z2 && ae2;
    let Re2, Te2, qe2, Be2, Oe2, Ve2;
    a2[37] !== _2 || a2[38] !== ie2 || a2[39] !== R2 || a2[40] !== Ie2 || a2[41] !== ne2 ? (Re2 = t.jsx(Fe, {
      url: ne2,
      isVisible: Ie2,
      coverSettings: _2,
      playerStyle: R2,
      isBigStyle: ie2
    }), a2[37] = _2, a2[38] = ie2, a2[39] = R2, a2[40] = Ie2, a2[41] = ne2, a2[42] = Re2) : Re2 = a2[42], a2[43] !== X2 || a2[44] !== oe2 ? (Te2 = oe2 && X2 && t.jsxs("div", {
      className: "absolute inset-0 z-[2] animate-in fade-in zoom-in-[1.02] duration-500",
      children: [t.jsx(o, {
        url: X2,
        className: "absolute inset-0",
        onReady: () => ee2(true),
        onError: () => ee2(false)
      }), t.jsx("div", {
        className: "absolute inset-0 bg-black/15 pointer-events-none"
      })]
    }), a2[43] = X2, a2[44] = oe2, a2[45] = Te2) : Te2 = a2[45], a2[46] !== pe2 || a2[47] !== _2.visualizer || a2[48] !== de2 ? (qe2 = _2.visualizer && de2 && t.jsx("div", {
      className: "absolute inset-x-0 bottom-0 z-10 h-[28%] pointer-events-none opacity-70 [mask-image:linear-gradient(to_top,black_70%,transparent)]",
      children: pe2
    }), a2[46] = pe2, a2[47] = _2.visualizer, a2[48] = de2, a2[49] = qe2) : qe2 = a2[49], a2[50] !== C2 ? (Be2 = C2 && t.jsx(c, {}), a2[50] = C2, a2[51] = Be2) : Be2 = a2[51], a2[52] !== C2 || a2[53] !== ie2 || a2[54] !== te2 || a2[55] !== R2 || a2[56] !== k2 || a2[57] !== j2 || a2[58] !== S2 || a2[59] !== z2 || a2[60] !== re2 ? (Oe2 = j2 && t.jsx(_e, {
      edge: "plate" === R2,
      hidden: ie2,
      menuOpen: te2,
      left: S2 && t.jsx(x, {
        song: C2,
        variant: "glass",
        surfaceClassName: "cover-action",
        className: "text-white"
      }),
      right: (k2 || z2) && t.jsxs(t.Fragment, {
        children: [k2 && t.jsx(u, {
          song: C2,
          variant: "glass",
          surfaceClassName: "cover-action",
          className: "text-white"
        }), z2 && C2 && t.jsx(d, {
          song: C2,
          showIcon: false,
          onOpenChange: se2,
          trigger: (e2, s3) => t.jsx(m, {
            className: "!rounded-xl text-white",
            surfaceClassName: "cover-action",
            "aria-label": re2("track.context_menu.add_to_playlist"),
            children: t.jsx(f, {
              status: e2,
              saved: s3,
              className: "h-5 w-5",
              tone: "inherit"
            })
          })
        })]
      })
    }), a2[52] = C2, a2[53] = ie2, a2[54] = te2, a2[55] = R2, a2[56] = k2, a2[57] = j2, a2[58] = S2, a2[59] = z2, a2[60] = re2, a2[61] = Oe2) : Oe2 = a2[61], a2[62] !== Me2 || a2[63] !== Ce2 || a2[64] !== Ee2 || a2[65] !== Re2 || a2[66] !== Te2 || a2[67] !== qe2 || a2[68] !== Be2 || a2[69] !== Oe2 ? (Ve2 = t.jsxs("div", {
      className: Me2,
      children: [Ce2, Ee2, Re2, Te2, qe2, Be2, Oe2]
    }), a2[62] = Me2, a2[63] = Ce2, a2[64] = Ee2, a2[65] = Re2, a2[66] = Te2, a2[67] = qe2, a2[68] = Be2, a2[69] = Oe2, a2[70] = Ve2) : Ve2 = a2[70];
    const Ge2 = Ve2;
    let We2;
    return a2[71] !== Ge2 || a2[72] !== ze2 || a2[73] !== R2 ? (We2 = "plate" === R2 ? t.jsx("div", {
      className: Q(ze2, "[container-type:size]"),
      children: Ge2
    }) : Ge2, a2[71] = Ge2, a2[72] = ze2, a2[73] = R2, a2[74] = We2) : We2 = a2[74], We2;
  });
function Le(e2) {
  return e2.getActiveItem;
}
function $e(e2) {
  return e2.isMinimized;
}
function De(e2) {
  return e2.shouldShowTrackCovers;
}
function Oe() {
  const s2 = e.c(12),
    {
      t: n2
    } = Y(),
    {
      playerCustomSettings: l2
    } = r(),
    a2 = "big" === l2.playerStyle && "absolute inset-0";
  let i2, o2, c2, u2, d2;
  return s2[0] !== a2 ? (i2 = Q("flex items-center justify-center w-full h-full", a2), s2[0] = a2, s2[1] = i2) : i2 = s2[1], s2[2] !== n2 ? (o2 = n2("player.track_info.select_track"), s2[2] = n2, s2[3] = o2) : o2 = s2[3], s2[4] !== n2 ? (c2 = n2("player.track_info.select_track_to_play"), s2[4] = n2, s2[5] = c2) : c2 = s2[5], s2[6] !== o2 || s2[7] !== c2 ? (u2 = t.jsx(h, {
    title: o2,
    subtitle: c2,
    variant: "music",
    icon: J.Track,
    className: "opacity-60 scale-90"
  }), s2[6] = o2, s2[7] = c2, s2[8] = u2) : u2 = s2[8], s2[9] !== i2 || s2[10] !== u2 ? (d2 = t.jsx("div", {
    className: i2,
    children: u2
  }), s2[9] = i2, s2[10] = u2, s2[11] = d2) : d2 = s2[11], d2;
}
const Ve = s.memo(n2 => {
    const l2 = e.c(18),
      {
        formatTime: a2,
        className: r2,
        showPlaceholder: i2
      } = n2,
      o2 = void 0 === i2 || i2,
      c2 = s.useRef(null),
      u2 = O(We),
      d2 = O(Qe),
      m2 = O(He),
      f2 = ee(Ke),
      x2 = Z();
    let h2, p2, g2, w2;
    if (l2[0] !== x2 || l2[1] !== (null == m2 ? void 0 : m2.type) || l2[2] !== a2 ? (h2 = () => {
      if ("embed" === (null == m2 ? void 0 : m2.type) || "player" !== x2) return;
      const e2 = e3 => {
        const t2 = c2.current;
        if (!t2) return;
        const s2 = a2(e3);
        t2.textContent !== s2 && (t2.textContent = s2);
      };
      e2(v.getSmoothTime());
      return v.subscribe(e2);
    }, l2[0] = x2, l2[1] = null == m2 ? void 0 : m2.type, l2[2] = a2, l2[3] = h2) : h2 = l2[3], l2[4] !== x2 || l2[5] !== m2 || l2[6] !== a2 || l2[7] !== u2 || l2[8] !== d2 ? (p2 = [u2, d2, m2, a2, x2], l2[4] = x2, l2[5] = m2, l2[6] = a2, l2[7] = u2, l2[8] = d2, l2[9] = p2) : p2 = l2[9], s.useEffect(h2, p2), "embed" === (null == m2 ? void 0 : m2.type) && o2) {
      let e2;
      return l2[10] !== r2 ? (e2 = t.jsx("span", {
        className: r2,
        children: "--:--"
      }), l2[10] = r2, l2[11] = e2) : e2 = l2[11], e2;
    }
    return l2[12] !== a2 || l2[13] !== f2 ? (g2 = a2(f2), l2[12] = a2, l2[13] = f2, l2[14] = g2) : g2 = l2[14], l2[15] !== r2 || l2[16] !== g2 ? (w2 = t.jsx("span", {
      ref: c2,
      className: r2,
      children: g2
    }), l2[15] = r2, l2[16] = g2, l2[17] = w2) : w2 = l2[17], w2;
  }),
  Ge = s.memo(n2 => {
    var l2;
    const a2 = e.c(42),
      {
        duration: r2,
        handleSeek: i2,
        handleSeekStart: o2,
        handleSeekEnd: c2,
        sliderType: u2,
        trackId: d2,
        className: m2,
        disabled: f2,
        visualize: x2
      } = n2,
      h2 = void 0 !== x2 && x2,
      w2 = Z(),
      y2 = O(Ue),
      b2 = O(Ye),
      j2 = K(Xe),
      N2 = !(u2 && "default" !== u2 && "thin" !== u2 || j2);
    let S2;
    a2[0] !== y2 || a2[1] !== N2 ? (S2 = e2 => y2 || !N2 ? e2.currentTime : 0, a2[0] = y2, a2[1] = N2, a2[2] = S2) : S2 = a2[2];
    const k2 = ee(S2),
      z2 = "player" === w2,
      M2 = z2 && !N2;
    let C2;
    a2[3] !== M2 ? (C2 = {
      intervalMs: 50,
      enabled: M2
    }, a2[3] = M2, a2[4] = C2) : C2 = a2[4];
    const _2 = p(C2),
      P2 = s.useRef(null);
    let E2;
    a2[5] !== (null == b2 ? void 0 : b2.duration) || a2[6] !== r2 ? (E2 = Number.isFinite(r2) && r2 > 0 ? r2 : Number.isFinite(null == b2 ? void 0 : b2.duration) && (null != (l2 = null == b2 ? void 0 : b2.duration) ? l2 : 0) > 0 ? null == b2 ? void 0 : b2.duration : 100, a2[5] = null == b2 ? void 0 : b2.duration, a2[6] = r2, a2[7] = E2) : E2 = a2[7];
    const I2 = E2;
    let R2, T2, q2;
    a2[8] !== I2 || a2[9] !== y2 || a2[10] !== N2 || a2[11] !== z2 || a2[12] !== k2 ? (R2 = () => {
      const e2 = P2.current;
      if (!N2 || !e2) return;
      const t2 = t3 => {
        e2.style.setProperty("--p", String(Math.max(0, Math.min(1, t3 / I2))));
      };
      if (y2) t2(k2);else if (z2) return v.subscribe(t2);
    }, T2 = [N2, y2, k2, I2, z2], a2[8] = I2, a2[9] = y2, a2[10] = N2, a2[11] = z2, a2[12] = k2, a2[13] = R2, a2[14] = T2) : (R2 = a2[13], T2 = a2[14]), s.useEffect(R2, T2), a2[15] !== y2 || a2[16] !== N2 || a2[17] !== _2 || a2[18] !== k2 ? (q2 = y2 ? k2 : N2 ? v.getSmoothTime() : _2, a2[15] = y2, a2[16] = N2, a2[17] = _2, a2[18] = k2, a2[19] = q2) : q2 = a2[19];
    const A2 = q2,
      F2 = Math.max(0, Math.min(A2, I2));
    let B2, L2, $2;
    return a2[20] !== F2 ? (B2 = [F2], a2[20] = F2, a2[21] = B2) : B2 = a2[21], a2[22] !== f2 || a2[23] !== I2 || a2[24] !== z2 || a2[25] !== F2 || a2[26] !== u2 || a2[27] !== d2 || a2[28] !== h2 ? (L2 = h2 && "waveform" === u2 && !f2 ? t.jsx(Ae, {
      showVisualizer: true,
      style: "seek",
      isActive: z2,
      trackKey: d2,
      progress: F2 / I2,
      maxFps: 30
    }) : void 0, a2[22] = f2, a2[23] = I2, a2[24] = z2, a2[25] = F2, a2[26] = u2, a2[27] = d2, a2[28] = h2, a2[29] = L2) : L2 = a2[29], a2[30] !== m2 || a2[31] !== f2 || a2[32] !== I2 || a2[33] !== i2 || a2[34] !== c2 || a2[35] !== o2 || a2[36] !== N2 || a2[37] !== u2 || a2[38] !== L2 || a2[39] !== B2 || a2[40] !== d2 ? ($2 = t.jsx(g, {
      ref: P2,
      type: u2,
      live: N2,
      value: B2,
      max: I2,
      step: 0.01,
      onValueChange: i2,
      onPointerDown: o2,
      onValueCommit: c2,
      trackId: d2,
      className: m2,
      disabled: f2,
      useCustomGif: true,
      waveformContent: L2
    }), a2[30] = m2, a2[31] = f2, a2[32] = I2, a2[33] = i2, a2[34] = c2, a2[35] = o2, a2[36] = N2, a2[37] = u2, a2[38] = L2, a2[39] = B2, a2[40] = d2, a2[41] = $2) : $2 = a2[41], $2;
  });
function We(e2) {
  return e2.isPlaying;
}
function Qe(e2) {
  return e2.isSeeking;
}
function He(e2) {
  return e2.currentSong;
}
function Ke(e2) {
  return e2.currentTime;
}
function Ue(e2) {
  return e2.isSeeking;
}
function Ye(e2) {
  return e2.currentSong;
}
function Je(e2) {
  return "slider" === e2.usage && e2.is_active;
}
function Xe(e2) {
  return e2.items.some(Je);
}
const Ze = s.memo(function (s2) {
  var n2, l2;
  const a2 = e.c(47),
    {
      isBigMode: i2
    } = s2,
    o2 = void 0 !== i2 && i2,
    {
      currentSong: c2,
      duration: u2,
      playerCustomSettings: d2
    } = r(),
    {
      handleSeek: m2,
      handleSeekStart: f2,
      handleSeekEnd: x2,
      formatTime: h2
    } = w(),
    [p2] = W(),
    v2 = p2.visualizer.enabled && p2.visualizer.onSlider,
    g2 = v2 ? "waveform" : (null == d2 ? void 0 : d2.sliderType) || "default",
    y2 = null == (n2 = null == d2 ? void 0 : d2.showQueue) || n2,
    b2 = !c2 || "embed" === (null == c2 ? void 0 : c2.type),
    j2 = null == c2 ? void 0 : c2.id,
    N2 = "ios" === g2,
    S2 = "thin" === g2,
    k2 = "waveform" === g2;
  let z2;
  a2[0] !== (null == c2 ? void 0 : c2.duration) || a2[1] !== u2 ? (z2 = Number.isFinite(u2) && u2 > 0 ? u2 : Number.isFinite(null == c2 ? void 0 : c2.duration) && (null != (l2 = null == c2 ? void 0 : c2.duration) ? l2 : 0) > 0 ? null == c2 ? void 0 : c2.duration : 0, a2[0] = null == c2 ? void 0 : c2.duration, a2[1] = u2, a2[2] = z2) : z2 = a2[2];
  const M2 = z2,
    C2 = !y2 && "mt-4",
    _2 = o2 && "mt-0";
  let P2;
  a2[3] !== C2 || a2[4] !== _2 ? (P2 = Q(C2, false, _2), a2[3] = C2, a2[4] = _2, a2[5] = P2) : P2 = a2[5];
  const E2 = N2 && "pb-3";
  let I2;
  a2[6] !== E2 ? (I2 = Q("relative", E2), a2[6] = E2, a2[7] = I2) : I2 = a2[7];
  const R2 = ("default" === g2 || "ios" === g2 || "squiggly" === g2) && "h-2 cursor-pointer",
    T2 = (!y2 || o2) && ("default" === g2 || "ios" === g2 || "squiggly" === g2) && "h-3",
    q2 = false,
    A2 = S2 && "h-5 cursor-pointer",
    F2 = (!y2 || o2) && S2 && "h-6",
    B2 = false,
    L2 = k2 && (!y2 || o2 ? "h-12" : "h-8"),
    $2 = false;
  let D2, O2, V2;
  a2[8] !== q2 || a2[9] !== A2 || a2[10] !== F2 || a2[11] !== B2 || a2[12] !== L2 || a2[13] !== $2 || a2[14] !== R2 || a2[15] !== T2 ? (D2 = Q("w-full", R2, T2, q2, A2, F2, B2, L2, $2), a2[8] = q2, a2[9] = A2, a2[10] = F2, a2[11] = B2, a2[12] = L2, a2[13] = $2, a2[14] = R2, a2[15] = T2, a2[16] = D2) : D2 = a2[16], a2[17] !== b2 || a2[18] !== M2 || a2[19] !== m2 || a2[20] !== x2 || a2[21] !== f2 || a2[22] !== v2 || a2[23] !== g2 || a2[24] !== D2 || a2[25] !== j2 ? (O2 = t.jsx("div", {
    className: "relative w-full",
    children: t.jsx(Ge, {
      visualize: v2,
      sliderType: g2,
      duration: M2,
      handleSeek: m2,
      handleSeekStart: f2,
      handleSeekEnd: x2,
      trackId: j2,
      className: D2,
      disabled: b2
    })
  }), a2[17] = b2, a2[18] = M2, a2[19] = m2, a2[20] = x2, a2[21] = f2, a2[22] = v2, a2[23] = g2, a2[24] = D2, a2[25] = j2, a2[26] = O2) : O2 = a2[26], a2[27] !== O2 || a2[28] !== I2 ? (V2 = t.jsx("div", {
    className: I2,
    children: O2
  }), a2[27] = O2, a2[28] = I2, a2[29] = V2) : V2 = a2[29];
  const G2 = o2 && "mt-3";
  let H2, K2, U2, Y2, J2, X2;
  return a2[30] !== G2 ? (H2 = Q("flex justify-between mt-2", G2), a2[30] = G2, a2[31] = H2) : H2 = a2[31], a2[32] !== h2 ? (K2 = t.jsx(Ve, {
    formatTime: h2,
    className: "time-text-player text-xs text-foreground/60"
  }), a2[32] = h2, a2[33] = K2) : K2 = a2[33], a2[34] !== M2 || a2[35] !== h2 ? (U2 = h2(M2), a2[34] = M2, a2[35] = h2, a2[36] = U2) : U2 = a2[36], a2[37] !== U2 ? (Y2 = t.jsx("span", {
    className: "time-text-player text-xs text-foreground/60 select-none",
    children: U2
  }), a2[37] = U2, a2[38] = Y2) : Y2 = a2[38], a2[39] !== H2 || a2[40] !== K2 || a2[41] !== Y2 ? (J2 = t.jsxs("div", {
    className: H2,
    children: [K2, Y2]
  }), a2[39] = H2, a2[40] = K2, a2[41] = Y2, a2[42] = J2) : J2 = a2[42], a2[43] !== V2 || a2[44] !== J2 || a2[45] !== P2 ? (X2 = t.jsxs("div", {
    className: P2,
    children: [V2, J2]
  }), a2[43] = V2, a2[44] = J2, a2[45] = P2, a2[46] = X2) : X2 = a2[46], X2;
});
const vt = s.memo(function (s2) {
    const n2 = e.c(7),
      {
        className: l2
      } = s2;
    let a2, r2, i2, o2, c2;
    return n2[0] !== l2 ? (a2 = Q("flex items-center gap-0.5", l2), n2[0] = l2, n2[1] = a2) : a2 = n2[1], n2[2] === Symbol.for("react.memo_cache_sentinel") ? (r2 = t.jsx(N, {}), i2 = t.jsx(ft, {}), o2 = t.jsx(pt, {}), n2[2] = r2, n2[3] = i2, n2[4] = o2) : (r2 = n2[2], i2 = n2[3], o2 = n2[4]), n2[5] !== a2 ? (c2 = t.jsxs("div", {
      className: a2,
      children: [r2, i2, o2]
    }), n2[5] = a2, n2[6] = c2) : c2 = n2[6], c2;
  }),
  gt = s.memo(function (s2) {
    const n2 = e.c(45),
      {
        isBigStyle: a2,
        isLeftOrRight: r2,
        isCompactMode: i2,
        shouldShowQueue: o2
      } = s2,
      c2 = void 0 !== a2 && a2,
      d2 = void 0 !== r2 && r2,
      m2 = void 0 !== i2 && i2,
      f2 = void 0 !== o2 && o2,
      x2 = O(wt),
      [h2, p2] = l.useState(false),
      v2 = S(null == x2 ? void 0 : x2.id),
      g2 = c2 ? "" : "rounded-2xl bg-background/10 border border-border/20",
      w2 = c2 && "gap-1 mt-2";
    let y2;
    n2[0] !== w2 ? (y2 = Q("flex flex-col w-full gap-2 mt-3", w2), n2[0] = w2, n2[1] = y2) : y2 = n2[1];
    const b2 = c2 ? "py-1 px-0" : !f2 && "py-4 px-6",
      j2 = d2 && !c2 && "py-2 px-3",
      N2 = m2 && "py-2 px-3";
    let P2, E2, I2, R2, T2, q2, A2, F2;
    n2[2] !== g2 || n2[3] !== b2 || n2[4] !== j2 || n2[5] !== N2 ? (P2 = Q("flex items-center justify-between w-full", g2, "py-3 px-4", b2, j2, N2), n2[2] = g2, n2[3] = b2, n2[4] = j2, n2[5] = N2, n2[6] = P2) : P2 = n2[6], n2[7] !== v2 ? (E2 = t.jsx(k, {
      asChild: true,
      children: t.jsx(ne, {
        variant: "ghost",
        size: "icon",
        className: "h-10 w-10 text-foreground/70 hover:text-foreground hover:bg-transparent rounded-full",
        children: v2 ? t.jsx(oe, {
          className: "h-5 w-5 animate-spin"
        }) : t.jsx(le.more, {
          className: "h-5 w-5"
        })
      })
    }), n2[7] = v2, n2[8] = E2) : E2 = n2[8], n2[9] !== x2 ? (I2 = x2 && t.jsx(z, {
      menu: "dropdown",
      showHeader: true,
      song: x2,
      showAddToPlaylist: true,
      showDownloadFile: true,
      showQueueDownload: true,
      showPlatform: true
    }), n2[9] = x2, n2[10] = I2) : I2 = n2[10], n2[11] !== I2 ? (R2 = t.jsx(M, {
      align: "start",
      side: "bottom",
      sideOffset: 8,
      className: "w-[248px] p-0 overflow-hidden",
      children: I2
    }), n2[11] = I2, n2[12] = R2) : R2 = n2[12], n2[13] !== h2 || n2[14] !== E2 || n2[15] !== R2 ? (T2 = t.jsx("div", {
      className: "flex items-center justify-start w-12",
      children: t.jsxs(C, {
        modal: false,
        open: h2,
        onOpenChange: p2,
        children: [E2, R2]
      })
    }), n2[13] = h2, n2[14] = E2, n2[15] = R2, n2[16] = T2) : T2 = n2[16], n2[17] === Symbol.for("react.memo_cache_sentinel") ? (q2 = t.jsx(_, {}), n2[17] = q2) : q2 = n2[17], n2[18] !== x2 ? (A2 = t.jsx("div", {
      className: "flex items-center justify-end w-12",
      children: t.jsx(u, {
        song: x2,
        className: "h-10 w-10 text-foreground/70 hover:text-foreground",
        iconClassName: "h-5 w-5"
      })
    }), n2[18] = x2, n2[19] = A2) : A2 = n2[19], n2[20] !== P2 || n2[21] !== T2 || n2[22] !== A2 ? (F2 = t.jsxs("div", {
      className: P2,
      children: [T2, q2, A2]
    }), n2[20] = P2, n2[21] = T2, n2[22] = A2, n2[23] = F2) : F2 = n2[23];
    const B2 = c2 && "px-0";
    let L2;
    n2[24] !== g2 || n2[25] !== B2 ? (L2 = Q("flex min-w-0 items-center flex-[2] gap-2", g2, "px-4 h-full", B2), n2[24] = g2, n2[25] = B2, n2[26] = L2) : L2 = n2[26];
    const $2 = "embed" === (null == x2 ? void 0 : x2.type);
    let D2, V2;
    n2[27] !== $2 ? (D2 = t.jsx(ce, {
      disabled: $2,
      showValue: "none",
      compact: true,
      className: "min-w-0 flex-1"
    }), n2[27] = $2, n2[28] = D2) : D2 = n2[28], n2[29] !== L2 || n2[30] !== D2 ? (V2 = t.jsx("div", {
      className: L2,
      children: D2
    }), n2[29] = L2, n2[30] = D2, n2[31] = V2) : V2 = n2[31];
    const G2 = c2 && "px-0";
    let W2, H2, K2, U2, Y2;
    return n2[32] !== g2 || n2[33] !== G2 ? (W2 = Q("flex items-center justify-center gap-1", g2, "px-2 h-full", G2), n2[32] = g2, n2[33] = G2, n2[34] = W2) : W2 = n2[34], n2[35] === Symbol.for("react.memo_cache_sentinel") ? (H2 = t.jsx(vt, {}), n2[35] = H2) : H2 = n2[35], n2[36] !== W2 ? (K2 = t.jsx("div", {
      className: W2,
      children: H2
    }), n2[36] = W2, n2[37] = K2) : K2 = n2[37], n2[38] !== V2 || n2[39] !== K2 ? (U2 = t.jsxs("div", {
      className: "flex items-center gap-2 h-11",
      children: [V2, K2]
    }), n2[38] = V2, n2[39] = K2, n2[40] = U2) : U2 = n2[40], n2[41] !== F2 || n2[42] !== U2 || n2[43] !== y2 ? (Y2 = t.jsxs("div", {
      className: y2,
      children: [F2, U2]
    }), n2[41] = F2, n2[42] = U2, n2[43] = y2, n2[44] = Y2) : Y2 = n2[44], Y2;
  });
function wt(e2) {
  return e2.currentSong;
}
const yt = s.memo(function (s2) {
  var n2, l2, a2, i2, o2;
  const c2 = e.c(62),
    {
      isBigStyle: u2,
      isCompactMode: d2,
      shouldShowQueue: m2,
      isTitleAnimating: f2,
      playerCustomSettings: x2
    } = s2,
    {
      currentSong: h2
    } = r(),
    {
      t: p2
    } = Y(),
    v2 = x2.titleAlignment || "left",
    g2 = null == (n2 = x2.showAvatars) || n2;
  let w2;
  c2[0] !== (null == h2 ? void 0 : h2.artists) ? (w2 = (null == (a2 = null == (l2 = null == h2 ? void 0 : h2.artists) ? void 0 : l2.find(bt)) ? void 0 : a2.avatar) || (null == (o2 = null == (i2 = null == h2 ? void 0 : h2.artists) ? void 0 : i2[0]) ? void 0 : o2.avatar), c2[0] = null == h2 ? void 0 : h2.artists, c2[1] = w2) : w2 = c2[1];
  const y2 = w2;
  let b2;
  c2[2] !== (null == h2 ? void 0 : h2.title) || c2[3] !== p2 ? (b2 = (null == h2 ? void 0 : h2.title) || p2("player.track_info.select_track"), c2[2] = null == h2 ? void 0 : h2.title, c2[3] = p2, c2[4] = b2) : b2 = c2[4];
  const j2 = u2 ? m2 ? "text-3xl 2xl:text-5xl" : "text-5xl 2xl:text-7xl" : m2 ? "text-3xl 2xl:text-5xl" : "text-4xl 2xl:text-6xl",
    N2 = d2 && "text-2xl";
  let S2, k2;
  c2[5] !== j2 || c2[6] !== N2 ? (S2 = Q("font-semibold leading-tight tracking-tight text-foreground", j2, N2), c2[5] = j2, c2[6] = N2, c2[7] = S2) : S2 = c2[7], c2[8] !== b2 || c2[9] !== S2 ? (k2 = t.jsx(t.Fragment, {
    children: t.jsx("div", {
      className: "relative min-w-0 max-w-full flex items-center justify-center",
      children: t.jsx("div", {
        className: "min-w-0 max-w-full overflow-hidden",
        children: t.jsx(Me, {
          text: b2,
          containerClassName: "w-auto min-w-0 max-w-full",
          className: S2
        })
      })
    })
  }), c2[8] = b2, c2[9] = S2, c2[10] = k2) : k2 = c2[10];
  const z2 = k2,
    M2 = d2 && !u2 && "gap-0";
  let C2;
  c2[11] !== M2 ? (C2 = Q("flex flex-col w-full group/track-info", "gap-0.5 2xl:gap-1", M2), c2[11] = M2, c2[12] = C2) : C2 = c2[12];
  const _2 = "center" === v2,
    I2 = "right" === v2,
    R2 = "left" === v2;
  let T2;
  c2[13] !== I2 || c2[14] !== R2 || c2[15] !== _2 ? (T2 = Q("flex items-center min-w-0 relative overflow-hidden", {
    "justify-center": _2,
    "justify-end": I2,
    "justify-start": R2
  }), c2[13] = I2, c2[14] = R2, c2[15] = _2, c2[16] = T2) : T2 = c2[16];
  const q2 = `title-${null == h2 ? void 0 : h2.id}`,
    A2 = d2 ? "md" : "lg",
    F2 = f2 && "animate-track-title-in";
  let B2, L2, $2;
  c2[17] !== F2 ? (B2 = Q(F2), c2[17] = F2, c2[18] = B2) : B2 = c2[18], c2[19] !== h2 || c2[20] !== q2 || c2[21] !== A2 || c2[22] !== B2 || c2[23] !== z2 ? (L2 = t.jsx(E, {
    song: h2,
    size: A2,
    className: B2,
    children: z2
  }, q2), c2[19] = h2, c2[20] = q2, c2[21] = A2, c2[22] = B2, c2[23] = z2, c2[24] = L2) : L2 = c2[24], c2[25] !== T2 || c2[26] !== L2 ? ($2 = t.jsx("div", {
    className: T2,
    children: L2
  }), c2[25] = T2, c2[26] = L2, c2[27] = $2) : $2 = c2[27];
  const D2 = f2 && "animate-track-artist-in",
    O2 = "center" === v2,
    V2 = "right" === v2,
    G2 = "left" === v2;
  let W2;
  c2[28] !== D2 || c2[29] !== O2 || c2[30] !== V2 || c2[31] !== G2 ? (W2 = Q("flex items-center gap-1 mt-0 min-w-0 relative", D2, {
    "justify-center": O2,
    "justify-end": V2,
    "justify-start": G2
  }), c2[28] = D2, c2[29] = O2, c2[30] = V2, c2[31] = G2, c2[32] = W2) : W2 = c2[32];
  const H2 = `artist-${null == h2 ? void 0 : h2.id}`,
    K2 = u2 ? "text-xl 2xl:text-2xl" : m2 ? "text-lg" : "text-xl",
    U2 = d2 && "text-sm";
  let J2, X2, Z2, ee2, te2, se2, ne2;
  return c2[33] !== K2 || c2[34] !== U2 ? (J2 = Q("text-muted-foreground min-w-0 max-w-full flex items-center gap-2", K2, U2), c2[33] = K2, c2[34] = U2, c2[35] = J2) : J2 = c2[35], c2[36] !== y2 || c2[37] !== (null == h2 ? void 0 : h2.artist) || c2[38] !== (null == h2 ? void 0 : h2.source) || c2[39] !== u2 || c2[40] !== d2 || c2[41] !== g2 ? (X2 = g2 && y2 && t.jsx(Ce, {
    src: y2,
    name: null == h2 ? void 0 : h2.artist,
    size: u2 ? 26 : d2 ? 16 : 20,
    className: Q("shrink-0 self-center", u2 ? "w-6 h-6 2xl:w-[26px] 2xl:h-[26px]" : d2 ? "w-4 h-4" : "w-5 h-5"),
    source: null == h2 ? void 0 : h2.source
  }), c2[36] = y2, c2[37] = null == h2 ? void 0 : h2.artist, c2[38] = null == h2 ? void 0 : h2.source, c2[39] = u2, c2[40] = d2, c2[41] = g2, c2[42] = X2) : X2 = c2[42], c2[43] !== h2 || c2[44] !== p2 ? (Z2 = (null == h2 ? void 0 : h2.artist) && (null == h2 ? void 0 : h2.source) ? t.jsx(ze, {
    containerClassName: "min-w-0 max-w-full",
    children: t.jsx(P, {
      artists: h2.artist,
      source: h2.source,
      artistsArray: h2.artists,
      origin: ue(h2),
      className: "hover:text-primary transition-colors"
    })
  }) : p2("player.track_info.select_track_to_play"), c2[43] = h2, c2[44] = p2, c2[45] = Z2) : Z2 = c2[45], c2[46] !== h2 || c2[47] !== d2 ? (ee2 = h2 && t.jsx(de, {
    song: h2,
    size: d2 ? "sm" : "md"
  }), c2[46] = h2, c2[47] = d2, c2[48] = ee2) : ee2 = c2[48], c2[49] !== J2 || c2[50] !== X2 || c2[51] !== Z2 || c2[52] !== ee2 ? (te2 = t.jsxs("div", {
    className: J2,
    children: [X2, Z2, ee2]
  }), c2[49] = J2, c2[50] = X2, c2[51] = Z2, c2[52] = ee2, c2[53] = te2) : te2 = c2[53], c2[54] !== W2 || c2[55] !== H2 || c2[56] !== te2 ? (se2 = t.jsx("div", {
    className: W2,
    children: te2
  }, H2), c2[54] = W2, c2[55] = H2, c2[56] = te2, c2[57] = se2) : se2 = c2[57], c2[58] !== $2 || c2[59] !== se2 || c2[60] !== C2 ? (ne2 = t.jsxs("div", {
    className: C2,
    children: [$2, se2]
  }), c2[58] = $2, c2[59] = se2, c2[60] = C2, c2[61] = ne2) : ne2 = c2[61], ne2;
});
function bt(e2) {
  return e2.avatar;
}
const jt = s.memo(function () {
  const s2 = e.c(23),
    {
      currentSong: n2,
      queueSongs: l2,
      repeatMode: r2,
      isShuffled: i2,
      shuffledIndices: o2,
      currentShuffleIndex: c2
    } = O(a(Nt));
  let u2;
  e: {
    if (!n2 || 0 === l2.length) {
      u2 = null;
      break e;
    }
    let e2;
    s2[0] !== c2 || s2[1] !== n2 || s2[2] !== i2 || s2[3] !== l2 || s2[4] !== r2 || s2[5] !== o2 ? (e2 = me({
      currentSong: n2,
      queueSongs: l2,
      repeatMode: r2,
      isShuffled: i2,
      shuffledIndices: o2
    }), s2[0] = c2, s2[1] = n2, s2[2] = i2, s2[3] = l2, s2[4] = r2, s2[5] = o2, s2[6] = e2) : e2 = s2[6], u2 = e2;
  }
  const d2 = u2,
    {
      next: m2,
      toggleFavorite: f2
    } = w(),
    {
      t: x2
    } = Y();
  if (!d2) return null;
  let h2, p2, v2, g2, y2, b2;
  return s2[7] !== x2 ? (h2 = x2("player.next_track.coming_next"), s2[7] = x2, s2[8] = h2) : h2 = s2[8], s2[9] !== h2 ? (p2 = t.jsx("span", {
    className: "text-sm font-medium text-primary/80",
    children: h2
  }), s2[9] = h2, s2[10] = p2) : p2 = s2[10], s2[11] !== l2.length ? (v2 = t.jsx(I, {
    songsCount: l2.length,
    upcomingCount: l2.length,
    compact: true
  }), s2[11] = l2.length, s2[12] = v2) : v2 = s2[12], s2[13] !== p2 || s2[14] !== v2 ? (g2 = t.jsxs("div", {
    className: "mb-2 flex items-center justify-between",
    children: [p2, v2]
  }), s2[13] = p2, s2[14] = v2, s2[15] = g2) : g2 = s2[15], s2[16] !== m2 || s2[17] !== d2 || s2[18] !== f2 ? (y2 = t.jsx(R, {
    song: d2,
    index: 0,
    onPlaySong: m2,
    onToggleLike: f2,
    variant: "queue"
  }), s2[16] = m2, s2[17] = d2, s2[18] = f2, s2[19] = y2) : y2 = s2[19], s2[20] !== g2 || s2[21] !== y2 ? (b2 = t.jsxs("div", {
    className: "mt-4 bg-raised rounded-2xl border border-border-subtle p-4 shadow-sm relative",
    children: [g2, y2]
  }), s2[20] = g2, s2[21] = y2, s2[22] = b2) : b2 = s2[22], b2;
});
function Nt(e2) {
  return {
    currentSong: e2.currentSong,
    queueSongs: e2.queueSongs,
    repeatMode: e2.repeatMode,
    isShuffled: e2.isShuffled,
    shuffledIndices: e2.shuffledIndices,
    currentShuffleIndex: e2.currentShuffleIndex
  };
}
function kt(e2) {
  var t2, s2, n2;
  return null == (n2 = null == (s2 = null == (t2 = e2.settings) ? void 0 : t2.uiSettings) ? void 0 : s2.transparency) ? void 0 : n2.enabled;
}
function zt(e2) {
  return e2.getActiveItem;
}
const Mt = s.memo(function () {
    const s2 = e.c(6),
      {
        data: n2,
        actions: l2
      } = T();
    let a2, r2, i2;
    return s2[0] === Symbol.for("react.memo_cache_sentinel") ? (a2 = t.jsx(Ct, {}), s2[0] = a2) : a2 = s2[0], s2[1] !== l2 ? (r2 = t.jsx(q.Provider, {
      value: l2,
      children: a2
    }), s2[1] = l2, s2[2] = r2) : r2 = s2[2], s2[3] !== n2 || s2[4] !== r2 ? (i2 = t.jsx(A.Provider, {
      value: n2,
      children: r2
    }), s2[3] = n2, s2[4] = r2, s2[5] = i2) : i2 = s2[5], i2;
  }),
  Ct = s.memo(function () {
    const s2 = e.c(97),
      [n2] = W(),
      {
        currentSong: a2,
        coverSettings: o2,
        playerCustomSettings: c2,
        playerLayout: u2,
        showVisualizer: m2,
        t: f2,
        statMode: h2,
        isStatsLoading: p2,
        listeningStats: v2,
        formatTimeDetailed: g2,
        setIsPlayerPortalOpen: y2,
        getActiveItem: b2,
        getCoverArt: j2,
        isCompactMode: N2,
        isTitleAnimating: S2,
        isGlassEnabled: k2
      } = function () {
        var t2;
        const s3 = e.c(16),
          n3 = r(),
          a3 = w();
        let o3;
        s3[0] !== n3 || s3[1] !== a3 ? (o3 = {
          ...n3,
          ...a3
        }, s3[0] = n3, s3[1] = a3, s3[2] = o3) : o3 = s3[2];
        const c3 = o3,
          {
            currentSong: u3,
            showLyrics: d2,
            setShowLyrics: m3,
            setIsPlayerPortalOpen: f3
          } = c3,
          x2 = K(zt),
          h3 = H(),
          p3 = i(u3),
          {
            width: v3,
            height: g3
          } = fe(),
          y3 = xe(null == u3 ? void 0 : u3.id),
          b3 = null != (t2 = he(kt)) && t2;
        let j3, N3;
        s3[3] !== f3 || s3[4] !== m3 || s3[5] !== d2 ? (j3 = () => {
          d2 && (f3(true), m3(false));
        }, N3 = [d2, m3, f3], s3[3] = f3, s3[4] = m3, s3[5] = d2, s3[6] = j3, s3[7] = N3) : (j3 = s3[6], N3 = s3[7]), l.useEffect(j3, N3);
        const S3 = v3 < 500 || g3 < 600;
        let k3;
        return s3[8] !== p3 || s3[9] !== x2 || s3[10] !== h3 || s3[11] !== b3 || s3[12] !== y3 || s3[13] !== c3 || s3[14] !== S3 ? (k3 = {
          ...c3,
          getActiveItem: x2,
          getCoverArt: h3,
          canvasUrl: p3,
          isCompactMode: S3,
          isTitleAnimating: y3,
          isGlassEnabled: b3
        }, s3[8] = p3, s3[9] = x2, s3[10] = h3, s3[11] = b3, s3[12] = y3, s3[13] = c3, s3[14] = S3, s3[15] = k3) : k3 = s3[15], k3;
      }(),
      z2 = "big" === c2.playerStyle,
      M2 = "left" === u2 || "right" === u2,
      C2 = !z2 && M2,
      _2 = Boolean(a2),
      P2 = l.useRef(null),
      E2 = l.useRef(null),
      I2 = l.useRef(null),
      R2 = l.useRef(null);
    let T2, q2, A2;
    s2[0] !== C2 ? (T2 = () => {
      const e2 = P2.current,
        t2 = E2.current,
        s3 = I2.current,
        n3 = R2.current;
      if (!(C2 && e2 && t2 && s3 && n3)) return;
      let l2 = -1,
        a3 = -1,
        r2 = null;
      const i2 = new ResizeObserver(() => {
        null !== r2 && cancelAnimationFrame(r2), r2 = requestAnimationFrame(() => {
          r2 = null;
          const i3 = Math.round(t2.clientWidth);
          Math.abs(i3 - l2) > 1 && (l2 = i3, e2.style.setProperty("--cover-w", `${i3}px`));
          const o3 = Math.round(s3.offsetWidth - n3.clientWidth + n3.clientHeight);
          Math.abs(o3 - a3) > 2 && (a3 = o3, s3.style.setProperty("--pane-w", `${o3}px`));
        });
      });
      return i2.observe(t2), i2.observe(n3), () => {
        null !== r2 && cancelAnimationFrame(r2), i2.disconnect();
      };
    }, s2[0] = C2, s2[1] = T2) : T2 = s2[1], s2[2] !== C2 || s2[3] !== _2 ? (q2 = [C2, _2], s2[2] = C2, s2[3] = _2, s2[4] = q2) : q2 = s2[4], l.useEffect(T2, q2), A2 = !(!c2.showQueue || !a2);
    const O2 = A2;
    let V2;
    s2[5] !== y2 ? (V2 = e2 => {
      const t2 = e2.target;
      t2.closest("button") || t2.closest('[role="button"]') || t2.closest("a") || y2(true);
    }, s2[5] = y2, s2[6] = V2) : V2 = s2[6];
    const G2 = V2;
    let U2;
    s2[7] !== (null == a2 ? void 0 : a2.id) || s2[8] !== b2 || s2[9] !== m2 ? (U2 = e2 => {
      var s3;
      return t.jsx("div", {
        className: Q("w-full rounded-2xl overflow-hidden mt-3", e2),
        children: t.jsx(Ae, {
          trackKey: null == a2 ? void 0 : a2.id,
          showVisualizer: m2,
          visualizerGif: null == (s3 = b2("visualizer")) ? void 0 : s3.url,
          className: "w-full h-full"
        })
      });
    }, s2[7] = null == a2 ? void 0 : a2.id, s2[8] = b2, s2[9] = m2, s2[10] = U2) : U2 = s2[10];
    const Y2 = U2,
      J2 = m2 && !o2.visualizer && !n2.visualizer.onSlider;
    let X2;
    s2[11] !== a2 || s2[12] !== j2 ? (X2 = a2 ? j2(a2) : null, s2[11] = a2, s2[12] = j2, s2[13] = X2) : X2 = s2[13];
    const Z2 = X2,
      ee2 = a2 && "dark bg-background";
    let te2, se2, ne2;
    s2[14] !== ee2 ? (te2 = Q("relative h-full w-full overflow-hidden rounded-3xl text-foreground", ee2), s2[14] = ee2, s2[15] = te2) : te2 = s2[15], s2[16] !== Z2 || s2[17] !== a2 || s2[18] !== N2 || s2[19] !== S2 || s2[20] !== G2 || s2[21] !== c2 || s2[22] !== O2 || s2[23] !== J2 || s2[24] !== Y2 ? (se2 = a2 ? t.jsxs(t.Fragment, {
      children: [Z2 && t.jsx("div", {
        className: "pointer-events-none absolute inset-0 scale-125 bg-cover bg-center opacity-60 blur-3xl",
        style: {
          backgroundImage: `url("${Z2}")`
        }
      }), t.jsx("div", {
        className: "pointer-events-none absolute inset-0 bg-background/45"
      }), t.jsx("div", {
        className: "absolute inset-x-0 top-0 bottom-[18%] cursor-pointer [mask-image:linear-gradient(to_bottom,black_50%,transparent)]",
        onClick: event => {
          if (!event.target.closest("button,a")) y2(true);
        },
        children: t.jsx(Be, {
          isCompactMode: N2,
          showGlassButtons: false,
          className: "size-full !rounded-none"
        }),
        role: "button",
        tabIndex: 0,
        "aria-label": "Открыть плеер на весь экран",
        onKeyDown: event => {
          if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            y2(true);
          }
        }
      }), t.jsxs("div", {
        className: Q("absolute inset-x-0 bottom-0 z-10 flex flex-col", N2 ? "p-4" : "p-6 2xl:p-8"),
        children: [t.jsxs("div", {
          className: "flex items-center gap-3",
          children: [t.jsx(x, {
            song: a2,
            variant: "ghost",
            className: "h-10 w-10 shrink-0 text-foreground/70 hover:bg-transparent hover:text-foreground",
            iconClassName: "h-5 w-5"
          }), t.jsx("div", {
            className: "min-w-0 flex-1",
            children: t.jsx(yt, {
              isBigStyle: true,
              isCompactMode: N2,
              shouldShowQueue: O2,
              isTitleAnimating: S2,
              playerCustomSettings: c2
            })
          }), t.jsx("div", {
            className: "flex shrink-0 items-center",
            children: t.jsx(d, {
              song: a2,
              size: "md",
              trigger: _t
            })
          })]
        }), t.jsx("div", {
          className: Q("w-full", "ios" !== c2.sliderType && "mt-3"),
          children: t.jsx(Ze, {})
        }), J2 && Y2("h-14 2xl:h-20"), t.jsx(gt, {
          isBigStyle: true,
          isCompactMode: N2,
          shouldShowQueue: O2
        })]
      })]
    }) : t.jsx(Oe, {}), s2[16] = Z2, s2[17] = a2, s2[18] = N2, s2[19] = S2, s2[20] = G2, s2[21] = c2, s2[22] = O2, s2[23] = J2, s2[24] = Y2, s2[25] = se2) : se2 = s2[25], s2[26] !== te2 || s2[27] !== se2 ? (ne2 = t.jsx("div", {
      className: te2,
      children: se2
    }), s2[26] = te2, s2[27] = se2, s2[28] = ne2) : ne2 = s2[28];
    const le2 = ne2,
      ae2 = !O2 && "w-full flex-col";
    let re2, ie2;
    s2[29] !== ae2 ? (re2 = Q("overflow-hidden relative player-card !border-0 bg-transparent border-none shadow-none h-full flex-shrink-0", ae2), s2[29] = ae2, s2[30] = re2) : re2 = s2[30], s2[31] !== a2 || s2[32] !== k2 || s2[33] !== c2.playerStyle ? (ie2 = a2 && t.jsx(F, {
      song: a2,
      coverUrl: null,
      className: "rounded-3xl",
      canvasOpacity: "plate" === c2.playerStyle || k2 ? 0.15 : 0.25,
      coverOpacity: 0,
      overlayOpacity: "plate" === c2.playerStyle ? 0.2 : k2 ? 0.15 : 0.55
    }), s2[31] = a2, s2[32] = k2, s2[33] = c2.playerStyle, s2[34] = ie2) : ie2 = s2[34];
    const oe2 = O2 && "default" === u2 && "pl-0",
      ce2 = M2 && "flex flex-col",
      ue2 = !O2 && "flex flex-col justify-center px-6 py-6";
    let de2, me2, pe2, ve2;
    s2[35] !== oe2 || s2[36] !== ce2 || s2[37] !== ue2 ? (de2 = Q("relative z-10 p-4 pb-2 h-full", oe2, ce2, ue2), s2[35] = oe2, s2[36] = ce2, s2[37] = ue2, s2[38] = de2) : de2 = s2[38], s2[39] !== C2 || s2[40] !== o2 || s2[41] !== a2 || s2[42] !== g2 || s2[43] !== N2 || s2[44] !== M2 || s2[45] !== p2 || s2[46] !== S2 || s2[47] !== v2 || s2[48] !== G2 || s2[49] !== c2 || s2[50] !== u2 || s2[51] !== O2 || s2[52] !== J2 || s2[53] !== h2 || s2[54] !== f2 || s2[55] !== Y2 ? (me2 = a2 ? t.jsxs("div", {
      ref: P2,
      className: Q("flex h-full", M2 ? "flex-col justify-between" : O2 ? "right" === o2.position ? "flex-col md:flex-row-reverse items-center gap-4" : "flex-col md:flex-row items-center gap-4" : "right" === o2.position ? "flex-col md:flex-row-reverse justify-center items-center gap-8" : "flex-col md:flex-row justify-center items-center gap-8"),
      children: [t.jsxs("div", {
        className: Q("flex flex-col relative items-center justify-center", C2 && "w-full flex-1 min-h-0", O2 && "default" === u2 && "w-full max-w-[340px] md:max-w-[380px] 2xl:max-w-[450px] shrink-0", !O2 && "w-full md:w-[45%] lg:w-2/5 max-h-full shrink-0", N2 && "mt-2 pt-0"),
        children: [t.jsx("div", {
          ref: R2,
          className: Q("cursor-pointer flex items-center justify-center shrink-0 mx-auto", C2 ? "w-full flex-1 min-h-0 [container-type:size]" : "w-full aspect-square max-h-full max-w-full"),
          onClick: event => {
            if (!event.target.closest("button,a")) y2(true);
          },
          children: C2 ? t.jsx("div", {
            ref: E2,
            className: "size-[100cqmin]",
            children: t.jsx(Be, {
              isCompactMode: N2,
              showGlassButtons: true,
              className: "group/header aspect-square size-full",
              showDislike: false,
              disableCanvas: true
            })
          }) : t.jsx(Be, {
            isCompactMode: N2,
            showGlassButtons: true,
            className: "group/header aspect-square w-full h-full max-h-full max-w-full",
            showDislike: false,
            disableCanvas: true
          }),
          role: "button",
          tabIndex: 0,
          "aria-label": "Открыть плеер на весь экран",
          onKeyDown: event => {
            if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
              event.preventDefault();
              y2(true);
            }
          }
        }), t.jsx(St, {
          isStatsLoading: p2,
          statMode: h2,
          listeningStats: v2,
          formatTimeDetailed: g2,
          t: f2
        })]
      }), t.jsxs("div", {
        className: Q("flex flex-col min-w-0 w-full", M2 ? "mx-auto mt-3 max-w-[var(--cover-w,100%)] justify-center shrink-0" : O2 ? "min-w-0 justify-center flex-1" : "md:w-1/2 lg:w-[55%] justify-center flex-1"),
        children: [t.jsx(yt, {
          isBigStyle: false,
          isCompactMode: N2,
          shouldShowQueue: O2,
          isTitleAnimating: S2,
          playerCustomSettings: c2
        }), t.jsxs("div", {
          className: "w-full flex flex-col items-center mt-auto",
          children: [t.jsx("div", {
            className: Q("w-full", "ios" !== c2.sliderType && "mt-2"),
            children: t.jsx(Ze, {})
          }), J2 && Y2(Q("opacity-70", M2 ? "h-10 2xl:h-12" : "h-14 2xl:h-20")), t.jsx(gt, {
            isLeftOrRight: M2,
            isCompactMode: N2,
            shouldShowQueue: O2
          })]
        }), !O2 && c2.showNextTrack && t.jsx(jt, {})]
      })]
    }) : t.jsx(Oe, {}), s2[39] = C2, s2[40] = o2, s2[41] = a2, s2[42] = g2, s2[43] = N2, s2[44] = M2, s2[45] = p2, s2[46] = S2, s2[47] = v2, s2[48] = G2, s2[49] = c2, s2[50] = u2, s2[51] = O2, s2[52] = J2, s2[53] = h2, s2[54] = f2, s2[55] = Y2, s2[56] = me2) : me2 = s2[56], s2[57] !== de2 || s2[58] !== me2 ? (pe2 = t.jsx(L, {
      className: de2,
      children: me2
    }), s2[57] = de2, s2[58] = me2, s2[59] = pe2) : pe2 = s2[59], s2[60] !== re2 || s2[61] !== ie2 || s2[62] !== pe2 ? (ve2 = t.jsxs($, {
      className: re2,
      children: [ie2, pe2]
    }), s2[60] = re2, s2[61] = ie2, s2[62] = pe2, s2[63] = ve2) : ve2 = s2[63];
    const ge2 = ve2;
    if (z2) {
      const e2 = N2 ? "px-2 pb-2 pt-page-top gap-2" : "px-page pt-page-top pb-page-y",
        n3 = "left" === u2 && "flex-row-reverse";
      let l2;
      s2[64] !== e2 || s2[65] !== n3 ? (l2 = Q("flex h-full min-h-0 gap-4 overflow-hidden", e2, n3), s2[64] = e2, s2[65] = n3, s2[66] = l2) : l2 = s2[66];
      const a3 = O2 ? "flex-1" : "mx-auto aspect-square max-w-full";
      let r2, i2, o3, c3;
      return s2[67] !== a3 ? (r2 = Q("player-pane relative h-full min-w-0 overflow-hidden", a3), s2[67] = a3, s2[68] = r2) : r2 = s2[68], s2[69] !== le2 || s2[70] !== r2 ? (i2 = t.jsx("div", {
        className: r2,
        children: le2
      }), s2[69] = le2, s2[70] = r2, s2[71] = i2) : i2 = s2[71], s2[72] !== y2 || s2[73] !== O2 ? (o3 = O2 && t.jsx("div", {
        className: "player-pane h-full w-[38%] min-w-[300px] max-w-[460px] shrink-0 overflow-hidden",
        children: t.jsx(B, {
          onFullCover: () => y2(true)
        })
      }), s2[72] = y2, s2[73] = O2, s2[74] = o3) : o3 = s2[74], s2[75] !== l2 || s2[76] !== i2 || s2[77] !== o3 ? (c3 = t.jsx(D, {
        scroll: false,
        className: "player-screen",
        children: t.jsxs("div", {
          className: l2,
          children: [i2, o3]
        })
      }), s2[75] = l2, s2[76] = i2, s2[77] = o3, s2[78] = c3) : c3 = s2[78], c3;
    }
    const we2 = "default" === u2 ? "flex-col gap-2" : "left" === u2 ? "flex-row-reverse gap-3" : "flex-row gap-3",
      ye2 = !O2 && "items-center",
      be2 = N2 ? "px-2 pb-2 pt-page-top gap-2" : "px-page pt-page-top pb-page-y";
    let je2;
    s2[79] !== we2 || s2[80] !== ye2 || s2[81] !== be2 ? (je2 = Q("flex h-full overflow-hidden relative", we2, ye2, be2), s2[79] = we2, s2[80] = ye2, s2[81] = be2, s2[82] = je2) : je2 = s2[82];
    const Ne2 = "default" === u2 && O2 ? "flex-shrink-0" : M2 && O2 ? "h-full shrink-0 w-[clamp(340px,var(--pane-w,58%),60%)]" : "flex-1 h-full w-full";
    let Se2, ke2, ze2, Me2;
    return s2[83] !== Ne2 ? (Se2 = Q("relative overflow-hidden flex flex-col transition-all duration-500", Ne2), s2[83] = Ne2, s2[84] = Se2) : Se2 = s2[84], s2[85] !== ge2 || s2[86] !== Se2 ? (ke2 = t.jsx("div", {
      ref: I2,
      className: Se2,
      children: ge2
    }), s2[85] = ge2, s2[86] = Se2, s2[87] = ke2) : ke2 = s2[87], s2[88] !== M2 || s2[89] !== u2 || s2[90] !== y2 || s2[91] !== O2 ? (ze2 = O2 && t.jsx("div", {
      className: Q("overflow-hidden flex flex-col transition-all duration-500", M2 ? "player-pane flex-1 min-w-[320px]" : "flex-1 min-h-0"),
      children: t.jsx(B, {
        onFullCover: () => y2(true),
        playerLayout: u2,
        isExpanded: false
      })
    }), s2[88] = M2, s2[89] = u2, s2[90] = y2, s2[91] = O2, s2[92] = ze2) : ze2 = s2[92], s2[93] !== je2 || s2[94] !== ke2 || s2[95] !== ze2 ? (Me2 = t.jsx(D, {
      scroll: false,
      className: "player-screen",
      children: t.jsx("div", {
        className: "space-y-4 h-full",
        children: t.jsxs("div", {
          className: je2,
          children: [ke2, ze2]
        })
      })
    }), s2[93] = je2, s2[94] = ke2, s2[95] = ze2, s2[96] = Me2) : Me2 = s2[96], Me2;
  });
function _t(e2, s2) {
  return t.jsx(ne, {
    variant: "ghost",
    size: "icon",
    shape: "circle",
    className: "h-10 w-10 shrink-0 p-0 text-foreground/70 hover:bg-transparent hover:text-foreground",
    children: t.jsx(f, {
      status: e2,
      saved: s2,
      className: "h-5 w-5"
    })
  });
}
export default Mt;
