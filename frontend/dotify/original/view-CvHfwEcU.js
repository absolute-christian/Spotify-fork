// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { useHomeBundle as __fork_homeDataValue } from "../runtime.jsx";
import { c as e, j as t, m as s, r as a, A as l, u as i, R as r } from "./vendor-ui-BwX-1h7U.js";
import { C as n } from "./reveal-w9O7xfRv.js";
import { M as o } from "./progress-B9dXWW2R.js";
import { fq as c, fr as u, k as d, s as m, am as h, B as f, b as g, I as v, z as p, u as x, x as y, fh as b, a1 as k, cV as S, a5 as j, j as w, fs as N, ft as T, dI as C, fu as _, dN as A, fv as M, fw as $, fx as L, fy as z, dJ as P, au as R, l as F, w as B, fz as H, a2 as E, cc as K } from "./globals-Bc3qFUyf.js";
import { K as J, U as X, Q as Z, R as G, V as ee, W as te, x as se, T as ae, X as le, A as ie, Y as re, M as ne, Z as oe, o as ce, _ as ue, $ as de, a0 as me, a1 as he, a2 as fe, a3 as ge, a4 as ve, a5 as pe, a6 as xe } from "./main-DVjTVWDM.js";
import { A as ye } from "./view-CHncH6PY.js";
import { u as be } from "./use-premium-Dm1tM_kA.js";
import { useWaveStore as ke } from "./wave-DG_BvUe1.js";
function Se(a2) {
  const l2 = e.c(35),
    {
      song: i2,
      className: r2,
      rounded: n2,
      saturation: o2,
      size: c2,
      onClick: u2,
      friend: h2
    } = a2,
    f2 = void 0 === c2 ? "sm" : c2,
    {
      isFavorite: g2,
      isUnfavorited: v2,
      handleToggleLike: p2,
      handleToggleUnfavorite: x2,
      handlePlayNext: y2,
      handleAddToQueue: b2,
      handleShare: k2
    } = J(i2);
  let S2;
  l2[0] !== u2 ? (S2 = e2 => {
    u2(e2.currentTarget);
  }, l2[0] = u2, l2[1] = S2) : S2 = l2[1];
  const j2 = h2 ? `${h2.name} \xB7 ${i2.title}` : i2.title;
  let w2;
  l2[2] !== r2 ? (w2 = r2.includes("relative") ? "relative" : "absolute", l2[2] = r2, l2[3] = w2) : w2 = l2[3];
  const N2 = h2 ? "rounded-full" : n2;
  let T2, C2, _2, A2, M2, $2, L2;
  return l2[4] !== r2 || l2[5] !== w2 || l2[6] !== N2 ? (T2 = d(w2, "overflow-hidden z-20 select-none cursor-pointer", N2, r2), l2[4] = r2, l2[5] = w2, l2[6] = N2, l2[7] = T2) : T2 = l2[7], l2[8] !== o2 ? (C2 = {
    filter: o2
  }, l2[8] = o2, l2[9] = C2) : C2 = l2[9], l2[10] === Symbol.for("react.memo_cache_sentinel") ? (_2 = {
    scale: 0.96
  }, l2[10] = _2) : _2 = l2[10], l2[11] !== h2 || l2[12] !== n2 || l2[13] !== f2 || l2[14] !== i2.cover_art || l2[15] !== i2.source ? (A2 = h2 ? t.jsx(X, {
    src: h2.avatar,
    name: h2.name,
    className: "h-full w-full rounded-full pointer-events-none",
    imageClassName: "rounded-full object-cover",
    fallbackClassName: "rounded-full text-lg font-semibold"
  }) : t.jsx(m, {
    src: i2.cover_art,
    source: i2.source,
    size: f2,
    plain: true,
    className: d("w-full h-full object-cover select-none pointer-events-none", n2)
  }), l2[11] = h2, l2[12] = n2, l2[13] = f2, l2[14] = i2.cover_art, l2[15] = i2.source, l2[16] = A2) : A2 = l2[16], l2[17] !== S2 || l2[18] !== j2 || l2[19] !== T2 || l2[20] !== C2 || l2[21] !== A2 ? (M2 = t.jsx(Z, {
    asChild: true,
    children: t.jsx(s.button, {
      type: "button",
      onClick: S2,
      "aria-label": j2,
      className: T2,
      style: C2,
      whileTap: _2,
      children: A2
    })
  }), l2[17] = S2, l2[18] = j2, l2[19] = T2, l2[20] = C2, l2[21] = A2, l2[22] = M2) : M2 = l2[22], l2[23] !== b2 || l2[24] !== y2 || l2[25] !== k2 || l2[26] !== p2 || l2[27] !== x2 || l2[28] !== g2 || l2[29] !== v2 || l2[30] !== i2 ? ($2 = t.jsx(G, {
    className: "w-[248px] p-0 overflow-hidden",
    children: t.jsx(ee, {
      song: i2,
      showHeader: true,
      isFavorite: g2,
      isUnfavorited: v2,
      isPinned: false,
      onPlayNext: y2,
      onAddToQueue: b2,
      onLoadSimilarTracks: je,
      onToggleLike: p2,
      onToggleUnfavorite: x2,
      onShare: k2
    })
  }), l2[23] = b2, l2[24] = y2, l2[25] = k2, l2[26] = p2, l2[27] = x2, l2[28] = g2, l2[29] = v2, l2[30] = i2, l2[31] = $2) : $2 = l2[31], l2[32] !== M2 || l2[33] !== $2 ? (L2 = t.jsxs(te, {
    children: [M2, $2]
  }), l2[32] = M2, l2[33] = $2, l2[34] = L2) : L2 = l2[34], L2;
}
function je() {}
function we(s2) {
  const a2 = e.c(12),
    {
      currentMood: l2,
      onCycle: i2
    } = s2,
    r2 = l2.icon,
    n2 = l2.label,
    o2 = String(l2.id);
  let c2, u2, d2, m2;
  return a2[0] !== r2 ? (c2 = t.jsx(r2, {
    className: "size-5 shrink-0"
  }), a2[0] = r2, a2[1] = c2) : c2 = a2[1], a2[2] !== l2.label ? (u2 = t.jsx("span", {
    className: "text-callout",
    children: l2.label
  }), a2[2] = l2.label, a2[3] = u2) : u2 = a2[3], a2[4] !== o2 || a2[5] !== c2 || a2[6] !== u2 ? (d2 = t.jsxs(h, {
    id: o2,
    inline: true,
    className: "flex items-center gap-2",
    children: [c2, u2]
  }), a2[4] = o2, a2[5] = c2, a2[6] = u2, a2[7] = d2) : d2 = a2[7], a2[8] !== l2.label || a2[9] !== i2 || a2[10] !== d2 ? (m2 = t.jsx(f, {
    variant: "quiet",
    size: "compact",
    onClick: i2,
    "aria-label": n2,
    className: "justify-start px-0 text-foreground/70 hover:text-foreground",
    children: d2
  }), a2[8] = l2.label, a2[9] = i2, a2[10] = d2, a2[11] = m2) : m2 = a2[11], m2;
}
function Ne({
  orb: e2,
  onComplete: i2
}) {
  const r2 = a.useMemo(() => {
    if (!e2) return "";
    const {
      r: t2,
      g: s2,
      b: a2
    } = function (e3) {
      if (e3.startsWith("#")) {
        let t4 = e3.slice(1);
        3 === t4.length && (t4 = t4.split("").map(e4 => e4 + e4).join(""));
        const s3 = parseInt(t4, 16);
        return {
          r: s3 >> 16 & 255,
          g: s3 >> 8 & 255,
          b: 255 & s3
        };
      }
      const t3 = e3.match(/\d+(\.\d+)?/g);
      return t3 && t3.length >= 3 ? {
        r: parseFloat(t3[0]),
        g: parseFloat(t3[1]),
        b: parseFloat(t3[2])
      } : {
        r: 255,
        g: 255,
        b: 255
      };
    }(e2.color);
    return `radial-gradient(circle at center, rgba(${t2}, ${s2}, ${a2}, 0.95) 0%, rgba(${t2}, ${s2}, ${a2}, 0.55) 35%, rgba(${t2}, ${s2}, ${a2}, 0.15) 60%, transparent 75%)`;
  }, [null == e2 ? void 0 : e2.color]);
  return e2 ? t.jsx(l, {
    children: t.jsx(s.div, {
      className: "absolute top-0 left-0 pointer-events-none z-50",
      initial: {
        x: e2.from.x - 30
      },
      animate: {
        x: e2.to.x - 30
      },
      transition: {
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1]
      },
      onAnimationComplete: i2,
      children: t.jsx(s.div, {
        className: "rounded-full",
        style: {
          width: 60,
          height: 60,
          background: r2
        },
        initial: {
          y: e2.from.y - 30,
          scale: 0.65,
          opacity: 0.95
        },
        animate: {
          y: [e2.from.y - 30, Math.min(e2.from.y, e2.to.y) - 38, e2.to.y - 30],
          scale: [0.65, 1.15, 0.85],
          opacity: [0.95, 1, 0.85]
        },
        transition: {
          duration: 0.42,
          ease: [0.25, 1, 0.5, 1]
        }
      }, "flying-orb-y")
    }, "flying-orb-x")
  }) : null;
}
function Te(a2) {
  const l2 = e.c(26),
    {
      buttonRef: i2,
      color: r2,
      iconColor: n2,
      isLoading: o2,
      label: c2,
      onClick: u2,
      className: m2
    } = a2,
    f2 = g(Ce);
  let p2, x2;
  l2[0] !== m2 ? (p2 = d("relative aspect-square rounded-full flex items-center justify-center z-20 cursor-pointer shrink-0 select-none", m2), l2[0] = m2, l2[1] = p2) : p2 = l2[1], l2[2] !== r2 ? (x2 = {
    borderRadius: "9999px",
    backgroundColor: r2,
    transition: "background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
  }, l2[2] = r2, l2[3] = x2) : x2 = l2[3];
  const y2 = o2 ? 0.35 : 1,
    b2 = o2 ? 0.82 : 1,
    k2 = o2 ? "blur(1.5px)" : "blur(0px)",
    S2 = o2 ? "none" : "auto";
  let j2, w2, N2, T2;
  l2[4] !== y2 || l2[5] !== b2 || l2[6] !== k2 || l2[7] !== S2 ? (j2 = {
    opacity: y2,
    scale: b2,
    filter: k2,
    pointerEvents: S2
  }, l2[4] = y2, l2[5] = b2, l2[6] = k2, l2[7] = S2, l2[8] = j2) : j2 = l2[8], l2[9] === Symbol.for("react.memo_cache_sentinel") ? (N2 = {
    duration: 0.22,
    ease: [0.16, 1, 0.3, 1]
  }, T2 = {
    scale: 1.05
  }, w2 = {
    scale: 0.93
  }, l2[9] = w2, l2[10] = N2, l2[11] = T2) : (w2 = l2[9], N2 = l2[10], T2 = l2[11]);
  const C2 = f2 ? "pause" : "play";
  let _2, A2, M2;
  return l2[12] !== n2 || l2[13] !== f2 ? (_2 = f2 ? t.jsx(v.pause, {
    className: "h-8 w-8",
    style: {
      color: n2,
      fill: n2
    }
  }) : t.jsx(v.play, {
    className: "h-8 w-8 ml-1",
    style: {
      color: n2,
      fill: n2
    }
  }), l2[12] = n2, l2[13] = f2, l2[14] = _2) : _2 = l2[14], l2[15] !== C2 || l2[16] !== _2 ? (A2 = t.jsx("div", {
    className: "relative z-10 flex items-center justify-center",
    children: t.jsx(h, {
      id: C2,
      inline: true,
      children: _2
    })
  }), l2[15] = C2, l2[16] = _2, l2[17] = A2) : A2 = l2[17], l2[18] !== i2 || l2[19] !== c2 || l2[20] !== u2 || l2[21] !== p2 || l2[22] !== A2 || l2[23] !== x2 || l2[24] !== j2 ? (M2 = t.jsx(s.button, {
    ref: i2,
    type: "button",
    "aria-label": c2,
    onClick: u2,
    className: p2,
    style: x2,
    animate: j2,
    transition: N2,
    whileHover: T2,
    whileTap: w2,
    children: A2
  }), l2[18] = i2, l2[19] = c2, l2[20] = u2, l2[21] = p2, l2[22] = A2, l2[23] = x2, l2[24] = j2, l2[25] = M2) : M2 = l2[25], M2;
}
function Ce(e2) {
  return "wave" === e2.queueType && e2.isPlaying;
}
function _e({
  musicSource: e2,
  availableSources: s2,
  recentTracks: l2 = [],
  className: r2
}) {
  const {
      t: n2
    } = p(),
    {
      checkAccess: o2
    } = be(),
    m2 = x(() => "undefined" != typeof document && document.documentElement.classList.contains("light")),
    h2 = a.useRef(null),
    f2 = a.useRef(null),
    B2 = g(e3 => e3.startTrackWave),
    H2 = g(e3 => "wave" === e3.queueType && Boolean(e3.currentSong)),
    E2 = g(e3 => e3.toggle),
    {
      settings: I2,
      waveLoading: W2,
      waveRefillLoading: V2,
      setMood: q2,
      loadSettings: Q2,
      generateMyWave: Y2,
      setWaveLoading: U2
    } = ke(i(e3 => ({
      settings: e3.settings,
      waveLoading: e3.waveLoading,
      waveRefillLoading: e3.waveRefillLoading,
      setMood: e3.setMood,
      loadSettings: e3.loadSettings,
      generateMyWave: e3.generateMyWave,
      setWaveLoading: e3.setWaveLoading
    }))),
    [D2, O2] = a.useState(""),
    K2 = function (e3, t2 = false) {
      var s3;
      const a2 = null == (s3 = null == e3 ? void 0 : e3.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/)) ? void 0 : s3.slice(1, 4).map(Number);
      if (!a2) return t2 ? "rgb(82, 82, 82)" : "rgb(174, 174, 174)";
      const [l3, i2, r3] = a2.map(e4 => Math.max(0, Math.min(255, e4))),
        {
          h: n3,
          s: o3,
          l: d2
        } = c(l3, i2, r3),
        m3 = Math.max(l3, i2, r3) - Math.min(l3, i2, r3) < 16,
        h3 = Math.max(t2 ? 34 : 46, Math.min(t2 ? 44 : 60, d2)),
        f3 = u(n3, m3 ? 0 : Math.min(80, o3), h3);
      return `rgb(${f3.r}, ${f3.g}, ${f3.b})`;
    }(D2, m2),
    [J2, X2] = a.useState(null),
    [Z2, G2] = a.useState(null),
    ee2 = a.useMemo(() => {
      const e3 = l2.filter(e4 => Boolean((null == e4 ? void 0 : e4.cover_art) && (null == e4 ? void 0 : e4.id) && (null == e4 ? void 0 : e4.source)));
      if (e3.length >= 3) return e3.slice(0, 3);
      const t2 = (y.getState().songs || []).filter(t3 => Boolean((null == t3 ? void 0 : t3.cover_art) && (null == t3 ? void 0 : t3.id) && (null == t3 ? void 0 : t3.source) && !e3.some(e4 => e4.id === t3.id)));
      return [...e3, ...t2].slice(0, 3);
    }, [l2]),
    [te2, ae2] = a.useState([]),
    le2 = a.useRef(false);
  a.useEffect(() => {
    le2.current || ee2.length > 0 && (ae2(ee2.slice(0, 3)), ee2.length >= 3 && (le2.current = true));
  }, [ee2]);
  const ie2 = a.useMemo(() => te2.length > 0 ? te2 : ee2, [te2, ee2]),
    re2 = b(e3 => e3.friends),
    ne2 = k(e3 => e3.friendStatuses),
    oe2 = a.useMemo(() => re2.flatMap(e3 => {
      var t2;
      const s3 = S(ne2[e3.id], e3.now);
      return "playing" === (null == s3 ? void 0 : s3.state) && (null == (t2 = s3.track) ? void 0 : t2.id) && s3.track.source ? [{
        name: e3.nickname || e3.username || "",
        avatar: e3.avatar,
        song: j(s3.track)
      }] : [];
    }).slice(0, 2), [re2, ne2]),
    ce2 = e3 => {
      const t2 = oe2[e3 - 1];
      if (t2) return {
        song: t2.song,
        friend: {
          name: t2.name,
          avatar: t2.avatar
        }
      };
      const s3 = ie2[e3];
      return s3 ? {
        song: s3,
        friend: void 0
      } : null;
    },
    ue2 = [ce2(1), ce2(2)];
  a.useEffect(() => {
    Q2(e2);
  }, [e2, Q2]), a.useEffect(() => {
    var e3;
    const t2 = null == (e3 = ie2[0]) ? void 0 : e3.cover_art;
    let s3 = false;
    if (t2) return w(t2, true).then(e4 => {
      s3 || O2(e4 ? `rgb(${e4.r}, ${e4.g}, ${e4.b})` : "");
    }), () => {
      s3 = true;
    };
    O2("");
  }, [ie2]);
  const de2 = a.useMemo(() => [{
      id: "default",
      icon: v.wave,
      label: n2("home.wave.moods.default")
    }, {
      id: "chill",
      icon: N,
      label: n2("home.wave.moods.chill")
    }, {
      id: "sleep",
      icon: T,
      label: n2("home.wave.moods.sleep"),
      premium: 2
    }, {
      id: "happy",
      icon: C,
      label: n2("home.wave.moods.happy")
    }, {
      id: "hype",
      icon: _,
      label: n2("home.wave.moods.hype"),
      premium: 2
    }, {
      id: "night",
      icon: A,
      label: n2("home.wave.moods.night"),
      premium: 2
    }, {
      id: "sad",
      icon: M,
      label: n2("home.wave.moods.sad"),
      premium: 2
    }, {
      id: "rage",
      icon: $,
      label: n2("home.wave.moods.rage"),
      premium: 2
    }, {
      id: "focus",
      icon: L,
      label: n2("home.wave.moods.focus"),
      premium: 2
    }, {
      id: "summer",
      icon: C,
      label: n2("home.wave.moods.summer"),
      premium: 2
    }, {
      id: "niche",
      icon: z,
      label: n2("home.wave.moods.niche"),
      premium: 2
    }, {
      id: "iceberg",
      icon: P,
      label: n2("home.wave.moods.iceberg"),
      premium: 2
    }], [n2]),
    me2 = a.useMemo(() => de2.find(e3 => e3.id === I2.mood) || de2[0], [de2, I2.mood]),
    he2 = a.useCallback(() => {
      const e3 = de2.indexOf(me2);
      for (let t2 = 1; t2 <= de2.length; t2++) {
        const s3 = de2[(e3 + t2) % de2.length];
        if (!s3.premium || o2(s3.premium)) return void q2(s3.id);
      }
    }, [de2, me2, o2, q2]),
    fe2 = a.useCallback(() => {
      if (!W2) if (H2) E2();else {
        const t2 = R.getState().effectiveSources,
          a2 = t2.length > 0 ? t2 : s2;
        Y2(e2, a2, n2, void 0);
      }
    }, [W2, H2, E2, Y2, e2, s2, n2]),
    [ge2, ve2] = a.useState({}),
    pe2 = a.useRef(null),
    xe2 = a.useRef(null);
  a.useEffect(() => {
    [...ie2, ...oe2.map(e3 => e3.song)].forEach(e3 => {
      e3.cover_art && !ge2[e3.cover_art] && w(e3.cover_art, true).then(t2 => {
        t2 && ve2(s3 => ({
          ...s3,
          [e3.cover_art]: `rgb(${t2.r}, ${t2.g}, ${t2.b})`
        }));
      });
    });
  }, [ie2, oe2, ge2]);
  const ye2 = a.useCallback((e3, t2, s3, a2) => {
      if (W2) return;
      X2(e3), pe2.current = t2, xe2.current = null != a2 ? a2 : null;
      const l3 = t2.cover_art && ge2[t2.cover_art] || K2;
      if (h2.current && f2.current) {
        const e4 = h2.current.getBoundingClientRect(),
          t3 = s3.getBoundingClientRect(),
          a3 = f2.current.getBoundingClientRect();
        G2({
          color: l3,
          from: {
            x: t3.left + t3.width / 2 - e4.left,
            y: t3.top + t3.height / 2 - e4.top
          },
          to: {
            x: a3.left + a3.width / 2 - e4.left,
            y: a3.top + a3.height / 2 - e4.top
          }
        });
      }
    }, [W2, ge2, K2]),
    je2 = a.useCallback(() => {
      var e3;
      if (!Z2) return;
      const t2 = Z2.color;
      O2(t2), G2(null);
      const s3 = pe2.current,
        a2 = xe2.current;
      if (s3) {
        U2(true);
        const t3 = "default" === I2.mood ? null : I2.mood,
          l3 = (null == a2 ? void 0 : a2.name) || s3.title || n2("home.sections.similar.title");
        B2(s3, l3, void 0, t3, a2 ? null != (e3 = a2.avatar) ? e3 : null : void 0).catch(e4 => F.error("[Wave] Failed to start track wave:", e4)).finally(() => {
          U2(false), X2(null);
        });
      }
    }, [Z2, B2, n2, U2, I2.mood]),
    Ce2 = e3 => J2 === e3 ? "saturate(0.08)" : "saturate(1)",
    _e2 = function (e3, t2 = false) {
      var s3;
      const a2 = null == (s3 = null == e3 ? void 0 : e3.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/)) ? void 0 : s3.slice(1, 4).map(Number);
      if (!a2) return t2 ? "rgb(120, 120, 120)" : "rgb(110, 110, 110)";
      const [l3, i2, r3] = a2.map(e4 => Math.max(0, Math.min(255, e4))),
        {
          h: n3,
          s: o3,
          l: d2
        } = c(l3, i2, r3),
        m3 = n3 >= 45 && n3 <= 120,
        h3 = Math.max(l3, i2, r3) - Math.min(l3, i2, r3) < 16 ? 0 : Math.min(m3 ? 48 : 68, o3),
        f3 = Math.max(40, Math.min(54, d2)),
        g2 = u(n3, h3, f3);
      return `rgb(${g2.r}, ${g2.g}, ${g2.b})`;
    }(D2, m2);
  return t.jsxs("div", {
    ref: h2,
    className: d("home-wave relative w-full overflow-hidden select-none px-page pt-page-y pb-6 bg-transparent", r2),
    children: [t.jsx(se, {
      color: _e2,
      variant: "bloom",
      seed: "home-wave",
      preserveColor: true,
      intensity: m2 ? 0.14 : 0.3,
      scrim: false,
      maskBottom: true,
      className: "absolute inset-0"
    }), t.jsxs("div", {
      className: "relative z-10 flex min-h-56 items-center justify-between gap-6",
      children: [t.jsxs("div", {
        className: "wave-identity flex min-w-0 items-end",
        children: [ie2[0] && t.jsx(Se, {
          song: ie2[0],
          size: "lg",
          className: "wave-cover relative shrink-0",
          rounded: "rounded-3xl",
          saturation: Ce2(0),
          onClick: e3 => ye2(0, ie2[0], e3)
        }), t.jsxs("div", {
          className: "flex min-w-0 flex-col items-start gap-3 pb-1",
          children: [t.jsx("h1", {
            className: "wave-title font-wave flex flex-col tracking-tight text-foreground pointer-events-none",
            children: n2("home.wave.title_hero").split("\n").map((e3, s3) => t.jsx("span", {
              children: e3
            }, s3))
          }), t.jsx(we, {
            currentMood: me2,
            onCycle: he2
          })]
        })]
      }), t.jsx("div", {
        className: "wave-scene relative h-56 shrink-0 pointer-events-none",
        children: t.jsxs("div", {
          className: "wave-scene-art absolute right-0 top-4 h-56 w-72",
          children: [ue2[0] && t.jsx(Se, {
            song: ue2[0].song,
            friend: ue2[0].friend,
            className: "right-2 top-2 size-16 pointer-events-auto",
            rounded: "rounded-2xl",
            saturation: Ce2(1),
            onClick: e3 => ye2(1, ue2[0].song, e3, ue2[0].friend)
          }), ue2[1] && t.jsx(Se, {
            song: ue2[1].song,
            friend: ue2[1].friend,
            className: "right-32 top-24 size-16 pointer-events-auto",
            rounded: "rounded-2xl",
            saturation: Ce2(2),
            onClick: e3 => ye2(2, ue2[1].song, e3, ue2[1].friend)
          }), t.jsx(Te, {
            buttonRef: f2,
            color: "hsl(var(--foreground))",
            iconColor: "hsl(var(--background))",
            isLoading: W2 || V2,
            label: n2("home.wave.my_wave"),
            onClick: fe2,
            className: "absolute right-2 bottom-0 size-20 pointer-events-auto"
          })]
        })
      })]
    }), t.jsx(Ne, {
      orb: Z2,
      onComplete: je2
    })]
  });
}
const Ae = r.memo(function (s2) {
  var a2, l2;
  const i2 = e.c(58),
    {
      charts: r2,
      isLoading: n2,
      setSelectedPlaylist: o2,
      setSelectedAlbum: c2,
      setSelectedArtist: u2
    } = s2,
    d2 = void 0 !== n2 && n2,
    {
      t: m2
    } = p();
  let h2;
  null == r2 || r2.tracks, i2[0] !== (null == r2 ? void 0 : r2.tracks) ? (h2 = null != (a2 = null == r2 ? void 0 : r2.tracks) ? a2 : [], i2[0] = null == r2 ? void 0 : r2.tracks, i2[1] = h2) : h2 = i2[1];
  const f2 = h2;
  let v2, x2;
  i2[2] !== (null == r2 ? void 0 : r2.playlists) ? (v2 = () => {
    var e2;
    return null != (e2 = null == r2 ? void 0 : r2.playlists) ? e2 : [];
  }, i2[2] = null == r2 ? void 0 : r2.playlists, i2[3] = v2) : v2 = i2[3], null == r2 || r2.playlists, i2[4] !== v2 ? (x2 = v2(), i2[4] = v2, i2[5] = x2) : x2 = i2[5];
  const y2 = x2;
  let b2;
  null == r2 || r2.albums, i2[6] !== (null == r2 ? void 0 : r2.albums) ? (b2 = null != (l2 = null == r2 ? void 0 : r2.albums) ? l2 : [], i2[6] = null == r2 ? void 0 : r2.albums, i2[7] = b2) : b2 = i2[7];
  const k2 = b2;
  let S2, j2;
  i2[8] !== (null == r2 ? void 0 : r2.artists) ? (S2 = () => {
    var e2;
    return null != (e2 = null == r2 ? void 0 : r2.artists) ? e2 : [];
  }, i2[8] = null == r2 ? void 0 : r2.artists, i2[9] = S2) : S2 = i2[9], null == r2 || r2.artists, i2[10] !== S2 ? (j2 = S2(), i2[10] = S2, i2[11] = j2) : j2 = i2[11];
  const w2 = j2,
    N2 = g(Le);
  let T2;
  i2[12] !== N2 || i2[13] !== m2 || i2[14] !== f2 ? (T2 = e2 => {
    N2(e2, f2, m2("home.sections.popular.title"), null, "popular");
  }, i2[12] = N2, i2[13] = m2, i2[14] = f2, i2[15] = T2) : T2 = i2[15];
  const C2 = T2;
  let _2;
  i2[16] !== f2 ? (_2 = f2.slice(0, 10), i2[16] = f2, i2[17] = _2) : _2 = i2[17];
  const A2 = _2;
  let M2;
  i2[18] !== y2 ? (M2 = y2.slice(0, 10), i2[18] = y2, i2[19] = M2) : M2 = i2[19];
  const $2 = M2;
  let L2;
  i2[20] !== w2 ? (L2 = w2.slice(0, 10), i2[20] = w2, i2[21] = L2) : L2 = i2[21];
  const z2 = L2;
  let P2;
  i2[22] !== k2 ? (P2 = k2.slice(0, 10), i2[22] = k2, i2[23] = P2) : P2 = i2[23];
  const R2 = P2,
    F2 = 0 === A2.length && 0 === $2.length && 0 === R2.length && 0 === z2.length;
  if (!d2 && F2) return null;
  const B2 = d2 || A2.length > 0,
    H2 = d2 || z2.length > 0,
    E2 = d2 || $2.length > 0,
    I2 = d2 || R2.length > 0;
  let W2, V2, q2, Q2, Y2, U2, D2;
  return i2[24] !== m2 ? (W2 = m2("home.sections.popular.title"), i2[24] = m2, i2[25] = W2) : W2 = i2[25], i2[26] !== C2 || i2[27] !== d2 || i2[28] !== B2 || i2[29] !== m2 || i2[30] !== A2 ? (V2 = B2 && t.jsx($e, {
    title: m2("artist.tabs.tracks"),
    loading: d2 && 0 === A2.length,
    children: A2.map((e2, s3) => t.jsx(Me, {
      position: s3 + 1,
      trend: e2.trend,
      children: t.jsx(ae, {
        song: e2,
        variant: "inline",
        size: "lg",
        onPlaySong: C2
      })
    }, `track:${e2.source}:${e2.id}`))
  }), i2[26] = C2, i2[27] = d2, i2[28] = B2, i2[29] = m2, i2[30] = A2, i2[31] = V2) : V2 = i2[31], i2[32] !== d2 || i2[33] !== o2 || i2[34] !== E2 || i2[35] !== m2 || i2[36] !== $2 ? (q2 = E2 && t.jsx($e, {
    title: m2("home.sections.playlists"),
    loading: d2 && 0 === $2.length,
    children: $2.map((e2, s3) => t.jsx(Me, {
      position: s3 + 1,
      trend: e2.trend,
      children: t.jsx(le, {
        playlist: e2,
        variant: "row",
        size: "chart",
        onClick: () => o2(e2)
      })
    }, `playlist:${e2.source}:${e2.id}`))
  }), i2[32] = d2, i2[33] = o2, i2[34] = E2, i2[35] = m2, i2[36] = $2, i2[37] = q2) : q2 = i2[37], i2[38] !== d2 || i2[39] !== u2 || i2[40] !== H2 || i2[41] !== m2 || i2[42] !== z2 ? (Q2 = H2 && t.jsx($e, {
    title: m2("artist.tabs.artists"),
    loading: d2 && 0 === z2.length,
    roundCover: true,
    children: z2.map((e2, s3) => t.jsx(Me, {
      position: s3 + 1,
      trend: e2.trend,
      children: t.jsx(ie, {
        artist: e2,
        variant: "row",
        size: 44,
        onClick: () => u2(e2)
      })
    }, `artist:${e2.source}:${e2.id}`))
  }), i2[38] = d2, i2[39] = u2, i2[40] = H2, i2[41] = m2, i2[42] = z2, i2[43] = Q2) : Q2 = i2[43], i2[44] !== d2 || i2[45] !== c2 || i2[46] !== I2 || i2[47] !== m2 || i2[48] !== R2 ? (Y2 = I2 && t.jsx($e, {
    title: m2("artist.tabs.albums"),
    loading: d2 && 0 === R2.length,
    children: R2.map((e2, s3) => t.jsx(Me, {
      position: s3 + 1,
      trend: e2.trend,
      children: t.jsx(re, {
        album: e2,
        variant: "row",
        size: "chart",
        onClick: () => c2(e2)
      })
    }, `album:${e2.source}:${e2.id}`))
  }), i2[44] = d2, i2[45] = c2, i2[46] = I2, i2[47] = m2, i2[48] = R2, i2[49] = Y2) : Y2 = i2[49], i2[50] !== V2 || i2[51] !== q2 || i2[52] !== Q2 || i2[53] !== Y2 ? (U2 = t.jsxs(oe, {
    className: "gap-6",
    children: [V2, q2, Q2, Y2]
  }), i2[50] = V2, i2[51] = q2, i2[52] = Q2, i2[53] = Y2, i2[54] = U2) : U2 = i2[54], i2[55] !== W2 || i2[56] !== U2 ? (D2 = t.jsx(ce, {
    title: W2,
    children: U2
  }), i2[55] = W2, i2[56] = U2, i2[57] = D2) : D2 = i2[57], D2;
});
function Me(s2) {
  const a2 = e.c(14),
    {
      position: l2,
      trend: i2,
      children: r2
    } = s2;
  let n2, o2, c2, u2, d2, m2;
  return a2[0] !== l2 ? (n2 = t.jsx("span", {
    children: l2
  }), a2[0] = l2, a2[1] = n2) : n2 = a2[1], a2[2] !== i2 ? (o2 = i2 && ("up" === i2 ? t.jsx(v.caretUp, {
    weight: "Bold",
    viewBox: "7 7 10 10",
    className: "size-3 text-foreground/70"
  }) : t.jsx(v.caretDown, {
    weight: "Bold",
    viewBox: "7 7 10 10",
    className: "size-3 text-foreground/45"
  })), a2[2] = i2, a2[3] = o2) : o2 = a2[3], a2[4] !== o2 ? (c2 = t.jsx("span", {
    className: "flex h-3 items-center justify-center",
    "aria-hidden": true,
    children: o2
  }), a2[4] = o2, a2[5] = c2) : c2 = a2[5], a2[6] !== n2 || a2[7] !== c2 ? (u2 = t.jsxs("div", {
    className: "flex w-5 shrink-0 flex-col items-center gap-1 text-caption font-medium text-foreground/60",
    children: [n2, c2]
  }), a2[6] = n2, a2[7] = c2, a2[8] = u2) : u2 = a2[8], a2[9] !== r2 ? (d2 = t.jsx("div", {
    className: "min-w-0 flex-1",
    children: r2
  }), a2[9] = r2, a2[10] = d2) : d2 = a2[10], a2[11] !== u2 || a2[12] !== d2 ? (m2 = t.jsxs("div", {
    className: "flex min-w-0 items-center gap-1.5",
    children: [u2, d2]
  }), a2[11] = u2, a2[12] = d2, a2[13] = m2) : m2 = a2[13], m2;
}
function $e(s2) {
  const a2 = e.c(11),
    {
      title: l2,
      loading: i2,
      roundCover: r2,
      children: o2
    } = s2,
    c2 = void 0 !== r2 && r2;
  let u2, d2, m2, h2;
  return a2[0] !== l2 ? (u2 = t.jsx(ue, {
    children: l2
  }), a2[0] = l2, a2[1] = u2) : u2 = a2[1], a2[2] !== c2 ? (d2 = Array.from({
    length: 10
  }, (e2, s3) => t.jsx(Me, {
    position: s3 + 1,
    children: t.jsx(ne, {
      size: "chart",
      round: c2
    })
  }, s3)), a2[2] = c2, a2[3] = d2) : d2 = a2[3], a2[4] !== o2 || a2[5] !== i2 || a2[6] !== d2 ? (m2 = t.jsx(n, {
    pending: i2,
    className: "flex flex-col space-y-0.5",
    placeholder: d2,
    children: o2
  }), a2[4] = o2, a2[5] = i2, a2[6] = d2, a2[7] = m2) : m2 = a2[7], a2[8] !== u2 || a2[9] !== m2 ? (h2 = t.jsxs("div", {
    className: "flex w-[min(20rem,100%)] shrink-0 flex-col min-w-0",
    children: [u2, m2]
  }), a2[8] = u2, a2[9] = m2, a2[10] = h2) : h2 = a2[10], h2;
}
function Le(e2) {
  return e2.playFromList;
}
const ze = () => {
  const {
    selectedSource: e2,
    effectiveSource: t2
  } = R(i(Pe));
  return "auto" === e2 ? t2 : e2;
};
function Pe(e2) {
  return {
    selectedSource: e2.selectedSource,
    effectiveSource: e2.effectiveSource
  };
}
const Re = r.memo(function () {
  const {
      t: e2
    } = p(),
    s2 = de(),
    l2 = ze(),
    [i2, r2] = a.useState([]),
    [o2, c2] = a.useState(true);
  return a.useEffect(() => {
    let e3 = false;
    return async function () {
      var t2, s3;
      try {
        c2(true);
        const a2 = await B.media.getHomeSnapshot(l2, H),
          i3 = null != (s3 = null == (t2 = null == a2 ? void 0 : a2.sections.playlists) ? void 0 : t2.playlists) ? s3 : [];
        e3 || r2(i3);
      } catch (a2) {
        F.error("home", "Failed to load community playlists for home:", a2);
      } finally {
        e3 || c2(false);
      }
    }(), () => {
      e3 = true;
    };
  }, [l2]), o2 || 0 !== i2.length ? t.jsx(ce, {
    title: e2("home.sections.playlists"),
    children: t.jsx(n, {
      pending: o2 && 0 === i2.length,
      placeholder: t.jsx(oe, {
        children: Array.from({
          length: 8
        }).map((e3, s3) => t.jsx(me, {
          lines: 3
        }, s3))
      }),
      children: t.jsx(oe, {
        children: i2.map((e3, a2) => t.jsx(le, {
          playlist: e3,
          subtitle: e3.author || void 0,
          variant: "card",
          onClick: () => s2(e3)
        }, `home-pl-${e3.id}-${a2}`))
      })
    })
  }) : null;
});
const Fe = r.memo(function (s2) {
  const l2 = e.c(24),
    {
      setSelectedAlbum: i2
    } = s2,
    {
      items: r2,
      isLoading: o2,
      hasMore: c2,
      isLoadingMore: u2,
      loadMore: d2
    } = function () {
      const [e2, t2] = a.useState([]),
        [s3, l3] = a.useState(true),
        [i3, r3] = a.useState(true),
        [n2, o3] = a.useState(false),
        c3 = ze(),
        u3 = a.useCallback(async () => {
          l3(true);
          try {
            const e3 = await B.media.getHomeSnapshot(c3, H);
            if (e3) {
              const s5 = e3.sections.releases.releases.map(e4 => "track" === e4.type ? {
                type: "track",
                data: e4.item
              } : {
                type: "album",
                data: e4.item
              });
              return t2(s5), void r3(s5.length >= 10);
            }
            const s4 = await B.media.getReleases(c3, "all", 10, 0),
              a2 = [...s4.albums.map(e4 => ({
                type: "album",
                data: e4
              })), ...s4.tracks.map(e4 => ({
                type: "track",
                data: e4
              }))];
            t2(a2), r3(a2.length >= 10);
          } catch (e3) {
            F.error("library", "Failed to load new releases:", e3);
          } finally {
            l3(false);
          }
        }, [c3]),
        d3 = a.useCallback(async () => {
          if (!n2 && i3) {
            o3(true);
            try {
              const s4 = e2.length,
                a2 = await B.media.getReleases(c3, "all", 10, s4),
                l4 = new Set(e2.filter(e3 => "track" === e3.type).map(e3 => e3.data.id)),
                i4 = new Set(e2.filter(e3 => "album" === e3.type).map(e3 => e3.data.id)),
                n3 = [];
              for (const e3 of a2.albums) i4.has(e3.id) || (i4.add(e3.id), n3.push({
                type: "album",
                data: e3
              }));
              for (const e3 of a2.tracks) l4.has(e3.id) || (l4.add(e3.id), n3.push({
                type: "track",
                data: e3
              }));
              n3.length > 0 && t2(e3 => [...e3, ...n3]), r3(n3.length >= 5);
            } catch (s4) {
              F.error("library", "Failed to load more new releases:", s4);
            } finally {
              o3(false);
            }
          }
        }, [n2, i3, c3, e2]);
      a.useEffect(() => {
        u3();
      }, [c3, u3]);
      const m3 = a.useMemo(() => e2.filter(e3 => "track" === e3.type).map(e3 => e3.data), [e2]),
        h3 = he(m3),
        f3 = a.useMemo(() => new Map(h3.map(e3 => [e3.id, e3])), [h3]);
      return {
        items: a.useMemo(() => e2.map(e3 => {
          var t3;
          return "track" === e3.type ? {
            type: "track",
            data: null != (t3 = f3.get(e3.data.id)) ? t3 : e3.data
          } : e3;
        }), [e2, f3]),
        isLoading: s3,
        hasMore: i3,
        isLoadingMore: n2,
        loadMore: d3
      };
    }(),
    {
      t: m2
    } = p();
  let h2;
  l2[0] !== r2 ? (h2 = r2.filter(Be).map(He), l2[0] = r2, l2[1] = h2) : h2 = l2[1];
  const f2 = h2,
    v2 = function (t2, s3, l3) {
      const i3 = e.c(8),
        r3 = a.useRef(false),
        n2 = a.useRef(null);
      let o3, c3, u3;
      return i3[0] === Symbol.for("react.memo_cache_sentinel") ? (o3 = () => () => {
        n2.current && clearTimeout(n2.current);
      }, c3 = [], i3[0] = o3, i3[1] = c3) : (o3 = i3[0], c3 = i3[1]), a.useEffect(o3, c3), 200 !== i3[2] || i3[3] !== t2 || i3[4] !== s3 || i3[5] !== l3 || 200 !== i3[6] ? (u3 = e2 => {
        if (r3.current) return;
        const a2 = e2.currentTarget;
        r3.current = true, window.requestAnimationFrame(() => {
          r3.current = false, a2.scrollWidth - a2.scrollLeft - a2.clientWidth >= 200 || !t2 || s3 || n2.current || (n2.current = setTimeout(() => {
            n2.current = null, l3();
          }, 200));
        });
      }, i3[2] = 200, i3[3] = t2, i3[4] = s3, i3[5] = l3, i3[6] = 200, i3[7] = u3) : u3 = i3[7], u3;
    }(c2, u2, d2);
  if (!o2 && 0 === r2.length) return null;
  let x2;
  l2[2] !== m2 ? (x2 = m2("home.sections.new_releases.title"), l2[2] = m2, l2[3] = x2) : x2 = l2[3];
  const y2 = o2 && 0 === r2.length;
  let b2, k2, S2, j2, w2;
  if (l2[4] === Symbol.for("react.memo_cache_sentinel") ? (b2 = t.jsx(oe, {
    children: Array.from({
      length: 12
    }).map(Ee)
  }), l2[4] = b2) : b2 = l2[4], l2[5] !== r2 || l2[6] !== i2 || l2[7] !== m2 || l2[8] !== f2) {
    let e2;
    l2[10] !== i2 || l2[11] !== m2 || l2[12] !== f2 ? (e2 = (e3, s3) => {
      if ("track" === e3.type) {
        const a3 = e3.data;
        return t.jsx("div", {
          className: "w-40 flex-shrink-0",
          children: t.jsx(ae, {
            song: a3,
            variant: "large_cover",
            onPlaySong: e4 => {
              g.getState().playFromList(e4, f2, m2("home.sections.new_releases.title"), null, "releases");
            }
          })
        }, `new-track-${a3.id}-${s3}`);
      }
      const a2 = e3.data;
      return t.jsx(re, {
        album: a2,
        subtitle: a2.artist,
        onClick: () => i2(a2)
      }, `new-album-${a2.id}-${s3}`);
    }, l2[10] = i2, l2[11] = m2, l2[12] = f2, l2[13] = e2) : e2 = l2[13], k2 = r2.map(e2), l2[5] = r2, l2[6] = i2, l2[7] = m2, l2[8] = f2, l2[9] = k2;
  } else k2 = l2[9];
  return l2[14] !== v2 || l2[15] !== k2 ? (S2 = t.jsx(oe, {
    onScroll: v2,
    children: k2
  }), l2[14] = v2, l2[15] = k2, l2[16] = S2) : S2 = l2[16], l2[17] !== y2 || l2[18] !== b2 || l2[19] !== S2 ? (j2 = t.jsx(n, {
    pending: y2,
    placeholder: b2,
    children: S2
  }), l2[17] = y2, l2[18] = b2, l2[19] = S2, l2[20] = j2) : j2 = l2[20], l2[21] !== x2 || l2[22] !== j2 ? (w2 = t.jsx(ce, {
    title: x2,
    children: j2
  }), l2[21] = x2, l2[22] = j2, l2[23] = w2) : w2 = l2[23], w2;
});
function Be(e2) {
  return "track" === e2.type;
}
function He(e2) {
  return e2.data;
}
function Ee(e2, s2) {
  return t.jsx(me, {
    lines: 3
  }, s2);
}
const Ie = r.memo(function (s2) {
  const l2 = e.c(42),
    {
      baseSimilarTrack: i2,
      seedTracks: r2,
      isLoadingSimilar: o2,
      similarTracks: c2,
      similarArtists: u2,
      onArtistClick: d2,
      source: m2,
      loadSimilarTracks: h2,
      title: f2
    } = s2;
  let v2;
  l2[0] !== u2 ? (v2 = void 0 === u2 ? [] : u2, l2[0] = u2, l2[1] = v2) : v2 = l2[1];
  const x2 = v2;
  let y2, b2;
  l2[2] !== h2 || l2[3] !== m2 ? (y2 = () => {
    h2(m2);
  }, b2 = [m2, h2], l2[2] = h2, l2[3] = m2, l2[4] = y2, l2[5] = b2) : (y2 = l2[4], b2 = l2[5]), a.useEffect(y2, b2);
  const {
      t: k2
    } = p(),
    S2 = E(We);
  let j2;
  if (l2[6] !== x2 || l2[7] !== c2 || l2[8] !== S2) {
    let e2;
    if (j2 = [], l2[10] !== c2 || l2[11] !== S2) {
      const t3 = new Set();
      e2 = c2.filter(e3 => {
        var s4, a3;
        if ("track" === S2.get(e3.id)) return false;
        if ((null != (a3 = null == (s4 = e3.artists) ? void 0 : s4.map(Ve)) ? a3 : []).some(e4 => "artist" === S2.get(e4))) return false;
        const l3 = `${e3.title.toLowerCase()}::${e3.artist.toLowerCase()}`;
        return !t3.has(l3) && (t3.add(l3), true);
      }), l2[10] = c2, l2[11] = S2, l2[12] = e2;
    } else e2 = l2[12];
    const t2 = e2;
    let s3 = 0,
      a2 = 0;
    for (; s3 < t2.length || a2 < x2.length;) s3 < t2.length && (j2.push({
      type: "track",
      data: t2[s3++]
    }), s3 < t2.length && j2.push({
      type: "track",
      data: t2[s3++]
    })), a2 < x2.length && j2.push({
      type: "artist",
      data: x2[a2++]
    });
    l2[6] = x2, l2[7] = c2, l2[8] = S2, l2[9] = j2;
  } else j2 = l2[9];
  const w2 = j2;
  if (0 === w2.length && !o2) return null;
  let N2, T2, C2, _2, A2, M2, $2, L2, z2, P2;
  if (l2[13] !== (null == i2 ? void 0 : i2.cover_art) || l2[14] !== o2 || l2[15] !== w2 || l2[16] !== d2 || l2[17] !== k2 || l2[18] !== f2) {
    const e2 = w2.filter(qe).map(Qe);
    C2 = ce, l2[26] !== k2 || l2[27] !== f2 ? ($2 = f2 || k2("home.sections.similar.title"), l2[26] = k2, l2[27] = f2, l2[28] = $2) : $2 = l2[28], T2 = n, A2 = o2 && 0 === w2.length, l2[29] === Symbol.for("react.memo_cache_sentinel") ? (M2 = t.jsx(oe, {
      children: Array.from({
        length: 12
      }).map(Ye)
    }), l2[29] = M2) : M2 = l2[29], N2 = oe, _2 = w2.map((s3, a2) => {
      if ("track" === s3.type) {
        const l3 = s3.data;
        return t.jsx("div", {
          className: "w-40 flex-shrink-0",
          children: t.jsx(ae, {
            song: l3,
            variant: "large_cover",
            onPlaySong: t2 => {
              var s4;
              const a3 = null != (s4 = e2.find(e3 => String(e3.id) === String(t2.id))) ? s4 : t2;
              g.getState().playFromList(a3, e2, k2("home.sections.similar.title"), (null == i2 ? void 0 : i2.cover_art) || a3.cover_art || null, "similar");
            }
          })
        }, `track-${l3.id}-${a2}`);
      }
      if ("artist" === s3.type) {
        const e3 = s3.data;
        return t.jsx(ie, {
          artist: e3,
          variant: "large",
          onClick: () => null == d2 ? void 0 : d2(e3)
        }, `artist-${e3.id}-${a2}`);
      }
      return null;
    }), l2[13] = null == i2 ? void 0 : i2.cover_art, l2[14] = o2, l2[15] = w2, l2[16] = d2, l2[17] = k2, l2[18] = f2, l2[19] = N2, l2[20] = T2, l2[21] = C2, l2[22] = _2, l2[23] = A2, l2[24] = M2, l2[25] = $2;
  } else N2 = l2[19], T2 = l2[20], C2 = l2[21], _2 = l2[22], A2 = l2[23], M2 = l2[24], $2 = l2[25];
  return l2[30] !== N2 || l2[31] !== _2 ? (L2 = t.jsx(N2, {
    children: _2
  }), l2[30] = N2, l2[31] = _2, l2[32] = L2) : L2 = l2[32], l2[33] !== T2 || l2[34] !== L2 || l2[35] !== A2 || l2[36] !== M2 ? (z2 = t.jsx(T2, {
    pending: A2,
    placeholder: M2,
    children: L2
  }), l2[33] = T2, l2[34] = L2, l2[35] = A2, l2[36] = M2, l2[37] = z2) : z2 = l2[37], l2[38] !== C2 || l2[39] !== z2 || l2[40] !== $2 ? (P2 = t.jsx(C2, {
    title: $2,
    children: z2
  }), l2[38] = C2, l2[39] = z2, l2[40] = $2, l2[41] = P2) : P2 = l2[41], P2;
});
function We(e2) {
  return e2.unfavoritesTypes;
}
function Ve(e2) {
  return e2.id;
}
function qe(e2) {
  return "track" === e2.type;
}
function Qe(e2) {
  return e2.data;
}
function Ye(e2, s2) {
  return t.jsx(me, {
    lines: 2
  }, s2);
}
const Ue = r.memo(function (s2) {
    var l2, r2, n2, o2;
    const c2 = e.c(48),
      {
        setActiveTab: u2
      } = s2,
      {
        t: d2
      } = p();
    let m2;
    c2[0] !== u2 ? (m2 = {
      setActiveTab: u2
    }, c2[0] = u2, c2[1] = m2) : m2 = c2[1];
    const {
        homeDataValue: h2,
        homeActionsValue: f2
      } = __fork_homeDataValue(),
      {
        musicSource: v2,
        effectiveSource: x2,
        availableSources: b2,
        recentlyPlayedTracks: k2,
        subscribedArtists: S2,
        mixPlaylists: j2,
        isLoadingPersonalized: w2,
        isLoadingNiche: N2,
        isLoadingCharts: T2,
        forYouTracks: C2,
        daypart: _2,
        nicheTracks: A2,
        charts: M2,
        baseSimilarTrack: $2,
        isLoadingSimilar: L2,
        similarTracks: z2,
        similarArtists: P2,
        selectedArtist: H2,
        source: K2,
        user: J2
      } = h2,
      {
        setSelectedPlaylist: X2,
        setSelectedAlbum: Z2,
        setSelectedArtist: G2,
        play: ee2,
        toggle: te2,
        handleLoadSimilarTracks: se2,
        handleArtistClick: ae2,
        loadNicheSection: le2,
        loadChartsSection: ie2,
        reloadForYou: re2
      } = f2,
      ne2 = fe(Xe) || Boolean(J2) && !w2 && 0 === C2.length && 0 === j2.length;
    let oe2;
    c2[2] !== re2 ? (oe2 = () => {
      fe.getState().set(false), re2();
    }, c2[2] = re2, c2[3] = oe2) : oe2 = c2[3];
    const ce2 = oe2;
    let ue2, de2, me2, he2;
    return c2[4] !== ce2 || c2[5] !== H2 || c2[6] !== ne2 || c2[7] !== K2 ? (ue2 = !H2 && ne2 && t.jsx(ge, {
      className: "absolute inset-0",
      children: t.jsx(xe, {
        source: K2,
        onDone: ce2
      })
    }), c2[4] = ce2, c2[5] = H2, c2[6] = ne2, c2[7] = K2, c2[8] = ue2) : ue2 = c2[8], c2[9] !== b2 || c2[10] !== $2 || c2[11] !== M2 || c2[12] !== _2 || c2[13] !== x2 || c2[14] !== C2 || c2[15] !== ae2 || c2[16] !== se2 || c2[17] !== T2 || c2[18] !== N2 || c2[19] !== w2 || c2[20] !== L2 || c2[21] !== ie2 || c2[22] !== le2 || c2[23] !== j2 || c2[24] !== v2 || c2[25] !== A2 || c2[26] !== ee2 || c2[27] !== k2 || c2[28] !== H2 || c2[29] !== u2 || c2[30] !== Z2 || c2[31] !== G2 || c2[32] !== X2 || c2[33] !== ne2 || c2[34] !== P2 || c2[35] !== z2 || c2[36] !== S2 || c2[37] !== d2 || c2[38] !== te2 || c2[39] !== J2 ? (de2 = !H2 && !ne2 && t.jsxs(ge, {
      className: "absolute inset-0",
      children: [t.jsx(_e, {
        musicSource: "auto" === v2 ? x2 : v2,
        recentTracks: k2,
        availableSources: b2,
        setActiveTab: u2,
        subscribedArtists: S2,
        className: "shrink-0"
      }), t.jsxs(ve, {
        top: "none",
        children: [t.jsx("div", {
          className: "optimize-layout-vertical empty:hidden",
          children: t.jsx(De, {
            placeholderHeight: 240,
            children: t.jsx(Oe, {
              title: d2(_2 ? `home.sections.for_you.${_2}` : "home.sections.for_you.title"),
              titleAside: J2 && ((null == (l2 = J2.nickname) ? void 0 : l2.trim()) || (null == (r2 = J2.username) ? void 0 : r2.trim())) ? t.jsx(pe, {
                compact: true,
                size: "sm",
                name: (null == (n2 = J2.nickname) ? void 0 : n2.trim()) || (null == (o2 = J2.username) ? void 0 : o2.trim()) || "",
                avatar: J2.avatar,
                customColors: J2.custom,
                active: J2.active,
                avatarClassName: "h-7 w-7",
                nicknameClassName: "text-[1em] font-semibold text-foreground/70"
              }) : void 0,
              tracks: C2,
              mixes: j2,
              loading: w2,
              play: ee2,
              queueType: "for_you"
            })
          })
        }), t.jsx("div", {
          className: "optimize-layout-vertical empty:hidden",
          children: t.jsx(De, {
            placeholderHeight: 240,
            children: t.jsx(Fe, {
              setSelectedAlbum: Z2
            })
          })
        }), t.jsx("div", {
          className: "optimize-layout-vertical empty:hidden",
          children: t.jsx(De, {
            placeholderHeight: 240,
            children: t.jsx(Ie, {
              baseSimilarTrack: $2,
              isLoadingSimilar: L2,
              similarTracks: z2,
              similarArtists: P2,
              toggle: te2,
              source: "auto" === v2 ? x2 : v2,
              loadSimilarTracks: se2,
              onArtistClick: ae2
            })
          })
        }), t.jsx("div", {
          className: "optimize-layout-vertical empty:hidden",
          children: t.jsx(De, {
            placeholderHeight: 260,
            children: t.jsx(Re, {})
          })
        }), t.jsx("div", {
          className: "optimize-layout-vertical empty:hidden",
          children: t.jsx(De, {
            placeholderHeight: 240,
            onVisible: le2,
            children: t.jsx(Oe, {
              title: d2("home.sections.niche.title"),
              tracks: A2,
              loading: N2,
              play: ee2,
              queueType: "niche"
            })
          })
        }), t.jsx("div", {
          className: "optimize-layout-vertical empty:hidden",
          children: t.jsx(De, {
            placeholderHeight: 320,
            onVisible: ie2,
            children: t.jsx(Ae, {
              charts: M2,
              isLoading: T2,
              setSelectedPlaylist: X2,
              setSelectedAlbum: Z2,
              setSelectedArtist: G2
            })
          })
        })]
      })]
    }), c2[9] = b2, c2[10] = $2, c2[11] = M2, c2[12] = _2, c2[13] = x2, c2[14] = C2, c2[15] = ae2, c2[16] = se2, c2[17] = T2, c2[18] = N2, c2[19] = w2, c2[20] = L2, c2[21] = ie2, c2[22] = le2, c2[23] = j2, c2[24] = v2, c2[25] = A2, c2[26] = ee2, c2[27] = k2, c2[28] = H2, c2[29] = u2, c2[30] = Z2, c2[31] = G2, c2[32] = X2, c2[33] = ne2, c2[34] = P2, c2[35] = z2, c2[36] = S2, c2[37] = d2, c2[38] = te2, c2[39] = J2, c2[40] = de2) : de2 = c2[40], c2[41] !== H2 || c2[42] !== G2 ? (me2 = H2 && t.jsx("div", {
      className: "absolute inset-0 z-40 flex h-full min-h-0 flex-col bg-transparent animate-in fade-in duration-200",
      children: t.jsx(ye, {
        isOpen: true,
        onClose: () => G2(null),
        artistId: H2.id,
        source: H2.source,
        inline: true,
        onBack: () => G2(null)
      })
    }), c2[41] = H2, c2[42] = G2, c2[43] = me2) : me2 = c2[43], c2[44] !== ue2 || c2[45] !== de2 || c2[46] !== me2 ? (he2 = t.jsxs("div", {
      className: "h-full relative overflow-hidden",
      children: [ue2, de2, me2]
    }), c2[44] = ue2, c2[45] = de2, c2[46] = me2, c2[47] = he2) : he2 = c2[47], he2;
  }),
  De = r.memo(function (s2) {
    const l2 = e.c(7),
      {
        children: i2,
        placeholderHeight: r2,
        onVisible: n2
      } = s2,
      o2 = void 0 === r2 ? 200 : r2,
      [c2, u2] = a.useState(false),
      d2 = a.useRef(null);
    let m2, h2, f2;
    if (l2[0] !== n2 ? (m2 = () => {
      const e2 = d2.current;
      if (!e2) return;
      const t2 = new IntersectionObserver(e3 => {
        const [s3] = e3;
        s3.isIntersecting && (u2(true), null == n2 || n2(), t2.disconnect());
      }, {
        rootMargin: "300px"
      });
      return t2.observe(e2), () => t2.disconnect();
    }, h2 = [n2], l2[0] = n2, l2[1] = m2, l2[2] = h2) : (m2 = l2[1], h2 = l2[2]), a.useEffect(m2, h2), !c2) {
      let e2;
      return l2[3] !== o2 ? (e2 = t.jsx("div", {
        ref: d2,
        style: {
          height: o2
        },
        className: "w-full bg-transparent"
      }), l2[3] = o2, l2[4] = e2) : e2 = l2[4], e2;
    }
    return l2[5] !== i2 ? (f2 = t.jsx(t.Fragment, {
      children: i2
    }), l2[5] = i2, l2[6] = f2) : f2 = l2[6], f2;
  }),
  Oe = r.memo(function (s2) {
    const a2 = e.c(27),
      {
        title: l2,
        titleAside: i2,
        tracks: r2,
        mixes: o2,
        loading: c2,
        play: u2,
        queueType: d2
      } = s2,
      m2 = g(Ze);
    let h2, f2;
    a2[0] !== o2 ? (h2 = null != o2 ? o2 : [], a2[0] = o2, a2[1] = h2) : h2 = a2[1], a2[2] !== h2 ? (f2 = h2.filter(Ge), a2[2] = h2, a2[3] = f2) : f2 = a2[3];
    const v2 = f2,
      p2 = v2.length > 0,
      x2 = (p2 ? 1 : 0) + r2.length;
    if (!c2 && 0 === x2) return null;
    let y2;
    a2[4] !== l2 || a2[5] !== i2 ? (y2 = i2 ? t.jsxs("span", {
      className: "inline-flex max-w-full items-center gap-2",
      children: [t.jsxs("span", {
        className: "shrink-0",
        children: [l2, ","]
      }), i2]
    }) : l2, a2[4] = l2, a2[5] = i2, a2[6] = y2) : y2 = a2[6];
    const b2 = Boolean(c2 && 0 === x2);
    let k2, S2, j2, w2, N2, T2;
    return a2[7] === Symbol.for("react.memo_cache_sentinel") ? (k2 = t.jsx(oe, {
      children: Array.from({
        length: 6
      }).map(et)
    }), a2[7] = k2) : k2 = a2[7], a2[8] !== p2 || a2[9] !== u2 || a2[10] !== v2 ? (S2 = p2 && t.jsx(Ke, {
      mixes: v2,
      play: u2
    }), a2[8] = p2, a2[9] = u2, a2[10] = v2, a2[11] = S2) : S2 = a2[11], a2[12] !== m2 || a2[13] !== d2 || a2[14] !== l2 || a2[15] !== r2 ? (j2 = r2.map((e2, s3) => t.jsx("div", {
      className: "w-40 flex-shrink-0",
      children: t.jsx(ae, {
        song: e2,
        variant: "large_cover",
        onPlaySong: e3 => {
          m2(e3, r2, l2, null, d2);
        }
      })
    }, `track-${e2.id}-${s3}`)), a2[12] = m2, a2[13] = d2, a2[14] = l2, a2[15] = r2, a2[16] = j2) : j2 = a2[16], a2[17] !== S2 || a2[18] !== j2 ? (w2 = t.jsx(oe, {
      children: t.jsxs(t.Fragment, {
        children: [S2, j2]
      })
    }), a2[17] = S2, a2[18] = j2, a2[19] = w2) : w2 = a2[19], a2[20] !== b2 || a2[21] !== k2 || a2[22] !== w2 ? (N2 = t.jsx(n, {
      pending: b2,
      placeholder: k2,
      children: w2
    }), a2[20] = b2, a2[21] = k2, a2[22] = w2, a2[23] = N2) : N2 = a2[23], a2[24] !== y2 || a2[25] !== N2 ? (T2 = t.jsx(ce, {
      title: y2,
      children: N2
    }), a2[24] = y2, a2[25] = N2, a2[26] = T2) : T2 = a2[26], T2;
  }),
  Ke = r.memo(function (s2) {
    var l2, i2;
    const r2 = e.c(39),
      {
        mixes: c2,
        play: u2
      } = s2,
      {
        t: m2,
        currentLanguage: h2
      } = p(),
      [f2, v2] = a.useState(0),
      x2 = g(tt),
      y2 = g(st),
      b2 = g(at),
      k2 = g(lt),
      S2 = c2.length,
      j2 = c2[f2 % S2];
    let w2;
    r2[0] !== (null == j2 ? void 0 : j2.tracks) ? (w2 = null != (l2 = null == j2 ? void 0 : j2.tracks) ? l2 : [], r2[0] = null == j2 ? void 0 : j2.tracks, r2[1] = w2) : w2 = r2[1];
    const N2 = w2,
      T2 = N2[0],
      C2 = Boolean("mixes" === k2 && void 0 !== b2 && N2.some(e2 => String(e2.id) === String(b2)));
    let _2;
    e: {
      if (0 === N2.length) {
        _2 = null != (i2 = null == j2 ? void 0 : j2.title) ? i2 : "";
        break e;
      }
      let e2;
      r2[2] !== N2 ? (e2 = N2.slice(0, 4).map(it).filter(Boolean).join(", "), r2[2] = N2, r2[3] = e2) : e2 = r2[3], _2 = e2;
    }
    const A2 = _2;
    let M2;
    r2[4] !== S2 ? (M2 = e2 => {
      e2.stopPropagation(), S2 <= 1 || v2(e3 => (e3 + 1) % S2);
    }, r2[4] = S2, r2[5] = M2) : M2 = r2[5];
    const $2 = M2;
    let L2;
    r2[6] !== j2 || r2[7] !== T2 || r2[8] !== N2 || r2[9] !== u2 || r2[10] !== y2 || r2[11] !== x2 ? (L2 = () => {
      T2 && (y2(j2.title, j2.cover_art || T2.cover_art || null, "mixes"), x2(N2), u2(T2));
    }, r2[6] = j2, r2[7] = T2, r2[8] = N2, r2[9] = u2, r2[10] = y2, r2[11] = x2, r2[12] = L2) : L2 = r2[12];
    const z2 = L2;
    if (!j2) return null;
    let P2, R2, F2;
    r2[13] !== j2 ? (P2 = t.jsx(Je, {
      mix: j2
    }), r2[13] = j2, r2[14] = P2) : P2 = r2[14], r2[15] !== f2 || r2[16] !== P2 ? (R2 = t.jsx(n, {
      contentKey: f2,
      className: "size-full",
      children: P2
    }), r2[15] = f2, r2[16] = P2, r2[17] = R2) : R2 = r2[17], r2[18] !== $2 || r2[19] !== R2 ? (F2 = t.jsx("div", {
      className: "relative h-40 w-80",
      onClick: $2,
      children: R2
    }), r2[18] = $2, r2[19] = R2, r2[20] = F2) : F2 = r2[20];
    const B2 = C2 ? "text-primary" : "text-foreground group-hover:text-primary";
    let H2, E2, I2, W2, V2, q2;
    return r2[21] !== B2 ? (H2 = d("text-sm font-emphasis block truncate leading-tight transition-colors", B2), r2[21] = B2, r2[22] = H2) : H2 = r2[22], r2[23] !== H2 || r2[24] !== A2 ? (E2 = t.jsx(o, {
      playOnHover: true,
      className: H2,
      children: A2
    }), r2[23] = H2, r2[24] = A2, r2[25] = E2) : E2 = r2[25], r2[26] !== h2 || r2[27] !== N2.length || r2[28] !== m2 ? (I2 = K(N2.length, m2, h2), r2[26] = h2, r2[27] = N2.length, r2[28] = m2, r2[29] = I2) : I2 = r2[29], r2[30] !== I2 ? (W2 = t.jsx("p", {
      className: "text-footnote text-foreground/45 truncate leading-tight",
      children: I2
    }), r2[30] = I2, r2[31] = W2) : W2 = r2[31], r2[32] !== E2 || r2[33] !== W2 ? (V2 = t.jsxs("div", {
      className: "px-0.5 min-w-0 space-y-0.5",
      children: [E2, W2]
    }), r2[32] = E2, r2[33] = W2, r2[34] = V2) : V2 = r2[34], r2[35] !== z2 || r2[36] !== V2 || r2[37] !== F2 ? (q2 = t.jsxs("div", {
      className: "w-80 flex-shrink-0 group cursor-pointer select-none relative flex flex-col space-y-2.5",
      onClick: z2,
      children: [F2, V2]
    }), r2[35] = z2, r2[36] = V2, r2[37] = F2, r2[38] = q2) : q2 = r2[38], q2;
  }),
  Je = r.memo(function (s2) {
    var a2;
    const l2 = e.c(7),
      {
        mix: i2
      } = s2;
    let r2;
    l2[0] !== i2.tracks ? (r2 = null != (a2 = i2.tracks) ? a2 : [], l2[0] = i2.tracks, l2[1] = r2) : r2 = l2[1];
    const n2 = r2;
    let o2;
    if (l2[2] !== i2.cover_art || l2[3] !== n2) {
      o2 = [], i2.cover_art && o2.push(i2.cover_art);
      for (const e2 of n2) if (e2.cover_art && !o2.includes(e2.cover_art) && o2.push(e2.cover_art), o2.length >= 4) break;
      l2[2] = i2.cover_art, l2[3] = n2, l2[4] = o2;
    } else o2 = l2[4];
    const c2 = o2;
    let u2;
    return l2[5] !== c2 ? (u2 = t.jsx("div", {
      className: "relative h-full w-full pointer-events-none",
      children: c2.map((e2, s3) => {
        const a3 = 52 * s3,
          l3 = 1 - 0.07 * s3;
        return t.jsx("div", {
          className: "absolute left-0 top-1/2 size-40 origin-left overflow-hidden rounded-2xl",
          style: {
            zIndex: c2.length - s3,
            transform: `translate(${a3}px, -50%) scale(${l3})`,
            filter: 0 === s3 ? void 0 : `brightness(${1 - 0.14 * s3})`
          },
          children: t.jsx(m, {
            src: e2,
            size: 160,
            className: "h-full w-full rounded-2xl object-cover",
            showSourceBadge: false,
            disableHoverEffect: true,
            plain: true,
            disablePlayerTracking: true
          })
        }, e2);
      })
    }), l2[5] = c2, l2[6] = u2) : u2 = l2[6], u2;
  });
function Xe(e2) {
  return e2.shown;
}
function Ze(e2) {
  return e2.playFromList;
}
function Ge(e2) {
  var t2, s2;
  return (null != (s2 = null == (t2 = e2.tracks) ? void 0 : t2.length) ? s2 : 0) >= 2;
}
function et(e2, s2) {
  return t.jsx(me, {
    lines: 2
  }, s2);
}
function tt(e2) {
  return e2.setQueueSongs;
}
function st(e2) {
  return e2.setQueue;
}
function at(e2) {
  var t2;
  return null == (t2 = e2.currentSong) ? void 0 : t2.id;
}
function lt(e2) {
  return e2.queueType;
}
function it(e2) {
  return e2.title;
}
export default Ue;
