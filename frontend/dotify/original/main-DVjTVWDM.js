// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { spotifyWindow as Ot, desktopPlatform as It, nativeDesktopAvailable as tf, settingsStore as r, playerStore as u, useSettings as c, navigationStore as w, panelStore as b, TrackMenuTrigger as Jp, copyText as _i, timeStore as le, clock as qx, Nothing as j, useViewSettings as on, useDislike as oa, useFavorite as vg, Nothing as cx, canControl as Vl, lyricsStore as Dn, noCanvas as ox, readTrackSettings as ch, usePlayerActions as up, usePlayerData as cp, usePlayerBundle as mp, PlaylistAction as mv, TrackMenu as Rg, emptyStore as _l, useFavoriteActions as rn, useHasLyrics as Wv, Nothing as Bc, useSearchBundle as au, SpotifyLogo as Ku, useLocation as ms, useNavigation as Nj, TabTrigger as Ff, SearchTrigger as pj, useUiSettings as cn, Nothing as Fk, searchOverlayStore as ru, useTime as Hx } from "../runtime.jsx";
const __vite__mapDeps = (i2, m2 = __vite__mapDeps, d2 = m2.f || (m2.f = ["./index-BtbObkiv.js", "./globals-Bc3qFUyf.js", "./vendor-ui-BwX-1h7U.js", "./vendor-proto-Cqb7N4jm.js", "./vendor-icons-BAUiYk9X.js", "./vendor-hls-BfEgDoR5.js", "./globals-bA04W_Hq.css", "./install-Bc1C3DIY.js", "./operations-gCk3_j9p.js", "./view-CvHfwEcU.js", "./reveal-w9O7xfRv.js", "./progress-B9dXWW2R.js", "./view-CHncH6PY.js", "./loading-vDvH3hqW.js", "./seek-KEpYCFv_.js", "./use-premium-Dm1tM_kA.js", "./wave-DG_BvUe1.js", "./chat-CGdsZyuJ.js", "./store-Dk25DwWn.js", "./vendor-dnd-DQ9sAYhI.js", "./storage-hOFPxxFP.js", "./view-juTcB9hq.js", "./friends-D1sx-wsm.js", "./chips-vEIc28iB.js", "./titles-4S49xODV.js", "./list-B0VrW9gc.js", "./textarea-FtyWk6W3.js", "./view-BA7NuomZ.css", "./view--KkOqVCp.js", "./popover-_PbJvV10.js", "./view-VzbzFUeF.js", "./collection-BQr2cSfU.js", "./row-BYMJeSAJ.js", "./row-CcIqn1PV.js", "./view-CX5A1hTs.js", "./components-vYOaCZcN.js", "./view-QnXXfMCZ.js", "./rarity-Di4Z90Xb.js", "./coin-DebE77Qk.js", "./info-CmaJ9_Cz.js", "./confirm-DdS2-0zs.js", "./view-FjFXeq1g.js", "./view-CxjU6-Iy.js", "./gift-DOPaAL4k.js", "./view-evkUPb7D.js", "./view-CtpRf6zv.js", "./tracks-S2LS9kyP.js", "./details-C75yJyrc.js", "./path-xJlPYM46.js", "./view-B8ykjgw8.js", "./storage-CTKTSESD.js", "./view-D_3niiR2.css", "./view-CcF0CTeb.js", "./transport-B7U9wFta.js", "./view-Bg7pA49X.js"])) => i2.map(i3 => d2[i3]);
var e = Object.defineProperty,
  t = (t2, n2, a2) => ((t3, n3, a3) => n3 in t3 ? e(t3, n3, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: a3
  }) : t3[n3] = a3)(t2, "symbol" != typeof n2 ? n2 + "" : n2, a2);
import { _ as n, l as a, A as s, f as i, e as o, m as l, c as d, r as m, d as f, g as h, h as p, i as g, j as v, k as x, n as y, q as k, T as S, s as N, I as _, v as C, w as T, x as E, y as L, B as A, z as P, L as I, D as R, E as z, F as D, G as F, H as O, J as $, K as B, M as U, N as q, Q as V, a0 as ne, a1 as ae, a2 as re, a3 as se, ac as he, af as ve, ag as xe, ai as be, aj as we, ak as ke, al as je, am as Se, an as Ne, ao as _e, ap as Ce, aq as Te, ar as Ee, as as Le, at as Ae, au as Pe, av as Ie, aw as Me, ax as Re, ay as ze, aE as Ue, aH as We, aI as Ve, aJ as Qe, aK as Ke, aL as Ge, aM as Xe, aY as lt, aZ as ct, a_ as ut, a$ as dt, b0 as mt, bk as Pt, bp as Dt, bq as Ft, bt as Bt, bC as Xt, bJ as an, bP as un, bQ as dn, bR as mn, bS as fn, bT as hn, bU as pn, bV as gn, bW as vn, bX as xn, c5 as Tn, c7 as Ln, c8 as An, c9 as Pn, ca as In, cc as Rn, cd as zn, ci as Bn, cj as Un, ck as qn, cl as Hn, co as Qn, cp as Kn, cq as Gn, cr as Xn, cs as Yn, ct as Jn, cu as Zn, cv as ea, cw as ta, cx as na, cy as aa, cz as ra, cA as sa, cB as ia, cD as la, cE as ca, cF as ua, cG as da, cH as ma, cI as fa, cJ as ha, cK as pa, cL as ga, cM as va, cN as xa, cO as ya, cP as ba, cQ as wa, cR as ka, cS as ja, cT as Sa, cY as Ea, d9 as Ua, da as qa, db as Ha, dc as Wa, dd as Va, dg as Ga, di as Ya, dj as Ja, dk as Za, dl as er, dm as tr, dn as nr, dp as ar, dq as rr, dr as sr, ds as ir, dt as or, du as lr, dv as cr, dw as ur, dx as dr, dy as mr, dz as fr, dA as hr, dC as gr, dT as Ir, dU as Mr, dV as Rr, dW as zr, dX as Dr, dY as Fr, dZ as Or } from "./globals-Bc3qFUyf.js";
import { r as Qr, c as Kr, j as Gr, R as Xr, A as Yr, m as Jr, b as Zr, u as es, e as ls, a as cs, L as fs, k as ps, l as gs, n as vs, o as xs, q as ys, s as bs, I as ws, t as ks, v as js, w as Ss, x as _s, y as Cs, B as Es, E as Ls, F as As, G as Ps, H as Is, J as Ms, K as Rs, M as zs, N as Ds, Q as Fs, W as Bs } from "./vendor-ui-BwX-1h7U.js";
import { T as Vs, M as Qs, P as Ks, a as Gs } from "./progress-B9dXWW2R.js";
import { p as Xs, c as ei } from "./operations-gCk3_j9p.js";
import { u as ni, M as ri, a as si, b as ii } from "./use-premium-Dm1tM_kA.js";
import { useWaveStore as oi } from "./wave-DG_BvUe1.js";
import { A as ci, P as ui, a as di } from "./seek-KEpYCFv_.js";
import { u as mi } from "./store-Dk25DwWn.js";
import { u as fi, a as hi, P as pi, D as gi, c as vi, S as xi, v as yi, b as bi, C as wi, d as ki } from "./vendor-dnd-DQ9sAYhI.js";
async function Ci(e2) {
  var t2;
  const n2 = null == (t2 = e2.url) ? void 0 : t2.trim();
  if (!n2) return "skipped";
  if ("undefined" != typeof navigator && "function" == typeof navigator.share) try {
    return await navigator.share({
      title: e2.title,
      text: e2.text,
      url: n2
    }), "shared";
  } catch (r2) {
    a.warn("[shareLink] navigator.share failed, fallback to clipboard:", r2);
  }
  return (await _i(n2)) ? "copied" : "skipped";
}
const Ti = {
  get appVersion() {
    return l.appVersion;
  },
  async share() {
    const e2 = await l.share();
    return e2 ? await _i(e2) : await function () {
      var e3, t2, n2;
      const a2 = null != (n2 = null == (t2 = null == (e3 = r.getState().serviceSettings) ? void 0 : e3.proxy) ? void 0 : t2.proxy_mode) ? n2 : "auto";
      return _i([`app: Dotify ${s}`, `system: ${navigator.userAgent}`, `time: ${(new Date()).toISOString()}`, `proxy: ${a2}`, "", i(80)].join("\n"));
    }(), e2;
  },
  reportCrash: async (e2, t2, n2) => l.reportCrash({
    error: e2,
    componentStack: t2,
    context: n2
  }),
  reportStartupFailure: async (e2, t2, n2) => l.reportStartupFailure(e2, t2, n2),
  async handleServiceError(e2, t2, n2, r2) {
    a.error("system", `[${e2}] ${o(t2)}`, {
      error: t2,
      userId: r2,
      ...n2
    });
  }
};
function Ei() {
  var e2, t2, n2, s2, i2;
  const {
      settings: o2
    } = c(),
    l2 = u(e3 => e3.currentSong),
    g2 = Qr.useRef(null),
    v2 = Qr.useRef(null),
    x2 = Qr.useCallback(async e3 => {
      var t3, n3, r2;
      if (!(null == e3 ? void 0 : e3.cover_art)) return void a.info("[ThemeAutomation] \u041D\u0435\u0442 \u043E\u0431\u043B\u043E\u0436\u043A\u0438, \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044E");
      if (null == (n3 = null == (t3 = null == o2 ? void 0 : o2.playerSettings) ? void 0 : t3.cover) ? void 0 : n3.adaptcover) {
        if (g2.current !== e3.cover_art) {
          g2.current = e3.cover_art, a.info("[ThemeAutomation] \u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044E \u0442\u0435\u043C\u044B \u0434\u043B\u044F:", {
            title: e3.title,
            artist: e3.artist,
            cover_art: e3.cover_art
          });
          try {
            const t4 = await d(e3.cover_art);
            v2.current = t4, a.info("[ThemeAutomation] \u0418\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 (HSL):", t4);
            const n4 = m((null == (r2 = null == o2 ? void 0 : o2.themeSettings) ? void 0 : r2.mode) || "dark"),
              s3 = f(t4.h, t4.s, t4.l, n4);
            a.info("[ThemeAutomation] \u0421\u043E\u0437\u0434\u0430\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u0430:", {
              id: s3.id,
              name: s3.name,
              colors: s3.colors
            }), h(s3, "transitions-only"), a.info("[ThemeAutomation] \u0422\u0435\u043C\u0430 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E");
          } catch (s3) {
            a.error("[ThemeAutomation] Failed to extract colors:", s3);
          }
        } else a.info("[ThemeAutomation] \u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u0443\u0436\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430, \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C");
      } else a.info("[ThemeAutomation] Adaptcover \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445");
    }, [null == (e2 = null == o2 ? void 0 : o2.themeSettings) ? void 0 : e2.mode, null == (n2 = null == (t2 = null == o2 ? void 0 : o2.playerSettings) ? void 0 : t2.cover) ? void 0 : n2.adaptcover]);
  return Qr.useEffect(() => {
    var e3, t3;
    if (null == (t3 = null == (e3 = null == o2 ? void 0 : o2.playerSettings) ? void 0 : e3.cover) ? void 0 : t3.adaptcover) {
      if (null == l2 ? void 0 : l2.cover_art) l2.cover_art !== g2.current && x2(l2);else if (null !== g2.current) {
        g2.current = null;
        const e4 = r.getState(),
          t4 = m(e4.mode),
          n3 = p(e4.currentGroup, t4);
        n3 && h(n3, "transitions-only");
      }
    } else if (null !== g2.current) {
      g2.current = null;
      const e4 = r.getState(),
        t4 = m(e4.mode),
        n3 = p(e4.currentGroup, t4);
      n3 && h(n3, "transitions-only");
    }
  }, [null == (i2 = null == (s2 = null == o2 ? void 0 : o2.playerSettings) ? void 0 : s2.cover) ? void 0 : i2.adaptcover, null == l2 ? void 0 : l2.cover_art, x2]), null;
}
function Li(e2) {
  let t2 = function (e3) {
    let t3 = 2166136261;
    for (let n2 = 0; n2 < e3.length; n2 += 1) t3 ^= e3.charCodeAt(n2), t3 = Math.imul(t3, 16777619);
    return t3 >>> 0;
  }(e2) || 1;
  return () => {
    t2 = t2 + 1831565813 | 0;
    let e3 = Math.imul(t2 ^ t2 >>> 15, 1 | t2);
    return e3 = e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3) ^ e3, ((e3 ^ e3 >>> 14) >>> 0) / 4294967296;
  };
}
const Ai = "hsl(var(--primary) / <alpha>)";
function Pi(e2, t2) {
  const n2 = Math.max(0, Math.min(1, t2));
  if (e2.includes("<alpha>")) return e2.replace("<alpha>", n2.toFixed(3));
  const a2 = e2.match(/^rgba?\(([^)]+)\)$/i);
  if (a2) {
    const e3 = a2[1].split(/[\s,/]+/).filter(Boolean);
    if (e3.length >= 3) return `rgba(${e3[0]}, ${e3[1]}, ${e3[2]}, ${n2.toFixed(3)})`;
  }
  const r2 = e2.match(/^hsla?\(([^)]+)\)$/i);
  if (r2) {
    const e3 = r2[1].split(/[\s,/]+/).filter(Boolean);
    if (e3.length >= 3) return `hsla(${e3[0]}, ${e3[1]}, ${e3[2]}, ${n2.toFixed(3)})`;
  }
  return e2;
}
function Ii(e2) {
  const t2 = e2.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  return t2 ? {
    r: parseInt(t2[1], 10),
    g: parseInt(t2[2], 10),
    b: parseInt(t2[3], 10)
  } : null;
}
function Mi(e2, t2, n2) {
  const a2 = e2 / 255,
    r2 = t2 / 255,
    s2 = n2 / 255,
    i2 = Math.max(a2, r2, s2),
    o2 = Math.min(a2, r2, s2);
  let l2 = 0,
    c2 = 0;
  const u2 = (i2 + o2) / 2;
  if (i2 !== o2) {
    const e3 = i2 - o2;
    switch (c2 = u2 > 0.5 ? e3 / (2 - i2 - o2) : e3 / (i2 + o2), i2) {
      case a2:
        l2 = (r2 - s2) / e3 + (r2 < s2 ? 6 : 0);
        break;
      case r2:
        l2 = (s2 - a2) / e3 + 2;
        break;
      case s2:
        l2 = (a2 - r2) / e3 + 4;
    }
    l2 /= 6;
  }
  return {
    h: 360 * l2,
    s: c2,
    l: u2
  };
}
function Ri(e2, t2, n2) {
  const a2 = e2 / 360;
  let r2, s2, i2;
  if (0 === t2) r2 = s2 = i2 = n2;else {
    const e3 = (e4, t3, n3) => {
        let a3 = n3;
        return a3 < 0 && (a3 += 1), a3 > 1 && (a3 -= 1), a3 < 1 / 6 ? e4 + 6 * (t3 - e4) * a3 : a3 < 0.5 ? t3 : a3 < 2 / 3 ? e4 + (t3 - e4) * (2 / 3 - a3) * 6 : e4;
      },
      o2 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2,
      l2 = 2 * n2 - o2;
    r2 = e3(l2, o2, a2 + 1 / 3), s2 = e3(l2, o2, a2), i2 = e3(l2, o2, a2 - 1 / 3);
  }
  return {
    r: Math.round(255 * r2),
    g: Math.round(255 * s2),
    b: Math.round(255 * i2)
  };
}
function zi(e2 = {}) {
  const {
      seed: t2,
      color: n2,
      intensity: a2 = 1,
      variant: r2 = "sweep",
      maskFrom: s2 = 0,
      preserveColor: i2 = false
    } = e2,
    o2 = Li(t2 || "dotify"),
    l2 = Math.max(0, Math.min(1, a2)),
    c2 = "undefined" != typeof document && (document.documentElement.classList.contains("light") || !document.documentElement.classList.contains("dark"));
  let u2 = n2 || Ai,
    d2 = 1;
  if (!i2 && c2 && n2) {
    const e3 = function (e4) {
      const t3 = Ii(e4);
      if (!t3) return {
        color: e4,
        glowColor: e4,
        alphaScale: 0.75,
        isNeutral: false
      };
      const {
        h: n3,
        s: a3,
        l: r3
      } = Mi(t3.r, t3.g, t3.b);
      if (Math.max(t3.r, t3.g, t3.b) - Math.min(t3.r, t3.g, t3.b) < 28 || a3 < 0.15) return {
        color: "rgb(51, 65, 85)",
        glowColor: "rgb(148, 163, 184)",
        alphaScale: 0.32,
        isNeutral: true
      };
      const s3 = Ri(n3, Math.max(0.6, Math.min(0.85, 1.25 * a3)), Math.max(0.48, Math.min(0.58, r3 >= 0.46 && r3 <= 0.6 ? r3 : 0.52))),
        i3 = `rgb(${s3.r}, ${s3.g}, ${s3.b})`;
      return {
        color: i3,
        glowColor: i3,
        alphaScale: 0.58,
        isNeutral: false
      };
    }(n2);
    u2 = e3.glowColor, d2 = e3.alphaScale;
  } else if (!i2 && !c2 && u2 && u2 !== Ai) {
    const e3 = Ii(u2);
    if (e3) {
      const t3 = Math.max(e3.r, e3.g, e3.b) - Math.min(e3.r, e3.g, e3.b),
        {
          h: n3,
          s: a3,
          l: r3
        } = Mi(e3.r, e3.g, e3.b);
      if (t3 < 28 || a3 < 0.15) u2 = "rgb(220, 225, 235)", d2 = 0.55;else if (r3 < 0.3 || a3 < 0.25) {
        const e4 = Ri(n3, Math.max(0.45, Math.min(0.85, 1.4 * a3)), Math.max(0.36, Math.min(0.55, 1.8 * r3)));
        u2 = `rgb(${e4.r}, ${e4.g}, ${e4.b})`;
      }
    }
  }
  if (0 === d2) return {
    style: {},
    angle: 90
  };
  const m2 = ("sweep" === r2 ? 0.5 : 0.46) * l2 * d2,
    f2 = {
      backgroundImage: [`radial-gradient(140% 130% at ${Math.round(10 * o2())}% 0%, ${Pi(u2, m2)} 0%, ${Pi(u2, 0.45 * m2)} 40%, transparent 78%)`, `linear-gradient(180deg, ${Pi(u2, 0.3 * m2)} 0%, transparent 100%)`].join(", ")
    };
  return s2 > 0 && Object.assign(f2, g(s2, s2 + 160)), {
    style: f2,
    angle: 90
  };
}
function Di(e2, t2) {
  const n2 = Kr.c(7);
  let a2;
  n2[0] !== t2 ? (a2 = void 0 === t2 ? {} : t2, n2[0] = t2, n2[1] = a2) : a2 = n2[1];
  const r2 = a2,
    {
      delay: s2,
      alpha: i2
    } = r2,
    o2 = void 0 === s2 ? 150 : s2,
    l2 = void 0 === i2 ? 0.45 : i2,
    [c2, u2] = Qr.useState(null);
  let d2, m2;
  return n2[2] !== l2 || n2[3] !== o2 || n2[4] !== e2 ? (d2 = () => {
    if (!e2) return void u2(null);
    let t3 = false;
    const n3 = setTimeout(() => {
      v(e2).then(e3 => {
        t3 || u2(e3 ? `rgba(${e3.r}, ${e3.g}, ${e3.b}, ${l2})` : null);
      });
    }, o2);
    return () => {
      t3 = true, clearTimeout(n3);
    };
  }, m2 = [e2, o2, l2], n2[2] = l2, n2[3] = o2, n2[4] = e2, n2[5] = d2, n2[6] = m2) : (d2 = n2[5], m2 = n2[6]), Qr.useEffect(d2, m2), c2;
}
function Fi(e2) {
  return e2.currentTheme;
}
function Oi(e2) {
  return e2.mode;
}
function $i(e2) {
  const t2 = Kr.c(19);
  let n2;
  t2[0] !== e2 ? (n2 = void 0 === e2 ? {} : e2, t2[0] = e2, t2[1] = n2) : n2 = t2[1];
  const a2 = n2;
  let s2, i2, o2, l2, c2, u2, d2;
  t2[2] !== a2 ? ({
    image: c2,
    color: o2,
    seed: u2,
    alpha: s2,
    delay: i2,
    ...l2
  } = a2, t2[2] = a2, t2[3] = s2, t2[4] = i2, t2[5] = o2, t2[6] = l2, t2[7] = c2, t2[8] = u2) : (s2 = t2[3], i2 = t2[4], o2 = t2[5], l2 = t2[6], c2 = t2[7], u2 = t2[8]), t2[9] !== s2 || t2[10] !== i2 ? (d2 = {
    alpha: s2,
    delay: i2
  }, t2[9] = s2, t2[10] = i2, t2[11] = d2) : d2 = t2[11];
  const m2 = Di(o2 ? null : c2, d2),
    f2 = null != o2 ? o2 : m2,
    h2 = null != u2 ? u2 : c2;
  let p2;
  t2[12] !== f2 || t2[13] !== l2 || t2[14] !== h2 ? (p2 = {
    ...l2,
    seed: h2,
    color: f2
  }, t2[12] = f2, t2[13] = l2, t2[14] = h2, t2[15] = p2) : p2 = t2[15];
  const g2 = function (e3) {
    const t3 = Kr.c(9);
    let n3;
    t3[0] !== e3 ? (n3 = void 0 === e3 ? {} : e3, t3[0] = e3, t3[1] = n3) : n3 = t3[1];
    const a3 = n3,
      {
        seed: s3,
        color: i3,
        intensity: o3,
        variant: l3,
        maskFrom: c3,
        preserveColor: u3
      } = a3;
    let d3;
    return r(Oi), r(Fi), t3[2] !== i3 || t3[3] !== o3 || t3[4] !== c3 || t3[5] !== u3 || t3[6] !== s3 || t3[7] !== l3 ? (d3 = zi({
      seed: s3,
      color: i3,
      intensity: o3,
      variant: l3,
      maskFrom: c3,
      preserveColor: u3
    }), t3[2] = i3, t3[3] = o3, t3[4] = c3, t3[5] = u3, t3[6] = s3, t3[7] = l3, t3[8] = d3) : d3 = t3[8], d3;
  }(p2);
  let v2;
  return t2[16] !== f2 || t2[17] !== g2 ? (v2 = {
    color: f2,
    ...g2
  }, t2[16] = f2, t2[17] = g2, t2[18] = v2) : v2 = t2[18], v2;
}
function Bi(e2) {
  const t2 = Kr.c(28),
    {
      image: n2,
      color: a2,
      seed: r2,
      showImage: s2,
      imageOpacity: i2,
      intensity: o2,
      variant: l2,
      preserveColor: c2,
      maskFrom: u2,
      scrim: d2,
      maskBottom: m2,
      className: f2
    } = e2,
    h2 = void 0 !== s2 && s2,
    p2 = void 0 === i2 ? 0.3 : i2,
    g2 = void 0 === o2 ? 1 : o2,
    v2 = void 0 === l2 ? "sweep" : l2,
    y2 = void 0 !== c2 && c2,
    b2 = void 0 === u2 ? 0 : u2,
    w2 = void 0 !== d2 && d2,
    k2 = void 0 !== m2 && m2;
  let j2;
  t2[0] !== a2 || t2[1] !== n2 || t2[2] !== g2 || t2[3] !== b2 || t2[4] !== y2 || t2[5] !== r2 || t2[6] !== v2 ? (j2 = {
    image: n2,
    color: a2,
    seed: r2,
    intensity: g2,
    variant: v2,
    maskFrom: b2,
    preserveColor: y2
  }, t2[0] = a2, t2[1] = n2, t2[2] = g2, t2[3] = b2, t2[4] = y2, t2[5] = r2, t2[6] = v2, t2[7] = j2) : j2 = t2[7];
  const {
    color: S2,
    style: N2
  } = $i(j2);
  let _2;
  t2[8] !== k2 ? (_2 = k2 ? {
    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
    maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)"
  } : {}, t2[8] = k2, t2[9] = _2) : _2 = t2[9];
  const C2 = _2;
  let T2;
  t2[10] === Symbol.for("react.memo_cache_sentinel") ? (T2 = "undefined" != typeof document && ("glass" === document.documentElement.getAttribute("data-render-mode") || "true" === document.documentElement.getAttribute("data-custom-background")), t2[10] = T2) : T2 = t2[10];
  const E2 = T2;
  let L2, A2, P2, I2, M2;
  return t2[11] !== f2 ? (L2 = x("absolute inset-0 z-0 pointer-events-none overflow-hidden bg-transparent", f2), t2[11] = f2, t2[12] = L2) : L2 = t2[12], t2[13] !== n2 || t2[14] !== p2 || t2[15] !== h2 ? (A2 = h2 && n2 && Gr.jsx("img", {
    src: n2,
    alt: "",
    loading: "lazy",
    decoding: "async",
    className: "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700",
    style: {
      opacity: p2
    }
  }), t2[13] = n2, t2[14] = p2, t2[15] = h2, t2[16] = A2) : A2 = t2[16], t2[17] !== S2 || t2[18] !== N2 ? (P2 = S2 && Gr.jsx("div", {
    className: "absolute inset-0 transition-opacity duration-700 pointer-events-none",
    style: N2
  }), t2[17] = S2, t2[18] = N2, t2[19] = P2) : P2 = t2[19], t2[20] !== w2 ? (I2 = w2 && !E2 && Gr.jsxs(Gr.Fragment, {
    children: [Gr.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
    }), Gr.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent"
    })]
  }), t2[20] = w2, t2[21] = I2) : I2 = t2[21], t2[22] !== C2 || t2[23] !== L2 || t2[24] !== A2 || t2[25] !== P2 || t2[26] !== I2 ? (M2 = Gr.jsxs("div", {
    className: L2,
    style: C2,
    children: [A2, P2, I2]
  }), t2[22] = C2, t2[23] = L2, t2[24] = A2, t2[25] = P2, t2[26] = I2, t2[27] = M2) : M2 = t2[27], M2;
}
const Ui = Xr.memo(function (e2) {
  const t2 = Kr.c(30),
    {
      artists: n2,
      source: a2,
      className: r2,
      style: s2,
      artistsArray: i2,
      origin: o2
    } = e2,
    l2 = y(qi);
  let c2;
  t2[0] !== n2 ? (c2 = n2.includes(",") || n2.includes(" & ") || n2.includes("&") || n2.includes(" feat. ") || n2.includes(" feat ") || n2.includes(" ft. ") || n2.includes(" ft ") || n2.includes(" featuring ") || n2.includes(" w/ ") || n2.includes(" with "), t2[0] = n2, t2[1] = c2) : c2 = t2[1];
  const d2 = c2;
  let m2;
  t2[2] !== i2 || t2[3] !== l2 || t2[4] !== o2 || t2[5] !== a2 ? (m2 = (e3, t3, n3) => {
    var r3;
    e3.stopPropagation();
    const s3 = t3.trim().toLowerCase(),
      c3 = null != (r3 = null == i2 ? void 0 : i2.find(e4 => {
        var t4;
        return (null == (t4 = e4.name) ? void 0 : t4.trim().toLowerCase()) === s3;
      })) ? r3 : null == i2 ? void 0 : i2[n3],
      d3 = ((null == c3 ? void 0 : c3.name) || t3).trim();
    if (!d3 && !(null == c3 ? void 0 : c3.id)) return;
    const m3 = u.getState();
    m3.showLyrics && m3.setShowLyrics(false), m3.isPlayerPortalOpen && m3.setIsPlayerPortalOpen(false), b.getState().closePanel();
    const f3 = w.getState().activeTab;
    l2({
      id: (null == c3 ? void 0 : c3.id) ? String(c3.id) : void 0,
      name: d3,
      source: (null == c3 ? void 0 : c3.source) || a2
    }, o2, "artist" !== f3 ? f3 : "home");
  }, t2[2] = i2, t2[3] = l2, t2[4] = o2, t2[5] = a2, t2[6] = m2) : m2 = t2[6];
  const f2 = m2,
    h2 = r2 || "";
  let p2, g2, v2, k2, j2, S2;
  if (t2[7] !== n2 || t2[8] !== f2 || t2[9] !== d2 || t2[10] !== s2 || t2[11] !== h2) {
    k2 = Symbol.for("react.early_return_sentinel");
    e: {
      const e3 = h2.split(/\s+/).filter(Boolean),
        a3 = e3.filter(Hi),
        r3 = e3.filter(Wi);
      if (g2 = x("cursor-pointer transition-colors duration-150", a3.length > 0 ? a3.join(" ") : "hover:text-foreground hover:underline", !a3.some(Vi) && "hover:underline"), !d2) {
        let e4;
        t2[16] !== n2 || t2[17] !== f2 ? (e4 = e5 => f2(e5, n2, 0), t2[16] = n2, t2[17] = f2, t2[18] = e4) : e4 = t2[18], k2 = Gr.jsx("span", {
          className: x(r3.join(" "), g2),
          onClick: e4,
          style: s2,
          children: n2
        });
        break e;
      }
      let i3;
      t2[19] === Symbol.for("react.memo_cache_sentinel") ? (i3 = /\s*[,&]\s*|\s+feat\.?\s+|\s+ft\.?\s+|\s+featuring\s+|\s+w\/\s+|\s+with\s+|\s+x\s+/gi, t2[19] = i3) : i3 = t2[19];
      const o3 = i3;
      if (t2[20] !== n2) {
        const e4 = [];
        let a4,
          r4 = 0;
        const s3 = new RegExp(o3.source, "gi");
        for (; null !== (a4 = s3.exec(n2));) a4.index > r4 && e4.push({
          text: n2.slice(r4, a4.index).trim(),
          isSeparator: false
        }), e4.push({
          text: a4[0],
          isSeparator: true
        }), r4 = s3.lastIndex;
        r4 < n2.length && e4.push({
          text: n2.slice(r4).trim(),
          isSeparator: false
        }), p2 = [];
        let i4 = 0;
        for (const t3 of e4) 0 !== t3.text.length && (p2.push({
          ...t3,
          artistIndex: t3.isSeparator ? -1 : i4
        }), t3.isSeparator || (i4 += 1));
        t2[20] = n2, t2[21] = p2;
      } else p2 = t2[21];
      v2 = r3.join(" ");
    }
    t2[7] = n2, t2[8] = f2, t2[9] = d2, t2[10] = s2, t2[11] = h2, t2[12] = p2, t2[13] = g2, t2[14] = v2, t2[15] = k2;
  } else p2 = t2[12], g2 = t2[13], v2 = t2[14], k2 = t2[15];
  return k2 !== Symbol.for("react.early_return_sentinel") ? k2 : (t2[22] !== p2 || t2[23] !== f2 || t2[24] !== g2 ? (j2 = p2.map((e3, t3) => e3.isSeparator ? Gr.jsx("span", {
    className: "select-none pointer-events-none opacity-60 no-underline",
    children: e3.text
  }, t3) : Gr.jsx("span", {
    className: g2,
    onClick: t4 => f2(t4, e3.text, e3.artistIndex),
    children: e3.text
  }, t3)), t2[22] = p2, t2[23] = f2, t2[24] = g2, t2[25] = j2) : j2 = t2[25], t2[26] !== s2 || t2[27] !== v2 || t2[28] !== j2 ? (S2 = Gr.jsx("span", {
    className: v2,
    style: s2,
    children: j2
  }), t2[26] = s2, t2[27] = v2, t2[28] = j2, t2[29] = S2) : S2 = t2[29], S2);
}, (e2, t2) => {
  var n2, a2, r2, s2, i2;
  return e2.artists === t2.artists && e2.source === t2.source && e2.className === t2.className && e2.style === t2.style && (null == (n2 = e2.artistsArray) ? void 0 : n2.length) === (null == (a2 = t2.artistsArray) ? void 0 : a2.length) && !(null == (r2 = e2.artistsArray) ? void 0 : r2.some((e3, n3) => {
    var a3, r3;
    return e3.id !== (null == (r3 = null == (a3 = t2.artistsArray) ? void 0 : a3[n3]) ? void 0 : r3.id);
  })) && (null == (s2 = e2.origin) ? void 0 : s2.id) === (null == (i2 = t2.origin) ? void 0 : i2.id);
});
function qi(e2) {
  return e2.openArtistCredit;
}
function Hi(e2) {
  return e2.startsWith("hover:") || e2.startsWith("focus:");
}
function Wi(e2) {
  return !e2.startsWith("hover:") && !e2.startsWith("focus:");
}
function Vi(e2) {
  return e2.includes("underline");
}
const Qi = "text-callout leading-tight text-muted-foreground transition-colors",
  Ki = Xr.memo(e2 => {
    const t2 = Kr.c(16),
      {
        text: n2,
        artist: a2,
        source: r2,
        artistsArray: s2,
        origin: i2,
        link: o2,
        centerWhenIdle: l2,
        className: c2
      } = e2,
      u2 = void 0 !== l2 && l2,
      d2 = null != n2 ? n2 : a2;
    if (!d2) return null;
    if (void 0 === n2 && r2 && (void 0 === o2 || o2)) {
      let e3, n3;
      return t2[0] !== c2 ? (e3 = x(Qi, "relative z-10 block max-w-full truncate hover:text-foreground", c2), t2[0] = c2, t2[1] = e3) : e3 = t2[1], t2[2] !== s2 || t2[3] !== d2 || t2[4] !== i2 || t2[5] !== r2 || t2[6] !== e3 ? (n3 = Gr.jsx(Ui, {
        artists: d2,
        source: r2,
        artistsArray: s2,
        origin: i2,
        className: e3
      }), t2[2] = s2, t2[3] = d2, t2[4] = i2, t2[5] = r2, t2[6] = e3, t2[7] = n3) : n3 = t2[7], n3;
    }
    const m2 = u2 && "text-center";
    let f2, h2, p2;
    return t2[8] !== m2 ? (f2 = x("max-w-full", m2), t2[8] = m2, t2[9] = f2) : f2 = t2[9], t2[10] !== c2 ? (h2 = x(Qi, c2), t2[10] = c2, t2[11] = h2) : h2 = t2[11], t2[12] !== d2 || t2[13] !== f2 || t2[14] !== h2 ? (p2 = Gr.jsx(Vs, {
      containerClassName: f2,
      className: h2,
      children: d2
    }), t2[12] = d2, t2[13] = f2, t2[14] = h2, t2[15] = p2) : p2 = t2[15], p2;
  }),
  Gi = e2 => {
    const t2 = Kr.c(2),
      {
        children: n2
      } = e2;
    let a2;
    return t2[0] !== n2 ? (a2 = Gr.jsx("p", {
      className: "truncate text-footnote leading-tight text-foreground/45",
      children: n2
    }), t2[0] = n2, t2[1] = a2) : a2 = t2[1], a2;
  },
  Xi = ".group\\/entity",
  Yi = Xr.memo(e2 => {
    const t2 = Kr.c(14),
      {
        children: n2,
        isHovered: a2,
        hoverScope: r2,
        size: s2,
        containerClassName: i2,
        className: o2,
        centerWhenIdle: l2,
        direction: c2
      } = e2,
      u2 = void 0 === s2 ? "sm" : s2,
      d2 = void 0 !== l2 && l2,
      m2 = void 0 === c2 ? "left" : c2,
      f2 = Boolean(a2);
    let h2;
    t2[0] !== i2 ? (h2 = x("max-w-full", i2), t2[0] = i2, t2[1] = h2) : h2 = t2[1];
    const p2 = "sm" === u2 && "text-sm",
      g2 = "md" === u2 && "text-headline";
    let v2, y2;
    return t2[2] !== o2 || t2[3] !== p2 || t2[4] !== g2 ? (v2 = x("font-emphasis text-foreground leading-tight whitespace-nowrap", p2, g2, o2), t2[2] = o2, t2[3] = p2, t2[4] = g2, t2[5] = v2) : v2 = t2[5], t2[6] !== d2 || t2[7] !== n2 || t2[8] !== m2 || t2[9] !== r2 || t2[10] !== f2 || t2[11] !== h2 || t2[12] !== v2 ? (y2 = Gr.jsx(Qs, {
      playOnHover: true,
      forceActive: f2,
      hoverScope: r2,
      centerWhenIdle: d2,
      direction: m2,
      containerClassName: h2,
      className: v2,
      children: n2
    }), t2[6] = d2, t2[7] = n2, t2[8] = m2, t2[9] = r2, t2[10] = f2, t2[11] = h2, t2[12] = v2, t2[13] = y2) : y2 = t2[13], y2;
  });
function Ji(e2) {
  const t2 = Kr.c(10);
  let n2, a2, r2;
  t2[0] !== e2 ? ({
    className: n2,
    shimmer: r2,
    ...a2
  } = e2, t2[0] = e2, t2[1] = n2, t2[2] = a2, t2[3] = r2) : (n2 = t2[1], a2 = t2[2], r2 = t2[3]);
  const s2 = void 0 !== r2 && r2 ? "skeleton-shimmer" : "skeleton";
  let i2, o2;
  return t2[4] !== n2 || t2[5] !== s2 ? (i2 = x("rounded-md select-none pointer-events-none", s2, n2), t2[4] = n2, t2[5] = s2, t2[6] = i2) : i2 = t2[6], t2[7] !== a2 || t2[8] !== i2 ? (o2 = Gr.jsx("div", {
    className: i2,
    ...a2
  }), t2[7] = a2, t2[8] = i2, t2[9] = o2) : o2 = t2[9], o2;
}
function Zi(e2) {
  const t2 = Kr.c(23),
    {
      subtitle: n2,
      lines: a2,
      className: r2,
      coverClassName: s2,
      shimmer: i2
    } = e2,
    o2 = void 0 !== i2 && i2,
    l2 = null != a2 ? a2 : void 0 !== n2 && n2 ? 2 : 1;
  let c2, u2, d2, m2, f2, h2, p2, g2;
  return t2[0] !== r2 ? (c2 = x("w-40 flex-shrink-0 space-y-2.5 select-none pointer-events-none", r2), t2[0] = r2, t2[1] = c2) : c2 = t2[1], t2[2] !== s2 ? (u2 = x("w-full aspect-square rounded-cover", s2), t2[2] = s2, t2[3] = u2) : u2 = t2[3], t2[4] !== o2 || t2[5] !== u2 ? (d2 = Gr.jsx(Ji, {
    className: u2,
    shimmer: o2
  }), t2[4] = o2, t2[5] = u2, t2[6] = d2) : d2 = t2[6], t2[7] !== o2 ? (m2 = Gr.jsx(Ji, {
    className: "h-3.5 rounded-full w-4/5",
    shimmer: o2
  }), t2[7] = o2, t2[8] = m2) : m2 = t2[8], t2[9] !== l2 || t2[10] !== o2 ? (f2 = l2 > 1 && Gr.jsx(Ji, {
    className: "h-3 rounded-full w-1/2 opacity-60",
    shimmer: o2
  }), t2[9] = l2, t2[10] = o2, t2[11] = f2) : f2 = t2[11], t2[12] !== l2 || t2[13] !== o2 ? (h2 = l2 > 2 && Gr.jsx(Ji, {
    className: "h-3 rounded-full w-1/3 opacity-40",
    shimmer: o2
  }), t2[12] = l2, t2[13] = o2, t2[14] = h2) : h2 = t2[14], t2[15] !== m2 || t2[16] !== f2 || t2[17] !== h2 ? (p2 = Gr.jsxs("div", {
    className: "space-y-1 px-0.5",
    children: [m2, f2, h2]
  }), t2[15] = m2, t2[16] = f2, t2[17] = h2, t2[18] = p2) : p2 = t2[18], t2[19] !== c2 || t2[20] !== d2 || t2[21] !== p2 ? (g2 = Gr.jsxs("div", {
    className: c2,
    children: [d2, p2]
  }), t2[19] = c2, t2[20] = d2, t2[21] = p2, t2[22] = g2) : g2 = t2[22], g2;
}
function eo(e2) {
  const t2 = Kr.c(12),
    {
      className: n2,
      shimmer: a2
    } = e2,
    r2 = void 0 !== a2 && a2;
  let s2, i2, o2, l2, c2;
  return t2[0] !== n2 ? (s2 = x("flex h-16 items-center gap-3 px-3 rounded-xl select-none pointer-events-none", n2), t2[0] = n2, t2[1] = s2) : s2 = t2[1], t2[2] !== r2 ? (i2 = Gr.jsx(Ji, {
    className: "h-10 w-10 rounded-lg flex-shrink-0",
    shimmer: r2
  }), t2[2] = r2, t2[3] = i2) : i2 = t2[3], t2[4] !== r2 ? (o2 = Gr.jsxs("div", {
    className: "flex-1 min-w-0 space-y-1.5",
    children: [Gr.jsx(Ji, {
      className: "h-3.5 rounded-full w-1/3",
      shimmer: r2
    }), Gr.jsx(Ji, {
      className: "h-2.5 rounded-full w-1/5 opacity-60",
      shimmer: r2
    })]
  }), l2 = Gr.jsx(Ji, {
    className: "h-3 rounded-full w-10 opacity-40",
    shimmer: r2
  }), t2[4] = r2, t2[5] = o2, t2[6] = l2) : (o2 = t2[5], l2 = t2[6]), t2[7] !== s2 || t2[8] !== i2 || t2[9] !== o2 || t2[10] !== l2 ? (c2 = Gr.jsxs("div", {
    className: s2,
    children: [i2, o2, l2]
  }), t2[7] = s2, t2[8] = i2, t2[9] = o2, t2[10] = l2, t2[11] = c2) : c2 = t2[11], c2;
}
function to() {
  const e2 = Kr.c(1);
  let t2;
  return e2[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = Gr.jsx("div", {
    "aria-hidden": true,
    className: "h-full overflow-hidden px-2.5 select-none pointer-events-none",
    children: Array.from({
      length: 12
    }, no)
  }), e2[0] = t2) : t2 = e2[0], t2;
}
function no(e2, t2) {
  return Gr.jsx(eo, {
    className: "mb-1"
  }, t2);
}
const ao = Xr.forwardRef(function (e2, t2) {
    const n2 = Kr.c(45);
    let a2, r2, s2, i2, o2, l2, c2, u2, d2, m2, f2, h2;
    n2[0] !== e2 ? ({
      leading: r2,
      marker: s2,
      title: m2,
      titleAside: f2,
      subtitle: c2,
      trailing: h2,
      flush: u2,
      dense: d2,
      onClick: i2,
      className: a2,
      onKeyDown: o2,
      ...l2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2, n2[5] = o2, n2[6] = l2, n2[7] = c2, n2[8] = u2, n2[9] = d2, n2[10] = m2, n2[11] = f2, n2[12] = h2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4], o2 = n2[5], l2 = n2[6], c2 = n2[7], u2 = n2[8], d2 = n2[9], m2 = n2[10], f2 = n2[11], h2 = n2[12]);
    const p2 = void 0 !== u2 && u2,
      g2 = void 0 !== d2 && d2,
      v2 = i2 ? "button" : void 0,
      y2 = i2 ? 0 : void 0;
    let b2;
    n2[13] !== i2 || n2[14] !== o2 ? (b2 = e3 => {
      null == o2 || o2(e3), i2 && !e3.defaultPrevented && e3.target === e3.currentTarget && ("Enter" !== e3.key && " " !== e3.key || (e3.preventDefault(), i2(e3)));
    }, n2[13] = i2, n2[14] = o2, n2[15] = b2) : b2 = n2[15];
    const w2 = p2 ? "px-0" : "px-1.5",
      k2 = g2 ? "py-0" : "py-1.5",
      j2 = i2 && "cursor-pointer";
    let S2, N2, _2, C2, T2, E2, L2;
    return n2[16] !== a2 || n2[17] !== w2 || n2[18] !== k2 || n2[19] !== j2 ? (S2 = x("group flex min-w-0 select-none items-center gap-3 rounded-xl outline-none transition-colors focus-visible:bg-hover", w2, k2, j2, a2), n2[16] = a2, n2[17] = w2, n2[18] = k2, n2[19] = j2, n2[20] = S2) : S2 = n2[20], n2[21] !== s2 ? (N2 = s2 ? Gr.jsx("div", {
      className: "flex w-4 shrink-0 items-center justify-center",
      children: s2
    }) : null, n2[21] = s2, n2[22] = N2) : N2 = n2[22], n2[23] !== r2 ? (_2 = r2 ? Gr.jsx("div", {
      className: "flex shrink-0 items-center",
      children: r2
    }) : null, n2[23] = r2, n2[24] = _2) : _2 = n2[24], n2[25] !== m2 || n2[26] !== f2 ? (C2 = f2 ? Gr.jsxs("div", {
      className: "flex min-w-0 items-center gap-2",
      children: [Gr.jsx("div", {
        className: "min-w-0 flex-1",
        children: m2
      }), Gr.jsx("div", {
        className: "shrink-0",
        children: f2
      })]
    }) : m2, n2[25] = m2, n2[26] = f2, n2[27] = C2) : C2 = n2[27], n2[28] !== c2 || n2[29] !== C2 ? (T2 = Gr.jsxs("div", {
      className: "flex min-w-0 flex-1 flex-col justify-center",
      children: [C2, c2]
    }), n2[28] = c2, n2[29] = C2, n2[30] = T2) : T2 = n2[30], n2[31] !== h2 ? (E2 = h2 ? Gr.jsx("div", {
      className: "flex shrink-0 items-center gap-1.5",
      children: h2
    }) : null, n2[31] = h2, n2[32] = E2) : E2 = n2[32], n2[33] !== i2 || n2[34] !== t2 || n2[35] !== l2 || n2[36] !== N2 || n2[37] !== _2 || n2[38] !== T2 || n2[39] !== E2 || n2[40] !== v2 || n2[41] !== y2 || n2[42] !== b2 || n2[43] !== S2 ? (L2 = Gr.jsxs("div", {
      ref: t2,
      role: v2,
      tabIndex: y2,
      onClick: i2,
      onKeyDown: b2,
      className: S2,
      ...l2,
      children: [N2, _2, T2, E2]
    }), n2[33] = i2, n2[34] = t2, n2[35] = l2, n2[36] = N2, n2[37] = _2, n2[38] = T2, n2[39] = E2, n2[40] = v2, n2[41] = y2, n2[42] = b2, n2[43] = S2, n2[44] = L2) : L2 = n2[44], L2;
  }),
  ro = {
    sm: "h-9 w-9",
    md: "h-12 w-12",
    chart: "h-11 w-11"
  };
function so(e2) {
  const t2 = Kr.c(19),
    {
      size: n2,
      round: a2,
      line: r2,
      flush: s2,
      dense: i2,
      className: o2
    } = e2,
    l2 = void 0 === n2 ? "sm" : n2,
    c2 = void 0 !== a2 && a2,
    u2 = void 0 !== s2 && s2,
    d2 = void 0 !== i2 && i2;
  if (void 0 !== r2 && r2) {
    let e3, n3, a3, r3;
    return t2[0] !== o2 ? (e3 = x("flex h-5 items-center gap-1.5", o2), t2[0] = o2, t2[1] = e3) : e3 = t2[1], t2[2] === Symbol.for("react.memo_cache_sentinel") ? (n3 = Gr.jsx(Ji, {
      className: "h-4 w-4 shrink-0 rounded"
    }), a3 = Gr.jsx(Ji, {
      className: "h-2.5 w-40 max-w-[75%] rounded"
    }), t2[2] = n3, t2[3] = a3) : (n3 = t2[2], a3 = t2[3]), t2[4] !== e3 ? (r3 = Gr.jsxs("div", {
      className: e3,
      children: [n3, a3]
    }), t2[4] = e3, t2[5] = r3) : r3 = t2[5], r3;
  }
  const m2 = u2 ? "px-0" : "px-1.5",
    f2 = d2 ? "py-0" : "py-1.5";
  let h2;
  t2[6] !== o2 || t2[7] !== m2 || t2[8] !== f2 ? (h2 = x("flex items-center gap-3", m2, f2, o2), t2[6] = o2, t2[7] = m2, t2[8] = f2, t2[9] = h2) : h2 = t2[9];
  const p2 = ro[l2],
    g2 = c2 ? "rounded-full" : "rounded-lg";
  let v2, y2, b2, w2;
  return t2[10] !== g2 || t2[11] !== p2 ? (v2 = x("shrink-0", p2, g2), t2[10] = g2, t2[11] = p2, t2[12] = v2) : v2 = t2[12], t2[13] !== v2 ? (y2 = Gr.jsx(Ji, {
    className: v2
  }), t2[13] = v2, t2[14] = y2) : y2 = t2[14], t2[15] === Symbol.for("react.memo_cache_sentinel") ? (b2 = Gr.jsxs("div", {
    className: "flex min-w-0 flex-1 flex-col gap-1.5",
    children: [Gr.jsx(Ji, {
      className: "h-3 w-28 max-w-[70%] rounded"
    }), Gr.jsx(Ji, {
      className: "h-2.5 w-20 max-w-[50%] rounded opacity-60"
    })]
  }), t2[15] = b2) : b2 = t2[15], t2[16] !== y2 || t2[17] !== h2 ? (w2 = Gr.jsxs("div", {
    className: h2,
    children: [y2, b2]
  }), t2[16] = y2, t2[17] = h2, t2[18] = w2) : w2 = t2[18], w2;
}
function io(e2) {
  const t2 = Kr.c(8),
    {
      trend: n2,
      className: a2
    } = e2;
  if (!n2) return null;
  const r2 = "up" === n2 ? "text-primary/60" : "text-primary/35";
  let s2, i2, o2;
  return t2[0] !== a2 || t2[1] !== r2 ? (s2 = x("inline-flex items-center justify-center shrink-0 w-4 h-4 select-none", r2, a2), t2[0] = a2, t2[1] = r2, t2[2] = s2) : s2 = t2[2], t2[3] !== n2 ? (i2 = "up" === n2 ? Gr.jsx(_.anchorUp, {
    className: "h-3.5 w-3.5"
  }) : Gr.jsx(_.anchorDown, {
    className: "h-3.5 w-3.5"
  }), t2[3] = n2, t2[4] = i2) : i2 = t2[4], t2[5] !== s2 || t2[6] !== i2 ? (o2 = Gr.jsx("span", {
    "aria-hidden": "true",
    className: s2,
    children: i2
  }), t2[5] = s2, t2[6] = i2, t2[7] = o2) : o2 = t2[7], o2;
}
function oo(e2) {
  const t2 = Kr.c(15),
    {
      song: n2,
      className: a2
    } = e2,
    r2 = n2.artist || "";
  let s2;
  t2[0] !== r2 ? (s2 = k(r2), t2[0] = r2, t2[1] = s2) : s2 = t2[1];
  const i2 = s2;
  if (!n2.source) {
    let e3;
    return t2[2] !== i2 || t2[3] !== a2 ? (e3 = Gr.jsx("span", {
      className: a2,
      children: i2
    }), t2[2] = i2, t2[3] = a2, t2[4] = e3) : e3 = t2[4], e3;
  }
  const o2 = n2.source,
    l2 = n2.artists;
  let c2, u2, d2;
  return t2[5] !== n2 ? (c2 = j(n2), t2[5] = n2, t2[6] = c2) : c2 = t2[6], t2[7] !== a2 ? (u2 = x("transition-colors hover:text-primary", a2), t2[7] = a2, t2[8] = u2) : u2 = t2[8], t2[9] !== i2 || t2[10] !== n2.artists || t2[11] !== n2.source || t2[12] !== c2 || t2[13] !== u2 ? (d2 = Gr.jsx(Ui, {
    artists: i2,
    source: o2,
    artistsArray: l2,
    origin: c2,
    className: u2
  }), t2[9] = i2, t2[10] = n2.artists, t2[11] = n2.source, t2[12] = c2, t2[13] = u2, t2[14] = d2) : d2 = t2[14], d2;
}
const lo = Xr.memo(function (e2) {
  const t2 = Kr.c(86),
    {
      song: n2,
      className: a2,
      style: r2,
      layout: s2,
      size: i2,
      titleFirst: o2,
      hideArtist: l2,
      flush: c2,
      forceMarquee: u2,
      isCurrentSong: d2,
      isLive: m2,
      disablePlayerTracking: f2,
      trend: h2,
      trailing: p2,
      onClick: g2,
      onMouseEnter: v2,
      onMouseLeave: y2
    } = e2,
    b2 = void 0 === s2 ? "row" : s2,
    w2 = void 0 === i2 ? "sm" : i2,
    k2 = void 0 !== o2 && o2,
    j2 = void 0 !== c2 && c2,
    _2 = void 0 !== u2 && u2,
    C2 = void 0 !== f2 && f2,
    T2 = void 0 !== d2 && d2 && !C2,
    E2 = void 0 !== m2 && m2 && !C2,
    L2 = null != p2 ? p2 : null,
    A2 = !(void 0 !== l2 && l2) && !!n2.artist;
  let P2, I2, M2;
  t2[0] !== n2 ? (P2 = Gr.jsx(S, {
    song: n2,
    className: "w-3 h-3"
  }), t2[0] = n2, t2[1] = P2) : P2 = t2[1], t2[2] !== n2.title ? (I2 = Gr.jsx("span", {
    children: n2.title
  }), t2[2] = n2.title, t2[3] = I2) : I2 = t2[3], t2[4] !== P2 || t2[5] !== I2 ? (M2 = Gr.jsxs("span", {
    className: "inline-flex items-center gap-1",
    children: [P2, I2]
  }), t2[4] = P2, t2[5] = I2, t2[6] = M2) : M2 = t2[6];
  const R2 = M2;
  let z2;
  t2[7] !== C2 || t2[8] !== E2 || t2[9] !== n2.artist || t2[10] !== n2.cover_art || t2[11] !== n2.id || t2[12] !== n2.source || t2[13] !== n2.title ? (z2 = (e3, t3) => Gr.jsx(N, {
    src: n2.cover_art,
    title: n2.title,
    artist: n2.artist,
    size: e3,
    source: n2.source,
    songId: n2.id,
    className: x("object-cover flex-shrink-0", t3),
    loadingOnly: true,
    isActive: E2,
    isPlaying: E2,
    disablePlayerTracking: C2
  }), t2[7] = C2, t2[8] = E2, t2[9] = n2.artist, t2[10] = n2.cover_art, t2[11] = n2.id, t2[12] = n2.source, t2[13] = n2.title, t2[14] = z2) : z2 = t2[14];
  const D2 = z2;
  if ("row" === b2) {
    const e3 = "lg" === w2,
      s3 = e3 && !j2 && "px-2";
    let i3, o3, l3;
    t2[15] !== a2 || t2[16] !== s3 ? (i3 = x(s3, a2), t2[15] = a2, t2[16] = s3, t2[17] = i3) : i3 = t2[17], t2[18] !== h2 ? (o3 = h2 ? Gr.jsx(io, {
      trend: h2
    }) : void 0, t2[18] = h2, t2[19] = o3) : o3 = t2[19], t2[20] !== D2 || t2[21] !== e3 ? (l3 = e3 ? D2(44, "rounded-lg") : Gr.jsx("div", {
      className: "w-9 h-9 rounded-lg overflow-hidden shrink-0 bg-muted/40 shadow-sm",
      children: D2(36, "w-9 h-9 rounded-lg")
    }), t2[20] = D2, t2[21] = e3, t2[22] = l3) : l3 = t2[22];
    const c3 = e3 ? "text-headline font-medium" : "text-sm font-medium";
    let u3;
    t2[23] !== c3 ? (u3 = x("leading-tight", c3), t2[23] = c3, t2[24] = u3) : u3 = t2[24];
    const d3 = !_2,
      m3 = e3 ? "text-foreground/85" : "group-hover:text-primary transition-colors",
      f3 = T2 && "text-primary";
    let p3, b3, k3, S2, N2;
    return t2[25] !== m3 || t2[26] !== f3 ? (p3 = x("text-foreground", m3, f3), t2[25] = m3, t2[26] = f3, t2[27] = p3) : p3 = t2[27], t2[28] !== p3 || t2[29] !== R2 ? (b3 = Gr.jsx("span", {
      className: p3,
      children: R2
    }), t2[28] = p3, t2[29] = R2, t2[30] = b3) : b3 = t2[30], t2[31] !== _2 || t2[32] !== u3 || t2[33] !== d3 || t2[34] !== b3 ? (k3 = Gr.jsx(Qs, {
      containerClassName: "min-w-0",
      className: u3,
      playOnHover: d3,
      forceActive: _2,
      gapClassName: "ml-6",
      children: b3
    }), t2[31] = _2, t2[32] = u3, t2[33] = d3, t2[34] = b3, t2[35] = k3) : k3 = t2[35], t2[36] !== n2 || t2[37] !== A2 ? (S2 = A2 ? Gr.jsx(Vs, {
      containerClassName: "mt-0.5",
      className: x("leading-tight", "text-callout text-muted-foreground"),
      children: Gr.jsx(oo, {
        song: n2
      })
    }) : null, t2[36] = n2, t2[37] = A2, t2[38] = S2) : S2 = t2[38], t2[39] !== j2 || t2[40] !== g2 || t2[41] !== v2 || t2[42] !== y2 || t2[43] !== r2 || t2[44] !== i3 || t2[45] !== o3 || t2[46] !== l3 || t2[47] !== k3 || t2[48] !== S2 || t2[49] !== L2 ? (N2 = Gr.jsx(ao, {
      flush: j2,
      style: r2,
      className: i3,
      onClick: g2,
      onMouseEnter: v2,
      onMouseLeave: y2,
      marker: o3,
      leading: l3,
      title: k3,
      subtitle: S2,
      trailing: L2
    }), t2[39] = j2, t2[40] = g2, t2[41] = v2, t2[42] = y2, t2[43] = r2, t2[44] = i3, t2[45] = o3, t2[46] = l3, t2[47] = k3, t2[48] = S2, t2[49] = L2, t2[50] = N2) : N2 = t2[50], N2;
  }
  let F2;
  t2[51] === Symbol.for("react.memo_cache_sentinel") ? (F2 = Gr.jsx("span", {
    className: "text-muted-foreground/50",
    children: " \u2014 "
  }), t2[51] = F2) : F2 = t2[51];
  const O2 = F2,
    $2 = T2 && "text-primary";
  let B2, U2;
  t2[52] !== $2 ? (B2 = x("text-foreground/80", $2), t2[52] = $2, t2[53] = B2) : B2 = t2[53], t2[54] !== B2 || t2[55] !== R2 ? (U2 = Gr.jsx("span", {
    className: B2,
    children: R2
  }), t2[54] = B2, t2[55] = R2, t2[56] = U2) : U2 = t2[56];
  const q2 = U2;
  let H2;
  t2[57] !== n2 ? (H2 = Gr.jsx(oo, {
    song: n2,
    className: "text-muted-foreground"
  }), t2[57] = n2, t2[58] = H2) : H2 = t2[58];
  const W2 = H2;
  let V2, Q2, K2;
  t2[59] !== a2 ? (V2 = x("group flex min-w-0 cursor-pointer select-none items-center gap-1.5", a2), t2[59] = a2, t2[60] = V2) : V2 = t2[60], t2[61] !== h2 ? (Q2 = h2 && Gr.jsx(io, {
    trend: h2
  }), t2[61] = h2, t2[62] = Q2) : Q2 = t2[62], t2[63] !== D2 ? (K2 = D2(16, "rounded-[3px]"), t2[63] = D2, t2[64] = K2) : K2 = t2[64];
  const G2 = !_2;
  let X2, Y2, J2, Z2;
  return t2[65] !== W2 || t2[66] !== k2 || t2[67] !== q2 || t2[68] !== A2 ? (X2 = A2 ? k2 ? Gr.jsxs(Gr.Fragment, {
    children: [q2, O2, W2]
  }) : Gr.jsxs(Gr.Fragment, {
    children: [W2, O2, q2]
  }) : q2, t2[65] = W2, t2[66] = k2, t2[67] = q2, t2[68] = A2, t2[69] = X2) : X2 = t2[69], t2[70] !== _2 || t2[71] !== G2 || t2[72] !== X2 ? (Y2 = Gr.jsx(Qs, {
    containerClassName: "min-w-0 flex-1",
    className: "text-xs",
    playOnHover: G2,
    forceActive: _2,
    gapClassName: "ml-6",
    children: X2
  }), t2[70] = _2, t2[71] = G2, t2[72] = X2, t2[73] = Y2) : Y2 = t2[73], t2[74] !== L2 ? (J2 = L2 ? Gr.jsx("div", {
    className: "flex shrink-0 items-center",
    children: L2
  }) : null, t2[74] = L2, t2[75] = J2) : J2 = t2[75], t2[76] !== g2 || t2[77] !== v2 || t2[78] !== y2 || t2[79] !== r2 || t2[80] !== V2 || t2[81] !== Q2 || t2[82] !== K2 || t2[83] !== Y2 || t2[84] !== J2 ? (Z2 = Gr.jsxs("div", {
    style: r2,
    className: V2,
    onMouseEnter: v2,
    onMouseLeave: y2,
    onClick: g2,
    children: [Q2, K2, Y2, J2]
  }), t2[76] = g2, t2[77] = v2, t2[78] = y2, t2[79] = r2, t2[80] = V2, t2[81] = Q2, t2[82] = K2, t2[83] = Y2, t2[84] = J2, t2[85] = Z2) : Z2 = t2[85], Z2;
}, (e2, t2) => {
  const n2 = e2.song,
    a2 = t2.song;
  return n2.id === a2.id && n2.title === a2.title && n2.artist === a2.artist && n2.cover_art === a2.cover_art && n2.source === a2.source && e2.className === t2.className && e2.style === t2.style && e2.layout === t2.layout && e2.size === t2.size && e2.titleFirst === t2.titleFirst && e2.hideArtist === t2.hideArtist && e2.flush === t2.flush && e2.forceMarquee === t2.forceMarquee && e2.isCurrentSong === t2.isCurrentSong && e2.isLive === t2.isLive && e2.disablePlayerTracking === t2.disablePlayerTracking && e2.trend === t2.trend && e2.trailing === t2.trailing && e2.onClick === t2.onClick && e2.onMouseEnter === t2.onMouseEnter && e2.onMouseLeave === t2.onMouseLeave;
});
const co = (e2, t2) => `artist:${e2}:${t2}`;
async function uo(e2, t2, n2) {
  try {
    const a2 = await async function (e3, t3) {
      var n3, a3, r3, s2, i2, o2;
      if ("favorites" === t3.id) {
        const e4 = E.getState();
        return e4.isInitialized && !e4.hasMore || (await e4.loadFavorites({
          force: true
        })), E.getState().songs;
      }
      if (null == (n3 = t3.tracks) ? void 0 : n3.length) return t3.tracks;
      if ("playlist" === e3 && C.getState().playlists.some(e4 => e4.id === t3.id)) return null != (i2 = null == (s2 = await (null == (r3 = (a3 = C.getState()).ensurePlaylistLoaded) ? void 0 : r3.call(a3, t3.id))) ? void 0 : s2.tracks) ? i2 : [];
      if ("playlist" === e3 && t3.id && L(t3)) return (await T.library.playlists.get(t3.id)).tracks;
      if (!t3.source || !t3.id) return [];
      const l2 = "album" === e3 ? await T.media.getAlbum(t3.source, t3.id) : await T.media.getPlaylist(t3.source, t3.id);
      return null != (o2 = null == l2 ? void 0 : l2.tracks) ? o2 : [];
    }(e2, t2);
    if (!a2.length) return;
    const r2 = u.getState();
    if ("queue" === n2) r2.addMultipleToQueue(a2, {
      groupId: t2.id,
      groupName: t2.title,
      groupCover: t2.cover_art
    });else {
      const s2 = "favorites" === t2.id ? "favorites" : "offline" === t2.id ? "offline" : e2;
      await r2.playPlaylist({
        ...t2,
        tracks: a2
      }, {
        shuffle: "shuffle" === n2,
        startIndex: "shuffle" === n2 ? void 0 : 0,
        type: s2
      });
    }
  } catch (r2) {
    throw a.error("media", `Quick ${n2} failed for ${e2} ${t2.id}:`, r2), r2;
  }
}
function mo(e2) {
  const t2 = Kr.c(7);
  let n2;
  t2[0] !== e2 ? (n2 = t3 => !!e2 && (t3.queueId && e2.id ? t3.queueId === e2.id : Boolean(e2.name) && t3.queueType === e2.type && t3.queueName === e2.name), t2[0] = e2, t2[1] = n2) : n2 = t2[1];
  const a2 = u(n2);
  let r2;
  t2[2] !== a2 ? (r2 = e3 => a2 && e3.isPlaying, t2[2] = a2, t2[3] = r2) : r2 = t2[3];
  const s2 = u(r2),
    i2 = fo;
  let o2;
  return t2[4] !== a2 || t2[5] !== s2 ? (o2 = {
    isThis: a2,
    playing: s2,
    toggle: i2
  }, t2[4] = a2, t2[5] = s2, t2[6] = o2) : o2 = t2[6], o2;
}
function fo() {
  return u.getState().setIsPlaying(ho);
}
function ho(e2) {
  return !e2;
}
const po = Xr.createContext({
  size: "md",
  shape: "pill"
});
const go = Xr.forwardRef(function (e2, t2) {
    const n2 = Kr.c(18);
    let a2, r2, s2, i2, o2, l2;
    n2[0] !== e2 ? ({
      children: s2,
      className: i2,
      active: a2,
      activeClassName: r2,
      size: o2,
      ...l2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2, n2[5] = o2, n2[6] = l2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4], o2 = n2[5], l2 = n2[6]);
    const c2 = Xr.useContext(po),
      u2 = null != o2 ? o2 : c2.size,
      d2 = c2.shape,
      m2 = "sm" === u2 ? "h-6 w-6" : "h-8 w-8",
      f2 = "pill" === d2 ? "!rounded-full" : "square" === d2 ? "sm" === u2 ? "rounded-md" : "rounded-lg" : "rounded-[calc(var(--ui-radius,0.75rem)-2px)]",
      h2 = "md" === u2 && "[&_svg]:size-[18px]",
      p2 = a2 && (null != r2 ? r2 : "text-primary");
    let g2, v2;
    return n2[7] !== f2 || n2[8] !== m2 || n2[9] !== i2 || n2[10] !== h2 || n2[11] !== p2 ? (g2 = x("bg-transparent text-foreground/55 hover:bg-transparent hover:text-foreground focus-visible:bg-transparent transition-colors", h2, m2, f2, p2, i2), n2[7] = f2, n2[8] = m2, n2[9] = i2, n2[10] = h2, n2[11] = p2, n2[12] = g2) : g2 = n2[12], n2[13] !== s2 || n2[14] !== l2 || n2[15] !== t2 || n2[16] !== g2 ? (v2 = Gr.jsx(A, {
      ref: t2,
      variant: "ghost",
      size: "icon",
      className: g2,
      ...l2,
      children: s2
    }), n2[13] = s2, n2[14] = l2, n2[15] = t2, n2[16] = g2, n2[17] = v2) : v2 = n2[17], v2;
  }),
  vo = Object.assign(function (e2) {
    const t2 = Kr.c(14),
      {
        children: n2,
        className: a2,
        size: r2,
        shape: s2
      } = e2,
      i2 = void 0 === r2 ? "md" : r2,
      o2 = void 0 === s2 ? "pill" : s2,
      l2 = "sm" === i2 ? "h-8 px-1" : "h-9 px-1",
      c2 = "pill" === o2 ? "rounded-full" : "square" === o2 ? "sm" === i2 ? "rounded-lg" : "rounded-xl" : "rounded-[var(--ui-radius,0.75rem)]";
    let u2, d2, m2, f2;
    return t2[0] !== o2 || t2[1] !== i2 ? (u2 = {
      size: i2,
      shape: o2
    }, t2[0] = o2, t2[1] = i2, t2[2] = u2) : u2 = t2[2], t2[3] !== a2 || t2[4] !== l2 || t2[5] !== c2 ? (d2 = x("flex items-center gap-1 border border-border-subtle", l2, c2, a2), t2[3] = a2, t2[4] = l2, t2[5] = c2, t2[6] = d2) : d2 = t2[6], t2[7] !== n2 || t2[8] !== o2 || t2[9] !== d2 ? (m2 = Gr.jsx("div", {
      "data-pill-shape": o2,
      className: d2,
      children: n2
    }), t2[7] = n2, t2[8] = o2, t2[9] = d2, t2[10] = m2) : m2 = t2[10], t2[11] !== u2 || t2[12] !== m2 ? (f2 = Gr.jsx(po.Provider, {
      value: u2,
      children: m2
    }), t2[11] = u2, t2[12] = m2, t2[13] = f2) : f2 = t2[13], f2;
  }, {
    Button: go
  });
function xo(e2) {
  const t2 = Kr.c(9),
    {
      onClick: n2,
      label: a2,
      className: r2
    } = e2;
  let s2, i2, o2, l2;
  return t2[0] !== r2 ? (s2 = x("group inline-flex max-w-full items-center gap-2.5 border-none bg-transparent p-0 text-base font-semibold text-foreground/80 transition-colors duration-150 select-none hover:text-foreground md:text-lg", r2), t2[0] = r2, t2[1] = s2) : s2 = t2[1], t2[2] === Symbol.for("react.memo_cache_sentinel") ? (i2 = Gr.jsx(_.back, {
    className: "h-5 w-5 shrink-0 text-foreground/70 transition-all duration-150 group-hover:-translate-x-0.5 group-hover:text-foreground"
  }), t2[2] = i2) : i2 = t2[2], t2[3] !== a2 ? (o2 = a2 && Gr.jsx("span", {
    className: "truncate leading-none tracking-tight",
    children: a2
  }), t2[3] = a2, t2[4] = o2) : o2 = t2[4], t2[5] !== n2 || t2[6] !== s2 || t2[7] !== o2 ? (l2 = Gr.jsxs("button", {
    type: "button",
    onClick: n2,
    className: s2,
    children: [i2, o2]
  }), t2[5] = n2, t2[6] = s2, t2[7] = o2, t2[8] = l2) : l2 = t2[8], l2;
}
const yo = "text-4xl font-bold leading-tight tracking-[-0.03em] md:text-5xl md:leading-tight",
  bo = x("line-clamp-2 break-words text-foreground", yo);
function ko(e2) {
  const t2 = Kr.c(6),
    {
      children: n2,
      avatar: a2,
      onClick: r2
    } = e2;
  let s2, i2;
  return t2[0] !== n2 || t2[1] !== r2 ? (s2 = r2 ? Gr.jsx("span", {
    role: "link",
    tabIndex: 0,
    onClick: r2,
    onKeyDown: e3 => "Enter" === e3.key && r2(),
    className: "min-w-0 cursor-pointer truncate transition-colors hover:text-foreground",
    children: n2
  }) : Gr.jsx("span", {
    className: "min-w-0 truncate",
    children: n2
  }), t2[0] = n2, t2[1] = r2, t2[2] = s2) : s2 = t2[2], t2[3] !== a2 || t2[4] !== s2 ? (i2 = Gr.jsxs("div", {
    className: "mt-1.5 flex min-w-0 items-center gap-2 text-headline text-foreground/65",
    children: [a2, s2]
  }), t2[3] = a2, t2[4] = s2, t2[5] = i2) : i2 = t2[5], i2;
}
function jo(e2) {
  const t2 = Kr.c(2),
    {
      children: n2
    } = e2;
  let a2;
  return t2[0] !== n2 ? (a2 = Gr.jsx("p", {
    className: "mt-1 truncate text-callout text-foreground/45 select-none",
    children: n2
  }), t2[0] = n2, t2[1] = a2) : a2 = t2[1], a2;
}
function So(e2) {
  const t2 = Kr.c(29),
    {
      onClick: n2,
      disabled: a2,
      queue: r2
    } = e2,
    {
      t: s2
    } = P(),
    {
      isThis: i2,
      playing: o2,
      toggle: l2
    } = mo(r2),
    c2 = a2 && !i2;
  let u2, d2, m2, f2, h2, p2;
  t2[0] !== i2 || t2[1] !== n2 || t2[2] !== l2 ? (u2 = () => i2 ? l2() : n2(), t2[0] = i2, t2[1] = n2, t2[2] = l2, t2[3] = u2) : u2 = t2[3], t2[4] !== o2 ? (d2 = Gr.jsx(Co, {
    playing: o2,
    className: "size-4"
  }), t2[4] = o2, t2[5] = d2) : d2 = t2[5], t2[6] !== s2 ? (m2 = s2("common.listen"), t2[6] = s2, t2[7] = m2) : m2 = t2[7], t2[8] !== m2 ? (f2 = Gr.jsx("span", {
    "aria-hidden": true,
    className: "invisible col-start-1 row-start-1",
    children: m2
  }), t2[8] = m2, t2[9] = f2) : f2 = t2[9], t2[10] !== s2 ? (h2 = s2("common.pause"), t2[10] = s2, t2[11] = h2) : h2 = t2[11], t2[12] !== h2 ? (p2 = Gr.jsx("span", {
    "aria-hidden": true,
    className: "invisible col-start-1 row-start-1",
    children: h2
  }), t2[12] = h2, t2[13] = p2) : p2 = t2[13];
  const g2 = o2 ? "common.pause" : "common.listen";
  let v2, x2, y2, b2;
  return t2[14] !== s2 || t2[15] !== g2 ? (v2 = s2(g2), t2[14] = s2, t2[15] = g2, t2[16] = v2) : v2 = t2[16], t2[17] !== v2 ? (x2 = Gr.jsx("span", {
    className: "col-start-1 row-start-1 text-center",
    children: v2
  }), t2[17] = v2, t2[18] = x2) : x2 = t2[18], t2[19] !== x2 || t2[20] !== f2 || t2[21] !== p2 ? (y2 = Gr.jsxs("span", {
    className: "grid",
    children: [f2, p2, x2]
  }), t2[19] = x2, t2[20] = f2, t2[21] = p2, t2[22] = y2) : y2 = t2[22], t2[23] !== o2 || t2[24] !== c2 || t2[25] !== y2 || t2[26] !== u2 || t2[27] !== d2 ? (b2 = Gr.jsx(A, {
    variant: "primary",
    size: "cta",
    disabled: c2,
    "aria-pressed": o2,
    onClick: u2,
    leadingIcon: d2,
    children: y2
  }), t2[23] = o2, t2[24] = c2, t2[25] = y2, t2[26] = u2, t2[27] = d2, t2[28] = b2) : b2 = t2[28], b2;
}
function Co(e2) {
  const t2 = Kr.c(14),
    {
      playing: n2,
      className: a2
    } = e2;
  let r2;
  t2[0] !== a2 ? (r2 = x("relative block shrink-0", a2), t2[0] = a2, t2[1] = r2) : r2 = t2[1];
  const s2 = n2 ? "pause" : "play";
  let i2, o2, l2, c2, u2, d2, m2;
  return t2[2] === Symbol.for("react.memo_cache_sentinel") ? (i2 = {
    opacity: 0,
    scale: 0.6
  }, o2 = {
    opacity: 1,
    scale: 1
  }, l2 = {
    opacity: 0,
    scale: 0.6
  }, c2 = {
    duration: 0.16,
    ease: "easeOut"
  }, t2[2] = i2, t2[3] = o2, t2[4] = l2, t2[5] = c2) : (i2 = t2[2], o2 = t2[3], l2 = t2[4], c2 = t2[5]), t2[6] !== n2 ? (u2 = n2 ? Gr.jsx(_.pause, {
    weight: "Bold",
    className: "size-full"
  }) : Gr.jsx(_.play, {
    weight: "Bold",
    className: "size-full translate-x-px"
  }), t2[6] = n2, t2[7] = u2) : u2 = t2[7], t2[8] !== s2 || t2[9] !== u2 ? (d2 = Gr.jsx(Yr, {
    initial: false,
    children: Gr.jsx(Jr.span, {
      className: "absolute inset-0 flex items-center justify-center",
      initial: i2,
      animate: o2,
      exit: l2,
      transition: c2,
      children: u2
    }, s2)
  }), t2[8] = s2, t2[9] = u2, t2[10] = d2) : d2 = t2[10], t2[11] !== r2 || t2[12] !== d2 ? (m2 = Gr.jsx("span", {
    className: r2,
    children: d2
  }), t2[11] = r2, t2[12] = d2, t2[13] = m2) : m2 = t2[13], m2;
}
const To = "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.25) 70%, transparent 100%)",
  Eo = "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.12) 65%, transparent 100%)",
  Lo = "linear-gradient(to bottom, #000 0%, #000 35%, transparent 100%)",
  Ao = "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.35) 45%, #000 80%)",
  Po = e2 => {
    const t2 = Kr.c(57),
      {
        cover: n2,
        round: a2,
        framed: r2,
        bare: s2,
        compact: i2,
        avatar: o2,
        avatarSize: l2,
        banner: c2,
        bannerMode: u2,
        align: d2,
        backdrop: m2,
        trailing: f2,
        onBack: h2,
        backLabel: p2,
        actions: g2,
        children: v2
      } = e2,
      y2 = void 0 === l2 ? "default" : l2,
      b2 = void 0 === u2 ? "wash" : u2,
      w2 = void 0 === d2 ? "end" : d2,
      k2 = "hero" === b2 && "entity-header-hero";
    let j2, S2, N2;
    t2[0] !== k2 ? (j2 = x("relative flex-shrink-0", k2), t2[0] = k2, t2[1] = j2) : j2 = t2[1], t2[2] !== m2 ? (S2 = m2 && Gr.jsx("div", {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0",
      children: m2
    }), t2[2] = m2, t2[3] = S2) : S2 = t2[3], t2[4] !== c2 || t2[5] !== b2 ? (N2 = c2 && Gr.jsxs("div", {
      "aria-hidden": true,
      className: x("pointer-events-none absolute inset-x-0 top-0 overflow-hidden", "cover" === b2 ? "h-64" : "h-full"),
      style: {
        maskImage: "hero" === b2 ? Lo : "cover" === b2 ? Eo : To,
        WebkitMaskImage: "hero" === b2 ? Lo : "cover" === b2 ? Eo : To
      },
      children: [Gr.jsx("img", {
        src: c2,
        alt: "",
        draggable: false,
        style: "cover" === b2 ? {
          maskImage: Ao,
          WebkitMaskImage: Ao
        } : void 0,
        className: x("h-full w-full select-none object-cover", "object-center", "wash" === b2 ? "scale-150 blur-3xl saturate-[1.3] opacity-55 dark:opacity-65" : "cover" === b2 ? "opacity-80" : void 0)
      }), "hero" === b2 && Gr.jsxs(Gr.Fragment, {
        children: [Gr.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/15"
        }), Gr.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent"
        })]
      })]
    }), t2[4] = c2, t2[5] = b2, t2[6] = N2) : N2 = t2[6];
    const _2 = "hero" === b2 ? "entity-header-hero-content pb-section" : o2 ? i2 ? "pb-section pt-8" : c2 ? "pb-section pt-24" : "pb-section pt-8" : "pb-5 pt-page-y",
      C2 = "hero" === b2 && c2 && "entity-header-hero-banner";
    let T2, E2;
    t2[7] !== _2 || t2[8] !== C2 ? (T2 = x("relative z-10 flex flex-col px-page", _2, C2), t2[7] = _2, t2[8] = C2, t2[9] = T2) : T2 = t2[9], t2[10] !== p2 || t2[11] !== h2 ? (E2 = h2 && Gr.jsx(xo, {
      onClick: h2,
      label: p2,
      className: "self-start"
    }), t2[10] = p2, t2[11] = h2, t2[12] = E2) : E2 = t2[12];
    const L2 = !o2 && "mt-5",
      A2 = "hero" === b2 ? "entity-header-hero-row" : f2 ? "grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] items-end" : "flex items-end";
    let P2;
    t2[13] !== L2 || t2[14] !== A2 ? (P2 = x("gap-section", L2, A2), t2[13] = L2, t2[14] = A2, t2[15] = P2) : P2 = t2[15];
    const I2 = "hero" === b2 || o2 ? "items-start" : "center" === w2 ? "items-center md:gap-8" : "items-end md:gap-8";
    let M2, R2, z2, D2, F2, O2, $2, B2, U2, q2, H2;
    return t2[16] !== I2 ? (M2 = x("flex min-w-0 flex-1 gap-section max-sm:flex-col", I2), t2[16] = I2, t2[17] = M2) : M2 = t2[17], t2[18] !== o2 || t2[19] !== y2 || t2[20] !== s2 || t2[21] !== i2 || t2[22] !== n2 || t2[23] !== r2 || t2[24] !== a2 ? (R2 = n2 && Gr.jsx("div", {
      className: x("relative shrink-0", o2 ? "large" === y2 ? "h-40 w-40" : "h-32 w-32" : i2 ? "h-36 w-36" : "h-44 w-44 md:h-48 md:w-48"),
      children: Gr.jsx("div", {
        className: x("h-full w-full", !r2 && !s2 && "overflow-hidden bg-plate", a2 || r2 ? "rounded-full" : "rounded-2xl"),
        children: n2
      })
    }), t2[18] = o2, t2[19] = y2, t2[20] = s2, t2[21] = i2, t2[22] = n2, t2[23] = r2, t2[24] = a2, t2[25] = R2) : R2 = t2[25], t2[26] !== g2 || t2[27] !== o2 ? (z2 = o2 && g2 && Gr.jsx("div", {
      className: "mt-4 flex flex-wrap items-center gap-2",
      children: g2
    }), t2[26] = g2, t2[27] = o2, t2[28] = z2) : z2 = t2[28], t2[29] !== v2 || t2[30] !== z2 ? (D2 = Gr.jsxs("div", {
      className: "flex min-w-0 flex-1 flex-col justify-end pb-1",
      children: [v2, z2]
    }), t2[29] = v2, t2[30] = z2, t2[31] = D2) : D2 = t2[31], t2[32] !== M2 || t2[33] !== R2 || t2[34] !== D2 ? (F2 = Gr.jsxs("div", {
      className: M2,
      children: [R2, D2]
    }), t2[32] = M2, t2[33] = R2, t2[34] = D2, t2[35] = F2) : F2 = t2[35], t2[36] !== f2 ? (O2 = f2 && Gr.jsx("div", {
      className: "min-w-0",
      children: f2
    }), t2[36] = f2, t2[37] = O2) : O2 = t2[37], t2[38] !== P2 || t2[39] !== F2 || t2[40] !== O2 ? ($2 = Gr.jsxs("div", {
      className: P2,
      "data-tauri-drag-region": true,
      children: [F2, O2]
    }), t2[38] = P2, t2[39] = F2, t2[40] = O2, t2[41] = $2) : $2 = t2[41], t2[42] !== T2 || t2[43] !== E2 || t2[44] !== $2 ? (B2 = Gr.jsxs("div", {
      className: T2,
      "data-tauri-drag-region": true,
      children: [E2, $2]
    }), t2[42] = T2, t2[43] = E2, t2[44] = $2, t2[45] = B2) : B2 = t2[45], t2[46] !== B2 || t2[47] !== S2 || t2[48] !== N2 ? (U2 = Gr.jsxs("div", {
      className: "relative overflow-hidden",
      children: [S2, N2, B2]
    }), t2[46] = B2, t2[47] = S2, t2[48] = N2, t2[49] = U2) : U2 = t2[49], t2[50] !== g2 || t2[51] !== o2 ? (q2 = !o2 && g2 && Gr.jsx("div", {
      className: "flex flex-wrap items-center gap-2 px-page pb-section pt-1",
      children: g2
    }), t2[50] = g2, t2[51] = o2, t2[52] = q2) : q2 = t2[52], t2[53] !== U2 || t2[54] !== q2 || t2[55] !== j2 ? (H2 = Gr.jsxs("div", {
      className: j2,
      children: [U2, q2]
    }), t2[53] = U2, t2[54] = q2, t2[55] = j2, t2[56] = H2) : H2 = t2[56], H2;
  },
  Io = (e2, t2) => `${e2}:${t2}`,
  Mo = Zr((e2, t2) => ({
    albums: [],
    isLoading: false,
    isInitialized: false,
    lastUpdated: 0,
    setAlbums: t3 => e2({
      albums: t3,
      isInitialized: true,
      lastUpdated: Date.now()
    }),
    upsertAlbum: t3 => e2(e3 => {
      const n2 = Io(t3.source || "", t3.id);
      return {
        albums: e3.albums.some(e4 => Io(e4.source || "", e4.id) === n2) ? e3.albums.map(e4 => Io(e4.source || "", e4.id) === n2 ? {
          ...e4,
          ...t3
        } : e4) : [t3, ...e3.albums],
        isInitialized: true,
        lastUpdated: Date.now()
      };
    }),
    removeAlbum: (t3, n2) => e2(e3 => ({
      albums: e3.albums.filter(e4 => Io(e4.source || "", e4.id) !== Io(t3, n2)),
      lastUpdated: Date.now()
    })),
    loadAlbums: async () => {
      if (!t2().isLoading) {
        e2({
          isLoading: true
        });
        try {
          t2().setAlbums(await T.library.albums.list());
        } finally {
          e2({
            isLoading: false,
            isInitialized: true
          });
        }
      }
    },
    ensureAlbumLoaded: async (e3, n2) => {
      var a2;
      const r2 = Io(e3, n2),
        s2 = t2().albums.find(e4 => Io(e4.source || "", e4.id) === r2),
        i2 = null != (a2 = null == s2 ? void 0 : s2.tracks_count) ? a2 : 0;
      if (s2 && s2.tracks.length >= i2) return s2;
      try {
        const a3 = await T.library.albums.get(e3, n2);
        return t2().upsertAlbum(a3), a3;
      } catch {
        return null != s2 ? s2 : null;
      }
    }
  }));
function Oo(e2) {
  var t2, n2;
  const a2 = null == (t2 = e2.id) ? void 0 : t2.trim(),
    r2 = null == (n2 = e2.source) ? void 0 : n2.trim();
  if (!a2 || !r2) throw new Error("Entity source and id are required");
  return {
    id: a2,
    source: r2
  };
}
const $o = new Map(),
  Bo = e2 => function ({
    source: e3,
    id: t2
  }) {
    return `${e3}:${t2}`;
  }(e2);
async function Uo(e2, t2) {
  const n2 = Oo(e2),
    a2 = Bo(n2);
  if (!(null == t2 ? void 0 : t2.force)) {
    const e3 = await R.get("album", a2);
    if (e3) return e3;
  }
  const r2 = $o.get(a2);
  if (r2 && !(null == t2 ? void 0 : t2.force)) return r2;
  const s2 = T.media.getAlbum(n2.source, n2.id).then(async e3 => {
    if (!e3) throw new Error("Media backend returned no album");
    return await R.set("album", a2, e3), e3;
  });
  $o.set(a2, s2);
  try {
    return await s2;
  } finally {
    $o.delete(a2);
  }
}
function qo(e2, t2) {
  var n2;
  return Boolean(null == (n2 = e2.originals) ? void 0 : n2.some(e3 => {
    var n3;
    return e3.id === t2 || (null == (n3 = e3.id) ? void 0 : n3.endsWith(`::${t2}`));
  }));
}
async function Ho(e2, t2) {
  var n2, r2, s2;
  try {
    const {
      id: a2,
      source: i2
    } = e2;
    if ("playlist" === t2 && L(e2)) return await T.library.playlists.copy(a2), z(), true;
    if (!i2 || !a2) return false;
    if ("album" === t2) return await async function (e3) {
      const t3 = await Uo(e3, {
          force: true
        }),
        n3 = await T.library.albums.save(t3);
      return await R.set("album", Bo(Oo(e3)), n3), Mo.getState().upsertAlbum(n3), "undefined" != typeof window && window.dispatchEvent(new CustomEvent("albums_changed")), n3;
    }({
      source: i2,
      id: a2
    }), true;
    const o2 = await T.media.getPlaylist(i2, a2);
    if (!o2) return false;
    const l2 = Date.now(),
      c2 = {
        id: null != (s2 = null == (r2 = null == (n2 = globalThis.crypto) ? void 0 : n2.randomUUID) ? void 0 : r2.call(n2)) ? s2 : `${l2}-${Math.random().toString(36).slice(2, 10)}`,
        title: o2.title,
        tracks: o2.tracks,
        author: o2.author,
        cover_art: o2.cover_art,
        source: o2.source,
        tracks_count: o2.tracks_count,
        created_at: l2,
        updated_at: l2,
        originals: [{
          id: o2.id,
          url: o2.url,
          source: o2.source
        }]
      };
    return await Xs.savePlaylist(c2), true;
  } catch (i2) {
    return a.error("library", "Collection save failed", i2), false;
  }
}
function Wo(e2, t2) {
  const {
      t: n2
    } = P(),
    r2 = Qr.useRef(false),
    [s2, i2] = Qr.useState(null),
    [o2, l2] = Qr.useState(null),
    c2 = C(n3 => "playlist" === e2 && n3.playlists.some(e3 => e3.id === t2.id)),
    u2 = C(n3 => "playlist" === e2 && n3.playlists.some(e3 => qo(e3, t2.id))),
    d2 = Mo(n3 => "album" === e2 && n3.albums.some(e3 => e3.id === t2.id && e3.source === t2.source)),
    m2 = null != o2 ? o2 : c2 || u2 || d2,
    f2 = (e3 => {
      var t3, n3, a2;
      if (["favorites", "offline"].includes(e3.id)) return Boolean((null == (t3 = e3.tracks) ? void 0 : t3.length) || e3.tracks_count);
      const r3 = C.getState().playlists.find(t4 => t4.id === e3.id);
      return r3 ? Boolean(null != (n3 = r3.tracks_count) ? n3 : r3.tracks.length) : Boolean((null == (a2 = e3.tracks) ? void 0 : a2.length) || e3.source && "local" !== e3.source && e3.id);
    })(t2),
    h2 = async s3 => {
      if (!(r2.current || "save" === s3 && m2 && c2)) {
        r2.current = true, i2(s3);
        try {
          if ("save" === s3) {
            (m2 ? await async function (e3, t3) {
              try {
                const {
                  id: n3,
                  source: a2
                } = e3;
                if ("album" === t3) return !(!a2 || !n3 || (await T.library.albums.remove(a2, n3), Mo.getState().removeAlbum(a2, n3), "undefined" != typeof window && window.dispatchEvent(new CustomEvent("albums_changed")), 0));
                const r3 = C.getState().playlists.find(e4 => e4.id !== n3 && qo(e4, n3));
                return !!r3 && (await Xs.deletePlaylist(r3.id));
              } catch (n3) {
                return a.error("library", "Collection removal failed", n3), false;
              }
            }(t2, e2) : await Ho(t2, e2)) && l2(!m2);
          } else await uo(e2, t2, s3);
        } catch (o3) {
          a.error("library", "Collection action failed:", o3), D.error(n2("library.draft.failed"));
        } finally {
          r2.current = false, i2(null);
        }
      }
    };
  return {
    busy: s2,
    canPlay: f2,
    saved: m2,
    canSave: !c2 && !["favorites", "offline"].includes(t2.id),
    actions: [{
      id: "play",
      label: n2("artist.listen"),
      disabled: !f2 || Boolean(s2),
      run: () => h2("play")
    }, {
      id: "shuffle",
      label: n2("library.actions.shuffle_play"),
      disabled: !f2 || Boolean(s2),
      run: () => h2("shuffle")
    }, {
      id: "save",
      label: n2("library.actions.add_to_library"),
      disabled: Boolean(s2),
      run: () => h2("save")
    }, {
      id: "queue",
      label: n2("track.context_menu.add_to_queue"),
      disabled: !f2 || Boolean(s2),
      run: () => h2("queue")
    }]
  };
}
function Vo(e2) {
  const t2 = Kr.c(7),
    {
      label: n2,
      onClick: a2,
      disabled: r2,
      children: s2
    } = e2;
  let i2, o2;
  return t2[0] !== a2 ? (i2 = e3 => {
    e3.stopPropagation(), a2();
  }, t2[0] = a2, t2[1] = i2) : i2 = t2[1], t2[2] !== s2 || t2[3] !== r2 || t2[4] !== n2 || t2[5] !== i2 ? (o2 = Gr.jsx(A, {
    variant: "quiet",
    size: "icon",
    "aria-label": n2,
    disabled: r2,
    className: "h-8 w-8 text-white/85 hover:bg-transparent hover:text-white",
    onClick: i2,
    children: s2
  }), t2[2] = s2, t2[3] = r2, t2[4] = n2, t2[5] = i2, t2[6] = o2) : o2 = t2[6], o2;
}
function Qo(e2) {
  const t2 = Kr.c(12),
    {
      start: n2,
      end: a2,
      pinned: r2,
      centered: s2
    } = e2,
    i2 = void 0 !== r2 && r2,
    o2 = void 0 !== s2 && s2;
  let l2;
  t2[0] === Symbol.for("react.memo_cache_sentinel") ? (l2 = Gr.jsx("div", {
    "aria-hidden": true,
    className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent opacity-0 transition-opacity duration-200 group-hover/bar:opacity-100 group-focus-within/bar:opacity-100 group-data-[on=true]/bar:opacity-100"
  }), t2[0] = l2) : l2 = t2[0];
  const c2 = o2 ? "justify-center gap-1 pb-4" : "justify-between p-2";
  let u2, d2, m2, f2;
  return t2[1] !== c2 ? (u2 = x("absolute inset-x-0 bottom-0 flex translate-y-1 items-center opacity-0 transition-[opacity,transform] duration-200 ease-out", c2, "group-hover/bar:translate-y-0 group-hover/bar:opacity-100 group-focus-within/bar:translate-y-0 group-focus-within/bar:opacity-100 group-data-[on=true]/bar:translate-y-0 group-data-[on=true]/bar:opacity-100"), t2[1] = c2, t2[2] = u2) : u2 = t2[2], t2[3] !== a2 ? (d2 = a2 && Gr.jsx("div", {
    className: "flex items-center",
    children: a2
  }), t2[3] = a2, t2[4] = d2) : d2 = t2[4], t2[5] !== n2 || t2[6] !== u2 || t2[7] !== d2 ? (m2 = Gr.jsxs("div", {
    className: u2,
    children: [n2, d2]
  }), t2[5] = n2, t2[6] = u2, t2[7] = d2, t2[8] = m2) : m2 = t2[8], t2[9] !== i2 || t2[10] !== m2 ? (f2 = Gr.jsxs("div", {
    "data-on": i2,
    className: "group/bar absolute inset-x-0 bottom-0 z-20 h-1/2",
    children: [l2, m2]
  }), t2[9] = i2, t2[10] = m2, t2[11] = f2) : f2 = t2[11], f2;
}
function Ko(e2) {
  const t2 = Kr.c(25),
    {
      model: n2,
      more: a2,
      scope: r2
    } = e2,
    s2 = void 0 === r2 ? "feed" : r2,
    i2 = n2.actions;
  let o2, l2, c2, u2, d2, m2, f2;
  if (t2[0] !== n2.actions || t2[1] !== n2.busy || t2[2] !== n2.canPlay || t2[3] !== n2.canSave || t2[4] !== n2.saved || t2[5] !== s2) {
    d2 = Symbol.for("react.early_return_sentinel");
    {
      let e3, a3;
      t2[11] !== n2.canSave || t2[12] !== s2 ? (e3 = e4 => ("library" === s2 || "shuffle" !== e4.id) && ("feed" === s2 || "save" !== e4.id || n2.canSave), t2[11] = n2.canSave, t2[12] = s2, t2[13] = e3) : e3 = t2[13], t2[14] !== n2.busy || t2[15] !== n2.saved ? (a3 = e4 => {
        const t3 = "play" === e4.id ? _.play : "shuffle" === e4.id ? _.shuffle : "queue" === e4.id ? _.addToQueue : _.saved;
        return Gr.jsx(Vo, {
          label: e4.label,
          disabled: e4.disabled,
          onClick: () => {
            e4.run();
          },
          children: n2.busy === e4.id ? Gr.jsx(I, {
            className: "size-4 animate-spin"
          }) : Gr.jsx(t3, {
            weight: "play" === e4.id || "save" === e4.id && n2.saved ? "Bold" : "Linear",
            className: "size-5"
          }, "save" === e4.id ? String(n2.saved) : e4.id)
        }, e4.id);
      }, t2[14] = n2.busy, t2[15] = n2.saved, t2[16] = a3) : a3 = t2[16];
      const r3 = i2.filter(e3).map(a3);
      n2.canPlay || "feed" !== s2 ? (o2 = Qo, c2 = Boolean(n2.busy), u2 = r3[0], l2 = r3.slice(1)) : d2 = null;
    }
    t2[0] = n2.actions, t2[1] = n2.busy, t2[2] = n2.canPlay, t2[3] = n2.canSave, t2[4] = n2.saved, t2[5] = s2, t2[6] = o2, t2[7] = l2, t2[8] = c2, t2[9] = u2, t2[10] = d2;
  } else o2 = t2[6], l2 = t2[7], c2 = t2[8], u2 = t2[9], d2 = t2[10];
  return d2 !== Symbol.for("react.early_return_sentinel") ? d2 : (t2[17] !== a2 || t2[18] !== l2 ? (m2 = Gr.jsxs(Gr.Fragment, {
    children: [l2, a2]
  }), t2[17] = a2, t2[18] = l2, t2[19] = m2) : m2 = t2[19], t2[20] !== o2 || t2[21] !== c2 || t2[22] !== u2 || t2[23] !== m2 ? (f2 = Gr.jsx(o2, {
    pinned: c2,
    start: u2,
    end: m2
  }), t2[20] = o2, t2[21] = c2, t2[22] = u2, t2[23] = m2, t2[24] = f2) : f2 = t2[24], f2);
}
const Go = Xr.memo(function (e2) {
    const t2 = Kr.c(43),
      {
        artist: n2
      } = e2,
      {
        t: r2
      } = P();
    let s2, i2;
    t2[0] !== n2.id || t2[1] !== n2.source ? (s2 = co(n2.source, n2.id), t2[0] = n2.id, t2[1] = n2.source, t2[2] = s2) : s2 = t2[2], t2[3] !== s2 ? (i2 = {
      id: s2
    }, t2[3] = s2, t2[4] = i2) : i2 = t2[4];
    const {
        isThis: o2,
        playing: l2,
        toggle: c2
      } = mo(i2),
      {
        isSubscribed: d2,
        toggleSubscription: m2
      } = F(n2.id, n2.source),
      [f2, h2] = Xr.useState(null);
    let p2;
    t2[5] !== f2 ? (p2 = (e3, t3) => {
      f2 || (h2(e3), t3().catch(t4 => a.error("media", `Artist quick ${e3} failed:`, t4)).finally(() => h2(null)));
    }, t2[5] = f2, t2[6] = p2) : p2 = t2[6];
    const g2 = p2,
      v2 = Boolean(f2),
      x2 = l2 ? "common.pause" : "artist.listen";
    let y2, b2, w2, k2;
    t2[7] !== r2 || t2[8] !== x2 ? (y2 = r2(x2), t2[7] = r2, t2[8] = x2, t2[9] = y2) : y2 = t2[9], t2[10] !== n2 || t2[11] !== o2 || t2[12] !== g2 || t2[13] !== c2 ? (b2 = () => o2 ? c2() : g2("play", () => async function (e3) {
      const {
        tracks: t3
      } = await T.media.getArtistTracks(e3.id, e3.source, 30, 0);
      t3.length && (await u.getState().playPlaylist({
        id: co(e3.source, e3.id),
        title: e3.name,
        cover_art: e3.avatar,
        source: e3.source,
        tracks: t3
      }, {
        startIndex: 0,
        recordHistory: false,
        type: "artist"
      }));
    }(n2)), t2[10] = n2, t2[11] = o2, t2[12] = g2, t2[13] = c2, t2[14] = b2) : b2 = t2[14], t2[15] !== f2 || t2[16] !== l2 ? (w2 = "play" === f2 ? Gr.jsx(I, {
      className: "size-4 animate-spin"
    }) : Gr.jsx(Co, {
      playing: l2,
      className: "size-5"
    }), t2[15] = f2, t2[16] = l2, t2[17] = w2) : w2 = t2[17], t2[18] !== y2 || t2[19] !== b2 || t2[20] !== w2 ? (k2 = Gr.jsx(Vo, {
      label: y2,
      onClick: b2,
      children: w2
    }), t2[18] = y2, t2[19] = b2, t2[20] = w2, t2[21] = k2) : k2 = t2[21];
    const j2 = d2 ? "artist.unsubscribe" : "artist.subscribe";
    let S2, N2, C2, E2, L2, A2;
    return t2[22] !== r2 || t2[23] !== j2 ? (S2 = r2(j2), t2[22] = r2, t2[23] = j2, t2[24] = S2) : S2 = t2[24], t2[25] !== n2.avatar || t2[26] !== n2.name || t2[27] !== g2 || t2[28] !== m2 ? (N2 = () => g2("subscribe", () => m2({
      name: n2.name,
      avatar: n2.avatar
    })), t2[25] = n2.avatar, t2[26] = n2.name, t2[27] = g2, t2[28] = m2, t2[29] = N2) : N2 = t2[29], t2[30] !== f2 || t2[31] !== d2 ? (C2 = "subscribe" === f2 ? Gr.jsx(I, {
      className: "size-4 animate-spin"
    }) : Gr.jsx(_.like, {
      weight: d2 ? "Bold" : "Linear",
      className: "size-5"
    }), t2[30] = f2, t2[31] = d2, t2[32] = C2) : C2 = t2[32], t2[33] !== S2 || t2[34] !== N2 || t2[35] !== C2 ? (E2 = Gr.jsx(Vo, {
      label: S2,
      onClick: N2,
      children: C2
    }), t2[33] = S2, t2[34] = N2, t2[35] = C2, t2[36] = E2) : E2 = t2[36], t2[37] !== E2 || t2[38] !== k2 ? (L2 = Gr.jsxs(Gr.Fragment, {
      children: [k2, E2]
    }), t2[37] = E2, t2[38] = k2, t2[39] = L2) : L2 = t2[39], t2[40] !== L2 || t2[41] !== v2 ? (A2 = Gr.jsx("div", {
      className: "absolute inset-0 overflow-hidden rounded-full",
      children: Gr.jsx(Qo, {
        centered: true,
        pinned: v2,
        start: L2
      })
    }), t2[40] = L2, t2[41] = v2, t2[42] = A2) : A2 = t2[42], A2;
  }),
  Xo = Xr.memo(function (e2) {
    const t2 = Kr.c(2),
      {
        kind: n2,
        item: a2
      } = e2,
      r2 = Wo(n2, a2);
    let s2;
    return t2[0] !== r2 ? (s2 = Gr.jsx(Ko, {
      model: r2
    }), t2[0] = r2, t2[1] = s2) : s2 = t2[1], s2;
  });
function Yo(e2) {
  const t2 = Qr.useRef(e2);
  Qr.useInsertionEffect(() => {
    t2.current = e2;
  });
  const n2 = Qr.useRef(new Map()),
    a2 = {
      ...e2
    };
  for (const r2 of Object.keys(e2)) {
    if ("function" != typeof e2[r2]) continue;
    let s2 = n2.current.get(r2);
    s2 || (s2 = (...e3) => {
      var n3, a3;
      return null == (a3 = (n3 = t2.current)[r2]) ? void 0 : a3.call(n3, ...e3);
    }, n2.current.set(r2, s2)), a2[r2] = s2;
  }
  return a2;
}
function Jo(e2) {
  const t2 = Kr.c(2),
    n2 = Yo(e2);
  let a2;
  return t2[0] !== n2 ? (a2 = Gr.jsx(Zo, {
    ...n2
  }), t2[0] = n2, t2[1] = a2) : a2 = t2[1], a2;
}
const Zo = Xr.memo(e2 => {
    var t2;
    const n2 = Kr.c(64),
      {
        artist: a2,
        variant: r2,
        trend: s2,
        flush: i2,
        size: o2,
        wrapName: l2,
        quick: c2,
        onClick: u2,
        className: d2
      } = e2,
      m2 = void 0 === r2 ? "large" : r2,
      f2 = void 0 !== i2 && i2,
      h2 = void 0 === o2 ? 160 : o2,
      p2 = void 0 !== l2 && l2,
      g2 = void 0 === c2 || c2,
      {
        t: v2
      } = P(),
      y2 = O(a2.avatar) ? "" : a2.avatar || "",
      b2 = a2.source;
    if ("row" === m2) {
      const e3 = null != (t2 = a2.followers) ? t2 : a2.followers_count;
      let r3;
      n2[0] !== e3 || n2[1] !== v2 ? (r3 = e3 ? `${$(Number(e3))} ${v2("search.results.followers")}` : void 0, n2[0] = e3, n2[1] = v2, n2[2] = r3) : r3 = n2[2];
      const i3 = r3;
      let o3;
      n2[3] !== s2 ? (o3 = s2 ? Gr.jsx(io, {
        trend: s2
      }) : void 0, n2[3] = s2, n2[4] = o3) : o3 = n2[4];
      const l3 = 44 === h2 ? "w-11 h-11" : "w-9 h-9";
      let c3;
      n2[5] !== l3 ? (c3 = x("rounded-full overflow-hidden shrink-0 bg-muted/40", l3), n2[5] = l3, n2[6] = c3) : c3 = n2[6];
      const m3 = 44 === h2 ? 44 : 36;
      let p3, g3, b3, w3, k3, j3;
      return n2[7] === Symbol.for("react.memo_cache_sentinel") ? (p3 = Gr.jsx("div", {
        className: "w-full h-full flex items-center justify-center bg-muted/50",
        children: Gr.jsx(B.Artist, {
          className: "w-5 h-5 text-muted-foreground/40"
        })
      }), n2[7] = p3) : p3 = n2[7], n2[8] !== a2.name || n2[9] !== y2 || n2[10] !== m3 ? (g3 = Gr.jsx(N, {
        src: y2,
        title: a2.name,
        size: m3,
        className: "h-full w-full rounded-full object-cover",
        showSourceBadge: false,
        disableHoverEffect: true,
        plain: true,
        disablePlayerTracking: true,
        fallback: p3
      }), n2[8] = a2.name, n2[9] = y2, n2[10] = m3, n2[11] = g3) : g3 = n2[11], n2[12] !== g3 || n2[13] !== c3 ? (b3 = Gr.jsx("div", {
        className: c3,
        children: g3
      }), n2[12] = g3, n2[13] = c3, n2[14] = b3) : b3 = n2[14], n2[15] !== a2.name ? (w3 = Gr.jsx(Yi, {
        className: "text-sm font-medium",
        children: a2.name
      }), n2[15] = a2.name, n2[16] = w3) : w3 = n2[16], n2[17] !== i3 ? (k3 = i3 ? Gr.jsx(Ki, {
        text: i3,
        link: false
      }) : null, n2[17] = i3, n2[18] = k3) : k3 = n2[18], n2[19] !== d2 || n2[20] !== f2 || n2[21] !== u2 || n2[22] !== b3 || n2[23] !== w3 || n2[24] !== k3 || n2[25] !== o3 ? (j3 = Gr.jsx(ao, {
        flush: f2,
        onClick: u2,
        className: d2,
        marker: o3,
        leading: b3,
        title: w3,
        subtitle: k3
      }), n2[19] = d2, n2[20] = f2, n2[21] = u2, n2[22] = b3, n2[23] = w3, n2[24] = k3, n2[25] = o3, n2[26] = j3) : j3 = n2[26], j3;
    }
    let w2, k2, j2, S2, _2, C2, T2, E2, L2, A2, I2;
    return n2[27] !== d2 ? (w2 = x("flex-shrink-0 min-w-0 cursor-pointer group group/entity space-y-1.5 flex flex-col items-center w-40 transition-transform duration-150 active:scale-95", d2), n2[27] = d2, n2[28] = w2) : w2 = n2[28], n2[29] !== h2 ? (k2 = 160 !== h2 ? {
      width: h2
    } : void 0, n2[29] = h2, n2[30] = k2) : k2 = n2[30], n2[31] !== h2 ? (j2 = 160 !== h2 ? {
      width: h2,
      height: h2
    } : void 0, n2[31] = h2, n2[32] = j2) : j2 = n2[32], n2[33] === Symbol.for("react.memo_cache_sentinel") ? (S2 = Gr.jsx("div", {
      className: "w-full h-full flex items-center justify-center bg-hover",
      children: Gr.jsx(B.Artist, {
        className: "w-2/5 h-2/5 text-foreground/25"
      })
    }), n2[33] = S2) : S2 = n2[33], n2[34] !== a2.name || n2[35] !== y2 || n2[36] !== h2 || n2[37] !== b2 ? (_2 = Gr.jsx("div", {
      className: "rounded-full overflow-hidden bg-muted transition-shadow duration-300 w-full h-full",
      children: Gr.jsx(N, {
        src: y2,
        title: a2.name,
        size: h2,
        className: "rounded-full w-full h-full object-cover",
        source: b2,
        type: "artist",
        showSourceBadge: false,
        showLoading: true,
        fallback: S2
      })
    }), n2[34] = a2.name, n2[35] = y2, n2[36] = h2, n2[37] = b2, n2[38] = _2) : _2 = n2[38], n2[39] !== a2.id || n2[40] !== a2.name || n2[41] !== y2 || n2[42] !== g2 || n2[43] !== b2 ? (C2 = g2 && b2 && a2.id && Gr.jsx(Go, {
      artist: {
        id: String(a2.id),
        name: a2.name,
        source: b2,
        avatar: y2
      }
    }), n2[39] = a2.id, n2[40] = a2.name, n2[41] = y2, n2[42] = g2, n2[43] = b2, n2[44] = C2) : C2 = n2[44], n2[45] !== _2 || n2[46] !== C2 || n2[47] !== j2 ? (T2 = Gr.jsxs("div", {
      className: "group/cover relative w-full aspect-square",
      style: j2,
      children: [_2, C2]
    }), n2[45] = _2, n2[46] = C2, n2[47] = j2, n2[48] = T2) : T2 = n2[48], n2[49] !== a2.name || n2[50] !== p2 ? (E2 = p2 ? Gr.jsx("p", {
      className: "line-clamp-2 break-words text-sm font-semibold leading-tight text-foreground/90 group-hover/entity:text-foreground",
      children: a2.name
    }) : Gr.jsx(Yi, {
      hoverScope: Xi,
      centerWhenIdle: true,
      className: "text-sm font-semibold",
      children: a2.name
    }), n2[49] = a2.name, n2[50] = p2, n2[51] = E2) : E2 = n2[51], n2[52] !== a2.followers || n2[53] !== v2 ? (L2 = void 0 !== a2.followers && null !== a2.followers && $(a2.followers) && Gr.jsx(Ki, {
      text: `${$(a2.followers)} ${v2("search.results.followers")}`,
      link: false,
      centerWhenIdle: true
    }), n2[52] = a2.followers, n2[53] = v2, n2[54] = L2) : L2 = n2[54], n2[55] !== E2 || n2[56] !== L2 ? (A2 = Gr.jsxs("div", {
      className: "space-y-1 px-1 text-center w-full min-w-0",
      children: [E2, L2]
    }), n2[55] = E2, n2[56] = L2, n2[57] = A2) : A2 = n2[57], n2[58] !== u2 || n2[59] !== T2 || n2[60] !== A2 || n2[61] !== w2 || n2[62] !== k2 ? (I2 = Gr.jsxs("div", {
      className: w2,
      style: k2,
      onClick: u2,
      children: [T2, A2]
    }), n2[58] = u2, n2[59] = T2, n2[60] = A2, n2[61] = w2, n2[62] = k2, n2[63] = I2) : I2 = n2[63], I2;
  }, (e2, t2) => e2.artist.id === t2.artist.id && e2.artist.name === t2.artist.name && e2.artist.avatar === t2.artist.avatar && e2.variant === t2.variant && e2.wrapName === t2.wrapName && e2.quick === t2.quick && e2.onClick === t2.onClick && e2.trend === t2.trend && e2.className === t2.className),
  el = Zr(e2 => ({
    shown: false,
    set: t2 => e2({
      shown: t2
    })
  })),
  tl = Xr.memo(function ({
    source: e2,
    onDone: t2
  }) {
    var n2;
    const {
        t: r2
      } = P(),
      [s2, i2] = Qr.useState([]),
      [o2, l2] = Qr.useState([]),
      c2 = Qr.useRef(new Set());
    Qr.useEffect(() => {
      let t3 = true;
      return T.media.getStartArtists(e2).then(e3 => t3 && i2(e3)).catch(e3 => a.error("library", "start artists failed:", e3)), () => {
        t3 = false;
      };
    }, [e2]);
    const u2 = Qr.useCallback(async t3 => {
      if (c2.current.has(t3.id)) return;
      c2.current.add(t3.id);
      const n3 = !o2.includes(t3.id);
      l2(e3 => n3 ? [...e3, t3.id] : e3.filter(e4 => e4 !== t3.id));
      try {
        if (!n3) return void (await U.unsubscribeFromArtist(t3.source, t3.id));
        await U.subscribeToArtist({
          artistId: t3.id,
          name: t3.name,
          source: t3.source,
          avatar: t3.avatar
        });
        const a2 = await T.media.getStartArtists(e2, t3.id);
        i2(e3 => {
          const n4 = new Set(e3.map(e4 => e4.id)),
            r3 = a2.filter(e4 => !n4.has(e4.id)),
            s3 = e3.findIndex(e4 => e4.id === t3.id);
          return s3 < 0 ? [...e3, ...r3] : [...e3.slice(0, s3 + 1), ...r3, ...e3.slice(s3 + 1)];
        });
      } catch (r3) {
        a.error("library", "start pick failed:", r3);
      } finally {
        c2.current.delete(t3.id);
      }
    }, [o2, e2]);
    if (0 === s2.length) return null;
    const d2 = o2.length > 0,
      m2 = o2[o2.length - 1],
      f2 = null != (n2 = s2.find(e3 => e3.id === m2)) ? n2 : s2[0];
    return Gr.jsxs("div", {
      className: "relative min-h-full",
      children: [Gr.jsx(Bi, {
        image: null == f2 ? void 0 : f2.avatar,
        variant: "bloom",
        maskBottom: true,
        scrim: false,
        intensity: 0.55,
        className: "absolute inset-x-0 top-0 h-[420px]"
      }), Gr.jsxs("div", {
        className: "relative flex flex-col gap-8 px-page pb-page-y pt-16",
        children: [Gr.jsxs("div", {
          className: x("flex items-end gap-6", d2 ? "justify-between" : "justify-center"),
          children: [Gr.jsxs(Jr.div, {
            layout: true,
            transition: {
              type: "spring",
              stiffness: 380,
              damping: 34
            },
            className: x("flex min-w-0 flex-col gap-2", d2 ? "items-start text-left" : "items-center text-center"),
            children: [Gr.jsx(Jr.h1, {
              layout: "position",
              className: "text-[44px] font-bold leading-none tracking-tight",
              children: r2("home.sections.start.title")
            }), Gr.jsx(Jr.p, {
              layout: "position",
              className: "text-callout text-muted-foreground",
              children: r2("home.sections.start.subtitle")
            })]
          }), Gr.jsx(Yr, {
            children: d2 && Gr.jsx(Jr.div, {
              initial: {
                opacity: 0,
                x: 16
              },
              animate: {
                opacity: 1,
                x: 0
              },
              exit: {
                opacity: 0,
                x: 16
              },
              transition: {
                duration: 0.2,
                ease: "easeOut"
              },
              className: "shrink-0",
              children: Gr.jsx(A, {
                variant: "primary",
                size: "cta",
                disabled: o2.length < 3,
                onClick: t2,
                children: r2("home.sections.start.done")
              })
            })
          })]
        }), Gr.jsx("div", {
          className: "grid w-full grid-cols-[repeat(auto-fill,minmax(148px,1fr))] justify-items-center gap-x-4 gap-y-6",
          children: Gr.jsx(Yr, {
            initial: false,
            children: s2.map(e3 => {
              const t3 = o2.includes(e3.id);
              return Gr.jsxs(Jr.div, {
                layout: "position",
                initial: {
                  opacity: 0,
                  scale: 0.9
                },
                animate: {
                  opacity: 1,
                  scale: 1
                },
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                },
                className: "relative",
                "aria-pressed": t3,
                children: [Gr.jsx(Jo, {
                  artist: e3,
                  size: 132,
                  quick: false,
                  onClick: () => {
                    u2(e3);
                  }
                }), t3 && Gr.jsx("div", {
                  className: "pointer-events-none absolute left-0 top-0 flex items-center justify-center rounded-full bg-black/55",
                  style: {
                    width: 132,
                    height: 132
                  },
                  children: Gr.jsx(_.check, {
                    className: "size-10 text-white"
                  })
                })]
              }, e3.id);
            })
          })
        })]
      })]
    });
  });
function Ac(e2) {
  return !!e2 && Array.isArray(e2.keys) && e2.keys.length > 0;
}
function Oc(e2) {
  const t2 = Kr.c(33),
    {
      value: n2,
      onChange: a2,
      completion: r2,
      onComplete: s2,
      onKeyDown: i2,
      onFocus: o2,
      onBlur: l2,
      inputRef: c2,
      placeholder: u2,
      label: d2,
      className: m2
    } = e2,
    f2 = void 0 === r2 ? "" : r2,
    [h2, p2] = Xr.useState(false);
  let g2;
  t2[0] !== f2 || t2[1] !== h2 || t2[2] !== n2 ? (g2 = h2 ? "" : function (e3, t3) {
    if (!t3 || !e3.trim()) return "";
    if (!t3.toLowerCase().startsWith(e3.toLowerCase()) || t3.length <= e3.length) return "";
    const n3 = t3.slice(e3.length);
    return e3 === e3.toLowerCase() ? n3.toLowerCase() : e3 === e3.toUpperCase() ? n3.toUpperCase() : n3;
  }(n2, f2), t2[0] = f2, t2[1] = h2, t2[2] = n2, t2[3] = g2) : g2 = t2[3];
  const v2 = g2;
  let y2, b2, w2, k2, j2, S2, N2, _2;
  return t2[4] !== m2 || t2[5] !== v2 || t2[6] !== n2 ? (y2 = v2 && Gr.jsxs("div", {
    "aria-hidden": "true",
    className: x("pointer-events-none absolute inset-x-0 select-none overflow-hidden whitespace-pre", m2),
    children: [Gr.jsx("span", {
      className: "invisible",
      children: n2
    }), Gr.jsx("span", {
      className: "text-muted-foreground/40",
      children: v2
    })]
  }), t2[4] = m2, t2[5] = v2, t2[6] = n2, t2[7] = y2) : y2 = t2[7], t2[8] !== a2 ? (b2 = e3 => {
    p2(false), a2(e3.target.value);
  }, t2[8] = a2, t2[9] = b2) : b2 = t2[9], t2[10] === Symbol.for("react.memo_cache_sentinel") ? (w2 = e3 => {
    const {
      selectionStart: t3,
      selectionEnd: n3
    } = e3.currentTarget;
    p2(null !== t3 && t3 !== n3);
  }, t2[10] = w2) : w2 = t2[10], t2[11] !== l2 ? (k2 = e3 => {
    p2(false), null == l2 || l2(e3);
  }, t2[11] = l2, t2[12] = k2) : k2 = t2[12], t2[13] !== s2 || t2[14] !== i2 || t2[15] !== v2 || t2[16] !== n2 ? (j2 = e3 => {
    var t3;
    const a3 = (null != (t3 = e3.currentTarget.selectionStart) ? t3 : 0) >= n2.length;
    if (v2 && s2 && ("Tab" === e3.key || "ArrowRight" === e3.key && a3)) return e3.preventDefault(), void s2(n2 + v2);
    null == i2 || i2(e3);
  }, t2[13] = s2, t2[14] = i2, t2[15] = v2, t2[16] = n2, t2[17] = j2) : j2 = t2[17], t2[18] !== m2 ? (S2 = x("relative z-10 m-0 w-full min-w-0 border-0 bg-transparent p-0 text-foreground outline-none placeholder:text-muted-foreground/50 focus:outline-none focus:ring-0", m2), t2[18] = m2, t2[19] = S2) : S2 = t2[19], t2[20] !== c2 || t2[21] !== d2 || t2[22] !== o2 || t2[23] !== u2 || t2[24] !== b2 || t2[25] !== k2 || t2[26] !== j2 || t2[27] !== S2 || t2[28] !== n2 ? (N2 = Gr.jsx("input", {
    ref: c2,
    type: "text",
    value: n2,
    "aria-label": d2,
    placeholder: u2,
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: false,
    onChange: b2,
    onSelect: w2,
    onFocus: o2,
    onBlur: k2,
    onKeyDown: j2,
    className: S2
  }), t2[20] = c2, t2[21] = d2, t2[22] = o2, t2[23] = u2, t2[24] = b2, t2[25] = k2, t2[26] = j2, t2[27] = S2, t2[28] = n2, t2[29] = N2) : N2 = t2[29], t2[30] !== y2 || t2[31] !== N2 ? (_2 = Gr.jsxs("div", {
    className: "relative flex min-w-0 flex-1 items-center",
    children: [y2, N2]
  }), t2[30] = y2, t2[31] = N2, t2[32] = _2) : _2 = t2[32], _2;
}
function Uc(e2) {
  var t2, n2;
  const a2 = Kr.c(19),
    {
      musicSource: r2,
      availableSources: s2,
      onSelect: i2,
      compact: o2
    } = e2,
    l2 = void 0 !== o2 && o2,
    {
      t: c2
    } = P(),
    u2 = s2.indexOf(r2),
    d2 = s2[(u2 + 1) % s2.length],
    m2 = null != (n2 = null == (t2 = ke[r2]) ? void 0 : t2.displayName) ? n2 : r2,
    f2 = l2 ? "icon-sm" : "icon";
  let h2;
  a2[0] !== m2 || a2[1] !== c2 ? (h2 = c2("search.view.controls.source", {
    name: m2
  }), a2[0] = m2, a2[1] = c2, a2[2] = h2) : h2 = a2[2];
  const p2 = !d2 || d2 === r2;
  let g2;
  a2[3] !== d2 || a2[4] !== i2 ? (g2 = () => d2 && i2(d2), a2[3] = d2, a2[4] = i2, a2[5] = g2) : g2 = a2[5];
  const v2 = l2 ? "shrink-0 disabled:opacity-100" : "h-9 w-9 shrink-0 disabled:opacity-100",
    x2 = String(r2),
    y2 = l2 ? 16 : 20;
  let b2, w2, k2;
  return a2[6] !== r2 || a2[7] !== y2 ? (b2 = Gr.jsx(je, {
    source: r2,
    size: y2
  }), a2[6] = r2, a2[7] = y2, a2[8] = b2) : b2 = a2[8], a2[9] !== x2 || a2[10] !== b2 ? (w2 = Gr.jsx(Se, {
    id: x2,
    inline: true,
    className: "flex items-center justify-center",
    children: b2
  }), a2[9] = x2, a2[10] = b2, a2[11] = w2) : w2 = a2[11], a2[12] !== w2 || a2[13] !== f2 || a2[14] !== h2 || a2[15] !== p2 || a2[16] !== g2 || a2[17] !== v2 ? (k2 = Gr.jsx(A, {
    variant: "quiet",
    size: f2,
    "aria-label": h2,
    disabled: p2,
    onClick: g2,
    className: v2,
    children: w2
  }), a2[12] = w2, a2[13] = f2, a2[14] = h2, a2[15] = p2, a2[16] = g2, a2[17] = v2, a2[18] = k2) : k2 = a2[18], k2;
}
const qc = Zr(e2 => ({
  searchQuery: "",
  debouncedSearchQuery: "",
  searchType: "all",
  musicSource: Ne,
  searchLimit: 20,
  isSearchFocused: false,
  songs: [],
  topResult: null,
  playlists_results: [],
  albums_results: [],
  artists_results: [],
  loading: false,
  playlistsLoading: false,
  albumsLoading: false,
  artistsLoading: false,
  loadingMore: false,
  offset: 0,
  hasMore: true,
  searchCompleted: false,
  setSearchQuery: t2 => e2({
    searchQuery: t2
  }),
  setDebouncedSearchQuery: t2 => e2({
    debouncedSearchQuery: t2
  }),
  setSearchType: t2 => e2({
    searchType: t2
  }),
  setMusicSource: t2 => e2({
    musicSource: t2
  }),
  setSearchLimit: t2 => e2({
    searchLimit: t2
  }),
  setIsSearchFocused: t2 => e2({
    isSearchFocused: t2
  }),
  setTopResult: t2 => e2({
    topResult: t2
  }),
  setSongs: t2 => e2(e3 => ({
    songs: "function" == typeof t2 ? t2(e3.songs) : t2
  })),
  setPlaylistsResults: t2 => e2(e3 => ({
    playlists_results: "function" == typeof t2 ? t2(e3.playlists_results) : t2
  })),
  setAlbumsResults: t2 => e2(e3 => ({
    albums_results: "function" == typeof t2 ? t2(e3.albums_results) : t2
  })),
  setArtistsResults: t2 => e2(e3 => ({
    artists_results: "function" == typeof t2 ? t2(e3.artists_results) : t2
  })),
  setLoading: t2 => e2({
    loading: t2
  }),
  setPlaylistsLoading: t2 => e2({
    playlistsLoading: t2
  }),
  setAlbumsLoading: t2 => e2({
    albumsLoading: t2
  }),
  setArtistsLoading: t2 => e2({
    artistsLoading: t2
  }),
  setLoadingMore: t2 => e2({
    loadingMore: t2
  }),
  setOffset: t2 => e2({
    offset: t2
  }),
  setHasMore: t2 => e2({
    hasMore: t2
  }),
  setSearchCompleted: t2 => e2({
    searchCompleted: t2
  })
}));
function Hc(e2, t2) {
  if (!e2) return e2;
  let n2 = false;
  const a2 = e2.map(e3 => {
    const a3 = t2.has(String(e3.id));
    return e3.liked === a3 ? e3 : (n2 = true, {
      ...e3,
      liked: a3
    });
  });
  return n2 ? a2 : e2;
}
function Wc(e2) {
  const t2 = Kr.c(3),
    n2 = E(Vc);
  let a2;
  return t2[0] !== n2 || t2[1] !== e2 ? (a2 = Hc(e2, n2), t2[0] = n2, t2[1] = e2, t2[2] = a2) : a2 = t2[2], a2;
}
function Vc(e2) {
  return e2.favorites;
}
const Qc = ["all", "tracks", "artists", "albums", "playlists"],
  Kc = "dotify_search_state",
  Gc = "dotify_search_user_source";
function Xc(e2) {
  const t2 = Kr.c(119),
    {
      setActiveTab: n2
    } = e2,
    {
      playFromList: r2,
      startTrackWave: s2
    } = u(es(Zc)),
    {
      t: i2
    } = P(),
    {
      searchQuery: o2,
      setSearchQuery: l2,
      debouncedSearchQuery: c2,
      setDebouncedSearchQuery: d2,
      debouncedSetSearchQuery: m2,
      searchType: f2,
      setSearchType: h2,
      filterCategory: p2,
      setFilterCategory: g2,
      musicSource: v2,
      setMusicSource: x2,
      searchLimit: b2,
      isSearchFocused: k2,
      setIsSearchFocused: j2,
      loadSearchState: S2,
      saveSearchState: N2
    } = function () {
      const {
          isMobile: e3
        } = Ae(),
        {
          selectedSource: t3,
          effectiveSource: n3
        } = Pe(es(e4 => ({
          selectedSource: e4.selectedSource,
          effectiveSource: e4.effectiveSource
        }))),
        r3 = "auto" === t3 ? n3 : t3,
        {
          searchQuery: s3,
          setSearchQuery: i3,
          debouncedSearchQuery: o3,
          setDebouncedSearchQuery: l3,
          searchType: c3,
          setSearchType: u2,
          musicSource: d3,
          setMusicSource: m3,
          searchLimit: f3,
          setSearchLimit: h3,
          isSearchFocused: p3,
          setIsSearchFocused: g3
        } = qc(es(e4 => ({
          searchQuery: e4.searchQuery,
          setSearchQuery: e4.setSearchQuery,
          debouncedSearchQuery: e4.debouncedSearchQuery,
          setDebouncedSearchQuery: e4.setDebouncedSearchQuery,
          searchType: e4.searchType,
          setSearchType: e4.setSearchType,
          musicSource: e4.musicSource,
          setMusicSource: e4.setMusicSource,
          searchLimit: e4.searchLimit,
          setSearchLimit: e4.setSearchLimit,
          isSearchFocused: e4.isSearchFocused,
          setIsSearchFocused: e4.setIsSearchFocused
        }))),
        v3 = Qr.useRef(false);
      Qr.useEffect(() => {
        const e4 = Ie.load(Gc);
        if (e4) return v3.current = true, void (d3 !== e4 && m3(e4));
        !v3.current && r3 && d3 !== r3 && m3(r3);
      }, [r3, d3, m3]), Qr.useEffect(() => {
        h3(e3 ? 50 : 20);
      }, [e3, h3]);
      const x3 = Qr.useCallback(e4 => {
          v3.current = true, Ie.save(Gc, e4), m3(e4);
        }, [m3]),
        y2 = Qr.useCallback(() => {
          try {
            const {
              searchQuery: e4,
              debouncedSearchQuery: t4,
              searchType: n4,
              musicSource: a2,
              searchLimit: r4
            } = qc.getState();
            Ie.save(Kc, {
              searchQuery: e4,
              debouncedSearchQuery: t4,
              searchType: n4,
              musicSource: a2,
              searchLimit: r4
            });
          } catch (e4) {
            a.error("search", "Error saving search state", e4);
          }
        }, []),
        b3 = Qr.useCallback(() => {
          try {
            const e4 = Ie.load(Kc);
            if (e4) return e4.searchLimit && h3(e4.searchLimit), e4.musicSource && (v3.current = true, m3(e4.musicSource)), e4.searchQuery && !qc.getState().searchQuery && (i3(e4.searchQuery), l3(e4.debouncedSearchQuery || e4.searchQuery)), Ie.clear(Kc), true;
          } catch (e4) {
            a.error("search", "Error loading search state", e4);
          }
          return false;
        }, [u2, h3, m3, i3, l3]),
        w2 = Qr.useCallback(e4 => {
          u2(e4);
        }, [u2]),
        k3 = Qr.useCallback(e4 => {
          u2(e4);
        }, [u2]),
        j3 = Qr.useCallback(e4 => {
          const t4 = "function" == typeof e4 ? e4(qc.getState().searchQuery) : e4;
          i3(t4);
        }, [i3]),
        S3 = Me(e4 => {
          l3(e4.trim());
        }, 800);
      return {
        searchQuery: s3,
        setSearchQuery: j3,
        debouncedSearchQuery: o3,
        setDebouncedSearchQuery: l3,
        debouncedSetSearchQuery: S3,
        searchType: c3,
        setSearchType: w2,
        filterCategory: c3,
        setFilterCategory: k3,
        musicSource: d3,
        setMusicSource: x3,
        searchLimit: f3,
        setSearchLimit: h3,
        isSearchFocused: p3,
        setIsSearchFocused: g3,
        loadSearchState: b3,
        saveSearchState: y2
      };
    }(),
    {
      searchHistory: _2,
      loadSearchHistory: C2,
      addSongToHistory: L2,
      addQueryToHistory: A2,
      setSearchHistory: I2,
      addToSearchHistory: M2,
      deleteHistoryItem: R2,
      clearSearchHistory: z2
    } = function () {
      const [e3, t3] = Qr.useState([]),
        n3 = Qr.useCallback(async () => {
          try {
            const e4 = await Te.searchHistory.orderBy("timestamp").reverse().limit(20).toArray();
            t3(e4);
          } catch (e4) {
            a.error("library", "Failed to load search history", e4);
          }
        }, []),
        r3 = Qr.useCallback(async e4 => {
          try {
            if (await Te.searchHistory.where({
              value: e4.value,
              type_: e4.type_
            }).delete(), await Te.searchHistory.add(e4), (await Te.searchHistory.count()) > 20) {
              const e5 = await Te.searchHistory.orderBy("timestamp").first();
              (null == e5 ? void 0 : e5.id) && (await Te.searchHistory.delete(e5.id));
            }
            await n3();
          } catch (t4) {
            a.error("library", "Error adding to search history", t4);
          }
        }, [n3]),
        s3 = Qr.useCallback(e4 => {
          e4.trim() && r3({
            type_: "query",
            value: e4,
            timestamp: Date.now()
          });
        }, [r3]),
        i3 = Qr.useCallback(e4 => {
          r3({
            type_: "song",
            value: e4.title,
            timestamp: Date.now(),
            song: e4
          });
        }, [r3]),
        o3 = Qr.useCallback(async () => {
          await Te.searchHistory.clear(), t3([]);
        }, []),
        l3 = Qr.useCallback(async (e4, t4, r4) => {
          try {
            if (a.debug("library", "Deleting search history item", {
              id: e4,
              value: t4,
              type_: r4
            }), t4 && r4) {
              const e5 = await Te.searchHistory.where({
                value: t4,
                type_: r4
              }).delete();
              a.debug("library", "Deleted history items by value/type", {
                deletedCount: e5,
                value: t4,
                type_: r4
              });
            } else await Te.searchHistory.delete(e4), a.debug("library", "Deleted history item by id", {
              id: e4
            });
            await n3();
          } catch (s4) {
            a.error("library", "Error deleting from search history", s4);
          }
        }, [n3]);
      return Qr.useMemo(() => ({
        searchHistory: e3,
        setSearchHistory: t3,
        loadSearchHistory: n3,
        addToSearchHistory: r3,
        addQueryToHistory: s3,
        addSongToHistory: i3,
        clearSearchHistory: o3,
        deleteHistoryItem: l3
      }), [e3, t3, n3, r3, s3, i3, o3, l3]);
    }();
  let D2;
  t2[0] !== A2 || t2[1] !== c2 || t2[2] !== v2 || t2[3] !== b2 || t2[4] !== f2 ? (D2 = {
    debouncedSearchQuery: c2,
    musicSource: v2,
    searchType: f2,
    searchLimit: b2,
    addQueryToHistory: A2
  }, t2[0] = A2, t2[1] = c2, t2[2] = v2, t2[3] = b2, t2[4] = f2, t2[5] = D2) : D2 = t2[5];
  const {
      songs: F2,
      playlists_results: O2,
      albums_results: $2,
      artists_results: B2,
      loading: U2,
      playlistsLoading: q2,
      albumsLoading: H2,
      artistsLoading: W2,
      loadingMore: V2,
      hasMore: Q2,
      searchCompleted: K2,
      networkError: G2,
      handleSearch: X2,
      handleLoadMore: Y2,
      clearAllResults: J2
    } = function (e3) {
      const {
          debouncedSearchQuery: t3,
          musicSource: n3,
          searchType: r3,
          searchLimit: s3,
          addQueryToHistory: i3
        } = e3,
        [o3, l3] = Qr.useState(false),
        c3 = Qr.useRef(0);
      Qr.useEffect(() => {
        const e4 = c3;
        return () => {
          e4.current++;
        };
      }, []);
      const {
          songs: u2,
          setSongs: d3,
          playlists_results: m3,
          setPlaylistsResults: f3,
          albums_results: h3,
          setAlbumsResults: p3,
          artists_results: g3,
          setArtistsResults: v3,
          setTopResult: x3,
          loading: y2,
          setLoading: b3,
          playlistsLoading: w2,
          setPlaylistsLoading: k3,
          albumsLoading: j3,
          setAlbumsLoading: S3,
          artistsLoading: N3,
          setArtistsLoading: _3,
          loadingMore: C3,
          setLoadingMore: L3,
          offset: A3,
          setOffset: P2,
          hasMore: I3,
          setHasMore: M3,
          searchCompleted: R3,
          setSearchCompleted: z3
        } = qc(es(e4 => ({
          songs: e4.songs,
          setSongs: e4.setSongs,
          playlists_results: e4.playlists_results,
          setPlaylistsResults: e4.setPlaylistsResults,
          albums_results: e4.albums_results,
          setAlbumsResults: e4.setAlbumsResults,
          artists_results: e4.artists_results,
          setArtistsResults: e4.setArtistsResults,
          setTopResult: e4.setTopResult,
          loading: e4.loading,
          setLoading: e4.setLoading,
          playlistsLoading: e4.playlistsLoading,
          setPlaylistsLoading: e4.setPlaylistsLoading,
          albumsLoading: e4.albumsLoading,
          setAlbumsLoading: e4.setAlbumsLoading,
          artistsLoading: e4.artistsLoading,
          setArtistsLoading: e4.setArtistsLoading,
          loadingMore: e4.loadingMore,
          setLoadingMore: e4.setLoadingMore,
          offset: e4.offset,
          setOffset: e4.setOffset,
          hasMore: e4.hasMore,
          setHasMore: e4.setHasMore,
          searchCompleted: e4.searchCompleted,
          setSearchCompleted: e4.setSearchCompleted
        }))),
        D3 = Qr.useCallback(() => {
          try {
            const e4 = E.getState().favorites;
            d3(t4 => {
              var n4;
              return null != (n4 = Hc(t4, e4)) ? n4 : t4;
            });
          } catch (e4) {
            a.error("library", "Failed to load search favorites", e4);
          }
        }, [d3]),
        F3 = Qr.useCallback(async (e4, t4, n4, a2 = 0) => (await T.media.searchTracks(e4, t4, n4, a2)).map(e5 => ({
          ...e5,
          source: t4
        })), []),
        O3 = Qr.useCallback(() => {
          d3([]), f3([]), p3([]), v3([]), x3(null);
        }, [d3, f3, p3, v3, x3]),
        $3 = Qr.useRef(""),
        B3 = Qr.useCallback(() => {
          b3(false), k3(false), S3(false), _3(false);
        }, [b3, k3, S3, _3]),
        U3 = Qr.useCallback(async () => {
          const e4 = ++c3.current;
          if (B3(), L3(false), !t3.trim()) return $3.current = "", O3(), void z3(false);
          i3(t3);
          const o4 = t3.trim(),
            u3 = $3.current === o4;
          if ($3.current = o4, u3 || O3(), z3(false), l3(false), P2(0), M3(true), "tracks" === r3) {
            b3(true);
            try {
              const a2 = await F3(t3, n3, s3, 0);
              if (e4 !== c3.current) return;
              d3(a2), M3(a2.length >= s3), await D3();
            } catch (m4) {
              if (e4 !== c3.current) return;
              a.error("search", "Error searching tracks", m4), O3(), _e(m4) && l3(true);
            } finally {
              e4 === c3.current && (B3(), z3(true));
            }
          } else if ("lyrics" === r3) {
            b3(true);
            try {
              const a2 = await T.media.searchByLyrics(t3, n3, s3, 0);
              if (e4 !== c3.current) return;
              const r4 = a2.map(e5 => ({
                ...e5,
                source: n3
              }));
              d3(r4), M3(r4.length >= s3), await D3();
            } catch (h4) {
              if (e4 !== c3.current) return;
              a.error("search", "Error searching by lyrics", h4), O3(), _e(h4) && l3(true);
            } finally {
              e4 === c3.current && (B3(), z3(true));
            }
          } else if ("playlists" === r3) {
            k3(true);
            try {
              const a2 = await T.media.searchPlaylists(t3, n3, s3, 0);
              if (e4 !== c3.current) return;
              const r4 = a2.map(e5 => ({
                ...e5,
                source: n3
              }));
              f3(r4.sort((e5, t4) => (e5.title || "").localeCompare(t4.title || ""))), M3(r4.length >= s3);
            } catch (g4) {
              if (e4 !== c3.current) return;
              a.error("search", "Error searching playlists", g4), O3(), _e(g4) && l3(true);
            } finally {
              e4 === c3.current && (B3(), z3(true));
            }
          } else if ("albums" === r3) {
            S3(true);
            try {
              const a2 = await T.media.searchAlbums(t3, n3, s3, 0);
              if (e4 !== c3.current) return;
              const r4 = a2.map(e5 => ({
                ...e5,
                source: n3
              }));
              p3(r4.sort((e5, t4) => (e5.title || "").localeCompare(t4.title || ""))), M3(r4.length >= s3);
            } catch (y3) {
              if (e4 !== c3.current) return;
              a.error("search", "Error searching albums", y3), O3(), _e(y3) && l3(true);
            } finally {
              e4 === c3.current && (B3(), z3(true));
            }
          } else if ("artists" === r3) {
            _3(true);
            try {
              const a2 = await T.media.searchArtists(t3, n3, s3, 0);
              if (e4 !== c3.current) return;
              const r4 = a2.map(e5 => ({
                  ...e5,
                  source: n3
                })),
                i4 = r4.sort((e5, t4) => (t4.followers || 0) - (e5.followers || 0));
              v3(i4), M3(r4.length >= s3);
            } catch (w3) {
              if (e4 !== c3.current) return;
              a.error("search", "Error searching artists", w3), O3(), _e(w3) && l3(true);
            } finally {
              e4 === c3.current && (B3(), z3(true));
            }
          } else if ("all" === r3) {
            b3(true), k3(true), S3(true), _3(true);
            try {
              const a2 = await T.media.searchAll(t3, n3, 6);
              if (e4 !== c3.current) return;
              d3(a2.tracks.map(e5 => ({
                ...e5,
                source: n3
              }))), v3(a2.artists.map(e5 => ({
                ...e5,
                source: n3
              }))), p3(a2.albums.map(e5 => ({
                ...e5,
                source: n3
              }))), f3(a2.playlists.map(e5 => ({
                ...e5,
                source: n3
              }))), x3(a2.top ? {
                ...a2.top,
                item: {
                  ...a2.top.item,
                  source: n3
                }
              } : null), await D3();
            } catch (j4) {
              if (e4 !== c3.current) return;
              a.error("search", "Error searching all", j4), O3(), _e(j4) && l3(true);
            } finally {
              e4 === c3.current && (B3(), z3(true));
            }
          }
        }, [t3, n3, r3, s3, F3, O3, D3, i3, d3, f3, p3, v3, x3, z3, P2, M3, L3, b3, k3, S3, _3, B3]),
        q3 = Qr.useCallback(async () => {
          if (!t3.trim() || C3 || !I3) return;
          const e4 = c3.current;
          L3(true);
          const i4 = A3 + s3;
          P2(i4);
          const o4 = (t4, a2) => {
            if (e4 === c3.current) if (t4.length > 0) {
              let e5 = false;
              const r4 = t4.map(e6 => ({
                ...e6,
                source: n3
              }));
              a2(t5 => {
                const n4 = new Set(t5.map(e6 => e6.id)),
                  a3 = r4.filter(e6 => !n4.has(e6.id));
                return a3.length > 0 ? (e5 = true, [...t5, ...a3]) : t5;
              }), M3(t4.length >= s3 && e5);
            } else M3(false);
          };
          try {
            if ("tracks" === r3 || "lyrics" === r3) {
              const a2 = "lyrics" === r3 ? (await T.media.searchByLyrics(t3, n3, s3, i4)).map(e5 => ({
                ...e5,
                source: n3
              })) : await F3(t3, n3, s3, i4);
              if (e4 !== c3.current) return;
              if (a2.length > 0) {
                let e5 = false;
                d3(t4 => {
                  const n4 = new Set(t4.map(e6 => e6.id)),
                    r4 = a2.filter(e6 => !n4.has(e6.id));
                  return r4.length > 0 ? (e5 = true, [...t4, ...r4]) : t4;
                }), a2.length >= s3 && !e5 ? M3(false) : M3(a2.length >= s3), await D3();
              } else M3(false);
            } else "playlists" === r3 ? o4(await T.media.searchPlaylists(t3, n3, s3, i4), f3) : "albums" === r3 ? o4(await T.media.searchAlbums(t3, n3, s3, i4), p3) : "artists" === r3 && o4(await T.media.searchArtists(t3, n3, s3, i4), v3);
          } catch (l4) {
            if (e4 !== c3.current) return;
            a.error("library", "Error loading more results", l4), M3(false);
          } finally {
            e4 === c3.current && L3(false);
          }
        }, [t3, r3, A3, s3, n3, F3, D3, C3, I3, d3, f3, p3, v3, P2, M3, L3]),
        H3 = Qr.useCallback(() => {
          c3.current++, d3([]), f3([]), p3([]), v3([]), x3(null), l3(false), L3(false), z3(false), B3(), P2(0), M3(true);
        }, [d3, f3, p3, v3, x3, L3, z3, B3, P2, M3]);
      return Qr.useMemo(() => ({
        songs: u2,
        playlists_results: m3,
        albums_results: h3,
        artists_results: g3,
        loading: y2,
        playlistsLoading: w2,
        albumsLoading: j3,
        artistsLoading: N3,
        loadingMore: C3,
        hasMore: I3,
        searchCompleted: R3,
        networkError: o3,
        setSongs: d3,
        setPlaylistsResults: f3,
        setAlbumsResults: p3,
        setArtistsResults: v3,
        setSearchCompleted: z3,
        setLoading: b3,
        setPlaylistsLoading: k3,
        setAlbumsLoading: S3,
        setArtistsLoading: _3,
        handleSearch: U3,
        handleLoadMore: q3,
        loadFavorites: D3,
        clearAllResults: H3
      }), [u2, m3, h3, g3, y2, w2, j3, N3, C3, I3, R3, o3, d3, f3, p3, v3, z3, b3, k3, S3, _3, U3, q3, D3, H3]);
    }(D2),
    Z2 = F2.length > 0 || O2.length > 0 || $2.length > 0 || B2.length > 0;
  let ee2;
  t2[6] !== o2 ? (ee2 = o2.trim(), t2[6] = o2, t2[7] = ee2) : ee2 = t2[7];
  const te2 = "" !== ee2;
  let ne2;
  t2[8] !== c2 || t2[9] !== r2 || t2[10] !== o2 || t2[11] !== F2 || t2[12] !== i2 ? (ne2 = e3 => {
    var t3;
    const n3 = c2.trim() || o2.trim(),
      a2 = F2.length > 0 ? F2 : [e3],
      s3 = e3.cover_art || (null == (t3 = a2[0]) ? void 0 : t3.cover_art) || null;
    r2(e3, a2, i2("common.tabs.search"), s3, "search", n3 || null);
  }, t2[8] = c2, t2[9] = r2, t2[10] = o2, t2[11] = F2, t2[12] = i2, t2[13] = ne2) : ne2 = t2[13];
  const ae2 = ne2;
  let re2;
  t2[14] !== n2 || t2[15] !== s2 || t2[16] !== i2 ? (re2 = e3 => {
    s2(e3, i2("home.wave.my_wave"), n2);
  }, t2[14] = n2, t2[15] = s2, t2[16] = i2, t2[17] = re2) : re2 = t2[17];
  const se2 = re2;
  let ie2;
  t2[18] !== M2 || t2[19] !== N2 || t2[20] !== I2 ? (ie2 = {
    setSearchHistory: I2,
    addToSearchHistory: M2,
    saveSearchState: N2
  }, t2[18] = M2, t2[19] = N2, t2[20] = I2, t2[21] = ie2) : ie2 = t2[21];
  const {
    handleSelectItem: oe2,
    handleSelectArtist: le2
  } = function (e3) {
    const {
      addToSearchHistory: t3,
      saveSearchState: n3
    } = e3;
    return {
      handleSelectItem: Qr.useCallback(async (e4, a2) => {
        var r3;
        null == n3 || n3();
        const s3 = {
          ...e4,
          tracks: null != (r3 = e4.tracks) ? r3 : []
        };
        w.getState().openPlaylistView(s3, a2);
        const i3 = a2 ? e4.artist : Ee(e4),
          o3 = a2 ? void 0 : e4.originals,
          l3 = {
            type_: a2 ? "album" : "playlist",
            value: e4.title,
            timestamp: Date.now(),
            [a2 ? "album" : "playlist"]: {
              id: e4.id,
              title: e4.title,
              cover_art: e4.cover_art,
              ...(a2 ? {
                artist: e4.artist
              } : i3 ? {
                author: i3
              } : {}),
              source: e4.source,
              ...(o3 ? {
                originals: o3
              } : {})
            }
          };
        await t3(l3);
        const c3 = {
          id: e4.id,
          title: e4.title,
          cover_art: e4.cover_art,
          source: e4.source,
          author: i3,
          tracks: [],
          originals: o3
        };
        Le.getState().addPlaylistToHistory(c3);
      }, [t3, n3]),
      handleSelectArtist: Qr.useCallback(async e4 => {
        null == n3 || n3(), a.debug("library", "Selected artist from search", {
          name: e4.name
        }), y.getState().openArtist(e4.id, e4.source, w.getState().activeTab);
        const r3 = {
          type_: "artist",
          value: e4.name,
          timestamp: Date.now(),
          artist: {
            id: e4.id,
            name: e4.name,
            avatar: e4.avatar,
            source: e4.source
          }
        };
        await t3(r3);
      }, [t3, n3])
    };
  }(ie2);
  let ce2, ue2, de2, me2, fe2, he2, pe2, ge2;
  t2[22] !== C2 || t2[23] !== S2 ? (ce2 = () => {
    S2(), C2();
  }, ue2 = [S2, C2], t2[22] = C2, t2[23] = S2, t2[24] = ce2, t2[25] = ue2) : (ce2 = t2[24], ue2 = t2[25]), Qr.useEffect(ce2, ue2), t2[26] !== m2 || t2[27] !== o2 ? (de2 = () => {
    m2(o2);
  }, me2 = [o2, m2], t2[26] = m2, t2[27] = o2, t2[28] = de2, t2[29] = me2) : (de2 = t2[28], me2 = t2[29]), Qr.useEffect(de2, me2), t2[30] !== X2 ? (fe2 = () => {
    X2();
  }, t2[30] = X2, t2[31] = fe2) : fe2 = t2[31], t2[32] !== c2 || t2[33] !== X2 || t2[34] !== v2 || t2[35] !== f2 ? (he2 = [c2, v2, f2, X2], t2[32] = c2, t2[33] = X2, t2[34] = v2, t2[35] = f2, t2[36] = he2) : he2 = t2[36], Qr.useEffect(fe2, he2), t2[37] !== le2 || t2[38] !== oe2 ? (pe2 = () => {
    const e3 = e4 => {
        const t4 = e4.detail;
        if (null == t4 ? void 0 : t4.sentBySearchNav) return;
        const n3 = null == t4 ? void 0 : t4.playlist;
        n3 && oe2(n3, !!t4.isAlbum);
      },
      t3 = e4 => {
        const t4 = e4.detail;
        if (null == t4 ? void 0 : t4.sentBySearchNav) return;
        const n3 = null == t4 ? void 0 : t4.artist;
        n3 && le2(n3);
      };
    return window.addEventListener("dotify:open-playlist-view", e3), window.addEventListener("dotify:open-artist-view", t3), () => {
      window.removeEventListener("dotify:open-playlist-view", e3), window.removeEventListener("dotify:open-artist-view", t3);
    };
  }, ge2 = [oe2, le2], t2[37] = le2, t2[38] = oe2, t2[39] = pe2, t2[40] = ge2) : (pe2 = t2[39], ge2 = t2[40]), Qr.useEffect(pe2, ge2);
  const ve2 = Qr.useRef(null),
    xe2 = Pe(Jc),
    ye2 = function (e3, t3, n3, a2) {
      const [r3, s3] = Qr.useState(""),
        i3 = Qr.useMemo(() => function (e4, t4) {
          const n4 = e4.trim().toLowerCase();
          if (n4.length < 2) return "";
          for (const a3 of t4) if ("query" === a3.type_ && a3.value && a3.value.toLowerCase().startsWith(n4) && a3.value.length > n4.length) return a3.value;
          return "";
        }(e3, a2), [e3, a2]);
      return Qr.useEffect(() => {
        const a3 = e3.trim();
        if (a3.length < 2 || i3) return void s3("");
        let r4 = true;
        const o3 = setTimeout(async () => {
          try {
            const e4 = await Ce.getSuggestions(a3, t3, n3);
            if (!r4) return;
            const i4 = e4.completion && e4.completion.toLowerCase().startsWith(a3.toLowerCase()) && e4.completion.length > a3.length;
            s3(i4 ? e4.completion : "");
          } catch {
            r4 && s3("");
          }
        }, 120);
        return () => {
          r4 = false, clearTimeout(o3);
        };
      }, [e3, t3, n3, i3]), i3 || r3;
    }(o2, v2, f2, _2),
    be2 = qc(Yc);
  let we2;
  t2[41] !== d2 || t2[42] !== l2 ? (we2 = e3 => {
    l2(e3), d2(e3);
  }, t2[41] = d2, t2[42] = l2, t2[43] = we2) : we2 = t2[43];
  const ke2 = we2;
  let je2;
  t2[44] !== c2 || t2[45] !== X2 || t2[46] !== o2 || t2[47] !== d2 ? (je2 = e3 => {
    if ("Enter" === e3.key && !e3.repeat && !e3.nativeEvent.isComposing) {
      e3.preventDefault();
      const t3 = o2.trim();
      t3 && t3 === c2 ? X2() : d2(t3);
    }
  }, t2[44] = c2, t2[45] = X2, t2[46] = o2, t2[47] = d2, t2[48] = je2) : je2 = t2[48];
  const Se2 = je2;
  let Ne2;
  t2[49] !== L2 || t2[50] !== ae2 ? (Ne2 = e3 => {
    L2(e3), ae2(e3);
  }, t2[49] = L2, t2[50] = ae2, t2[51] = Ne2) : Ne2 = t2[51];
  const Re2 = Ne2;
  let ze2;
  t2[52] !== j2 ? (ze2 = () => j2(true), t2[52] = j2, t2[53] = ze2) : ze2 = t2[53];
  const De2 = ze2;
  let Fe2;
  t2[54] !== j2 ? (Fe2 = e3 => {
    const t3 = e3.relatedTarget;
    t3 && (t3.closest(".search-container") || t3.closest('[data-state="open"]') || t3.closest(".search-input")) || j2(false);
  }, t2[54] = j2, t2[55] = Fe2) : Fe2 = t2[55];
  const Oe2 = Fe2;
  let $e2, Be2, Ue2;
  t2[56] !== k2 || t2[57] !== o2 ? ($e2 = () => {
    if (!o2.trim() && !k2) return;
    const e3 = setTimeout(() => {
      const e4 = ve2.current;
      e4 && document.activeElement !== e4 && (e4.focus(), e4.setSelectionRange(e4.value.length, e4.value.length));
    }, 50);
    return () => clearTimeout(e3);
  }, Be2 = [o2, k2], t2[56] = k2, t2[57] = o2, t2[58] = $e2, t2[59] = Be2) : ($e2 = t2[58], Be2 = t2[59]), Qr.useEffect($e2, Be2), t2[60] !== le2 || t2[61] !== oe2 || t2[62] !== Re2 || t2[63] !== l2 ? (Ue2 = e3 => {
    var t3, n3;
    "query" === e3.type_ ? l2(e3.value) : "song" === e3.type_ && e3.song ? Re2({
      ...e3.song,
      source: e3.song.source,
      id: e3.song.id,
      title: e3.song.title,
      artist: e3.song.artist,
      liked: false,
      duration: e3.song.duration || 0,
      cover_art: e3.song.cover_art || ""
    }) : "artist" === e3.type_ && (null == (t3 = e3.artist) ? void 0 : t3.source) ? le2({
      ...e3.artist,
      source: e3.artist.source
    }) : "playlist" === e3.type_ && e3.playlist ? oe2({
      ...e3.playlist,
      tracks: []
    }, false) : "album" === e3.type_ && e3.album && oe2({
      ...e3.album,
      artist: null != (n3 = e3.album.artist) ? n3 : "",
      tracks: []
    }, true);
  }, t2[60] = le2, t2[61] = oe2, t2[62] = Re2, t2[63] = l2, t2[64] = Ue2) : Ue2 = t2[64];
  const qe2 = Ue2,
    He2 = Qr.useRef(null);
  let We2;
  t2[65] !== Y2 || t2[66] !== Q2 || t2[67] !== V2 ? (We2 = e3 => {
    if (He2.current && He2.current.disconnect(), e3 && Q2 && !V2) {
      const t3 = new IntersectionObserver(e4 => e4[0].isIntersecting && Y2(), {
        rootMargin: "400px"
      });
      t3.observe(e3), He2.current = t3;
    }
  }, t2[65] = Y2, t2[66] = Q2, t2[67] = V2, t2[68] = We2) : We2 = t2[68];
  const Ve2 = We2;
  let Qe2;
  t2[69] !== H2 || t2[70] !== $2 || t2[71] !== W2 || t2[72] !== B2 || t2[73] !== xe2 || t2[74] !== c2 || t2[75] !== p2 || t2[76] !== ye2 || t2[77] !== Q2 || t2[78] !== Z2 || t2[79] !== k2 || t2[80] !== te2 || t2[81] !== U2 || t2[82] !== V2 || t2[83] !== v2 || t2[84] !== G2 || t2[85] !== q2 || t2[86] !== O2 || t2[87] !== K2 || t2[88] !== _2 || t2[89] !== o2 || t2[90] !== f2 || t2[91] !== F2 || t2[92] !== be2 ? (Qe2 = {
    musicSource: v2,
    availableSources: xe2,
    searchType: f2,
    filterCategory: p2,
    topMatch: be2,
    loading: U2,
    playlistsLoading: q2,
    albumsLoading: H2,
    artistsLoading: W2,
    isSearchFocused: k2,
    hasResults: Z2,
    searchQuery: o2,
    debouncedSearchQuery: c2,
    ghostCompletion: ye2,
    searchHistory: _2,
    songs: F2,
    playlists_results: O2,
    albums_results: $2,
    artists_results: B2,
    searchCompleted: K2,
    networkError: G2,
    hasMore: Q2,
    loadingMore: V2,
    isSearching: te2
  }, t2[69] = H2, t2[70] = $2, t2[71] = W2, t2[72] = B2, t2[73] = xe2, t2[74] = c2, t2[75] = p2, t2[76] = ye2, t2[77] = Q2, t2[78] = Z2, t2[79] = k2, t2[80] = te2, t2[81] = U2, t2[82] = V2, t2[83] = v2, t2[84] = G2, t2[85] = q2, t2[86] = O2, t2[87] = K2, t2[88] = _2, t2[89] = o2, t2[90] = f2, t2[91] = F2, t2[92] = be2, t2[93] = Qe2) : Qe2 = t2[93];
  const Ke2 = Qe2;
  let Ge2;
  t2[94] !== ke2 || t2[95] !== J2 || t2[96] !== z2 || t2[97] !== R2 || t2[98] !== qe2 || t2[99] !== Y2 || t2[100] !== X2 || t2[101] !== Oe2 || t2[102] !== De2 || t2[103] !== Se2 || t2[104] !== le2 || t2[105] !== oe2 || t2[106] !== Re2 || t2[107] !== se2 || t2[108] !== N2 || t2[109] !== d2 || t2[110] !== g2 || t2[111] !== Ve2 || t2[112] !== x2 || t2[113] !== l2 || t2[114] !== h2 ? (Ge2 = {
    setSearchQuery: l2,
    setDebouncedSearchQuery: d2,
    applyGhostCompletion: ke2,
    clearAllResults: J2,
    setMusicSource: x2,
    setSearchType: h2,
    setFilterCategory: g2,
    handleSearchInputFocus: De2,
    handleSearchInputBlur: Oe2,
    handleSearchInputKeyDown: Se2,
    deleteHistoryItem: R2,
    clearSearchHistory: z2,
    handleHistoryItemClick: qe2,
    handleLoadMore: Y2,
    handleRetry: X2,
    setLoadMoreSentinel: Ve2,
    onSongSelect: Re2,
    onLoadSimilarTracks: se2,
    handleSelectItem: oe2,
    handleSelectArtist: le2,
    saveSearchState: N2
  }, t2[94] = ke2, t2[95] = J2, t2[96] = z2, t2[97] = R2, t2[98] = qe2, t2[99] = Y2, t2[100] = X2, t2[101] = Oe2, t2[102] = De2, t2[103] = Se2, t2[104] = le2, t2[105] = oe2, t2[106] = Re2, t2[107] = se2, t2[108] = N2, t2[109] = d2, t2[110] = g2, t2[111] = Ve2, t2[112] = x2, t2[113] = l2, t2[114] = h2, t2[115] = Ge2) : Ge2 = t2[115];
  const Xe2 = Ge2;
  let Ye2;
  return t2[116] !== Xe2 || t2[117] !== Ke2 ? (Ye2 = {
    searchDataValue: Ke2,
    searchActionsValue: Xe2,
    searchInputRef: ve2
  }, t2[116] = Xe2, t2[117] = Ke2, t2[118] = Ye2) : Ye2 = t2[118], Ye2;
}
function Yc(e2) {
  return e2.topResult;
}
function Jc(e2) {
  return e2.availableSources;
}
function Zc(e2) {
  return {
    playFromList: e2.playFromList,
    startTrackWave: e2.startTrackWave
  };
}
const eu = Qr.createContext(null);
function tu(e2) {
  const t2 = Kr.c(5),
    {
      children: n2
    } = e2,
    a2 = w(nu);
  let r2;
  t2[0] !== a2 ? (r2 = {
    setActiveTab: a2
  }, t2[0] = a2, t2[1] = r2) : r2 = t2[1];
  const s2 = Xc(r2);
  let i2;
  return t2[2] !== n2 || t2[3] !== s2 ? (i2 = Gr.jsx(eu.Provider, {
    value: s2,
    children: n2
  }), t2[2] = n2, t2[3] = s2, t2[4] = i2) : i2 = t2[4], i2;
}
function nu(e2) {
  return e2.setActiveTab;
}
let su = null;
function iu(e2) {
  const t2 = ze();
  t2.startsWith("/search") || (su = t2), e2("search");
}
const ou = "data-search-toggle",
  lu = Xr.memo(function () {
    const e2 = Kr.c(21),
      t2 = ru(hu),
      n2 = ru(pu),
      a2 = ru(gu),
      r2 = w(vu),
      s2 = w(xu),
      {
        searchDataValue: i2
      } = au(),
      o2 = "search" === r2;
    let l2;
    e2[0] !== i2.debouncedSearchQuery ? (l2 = i2.debouncedSearchQuery.trim(), e2[0] = i2.debouncedSearchQuery, e2[1] = l2) : l2 = e2[1];
    const c2 = Boolean(l2);
    let u2, d2, m2, f2, h2, p2;
    return e2[2] !== r2 || e2[3] !== c2 || e2[4] !== a2 ? (u2 = () => {
      "search" !== r2 && c2 && a2();
    }, d2 = [r2, c2, a2], e2[2] = r2, e2[3] = c2, e2[4] = a2, e2[5] = u2, e2[6] = d2) : (u2 = e2[5], d2 = e2[6]), Qr.useEffect(u2, d2), e2[7] !== c2 || e2[8] !== i2.searchQuery || e2[9] !== o2 || e2[10] !== s2 ? (m2 = () => {
      !o2 || c2 || i2.searchQuery.trim() || function (e3) {
        const t3 = su;
        su = null, t3 && !t3.startsWith("/search") ? Re(t3) : e3("home");
      }(s2);
    }, f2 = [o2, c2, i2.searchQuery, s2], e2[7] = c2, e2[8] = i2.searchQuery, e2[9] = o2, e2[10] = s2, e2[11] = m2, e2[12] = f2) : (m2 = e2[11], f2 = e2[12]), Qr.useEffect(m2, f2), e2[13] !== c2 || e2[14] !== a2 || e2[15] !== n2 || e2[16] !== o2 || e2[17] !== t2 ? (h2 = (t2 || o2 && c2) && Gr.jsx(Jr.div, {
      initial: {
        height: 0,
        opacity: 0
      },
      animate: {
        height: "auto",
        opacity: 1
      },
      exit: {
        height: 0,
        opacity: 0
      },
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1]
      },
      className: "relative z-50 flex-shrink-0",
      children: Gr.jsx("div", {
        className: "pb-2",
        children: Gr.jsx(cu, {
          onClose: a2,
          focusRequest: n2
        })
      })
    }, "search-panel"), e2[13] = c2, e2[14] = a2, e2[15] = n2, e2[16] = o2, e2[17] = t2, e2[18] = h2) : h2 = e2[18], e2[19] !== h2 ? (p2 = Gr.jsx(Yr, {
      initial: false,
      children: h2
    }), e2[19] = h2, e2[20] = p2) : p2 = e2[20], p2;
  });
function cu(e2) {
  const t2 = Kr.c(94),
    {
      onClose: n2,
      focusRequest: a2
    } = e2,
    {
      t: r2
    } = P(),
    {
      searchDataValue: s2,
      searchActionsValue: i2,
      searchInputRef: o2
    } = au(),
    l2 = w(fu),
    c2 = w(mu),
    u2 = Qr.useRef(null),
    d2 = "search" === l2,
    m2 = s2.loading || s2.playlistsLoading || s2.albumsLoading || s2.artistsLoading,
    f2 = s2.searchQuery;
  let h2;
  t2[0] !== s2.searchHistory ? (h2 = s2.searchHistory.filter(du).map(uu), t2[0] = s2.searchHistory, t2[1] = h2) : h2 = t2[1];
  const p2 = h2,
    g2 = Qr.useRef(-1);
  let v2;
  t2[2] !== i2 || t2[3] !== s2.searchQuery || t2[4] !== o2 ? (v2 = () => {
    s2.searchQuery.trim() || i2.setSearchType("all");
    const e3 = o2.current;
    e3 && (e3.focus(), e3.setSelectionRange(e3.value.length, e3.value.length));
  }, t2[2] = i2, t2[3] = s2.searchQuery, t2[4] = o2, t2[5] = v2) : v2 = t2[5];
  const x2 = Qr.useEffectEvent(v2);
  let y2, b2, k2, j2, S2;
  t2[6] !== x2 ? (y2 = () => {
    x2();
  }, t2[6] = x2, t2[7] = y2) : y2 = t2[7], t2[8] !== a2 ? (b2 = [a2], t2[8] = a2, t2[9] = b2) : b2 = t2[9], Qr.useEffect(y2, b2), t2[10] !== n2 || t2[11] !== d2 ? (k2 = () => {
    if (d2) return;
    const e3 = e4 => {
      var t3;
      const a3 = e4.target;
      a3 && !(null == (t3 = u2.current) ? void 0 : t3.contains(a3)) && (a3.closest(`[${ou}], [data-radix-popper-content-wrapper], [role="menu"], [role="dialog"]`) || n2());
    };
    return document.addEventListener("mousedown", e3), () => document.removeEventListener("mousedown", e3);
  }, j2 = [d2, n2], t2[10] = n2, t2[11] = d2, t2[12] = k2, t2[13] = j2) : (k2 = t2[12], j2 = t2[13]), Qr.useEffect(k2, j2), t2[14] !== s2.debouncedSearchQuery ? (S2 = s2.debouncedSearchQuery.trim(), t2[14] = s2.debouncedSearchQuery, t2[15] = S2) : S2 = t2[15];
  const N2 = S2,
    C2 = Qr.useRef(N2);
  let T2, E2, L2;
  t2[16] !== d2 || t2[17] !== N2 || t2[18] !== c2 ? (T2 = () => {
    N2 !== C2.current && (C2.current = N2, N2 && !d2 && iu(c2));
  }, E2 = [N2, d2, c2], t2[16] = d2, t2[17] = N2, t2[18] = c2, t2[19] = T2, t2[20] = E2) : (T2 = t2[19], E2 = t2[20]), Qr.useEffect(T2, E2), t2[21] !== i2 ? (L2 = e3 => i2.setDebouncedSearchQuery(e3), t2[21] = i2, t2[22] = L2) : L2 = t2[22];
  const I2 = L2;
  let M2;
  t2[23] !== i2 || t2[24] !== I2 ? (M2 = e3 => {
    g2.current = -1, i2.setSearchQuery(e3), e3.trim() || I2("");
  }, t2[23] = i2, t2[24] = I2, t2[25] = M2) : M2 = t2[25];
  const R2 = M2;
  let z2;
  t2[26] !== i2 || t2[27] !== R2 || t2[28] !== n2 || t2[29] !== f2 || t2[30] !== o2 ? (z2 = () => {
    var e3;
    f2 ? (R2(""), i2.clearAllResults(), null == (e3 = o2.current) || e3.focus()) : n2();
  }, t2[26] = i2, t2[27] = R2, t2[28] = n2, t2[29] = f2, t2[30] = o2, t2[31] = z2) : z2 = t2[31];
  const D2 = z2;
  let F2;
  t2[32] !== i2 || t2[33] !== p2 || t2[34] !== f2 ? (F2 = e3 => !!p2.length && ("Tab" !== e3.key || e3.shiftKey || f2.trim() ? "ArrowUp" === e3.key && (!f2.trim() || g2.current >= 0) ? (g2.current = Math.min(g2.current + 1, p2.length - 1), i2.setSearchQuery(p2[g2.current]), true) : "ArrowDown" === e3.key && g2.current >= 0 && (g2.current = g2.current - 1, i2.setSearchQuery(g2.current >= 0 ? p2[g2.current] : ""), true) : (i2.setSearchQuery(p2[0]), g2.current = 0, true)), t2[32] = i2, t2[33] = p2, t2[34] = f2, t2[35] = F2) : F2 = t2[35];
  const O2 = F2;
  let $2, B2, U2, q2;
  t2[36] !== r2 ? ($2 = r2("common.tabs.search"), t2[36] = r2, t2[37] = $2) : $2 = t2[37], t2[38] !== i2 || t2[39] !== s2.debouncedSearchQuery || t2[40] !== f2 || t2[41] !== I2 || t2[42] !== o2 || t2[43] !== c2 ? (B2 = () => {
    var e3;
    const t3 = f2.trim();
    t3 ? (iu(c2), t3 === s2.debouncedSearchQuery ? i2.handleRetry() : I2(t3)) : null == (e3 = o2.current) || e3.focus();
  }, t2[38] = i2, t2[39] = s2.debouncedSearchQuery, t2[40] = f2, t2[41] = I2, t2[42] = o2, t2[43] = c2, t2[44] = B2) : B2 = t2[44], t2[45] !== m2 ? (U2 = m2 ? Gr.jsx(we, {
    className: "h-6 w-6"
  }) : Gr.jsx(_.search, {
    className: "h-6 w-6"
  }), t2[45] = m2, t2[46] = U2) : U2 = t2[46], t2[47] !== m2 || t2[48] !== $2 || t2[49] !== B2 || t2[50] !== U2 ? (q2 = Gr.jsx(A, {
    variant: "quiet",
    size: "icon",
    shape: "circle",
    className: "h-10 w-10 shrink-0 text-muted-foreground",
    "aria-label": $2,
    "aria-busy": m2,
    onClick: B2,
    children: U2
  }), t2[47] = m2, t2[48] = $2, t2[49] = B2, t2[50] = U2, t2[51] = q2) : q2 = t2[51];
  const H2 = s2.ghostCompletion,
    W2 = i2.applyGhostCompletion,
    V2 = i2.handleSearchInputFocus,
    Q2 = i2.handleSearchInputBlur;
  let K2, G2, X2, Y2, J2, Z2, ee2, te2, ne2;
  return t2[52] !== i2 || t2[53] !== D2 || t2[54] !== f2 || t2[55] !== c2 || t2[56] !== O2 ? (K2 = e3 => {
    if ("Escape" === e3.key) return e3.preventDefault(), void D2();
    O2(e3) ? e3.preventDefault() : ("Enter" === e3.key && !e3.nativeEvent.isComposing && f2.trim() && iu(c2), i2.handleSearchInputKeyDown(e3));
  }, t2[52] = i2, t2[53] = D2, t2[54] = f2, t2[55] = c2, t2[56] = O2, t2[57] = K2) : K2 = t2[57], t2[58] !== r2 ? (G2 = r2("search.view.controls.search_placeholder"), t2[58] = r2, t2[59] = G2) : G2 = t2[59], t2[60] !== r2 ? (X2 = r2("search.view.controls.search_placeholder"), t2[60] = r2, t2[61] = X2) : X2 = t2[61], t2[62] !== i2.applyGhostCompletion || t2[63] !== i2.handleSearchInputBlur || t2[64] !== i2.handleSearchInputFocus || t2[65] !== R2 || t2[66] !== s2.ghostCompletion || t2[67] !== f2 || t2[68] !== o2 || t2[69] !== K2 || t2[70] !== G2 || t2[71] !== X2 ? (Y2 = Gr.jsx(Oc, {
    inputRef: o2,
    value: f2,
    onChange: R2,
    completion: H2,
    onComplete: W2,
    onFocus: V2,
    onBlur: Q2,
    onKeyDown: K2,
    label: G2,
    placeholder: X2,
    className: "text-title3 font-medium"
  }), t2[62] = i2.applyGhostCompletion, t2[63] = i2.handleSearchInputBlur, t2[64] = i2.handleSearchInputFocus, t2[65] = R2, t2[66] = s2.ghostCompletion, t2[67] = f2, t2[68] = o2, t2[69] = K2, t2[70] = G2, t2[71] = X2, t2[72] = Y2) : Y2 = t2[72], t2[73] !== D2 || t2[74] !== f2 || t2[75] !== r2 ? (J2 = f2 && Gr.jsx(A, {
    variant: "quiet",
    size: "icon",
    shape: "circle",
    "aria-label": r2("search.view.settings.clear"),
    onClick: D2,
    className: "h-9 w-9 shrink-0 text-muted-foreground",
    children: Gr.jsx(_.close, {
      className: "h-[18px] w-[18px]"
    })
  }), t2[73] = D2, t2[74] = f2, t2[75] = r2, t2[76] = J2) : J2 = t2[76], t2[77] !== i2 || t2[78] !== f2 || t2[79] !== I2 ? (Z2 = e3 => {
    i2.setMusicSource(e3), I2(f2.trim());
  }, t2[77] = i2, t2[78] = f2, t2[79] = I2, t2[80] = Z2) : Z2 = t2[80], t2[81] !== s2.availableSources || t2[82] !== s2.musicSource || t2[83] !== Z2 ? (ee2 = Gr.jsx(Uc, {
    musicSource: s2.musicSource,
    availableSources: s2.availableSources,
    onSelect: Z2
  }), t2[81] = s2.availableSources, t2[82] = s2.musicSource, t2[83] = Z2, t2[84] = ee2) : ee2 = t2[84], t2[85] !== i2 || t2[86] !== I2 ? (te2 = Gr.jsx(Bc, {
    onRecognized: e3 => {
      i2.setSearchQuery(e3), I2(e3);
    }
  }), t2[85] = i2, t2[86] = I2, t2[87] = te2) : te2 = t2[87], t2[88] !== q2 || t2[89] !== Y2 || t2[90] !== J2 || t2[91] !== ee2 || t2[92] !== te2 ? (ne2 = Gr.jsx("div", {
    ref: u2,
    children: Gr.jsxs("div", {
      "data-no-notch": true,
      className: "tabs-frame search-bar flex h-16 items-center gap-1 pl-3 pr-2",
      children: [q2, Y2, J2, ee2, te2]
    })
  }), t2[88] = q2, t2[89] = Y2, t2[90] = J2, t2[91] = ee2, t2[92] = te2, t2[93] = ne2) : ne2 = t2[93], ne2;
}
function uu(e2) {
  return e2.value;
}
function du(e2) {
  return "query" === e2.type_ && e2.value;
}
function mu(e2) {
  return e2.setActiveTab;
}
function fu(e2) {
  return e2.activeTab;
}
function hu(e2) {
  return e2.open;
}
function pu(e2) {
  return e2.focusRequest;
}
function gu(e2) {
  return e2.close;
}
function vu(e2) {
  return e2.activeTab;
}
function xu(e2) {
  return e2.setActiveTab;
}
const Xu = {
    sm: {
      container: "h-9 rounded-xl",
      item: "h-full px-4 text-xs gap-1.5 font-medium",
      iconOnly: "h-full w-9 px-0",
      icon: "w-4 h-4 shrink-0"
    },
    md: {
      container: "h-10 rounded-xl",
      item: "h-full px-5 text-callout gap-2 font-medium",
      iconOnly: "h-full w-10 px-0",
      icon: "w-4 h-4 shrink-0"
    },
    lg: {
      container: "h-11 rounded-xl",
      item: "h-full px-6 text-sm gap-2.5 font-medium",
      iconOnly: "h-full w-11 px-0",
      icon: "w-4.5 h-4.5 shrink-0"
    }
  },
  Yu = {
    sm: {
      container: "p-0.5 h-8.5 text-footnote",
      item: "px-3 text-footnote",
      pad: 2
    },
    md: {
      container: "p-1 h-10 text-callout",
      item: "px-3.5 text-callout",
      pad: 4
    },
    lg: {
      container: "p-1 h-11 text-body",
      item: "px-4.5 text-body",
      pad: 4
    }
  };
function Ju(e2) {
  const t2 = Kr.c(39),
    {
      options: n2,
      className: a2,
      itemClassName: r2,
      size: s2,
      fullWidth: i2,
      disabled: o2
    } = e2,
    l2 = void 0 === s2 ? "sm" : s2,
    c2 = void 0 !== i2 && i2,
    u2 = void 0 !== o2 && o2,
    d2 = Qr.useRef(null);
  let m2, f2;
  if (t2[0] === Symbol.for("react.memo_cache_sentinel") ? (m2 = {
    wheelDelta: 0.9
  }, t2[0] = m2) : m2 = t2[0], t2[1] !== n2.length ? (f2 = [n2.length], t2[1] = n2.length, t2[2] = f2) : f2 = t2[2], Ue(d2, m2, f2), !e2.multiple && "pill" === e2.variant) {
    let n3;
    return t2[3] !== e2 ? (n3 = Gr.jsx(Zu, {
      ...e2
    }), t2[3] = e2, t2[4] = n3) : n3 = t2[4], n3;
  }
  const h2 = Xu[l2];
  let p2;
  t2[5] !== e2.multiple || t2[6] !== e2.value ? (p2 = t3 => e2.multiple ? e2.value.includes(t3) : e2.value === t3, t2[5] = e2.multiple, t2[6] = e2.value, t2[7] = p2) : p2 = t2[7];
  const g2 = p2;
  let v2;
  t2[8] !== e2 ? (v2 = t3 => {
    e2.multiple ? e2.onChange(e2.value.includes(t3) ? e2.value.filter(e3 => e3 !== t3) : [...e2.value, t3]) : e2.onChange(t3);
  }, t2[8] = e2, t2[9] = v2) : v2 = t2[9];
  const y2 = v2,
    b2 = c2 ? "w-full flex" : "w-auto",
    w2 = u2 && "opacity-50 pointer-events-none";
  let k2, j2, S2;
  if (t2[10] !== a2 || t2[11] !== h2.container || t2[12] !== b2 || t2[13] !== w2 ? (k2 = x("inline-flex items-stretch overflow-x-auto scrollbar-none select-none bg-background/99 border border-border/30 shrink-0 p-0 box-border max-w-full", h2.container, b2, w2, a2), t2[10] = a2, t2[11] = h2.container, t2[12] = b2, t2[13] = w2, t2[14] = k2) : k2 = t2[14], t2[15] !== h2.icon || t2[16] !== h2.iconOnly || t2[17] !== h2.item || t2[18] !== u2 || t2[19] !== c2 || t2[20] !== g2 || t2[21] !== r2 || t2[22] !== n2 || t2[23] !== y2 || t2[24] !== l2) {
    let e3;
    t2[26] !== h2.icon || t2[27] !== h2.iconOnly || t2[28] !== h2.item || t2[29] !== u2 || t2[30] !== c2 || t2[31] !== g2 || t2[32] !== r2 || t2[33] !== y2 || t2[34] !== l2 ? (e3 = (e4, t3) => {
      const n3 = g2(e4.value),
        a3 = u2 || e4.disabled,
        s3 = !e4.label && !!e4.icon;
      return Gr.jsxs(Xr.Fragment, {
        children: [t3 > 0 && Gr.jsx("div", {
          className: "w-px bg-border/30 shrink-0 self-stretch"
        }), Gr.jsxs("div", {
          role: "radio",
          "aria-checked": n3,
          "aria-label": "string" == typeof e4.label ? e4.label : e4.title,
          onClick: () => {
            a3 || y2(e4.value);
          },
          style: {
            borderRadius: 0
          },
          className: x("group relative flex items-center justify-center whitespace-nowrap text-xs font-medium transition-colors duration-150 outline-none select-none cursor-pointer border-none !rounded-none !m-0 box-border h-full", c2 ? "flex-1 min-w-0" : "shrink-0", s3 ? h2.iconOnly : h2.item, n3 ? "bg-selected text-foreground font-semibold" : "bg-transparent text-foreground/75 hover:text-foreground", a3 && "opacity-40 cursor-not-allowed pointer-events-none", r2),
          children: [(() => {
            if (!e4.icon) return null;
            if (Xr.isValidElement(e4.icon)) return Gr.jsx("div", {
              className: "shrink-0 flex items-center justify-center",
              children: e4.icon
            });
            const t4 = e4.icon;
            return "function" == typeof t4 || "object" == typeof t4 ? Gr.jsx(t4, {
              className: h2.icon,
              size: "sm" === l2 ? 14 : "md" === l2 ? 16 : 18
            }) : null;
          })(), e4.label && Gr.jsx("span", {
            className: "whitespace-nowrap",
            children: e4.label
          }), e4.badge && Gr.jsx("span", {
            className: "shrink-0 ml-1",
            children: e4.badge
          })]
        })]
      }, String(e4.value));
    }, t2[26] = h2.icon, t2[27] = h2.iconOnly, t2[28] = h2.item, t2[29] = u2, t2[30] = c2, t2[31] = g2, t2[32] = r2, t2[33] = y2, t2[34] = l2, t2[35] = e3) : e3 = t2[35], j2 = n2.map(e3), t2[15] = h2.icon, t2[16] = h2.iconOnly, t2[17] = h2.item, t2[18] = u2, t2[19] = c2, t2[20] = g2, t2[21] = r2, t2[22] = n2, t2[23] = y2, t2[24] = l2, t2[25] = j2;
  } else j2 = t2[25];
  return t2[36] !== j2 || t2[37] !== k2 ? (S2 = Gr.jsx("div", {
    ref: d2,
    role: "radiogroup",
    className: k2,
    children: j2
  }), t2[36] = j2, t2[37] = k2, t2[38] = S2) : S2 = t2[38], S2;
}
function Zu(e2) {
  const t2 = Kr.c(32),
    {
      options: n2,
      value: a2,
      onChange: r2,
      className: s2,
      itemClassName: i2,
      size: o2
    } = e2,
    l2 = void 0 === o2 ? "md" : o2,
    c2 = Yu[l2];
  let u2;
  if (t2[0] !== n2 || t2[1] !== a2) {
    let e3;
    t2[3] !== a2 ? (e3 = e4 => e4.value === a2, t2[3] = a2, t2[4] = e3) : e3 = t2[4], u2 = n2.findIndex(e3), t2[0] = n2, t2[1] = a2, t2[2] = u2;
  } else u2 = t2[2];
  const d2 = Math.max(0, u2),
    m2 = 100 / (n2.length || 1);
  let f2;
  t2[5] !== s2 || t2[6] !== c2.container ? (f2 = x("bg-plate border border-border/15 rounded-full flex items-center w-full relative select-none box-border", c2.container, s2), t2[5] = s2, t2[6] = c2.container, t2[7] = f2) : f2 = t2[7];
  const h2 = "sm" === l2 ? "top-0.5 bottom-0.5" : "top-1 bottom-1";
  let p2;
  t2[8] !== h2 ? (p2 = x("absolute bg-foreground rounded-full shadow-sm pointer-events-none", h2), t2[8] = h2, t2[9] = p2) : p2 = t2[9];
  const g2 = `calc(${d2 * m2}% + ${c2.pad}px)`,
    v2 = `calc(${m2}% - ${2 * c2.pad}px)`;
  let y2, b2, w2, k2, j2;
  if (t2[10] !== g2 || t2[11] !== v2 ? (y2 = {
    left: g2,
    width: v2
  }, t2[10] = g2, t2[11] = v2, t2[12] = y2) : y2 = t2[12], t2[13] === Symbol.for("react.memo_cache_sentinel") ? (b2 = {
    type: "spring",
    stiffness: 450,
    damping: 35
  }, t2[13] = b2) : b2 = t2[13], t2[14] !== p2 || t2[15] !== y2 ? (w2 = Gr.jsx(Jr.div, {
    className: p2,
    initial: false,
    animate: y2,
    transition: b2
  }), t2[14] = p2, t2[15] = y2, t2[16] = w2) : w2 = t2[16], t2[17] !== c2.item || t2[18] !== i2 || t2[19] !== r2 || t2[20] !== n2 || t2[21] !== a2) {
    let e3;
    t2[23] !== c2.item || t2[24] !== i2 || t2[25] !== r2 || t2[26] !== a2 ? (e3 = e4 => {
      const t3 = a2 === e4.value;
      return Gr.jsxs("button", {
        type: "button",
        disabled: e4.disabled,
        onClick: () => r2(e4.value),
        "aria-label": "string" == typeof e4.label ? e4.label : e4.title,
        className: x("relative z-10 flex-1 h-full flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-200 outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-center whitespace-nowrap border-none bg-transparent", c2.item, t3 ? "text-background font-semibold" : "text-muted-foreground/75 hover:text-foreground", i2),
        children: [Xr.isValidElement(e4.icon) && Gr.jsx("span", {
          className: "text-current",
          children: e4.icon
        }), Gr.jsx("span", {
          className: "truncate tracking-normal",
          children: e4.label
        })]
      }, String(e4.value));
    }, t2[23] = c2.item, t2[24] = i2, t2[25] = r2, t2[26] = a2, t2[27] = e3) : e3 = t2[27], k2 = n2.map(e3), t2[17] = c2.item, t2[18] = i2, t2[19] = r2, t2[20] = n2, t2[21] = a2, t2[22] = k2;
  } else k2 = t2[22];
  return t2[28] !== w2 || t2[29] !== k2 || t2[30] !== f2 ? (j2 = Gr.jsxs("div", {
    className: f2,
    children: [w2, k2]
  }), t2[28] = w2, t2[29] = k2, t2[30] = f2, t2[31] = j2) : j2 = t2[31], j2;
}
const nd = {
    sm: "!rounded-sm",
    md: "!rounded-md",
    lg: "!rounded-lg",
    xl: "!rounded-xl",
    "2xl": "!rounded-2xl",
    "3xl": "!rounded-3xl",
    full: "!rounded-full"
  },
  ad = {
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    "3xl": "24px",
    full: "9999px"
  },
  rd = Qr.forwardRef((e2, t2) => {
    const n2 = Kr.c(89);
    let a2, r2, s2, i2, o2, l2, c2, u2, d2, m2, f2, h2, p2, g2, v2, y2, b2;
    n2[0] !== e2 ? ({
      className: a2,
      variant: p2,
      type: b2,
      leftIcon: r2,
      leftIconExternal: i2,
      leftIconClassName: s2,
      onLeftIconClick: l2,
      leftIconLabel: o2,
      rightIcon: d2,
      rightIconClassName: m2,
      onRightIconClick: c2,
      rightIconLabel: f2,
      showPasswordToggle: g2,
      rounded: v2,
      iconSize: y2,
      style: h2,
      ...u2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2, n2[5] = o2, n2[6] = l2, n2[7] = c2, n2[8] = u2, n2[9] = d2, n2[10] = m2, n2[11] = f2, n2[12] = h2, n2[13] = p2, n2[14] = g2, n2[15] = v2, n2[16] = y2, n2[17] = b2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4], o2 = n2[5], l2 = n2[6], c2 = n2[7], u2 = n2[8], d2 = n2[9], m2 = n2[10], f2 = n2[11], h2 = n2[12], p2 = n2[13], g2 = n2[14], v2 = n2[15], y2 = n2[16], b2 = n2[17]);
    const w2 = void 0 === p2 ? "default" : p2,
      k2 = void 0 === g2 || g2,
      j2 = void 0 === v2 ? "xl" : v2,
      {
        t: S2
      } = P(),
      N2 = "password" === b2,
      [C2, T2] = Qr.useState(false);
    let E2;
    n2[18] === Symbol.for("react.memo_cache_sentinel") ? (E2 = Math.random().toString(36).substring(2, 9), n2[18] = E2) : E2 = n2[18];
    const L2 = `input-${E2}`;
    let I2;
    n2[19] === Symbol.for("react.memo_cache_sentinel") ? (I2 = Math.random().toString(36).substring(2, 9), n2[19] = I2) : I2 = n2[19];
    const M2 = `field-${I2}`,
      R2 = Qr.useRef(null),
      z2 = function (...e3) {
        const t3 = Kr.c(2),
          n3 = e3;
        let a3;
        t3[0] !== n3 ? (a3 = e4 => {
          n3.forEach(t4 => {
            t4 && ("function" == typeof t4 ? t4(e4) : t4 && "object" == typeof t4 && (t4.current = e4));
          });
        }, t3[0] = n3, t3[1] = a3) : a3 = t3[1];
        return a3;
      }(t2, R2);
    let D2, F2;
    n2[20] !== N2 || n2[21] !== b2 ? (D2 = () => {
      R2.current && (N2 || "password" === b2 ? R2.current.setAttribute("autocomplete", "new-password") : R2.current.setAttribute("autocomplete", "off"));
    }, F2 = [N2, b2], n2[20] = N2, n2[21] = b2, n2[22] = D2, n2[23] = F2) : (D2 = n2[22], F2 = n2[23]), Qr.useEffect(D2, F2);
    const O2 = N2 ? C2 ? "text" : "password" : b2;
    let $2;
    n2[24] !== N2 ? ($2 = N2 ? Gr.jsx("style", {
      children: '\n        input[type="password"]::-ms-reveal,\n        input[type="password"]::-ms-clear {\n          display: none;\n        }\n        input[type="password"]::-webkit-reveal,\n        input[type="password"]::-webkit-clear-button {\n          display: none !important;\n        }\n        input[type="password"] {\n          -webkit-appearance: none !important;\n          appearance: none !important;\n        }\n      '
    }) : null, n2[24] = N2, n2[25] = $2) : $2 = n2[25];
    const B2 = $2,
      U2 = void 0 !== u2.value && "" !== u2.value && null !== u2.value,
      q2 = Boolean(d2 || N2 && k2 && U2);
    let H2;
    n2[26] !== r2 || n2[27] !== s2 || n2[28] !== o2 || n2[29] !== l2 || n2[30] !== u2.disabled ? (H2 = () => r2 ? l2 ? Gr.jsx(A, {
      type: "button",
      variant: "ghost",
      size: "icon-2xs",
      onClick: l2,
      disabled: u2.disabled,
      "aria-label": o2,
      className: x("absolute left-2.5 top-1/2 -translate-y-1/2 flex h-auto w-auto rounded-none p-1 text-muted-foreground/50 hover:text-foreground transition-colors duration-150 ease-in-out z-10 active:scale-95 disabled:pointer-events-auto", s2),
      children: r2
    }) : Gr.jsx("div", {
      className: x("absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 flex items-center justify-center pointer-events-auto", s2),
      children: r2
    }) : null, n2[26] = r2, n2[27] = s2, n2[28] = o2, n2[29] = l2, n2[30] = u2.disabled, n2[31] = H2) : H2 = n2[31];
    const W2 = H2;
    let V2;
    n2[32] !== U2 || n2[33] !== N2 || n2[34] !== C2 || n2[35] !== c2 || n2[36] !== u2.disabled || n2[37] !== d2 || n2[38] !== m2 || n2[39] !== f2 || n2[40] !== k2 || n2[41] !== S2 ? (V2 = () => d2 ? c2 ? Gr.jsx(A, {
      type: "button",
      variant: "ghost",
      size: "icon-2xs",
      onClick: c2,
      disabled: u2.disabled,
      "aria-label": f2,
      className: x("absolute right-2.5 top-1/2 -translate-y-1/2 flex h-auto w-auto rounded-none p-1 text-muted-foreground/50 hover:text-foreground transition-colors duration-150 ease-in-out z-10 active:scale-95 disabled:pointer-events-auto", m2),
      children: d2
    }) : Gr.jsx("div", {
      className: x("absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-auto", m2),
      children: d2
    }) : N2 && k2 && U2 ? Gr.jsx(A, {
      type: "button",
      variant: "ghost",
      size: "icon-2xs",
      onClick: () => T2(!C2),
      className: "absolute inset-y-0 right-0 flex h-auto w-auto rounded-none px-3 py-0 text-muted-foreground/50 transition-colors duration-150 ease-in-out hover:text-foreground z-10",
      "aria-label": S2(C2 ? "common.hide_password" : "common.show_password"),
      children: C2 ? Gr.jsx(_.hide, {
        className: "h-4 w-4"
      }) : Gr.jsx(_.show, {
        className: "h-4 w-4"
      })
    }) : null, n2[32] = U2, n2[33] = N2, n2[34] = C2, n2[35] = c2, n2[36] = u2.disabled, n2[37] = d2, n2[38] = m2, n2[39] = f2, n2[40] = k2, n2[41] = S2, n2[42] = V2) : V2 = n2[42];
    const Q2 = V2,
      K2 = nd[j2] || "!rounded-xl",
      G2 = ad[j2] || "12px",
      X2 = "inline" === w2 ? "border-0 bg-transparent hover:bg-transparent focus:bg-transparent focus-visible:bg-transparent" : "outline" === w2 ? "border-border-subtle bg-transparent hover:border-border-default focus:border-border-strong focus-visible:border-border-strong" : "border-transparent bg-plate hover:bg-hover focus:bg-hover focus:border-border-subtle focus-visible:border-border-subtle focus-visible:bg-hover",
      Y2 = q2 && "pr-10",
      J2 = r2 && !i2 && "pl-10";
    let Z2, ee2;
    n2[43] !== a2 || n2[44] !== K2 || n2[45] !== X2 || n2[46] !== Y2 || n2[47] !== J2 ? (Z2 = x("flex h-10 w-full appearance-none border px-3.5 py-2 text-base placeholder:text-muted-foreground/40 focus-visible:outline-none focus:outline-none focus-visible:ring-0 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200 ease-out selection:bg-primary/20 selection:text-primary-foreground", X2, K2, Y2, J2, a2), n2[43] = a2, n2[44] = K2, n2[45] = X2, n2[46] = Y2, n2[47] = J2, n2[48] = Z2) : Z2 = n2[48], n2[49] !== G2 || n2[50] !== h2 ? (ee2 = {
      borderRadius: G2,
      ...h2
    }, n2[49] = G2, n2[50] = h2, n2[51] = ee2) : ee2 = n2[51];
    const te2 = u2.id || L2,
      ne2 = u2.name || M2,
      ae2 = "password" === b2 ? "new-password" : "off";
    let re2;
    n2[52] !== O2 || n2[53] !== z2 || n2[54] !== u2 || n2[55] !== Z2 || n2[56] !== ee2 || n2[57] !== te2 || n2[58] !== ne2 || n2[59] !== ae2 ? (re2 = Gr.jsx("input", {
      type: O2,
      className: Z2,
      style: ee2,
      ref: z2,
      id: te2,
      name: ne2,
      autoComplete: ae2,
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false",
      "data-form-type": "other",
      "data-lpignore": "true",
      "aria-autocomplete": "none",
      ...u2
    }), n2[52] = O2, n2[53] = z2, n2[54] = u2, n2[55] = Z2, n2[56] = ee2, n2[57] = te2, n2[58] = ne2, n2[59] = ae2, n2[60] = re2) : re2 = n2[60];
    const se2 = re2;
    if (r2 && i2) {
      let e3, t3, a3, s3, i3;
      return n2[61] !== r2 ? (e3 = Gr.jsx("div", {
        className: "flex items-center justify-center h-10 w-10 rounded-md border border-border/30 bg-background/20 flex-shrink-0",
        children: r2
      }), n2[61] = r2, n2[62] = e3) : e3 = n2[62], n2[63] !== Q2 ? (t3 = Q2(), n2[63] = Q2, n2[64] = t3) : t3 = n2[64], n2[65] !== se2 || n2[66] !== t3 ? (a3 = Gr.jsxs("div", {
        className: "relative flex-1",
        children: [se2, t3]
      }), n2[65] = se2, n2[66] = t3, n2[67] = a3) : a3 = n2[67], n2[68] !== e3 || n2[69] !== a3 ? (s3 = Gr.jsxs("div", {
        className: "flex items-center gap-2 w-full",
        children: [e3, a3]
      }), n2[68] = e3, n2[69] = a3, n2[70] = s3) : s3 = n2[70], n2[71] !== B2 || n2[72] !== s3 ? (i3 = Gr.jsxs(Gr.Fragment, {
        children: [B2, s3]
      }), n2[71] = B2, n2[72] = s3, n2[73] = i3) : i3 = n2[73], i3;
    }
    const ie2 = void 0 !== d2 || Boolean(c2) || N2 && k2;
    if (r2 || q2 || ie2) {
      let e3, t3, a3, r3;
      return n2[74] !== i2 || n2[75] !== W2 ? (e3 = !i2 && W2(), n2[74] = i2, n2[75] = W2, n2[76] = e3) : e3 = n2[76], n2[77] !== Q2 ? (t3 = Q2(), n2[77] = Q2, n2[78] = t3) : t3 = n2[78], n2[79] !== se2 || n2[80] !== e3 || n2[81] !== t3 ? (a3 = Gr.jsxs("div", {
        className: "relative w-full",
        children: [e3, se2, t3]
      }), n2[79] = se2, n2[80] = e3, n2[81] = t3, n2[82] = a3) : a3 = n2[82], n2[83] !== B2 || n2[84] !== a3 ? (r3 = Gr.jsxs(Gr.Fragment, {
        children: [B2, a3]
      }), n2[83] = B2, n2[84] = a3, n2[85] = r3) : r3 = n2[85], r3;
    }
    let oe2;
    return n2[86] !== se2 || n2[87] !== B2 ? (oe2 = Gr.jsxs(Gr.Fragment, {
      children: [B2, se2]
    }), n2[86] = se2, n2[87] = B2, n2[88] = oe2) : oe2 = n2[88], oe2;
  });
const sd = Xr.memo(function (e2) {
  const t2 = Kr.c(18),
    {
      children: n2,
      className: a2,
      lineClassName: r2,
      textClassName: s2
    } = e2;
  let i2, o2, l2, c2, u2, d2, m2;
  return t2[0] !== a2 ? (i2 = x("relative flex items-center w-full py-2.5", a2), t2[0] = a2, t2[1] = i2) : i2 = t2[1], t2[2] !== r2 ? (o2 = x("flex-grow border-t border-border/25", r2), t2[2] = r2, t2[3] = o2) : o2 = t2[3], t2[4] !== o2 ? (l2 = Gr.jsx("div", {
    className: o2
  }), t2[4] = o2, t2[5] = l2) : l2 = t2[5], t2[6] !== n2 || t2[7] !== s2 ? (c2 = n2 && Gr.jsx("span", {
    className: x("flex-shrink mx-3.5 text-footnote text-muted-foreground/50 font-normal lowercase select-none", s2),
    children: n2
  }), t2[6] = n2, t2[7] = s2, t2[8] = c2) : c2 = t2[8], t2[9] !== r2 ? (u2 = x("flex-grow border-t border-border/25", r2), t2[9] = r2, t2[10] = u2) : u2 = t2[10], t2[11] !== u2 ? (d2 = Gr.jsx("div", {
    className: u2
  }), t2[11] = u2, t2[12] = d2) : d2 = t2[12], t2[13] !== i2 || t2[14] !== l2 || t2[15] !== c2 || t2[16] !== d2 ? (m2 = Gr.jsxs("div", {
    className: i2,
    children: [l2, c2, d2]
  }), t2[13] = i2, t2[14] = l2, t2[15] = c2, t2[16] = d2, t2[17] = m2) : m2 = t2[17], m2;
});
function id(e2) {
  const t2 = Kr.c(9),
    n2 = Qr.useRef(null);
  let r2;
  t2[0] === Symbol.for("react.memo_cache_sentinel") ? (r2 = {
    x: 0,
    y: 0
  }, t2[0] = r2) : r2 = t2[0];
  const s2 = Qr.useRef(r2);
  let i2;
  t2[1] === Symbol.for("react.memo_cache_sentinel") ? (i2 = () => {
    n2.current && clearTimeout(n2.current), n2.current = null;
  }, t2[1] = i2) : i2 = t2[1];
  const o2 = i2;
  let l2;
  t2[2] !== e2 ? (l2 = t3 => {
    o2(), e2 && (s2.current = {
      x: t3.clientX,
      y: t3.clientY
    }, n2.current = setTimeout(async () => {
      n2.current = null, a.warn("support", "error held for report:", e2), await Ti.share();
    }, 600));
  }, t2[2] = e2, t2[3] = l2) : l2 = t2[3];
  const c2 = l2;
  let u2;
  t2[4] === Symbol.for("react.memo_cache_sentinel") ? (u2 = e3 => {
    n2.current && Math.hypot(e3.clientX - s2.current.x, e3.clientY - s2.current.y) > 6 && o2();
  }, t2[4] = u2) : u2 = t2[4];
  const d2 = u2;
  let m2, f2, h2;
  return t2[5] === Symbol.for("react.memo_cache_sentinel") ? (m2 = () => o2, f2 = [o2], t2[5] = m2, t2[6] = f2) : (m2 = t2[5], f2 = t2[6]), Qr.useEffect(m2, f2), t2[7] !== c2 ? (h2 = {
    onPointerDown: c2,
    onPointerMove: d2,
    onPointerUp: o2,
    onPointerLeave: o2,
    onPointerCancel: o2
  }, t2[7] = c2, t2[8] = h2) : h2 = t2[8], h2;
}
async function fd() {
  a.info("[useOAuth] Starting SoundCloud OAuth flow");
  const e2 = await We.getAuthUrl("soundcloud");
  if (!(null == e2 ? void 0 : e2.auth_url)) throw new Error("Failed to get SoundCloud auth URL");
  await ve("oauth", {
    provider: "soundcloud",
    url: e2.auth_url
  });
}
async function hd() {
  a.info("[useOAuth] Starting Spotify cookie-based flow"), await ve("oauth", {
    provider: "spotify",
    url: "https://accounts.spotify.com/en/login?continue=https:%2F%2Fopen.spotify.com%2F"
  });
}
async function pd() {
  a.info("[useOAuth] Starting Yandex OAuth flow");
  await ve("oauth", {
    provider: "yandex",
    url: "https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d"
  });
}
async function gd() {
  a.info("[useOAuth] Starting VK OAuth flow");
  const e2 = await We.getAuthUrl("vk");
  if (!(null == e2 ? void 0 : e2.auth_url)) throw new Error("Failed to get VK auth URL");
  await ve("oauth", {
    provider: "vk",
    url: e2.auth_url
  });
}
async function vd() {
  a.info('[useOAuth] Starting Deezer "OAuth" flow');
  const e2 = await We.getAuthUrl("deezer");
  if (!(null == e2 ? void 0 : e2.auth_url)) throw new Error("Failed to get Deezer login URL");
  await ve("oauth", {
    provider: "deezer",
    url: e2.auth_url
  });
}
const xd = new class {
  constructor(e2) {
    t(this, "items", []), this.maxSize = e2;
  }
  has(e2) {
    return this.items.includes(e2);
  }
  add(e2) {
    this.items.includes(e2) || (this.items.push(e2), this.items.length > this.maxSize && this.items.shift());
  }
  delete(e2) {
    const t2 = this.items.indexOf(e2);
    -1 !== t2 && this.items.splice(t2, 1);
  }
}(50);
let yd = false;
function bd(e2) {
  const [t2, n2] = Qr.useState(false),
    s2 = Qr.useRef(e2);
  Qr.useEffect(() => {
    s2.current = e2;
  }, [e2]), Qr.useEffect(() => {
    let e3,
      t3 = true;
    return (async () => {
      if ("undefined" != typeof window && window.__TAURI__) try {
        const n3 = await Xe("deep-link:oauth", async e4 => {
          var t4, n4, i3, o2, l2;
          if (yd) return void a.info("[useOAuth] Callback already being processed, ignoring duplicate event");
          yd = true;
          const c2 = e4.payload;
          a.info("[useOAuth] Received deep-link:oauth event:", c2);
          try {
            const e5 = new URL(c2),
              o3 = c2.match(/^dotify:\/\/oauth\/([^/?#]+)/),
              l3 = o3 ? o3[1] : "",
              u2 = e5.searchParams.get("code") || e5.searchParams.get("token") || e5.searchParams.get("hash") || new URLSearchParams(e5.hash.replace(/^#/, "")).get("sp_dc") || e5.searchParams.get("access_token") || new URLSearchParams(e5.hash.replace(/^#/, "")).get("access_token");
            if (u2 && xd.has(u2)) return void a.info(`[useOAuth] ${l3} key already processed, skipping`);
            u2 && xd.add(u2);
            const d2 = {
              onSuccess: null == (t4 = s2.current) ? void 0 : t4.onSuccess,
              onError: null == (n4 = s2.current) ? void 0 : n4.onError,
              mode: null == (i3 = s2.current) ? void 0 : i3.mode,
              markFailed: e6 => xd.delete(e6)
            };
            switch (l3) {
              case "google":
                await async function (e6, t5) {
                  var n5, r2, s3, i4;
                  const o4 = e6.searchParams.get("code"),
                    l4 = e6.searchParams.get("error");
                  if (l4) return a.error("[useOAuth] Google error:", l4), void (null == (n5 = t5.onError) || n5.call(t5, l4));
                  if (o4) {
                    a.info("[useOAuth] Processing Google callback with code");
                    try {
                      const e7 = sessionStorage.getItem("oauth_mode") || t5.mode || "login";
                      if (sessionStorage.removeItem("oauth_mode"), "link" === e7) return a.info("[useOAuth] Link mode - sending code to link endpoint"), await Qe.linkAccount("google", {
                        code: o4
                      }), void (null == (r2 = t5.onSuccess) || r2.call(t5, {
                        linked: true,
                        provider: "google"
                      }));
                      const n6 = await Ke.signinGoogle(o4);
                      a.info("[useOAuth] Google callback response:", n6), null == (s3 = t5.onSuccess) || s3.call(t5, n6);
                    } catch (c3) {
                      a.error("[useOAuth] Error in callback request:", c3), t5.markFailed(o4), null == (i4 = t5.onError) || i4.call(t5, "OAuth request failed");
                    }
                  }
                }(e5, d2);
                break;
              case "lastfm":
                await async function (e6, t5) {
                  var n5, s3, i4, o4;
                  const l4 = e6.searchParams.get("token");
                  if (!l4) return a.error("[useOAuth] No token in Last.fm callback"), void (null == (n5 = t5.onError) || n5.call(t5, "No token in Last.fm callback"));
                  try {
                    const e7 = await T.media.lastfm.getSession(l4);
                    a.info("[useOAuth] Last.fm session:", e7), (null == e7 ? void 0 : e7.key) ? (await r.getState().updateIntegrationSettings({
                      lastfm: {
                        scrobbling_enabled: true,
                        now_playing_enabled: true,
                        session_key: e7.key,
                        username: e7.name,
                        avatar: e7.avatarUrl
                      }
                    }), a.info("[useOAuth] Last.fm connected:", e7.name), null == (s3 = t5.onSuccess) || s3.call(t5, {
                      session_key: e7.key,
                      username: e7.name,
                      avatar: e7.avatarUrl
                    })) : (a.warn("[useOAuth] Last.fm session invalid"), null == (i4 = t5.onError) || i4.call(t5, "Last.fm session invalid"));
                  } catch (c3) {
                    a.error("[useOAuth] Last.fm callback error:", c3), t5.markFailed(l4), null == (o4 = t5.onError) || o4.call(t5, "Last.fm auth failed");
                  }
                }(e5, d2);
                break;
              case "telegram":
                await async function (e6, t5) {
                  var n5, r2, s3, i4;
                  const o4 = e6.searchParams.get("id"),
                    l4 = e6.searchParams.get("first_name"),
                    c3 = e6.searchParams.get("last_name"),
                    u3 = e6.searchParams.get("username"),
                    d3 = e6.searchParams.get("photo_url"),
                    m2 = e6.searchParams.get("auth_date"),
                    f2 = e6.searchParams.get("hash");
                  if (!(o4 && l4 && m2 && f2)) return a.error("[useOAuth] Missing required Telegram parameters"), void (null == (n5 = t5.onError) || n5.call(t5, "Invalid Telegram data"));
                  const h2 = {
                    id: parseInt(o4),
                    first_name: l4,
                    last_name: c3 || void 0,
                    username: u3 || void 0,
                    photo_url: d3 || void 0,
                    auth_date: parseInt(m2),
                    hash: f2
                  };
                  a.info("[useOAuth] Processing Telegram callback");
                  try {
                    const e7 = sessionStorage.getItem("oauth_mode") || t5.mode || "login";
                    if (sessionStorage.removeItem("oauth_mode"), "link" === e7) return a.info("[useOAuth] Link mode - sending Telegram data to link endpoint"), await Qe.linkAccount("telegram", {
                      telegram: h2
                    }), void (null == (r2 = t5.onSuccess) || r2.call(t5, {
                      linked: true,
                      provider: "telegram"
                    }));
                    const n6 = await Ke.signinTelegram(h2);
                    a.info("[useOAuth] Telegram auth response:", n6), null == (s3 = t5.onSuccess) || s3.call(t5, n6);
                  } catch (p2) {
                    a.error("[useOAuth] Error in Telegram callback request:", p2), t5.markFailed(f2), null == (i4 = t5.onError) || i4.call(t5, "Telegram auth request failed");
                  }
                }(e5, d2);
                break;
              case "yandex":
              case "vk":
              case "deezer":
                await async function (e6, t5, n5) {
                  var s3, i4, o4, l4, c3;
                  const u3 = new URLSearchParams(t5.hash.replace(/^#/, "")),
                    d3 = u3.get("access_token") || u3.get("arl") || t5.searchParams.get("access_token") || t5.searchParams.get("token") || t5.searchParams.get("arl"),
                    m2 = u3.get("error") || t5.searchParams.get("error");
                  if (m2) return a.error(`[useOAuth] ${e6} error:`, m2), void (null == (s3 = n5.onError) || s3.call(n5, m2));
                  if (!d3) return a.error(`[useOAuth] No token in ${e6} callback`), void (null == (i4 = n5.onError) || i4.call(n5, `No token in ${e6} callback`));
                  try {
                    if ("deezer" === e6) {
                      const t6 = await We.deezerCallback(d3),
                        a2 = t6.username,
                        s4 = t6.avatar,
                        i5 = t6.access_token || d3;
                      await r.getState().updateServiceSettings({
                        deezer: {
                          token: i5,
                          username: a2,
                          avatar: s4
                        }
                      }), null == (o4 = n5.onSuccess) || o4.call(n5, {
                        provider: e6,
                        connected: true,
                        arl: d3,
                        username: a2,
                        avatar: s4
                      });
                    } else {
                      const t6 = "yandex" === e6 ? We.yandexCallback : We.vkCallback,
                        a2 = await t6(d3),
                        s4 = a2.username,
                        i5 = a2.avatar,
                        o5 = a2.access_token || d3;
                      await r.getState().updateServiceSettings({
                        [e6]: {
                          token: o5,
                          username: s4,
                          avatar: i5
                        }
                      }), null == (l4 = n5.onSuccess) || l4.call(n5, {
                        provider: e6,
                        connected: true,
                        username: s4,
                        avatar: i5
                      });
                    }
                  } catch (f2) {
                    a.error(`[useOAuth] ${e6} callback error:`, f2), n5.markFailed(d3), null == (c3 = n5.onError) || c3.call(n5, `${e6} auth error`);
                  }
                }(l3, e5, d2);
                break;
              case "spotify":
                await async function (e6, t5) {
                  var n5, s3, i4, o4, l4, c3, u3, d3, m2;
                  const f2 = new URLSearchParams(e6.hash.replace(/^#/, "")).get("sp_dc"),
                    h2 = e6.searchParams.get("code"),
                    p2 = e6.searchParams.get("error");
                  if (p2) return a.error("[useOAuth] Spotify error:", p2), void (null == (n5 = t5.onError) || n5.call(t5, p2));
                  if (f2) try {
                    const e7 = `sp_dc=${f2}`,
                      n6 = await We.spotifyProfile(e7);
                    if (n6) {
                      const a2 = await Ve.getServiceSettings();
                      if (a2) {
                        const i5 = {
                          ...a2
                        };
                        i5.spotify || (i5.spotify = {}), i5.spotify.access_token = e7, i5.spotify.refresh_token = "", i5.spotify.username = n6.username || "", i5.spotify.avatar_url = n6.avatar || "", await r.getState().updateServiceSettings(i5), null == (s3 = t5.onSuccess) || s3.call(t5, {
                          provider: "spotify",
                          connected: true
                        });
                      }
                    } else null == (i4 = t5.onError) || i4.call(t5, "Spotify cookie validation failed");
                  } catch (g2) {
                    a.error("[useOAuth] Spotify cookie callback error:", g2), t5.markFailed(f2), null == (o4 = t5.onError) || o4.call(t5, "Spotify cookie callback failed");
                  } else if (h2) try {
                    const e7 = await We.spotifyCallback(h2);
                    if (e7) {
                      const n6 = await Ve.getServiceSettings();
                      if (n6) {
                        const a2 = {
                          ...n6
                        };
                        a2.spotify || (a2.spotify = {}), a2.spotify.access_token = e7.access_token, a2.spotify.refresh_token = e7.refresh_token, a2.spotify.token_expires_at = Math.floor(Date.now() / 1e3) + (null != (c3 = e7.expires_in) ? c3 : 3600), e7.username && (a2.spotify.username = e7.username), e7.avatar && (a2.spotify.avatar_url = e7.avatar), await r.getState().updateServiceSettings(a2), null == (u3 = t5.onSuccess) || u3.call(t5, {
                          provider: "spotify",
                          connected: true
                        });
                      }
                    } else null == (d3 = t5.onError) || d3.call(t5, "Spotify auth failed");
                  } catch (g2) {
                    a.error("[useOAuth] Spotify callback error:", g2), t5.markFailed(h2), null == (m2 = t5.onError) || m2.call(t5, "Spotify auth error");
                  } else null == (l4 = t5.onError) || l4.call(t5, "Invalid Spotify callback");
                }(e5, d2);
                break;
              case "soundcloud":
                await async function (e6, t5) {
                  var n5, s3, i4, o4, l4;
                  const c3 = e6.searchParams.get("code"),
                    u3 = e6.searchParams.get("state");
                  if (c3 && u3) try {
                    const e7 = await We.soundcloudCallback(c3, u3);
                    if (e7) {
                      const a2 = await Ve.getServiceSettings();
                      if (a2) {
                        const i5 = {
                          ...a2
                        };
                        i5.soundcloud || (i5.soundcloud = {}), i5.soundcloud.access_token = e7.access_token, i5.soundcloud.refresh_token = e7.refresh_token, i5.soundcloud.token_expires_at = Math.floor(Date.now() / 1e3) + (null != (n5 = e7.expires_in) ? n5 : 3600), e7.username && (i5.soundcloud.username = e7.username), e7.avatar && (i5.soundcloud.avatar_url = e7.avatar), e7.client_id && (i5.soundcloud.clientId = e7.client_id), await r.getState().updateServiceSettings(i5), null == (s3 = t5.onSuccess) || s3.call(t5, {
                          provider: "soundcloud",
                          connected: true
                        });
                      }
                    } else null == (i4 = t5.onError) || i4.call(t5, "SoundCloud auth failed");
                  } catch (d3) {
                    a.error("[useOAuth] SoundCloud callback error:", d3), t5.markFailed(c3), null == (o4 = t5.onError) || o4.call(t5, "SoundCloud auth error");
                  } else null == (l4 = t5.onError) || l4.call(t5, "Invalid SoundCloud callback");
                }(e5, d2);
                break;
              default:
                a.warn(`[useOAuth] Unknown OAuth provider: ${l3}`);
            }
          } catch (u2) {
            a.error("[useOAuth] Error processing callback:", u2), null == (l2 = null == (o2 = s2.current) ? void 0 : o2.onError) || l2.call(o2, "Failed to process OAuth callback");
          } finally {
            yd = false;
          }
        });
        n3 && "function" == typeof n3 && (t3 ? e3 = n3 : n3());
      } catch (n3) {
        a.error("[useOAuth] Error setting up listener:", n3);
      }
    })(), () => {
      t3 = false, e3 && "function" == typeof e3 && e3();
    };
  }, []);
  const i2 = async (t3, r2) => {
    var s3;
    try {
      n2(true), await t3();
    } catch (i3) {
      a.error(`[useOAuth] Error starting ${r2} OAuth:`, i3), null == (s3 = null == e2 ? void 0 : e2.onError) || s3.call(e2, `Failed to start ${r2} OAuth`);
    } finally {
      n2(false);
    }
  };
  return {
    isLoading: t2,
    startGoogleOAuth: () => i2(() => async function (e3) {
      a.info("[useOAuth] Starting Google OAuth flow");
      const t3 = await Ke.googleAuthUrl();
      if (!t3) throw new Error("Failed to get auth URL");
      e3 && sessionStorage.setItem("oauth_mode", e3), await Ge(t3);
    }(null == e2 ? void 0 : e2.mode), "Google"),
    startTelegramOAuth: () => i2(() => async function (e3) {
      a.info("[useOAuth] Starting Telegram OAuth flow"), e3 && sessionStorage.setItem("oauth_mode", e3), await Ge("https://dotify.fun/oauth/telegram");
    }(null == e2 ? void 0 : e2.mode), "Telegram"),
    startSoundcloudOAuth: () => i2(fd, "SoundCloud"),
    startSpotifyOAuth: () => i2(hd, "Spotify"),
    startYandexOAuth: () => i2(pd, "Yandex"),
    startVkOAuth: () => i2(gd, "VK"),
    startDeezerOAuth: () => i2(vd, "Deezer"),
    unlinkOAuth: async t3 => {
      var n3;
      try {
        return a.info(`[useOAuth] Unlinking ${t3} account`), await Qe.unlinkAccount(t3), a.info(`[useOAuth] Successfully unlinked ${t3} account`), true;
      } catch (r2) {
        return a.error(`[useOAuth] Error unlinking ${t3}:`, r2), null == (n3 = null == e2 ? void 0 : e2.onError) || n3.call(e2, "Failed to unlink account"), false;
      }
    }
  };
}
const Cd = Xr.memo(function (e2) {
  const t2 = Kr.c(13),
    {
      className: n2,
      onClick: a2
    } = e2,
    {
      t: r2
    } = P();
  let s2;
  t2[0] === Symbol.for("react.memo_cache_sentinel") ? (s2 = Gr.jsx(Ku, {
    size: 48,
    className: "pointer-events-none text-primary"
  }), t2[0] = s2) : s2 = t2[0];
  const i2 = s2;
  if (a2) {
    let e3, s3, o3;
    return t2[1] !== n2 ? (e3 = x("shrink-0", n2), t2[1] = n2, t2[2] = e3) : e3 = t2[2], t2[3] !== r2 ? (s3 = r2("common.navigation"), t2[3] = r2, t2[4] = s3) : s3 = t2[4], t2[5] !== a2 || t2[6] !== e3 || t2[7] !== s3 ? (o3 = Gr.jsx(A, {
      variant: "ghost",
      size: "icon-xl",
      shape: "square",
      stretch: true,
      className: e3,
      "aria-label": s3,
      onClick: a2,
      children: i2
    }), t2[5] = a2, t2[6] = e3, t2[7] = s3, t2[8] = o3) : o3 = t2[8], o3;
  }
  let o2, l2;
  return t2[9] !== n2 ? (o2 = x("flex size-12 shrink-0 items-center justify-center", n2), t2[9] = n2, t2[10] = o2) : o2 = t2[10], t2[11] !== o2 ? (l2 = Gr.jsx("div", {
    className: o2,
    "data-tauri-drag-region": true,
    children: i2
  }), t2[11] = o2, t2[12] = l2) : l2 = t2[12], l2;
});
function $d(e2) {
  const t2 = Kr.c(58),
    {
      title: n2,
      subtitle: a2,
      icon: r2,
      iconClassName: s2,
      className: i2,
      size: o2,
      layout: l2,
      variant: c2,
      iconOnly: u2,
      hideIcon: d2,
      hideTitle: m2,
      hideSubtitle: f2
    } = e2,
    h2 = void 0 === o2 ? "md" : o2,
    p2 = void 0 === l2 ? "horizontal" : l2,
    g2 = void 0 === c2 ? "default" : c2,
    v2 = void 0 !== u2 && u2,
    y2 = void 0 !== d2 && d2,
    b2 = void 0 !== m2 && m2,
    w2 = void 0 !== f2 && f2,
    {
      t: k2
    } = P();
  let j2;
  t2[0] !== k2 || t2[1] !== n2 ? (j2 = n2 || k2("search.results.no.results_title"), t2[0] = k2, t2[1] = n2, t2[2] = j2) : j2 = t2[2];
  const S2 = j2;
  let N2;
  t2[3] !== a2 || t2[4] !== k2 ? (N2 = a2 || k2("search.results.no.try_later"), t2[3] = a2, t2[4] = k2, t2[5] = N2) : N2 = t2[5];
  const C2 = N2;
  let T2;
  if (t2[6] !== r2 || t2[7] !== g2) {
    T2 = (() => {
      if (r2) return r2;
      switch (g2) {
        case "music":
        case "player":
          return B.Track;
        case "favorites":
        case "liked":
          return _.like;
        case "offline":
        case "local":
          return _.offline;
        case "playlist":
        default:
          return B.Playlist;
        case "search":
          return _.search;
        case "package":
        case "inventory":
          return _.box;
        case "queue":
          return _.queue;
      }
    })(), t2[6] = r2, t2[7] = g2, t2[8] = T2;
  } else T2 = t2[8];
  const E2 = T2,
    L2 = "horizontal" === p2;
  let A2, I2, M2, R2, z2, D2, F2, O2, $2, U2, q2, H2, W2, V2, Q2;
  if (t2[9] !== E2 || t2[10] !== i2 || t2[11] !== C2 || t2[12] !== S2 || t2[13] !== y2 || t2[14] !== w2 || t2[15] !== b2 || t2[16] !== s2 || t2[17] !== v2 || t2[18] !== L2 || t2[19] !== h2) {
    H2 = Symbol.for("react.early_return_sentinel");
    e: {
      const e3 = {
        sm: {
          iconSize: "w-6 h-6",
          titleSize: "text-sm font-semibold",
          subtitleSize: "text-caption font-medium",
          padding: "p-2",
          gap: "gap-2"
        },
        md: {
          iconSize: "w-10 h-10",
          titleSize: "text-base font-semibold text-foreground/90",
          subtitleSize: "text-xs font-medium text-foreground/50",
          padding: "p-4",
          gap: "gap-3"
        },
        lg: {
          iconSize: "w-14 h-14",
          titleSize: "text-lg font-bold text-foreground",
          subtitleSize: "text-sm font-medium text-foreground/60",
          padding: "p-6",
          gap: "gap-4"
        }
      }[h2];
      if (v2) {
        let n4;
        t2[32] !== i2 ? (n4 = x("flex items-center justify-center", i2), t2[32] = i2, t2[33] = n4) : n4 = t2[33];
        const a3 = Gr.jsx(Jr.div, {
          children: Gr.jsx(E2, {
            className: x(e3.iconSize, "text-muted-foreground/30", s2)
          })
        });
        let r3;
        t2[34] !== n4 || t2[35] !== a3 ? (r3 = Gr.jsx("div", {
          className: n4,
          children: a3
        }), t2[34] = n4, t2[35] = a3, t2[36] = r3) : r3 = t2[36], H2 = r3;
        break e;
      }
      I2 = Yr, q2 = "wait", A2 = Jr.div, t2[37] === Symbol.for("react.memo_cache_sentinel") ? (D2 = {
        opacity: 0,
        scale: 0.98
      }, F2 = {
        opacity: 1,
        scale: 1
      }, O2 = {
        duration: 0.4,
        ease: "easeOut"
      }, t2[37] = D2, t2[38] = F2, t2[39] = O2) : (D2 = t2[37], F2 = t2[38], O2 = t2[39]), $2 = x("flex select-none w-fit", L2 ? "flex-row items-center text-left" : "mx-auto flex-col items-center text-center", e3.padding, e3.gap, i2), U2 = !y2 && Gr.jsx(Jr.div, {
        className: "flex-shrink-0",
        children: Gr.jsx(E2, {
          className: x(e3.iconSize, "text-muted-foreground/40", s2)
        })
      });
      const n3 = !L2 && "items-center text-center";
      t2[40] !== n3 ? (M2 = x("flex flex-col min-w-0 justify-center", n3), t2[40] = n3, t2[41] = M2) : M2 = t2[41], R2 = !b2 && S2 && Gr.jsx("h3", {
        className: x(e3.titleSize, "leading-tight", !L2 && "text-center"),
        children: S2
      }), z2 = !w2 && C2 && Gr.jsx("p", {
        className: x(e3.subtitleSize, "mt-1", !L2 && "text-center"),
        children: C2
      });
    }
    t2[9] = E2, t2[10] = i2, t2[11] = C2, t2[12] = S2, t2[13] = y2, t2[14] = w2, t2[15] = b2, t2[16] = s2, t2[17] = v2, t2[18] = L2, t2[19] = h2, t2[20] = A2, t2[21] = I2, t2[22] = M2, t2[23] = R2, t2[24] = z2, t2[25] = D2, t2[26] = F2, t2[27] = O2, t2[28] = $2, t2[29] = U2, t2[30] = q2, t2[31] = H2;
  } else A2 = t2[20], I2 = t2[21], M2 = t2[22], R2 = t2[23], z2 = t2[24], D2 = t2[25], F2 = t2[26], O2 = t2[27], $2 = t2[28], U2 = t2[29], q2 = t2[30], H2 = t2[31];
  return H2 !== Symbol.for("react.early_return_sentinel") ? H2 : (t2[42] !== M2 || t2[43] !== R2 || t2[44] !== z2 ? (W2 = Gr.jsxs("div", {
    className: M2,
    children: [R2, z2]
  }), t2[42] = M2, t2[43] = R2, t2[44] = z2, t2[45] = W2) : W2 = t2[45], t2[46] !== A2 || t2[47] !== D2 || t2[48] !== F2 || t2[49] !== O2 || t2[50] !== $2 || t2[51] !== U2 || t2[52] !== W2 ? (V2 = Gr.jsxs(A2, {
    initial: D2,
    animate: F2,
    transition: O2,
    className: $2,
    children: [U2, W2]
  }), t2[46] = A2, t2[47] = D2, t2[48] = F2, t2[49] = O2, t2[50] = $2, t2[51] = U2, t2[52] = W2, t2[53] = V2) : V2 = t2[53], t2[54] !== I2 || t2[55] !== q2 || t2[56] !== V2 ? (Q2 = Gr.jsx(I2, {
    mode: q2,
    children: V2
  }), t2[54] = I2, t2[55] = q2, t2[56] = V2, t2[57] = Q2) : Q2 = t2[57], Q2);
}
function Bd(e2) {
  const t2 = Kr.c(41),
    {
      title: n2,
      subtitle: a2,
      query: r2,
      className: s2,
      variant: i2,
      size: o2,
      layout: l2
    } = e2,
    c2 = void 0 === i2 ? "search" : i2,
    u2 = void 0 === o2 ? "md" : o2,
    d2 = void 0 === l2 ? "vertical" : l2;
  let m2;
  if (t2[0] !== c2) {
    m2 = (() => {
      switch (c2) {
        case "search":
        default:
          return mt;
        case "artist":
          return B.Artist;
        case "track":
          return B.Track;
      }
    })(), t2[0] = c2, t2[1] = m2;
  } else m2 = t2[1];
  const f2 = m2,
    h2 = "horizontal" === d2;
  let p2, g2, v2, y2, b2, w2, k2, j2, S2, N2, _2, C2, T2, E2;
  if (t2[2] !== f2 || t2[3] !== s2 || t2[4] !== h2 || t2[5] !== u2 || t2[6] !== a2 || t2[7] !== n2) {
    const e3 = {
      sm: {
        iconSize: "w-6 h-6",
        titleSize: "text-sm",
        subtitleSize: "text-caption",
        padding: "p-1.5",
        gap: "gap-3"
      },
      md: {
        iconSize: "w-12 h-12",
        titleSize: "text-base",
        subtitleSize: "text-xs",
        padding: "p-3",
        gap: "gap-4"
      },
      lg: {
        iconSize: "w-16 h-16",
        titleSize: "text-lg",
        subtitleSize: "text-sm",
        padding: "p-5",
        gap: "gap-5"
      }
    }[u2];
    let r3, i3;
    g2 = Yr, b2 = "wait", p2 = Jr.div, t2[18] === Symbol.for("react.memo_cache_sentinel") ? (S2 = {
      opacity: 0,
      y: 10
    }, N2 = {
      opacity: 1,
      y: 0
    }, t2[18] = S2, t2[19] = N2) : (S2 = t2[18], N2 = t2[19]), v2 = x("flex select-none items-center justify-center", h2 ? "flex-row text-left" : "flex-col text-center", e3.padding, e3.gap, s2), t2[20] === Symbol.for("react.memo_cache_sentinel") ? (r3 = {
      scale: [1, 1.05, 1],
      opacity: [0.4, 0.6, 0.4]
    }, i3 = {
      duration: 4,
      repeat: 1 / 0,
      ease: "easeInOut"
    }, t2[20] = r3, t2[21] = i3) : (r3 = t2[20], i3 = t2[21]), y2 = Gr.jsx(Jr.div, {
      animate: r3,
      transition: i3,
      className: "flex-shrink-0",
      children: Gr.jsx(f2, {
        className: x("text-muted-foreground/40", e3.iconSize)
      })
    }), w2 = "flex flex-col min-w-0", k2 = n2 && Gr.jsx("h3", {
      className: x(e3.titleSize, "font-semibold text-foreground/90 leading-tight"),
      children: n2
    }), j2 = a2 && Gr.jsx("p", {
      className: x(e3.subtitleSize, "text-muted-foreground font-medium"),
      children: a2
    }), t2[2] = f2, t2[3] = s2, t2[4] = h2, t2[5] = u2, t2[6] = a2, t2[7] = n2, t2[8] = p2, t2[9] = g2, t2[10] = v2, t2[11] = y2, t2[12] = b2, t2[13] = w2, t2[14] = k2, t2[15] = j2, t2[16] = S2, t2[17] = N2;
  } else p2 = t2[8], g2 = t2[9], v2 = t2[10], y2 = t2[11], b2 = t2[12], w2 = t2[13], k2 = t2[14], j2 = t2[15], S2 = t2[16], N2 = t2[17];
  return t2[22] !== r2 || t2[23] !== a2 ? (_2 = !a2 && r2 && Gr.jsxs("span", {
    className: "mt-1.5 text-micro bg-secondary/50 px-2 py-0.5 rounded text-muted-foreground font-mono truncate max-w-full",
    children: ['"', r2, '"']
  }), t2[22] = r2, t2[23] = a2, t2[24] = _2) : _2 = t2[24], t2[25] !== _2 || t2[26] !== w2 || t2[27] !== k2 || t2[28] !== j2 ? (C2 = Gr.jsxs("div", {
    className: w2,
    children: [k2, j2, _2]
  }), t2[25] = _2, t2[26] = w2, t2[27] = k2, t2[28] = j2, t2[29] = C2) : C2 = t2[29], t2[30] !== p2 || t2[31] !== v2 || t2[32] !== y2 || t2[33] !== C2 || t2[34] !== S2 || t2[35] !== N2 ? (T2 = Gr.jsxs(p2, {
    initial: S2,
    animate: N2,
    className: v2,
    children: [y2, C2]
  }), t2[30] = p2, t2[31] = v2, t2[32] = y2, t2[33] = C2, t2[34] = S2, t2[35] = N2, t2[36] = T2) : T2 = t2[36], t2[37] !== g2 || t2[38] !== b2 || t2[39] !== T2 ? (E2 = Gr.jsx(g2, {
    mode: b2,
    children: T2
  }), t2[37] = g2, t2[38] = b2, t2[39] = T2, t2[40] = E2) : E2 = t2[40], E2;
}
const Ud = {
  Loading: function (e2) {
    const t2 = Kr.c(59),
      {
        title: n2,
        subtitle: a2,
        className: r2,
        iconClassName: s2,
        variant: i2,
        size: o2,
        iconOnly: l2,
        layout: c2
      } = e2,
      u2 = void 0 === i2 ? "default" : i2,
      d2 = void 0 === o2 ? "md" : o2,
      m2 = void 0 !== l2 && l2,
      f2 = void 0 === c2 ? "horizontal" : c2,
      {
        t: h2
      } = P();
    let p2;
    if (t2[0] !== a2 || t2[1] !== h2 || t2[2] !== n2 || t2[3] !== u2) {
      p2 = (() => {
        switch (u2) {
          case "music":
            return {
              icon: B.Track,
              defaultTitle: h2("loading.music.title"),
              defaultSubtitle: h2("loading.music.subtitle")
            };
          case "search":
            return {
              icon: _.search,
              defaultTitle: h2("loading.search.title"),
              defaultSubtitle: h2("loading.search.subtitle")
            };
          case "inventory":
            return {
              icon: _.box,
              defaultTitle: h2("loading.inventory.title"),
              defaultSubtitle: h2("loading.inventory.subtitle")
            };
          case "artist":
            return {
              icon: B.Artist,
              defaultTitle: h2("loading.artist.title"),
              defaultSubtitle: h2("loading.artist.subtitle")
            };
          case "player":
            return {
              icon: _.volume,
              defaultTitle: h2("loading.player.title"),
              defaultSubtitle: h2("loading.player.subtitle")
            };
          case "spinner":
            return {
              icon: I,
              defaultTitle: n2,
              defaultSubtitle: a2
            };
          case "shop":
            return {
              icon: _.buy,
              defaultTitle: n2,
              defaultSubtitle: a2
            };
          case "artist-unique":
            return {
              icon: dt,
              defaultTitle: h2("loading.artist.title"),
              defaultSubtitle: h2("loading.artist_unique.subtitle")
            };
          default:
            return {
              icon: ut,
              defaultTitle: n2,
              defaultSubtitle: a2
            };
        }
      })(), t2[0] = a2, t2[1] = h2, t2[2] = n2, t2[3] = u2, t2[4] = p2;
    } else p2 = t2[4];
    const {
      icon: g2,
      defaultTitle: v2,
      defaultSubtitle: y2
    } = p2;
    let b2;
    t2[5] !== h2 || t2[6] !== n2 || t2[7] !== v2 ? (b2 = n2 || v2 || h2("common.loading"), t2[5] = h2, t2[6] = n2, t2[7] = v2, t2[8] = b2) : b2 = t2[8];
    const w2 = b2;
    let k2, j2, S2, N2, C2, T2, E2, L2, A2, M2, R2, z2, D2, F2, O2;
    if (t2[9] !== g2 || t2[10] !== r2 || t2[11] !== y2 || t2[12] !== w2 || t2[13] !== s2 || t2[14] !== m2 || t2[15] !== f2 || t2[16] !== d2 || t2[17] !== a2 || t2[18] !== u2) {
      A2 = Symbol.for("react.early_return_sentinel");
      e: {
        const e3 = {
            sm: {
              iconSize: "w-5 h-5",
              titleSize: "text-sm",
              subtitleSize: "text-caption",
              padding: "p-1.5",
              gap: "gap-2.5"
            },
            md: {
              iconSize: "w-7 h-7",
              titleSize: "text-base",
              subtitleSize: "text-xs",
              padding: "p-3",
              gap: "gap-3.5"
            },
            lg: {
              iconSize: "w-10 h-10",
              titleSize: "text-lg",
              subtitleSize: "text-sm",
              padding: "p-5",
              gap: "gap-4.5"
            }
          }[d2],
          n3 = "horizontal" === f2;
        let i3;
        if (t2[31] !== u2) {
          i3 = (() => {
            switch (u2) {
              case "spinner":
                return {
                  animate: {
                    rotate: 360
                  },
                  transition: {
                    duration: 1,
                    repeat: 1 / 0,
                    ease: "linear"
                  }
                };
              case "pulse":
                return {
                  animate: {
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  },
                  transition: {
                    duration: 1.5,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                  }
                };
              case "music":
                return {
                  animate: {
                    y: [-1, 1, -1],
                    rotate: [-4, 4, -4]
                  },
                  transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                  }
                };
              case "search":
                return {
                  animate: {
                    x: [-2, 2, -2]
                  },
                  transition: {
                    duration: 1.5,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                  }
                };
              default:
                return {
                  animate: {
                    rotate: 360
                  },
                  transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "linear"
                  }
                };
            }
          })(), t2[31] = u2, t2[32] = i3;
        } else i3 = t2[32];
        const o3 = i3;
        if (m2) {
          let n4;
          t2[33] !== r2 ? (n4 = x("flex items-center justify-center", r2), t2[33] = r2, t2[34] = n4) : n4 = t2[34];
          const a3 = Gr.jsx(Jr.div, {
            ...o3,
            children: Gr.jsx(g2, {
              className: x(e3.iconSize, "text-muted-foreground/40", s2)
            })
          });
          let i4;
          t2[35] !== n4 || t2[36] !== a3 ? (i4 = Gr.jsx("div", {
            className: n4,
            children: a3
          }), t2[35] = n4, t2[36] = a3, t2[37] = i4) : i4 = t2[37], A2 = i4;
          break e;
        }
        j2 = Yr, L2 = "wait", k2 = Jr.div;
        const l3 = n3 ? -5 : 0,
          c3 = n3 ? 0 : 5;
        t2[38] !== l3 || t2[39] !== c3 ? (S2 = {
          opacity: 0,
          x: l3,
          y: c3
        }, t2[38] = l3, t2[39] = c3, t2[40] = S2) : S2 = t2[40], t2[41] === Symbol.for("react.memo_cache_sentinel") ? (N2 = {
          opacity: 1,
          x: 0,
          y: 0
        }, C2 = {
          opacity: 0
        }, t2[41] = N2, t2[42] = C2) : (N2 = t2[41], C2 = t2[42]), T2 = x("flex select-none w-fit", n3 ? "flex-row items-center text-left" : "mx-auto flex-col items-center text-center", e3.padding, e3.gap, r2), E2 = Gr.jsx(Jr.div, {
          className: "flex-shrink-0",
          ...o3,
          children: Gr.jsx(g2, {
            className: x(e3.iconSize, "text-muted-foreground/40", s2)
          })
        }), M2 = "flex flex-col min-w-0", R2 = Gr.jsx("h3", {
          className: x(e3.titleSize, "font-semibold text-foreground/90 leading-tight"),
          children: w2
        }), z2 = (a2 || y2) && Gr.jsx("p", {
          className: x(e3.subtitleSize, "text-muted-foreground font-medium truncate"),
          children: a2 || y2
        });
      }
      t2[9] = g2, t2[10] = r2, t2[11] = y2, t2[12] = w2, t2[13] = s2, t2[14] = m2, t2[15] = f2, t2[16] = d2, t2[17] = a2, t2[18] = u2, t2[19] = k2, t2[20] = j2, t2[21] = S2, t2[22] = N2, t2[23] = C2, t2[24] = T2, t2[25] = E2, t2[26] = L2, t2[27] = A2, t2[28] = M2, t2[29] = R2, t2[30] = z2;
    } else k2 = t2[19], j2 = t2[20], S2 = t2[21], N2 = t2[22], C2 = t2[23], T2 = t2[24], E2 = t2[25], L2 = t2[26], A2 = t2[27], M2 = t2[28], R2 = t2[29], z2 = t2[30];
    return A2 !== Symbol.for("react.early_return_sentinel") ? A2 : (t2[43] !== M2 || t2[44] !== R2 || t2[45] !== z2 ? (D2 = Gr.jsxs("div", {
      className: M2,
      children: [R2, z2]
    }), t2[43] = M2, t2[44] = R2, t2[45] = z2, t2[46] = D2) : D2 = t2[46], t2[47] !== k2 || t2[48] !== S2 || t2[49] !== N2 || t2[50] !== C2 || t2[51] !== T2 || t2[52] !== E2 || t2[53] !== D2 ? (F2 = Gr.jsxs(k2, {
      initial: S2,
      animate: N2,
      exit: C2,
      className: T2,
      children: [E2, D2]
    }), t2[47] = k2, t2[48] = S2, t2[49] = N2, t2[50] = C2, t2[51] = T2, t2[52] = E2, t2[53] = D2, t2[54] = F2) : F2 = t2[54], t2[55] !== j2 || t2[56] !== L2 || t2[57] !== F2 ? (O2 = Gr.jsx(j2, {
      mode: L2,
      children: F2
    }), t2[55] = j2, t2[56] = L2, t2[57] = F2, t2[58] = O2) : O2 = t2[58], O2);
  },
  Empty: $d,
  Success: function (e2) {
    const t2 = Kr.c(39),
      {
        title: n2,
        subtitle: a2,
        className: r2,
        iconClassName: s2,
        size: i2,
        layout: o2,
        variant: l2
      } = e2,
      c2 = void 0 === i2 ? "md" : i2,
      u2 = void 0 === l2 ? "default" : l2,
      d2 = "horizontal" === (void 0 === o2 ? "horizontal" : o2) || "compact" === u2;
    let m2, f2, h2, p2, g2, v2, y2, b2, w2, k2, j2, S2, N2;
    if (t2[0] !== r2 || t2[1] !== s2 || t2[2] !== d2 || t2[3] !== c2 || t2[4] !== a2 || t2[5] !== n2 || t2[6] !== u2) {
      const e3 = {
        sm: {
          iconSize: "w-5 h-5",
          titleSize: "text-sm",
          subtitleSize: "text-caption",
          padding: "p-1.5",
          gap: "gap-3"
        },
        md: {
          iconSize: "w-8 h-8",
          titleSize: "text-base",
          subtitleSize: "text-xs",
          padding: "p-3",
          gap: "gap-4"
        },
        lg: {
          iconSize: "w-11 h-11",
          titleSize: "text-lg",
          subtitleSize: "text-sm",
          padding: "p-5",
          gap: "gap-5"
        }
      }[c2];
      let i3, o3, l3;
      f2 = Yr, p2 = "wait", m2 = Jr.div, t2[17] === Symbol.for("react.memo_cache_sentinel") ? (b2 = {
        opacity: 0,
        scale: 0.95
      }, w2 = {
        opacity: 1,
        scale: 1
      }, t2[17] = b2, t2[18] = w2) : (b2 = t2[17], w2 = t2[18]), k2 = x("flex select-none w-fit", d2 ? "flex-row items-center text-left" : "mx-auto flex-col items-center text-center", "compact" !== u2 && e3.padding, e3.gap, r2), t2[19] === Symbol.for("react.memo_cache_sentinel") ? (i3 = {
        rotate: -20,
        scale: 0.5
      }, o3 = {
        rotate: 0,
        scale: 1
      }, l3 = {
        type: "spring",
        bounce: 0.5
      }, t2[19] = i3, t2[20] = o3, t2[21] = l3) : (i3 = t2[19], o3 = t2[20], l3 = t2[21]);
      const j3 = "compact" === u2 ? Gr.jsx(lt, {
        className: x(e3.iconSize, "text-muted-foreground/60", s2)
      }) : Gr.jsx(ct, {
        className: x(e3.iconSize, "text-muted-foreground/40", s2)
      });
      t2[22] !== j3 ? (h2 = Gr.jsx(Jr.div, {
        initial: i3,
        animate: o3,
        transition: l3,
        className: "flex-shrink-0",
        children: j3
      }), t2[22] = j3, t2[23] = h2) : h2 = t2[23], g2 = "flex flex-col min-w-0", v2 = n2 && Gr.jsx("h3", {
        className: x(e3.titleSize, "font-semibold text-foreground/90 leading-tight"),
        children: n2
      }), y2 = a2 && Gr.jsx("p", {
        className: x(e3.subtitleSize, "text-muted-foreground font-medium truncate"),
        children: a2
      }), t2[0] = r2, t2[1] = s2, t2[2] = d2, t2[3] = c2, t2[4] = a2, t2[5] = n2, t2[6] = u2, t2[7] = m2, t2[8] = f2, t2[9] = h2, t2[10] = p2, t2[11] = g2, t2[12] = v2, t2[13] = y2, t2[14] = b2, t2[15] = w2, t2[16] = k2;
    } else m2 = t2[7], f2 = t2[8], h2 = t2[9], p2 = t2[10], g2 = t2[11], v2 = t2[12], y2 = t2[13], b2 = t2[14], w2 = t2[15], k2 = t2[16];
    return t2[24] !== g2 || t2[25] !== v2 || t2[26] !== y2 ? (j2 = Gr.jsxs("div", {
      className: g2,
      children: [v2, y2]
    }), t2[24] = g2, t2[25] = v2, t2[26] = y2, t2[27] = j2) : j2 = t2[27], t2[28] !== m2 || t2[29] !== h2 || t2[30] !== j2 || t2[31] !== b2 || t2[32] !== w2 || t2[33] !== k2 ? (S2 = Gr.jsxs(m2, {
      initial: b2,
      animate: w2,
      className: k2,
      children: [h2, j2]
    }), t2[28] = m2, t2[29] = h2, t2[30] = j2, t2[31] = b2, t2[32] = w2, t2[33] = k2, t2[34] = S2) : S2 = t2[34], t2[35] !== f2 || t2[36] !== p2 || t2[37] !== S2 ? (N2 = Gr.jsx(f2, {
      mode: p2,
      children: S2
    }), t2[35] = f2, t2[36] = p2, t2[37] = S2, t2[38] = N2) : N2 = t2[38], N2;
  }
};
function qd(e2) {
  const t2 = window.matchMedia("(prefers-reduced-motion: reduce)");
  let n2 = 0,
    a2 = e2.scrollTop,
    r2 = a2,
    s2 = 0,
    i2 = 0;
  const o2 = () => {
      n2 && cancelAnimationFrame(n2), n2 = 0, a2 = e2.scrollTop, r2 = a2;
    },
    l2 = c3 => {
      if (document.hidden || t2.matches) return void o2();
      const u3 = Math.min(50, Math.max(1, c3 - s2));
      s2 = c3, a2 = Math.min(a2, i2);
      const d2 = a2 - e2.scrollTop,
        m2 = Math.abs(d2) < 2,
        f2 = m2 ? a2 : e2.scrollTop + Math.sign(d2) * Math.max(1, Math.abs(d2) * (1 - Math.exp(-u3 / 45))),
        h2 = e2.scrollTop;
      e2.scrollTop = f2, r2 = e2.scrollTop, n2 = m2 || r2 === h2 || Math.abs(a2 - r2) < 0.5 ? 0 : requestAnimationFrame(l2);
    },
    c2 = c3 => {
      if (c3.defaultPrevented || c3.ctrlKey || c3.metaKey || c3.shiftKey || t2.matches || document.hidden) return;
      if (document.documentElement.classList.contains("no-animations")) return;
      if (Math.abs(c3.deltaX) >= Math.abs(c3.deltaY)) return;
      if (0 === c3.deltaMode && Math.abs(c3.deltaY) < 40) return void o2();
      const u3 = c3.deltaY * (1 === c3.deltaMode ? 20 : 2 === c3.deltaMode ? e2.clientHeight : 1);
      let d2 = c3.target instanceof Element ? c3.target : null;
      for (; d2 && d2 !== e2;) {
        const e3 = getComputedStyle(d2);
        if (d2 instanceof HTMLElement && /auto|scroll/.test(e3.overflowY)) {
          const t3 = d2.scrollHeight - d2.clientHeight;
          if (t3 > 1 && /contain|none/.test(e3.overscrollBehaviorY)) return;
          if (t3 > 1 && (u3 < 0 ? d2.scrollTop > 0 : d2.scrollTop < t3 - 1)) return;
        }
        d2 = d2.parentElement;
      }
      const m2 = Math.max(0, e2.scrollHeight - e2.clientHeight);
      i2 = m2, m2 && !(u3 < 0 ? e2.scrollTop <= 0 : e2.scrollTop >= m2 - 1) ? (c3.preventDefault(), a2 = Math.max(0, Math.min(m2, (n2 ? a2 : e2.scrollTop) + u3)), n2 || (s2 = performance.now(), r2 = e2.scrollTop, n2 = requestAnimationFrame(l2))) : o2();
    },
    u2 = () => {
      n2 && Math.abs(e2.scrollTop - r2) > 1 && o2();
    };
  return e2.addEventListener("wheel", c2, {
    passive: false
  }), e2.addEventListener("scroll", u2, {
    passive: true
  }), e2.addEventListener("pointerdown", o2, {
    passive: true
  }), e2.addEventListener("keydown", o2), e2.addEventListener("touchstart", o2, {
    passive: true
  }), document.addEventListener("visibilitychange", o2), t2.addEventListener("change", o2), () => {
    o2(), e2.removeEventListener("wheel", c2), e2.removeEventListener("scroll", u2), e2.removeEventListener("pointerdown", o2), e2.removeEventListener("keydown", o2), e2.removeEventListener("touchstart", o2), document.removeEventListener("visibilitychange", o2), t2.removeEventListener("change", o2);
  };
}
const Hd = Qr.forwardRef(({
  className: e2,
  children: t2,
  orientation: n2 = "vertical",
  viewportClassName: a2,
  viewportRef: r2,
  smooth: s2 = false,
  ...i2
}, o2) => {
  const l2 = Qr.useRef(null),
    c2 = Qr.useCallback(e3 => {
      l2.current = e3, "function" == typeof r2 ? r2(e3) : r2 && (r2.current = e3);
    }, [r2]);
  return Qr.useEffect(() => {
    if (s2 && "vertical" === n2 && l2.current) return qd(l2.current);
  }, [s2, n2]), Gr.jsx("div", {
    ref: o2,
    className: x("relative overflow-hidden", e2),
    ...i2,
    children: Gr.jsx("div", {
      ref: c2,
      className: x("h-full w-full rounded-[inherit] app-scrollbar", "horizontal" === n2 ? "overflow-x-auto overflow-y-hidden" : "overflow-y-auto overflow-x-hidden", a2),
      children: t2
    })
  });
});
const wm = "data-chrome-notch",
  km = "dotify:chrome-notch";
const Sm = ".tabs-frame, .tabs-wrapper, .tabs-wrapper-flush, .mini-player-wrapper:not(.floating-miniplayer *), .shell";
function Nm() {
  if ("true" === document.documentElement.getAttribute("data-drawer-active")) return true;
  const e2 = document.querySelector(".threed-drawer-viewport");
  return !!e2 && "none" !== e2.style.display && e2.offsetWidth > 0 && e2.offsetHeight > 0;
}
function _m() {
  if (Nm()) return "none";
  if ("full" === document.documentElement.getAttribute("data-tabs-style")) return "none";
  const e2 = window.innerWidth,
    t2 = window.innerHeight,
    n2 = [];
  if (document.querySelectorAll(Sm).forEach(e3 => {
    const t3 = e3.getBoundingClientRect();
    if (t3.width < 1 || t3.height < 1) return;
    const a3 = Math.min(Math.round(Number.parseFloat(getComputedStyle(e3).borderTopLeftRadius) || 0), Math.round(t3.width / 2), Math.round(t3.height / 2)),
      r2 = function (e4) {
        const t4 = e4.getAttribute(wm);
        if (!t4) return null;
        const [n3, a4] = t4.split(",").map(Number);
        return n3 > 0 && a4 > 0 ? [n3, a4] : null;
      }(e3),
      s2 = Math.round(t3.left),
      i2 = Math.round(t3.top),
      o2 = Math.round(t3.width),
      l2 = Math.round(t3.height);
    n2.push(r2 ? `<path transform='translate(${s2},${i2})' d='${function (e4, t4, n3, a4, r3) {
      const s3 = Math.min(14, a4 / 2, r3 / 2),
        i3 = e4 - a4,
        o3 = Math.min(Math.max(n3, s3), 14),
        l3 = e5 => e5.toFixed(1),
        c2 = (e5, t5, n4, a5) => `A${l3(e5)},${l3(e5)} 0 0 ${t5} ${l3(n4)},${l3(a5)}`;
      return [`M${l3(n3)},0`, `H${l3(i3 - s3)}`, c2(s3, 1, i3, s3), `V${l3(r3 - s3)}`, c2(s3, 0, i3 + s3, r3), `H${l3(e4 - o3)}`, c2(o3, 1, e4, r3 + o3), `V${l3(t4 - n3)}`, c2(n3, 1, e4 - n3, t4), `H${l3(n3)}`, c2(n3, 1, 0, t4 - n3), `V${l3(n3)}`, c2(n3, 1, n3, 0), "Z"].join(" ");
    }(o2, l2, a3, r2[0], r2[1])}' fill='white'/>` : `<rect x='${s2}' y='${i2}' width='${o2}' height='${l2}' rx='${a3}' fill='white'/>`);
  }), 0 === n2.length) return "";
  const a2 = `<svg xmlns='http://www.w3.org/2000/svg' width='${e2}' height='${t2}' viewBox='0 0 ${e2} ${t2}'>${n2.join("")}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(a2)}")`;
}
function Cm(e2) {
  return e2 instanceof Element && (e2.matches(Sm) || null !== e2.querySelector(Sm));
}
const Tm = Qr.memo(() => {
  var e2, t2, n2, a2;
  const s2 = Kr.c(28),
    i2 = r(Em),
    o2 = q(Am),
    l2 = (null == o2 ? void 0 : o2.url) || null,
    [c2, u2] = Qr.useState(null),
    d2 = null !== c2 ? c2 : l2,
    m2 = Qr.useRef(null),
    f2 = Qr.useRef(null),
    h2 = Qr.useRef(null);
  let p2, g2;
  s2[0] === Symbol.for("react.memo_cache_sentinel") ? (p2 = () => {
    const e3 = e4 => {
      const t3 = e4 instanceof CustomEvent && Pt(e4.detail) ? e4.detail.url : void 0;
      u2("string" == typeof t3 && t3 ? t3 : null);
    };
    return window.addEventListener("preview-background", e3), () => {
      window.removeEventListener("preview-background", e3);
    };
  }, g2 = [], s2[0] = p2, s2[1] = g2) : (p2 = s2[0], g2 = s2[1]), Qr.useEffect(p2, g2);
  const v2 = Pm;
  let x2, y2, b2, w2;
  s2[2] !== d2 ? (x2 = () => {
    const e3 = document.documentElement;
    d2 ? (e3.setAttribute("data-custom-background", "true"), e3.setAttribute("data-wallpaper", v2(d2) ? "video" : "image")) : (e3.removeAttribute("data-custom-background"), e3.removeAttribute("data-wallpaper"));
  }, y2 = [d2, v2], s2[2] = d2, s2[3] = x2, s2[4] = y2) : (x2 = s2[3], y2 = s2[4]), Qr.useEffect(x2, y2), s2[5] !== d2 ? (b2 = () => {
    if (!d2 || !v2(d2)) return;
    const e3 = m2.current;
    if (!e3) return;
    const t3 = () => {
      document.hidden || !document.hasFocus() ? e3.pause() : e3.play().catch(Im);
    };
    return document.addEventListener("visibilitychange", t3), window.addEventListener("blur", t3), window.addEventListener("focus", t3), () => {
      document.removeEventListener("visibilitychange", t3), window.removeEventListener("blur", t3), window.removeEventListener("focus", t3);
    };
  }, w2 = [d2, v2], s2[5] = d2, s2[6] = b2, s2[7] = w2) : (b2 = s2[6], w2 = s2[7]), Qr.useEffect(b2, w2);
  const k2 = Math.min(100, Math.max(0, null != (t2 = null == (e2 = null == o2 ? void 0 : o2.effects) ? void 0 : e2.dimming) ? t2 : 0)),
    j2 = Math.min(100, Math.max(0, null != (a2 = null == (n2 = null == o2 ? void 0 : o2.effects) ? void 0 : n2.blur) ? a2 : 0)),
    S2 = k2 / 100;
  let N2;
  s2[8] !== S2 ? (N2 = {
    opacity: S2,
    backgroundColor: "black",
    zIndex: 10
  }, s2[8] = S2, s2[9] = N2) : N2 = s2[9];
  const _2 = N2;
  let C2;
  s2[10] !== d2 || s2[11] !== i2 ? (C2 = !i2 && Boolean(d2) && !v2(null != d2 ? d2 : void 0), s2[10] = d2, s2[11] = i2, s2[12] = C2) : C2 = s2[12];
  const T2 = C2;
  if (function (e3, t3) {
    const n3 = Kr.c(4);
    let a3, r2;
    n3[0] !== t3 || n3[1] !== e3 ? (a3 = () => {
      const n4 = e3.current;
      if (!t3 || !n4) return;
      let a4 = "",
        r3 = 0,
        s3 = 0;
      const i3 = () => {
          if (r3 = 0, document.hidden) return;
          if (Nm()) return void ("none" !== a4 && (a4 = "none", n4.style.maskImage = "none", n4.style.webkitMaskImage = "none"));
          const e4 = _m();
          e4 && e4 !== a4 && (a4 = e4, n4.style.maskImage = e4, n4.style.webkitMaskImage = e4);
        },
        o3 = () => {
          document.hidden || r3 || (r3 = requestAnimationFrame(i3));
        },
        l3 = () => {
          if (document.hidden) s3 = 0;else {
            if (Nm()) return "none" !== a4 && (a4 = "none", n4.style.maskImage = "none", n4.style.webkitMaskImage = "none"), void (s3 = requestAnimationFrame(l3));
            s3 = 0, i3();
          }
        },
        c3 = new ResizeObserver(o3),
        u3 = () => {
          c3.disconnect(), document.querySelectorAll(Sm).forEach(e4 => c3.observe(e4)), o3(), !s3 && Nm() && (s3 = requestAnimationFrame(l3));
        };
      let d3 = 0;
      const m3 = Cm,
        f3 = new MutationObserver(e4 => {
          e4.some(e5 => [...e5.addedNodes, ...e5.removedNodes].some(m3)) && (o3(), window.clearTimeout(d3), d3 = window.setTimeout(u3, 150));
        });
      f3.observe(document.body, {
        childList: true,
        subtree: true
      });
      const h3 = new MutationObserver(() => {
        o3();
      });
      h3.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-tabs-style", "data-tabs-position", "data-render-mode", "data-drawer-active"]
      });
      const p3 = e4 => {
        var t4, r4;
        (null != (r4 = null == (t4 = e4.detail) ? void 0 : t4.active) ? r4 : Nm()) ? (a4 = "none", n4.style.maskImage = "none", n4.style.webkitMaskImage = "none", s3 || (s3 = requestAnimationFrame(l3))) : (a4 = "", requestAnimationFrame(() => {
          i3(), u3();
        }));
      };
      window.addEventListener("dotify:drawer-state", p3), window.addEventListener("resize", o3), window.addEventListener(km, o3);
      const g3 = () => {
        document.hidden ? (r3 && (cancelAnimationFrame(r3), r3 = 0), s3 && (cancelAnimationFrame(s3), s3 = 0)) : o3();
      };
      return document.addEventListener("visibilitychange", g3), i3(), u3(), () => {
        c3.disconnect(), f3.disconnect(), h3.disconnect(), window.removeEventListener("resize", o3), window.removeEventListener(km, o3), window.removeEventListener("dotify:drawer-state", p3), document.removeEventListener("visibilitychange", g3), window.clearTimeout(d3), cancelAnimationFrame(r3), cancelAnimationFrame(s3);
      };
    }, r2 = [e3, t3], n3[0] = t3, n3[1] = e3, n3[2] = a3, n3[3] = r2) : (a3 = n3[2], r2 = n3[3]), Qr.useEffect(a3, r2);
  }(h2, T2), i2 || !d2) return null;
  const E2 = `${j2}px`,
    L2 = j2 > 0 ? "1.06" : "1";
  let A2;
  s2[13] !== L2 || s2[14] !== E2 ? (A2 = {
    "--wallpaper-blur": E2,
    "--wallpaper-scale": L2,
    willChange: "opacity"
  }, s2[13] = L2, s2[14] = E2, s2[15] = A2) : A2 = s2[15];
  const P2 = A2;
  let I2, M2, R2, z2;
  return s2[16] !== d2 ? (I2 = v2(d2) ? Gr.jsx("video", {
    ref: m2,
    src: d2,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto",
    className: "wallpaper-media w-full h-full object-cover pointer-events-none",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      pointerEvents: "none"
    },
    onError: Mm
  }) : Gr.jsx("img", {
    ref: f2,
    src: d2,
    loading: "eager",
    className: "wallpaper-image wallpaper-media absolute inset-0 w-full h-full object-cover pointer-events-none",
    style: {
      objectFit: "cover",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none"
    },
    alt: "Background"
  }), s2[16] = d2, s2[17] = I2) : I2 = s2[17], s2[18] !== d2 || s2[19] !== T2 ? (M2 = T2 && Gr.jsx("div", {
    ref: h2,
    className: "wallpaper-frost absolute inset-0 overflow-hidden pointer-events-none",
    children: Gr.jsx("img", {
      src: d2,
      alt: "",
      className: "absolute inset-0 h-full w-full object-cover"
    })
  }), s2[18] = d2, s2[19] = T2, s2[20] = M2) : M2 = s2[20], s2[21] !== _2 ? (R2 = Gr.jsx("div", {
    className: "absolute inset-0 pointer-events-none",
    style: _2
  }), s2[21] = _2, s2[22] = R2) : R2 = s2[22], s2[23] !== P2 || s2[24] !== I2 || s2[25] !== M2 || s2[26] !== R2 ? (z2 = Gr.jsxs("div", {
    className: "fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden transition-opacity duration-500",
    style: P2,
    children: [I2, M2, R2]
  }), s2[23] = P2, s2[24] = I2, s2[25] = M2, s2[26] = R2, s2[27] = z2) : z2 = s2[27], z2;
});
function Em(e2) {
  return e2.isLoading;
}
function Lm(e2) {
  return "background" === e2.usage && e2.is_active;
}
function Am(e2) {
  return e2.items.find(Lm);
}
function Pm(e2) {
  return !!e2 && /\.(mp4|webm|ogg)$/i.test(e2);
}
function Im() {}
function Mm(e2) {
  return a.error("Error loading background video:", e2);
}
const Um = Qr.createContext(false);
const nf = "size-7 rounded-lg text-muted-foreground/70 hover:bg-transparent hover:text-foreground",
  af = Qr.memo(function () {
    const {
        t: e2
      } = P(),
      t2 = V(e3 => e3.isMaximized),
      n2 = V(e3 => e3.isFullScreen),
      r2 = tf && "macos" === It(),
      s2 = Qr.useRef(false),
      i2 = (e3, t3) => async () => {
        if (tf && !s2.current) {
          s2.current = true;
          try {
            await t3();
          } catch (n3) {
            a.error(`Window ${e3} failed:`, n3);
          } finally {
            s2.current = false;
          }
        }
      },
      o2 = i2("minimize", () => Ot().minimize()),
      l2 = i2("close", () => Ot().close()),
      c2 = i2("resize", () => async function (e3, t3, n3, a2) {
        t3 ? await e3.setFullscreen(!n3) : n3 ? (await e3.setFullscreen(false), await e3.unmaximize()) : a2 ? (await e3.unmaximize(), await e3.setFullscreen(true)) : await e3.maximize();
      }(Ot(), r2, n2, t2));
    return r2 ? Gr.jsx("div", {
      className: "group/mac flex items-center",
      children: [{
        label: e2("common.close"),
        action: l2,
        Icon: _.close,
        color: "group-hover/mac:bg-color-danger group-focus-within/mac:bg-color-danger"
      }, {
        label: e2("common.window.minimize"),
        action: o2,
        Icon: Dt,
        color: "group-hover/mac:bg-color-warning group-focus-within/mac:bg-color-warning"
      }, {
        label: e2("common.window.maximize"),
        action: c2,
        Icon: n2 ? _.fullscreenExit : _.fullscreen,
        color: "group-hover/mac:bg-color-success group-focus-within/mac:bg-color-success"
      }].map(({
        label: e3,
        action: t3,
        Icon: n3,
        color: a2
      }) => Gr.jsx(A, {
        variant: "ghost",
        size: "icon-2xs",
        shape: "circle",
        className: "hover:bg-transparent",
        onClick: t3,
        "aria-label": e3,
        children: Gr.jsx("span", {
          "aria-hidden": true,
          className: x("flex size-3 items-center justify-center rounded-full bg-foreground/35 text-black/70 transition-colors duration-150", a2),
          children: Gr.jsx(n3, {
            className: "size-2 opacity-0 transition-opacity duration-150 group-hover/mac:opacity-100 group-focus-within/mac:opacity-100"
          })
        })
      }, e3))
    }) : Gr.jsxs(Gr.Fragment, {
      children: [Gr.jsx(A, {
        variant: "ghost",
        size: "icon",
        className: nf,
        onClick: o2,
        "aria-label": e2("common.window.minimize"),
        children: Gr.jsx(Dt, {
          className: "size-4"
        })
      }), Gr.jsx(A, {
        variant: "ghost",
        size: "icon",
        className: nf,
        onClick: c2,
        "aria-label": e2("common.window.maximize"),
        children: n2 ? Gr.jsx(_.fullscreenExit, {
          className: "size-4"
        }) : t2 ? Gr.jsx(_.fullscreen, {
          className: "size-4"
        }) : Gr.jsx(Ft, {
          className: "size-3.5"
        })
      }), Gr.jsx(A, {
        variant: "ghost",
        size: "icon",
        className: x(nf, "hover:text-destructive"),
        onClick: l2,
        "aria-label": e2("common.close"),
        children: Gr.jsx(_.close, {
          className: "size-4"
        })
      })]
    });
  });
const zf = gs,
  Df = Qr.forwardRef((e2, t2) => {
    const n2 = Kr.c(9);
    let a2, r2, s2, i2;
    return n2[0] !== e2 ? ({
      className: a2,
      ...r2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2) : (a2 = n2[1], r2 = n2[2]), n2[3] !== a2 ? (s2 = x("inline-flex h-9 items-center justify-center rounded-lg p-1 text-muted-foreground relative", a2), n2[3] = a2, n2[4] = s2) : s2 = n2[4], n2[5] !== r2 || n2[6] !== t2 || n2[7] !== s2 ? (i2 = Gr.jsx(fs, {
      ref: t2,
      className: s2,
      ...r2
    }), n2[5] = r2, n2[6] = t2, n2[7] = s2, n2[8] = i2) : i2 = n2[8], i2;
  });
const Of = Qr.forwardRef((e2, t2) => {
  const n2 = Kr.c(11);
  let a2, r2, s2;
  n2[0] !== e2 ? ({
    className: a2,
    animation: s2,
    ...r2
  } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3]);
  const i2 = void 0 === s2 ? "fade" : s2;
  let o2,
    l2,
    c2 = "";
  return "fade" === i2 ? c2 = "data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=inactive]:hidden duration-150" : "scale" === i2 && (c2 = "data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:zoom-in-98 data-[state=inactive]:hidden duration-150"), n2[4] !== c2 || n2[5] !== a2 ? (o2 = x(c2, a2), n2[4] = c2, n2[5] = a2, n2[6] = o2) : o2 = n2[6], n2[7] !== r2 || n2[8] !== t2 || n2[9] !== o2 ? (l2 = Gr.jsx(ps, {
    ref: t2,
    className: o2,
    ...r2
  }), n2[7] = r2, n2[8] = t2, n2[9] = o2, n2[10] = l2) : l2 = n2[10], l2;
});
const $f = Qr.createContext(null),
  Bf = Qr.createContext(() => {});
function Uf(e2) {
  const t2 = Kr.c(3),
    {
      children: n2
    } = e2,
    [a2, r2] = Qr.useState(null);
  let s2;
  return t2[0] !== n2 || t2[1] !== a2 ? (s2 = Gr.jsx(Bf.Provider, {
    value: r2,
    children: Gr.jsx($f.Provider, {
      value: a2,
      children: n2
    })
  }), t2[0] = n2, t2[1] = a2, t2[2] = s2) : s2 = t2[2], s2;
}
function qf(e2) {
  const t2 = Kr.c(3),
    {
      active: n2
    } = e2,
    a2 = void 0 === n2 || n2,
    r2 = Qr.useContext(Bf),
    s2 = a2 ? "" : void 0;
  let i2;
  return t2[0] !== r2 || t2[1] !== s2 ? (i2 = Gr.jsx("div", {
    ref: r2,
    "data-navigation-slot": s2,
    className: "flex min-h-0 w-full flex-1 flex-col"
  }), t2[0] = r2, t2[1] = s2, t2[2] = i2) : i2 = t2[2], i2;
}
function Hf(e2) {
  const t2 = Kr.c(3),
    {
      children: n2
    } = e2,
    a2 = Qr.useContext($f);
  let r2;
  return t2[0] !== n2 || t2[1] !== a2 ? (r2 = a2 ? cs.createPortal(n2, a2) : null, t2[0] = n2, t2[1] = a2, t2[2] = r2) : r2 = t2[2], r2;
}
const Wf = Xr.memo(function (e2) {
  var t2, n2, a2, r2, s2, i2, o2, l2, u2, d2, m2, f2, h2;
  const p2 = Kr.c(72),
    {
      tabs: g2,
      content: v2,
      panel: y2,
      miniplayer: b2,
      room: w2,
      activeTab: k2,
      isTabsHovered: j2,
      setIsTabsHovered: S2,
      onTabChange: N2,
      isPending: _2
    } = e2,
    C2 = void 0 === y2 ? null : y2,
    {
      settings: T2
    } = c(),
    E2 = (null == (n2 = null == (t2 = null == T2 ? void 0 : T2.uiSettings) ? void 0 : t2.tabs) ? void 0 : n2.style) || "default",
    L2 = (null == (r2 = null == (a2 = null == T2 ? void 0 : T2.uiSettings) ? void 0 : a2.tabs) ? void 0 : r2.position) || "top",
    A2 = (null == (i2 = null == (s2 = null == T2 ? void 0 : T2.playerSettings) ? void 0 : s2.miniplayer) ? void 0 : i2.position) || "bottom",
    P2 = null == (l2 = null == (o2 = null == T2 ? void 0 : T2.uiSettings) ? void 0 : o2.tabs) ? void 0 : l2.autohide,
    I2 = (null == (d2 = null == (u2 = null == T2 ? void 0 : T2.playerSettings) ? void 0 : u2.miniplayer) ? void 0 : d2.border) || "default";
  let M2, R2;
  p2[0] !== L2 || p2[1] !== E2 ? (M2 = () => {
    document.documentElement.setAttribute("data-tabs-style", E2), document.documentElement.setAttribute("data-tabs-position", L2);
  }, R2 = [E2, L2], p2[0] = L2, p2[1] = E2, p2[2] = M2, p2[3] = R2) : (M2 = p2[2], R2 = p2[3]), Xr.useEffect(M2, R2);
  const z2 = "floating" === E2,
    D2 = "floating" === A2,
    F2 = !!b2 && "player" !== k2 && (null == (h2 = null == (f2 = null == (m2 = null == T2 ? void 0 : T2.playerSettings) ? void 0 : m2.miniplayer) ? void 0 : f2.enabled) || h2),
    O2 = "left" === L2 || "right" === L2,
    $2 = "player" !== k2,
    B2 = $2 && !(D2 && F2),
    U2 = Xr.useRef(null),
    q2 = Xr.useRef(null),
    H2 = z2 && "bottom" === L2 ? 96 : 32;
  let W2, V2;
  p2[4] !== H2 ? (W2 = () => {
    const e3 = U2.current,
      t3 = q2.current;
    if (!e3) return;
    const n3 = () => e3.style.setProperty("--floating-player-clearance", (t3 ? Math.ceil(t3.getBoundingClientRect().height) + H2 - 8 : 0) + "px");
    if (n3(), !t3) return;
    const a3 = new ResizeObserver(n3);
    return a3.observe(t3), () => a3.disconnect();
  }, p2[4] = H2, p2[5] = W2) : W2 = p2[5], p2[6] !== H2 || p2[7] !== D2 || p2[8] !== F2 ? (V2 = [D2, F2, H2], p2[6] = H2, p2[7] = D2, p2[8] = F2, p2[9] = V2) : V2 = p2[9], Xr.useLayoutEffect(W2, V2);
  const Q2 = F2 && "bottom-full" === A2,
    K2 = F2 && "bottom" === A2,
    G2 = F2 && "top" === A2;
  let X2;
  X2 = "left" !== L2 ? "right" !== L2 ? "bottom" !== L2 ? "left-0 top-0 w-full h-3 md:h-4 lg:h-6 xl:h-12" : "left-0 bottom-0 w-full h-3 md:h-4 lg:h-6 xl:h-12" : "top-0 right-0 h-full w-3 md:w-4 lg:w-6 xl:w-12" : "top-0 left-0 h-full w-3 md:w-4 lg:w-6 xl:w-12";
  const Y2 = X2;
  let J2;
  p2[10] !== k2 || p2[11] !== v2 || p2[12] !== _2 || p2[13] !== b2 || p2[14] !== C2 || p2[15] !== w2 || p2[16] !== K2 || p2[17] !== G2 || p2[18] !== B2 ? (J2 = (e3, t3, n3) => {
    const a3 = void 0 === n3 ? "" : n3;
    return Gr.jsxs("div", {
      className: x("flex-1 flex flex-col overflow-hidden min-w-0", e3),
      children: [G2 && Gr.jsxs("div", {
        className: "flex-shrink-0 flex flex-col gap-1 pb-1",
        children: [B2 && Gr.jsx("div", {
          children: w2
        }), Gr.jsx("div", {
          className: "contents",
          children: b2
        })]
      }), Gr.jsx(lu, {}), Gr.jsxs("div", {
        className: "relative flex-1 min-h-0 min-w-0 flex overflow-hidden",
        children: [Gr.jsx("div", {
          className: x("flex-1 min-h-0 min-w-0 flex", a3),
          children: Gr.jsx("div", {
            className: x("tab-shell flex-1 min-h-0 min-w-0 overflow-hidden", "player" !== k2 && "[container-type:inline-size] [container-name:page]", t3, _2 && "pointer-events-none"),
            children: v2
          })
        }), C2]
      }), K2 ? Gr.jsxs("div", {
        className: "flex-shrink-0 flex flex-col gap-1 pt-0.5",
        children: [B2 && Gr.jsx("div", {
          children: w2
        }), Gr.jsx("div", {
          className: "contents",
          children: b2
        })]
      }) : B2 && !G2 && Gr.jsx("div", {
        className: "flex-shrink-0 pt-0.5",
        children: w2
      })]
    });
  }, p2[10] = k2, p2[11] = v2, p2[12] = _2, p2[13] = b2, p2[14] = C2, p2[15] = w2, p2[16] = K2, p2[17] = G2, p2[18] = B2, p2[19] = J2) : J2 = p2[19];
  const Z2 = J2;
  let ee2;
  p2[20] !== z2 || p2[21] !== D2 || p2[22] !== b2 || p2[23] !== w2 || p2[24] !== F2 || p2[25] !== $2 || p2[26] !== L2 ? (ee2 = D2 && F2 ? Gr.jsxs("div", {
    ref: q2,
    className: x("floating-miniplayer fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[720px] lg:max-w-[860px] xl:max-w-[1000px] 2xl:max-w-[1150px] flex flex-col gap-1.5 transition-all duration-300 ease-in-out pointer-events-auto", z2 && "bottom" === L2 ? "bottom-24" : "bottom-8"),
    children: [$2 && Gr.jsx("div", {
      children: w2
    }), Gr.jsx("div", {
      children: b2
    })]
  }) : null, p2[20] = z2, p2[21] = D2, p2[22] = b2, p2[23] = w2, p2[24] = F2, p2[25] = $2, p2[26] = L2, p2[27] = ee2) : ee2 = p2[27];
  const te2 = ee2;
  let ne2;
  ne2 = "left" !== L2 ? "right" !== L2 ? "bottom" !== L2 ? "flex-col" : "flex-col-reverse" : "flex-row-reverse" : "flex-row";
  const ae2 = ne2;
  let re2;
  p2[28] !== Q2 || p2[29] !== b2 || p2[30] !== I2 || p2[31] !== w2 || p2[32] !== $2 ? (re2 = Q2 ? Gr.jsx("div", {
    className: "w-full flex-shrink-0 z-50",
    children: "pill" === I2 ? Gr.jsxs("div", {
      className: "px-3 pb-2 pt-1 bg-transparent",
      children: [$2 && Gr.jsx("div", {
        className: "pb-1",
        children: w2
      }), Gr.jsx("div", {
        className: "contents",
        children: b2
      })]
    }) : Gr.jsxs("div", {
      className: "shell miniplayer-shell w-full",
      children: [$2 && Gr.jsx("div", {
        className: "px-2 pt-1",
        children: w2
      }), Gr.jsx("div", {
        className: "contents",
        children: b2
      })]
    })
  }) : null, p2[28] = Q2, p2[29] = b2, p2[30] = I2, p2[31] = w2, p2[32] = $2, p2[33] = re2) : re2 = p2[33];
  const se2 = re2;
  let ie2, oe2, le2, ce2;
  p2[34] !== P2 || p2[35] !== Y2 || p2[36] !== j2 || p2[37] !== S2 ? (ie2 = P2 && !j2 && Gr.jsx("div", {
    className: x("fixed z-[70] pointer-events-auto opacity-0", Y2),
    onMouseEnter: () => S2(true)
  }), p2[34] = P2, p2[35] = Y2, p2[36] = j2, p2[37] = S2, p2[38] = ie2) : ie2 = p2[38], p2[39] === Symbol.for("react.memo_cache_sentinel") ? (oe2 = x("flex-1 flex flex-col min-h-0"), p2[39] = oe2) : oe2 = p2[39], p2[40] !== ae2 ? (le2 = x("flex-1 flex items-stretch min-h-0 gap-2 px-2 pt-2 pb-2", ae2), p2[40] = ae2, p2[41] = le2) : le2 = p2[41], p2[42] !== P2 || p2[43] !== z2 || p2[44] !== O2 || p2[45] !== j2 || p2[46] !== S2 || p2[47] !== g2 || p2[48] !== L2 || p2[49] !== E2 ? (ce2 = !z2 && Gr.jsx(Jr.div, {
    initial: false,
    animate: {
      width: O2 ? P2 ? j2 ? 64 : 0 : 64 : "auto",
      height: O2 ? void 0 : P2 ? j2 ? 64 : 0 : 64,
      opacity: P2 ? j2 ? 1 : 0 : 1
    },
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 32
    },
    className: x("flex-shrink-0 overflow-hidden", O2 ? "h-full" : "w-full"),
    onMouseLeave: P2 ? () => S2(false) : void 0,
    children: g2
  }, `tabs-${E2}-${L2}`), p2[42] = P2, p2[43] = z2, p2[44] = O2, p2[45] = j2, p2[46] = S2, p2[47] = g2, p2[48] = L2, p2[49] = E2, p2[50] = ce2) : ce2 = p2[50];
  const ue2 = O2 && "h-full";
  let de2, me2, fe2, he2;
  p2[51] !== ue2 ? (de2 = x("flex-1 min-h-0 min-w-0 flex flex-col gap-2", ue2), p2[51] = ue2, p2[52] = de2) : de2 = p2[52], p2[53] !== Z2 ? (me2 = Z2("", "", "tabs-frame"), p2[53] = Z2, p2[54] = me2) : me2 = p2[54], p2[55] !== de2 || p2[56] !== me2 ? (fe2 = Gr.jsx("div", {
    className: de2,
    children: me2
  }), p2[55] = de2, p2[56] = me2, p2[57] = fe2) : fe2 = p2[57], p2[58] !== le2 || p2[59] !== ce2 || p2[60] !== fe2 ? (he2 = Gr.jsxs("div", {
    className: le2,
    children: [ce2, fe2]
  }), p2[58] = le2, p2[59] = ce2, p2[60] = fe2, p2[61] = he2) : he2 = p2[61];
  const pe2 = z2 && g2;
  let ge2, ve2;
  return p2[62] !== k2 || p2[63] !== N2 || p2[64] !== he2 || p2[65] !== pe2 ? (ge2 = Gr.jsxs(zf, {
    className: oe2,
    value: k2,
    onValueChange: N2,
    children: [he2, pe2]
  }), p2[62] = k2, p2[63] = N2, p2[64] = he2, p2[65] = pe2, p2[66] = ge2) : ge2 = p2[66], p2[67] !== se2 || p2[68] !== te2 || p2[69] !== ie2 || p2[70] !== ge2 ? (ve2 = Gr.jsx(Uf, {
    children: Gr.jsx(tu, {
      children: Gr.jsxs("div", {
        ref: U2,
        "data-chrome-plane": true,
        className: "relative h-full flex flex-col",
        children: [ie2, ge2, se2, te2]
      })
    })
  }), p2[67] = se2, p2[68] = te2, p2[69] = ie2, p2[70] = ge2, p2[71] = ve2) : ve2 = p2[71], ve2;
});
function Vf(e2) {
  const t2 = Kr.c(26),
    {
      open: n2,
      width: a2,
      side: r2,
      title: s2,
      children: i2,
      className: o2
    } = e2,
    l2 = void 0 === r2 ? "right" : r2,
    c2 = (u2 = void 0 === a2 ? 400 : a2, Math.max(280, Math.min(Bt, u2)));
  var u2;
  const d2 = !n2,
    m2 = !n2,
    f2 = "left" === l2 ? "left-0 before:right-0" : "right-0 before:left-0";
  let h2;
  t2[0] !== n2 || t2[1] !== l2 || t2[2] !== f2 ? (h2 = x("absolute inset-y-0 z-30 h-full overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:w-2 before:bg-[var(--bg-canvas)] transition-[transform,visibility] duration-300 ease-gentle motion-reduce:transition-none [.no-animations_&]:transition-none", f2, n2 ? "visible translate-x-0 pointer-events-auto" : x("invisible pointer-events-none", "left" === l2 ? "-translate-x-full" : "translate-x-full")), t2[0] = n2, t2[1] = l2, t2[2] = f2, t2[3] = h2) : h2 = t2[3];
  const p2 = `min(${c2 + 8}px, 100%)`;
  let g2;
  t2[4] !== p2 ? (g2 = {
    width: p2
  }, t2[4] = p2, t2[5] = g2) : g2 = t2[5];
  const v2 = "left" === l2 ? "left-0 mr-2" : "right-0 ml-2";
  let y2, b2, w2, k2, j2, S2, N2;
  return t2[6] !== o2 || t2[7] !== v2 ? (y2 = x("tabs-wrapper absolute inset-y-0 z-30 h-full flex flex-col overflow-hidden", v2, o2), t2[6] = o2, t2[7] = v2, t2[8] = y2) : y2 = t2[8], t2[9] === Symbol.for("react.memo_cache_sentinel") ? (b2 = {
    width: "calc(100% - 8px)",
    borderRadius: "var(--radius-card)"
  }, t2[9] = b2) : b2 = t2[9], t2[10] !== s2 ? (w2 = s2 && Gr.jsx("div", {
    className: "h-11 px-3 flex items-center justify-between border-b border-border-subtle",
    children: Gr.jsx("div", {
      className: "text-sm font-medium truncate",
      children: s2
    })
  }), t2[10] = s2, t2[11] = w2) : w2 = t2[11], t2[12] !== i2 ? (k2 = Gr.jsx("div", {
    className: "min-h-0 flex-1 overflow-hidden rounded-[inherit] p-1.5",
    children: Gr.jsx("div", {
      className: "h-full min-h-0 overflow-hidden rounded-[calc(var(--radius-card)-6px)]",
      children: i2
    })
  }), t2[12] = i2, t2[13] = k2) : k2 = t2[13], t2[14] !== w2 || t2[15] !== k2 ? (j2 = Gr.jsxs("div", {
    className: "flex h-full min-h-0 flex-col",
    children: [w2, k2]
  }), t2[14] = w2, t2[15] = k2, t2[16] = j2) : j2 = t2[16], t2[17] !== y2 || t2[18] !== j2 ? (S2 = Gr.jsx("div", {
    className: y2,
    style: b2,
    children: j2
  }), t2[17] = y2, t2[18] = j2, t2[19] = S2) : S2 = t2[19], t2[20] !== S2 || t2[21] !== d2 || t2[22] !== m2 || t2[23] !== h2 || t2[24] !== g2 ? (N2 = Gr.jsx("aside", {
    "aria-hidden": d2,
    inert: m2,
    className: h2,
    style: g2,
    children: S2
  }), t2[20] = S2, t2[21] = d2, t2[22] = m2, t2[23] = h2, t2[24] = g2, t2[25] = N2) : N2 = t2[25], N2;
}
async function mh(e2, t2) {
  if (e2) try {
    const n2 = await Xt.trackSettings.get(e2),
      a2 = Math.round(1e3 * t2) / 1e3;
    n2 ? await Xt.trackSettings.update(e2, {
      lyricsOffset: a2,
      timestamp: Date.now()
    }) : await Xt.trackSettings.put({
      trackId: e2,
      lyricsOffset: a2,
      timestamp: Date.now()
    }), window.dispatchEvent(new CustomEvent("track-remember-changed", {
      detail: {
        trackId: e2,
        type: "lyricsOffset"
      }
    }));
  } catch (n2) {
    throw a.error("database", `Failed to save lyrics offset for track ${e2}:`, n2), n2;
  }
}
async function fh(e2, t2) {
  var n2, r2, s2;
  if (e2) try {
    const a2 = await ch(e2),
      i2 = u.getState(),
      o2 = null != (r2 = null != (n2 = null == a2 ? void 0 : a2.speed) ? n2 : i2.userSpeed) ? r2 : 1;
    if (i2.setPlaybackSpeed(o2), t2) for (const e3 of t2) e3 && (e3.preservesPitch = false, e3.playbackRate = o2);
    mi.getState().applyTrackEqualizer(null != (s2 = null == a2 ? void 0 : a2.equalizer) ? s2 : null);
  } catch (i2) {
    a.warn("database", "Error applying track settings:", i2);
  }
}
async function hh(e2) {
  await Xt.trackSettings.clear(), e2 && (window.dispatchEvent(new CustomEvent("track-remember-changed", {
    detail: {
      trackId: e2,
      type: "all"
    }
  })), await fh(e2));
}
const np = () => {
    const e2 = Kr.c(1);
    let t2;
    return e2[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = Gr.jsx("div", {
      "data-page-loading": true,
      className: "h-full w-full"
    }), e2[0] = t2) : t2 = e2[0], t2;
  },
  ap = Xr.memo(function (e2) {
    const t2 = Kr.c(18),
      {
        value: n2,
        activeTab: a2,
        className: r2,
        children: s2,
        keepAlive: i2,
        mountWith: o2,
        pauseHidden: l2
      } = e2,
      c2 = void 0 === i2 || i2,
      u2 = void 0 !== o2 && o2,
      d2 = void 0 !== l2 && l2,
      [m2, f2] = Qr.useState(n2 === a2 || u2);
    let h2, p2;
    if (t2[0] !== a2 || t2[1] !== u2 || t2[2] !== n2 ? (h2 = () => {
      (n2 === a2 || u2) && f2(true);
    }, p2 = [a2, n2, u2], t2[0] = a2, t2[1] = u2, t2[2] = n2, t2[3] = h2, t2[4] = p2) : (h2 = t2[3], p2 = t2[4]), Qr.useEffect(h2, p2), !m2) return null;
    const g2 = n2 === a2;
    if (!c2 && !g2) return null;
    const v2 = !g2 && "hidden";
    let y2;
    t2[5] !== r2 || t2[6] !== v2 ? (y2 = x(r2, v2), t2[5] = r2, t2[6] = v2, t2[7] = y2) : y2 = t2[7];
    const b2 = !d2 || g2 ? "visible" : "hidden";
    let w2, k2, j2, S2;
    return t2[8] === Symbol.for("react.memo_cache_sentinel") ? (w2 = Gr.jsx(np, {}), t2[8] = w2) : w2 = t2[8], t2[9] !== s2 ? (k2 = Gr.jsx(Qr.Suspense, {
      fallback: w2,
      children: s2
    }), t2[9] = s2, t2[10] = k2) : k2 = t2[10], t2[11] !== k2 || t2[12] !== b2 ? (j2 = Gr.jsx(Qr.Activity, {
      mode: b2,
      children: k2
    }), t2[11] = k2, t2[12] = b2, t2[13] = j2) : j2 = t2[13], t2[14] !== j2 || t2[15] !== y2 || t2[16] !== n2 ? (S2 = Gr.jsx(Of, {
      value: n2,
      className: y2,
      animation: "none",
      forceMount: true,
      children: j2
    }), t2[14] = j2, t2[15] = y2, t2[16] = n2, t2[17] = S2) : S2 = t2[17], S2;
  }),
  op = Qr.createContext(null),
  lp = Qr.createContext(null);
function dp(e2) {
  return e2.isPlaying;
}
function Sp(e2) {
  return e2.target;
}
function Np(e2) {
  return e2.controllingDevice;
}
const _p = ["popular", "recent", "releases", "similar", "for_you", "niche", "mixes", "overplayed"],
  Cp = () => {
    const e2 = Kr.c(1);
    let t2;
    return e2[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = Gr.jsx("div", {
      className: "w-[1px] h-3 bg-border/40 shrink-0 mx-1.5 self-center"
    }), e2[0] = t2) : t2 = e2[0], t2;
  },
  Tp = e2 => {
    var t2, n2;
    const a2 = Kr.c(14),
      {
        crumb: r2
      } = e2;
    if ("cover" === r2.type) {
      let e3, t3, n3;
      return a2[0] !== r2.shape ? (e3 = x("relative h-6 w-6 overflow-hidden border border-border/20 shrink-0 select-none transition-all duration-300", r2.shape), a2[0] = r2.shape, a2[1] = e3) : e3 = a2[1], a2[2] !== r2.cover ? (t3 = Gr.jsx(N, {
        src: r2.cover,
        title: "",
        size: 24,
        className: "h-6 w-6 object-cover",
        type: "track"
      }), a2[2] = r2.cover, a2[3] = t3) : t3 = a2[3], a2[4] !== e3 || a2[5] !== t3 ? (n3 = Gr.jsx("div", {
        className: e3,
        children: t3
      }), a2[4] = e3, a2[5] = t3, a2[6] = n3) : n3 = a2[6], n3;
    }
    if ("icon" === r2.type) {
      const {
          Icon: e3
        } = r2,
        n3 = null != (t2 = r2.className) ? t2 : "h-4 w-4";
      let s3;
      return a2[7] !== e3 || a2[8] !== n3 ? (s3 = Gr.jsx(e3, {
        className: n3
      }), a2[7] = e3, a2[8] = n3, a2[9] = s3) : s3 = a2[9], s3;
    }
    const s2 = null != (n2 = r2.maxW) ? n2 : "w-auto";
    let i2;
    return a2[10] !== r2.className || a2[11] !== r2.text || a2[12] !== s2 ? (i2 = Gr.jsx("div", {
      className: "min-w-0 shrink truncate pr-1",
      children: Gr.jsx(Qs, {
        text: r2.text,
        playOnHover: true,
        durationSec: 10,
        gapClassName: "ml-4",
        containerClassName: s2,
        className: r2.className
      })
    }), a2[10] = r2.className, a2[11] = r2.text, a2[12] = s2, a2[13] = i2) : i2 = a2[13], i2;
  },
  Ep = Xr.memo(function (e2) {
    var t2, n2, a2, r2, s2;
    const i2 = Kr.c(118),
      o2 = u(Lp),
      l2 = u(Ap),
      c2 = u(Pp),
      d2 = u(Ip),
      m2 = u(Mp),
      f2 = function () {
        const e3 = Kr.c(3),
          t3 = ae(Np),
          n3 = se(Sp);
        let a3;
        return e3[0] !== t3 || e3[1] !== n3 ? (a3 = n3 && !n3.isCurrent ? {
          deviceName: n3.name,
          clientType: n3.clientType
        } : t3, e3[0] = t3, e3[1] = n3, e3[2] = a3) : a3 = e3[2], a3;
      }();
    let h2;
    i2[0] !== (null == o2 ? void 0 : o2.fromplaylist) ? (h2 = e3 => {
      var t3;
      return null == (t3 = e3.playlists.find(e4 => e4.title === (null == o2 ? void 0 : o2.fromplaylist))) ? void 0 : t3.cover_art;
    }, i2[0] = null == o2 ? void 0 : o2.fromplaylist, i2[1] = h2) : h2 = i2[1];
    const p2 = C(h2),
      g2 = null != (t2 = e2.songsCount) ? t2 : 0,
      v2 = null != (n2 = e2.upcomingCount) ? n2 : 0,
      y2 = u(Rp),
      b2 = e2.onClear,
      w2 = null != (a2 = e2.compact) && a2,
      k2 = null == (r2 = e2.showClear) || r2,
      j2 = e2.className,
      {
        t: S2
      } = P(),
      N2 = oi(zp),
      T2 = null != m2 ? m2 : "",
      E2 = "artist" === T2 || T2.endsWith(".artist"),
      L2 = !!(l2 || (null == o2 ? void 0 : o2.fromplaylist) || f2),
      I2 = E2 || "profile" === T2 ? "rounded-full" : "rounded-lg",
      M2 = w2 ? "text-caption font-medium text-primary/85" : "text-callout font-medium text-primary",
      R2 = w2 ? "text-caption font-medium text-foreground" : "text-callout font-medium text-foreground";
    let z2;
    i2[2] !== (null == o2 ? void 0 : o2.fromplaylist) || i2[3] !== p2 ? (z2 = () => {
      if (!(null == o2 ? void 0 : o2.fromplaylist)) return null;
      const e3 = p2;
      return e3 && "string" == typeof e3 && "" !== e3.trim() ? e3 : null;
    }, i2[2] = null == o2 ? void 0 : o2.fromplaylist, i2[3] = p2, i2[4] = z2) : z2 = i2[4];
    const D2 = z2;
    let F2;
    i2[5] !== T2 ? (F2 = dn(T2), i2[5] = T2, i2[6] = F2) : F2 = i2[6];
    const O2 = F2,
      $2 = "search" === T2 || "mix" === T2 ? null == o2 ? void 0 : o2.cover_art : null,
      B2 = c2 || $2 || null;
    let U2, q2, H2, W2, V2, Q2, K2, G2, X2, Y2, J2, Z2, ee2, te2, ne2, re2, ie2;
    if (i2[7] !== M2 || i2[8] !== j2 || i2[9] !== w2 || i2[10] !== f2 || i2[11] !== I2 || i2[12] !== o2 || i2[13] !== B2 || i2[14] !== L2 || i2[15] !== N2 || i2[16] !== R2 || i2[17] !== e2.pillClassName || i2[18] !== e2.stretch || i2[19] !== l2 || i2[20] !== d2 || i2[21] !== D2 || i2[22] !== k2 || i2[23] !== g2 || i2[24] !== S2 || i2[25] !== T2 || i2[26] !== O2) {
      const t3 = T2.startsWith("wave");
      let n3;
      U2 = t3 && null !== N2;
      e: {
        if (f2) {
          const e4 = "mobile" === f2.clientType ? mn : "desktop" === f2.clientType ? fn : _.globe;
          let t4;
          i2[35] !== e4 ? (t4 = {
            type: "icon",
            Icon: e4,
            className: "h-4 w-4"
          }, i2[35] = e4, i2[36] = t4) : t4 = i2[36], n3 = t4;
          break e;
        }
        if (B2) {
          let e4;
          i2[37] !== I2 || i2[38] !== B2 ? (e4 = {
            type: "cover",
            cover: B2,
            shape: I2
          }, i2[37] = I2, i2[38] = B2, i2[39] = e4) : e4 = i2[39], n3 = e4;
          break e;
        }
        if ((null == o2 ? void 0 : o2.fromplaylist) === S2("library.favorites.title")) {
          let e4;
          i2[40] === Symbol.for("react.memo_cache_sentinel") ? (e4 = {
            type: "icon",
            Icon: _.like,
            className: "h-4 w-4"
          }, i2[40] = e4) : e4 = i2[40], n3 = e4;
          break e;
        }
        if ((null == o2 ? void 0 : o2.fromplaylist) === S2("library.offline.title")) {
          let e4;
          i2[41] === Symbol.for("react.memo_cache_sentinel") ? (e4 = {
            type: "icon",
            Icon: _.download,
            className: "h-4 w-4"
          }, i2[41] = e4) : e4 = i2[41], n3 = e4;
          break e;
        }
        let e3;
        i2[42] !== D2 ? (e3 = D2(), i2[42] = D2, i2[43] = e3) : e3 = i2[43];
        const a4 = e3;
        if ((null == o2 ? void 0 : o2.fromplaylist) && a4) {
          let e4;
          i2[44] !== I2 || i2[45] !== a4 ? (e4 = {
            type: "cover",
            cover: a4,
            shape: I2
          }, i2[44] = I2, i2[45] = a4, i2[46] = e4) : e4 = i2[46], n3 = e4;
          break e;
        }
        if ("mix" === T2 && (null == o2 ? void 0 : o2.cover_art)) {
          let e4;
          i2[47] !== I2 || i2[48] !== o2.cover_art ? (e4 = {
            type: "cover",
            cover: o2.cover_art,
            shape: I2
          }, i2[47] = I2, i2[48] = o2.cover_art, i2[49] = e4) : e4 = i2[49], n3 = e4;
          break e;
        }
        const r4 = "h-4 w-4 " + (t3 ? "text-primary" : "");
        let s3;
        i2[50] !== r4 || i2[51] !== O2 ? (s3 = {
          type: "icon",
          Icon: O2,
          className: r4
        }, i2[50] = r4, i2[51] = O2, i2[52] = s3) : s3 = i2[52], n3 = s3;
      }
      const a3 = n3;
      let r3;
      i2[53] !== f2 || i2[54] !== o2 || i2[55] !== l2 || i2[56] !== g2 || i2[57] !== S2 ? (r3 = f2 ? f2.deviceName : l2 || ((null == o2 ? void 0 : o2.fromplaylist) === S2("library.favorites.title") ? S2("player.queue.favorites_playlist") : (null == o2 ? void 0 : o2.fromplaylist) === S2("library.offline.title") ? S2("library.offline.title") : (null == o2 ? void 0 : o2.fromplaylist) ? o2.fromplaylist : S2(0 === g2 ? "player.queue.empty_queue" : "player.queue.track_queue")), i2[53] = f2, i2[54] = o2, i2[55] = l2, i2[56] = g2, i2[57] = S2, i2[58] = r3) : r3 = i2[58];
      const c3 = r3,
        u2 = "search" === T2;
      let m3;
      e: {
        if (f2) {
          const e4 = w2 ? "w-auto max-w-[120px]" : "w-auto max-w-[148px]";
          let t4;
          i2[59] !== M2 || i2[60] !== e4 || i2[61] !== c3 ? (t4 = {
            type: "text",
            text: c3,
            className: M2,
            maxW: e4
          }, i2[59] = M2, i2[60] = e4, i2[61] = c3, i2[62] = t4) : t4 = i2[62], m3 = [t4];
          break e;
        }
        if (u2) {
          let e4;
          i2[63] === Symbol.for("react.memo_cache_sentinel") ? (e4 = {
            type: "icon",
            Icon: _.search,
            className: "h-4 w-4 text-primary"
          }, i2[63] = e4) : e4 = i2[63], m3 = [e4];
          break e;
        }
        if (t3 && d2) {
          let e4;
          i2[64] === Symbol.for("react.memo_cache_sentinel") ? (e4 = {
            type: "icon",
            Icon: _.wave,
            className: "h-4 w-4 text-primary"
          }, i2[64] = e4) : e4 = i2[64], m3 = [e4];
          break e;
        }
        const e3 = [];
        if (["album", "playlist", "mix", ..._p].includes(T2) && ("icon" !== a3.type || a3.Icon !== O2)) {
          let t4;
          i2[65] !== O2 ? (t4 = {
            type: "icon",
            Icon: O2,
            className: "h-4 w-4"
          }, i2[65] = O2, i2[66] = t4) : t4 = i2[66], e3.push(t4);
        }
        let n4;
        i2[67] !== M2 || i2[68] !== w2 || i2[69] !== L2 || i2[70] !== R2 || i2[71] !== d2 || i2[72] !== c3 ? (n4 = d2 ? {
          type: "text",
          text: c3,
          className: M2,
          maxW: w2 ? "w-auto max-w-[120px]" : "w-auto max-w-[148px]"
        } : {
          type: "text",
          text: c3,
          className: L2 ? M2 : R2,
          maxW: w2 ? "w-auto max-w-[120px]" : "w-auto max-w-[148px]"
        }, i2[67] = M2, i2[68] = w2, i2[69] = L2, i2[70] = R2, i2[71] = d2, i2[72] = c3, i2[73] = n4) : n4 = i2[73], e3.push(n4), m3 = e3;
      }
      if (G2 = m3, d2) {
        const e3 = w2 ? "w-auto max-w-[140px]" : "w-auto max-w-[180px]";
        let t4;
        i2[74] !== R2 || i2[75] !== d2 || i2[76] !== e3 ? (t4 = {
          type: "text",
          text: d2,
          className: R2,
          maxW: e3
        }, i2[74] = R2, i2[75] = d2, i2[76] = e3, i2[77] = t4) : t4 = i2[77], G2.push(t4);
      }
      const h3 = w2 ? "relative flex items-center pl-2 pr-2.5 py-0.5 rounded-full border border-border-subtle min-w-0 mr-2 justify-start w-auto h-8" : "relative flex items-center pl-2.5 pr-3 py-1 rounded-full border border-border-subtle min-w-0 mr-3 justify-start w-auto h-9";
      q2 = null != (s2 = e2.stretch) && s2, i2[78] !== j2 ? (Q2 = x("flex justify-between items-center mb-1 relative z-30 group", j2), i2[78] = j2, i2[79] = Q2) : Q2 = i2[79];
      const p3 = q2 && "mr-0 w-full flex-1";
      i2[80] !== h3 || i2[81] !== e2.pillClassName || i2[82] !== p3 ? (V2 = x(h3, p3, e2.pillClassName), i2[80] = h3, i2[81] = e2.pillClassName, i2[82] = p3, i2[83] = V2) : V2 = i2[83], W2 = "relative shrink-0 group/cover", H2 = x("relative h-6 w-6 flex items-center justify-center shrink-0 select-none transition-transform duration-500 ease-out", L2 ? "text-primary" : "text-foreground/50", U2 && "scale-125 text-primary", k2 && g2 > 0 && "group-hover/cover:opacity-0"), K2 = Gr.jsx(Tp, {
        crumb: a3
      }), i2[7] = M2, i2[8] = j2, i2[9] = w2, i2[10] = f2, i2[11] = I2, i2[12] = o2, i2[13] = B2, i2[14] = L2, i2[15] = N2, i2[16] = R2, i2[17] = e2.pillClassName, i2[18] = e2.stretch, i2[19] = l2, i2[20] = d2, i2[21] = D2, i2[22] = k2, i2[23] = g2, i2[24] = S2, i2[25] = T2, i2[26] = O2, i2[27] = U2, i2[28] = q2, i2[29] = H2, i2[30] = W2, i2[31] = V2, i2[32] = Q2, i2[33] = K2, i2[34] = G2;
    } else U2 = i2[27], q2 = i2[28], H2 = i2[29], W2 = i2[30], V2 = i2[31], Q2 = i2[32], K2 = i2[33], G2 = i2[34];
    return i2[84] !== H2 || i2[85] !== K2 ? (X2 = Gr.jsx("div", {
      className: H2,
      children: K2
    }), i2[84] = H2, i2[85] = K2, i2[86] = X2) : X2 = i2[86], i2[87] !== I2 || i2[88] !== b2 || i2[89] !== k2 || i2[90] !== g2 ? (Y2 = k2 && g2 > 0 && Gr.jsx(A, {
      type: "button",
      variant: "ghost",
      size: "icon-2xs",
      onClick: b2,
      className: x("absolute inset-0 flex text-foreground/70 hover:text-foreground opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200 rounded-[inherit]", I2),
      children: Gr.jsx(_.delete, {
        className: "h-4 w-4"
      })
    }), i2[87] = I2, i2[88] = b2, i2[89] = k2, i2[90] = g2, i2[91] = Y2) : Y2 = i2[91], i2[92] !== W2 || i2[93] !== X2 || i2[94] !== Y2 ? (J2 = Gr.jsxs("div", {
      className: W2,
      children: [X2, Y2]
    }), i2[92] = W2, i2[93] = X2, i2[94] = Y2, i2[95] = J2) : J2 = i2[95], i2[96] === Symbol.for("react.memo_cache_sentinel") ? (Z2 = Gr.jsx(Cp, {}), i2[96] = Z2) : Z2 = i2[96], i2[97] !== G2 ? (ee2 = G2.map(Dp), i2[97] = G2, i2[98] = ee2) : ee2 = i2[98], i2[99] !== U2 || i2[100] !== y2 || i2[101] !== q2 || i2[102] !== v2 ? (te2 = (y2 || v2 > 0 || U2) && (q2 ? Gr.jsx("div", {
      className: "flex-1"
    }) : Gr.jsx(Cp, {})), i2[99] = U2, i2[100] = y2, i2[101] = q2, i2[102] = v2, i2[103] = te2) : te2 = i2[103], i2[104] !== U2 || i2[105] !== y2 || i2[106] !== N2 || i2[107] !== v2 ? (ne2 = (y2 || v2 > 0 || U2) && Gr.jsx("div", {
      className: "relative flex items-center justify-center min-w-[18px] h-[18px] px-1.5 bg-primary text-primary-foreground rounded-full select-none leading-3 self-center cursor-default transition-all duration-300 group/badge overflow-hidden shrink-0",
      children: U2 ? Gr.jsxs("span", {
        className: "text-micro font-medium leading-3 animate-in fade-in zoom-in-75 duration-300",
        children: ["+", N2]
      }) : y2 ? Gr.jsxs(Gr.Fragment, {
        children: [Gr.jsx("div", {
          className: x("flex items-center justify-center transition-all duration-300 ease-in-out", v2 > 0 && "group-hover/badge:opacity-0 group-hover/badge:scale-75 group-hover:opacity-0 group-hover:scale-75"),
          children: Gr.jsx(_.shuffle, {
            className: "h-3 w-3"
          })
        }), v2 > 0 && Gr.jsx("div", {
          className: "absolute inset-0 flex items-center justify-center opacity-0 scale-75 group-hover/badge:opacity-100 group-hover/badge:scale-100 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out text-micro font-medium leading-3 px-1",
          children: v2
        })]
      }) : Gr.jsx("span", {
        className: "text-micro font-medium leading-3",
        children: v2
      })
    }), i2[104] = U2, i2[105] = y2, i2[106] = N2, i2[107] = v2, i2[108] = ne2) : ne2 = i2[108], i2[109] !== J2 || i2[110] !== ee2 || i2[111] !== te2 || i2[112] !== ne2 || i2[113] !== V2 ? (re2 = Gr.jsxs("div", {
      className: V2,
      children: [J2, Z2, ee2, te2, ne2]
    }), i2[109] = J2, i2[110] = ee2, i2[111] = te2, i2[112] = ne2, i2[113] = V2, i2[114] = re2) : re2 = i2[114], i2[115] !== re2 || i2[116] !== Q2 ? (ie2 = Gr.jsx("div", {
      className: Q2,
      children: re2
    }), i2[115] = re2, i2[116] = Q2, i2[117] = ie2) : ie2 = i2[117], ie2;
  });
function Lp(e2) {
  return e2.currentSong;
}
function Ap(e2) {
  return e2.queueName;
}
function Pp(e2) {
  return e2.queueCover;
}
function Ip(e2) {
  return e2.queueSubtitle;
}
function Mp(e2) {
  return e2.queueType;
}
function Rp(e2) {
  return e2.isShuffled;
}
function zp(e2) {
  return e2.lastRefillCount;
}
function Dp(e2, t2) {
  return Gr.jsxs(Xr.Fragment, {
    children: [t2 > 0 && Gr.jsx(Cp, {}), Gr.jsx(Tp, {
      crumb: e2
    })]
  }, t2);
}
const Fp = Qr.createContext({}),
  Op = Fp.Provider;
const $p = Qr.forwardRef((e2, t2) => {
  const n2 = Kr.c(9);
  let a2, r2, s2, i2;
  return n2[0] !== e2 ? ({
    className: a2,
    ...r2
  } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2) : (a2 = n2[1], r2 = n2[2]), n2[3] !== a2 ? (s2 = x("card transition-all duration-300", a2), n2[3] = a2, n2[4] = s2) : s2 = n2[4], n2[5] !== r2 || n2[6] !== t2 || n2[7] !== s2 ? (i2 = Gr.jsx("div", {
    ref: t2,
    className: s2,
    ...r2
  }), n2[5] = r2, n2[6] = t2, n2[7] = s2, n2[8] = i2) : i2 = n2[8], i2;
});
const Bp = Qr.forwardRef((e2, t2) => {
  const n2 = Kr.c(9);
  let a2, r2, s2, i2;
  return n2[0] !== e2 ? ({
    className: a2,
    ...r2
  } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2) : (a2 = n2[1], r2 = n2[2]), n2[3] !== a2 ? (s2 = x("p-6 pt-0", a2), n2[3] = a2, n2[4] = s2) : s2 = n2[4], n2[5] !== r2 || n2[6] !== t2 || n2[7] !== s2 ? (i2 = Gr.jsx("div", {
    ref: t2,
    className: s2,
    ...r2
  }), n2[5] = r2, n2[6] = t2, n2[7] = s2, n2[8] = i2) : i2 = n2[8], i2;
});
const Up = Qr.createContext(null);
function qp(e2) {
  const t2 = Kr.c(3),
    n2 = Qr.useContext(Up);
  let a2;
  return t2[0] !== e2 || t2[1] !== (null == n2 ? void 0 : n2.current) ? (a2 = t3 => {
    (null == n2 ? void 0 : n2.current) && t3.preventDefault(), null == e2 || e2(t3);
  }, t2[0] = e2, t2[1] = null == n2 ? void 0 : n2.current, t2[2] = a2) : a2 = t2[2], a2;
}
function Hp(e2, t2, n2 = false) {
  const [a2, r2] = Qr.useState({
      open: n2,
      revision: 0,
      awaitingNavigationReset: false
    }),
    s2 = Qr.useRef(e2),
    i2 = Qr.useRef(false);
  s2.current = e2;
  const o2 = null != t2 ? t2 : a2.open;
  Qr.useLayoutEffect(() => {
    if (o2 || a2.awaitingNavigationReset) return hn(() => {
      var e3;
      i2.current = true, r2(e4 => ({
        open: false,
        revision: e4.revision + 1,
        awaitingNavigationReset: false
      })), null == (e3 = s2.current) || e3.call(s2, false);
    });
  }, [o2, a2.awaitingNavigationReset]);
  const l2 = Qr.useCallback(e3 => {
    var t3;
    e3 && (i2.current = false), r2(t4 => ({
      ...t4,
      open: e3,
      awaitingNavigationReset: !e3
    })), null == (t3 = s2.current) || t3.call(s2, e3);
  }, []);
  return {
    revision: a2.revision,
    onOpenChange: l2,
    navigationCloseRef: i2
  };
}
function Wp(e2) {
  var t2;
  const n2 = Kr.c(8),
    {
      revision: a2,
      onOpenChange: r2,
      navigationCloseRef: s2
    } = Hp(e2.onOpenChange),
    i2 = null != (t2 = e2.modal) && t2;
  let o2, l2;
  return n2[0] !== r2 || n2[1] !== e2 || n2[2] !== a2 || n2[3] !== i2 ? (o2 = Qr.createElement(bs, {
    ...e2,
    modal: i2,
    key: a2,
    onOpenChange: r2
  }), n2[0] = r2, n2[1] = e2, n2[2] = a2, n2[3] = i2, n2[4] = o2) : o2 = n2[4], n2[5] !== s2 || n2[6] !== o2 ? (l2 = Gr.jsx(Up.Provider, {
    value: s2,
    children: o2
  }), n2[5] = s2, n2[6] = o2, n2[7] = l2) : l2 = n2[7], l2;
}
const Vp = ys,
  Qp = Qr.forwardRef((e2, t2) => {
    const n2 = Kr.c(11);
    let a2, r2, s2;
    n2[0] !== e2 ? ({
      className: a2,
      onCloseAutoFocus: r2,
      ...s2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3]);
    const i2 = qp(r2);
    let o2, l2;
    return n2[4] !== a2 ? (o2 = x("z-50 min-w-[8rem] overflow-hidden surface-overlay overlay-motion rounded-[var(--radius-menu)] p-1 context-menu data-[state=closed]:pointer-events-none", a2), n2[4] = a2, n2[5] = o2) : o2 = n2[5], n2[6] !== i2 || n2[7] !== s2 || n2[8] !== t2 || n2[9] !== o2 ? (l2 = Gr.jsx(vs, {
      children: Gr.jsx(xs, {
        ref: t2,
        className: o2,
        ...s2,
        onCloseAutoFocus: i2
      })
    }), n2[6] = i2, n2[7] = s2, n2[8] = t2, n2[9] = o2, n2[10] = l2) : l2 = n2[10], l2;
  });
function Kp(e2) {
  const t2 = Kr.c(17),
    {
      artwork: n2,
      background: a2,
      cover: r2,
      title: s2,
      subtitle: i2,
      meta: o2
    } = e2;
  let l2, c2, u2, d2, m2, f2;
  return t2[0] !== n2 || t2[1] !== a2 ? (l2 = null != a2 ? a2 : n2 ? Gr.jsx("div", {
    className: "cover-banner-art",
    style: {
      backgroundImage: `url(${n2})`
    }
  }) : null, t2[0] = n2, t2[1] = a2, t2[2] = l2) : l2 = t2[2], t2[3] !== i2 ? (c2 = i2 && Gr.jsx("div", {
    className: "mt-0.5 truncate text-footnote text-foreground/60",
    children: i2
  }), t2[3] = i2, t2[4] = c2) : c2 = t2[4], t2[5] !== o2 ? (u2 = o2 && Gr.jsx("div", {
    className: "mt-1 flex min-w-0 flex-wrap items-center gap-x-1.5 text-caption text-foreground/50",
    children: o2
  }), t2[5] = o2, t2[6] = u2) : u2 = t2[6], t2[7] !== c2 || t2[8] !== u2 ? (d2 = Gr.jsxs(Gr.Fragment, {
    children: [c2, u2]
  }), t2[7] = c2, t2[8] = u2, t2[9] = d2) : d2 = t2[9], t2[10] !== r2 || t2[11] !== d2 || t2[12] !== s2 ? (m2 = Gr.jsx("div", {
    className: "relative z-10 px-4 py-3",
    children: Gr.jsx(ao, {
      flush: true,
      dense: true,
      className: "gap-3",
      leading: r2,
      title: s2,
      subtitle: d2
    })
  }), t2[10] = r2, t2[11] = d2, t2[12] = s2, t2[13] = m2) : m2 = t2[13], t2[14] !== l2 || t2[15] !== m2 ? (f2 = Gr.jsxs("div", {
    className: "cover-banner",
    children: [l2, m2]
  }), t2[14] = l2, t2[15] = m2, t2[16] = f2) : f2 = t2[16], f2;
}
const Gp = e2 => {
  const t2 = Kr.c(26),
    {
      icon: n2,
      label: a2,
      onClick: r2,
      active: s2,
      disabled: i2,
      right: o2,
      destructive: l2,
      isLoading: c2,
      groupHoverIcon: u2,
      labelClassName: d2,
      size: m2
    } = e2,
    f2 = void 0 === u2 || u2,
    h2 = i2 || c2 ? void 0 : r2,
    p2 = "sheet" === (void 0 === m2 ? "menu" : m2) ? "min-h-11 gap-3 rounded-xl px-3 py-2.5" : "min-h-8 gap-2.5 rounded-lg px-2.5 py-1.5",
    g2 = l2 ? "text-foreground/80 hover:text-destructive" : s2 ? "text-foreground/90" : "text-foreground/80 hover:text-foreground/95 group-data-[highlighted]/action-item:text-foreground",
    v2 = (i2 || c2) && "opacity-40 pointer-events-none cursor-not-allowed",
    y2 = f2 && "group";
  let b2;
  t2[0] !== p2 || t2[1] !== g2 || t2[2] !== v2 || t2[3] !== y2 ? (b2 = x("group/actions flex min-w-0 items-center text-callout cursor-pointer select-none transition-colors duration-150 active:opacity-80", p2, g2, v2, y2), t2[0] = p2, t2[1] = g2, t2[2] = v2, t2[3] = y2, t2[4] = b2) : b2 = t2[4];
  const w2 = l2 ? "text-foreground/65 group-hover/actions:text-destructive" : s2 ? "text-foreground/90" : f2 ? "text-foreground/65 group-hover/actions:text-foreground/85 group-data-[highlighted]/action-item:text-foreground/85" : "text-foreground/65";
  let k2, j2, S2, N2, _2, C2, T2;
  return t2[5] !== w2 ? (k2 = x("flex size-4 shrink-0 items-center justify-center leading-none transition-colors duration-150 [&_svg]:block [&_svg]:size-4", w2), t2[5] = w2, t2[6] = k2) : k2 = t2[6], t2[7] !== n2 || t2[8] !== c2 ? (j2 = c2 ? Gr.jsx(I, {
    className: "h-4 w-4 animate-spin"
  }) : n2, t2[7] = n2, t2[8] = c2, t2[9] = j2) : j2 = t2[9], t2[10] !== k2 || t2[11] !== j2 ? (S2 = Gr.jsx("span", {
    className: k2,
    children: j2
  }), t2[10] = k2, t2[11] = j2, t2[12] = S2) : S2 = t2[12], t2[13] !== d2 ? (N2 = x("min-w-0 flex-1 leading-5", d2), t2[13] = d2, t2[14] = N2) : N2 = t2[14], t2[15] !== a2 || t2[16] !== N2 ? (_2 = Gr.jsx("span", {
    className: N2,
    children: a2
  }), t2[15] = a2, t2[16] = N2, t2[17] = _2) : _2 = t2[17], t2[18] !== o2 ? (C2 = o2 && Gr.jsx("span", {
    className: "flex size-4 shrink-0 items-center justify-center text-foreground/45 [&_svg]:block [&_svg]:size-3.5",
    children: o2
  }), t2[18] = o2, t2[19] = C2) : C2 = t2[19], t2[20] !== S2 || t2[21] !== _2 || t2[22] !== C2 || t2[23] !== h2 || t2[24] !== b2 ? (T2 = Gr.jsxs("div", {
    onClick: h2,
    className: b2,
    children: [S2, _2, C2]
  }), t2[20] = S2, t2[21] = _2, t2[22] = C2, t2[23] = h2, t2[24] = b2, t2[25] = T2) : T2 = t2[25], T2;
};
function Xp(e2) {
  const t2 = Kr.c(19);
  let n2, a2, r2, s2, i2, o2;
  t2[0] !== e2 ? ({
    menu: i2,
    keepOpen: o2,
    onClick: r2,
    disabled: n2,
    isLoading: a2,
    ...s2
  } = e2, t2[0] = e2, t2[1] = n2, t2[2] = a2, t2[3] = r2, t2[4] = s2, t2[5] = i2, t2[6] = o2) : (n2 = t2[1], a2 = t2[2], r2 = t2[3], s2 = t2[4], i2 = t2[5], o2 = t2[6]);
  const l2 = void 0 !== o2 && o2,
    c2 = "dropdown" === (void 0 === i2 ? "context" : i2) ? ws : ks,
    u2 = n2 || a2;
  let d2, m2, f2;
  return t2[7] !== l2 || t2[8] !== r2 ? (d2 = e3 => {
    l2 && e3.preventDefault(), null == r2 || r2(e3);
  }, t2[7] = l2, t2[8] = r2, t2[9] = d2) : d2 = t2[9], t2[10] !== n2 || t2[11] !== a2 || t2[12] !== s2 ? (m2 = Gr.jsx(Gp, {
    disabled: n2,
    isLoading: a2,
    ...s2
  }), t2[10] = n2, t2[11] = a2, t2[12] = s2, t2[13] = m2) : m2 = t2[13], t2[14] !== c2 || t2[15] !== u2 || t2[16] !== d2 || t2[17] !== m2 ? (f2 = Gr.jsx(c2, {
    disabled: u2,
    className: "group/action-item rounded-lg outline-none data-[disabled]:pointer-events-none",
    onSelect: d2,
    children: m2
  }), t2[14] = c2, t2[15] = u2, t2[16] = d2, t2[17] = m2, t2[18] = f2) : f2 = t2[18], f2;
}
const Yp = () => {
  const e2 = Kr.c(1);
  let t2;
  return e2[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = Gr.jsx("div", {
    className: "h-px bg-border-subtle my-1 mx-2.5 opacity-60"
  }), e2[0] = t2) : t2 = e2[0], t2;
};
function eg(e2) {
  var t2;
  const n2 = Kr.c(9),
    {
      revision: a2,
      onOpenChange: r2,
      navigationCloseRef: s2
    } = Hp(e2.onOpenChange, e2.open, e2.defaultOpen),
    i2 = null != (t2 = e2.modal) && t2,
    o2 = 0 === a2 && e2.defaultOpen;
  let l2, c2;
  return n2[0] !== r2 || n2[1] !== e2 || n2[2] !== a2 || n2[3] !== i2 || n2[4] !== o2 ? (l2 = Qr.createElement(Cs, {
    ...e2,
    modal: i2,
    key: a2,
    defaultOpen: o2,
    onOpenChange: r2
  }), n2[0] = r2, n2[1] = e2, n2[2] = a2, n2[3] = i2, n2[4] = o2, n2[5] = l2) : l2 = n2[5], n2[6] !== s2 || n2[7] !== l2 ? (c2 = Gr.jsx(Up.Provider, {
    value: s2,
    children: l2
  }), n2[6] = s2, n2[7] = l2, n2[8] = c2) : c2 = n2[8], c2;
}
const tg = _s,
  ng = Qr.forwardRef((e2, t2) => {
    const n2 = Kr.c(13);
    let a2, r2, s2, i2;
    n2[0] !== e2 ? ({
      className: a2,
      sideOffset: i2,
      onCloseAutoFocus: r2,
      ...s2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4]);
    const o2 = void 0 === i2 ? 4 : i2,
      l2 = qp(r2);
    let c2, u2;
    return n2[5] !== a2 ? (c2 = x("z-50 min-w-[8rem] overflow-hidden surface-overlay overlay-motion rounded-[var(--radius-menu)] p-1.5 dropdown-menu-content data-[state=closed]:pointer-events-none", a2), n2[5] = a2, n2[6] = c2) : c2 = n2[6], n2[7] !== l2 || n2[8] !== s2 || n2[9] !== t2 || n2[10] !== o2 || n2[11] !== c2 ? (u2 = Gr.jsx(js, {
      children: Gr.jsx(Ss, {
        ref: t2,
        sideOffset: o2,
        className: c2,
        ...s2,
        onCloseAutoFocus: l2
      })
    }), n2[7] = l2, n2[8] = s2, n2[9] = t2, n2[10] = o2, n2[11] = c2, n2[12] = u2) : u2 = n2[12], u2;
  });
const cg = e2 => (e2 || "").trim(),
  ug = {
    async create(e2, t2) {
      var n2, r2;
      try {
        const a2 = await pn.create(e2),
          s2 = cg(null == a2 ? void 0 : a2.url);
        return s2 && (await Ci({
          title: (null == t2 ? void 0 : t2.title) || (null == (n2 = null == e2 ? void 0 : e2.metadata) ? void 0 : n2.title) || "",
          text: (null == t2 ? void 0 : t2.text) || (null == (r2 = null == e2 ? void 0 : e2.metadata) ? void 0 : r2.artist) || "",
          url: s2
        })), a2;
      } catch (s2) {
        throw a.error("[shareService.create] failed:", s2), s2;
      }
    },
    async shareTrack(e2, t2) {
      try {
        const n2 = {
            title: e2.title,
            artist: e2.artist,
            cover_art: e2.cover_art || ""
          },
          a2 = {
            type: "track",
            source: e2.source,
            itemId: e2.id,
            metadata: n2
          };
        return await this.create(a2, t2);
      } catch (n2) {
        throw a.error("[shareService.shareTrack] failed:", n2), n2;
      }
    },
    async sharePlaylist(e2, t2) {
      try {
        const n2 = e2.title,
          a2 = Boolean(e2.url && /^https?:\/\//.test(e2.url)),
          r2 = L(e2) ? "library" : "media",
          s2 = "library" === r2 ? "library" : e2.source || "media",
          i2 = a2 ? e2.url : e2.id,
          o2 = {
            type: "playlist",
            source: s2,
            itemId: i2,
            kind: r2,
            metadata: {
              title: n2,
              artist: e2.author || "",
              cover_art: e2.cover_art || "",
              kind: r2
            }
          };
        return await this.create(o2, t2);
      } catch (n2) {
        throw a.error("[shareService.sharePlaylist] failed:", n2), n2;
      }
    },
    async shareAlbum(e2, t2) {
      try {
        const n2 = {
            title: e2.title,
            artist: e2.artist,
            cover_art: e2.cover_art || ""
          },
          a2 = {
            type: "album",
            source: e2.source,
            itemId: e2.id,
            metadata: n2
          };
        return await this.create(a2, t2);
      } catch (n2) {
        throw a.error("[shareService.shareAlbum] failed:", n2), n2;
      }
    },
    async shareArtist(e2, t2) {
      try {
        const n2 = {
            title: e2.name,
            artist: e2.source || "",
            cover_art: e2.avatar || ""
          },
          a2 = {
            type: "artist",
            source: e2.source,
            itemId: e2.id,
            metadata: n2
          };
        return await this.create(a2, t2);
      } catch (n2) {
        throw a.error("[shareService.shareArtist] failed:", n2), n2;
      }
    },
    async shareRoom(e2, t2) {
      try {
        const n2 = he.getState().user,
          a2 = (null == e2 ? void 0 : e2.creator_profile) || null,
          r2 = (null == a2 ? void 0 : a2.avatar) || "",
          s2 = {
            title: (null == e2 ? void 0 : e2.name) || "",
            cover_art: r2 || (null == n2 ? void 0 : n2.avatar) || ""
          },
          i2 = {
            type: "room",
            itemId: (null == e2 ? void 0 : e2.room_code) || (null == e2 ? void 0 : e2.id) || "",
            metadata: s2
          };
        return await this.create(i2, t2);
      } catch (n2) {
        throw a.error("[shareService.shareRoom] failed:", n2), n2;
      }
    },
    async shareProfile(e2, t2) {
      try {
        const n2 = await pn.createProfile((null == e2 ? void 0 : e2.username) || void 0),
          a2 = cg(null == n2 ? void 0 : n2.url);
        if (!a2) throw new Error("A username is required to share a profile");
        return await Ci({
          title: (null == t2 ? void 0 : t2.title) || (null == e2 ? void 0 : e2.nickname) || (null == e2 ? void 0 : e2.username) || "",
          text: (null == t2 ? void 0 : t2.text) || "",
          url: a2
        }), n2;
      } catch (n2) {
        throw a.error("[shareService.shareProfile] failed:", n2), n2;
      }
    },
    async sharePreset(e2, t2) {
      try {
        const n2 = {
            title: (null == e2 ? void 0 : e2.name) || "",
            artist: JSON.stringify((null == e2 ? void 0 : e2.data) || {}),
            cover_art: (null == e2 ? void 0 : e2.thumbnail) || (null == e2 ? void 0 : e2.cover) || ""
          },
          a2 = {
            type: "preset",
            itemId: (null == e2 ? void 0 : e2.id) || (null == e2 ? void 0 : e2.name) || "",
            metadata: n2
          };
        return await this.create(a2, t2);
      } catch (n2) {
        throw a.error("[shareService.sharePreset] failed:", n2), n2;
      }
    }
  },
  dg = (e2, t2) => `${e2}:${t2}`,
  mg = new Map(),
  fg = Zr(e2 => ({
    jobs: {},
    startDownload: (t2, n2, a2 = 1) => {
      var r2;
      const s2 = dg(t2, n2);
      null == (r2 = mg.get(s2)) || r2.abort();
      const i2 = new AbortController();
      return mg.set(s2, i2), e2(e3 => ({
        jobs: {
          ...e3.jobs,
          [s2]: {
            kind: t2,
            id: n2,
            current: 0,
            total: a2
          }
        }
      })), i2.signal;
    },
    updateProgress: (t2, n2, a2) => {
      const r2 = dg(t2, n2);
      e2(e3 => {
        const t3 = e3.jobs[r2];
        return t3 ? {
          jobs: {
            ...e3.jobs,
            [r2]: {
              ...t3,
              current: a2
            }
          }
        } : e3;
      });
    },
    finishDownload: (t2, n2) => {
      const a2 = dg(t2, n2);
      mg.delete(a2), e2(e3 => {
        if (!e3.jobs[a2]) return e3;
        const {
          [a2]: t3,
          ...n3
        } = e3.jobs;
        return {
          jobs: n3
        };
      });
    },
    cancelDownload: (t2, n2) => {
      var a2;
      const r2 = dg(t2, n2);
      null == (a2 = mg.get(r2)) || a2.abort(), mg.delete(r2), e2(e3 => {
        if (!e3.jobs[r2]) return e3;
        const {
          [r2]: t3,
          ...n3
        } = e3.jobs;
        return {
          jobs: n3
        };
      });
    }
  })),
  hg = (e2, t2) => {
    const n2 = Kr.c(3);
    let a2;
    return n2[0] !== t2 || n2[1] !== e2 ? (a2 = n3 => {
      var a3;
      return t2 && null != (a3 = n3.jobs[dg(e2, t2)]) ? a3 : null;
    }, n2[0] = t2, n2[1] = e2, n2[2] = a2) : a2 = n2[2], fg(a2);
  },
  pg = e2 => {
    const t2 = Kr.c(2);
    let n2;
    return t2[0] !== e2 ? (n2 = t3 => Boolean(e2) && ["cache", "file", "cover"].some(n3 => Boolean(t3.jobs[`${n3}:${e2}`])), t2[0] = e2, t2[1] = n2) : n2 = t2[1], fg(n2);
  };
function gg(e2) {
  u.getState().addToQueueNext(e2);
}
function Bg(e2, t2, n2 = []) {
  if (!function (e3, t3) {
    return e3.id === t3.id && e3.title === t3.title && e3.artist === t3.artist && e3.duration === t3.duration && e3.cover_art === t3.cover_art && e3.source === t3.source;
  }(e2.song, t2.song) || !function (e3, t3) {
    return e3 === t3 || !(!e3 || !t3) && e3.top === t3.top && e3.height === t3.height && e3.transform === t3.transform;
  }(e2.style, t2.style)) return false;
  const a2 = new Set([...Object.keys(e2), ...Object.keys(t2)]);
  for (const r2 of a2) if ("song" !== r2 && "style" !== r2 && !n2.includes(r2) && e2[r2] !== t2[r2]) return false;
  return true;
}
const Ug = {
  showAddToPlaylist: true,
  showDeleteButton: false,
  showRemoveButton: false,
  showRemoveFromQueue: false,
  showDragHandle: false
};
function qg(e2) {
  e2.target !== e2.currentTarget || "Enter" !== e2.key && " " !== e2.key || (e2.preventDefault(), e2.currentTarget.click());
}
const Hg = Xr.memo(function (e2) {
  const t2 = Kr.c(15),
    {
      song: n2,
      className: a2,
      combinedStyle: r2,
      onMouseEnter: s2,
      onMouseLeave: i2,
      onClick: o2
    } = e2,
    l2 = `${n2.title} \u2014 ${n2.artist}`;
  let c2, u2, d2;
  return t2[0] !== a2 ? (c2 = x("relative h-9 w-9 cursor-pointer overflow-hidden transition-shadow duration-300 select-none group/arc flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-primary/40", a2), t2[0] = a2, t2[1] = c2) : c2 = t2[1], t2[2] !== n2.artist || t2[3] !== n2.cover_art || t2[4] !== n2.source || t2[5] !== n2.title ? (u2 = Gr.jsx(N, {
    src: n2.cover_art,
    title: n2.title,
    artist: n2.artist,
    size: "md",
    source: n2.source,
    className: "!rounded-none h-full w-full object-cover flex-shrink-0 relative z-10 transition-transform group-hover/arc:scale-105",
    badgePosition: "bottom-right"
  }), t2[2] = n2.artist, t2[3] = n2.cover_art, t2[4] = n2.source, t2[5] = n2.title, t2[6] = u2) : u2 = t2[6], t2[7] !== r2 || t2[8] !== o2 || t2[9] !== s2 || t2[10] !== i2 || t2[11] !== l2 || t2[12] !== c2 || t2[13] !== u2 ? (d2 = Gr.jsx("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": l2,
    onKeyDown: qg,
    style: r2,
    className: c2,
    onMouseEnter: s2,
    onMouseLeave: i2,
    onClick: o2,
    children: u2
  }), t2[7] = r2, t2[8] = o2, t2[9] = s2, t2[10] = i2, t2[11] = l2, t2[12] = c2, t2[13] = u2, t2[14] = d2) : d2 = t2[14], d2;
}, (e2, t2) => e2.song.id === t2.song.id && e2.song.cover_art === t2.song.cover_art && e2.song.title === t2.song.title && e2.className === t2.className);
const Wg = Xr.memo(function (e2) {
  const t2 = Kr.c(33),
    {
      song: n2,
      isCurrentSong: a2,
      className: r2,
      combinedStyle: s2,
      onMouseEnter: i2,
      onMouseLeave: o2,
      onClick: l2
    } = e2,
    c2 = void 0 !== a2 && a2;
  let d2;
  t2[0] !== c2 ? (d2 = e3 => c2 && e3.isPlaying, t2[0] = c2, t2[1] = d2) : d2 = t2[1];
  const m2 = u(d2);
  let f2;
  t2[2] !== r2 ? (f2 = x("group relative rounded-card overflow-hidden bg-plate cursor-pointer w-full", r2), t2[2] = r2, t2[3] = f2) : f2 = t2[3];
  const h2 = c2 && m2;
  let p2, g2, v2, y2, b2, w2, k2, j2;
  return t2[4] !== c2 || t2[5] !== n2.artist || t2[6] !== n2.cover_art || t2[7] !== n2.source || t2[8] !== n2.title || t2[9] !== h2 ? (p2 = Gr.jsx(N, {
    src: n2.cover_art,
    title: n2.title,
    artist: n2.artist,
    size: 40,
    source: n2.source,
    className: "rounded-md flex-shrink-0",
    isActive: c2,
    isPlaying: h2
  }), t2[4] = c2, t2[5] = n2.artist, t2[6] = n2.cover_art, t2[7] = n2.source, t2[8] = n2.title, t2[9] = h2, t2[10] = p2) : p2 = t2[10], t2[11] !== n2 ? (g2 = Gr.jsx(S, {
    song: n2,
    className: "w-3.5 h-3.5 text-muted-foreground"
  }), t2[11] = n2, t2[12] = g2) : g2 = t2[12], t2[13] !== n2.title ? (v2 = Gr.jsx(Vs, {
    children: n2.title
  }), t2[13] = n2.title, t2[14] = v2) : v2 = t2[14], t2[15] !== g2 || t2[16] !== v2 ? (y2 = Gr.jsx("div", {
    className: "flex items-start justify-between gap-2",
    children: Gr.jsxs("p", {
      className: "text-sm font-medium line-clamp-1 leading-tight flex items-center gap-1.5",
      children: [g2, v2]
    })
  }), t2[15] = g2, t2[16] = v2, t2[17] = y2) : y2 = t2[17], t2[18] !== n2.artist ? (b2 = Gr.jsx(Vs, {
    containerClassName: "mt-0.5",
    className: "text-callout text-muted-foreground",
    children: n2.artist
  }), t2[18] = n2.artist, t2[19] = b2) : b2 = t2[19], t2[20] !== y2 || t2[21] !== b2 ? (w2 = Gr.jsxs("div", {
    className: "flex-1 min-w-0 text-foreground/90 transition-colors duration-200 group-hover:text-foreground",
    children: [y2, b2]
  }), t2[20] = y2, t2[21] = b2, t2[22] = w2) : w2 = t2[22], t2[23] !== w2 || t2[24] !== p2 ? (k2 = Gr.jsxs("div", {
    className: "relative z-10 flex items-center gap-3 px-3 py-2.5 pointer-events-none select-none",
    children: [p2, w2]
  }), t2[23] = w2, t2[24] = p2, t2[25] = k2) : k2 = t2[25], t2[26] !== s2 || t2[27] !== l2 || t2[28] !== i2 || t2[29] !== o2 || t2[30] !== k2 || t2[31] !== f2 ? (j2 = Gr.jsx("div", {
    style: s2,
    className: f2,
    onMouseEnter: i2,
    onMouseLeave: o2,
    onClick: l2,
    children: k2
  }), t2[26] = s2, t2[27] = l2, t2[28] = i2, t2[29] = o2, t2[30] = k2, t2[31] = f2, t2[32] = j2) : j2 = t2[32], j2;
}, (e2, t2) => e2.song.id === t2.song.id && e2.song.title === t2.song.title && e2.song.artist === t2.song.artist && e2.song.cover_art === t2.song.cover_art && e2.isCurrentSong === t2.isCurrentSong && e2.className === t2.className);
const Vg = Qr.forwardRef((e2, t2) => {
  const n2 = Kr.c(27);
  let a2, r2, s2, i2, o2, l2, c2;
  n2[0] !== e2 ? ({
    src: l2,
    name: i2,
    className: a2,
    imageClassName: s2,
    fallbackClassName: r2,
    ...o2
  } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2, n2[5] = o2, n2[6] = l2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4], o2 = n2[5], l2 = n2[6]), n2[7] !== l2 ? (c2 = Ln(l2), n2[7] = l2, n2[8] = c2) : c2 = n2[8];
  const u2 = c2,
    [d2, m2] = Qr.useState(false);
  let f2, h2;
  n2[9] === Symbol.for("react.memo_cache_sentinel") ? (f2 = () => {
    m2(false);
  }, n2[9] = f2) : f2 = n2[9], n2[10] !== u2 ? (h2 = [u2], n2[10] = u2, n2[11] = h2) : h2 = n2[11], Qr.useEffect(f2, h2);
  const p2 = u2 && !d2;
  let g2;
  n2[12] !== i2 ? (g2 = i2 ? function (e3) {
    if (!e3) return "?";
    const t3 = e3.trim();
    return t3 ? t3[0].toUpperCase() : "?";
  }(i2) : void 0, n2[12] = i2, n2[13] = g2) : g2 = n2[13];
  const v2 = g2;
  let y2, b2, w2;
  return n2[14] !== a2 ? (y2 = x("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", a2), n2[14] = a2, n2[15] = y2) : y2 = n2[15], n2[16] !== r2 || n2[17] !== p2 || n2[18] !== s2 || n2[19] !== v2 || n2[20] !== u2 ? (b2 = p2 ? Gr.jsx("img", {
    src: u2,
    onError: () => m2(true),
    className: x("aspect-square h-full w-full object-cover", s2),
    decoding: "async"
  }) : Gr.jsx("div", {
    className: x("flex h-full w-full items-center justify-center rounded-full bg-muted text-primary font-bold select-none text-center", r2),
    children: v2
  }), n2[16] = r2, n2[17] = p2, n2[18] = s2, n2[19] = v2, n2[20] = u2, n2[21] = b2) : b2 = n2[21], n2[22] !== o2 || n2[23] !== t2 || n2[24] !== y2 || n2[25] !== b2 ? (w2 = Gr.jsx("div", {
    ref: t2,
    className: y2,
    ...o2,
    children: b2
  }), n2[22] = o2, n2[23] = t2, n2[24] = y2, n2[25] = b2, n2[26] = w2) : w2 = n2[26], w2;
});
const Qg = Qr.memo(Vg, (e2, t2) => e2.src === t2.src && e2.name === t2.name && e2.className === t2.className && e2.imageClassName === t2.imageClassName && e2.fallbackClassName === t2.fallbackClassName),
  Kg = e2 => {
    const t2 = Kr.c(13),
      {
        trackNumber: n2,
        isCurrentSong: a2,
        isLoading: r2
      } = e2;
    let s2;
    t2[0] !== a2 ? (s2 = e3 => a2 && e3.isPlaying, t2[0] = a2, t2[1] = s2) : s2 = t2[1];
    const i2 = u(s2);
    if (r2) {
      let e3;
      return t2[2] === Symbol.for("react.memo_cache_sentinel") ? (e3 = Gr.jsx("div", {
        className: "relative flex h-10 w-10 shrink-0 items-center justify-center",
        children: Gr.jsx(I, {
          className: "h-4 w-4 animate-spin text-primary"
        })
      }), t2[2] = e3) : e3 = t2[2], e3;
    }
    const o2 = a2 && i2 ? An : Pn,
      l2 = a2 ? "text-primary" : "text-foreground/50";
    let c2, d2, m2, f2;
    return t2[3] !== l2 ? (c2 = x("pointer-events-none absolute text-callout leading-none transition-all duration-200 ease-out select-none group-hover/track:scale-75 group-hover/track:opacity-0", l2), t2[3] = l2, t2[4] = c2) : c2 = t2[4], t2[5] !== c2 || t2[6] !== n2 ? (d2 = Gr.jsx("span", {
      className: c2,
      children: n2
    }), t2[5] = c2, t2[6] = n2, t2[7] = d2) : d2 = t2[7], t2[8] !== o2 ? (m2 = Gr.jsx("div", {
      className: "pointer-events-none absolute inset-0 flex scale-75 items-center justify-center opacity-0 transition-all duration-200 ease-out group-hover/track:scale-100 group-hover/track:opacity-100",
      children: Gr.jsx(o2, {
        weight: "Bold",
        className: "h-4 w-4 text-foreground/80"
      })
    }), t2[8] = o2, t2[9] = m2) : m2 = t2[9], t2[10] !== d2 || t2[11] !== m2 ? (f2 = Gr.jsxs("div", {
      className: "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden",
      children: [d2, m2]
    }), t2[10] = d2, t2[11] = m2, t2[12] = f2) : f2 = t2[12], f2;
  },
  Gg = Gr.jsxs("div", {
    className: "relative flex items-center justify-center w-full h-full text-muted-foreground/60",
    children: [Gr.jsx(B.Track, {
      className: "h-4 w-4 transition-all duration-200 group-hover/cover:opacity-0 group-hover/cover:scale-75"
    }), Gr.jsx(In, {
      className: "h-4 w-4 absolute transition-all duration-200 opacity-0 scale-75 group-hover/cover:opacity-100 group-hover/cover:scale-100 text-foreground"
    })]
  });
function Xg(e2) {
  const t2 = Kr.c(25),
    {
      song: n2,
      trackNumber: a2,
      isCurrentSong: r2,
      isLoading: s2,
      isDownloading: i2,
      onCoverClick: o2,
      hideSourceBadge: l2
    } = e2,
    {
      t: c2
    } = P();
  let u2;
  t2[0] !== o2 ? (u2 = e3 => {
    e3.stopPropagation(), null == o2 || o2();
  }, t2[0] = o2, t2[1] = u2) : u2 = t2[1];
  const d2 = u2;
  if (null !== a2) {
    let e3;
    return t2[2] !== r2 || t2[3] !== s2 || t2[4] !== a2 ? (e3 = Gr.jsx(Kg, {
      trackNumber: a2,
      isCurrentSong: r2,
      isLoading: s2
    }), t2[2] = r2, t2[3] = s2, t2[4] = a2, t2[5] = e3) : e3 = t2[5], e3;
  }
  if (o2) {
    let e3, a3, r3, s3;
    return t2[6] !== c2 ? (e3 = c2("track.row.change_cover"), t2[6] = c2, t2[7] = e3) : e3 = t2[7], t2[8] !== n2.cover_art || t2[9] !== n2.id || t2[10] !== n2.source ? (a3 = Gr.jsx(N, {
      src: n2.cover_art,
      size: "md",
      className: "cursor-pointer",
      songId: n2.id,
      source: n2.source,
      showSourceBadge: false,
      disableBadgeHide: true,
      disablePlayerTracking: true,
      fallback: Gg
    }), t2[8] = n2.cover_art, t2[9] = n2.id, t2[10] = n2.source, t2[11] = a3) : a3 = t2[11], t2[12] !== n2.cover_art ? (r3 = n2.cover_art && Gr.jsx("div", {
      className: "absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 opacity-0 transition-opacity duration-150 group-hover/cover:opacity-100",
      children: Gr.jsx(In, {
        className: "h-4 w-4 text-white"
      })
    }), t2[12] = n2.cover_art, t2[13] = r3) : r3 = t2[13], t2[14] !== d2 || t2[15] !== e3 || t2[16] !== a3 || t2[17] !== r3 ? (s3 = Gr.jsxs("button", {
      type: "button",
      onClick: d2,
      className: "group/cover relative shrink-0 overflow-hidden rounded-lg transition-transform duration-150 active:scale-95",
      "aria-label": e3,
      children: [a3, r3]
    }), t2[14] = d2, t2[15] = e3, t2[16] = a3, t2[17] = r3, t2[18] = s3) : s3 = t2[18], s3;
  }
  const m2 = !l2;
  let f2;
  return t2[19] !== i2 || t2[20] !== n2.cover_art || t2[21] !== n2.id || t2[22] !== n2.source || t2[23] !== m2 ? (f2 = Gr.jsx(N, {
    src: n2.cover_art,
    size: "md",
    className: "cursor-pointer",
    songId: n2.id,
    source: n2.source,
    showSourceBadge: m2,
    disableBadgeHide: true,
    loadingOnly: true,
    downloadReveal: i2
  }), t2[19] = i2, t2[20] = n2.cover_art, t2[21] = n2.id, t2[22] = n2.source, t2[23] = m2, t2[24] = f2) : f2 = t2[24], f2;
}
const Yg = Xr.memo(function (e2) {
    const t2 = Kr.c(8),
      {
        duration: n2,
        showsBars: a2
      } = e2;
    let r2;
    t2[0] !== a2 ? (r2 = e3 => a2 && e3.isPlaying, t2[0] = a2, t2[1] = r2) : r2 = t2[1];
    const s2 = u(r2);
    if (!a2 && !n2) return null;
    let i2, o2;
    return t2[2] !== n2 || t2[3] !== s2 || t2[4] !== a2 ? (i2 = a2 ? Gr.jsx(be, {
      className: "h-3 text-primary",
      isPaused: !s2,
      barWidth: "w-[2px]",
      gap: "gap-[2px]"
    }) : un(n2), t2[2] = n2, t2[3] = s2, t2[4] = a2, t2[5] = i2) : i2 = t2[5], t2[6] !== i2 ? (o2 = Gr.jsx("span", {
      className: "inline-flex h-[26px] min-w-[46px] items-center justify-center rounded-lg border border-border/25 px-2 text-callout font-normal text-muted-foreground select-none",
      children: i2
    }), t2[6] = i2, t2[7] = o2) : o2 = t2[7], o2;
  }),
  Jg = ".group\\/track",
  Zg = e2 => e2.stopPropagation();
function ev(e2) {
  const t2 = Kr.c(17),
    {
      song: n2,
      isCurrentSong: a2,
      isUnfavorited: r2,
      isAnyArtistUnfavorited: s2,
      titleAccessory: i2,
      subtitle: o2,
      editableTitle: l2,
      editableArtist: c2,
      onEditTitle: u2,
      onEditArtist: d2
    } = e2,
    m2 = void 0 !== l2 || void 0 !== c2 ? Zg : void 0;
  let f2, h2, p2;
  return t2[0] !== l2 || t2[1] !== a2 || t2[2] !== r2 || t2[3] !== u2 || t2[4] !== n2 || t2[5] !== i2 ? (f2 = void 0 !== l2 ? Gr.jsx(rd, {
    value: l2,
    onChange: e3 => null == u2 ? void 0 : u2(e3.target.value),
    className: "h-6 border-transparent bg-transparent px-1 text-sm font-medium leading-tight shadow-none hover:border-border/25 focus:border-border/35",
    onClick: Zg
  }) : Gr.jsxs("div", {
    className: "flex w-full min-w-0 items-center gap-1.5",
    children: [Gr.jsxs("span", {
      className: x("relative flex min-w-0 items-center gap-1.5 overflow-hidden text-headline leading-tight transition-colors duration-200", a2 ? "font-medium text-primary" : "font-medium text-foreground/90 group-hover/track:text-foreground", r2 && "line-through text-foreground/50"),
      children: [Gr.jsx(S, {
        song: n2
      }), Gr.jsx(Vs, {
        hoverScope: Jg,
        children: k(n2.title)
      })]
    }), i2 ? Gr.jsx("span", {
      className: "inline-flex min-w-0 shrink-0 items-center",
      children: i2
    }) : null]
  }), t2[0] = l2, t2[1] = a2, t2[2] = r2, t2[3] = u2, t2[4] = n2, t2[5] = i2, t2[6] = f2) : f2 = t2[6], t2[7] !== c2 || t2[8] !== s2 || t2[9] !== d2 || t2[10] !== n2 || t2[11] !== o2 ? (h2 = void 0 !== c2 ? Gr.jsx(rd, {
    value: c2,
    onChange: e3 => null == d2 ? void 0 : d2(e3.target.value),
    className: "h-5 border-transparent bg-transparent px-1 text-xs text-foreground/60 shadow-none hover:border-border/25 hover:text-foreground focus:border-border/35",
    onClick: Zg
  }) : o2 ? Gr.jsx("div", {
    className: "flex w-full items-center gap-1 overflow-hidden",
    children: Gr.jsx(Vs, {
      hoverScope: Jg,
      className: "text-callout text-muted-foreground transition-colors",
      children: o2
    })
  }) : Gr.jsx("div", {
    className: "flex w-full items-center gap-1 overflow-hidden",
    children: Gr.jsx(Vs, {
      hoverScope: Jg,
      className: x("text-callout text-muted-foreground transition-colors", s2 && "line-through opacity-50"),
      children: n2.artist && n2.source ? Gr.jsx(Ui, {
        artists: k(n2.artist),
        source: n2.source,
        artistsArray: n2.artists,
        origin: j(n2),
        className: "text-callout text-muted-foreground"
      }) : k(n2.artist) || ""
    })
  }), t2[7] = c2, t2[8] = s2, t2[9] = d2, t2[10] = n2, t2[11] = o2, t2[12] = h2) : h2 = t2[12], t2[13] !== m2 || t2[14] !== f2 || t2[15] !== h2 ? (p2 = Gr.jsxs("div", {
    className: "relative z-20 flex min-w-0 flex-1 flex-col justify-center overflow-hidden",
    onClick: m2,
    children: [f2, h2]
  }), t2[13] = m2, t2[14] = f2, t2[15] = h2, t2[16] = p2) : p2 = t2[16], p2;
}
function fv(e2) {
  const t2 = Kr.c(17),
    {
      status: n2,
      saved: a2,
      className: r2,
      tone: s2
    } = e2,
    i2 = void 0 === s2 ? "theme" : s2,
    o2 = "added" === n2 || "idle" === n2 && a2;
  let l2;
  t2[0] !== r2 ? (l2 = x("relative", r2), t2[0] = r2, t2[1] = l2) : l2 = t2[1];
  const c2 = o2 ? "opacity-0 scale-90" : "opacity-100 scale-100";
  let u2, d2;
  t2[2] !== r2 || t2[3] !== c2 ? (u2 = x(r2, "absolute inset-0 transition-all duration-200", c2), t2[2] = r2, t2[3] = c2, t2[4] = u2) : u2 = t2[4], t2[5] !== u2 ? (d2 = Gr.jsx(_.addToPlaylist, {
    className: u2
  }), t2[5] = u2, t2[6] = d2) : d2 = t2[6];
  const m2 = "theme" === i2 ? "text-primary" : "text-current",
    f2 = o2 ? "opacity-100 scale-100" : "opacity-0 scale-90";
  let h2, p2, g2;
  return t2[7] !== r2 || t2[8] !== m2 || t2[9] !== f2 ? (h2 = x(r2, "absolute inset-0 transition-all duration-200", m2, f2), t2[7] = r2, t2[8] = m2, t2[9] = f2, t2[10] = h2) : h2 = t2[10], t2[11] !== h2 ? (p2 = Gr.jsx(_.inPlaylist, {
    weight: "Bold",
    className: h2
  }), t2[11] = h2, t2[12] = p2) : p2 = t2[12], t2[13] !== l2 || t2[14] !== d2 || t2[15] !== p2 ? (g2 = Gr.jsxs("span", {
    className: l2,
    children: [d2, p2]
  }), t2[13] = l2, t2[14] = d2, t2[15] = p2, t2[16] = g2) : g2 = t2[16], g2;
}
const hv = Xr.memo(function (e2) {
  const t2 = Kr.c(48),
    {
      song: n2,
      onRemove: a2,
      inQueue: r2,
      dislikes: s2
    } = e2,
    i2 = void 0 !== r2 && r2,
    o2 = void 0 !== s2 && s2,
    {
      t: l2
    } = P(),
    c2 = gn(n2.id);
  let d2;
  t2[0] !== n2.id || t2[1] !== n2.source ? (d2 = e3 => {
    e3.stopPropagation(), re.getState().removeFromUnfavorited(n2.id, n2.source).catch(pv);
  }, t2[0] = n2.id, t2[1] = n2.source, t2[2] = d2) : d2 = t2[2];
  const m2 = d2;
  let f2;
  t2[3] !== n2 ? (f2 = e3 => {
    e3.stopPropagation(), E.getState().toggleFavorite(n2.id, n2).catch(gv);
  }, t2[3] = n2, t2[4] = f2) : f2 = t2[4];
  const h2 = f2;
  let p2;
  t2[5] !== a2 || t2[6] !== n2.id ? (p2 = e3 => {
    e3.stopPropagation(), null == a2 || a2(n2.id);
  }, t2[5] = a2, t2[6] = n2.id, t2[7] = p2) : p2 = t2[7];
  const g2 = p2;
  let v2;
  t2[8] !== n2 ? (v2 = e3 => {
    e3.stopPropagation(), u.getState().addToQueue(n2);
  }, t2[8] = n2, t2[9] = v2) : v2 = t2[9];
  const y2 = v2,
    b2 = vv,
    [w2, k2] = Qr.useState(false),
    [j2, S2] = Qr.useState(false);
  if (o2) {
    let e3, n3, a3;
    return t2[10] !== l2 ? (e3 = l2("track.context_menu.remove_from_not_interested"), t2[10] = l2, t2[11] = e3) : e3 = t2[11], t2[12] === Symbol.for("react.memo_cache_sentinel") ? (n3 = Gr.jsx(_.dislike, {
      weight: "Bold",
      className: "h-4 w-4"
    }), t2[12] = n3) : n3 = t2[12], t2[13] !== e3 || t2[14] !== m2 ? (a3 = Gr.jsx(A, {
      variant: "ghost",
      size: "icon-xs",
      shape: "circle",
      onClick: m2,
      "aria-label": e3,
      className: "text-foreground",
      children: n3
    }), t2[13] = e3, t2[14] = m2, t2[15] = a3) : a3 = t2[15], a3;
  }
  const N2 = j2 || void 0;
  let C2, T2, L2, I2, M2, R2;
  t2[16] !== a2 || t2[17] !== g2 || t2[18] !== l2 ? (C2 = a2 && Gr.jsx(A, {
    variant: "ghost",
    size: "icon-xs",
    shape: "circle",
    onClick: g2,
    "aria-label": l2("common.delete"),
    className: "text-foreground/45 hover:text-foreground",
    children: Gr.jsx(_.removeFromList, {
      className: "h-4 w-4"
    })
  }), t2[16] = a2, t2[17] = g2, t2[18] = l2, t2[19] = C2) : C2 = t2[19], t2[20] !== y2 || t2[21] !== i2 || t2[22] !== l2 ? (T2 = !i2 && Gr.jsx(A, {
    variant: "ghost",
    size: "icon-xs",
    shape: "circle",
    onClick: y2,
    "aria-label": l2("track.context_menu.add_to_queue"),
    className: "text-foreground/45 hover:text-foreground",
    children: Gr.jsx(_.addToQueue, {
      className: "h-4 w-4"
    })
  }), t2[20] = y2, t2[21] = i2, t2[22] = l2, t2[23] = T2) : T2 = t2[23], t2[24] !== w2 || t2[25] !== n2 || t2[26] !== l2 ? (L2 = w2 ? Gr.jsx(mv, {
    song: n2,
    contentAlign: "end",
    defaultOpen: true,
    onOpenChange: S2,
    trigger: e3 => Gr.jsx(A, {
      variant: "ghost",
      size: "icon-xs",
      shape: "circle",
      onClick: b2,
      "aria-label": l2("track.context_menu.add_to_playlist"),
      className: "idle" === e3 ? "text-foreground/45 hover:text-foreground" : "text-foreground",
      children: "added" === e3 ? Gr.jsx(_.inPlaylist, {
        weight: "Bold",
        className: "h-4 w-4 text-primary animate-in fade-in duration-200"
      }, "on") : Gr.jsx(_.add, {
        className: "h-4 w-4 animate-in fade-in duration-200"
      }, "off")
    })
  }) : Gr.jsx(A, {
    variant: "ghost",
    size: "icon-xs",
    shape: "circle",
    onClick: e3 => {
      e3.stopPropagation(), k2(true);
    },
    "aria-label": l2("track.context_menu.add_to_playlist"),
    className: "text-foreground/45 hover:text-foreground",
    children: Gr.jsx(_.add, {
      className: "h-4 w-4"
    })
  }), t2[24] = w2, t2[25] = n2, t2[26] = l2, t2[27] = L2) : L2 = t2[27], t2[28] !== L2 || t2[29] !== N2 || t2[30] !== C2 || t2[31] !== T2 ? (I2 = Gr.jsxs("div", {
    className: "track-quick items-center gap-0.5",
    "data-open": N2,
    children: [C2, T2, L2]
  }), t2[28] = L2, t2[29] = N2, t2[30] = C2, t2[31] = T2, t2[32] = I2) : I2 = t2[32], t2[33] !== c2 || t2[34] !== l2 ? (M2 = l2(c2 ? "track.context_menu.remove_from_favorites" : "track.context_menu.add_to_favorites"), t2[33] = c2, t2[34] = l2, t2[35] = M2) : M2 = t2[35], t2[36] !== c2 ? (R2 = c2 ? "text-foreground" : x("text-foreground/45 hover:text-foreground", "opacity-0 pointer-events-none transition-opacity duration-100 group-hover/track:opacity-100 group-hover/track:pointer-events-auto group-focus-within/track:opacity-100 group-focus-within/track:pointer-events-auto"), t2[36] = c2, t2[37] = R2) : R2 = t2[37];
  const z2 = c2 ? "Bold" : "Linear";
  let D2, F2, O2;
  return t2[38] !== z2 ? (D2 = Gr.jsx(_.like, {
    weight: z2,
    className: "h-4 w-4"
  }), t2[38] = z2, t2[39] = D2) : D2 = t2[39], t2[40] !== M2 || t2[41] !== R2 || t2[42] !== D2 || t2[43] !== h2 ? (F2 = Gr.jsx(A, {
    variant: "ghost",
    size: "icon-xs",
    shape: "circle",
    onClick: h2,
    "aria-label": M2,
    className: R2,
    children: D2
  }), t2[40] = M2, t2[41] = R2, t2[42] = D2, t2[43] = h2, t2[44] = F2) : F2 = t2[44], t2[45] !== I2 || t2[46] !== F2 ? (O2 = Gr.jsxs("div", {
    className: "flex items-center gap-0.5",
    children: [I2, F2]
  }), t2[45] = I2, t2[46] = F2, t2[47] = O2) : O2 = t2[47], O2;
});
function pv(e2) {
  return a.error("track-row", "Failed to remove dislike:", e2);
}
function gv(e2) {
  return a.error("track-row", "Failed to toggle favorite:", e2);
}
function vv(e2) {
  return e2.stopPropagation();
}
const xv = Xr.memo(function (e2) {
  var t2;
  const n2 = Kr.c(88),
    {
      song: a2,
      className: r2,
      style: s2,
      dragHandleProps: i2,
      variant: o2,
      showDragHandle: l2,
      showCollaborator: c2,
      hideDuration: u2,
      showMoreButton: d2,
      hideQuickActions: m2,
      dislikes: f2,
      hideStats: h2,
      isCurrentSong: p2,
      isLoading: g2,
      isDownloading: v2,
      isUnfavorited: y2,
      isAnyArtistUnfavorited: b2,
      selectionMode: w2,
      isSelected: k2,
      onToggleSelection: j2,
      editableTitle: S2,
      editableArtist: N2,
      onEditTitle: C2,
      onEditArtist: T2,
      onCoverClick: E2,
      onClick: L2,
      onRemoveFromQueue: I2,
      onRemove: M2,
      removeOnContextMenu: R2,
      trackNumber: z2,
      rank: D2,
      playCount: F2,
      playbackCount: O2,
      centerMeta: B2,
      titleAccessory: U2,
      activeCollaborator: q2
    } = e2,
    H2 = void 0 !== l2 && l2,
    W2 = void 0 !== c2 && c2,
    V2 = void 0 !== u2 && u2,
    Q2 = void 0 !== d2 && d2,
    K2 = void 0 !== m2 && m2,
    G2 = void 0 !== f2 && f2,
    X2 = void 0 !== h2 && h2,
    Y2 = void 0 !== w2 && w2,
    J2 = void 0 !== k2 && k2,
    Z2 = void 0 !== R2 && R2,
    {
      t: ee2
    } = P(),
    te2 = Qr.useRef(false);
  let ne2;
  n2[0] === Symbol.for("react.memo_cache_sentinel") ? (ne2 = e3 => {
    const t3 = e3.currentTarget.closest("[data-state]");
    te2.current = "open" === (null == t3 ? void 0 : t3.getAttribute("data-state")) && !t3.matches('[role="dialog"]');
  }, n2[0] = ne2) : ne2 = n2[0];
  const ae2 = ne2;
  let re2;
  n2[1] === Symbol.for("react.memo_cache_sentinel") ? (re2 = e3 => {
    if (e3.preventDefault(), e3.stopPropagation(), te2.current) return void (te2.current = false);
    const t3 = e3.currentTarget.getBoundingClientRect();
    e3.currentTarget.dispatchEvent(new MouseEvent("contextmenu", {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: t3.left + t3.width / 2,
      clientY: t3.top + t3.height / 2
    }));
  }, n2[1] = re2) : re2 = n2[1];
  const se2 = re2;
  let ie2;
  n2[2] !== j2 || n2[3] !== a2.id ? (ie2 = e3 => {
    e3.stopPropagation(), null == j2 || j2(a2.id, e3.shiftKey);
  }, n2[2] = j2, n2[3] = a2.id, n2[4] = ie2) : ie2 = n2[4];
  const oe2 = ie2;
  let le2;
  n2[5] !== I2 || n2[6] !== Z2 || n2[7] !== a2.id ? (le2 = e3 => {
    if (!Z2 || !I2) return;
    const t3 = e3.target;
    (null == t3 ? void 0 : t3.closest('[data-queue-menu-trigger="true"]')) || (e3.preventDefault(), e3.stopPropagation(), I2(a2.id));
  }, n2[5] = I2, n2[6] = Z2, n2[7] = a2.id, n2[8] = le2) : le2 = n2[8];
  const ce2 = le2,
    ue2 = Y2 || "artist" !== o2 || X2 ? 0 : F2 || O2 || (null == (t2 = a2.stats) ? void 0 : t2.plays) || 0,
    de2 = p2 && !Y2 && !g2,
    me2 = H2 && i2;
  let fe2, he2, pe2, ge2, ve2;
  n2[9] !== r2 ? (fe2 = x("track-row group/track relative box-border flex h-16 items-center justify-between rounded-xl px-3 cursor-pointer select-none [&:has(:focus-visible)]:bg-plate", r2), n2[9] = r2, n2[10] = fe2) : fe2 = n2[10], n2[11] !== oe2 || n2[12] !== J2 || n2[13] !== Y2 || n2[14] !== ee2 ? (he2 = Y2 && Gr.jsx("button", {
    type: "button",
    onClick: oe2,
    "aria-pressed": J2,
    "aria-label": ee2("track.row.select"),
    className: x("relative z-20 mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-150", J2 ? "border-primary bg-primary text-primary-foreground" : "border-foreground/25 text-transparent hover:border-foreground/50"),
    children: Gr.jsx(_.check, {
      className: "h-3 w-3"
    })
  }), n2[11] = oe2, n2[12] = J2, n2[13] = Y2, n2[14] = ee2, n2[15] = he2) : he2 = n2[15], n2[16] !== D2 ? (pe2 = null !== D2 && Gr.jsx("span", {
    className: "mr-3 w-5 shrink-0 text-center text-sm text-foreground/45 group-hover/track:text-foreground/80 select-none transition-colors duration-150",
    children: D2
  }), n2[16] = D2, n2[17] = pe2) : pe2 = n2[17], n2[18] !== i2 || n2[19] !== me2 ? (ge2 = me2 ? i2 : {}, n2[18] = i2, n2[19] = me2, n2[20] = ge2) : ge2 = n2[20], n2[21] !== me2 ? (ve2 = me2 ? {
    touchAction: "none"
  } : void 0, n2[21] = me2, n2[22] = ve2) : ve2 = n2[22];
  const xe2 = "artist" === o2;
  let ye2, be2;
  n2[23] !== p2 || n2[24] !== v2 || n2[25] !== g2 || n2[26] !== E2 || n2[27] !== a2 || n2[28] !== xe2 || n2[29] !== z2 ? (ye2 = Gr.jsx(Xg, {
    song: a2,
    trackNumber: z2,
    isCurrentSong: p2,
    isLoading: g2,
    isDownloading: v2,
    onCoverClick: E2,
    hideSourceBadge: xe2
  }), n2[23] = p2, n2[24] = v2, n2[25] = g2, n2[26] = E2, n2[27] = a2, n2[28] = xe2, n2[29] = z2, n2[30] = ye2) : ye2 = n2[30], n2[31] !== ge2 || n2[32] !== ve2 || n2[33] !== ye2 ? (be2 = Gr.jsx("div", {
    className: "relative z-20 mr-3 flex shrink-0 items-center",
    ...ge2,
    style: ve2,
    children: ye2
  }), n2[31] = ge2, n2[32] = ve2, n2[33] = ye2, n2[34] = be2) : be2 = n2[34];
  const we2 = y2 && !G2,
    ke2 = b2 && !G2;
  let je2, Se2, Ne2, _e2, Ce2, Te2, Ee2, Le2, Ae2, Pe2;
  return n2[35] !== ue2 || n2[36] !== ee2 ? (je2 = ue2 > 0 ? `${$(ue2)} ${ee2("profile.stats.plays")}` : void 0, n2[35] = ue2, n2[36] = ee2, n2[37] = je2) : je2 = n2[37], n2[38] !== N2 || n2[39] !== S2 || n2[40] !== p2 || n2[41] !== T2 || n2[42] !== C2 || n2[43] !== a2 || n2[44] !== we2 || n2[45] !== ke2 || n2[46] !== je2 || n2[47] !== U2 ? (Se2 = Gr.jsx(ev, {
    song: a2,
    isCurrentSong: p2,
    isUnfavorited: we2,
    isAnyArtistUnfavorited: ke2,
    titleAccessory: U2,
    subtitle: je2,
    editableTitle: S2,
    editableArtist: N2,
    onEditTitle: C2,
    onEditArtist: T2
  }), n2[38] = N2, n2[39] = S2, n2[40] = p2, n2[41] = T2, n2[42] = C2, n2[43] = a2, n2[44] = we2, n2[45] = ke2, n2[46] = je2, n2[47] = U2, n2[48] = Se2) : Se2 = n2[48], n2[49] !== he2 || n2[50] !== pe2 || n2[51] !== be2 || n2[52] !== Se2 ? (Ne2 = Gr.jsxs("div", {
    className: "flex min-w-0 flex-1 items-center pr-4",
    children: [he2, pe2, be2, Se2]
  }), n2[49] = he2, n2[50] = pe2, n2[51] = be2, n2[52] = Se2, n2[53] = Ne2) : Ne2 = n2[53], n2[54] !== B2 ? (_e2 = B2 && Gr.jsx("div", {
    className: "track-center w-[34%] max-w-[380px] shrink-0 min-w-0 items-center gap-4 px-4 text-footnote font-medium text-foreground/50",
    children: B2
  }), n2[54] = B2, n2[55] = _e2) : _e2 = n2[55], n2[56] !== G2 || n2[57] !== K2 || n2[58] !== M2 || n2[59] !== I2 || n2[60] !== Y2 || n2[61] !== a2 ? (Ce2 = !Y2 && !K2 && Gr.jsx(hv, {
    song: a2,
    onRemove: null != I2 ? I2 : M2,
    inQueue: Boolean(I2),
    dislikes: G2
  }), n2[56] = G2, n2[57] = K2, n2[58] = M2, n2[59] = I2, n2[60] = Y2, n2[61] = a2, n2[62] = Ce2) : Ce2 = n2[62], n2[63] !== q2 || n2[64] !== W2 ? (Te2 = W2 && q2 && Gr.jsx(Qg, {
    src: q2.avatar,
    name: q2.nickname || q2.username || q2.id,
    className: "mr-1 h-7 w-7 shrink-0",
    imageClassName: "rounded-full border border-border/30",
    fallbackClassName: "text-caption"
  }), n2[63] = q2, n2[64] = W2, n2[65] = Te2) : Te2 = n2[65], n2[66] !== V2 || n2[67] !== de2 || n2[68] !== a2.duration ? (Ee2 = !V2 && Gr.jsx(Yg, {
    duration: a2.duration,
    showsBars: de2
  }), n2[66] = V2, n2[67] = de2, n2[68] = a2.duration, n2[69] = Ee2) : Ee2 = n2[69], n2[70] !== Y2 || n2[71] !== Q2 || n2[72] !== ee2 ? (Le2 = Q2 && !Y2 && Gr.jsx(A, {
    type: "button",
    variant: "ghost",
    size: "icon-xs",
    shape: "circle",
    onPointerDownCapture: ae2,
    onClick: se2,
    "data-queue-menu-trigger": "true",
    "aria-label": ee2("library.actions.more"),
    className: "text-foreground/55 duration-150",
    children: Gr.jsx(_.more, {
      weight: "Bold",
      className: "h-[18px] w-[18px]"
    })
  }), n2[70] = Y2, n2[71] = Q2, n2[72] = ee2, n2[73] = Le2) : Le2 = n2[73], n2[74] !== Ce2 || n2[75] !== Te2 || n2[76] !== Ee2 || n2[77] !== Le2 ? (Ae2 = Gr.jsxs("div", {
    className: "relative z-20 flex h-full shrink-0 items-center gap-1",
    children: [Ce2, Te2, Ee2, Le2]
  }), n2[74] = Ce2, n2[75] = Te2, n2[76] = Ee2, n2[77] = Le2, n2[78] = Ae2) : Ae2 = n2[78], n2[79] !== ce2 || n2[80] !== L2 || n2[81] !== a2.id || n2[82] !== s2 || n2[83] !== fe2 || n2[84] !== Ne2 || n2[85] !== _e2 || n2[86] !== Ae2 ? (Pe2 = Gr.jsxs("div", {
    style: s2,
    className: fe2,
    "data-track-id": a2.id,
    onClick: L2,
    onContextMenu: ce2,
    children: [Ne2, _e2, Ae2]
  }), n2[79] = ce2, n2[80] = L2, n2[81] = a2.id, n2[82] = s2, n2[83] = fe2, n2[84] = Ne2, n2[85] = _e2, n2[86] = Ae2, n2[87] = Pe2) : Pe2 = n2[87], Pe2;
}, (e2, t2) => Bg(e2, t2, ["dragHandleProps"]));
function yv(e2) {
  e2.target !== e2.currentTarget || "Enter" !== e2.key && " " !== e2.key || (e2.preventDefault(), e2.currentTarget.click());
}
const bv = Xr.memo(function (e2) {
  const t2 = Kr.c(31),
    {
      song: n2,
      className: a2,
      combinedStyle: r2,
      onMouseEnter: s2,
      onMouseLeave: i2,
      onClick: o2
    } = e2,
    l2 = `${n2.title} \u2014 ${n2.artist}`;
  let c2, u2, d2, m2, f2, h2, p2, g2, v2;
  return t2[0] !== a2 ? (c2 = x("flex flex-col space-y-2.5 group relative cursor-pointer w-full outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-cover", a2), t2[0] = a2, t2[1] = c2) : c2 = t2[1], t2[2] !== n2.artist || t2[3] !== n2.cover_art || t2[4] !== n2.id || t2[5] !== n2.source || t2[6] !== n2.title ? (u2 = Gr.jsx("div", {
    className: "relative aspect-square w-full rounded-cover overflow-hidden bg-muted",
    children: Gr.jsx(N, {
      src: n2.cover_art,
      title: n2.title,
      artist: n2.artist,
      size: 160,
      className: "w-full h-full rounded-cover",
      type: "track",
      source: n2.source,
      showSourceBadge: true,
      badgePosition: "bottom-right",
      songId: n2.id
    })
  }), t2[2] = n2.artist, t2[3] = n2.cover_art, t2[4] = n2.id, t2[5] = n2.source, t2[6] = n2.title, t2[7] = u2) : u2 = t2[7], t2[8] !== n2 ? (d2 = Gr.jsx(S, {
    song: n2,
    className: "mr-1.5 inline-flex align-middle"
  }), t2[8] = n2, t2[9] = d2) : d2 = t2[9], t2[10] !== n2.title ? (m2 = k(n2.title), t2[10] = n2.title, t2[11] = m2) : m2 = t2[11], t2[12] !== d2 || t2[13] !== m2 ? (f2 = Gr.jsxs(Yi, {
    size: "md",
    children: [d2, m2]
  }), t2[12] = d2, t2[13] = m2, t2[14] = f2) : f2 = t2[14], t2[15] !== n2 ? (h2 = n2.artist && n2.source ? Gr.jsx(Ui, {
    artists: k(n2.artist),
    source: n2.source,
    artistsArray: n2.artists,
    origin: j(n2),
    className: "text-callout text-muted-foreground hover:text-foreground transition-colors"
  }) : k(n2.artist) || "", t2[15] = n2, t2[16] = h2) : h2 = t2[16], t2[17] !== h2 ? (p2 = Gr.jsx(Vs, {
    hoverScope: ".group",
    className: "text-callout text-muted-foreground leading-tight",
    children: h2
  }), t2[17] = h2, t2[18] = p2) : p2 = t2[18], t2[19] !== f2 || t2[20] !== p2 ? (g2 = Gr.jsxs("div", {
    className: "px-0.5 min-w-0 space-y-0.5",
    children: [f2, p2]
  }), t2[19] = f2, t2[20] = p2, t2[21] = g2) : g2 = t2[21], t2[22] !== r2 || t2[23] !== o2 || t2[24] !== s2 || t2[25] !== i2 || t2[26] !== l2 || t2[27] !== c2 || t2[28] !== u2 || t2[29] !== g2 ? (v2 = Gr.jsxs("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": l2,
    onKeyDown: yv,
    style: r2,
    className: c2,
    onMouseEnter: s2,
    onMouseLeave: i2,
    onClick: o2,
    children: [u2, g2]
  }), t2[22] = r2, t2[23] = o2, t2[24] = s2, t2[25] = i2, t2[26] = l2, t2[27] = c2, t2[28] = u2, t2[29] = g2, t2[30] = v2) : v2 = t2[30], v2;
}, function (e2, t2) {
  return e2.song.id === t2.song.id && e2.song.title === t2.song.title && e2.song.artist === t2.song.artist && e2.song.cover_art === t2.song.cover_art && e2.song.source === t2.song.source && e2.className === t2.className;
});
const wv = Xr.memo(function (e2) {
  const t2 = Kr.c(32),
    {
      song: n2,
      className: a2,
      combinedStyle: r2,
      onMouseEnter: s2,
      onMouseLeave: i2,
      onClick: o2
    } = e2;
  let l2, c2, u2, d2, m2, f2, h2, p2, g2, v2;
  return t2[0] !== a2 ? (l2 = x("relative h-9 px-2 rounded-full overflow-hidden border border-border/10 shadow-md flex items-center gap-2 cursor-pointer hover:brightness-110 transition-all duration-200 select-none w-fit max-w-[240px]", a2), t2[0] = a2, t2[1] = l2) : l2 = t2[1], t2[2] !== n2.cover_art ? (c2 = n2.cover_art && Gr.jsxs(Gr.Fragment, {
    children: [Gr.jsx("div", {
      className: "absolute inset-0 z-0 bg-cover bg-center",
      style: {
        backgroundImage: `url(${n2.cover_art})`,
        filter: "blur(4px) brightness(0.4)"
      }
    }), Gr.jsx("div", {
      className: "absolute inset-0 z-0 bg-black/30"
    })]
  }), t2[2] = n2.cover_art, t2[3] = c2) : c2 = t2[3], t2[4] !== n2.artist || t2[5] !== n2.cover_art || t2[6] !== n2.source || t2[7] !== n2.title ? (u2 = Gr.jsx(N, {
    src: n2.cover_art,
    title: n2.title,
    artist: n2.artist,
    size: 26,
    source: n2.source,
    disableHoverEffect: true,
    disablePlayerTracking: true,
    className: "rounded-full flex-shrink-0 border border-white/20"
  }), t2[4] = n2.artist, t2[5] = n2.cover_art, t2[6] = n2.source, t2[7] = n2.title, t2[8] = u2) : u2 = t2[8], t2[9] !== n2 ? (d2 = Gr.jsx(S, {
    song: n2,
    className: "w-2.5 h-2.5 text-white/70 flex-shrink-0"
  }), t2[9] = n2, t2[10] = d2) : d2 = t2[10], t2[11] !== n2.title ? (m2 = Gr.jsx(Vs, {
    children: n2.title
  }), t2[11] = n2.title, t2[12] = m2) : m2 = t2[12], t2[13] !== d2 || t2[14] !== m2 ? (f2 = Gr.jsxs("span", {
    className: "text-micro font-semibold text-white overflow-hidden max-w-[120px] leading-tight flex items-center gap-1",
    children: [d2, m2]
  }), t2[13] = d2, t2[14] = m2, t2[15] = f2) : f2 = t2[15], t2[16] !== n2.artist ? (h2 = Gr.jsx(Vs, {
    containerClassName: "max-w-[120px] mt-0.5",
    className: "text-micro text-white/60 leading-tight",
    children: n2.artist
  }), t2[16] = n2.artist, t2[17] = h2) : h2 = t2[17], t2[18] !== f2 || t2[19] !== h2 ? (p2 = Gr.jsxs("div", {
    className: "flex flex-col min-w-0 text-left justify-center",
    children: [f2, h2]
  }), t2[18] = f2, t2[19] = h2, t2[20] = p2) : p2 = t2[20], t2[21] !== u2 || t2[22] !== p2 ? (g2 = Gr.jsxs("div", {
    className: "relative z-10 flex items-center gap-2 w-full",
    children: [u2, p2]
  }), t2[21] = u2, t2[22] = p2, t2[23] = g2) : g2 = t2[23], t2[24] !== r2 || t2[25] !== o2 || t2[26] !== s2 || t2[27] !== i2 || t2[28] !== l2 || t2[29] !== c2 || t2[30] !== g2 ? (v2 = Gr.jsxs("div", {
    style: r2,
    className: l2,
    onMouseEnter: s2,
    onMouseLeave: i2,
    onClick: o2,
    children: [c2, g2]
  }), t2[24] = r2, t2[25] = o2, t2[26] = s2, t2[27] = i2, t2[28] = l2, t2[29] = c2, t2[30] = g2, t2[31] = v2) : v2 = t2[31], v2;
}, (e2, t2) => e2.song.id === t2.song.id && e2.song.title === t2.song.title && e2.song.artist === t2.song.artist && e2.song.cover_art === t2.song.cover_art && e2.className === t2.className);
function kv(e2) {
  return e2.id;
}
function jv(e2) {
  return e2.toggleUnfavorite;
}
function Sv(e2) {
  const t2 = Kr.c(2),
    n2 = Yo(e2);
  let a2;
  return t2[0] !== n2 ? (a2 = Gr.jsx(Nv, {
    ...n2
  }), t2[0] = n2, t2[1] = a2) : a2 = t2[1], a2;
}
const Nv = Xr.memo(function (e2) {
  var t2, n2, r2, s2, i2, o2, l2;
  const c2 = Kr.c(130),
    d2 = Xr.useContext(Fp);
  let m2;
  c2[0] !== d2 || c2[1] !== e2 ? (m2 = {
    ...d2,
    ...e2
  }, c2[0] = d2, c2[1] = e2, c2[2] = m2) : m2 = c2[2];
  const f2 = m2,
    {
      song: h2,
      variant: p2,
      style: g2,
      className: v2,
      onClick: x2,
      onPlaySong: y2,
      onToggleLike: b2,
      onQueueSong: w2,
      onPlayNext: k2,
      onRemove: j2,
      onDelete: S2,
      onRemoveFromQueue: N2,
      onLoadSimilarTracks: _2,
      onMouseEnter: C2,
      onMouseLeave: T2,
      selectionMode: L2,
      isSelected: A2,
      onToggleSelection: I2,
      dragHandleProps: M2,
      showAddedDate: R2,
      showContextMenu: z2,
      removeOnContextMenu: D2,
      contextMenuModal: F2,
      hideDuration: O2,
      showMoreButton: $2,
      hideQuickActions: B2,
      dislikes: U2,
      hideStats: q2,
      layout: H2,
      size: W2,
      titleFirst: V2,
      hideArtist: Q2,
      flush: K2,
      isLive: G2,
      disablePlayerTracking: X2,
      forceMarquee: Y2,
      showCollaborator: J2,
      editableTitle: Z2,
      editableArtist: ee2,
      onEditTitle: te2,
      onEditArtist: ne2,
      onCoverClick: ae2,
      index: se2,
      showTrackNumber: ie2,
      showRank: oe2,
      isDeleting: le2,
      playCount: ce2,
      playbackCount: ue2,
      trend: de2,
      trailing: me2,
      centerMeta: fe2,
      titleAccessory: pe2,
      collaboratorInfo: ge2
    } = f2,
    ve2 = void 0 === p2 ? "library" : p2,
    xe2 = void 0 !== L2 && L2,
    ye2 = void 0 !== A2 && A2,
    be2 = void 0 !== R2 && R2,
    we2 = void 0 === z2 || z2,
    ke2 = void 0 !== D2 && D2,
    je2 = void 0 !== O2 && O2,
    Se2 = void 0 !== $2 && $2,
    Ne2 = void 0 !== B2 && B2,
    _e2 = void 0 !== U2 && U2,
    Ce2 = void 0 !== q2 && q2,
    Te2 = void 0 !== G2 && G2,
    Ee2 = void 0 !== X2 && X2,
    Le2 = void 0 !== Y2 && Y2,
    Ae2 = void 0 !== J2 && J2,
    Pe2 = void 0 !== ie2 && ie2,
    Ie2 = void 0 !== oe2 && oe2,
    Me2 = void 0 !== le2 && le2,
    Re2 = null != (n2 = null != ge2 ? ge2 : null == (t2 = h2.collaborators) ? void 0 : t2[0]) ? n2 : null,
    ze2 = Xr.useContext(Um),
    De2 = null != F2 ? F2 : ze2,
    [Fe2, Oe2] = Xr.useState(false);
  let $e2;
  c2[3] !== ye2 || c2[4] !== x2 || c2[5] !== _2 || c2[6] !== k2 || c2[7] !== y2 || c2[8] !== w2 || c2[9] !== b2 || c2[10] !== I2 || c2[11] !== xe2 || c2[12] !== h2 || c2[13] !== ve2 ? ($e2 = {
    song: h2,
    variant: ve2,
    selectionMode: xe2,
    isSelected: ye2,
    onClick: x2,
    onPlaySong: y2,
    onToggleLike: b2,
    onQueueSong: w2,
    onPlayNext: k2,
    onToggleSelection: I2,
    onLoadSimilarTracks: _2
  }, c2[3] = ye2, c2[4] = x2, c2[5] = _2, c2[6] = k2, c2[7] = y2, c2[8] = w2, c2[9] = b2, c2[10] = I2, c2[11] = xe2, c2[12] = h2, c2[13] = ve2, c2[14] = $e2) : $e2 = c2[14];
  const {
    isFavorite: Be2,
    isUnfavorited: Ue2,
    isAnyArtistUnfavorited: qe2,
    isDownloading: He2,
    isCurrentSong: We2,
    setContextPage: Ve2,
    handleTrackClick: Qe2,
    handleInternalToggleLike: Ke2,
    handleInternalQueueSong: Ge2,
    handleInternalPlayNext: Xe2,
    handleInternalLoadSimilarTracks: Ye2,
    handleShare: Je2,
    toggleUnfavorite: Ze2
  } = function (e3) {
    var t3;
    const n3 = Kr.c(49),
      {
        song: r3,
        variant: s3,
        selectionMode: i3,
        onClick: o3,
        onPlaySong: l3,
        onToggleLike: c3,
        onQueueSong: d3,
        onPlayNext: m3,
        onToggleSelection: f3,
        onLoadSimilarTracks: h3
      } = e3,
      p3 = void 0 !== i3 && i3,
      {
        t: g3
      } = P(),
      v3 = gn(r3.id),
      x3 = vn(r3.id),
      y3 = re(jv),
      b3 = r3.artists;
    let w3;
    n3[0] !== b3 ? (w3 = null != (t3 = null == b3 ? void 0 : b3.map(kv).filter(Boolean)) ? t3 : [], n3[0] = b3, n3[1] = w3) : w3 = n3[1];
    const k3 = w3;
    let j3;
    n3[2] !== k3 ? (j3 = e4 => k3.some(t4 => "artist" === e4.unfavoritesTypes.get(t4)), n3[2] = k3, n3[3] = j3) : j3 = n3[3];
    const S3 = re(j3),
      N3 = pg(r3.id);
    let _3;
    n3[4] !== r3.id ? (_3 = e4 => e4.cachedIds.has(r3.id), n3[4] = r3.id, n3[5] = _3) : _3 = n3[5];
    const C3 = xn(_3),
      [T3, L3] = Qr.useState("main"),
      A3 = Qr.useRef(N3);
    let I3, M3, R3;
    n3[6] !== N3 ? (I3 = () => {
      A3.current = N3;
    }, M3 = [N3], n3[6] = N3, n3[7] = I3, n3[8] = M3) : (I3 = n3[7], M3 = n3[8]), Qr.useEffect(I3, M3), n3[9] !== r3.id ? (R3 = e4 => {
      var t4;
      return void 0 !== (null == (t4 = e4.currentSong) ? void 0 : t4.id) && String(e4.currentSong.id) === String(r3.id);
    }, n3[9] = r3.id, n3[10] = R3) : R3 = n3[10];
    const z3 = u(R3);
    let D3;
    n3[11] !== z3 || n3[12] !== o3 || n3[13] !== l3 || n3[14] !== f3 || n3[15] !== p3 || n3[16] !== r3 ? (D3 = e4 => {
      p3 && f3 ? (e4.preventDefault(), e4.stopPropagation(), f3(r3.id, e4.shiftKey)) : o3 ? o3() : z3 ? u.getState().toggle() : l3 ? l3(r3) : u.getState().play(r3, true);
    }, n3[11] = z3, n3[12] = o3, n3[13] = l3, n3[14] = f3, n3[15] = p3, n3[16] = r3, n3[17] = D3) : D3 = n3[17];
    const F3 = D3;
    let O3;
    n3[18] !== c3 || n3[19] !== r3 ? (O3 = e4 => {
      e4.preventDefault(), e4.stopPropagation(), c3 ? c3(r3.id, r3) : E.getState().toggleFavorite(r3.id, r3);
    }, n3[18] = c3, n3[19] = r3, n3[20] = O3) : O3 = n3[20];
    const $3 = O3;
    let B3;
    n3[21] !== d3 || n3[22] !== r3 ? (B3 = e4 => {
      null == e4 || e4.preventDefault(), null == e4 || e4.stopPropagation(), d3 ? d3(r3) : u.getState().addMultipleToQueue([r3]);
    }, n3[21] = d3, n3[22] = r3, n3[23] = B3) : B3 = n3[23];
    const U3 = B3;
    let q3;
    n3[24] !== m3 || n3[25] !== r3 ? (q3 = e4 => {
      null == e4 || e4.preventDefault(), null == e4 || e4.stopPropagation(), m3 ? m3(r3) : gg(r3);
    }, n3[24] = m3, n3[25] = r3, n3[26] = q3) : q3 = n3[26];
    const H3 = q3;
    let W3;
    n3[27] !== h3 || n3[28] !== r3 || n3[29] !== g3 ? (W3 = async e4 => {
      null == e4 || e4.preventDefault(), null == e4 || e4.stopPropagation(), h3 ? h3(r3) : u.getState().startTrackWave(r3, g3("home.sections.similar.title") || "\u041F\u043E\u0445\u043E\u0436\u0435\u0435");
    }, n3[27] = h3, n3[28] = r3, n3[29] = g3, n3[30] = W3) : W3 = n3[30];
    const V3 = W3;
    let Q3;
    n3[31] !== r3 || n3[32] !== g3 ? (Q3 = async () => {
      try {
        await ug.shareTrack(r3, {
          title: g3("common.share")
        });
      } catch (e4) {
        const t4 = e4;
        a.error("[shareService] Failed to share track:", t4);
      }
    }, n3[31] = r3, n3[32] = g3, n3[33] = Q3) : Q3 = n3[33];
    const K3 = Q3;
    let G3;
    return n3[34] !== T3 || n3[35] !== V3 || n3[36] !== H3 || n3[37] !== U3 || n3[38] !== $3 || n3[39] !== K3 || n3[40] !== F3 || n3[41] !== S3 || n3[42] !== C3 || n3[43] !== z3 || n3[44] !== N3 || n3[45] !== v3 || n3[46] !== x3 || n3[47] !== y3 ? (G3 = {
      isFavorite: v3,
      isUnfavorited: x3,
      isAnyArtistUnfavorited: S3,
      isDownloading: N3,
      isCached: C3,
      isCurrentSong: z3,
      contextPage: T3,
      setContextPage: L3,
      handleTrackClick: F3,
      handleInternalToggleLike: $3,
      handleInternalQueueSong: U3,
      handleInternalPlayNext: H3,
      handleInternalLoadSimilarTracks: V3,
      handleShare: K3,
      toggleUnfavorite: y3
    }, n3[34] = T3, n3[35] = V3, n3[36] = H3, n3[37] = U3, n3[38] = $3, n3[39] = K3, n3[40] = F3, n3[41] = S3, n3[42] = C3, n3[43] = z3, n3[44] = N3, n3[45] = v3, n3[46] = x3, n3[47] = y3, n3[48] = G3) : G3 = n3[48], G3;
  }($e2);
  let et2;
  c2[15] !== We2 ? (et2 = e3 => e3.isLoading && We2, c2[15] = We2, c2[16] = et2) : et2 = c2[16];
  const tt2 = u(et2);
  let nt2;
  c2[17] !== ve2 ? (nt2 = (e3 => {
    switch (e3) {
      case "queue":
        return {
          ...Ug,
          showRemoveFromQueue: true,
          showDragHandle: true
        };
      case "pill":
      case "arc":
        return {
          ...Ug,
          showAddToPlaylist: false
        };
      case "search":
      case "artist":
      case "large_cover":
      case "card":
        return Ug;
      default:
        return {
          ...Ug,
          showRemoveButton: true,
          showDragHandle: true
        };
    }
  })(ve2), c2[17] = ve2, c2[18] = nt2) : nt2 = c2[18];
  const at2 = nt2,
    rt2 = null != (r2 = f2.showRemoveButton) ? r2 : at2.showRemoveButton,
    st2 = null != (s2 = f2.showDeleteButton) ? s2 : at2.showDeleteButton,
    it2 = null != (i2 = f2.showRemoveFromQueue) ? i2 : at2.showRemoveFromQueue,
    ot2 = null != (o2 = f2.showAddToPlaylist) ? o2 : at2.showAddToPlaylist,
    lt2 = null != (l2 = f2.showDragHandle) ? l2 : at2.showDragHandle,
    ct2 = rt2 ? j2 : void 0;
  let ut2;
  c2[19] !== Qe2 || c2[20] !== N2 || c2[21] !== I2 || c2[22] !== ct2 ? (ut2 = {
    onClick: Qe2,
    onToggleSelection: I2,
    onRemoveFromQueue: N2,
    onRemove: ct2
  }, c2[19] = Qe2, c2[20] = N2, c2[21] = I2, c2[22] = ct2, c2[23] = ut2) : ut2 = c2[23];
  const dt2 = Yo(ut2),
    mt2 = Pe2 && "number" == typeof se2 ? se2 + 1 : null,
    ft2 = Ie2 && "number" == typeof se2 ? se2 + 1 : null;
  let ht2;
  c2[24] !== g2 ? (ht2 = {
    ...g2,
    userSelect: "none",
    WebkitUserSelect: "none",
    WebkitTouchCallout: "none"
  }, c2[24] = g2, c2[25] = ht2) : ht2 = c2[25];
  const pt2 = ht2;
  let gt2;
  c2[26] !== Xe2 ? (gt2 = () => {
    Xe2();
  }, c2[26] = Xe2, c2[27] = gt2) : gt2 = c2[27];
  const vt2 = gt2;
  let xt2;
  c2[28] !== Ge2 ? (xt2 = () => {
    Ge2();
  }, c2[28] = Ge2, c2[29] = xt2) : xt2 = c2[29];
  const yt2 = xt2;
  let bt2;
  c2[30] !== h2 || c2[31] !== Ze2 ? (bt2 = () => {
    Ze2(h2.id, h2, "track");
  }, c2[30] = h2, c2[31] = Ze2, c2[32] = bt2) : bt2 = c2[32];
  const wt2 = bt2;
  let kt2;
  c2[33] !== Ve2 ? (kt2 = e3 => {
    Oe2(e3), e3 || Ve2("main");
  }, c2[33] = Ve2, c2[34] = kt2) : kt2 = c2[34];
  const jt2 = kt2;
  let St2;
  c2[35] !== Re2 || c2[36] !== yt2 || c2[37] !== vt2 || c2[38] !== wt2 || c2[39] !== Ye2 || c2[40] !== Ke2 || c2[41] !== Je2 || c2[42] !== Me2 || c2[43] !== Be2 || c2[44] !== Fe2 || c2[45] !== Ue2 || c2[46] !== S2 || c2[47] !== j2 || c2[48] !== N2 || c2[49] !== ot2 || c2[50] !== be2 || c2[51] !== st2 || c2[52] !== rt2 || c2[53] !== it2 || c2[54] !== h2 || c2[55] !== ve2 ? (St2 = () => {
    var e3;
    const t3 = _l.getState(),
      n3 = he.getState().user,
      r3 = t3.isInRoom && !!(null == (e3 = t3.currentRoom) ? void 0 : e3.creator_id) && t3.currentRoom.creator_id !== (null == n3 ? void 0 : n3.id);
    return Gr.jsx(Rg, {
      isMenuOpen: Fe2,
      song: h2,
      isFavorite: Be2,
      isUnfavorited: Ue2,
      isDeleting: Me2,
      showAddToPlaylist: ot2,
      showRemoveButton: rt2,
      showRemoveFromQueue: it2,
      showDeleteButton: st2,
      onPlayNext: vt2,
      onAddToQueue: yt2,
      onLoadSimilarTracks: Ye2,
      onToggleLike: Ke2,
      onToggleUnfavorite: wt2,
      onShare: Je2,
      onRemove: j2,
      onRemoveFromQueue: N2,
      onDelete: S2,
      showHeader: true,
      collaborator: Re2,
      addedAt: h2.added_at,
      showAddedDate: be2,
      onSuggest: r3 ? async () => {
        try {
          await t3.suggestTrack(h2);
        } catch (e4) {
          const t4 = e4;
          a.error("Failed to suggest track:", t4);
        }
      } : void 0,
      hideWave: "queue" === ve2
    });
  }, c2[35] = Re2, c2[36] = yt2, c2[37] = vt2, c2[38] = wt2, c2[39] = Ye2, c2[40] = Ke2, c2[41] = Je2, c2[42] = Me2, c2[43] = Be2, c2[44] = Fe2, c2[45] = Ue2, c2[46] = S2, c2[47] = j2, c2[48] = N2, c2[49] = ot2, c2[50] = be2, c2[51] = st2, c2[52] = rt2, c2[53] = it2, c2[54] = h2, c2[55] = ve2, c2[56] = St2) : St2 = c2[56];
  const Nt2 = St2;
  let _t2;
  c2[57] !== v2 || c2[58] !== pt2 || c2[59] !== C2 || c2[60] !== T2 || c2[61] !== dt2.onClick || c2[62] !== h2 ? (_t2 = {
    song: h2,
    className: v2,
    combinedStyle: pt2,
    onMouseEnter: C2,
    onMouseLeave: T2,
    onClick: dt2.onClick
  }, c2[57] = v2, c2[58] = pt2, c2[59] = C2, c2[60] = T2, c2[61] = dt2.onClick, c2[62] = h2, c2[63] = _t2) : _t2 = c2[63];
  const Ct2 = _t2;
  let Tt2;
  c2[64] !== Re2 || c2[65] !== Ct2 || c2[66] !== fe2 || c2[67] !== v2 || c2[68] !== pt2 || c2[69] !== Ee2 || c2[70] !== _e2 || c2[71] !== M2 || c2[72] !== ee2 || c2[73] !== Z2 || c2[74] !== K2 || c2[75] !== Le2 || c2[76] !== Q2 || c2[77] !== je2 || c2[78] !== Ne2 || c2[79] !== Ce2 || c2[80] !== qe2 || c2[81] !== We2 || c2[82] !== He2 || c2[83] !== Te2 || c2[84] !== tt2 || c2[85] !== ye2 || c2[86] !== Ue2 || c2[87] !== H2 || c2[88] !== ae2 || c2[89] !== ne2 || c2[90] !== te2 || c2[91] !== C2 || c2[92] !== T2 || c2[93] !== dt2.onClick || c2[94] !== dt2.onRemove || c2[95] !== dt2.onRemoveFromQueue || c2[96] !== dt2.onToggleSelection || c2[97] !== ce2 || c2[98] !== ue2 || c2[99] !== ft2 || c2[100] !== ke2 || c2[101] !== xe2 || c2[102] !== Ae2 || c2[103] !== lt2 || c2[104] !== Se2 || c2[105] !== W2 || c2[106] !== h2 || c2[107] !== g2 || c2[108] !== pe2 || c2[109] !== V2 || c2[110] !== mt2 || c2[111] !== me2 || c2[112] !== de2 || c2[113] !== ve2 ? (Tt2 = "large_cover" === ve2 ? Gr.jsx(bv, {
    ...Ct2
  }) : "arc" === ve2 ? Gr.jsx(Hg, {
    ...Ct2
  }) : "pill" === ve2 ? Gr.jsx(wv, {
    ...Ct2
  }) : "inline" === ve2 ? Gr.jsx(lo, {
    song: h2,
    className: v2,
    style: pt2,
    layout: H2,
    size: W2,
    titleFirst: V2,
    hideArtist: Q2,
    flush: K2,
    forceMarquee: Le2,
    disablePlayerTracking: Ee2,
    isCurrentSong: We2,
    isLive: Te2,
    trend: de2,
    trailing: me2,
    onClick: dt2.onClick,
    onMouseEnter: C2,
    onMouseLeave: T2
  }) : "card" === ve2 ? Gr.jsx(Wg, {
    ...Ct2,
    isCurrentSong: We2
  }) : Gr.jsx(xv, {
    song: h2,
    className: v2,
    style: g2,
    dragHandleProps: M2,
    variant: ve2,
    showDragHandle: lt2,
    showCollaborator: Ae2,
    hideDuration: je2,
    showMoreButton: Se2,
    hideQuickActions: Ne2,
    dislikes: _e2,
    hideStats: Ce2,
    isCurrentSong: We2,
    isLoading: tt2,
    isDownloading: He2,
    isUnfavorited: Ue2,
    isAnyArtistUnfavorited: qe2,
    selectionMode: xe2,
    isSelected: ye2,
    onToggleSelection: dt2.onToggleSelection,
    editableTitle: Z2,
    editableArtist: ee2,
    onEditTitle: te2,
    onEditArtist: ne2,
    onCoverClick: ae2,
    onClick: dt2.onClick,
    onRemoveFromQueue: dt2.onRemoveFromQueue,
    onRemove: dt2.onRemove,
    removeOnContextMenu: ke2,
    trackNumber: mt2,
    rank: ft2,
    playCount: ce2,
    playbackCount: ue2,
    centerMeta: fe2,
    titleAccessory: pe2,
    activeCollaborator: Re2
  }), c2[64] = Re2, c2[65] = Ct2, c2[66] = fe2, c2[67] = v2, c2[68] = pt2, c2[69] = Ee2, c2[70] = _e2, c2[71] = M2, c2[72] = ee2, c2[73] = Z2, c2[74] = K2, c2[75] = Le2, c2[76] = Q2, c2[77] = je2, c2[78] = Ne2, c2[79] = Ce2, c2[80] = qe2, c2[81] = We2, c2[82] = He2, c2[83] = Te2, c2[84] = tt2, c2[85] = ye2, c2[86] = Ue2, c2[87] = H2, c2[88] = ae2, c2[89] = ne2, c2[90] = te2, c2[91] = C2, c2[92] = T2, c2[93] = dt2.onClick, c2[94] = dt2.onRemove, c2[95] = dt2.onRemoveFromQueue, c2[96] = dt2.onToggleSelection, c2[97] = ce2, c2[98] = ue2, c2[99] = ft2, c2[100] = ke2, c2[101] = xe2, c2[102] = Ae2, c2[103] = lt2, c2[104] = Se2, c2[105] = W2, c2[106] = h2, c2[107] = g2, c2[108] = pe2, c2[109] = V2, c2[110] = mt2, c2[111] = me2, c2[112] = de2, c2[113] = ve2, c2[114] = Tt2) : Tt2 = c2[114];
  const Et2 = Tt2,
    Lt2 = "arc" === ve2 || "inline" === ve2 ? "h-full w-full" : void 0;
  if (!we2) {
    let e3;
    return c2[115] !== Et2 || c2[116] !== Lt2 ? (e3 = Gr.jsx("div", {
      className: Lt2,
      children: Et2
    }), c2[115] = Et2, c2[116] = Lt2, c2[117] = e3) : e3 = c2[117], e3;
  }
  let At2, Pt2, It2;
  return c2[118] !== Et2 || c2[119] !== Lt2 ? (At2 = Gr.jsx(Vp, {
    asChild: true,
    children: Gr.jsx("div", {
      className: Lt2,
      children: Et2
    })
  }), c2[118] = Et2, c2[119] = Lt2, c2[120] = At2) : At2 = c2[120], c2[121] !== Fe2 || c2[122] !== Nt2 || c2[123] !== xe2 ? (Pt2 = Fe2 && !xe2 && Gr.jsx(Qp, {
    className: "w-[248px] p-0 overflow-hidden",
    children: Nt2()
  }), c2[121] = Fe2, c2[122] = Nt2, c2[123] = xe2, c2[124] = Pt2) : Pt2 = c2[124], c2[125] !== jt2 || c2[126] !== De2 || c2[127] !== At2 || c2[128] !== Pt2 ? (It2 = Gr.jsxs(Wp, {
    modal: De2,
    onOpenChange: jt2,
    children: [At2, Pt2]
  }), c2[125] = jt2, c2[126] = De2, c2[127] = At2, c2[128] = Pt2, c2[129] = It2) : It2 = c2[129], It2;
}, function (e2, t2) {
  return Bg(e2, t2, ["dragHandleProps"]);
});
function _v(e2) {
  const t2 = Kr.c(40),
    {
      item: n2,
      children: a2,
      disabled: r2,
      className: s2,
      ignoreInteractive: i2
    } = e2;
  let o2, l2;
  t2[0] === Symbol.for("react.memo_cache_sentinel") ? (o2 = {
    duration: 200,
    easing: "cubic-bezier(0.25, 0.8, 0.25, 1)"
  }, t2[0] = o2) : o2 = t2[0], t2[1] !== r2 || t2[2] !== n2.id ? (l2 = {
    id: n2.id,
    disabled: r2,
    transition: o2
  }, t2[1] = r2, t2[2] = n2.id, t2[3] = l2) : l2 = t2[3];
  const {
    attributes: c2,
    listeners: u2,
    setNodeRef: d2,
    transform: m2,
    transition: f2,
    isDragging: h2
  } = bi(l2);
  let p2;
  t2[4] !== m2 ? (p2 = wi.Transform.toString(m2), t2[4] = m2, t2[5] = p2) : p2 = t2[5];
  const g2 = f2 || "transform 200ms cubic-bezier(0.25, 0.8, 0.25, 1)",
    v2 = h2 ? 0.5 : 1,
    y2 = h2 ? "1.02" : "1",
    b2 = h2 ? 1e3 : 0,
    w2 = h2 ? "grabbing" : "default";
  let k2;
  t2[6] !== p2 || t2[7] !== g2 || t2[8] !== v2 || t2[9] !== y2 || t2[10] !== b2 || t2[11] !== w2 ? (k2 = {
    transform: p2,
    transition: g2,
    opacity: v2,
    scale: y2,
    zIndex: b2,
    position: "relative",
    cursor: w2
  }, t2[6] = p2, t2[7] = g2, t2[8] = v2, t2[9] = y2, t2[10] = b2, t2[11] = w2, t2[12] = k2) : k2 = t2[12];
  const j2 = k2;
  let S2;
  t2[13] !== c2 || t2[14] !== a2 || t2[15] !== u2 ? (S2 = () => "function" == typeof a2 ? a2({
    listeners: u2,
    attributes: c2
  }) : a2, t2[13] = c2, t2[14] = a2, t2[15] = u2, t2[16] = S2) : S2 = t2[16];
  const N2 = S2,
    _2 = "function" == typeof a2,
    C2 = !_2 && "touch-none";
  let T2, E2, L2, A2, P2, I2;
  return t2[17] !== s2 || t2[18] !== C2 ? (T2 = x(C2, s2), t2[17] = s2, t2[18] = C2, t2[19] = T2) : T2 = t2[19], t2[20] !== c2 || t2[21] !== _2 ? (E2 = _2 ? {} : c2, t2[20] = c2, t2[21] = _2, t2[22] = E2) : E2 = t2[22], t2[23] !== _2 || t2[24] !== u2 ? (L2 = _2 ? {} : u2, t2[23] = _2, t2[24] = u2, t2[25] = L2) : L2 = t2[25], t2[26] !== i2 || t2[27] !== _2 || t2[28] !== u2 ? (A2 = i2 && !_2 ? {
    onPointerDown: e3 => {
      var t3;
      e3.target.closest("button,a,input,textarea,select") || null == (t3 = null == u2 ? void 0 : u2.onPointerDown) || t3.call(u2, e3);
    },
    onKeyDown: e3 => {
      var t3;
      e3.target === e3.currentTarget && (null == (t3 = null == u2 ? void 0 : u2.onKeyDown) || t3.call(u2, e3));
    }
  } : {}, t2[26] = i2, t2[27] = _2, t2[28] = u2, t2[29] = A2) : A2 = t2[29], t2[30] !== N2 ? (P2 = N2(), t2[30] = N2, t2[31] = P2) : P2 = t2[31], t2[32] !== d2 || t2[33] !== j2 || t2[34] !== T2 || t2[35] !== E2 || t2[36] !== L2 || t2[37] !== A2 || t2[38] !== P2 ? (I2 = Gr.jsx("div", {
    ref: d2,
    style: j2,
    className: T2,
    ...E2,
    ...L2,
    ...A2,
    children: P2
  }), t2[32] = d2, t2[33] = j2, t2[34] = T2, t2[35] = E2, t2[36] = L2, t2[37] = A2, t2[38] = P2, t2[39] = I2) : I2 = t2[39], I2;
}
const Cv = {
  library: 76,
  queue: 80,
  queuePanel: 64
};
const Tv = {
  activationConstraint: {
    distance: 5
  }
};
function Ev({
  items: e2,
  itemHeight: t2 = Cv.queue,
  overscan: n2 = 3,
  onDragStart: a2,
  onDragOver: r2,
  onDragEnd: s2,
  renderItem: i2,
  className: o2,
  disabled: l2 = false,
  scrollRef: c2,
  onScroll: u2
}) {
  const d2 = fi(hi(pi, Tv)),
    [m2, f2] = Xr.useState(null),
    h2 = Xr.useCallback(e3 => {
      var t3, n3;
      f2(e3), c2 && (n3 = e3, "function" == typeof (t3 = c2) ? t3(n3) : t3 && (t3.current = n3));
    }, [c2]),
    p2 = Qr.useMemo(() => e2.map(e3 => e3.id), [e2]),
    g2 = Es({
      useFlushSync: false,
      count: e2.length,
      getScrollElement: () => m2,
      estimateSize: () => t2,
      overscan: n2
    });
  Xr.useEffect(() => {
    const e3 = m2;
    if (!e3) return;
    const t3 = () => {
      e3.toggleAttribute("data-more-above", e3.scrollTop > 1), e3.toggleAttribute("data-more-below", e3.scrollTop + e3.clientHeight < e3.scrollHeight - 1);
    };
    t3(), e3.addEventListener("scroll", t3, {
      passive: true
    });
    const n3 = new ResizeObserver(t3);
    return n3.observe(e3), () => {
      e3.removeEventListener("scroll", t3), n3.disconnect();
    };
  }, [m2, e2.length]);
  const v2 = Xr.useRef({
    w: 0,
    h: 0
  });
  Xr.useLayoutEffect(() => {
    if (!m2) return;
    let t3 = null;
    const n3 = () => {
        null === t3 && (t3 = requestAnimationFrame(() => {
          t3 = null, g2.measure();
        }));
      },
      a3 = v2.current,
      r3 = m2.clientWidth,
      s3 = m2.clientHeight;
    r3 > 0 && s3 > 0 && (a3.w !== r3 || a3.h !== s3) && (a3.w = r3, a3.h = s3, n3());
    const i3 = new ResizeObserver(t4 => {
      const r4 = t4[0];
      if (!r4) return;
      const s4 = r4.contentRect.width,
        i4 = r4.contentRect.height,
        o4 = s4 !== a3.w || i4 !== a3.h || s4 > 0 && i4 > 0 && e2.length > 0 && 0 === g2.getVirtualItems().length;
      a3.w = s4, a3.h = i4, o4 && n3();
    });
    i3.observe(m2);
    const o3 = () => {
      !document.hidden && m2.clientHeight > 0 && n3();
    };
    return document.addEventListener("visibilitychange", o3), () => {
      i3.disconnect(), document.removeEventListener("visibilitychange", o3), null !== t3 && cancelAnimationFrame(t3);
    };
  }, [m2, e2.length]);
  const [y2, b2] = Xr.useState(false),
    w2 = Qr.useCallback(t3 => {
      const {
        over: n3
      } = t3;
      n3 && s2 && s2(t3, e2), requestAnimationFrame(() => requestAnimationFrame(() => b2(false)));
    }, [s2, e2]),
    k2 = Qr.useCallback(e3 => {
      b2(true), a2 && a2(e3);
    }, [a2]);
  return Gr.jsx("div", {
    ref: h2,
    className: x("scroll-edges w-full h-full overflow-auto", o2),
    tabIndex: 0,
    onScroll: u2,
    children: Gr.jsx(gi, {
      sensors: d2,
      collisionDetection: vi,
      onDragStart: k2,
      onDragOver: r2,
      onDragEnd: w2,
      onDragCancel: () => b2(false),
      children: Gr.jsx(xi, {
        items: p2,
        strategy: yi,
        disabled: l2,
        children: Gr.jsx("div", {
          style: {
            height: `${g2.getTotalSize()}px`,
            position: "relative",
            width: "100%"
          },
          children: g2.getVirtualItems().map(t3 => {
            const n3 = e2[t3.index];
            return n3 ? Gr.jsx("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${t3.size}px`,
                transform: `translateY(${t3.start}px)`,
                transition: y2 ? void 0 : "transform 220ms cubic-bezier(0.25, 0.8, 0.25, 1)"
              },
              children: Gr.jsx(_v, {
                item: n3,
                children: ({
                  listeners: e3,
                  attributes: a3
                }) => i2(n3, t3.index, l2 ? void 0 : {
                  ...e3,
                  ...a3
                })
              })
            }, n3.id) : null;
          })
        })
      })
    })
  });
}
function Lv(e2, t2) {
  return t2;
}
function Av(e2) {
  var t2, n2, a2;
  return null == (a2 = null == (n2 = null == (t2 = e2.settings) ? void 0 : t2.playerSettings) ? void 0 : n2.queue) ? void 0 : a2.style;
}
function Pv(e2) {
  return e2.closePanel;
}
function Iv(e2) {
  return e2.panel;
}
function Mv(e2) {
  return e2.shuffledIndices;
}
function Rv(e2) {
  return e2.isShuffled;
}
function zv(e2) {
  return e2.clearQueue;
}
function Dv(e2) {
  return e2.removeFromQueue;
}
function Fv(e2) {
  return e2.setQueueSongs;
}
function Ov(e2) {
  return e2.isGeneratingWave;
}
function $v(e2) {
  return e2.isLoadingSimilarTracks;
}
function Bv(e2) {
  return e2.queueSongs;
}
const Uv = Gr.jsx(_.playlist, {
    className: "h-4 w-4 text-muted-foreground/60"
  }),
  qv = "opacity-60 transition-opacity duration-200 hover:opacity-100",
  Hv = Xr.memo(function ({
    playerLayout: e2,
    isExpanded: t2,
    hideHeader: n2 = false
  }) {
    const {
        queueDataValue: s2,
        queueActionsValue: i2
      } = function (e3) {
        const t3 = Kr.c(90);
        let n3;
        t3[0] !== e3 ? (n3 = void 0 === e3 ? {} : e3, t3[0] = e3, t3[1] = n3) : n3 = t3[1];
        const {
            playerLayout: s3,
            isExpanded: i3
          } = n3,
          {
            t: o3
          } = P(),
          {
            currentSong: l3,
            playerLayout: c3,
            playerCustomSettings: d3
          } = cp(),
          {
            play: m3
          } = up(),
          f3 = u(Bv),
          h3 = u($v),
          p3 = u(Ov),
          g3 = u(Fv),
          v3 = u(Dv),
          x2 = u(zv),
          y3 = u(Rv),
          w3 = u(es(Mv)),
          k3 = b(Iv),
          j3 = b(Pv);
        let S3;
        t3[2] === Symbol.for("react.memo_cache_sentinel") ? (S3 = {
          autoLoad: false
        }, t3[2] = S3) : S3 = t3[2];
        const {
            toggleFavorite: N2
          } = rn(S3),
          _3 = null != s3 ? s3 : c3,
          C3 = "big" === d3.playerStyle,
          T3 = h3 || p3;
        let E3;
        t3[3] !== o3 ? (E3 = e4 => {
          u.getState().startTrackWave(e4, o3("home.sections.similar.title"));
        }, t3[3] = o3, t3[4] = E3) : E3 = t3[4];
        const L3 = E3,
          A3 = void 0 !== i3 ? i3 : !l3,
          I3 = r(Av) || "normal",
          M3 = f3;
        let R3;
        t3[5] !== y3 || t3[6] !== f3 || t3[7] !== w3 ? (R3 = y3 && w3.length === f3.length && w3.length > 0 ? w3.map(e4 => f3[e4]).filter(Boolean) : f3, t3[5] = y3, t3[6] = f3, t3[7] = w3, t3[8] = R3) : R3 = t3[8];
        const z3 = R3;
        let D3, F3, O3;
        t3[9] !== l3 || t3[10] !== z3 ? (D3 = l3 ? z3.findIndex(e4 => e4.id === l3.id && e4.source === l3.source) : -1, F3 = D3, O3 = -1 !== D3 ? z3.slice(0, D3) : [], t3[9] = l3, t3[10] = z3, t3[11] = D3, t3[12] = F3, t3[13] = O3) : (D3 = t3[11], F3 = t3[12], O3 = t3[13]);
        const $3 = -1 !== D3 ? z3[D3] : null;
        let B3, U3;
        t3[14] !== D3 || t3[15] !== z3 ? (B3 = -1 !== D3 ? z3.slice(D3 + 1) : z3, t3[14] = D3, t3[15] = z3, t3[16] = B3) : B3 = t3[16], t3[17] !== F3 || t3[18] !== O3 || t3[19] !== $3 || t3[20] !== B3 ? (U3 = {
          currentIdx: F3,
          playedSongs: O3,
          currentTrack: $3,
          upcomingSongs: B3
        }, t3[17] = F3, t3[18] = O3, t3[19] = $3, t3[20] = B3, t3[21] = U3) : U3 = t3[21];
        const {
          playedSongs: q2,
          currentTrack: H2,
          upcomingSongs: W2,
          currentIdx: V2
        } = U3;
        let Q2;
        t3[22] === Symbol.for("react.memo_cache_sentinel") ? (Q2 = new Set(), t3[22] = Q2) : Q2 = t3[22];
        const [K2, G2] = Qr.useState(Q2);
        let X2;
        if (t3[23] !== V2 || t3[24] !== H2 || t3[25] !== q2 || t3[26] !== I3 || t3[27] !== o3 || t3[28] !== W2) {
          {
            const e4 = [];
            if ("expanded" === I3) {
              if (q2.length > 0 && (e4.push({
                type: "header",
                label: o3("player.queue.played"),
                key: "header-played"
              }), q2.forEach((t4, n4) => {
                e4.push({
                  type: "track-played",
                  song: t4,
                  index: n4,
                  key: `played-${t4.id}-${n4}`
                });
              })), H2) {
                let n4, a2;
                t3[30] !== o3 ? (n4 = o3("player.queue.now_playing"), t3[30] = o3, t3[31] = n4) : n4 = t3[31], t3[32] !== n4 ? (a2 = {
                  type: "header",
                  label: n4,
                  key: "header-current"
                }, t3[32] = n4, t3[33] = a2) : a2 = t3[33], e4.push(a2);
                const r2 = `current-${H2.id}-${V2}`;
                let s4;
                t3[34] !== V2 || t3[35] !== H2 || t3[36] !== r2 ? (s4 = {
                  type: "track-current",
                  song: H2,
                  index: V2,
                  key: r2
                }, t3[34] = V2, t3[35] = H2, t3[36] = r2, t3[37] = s4) : s4 = t3[37], e4.push(s4);
              }
              if (W2.length > 0) {
                let n4, a2;
                t3[38] !== o3 ? (n4 = o3("player.queue.next"), t3[38] = o3, t3[39] = n4) : n4 = t3[39], t3[40] !== n4 ? (a2 = {
                  type: "header",
                  label: n4,
                  key: "header-upcoming"
                }, t3[40] = n4, t3[41] = a2) : a2 = t3[41], e4.push(a2);
                let r2 = 0;
                for (; r2 < W2.length;) {
                  const t4 = W2[r2],
                    n5 = t4.groupId;
                  if (n5) {
                    let a3 = r2 + 1;
                    for (; a3 < W2.length && W2[a3].groupId === n5;) a3++;
                    const s4 = W2.slice(r2, a3);
                    if (s4.length > 1) {
                      e4.push({
                        type: "group",
                        groupId: n5,
                        groupName: t4.groupName || n5,
                        groupCover: t4.groupCover,
                        tracks: s4,
                        startIndex: r2 + V2 + 1,
                        key: `group-${n5}`
                      }), r2 = a3;
                      continue;
                    }
                  }
                  e4.push({
                    type: "track-upcoming",
                    song: t4,
                    index: r2 + V2 + 1,
                    key: `upcoming-${t4.id}-${r2}`
                  }), r2++;
                }
              }
              X2 = e4;
            } else X2 = e4;
          }
          t3[23] = V2, t3[24] = H2, t3[25] = q2, t3[26] = I3, t3[27] = o3, t3[28] = W2, t3[29] = X2;
        } else X2 = t3[29];
        const Y2 = X2;
        let J2;
        t3[42] !== N2 ? (J2 = async (e4, t4) => {
          try {
            await N2(e4, t4);
          } catch (n4) {
            const e5 = n4;
            a.error("audio", "Error toggling like in Queue:", e5);
          }
        }, t3[42] = N2, t3[43] = J2) : J2 = t3[43];
        const Z2 = J2;
        let ee2;
        t3[44] !== V2 || t3[45] !== y3 || t3[46] !== g3 ? (ee2 = e4 => {
          if (g3(e4), y3) {
            const t4 = u.getState();
            t4.setShuffledIndices(e4.map(Lv)), t4.setCurrentShuffleIndex(V2);
          }
        }, t3[44] = V2, t3[45] = y3, t3[46] = g3, t3[47] = ee2) : ee2 = t3[47];
        const te2 = ee2;
        let ne2;
        t3[48] !== te2 || t3[49] !== V2 ? (ne2 = (e4, t4) => {
          const {
            active: n4,
            over: a2
          } = e4;
          if (a2 && n4.id !== a2.id) {
            const e5 = t4.findIndex(e6 => String(e6.id) === String(n4.id)),
              r2 = t4.findIndex(e6 => String(e6.id) === String(a2.id));
            if (-1 === e5 || -1 === r2) return;
            if (e5 <= V2) return;
            te2(ki(t4, e5, Math.max(V2 + 1, r2)));
          }
        }, t3[48] = te2, t3[49] = V2, t3[50] = ne2) : ne2 = t3[50];
        const ae2 = ne2;
        let re2;
        t3[51] !== te2 || t3[52] !== H2 || t3[53] !== q2 || t3[54] !== W2 ? (re2 = e4 => {
          const {
            active: t4,
            over: n4
          } = e4;
          if (n4 && t4.id !== n4.id) {
            const e5 = W2.findIndex(e6 => String(e6.id) === String(t4.id)),
              a2 = W2.findIndex(e6 => String(e6.id) === String(n4.id));
            if (-1 === e5 || -1 === a2) return;
            const r2 = ki(W2, e5, a2),
              s4 = [...q2, ...(H2 ? [H2] : []), ...r2];
            te2(s4);
          }
        }, t3[51] = te2, t3[52] = H2, t3[53] = q2, t3[54] = W2, t3[55] = re2) : re2 = t3[55];
        const se2 = re2;
        let ie2;
        t3[56] === Symbol.for("react.memo_cache_sentinel") ? (ie2 = e4 => {
          G2(t4 => {
            const n4 = new Set(t4);
            return n4.has(e4) ? n4.delete(e4) : n4.add(e4), n4;
          });
        }, t3[56] = ie2) : ie2 = t3[56];
        const oe2 = ie2;
        let le2, ce2, ue2;
        t3[57] !== k3 || t3[58] !== j3 || t3[59] !== _3 || t3[60] !== M3.length ? (le2 = () => {
          "panel" === _3 && "queue" === k3 && (M3.length > 0 || j3());
        }, ce2 = [_3, k3, M3.length, j3], t3[57] = k3, t3[58] = j3, t3[59] = _3, t3[60] = M3.length, t3[61] = le2, t3[62] = ce2) : (le2 = t3[61], ce2 = t3[62]), Qr.useEffect(le2, ce2), t3[63] !== V2 || t3[64] !== l3 || t3[65] !== H2 || t3[66] !== z3 || t3[67] !== K2 || t3[68] !== A3 || t3[69] !== y3 || t3[70] !== q2 || t3[71] !== I3 || t3[72] !== C3 || t3[73] !== T3 || t3[74] !== _3 || t3[75] !== M3 || t3[76] !== W2 || t3[77] !== Y2 ? (ue2 = {
          currentSong: l3,
          resolvedPlayerLayout: _3,
          resolvedIsBigMode: C3,
          isExpanded: A3,
          queueStyle: I3,
          displaySongs: z3,
          playedSongs: q2,
          currentTrack: H2,
          upcomingSongs: W2,
          currentIdx: V2,
          expandedGroups: K2,
          virtualRows: Y2,
          isShuffled: y3,
          songs: M3,
          resolvedIsLoadingSimilarTracks: T3
        }, t3[63] = V2, t3[64] = l3, t3[65] = H2, t3[66] = z3, t3[67] = K2, t3[68] = A3, t3[69] = y3, t3[70] = q2, t3[71] = I3, t3[72] = C3, t3[73] = T3, t3[74] = _3, t3[75] = M3, t3[76] = W2, t3[77] = Y2, t3[78] = ue2) : ue2 = t3[78];
        const de2 = ue2;
        let me2;
        t3[79] !== x2 || t3[80] !== ae2 || t3[81] !== se2 || t3[82] !== Z2 || t3[83] !== m3 || t3[84] !== v3 || t3[85] !== L3 ? (me2 = {
          play: m3,
          removeFromQueue: v3,
          clearQueue: x2,
          resolvedOnLoadSimilarTracks: L3,
          handleLike: Z2,
          handleDragEnd: ae2,
          handleDragEndUpcoming: se2,
          toggleGroup: oe2
        }, t3[79] = x2, t3[80] = ae2, t3[81] = se2, t3[82] = Z2, t3[83] = m3, t3[84] = v3, t3[85] = L3, t3[86] = me2) : me2 = t3[86];
        const fe2 = me2;
        let he2;
        return t3[87] !== fe2 || t3[88] !== de2 ? (he2 = {
          queueDataValue: de2,
          queueActionsValue: fe2
        }, t3[87] = fe2, t3[88] = de2, t3[89] = he2) : he2 = t3[89], he2;
      }({
        playerLayout: e2,
        isExpanded: t2
      }),
      {
        t: o2,
        currentLanguage: l2
      } = P(),
      {
        currentSong: c2,
        resolvedPlayerLayout: d2,
        resolvedIsBigMode: m2,
        isExpanded: f2,
        queueStyle: h2,
        displaySongs: p2,
        playedSongs: g2,
        upcomingSongs: v2,
        expandedGroups: y2,
        virtualRows: w2,
        currentIdx: k2,
        songs: j2,
        resolvedIsLoadingSimilarTracks: S2
      } = s2,
      {
        play: _2,
        removeFromQueue: C2,
        clearQueue: T2,
        resolvedOnLoadSimilarTracks: E2,
        handleLike: L2,
        handleDragEnd: A2,
        toggleGroup: I2
      } = i2,
      M2 = Qr.useRef(null),
      R2 = Es({
        useFlushSync: false,
        count: w2.length,
        getScrollElement: () => M2.current,
        estimateSize: e3 => {
          const t3 = w2[e3];
          return "header" === (null == t3 ? void 0 : t3.type) ? 36 : "group" === (null == t3 ? void 0 : t3.type) && y2.has(t3.groupId) ? 80 + 72 * t3.tracks.length + 4 * (t3.tracks.length - 1) + 12 : 80;
        },
        getItemKey: e3 => {
          var t3, n3;
          return null != (n3 = null == (t3 = w2[e3]) ? void 0 : t3.key) ? n3 : e3;
        },
        overscan: 5
      }),
      z2 = Qr.useRef(null),
      D2 = "expanded" === h2,
      F2 = "panel" === d2 ? Cv.queuePanel : Cv.queue,
      O2 = function (e3, t3, n3, a2) {
        const r2 = Qr.useRef(0),
          s3 = Qr.useRef(false),
          i3 = Qr.useRef(n3);
        i3.current = n3;
        const o3 = Qr.useCallback(() => {
          const t4 = e3.current;
          if (!t4) return;
          if (document.hidden || null === t4.offsetParent) return void (s3.current = true);
          s3.current = false;
          const n4 = i3.current();
          null === n4 || Math.abs(t4.scrollTop - n4) < 4 || t4.scrollTo({
            top: n4,
            behavior: "smooth"
          });
        }, [e3]);
        return Qr.useEffect(() => {
          if (!t3 || Date.now() - r2.current < 4e3) return;
          const e4 = requestAnimationFrame(o3);
          return () => cancelAnimationFrame(e4);
        }, [t3, o3]), Qr.useEffect(() => {
          const t4 = e3.current;
          if (!t4) return;
          const n4 = () => {
              s3.current && o3();
            },
            a3 = new IntersectionObserver(e4 => {
              e4.some(e5 => e5.isIntersecting) && n4();
            });
          return a3.observe(t4), document.addEventListener("visibilitychange", n4), () => {
            a3.disconnect(), document.removeEventListener("visibilitychange", n4);
          };
        }, [e3, o3, a2]), Qr.useCallback(() => {
          r2.current = Date.now();
        }, []);
      }(D2 ? M2 : z2, null == c2 ? void 0 : c2.id, () => {
        var e3, t3;
        if (D2) {
          const n3 = w2.findIndex(e4 => "track-current" === e4.type),
            a2 = n3 < 0 ? null : null != (t3 = null == (e3 = R2.getOffsetForIndex(Math.max(0, n3 - 1), "start")) ? void 0 : e3[0]) ? t3 : null;
          return null === a2 ? null : Math.max(0, a2 - 16);
        }
        return k2 < 0 ? null : Math.max(0, (k2 - 1) * F2 - 16);
      }, D2 ? "grouped" : "flat"),
      $2 = Gr.jsx(Ep, {
        songsCount: j2.length,
        upcomingCount: v2.length,
        onClear: T2,
        stretch: "panel" === d2
      }),
      B2 = Xr.useMemo(() => ({
        onPlaySong: _2,
        onToggleLike: L2,
        onRemoveFromQueue: C2,
        onLoadSimilarTracks: E2,
        variant: "queue",
        showContextMenu: true,
        removeOnContextMenu: "panel" === d2,
        ...("panel" === d2 ? {
          hideQuickActions: true,
          showMoreButton: true
        } : {})
      }), [_2, L2, C2, E2, d2]),
      U2 = Gr.jsx(Op, {
        value: B2,
        children: Gr.jsxs(Bp, {
          className: x("relative flex flex-col flex-grow overflow-hidden", "default" === d2 ? "p-4" : "panel" === d2 ? "px-2 pt-4 pb-2" : "p-0 pl-4 pr-2 py-4 pb-4"),
          children: [!n2 && !(f2 && !c2) && "expanded" !== h2 && ("panel" === d2 ? Gr.jsx("div", {
            className: "pr-[max(0px,calc(var(--notch-clear,0px)-1.125rem))]",
            children: $2
          }) : $2), Gr.jsx("div", {
            onWheel: O2,
            onKeyDown: O2,
            className: x("mt-2 flex-grow min-h-0 overflow-hidden", "panel" !== d2 && "transition-all duration-700", S2 && "blur-md opacity-50 grayscale pointer-events-none", f2 && !c2 || "expanded" === h2 ? "mt-0" : "", m2 && "mt-0", n2 && "mt-0"),
            children: f2 && !c2 ? Gr.jsx("div", {
              className: "flex flex-col items-center justify-center h-full animate-in fade-in duration-500",
              children: Gr.jsx($d, {
                title: o2("player.nothing_playing"),
                subtitle: o2("player.nothing_playing_subtitle"),
                variant: "queue"
              })
            }) : 0 === j2.length || "expanded" === h2 && 0 === v2.length && 0 === g2.length ? Gr.jsx("div", {
              className: "flex flex-col items-center justify-center h-full animate-in fade-in duration-500",
              children: Gr.jsx($d, {
                title: o2("player.queue.empty_queue"),
                subtitle: o2("player.queue.empty_subtitle"),
                variant: "queue"
              })
            }) : "expanded" === h2 ? Gr.jsxs("div", {
              className: "h-full flex flex-col gap-2 overflow-hidden",
              children: [!n2 && Gr.jsx("div", {
                className: "shrink-0 px-1 pb-1",
                children: $2
              }), Gr.jsx("div", {
                ref: M2,
                className: x("flex-grow overflow-y-auto scrollbar-none relative h-full", "panel" !== d2 && "pr-1"),
                children: Gr.jsx("div", {
                  style: {
                    height: `${R2.getTotalSize()}px`,
                    position: "relative",
                    width: "100%"
                  },
                  children: R2.getVirtualItems().map(e3 => {
                    const t3 = w2[e3.index];
                    return t3 ? Gr.jsx("div", {
                      "data-index": e3.index,
                      ref: e4 => R2.measureElement(e4),
                      style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${e3.start}px)`
                      },
                      className: "py-0.5",
                      children: "header" === t3.type ? Gr.jsx("div", {
                        className: "text-sm font-medium text-primary/75 pt-2 pb-1 px-1 select-none h-full flex items-center",
                        children: t3.label
                      }) : "group" === t3.type ? Gr.jsxs("div", {
                        className: "rounded-xl border border-border/20 bg-background/12 overflow-hidden transition-colors duration-200 hover:border-border/35",
                        children: [Gr.jsxs("div", {
                          className: "flex items-center justify-between px-2 h-[72px] cursor-pointer transition-colors duration-200 select-none",
                          onClick: () => I2(t3.groupId),
                          children: [Gr.jsxs("div", {
                            className: "flex items-center flex-1 min-w-0",
                            children: [Gr.jsx("div", {
                              className: "mr-2.5 flex-shrink-0",
                              children: Gr.jsx(N, {
                                src: t3.groupCover,
                                title: t3.groupName,
                                size: "md",
                                type: "playlist",
                                showSourceBadge: false,
                                fallback: Uv
                              })
                            }), Gr.jsxs("div", {
                              className: "flex flex-col min-w-0 justify-center flex-1",
                              children: [Gr.jsx("span", {
                                className: "font-medium text-foreground leading-tight truncate",
                                children: t3.groupName
                              }), Gr.jsx("p", {
                                className: "text-xs text-foreground/60 truncate mt-0.5",
                                children: Rn(t3.tracks.length, o2, l2)
                              })]
                            })]
                          }), Gr.jsx(zn, {
                            className: x("h-4 w-4 text-foreground/50 shrink-0 transition-transform duration-200", y2.has(t3.groupId) && "rotate-180")
                          })]
                        }), Gr.jsx(Yr, {
                          initial: false,
                          children: y2.has(t3.groupId) && Gr.jsx(Jr.div, {
                            initial: {
                              height: 0,
                              opacity: 0
                            },
                            animate: {
                              height: "auto",
                              opacity: 1
                            },
                            exit: {
                              height: 0,
                              opacity: 0
                            },
                            transition: {
                              duration: 0.22,
                              ease: [0.25, 0.8, 0.25, 1]
                            },
                            className: "overflow-hidden",
                            children: Gr.jsx("div", {
                              className: "border-t border-border/20 p-1.5 space-y-1",
                              children: t3.tracks.map((e4, n3) => Gr.jsx(Sv, {
                                song: e4,
                                index: t3.startIndex + n3,
                                className: x("mb-0", "panel" === d2 && "pr-0")
                              }, e4.id))
                            })
                          }, `group-content-${t3.groupId}`)
                        })]
                      }) : Gr.jsx("div", {
                        className: x("track-played" === t3.type && qv),
                        children: Gr.jsx(Sv, {
                          song: t3.song,
                          index: t3.index,
                          className: x("mb-0", "panel" === d2 && "pr-0")
                        })
                      })
                    }, t3.key) : null;
                  })
                })
              })]
            }) : Gr.jsx(Ev, {
              scrollRef: z2,
              items: p2,
              itemHeight: F2,
              onDragEnd: A2,
              className: "scrollbar-none",
              renderItem: (e3, t3, n3) => Gr.jsx(Sv, {
                song: e3,
                index: t3,
                dragHandleProps: n3,
                className: x("panel" === d2 ? "mb-0 pr-0" : "mb-2", t3 < g2.length && qv)
              }, `${e3.id}-${t3}`)
            })
          })]
        })
      });
    return "panel" === d2 ? Gr.jsx("div", {
      className: "h-full flex flex-col overflow-hidden",
      children: U2
    }) : Gr.jsx($p, {
      className: x("overflow-hidden transition-all duration-500 flex flex-col h-full", "player-queue bg-background/40 border border-border/30 rounded-xl"),
      children: U2
    });
  });
const Vv = Qr.memo(function (e2) {
  const t2 = Kr.c(7),
    {
      data: n2,
      active: a2
    } = e2;
  let r2, s2;
  if (t2[0] !== a2 || t2[1] !== n2) {
    let e3;
    t2[3] !== a2 ? (e3 = (e4, t3) => Gr.jsx("div", {
      className: "min-h-[4px] max-h-10 min-w-0 flex-1 rounded-full",
      style: {
        height: 24 * e4 + 4 + "px",
        backgroundColor: a2 ? "var(--slider-accent, hsl(var(--primary)))" : "color-mix(in srgb, var(--slider-accent, hsl(var(--primary))) 25%, transparent)"
      }
    }, t3), t2[3] = a2, t2[4] = e3) : e3 = t2[4], r2 = n2.map(e3), t2[0] = a2, t2[1] = n2, t2[2] = r2;
  } else r2 = t2[2];
  return t2[5] !== r2 ? (s2 = Gr.jsx(Gr.Fragment, {
    children: r2
  }), t2[5] = r2, t2[6] = s2) : s2 = t2[6], s2;
});
function Qv(e2) {
  const t2 = Kr.c(3),
    {
      url: n2,
      left: a2
    } = e2,
    r2 = `url(${n2})`;
  let s2;
  return t2[0] !== a2 || t2[1] !== r2 ? (s2 = Gr.jsx("div", {
    className: "absolute left-0 pointer-events-none z-20",
    style: {
      left: a2,
      bottom: "12px",
      transform: "translateX(-50%)",
      width: "56px",
      height: "56px",
      backgroundImage: r2,
      backgroundSize: "contain",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat"
    }
  }), t2[0] = a2, t2[1] = r2, t2[2] = s2) : s2 = t2[2], s2;
}
function Kv() {
  const e2 = [],
    t2 = Math.random();
  for (let n2 = 0; n2 < 80; n2++) {
    let a2 = 0.1;
    if (t2 < 0.2) a2 = 0.4 * Math.sin(0.3 * n2) + 0.5 + 0.2 * Math.random();else if (t2 < 0.4) a2 = 0.8 * Math.random() + 0.2, n2 % 8 < 3 && (a2 *= 1.5);else if (t2 < 0.6) {
      a2 = 0.3 * Math.sin(0.1 * n2) + 0.4 + 0.3 * Math.random();
    } else t2 < 0.8 ? (a2 = 0.6 * Math.random() + 0.2, n2 % 12 < 4 && (a2 = 0.9 * Math.random() + 0.1)) : a2 = 0.9 * Math.random() + 0.1;
    a2 = Math.max(0.1, Math.min(1, a2)), e2.push(a2);
  }
  return e2;
}
const Gv = Qr.memo(e2 => {
    const t2 = Kr.c(18),
      {
        progress: n2,
        shouldAnimate: a2
      } = e2,
      [r2, s2] = Qr.useState(0),
      i2 = Qr.useRef(null),
      [o2, l2] = Qr.useState(0);
    let c2, u2, d2, m2;
    t2[0] === Symbol.for("react.memo_cache_sentinel") ? (c2 = () => {
      if (!i2.current) return;
      let e3 = null;
      const t3 = new ResizeObserver(t4 => {
        const n3 = t4[0];
        n3 && (null !== e3 && cancelAnimationFrame(e3), e3 = requestAnimationFrame(() => {
          l2(n3.contentRect.width), e3 = null;
        }));
      });
      return t3.observe(i2.current), () => {
        t3.disconnect(), null !== e3 && cancelAnimationFrame(e3);
      };
    }, u2 = [], t2[0] = c2, t2[1] = u2) : (c2 = t2[0], u2 = t2[1]), Qr.useEffect(c2, u2), t2[2] !== a2 ? (d2 = () => {
      if (!a2) return;
      let e3,
        t3 = performance.now();
      const n3 = a3 => {
        const r3 = a3 - t3;
        t3 = a3, s2(e4 => (e4 + r3 / 1500 * Math.PI * 2) % (2 * Math.PI)), e3 = requestAnimationFrame(n3);
      };
      return e3 = requestAnimationFrame(n3), () => cancelAnimationFrame(e3);
    }, m2 = [a2], t2[2] = a2, t2[3] = d2, t2[4] = m2) : (d2 = t2[3], m2 = t2[4]), Qr.useEffect(d2, m2);
    const f2 = n2 / 100 * o2;
    let h2 = "M 0 6";
    if (o2 > 0) {
      for (let e3 = 0; e3 <= f2; e3 += 2, e3) {
        const t3 = f2 - e3;
        let n3 = 1;
        t3 < 36 && (n3 = Math.max(0, t3 / 36), n3 = n3 * n3 * (3 - 2 * n3));
        const a3 = 4 * n3,
          s3 = 6 + Math.sin(e3 / 36 * Math.PI * 2 - r2) * a3;
        0 === e3 ? h2 = `M ${e3} ${s3}` : h2 += ` L ${e3} ${s3}`;
      }
      f2 > 0 && (h2 += ` L ${f2} 6`);
    }
    const p2 = `calc(100% - ${f2}px)`;
    let g2;
    t2[5] !== p2 ? (g2 = Gr.jsx("div", {
      className: "absolute right-0 rounded-r-full",
      style: {
        top: "4.5px",
        height: "3px",
        width: p2,
        backgroundColor: "color-mix(in srgb, var(--slider-accent, hsl(var(--primary))) 20%, transparent)"
      }
    }), t2[5] = p2, t2[6] = g2) : g2 = t2[6];
    const v2 = `${o2}px`;
    let x2, y2, b2, w2;
    return t2[7] !== v2 ? (x2 = {
      width: v2,
      height: "12px"
    }, t2[7] = v2, t2[8] = x2) : x2 = t2[8], t2[9] !== h2 ? (y2 = Gr.jsx("path", {
      d: h2,
      fill: "none",
      stroke: "var(--slider-accent, hsl(var(--primary)))",
      strokeWidth: "3.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), t2[9] = h2, t2[10] = y2) : y2 = t2[10], t2[11] !== x2 || t2[12] !== y2 || t2[13] !== o2 ? (b2 = Gr.jsx("svg", {
      width: o2,
      height: 12,
      className: "absolute left-0 top-0 pointer-events-none overflow-visible",
      style: x2,
      children: y2
    }), t2[11] = x2, t2[12] = y2, t2[13] = o2, t2[14] = b2) : b2 = t2[14], t2[15] !== b2 || t2[16] !== g2 ? (w2 = Gr.jsxs("div", {
      ref: i2,
      className: "absolute inset-0 w-full h-full pointer-events-none",
      children: [g2, b2]
    }), t2[15] = b2, t2[16] = g2, t2[17] = w2) : w2 = t2[17], w2;
  }),
  Xv = Qr.forwardRef((e2, t2) => {
    var n2, r2, s2;
    const i2 = Kr.c(227);
    let o2, l2, c2, d2, m2, f2, h2, p2, g2, v2;
    i2[0] !== e2 ? ({
      className: o2,
      highlightProgress: c2,
      type: d2,
      trackId: g2,
      orientation: m2,
      useCustomGif: f2,
      thinThumbSize: h2,
      waveformContent: v2,
      live: p2,
      ...l2
    } = e2, i2[0] = e2, i2[1] = o2, i2[2] = l2, i2[3] = c2, i2[4] = d2, i2[5] = m2, i2[6] = f2, i2[7] = h2, i2[8] = p2, i2[9] = g2, i2[10] = v2) : (o2 = i2[1], l2 = i2[2], c2 = i2[3], d2 = i2[4], m2 = i2[5], f2 = i2[6], h2 = i2[7], p2 = i2[8], g2 = i2[9], v2 = i2[10]);
    const y2 = void 0 !== c2 && c2,
      b2 = void 0 === d2 ? "default" : d2,
      w2 = void 0 === m2 ? "horizontal" : m2,
      k2 = void 0 !== f2 && f2,
      j2 = void 0 === h2 ? 16 : h2,
      S2 = void 0 !== p2 && p2;
    let N2;
    i2[11] !== o2 ? (N2 = null == o2 ? void 0 : o2.includes("volume-slider"), i2[11] = o2, i2[12] = N2) : N2 = i2[12];
    const _2 = N2,
      C2 = _2 ? 4 : 5,
      T2 = 2 * C2,
      [E2, L2] = Qr.useState(null),
      A2 = Qr.useRef(null);
    let P2;
    i2[13] === Symbol.for("react.memo_cache_sentinel") ? (P2 = e3 => {
      A2.current = e3;
    }, i2[13] = P2) : P2 = i2[13];
    const I2 = P2,
      [M2, R2] = Qr.useState(false),
      [z2, D2] = Qr.useState(0);
    let F2;
    i2[14] === Symbol.for("react.memo_cache_sentinel") ? (F2 = [], i2[14] = F2) : F2 = i2[14];
    const [O2, $2] = Qr.useState(F2),
      B2 = Qr.useRef(null),
      U2 = Qr.useRef(null);
    let H2;
    i2[15] !== k2 ? (H2 = e3 => k2 ? e3.items.find(Yv) : null, i2[15] = k2, i2[16] = H2) : H2 = i2[16];
    const W2 = q(H2),
      V2 = S2 && "horizontal" === w2 && !(W2 && !_2);
    let Q2;
    i2[17] !== V2 ? (Q2 = V2 ? Gr.jsx("span", {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-y-0 left-0 w-full rounded-full",
      style: {
        backgroundColor: "var(--slider-accent, hsl(var(--primary)))",
        transform: "translateX(calc((var(--p, 0) - 1) * 100%))"
      }
    }) : null, i2[17] = V2, i2[18] = Q2) : Q2 = i2[18];
    const K2 = Q2,
      G2 = void 0 !== g2,
      X2 = G2 && "squiggly" === b2;
    let Y2;
    i2[19] !== X2 ? (Y2 = e3 => X2 && e3.isPlaying, i2[19] = X2, i2[20] = Y2) : Y2 = i2[20];
    const J2 = u(Y2);
    let Z2;
    i2[21] !== X2 ? (Z2 = e3 => X2 && e3.isSeeking, i2[21] = X2, i2[22] = Z2) : Z2 = i2[22];
    const ee2 = u(Z2),
      te2 = G2 && J2 && !M2 && !ee2;
    let ne2;
    i2[23] !== _2 || i2[24] !== l2 ? (ne2 = e3 => {
      var t3;
      if (!_2 || !l2.onValueChange) return;
      const n3 = (null == (t3 = l2.value) ? void 0 : t3[0]) || 0,
        a2 = l2.max || 100,
        r3 = e3.deltaY > 0 ? -1 : 1,
        s3 = Math.min(Math.max(0, n3 + r3), a2);
      l2.onValueChange([s3]);
    }, i2[23] = _2, i2[24] = l2, i2[25] = ne2) : ne2 = i2[25];
    const ae2 = ne2;
    let re2;
    i2[26] !== l2.max ? (re2 = e3 => {
      if (!A2.current) return;
      const t3 = A2.current.getBoundingClientRect(),
        n3 = (e3.clientX - t3.left) / t3.width,
        a2 = l2.max || 100,
        r3 = Math.min(Math.max(0, n3 * a2), a2);
      L2(r3);
    }, i2[26] = l2.max, i2[27] = re2) : re2 = i2[27];
    const se2 = re2;
    let ie2;
    i2[28] === Symbol.for("react.memo_cache_sentinel") ? (ie2 = () => {
      L2(null);
    }, i2[28] = ie2) : ie2 = i2[28];
    const oe2 = ie2,
      le2 = (null == (n2 = l2.value) ? void 0 : n2[0]) || 0,
      ce2 = y2 && null !== E2 && E2 > le2;
    let ue2;
    i2[29] !== g2 || i2[30] !== b2 || i2[31] !== v2 || i2[32] !== O2.length ? (ue2 = () => {
      "waveform" !== b2 || v2 || (g2 && g2 !== U2.current ? (U2.current = g2, $2(Kv())) : g2 || 0 !== O2.length || $2(Kv()));
    }, i2[29] = g2, i2[30] = b2, i2[31] = v2, i2[32] = O2.length, i2[33] = ue2) : ue2 = i2[33];
    const de2 = !!v2;
    let me2;
    i2[34] !== de2 || i2[35] !== g2 || i2[36] !== b2 || i2[37] !== O2.length ? (me2 = [b2, g2, O2.length, de2], i2[34] = de2, i2[35] = g2, i2[36] = b2, i2[37] = O2.length, i2[38] = me2) : me2 = i2[38], Qr.useEffect(ue2, me2);
    const fe2 = null != (r2 = l2.min) ? r2 : 0,
      he2 = null != (s2 = l2.max) ? s2 : 100,
      pe2 = he2 > fe2 ? he2 : fe2 + 100,
      ge2 = Math.min(pe2, Math.max(fe2, le2)),
      ve2 = pe2 > fe2 ? Math.min(100, Math.max(0, (ge2 - fe2) / (pe2 - fe2) * 100)) : 0,
      xe2 = M2 ? z2 : ve2;
    if ("ios" === b2 || "ticks" === b2) {
      const e3 = "ticks" === b2 ? 2 : 4,
        n3 = W2 && !_2,
        a2 = n3 ? 0 : 5,
        r3 = "vertical" === w2 ? "flex-col h-full" : "w-full";
      let s3, c3;
      i2[39] !== o2 || i2[40] !== r3 ? (s3 = x("relative flex touch-none select-none items-center cursor-pointer w-full py-1.5", r3, o2), i2[39] = o2, i2[40] = r3, i2[41] = s3) : s3 = i2[41], i2[42] !== ve2 || i2[43] !== b2 ? (c3 = "ticks" === b2 && Gr.jsx("div", {
        className: "absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-1 pointer-events-none z-0",
        children: [0, 25, 50, 75, 100].map(e4 => Gr.jsx("div", {
          className: x("w-px h-2.5 rounded-full transition-colors duration-200", ve2 < e4 ? "bg-muted-foreground/30" : "bg-primary")
        }, e4))
      }), i2[42] = ve2, i2[43] = b2, i2[44] = c3) : c3 = i2[44];
      const u2 = `${e3}px`;
      let d3;
      i2[45] !== u2 ? (d3 = {
        height: u2
      }, i2[45] = u2, i2[46] = d3) : d3 = i2[46];
      const m3 = `clamp(0px, calc(${ve2}% - ${a2}px), 100%)`;
      let f3;
      i2[47] !== m3 ? (f3 = Gr.jsx("div", {
        className: "absolute left-0 top-0 h-full rounded-full",
        style: {
          width: m3,
          backgroundColor: "var(--slider-accent, hsl(var(--primary)))",
          transition: "none"
        }
      }), i2[47] = m3, i2[48] = f3) : f3 = i2[48];
      const h3 = `clamp(0px, calc(${ve2}% + ${a2}px), 100%)`;
      let p3, g3;
      i2[49] !== h3 ? (p3 = Gr.jsx("div", {
        className: "absolute right-0 top-0 h-full rounded-full",
        style: {
          left: h3,
          backgroundColor: "color-mix(in srgb, var(--slider-accent, hsl(var(--primary))) 20%, transparent)",
          transition: "none"
        }
      }), i2[49] = h3, i2[50] = p3) : p3 = i2[50], i2[51] !== se2 || i2[52] !== d3 || i2[53] !== f3 || i2[54] !== p3 ? (g3 = Gr.jsxs("div", {
        ref: I2,
        className: "relative w-full overflow-hidden rounded-full",
        style: d3,
        onMouseMove: se2,
        onMouseLeave: oe2,
        children: [f3, p3]
      }), i2[51] = se2, i2[52] = d3, i2[53] = f3, i2[54] = p3, i2[55] = g3) : g3 = i2[55];
      const v3 = (!W2 || _2) && "bg-primary";
      let y3, k3;
      i2[56] !== o2 ? (y3 = o2 && o2.includes("hide-thumb") && "pointer-events-none opacity-0 w-0 h-0", i2[56] = o2, i2[57] = y3) : y3 = i2[57], i2[58] !== v3 || i2[59] !== y3 ? (k3 = x("block rounded-full cursor-pointer z-10", v3, "hover:scale-105 active:scale-95 transition-transform duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50", y3), i2[58] = v3, i2[59] = y3, i2[60] = k3) : k3 = i2[60];
      const j3 = n3 ? "48px" : "4px",
        S3 = n3 ? "48px" : "28px",
        N3 = n3 ? `url(${W2.url})` : "none",
        C3 = n3 ? "transparent" : "var(--slider-accent, hsl(var(--primary)))",
        T3 = n3 ? "12px" : "0";
      let E3, L3, A3;
      return i2[61] !== j3 || i2[62] !== S3 || i2[63] !== N3 || i2[64] !== C3 || i2[65] !== T3 ? (E3 = {
        width: j3,
        height: S3,
        boxShadow: "none",
        backgroundImage: N3,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: C3,
        marginBottom: T3
      }, i2[61] = j3, i2[62] = S3, i2[63] = N3, i2[64] = C3, i2[65] = T3, i2[66] = E3) : E3 = i2[66], i2[67] !== k3 || i2[68] !== E3 ? (L3 = Gr.jsx(As, {
        className: k3,
        style: E3
      }), i2[67] = k3, i2[68] = E3, i2[69] = L3) : L3 = i2[69], i2[70] !== ae2 || i2[71] !== w2 || i2[72] !== l2 || i2[73] !== t2 || i2[74] !== s3 || i2[75] !== c3 || i2[76] !== g3 || i2[77] !== L3 ? (A3 = Gr.jsxs(Ls, {
        ref: t2,
        className: s3,
        onWheel: ae2,
        orientation: w2,
        ...l2,
        children: [c3, g3, L3]
      }), i2[70] = ae2, i2[71] = w2, i2[72] = l2, i2[73] = t2, i2[74] = s3, i2[75] = c3, i2[76] = g3, i2[77] = L3, i2[78] = A3) : A3 = i2[78], A3;
    }
    if ("thin" === b2) {
      const e3 = "vertical" === w2 ? "flex-col h-full w-1" : "w-full h-4";
      let n3;
      i2[79] !== o2 || i2[80] !== e3 ? (n3 = x("relative flex touch-none select-none items-center cursor-pointer py-1.5", e3, o2), i2[79] = o2, i2[80] = e3, i2[81] = n3) : n3 = i2[81];
      const a2 = "vertical" === w2 ? "h-full" : "w-full";
      let r3, s3;
      i2[82] !== a2 ? (r3 = x("relative grow overflow-hidden rounded-full", a2), i2[82] = a2, i2[83] = r3) : r3 = i2[83], i2[84] !== w2 ? (s3 = {
        backgroundColor: "color-mix(in srgb, var(--slider-accent, hsl(var(--primary))) 20%, transparent)",
        ...("vertical" === w2 ? {
          width: "2px"
        } : {
          height: "2px"
        })
      }, i2[84] = w2, i2[85] = s3) : s3 = i2[85];
      const c3 = "vertical" === w2 ? "w-full" : "h-full",
        u2 = V2 && "opacity-0";
      let d3, m3, f3, h3, p3;
      i2[86] !== c3 || i2[87] !== u2 ? (d3 = x("absolute transition-none rounded-full", c3, u2), i2[86] = c3, i2[87] = u2, i2[88] = d3) : d3 = i2[88], i2[89] === Symbol.for("react.memo_cache_sentinel") ? (m3 = {
        transition: "none",
        backgroundColor: "var(--slider-accent, hsl(var(--primary)))"
      }, i2[89] = m3) : m3 = i2[89], i2[90] !== d3 ? (f3 = Gr.jsx(Ps, {
        className: d3,
        style: m3
      }), i2[90] = d3, i2[91] = f3) : f3 = i2[91], i2[92] !== se2 || i2[93] !== K2 || i2[94] !== r3 || i2[95] !== s3 || i2[96] !== f3 ? (h3 = Gr.jsxs(Is, {
        ref: A2,
        className: r3,
        style: s3,
        onMouseMove: se2,
        onMouseLeave: oe2,
        children: [f3, K2]
      }), i2[92] = se2, i2[93] = K2, i2[94] = r3, i2[95] = s3, i2[96] = f3, i2[97] = h3) : h3 = i2[97], i2[98] !== V2 || i2[99] !== j2 ? (p3 = V2 && Gr.jsx("span", {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-x-0 top-1/2 z-50",
        style: {
          transform: "translateX(calc(var(--p, 0) * 100%))"
        },
        children: Gr.jsx("span", {
          className: "block -translate-x-1/2 -translate-y-1/2 rounded-full",
          style: {
            width: j2,
            height: j2,
            backgroundColor: "var(--slider-accent, hsl(var(--primary)))"
          }
        })
      }), i2[98] = V2, i2[99] = j2, i2[100] = p3) : p3 = i2[100];
      const g3 = l2["aria-label"],
        v3 = V2 && "opacity-0";
      let y3, b3;
      i2[101] !== o2 ? (y3 = o2 && o2.includes("hide-thumb") && "pointer-events-none opacity-0 w-0 h-0", i2[101] = o2, i2[102] = y3) : y3 = i2[102], i2[103] !== v3 || i2[104] !== y3 ? (b3 = x("block rounded-full cursor-pointer", v3, "hover:scale-[1.04] active:scale-[0.98]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50", y3), i2[103] = v3, i2[104] = y3, i2[105] = b3) : b3 = i2[105];
      const k3 = W2 && !_2 ? 4 * j2 + "px" : `${j2}px`,
        S3 = W2 && !_2 ? 4 * j2 + "px" : `${j2}px`,
        N3 = W2 && !_2 ? `url(${W2.url})` : "none",
        C3 = W2 && !_2 ? "transparent" : "var(--slider-accent, hsl(var(--primary)))",
        T3 = W2 && !_2 ? "12px" : "0";
      let E3, L3, P3;
      return i2[106] !== k3 || i2[107] !== S3 || i2[108] !== N3 || i2[109] !== C3 || i2[110] !== T3 ? (E3 = {
        width: k3,
        height: S3,
        boxShadow: "none",
        transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
        backgroundImage: N3,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: C3,
        zIndex: 50,
        marginBottom: T3
      }, i2[106] = k3, i2[107] = S3, i2[108] = N3, i2[109] = C3, i2[110] = T3, i2[111] = E3) : E3 = i2[111], i2[112] !== g3 || i2[113] !== b3 || i2[114] !== E3 ? (L3 = Gr.jsx(As, {
        "aria-label": g3,
        className: b3,
        style: E3
      }), i2[112] = g3, i2[113] = b3, i2[114] = E3, i2[115] = L3) : L3 = i2[115], i2[116] !== ae2 || i2[117] !== w2 || i2[118] !== l2 || i2[119] !== t2 || i2[120] !== n3 || i2[121] !== h3 || i2[122] !== p3 || i2[123] !== L3 ? (P3 = Gr.jsxs(Ls, {
        ref: t2,
        className: n3,
        onWheel: ae2,
        orientation: w2,
        ...l2,
        children: [h3, p3, L3]
      }), i2[116] = ae2, i2[117] = w2, i2[118] = l2, i2[119] = t2, i2[120] = n3, i2[121] = h3, i2[122] = p3, i2[123] = L3, i2[124] = P3) : P3 = i2[124], P3;
    }
    let ye2;
    i2[125] !== l2 ? (ye2 = e3 => {
      if (!B2.current) return;
      const t3 = B2.current.getBoundingClientRect(),
        n3 = e3 - t3.left,
        a2 = Math.max(0, Math.min(100, n3 / t3.width * 100)),
        r3 = a2 / 100 * (l2.max || 100);
      D2(a2), l2.onValueChange && l2.onValueChange([r3]);
    }, i2[125] = l2, i2[126] = ye2) : ye2 = i2[126];
    const be2 = ye2;
    let we2;
    i2[127] !== M2 || i2[128] !== z2 || i2[129] !== l2 ? (we2 = e3 => {
      if (M2) {
        !function (e4, t4) {
          try {
            e4.releasePointerCapture(t4);
          } catch (n4) {
            a.warn("ui", "Failed to release pointer on slider:", n4);
          }
        }(e3.currentTarget, e3.pointerId), R2(false);
        const t3 = l2.max || 100,
          n3 = z2 / 100 * t3;
        l2.onValueCommit && l2.onValueCommit([n3]);
      }
    }, i2[127] = M2, i2[128] = z2, i2[129] = l2, i2[130] = we2) : we2 = i2[130];
    const ke2 = we2;
    let je2, Se2, Ne2, _e2;
    i2[131] !== o2 ? (je2 = x("relative w-full cursor-pointer transition-transform duration-200 ease-out touch-none select-none", o2), i2[131] = o2, i2[132] = je2) : je2 = i2[132], i2[133] !== l2 || i2[134] !== be2 ? (Se2 = e3 => {
      B2.current && (!function (e4, t3) {
        try {
          e4.setPointerCapture(t3);
        } catch (n3) {
          a.warn("ui", "Failed to capture pointer on slider:", n3);
        }
      }(e3.currentTarget, e3.pointerId), R2(true), l2.onPointerDown && l2.onPointerDown(e3), be2(e3.clientX));
    }, i2[133] = l2, i2[134] = be2, i2[135] = Se2) : Se2 = i2[135], i2[136] !== M2 || i2[137] !== be2 ? (Ne2 = e3 => {
      M2 && be2(e3.clientX);
    }, i2[136] = M2, i2[137] = be2, i2[138] = Ne2) : Ne2 = i2[138], i2[139] !== ke2 || i2[140] !== ae2 || i2[141] !== je2 || i2[142] !== Se2 || i2[143] !== Ne2 ? (_e2 = {
      className: je2,
      onPointerDown: Se2,
      onPointerMove: Ne2,
      onPointerUp: ke2,
      onPointerCancel: ke2,
      onWheel: ae2
    }, i2[139] = ke2, i2[140] = ae2, i2[141] = je2, i2[142] = Se2, i2[143] = Ne2, i2[144] = _e2) : _e2 = i2[144];
    const Ce2 = _e2;
    if ("waveform" === b2) {
      let e3, t3, n3, a2, r3, s3, o3;
      return i2[145] === Symbol.for("react.memo_cache_sentinel") ? (e3 = {
        height: "clamp(32px, 8vh, 48px)",
        maxHeight: "48px",
        minHeight: "32px"
      }, t3 = Gr.jsx("div", {
        className: "absolute inset-0 w-full h-full z-10"
      }), i2[145] = e3, i2[146] = t3) : (e3 = i2[145], t3 = i2[146]), i2[147] === Symbol.for("react.memo_cache_sentinel") ? (n3 = {
        height: "clamp(24px, 6vh, 40px)"
      }, i2[147] = n3) : n3 = i2[147], i2[148] !== W2 || i2[149] !== xe2 || i2[150] !== _2 ? (a2 = W2 && !_2 && Gr.jsx(Qv, {
        url: W2.url,
        left: `${xe2}%`
      }), i2[148] = W2, i2[149] = xe2, i2[150] = _2, i2[151] = a2) : a2 = i2[151], i2[152] !== xe2 || i2[153] !== v2 || i2[154] !== O2 ? (r3 = v2 ? Gr.jsx("div", {
        className: "absolute inset-0 pointer-events-none",
        children: v2
      }) : Gr.jsxs(Gr.Fragment, {
        children: [Gr.jsx("div", {
          className: "absolute inset-0 flex items-center gap-[2px]",
          children: Gr.jsx(Vv, {
            data: O2,
            active: false
          })
        }), Gr.jsx("div", {
          className: "pointer-events-none absolute inset-0 flex items-center gap-[2px]",
          style: {
            clipPath: `inset(0 ${Math.max(0, Math.min(100, 100 - xe2))}% 0 0)`
          },
          children: Gr.jsx(Vv, {
            data: O2,
            active: true
          })
        })]
      }), i2[152] = xe2, i2[153] = v2, i2[154] = O2, i2[155] = r3) : r3 = i2[155], i2[156] !== a2 || i2[157] !== r3 ? (s3 = Gr.jsx("div", {
        className: "absolute inset-0 flex items-center justify-center px-1 overflow-hidden",
        children: Gr.jsxs("div", {
          className: "relative flex items-center gap-[2px] w-full",
          style: n3,
          children: [a2, r3]
        })
      }), i2[156] = a2, i2[157] = r3, i2[158] = s3) : s3 = i2[158], i2[159] !== Ce2 || i2[160] !== s3 ? (o3 = Gr.jsxs("div", {
        ref: B2,
        ...Ce2,
        style: e3,
        children: [t3, s3]
      }), i2[159] = Ce2, i2[160] = s3, i2[161] = o3) : o3 = i2[161], o3;
    }
    if ("squiggly" === b2) {
      let e3, t3, n3, a2, r3, s3, o3;
      return i2[162] === Symbol.for("react.memo_cache_sentinel") ? (e3 = {
        height: "32px",
        display: "flex",
        alignItems: "center"
      }, t3 = Gr.jsx("div", {
        className: "absolute inset-0 w-full h-full z-10"
      }), i2[162] = e3, i2[163] = t3) : (e3 = i2[162], t3 = i2[163]), i2[164] === Symbol.for("react.memo_cache_sentinel") ? (n3 = {
        height: "12px"
      }, i2[164] = n3) : n3 = i2[164], i2[165] !== xe2 || i2[166] !== te2 ? (a2 = Gr.jsx(Gv, {
        progress: xe2,
        shouldAnimate: te2
      }), i2[165] = xe2, i2[166] = te2, i2[167] = a2) : a2 = i2[167], i2[168] !== W2 || i2[169] !== xe2 || i2[170] !== _2 ? (r3 = W2 && !_2 && Gr.jsx(Qv, {
        url: W2.url,
        left: `calc(${xe2}% + 4px)`
      }), i2[168] = W2, i2[169] = xe2, i2[170] = _2, i2[171] = r3) : r3 = i2[171], i2[172] !== a2 || i2[173] !== r3 ? (s3 = Gr.jsxs("div", {
        className: "w-full relative px-1",
        style: n3,
        children: [a2, r3]
      }), i2[172] = a2, i2[173] = r3, i2[174] = s3) : s3 = i2[174], i2[175] !== Ce2 || i2[176] !== s3 ? (o3 = Gr.jsxs("div", {
        ref: B2,
        ...Ce2,
        style: e3,
        children: [t3, s3]
      }), i2[175] = Ce2, i2[176] = s3, i2[177] = o3) : o3 = i2[177], o3;
    }
    const Te2 = "vertical" === w2 ? "flex-col h-full w-1" : "w-full";
    let Ee2;
    i2[178] !== o2 || i2[179] !== Te2 ? (Ee2 = x("relative flex touch-none select-none items-center cursor-pointer", Te2, o2), i2[178] = o2, i2[179] = Te2, i2[180] = Ee2) : Ee2 = i2[180];
    const Le2 = "vertical" === w2 ? "h-full w-1" : "w-full";
    let Ae2, Pe2;
    i2[181] !== Le2 ? (Ae2 = x("relative grow overflow-hidden rounded-full", Le2), i2[181] = Le2, i2[182] = Ae2) : Ae2 = i2[182], i2[183] !== w2 || i2[184] !== C2 ? (Pe2 = {
      backgroundColor: "color-mix(in srgb, var(--slider-accent, hsl(var(--primary))) 20%, transparent)",
      ...("vertical" === w2 ? {
        width: `${C2}px`
      } : {
        height: `${C2}px`
      })
    }, i2[183] = w2, i2[184] = C2, i2[185] = Pe2) : Pe2 = i2[185];
    const Ie2 = "vertical" === w2 ? "w-full" : "h-full",
      Me2 = V2 && "opacity-0";
    let Re2, ze2, De2, Fe2, Oe2;
    i2[186] !== Ie2 || i2[187] !== Me2 ? (Re2 = x("absolute transition-none rounded-full", Ie2, Me2), i2[186] = Ie2, i2[187] = Me2, i2[188] = Re2) : Re2 = i2[188], i2[189] === Symbol.for("react.memo_cache_sentinel") ? (ze2 = {
      transition: "none",
      backgroundColor: "var(--slider-accent, hsl(var(--primary)))"
    }, i2[189] = ze2) : ze2 = i2[189], i2[190] !== Re2 ? (De2 = Gr.jsx(Ps, {
      className: Re2,
      style: ze2
    }), i2[190] = Re2, i2[191] = De2) : De2 = i2[191], i2[192] !== le2 || i2[193] !== E2 || i2[194] !== w2 || i2[195] !== l2.max || i2[196] !== ce2 ? (Fe2 = ce2 && Gr.jsx("div", {
      className: x("absolute transition-all duration-200 ease-out", "vertical" === w2 ? "w-full" : "h-full"),
      style: {
        backgroundColor: "var(--slider-accent, hsl(var(--primary)))",
        opacity: 0.5,
        ...("vertical" === w2 ? {
          bottom: le2 / (l2.max || 100) * 100 + "%",
          height: (E2 - le2) / (l2.max || 100) * 100 + "%"
        } : {
          left: le2 / (l2.max || 100) * 100 + "%",
          width: (E2 - le2) / (l2.max || 100) * 100 + "%"
        })
      }
    }), i2[192] = le2, i2[193] = E2, i2[194] = w2, i2[195] = l2.max, i2[196] = ce2, i2[197] = Fe2) : Fe2 = i2[197], i2[198] !== se2 || i2[199] !== K2 || i2[200] !== Ae2 || i2[201] !== Pe2 || i2[202] !== De2 || i2[203] !== Fe2 ? (Oe2 = Gr.jsxs(Is, {
      ref: A2,
      className: Ae2,
      style: Pe2,
      onMouseMove: se2,
      onMouseLeave: oe2,
      children: [De2, K2, Fe2]
    }), i2[198] = se2, i2[199] = K2, i2[200] = Ae2, i2[201] = Pe2, i2[202] = De2, i2[203] = Fe2, i2[204] = Oe2) : Oe2 = i2[204];
    const $e2 = W2 && !_2 ? "opacity-100 scale-100" : "pointer-events-none opacity-0 w-0 h-0";
    let Be2, Ue2;
    i2[205] !== o2 ? (Be2 = o2 && o2.includes("hide-thumb") && "pointer-events-none opacity-0 w-0 h-0", i2[205] = o2, i2[206] = Be2) : Be2 = i2[206], i2[207] !== $e2 || i2[208] !== Be2 ? (Ue2 = x("block rounded-full border-none ring-offset-background cursor-pointer", $e2, "hover:scale-[1.04] active:scale-[0.98] transition-[transform,opacity] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", Be2), i2[207] = $e2, i2[208] = Be2, i2[209] = Ue2) : Ue2 = i2[209];
    const qe2 = W2 && !_2 ? 3.5 * T2 + "px" : "0px",
      He2 = W2 && !_2 ? 3.5 * T2 + "px" : "0px",
      We2 = W2 && !_2 ? `url(${W2.url})` : "none",
      Ve2 = W2 && !_2 ? "transparent" : "var(--slider-accent, hsl(var(--primary)))",
      Qe2 = W2 && !_2 ? "18px" : "0";
    let Ke2, Ge2, Xe2;
    return i2[210] !== qe2 || i2[211] !== He2 || i2[212] !== We2 || i2[213] !== Ve2 || i2[214] !== Qe2 ? (Ke2 = {
      width: qe2,
      height: He2,
      backgroundImage: We2,
      backgroundSize: "contain",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundColor: Ve2,
      marginBottom: Qe2,
      transition: "transform 0.15s ease-out, opacity 0.15s ease-out"
    }, i2[210] = qe2, i2[211] = He2, i2[212] = We2, i2[213] = Ve2, i2[214] = Qe2, i2[215] = Ke2) : Ke2 = i2[215], i2[216] !== Ue2 || i2[217] !== Ke2 ? (Ge2 = Gr.jsx(As, {
      className: Ue2,
      style: Ke2
    }), i2[216] = Ue2, i2[217] = Ke2, i2[218] = Ge2) : Ge2 = i2[218], i2[219] !== ae2 || i2[220] !== w2 || i2[221] !== l2 || i2[222] !== t2 || i2[223] !== Ee2 || i2[224] !== Oe2 || i2[225] !== Ge2 ? (Xe2 = Gr.jsxs(Ls, {
      ref: t2,
      className: Ee2,
      onWheel: ae2,
      orientation: w2,
      ...l2,
      children: [Oe2, Ge2]
    }), i2[219] = ae2, i2[220] = w2, i2[221] = l2, i2[222] = t2, i2[223] = Ee2, i2[224] = Oe2, i2[225] = Ge2, i2[226] = Xe2) : Xe2 = i2[226], Xe2;
  });
function Yv(e2) {
  return "slider" === e2.usage && e2.is_active;
}
const Jv = Xr.memo(function (e2) {
  var t2, n2, r2, s2, i2, o2, l2, c2, d2, m2, f2, h2, p2, g2, v2, y2;
  const b2 = Kr.c(16),
    w2 = void 0 === e2 ? {} : e2,
    k2 = w2.state,
    j2 = w2.ops,
    S2 = w2.layout,
    N2 = u(Zv),
    _2 = u(ex),
    C2 = u(tx),
    T2 = u(nx),
    E2 = u(ax),
    L2 = u(rx),
    A2 = u(sx),
    P2 = void 0 !== (null == k2 ? void 0 : k2.currentSong) ? Boolean(k2.currentSong) : void 0 !== w2.currentSong ? Boolean(w2.currentSong) : N2,
    I2 = void 0 !== (null == k2 ? void 0 : k2.isPlaying) ? k2.isPlaying : void 0 !== w2.isPlaying ? w2.isPlaying : _2,
    M2 = void 0 !== (null == k2 ? void 0 : k2.isLoading) ? k2.isLoading : void 0 !== w2.isLoading ? w2.isLoading : C2,
    R2 = void 0 !== (null == k2 ? void 0 : k2.isLoadingAudio) ? k2.isLoadingAudio : void 0 !== w2.isLoadingAudio ? w2.isLoadingAudio : T2,
    z2 = void 0 !== (null == k2 ? void 0 : k2.repeatMode) ? k2.repeatMode : void 0 !== w2.repeatMode ? w2.repeatMode : E2,
    D2 = void 0 !== (null == k2 ? void 0 : k2.isShuffled) ? k2.isShuffled : void 0 !== w2.isShuffled ? w2.isShuffled : L2,
    F2 = void 0 !== (null == k2 ? void 0 : k2.shuffleType) ? k2.shuffleType : void 0 !== w2.shuffleType ? w2.shuffleType : A2,
    O2 = void 0 !== (null == S2 ? void 0 : S2.playerLayout) ? S2.playerLayout : void 0 !== w2.playerLayout ? w2.playerLayout : "default",
    $2 = u(es(ix)),
    B2 = null != (n2 = null != (t2 = null == j2 ? void 0 : j2.toggle) ? t2 : w2.toggle) ? n2 : $2.toggle,
    U2 = null != (s2 = null != (r2 = null == j2 ? void 0 : j2.prev) ? r2 : w2.prev) ? s2 : $2.prev,
    q2 = null != (o2 = null != (i2 = null == j2 ? void 0 : j2.next) ? i2 : w2.next) ? o2 : $2.next,
    H2 = null != (c2 = null != (l2 = null == j2 ? void 0 : j2.toggleRepeatMode) ? l2 : w2.toggleRepeatMode) ? c2 : $2.cycleRepeatMode,
    W2 = null != (m2 = null != (d2 = null == j2 ? void 0 : j2.toggleShuffle) ? d2 : w2.toggleShuffle) ? m2 : $2.cycleShuffleModeSimple,
    V2 = () => W2(),
    Q2 = () => {
      a.info("[Controls] Skip Next button clicked"), q2();
    },
    K2 = Vl(),
    G2 = void 0 !== (null == k2 ? void 0 : k2.canControl) ? k2.canControl : void 0 !== w2.canControl ? w2.canControl : K2,
    X2 = !P2 || !G2,
    Y2 = "left" === O2 || "right" === O2,
    J2 = "vertical" === (null == S2 ? void 0 : S2.direction) || "vertical" === w2.direction,
    Z2 = null != (h2 = null != (f2 = null == S2 ? void 0 : S2.size) ? f2 : w2.size) ? h2 : "md",
    ee2 = null != (p2 = null == S2 ? void 0 : S2.className) ? p2 : w2.className,
    te2 = null != (g2 = null == S2 ? void 0 : S2.buttonClassName) ? g2 : w2.buttonClassName,
    ne2 = null != (v2 = null == S2 ? void 0 : S2.playButtonClassName) ? v2 : w2.playButtonClassName,
    ae2 = null != (y2 = null == S2 ? void 0 : S2.skipButtonClassName) ? y2 : w2.skipButtonClassName,
    re2 = x("bg-transparent hover:bg-transparent shadow-none", "text-foreground/85 hover:text-foreground", ae2),
    se2 = "sm" === Z2 ? "h-8 w-8" : "lg" === Z2 ? "h-10 w-10 sm:h-11 sm:w-11" : "h-9 w-9",
    ie2 = "sm" === Z2 ? "h-[18px] w-[18px]" : "lg" === Z2 ? "h-5 w-5 sm:h-6 sm:w-6" : "h-5 w-5",
    oe2 = ie2,
    le2 = "sm" === Z2 ? "h-9 w-9" : "lg" === Z2 ? "h-11 w-11 sm:h-12 sm:w-12" : Y2 ? "h-11 w-11" : "h-12 w-12",
    ce2 = "sm" === Z2 ? "h-5 w-5" : "lg" === Z2 ? "h-6 w-6 sm:h-7 sm:w-7" : "h-6 w-6",
    ue2 = x(J2 ? "flex flex-col items-center justify-center gap-0.5" : "flex items-center justify-center gap-1", ee2),
    de2 = Bn,
    me2 = x(se2, re2);
  let fe2, he2, pe2;
  return b2[0] !== de2 || b2[1] !== Q2 || b2[2] !== X2 || b2[3] !== oe2 || b2[4] !== me2 ? (fe2 = Gr.jsx(de2, {
    direction: "next",
    onClick: Q2,
    disabled: X2,
    className: me2,
    iconClassName: oe2
  }), b2[0] = de2, b2[1] = Q2, b2[2] = X2, b2[3] = oe2, b2[4] = me2, b2[5] = fe2) : fe2 = b2[5], b2[6] !== se2 || b2[7] !== te2 ? (he2 = x("bg-transparent hover:bg-transparent shadow-none", se2, te2), b2[6] = se2, b2[7] = te2, b2[8] = he2) : he2 = b2[8], b2[9] !== V2 || b2[10] !== ie2 || b2[11] !== X2 || b2[12] !== D2 || b2[13] !== F2 || b2[14] !== he2 ? (pe2 = Gr.jsx(Hn, {
    isShuffled: D2,
    shuffleType: F2,
    onClick: V2,
    disabled: X2,
    className: he2,
    iconClassName: ie2
  }), b2[9] = V2, b2[10] = ie2, b2[11] = X2, b2[12] = D2, b2[13] = F2, b2[14] = he2, b2[15] = pe2) : pe2 = b2[15], Gr.jsxs("div", {
    className: ue2,
    children: [Gr.jsx(Un, {
      repeatMode: z2,
      onClick: H2,
      disabled: X2,
      className: x("bg-transparent hover:bg-transparent shadow-none", se2, te2),
      iconClassName: ie2
    }), Gr.jsx(Bn, {
      direction: "previous",
      onClick: () => {
        a.info("[Controls] Skip Previous button clicked"), U2();
      },
      disabled: X2,
      className: x(se2, re2),
      iconClassName: oe2
    }), Gr.jsx(qn, {
      isLoading: !!M2 || !!R2,
      isPlaying: I2,
      toggle: B2,
      disabled: X2,
      iconWeight: "Bold",
      className: x("bg-transparent hover:bg-transparent shadow-none", le2, "text-foreground/85 hover:text-foreground", ne2),
      iconClassName: ce2
    }), fe2, pe2]
  });
}, (e2, t2) => {
  var n2, a2, r2, s2, i2, o2, l2, c2;
  const u2 = null != (n2 = e2.state) ? n2 : e2,
    d2 = null != (a2 = t2.state) ? a2 : t2;
  if ((null == (r2 = u2.currentSong) ? void 0 : r2.id) !== (null == (s2 = d2.currentSong) ? void 0 : s2.id)) return false;
  if (u2.isPlaying !== d2.isPlaying) return false;
  if (u2.isLoading !== d2.isLoading) return false;
  if (u2.isLoadingAudio !== d2.isLoadingAudio) return false;
  if (u2.repeatMode !== d2.repeatMode) return false;
  if (u2.isShuffled !== d2.isShuffled) return false;
  if (u2.shuffleType !== d2.shuffleType) return false;
  if (u2.canControl !== d2.canControl) return false;
  const m2 = null != (i2 = e2.ops) ? i2 : e2,
    f2 = null != (o2 = t2.ops) ? o2 : t2;
  if (m2.toggle !== f2.toggle) return false;
  if (m2.prev !== f2.prev) return false;
  if (m2.next !== f2.next) return false;
  if (m2.toggleRepeatMode !== f2.toggleRepeatMode) return false;
  if (m2.toggleShuffle !== f2.toggleShuffle) return false;
  const h2 = null != (l2 = e2.layout) ? l2 : e2,
    p2 = null != (c2 = t2.layout) ? c2 : t2;
  return h2.size === p2.size && h2.direction === p2.direction && h2.className === p2.className && h2.buttonClassName === p2.buttonClassName && h2.playButtonClassName === p2.playButtonClassName && h2.skipButtonClassName === p2.skipButtonClassName && h2.playerLayout === p2.playerLayout;
});
function Zv(e2) {
  return Boolean(e2.currentSong);
}
function ex(e2) {
  return e2.isPlaying;
}
function tx(e2) {
  return e2.isLoading;
}
function nx(e2) {
  return e2.isLoadingAudio;
}
function ax(e2) {
  return e2.repeatMode;
}
function rx(e2) {
  return e2.isShuffled;
}
function sx(e2) {
  return e2.shuffleType;
}
function ix(e2) {
  return {
    toggle: e2.toggle,
    prev: e2.prev,
    next: e2.next,
    cycleRepeatMode: e2.cycleRepeatMode,
    cycleShuffleModeSimple: e2.cycleShuffleModeSimple
  };
}
const ux = Xr.memo(function (e2) {
  const t2 = Kr.c(20),
    {
      song: n2,
      coverUrl: a2,
      className: r2,
      canvasOpacity: s2,
      coverOpacity: i2,
      overlayOpacity: o2
    } = e2,
    l2 = void 0 === s2 ? 1 : s2,
    c2 = void 0 === i2 ? 0.32 : i2,
    u2 = void 0 === o2 ? 0.45 : o2,
    d2 = ox(n2),
    [m2, f2] = Qr.useState(false);
  let h2, p2, g2, v2, y2;
  if (t2[0] === Symbol.for("react.memo_cache_sentinel") ? (h2 = () => {
    f2(false);
  }, t2[0] = h2) : h2 = t2[0], t2[1] !== d2 ? (p2 = [d2], t2[1] = d2, t2[2] = p2) : p2 = t2[2], Qr.useEffect(h2, p2), !d2 && !a2) return null;
  t2[3] !== r2 ? (g2 = x("absolute inset-0 overflow-hidden pointer-events-none", r2), t2[3] = r2, t2[4] = g2) : g2 = t2[4], t2[5] !== d2 || t2[6] !== c2 || t2[7] !== a2 || t2[8] !== m2 ? (v2 = a2 && Gr.jsx("div", {
    className: "absolute inset-0 bg-cover bg-center transition-opacity duration-500 scale-[1.03]",
    style: {
      backgroundImage: `url("${a2}")`,
      opacity: d2 && m2 ? 0 : c2
    }
  }), t2[5] = d2, t2[6] = c2, t2[7] = a2, t2[8] = m2, t2[9] = v2) : v2 = t2[9], t2[10] !== l2 || t2[11] !== d2 ? (y2 = d2 && Gr.jsx("div", {
    className: "absolute inset-0 animate-in fade-in zoom-in-[1.02] duration-500",
    style: {
      opacity: l2
    },
    children: Gr.jsx(cx, {
      url: d2,
      onReady: () => f2(true),
      onError: () => f2(false)
    })
  }), t2[10] = l2, t2[11] = d2, t2[12] = y2) : y2 = t2[12];
  const b2 = `rgba(0,0,0,${u2})`;
  let w2, k2;
  return t2[13] !== b2 ? (w2 = Gr.jsx("div", {
    className: "absolute inset-0",
    style: {
      backgroundColor: b2
    }
  }), t2[13] = b2, t2[14] = w2) : w2 = t2[14], t2[15] !== w2 || t2[16] !== g2 || t2[17] !== v2 || t2[18] !== y2 ? (k2 = Gr.jsxs("div", {
    className: g2,
    children: [v2, y2, w2]
  }), t2[15] = w2, t2[16] = g2, t2[17] = v2, t2[18] = y2, t2[19] = k2) : k2 = t2[19], k2;
});
function fx(e2) {
  const [t2, n2] = Qr.useState(0),
    r2 = null != e2 ? String(e2) : null,
    s2 = Qr.useRef(r2);
  s2.current = r2, Qr.useEffect(() => {
    let e3 = false;
    if (r2) return ch(r2).then(async t3 => {
      if (!e3) if ("number" != typeof (null == t3 ? void 0 : t3.lyricsOffset)) {
        try {
          const e4 = `lyrics_offset_${r2}`,
            t4 = Ie.load(e4);
          if (t4) {
            const a2 = parseFloat(t4);
            if (!Number.isNaN(a2)) return n2(a2), await mh(r2, a2), void Ie.clear(e4);
          }
        } catch (s3) {
          a.warn("ui", "Failed to migrate legacy lyrics offset:", s3);
        }
        e3 || n2(0);
      } else n2(t3.lyricsOffset);
    }).catch(t3 => {
      a.warn("ui", "Failed to load lyrics offset from trackSettings:", t3), e3 || n2(0);
    }), () => {
      e3 = true;
    };
    n2(0);
  }, [r2]);
  const i2 = Qr.useCallback(e3 => {
      const t3 = Math.round(1e3 * e3) / 1e3,
        r3 = Math.max(-15, Math.min(15, t3));
      n2(r3);
      const i3 = s2.current;
      if (i3) {
        0 === r3 ? async function (e4) {
          if (e4) try {
            const t4 = await Xt.trackSettings.get(e4);
            if (!t4) return;
            void 0 !== t4.speed || void 0 !== t4.equalizer || void 0 !== t4.volume || void 0 !== t4.pitch ? await Xt.trackSettings.update(e4, {
              lyricsOffset: void 0
            }) : await Xt.trackSettings.delete(e4), window.dispatchEvent(new CustomEvent("track-remember-changed", {
              detail: {
                trackId: e4,
                type: "lyricsOffset"
              }
            }));
          } catch (t4) {
            throw a.error("database", `Failed to remove lyrics offset for track ${e4}:`, t4), t4;
          }
        }(i3).catch(e4 => {
          a.warn("ui", "Failed to remove lyrics offset:", e4);
        }) : mh(i3, r3).catch(e4 => {
          a.warn("ui", "Failed to save lyrics offset:", e4);
        });
        try {
          Ie.clear(`lyrics_offset_${i3}`);
        } catch {}
      }
    }, []),
    o2 = Qr.useCallback(() => {
      i2(0);
    }, [i2]),
    l2 = Qr.useCallback(e3 => {
      i2(t2 + e3);
    }, [t2, i2]);
  return {
    lyricsOffset: t2,
    setLyricsOffset: i2,
    resetLyricsOffset: o2,
    adjustLyricsOffset: l2
  };
}
function hx(e2, t2, n2, a2 = 0) {
  const r2 = (e2 / 255) ** 2.2 * 0.2126 + (t2 / 255) ** 2.2 * 0.7152 + (n2 / 255) ** 2.2 * 0.0722;
  if (r2 <= 0.12) return 1;
  return ((0.12 + (r2 - 0.12) * (0.24 + -0.195 * Math.max(0, Math.min(1, a2)))) / r2) ** (1 / 2.2);
}
function px(e2, t2, n2, a2) {
  let r2 = 0;
  for (const [s2, i2, o2, l2] of n2) {
    const n3 = (e2 - s2) / Math.max(1e-3, 0.7 * o2 + 0.12 / a2),
      c2 = (t2 - i2) / Math.max(1e-3, 0.7 * l2 + 0.12);
    r2 = Math.max(r2, Math.exp(-0.35 * (n3 * n3 + c2 * c2)));
  }
  return r2;
}
function gx(e2) {
  const t2 = document.createElement("canvas");
  t2.width = t2.height = 192;
  const n2 = t2.getContext("2d");
  n2.fillStyle = "black", n2.fillRect(0, 0, 192, 192);
  const a2 = Math.min(e2.naturalWidth, e2.naturalHeight);
  n2.drawImage(e2, (e2.naturalWidth - a2) / 2, (e2.naturalHeight - a2) / 2, a2, a2, 0, 0, 192, 192);
  const r2 = Qn(n2.getImageData(0, 0, 192, 192).data),
    s2 = function (e3) {
      const t3 = e3.reduce((e4, t4) => e4 + t4.count, 0);
      if (!t3) return 0;
      const n3 = e3.reduce((e4, t4) => e4 + (Math.max(t4.r, t4.g, t4.b) - Math.min(t4.r, t4.g, t4.b) <= 32 && t4.l >= 80 ? t4.count : 0), 0),
        a3 = Math.max(0, Math.min(1, (n3 / t3 - 0.3) / 0.45));
      return a3 * a3 * (3 - 2 * a3);
    }(r2),
    i2 = r2.reduce((e3, t3) => e3 + t3.count, 0),
    o2 = r2.reduce((e3, t3) => e3 + (t3.r + 0.7 * t3.g + 0.3 * t3.b) * t3.count, 0) / Math.max(1, 48 * i2),
    l2 = n2.getImageData(0, 0, 192, 192);
  !function (e3, t3, n3, a3) {
    let r3 = Float32Array.from(e3),
      s3 = new Float32Array(e3.length);
    const i3 = Math.sqrt(4 * a3 * a3 + 1),
      o3 = Math.floor(i3),
      l3 = Math.max(1, o3 % 2 ? o3 : o3 - 1),
      c3 = l3 + 2,
      u2 = Math.round((12 * a3 * a3 - 3 * l3 * l3 - 12 * l3 - 9) / (-4 * l3 - 4)),
      d2 = (e4, t4) => {
        const n4 = (e4 % (2 * t4) + 2 * t4) % (2 * t4);
        return n4 < t4 ? n4 : 2 * t4 - n4 - 1;
      };
    for (let m2 = 0; m2 < 3; m2++) {
      const e4 = ((m2 < u2 ? l3 : c3) - 1) / 2;
      for (const a4 of [true, false]) {
        const i4 = a4 ? t3 : n3,
          o4 = a4 ? n3 : t3,
          l4 = (e5, n4) => 4 * (a4 ? e5 * t3 + d2(n4, i4) : d2(n4, i4) * t3 + e5);
        for (let t4 = 0; t4 < o4; t4++) for (let n4 = 0; n4 < 4; n4++) {
          let a5 = 0;
          for (let s4 = -e4; s4 <= e4; s4++) a5 += r3[l4(t4, s4) + n4];
          for (let o5 = 0; o5 < i4; o5++) s3[l4(t4, o5) + n4] = a5 / (2 * e4 + 1), a5 += r3[l4(t4, o5 + e4 + 1) + n4] - r3[l4(t4, o5 - e4) + n4];
        }
        [r3, s3] = [s3, r3];
      }
    }
    e3.set(r3);
  }(l2.data, 192, 192, 16 - 4 * s2), n2.putImageData(l2, 0, 0);
  const c2 = function (e3) {
    const t3 = [];
    let n3 = 0;
    for (let a3 = 0; a3 < e3.length; a3 += 4) t3.push((0.2126 * e3[a3] + 0.7152 * e3[a3 + 1] + 0.0722 * e3[a3 + 2]) / 255), n3 = Math.max(n3, e3[a3], e3[a3 + 1], e3[a3 + 2]);
    return t3.sort((e4, t4) => e4 - t4), !t3.length || t3[Math.floor(t3.length / 2)] >= 0.58 ? 1 : Math.min(1.43, 0.221 / Math.max(0.12, n3 / 255));
  }(l2.data);
  return {
    canvas: t2,
    seed: o2,
    exposure: c2
  };
}
function vx(e2, t2, n2, a2, r2 = 1) {
  const s2 = e2.getContext("2d");
  s2.drawImage(t2, 0, 0, e2.width, e2.height);
  const i2 = s2.getImageData(0, 0, e2.width, e2.height);
  for (let o2 = 0; o2 < i2.data.length; o2 += 4) {
    const t3 = o2 / 4,
      s3 = px((t3 % e2.width + 0.5) / e2.width, (Math.floor(t3 / e2.width) + 0.5) / e2.height, n2, a2),
      l2 = r2 * hx(i2.data[o2] * r2, i2.data[o2 + 1] * r2, i2.data[o2 + 2] * r2, s3);
    for (let e3 = 0; e3 < 3; e3++) i2.data[o2 + e3] *= l2;
  }
  s2.putImageData(i2, 0, 0);
}
class xx {
  constructor(e2) {
    t(this, "gl"), t(this, "program"), t(this, "buffer"), t(this, "shaders", []), t(this, "textures", []), t(this, "ready", [false, false]), t(this, "sequence", [0, 0]), t(this, "loadedKeys", [null, null]), t(this, "requestedKeys", [null, null]), t(this, "active", 1), t(this, "mix", 1), t(this, "elapsed", 0), t(this, "frame", 0), t(this, "last", 0), t(this, "running", false), t(this, "disposed", false), t(this, "animate", true), t(this, "locations", {}), t(this, "focusFrom", [0, 0]), t(this, "focusTo", [0, 0]), t(this, "focusMix", 1), t(this, "focusIndex", -1), t(this, "tick", e3 => {
      if (this.running && !this.disposed) {
        if (!this.last || e3 - this.last >= 1e3 / 24) {
          const t2 = this.last ? Math.min(100, e3 - this.last) : 0;
          this.last = e3, this.elapsed += t2 / 1e3;
          const n3 = this.ready[this.active] && this.loadedKeys[this.active] === this.requestedKeys[this.active] ? this.active : this.mix;
          this.mix += (n3 - this.mix) * Math.min(1, t2 / 160), this.focusMix = Math.min(1, this.focusMix + t2 / 700), this.draw();
        }
        this.frame = requestAnimationFrame(this.tick);
      }
    }), this.canvas = e2;
    const n2 = e2.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      preserveDrawingBuffer: true,
      powerPreference: "low-power"
    });
    if (!n2) throw new Error("Lyrics WebGL unavailable");
    this.gl = n2, this.program = n2.createProgram(), this.buffer = n2.createBuffer();
    try {
      for (const [t2, a2] of [[n2.VERTEX_SHADER, "\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }\n"], [n2.FRAGMENT_SHADER, "\nprecision highp float;\nvarying vec2 uv;\nuniform sampler2D artwork0;\nuniform sampler2D artwork1;\nuniform float blend;\nuniform float time;\nuniform float motion;\nuniform vec2 focus0;\nuniform vec2 focus1;\nuniform float focusBlend;\nuniform float aspect;\nuniform vec2 character0;\nuniform vec2 character1;\nuniform vec4 readability[8];\nuniform int areaCount;\nvec2 coverCoordinates(vec2 p) { return clamp(p, 0.0, 1.0); }\nfloat quietArea() {\n  float weight = 0.0;\n  vec2 screen = vec2(uv.x, 1.0 - uv.y);\n  for (int i = 0; i < 8; i++) {\n    if (i >= areaCount) break;\n    vec2 radius = max(vec2(0.001), readability[i].zw * 0.7 + vec2(0.12 / aspect, 0.12));\n    vec2 offset = (screen - readability[i].xy) / radius;\n    weight = max(weight, exp(-0.35 * dot(offset, offset)));\n  }\n  return weight;\n}\nvec3 field(vec2 focus, sampler2D art, vec2 character) {\n  float t = time * motion * 1.45;\n  float seed = character.x;\n  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);\n  vec2 current = sin(vec2(p.y * 2.3, p.x * 1.9) + vec2(t * 0.31, -t * 0.27) + seed);\n  current += 0.45 * sin(vec2(p.x + p.y, p.y - p.x) * 3.1 + current.yx * 0.7 + vec2(-t * 0.19, t * 0.23));\n  // move the image coordinates, without adding procedural lights or colour fields.\n  vec2 driftA = vec2(sin(t * 0.21 + seed), cos(t * 0.18 - seed)) * vec2(0.26, 0.20);\n  // one drifting view keeps small colour regions from being mixed with an unrelated part of the cover\n  vec2 surface = uv + current * 0.29 + driftA * 0.40 + focus * 0.12;\n  vec3 source = texture2D(art, coverCoordinates(surface)).rgb;\n  return source * character.y;\n}\nvec3 ambient(vec2 focus) {\n  if (blend <= 0.0) return field(focus, artwork0, character0);\n  vec3 next = field(focus, artwork1, character1);\n  if (blend >= 1.0) return next;\n  return mix(field(focus, artwork0, character0), next, blend);\n}\nvoid main() {\n  vec3 colour = ambient(focus1);\n  if (focusBlend < 1.0) colour = mix(ambient(focus0), colour, focusBlend);\n  // Compress highlights after blending. Hue and channel ratios stay those of the cover.\n  float luminance = dot(pow(colour, vec3(2.2)), vec3(0.2126, 0.7152, 0.0722));\n  float compression = mix(0.24, 0.045, quietArea());\n  if (luminance > 0.12) {\n    float mapped = 0.12 + (luminance - 0.12) * compression;\n    colour *= pow(mapped / luminance, 1.0 / 2.2);\n  }\n  float grain = fract(dot(gl_FragCoord.xy, vec2(0.75487766, 0.56984029))) - 0.5;\n  gl_FragColor = vec4(clamp(colour + grain / 255.0, 0.0, 1.0), 1.0);\n}\n"]]) {
        const e4 = n2.createShader(t2);
        if (this.shaders.push(e4), n2.shaderSource(e4, a2), n2.compileShader(e4), !n2.getShaderParameter(e4, n2.COMPILE_STATUS)) throw new Error(n2.getShaderInfoLog(e4) || "Lyrics shader failed");
        n2.attachShader(this.program, e4);
      }
      if (n2.linkProgram(this.program), !n2.getProgramParameter(this.program, n2.LINK_STATUS)) throw new Error(n2.getProgramInfoLog(this.program) || "Lyrics shader link failed");
      n2.useProgram(this.program), n2.bindBuffer(n2.ARRAY_BUFFER, this.buffer), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), n2.STATIC_DRAW);
      const e3 = n2.getAttribLocation(this.program, "position");
      n2.enableVertexAttribArray(e3), n2.vertexAttribPointer(e3, 2, n2.FLOAT, false, 0, 0);
      for (const t2 of ["artwork0", "artwork1", "blend", "time", "motion", "focus0", "focus1", "focusBlend", "aspect", "character0", "character1", "readability[0]", "areaCount"]) this.locations[t2] = n2.getUniformLocation(this.program, t2);
      for (let t2 = 0; t2 < 2; t2++) {
        const e4 = n2.createTexture();
        this.textures.push(e4), n2.activeTexture(n2.TEXTURE0 + t2), n2.bindTexture(n2.TEXTURE_2D, e4), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_MIN_FILTER, n2.LINEAR), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_MAG_FILTER, n2.LINEAR), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_WRAP_S, n2.CLAMP_TO_EDGE), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_WRAP_T, n2.CLAMP_TO_EDGE), n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, 1, 1, 0, n2.RGBA, n2.UNSIGNED_BYTE, new Uint8Array([10, 10, 10, 255])), n2.uniform1i(this.locations[`artwork${t2}`], t2);
      }
      this.resize();
    } catch (a2) {
      throw this.dispose(), a2;
    }
  }
  resize() {
    const e2 = this.canvas.getBoundingClientRect(),
      t2 = Math.min(1, 1200 / Math.max(1, e2.width));
    this.canvas.width = Math.max(1, Math.round(e2.width * t2)), this.canvas.height = Math.max(1, Math.round(e2.height * t2)), this.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.gl.uniform1f(this.locations.aspect, this.canvas.width / this.canvas.height), this.draw();
  }
  async setArtwork(e2, t2, n2 = t2) {
    const a2 = ++this.sequence[e2];
    if (this.requestedKeys[e2] = n2, !t2) return this.ready[e2] = false, this.loadedKeys[e2] = null, this.draw(), false;
    if (this.ready[e2] && this.loadedKeys[e2] === n2) return true;
    const r2 = new Image();
    r2.crossOrigin = "anonymous", r2.src = t2;
    try {
      if (await r2.decode(), this.disposed || a2 !== this.sequence[e2]) return false;
      const {
          canvas: t3,
          seed: s2,
          exposure: i2
        } = gx(r2),
        o2 = this.gl;
      return o2.useProgram(this.program), o2.uniform2f(this.locations[`character${e2}`], s2, i2), o2.activeTexture(o2.TEXTURE0 + e2), o2.bindTexture(o2.TEXTURE_2D, this.textures[e2]), o2.pixelStorei(o2.UNPACK_FLIP_Y_WEBGL, true), o2.texImage2D(o2.TEXTURE_2D, 0, o2.RGBA, o2.RGBA, o2.UNSIGNED_BYTE, t3), this.ready[e2] = true, this.loadedKeys[e2] = n2, this.ready[1 - e2] && this.animate && (this.mix = 1 - e2), this.ready[1 - e2] && this.animate || (this.mix = e2), this.running || e2 !== this.active || (this.mix = e2), t3.width = t3.height = 0, this.draw(), true;
    } finally {
      r2.src = "";
    }
  }
  setActive(e2) {
    this.active = e2, this.animate && this.running || !this.ready[e2] || this.loadedKeys[e2] !== this.requestedKeys[e2] || (this.mix = e2), this.draw();
  }
  setReadability(e2) {
    const t2 = new Float32Array(32);
    e2.slice(0, 8).forEach((e3, n2) => t2.set(e3, 4 * n2)), this.gl.useProgram(this.program), this.gl.uniform4fv(this.locations["readability[0]"], t2), this.gl.uniform1i(this.locations.areaCount, Math.min(8, e2.length)), this.draw();
  }
  setFocus(e2) {
    if (e2 === this.focusIndex) return;
    this.focusIndex = e2, this.focusFrom = this.focusFrom.map((e3, t3) => e3 + (this.focusTo[t3] - e3) * this.focusMix);
    const t2 = Math.max(0, e2) + 1,
      n2 = e3 => {
        const n3 = 43758.5453 * Math.sin(t2 * (0 === e3 ? 12.9898 : 78.233));
        return 0.44 * (n3 - Math.floor(n3) - 0.5);
      };
    this.focusTo = e2 < 0 ? [0, 0] : [n2(0), n2(1)], this.focusMix = this.animate ? 0 : 1, this.draw();
  }
  setRunning(e2, t2 = true) {
    this.animate = t2, t2 || (this.mix = this.active, this.focusMix = 1), this.frame && cancelAnimationFrame(this.frame), this.frame = 0, this.running = e2 && t2, this.last = 0, this.draw(), this.running && (this.frame = requestAnimationFrame(this.tick));
  }
  draw() {
    if (this.disposed) return;
    const e2 = this.gl;
    if (e2.useProgram(this.program), !this.ready[0] && !this.ready[1]) return e2.clearColor(0.04, 0.04, 0.04, 1), void e2.clear(e2.COLOR_BUFFER_BIT);
    const t2 = this.ready[0] && this.ready[1] ? this.mix : this.ready[0] ? 0 : 1;
    e2.uniform1f(this.locations.blend, t2), e2.uniform1f(this.locations.time, this.elapsed), e2.uniform1f(this.locations.motion, this.animate ? 1 : 0), e2.uniform2fv(this.locations.focus0, this.focusFrom), e2.uniform2fv(this.locations.focus1, this.focusTo);
    const n2 = this.focusMix * this.focusMix * (3 - 2 * this.focusMix);
    e2.uniform1f(this.locations.focusBlend, n2), e2.drawArrays(e2.TRIANGLE_STRIP, 0, 4);
  }
  dispose() {
    this.disposed = true, this.running = false, this.frame && cancelAnimationFrame(this.frame);
    for (const e2 of this.textures) this.gl.deleteTexture(e2);
    for (const e2 of this.shaders) this.gl.deleteShader(e2);
    this.gl.deleteBuffer(this.buffer), this.gl.deleteProgram(this.program);
  }
}
function yx(e2) {
  const t2 = Kr.c(51),
    {
      topArtwork: n2,
      bottomArtwork: a2,
      showTop: r2,
      lineIndex: s2,
      isPlaying: i2,
      topKey: o2,
      bottomKey: l2
    } = e2,
    c2 = void 0 === s2 ? -1 : s2,
    u2 = void 0 === i2 || i2,
    d2 = Qr.useRef(null),
    m2 = Qr.useRef(null),
    f2 = Qr.useRef(null),
    h2 = Qr.useRef(null),
    p2 = Qr.useRef(1);
  let g2;
  t2[0] === Symbol.for("react.memo_cache_sentinel") ? (g2 = [], t2[0] = g2) : g2 = t2[0];
  const v2 = Qr.useRef(g2),
    [x2, y2] = Qr.useState(false),
    [b2, w2] = Qr.useState(0),
    k2 = V(Sx),
    j2 = ls();
  let S2, N2, _2, C2, T2, E2, L2, A2, P2, I2, M2, R2;
  t2[1] === Symbol.for("react.memo_cache_sentinel") ? (S2 = () => {
    const e3 = d2.current;
    if (!e3) return;
    let t3;
    try {
      t3 = new xx(e3);
    } catch {
      return void y2(true);
    }
    m2.current = t3, y2(false);
    const n3 = new ResizeObserver(() => t3.resize());
    n3.observe(e3);
    const a3 = e4 => {
        e4.preventDefault(), t3.setRunning(false), y2(true);
      },
      r3 = () => w2(jx);
    return e3.addEventListener("webglcontextlost", a3), e3.addEventListener("webglcontextrestored", r3), () => {
      n3.disconnect(), t3.dispose(), m2.current = null, e3.removeEventListener("webglcontextlost", a3), e3.removeEventListener("webglcontextrestored", r3);
    };
  }, t2[1] = S2) : S2 = t2[1], t2[2] !== b2 ? (N2 = [b2], t2[2] = b2, t2[3] = N2) : N2 = t2[3], Qr.useEffect(S2, N2), t2[4] === Symbol.for("react.memo_cache_sentinel") ? (_2 = () => {
    const e3 = d2.current,
      t3 = null == e3 ? void 0 : e3.closest(".lyrics-stage");
    if (!e3 || !t3) return;
    let n3 = 0;
    const a3 = new Set(),
      r3 = () => {
        var r4;
        n3 = 0;
        const s4 = e3.getBoundingClientRect();
        if (!s4.width || !s4.height) return;
        const o4 = Array.from(t3.querySelectorAll("[data-lyrics-contrast]"));
        for (const e4 of a3) o4.includes(e4) || (i3.unobserve(e4), a3.delete(e4));
        const l4 = o4.map(e4 => {
          a3.has(e4) || (i3.observe(e4), a3.add(e4));
          const t4 = e4.getBoundingClientRect();
          return [(t4.x + t4.width / 2 - s4.x) / s4.width, (t4.y + t4.height / 2 - s4.y) / s4.height, t4.width / s4.width, t4.height / s4.height];
        }).filter(kx).slice(0, 8);
        v2.current = l4, null == (r4 = m2.current) || r4.setReadability(l4), h2.current && f2.current && vx(f2.current, h2.current, l4, s4.width / s4.height, p2.current);
      },
      s3 = () => {
        n3 || document.hidden || V.getState().isMinimized || (n3 = requestAnimationFrame(r3));
      },
      i3 = new ResizeObserver(s3);
    i3.observe(t3);
    const o3 = wx,
      l3 = new MutationObserver(e4 => {
        e4.some(e5 => [...e5.addedNodes, ...e5.removedNodes].some(o3)) && s3();
      });
    l3.observe(t3, {
      childList: true,
      subtree: true
    });
    const c3 = V.subscribe((e4, t4) => {
      t4.isMinimized && !e4.isMinimized && s3();
    });
    return document.addEventListener("visibilitychange", s3), s3(), () => {
      c3(), document.removeEventListener("visibilitychange", s3), cancelAnimationFrame(n3), i3.disconnect(), l3.disconnect();
    };
  }, t2[4] = _2) : _2 = t2[4], t2[5] !== x2 || t2[6] !== b2 ? (C2 = [b2, x2], t2[5] = x2, t2[6] = b2, t2[7] = C2) : C2 = t2[7], Qr.useEffect(_2, C2), t2[8] !== a2 || t2[9] !== l2 || t2[10] !== r2 || t2[11] !== n2 || t2[12] !== o2 ? (T2 = () => {
    const e3 = m2.current;
    if (!e3) return;
    let t3 = false;
    return [a2, n2].forEach((n3, a3) => {
      var s3;
      e3.setArtwork(a3, n3, null != (s3 = 0 === a3 ? l2 : o2) ? s3 : n3).then(e4 => {
        !t3 && e4 && a3 === (r2 ? 1 : 0) && y2(false);
      }).catch(() => {
        t3 || a3 !== (r2 ? 1 : 0) || y2(true);
      });
    }), () => {
      t3 = true;
    };
  }, t2[8] = a2, t2[9] = l2, t2[10] = r2, t2[11] = n2, t2[12] = o2, t2[13] = T2) : T2 = t2[13], t2[14] !== a2 || t2[15] !== l2 || t2[16] !== b2 || t2[17] !== r2 || t2[18] !== n2 || t2[19] !== o2 ? (E2 = [a2, n2, l2, o2, r2, b2], t2[14] = a2, t2[15] = l2, t2[16] = b2, t2[17] = r2, t2[18] = n2, t2[19] = o2, t2[20] = E2) : E2 = t2[20], Qr.useEffect(T2, E2), t2[21] !== r2 ? (L2 = () => {
    var e3;
    null == (e3 = m2.current) || e3.setActive(r2 ? 1 : 0);
  }, t2[21] = r2, t2[22] = L2) : L2 = t2[22], t2[23] !== b2 || t2[24] !== r2 ? (A2 = [r2, b2], t2[23] = b2, t2[24] = r2, t2[25] = A2) : A2 = t2[25], Qr.useEffect(L2, A2), t2[26] !== c2 ? (P2 = () => {
    var e3;
    null == (e3 = m2.current) || e3.setFocus(c2);
  }, t2[26] = c2, t2[27] = P2) : P2 = t2[27], t2[28] !== b2 || t2[29] !== c2 ? (I2 = [c2, b2], t2[28] = b2, t2[29] = c2, t2[30] = I2) : I2 = t2[30], Qr.useEffect(P2, I2), t2[31] !== k2 || t2[32] !== u2 || t2[33] !== j2 ? (M2 = () => {
    const e3 = () => {
      var e4;
      return null == (e4 = m2.current) ? void 0 : e4.setRunning(u2 && k2 && !document.hidden, !j2 && !document.documentElement.classList.contains("no-animations"));
    };
    e3(), document.addEventListener("visibilitychange", e3);
    const t3 = new MutationObserver(e3);
    return t3.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    }), () => {
      document.removeEventListener("visibilitychange", e3), t3.disconnect();
    };
  }, t2[31] = k2, t2[32] = u2, t2[33] = j2, t2[34] = M2) : M2 = t2[34], t2[35] !== k2 || t2[36] !== b2 || t2[37] !== u2 || t2[38] !== j2 ? (R2 = [u2, k2, j2, b2], t2[35] = k2, t2[36] = b2, t2[37] = u2, t2[38] = j2, t2[39] = R2) : R2 = t2[39], Qr.useEffect(M2, R2);
  const z2 = r2 ? n2 : a2;
  let D2, F2;
  t2[40] !== x2 || t2[41] !== z2 ? (D2 = () => {
    var e3, t3;
    if (!x2) return;
    if (!z2) return h2.current = null, void (null == (t3 = null == (e3 = f2.current) ? void 0 : e3.getContext("2d")) || t3.clearRect(0, 0, 192, 192));
    let n3 = false;
    const a3 = new Image();
    return a3.crossOrigin = "anonymous", a3.src = z2, a3.decode().then(() => {
      var e4;
      if (n3) return;
      const {
        canvas: t4,
        exposure: r3
      } = gx(a3);
      h2.current = t4, p2.current = r3;
      const s3 = null == (e4 = f2.current) ? void 0 : e4.getBoundingClientRect();
      f2.current && (null == s3 ? void 0 : s3.width) && s3.height && vx(f2.current, t4, v2.current, s3.width / s3.height, r3);
    }).catch(bx), () => {
      n3 = true, h2.current && (h2.current.width = h2.current.height = 0), h2.current = null, a3.src = "";
    };
  }, F2 = [x2, z2], t2[40] = x2, t2[41] = z2, t2[42] = D2, t2[43] = F2) : (D2 = t2[42], F2 = t2[43]), Qr.useEffect(D2, F2);
  const O2 = x2 ? 0 : 1;
  let $2, B2, U2;
  return t2[44] !== O2 ? ($2 = Gr.jsx("canvas", {
    ref: d2,
    "aria-hidden": true,
    className: "absolute inset-0 size-full",
    style: {
      opacity: O2
    }
  }), t2[44] = O2, t2[45] = $2) : $2 = t2[45], t2[46] !== x2 ? (B2 = x2 && Gr.jsx("canvas", {
    ref: f2,
    width: 192,
    height: 192,
    "aria-hidden": true,
    className: "absolute inset-0 size-full"
  }), t2[46] = x2, t2[47] = B2) : B2 = t2[47], t2[48] !== $2 || t2[49] !== B2 ? (U2 = Gr.jsxs(Gr.Fragment, {
    children: [$2, B2]
  }), t2[48] = $2, t2[49] = B2, t2[50] = U2) : U2 = t2[50], U2;
}
function bx() {}
function wx(e2) {
  return e2 instanceof Element && (e2.matches("[data-lyrics-contrast]") || null !== e2.querySelector("[data-lyrics-contrast]"));
}
function kx(e2) {
  return e2[2] > 0 && e2[3] > 0;
}
function jx(e2) {
  return e2 + 1;
}
function Sx(e2) {
  return !e2.isMinimized && e2.isFocused;
}
function Nx(e2) {
  const t2 = Kr.c(6),
    [n2, a2] = Qr.useState(null);
  let r2;
  t2[0] !== e2 ? (r2 = e2 ? Kn(e2, Gn(e2), "lg") : null, t2[0] = e2, t2[1] = r2) : r2 = t2[1];
  const s2 = r2;
  let i2, o2;
  return t2[2] !== s2 || t2[3] !== e2 ? (i2 = () => {
    if (!e2 || !s2) return;
    let t3 = false;
    return Xn(e2, s2).then(n3 => {
      t3 || n3 === e2 || a2({
        src: e2,
        url: n3
      });
    }).catch(_x), () => {
      t3 = true;
    };
  }, o2 = [e2, s2], t2[2] = s2, t2[3] = e2, t2[4] = i2, t2[5] = o2) : (i2 = t2[4], o2 = t2[5]), Qr.useEffect(i2, o2), (null == n2 ? void 0 : n2.src) === e2 ? n2.url : s2;
}
function _x() {}
function Cx(e2) {
  const t2 = Kr.c(8),
    {
      topCover: n2,
      bottomCover: a2,
      showTop: r2,
      lineIndex: s2,
      isPlaying: i2
    } = e2,
    o2 = Nx(a2),
    l2 = Nx(n2);
  let c2;
  return t2[0] !== o2 || t2[1] !== a2 || t2[2] !== i2 || t2[3] !== s2 || t2[4] !== r2 || t2[5] !== l2 || t2[6] !== n2 ? (c2 = Gr.jsx("div", {
    "aria-hidden": true,
    className: "pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black",
    children: Gr.jsx(yx, {
      topArtwork: l2,
      bottomArtwork: o2,
      showTop: r2,
      lineIndex: s2,
      isPlaying: i2,
      topKey: n2,
      bottomKey: a2
    })
  }), t2[0] = o2, t2[1] = a2, t2[2] = i2, t2[3] = s2, t2[4] = r2, t2[5] = l2, t2[6] = n2, t2[7] = c2) : c2 = t2[7], c2;
}
const Tx = Xr.memo(e2 => {
  var t2, n2, a2, r2, s2;
  const i2 = Kr.c(32),
    {
      song: o2,
      avatarSize: l2,
      className: c2,
      avatarClassName: u2,
      textClassName: d2,
      link: m2,
      centerWhenIdle: f2,
      fallbackText: h2,
      formatVariant: p2
    } = e2,
    g2 = void 0 === l2 ? 16 : l2,
    v2 = void 0 === m2 || m2,
    y2 = void 0 !== f2 && f2,
    b2 = void 0 === p2 ? "default" : p2,
    [w2] = on(),
    k2 = null == (t2 = w2.avatars) || t2;
  if (!o2) return null;
  let S2;
  i2[0] !== o2.artists ? (S2 = (null == (a2 = null == (n2 = o2.artists) ? void 0 : n2.find(Ex)) ? void 0 : a2.avatar) || (null == (s2 = null == (r2 = o2.artists) ? void 0 : r2[0]) ? void 0 : s2.avatar), i2[0] = o2.artists, i2[1] = S2) : S2 = i2[1];
  const N2 = S2,
    _2 = o2.artist || h2 || "",
    C2 = d2 || "";
  let T2, E2, L2, A2, P2;
  if (i2[2] !== N2 || i2[3] !== _2 || i2[4] !== u2 || i2[5] !== g2 || i2[6] !== y2 || i2[7] !== c2 || i2[8] !== v2 || i2[9] !== k2 || i2[10] !== o2 || i2[11] !== C2) {
    const e3 = C2.split(/\s+/).filter(Boolean),
      t3 = e3.filter(Lx),
      n3 = e3.filter(Ax),
      a3 = x("transition-colors", t3.length > 0 ? t3.join(" ") : "hover:underline", !t3.some(Px) && "hover:underline");
    i2[15] !== c2 ? (T2 = x("flex items-center gap-1.5 min-w-0", c2), i2[15] = c2, i2[16] = T2) : T2 = i2[16], i2[17] !== N2 || i2[18] !== _2 || i2[19] !== u2 || i2[20] !== g2 || i2[21] !== k2 || i2[22] !== o2.source ? (E2 = k2 && N2 && Gr.jsx(ci, {
      src: N2,
      name: _2,
      size: g2,
      className: x("shrink-0 self-center", u2),
      source: o2.source
    }), i2[17] = N2, i2[18] = _2, i2[19] = u2, i2[20] = g2, i2[21] = k2, i2[22] = o2.source, i2[23] = E2) : E2 = i2[23], L2 = _2 && o2.source && v2 ? Gr.jsx(Vs, {
      containerClassName: x("min-w-0 max-w-full", y2 && "text-center"),
      className: x("text-xs leading-tight text-foreground/60", n3.join(" ")),
      children: Gr.jsx(Ui, {
        artists: _2,
        source: o2.source,
        artistsArray: o2.artists,
        origin: j(o2),
        className: a3
      })
    }) : Gr.jsx(Vs, {
      containerClassName: x("min-w-0 max-w-full", y2 && "text-center"),
      className: x("text-xs leading-tight text-foreground/60", n3.join(" ")),
      children: _2
    }), i2[2] = N2, i2[3] = _2, i2[4] = u2, i2[5] = g2, i2[6] = y2, i2[7] = c2, i2[8] = v2, i2[9] = k2, i2[10] = o2, i2[11] = C2, i2[12] = T2, i2[13] = E2, i2[14] = L2;
  } else T2 = i2[12], E2 = i2[13], L2 = i2[14];
  return i2[24] !== b2 || i2[25] !== o2 ? (A2 = Gr.jsx(Yn, {
    song: o2,
    variant: b2
  }), i2[24] = b2, i2[25] = o2, i2[26] = A2) : A2 = i2[26], i2[27] !== A2 || i2[28] !== T2 || i2[29] !== E2 || i2[30] !== L2 ? (P2 = Gr.jsxs("div", {
    className: T2,
    children: [E2, L2, A2]
  }), i2[27] = A2, i2[28] = T2, i2[29] = E2, i2[30] = L2, i2[31] = P2) : P2 = i2[31], P2;
});
function Ex(e2) {
  return e2.avatar;
}
function Lx(e2) {
  return e2.startsWith("hover:") || e2.startsWith("focus:");
}
function Ax(e2) {
  return !e2.startsWith("hover:") && !e2.startsWith("focus:");
}
function Px(e2) {
  return e2.includes("underline");
}
function Ix(e2, t2) {
  let n2 = 0,
    a2 = e2;
  for (; a2 && a2 !== t2;) n2 += a2.offsetTop, a2 = a2.offsetParent;
  return a2 === t2 ? n2 : e2.getBoundingClientRect().top - t2.getBoundingClientRect().top + t2.scrollTop;
}
let Mx = 0;
const Rx = new Set();
function zx(e2) {
  e2 ? Mx += 1 : setTimeout(() => {
    Mx = Math.max(0, Mx - 1), Mx || setTimeout(() => {
      Mx || Rx.forEach(e3 => e3());
    }, 90);
  }, 320);
}
function Dx({
  activeIndex: e2,
  lineCount: t2,
  scrollKey: n2,
  containerRef: a2,
  lineRefs: r2,
  lastUserScrollTime: s2,
  idleReturnDelay: i2 = 1200,
  isSynced: o2 = true
}) {
  const l2 = Qr.useRef(true),
    c2 = Qr.useRef(null),
    u2 = Qr.useRef(null),
    d2 = Qr.useRef(null),
    m2 = Qr.useRef(e2);
  m2.current = e2;
  const f2 = Qr.useRef(t2);
  f2.current = t2, Qr.useLayoutEffect(() => {
    l2.current = true;
  }, [n2]), Qr.useEffect(() => () => {
    var e3;
    null == (e3 = c2.current) || e3.stop(), u2.current && clearTimeout(u2.current), d2.current && clearTimeout(d2.current);
  }, []);
  const h2 = Qr.useCallback((e3 = false, t3) => {
    var n3;
    u2.current && (clearTimeout(u2.current), u2.current = null);
    const s3 = a2.current;
    if (!s3) return;
    if ((null != t3 ? t3 : m2.current) < 0) return null == (n3 = c2.current) || n3.stop(), void (s3.scrollTop = 0);
    let i3 = 0;
    const o3 = () => {
      var n4, s4;
      const d3 = a2.current;
      if (!d3 || 0 === d3.clientHeight) return void (i3++ < 35 && (u2.current = setTimeout(o3, 25)));
      const h3 = Math.max(0, Math.min(null != t3 ? t3 : m2.current, f2.current - 1)),
        p3 = r2.current[h3];
      if (!p3) return void (i3++ < 35 && (u2.current = setTimeout(o3, 25)));
      const g3 = p3.getBoundingClientRect();
      if (0 === g3.height && 0 === g3.width) return void (i3++ < 35 && (u2.current = setTimeout(o3, 25)));
      const v3 = Ix(p3, d3) + (p3.offsetHeight || 44) / 2;
      let x2 = Math.max(0, v3 - 0.33 * d3.clientHeight);
      const y2 = r2.current[f2.current - 1];
      if (y2) {
        const e4 = Ix(y2, d3) + y2.offsetHeight;
        x2 = Math.min(x2, Math.max(0, e4 - 0.85 * d3.clientHeight));
      }
      const b2 = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("no-animations");
      if (l2.current || e3 || b2) return l2.current = false, null == (n4 = c2.current) || n4.stop(), void (d3.scrollTop = x2);
      Math.abs(d3.scrollTop - x2) < 2 || (null == (s4 = c2.current) || s4.stop(), c2.current = Ms(d3.scrollTop, x2, {
        duration: Math.min(0.92, 0.72 + Math.abs(d3.scrollTop - x2) / 1600),
        ease: [0.33, 0, 0.2, 1],
        onUpdate: e4 => {
          d3.scrollTop = e4;
        }
      }));
    };
    o3();
  }, [a2, r2]);
  Qr.useLayoutEffect(() => {
    if (!o2 || t2 <= 0 || e2 < 0) return;
    if (Mx > 0) return;
    Date.now() - s2.current < i2 || h2(l2.current);
  }, [o2, e2, t2, i2, s2, h2]), Qr.useEffect(() => {
    const e3 = () => {
      o2 && (s2.current = 0, h2(false));
    };
    return Rx.add(e3), () => {
      Rx.delete(e3);
    };
  }, [o2, s2, h2]);
  const p2 = Qr.useCallback(() => {
    var e3;
    s2.current = Date.now(), null == (e3 = c2.current) || e3.stop(), d2.current && (clearTimeout(d2.current), d2.current = null), o2 && (d2.current = setTimeout(() => {
      s2.current = 0, h2(false);
    }, i2));
  }, [o2, i2, s2, h2]);
  Qr.useEffect(() => {
    let e3 = a2.current,
      t3 = null;
    const n3 = e4 => {
      e4.addEventListener("wheel", p2, {
        passive: true
      }), e4.addEventListener("touchmove", p2, {
        passive: true
      });
    };
    if (e3) n3(e3);else {
      let r3 = 0;
      t3 = setInterval(() => {
        a2.current ? (e3 = a2.current, n3(e3), t3 && clearInterval(t3)) : ++r3 > 25 && t3 && clearInterval(t3);
      }, 100);
    }
    return () => {
      var n4;
      t3 && clearInterval(t3), e3 && ((n4 = e3).removeEventListener("wheel", p2), n4.removeEventListener("touchmove", p2)), d2.current && (clearTimeout(d2.current), d2.current = null);
    };
  }, [a2, p2]);
  const g2 = Qr.useRef(0),
    v2 = Qr.useRef(0);
  return Qr.useEffect(() => {
    const e3 = () => {
      h2(true);
    };
    window.addEventListener("resize", e3);
    const t3 = a2.current;
    let n3 = null;
    return t3 && "undefined" != typeof ResizeObserver && (g2.current = t3.clientWidth, v2.current = t3.clientHeight, n3 = new ResizeObserver(e4 => {
      for (const t4 of e4) {
        const {
          width: e5,
          height: n4
        } = t4.contentRect;
        (Math.abs(e5 - g2.current) > 2 || Math.abs(n4 - v2.current) > 2) && (g2.current = e5, v2.current = n4, h2(true));
      }
    }), n3.observe(t3)), () => {
      window.removeEventListener("resize", e3), n3 && n3.disconnect();
    };
  }, [a2, h2]), {
    scrollToActive: h2
  };
}
function Fx(e2) {
  const t2 = Kr.c(12),
    {
      open: n2,
      body: a2,
      className: r2
    } = e2;
  let s2, i2;
  t2[0] !== n2 ? (s2 = () => {
    if (n2) return zx(true), Ox;
  }, i2 = [n2], t2[0] = n2, t2[1] = s2, t2[2] = i2) : (s2 = t2[1], i2 = t2[2]), Qr.useEffect(s2, i2);
  const o2 = !n2,
    l2 = n2 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0";
  let c2, u2, d2;
  return t2[3] !== l2 ? (c2 = x("grid transition-[grid-template-rows,opacity] duration-300 ease-out", l2), t2[3] = l2, t2[4] = c2) : c2 = t2[4], t2[5] !== a2 || t2[6] !== r2 ? (u2 = Gr.jsx("div", {
    className: "min-h-0 overflow-hidden",
    children: Gr.jsx("div", {
      className: r2,
      children: a2
    })
  }), t2[5] = a2, t2[6] = r2, t2[7] = u2) : u2 = t2[7], t2[8] !== o2 || t2[9] !== c2 || t2[10] !== u2 ? (d2 = Gr.jsx("div", {
    "aria-hidden": o2,
    className: c2,
    children: u2
  }), t2[8] = o2, t2[9] = c2, t2[10] = u2, t2[11] = d2) : d2 = t2[11], d2;
}
function Ox() {
  return zx(false);
}
const $x = (e2, t2, n2) => {
    if (!e2) return null;
    if (!t2) return Gr.jsx("span", {
      children: e2
    });
    const a2 = e2.trim(),
      r2 = a2.split(/\s+/);
    if (0 === r2.length) return Gr.jsx("span", {
      children: a2
    });
    const s2 = r2.pop() || "",
      i2 = r2.join(" "),
      o2 = s2.match(/^(.*?)([\s,.!?;:"'”)]*)$/),
      l2 = o2 ? o2[1] : s2,
      c2 = o2 ? o2[2] : "";
    return Gr.jsxs("span", {
      children: [i2, i2 ? " " : "", Gr.jsxs("span", {
        className: "whitespace-nowrap",
        children: [l2, Gr.jsx("span", {
          className: x("inline-block text-[0.62em] font-serif font-bold ml-0.5 select-none transition-colors duration-200", "text-white/35"),
          style: {
            verticalAlign: "super"
          },
          children: "\u201D"
        }), c2]
      })]
    });
  },
  Bx = (e2, t2, n2, a2, r2) => {
    if (!e2) return "";
    if (r2) return $x(e2, t2);
    const s2 = e2.split(/(\([^)]{1,200}\)|（[^）]{1,200}）)/g);
    return s2.length <= 1 ? $x(e2, t2) : Gr.jsx("span", {
      children: s2.map((e3, n3) => {
        if (!e3) return null;
        const r3 = e3.startsWith("(") && e3.endsWith(")") || e3.startsWith("\uFF08") && e3.endsWith("\uFF09"),
          i2 = n3 === s2.length - 1 || s2.slice(n3 + 1).every(e4 => !e4),
          o2 = t2 && i2;
        return r3 ? Gr.jsx("span", {
          className: x("font-medium italic text-[0.84em] tracking-wide inline-block", a2 ? "opacity-75" : "opacity-60"),
          children: $x(e3, o2)
        }, n3) : Gr.jsx(Xr.Fragment, {
          children: $x(e3, o2)
        }, n3);
      })
    });
  },
  Ux = e2 => {
    const t2 = Kr.c(3),
      {
        isAnimated: n2
      } = e2;
    let a2, r2;
    return t2[0] === Symbol.for("react.memo_cache_sentinel") ? (a2 = [0, 1, 2], t2[0] = a2) : a2 = t2[0], t2[1] !== n2 ? (r2 = Gr.jsx("span", {
      className: "inline-flex flex-row items-center gap-2.5 py-1.5 select-none",
      children: a2.map(e3 => Gr.jsx(Jr.span, {
        className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-ink shrink-0",
        style: {
          boxShadow: "none",
          filter: "none"
        },
        animate: n2 ? {
          opacity: [0.25, 0.95, 0.25]
        } : {
          opacity: 0.25
        },
        transition: n2 ? {
          duration: 1.1,
          repeat: 1 / 0,
          ease: "easeInOut",
          delay: 0.18 * e3
        } : void 0
      }, e3))
    }), t2[1] = n2, t2[2] = r2) : r2 = t2[2], r2;
  };
function Vx(e2, t2, n2, a2) {
  if (!a2 || n2 < 1.2) return {};
  const r2 = Math.sin(Math.PI * t2) ** 2;
  switch (e2) {
    case "fade":
      return {
        filter: `brightness(${1 + 0.12 * r2})`
      };
    case "blur":
      return {
        filter: `brightness(${1 + 0.08 * r2})`
      };
    case "flip3d":
      return {
        transform: `perspective(400px) rotateX(${3 * -r2}deg)`
      };
    case "wave":
    default:
      return {
        filter: `brightness(${1 + 0.1 * r2})`
      };
    case "float":
      return {
        filter: `brightness(${1 + 0.06 * r2})`
      };
    case "drift":
      return {
        transform: `skewX(${1.5 * -r2}deg)`
      };
    case "bounce":
      return {
        transform: `scale(${1 + 0.045 * r2})`
      };
    case "zoom":
      return {
        transform: `scale(${1 + 0.055 * r2})`
      };
  }
}
const Qx = Qr.memo(function (e2) {
  const t2 = Kr.c(18),
    {
      wordsList: n2,
      activeTime: a2,
      animStyle: r2,
      isBackground: s2,
      isBackgroundLine: i2,
      isEntirelyParentheses: o2,
      isAnnotated: l2,
      isPanel: c2,
      overrideRefText: u2,
      rawText: d2,
      isCurrentLine: m2
    } = e2,
    f2 = void 0 !== s2 && s2,
    h2 = void 0 !== i2 && i2,
    p2 = void 0 !== o2 && o2,
    g2 = void 0 !== l2 && l2,
    v2 = void 0 !== c2 && c2,
    y2 = null != u2 ? u2 : void 0 === d2 ? "" : d2;
  let b2;
  t2[0] !== y2 || t2[1] !== n2 ? (b2 = Jn(n2, y2), t2[0] = y2, t2[1] = n2, t2[2] = b2) : b2 = t2[2];
  const w2 = b2,
    k2 = null != m2 ? m2 : a2 >= 0 && a2 !== 1 / 0;
  let j2, S2, N2;
  if (t2[3] !== a2 || t2[4] !== r2 || t2[5] !== k2 || t2[6] !== f2 || t2[7] !== h2 || t2[8] !== p2 || t2[9] !== v2 || t2[10] !== w2 || t2[11] !== n2) {
    const e3 = [];
    let s3 = false;
    for (const t3 of n2) {
      const n3 = t3.text.trim();
      (n3.startsWith("(") || n3.startsWith("\uFF08")) && (s3 = true), e3.push(s3), /[)）][.,!?;:—"']*$/.test(n3) && (s3 = false);
    }
    j2 = n2.map((t3, n3) => {
      var s4, i3, o3, l3, c3;
      const u3 = e3[n3] || f2 || h2,
        {
          isPast: d3,
          isCurrent: m3,
          progress: g3
        } = Zn(a2, t3.time, t3.duration),
        y3 = u3 ? "hsl(var(--lyrics-ink) / 0.88)" : "hsl(var(--lyrics-ink))",
        b3 = u3 ? "hsl(var(--lyrics-ink) / 0.45)" : "hsl(var(--lyrics-ink) / 0.55)",
        j3 = !u3 || f2 || p2 ? void 0 : "font-medium italic text-[0.84em] tracking-wide";
      if (!k2) return Gr.jsxs(Xr.Fragment, {
        children: [Gr.jsx("span", {
          style: {
            color: y3,
            whiteSpace: "pre"
          },
          className: x("relative inline-block", j3),
          children: t3.text
        }), (null != (s4 = t3.has_space_after) ? s4 : w2[n3]) ? " " : ""]
      }, n3);
      if ("default" === r2 || !r2) {
        if (d3) return Gr.jsxs(Xr.Fragment, {
          children: [Gr.jsx("span", {
            style: {
              color: y3,
              whiteSpace: "pre"
            },
            className: x("relative inline-block", j3),
            children: t3.text
          }), (null != (i3 = t3.has_space_after) ? i3 : w2[n3]) ? " " : ""]
        }, n3);
        if (!m3) return Gr.jsxs(Xr.Fragment, {
          children: [Gr.jsx("span", {
            style: {
              color: b3,
              whiteSpace: "pre"
            },
            className: x("relative inline-block", j3),
            children: t3.text
          }), (null != (o3 = t3.has_space_after) ? o3 : w2[n3]) ? " " : ""]
        }, n3);
        const e4 = Math.min(100, Math.max(0, 100 * g3));
        return Gr.jsxs(Xr.Fragment, {
          children: [Gr.jsxs("span", {
            className: x("lyrics-word-hold relative inline-block", j3),
            "data-lyric-hold": t3.duration >= 1.2 || void 0,
            style: {
              whiteSpace: "pre",
              transformOrigin: "center bottom",
              ...Vx("default", g3, t3.duration, m3)
            },
            children: [Gr.jsx("span", {
              style: {
                color: b3,
                whiteSpace: "pre"
              },
              children: t3.text
            }), Gr.jsx("span", {
              "aria-hidden": true,
              className: "absolute inset-0 select-none pointer-events-none",
              style: {
                color: y3,
                whiteSpace: "pre",
                maskImage: `linear-gradient(to right, black ${e4 - 7}%, transparent ${e4 + 7}%)`,
                WebkitMaskImage: `linear-gradient(to right, black ${e4 - 7}%, transparent ${e4 + 7}%)`
              },
              children: t3.text
            })]
          }), (null != (l3 = t3.has_space_after) ? l3 : w2[n3]) ? " " : ""]
        }, n3);
      }
      const S3 = function (e4, t4, n4, a3, r3, s5, i4 = true) {
        if (!i4) return {
          display: "inline",
          opacity: r3 ? 0.88 : 1
        };
        switch (e4) {
          case "fade":
            return {
              opacity: n4 ? r3 ? 0.88 : 1 : a3 ? r3 ? 0.35 + 0.65 * t4 : 0.5 + 0.5 * t4 : s5 ? r3 ? 0.35 : 0.55 : r3 ? 0.4 : 0.52,
              transition: "opacity 220ms cubic-bezier(0.16, 1, 0.3, 1)",
              display: "inline"
            };
          case "blur":
            return {
              opacity: n4 ? r3 ? 0.88 : 1 : a3 ? r3 ? 0.35 + 0.65 * t4 : 0.5 + 0.5 * t4 : s5 ? r3 ? 0.35 : 0.55 : r3 ? 0.4 : 0.52,
              filter: n4 ? "none" : a3 ? t4 > 0.95 ? "none" : `blur(${3.5 * (1 - t4)}px)` : "blur(3px)",
              transition: "filter 120ms cubic-bezier(0.16, 1, 0.3, 1), opacity 90ms cubic-bezier(0.16, 1, 0.3, 1)",
              display: "inline-block",
              verticalAlign: "bottom"
            };
          case "flip3d":
            return {
              opacity: n4 ? r3 ? 0.88 : 1 : a3 ? r3 ? 0.35 + 0.65 * t4 : 0.5 + 0.5 * t4 : r3 ? 0.4 : 0.52,
              transform: n4 ? "perspective(400px) rotateX(0deg)" : a3 ? `perspective(400px) rotateX(${45 * (1 - t4)}deg)` : "perspective(400px) rotateX(45deg)",
              transformOrigin: "center bottom",
              transition: "transform 240ms cubic-bezier(0.16, 1, 0.3, 1), opacity 120ms ease-out",
              display: "inline-block",
              verticalAlign: "bottom"
            };
          case "bounce":
            return {
              opacity: n4 ? r3 ? 0.88 : 1 : a3 ? r3 ? 0.35 + 0.65 * t4 : 0.5 + 0.5 * t4 : r3 ? 0.4 : 0.52,
              transform: n4 ? "scale(1) translateY(0px)" : a3 ? `scale(${0.93 + 0.07 * t4}) translateY(${-2.5 * (1 - t4)}px)` : "scale(0.93) translateY(0px)",
              transformOrigin: "center bottom",
              transition: "transform 200ms cubic-bezier(0.34, 1.45, 0.64, 1), opacity 90ms ease-out",
              display: "inline-block",
              verticalAlign: "bottom"
            };
          case "wave":
            {
              const e5 = a3 ? -3.2 * Math.sin(t4 * Math.PI) : 0;
              return {
                opacity: n4 ? r3 ? 0.88 : 1 : a3 ? r3 ? 0.35 + 0.65 * t4 : 0.5 + 0.5 * t4 : r3 ? 0.4 : 0.52,
                transform: n4 ? "translateY(0px)" : a3 ? `translateY(${e5.toFixed(1)}px)` : "translateY(0px)",
                transition: "transform 160ms cubic-bezier(0.16, 1, 0.3, 1), opacity 90ms ease-out",
                display: "inline-block",
                verticalAlign: "bottom"
              };
            }
          case "float":
            return {
              opacity: n4 ? r3 ? 0.88 : 1 : a3 ? r3 ? 0.35 + 0.65 * t4 : 0.5 + 0.5 * t4 : s5 ? r3 ? 0.35 : 0.55 : r3 ? 0.4 : 0.52,
              transform: `translateY(${(n4 ? 0 : a3 ? 4.5 * (1 - t4) : 4.5).toFixed(1)}px)`,
              transition: "transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 100ms ease-out",
              display: "inline-block",
              verticalAlign: "bottom"
            };
          case "drift":
            return {
              opacity: n4 ? r3 ? 0.88 : 1 : a3 ? r3 ? 0.35 + 0.65 * t4 : 0.5 + 0.5 * t4 : s5 ? r3 ? 0.35 : 0.55 : r3 ? 0.4 : 0.52,
              transform: `skewX(${(n4 ? 0 : a3 ? -6 * (1 - t4) : -6).toFixed(1)}deg) scale(${n4 ? 1 : a3 ? 0.95 + 0.05 * t4 : 0.95})`,
              transformOrigin: "left bottom",
              transition: "transform 180ms cubic-bezier(0.16, 1, 0.3, 1), opacity 80ms ease-out",
              display: "inline-block",
              verticalAlign: "bottom"
            };
          case "zoom":
            return {
              opacity: n4 ? r3 ? 0.88 : 1 : a3 ? r3 ? 0.35 + 0.65 * t4 : 0.5 + 0.5 * t4 : s5 ? r3 ? 0.35 : 0.55 : r3 ? 0.4 : 0.52,
              transform: `scale(${(n4 ? 1 : a3 ? 0.88 + 0.12 * t4 : 0.88).toFixed(3)})`,
              transformOrigin: "center bottom",
              transition: "transform 180ms cubic-bezier(0.16, 1, 0.3, 1), opacity 90ms ease-out",
              display: "inline-block",
              verticalAlign: "bottom"
            };
          default:
            return n4 || a3 ? {
              display: "inline"
            } : {
              display: "inline",
              opacity: s5 ? r3 ? 0.35 : 0.55 : r3 ? 0.4 : 0.52
            };
        }
      }(r2, g3, d3, m3, u3, v2, k2);
      return Gr.jsxs(Xr.Fragment, {
        children: [Gr.jsx("span", {
          style: {
            ...S3,
            whiteSpace: "pre"
          },
          className: !u3 || f2 || p2 ? "lyrics-word-motion" : "lyrics-word-motion font-medium italic text-[0.84em] tracking-wide",
          children: Gr.jsx("span", {
            className: "lyrics-word-hold inline-block",
            "data-lyric-hold": m3 && t3.duration >= 1.2 || void 0,
            style: {
              transformOrigin: "center bottom",
              ...Vx(r2, g3, t3.duration, m3)
            },
            children: t3.text
          })
        }), (null != (c3 = t3.has_space_after) ? c3 : w2[n3]) ? " " : ""]
      }, n3);
    }), t2[3] = a2, t2[4] = r2, t2[5] = k2, t2[6] = f2, t2[7] = h2, t2[8] = p2, t2[9] = v2, t2[10] = w2, t2[11] = n2, t2[12] = j2;
  } else j2 = t2[12];
  return t2[13] !== g2 ? (S2 = g2 && Gr.jsx("span", {
    className: "inline-block text-[0.62em] font-serif font-bold ml-1 select-none text-ink/35",
    style: {
      verticalAlign: "super"
    },
    children: "\u201D"
  }), t2[13] = g2, t2[14] = S2) : S2 = t2[14], t2[15] !== j2 || t2[16] !== S2 ? (N2 = Gr.jsxs("span", {
    children: [j2, S2]
  }), t2[15] = j2, t2[16] = S2, t2[17] = N2) : N2 = t2[17], N2;
});
function Kx() {
  const e2 = Kr.c(6),
    [t2, n2] = Qr.useState(false),
    a2 = Qr.useRef(null);
  let r2;
  e2[0] === Symbol.for("react.memo_cache_sentinel") ? (r2 = () => {
    a2.current && clearTimeout(a2.current), a2.current = setTimeout(() => {
      n2(true);
    }, 300);
  }, e2[0] = r2) : r2 = e2[0];
  const s2 = r2;
  let i2;
  e2[1] === Symbol.for("react.memo_cache_sentinel") ? (i2 = () => {
    a2.current && (clearTimeout(a2.current), a2.current = null), n2(false);
  }, e2[1] = i2) : i2 = e2[1];
  const o2 = i2;
  let l2, c2, u2;
  return e2[2] === Symbol.for("react.memo_cache_sentinel") ? (l2 = () => () => {
    a2.current && clearTimeout(a2.current);
  }, c2 = [], e2[2] = l2, e2[3] = c2) : (l2 = e2[2], c2 = e2[3]), Qr.useEffect(l2, c2), e2[4] !== t2 ? (u2 = {
    isHovered: t2,
    handleMouseEnter: s2,
    handleMouseLeave: o2
  }, e2[4] = t2, e2[5] = u2) : u2 = e2[5], u2;
}
const Gx = Qr.memo(function (e2) {
    var t2, n2, a2, r2, s2, i2, o2, l2, c2, u2, d2, m2, f2, h2, p2, g2, v2, y2, b2, w2, k2, j2, S2, N2, _2, C2, T2, E2, L2, A2, P2, I2, M2, R2, z2, D2, F2, O2, $2, B2, U2, q2, H2, W2, V2, Q2, K2, G2, X2, Y2, J2, Z2, ee2, te2, ne2, ae2, re2, se2, ie2, oe2, ce2, ue2, de2;
    const me2 = Kr.c(78),
      fe2 = null != (n2 = null == (t2 = e2.data) ? void 0 : t2.line) ? n2 : e2.line,
      he2 = null != (r2 = null == (a2 = e2.data) ? void 0 : a2.nextLine) ? r2 : e2.nextLine,
      pe2 = null != (o2 = null != (i2 = null == (s2 = e2.data) ? void 0 : s2.index) ? i2 : e2.index) ? o2 : 0,
      ge2 = null != (u2 = null != (c2 = null == (l2 = e2.state) ? void 0 : l2.isCurrent) ? c2 : e2.isCurrent) && u2,
      ve2 = null != (f2 = null != (m2 = null == (d2 = e2.data) ? void 0 : d2.isPlaceholder) ? m2 : e2.isPlaceholder) && f2,
      xe2 = null != (p2 = null == (h2 = e2.state) ? void 0 : h2.smoothTime) ? p2 : e2.smoothTime,
      ye2 = null != (y2 = null != (v2 = null == (g2 = e2.state) ? void 0 : g2.isPlaying) ? v2 : e2.isPlaying) && y2,
      be2 = null != (k2 = null != (w2 = null == (b2 = e2.state) ? void 0 : b2.effectiveSyncOffset) ? w2 : e2.effectiveSyncOffset) ? k2 : 0,
      we2 = null != (N2 = null != (S2 = null == (j2 = e2.state) ? void 0 : j2.effectiveIsSynced) ? S2 : e2.effectiveIsSynced) && N2,
      ke2 = null != (T2 = null != (C2 = null == (_2 = e2.state) ? void 0 : _2.syncMode) ? C2 : e2.syncMode) ? T2 : "lines",
      je2 = null != (A2 = null != (L2 = null == (E2 = e2.styleConfig) ? void 0 : E2.animStyle) ? L2 : e2.animStyle) ? A2 : "default",
      Se2 = null != (M2 = null != (I2 = null == (P2 = e2.styleConfig) ? void 0 : P2.textStyle) ? I2 : e2.textStyle) ? M2 : "normal",
      Ne2 = null != (D2 = null != (z2 = null == (R2 = e2.styleConfig) ? void 0 : R2.fontSize) ? z2 : e2.fontSize) ? D2 : "md",
      _e2 = void 0 !== (null == (F2 = e2.data) ? void 0 : F2.annotation) ? null != (O2 = e2.data.annotation) ? O2 : void 0 : e2.annotation,
      Ce2 = null != (B2 = null == ($2 = e2.ops) ? void 0 : $2.onLineClick) ? B2 : e2.onLineClick,
      Te2 = null != (H2 = null != (q2 = null == (U2 = e2.data) ? void 0 : U2.displayIndex) ? q2 : e2.displayIndex) ? H2 : 0,
      Ee2 = null != (Q2 = null != (V2 = null == (W2 = e2.styleConfig) ? void 0 : W2.isPanel) ? V2 : e2.isPanel) && Q2,
      Le2 = null != (X2 = null != (G2 = null == (K2 = e2.styleConfig) ? void 0 : K2.wide) ? G2 : e2.wide) && X2;
    let Ae2;
    me2[0] !== (null == (Y2 = e2.data) ? void 0 : Y2.effectiveLyricsLines) || me2[1] !== e2.effectiveLyricsLines ? (Ae2 = null != (ee2 = null != (Z2 = null == (J2 = e2.data) ? void 0 : J2.effectiveLyricsLines) ? Z2 : e2.effectiveLyricsLines) ? ee2 : [], me2[0] = null == (te2 = e2.data) ? void 0 : te2.effectiveLyricsLines, me2[1] = e2.effectiveLyricsLines, me2[2] = Ae2) : Ae2 = me2[2];
    const Pe2 = Ae2,
      {
        isHovered: Ie2,
        handleMouseEnter: Me2,
        handleMouseLeave: Re2
      } = Kx(),
      ze2 = null != (ne2 = null == fe2 ? void 0 : fe2.text) ? ne2 : "",
      De2 = ze2.trim(),
      Fe2 = "words" === ke2,
      Oe2 = Boolean((null == (ae2 = null == fe2 ? void 0 : fe2.words) ? void 0 : ae2.length) || (null == (re2 = null == fe2 ? void 0 : fe2.background_words) ? void 0 : re2.length)),
      $e2 = Fe2 && Boolean(De2) && we2;
    let Be2;
    me2[3] !== (null == fe2 ? void 0 : fe2.background_text) ? (Be2 = null == (se2 = null == fe2 ? void 0 : fe2.background_text) ? void 0 : se2.trim(), me2[3] = null == fe2 ? void 0 : fe2.background_text, me2[4] = Be2) : Be2 = me2[4];
    const Ue2 = Boolean(Be2),
      qe2 = ge2 && ye2 && (Oe2 || $e2 || Ue2);
    let He2;
    me2[5] !== ge2 || me2[6] !== ye2 || me2[7] !== qe2 || me2[8] !== xe2 ? (He2 = {
      isCurrent: ge2,
      isPlaying: ye2,
      smoothTime: xe2,
      needsAnimation: qe2
    }, me2[5] = ge2, me2[6] = ye2, me2[7] = qe2, me2[8] = xe2, me2[9] = He2) : He2 = me2[9];
    const We2 = function (e3) {
      const t3 = Kr.c(9),
        {
          isCurrent: n3,
          isPlaying: a3,
          smoothTime: r3,
          needsAnimation: s3
        } = e3;
      let i3;
      t3[0] !== n3 || t3[1] !== r3 ? (i3 = () => n3 ? null != r3 ? r3 : qx.getSmoothTime() : 0, t3[0] = n3, t3[1] = r3, t3[2] = i3) : i3 = t3[2];
      const [o3, l3] = Qr.useState(i3);
      let c3, u3;
      return t3[3] !== n3 || t3[4] !== a3 || t3[5] !== s3 || t3[6] !== r3 ? (c3 = () => {
        if (n3) {
          if (void 0 === r3) return l3(qx.getSmoothTime()), s3 && a3 ? qx.subscribeThrottled(e4 => {
            l3(e4);
          }, 25) : le.subscribe(e4 => {
            l3(e4.currentTime);
          });
          l3(r3);
        } else l3(0);
      }, u3 = [n3, a3, r3, s3], t3[3] = n3, t3[4] = a3, t3[5] = s3, t3[6] = r3, t3[7] = c3, t3[8] = u3) : (c3 = t3[7], u3 = t3[8]), Qr.useEffect(c3, u3), o3;
    }(He2);
    let Ve2;
    me2[10] !== ve2 || me2[11] !== ze2 ? (Ve2 = ve2 || ea(ze2), me2[10] = ve2, me2[11] = ze2, me2[12] = Ve2) : Ve2 = me2[12];
    const Qe2 = Ve2,
      Ke2 = De2.length > 0 && 0 === De2.replace(/\s*(\([^)]{1,120}\)|（[^）]{1,120}）)\s*/g, "").length,
      Ge2 = true === (null == fe2 ? void 0 : fe2.is_background) || "v1000" === (null == fe2 ? void 0 : fe2.agent) || Ke2,
      Xe2 = "v2" === (null == fe2 ? void 0 : fe2.agent) ? "text-right" : "text-left",
      Ye2 = Boolean(_e2);
    let Je2;
    me2[13] !== we2 || me2[14] !== pe2 || me2[15] !== fe2 || me2[16] !== Ce2 ? (Je2 = () => {
      we2 && "number" == typeof (null == fe2 ? void 0 : fe2.timestamp) && fe2.timestamp >= 0 && (null == Ce2 || Ce2(pe2));
    }, me2[13] = we2, me2[14] = pe2, me2[15] = fe2, me2[16] = Ce2, me2[17] = Je2) : Je2 = me2[17];
    const Ze2 = Je2,
      et2 = pe2 - Te2,
      tt2 = Math.abs(et2),
      nt2 = Ee2 ? na[Ne2] : aa[Ne2];
    let at2 = 1;
    we2 ? ge2 || (at2 = Ee2 ? 1 === tt2 ? 0.48 : Math.max(0.2, 0.48 - 0.12 * (tt2 - 1)) : et2 < 0 ? -1 === et2 ? 0.42 : Math.max(0.16, 0.3 - 0.07 * (tt2 - 2)) : 1 === et2 ? 0.58 : 2 === et2 ? 0.4 : Math.max(0.18, 0.28 - 0.05 * (et2 - 3))) : at2 = Ee2 ? 0.9 : 0.85;
    const rt2 = ge2 ? Ge2 ? 0.88 : 1 : Ge2 ? 0.8 * at2 : at2;
    let st2,
      it2 = 1,
      ot2 = null,
      lt2 = "normal",
      ct2 = 0;
    "scale" === Se2 ? it2 = Ee2 ? 1 : ge2 ? 1.08 : Math.max(0.74, 1 - 0.07 * tt2) : "blur" === Se2 ? (it2 = Ee2 ? 1 : ge2 ? 1.05 : Math.max(0.82, 1 - 0.05 * tt2), ot2 = ge2 ? "none" : `blur(${Ee2 ? 1.5 : Math.min(2.5 * tt2, 7)}px)`) : "cinematic" === Se2 ? (lt2 = "0.02em", it2 = Ee2 ? 1 : ge2 ? 1.04 : 0.95) : "shift" === Se2 && (ct2 = ge2 ? "v2" === (null == fe2 ? void 0 : fe2.agent) ? -14 : 14 : 0, it2 = Ee2 ? 1 : ge2 ? 1.04 : 0.96);
    e: {
      if (null == (ie2 = null == fe2 ? void 0 : fe2.words) ? void 0 : ie2.length) {
        st2 = fe2.words;
        break e;
      }
      if (!ze2.trim() || !we2) {
        st2 = null;
        break e;
      }
      const e3 = "number" == typeof fe2.timestamp && fe2.timestamp >= 0 ? fe2.timestamp : 0,
        t3 = null != he2 ? he2 : Pe2[pe2 + 1],
        n3 = t3 && "number" == typeof t3.timestamp && t3.timestamp > e3 ? t3.timestamp : e3 + Math.max(2.5, 0.08 * ze2.length),
        a3 = Math.max(0.4, Math.min(n3 - e3, 8));
      let r3;
      me2[18] !== a3 || me2[19] !== e3 || me2[20] !== ze2 ? (r3 = ta(ze2, e3, a3), me2[18] = a3, me2[19] = e3, me2[20] = ze2, me2[21] = r3) : r3 = me2[21], st2 = r3;
    }
    const ut2 = st2;
    let dt2;
    if (me2[22] !== Pe2 || me2[23] !== pe2 || me2[24] !== fe2 || me2[25] !== he2 || me2[26] !== ut2) {
      e: {
        if (null == (oe2 = null == fe2 ? void 0 : fe2.background_words) ? void 0 : oe2.length) {
          dt2 = fe2.background_words;
          break e;
        }
        const e3 = null == (ce2 = null == fe2 ? void 0 : fe2.background_text) ? void 0 : ce2.trim();
        if (!e3) {
          dt2 = null;
          break e;
        }
        const t3 = "number" == typeof fe2.timestamp && fe2.timestamp >= 0 ? fe2.timestamp : 0,
          n3 = null != he2 ? he2 : Pe2[pe2 + 1],
          a3 = n3 && "number" == typeof n3.timestamp && n3.timestamp > t3 ? n3.timestamp : t3 + Math.max(3, 0.45 * ((null == ut2 ? void 0 : ut2.length) || 4));
        let r3 = t3 + 0.45 * Math.max(0.6, a3 - t3);
        if (null == ut2 ? void 0 : ut2.length) {
          const e4 = ut2[ut2.length - 1];
          e4 && "number" == typeof e4.time && (r3 = Math.max(t3, Math.min(a3 - 0.4, e4.time + 0.4 * (e4.duration || 0.2))));
        }
        const s3 = Math.max(0.4, a3 - r3);
        dt2 = ta(e3, r3, s3);
      }
      me2[22] = Pe2, me2[23] = pe2, me2[24] = fe2, me2[25] = he2, me2[26] = ut2, me2[27] = dt2;
    } else dt2 = me2[27];
    const mt2 = dt2;
    null == fe2 || fe2.background_text, null == fe2 || fe2.background_words;
    const ft2 = !!(null == fe2 ? void 0 : fe2.background_text) && !(!(null == (ht2 = fe2.background_words) ? void 0 : ht2.length) || !(null == ut2 ? void 0 : ut2.length)) && fe2.background_words[0].time < (null != (gt2 = null == (pt2 = ut2[0]) ? void 0 : pt2.time) ? gt2 : 0) - 0.2;
    var ht2, pt2, gt2;
    let vt2;
    null == fe2 || fe2.background_text;
    e: {
      if (!(null == fe2 ? void 0 : fe2.background_text)) {
        vt2 = false;
        break e;
      }
      const e3 = fe2.background_text.trim().toLowerCase(),
        t3 = e3.replace(/^[(\s（]+|[)\s）]+$/g, "").trim(),
        n3 = ze2.toLowerCase();
      vt2 = n3.includes(e3) || t3.length > 0 && n3.includes(t3);
    }
    const xt2 = vt2,
      yt2 = !xt2 && ft2 && null != (ue2 = null == fe2 ? void 0 : fe2.background_text) ? ue2 : null,
      bt2 = xt2 || ft2 ? null : null != (de2 = null == fe2 ? void 0 : fe2.background_text) ? de2 : null,
      wt2 = !xt2 && ft2 ? mt2 : null,
      kt2 = xt2 || ft2 ? null : mt2,
      jt2 = ut2,
      St2 = Fe2 && Boolean(null == ut2 ? void 0 : ut2.length),
      Nt2 = Fe2 && Boolean(null == wt2 ? void 0 : wt2.length),
      _t2 = St2 && Boolean(null == jt2 ? void 0 : jt2.length),
      Ct2 = Fe2 && Boolean(null == kt2 ? void 0 : kt2.length),
      Tt2 = "number" == typeof (null == fe2 ? void 0 : fe2.timestamp) && fe2.timestamp >= 0 ? fe2.timestamp : 0,
      Et2 = null != he2 ? he2 : Pe2[pe2 + 1],
      Lt2 = Et2 && "number" == typeof Et2.timestamp && Et2.timestamp > Tt2 ? Et2.timestamp : Tt2 + Math.max(2.5, 0.08 * ze2.length),
      At2 = Math.max(0.4, Math.min(Lt2 - Tt2, 8));
    let Pt2;
    e: if (bt2) {
      if (kt2 && kt2.length > 0) {
        const e3 = kt2[0];
        if (e3 && "number" == typeof e3.time && e3.time > Tt2) {
          Pt2 = e3.time;
          break e;
        }
      }
      Pt2 = Tt2 + 0.65 * At2;
    } else Pt2 = 1 / 0;
    const It2 = Pt2;
    let Mt2;
    e: if (yt2) {
      if (wt2 && wt2.length > 0) {
        const e3 = wt2[wt2.length - 1];
        if (e3 && "number" == typeof e3.time) {
          Mt2 = e3.time + (e3.duration || 0.3);
          break e;
        }
      }
      Mt2 = Tt2 + 0.32 * At2;
    } else Mt2 = -1 / 0;
    const Rt2 = Mt2,
      zt2 = We2 + be2,
      Dt2 = ge2 && Boolean(bt2) && zt2 >= It2,
      Ft2 = ge2 && Boolean(yt2) && zt2 < Rt2,
      Ot2 = ge2 && (!bt2 || !Dt2) && (!yt2 || !Ft2);
    let $t2 = 0,
      Bt2 = 0,
      Ut2 = ct2,
      qt2 = 0,
      Ht2 = 0,
      Wt2 = 0,
      Vt2 = ot2 || "none",
      Qt2 = 1;
    const Kt2 = lt2;
    ot2 || ("blur" === je2 ? (Vt2 = ge2 ? "blur(0px)" : 1 === tt2 ? Ee2 ? "blur(1.6px)" : "blur(2.6px)" : Ee2 ? "blur(3.2px)" : "blur(5.5px)", $t2 = ge2 ? 0 : 1 === et2 ? 5 : -4) : "default" === je2 || "fade" === je2 ? Vt2 = "none" : "float" === je2 ? Vt2 = ge2 ? "none" : tt2 >= 1 ? Ee2 ? "blur(1px)" : "blur(1.5px)" : "none" : "zoom" === je2 && (Vt2 = ge2 ? "none" : tt2 >= 2 ? Ee2 ? "blur(1.2px)" : "blur(2.2px)" : "none")), "flip3d" === je2 ? (qt2 = ge2 ? 0 : 1 === et2 ? 10 : -1 === et2 ? -8 : et2 > 0 ? 16 : -14, Bt2 = ge2 ? 8 : -4, $t2 = ge2 ? 0 : 1 === et2 ? 3 : -3, Qt2 = ge2 ? Ee2 ? 1.018 : 1.03 : 0.98) : "bounce" === je2 ? (Qt2 = ge2 ? Ee2 ? 1.022 : 1.036 : 1 === tt2 ? 0.985 : 0.965, $t2 = ge2 ? 0 : 1 === et2 ? 3 : -3) : "fade" === je2 ? (Qt2 = 1, $t2 = 0) : "wave" === je2 ? ($t2 = ge2 ? 0 : 1 === et2 ? 3 : -1 === et2 ? -3 : et2 > 0 ? 6 : -5, Ht2 = ge2 ? 0 : 1 === et2 ? 0.5 : -1 === et2 ? -0.5 : 0, Qt2 = ge2 ? Ee2 ? 1.018 : 1.028 : 0.985) : "float" === je2 ? ($t2 = ge2 ? -1 : 1 === et2 ? 4 : -1 === et2 ? -4 : et2 > 0 ? 7 : -6, Qt2 = ge2 ? Ee2 ? 1.02 : 1.032 : 0.985) : "drift" === je2 ? (Wt2 = ge2 ? 0 : 1 === et2 ? -2 : -1 === et2 ? 1.5 : 0, Ut2 = ct2 + (ge2 ? 0 : 1 === et2 ? 3 : -1 === et2 ? -2 : 0), $t2 = ge2 ? 0 : 1 === et2 ? 3 : -3, Qt2 = ge2 ? Ee2 ? 1.018 : 1.028 : 0.985) : "zoom" === je2 ? (Qt2 = ge2 ? Ee2 ? 1.025 : 1.042 : 1 === tt2 ? 0.97 : Math.max(0.92, 1 - 0.02 * tt2), $t2 = ge2 ? 0 : 1 === et2 ? 3 : -3) : "blur" === je2 ? (Qt2 = ge2 ? Ee2 ? 1.02 : 1.032 : 0.98, $t2 = ge2 ? 0 : 1 === et2 ? 3 : -3) : "default" === je2 && (Qt2 = 1, Bt2 = 0, qt2 = 0, Ht2 = 0, Wt2 = 0, $t2 = 0);
    const Gt2 = "scale" === Se2 || "blur" === Se2 ? it2 : Qt2 * it2;
    let Xt2;
    me2[28] !== zt2 || me2[29] !== Xe2 || me2[30] !== je2 || me2[31] !== _e2 || me2[32] !== et2 || me2[33] !== we2 || me2[34] !== yt2 || me2[35] !== wt2 || me2[36] !== jt2 || me2[37] !== bt2 || me2[38] !== kt2 || me2[39] !== pe2 || me2[40] !== Ye2 || me2[41] !== Ge2 || me2[42] !== ge2 || me2[43] !== Ke2 || me2[44] !== Ie2 || me2[45] !== Ft2 || me2[46] !== Qe2 || me2[47] !== Ot2 || me2[48] !== Ee2 || me2[49] !== ye2 || me2[50] !== Dt2 || me2[51] !== fe2 || me2[52] !== ze2 || me2[53] !== Nt2 || me2[54] !== _t2 || me2[55] !== Ct2 ? (Xt2 = Qe2 ? Gr.jsx("div", {
      className: x("flex items-center min-h-[1.38em]", "text-right" === Xe2 ? "justify-end" : "justify-start"),
      children: Gr.jsx(Ux, {
        isAnimated: ge2 && ye2
      })
    }) : Gr.jsxs("div", {
      className: x("flex flex-col", "text-right" === Xe2 ? "items-end" : "items-start"),
      children: [yt2 && Gr.jsx("div", {
        className: x("leading-vocal-container text-[0.76em] leading-relaxed font-medium italic tracking-wide mb-1 transition-colors duration-200 select-none", ge2 ? Nt2 ? "text-ink/95 font-medium" : Ft2 ? "text-ink font-semibold" : "text-ink/50" : "text-ink/70"),
        children: ge2 && we2 && Nt2 && (null == wt2 ? void 0 : wt2.length) ? Gr.jsx(Qx, {
          wordsList: wt2,
          activeTime: zt2,
          animStyle: je2,
          isBackground: true,
          overrideRefText: yt2,
          isPanel: Ee2,
          isCurrentLine: ge2
        }) : yt2
      }), Gr.jsx("div", {
        className: "relative inline-block",
        children: _t2 && jt2 ? Gr.jsx("span", {
          children: Gr.jsx(Qx, {
            wordsList: jt2,
            activeTime: ge2 ? zt2 : et2 < 0 ? 1 / 0 : -1,
            animStyle: je2,
            isBackgroundLine: Ge2,
            isEntirelyParentheses: Ke2,
            isAnnotated: Ye2,
            isPanel: Ee2,
            rawText: ze2,
            lineIndex: pe2,
            isCurrentLine: ge2
          })
        }) : Gr.jsx("span", {
          className: x("inline-block transition-colors duration-200", Ge2 ? "font-medium italic text-[0.88em] tracking-wide opacity-75" : ge2 ? Ot2 ? "text-ink font-semibold" : "text-ink/75 font-semibold" : "font-semibold"),
          children: Bx(ze2, Ye2, 0, ge2, Ge2)
        })
      }), bt2 && Gr.jsx("div", {
        className: x("background-vocal-container text-[0.76em] leading-relaxed font-medium italic tracking-wide mt-1 transition-colors duration-200 select-none", ge2 ? Ct2 ? "text-ink/95 font-medium" : Dt2 ? "text-ink font-semibold" : "text-ink/45" : "text-ink/70"),
        children: ge2 && we2 && Ct2 && (null == kt2 ? void 0 : kt2.length) ? Gr.jsx(Qx, {
          wordsList: kt2,
          activeTime: zt2,
          animStyle: je2,
          isBackground: true,
          overrideRefText: bt2,
          isPanel: Ee2,
          isCurrentLine: ge2
        }) : bt2
      }), (null == fe2 ? void 0 : fe2.translation) && Gr.jsx("div", {
        className: "mt-1 sm:mt-2 opacity-40 font-medium text-[0.75em]",
        children: fe2.translation
      }), (null == _e2 ? void 0 : _e2.body) && Gr.jsx(Fx, {
        open: Ie2,
        body: _e2.body,
        className: x("font-normal italic leading-relaxed whitespace-pre-line border-l border-ink/15 pl-2.5 select-text mt-1.5", Ee2 ? "text-[0.55em] text-ink/45 max-w-[90%]" : "text-xs sm:text-sm text-ink/55 max-w-[65%]")
      })]
    }), me2[28] = zt2, me2[29] = Xe2, me2[30] = je2, me2[31] = _e2, me2[32] = et2, me2[33] = we2, me2[34] = yt2, me2[35] = wt2, me2[36] = jt2, me2[37] = bt2, me2[38] = kt2, me2[39] = pe2, me2[40] = Ye2, me2[41] = Ge2, me2[42] = ge2, me2[43] = Ke2, me2[44] = Ie2, me2[45] = Ft2, me2[46] = Qe2, me2[47] = Ot2, me2[48] = Ee2, me2[49] = ye2, me2[50] = Dt2, me2[51] = fe2, me2[52] = ze2, me2[53] = Nt2, me2[54] = _t2, me2[55] = Ct2, me2[56] = Xt2) : Xt2 = me2[56];
    const Yt2 = Xt2,
      Jt2 = Ee2 ? "px-3" : Le2 ? "px-4 sm:px-8 lg:px-12" : "px-3 sm:px-5 lg:px-6 pr-8 sm:pr-10 lg:pr-14",
      Zt2 = ge2 ? nt2.current : nt2.other,
      en2 = "default" === je2 && "normal" === Se2 && "lyric-focus-line",
      tn2 = Ge2 ? "font-medium italic tracking-wide" : "font-semibold";
    let nn2;
    me2[57] !== Xe2 || me2[58] !== Jt2 || me2[59] !== Zt2 || me2[60] !== en2 || me2[61] !== tn2 ? (nn2 = x("w-full break-words leading-[1.38] select-text cursor-pointer py-2.5 sm:py-3.5", Jt2, Xe2, Zt2, "text-ink", en2, tn2), me2[57] = Xe2, me2[58] = Jt2, me2[59] = Zt2, me2[60] = en2, me2[61] = tn2, me2[62] = nn2) : nn2 = me2[62];
    const an2 = "text-right" === Xe2 ? "right center" : "left center",
      rn2 = Qe2 || ("fade" === je2 || "default" === je2) && "normal" === Se2 ? void 0 : "default" === je2 || "fade" === je2 ? `translate3d(${ct2}px, 0, 0) scale(${it2})` : `perspective(800px) translate3d(${Ut2}px, ${$t2}px, ${Bt2}px) scale(${Gt2}) rotateX(${qt2}deg) rotateZ(${Ht2}deg) skewX(${Wt2}deg)`,
      sn2 = Qe2 ? "none" : Vt2,
      on2 = "default" !== je2 && "fade" !== je2 || "normal" === Se2 ? "default" === je2 ? `opacity ${ge2 ? 620 : 720}ms cubic-bezier(0.33, 0, 0.2, 1), transform 620ms cubic-bezier(0.22, 1, 0.36, 1)` : "bounce" === je2 ? "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 620ms cubic-bezier(0.34, 1.3, 0.64, 1), filter 450ms cubic-bezier(0.22, 1, 0.36, 1)" : "float" === je2 ? "opacity 680ms cubic-bezier(0.22, 1, 0.36, 1), transform 680ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms cubic-bezier(0.22, 1, 0.36, 1)" : "fade" === je2 ? "opacity 660ms cubic-bezier(0.33, 0, 0.2, 1)" : "opacity 780ms cubic-bezier(0.25, 1, 0.35, 1), transform 780ms cubic-bezier(0.25, 1, 0.35, 1), filter 600ms cubic-bezier(0.25, 1, 0.35, 1)" : "opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 400ms cubic-bezier(0.22, 1, 0.36, 1)",
      ln2 = "default" !== je2 && "fade" !== je2 || "normal" !== Se2 ? "transform, opacity" : void 0;
    let cn2, un2;
    return me2[63] !== Kt2 || me2[64] !== an2 || me2[65] !== rn2 || me2[66] !== sn2 || me2[67] !== on2 || me2[68] !== ln2 || me2[69] !== rt2 ? (cn2 = {
      fontFamily: "var(--font)",
      letterSpacing: Kt2,
      transformOrigin: an2,
      transform: rn2,
      opacity: rt2,
      filter: sn2,
      transition: on2,
      willChange: ln2
    }, me2[63] = Kt2, me2[64] = an2, me2[65] = rn2, me2[66] = sn2, me2[67] = on2, me2[68] = ln2, me2[69] = rt2, me2[70] = cn2) : cn2 = me2[70], me2[71] !== Yt2 || me2[72] !== Ze2 || me2[73] !== Me2 || me2[74] !== Re2 || me2[75] !== nn2 || me2[76] !== cn2 ? (un2 = Gr.jsx("div", {
      className: nn2,
      style: cn2,
      onClick: Ze2,
      onMouseEnter: Me2,
      onMouseLeave: Re2,
      children: Yt2
    }), me2[71] = Yt2, me2[72] = Ze2, me2[73] = Me2, me2[74] = Re2, me2[75] = nn2, me2[76] = cn2, me2[77] = un2) : un2 = me2[77], un2;
  }, (e2, t2) => {
    var n2, a2, r2, s2, i2, o2, l2, c2, u2, d2, m2, f2, h2, p2, g2, v2, x2, y2, b2, w2, k2, j2, S2, N2, _2, C2, T2, E2, L2, A2, P2, I2, M2, R2, z2, D2, F2, O2, $2, B2, U2, q2, H2, W2, V2, Q2, K2, G2, X2, Y2, J2, Z2, ee2, te2, ne2, ae2, re2, se2, ie2, oe2, le2, ce2, ue2, de2, me2, fe2, he2, pe2, ge2, ve2, xe2, ye2, be2, we2, ke2, je2;
    if ((null != (a2 = null == (n2 = e2.data) ? void 0 : n2.line) ? a2 : e2.line) !== (null != (s2 = null == (r2 = t2.data) ? void 0 : r2.line) ? s2 : t2.line)) return false;
    if ((null != (o2 = null == (i2 = e2.data) ? void 0 : i2.nextLine) ? o2 : e2.nextLine) !== (null != (c2 = null == (l2 = t2.data) ? void 0 : l2.nextLine) ? c2 : t2.nextLine)) return false;
    const Se2 = null != (d2 = null == (u2 = e2.data) ? void 0 : u2.index) ? d2 : e2.index,
      Ne2 = null != (f2 = null == (m2 = t2.data) ? void 0 : m2.index) ? f2 : t2.index;
    if (Se2 !== Ne2) return false;
    const _e2 = null != (p2 = null == (h2 = e2.state) ? void 0 : h2.isCurrent) ? p2 : e2.isCurrent,
      Ce2 = null != (v2 = null == (g2 = t2.state) ? void 0 : g2.isCurrent) ? v2 : t2.isCurrent;
    if (_e2 !== Ce2) return false;
    if ((null != (y2 = null == (x2 = e2.state) ? void 0 : x2.isActive) ? y2 : e2.isActive) !== (null != (w2 = null == (b2 = t2.state) ? void 0 : b2.isActive) ? w2 : t2.isActive)) return false;
    if ((null != (j2 = null == (k2 = e2.data) ? void 0 : k2.isPlaceholder) ? j2 : e2.isPlaceholder) !== (null != (N2 = null == (S2 = t2.data) ? void 0 : S2.isPlaceholder) ? N2 : t2.isPlaceholder)) return false;
    if ((null != (C2 = null == (_2 = e2.state) ? void 0 : _2.isPlaying) ? C2 : e2.isPlaying) !== (null != (E2 = null == (T2 = t2.state) ? void 0 : T2.isPlaying) ? E2 : t2.isPlaying)) return false;
    if ((null != (A2 = null == (L2 = e2.state) ? void 0 : L2.effectiveSyncOffset) ? A2 : e2.effectiveSyncOffset) !== (null != (I2 = null == (P2 = t2.state) ? void 0 : P2.effectiveSyncOffset) ? I2 : t2.effectiveSyncOffset)) return false;
    if ((null != (R2 = null == (M2 = e2.state) ? void 0 : M2.effectiveIsSynced) ? R2 : e2.effectiveIsSynced) !== (null != (D2 = null == (z2 = t2.state) ? void 0 : z2.effectiveIsSynced) ? D2 : t2.effectiveIsSynced)) return false;
    if ((null != (O2 = null == (F2 = e2.state) ? void 0 : F2.syncMode) ? O2 : e2.syncMode) !== (null != (B2 = null == ($2 = t2.state) ? void 0 : $2.syncMode) ? B2 : t2.syncMode)) return false;
    if ((null != (q2 = null == (U2 = e2.styleConfig) ? void 0 : U2.animStyle) ? q2 : e2.animStyle) !== (null != (W2 = null == (H2 = t2.styleConfig) ? void 0 : H2.animStyle) ? W2 : t2.animStyle)) return false;
    if ((null != (Q2 = null == (V2 = e2.styleConfig) ? void 0 : V2.textStyle) ? Q2 : e2.textStyle) !== (null != (G2 = null == (K2 = t2.styleConfig) ? void 0 : K2.textStyle) ? G2 : t2.textStyle)) return false;
    if ((null != (Y2 = null == (X2 = e2.styleConfig) ? void 0 : X2.fontSize) ? Y2 : e2.fontSize) !== (null != (Z2 = null == (J2 = t2.styleConfig) ? void 0 : J2.fontSize) ? Z2 : t2.fontSize)) return false;
    if ((null != (te2 = null == (ee2 = e2.styleConfig) ? void 0 : ee2.accentColor) ? te2 : e2.accentColor) !== (null != (ae2 = null == (ne2 = t2.styleConfig) ? void 0 : ne2.accentColor) ? ae2 : t2.accentColor)) return false;
    if ((void 0 !== (null == (re2 = e2.data) ? void 0 : re2.annotation) ? e2.data.annotation : e2.annotation) !== (void 0 !== (null == (se2 = t2.data) ? void 0 : se2.annotation) ? t2.data.annotation : t2.annotation)) return false;
    if ((null != (oe2 = null == (ie2 = e2.styleConfig) ? void 0 : ie2.isPanel) ? oe2 : e2.isPanel) !== (null != (ce2 = null == (le2 = t2.styleConfig) ? void 0 : le2.isPanel) ? ce2 : t2.isPanel)) return false;
    if ((null != (de2 = null == (ue2 = e2.styleConfig) ? void 0 : ue2.wide) ? de2 : e2.wide) !== (null != (fe2 = null == (me2 = t2.styleConfig) ? void 0 : me2.wide) ? fe2 : t2.wide)) return false;
    const Te2 = null != (pe2 = null == (he2 = e2.state) ? void 0 : he2.smoothTime) ? pe2 : e2.smoothTime,
      Ee2 = null != (ve2 = null == (ge2 = t2.state) ? void 0 : ge2.smoothTime) ? ve2 : t2.smoothTime;
    if ((_e2 || Ce2) && (void 0 !== Te2 || void 0 !== Ee2)) return Te2 === Ee2;
    const Le2 = (null != Se2 ? Se2 : 0) - (null != (be2 = null != (ye2 = null == (xe2 = e2.data) ? void 0 : xe2.displayIndex) ? ye2 : e2.displayIndex) ? be2 : 0),
      Ae2 = (null != Ne2 ? Ne2 : 0) - (null != (je2 = null != (ke2 = null == (we2 = t2.data) ? void 0 : we2.displayIndex) ? ke2 : t2.displayIndex) ? je2 : 0);
    return !(Math.abs(Le2) < 6 || Math.abs(Ae2) < 6) || Le2 === Ae2;
  }),
  Xx = Qr.memo(function (e2) {
    const t2 = Kr.c(33),
      {
        line: n2,
        annotation: a2,
        isMarker: r2,
        isEmpty: s2,
        trimmed: i2
      } = e2,
      {
        isHovered: o2,
        handleMouseEnter: l2,
        handleMouseLeave: c2
      } = Kx(),
      u2 = n2.text || "";
    let d2;
    if (t2[0] !== u2) {
      const e3 = u2.trim();
      d2 = e3.length > 0 && 0 === e3.replace(/\s*(\([^)]{1,120}\)|（[^）]{1,120}）)\s*/g, "").length, t2[0] = u2, t2[1] = d2;
    } else d2 = t2[1];
    const m2 = d2,
      f2 = m2 ? "font-medium italic text-[0.88em] tracking-wide" : "font-semibold",
      h2 = r2 && "text-title3 leading-7 sm:text-title3 sm:leading-8",
      p2 = r2 ? "text-ink/35" : "text-ink/70";
    let g2;
    t2[2] !== f2 || t2[3] !== h2 || t2[4] !== p2 ? (g2 = x(f2, "text-title3 leading-[1.9rem] sm:text-xl sm:leading-[2rem]", h2, p2), t2[2] = f2, t2[3] = h2, t2[4] = p2, t2[5] = g2) : g2 = t2[5];
    const v2 = Boolean(a2);
    let y2, b2, w2, k2, j2;
    t2[6] !== m2 || t2[7] !== v2 || t2[8] !== u2 ? (y2 = Bx(u2, v2, 0, false, m2), t2[6] = m2, t2[7] = v2, t2[8] = u2, t2[9] = y2) : y2 = t2[9], t2[10] !== g2 || t2[11] !== y2 ? (b2 = Gr.jsx("span", {
      className: g2,
      children: y2
    }), t2[10] = g2, t2[11] = y2, t2[12] = b2) : b2 = t2[12], t2[13] !== n2.translation ? (w2 = n2.translation && Gr.jsx("span", {
      className: "px-0.5 text-sm opacity-40 font-medium text-foreground/50",
      children: n2.translation
    }), t2[13] = n2.translation, t2[14] = w2) : w2 = t2[14], t2[15] !== a2 || t2[16] !== o2 ? (k2 = (null == a2 ? void 0 : a2.body) && Gr.jsx(Fx, {
      open: o2,
      body: a2.body,
      className: "px-0.5 text-xs sm:text-sm text-ink/55 font-normal italic max-w-[65%] leading-relaxed whitespace-pre-line border-l border-ink/15 pl-2.5 select-text mt-1.5"
    }), t2[15] = a2, t2[16] = o2, t2[17] = k2) : k2 = t2[17], t2[18] !== k2 || t2[19] !== b2 || t2[20] !== w2 ? (j2 = Gr.jsxs("div", {
      className: "flex flex-col",
      children: [b2, w2, k2]
    }), t2[18] = k2, t2[19] = b2, t2[20] = w2, t2[21] = j2) : j2 = t2[21];
    const S2 = j2,
      N2 = s2 && "h-14 sm:h-16 pointer-events-none",
      _2 = r2 && "pt-6 mt-2";
    let C2, T2, E2;
    return t2[22] !== N2 || t2[23] !== _2 ? (C2 = x("px-2 py-1 rounded-md select-text cursor-pointer", N2, _2), t2[22] = N2, t2[23] = _2, t2[24] = C2) : C2 = t2[24], t2[25] !== i2 ? (T2 = () => {
      i2 && navigator.clipboard.writeText(i2);
    }, t2[25] = i2, t2[26] = T2) : T2 = t2[26], t2[27] !== l2 || t2[28] !== c2 || t2[29] !== S2 || t2[30] !== C2 || t2[31] !== T2 ? (E2 = Gr.jsx("div", {
      className: C2,
      onMouseEnter: l2,
      onMouseLeave: c2,
      onClick: T2,
      children: S2
    }), t2[27] = l2, t2[28] = c2, t2[29] = S2, t2[30] = C2, t2[31] = T2, t2[32] = E2) : E2 = t2[32], E2;
  });
const Yx = Qr.memo(function (e2) {
    var t2, n2, a2, r2, s2, i2, o2, l2, c2, u2, d2, m2, f2, h2, p2, g2, v2, y2, b2, w2, k2, j2, S2, N2, _2, C2, T2, E2, L2;
    const A2 = Kr.c(30),
      P2 = e2.data,
      I2 = e2.visuals,
      M2 = e2.ops;
    let R2;
    A2[0] !== (null == P2 ? void 0 : P2.effectiveLyricsLines) || A2[1] !== e2.effectiveLyricsLines ? (R2 = null != (n2 = null != (t2 = null == P2 ? void 0 : P2.effectiveLyricsLines) ? t2 : e2.effectiveLyricsLines) ? n2 : [], A2[0] = null == P2 ? void 0 : P2.effectiveLyricsLines, A2[1] = e2.effectiveLyricsLines, A2[2] = R2) : R2 = A2[2];
    const z2 = R2,
      D2 = null != (r2 = null != (a2 = null == P2 ? void 0 : P2.displayIndex) ? a2 : e2.displayIndex) ? r2 : -1,
      F2 = null != (i2 = null != (s2 = null == P2 ? void 0 : P2.currentLyricIndex) ? s2 : e2.currentLyricIndex) ? i2 : -1;
    let O2;
    A2[3] !== (null == P2 ? void 0 : P2.annotationByLineIndex) || A2[4] !== e2.annotationByLineIndex ? (O2 = null != (l2 = null != (o2 = null == P2 ? void 0 : P2.annotationByLineIndex) ? o2 : e2.annotationByLineIndex) ? l2 : new Map(), A2[3] = null == P2 ? void 0 : P2.annotationByLineIndex, A2[4] = e2.annotationByLineIndex, A2[5] = O2) : O2 = A2[5];
    const $2 = O2,
      B2 = null != (u2 = null != (c2 = null == P2 ? void 0 : P2.effectiveIsSynced) ? c2 : e2.effectiveIsSynced) && u2,
      U2 = null != (m2 = null != (d2 = null == P2 ? void 0 : P2.effectiveSyncOffset) ? d2 : e2.effectiveSyncOffset) ? m2 : 0,
      q2 = e2.lineRefs,
      H2 = e2.currentTime,
      W2 = null != (f2 = e2.isPlaying) && f2,
      V2 = null != (p2 = null != (h2 = null == I2 ? void 0 : I2.syncMode) ? h2 : e2.syncMode) ? p2 : "lines",
      Q2 = null != (v2 = null != (g2 = null == I2 ? void 0 : I2.animStyle) ? g2 : e2.animStyle) ? v2 : "default",
      K2 = null != (b2 = null != (y2 = null == I2 ? void 0 : I2.textStyle) ? y2 : e2.textStyle) ? b2 : "normal",
      G2 = null != (k2 = null != (w2 = null == I2 ? void 0 : I2.fontSize) ? w2 : e2.fontSize) ? k2 : "md",
      X2 = null != (S2 = null != (j2 = null == I2 ? void 0 : I2.accentColor) ? j2 : e2.accentColor) ? S2 : "#ffffff",
      Y2 = null != (_2 = null != (N2 = null == I2 ? void 0 : I2.isPanel) ? N2 : e2.isPanel) && _2,
      J2 = null != (T2 = null != (C2 = null == I2 ? void 0 : I2.wide) ? C2 : e2.wide) && T2,
      Z2 = null != (E2 = null == I2 ? void 0 : I2.containerClassName) ? E2 : e2.containerClassName,
      ee2 = null != (L2 = null == M2 ? void 0 : M2.onLineClick) ? L2 : e2.onLineClick,
      te2 = Y2 ? "gap-1.5 py-12" : "gap-3 sm:gap-4 lg:gap-5 pt-[32vh] pb-[60vh]";
    let ne2, ae2, re2;
    return A2[6] !== Z2 || A2[7] !== te2 ? (ne2 = x("flex flex-col", te2, Z2), A2[6] = Z2, A2[7] = te2, A2[8] = ne2) : ne2 = A2[8], A2[9] !== X2 || A2[10] !== Q2 || A2[11] !== $2 || A2[12] !== F2 || A2[13] !== H2 || A2[14] !== D2 || A2[15] !== B2 || A2[16] !== z2 || A2[17] !== U2 || A2[18] !== G2 || A2[19] !== Y2 || A2[20] !== W2 || A2[21] !== q2 || A2[22] !== ee2 || A2[23] !== V2 || A2[24] !== K2 || A2[25] !== J2 ? (ae2 = z2.map((e3, t3) => {
      const n3 = t3 === D2,
        a3 = t3 === F2,
        r3 = $2.get(t3);
      return Gr.jsx("div", {
        ref: e4 => {
          return a4 = t3, r4 = e4, void ((null == (n4 = q2) ? void 0 : n4.current) && (n4.current[a4] = r4));
          var n4, a4, r4;
        },
        children: Gr.jsx(Gx, {
          line: e3,
          nextLine: z2[t3 + 1],
          index: t3,
          isCurrent: n3,
          isActive: a3,
          isPlaceholder: ea(null == e3 ? void 0 : e3.text),
          smoothTime: n3 ? H2 : void 0,
          isPlaying: W2,
          effectiveSyncOffset: U2,
          syncMode: V2,
          animStyle: Q2,
          textStyle: K2,
          fontSize: G2,
          accentColor: X2,
          annotation: r3,
          onLineClick: ee2,
          displayIndex: D2,
          isPanel: Y2,
          wide: J2,
          effectiveIsSynced: B2
        })
      }, t3);
    }), A2[9] = X2, A2[10] = Q2, A2[11] = $2, A2[12] = F2, A2[13] = H2, A2[14] = D2, A2[15] = B2, A2[16] = z2, A2[17] = U2, A2[18] = G2, A2[19] = Y2, A2[20] = W2, A2[21] = q2, A2[22] = ee2, A2[23] = V2, A2[24] = K2, A2[25] = J2, A2[26] = ae2) : ae2 = A2[26], A2[27] !== ne2 || A2[28] !== ae2 ? (re2 = Gr.jsx("div", {
      className: ne2,
      children: ae2
    }), A2[27] = ne2, A2[28] = ae2, A2[29] = re2) : re2 = A2[29], re2;
  }, (e2, t2) => {
    var n2, a2, r2, s2;
    const i2 = null != (n2 = e2.data) ? n2 : e2,
      o2 = null != (a2 = t2.data) ? a2 : t2;
    if (i2.displayIndex !== o2.displayIndex) return false;
    if (i2.currentLyricIndex !== o2.currentLyricIndex) return false;
    if (i2.effectiveLyricsLines !== o2.effectiveLyricsLines) return false;
    if (e2.isPlaying !== t2.isPlaying) return false;
    if (i2.effectiveIsSynced !== o2.effectiveIsSynced) return false;
    if (i2.effectiveSyncOffset !== o2.effectiveSyncOffset) return false;
    const l2 = null != (r2 = e2.visuals) ? r2 : e2,
      c2 = null != (s2 = t2.visuals) ? s2 : t2;
    return l2.syncMode === c2.syncMode && l2.fontSize === c2.fontSize && l2.animStyle === c2.animStyle && l2.textStyle === c2.textStyle && l2.accentColor === c2.accentColor && l2.isPanel === c2.isPanel && l2.wide === c2.wide && l2.containerClassName === c2.containerClassName;
  }),
  Jx = Qr.memo(function (e2) {
    var t2, n2, a2, r2, s2, i2, o2, l2, c2, d2, m2, f2, h2, p2;
    const {
        dataState: g2,
        styleOptions: v2,
        syncTiming: y2,
        layoutContext: b2,
        interactionHandlers: w2
      } = e2,
      k2 = null != (t2 = g2.effectiveIsSynced) && t2,
      j2 = null != (n2 = g2.effectiveLyricsLines) ? n2 : [],
      N2 = null != (a2 = g2.displayIndex) ? a2 : 0,
      _2 = null != (r2 = g2.currentLyricIndex) ? r2 : 0,
      C2 = null != (s2 = g2.annotationByLineIndex) ? s2 : new Map(),
      T2 = null != (i2 = g2.isLoadingLyrics) && i2,
      E2 = null != (o2 = v2.animStyle) ? o2 : "default",
      L2 = null != (l2 = v2.textStyle) ? l2 : "normal",
      A2 = null != (c2 = v2.fontSize) ? c2 : "md",
      P2 = null != (d2 = v2.accentColor) ? d2 : "#ffffff",
      I2 = y2.isPlaying,
      M2 = null != (m2 = y2.effectiveSyncOffset) ? m2 : 0,
      R2 = null != (f2 = y2.syncMode) ? f2 : "lines",
      z2 = b2.lineRefs,
      D2 = b2.lyricsWrapRef,
      F2 = b2.containerY,
      O2 = null != (h2 = b2.isPanel) && h2,
      $2 = null != (p2 = b2.wide) && p2,
      B2 = b2.viewMode,
      U2 = b2.currentSong,
      q2 = b2.coverArt,
      H2 = w2.handleSeekEnd,
      W2 = w2.onLineClick,
      V2 = w2.onUserScroll,
      Q2 = w2.onContextMenu,
      K2 = u(e3 => e3.currentSong),
      G2 = void 0 !== U2 ? U2 : K2,
      X2 = ra(G2),
      Y2 = u(e3 => e3.isPlaying),
      J2 = void 0 !== I2 ? I2 : Y2,
      Z2 = null != H2 ? H2 : e3 => u.getState().seek(e3[0]),
      ee2 = j2,
      te2 = k2,
      ne2 = Xr.useMemo(() => ({
        effectiveLyricsLines: ee2,
        displayIndex: N2,
        currentLyricIndex: _2,
        annotationByLineIndex: C2,
        effectiveIsSynced: te2,
        effectiveSyncOffset: M2
      }), [ee2, N2, _2, C2, te2, M2]),
      ae2 = Xr.useMemo(() => ({
        syncMode: R2,
        animStyle: E2,
        textStyle: L2,
        fontSize: A2,
        accentColor: P2,
        wide: $2
      }), [R2, E2, L2, A2, P2, $2]),
      re2 = Xr.useMemo(() => ({
        handleSeekEnd: Z2,
        onLineClick: W2
      }), [Z2, W2]);
    return Gr.jsxs(Jr.div, {
      "data-lyrics-contrast": O2 ? void 0 : "",
      className: x("flex-1 min-w-0 h-full min-h-0 flex flex-col overflow-hidden", O2 ? "max-w-full items-center" : $2 ? "w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto items-center" : "w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl items-start"),
      initial: false,
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 1,
        y: 0
      },
      transition: {
        duration: 0.26,
        ease: [0.22, 1, 0.36, 1]
      },
      children: ["lyrics" === B2 && G2 && !O2 && Gr.jsx("div", {
        className: "w-full flex-shrink-0 flex flex-col items-center justify-center px-4 sm:px-6 pt-1 pb-6 select-none",
        children: Gr.jsxs(Se, {
          id: String((null == G2 ? void 0 : G2.id) || "header"),
          className: "flex flex-col items-center justify-center w-full",
          children: [Gr.jsxs("div", {
            className: "flex items-center justify-center gap-2 sm:gap-2.5 max-w-full overflow-hidden",
            children: [q2 && Gr.jsx("div", {
              className: "w-6 h-6 sm:w-7 sm:h-7 rounded-md overflow-hidden shadow-sm border border-white/10 shrink-0 bg-black/40",
              children: Gr.jsx("img", {
                src: q2,
                alt: (null == G2 ? void 0 : G2.title) || "",
                className: "w-full h-full object-cover"
              })
            }), !X2 && Gr.jsx(S, {
              song: G2,
              className: "w-3.5 h-3.5 text-white/70 shrink-0"
            }), Gr.jsx(Yi, {
              isHovered: true,
              centerWhenIdle: true,
              className: "text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white text-center max-w-full leading-tight",
              children: (null == G2 ? void 0 : G2.title) || ""
            })]
          }), Gr.jsx(Tx, {
            song: G2,
            formatVariant: "glass",
            avatarSize: 14,
            avatarClassName: "w-3.5 h-3.5 opacity-60",
            textClassName: "text-xs sm:text-sm text-white/50 hover:text-white",
            centerWhenIdle: true,
            className: "justify-center mt-1 max-w-full"
          })]
        })
      }), Gr.jsx("div", {
        className: "w-full h-full min-h-0 flex-1 relative overflow-hidden",
        style: {
          maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.35) 4%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.35) 96%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.35) 4%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.35) 96%, transparent 100%)",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat"
        },
        children: Gr.jsx(Yr, {
          children: ee2.length > 0 && Gr.jsx(Jr.div, {
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
              duration: 0.15,
              ease: "easeOut"
            },
            className: "w-full h-full min-h-0 flex-1 flex flex-col",
            children: te2 ? Gr.jsx("div", {
              ref: D2,
              onWheel: V2,
              onTouchMove: V2,
              onContextMenu: e3 => {
                e3.preventDefault(), null == Q2 || Q2(e3);
              },
              className: "w-full h-full min-h-0 flex-1 overflow-y-auto overscroll-contain scrollbar-hide relative",
              children: T2 && 0 === ee2.length ? null : Gr.jsx(Yx, {
                data: ne2,
                visuals: ae2,
                ops: re2,
                lineRefs: z2,
                containerY: F2,
                isPlaying: J2
              })
            }) : Gr.jsx("div", {
              ref: D2,
              onWheel: V2,
              onTouchMove: V2,
              onContextMenu: e3 => {
                e3.preventDefault(), null == Q2 || Q2(e3);
              },
              className: "w-full h-full min-h-0 flex-1 overflow-y-auto overscroll-contain scrollbar-hide py-12 select-text",
              children: Gr.jsx("div", {
                className: "max-w-xl space-y-4 px-4",
                children: ee2.map((e3, t3) => {
                  var n3;
                  const a3 = (e3.text || "").trim(),
                    r3 = /^[.*]$/.test(a3),
                    s3 = 0 === a3.length,
                    i3 = null != (n3 = C2.get(t3)) ? n3 : null;
                  return Gr.jsx(Xx, {
                    line: e3,
                    annotation: i3,
                    isMarker: r3,
                    isEmpty: s3,
                    trimmed: a3
                  }, t3);
                })
              })
            })
          }, (null == G2 ? void 0 : G2.id) || "empty")
        })
      })]
    });
  }),
  Zx = Xr.memo(function (e2) {
    const t2 = Kr.c(15),
      {
        requestExit: n2,
        isHovering: a2,
        renderBadges: r2
      } = e2,
      {
        t: s2
      } = P(),
      i2 = a2 ? 1 : 0.35;
    let o2, l2, c2, u2, d2, m2, f2;
    return t2[0] !== i2 ? (o2 = {
      opacity: i2,
      y: 0
    }, t2[0] = i2, t2[1] = o2) : o2 = t2[1], t2[2] === Symbol.for("react.memo_cache_sentinel") ? (l2 = {
      duration: 0.22,
      ease: "easeOut"
    }, t2[2] = l2) : l2 = t2[2], t2[3] !== r2 ? (c2 = r2 && Gr.jsx("div", {
      className: "absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 pointer-events-auto",
      children: r2()
    }), t2[3] = r2, t2[4] = c2) : c2 = t2[4], t2[5] !== s2 ? (u2 = s2("common.close"), t2[5] = s2, t2[6] = u2) : u2 = t2[6], t2[7] === Symbol.for("react.memo_cache_sentinel") ? (d2 = Gr.jsx(zn, {
      className: "w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:translate-y-0.5"
    }), t2[7] = d2) : d2 = t2[7], t2[8] !== n2 || t2[9] !== u2 ? (m2 = Gr.jsx(A, {
      "data-lyrics-contrast": true,
      type: "button",
      variant: "ghost",
      size: "icon",
      shape: "circle",
      onClick: n2,
      className: "group pointer-events-auto h-auto w-auto p-2 text-white/40 hover:text-white/95 active:scale-95 hover:scale-110 duration-200",
      "aria-label": u2,
      children: d2
    }), t2[8] = n2, t2[9] = u2, t2[10] = m2) : m2 = t2[10], t2[11] !== o2 || t2[12] !== c2 || t2[13] !== m2 ? (f2 = Gr.jsxs(Jr.div, {
      className: "fixed top-4 sm:top-6 left-0 right-0 z-50 flex items-center justify-center pointer-events-none",
      animate: o2,
      transition: l2,
      children: [c2, m2]
    }), t2[11] = o2, t2[12] = c2, t2[13] = m2, t2[14] = f2) : f2 = t2[14], f2;
  });
function ey({
  effectiveLyricsLines: e2,
  effectiveIsSynced: t2,
  currentTime: n2,
  effectiveSyncOffset: a2,
  duration: r2,
  lastManualLineClickTime: s2,
  songId: i2
}) {
  const o2 = Qr.useRef(e2),
    l2 = Qr.useRef(i2),
    c2 = Qr.useRef({
      effectiveLyricsLines: e2,
      effectiveIsSynced: t2,
      effectiveSyncOffset: a2,
      lastManualLineClickTime: s2
    });
  c2.current = {
    effectiveLyricsLines: e2,
    effectiveIsSynced: t2,
    effectiveSyncOffset: a2,
    lastManualLineClickTime: s2
  };
  const u2 = e3 => {
    const {
      effectiveLyricsLines: t3,
      effectiveIsSynced: n3,
      effectiveSyncOffset: a3,
      lastManualLineClickTime: r3
    } = c2.current;
    if (!t3.length) return;
    if (Mx > 0) return;
    let s3 = -1;
    const i3 = ia(e3, a3);
    n3 && (s3 = sa(t3, i3));
    const o3 = Dn.getState().currentLyricIndex;
    r3.current && Date.now() - r3.current < 2500 ? s3 === o3 && (r3.current = 0) : s3 !== o3 && Dn.setState({
      currentLyricIndex: s3,
      displayIndex: s3
    });
  };
  Qr.useLayoutEffect(() => {
    o2.current === e2 && l2.current === i2 || (o2.current = e2, l2.current = i2, Dn.setState({
      currentLyricIndex: -1,
      displayIndex: -1
    })), u2(null != n2 ? n2 : qx.getSmoothTime());
  }, [n2, e2, t2, a2, r2, i2]), Qr.useEffect(() => {
    if (void 0 !== n2) return;
    u2(qx.getSmoothTime());
    return qx.subscribeThrottled(e3 => {
      u2(e3);
    }, 60);
  }, [n2, e2, t2, a2, r2, i2]);
}
const ty = "media-control shadow-none",
  ny = {
    backdropFilter: "blur(40px) saturate(150%)",
    WebkitBackdropFilter: "blur(40px) saturate(150%)"
  },
  ay = Qr.forwardRef((e2, t2) => {
    const n2 = Kr.c(18);
    let a2, r2, s2, i2, o2;
    n2[0] !== e2 ? ({
      className: r2,
      style: i2,
      surfaceClassName: o2,
      children: a2,
      ...s2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2, n2[5] = o2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4], o2 = n2[5]);
    const l2 = !o2 && ty;
    let c2, u2, d2;
    return n2[6] !== r2 || n2[7] !== l2 ? (c2 = x("relative flex items-center justify-center flex-shrink-0 shrink-0", "w-10 h-10 sm:w-12 sm:h-12 !rounded-full", l2, "transition-all duration-200 active:scale-90 active:opacity-80", r2), n2[6] = r2, n2[7] = l2, n2[8] = c2) : c2 = n2[8], n2[9] !== a2 || n2[10] !== o2 ? (u2 = o2 ? Gr.jsx("span", {
      className: x("absolute inset-0 flex items-center justify-center pointer-events-none", ty, o2),
      style: {
        borderRadius: "inherit"
      },
      children: a2
    }) : a2, n2[9] = a2, n2[10] = o2, n2[11] = u2) : u2 = n2[11], n2[12] !== s2 || n2[13] !== t2 || n2[14] !== i2 || n2[15] !== c2 || n2[16] !== u2 ? (d2 = Gr.jsx("button", {
      ref: t2,
      type: "button",
      className: c2,
      style: i2,
      ...s2,
      children: u2
    }), n2[12] = s2, n2[13] = t2, n2[14] = i2, n2[15] = c2, n2[16] = u2, n2[17] = d2) : d2 = n2[17], d2;
  });
function ry(e2) {
  const t2 = Kr.c(26),
    {
      icon: n2,
      active: a2,
      activeClassName: r2,
      onToggle: s2,
      label: i2,
      className: o2,
      iconClassName: l2,
      surfaceClassName: c2,
      size: u2,
      variant: d2
    } = e2,
    m2 = void 0 === u2 ? "icon" : u2,
    f2 = void 0 === d2 ? "default" : d2;
  let h2;
  t2[0] !== s2 ? (h2 = e3 => {
    e3.stopPropagation(), s2();
  }, t2[0] = s2, t2[1] = h2) : h2 = t2[1];
  const p2 = h2,
    g2 = "glass" === f2,
    v2 = a2 ? "Bold" : "Linear",
    y2 = g2 ? "text-white" : a2 ? r2 : "text-current";
  let b2, w2;
  t2[2] !== l2 || t2[3] !== y2 ? (b2 = x("h-5 w-5 transition-all duration-300", y2, l2), t2[2] = l2, t2[3] = y2, t2[4] = b2) : b2 = t2[4], t2[5] !== n2 || t2[6] !== v2 || t2[7] !== b2 ? (w2 = Gr.jsx(n2, {
    weight: v2,
    className: b2
  }), t2[5] = n2, t2[6] = v2, t2[7] = b2, t2[8] = w2) : w2 = t2[8];
  const k2 = w2;
  if (g2) {
    let e3;
    return t2[9] !== a2 || t2[10] !== o2 || t2[11] !== k2 || t2[12] !== p2 || t2[13] !== i2 || t2[14] !== c2 ? (e3 = Gr.jsx(ay, {
      onClick: p2,
      "aria-pressed": a2,
      "aria-label": i2,
      className: o2,
      surfaceClassName: c2,
      children: k2
    }), t2[9] = a2, t2[10] = o2, t2[11] = k2, t2[12] = p2, t2[13] = i2, t2[14] = c2, t2[15] = e3) : e3 = t2[15], e3;
  }
  const j2 = "icon" === m2 || "sm" === m2 ? "icon" : "sm",
    S2 = "icon" === m2 ? "h-9 w-9 aspect-square" : "sm" === m2 ? "h-8 w-8 aspect-square" : "h-auto px-3 py-2";
  let N2, _2;
  return t2[16] !== o2 || t2[17] !== S2 ? (N2 = x("flex flex-shrink-0 overflow-hidden active:scale-95 active:opacity-80", S2, "text-foreground/70 hover:text-foreground", o2), t2[16] = o2, t2[17] = S2, t2[18] = N2) : N2 = t2[18], t2[19] !== a2 || t2[20] !== k2 || t2[21] !== p2 || t2[22] !== i2 || t2[23] !== N2 || t2[24] !== j2 ? (_2 = Gr.jsx(A, {
    variant: "ghost",
    size: j2,
    shape: "circle",
    onClick: p2,
    "aria-pressed": a2,
    "aria-label": i2,
    className: N2,
    children: k2
  }), t2[19] = a2, t2[20] = k2, t2[21] = p2, t2[22] = i2, t2[23] = N2, t2[24] = j2, t2[25] = _2) : _2 = t2[25], _2;
}
const sy = (e2, t2) => {
    var n2, a2;
    return (null == (n2 = e2.song) ? void 0 : n2.id) === (null == (a2 = t2.song) ? void 0 : a2.id) && e2.className === t2.className && e2.iconClassName === t2.iconClassName && e2.surfaceClassName === t2.surfaceClassName && e2.size === t2.size && e2.variant === t2.variant;
  },
  iy = Xr.memo(e2 => {
    const t2 = Kr.c(14);
    let n2, a2, r2;
    t2[0] !== e2 ? ({
      song: a2,
      ...n2
    } = e2, t2[0] = e2, t2[1] = n2, t2[2] = a2) : (n2 = t2[1], a2 = t2[2]), t2[3] === Symbol.for("react.memo_cache_sentinel") ? (r2 = {
      autoLoad: false
    }, t2[3] = r2) : r2 = t2[3];
    const {
        toggleUnfavorite: s2
      } = oa(r2),
      i2 = vn((null == a2 ? void 0 : a2.id) || ""),
      {
        t: o2
      } = P();
    if (!a2) return null;
    let l2, c2, u2;
    return t2[4] !== a2 || t2[5] !== s2 ? (l2 = () => s2(a2.id, a2), t2[4] = a2, t2[5] = s2, t2[6] = l2) : l2 = t2[6], t2[7] !== o2 ? (c2 = o2("common.dislike"), t2[7] = o2, t2[8] = c2) : c2 = t2[8], t2[9] !== i2 || t2[10] !== n2 || t2[11] !== l2 || t2[12] !== c2 ? (u2 = Gr.jsx(ry, {
      ...n2,
      icon: _.dislike,
      active: i2,
      activeClassName: "text-foreground",
      onToggle: l2,
      label: c2
    }), t2[9] = i2, t2[10] = n2, t2[11] = l2, t2[12] = c2, t2[13] = u2) : u2 = t2[13], u2;
  }, sy);
const oy = Xr.memo(e2 => {
  const t2 = Kr.c(12);
  let n2, a2;
  t2[0] !== e2 ? ({
    song: a2,
    ...n2
  } = e2, t2[0] = e2, t2[1] = n2, t2[2] = a2) : (n2 = t2[1], a2 = t2[2]);
  const {
      isFavorite: r2,
      toggleLike: s2
    } = vg(a2),
    {
      t: i2
    } = P();
  if (!a2) return null;
  let o2, l2, c2;
  return t2[3] !== s2 ? (o2 = () => {
    s2();
  }, t2[3] = s2, t2[4] = o2) : o2 = t2[4], t2[5] !== i2 ? (l2 = i2("common.like"), t2[5] = i2, t2[6] = l2) : l2 = t2[6], t2[7] !== r2 || t2[8] !== n2 || t2[9] !== o2 || t2[10] !== l2 ? (c2 = Gr.jsx(ry, {
    ...n2,
    icon: _.like,
    active: r2,
    activeClassName: "text-primary fill-primary",
    onToggle: o2,
    label: l2
  }), t2[7] = r2, t2[8] = n2, t2[9] = o2, t2[10] = l2, t2[11] = c2) : c2 = t2[11], c2;
}, sy);
const ly = Xr.memo(function (e2) {
    const t2 = Kr.c(35),
      {
        duration: n2,
        accentColor: a2,
        onSeek: r2,
        handleSeekStart: s2,
        handleSeekEnd: i2
      } = e2,
      o2 = le(uy),
      l2 = u(dy),
      c2 = u(my),
      d2 = u(fy),
      m2 = void 0 !== n2 ? n2 : l2;
    let f2;
    t2[0] !== a2 ? (f2 = {
      fill: "#ffffff",
      track: "rgba(255, 255, 255, 0.25)"
    }, t2[0] = a2, t2[1] = f2) : f2 = t2[1];
    const h2 = f2,
      [p2, g2] = Qr.useState(o2),
      v2 = Qr.useRef(null);
    let x2, y2, b2, w2, k2;
    t2[2] !== o2 ? (x2 = () => {
      g2(o2), v2.current && (v2.current.textContent = la(o2));
    }, y2 = [o2], t2[2] = o2, t2[3] = x2, t2[4] = y2) : (x2 = t2[3], y2 = t2[4]), Qr.useEffect(x2, y2), t2[5] !== c2 || t2[6] !== d2 ? (b2 = () => {
      if (!c2 || d2) return;
      let e3 = 0;
      const t3 = t4 => {
        const n3 = la(t4);
        v2.current && v2.current.textContent !== n3 && (v2.current.textContent = n3);
        const a3 = performance.now();
        a3 - e3 >= 50 && (e3 = a3, g2(t4));
      };
      t3(qx.getSmoothTime());
      return qx.subscribe(t3);
    }, w2 = [c2, d2], t2[5] = c2, t2[6] = d2, t2[7] = b2, t2[8] = w2) : (b2 = t2[7], w2 = t2[8]), Qr.useEffect(b2, w2), t2[9] !== r2 ? (k2 = null != r2 ? r2 : e3 => {
      g2(e3[0]), le.getState().setCurrentTime(e3[0]);
    }, t2[9] = r2, t2[10] = k2) : k2 = t2[10];
    const j2 = k2,
      S2 = null != s2 ? s2 : hy,
      N2 = null != i2 ? i2 : py;
    let _2, C2, T2;
    t2[11] !== p2 ? (_2 = la(p2), t2[11] = p2, t2[12] = _2) : _2 = t2[12], t2[13] !== _2 ? (C2 = Gr.jsx("span", {
      ref: v2,
      className: "time-text-player text-white/60 text-xs shrink-0 select-none",
      children: _2
    }), t2[13] = _2, t2[14] = C2) : C2 = t2[14], t2[15] !== p2 ? (T2 = [p2], t2[15] = p2, t2[16] = T2) : T2 = t2[16];
    const E2 = m2 || 100;
    let L2;
    t2[17] !== h2.fill || t2[18] !== h2.track ? (L2 = {
      "--slider-accent": h2.fill,
      "--slider-track": h2.track
    }, t2[17] = h2.fill, t2[18] = h2.track, t2[19] = L2) : L2 = t2[19];
    const A2 = L2;
    let P2, I2, M2, R2;
    return t2[20] !== N2 || t2[21] !== S2 || t2[22] !== j2 || t2[23] !== E2 || t2[24] !== A2 || t2[25] !== T2 ? (P2 = Gr.jsx("div", {
      className: "flex-1 relative flex items-center group/slider py-1",
      children: Gr.jsx(Xv, {
        value: T2,
        max: E2,
        step: 0.1,
        onValueChange: j2,
        onValueCommit: N2,
        onPointerDown: S2,
        className: "cursor-pointer [&_.relative]:h-[4px] [&_.relative]:rounded-full [&_.relative]:![background-color:var(--slider-track)] [&_[role=slider]]:h-3 [&_[role=slider]]:w-3 [&_[role=slider]]:bg-white [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-none [&_[role=slider]]:scale-0 group-hover/slider:[&_[role=slider]]:scale-100 transition-transform duration-150",
        style: A2
      })
    }), t2[20] = N2, t2[21] = S2, t2[22] = j2, t2[23] = E2, t2[24] = A2, t2[25] = T2, t2[26] = P2) : P2 = t2[26], t2[27] !== m2 ? (I2 = la(m2), t2[27] = m2, t2[28] = I2) : I2 = t2[28], t2[29] !== I2 ? (M2 = Gr.jsx("span", {
      className: "time-text-player text-white/60 text-xs shrink-0 select-none",
      children: I2
    }), t2[29] = I2, t2[30] = M2) : M2 = t2[30], t2[31] !== P2 || t2[32] !== M2 || t2[33] !== C2 ? (R2 = Gr.jsxs("div", {
      "data-lyrics-contrast": true,
      className: "mt-2.5 w-full flex items-center gap-3 px-1 select-none",
      children: [C2, P2, M2]
    }), t2[31] = P2, t2[32] = M2, t2[33] = C2, t2[34] = R2) : R2 = t2[34], R2;
  }),
  cy = Xr.memo(function (e2) {
    const t2 = Kr.c(89),
      {
        currentSong: n2,
        duration: a2,
        onSeek: r2,
        handleSeekStart: s2,
        handleSeekEnd: i2,
        accentColor: o2,
        coverArt: l2,
        canvasUrl: c2,
        isCanvasReady: u2,
        setIsCanvasReady: d2,
        isHovering: m2,
        showLyricsLayout: f2,
        clipState: h2,
        isAnimating: p2,
        playerControls: g2
      } = e2,
      {
        t: v2
      } = P(),
      {
        topCover: y2,
        bottomCover: b2,
        showTop: w2
      } = ca(l2),
      k2 = ra(n2);
    if ("fullscreen" === h2) return null;
    const j2 = f2 ? "w-[clamp(260px,min(56vh,44vw),560px)] 2xl:w-[clamp(280px,min(62vh,46vw),620px)]" : "w-[clamp(280px,min(58vh,80vw),560px)] 2xl:w-[clamp(320px,min(62vh,82vw),640px)] my-auto";
    let _2, C2, T2, E2, L2, A2;
    t2[0] !== j2 ? (_2 = x("flex flex-col items-center select-none transition-all duration-300 ease-out flex-shrink-0", j2), t2[0] = j2, t2[1] = _2) : _2 = t2[1], t2[2] !== b2 || t2[3] !== c2 || t2[4] !== (null == n2 ? void 0 : n2.source) || t2[5] !== u2 || t2[6] !== w2 ? (C2 = b2 && Gr.jsx("div", {
      className: "absolute inset-0 z-0 bg-cover bg-center",
      style: {
        opacity: c2 && u2 || w2 ? 0 : 1,
        transition: "opacity 0.25s ease-in-out"
      },
      children: Gr.jsx(N, {
        src: b2,
        source: null == n2 ? void 0 : n2.source,
        size: 500,
        plain: true,
        showLoading: false,
        className: "w-full h-full rounded-[inherit]",
        fallback: Gr.jsx(B.Track, {
          className: "w-1/3 h-1/3 text-white/30"
        })
      })
    }), t2[2] = b2, t2[3] = c2, t2[4] = null == n2 ? void 0 : n2.source, t2[5] = u2, t2[6] = w2, t2[7] = C2) : C2 = t2[7], t2[8] !== c2 || t2[9] !== (null == n2 ? void 0 : n2.source) || t2[10] !== u2 || t2[11] !== w2 || t2[12] !== y2 ? (T2 = y2 && Gr.jsx("div", {
      className: "absolute inset-0 z-0 bg-cover bg-center",
      style: {
        opacity: c2 && u2 ? 0 : w2 ? 1 : 0,
        transition: "opacity 0.25s ease-in-out"
      },
      children: Gr.jsx(N, {
        src: y2,
        source: null == n2 ? void 0 : n2.source,
        size: 500,
        plain: true,
        showLoading: false,
        className: "w-full h-full rounded-[inherit]",
        fallback: Gr.jsx(B.Track, {
          className: "w-1/3 h-1/3 text-white/30"
        })
      })
    }), t2[8] = c2, t2[9] = null == n2 ? void 0 : n2.source, t2[10] = u2, t2[11] = w2, t2[12] = y2, t2[13] = T2) : T2 = t2[13], t2[14] !== c2 || t2[15] !== d2 ? (E2 = c2 && Gr.jsx(cx, {
      url: c2,
      className: "absolute inset-0 z-10",
      onReady: () => d2(true),
      onError: () => d2(false)
    }), t2[14] = c2, t2[15] = d2, t2[16] = E2) : E2 = t2[16], t2[17] !== b2 || t2[18] !== c2 || t2[19] !== u2 || t2[20] !== y2 ? (L2 = !y2 && !b2 && (!c2 || !u2) && Gr.jsx("div", {
      className: "w-full h-full bg-white/5 flex items-center justify-center",
      children: Gr.jsx(B.Track, {
        className: "w-1/3 h-1/3 text-white/30"
      })
    }), t2[17] = b2, t2[18] = c2, t2[19] = u2, t2[20] = y2, t2[21] = L2) : L2 = t2[21], t2[22] !== C2 || t2[23] !== T2 || t2[24] !== E2 || t2[25] !== L2 ? (A2 = Gr.jsxs("div", {
      className: "w-full h-full relative",
      children: [C2, T2, E2, L2]
    }), t2[22] = C2, t2[23] = T2, t2[24] = E2, t2[25] = L2, t2[26] = A2) : A2 = t2[26];
    const I2 = m2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none";
    let M2, R2, z2;
    t2[27] !== I2 ? (M2 = x("transition-all duration-300 pointer-events-auto", I2), t2[27] = I2, t2[28] = M2) : M2 = t2[28], t2[29] !== n2 ? (R2 = Gr.jsx(oy, {
      song: n2,
      variant: "glass"
    }), t2[29] = n2, t2[30] = R2) : R2 = t2[30], t2[31] !== R2 || t2[32] !== M2 ? (z2 = Gr.jsx("div", {
      className: M2,
      children: R2
    }), t2[31] = R2, t2[32] = M2, t2[33] = z2) : z2 = t2[33];
    const D2 = m2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none";
    let F2, O2, $2, U2, q2, H2;
    t2[34] !== D2 ? (F2 = x("transition-all duration-300 pointer-events-auto", D2), t2[34] = D2, t2[35] = F2) : F2 = t2[35], t2[36] !== n2 ? (O2 = Gr.jsx(iy, {
      song: n2,
      variant: "glass"
    }), t2[36] = n2, t2[37] = O2) : O2 = t2[37], t2[38] !== F2 || t2[39] !== O2 ? ($2 = Gr.jsx("div", {
      className: F2,
      children: O2
    }), t2[38] = F2, t2[39] = O2, t2[40] = $2) : $2 = t2[40], t2[41] !== z2 || t2[42] !== $2 ? (U2 = Gr.jsxs("div", {
      className: "absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none",
      children: [z2, $2]
    }), t2[41] = z2, t2[42] = $2, t2[43] = U2) : U2 = t2[43], t2[44] !== U2 || t2[45] !== A2 ? (q2 = Gr.jsxs("div", {
      className: "w-full aspect-square relative rounded-2xl overflow-hidden group bg-black/30 shadow-2xl shrink-0",
      children: [A2, U2]
    }), t2[44] = U2, t2[45] = A2, t2[46] = q2) : q2 = t2[46], t2[47] === Symbol.for("react.memo_cache_sentinel") ? (H2 = {
      fontFamily: "var(--font)"
    }, t2[47] = H2) : H2 = t2[47];
    const W2 = `title-${(null == n2 ? void 0 : n2.id) || "empty"}`,
      V2 = p2 && "animate-track-title-in";
    let Q2, K2, G2, X2, Y2;
    t2[48] !== V2 ? (Q2 = x("flex items-center justify-center gap-1.5 max-w-full mb-0.5 min-w-0", V2), t2[48] = V2, t2[49] = Q2) : Q2 = t2[49], t2[50] !== n2 || t2[51] !== k2 ? (K2 = !k2 && Gr.jsx(S, {
      song: n2,
      className: "w-4 h-4 text-white/70 shrink-0"
    }), t2[50] = n2, t2[51] = k2, t2[52] = K2) : K2 = t2[52], t2[53] !== (null == n2 ? void 0 : n2.title) || t2[54] !== v2 ? (G2 = (null == n2 ? void 0 : n2.title) || v2("player.nothing_playing"), t2[53] = null == n2 ? void 0 : n2.title, t2[54] = v2, t2[55] = G2) : G2 = t2[55], t2[56] !== m2 || t2[57] !== G2 ? (X2 = Gr.jsx(Yi, {
      isHovered: m2,
      centerWhenIdle: true,
      className: "text-xl sm:text-2xl 2xl:text-3xl font-semibold tracking-tight text-white max-w-full text-center",
      children: G2
    }), t2[56] = m2, t2[57] = G2, t2[58] = X2) : X2 = t2[58], t2[59] !== W2 || t2[60] !== Q2 || t2[61] !== K2 || t2[62] !== X2 ? (Y2 = Gr.jsxs("div", {
      className: Q2,
      children: [K2, X2]
    }, W2), t2[59] = W2, t2[60] = Q2, t2[61] = K2, t2[62] = X2, t2[63] = Y2) : Y2 = t2[63];
    const J2 = `artist-${(null == n2 ? void 0 : n2.id) || "empty"}`,
      Z2 = p2 && "animate-track-artist-in";
    let ee2, te2, ne2, ae2, re2, se2, ie2;
    return t2[64] !== Z2 ? (ee2 = x("w-full flex justify-center min-w-0", Z2), t2[64] = Z2, t2[65] = ee2) : ee2 = t2[65], t2[66] !== n2 ? (te2 = Gr.jsx(Tx, {
      song: n2,
      formatVariant: "glass",
      avatarSize: 16,
      avatarClassName: "w-4 h-4 opacity-70",
      textClassName: "text-sm sm:text-base text-white/60 hover:text-white",
      centerWhenIdle: true,
      className: "justify-center mt-0.5 max-w-full w-full"
    }), t2[66] = n2, t2[67] = te2) : te2 = t2[67], t2[68] !== J2 || t2[69] !== ee2 || t2[70] !== te2 ? (ne2 = Gr.jsx("div", {
      className: ee2,
      children: te2
    }, J2), t2[68] = J2, t2[69] = ee2, t2[70] = te2, t2[71] = ne2) : ne2 = t2[71], t2[72] !== Y2 || t2[73] !== ne2 ? (ae2 = Gr.jsxs("div", {
      "data-lyrics-contrast": true,
      className: "mt-3.5 w-full flex flex-col items-center text-center px-1 select-none overflow-hidden min-h-[52px]",
      style: H2,
      children: [Y2, ne2]
    }), t2[72] = Y2, t2[73] = ne2, t2[74] = ae2) : ae2 = t2[74], t2[75] !== o2 || t2[76] !== a2 || t2[77] !== i2 || t2[78] !== s2 || t2[79] !== r2 ? (re2 = Gr.jsx(ly, {
      duration: a2,
      accentColor: o2,
      onSeek: r2,
      handleSeekStart: s2,
      handleSeekEnd: i2
    }), t2[75] = o2, t2[76] = a2, t2[77] = i2, t2[78] = s2, t2[79] = r2, t2[80] = re2) : re2 = t2[80], t2[81] !== g2 ? (se2 = g2 && Gr.jsx("div", {
      "data-lyrics-contrast": true,
      className: "mt-2.5 w-full flex justify-center",
      children: g2
    }), t2[81] = g2, t2[82] = se2) : se2 = t2[82], t2[83] !== q2 || t2[84] !== _2 || t2[85] !== ae2 || t2[86] !== re2 || t2[87] !== se2 ? (ie2 = Gr.jsxs("div", {
      className: _2,
      children: [q2, ae2, re2, se2]
    }), t2[83] = q2, t2[84] = _2, t2[85] = ae2, t2[86] = re2, t2[87] = se2, t2[88] = ie2) : ie2 = t2[88], ie2;
  });
function uy(e2) {
  return e2.currentTime;
}
function dy(e2) {
  return e2.duration;
}
function my(e2) {
  return e2.isPlaying;
}
function fy(e2) {
  return e2.isSeeking;
}
function hy() {
  return u.getState().setIsSeeking(true);
}
function py(e2) {
  u.getState().seek(e2[0]), u.getState().setIsSeeking(false);
}
const gy = Xr.memo(function (e2) {
  const t2 = Kr.c(30),
    {
      value: n2,
      onChange: a2,
      min: r2,
      max: s2,
      step: i2,
      className: o2
    } = e2,
    l2 = void 0 === r2 ? -2 : r2,
    c2 = void 0 === s2 ? 2 : s2,
    u2 = void 0 === i2 ? 0.025 : i2,
    d2 = Qr.useRef(null);
  let m2;
  t2[0] !== c2 || t2[1] !== l2 || t2[2] !== u2 || t2[3] !== n2 ? (m2 = e3 => {
    if (!d2.current) return n2;
    const t3 = d2.current.getBoundingClientRect(),
      a3 = e3 - (t3.left + t3.width / 2),
      r3 = t3.width / 2;
    if (Math.abs(a3) <= 8) return 0;
    const s3 = Math.sign(a3),
      i3 = Math.abs(a3) - 8,
      o3 = Math.max(1, r3 - 8),
      m3 = s3 * Math.max(0, Math.min(1, i3 / o3)) * c2,
      f3 = Math.round(m3 / u2) * u2;
    return Math.max(l2, Math.min(c2, Math.round(1e3 * f3) / 1e3));
  }, t2[0] = c2, t2[1] = l2, t2[2] = u2, t2[3] = n2, t2[4] = m2) : m2 = t2[4];
  const f2 = m2;
  let h2;
  t2[5] !== f2 || t2[6] !== a2 ? (h2 = e3 => {
    e3.preventDefault(), e3.stopPropagation();
    const t3 = e3.currentTarget;
    t3.setPointerCapture(e3.pointerId);
    const n3 = f2(e3.clientX);
    a2(n3);
    const r3 = e4 => {
        a2(f2(e4.clientX));
      },
      s3 = e4 => {
        try {
          t3.releasePointerCapture(e4.pointerId);
        } catch {}
        window.removeEventListener("pointermove", r3), window.removeEventListener("pointerup", s3), window.removeEventListener("pointercancel", s3);
      };
    window.addEventListener("pointermove", r3), window.addEventListener("pointerup", s3), window.addEventListener("pointercancel", s3);
  }, t2[5] = f2, t2[6] = a2, t2[7] = h2) : h2 = t2[7];
  const p2 = h2,
    g2 = Math.max(0, Math.min(100, (n2 - l2) / (c2 - l2) * 100)),
    v2 = n2 > 0,
    y2 = n2 < 0;
  let b2;
  t2[8] !== a2 ? (b2 = e3 => {
    e3.stopPropagation(), a2(0);
  }, t2[8] = a2, t2[9] = b2) : b2 = t2[9];
  const w2 = o2 || "w-full";
  let k2, j2, S2, N2, _2;
  t2[10] !== w2 ? (k2 = x("relative h-5 flex items-center cursor-pointer touch-none select-none group", w2), t2[10] = w2, t2[11] = k2) : k2 = t2[11], t2[12] === Symbol.for("react.memo_cache_sentinel") ? (j2 = Gr.jsx("div", {
    className: "absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/40 z-10"
  }), t2[12] = j2) : j2 = t2[12], t2[13] !== v2 || t2[14] !== g2 ? (S2 = v2 && Gr.jsx("div", {
    className: "absolute top-0 bottom-0 bg-white/70 rounded-r-full",
    style: {
      left: "50%",
      width: g2 - 50 + "%"
    }
  }), t2[13] = v2, t2[14] = g2, t2[15] = S2) : S2 = t2[15], t2[16] !== y2 || t2[17] !== g2 ? (N2 = y2 && Gr.jsx("div", {
    className: "absolute top-0 bottom-0 bg-white/70 rounded-l-full",
    style: {
      left: `${g2}%`,
      width: 50 - g2 + "%"
    }
  }), t2[16] = y2, t2[17] = g2, t2[18] = N2) : N2 = t2[18], t2[19] !== S2 || t2[20] !== N2 ? (_2 = Gr.jsxs("div", {
    className: "w-full h-1 bg-white/20 rounded-full overflow-hidden relative group-hover:h-1.5 transition-[height] duration-150",
    children: [j2, S2, N2]
  }), t2[19] = S2, t2[20] = N2, t2[21] = _2) : _2 = t2[21];
  const C2 = `${g2}%`;
  let T2, E2;
  return t2[22] !== C2 ? (T2 = Gr.jsx("div", {
    className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-sm pointer-events-none group-hover:scale-110 transition-transform duration-100",
    style: {
      left: C2
    }
  }), t2[22] = C2, t2[23] = T2) : T2 = t2[23], t2[24] !== p2 || t2[25] !== _2 || t2[26] !== T2 || t2[27] !== b2 || t2[28] !== k2 ? (E2 = Gr.jsxs("div", {
    ref: d2,
    onPointerDown: p2,
    onDoubleClick: b2,
    className: k2,
    children: [_2, T2]
  }), t2[24] = p2, t2[25] = _2, t2[26] = T2, t2[27] = b2, t2[28] = k2, t2[29] = E2) : E2 = t2[29], E2;
});
function vy(e2) {
  const t2 = Kr.c(9),
    {
      label: n2,
      valueKey: a2,
      value: r2,
      onClick: s2
    } = e2;
  let i2;
  t2[0] !== n2 ? (i2 = Gr.jsx("span", {
    className: "text-white/40 group-hover:text-white/60 transition-colors",
    children: n2
  }), t2[0] = n2, t2[1] = i2) : i2 = t2[1];
  const o2 = String(a2);
  let l2, c2;
  return t2[2] !== o2 || t2[3] !== r2 ? (l2 = Gr.jsx("div", {
    className: "relative overflow-hidden h-4 flex items-center justify-end",
    children: Gr.jsx(Se, {
      id: o2,
      inline: true,
      className: "text-white font-semibold group-hover:text-primary transition-colors text-right",
      children: r2
    })
  }), t2[2] = o2, t2[3] = r2, t2[4] = l2) : l2 = t2[4], t2[5] !== s2 || t2[6] !== i2 || t2[7] !== l2 ? (c2 = Gr.jsxs("button", {
    type: "button",
    onClick: s2,
    className: "w-full flex items-center justify-between py-2 px-1 text-xs cursor-pointer border-0 bg-transparent outline-none group select-none transition-colors",
    children: [i2, l2]
  }), t2[5] = s2, t2[6] = i2, t2[7] = l2, t2[8] = c2) : c2 = t2[8], c2;
}
function xy(e2) {
  const t2 = Kr.c(11),
    {
      icon: n2,
      label: a2,
      onClick: r2,
      disabled: s2,
      active: i2,
      busy: o2
    } = e2,
    l2 = void 0 !== o2 && o2,
    c2 = l2 ? "bg-white/5 text-white/40 cursor-wait" : void 0 !== i2 && i2 ? "bg-white/20 text-white hover:text-white" : "bg-white/10 text-white/80 hover:text-white",
    u2 = !l2 && "disabled:bg-white/5 disabled:text-white/20";
  let d2, m2, f2;
  return t2[0] !== c2 || t2[1] !== u2 ? (d2 = x("w-full rounded-xl px-4 text-xs disabled:opacity-50", c2, u2), t2[0] = c2, t2[1] = u2, t2[2] = d2) : d2 = t2[2], t2[3] !== a2 ? (m2 = a2 && Gr.jsx("span", {
    children: a2
  }), t2[3] = a2, t2[4] = m2) : m2 = t2[4], t2[5] !== s2 || t2[6] !== n2 || t2[7] !== r2 || t2[8] !== d2 || t2[9] !== m2 ? (f2 = Gr.jsxs(A, {
    type: "button",
    variant: "ghost",
    size: "sm",
    disabled: s2,
    onClick: r2,
    className: d2,
    children: [n2, m2]
  }), t2[5] = s2, t2[6] = n2, t2[7] = r2, t2[8] = d2, t2[9] = m2, t2[10] = f2) : f2 = t2[10], f2;
}
const yy = Xr.memo(function (e2) {
  var t2, n2, a2, r2, s2, i2, o2, l2, c2, u2, d2, m2, f2, h2, p2, g2, v2;
  const y2 = Kr.c(37),
    {
      isOpen: b2,
      onClose: w2,
      position: k2,
      placement: j2,
      hasLyrics: S2,
      effectiveIsSynced: N2,
      checkAccess: C2,
      clipState: T2,
      onToggleClip: E2,
      onStopClip: L2,
      prefs: M2,
      mutators: R2
    } = e2,
    z2 = void 0 === j2 ? "top" : j2,
    D2 = "playing" === T2 || "fullscreen" === T2,
    F2 = null != (t2 = null == M2 ? void 0 : M2.fontSize) ? t2 : e2.fontSize,
    O2 = null != (n2 = null == R2 ? void 0 : R2.setFontSize) ? n2 : e2.setFontSize,
    $2 = null != (a2 = null == M2 ? void 0 : M2.syncMode) ? a2 : e2.syncMode,
    B2 = null != (r2 = null == R2 ? void 0 : R2.setSyncMode) ? r2 : e2.setSyncMode,
    U2 = null != (s2 = null == M2 ? void 0 : M2.textStyle) ? s2 : e2.textStyle,
    q2 = null != (i2 = null == R2 ? void 0 : R2.setTextStyle) ? i2 : e2.setTextStyle,
    H2 = null != (o2 = null == M2 ? void 0 : M2.animStyle) ? o2 : e2.animStyle,
    W2 = null != (l2 = null == R2 ? void 0 : R2.setAnimStyle) ? l2 : e2.setAnimStyle,
    V2 = null != (c2 = null == M2 ? void 0 : M2.viewMode) ? c2 : e2.viewMode,
    Q2 = null != (u2 = null == R2 ? void 0 : R2.setViewMode) ? u2 : e2.setViewMode,
    K2 = null != (d2 = null == M2 ? void 0 : M2.showTranslation) ? d2 : e2.showTranslation,
    G2 = null != (m2 = null == M2 ? void 0 : M2.lyricsOffset) ? m2 : e2.lyricsOffset,
    X2 = null != (f2 = null == R2 ? void 0 : R2.adjustOffset) ? f2 : e2.adjustOffset,
    Y2 = null != (h2 = null == R2 ? void 0 : R2.setOffset) ? h2 : e2.setOffset,
    J2 = null != (p2 = null == R2 ? void 0 : R2.handleManualSync) ? p2 : e2.handleManualSync,
    Z2 = null != (g2 = null == R2 ? void 0 : R2.handleToggleTranslation) ? g2 : e2.handleToggleTranslation,
    ee2 = null != (v2 = null == R2 ? void 0 : R2.onResetOffset) ? v2 : e2.onResetOffset,
    {
      t: te2
    } = P(),
    ne2 = Qr.useRef(null);
  let ae2, re2, se2;
  y2[0] !== b2 || y2[1] !== w2 ? (ae2 = () => {
    if (!b2) return;
    const e3 = e4 => {
        const t4 = e4.target;
        if (ne2.current && !ne2.current.contains(t4)) {
          if (null == t4 ? void 0 : t4.closest('[data-settings-trigger="true"]')) return;
          w2();
        }
      },
      t3 = e4 => {
        "Escape" === e4.key && w2();
      };
    return window.addEventListener("pointerdown", e3), window.addEventListener("keydown", t3), () => {
      window.removeEventListener("pointerdown", e3), window.removeEventListener("keydown", t3);
    };
  }, re2 = [b2, w2], y2[0] = b2, y2[1] = w2, y2[2] = ae2, y2[3] = re2) : (ae2 = y2[2], re2 = y2[3]), Qr.useEffect(ae2, re2), y2[4] === Symbol.for("react.memo_cache_sentinel") ? (se2 = ["sm", "md", "lg", "xl"], y2[4] = se2) : se2 = y2[4];
  const ie2 = se2;
  let oe2;
  y2[5] === Symbol.for("react.memo_cache_sentinel") ? (oe2 = ["both", "cover", "lyrics"], y2[5] = oe2) : oe2 = y2[5];
  const le2 = oe2;
  let ce2, ue2;
  return y2[6] !== X2 || y2[7] !== H2 || y2[8] !== C2 || y2[9] !== T2 || y2[10] !== N2 || y2[11] !== F2 || y2[12] !== J2 || y2[13] !== Z2 || y2[14] !== S2 || y2[15] !== D2 || y2[16] !== b2 || y2[17] !== G2 || y2[18] !== ee2 || y2[19] !== L2 || y2[20] !== E2 || y2[21] !== z2 || y2[22] !== k2 || y2[23] !== W2 || y2[24] !== O2 || y2[25] !== Y2 || y2[26] !== B2 || y2[27] !== q2 || y2[28] !== Q2 || y2[29] !== K2 || y2[30] !== $2 || y2[31] !== te2 || y2[32] !== U2 || y2[33] !== V2 ? (ce2 = b2 && Gr.jsx(Jr.div, {
    ref: ne2,
    initial: {
      scale: 0.95,
      y: k2 ? 0 : "bottom" === z2 ? -6 : 6
    },
    animate: {
      scale: 1,
      y: 0
    },
    exit: {
      scale: 0.95,
      y: k2 ? 0 : "bottom" === z2 ? -6 : 6,
      transition: {
        duration: 0
      }
    },
    transition: {
      duration: 0.12
    },
    className: x("z-[9999999] w-60 pointer-events-auto select-none", k2 ? "fixed" : x("absolute left-1/2 -translate-x-1/2", "bottom" === z2 ? "top-full mt-2" : "bottom-11 mb-2")),
    style: k2 ? {
      left: `${Math.min(Math.max(k2.x, 16), "undefined" != typeof window ? window.innerWidth - 260 : 16)}px`,
      top: `${Math.min(Math.max(k2.y, 16), "undefined" != typeof window ? window.innerHeight - 380 : 16)}px`
    } : void 0,
    children: Gr.jsxs("div", {
      className: x("p-3 w-full rounded-2xl overflow-hidden text-white", "media-surface shadow-none"),
      style: ny,
      children: [Gr.jsx("div", {
        className: "px-1 py-1",
        children: Gr.jsx("div", {
          className: "flex items-center justify-between w-full",
          children: ie2.map(e3 => Gr.jsx(A, {
            type: "button",
            variant: "ghost",
            size: "icon-xs",
            onClick: () => O2(e3),
            "aria-pressed": F2 === e3,
            "aria-label": te2(`lyrics.full_cover.font_size_options.${e3}`),
            className: x(F2 === e3 ? "text-white hover:text-white" : "text-white/30 hover:text-white/60"),
            children: Gr.jsx("span", {
              className: x("leading-none", "sm" === e3 && "text-xs", "md" === e3 && "text-sm", "lg" === e3 && "text-base", "xl" === e3 && "text-lg"),
              children: "A"
            })
          }, e3))
        })
      }), Gr.jsx("div", {
        className: "my-1.5 border-t border-white/10"
      }), Gr.jsx("div", {
        className: "flex items-center justify-around w-full px-1 py-1",
        children: le2.map(e3 => {
          const t3 = V2 === e3,
            n3 = "both" === e3 ? _.show : _.hide;
          return Gr.jsx(A, {
            type: "button",
            variant: "ghost",
            size: "icon-xs",
            onClick: () => Q2(e3),
            "aria-pressed": t3,
            "aria-label": te2(`lyrics.full_cover.view_mode_options.${e3}`),
            className: x(t3 ? "text-white hover:text-white" : "text-white/30 hover:text-white/60"),
            children: Gr.jsx(n3, {
              className: "h-[18px] w-[18px]"
            })
          }, e3);
        })
      }), Gr.jsx("div", {
        className: "my-1.5 border-t border-white/10"
      }), Gr.jsx(vy, {
        label: te2("lyrics.full_cover.sync_mode"),
        valueKey: $2,
        value: te2("words" === $2 ? "lyrics.full_cover.sync_mode_options.words" : "lyrics.full_cover.sync_mode_options.lines"),
        onClick: () => B2("words" === $2 ? "lines" : "words")
      }), Gr.jsx(vy, {
        label: te2("lyrics.full_cover.text_style"),
        valueKey: U2,
        value: te2(`lyrics.full_cover.text_style_options.${U2}`),
        onClick: () => {
          const e3 = ua.indexOf(U2);
          q2(ua[(e3 + 1) % ua.length]);
        }
      }), Gr.jsx(vy, {
        label: te2("lyrics.full_cover.anim_style"),
        valueKey: H2,
        value: te2(`lyrics.full_cover.anim_style_options.${H2}`),
        onClick: () => {
          const e3 = da.indexOf(H2);
          W2(da[(e3 + 1) % da.length]);
        }
      }), N2 && "number" == typeof G2 && Gr.jsxs("div", {
        className: "w-full py-2 px-1 text-xs select-none",
        children: [Gr.jsxs("div", {
          className: "flex items-center justify-between",
          children: [Gr.jsx("span", {
            className: "text-white/40 text-caption",
            children: te2("lyrics.full_cover.sync_offset")
          }), Gr.jsx("button", {
            type: "button",
            className: "text-right text-xs font-medium text-white/90 hover:text-primary transition-colors border-0 bg-transparent outline-none cursor-pointer",
            onClick: ee2,
            children: 0 !== G2 ? te2("lyrics.full_cover.offset_ms", {
              value: `${G2 > 0 ? "+" : ""}${Math.round(1e3 * G2)}`
            }) : "0"
          })]
        }), Gr.jsx("div", {
          className: "mt-2 px-0.5",
          children: Gr.jsx(gy, {
            value: G2,
            onChange: e3 => {
              Y2 ? Y2(e3) : X2 && X2(e3 - G2);
            },
            min: -2,
            max: 2,
            step: 0.025,
            className: "w-full"
          })
        })]
      }), (!N2 || S2 || E2) && Gr.jsxs("div", {
        className: "mt-2.5 flex flex-col gap-2",
        children: [!N2 && S2 && Gr.jsx(xy, {
          icon: Gr.jsx(_.refresh, {
            className: x("h-4 w-4", C2(2) ? "text-white/70" : "text-white/20")
          }),
          label: te2("lyrics.full_cover.sync_button"),
          onClick: J2,
          disabled: !C2(2)
        }), S2 && Gr.jsx(xy, {
          icon: Gr.jsx(ma, {
            className: x("h-4 w-4", C2(2) ? "text-white/70" : "text-white/20")
          }),
          label: te2(K2 ? "lyrics.full_cover.original" : "lyrics.full_cover.translate"),
          onClick: Z2,
          disabled: !C2(2),
          active: K2
        }), E2 && Gr.jsx(xy, {
          icon: "searching" === T2 ? Gr.jsx(I, {
            className: "h-4 w-4 text-white/70 animate-spin"
          }) : Gr.jsx(fa, {
            className: x("h-4 w-4", D2 ? "text-white" : "text-white/70")
          }),
          label: "searching" === T2 ? void 0 : te2(D2 ? "lyrics.full_cover.clip_disable" : "lyrics.full_cover.clip"),
          onClick: D2 && null != L2 ? L2 : E2,
          disabled: "searching" === T2,
          active: D2,
          busy: "searching" === T2
        })]
      })]
    })
  }), y2[6] = X2, y2[7] = H2, y2[8] = C2, y2[9] = T2, y2[10] = N2, y2[11] = F2, y2[12] = J2, y2[13] = Z2, y2[14] = S2, y2[15] = D2, y2[16] = b2, y2[17] = G2, y2[18] = ee2, y2[19] = L2, y2[20] = E2, y2[21] = z2, y2[22] = k2, y2[23] = W2, y2[24] = O2, y2[25] = Y2, y2[26] = B2, y2[27] = q2, y2[28] = Q2, y2[29] = K2, y2[30] = $2, y2[31] = te2, y2[32] = U2, y2[33] = V2, y2[34] = ce2) : ce2 = y2[34], y2[35] !== ce2 ? (ue2 = Gr.jsx(Yr, {
    children: ce2
  }), y2[35] = ce2, y2[36] = ue2) : ue2 = y2[36], ue2;
}, (e2, t2) => {
  var n2, a2, r2, s2, i2, o2;
  if (!e2.isOpen && !t2.isOpen) return true;
  if (e2.isOpen !== t2.isOpen) return false;
  if (e2.placement !== t2.placement) return false;
  if (e2.hasLyrics !== t2.hasLyrics) return false;
  if (e2.effectiveIsSynced !== t2.effectiveIsSynced) return false;
  if ((null == (n2 = e2.position) ? void 0 : n2.x) !== (null == (a2 = t2.position) ? void 0 : a2.x) || (null == (r2 = e2.position) ? void 0 : r2.y) !== (null == (s2 = t2.position) ? void 0 : s2.y)) return false;
  if (e2.clipState !== t2.clipState) return false;
  const l2 = null != (i2 = e2.prefs) ? i2 : e2,
    c2 = null != (o2 = t2.prefs) ? o2 : t2;
  return l2.fontSize === c2.fontSize && l2.syncMode === c2.syncMode && l2.textStyle === c2.textStyle && l2.animStyle === c2.animStyle && l2.viewMode === c2.viewMode && l2.showTranslation === c2.showTranslation && l2.lyricsOffset === c2.lyricsOffset;
});
function by(e2, t2, n2) {
  const [r2, s2] = Qr.useState(() => {
    try {
      const a2 = Ie.load(e2);
      return a2 && t2.includes(a2) ? a2 : n2;
    } catch {
      return n2;
    }
  });
  return Qr.useEffect(() => {
    try {
      Ie.save(e2, r2);
    } catch (t3) {
      a.warn("ui", "Failed to save lyrics preference:", t3);
    }
  }, [e2, r2]), [r2, s2];
}
function wy() {
  try {
    Ie.clear("lyrics_view_mode");
  } catch {}
}
function ky() {
  const e2 = u(e3 => e3.currentSong),
    t2 = u(e3 => e3.duration),
    n2 = u(e3 => e3.seek),
    r2 = Qr.useCallback(e3 => {
      const t3 = e3[0];
      le.getState().setCurrentTime(t3), u.getState().setIsSeeking(true), n2(t3), setTimeout(() => {
        u.getState().isSeeking && u.getState().setIsSeeking(false);
      }, 350);
    }, [n2]),
    s2 = u(e3 => e3.isPlaying),
    i2 = b(e3 => e3.closePanel),
    o2 = Dn(e3 => e3.lines),
    l2 = Dn(e3 => e3.isSynced),
    c2 = Dn(e3 => e3.annotations),
    d2 = Dn(e3 => e3.songId),
    m2 = Boolean(null == e2 ? void 0 : e2.id) && String(d2) === String(null == e2 ? void 0 : e2.id),
    f2 = m2 ? o2 : [],
    h2 = m2 && l2,
    p2 = Dn(e3 => e3.fetchLyrics),
    g2 = Dn(e3 => e3.currentLyricIndex),
    v2 = Dn(e3 => e3.setDisplayIndex),
    x2 = Dn(e3 => e3.isLoading),
    y2 = Qr.useRef(null),
    k2 = Qr.useRef([]),
    j2 = Rs(0),
    S2 = Qr.useRef(null),
    N2 = Qr.useRef(0),
    _2 = Qr.useRef(0),
    {
      lyricsOffset: C2
    } = fx(null == e2 ? void 0 : e2.id),
    T2 = -0.15 + C2,
    [E2, L2] = Qr.useState("normal"),
    [A2, P2] = Qr.useState("default"),
    [I2, M2] = Qr.useState("lines"),
    R2 = b(e3 => e3.panel),
    z2 = w(e3 => e3.activeTab);
  Qr.useEffect(() => {
    if ("lyrics" === R2 && "player" !== z2) try {
      L2(Ie.load(ga) || "normal"), P2(Ie.load(ha) || "default"), M2(Ie.load("dotify_lyrics_sync_mode") || "lines");
    } catch (e3) {
      a.warn("ui", "Failed to load lyrics settings on panel open:", e3);
    }
  }, [R2, z2]), Qr.useEffect(() => {
    if (!e2) return S2.current = null, void i2();
    S2.current = String(e2.id), p2(e2, t2);
  }, [null == e2 ? void 0 : e2.id, t2, i2, p2]), Qr.useEffect(() => {
    if ("lyrics" !== R2) return;
    if (!e2) return void i2();
    const t3 = String(d2) === String(e2.id);
    S2.current === String(e2.id) && t3 && !x2 && 0 === o2.length && (u.getState().queueSongs.length > 0 ? b.setState({
      panel: "queue"
    }) : i2());
  }, [R2, null == e2 ? void 0 : e2.id, d2, x2, o2.length, i2]);
  const D2 = Qr.useMemo(() => va(f2, c2), [c2, f2]);
  ey({
    effectiveLyricsLines: f2,
    effectiveIsSynced: h2,
    effectiveSyncOffset: T2,
    duration: t2,
    lastManualLineClickTime: _2,
    songId: null == e2 ? void 0 : e2.id
  }), Qr.useLayoutEffect(() => {
    "lyrics" === R2 && (N2.current = 0, _2.current = 0);
  }, [R2, null == e2 ? void 0 : e2.id]);
  Qr.useEffect(() => {
    v2(g2);
  }, [g2, v2]);
  const {
      scrollToActive: F2
    } = Dx({
      activeIndex: g2,
      lineCount: f2.length,
      scrollKey: `${null == e2 ? void 0 : e2.id}_${R2}`,
      containerRef: y2,
      lineRefs: k2,
      lastUserScrollTime: N2,
      isSynced: h2
    }),
    O2 = Qr.useRef(false);
  Qr.useEffect(() => {
    if ("lyrics" === R2 && f2.length > 0 && !O2.current) {
      if (O2.current = true, h2) {
        F2(true);
        const e3 = setTimeout(() => F2(true), 60),
          t3 = setTimeout(() => F2(true), 250);
        return () => {
          clearTimeout(e3), clearTimeout(t3);
        };
      }
    } else "lyrics" !== R2 && (O2.current = false);
  }, [R2, f2.length, h2, F2]);
  const $2 = Qr.useRef(null);
  return Qr.useEffect(() => {
    const t3 = null == e2 ? void 0 : e2.id;
    if (f2.length > 0 && t3 && $2.current !== t3 && ($2.current = t3, h2)) {
      const e3 = setTimeout(() => F2(true), 50);
      return () => clearTimeout(e3);
    }
  }, [f2.length, null == e2 ? void 0 : e2.id, h2, F2]), e2 ? !m2 || x2 ? Gr.jsx(Sy, {}) : 0 === f2.length ? null : Gr.jsx("div", {
    className: "h-full flex flex-col overflow-hidden px-5 pt-4 pb-5 [--lyrics-ink:var(--foreground)]",
    children: Gr.jsx("div", {
      ref: y2,
      className: "flex-1 relative overflow-y-auto overscroll-contain scrollbar-hide",
      style: {
        overflowAnchor: "none"
      },
      onWheel: () => {
        N2.current = Date.now();
      },
      onTouchMove: () => {
        N2.current = Date.now();
      },
      children: Gr.jsx(Yx, {
        effectiveLyricsLines: f2,
        displayIndex: g2,
        currentLyricIndex: g2,
        annotationByLineIndex: D2,
        lineRefs: k2,
        isPlaying: s2,
        effectiveSyncOffset: T2,
        effectiveIsSynced: h2,
        syncMode: I2,
        animStyle: A2,
        textStyle: E2,
        fontSize: "md",
        accentColor: "#ffffff",
        handleSeekEnd: r2,
        onLineClick: e3 => {
          const t3 = f2[e3];
          if (!t3) return;
          Dn.getState().setCurrentLyricIndex(e3), v2(e3);
          const n3 = Date.now();
          _2.current = n3, N2.current = n3, F2(false, e3), "number" == typeof t3.timestamp && t3.timestamp >= 0 && r2([t3.timestamp]);
        },
        containerY: j2,
        isPanel: true,
        containerClassName: "space-y-2 pb-[40vh] pt-[30vh] relative optimize-layout-vertical gpu-accelerated"
      })
    })
  }) : null;
}
const jy = ["w-3/4", "w-1/2", "w-2/3", "w-5/12", "w-3/5", "w-1/2", "w-2/3", "w-3/4", "w-1/2", "w-3/5"];
function Sy() {
  const e2 = Kr.c(1);
  let t2;
  return e2[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = Gr.jsx("div", {
    className: "grid h-full min-h-0 overflow-hidden px-5 py-5 animate-in fade-in duration-300",
    "aria-busy": "true",
    style: {
      gridTemplateRows: `repeat(${jy.length}, minmax(0, 1fr))`
    },
    children: jy.map(Ny)
  }), e2[0] = t2) : t2 = e2[0], t2;
}
function Ny(e2, t2) {
  return Gr.jsx(Ji, {
    className: x("h-5 max-h-full self-center rounded-lg", e2)
  }, t2);
}
const _y = Qr.memo(function (e2) {
    const t2 = Kr.c(5),
      {
        className: n2
      } = e2;
    let a2, r2, s2, i2;
    return t2[0] === Symbol.for("react.memo_cache_sentinel") ? (a2 = Gr.jsx("path", {
      d: "M8 1.5a4.5 4.5 0 0 1 4.5 4.5v0.5H8V1.5z",
      fill: "currentColor",
      stroke: "none",
      opacity: "0.9"
    }), r2 = Gr.jsx("rect", {
      x: "3.5",
      y: "1.5",
      width: "9",
      height: "13",
      rx: "4.5",
      strokeWidth: "1.25"
    }), s2 = Gr.jsx("path", {
      d: "M8 1.5V6.5M3.5 6.5h9",
      strokeWidth: "1.25",
      strokeLinecap: "round"
    }), t2[0] = a2, t2[1] = r2, t2[2] = s2) : (a2 = t2[0], r2 = t2[1], s2 = t2[2]), t2[3] !== n2 ? (i2 = Gr.jsxs("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      className: n2,
      "aria-hidden": "true",
      children: [a2, r2, s2]
    }), t2[3] = n2, t2[4] = i2) : i2 = t2[4], i2;
  }),
  Cy = Qr.memo(function (e2) {
    const t2 = Kr.c(6),
      {
        visible: n2,
        prefix: a2,
        suffix: r2
      } = e2;
    let s2, i2;
    return t2[0] !== a2 || t2[1] !== r2 || t2[2] !== n2 ? (s2 = n2 && Gr.jsxs(Jr.div, {
      initial: {
        opacity: 0,
        y: 3
      },
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        y: 2
      },
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1]
      },
      className: "flex items-center gap-1.5 text-caption font-normal tracking-normal text-white/50 pointer-events-none select-none pb-0.5 whitespace-nowrap",
      children: [Gr.jsx("span", {
        children: a2
      }), Gr.jsx(_y, {
        className: "w-3.5 h-3.5 text-white/80 shrink-0 inline-block align-middle"
      }), Gr.jsx("span", {
        children: r2
      })]
    }), t2[0] = a2, t2[1] = r2, t2[2] = n2, t2[3] = s2) : s2 = t2[3], t2[4] !== s2 ? (i2 = Gr.jsx(Yr, {
      children: s2
    }), t2[4] = s2, t2[5] = i2) : i2 = t2[5], i2;
  }),
  Ty = Qr.memo(function (e2) {
    const t2 = Kr.c(298),
      {
        onExit: n2
      } = e2,
      {
        currentSong: r2,
        duration: s2,
        isPlaying: i2,
        toggle: o2,
        prev: l2,
        next: c2,
        handleSeek: d2,
        handleSeekStart: m2,
        handleSeekEnd: f2
      } = function () {
        const e3 = Kr.c(4),
          t3 = cp(),
          n3 = up(),
          a2 = u(dp);
        let r3;
        return e3[0] !== n3 || e3[1] !== t3 || e3[2] !== a2 ? (r3 = {
          ...t3,
          ...n3,
          isPlaying: a2
        }, e3[0] = n3, e3[1] = t3, e3[2] = a2, e3[3] = r3) : r3 = e3[3], r3;
      }(),
      {
        t: h2
      } = P(),
      p2 = xa(),
      {
        checkAccess: g2,
        showPremiumDialog: y2
      } = ni(),
      b2 = ya(null == r2 ? void 0 : r2.id, 400),
      w2 = Dn(Ey),
      k2 = Dn(Ly),
      j2 = Dn(Ay),
      S2 = Dn(Py),
      N2 = Boolean(null == r2 ? void 0 : r2.id) && String(k2) === String(null == r2 ? void 0 : r2.id);
    let _2;
    t2[0] !== N2 || t2[1] !== w2 ? (_2 = N2 ? w2 : [], t2[0] = N2, t2[1] = w2, t2[2] = _2) : _2 = t2[2];
    const C2 = _2,
      T2 = N2 && S2,
      E2 = !N2 || j2,
      L2 = Dn(Iy),
      A2 = Dn(My),
      I2 = Dn(Ry),
      M2 = Dn(zy),
      R2 = Dn(Dy),
      z2 = Dn(Fy),
      D2 = Dn(Oy),
      [F2, O2] = Qr.useState(false),
      [$2, B2] = Qr.useState(null),
      {
        volume: U2,
        isMuted: q2,
        handleVolumeChange: H2,
        handleWheelVolume: W2
      } = ba(),
      V2 = Qr.useRef(0),
      Q2 = Qr.useRef(0),
      K2 = Qr.useRef(null);
    let G2;
    t2[3] === Symbol.for("react.memo_cache_sentinel") ? (G2 = [], t2[3] = G2) : G2 = t2[3];
    const X2 = Qr.useRef(G2),
      Y2 = Rs(0),
      [J2, Z2] = Qr.useState(false);
    let ee2;
    t2[4] === Symbol.for("react.memo_cache_sentinel") ? (ee2 = [], t2[4] = ee2) : ee2 = t2[4];
    const [te2, ne2] = Qr.useState(ee2),
      {
        syncMode: ae2,
        setSyncMode: re2,
        fontSize: se2,
        setFontSize: ie2,
        textStyle: oe2,
        setTextStyle: ce2,
        animStyle: ue2,
        setAnimStyle: de2
      } = function () {
        const e3 = Kr.c(14);
        let t3;
        e3[0] === Symbol.for("react.memo_cache_sentinel") ? (t3 = ["lines", "words"], e3[0] = t3) : t3 = e3[0];
        const [n3, a2] = by("dotify_lyrics_sync_mode", t3, "lines");
        let r3;
        e3[1] === Symbol.for("react.memo_cache_sentinel") ? (r3 = ["sm", "md", "lg", "xl"], e3[1] = r3) : r3 = e3[1];
        const [s3, i3] = by(pa, r3, "md");
        let o3;
        e3[2] === Symbol.for("react.memo_cache_sentinel") ? (o3 = ["normal", "scale", "blur", "cinematic", "shift"], e3[2] = o3) : o3 = e3[2];
        const [l3, c3] = by(ga, o3, "normal");
        let u2;
        e3[3] === Symbol.for("react.memo_cache_sentinel") ? (u2 = ["default", "fade", "blur", "flip3d", "bounce", "wave", "float", "drift", "zoom"], e3[3] = u2) : u2 = e3[3];
        const [d3, m3] = by(ha, u2, "default");
        let f3, h3;
        return e3[4] === Symbol.for("react.memo_cache_sentinel") ? (f3 = [], e3[4] = f3) : f3 = e3[4], Qr.useEffect(wy, f3), e3[5] !== d3 || e3[6] !== s3 || e3[7] !== m3 || e3[8] !== i3 || e3[9] !== a2 || e3[10] !== c3 || e3[11] !== n3 || e3[12] !== l3 ? (h3 = {
          syncMode: n3,
          setSyncMode: a2,
          fontSize: s3,
          setFontSize: i3,
          textStyle: l3,
          setTextStyle: c3,
          animStyle: d3,
          setAnimStyle: m3
        }, e3[5] = d3, e3[6] = s3, e3[7] = m3, e3[8] = i3, e3[9] = a2, e3[10] = c3, e3[11] = n3, e3[12] = l3, e3[13] = h3) : h3 = e3[13], h3;
      }(),
      {
        lyricsOffset: me2,
        setLyricsOffset: fe2,
        resetLyricsOffset: he2,
        adjustLyricsOffset: pe2
      } = fx(null == r2 ? void 0 : r2.id),
      [ge2, ve2] = Qr.useState("both"),
      [ye2, be2] = Qr.useState(false);
    let we2;
    t2[5] !== r2 || t2[6] !== p2 ? (we2 = r2 ? p2(r2) : null, t2[5] = r2, t2[6] = p2, t2[7] = we2) : we2 = t2[7];
    const ke2 = we2,
      {
        topCover: je2,
        bottomCover: Se2,
        showTop: Ne2
      } = ca(ke2),
      _e2 = ox(r2),
      [Ce2, Te2] = Qr.useState(false),
      Ee2 = function (e3) {
        const t3 = Kr.c(3),
          [n3, a2] = Qr.useState("#ffffff");
        let r3, s3;
        return t3[0] !== e3 ? (r3 = () => {
          if (!e3) return void a2("#ffffff");
          let t4 = false;
          return v(e3, true).then(e4 => {
            t4 || a2(e4 ? `rgb(${e4.r}, ${e4.g}, ${e4.b})` : "#ffffff");
          }), () => {
            t4 = true;
          };
        }, s3 = [e3], t3[0] = e3, t3[1] = r3, t3[2] = s3) : (r3 = t3[1], s3 = t3[2]), Qr.useEffect(r3, s3), n3;
      }(ke2),
      {
        triggerTranslation: Le2
      } = function () {
        const e3 = Dn(e4 => e4.applyTranslation);
        return {
          triggerTranslation: async (t3, n3) => {
            if (t3.length) try {
              const r3 = n3 ? JSON.stringify(t3.map(e4 => ({
                  ...e4,
                  translation: void 0
                }))) : t3.map(e4 => e4.text).join("\n"),
                s3 = await xe.translateLyrics({
                  text: r3,
                  target: "auto",
                  synced: n3
                });
              if (s3 && s3.translated_text) {
                const r4 = s3.translated_text;
                if (n3) try {
                  const n4 = JSON.parse(r4);
                  e3(t3.map((e4, t4) => {
                    const a2 = n4[t4];
                    return {
                      ...e4,
                      translation: (null == a2 ? void 0 : a2.text) || ("string" == typeof a2 ? a2 : void 0)
                    };
                  }));
                } catch {
                  a.warn("audio", "Failed to parse translated lines JSON");
                } else {
                  const n4 = r4.split("\n");
                  e3(t3.map((e4, t4) => ({
                    ...e4,
                    translation: n4[t4]
                  })));
                }
              }
            } catch (r3) {
              a.error("audio", "Translation failed:", r3);
            }
          }
        };
      }();
    let Ae2;
    t2[8] !== r2 || t2[9] !== i2 ? (Ae2 = {
      song: r2,
      isPlaying: i2
    }, t2[8] = r2, t2[9] = i2, t2[10] = Ae2) : Ae2 = t2[10];
    const {
        clipState: Pe2,
        videoRef: Ie2,
        videoStreamUrl: Me2,
        videoVisible: Re2,
        setVideoVisible: ze2,
        toggleClip: De2,
        stopClip: Fe2
      } = function ({
        song: e3,
        isPlaying: t3,
        currentTime: n3
      }) {
        const r3 = Qr.useRef(null),
          [s3, i3] = Qr.useState("idle"),
          [o3, l3] = Qr.useState(null),
          [c3, u2] = Qr.useState(null),
          [d3, m3] = Qr.useState(false);
        Qr.useEffect(() => {
          if (!Boolean(null == o3 ? void 0 : o3.videoId) || "playing" !== s3 && "fullscreen" !== s3) return u2(null), void m3(false);
          if (!(null == o3 ? void 0 : o3.streamUrl)) return void i3("error");
          const e4 = o3.streamUrl;
          u2(t4 => t4 === e4 ? t4 : (m3(false), e4));
        }, [null == o3 ? void 0 : o3.streamUrl, null == o3 ? void 0 : o3.videoId, s3]), Qr.useEffect(() => {
          c3 && r3.current && (t3 ? r3.current.play().catch(() => {}) : r3.current.pause());
        }, [t3, c3]), Qr.useEffect(() => {
          if (!c3 || !t3) return;
          const e4 = e5 => {
            if (!r3.current) return;
            const t4 = Math.abs(r3.current.currentTime - e5);
            t4 <= 1.5 || (t4 > 2.5 && m3(false), r3.current.currentTime = e5);
          };
          if (void 0 === n3) return le.subscribe(t4 => {
            e4(t4.currentTime);
          });
          e4(n3);
        }, [n3, t3, c3]), Qr.useEffect(() => {
          i3("idle"), l3(null);
        }, [null == e3 ? void 0 : e3.id]);
        const f3 = Qr.useCallback(() => {
          i3("idle"), l3(null), u2(null), m3(false);
        }, []);
        return {
          clipState: s3,
          videoRef: r3,
          videoStreamUrl: c3,
          videoVisible: d3,
          setVideoVisible: m3,
          toggleClip: async () => {
            if (e3) if ("playing" !== s3) {
              if ("fullscreen" === s3) return i3("idle"), void l3(null);
              if ("idle" === s3 || "error" === s3) {
                i3("searching");
                try {
                  a.info("audio", "Fetching track clip:", {
                    artist: e3.artist,
                    title: e3.title
                  });
                  const t4 = await xe.getTrackClip(e3.artist, e3.title);
                  if (!(null == t4 ? void 0 : t4.videoId)) return a.warn("audio", "Failed to fetch clip: result is empty or invalid"), void i3("error");
                  l3(t4), i3("playing");
                } catch (t4) {
                  a.error("audio", "Failed to fetch clip:", t4), i3("error");
                }
              }
            } else i3("fullscreen");
          },
          stopClip: f3
        };
      }(Ae2),
      Oe2 = -0.15 + me2;
    let $e2;
    t2[11] !== r2 || t2[12] !== s2 || t2[13] !== ye2 || t2[14] !== I2 || t2[15] !== Le2 ? ($e2 = async () => {
      if (!r2) return;
      await I2(r2, s2);
      const e3 = Dn.getState().lines,
        t3 = Dn.getState().isSynced;
      ye2 && e3.length > 0 && Le2(e3, t3);
    }, t2[11] = r2, t2[12] = s2, t2[13] = ye2, t2[14] = I2, t2[15] = Le2, t2[16] = $e2) : $e2 = t2[16];
    const Be2 = $e2;
    let Ue2;
    t2[17] !== Be2 ? (Ue2 = () => {
      Q2.current = 0, V2.current = 0, Be2();
    }, t2[17] = Be2, t2[18] = Ue2) : Ue2 = t2[18];
    const qe2 = null == r2 ? void 0 : r2.id;
    let He2, We2;
    t2[19] !== qe2 ? (He2 = [qe2], t2[19] = qe2, t2[20] = He2) : He2 = t2[20], Qr.useEffect(Ue2, He2), t2[21] === Symbol.for("react.memo_cache_sentinel") ? (We2 = () => {
      Te2(false);
    }, t2[21] = We2) : We2 = t2[21];
    const Ve2 = null == r2 ? void 0 : r2.id;
    let Qe2, Ke2;
    t2[22] !== _e2 || t2[23] !== Ve2 ? (Qe2 = [Ve2, _e2], t2[22] = _e2, t2[23] = Ve2, t2[24] = Qe2) : Qe2 = t2[24], Qr.useEffect(We2, Qe2), t2[25] !== g2 || t2[26] !== T2 || t2[27] !== w2 || t2[28] !== ye2 || t2[29] !== z2 || t2[30] !== Le2 ? (Ke2 = () => {
      g2(2) && (ye2 ? (be2(false), z2(w2.map($y))) : (be2(true), Le2(w2, T2)));
    }, t2[25] = g2, t2[26] = T2, t2[27] = w2, t2[28] = ye2, t2[29] = z2, t2[30] = Le2, t2[31] = Ke2) : Ke2 = t2[31];
    const Ge2 = Ke2;
    let Xe2;
    t2[32] === Symbol.for("react.memo_cache_sentinel") ? (Xe2 = () => {
      O2(false), B2(null);
    }, t2[32] = Xe2) : Xe2 = t2[32];
    const Ye2 = Xe2;
    let Je2;
    t2[33] !== C2 ? (Je2 = C2.filter(By), t2[33] = C2, t2[34] = Je2) : Je2 = t2[34];
    const Ze2 = Je2;
    let et2;
    e: {
      if (T2 && C2.length > 0) {
        let e4;
        t2[35] !== C2 ? (e4 = C2.filter(Uy), t2[35] = C2, t2[36] = e4) : e4 = t2[36], et2 = e4;
        break e;
      }
      let e3;
      t2[37] === Symbol.for("react.memo_cache_sentinel") ? (e3 = [], t2[37] = e3) : e3 = t2[37], et2 = e3;
    }
    const tt2 = J2 || T2,
      nt2 = J2 ? te2 : T2 ? et2 : Ze2,
      at2 = nt2.length > 0,
      {
        mounted: rt2,
        isHovering: st2,
        isClosing: it2,
        isFullyOpen: ot2,
        showRightClickHint: lt2,
        dismissHint: ct2,
        handleMouseMove: ut2,
        handleMouseLeave: dt2,
        requestExit: mt2
      } = function (e3, t3) {
        const [n3, a2] = Qr.useState(false),
          [r3, s3] = Qr.useState(false),
          [i3, o3] = Qr.useState(false),
          [l3, c3] = Qr.useState(false),
          [u2, d3] = Qr.useState(false),
          m3 = Qr.useRef(void 0),
          f3 = Qr.useRef(void 0),
          h3 = Qr.useRef(void 0),
          p3 = Qr.useRef(false),
          g3 = Qr.useRef(false),
          v2 = Qr.useRef(e3);
        v2.current = e3;
        const x2 = Qr.useCallback(() => {
            clearTimeout(f3.current), d3(false);
          }, []),
          y3 = Qr.useCallback(() => {
            s3(true), clearTimeout(m3.current), m3.current = setTimeout(() => s3(false), 2800);
          }, []),
          b3 = Qr.useCallback(() => {
            clearTimeout(m3.current), s3(false);
          }, []),
          w3 = Qr.useCallback(() => {
            g3.current || (g3.current = true, c3(false), o3(true), h3.current = setTimeout(() => v2.current(), 340));
          }, []);
        return Qr.useEffect(() => {
          a2(true);
          const e4 = setTimeout(() => c3(true), 350);
          return () => {
            clearTimeout(e4), clearTimeout(m3.current), clearTimeout(f3.current), clearTimeout(h3.current);
          };
        }, []), Qr.useEffect(() => {
          if (!l3) return p3.current = false, void x2();
          t3 && !p3.current && (p3.current = true, d3(true), f3.current = setTimeout(() => d3(false), 2e3));
        }, [l3, t3, x2]), {
          mounted: n3,
          isHovering: r3,
          isClosing: i3,
          isFullyOpen: l3,
          showRightClickHint: u2,
          dismissHint: x2,
          handleMouseMove: y3,
          handleMouseLeave: b3,
          requestExit: w3
        };
      }(n2, at2);
    let ft2;
    t2[38] !== ct2 ? (ft2 = (e3, t3) => {
      B2({
        x: e3,
        y: t3
      }), O2(true), ct2();
    }, t2[38] = ct2, t2[39] = ft2) : ft2 = t2[39];
    const ht2 = ft2;
    let pt2, gt2;
    t2[40] !== mt2 ? (pt2 = () => {
      const e3 = e4 => {
        const t3 = e4.target;
        t3 && ("INPUT" === t3.tagName || "TEXTAREA" === t3.tagName || t3.isContentEditable) || ("Escape" === e4.key ? mt2() : "l" !== e4.key && "L" !== e4.key && "\u0434" !== e4.key && "\u0414" !== e4.key || ve2(qy));
      };
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, t2[40] = mt2, t2[41] = pt2) : pt2 = t2[41], t2[42] !== it2 ? (gt2 = [it2], t2[42] = it2, t2[43] = gt2) : gt2 = t2[43], Qr.useEffect(pt2, gt2);
    const vt2 = null == r2 ? void 0 : r2.id;
    let xt2;
    t2[44] !== s2 || t2[45] !== tt2 || t2[46] !== nt2 || t2[47] !== Oe2 || t2[48] !== vt2 ? (xt2 = {
      effectiveLyricsLines: nt2,
      effectiveIsSynced: tt2,
      effectiveSyncOffset: Oe2,
      duration: s2,
      lastManualLineClickTime: Q2,
      songId: vt2
    }, t2[44] = s2, t2[45] = tt2, t2[46] = nt2, t2[47] = Oe2, t2[48] = vt2, t2[49] = xt2) : xt2 = t2[49], ey(xt2);
    const yt2 = null == r2 ? void 0 : r2.id;
    let bt2;
    t2[50] !== L2 || t2[51] !== tt2 || t2[52] !== nt2.length || t2[53] !== yt2 ? (bt2 = {
      activeIndex: L2,
      lineCount: nt2.length,
      scrollKey: yt2,
      containerRef: K2,
      lineRefs: X2,
      lastUserScrollTime: V2,
      idleReturnDelay: 1200,
      isSynced: tt2
    }, t2[50] = L2, t2[51] = tt2, t2[52] = nt2.length, t2[53] = yt2, t2[54] = bt2) : bt2 = t2[54];
    const {
      scrollToActive: wt2
    } = Dx(bt2);
    let kt2;
    t2[55] !== ct2 ? (kt2 = () => {
      V2.current = Date.now(), ct2();
    }, t2[55] = ct2, t2[56] = kt2) : kt2 = t2[56];
    const jt2 = kt2;
    let St2;
    t2[57] !== at2 || t2[58] !== ht2 ? (St2 = e3 => {
      at2 && ht2(e3.clientX, e3.clientY);
    }, t2[57] = at2, t2[58] = ht2, t2[59] = St2) : St2 = t2[59];
    const Nt2 = St2,
      _t2 = Qr.useRef(false);
    let Ct2, Tt2;
    t2[60] !== ot2 || t2[61] !== wt2 ? (Ct2 = () => {
      ot2 && !_t2.current ? (_t2.current = true, wt2(true)) : ot2 || (_t2.current = false);
    }, Tt2 = [ot2, wt2], t2[60] = ot2, t2[61] = wt2, t2[62] = Ct2, t2[63] = Tt2) : (Ct2 = t2[62], Tt2 = t2[63]), Qr.useEffect(Ct2, Tt2);
    const Et2 = Qr.useRef(null);
    let Lt2;
    t2[64] !== (null == r2 ? void 0 : r2.id) || t2[65] !== nt2.length || t2[66] !== wt2 ? (Lt2 = () => {
      const e3 = null == r2 ? void 0 : r2.id;
      if (nt2.length > 0 && e3 && Et2.current !== e3) {
        Et2.current = e3;
        const t3 = setTimeout(() => {
          wt2(true);
        }, 50);
        return () => clearTimeout(t3);
      }
    }, t2[64] = null == r2 ? void 0 : r2.id, t2[65] = nt2.length, t2[66] = wt2, t2[67] = Lt2) : Lt2 = t2[67];
    const At2 = null == r2 ? void 0 : r2.id;
    let Pt2, It2;
    t2[68] !== nt2.length || t2[69] !== wt2 || t2[70] !== At2 ? (Pt2 = [nt2.length, At2, wt2], t2[68] = nt2.length, t2[69] = wt2, t2[70] = At2, t2[71] = Pt2) : Pt2 = t2[71], Qr.useEffect(Lt2, Pt2), t2[72] !== d2 ? (It2 = e3 => {
      V2.current = 0, Q2.current = 0, d2(e3);
    }, t2[72] = d2, t2[73] = It2) : It2 = t2[73];
    const Mt2 = It2;
    let Rt2;
    t2[74] !== m2 ? (Rt2 = () => {
      V2.current = 0, Q2.current = 0, m2();
    }, t2[74] = m2, t2[75] = Rt2) : Rt2 = t2[75];
    const zt2 = Rt2;
    let Dt2;
    t2[76] !== f2 || t2[77] !== wt2 ? (Dt2 = e3 => {
      f2(e3), Date.now() - (Q2.current || 0) > 600 && (V2.current = 0, wt2(false));
    }, t2[76] = f2, t2[77] = wt2, t2[78] = Dt2) : Dt2 = t2[78];
    const Ft2 = Dt2;
    let Ot2;
    t2[79] !== g2 || t2[80] !== s2 || t2[81] !== Ze2 || t2[82] !== y2 || t2[83] !== h2 ? (Ot2 = () => {
      if (g2(2)) {
        if (Ze2.length > 0 && s2 > 0) {
          const e3 = s2 / Ze2.length,
            t3 = Ze2.map((t4, n3) => {
              let a2 = n3 * e3;
              return 1 === Ze2.length && (a2 = 0), n3 === Ze2.length - 1 && (a2 = Math.max(0, s2 - 0.01)), {
                timestamp: a2,
                text: t4.text
              };
            });
          ne2(t3), Z2(true);
        }
      } else y2(h2("lyrics.full_cover.sync_button"), 2);
    }, t2[79] = g2, t2[80] = s2, t2[81] = Ze2, t2[82] = y2, t2[83] = h2, t2[84] = Ot2) : Ot2 = t2[84];
    const $t2 = Ot2;
    let Bt2;
    t2[85] !== Y2 ? (Bt2 = () => {
      Z2(false), ne2([]), Y2.set(0), X2.current = [], Q2.current = 0, V2.current = 0;
    }, t2[85] = Y2, t2[86] = Bt2) : Bt2 = t2[86];
    const Ut2 = null == r2 ? void 0 : r2.id;
    let qt2, Ht2;
    t2[87] !== Y2 || t2[88] !== w2 || t2[89] !== Ut2 ? (qt2 = [Ut2, w2, Y2], t2[87] = Y2, t2[88] = w2, t2[89] = Ut2, t2[90] = qt2) : qt2 = t2[90], Qr.useLayoutEffect(Bt2, qt2), t2[91] !== ct2 || t2[92] !== nt2 || t2[93] !== f2 || t2[94] !== m2 || t2[95] !== wt2 || t2[96] !== M2 || t2[97] !== R2 ? (Ht2 = e3 => {
      ct2();
      const t3 = nt2[e3];
      if (!t3) return;
      M2(e3), R2(e3);
      const n3 = Date.now();
      Q2.current = n3, V2.current = n3, wt2(false, e3), "number" == typeof t3.timestamp && t3.timestamp >= 0 && (m2(), le.getState().setCurrentTime(t3.timestamp), f2([t3.timestamp]));
    }, t2[91] = ct2, t2[92] = nt2, t2[93] = f2, t2[94] = m2, t2[95] = wt2, t2[96] = M2, t2[97] = R2, t2[98] = Ht2) : Ht2 = t2[98];
    const Wt2 = Ht2;
    let Vt2;
    t2[99] !== D2 || t2[100] !== nt2 ? (Vt2 = va(nt2, D2), t2[99] = D2, t2[100] = nt2, t2[101] = Vt2) : Vt2 = t2[101];
    const Qt2 = Vt2,
      Kt2 = at2 && "cover" !== ge2,
      Gt2 = u(Hy),
      Xt2 = u(Wy),
      Yt2 = u(Vy),
      Jt2 = Qy,
      Zt2 = Ky,
      en2 = st2 ? 1 : 0;
    let tn2, nn2;
    t2[102] !== en2 ? (tn2 = {
      opacity: en2
    }, t2[102] = en2, t2[103] = tn2) : tn2 = t2[103], t2[104] === Symbol.for("react.memo_cache_sentinel") ? (nn2 = {
      duration: 0.25
    }, t2[104] = nn2) : nn2 = t2[104];
    const an2 = st2 ? "auto" : "none";
    let rn2, sn2, on2;
    t2[105] !== an2 ? (rn2 = {
      pointerEvents: an2
    }, t2[105] = an2, t2[106] = rn2) : rn2 = t2[106], t2[107] !== r2 || t2[108] !== i2 || t2[109] !== c2 || t2[110] !== o2 || t2[111] !== l2 || t2[112] !== Xt2 || t2[113] !== Gt2 || t2[114] !== Yt2 ? (sn2 = Gr.jsx(Jv, {
      size: "lg",
      currentSong: r2,
      repeatMode: Gt2,
      isPlaying: i2,
      isShuffled: Xt2,
      shuffleType: Yt2,
      toggle: o2,
      prev: l2,
      next: c2,
      toggleRepeatMode: Jt2,
      toggleShuffle: Zt2,
      className: "gap-2 sm:gap-3 lg:gap-4",
      skipButtonClassName: "text-white/70 hover:text-white",
      playButtonClassName: "text-white/90 hover:text-white"
    }), t2[107] = r2, t2[108] = i2, t2[109] = c2, t2[110] = o2, t2[111] = l2, t2[112] = Xt2, t2[113] = Gt2, t2[114] = Yt2, t2[115] = sn2) : sn2 = t2[115], t2[116] !== tn2 || t2[117] !== rn2 || t2[118] !== sn2 ? (on2 = Gr.jsx(Jr.div, {
      className: "w-full flex flex-col items-center",
      animate: tn2,
      transition: nn2,
      style: rn2,
      children: sn2
    }), t2[116] = tn2, t2[117] = rn2, t2[118] = sn2, t2[119] = on2) : on2 = t2[119];
    const ln2 = on2;
    let cn2;
    t2[120] !== Qt2 || t2[121] !== L2 || t2[122] !== E2 || t2[123] !== A2 || t2[124] !== tt2 || t2[125] !== nt2 ? (cn2 = {
      effectiveIsSynced: tt2,
      effectiveLyricsLines: nt2,
      displayIndex: A2,
      currentLyricIndex: L2,
      annotationByLineIndex: Qt2,
      isLoadingLyrics: E2
    }, t2[120] = Qt2, t2[121] = L2, t2[122] = E2, t2[123] = A2, t2[124] = tt2, t2[125] = nt2, t2[126] = cn2) : cn2 = t2[126];
    const un2 = cn2;
    let dn2;
    t2[127] !== Ee2 || t2[128] !== ue2 || t2[129] !== se2 || t2[130] !== oe2 ? (dn2 = {
      animStyle: ue2,
      textStyle: oe2,
      fontSize: se2,
      accentColor: Ee2
    }, t2[127] = Ee2, t2[128] = ue2, t2[129] = se2, t2[130] = oe2, t2[131] = dn2) : dn2 = t2[131];
    const mn2 = dn2;
    let fn2;
    t2[132] !== Oe2 || t2[133] !== i2 || t2[134] !== ae2 ? (fn2 = {
      isPlaying: i2,
      effectiveSyncOffset: Oe2,
      syncMode: ae2
    }, t2[132] = Oe2, t2[133] = i2, t2[134] = ae2, t2[135] = fn2) : fn2 = t2[135];
    const hn2 = fn2,
      pn2 = "lyrics" === ge2 || "fullscreen" === Pe2;
    let gn2;
    t2[136] !== Y2 || t2[137] !== ke2 || t2[138] !== r2 || t2[139] !== b2 || t2[140] !== pn2 || t2[141] !== ge2 ? (gn2 = {
      lineRefs: X2,
      lyricsWrapRef: K2,
      containerY: Y2,
      wide: pn2,
      viewMode: ge2,
      currentSong: r2,
      coverArt: ke2,
      isAnimating: b2
    }, t2[136] = Y2, t2[137] = ke2, t2[138] = r2, t2[139] = b2, t2[140] = pn2, t2[141] = ge2, t2[142] = gn2) : gn2 = t2[142];
    const vn2 = gn2;
    let xn2;
    t2[143] !== Wt2 || t2[144] !== Nt2 || t2[145] !== jt2 || t2[146] !== Ft2 ? (xn2 = {
      handleSeekEnd: Ft2,
      onLineClick: Wt2,
      onUserScroll: jt2,
      onContextMenu: Nt2
    }, t2[143] = Wt2, t2[144] = Nt2, t2[145] = jt2, t2[146] = Ft2, t2[147] = xn2) : xn2 = t2[147];
    const yn2 = xn2;
    if (!rt2) return null;
    const bn2 = ot2 && "full-cover-fully-open",
      wn2 = !st2 && "cursor-none";
    let kn2, jn2, Sn2, Nn2;
    t2[148] !== bn2 || t2[149] !== wn2 ? (kn2 = x("full-cover-portal lyrics-stage group/lyrics dark fixed inset-0 z-[999999] flex flex-col justify-between overflow-hidden bg-background transition-[cursor]", bn2, wn2), t2[148] = bn2, t2[149] = wn2, t2[150] = kn2) : kn2 = t2[150], t2[151] !== at2 || t2[152] !== ht2 ? (jn2 = e3 => {
      if (!at2) return;
      const t3 = e3.target;
      (null == t3 ? void 0 : t3.closest('button, input, [role="slider"]')) || (e3.preventDefault(), ht2(e3.clientX, e3.clientY));
    }, t2[151] = at2, t2[152] = ht2, t2[153] = jn2) : jn2 = t2[153], t2[154] === Symbol.for("react.memo_cache_sentinel") ? (Sn2 = wa.find(Gy), t2[154] = Sn2) : Sn2 = t2[154], t2[155] !== Ee2 ? (Nn2 = {
      ...Sn2.colors,
      colorScheme: "dark",
      "--selection-color": Ee2,
      "--slider-accent": "#ffffff",
      "--lyrics-ink": "0 0% 100%"
    }, t2[155] = Ee2, t2[156] = Nn2) : Nn2 = t2[156];
    const _n2 = Nn2;
    let Cn2;
    t2[157] === Symbol.for("react.memo_cache_sentinel") ? (Cn2 = {
      y: "100%",
      opacity: 1
    }, t2[157] = Cn2) : Cn2 = t2[157];
    const Tn2 = it2 ? "100%" : "0%";
    let En2, Ln2, An2;
    t2[158] !== Tn2 ? (En2 = {
      y: Tn2,
      opacity: 1
    }, t2[158] = Tn2, t2[159] = En2) : En2 = t2[159], t2[160] === Symbol.for("react.memo_cache_sentinel") ? (Ln2 = {
      y: "100%",
      opacity: 1
    }, t2[160] = Ln2) : Ln2 = t2[160], t2[161] === Symbol.for("react.memo_cache_sentinel") ? (An2 = {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1]
    }, t2[161] = An2) : An2 = t2[161];
    const Pn2 = `
            .full-cover-content ::selection {
              background-color: ${Ee2};
              color: white;
              font-family: inherit !important;
            }
            .full-cover-content ::-moz-selection {
              background-color: ${Ee2};
              color: white;
              font-family: inherit !important;
            }
          `;
    let In2;
    t2[162] !== Pn2 ? (In2 = Gr.jsx("style", {
      children: Pn2
    }), t2[162] = Pn2, t2[163] = In2) : In2 = t2[163];
    const Mn2 = tt2 ? L2 : -1;
    let Rn2, zn2, Fn2, On2;
    t2[164] !== Se2 || t2[165] !== Ne2 || t2[166] !== je2 || t2[167] !== i2 || t2[168] !== Mn2 ? (Rn2 = Gr.jsx(Cx, {
      topCover: je2,
      bottomCover: Se2,
      showTop: Ne2,
      isPlaying: i2,
      lineIndex: Mn2
    }), t2[164] = Se2, t2[165] = Ne2, t2[166] = je2, t2[167] = i2, t2[168] = Mn2, t2[169] = Rn2) : Rn2 = t2[169], t2[170] !== Pe2 || t2[171] !== ze2 || t2[172] !== Ie2 || t2[173] !== Me2 || t2[174] !== Re2 ? (zn2 = Me2 && Gr.jsx("video", {
      ref: Ie2,
      src: Me2,
      muted: true,
      playsInline: true,
      loop: true,
      className: x("absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none", "fullscreen" === Pe2 ? "brightness-100 contrast-100 saturate-100 z-10" : "brightness-[0.22] contrast-[0.9] saturate-[1.1] z-0", Re2 ? "opacity-100" : "opacity-0"),
      onLoadedData: () => ze2(true),
      onCanPlay: () => ze2(true),
      onPlay: () => ze2(true),
      onPlaying: () => ze2(true)
    }), t2[170] = Pe2, t2[171] = ze2, t2[172] = Ie2, t2[173] = Me2, t2[174] = Re2, t2[175] = zn2) : zn2 = t2[175], t2[176] !== st2 || t2[177] !== mt2 ? (Fn2 = Gr.jsx(Zx, {
      requestExit: mt2,
      isHovering: st2
    }), t2[176] = st2, t2[177] = mt2, t2[178] = Fn2) : Fn2 = t2[178], t2[179] === Symbol.for("react.memo_cache_sentinel") ? (On2 = x("full-cover-content relative z-20 w-full h-full min-h-0 flex items-center justify-center px-6 sm:px-10 lg:px-14 xl:px-16 pt-12 sm:pt-14 pb-12 sm:pb-14"), t2[179] = On2) : On2 = t2[179];
    const $n2 = Kt2 ? "lyrics" === ge2 ? "flex flex-col items-center justify-center" : "grid grid-cols-1 md:grid-cols-2 grid-rows-1 items-stretch gap-8 lg:gap-12 xl:gap-16" : "flex items-center justify-center";
    let Bn2, Un2, qn2, Hn2;
    t2[180] !== $n2 ? (Bn2 = x("w-full h-full max-w-[1700px] mx-auto min-h-0 transition-all duration-300 ease-out", $n2), t2[180] = $n2, t2[181] = Bn2) : Bn2 = t2[181], t2[182] !== Ee2 || t2[183] !== _e2 || t2[184] !== Pe2 || t2[185] !== ke2 || t2[186] !== r2 || t2[187] !== s2 || t2[188] !== at2 || t2[189] !== b2 || t2[190] !== Ce2 || t2[191] !== st2 || t2[192] !== Mt2 || t2[193] !== Ft2 || t2[194] !== zt2 || t2[195] !== ln2 || t2[196] !== Kt2 || t2[197] !== ge2 ? (Un2 = ("lyrics" !== ge2 || !at2) && Gr.jsx(Jr.div, {
      "data-tauri-drag-region": true,
      layout: "position",
      transition: {
        layout: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }
      },
      className: x("w-full h-full min-h-0 flex flex-col justify-center select-none", Kt2 ? "items-center justify-center" : "items-center justify-center max-w-md mx-auto"),
      children: Gr.jsx(cy, {
        currentSong: r2,
        duration: s2,
        onSeek: Mt2,
        handleSeekStart: zt2,
        handleSeekEnd: Ft2,
        accentColor: Ee2,
        coverArt: ke2,
        canvasUrl: _e2,
        isCanvasReady: Ce2,
        setIsCanvasReady: Te2,
        isHovering: st2,
        showLyricsLayout: Kt2,
        clipState: Pe2,
        isAnimating: b2,
        playerControls: ln2
      })
    }), t2[182] = Ee2, t2[183] = _e2, t2[184] = Pe2, t2[185] = ke2, t2[186] = r2, t2[187] = s2, t2[188] = at2, t2[189] = b2, t2[190] = Ce2, t2[191] = st2, t2[192] = Mt2, t2[193] = Ft2, t2[194] = zt2, t2[195] = ln2, t2[196] = Kt2, t2[197] = ge2, t2[198] = Un2) : Un2 = t2[198], t2[199] !== (null == r2 ? void 0 : r2.id) || t2[200] !== un2 || t2[201] !== yn2 || t2[202] !== vn2 || t2[203] !== mn2 || t2[204] !== hn2 || t2[205] !== Kt2 || t2[206] !== ge2 ? (qn2 = Kt2 && Gr.jsx(Jr.div, {
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
        duration: 0.45,
        delay: 0.08,
        ease: "easeInOut"
      },
      className: x("w-full h-full min-h-0 flex flex-col justify-center overflow-hidden", "lyrics" === ge2 ? "items-center" : "items-center md:items-start px-2 sm:px-4 md:px-6"),
      children: Gr.jsx(Jx, {
        dataState: un2,
        styleOptions: mn2,
        syncTiming: hn2,
        layoutContext: vn2,
        interactionHandlers: yn2
      })
    }, null == r2 ? void 0 : r2.id), t2[199] = null == r2 ? void 0 : r2.id, t2[200] = un2, t2[201] = yn2, t2[202] = vn2, t2[203] = mn2, t2[204] = hn2, t2[205] = Kt2, t2[206] = ge2, t2[207] = qn2) : qn2 = t2[207], t2[208] !== Bn2 || t2[209] !== Un2 || t2[210] !== qn2 ? (Hn2 = Gr.jsx("div", {
      "data-tauri-drag-region": true,
      className: On2,
      children: Gr.jsxs("div", {
        "data-tauri-drag-region": true,
        className: Bn2,
        children: [Un2, qn2]
      })
    }), t2[208] = Bn2, t2[209] = Un2, t2[210] = qn2, t2[211] = Hn2) : Hn2 = t2[211];
    const Wn2 = Boolean(lt2 && at2 && st2);
    let Vn2, Qn2, Kn2;
    t2[212] !== h2 ? (Vn2 = h2("lyrics.full_cover.right_click_hint_prefix"), t2[212] = h2, t2[213] = Vn2) : Vn2 = t2[213], t2[214] !== h2 ? (Qn2 = h2("lyrics.full_cover.right_click_hint_suffix"), t2[214] = h2, t2[215] = Qn2) : Qn2 = t2[215], t2[216] !== Wn2 || t2[217] !== Vn2 || t2[218] !== Qn2 ? (Kn2 = Gr.jsx(Cy, {
      visible: Wn2,
      prefix: Vn2,
      suffix: Qn2
    }), t2[216] = Wn2, t2[217] = Vn2, t2[218] = Qn2, t2[219] = Kn2) : Kn2 = t2[219];
    const Gn2 = st2 ? 1 : 0;
    let Xn2, Yn2;
    t2[220] !== Gn2 ? (Xn2 = {
      opacity: Gn2
    }, t2[220] = Gn2, t2[221] = Xn2) : Xn2 = t2[221], t2[222] === Symbol.for("react.memo_cache_sentinel") ? (Yn2 = {
      duration: 0.25
    }, t2[222] = Yn2) : Yn2 = t2[222];
    const Jn2 = st2 ? "auto" : "none";
    let Zn2, ea2;
    t2[223] !== Jn2 ? (Zn2 = {
      pointerEvents: Jn2
    }, t2[223] = Jn2, t2[224] = Zn2) : Zn2 = t2[224], t2[225] !== ct2 || t2[226] !== W2 ? (ea2 = e3 => {
      ct2(), W2(e3);
    }, t2[225] = ct2, t2[226] = W2, t2[227] = ea2) : ea2 = t2[227];
    const ta2 = q2 ? 0 : 100 * U2;
    let na2, aa2, ra2;
    t2[228] !== ta2 ? (na2 = [ta2], t2[228] = ta2, t2[229] = na2) : na2 = t2[229], t2[230] !== H2 ? (aa2 = e3 => H2(e3[0] / 100), t2[230] = H2, t2[231] = aa2) : aa2 = t2[231], t2[232] !== Ee2 ? (ra2 = {
      fill: "#ffffff",
      track: "rgba(255, 255, 255, 0.25)"
    }, t2[232] = Ee2, t2[233] = ra2) : ra2 = t2[233];
    const sa2 = ra2.fill;
    let ia2, oa2;
    t2[234] !== Ee2 ? (ia2 = {
      fill: "#ffffff",
      track: "rgba(255, 255, 255, 0.25)"
    }, t2[234] = Ee2, t2[235] = ia2) : ia2 = t2[235], t2[236] !== ra2.fill || t2[237] !== ia2.track ? (oa2 = {
      "--slider-accent": sa2,
      "--slider-track": ia2.track
    }, t2[236] = ra2.fill, t2[237] = ia2.track, t2[238] = oa2) : oa2 = t2[238];
    const la2 = oa2;
    let ua2, da2, ma2, fa2, ka2, ja2, Sa2, Na2;
    return t2[239] !== na2 || t2[240] !== aa2 || t2[241] !== la2 ? (ua2 = Gr.jsx(Xv, {
      value: na2,
      max: 100,
      step: 1,
      onValueChange: aa2,
      className: "cursor-pointer w-full [&_.relative]:h-[4px] [&_.relative]:rounded-full [&_.relative]:![background-color:var(--slider-track)] [&_[role=slider]]:h-2.5 [&_[role=slider]]:w-2.5 [&_[role=slider]]:bg-white [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-none [&_[role=slider]]:scale-0 hover:[&_[role=slider]]:scale-100 transition-all duration-150",
      style: la2
    }), t2[239] = na2, t2[240] = aa2, t2[241] = la2, t2[242] = ua2) : ua2 = t2[242], t2[243] !== Xn2 || t2[244] !== Zn2 || t2[245] !== ea2 || t2[246] !== ua2 ? (da2 = Gr.jsx(Jr.div, {
      className: "w-44 sm:w-56 flex items-center",
      animate: Xn2,
      transition: Yn2,
      style: Zn2,
      onWheel: ea2,
      children: ua2
    }), t2[243] = Xn2, t2[244] = Zn2, t2[245] = ea2, t2[246] = ua2, t2[247] = da2) : da2 = t2[247], t2[248] !== Kn2 || t2[249] !== da2 ? (ma2 = Gr.jsxs("div", {
      "data-lyrics-contrast": true,
      className: "fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 select-none pointer-events-none",
      children: [Kn2, da2]
    }), t2[248] = Kn2, t2[249] = da2, t2[250] = ma2) : ma2 = t2[250], t2[251] !== ue2 || t2[252] !== se2 || t2[253] !== me2 || t2[254] !== ye2 || t2[255] !== ae2 || t2[256] !== oe2 || t2[257] !== ge2 ? (fa2 = {
      fontSize: se2,
      syncMode: ae2,
      textStyle: oe2,
      animStyle: ue2,
      viewMode: ge2,
      showTranslation: ye2,
      lyricsOffset: me2
    }, t2[251] = ue2, t2[252] = se2, t2[253] = me2, t2[254] = ye2, t2[255] = ae2, t2[256] = oe2, t2[257] = ge2, t2[258] = fa2) : fa2 = t2[258], t2[259] !== pe2 || t2[260] !== $t2 || t2[261] !== Ge2 || t2[262] !== he2 || t2[263] !== de2 || t2[264] !== ie2 || t2[265] !== fe2 || t2[266] !== re2 || t2[267] !== ce2 ? (ka2 = {
      setFontSize: ie2,
      setSyncMode: re2,
      setTextStyle: ce2,
      setAnimStyle: de2,
      setViewMode: ve2,
      adjustOffset: pe2,
      setOffset: fe2,
      handleManualSync: $t2,
      handleToggleTranslation: Ge2,
      onResetOffset: he2
    }, t2[259] = pe2, t2[260] = $t2, t2[261] = Ge2, t2[262] = he2, t2[263] = de2, t2[264] = ie2, t2[265] = fe2, t2[266] = re2, t2[267] = ce2, t2[268] = ka2) : ka2 = t2[268], t2[269] !== g2 || t2[270] !== Pe2 || t2[271] !== tt2 || t2[272] !== De2 || t2[273] !== Fe2 || t2[274] !== at2 || t2[275] !== $2 || t2[276] !== F2 || t2[277] !== fa2 || t2[278] !== ka2 ? (ja2 = Gr.jsx(yy, {
      isOpen: F2,
      onClose: Ye2,
      position: $2,
      placement: "top",
      prefs: fa2,
      mutators: ka2,
      hasLyrics: at2,
      effectiveIsSynced: tt2,
      checkAccess: g2,
      clipState: Pe2,
      onToggleClip: De2,
      onStopClip: Fe2
    }), t2[269] = g2, t2[270] = Pe2, t2[271] = tt2, t2[272] = De2, t2[273] = Fe2, t2[274] = at2, t2[275] = $2, t2[276] = F2, t2[277] = fa2, t2[278] = ka2, t2[279] = ja2) : ja2 = t2[279], t2[280] !== ct2 || t2[281] !== dt2 || t2[282] !== ut2 || t2[283] !== st2 || t2[284] !== ja2 || t2[285] !== kn2 || t2[286] !== jn2 || t2[287] !== _n2 || t2[288] !== En2 || t2[289] !== In2 || t2[290] !== Rn2 || t2[291] !== zn2 || t2[292] !== Fn2 || t2[293] !== Hn2 || t2[294] !== ma2 ? (Sa2 = cs.createPortal(Gr.jsxs(Jr.div, {
      "data-tauri-drag-region": true,
      "data-controls-visible": st2,
      className: kn2,
      onMouseMove: ut2,
      onMouseEnter: ut2,
      onMouseLeave: dt2,
      onClick: ct2,
      onContextMenu: jn2,
      style: _n2,
      initial: Cn2,
      animate: En2,
      exit: Ln2,
      transition: An2,
      children: [In2, Rn2, zn2, Fn2, Hn2, ma2, ja2]
    }), document.body), t2[280] = ct2, t2[281] = dt2, t2[282] = ut2, t2[283] = st2, t2[284] = ja2, t2[285] = kn2, t2[286] = jn2, t2[287] = _n2, t2[288] = En2, t2[289] = In2, t2[290] = Rn2, t2[291] = zn2, t2[292] = Fn2, t2[293] = Hn2, t2[294] = ma2, t2[295] = Sa2) : Sa2 = t2[295], t2[296] !== Sa2 ? (Na2 = Gr.jsx(Gr.Fragment, {
      children: Sa2
    }), t2[296] = Sa2, t2[297] = Na2) : Na2 = t2[297], Na2;
  });
function Ey(e2) {
  return e2.lines;
}
function Ly(e2) {
  return e2.songId;
}
function Ay(e2) {
  return e2.isLoading;
}
function Py(e2) {
  return e2.isSynced;
}
function Iy(e2) {
  return e2.currentLyricIndex;
}
function My(e2) {
  return e2.displayIndex;
}
function Ry(e2) {
  return e2.fetchLyrics;
}
function zy(e2) {
  return e2.setCurrentLyricIndex;
}
function Dy(e2) {
  return e2.setDisplayIndex;
}
function Fy(e2) {
  return e2.applyTranslation;
}
function Oy(e2) {
  return e2.annotations;
}
function $y(e2) {
  return {
    ...e2,
    translation: void 0
  };
}
function By(e2) {
  const t2 = (e2.text || "").trim().toLowerCase();
  return !t2.startsWith("\u0442\u0435\u043A\u0441\u0442 \u043F\u0435\u0441\u043D\u0438:") && !t2.startsWith("\u043F\u043E\u0441\u0442\u043F\u0440\u0438\u043F\u0435\u0432:");
}
function Uy(e2) {
  if (!("number" == typeof e2.timestamp || "number" == typeof e2.time) || "string" != typeof e2.text) return false;
  "number" == typeof e2.time && "number" != typeof e2.timestamp && (e2.timestamp = e2.time);
  const t2 = (e2.text || "").trim().toLowerCase();
  return !t2.startsWith("\u0442\u0435\u043A\u0441\u0442 \u043F\u0435\u0441\u043D\u0438:") && !t2.startsWith("\u043F\u043E\u0441\u0442\u043F\u0440\u0438\u043F\u0435\u0432:");
}
function qy(e2) {
  return "both" === e2 || "lyrics" === e2 ? "cover" : "both";
}
function Hy(e2) {
  return e2.repeatMode;
}
function Wy(e2) {
  return e2.isShuffled;
}
function Vy(e2) {
  return e2.shuffleType;
}
function Qy() {
  u.getState().cycleRepeatMode();
}
function Ky() {
  u.getState().cycleShuffleModeSimple();
}
function Gy(e2) {
  return "dark" === e2.id;
}
const Xy = Zr(e2 => ({
    items: [],
    put: t2 => e2(e3 => ({
      items: [...e3.items.filter(e4 => e4.key !== t2.key), t2]
    })),
    patch: (t2, n2) => e2(e3 => ({
      items: e3.items.map(e4 => e4.key === t2 ? {
        ...e4,
        ...n2
      } : e4)
    })),
    drop: t2 => e2(e3 => ({
      items: e3.items.filter(e4 => e4.key !== t2)
    }))
  })),
  Yy = Qr.forwardRef((e2, t2) => {
    const n2 = Kr.c(13);
    let a2, r2, s2, i2;
    n2[0] !== e2 ? ({
      className: a2,
      value: s2,
      ...r2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3]), n2[4] !== a2 ? (i2 = x("relative h-4 w-full overflow-hidden rounded-full bg-secondary", a2), n2[4] = a2, n2[5] = i2) : i2 = n2[5];
    const o2 = `translateX(-${100 - (s2 || 0)}%)`;
    let l2, c2;
    return n2[6] !== o2 ? (l2 = Gr.jsx(Ds, {
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: {
        transform: o2
      }
    }), n2[6] = o2, n2[7] = l2) : l2 = n2[7], n2[8] !== r2 || n2[9] !== t2 || n2[10] !== i2 || n2[11] !== l2 ? (c2 = Gr.jsx(zs, {
      ref: t2,
      className: i2,
      ...r2,
      children: l2
    }), n2[8] = r2, n2[9] = t2, n2[10] = i2, n2[11] = l2, n2[12] = c2) : c2 = n2[12], c2;
  });
function Jy(e2) {
  var t2, n2, a2;
  const r2 = Kr.c(14),
    s2 = ei(e2),
    i2 = hg("cache", `playlist:${e2}`);
  let o2;
  r2[0] !== e2 ? (o2 = t3 => "favorites" === e2 ? t3.items.find(Zy) : void 0, r2[0] = e2, r2[1] = o2) : o2 = r2[1];
  const l2 = Xy(o2);
  if (i2) {
    let e3;
    return r2[2] !== i2.current || r2[3] !== i2.total ? (e3 = {
      kind: "cache",
      current: i2.current,
      total: i2.total
    }, r2[2] = i2.current, r2[3] = i2.total, r2[4] = e3) : e3 = r2[4], e3;
  }
  if (s2) {
    let e3;
    return r2[5] === Symbol.for("react.memo_cache_sentinel") ? (e3 = {
      kind: "update",
      current: 0,
      total: 0
    }, r2[5] = e3) : e3 = r2[5], e3;
  }
  if (l2) {
    let e3;
    r2[6] !== l2.fraction || r2[7] !== l2.total ? (e3 = Math.round((null != (t2 = l2.fraction) ? t2 : 0) * (null != (n2 = l2.total) ? n2 : 0)), r2[6] = l2.fraction, r2[7] = l2.total, r2[8] = e3) : e3 = r2[8];
    const s3 = null != (a2 = l2.total) ? a2 : 0,
      i3 = void 0 === l2.fraction;
    let o3;
    return r2[9] !== l2.fraction || r2[10] !== e3 || r2[11] !== s3 || r2[12] !== i3 ? (o3 = {
      kind: "import",
      current: e3,
      total: s3,
      fraction: l2.fraction,
      waiting: i3
    }, r2[9] = l2.fraction, r2[10] = e3, r2[11] = s3, r2[12] = i3, r2[13] = o3) : o3 = r2[13], o3;
  }
}
function Zy(e2) {
  return "favorites" === e2.target;
}
function eb(e2) {
  var t2;
  const n2 = Kr.c(16),
    {
      job: a2,
      title: r2
    } = e2,
    {
      t: s2
    } = P();
  if ("update" === a2.kind) return null;
  const i2 = null != (t2 = a2.fraction) ? t2 : a2.total ? a2.current / a2.total : 0,
    o2 = "cache" === a2.kind ? "bg-background/45" : "bg-background/55",
    l2 = a2.waiting && "bg-background/70";
  let c2, u2, d2, m2;
  return n2[0] !== o2 || n2[1] !== l2 ? (c2 = x("pointer-events-none absolute inset-0 animate-in fade-in duration-300", o2, l2), n2[0] = o2, n2[1] = l2, n2[2] = c2) : c2 = n2[2], n2[3] !== a2.kind ? (u2 = "cache" === a2.kind && Gr.jsx("span", {
    className: "absolute inset-0 flex items-center justify-center text-foreground",
    children: Gr.jsx(_.offline, {
      weight: "Bold",
      className: "size-8 animate-pulse"
    })
  }), n2[3] = a2.kind, n2[4] = u2) : u2 = n2[4], n2[5] !== i2 || n2[6] !== a2.error || n2[7] !== a2.total || n2[8] !== a2.waiting || n2[9] !== s2 || n2[10] !== r2 ? (d2 = !a2.waiting && a2.total > 0 && !a2.error && Gr.jsx(Yy, {
    value: Math.min(100, Math.max(0, 100 * i2)),
    className: "absolute inset-x-3 bottom-3 h-1 bg-foreground/20 [&>div]:bg-foreground [&>div]:transition-transform",
    "aria-label": s2("library.hub.progress_label", {
      name: r2
    })
  }), n2[5] = i2, n2[6] = a2.error, n2[7] = a2.total, n2[8] = a2.waiting, n2[9] = s2, n2[10] = r2, n2[11] = d2) : d2 = n2[11], n2[12] !== c2 || n2[13] !== u2 || n2[14] !== d2 ? (m2 = Gr.jsxs("div", {
    className: c2,
    children: [u2, d2]
  }), n2[12] = c2, n2[13] = u2, n2[14] = d2, n2[15] = m2) : m2 = n2[15], m2;
}
function tb(e2) {
  const t2 = Kr.c(23),
    {
      job: n2
    } = e2,
    {
      t: a2
    } = P(),
    r2 = n2.error && "text-destructive";
  let s2, i2, o2, l2, c2, u2;
  return t2[0] !== r2 ? (s2 = x(r2), t2[0] = r2, t2[1] = s2) : s2 = t2[1], t2[2] !== n2.current || t2[3] !== n2.error || t2[4] !== n2.kind || t2[5] !== n2.total || t2[6] !== n2.waiting || t2[7] !== a2 ? (i2 = n2.error ? a2("library.draft.failed") : n2.waiting ? a2("library.hub.waiting") : n2.total ? a2("library.hub.track_progress", {
    current: n2.current,
    total: n2.total
  }) : a2(`library.hub.${n2.kind}_loading`), t2[2] = n2.current, t2[3] = n2.error, t2[4] = n2.kind, t2[5] = n2.total, t2[6] = n2.waiting, t2[7] = a2, t2[8] = i2) : i2 = t2[8], t2[9] !== s2 || t2[10] !== i2 ? (o2 = Gr.jsx("span", {
    className: s2,
    children: i2
  }), t2[9] = s2, t2[10] = i2, t2[11] = o2) : o2 = t2[11], t2[12] !== n2.error || t2[13] !== n2.kind || t2[14] !== n2.waiting ? (l2 = !n2.error && (n2.waiting ? Gr.jsx(_.history, {
    className: "size-3.5"
  }) : "update" === n2.kind ? Gr.jsx(_.download, {
    weight: "Bold",
    className: "size-3.5 animate-pulse"
  }) : "convert" === n2.kind ? Gr.jsx(_.convert, {
    className: "size-3.5 animate-pulse"
  }) : "cache" === n2.kind ? Gr.jsx(_.offline, {
    className: "size-3.5 animate-pulse"
  }) : Gr.jsx(I, {
    className: "size-3.5 animate-spin"
  })), t2[12] = n2.error, t2[13] = n2.kind, t2[14] = n2.waiting, t2[15] = l2) : l2 = t2[15], t2[16] !== n2 || t2[17] !== a2 ? (c2 = n2.onCancel && Gr.jsx(A, {
    variant: "quiet",
    size: "icon-2xs",
    className: "ml-auto",
    "aria-label": a2("common.cancel"),
    onClick: e3 => {
      var t3;
      e3.stopPropagation(), null == (t3 = n2.onCancel) || t3.call(n2);
    },
    children: Gr.jsx(_.stop, {
      className: "size-3.5"
    })
  }), t2[16] = n2, t2[17] = a2, t2[18] = c2) : c2 = t2[18], t2[19] !== o2 || t2[20] !== l2 || t2[21] !== c2 ? (u2 = Gr.jsxs("span", {
    className: "flex min-h-5 items-center gap-2",
    children: [o2, l2, c2]
  }), t2[19] = o2, t2[20] = l2, t2[21] = c2, t2[22] = u2) : u2 = t2[22], u2;
}
function nb(e2) {
  const t2 = Kr.c(13),
    {
      glyph: n2
    } = e2,
    a2 = Fs(),
    r2 = u(ab);
  let s2, i2, o2, l2;
  t2[0] === Symbol.for("react.memo_cache_sentinel") ? (s2 = {
    opacity: 0
  }, i2 = {
    opacity: 1
  }, o2 = {
    opacity: 0
  }, l2 = {
    duration: 0.3,
    ease: "easeOut"
  }, t2[0] = s2, t2[1] = i2, t2[2] = o2, t2[3] = l2) : (s2 = t2[0], i2 = t2[1], o2 = t2[2], l2 = t2[3]);
  const c2 = !n2 && "bg-black/40";
  let d2, m2, f2;
  return t2[4] !== c2 ? (d2 = x("flex size-full items-center justify-center transition-opacity duration-200 group-hover/cover:opacity-0 group-focus-within/cover:opacity-0", c2), t2[4] = c2, t2[5] = d2) : d2 = t2[5], t2[6] !== n2 || t2[7] !== r2 || t2[8] !== a2 ? (m2 = (a2 || !r2) && Gr.jsx(be, {
    className: x("h-8", n2 ? "text-foreground/80" : "text-white"),
    barWidth: "w-[5px]",
    gap: "gap-[4px]",
    isPaused: !a2
  }), t2[6] = n2, t2[7] = r2, t2[8] = a2, t2[9] = m2) : m2 = t2[9], t2[10] !== d2 || t2[11] !== m2 ? (f2 = Gr.jsx(Jr.span, {
    "aria-hidden": true,
    initial: s2,
    animate: i2,
    exit: o2,
    transition: l2,
    className: "pointer-events-none absolute inset-0 z-10",
    children: Gr.jsx("span", {
      className: d2,
      children: m2
    })
  }), t2[10] = d2, t2[11] = m2, t2[12] = f2) : f2 = t2[12], f2;
}
function ab(e2) {
  return e2.isPlaying;
}
function rb(e2) {
  const t2 = Kr.c(47),
    {
      cover: n2,
      actions: a2,
      title: r2,
      subtitle: s2,
      meta: i2,
      titleClassName: o2,
      titleStyle: l2,
      job: c2,
      attributes: u2,
      onClick: d2,
      className: m2,
      queue: f2,
      glyph: h2
    } = e2,
    p2 = void 0 !== h2 && h2,
    {
      playing: g2
    } = mo(f2),
    v2 = g2 && !c2,
    y2 = d2 && "cursor-pointer";
  let b2, w2;
  t2[0] !== m2 || t2[1] !== y2 ? (b2 = x("group/entity w-40 shrink-0 min-w-0", y2, m2), t2[0] = m2, t2[1] = y2, t2[2] = b2) : b2 = t2[2], t2[3] !== d2 ? (w2 = e3 => {
    e3.currentTarget.contains(e3.target) && (e3.target.closest("button, a, input, textarea, select") || null == d2 || d2());
  }, t2[3] = d2, t2[4] = w2) : w2 = t2[4];
  const k2 = d2 ? "button" : void 0,
    j2 = d2 ? 0 : void 0;
  let S2;
  t2[5] !== u2 || t2[6] !== d2 ? (S2 = e3 => {
    var t3;
    null == (t3 = null == u2 ? void 0 : u2.onKeyDown) || t3.call(u2, e3), e3.defaultPrevented || e3.target !== e3.currentTarget || "Enter" !== e3.key && " " !== e3.key || (e3.preventDefault(), null == d2 || d2());
  }, t2[5] = u2, t2[6] = d2, t2[7] = S2) : S2 = t2[7];
  const N2 = v2 && p2 && "[&:not(:hover)_[data-cover-glyph]]:opacity-0";
  let _2, C2, T2, E2, L2, A2, P2, I2, M2, R2;
  return t2[8] !== N2 ? (_2 = x("group/cover relative aspect-square w-full overflow-hidden rounded-cover [&_[data-cover-glyph]]:transition-[opacity,transform] [&_[data-cover-glyph]]:duration-cover [&_[data-cover-glyph]]:ease-gentle group-hover/entity:[&_[data-cover-glyph]]:scale-[1.025]", N2), t2[8] = N2, t2[9] = _2) : _2 = t2[9], t2[10] !== c2 || t2[11] !== r2 ? (C2 = c2 && Gr.jsx(eb, {
    job: c2,
    title: String(r2)
  }), t2[10] = c2, t2[11] = r2, t2[12] = C2) : C2 = t2[12], t2[13] !== p2 || t2[14] !== c2 || t2[15] !== v2 ? (T2 = !c2 && v2 && Gr.jsx(nb, {
    glyph: p2
  }, "playing"), t2[13] = p2, t2[14] = c2, t2[15] = v2, t2[16] = T2) : T2 = t2[16], t2[17] !== T2 ? (E2 = Gr.jsx(Yr, {
    children: T2
  }), t2[17] = T2, t2[18] = E2) : E2 = t2[18], t2[19] !== a2 || t2[20] !== n2 || t2[21] !== C2 || t2[22] !== E2 || t2[23] !== _2 ? (L2 = Gr.jsxs("div", {
    className: _2,
    children: [n2, C2, E2, a2]
  }), t2[19] = a2, t2[20] = n2, t2[21] = C2, t2[22] = E2, t2[23] = _2, t2[24] = L2) : L2 = t2[24], t2[25] !== r2 ? (A2 = Gr.jsx(Yi, {
    hoverScope: Xi,
    children: r2
  }), t2[25] = r2, t2[26] = A2) : A2 = t2[26], t2[27] !== A2 || t2[28] !== o2 || t2[29] !== l2 ? (P2 = Gr.jsx("div", {
    className: o2,
    style: l2,
    children: A2
  }), t2[27] = A2, t2[28] = o2, t2[29] = l2, t2[30] = P2) : P2 = t2[30], t2[31] !== c2 || t2[32] !== i2 ? (I2 = c2 ? Gr.jsx(Gi, {
    children: Gr.jsx(tb, {
      job: c2
    })
  }) : void 0 !== i2 && Gr.jsx(Gi, {
    children: i2
  }), t2[31] = c2, t2[32] = i2, t2[33] = I2) : I2 = t2[33], t2[34] !== s2 || t2[35] !== P2 || t2[36] !== I2 ? (M2 = Gr.jsxs("div", {
    className: "mt-2.5 min-w-0 space-y-0.5 px-0.5",
    children: [P2, s2, I2]
  }), t2[34] = s2, t2[35] = P2, t2[36] = I2, t2[37] = M2) : M2 = t2[37], t2[38] !== u2 || t2[39] !== L2 || t2[40] !== M2 || t2[41] !== b2 || t2[42] !== w2 || t2[43] !== k2 || t2[44] !== j2 || t2[45] !== S2 ? (R2 = Gr.jsxs("div", {
    ...u2,
    className: b2,
    onClick: w2,
    role: k2,
    tabIndex: j2,
    onKeyDown: S2,
    children: [L2, M2]
  }), t2[38] = u2, t2[39] = L2, t2[40] = M2, t2[41] = b2, t2[42] = w2, t2[43] = k2, t2[44] = j2, t2[45] = S2, t2[46] = R2) : R2 = t2[46], R2;
}
function sb(e2) {
  var t2;
  const n2 = [],
    a2 = new Set();
  for (const r2 of null != e2 ? e2 : []) {
    const e3 = null == (t2 = r2.cover_art) ? void 0 : t2.trim();
    if (e3 && !a2.has(e3) && (a2.add(e3), n2.push(r2), 4 === n2.length)) return n2;
  }
  return n2.length >= 2 ? n2.slice(0, 2) : [];
}
function ib(e2) {
  const t2 = Kr.c(37),
    {
      src: n2,
      tracks: a2,
      title: r2,
      source: s2,
      size: i2,
      className: o2,
      disableHoverEffect: l2
    } = e2,
    c2 = void 0 === i2 ? 160 : i2,
    u2 = void 0 !== l2 && l2;
  let d2, m2, f2, h2, p2, g2, v2, y2, b2;
  if (t2[0] !== o2 || t2[1] !== u2 || t2[2] !== c2 || t2[3] !== s2 || t2[4] !== n2 || t2[5] !== r2 || t2[6] !== a2) {
    v2 = Symbol.for("react.early_return_sentinel");
    e: {
      const e3 = n2 ? [] : sb(a2);
      if (!e3.length) {
        let e4;
        t2[14] !== o2 || t2[15] !== u2 || t2[16] !== c2 || t2[17] !== s2 || t2[18] !== n2 || t2[19] !== r2 ? (e4 = Gr.jsx(N, {
          src: n2,
          title: r2,
          size: c2,
          source: s2,
          type: "playlist",
          className: o2,
          showSourceBadge: false,
          disableHoverEffect: u2,
          disablePlayerTracking: true
        }), t2[14] = o2, t2[15] = u2, t2[16] = c2, t2[17] = s2, t2[18] = n2, t2[19] = r2, t2[20] = e4) : e4 = t2[20], v2 = e4;
        break e;
      }
      h2 = "img", p2 = r2, t2[21] !== o2 ? (g2 = x("group relative overflow-hidden bg-plate", o2), t2[21] = o2, t2[22] = g2) : g2 = t2[22], d2 = true;
      const i3 = 4 === e3.length ? "grid-rows-2" : "grid-rows-1",
        l3 = !u2 && "group-hover:scale-[1.018]";
      let y3;
      t2[23] !== i3 || t2[24] !== l3 ? (m2 = x("grid size-full grid-cols-2 transition-transform duration-cover ease-gentle", i3, l3), t2[23] = i3, t2[24] = l3, t2[25] = m2) : m2 = t2[25], t2[26] !== c2 ? (y3 = e4 => Gr.jsx(N, {
        src: e4.cover_art,
        title: "",
        source: e4.source,
        size: Math.ceil(c2 / 2),
        className: "w-full h-full min-h-0 min-w-0 rounded-none",
        showSourceBadge: false,
        disablePlayerTracking: true,
        disableHoverEffect: true,
        plain: true
      }, e4.cover_art), t2[26] = c2, t2[27] = y3) : y3 = t2[27], f2 = e3.map(y3);
    }
    t2[0] = o2, t2[1] = u2, t2[2] = c2, t2[3] = s2, t2[4] = n2, t2[5] = r2, t2[6] = a2, t2[7] = d2, t2[8] = m2, t2[9] = f2, t2[10] = h2, t2[11] = p2, t2[12] = g2, t2[13] = v2;
  } else d2 = t2[7], m2 = t2[8], f2 = t2[9], h2 = t2[10], p2 = t2[11], g2 = t2[12], v2 = t2[13];
  return v2 !== Symbol.for("react.early_return_sentinel") ? v2 : (t2[28] !== d2 || t2[29] !== m2 || t2[30] !== f2 ? (y2 = Gr.jsx("div", {
    "aria-hidden": d2,
    className: m2,
    children: f2
  }), t2[28] = d2, t2[29] = m2, t2[30] = f2, t2[31] = y2) : y2 = t2[31], t2[32] !== y2 || t2[33] !== h2 || t2[34] !== p2 || t2[35] !== g2 ? (b2 = Gr.jsx("div", {
    role: h2,
    "aria-label": p2,
    className: g2,
    children: y2
  }), t2[32] = y2, t2[33] = h2, t2[34] = p2, t2[35] = g2, t2[36] = b2) : b2 = t2[36], b2);
}
function ob({
  type: e2,
  cover: t2,
  tracks: n2,
  title: a2,
  source: r2,
  author: s2,
  kind: i2,
  flush: o2 = false,
  onClick: l2,
  className: c2,
  size: u2 = "md",
  arrow: d2 = "lg" === u2,
  systemCover: m2,
  subtitle: f2
}) {
  const h2 = "album" === e2 ? B.Album : "track" === e2 ? B.Track : "artist" === e2 ? B.Artist : B.Playlist,
    p2 = "artist" === e2;
  return Gr.jsx(ao, {
    flush: o2,
    onClick: l2,
    className: x(o2 ? "py-1" : "gap-3.5 p-2", "lg" === u2 && "gap-5", c2),
    leading: m2 ? Gr.jsx(ja, {
      kind: m2,
      className: x("border-0 bg-selected", "lg" === u2 ? "h-20 w-20 rounded-2xl" : "h-12 w-12"),
      iconClassName: "lg" === u2 ? "h-8 w-8" : void 0
    }) : "playlist" === e2 && !t2 && sb(n2).length > 0 ? Gr.jsx(ib, {
      title: a2,
      tracks: n2,
      size: "lg" === u2 ? 80 : 48,
      className: x("shrink-0 rounded-xl", "lg" === u2 ? "size-20" : "size-12"),
      disableHoverEffect: true
    }) : Gr.jsx(N, {
      src: t2,
      title: a2,
      size: "md",
      className: x(p2 ? "rounded-full" : "rounded-xl", "flex-shrink-0", "lg" === u2 ? "w-20 h-20" : "w-12 h-12"),
      type: e2,
      source: r2,
      showSourceBadge: !(!r2 || "local" === r2),
      showLoading: false,
      fallback: Gr.jsx("div", {
        className: x("w-full h-full flex items-center justify-center bg-selected", p2 ? "rounded-full" : "rounded-xl"),
        children: Gr.jsx(h2, {
          className: "h-5 w-5 text-foreground/40"
        })
      })
    }),
    title: Gr.jsx(Yi, {
      className: x("leading-tight", "lg" === u2 && "text-title2 font-semibold tracking-tight"),
      children: a2
    }),
    subtitle: null != f2 ? Gr.jsx(Ki, {
      text: f2,
      link: false,
      className: "mt-1"
    }) : Gr.jsxs(Gr.Fragment, {
      children: [s2 ? Gr.jsx(Ki, {
        text: s2,
        link: false,
        className: "mt-1"
      }) : null, i2 ? Gr.jsx(Gi, {
        children: i2
      }) : null]
    }),
    trailing: d2 && l2 ? Gr.jsx(ka, {
      className: "h-5 w-5 text-muted-foreground"
    }) : void 0
  });
}
function lb(e2) {
  const t2 = Kr.c(2),
    n2 = Yo(e2);
  let a2;
  return t2[0] !== n2 ? (a2 = Gr.jsx(cb, {
    ...n2
  }), t2[0] = n2, t2[1] = a2) : a2 = t2[1], a2;
}
const cb = Xr.memo(e2 => {
  var t2, n2, a2, r2, s2;
  const i2 = Kr.c(87),
    {
      album: o2,
      subtitle: l2,
      meta: c2,
      kicker: u2,
      variant: d2,
      size: m2,
      flush: f2,
      trend: h2,
      onClick: p2,
      className: g2,
      card: v2
    } = e2,
    y2 = void 0 === d2 ? "card" : d2,
    b2 = void 0 === m2 ? "sm" : m2,
    w2 = void 0 !== f2 && f2,
    k2 = o2.cover_art || "",
    j2 = o2.title,
    S2 = o2.source,
    _2 = null != (t2 = null != l2 ? l2 : o2.artist) ? t2 : "";
  if ("featured" === y2) {
    let e3, t3, n3, a3, r3, s3, o3;
    return i2[0] !== g2 ? (e3 = x("flex items-center justify-between gap-4 p-0 bg-transparent group cursor-pointer select-none", g2), i2[0] = g2, i2[1] = e3) : e3 = i2[1], i2[2] !== j2 ? (t3 = Gr.jsx("h3", {
      className: "text-base font-bold text-foreground leading-snug line-clamp-1 group-hover:text-primary transition-colors tracking-tight",
      children: j2
    }), i2[2] = j2, i2[3] = t3) : t3 = i2[3], i2[4] !== u2 ? (n3 = u2 && Gr.jsx("span", {
      className: "text-xs font-medium text-muted-foreground/80 mt-1 line-clamp-1",
      children: u2
    }), i2[4] = u2, i2[5] = n3) : n3 = i2[5], i2[6] !== _2 ? (a3 = _2 && Gr.jsx("span", {
      className: "text-xs font-normal text-muted-foreground/60 mt-0.5 line-clamp-1",
      children: _2
    }), i2[6] = _2, i2[7] = a3) : a3 = i2[7], i2[8] !== t3 || i2[9] !== n3 || i2[10] !== a3 ? (r3 = Gr.jsxs("div", {
      className: "min-w-0 flex-1 flex flex-col justify-center",
      children: [t3, n3, a3]
    }), i2[8] = t3, i2[9] = n3, i2[10] = a3, i2[11] = r3) : r3 = i2[11], i2[12] !== k2 || i2[13] !== S2 || i2[14] !== j2 ? (s3 = Gr.jsx("div", {
      className: "w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-muted/40 shadow-sm",
      children: Gr.jsx(N, {
        src: k2,
        title: j2,
        size: 72,
        className: "w-[72px] h-[72px] rounded-xl object-cover",
        source: S2,
        type: "album",
        showSourceBadge: false,
        disableHoverEffect: true,
        plain: true,
        disablePlayerTracking: true
      })
    }), i2[12] = k2, i2[13] = S2, i2[14] = j2, i2[15] = s3) : s3 = i2[15], i2[16] !== p2 || i2[17] !== e3 || i2[18] !== r3 || i2[19] !== s3 ? (o3 = Gr.jsxs("div", {
      onClick: p2,
      className: e3,
      children: [r3, s3]
    }), i2[16] = p2, i2[17] = e3, i2[18] = r3, i2[19] = s3, i2[20] = o3) : o3 = i2[20], o3;
  }
  let C2;
  i2[21] !== o2.release_date || i2[22] !== o2.year || i2[23] !== c2 ? (C2 = null != c2 ? c2 : o2.year ? String(o2.year) : null == (n2 = o2.release_date) ? void 0 : n2.slice(0, 4), i2[21] = o2.release_date, i2[22] = o2.year, i2[23] = c2, i2[24] = C2) : C2 = i2[24];
  const T2 = C2;
  if ("row" === y2 && "md" === b2) {
    let e3;
    return i2[25] !== o2.artist || i2[26] !== g2 || i2[27] !== k2 || i2[28] !== p2 || i2[29] !== T2 || i2[30] !== S2 || i2[31] !== j2 ? (e3 = Gr.jsx(ob, {
      type: "album",
      cover: k2,
      title: j2,
      source: S2,
      author: o2.artist,
      kind: T2,
      onClick: p2,
      className: g2
    }), i2[25] = o2.artist, i2[26] = g2, i2[27] = k2, i2[28] = p2, i2[29] = T2, i2[30] = S2, i2[31] = j2, i2[32] = e3) : e3 = i2[32], e3;
  }
  if ("row" === y2) {
    let e3;
    i2[33] !== h2 ? (e3 = h2 ? Gr.jsx(io, {
      trend: h2
    }) : void 0, i2[33] = h2, i2[34] = e3) : e3 = i2[34];
    const t3 = "chart" === b2 ? "h-11 w-11" : "h-9 w-9";
    let n3;
    i2[35] !== t3 ? (n3 = x("rounded-lg overflow-hidden shrink-0", t3), i2[35] = t3, i2[36] = n3) : n3 = i2[36];
    const a3 = "chart" === b2 ? 44 : 36;
    let r3, s3, l3, c3, u3;
    return i2[37] !== k2 || i2[38] !== a3 || i2[39] !== j2 ? (r3 = Gr.jsx(N, {
      src: k2,
      title: j2,
      size: a3,
      className: "h-full w-full rounded-lg object-cover",
      showSourceBadge: false,
      disableHoverEffect: true,
      plain: true,
      disablePlayerTracking: true
    }), i2[37] = k2, i2[38] = a3, i2[39] = j2, i2[40] = r3) : r3 = i2[40], i2[41] !== n3 || i2[42] !== r3 ? (s3 = Gr.jsx("div", {
      className: n3,
      children: r3
    }), i2[41] = n3, i2[42] = r3, i2[43] = s3) : s3 = i2[43], i2[44] !== j2 ? (l3 = Gr.jsx(Yi, {
      className: "text-sm font-medium",
      children: j2
    }), i2[44] = j2, i2[45] = l3) : l3 = i2[45], i2[46] !== o2.artist ? (c3 = o2.artist ? Gr.jsx(Ki, {
      text: o2.artist,
      link: false
    }) : null, i2[46] = o2.artist, i2[47] = c3) : c3 = i2[47], i2[48] !== g2 || i2[49] !== w2 || i2[50] !== p2 || i2[51] !== s3 || i2[52] !== l3 || i2[53] !== c3 || i2[54] !== e3 ? (u3 = Gr.jsx(ao, {
      flush: w2,
      onClick: p2,
      className: g2,
      marker: e3,
      leading: s3,
      title: l3,
      subtitle: c3
    }), i2[48] = g2, i2[49] = w2, i2[50] = p2, i2[51] = s3, i2[52] = l3, i2[53] = c3, i2[54] = e3, i2[55] = u3) : u3 = i2[55], u3;
  }
  const E2 = !k2;
  let L2;
  i2[56] !== o2.id || i2[57] !== j2 ? (L2 = {
    id: o2.id,
    name: j2,
    type: "album"
  }, i2[56] = o2.id, i2[57] = j2, i2[58] = L2) : L2 = i2[58];
  const A2 = o2.artist,
    P2 = o2.artists;
  let I2, M2;
  i2[59] !== o2 ? (I2 = Sa(o2), i2[59] = o2, i2[60] = I2) : I2 = i2[60], i2[61] !== o2.artist || i2[62] !== o2.artists || i2[63] !== S2 || i2[64] !== l2 || i2[65] !== I2 ? (M2 = Gr.jsx(Ki, {
    text: l2,
    artist: A2,
    source: S2,
    artistsArray: P2,
    origin: I2
  }), i2[61] = o2.artist, i2[62] = o2.artists, i2[63] = S2, i2[64] = l2, i2[65] = I2, i2[66] = M2) : M2 = i2[66];
  const R2 = null != (a2 = null == v2 ? void 0 : v2.meta) ? a2 : T2;
  let z2, D2, F2;
  return i2[67] !== (null == v2 ? void 0 : v2.cover) || i2[68] !== k2 || i2[69] !== S2 || i2[70] !== _2 || i2[71] !== j2 ? (z2 = null != (r2 = null == v2 ? void 0 : v2.cover) ? r2 : Gr.jsx(N, {
    src: k2,
    title: j2,
    artist: _2,
    size: 160,
    className: "h-full w-full rounded-cover object-cover",
    type: "album",
    source: S2,
    showSourceBadge: false
  }), i2[67] = null == v2 ? void 0 : v2.cover, i2[68] = k2, i2[69] = S2, i2[70] = _2, i2[71] = j2, i2[72] = z2) : z2 = i2[72], i2[73] !== o2 || i2[74] !== (null == v2 ? void 0 : v2.actions) ? (D2 = null != (s2 = null == v2 ? void 0 : v2.actions) ? s2 : Gr.jsx(Xo, {
    kind: "album",
    item: o2
  }), i2[73] = o2, i2[74] = null == v2 ? void 0 : v2.actions, i2[75] = D2) : D2 = i2[75], i2[76] !== v2 || i2[77] !== g2 || i2[78] !== p2 || i2[79] !== M2 || i2[80] !== R2 || i2[81] !== z2 || i2[82] !== D2 || i2[83] !== E2 || i2[84] !== L2 || i2[85] !== j2 ? (F2 = Gr.jsx(rb, {
    ...v2,
    glyph: E2,
    queue: L2,
    className: g2,
    onClick: p2,
    title: j2,
    subtitle: M2,
    meta: R2,
    cover: z2,
    actions: D2
  }), i2[76] = v2, i2[77] = g2, i2[78] = p2, i2[79] = M2, i2[80] = R2, i2[81] = z2, i2[82] = D2, i2[83] = E2, i2[84] = L2, i2[85] = j2, i2[86] = F2) : F2 = i2[86], F2;
}, (e2, t2) => e2.album.id === t2.album.id && e2.album.title === t2.album.title && e2.album.cover_art === t2.album.cover_art && e2.album.source === t2.album.source && e2.album.artist === t2.album.artist && e2.subtitle === t2.subtitle && e2.meta === t2.meta && e2.kicker === t2.kicker && e2.variant === t2.variant && e2.size === t2.size && e2.flush === t2.flush && e2.onClick === t2.onClick && e2.trend === t2.trend && e2.className === t2.className && e2.card === t2.card);
function ub(e2) {
  const t2 = Kr.c(3),
    n2 = Yo(e2);
  let a2;
  return t2[0] !== n2 || t2[1] !== e2.variant ? (a2 = "cover" === e2.variant ? Gr.jsx(db, {
    ...n2
  }) : Gr.jsx(mb, {
    ...n2
  }), t2[0] = n2, t2[1] = e2.variant, t2[2] = a2) : a2 = t2[2], a2;
}
const db = Xr.memo(function (e2) {
    const t2 = Kr.c(12),
      {
        playlist: n2,
        systemCover: a2,
        onClick: r2,
        className: s2
      } = e2,
      i2 = n2.title;
    let o2, l2, c2;
    return t2[0] !== s2 ? (o2 = x("shrink-0 overflow-hidden rounded-cover", s2), t2[0] = s2, t2[1] = o2) : o2 = t2[1], t2[2] !== n2.cover_art || t2[3] !== n2.title || t2[4] !== n2.tracks || t2[5] !== a2 ? (l2 = a2 ? Gr.jsx(ja, {
      kind: a2,
      className: "h-full w-full border-0",
      iconClassName: "size-5"
    }) : Gr.jsx(ib, {
      src: n2.cover_art || "",
      tracks: n2.tracks,
      title: n2.title,
      size: 44,
      className: "h-full w-full object-cover",
      disableHoverEffect: true
    }), t2[2] = n2.cover_art, t2[3] = n2.title, t2[4] = n2.tracks, t2[5] = a2, t2[6] = l2) : l2 = t2[6], t2[7] !== r2 || t2[8] !== n2.title || t2[9] !== o2 || t2[10] !== l2 ? (c2 = Gr.jsx(A, {
      variant: "ghost",
      size: "icon-lg",
      stretch: true,
      onClick: r2,
      "aria-label": i2,
      className: o2,
      children: l2
    }), t2[7] = r2, t2[8] = n2.title, t2[9] = o2, t2[10] = l2, t2[11] = c2) : c2 = t2[11], c2;
  }),
  mb = Xr.memo(e2 => {
    var t2, n2, a2, r2, s2;
    const i2 = Kr.c(99),
      {
        playlist: o2,
        subtitle: l2,
        meta: c2,
        variant: u2,
        size: d2,
        systemCover: m2,
        flush: f2,
        trend: h2,
        trailing: p2,
        onClick: g2,
        className: v2,
        card: y2
      } = e2,
      b2 = void 0 === u2 ? "card" : u2,
      w2 = void 0 === d2 ? "sm" : d2,
      k2 = void 0 !== f2 && f2,
      {
        t: j2,
        currentLanguage: S2
      } = P(),
      N2 = o2.cover_art || "",
      C2 = o2.title,
      T2 = o2.source;
    let E2;
    i2[0] !== o2 ? (E2 = Ee(o2), i2[0] = o2, i2[1] = E2) : E2 = i2[1];
    const L2 = E2,
      A2 = Jy(o2.id),
      I2 = null != (t2 = null == y2 ? void 0 : y2.job) ? t2 : A2;
    let M2;
    i2[2] !== N2 || i2[3] !== o2.tracks || i2[4] !== m2 ? (M2 = !N2 && !m2 && sb(o2.tracks).length > 0, i2[2] = N2, i2[3] = o2.tracks, i2[4] = m2, i2[5] = M2) : M2 = i2[5];
    const R2 = M2;
    if ("row" === b2 && ("md" === w2 || "lg" === w2)) {
      let e3, t3;
      return i2[6] !== S2 || i2[7] !== c2 || i2[8] !== o2.tracks_count || i2[9] !== j2 ? (e3 = null != c2 ? c2 : o2.tracks_count ? Rn(o2.tracks_count, j2, S2) : void 0, i2[6] = S2, i2[7] = c2, i2[8] = o2.tracks_count, i2[9] = j2, i2[10] = e3) : e3 = i2[10], i2[11] !== L2 || i2[12] !== v2 || i2[13] !== N2 || i2[14] !== k2 || i2[15] !== g2 || i2[16] !== o2.tracks || i2[17] !== w2 || i2[18] !== T2 || i2[19] !== l2 || i2[20] !== m2 || i2[21] !== e3 || i2[22] !== C2 ? (t3 = Gr.jsx(ob, {
        type: "playlist",
        cover: N2,
        tracks: o2.tracks,
        title: C2,
        source: T2,
        author: L2,
        kind: e3,
        size: w2,
        systemCover: m2,
        subtitle: l2,
        flush: k2,
        onClick: g2,
        className: v2
      }), i2[11] = L2, i2[12] = v2, i2[13] = N2, i2[14] = k2, i2[15] = g2, i2[16] = o2.tracks, i2[17] = w2, i2[18] = T2, i2[19] = l2, i2[20] = m2, i2[21] = e3, i2[22] = C2, i2[23] = t3) : t3 = i2[23], t3;
    }
    if ("row" === b2) {
      let e3;
      i2[24] !== L2 || i2[25] !== S2 || i2[26] !== o2.tracks_count || i2[27] !== l2 || i2[28] !== j2 ? (e3 = null != l2 ? l2 : L2 || (o2.tracks_count ? Rn(o2.tracks_count, j2, S2) : ""), i2[24] = L2, i2[25] = S2, i2[26] = o2.tracks_count, i2[27] = l2, i2[28] = j2, i2[29] = e3) : e3 = i2[29];
      const t3 = e3;
      let n3, a3;
      i2[30] !== v2 ? (n3 = x("group/entity", v2), i2[30] = v2, i2[31] = n3) : n3 = i2[31], i2[32] !== h2 ? (a3 = h2 ? Gr.jsx(io, {
        trend: h2
      }) : void 0, i2[32] = h2, i2[33] = a3) : a3 = i2[33];
      const r3 = "chart" === w2 ? "h-11 w-11" : "h-9 w-9";
      let s3, c3, u3, d3, f3, y3;
      return i2[34] !== r3 ? (s3 = x("rounded-lg overflow-hidden shrink-0", r3), i2[34] = r3, i2[35] = s3) : s3 = i2[35], i2[36] !== N2 || i2[37] !== o2.tracks || i2[38] !== w2 || i2[39] !== m2 || i2[40] !== C2 ? (c3 = m2 ? Gr.jsx(ja, {
        kind: m2,
        className: "h-full w-full rounded-lg border-0 bg-selected",
        iconClassName: "size-4"
      }) : Gr.jsx(ib, {
        src: N2,
        tracks: o2.tracks,
        title: C2,
        size: "chart" === w2 ? 44 : 36,
        className: "rounded-lg object-cover h-full w-full",
        disableHoverEffect: true
      }), i2[36] = N2, i2[37] = o2.tracks, i2[38] = w2, i2[39] = m2, i2[40] = C2, i2[41] = c3) : c3 = i2[41], i2[42] !== s3 || i2[43] !== c3 ? (u3 = Gr.jsx("div", {
        className: s3,
        children: c3
      }), i2[42] = s3, i2[43] = c3, i2[44] = u3) : u3 = i2[44], i2[45] !== C2 ? (d3 = Gr.jsx(Yi, {
        hoverScope: Xi,
        className: "text-sm font-medium",
        children: C2
      }), i2[45] = C2, i2[46] = d3) : d3 = i2[46], i2[47] !== t3 ? (f3 = t3 ? Gr.jsx(Ki, {
        text: t3,
        link: false
      }) : null, i2[47] = t3, i2[48] = f3) : f3 = i2[48], i2[49] !== k2 || i2[50] !== g2 || i2[51] !== u3 || i2[52] !== d3 || i2[53] !== f3 || i2[54] !== n3 || i2[55] !== a3 || i2[56] !== p2 ? (y3 = Gr.jsx(ao, {
        flush: k2,
        onClick: g2,
        className: n3,
        marker: a3,
        leading: u3,
        title: d3,
        subtitle: f3,
        trailing: p2
      }), i2[49] = k2, i2[50] = g2, i2[51] = u3, i2[52] = d3, i2[53] = f3, i2[54] = n3, i2[55] = a3, i2[56] = p2, i2[57] = y3) : y3 = i2[57], y3;
    }
    const z2 = Boolean(m2) || !N2 && !R2,
      D2 = "favorites" === m2 || "offline" === m2 ? m2 : "playlist";
    let F2, O2, $2, B2, U2, q2, H2, W2;
    return i2[58] !== o2.id || i2[59] !== D2 || i2[60] !== C2 ? (F2 = {
      id: o2.id,
      name: C2,
      type: D2
    }, i2[58] = o2.id, i2[59] = D2, i2[60] = C2, i2[61] = F2) : F2 = i2[61], i2[62] !== o2.pinned ? (O2 = o2.pinned && Gr.jsx(_.pinned, {
      weight: "Linear",
      className: "size-3.5 shrink-0 text-primary/85"
    }), i2[62] = o2.pinned, i2[63] = O2) : O2 = i2[63], i2[64] !== O2 || i2[65] !== C2 ? ($2 = Gr.jsxs("span", {
      className: "flex min-w-0 items-center gap-1.5",
      children: [C2, O2]
    }), i2[64] = O2, i2[65] = C2, i2[66] = $2) : $2 = i2[66], i2[67] !== L2 || i2[68] !== T2 || i2[69] !== l2 ? (B2 = Gr.jsx(Ki, {
      text: l2,
      artist: L2,
      source: T2,
      link: false
    }), i2[67] = L2, i2[68] = T2, i2[69] = l2, i2[70] = B2) : B2 = i2[70], i2[71] !== (null == y2 ? void 0 : y2.meta) || i2[72] !== S2 || i2[73] !== c2 || i2[74] !== o2.tracks_count || i2[75] !== j2 ? (U2 = null != (a2 = null != (n2 = null == y2 ? void 0 : y2.meta) ? n2 : c2) ? a2 : void 0 !== o2.tracks_count ? Rn(o2.tracks_count, j2, S2) : void 0, i2[71] = null == y2 ? void 0 : y2.meta, i2[72] = S2, i2[73] = c2, i2[74] = o2.tracks_count, i2[75] = j2, i2[76] = U2) : U2 = i2[76], i2[77] !== (null == y2 ? void 0 : y2.cover) || i2[78] !== N2 || i2[79] !== o2.tracks || i2[80] !== T2 || i2[81] !== C2 ? (q2 = null != (r2 = null == y2 ? void 0 : y2.cover) ? r2 : Gr.jsx(ib, {
      src: N2,
      tracks: o2.tracks,
      title: C2,
      size: 160,
      className: "h-full w-full rounded-cover object-cover",
      source: T2
    }), i2[77] = null == y2 ? void 0 : y2.cover, i2[78] = N2, i2[79] = o2.tracks, i2[80] = T2, i2[81] = C2, i2[82] = q2) : q2 = i2[82], i2[83] !== (null == y2 ? void 0 : y2.actions) || i2[84] !== I2 || i2[85] !== o2 ? (H2 = null != (s2 = null == y2 ? void 0 : y2.actions) ? s2 : !I2 && Gr.jsx(Xo, {
      kind: "playlist",
      item: o2
    }), i2[83] = null == y2 ? void 0 : y2.actions, i2[84] = I2, i2[85] = o2, i2[86] = H2) : H2 = i2[86], i2[87] !== y2 || i2[88] !== v2 || i2[89] !== I2 || i2[90] !== g2 || i2[91] !== $2 || i2[92] !== B2 || i2[93] !== U2 || i2[94] !== q2 || i2[95] !== H2 || i2[96] !== z2 || i2[97] !== F2 ? (W2 = Gr.jsx(rb, {
      ...y2,
      job: I2,
      glyph: z2,
      queue: F2,
      className: v2,
      onClick: g2,
      title: $2,
      subtitle: B2,
      meta: U2,
      cover: q2,
      actions: H2
    }), i2[87] = y2, i2[88] = v2, i2[89] = I2, i2[90] = g2, i2[91] = $2, i2[92] = B2, i2[93] = U2, i2[94] = q2, i2[95] = H2, i2[96] = z2, i2[97] = F2, i2[98] = W2) : W2 = i2[98], W2;
  }, (e2, t2) => e2.playlist.id === t2.playlist.id && e2.playlist.title === t2.playlist.title && e2.playlist.cover_art === t2.playlist.cover_art && e2.playlist.source === t2.playlist.source && e2.playlist.tracks === t2.playlist.tracks && e2.playlist.pinned === t2.playlist.pinned && e2.playlist.author === t2.playlist.author && e2.playlist.tracks_count === t2.playlist.tracks_count && e2.subtitle === t2.subtitle && e2.meta === t2.meta && e2.variant === t2.variant && e2.size === t2.size && e2.systemCover === t2.systemCover && e2.flush === t2.flush && e2.onClick === t2.onClick && e2.trend === t2.trend && e2.trailing === t2.trailing && e2.className === t2.className && e2.card === t2.card);
function fb(e2, t2) {
  return Gr.jsxs("span", {
    className: "flex-shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary select-none flex items-center gap-1.5",
    children: [e2.icon, Gr.jsx("span", {
      className: "text-foreground/90",
      children: e2.label
    })]
  }, t2);
}
const hb = Xr.memo(function (e2) {
  const t2 = Kr.c(49),
    {
      title: n2,
      titleAction: a2,
      subtitle: r2,
      action: s2,
      trailing: i2,
      children: o2,
      className: l2,
      headerClassName: c2,
      titleClassName: u2,
      contentClassName: d2,
      badges: m2,
      onTitleClick: f2,
      showChevron: h2
    } = e2,
    p2 = !!f2 || !!h2;
  let g2, v2, y2;
  t2[0] !== l2 ? (g2 = x("space-y-2", l2), t2[0] = l2, t2[1] = g2) : g2 = t2[1], t2[2] === Symbol.for("react.memo_cache_sentinel") ? (v2 = {
    contentVisibility: "auto",
    containIntrinsicSize: "auto 300px"
  }, t2[2] = v2) : v2 = t2[2], t2[3] !== c2 ? (y2 = x("flex items-end justify-between gap-4", c2), t2[3] = c2, t2[4] = y2) : y2 = t2[4];
  const b2 = p2 && "group cursor-pointer select-none";
  let w2;
  t2[5] !== b2 ? (w2 = x("flex items-center gap-1.5", b2), t2[5] = b2, t2[6] = w2) : w2 = t2[6];
  const k2 = p2 && "group-hover:text-primary transition-colors";
  let j2, S2, N2, _2, C2, T2, E2, L2, A2, P2, I2, M2, R2, z2;
  return t2[7] !== k2 || t2[8] !== u2 ? (j2 = x("text-2xl md:text-title1 font-semibold tracking-tight leading-tight text-foreground [&_span]:font-inherit", k2, u2), t2[7] = k2, t2[8] = u2, t2[9] = j2) : j2 = t2[9], t2[10] !== j2 || t2[11] !== n2 ? (S2 = Gr.jsx("h2", {
    className: j2,
    children: n2
  }), t2[10] = j2, t2[11] = n2, t2[12] = S2) : S2 = t2[12], t2[13] !== p2 ? (N2 = p2 && Gr.jsx(Tn, {
    className: "h-6 w-6 translate-y-0.5 text-muted-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
  }), t2[13] = p2, t2[14] = N2) : N2 = t2[14], t2[15] !== f2 || t2[16] !== w2 || t2[17] !== S2 || t2[18] !== N2 ? (_2 = Gr.jsxs("div", {
    onClick: f2,
    className: w2,
    children: [S2, N2]
  }), t2[15] = f2, t2[16] = w2, t2[17] = S2, t2[18] = N2, t2[19] = _2) : _2 = t2[19], t2[20] !== a2 ? (C2 = a2 ? Gr.jsx("div", {
    className: "-ml-3 flex h-8 items-center",
    children: a2
  }) : null, t2[20] = a2, t2[21] = C2) : C2 = t2[21], t2[22] !== s2 ? (T2 = s2 ? Gr.jsx("div", {
    className: "-ml-1 flex h-8 shrink-0 translate-y-0.5 items-center",
    children: s2
  }) : null, t2[22] = s2, t2[23] = T2) : T2 = t2[23], t2[24] !== m2 ? (E2 = m2 && m2.length > 0 && Gr.jsx("div", {
    className: "flex items-center gap-1.5 translate-y-[2px]",
    children: m2.map(fb)
  }), t2[24] = m2, t2[25] = E2) : E2 = t2[25], t2[26] !== _2 || t2[27] !== C2 || t2[28] !== T2 || t2[29] !== E2 ? (L2 = Gr.jsxs("div", {
    className: "flex flex-wrap items-center gap-2.5",
    children: [_2, C2, T2, E2]
  }), t2[26] = _2, t2[27] = C2, t2[28] = T2, t2[29] = E2, t2[30] = L2) : L2 = t2[30], t2[31] !== r2 ? (A2 = r2 ? Gr.jsx("p", {
    className: "text-sm text-muted-foreground mt-1",
    children: r2
  }) : null, t2[31] = r2, t2[32] = A2) : A2 = t2[32], t2[33] !== L2 || t2[34] !== A2 ? (P2 = Gr.jsxs("div", {
    className: "min-w-0",
    children: [L2, A2]
  }), t2[33] = L2, t2[34] = A2, t2[35] = P2) : P2 = t2[35], t2[36] !== i2 ? (I2 = i2 ? Gr.jsx("div", {
    className: "shrink-0",
    children: i2
  }) : null, t2[36] = i2, t2[37] = I2) : I2 = t2[37], t2[38] !== P2 || t2[39] !== I2 || t2[40] !== y2 ? (M2 = Gr.jsxs("div", {
    "data-section-head": true,
    className: y2,
    children: [P2, I2]
  }), t2[38] = P2, t2[39] = I2, t2[40] = y2, t2[41] = M2) : M2 = t2[41], t2[42] !== o2 || t2[43] !== d2 ? (R2 = o2 ? Gr.jsx("div", {
    className: d2,
    children: o2
  }) : null, t2[42] = o2, t2[43] = d2, t2[44] = R2) : R2 = t2[44], t2[45] !== g2 || t2[46] !== M2 || t2[47] !== R2 ? (z2 = Gr.jsxs("section", {
    className: g2,
    style: v2,
    children: [M2, R2]
  }), t2[45] = g2, t2[46] = M2, t2[47] = R2, t2[48] = z2) : z2 = t2[48], z2;
});
function gb(e2) {
  const t2 = Kr.c(2),
    {
      children: n2
    } = e2;
  let a2;
  return t2[0] !== n2 ? (a2 = Gr.jsx("h3", {
    className: "-mt-1 mb-1.5 text-sm font-semibold text-muted-foreground/80",
    children: n2
  }), t2[0] = n2, t2[1] = a2) : a2 = t2[1], a2;
}
function kb(e2, t2) {
  const n2 = Kr.c(10),
    {
      axis: a2,
      target: r2,
      enabled: s2
    } = t2,
    i2 = void 0 === s2 || s2;
  let o2, l2;
  n2[0] !== a2 || n2[1] !== i2 || n2[2] !== e2.current || n2[3] !== (null == r2 ? void 0 : r2.current) ? (o2 = () => {
    var t3;
    const n3 = e2.current;
    if (!n3 || !i2) return;
    const s3 = null != (t3 = null == r2 ? void 0 : r2.current) ? t3 : n3,
      [o3, l3] = "y" === a2 ? ["data-more-above", "data-more-below"] : ["data-more-before", "data-more-after"],
      c2 = () => {
        const e3 = "y" === a2 ? n3.scrollTop : n3.scrollLeft,
          t4 = "y" === a2 ? n3.clientHeight : n3.clientWidth,
          r3 = "y" === a2 ? n3.scrollHeight : n3.scrollWidth;
        s3.toggleAttribute(o3, e3 > 1), s3.toggleAttribute(l3, e3 + t4 < r3 - 1);
      },
      u2 = new ResizeObserver(c2),
      d2 = () => {
        u2.disconnect(), u2.observe(n3);
        for (const e3 of Array.from(n3.children)) u2.observe(e3);
      };
    d2(), c2();
    const m2 = new MutationObserver(() => {
      d2(), c2();
    });
    return m2.observe(n3, {
      childList: true
    }), n3.addEventListener("scroll", c2, {
      passive: true
    }), () => {
      n3.removeEventListener("scroll", c2), u2.disconnect(), m2.disconnect(), s3.removeAttribute(o3), s3.removeAttribute(l3);
    };
  }, n2[0] = a2, n2[1] = i2, n2[2] = e2.current, n2[3] = null == r2 ? void 0 : r2.current, n2[4] = o2) : o2 = n2[4], n2[5] !== a2 || n2[6] !== i2 || n2[7] !== e2 || n2[8] !== r2 ? (l2 = [e2, r2, a2, i2], n2[5] = a2, n2[6] = i2, n2[7] = e2, n2[8] = r2, n2[9] = l2) : l2 = n2[9], Qr.useEffect(o2, l2);
}
function Nb(e2) {
  var t2;
  const n2 = Kr.c(14);
  let a2, r2, s2, i2;
  n2[0] !== e2 ? ({
    kind: r2,
    card: a2,
    ...s2
  } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3]), n2[4] !== r2 ? (i2 = Gr.jsx(ja, {
    kind: r2,
    className: "h-full w-full rounded-2xl",
    iconClassName: "size-1/3"
  }), n2[4] = r2, n2[5] = i2) : i2 = n2[5];
  const o2 = null != (t2 = null == a2 ? void 0 : a2.actions) && t2;
  let l2, c2;
  return n2[6] !== a2 || n2[7] !== i2 || n2[8] !== o2 ? (l2 = {
    ...a2,
    cover: i2,
    actions: o2
  }, n2[6] = a2, n2[7] = i2, n2[8] = o2, n2[9] = l2) : l2 = n2[9], n2[10] !== r2 || n2[11] !== s2 || n2[12] !== l2 ? (c2 = Gr.jsx(ub, {
    ...s2,
    systemCover: r2,
    card: l2
  }), n2[10] = r2, n2[11] = s2, n2[12] = l2, n2[13] = c2) : c2 = n2[13], c2;
}
const _b = Qr.forwardRef(function (e2, t2) {
  const n2 = Kr.c(22);
  let a2, r2, s2, i2, o2;
  n2[0] !== e2 ? ({
    scroll: o2,
    className: r2,
    children: a2,
    onMouseDown: s2,
    ...i2
  } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2, n2[5] = o2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4], o2 = n2[5]);
  const l2 = void 0 === o2 || o2,
    c2 = Qr.useRef(null);
  let u2;
  n2[6] !== t2 ? (u2 = e3 => {
    c2.current = e3, "function" == typeof t2 ? t2(e3) : t2 && (t2.current = e3);
  }, n2[6] = t2, n2[7] = u2) : u2 = n2[7];
  const d2 = u2;
  let m2, f2;
  n2[8] !== l2 ? (m2 = () => {
    if (l2 && c2.current) return qd(c2.current);
  }, f2 = [l2], n2[8] = l2, n2[9] = m2, n2[10] = f2) : (m2 = n2[9], f2 = n2[10]), Qr.useEffect(m2, f2);
  const h2 = l2 ? "overflow-y-auto overflow-x-hidden app-scrollbar" : "overflow-hidden";
  let p2, g2, v2;
  return n2[11] !== r2 || n2[12] !== h2 ? (p2 = x("relative flex h-full min-h-0 w-full min-w-0 flex-1 flex-col bg-transparent", h2, r2), n2[11] = r2, n2[12] = h2, n2[13] = p2) : p2 = n2[13], n2[14] !== s2 ? (g2 = e3 => {
    null == s2 || s2(e3), function (e4) {
      if (0 !== e4.button || e4.defaultPrevented || !("__TAURI__" in window)) return;
      const t3 = e4.currentTarget.getBoundingClientRect();
      if (e4.clientY - t3.top > 36 || e4.clientX > t3.right - 12) return;
      const n3 = e4.target;
      if (n3.closest("button, a, input, textarea, select, label, [role=button], [role=tab], [role=link], [contenteditable=true], [data-no-drag]") || "pointer" === getComputedStyle(n3).cursor) return;
      const a3 = Ot();
      2 === e4.detail ? a3.toggleMaximize() : a3.startDragging();
    }(e3);
  }, n2[14] = s2, n2[15] = g2) : g2 = n2[15], n2[16] !== a2 || n2[17] !== i2 || n2[18] !== d2 || n2[19] !== p2 || n2[20] !== g2 ? (v2 = Gr.jsx("div", {
    ref: d2,
    className: p2,
    onMouseDown: g2,
    ...i2,
    children: a2
  }), n2[16] = a2, n2[17] = i2, n2[18] = d2, n2[19] = p2, n2[20] = g2, n2[21] = v2) : v2 = n2[21], v2;
});
const Tb = Qr.forwardRef(function (e2, t2) {
    const n2 = Kr.c(13);
    let a2, r2, s2, i2;
    n2[0] !== e2 ? ({
      top: i2,
      className: r2,
      children: a2,
      ...s2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4]);
    const o2 = "page" === (void 0 === i2 ? "page" : i2) ? "pt-page-top [&>*:first-child_[data-section-head]]:pr-[max(0px,calc(var(--notch-clear,0px)_+_0.5rem_-_var(--page-x)))]" : "pt-0";
    let l2, c2;
    return n2[5] !== r2 || n2[6] !== o2 ? (l2 = x("relative flex w-full min-w-0 flex-col gap-section px-page pb-[calc(2.5rem+var(--floating-player-clearance,0px))]", o2, r2), n2[5] = r2, n2[6] = o2, n2[7] = l2) : l2 = n2[7], n2[8] !== a2 || n2[9] !== t2 || n2[10] !== s2 || n2[11] !== l2 ? (c2 = Gr.jsx("div", {
      ref: t2,
      className: l2,
      ...s2,
      children: a2
    }), n2[8] = a2, n2[9] = t2, n2[10] = s2, n2[11] = l2, n2[12] = c2) : c2 = n2[12], c2;
  }),
  Eb = Qr.forwardRef(function (e2, t2) {
    const n2 = Kr.c(25);
    let a2, r2, s2, i2, o2, l2, c2;
    n2[0] !== e2 ? ({
      className: r2,
      children: a2,
      style: l2,
      onScroll: i2,
      gutter: s2,
      anyWheel: c2,
      ...o2
    } = e2, n2[0] = e2, n2[1] = a2, n2[2] = r2, n2[3] = s2, n2[4] = i2, n2[5] = o2, n2[6] = l2, n2[7] = c2) : (a2 = n2[1], r2 = n2[2], s2 = n2[3], i2 = n2[4], o2 = n2[5], l2 = n2[6], c2 = n2[7]);
    const u2 = void 0 === c2 || c2,
      d2 = Qr.useRef(null),
      m2 = Qr.useRef(null);
    let f2, h2, p2, g2, v2, y2, b2;
    return n2[8] === Symbol.for("react.memo_cache_sentinel") ? (f2 = () => d2.current, n2[8] = f2) : f2 = n2[8], Qr.useImperativeHandle(t2, f2), n2[9] !== u2 ? (h2 = {
      wheelDelta: 0.5,
      anyWheel: u2
    }, n2[9] = u2, n2[10] = h2) : h2 = n2[10], Ue(d2, h2), n2[11] === Symbol.for("react.memo_cache_sentinel") ? (p2 = {
      axis: "x",
      target: m2
    }, n2[11] = p2) : p2 = n2[11], kb(d2, p2), n2[12] !== s2 ? (g2 = s2 ? {
      "--shelf-gutter": s2
    } : void 0, n2[12] = s2, n2[13] = g2) : g2 = n2[13], n2[14] !== r2 ? (v2 = x("shelf-track flex gap-5 overflow-x-auto scrollbar-none pb-2", r2), n2[14] = r2, n2[15] = v2) : v2 = n2[15], n2[16] !== a2 || n2[17] !== i2 || n2[18] !== o2 || n2[19] !== l2 || n2[20] !== v2 ? (y2 = Gr.jsx("div", {
      ref: d2,
      className: v2,
      style: l2,
      onScroll: i2,
      ...o2,
      children: a2
    }), n2[16] = a2, n2[17] = i2, n2[18] = o2, n2[19] = l2, n2[20] = v2, n2[21] = y2) : y2 = n2[21], n2[22] !== g2 || n2[23] !== y2 ? (b2 = Gr.jsx("div", {
      ref: m2,
      className: "shelf-edges",
      style: g2,
      children: y2
    }), n2[22] = g2, n2[23] = y2, n2[24] = b2) : b2 = n2[24], b2;
  });
const Ob = () => $b;
function $b(e2) {
  var t2, n2;
  const a2 = {
    id: e2.id,
    title: e2.title,
    cover_art: null != (t2 = e2.cover_art) ? t2 : void 0,
    author: null != (n2 = Ee(e2)) ? n2 : void 0,
    source: e2.source,
    kind: e2.kind,
    tracks: [],
    tracks_count: e2.tracks_count,
    originals: e2.originals
  };
  w.getState().openPlaylistView(a2, false), Le.getState().addPlaylistToHistory(a2);
}
const Wb = Xr.memo(function (e2) {
    const t2 = Kr.c(36),
      {
        frame: n2,
        size: a2,
        className: r2,
        children: s2,
        customColor: i2,
        isOnline: o2
      } = e2,
      l2 = void 0 === a2 ? "md" : a2,
      c2 = void 0 === r2 ? "" : r2,
      u2 = (null == n2 ? void 0 : n2.url) || (null == n2 ? void 0 : n2.url);
    let d2;
    t2[0] === Symbol.for("react.memo_cache_sentinel") ? (d2 = {
      xs: {
        frame: "w-8 h-8",
        inset: "inset-[1px]",
        dot: "h-2 w-2",
        dotOffset: "bottom-0 right-0"
      },
      sm: {
        frame: "w-12 h-12",
        inset: "inset-[1.5px]",
        dot: "h-2.5 w-2.5",
        dotOffset: "bottom-0.5 right-0.5"
      },
      md: {
        frame: "w-16 h-16",
        inset: "inset-[2px]",
        dot: "h-3 w-3",
        dotOffset: "bottom-1 right-1"
      },
      lg: {
        frame: "w-20 h-20",
        inset: "inset-[2.5px]",
        dot: "h-3.5 w-3.5",
        dotOffset: "bottom-1.5 right-1.5"
      },
      xl: {
        frame: "w-24 h-24",
        inset: "inset-[3px]",
        dot: "h-4 w-4",
        dotOffset: "bottom-2 right-2"
      },
      profile: {
        frame: "w-32 h-32",
        inset: "inset-1",
        dot: "h-5 w-5",
        dotOffset: "bottom-2.5 right-2.5"
      },
      hero: {
        frame: "w-40 h-40",
        inset: "inset-1",
        dot: "h-5 w-5",
        dotOffset: "bottom-3 right-3"
      }
    }, t2[0] = d2) : d2 = t2[0];
    const m2 = d2,
      f2 = m2[l2] || m2.md;
    let h2;
    t2[1] !== f2.dot || t2[2] !== f2.dotOffset || t2[3] !== o2 ? (h2 = o2 && Gr.jsx("div", {
      className: `absolute ${f2.dotOffset} ${f2.dot} rounded-full bg-color-success z-[35] ring-2 ring-background`
    }), t2[1] = f2.dot, t2[2] = f2.dotOffset, t2[3] = o2, t2[4] = h2) : h2 = t2[4];
    const p2 = h2;
    if (i2 && !u2) {
      const e3 = (g2 = i2).startsWith("linear-gradient(") || g2.startsWith("radial-gradient("),
        n3 = `relative ${f2.frame} ${c2} rounded-full`,
        a3 = e3 ? i2 : void 0,
        r3 = e3 ? void 0 : i2;
      let o3;
      t2[5] !== a3 || t2[6] !== r3 ? (o3 = Gr.jsx("div", {
        className: "absolute inset-0 overflow-hidden rounded-full",
        style: {
          background: a3,
          backgroundColor: r3
        }
      }), t2[5] = a3, t2[6] = r3, t2[7] = o3) : o3 = t2[7];
      const l3 = `absolute ${f2.inset} rounded-full overflow-hidden flex items-center justify-center`;
      let u3, d3;
      return t2[8] !== s2 || t2[9] !== l3 ? (u3 = Gr.jsx("div", {
        className: l3,
        children: s2
      }), t2[8] = s2, t2[9] = l3, t2[10] = u3) : u3 = t2[10], t2[11] !== p2 || t2[12] !== u3 || t2[13] !== n3 || t2[14] !== o3 ? (d3 = Gr.jsxs("div", {
        className: n3,
        children: [o3, u3, p2]
      }), t2[11] = p2, t2[12] = u3, t2[13] = n3, t2[14] = o3, t2[15] = d3) : d3 = t2[15], d3;
    }
    var g2;
    if (!u2) {
      const e3 = `relative ${f2.frame} ${c2} rounded-full`;
      let n3, a3;
      return t2[16] === Symbol.for("react.memo_cache_sentinel") ? (n3 = Gr.jsx("div", {
        className: "absolute inset-0 rounded-full ring-1 ring-white/[0.08] pointer-events-none z-10"
      }), t2[16] = n3) : n3 = t2[16], t2[17] !== s2 || t2[18] !== p2 || t2[19] !== e3 ? (a3 = Gr.jsxs("div", {
        className: e3,
        children: [n3, s2, p2]
      }), t2[17] = s2, t2[18] = p2, t2[19] = e3, t2[20] = a3) : a3 = t2[20], a3;
    }
    const v2 = `relative ${f2.frame} ${c2} rounded-full`;
    let x2, y2, b2;
    t2[21] === Symbol.for("react.memo_cache_sentinel") ? (x2 = {
      pointerEvents: "none"
    }, t2[21] = x2) : x2 = t2[21], t2[22] === Symbol.for("react.memo_cache_sentinel") ? (y2 = {
      pointerEvents: "none"
    }, t2[22] = y2) : y2 = t2[22], t2[23] !== u2 ? (b2 = Gr.jsx("div", {
      className: "absolute inset-0 z-20 pointer-events-none",
      style: x2,
      children: Gr.jsx("img", {
        src: u2,
        alt: "",
        className: "w-full h-full object-fill",
        style: y2
      })
    }), t2[23] = u2, t2[24] = b2) : b2 = t2[24];
    const w2 = `absolute ${f2.inset} z-10 rounded-full overflow-hidden flex items-center justify-center`;
    let k2, j2, S2;
    return t2[25] !== s2 || t2[26] !== l2 ? (k2 = s2 || Gr.jsx("div", {
      className: "w-full h-full flex items-center justify-center rounded-full bg-primary/10",
      children: Gr.jsx(_.user, {
        className: ("xs" === l2 ? "w-4 h-4" : "sm" === l2 ? "w-6 h-6" : "md" === l2 ? "w-8 h-8" : "lg" === l2 ? "w-10 h-10" : "w-14 h-14") + " text-primary"
      })
    }), t2[25] = s2, t2[26] = l2, t2[27] = k2) : k2 = t2[27], t2[28] !== k2 || t2[29] !== w2 ? (j2 = Gr.jsx("div", {
      className: w2,
      children: k2
    }), t2[28] = k2, t2[29] = w2, t2[30] = j2) : j2 = t2[30], t2[31] !== p2 || t2[32] !== j2 || t2[33] !== v2 || t2[34] !== b2 ? (S2 = Gr.jsxs("div", {
      className: v2,
      children: [b2, j2, p2]
    }), t2[31] = p2, t2[32] = j2, t2[33] = v2, t2[34] = b2, t2[35] = S2) : S2 = t2[35], S2;
  }, (e2, t2) => {
    var n2, a2, r2, s2;
    return (null != (a2 = null == (n2 = e2.frame) ? void 0 : n2.url) ? a2 : null) === (null != (s2 = null == (r2 = t2.frame) ? void 0 : r2.url) ? s2 : null) && e2.size === t2.size && e2.className === t2.className && e2.customColor === t2.customColor && e2.isOnline === t2.isOnline && e2.children === t2.children;
  }),
  Qb = {
    xs: {
      container: "w-3.5 h-3.5",
      image: "rounded-[3px]"
    },
    sm: {
      container: "w-4 h-4",
      image: "rounded"
    },
    md: {
      container: "w-5 h-5",
      image: "rounded"
    },
    lg: {
      container: "w-6 h-6",
      image: "rounded-[5px]"
    },
    xl: {
      container: "w-8 h-8",
      image: "rounded-md"
    }
  },
  Kb = Qr.memo(function (e2) {
    const t2 = Kr.c(12),
      {
        emblem: n2,
        className: a2,
        size: r2
      } = e2,
      s2 = void 0 === r2 ? "md" : r2,
      i2 = (null == n2 ? void 0 : n2.url) || "",
      o2 = Qb[s2] || Qb.md;
    let l2;
    t2[0] !== a2 || t2[1] !== o2.container ? (l2 = x("inline-flex items-center justify-center shrink-0", o2.container, a2), t2[0] = a2, t2[1] = o2.container, t2[2] = l2) : l2 = t2[2];
    const c2 = null == n2 ? void 0 : n2.name;
    let u2, d2, m2;
    return t2[3] !== o2.image ? (u2 = x("w-full h-full object-contain", o2.image), t2[3] = o2.image, t2[4] = u2) : u2 = t2[4], t2[5] !== c2 || t2[6] !== u2 || t2[7] !== i2 ? (d2 = Gr.jsx("img", {
      src: i2,
      alt: c2,
      className: u2,
      loading: "lazy",
      decoding: "async"
    }), t2[5] = c2, t2[6] = u2, t2[7] = i2, t2[8] = d2) : d2 = t2[8], t2[9] !== l2 || t2[10] !== d2 ? (m2 = Gr.jsx("div", {
      className: l2,
      children: d2
    }), t2[9] = l2, t2[10] = d2, t2[11] = m2) : m2 = t2[11], m2;
  }),
  Gb = Qr.memo(function (e2) {
    const t2 = Kr.c(6),
      {
        emblem: n2,
        className: a2
      } = e2,
      r2 = `ml-1 inline-flex items-center justify-center w-4 h-4 ${a2 || ""}`;
    let s2, i2;
    return t2[0] !== n2.name || t2[1] !== n2.url ? (s2 = Gr.jsx("img", {
      src: n2.url,
      alt: n2.name,
      className: "w-4 h-4 object-contain rounded",
      loading: "lazy",
      decoding: "async"
    }), t2[0] = n2.name, t2[1] = n2.url, t2[2] = s2) : s2 = t2[2], t2[3] !== r2 || t2[4] !== s2 ? (i2 = Gr.jsx("div", {
      className: r2,
      children: s2
    }), t2[3] = r2, t2[4] = s2, t2[5] = i2) : i2 = t2[5], i2;
  });
function Yb(e2) {
  var t2, n2;
  const a2 = Kr.c(12),
    {
      nickname: r2,
      customColors: s2,
      className: i2,
      onClick: o2
    } = e2,
    l2 = null == (t2 = null == s2 ? void 0 : s2.nickname) ? void 0 : t2.font,
    c2 = (null == (n2 = null == s2 ? void 0 : s2.nickname) ? void 0 : n2.effect) || "none",
    u2 = null == s2 ? void 0 : s2.color,
    d2 = o2 && "cursor-pointer hover:opacity-85";
  let m2;
  a2[0] !== i2 || a2[1] !== d2 ? (m2 = x(d2, i2), a2[0] = i2, a2[1] = d2, a2[2] = m2) : m2 = a2[2];
  const f2 = o2 ? "button" : void 0,
    h2 = o2 ? 0 : void 0;
  let p2;
  return a2[3] !== u2 || a2[4] !== c2 || a2[5] !== l2 || a2[6] !== r2 || a2[7] !== o2 || a2[8] !== m2 || a2[9] !== f2 || a2[10] !== h2 ? (p2 = Gr.jsx(ri, {
    effect: c2,
    font: l2,
    color: u2,
    className: m2,
    onClick: o2,
    role: f2,
    tabIndex: h2,
    children: r2
  }), a2[3] = u2, a2[4] = c2, a2[5] = l2, a2[6] = r2, a2[7] = o2, a2[8] = m2, a2[9] = f2, a2[10] = h2, a2[11] = p2) : p2 = a2[11], p2;
}
function ew(e2) {
  var t2;
  if (!e2 || !e2.colors || 0 === e2.colors.length) return;
  return `linear-gradient(${null != (t2 = e2.angle) ? t2 : 90}deg, ${e2.colors.join(", ")})`;
}
function aw(e2) {
  var t2;
  const n2 = Kr.c(42),
    {
      title: a2,
      className: r2,
      size: s2,
      truncate: i2
    } = e2,
    o2 = void 0 === s2 ? "xs" : s2,
    l2 = void 0 !== i2 && i2,
    [c2, u2] = Xr.useState("rounded-sm");
  let d2;
  n2[0] === Symbol.for("react.memo_cache_sentinel") ? (d2 = e3 => {
    const t3 = e3.currentTarget;
    t3.naturalWidth, t3.naturalHeight;
    u2("rounded-sm");
  }, n2[0] = d2) : d2 = n2[0];
  const m2 = d2;
  let f2;
  n2[1] === Symbol.for("react.memo_cache_sentinel") ? (f2 = {
    xs: "text-micro px-1.5 py-0.5 leading-none",
    sm: "text-xs px-1.5 py-0.5 leading-none",
    md: "text-sm px-2 py-0.5",
    lg: "text-base px-2.5 py-1",
    xl: "text-lg px-3 py-1",
    "2xl": "text-xl px-3.5 py-1.5"
  }, n2[1] = f2) : f2 = n2[1];
  const h2 = f2;
  let p2;
  n2[2] === Symbol.for("react.memo_cache_sentinel") ? (p2 = {
    xs: "h-3.5",
    sm: "h-4",
    md: "h-5",
    lg: "h-6",
    xl: "h-8",
    "2xl": "h-10"
  }, n2[2] = p2) : p2 = n2[2];
  const g2 = p2;
  let v2;
  n2[3] === Symbol.for("react.memo_cache_sentinel") ? (v2 = {
    xs: "w-2.5 h-2.5",
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
    "2xl": "w-7 h-7"
  }, n2[3] = v2) : v2 = n2[3];
  const x2 = v2;
  if (a2.url) {
    const e3 = `${g2[o2]} ${c2} object-contain ${l2 ? "min-w-0 max-w-full object-left" : ""} ${r2 || ""}`;
    let t3;
    return n2[4] !== e3 || n2[5] !== a2.name || n2[6] !== a2.url ? (t3 = Gr.jsx("img", {
      src: a2.url,
      alt: a2.name,
      className: e3,
      onLoad: m2
    }), n2[4] = e3, n2[5] = a2.name, n2[6] = a2.url, n2[7] = t3) : t3 = n2[7], t3;
  }
  let y2;
  n2[8] !== a2.text_gradient ? (y2 = ew(a2.text_gradient), n2[8] = a2.text_gradient, n2[9] = y2) : y2 = n2[9];
  const b2 = y2,
    w2 = a2.text_shadow || "none",
    k2 = a2.font_weight || "inherit";
  let j2, S2;
  n2[10] !== b2 || n2[11] !== a2.color ? (j2 = b2 ? {
    backgroundImage: b2,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  } : {
    color: a2.color || "inherit"
  }, n2[10] = b2, n2[11] = a2.color, n2[12] = j2) : j2 = n2[12], n2[13] !== j2 || n2[14] !== w2 || n2[15] !== k2 ? (S2 = {
    textShadow: w2,
    fontWeight: k2,
    ...j2
  }, n2[13] = j2, n2[14] = w2, n2[15] = k2, n2[16] = S2) : S2 = n2[16];
  const N2 = S2;
  let _2;
  n2[17] !== o2 || n2[18] !== a2.icon ? (_2 = () => {
    var e3;
    return (null == (e3 = a2.icon) ? void 0 : e3.url) ? Gr.jsx("img", {
      src: a2.icon.url,
      alt: "",
      className: `${x2[o2]} object-contain inline-block`
    }) : null;
  }, n2[17] = o2, n2[18] = a2.icon, n2[19] = _2) : _2 = n2[19];
  const C2 = _2,
    T2 = (null == (t2 = a2.icon) ? void 0 : t2.position) || "left",
    E2 = `${h2[o2]} rounded-sm inline-flex items-center gap-1.5 ${l2 ? "min-w-0 max-w-full" : ""} ${r2 || ""}`,
    L2 = a2.background || "hsl(var(--primary) / 0.1)";
  let A2, P2, I2;
  n2[20] !== L2 || n2[21] !== N2 ? (A2 = {
    ...N2,
    background: L2
  }, n2[20] = L2, n2[21] = N2, n2[22] = A2) : A2 = n2[22], n2[23] !== T2 || n2[24] !== C2 ? (P2 = "left" === T2 && C2(), n2[23] = T2, n2[24] = C2, n2[25] = P2) : P2 = n2[25], n2[26] !== T2 || n2[27] !== C2 ? (I2 = "center" === T2 && C2(), n2[26] = T2, n2[27] = C2, n2[28] = I2) : I2 = n2[28];
  const M2 = l2 ? "truncate" : void 0;
  let R2, z2, D2;
  return n2[29] !== M2 || n2[30] !== a2.name ? (R2 = Gr.jsx("span", {
    className: M2,
    children: a2.name
  }), n2[29] = M2, n2[30] = a2.name, n2[31] = R2) : R2 = n2[31], n2[32] !== T2 || n2[33] !== C2 ? (z2 = "right" === T2 && C2(), n2[32] = T2, n2[33] = C2, n2[34] = z2) : z2 = n2[34], n2[35] !== E2 || n2[36] !== A2 || n2[37] !== P2 || n2[38] !== I2 || n2[39] !== R2 || n2[40] !== z2 ? (D2 = Gr.jsxs("span", {
    className: E2,
    style: A2,
    children: [P2, I2, R2, z2]
  }), n2[35] = E2, n2[36] = A2, n2[37] = P2, n2[38] = I2, n2[39] = R2, n2[40] = z2, n2[41] = D2) : D2 = n2[41], D2;
}
function rw(e2) {
  var t2;
  const n2 = Kr.c(35),
    {
      title: a2,
      className: r2
    } = e2,
    [s2, i2] = Xr.useState("rounded-sm");
  let o2;
  n2[0] === Symbol.for("react.memo_cache_sentinel") ? (o2 = e3 => {
    const t3 = e3.currentTarget,
      n3 = t3.naturalWidth / t3.naturalHeight;
    i2(n3 >= 0.9 && n3 <= 1.1 ? "rounded-sm" : "rounded-md");
  }, n2[0] = o2) : o2 = n2[0];
  const l2 = o2;
  if (a2.url) {
    const e3 = `h-4 ${s2} object-contain ${r2 || ""}`;
    let t3;
    return n2[1] !== e3 || n2[2] !== a2.name || n2[3] !== a2.url ? (t3 = Gr.jsx("img", {
      src: a2.url,
      alt: a2.name,
      className: e3,
      onLoad: l2
    }), n2[1] = e3, n2[2] = a2.name, n2[3] = a2.url, n2[4] = t3) : t3 = n2[4], t3;
  }
  let c2;
  n2[5] !== a2.text_gradient ? (c2 = ew(a2.text_gradient), n2[5] = a2.text_gradient, n2[6] = c2) : c2 = n2[6];
  const u2 = c2,
    d2 = a2.background || "transparent",
    m2 = a2.text_shadow || "none",
    f2 = a2.font_weight || "normal";
  let h2, p2;
  n2[7] !== u2 || n2[8] !== a2.color ? (h2 = u2 ? {
    backgroundImage: u2,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  } : {
    color: a2.color || "inherit"
  }, n2[7] = u2, n2[8] = a2.color, n2[9] = h2) : h2 = n2[9], n2[10] !== d2 || n2[11] !== m2 || n2[12] !== f2 || n2[13] !== h2 ? (p2 = {
    background: d2,
    textShadow: m2,
    fontWeight: f2,
    ...h2
  }, n2[10] = d2, n2[11] = m2, n2[12] = f2, n2[13] = h2, n2[14] = p2) : p2 = n2[14];
  const g2 = p2;
  let v2;
  n2[15] !== a2.icon ? (v2 = () => {
    var e3;
    return (null == (e3 = a2.icon) ? void 0 : e3.url) ? Gr.jsx("img", {
      src: a2.icon.url,
      alt: "",
      className: "w-3 h-3 object-contain inline-block"
    }) : null;
  }, n2[15] = a2.icon, n2[16] = v2) : v2 = n2[16];
  const x2 = v2,
    y2 = (null == (t2 = a2.icon) ? void 0 : t2.position) || "left",
    b2 = `px-2 py-1 text-xs rounded-md whitespace-nowrap inline-flex items-center gap-1 ${r2 || ""}`;
  let w2, k2, j2, S2, N2;
  return n2[17] !== y2 || n2[18] !== x2 ? (w2 = "left" === y2 && x2(), n2[17] = y2, n2[18] = x2, n2[19] = w2) : w2 = n2[19], n2[20] !== y2 || n2[21] !== x2 ? (k2 = "center" === y2 && x2(), n2[20] = y2, n2[21] = x2, n2[22] = k2) : k2 = n2[22], n2[23] !== a2.name ? (j2 = Gr.jsx("span", {
    children: a2.name
  }), n2[23] = a2.name, n2[24] = j2) : j2 = n2[24], n2[25] !== y2 || n2[26] !== x2 ? (S2 = "right" === y2 && x2(), n2[25] = y2, n2[26] = x2, n2[27] = S2) : S2 = n2[27], n2[28] !== w2 || n2[29] !== k2 || n2[30] !== j2 || n2[31] !== S2 || n2[32] !== b2 || n2[33] !== g2 ? (N2 = Gr.jsxs("span", {
    className: b2,
    style: g2,
    children: [w2, k2, j2, S2]
  }), n2[28] = w2, n2[29] = k2, n2[30] = j2, n2[31] = S2, n2[32] = b2, n2[33] = g2, n2[34] = N2) : N2 = n2[34], N2;
}
function sw(e2) {
  const t2 = Kr.c(7),
    {
      level: n2
    } = e2;
  if ("number" != typeof n2 || n2 <= 0) return null;
  const a2 = `Fame ${n2}`;
  let r2, s2, i2, o2;
  return t2[0] === Symbol.for("react.memo_cache_sentinel") ? (r2 = Gr.jsx(Ea, {
    weight: "Bold",
    className: "h-4 w-4 text-foreground/80"
  }), t2[0] = r2) : r2 = t2[0], t2[1] === Symbol.for("react.memo_cache_sentinel") ? (s2 = {
    fontSize: 8
  }, t2[1] = s2) : s2 = t2[1], t2[2] !== n2 ? (i2 = Gr.jsx("span", {
    className: "absolute font-semibold leading-none text-background",
    style: s2,
    children: n2
  }), t2[2] = n2, t2[3] = i2) : i2 = t2[3], t2[4] !== a2 || t2[5] !== i2 ? (o2 = Gr.jsxs("span", {
    className: "relative inline-flex h-4 w-4 shrink-0 items-center justify-center",
    "aria-label": a2,
    children: [r2, i2]
  }), t2[4] = a2, t2[5] = i2, t2[6] = o2) : o2 = t2[6], o2;
}
const iw = Xr.memo(function (e2) {
  var t2, n2;
  const a2 = Kr.c(73),
    {
      name: r2,
      avatar: s2,
      customColors: i2,
      active: o2,
      premium: l2,
      size: c2,
      avatarOnly: u2,
      nameOnly: d2,
      compact: m2,
      isOnline: f2,
      onClick: h2,
      className: p2,
      avatarClassName: g2,
      contentClassName: v2,
      nameRowClassName: y2,
      nicknameClassName: b2,
      subtitle: w2,
      subtitleClassName: k2,
      marqueeNameOnHover: j2,
      fameLevel: S2,
      nameLeading: N2,
      nameTrailing: _2,
      stacked: C2
    } = e2,
    T2 = void 0 === c2 ? "md" : c2,
    E2 = void 0 !== u2 && u2,
    L2 = void 0 !== d2 && d2,
    A2 = void 0 !== m2 && m2,
    P2 = void 0 !== f2 && f2,
    I2 = void 0 !== j2 && j2,
    M2 = void 0 !== C2 && C2,
    R2 = null == o2 ? void 0 : o2.frame,
    z2 = A2 || null == o2 ? void 0 : o2.title,
    D2 = A2 || null == o2 ? void 0 : o2.emblem;
  let F2, O2, $2, B2, U2, q2, H2, W2, V2, Q2, K2, G2, X2, Y2, J2, Z2, ee2, te2, ne2, ae2, re2;
  if (a2[0] !== R2 || a2[1] !== z2 || a2[2] !== s2 || a2[3] !== g2 || a2[4] !== E2 || a2[5] !== p2 || a2[6] !== A2 || a2[7] !== v2 || a2[8] !== i2 || a2[9] !== P2 || a2[10] !== I2 || a2[11] !== r2 || a2[12] !== N2 || a2[13] !== L2 || a2[14] !== y2 || a2[15] !== b2 || a2[16] !== h2 || a2[17] !== (null == l2 ? void 0 : l2.level) || a2[18] !== T2 || a2[19] !== M2) {
    K2 = Symbol.for("react.early_return_sentinel");
    e: {
      const e3 = {
        sm: "h-8 w-8",
        md: "h-9 w-9",
        lg: "h-11 w-11",
        xl: "h-40 w-40",
        profile: "h-32 w-32"
      };
      let o3;
      a2[33] === Symbol.for("react.memo_cache_sentinel") ? (o3 = {
        sm: "xs",
        md: "xs",
        lg: "sm",
        xl: "xl",
        profile: "profile"
      }, a2[33] = o3) : o3 = a2[33];
      const c3 = o3;
      O2 = !A2 && (null != (t2 = null == l2 ? void 0 : l2.level) ? t2 : 0) > 0, $2 = null != (n2 = null == l2 ? void 0 : l2.level) ? n2 : 1;
      const u3 = {
        sm: {
          title: "xs",
          emblem: "xs",
          premium: "xs",
          nickname: "text-xs"
        },
        md: {
          title: "sm",
          emblem: "sm",
          premium: "sm",
          nickname: "text-sm"
        },
        lg: {
          title: "sm",
          emblem: "sm",
          premium: "sm",
          nickname: "text-sm font-semibold"
        },
        xl: {
          title: "md",
          emblem: "md",
          premium: "md",
          nickname: "text-xl font-bold"
        },
        profile: {
          title: "md",
          emblem: "md",
          premium: "md",
          nickname: "text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
        }
      };
      F2 = u3[T2] || u3.md;
      const d3 = () => {
        var t3;
        return Gr.jsx(Wb, {
          frame: R2,
          customColor: null != (t3 = null == i2 ? void 0 : i2.color) ? t3 : void 0,
          size: c3[T2],
          className: x(e3[T2], "border-0 shadow-sm rounded-full flex-shrink-0", g2),
          isOnline: P2,
          children: Gr.jsx(Qg, {
            src: s2,
            name: r2,
            className: "h-full w-full rounded-full",
            imageClassName: "rounded-full object-cover",
            fallbackClassName: "rounded-full text-xs font-semibold"
          })
        });
      };
      if (E2) {
        if (h2) {
          K2 = Gr.jsx("button", {
            type: "button",
            onClick: h2,
            "aria-label": r2,
            className: "cursor-pointer hover:opacity-85 flex-shrink-0 transition-opacity",
            children: d3()
          });
          break e;
        }
        K2 = d3();
      } else a2[34] !== p2 ? (V2 = x("flex items-center gap-2.5 min-w-0", p2), a2[34] = p2, a2[35] = V2) : V2 = a2[35], Q2 = !L2 && (h2 ? Gr.jsx("button", {
        type: "button",
        onClick: h2,
        "aria-label": r2,
        className: "cursor-pointer hover:opacity-85 flex-shrink-0 transition-opacity",
        children: d3()
      }) : d3()), a2[36] !== v2 ? (H2 = x("flex-1 min-w-0 flex flex-col justify-center text-left", v2), a2[36] = v2, a2[37] = H2) : H2 = a2[37], W2 = M2 && (N2 || z2) && Gr.jsxs("div", {
        className: "mb-1 flex min-w-0 items-center gap-1.5",
        children: [N2 && Gr.jsx("div", {
          className: "shrink-0",
          children: N2
        }), z2 && Gr.jsx(aw, {
          title: z2,
          size: F2.title,
          truncate: true
        })]
      }), a2[38] !== y2 ? (B2 = x("flex items-center gap-1.5 flex-nowrap w-full overflow-hidden leading-none", y2), a2[38] = y2, a2[39] = B2) : B2 = a2[39], U2 = !M2 && N2, q2 = !M2 && z2 && Gr.jsx(aw, {
        title: z2,
        size: F2.title,
        className: "shrink-0"
      }), G2 = "overflow-hidden relative min-w-0 flex-initial", X2 = I2 ? Gr.jsx(Gs, {
        playOnHover: true,
        className: "w-full",
        children: Gr.jsx(Yb, {
          nickname: r2,
          customColors: i2 || void 0,
          className: x("font-semibold leading-none", F2.nickname, h2 && "cursor-pointer hover:opacity-85", b2),
          onClick: h2
        })
      }) : Gr.jsx(Yb, {
        nickname: r2,
        customColors: i2 || void 0,
        className: x("font-semibold leading-none", F2.nickname, h2 && "cursor-pointer hover:opacity-85", b2),
        onClick: h2
      });
    }
    a2[0] = R2, a2[1] = z2, a2[2] = s2, a2[3] = g2, a2[4] = E2, a2[5] = p2, a2[6] = A2, a2[7] = v2, a2[8] = i2, a2[9] = P2, a2[10] = I2, a2[11] = r2, a2[12] = N2, a2[13] = L2, a2[14] = y2, a2[15] = b2, a2[16] = h2, a2[17] = null == l2 ? void 0 : l2.level, a2[18] = T2, a2[19] = M2, a2[20] = F2, a2[21] = O2, a2[22] = $2, a2[23] = B2, a2[24] = U2, a2[25] = q2, a2[26] = H2, a2[27] = W2, a2[28] = V2, a2[29] = Q2, a2[30] = K2, a2[31] = G2, a2[32] = X2;
  } else F2 = a2[20], O2 = a2[21], $2 = a2[22], B2 = a2[23], U2 = a2[24], q2 = a2[25], H2 = a2[26], W2 = a2[27], V2 = a2[28], Q2 = a2[29], K2 = a2[30], G2 = a2[31], X2 = a2[32];
  return K2 !== Symbol.for("react.early_return_sentinel") ? K2 : (a2[40] !== G2 || a2[41] !== X2 ? (Y2 = Gr.jsx("div", {
    className: G2,
    children: X2
  }), a2[40] = G2, a2[41] = X2, a2[42] = Y2) : Y2 = a2[42], a2[43] !== D2 || a2[44] !== F2 ? (J2 = D2 && Gr.jsx(Kb, {
    emblem: D2,
    size: F2.emblem,
    className: "shrink-0"
  }), a2[43] = D2, a2[44] = F2, a2[45] = J2) : J2 = a2[45], a2[46] !== F2 || a2[47] !== O2 || a2[48] !== $2 ? (Z2 = O2 && Gr.jsx(si, {
    premium: {
      level: $2
    },
    size: F2.premium,
    className: "shrink-0"
  }), a2[46] = F2, a2[47] = O2, a2[48] = $2, a2[49] = Z2) : Z2 = a2[49], a2[50] !== S2 ? (ee2 = Gr.jsx(sw, {
    level: S2
  }), a2[50] = S2, a2[51] = ee2) : ee2 = a2[51], a2[52] !== _2 || a2[53] !== B2 || a2[54] !== U2 || a2[55] !== q2 || a2[56] !== Y2 || a2[57] !== J2 || a2[58] !== Z2 || a2[59] !== ee2 ? (te2 = Gr.jsxs("div", {
    className: B2,
    children: [U2, q2, Y2, J2, Z2, ee2, _2]
  }), a2[52] = _2, a2[53] = B2, a2[54] = U2, a2[55] = q2, a2[56] = Y2, a2[57] = J2, a2[58] = Z2, a2[59] = ee2, a2[60] = te2) : te2 = a2[60], a2[61] !== w2 || a2[62] !== k2 ? (ne2 = w2 && Gr.jsx("div", {
    className: x("text-caption truncate mt-1 text-muted-foreground/70 leading-normal", k2),
    children: w2
  }), a2[61] = w2, a2[62] = k2, a2[63] = ne2) : ne2 = a2[63], a2[64] !== H2 || a2[65] !== W2 || a2[66] !== te2 || a2[67] !== ne2 ? (ae2 = Gr.jsxs("div", {
    className: H2,
    children: [W2, te2, ne2]
  }), a2[64] = H2, a2[65] = W2, a2[66] = te2, a2[67] = ne2, a2[68] = ae2) : ae2 = a2[68], a2[69] !== V2 || a2[70] !== Q2 || a2[71] !== ae2 ? (re2 = Gr.jsxs("div", {
    className: V2,
    children: [Q2, ae2]
  }), a2[69] = V2, a2[70] = Q2, a2[71] = ae2, a2[72] = re2) : re2 = a2[72], re2);
});
const Xw = e2 => b.setState({
  panel: e2
});
function Yw(e2) {
  const t2 = Kr.c(17),
    {
      panel: n2,
      hasLyrics: a2
    } = e2,
    {
      t: r2
    } = P(),
    s2 = u(ak),
    i2 = u(nk),
    o2 = u(tk);
  let l2;
  t2[0] !== a2 || t2[1] !== n2 || t2[2] !== r2 ? (l2 = a2 && Gr.jsx(A, {
    variant: "quiet",
    size: "2xs",
    onClick: ek,
    className: x("h-9 shrink-0 rounded-full border px-3.5 text-sm font-medium", "lyrics" === n2 ? "border-transparent bg-selected text-foreground" : "border-border-subtle text-foreground/50 hover:text-foreground"),
    children: r2("player.panel.lyrics")
  }), t2[0] = a2, t2[1] = n2, t2[2] = r2, t2[3] = l2) : l2 = t2[3];
  const c2 = "queue" !== n2 && "opacity-50 hover:opacity-80";
  let d2;
  t2[4] !== c2 ? (d2 = x("min-w-0 flex-1 cursor-pointer transition-opacity duration-150", c2), t2[4] = c2, t2[5] = d2) : d2 = t2[5];
  const m2 = "queue" === n2 ? "border-transparent bg-selected" : void 0;
  let f2, h2, p2;
  return t2[6] !== o2 || t2[7] !== s2 || t2[8] !== m2 || t2[9] !== i2 ? (f2 = Gr.jsx(Ep, {
    songsCount: s2,
    upcomingCount: i2,
    onClear: o2,
    stretch: true,
    pillClassName: m2,
    className: "mb-0"
  }), t2[6] = o2, t2[7] = s2, t2[8] = m2, t2[9] = i2, t2[10] = f2) : f2 = t2[10], t2[11] !== d2 || t2[12] !== f2 ? (h2 = Gr.jsx("div", {
    role: "button",
    tabIndex: 0,
    onClick: Zw,
    onKeyDown: Jw,
    className: d2,
    children: f2
  }), t2[11] = d2, t2[12] = f2, t2[13] = h2) : h2 = t2[13], t2[14] !== l2 || t2[15] !== h2 ? (p2 = Gr.jsxs("div", {
    className: "flex shrink-0 items-center gap-2 px-3 pb-2 pt-1",
    children: [l2, h2]
  }), t2[14] = l2, t2[15] = h2, t2[16] = p2) : p2 = t2[16], p2;
}
function Jw(e2) {
  "Enter" !== e2.key && " " !== e2.key || Xw("queue");
}
function Zw() {
  return Xw("queue");
}
function ek() {
  return Xw("lyrics");
}
function tk(e2) {
  return e2.clearQueue;
}
function nk(e2) {
  const t2 = e2.queueSongs.findIndex(t3 => {
    var n2;
    return t3.id === (null == (n2 = e2.currentSong) ? void 0 : n2.id);
  });
  return t2 < 0 ? e2.queueSongs.length : e2.queueSongs.length - t2 - 1;
}
function ak(e2) {
  return e2.queueSongs.length;
}
function ik(e2) {
  const t2 = Kr.c(17),
    {
      panel: n2
    } = e2,
    {
      data: a2,
      actions: r2
    } = mp(),
    s2 = Wv(),
    i2 = s2 ? n2 : "queue";
  let o2, l2, c2, u2, d2, m2;
  return t2[0] !== i2 ? (o2 = "queue" === i2 ? Gr.jsx(Hv, {
    playerLayout: "panel",
    isExpanded: false,
    hideHeader: true
  }) : Gr.jsx(ky, {}), t2[0] = i2, t2[1] = o2) : o2 = t2[1], t2[2] !== o2 || t2[3] !== i2 ? (l2 = Gr.jsx("div", {
    className: "min-h-0 flex-1 animate-in fade-in duration-200 motion-reduce:animate-none",
    children: o2
  }, i2), t2[2] = o2, t2[3] = i2, t2[4] = l2) : l2 = t2[4], t2[5] !== s2 || t2[6] !== i2 ? (c2 = Gr.jsx(Yw, {
    panel: i2,
    hasLyrics: s2
  }), t2[5] = s2, t2[6] = i2, t2[7] = c2) : c2 = t2[7], t2[8] !== l2 || t2[9] !== c2 ? (u2 = Gr.jsxs("div", {
    className: "flex h-full min-h-0 flex-col",
    children: [l2, c2]
  }), t2[8] = l2, t2[9] = c2, t2[10] = u2) : u2 = t2[10], t2[11] !== r2 || t2[12] !== u2 ? (d2 = Gr.jsx(lp.Provider, {
    value: r2,
    children: u2
  }), t2[11] = r2, t2[12] = u2, t2[13] = d2) : d2 = t2[13], t2[14] !== a2 || t2[15] !== d2 ? (m2 = Gr.jsx(op.Provider, {
    value: a2,
    children: d2
  }), t2[14] = a2, t2[15] = d2, t2[16] = m2) : m2 = t2[16], m2;
}
function ok() {
  const e2 = Kr.c(10),
    {
      data: t2,
      actions: n2
    } = mp(),
    a2 = u(lk);
  let r2;
  e2[0] !== a2 ? (r2 = () => {
    a2(false), u.getState().setShowLyrics(false);
  }, e2[0] = a2, e2[1] = r2) : r2 = e2[1];
  const s2 = r2;
  let i2, o2, l2;
  return e2[2] !== s2 ? (i2 = Gr.jsx(Ty, {
    onExit: s2
  }), e2[2] = s2, e2[3] = i2) : i2 = e2[3], e2[4] !== n2 || e2[5] !== i2 ? (o2 = Gr.jsx(lp.Provider, {
    value: n2,
    children: i2
  }), e2[4] = n2, e2[5] = i2, e2[6] = o2) : o2 = e2[6], e2[7] !== t2 || e2[8] !== o2 ? (l2 = Gr.jsx(op.Provider, {
    value: t2,
    children: o2
  }), e2[7] = t2, e2[8] = o2, e2[9] = l2) : l2 = e2[9], l2;
}
function lk(e2) {
  return e2.setIsPlayerPortalOpen;
}
const ck = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-6 w-6"
};
function uk(e2) {
  const t2 = Kr.c(9),
    {
      song: n2,
      size: a2,
      className: r2,
      children: s2
    } = e2,
    i2 = void 0 === a2 ? "md" : a2;
  let o2;
  t2[0] !== r2 ? (o2 = x("relative flex min-w-0 max-w-full items-center gap-1.5", r2), t2[0] = r2, t2[1] = o2) : o2 = t2[1];
  const l2 = ck[i2];
  let c2, u2;
  return t2[2] !== n2 || t2[3] !== l2 ? (c2 = Gr.jsx(S, {
    song: n2,
    className: l2
  }), t2[2] = n2, t2[3] = l2, t2[4] = c2) : c2 = t2[4], t2[5] !== s2 || t2[6] !== o2 || t2[7] !== c2 ? (u2 = Gr.jsxs("div", {
    className: o2,
    children: [c2, s2]
  }), t2[5] = s2, t2[6] = o2, t2[7] = c2, t2[8] = u2) : u2 = t2[8], u2;
}
function dk(e2) {
  const t2 = Kr.c(12),
    {
      size: n2,
      onClick: a2
    } = e2,
    r2 = void 0 === n2 ? "md" : n2,
    {
      t: s2
    } = P();
  let i2, o2;
  t2[0] !== s2 ? (i2 = s2("lyrics.full_cover.open"), t2[0] = s2, t2[1] = i2) : i2 = t2[1], t2[2] !== a2 ? (o2 = e3 => {
    if (e3.stopPropagation(), e3.currentTarget.blur(), a2) a2(e3);else {
      const e4 = u.getState();
      e4.setShowLyrics(true), e4.setIsPlayerPortalOpen(true);
    }
  }, t2[2] = a2, t2[3] = o2) : o2 = t2[3];
  const l2 = "sm" === r2 ? "h-4 w-4" : "h-6 w-6";
  let c2, d2, m2;
  return t2[4] !== l2 ? (c2 = x("scale-90 transition-transform duration-200 ease-out motion-reduce:transition-none group-hover/cover:scale-100", l2), t2[4] = l2, t2[5] = c2) : c2 = t2[5], t2[6] !== c2 ? (d2 = Gr.jsx(_.expand, {
    "aria-hidden": true,
    className: c2
  }), t2[6] = c2, t2[7] = d2) : d2 = t2[7], t2[8] !== i2 || t2[9] !== o2 || t2[10] !== d2 ? (m2 = Gr.jsx(A, {
    type: "button",
    variant: "ghost",
    size: "icon",
    "data-no-seek": true,
    "aria-label": i2,
    className: "cover-expand group/expand absolute inset-0 z-20 h-full w-full rounded-[inherit] border-0 bg-black/25 p-0 text-white opacity-0 pointer-events-none transition-opacity duration-150 ease-out motion-reduce:transition-none group-hover/cover:opacity-100 group-hover/cover:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto hover:bg-black/30 hover:text-white [&>span]:pointer-events-none",
    onPointerDown: mk,
    onClick: o2,
    children: d2
  }), t2[8] = i2, t2[9] = o2, t2[10] = d2, t2[11] = m2) : m2 = t2[11], m2;
}
function mk(e2) {
  return e2.stopPropagation();
}
const fk = Xr.memo(function (e2) {
  const t2 = Kr.c(13),
    {
      className: n2,
      iconClassName: a2
    } = e2,
    {
      t: r2
    } = P(),
    s2 = b(hk),
    i2 = u(pk),
    o2 = Wv(),
    l2 = "lyrics" === s2 || "queue" === s2;
  let c2;
  t2[0] !== o2 ? (c2 = () => {
    const e3 = b.getState();
    "lyrics" === e3.panel || "queue" === e3.panel ? e3.closePanel() : e3.openPanel(o2 ? "lyrics" : "queue");
  }, t2[0] = o2, t2[1] = c2) : c2 = t2[1];
  const d2 = c2,
    m2 = o2 ? _.lyrics : _.sidebar;
  let f2, h2;
  return t2[2] !== m2 || t2[3] !== n2 || t2[4] !== d2 || t2[5] !== o2 || t2[6] !== i2 || t2[7] !== a2 || t2[8] !== l2 || t2[9] !== r2 ? (f2 = (i2 || o2) && Gr.jsx(Jr.div, {
    initial: {
      opacity: 0,
      scale: 0.8,
      width: 0
    },
    animate: {
      opacity: 1,
      scale: 1,
      width: "auto"
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      width: 0
    },
    transition: {
      duration: 0.16,
      ease: [0.16, 1, 0.3, 1]
    },
    className: "flex flex-shrink-0 items-center justify-center overflow-hidden",
    children: Gr.jsx(A, {
      variant: "ghost",
      size: "icon",
      className: x("h-8 w-8 flex-shrink-0 rounded-full text-muted-foreground/80 hover:bg-transparent hover:text-foreground", n2, l2 && "!text-foreground"),
      onClick: d2,
      "aria-label": r2(o2 ? "player.lyrics.title" : "player.queue.title"),
      "aria-pressed": l2,
      children: Gr.jsx(Jr.span, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: {
          duration: 0.12
        },
        className: "flex",
        children: Gr.jsx(m2, {
          className: x("h-4 w-4", a2)
        })
      }, o2 ? "lyrics" : "panel")
    })
  }), t2[2] = m2, t2[3] = n2, t2[4] = d2, t2[5] = o2, t2[6] = i2, t2[7] = a2, t2[8] = l2, t2[9] = r2, t2[10] = f2) : f2 = t2[10], t2[11] !== f2 ? (h2 = Gr.jsx(Yr, {
    initial: false,
    children: f2
  }), t2[11] = f2, t2[12] = h2) : h2 = t2[12], h2;
});
function hk(e2) {
  return e2.panel;
}
function pk(e2) {
  var t2, n2;
  return (null != (n2 = null == (t2 = e2.queueSongs) ? void 0 : t2.length) ? n2 : 0) > 0;
}
const gk = Xr.memo(e2 => {
    const t2 = Kr.c(12),
      {
        size: n2,
        duration: a2,
        shape: r2,
        strokeWidth: s2,
        strokeLinecap: i2,
        radius: o2,
        rect: l2,
        className: c2
      } = e2,
      [u2, d2] = Qr.useState(0);
    let m2, f2, h2;
    return t2[0] !== a2 ? (m2 = () => {
      const e3 = e4 => {
        const t3 = a2 > 0 ? Math.min(100, Math.max(0, e4 / a2 * 100)) : 0;
        d2(t3);
      };
      e3(qx.getSmoothTime());
      return qx.subscribeThrottled(e3, 250);
    }, f2 = [a2], t2[0] = a2, t2[1] = m2, t2[2] = f2) : (m2 = t2[1], f2 = t2[2]), Qr.useEffect(m2, f2), t2[3] !== c2 || t2[4] !== u2 || t2[5] !== o2 || t2[6] !== l2 || t2[7] !== r2 || t2[8] !== n2 || t2[9] !== i2 || t2[10] !== s2 ? (h2 = Gr.jsx(Ks, {
      size: n2,
      progress: u2,
      shape: r2,
      strokeWidth: s2,
      strokeLinecap: i2,
      radius: o2,
      rect: l2,
      className: c2
    }), t2[3] = c2, t2[4] = u2, t2[5] = o2, t2[6] = l2, t2[7] = r2, t2[8] = n2, t2[9] = i2, t2[10] = s2, t2[11] = h2) : h2 = t2[11], h2;
  }),
  vk = Xr.memo(e2 => {
    const t2 = Kr.c(20),
      {
        side: n2,
        triggerClassName: a2,
        contentClassName: r2,
        isWheelActive: s2
      } = e2,
      i2 = void 0 === n2 ? "right" : n2,
      o2 = void 0 !== s2 && s2,
      [l2, c2] = Qr.useState(false),
      u2 = "left" === i2 || "top" === i2,
      d2 = bk,
      m2 = u2 ? "pl-2.5 pr-0.5" : "pl-0.5 pr-2.5";
    let f2, h2, p2;
    t2[0] !== r2 || t2[1] !== m2 ? (f2 = x("w-20 flex items-center", m2, r2), t2[0] = r2, t2[1] = m2, t2[2] = f2) : f2 = t2[2], t2[3] === Symbol.for("react.memo_cache_sentinel") ? (h2 = Gr.jsx(Ua, {
      orientation: "horizontal",
      showValue: "none",
      showIcon: false,
      className: "w-full"
    }), t2[3] = h2) : h2 = t2[3], t2[4] !== f2 ? (p2 = Gr.jsx("div", {
      "data-no-seek": true,
      className: f2,
      onClick: wk,
      onWheel: d2,
      children: h2
    }), t2[4] = f2, t2[5] = p2) : p2 = t2[5];
    const g2 = p2;
    let v2, y2;
    t2[6] !== l2 || t2[7] !== g2 ? (v2 = l2 && Gr.jsx(Jr.div, {
      initial: {
        width: 0,
        opacity: 0
      },
      animate: {
        width: "auto",
        opacity: 1
      },
      exit: {
        width: 0,
        opacity: 0
      },
      transition: {
        duration: 0.18,
        ease: [0.16, 1, 0.3, 1]
      },
      className: "overflow-hidden flex items-center flex-shrink-0",
      onClick: kk,
      children: g2
    }), t2[6] = l2, t2[7] = g2, t2[8] = v2) : v2 = t2[8], t2[9] !== v2 ? (y2 = Gr.jsx(Yr, {
      initial: false,
      children: v2
    }), t2[9] = v2, t2[10] = y2) : y2 = t2[10];
    const b2 = y2,
      w2 = u2 && b2;
    let k2, j2;
    t2[11] === Symbol.for("react.memo_cache_sentinel") ? (k2 = e3 => {
      e3.stopPropagation(), c2(jk);
    }, t2[11] = k2) : k2 = t2[11], t2[12] !== l2 || t2[13] !== o2 || t2[14] !== a2 ? (j2 = Gr.jsx(qa, {
      isWheelActive: o2,
      size: 18,
      weight: "Linear",
      step: 0.01,
      returnDelay: 600,
      ariaExpanded: l2,
      className: a2,
      onClick: k2
    }), t2[12] = l2, t2[13] = o2, t2[14] = a2, t2[15] = j2) : j2 = t2[15];
    const S2 = !u2 && b2;
    let N2;
    return t2[16] !== j2 || t2[17] !== S2 || t2[18] !== w2 ? (N2 = Gr.jsxs("div", {
      className: "flex items-center flex-shrink-0",
      "data-no-seek": true,
      children: [w2, j2, S2]
    }), t2[16] = j2, t2[17] = S2, t2[18] = w2, t2[19] = N2) : N2 = t2[19], N2;
  }),
  xk = Xr.memo(e2 => {
    const t2 = Kr.c(38),
      {
        src: n2,
        artist: a2,
        size: r2,
        className: s2,
        shape: i2,
        showLyricsHover: o2,
        showSourceBadge: l2,
        trackClassName: c2,
        handleOpenFullCoverMode: u2
      } = e2,
      d2 = void 0 === o2 || o2,
      m2 = void 0 === l2 || l2,
      f2 = "circle" === (void 0 === i2 ? "rounded" : i2) ? "rounded-full" : "rounded-md",
      h2 = "string" == typeof r2 ? {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
        xl: "w-24 h-24"
      }[r2] : "";
    let p2;
    t2[0] !== r2 ? (p2 = "number" == typeof r2 ? {
      width: r2,
      height: r2
    } : {}, t2[0] = r2, t2[1] = p2) : p2 = t2[1];
    const g2 = p2,
      {
        topCover: v2,
        bottomCover: y2,
        showTop: b2
      } = ca(null != n2 ? n2 : null),
      w2 = "number" == typeof r2 ? r2 : "xl",
      k2 = x("relative flex-shrink-0 cursor-pointer group/cover overflow-hidden select-none", f2, h2, s2),
      j2 = b2 ? 0 : 1;
    let S2;
    t2[2] !== j2 ? (S2 = {
      opacity: j2,
      transition: "opacity 0.35s ease-in-out"
    }, t2[2] = j2, t2[3] = S2) : S2 = t2[3];
    const _2 = null != y2 ? y2 : void 0;
    let C2, T2, E2;
    t2[4] !== c2 ? (C2 = x("w-full h-full object-cover select-none", c2), t2[4] = c2, t2[5] = C2) : C2 = t2[5], t2[6] !== a2 || t2[7] !== w2 || t2[8] !== m2 || t2[9] !== _2 || t2[10] !== C2 ? (T2 = Gr.jsx(N, {
      src: _2,
      artist: a2,
      size: w2,
      showSourceBadge: m2,
      className: C2,
      draggable: false
    }), t2[6] = a2, t2[7] = w2, t2[8] = m2, t2[9] = _2, t2[10] = C2, t2[11] = T2) : T2 = t2[11], t2[12] !== T2 || t2[13] !== S2 ? (E2 = Gr.jsx("div", {
      className: "absolute inset-0",
      style: S2,
      children: T2
    }), t2[12] = T2, t2[13] = S2, t2[14] = E2) : E2 = t2[14];
    const L2 = b2 ? 1 : 0;
    let A2;
    t2[15] !== L2 ? (A2 = {
      opacity: L2,
      transition: "opacity 0.35s ease-in-out"
    }, t2[15] = L2, t2[16] = A2) : A2 = t2[16];
    const P2 = null != v2 ? v2 : void 0;
    let I2, M2, R2, z2, D2;
    return t2[17] !== c2 ? (I2 = x("w-full h-full object-cover select-none", c2), t2[17] = c2, t2[18] = I2) : I2 = t2[18], t2[19] !== a2 || t2[20] !== w2 || t2[21] !== m2 || t2[22] !== P2 || t2[23] !== I2 ? (M2 = Gr.jsx(N, {
      src: P2,
      artist: a2,
      size: w2,
      showSourceBadge: m2,
      className: I2,
      draggable: false
    }), t2[19] = a2, t2[20] = w2, t2[21] = m2, t2[22] = P2, t2[23] = I2, t2[24] = M2) : M2 = t2[24], t2[25] !== A2 || t2[26] !== M2 ? (R2 = Gr.jsx("div", {
      className: "absolute inset-0",
      style: A2,
      children: M2
    }), t2[25] = A2, t2[26] = M2, t2[27] = R2) : R2 = t2[27], t2[28] !== u2 || t2[29] !== d2 ? (z2 = d2 && Gr.jsx(dk, {
      size: "sm",
      onClick: u2
    }), t2[28] = u2, t2[29] = d2, t2[30] = z2) : z2 = t2[30], t2[31] !== u2 || t2[32] !== g2 || t2[33] !== E2 || t2[34] !== R2 || t2[35] !== z2 || t2[36] !== k2 ? (D2 = Gr.jsxs("div", {
      className: k2,
      style: g2,
      "data-no-seek": true,
      onClick: u2,
      children: [E2, R2, z2]
    }), t2[31] = u2, t2[32] = g2, t2[33] = E2, t2[34] = R2, t2[35] = z2, t2[36] = k2, t2[37] = D2) : D2 = t2[37], D2;
  }),
  yk = Xr.memo(e2 => {
    var t2, n2, a2, r2, s2, i2;
    const o2 = Kr.c(45),
      {
        currentSong: l2,
        textSize: c2,
        showMask: u2,
        widthClass: d2
      } = e2,
      m2 = void 0 === c2 ? "sm" : c2,
      f2 = void 0 === d2 ? "max-w-[180px] sm:max-w-[210px] md:max-w-[240px] lg:max-w-[270px] xl:max-w-[300px]" : d2,
      h2 = "xs" === m2 ? "text-xs" : "text-sm",
      p2 = "xs" === m2 ? "text-caption" : "text-xs",
      g2 = "xs" === m2 ? "h-4" : "h-[18px]",
      v2 = "xs" === m2 ? "min-h-3.5" : "min-h-4",
      y2 = null != (t2 = null == l2 ? void 0 : l2.id) ? t2 : "",
      b2 = ya(y2, 300),
      [w2] = on(),
      k2 = null == (n2 = w2.avatars) || n2;
    let S2;
    o2[0] !== (null == l2 ? void 0 : l2.artists) ? (S2 = (null == (r2 = null == (a2 = null == l2 ? void 0 : l2.artists) ? void 0 : a2.find(Sk)) ? void 0 : r2.avatar) || (null == (i2 = null == (s2 = null == l2 ? void 0 : l2.artists) ? void 0 : s2[0]) ? void 0 : i2.avatar), o2[0] = null == l2 ? void 0 : l2.artists, o2[1] = S2) : S2 = o2[1];
    const N2 = S2;
    if (!l2) return null;
    let _2;
    o2[2] !== f2 ? (_2 = x("min-w-0 flex flex-col justify-center overflow-hidden", f2), o2[2] = f2, o2[3] = _2) : _2 = o2[3];
    const C2 = b2 && "animate-track-title-in";
    let T2, E2, L2, A2, P2, I2, M2, R2, z2, D2, F2, O2, $2;
    return o2[4] !== C2 ? (T2 = x("min-w-0 flex flex-col justify-center gap-0.5", C2), o2[4] = C2, o2[5] = T2) : T2 = o2[5], o2[6] !== h2 ? (E2 = x("font-medium text-foreground leading-tight", h2), o2[6] = h2, o2[7] = E2) : E2 = o2[7], o2[8] !== l2.title || o2[9] !== E2 ? (L2 = Gr.jsx(Qs, {
      playOnHover: true,
      hoverScope: "[data-player-info]",
      containerClassName: "min-w-0 flex-1",
      className: E2,
      children: l2.title
    }), o2[8] = l2.title, o2[9] = E2, o2[10] = L2) : L2 = o2[10], o2[11] !== l2 || o2[12] !== L2 || o2[13] !== g2 ? (A2 = Gr.jsx(uk, {
      song: l2,
      size: "sm",
      className: g2,
      children: L2
    }), o2[11] = l2, o2[12] = L2, o2[13] = g2, o2[14] = A2) : A2 = o2[14], o2[15] !== v2 ? (P2 = x("flex items-center gap-1 min-w-0", v2), o2[15] = v2, o2[16] = P2) : P2 = o2[16], o2[17] !== N2 || o2[18] !== l2.artist || o2[19] !== l2.source || o2[20] !== k2 || o2[21] !== m2 ? (I2 = k2 && N2 && Gr.jsx(ci, {
      src: N2,
      name: l2.artist,
      size: "xs" === m2 ? 14 : 16,
      className: x("shrink-0 self-center", "xs" === m2 ? "w-3.5 h-3.5" : "w-4 h-4"),
      source: l2.source
    }), o2[17] = N2, o2[18] = l2.artist, o2[19] = l2.source, o2[20] = k2, o2[21] = m2, o2[22] = I2) : I2 = o2[22], o2[23] !== p2 ? (M2 = x("text-muted-foreground leading-tight", p2), o2[23] = p2, o2[24] = M2) : M2 = o2[24], o2[25] !== l2 ? (R2 = (null == l2 ? void 0 : l2.artist) && (null == l2 ? void 0 : l2.source) ? Gr.jsx(Ui, {
      artists: l2.artist,
      source: l2.source,
      artistsArray: l2.artists,
      origin: j(l2),
      className: "hover:text-foreground transition-colors"
    }) : l2.artist, o2[25] = l2, o2[26] = R2) : R2 = o2[26], o2[27] !== M2 || o2[28] !== R2 ? (z2 = Gr.jsx(Vs, {
      hoverScope: "[data-player-info]",
      containerClassName: "min-w-0 max-w-full",
      className: M2,
      children: R2
    }), o2[27] = M2, o2[28] = R2, o2[29] = z2) : z2 = o2[29], o2[30] !== l2 ? (D2 = Gr.jsx(Yn, {
      song: l2
    }), o2[30] = l2, o2[31] = D2) : D2 = o2[31], o2[32] !== P2 || o2[33] !== I2 || o2[34] !== z2 || o2[35] !== D2 ? (F2 = Gr.jsxs("div", {
      className: P2,
      children: [I2, z2, D2]
    }), o2[32] = P2, o2[33] = I2, o2[34] = z2, o2[35] = D2, o2[36] = F2) : F2 = o2[36], o2[37] !== y2 || o2[38] !== A2 || o2[39] !== F2 || o2[40] !== T2 ? (O2 = Gr.jsxs("div", {
      className: T2,
      children: [A2, F2]
    }, y2), o2[37] = y2, o2[38] = A2, o2[39] = F2, o2[40] = T2, o2[41] = O2) : O2 = o2[41], o2[42] !== O2 || o2[43] !== _2 ? ($2 = Gr.jsx("div", {
      className: _2,
      "data-player-info": true,
      "data-no-seek": true,
      children: O2
    }), o2[42] = O2, o2[43] = _2, o2[44] = $2) : $2 = o2[44], $2;
  });
function bk(e2) {
  e2.stopPropagation();
  const t2 = e2.deltaY < 0 ? 0.01 : -0.01,
    n2 = u.getState().volume;
  Ha(Math.min(1, Math.max(0, Math.round(100 * (n2 + t2)) / 100)));
}
function wk(e2) {
  return e2.stopPropagation();
}
function kk(e2) {
  return e2.stopPropagation();
}
function jk(e2) {
  return !e2;
}
function Sk(e2) {
  return e2.avatar;
}
const Nk = e2 => e2.currentSong,
  _k = e2 => e2.duration;
function Ck(e2, t2) {
  return "floating" === e2 ? "pill" === t2 ? "999px" : "20px" : "bottom-full" === e2 && "pill" !== t2 ? "0px" : "pill" === t2 ? "35px" : "var(--radius-card)";
}
const qk = Xr.memo(function (e2) {
  var t2;
  const n2 = Kr.c(109),
    {
      handleOpenFullCoverMode: r2,
      position: s2,
      background: i2,
      progressModes: o2,
      cover: l2,
      border: c2,
      isTransparencyEnabled: d2
    } = e2;
  let m2;
  n2[0] !== i2 || n2[1] !== c2 || n2[2] !== l2 || n2[3] !== r2 || n2[4] !== d2 || n2[5] !== s2 || n2[6] !== o2 ? (m2 = {
    position: s2,
    background: i2,
    progressModes: o2,
    cover: l2,
    border: c2,
    isTransparencyEnabled: d2,
    handleOpenFullCoverMode: r2
  }, n2[0] = i2, n2[1] = c2, n2[2] = l2, n2[3] = r2, n2[4] = d2, n2[5] = s2, n2[6] = o2, n2[7] = m2) : m2 = n2[7];
  const {
    currentSong: f2,
    duration: h2,
    canSuggest: p2,
    isUnfavorited: g2,
    isPinned: v2,
    setShowBio: y2,
    isFavorite: b2,
    coverUrl: w2,
    coverShape: k2,
    isCoverBackground: j2,
    showColorBackground: S2,
    isBackgroundProgress: N2,
    showCoverRing: _2,
    showLineProgress: C2,
    miniPlayerRadius: E2,
    baseLayerClass: L2,
    backgroundStyle: A2,
    progressFillStyle: I2,
    seek: M2,
    canControlPlayer: R2,
    handlePlayNext: z2,
    handleAddToQueue: D2,
    handleLoadSimilarTracks: F2,
    handleToggleUnfavorite: O2,
    handleShare: $2,
    handleSuggestTrack: B2,
    handleToggleLike: U2
  } = function ({
    position: e3,
    background: t3,
    progressModes: n3,
    cover: r3,
    border: s3,
    handleOpenFullCoverMode: i3
  }) {
    var o3, l3;
    const c3 = u(Nk),
      d3 = u(_k),
      m3 = u(e4 => e4.seek),
      f3 = _l(e4 => e4.isInRoom),
      h3 = _l(e4 => !!e4.currentRoom),
      p3 = _l(e4 => {
        var t4, n4;
        return null != (n4 = null == (t4 = e4.currentRoom) ? void 0 : t4.creator_id) ? n4 : null;
      }),
      g3 = _l(e4 => e4.suggestTrack),
      v3 = xa(),
      {
        t: x2
      } = P(),
      y3 = he(e4 => {
        var t4;
        return (null == (t4 = e4.user) ? void 0 : t4.id) || null;
      }),
      b3 = f3 && !!p3 && p3 !== y3,
      w3 = !(f3 && h3) || !!y3 && !!p3 && p3 === y3,
      {
        handlePlayNext: k3,
        handleAddToQueue: j3,
        handleLoadSimilarTracks: S3,
        handleToggleLike: N3,
        handleToggleUnfavorite: _3,
        handleShare: C3
      } = vg(c3),
      E3 = gn(null != (o3 = null == c3 ? void 0 : c3.id) ? o3 : ""),
      L3 = Qr.useCallback(async () => {
        if (c3 && b3) try {
          await g3(c3);
        } catch (e4) {
          a.error("Failed to suggest track:", e4);
        }
      }, [b3, c3, g3]),
      [A3, I3] = Qr.useState(false),
      [M3, R3] = Qr.useState(null),
      [z3, D3] = Qr.useState(false),
      F3 = Qr.useCallback(async e4 => {
        var t4;
        if (e4.preventDefault(), e4.stopPropagation(), A3) I3(false);else {
          if (!M3 && !z3 && c3) {
            D3(true);
            try {
              const e5 = Array.isArray(c3.artists) ? null == (t4 = c3.artists[0]) ? void 0 : t4.name : c3.artist;
              if (e5) {
                const t5 = await T.media.getArtistInfo(e5, c3.source || "");
                R3((null == t5 ? void 0 : t5.bio) || (null == t5 ? void 0 : t5.description) || null);
              }
            } catch (n4) {
              a.error("Failed to load artist bio:", n4);
            } finally {
              D3(false);
            }
          }
          I3(e5 => !e5);
        }
      }, [A3, M3, z3, c3]),
      O3 = Qr.useMemo(() => c3 ? v3(c3) : "", [c3, v3]),
      $3 = Wa(O3, 0.22),
      B3 = Qr.useMemo(() => Va(r3), [r3]),
      U3 = "cover" === t3 && !!O3,
      q3 = "color" === t3 && !n3.includes("background"),
      H3 = n3.includes("line"),
      W3 = n3.includes("background"),
      V3 = n3.includes("cover"),
      Q3 = H3,
      K3 = Ck(e3, s3),
      G3 = "color" === t3 ? {
        backgroundColor: $3 || "transparent",
        transition: "background-color 300ms ease-out"
      } : void 0,
      X3 = {
        backgroundColor: "color" === t3 ? $3 || "hsl(var(--foreground) / 0.08)" : "hsl(var(--primary) / 0.16)"
      },
      Y3 = vn(null != (l3 = null == c3 ? void 0 : c3.id) ? l3 : ""),
      J3 = he(e4 => {
        var t4, n4, a2, r4;
        return (null == (n4 = null == (t4 = e4.user) ? void 0 : t4.pinned) ? void 0 : n4.id) === (null == c3 ? void 0 : c3.id) && (null == (r4 = null == (a2 = e4.user) ? void 0 : a2.pinned) ? void 0 : r4.source) === (null == c3 ? void 0 : c3.source);
      });
    return {
      t: x2,
      currentSong: c3,
      duration: d3,
      currentTime: 0,
      canSuggest: b3,
      isUnfavorited: Y3,
      isPinned: J3,
      showBio: A3,
      setShowBio: I3,
      bio: M3,
      isBioLoading: z3,
      isFavorite: E3,
      coverUrl: O3,
      coverTint: $3,
      coverShape: B3,
      isCoverBackground: U3,
      showColorBackground: q3,
      isBackgroundProgress: W3,
      showCoverRing: V3,
      showLineProgress: Q3,
      playbackProgress: 0,
      progressPercent: 0,
      miniPlayerRadius: K3,
      baseLayerClass: "",
      backgroundStyle: G3,
      progressFillStyle: X3,
      seek: m3,
      canControlPlayer: w3,
      handlePlayNext: k3,
      handleAddToQueue: j3,
      handleLoadSimilarTracks: S3,
      handleToggleUnfavorite: _3,
      handleShare: C3,
      handleSuggestTrack: L3,
      handleToggleBio: F3,
      handleToggleLike: N3
    };
  }(m2);
  let q2;
  n2[8] !== h2 || n2[9] !== M2 ? (q2 = e3 => M2(e3 * h2), n2[8] = h2, n2[9] = M2, n2[10] = q2) : q2 = n2[10];
  const H2 = q2,
    W2 = Wk,
    [V2] = cn(),
    Q2 = (null == (t2 = V2.tabs) ? void 0 : t2.style) || "default";
  if (!f2) return null;
  const K2 = "floating" === s2 ? "ring-1 ring-inset ring-foreground/[0.04] dark:ring-white/[0.06]" : "";
  let G2, X2, Y2, J2, Z2;
  n2[11] !== y2 ? (G2 = e3 => {
    e3 || y2(false);
  }, n2[11] = y2, n2[12] = G2) : G2 = n2[12], n2[13] !== s2 ? (X2 = "floating" === s2 && {
    opacity: 0
  }, n2[13] = s2, n2[14] = X2) : X2 = n2[14], n2[15] === Symbol.for("react.memo_cache_sentinel") ? (Y2 = {
    opacity: 1
  }, J2 = {
    opacity: 0
  }, Z2 = {
    duration: 0.25,
    ease: "easeOut"
  }, n2[15] = Y2, n2[16] = J2, n2[17] = Z2) : (Y2 = n2[15], J2 = n2[16], Z2 = n2[17]);
  const ee2 = "full" === Q2 && "floating" !== s2 && "mini-player-flush";
  let te2;
  n2[18] !== L2 || n2[19] !== ee2 ? (te2 = x("w-full mini-player-wrapper relative overflow-hidden", ee2, L2), n2[18] = L2, n2[19] = ee2, n2[20] = te2) : te2 = n2[20];
  const ne2 = `inset(0 round ${E2})`;
  let ae2, re2, se2, ie2, oe2, le2, ce2, ue2, de2, me2;
  n2[21] !== E2 || n2[22] !== ne2 ? (ae2 = {
    borderRadius: E2,
    borderWidth: 0,
    clipPath: ne2
  }, n2[21] = E2, n2[22] = ne2, n2[23] = ae2) : ae2 = n2[23], n2[24] !== h2 || n2[25] !== N2 || n2[26] !== M2 ? (re2 = N2 ? e3 => Ga(e3, h2, M2) : void 0, n2[24] = h2, n2[25] = N2, n2[26] = M2, n2[27] = re2) : re2 = n2[27], n2[28] !== K2 ? (se2 = x("absolute inset-0 pointer-events-none z-50", K2), n2[28] = K2, n2[29] = se2) : se2 = n2[29], n2[30] === Symbol.for("react.memo_cache_sentinel") ? (ie2 = {
    borderRadius: "inherit"
  }, n2[30] = ie2) : ie2 = n2[30], n2[31] !== se2 ? (oe2 = Gr.jsx("div", {
    className: se2,
    style: ie2
  }), n2[31] = se2, n2[32] = oe2) : oe2 = n2[32], n2[33] !== w2 || n2[34] !== j2 ? (le2 = j2 && Gr.jsx("div", {
    className: "absolute inset-0 bg-cover bg-center opacity-45",
    style: {
      backgroundImage: `url("${w2}")`
    }
  }), n2[33] = w2, n2[34] = j2, n2[35] = le2) : le2 = n2[35], n2[36] !== j2 ? (ce2 = j2 && Gr.jsx("div", {
    className: "absolute inset-0 bg-black/30"
  }), n2[36] = j2, n2[37] = ce2) : ce2 = n2[37], n2[38] !== A2 || n2[39] !== S2 ? (ue2 = S2 && Gr.jsx("div", {
    className: "absolute inset-0 opacity-60",
    style: A2
  }), n2[38] = A2, n2[39] = S2, n2[40] = ue2) : ue2 = n2[40], n2[41] !== h2 || n2[42] !== N2 || n2[43] !== I2 ? (de2 = N2 && Gr.jsx(ui, {
    clock: qx,
    duration: h2,
    style: I2,
    className: "inset-y-0 left-0"
  }), n2[41] = h2, n2[42] = N2, n2[43] = I2, n2[44] = de2) : de2 = n2[44], n2[45] !== k2 || n2[46] !== w2 || n2[47] !== f2.artist || n2[48] !== h2 || n2[49] !== r2 || n2[50] !== _2 ? (me2 = _2 ? Gr.jsxs("div", {
    className: "relative w-[48px] h-[48px] flex-shrink-0",
    children: [Gr.jsx(gk, {
      size: 48,
      duration: h2,
      shape: k2,
      strokeWidth: "circle" === k2 ? 2.2 : 0.95,
      strokeLinecap: "circle" === k2 ? "round" : "butt",
      radius: 19,
      rect: {
        x: 2.3,
        y: 2.3,
        size: 39.4,
        rx: 7.5
      },
      className: "text-primary transition-all duration-220 ease-out"
    }), Gr.jsx("div", {
      className: x("absolute inset-[3px] overflow-hidden", "circle" === k2 ? "rounded-full" : "rounded-md"),
      children: Gr.jsx(xk, {
        src: w2,
        artist: f2.artist,
        size: 42,
        shape: k2,
        className: "w-full h-full",
        trackClassName: "w-full h-full object-cover shadow-none",
        handleOpenFullCoverMode: r2
      })
    })]
  }) : Gr.jsx(xk, {
    src: w2,
    artist: f2.artist,
    size: 48,
    shape: k2,
    handleOpenFullCoverMode: r2
  }), n2[45] = k2, n2[46] = w2, n2[47] = f2.artist, n2[48] = h2, n2[49] = r2, n2[50] = _2, n2[51] = me2) : me2 = n2[51];
  const fe2 = "floating" === s2 ? "max-w-[150px] lg:max-w-[190px] xl:max-w-[230px]" : void 0;
  let pe2, ge2, ve2, xe2, ye2, be2, we2, ke2, je2, Se2, Ne2, _e2, Ce2;
  n2[52] !== f2 || n2[53] !== fe2 ? (pe2 = Gr.jsx(yk, {
    currentSong: f2,
    widthClass: fe2
  }), n2[52] = f2, n2[53] = fe2, n2[54] = pe2) : pe2 = n2[54], n2[55] !== f2 ? (ge2 = Gr.jsx(oy, {
    song: f2,
    size: "sm",
    className: "h-8 w-8 hover:bg-transparent rounded-full flex-shrink-0 text-muted-foreground hover:text-foreground",
    iconClassName: "h-[18px] w-[18px]"
  }), n2[55] = f2, n2[56] = ge2) : ge2 = n2[56], n2[57] !== me2 || n2[58] !== pe2 || n2[59] !== ge2 ? (ve2 = Gr.jsxs("div", {
    className: "flex items-center gap-3 min-w-0 pr-2 justify-self-start",
    children: [me2, pe2, ge2]
  }), n2[57] = me2, n2[58] = pe2, n2[59] = ge2, n2[60] = ve2) : ve2 = n2[60], n2[61] !== R2 || n2[62] !== f2 ? (xe2 = Gr.jsx(Jv, {
    direction: "horizontal",
    size: "sm",
    className: "flex-shrink-0 justify-self-center",
    currentSong: f2,
    canControl: R2
  }), n2[61] = R2, n2[62] = f2, n2[63] = xe2) : xe2 = n2[63], n2[64] === Symbol.for("react.memo_cache_sentinel") ? (ye2 = Gr.jsx(Fk, {}), be2 = Gr.jsx(vk, {
    side: "right"
  }), n2[64] = ye2, n2[65] = be2) : (ye2 = n2[64], be2 = n2[65]), n2[66] !== f2 ? (we2 = Gr.jsx(mv, {
    song: f2,
    size: "md",
    trigger: W2
  }), n2[66] = f2, n2[67] = we2) : we2 = n2[67], n2[68] === Symbol.for("react.memo_cache_sentinel") ? (ke2 = Gr.jsx(fk, {
    className: "h-8 w-8 flex-shrink-0 text-muted-foreground hover:bg-transparent hover:text-foreground rounded-full"
  }), n2[68] = ke2) : ke2 = n2[68], n2[69] !== we2 ? (je2 = Gr.jsx("div", {
    className: "flex items-center justify-end justify-self-end min-w-0",
    children: Gr.jsxs("div", {
      className: "flex items-center gap-0.5 p-1 border border-border/30 rounded-full bg-transparent transition-colors duration-200",
      children: [ye2, be2, we2, ke2]
    })
  }), n2[69] = we2, n2[70] = je2) : je2 = n2[70], n2[71] !== ve2 || n2[72] !== xe2 || n2[73] !== je2 ? (Se2 = Gr.jsx("div", {
    className: "relative z-10 flex flex-col",
    children: Gr.jsxs("div", {
      className: "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center h-[64px] px-4 gap-4",
      children: [ve2, xe2, je2]
    })
  }), n2[71] = ve2, n2[72] = xe2, n2[73] = je2, n2[74] = Se2) : Se2 = n2[74], n2[75] !== h2 || n2[76] !== H2 || n2[77] !== C2 ? (Ne2 = C2 && Gr.jsx(di, {
    rail: true,
    clock: qx,
    duration: h2,
    onSeek: H2,
    className: "absolute bottom-0 left-0 right-0 z-20"
  }), n2[75] = h2, n2[76] = H2, n2[77] = C2, n2[78] = Ne2) : Ne2 = n2[78], n2[79] !== ae2 || n2[80] !== re2 || n2[81] !== oe2 || n2[82] !== le2 || n2[83] !== ce2 || n2[84] !== ue2 || n2[85] !== de2 || n2[86] !== Se2 || n2[87] !== Ne2 || n2[88] !== te2 ? (_e2 = Gr.jsxs("div", {
    "data-miniplayer": true,
    className: te2,
    style: ae2,
    onClick: re2,
    children: [oe2, le2, ce2, ue2, de2, Se2, Ne2]
  }), n2[79] = ae2, n2[80] = re2, n2[81] = oe2, n2[82] = le2, n2[83] = ce2, n2[84] = ue2, n2[85] = de2, n2[86] = Se2, n2[87] = Ne2, n2[88] = te2, n2[89] = _e2) : _e2 = n2[89], n2[90] !== _e2 || n2[91] !== X2 ? (Ce2 = Gr.jsx(Vp, {
    asChild: true,
    children: Gr.jsx(Jr.div, {
      initial: X2,
      animate: Y2,
      exit: J2,
      transition: Z2,
      className: "relative w-full transition-shadow duration-250 ease-out pointer-events-auto",
      children: _e2
    })
  }), n2[90] = _e2, n2[91] = X2, n2[92] = Ce2) : Ce2 = n2[92];
  const Te2 = p2 ? B2 : void 0;
  let Ee2, Le2;
  return n2[93] !== f2 || n2[94] !== D2 || n2[95] !== F2 || n2[96] !== z2 || n2[97] !== $2 || n2[98] !== U2 || n2[99] !== O2 || n2[100] !== b2 || n2[101] !== v2 || n2[102] !== g2 || n2[103] !== Te2 ? (Ee2 = Gr.jsx(Qp, {
    className: "w-[248px] p-0 overflow-hidden",
    children: Gr.jsx(Rg, {
      showHeader: true,
      song: f2,
      isFavorite: b2,
      isUnfavorited: g2,
      isPinned: v2,
      showAddToPlaylist: false,
      showDownloadFile: true,
      showQueueDownload: true,
      showPlatform: true,
      onPlayNext: z2,
      onAddToQueue: D2,
      onLoadSimilarTracks: F2,
      onToggleLike: U2,
      onToggleUnfavorite: O2,
      onShare: $2,
      onSuggest: Te2
    })
  }), n2[93] = f2, n2[94] = D2, n2[95] = F2, n2[96] = z2, n2[97] = $2, n2[98] = U2, n2[99] = O2, n2[100] = b2, n2[101] = v2, n2[102] = g2, n2[103] = Te2, n2[104] = Ee2) : Ee2 = n2[104], n2[105] !== G2 || n2[106] !== Ce2 || n2[107] !== Ee2 ? (Le2 = Gr.jsxs(Wp, {
    modal: false,
    onOpenChange: G2,
    children: [Ce2, Ee2]
  }), n2[105] = G2, n2[106] = Ce2, n2[107] = Ee2, n2[108] = Le2) : Le2 = n2[108], Le2;
});
function Wk(e2, t2) {
  return Gr.jsx(A, {
    variant: "ghost",
    size: "icon",
    className: "h-8 w-8 rounded-full text-muted-foreground hover:bg-transparent hover:text-foreground flex-shrink-0 p-0",
    children: Gr.jsx(fv, {
      status: e2,
      saved: t2,
      className: "h-4 w-4"
    })
  });
}
const Xk = Xr.memo(function (e2) {
  var t2, n2, a2, r2, s2;
  const i2 = Kr.c(45),
    {
      user: o2,
      variant: l2,
      displayName: c2,
      subtitle: u2,
      isCreator: d2,
      dimmed: m2,
      onClick: f2,
      onRemove: h2,
      onTransfer: p2,
      rightSlot: g2,
      className: v2
    } = e2,
    y2 = void 0 === l2 ? "room" : l2,
    b2 = void 0 !== d2 && d2,
    w2 = void 0 !== m2 && m2,
    {
      t: k2
    } = P();
  let j2;
  i2[0] !== c2 || i2[1] !== k2 || i2[2] !== o2.id || i2[3] !== o2.nickname || i2[4] !== o2.username ? (j2 = c2 || o2.nickname || o2.username || `${k2("common.user")} ${o2.id.slice(0, 5)}`, i2[0] = c2, i2[1] = k2, i2[2] = o2.id, i2[3] = o2.nickname, i2[4] = o2.username, i2[5] = j2) : j2 = i2[5];
  const S2 = j2,
    N2 = !!f2 && !w2,
    C2 = "room" === y2 ? "w-8 h-8" : "w-9 h-9",
    T2 = N2 ? f2 : void 0,
    E2 = "list" === y2 && "transition-colors",
    L2 = "room" === y2 ? "px-2.5 py-1.5" : "px-2 py-1.5",
    I2 = N2 ? "cursor-pointer" : "cursor-default",
    M2 = w2 && "opacity-50";
  let R2, z2;
  i2[6] !== v2 || i2[7] !== E2 || i2[8] !== L2 || i2[9] !== I2 || i2[10] !== M2 ? (R2 = x("group/user-card flex items-center gap-2 rounded-lg transition-colors", E2, L2, I2, M2, v2), i2[6] = v2, i2[7] = E2, i2[8] = L2, i2[9] = I2, i2[10] = M2, i2[11] = R2) : R2 = i2[11], i2[12] !== C2 ? (z2 = x("relative flex-shrink-0", C2), i2[12] = C2, i2[13] = z2) : z2 = i2[13];
  const D2 = null == (t2 = o2.active) ? void 0 : t2.frame,
    F2 = null != (a2 = null == (n2 = o2.custom) ? void 0 : n2.color) ? a2 : void 0;
  let O2, $2, B2, U2, q2, H2;
  return i2[14] !== S2 || i2[15] !== o2.avatar ? (O2 = Gr.jsx(Qg, {
    src: o2.avatar,
    name: S2,
    className: "h-full w-full"
  }), i2[14] = S2, i2[15] = o2.avatar, i2[16] = O2) : O2 = i2[16], i2[17] !== D2 || i2[18] !== F2 || i2[19] !== O2 ? ($2 = Gr.jsx(Wb, {
    frame: D2,
    customColor: F2,
    size: "xs",
    className: "h-full w-full",
    children: O2
  }), i2[17] = D2, i2[18] = F2, i2[19] = O2, i2[20] = $2) : $2 = i2[20], i2[21] !== h2 || i2[22] !== k2 || i2[23] !== y2 ? (B2 = h2 && "room" === y2 && Gr.jsx(A, {
    variant: "ghost",
    onClick: e3 => {
      e3.stopPropagation(), h2();
    },
    "aria-label": k2("profile.user_card.remove"),
    className: "absolute inset-0 h-full w-full rounded-full p-0 bg-destructive/90 opacity-0 group-hover/user-card:opacity-100",
    children: Gr.jsx(_.close, {
      className: "h-3 w-3 text-white"
    })
  }), i2[21] = h2, i2[22] = k2, i2[23] = y2, i2[24] = B2) : B2 = i2[24], i2[25] !== z2 || i2[26] !== $2 || i2[27] !== B2 ? (U2 = Gr.jsxs("div", {
    className: z2,
    children: [$2, B2]
  }), i2[25] = z2, i2[26] = $2, i2[27] = B2, i2[28] = U2) : U2 = i2[28], i2[29] !== b2 || i2[30] !== S2 || i2[31] !== p2 || i2[32] !== u2 || i2[33] !== k2 || i2[34] !== o2.active || i2[35] !== o2.custom || i2[36] !== o2.premium || i2[37] !== y2 ? (q2 = "room" === y2 ? Gr.jsxs("div", {
    className: "relative flex items-center min-w-0 h-5",
    children: [Gr.jsxs("div", {
      className: x("flex items-center gap-1 min-w-0 transition-opacity duration-200", p2 && "group-hover/user-card:opacity-0 group-hover/user-card:pointer-events-none"),
      children: [b2 && Gr.jsx(_.crown, {
        className: "h-3 w-3 text-primary flex-shrink-0"
      }), (null == (r2 = o2.active) ? void 0 : r2.title) && Gr.jsx(rw, {
        title: o2.active.title
      }), Gr.jsx(Yb, {
        nickname: S2,
        customColors: o2.custom,
        className: "text-xs font-medium truncate max-w-[90px]"
      }), (null == (s2 = o2.active) ? void 0 : s2.emblem) && Gr.jsx(Gb, {
        emblem: o2.active.emblem
      }), o2.premium && Gr.jsx(ii, {
        premium: {
          ...o2.premium,
          is_active: true
        }
      })]
    }), p2 && Gr.jsx(A, {
      type: "button",
      variant: "ghost",
      size: "icon-2xs",
      onClick: e3 => {
        e3.stopPropagation(), p2();
      },
      "aria-label": k2("profile.user_card.transfer"),
      className: "absolute left-0 inset-y-0 flex h-auto w-auto rounded-none opacity-0 group-hover/user-card:opacity-100 transition-opacity duration-200 ease-in-out text-muted-foreground hover:text-primary",
      children: Gr.jsx(_.crown, {
        className: "h-3.5 w-3.5"
      })
    })]
  }) : Gr.jsxs("div", {
    className: "flex-1 min-w-0",
    children: [Gr.jsxs("div", {
      className: "flex items-center gap-1 min-w-0",
      children: [b2 && Gr.jsx(_.crown, {
        className: "h-3 w-3 text-primary flex-shrink-0"
      }), Gr.jsx(Yb, {
        nickname: S2,
        customColors: o2.custom,
        className: "text-xs font-medium truncate max-w-[140px]"
      })]
    }), u2 && Gr.jsx("div", {
      className: "text-micro text-foreground/55 truncate",
      children: u2
    })]
  }), i2[29] = b2, i2[30] = S2, i2[31] = p2, i2[32] = u2, i2[33] = k2, i2[34] = o2.active, i2[35] = o2.custom, i2[36] = o2.premium, i2[37] = y2, i2[38] = q2) : q2 = i2[38], i2[39] !== g2 || i2[40] !== R2 || i2[41] !== U2 || i2[42] !== q2 || i2[43] !== T2 ? (H2 = Gr.jsxs("div", {
    onClick: T2,
    className: R2,
    children: [U2, q2, g2]
  }), i2[39] = g2, i2[40] = R2, i2[41] = U2, i2[42] = q2, i2[43] = T2, i2[44] = H2) : H2 = i2[44], H2;
});
const Jk = e2 => ({
    bold: t2 => Gr.jsx(e2, {
      ...t2,
      weight: "Bold"
    }),
    broken: t2 => Gr.jsx(e2, {
      ...t2,
      weight: "Broken"
    })
  }),
  Zk = {
    home: Jk(mr),
    social: Jk(dr),
    player: Jk(ur),
    search: Jk(cr),
    library: Jk(lr),
    chat: Jk(or),
    settings: Jk(ir),
    logout: Jk(sr),
    profile: (ej = rr, {
      bold: e2 => Gr.jsx(ej, {
        ...e2,
        weight: "Linear"
      }),
      broken: e2 => Gr.jsx(ej, {
        ...e2,
        weight: "Linear"
      })
    }),
    friends: Jk(ar),
    playlists: Jk(Ya),
    shop: Jk(nr),
    market: Jk(nr),
    auction: Jk(tr),
    inventory: Jk(er),
    artist: Jk(Za),
    album: Jk(Ja),
    playlist: Jk(Ya)
  };
var ej;
const tj = Xr.memo(function (e2) {
  const t2 = Kr.c(26);
  let n2, a2, r2, s2;
  t2[0] !== e2 ? ({
    tab: s2,
    isActive: a2,
    className: n2,
    ...r2
  } = e2, t2[0] = e2, t2[1] = n2, t2[2] = a2, t2[3] = r2, t2[4] = s2) : (n2 = t2[1], a2 = t2[2], r2 = t2[3], s2 = t2[4]);
  const i2 = Zk[s2];
  if (!i2) return null;
  const o2 = i2.bold,
    l2 = i2.broken,
    c2 = `relative flex shrink-0 items-center justify-center ${n2 || ""}`,
    u2 = a2 ? 1 : 0,
    d2 = a2 ? "auto" : "none";
  let m2, f2, h2;
  t2[5] !== u2 || t2[6] !== d2 ? (m2 = {
    opacity: u2,
    pointerEvents: d2
  }, t2[5] = u2, t2[6] = d2, t2[7] = m2) : m2 = t2[7], t2[8] !== o2 ? (f2 = Gr.jsx(o2, {
    className: "h-full w-full"
  }), t2[8] = o2, t2[9] = f2) : f2 = t2[9], t2[10] !== m2 || t2[11] !== f2 ? (h2 = Gr.jsx("div", {
    className: "absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out",
    style: m2,
    children: f2
  }), t2[10] = m2, t2[11] = f2, t2[12] = h2) : h2 = t2[12];
  const p2 = a2 ? 0 : 1,
    g2 = a2 ? "none" : "auto";
  let v2, x2, y2, b2;
  return t2[13] !== p2 || t2[14] !== g2 ? (v2 = {
    opacity: p2,
    pointerEvents: g2
  }, t2[13] = p2, t2[14] = g2, t2[15] = v2) : v2 = t2[15], t2[16] !== l2 ? (x2 = Gr.jsx(l2, {
    className: "h-full w-full"
  }), t2[16] = l2, t2[17] = x2) : x2 = t2[17], t2[18] !== x2 || t2[19] !== v2 ? (y2 = Gr.jsx("div", {
    className: "absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out",
    style: v2,
    children: x2
  }), t2[18] = x2, t2[19] = v2, t2[20] = y2) : y2 = t2[20], t2[21] !== r2 || t2[22] !== c2 || t2[23] !== y2 || t2[24] !== h2 ? (b2 = Gr.jsxs("div", {
    className: c2,
    ...r2,
    children: [h2, y2]
  }), t2[21] = r2, t2[22] = c2, t2[23] = y2, t2[24] = h2, t2[25] = b2) : b2 = t2[25], b2;
});
function nj(e2) {
  return e2.profileNavOpen;
}
function aj(e2) {
  return e2.toggleProfileNav;
}
function rj(e2) {
  return e2.isConnected;
}
function sj(e2) {
  return Boolean(e2.user);
}
function ij(e2) {
  var t2, n2;
  return null == (n2 = null == (t2 = e2.user) ? void 0 : t2.custom) ? void 0 : n2.color;
}
function oj(e2) {
  var t2, n2;
  return null == (n2 = null == (t2 = e2.user) ? void 0 : t2.active) ? void 0 : n2.frame;
}
function lj(e2) {
  var t2;
  return null == (t2 = e2.user) ? void 0 : t2.username;
}
function cj(e2) {
  var t2;
  return null == (t2 = e2.user) ? void 0 : t2.nickname;
}
function uj(e2) {
  var t2;
  return null == (t2 = e2.user) ? void 0 : t2.avatar;
}
const dj = Xr.memo(function (e2) {
    const t2 = Kr.c(31),
      {
        buttonClassName: n2,
        avatarShape: a2,
        iconClassName: r2
      } = e2,
      s2 = void 0 === a2 ? "rounded-full" : a2,
      i2 = void 0 === r2 ? "h-6 w-6" : r2,
      o2 = he(uj),
      l2 = he(cj),
      c2 = he(lj),
      u2 = he(oj),
      d2 = he(ij),
      m2 = he(sj),
      f2 = ae(rj),
      h2 = w(aj),
      p2 = w(nj),
      g2 = l2 || c2,
      {
        t: v2
      } = P();
    let y2;
    e: {
      if (!m2) {
        let e4, n4;
        t2[0] !== i2 ? (e4 = x("h-4 w-4", i2), t2[0] = i2, t2[1] = e4) : e4 = t2[1], t2[2] !== e4 ? (n4 = Gr.jsx("span", {
          className: "flex h-full w-full items-center justify-center",
          children: Gr.jsx(tj, {
            tab: "profile",
            isActive: false,
            className: e4
          })
        }), t2[2] = e4, t2[3] = n4) : n4 = t2[3], y2 = n4;
        break e;
      }
      let e3, n3, a3;
      t2[4] !== s2 ? (e3 = x("h-full w-full", s2), t2[4] = s2, t2[5] = e3) : e3 = t2[5], t2[6] !== s2 ? (n3 = x("text-caption font-semibold", s2), t2[6] = s2, t2[7] = n3) : n3 = t2[7], t2[8] !== o2 || t2[9] !== s2 || t2[10] !== g2 || t2[11] !== e3 || t2[12] !== n3 ? (a3 = Gr.jsx(Qg, {
        src: o2,
        name: g2,
        className: e3,
        imageClassName: s2,
        fallbackClassName: n3
      }), t2[8] = o2, t2[9] = s2, t2[10] = g2, t2[11] = e3, t2[12] = n3, t2[13] = a3) : a3 = t2[13], y2 = a3;
    }
    const b2 = y2;
    let k2;
    t2[14] !== g2 || t2[15] !== v2 ? (k2 = g2 || v2("common.tabs.profile"), t2[14] = g2, t2[15] = v2, t2[16] = k2) : k2 = t2[16];
    const j2 = p2 ? "scale-110" : "hover:scale-105",
      S2 = !m2 && "text-foreground/60 hover:text-primary";
    let N2;
    t2[17] !== n2 || t2[18] !== j2 || t2[19] !== S2 ? (N2 = x("group relative flex shrink-0 items-center justify-center transition-all duration-300 outline-none ring-0 focus-visible:ring-0", j2, S2, n2), t2[17] = n2, t2[18] = j2, t2[19] = S2, t2[20] = N2) : N2 = t2[20];
    const _2 = null != d2 ? d2 : void 0;
    let C2, T2;
    return t2[21] !== b2 || t2[22] !== u2 || t2[23] !== f2 || t2[24] !== _2 ? (C2 = Gr.jsx(Wb, {
      frame: u2,
      customColor: _2,
      size: "xs",
      isOnline: f2,
      children: b2
    }), t2[21] = b2, t2[22] = u2, t2[23] = f2, t2[24] = _2, t2[25] = C2) : C2 = t2[25], t2[26] !== k2 || t2[27] !== N2 || t2[28] !== C2 || t2[29] !== h2 ? (T2 = Gr.jsx("button", {
      type: "button",
      onClick: h2,
      "aria-label": k2,
      className: N2,
      children: C2
    }), t2[26] = k2, t2[27] = N2, t2[28] = C2, t2[29] = h2, t2[30] = T2) : T2 = t2[30], T2;
  }),
  mj = {
    profile: "common.tabs.profile",
    social: "common.tabs.social",
    market: "common.tabs.market",
    friends: "common.tabs.friends",
    chat: "common.tabs.chat",
    inventory: "inventory.title",
    shop: "common.tabs.trade",
    auction: "common.tabs.auction"
  },
  fj = e2 => Object.prototype.hasOwnProperty.call(hr, e2);
function hj(e2, t2, n2) {
  return !!n2 && ("market" === e2.id ? an(n2) : "social" === e2.id ? fr(n2) : t2 && fj(e2.id) ? hr[e2.id] === n2 : n2 === e2.id);
}
const xj = Xr.memo(function (e2) {
  const t2 = Kr.c(51),
    {
      tab: n2,
      isProfileNav: a2,
      isActive: r2,
      activeTab: s2,
      className: i2,
      iconClassName: o2
    } = e2,
    l2 = void 0 === o2 ? "h-7 w-7" : o2,
    c2 = w(yj),
    {
      t: u2
    } = P(),
    d2 = w(bj),
    m2 = w(wj);
  let f2;
  t2[0] !== s2 || t2[1] !== a2 || t2[2] !== r2 || t2[3] !== m2 || t2[4] !== n2 ? (f2 = void 0 !== r2 ? r2 : "settings" === n2.id && m2 || hj(n2, a2, s2), t2[0] = s2, t2[1] = a2, t2[2] = r2, t2[3] = m2, t2[4] = n2, t2[5] = f2) : f2 = t2[5];
  const h2 = f2;
  if (a2) {
    let e3;
    t2[6] !== n2.id ? (e3 = fj(n2.id), t2[6] = n2.id, t2[7] = e3) : e3 = t2[7];
    const a3 = e3;
    let r3;
    t2[8] !== a3 || t2[9] !== u2 || t2[10] !== n2.id ? (r3 = u2(a3 ? mj[n2.id] : `common.tabs.${n2.id}`), t2[8] = a3, t2[9] = u2, t2[10] = n2.id, t2[11] = r3) : r3 = t2[11];
    const s3 = r3;
    let o3;
    t2[12] !== a3 || t2[13] !== c2 || t2[14] !== d2 || t2[15] !== n2.id ? (o3 = () => a3 ? c2(n2.id) : d2(n2.id), t2[12] = a3, t2[13] = c2, t2[14] = d2, t2[15] = n2.id, t2[16] = o3) : o3 = t2[16];
    const m3 = h2 ? "active" : "inactive";
    let f3;
    t2[17] !== i2 ? (f3 = x("!p-0 !px-0 !py-0 flex items-center justify-center", i2), t2[17] = i2, t2[18] = f3) : f3 = t2[18];
    const p3 = n2.id;
    let g3, v3;
    return t2[19] !== l2 || t2[20] !== h2 || t2[21] !== p3 ? (g3 = Gr.jsx(tj, {
      tab: p3,
      isActive: h2,
      className: l2
    }), t2[19] = l2, t2[20] = h2, t2[21] = p3, t2[22] = g3) : g3 = t2[22], t2[23] !== s3 || t2[24] !== o3 || t2[25] !== m3 || t2[26] !== f3 || t2[27] !== g3 ? (v3 = Gr.jsx("button", {
      type: "button",
      onClick: o3,
      "aria-label": s3,
      "data-state": m3,
      className: f3,
      children: g3
    }), t2[23] = s3, t2[24] = o3, t2[25] = m3, t2[26] = f3, t2[27] = g3, t2[28] = v3) : v3 = t2[28], v3;
  }
  if ("search" === n2.id) {
    let e3, n3;
    return t2[29] !== u2 ? (e3 = u2("common.tabs.search"), t2[29] = u2, t2[30] = e3) : e3 = t2[30], t2[31] !== i2 || t2[32] !== l2 || t2[33] !== h2 || t2[34] !== e3 ? (n3 = Gr.jsx(pj, {
      className: i2,
      iconClassName: l2,
      active: h2,
      label: e3
    }), t2[31] = i2, t2[32] = l2, t2[33] = h2, t2[34] = e3, t2[35] = n3) : n3 = t2[35], n3;
  }
  const p2 = `common.tabs.${n2.id}`;
  let g2;
  t2[36] !== u2 || t2[37] !== p2 ? (g2 = u2(p2), t2[36] = u2, t2[37] = p2, t2[38] = g2) : g2 = t2[38];
  const v2 = g2,
    y2 = n2.id,
    b2 = "library" === n2.id ? kj : void 0;
  let k2;
  t2[39] !== i2 ? (k2 = x("!p-0 !px-0 !py-0 flex items-center justify-center", i2), t2[39] = i2, t2[40] = k2) : k2 = t2[40];
  const j2 = n2.id;
  let S2, N2;
  return t2[41] !== l2 || t2[42] !== h2 || t2[43] !== j2 ? (S2 = Gr.jsx(tj, {
    tab: j2,
    isActive: h2,
    className: l2
  }), t2[41] = l2, t2[42] = h2, t2[43] = j2, t2[44] = S2) : S2 = t2[44], t2[45] !== v2 || t2[46] !== b2 || t2[47] !== k2 || t2[48] !== S2 || t2[49] !== n2.id ? (N2 = Gr.jsx(Ff, {
    value: y2,
    "aria-label": v2,
    onMouseDown: b2,
    className: k2,
    children: S2
  }), t2[45] = v2, t2[46] = b2, t2[47] = k2, t2[48] = S2, t2[49] = n2.id, t2[50] = N2) : N2 = t2[50], N2;
}, (e2, t2) => {
  const n2 = void 0 !== e2.isActive ? e2.isActive : hj(e2.tab, e2.isProfileNav, e2.activeTab),
    a2 = void 0 !== t2.isActive ? t2.isActive : hj(t2.tab, t2.isProfileNav, t2.activeTab);
  return e2.tab.id === t2.tab.id && e2.isProfileNav === t2.isProfileNav && n2 === a2 && e2.className === t2.className && e2.iconClassName === t2.iconClassName;
});
function yj(e2) {
  return e2.selectProfileTab;
}
function bj(e2) {
  return e2.setActiveTab;
}
function wj(e2) {
  return e2.isSettingsDialogOpen;
}
function kj(e2) {
  0 === e2.button && w.getState().toLibraryHub();
}
function Lj(e2) {
  const t2 = Kr.c(21),
    {
      isTabsHovered: n2,
      setIsTabsHovered: a2,
      variant: r2,
      shape: s2,
      className: i2,
      children: o2
    } = e2,
    l2 = void 0 === r2 ? "card" : r2,
    c2 = void 0 === s2 ? "round" : s2,
    {
      autohide: u2,
      isVertical: d2
    } = Nj(),
    m2 = "floating" === l2,
    f2 = m2 ? "fixed z-50 flex items-center justify-center pointer-events-auto transition-all duration-300" : "islands" === l2 ? "flex-shrink-0 z-30 animate-in fade-in duration-300" : "card" === l2 ? "tabs-wrapper flex-shrink-0 z-30 animate-in fade-in duration-300" : "tabs-wrapper-flush flex-shrink-0 z-30 animate-in fade-in duration-300",
    h2 = u2 && !n2 && "opacity-0 pointer-events-none";
  let p2, g2;
  t2[0] !== i2 || t2[1] !== f2 || t2[2] !== h2 ? (p2 = x(f2, h2, i2), t2[0] = i2, t2[1] = f2, t2[2] = h2, t2[3] = p2) : p2 = t2[3], t2[4] !== m2 || t2[5] !== c2 || t2[6] !== l2 ? (g2 = m2 || "islands" === l2 ? void 0 : {
    borderRadius: "round" === c2 ? "var(--radius-card)" : "pill" === c2 ? "999px" : void 0
  }, t2[4] = m2, t2[5] = c2, t2[6] = l2, t2[7] = g2) : g2 = t2[7];
  const v2 = d2 ? void 0 : "";
  let y2, b2, w2;
  return t2[8] !== u2 || t2[9] !== a2 ? (y2 = u2 ? () => a2(true) : void 0, t2[8] = u2, t2[9] = a2, t2[10] = y2) : y2 = t2[10], t2[11] !== u2 || t2[12] !== a2 ? (b2 = u2 ? () => a2(false) : void 0, t2[11] = u2, t2[12] = a2, t2[13] = b2) : b2 = t2[13], t2[14] !== o2 || t2[15] !== p2 || t2[16] !== g2 || t2[17] !== v2 || t2[18] !== y2 || t2[19] !== b2 ? (w2 = Gr.jsx("div", {
    className: p2,
    style: g2,
    "data-no-notch": v2,
    onMouseEnter: y2,
    onMouseLeave: b2,
    children: o2
  }), t2[14] = o2, t2[15] = p2, t2[16] = g2, t2[17] = v2, t2[18] = y2, t2[19] = b2, t2[20] = w2) : w2 = t2[20], w2;
}
const Aj = Zr(e2 => ({
  primaryFor: null,
  toggle: t2 => e2(e3 => ({
    primaryFor: e3.primaryFor === t2 ? null : t2
  }))
}));
function Pj() {
  const e2 = Kr.c(7),
    t2 = ms(),
    n2 = r(zj),
    a2 = r(Rj),
    s2 = Aj(Mj),
    i2 = Aj(Ij),
    o2 = a2 && "floating" !== n2 ? t2.pathname === gr.library() && new URLSearchParams(t2.search).get("playlist") ? "library" : t2.pathname === gr.chat() ? "chat" : null : null;
  let l2;
  e2[0] !== t2.key || e2[1] !== i2 ? (l2 = () => i2(t2.key), e2[0] = t2.key, e2[1] = i2, e2[2] = l2) : l2 = e2[2];
  const c2 = l2,
    u2 = Boolean(o2) && s2 !== t2.key;
  let d2;
  return e2[3] !== o2 || e2[4] !== u2 || e2[5] !== c2 ? (d2 = {
    mode: o2,
    visible: u2,
    toggleNavigation: c2
  }, e2[3] = o2, e2[4] = u2, e2[5] = c2, e2[6] = d2) : d2 = e2[6], d2;
}
function Ij(e2) {
  return e2.toggle;
}
function Mj(e2) {
  return e2.primaryFor;
}
function Rj(e2) {
  var t2, n2, a2, r2;
  return null != (r2 = null == (a2 = null == (n2 = null == (t2 = e2.settings) ? void 0 : t2.uiSettings) ? void 0 : n2.tabs) ? void 0 : a2.adaptive) && r2;
}
function zj(e2) {
  var t2, n2, a2, r2;
  return null != (r2 = null == (a2 = null == (n2 = null == (t2 = e2.settings) ? void 0 : t2.uiSettings) ? void 0 : n2.tabs) ? void 0 : a2.style) ? r2 : "default";
}
function Dj(e2) {
  const t2 = Kr.c(7),
    {
      on: n2,
      children: a2
    } = e2,
    r2 = !n2,
    s2 = !n2,
    i2 = n2 ? "opacity-100" : "pointer-events-none opacity-0";
  let o2, l2;
  return t2[0] !== i2 ? (o2 = x("col-start-1 row-start-1 flex min-h-0 min-w-0 self-stretch transition-opacity duration-100 ease-out motion-reduce:transition-none", i2), t2[0] = i2, t2[1] = o2) : o2 = t2[1], t2[2] !== a2 || t2[3] !== r2 || t2[4] !== s2 || t2[5] !== o2 ? (l2 = Gr.jsx("div", {
    inert: r2,
    "aria-hidden": s2,
    className: o2,
    children: a2
  }), t2[2] = a2, t2[3] = r2, t2[4] = s2, t2[5] = o2, t2[6] = l2) : l2 = t2[6], l2;
}
function Fj(e2) {
  const t2 = Kr.c(9),
    {
      contextual: n2,
      primary: a2,
      context: r2
    } = e2,
    s2 = !n2;
  let i2, o2, l2;
  return t2[0] !== a2 || t2[1] !== s2 ? (i2 = Gr.jsx(Dj, {
    on: s2,
    children: a2
  }), t2[0] = a2, t2[1] = s2, t2[2] = i2) : i2 = t2[2], t2[3] !== r2 || t2[4] !== n2 ? (o2 = Gr.jsx(Dj, {
    on: n2,
    children: r2
  }), t2[3] = r2, t2[4] = n2, t2[5] = o2) : o2 = t2[5], t2[6] !== i2 || t2[7] !== o2 ? (l2 = Gr.jsxs("div", {
    className: "grid min-h-0 min-w-0 flex-1 self-stretch",
    children: [i2, o2]
  }), t2[6] = i2, t2[7] = o2, t2[8] = l2) : l2 = t2[8], l2;
}
const Oj = {
    duration: 0.28,
    ease: [0.33, 1, 0.68, 1]
  },
  $j = {
    vertical: ["self-start", "self-center", "self-end"],
    horizontal: ["justify-self-start", "justify-self-center", "justify-self-end"]
  },
  Bj = Xr.memo(function (e2) {
    const t2 = Kr.c(66),
      {
        isTabsHovered: n2,
        setIsTabsHovered: a2,
        shape: r2,
        triggerClassName: s2,
        gapClassName: i2
      } = e2,
      o2 = void 0 === i2 ? "gap-1" : i2,
      {
        activeTab: l2,
        isVertical: c2,
        isProfileNav: u2,
        groups: d2,
        socialTabs: m2
      } = Nj(),
      {
        mode: f2,
        visible: h2,
        toggleNavigation: p2
      } = Pj(),
      g2 = "round" === r2 ? "var(--radius-card)" : "999px",
      v2 = c2 ? "bottom-2 left-1/2 -translate-x-1/2" : "right-2 top-1/2 -translate-y-1/2";
    let y2, b2, w2;
    t2[0] !== v2 ? (y2 = x("absolute z-10", v2), t2[0] = v2, t2[1] = y2) : y2 = t2[1], t2[2] === Symbol.for("react.memo_cache_sentinel") ? (b2 = Gr.jsx(dj, {
      buttonClassName: "h-11 w-11 rounded-full flex items-center justify-center",
      avatarShape: "rounded-full",
      iconClassName: "h-5 w-5"
    }), t2[2] = b2) : b2 = t2[2], t2[3] !== y2 ? (w2 = Gr.jsx("div", {
      className: y2,
      children: b2
    }), t2[3] = y2, t2[4] = w2) : w2 = t2[4];
    const k2 = w2;
    let j2;
    t2[5] !== c2 ? (j2 = c2 ? {
      height: 0,
      marginTop: 0,
      opacity: 0
    } : {
      width: 0,
      marginLeft: 0,
      opacity: 0
    }, t2[5] = c2, t2[6] = j2) : j2 = t2[6];
    const S2 = j2;
    let N2;
    t2[7] !== c2 ? (N2 = c2 ? {
      height: "auto",
      marginTop: 12,
      opacity: 1
    } : {
      width: "auto",
      marginLeft: 12,
      opacity: 1
    }, t2[7] = c2, t2[8] = N2) : N2 = t2[8];
    const _2 = N2,
      C2 = c2 ? "flex-col" : "flex-row";
    let T2;
    t2[9] !== C2 ? (T2 = x("relative flex h-full w-full", C2), t2[9] = C2, t2[10] = T2) : T2 = t2[10];
    const E2 = c2 && "flex-col",
      L2 = !u2 && (c2 ? "pb-16" : "pr-16");
    let A2, P2;
    t2[11] !== E2 || t2[12] !== L2 ? (A2 = x("tabs-wrapper min-h-0 min-w-0 flex-1 p-2 flex items-center gap-1", E2, L2), t2[11] = E2, t2[12] = L2, t2[13] = A2) : A2 = t2[13], t2[14] !== g2 ? (P2 = {
      borderRadius: g2
    }, t2[14] = g2, t2[15] = P2) : P2 = t2[15];
    const I2 = f2 ? p2 : void 0;
    let M2, R2;
    t2[16] !== I2 ? (M2 = Gr.jsx(Cd, {
      onClick: I2
    }), t2[16] = I2, t2[17] = M2) : M2 = t2[17], t2[18] !== h2 ? (R2 = Gr.jsx(qf, {
      active: h2
    }), t2[18] = h2, t2[19] = R2) : R2 = t2[19];
    const z2 = c2 ? "grid-rows-[1fr_auto_1fr] justify-items-center" : "grid-cols-[1fr_auto_1fr] items-center";
    let D2, F2, O2, $2, B2, U2, q2, H2, W2;
    if (t2[20] !== z2 ? (D2 = x("grid h-full w-full", z2), t2[20] = z2, t2[21] = D2) : D2 = t2[21], t2[22] !== l2 || t2[23] !== o2 || t2[24] !== d2 || t2[25] !== c2 || t2[26] !== s2) {
      let e3;
      t2[28] !== l2 || t2[29] !== o2 || t2[30] !== c2 || t2[31] !== s2 ? (e3 = (e4, t3) => Gr.jsx("div", {
        className: x("flex items-center", o2, c2 ? "flex-col" : "flex-row", $j[c2 ? "vertical" : "horizontal"][t3]),
        children: Gr.jsx(Df, {
          className: x("bg-transparent shadow-none !p-0 flex items-center !h-auto", o2, c2 ? "!flex-col" : "flex-row"),
          children: e4.map(e5 => Gr.jsx(xj, {
            tab: e5,
            isProfileNav: false,
            activeTab: l2,
            className: s2
          }, e5.id))
        })
      }, t3), t2[28] = l2, t2[29] = o2, t2[30] = c2, t2[31] = s2, t2[32] = e3) : e3 = t2[32], F2 = d2.map(e3), t2[22] = l2, t2[23] = o2, t2[24] = d2, t2[25] = c2, t2[26] = s2, t2[27] = F2;
    } else F2 = t2[27];
    return t2[33] !== D2 || t2[34] !== F2 ? (O2 = Gr.jsx("div", {
      className: D2,
      "data-tauri-drag-region": true,
      children: F2
    }), t2[33] = D2, t2[34] = F2, t2[35] = O2) : O2 = t2[35], t2[36] !== R2 || t2[37] !== O2 || t2[38] !== h2 ? ($2 = Gr.jsx(Fj, {
      contextual: h2,
      context: R2,
      primary: O2
    }), t2[36] = R2, t2[37] = O2, t2[38] = h2, t2[39] = $2) : $2 = t2[39], t2[40] !== A2 || t2[41] !== P2 || t2[42] !== M2 || t2[43] !== $2 ? (B2 = Gr.jsxs("div", {
      className: A2,
      style: P2,
      children: [M2, $2]
    }), t2[40] = A2, t2[41] = P2, t2[42] = M2, t2[43] = $2, t2[44] = B2) : B2 = t2[44], t2[45] !== l2 || t2[46] !== S2 || t2[47] !== o2 || t2[48] !== u2 || t2[49] !== c2 || t2[50] !== _2 || t2[51] !== g2 || t2[52] !== m2 || t2[53] !== s2 ? (U2 = u2 && Gr.jsx(Jr.div, {
      initial: S2,
      animate: _2,
      exit: S2,
      transition: Oj,
      className: "tabs-wrapper shrink-0 overflow-hidden",
      style: {
        borderRadius: g2
      },
      children: Gr.jsx("div", {
        className: x("flex items-center p-2", o2, c2 ? "flex-col pb-14" : "flex-row pr-14"),
        children: m2.map(e3 => Gr.jsx(xj, {
          tab: e3,
          isProfileNav: true,
          activeTab: l2,
          className: s2
        }, e3.id))
      })
    }, "social"), t2[45] = l2, t2[46] = S2, t2[47] = o2, t2[48] = u2, t2[49] = c2, t2[50] = _2, t2[51] = g2, t2[52] = m2, t2[53] = s2, t2[54] = U2) : U2 = t2[54], t2[55] !== U2 ? (q2 = Gr.jsx(Yr, {
      initial: false,
      children: U2
    }), t2[55] = U2, t2[56] = q2) : q2 = t2[56], t2[57] !== k2 || t2[58] !== B2 || t2[59] !== q2 || t2[60] !== T2 ? (H2 = Gr.jsxs("div", {
      className: T2,
      children: [B2, q2, k2]
    }), t2[57] = k2, t2[58] = B2, t2[59] = q2, t2[60] = T2, t2[61] = H2) : H2 = t2[61], t2[62] !== n2 || t2[63] !== a2 || t2[64] !== H2 ? (W2 = Gr.jsx(Lj, {
      isTabsHovered: n2,
      setIsTabsHovered: a2,
      variant: "islands",
      className: "h-full w-full",
      children: H2
    }), t2[62] = n2, t2[63] = a2, t2[64] = H2, t2[65] = W2) : W2 = t2[65], W2;
  }),
  Uj = Xr.memo(function (e2) {
    const t2 = Kr.c(2);
    let n2;
    return t2[0] !== e2 ? (n2 = Gr.jsx(Bj, {
      ...e2,
      shape: "pill",
      triggerClassName: "text-foreground/60 hover:text-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none h-11 w-11 rounded-full transition-all outline-none ring-0 focus-visible:ring-0 flex items-center justify-center"
    }), t2[0] = e2, t2[1] = n2) : n2 = t2[1], n2;
  }),
  qj = Xr.memo(function (e2) {
    const t2 = Kr.c(61),
      {
        isTabsHovered: n2,
        setIsTabsHovered: a2,
        variant: r2,
        shape: s2,
        triggerClassName: i2,
        packed: o2
      } = e2,
      l2 = void 0 !== o2 && o2,
      {
        activeTab: c2,
        isVertical: u2,
        isProfileNav: d2,
        groups: m2,
        socialTabs: f2
      } = Nj(),
      {
        mode: h2,
        visible: p2,
        toggleNavigation: g2
      } = Pj(),
      v2 = u2 && "flex-col";
    let y2;
    t2[0] !== v2 ? (y2 = x("flex h-full w-full items-center p-2 gap-1", v2), t2[0] = v2, t2[1] = y2) : y2 = t2[1];
    const b2 = h2 ? g2 : void 0;
    let w2;
    t2[2] !== b2 ? (w2 = Gr.jsx(Cd, {
      onClick: b2
    }), t2[2] = b2, t2[3] = w2) : w2 = t2[3];
    const k2 = l2 ? "gap-3" : "gap-1.5",
      j2 = u2 ? "flex-col items-center" : "items-center",
      S2 = !l2 && "justify-between";
    let N2, _2;
    t2[4] !== k2 || t2[5] !== j2 || t2[6] !== S2 ? (N2 = x("flex min-h-0 min-w-0 flex-1 self-stretch", k2, j2, S2), t2[4] = k2, t2[5] = j2, t2[6] = S2, t2[7] = N2) : N2 = t2[7], t2[8] !== p2 ? (_2 = Gr.jsx(qf, {
      active: p2
    }), t2[8] = p2, t2[9] = _2) : _2 = t2[9];
    const C2 = l2 ? "gap-3" : "gap-1.5",
      T2 = u2 ? "flex-col items-center" : "items-center",
      E2 = !l2 && "justify-between";
    let L2, A2, P2, I2;
    if (t2[10] !== C2 || t2[11] !== T2 || t2[12] !== E2 ? (L2 = x("flex min-h-0 min-w-0 flex-1 self-stretch", C2, T2, E2), t2[10] = C2, t2[11] = T2, t2[12] = E2, t2[13] = L2) : L2 = t2[13], t2[14] !== c2 || t2[15] !== m2 || t2[16] !== u2 || t2[17] !== l2 || t2[18] !== i2) {
      let e3;
      t2[20] !== c2 || t2[21] !== m2.length || t2[22] !== u2 || t2[23] !== l2 || t2[24] !== i2 ? (e3 = (e4, t3) => Gr.jsx("div", {
        className: x("flex items-center gap-1.5", u2 ? "flex-col w-full" : "flex-row", l2 && t3 === m2.length - 1 && (u2 ? "mt-auto" : "ml-auto")),
        children: Gr.jsx(Df, {
          className: x("bg-transparent shadow-none !p-0 flex items-center justify-center gap-1.5", u2 ? "!flex !flex-col w-full h-auto" : "flex-row h-11"),
          children: e4.map(e5 => Gr.jsx(xj, {
            tab: e5,
            isProfileNav: false,
            activeTab: c2,
            className: i2
          }, e5.id))
        })
      }, t3), t2[20] = c2, t2[21] = m2.length, t2[22] = u2, t2[23] = l2, t2[24] = i2, t2[25] = e3) : e3 = t2[25], A2 = m2.map(e3), t2[14] = c2, t2[15] = m2, t2[16] = u2, t2[17] = l2, t2[18] = i2, t2[19] = A2;
    } else A2 = t2[19];
    t2[26] !== L2 || t2[27] !== A2 ? (P2 = Gr.jsx("div", {
      className: L2,
      "data-tauri-drag-region": true,
      children: A2
    }), t2[26] = L2, t2[27] = A2, t2[28] = P2) : P2 = t2[28], t2[29] !== _2 || t2[30] !== P2 || t2[31] !== p2 ? (I2 = Gr.jsx(Fj, {
      contextual: p2,
      context: _2,
      primary: P2
    }), t2[29] = _2, t2[30] = P2, t2[31] = p2, t2[32] = I2) : I2 = t2[32];
    const M2 = u2 ? "flex-col" : "flex-row";
    let R2, z2, D2, F2, O2, $2, B2, U2;
    return t2[33] !== M2 ? (R2 = x("flex items-center gap-1.5 shrink-0", M2), t2[33] = M2, t2[34] = R2) : R2 = t2[34], t2[35] !== c2 || t2[36] !== d2 || t2[37] !== u2 || t2[38] !== f2 || t2[39] !== i2 ? (z2 = d2 && Gr.jsxs(Jr.div, {
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
        duration: 0.2,
        ease: "easeOut"
      },
      className: x("flex items-center gap-1.5", u2 ? "flex-col" : "flex-row"),
      children: [Gr.jsx("div", {
        className: x("bg-border-default shrink-0", u2 ? "h-px w-6 my-0.5" : "w-px h-6 mx-0.5")
      }), f2.map(e3 => Gr.jsx(xj, {
        tab: e3,
        isProfileNav: true,
        activeTab: c2,
        className: i2
      }, e3.id))]
    }, "social"), t2[35] = c2, t2[36] = d2, t2[37] = u2, t2[38] = f2, t2[39] = i2, t2[40] = z2) : z2 = t2[40], t2[41] !== z2 ? (D2 = Gr.jsx(Yr, {
      initial: false,
      children: z2
    }), t2[41] = z2, t2[42] = D2) : D2 = t2[42], t2[43] === Symbol.for("react.memo_cache_sentinel") ? (F2 = Gr.jsx(dj, {
      buttonClassName: "h-11 w-11 rounded-full flex items-center justify-center transition-all active:scale-95",
      avatarShape: "rounded-full",
      iconClassName: "h-5 w-5"
    }), t2[43] = F2) : F2 = t2[43], t2[44] !== R2 || t2[45] !== D2 ? (O2 = Gr.jsxs("div", {
      className: R2,
      children: [D2, F2]
    }), t2[44] = R2, t2[45] = D2, t2[46] = O2) : O2 = t2[46], t2[47] !== I2 || t2[48] !== O2 || t2[49] !== N2 ? ($2 = Gr.jsxs("div", {
      className: N2,
      "data-tauri-drag-region": true,
      children: [I2, O2]
    }), t2[47] = I2, t2[48] = O2, t2[49] = N2, t2[50] = $2) : $2 = t2[50], t2[51] !== $2 || t2[52] !== y2 || t2[53] !== w2 ? (B2 = Gr.jsxs("div", {
      className: y2,
      "data-tauri-drag-region": true,
      children: [w2, $2]
    }), t2[51] = $2, t2[52] = y2, t2[53] = w2, t2[54] = B2) : B2 = t2[54], t2[55] !== n2 || t2[56] !== a2 || t2[57] !== s2 || t2[58] !== B2 || t2[59] !== r2 ? (U2 = Gr.jsx(Lj, {
      isTabsHovered: n2,
      setIsTabsHovered: a2,
      variant: r2,
      shape: s2,
      className: "h-full w-full",
      children: B2
    }), t2[55] = n2, t2[56] = a2, t2[57] = s2, t2[58] = B2, t2[59] = r2, t2[60] = U2) : U2 = t2[60], U2;
  }),
  Hj = Xr.memo(function (e2) {
    const t2 = Kr.c(2);
    let n2;
    return t2[0] !== e2 ? (n2 = Gr.jsx(qj, {
      ...e2,
      variant: "card",
      shape: "round",
      triggerClassName: "text-foreground/60 hover:text-primary hover:scale-[1.02] active:scale-95 data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none h-11 w-11 rounded-xl transition-all outline-none ring-0 focus-visible:ring-0 flex items-center justify-center",
      packed: true
    }), t2[0] = e2, t2[1] = n2) : n2 = t2[1], n2;
  }),
  Wj = Xr.memo(function (e2) {
    const t2 = Kr.c(2);
    let n2;
    return t2[0] !== e2 ? (n2 = Gr.jsx(Bj, {
      ...e2,
      shape: "round",
      triggerClassName: "text-foreground/60 hover:text-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none h-11 w-11 rounded-xl transition-all outline-none ring-0 focus-visible:ring-0 flex items-center justify-center"
    }), t2[0] = e2, t2[1] = n2) : n2 = t2[1], n2;
  }),
  Vj = "group relative flex items-center justify-center h-11 w-11 transition-colors duration-200 rounded-full outline-none ring-0 focus-visible:ring-0 text-foreground/50 hover:text-foreground data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
  Qj = {
    duration: 0.28,
    ease: [0.33, 1, 0.68, 1]
  },
  Kj = Xr.memo(function (e2) {
    const t2 = Kr.c(51),
      {
        isTabsHovered: n2,
        setIsTabsHovered: a2
      } = e2,
      {
        activeTab: r2,
        isProfileNav: s2,
        groups: i2,
        socialTabs: o2,
        tabsPosition: l2,
        isVertical: c2
      } = Nj();
    let u2;
    e: switch (l2) {
      case "top":
        u2 = "top-8 left-1/2 -translate-x-1/2";
        break e;
      case "left":
        u2 = "left-8 top-1/2 -translate-y-1/2";
        break e;
      case "right":
        u2 = "right-8 top-1/2 -translate-y-1/2";
        break e;
      default:
        u2 = "bottom-8 left-1/2 -translate-x-1/2";
    }
    const d2 = u2,
      m2 = c2 ? "h-px w-6 my-0.5" : "w-px h-6 mx-0.5";
    let f2, h2;
    t2[0] !== m2 ? (f2 = x("bg-border-default shrink-0", m2), t2[0] = m2, t2[1] = f2) : f2 = t2[1], t2[2] !== f2 ? (h2 = Gr.jsx("div", {
      className: f2
    }), t2[2] = f2, t2[3] = h2) : h2 = t2[3];
    const p2 = h2;
    let g2;
    t2[4] === Symbol.for("react.memo_cache_sentinel") ? (g2 = Gr.jsx(Jr.div, {
      layoutId: "floating-tabs-avatar",
      transition: Qj,
      className: "shrink-0",
      children: Gr.jsx(dj, {
        buttonClassName: "h-11 w-11 rounded-full",
        avatarShape: "rounded-full",
        iconClassName: "h-5 w-5"
      })
    }), t2[4] = g2) : g2 = t2[4];
    const v2 = g2;
    let y2;
    t2[5] !== c2 ? (y2 = c2 ? {
      height: 0,
      marginTop: 0,
      opacity: 0
    } : {
      width: 0,
      marginLeft: 0,
      opacity: 0
    }, t2[5] = c2, t2[6] = y2) : y2 = t2[6];
    const b2 = y2;
    let w2;
    t2[7] !== c2 ? (w2 = c2 ? {
      height: "auto",
      marginTop: 12,
      opacity: 1
    } : {
      width: "auto",
      marginLeft: 12,
      opacity: 1
    }, t2[7] = c2, t2[8] = w2) : w2 = t2[8];
    const k2 = w2,
      j2 = c2 ? "flex-col" : "flex-row";
    let S2;
    t2[9] !== j2 ? (S2 = x("flex items-center", j2), t2[9] = j2, t2[10] = S2) : S2 = t2[10];
    const N2 = c2 ? "flex-col" : "flex-row";
    let _2, C2;
    t2[11] !== N2 ? (_2 = x("shell-floating !border-transparent shadow-[var(--shadow-float)] flex items-center gap-1 rounded-full p-1.5", N2), t2[11] = N2, t2[12] = _2) : _2 = t2[12], t2[13] === Symbol.for("react.memo_cache_sentinel") ? (C2 = Gr.jsx(Cd, {}), t2[13] = C2) : C2 = t2[13];
    const T2 = c2 ? "!flex-col" : "flex-row";
    let E2, L2, A2, P2, I2, M2, R2, z2, D2;
    if (t2[14] !== T2 ? (E2 = x("bg-transparent shadow-none !p-0 flex items-center gap-1 !h-auto !w-auto", T2), t2[14] = T2, t2[15] = E2) : E2 = t2[15], t2[16] !== r2 || t2[17] !== p2 || t2[18] !== i2) {
      let e3;
      t2[20] !== r2 || t2[21] !== p2 ? (e3 = (e4, t3) => Gr.jsxs(Xr.Fragment, {
        children: [t3 > 0 && p2, e4.map(e5 => Gr.jsx(xj, {
          tab: e5,
          isProfileNav: false,
          activeTab: r2,
          className: Vj
        }, e5.id))]
      }, t3), t2[20] = r2, t2[21] = p2, t2[22] = e3) : e3 = t2[22], L2 = i2.map(e3), t2[16] = r2, t2[17] = p2, t2[18] = i2, t2[19] = L2;
    } else L2 = t2[19];
    return t2[23] !== E2 || t2[24] !== L2 ? (A2 = Gr.jsx(Df, {
      className: E2,
      children: L2
    }), t2[23] = E2, t2[24] = L2, t2[25] = A2) : A2 = t2[25], t2[26] !== p2 || t2[27] !== s2 ? (P2 = !s2 && Gr.jsxs(Gr.Fragment, {
      children: [p2, v2]
    }), t2[26] = p2, t2[27] = s2, t2[28] = P2) : P2 = t2[28], t2[29] !== _2 || t2[30] !== A2 || t2[31] !== P2 ? (I2 = Gr.jsxs("div", {
      className: _2,
      children: [C2, A2, P2]
    }), t2[29] = _2, t2[30] = A2, t2[31] = P2, t2[32] = I2) : I2 = t2[32], t2[33] !== r2 || t2[34] !== b2 || t2[35] !== s2 || t2[36] !== c2 || t2[37] !== k2 || t2[38] !== o2 ? (M2 = s2 && Gr.jsx(Jr.div, {
      initial: b2,
      animate: k2,
      exit: b2,
      transition: Qj,
      className: "shell-floating !border-transparent shadow-[var(--shadow-float)] shrink-0 overflow-hidden rounded-full",
      children: Gr.jsxs("div", {
        className: x("flex items-center gap-1 p-1.5", c2 ? "flex-col" : "flex-row"),
        children: [o2.map(e3 => Gr.jsx(xj, {
          tab: e3,
          isProfileNav: true,
          activeTab: r2,
          className: Vj
        }, e3.id)), v2]
      })
    }, "social"), t2[33] = r2, t2[34] = b2, t2[35] = s2, t2[36] = c2, t2[37] = k2, t2[38] = o2, t2[39] = M2) : M2 = t2[39], t2[40] !== M2 ? (R2 = Gr.jsx(Yr, {
      initial: false,
      children: M2
    }), t2[40] = M2, t2[41] = R2) : R2 = t2[41], t2[42] !== I2 || t2[43] !== R2 || t2[44] !== S2 ? (z2 = Gr.jsx(Bs, {
      children: Gr.jsxs("div", {
        className: S2,
        children: [I2, R2]
      })
    }), t2[42] = I2, t2[43] = R2, t2[44] = S2, t2[45] = z2) : z2 = t2[45], t2[46] !== n2 || t2[47] !== d2 || t2[48] !== a2 || t2[49] !== z2 ? (D2 = Gr.jsx(Lj, {
      isTabsHovered: n2,
      setIsTabsHovered: a2,
      variant: "floating",
      shape: "none",
      className: d2,
      children: z2
    }), t2[46] = n2, t2[47] = d2, t2[48] = a2, t2[49] = z2, t2[50] = D2) : D2 = t2[50], D2;
  }),
  Gj = Xr.memo(function (e2) {
    const t2 = Kr.c(2);
    let n2;
    return t2[0] !== e2 ? (n2 = Gr.jsx(qj, {
      ...e2,
      variant: "flush",
      shape: "none",
      triggerClassName: "relative flex items-center justify-center h-11 w-11 rounded-full transition-all text-foreground/60 hover:text-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none active:scale-95 outline-none ring-0 focus-visible:ring-0"
    }), t2[0] = e2, t2[1] = n2) : n2 = t2[1], n2;
  }),
  Xj = Xr.memo(function (e2) {
    var t2;
    const n2 = Kr.c(10),
      [a2] = cn(),
      r2 = (null == (t2 = a2.tabs) ? void 0 : t2.style) || "default";
    if ("full" === r2) {
      let t3;
      return n2[0] !== e2 ? (t3 = Gr.jsx(Gj, {
        ...e2
      }), n2[0] = e2, n2[1] = t3) : t3 = n2[1], t3;
    }
    if ("compact" === r2) {
      let t3;
      return n2[2] !== e2 ? (t3 = Gr.jsx(Hj, {
        ...e2
      }), n2[2] = e2, n2[3] = t3) : t3 = n2[3], t3;
    }
    if ("circle" === r2) {
      let t3;
      return n2[4] !== e2 ? (t3 = Gr.jsx(Uj, {
        ...e2
      }), n2[4] = e2, n2[5] = t3) : t3 = n2[5], t3;
    }
    if ("floating" === r2) {
      let t3;
      return n2[6] !== e2 ? (t3 = Gr.jsx(Kj, {
        ...e2
      }), n2[6] = e2, n2[7] = t3) : t3 = n2[7], t3;
    }
    let s2;
    return n2[8] !== e2 ? (s2 = Gr.jsx(Wj, {
      ...e2
    }), n2[8] = e2, n2[9] = s2) : s2 = n2[9], s2;
  }),
  Yj = {
    type: "spring",
    damping: 28,
    stiffness: 240,
    mass: 0.85
  },
  Jj = Object.freeze({
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    rotateZ: 0
  }),
  Zj = {
    left: "left center",
    right: "right center",
    top: "center top",
    bottom: "center bottom"
  };
const eS = Xr.memo(function (e2) {
    const t2 = Kr.c(88),
      {
        isOpen: n2,
        onClose: a2,
        drawer: r2,
        children: s2,
        side: i2,
        width: o2,
        height: l2,
        size: c2,
        gap: u2,
        className: d2,
        drawerClassName: m2,
        contentClassName: f2,
        perspective: h2,
        closeOnEscape: p2,
        lazy: g2
      } = e2,
      v2 = void 0 === i2 ? "left" : i2,
      y2 = void 0 === u2 ? 0 : u2,
      b2 = void 0 === h2 ? "max(1200px, 150vw, 150vh)" : h2,
      w2 = void 0 === p2 || p2,
      k2 = c2 || ("left" === v2 || "right" === v2 ? o2 || "min(700px, 52vw)" : l2 || "min(520px, 70vh)"),
      j2 = y2 ? `calc(${k2} + ${y2}px)` : k2,
      [S2, N2] = Xr.useState(n2),
      [_2, C2] = Xr.useState(n2),
      [T2, E2] = Xr.useState(false);
    let L2;
    n2 !== _2 && (C2(n2), n2 ? (N2(true), E2(false)) : E2(true)), t2[0] !== n2 ? (L2 = () => {
      n2 || E2(false);
    }, t2[0] = n2, t2[1] = L2) : L2 = t2[1];
    const A2 = L2,
      P2 = n2 || T2;
    let I2, M2, R2, z2, D2, F2;
    t2[2] !== P2 ? (I2 = () => {
      P2 ? document.documentElement.setAttribute("data-drawer-active", "true") : document.documentElement.removeAttribute("data-drawer-active"), window.dispatchEvent(new CustomEvent("dotify:drawer-state", {
        detail: {
          active: P2
        }
      }));
    }, M2 = [P2], t2[2] = P2, t2[3] = I2, t2[4] = M2) : (I2 = t2[3], M2 = t2[4]), Qr.useEffect(I2, M2), t2[5] === Symbol.for("react.memo_cache_sentinel") ? (R2 = [], t2[5] = R2) : R2 = t2[5], Qr.useEffect(aS, R2), t2[6] !== w2 || t2[7] !== n2 || t2[8] !== a2 ? (z2 = () => {
      if (!n2 || !w2) return;
      const e3 = e4 => {
        "Escape" === e4.key && (e4.preventDefault(), a2());
      };
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, D2 = [n2, a2, w2], t2[6] = w2, t2[7] = n2, t2[8] = a2, t2[9] = z2, t2[10] = D2) : (z2 = t2[9], D2 = t2[10]), Qr.useEffect(z2, D2), t2[11] !== a2 ? (F2 = () => {
      a2();
    }, t2[11] = a2, t2[12] = F2) : F2 = t2[12];
    const O2 = F2,
      $2 = Zj[v2];
    let B2;
    e: if (n2) {
      switch (v2) {
        case "left":
          {
            let e3;
            t2[13] !== j2 ? (e3 = {
              x: j2,
              y: 0,
              scale: 0.88,
              rotateY: -8,
              rotateX: 0,
              rotateZ: 0
            }, t2[13] = j2, t2[14] = e3) : e3 = t2[14], B2 = e3;
            break e;
          }
        case "right":
          {
            const e3 = `calc(-1 * ${j2})`;
            let n3;
            t2[15] !== e3 ? (n3 = {
              x: e3,
              y: 0,
              scale: 0.88,
              rotateY: 8,
              rotateX: 0,
              rotateZ: 0
            }, t2[15] = e3, t2[16] = n3) : n3 = t2[16], B2 = n3;
            break e;
          }
        case "top":
          {
            let e3;
            t2[17] !== j2 ? (e3 = {
              x: 0,
              y: j2,
              scale: 0.88,
              rotateX: 8,
              rotateY: 0,
              rotateZ: 0
            }, t2[17] = j2, t2[18] = e3) : e3 = t2[18], B2 = e3;
            break e;
          }
        case "bottom":
          {
            const e3 = `calc(-1 * ${j2})`;
            let n3;
            t2[19] !== e3 ? (n3 = {
              x: 0,
              y: e3,
              scale: 0.88,
              rotateX: -8,
              rotateY: 0,
              rotateZ: 0
            }, t2[19] = e3, t2[20] = n3) : n3 = t2[20], B2 = n3;
            break e;
          }
      }
      B2 = void 0;
    } else B2 = Jj;
    const U2 = B2;
    let q2;
    e: {
      switch (v2) {
        case "left":
          {
            let e3, a3;
            t2[21] !== k2 ? (e3 = {
              width: k2
            }, t2[21] = k2, t2[22] = e3) : e3 = t2[22], t2[23] === Symbol.for("react.memo_cache_sentinel") ? (a3 = {
              x: "-100%"
            }, t2[23] = a3) : a3 = t2[23];
            const r3 = n2 ? 0 : "-100%";
            let s3, i3;
            t2[24] !== r3 ? (s3 = {
              x: r3
            }, t2[24] = r3, t2[25] = s3) : s3 = t2[25], t2[26] !== e3 || t2[27] !== s3 ? (i3 = {
              classes: "left-0 top-0 bottom-0 h-full shadow-none",
              style: e3,
              initial: a3,
              animate: s3
            }, t2[26] = e3, t2[27] = s3, t2[28] = i3) : i3 = t2[28], q2 = i3;
            break e;
          }
        case "right":
          {
            let e3, a3;
            t2[29] !== k2 ? (e3 = {
              width: k2
            }, t2[29] = k2, t2[30] = e3) : e3 = t2[30], t2[31] === Symbol.for("react.memo_cache_sentinel") ? (a3 = {
              x: "100%"
            }, t2[31] = a3) : a3 = t2[31];
            const r3 = n2 ? 0 : "100%";
            let s3, i3;
            t2[32] !== r3 ? (s3 = {
              x: r3
            }, t2[32] = r3, t2[33] = s3) : s3 = t2[33], t2[34] !== e3 || t2[35] !== s3 ? (i3 = {
              classes: "right-0 top-0 bottom-0 h-full shadow-none",
              style: e3,
              initial: a3,
              animate: s3
            }, t2[34] = e3, t2[35] = s3, t2[36] = i3) : i3 = t2[36], q2 = i3;
            break e;
          }
        case "top":
          {
            let e3, a3;
            t2[37] !== k2 ? (e3 = {
              height: k2
            }, t2[37] = k2, t2[38] = e3) : e3 = t2[38], t2[39] === Symbol.for("react.memo_cache_sentinel") ? (a3 = {
              y: "-100%"
            }, t2[39] = a3) : a3 = t2[39];
            const r3 = n2 ? 0 : "-100%";
            let s3, i3;
            t2[40] !== r3 ? (s3 = {
              y: r3
            }, t2[40] = r3, t2[41] = s3) : s3 = t2[41], t2[42] !== e3 || t2[43] !== s3 ? (i3 = {
              classes: "top-0 left-0 right-0 w-full shadow-none",
              style: e3,
              initial: a3,
              animate: s3
            }, t2[42] = e3, t2[43] = s3, t2[44] = i3) : i3 = t2[44], q2 = i3;
            break e;
          }
        case "bottom":
          {
            let e3, a3;
            t2[45] !== k2 ? (e3 = {
              height: k2
            }, t2[45] = k2, t2[46] = e3) : e3 = t2[46], t2[47] === Symbol.for("react.memo_cache_sentinel") ? (a3 = {
              y: "100%"
            }, t2[47] = a3) : a3 = t2[47];
            const r3 = n2 ? 0 : "100%";
            let s3, i3;
            t2[48] !== r3 ? (s3 = {
              y: r3
            }, t2[48] = r3, t2[49] = s3) : s3 = t2[49], t2[50] !== e3 || t2[51] !== s3 ? (i3 = {
              classes: "bottom-0 left-0 right-0 w-full shadow-none",
              style: e3,
              initial: a3,
              animate: s3
            }, t2[50] = e3, t2[51] = s3, t2[52] = i3) : i3 = t2[52], q2 = i3;
            break e;
          }
      }
      q2 = void 0;
    }
    const H2 = q2;
    let W2;
    t2[53] !== P2 || t2[54] !== $2 ? (W2 = P2 ? {
      transformOrigin: $2,
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      willChange: "transform",
      isolation: "isolate"
    } : void 0, t2[53] = P2, t2[54] = $2, t2[55] = W2) : W2 = t2[55];
    const V2 = W2;
    let Q2;
    t2[56] !== d2 ? (Q2 = x("threed-container relative w-full h-full overflow-hidden", d2), t2[56] = d2, t2[57] = Q2) : Q2 = t2[57];
    const K2 = P2 ? b2 : void 0;
    let G2;
    t2[58] !== K2 ? (G2 = {
      perspective: K2
    }, t2[58] = K2, t2[59] = G2) : G2 = t2[59];
    const X2 = P2 && "transform-gpu",
      Y2 = P2 ? "rounded-card overflow-hidden shadow-none" : "",
      J2 = n2 && "pointer-events-none";
    let Z2;
    t2[60] !== f2 || t2[61] !== X2 || t2[62] !== Y2 || t2[63] !== J2 ? (Z2 = x("threed-viewport relative w-full h-full", X2, Y2, J2, f2), t2[60] = f2, t2[61] = X2, t2[62] = Y2, t2[63] = J2, t2[64] = Z2) : Z2 = t2[64];
    const ee2 = n2 ? U2 : Jj;
    let te2, ne2, ae2, re2;
    return t2[65] !== O2 || t2[66] !== n2 || t2[67] !== P2 ? (te2 = P2 && Gr.jsx("div", {
      className: x("absolute inset-0 z-50 rounded-[inherit] drawer-backdrop transition-opacity duration-300", n2 ? "opacity-100 cursor-pointer pointer-events-auto" : "opacity-0 pointer-events-auto cursor-default"),
      onClick: n2 ? O2 : void 0,
      "aria-hidden": true
    }), t2[65] = O2, t2[66] = n2, t2[67] = P2, t2[68] = te2) : te2 = t2[68], t2[69] !== s2 || t2[70] !== A2 || t2[71] !== Z2 || t2[72] !== ee2 || t2[73] !== te2 || t2[74] !== V2 ? (ne2 = Gr.jsxs(Jr.div, {
      className: Z2,
      style: V2,
      initial: false,
      animate: ee2,
      transition: Yj,
      onAnimationComplete: A2,
      children: [s2, te2]
    }), t2[69] = s2, t2[70] = A2, t2[71] = Z2, t2[72] = ee2, t2[73] = te2, t2[74] = V2, t2[75] = ne2) : ne2 = t2[75], t2[76] !== r2 || t2[77] !== m2 || t2[78] !== H2 || t2[79] !== S2 || t2[80] !== n2 || t2[81] !== P2 ? (ae2 = S2 && Gr.jsx(Jr.div, {
      className: x("threed-drawer-viewport absolute z-50 flex flex-col overflow-hidden border-none shadow-none", H2.classes, m2),
      style: {
        ...H2.style,
        display: P2 ? void 0 : "none",
        willChange: P2 ? "transform" : void 0,
        isolation: P2 ? "isolate" : void 0
      },
      initial: H2.initial,
      animate: H2.animate,
      transition: Yj,
      "aria-hidden": !n2,
      children: r2
    }, "threed-drawer-viewport"), t2[76] = r2, t2[77] = m2, t2[78] = H2, t2[79] = S2, t2[80] = n2, t2[81] = P2, t2[82] = ae2) : ae2 = t2[82], t2[83] !== Q2 || t2[84] !== G2 || t2[85] !== ne2 || t2[86] !== ae2 ? (re2 = Gr.jsxs("div", {
      className: Q2,
      style: G2,
      children: [ne2, ae2]
    }), t2[83] = Q2, t2[84] = G2, t2[85] = ne2, t2[86] = ae2, t2[87] = re2) : re2 = t2[87], re2;
  }, function (e2, t2) {
    return e2.isOpen === t2.isOpen && (e2.isOpen || t2.isOpen ? e2.children === t2.children && e2.drawer === t2.drawer && e2.side === t2.side && e2.width === t2.width && e2.height === t2.height && e2.size === t2.size && e2.gap === t2.gap && e2.className === t2.className && e2.drawerClassName === t2.drawerClassName && e2.contentClassName === t2.contentClassName && e2.perspective === t2.perspective && e2.closeOnEscape === t2.closeOnEscape && e2.lazy === t2.lazy && e2.onClose === t2.onClose : e2.children === t2.children);
  }),
  tS = eS;
function nS() {
  document.documentElement.removeAttribute("data-drawer-active"), window.dispatchEvent(new CustomEvent("dotify:drawer-state", {
    detail: {
      active: false
    }
  }));
}
function aS() {
  return nS;
}
const $S = Zr((e2, t2) => ({
  isChecking: false,
  serviceStatuses: [],
  autocheck: null,
  runNetworkDiagnostics: async t3 => {
    e2({
      isChecking: true
    });
    try {
      const n2 = await Dr(t3, true);
      e2({
        serviceStatuses: n2.map(e3 => ({
          service: e3.service,
          working: e3.tracksWorking && e3.coversWorking,
          proxyEnabled: e3.proxyEnabled
        })),
        isChecking: false
      });
    } catch (n2) {
      a.error("[useProxyStore] Diagnostics failed:", n2), e2({
        isChecking: false
      });
    }
  },
  checkAndAutoEnableProxy: async () => {
    await t2().runNetworkDiagnostics();
  },
  loadProxySettings: async () => {
    try {
      const t3 = await zr();
      e2({
        autocheck: t3
      });
    } catch (t3) {
      a.error("[useProxyStore] Load settings failed:", t3);
    }
  },
  setAutocheck: async n2 => {
    try {
      await Rr(n2), e2({
        autocheck: n2
      }), n2 && (await t2().checkAndAutoEnableProxy());
    } catch (r2) {
      a.error("[useProxyStore] Save autocheck failed:", r2);
    }
  },
  toggleServiceProxy: async t3 => {
    try {
      await Mr(t3), e2(e3 => ({
        serviceStatuses: e3.serviceStatuses.map(e4 => e4.service === t3 ? {
          ...e4,
          proxyEnabled: !e4.proxyEnabled
        } : e4)
      })), a.info(`[useProxyStore] ${t3} proxy toggled`);
    } catch (n2) {
      a.error(`[useProxyStore] Toggle ${t3} proxy failed:`, n2);
    }
  },
  initProxyListeners: () => {
    Ir(e4 => {
      e4.length > 0 && ne.notify({
        type: "info",
        title: "integrations.proxy.autocheck_alert_title",
        message: "integrations.proxy.autocheck_alert_message"
      });
    });
    const e3 = () => {
      t2().checkAndAutoEnableProxy();
    };
    return window.addEventListener("proxy-autocheck", e3), t2().loadProxySettings(), () => {
      window.removeEventListener("proxy-autocheck", e3);
    };
  }
}));
const US = {
  scrobbling_enabled: false,
  now_playing_enabled: false
};
function qS() {
  const [e2, t2] = Qr.useState(false),
    [r2, s2] = Fr(),
    i2 = r2.lastfm || US,
    o2 = Qr.useCallback(async e3 => {
      try {
        const t3 = {
          ...i2,
          ...e3
        };
        await s2({
          lastfm: t3
        });
      } catch (t3) {
        a.error("[useLastFm] Failed to update config:", t3);
      }
    }, [i2, s2]),
    l2 = Qr.useCallback(async () => {
      try {
        t2(true);
        const e3 = await Or.getAuthUrl();
        if (!e3) return {
          success: false,
          message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043A\u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"
        };
        if (window.__TAURI__) {
          const {
            open: t3
          } = await n(async () => {
            const {
              open: e4
            } = await import("./globals-Bc3qFUyf.js").then(e5 => e5.gD);
            return {
              open: e4
            };
          }, __vite__mapDeps([1, 2, 3, 4, 5, 6]), import.meta.url);
          await t3(e3);
        } else window.open(e3, "_blank");
        return {
          success: true,
          message: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435"
        };
      } catch (e3) {
        return a.error("[useLastFm] Failed to get Last.fm auth URL:", e3), {
          success: false,
          message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043A\u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"
        };
      } finally {
        t2(false);
      }
    }, []),
    c2 = Qr.useCallback(async e3 => {
      try {
        t2(true);
        const n2 = await Or.getSession(e3);
        return n2 ? (await o2({
          session_key: n2.key,
          username: n2.name,
          avatar: n2.avatarUrl
        }), {
          success: true,
          message: "Last.fm \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D!",
          username: n2.name
        }) : {
          success: false,
          message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"
        };
      } catch (n2) {
        return a.error("[useLastFm] Failed to complete Last.fm auth:", n2), {
          success: false,
          message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"
        };
      } finally {
        t2(false);
      }
    }, [o2]);
  Qr.useEffect(() => {
    const e3 = async e4 => {
      var t3;
      const n2 = null == (t3 = e4.detail) ? void 0 : t3.url;
      if (n2) try {
        const e5 = new URL(n2);
        if (e5.pathname.includes("/lastfm")) {
          const t4 = e5.searchParams.get("token");
          t4 && (await c2(t4));
        }
      } catch (r3) {
        a.error("[useLastFm] Error parsing callback URL", r3);
      }
    };
    return window.addEventListener("oauth-callback", e3), () => window.removeEventListener("oauth-callback", e3);
  }, [c2]);
  const u2 = Qr.useCallback(async () => {
      await o2({
        session_key: null,
        username: null,
        avatar: null
      });
    }, [o2]),
    d2 = Qr.useCallback(async (e3, t3, n2, r3) => {
      if (i2.session_key && i2.scrobbling_enabled) try {
        await Or.scrobble(i2.session_key, e3, t3, n2, r3), a.info(`[useLastFm] Scrobbled: ${e3} - ${t3}`);
      } catch (s3) {
        a.error("[useLastFm] Failed to scrobble track:", s3);
      }
    }, [i2]),
    m2 = Qr.useCallback(async (e3, t3, n2, r3) => {
      if (i2.session_key && i2.now_playing_enabled) try {
        await Or.updateNowPlaying(i2.session_key, e3, t3, n2, r3), a.info(`[useLastFm] Now playing: ${e3} - ${t3}`);
      } catch (s3) {
        a.error("[useLastFm] Failed to update now playing:", s3);
      }
    }, [i2]),
    f2 = Qr.useCallback(async (e3 = 20) => {
      if (!i2.session_key) return [];
      try {
        return await Or.getRecommendations(i2.session_key, e3);
      } catch (t3) {
        return a.error("[useLastFm] Failed to get user recommendations:", t3), [];
      }
    }, [i2.session_key]);
  return {
    isConnecting: e2,
    isConnected: !!i2.session_key && !!i2.username,
    config: i2,
    connectAccount: l2,
    completeAuth: c2,
    disconnectAccount: u2,
    updateConfig: o2,
    scrobbleTrack: d2,
    updateNowPlaying: m2,
    getUserRecommendations: f2
  };
}
function HS() {
  var e2;
  const t2 = Kr.c(10),
    n2 = $S(es(VS));
  let a2;
  t2[0] === Symbol.for("react.memo_cache_sentinel") ? (a2 = [], t2[0] = a2) : a2 = t2[0], Qr.useEffect(WS, a2);
  const r2 = null != (e2 = n2.autocheck) && e2;
  let s2;
  return t2[1] !== n2.checkAndAutoEnableProxy || t2[2] !== n2.isChecking || t2[3] !== n2.loadProxySettings || t2[4] !== n2.runNetworkDiagnostics || t2[5] !== n2.serviceStatuses || t2[6] !== n2.setAutocheck || t2[7] !== n2.toggleServiceProxy || t2[8] !== r2 ? (s2 = {
    isChecking: n2.isChecking,
    serviceStatuses: n2.serviceStatuses,
    autocheck: r2,
    runNetworkDiagnostics: n2.runNetworkDiagnostics,
    checkAndAutoEnableProxy: n2.checkAndAutoEnableProxy,
    setAutocheck: n2.setAutocheck,
    toggleServiceProxy: n2.toggleServiceProxy,
    loadProxySettings: n2.loadProxySettings
  }, t2[1] = n2.checkAndAutoEnableProxy, t2[2] = n2.isChecking, t2[3] = n2.loadProxySettings, t2[4] = n2.runNetworkDiagnostics, t2[5] = n2.serviceStatuses, t2[6] = n2.setAutocheck, t2[7] = n2.toggleServiceProxy, t2[8] = r2, t2[9] = s2) : s2 = t2[9], s2;
}
function WS() {
  return $S.getState().initProxyListeners();
}
function VS(e2) {
  return {
    isChecking: e2.isChecking,
    serviceStatuses: e2.serviceStatuses,
    autocheck: e2.autocheck,
    runNetworkDiagnostics: e2.runNetworkDiagnostics,
    checkAndAutoEnableProxy: e2.checkAndAutoEnableProxy,
    setAutocheck: e2.setAutocheck,
    toggleServiceProxy: e2.toggleServiceProxy,
    loadProxySettings: e2.loadProxySettings
  };
}
export { Wf as OriginalShell, qk as OriginalMini, oy as LikeButton, Xj as OriginalNavigation, Ty as OriginalFullscreen, cu as OriginalSearchHeader, Vf as OriginalPanelFrame, ik as OriginalPlaybackPanel, ok as OriginalFullscreenPortal, ap as OriginalTabPage, Ei as OriginalThemeAutomation, Tm as OriginalBackground, af as OriginalWindowControls, hb as o, Eb as Z, Jo as A, _v as aB, Wp as W, Qp as R, Vp as Q, ub as X, lb as Y, Nb as aA, Vo as az, Qo as ay, ng as ak, tg as aj, eg as ai, Ko as ax, Jp as af, Xk as ae, Yp as ad, Ju as S, Qg as U, ug as s, Xp as a9, Kp as ag, Wo as ah, Jy as aw, Zi as a0, $d as E, Mo as aF, tS as J, Hd as H, qS as e, id as d, rd as I, HS as c, kb as u, sd as O, bd as m, Xv as a, Ud as b, xo as B, Up as bf, Hp as be, Um as bd, qp as bc, Ac as h, hh as bM, Ku as L, _b as a3, to as av, vo as a7, So as al, jo as aq, ko as ap, yo as ao, ib as an, sb as am, Op as au, Cv as at, Ev as as, Sv as T, qd as ar, Hf as aL, Pj as aK, Tb as a4, Ji as n, so as M, ob as bB, gb as _, Bd as bC, Qc as bE, au as bD, Po as bG, bo as bI, Hc as bL, co as bK, Ob as $, Wc as a1, iw as a5, Rg as V, vg as K, Bi as x, tl as a6, el as a2, op as b7, lp as b6, Hv as b9, $p as bb, Bp as ba, Ep as b4, up as aX, ux as b8, cp as aM, Fk as a$, iy as aQ, Jv as b1, pg as b0, qx as aW, Hx as aV, fv as aT, mv as aR, Ui as b2, uk as b3, oy as aU, ay as aS, dk as aP, cx as aO, ox as aN, mp as b5 };
