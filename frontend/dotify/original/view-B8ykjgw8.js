// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { browserOpenFiles as it, themeRepository as he, navigationStore as oe, Nothing as Ei, usePresets as an, browserSaveFile as Ye, Nothing as Ks, removeCustomFont as je, saveCustomFont as be, loadCustomFonts as we, getThemeGroup as pe, AccountPanel as Tr, useDimensions as ss, panelStore as se, useLocation as t, useSettingsRoute as Ts } from "../runtime.jsx";
import { useSpotifyAudioBundle as __fork_audio, audioQualityCards as __fork_audioCards } from "../runtime.jsx";
const __vite__mapDeps = (i2, m2 = __vite__mapDeps, d2 = m2.f || (m2.f = ["./globals-Bc3qFUyf.js", "./vendor-ui-BwX-1h7U.js", "./vendor-proto-Cqb7N4jm.js", "./vendor-icons-BAUiYk9X.js", "./vendor-hls-BfEgDoR5.js", "./globals-bA04W_Hq.css"])) => i2.map(i3 => d2[i3]);
import { c as e, r as a, u as s, j as n, a2 as i, R as l, A as r, m as o } from "./vendor-ui-BwX-1h7U.js";
import { S as h, I as v, a as x, b as y, E as b, B as j, u as w, c as k, d as N, e as S, L as _, h as C, m as F, O as ae, H as ne, J as ie } from "./main-DVjTVWDM.js";
import { z as le, a as ue, Q as me, e7 as fe, cQ as ge, u as ve, l as xe, ea as ye, k as ke, I as Ne, B as Se, L as _e, b as Ce, ee as Pe, ef as ze, eg as Ae, eh as Me, c as Ie, dN as Ee, dI as Le, bS as Te, ei as De, ej as Fe, ek as Oe, el as $e, em as Be, en as Ue, eo as Re, ep as qe, eq as Ve, N as Ke, _ as Ge, e4 as Ze, bv as He, et as Qe, eu as Je, ev as Xe, ew as et, c9 as tt, c6 as at, ex as st, F as nt, ez as lt, dL as rt, b7 as ot, w as ct, W as dt, aE as ut, aR as mt, av as pt, eA as ft, eB as gt, am as ht, bd as vt, eC as xt, eD as yt, cX as bt, bY as jt, al as wt, dY as kt, eE as Nt, eF as St, A as _t, eG as Ct, au as Pt, eH as zt, eI as At, eJ as Mt, v as It, aB as Et, eK as Lt, M as Tt, eL as Dt, a2 as Ft, eM as Ot, aA as $t, eN as Bt, eO as Ut, eP as Rt, dh as qt, eQ as Vt, eR as Wt, df as Kt, eU as Yt, cZ as Qt, bq as Jt, eV as Xt, eW as ea, eX as ta, eY as aa, eZ as sa, bM as na, bO as ia, bL as la, e_ as ra, bp as oa, bN as ua, f0 as ma, f1 as pa, f2 as fa, f3 as ga, f4 as ha, K as va, f5 as xa, f6 as ya, f7 as ba, f8 as ja, f9 as wa, fa as ka, fo as ts, ag as as } from "./globals-Bc3qFUyf.js";
import { S as ns, a as is, b as ls, M as rs, c as os, d as cs, e as ds, f as us, g as ms } from "./storage-CTKTSESD.js";
import { P as hs, a as vs, b as xs } from "./popover-_PbJvV10.js";
import { S as ys } from "./friends-D1sx-wsm.js";
import { C as js } from "./reveal-w9O7xfRv.js";
import { C as ws } from "./chips-vEIc28iB.js";
import { u as ks } from "./store-Dk25DwWn.js";
import { T as Ns } from "./progress-B9dXWW2R.js";
import { T as Ss } from "./textarea-FtyWk6W3.js";
import { u as _s, c as Cs } from "./use-premium-Dm1tM_kA.js";
import { a as Ms } from "./operations-gCk3_j9p.js";
const $s = [{
  id: "system",
  name: "System"
}, {
  id: "modern",
  name: "Modern"
}, {
  id: "serif",
  name: "Serif"
}, {
  id: "monospace",
  name: "Mono"
}];
function Bs() {
  var e3, t2, n2, i2, l2, r2, o2, c2, d2, u2, m2, p2, f2, g2, h2, v2, x2, y2, b2, j2, w2, k2, N2;
  const {
      t: S2
    } = le(),
    {
      settings: _2,
      updateSettings: C2
    } = ue(),
    {
      settings: P2,
      updateSettings: z2
    } = me(s(e4 => ({
      settings: e4.settings,
      updateSettings: e4.updateSettings
    }))),
    A2 = null == _2 ? void 0 : _2.uiSettings,
    [M2, I2] = a.useState(false),
    [E2, L2] = a.useState([]),
    [T2, D2] = a.useState(""),
    [F2, O2] = a.useState({}),
    $2 = (null == (e3 = null == _2 ? void 0 : _2.themeSettings) ? void 0 : e3.theme) || "dark",
    [B2, U2] = a.useState((null == (t2 = null == _2 ? void 0 : _2.themeSettings) ? void 0 : t2.mode) || "dark"),
    R2 = a.useMemo(() => {
      const e4 = pe($2);
      if (e4) return e4;
      return E2.find(e5 => e5.id === $2) ? "custom" : fe[0].id;
    }, [$2, E2]);
  a.useEffect(() => {
    (async () => {
      const e4 = await he.getCustomThemes();
      L2(e4);
    })();
  }, []);
  const q2 = a.useMemo(() => {
    if (R2 && "custom" !== R2) {
      const e4 = fe.find(e5 => e5.id === R2);
      if (e4) {
        const t3 = "light" === B2 ? e4.lightThemeId : e4.darkThemeId;
        return ge.find(e5 => e5.id === t3) || null;
      }
    }
    return ge.find(e4 => e4.id === $2) || null;
  }, [R2, $2, B2]);
  a.useEffect(() => {
    (null == q2 ? void 0 : q2.colors) && O2(q2.colors);
  }, [q2]);
  const V2 = a.useCallback(e4 => {
      B2 !== e4 && (U2(e4), C2({
        themeSettings: {
          mode: e4
        }
      }));
    }, [B2, C2]),
    W2 = a.useCallback(e4 => {
      const t3 = fe.find(t4 => t4.id === e4),
        a2 = t3 ? "light" === B2 ? t3.lightThemeId : t3.darkThemeId : e4;
      C2({
        themeSettings: {
          theme: a2,
          mode: B2
        },
        playerSettings: {
          cover: {
            adaptcover: false
          }
        }
      });
    }, [B2, C2]),
    K2 = a.useCallback(() => {
      const e4 = Math.floor(360 * Math.random());
      O2({
        "--background": `${e4} 15% 6%`,
        "--foreground": `${e4} 5% 95%`,
        "--card": `${e4} 15% 9%`,
        "--primary": `${e4} 90% 65%`,
        "--accent": `${e4} 50% 25%`,
        "--muted": `${e4} 15% 15%`,
        "--border": `${e4} 15% 12%`,
        "--ring": `${e4} 90% 65%`
      });
    }, []),
    G2 = a.useCallback(async e4 => {
      try {
        const t3 = E2.filter(t4 => t4.id !== e4);
        await he.saveCustomThemes(t3), L2(t3), await ve.getState().loadCustomThemes(), $2 === e4 && W2(fe[0].id), xe.info("settings", "Custom theme deleted", {
          themeId: e4
        });
      } catch (t3) {
        xe.error("settings", "Failed to delete custom theme", t3);
      }
    }, [E2, $2, W2]),
    Z2 = a.useCallback(async () => {
      if (!T2.trim()) return;
      const e4 = ye(T2, "dark", {
        ...F2
      });
      try {
        const t3 = [...(await he.getCustomThemes()), e4];
        await he.saveCustomThemes(t3), L2(t3), await ve.getState().loadCustomThemes(), W2(e4.id), I2(false), D2(""), O2({}), xe.info("settings", "Custom theme created", {
          name: e4.name
        });
      } catch (t3) {
        xe.error("settings", "Failed to create custom theme", t3);
      }
    }, [T2, F2, W2]),
    H2 = a.useCallback(e4 => {
      var t3;
      C2({
        playerSettings: {
          ...(null == _2 ? void 0 : _2.playerSettings),
          cover: {
            ...(null == (t3 = null == _2 ? void 0 : _2.playerSettings) ? void 0 : t3.cover),
            adaptcover: e4
          }
        }
      });
    }, [null == _2 ? void 0 : _2.playerSettings, C2]),
    [Y2, Q2] = a.useState("system"),
    [J2, X2] = a.useState([]),
    [ee2, te2] = a.useState(false),
    [ae2, se2] = a.useState(null != (i2 = null == (n2 = null == A2 ? void 0 : A2.font) ? void 0 : n2.size) ? i2 : 16),
    ne2 = a.useRef(null);
  a.useEffect(() => {
    var e4, t3;
    se2(null != (t3 = null == (e4 = null == A2 ? void 0 : A2.font) ? void 0 : e4.size) ? t3 : 16);
  }, [null == (l2 = null == A2 ? void 0 : A2.font) ? void 0 : l2.size]), a.useEffect(() => {
    (async () => {
      try {
        const t3 = await we(),
          a2 = [];
        for (const s2 of t3) try {
          if (s2.data && s2.data.startsWith("data:")) {
            const e4 = s2.data.split(",")[1],
              t4 = atob(e4),
              n3 = new Uint8Array(t4.length);
            for (let a3 = 0; a3 < t4.length; a3++) n3[a3] = t4.charCodeAt(a3);
            const i3 = n3.buffer,
              l3 = new FontFace(s2.name, i3);
            await l3.load(), document.fonts.add(l3), a2.push({
              name: s2.name,
              family: s2.name
            });
          }
        } catch (e4) {
          xe.error("settings", "Failed to load saved font", {
            font: s2.name,
            error: e4
          });
        }
        X2(a2);
      } catch (t3) {
        xe.error("settings", "Failed to load custom fonts", t3);
      }
    })();
  }, []);
  const ie2 = a.useCallback(e4 => {
      const t3 = [{
          value: "default",
          label: "Default",
          family: '"Inter Variable", Inter, sans-serif',
          category: "system"
        }, {
          value: "Inter",
          label: "Inter",
          family: '"Inter Variable", Inter, sans-serif',
          category: "system"
        }, {
          value: "Arial",
          label: "Arial",
          family: "Arial, sans-serif",
          category: "system"
        }, {
          value: "Segoe UI",
          label: "Segoe UI",
          family: "Segoe UI, Arial, sans-serif",
          category: "system"
        }, {
          value: "Roboto",
          label: "Roboto",
          family: "Roboto, Arial, sans-serif",
          category: "system"
        }, {
          value: "Helvetica Neue",
          label: "Helvetica Neue",
          family: "Helvetica Neue, Arial, sans-serif",
          category: "system"
        }, {
          value: "Tahoma",
          label: "Tahoma",
          family: "Tahoma, Arial, sans-serif",
          category: "system"
        }, {
          value: "Verdana",
          label: "Verdana",
          family: "Verdana, Arial, sans-serif",
          category: "system"
        }, {
          value: "San Francisco",
          label: "San Francisco",
          family: "-apple-system, BlinkMacSystemFont, sans-serif",
          category: "system"
        }, {
          value: "Calibri",
          label: "Calibri",
          family: "Calibri, sans-serif",
          category: "system"
        }, {
          value: "Lucida Sans",
          label: "Lucida Sans",
          family: "Lucida Sans, Lucida Sans Unicode, sans-serif",
          category: "system"
        }, {
          value: "Arial Black",
          label: "Arial Black",
          family: "Arial Black, Arial Bold, sans-serif",
          category: "system"
        }, {
          value: "Arial Narrow",
          label: "Arial Narrow",
          family: "Arial Narrow, sans-serif",
          category: "system"
        }, {
          value: "Segoe UI Light",
          label: "Segoe UI Light",
          family: "Segoe UI Light, Segoe UI, sans-serif",
          category: "system"
        }, {
          value: "Segoe UI Semibold",
          label: "Segoe UI Semibold",
          family: "Segoe UI Semibold, Segoe UI, sans-serif",
          category: "system"
        }, {
          value: "Georgia",
          label: "Georgia",
          family: "Georgia, serif",
          category: "serif"
        }, {
          value: "Times New Roman",
          label: "Times New Roman",
          family: "Times New Roman, Times, serif",
          category: "serif"
        }, {
          value: "Palatino",
          label: "Palatino",
          family: "Palatino Linotype, Book Antiqua, Palatino, serif",
          category: "serif"
        }, {
          value: "Garamond",
          label: "Garamond",
          family: "Garamond, serif",
          category: "serif"
        }, {
          value: "PT Serif",
          label: "PT Serif",
          family: "PT Serif, serif",
          category: "serif"
        }, {
          value: "Merriweather",
          label: "Merriweather",
          family: "Merriweather, serif",
          category: "serif"
        }, {
          value: "Playfair Display",
          label: "Playfair Display",
          family: "Playfair Display, serif",
          category: "serif"
        }, {
          value: "Baskerville",
          label: "Baskerville",
          family: "Baskerville, Baskerville Old Face, serif",
          category: "serif"
        }, {
          value: "Didot",
          label: "Didot",
          family: "Didot, serif",
          category: "serif"
        }, {
          value: "Cambria",
          label: "Cambria",
          family: "Cambria, serif",
          category: "serif"
        }, {
          value: "Bodoni",
          label: "Bodoni",
          family: "Bodoni MT, Bodoni, serif",
          category: "serif"
        }, {
          value: "Bookman",
          label: "Bookman",
          family: "Bookman Old Style, Book Antiqua, Palatino, serif",
          category: "serif"
        }, {
          value: "Libre Baskerville",
          label: "Libre Baskerville",
          family: "Libre Baskerville, serif",
          category: "serif"
        }, {
          value: "Noto Serif",
          label: "Noto Serif",
          family: "Noto Serif, serif",
          category: "serif"
        }, {
          value: "Minecraft",
          label: "Minecraft",
          family: '"Minecraft", "Courier New", monospace',
          category: "monospace"
        }, {
          value: "Courier New",
          label: "Courier New",
          family: "Courier New, Courier, monospace",
          category: "monospace"
        }, {
          value: "Monospace",
          label: "Monospace",
          family: "monospace",
          category: "monospace"
        }, {
          value: "Lucida Console",
          label: "Lucida Console",
          family: "Lucida Console, Monaco, monospace",
          category: "monospace"
        }, {
          value: "Fira Code",
          label: "Fira Code",
          family: "Fira Code, monospace",
          category: "monospace"
        }, {
          value: "JetBrains Mono",
          label: "JetBrains Mono",
          family: "JetBrains Mono, monospace",
          category: "monospace"
        }, {
          value: "Consolas",
          label: "Consolas",
          family: "Consolas, monospace",
          category: "monospace"
        }, {
          value: "Menlo",
          label: "Menlo",
          family: "Menlo, monospace",
          category: "monospace"
        }, {
          value: "Source Code Pro",
          label: "Source Code Pro",
          family: "Source Code Pro, monospace",
          category: "monospace"
        }, {
          value: "Courier Prime",
          label: "Courier Prime",
          family: "Courier Prime, monospace",
          category: "monospace"
        }, {
          value: "Inconsolata",
          label: "Inconsolata",
          family: "Inconsolata, monospace",
          category: "monospace"
        }, {
          value: "Ubuntu Mono",
          label: "Ubuntu Mono",
          family: "Ubuntu Mono, monospace",
          category: "monospace"
        }, {
          value: "Anonymous Pro",
          label: "Anonymous Pro",
          family: "Anonymous Pro, monospace",
          category: "monospace"
        }, {
          value: "IBM Plex Mono",
          label: "IBM Plex Mono",
          family: "IBM Plex Mono, monospace",
          category: "monospace"
        }, {
          value: "Ubuntu",
          label: "Ubuntu",
          family: "Ubuntu, Arial, sans-serif",
          category: "modern"
        }, {
          value: "PT Sans",
          label: "PT Sans",
          family: "PT Sans, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Open Sans",
          label: "Open Sans",
          family: "Open Sans, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Lato",
          label: "Lato",
          family: "Lato, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Montserrat",
          label: "Montserrat",
          family: "Montserrat, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Oswald",
          label: "Oswald",
          family: "Oswald, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Raleway",
          label: "Raleway",
          family: "Raleway, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Rubik",
          label: "Rubik",
          family: "Rubik, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Nunito",
          label: "Nunito",
          family: "Nunito, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Quicksand",
          label: "Quicksand",
          family: "Quicksand, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Source Sans Pro",
          label: "Source Sans Pro",
          family: "Source Sans Pro, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Muli",
          label: "Muli",
          family: "Muli, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Exo 2",
          label: "Exo 2",
          family: "Exo 2, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Manrope",
          label: "Manrope",
          family: "Manrope, Arial, sans-serif",
          category: "modern"
        }, {
          value: "Poppins",
          label: "Poppins",
          family: "Poppins, sans-serif",
          category: "modern"
        }, {
          value: "Work Sans",
          label: "Work Sans",
          family: "Work Sans, sans-serif",
          category: "modern"
        }, {
          value: "Comfortaa",
          label: "Comfortaa",
          family: "Comfortaa, sans-serif",
          category: "modern"
        }, {
          value: "Oxygen",
          label: "Oxygen",
          family: "Oxygen, sans-serif",
          category: "modern"
        }, {
          value: "Cairo",
          label: "Cairo",
          family: "Cairo, sans-serif",
          category: "modern"
        }, {
          value: "Barlow",
          label: "Barlow",
          family: "Barlow, sans-serif",
          category: "modern"
        }, {
          value: "Fira Sans",
          label: "Fira Sans",
          family: "Fira Sans, sans-serif",
          category: "modern"
        }, {
          value: "Mulish",
          label: "Mulish",
          family: "Mulish, sans-serif",
          category: "modern"
        }, {
          value: "IBM Plex Sans",
          label: "IBM Plex Sans",
          family: "IBM Plex Sans, sans-serif",
          category: "modern"
        }].find(t4 => t4.value === e4),
        a2 = J2.some(t4 => t4.name === e4) ? `"${e4}", sans-serif` : (null == t3 ? void 0 : t3.family) || (e4.includes(" ") ? `"${e4}", sans-serif` : e4);
      "default" !== e4 ? (document.documentElement.style.setProperty("--font-family", a2), xe.info("settings", "Custom font applied", {
        fontFamily: a2
      })) : (document.documentElement.style.removeProperty("--font-family"), xe.info("settings", "Font reset to system default"));
    }, [J2]),
    re2 = a.useCallback(async e4 => {
      var t3, a2, s2;
      const n3 = null == (t3 = e4.target.files) ? void 0 : t3[0];
      if (!n3) return;
      if ([".ttf", ".otf", ".woff", ".woff2"].some(e5 => n3.name.toLowerCase().endsWith(e5))) {
        te2(true);
        try {
          const e5 = await n3.arrayBuffer(),
            t4 = n3.name.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9\s-]/g, ""),
            i3 = new FontFace(t4, e5);
          await i3.load(), document.fonts.add(i3);
          const l3 = new Uint8Array(e5);
          let r3 = "";
          const o3 = 8192;
          for (let a3 = 0; a3 < l3.length; a3 += o3) {
            const e6 = l3.subarray(a3, a3 + o3);
            r3 += String.fromCharCode.apply(null, Array.from(e6));
          }
          const c3 = btoa(r3),
            d3 = `data:font/${(null == (a2 = n3.name.split(".").pop()) ? void 0 : a2.toLowerCase()) || "ttf"};base64,${c3}`;
          await be(t4, d3), X2(e6 => [...e6.filter(e7 => e7.name !== t4), {
            name: t4,
            family: t4
          }]), C2({
            uiSettings: {
              ...(null == _2 ? void 0 : _2.uiSettings),
              font: {
                ...(null == (s2 = null == _2 ? void 0 : _2.uiSettings) ? void 0 : s2.font),
                family: t4,
                custom: t4
              }
            }
          }), ie2(t4), xe.info("settings", "Custom font loaded and applied", {
            fontName: t4
          });
        } catch (i3) {
          xe.error("settings", "Failed to load font", i3);
        } finally {
          te2(false), e4.target.value = "";
        }
      } else xe.warn("settings", "Unsupported font format, skipping");
    }, [ie2, null == _2 ? void 0 : _2.uiSettings, C2]),
    oe2 = a.useCallback(async e4 => {
      var t3, a2, s2;
      try {
        await je(e4), X2(t4 => t4.filter(t5 => t5.name !== e4));
        (null == (a2 = null == (t3 = null == _2 ? void 0 : _2.uiSettings) ? void 0 : t3.font) ? void 0 : a2.family) === e4 && (C2({
          uiSettings: {
            ...(null == _2 ? void 0 : _2.uiSettings),
            font: {
              ...(null == (s2 = null == _2 ? void 0 : _2.uiSettings) ? void 0 : s2.font),
              family: "default",
              custom: void 0
            }
          }
        }), ie2("default")), xe.info("settings", "Custom font removed", {
          fontName: e4
        });
      } catch (n3) {
        xe.error("settings", "Failed to remove font", n3);
      }
    }, [ie2, null == _2 ? void 0 : _2.uiSettings, C2]),
    ce2 = a.useMemo(() => {
      const e4 = [{
        value: "default",
        label: "Default",
        family: '"Inter Variable", Inter, sans-serif',
        category: "system"
      }, {
        value: "Inter",
        label: "Inter",
        family: '"Inter Variable", Inter, sans-serif',
        category: "system"
      }, {
        value: "Arial",
        label: "Arial",
        family: "Arial, sans-serif",
        category: "system"
      }, {
        value: "Segoe UI",
        label: "Segoe UI",
        family: "Segoe UI, Arial, sans-serif",
        category: "system"
      }, {
        value: "Roboto",
        label: "Roboto",
        family: "Roboto, Arial, sans-serif",
        category: "system"
      }, {
        value: "Helvetica Neue",
        label: "Helvetica Neue",
        family: "Helvetica Neue, Arial, sans-serif",
        category: "system"
      }, {
        value: "Tahoma",
        label: "Tahoma",
        family: "Tahoma, Arial, sans-serif",
        category: "system"
      }, {
        value: "Verdana",
        label: "Verdana",
        family: "Verdana, Arial, sans-serif",
        category: "system"
      }, {
        value: "San Francisco",
        label: "San Francisco",
        family: "-apple-system, BlinkMacSystemFont, sans-serif",
        category: "system"
      }, {
        value: "Calibri",
        label: "Calibri",
        family: "Calibri, sans-serif",
        category: "system"
      }, {
        value: "Lucida Sans",
        label: "Lucida Sans",
        family: "Lucida Sans, Lucida Sans Unicode, sans-serif",
        category: "system"
      }, {
        value: "Arial Black",
        label: "Arial Black",
        family: "Arial Black, Arial Bold, sans-serif",
        category: "system"
      }, {
        value: "Arial Narrow",
        label: "Arial Narrow",
        family: "Arial Narrow, sans-serif",
        category: "system"
      }, {
        value: "Segoe UI Light",
        label: "Segoe UI Light",
        family: "Segoe UI Light, Segoe UI, sans-serif",
        category: "system"
      }, {
        value: "Segoe UI Semibold",
        label: "Segoe UI Semibold",
        family: "Segoe UI Semibold, Segoe UI, sans-serif",
        category: "system"
      }, {
        value: "Georgia",
        label: "Georgia",
        family: "Georgia, serif",
        category: "serif"
      }, {
        value: "Times New Roman",
        label: "Times New Roman",
        family: "Times New Roman, Times, serif",
        category: "serif"
      }, {
        value: "Palatino",
        label: "Palatino",
        family: "Palatino Linotype, Book Antiqua, Palatino, serif",
        category: "serif"
      }, {
        value: "Garamond",
        label: "Garamond",
        family: "Garamond, serif",
        category: "serif"
      }, {
        value: "PT Serif",
        label: "PT Serif",
        family: "PT Serif, serif",
        category: "serif"
      }, {
        value: "Merriweather",
        label: "Merriweather",
        family: "Merriweather, serif",
        category: "serif"
      }, {
        value: "Playfair Display",
        label: "Playfair Display",
        family: "Playfair Display, serif",
        category: "serif"
      }, {
        value: "Baskerville",
        label: "Baskerville",
        family: "Baskerville, Baskerville Old Face, serif",
        category: "serif"
      }, {
        value: "Didot",
        label: "Didot",
        family: "Didot, serif",
        category: "serif"
      }, {
        value: "Cambria",
        label: "Cambria",
        family: "Cambria, serif",
        category: "serif"
      }, {
        value: "Bodoni",
        label: "Bodoni",
        family: "Bodoni MT, Bodoni, serif",
        category: "serif"
      }, {
        value: "Bookman",
        label: "Bookman",
        family: "Bookman Old Style, Book Antiqua, Palatino, serif",
        category: "serif"
      }, {
        value: "Libre Baskerville",
        label: "Libre Baskerville",
        family: "Libre Baskerville, serif",
        category: "serif"
      }, {
        value: "Noto Serif",
        label: "Noto Serif",
        family: "Noto Serif, serif",
        category: "serif"
      }, {
        value: "Minecraft",
        label: "Minecraft",
        family: '"Minecraft", "Courier New", monospace',
        category: "monospace"
      }, {
        value: "Courier New",
        label: "Courier New",
        family: "Courier New, Courier, monospace",
        category: "monospace"
      }, {
        value: "Monospace",
        label: "Monospace",
        family: "monospace",
        category: "monospace"
      }, {
        value: "Lucida Console",
        label: "Lucida Console",
        family: "Lucida Console, Monaco, monospace",
        category: "monospace"
      }, {
        value: "Fira Code",
        label: "Fira Code",
        family: "Fira Code, monospace",
        category: "monospace"
      }, {
        value: "JetBrains Mono",
        label: "JetBrains Mono",
        family: "JetBrains Mono, monospace",
        category: "monospace"
      }, {
        value: "Consolas",
        label: "Consolas",
        family: "Consolas, monospace",
        category: "monospace"
      }, {
        value: "Menlo",
        label: "Menlo",
        family: "Menlo, monospace",
        category: "monospace"
      }, {
        value: "Source Code Pro",
        label: "Source Code Pro",
        family: "Source Code Pro, monospace",
        category: "monospace"
      }, {
        value: "Courier Prime",
        label: "Courier Prime",
        family: "Courier Prime, monospace",
        category: "monospace"
      }, {
        value: "Inconsolata",
        label: "Inconsolata",
        family: "Inconsolata, monospace",
        category: "monospace"
      }, {
        value: "Ubuntu Mono",
        label: "Ubuntu Mono",
        family: "Ubuntu Mono, monospace",
        category: "monospace"
      }, {
        value: "Anonymous Pro",
        label: "Anonymous Pro",
        family: "Anonymous Pro, monospace",
        category: "monospace"
      }, {
        value: "IBM Plex Mono",
        label: "IBM Plex Mono",
        family: "IBM Plex Mono, monospace",
        category: "monospace"
      }, {
        value: "Ubuntu",
        label: "Ubuntu",
        family: "Ubuntu, Arial, sans-serif",
        category: "modern"
      }, {
        value: "PT Sans",
        label: "PT Sans",
        family: "PT Sans, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Open Sans",
        label: "Open Sans",
        family: "Open Sans, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Lato",
        label: "Lato",
        family: "Lato, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Montserrat",
        label: "Montserrat",
        family: "Montserrat, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Oswald",
        label: "Oswald",
        family: "Oswald, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Raleway",
        label: "Raleway",
        family: "Raleway, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Rubik",
        label: "Rubik",
        family: "Rubik, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Nunito",
        label: "Nunito",
        family: "Nunito, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Quicksand",
        label: "Quicksand",
        family: "Quicksand, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Source Sans Pro",
        label: "Source Sans Pro",
        family: "Source Sans Pro, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Muli",
        label: "Muli",
        family: "Muli, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Exo 2",
        label: "Exo 2",
        family: "Exo 2, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Manrope",
        label: "Manrope",
        family: "Manrope, Arial, sans-serif",
        category: "modern"
      }, {
        value: "Poppins",
        label: "Poppins",
        family: "Poppins, sans-serif",
        category: "modern"
      }, {
        value: "Work Sans",
        label: "Work Sans",
        family: "Work Sans, sans-serif",
        category: "modern"
      }, {
        value: "Comfortaa",
        label: "Comfortaa",
        family: "Comfortaa, sans-serif",
        category: "modern"
      }, {
        value: "Oxygen",
        label: "Oxygen",
        family: "Oxygen, sans-serif",
        category: "modern"
      }, {
        value: "Cairo",
        label: "Cairo",
        family: "Cairo, sans-serif",
        category: "modern"
      }, {
        value: "Barlow",
        label: "Barlow",
        family: "Barlow, sans-serif",
        category: "modern"
      }, {
        value: "Fira Sans",
        label: "Fira Sans",
        family: "Fira Sans, sans-serif",
        category: "modern"
      }, {
        value: "Mulish",
        label: "Mulish",
        family: "Mulish, sans-serif",
        category: "modern"
      }, {
        value: "IBM Plex Sans",
        label: "IBM Plex Sans",
        family: "IBM Plex Sans, sans-serif",
        category: "modern"
      }].filter(e5 => e5.category === Y2);
      if ("system" === Y2 && J2.length > 0) {
        return [...J2.map(e5 => ({
          value: e5.name,
          label: e5.name,
          family: e5.name,
          category: "custom",
          isCustom: true
        })), ...e4];
      }
      return e4;
    }, [Y2, J2]),
    [de2, ke2] = a.useState(Math.min(100, Math.max(30, null != (o2 = null == (r2 = null == A2 ? void 0 : A2.transparency) ? void 0 : r2.opacity) ? o2 : 80))),
    [Ne2, Se2] = a.useState(null != (u2 = null == (d2 = null == (c2 = null == A2 ? void 0 : A2.transparency) ? void 0 : c2.glass) ? void 0 : d2.blur) ? u2 : 16);
  a.useEffect(() => {
    var e4, t3, a2, s2, n3;
    ke2(Math.min(100, Math.max(30, null != (t3 = null == (e4 = null == A2 ? void 0 : A2.transparency) ? void 0 : e4.opacity) ? t3 : 80))), Se2(null != (n3 = null == (s2 = null == (a2 = null == A2 ? void 0 : A2.transparency) ? void 0 : a2.glass) ? void 0 : s2.blur) ? n3 : 16);
  }, [null == (m2 = null == A2 ? void 0 : A2.transparency) ? void 0 : m2.opacity, null == (f2 = null == (p2 = null == A2 ? void 0 : A2.transparency) ? void 0 : p2.glass) ? void 0 : f2.blur]);
  const _e2 = a.useCallback(e4 => {
      var t3;
      C2({
        uiSettings: {
          ...(null == _2 ? void 0 : _2.uiSettings),
          transparency: {
            ...(null == (t3 = null == _2 ? void 0 : _2.uiSettings) ? void 0 : t3.transparency),
            ...e4
          }
        }
      });
    }, [null == _2 ? void 0 : _2.uiSettings, C2]),
    [Ce2, Pe2] = a.useState(null != (v2 = null == (h2 = null == (g2 = null == A2 ? void 0 : A2.scale) ? void 0 : g2.maximized) ? void 0 : h2[0]) ? v2 : 100),
    [ze2, Ae2] = a.useState(null != (b2 = null == (y2 = null == (x2 = null == A2 ? void 0 : A2.scale) ? void 0 : x2.default) ? void 0 : y2[0]) ? b2 : 100);
  a.useEffect(() => {
    var e4, t3, a2, s2, n3, i3;
    Pe2(null != (a2 = null == (t3 = null == (e4 = null == A2 ? void 0 : A2.scale) ? void 0 : e4.maximized) ? void 0 : t3[0]) ? a2 : 100), Ae2(null != (i3 = null == (n3 = null == (s2 = null == A2 ? void 0 : A2.scale) ? void 0 : s2.default) ? void 0 : n3[0]) ? i3 : 100);
  }, [null == (w2 = null == (j2 = null == A2 ? void 0 : A2.scale) ? void 0 : j2.maximized) ? void 0 : w2[0], null == (N2 = null == (k2 = null == A2 ? void 0 : A2.scale) ? void 0 : k2.default) ? void 0 : N2[0]]);
  const Me2 = a.useCallback(e4 => {
    C2({
      uiSettings: {
        ...(null == _2 ? void 0 : _2.uiSettings),
        ...e4
      }
    });
  }, [null == _2 ? void 0 : _2.uiSettings, C2]);
  return {
    t: S2,
    settings: _2,
    uiSettings: A2,
    updateUiSettings: Me2,
    currentTheme: $2,
    themeMode: B2,
    currentGroup: R2,
    customThemes: E2,
    newThemeName: T2,
    setNewThemeName: D2,
    customColors: F2,
    setCustomColors: O2,
    createThemePopoverOpen: M2,
    setCreateThemePopoverOpen: I2,
    handleThemeModeToggle: V2,
    handleThemeChange: W2,
    generateRandomTheme: K2,
    handleDeleteTheme: G2,
    handleSaveCustomTheme: Z2,
    toggleAdaptCover: H2,
    fontCategories: $s,
    selectedFontCategory: Y2,
    setSelectedFontCategory: Q2,
    customFonts: J2,
    isLoadingFont: ee2,
    localFontSize: ae2,
    setLocalFontSize: se2,
    fontFileInputRef: ne2,
    filteredFonts: ce2,
    applyFontToApp: ie2,
    handleCustomFontUpload: re2,
    removeCustomFont: oe2,
    localOpacity: de2,
    setLocalOpacity: ke2,
    localGlassBlur: Ne2,
    setLocalGlassBlur: Se2,
    updateTransparency: _e2,
    localMaximizedScale: Ce2,
    setLocalMaximizedScale: Pe2,
    localDefaultScale: ze2,
    setLocalDefaultScale: Ae2,
    efficiencySettings: P2,
    updateEfficiencySettings: z2
  };
}
function Us(t2) {
  const a2 = e.c(13),
    {
      onClick: s2,
      label: i2,
      className: l2,
      iconClassName: r2
    } = t2;
  let o2, c2, d2, u2, m2;
  return a2[0] !== s2 ? (o2 = e3 => {
    e3.stopPropagation(), s2();
  }, a2[0] = s2, a2[1] = o2) : o2 = a2[1], a2[2] !== l2 ? (c2 = ke("absolute h-5 w-5 shadow-xs hover:scale-110 hover:bg-destructive", l2), a2[2] = l2, a2[3] = c2) : c2 = a2[3], a2[4] !== r2 ? (d2 = ke("h-3 w-3", r2), a2[4] = r2, a2[5] = d2) : d2 = a2[5], a2[6] !== d2 ? (u2 = n.jsx(Ne.close, {
    className: d2
  }), a2[6] = d2, a2[7] = u2) : u2 = a2[7], a2[8] !== i2 || a2[9] !== o2 || a2[10] !== c2 || a2[11] !== u2 ? (m2 = n.jsx(Se, {
    type: "button",
    variant: "destructive",
    size: "icon-2xs",
    shape: "circle",
    "aria-label": i2,
    onClick: o2,
    className: c2,
    children: u2
  }), a2[8] = i2, a2[9] = o2, a2[10] = c2, a2[11] = u2, a2[12] = m2) : m2 = a2[12], m2;
}
function Rs() {
  var t2, a2, s2, i2;
  const l2 = e.c(129),
    {
      t: r2,
      uiSettings: o2,
      updateUiSettings: c2,
      fontCategories: d2,
      selectedFontCategory: u2,
      setSelectedFontCategory: m2,
      isLoadingFont: p2,
      localFontSize: f2,
      setLocalFontSize: g2,
      fontFileInputRef: v2,
      filteredFonts: x2,
      applyFontToApp: y2,
      handleCustomFontUpload: b2,
      removeCustomFont: j2
    } = Bs(),
    w2 = (null == (t2 = null == o2 ? void 0 : o2.font) ? void 0 : t2.family) || "default",
    k2 = (null == (a2 = null == o2 ? void 0 : o2.font) ? void 0 : a2.weight) || "default";
  let N2;
  l2[0] !== w2 || l2[1] !== x2 ? (N2 = null == (s2 = x2.find(e3 => e3.value === w2)) ? void 0 : s2.family, l2[0] = w2, l2[1] = x2, l2[2] = N2) : N2 = l2[2];
  const S2 = N2;
  let _2;
  l2[3] !== k2 ? (_2 = null != (i2 = {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }[k2]) ? i2 : 400, l2[3] = k2, l2[4] = _2) : _2 = l2[4];
  const C2 = _2;
  let P2, z2, A2, M2, I2, E2, L2, T2, D2, F2, O2, $2;
  if (l2[5] !== r2 ? (P2 = r2("settings.appearance.interface.font.title"), l2[5] = r2, l2[6] = P2) : P2 = l2[6], l2[7] !== r2 ? (z2 = r2("settings.appearance.interface.font.family"), l2[7] = r2, l2[8] = z2) : z2 = l2[8], l2[9] !== d2 || l2[10] !== r2) {
    let e3;
    l2[12] !== r2 ? (e3 = e4 => ({
      value: e4.id,
      label: r2(`settings.appearance.interface.font.categories.${e4.id}`)
    }), l2[12] = r2, l2[13] = e3) : e3 = l2[13], A2 = d2.map(e3), l2[9] = d2, l2[10] = r2, l2[11] = A2;
  } else A2 = l2[11];
  if (l2[14] !== u2 || l2[15] !== m2 || l2[16] !== A2 ? (M2 = n.jsx(h, {
    fullWidth: true,
    options: A2,
    value: u2,
    onChange: m2,
    size: "sm",
    className: "w-full"
  }), l2[14] = u2, l2[15] = m2, l2[16] = A2, l2[17] = M2) : M2 = l2[17], l2[18] !== P2 || l2[19] !== z2 || l2[20] !== M2 ? (I2 = n.jsx(ns, {
    label: P2,
    description: z2,
    vertical: true,
    children: M2
  }), l2[18] = P2, l2[19] = z2, l2[20] = M2, l2[21] = I2) : I2 = l2[21], l2[22] !== y2 || l2[23] !== w2 || l2[24] !== k2 || l2[25] !== x2 || l2[26] !== f2 || l2[27] !== j2 || l2[28] !== r2 || l2[29] !== (null == o2 ? void 0 : o2.font) || l2[30] !== c2) {
    let e3;
    l2[32] !== y2 || l2[33] !== w2 || l2[34] !== k2 || l2[35] !== f2 || l2[36] !== j2 || l2[37] !== r2 || l2[38] !== (null == o2 ? void 0 : o2.font) || l2[39] !== c2 ? (e3 = e4 => {
      const t3 = w2 === e4.value,
        a3 = "custom" === e4.category;
      return n.jsxs("div", {
        className: "group/font relative",
        children: [n.jsx("button", {
          type: "button",
          "aria-pressed": t3,
          style: {
            fontFamily: e4.family
          },
          className: ke("h-9 rounded-full px-3.5 text-callout leading-none cursor-pointer", t3 ? "choice choice-on text-foreground" : "choice text-foreground/80 hover:text-foreground"),
          onClick: () => {
            c2({
              font: {
                ...(null == o2 ? void 0 : o2.font),
                family: e4.value,
                custom: a3 ? e4.value : void 0,
                size: f2,
                weight: k2
              }
            }), y2(e4.value);
          },
          children: "default" === e4.value ? r2("settings.appearance.interface.font.default_font") : e4.label
        }), a3 && n.jsx(Us, {
          className: "-top-1 -right-1 h-4 w-4 opacity-0 group-hover/font:opacity-100 z-20",
          iconClassName: "h-2.5 w-2.5",
          label: r2("settings.appearance.interface.font.remove"),
          onClick: () => j2(e4.value)
        })]
      }, e4.value);
    }, l2[32] = y2, l2[33] = w2, l2[34] = k2, l2[35] = f2, l2[36] = j2, l2[37] = r2, l2[38] = null == o2 ? void 0 : o2.font, l2[39] = c2, l2[40] = e3) : e3 = l2[40], E2 = x2.map(e3), l2[22] = y2, l2[23] = w2, l2[24] = k2, l2[25] = x2, l2[26] = f2, l2[27] = j2, l2[28] = r2, l2[29] = null == o2 ? void 0 : o2.font, l2[30] = c2, l2[31] = E2;
  } else E2 = l2[31];
  l2[41] !== v2 ? (L2 = () => {
    var e3;
    return null == (e3 = v2.current) ? void 0 : e3.click();
  }, l2[41] = v2, l2[42] = L2) : L2 = l2[42], l2[43] !== r2 ? (T2 = r2("settings.appearance.interface.font.upload_custom"), l2[43] = r2, l2[44] = T2) : T2 = l2[44], l2[45] !== p2 ? (D2 = p2 ? n.jsx(_e, {
    className: "h-4 w-4 animate-spin"
  }) : n.jsx(Ne.upload, {
    className: "h-4 w-4"
  }), l2[45] = p2, l2[46] = D2) : D2 = l2[46], l2[47] !== r2 ? (F2 = r2("settings.appearance.interface.font.custom_button"), l2[47] = r2, l2[48] = F2) : F2 = l2[48], l2[49] !== p2 || l2[50] !== D2 || l2[51] !== F2 || l2[52] !== L2 || l2[53] !== T2 ? (O2 = n.jsxs("button", {
    type: "button",
    onClick: L2,
    disabled: p2,
    "aria-label": T2,
    className: "choice flex h-9 items-center gap-1.5 rounded-full px-3.5 text-callout leading-none text-foreground/70 hover:text-foreground cursor-pointer disabled:opacity-50",
    children: [D2, F2]
  }), l2[49] = p2, l2[50] = D2, l2[51] = F2, l2[52] = L2, l2[53] = T2, l2[54] = O2) : O2 = l2[54], l2[55] !== O2 || l2[56] !== E2 ? ($2 = n.jsxs("div", {
    className: "flex flex-wrap gap-1.5 select-none",
    children: [E2, O2]
  }), l2[55] = O2, l2[56] = E2, l2[57] = $2) : $2 = l2[57];
  const B2 = null != S2 ? S2 : "inherit",
    U2 = `${f2}px`;
  let R2, q2, V2, W2, K2, G2, Z2, H2, Y2, Q2, J2, X2, ee2, te2, ae2, se2, ne2, ie2, le2, re2, oe2, ce2, de2, ue2, me2, pe2, fe2, ge2;
  return l2[58] !== C2 || l2[59] !== B2 || l2[60] !== U2 ? (R2 = n.jsx("p", {
    className: "m-0 truncate rounded-xl bg-plate px-4 py-3 text-foreground",
    style: {
      fontFamily: B2,
      fontWeight: C2,
      fontSize: U2
    },
    children: "Dotify \u2014 \u0421\u044A\u0435\u0448\u044C \u0435\u0449\u0451 \u044D\u0442\u0438\u0445 \u043C\u044F\u0433\u043A\u0438\u0445 \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0445 \u0431\u0443\u043B\u043E\u043A 0123456789"
  }), l2[58] = C2, l2[59] = B2, l2[60] = U2, l2[61] = R2) : R2 = l2[61], l2[62] !== r2 ? (q2 = r2("settings.appearance.interface.font.size"), l2[62] = r2, l2[63] = q2) : q2 = l2[63], l2[64] !== r2 ? (V2 = r2("settings.appearance.interface.font.size_description"), l2[64] = r2, l2[65] = V2) : V2 = l2[65], l2[66] === Symbol.for("react.memo_cache_sentinel") ? (W2 = {
    value: 12,
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: "12"
    })
  }, l2[66] = W2) : W2 = l2[66], l2[67] === Symbol.for("react.memo_cache_sentinel") ? (K2 = {
    value: 14,
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: "14"
    })
  }, l2[67] = K2) : K2 = l2[67], l2[68] !== r2 ? (G2 = r2("settings.main.general.platform.auto"), l2[68] = r2, l2[69] = G2) : G2 = l2[69], l2[70] !== G2 ? (Z2 = {
    value: 16,
    label: n.jsxs("span", {
      className: "text-xs font-medium px-1 text-foreground",
      children: ["16 ", n.jsx("span", {
        className: "text-micro opacity-60",
        children: G2
      })]
    })
  }, l2[70] = G2, l2[71] = Z2) : Z2 = l2[71], l2[72] === Symbol.for("react.memo_cache_sentinel") ? (H2 = {
    value: 18,
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: "18"
    })
  }, l2[72] = H2) : H2 = l2[72], l2[73] === Symbol.for("react.memo_cache_sentinel") ? (Y2 = {
    value: 20,
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: "20"
    })
  }, l2[73] = Y2) : Y2 = l2[73], l2[74] !== Z2 ? (Q2 = [W2, K2, Z2, H2, Y2], l2[74] = Z2, l2[75] = Q2) : Q2 = l2[75], l2[76] !== w2 || l2[77] !== k2 || l2[78] !== g2 || l2[79] !== (null == o2 ? void 0 : o2.font) || l2[80] !== c2 ? (J2 = e3 => {
    g2(e3), c2({
      font: {
        ...(null == o2 ? void 0 : o2.font),
        family: w2,
        size: e3,
        weight: k2
      }
    }), e3 && e3 > 0 && 16 !== e3 ? (document.documentElement.style.fontSize = `${e3}px`, document.documentElement.style.setProperty("--font-size-base", `${e3}px`)) : (document.documentElement.style.removeProperty("font-size"), document.documentElement.style.removeProperty("--font-size-base"));
  }, l2[76] = w2, l2[77] = k2, l2[78] = g2, l2[79] = null == o2 ? void 0 : o2.font, l2[80] = c2, l2[81] = J2) : J2 = l2[81], l2[82] !== f2 || l2[83] !== Q2 || l2[84] !== J2 ? (X2 = n.jsx(h, {
    fullWidth: true,
    className: "w-full",
    options: Q2,
    value: f2,
    onChange: J2,
    size: "sm"
  }), l2[82] = f2, l2[83] = Q2, l2[84] = J2, l2[85] = X2) : X2 = l2[85], l2[86] !== q2 || l2[87] !== V2 || l2[88] !== X2 ? (ee2 = n.jsx(ns, {
    label: q2,
    description: V2,
    vertical: true,
    children: X2
  }), l2[86] = q2, l2[87] = V2, l2[88] = X2, l2[89] = ee2) : ee2 = l2[89], l2[90] !== r2 ? (te2 = r2("settings.appearance.interface.font.weight"), l2[90] = r2, l2[91] = te2) : te2 = l2[91], l2[92] !== r2 ? (ae2 = r2("settings.appearance.interface.font.weight_description"), l2[92] = r2, l2[93] = ae2) : ae2 = l2[93], l2[94] !== r2 ? (se2 = r2("settings.main.general.platform.auto"), l2[94] = r2, l2[95] = se2) : se2 = l2[95], l2[96] !== se2 ? (ne2 = {
    value: "default",
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: se2
    })
  }, l2[96] = se2, l2[97] = ne2) : ne2 = l2[97], l2[98] === Symbol.for("react.memo_cache_sentinel") ? (ie2 = {
    value: "normal",
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: "400"
    })
  }, l2[98] = ie2) : ie2 = l2[98], l2[99] === Symbol.for("react.memo_cache_sentinel") ? (le2 = {
    value: "medium",
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: "500"
    })
  }, l2[99] = le2) : le2 = l2[99], l2[100] === Symbol.for("react.memo_cache_sentinel") ? (re2 = {
    value: "semibold",
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: "600"
    })
  }, l2[100] = re2) : re2 = l2[100], l2[101] === Symbol.for("react.memo_cache_sentinel") ? (oe2 = {
    value: "bold",
    label: n.jsx("span", {
      className: "text-xs font-medium px-1",
      children: "700"
    })
  }, l2[101] = oe2) : oe2 = l2[101], l2[102] !== ne2 ? (ce2 = [ne2, ie2, le2, re2, oe2], l2[102] = ne2, l2[103] = ce2) : ce2 = l2[103], l2[104] !== w2 || l2[105] !== f2 || l2[106] !== (null == o2 ? void 0 : o2.font) || l2[107] !== c2 ? (de2 = e3 => {
    if (c2({
      font: {
        ...(null == o2 ? void 0 : o2.font),
        family: w2,
        size: f2,
        weight: e3
      }
    }), "default" !== e3 && "auto" !== e3 && e3) {
      const t3 = {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      };
      document.documentElement.style.setProperty("--font-weight-base", t3[e3] || "400");
    } else document.documentElement.style.setProperty("--font-weight-base", "400");
  }, l2[104] = w2, l2[105] = f2, l2[106] = null == o2 ? void 0 : o2.font, l2[107] = c2, l2[108] = de2) : de2 = l2[108], l2[109] !== k2 || l2[110] !== ce2 || l2[111] !== de2 ? (ue2 = n.jsx(h, {
    fullWidth: true,
    className: "w-full",
    options: ce2,
    value: k2,
    onChange: de2,
    size: "sm"
  }), l2[109] = k2, l2[110] = ce2, l2[111] = de2, l2[112] = ue2) : ue2 = l2[112], l2[113] !== te2 || l2[114] !== ae2 || l2[115] !== ue2 ? (me2 = n.jsx(ns, {
    label: te2,
    description: ae2,
    vertical: true,
    children: ue2
  }), l2[113] = te2, l2[114] = ae2, l2[115] = ue2, l2[116] = me2) : me2 = l2[116], l2[117] !== $2 || l2[118] !== R2 || l2[119] !== ee2 || l2[120] !== me2 || l2[121] !== I2 ? (pe2 = n.jsxs("div", {
    className: "space-y-4 pt-1",
    children: [I2, $2, R2, ee2, me2]
  }), l2[117] = $2, l2[118] = R2, l2[119] = ee2, l2[120] = me2, l2[121] = I2, l2[122] = pe2) : pe2 = l2[122], l2[123] !== v2 || l2[124] !== b2 ? (fe2 = n.jsx("input", {
    ref: v2,
    type: "file",
    accept: ".ttf,.otf,.woff,.woff2",
    onChange: b2,
    className: "hidden"
  }), l2[123] = v2, l2[124] = b2, l2[125] = fe2) : fe2 = l2[125], l2[126] !== pe2 || l2[127] !== fe2 ? (ge2 = n.jsxs(is, {
    children: [pe2, fe2]
  }), l2[126] = pe2, l2[127] = fe2, l2[128] = ge2) : ge2 = l2[128], ge2;
}
const Gs = /^#[0-9A-F]{6}$/i;
function Zs(t2) {
  const s2 = e.c(27),
    {
      value: l2,
      onCommit: r2,
      children: o2,
      withHexInput: c2,
      modal: d2,
      align: u2,
      sideOffset: m2,
      contentClassName: p2
    } = t2,
    f2 = void 0 !== c2 && c2,
    [g2, h2] = a.useState(l2),
    [x2, y2] = a.useState(l2);
  let b2, j2, w2;
  s2[0] !== l2 ? (b2 = () => {
    h2(l2), y2(l2);
  }, j2 = [l2], s2[0] = l2, s2[1] = b2, s2[2] = j2) : (b2 = s2[1], j2 = s2[2]), a.useEffect(b2, j2), s2[3] !== g2 || s2[4] !== r2 ? (w2 = e3 => {
    e3 || r2(g2);
  }, s2[3] = g2, s2[4] = r2, s2[5] = w2) : w2 = s2[5];
  const k2 = w2;
  let N2;
  s2[6] === Symbol.for("react.memo_cache_sentinel") ? (N2 = e3 => {
    h2(e3), y2(e3);
  }, s2[6] = N2) : N2 = s2[6];
  const S2 = N2;
  let _2;
  s2[7] === Symbol.for("react.memo_cache_sentinel") ? (_2 = e3 => {
    const t3 = e3.target.value;
    y2(t3), Gs.test(t3) && h2(t3);
  }, s2[7] = _2) : _2 = s2[7];
  const C2 = _2;
  let P2, z2, A2, M2, I2;
  return s2[8] !== o2 || s2[9] !== g2 ? (P2 = o2(g2), s2[8] = o2, s2[9] = g2, s2[10] = P2) : P2 = s2[10], s2[11] !== P2 ? (z2 = n.jsx(hs, {
    asChild: true,
    children: P2
  }), s2[11] = P2, s2[12] = z2) : z2 = s2[12], s2[13] !== g2 || s2[14] !== x2 || s2[15] !== f2 ? (A2 = f2 ? n.jsxs("div", {
    className: "space-y-3",
    children: [n.jsx(i, {
      color: g2,
      onChange: S2,
      style: {
        width: "100%"
      }
    }), n.jsx(v, {
      type: "text",
      value: x2,
      onChange: C2,
      placeholder: "#ffffff",
      className: "text-center",
      maxLength: 7
    })]
  }) : n.jsx(i, {
    color: g2,
    onChange: S2
  }), s2[13] = g2, s2[14] = x2, s2[15] = f2, s2[16] = A2) : A2 = s2[16], s2[17] !== u2 || s2[18] !== p2 || s2[19] !== m2 || s2[20] !== A2 ? (M2 = n.jsx(vs, {
    align: u2,
    sideOffset: m2,
    className: p2,
    children: A2
  }), s2[17] = u2, s2[18] = p2, s2[19] = m2, s2[20] = A2, s2[21] = M2) : M2 = s2[21], s2[22] !== k2 || s2[23] !== d2 || s2[24] !== M2 || s2[25] !== z2 ? (I2 = n.jsxs(xs, {
    modal: d2,
    onOpenChange: k2,
    children: [z2, M2]
  }), s2[22] = k2, s2[23] = d2, s2[24] = M2, s2[25] = z2, s2[26] = I2) : I2 = s2[26], I2;
}
function Hs(t2) {
  const a2 = e.c(16),
    {
      primary: s2,
      accent: i2,
      name: l2,
      active: r2,
      onClick: o2
    } = t2,
    c2 = r2 ? "choice choice-on text-foreground" : "choice text-foreground/80 hover:text-foreground";
  let d2, u2, m2, p2, f2, g2;
  return a2[0] !== c2 ? (d2 = ke("relative flex flex-col items-center gap-2 pt-3.5 pb-2.5 px-1.5 rounded-xl border w-full select-none cursor-pointer", c2), a2[0] = c2, a2[1] = d2) : d2 = a2[1], a2[2] !== s2 ? (u2 = n.jsx("div", {
    className: "w-5 h-5 rounded-full border border-border/30 shrink-0",
    style: {
      backgroundColor: s2
    }
  }), a2[2] = s2, a2[3] = u2) : u2 = a2[3], a2[4] !== i2 ? (m2 = n.jsx("div", {
    className: "w-5 h-5 rounded-full border border-border/30 shrink-0 z-10",
    style: {
      backgroundColor: i2
    }
  }), a2[4] = i2, a2[5] = m2) : m2 = a2[5], a2[6] !== u2 || a2[7] !== m2 ? (p2 = n.jsxs("div", {
    className: "flex items-center -space-x-2",
    children: [u2, m2]
  }), a2[6] = u2, a2[7] = m2, a2[8] = p2) : p2 = a2[8], a2[9] !== l2 ? (f2 = n.jsx("span", {
    className: "text-micro font-medium text-foreground/70 truncate w-full text-center leading-none",
    children: l2
  }), a2[9] = l2, a2[10] = f2) : f2 = a2[10], a2[11] !== o2 || a2[12] !== d2 || a2[13] !== p2 || a2[14] !== f2 ? (g2 = n.jsxs("button", {
    type: "button",
    onClick: o2,
    className: d2,
    children: [p2, f2]
  }), a2[11] = o2, a2[12] = d2, a2[13] = p2, a2[14] = f2, a2[15] = g2) : g2 = a2[15], g2;
}
function Ys() {
  var t2, s2, i2, l2, r2, o2, c2, d2, u2, m2;
  const p2 = e.c(81),
    f2 = Ce(Js),
    [g2, x2] = a.useState(null);
  let y2, b2;
  p2[0] !== f2 ? (y2 = () => {
    if (!f2) return void x2(null);
    let e3 = true;
    return Ie(f2).then(t3 => {
      e3 && x2({
        primary: `${t3.h} ${t3.s}% ${t3.l}%`,
        accent: `${t3.h} ${Math.max(10, t3.s - 10)}% ${Math.max(10, t3.l - 15)}%`
      });
    }).catch(() => {
      e3 && x2(null);
    }), () => {
      e3 = false;
    };
  }, b2 = [f2], p2[0] = f2, p2[1] = y2, p2[2] = b2) : (y2 = p2[1], b2 = p2[2]), a.useEffect(y2, b2);
  const {
    t: j2,
    settings: w2,
    currentTheme: k2,
    themeMode: N2,
    currentGroup: S2,
    customThemes: _2,
    newThemeName: C2,
    setNewThemeName: P2,
    customColors: z2,
    setCustomColors: A2,
    createThemePopoverOpen: M2,
    setCreateThemePopoverOpen: I2,
    handleThemeModeToggle: E2,
    handleThemeChange: L2,
    generateRandomTheme: T2,
    handleDeleteTheme: D2,
    handleSaveCustomTheme: F2,
    toggleAdaptCover: O2
  } = Bs();
  let $2, B2, U2, R2, q2, V2, W2, K2, G2, Z2, H2, Y2, Q2, J2;
  p2[3] !== j2 ? ($2 = j2("settings.appearance.theme.title"), p2[3] = j2, p2[4] = $2) : $2 = p2[4], p2[5] !== j2 ? (B2 = j2("settings.appearance.theme.description"), p2[5] = j2, p2[6] = B2) : B2 = p2[6], p2[7] !== j2 ? (U2 = j2("settings.appearance.theme.dark"), p2[7] = j2, p2[8] = U2) : U2 = p2[8], p2[9] !== U2 ? (R2 = {
    value: "dark",
    icon: Ee,
    title: U2
  }, p2[9] = U2, p2[10] = R2) : R2 = p2[10], p2[11] !== j2 ? (q2 = j2("settings.appearance.theme.light"), p2[11] = j2, p2[12] = q2) : q2 = p2[12], p2[13] !== q2 ? (V2 = {
    value: "light",
    icon: Le,
    title: q2
  }, p2[13] = q2, p2[14] = V2) : V2 = p2[14], p2[15] !== j2 ? (W2 = j2("settings.appearance.theme.system"), p2[15] = j2, p2[16] = W2) : W2 = p2[16], p2[17] !== W2 ? (K2 = {
    value: "system",
    icon: Te,
    title: W2
  }, p2[17] = W2, p2[18] = K2) : K2 = p2[18], p2[19] !== R2 || p2[20] !== V2 || p2[21] !== K2 ? (G2 = [R2, V2, K2], p2[19] = R2, p2[20] = V2, p2[21] = K2, p2[22] = G2) : G2 = p2[22], p2[23] !== E2 ? (Z2 = e3 => E2(e3), p2[23] = E2, p2[24] = Z2) : Z2 = p2[24], p2[25] !== G2 || p2[26] !== Z2 || p2[27] !== N2 ? (H2 = n.jsx(h, {
    options: G2,
    value: N2,
    onChange: Z2,
    size: "sm"
  }), p2[25] = G2, p2[26] = Z2, p2[27] = N2, p2[28] = H2) : H2 = p2[28], p2[29] !== H2 || p2[30] !== $2 || p2[31] !== B2 ? (Y2 = n.jsx(ns, {
    label: $2,
    description: B2,
    children: H2
  }), p2[29] = H2, p2[30] = $2, p2[31] = B2, p2[32] = Y2) : Y2 = p2[32], p2[33] !== j2 ? (Q2 = j2("settings.appearance.theme.presets"), p2[33] = j2, p2[34] = Q2) : Q2 = p2[34], p2[35] !== Q2 ? (J2 = n.jsx("span", {
    className: "text-xs text-muted-foreground/75 font-semibold px-0.5",
    children: Q2
  }), p2[35] = Q2, p2[36] = J2) : J2 = p2[36];
  const X2 = g2 ? `hsl(${g2.primary})` : "hsl(var(--primary))",
    ee2 = g2 ? `hsl(${g2.accent})` : "hsl(var(--accent))";
  let te2;
  p2[37] !== j2 ? (te2 = j2("settings.appearance.theme.adaptcover"), p2[37] = j2, p2[38] = te2) : te2 = p2[38];
  const ae2 = !!(null == (s2 = null == (t2 = null == w2 ? void 0 : w2.playerSettings) ? void 0 : t2.cover) ? void 0 : s2.adaptcover);
  let se2, ne2, ie2, le2, re2, oe2, ce2, de2;
  return p2[39] !== (null == (l2 = null == (i2 = null == w2 ? void 0 : w2.playerSettings) ? void 0 : i2.cover) ? void 0 : l2.adaptcover) || p2[40] !== O2 ? (se2 = () => {
    var e3, t3;
    (null == (t3 = null == (e3 = null == w2 ? void 0 : w2.playerSettings) ? void 0 : e3.cover) ? void 0 : t3.adaptcover) || O2(true);
  }, p2[39] = null == (o2 = null == (r2 = null == w2 ? void 0 : w2.playerSettings) ? void 0 : r2.cover) ? void 0 : o2.adaptcover, p2[40] = O2, p2[41] = se2) : se2 = p2[41], p2[42] !== X2 || p2[43] !== ee2 || p2[44] !== te2 || p2[45] !== ae2 || p2[46] !== se2 ? (ne2 = n.jsx(Hs, {
    primary: X2,
    accent: ee2,
    name: te2,
    active: ae2,
    onClick: se2
  }), p2[42] = X2, p2[43] = ee2, p2[44] = te2, p2[45] = ae2, p2[46] = se2, p2[47] = ne2) : ne2 = p2[47], p2[48] !== S2 || p2[49] !== L2 || p2[50] !== (null == (d2 = null == (c2 = null == w2 ? void 0 : w2.playerSettings) ? void 0 : c2.cover) ? void 0 : d2.adaptcover) || p2[51] !== N2 || p2[52] !== O2 ? (ie2 = fe.map(e3 => {
    var t3, a2;
    const s3 = !(null == (a2 = null == (t3 = null == w2 ? void 0 : w2.playerSettings) ? void 0 : t3.cover) ? void 0 : a2.adaptcover) && S2 === e3.id,
      i3 = "light" === N2 ? e3.lightThemeId : e3.darkThemeId,
      l3 = ge.find(e4 => e4.id === i3);
    return n.jsx(Hs, {
      primary: `hsl(${(null == l3 ? void 0 : l3.colors["--primary"]) || "0 0% 100%"})`,
      accent: `hsl(${(null == l3 ? void 0 : l3.colors["--accent"]) || "0 0% 14%"})`,
      name: e3.name,
      active: s3,
      onClick: () => {
        var t4, a3;
        (null == (a3 = null == (t4 = null == w2 ? void 0 : w2.playerSettings) ? void 0 : t4.cover) ? void 0 : a3.adaptcover) && O2(false), L2(e3.id);
      }
    }, e3.id);
  }), p2[48] = S2, p2[49] = L2, p2[50] = null == (m2 = null == (u2 = null == w2 ? void 0 : w2.playerSettings) ? void 0 : u2.cover) ? void 0 : m2.adaptcover, p2[51] = N2, p2[52] = O2, p2[53] = ie2) : ie2 = p2[53], p2[54] !== M2 || p2[55] !== z2 || p2[56] !== T2 || p2[57] !== F2 || p2[58] !== C2 || p2[59] !== I2 || p2[60] !== A2 || p2[61] !== P2 || p2[62] !== j2 ? (le2 = M2 ? n.jsxs("div", {
    className: "col-span-4 page-sm:col-span-6 page-md:col-span-7 h-[62px] rounded-xl border border-border/20 bg-plate px-3 flex items-center gap-2.5 animate-in fade-in zoom-in-95 duration-150 select-none overflow-x-auto library-scrollbar",
    children: [n.jsx(v, {
      placeholder: j2("settings.themes.create.dialog.name_placeholder"),
      value: C2,
      onChange: e3 => P2(e3.target.value),
      className: "h-8 text-xs w-28 page-sm:w-36 rounded-lg bg-background/70 border-border/20 px-2.5 shrink-0 focus-visible:ring-1 focus-visible:ring-primary",
      autoFocus: true
    }), n.jsx("div", {
      className: "flex items-center gap-1.5 shrink-0",
      children: Pe.map(e3 => {
        const {
          key: t3
        } = e3;
        return n.jsx("div", {
          children: n.jsx(Zs, {
            value: z2[t3] ? ze(z2[t3]) : "#ffffff",
            onCommit: e4 => A2(a2 => ({
              ...a2,
              [t3]: Ae(e4)
            })),
            contentClassName: "w-auto p-0 border-none rounded-lg overflow-hidden",
            children: Qs
          })
        }, t3);
      })
    }), n.jsxs("div", {
      className: "flex items-center gap-1 ml-auto shrink-0",
      children: [n.jsx(Se, {
        onClick: T2,
        variant: "ghost",
        size: "icon-sm",
        "aria-label": j2("settings.themes.create.dialog.random_colors_button"),
        children: n.jsx(Me, {
          className: "h-4 w-4"
        })
      }), n.jsx(Se, {
        onClick: () => I2(false),
        variant: "ghost",
        size: "icon-sm",
        "aria-label": j2("common.cancel"),
        children: n.jsx(Ne.close, {
          className: "h-3.5 w-3.5"
        })
      }), n.jsx(Se, {
        onClick: () => {
          F2(), I2(false);
        },
        disabled: !C2.trim(),
        variant: "ghost",
        size: "icon-sm",
        className: "text-primary hover:text-primary/80 disabled:opacity-40",
        "aria-label": j2("settings.themes.create.dialog.save_button"),
        children: n.jsx(Ne.check, {
          className: "h-4 w-4"
        })
      })]
    })]
  }) : n.jsx(Se, {
    type: "button",
    variant: "ghost",
    onClick: () => {
      z2 && 0 !== Object.keys(z2).length || T2(), I2(true);
    },
    className: "h-[62px] w-full rounded-xl border border-dashed border-border/30 bg-plate hover:border-border/40",
    "aria-label": j2("settings.themes.create.title"),
    children: n.jsx(Ne.add, {
      className: "h-5 w-5"
    })
  }), p2[54] = M2, p2[55] = z2, p2[56] = T2, p2[57] = F2, p2[58] = C2, p2[59] = I2, p2[60] = A2, p2[61] = P2, p2[62] = j2, p2[63] = le2) : le2 = p2[63], p2[64] !== ne2 || p2[65] !== ie2 || p2[66] !== le2 ? (re2 = n.jsxs("div", {
    className: "grid grid-cols-4 page-sm:grid-cols-6 page-md:grid-cols-7 gap-2",
    children: [ne2, ie2, le2]
  }), p2[64] = ne2, p2[65] = ie2, p2[66] = le2, p2[67] = re2) : re2 = p2[67], p2[68] !== J2 || p2[69] !== re2 ? (oe2 = n.jsxs("div", {
    className: "space-y-2 pt-1",
    children: [J2, re2]
  }), p2[68] = J2, p2[69] = re2, p2[70] = oe2) : oe2 = p2[70], p2[71] !== k2 || p2[72] !== _2 || p2[73] !== D2 || p2[74] !== L2 || p2[75] !== j2 ? (ce2 = _2.length > 0 && n.jsxs("div", {
    className: "space-y-2 pt-2",
    children: [n.jsx("span", {
      className: "text-xs text-muted-foreground/75 font-semibold px-0.5",
      children: j2("settings.themes.custom")
    }), n.jsx("div", {
      className: "grid grid-cols-4 page-sm:grid-cols-6 page-md:grid-cols-7 gap-2",
      children: _2.map(e3 => n.jsxs("div", {
        className: "relative group/ctheme",
        children: [n.jsx(Hs, {
          primary: `hsl(${e3.colors["--primary"]})`,
          accent: `hsl(${e3.colors["--accent"]})`,
          name: e3.name,
          active: k2 === e3.id,
          onClick: () => L2(e3.id)
        }), n.jsx(Us, {
          className: "-top-1.5 -right-1.5 opacity-0 group-hover/ctheme:opacity-100 z-40",
          label: j2("settings.themes.context_menu.delete"),
          onClick: () => D2(e3.id)
        })]
      }, e3.id))
    })]
  }), p2[71] = k2, p2[72] = _2, p2[73] = D2, p2[74] = L2, p2[75] = j2, p2[76] = ce2) : ce2 = p2[76], p2[77] !== Y2 || p2[78] !== oe2 || p2[79] !== ce2 ? (de2 = n.jsx(is, {
    children: n.jsxs("div", {
      className: "space-y-4 pt-1",
      children: [Y2, oe2, ce2]
    })
  }), p2[77] = Y2, p2[78] = oe2, p2[79] = ce2, p2[80] = de2) : de2 = p2[80], de2;
}
function Qs(e3) {
  return n.jsx("div", {
    className: "w-6 h-6 rounded-full border border-border/40 cursor-pointer hover:scale-110 active:scale-95 transition-transform shrink-0 shadow-xs",
    style: {
      backgroundColor: e3
    }
  });
}
function Js(e3) {
  var t2;
  return null == (t2 = e3.currentSong) ? void 0 : t2.cover_art;
}
function Xs() {
  var t2, a2, s2, i2, l2, r2, o2;
  const c2 = e.c(23),
    {
      t: d2,
      uiSettings: u2,
      localOpacity: m2,
      setLocalOpacity: p2,
      localGlassBlur: f2,
      setLocalGlassBlur: g2,
      updateTransparency: h2
    } = Bs();
  let v2, y2;
  c2[0] !== d2 ? (v2 = d2("settings.appearance.interface.transparency.title"), c2[0] = d2, c2[1] = v2) : v2 = c2[1], c2[2] !== d2 ? (y2 = d2("settings.appearance.interface.transparency.description"), c2[2] = d2, c2[3] = y2) : y2 = c2[3];
  const b2 = null != (a2 = null == (t2 = null == u2 ? void 0 : u2.transparency) ? void 0 : t2.enabled) && a2;
  let j2, w2, k2, N2;
  return c2[4] !== h2 ? (j2 = e3 => h2({
    enabled: e3
  }), c2[4] = h2, c2[5] = j2) : j2 = c2[5], c2[6] !== v2 || c2[7] !== y2 || c2[8] !== b2 || c2[9] !== j2 ? (w2 = n.jsx(ls, {
    label: v2,
    description: y2,
    checked: b2,
    onCheckedChange: j2
  }), c2[6] = v2, c2[7] = y2, c2[8] = b2, c2[9] = j2, c2[10] = w2) : w2 = c2[10], c2[11] !== f2 || c2[12] !== m2 || c2[13] !== g2 || c2[14] !== p2 || c2[15] !== d2 || c2[16] !== (null == (s2 = null == u2 ? void 0 : u2.transparency) ? void 0 : s2.enabled) || c2[17] !== (null == (i2 = null == u2 ? void 0 : u2.transparency) ? void 0 : i2.glass) || c2[18] !== h2 ? (k2 = (null == (l2 = null == u2 ? void 0 : u2.transparency) ? void 0 : l2.enabled) && n.jsxs("div", {
    className: "space-y-3 pt-2 border-t border-border/10",
    children: [n.jsx(ns, {
      label: d2("settings.appearance.interface.transparency.opacity"),
      vertical: true,
      children: n.jsxs("div", {
        className: "flex items-center gap-4 w-full",
        children: [n.jsx(x, {
          value: [m2],
          onValueChange: e3 => {
            const [t3] = e3;
            return p2(t3);
          },
          onValueCommit: e3 => {
            const [t3] = e3;
            return h2({
              opacity: t3
            });
          },
          min: 30,
          max: 100,
          step: 5,
          className: "flex-1"
        }), n.jsxs("span", {
          className: "text-xs font-medium text-foreground/80 w-12 text-right shrink-0",
          children: [m2, "%"]
        })]
      })
    }), n.jsx(ns, {
      label: d2("settings.appearance.interface.transparency.glass_blur"),
      description: d2("settings.appearance.interface.transparency.glass_blur_description"),
      vertical: true,
      children: n.jsxs("div", {
        className: "flex items-center gap-4 w-full",
        children: [n.jsx(x, {
          value: [f2],
          onValueChange: e3 => {
            const [t3] = e3;
            return g2(t3);
          },
          onValueCommit: e3 => {
            var t3;
            const [a3] = e3;
            return h2({
              glass: {
                ...(null == (t3 = null == u2 ? void 0 : u2.transparency) ? void 0 : t3.glass),
                blur: a3
              }
            });
          },
          min: 0,
          max: 48,
          step: 1,
          className: "flex-1"
        }), n.jsxs("span", {
          className: "text-xs font-medium text-foreground/80 w-12 text-right shrink-0",
          children: [f2, "px"]
        })]
      })
    })]
  }), c2[11] = f2, c2[12] = m2, c2[13] = g2, c2[14] = p2, c2[15] = d2, c2[16] = null == (r2 = null == u2 ? void 0 : u2.transparency) ? void 0 : r2.enabled, c2[17] = null == (o2 = null == u2 ? void 0 : u2.transparency) ? void 0 : o2.glass, c2[18] = h2, c2[19] = k2) : k2 = c2[19], c2[20] !== w2 || c2[21] !== k2 ? (N2 = n.jsx(is, {
    children: n.jsxs("div", {
      className: "space-y-4 pt-1",
      children: [w2, k2]
    })
  }), c2[20] = w2, c2[21] = k2, c2[22] = N2) : N2 = c2[22], N2;
}
function en() {
  const t2 = e.c(43),
    {
      t: a2,
      uiSettings: s2,
      updateUiSettings: i2
    } = Bs();
  let l2, r2, o2, c2, d2, u2, m2, p2, f2;
  t2[0] !== a2 ? (l2 = a2("settings.appearance.interface.rounding.none"), t2[0] = a2, t2[1] = l2) : l2 = t2[1], t2[2] !== l2 ? (r2 = {
    value: "none",
    label: l2,
    radius: "0px"
  }, t2[2] = l2, t2[3] = r2) : r2 = t2[3], t2[4] !== a2 ? (o2 = a2("settings.appearance.interface.rounding.small"), t2[4] = a2, t2[5] = o2) : o2 = t2[5], t2[6] !== o2 ? (c2 = {
    value: "small",
    label: o2,
    radius: "4px"
  }, t2[6] = o2, t2[7] = c2) : c2 = t2[7], t2[8] !== a2 ? (d2 = a2("settings.appearance.interface.rounding.medium"), t2[8] = a2, t2[9] = d2) : d2 = t2[9], t2[10] !== d2 ? (u2 = {
    value: "medium",
    label: d2,
    radius: "8px"
  }, t2[10] = d2, t2[11] = u2) : u2 = t2[11], t2[12] !== a2 ? (m2 = a2("settings.appearance.interface.rounding.large"), t2[12] = a2, t2[13] = m2) : m2 = t2[13], t2[14] !== m2 ? (p2 = {
    value: "large",
    label: m2,
    radius: "16px"
  }, t2[14] = m2, t2[15] = p2) : p2 = t2[15], t2[16] !== r2 || t2[17] !== c2 || t2[18] !== u2 || t2[19] !== p2 ? (f2 = [r2, c2, u2, p2], t2[16] = r2, t2[17] = c2, t2[18] = u2, t2[19] = p2, t2[20] = f2) : f2 = t2[20];
  const g2 = f2;
  let h2, v2, x2, y2, b2, j2, w2, k2, N2, S2, _2, C2, P2;
  return t2[21] === Symbol.for("react.memo_cache_sentinel") ? (j2 = n.jsx(Ys, {}), h2 = n.jsx(cs, {}), v2 = n.jsx(Xs, {}), x2 = n.jsx(cs, {}), y2 = n.jsx(Rs, {}), b2 = n.jsx(cs, {}), t2[21] = h2, t2[22] = v2, t2[23] = x2, t2[24] = y2, t2[25] = b2, t2[26] = j2) : (h2 = t2[21], v2 = t2[22], x2 = t2[23], y2 = t2[24], b2 = t2[25], j2 = t2[26]), t2[27] !== a2 ? (w2 = a2("settings.appearance.interface.rounding.title"), t2[27] = a2, t2[28] = w2) : w2 = t2[28], t2[29] !== a2 ? (k2 = a2("settings.appearance.interface.rounding.description"), t2[29] = a2, t2[30] = k2) : k2 = t2[30], t2[31] !== g2 || t2[32] !== (null == s2 ? void 0 : s2.rounding) || t2[33] !== i2 ? (N2 = n.jsx(rs, {
    children: g2.map(e3 => n.jsx(os, {
      layout: "vertical",
      isSelected: (null == s2 ? void 0 : s2.rounding) === e3.value,
      onClick: () => i2({
        rounding: e3.value
      }),
      iconNode: n.jsx("div", {
        className: "w-7 h-7 bg-pressed border-2 border-foreground/30 transition-all",
        style: {
          borderRadius: e3.radius
        }
      }),
      title: e3.label
    }, e3.value))
  }), t2[31] = g2, t2[32] = null == s2 ? void 0 : s2.rounding, t2[33] = i2, t2[34] = N2) : N2 = t2[34], t2[35] !== w2 || t2[36] !== k2 || t2[37] !== N2 ? (S2 = n.jsx(ns, {
    label: w2,
    description: k2,
    vertical: true,
    children: N2
  }), t2[35] = w2, t2[36] = k2, t2[37] = N2, t2[38] = S2) : S2 = t2[38], t2[39] === Symbol.for("react.memo_cache_sentinel") ? (_2 = n.jsx(cs, {}), C2 = n.jsx(Ks, {}), t2[39] = _2, t2[40] = C2) : (_2 = t2[39], C2 = t2[40]), t2[41] !== S2 ? (P2 = n.jsxs("div", {
    className: "flex flex-col pb-12",
    children: [j2, h2, v2, x2, y2, b2, S2, _2, C2]
  }), t2[41] = S2, t2[42] = P2) : P2 = t2[42], P2;
}
function tn() {
  var t2, a2, s2, i2, l2, r2, o2, c2, d2, u2, m2, p2, f2, g2, v2, x2, y2, b2, j2, w2, k2, N2, S2, _2, C2, P2, z2, A2, M2, I2, E2, L2, T2, D2, F2, O2, $2, B2, U2, R2, q2, V2, W2, K2, G2, Z2, H2, Y2, Q2, J2, X2, ee2, te2, ae2, se2, ne2, ie2, re2, oe2, ce2;
  const de2 = e.c(151),
    {
      t: me2
    } = le(),
    {
      settings: pe2,
      updateSettings: fe2
    } = ue(),
    ge2 = (null == (a2 = null == (t2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : t2.tabs) ? void 0 : a2.style) || "default",
    he2 = null != (l2 = null == (i2 = null == (s2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : s2.tabs) ? void 0 : i2.autohide) && l2;
  let ve2;
  de2[0] !== pe2 || de2[1] !== ge2 || de2[2] !== fe2 ? (ve2 = e3 => {
    var t3, a3;
    if (null == pe2 ? void 0 : pe2.uiSettings) {
      fe2({
        uiSettings: {
          tabs: {
            position: e3,
            style: "top" !== e3 && "bottom" !== e3 || "full" !== ge2 ? ge2 : "default",
            autohide: null != (a3 = null == (t3 = pe2.uiSettings.tabs) ? void 0 : t3.autohide) && a3
          }
        }
      });
    }
  }, de2[0] = pe2, de2[1] = ge2, de2[2] = fe2, de2[3] = ve2) : ve2 = de2[3];
  const xe2 = ve2;
  let ye2, be2, je2, we2, ke2, Ne2, Se2, _e2, Ce2, Pe2, ze2;
  de2[4] !== me2 ? (ye2 = me2("settings.appearance.tabs_settings.position"), de2[4] = me2, de2[5] = ye2) : ye2 = de2[5], de2[6] !== me2 ? (be2 = me2("settings.appearance.tabs_settings.position_description"), de2[6] = me2, de2[7] = be2) : be2 = de2[7], de2[8] !== me2 ? (je2 = me2("settings.appearance.tabs_settings.positions.top"), de2[8] = me2, de2[9] = je2) : je2 = de2[9], de2[10] !== je2 ? (we2 = {
    value: "top",
    icon: De,
    title: je2
  }, de2[10] = je2, de2[11] = we2) : we2 = de2[11], de2[12] !== me2 ? (ke2 = me2("settings.appearance.tabs_settings.positions.bottom"), de2[12] = me2, de2[13] = ke2) : ke2 = de2[13], de2[14] !== ke2 ? (Ne2 = {
    value: "bottom",
    icon: Fe,
    title: ke2
  }, de2[14] = ke2, de2[15] = Ne2) : Ne2 = de2[15], de2[16] !== me2 ? (Se2 = me2("settings.appearance.tabs_settings.positions.left"), de2[16] = me2, de2[17] = Se2) : Se2 = de2[17], de2[18] !== Se2 ? (_e2 = {
    value: "left",
    icon: Oe,
    title: Se2
  }, de2[18] = Se2, de2[19] = _e2) : _e2 = de2[19], de2[20] !== me2 ? (Ce2 = me2("settings.appearance.tabs_settings.positions.right"), de2[20] = me2, de2[21] = Ce2) : Ce2 = de2[21], de2[22] !== Ce2 ? (Pe2 = {
    value: "right",
    icon: $e,
    title: Ce2
  }, de2[22] = Ce2, de2[23] = Pe2) : Pe2 = de2[23], de2[24] !== Pe2 || de2[25] !== we2 || de2[26] !== Ne2 || de2[27] !== _e2 ? (ze2 = [we2, Ne2, _e2, Pe2], de2[24] = Pe2, de2[25] = we2, de2[26] = Ne2, de2[27] = _e2, de2[28] = ze2) : ze2 = de2[28];
  const Ae2 = (null == (o2 = null == (r2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : r2.tabs) ? void 0 : o2.position) || "top";
  let Me2, Ie2, Ee2, Le2;
  de2[29] !== xe2 || de2[30] !== ze2 || de2[31] !== Ae2 ? (Me2 = n.jsx(h, {
    options: ze2,
    value: Ae2,
    onChange: xe2,
    size: "sm"
  }), de2[29] = xe2, de2[30] = ze2, de2[31] = Ae2, de2[32] = Me2) : Me2 = de2[32], de2[33] !== ye2 || de2[34] !== Me2 || de2[35] !== be2 ? (Ie2 = n.jsx(ns, {
    label: ye2,
    description: be2,
    children: Me2
  }), de2[33] = ye2, de2[34] = Me2, de2[35] = be2, de2[36] = Ie2) : Ie2 = de2[36], de2[37] !== me2 ? (Ee2 = me2("settings.appearance.tabs_settings.style"), de2[37] = me2, de2[38] = Ee2) : Ee2 = de2[38], de2[39] !== me2 ? (Le2 = me2("settings.appearance.tabs_settings.style_description"), de2[39] = me2, de2[40] = Le2) : Le2 = de2[40];
  const Te2 = "default" === ge2 || !(null == (d2 = null == (c2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : c2.tabs) ? void 0 : d2.style);
  let We2, Ke2, Ge2, Ze2;
  de2[41] !== (null == (m2 = null == (u2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : u2.tabs) ? void 0 : m2.autohide) || de2[42] !== (null == (f2 = null == (p2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : p2.tabs) ? void 0 : f2.position) || de2[43] !== fe2 ? (We2 = () => {
    var e3, t3, a3, s3, n2;
    return fe2({
      uiSettings: {
        tabs: {
          position: (null == (t3 = null == (e3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : e3.tabs) ? void 0 : t3.position) || "top",
          style: "default",
          autohide: null != (n2 = null == (s3 = null == (a3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : a3.tabs) ? void 0 : s3.autohide) && n2
        }
      }
    });
  }, de2[41] = null == (v2 = null == (g2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : g2.tabs) ? void 0 : v2.autohide, de2[42] = null == (y2 = null == (x2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : x2.tabs) ? void 0 : y2.position, de2[43] = fe2, de2[44] = We2) : We2 = de2[44], de2[45] !== me2 ? (Ke2 = me2("settings.appearance.tabs_settings.styles.default"), de2[45] = me2, de2[46] = Ke2) : Ke2 = de2[46], de2[47] !== me2 ? (Ge2 = me2("settings.appearance.tabs_settings.subtitles.default"), de2[47] = me2, de2[48] = Ge2) : Ge2 = de2[48], de2[49] !== Te2 || de2[50] !== We2 || de2[51] !== Ke2 || de2[52] !== Ge2 ? (Ze2 = n.jsx(os, {
    layout: "horizontal",
    icon: Be,
    isSelected: Te2,
    onClick: We2,
    title: Ke2,
    subtitle: Ge2
  }), de2[49] = Te2, de2[50] = We2, de2[51] = Ke2, de2[52] = Ge2, de2[53] = Ze2) : Ze2 = de2[53];
  const He2 = "compact" === ge2;
  let Ye2, Qe2, Je2, Xe2;
  de2[54] !== (null == (j2 = null == (b2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : b2.tabs) ? void 0 : j2.autohide) || de2[55] !== (null == (k2 = null == (w2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : w2.tabs) ? void 0 : k2.position) || de2[56] !== fe2 ? (Ye2 = () => {
    var e3, t3, a3, s3, n2;
    return fe2({
      uiSettings: {
        tabs: {
          position: (null == (t3 = null == (e3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : e3.tabs) ? void 0 : t3.position) || "top",
          style: "compact",
          autohide: null != (n2 = null == (s3 = null == (a3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : a3.tabs) ? void 0 : s3.autohide) && n2
        }
      }
    });
  }, de2[54] = null == (S2 = null == (N2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : N2.tabs) ? void 0 : S2.autohide, de2[55] = null == (C2 = null == (_2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : _2.tabs) ? void 0 : C2.position, de2[56] = fe2, de2[57] = Ye2) : Ye2 = de2[57], de2[58] !== me2 ? (Qe2 = me2("settings.appearance.tabs_settings.styles.compact"), de2[58] = me2, de2[59] = Qe2) : Qe2 = de2[59], de2[60] !== me2 ? (Je2 = me2("settings.appearance.tabs_settings.subtitles.compact"), de2[60] = me2, de2[61] = Je2) : Je2 = de2[61], de2[62] !== He2 || de2[63] !== Ye2 || de2[64] !== Qe2 || de2[65] !== Je2 ? (Xe2 = n.jsx(os, {
    layout: "horizontal",
    icon: Ue,
    isSelected: He2,
    onClick: Ye2,
    title: Qe2,
    subtitle: Je2
  }), de2[62] = He2, de2[63] = Ye2, de2[64] = Qe2, de2[65] = Je2, de2[66] = Xe2) : Xe2 = de2[66];
  const et2 = "full" === ge2,
    tt2 = "left" !== (null == (z2 = null == (P2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : P2.tabs) ? void 0 : z2.position) && "right" !== (null == (M2 = null == (A2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : A2.tabs) ? void 0 : M2.position);
  let at2, st2, nt2, it2;
  de2[67] !== (null == (E2 = null == (I2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : I2.tabs) ? void 0 : E2.autohide) || de2[68] !== (null == (T2 = null == (L2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : L2.tabs) ? void 0 : T2.position) || de2[69] !== fe2 ? (at2 = () => {
    var e3, t3, a3, s3, n2;
    const i3 = (null == (t3 = null == (e3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : e3.tabs) ? void 0 : t3.position) || "top";
    fe2({
      uiSettings: {
        tabs: {
          position: "left" === i3 || "right" === i3 ? i3 : "left",
          style: "full",
          autohide: null != (n2 = null == (s3 = null == (a3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : a3.tabs) ? void 0 : s3.autohide) && n2
        }
      }
    });
  }, de2[67] = null == (F2 = null == (D2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : D2.tabs) ? void 0 : F2.autohide, de2[68] = null == ($2 = null == (O2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : O2.tabs) ? void 0 : $2.position, de2[69] = fe2, de2[70] = at2) : at2 = de2[70], de2[71] !== me2 ? (st2 = me2("settings.appearance.tabs_settings.styles.full"), de2[71] = me2, de2[72] = st2) : st2 = de2[72], de2[73] !== me2 ? (nt2 = me2("settings.appearance.tabs_settings.subtitles.full"), de2[73] = me2, de2[74] = nt2) : nt2 = de2[74], de2[75] !== et2 || de2[76] !== tt2 || de2[77] !== at2 || de2[78] !== st2 || de2[79] !== nt2 ? (it2 = n.jsx(os, {
    layout: "horizontal",
    icon: Re,
    isSelected: et2,
    disabled: tt2,
    onClick: at2,
    title: st2,
    subtitle: nt2
  }), de2[75] = et2, de2[76] = tt2, de2[77] = at2, de2[78] = st2, de2[79] = nt2, de2[80] = it2) : it2 = de2[80];
  const lt2 = "circle" === ge2;
  let rt2, ot2, ct2, dt2;
  de2[81] !== (null == (U2 = null == (B2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : B2.tabs) ? void 0 : U2.autohide) || de2[82] !== (null == (q2 = null == (R2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : R2.tabs) ? void 0 : q2.position) || de2[83] !== fe2 ? (rt2 = () => {
    var e3, t3, a3, s3, n2;
    return fe2({
      uiSettings: {
        tabs: {
          position: (null == (t3 = null == (e3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : e3.tabs) ? void 0 : t3.position) || "top",
          style: "circle",
          autohide: null != (n2 = null == (s3 = null == (a3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : a3.tabs) ? void 0 : s3.autohide) && n2
        }
      }
    });
  }, de2[81] = null == (W2 = null == (V2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : V2.tabs) ? void 0 : W2.autohide, de2[82] = null == (G2 = null == (K2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : K2.tabs) ? void 0 : G2.position, de2[83] = fe2, de2[84] = rt2) : rt2 = de2[84], de2[85] !== me2 ? (ot2 = me2("settings.appearance.tabs_settings.styles.circle"), de2[85] = me2, de2[86] = ot2) : ot2 = de2[86], de2[87] !== me2 ? (ct2 = me2("settings.appearance.tabs_settings.subtitles.circle"), de2[87] = me2, de2[88] = ct2) : ct2 = de2[88], de2[89] !== lt2 || de2[90] !== rt2 || de2[91] !== ot2 || de2[92] !== ct2 ? (dt2 = n.jsx(os, {
    layout: "horizontal",
    icon: qe,
    isSelected: lt2,
    onClick: rt2,
    title: ot2,
    subtitle: ct2
  }), de2[89] = lt2, de2[90] = rt2, de2[91] = ot2, de2[92] = ct2, de2[93] = dt2) : dt2 = de2[93];
  const ut2 = "floating" === ge2;
  let mt2, pt2, ft2, gt2, ht2, vt2, xt2, yt2, bt2, jt2;
  de2[94] !== (null == (H2 = null == (Z2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : Z2.tabs) ? void 0 : H2.autohide) || de2[95] !== (null == (Q2 = null == (Y2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : Y2.tabs) ? void 0 : Q2.position) || de2[96] !== fe2 ? (mt2 = () => {
    var e3, t3, a3, s3, n2;
    return fe2({
      uiSettings: {
        tabs: {
          position: (null == (t3 = null == (e3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : e3.tabs) ? void 0 : t3.position) || "top",
          style: "floating",
          autohide: null != (n2 = null == (s3 = null == (a3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : a3.tabs) ? void 0 : s3.autohide) && n2
        }
      }
    });
  }, de2[94] = null == (X2 = null == (J2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : J2.tabs) ? void 0 : X2.autohide, de2[95] = null == (te2 = null == (ee2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : ee2.tabs) ? void 0 : te2.position, de2[96] = fe2, de2[97] = mt2) : mt2 = de2[97], de2[98] !== me2 ? (pt2 = me2("settings.appearance.tabs_settings.styles.floating"), de2[98] = me2, de2[99] = pt2) : pt2 = de2[99], de2[100] !== me2 ? (ft2 = me2("settings.appearance.tabs_settings.subtitles.floating"), de2[100] = me2, de2[101] = ft2) : ft2 = de2[101], de2[102] !== ut2 || de2[103] !== mt2 || de2[104] !== pt2 || de2[105] !== ft2 ? (gt2 = n.jsx(os, {
    layout: "horizontal",
    icon: Ve,
    isSelected: ut2,
    onClick: mt2,
    title: pt2,
    subtitle: ft2
  }), de2[102] = ut2, de2[103] = mt2, de2[104] = pt2, de2[105] = ft2, de2[106] = gt2) : gt2 = de2[106], de2[107] !== Ze2 || de2[108] !== Xe2 || de2[109] !== it2 || de2[110] !== dt2 || de2[111] !== gt2 ? (ht2 = n.jsxs("div", {
    className: "flex flex-col gap-2 pt-1 w-full select-none",
    children: [Ze2, Xe2, it2, dt2, gt2]
  }), de2[107] = Ze2, de2[108] = Xe2, de2[109] = it2, de2[110] = dt2, de2[111] = gt2, de2[112] = ht2) : ht2 = de2[112], de2[113] !== Ee2 || de2[114] !== Le2 || de2[115] !== ht2 ? (vt2 = n.jsx(ns, {
    label: Ee2,
    description: Le2,
    vertical: true,
    children: ht2
  }), de2[113] = Ee2, de2[114] = Le2, de2[115] = ht2, de2[116] = vt2) : vt2 = de2[116], de2[117] !== Ie2 || de2[118] !== vt2 ? (xt2 = n.jsxs(is, {
    children: [Ie2, vt2]
  }), de2[117] = Ie2, de2[118] = vt2, de2[119] = xt2) : xt2 = de2[119], de2[120] === Symbol.for("react.memo_cache_sentinel") ? (yt2 = n.jsx(cs, {}), de2[120] = yt2) : yt2 = de2[120], de2[121] !== me2 ? (bt2 = me2("settings.appearance.tabs_settings.adaptive"), de2[121] = me2, de2[122] = bt2) : bt2 = de2[122], de2[123] !== me2 ? (jt2 = me2("settings.appearance.tabs_settings.adaptive_description"), de2[123] = me2, de2[124] = jt2) : jt2 = de2[124];
  const wt2 = null != (ne2 = null == (se2 = null == (ae2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : ae2.tabs) ? void 0 : se2.adaptive) && ne2;
  let kt2, Nt2, St2, _t2, Ct2, Pt2, zt2, At2;
  return de2[125] !== (null == (ie2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : ie2.tabs) || de2[126] !== fe2 ? (kt2 = e3 => {
    var t3;
    return fe2({
      uiSettings: {
        tabs: {
          ...(null == (t3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : t3.tabs),
          adaptive: e3
        }
      }
    });
  }, de2[125] = null == (re2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : re2.tabs, de2[126] = fe2, de2[127] = kt2) : kt2 = de2[127], de2[128] !== bt2 || de2[129] !== jt2 || de2[130] !== wt2 || de2[131] !== kt2 ? (Nt2 = n.jsx(ls, {
    label: bt2,
    description: jt2,
    checked: wt2,
    onCheckedChange: kt2
  }), de2[128] = bt2, de2[129] = jt2, de2[130] = wt2, de2[131] = kt2, de2[132] = Nt2) : Nt2 = de2[132], de2[133] !== me2 ? (St2 = me2("settings.appearance.autohide.label"), de2[133] = me2, de2[134] = St2) : St2 = de2[134], de2[135] !== me2 ? (_t2 = me2("settings.appearance.autohide.description"), de2[135] = me2, de2[136] = _t2) : _t2 = de2[136], de2[137] !== (null == (oe2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : oe2.tabs) || de2[138] !== fe2 ? (Ct2 = e3 => {
    var t3;
    return fe2({
      uiSettings: {
        tabs: {
          ...(null == (t3 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : t3.tabs),
          autohide: e3
        }
      }
    });
  }, de2[137] = null == (ce2 = null == pe2 ? void 0 : pe2.uiSettings) ? void 0 : ce2.tabs, de2[138] = fe2, de2[139] = Ct2) : Ct2 = de2[139], de2[140] !== St2 || de2[141] !== _t2 || de2[142] !== Ct2 || de2[143] !== he2 ? (Pt2 = n.jsx(ls, {
    label: St2,
    description: _t2,
    checked: he2,
    onCheckedChange: Ct2
  }), de2[140] = St2, de2[141] = _t2, de2[142] = Ct2, de2[143] = he2, de2[144] = Pt2) : Pt2 = de2[144], de2[145] !== Nt2 || de2[146] !== Pt2 ? (zt2 = n.jsxs(is, {
    children: [Nt2, Pt2]
  }), de2[145] = Nt2, de2[146] = Pt2, de2[147] = zt2) : zt2 = de2[147], de2[148] !== xt2 || de2[149] !== zt2 ? (At2 = n.jsxs("div", {
    className: "flex flex-col pb-6",
    children: [xt2, yt2, zt2]
  }), de2[148] = xt2, de2[149] = zt2, de2[150] = At2) : At2 = de2[150], At2;
}
const sn = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/avif": "avif",
    "image/bmp": "bmp",
    "image/svg+xml": "svg",
    "video/mp4": "mp4",
    "video/webm": "webm",
    "video/ogg": "ogg",
    "audio/ogg": "ogg"
  },
  nn = /\.(jpe?g|png|webp|gif|avif|bmp|svg|mp4|webm|ogg)$/i;
function ln(t2) {
  const a2 = e.c(7),
    {
      actions: s2,
      labeled: i2
    } = t2,
    l2 = void 0 !== i2 && i2;
  let r2, o2;
  if (a2[0] !== s2 || a2[1] !== l2) {
    let e3;
    a2[3] !== l2 ? (e3 = e4 => n.jsxs(Se, {
      type: "button",
      variant: "quiet",
      size: l2 && !e4.iconOnly ? "sm" : "icon-sm",
      shape: l2 && !e4.iconOnly ? "default" : "circle",
      "aria-label": e4.label,
      "aria-pressed": e4.active,
      disabled: e4.disabled,
      onClick: e4.onClick,
      className: "gap-1.5 " + (e4.active ? "text-foreground" : "text-muted-foreground"),
      children: [e4.icon, l2 && !e4.iconOnly && n.jsx("span", {
        children: e4.label
      })]
    }, e4.label), a2[3] = l2, a2[4] = e3) : e3 = a2[4], r2 = s2.map(e3), a2[0] = s2, a2[1] = l2, a2[2] = r2;
  } else r2 = a2[2];
  return a2[5] !== r2 ? (o2 = n.jsx("div", {
    className: "flex shrink-0 items-center gap-1",
    children: r2
  }), a2[5] = r2, a2[6] = o2) : o2 = a2[6], o2;
}
function rn(t2) {
  const a2 = e.c(5),
    {
      icon: s2,
      label: i2,
      onConfirm: l2,
      disabled: r2
    } = t2;
  let o2;
  return a2[0] !== r2 || a2[1] !== s2 || a2[2] !== i2 || a2[3] !== l2 ? (o2 = n.jsx(Se, {
    type: "button",
    variant: "primary",
    size: "icon-sm",
    shape: "circle",
    className: "shrink-0",
    "aria-label": i2,
    onClick: l2,
    disabled: r2,
    children: s2
  }), a2[0] = r2, a2[1] = s2, a2[2] = i2, a2[3] = l2, a2[4] = o2) : o2 = a2[4], o2;
}
function on(t2) {
  const a2 = e.c(13),
    {
      label: s2,
      actions: i2,
      preview: l2
    } = t2,
    r2 = "rounded-xl bg-plate animate-in fade-in duration-150 " + (l2 ? "p-2" : "py-0.5 pl-3.5 pr-1");
  let o2, c2, d2, u2, m2;
  return a2[0] !== l2 ? (o2 = l2 && n.jsx("div", {
    className: "relative size-8 shrink-0 overflow-hidden rounded-lg",
    children: l2
  }), a2[0] = l2, a2[1] = o2) : o2 = a2[1], a2[2] !== s2 ? (c2 = n.jsx("span", {
    className: "min-w-0 flex-1 truncate text-footnote font-medium text-foreground/80",
    children: s2
  }), a2[2] = s2, a2[3] = c2) : c2 = a2[3], a2[4] !== i2 ? (d2 = n.jsx(ln, {
    actions: i2
  }), a2[4] = i2, a2[5] = d2) : d2 = a2[5], a2[6] !== o2 || a2[7] !== c2 || a2[8] !== d2 ? (u2 = n.jsxs("div", {
    className: "flex items-center gap-3",
    children: [o2, c2, d2]
  }), a2[6] = o2, a2[7] = c2, a2[8] = d2, a2[9] = u2) : u2 = a2[9], a2[10] !== r2 || a2[11] !== u2 ? (m2 = n.jsx("div", {
    className: r2,
    children: u2
  }), a2[10] = r2, a2[11] = u2, a2[12] = m2) : m2 = a2[12], m2;
}
const cn = new Map();
function dn(t2) {
  var s2;
  const i2 = e.c(32),
    {
      url: l2,
      type: r2,
      alt: o2,
      className: c2,
      playOnHover: d2,
      eager: u2
    } = t2,
    m2 = void 0 === o2 ? "" : o2,
    p2 = void 0 !== d2 && d2,
    f2 = void 0 !== u2 && u2,
    g2 = a.useRef(null),
    [h2, v2] = a.useState(f2),
    [x2, y2] = a.useState(null),
    [b2, j2] = a.useState(false);
  let w2;
  i2[0] !== r2 || i2[1] !== l2 ? (w2 = "video" === r2 || (e3 => e3.startsWith("data:") ? e3.startsWith("data:video/") : /\.(mp4|webm)(\?|$)/i.test(e3))(l2), i2[0] = r2, i2[1] = l2, i2[2] = w2) : w2 = i2[2];
  const k2 = w2;
  let N2, S2, _2, C2;
  i2[3] !== h2 ? (N2 = () => {
    if (h2) return;
    const e3 = g2.current;
    if (!e3) return;
    const t3 = new IntersectionObserver(e4 => {
      e4.some(un) && (v2(true), t3.disconnect());
    }, {
      rootMargin: "200px"
    });
    return t3.observe(e3), () => t3.disconnect();
  }, S2 = [h2], i2[3] = h2, i2[4] = N2, i2[5] = S2) : (N2 = i2[4], S2 = i2[5]), a.useEffect(N2, S2), i2[6] !== k2 || i2[7] !== h2 || i2[8] !== l2 ? (_2 = () => {
    if (!h2 || k2) return;
    let e3 = true;
    return function (e4) {
      const t3 = (e5 => e5.length > 512 ? `${e5.length}:${e5.slice(-96)}` : e5)(e4),
        a2 = cn.get(t3);
      if (a2) return a2;
      const s3 = new Image();
      s3.decoding = "async", s3.src = e4;
      const n2 = s3.decode().then(() => {
        var e5;
        const t4 = Math.min(1, 320 / s3.naturalWidth),
          a3 = document.createElement("canvas");
        return a3.width = Math.max(1, Math.round(s3.naturalWidth * t4)), a3.height = Math.max(1, Math.round(s3.naturalHeight * t4)), null == (e5 = a3.getContext("2d")) || e5.drawImage(s3, 0, 0, a3.width, a3.height), new Promise(e6 => {
          a3.toBlob(t5 => e6(t5 ? URL.createObjectURL(t5) : null), "image/webp", 0.85);
        });
      }).catch(() => null);
      return cn.set(t3, n2), n2;
    }(l2).then(t3 => {
      e3 && y2({
        url: l2,
        src: t3
      });
    }), () => {
      e3 = false;
    };
  }, C2 = [h2, k2, l2], i2[6] = k2, i2[7] = h2, i2[8] = l2, i2[9] = _2, i2[10] = C2) : (_2 = i2[9], C2 = i2[10]), a.useEffect(_2, C2);
  const P2 = (null == x2 ? void 0 : x2.url) === l2 ? null != (s2 = x2.src) ? s2 : l2 : null,
    z2 = p2 && b2 && "gif" === r2;
  let A2, M2, I2, E2, L2, T2;
  return i2[11] !== c2 ? (A2 = ke("absolute inset-0", c2), i2[11] = c2, i2[12] = A2) : A2 = i2[12], i2[13] !== p2 ? (M2 = p2 ? () => j2(true) : void 0, i2[13] = p2, i2[14] = M2) : M2 = i2[14], i2[15] !== p2 ? (I2 = p2 ? () => j2(false) : void 0, i2[15] = p2, i2[16] = I2) : I2 = i2[16], i2[17] !== k2 || i2[18] !== h2 || i2[19] !== l2 ? (E2 = h2 && k2 && n.jsx("video", {
    src: l2,
    preload: "metadata",
    muted: true,
    playsInline: true,
    className: "pointer-events-none h-full w-full object-cover"
  }), i2[17] = k2, i2[18] = h2, i2[19] = l2, i2[20] = E2) : E2 = i2[20], i2[21] !== m2 || i2[22] !== z2 || i2[23] !== P2 || i2[24] !== l2 ? (L2 = P2 && n.jsx("img", {
    src: z2 ? l2 : P2,
    alt: m2,
    draggable: false,
    decoding: "async",
    className: "pointer-events-none h-full w-full object-cover"
  }), i2[21] = m2, i2[22] = z2, i2[23] = P2, i2[24] = l2, i2[25] = L2) : L2 = i2[25], i2[26] !== M2 || i2[27] !== I2 || i2[28] !== E2 || i2[29] !== L2 || i2[30] !== A2 ? (T2 = n.jsxs("div", {
    ref: g2,
    className: A2,
    onPointerEnter: M2,
    onPointerLeave: I2,
    children: [E2, L2]
  }), i2[26] = M2, i2[27] = I2, i2[28] = E2, i2[29] = L2, i2[30] = A2, i2[31] = T2) : T2 = i2[31], T2;
}
function un(e3) {
  return e3.isIntersecting;
}
function mn(e3, t2) {
  if (e3.name) return e3.name;
  if (e3.url.startsWith("data:") || e3.url.startsWith("blob:")) return t2;
  const a2 = e3.url.split(/[?#]/)[0].split("/").pop() || t2;
  try {
    return decodeURIComponent(a2);
  } catch {
    return a2;
  }
}
function pn(t2) {
  const a2 = e.c(28),
    {
      asset: s2,
      selected: i2,
      dimmed: r2,
      onSelect: o2,
      onStartDrag: c2,
      isDraggingCurrent: d2,
      t: u2
    } = t2,
    m2 = void 0 !== i2 && i2,
    p2 = void 0 !== r2 && r2,
    f2 = void 0 !== d2 && d2;
  let g2;
  a2[0] !== s2 || a2[1] !== u2 ? (g2 = mn(s2, u2("settings.custom.media_file")), a2[0] = s2, a2[1] = u2, a2[2] = g2) : g2 = a2[2];
  const h2 = g2,
    v2 = l.useRef(null),
    x2 = l.useRef(false);
  let y2, b2, j2;
  a2[3] === Symbol.for("react.memo_cache_sentinel") ? (y2 = () => () => {
    var e3;
    null == (e3 = v2.current) || e3.call(v2);
  }, b2 = [], a2[3] = y2, a2[4] = b2) : (y2 = a2[3], b2 = a2[4]), l.useEffect(y2, b2), a2[5] !== s2.url || a2[6] !== c2 ? (j2 = e3 => {
    var t3;
    if (0 !== e3.button || !c2) return;
    null == (t3 = v2.current) || t3.call(v2), x2.current = false;
    const a3 = e3.clientX,
      n2 = e3.clientY,
      i3 = () => {
        window.removeEventListener("pointermove", l2), window.removeEventListener("pointerup", r3), window.removeEventListener("pointercancel", r3), v2.current = null;
      };
    v2.current = i3;
    const l2 = e4 => {
        Math.hypot(e4.clientX - a3, e4.clientY - n2) > 6 && (x2.current = true, i3(), c2(s2.url, e4.clientX, e4.clientY));
      },
      r3 = () => {
        i3();
      };
    window.addEventListener("pointermove", l2), window.addEventListener("pointerup", r3), window.addEventListener("pointercancel", r3);
  }, a2[5] = s2.url, a2[6] = c2, a2[7] = j2) : j2 = a2[7];
  const w2 = j2;
  let k2;
  a2[8] !== o2 ? (k2 = e3 => {
    if (x2.current) return x2.current = false, e3.preventDefault(), void e3.stopPropagation();
    null == o2 || o2();
  }, a2[8] = o2, a2[9] = k2) : k2 = a2[9];
  const N2 = f2 ? "opacity-30" : p2 && "opacity-50";
  let S2, _2;
  a2[10] !== N2 ? (S2 = ke("flex h-auto w-full cursor-grab select-none flex-col items-stretch gap-1.5 p-0 text-left transition-opacity duration-200 active:cursor-grabbing", N2), a2[10] = N2, a2[11] = S2) : S2 = a2[11], a2[12] !== s2.type || a2[13] !== s2.url || a2[14] !== h2 ? (_2 = n.jsx("div", {
    className: "relative aspect-video w-full overflow-hidden rounded-xl bg-plate",
    children: n.jsx(dn, {
      url: s2.url,
      type: s2.type,
      alt: h2,
      playOnHover: true
    })
  }), a2[12] = s2.type, a2[13] = s2.url, a2[14] = h2, a2[15] = _2) : _2 = a2[15];
  const C2 = m2 ? "font-medium text-foreground" : "text-muted-foreground";
  let P2, z2, A2;
  return a2[16] !== C2 ? (P2 = ke("truncate px-0.5 text-footnote", C2), a2[16] = C2, a2[17] = P2) : P2 = a2[17], a2[18] !== h2 || a2[19] !== P2 ? (z2 = n.jsx("span", {
    className: P2,
    children: h2
  }), a2[18] = h2, a2[19] = P2, a2[20] = z2) : z2 = a2[20], a2[21] !== w2 || a2[22] !== m2 || a2[23] !== S2 || a2[24] !== _2 || a2[25] !== z2 || a2[26] !== k2 ? (A2 = n.jsxs(Se, {
    type: "button",
    variant: "quiet",
    stretch: true,
    onPointerDown: w2,
    onClick: k2,
    "aria-pressed": m2,
    className: S2,
    children: [_2, z2]
  }), a2[21] = w2, a2[22] = m2, a2[23] = S2, a2[24] = _2, a2[25] = z2, a2[26] = k2, a2[27] = A2) : A2 = a2[27], A2;
}
const fn = ["background", "cover", "visualizer", "cursor", "slider"],
  gn = {
    background: st,
    cover: at,
    visualizer: tt,
    cursor: et,
    slider: Xe
  };
function hn(t2) {
  const s2 = e.c(18),
    {
      activeByUsage: i2,
      onSetAssetUsage: l2,
      draggedUrl: r2,
      selectedUrl: o2,
      onApplied: c2
    } = t2,
    d2 = void 0 === o2 ? null : o2,
    {
      t: u2
    } = le(),
    [m2, p2] = a.useState(null);
  let f2;
  s2[0] !== r2 || s2[1] !== l2 ? (f2 = (e3, t3) => {
    e3.preventDefault(), e3.stopPropagation();
    const a2 = window.__dotifyDraggingAsset || r2 || e3.dataTransfer.getData("text/plain") || e3.dataTransfer.getData("text/uri-list") || e3.dataTransfer.getData("URL");
    a2 && l2(a2, t3, true), p2(null), window.__dotifyDraggingAsset = null;
  }, s2[0] = r2, s2[1] = l2, s2[2] = f2) : f2 = s2[2];
  const g2 = f2;
  let h2, v2, x2, y2, b2, j2;
  return s2[3] === Symbol.for("react.memo_cache_sentinel") ? (h2 = () => {
    const e3 = e4 => {
      const {
        usage: t3
      } = e4.detail || {};
      p2(t3 || null);
    };
    return window.addEventListener("dotify:custom-asset-hover", e3), () => window.removeEventListener("dotify:custom-asset-hover", e3);
  }, v2 = [], s2[3] = h2, s2[4] = v2) : (h2 = s2[3], v2 = s2[4]), a.useEffect(h2, v2), s2[5] !== l2 ? (x2 = () => {
    const e3 = e4 => {
      const {
        url: t3,
        usage: a2
      } = e4.detail || {};
      t3 && a2 && fn.includes(a2) && l2(t3, a2, true), p2(null), window.__dotifyDraggingAsset = null;
    };
    return window.addEventListener("dotify:custom-asset-drop", e3), () => window.removeEventListener("dotify:custom-asset-drop", e3);
  }, y2 = [l2], s2[5] = l2, s2[6] = x2, s2[7] = y2) : (x2 = s2[6], y2 = s2[7]), a.useEffect(x2, y2), s2[8] !== i2 || s2[9] !== m2 || s2[10] !== g2 || s2[11] !== c2 || s2[12] !== l2 || s2[13] !== d2 || s2[14] !== u2 ? (b2 = fn.map(e3 => {
    const t3 = gn[e3],
      a2 = i2[e3],
      s3 = m2 === e3,
      r3 = u2(`settings.custom.slots.${e3}`),
      o3 = Boolean(d2 && (null == a2 ? void 0 : a2.url) === d2);
    return n.jsxs("div", {
      className: "flex min-w-0 flex-col items-center gap-1.5",
      children: [n.jsx(Se, {
        type: "button",
        variant: "quiet",
        stretch: true,
        "data-custom-usage": e3,
        onDragOver: t4 => {
          t4.preventDefault(), t4.dataTransfer.dropEffect = "copy", p2(e3);
        },
        onDragEnter: t4 => {
          t4.preventDefault(), p2(e3);
        },
        onDragLeave: e4 => {
          e4.currentTarget.contains(e4.relatedTarget) || p2(null);
        },
        onDrop: t4 => g2(t4, e3),
        "aria-label": r3,
        "aria-pressed": o3,
        tabIndex: d2 || a2 ? 0 : -1,
        onClick: () => {
          d2 ? (l2(d2, e3, !o3), null == c2 || c2()) : a2 && l2(a2.url, e3, false);
        },
        className: ke((d2 || a2) && "cursor-pointer", "group/slot relative flex h-14 w-full select-none items-center justify-center overflow-hidden rounded-xl bg-plate transition-colors duration-150", s3 || o3 ? "choice-on" : !a2 && "hover:bg-hover"),
        children: a2 ? n.jsx(dn, {
          url: a2.url,
          type: a2.type,
          alt: r3,
          className: "pointer-events-none"
        }) : n.jsx(t3, {
          className: "pointer-events-none h-5 w-5 text-muted-foreground/40 transition-colors group-hover/slot:text-muted-foreground/70"
        })
      }), n.jsx("span", {
        className: "w-full truncate text-center text-caption text-muted-foreground",
        children: r3
      })]
    }, e3);
  }), s2[8] = i2, s2[9] = m2, s2[10] = g2, s2[11] = c2, s2[12] = l2, s2[13] = d2, s2[14] = u2, s2[15] = b2) : b2 = s2[15], s2[16] !== b2 ? (j2 = n.jsx("div", {
    className: "w-full select-none",
    children: n.jsx("div", {
      className: "grid grid-cols-5 gap-2 w-full",
      children: b2
    })
  }), s2[16] = b2, s2[17] = j2) : j2 = s2[17], j2;
}
function vn(t2) {
  const a2 = e.c(26),
    {
      selected: s2,
      onClick: i2,
      leading: l2,
      trailing: r2,
      title: o2,
      subtitle: c2,
      background: d2
    } = t2,
    u2 = s2 ? "choice choice-on text-foreground" : "choice text-foreground/80 hover:text-foreground";
  let m2, p2, f2, g2, h2, v2, x2, y2, b2;
  return a2[0] !== u2 ? (m2 = ke("relative w-full h-24 rounded-2xl p-3 border cursor-pointer select-none flex flex-col justify-between text-left overflow-hidden", u2), a2[0] = u2, a2[1] = m2) : m2 = a2[1], a2[2] !== d2 ? (p2 = d2 && n.jsx(dn, {
    url: d2,
    className: "pointer-events-none opacity-20"
  }), a2[2] = d2, a2[3] = p2) : p2 = a2[3], a2[4] !== s2 ? (f2 = s2 && n.jsx(Ne.check, {
    className: "h-4 w-4 text-primary"
  }), a2[4] = s2, a2[5] = f2) : f2 = a2[5], a2[6] !== f2 || a2[7] !== r2 ? (g2 = n.jsxs("div", {
    className: "flex items-center gap-1.5",
    children: [r2, f2]
  }), a2[6] = f2, a2[7] = r2, a2[8] = g2) : g2 = a2[8], a2[9] !== l2 || a2[10] !== g2 ? (h2 = n.jsxs("div", {
    className: "z-10 flex w-full items-center justify-between",
    children: [l2, g2]
  }), a2[9] = l2, a2[10] = g2, a2[11] = h2) : h2 = a2[11], a2[12] !== o2 ? (v2 = n.jsx("h4", {
    className: "text-xs font-semibold text-foreground truncate",
    children: o2
  }), a2[12] = o2, a2[13] = v2) : v2 = a2[13], a2[14] !== c2 ? (x2 = n.jsx("p", {
    className: "text-micro text-muted-foreground/60",
    children: c2
  }), a2[14] = c2, a2[15] = x2) : x2 = a2[15], a2[16] !== v2 || a2[17] !== x2 ? (y2 = n.jsxs("div", {
    className: "z-10 min-w-0",
    children: [v2, x2]
  }), a2[16] = v2, a2[17] = x2, a2[18] = y2) : y2 = a2[18], a2[19] !== i2 || a2[20] !== s2 || a2[21] !== m2 || a2[22] !== p2 || a2[23] !== h2 || a2[24] !== y2 ? (b2 = n.jsxs("button", {
    type: "button",
    onClick: i2,
    "aria-pressed": s2,
    className: m2,
    children: [p2, h2, y2]
  }), a2[19] = i2, a2[20] = s2, a2[21] = m2, a2[22] = p2, a2[23] = h2, a2[24] = y2, a2[25] = b2) : b2 = a2[25], b2;
}
function xn(t2) {
  const a2 = e.c(33),
    {
      preset: s2,
      isApplied: i2,
      onApply: l2,
      dimmed: r2,
      isSelected: o2,
      onSelect: c2,
      mode: d2
    } = t2,
    u2 = void 0 !== i2 && i2,
    m2 = void 0 !== r2 && r2,
    p2 = void 0 !== o2 && o2,
    f2 = void 0 === d2 ? "manage" : d2,
    {
      t: g2
    } = le();
  let h2;
  a2[0] !== l2 || a2[1] !== c2 || a2[2] !== s2 ? (h2 = () => {
    c2 ? c2(s2) : l2 && l2(s2.id);
  }, a2[0] = l2, a2[1] = c2, a2[2] = s2, a2[3] = h2) : h2 = a2[3];
  const v2 = h2;
  if ("select" === f2) {
    let e3;
    a2[4] === Symbol.for("react.memo_cache_sentinel") ? (e3 = n.jsx(Ne.box, {
      className: "h-4 w-4 text-primary"
    }), a2[4] = e3) : e3 = a2[4];
    const t3 = s2.name;
    let i3;
    a2[5] !== g2 ? (i3 = g2("settings.custom.preset"), a2[5] = g2, a2[6] = i3) : i3 = a2[6];
    const l3 = s2.thumbnail || void 0;
    let r3;
    return a2[7] !== v2 || a2[8] !== p2 || a2[9] !== s2.name || a2[10] !== i3 || a2[11] !== l3 ? (r3 = n.jsx(vn, {
      selected: p2,
      onClick: v2,
      leading: e3,
      title: t3,
      subtitle: i3,
      background: l3
    }), a2[7] = v2, a2[8] = p2, a2[9] = s2.name, a2[10] = i3, a2[11] = l3, a2[12] = r3) : r3 = a2[12], r3;
  }
  const x2 = m2 && "opacity-50";
  let y2, b2;
  a2[13] !== x2 ? (y2 = ke("flex w-full cursor-pointer select-none flex-col gap-1.5 transition-opacity duration-200", x2), a2[13] = x2, a2[14] = y2) : y2 = a2[14], a2[15] !== s2.name || a2[16] !== s2.thumbnail ? (b2 = n.jsx("div", {
    className: "relative h-28 w-full overflow-hidden rounded-xl bg-plate",
    children: s2.thumbnail ? n.jsx(dn, {
      url: s2.thumbnail,
      alt: s2.name,
      className: "pointer-events-none"
    }) : n.jsx("div", {
      className: "flex h-full w-full items-center justify-center",
      children: n.jsx(Ne.box, {
        className: "h-8 w-8 text-muted-foreground/30"
      })
    })
  }), a2[15] = s2.name, a2[16] = s2.thumbnail, a2[17] = b2) : b2 = a2[17];
  const j2 = u2 || p2 ? "font-medium text-foreground" : "text-muted-foreground";
  let w2, k2, N2, S2, _2;
  return a2[18] !== j2 ? (w2 = ke("flex min-w-0 items-center gap-1 px-0.5 text-footnote", j2), a2[18] = j2, a2[19] = w2) : w2 = a2[19], a2[20] !== u2 ? (k2 = u2 && n.jsx(Ne.check, {
    className: "h-3.5 w-3.5 shrink-0"
  }), a2[20] = u2, a2[21] = k2) : k2 = a2[21], a2[22] !== s2.name ? (N2 = n.jsx("span", {
    className: "truncate",
    children: s2.name
  }), a2[22] = s2.name, a2[23] = N2) : N2 = a2[23], a2[24] !== w2 || a2[25] !== k2 || a2[26] !== N2 ? (S2 = n.jsxs("span", {
    className: w2,
    children: [k2, N2]
  }), a2[24] = w2, a2[25] = k2, a2[26] = N2, a2[27] = S2) : S2 = a2[27], a2[28] !== v2 || a2[29] !== S2 || a2[30] !== y2 || a2[31] !== b2 ? (_2 = n.jsxs("div", {
    className: y2,
    onClick: v2,
    children: [b2, S2]
  }), a2[28] = v2, a2[29] = S2, a2[30] = y2, a2[31] = b2, a2[32] = _2) : _2 = a2[32], _2;
}
function yn({
  hideHeader: e3 = false,
  isCreating: t2,
  onToggleCreate: s2
}) {
  var i2;
  const {
      t: l2
    } = le(),
    {
      settings: c2
    } = ue(),
    {
      presets: d2,
      loading: u2,
      savePreset: m2,
      applyPreset: p2,
      deletePreset: f2,
      exportPreset: g2,
      importPreset: h2
    } = an(),
    x2 = Ke(e4 => e4.getActiveItem),
    [j2, w2] = a.useState(""),
    [k2, N2] = a.useState(null),
    [S2, _2] = a.useState(null),
    C2 = null != (i2 = d2.find(e4 => e4.id === S2)) ? i2 : null,
    [P2, z2] = a.useState(false),
    A2 = void 0 !== t2 ? t2 : P2,
    M2 = e4 => {
      s2 ? s2(e4) : z2(e4);
    },
    I2 = !(!j2.trim() || !d2.some(e4 => e4.name.toLowerCase() === j2.trim().toLowerCase()));
  a.useEffect(() => {
    const e4 = async e5 => {
      const t3 = e5.detail;
      if (t3) try {
        const e6 = t3.name || l2("settings.custom.presets.imported_name", {
            time: (new Date()).toLocaleTimeString()
          }),
          a2 = t3.data || t3,
          s3 = await m2(e6, a2);
        s3 && s3.id && (await p2(s3.id), N2(s3.id), xe.info("settings", "Imported preset applied", {
          id: s3.id
        }));
      } catch (a2) {
        xe.error("settings", "Failed to import preset from share", a2);
      }
    };
    return window.addEventListener("dotify:import-preset-data", e4), () => {
      window.removeEventListener("dotify:import-preset-data", e4);
    };
  }, [p2]);
  const E2 = async () => {
    if (j2.trim() && c2) try {
      const e4 = {};
      ["background", "cover", "visualizer", "cursor", "slider"].forEach(t4 => {
        const a3 = x2(t4);
        a3 && (e4[t4] = a3.url);
      });
      const t3 = {
        themeSettings: c2.themeSettings,
        uiSettings: c2.uiSettings
      };
      Object.keys(e4).length > 0 && (t3.gifs = e4);
      const a2 = x2("background"),
        s3 = x2("cover"),
        n2 = (null == a2 ? void 0 : a2.url) || (null == s3 ? void 0 : s3.url);
      await m2(j2.trim(), t3, n2), xe.info("settings", "Preset saved", {
        name: j2.trim()
      }), w2(""), M2(false);
    } catch (e4) {
      xe.error("settings", "Failed to save preset", e4);
    } else xe.warn("settings", "Preset name required");
  };
  return n.jsxs("div", {
    className: "flex flex-col gap-3 w-full",
    children: [!e3 && n.jsxs("div", {
      className: "flex items-center justify-between gap-3 w-full",
      children: [n.jsx("span", {
        className: ds,
        children: l2("settings.custom.tabs.presets")
      }), n.jsx(ln, {
        actions: [{
          icon: n.jsx(Ne.download, {
            className: "h-4 w-4"
          }),
          label: l2("common.import"),
          onClick: async () => {
            try {
              await h2(), xe.info("settings", "Preset imported successfully");
            } catch (e4) {
              xe.error("settings", "Failed to import preset", e4);
            }
          }
        }, {
          icon: n.jsx(Ne.add, {
            className: "h-4 w-4"
          }),
          label: l2("common.create"),
          onClick: () => M2(!A2),
          active: A2
        }]
      })]
    }), n.jsx(r, {
      children: A2 && n.jsx(o.div, {
        initial: {
          opacity: 0,
          height: 0
        },
        animate: {
          opacity: 1,
          height: "auto"
        },
        exit: {
          opacity: 0,
          height: 0
        },
        className: "overflow-hidden",
        children: n.jsxs("div", {
          className: "flex items-center gap-2 py-1 w-full",
          children: [n.jsx(v, {
            placeholder: l2("settings.custom.presets.name_placeholder"),
            value: j2,
            onChange: e4 => w2(e4.target.value),
            autoFocus: true,
            onKeyDown: e4 => {
              "Enter" === e4.key && j2.trim() && !I2 && E2(), "Escape" === e4.key && M2(false);
            },
            className: ke("h-9 flex-1 rounded-xl px-3 text-xs focus:border-transparent focus-visible:border-transparent", I2 && "text-destructive")
          }), n.jsx(rn, {
            icon: n.jsx(Ne.check, {
              className: "h-4 w-4"
            }),
            label: l2("common.save"),
            disabled: !j2.trim() || I2,
            onConfirm: E2
          })]
        })
      })
    }), u2 ? n.jsx(y.Loading, {
      size: "sm",
      variant: "spinner",
      iconOnly: true,
      className: "py-8 w-full"
    }) : 0 === d2.length ? n.jsx("div", {
      className: "py-8 flex flex-col items-center justify-center text-center w-full",
      children: n.jsx(b, {
        variant: "package",
        title: l2("settings.custom.presets.empty"),
        subtitle: l2("settings.custom.presets.subtitle"),
        layout: "vertical"
      })
    }) : n.jsxs("div", {
      className: "flex flex-col gap-3",
      children: [C2 && n.jsx(on, {
        label: C2.name,
        actions: [{
          icon: n.jsx(Ne.check, {
            className: "h-4 w-4"
          }),
          label: l2("settings.custom.labels.apply"),
          onClick: () => {
            (async e4 => {
              try {
                await p2(e4), N2(e4), xe.info("settings", "Preset applied", {
                  id: e4
                });
              } catch (t3) {
                xe.error("settings", "Failed to apply preset", t3);
              }
            })(C2.id);
          }
        }, {
          icon: n.jsx(Ne.download, {
            className: "h-4 w-4"
          }),
          label: l2("settings.custom.export"),
          onClick: () => {
            g2(C2);
          }
        }, {
          icon: n.jsx(Ne.delete, {
            className: "h-4 w-4"
          }),
          label: l2("settings.custom.delete"),
          onClick: () => {
            (async e4 => {
              try {
                await f2(e4), _2(null), xe.info("settings", "Preset deleted", {
                  id: e4
                });
              } catch (t3) {
                xe.error("settings", "Failed to delete preset", t3);
              }
            })(C2.id);
          }
        }, {
          icon: n.jsx(Ne.close, {
            className: "h-4 w-4"
          }),
          label: l2("common.cancel"),
          onClick: () => _2(null)
        }]
      }), n.jsx("div", {
        className: "grid grid-cols-2 page-sm:grid-cols-3 page-md:grid-cols-4 gap-3.5 w-full py-1 select-none",
        children: d2.map(e4 => n.jsx(xn, {
          preset: e4,
          isApplied: k2 === e4.id,
          isSelected: S2 === e4.id,
          dimmed: !!S2 && S2 !== e4.id,
          onSelect: e5 => _2(S2 === e5.id ? null : e5.id)
        }, e4.id))
      })]
    })]
  });
}
const bn = e3 => {
  let t2 = "";
  const a2 = e3.byteLength;
  for (let s2 = 0; s2 < a2; s2 += 8192) t2 += String.fromCharCode(...e3.subarray(s2, s2 + 8192));
  return btoa(t2);
};
function jn() {
  var e3, t2, i2, l2, c2;
  const {
      t: d2
    } = le(),
    {
      items: u2,
      loading: m2,
      addItem: p2,
      removeItem: f2,
      setAssetUsage: g2,
      updateItem: x2
    } = Ke(s(e4 => ({
      items: e4.items,
      loading: e4.loading,
      addItem: e4.addItem,
      removeItem: e4.removeItem,
      setAssetUsage: e4.setAssetUsage,
      updateItem: e4.updateItem
    }))),
    [j2, w2] = a.useState(false),
    [k2, N2] = a.useState(""),
    [S2, _2] = a.useState(false),
    [C2, P2] = a.useState(null),
    [z2, A2] = a.useState("library"),
    {
      importPreset: M2
    } = an(),
    [I2, E2] = a.useState(false),
    [L2, T2] = a.useState({
      isDragging: false,
      url: null,
      x: 0,
      y: 0
    }),
    D2 = a.useMemo(() => {
      const e4 = {};
      return u2.forEach(t3 => {
        t3.is_active && t3.usage && !e4[t3.usage] && (e4[t3.usage] = t3);
      }), e4;
    }, [u2]),
    F2 = a.useMemo(() => {
      const e4 = new Set();
      return u2.filter(t3 => !e4.has(t3.url) && (e4.add(t3.url), true));
    }, [u2]),
    O2 = null != (e3 = F2.find(e4 => e4.id === C2)) ? e3 : null,
    $2 = a.useRef(null);
  a.useEffect(() => () => {
    var e4;
    null == (e4 = $2.current) || e4.call($2), window.__dotifyDraggingAsset && (window.__dotifyDraggingAsset = null, window.dispatchEvent(new CustomEvent("dotify:dragging-asset-state", {
      detail: {
        isDragging: false,
        url: null
      }
    })));
  }, []);
  const B2 = async e4 => {
      try {
        await async function (e5, t3) {
          var a2, s2, n2, i3;
          let l3 = e5.url;
          if (/^https?:/i.test(l3)) {
            if (!(await Ze())) throw new Error("Media proxy unavailable");
            l3 = He(l3);
          } else if (!/^(data:|blob:)/i.test(l3)) throw new Error("Unsupported media URL");
          const r2 = await fetch(l3);
          if (!r2.ok) throw new Error(`HTTP ${r2.status}`);
          const o2 = (r2.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
          if ("text/html" === o2 || "application/json" === o2) throw new Error("Expected media, received an error page");
          const c3 = e5.url.split(/[?#]/)[0],
            d3 = sn[o2] || (null == (s2 = null == (a2 = c3.match(nn)) ? void 0 : a2[1]) ? void 0 : s2.toLowerCase()) || (null == (i3 = null == (n2 = t3.match(nn)) ? void 0 : n2[1]) ? void 0 : i3.toLowerCase()) || ("video" === e5.type ? "mp4" : "gif" === e5.type ? "gif" : "png");
          let u3 = t3.replace(nn, "").replace(/[\x00-\x1f]/g, "").replace(/[. ]+$/, "");
          /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(u3) && (u3 = `_${u3}`);
          const m3 = new Uint8Array(await r2.arrayBuffer());
          if (!m3.length) throw new Error("Empty media response");
          const p3 = await Ye({
            filters: [{
              name: "Media",
              extensions: [d3]
            }],
            defaultPath: Qe(u3, d3)
          });
          return !!p3 && (await Je(p3, m3), true);
        }(e4, mn(e4, d2("settings.custom.media_file")));
      } catch (t3) {
        xe.error("settings", "Failed to download custom asset", t3), nt.error(d2("downloads.failed", {
          count: 1
        }));
      }
    },
    U2 = async () => {
      if (k2.trim()) try {
        const e4 = k2.endsWith(".gif") || k2.includes(".gif?"),
          t3 = k2.endsWith(".mp4") || k2.endsWith(".webm") ? "video" : e4 ? "gif" : "image";
        await p2(k2.trim(), t3), N2(""), _2(false);
      } catch (e4) {
        xe.error("settings", "Failed to add URL as custom asset", e4);
      }
    };
  return n.jsxs("div", {
    className: "flex flex-col gap-6 select-none animate-in fade-in duration-200 pb-8",
    children: [n.jsxs("div", {
      className: "flex flex-col",
      children: [n.jsx(hn, {
        activeByUsage: D2,
        onSetAssetUsage: g2,
        draggedUrl: L2.url,
        selectedUrl: null == O2 ? void 0 : O2.url
      }), (D2.background || D2.cover) && n.jsxs("div", {
        className: "mt-2 flex flex-col",
        children: [D2.background && n.jsxs(n.Fragment, {
          children: [n.jsx(ns, {
            label: d2("settings.custom.labels.background.blur"),
            children: n.jsx(wn, {
              value: null != (i2 = null == (t2 = D2.background.effects) ? void 0 : t2.blur) ? i2 : 0,
              min: 0,
              max: 50,
              step: 1,
              unit: "px",
              onChange: e4 => x2(D2.background.id, {
                effects: {
                  ...D2.background.effects,
                  blur: e4
                }
              })
            })
          }), n.jsx(ns, {
            label: d2("settings.custom.effects.dimming"),
            children: n.jsx(wn, {
              value: null != (c2 = null == (l2 = D2.background.effects) ? void 0 : l2.dimming) ? c2 : 0,
              min: 0,
              max: 100,
              step: 1,
              onChange: e4 => x2(D2.background.id, {
                effects: {
                  ...D2.background.effects,
                  dimming: e4
                }
              })
            })
          })]
        }), D2.cover && n.jsx(ns, {
          label: d2("settings.custom.modes.title"),
          children: n.jsx("div", {
            className: "w-56 shrink-0",
            children: n.jsx(h, {
              options: [{
                value: "always",
                label: d2("settings.custom.modes.always")
              }, {
                value: "fallback",
                label: d2("settings.custom.modes.fallback")
              }],
              value: D2.cover.mode || "always",
              onChange: e4 => x2(D2.cover.id, {
                mode: e4
              }),
              size: "sm",
              fullWidth: true
            })
          })
        })]
      })]
    }), n.jsx(is, {
      title: n.jsx("span", {
        className: "flex items-center gap-4",
        children: ["library", "presets"].map(e4 => n.jsx(Se, {
          variant: "quiet",
          onClick: () => A2(e4),
          "aria-current": z2 === e4 ? "page" : void 0,
          className: ke("h-auto gap-0 rounded-none p-0 text-headline font-semibold tracking-tight hover:bg-transparent", z2 === e4 ? "text-foreground" : "text-foreground/30 hover:text-foreground/60"),
          children: d2("library" === e4 ? "settings.custom.library" : "settings.custom.tabs.presets")
        }, e4))
      }),
      actions: "library" === z2 ? n.jsx(ln, {
        actions: [{
          icon: j2 ? n.jsx(_e, {
            className: "h-4 w-4 animate-spin"
          }) : n.jsx(Ne.upload, {
            className: "h-4 w-4"
          }),
          label: d2("settings.custom.upload"),
          onClick: async () => {
            var e4, t3;
            try {
              w2(true);
              const s2 = await it({
                multiple: true,
                filters: [{
                  name: "Media",
                  extensions: ["png", "jpg", "jpeg", "webp", "gif", "mp4", "webm"]
                }]
              });
              if (!s2) return;
              const n2 = Array.isArray(s2) ? s2 : [s2],
                {
                  readFile: i3
                } = await Ge(async () => {
                  const {
                    readFile: e5
                  } = await import("./globals-Bc3qFUyf.js").then(e6 => e6.gB);
                  return {
                    readFile: e5
                  };
                }, __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url);
              for (const l3 of n2) try {
                const a2 = null == (e4 = l3.split(".").pop()) ? void 0 : e4.toLowerCase(),
                  s3 = null == (t3 = l3.split(/[\\/]/).pop()) ? void 0 : t3.replace(/\.[^.]+$/, ""),
                  n3 = await i3(l3),
                  r2 = bn(n3);
                if ("gif" === a2) {
                  const e5 = `data:image/gif;base64,${r2}`;
                  await p2(e5, "gif", s3);
                } else if ("mp4" === a2 || "webm" === a2) {
                  const e5 = `data:${"mp4" === a2 ? "video/mp4" : "video/webm"};base64,${r2}`;
                  await p2(e5, "video", s3);
                } else {
                  const e5 = `data:${"png" === a2 ? "image/png" : "webp" === a2 ? "image/webp" : "image/jpeg"};base64,${r2}`;
                  await p2(e5, "image", s3);
                }
              } catch (a2) {
                xe.error("settings", "Failed to process file", a2);
              }
            } catch (s2) {
              xe.error("settings", "Failed to select files", s2);
            } finally {
              w2(false);
            }
          },
          disabled: j2
        }, {
          icon: n.jsx(Ne.link, {
            className: "h-4 w-4"
          }),
          label: d2("settings.custom.by_link"),
          onClick: () => _2(!S2),
          active: S2
        }]
      }) : n.jsx(ln, {
        actions: [{
          icon: n.jsx(Ne.download, {
            className: "h-4 w-4"
          }),
          label: d2("common.import"),
          onClick: async () => {
            try {
              await M2(), xe.info("settings", "Preset imported successfully");
            } catch (e4) {
              xe.error("settings", "Failed to import preset", e4);
            }
          }
        }, {
          icon: n.jsx(Ne.add, {
            className: "h-4 w-4"
          }),
          label: d2("common.create"),
          onClick: () => E2(!I2),
          active: I2
        }]
      }),
      children: n.jsxs("div", {
        className: "flex flex-col gap-3 w-full",
        children: ["library" === z2 && n.jsx(r, {
          children: S2 && n.jsx(o.div, {
            initial: {
              opacity: 0,
              height: 0
            },
            animate: {
              opacity: 1,
              height: "auto"
            },
            exit: {
              opacity: 0,
              height: 0
            },
            className: "overflow-hidden",
            children: n.jsxs("div", {
              className: "flex items-center gap-2 pt-1 pb-2 w-full",
              children: [n.jsx(v, {
                value: k2,
                onChange: e4 => N2(e4.target.value),
                placeholder: d2("settings.custom.url_placeholder"),
                className: "h-9 min-w-0 flex-1 rounded-xl px-3 text-xs focus:border-transparent focus-visible:border-transparent",
                onKeyDown: e4 => {
                  "Enter" === e4.key && U2(), "Escape" === e4.key && _2(false);
                },
                autoFocus: true
              }), n.jsx(rn, {
                icon: n.jsx(Ne.add, {
                  className: "h-4 w-4"
                }),
                label: d2("common.add"),
                disabled: !k2.trim(),
                onConfirm: () => {
                  U2(), _2(false);
                }
              })]
            })
          })
        }), n.jsx(r, {
          mode: "popLayout",
          children: "library" === z2 ? n.jsx(o.div, {
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
            children: m2 ? n.jsx(y.Loading, {
              size: "sm",
              variant: "spinner",
              iconOnly: true,
              className: "py-8 w-full"
            }) : 0 === F2.length ? n.jsx("div", {
              className: "py-8 flex flex-col items-center justify-center text-center w-full",
              children: n.jsx(b, {
                variant: "package",
                title: d2("settings.custom.empty"),
                subtitle: d2("settings.custom.empty_subtitle"),
                layout: "vertical"
              })
            }) : n.jsxs("div", {
              className: "flex flex-col gap-3",
              children: [O2 && n.jsx(on, {
                label: mn(O2, d2("settings.custom.media_file")),
                preview: n.jsx(dn, {
                  url: O2.url,
                  type: O2.type
                }),
                actions: [{
                  icon: n.jsx(Ne.download, {
                    className: "h-4 w-4"
                  }),
                  label: d2("common.download.default"),
                  onClick: () => {
                    B2(O2);
                  }
                }, {
                  icon: n.jsx(Ne.delete, {
                    className: "h-4 w-4"
                  }),
                  label: d2("settings.custom.delete"),
                  onClick: () => {
                    f2(O2.id), P2(null);
                  }
                }, {
                  icon: n.jsx(Ne.close, {
                    className: "h-4 w-4"
                  }),
                  label: d2("common.cancel"),
                  onClick: () => P2(null),
                  iconOnly: true
                }]
              }), n.jsx("div", {
                className: "grid grid-cols-[repeat(auto-fill,minmax(min(100%,140px),1fr))] gap-3.5 w-full py-1 select-none",
                children: F2.map(e4 => n.jsx(pn, {
                  asset: e4,
                  selected: C2 === e4.id,
                  dimmed: !!C2 && C2 !== e4.id,
                  onSelect: () => P2(C2 === e4.id ? null : e4.id),
                  onStartDrag: (e5, t3, a2) => ((e6, t4, a3) => {
                    T2({
                      isDragging: true,
                      url: e6,
                      x: t4,
                      y: a3
                    }), window.__dotifyDraggingAsset = e6, window.dispatchEvent(new CustomEvent("dotify:dragging-asset-state", {
                      detail: {
                        isDragging: true,
                        url: e6
                      }
                    }));
                    let s2 = null;
                    const n2 = () => {
                      s2 && cancelAnimationFrame(s2), window.removeEventListener("pointermove", i3), window.removeEventListener("pointerup", l3), window.removeEventListener("pointercancel", l3), $2.current = null;
                    };
                    $2.current = n2;
                    const i3 = e7 => {
                        s2 && cancelAnimationFrame(s2), s2 = requestAnimationFrame(() => {
                          T2(t6 => ({
                            ...t6,
                            x: e7.clientX,
                            y: e7.clientY
                          }));
                          const t5 = document.elementFromPoint(e7.clientX, e7.clientY),
                            a4 = null == t5 ? void 0 : t5.closest("[data-custom-usage]"),
                            s3 = null == a4 ? void 0 : a4.getAttribute("data-custom-usage");
                          window.dispatchEvent(new CustomEvent("dotify:custom-asset-hover", {
                            detail: {
                              usage: s3 || null
                            }
                          }));
                        });
                      },
                      l3 = t5 => {
                        n2();
                        const a4 = "pointercancel" === t5.type ? null : document.elementFromPoint(t5.clientX, t5.clientY),
                          s3 = null == a4 ? void 0 : a4.closest("[data-custom-usage]"),
                          i4 = null == s3 ? void 0 : s3.getAttribute("data-custom-usage");
                        window.dispatchEvent(new CustomEvent("dotify:custom-asset-drop", {
                          detail: {
                            url: e6,
                            usage: i4 || null
                          }
                        })), window.dispatchEvent(new CustomEvent("dotify:dragging-asset-state", {
                          detail: {
                            isDragging: false,
                            url: null
                          }
                        })), T2({
                          isDragging: false,
                          url: null,
                          x: 0,
                          y: 0
                        }), window.__dotifyDraggingAsset = null;
                      };
                    window.addEventListener("pointermove", i3, {
                      passive: true
                    }), window.addEventListener("pointerup", l3, {
                      passive: true
                    }), window.addEventListener("pointercancel", l3, {
                      passive: true
                    });
                  })(e5, t3, a2),
                  isDraggingCurrent: L2.isDragging && L2.url === e4.url,
                  t: d2
                }, e4.id))
              })]
            })
          }, "library") : n.jsx(o.div, {
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
            children: n.jsx(yn, {
              hideHeader: true,
              isCreating: I2,
              onToggleCreate: E2
            })
          }, "presets")
        })]
      })
    }), L2.isDragging && L2.url && n.jsx("div", {
      style: {
        position: "fixed",
        left: 0,
        top: 0,
        transform: `translate3d(${L2.x - 24}px, ${L2.y - 15}px, 0)`,
        width: 48,
        height: 30,
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform"
      },
      className: "rounded-lg overflow-hidden shadow-lg border border-border/40 select-none opacity-90",
      children: n.jsx(dn, {
        url: L2.url,
        eager: true
      })
    })]
  });
}
function wn(t2) {
  const a2 = e.c(16),
    {
      value: s2,
      min: i2,
      max: l2,
      step: r2,
      onChange: o2,
      unit: c2
    } = t2,
    d2 = void 0 === c2 ? "%" : c2;
  let u2, m2, p2, f2, g2;
  return a2[0] !== s2 ? (u2 = [s2], a2[0] = s2, a2[1] = u2) : u2 = a2[1], a2[2] !== o2 ? (m2 = e3 => o2(e3[0]), a2[2] = o2, a2[3] = m2) : m2 = a2[3], a2[4] !== l2 || a2[5] !== i2 || a2[6] !== r2 || a2[7] !== u2 || a2[8] !== m2 ? (p2 = n.jsx(x, {
    value: u2,
    onValueChange: m2,
    min: i2,
    max: l2,
    step: r2,
    className: "flex-1"
  }), a2[4] = l2, a2[5] = i2, a2[6] = r2, a2[7] = u2, a2[8] = m2, a2[9] = p2) : p2 = a2[9], a2[10] !== d2 || a2[11] !== s2 ? (f2 = n.jsxs("span", {
    className: "w-9 text-right text-footnote text-muted-foreground",
    children: [s2, d2]
  }), a2[10] = d2, a2[11] = s2, a2[12] = f2) : f2 = a2[12], a2[13] !== p2 || a2[14] !== f2 ? (g2 = n.jsxs("div", {
    className: "flex w-56 items-center gap-3",
    children: [p2, f2]
  }), a2[13] = p2, a2[14] = f2, a2[15] = g2) : g2 = a2[15], g2;
}
function kn(e3) {
  let t2 = e3.previews;
  if ("string" == typeof t2) try {
    t2 = JSON.parse(t2);
  } catch {
    t2 = [t2];
  }
  const a2 = e4 => (Array.isArray(e4) ? e4 : [e4]).filter(e5 => "string" == typeof e5 && Boolean(e5.trim())),
    s2 = a2(t2);
  if (s2.length) return Array.from(new Set(s2));
  const n2 = e3.content,
    i2 = a2((null == n2 ? void 0 : n2.gifs) && Object.values(n2.gifs)),
    l2 = a2(Array.isArray(null == n2 ? void 0 : n2.gifSettings) ? n2.gifSettings.map(e4 => null == e4 ? void 0 : e4.url) : []);
  return Array.from(new Set(i2.length ? i2 : l2.length ? l2 : a2((null == n2 ? void 0 : n2.preview_url) || (null == n2 ? void 0 : n2.background_url))));
}
function Nn({
  item: e3,
  isOwner: t2,
  isInstalled: s2,
  onDownload: i2,
  onDelete: l2,
  isTrying: r2,
  onTry: o2,
  onTag: c2
}) {
  var d2, u2;
  const {
      t: m2
    } = le(),
    [p2, f2] = a.useState(0),
    [g2, h2] = a.useState(false),
    v2 = lt(),
    [x2, y2] = a.useState(new Set()),
    b2 = null != r2 ? r2 : g2,
    j2 = a.useMemo(() => kn(e3), [e3.previews, e3.content]),
    w2 = a.useMemo(() => {
      switch (e3.type) {
        case "theme":
          return rt;
        case "background":
          return Re;
        case "equalizer":
          return Ne.equalizer;
        default:
          return Ne.box;
      }
    }, [e3.type]),
    k2 = a.useMemo(() => {
      const t3 = e3.downloads || 0;
      return t3 > 1e3 ? `${(t3 / 1e3).toFixed(1)}k` : t3;
    }, [e3.downloads]),
    N2 = j2.length > 0 && !x2.has(j2[p2]),
    S2 = "background" === e3.type || "wallpaper" === e3.type,
    _2 = a.useMemo(() => {
      var t3;
      return (null == (t3 = e3.content) ? void 0 : t3.background_url) || j2[0];
    }, [e3.content, j2]),
    C2 = Ke(e4 => !(!S2 || !_2) && e4.items.some(e5 => e5.url === _2)),
    P2 = S2 ? C2 : s2;
  return n.jsxs("div", {
    "data-workshop-card": true,
    className: "group/card relative flex select-none flex-col justify-between overflow-hidden rounded-2xl bg-plate",
    children: [n.jsxs("div", {
      onClick: () => {
        j2.length > 1 && f2(e4 => (e4 + 1) % j2.length);
      },
      className: ke("relative w-full overflow-hidden", N2 ? "aspect-video" : "h-14", j2.length > 1 && "cursor-pointer"),
      children: [N2 ? n.jsx("img", {
        src: j2[p2],
        alt: e3.name,
        className: "w-full h-full object-cover transition-transform duration-300 pointer-events-none",
        loading: "lazy",
        onError: () => y2(e4 => new Set(e4).add(j2[p2]))
      }) : n.jsx("div", {
        className: "flex h-full w-full items-center justify-center",
        children: n.jsx(w2, {
          className: "h-8 w-8 text-muted-foreground/30"
        })
      }), j2.length > 1 && n.jsx("div", {
        className: "absolute bottom-2 inset-x-0 flex items-center justify-center gap-1 z-10 pointer-events-none",
        children: j2.map((e4, t3) => n.jsx("div", {
          className: ke("h-1 rounded-full transition-all", t3 === p2 ? "w-3 bg-white" : "w-1 bg-white/40")
        }, t3))
      })]
    }), n.jsxs("div", {
      className: "p-3 flex flex-col gap-3 flex-1 justify-between",
      children: [n.jsxs("div", {
        className: "space-y-1",
        children: [n.jsxs("div", {
          className: "flex items-center justify-between gap-2",
          children: [n.jsxs("div", {
            className: "flex items-center gap-1.5 min-w-0 flex-1",
            children: [n.jsx("span", {
              className: "inline-flex shrink-0",
              children: n.jsx(w2, {
                className: "h-4 w-4 text-foreground/80"
              })
            }), n.jsx(Ns, {
              hoverScope: "[data-workshop-card]",
              containerClassName: "min-w-0",
              className: "text-sm font-semibold text-foreground",
              children: e3.name
            })]
          }), n.jsxs("div", {
            className: "flex items-center gap-1 text-caption text-muted-foreground/70 shrink-0",
            children: [n.jsx(Ne.download, {
              className: "h-3 w-3"
            }), n.jsx("span", {
              children: k2
            })]
          })]
        }), n.jsx("div", {
          className: "text-xs text-muted-foreground/65",
          children: e3.id.startsWith("web_") ? n.jsxs("span", {
            className: "inline-flex items-center gap-1 text-foreground/80 font-medium",
            children: ["@", (null == (d2 = e3.author) ? void 0 : d2.username) || "Web"]
          }) : `@${(null == (u2 = e3.author) ? void 0 : u2.username) || "dotify"}`
        }), e3.description && e3.description.trim().length > 0 && n.jsx("p", {
          className: "line-clamp-2 break-words pt-1 text-footnote text-muted-foreground/70",
          children: e3.description.replace(/\s+/g, " ").trim()
        }), e3.tags && e3.tags.length > 0 && n.jsx("div", {
          className: "flex items-center gap-1 flex-wrap pt-1",
          children: Array.from(new Set(e3.tags)).slice(0, 3).map((e4, t3) => n.jsxs(Se, {
            variant: "link",
            size: "2xs",
            className: "h-auto px-1 py-0.5 text-micro font-normal text-muted-foreground/60 no-underline hover:text-foreground hover:no-underline",
            onClick: () => null == c2 ? void 0 : c2(e4),
            children: ["#", e4]
          }, `${e4}-${t3}`))
        })]
      }), n.jsxs("div", {
        className: "mt-auto flex items-center gap-2 pt-1",
        children: [P2 ? n.jsxs("div", {
          className: "flex min-w-0 flex-1 items-center gap-1.5 text-footnote text-muted-foreground",
          children: [n.jsx(Ne.check, {
            className: "h-4 w-4 shrink-0"
          }), n.jsx("span", {
            className: "truncate",
            children: m2(S2 ? "workshop.in_library" : "workshop.installed")
          }), n.jsx(Se, {
            type: "button",
            variant: "quiet",
            size: "icon-xs",
            "aria-label": m2("workshop.delete"),
            className: "shrink-0 hover:text-destructive",
            onClick: () => i2(e3),
            children: n.jsx(Ne.close, {
              className: "h-3.5 w-3.5"
            })
          })]
        }) : n.jsxs(Se, {
          type: "button",
          variant: "secondary",
          size: "sm",
          className: "flex-1",
          onClick: () => i2(e3),
          children: [S2 ? n.jsx(Ne.add, {
            className: "h-4 w-4 shrink-0"
          }) : n.jsx(Ne.download, {
            className: "h-4 w-4 shrink-0"
          }), m2(S2 ? "workshop.add_to_library" : "workshop.download")]
        }), n.jsx(Se, {
          type: "button",
          variant: b2 ? "default" : "quiet",
          size: "icon",
          shape: "circle",
          onClick: t3 => {
            if (t3.stopPropagation(), o2) o2(e3);else {
              if (g2) return;
              h2(true), window.dispatchEvent(new CustomEvent("apply-workshop-preset", {
                detail: {
                  preset: e3,
                  temporary: true,
                  duration: 8e3
                }
              })), v2(() => h2(false), 8e3);
            }
          },
          "aria-label": m2(b2 ? "workshop.stop_trying" : "workshop.try"),
          className: ke("shrink-0", !b2 && "text-muted-foreground hover:text-foreground"),
          children: b2 ? n.jsx(Ne.hide, {
            className: "h-4 w-4"
          }) : n.jsx(Ne.show, {
            className: "h-4 w-4"
          })
        }), t2 && !e3.id.startsWith("web_") && n.jsx(Se, {
          type: "button",
          variant: "quiet",
          size: "icon",
          shape: "circle",
          className: "shrink-0 text-muted-foreground hover:text-destructive",
          onClick: t3 => {
            t3.stopPropagation(), l2(e3.id);
          },
          "aria-label": m2("workshop.delete"),
          children: n.jsx(Ne.delete, {
            className: "h-4 w-4"
          })
        })]
      })]
    })]
  });
}
function Sn(t2) {
  const a2 = e.c(7),
    {
      title: s2,
      hint: i2
    } = t2;
  let l2, r2, o2;
  return a2[0] !== s2 ? (l2 = n.jsx("div", {
    className: "text-body sm:text-headline font-medium text-foreground leading-snug",
    children: s2
  }), a2[0] = s2, a2[1] = l2) : l2 = a2[1], a2[2] !== i2 ? (r2 = n.jsx("div", {
    className: "text-callout text-muted-foreground/70 leading-normal",
    children: i2
  }), a2[2] = i2, a2[3] = r2) : r2 = a2[3], a2[4] !== l2 || a2[5] !== r2 ? (o2 = n.jsxs("div", {
    className: "space-y-0.5",
    children: [l2, r2]
  }), a2[4] = l2, a2[5] = r2, a2[6] = o2) : o2 = a2[6], o2;
}
function _n({
  onPublished: e3,
  onPublish: t2,
  onCancel: s2,
  t: i2
}) {
  const {
      presets: l2
    } = an(),
    r2 = ks(e4 => e4.customPresets),
    [c2, d2] = a.useState("preset"),
    [u2, m2] = a.useState(null),
    [p2, f2] = a.useState(null),
    [g2, x2] = a.useState(""),
    [b2, w2] = a.useState(""),
    [k2, N2] = a.useState(""),
    [S2, _2] = a.useState([]),
    [C2, P2] = a.useState(false),
    [z2, A2] = a.useState(null);
  a.useEffect(() => {
    "preset" === c2 && l2.length > 0 && !u2 ? (m2(l2[0].id), x2(l2[0].name)) : "equalizer" === c2 && r2.length > 0 && !p2 && (f2(r2[0].id || r2[0].name), x2(r2[0].name));
  }, [c2, l2, r2, u2, p2]);
  const M2 = e4 => {
      m2(e4.id), x2(e4.name), A2(null);
    },
    I2 = e4 => {
      _2(t3 => t3.filter(t4 => t4 !== e4));
    },
    E2 = g2.trim().length > 0 && ("preset" === c2 ? !!u2 : !!p2);
  return n.jsxs(o.div, {
    initial: {
      opacity: 0,
      y: 6
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -6
    },
    transition: {
      duration: 0.2
    },
    className: "flex flex-col select-none pb-6 space-y-4",
    children: [n.jsx(j, {
      onClick: () => {
        C2 || s2();
      },
      label: i2("workshop.publish.back"),
      className: "self-start"
    }), n.jsx(h, {
      options: [{
        value: "preset",
        label: i2("workshop.categories.presets"),
        icon: Ne.box
      }, {
        value: "equalizer",
        label: i2("workshop.categories.equalizer"),
        icon: Ne.equalizer
      }],
      value: c2,
      onChange: e4 => {
        d2(e4), A2(null);
      },
      size: "md",
      fullWidth: true
    }), n.jsx(cs, {
      className: "my-3.5"
    }), n.jsxs("div", {
      className: "space-y-3",
      children: [n.jsx(Sn, {
        title: i2(`workshop.publish.types.${c2}.title`),
        hint: i2(`workshop.publish.types.${c2}.subtitle`)
      }), "preset" === c2 ? 0 === l2.length ? n.jsx("div", {
        className: "py-6 w-full flex justify-center",
        children: n.jsx(y.Empty, {
          layout: "vertical",
          size: "sm",
          title: i2("workshop.publish.no_presets")
        })
      }) : n.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full pt-0.5",
        children: l2.map(e4 => n.jsx(xn, {
          preset: e4,
          mode: "select",
          isSelected: u2 === e4.id,
          onSelect: M2
        }, e4.id))
      }) : 0 === r2.length ? n.jsx("div", {
        className: "py-6 w-full flex justify-center",
        children: n.jsx(y.Empty, {
          layout: "vertical",
          size: "sm",
          title: i2("workshop.publish.empty.equalizer")
        })
      }) : n.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full pt-0.5",
        children: r2.map(e4 => {
          var t3;
          const a2 = e4.id || e4.name,
            s3 = p2 === a2;
          return n.jsx(vn, {
            selected: s3,
            onClick: () => {
              return f2((t4 = e4).id || t4.name), x2(t4.name), void A2(null);
              var t4;
            },
            leading: n.jsx(Ne.equalizer, {
              className: "h-4 w-4 text-primary"
            }),
            trailing: n.jsx("span", {
              className: "text-micro text-muted-foreground/70",
              children: i2("workshop.publish.bands_count", {
                count: (null == (t3 = e4.bands) ? void 0 : t3.length) || 0
              })
            }),
            title: e4.name,
            subtitle: i2("workshop.publish.equalizer_label")
          }, a2);
        })
      })]
    }), n.jsx(cs, {
      className: "my-3.5"
    }), n.jsxs("div", {
      className: "space-y-2",
      children: [n.jsx(Sn, {
        title: i2("workshop.publish.name.label"),
        hint: i2("workshop.publish.name.hint")
      }), n.jsx(v, {
        placeholder: i2("workshop.publish.name.placeholder"),
        maxLength: 100,
        value: g2,
        onChange: e4 => {
          x2(e4.target.value), A2(null);
        },
        className: "h-9 text-xs rounded-xl w-full bg-plate border-border/20 px-3 focus:border-border/40"
      })]
    }), n.jsx(cs, {
      className: "my-3.5"
    }), n.jsxs("div", {
      className: "space-y-2",
      children: [n.jsx(Sn, {
        title: i2("workshop.publish.description.label"),
        hint: i2("workshop.publish.description.hint")
      }), n.jsx(Ss, {
        className: "min-h-[72px] resize-none text-xs rounded-xl w-full bg-plate border-border/20 p-3 focus:border-border/40",
        placeholder: i2("workshop.publish.description.placeholder"),
        maxLength: 1e3,
        value: b2,
        onChange: e4 => w2(e4.target.value)
      })]
    }), n.jsx(cs, {
      className: "my-3.5"
    }), n.jsxs("div", {
      className: "space-y-2",
      children: [n.jsxs("div", {
        className: "flex items-center justify-between",
        children: [n.jsx(Sn, {
          title: i2("workshop.publish.tags.label"),
          hint: i2("workshop.publish.tags.hint")
        }), n.jsxs("span", {
          className: "text-footnote text-muted-foreground/70 self-start pt-0.5",
          children: [S2.length, "/5"]
        })]
      }), n.jsxs("div", {
        className: "space-y-2 w-full",
        children: [S2.length > 0 && n.jsx("div", {
          className: "flex flex-wrap gap-1.5",
          children: S2.map(e4 => n.jsxs("span", {
            className: "inline-flex items-center gap-1 h-6 px-2.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-medium",
            children: ["#", e4, n.jsx(Se, {
              type: "button",
              variant: "ghost",
              size: "icon-2xs",
              onClick: () => I2(e4),
              className: "h-4 w-4 text-primary hover:text-primary hover:opacity-75",
              "aria-label": i2("common.delete"),
              children: n.jsx(Ne.close, {
                className: "h-3 w-3"
              })
            })]
          }, e4))
        }), n.jsx(v, {
          placeholder: S2.length >= 5 ? i2("workshop.publish.tags.limit") : i2("workshop.publish.tags.placeholder"),
          value: k2,
          onChange: e4 => N2(e4.target.value),
          onKeyDown: e4 => {
            "Enter" === e4.key || "," === e4.key ? (e4.preventDefault(), (e5 => {
              const t3 = e5.trim().replace(/^#/, "").toLowerCase();
              t3 && (S2.length >= 5 ? A2(i2("workshop.publish.tags_limit")) : S2.includes(t3) || (_2(e6 => [...e6, t3]), N2(""), A2(null)));
            })(k2)) : "Backspace" === e4.key && !k2 && S2.length > 0 && I2(S2[S2.length - 1]);
          },
          disabled: S2.length >= 5,
          className: "h-9 text-xs rounded-xl w-full bg-plate border-border/20 px-3 focus:border-border/40"
        })]
      })]
    }), z2 && n.jsxs("div", {
      className: "flex items-center gap-2 p-2.5 rounded-xl bg-destructive/10 border border-destructive/25 text-destructive text-xs font-medium animate-in fade-in duration-200",
      children: [n.jsx(ot, {
        className: "h-4 w-4 shrink-0"
      }), n.jsx("span", {
        children: z2
      })]
    }), n.jsx("div", {
      className: "pt-3 w-full border-t border-border/15",
      children: n.jsx(Se, {
        onClick: async () => {
          var a2;
          if (A2(null), !g2.trim()) return void A2(i2("workshop.publish.name_required"));
          let s3 = null;
          if ("preset" === c2) {
            const e4 = l2.find(e5 => e5.id === u2);
            if (!e4) return void A2(i2("workshop.publish.select_preset"));
            let t3 = [];
            e4.thumbnail ? t3 = [e4.thumbnail] : (null == (a2 = e4.data) ? void 0 : a2.gifs) && (t3 = Object.values(e4.data.gifs).filter(e5 => "string" == typeof e5 && e5.startsWith("http"))), t3 = t3.slice(0, 10), s3 = {
              name: g2.trim(),
              description: b2.trim() || void 0,
              tags: S2.length > 0 ? S2 : void 0,
              post_type: "preset",
              content: e4.data,
              preview_urls: t3.length > 0 ? t3 : void 0
            };
          } else {
            const e4 = r2.find(e5 => (e5.id || e5.name) === p2);
            if (!e4) return void A2(i2("workshop.publish.select_equalizer"));
            s3 = {
              name: g2.trim(),
              description: b2.trim() || void 0,
              tags: S2.length > 0 ? S2 : void 0,
              post_type: "equalizer",
              content: {
                name: e4.name,
                bands: e4.bands
              }
            };
          }
          P2(true);
          try {
            await ct.workshop.publishItem(s3), xe.info("settings", "Item published to workshop successfully", {
              name: s3.name
            }), e3 && e3(), t2 && t2();
          } catch (n2) {
            A2(n2.message || i2("workshop.publish.failed"));
          } finally {
            P2(false);
          }
        },
        disabled: !E2,
        variant: "primary",
        size: "sm",
        className: "w-full rounded-xl text-xs font-semibold",
        children: C2 ? n.jsxs(n.Fragment, {
          children: [n.jsx(_e, {
            className: "h-4 w-4 animate-spin"
          }), n.jsx("span", {
            children: i2("workshop.publish.publishing")
          })]
        }) : n.jsxs(n.Fragment, {
          children: [n.jsx(Ne.upload, {
            className: "h-3.5 w-3.5"
          }), n.jsx("span", {
            children: i2("workshop.publish.button")
          })]
        })
      })
    })]
  });
}
function Cn(e3, t2) {
  var a2;
  const s2 = {
    ...(e3 || {})
  };
  return "string" == typeof s2.tabs && (s2.tabs = {
    position: s2.tabs,
    style: (null == (a2 = null == t2 ? void 0 : t2.tabs) ? void 0 : a2.style) || "standard"
  }), "number" == typeof s2.scale ? s2.scale = {
    default: [s2.scale],
    maximized: [s2.scale]
  } : Array.isArray(s2.scale) ? s2.scale = {
    default: s2.scale,
    maximized: s2.scale
  } : s2.scale && "object" == typeof s2.scale ? s2.scale = {
    default: Array.isArray(s2.scale.default) ? s2.scale.default : ["number" == typeof s2.scale.default ? s2.scale.default : 100],
    maximized: Array.isArray(s2.scale.maximized) ? s2.scale.maximized : ["number" == typeof s2.scale.maximized ? s2.scale.maximized : 100]
  } : s2.scale = (null == t2 ? void 0 : t2.scale) || {
    default: [100],
    maximized: [100]
  }, s2;
}
function Pn() {
  const {
      t: e3
    } = le(),
    t2 = dt(),
    {
      presets: i2,
      savePreset: l2,
      deletePreset: r2
    } = an(),
    {
      applyExternalPreset: o2,
      customPresets: c2
    } = ks(s(e4 => ({
      applyExternalPreset: e4.applyExternalPreset,
      customPresets: e4.customPresets
    }))),
    [d2, u2] = a.useState([]);
  a.useRef(d2).current = d2;
  const [m2, p2] = a.useState(true),
    [f2, g2] = a.useState(0),
    [h2, v2] = a.useState("all"),
    [x2, y2] = a.useState(false),
    [j2, w2] = a.useState(1),
    [k2, N2] = a.useState(false),
    [S2, _2] = a.useState("all"),
    C2 = a.useRef(null);
  ut(C2, {
    wheelDelta: 0.9,
    anyWheel: true
  });
  const [P2, z2] = a.useState("popular"),
    [A2, M2] = a.useState(""),
    I2 = mt(A2, 500),
    [E2, L2] = a.useState("list"),
    T2 = a.useRef(0),
    D2 = a.useRef(null),
    [F2, O2] = a.useState(null),
    $2 = a.useRef(null),
    B2 = a.useRef(null),
    U2 = a.useCallback(() => {
      if (B2.current && (clearTimeout(B2.current), B2.current = null), $2.current) {
        try {
          $2.current();
        } catch (e4) {
          xe.error("settings", "Failed to revert workshop preview trial", e4);
        }
        $2.current = null;
      }
      O2(null);
    }, []);
  a.useEffect(() => () => {
    U2();
  }, [U2]);
  const R2 = [{
      value: "popular"
    }, {
      value: "newest"
    }, {
      value: "downloads"
    }],
    q2 = a.useMemo(() => d2.filter(e4 => "theme" !== e4.type && ("all" === h2 || ("background" === h2 ? "background" === e4.type || "wallpaper" === e4.type || "image" === e4.type : e4.type === h2))), [d2, h2]),
    V2 = a.useCallback(e4 => {
      var t3;
      if ("equalizer" === e4.type) return c2.some(t4 => t4.name === e4.name || t4.id === `workshop_${e4.id}`);
      if ("background" === e4.type || "wallpaper" === e4.type) {
        const a2 = Ke.getState().getActiveItem("background"),
          s2 = (null == (t3 = e4.content) ? void 0 : t3.background_url) || kn(e4)[0];
        return Boolean((null == a2 ? void 0 : a2.url) && s2 && a2.url === s2);
      }
      return i2.some(t4 => t4.name === e4.name);
    }, [i2, c2]),
    W2 = a.useCallback(async (e4 = 1, t3 = false, a2, s2, n2) => {
      const i3 = t3 ? T2.current : ++T2.current;
      if (t3) {
        if (D2.current === i3) return;
        D2.current = i3, y2(true);
      } else p2(true), y2(false), w2(1);
      try {
        const l3 = n2 && "all" !== n2 ? n2 : void 0,
          r3 = await ct.workshop.getItems(e4, 20, a2, s2, l3);
        if (i3 !== T2.current) return;
        t3 ? u2(e5 => [...e5, ...r3.items]) : (u2(r3.items), v2(null != n2 ? n2 : "all"), g2(i3)), N2(r3.has_more), w2(e4);
      } catch (l3) {
        i3 === T2.current && xe.error("settings", "Failed to load workshop items", l3);
      } finally {
        D2.current === i3 && (D2.current = null), i3 === T2.current && (p2(false), y2(false));
      }
    }, []),
    K2 = a.useRef(null),
    G2 = a.useCallback(() => {
      T2.current++;
    }, []);
  a.useEffect(() => (W2(1, false, I2, P2, S2), G2), [I2, P2, S2, W2, G2]), a.useEffect(() => {
    const e4 = K2.current;
    if (!e4) return;
    let t3 = e4.parentElement;
    for (; t3;) {
      const e5 = window.getComputedStyle(t3),
        a3 = e5.overflowY || e5.overflow || "";
      if (a3.includes("auto") || a3.includes("scroll")) break;
      t3 = t3.parentElement;
    }
    t3 || (t3 = document.documentElement);
    let a2 = false;
    const s2 = () => {
      t3 && (a2 || (window.requestAnimationFrame(() => {
        if (a2 = false, !t3) return;
        const e5 = t3.scrollTop;
        t3.scrollHeight - e5 <= t3.clientHeight + 150 && !m2 && !x2 && k2 && W2(j2 + 1, true, I2, P2, S2);
      }), a2 = true));
    };
    return t3.addEventListener("scroll", s2, {
      passive: true
    }), () => {
      null == t3 || t3.removeEventListener("scroll", s2);
    };
  }, [m2, x2, k2, j2, I2, P2, S2, W2]);
  const Z2 = async e4 => {
      var t3, a2, s2, n2, d3;
      try {
        const m3 = e4.content;
        if (!m3) return;
        if ("equalizer" === e4.type) {
          const t4 = c2.find(t5 => t5.name === e4.name || t5.id === `workshop_${e4.id}`);
          if (t4) return ks.getState().removePreset(t4.id), void xe.info("settings", "Workshop EQ preset uninstalled", {
            name: e4.name
          });
          const a3 = [32, 64, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 12e3, 16e3, 2e4],
            s3 = Array.isArray(m3.bands) ? m3.bands.map(e5 => ({
              frequency: Number(e5.frequency),
              gain: Number(e5.gain)
            })) : m3.bands && "object" == typeof m3.bands ? Object.entries(m3.bands).map(([e5, t5]) => ({
              frequency: Number(e5),
              gain: Number(t5)
            })) : Array.isArray(m3.gains) ? m3.gains.map((e5, t5) => {
              var s4;
              return {
                frequency: null != (s4 = a3[t5]) ? s4 : t5,
                gain: Number(e5)
              };
            }) : [];
          return s3.length > 0 && o2({
            id: `workshop_${e4.id}`,
            name: e4.name,
            bands: s3
          }), e4.id.startsWith("autoeq_") || (await ct.workshop.downloadItem(e4.id), u2(t5 => t5.map(t6 => t6.id === e4.id ? {
            ...t6,
            downloads: t6.downloads + 1
          } : t6))), void xe.info("settings", "Workshop EQ preset applied", {
            name: e4.name
          });
        }
        if ("background" === e4.type || "wallpaper" === e4.type) {
          const s3 = m3.background_url || kn(e4)[0];
          if (s3) {
            const n3 = Ke.getState(),
              i3 = null == (t3 = null == n3 ? void 0 : n3.items) ? void 0 : t3.find(e5 => e5.url === s3);
            if (i3) return (null == n3 ? void 0 : n3.removeItem) && (await n3.removeItem(i3.id)), (null == n3 ? void 0 : n3.getActiveItem) && (null == (a2 = n3.getActiveItem("background")) ? void 0 : a2.url) === s3 && (await n3.setAssetUsage("", "background", false)), void xe.info("settings", "Workshop background removed from library", {
              name: e4.name
            });
            if (null == n3 ? void 0 : n3.addItem) {
              const e5 = s3.toLowerCase().includes(".gif") || Boolean(m3.is_gif);
              await n3.addItem(s3, e5 ? "gif" : "image").catch(() => {});
            }
          }
          return e4.id.startsWith("web_") || (await ct.workshop.downloadItem(e4.id).catch(() => {})), u2(t4 => t4.map(t5 => t5.id === e4.id ? {
            ...t5,
            downloads: t5.downloads + 1
          } : t5)), void xe.info("settings", "Workshop background added to library", {
            name: e4.name
          });
        }
        const p3 = i2.find(t4 => t4.name === e4.name);
        if (p3) return await r2(p3.id), void xe.info("settings", "Workshop preset uninstalled", {
          name: e4.name
        });
        const f3 = {
          ...(m3.gifs || {})
        };
        m3.gifSettings && Array.isArray(m3.gifSettings) && m3.gifSettings.forEach(e5 => {
          e5.usage && e5.url && (f3[e5.usage] = e5.url);
        });
        let g3 = {};
        const h3 = ve.getState().settings,
          v3 = (null == (s2 = m3.themeSettings) ? void 0 : s2.theme) || m3.theme || "dark",
          x3 = m3.themeSettings || {
            ...(null == h3 ? void 0 : h3.themeSettings),
            theme: v3
          },
          y3 = Cn(m3.uiSettings || m3.ui, null == h3 ? void 0 : h3.uiSettings);
        g3 = {
          themeSettings: {
            ...(null == h3 ? void 0 : h3.themeSettings),
            ...x3,
            theme: v3
          },
          uiSettings: y3
        };
        const b2 = {
          name: e4.name,
          theme: v3,
          themeSettings: g3.themeSettings,
          ui: y3,
          uiSettings: y3,
          gifs: f3
        };
        await l2(e4.name, b2, kn(e4)[0]), v3 && v3.startsWith("custom_") && (await (null == (d3 = (n2 = ve.getState()).loadCustomThemes) ? void 0 : d3.call(n2))), await ve.getState().updateSettings(g3);
        const j3 = Ke.getState();
        (null == j3 ? void 0 : j3.setAssetUsage) && (f3.background && (await j3.setAssetUsage(f3.background, "background", true).catch(() => {})), f3.cover && (await j3.setAssetUsage(f3.cover, "cover", true).catch(() => {})), f3.visualizer && (await j3.setAssetUsage(f3.visualizer, "visualizer", true).catch(() => {})), f3.cursor && (await j3.setAssetUsage(f3.cursor, "cursor", true).catch(() => {})), f3.slider && (await j3.setAssetUsage(f3.slider, "slider", true).catch(() => {}))), window.dispatchEvent(new CustomEvent("preset-applied")), await ct.workshop.downloadItem(e4.id).catch(() => {}), u2(t4 => t4.map(t5 => t5.id === e4.id ? {
          ...t5,
          downloads: t5.downloads + 1
        } : t5)), xe.info("settings", "Workshop preset downloaded and applied", {
          name: e4.name
        });
      } catch (m3) {
        xe.error("settings", "Failed to download workshop item", m3);
      }
    },
    H2 = async e4 => {
      try {
        await ct.workshop.deleteItem(e4), u2(t3 => t3.filter(t4 => t4.id !== e4)), xe.info("settings", "Workshop item deleted", {
          id: e4
        });
      } catch (t3) {
        xe.error("settings", "Failed to delete workshop item", t3);
      }
    },
    Y2 = a.useCallback(async e4 => {
      var t3, a2, s2;
      if (F2 !== e4.id) {
        U2();
        try {
          const n2 = "object" == typeof e4.content && null !== e4.content ? e4.content : {};
          if ("equalizer" === e4.type) {
            const t4 = [32, 64, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 12e3, 16e3, 2e4],
              a3 = Array.isArray(n2.bands) ? n2.bands.map(e5 => ({
                frequency: Number(e5.frequency),
                gain: Number(e5.gain)
              })) : n2.bands && "object" == typeof n2.bands ? Object.entries(n2.bands).map(([e5, t5]) => ({
                frequency: Number(e5),
                gain: Number(t5)
              })) : Array.isArray(n2.gains) ? n2.gains.map((e5, a4) => {
                var s3;
                return {
                  frequency: null != (s3 = t4[a4]) ? s3 : a4,
                  gain: Number(e5)
                };
              }) : [];
            if (a3.length > 0) {
              const t5 = ks.getState().currentPresetId,
                s3 = [...ks.getState().bands];
              o2({
                id: `preview_${e4.id}`,
                name: e4.name,
                bands: a3
              }), $2.current = () => {
                ks.getState().setBands(s3), pt.save("eq_preset", t5), ks.setState({
                  currentPresetId: t5
                });
              }, O2(e4.id), B2.current = setTimeout(() => {
                U2();
              }, 8e3);
            }
            return;
          }
          if ("background" === e4.type || "wallpaper" === e4.type || e4.id.startsWith("web_")) {
            const t4 = n2.background_url || kn(e4)[0];
            if (t4) {
              const a3 = Ke.getState(),
                s3 = (null == a3 ? void 0 : a3.getActiveItem) ? a3.getActiveItem("background") : void 0,
                n3 = (null == s3 ? void 0 : s3.url) || null;
              (null == a3 ? void 0 : a3.setAssetUsage) && (await a3.setAssetUsage(t4, "background", true)), $2.current = () => {
                const e5 = Ke.getState();
                (null == e5 ? void 0 : e5.setAssetUsage) && (n3 ? e5.setAssetUsage(n3, "background", true) : e5.setAssetUsage("", "background", false));
              }, O2(e4.id), B2.current = setTimeout(() => {
                U2();
              }, 8e3);
            }
            return;
          }
          const i3 = ve.getState().settings;
          if (i3) {
            const l3 = JSON.parse(JSON.stringify(i3)),
              r3 = Ke.getState(),
              o3 = (null == r3 ? void 0 : r3.getActiveItem) ? r3.getActiveItem("background") : void 0,
              c3 = (null == o3 ? void 0 : o3.url) || null,
              d3 = n2.playerSettings || n2.themeSettings || n2.uiSettings,
              u3 = n2.theme || n2.ui;
            let m3 = {
                ...i3.themeSettings
              },
              p3 = {
                ...i3.uiSettings
              };
            d3 ? (m3 = {
              ...i3.themeSettings,
              ...n2.themeSettings,
              theme: (null == (t3 = n2.themeSettings) ? void 0 : t3.theme) || "dark"
            }, p3 = Cn(n2.uiSettings, i3.uiSettings)) : u3 && (m3 = {
              ...i3.themeSettings,
              theme: (null == (a2 = n2.themeSettings) ? void 0 : a2.theme) || n2.theme || "dark"
            }, p3 = Cn(n2.uiSettings || n2.ui, i3.uiSettings)), ve.getState().updateSettings({
              themeSettings: m3,
              uiSettings: p3
            });
            const f3 = (null == (s2 = n2.gifs) ? void 0 : s2.background) || n2.background_gif || n2.background || n2.background_url || kn(e4)[0];
            if (f3 && "string" == typeof f3) {
              const e5 = f3.startsWith("http") || f3.startsWith("data:") ? f3 : `asset://gifs/${f3}`;
              (null == r3 ? void 0 : r3.setAssetUsage) && (await r3.setAssetUsage(e5, "background", true));
            }
            $2.current = () => {
              l3 && ve.getState().updateSettings(l3);
              const e5 = Ke.getState();
              (null == e5 ? void 0 : e5.setAssetUsage) && (c3 ? e5.setAssetUsage(c3, "background", true) : e5.setAssetUsage("", "background", false));
            }, O2(e4.id), B2.current = setTimeout(() => {
              U2();
            }, 8e3);
          }
        } catch (n2) {
          xe.error("settings", "Failed to preview workshop item", n2), U2();
        }
      } else U2();
    }, [F2, U2, o2]);
  a.useEffect(() => {
    const e4 = e5 => {
      const t3 = e5.detail,
        a2 = (null == t3 ? void 0 : t3.preset) || t3;
      a2 && Y2(a2);
    };
    return window.addEventListener("apply-workshop-preset", e4), () => window.removeEventListener("apply-workshop-preset", e4);
  }, [Y2]);
  const Q2 = [{
    id: "all",
    label: e3("workshop.categories.all")
  }, {
    id: "preset",
    label: e3("workshop.categories.presets")
  }, {
    id: "background",
    label: e3("workshop.categories.backgrounds")
  }, {
    id: "equalizer",
    label: e3("workshop.categories.equalizer")
  }];
  return n.jsx("div", {
    ref: K2,
    className: "w-full select-none",
    children: "publish" === E2 ? n.jsx(_n, {
      presets: i2,
      onPublish: () => {
        L2("list"), W2(1, false, I2, P2, S2);
      },
      onCancel: () => L2("list"),
      t: e3
    }) : n.jsxs("div", {
      className: "space-y-4",
      children: [n.jsxs("div", {
        className: "mb-2 flex w-full flex-col gap-3",
        children: [n.jsxs("div", {
          className: "flex w-full items-center gap-2",
          children: [n.jsx("div", {
            className: "min-w-0 flex-1",
            children: n.jsx(ys, {
              value: A2,
              onChange: M2,
              placeholder: e3("workshop.search_placeholder"),
              className: "h-9"
            })
          }), n.jsx(Se, {
            variant: "quiet",
            size: "sm",
            className: "h-9 w-36 shrink-0 px-2.5 font-medium text-foreground",
            onClick: () => z2(e4 => {
              const t3 = R2.findIndex(t4 => t4.value === e4);
              return R2[(t3 + 1) % R2.length].value;
            }),
            children: e3(`workshop.sort.${P2}`)
          })]
        }), n.jsxs("div", {
          className: "flex w-full items-center gap-3",
          children: [n.jsx("div", {
            ref: C2,
            className: "min-w-0 flex-1 overflow-x-auto scrollbar-none [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]",
            children: n.jsx(ws, {
              size: "md",
              tone: "soft",
              value: S2,
              onChange: _2,
              options: Q2.map(e4 => ({
                value: e4.id,
                label: e4.label
              })),
              className: "w-max pr-6"
            })
          }), n.jsxs(Se, {
            variant: "primary",
            size: "sm",
            shape: "pill",
            className: "h-9 shrink-0 gap-1.5 px-4 text-xs",
            onClick: () => L2("publish"),
            children: [n.jsx(Ne.upload, {
              className: "h-3.5 w-3.5"
            }), n.jsx("span", {
              children: e3("workshop.publish.button")
            })]
          })]
        })]
      }), n.jsx(js, {
        contentKey: f2,
        pending: m2 && 0 === d2.length,
        className: "w-full",
        placeholder: n.jsx("div", {
          className: "w-full pb-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-4 pt-1 select-none",
          children: Array.from({
            length: 4
          }).map((e4, t3) => n.jsxs("div", {
            className: "flex flex-col overflow-hidden rounded-2xl bg-plate",
            children: [n.jsx("div", {
              className: "aspect-video w-full bg-hover"
            }), n.jsxs("div", {
              className: "flex flex-col gap-3 p-3",
              children: [n.jsxs("div", {
                className: "flex items-center justify-between gap-2",
                children: [n.jsx("div", {
                  className: "h-4 w-1/2 rounded-md bg-selected"
                }), n.jsx("div", {
                  className: "h-3 w-12 rounded-md bg-hover"
                })]
              }), n.jsx("div", {
                className: "h-3 w-1/3 rounded-md bg-hover"
              }), n.jsxs("div", {
                className: "flex items-center gap-2 pt-1",
                children: [n.jsx("div", {
                  className: "h-9 flex-1 rounded-lg bg-hover"
                }), n.jsx("div", {
                  className: "h-9 w-24 shrink-0 rounded-lg bg-hover"
                })]
              })]
            })]
          }, t3))
        }),
        children: 0 === q2.length ? n.jsx("div", {
          className: "min-h-[260px] flex flex-col items-center justify-center text-center w-full py-12",
          children: n.jsx(b, {
            variant: "inventory",
            title: e3("workshop.empty.workshop_title"),
            subtitle: e3("workshop.empty.workshop_subtitle"),
            layout: "vertical"
          })
        }) : n.jsx("div", {
          className: "w-full pb-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-4 pt-1",
          children: q2.map(e4 => n.jsx(Nn, {
            item: e4,
            isOwner: e4.author.id === (null == t2 ? void 0 : t2.id),
            isInstalled: V2(e4),
            isTrying: F2 === e4.id,
            onTry: Y2,
            onDownload: Z2,
            onDelete: H2,
            onTag: e5 => M2(`#${e5}`)
          }, e4.id))
        })
      })]
    })
  });
}
function zn(t2) {
  const a2 = e.c(24),
    {
      tabs: s2,
      activeTab: i2,
      onChange: r2,
      className: c2
    } = t2,
    d2 = l.useRef(null);
  let u2, m2, p2, f2, g2, h2, v2, x2, y2, b2, j2;
  if (a2[0] === Symbol.for("react.memo_cache_sentinel") ? (u2 = {
    wheelDelta: 0.8
  }, a2[0] = u2) : u2 = a2[0], a2[1] !== s2.length ? (m2 = [s2.length], a2[1] = s2.length, a2[2] = m2) : m2 = a2[2], ut(d2, u2, m2), a2[3] === Symbol.for("react.memo_cache_sentinel") ? (p2 = {
    axis: "x"
  }, a2[3] = p2) : p2 = a2[3], w(d2, p2), a2[4] === Symbol.for("react.memo_cache_sentinel") ? (f2 = () => {
    if (!d2.current) return;
    const e3 = d2.current.querySelector('[data-active="true"]');
    e3 && e3.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  }, a2[4] = f2) : f2 = a2[4], a2[5] !== i2 ? (g2 = [i2], a2[5] = i2, a2[6] = g2) : g2 = a2[6], l.useEffect(f2, g2), a2[7] !== c2 ? (h2 = ke("mb-4 select-none w-full overflow-x-auto no-scrollbar", "[&[data-more-after]]:[mask-image:linear-gradient(to_right,black_calc(100%-40px),transparent)]", "[&[data-more-before]]:[mask-image:linear-gradient(to_right,transparent,black_40px)]", "[&[data-more-before][data-more-after]]:[mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)]", c2), a2[7] = c2, a2[8] = h2) : h2 = a2[8], a2[9] !== i2 || a2[10] !== r2 || a2[11] !== s2) {
    let e3;
    a2[13] !== i2 || a2[14] !== r2 ? (e3 = e4 => {
      const t3 = i2 === e4.id;
      return n.jsxs("button", {
        type: "button",
        "data-active": t3,
        onClick: () => r2(e4.id),
        className: ke("relative h-8 rounded-full flex items-center justify-center gap-1.5 text-callout transition-colors duration-150 outline-none cursor-pointer border-none bg-transparent whitespace-nowrap z-10 select-none", "flex-1 shrink-0 px-3", t3 ? "text-background font-semibold" : "text-muted-foreground/60 hover:text-foreground font-medium"),
        children: [t3 && n.jsx(o.div, {
          layoutId: "subnav-active-pill",
          className: "absolute inset-0 bg-foreground rounded-full -z-10",
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 38
          }
        }), (() => {
          if (!e4.icon) return null;
          if (l.isValidElement(e4.icon)) return n.jsx("span", {
            className: "flex shrink-0 items-center",
            children: e4.icon
          });
          const t4 = e4.icon;
          return n.jsx(t4, {
            className: "w-4 h-4 shrink-0"
          });
        })(), n.jsx("span", {
          className: "tracking-tight",
          children: e4.label
        })]
      }, e4.id);
    }, a2[13] = i2, a2[14] = r2, a2[15] = e3) : e3 = a2[15], v2 = s2.map(e3), a2[9] = i2, a2[10] = r2, a2[11] = s2, a2[12] = v2;
  } else v2 = a2[12];
  return a2[16] !== v2 ? (x2 = n.jsx("div", {
    className: "flex w-max min-w-full items-center gap-0.5 rounded-full bg-plate p-1",
    children: v2
  }), a2[16] = v2, a2[17] = x2) : x2 = a2[17], a2[18] !== h2 || a2[19] !== x2 ? (y2 = n.jsx("div", {
    ref: d2,
    className: h2,
    children: x2
  }), a2[18] = h2, a2[19] = x2, a2[20] = y2) : y2 = a2[20], a2[21] === Symbol.for("react.memo_cache_sentinel") ? (b2 = n.jsx("div", {
    className: "w-full h-px bg-border/20 mb-6"
  }), a2[21] = b2) : b2 = a2[21], a2[22] !== y2 ? (j2 = n.jsxs("div", {
    className: "w-full",
    children: [y2, b2]
  }), a2[22] = y2, a2[23] = j2) : j2 = a2[23], j2;
}
function An() {
  const t2 = e.c(49),
    {
      t: s2
    } = le(),
    i2 = oe(In),
    l2 = oe(Mn);
  let r2;
  t2[0] !== i2 ? (r2 = () => "tabs" === i2 || "appearance.tabs" === i2 ? "tabs" : "custom" === i2 || "appearance.custom" === i2 ? "custom" : "workshop" === i2 || "appearance.workshop" === i2 ? "workshop" : "interface", t2[0] = i2, t2[1] = r2) : r2 = t2[1];
  const o2 = r2,
    [c2, d2] = a.useState(o2);
  let u2, m2, p2;
  t2[2] !== i2 ? (u2 = () => {
    if ((null == i2 ? void 0 : i2.startsWith("appearance.")) || ["interface", "tabs", "custom", "workshop"].includes(i2)) {
      const e3 = i2.includes(".") ? i2.split(".")[1] : i2;
      ["interface", "tabs", "custom", "workshop"].includes(e3) && d2(e3);
    }
  }, m2 = [i2], t2[2] = i2, t2[3] = u2, t2[4] = m2) : (u2 = t2[3], m2 = t2[4]), a.useEffect(u2, m2), t2[5] !== l2 ? (p2 = e3 => {
    d2(e3), l2(`appearance.${e3}`);
  }, t2[5] = l2, t2[6] = p2) : p2 = t2[6];
  const f2 = p2;
  let g2, h2, v2, x2, y2, b2, j2, w2, k2;
  t2[7] !== s2 ? (g2 = s2("settings.tabs.appearance.interface"), t2[7] = s2, t2[8] = g2) : g2 = t2[8], t2[9] !== g2 ? (h2 = {
    id: "interface",
    label: g2,
    icon: rt
  }, t2[9] = g2, t2[10] = h2) : h2 = t2[10], t2[11] !== s2 ? (v2 = s2("settings.tabs.appearance.tabs"), t2[11] = s2, t2[12] = v2) : v2 = t2[12], t2[13] !== v2 ? (x2 = {
    id: "tabs",
    label: v2,
    icon: ft
  }, t2[13] = v2, t2[14] = x2) : x2 = t2[14], t2[15] !== s2 ? (y2 = s2("settings.tabs.appearance.custom"), t2[15] = s2, t2[16] = y2) : y2 = t2[16], t2[17] !== y2 ? (b2 = {
    id: "custom",
    label: y2,
    icon: gt
  }, t2[17] = y2, t2[18] = b2) : b2 = t2[18], t2[19] !== s2 ? (j2 = s2("settings.tabs.appearance.workshop"), t2[19] = s2, t2[20] = j2) : j2 = t2[20], t2[21] !== j2 ? (w2 = {
    id: "workshop",
    label: j2,
    icon: Ne.store
  }, t2[21] = j2, t2[22] = w2) : w2 = t2[22], t2[23] !== w2 || t2[24] !== h2 || t2[25] !== x2 || t2[26] !== b2 ? (k2 = [h2, x2, b2], t2[23] = w2, t2[24] = h2, t2[25] = x2, t2[26] = b2, t2[27] = k2) : k2 = t2[27];
  const N2 = k2;
  let S2;
  t2[28] !== c2 || t2[29] !== f2 || t2[30] !== N2 ? (S2 = n.jsx(zn, {
    tabs: N2,
    activeTab: c2,
    onChange: f2
  }), t2[28] = c2, t2[29] = f2, t2[30] = N2, t2[31] = S2) : S2 = t2[31];
  const _2 = String(c2);
  let C2, P2, z2, A2, M2, I2;
  return t2[32] !== c2 ? (C2 = "interface" === c2 && n.jsx(en, {}), t2[32] = c2, t2[33] = C2) : C2 = t2[33], t2[34] !== c2 ? (P2 = "tabs" === c2 && n.jsx(tn, {}), t2[34] = c2, t2[35] = P2) : P2 = t2[35], t2[36] !== c2 ? (z2 = "custom" === c2 && n.jsx(jn, {}), t2[36] = c2, t2[37] = z2) : z2 = t2[37], t2[38] !== c2 ? (A2 = "workshop" === c2 && n.jsx(Pn, {}), t2[38] = c2, t2[39] = A2) : A2 = t2[39], t2[40] !== _2 || t2[41] !== C2 || t2[42] !== P2 || t2[43] !== z2 || t2[44] !== A2 ? (M2 = n.jsxs(ht, {
    id: _2,
    className: "w-full",
    children: [C2, P2, z2, A2]
  }), t2[40] = _2, t2[41] = C2, t2[42] = P2, t2[43] = z2, t2[44] = A2, t2[45] = M2) : M2 = t2[45], t2[46] !== S2 || t2[47] !== M2 ? (I2 = n.jsxs("div", {
    className: "w-full pb-8",
    children: [S2, M2]
  }), t2[46] = S2, t2[47] = M2, t2[48] = I2) : I2 = t2[48], I2;
}
function Mn(e3) {
  return e3.setLastSettingsTab;
}
function In(e3) {
  return e3.lastSettingsTab;
}
const En = ["youtube", "soundcloud", "spotify", "deezer", "applemusic"],
  Ln = {
    youtube: ["googlevideo.com", "youtube.com", "youtu.be", "youtubei.googleapis.com"],
    spotify: ["audio-ak-spotify-com.akamaized.net", "audio-fa.scdn.co", "spclient.wg.spotify.com", "api.spotify.com", "ap.spotify.com", "spotify.com"],
    soundcloud: ["api-v2.soundcloud.com", "cf-hls-media.sndcdn.com", "cf-media.sndcdn.com", "media.sndcdn.com", "soundcloud.com"],
    deezer: ["deezer.com", "dzcdn.net"],
    applemusic: ["music.apple.com", "play.itunes.apple.com", "audio-ssl.itunes.apple.com", "itunes.apple.com"]
  },
  Tn = {
    youtube: ["i.ytimg.com", "ytimg.com", "ggpht.com"],
    spotify: ["i.scdn.co", "mosaic.scdn.co", "image-cdn-ak.spotifycdn.com", "scdn.co"],
    soundcloud: ["i1.sndcdn.com", "i2.sndcdn.com", "sndcdn.com"],
    deezer: ["e-cdns-images.dzcdn.net", "cdns-images.dzcdn.net", "dzcdn.net"],
    applemusic: ["is1-ssl.mzstatic.com", "is2-ssl.mzstatic.com", "is3-ssl.mzstatic.com", "is4-ssl.mzstatic.com", "mzstatic.com"]
  };
function Dn(e3) {
  return Array.from(new Set(e3.filter(Boolean)));
}
function Fn(e3, t2) {
  return Dn([...(t2.tracks ? Ln[e3] : []), ...(t2.covers ? Tn[e3] : [])]);
}
function On() {
  var e3, t2, s2, n2;
  const {
      t: i2
    } = le(),
    {
      toggleServiceProxy: l2
    } = k(),
    {
      checkAccess: r2,
      getPremiumIcon: o2,
      showPremiumDialog: c2
    } = _s(),
    d2 = a.useRef(true),
    u2 = ve(e4 => e4.serviceSettings),
    m2 = ve(e4 => e4.isLoading),
    p2 = ve(e4 => e4.integrationSettings),
    f2 = ve(e4 => e4.updateIntegrationSettings),
    g2 = ve(e4 => e4.updateServiceSettings),
    h2 = null == p2 ? void 0 : p2.zapret,
    v2 = (null == (e3 = null == u2 ? void 0 : u2.proxy) ? void 0 : e3.proxy_mode) || "internal",
    x2 = (null == (t2 = null == u2 ? void 0 : u2.proxy) ? void 0 : t2.url) || "",
    [y2, b2] = a.useState(x2),
    [j2, w2] = a.useState(true),
    [N2, S2] = a.useState(""),
    [_2, C2] = a.useState(false),
    [P2, z2] = a.useState("unknown"),
    [A2, M2] = a.useState(false);
  a.useEffect(() => {
    x2 && !_2 && b2(x2);
  }, [x2]), a.useEffect(() => (d2.current = true, () => {
    d2.current = false;
  }), []);
  const I2 = a.useCallback(async () => {
    var e4, t3;
    const a2 = null == (t3 = null == (e4 = ve.getState().integrationSettings) ? void 0 : e4.zapret) ? void 0 : t3.path;
    if (a2) try {
      const e5 = await he.getZapretStatus(a2);
      z2(e5.running ? "running" : "stopped");
    } catch {
      z2("unknown");
    } else z2("unknown");
  }, []);
  a.useEffect(() => {
    "zapret" === v2 && (null == h2 ? void 0 : h2.path) && I2();
  }, [v2, null == h2 ? void 0 : h2.path, I2]), a.useEffect(() => {
    if ("personal" !== v2 || !y2) return w2(true), void S2("");
    const e4 = setTimeout(() => {
      (async () => {
        C2(true);
        try {
          const e5 = await he.validateProxyUrl(y2);
          d2.current && (w2(e5.valid), S2(e5.reason || ""));
        } catch (e5) {
          xe.error("proxy", "Validation error", e5);
        } finally {
          d2.current && C2(false);
        }
      })();
    }, 400);
    return () => clearTimeout(e4);
  }, [y2, v2]);
  const E2 = async () => {
      try {
        const e4 = await it({
          directory: true,
          multiple: false,
          title: i2("settings.integrations.proxy.zapret.select_folder")
        });
        if (e4 && "string" == typeof e4) {
          if ((await he.validateZapretPath(e4)).valid) return await f2({
            zapret: {
              ...h2,
              path: e4,
              enabled: true
            }
          }), e4;
          xe.warn("zapret", "Invalid zapret directory:", e4);
        }
      } catch (e4) {
        xe.error("zapret", "Choose folder error", e4);
      }
      return null;
    },
    L2 = async () => {
      try {
        const e4 = await he.detectZapretPath();
        if (e4.found && e4.path) return await f2({
          zapret: {
            ...h2,
            path: e4.path,
            enabled: true
          }
        }), e4.path;
      } catch (e4) {
        xe.error("zapret", "Detect path error", e4);
      }
      return null;
    },
    T2 = async () => {
      if (u2) try {
        b2(""), w2(true), S2(""), await g2({
          proxy: {
            url: "",
            proxy_mode: "disabled"
          }
        }), await he.stopPersonalProxy(), setTimeout(() => {
          he.relaunchApp();
        }, 1500);
      } catch (e4) {
        xe.error("settings", "Failed to clear personal proxy", e4);
      }
    },
    D2 = async (e4, t3, a2) => {
      const s3 = null == h2 ? void 0 : h2.path;
      if ("zapret" !== v2 || !s3) return;
      const n3 = Fn(e4, {
        [t3]: true
      });
      if (0 !== n3.length) try {
        if (await he.updateZapretDomains(s3, n3, a2 ? "update_domains" : "remove_domains"), a2) {
          (await he.getZapretStatus(s3)).running || (await he.controlZapretService(s3, "start"), I2());
        }
      } catch (i3) {
        xe.error("zapret", `Failed to sync ${t3} domains`, i3);
      }
    };
  return {
    t: i2,
    isLoading: m2,
    serviceSettings: u2,
    proxyMode: v2,
    proxyUrlInput: y2,
    setProxyUrlInput: b2,
    isValidUrl: j2,
    validationError: N2,
    isValidating: _2,
    zapretPath: null == h2 ? void 0 : h2.path,
    zapretStatus: P2,
    isZapretLoading: A2,
    canUseInternalProxy: r2(1),
    canUseStorageDelivery: r2(2),
    getPremiumIcon: o2,
    showPremiumDialog: c2,
    showInternalConfig: "internal" === v2 || "disabled" === v2,
    showZapretServices: "zapret" === v2 && Boolean(null == h2 ? void 0 : h2.path),
    streamDelivery: (null == (s2 = null == u2 ? void 0 : u2.proxy) ? void 0 : s2.stream_delivery) || "direct",
    hasSavedProxy: Boolean(x2),
    proxyCoversEnabled: Boolean(null == (n2 = null == u2 ? void 0 : u2.proxy) ? void 0 : n2.proxy_covers),
    handleSwitchMode: async e4 => {
      var t3, a2;
      if (u2 && e4 !== v2) try {
        if (await g2({
          proxy: {
            proxy_mode: e4
          }
        }), "personal" !== v2 || "internal" !== e4 && "disabled" !== e4 && "zapret" !== e4 || (await he.stopPersonalProxy(), setTimeout(() => {
          he.relaunchApp();
        }, 1500)), "zapret" === v2 && ("internal" === e4 || "personal" === e4 || "disabled" === e4)) try {
          const e5 = null == (a2 = null == (t3 = ve.getState().integrationSettings) ? void 0 : t3.zapret) ? void 0 : a2.path;
          e5 && (await he.controlZapretService(e5, "stop"));
        } catch (s3) {
          xe.error("settings", "Failed to stop zapret service", s3);
        }
        if ("zapret" === e4) {
          let e5 = null == h2 ? void 0 : h2.path;
          if (e5 || (e5 = await L2(), e5 || (e5 = await E2())), e5) try {
            const t4 = [];
            for (const e6 of En) {
              const a3 = null == u2 ? void 0 : u2[e6];
              t4.push(...Fn(e6, {
                tracks: Boolean(null == a3 ? void 0 : a3.use_proxy),
                covers: Boolean(null == a3 ? void 0 : a3.proxy_covers)
              }));
            }
            t4.length > 0 && (await he.updateZapretDomains(e5, Dn(t4), "update_domains")), await he.controlZapretService(e5, "start"), I2();
          } catch (n3) {
            xe.error("zapret", "Auto start error", n3);
          }
        }
      } catch (i3) {
        xe.error("settings", "Failed to switch proxy mode", i3);
      }
    },
    handleSavePersonalProxy: async () => {
      if (u2) if (y2.trim()) {
        if (j2) try {
          await g2({
            proxy: {
              url: y2
            }
          });
          (await he.startPersonalProxy(y2)).success && setTimeout(() => {
            he.relaunchApp();
          }, 1500);
        } catch (e4) {
          xe.error("settings", "Failed to save personal proxy", e4);
        }
      } else await T2();
    },
    handleClearPersonalProxy: T2,
    toggleProxyCovers: async e4 => {
      u2 && (await g2({
        proxy: {
          ...u2.proxy,
          proxy_covers: e4
        }
      }));
    },
    handleToggleServiceProxy: async e4 => {
      var t3;
      await l2(e4);
      let a2 = false;
      if (u2) {
        a2 = !((null == (t3 = u2[e4]) ? void 0 : t3.use_proxy) || false), await g2({
          [e4]: {
            ...u2[e4],
            use_proxy: a2
          }
        });
      }
      await D2(e4, "tracks", a2);
    },
    handleToggleServiceProxyCovers: async e4 => {
      var t3;
      let a2 = false;
      if (u2) {
        a2 = !((null == (t3 = u2[e4]) ? void 0 : t3.proxy_covers) || false), await g2({
          [e4]: {
            ...u2[e4],
            proxy_covers: a2
          }
        });
      }
      await D2(e4, "covers", a2);
    },
    setStreamDelivery: async e4 => {
      u2 && (await g2({
        proxy: {
          ...u2.proxy,
          stream_delivery: e4
        }
      }));
    },
    handleChooseZapretPath: E2,
    handleDetectZapretPath: L2,
    handleZapretServiceControl: async e4 => {
      const t3 = null == h2 ? void 0 : h2.path;
      if (t3) {
        M2(true);
        try {
          await he.controlZapretService(t3, e4), await I2();
        } catch (a2) {
          xe.error("zapret", "Service control error", a2);
        } finally {
          M2(false);
        }
      }
    }
  };
}
function $n(t2) {
  const a2 = e.c(45),
    {
      proxyMode: s2,
      streamDelivery: i2,
      onSetDelivery: l2,
      canUseStorageDelivery: r2,
      showPremiumDialog: o2
    } = t2,
    {
      t: c2
    } = le();
  let d2;
  a2[0] !== c2 ? (d2 = c2("integrations.proxy.delivery.title"), a2[0] = c2, a2[1] = d2) : d2 = a2[1];
  const u2 = "disabled" === s2 && "opacity-40 pointer-events-none select-none";
  let m2;
  a2[2] !== u2 ? (m2 = ke(u2), a2[2] = u2, a2[3] = m2) : m2 = a2[3];
  const p2 = "proxy" === i2;
  let f2;
  a2[4] !== l2 ? (f2 = () => l2("proxy"), a2[4] = l2, a2[5] = f2) : f2 = a2[5];
  const g2 = "disabled" === s2;
  let h2, v2, x2, y2;
  a2[6] !== c2 ? (h2 = c2("integrations.proxy.delivery.proxy_title"), a2[6] = c2, a2[7] = h2) : h2 = a2[7], a2[8] !== c2 ? (v2 = c2("integrations.proxy.delivery.proxy_description"), a2[8] = c2, a2[9] = v2) : v2 = a2[9], a2[10] !== p2 || a2[11] !== f2 || a2[12] !== g2 || a2[13] !== h2 || a2[14] !== v2 ? (x2 = n.jsx(os, {
    layout: "horizontal",
    icon: vt,
    isSelected: p2,
    onTap: f2,
    disabled: g2,
    title: h2,
    subtitle: v2
  }), a2[10] = p2, a2[11] = f2, a2[12] = g2, a2[13] = h2, a2[14] = v2, a2[15] = x2) : x2 = a2[15], a2[16] !== r2 || a2[17] !== o2 || a2[18] !== c2 ? (y2 = !r2 && n.jsx(Cs, {
    level: 2,
    onClick: () => o2(c2("integrations.proxy.delivery.storage_feature"), 2),
    className: "rounded-2xl"
  }), a2[16] = r2, a2[17] = o2, a2[18] = c2, a2[19] = y2) : y2 = a2[19];
  const b2 = "storage" === i2;
  let j2;
  a2[20] !== r2 || a2[21] !== l2 || a2[22] !== o2 || a2[23] !== c2 ? (j2 = () => {
    r2 ? l2("storage") : o2(c2("integrations.proxy.delivery.storage_feature"), 2);
  }, a2[20] = r2, a2[21] = l2, a2[22] = o2, a2[23] = c2, a2[24] = j2) : j2 = a2[24];
  const w2 = "disabled" === s2;
  let k2, N2, S2, _2, C2, P2;
  return a2[25] !== c2 ? (k2 = c2("integrations.proxy.delivery.storage_title"), a2[25] = c2, a2[26] = k2) : k2 = a2[26], a2[27] !== c2 ? (N2 = c2("integrations.proxy.delivery.storage_description"), a2[27] = c2, a2[28] = N2) : N2 = a2[28], a2[29] !== b2 || a2[30] !== j2 || a2[31] !== w2 || a2[32] !== k2 || a2[33] !== N2 ? (S2 = n.jsx(os, {
    layout: "horizontal",
    icon: xt,
    isSelected: b2,
    onTap: j2,
    disabled: w2,
    title: k2,
    subtitle: N2
  }), a2[29] = b2, a2[30] = j2, a2[31] = w2, a2[32] = k2, a2[33] = N2, a2[34] = S2) : S2 = a2[34], a2[35] !== y2 || a2[36] !== S2 ? (_2 = n.jsxs("div", {
    className: "relative w-full",
    children: [y2, S2]
  }), a2[35] = y2, a2[36] = S2, a2[37] = _2) : _2 = a2[37], a2[38] !== _2 || a2[39] !== x2 ? (C2 = n.jsxs("div", {
    className: "flex flex-col gap-2 w-full select-none",
    children: [x2, _2]
  }), a2[38] = _2, a2[39] = x2, a2[40] = C2) : C2 = a2[40], a2[41] !== d2 || a2[42] !== C2 || a2[43] !== m2 ? (P2 = n.jsx(is, {
    title: d2,
    className: m2,
    children: C2
  }), a2[41] = d2, a2[42] = C2, a2[43] = m2, a2[44] = P2) : P2 = a2[44], P2;
}
function Bn(t2) {
  const a2 = e.c(66),
    {
      proxyMode: s2,
      onSwitchMode: i2,
      zapretPath: l2,
      zapretStatus: r2,
      isZapretLoading: o2,
      onChooseZapretPath: c2,
      onDetectZapretPath: d2,
      onZapretServiceControl: u2
    } = t2,
    {
      t: m2
    } = le();
  let p2;
  a2[0] !== m2 ? (p2 = m2("integrations.proxy.mode_title"), a2[0] = m2, a2[1] = p2) : p2 = a2[1];
  const f2 = "disabled" === s2;
  let g2, h2, v2, x2;
  a2[2] !== i2 ? (g2 = () => i2("disabled"), a2[2] = i2, a2[3] = g2) : g2 = a2[3], a2[4] !== m2 ? (h2 = m2("integrations.proxy.mode_disabled"), a2[4] = m2, a2[5] = h2) : h2 = a2[5], a2[6] !== m2 ? (v2 = m2("integrations.proxy.mode_disabled_desc"), a2[6] = m2, a2[7] = v2) : v2 = a2[7], a2[8] !== f2 || a2[9] !== g2 || a2[10] !== h2 || a2[11] !== v2 ? (x2 = n.jsx(os, {
    layout: "horizontal",
    icon: Ne.off,
    isSelected: f2,
    onTap: g2,
    title: h2,
    subtitle: v2
  }), a2[8] = f2, a2[9] = g2, a2[10] = h2, a2[11] = v2, a2[12] = x2) : x2 = a2[12];
  const y2 = "internal" === s2;
  let b2, j2, w2, k2;
  a2[13] !== i2 ? (b2 = () => i2("internal"), a2[13] = i2, a2[14] = b2) : b2 = a2[14], a2[15] !== m2 ? (j2 = m2("integrations.proxy.mode_internal"), a2[15] = m2, a2[16] = j2) : j2 = a2[16], a2[17] !== m2 ? (w2 = m2("integrations.proxy.mode_internal_desc"), a2[17] = m2, a2[18] = w2) : w2 = a2[18], a2[19] !== w2 || a2[20] !== y2 || a2[21] !== b2 || a2[22] !== j2 ? (k2 = n.jsx(os, {
    layout: "horizontal",
    icon: bt,
    isSelected: y2,
    onTap: b2,
    title: j2,
    subtitle: w2
  }), a2[19] = w2, a2[20] = y2, a2[21] = b2, a2[22] = j2, a2[23] = k2) : k2 = a2[23];
  const N2 = "personal" === s2;
  let S2, _2, C2, P2;
  a2[24] !== i2 ? (S2 = () => i2("personal"), a2[24] = i2, a2[25] = S2) : S2 = a2[25], a2[26] !== m2 ? (_2 = m2("integrations.proxy.mode_personal"), a2[26] = m2, a2[27] = _2) : _2 = a2[27], a2[28] !== m2 ? (C2 = m2("integrations.proxy.mode_personal_desc"), a2[28] = m2, a2[29] = C2) : C2 = a2[29], a2[30] !== N2 || a2[31] !== S2 || a2[32] !== _2 || a2[33] !== C2 ? (P2 = n.jsx(os, {
    layout: "horizontal",
    icon: Xe,
    isSelected: N2,
    onTap: S2,
    title: _2,
    subtitle: C2
  }), a2[30] = N2, a2[31] = S2, a2[32] = _2, a2[33] = C2, a2[34] = P2) : P2 = a2[34];
  const z2 = "zapret" === s2;
  let A2, M2, I2, E2, L2, T2, D2, F2;
  return a2[35] !== i2 ? (A2 = () => i2("zapret"), a2[35] = i2, a2[36] = A2) : A2 = a2[36], a2[37] !== m2 ? (M2 = m2("integrations.proxy.mode_zapret"), a2[37] = m2, a2[38] = M2) : M2 = a2[38], a2[39] !== m2 ? (I2 = m2("integrations.proxy.mode_zapret_desc"), a2[39] = m2, a2[40] = I2) : I2 = a2[40], a2[41] !== z2 || a2[42] !== A2 || a2[43] !== M2 || a2[44] !== I2 ? (E2 = n.jsx(os, {
    layout: "horizontal",
    icon: Ne.globe,
    isSelected: z2,
    onTap: A2,
    title: M2,
    subtitle: I2
  }), a2[41] = z2, a2[42] = A2, a2[43] = M2, a2[44] = I2, a2[45] = E2) : E2 = a2[45], a2[46] !== k2 || a2[47] !== P2 || a2[48] !== E2 || a2[49] !== x2 ? (L2 = n.jsxs("div", {
    className: "flex flex-col gap-2 w-full select-none",
    children: [x2, k2, P2, E2]
  }), a2[46] = k2, a2[47] = P2, a2[48] = E2, a2[49] = x2, a2[50] = L2) : L2 = a2[50], a2[51] !== p2 || a2[52] !== L2 ? (T2 = n.jsx(is, {
    title: p2,
    children: L2
  }), a2[51] = p2, a2[52] = L2, a2[53] = T2) : T2 = a2[53], a2[54] !== o2 || a2[55] !== c2 || a2[56] !== d2 || a2[57] !== u2 || a2[58] !== s2 || a2[59] !== m2 || a2[60] !== l2 || a2[61] !== r2 ? (D2 = "zapret" === s2 && n.jsx(is, {
    title: m2("integrations.zapret.title"),
    children: n.jsxs("div", {
      className: "space-y-3",
      children: [n.jsx(ns, {
        label: m2("integrations.zapret.path"),
        description: m2("integrations.zapret.path_description"),
        children: n.jsxs("div", {
          className: "flex items-center gap-2",
          children: [n.jsx("div", {
            className: "flex items-center bg-background/25 border border-border/20 rounded-xl px-3 h-10 w-[240px]",
            children: n.jsx("span", {
              className: "text-xs text-foreground/80 truncate w-full",
              children: l2 || m2("integrations.zapret.path_empty")
            })
          }), n.jsx(Se, {
            variant: "outline",
            size: "icon",
            className: "shrink-0 rounded-xl border-border/15 bg-background/40 hover:bg-background/40",
            onClick: c2,
            "aria-label": m2("integrations.zapret.select_folder"),
            children: n.jsx(yt, {
              size: 15
            })
          }), n.jsx(Se, {
            variant: "outline",
            size: "icon",
            className: "shrink-0 rounded-xl border-border/15 bg-background/40 hover:bg-background/40",
            onClick: d2,
            "aria-label": m2("integrations.zapret.auto_detect"),
            children: n.jsx(Ne.refresh, {
              className: ke(o2 && "animate-spin"),
              size: 15
            })
          })]
        })
      }), n.jsx(ns, {
        label: m2("integrations.zapret.service.title"),
        description: m2("running" === r2 ? "integrations.zapret.service.running" : "stopped" === r2 ? "integrations.zapret.service.stopped" : "integrations.zapret.service.unknown"),
        children: n.jsx("div", {
          className: "flex items-center gap-2",
          children: "running" === r2 ? n.jsxs(n.Fragment, {
            children: [n.jsx(Se, {
              variant: "outline",
              size: "sm",
              className: "h-9 text-xs rounded-xl",
              onClick: () => u2("restart"),
              children: m2("common.restart")
            }), n.jsx(Se, {
              variant: "outline",
              size: "sm",
              className: "h-9 text-xs rounded-xl text-destructive hover:text-destructive",
              onClick: () => u2("stop"),
              children: m2("common.stop")
            })]
          }) : n.jsx(Se, {
            variant: "outline",
            size: "sm",
            className: "h-9 text-xs rounded-xl",
            onClick: () => u2("start"),
            children: m2("common.start")
          })
        })
      })]
    })
  }), a2[54] = o2, a2[55] = c2, a2[56] = d2, a2[57] = u2, a2[58] = s2, a2[59] = m2, a2[60] = l2, a2[61] = r2, a2[62] = D2) : D2 = a2[62], a2[63] !== T2 || a2[64] !== D2 ? (F2 = n.jsxs("div", {
    className: "space-y-6",
    children: [T2, D2]
  }), a2[63] = T2, a2[64] = D2, a2[65] = F2) : F2 = a2[65], F2;
}
function Un(t2) {
  const a2 = e.c(30),
    {
      title: s2,
      message: i2,
      onGoToSettings: l2,
      settingsText: r2,
      className: o2,
      variant: c2
    } = t2,
    d2 = void 0 === c2 ? "block" : c2,
    {
      t: u2
    } = le(),
    m2 = N(i2 ? `${s2} (${i2})` : s2);
  if ("inline" === d2) {
    let e3, t3, l3;
    return a2[0] !== o2 ? (e3 = ke("text-caption font-medium text-destructive px-1 mt-1 text-left leading-snug animate-in fade-in duration-150", o2), a2[0] = o2, a2[1] = e3) : e3 = a2[1], a2[2] !== i2 ? (t3 = i2 && n.jsxs("span", {
      className: "opacity-80 ml-1",
      children: ["(", i2, ")"]
    }), a2[2] = i2, a2[3] = t3) : t3 = a2[3], a2[4] !== m2 || a2[5] !== e3 || a2[6] !== t3 || a2[7] !== s2 ? (l3 = n.jsxs("p", {
      ...m2,
      className: e3,
      children: [s2, t3]
    }), a2[4] = m2, a2[5] = e3, a2[6] = t3, a2[7] = s2, a2[8] = l3) : l3 = a2[8], l3;
  }
  let p2, f2, g2, h2, v2, x2, y2, b2;
  return a2[9] !== o2 ? (p2 = ke("w-full space-y-2 animate-in fade-in duration-150", o2), a2[9] = o2, a2[10] = p2) : p2 = a2[10], a2[11] === Symbol.for("react.memo_cache_sentinel") ? (f2 = n.jsx(ot, {
    className: "h-4 w-4 shrink-0 text-destructive"
  }), a2[11] = f2) : f2 = a2[11], a2[12] !== s2 ? (g2 = n.jsx("span", {
    children: s2
  }), a2[12] = s2, a2[13] = g2) : g2 = a2[13], a2[14] !== i2 ? (h2 = i2 && n.jsx("div", {
    className: "text-caption opacity-80 mt-0.5",
    children: i2
  }), a2[14] = i2, a2[15] = h2) : h2 = a2[15], a2[16] !== g2 || a2[17] !== h2 ? (v2 = n.jsxs("div", {
    className: "flex-1 text-left",
    children: [g2, h2]
  }), a2[16] = g2, a2[17] = h2, a2[18] = v2) : v2 = a2[18], a2[19] !== m2 || a2[20] !== v2 ? (x2 = n.jsxs("div", {
    ...m2,
    className: "bg-destructive/10 border border-destructive/20 text-destructive px-3.5 py-2.5 rounded-2xl text-xs font-medium w-full flex items-center gap-2.5",
    children: [f2, v2]
  }), a2[19] = m2, a2[20] = v2, a2[21] = x2) : x2 = a2[21], a2[22] !== l2 || a2[23] !== r2 || a2[24] !== u2 ? (y2 = l2 && n.jsx(Se, {
    variant: "outline",
    size: "sm",
    onClick: l2,
    className: "w-full h-9 rounded-full text-xs text-destructive border-destructive/30 transition-all duration-200",
    children: r2 || u2("common.to_settings")
  }), a2[22] = l2, a2[23] = r2, a2[24] = u2, a2[25] = y2) : y2 = a2[25], a2[26] !== p2 || a2[27] !== x2 || a2[28] !== y2 ? (b2 = n.jsxs("div", {
    className: p2,
    children: [x2, y2]
  }), a2[26] = p2, a2[27] = x2, a2[28] = y2, a2[29] = b2) : b2 = a2[29], b2;
}
function Rn(t2) {
  const a2 = e.c(72),
    {
      proxyUrlInput: s2,
      setProxyUrlInput: i2,
      isValidUrl: l2,
      isValidating: r2,
      validationError: o2,
      onSavePersonalProxy: c2,
      onClearPersonalProxy: d2,
      hasSavedProxy: u2,
      proxyCoversEnabled: m2,
      onToggleProxyCovers: p2
    } = t2,
    f2 = void 0 !== u2 && u2,
    {
      t: g2
    } = le(),
    h2 = !s2 && !f2 || !l2 && Boolean(s2) || r2;
  let x2, y2, b2, j2, w2;
  a2[0] !== g2 ? (x2 = g2("integrations.proxy.personal_config"), a2[0] = g2, a2[1] = x2) : x2 = a2[1], a2[2] !== g2 ? (y2 = g2("integrations.proxy.personal_label"), a2[2] = g2, a2[3] = y2) : y2 = a2[3], a2[4] !== g2 ? (b2 = g2("integrations.proxy.personal_desc_field"), a2[4] = g2, a2[5] = b2) : b2 = a2[5], a2[6] !== i2 ? (j2 = e3 => i2(e3.target.value), a2[6] = i2, a2[7] = j2) : j2 = a2[7], a2[8] !== g2 ? (w2 = g2("integrations.proxy.personal_url_placeholder"), a2[8] = g2, a2[9] = w2) : w2 = a2[9];
  const k2 = !l2 && Boolean(s2) && "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20";
  let N2, S2, _2;
  a2[10] !== k2 ? (N2 = ke("flex-1 border bg-background/70 text-xs p-3 h-10", k2), a2[10] = k2, a2[11] = N2) : N2 = a2[11], a2[12] !== s2 || a2[13] !== j2 || a2[14] !== w2 || a2[15] !== N2 ? (S2 = n.jsx(v, {
    value: s2,
    onChange: j2,
    placeholder: w2,
    className: N2
  }), a2[12] = s2, a2[13] = j2, a2[14] = w2, a2[15] = N2, a2[16] = S2) : S2 = a2[16], a2[17] !== f2 || a2[18] !== d2 || a2[19] !== s2 || a2[20] !== g2 ? (_2 = (Boolean(s2) || f2) && n.jsx(Se, {
    type: "button",
    variant: "outline",
    size: "icon",
    onClick: d2,
    className: "shrink-0 rounded-lg border-border/20 bg-background/40 text-muted-foreground hover:bg-background/40 hover:text-destructive active:scale-95",
    "aria-label": g2("common.delete"),
    children: n.jsx(Ne.delete, {
      size: 16
    })
  }), a2[17] = f2, a2[18] = d2, a2[19] = s2, a2[20] = g2, a2[21] = _2) : _2 = a2[21];
  const C2 = h2 && "bg-muted text-muted-foreground";
  let P2, z2, A2, M2, I2, E2, L2, T2, D2, F2, O2, $2, B2, U2, R2, q2;
  return a2[22] !== C2 ? (P2 = ke("shrink-0 rounded-lg active:scale-95", C2), a2[22] = C2, a2[23] = P2) : P2 = a2[23], a2[24] !== g2 ? (z2 = g2("integrations.proxy.save_btn"), a2[24] = g2, a2[25] = z2) : z2 = a2[25], a2[26] !== r2 ? (A2 = r2 ? n.jsx(Ne.refresh, {
    className: "animate-spin",
    size: 15
  }) : n.jsx(Ne.check, {
    size: 16
  }), a2[26] = r2, a2[27] = A2) : A2 = a2[27], a2[28] !== h2 || a2[29] !== c2 || a2[30] !== P2 || a2[31] !== z2 || a2[32] !== A2 ? (M2 = n.jsx(Se, {
    type: "button",
    size: "icon",
    onClick: c2,
    disabled: h2,
    className: P2,
    "aria-label": z2,
    children: A2
  }), a2[28] = h2, a2[29] = c2, a2[30] = P2, a2[31] = z2, a2[32] = A2, a2[33] = M2) : M2 = a2[33], a2[34] !== _2 || a2[35] !== M2 || a2[36] !== S2 ? (I2 = n.jsxs("div", {
    className: "flex items-center gap-2 w-full",
    children: [S2, _2, M2]
  }), a2[34] = _2, a2[35] = M2, a2[36] = S2, a2[37] = I2) : I2 = a2[37], a2[38] !== l2 || a2[39] !== s2 || a2[40] !== g2 || a2[41] !== o2 ? (E2 = !l2 && Boolean(s2) && o2 && n.jsx(Un, {
    title: g2("integrations.proxy.invalid_format"),
    message: o2
  }), a2[38] = l2, a2[39] = s2, a2[40] = g2, a2[41] = o2, a2[42] = E2) : E2 = a2[42], a2[43] !== I2 || a2[44] !== E2 ? (L2 = n.jsxs("div", {
    className: "flex flex-col gap-2 w-full",
    children: [I2, E2]
  }), a2[43] = I2, a2[44] = E2, a2[45] = L2) : L2 = a2[45], a2[46] !== L2 || a2[47] !== y2 || a2[48] !== b2 ? (T2 = n.jsx(ns, {
    label: y2,
    description: b2,
    vertical: true,
    children: L2
  }), a2[46] = L2, a2[47] = y2, a2[48] = b2, a2[49] = T2) : T2 = a2[49], a2[50] !== T2 || a2[51] !== x2 ? (D2 = n.jsx(is, {
    title: x2,
    children: T2
  }), a2[50] = T2, a2[51] = x2, a2[52] = D2) : D2 = a2[52], a2[53] !== g2 ? (F2 = g2("integrations.proxy.sections.additional"), a2[53] = g2, a2[54] = F2) : F2 = a2[54], a2[55] !== g2 ? (O2 = g2("integrations.proxy.covers_title"), a2[55] = g2, a2[56] = O2) : O2 = a2[56], a2[57] !== g2 ? ($2 = g2("integrations.proxy.covers_description"), a2[57] = g2, a2[58] = $2) : $2 = a2[58], a2[59] !== p2 || a2[60] !== m2 ? (B2 = n.jsx(us, {
    checked: m2,
    onCheckedChange: p2
  }), a2[59] = p2, a2[60] = m2, a2[61] = B2) : B2 = a2[61], a2[62] !== O2 || a2[63] !== $2 || a2[64] !== B2 ? (U2 = n.jsx(ns, {
    label: O2,
    description: $2,
    children: B2
  }), a2[62] = O2, a2[63] = $2, a2[64] = B2, a2[65] = U2) : U2 = a2[65], a2[66] !== F2 || a2[67] !== U2 ? (R2 = n.jsx(is, {
    title: F2,
    children: U2
  }), a2[66] = F2, a2[67] = U2, a2[68] = R2) : R2 = a2[68], a2[69] !== D2 || a2[70] !== R2 ? (q2 = n.jsxs(n.Fragment, {
    children: [D2, R2]
  }), a2[69] = D2, a2[70] = R2, a2[71] = q2) : q2 = a2[71], q2;
}
function qn(t2) {
  const a2 = e.c(29),
    {
      proxyMode: s2,
      serviceSettings: i2,
      onToggleServiceProxy: l2,
      onToggleServiceProxyCovers: r2
    } = t2,
    {
      t: o2
    } = le();
  let c2;
  a2[0] !== s2 || a2[1] !== o2 ? (c2 = o2("zapret" === s2 ? "integrations.zapret.domains.title" : "integrations.proxy.sections.services"), a2[0] = s2, a2[1] = o2, a2[2] = c2) : c2 = a2[2];
  const d2 = "disabled" === s2 && "opacity-40 pointer-events-none select-none";
  let u2, m2, p2, f2, g2, v2, x2, y2, b2;
  return a2[3] !== d2 ? (u2 = ke(d2), a2[3] = d2, a2[4] = u2) : u2 = a2[4], a2[5] !== o2 ? (m2 = o2("integrations.proxy.covers_btn"), a2[5] = o2, a2[6] = m2) : m2 = a2[6], a2[7] !== m2 ? (p2 = n.jsx("span", {
    className: "w-44 text-center",
    children: m2
  }), a2[7] = m2, a2[8] = p2) : p2 = a2[8], a2[9] !== o2 ? (f2 = o2("integrations.proxy.tracks_btn"), a2[9] = o2, a2[10] = f2) : f2 = a2[10], a2[11] !== f2 ? (g2 = n.jsx("span", {
    className: "w-44 text-center",
    children: f2
  }), a2[11] = f2, a2[12] = g2) : g2 = a2[12], a2[13] !== p2 || a2[14] !== g2 ? (v2 = n.jsxs("div", {
    className: "flex w-full items-center justify-end gap-3 px-1.5 pb-1 text-caption font-medium text-muted-foreground",
    children: [p2, g2]
  }), a2[13] = p2, a2[14] = g2, a2[15] = v2) : v2 = a2[15], a2[16] !== l2 || a2[17] !== r2 || a2[18] !== s2 || a2[19] !== i2 || a2[20] !== o2 ? (x2 = En.map(e3 => {
    var t3, a3;
    const c3 = jt(e3),
      d3 = (null == c3 ? void 0 : c3.displayName) || e3,
      u3 = Boolean(null == (t3 = null == i2 ? void 0 : i2[e3]) ? void 0 : t3.use_proxy),
      m3 = Boolean(null == (a3 = null == i2 ? void 0 : i2[e3]) ? void 0 : a3.proxy_covers);
    return n.jsxs("div", {
      className: "flex items-center justify-between py-3 px-1.5 transition-colors",
      children: [n.jsxs("div", {
        className: "flex items-center gap-3.5 min-w-0",
        children: [n.jsx(wt, {
          source: e3,
          size: 24,
          className: "shrink-0"
        }), n.jsx("span", {
          className: "font-semibold text-sm text-foreground tracking-tight truncate",
          children: d3
        })]
      }), n.jsxs("div", {
        className: "flex shrink-0 items-center gap-3",
        children: [n.jsx(h, {
          size: "sm",
          className: "w-44",
          fullWidth: true,
          disabled: "disabled" === s2,
          options: [{
            value: "direct",
            label: o2("integrations.proxy.direct")
          }, {
            value: "proxy",
            label: o2("integrations.proxy.tracks_proxy")
          }],
          value: m3 ? "proxy" : "direct",
          onChange: t4 => {
            "proxy" === t4 !== m3 && r2(e3);
          }
        }), n.jsx(h, {
          size: "sm",
          className: "w-44",
          fullWidth: true,
          disabled: "disabled" === s2,
          options: [{
            value: "auto",
            label: o2("internal" === s2 ? "integrations.proxy.tracks_auto" : "integrations.proxy.direct")
          }, {
            value: "proxy",
            label: o2("integrations.proxy.tracks_proxy")
          }],
          value: u3 ? "proxy" : "auto",
          onChange: t4 => {
            "proxy" === t4 !== u3 && l2(e3);
          }
        })]
      })]
    }, e3);
  }), a2[16] = l2, a2[17] = r2, a2[18] = s2, a2[19] = i2, a2[20] = o2, a2[21] = x2) : x2 = a2[21], a2[22] !== x2 ? (y2 = n.jsx("div", {
    className: "flex flex-col divide-y divide-border/15 w-full",
    children: x2
  }), a2[22] = x2, a2[23] = y2) : y2 = a2[23], a2[24] !== c2 || a2[25] !== y2 || a2[26] !== u2 || a2[27] !== v2 ? (b2 = n.jsxs(is, {
    title: c2,
    className: u2,
    children: [v2, y2]
  }), a2[24] = c2, a2[25] = y2, a2[26] = u2, a2[27] = v2, a2[28] = b2) : b2 = a2[28], b2;
}
function Vn() {
  const t2 = e.c(30),
    a2 = On();
  if (a2.isLoading || !a2.serviceSettings) {
    let e3;
    return t2[0] === Symbol.for("react.memo_cache_sentinel") ? (e3 = n.jsx("div", {
      className: "w-full p-8 flex items-center justify-center min-h-[220px]",
      children: n.jsx(_e, {
        className: "h-6 w-6 animate-spin text-muted-foreground/40"
      })
    }), t2[0] = e3) : e3 = t2[0], e3;
  }
  let s2, i2, l2, r2, o2, c2, d2, u2, m2;
  return t2[1] !== a2 ? (s2 = e3 => {
    a2.handleSwitchMode(e3);
  }, t2[1] = a2, t2[2] = s2) : s2 = t2[2], t2[3] !== a2 ? (i2 = () => {
    a2.handleChooseZapretPath();
  }, l2 = () => {
    a2.handleDetectZapretPath();
  }, r2 = e3 => {
    a2.handleZapretServiceControl(e3);
  }, t2[3] = a2, t2[4] = i2, t2[5] = l2, t2[6] = r2) : (i2 = t2[4], l2 = t2[5], r2 = t2[6]), t2[7] !== a2.canUseInternalProxy || t2[8] !== a2.getPremiumIcon || t2[9] !== a2.isZapretLoading || t2[10] !== a2.proxyMode || t2[11] !== a2.showPremiumDialog || t2[12] !== a2.zapretPath || t2[13] !== a2.zapretStatus || t2[14] !== s2 || t2[15] !== i2 || t2[16] !== l2 || t2[17] !== r2 ? (o2 = n.jsx(Bn, {
    proxyMode: a2.proxyMode,
    onSwitchMode: s2,
    canUseInternalProxy: a2.canUseInternalProxy,
    getPremiumIcon: a2.getPremiumIcon,
    showPremiumDialog: a2.showPremiumDialog,
    zapretPath: a2.zapretPath,
    zapretStatus: a2.zapretStatus,
    isZapretLoading: a2.isZapretLoading,
    onChooseZapretPath: i2,
    onDetectZapretPath: l2,
    onZapretServiceControl: r2
  }), t2[7] = a2.canUseInternalProxy, t2[8] = a2.getPremiumIcon, t2[9] = a2.isZapretLoading, t2[10] = a2.proxyMode, t2[11] = a2.showPremiumDialog, t2[12] = a2.zapretPath, t2[13] = a2.zapretStatus, t2[14] = s2, t2[15] = i2, t2[16] = l2, t2[17] = r2, t2[18] = o2) : o2 = t2[18], t2[19] !== a2 ? (c2 = a2.showInternalConfig && n.jsxs(n.Fragment, {
    children: [n.jsx(cs, {}), n.jsx($n, {
      proxyMode: a2.proxyMode,
      streamDelivery: a2.streamDelivery,
      onSetDelivery: e3 => {
        a2.setStreamDelivery(e3);
      },
      canUseStorageDelivery: a2.canUseStorageDelivery,
      getPremiumIcon: a2.getPremiumIcon,
      showPremiumDialog: a2.showPremiumDialog
    })]
  }), t2[19] = a2, t2[20] = c2) : c2 = t2[20], t2[21] !== a2 ? (d2 = (a2.showInternalConfig || a2.showZapretServices) && n.jsxs(n.Fragment, {
    children: [n.jsx(cs, {}), n.jsx(qn, {
      proxyMode: a2.proxyMode,
      serviceSettings: a2.serviceSettings,
      onToggleServiceProxy: e3 => {
        a2.handleToggleServiceProxy(e3);
      },
      onToggleServiceProxyCovers: e3 => {
        a2.handleToggleServiceProxyCovers(e3);
      }
    })]
  }), t2[21] = a2, t2[22] = d2) : d2 = t2[22], t2[23] !== a2 ? (u2 = "personal" === a2.proxyMode && n.jsxs(n.Fragment, {
    children: [n.jsx(cs, {}), n.jsx(Rn, {
      proxyUrlInput: a2.proxyUrlInput,
      setProxyUrlInput: a2.setProxyUrlInput,
      isValidUrl: a2.isValidUrl,
      isValidating: a2.isValidating,
      validationError: a2.validationError,
      onSavePersonalProxy: () => {
        a2.handleSavePersonalProxy();
      },
      onClearPersonalProxy: () => {
        a2.handleClearPersonalProxy();
      },
      hasSavedProxy: a2.hasSavedProxy,
      proxyCoversEnabled: a2.proxyCoversEnabled,
      onToggleProxyCovers: e3 => {
        a2.toggleProxyCovers(e3);
      }
    })]
  }), t2[23] = a2, t2[24] = u2) : u2 = t2[24], t2[25] !== o2 || t2[26] !== c2 || t2[27] !== d2 || t2[28] !== u2 ? (m2 = n.jsxs("div", {
    className: "w-full",
    children: [o2, c2, d2, u2]
  }), t2[25] = o2, t2[26] = c2, t2[27] = d2, t2[28] = u2, t2[29] = m2) : m2 = t2[29], m2;
}
function Wn() {
  var t2, a2, s2, i2, l2, r2, o2, c2, d2, u2, m2, p2, f2;
  const g2 = e.c(55),
    {
      t: h2
    } = le(),
    [v2, x2] = kt(),
    y2 = null != (a2 = null == (t2 = v2.discord) ? void 0 : t2.activity) && a2,
    b2 = null != (i2 = null == (s2 = v2.discord) ? void 0 : s2.customcover) && i2,
    j2 = false !== (null == (l2 = v2.discord) ? void 0 : l2.progress);
  let w2, k2, N2, S2, _2, C2, P2;
  g2[0] === Symbol.for("react.memo_cache_sentinel") ? (w2 = n.jsx(wt, {
    source: "discord",
    size: 18,
    className: "shrink-0"
  }), g2[0] = w2) : w2 = g2[0], g2[1] !== h2 ? (k2 = h2("integrations.discord.title"), g2[1] = h2, g2[2] = k2) : k2 = g2[2], g2[3] !== k2 ? (N2 = n.jsxs("span", {
    className: "flex items-center gap-2",
    children: [w2, n.jsx("span", {
      children: k2
    })]
  }), g2[3] = k2, g2[4] = N2) : N2 = g2[4], g2[5] !== h2 ? (S2 = h2("integrations.discord.activity_status"), g2[5] = h2, g2[6] = S2) : S2 = g2[6], g2[7] !== h2 ? (_2 = h2("integrations.discord.activity_description"), g2[7] = h2, g2[8] = _2) : _2 = g2[8], g2[9] !== v2.discord || g2[10] !== x2 ? (C2 = e3 => x2({
    discord: {
      ...(v2.discord || {}),
      activity: e3
    }
  }), g2[9] = v2.discord, g2[10] = x2, g2[11] = C2) : C2 = g2[11], g2[12] !== y2 || g2[13] !== S2 || g2[14] !== _2 || g2[15] !== C2 ? (P2 = n.jsx(ls, {
    label: S2,
    description: _2,
    checked: y2,
    onCheckedChange: C2
  }), g2[12] = y2, g2[13] = S2, g2[14] = _2, g2[15] = C2, g2[16] = P2) : P2 = g2[16];
  const z2 = !y2 && "opacity-40 pointer-events-none select-none";
  let A2, M2, I2;
  g2[17] !== z2 ? (A2 = ke("flex flex-col transition-opacity", z2), g2[17] = z2, g2[18] = A2) : A2 = g2[18], g2[19] !== h2 ? (M2 = h2("integrations.discord.custom_cover"), g2[19] = h2, g2[20] = M2) : M2 = g2[20], g2[21] !== h2 ? (I2 = h2("integrations.discord.custom_cover_description"), g2[21] = h2, g2[22] = I2) : I2 = g2[22];
  const E2 = !y2;
  let L2, T2, D2, F2;
  g2[23] !== (null == (r2 = v2.discord) ? void 0 : r2.activity) || g2[24] !== (null == (o2 = v2.discord) ? void 0 : o2.progress) || g2[25] !== x2 ? (L2 = e3 => {
    var t3, a3, s3, n2;
    return x2({
      discord: {
        activity: null == (a3 = null == (t3 = v2.discord) ? void 0 : t3.activity) || a3,
        progress: null == (n2 = null == (s3 = v2.discord) ? void 0 : s3.progress) || n2,
        customcover: e3
      }
    });
  }, g2[23] = null == (c2 = v2.discord) ? void 0 : c2.activity, g2[24] = null == (d2 = v2.discord) ? void 0 : d2.progress, g2[25] = x2, g2[26] = L2) : L2 = g2[26], g2[27] !== b2 || g2[28] !== I2 || g2[29] !== E2 || g2[30] !== L2 || g2[31] !== M2 ? (T2 = n.jsx(ls, {
    label: M2,
    description: I2,
    checked: b2,
    disabled: E2,
    onCheckedChange: L2
  }), g2[27] = b2, g2[28] = I2, g2[29] = E2, g2[30] = L2, g2[31] = M2, g2[32] = T2) : T2 = g2[32], g2[33] !== h2 ? (D2 = h2("integrations.discord.progress"), g2[33] = h2, g2[34] = D2) : D2 = g2[34], g2[35] !== h2 ? (F2 = h2("integrations.discord.progress_description"), g2[35] = h2, g2[36] = F2) : F2 = g2[36];
  const O2 = !y2;
  let $2, B2, U2, R2;
  return g2[37] !== (null == (u2 = v2.discord) ? void 0 : u2.activity) || g2[38] !== (null == (m2 = v2.discord) ? void 0 : m2.customcover) || g2[39] !== x2 ? ($2 = e3 => {
    var t3, a3, s3, n2;
    return x2({
      discord: {
        activity: null == (a3 = null == (t3 = v2.discord) ? void 0 : t3.activity) || a3,
        customcover: null != (n2 = null == (s3 = v2.discord) ? void 0 : s3.customcover) && n2,
        progress: e3
      }
    });
  }, g2[37] = null == (p2 = v2.discord) ? void 0 : p2.activity, g2[38] = null == (f2 = v2.discord) ? void 0 : f2.customcover, g2[39] = x2, g2[40] = $2) : $2 = g2[40], g2[41] !== j2 || g2[42] !== D2 || g2[43] !== F2 || g2[44] !== O2 || g2[45] !== $2 ? (B2 = n.jsx(ls, {
    label: D2,
    description: F2,
    checked: j2,
    disabled: O2,
    onCheckedChange: $2
  }), g2[41] = j2, g2[42] = D2, g2[43] = F2, g2[44] = O2, g2[45] = $2, g2[46] = B2) : B2 = g2[46], g2[47] !== T2 || g2[48] !== B2 || g2[49] !== A2 ? (U2 = n.jsxs("div", {
    className: A2,
    children: [T2, B2]
  }), g2[47] = T2, g2[48] = B2, g2[49] = A2, g2[50] = U2) : U2 = g2[50], g2[51] !== U2 || g2[52] !== N2 || g2[53] !== P2 ? (R2 = n.jsx("div", {
    className: "flex flex-col w-full",
    children: n.jsxs(is, {
      title: N2,
      children: [P2, U2]
    })
  }), g2[51] = U2, g2[52] = N2, g2[53] = P2, g2[54] = R2) : R2 = g2[54], R2;
}
function Kn(t2) {
  const a2 = e.c(35),
    {
      username: s2,
      avatarUrl: i2,
      avatar: l2,
      onDisconnect: r2,
      isDisconnecting: o2
    } = t2,
    {
      t: c2
    } = le();
  let d2, u2, m2, p2, f2, g2, h2, v2;
  if (a2[0] !== l2 || a2[1] !== i2 || a2[2] !== o2 || a2[3] !== r2 || a2[4] !== c2 || a2[5] !== s2) {
    f2 = s2 || c2("common.connected");
    const e3 = l2 || i2;
    let t3, g3, h3, v3;
    m2 = "flex w-full flex-col items-center overflow-hidden rounded-2xl bg-plate select-none", a2[11] !== e3 ? (t3 = e3 && n.jsxs(n.Fragment, {
      children: [n.jsx("div", {
        "aria-hidden": true,
        className: "absolute inset-0 scale-110 bg-cover bg-center opacity-70 blur-sm",
        style: {
          backgroundImage: `url(${e3})`
        }
      }), n.jsx("div", {
        "aria-hidden": true,
        className: "absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60"
      })]
    }), a2[11] = e3, a2[12] = t3) : t3 = a2[12], a2[13] !== c2 ? (g3 = c2("common.disconnect"), a2[13] = c2, a2[14] = g3) : g3 = a2[14], a2[15] !== o2 ? (h3 = o2 ? n.jsx(_e, {
      className: "h-4 w-4 animate-spin"
    }) : n.jsx(Ne.close, {
      className: "h-4 w-4"
    }), a2[15] = o2, a2[16] = h3) : h3 = a2[16], a2[17] !== o2 || a2[18] !== r2 || a2[19] !== g3 || a2[20] !== h3 ? (v3 = n.jsx(Se, {
      type: "button",
      variant: "quiet",
      size: "icon-sm",
      shape: "circle",
      onClick: r2,
      disabled: o2,
      "aria-label": g3,
      className: "media-control absolute right-3 top-3 hover:text-destructive",
      children: h3
    }), a2[17] = o2, a2[18] = r2, a2[19] = g3, a2[20] = h3, a2[21] = v3) : v3 = a2[21], a2[22] !== t3 || a2[23] !== v3 ? (p2 = n.jsxs("div", {
      className: "relative h-28 w-full overflow-hidden bg-hover",
      children: [t3, v3]
    }), a2[22] = t3, a2[23] = v3, a2[24] = p2) : p2 = a2[24], d2 = "relative -mt-10 flex w-full flex-col items-center px-4 pb-6 text-center", u2 = e3 ? n.jsx("img", {
      src: e3,
      alt: f2,
      className: "size-20 rounded-full bg-background object-cover ring-4 ring-background"
    }) : n.jsx("div", {
      className: "flex size-20 items-center justify-center rounded-full bg-hover ring-4 ring-background",
      children: n.jsx("span", {
        className: "text-2xl font-semibold text-foreground/70",
        children: f2.charAt(0).toUpperCase()
      })
    }), a2[0] = l2, a2[1] = i2, a2[2] = o2, a2[3] = r2, a2[4] = c2, a2[5] = s2, a2[6] = d2, a2[7] = u2, a2[8] = m2, a2[9] = p2, a2[10] = f2;
  } else d2 = a2[6], u2 = a2[7], m2 = a2[8], p2 = a2[9], f2 = a2[10];
  return a2[25] !== f2 ? (g2 = n.jsx("p", {
    className: "mt-2.5 max-w-[280px] truncate text-base font-semibold tracking-tight text-foreground",
    children: f2
  }), a2[25] = f2, a2[26] = g2) : g2 = a2[26], a2[27] !== d2 || a2[28] !== u2 || a2[29] !== g2 ? (h2 = n.jsxs("div", {
    className: d2,
    children: [u2, g2]
  }), a2[27] = d2, a2[28] = u2, a2[29] = g2, a2[30] = h2) : h2 = a2[30], a2[31] !== m2 || a2[32] !== p2 || a2[33] !== h2 ? (v2 = n.jsxs("div", {
    className: m2,
    children: [p2, h2]
  }), a2[31] = m2, a2[32] = p2, a2[33] = h2, a2[34] = v2) : v2 = a2[34], v2;
}
function Gn(t2) {
  const a2 = e.c(18),
    {
      name: s2,
      source: i2,
      onConnect: l2,
      isLoading: r2,
      subtitle: o2,
      title: c2,
      disabled: d2
    } = t2,
    {
      t: u2
    } = le(),
    m2 = r2 || d2;
  let p2, f2, g2, h2, v2;
  return a2[0] !== s2 || a2[1] !== u2 || a2[2] !== c2 ? (p2 = null != c2 ? c2 : u2("services.common.login_via", {
    service: s2
  }), a2[0] = s2, a2[1] = u2, a2[2] = c2, a2[3] = p2) : p2 = a2[3], a2[4] !== o2 || a2[5] !== u2 ? (f2 = null != o2 ? o2 : u2("services.common.oauth_subtitle"), a2[4] = o2, a2[5] = u2, a2[6] = f2) : f2 = a2[6], a2[7] !== r2 || a2[8] !== i2 ? (g2 = e3 => r2 ? n.jsx(_e, {
    className: `animate-spin ${e3.className || ""}`
  }) : n.jsx(wt, {
    source: i2,
    size: 36,
    className: e3.className,
    isSelected: true
  }), a2[7] = r2, a2[8] = i2, a2[9] = g2) : g2 = a2[9], a2[10] !== p2 || a2[11] !== f2 || a2[12] !== g2 ? (h2 = n.jsx(b, {
    title: p2,
    subtitle: f2,
    icon: g2,
    layout: "vertical",
    size: "md",
    className: "pointer-events-none transition-transform group-hover:scale-[1.02]"
  }), a2[10] = p2, a2[11] = f2, a2[12] = g2, a2[13] = h2) : h2 = a2[13], a2[14] !== l2 || a2[15] !== m2 || a2[16] !== h2 ? (v2 = n.jsx("button", {
    type: "button",
    onClick: l2,
    disabled: m2,
    className: "relative flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl p-8 transition-colors duration-150 hover:bg-hover group disabled:pointer-events-none disabled:opacity-50",
    children: h2
  }), a2[14] = l2, a2[15] = m2, a2[16] = h2, a2[17] = v2) : v2 = a2[17], v2;
}
function Zn() {
  var t2;
  const a2 = e.c(43),
    {
      t: s2
    } = le(),
    {
      isConnected: i2,
      isConnecting: l2,
      config: r2,
      connectAccount: o2,
      disconnectAccount: c2,
      updateConfig: d2
    } = S();
  let u2;
  a2[0] !== c2 ? (u2 = async () => {
    try {
      await c2();
    } catch (e3) {
      const t3 = e3;
      xe.error("settings", "[LastFM] Failed to disconnect:", t3);
    }
  }, a2[0] = c2, a2[1] = u2) : u2 = a2[1];
  const m2 = u2;
  let p2, f2, g2, h2, v2, x2, y2;
  a2[2] === Symbol.for("react.memo_cache_sentinel") ? (p2 = n.jsx(wt, {
    source: "lastfm",
    size: 18,
    className: "shrink-0"
  }), a2[2] = p2) : p2 = a2[2], a2[3] !== s2 ? (f2 = s2("integrations.lastfm.title"), a2[3] = s2, a2[4] = f2) : f2 = a2[4], a2[5] !== f2 ? (g2 = n.jsxs("span", {
    className: "flex items-center gap-2",
    children: [p2, n.jsx("span", {
      children: f2
    })]
  }), a2[5] = f2, a2[6] = g2) : g2 = a2[6], a2[7] !== r2.avatar || a2[8] !== r2.username || a2[9] !== o2 || a2[10] !== m2 || a2[11] !== i2 || a2[12] !== l2 ? (h2 = n.jsx("div", {
    className: "w-full mb-1",
    children: i2 ? n.jsx(Kn, {
      username: r2.username || "",
      avatarUrl: null != (t2 = r2.avatar) ? t2 : void 0,
      onDisconnect: m2,
      isDisconnecting: l2
    }) : n.jsx(Gn, {
      name: "Last.fm",
      source: "lastfm",
      onConnect: o2,
      isLoading: l2
    })
  }), a2[7] = r2.avatar, a2[8] = r2.username, a2[9] = o2, a2[10] = m2, a2[11] = i2, a2[12] = l2, a2[13] = h2) : h2 = a2[13], a2[14] !== s2 ? (v2 = s2("integrations.lastfm.history"), a2[14] = s2, a2[15] = v2) : v2 = a2[15], a2[16] !== s2 ? (x2 = s2("integrations.lastfm.history_description"), a2[16] = s2, a2[17] = x2) : x2 = a2[17], a2[18] !== d2 ? (y2 = e3 => d2({
    scrobbling_enabled: e3
  }), a2[18] = d2, a2[19] = y2) : y2 = a2[19];
  const b2 = !i2;
  let j2, w2, k2, N2;
  a2[20] !== r2.scrobbling_enabled || a2[21] !== v2 || a2[22] !== x2 || a2[23] !== y2 || a2[24] !== b2 ? (j2 = n.jsx(ls, {
    label: v2,
    description: x2,
    checked: r2.scrobbling_enabled,
    onCheckedChange: y2,
    disabled: b2
  }), a2[20] = r2.scrobbling_enabled, a2[21] = v2, a2[22] = x2, a2[23] = y2, a2[24] = b2, a2[25] = j2) : j2 = a2[25], a2[26] !== s2 ? (w2 = s2("integrations.lastfm.now_playing"), a2[26] = s2, a2[27] = w2) : w2 = a2[27], a2[28] !== s2 ? (k2 = s2("integrations.lastfm.now_playing_description"), a2[28] = s2, a2[29] = k2) : k2 = a2[29], a2[30] !== d2 ? (N2 = e3 => d2({
    now_playing_enabled: e3
  }), a2[30] = d2, a2[31] = N2) : N2 = a2[31];
  const _2 = !i2;
  let C2, P2;
  return a2[32] !== r2.now_playing_enabled || a2[33] !== w2 || a2[34] !== k2 || a2[35] !== N2 || a2[36] !== _2 ? (C2 = n.jsx(ls, {
    label: w2,
    description: k2,
    checked: r2.now_playing_enabled,
    onCheckedChange: N2,
    disabled: _2
  }), a2[32] = r2.now_playing_enabled, a2[33] = w2, a2[34] = k2, a2[35] = N2, a2[36] = _2, a2[37] = C2) : C2 = a2[37], a2[38] !== C2 || a2[39] !== g2 || a2[40] !== h2 || a2[41] !== j2 ? (P2 = n.jsx("div", {
    className: "flex flex-col w-full",
    children: n.jsxs(is, {
      title: g2,
      children: [h2, j2, C2]
    })
  }), a2[38] = C2, a2[39] = g2, a2[40] = h2, a2[41] = j2, a2[42] = P2) : P2 = a2[42], P2;
}
function Hn() {
  var e3, t2, s2, i2;
  const {
      t: l2
    } = le(),
    [r2, o2] = kt(),
    [c2, d2] = a.useState(null),
    [u2, m2] = a.useState(true),
    [p2, f2] = a.useState(false),
    [g2, v2] = a.useState(false),
    [x2, y2] = a.useState(false),
    b2 = null != (t2 = null == (e3 = r2.obs) ? void 0 : e3.compact) && t2,
    j2 = null != (i2 = null == (s2 = r2.obs) ? void 0 : s2.hideOnPause) && i2;
  a.useEffect(() => {
    let e4 = true;
    return (async () => {
      try {
        const t3 = await ct.obs.get();
        e4 && t3 && d2(t3.url);
      } catch (t3) {
        xe.error("settings", "[OBS] Failed to fetch token:", t3);
      } finally {
        e4 && m2(false);
      }
    })(), () => {
      e4 = false;
    };
  }, []);
  const w2 = async () => {
      f2(true);
      try {
        const e4 = await ct.obs.create();
        e4 && d2(e4.url);
      } catch (e4) {
        xe.error("settings", "[OBS] Failed to generate token:", e4);
      } finally {
        f2(false);
      }
    },
    k2 = (() => {
      if (!c2) return "";
      try {
        const e4 = new URL(c2);
        return b2 && e4.searchParams.set("compact", "1"), j2 && e4.searchParams.set("hide_on_pause", "1"), e4.toString();
      } catch {
        return c2;
      }
    })(),
    N2 = e4 => {
      o2({
        obs: {
          ...((null == r2 ? void 0 : r2.obs) || {}),
          ...e4
        }
      });
    },
    S2 = Boolean(c2);
  return n.jsxs("div", {
    className: "flex flex-col w-full",
    children: [n.jsxs(is, {
      title: n.jsxs("span", {
        className: "flex items-center gap-2",
        children: [n.jsx(Nt, {
          className: "w-4.5 h-4.5 shrink-0"
        }), n.jsx("span", {
          children: l2("integrations.obs.title")
        })]
      }),
      children: [S2 ? n.jsxs("div", {
        className: "flex flex-col gap-2.5 w-full",
        children: [n.jsx("div", {
          className: "flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-plate border border-border/15 text-xs text-muted-foreground/90 truncate select-all",
          children: n.jsx("span", {
            className: "truncate flex-1",
            children: k2
          })
        }), n.jsxs("div", {
          className: "flex items-center gap-2 w-full",
          children: [n.jsxs(Se, {
            type: "button",
            variant: "outline",
            onClick: async () => {
              if (k2) try {
                await navigator.clipboard.writeText(k2), y2(true), setTimeout(() => y2(false), 2e3);
              } catch (e4) {
                xe.error("settings", "[OBS] Failed to copy:", e4);
              }
            },
            className: "group/copy flex-1",
            children: [n.jsx("span", {
              children: l2(x2 ? "integrations.obs.copied_button" : "integrations.obs.copy_button")
            }), n.jsx("div", {
              className: "w-px h-4 bg-border/25"
            }), x2 ? n.jsx(Ne.check, {
              className: "h-4 w-4 text-emerald-500 shrink-0"
            }) : n.jsx(Ne.copy, {
              className: "h-4 w-4 text-muted-foreground/70 group-hover/copy:text-foreground transition-colors shrink-0"
            })]
          }), n.jsx(Se, {
            type: "button",
            variant: "outline",
            size: "icon",
            onClick: w2,
            disabled: p2,
            className: "shrink-0 rounded-xl text-muted-foreground/70 hover:bg-plate hover:text-foreground",
            "aria-label": l2("integrations.obs.regenerate_button"),
            children: p2 ? n.jsx(_e, {
              className: "h-4 w-4 animate-spin"
            }) : n.jsx(Ne.refresh, {
              className: "h-4 w-4"
            })
          }), n.jsx(Se, {
            type: "button",
            variant: "outline",
            size: "icon",
            onClick: async () => {
              v2(true);
              try {
                await ct.obs.revoke(), d2(null);
              } catch (e4) {
                xe.error("settings", "[OBS] Failed to revoke token:", e4);
              } finally {
                v2(false);
              }
            },
            disabled: g2,
            className: "shrink-0 rounded-xl text-muted-foreground/60 hover:bg-plate hover:text-destructive",
            "aria-label": l2("integrations.obs.revoke_button"),
            children: g2 ? n.jsx(_e, {
              className: "h-4 w-4 animate-spin"
            }) : n.jsx(Ne.delete, {
              className: "h-4 w-4"
            })
          })]
        })]
      }) : n.jsxs(Se, {
        type: "button",
        variant: "outline",
        onClick: w2,
        disabled: u2 || p2,
        className: "w-full",
        children: [p2 && n.jsx(_e, {
          className: "h-4 w-4 animate-spin text-primary shrink-0"
        }), n.jsx("span", {
          children: l2(p2 ? "integrations.obs.generating_button" : "integrations.obs.generate_button")
        })]
      }), n.jsx(ns, {
        label: l2("integrations.obs.size_label"),
        description: l2("integrations.obs.size_desc"),
        children: n.jsx(h, {
          options: [{
            value: "default",
            label: l2("integrations.obs.size_default")
          }, {
            value: "compact",
            label: l2("integrations.obs.size_compact")
          }],
          value: b2 ? "compact" : "default",
          onChange: e4 => N2({
            compact: "compact" === e4
          }),
          size: "sm"
        })
      }), n.jsx(ls, {
        label: l2("integrations.obs.hide_on_pause"),
        description: l2("integrations.obs.hide_on_pause_desc"),
        checked: j2,
        onCheckedChange: e4 => N2({
          hideOnPause: e4
        })
      })]
    }), n.jsx(cs, {}), n.jsx(is, {
      title: l2("integrations.obs.guide_title"),
      children: n.jsx("div", {
        className: "flex flex-col gap-2.5 w-full select-none",
        children: [{
          step: "1",
          text: l2("integrations.obs.guide_step1")
        }, {
          step: "2",
          text: l2("integrations.obs.guide_step2")
        }, {
          step: "3",
          text: l2("integrations.obs.guide_step3")
        }].map(e4 => n.jsxs("div", {
          className: "flex items-center gap-3 text-xs text-foreground/85 font-medium",
          children: [n.jsx("div", {
            className: "flex items-center justify-center h-5 w-5 rounded-full bg-hover text-caption font-medium text-foreground/80 shrink-0",
            children: e4.step
          }), n.jsx("span", {
            className: "leading-normal",
            children: e4.text
          })]
        }, e4.step))
      })
    })]
  });
}
function Yn() {
  const t2 = e.c(1);
  let a2;
  return t2[0] === Symbol.for("react.memo_cache_sentinel") ? (a2 = n.jsxs("div", {
    className: "flex flex-col w-full",
    children: [n.jsx(Wn, {}), n.jsx(cs, {}), n.jsx(Zn, {}), n.jsx(cs, {}), n.jsx(Hn, {})]
  }), t2[0] = a2) : a2 = t2[0], a2;
}
function Qn() {
  const t2 = e.c(30),
    {
      t: a2
    } = le(),
    s2 = oe(Xn),
    i2 = oe(Jn);
  let l2;
  e: {
    if (!s2) {
      l2 = "proxy";
      break e;
    }
    if ("others" === s2 || "integrations.others" === s2 || "discord" === s2 || "lastfm" === s2 || "obs" === s2 || (null == s2 ? void 0 : s2.startsWith("integrations.discord")) || (null == s2 ? void 0 : s2.startsWith("integrations.lastfm")) || (null == s2 ? void 0 : s2.startsWith("integrations.obs"))) {
      l2 = "others";
      break e;
    }
    "others" !== (s2.includes(".") ? s2.split(".")[1] : s2) ? l2 = "proxy" : l2 = "others";
  }
  const r2 = l2;
  let o2;
  t2[0] !== i2 ? (o2 = e3 => {
    i2(`integrations.${e3}`);
  }, t2[0] = i2, t2[1] = o2) : o2 = t2[1];
  const c2 = o2;
  let d2, u2, m2, p2, f2, g2, h2;
  t2[2] !== a2 ? (d2 = a2("settings.tabs.integrations.proxy"), t2[2] = a2, t2[3] = d2) : d2 = t2[3], t2[4] === Symbol.for("react.memo_cache_sentinel") ? (u2 = n.jsx(Ne.globe, {
    className: "w-4 h-4"
  }), t2[4] = u2) : u2 = t2[4], t2[5] !== d2 ? (m2 = {
    id: "proxy",
    label: d2,
    icon: u2
  }, t2[5] = d2, t2[6] = m2) : m2 = t2[6], t2[7] !== a2 ? (p2 = a2("settings.tabs.integrations.others"), t2[7] = a2, t2[8] = p2) : p2 = t2[8], t2[9] === Symbol.for("react.memo_cache_sentinel") ? (f2 = n.jsx(Re, {
    className: "w-4 h-4"
  }), t2[9] = f2) : f2 = t2[9], t2[10] !== p2 ? (g2 = {
    id: "others",
    label: p2,
    icon: f2
  }, t2[10] = p2, t2[11] = g2) : g2 = t2[11], t2[12] !== m2 || t2[13] !== g2 ? (h2 = [m2, g2], t2[12] = m2, t2[13] = g2, t2[14] = h2) : h2 = t2[14];
  const v2 = h2;
  let x2;
  t2[15] !== c2 || t2[16] !== r2 || t2[17] !== v2 ? (x2 = n.jsx(zn, {
    tabs: v2,
    activeTab: r2,
    onChange: c2
  }), t2[15] = c2, t2[16] = r2, t2[17] = v2, t2[18] = x2) : x2 = t2[18];
  const y2 = String(r2);
  let b2, j2, w2, k2;
  return t2[19] !== r2 ? (b2 = "proxy" === r2 && n.jsx(Vn, {}), t2[19] = r2, t2[20] = b2) : b2 = t2[20], t2[21] !== r2 ? (j2 = "others" === r2 && n.jsx(Yn, {}), t2[21] = r2, t2[22] = j2) : j2 = t2[22], t2[23] !== y2 || t2[24] !== b2 || t2[25] !== j2 ? (w2 = n.jsxs(ht, {
    id: y2,
    className: "w-full",
    children: [b2, j2]
  }), t2[23] = y2, t2[24] = b2, t2[25] = j2, t2[26] = w2) : w2 = t2[26], t2[27] !== w2 || t2[28] !== x2 ? (k2 = n.jsxs("div", {
    className: "w-full pb-12",
    children: [x2, w2]
  }), t2[27] = w2, t2[28] = x2, t2[29] = k2) : k2 = t2[29], k2;
}
function Jn(e3) {
  return e3.setLastSettingsTab;
}
function Xn(e3) {
  return e3.lastSettingsTab;
}
const ei = "rounded-full overflow-hidden",
  ti = ["spotify", "youtube", "soundcloud", "yandex", "vk", "deezer", "applemusic"];
function ai(t2) {
  var s2, i2;
  const l2 = e.c(28),
    {
      platform: r2,
      isActive: o2,
      isDisabled: c2,
      onClick: d2,
      buttonClassName: u2,
      iconSize: m2,
      variant: p2
    } = t2,
    f2 = void 0 !== c2 && c2,
    g2 = void 0 === m2 ? 20 : m2,
    h2 = void 0 === p2 ? "compact" : p2,
    [v2, x2] = a.useState(false);
  let y2;
  l2[0] !== u2 || l2[1] !== o2 || l2[2] !== f2 || l2[3] !== r2 ? (y2 = "function" == typeof u2 ? u2(r2, o2, f2) : u2, l2[0] = u2, l2[1] = o2, l2[2] = f2, l2[3] = r2, l2[4] = y2) : y2 = l2[4];
  const b2 = y2;
  let j2, w2, k2, N2;
  if (void 0 !== b2) {
    let e3;
    l2[5] !== b2 ? (e3 = ke(ei, b2), l2[5] = b2, l2[6] = e3) : e3 = l2[6], j2 = e3;
  } else if ("pill" === h2) {
    const e3 = o2 ? "bg-primary/15" : "bg-transparent",
      t3 = f2 ? "opacity-30 cursor-not-allowed" : "";
    let a2;
    l2[7] !== e3 || l2[8] !== t3 ? (a2 = ke("size-[52px] min-w-[52px] rounded-full border-0 shadow-none outline-none", e3, `${ei} flex-shrink-0 flex items-center justify-center transition-all duration-200`, t3), l2[7] = e3, l2[8] = t3, l2[9] = a2) : a2 = l2[9], j2 = a2;
  } else if ("ghost" === h2) {
    const e3 = o2 ? "rounded-full bg-muted/70 text-foreground opacity-100 shadow-sm" : f2 ? "opacity-20 cursor-not-allowed text-muted-foreground/30" : "opacity-40 hover:opacity-80 text-muted-foreground";
    let t3;
    l2[10] !== e3 ? (t3 = ke(`${ei} w-9 h-9 flex items-center justify-center transition-all duration-200`, e3), l2[10] = e3, l2[11] = t3) : t3 = l2[11], j2 = t3;
  } else {
    const e3 = o2 ? "bg-pressed text-foreground opacity-100" : f2 ? "cursor-not-allowed opacity-25" : "opacity-55 hover:opacity-100";
    let t3;
    l2[12] !== e3 ? (t3 = ke(`${ei} flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center transition-all duration-200 rounded-full`, e3), l2[12] = e3, l2[13] = t3) : t3 = l2[13], j2 = t3;
  }
  l2[14] === Symbol.for("react.memo_cache_sentinel") ? (w2 = () => x2(true), k2 = () => x2(false), l2[14] = w2, l2[15] = k2) : (w2 = l2[14], k2 = l2[15]), l2[16] !== r2 ? (N2 = null != (i2 = null == (s2 = St().find(e3 => e3.id === r2)) ? void 0 : s2.displayName) ? i2 : r2, l2[16] = r2, l2[17] = N2) : N2 = l2[17];
  const S2 = o2 || v2;
  let _2, C2;
  return l2[18] !== g2 || l2[19] !== r2 || l2[20] !== S2 ? (_2 = n.jsx(wt, {
    source: r2,
    size: g2,
    isSelected: S2
  }), l2[18] = g2, l2[19] = r2, l2[20] = S2, l2[21] = _2) : _2 = l2[21], l2[22] !== j2 || l2[23] !== f2 || l2[24] !== d2 || l2[25] !== N2 || l2[26] !== _2 ? (C2 = n.jsx("button", {
    type: "button",
    onClick: d2,
    disabled: f2,
    onMouseEnter: w2,
    onMouseLeave: k2,
    "aria-label": N2,
    className: j2,
    children: _2
  }), l2[22] = j2, l2[23] = f2, l2[24] = d2, l2[25] = N2, l2[26] = _2, l2[27] = C2) : C2 = l2[27], C2;
}
function si(t2) {
  const a2 = e.c(41),
    {
      currentSource: s2,
      selectedSources: i2,
      onSourceChange: l2,
      onSourceToggle: r2,
      platforms: o2,
      disabledPlatforms: c2,
      label: d2,
      className: u2,
      rowClassName: m2,
      wrap: p2,
      justify: f2,
      variant: g2,
      iconSize: h2,
      buttonClassName: v2,
      gap: x2
    } = t2,
    y2 = void 0 === o2 ? ti : o2;
  let b2;
  a2[0] !== c2 ? (b2 = void 0 === c2 ? {} : c2, a2[0] = c2, a2[1] = b2) : b2 = a2[1];
  const j2 = b2,
    w2 = void 0 !== p2 && p2,
    k2 = void 0 === f2 ? "start" : f2,
    N2 = void 0 === g2 ? "compact" : g2,
    S2 = !!i2,
    _2 = null != h2 ? h2 : "pill" === N2 ? 24 : "ghost" === N2 ? 18 : 20,
    C2 = null != x2 ? x2 : "pill" === N2 ? "gap-2" : "gap-1",
    P2 = "center" === k2 ? "justify-center" : "end" === k2 ? "justify-end" : "justify-start";
  let z2, A2;
  a2[2] !== u2 ? (z2 = ke("flex flex-col gap-1.5", u2), a2[2] = u2, a2[3] = z2) : z2 = a2[3], a2[4] !== d2 ? (A2 = d2 && n.jsx("p", {
    className: "text-caption text-muted-foreground px-0.5 select-none",
    children: d2
  }), a2[4] = d2, a2[5] = A2) : A2 = a2[5];
  const M2 = w2 ? "flex-wrap" : "flex-nowrap overflow-x-auto",
    I2 = "pill" === N2 && !w2 && "pb-1 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
    E2 = "pill" === N2 && w2 && "pb-0";
  let L2, T2, D2, F2;
  if (a2[6] !== P2 || a2[7] !== C2 || a2[8] !== m2 || a2[9] !== I2 || a2[10] !== E2 || a2[11] !== M2 ? (L2 = ke("flex items-center", C2, P2, M2, I2, E2, m2), a2[6] = P2, a2[7] = C2, a2[8] = m2, a2[9] = I2, a2[10] = E2, a2[11] = M2, a2[12] = L2) : L2 = a2[12], a2[13] !== v2 || a2[14] !== s2 || a2[15] !== j2 || a2[16] !== S2 || a2[17] !== l2 || a2[18] !== r2 || a2[19] !== y2 || a2[20] !== _2 || a2[21] !== i2 || a2[22] !== N2) {
    let e3;
    a2[24] !== v2 || a2[25] !== s2 || a2[26] !== j2 || a2[27] !== S2 || a2[28] !== l2 || a2[29] !== r2 || a2[30] !== _2 || a2[31] !== i2 || a2[32] !== N2 ? (e3 = e4 => {
      const t3 = S2 ? i2.includes(e4) : e4 === s2,
        a3 = !!j2[e4];
      return n.jsx(ai, {
        platform: e4,
        isActive: t3,
        isDisabled: a3,
        iconSize: _2,
        variant: N2,
        buttonClassName: v2,
        onClick: () => {
          a3 || (S2 && r2 ? r2(e4) : !S2 && l2 && l2(e4));
        }
      }, e4);
    }, a2[24] = v2, a2[25] = s2, a2[26] = j2, a2[27] = S2, a2[28] = l2, a2[29] = r2, a2[30] = _2, a2[31] = i2, a2[32] = N2, a2[33] = e3) : e3 = a2[33], T2 = y2.map(e3), a2[13] = v2, a2[14] = s2, a2[15] = j2, a2[16] = S2, a2[17] = l2, a2[18] = r2, a2[19] = y2, a2[20] = _2, a2[21] = i2, a2[22] = N2, a2[23] = T2;
  } else T2 = a2[23];
  return a2[34] !== L2 || a2[35] !== T2 ? (D2 = n.jsx("div", {
    className: L2,
    children: T2
  }), a2[34] = L2, a2[35] = T2, a2[36] = D2) : D2 = a2[36], a2[37] !== D2 || a2[38] !== z2 || a2[39] !== A2 ? (F2 = n.jsxs("div", {
    className: z2,
    children: [A2, D2]
  }), a2[37] = D2, a2[38] = z2, a2[39] = A2, a2[40] = F2) : F2 = a2[40], F2;
}
function ni(t2) {
  const a2 = e.c(17);
  let s2, i2, l2;
  a2[0] !== t2 ? ({
    className: i2,
    useAbsolutePosition: l2,
    ...s2
  } = t2, a2[0] = t2, a2[1] = s2, a2[2] = i2, a2[3] = l2) : (s2 = a2[1], i2 = a2[2], l2 = a2[3]);
  const r2 = void 0 === i2 ? "" : i2,
    o2 = void 0 !== l2 && l2;
  let c2;
  a2[4] === Symbol.for("react.memo_cache_sentinel") ? (c2 = n.jsx("span", {
    className: "tracking-tight font-medium",
    children: _t
  }), a2[4] = c2) : c2 = a2[4];
  const d2 = c2;
  if (o2) {
    let e3, t3, i3;
    return a2[5] !== r2 ? (e3 = ke("text-micro text-muted-foreground", r2), a2[5] = r2, a2[6] = e3) : e3 = a2[6], a2[7] !== e3 ? (t3 = n.jsx("div", {
      className: e3,
      children: d2
    }), a2[7] = e3, a2[8] = t3) : t3 = a2[8], a2[9] !== s2 || a2[10] !== t3 ? (i3 = n.jsx("div", {
      className: "absolute bottom-0 left-0 right-0 text-center",
      ...s2,
      children: t3
    }), a2[9] = s2, a2[10] = t3, a2[11] = i3) : i3 = a2[11], i3;
  }
  let u2, m2;
  return a2[12] !== r2 ? (u2 = ke("text-micro text-muted-foreground", r2), a2[12] = r2, a2[13] = u2) : u2 = a2[13], a2[14] !== s2 || a2[15] !== u2 ? (m2 = n.jsx("span", {
    className: u2,
    ...s2,
    children: d2
  }), a2[14] = s2, a2[15] = u2, a2[16] = m2) : m2 = a2[16], m2;
}
function ii(t2) {
  const a2 = e.c(28);
  let s2, i2, l2;
  a2[0] !== t2 ? ({
    country: i2,
    className: s2,
    ...l2
  } = t2, a2[0] = t2, a2[1] = s2, a2[2] = i2, a2[3] = l2) : (s2 = a2[1], i2 = a2[2], l2 = a2[3]);
  const r2 = i2.toLowerCase();
  if ("ru" === r2) {
    let e3, t3, i3, r3, o3;
    return a2[4] !== s2 ? (e3 = ke("w-5 h-3.5 rounded-[3px] shadow-xs overflow-hidden shrink-0 inline-block", s2), a2[4] = s2, a2[5] = e3) : e3 = a2[5], a2[6] === Symbol.for("react.memo_cache_sentinel") ? (t3 = n.jsx("path", {
      fill: "#ffffff",
      d: "M0 0h640v160H0z"
    }), i3 = n.jsx("path", {
      fill: "#0039a6",
      d: "M0 160h640v160H0z"
    }), r3 = n.jsx("path", {
      fill: "#d52b1e",
      d: "M0 320h640v160H0z"
    }), a2[6] = t3, a2[7] = i3, a2[8] = r3) : (t3 = a2[6], i3 = a2[7], r3 = a2[8]), a2[9] !== l2 || a2[10] !== e3 ? (o3 = n.jsxs("svg", {
      viewBox: "0 0 640 480",
      className: e3,
      ...l2,
      children: [t3, i3, r3]
    }), a2[9] = l2, a2[10] = e3, a2[11] = o3) : o3 = a2[11], o3;
  }
  if ("ua" === r2) {
    let e3, t3, i3, r3;
    return a2[12] !== s2 ? (e3 = ke("w-5 h-3.5 rounded-[3px] shadow-xs overflow-hidden shrink-0 inline-block", s2), a2[12] = s2, a2[13] = e3) : e3 = a2[13], a2[14] === Symbol.for("react.memo_cache_sentinel") ? (t3 = n.jsx("path", {
      fill: "#0057b7",
      d: "M0 0h640v240H0z"
    }), i3 = n.jsx("path", {
      fill: "#ffd700",
      d: "M0 240h640v240H0z"
    }), a2[14] = t3, a2[15] = i3) : (t3 = a2[14], i3 = a2[15]), a2[16] !== l2 || a2[17] !== e3 ? (r3 = n.jsxs("svg", {
      viewBox: "0 0 640 480",
      className: e3,
      ...l2,
      children: [t3, i3]
    }), a2[16] = l2, a2[17] = e3, a2[18] = r3) : r3 = a2[18], r3;
  }
  let o2, c2, d2, u2, m2, p2;
  return a2[19] !== s2 ? (o2 = ke("w-5 h-3.5 rounded-[3px] shadow-xs overflow-hidden shrink-0 inline-block", s2), a2[19] = s2, a2[20] = o2) : o2 = a2[20], a2[21] === Symbol.for("react.memo_cache_sentinel") ? (c2 = n.jsx("path", {
    fill: "#bd3d44",
    d: "M0 0h640v480H0z"
  }), d2 = n.jsx("path", {
    stroke: "#ffffff",
    strokeWidth: "37",
    d: "M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
  }), u2 = n.jsx("path", {
    fill: "#192f5d",
    d: "M0 0h260v259H0z"
  }), a2[21] = c2, a2[22] = d2, a2[23] = u2) : (c2 = a2[21], d2 = a2[22], u2 = a2[23]), a2[24] === Symbol.for("react.memo_cache_sentinel") ? (m2 = n.jsxs("g", {
    fill: "#ffffff",
    children: [n.jsx("circle", {
      cx: "50",
      cy: "45",
      r: "14"
    }), n.jsx("circle", {
      cx: "130",
      cy: "45",
      r: "14"
    }), n.jsx("circle", {
      cx: "210",
      cy: "45",
      r: "14"
    }), n.jsx("circle", {
      cx: "90",
      cy: "120",
      r: "14"
    }), n.jsx("circle", {
      cx: "170",
      cy: "120",
      r: "14"
    }), n.jsx("circle", {
      cx: "50",
      cy: "195",
      r: "14"
    }), n.jsx("circle", {
      cx: "130",
      cy: "195",
      r: "14"
    }), n.jsx("circle", {
      cx: "210",
      cy: "195",
      r: "14"
    })]
  }), a2[24] = m2) : m2 = a2[24], a2[25] !== l2 || a2[26] !== o2 ? (p2 = n.jsxs("svg", {
    viewBox: "0 0 640 480",
    className: o2,
    ...l2,
    children: [c2, d2, u2, m2]
  }), a2[25] = l2, a2[26] = o2, a2[27] = p2) : p2 = a2[27], p2;
}
function li() {
  const t2 = e.c(32),
    {
      t: a2,
      efficiencySettings: s2,
      updateEfficiencySettings: i2
    } = Bs();
  let l2, r2, o2, c2, d2, u2, m2, p2, f2;
  t2[0] !== a2 ? (l2 = a2("settings.main.efficiency.title"), t2[0] = a2, t2[1] = l2) : l2 = t2[1], t2[2] !== a2 ? (r2 = a2("settings.main.efficiency.mode.description"), t2[2] = a2, t2[3] = r2) : r2 = t2[3], t2[4] !== a2 ? (o2 = a2("settings.main.efficiency.mode.disabled"), t2[4] = a2, t2[5] = o2) : o2 = t2[5], t2[6] !== o2 ? (c2 = {
    value: "disabled",
    label: o2
  }, t2[6] = o2, t2[7] = c2) : c2 = t2[7], t2[8] !== a2 ? (d2 = a2("settings.main.efficiency.mode.minimized"), t2[8] = a2, t2[9] = d2) : d2 = t2[9], t2[10] !== d2 ? (u2 = {
    value: "minimized",
    label: d2
  }, t2[10] = d2, t2[11] = u2) : u2 = t2[11], t2[12] !== a2 ? (m2 = a2("settings.main.efficiency.mode.unfocused_short"), t2[12] = a2, t2[13] = m2) : m2 = t2[13], t2[14] !== m2 ? (p2 = {
    value: "unfocused",
    label: m2
  }, t2[14] = m2, t2[15] = p2) : p2 = t2[15], t2[16] !== c2 || t2[17] !== u2 || t2[18] !== p2 ? (f2 = [c2, u2, p2], t2[16] = c2, t2[17] = u2, t2[18] = p2, t2[19] = f2) : f2 = t2[19];
  const g2 = s2.unfocused.enabled ? "unfocused" : s2.minimized.enabled ? "minimized" : "disabled";
  let v2, x2, y2;
  return t2[20] !== s2.minimized || t2[21] !== s2.unfocused || t2[22] !== i2 ? (v2 = e3 => {
    i2({
      unfocused: {
        ...s2.unfocused,
        enabled: "unfocused" === e3
      },
      minimized: {
        ...s2.minimized,
        enabled: "disabled" !== e3
      }
    });
  }, t2[20] = s2.minimized, t2[21] = s2.unfocused, t2[22] = i2, t2[23] = v2) : v2 = t2[23], t2[24] !== v2 || t2[25] !== f2 || t2[26] !== g2 ? (x2 = n.jsx(h, {
    options: f2,
    value: g2,
    onChange: v2
  }), t2[24] = v2, t2[25] = f2, t2[26] = g2, t2[27] = x2) : x2 = t2[27], t2[28] !== l2 || t2[29] !== r2 || t2[30] !== x2 ? (y2 = n.jsx(ns, {
    label: l2,
    description: r2,
    children: x2
  }), t2[28] = l2, t2[29] = r2, t2[30] = x2, t2[31] = y2) : y2 = t2[31], y2;
}
const ri = [{
  code: "en",
  title: "English",
  flag: "us"
}, {
  code: "ru",
  title: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
  flag: "ru"
}, {
  code: "ua",
  title: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
  flag: "ua"
}];
function oi() {
  const {
      t: e3
    } = le(),
    [t2, s2] = a.useState(null),
    {
      checkAccess: i2,
      showPremiumDialog: l2
    } = _s(),
    r2 = i2(2);
  return n.jsxs("div", {
    className: ke("relative grid grid-cols-1 page-md:grid-cols-2 gap-2.5 w-full select-none"),
    children: [!r2 && n.jsx(Cs, {
      level: 2,
      onClick: () => l2(e3("settings.main.sync.title"), 2),
      className: "rounded-2xl"
    }), n.jsx(os, {
      layout: "horizontal",
      icon: zt,
      isSelected: "push" === t2,
      disabled: null !== t2,
      onTap: async () => {
        if (r2) {
          s2("push");
          try {
            const e4 = await Mt.getFavorites(),
              t3 = [];
            for (const a2 of It.getState().playlists) {
              const e5 = await Ms.ensurePlaylistLoaded(a2.id);
              e5 && t3.push(e5);
            }
            await ct.library.sync.push(e4, t3);
          } catch {} finally {
            s2(null);
          }
        } else l2(e3("settings.main.sync.title"), 2);
      },
      title: "push" === t2 ? "..." : e3("settings.main.sync.push"),
      subtitle: e3("settings.main.sync.push_desc")
    }), n.jsx(os, {
      layout: "horizontal",
      icon: At,
      isSelected: "pull" === t2,
      disabled: null !== t2,
      onTap: async () => {
        if (r2) {
          if (!t2) {
            s2("pull");
            try {
              const e4 = await ct.library.sync.pull();
              e4.favorites.length > 0 && (await Mt.replaceFavorites(e4.favorites));
              for (const t3 of e4.playlists) {
                if (await Et.pending(t3.id)) continue;
                const e5 = await Lt.pullPlaylist(t3.id).catch(() => null);
                e5 && It.getState().addPlaylist(e5);
              }
              for (const t3 of e4.artists) await Tt.subscribeToArtist({
                artistId: t3.artistId,
                name: t3.artistName || "",
                source: t3.artistSource,
                avatarUrl: t3.artistAvatar
              }).catch(() => {});
              await Dt.replaceUnfavorites(e4.unfavorites.map(e5 => {
                var t3, a2, s3, n2, i3;
                return {
                  id: e5.item_id,
                  title: null != (t3 = e5.title) ? t3 : "",
                  artist: null != (a2 = e5.artist) ? a2 : "",
                  duration: null != (s3 = e5.duration) ? s3 : 0,
                  cover_art: null != (n2 = e5.cover_art) ? n2 : "",
                  source: e5.item_source,
                  added_at: null != (i3 = e5.added_at) ? i3 : Date.now(),
                  item_type: e5.item_type
                };
              })), Ft.getState().loadUnfavorites();
            } catch {} finally {
              s2(null);
            }
          }
        } else l2(e3("settings.main.sync.title"), 2);
      },
      title: "pull" === t2 ? "..." : e3("settings.main.sync.pull"),
      subtitle: e3("settings.main.sync.pull_desc")
    })]
  });
}
const ci = [{
  key: "website",
  href: "https://dotify.fun"
}, {
  key: "telegram",
  href: "https://t.me/nodotify"
}, {
  key: "tos",
  href: "https://dotify.fun/terms"
}, {
  key: "privacy",
  href: "https://dotify.fun/privacy"
}, {
  key: "subs",
  href: "https://dotify.fun/subs"
}];
function di() {
  const t2 = e.c(18),
    {
      t: a2
    } = le();
  let s2, i2, l2, r2, o2, c2, d2, u2, m2, p2;
  return t2[0] !== a2 ? (s2 = a2("settings.main.about.title"), t2[0] = a2, t2[1] = s2) : s2 = t2[1], t2[2] === Symbol.for("react.memo_cache_sentinel") ? (i2 = n.jsx(_, {
    size: 40,
    className: "mt-0.5 shrink-0 text-primary",
    allowDiagnostics: true
  }), t2[2] = i2) : i2 = t2[2], t2[3] === Symbol.for("react.memo_cache_sentinel") ? (l2 = n.jsx("span", {
    className: "text-headline font-semibold text-foreground",
    children: "Dotify"
  }), t2[3] = l2) : l2 = t2[3], t2[4] === Symbol.for("react.memo_cache_sentinel") ? (r2 = n.jsxs("div", {
    className: "flex items-baseline gap-2",
    children: [l2, n.jsx("span", {
      className: "text-footnote text-muted-foreground/70",
      children: n.jsx(ni, {})
    })]
  }), t2[4] = r2) : r2 = t2[4], t2[5] !== a2 ? (o2 = ci.map(e3 => n.jsx("a", {
    href: e3.href,
    target: "_blank",
    rel: "noreferrer",
    className: "rounded text-muted-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    children: a2(`settings.main.about.${e3.key}`)
  }, e3.key)), t2[5] = a2, t2[6] = o2) : o2 = t2[6], t2[7] === Symbol.for("react.memo_cache_sentinel") ? (c2 = n.jsx("span", {
    "aria-hidden": true,
    className: "h-3 w-px self-center bg-border/40"
  }), t2[7] = c2) : c2 = t2[7], t2[8] !== a2 ? (d2 = a2("settings.main.about.reset"), t2[8] = a2, t2[9] = d2) : d2 = t2[9], t2[10] !== d2 ? (u2 = n.jsx(Se, {
    variant: "quiet",
    stretch: true,
    onClick: ui,
    className: "h-auto p-0 text-footnote font-normal text-muted-foreground/70 hover:bg-transparent hover:text-destructive",
    children: d2
  }), t2[10] = d2, t2[11] = u2) : u2 = t2[11], t2[12] !== o2 || t2[13] !== u2 ? (m2 = n.jsxs("div", {
    className: "flex min-w-0 flex-1 flex-col gap-1",
    children: [r2, n.jsxs("nav", {
      className: "flex flex-wrap gap-x-4 gap-y-1 text-footnote",
      children: [o2, c2, u2]
    })]
  }), t2[12] = o2, t2[13] = u2, t2[14] = m2) : m2 = t2[14], t2[15] !== s2 || t2[16] !== m2 ? (p2 = n.jsxs("section", {
    className: "flex items-start gap-3.5 select-none",
    "aria-label": s2,
    children: [i2, m2]
  }), t2[15] = s2, t2[16] = m2, t2[17] = p2) : p2 = t2[17], p2;
}
function ui() {
  Ot();
}
function mi() {
  var t2, a2, i2;
  const l2 = e.c(113),
    {
      t: r2,
      currentLanguage: o2,
      changeLanguage: c2
    } = le(),
    [d2, u2] = Ct(),
    {
      selectedSources: m2,
      setSelectedSources: p2
    } = Pt(s(hi));
  let f2;
  l2[0] === Symbol.for("react.memo_cache_sentinel") ? (f2 = St().map(gi).filter(fi), l2[0] = f2) : f2 = l2[0];
  const g2 = f2;
  let v2;
  l2[1] !== r2 ? (v2 = r2("settings.main.language.title"), l2[1] = r2, l2[2] = v2) : v2 = l2[2];
  const x2 = o2 || "en";
  let y2, b2, j2, w2, k2, N2, S2;
  l2[3] !== c2 ? (y2 = e3 => c2(e3), l2[3] = c2, l2[4] = y2) : y2 = l2[4], l2[5] === Symbol.for("react.memo_cache_sentinel") ? (b2 = ri.map(pi), l2[5] = b2) : b2 = l2[5], l2[6] !== x2 || l2[7] !== y2 ? (j2 = n.jsx(h, {
    value: x2,
    onChange: y2,
    options: b2,
    size: "sm"
  }), l2[6] = x2, l2[7] = y2, l2[8] = j2) : j2 = l2[8], l2[9] !== v2 || l2[10] !== j2 ? (w2 = n.jsx(ns, {
    label: v2,
    children: j2
  }), l2[9] = v2, l2[10] = j2, l2[11] = w2) : w2 = l2[11], l2[12] !== r2 ? (k2 = r2("settings.main.general.preferred_platform_label"), l2[12] = r2, l2[13] = k2) : k2 = l2[13], l2[14] !== r2 ? (N2 = r2("settings.main.general.preferred_platform_description"), l2[14] = r2, l2[15] = N2) : N2 = l2[15], l2[16] !== p2 ? (S2 = () => p2("auto"), l2[16] = p2, l2[17] = S2) : S2 = l2[17];
  const _2 = "auto" === m2 ? "bg-pressed text-foreground" : "text-foreground opacity-60 hover:opacity-100";
  let C2, P2;
  l2[18] !== _2 ? (C2 = ke("h-[34px] w-[34px] shrink-0 p-0 text-xs font-semibold", _2), l2[18] = _2, l2[19] = C2) : C2 = l2[19], l2[20] !== r2 ? (P2 = r2("common.auto"), l2[20] = r2, l2[21] = P2) : P2 = l2[21];
  const z2 = "auto" === m2;
  let A2, M2, I2, E2, L2, T2, D2, F2, O2, $2, B2;
  l2[22] !== C2 || l2[23] !== P2 || l2[24] !== z2 || l2[25] !== S2 ? (A2 = n.jsx(Se, {
    type: "button",
    variant: "ghost",
    shape: "circle",
    onClick: S2,
    className: C2,
    "aria-label": P2,
    "aria-pressed": z2,
    children: "A"
  }), l2[22] = C2, l2[23] = P2, l2[24] = z2, l2[25] = S2, l2[26] = A2) : A2 = l2[26], l2[27] !== m2 ? (M2 = "auto" === m2 ? [] : m2, l2[27] = m2, l2[28] = M2) : M2 = l2[28], l2[29] !== m2 || l2[30] !== p2 ? (I2 = e3 => {
    const t3 = e3;
    if ("auto" !== m2) {
      if (m2.includes(t3)) {
        const e4 = m2.filter(e5 => e5 !== t3);
        p2(0 === e4.length ? "auto" : e4);
      } else m2.length < 3 ? p2([...m2, t3]) : p2([...m2.slice(0, 2), t3]);
    } else p2([t3]);
  }, l2[29] = m2, l2[30] = p2, l2[31] = I2) : I2 = l2[31], l2[32] !== M2 || l2[33] !== I2 ? (E2 = n.jsx(si, {
    selectedSources: M2,
    onSourceToggle: I2,
    platforms: g2,
    variant: "compact"
  }), l2[32] = M2, l2[33] = I2, l2[34] = E2) : E2 = l2[34], l2[35] !== A2 || l2[36] !== E2 ? (L2 = n.jsxs("div", {
    className: "flex items-center gap-1.5",
    children: [A2, E2]
  }), l2[35] = A2, l2[36] = E2, l2[37] = L2) : L2 = l2[37], l2[38] !== L2 || l2[39] !== k2 || l2[40] !== N2 ? (T2 = n.jsx(ns, {
    label: k2,
    description: N2,
    children: L2
  }), l2[38] = L2, l2[39] = k2, l2[40] = N2, l2[41] = T2) : T2 = l2[41], l2[42] !== T2 || l2[43] !== w2 ? (D2 = n.jsxs(is, {
    children: [w2, T2]
  }), l2[42] = T2, l2[43] = w2, l2[44] = D2) : D2 = l2[44], l2[45] === Symbol.for("react.memo_cache_sentinel") ? (F2 = n.jsx(cs, {}), l2[45] = F2) : F2 = l2[45], l2[46] !== r2 ? (O2 = r2("library.settings.title"), l2[46] = r2, l2[47] = O2) : O2 = l2[47], l2[48] !== r2 ? ($2 = r2("library.settings.insertion"), l2[48] = r2, l2[49] = $2) : $2 = l2[49], l2[50] !== r2 ? (B2 = r2("library.settings.insertion_description"), l2[50] = r2, l2[51] = B2) : B2 = l2[51];
  const U2 = null != (t2 = d2.insertion) ? t2 : "start";
  let R2, q2, V2, W2, K2, G2, Z2, H2, Y2, Q2, J2, X2, ee2, te2;
  l2[52] !== u2 ? (R2 = e3 => u2({
    insertion: e3
  }), l2[52] = u2, l2[53] = R2) : R2 = l2[53], l2[54] !== r2 ? (q2 = r2("library.settings.start"), l2[54] = r2, l2[55] = q2) : q2 = l2[55], l2[56] !== q2 ? (V2 = {
    value: "start",
    label: q2
  }, l2[56] = q2, l2[57] = V2) : V2 = l2[57], l2[58] !== r2 ? (W2 = r2("library.settings.end"), l2[58] = r2, l2[59] = W2) : W2 = l2[59], l2[60] !== W2 ? (K2 = {
    value: "end",
    label: W2
  }, l2[60] = W2, l2[61] = K2) : K2 = l2[61], l2[62] !== V2 || l2[63] !== K2 ? (G2 = [V2, K2], l2[62] = V2, l2[63] = K2, l2[64] = G2) : G2 = l2[64], l2[65] !== U2 || l2[66] !== R2 || l2[67] !== G2 ? (Z2 = n.jsx(h, {
    value: U2,
    onChange: R2,
    options: G2
  }), l2[65] = U2, l2[66] = R2, l2[67] = G2, l2[68] = Z2) : Z2 = l2[68], l2[69] !== $2 || l2[70] !== B2 || l2[71] !== Z2 ? (H2 = n.jsx(ns, {
    label: $2,
    description: B2,
    children: Z2
  }), l2[69] = $2, l2[70] = B2, l2[71] = Z2, l2[72] = H2) : H2 = l2[72], l2[73] === Symbol.for("react.memo_cache_sentinel") ? (Y2 = n.jsx(oi, {}), l2[73] = Y2) : Y2 = l2[73], l2[74] !== O2 || l2[75] !== H2 ? (Q2 = n.jsxs(is, {
    title: O2,
    children: [H2, Y2]
  }), l2[74] = O2, l2[75] = H2, l2[76] = Q2) : Q2 = l2[76], l2[77] === Symbol.for("react.memo_cache_sentinel") ? (J2 = n.jsx(cs, {}), l2[77] = J2) : J2 = l2[77], l2[78] !== r2 ? (X2 = r2("settings.main.sections.startup"), l2[78] = r2, l2[79] = X2) : X2 = l2[79], l2[80] !== r2 ? (ee2 = r2("settings.main.advanced.autolaunch"), l2[80] = r2, l2[81] = ee2) : ee2 = l2[81], l2[82] !== r2 ? (te2 = r2("settings.main.advanced.autolaunch_description"), l2[82] = r2, l2[83] = te2) : te2 = l2[83];
  const ae2 = null != (a2 = d2.autolaunch) && a2;
  let se2, ne2, ie2, re2;
  l2[84] !== u2 ? (se2 = e3 => u2({
    autolaunch: e3
  }), l2[84] = u2, l2[85] = se2) : se2 = l2[85], l2[86] !== ee2 || l2[87] !== te2 || l2[88] !== ae2 || l2[89] !== se2 ? (ne2 = n.jsx(ls, {
    label: ee2,
    description: te2,
    checked: ae2,
    onCheckedChange: se2
  }), l2[86] = ee2, l2[87] = te2, l2[88] = ae2, l2[89] = se2, l2[90] = ne2) : ne2 = l2[90], l2[91] !== r2 ? (ie2 = r2("settings.main.advanced.tray"), l2[91] = r2, l2[92] = ie2) : ie2 = l2[92], l2[93] !== r2 ? (re2 = r2("settings.main.advanced.tray_description"), l2[93] = r2, l2[94] = re2) : re2 = l2[94];
  const oe2 = null != (i2 = d2.minimizetotray) && i2;
  let ce2, de2, ue2, me2, pe2, fe2, ge2;
  return l2[95] !== u2 ? (ce2 = e3 => u2({
    minimizetotray: e3
  }), l2[95] = u2, l2[96] = ce2) : ce2 = l2[96], l2[97] !== ie2 || l2[98] !== re2 || l2[99] !== oe2 || l2[100] !== ce2 ? (de2 = n.jsx(ls, {
    label: ie2,
    description: re2,
    checked: oe2,
    onCheckedChange: ce2
  }), l2[97] = ie2, l2[98] = re2, l2[99] = oe2, l2[100] = ce2, l2[101] = de2) : de2 = l2[101], l2[102] === Symbol.for("react.memo_cache_sentinel") ? (ue2 = n.jsx(li, {}), l2[102] = ue2) : ue2 = l2[102], l2[103] !== X2 || l2[104] !== ne2 || l2[105] !== de2 ? (me2 = n.jsxs(is, {
    title: X2,
    children: [ne2, de2, ue2]
  }), l2[103] = X2, l2[104] = ne2, l2[105] = de2, l2[106] = me2) : me2 = l2[106], l2[107] === Symbol.for("react.memo_cache_sentinel") ? (pe2 = n.jsx(cs, {}), fe2 = n.jsx(di, {}), l2[107] = pe2, l2[108] = fe2) : (pe2 = l2[107], fe2 = l2[108]), l2[109] !== D2 || l2[110] !== Q2 || l2[111] !== me2 ? (ge2 = n.jsxs("div", {
    className: "flex flex-col pb-6",
    children: [D2, F2, Q2, J2, me2, pe2, fe2]
  }), l2[109] = D2, l2[110] = Q2, l2[111] = me2, l2[112] = ge2) : ge2 = l2[112], ge2;
}
function pi(e3) {
  return {
    value: e3.code,
    label: n.jsx("div", {
      className: "flex items-center justify-center px-1.5 py-0.5",
      children: n.jsx(ii, {
        country: e3.flag,
        className: "w-5 h-3.5 rounded-[2.5px] shadow-xs shrink-0"
      })
    })
  };
}
function fi(e3) {
  return ["youtube", "soundcloud", "spotify", "vk", "yandex", "deezer", "applemusic"].includes(e3);
}
function gi(e3) {
  return e3.id;
}
function hi(e3) {
  return {
    selectedSources: e3.selectedSources,
    setSelectedSources: e3.setSelectedSources
  };
}
const vi = [{
    id: "play-pause",
    nameKey: "settings.keybinds.actions.playPause.name",
    descriptionKey: "settings.keybinds.actions.playPause.description",
    icon: Ne.play
  }, {
    id: "next",
    nameKey: "settings.keybinds.actions.nextTrack.name",
    descriptionKey: "settings.keybinds.actions.nextTrack.description",
    icon: Ne.next
  }, {
    id: "prev",
    nameKey: "settings.keybinds.actions.prevTrack.name",
    descriptionKey: "settings.keybinds.actions.prevTrack.description",
    icon: Ne.previous
  }, {
    id: "seek-back",
    nameKey: "settings.keybinds.actions.seekBack.name",
    descriptionKey: "settings.keybinds.actions.seekBack.description",
    icon: Ne.seekBack
  }, {
    id: "seek-forward",
    nameKey: "settings.keybinds.actions.seekForward.name",
    descriptionKey: "settings.keybinds.actions.seekForward.description",
    icon: Ne.seekForward
  }, {
    id: "like",
    nameKey: "settings.keybinds.actions.likeCurrentTrack.name",
    descriptionKey: "settings.keybinds.actions.likeCurrentTrack.description",
    icon: Ne.like
  }, {
    id: "volume-up",
    nameKey: "settings.keybinds.actions.volumeUp.name",
    descriptionKey: "settings.keybinds.actions.volumeUp.description",
    icon: Ne.volume
  }, {
    id: "volume-down",
    nameKey: "settings.keybinds.actions.volumeDown.name",
    descriptionKey: "settings.keybinds.actions.volumeDown.description",
    icon: Ut
  }, {
    id: "toggle-overlay",
    nameKey: "settings.keybinds.actions.toggleOverlay.name",
    descriptionKey: "settings.keybinds.actions.toggleOverlay.description",
    icon: Te
  }, {
    id: "always-on-top",
    nameKey: "settings.keybinds.actions.alwaysOnTop.name",
    descriptionKey: "settings.keybinds.actions.alwaysOnTop.description",
    icon: Ne.pin
  }],
  xi = [{
    id: "open-search",
    nameKey: "settings.keybinds.actions.openSearch.name",
    descriptionKey: "settings.keybinds.actions.openSearch.description",
    icon: Ne.search
  }, {
    id: "start-wave",
    nameKey: "settings.keybinds.actions.startWave.name",
    descriptionKey: "settings.keybinds.actions.startWave.description",
    icon: Ne.wave
  }];
function yi() {
  const t2 = e.c(52),
    [s2, i2] = $t(),
    {
      t: r2
    } = le();
  let o2;
  t2[0] !== s2.keys ? (o2 = Bt(s2.keys), t2[0] = s2.keys, t2[1] = o2) : o2 = t2[1];
  const c2 = o2;
  let d2;
  t2[2] === Symbol.for("react.memo_cache_sentinel") ? (d2 = {
    actionId: null,
    keys: []
  }, t2[2] = d2) : d2 = t2[2];
  const [u2, m2] = a.useState(d2);
  let p2;
  t2[3] === Symbol.for("react.memo_cache_sentinel") ? (p2 = new Set(), t2[3] = p2) : p2 = t2[3];
  const f2 = a.useRef(p2),
    g2 = a.useRef(null);
  let h2, v2;
  t2[4] === Symbol.for("react.memo_cache_sentinel") ? (h2 = () => () => {
    g2.current && clearTimeout(g2.current);
  }, v2 = [], t2[4] = h2, t2[5] = v2) : (h2 = t2[4], v2 = t2[5]), a.useEffect(h2, v2);
  const x2 = ji;
  let y2;
  t2[6] === Symbol.for("react.memo_cache_sentinel") ? (y2 = e3 => {
    g2.current && clearTimeout(g2.current), f2.current.clear(), m2({
      actionId: e3,
      keys: []
    }), document.body.focus();
  }, t2[6] = y2) : y2 = t2[6];
  const b2 = y2;
  let j2;
  t2[7] === Symbol.for("react.memo_cache_sentinel") ? (j2 = () => {
    g2.current && (clearTimeout(g2.current), g2.current = null), m2({
      actionId: null,
      keys: []
    }), f2.current.clear();
  }, t2[7] = j2) : j2 = t2[7];
  const w2 = j2;
  let k2;
  t2[8] !== u2.actionId || t2[9] !== c2 || t2[10] !== i2 ? (k2 = e3 => {
    if (!u2.actionId) return;
    const t3 = u2.actionId;
    let a2 = c2.map(a3 => a3.action === t3 ? {
      ...a3,
      keys: e3,
      enabled: true
    } : a3);
    c2.some(e4 => e4.action === t3) || (a2 = [...c2, {
      action: t3,
      keys: e3,
      enabled: true
    }]), i2({
      keys: a2
    }), w2();
  }, t2[8] = u2.actionId, t2[9] = c2, t2[10] = i2, t2[11] = k2) : k2 = t2[11];
  const N2 = k2;
  let S2;
  t2[12] !== c2 ? (S2 = e3 => c2.find(t3 => t3.action === e3), t2[12] = c2, t2[13] = S2) : S2 = t2[13];
  const _2 = S2;
  let P2;
  t2[14] !== c2 || t2[15] !== i2 ? (P2 = (e3, t3) => {
    t3.stopPropagation();
    const a2 = c2.map(t4 => t4.action === e3 ? {
      ...t4,
      keys: [],
      enabled: false
    } : t4);
    i2({
      keys: a2
    });
  }, t2[14] = c2, t2[15] = i2, t2[16] = P2) : P2 = t2[16];
  const z2 = P2;
  let A2, M2, I2;
  t2[17] !== u2.actionId || t2[18] !== u2.keys || t2[19] !== c2 || t2[20] !== N2 || t2[21] !== i2 ? (A2 = () => {
    if (!u2.actionId) return;
    const e3 = e4 => {
        if (e4.preventDefault(), e4.stopPropagation(), e4.repeat || e4.isComposing) return;
        const t4 = e4.code;
        if ("Escape" === t4) return void w2();
        if ("Backspace" === t4) {
          if (u2.actionId) {
            w2();
            const e5 = c2.map(e6 => e6.action === u2.actionId ? {
              ...e6,
              keys: [],
              enabled: false
            } : e6);
            i2({
              keys: e5
            });
          }
          return;
        }
        if (f2.current.has(t4)) return;
        f2.current.add(t4);
        const a2 = Array.from(f2.current).sort();
        if (0 === a2.length) return;
        c2.find(e5 => e5.action !== u2.actionId && false !== e5.enabled && e5.keys && Array.isArray(e5.keys) && e5.keys.length > 0 && Rt(e5.keys) === Rt(a2)) || m2(e5 => ({
          ...e5,
          keys: a2
        }));
      },
      t3 = e4 => {
        const t4 = e4.code;
        if (f2.current.delete(t4), 0 === f2.current.size && u2.keys.length > 0) {
          if (!u2.keys.some(bi)) return;
          g2.current = setTimeout(() => {
            u2.keys.length > 0 && N2([...u2.keys].sort());
          }, qt.DEBOUNCE_SHORT);
        }
      };
    return window.addEventListener("keydown", e3), window.addEventListener("keyup", t3), () => {
      window.removeEventListener("keydown", e3), window.removeEventListener("keyup", t3);
    };
  }, t2[17] = u2.actionId, t2[18] = u2.keys, t2[19] = c2, t2[20] = N2, t2[21] = i2, t2[22] = A2) : A2 = t2[22], t2[23] !== u2 || t2[24] !== c2 || t2[25] !== N2 || t2[26] !== i2 ? (M2 = [u2, c2, N2, w2, i2], t2[23] = u2, t2[24] = c2, t2[25] = N2, t2[26] = i2, t2[27] = M2) : M2 = t2[27], a.useEffect(A2, M2), t2[28] !== z2 || t2[29] !== u2.actionId || t2[30] !== u2.keys || t2[31] !== _2 || t2[32] !== r2 ? (I2 = e3 => n.jsx("div", {
    className: "flex flex-col gap-1",
    children: e3.map(e4 => {
      var t3;
      const a2 = _2(e4.id),
        s3 = u2.actionId === e4.id,
        i3 = C(a2),
        o3 = s3 ? u2.keys : i3 && null != (t3 = null == a2 ? void 0 : a2.keys) ? t3 : [];
      return n.jsxs("div", {
        className: "group/bind flex items-center gap-3 rounded-2xl py-2",
        children: [n.jsx("span", {
          className: "flex w-5 shrink-0 items-center justify-center text-muted-foreground",
          children: e4.icon && n.jsx(e4.icon, {
            className: "h-[18px] w-[18px]",
            strokeWidth: 1.5
          })
        }), n.jsxs("div", {
          className: "min-w-0 flex-1",
          children: [n.jsx("p", {
            className: "truncate text-callout font-medium text-foreground",
            children: r2(e4.nameKey)
          }), n.jsx("p", {
            className: "truncate text-footnote text-muted-foreground",
            children: r2(e4.descriptionKey)
          })]
        }), n.jsxs("div", {
          className: "relative shrink-0",
          children: [n.jsx(Se, {
            type: "button",
            variant: "quiet",
            size: "compact",
            onClick: () => b2(e4.id),
            "aria-label": r2(e4.nameKey),
            className: ke("group/field h-9 w-[152px] justify-center rounded-xl px-8 text-footnote font-medium", s3 ? "bg-selected text-foreground" : i3 ? "bg-plate text-foreground hover:bg-hover" : "bg-transparent text-foreground/35 hover:bg-plate hover:text-foreground/70"),
            children: o3.length > 0 ? n.jsx("span", {
              className: "flex items-center gap-1.5",
              children: o3.map((e5, t4) => n.jsxs(l.Fragment, {
                children: [t4 > 0 && n.jsx("span", {
                  className: "text-foreground/30",
                  children: "+"
                }), n.jsx("span", {
                  children: x2(e5)
                })]
              }, t4))
            }) : s3 ? n.jsx("span", {
              className: "text-muted-foreground",
              children: r2("settings.keybinds.recording")
            }) : n.jsxs(n.Fragment, {
              children: [n.jsx("span", {
                className: "group-hover/field:hidden",
                children: r2("settings.keybinds.not_set")
              }), n.jsx("span", {
                className: "hidden group-hover/field:inline",
                children: r2("settings.keybinds.assign")
              })]
            })
          }), i3 && !s3 && n.jsx(Se, {
            type: "button",
            variant: "ghost",
            size: "icon-2xs",
            className: "absolute right-1.5 top-1/2 h-6 w-6 -translate-y-1/2 rounded-lg text-muted-foreground/60 opacity-0 transition-opacity hover:text-destructive group-hover/bind:opacity-100",
            onClick: t4 => z2(e4.id, t4),
            "aria-label": r2("settings.keybinds.clear"),
            children: n.jsx(Ne.close, {
              className: "h-3.5 w-3.5"
            })
          })]
        })]
      }, e4.id);
    })
  }), t2[28] = z2, t2[29] = u2.actionId, t2[30] = u2.keys, t2[31] = _2, t2[32] = r2, t2[33] = I2) : I2 = t2[33];
  const E2 = I2,
    L2 = u2.actionId ? "" : void 0;
  let T2, D2, F2, O2, $2, B2, U2;
  return t2[34] !== r2 ? (T2 = r2("settings.keybinds.local_title"), t2[34] = r2, t2[35] = T2) : T2 = t2[35], t2[36] !== E2 ? (D2 = E2(xi), t2[36] = E2, t2[37] = D2) : D2 = t2[37], t2[38] !== T2 || t2[39] !== D2 ? (F2 = n.jsx(is, {
    title: T2,
    children: D2
  }), t2[38] = T2, t2[39] = D2, t2[40] = F2) : F2 = t2[40], t2[41] !== r2 ? (O2 = r2("settings.keybinds.global_title"), t2[41] = r2, t2[42] = O2) : O2 = t2[42], t2[43] !== E2 ? ($2 = E2(vi), t2[43] = E2, t2[44] = $2) : $2 = t2[44], t2[45] !== O2 || t2[46] !== $2 ? (B2 = n.jsx(is, {
    title: O2,
    children: $2
  }), t2[45] = O2, t2[46] = $2, t2[47] = B2) : B2 = t2[47], t2[48] !== L2 || t2[49] !== F2 || t2[50] !== B2 ? (U2 = n.jsxs("div", {
    className: "flex flex-col gap-8 pb-6",
    "data-hotkey-recording": L2,
    children: [F2, B2]
  }), t2[48] = L2, t2[49] = F2, t2[50] = B2, t2[51] = U2) : U2 = t2[51], U2;
}
function bi(e3) {
  return !/^(Control|Alt|Shift|Meta)(Left|Right)$/i.test(e3);
}
function ji(e3) {
  const t2 = e3.replace(/^Key/i, "").replace(/^Digit/i, "");
  return {
    altleft: "Alt",
    altright: "Alt",
    controlleft: "Ctrl",
    controlright: "Ctrl",
    shiftleft: "Shift",
    shiftright: "Shift",
    metaleft: /Mac/i.test(navigator.platform) ? "\u2318" : "Win",
    metaright: /Mac/i.test(navigator.platform) ? "\u2318" : "Win",
    space: "Space",
    slash: "/",
    arrowup: "\u2191",
    arrowdown: "\u2193",
    arrowleft: "\u2190",
    arrowright: "\u2192"
  }[t2.toLowerCase()] || t2.toUpperCase();
}
function wi() {
  const t2 = e.c(38),
    {
      t: a2
    } = le(),
    s2 = oe(Ni),
    i2 = oe(ki);
  let l2;
  e: {
    if (!s2) {
      l2 = "general";
      break e;
    }
    let e3;
    t2[0] !== s2 ? (e3 = s2.includes(".") ? s2.split(".")[1] : s2, t2[0] = s2, t2[1] = e3) : e3 = t2[1];
    const a3 = e3;
    ["general", "storage", "keybinds"].includes(a3) ? l2 = a3 : l2 = "general";
  }
  const r2 = l2;
  let o2;
  t2[2] !== i2 ? (o2 = e3 => {
    i2(`main.${e3}`);
  }, t2[2] = i2, t2[3] = o2) : o2 = t2[3];
  const c2 = o2;
  let d2, u2, m2, p2, f2, g2, h2;
  t2[4] !== a2 ? (d2 = a2("settings.tabs.main.general"), t2[4] = a2, t2[5] = d2) : d2 = t2[5], t2[6] !== d2 ? (u2 = {
    id: "general",
    label: d2,
    icon: Vt
  }, t2[6] = d2, t2[7] = u2) : u2 = t2[7], t2[8] !== a2 ? (m2 = a2("settings.tabs.main.keybinds"), t2[8] = a2, t2[9] = m2) : m2 = t2[9], t2[10] !== m2 ? (p2 = {
    id: "keybinds",
    label: m2,
    icon: Wt
  }, t2[10] = m2, t2[11] = p2) : p2 = t2[11], t2[12] !== a2 ? (f2 = a2("settings.tabs.main.storage"), t2[12] = a2, t2[13] = f2) : f2 = t2[13], t2[14] !== f2 ? (g2 = {
    id: "storage",
    label: f2,
    icon: xt
  }, t2[14] = f2, t2[15] = g2) : g2 = t2[15], t2[16] !== u2 || t2[17] !== p2 || t2[18] !== g2 ? (h2 = [u2, p2, g2], t2[16] = u2, t2[17] = p2, t2[18] = g2, t2[19] = h2) : h2 = t2[19];
  const v2 = h2;
  let x2;
  t2[20] !== r2 || t2[21] !== c2 || t2[22] !== v2 ? (x2 = n.jsx(zn, {
    tabs: v2,
    activeTab: r2,
    onChange: c2
  }), t2[20] = r2, t2[21] = c2, t2[22] = v2, t2[23] = x2) : x2 = t2[23];
  const y2 = String(r2);
  let b2, j2, w2, k2, N2;
  return t2[24] !== r2 ? (b2 = "general" === r2 && n.jsx(mi, {}), t2[24] = r2, t2[25] = b2) : b2 = t2[25], t2[26] !== r2 ? (j2 = "storage" === r2 && n.jsx(ms, {}), t2[26] = r2, t2[27] = j2) : j2 = t2[27], t2[28] !== r2 ? (w2 = "keybinds" === r2 && n.jsx(yi, {}), t2[28] = r2, t2[29] = w2) : w2 = t2[29], t2[30] !== y2 || t2[31] !== b2 || t2[32] !== j2 || t2[33] !== w2 ? (k2 = n.jsxs(ht, {
    id: y2,
    className: "w-full",
    children: [b2, j2, w2]
  }), t2[30] = y2, t2[31] = b2, t2[32] = j2, t2[33] = w2, t2[34] = k2) : k2 = t2[34], t2[35] !== k2 || t2[36] !== x2 ? (N2 = n.jsxs("div", {
    className: "w-full pb-8",
    children: [x2, k2]
  }), t2[35] = k2, t2[36] = x2, t2[37] = N2) : N2 = t2[37], N2;
}
function ki(e3) {
  return e3.setLastSettingsTab;
}
function Ni(e3) {
  return e3.lastSettingsTab;
}
function _i() {
  var t2;
  const s2 = e.c(151),
    {
      t: i2
    } = le(),
    {
      showPremiumDialog: l2
    } = _s(),
    {
      audioDataValue: r2,
      audioActionsValue: o2
    } = __fork_audio(),
    {
      audioDevices: c2,
      activeDeviceId: d2,
      gaplessEnabled: u2,
      crossfadeEnabled: m2,
      normalizationEnabled: p2,
      hasLosslessAccess: f2,
      currentAudioQuality: g2,
      playerSettings: h2
    } = r2,
    {
      updatePlayerSettings: v2,
      handleDeviceChange: x2,
      handleAudioQualityChange: y2
    } = o2,
    b2 = Pi,
    j2 = Ci;
  let w2;
  s2[0] === Symbol.for("react.memo_cache_sentinel") ? (w2 = /^(Default|Communications|По умолчанию|Связь)\s*[-–]/i, s2[0] = w2) : w2 = s2[0];
  const k2 = w2;
  let N2, S2, _2, C2, P2, z2, A2, M2, I2, E2, L2, T2, D2, F2, O2, $2, B2, U2, R2, q2, V2, W2, K2, G2, Z2, H2, Y2, Q2, J2, X2, ee2, te2, ae2, se2, ne2, ie2;
  if (s2[1] !== d2 || s2[2] !== c2 || s2[3] !== x2 || s2[4] !== i2) {
    let e3;
    s2[15] === Symbol.for("react.memo_cache_sentinel") ? (e3 = e4 => !k2.test(e4.label || ""), s2[15] = e3) : e3 = s2[15];
    const t3 = c2.filter(e3),
      a2 = new Set(),
      l3 = t3.filter(e4 => {
        const t4 = b2(e4.label || "").replace(/\s*\([^)]*\)\s*$/, "").trim().toLowerCase() || e4.deviceId;
        return !a2.has(t4) && (a2.add(t4), true);
      });
    let r3, o3, u3, m3, p3, f3, g3, h3, v3, y3, w3, L3, T3, D3, F3;
    s2[16] !== i2 ? (r3 = i2("settings.main.player.audio.quality.low"), s2[16] = i2, s2[17] = r3) : r3 = s2[17], s2[18] !== i2 ? (o3 = i2("settings.main.player.audio.quality.bitrate", {
      value: 192
    }), s2[18] = i2, s2[19] = o3) : o3 = s2[19], s2[20] !== r3 || s2[21] !== o3 ? (u3 = {
      key: "low",
      icon: Ne.qualityLow,
      title: r3,
      numeric: o3
    }, s2[20] = r3, s2[21] = o3, s2[22] = u3) : u3 = s2[22], s2[23] !== i2 ? (m3 = i2("settings.main.player.audio.quality.medium"), s2[23] = i2, s2[24] = m3) : m3 = s2[24], s2[25] !== i2 ? (p3 = i2("settings.main.player.audio.quality.bitrate", {
      value: 256
    }), s2[25] = i2, s2[26] = p3) : p3 = s2[26], s2[27] !== m3 || s2[28] !== p3 ? (f3 = {
      key: "medium",
      icon: Ne.qualityMedium,
      title: m3,
      numeric: p3
    }, s2[27] = m3, s2[28] = p3, s2[29] = f3) : f3 = s2[29], s2[30] !== i2 ? (g3 = i2("settings.main.player.audio.quality.high"), s2[30] = i2, s2[31] = g3) : g3 = s2[31], s2[32] !== i2 ? (h3 = i2("settings.main.player.audio.quality.bitrate", {
      value: 320
    }), s2[32] = i2, s2[33] = h3) : h3 = s2[33], s2[34] !== g3 || s2[35] !== h3 ? (v3 = {
      key: "high",
      icon: Ne.qualityHigh,
      title: g3,
      numeric: h3
    }, s2[34] = g3, s2[35] = h3, s2[36] = v3) : v3 = s2[36], s2[37] !== i2 ? (y3 = i2("settings.main.player.audio.quality.max"), s2[37] = i2, s2[38] = y3) : y3 = s2[38], s2[39] !== i2 ? (w3 = i2("settings.main.player.audio.quality.max_bitrate", {
      value: 1411
    }), s2[39] = i2, s2[40] = w3) : w3 = s2[40], s2[41] !== y3 || s2[42] !== w3 ? (L3 = {
      key: "max",
      icon: Ne.wave,
      title: y3,
      numeric: w3
    }, s2[41] = y3, s2[42] = w3, s2[43] = L3) : L3 = s2[43], s2[44] !== u3 || s2[45] !== f3 || s2[46] !== v3 || s2[47] !== L3 ? (T3 = [u3, f3, v3, L3], s2[44] = u3, s2[45] = f3, s2[46] = v3, s2[47] = L3, s2[48] = T3) : T3 = s2[48], C2 = T3, E2 = "flex flex-col pb-6", _2 = is, S2 = ns, s2[49] !== i2 ? (A2 = i2("settings.main.player.audio.device.title"), s2[49] = i2, s2[50] = A2) : A2 = s2[50], s2[51] !== i2 ? (M2 = i2("settings.main.player.audio.device.description"), s2[51] = i2, s2[52] = M2) : M2 = s2[52], I2 = true, N2 = rs, s2[53] !== i2 ? (D3 = i2("settings.main.player.audio.device.default"), s2[53] = i2, s2[54] = D3) : D3 = s2[54], s2[55] !== i2 ? (F3 = i2("settings.main.player.audio.device.system"), s2[55] = i2, s2[56] = F3) : F3 = s2[56];
    const O3 = "default" === d2;
    let $3, B3;
    s2[57] !== x2 ? ($3 = () => x2("default"), s2[57] = x2, s2[58] = $3) : $3 = s2[58], s2[59] !== D3 || s2[60] !== F3 || s2[61] !== O3 || s2[62] !== $3 ? (P2 = n.jsx(os, {
      layout: "vertical",
      icon: Yt,
      title: D3,
      subtitle: F3,
      isSelected: O3,
      onClick: $3
    }), s2[59] = D3, s2[60] = F3, s2[61] = O3, s2[62] = $3, s2[63] = P2) : P2 = s2[63], s2[64] !== d2 || s2[65] !== x2 || s2[66] !== i2 ? (B3 = e4 => {
      var t4;
      const a3 = (null == (t4 = e4.label) ? void 0 : t4.trim()) || "",
        s3 = b2(a3),
        l4 = s3.replace(/\s*\([^)]*\)\s*$/, "").trim() || s3 || e4.deviceId,
        r4 = d2 === e4.deviceId,
        o4 = j2(a3);
      return n.jsx(os, {
        layout: "vertical",
        icon: o4,
        title: l4,
        subtitle: i2("settings.main.player.audio.device.output"),
        isSelected: r4,
        onClick: () => x2(e4.deviceId)
      }, e4.deviceId);
    }, s2[64] = d2, s2[65] = x2, s2[66] = i2, s2[67] = B3) : B3 = s2[67], z2 = l3.map(B3), s2[1] = d2, s2[2] = c2, s2[3] = x2, s2[4] = i2, s2[5] = N2, s2[6] = S2, s2[7] = _2, s2[8] = C2, s2[9] = P2, s2[10] = z2, s2[11] = A2, s2[12] = M2, s2[13] = I2, s2[14] = E2;
  } else N2 = s2[5], S2 = s2[6], _2 = s2[7], C2 = s2[8], P2 = s2[9], z2 = s2[10], A2 = s2[11], M2 = s2[12], I2 = s2[13], E2 = s2[14];
  return s2[68] !== N2 || s2[69] !== P2 || s2[70] !== z2 ? (L2 = n.jsxs(N2, {
    children: [P2, z2]
  }), s2[68] = N2, s2[69] = P2, s2[70] = z2, s2[71] = L2) : L2 = s2[71], s2[72] !== S2 || s2[73] !== A2 || s2[74] !== M2 || s2[75] !== I2 || s2[76] !== L2 ? (T2 = n.jsx(S2, {
    label: A2,
    description: M2,
    vertical: I2,
    children: L2
  }), s2[72] = S2, s2[73] = A2, s2[74] = M2, s2[75] = I2, s2[76] = L2, s2[77] = T2) : T2 = s2[77], s2[78] !== i2 ? (D2 = i2("settings.main.player.audio.quality.title"), s2[78] = i2, s2[79] = D2) : D2 = s2[79], s2[80] !== i2 ? (F2 = i2("settings.main.player.audio.quality.description"), s2[80] = i2, s2[81] = F2) : F2 = s2[81], s2[82] !== g2 || s2[83] !== y2 || s2[84] !== f2 || s2[85] !== C2 || s2[86] !== l2 || s2[87] !== i2 ? (O2 = n.jsx(rs, {
    children: __fork_audioCards().map(e3 => {
      const t3 = g2 === e3.key,
        a2 = "max" === e3.key && !f2;
      return n.jsxs("div", {
        className: "relative w-full",
        children: [a2 && n.jsx(Cs, {
          level: 2,
          onClick: () => l2(i2("settings.main.player.audio.quality.max"), 2),
          className: "rounded-2xl"
        }), n.jsx(os, {
          layout: "vertical",
          icon: e3.icon,
          title: e3.title,
          subtitle: e3.numeric,
          isSelected: t3,
          onClick: () => {
            a2 ? l2(i2("settings.main.player.audio.quality.max"), 2) : y2(e3.key);
          }
        })]
      }, e3.key);
    })
  }), s2[82] = g2, s2[83] = y2, s2[84] = f2, s2[85] = C2, s2[86] = l2, s2[87] = i2, s2[88] = O2) : O2 = s2[88], s2[89] !== F2 || s2[90] !== O2 || s2[91] !== D2 ? ($2 = n.jsx(ns, {
    label: D2,
    description: F2,
    vertical: true,
    children: O2
  }), s2[89] = F2, s2[90] = O2, s2[91] = D2, s2[92] = $2) : $2 = s2[92], s2[93] !== _2 || s2[94] !== $2 || s2[95] !== T2 ? (B2 = n.jsxs(_2, {
    children: [T2, $2]
  }), s2[93] = _2, s2[94] = $2, s2[95] = T2, s2[96] = B2) : B2 = s2[96], s2[97] === Symbol.for("react.memo_cache_sentinel") ? (U2 = n.jsx(cs, {}), s2[97] = U2) : U2 = s2[97], s2[98] !== i2 ? (R2 = i2("settings.main.sections.sound"), s2[98] = i2, s2[99] = R2) : R2 = s2[99], s2[100] !== i2 ? (q2 = i2("settings.main.player.normalization"), s2[100] = i2, s2[101] = q2) : q2 = s2[101], s2[102] !== i2 ? (V2 = i2("settings.main.player.normalization_description"), s2[102] = i2, s2[103] = V2) : V2 = s2[103], s2[104] !== v2 ? (W2 = e3 => v2({
    normalization: e3
  }), s2[104] = v2, s2[105] = W2) : W2 = s2[105], s2[106] !== p2 || s2[107] !== q2 || s2[108] !== V2 || s2[109] !== W2 ? (K2 = n.jsx(ls, {
    label: q2,
    description: V2,
    checked: p2,
    onCheckedChange: W2
  }), s2[106] = p2, s2[107] = q2, s2[108] = V2, s2[109] = W2, s2[110] = K2) : K2 = s2[110], s2[111] !== i2 ? (G2 = i2("settings.main.player.gapless"), s2[111] = i2, s2[112] = G2) : G2 = s2[112], s2[113] !== i2 ? (Z2 = i2("settings.main.player.gapless_description"), s2[113] = i2, s2[114] = Z2) : Z2 = s2[114], s2[115] !== v2 ? (H2 = e3 => {
    v2({
      gapless: e3
    });
  }, s2[115] = v2, s2[116] = H2) : H2 = s2[116], s2[117] !== u2 || s2[118] !== H2 ? (Y2 = n.jsx(us, {
    checked: u2,
    onCheckedChange: H2
  }), s2[117] = u2, s2[118] = H2, s2[119] = Y2) : Y2 = s2[119], s2[120] !== G2 || s2[121] !== Z2 || s2[122] !== Y2 ? (Q2 = n.jsx(ns, {
    label: G2,
    description: Z2,
    children: Y2
  }), s2[120] = G2, s2[121] = Z2, s2[122] = Y2, s2[123] = Q2) : Q2 = s2[123], s2[124] !== i2 ? (J2 = i2("settings.main.player.crossfade"), s2[124] = i2, s2[125] = J2) : J2 = s2[125], s2[126] !== i2 ? (X2 = i2("settings.main.player.crossfade_description"), s2[126] = i2, s2[127] = X2) : X2 = s2[127], s2[128] !== v2 ? (ee2 = e3 => {
    v2({
      crossfade: e3
    });
  }, s2[128] = v2, s2[129] = ee2) : ee2 = s2[129], s2[130] !== m2 || s2[131] !== ee2 ? (te2 = n.jsx(us, {
    checked: m2,
    onCheckedChange: ee2
  }), s2[130] = m2, s2[131] = ee2, s2[132] = te2) : te2 = s2[132], s2[133] !== J2 || s2[134] !== X2 || s2[135] !== te2 ? (ae2 = n.jsx(ns, {
    label: J2,
    description: X2,
    children: te2
  }), s2[133] = J2, s2[134] = X2, s2[135] = te2, s2[136] = ae2) : ae2 = s2[136], s2[137] !== h2 || s2[138] !== i2 || s2[139] !== v2 ? (se2 = null, s2[137] = h2, s2[138] = i2, s2[139] = v2, s2[140] = se2) : se2 = s2[140], s2[141] !== R2 || s2[142] !== K2 || s2[143] !== Q2 || s2[144] !== ae2 || s2[145] !== se2 ? (ne2 = n.jsxs(is, {
    title: R2,
    children: [K2, Q2, ae2, se2]
  }), s2[141] = R2, s2[142] = K2, s2[143] = Q2, s2[144] = ae2, s2[145] = se2, s2[146] = ne2) : ne2 = s2[146], s2[147] !== B2 || s2[148] !== ne2 || s2[149] !== E2 ? (ie2 = n.jsxs("div", {
    className: E2,
    children: [B2, U2, ne2],
    style: {
      pointerEvents: r2.loading ? "none" : undefined,
      opacity: r2.loading ? .6 : 1
    },
    "aria-busy": r2.loading
  }), s2[147] = B2, s2[148] = ne2, s2[149] = E2, s2[150] = ie2) : ie2 = s2[150], ie2;
}
function Ci(e3) {
  const t2 = e3.toLowerCase();
  return t2.includes("headphone") || t2.includes("headset") || t2.includes("\u043D\u0430\u0443\u0448\u043D\u0438\u043A") || t2.includes("\u043D\u0430\u0432\u0443\u0448\u043D\u0438\u043A") ? Qt : Yt;
}
function Pi(e3) {
  return e3.replace(/^(Default|Communications|По умолчанию|Связь)\s*[-–]\s*/i, "").trim();
}
function zi(t2) {
  const a2 = e.c(27),
    {
      label: s2,
      description: i2,
      value: l2,
      unit: r2,
      min: o2,
      max: c2,
      step: d2,
      disabled: u2,
      onChange: m2,
      onCommit: p2
    } = t2,
    f2 = u2 && "opacity-30 pointer-events-none";
  let g2, h2, v2, y2, b2, j2, w2, k2;
  return a2[0] !== f2 ? (g2 = ke("transition-opacity duration-200", f2), a2[0] = f2, a2[1] = g2) : g2 = a2[1], a2[2] !== l2 ? (h2 = [l2], a2[2] = l2, a2[3] = h2) : h2 = a2[3], a2[4] !== m2 ? (v2 = e3 => {
    const [t3] = e3;
    return m2(t3);
  }, a2[4] = m2, a2[5] = v2) : v2 = a2[5], a2[6] !== p2 ? (y2 = e3 => {
    const [t3] = e3;
    return p2(t3);
  }, a2[6] = p2, a2[7] = y2) : y2 = a2[7], a2[8] !== u2 || a2[9] !== c2 || a2[10] !== o2 || a2[11] !== d2 || a2[12] !== h2 || a2[13] !== v2 || a2[14] !== y2 ? (b2 = n.jsx(x, {
    type: "thin",
    value: h2,
    onValueChange: v2,
    onValueCommit: y2,
    min: o2,
    max: c2,
    step: d2,
    disabled: u2,
    className: "flex-1"
  }), a2[8] = u2, a2[9] = c2, a2[10] = o2, a2[11] = d2, a2[12] = h2, a2[13] = v2, a2[14] = y2, a2[15] = b2) : b2 = a2[15], a2[16] !== r2 || a2[17] !== l2 ? (j2 = n.jsxs("span", {
    className: "text-xs font-medium text-foreground/80 w-12 text-right select-none",
    children: [l2, r2]
  }), a2[16] = r2, a2[17] = l2, a2[18] = j2) : j2 = a2[18], a2[19] !== b2 || a2[20] !== j2 ? (w2 = n.jsxs("div", {
    className: "flex items-center gap-3 w-[180px] page-sm:w-[220px]",
    children: [b2, j2]
  }), a2[19] = b2, a2[20] = j2, a2[21] = w2) : w2 = a2[21], a2[22] !== i2 || a2[23] !== s2 || a2[24] !== g2 || a2[25] !== w2 ? (k2 = n.jsx(ns, {
    label: s2,
    description: i2,
    className: g2,
    children: w2
  }), a2[22] = i2, a2[23] = s2, a2[24] = g2, a2[25] = w2, a2[26] = k2) : k2 = a2[26], k2;
}
function Ai() {
  const t2 = e.c(164),
    {
      t: s2
    } = le(),
    [i2, l2] = Kt();
  let r2;
  t2[0] !== i2.overlay ? (r2 = i2.overlay || {
    mode: "disabled",
    position: "top-right",
    opacity: 0.9,
    size: 100,
    w: 340,
    h: 58
  }, t2[0] = i2.overlay, t2[1] = r2) : r2 = t2[1];
  const o2 = r2;
  let c2;
  t2[2] !== o2.opacity ? (c2 = Math.round(100 * o2.opacity), t2[2] = o2.opacity, t2[3] = c2) : c2 = t2[3];
  const [d2, u2] = a.useState(c2),
    [m2, p2] = a.useState(o2.size || 100),
    [f2, g2] = a.useState(o2.w || 340),
    [v2, x2] = a.useState(o2.h || 58);
  let y2, b2, j2;
  t2[4] !== o2.h || t2[5] !== o2.opacity || t2[6] !== o2.size || t2[7] !== o2.w ? (y2 = () => {
    u2(Math.round(100 * o2.opacity)), p2(o2.size || 100), g2(o2.w || 340), x2(o2.h || 58);
  }, b2 = [o2.opacity, o2.size, o2.w, o2.h], t2[4] = o2.h, t2[5] = o2.opacity, t2[6] = o2.size, t2[7] = o2.w, t2[8] = y2, t2[9] = b2) : (y2 = t2[8], b2 = t2[9]), a.useEffect(y2, b2), t2[10] !== o2 || t2[11] !== l2 ? (j2 = e3 => {
    l2({
      overlay: {
        ...o2,
        ...e3
      }
    });
  }, t2[10] = o2, t2[11] = l2, t2[12] = j2) : j2 = t2[12];
  const w2 = j2,
    k2 = "disabled" === o2.mode,
    N2 = "island" === o2.mode;
  let S2;
  t2[13] === Symbol.for("react.memo_cache_sentinel") ? (S2 = [{
    id: "disabled",
    icon: Ne.close
  }, {
    id: "fullscreen",
    icon: Ne.fullscreen
  }, {
    id: "island",
    icon: Ne.overlayIsland
  }, {
    id: "card",
    icon: Ne.overlayCard
  }, {
    id: "docked",
    icon: Ne.overlayDocked
  }], t2[13] = S2) : S2 = t2[13];
  const _2 = S2;
  let C2;
  t2[14] === Symbol.for("react.memo_cache_sentinel") ? (C2 = ["top-center", "bottom-center", "left-center", "right-center"], t2[14] = C2) : C2 = t2[14];
  const P2 = C2;
  let z2;
  t2[15] !== o2.mode ? (z2 = e3 => "card" === o2.mode ? "left-center" !== e3 && "right-center" !== e3 : "docked" !== o2.mode || P2.includes(e3), t2[15] = o2.mode, t2[16] = z2) : z2 = t2[16];
  const A2 = z2;
  let M2;
  t2[17] !== o2.position || t2[18] !== w2 ? (M2 = e3 => {
    const t3 = o2.position;
    if ("card" !== e3 || "left-center" !== t3 && "right-center" !== t3) {
      if ("docked" !== e3 || P2.includes(t3)) w2({
        mode: e3
      });else {
        const a2 = t3.startsWith("bottom") ? "bottom-center" : "top-center";
        w2({
          mode: e3,
          position: a2
        });
      }
    } else w2({
      mode: e3,
      position: "top-right"
    });
  }, t2[17] = o2.position, t2[18] = w2, t2[19] = M2) : M2 = t2[19];
  const I2 = M2;
  let E2, L2, T2, D2, F2, O2, $2, B2, U2, R2, q2, V2, W2, K2, G2, Z2, H2, Y2, Q2, J2, X2, ee2, te2, ae2;
  if (t2[20] !== k2 || t2[21] !== A2 || t2[22] !== N2 || t2[23] !== o2.border || t2[24] !== o2.mode || t2[25] !== o2.position || t2[26] !== I2 || t2[27] !== s2 || t2[28] !== w2) {
    const e3 = [{
      id: "top-left",
      x: 15,
      y: 20
    }, {
      id: "top-center",
      x: 50,
      y: 20
    }, {
      id: "top-right",
      x: 85,
      y: 20
    }, {
      id: "left-center",
      x: 15,
      y: 50
    }, {
      id: "center",
      x: 50,
      y: 50
    }, {
      id: "right-center",
      x: 85,
      y: 50
    }, {
      id: "bottom-left",
      x: 15,
      y: 80
    }, {
      id: "bottom-center",
      x: 50,
      y: 80
    }, {
      id: "bottom-right",
      x: 85,
      y: 80
    }];
    let a2, i3, l3, r3, c3;
    B2 = "flex flex-col pb-12", t2[42] !== s2 ? (a2 = s2("settings.overlay.mode.title"), t2[42] = s2, t2[43] = a2) : a2 = t2[43], t2[44] !== s2 ? (i3 = s2("settings.overlay.mode.description"), t2[44] = s2, t2[45] = i3) : i3 = t2[45], t2[46] !== o2.mode || t2[47] !== I2 || t2[48] !== s2 ? (l3 = n.jsx(rs, {
      children: _2.map(e4 => {
        const {
          id: t3,
          icon: a3
        } = e4;
        return n.jsx(os, {
          layout: "vertical",
          icon: a3,
          isSelected: o2.mode === t3,
          onClick: () => I2(t3),
          title: s2(`settings.overlay.mode.${t3}`)
        }, t3);
      })
    }), t2[46] = o2.mode, t2[47] = I2, t2[48] = s2, t2[49] = l3) : l3 = t2[49], t2[50] !== a2 || t2[51] !== i3 || t2[52] !== l3 ? (U2 = n.jsx(is, {
      children: n.jsx(ns, {
        label: a2,
        description: i3,
        vertical: true,
        children: l3
      })
    }), t2[50] = a2, t2[51] = i3, t2[52] = l3, t2[53] = U2) : U2 = t2[53], t2[54] === Symbol.for("react.memo_cache_sentinel") ? (R2 = n.jsx(cs, {}), t2[54] = R2) : R2 = t2[54], t2[55] !== s2 ? (r3 = s2("settings.overlay.border.title"), t2[55] = s2, t2[56] = r3) : r3 = t2[56], t2[57] !== s2 ? (c3 = s2("settings.overlay.border.description"), t2[57] = s2, t2[58] = c3) : c3 = t2[58];
    const d3 = !N2 && "opacity-40 pointer-events-none grayscale-[0.5]";
    let u3;
    t2[59] !== d3 ? (u3 = ke("transition-opacity duration-200", d3), t2[59] = d3, t2[60] = u3) : u3 = t2[60];
    const m3 = !N2;
    let p3, f3, g3, v3, x3;
    t2[61] !== s2 ? (p3 = s2("settings.overlay.border.options.default"), t2[61] = s2, t2[62] = p3) : p3 = t2[62], t2[63] !== p3 ? (f3 = {
      value: "default",
      label: p3,
      icon: Jt
    }, t2[63] = p3, t2[64] = f3) : f3 = t2[64], t2[65] !== s2 ? (g3 = s2("settings.overlay.border.options.pill"), t2[65] = s2, t2[66] = g3) : g3 = t2[66], t2[67] !== g3 ? (v3 = {
      value: "pill",
      label: g3,
      icon: qe
    }, t2[67] = g3, t2[68] = v3) : v3 = t2[68], t2[69] !== f3 || t2[70] !== v3 ? (x3 = [f3, v3], t2[69] = f3, t2[70] = v3, t2[71] = x3) : x3 = t2[71];
    const y3 = o2.border || "default";
    let b3, j3;
    t2[72] !== w2 ? (b3 = e4 => w2({
      border: e4
    }), t2[72] = w2, t2[73] = b3) : b3 = t2[73], t2[74] !== m3 || t2[75] !== x3 || t2[76] !== y3 || t2[77] !== b3 ? (j3 = n.jsx(h, {
      disabled: m3,
      options: x3,
      value: y3,
      onChange: b3
    }), t2[74] = m3, t2[75] = x3, t2[76] = y3, t2[77] = b3, t2[78] = j3) : j3 = t2[78], t2[79] !== r3 || t2[80] !== c3 || t2[81] !== u3 || t2[82] !== j3 ? (q2 = n.jsx(is, {
      children: n.jsx(ns, {
        label: r3,
        description: c3,
        className: u3,
        children: j3
      })
    }), t2[79] = r3, t2[80] = c3, t2[81] = u3, t2[82] = j3, t2[83] = q2) : q2 = t2[83], t2[84] === Symbol.for("react.memo_cache_sentinel") ? (V2 = n.jsx(cs, {}), t2[84] = V2) : V2 = t2[84], L2 = is, E2 = ns, t2[85] !== s2 ? (D2 = s2("settings.overlay.position.title"), t2[85] = s2, t2[86] = D2) : D2 = t2[86], F2 = true, t2[87] !== o2.mode || t2[88] !== s2 ? (O2 = "docked" === o2.mode ? s2("settings.overlay.mode.docked_hint") : s2("settings.overlay.position.description"), t2[87] = o2.mode, t2[88] = s2, t2[89] = O2) : O2 = t2[89];
    const S3 = (k2 || "fullscreen" === o2.mode) && "opacity-30 pointer-events-none";
    t2[90] !== S3 ? ($2 = ke("transition-opacity duration-300", S3), t2[90] = S3, t2[91] = $2) : $2 = t2[91], W2 = "w-full flex items-center justify-center select-none py-2", T2 = "fullscreen" === o2.mode ? n.jsxs("div", {
      className: "flex flex-col items-center justify-center gap-2 opacity-50 pointer-events-none",
      children: [n.jsx(Ne.fullscreen, {
        className: "h-6 w-6 text-muted-foreground/60"
      }), n.jsx("span", {
        className: "text-xs text-muted-foreground/70",
        children: s2("settings.overlay.mode.fullscreen")
      })]
    }) : n.jsx("div", {
      className: "w-full grid grid-cols-3 gap-2.5 page-sm:gap-3 select-none py-1.5",
      children: e3.map(e4 => {
        const t3 = o2.position === e4.id,
          a3 = A2(e4.id),
          i4 = (e5 => {
            switch (e5) {
              case "top-left":
                return sa;
              case "top-center":
                return Ne.anchorUp;
              case "top-right":
                return aa;
              case "center":
              default:
                return Xt;
              case "bottom-left":
                return ta;
              case "bottom-center":
                return Ne.anchorDown;
              case "bottom-right":
                return ea;
              case "left-center":
                return Ne.anchorLeft;
              case "right-center":
                return Ne.anchorRight;
            }
          })(e4.id);
        return n.jsx(Se, {
          type: "button",
          variant: "ghost",
          disabled: k2 || !a3,
          onClick: () => w2({
            position: e4.id
          }),
          "aria-label": s2(`settings.overlay.position.${e4.id}`),
          "aria-pressed": t3,
          className: ke("h-11 w-full rounded-2xl border px-0 disabled:opacity-25", t3 ? "choice choice-on text-foreground" : "choice text-muted-foreground/70 hover:text-foreground"),
          children: n.jsx(i4, {
            className: "h-[18px] w-[18px]"
          })
        }, e4.id);
      })
    }), t2[20] = k2, t2[21] = A2, t2[22] = N2, t2[23] = o2.border, t2[24] = o2.mode, t2[25] = o2.position, t2[26] = I2, t2[27] = s2, t2[28] = w2, t2[29] = E2, t2[30] = L2, t2[31] = T2, t2[32] = D2, t2[33] = F2, t2[34] = O2, t2[35] = $2, t2[36] = B2, t2[37] = U2, t2[38] = R2, t2[39] = q2, t2[40] = V2, t2[41] = W2;
  } else E2 = t2[29], L2 = t2[30], T2 = t2[31], D2 = t2[32], F2 = t2[33], O2 = t2[34], $2 = t2[35], B2 = t2[36], U2 = t2[37], R2 = t2[38], q2 = t2[39], V2 = t2[40], W2 = t2[41];
  t2[92] !== T2 || t2[93] !== W2 ? (K2 = n.jsx("div", {
    className: W2,
    children: T2
  }), t2[92] = T2, t2[93] = W2, t2[94] = K2) : K2 = t2[94], t2[95] !== E2 || t2[96] !== D2 || t2[97] !== F2 || t2[98] !== O2 || t2[99] !== $2 || t2[100] !== K2 ? (G2 = n.jsx(E2, {
    label: D2,
    vertical: F2,
    description: O2,
    className: $2,
    children: K2
  }), t2[95] = E2, t2[96] = D2, t2[97] = F2, t2[98] = O2, t2[99] = $2, t2[100] = K2, t2[101] = G2) : G2 = t2[101], t2[102] !== L2 || t2[103] !== G2 ? (Z2 = n.jsx(L2, {
    children: G2
  }), t2[102] = L2, t2[103] = G2, t2[104] = Z2) : Z2 = t2[104], t2[105] === Symbol.for("react.memo_cache_sentinel") ? (H2 = n.jsx(cs, {}), t2[105] = H2) : H2 = t2[105], t2[106] !== s2 ? (Y2 = s2("settings.overlay.dimensions.title"), t2[106] = s2, t2[107] = Y2) : Y2 = t2[107], t2[108] !== s2 ? (Q2 = s2("settings.overlay.opacity"), t2[108] = s2, t2[109] = Q2) : Q2 = t2[109], t2[110] !== s2 ? (J2 = s2("settings.overlay.opacity_description"), t2[110] = s2, t2[111] = J2) : J2 = t2[111], t2[112] !== w2 ? (X2 = e3 => w2({
    opacity: e3 / 100
  }), t2[112] = w2, t2[113] = X2) : X2 = t2[113], t2[114] !== k2 || t2[115] !== d2 || t2[116] !== Q2 || t2[117] !== J2 || t2[118] !== X2 ? (ee2 = n.jsx(zi, {
    label: Q2,
    description: J2,
    value: d2,
    unit: "%",
    min: 10,
    max: 100,
    step: 5,
    disabled: k2,
    onChange: u2,
    onCommit: X2
  }), t2[114] = k2, t2[115] = d2, t2[116] = Q2, t2[117] = J2, t2[118] = X2, t2[119] = ee2) : ee2 = t2[119], t2[120] !== s2 ? (te2 = s2("settings.overlay.size"), t2[120] = s2, t2[121] = te2) : te2 = t2[121], t2[122] !== s2 ? (ae2 = s2("settings.overlay.size_description"), t2[122] = s2, t2[123] = ae2) : ae2 = t2[123];
  const se2 = k2 || "fullscreen" === o2.mode;
  let ne2, ie2, re2;
  t2[124] !== w2 ? (ne2 = e3 => w2({
    size: e3
  }), t2[124] = w2, t2[125] = ne2) : ne2 = t2[125], t2[126] !== m2 || t2[127] !== te2 || t2[128] !== ae2 || t2[129] !== se2 || t2[130] !== ne2 ? (ie2 = n.jsx(zi, {
    label: te2,
    description: ae2,
    value: m2,
    unit: "%",
    min: 50,
    max: 150,
    step: 5,
    disabled: se2,
    onChange: p2,
    onCommit: ne2
  }), t2[126] = m2, t2[127] = te2, t2[128] = ae2, t2[129] = se2, t2[130] = ne2, t2[131] = ie2) : ie2 = t2[131], t2[132] !== s2 ? (re2 = s2("settings.overlay.dimensions.w"), t2[132] = s2, t2[133] = re2) : re2 = t2[133];
  const oe2 = k2 || "fullscreen" === o2.mode;
  let ce2, de2, ue2;
  t2[134] !== w2 ? (ce2 = e3 => w2({
    w: e3
  }), t2[134] = w2, t2[135] = ce2) : ce2 = t2[135], t2[136] !== f2 || t2[137] !== re2 || t2[138] !== oe2 || t2[139] !== ce2 ? (de2 = n.jsx(zi, {
    label: re2,
    value: f2,
    unit: "px",
    min: 200,
    max: 600,
    step: 10,
    disabled: oe2,
    onChange: g2,
    onCommit: ce2
  }), t2[136] = f2, t2[137] = re2, t2[138] = oe2, t2[139] = ce2, t2[140] = de2) : de2 = t2[140], t2[141] !== s2 ? (ue2 = s2("settings.overlay.dimensions.h"), t2[141] = s2, t2[142] = ue2) : ue2 = t2[142];
  const me2 = k2 || "fullscreen" === o2.mode;
  let pe2, fe2, ge2, he2;
  return t2[143] !== w2 ? (pe2 = e3 => w2({
    h: e3
  }), t2[143] = w2, t2[144] = pe2) : pe2 = t2[144], t2[145] !== v2 || t2[146] !== ue2 || t2[147] !== me2 || t2[148] !== pe2 ? (fe2 = n.jsx(zi, {
    label: ue2,
    value: v2,
    unit: "px",
    min: 40,
    max: 120,
    step: 2,
    disabled: me2,
    onChange: x2,
    onCommit: pe2
  }), t2[145] = v2, t2[146] = ue2, t2[147] = me2, t2[148] = pe2, t2[149] = fe2) : fe2 = t2[149], t2[150] !== Y2 || t2[151] !== ee2 || t2[152] !== ie2 || t2[153] !== de2 || t2[154] !== fe2 ? (ge2 = n.jsxs(is, {
    title: Y2,
    children: [ee2, ie2, de2, fe2]
  }), t2[150] = Y2, t2[151] = ee2, t2[152] = ie2, t2[153] = de2, t2[154] = fe2, t2[155] = ge2) : ge2 = t2[155], t2[156] !== B2 || t2[157] !== U2 || t2[158] !== R2 || t2[159] !== q2 || t2[160] !== V2 || t2[161] !== Z2 || t2[162] !== ge2 ? (he2 = n.jsxs("div", {
    className: B2,
    children: [U2, R2, q2, V2, Z2, H2, ge2]
  }), t2[156] = B2, t2[157] = U2, t2[158] = R2, t2[159] = q2, t2[160] = V2, t2[161] = Z2, t2[162] = ge2, t2[163] = he2) : he2 = t2[163], he2;
}
function Mi() {
  var t2, a2;
  const s2 = e.c(38),
    {
      t: i2
    } = le(),
    [l2, r2] = na(),
    [o2] = ia(),
    c2 = false !== (null == (t2 = null == o2 ? void 0 : o2.visualizer) ? void 0 : t2.enabled) && !!(null == (a2 = null == o2 ? void 0 : o2.visualizer) ? void 0 : a2.onSlider);
  let d2, u2, m2, p2, f2, g2, h2, v2, y2, b2, j2;
  s2[0] !== i2 ? (d2 = i2("settings.appearance.player.slider.types.default"), s2[0] = i2, s2[1] = d2) : d2 = s2[1], s2[2] !== d2 ? (u2 = {
    value: "default",
    label: d2
  }, s2[2] = d2, s2[3] = u2) : u2 = s2[3], s2[4] !== i2 ? (m2 = i2("settings.appearance.player.slider.types.thin"), s2[4] = i2, s2[5] = m2) : m2 = s2[5], s2[6] !== m2 ? (p2 = {
    value: "thin",
    label: m2
  }, s2[6] = m2, s2[7] = p2) : p2 = s2[7], s2[8] !== i2 ? (f2 = i2("settings.appearance.player.slider.types.ios"), s2[8] = i2, s2[9] = f2) : f2 = s2[9], s2[10] !== f2 ? (g2 = {
    value: "ios",
    label: f2
  }, s2[10] = f2, s2[11] = g2) : g2 = s2[11], s2[12] !== i2 ? (h2 = i2("settings.appearance.player.slider.types.squiggly"), s2[12] = i2, s2[13] = h2) : h2 = s2[13], s2[14] !== h2 ? (v2 = {
    value: "squiggly",
    label: h2
  }, s2[14] = h2, s2[15] = v2) : v2 = s2[15], s2[16] !== i2 ? (y2 = i2("settings.appearance.player.slider.types.waveform"), s2[16] = i2, s2[17] = y2) : y2 = s2[17], s2[18] !== y2 ? (b2 = {
    value: "waveform",
    label: y2
  }, s2[18] = y2, s2[19] = b2) : b2 = s2[19], s2[20] !== u2 || s2[21] !== p2 || s2[22] !== g2 || s2[23] !== v2 || s2[24] !== b2 ? (j2 = [u2, p2, g2, v2, b2], s2[20] = u2, s2[21] = p2, s2[22] = g2, s2[23] = v2, s2[24] = b2, s2[25] = j2) : j2 = s2[25];
  const w2 = j2;
  if (c2) return null;
  let k2, N2, S2, _2;
  return s2[26] !== i2 ? (k2 = i2("settings.appearance.player.slider.type"), s2[26] = i2, s2[27] = k2) : k2 = s2[27], s2[28] !== i2 ? (N2 = i2("settings.appearance.player.slider.type_description"), s2[28] = i2, s2[29] = N2) : N2 = s2[29], s2[30] !== l2 || s2[31] !== w2 || s2[32] !== r2 ? (S2 = n.jsx("div", {
    className: "flex w-full select-none flex-col gap-2 pt-1",
    children: w2.map(e3 => {
      const t3 = (l2.slider || "default") === e3.value;
      return n.jsx(os, {
        appearance: "preview",
        layout: "horizontal",
        isSelected: t3,
        title: e3.label,
        onClick: () => r2({
          slider: e3.value
        }),
        preview: n.jsx("div", {
          className: "w-full min-w-0",
          children: n.jsx(x, {
            type: e3.value,
            value: [55],
            max: 100,
            disabled: true,
            className: "w-full pointer-events-none"
          })
        })
      }, e3.value);
    })
  }), s2[30] = l2, s2[31] = w2, s2[32] = r2, s2[33] = S2) : S2 = s2[33], s2[34] !== k2 || s2[35] !== N2 || s2[36] !== S2 ? (_2 = n.jsx(ns, {
    label: k2,
    description: N2,
    vertical: true,
    children: S2
  }), s2[34] = k2, s2[35] = N2, s2[36] = S2, s2[37] = _2) : _2 = s2[37], _2;
}
function Li() {
  var t2;
  const a2 = e.c(84),
    {
      t: s2
    } = le(),
    [i2, l2] = na(),
    [, r2] = ua();
  let o2, c2;
  a2[0] !== s2 ? (o2 = s2("settings.appearance.player.player.style"), a2[0] = s2, a2[1] = o2) : o2 = a2[1], a2[2] !== s2 ? (c2 = s2("settings.appearance.player.player.style_description"), a2[2] = s2, a2[3] = c2) : c2 = a2[3];
  const d2 = "default" === (i2.style || "default");
  let u2, m2, p2;
  a2[4] !== l2 ? (u2 = () => l2({
    style: "default"
  }), a2[4] = l2, a2[5] = u2) : u2 = a2[5], a2[6] !== s2 ? (m2 = s2("settings.appearance.player.player.styles.default"), a2[6] = s2, a2[7] = m2) : m2 = a2[7], a2[8] !== d2 || a2[9] !== u2 || a2[10] !== m2 ? (p2 = n.jsx(os, {
    layout: "vertical",
    icon: ft,
    isSelected: d2,
    onClick: u2,
    title: m2
  }), a2[8] = d2, a2[9] = u2, a2[10] = m2, a2[11] = p2) : p2 = a2[11];
  const f2 = "plate" === i2.style;
  let g2, v2, x2;
  a2[12] !== l2 ? (g2 = () => l2({
    style: "plate"
  }), a2[12] = l2, a2[13] = g2) : g2 = a2[13], a2[14] !== s2 ? (v2 = s2("settings.appearance.player.player.styles.plate"), a2[14] = s2, a2[15] = v2) : v2 = a2[15], a2[16] !== f2 || a2[17] !== g2 || a2[18] !== v2 ? (x2 = n.jsx(os, {
    layout: "vertical",
    icon: ma,
    isSelected: f2,
    onClick: g2,
    title: v2
  }), a2[16] = f2, a2[17] = g2, a2[18] = v2, a2[19] = x2) : x2 = a2[19];
  const y2 = "big" === i2.style;
  let b2, j2, w2, k2, N2, S2, _2, C2, P2, z2, A2, M2, I2, E2;
  a2[20] !== l2 || a2[21] !== r2 ? (b2 = () => {
    l2({
      style: "big"
    }), r2({
      show: true
    });
  }, a2[20] = l2, a2[21] = r2, a2[22] = b2) : b2 = a2[22], a2[23] !== s2 ? (j2 = s2("settings.appearance.player.player.styles.big"), a2[23] = s2, a2[24] = j2) : j2 = a2[24], a2[25] !== y2 || a2[26] !== b2 || a2[27] !== j2 ? (w2 = n.jsx(os, {
    layout: "vertical",
    icon: ra,
    isSelected: y2,
    onClick: b2,
    title: j2
  }), a2[25] = y2, a2[26] = b2, a2[27] = j2, a2[28] = w2) : w2 = a2[28], a2[29] !== w2 || a2[30] !== p2 || a2[31] !== x2 ? (k2 = n.jsxs(rs, {
    children: [p2, x2, w2]
  }), a2[29] = w2, a2[30] = p2, a2[31] = x2, a2[32] = k2) : k2 = a2[32], a2[33] !== o2 || a2[34] !== c2 || a2[35] !== k2 ? (N2 = n.jsx(ns, {
    label: o2,
    description: c2,
    vertical: true,
    children: k2
  }), a2[33] = o2, a2[34] = c2, a2[35] = k2, a2[36] = N2) : N2 = a2[36], a2[37] !== s2 ? (S2 = s2("settings.appearance.player.title.alignment"), a2[37] = s2, a2[38] = S2) : S2 = a2[38], a2[39] !== s2 ? (_2 = s2("settings.appearance.player.title.alignment_description"), a2[39] = s2, a2[40] = _2) : _2 = a2[40], a2[41] !== s2 ? (C2 = s2("settings.appearance.player.title.alignments.left"), a2[41] = s2, a2[42] = C2) : C2 = a2[42], a2[43] !== C2 ? (P2 = {
    value: "left",
    icon: pa,
    title: C2
  }, a2[43] = C2, a2[44] = P2) : P2 = a2[44], a2[45] !== s2 ? (z2 = s2("settings.appearance.player.title.alignments.center"), a2[45] = s2, a2[46] = z2) : z2 = a2[46], a2[47] !== z2 ? (A2 = {
    value: "center",
    icon: fa,
    title: z2
  }, a2[47] = z2, a2[48] = A2) : A2 = a2[48], a2[49] !== s2 ? (M2 = s2("settings.appearance.player.title.alignments.right"), a2[49] = s2, a2[50] = M2) : M2 = a2[50], a2[51] !== M2 ? (I2 = {
    value: "right",
    icon: ga,
    title: M2
  }, a2[51] = M2, a2[52] = I2) : I2 = a2[52], a2[53] !== P2 || a2[54] !== A2 || a2[55] !== I2 ? (E2 = [P2, A2, I2], a2[53] = P2, a2[54] = A2, a2[55] = I2, a2[56] = E2) : E2 = a2[56];
  const L2 = i2.align || "center";
  let T2, D2, F2, O2, $2;
  a2[57] !== l2 ? (T2 = e3 => l2({
    align: e3
  }), a2[57] = l2, a2[58] = T2) : T2 = a2[58], a2[59] !== E2 || a2[60] !== L2 || a2[61] !== T2 ? (D2 = n.jsx(h, {
    options: E2,
    value: L2,
    onChange: T2,
    size: "sm"
  }), a2[59] = E2, a2[60] = L2, a2[61] = T2, a2[62] = D2) : D2 = a2[62], a2[63] !== S2 || a2[64] !== _2 || a2[65] !== D2 ? (F2 = n.jsx(ns, {
    label: S2,
    description: _2,
    children: D2
  }), a2[63] = S2, a2[64] = _2, a2[65] = D2, a2[66] = F2) : F2 = a2[66], a2[67] !== s2 ? (O2 = s2("settings.appearance.player.show.avatars"), a2[67] = s2, a2[68] = O2) : O2 = a2[68], a2[69] !== s2 ? ($2 = s2("settings.appearance.player.show.avatars_description"), a2[69] = s2, a2[70] = $2) : $2 = a2[70];
  const B2 = null == (t2 = i2.avatars) || t2;
  let U2, R2, q2, V2, W2;
  return a2[71] !== l2 ? (U2 = e3 => l2({
    avatars: e3
  }), a2[71] = l2, a2[72] = U2) : U2 = a2[72], a2[73] !== O2 || a2[74] !== $2 || a2[75] !== B2 || a2[76] !== U2 ? (R2 = n.jsx(ls, {
    label: O2,
    description: $2,
    checked: B2,
    onCheckedChange: U2
  }), a2[73] = O2, a2[74] = $2, a2[75] = B2, a2[76] = U2, a2[77] = R2) : R2 = a2[77], a2[78] === Symbol.for("react.memo_cache_sentinel") ? (q2 = n.jsx(Ei, {}), V2 = n.jsx(Mi, {}), a2[78] = q2, a2[79] = V2) : (q2 = a2[78], V2 = a2[79]), a2[80] !== N2 || a2[81] !== F2 || a2[82] !== R2 ? (W2 = n.jsxs(is, {
    children: [N2, F2, R2, q2, V2]
  }), a2[80] = N2, a2[81] = F2, a2[82] = R2, a2[83] = W2) : W2 = a2[83], W2;
}
function Ti() {
  var t2, a2;
  const s2 = e.c(54),
    {
      t: i2
    } = le(),
    [l2, r2] = la(),
    [o2, c2] = Kt();
  let d2, u2, m2;
  s2[0] !== i2 ? (d2 = i2("settings.appearance.sections.cover"), s2[0] = i2, s2[1] = d2) : d2 = s2[1], s2[2] !== i2 ? (u2 = i2("settings.main.canvas.title"), s2[2] = i2, s2[3] = u2) : u2 = s2[3], s2[4] !== i2 ? (m2 = i2("settings.main.canvas.description"), s2[4] = i2, s2[5] = m2) : m2 = s2[5];
  const p2 = null == (t2 = o2.canvas) || t2;
  let f2, g2, v2, x2, y2, b2, j2, w2, k2;
  s2[6] !== c2 ? (f2 = e3 => c2({
    canvas: e3
  }), s2[6] = c2, s2[7] = f2) : f2 = s2[7], s2[8] !== u2 || s2[9] !== m2 || s2[10] !== p2 || s2[11] !== f2 ? (g2 = n.jsx(ls, {
    label: u2,
    description: m2,
    checked: p2,
    onCheckedChange: f2
  }), s2[8] = u2, s2[9] = m2, s2[10] = p2, s2[11] = f2, s2[12] = g2) : g2 = s2[12], s2[13] !== i2 ? (v2 = i2("settings.appearance.cover.position"), s2[13] = i2, s2[14] = v2) : v2 = s2[14], s2[15] !== i2 ? (x2 = i2("settings.appearance.cover.position_description"), s2[15] = i2, s2[16] = x2) : x2 = s2[16], s2[17] !== i2 ? (y2 = i2("settings.appearance.cover.positions.left"), s2[17] = i2, s2[18] = y2) : y2 = s2[18], s2[19] !== y2 ? (b2 = {
    value: "left",
    icon: Oe,
    label: y2
  }, s2[19] = y2, s2[20] = b2) : b2 = s2[20], s2[21] !== i2 ? (j2 = i2("settings.appearance.cover.positions.right"), s2[21] = i2, s2[22] = j2) : j2 = s2[22], s2[23] !== j2 ? (w2 = {
    value: "right",
    icon: $e,
    label: j2
  }, s2[23] = j2, s2[24] = w2) : w2 = s2[24], s2[25] !== w2 || s2[26] !== b2 ? (k2 = [b2, w2], s2[25] = w2, s2[26] = b2, s2[27] = k2) : k2 = s2[27];
  const N2 = l2.position || "left";
  let S2, _2, C2, P2, z2;
  s2[28] !== r2 ? (S2 = e3 => r2({
    position: e3
  }), s2[28] = r2, s2[29] = S2) : S2 = s2[29], s2[30] !== k2 || s2[31] !== N2 || s2[32] !== S2 ? (_2 = n.jsx(h, {
    options: k2,
    value: N2,
    onChange: S2,
    size: "sm"
  }), s2[30] = k2, s2[31] = N2, s2[32] = S2, s2[33] = _2) : _2 = s2[33], s2[34] !== _2 || s2[35] !== v2 || s2[36] !== x2 ? (C2 = n.jsx(ns, {
    label: v2,
    description: x2,
    children: _2
  }), s2[34] = _2, s2[35] = v2, s2[36] = x2, s2[37] = C2) : C2 = s2[37], s2[38] !== i2 ? (P2 = i2("settings.appearance.cover.coverincover"), s2[38] = i2, s2[39] = P2) : P2 = s2[39], s2[40] !== i2 ? (z2 = i2("settings.appearance.cover.coverincover_description"), s2[40] = i2, s2[41] = z2) : z2 = s2[41];
  const A2 = null != (a2 = l2.coverincover) && a2;
  let M2, I2, E2;
  return s2[42] !== r2 ? (M2 = e3 => r2({
    coverincover: e3
  }), s2[42] = r2, s2[43] = M2) : M2 = s2[43], s2[44] !== P2 || s2[45] !== z2 || s2[46] !== A2 || s2[47] !== M2 ? (I2 = n.jsx(ls, {
    label: P2,
    description: z2,
    checked: A2,
    onCheckedChange: M2
  }), s2[44] = P2, s2[45] = z2, s2[46] = A2, s2[47] = M2, s2[48] = I2) : I2 = s2[48], s2[49] !== d2 || s2[50] !== C2 || s2[51] !== I2 || s2[52] !== g2 ? (E2 = n.jsx("div", {
    className: "space-y-6",
    children: n.jsxs(is, {
      title: d2,
      children: [C2, I2]
    })
  }), s2[49] = d2, s2[50] = C2, s2[51] = I2, s2[52] = g2, s2[53] = E2) : E2 = s2[53], E2;
}
function Di() {
  const t2 = e.c(33),
    {
      t: a2
    } = le(),
    [s2, i2] = Ct();
  let l2, r2, o2, c2, d2, u2, m2, p2, f2, g2, v2, x2, y2;
  return t2[0] !== a2 ? (l2 = a2("settings.main.startup.title"), t2[0] = a2, t2[1] = l2) : l2 = t2[1], t2[2] !== a2 ? (r2 = a2("settings.main.startup.description"), t2[2] = a2, t2[3] = r2) : r2 = t2[3], t2[4] !== a2 ? (o2 = a2("settings.main.startup.modes.disabled"), t2[4] = a2, t2[5] = o2) : o2 = t2[5], t2[6] !== o2 ? (c2 = {
    value: "disabled",
    label: o2,
    icon: ha
  }, t2[6] = o2, t2[7] = c2) : c2 = t2[7], t2[8] !== a2 ? (d2 = a2("settings.main.startup.modes.track"), t2[8] = a2, t2[9] = d2) : d2 = t2[9], t2[10] !== d2 ? (u2 = {
    value: "track",
    label: d2,
    icon: va.Track
  }, t2[10] = d2, t2[11] = u2) : u2 = t2[11], t2[12] !== a2 ? (m2 = a2("settings.main.startup.modes.queue"), t2[12] = a2, t2[13] = m2) : m2 = t2[13], t2[14] !== m2 ? (p2 = {
    value: "queue",
    label: m2,
    icon: xa
  }, t2[14] = m2, t2[15] = p2) : p2 = t2[15], t2[16] !== c2 || t2[17] !== u2 || t2[18] !== p2 ? (f2 = [c2, u2, p2], t2[16] = c2, t2[17] = u2, t2[18] = p2, t2[19] = f2) : f2 = t2[19], t2[20] !== s2.startup ? (g2 = "disabled" === (s2.startup || "disabled") ? ["disabled"] : "all" === s2.startup ? ["track", "queue"] : [s2.startup || "disabled"], t2[20] = s2.startup, t2[21] = g2) : g2 = t2[21], t2[22] !== s2.startup || t2[23] !== i2 ? (v2 = e3 => {
    const t3 = s2.startup || "disabled";
    if (e3.includes("disabled") && "disabled" !== t3 || 0 === e3.length) return void i2({
      startup: "disabled"
    });
    const a3 = e3.filter(Fi);
    a3.includes("track") && a3.includes("queue") ? i2({
      startup: "all"
    }) : a3.includes("track") ? i2({
      startup: "track"
    }) : a3.includes("queue") ? i2({
      startup: "queue"
    }) : i2({
      startup: "disabled"
    });
  }, t2[22] = s2.startup, t2[23] = i2, t2[24] = v2) : v2 = t2[24], t2[25] !== v2 || t2[26] !== f2 || t2[27] !== g2 ? (x2 = n.jsx(h, {
    options: f2,
    value: g2,
    multiple: true,
    onChange: v2,
    size: "sm"
  }), t2[25] = v2, t2[26] = f2, t2[27] = g2, t2[28] = x2) : x2 = t2[28], t2[29] !== l2 || t2[30] !== r2 || t2[31] !== x2 ? (y2 = n.jsx(ns, {
    label: l2,
    description: r2,
    children: x2
  }), t2[29] = l2, t2[30] = r2, t2[31] = x2, t2[32] = y2) : y2 = t2[32], y2;
}
function Fi(e3) {
  return "disabled" !== e3;
}
function Oi() {
  var t2, a2, s2, i2;
  const l2 = e.c(87),
    {
      t: r2
    } = le(),
    [o2, c2] = ua(),
    [d2, u2] = na(),
    m2 = false !== o2.show,
    p2 = "big" === d2.style,
    f2 = o2.position || "default",
    g2 = p2 && "default" === f2 ? "right" : f2;
  let v2, x2, y2, b2, j2, w2, k2, N2;
  l2[0] === Symbol.for("react.memo_cache_sentinel") ? (v2 = n.jsx(Di, {}), l2[0] = v2) : v2 = l2[0], l2[1] !== r2 ? (x2 = r2("settings.appearance.player.show.queue"), l2[1] = r2, l2[2] = x2) : x2 = l2[2], l2[3] !== r2 ? (y2 = r2("settings.appearance.player.show.queue_description"), l2[3] = r2, l2[4] = y2) : y2 = l2[4], l2[5] !== c2 ? (b2 = e3 => c2({
    show: e3
  }), l2[5] = c2, l2[6] = b2) : b2 = l2[6], l2[7] !== m2 || l2[8] !== b2 ? (j2 = n.jsx(us, {
    checked: m2,
    onCheckedChange: b2
  }), l2[7] = m2, l2[8] = b2, l2[9] = j2) : j2 = l2[9], l2[10] !== x2 || l2[11] !== y2 || l2[12] !== j2 ? (w2 = n.jsx(ns, {
    label: x2,
    description: y2,
    children: j2
  }), l2[10] = x2, l2[11] = y2, l2[12] = j2, l2[13] = w2) : w2 = l2[13], l2[14] !== r2 ? (k2 = r2("settings.appearance.player.show.next_track"), l2[14] = r2, l2[15] = k2) : k2 = l2[15], l2[16] !== r2 ? (N2 = r2("settings.appearance.player.show.next_track_description"), l2[16] = r2, l2[17] = N2) : N2 = l2[17];
  const S2 = null == (t2 = d2.next) || t2;
  let _2, C2, P2, z2, A2;
  l2[18] !== u2 ? (_2 = e3 => u2({
    next: e3
  }), l2[18] = u2, l2[19] = _2) : _2 = l2[19], l2[20] !== k2 || l2[21] !== N2 || l2[22] !== S2 || l2[23] !== _2 ? (C2 = n.jsx(ls, {
    label: k2,
    description: N2,
    checked: S2,
    onCheckedChange: _2
  }), l2[20] = k2, l2[21] = N2, l2[22] = S2, l2[23] = _2, l2[24] = C2) : C2 = l2[24], l2[25] !== p2 || l2[26] !== m2 || l2[27] !== g2 || l2[28] !== r2 || l2[29] !== c2 ? (P2 = m2 && n.jsx(ns, {
    label: r2("settings.appearance.player.show.queue_layout"),
    description: r2("settings.appearance.player.show.queue_layout_description"),
    children: n.jsx(h, {
      options: [...(p2 ? [] : [{
        value: "default",
        icon: De,
        label: r2("settings.appearance.player.show.queue_layout_bottom")
      }]), {
        value: "left",
        icon: Oe,
        label: r2("settings.appearance.player.show.queue_layout_left")
      }, {
        value: "right",
        icon: $e,
        label: r2("settings.appearance.player.show.queue_layout_right")
      }],
      value: g2,
      onChange: e3 => c2({
        position: e3
      })
    })
  }), l2[25] = p2, l2[26] = m2, l2[27] = g2, l2[28] = r2, l2[29] = c2, l2[30] = P2) : P2 = l2[30], l2[31] !== r2 ? (z2 = r2("settings.main.queue.style"), l2[31] = r2, l2[32] = z2) : z2 = l2[32], l2[33] !== r2 ? (A2 = r2("settings.main.queue.style_description"), l2[33] = r2, l2[34] = A2) : A2 = l2[34];
  const M2 = "normal" === (null != (a2 = o2.style) ? a2 : "normal");
  let I2, E2, L2;
  l2[35] !== c2 ? (I2 = () => c2({
    style: "normal"
  }), l2[35] = c2, l2[36] = I2) : I2 = l2[36], l2[37] !== r2 ? (E2 = r2("settings.main.queue.styles.normal"), l2[37] = r2, l2[38] = E2) : E2 = l2[38], l2[39] !== M2 || l2[40] !== I2 || l2[41] !== E2 ? (L2 = n.jsx(os, {
    layout: "vertical",
    icon: xa,
    isSelected: M2,
    onClick: I2,
    title: E2
  }), l2[39] = M2, l2[40] = I2, l2[41] = E2, l2[42] = L2) : L2 = l2[42];
  const T2 = "expanded" === o2.style;
  let D2, F2, O2, $2, B2, U2, R2;
  l2[43] !== c2 ? (D2 = () => c2({
    style: "expanded"
  }), l2[43] = c2, l2[44] = D2) : D2 = l2[44], l2[45] !== r2 ? (F2 = r2("settings.main.queue.styles.expanded"), l2[45] = r2, l2[46] = F2) : F2 = l2[46], l2[47] !== T2 || l2[48] !== D2 || l2[49] !== F2 ? (O2 = n.jsx(os, {
    layout: "vertical",
    icon: ya,
    isSelected: T2,
    onClick: D2,
    title: F2
  }), l2[47] = T2, l2[48] = D2, l2[49] = F2, l2[50] = O2) : O2 = l2[50], l2[51] !== L2 || l2[52] !== O2 ? ($2 = n.jsxs(rs, {
    children: [L2, O2]
  }), l2[51] = L2, l2[52] = O2, l2[53] = $2) : $2 = l2[53], l2[54] !== z2 || l2[55] !== A2 || l2[56] !== $2 ? (B2 = n.jsx(ns, {
    label: z2,
    description: A2,
    vertical: true,
    children: $2
  }), l2[54] = z2, l2[55] = A2, l2[56] = $2, l2[57] = B2) : B2 = l2[57], l2[58] !== r2 ? (U2 = r2("settings.main.queue.similar_tracks"), l2[58] = r2, l2[59] = U2) : U2 = l2[59], l2[60] !== r2 ? (R2 = r2("settings.main.queue.similar_tracks_description"), l2[60] = r2, l2[61] = R2) : R2 = l2[61];
  const q2 = null == (s2 = o2.similar) || s2;
  let V2, W2, K2, G2;
  l2[62] !== c2 ? (V2 = e3 => c2({
    similar: e3
  }), l2[62] = c2, l2[63] = V2) : V2 = l2[63], l2[64] !== U2 || l2[65] !== R2 || l2[66] !== q2 || l2[67] !== V2 ? (W2 = n.jsx(ls, {
    label: U2,
    description: R2,
    checked: q2,
    onCheckedChange: V2
  }), l2[64] = U2, l2[65] = R2, l2[66] = q2, l2[67] = V2, l2[68] = W2) : W2 = l2[68], l2[69] !== r2 ? (K2 = r2("settings.main.queue.following"), l2[69] = r2, l2[70] = K2) : K2 = l2[70], l2[71] !== r2 ? (G2 = r2("settings.main.queue.following_description"), l2[71] = r2, l2[72] = G2) : G2 = l2[72];
  const Z2 = null == (i2 = o2.following) || i2;
  let H2, Y2, Q2;
  return l2[73] !== c2 ? (H2 = e3 => c2({
    following: e3
  }), l2[73] = c2, l2[74] = H2) : H2 = l2[74], l2[75] !== K2 || l2[76] !== G2 || l2[77] !== Z2 || l2[78] !== H2 ? (Y2 = n.jsx(ls, {
    label: K2,
    description: G2,
    checked: Z2,
    onCheckedChange: H2
  }), l2[75] = K2, l2[76] = G2, l2[77] = Z2, l2[78] = H2, l2[79] = Y2) : Y2 = l2[79], l2[80] !== C2 || l2[81] !== P2 || l2[82] !== B2 || l2[83] !== W2 || l2[84] !== Y2 || l2[85] !== w2 ? (Q2 = n.jsx("div", {
    className: "space-y-6",
    children: n.jsxs(is, {
      children: [v2, w2, C2, P2, B2, W2, Y2]
    })
  }), l2[80] = C2, l2[81] = P2, l2[82] = B2, l2[83] = W2, l2[84] = Y2, l2[85] = w2, l2[86] = Q2) : Q2 = l2[86], Q2;
}
function $i() {
  var t2, a2, s2;
  const i2 = e.c(77),
    {
      t: l2
    } = le(),
    {
      settings: r2,
      updateSettings: o2
    } = ue(),
    c2 = null == (t2 = null == r2 ? void 0 : r2.playerSettings) ? void 0 : t2.miniplayer,
    d2 = false !== (null == c2 ? void 0 : c2.enabled),
    u2 = (null == (s2 = null == (a2 = null == r2 ? void 0 : r2.playerSettings) ? void 0 : a2.miniplayer) ? void 0 : s2.position) || "bottom",
    m2 = "cover" === (null == c2 ? void 0 : c2.background) || "color" === (null == c2 ? void 0 : c2.background) ? c2.background : "default",
    p2 = null == c2 ? void 0 : c2.progressModes;
  let f2;
  if (i2[0] !== p2) {
    const e3 = Array.isArray(p2) ? Array.from(new Set(p2.filter(Bi))) : [];
    f2 = e3.length > 0 ? e3 : ["line"], i2[0] = p2, i2[1] = f2;
  } else f2 = i2[1];
  const g2 = f2,
    v2 = "pill" === (null == c2 ? void 0 : c2.cover) ? "pill" : "default",
    x2 = "pill" === (null == c2 ? void 0 : c2.border) ? "pill" : "default",
    y2 = g2.includes("line"),
    b2 = g2.includes("background"),
    j2 = g2.includes("cover"),
    w2 = "default" === m2 && "default" === v2 && "default" === x2 && y2 && !b2 && !j2,
    k2 = "pill" === v2 && "pill" === x2 && j2 && !b2,
    N2 = "default" === m2 && b2 && !j2,
    S2 = "cover" === m2 && b2 && !j2;
  let _2;
  i2[2] !== c2 || i2[3] !== (null == r2 ? void 0 : r2.playerSettings) || i2[4] !== o2 ? (_2 = e3 => {
    var t3;
    o2({
      playerSettings: {
        ...(null == r2 ? void 0 : r2.playerSettings),
        miniplayer: {
          ...c2,
          enabled: null == (t3 = null == c2 ? void 0 : c2.enabled) || t3,
          ...e3
        }
      }
    });
  }, i2[2] = c2, i2[3] = null == r2 ? void 0 : r2.playerSettings, i2[4] = o2, i2[5] = _2) : _2 = i2[5];
  const C2 = _2;
  let P2;
  i2[6] !== C2 ? (P2 = (e3, t3, a3) => {
    const s3 = [];
    e3 && s3.push("line"), t3 && s3.push("background"), a3 && s3.push("cover"), 0 !== s3.length && C2({
      progressModes: s3
    });
  }, i2[6] = C2, i2[7] = P2) : P2 = i2[7];
  const z2 = P2;
  let A2, M2;
  i2[8] !== l2 ? (A2 = l2("settings.appearance.player.miniplayer.style"), i2[8] = l2, i2[9] = A2) : A2 = i2[9], i2[10] !== l2 ? (M2 = l2("settings.appearance.player.miniplayer.style_description"), i2[10] = l2, i2[11] = M2) : M2 = i2[11];
  const I2 = !d2;
  let E2, L2, T2;
  i2[12] !== C2 ? (E2 = () => C2({
    enabled: false
  }), i2[12] = C2, i2[13] = E2) : E2 = i2[13], i2[14] !== l2 ? (L2 = l2("common.disabled"), i2[14] = l2, i2[15] = L2) : L2 = i2[15], i2[16] !== I2 || i2[17] !== E2 || i2[18] !== L2 ? (T2 = n.jsx(os, {
    layout: "vertical",
    icon: Ne.close,
    isSelected: I2,
    onClick: E2,
    title: L2
  }), i2[16] = I2, i2[17] = E2, i2[18] = L2, i2[19] = T2) : T2 = i2[19];
  const D2 = w2 && d2;
  let F2, O2, $2;
  i2[20] !== C2 ? (F2 = () => C2({
    enabled: true,
    background: "default",
    progressModes: ["line"],
    cover: "default",
    border: "default"
  }), i2[20] = C2, i2[21] = F2) : F2 = i2[21], i2[22] !== l2 ? (O2 = l2("settings.appearance.player.miniplayer.styles.full"), i2[22] = l2, i2[23] = O2) : O2 = i2[23], i2[24] !== F2 || i2[25] !== O2 || i2[26] !== D2 ? ($2 = n.jsx(os, {
    layout: "vertical",
    icon: ft,
    isSelected: D2,
    onClick: F2,
    title: O2
  }), i2[24] = F2, i2[25] = O2, i2[26] = D2, i2[27] = $2) : $2 = i2[27];
  const B2 = k2 && d2;
  let U2, R2, q2;
  i2[28] !== C2 ? (U2 = () => C2({
    enabled: true,
    background: "default",
    progressModes: ["cover"],
    cover: "pill",
    border: "pill"
  }), i2[28] = C2, i2[29] = U2) : U2 = i2[29], i2[30] !== l2 ? (R2 = l2("settings.appearance.player.miniplayer.presets.rounded"), i2[30] = l2, i2[31] = R2) : R2 = i2[31], i2[32] !== B2 || i2[33] !== U2 || i2[34] !== R2 ? (q2 = n.jsx(os, {
    layout: "vertical",
    icon: qe,
    isSelected: B2,
    onClick: U2,
    title: R2
  }), i2[32] = B2, i2[33] = U2, i2[34] = R2, i2[35] = q2) : q2 = i2[35];
  const V2 = N2 && d2;
  let W2, K2, G2;
  i2[36] !== C2 ? (W2 = () => C2({
    enabled: true,
    background: "default",
    progressModes: ["background"],
    cover: "default",
    border: "default"
  }), i2[36] = C2, i2[37] = W2) : W2 = i2[37], i2[38] !== l2 ? (K2 = l2("settings.appearance.player.miniplayer.presets.hybrid"), i2[38] = l2, i2[39] = K2) : K2 = i2[39], i2[40] !== V2 || i2[41] !== W2 || i2[42] !== K2 ? (G2 = n.jsx(os, {
    layout: "vertical",
    icon: wa,
    isSelected: V2,
    onClick: W2,
    title: K2
  }), i2[40] = V2, i2[41] = W2, i2[42] = K2, i2[43] = G2) : G2 = i2[43];
  const Z2 = S2 && d2;
  let H2, Y2, Q2, J2, X2, ee2, te2;
  return i2[44] !== C2 ? (H2 = () => C2({
    enabled: true,
    background: "cover",
    progressModes: ["background"],
    cover: "default",
    border: "default"
  }), i2[44] = C2, i2[45] = H2) : H2 = i2[45], i2[46] !== l2 ? (Y2 = l2("settings.appearance.player.miniplayer.presets.deck"), i2[46] = l2, i2[47] = Y2) : Y2 = i2[47], i2[48] !== Z2 || i2[49] !== H2 || i2[50] !== Y2 ? (Q2 = n.jsx(os, {
    layout: "vertical",
    icon: ra,
    isSelected: Z2,
    onClick: H2,
    title: Y2
  }), i2[48] = Z2, i2[49] = H2, i2[50] = Y2, i2[51] = Q2) : Q2 = i2[51], i2[52] !== $2 || i2[53] !== q2 || i2[54] !== G2 || i2[55] !== Q2 || i2[56] !== T2 ? (J2 = n.jsxs(rs, {
    children: [T2, $2, q2, G2, Q2]
  }), i2[52] = $2, i2[53] = q2, i2[54] = G2, i2[55] = Q2, i2[56] = T2, i2[57] = J2) : J2 = i2[57], i2[58] !== J2 || i2[59] !== A2 || i2[60] !== M2 ? (X2 = n.jsx(is, {
    children: n.jsx(ns, {
      label: A2,
      description: M2,
      vertical: true,
      children: J2
    })
  }), i2[58] = J2, i2[59] = A2, i2[60] = M2, i2[61] = X2) : X2 = i2[61], i2[62] !== b2 || i2[63] !== j2 || i2[64] !== y2 || i2[65] !== d2 || i2[66] !== m2 || i2[67] !== x2 || i2[68] !== v2 || i2[69] !== u2 || i2[70] !== z2 || i2[71] !== l2 || i2[72] !== C2 ? (ee2 = d2 && n.jsxs(n.Fragment, {
    children: [n.jsx(cs, {}), n.jsxs(is, {
      children: [n.jsx(ns, {
        label: l2("settings.appearance.player.miniplayer.position"),
        description: l2("settings.appearance.player.miniplayer.position_description"),
        children: n.jsx(h, {
          options: [{
            value: "top",
            icon: De,
            title: l2("settings.appearance.tabs_settings.positions.top")
          }, {
            value: "bottom",
            icon: Fe,
            title: l2("settings.appearance.tabs_settings.positions.bottom")
          }, {
            value: "bottom-full",
            icon: ba,
            title: l2("settings.appearance.tabs_settings.positions.bottom_full")
          }, {
            value: "floating",
            icon: ja,
            title: l2("settings.appearance.tabs_settings.positions.floating")
          }],
          value: u2,
          onChange: e3 => C2({
            enabled: true,
            position: e3
          }),
          size: "sm"
        })
      }), n.jsx(ns, {
        label: l2("settings.appearance.player.miniplayer.background.title"),
        description: l2("settings.appearance.player.miniplayer.background.description"),
        vertical: true,
        children: n.jsx(rs, {
          children: [{
            value: "default",
            icon: ft
          }, {
            value: "cover",
            icon: ra
          }, {
            value: "color",
            icon: wa
          }].map(e3 => {
            const {
              value: t3,
              icon: a3
            } = e3;
            return n.jsx(os, {
              icon: a3,
              title: l2(`settings.appearance.player.miniplayer.background.options.${t3}`),
              isSelected: m2 === t3,
              onClick: () => C2({
                background: t3
              })
            }, t3);
          })
        })
      }), n.jsx(ns, {
        label: l2("settings.appearance.player.miniplayer.progress.title"),
        description: l2("settings.appearance.player.miniplayer.progress.description"),
        vertical: true,
        children: n.jsxs(rs, {
          children: [n.jsx(os, {
            layout: "vertical",
            icon: oa,
            isSelected: y2,
            onClick: () => z2(!y2, b2, j2),
            title: l2("settings.appearance.player.miniplayer.progress.options.default")
          }), n.jsx(os, {
            layout: "vertical",
            icon: De,
            isSelected: b2,
            onClick: () => z2(y2, !b2, j2),
            title: l2("settings.appearance.player.miniplayer.progress.options.background")
          }), n.jsx(os, {
            layout: "vertical",
            icon: qe,
            isSelected: j2,
            onClick: () => z2(y2, b2, !j2),
            title: l2("settings.appearance.player.miniplayer.progress.options.cover")
          })]
        })
      }), n.jsx(ns, {
        label: l2("settings.appearance.player.miniplayer.cover.title"),
        description: l2("settings.appearance.player.miniplayer.cover.description"),
        children: n.jsx(h, {
          options: [{
            value: "default",
            label: l2("settings.appearance.player.miniplayer.cover.options.default"),
            icon: Jt
          }, {
            value: "pill",
            label: l2("settings.appearance.player.miniplayer.cover.options.pill"),
            icon: qe
          }],
          value: v2,
          onChange: e3 => C2({
            cover: e3
          }),
          size: "sm"
        })
      }), n.jsx(ns, {
        label: l2("settings.appearance.player.miniplayer.border.title"),
        description: l2("settings.appearance.player.miniplayer.border.description"),
        children: n.jsx(h, {
          options: [{
            value: "default",
            label: l2("settings.appearance.player.miniplayer.border.options.default"),
            icon: Jt
          }, {
            value: "pill",
            label: l2("settings.appearance.player.miniplayer.border.options.pill"),
            icon: qe
          }],
          value: x2,
          onChange: e3 => C2({
            border: e3
          }),
          size: "sm"
        })
      })]
    })]
  }), i2[62] = b2, i2[63] = j2, i2[64] = y2, i2[65] = d2, i2[66] = m2, i2[67] = x2, i2[68] = v2, i2[69] = u2, i2[70] = z2, i2[71] = l2, i2[72] = C2, i2[73] = ee2) : ee2 = i2[73], i2[74] !== X2 || i2[75] !== ee2 ? (te2 = n.jsxs("div", {
    className: "flex flex-col pb-6",
    children: [X2, ee2]
  }), i2[74] = X2, i2[75] = ee2, i2[76] = te2) : te2 = i2[76], te2;
}
function Bi(e3) {
  return "line" === e3 || "background" === e3 || "cover" === e3;
}
const Ui = ["audio", "view", "queue", "miniplayer", "overlay"];
function Ri() {
  const t2 = e.c(54),
    {
      t: a2
    } = le(),
    s2 = oe(Vi),
    i2 = oe(qi);
  let l2;
  if (t2[0] !== s2) {
    const e3 = (null == s2 ? void 0 : s2.startsWith("player.")) ? s2.split(".")[1] : "";
    l2 = Ui.includes(e3) ? e3 : "audio", t2[0] = s2, t2[1] = l2;
  } else l2 = t2[1];
  const r2 = l2;
  let o2, c2, d2, u2, m2, p2, f2, g2, h2, v2, x2;
  t2[2] !== a2 ? (o2 = a2("settings.tabs.player.audio"), t2[2] = a2, t2[3] = o2) : o2 = t2[3], t2[4] !== o2 ? (c2 = {
    id: "audio",
    label: o2,
    icon: ka
  }, t2[4] = o2, t2[5] = c2) : c2 = t2[5], t2[6] !== a2 ? (d2 = a2("settings.tabs.player.view"), t2[6] = a2, t2[7] = d2) : d2 = t2[7], t2[8] !== d2 ? (u2 = {
    id: "view",
    label: d2,
    icon: Ne.play
  }, t2[8] = d2, t2[9] = u2) : u2 = t2[9], t2[10] !== a2 ? (m2 = a2("settings.tabs.player.queue"), t2[10] = a2, t2[11] = m2) : m2 = t2[11], t2[12] !== m2 ? (p2 = {
    id: "queue",
    label: m2,
    icon: xa
  }, t2[12] = m2, t2[13] = p2) : p2 = t2[13], t2[14] !== a2 ? (f2 = a2("settings.tabs.player.miniplayer"), t2[14] = a2, t2[15] = f2) : f2 = t2[15], t2[16] !== f2 ? (g2 = {
    id: "miniplayer",
    label: f2,
    icon: Ne.track
  }, t2[16] = f2, t2[17] = g2) : g2 = t2[17], t2[18] !== a2 ? (h2 = a2("settings.tabs.player.overlay"), t2[18] = a2, t2[19] = h2) : h2 = t2[19], t2[20] !== h2 ? (v2 = {
    id: "overlay",
    label: h2,
    icon: ja
  }, t2[20] = h2, t2[21] = v2) : v2 = t2[21], t2[22] !== v2 || t2[23] !== c2 || t2[24] !== u2 || t2[25] !== p2 || t2[26] !== g2 ? (x2 = [c2, u2, p2, g2, v2], t2[22] = v2, t2[23] = c2, t2[24] = u2, t2[25] = p2, t2[26] = g2, t2[27] = x2) : x2 = t2[27];
  const y2 = x2;
  let b2, j2;
  t2[28] !== i2 ? (b2 = e3 => i2(`player.${e3}`), t2[28] = i2, t2[29] = b2) : b2 = t2[29], t2[30] !== r2 || t2[31] !== y2 || t2[32] !== b2 ? (j2 = n.jsx(zn, {
    tabs: y2,
    activeTab: r2,
    onChange: b2
  }), t2[30] = r2, t2[31] = y2, t2[32] = b2, t2[33] = j2) : j2 = t2[33];
  const w2 = String(r2);
  let k2, N2, S2, _2, C2, P2, z2;
  return t2[34] !== r2 ? (k2 = "audio" === r2 && n.jsx(_i, {}), t2[34] = r2, t2[35] = k2) : k2 = t2[35], t2[36] !== r2 ? (N2 = "view" === r2 && n.jsxs("div", {
    className: "flex flex-col",
    children: [n.jsx(Li, {}), n.jsx(cs, {}), n.jsx(Ti, {})]
  }), t2[36] = r2, t2[37] = N2) : N2 = t2[37], t2[38] !== r2 ? (S2 = "queue" === r2 && n.jsx(Oi, {}), t2[38] = r2, t2[39] = S2) : S2 = t2[39], t2[40] !== r2 ? (_2 = "miniplayer" === r2 && n.jsx($i, {}), t2[40] = r2, t2[41] = _2) : _2 = t2[41], t2[42] !== r2 ? (C2 = "overlay" === r2 && n.jsx(Ai, {}), t2[42] = r2, t2[43] = C2) : C2 = t2[43], t2[44] !== w2 || t2[45] !== k2 || t2[46] !== N2 || t2[47] !== S2 || t2[48] !== _2 || t2[49] !== C2 ? (P2 = n.jsxs(ht, {
    id: w2,
    className: "w-full",
    children: [k2, N2, S2, _2, C2]
  }), t2[44] = w2, t2[45] = k2, t2[46] = N2, t2[47] = S2, t2[48] = _2, t2[49] = C2, t2[50] = P2) : P2 = t2[50], t2[51] !== j2 || t2[52] !== P2 ? (z2 = n.jsxs("div", {
    className: "w-full pb-8",
    children: [j2, P2]
  }), t2[51] = j2, t2[52] = P2, t2[53] = z2) : z2 = t2[53], z2;
}
function qi(e3) {
  return e3.setLastSettingsTab;
}
function Vi(e3) {
  return e3.lastSettingsTab;
}
function Fr(t2) {
  const a2 = e.c(8),
    s2 = ve($r),
    n2 = ve(Or);
  let i2;
  a2[0] !== t2 || a2[1] !== s2 || a2[2] !== n2 ? (i2 = async e3 => {
    if (!s2) return null;
    try {
      const t3 = e3(s2);
      await n2(t3);
    } catch (a3) {
      const e4 = a3;
      xe.error("settings", `${t2} settings update error`, e4);
    }
    return null;
  }, a2[0] = t2, a2[1] = s2, a2[2] = n2, a2[3] = i2) : i2 = a2[3];
  const l2 = i2;
  let r2;
  return a2[4] !== l2 || a2[5] !== s2 || a2[6] !== n2 ? (r2 = {
    serviceSettings: s2,
    updateServiceSettings: n2,
    handleUpdateSettings: l2
  }, a2[4] = l2, a2[5] = s2, a2[6] = n2, a2[7] = r2) : r2 = a2[7], r2;
}
function Or(e3) {
  return e3.updateServiceSettings;
}
function $r(e3) {
  return e3.serviceSettings;
}
function Br({
  fields: e3,
  onSave: t2,
  isChecking: a2,
  instruction: s2,
  action: i2,
  onClear: l2,
  showOr: r2 = false,
  disabled: o2 = false
}) {
  const {
      t: c2
    } = le(),
    d2 = e3[e3.length - 1],
    u2 = e3.slice(0, -1);
  return n.jsxs("div", {
    className: "space-y-4",
    children: [r2 && n.jsx(ae, {
      className: "my-6",
      children: c2("common.or")
    }), s2 && n.jsx("div", {
      className: "p-4 rounded-xl bg-primary/5 border border-primary/10 text-caption text-muted-foreground leading-relaxed",
      children: s2
    }), u2.length > 0 && n.jsx("div", {
      className: "grid gap-2 " + (u2.length > 1 ? "grid-cols-2" : "grid-cols-1"),
      children: u2.map((e4, t3) => n.jsx(v, {
        type: e4.type,
        placeholder: e4.placeholder,
        value: e4.value,
        onChange: t4 => e4.onChange(t4.target.value),
        className: "h-10 text-sm"
      }, t3))
    }), i2 && n.jsx(Se, {
      variant: "secondary",
      className: "w-full h-10 text-xs font-medium",
      onClick: i2.onClick,
      disabled: i2.disabled,
      children: i2.label
    }), i2 && n.jsx("div", {
      className: "h-px bg-border/10"
    }), n.jsxs("div", {
      className: "flex items-center gap-2",
      children: [n.jsxs("div", {
        className: "flex-1 relative",
        children: [n.jsx(v, {
          type: d2.type,
          placeholder: d2.placeholder,
          value: d2.value,
          onChange: e4 => d2.onChange(e4.target.value),
          className: "h-10 text-sm pr-10"
        }), d2.helpUrl && n.jsx(Se, {
          type: "button",
          variant: "ghost",
          size: "icon-xs",
          onClick: () => Ge(() => import("./globals-Bc3qFUyf.js").then(e4 => e4.gD), __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url).then(e4 => e4.open(d2.helpUrl)),
          className: "absolute right-1.5 top-1/2 -translate-y-1/2",
          "aria-label": c2("services.common.get_token"),
          children: n.jsx(ts, {
            className: "h-4 w-4"
          })
        })]
      }), l2 && e3.some(e4 => e4.value.trim()) && n.jsx(Se, {
        variant: "ghost",
        size: "icon",
        onClick: l2,
        className: "h-10 w-10 shrink-0 text-muted-foreground hover:text-destructive",
        "aria-label": c2("services.common.clear"),
        children: n.jsx(Ne.close, {
          className: "h-4 w-4"
        })
      }), n.jsx(Se, {
        size: "icon",
        onClick: t2,
        disabled: o2 || a2 || !d2.value.trim(),
        className: "h-10 w-10 shrink-0",
        "aria-label": c2("services.common.save"),
        children: a2 ? n.jsx(_e, {
          className: "h-4 w-4 animate-spin"
        }) : n.jsx(Ne.check, {
          className: "h-4 w-4"
        })
      })]
    })]
  });
}
function Ur(t2) {
  const a2 = e.c(24),
    {
      serviceName: s2,
      source: i2,
      isValid: l2,
      username: r2,
      avatar: o2,
      onOAuth: c2,
      isOAuthLoading: d2,
      manualFields: u2,
      onSave: m2,
      onClear: p2,
      isChecking: f2,
      error: g2,
      customExtra: h2
    } = t2,
    v2 = void 0 !== d2 && d2,
    {
      t: x2
    } = le();
  let y2, b2, j2, w2;
  return a2[0] !== o2 || a2[1] !== l2 || a2[2] !== p2 || a2[3] !== s2 || a2[4] !== r2 ? (y2 = l2 && n.jsx(Kn, {
    username: r2 || s2,
    avatar: o2,
    onDisconnect: p2
  }), a2[0] = o2, a2[1] = l2, a2[2] = p2, a2[3] = s2, a2[4] = r2, a2[5] = y2) : y2 = a2[5], a2[6] !== f2 || a2[7] !== v2 || a2[8] !== l2 || a2[9] !== u2 || a2[10] !== p2 || a2[11] !== c2 || a2[12] !== m2 || a2[13] !== s2 || a2[14] !== i2 || a2[15] !== x2 ? (b2 = !l2 && n.jsxs("div", {
    className: "space-y-4",
    children: [c2 && n.jsx(Gn, {
      name: s2,
      source: i2,
      onConnect: c2,
      isLoading: v2,
      subtitle: x2("services.common.oauth_subtitle")
    }), n.jsx(Br, {
      showOr: !l2 && Boolean(c2),
      fields: u2,
      onSave: m2,
      isChecking: f2,
      onClear: p2
    })]
  }), a2[6] = f2, a2[7] = v2, a2[8] = l2, a2[9] = u2, a2[10] = p2, a2[11] = c2, a2[12] = m2, a2[13] = s2, a2[14] = i2, a2[15] = x2, a2[16] = b2) : b2 = a2[16], a2[17] !== g2 ? (j2 = g2 && n.jsx(Un, {
    title: g2,
    className: "border-none bg-transparent p-0"
  }), a2[17] = g2, a2[18] = j2) : j2 = a2[18], a2[19] !== h2 || a2[20] !== y2 || a2[21] !== b2 || a2[22] !== j2 ? (w2 = n.jsx("div", {
    className: "w-full",
    children: n.jsxs("div", {
      className: "space-y-4",
      children: [y2, b2, h2, j2]
    })
  }), a2[19] = h2, a2[20] = y2, a2[21] = b2, a2[22] = j2, a2[23] = w2) : w2 = a2[23], w2;
}
function Rr() {
  var e3, t2, s2, i2, l2;
  const {
      t: r2
    } = le(),
    o2 = a.useRef(true),
    {
      serviceSettings: c2,
      handleUpdateSettings: d2
    } = Fr("deezer"),
    [u2, m2] = a.useState(""),
    [p2, f2] = a.useState(false),
    [g2, h2] = a.useState(""),
    {
      isLoading: v2,
      startDeezerOAuth: x2
    } = F({
      onSuccess: async () => {},
      onError: e4 => {
        o2.current && h2(e4);
      }
    }),
    y2 = a.useMemo(() => {
      var e4;
      return !!(null == (e4 = null == c2 ? void 0 : c2.deezer) ? void 0 : e4.token);
    }, [null == (e3 = null == c2 ? void 0 : c2.deezer) ? void 0 : e3.token]),
    b2 = a.useMemo(() => {
      var e4;
      return !!(null == (e4 = null == c2 ? void 0 : c2.deezer) ? void 0 : e4.username);
    }, [null == (t2 = null == c2 ? void 0 : c2.deezer) ? void 0 : t2.username]),
    j2 = (null == (s2 = null == c2 ? void 0 : c2.deezer) ? void 0 : s2.token) || "";
  a.useEffect(() => {
    m2(j2);
  }, [j2]), a.useEffect(() => (o2.current = true, () => {
    o2.current = false;
  }), []);
  return n.jsx(Ur, {
    serviceName: "Deezer",
    source: "deezer",
    isValid: y2,
    isLinked: b2,
    username: null == (i2 = null == c2 ? void 0 : c2.deezer) ? void 0 : i2.username,
    avatar: null == (l2 = null == c2 ? void 0 : c2.deezer) ? void 0 : l2.avatar,
    onOAuth: x2,
    isOAuthLoading: v2,
    manualFields: [{
      placeholder: "arl_cookie_here...",
      value: u2,
      onChange: m2,
      helpUrl: "https://www.deezer.com"
    }],
    onSave: async () => {
      if (u2.trim()) {
        f2(true), h2("");
        try {
          const e4 = await as.checkTokenValidity("deezer", u2);
          e4 && e4.isValid ? (await d2(e5 => ({
            ...e5,
            deezer: {
              ...e5.deezer,
              token: u2,
              username: "",
              avatar: ""
            }
          })), h2("")) : h2(r2("services.errors.invalid_token"));
        } catch {
          h2(r2("services.errors.invalid_token"));
        } finally {
          o2.current && f2(false);
        }
      } else h2(r2("errors.platforms.deezer.token_required"));
    },
    onClear: async () => {
      await d2(e4 => ({
        ...e4,
        deezer: {
          ...e4.deezer,
          token: "",
          username: "",
          avatar: ""
        }
      })), o2.current && (m2(""), h2(""));
    },
    isChecking: p2,
    error: g2
  });
}
function qr() {
  var e3, t2, s2, i2, l2;
  const {
      t: r2
    } = le(),
    o2 = a.useRef(true),
    {
      serviceSettings: c2,
      handleUpdateSettings: d2
    } = Fr("soundcloud"),
    [u2, m2] = a.useState(""),
    [p2, f2] = a.useState(false),
    [g2, h2] = a.useState(""),
    {
      startSoundcloudOAuth: v2,
      isLoading: x2
    } = F({
      onSuccess: async () => {},
      onError: e4 => {
        o2.current && h2(e4);
      }
    }),
    y2 = (null == (e3 = null == c2 ? void 0 : c2.soundcloud) ? void 0 : e3.clientId) || "";
  a.useEffect(() => {
    m2(y2);
  }, [y2]), a.useEffect(() => (o2.current = true, () => {
    o2.current = false;
  }), []);
  const b2 = a.useMemo(() => {
    var e4, t3;
    return !!(null == (e4 = null == c2 ? void 0 : c2.soundcloud) ? void 0 : e4.clientId) || !!(null == (t3 = null == c2 ? void 0 : c2.soundcloud) ? void 0 : t3.access_token);
  }, [null == (t2 = null == c2 ? void 0 : c2.soundcloud) ? void 0 : t2.clientId, null == (s2 = null == c2 ? void 0 : c2.soundcloud) ? void 0 : s2.access_token]);
  return n.jsx(Ur, {
    serviceName: "SoundCloud",
    source: "soundcloud",
    isValid: b2,
    isLinked: b2,
    username: null == (i2 = null == c2 ? void 0 : c2.soundcloud) ? void 0 : i2.username,
    avatar: null == (l2 = null == c2 ? void 0 : c2.soundcloud) ? void 0 : l2.avatar_url,
    onOAuth: v2,
    isOAuthLoading: x2,
    manualFields: [{
      placeholder: r2("services.soundcloud.id_placeholder"),
      value: u2,
      onChange: m2,
      helpUrl: "https://soundcloud.com"
    }],
    onSave: async () => {
      const e4 = u2.trim();
      h2(""), f2(true);
      try {
        if (!e4) return await d2(e5 => ({
          ...e5,
          soundcloud: {
            ...e5.soundcloud,
            clientId: ""
          }
        })), void (o2.current && (m2(""), h2("")));
        const t3 = await as.checkTokenValidity("soundcloud", e4);
        t3.isValid ? (await d2(a2 => {
          var s3, n2, i3;
          return {
            ...a2,
            soundcloud: {
              ...a2.soundcloud,
              clientId: e4,
              username: (null == (s3 = t3.userInfo) ? void 0 : s3.username) || (null == (n2 = t3.userInfo) ? void 0 : n2.id) || "Soundcloud User",
              avatar_url: (null == (i3 = t3.userInfo) ? void 0 : i3.avatar) || ""
            }
          };
        }), o2.current && h2("")) : o2.current && h2(r2("services.errors.invalid_client_id"));
      } catch {
        o2.current && h2(r2("services.errors.invalid_client_id"));
      } finally {
        o2.current && f2(false);
      }
    },
    onClear: async () => {
      await d2(e4 => ({
        ...e4,
        soundcloud: {
          ...e4.soundcloud,
          clientId: "",
          access_token: null,
          refresh_token: null,
          token_expires_at: null,
          username: null,
          avatar_url: null
        }
      })), o2.current && (m2(""), h2(""));
    },
    isChecking: p2,
    error: g2
  });
}
function Vr() {
  var e3, t2, s2, i2, l2;
  const {
      t: r2
    } = le(),
    o2 = a.useRef(true),
    {
      serviceSettings: c2,
      handleUpdateSettings: d2
    } = Fr("spotify"),
    [u2, m2] = a.useState(""),
    [p2, f2] = a.useState(false),
    [g2, h2] = a.useState(""),
    {
      startSpotifyOAuth: v2,
      isLoading: x2
    } = F({
      onSuccess: async () => {},
      onError: e4 => {
        o2.current && h2(e4);
      }
    }),
    y2 = a.useMemo(() => {
      var e4;
      return !!(null == (e4 = null == c2 ? void 0 : c2.spotify) ? void 0 : e4.access_token);
    }, [null == (e3 = null == c2 ? void 0 : c2.spotify) ? void 0 : e3.access_token]),
    b2 = a.useMemo(() => {
      var e4;
      return !!(null == (e4 = null == c2 ? void 0 : c2.spotify) ? void 0 : e4.username);
    }, [null == (t2 = null == c2 ? void 0 : c2.spotify) ? void 0 : t2.username]),
    j2 = (null == (s2 = null == c2 ? void 0 : c2.spotify) ? void 0 : s2.access_token) || "";
  a.useEffect(() => {
    m2(j2);
  }, [j2]), a.useEffect(() => (o2.current = true, () => {
    o2.current = false;
  }), []);
  return n.jsx(Ur, {
    serviceName: "Spotify",
    source: "spotify",
    isValid: y2,
    isLinked: b2,
    username: null == (i2 = null == c2 ? void 0 : c2.spotify) ? void 0 : i2.username,
    avatar: null == (l2 = null == c2 ? void 0 : c2.spotify) ? void 0 : l2.avatar_url,
    onOAuth: v2,
    isOAuthLoading: x2,
    manualFields: [{
      placeholder: "sp_dc=AQD...",
      value: u2,
      onChange: m2,
      helpUrl: "https://open.spotify.com"
    }],
    onSave: async () => {
      if (u2.trim()) {
        h2(""), f2(true);
        try {
          const e4 = `sp_dc=${u2.trim().replace(/^sp_dc=/, "")}`,
            t3 = await as.checkTokenValidity("spotify", e4);
          if (!t3.isValid) return void h2(r2("errors.platforms.spotify.invalid_credentials"));
          await d2(e5 => {
            var a2, s3, n2;
            return {
              ...e5,
              spotify: {
                ...e5.spotify,
                access_token: u2.trim(),
                username: (null == (a2 = t3.userInfo) ? void 0 : a2.username) || (null == (s3 = t3.userInfo) ? void 0 : s3.id) || "Spotify User",
                avatar_url: (null == (n2 = t3.userInfo) ? void 0 : n2.avatar) || ""
              }
            };
          });
        } catch {
          o2.current && h2(r2("services.errors.invalid_token"));
        } finally {
          o2.current && f2(false);
        }
      } else h2(r2("services.spotify.token_required"));
    },
    onClear: async () => {
      await d2(e4 => ({
        ...e4,
        spotify: {
          ...e4.spotify,
          access_token: "",
          username: "",
          avatar_url: ""
        }
      })), o2.current && (m2(""), h2(""));
    },
    isChecking: p2,
    error: g2
  });
}
function Wr() {
  var e3, t2, s2, i2, l2;
  const {
      t: r2
    } = le(),
    o2 = a.useRef(true),
    {
      serviceSettings: c2,
      handleUpdateSettings: d2
    } = Fr("vk"),
    [u2, m2] = a.useState(""),
    [p2, f2] = a.useState(false),
    [g2, h2] = a.useState(""),
    {
      startVkOAuth: v2,
      isLoading: x2
    } = F({
      onError: e4 => {
        o2.current && h2(e4);
      }
    }),
    y2 = a.useMemo(() => {
      var e4;
      return !!(null == (e4 = null == c2 ? void 0 : c2.vk) ? void 0 : e4.token);
    }, [null == (e3 = null == c2 ? void 0 : c2.vk) ? void 0 : e3.token]),
    b2 = a.useMemo(() => {
      var e4;
      return !!(null == (e4 = null == c2 ? void 0 : c2.vk) ? void 0 : e4.username);
    }, [null == (t2 = null == c2 ? void 0 : c2.vk) ? void 0 : t2.username]),
    j2 = (null == (s2 = null == c2 ? void 0 : c2.vk) ? void 0 : s2.token) || "";
  a.useEffect(() => {
    m2(j2);
  }, [j2]), a.useEffect(() => (o2.current = true, () => {
    o2.current = false;
  }), []);
  return n.jsx(Ur, {
    serviceName: "VK",
    source: "vk",
    isValid: y2,
    isLinked: b2,
    username: null == (i2 = null == c2 ? void 0 : c2.vk) ? void 0 : i2.username,
    avatar: null == (l2 = null == c2 ? void 0 : c2.vk) ? void 0 : l2.avatar,
    onOAuth: v2,
    isOAuthLoading: x2,
    manualFields: [{
      placeholder: "vk1.a.AbCdEf...",
      value: u2,
      onChange: m2,
      helpUrl: "https://vkhost.github.io/"
    }],
    onSave: async () => {
      if (u2.trim()) {
        f2(true), h2("");
        try {
          const e4 = await as.checkTokenValidity("vk", u2.trim());
          (null == e4 ? void 0 : e4.isValid) ? (await d2(t3 => {
            var a2, s3;
            return {
              ...t3,
              vk: {
                ...t3.vk,
                token: u2.trim(),
                username: (null == (a2 = e4.userInfo) ? void 0 : a2.username) || "VK User",
                avatar: (null == (s3 = e4.userInfo) ? void 0 : s3.avatar) || ""
              }
            };
          }), h2("")) : h2(r2("services.errors.invalid_token"));
        } catch {
          h2(r2("services.errors.invalid_token"));
        } finally {
          o2.current && f2(false);
        }
      } else h2(r2("services.vk.messages.token_required"));
    },
    onClear: async () => {
      await d2(e4 => ({
        ...e4,
        vk: {
          ...e4.vk,
          token: "",
          username: "",
          avatar: ""
        }
      })), o2.current && (m2(""), h2(""));
    },
    isChecking: p2,
    error: g2
  });
}
function Kr() {
  var e3, t2, s2, i2, l2;
  const {
      t: r2
    } = le(),
    o2 = a.useRef(true),
    {
      serviceSettings: c2,
      handleUpdateSettings: d2
    } = Fr("yandex"),
    [u2, m2] = a.useState(""),
    [p2, f2] = a.useState(false),
    [g2, h2] = a.useState(""),
    {
      isLoading: v2,
      startYandexOAuth: x2
    } = F({
      onSuccess: async () => {},
      onError: e4 => {
        o2.current && h2(e4);
      }
    }),
    y2 = a.useMemo(() => {
      var e4;
      return !!(null == (e4 = null == c2 ? void 0 : c2.yandex) ? void 0 : e4.token);
    }, [null == (e3 = null == c2 ? void 0 : c2.yandex) ? void 0 : e3.token]),
    b2 = a.useMemo(() => {
      var e4;
      return !!(null == (e4 = null == c2 ? void 0 : c2.yandex) ? void 0 : e4.username);
    }, [null == (t2 = null == c2 ? void 0 : c2.yandex) ? void 0 : t2.username]),
    j2 = (null == (s2 = null == c2 ? void 0 : c2.yandex) ? void 0 : s2.token) || "";
  a.useEffect(() => {
    m2(j2);
  }, [j2]), a.useEffect(() => (o2.current = true, () => {
    o2.current = false;
  }), []);
  return n.jsx(Ur, {
    serviceName: "Yandex",
    source: "yandex",
    isValid: y2,
    isLinked: b2,
    username: null == (i2 = null == c2 ? void 0 : c2.yandex) ? void 0 : i2.username,
    avatar: null == (l2 = null == c2 ? void 0 : c2.yandex) ? void 0 : l2.avatar,
    onOAuth: x2,
    isOAuthLoading: v2,
    manualFields: [{
      placeholder: "y0_AgAAAA...",
      value: u2,
      onChange: m2,
      helpUrl: "https://yandex.ru/dev/oauth/"
    }],
    onSave: async () => {
      if (u2.trim()) {
        h2(""), f2(true);
        try {
          const e4 = await as.checkTokenValidity("yandex", u2);
          e4 && e4.isValid ? (await d2(e5 => ({
            ...e5,
            yandex: {
              ...e5.yandex,
              token: u2,
              username: "",
              avatar: ""
            }
          })), h2("")) : h2(r2("services.errors.invalid_token"));
        } catch {
          h2(r2("services.errors.invalid_token"));
        } finally {
          o2.current && f2(false);
        }
      } else h2(r2("errors.platforms.yandex.token_required"));
    },
    onClear: async () => {
      await d2(e4 => ({
        ...e4,
        yandex: {
          ...e4.yandex,
          token: "",
          username: void 0,
          avatar: void 0
        }
      })), o2.current && (m2(""), h2(""));
    },
    isChecking: p2,
    error: g2
  });
}
const Gr = [{
  id: "spotify",
  name: "Spotify",
  source: "spotify"
}, {
  id: "yandex",
  name: "Yandex",
  source: "yandex"
}, {
  id: "soundcloud",
  name: "SoundCloud",
  source: "soundcloud"
}, {
  id: "vk",
  name: "VK",
  source: "vk"
}, {
  id: "deezer",
  name: "Deezer",
  source: "deezer"
}];
function Zr() {
  const [e3, t2] = a.useState("spotify"),
    s2 = ve(e4 => e4.serviceSettings),
    i2 = l.useMemo(() => Gr.map(e4 => {
      const t3 = (e5 => {
          var t4, a3, n2, i3, l2, r2, o2, c2, d2, u2, m2, p2, f2, g2, h2, v2, x2;
          if (!(null == s2 ? void 0 : s2[e5])) return {
            isConnected: false,
            username: void 0,
            avatar: void 0
          };
          if ("spotify" === e5) return {
            isConnected: !!(null == (t4 = null == s2 ? void 0 : s2.spotify) ? void 0 : t4.access_token),
            username: null == (a3 = null == s2 ? void 0 : s2.spotify) ? void 0 : a3.username,
            avatar: null == (n2 = null == s2 ? void 0 : s2.spotify) ? void 0 : n2.avatar_url
          };
          if ("yandex" === e5) return {
            isConnected: !!(null == (i3 = null == s2 ? void 0 : s2.yandex) ? void 0 : i3.token),
            username: null == (l2 = null == s2 ? void 0 : s2.yandex) ? void 0 : l2.username,
            avatar: (null == (r2 = null == s2 ? void 0 : s2.yandex) ? void 0 : r2.avatar_url) || (null == (o2 = null == s2 ? void 0 : s2.yandex) ? void 0 : o2.avatar)
          };
          if ("soundcloud" === e5) return {
            isConnected: !!(null == (c2 = null == s2 ? void 0 : s2.soundcloud) ? void 0 : c2.clientId),
            username: null == (d2 = null == s2 ? void 0 : s2.soundcloud) ? void 0 : d2.username,
            avatar: null == (u2 = null == s2 ? void 0 : s2.soundcloud) ? void 0 : u2.avatar_url
          };
          if ("vk" === e5) return {
            isConnected: !!(null == (m2 = null == s2 ? void 0 : s2.vk) ? void 0 : m2.token),
            username: null == (p2 = null == s2 ? void 0 : s2.vk) ? void 0 : p2.username,
            avatar: null == (f2 = null == s2 ? void 0 : s2.vk) ? void 0 : f2.avatar
          };
          if ("deezer" === e5) return {
            isConnected: !!(null == (g2 = null == s2 ? void 0 : s2.deezer) ? void 0 : g2.token),
            username: null == (h2 = null == s2 ? void 0 : s2.deezer) ? void 0 : h2.username,
            avatar: (null == (v2 = null == s2 ? void 0 : s2.deezer) ? void 0 : v2.avatar_url) || (null == (x2 = null == s2 ? void 0 : s2.deezer) ? void 0 : x2.avatar)
          };
          return {
            isConnected: false,
            username: void 0,
            avatar: void 0
          };
        })(e4.id),
        a2 = t3.avatar ? n.jsx("img", {
          src: t3.avatar,
          alt: "",
          className: "w-4 h-4 rounded-full object-cover shrink-0"
        }) : n.jsx(wt, {
          source: e4.source,
          size: 15
        });
      return {
        id: e4.id,
        label: t3.username || e4.name,
        icon: a2
      };
    }), [s2]);
  return n.jsxs("div", {
    className: "w-full pb-12",
    children: [n.jsx(zn, {
      tabs: i2,
      activeTab: e3,
      onChange: t2
    }), n.jsx(ht, {
      id: String(e3),
      children: (() => {
        switch (e3) {
          case "spotify":
            return n.jsx(Vr, {});
          case "yandex":
            return n.jsx(Kr, {});
          case "soundcloud":
            return n.jsx(qr, {});
          case "vk":
            return n.jsx(Wr, {});
          case "deezer":
            return n.jsx(Rr, {});
          default:
            return null;
        }
      })()
    })]
  });
}
const Hr = Object.freeze({
    type: "spring",
    stiffness: 500,
    damping: 38
  }),
  Yr = Object.freeze({
    opacity: 0
  }),
  Qr = Object.freeze({
    opacity: 1
  }),
  Jr = Object.freeze({
    duration: 0.1,
    ease: "easeOut"
  }),
  Xr = l.memo(function ({
    children: e3
  }) {
    const {
        t: s2,
        activeCategory: i2,
        setActiveCategory: r2
      } = Ts(),
      c2 = t().pathname.startsWith("/settings"),
      d2 = oe(e4 => e4.isSettingsDialogOpen),
      u2 = c2 || d2,
      m2 = oe(e4 => e4.setSettingsDialogOpen),
      p2 = se(e4 => e4.isNewsPanelOpen),
      f2 = se(e4 => e4.setNewsPanelOpen),
      g2 = a.useRef(null),
      h2 = a.useRef(null),
      {
        width: v2
      } = ss();
    ut(h2, void 0, [u2]), w(h2, {
      axis: "x",
      enabled: u2
    }), a.useEffect(() => {
      var e4, t2;
      u2 && (null == (t2 = null == (e4 = h2.current) ? void 0 : e4.querySelector('[aria-current="page"]')) || t2.scrollIntoView({
        behavior: "instant",
        block: "nearest",
        inline: "nearest"
      }));
    }, [i2, u2, v2]);
    const x2 = a.useCallback(() => {
      m2(false);
    }, [m2]);
    a.useEffect(() => {
      u2 && p2 && f2(false);
    }, [u2, p2, f2]), a.useEffect(() => {
      const e4 = () => m2(false);
      return window.addEventListener("dotify:close-settings", e4), () => window.removeEventListener("dotify:close-settings", e4);
    }, [m2]);
    const [y2, b2] = l.useState(u2);
    u2 && !y2 && b2(true);
    const j2 = a.useMemo(() => [{
        id: "profile",
        label: s2("settings.tabs.profile.title")
      }, {
        id: "appearance",
        label: s2("settings.tabs.appearance.title")
      }, {
        id: "player",
        label: s2("settings.tabs.player.title")
      }], [s2]),
      k2 = () => {
        switch (i2) {
          case "profile":
          default:
            return n.jsx(Tr, {});
          case "main":
            return n.jsx(wi, {});
          case "appearance":
            return n.jsx(An, {});
          case "player":
            return n.jsx(Ri, {});
          case "services":
            return n.jsx(Zr, {});
          case "integrations":
            return n.jsx(Qn, {});
        }
      },
      N2 = a.useMemo(() => {
        if (!y2) return null;
        return n.jsxs("div", {
          className: "settings-panel flex flex-col h-full w-full overflow-hidden rounded-r-[20px]",
          children: [n.jsx("div", {
            "data-tauri-drag-region": true,
            className: "pt-5 pb-0 shrink-0 bg-transparent select-none px-page rounded-tr-[20px]",
            children: n.jsx("div", {
              className: "flex min-w-0 items-start gap-3 border-b border-border/30",
              children: n.jsx("div", {
                ref: h2,
                className: ke("min-w-0 flex-1 overflow-x-auto no-scrollbar", "[&[data-more-after]]:[mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]", "[&[data-more-before]]:[mask-image:linear-gradient(to_right,transparent,black_24px)]", "[&[data-more-before][data-more-after]]:[mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]"),
                children: n.jsx("div", {
                  className: "flex w-max min-w-full justify-between gap-6",
                  children: j2.map(e4 => {
                    const t2 = i2 === e4.id;
                    return n.jsx(Se, {
                      type: "button",
                      variant: "quiet",
                      stretch: true,
                      "aria-current": t2 ? "page" : void 0,
                      onClick: () => r2(e4.id),
                      className: ke("shrink-0 h-auto rounded-none px-0 pt-0 pb-3.5 text-headline leading-none bg-transparent select-none font-medium", t2 ? "text-foreground font-semibold" : "text-muted-foreground/70 hover:text-foreground"),
                      children: n.jsxs("span", {
                        className: "relative",
                        children: [e4.label, t2 && n.jsx(o.div, {
                          layoutId: "settings-top-underline-indicator",
                          className: "absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-foreground rounded-full z-10",
                          transition: Hr
                        })]
                      })
                    }, e4.id);
                  })
                })
              })
            })
          }), n.jsx(ne, {
            smooth: true,
            ref: g2,
            className: "flex-1 min-h-0 rounded-br-[20px]",
            children: n.jsx("div", {
              className: "px-page pt-5 pb-12 w-full",
              children: n.jsx(o.div, {
                initial: Yr,
                animate: Qr,
                transition: Jr,
                children: k2()
              }, i2)
            })
          })]
        });
      }, [y2, i2, j2, r2]);
    return n.jsx(ie, {
      isOpen: u2,
      onClose: x2,
      side: "left",
      width: "min(600px, 46vw)",
      gap: 24,
      drawerClassName: "rounded-r-[20px] overflow-hidden border-r border-border/30 shadow-none",
      drawer: N2,
      children: e3
    });
  }, (e3, t2) => e3.children === t2.children);
export default Xr;
