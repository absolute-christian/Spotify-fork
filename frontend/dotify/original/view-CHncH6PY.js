// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { c as e, r as t, j as a, e as s, A as n, m as r } from "./vendor-ui-BwX-1h7U.js";
import { L as l } from "./loading-vDvH3hqW.js";
import { z as i, k as o, cp as c, H as u, cq as d, L as h, I as m, b8 as f, B as g, gd as v, G as p, bW as x, a2 as b, b as j, n as k, gj as w, x as y, l as S, w as C, gk as T, J as A, p as N, fC as P, ge as $ } from "./globals-Bc3qFUyf.js";
import { o as _, a7 as B, bI as E, ap as I, al as R, bG as M, bK as L, bL as W, s as U, a4 as q, Y as F, T as O, Z as Q, A as G, a3 as z, n as V, M as D } from "./main-DVjTVWDM.js";
import { A as H } from "./seek-KEpYCFv_.js";
function J(s2) {
  var n2, r2, l2, c2, u2, d2, h2, m2, f2;
  const g2 = e.c(21),
    {
      artist: v2
    } = s2,
    {
      t: p2
    } = i(),
    [x2, b2] = t.useState(false);
  let j2;
  g2[0] !== v2.description ? (j2 = null == (n2 = v2.description) ? void 0 : n2.trim(), g2[0] = v2.description, g2[1] = j2) : j2 = g2[1];
  const k2 = j2;
  if (!k2) return null;
  let w2;
  g2[2] !== (null == (r2 = v2.details) ? void 0 : r2.genres) || g2[3] !== (null == (l2 = v2.details) ? void 0 : l2.tags) ? (w2 = [...(null != (u2 = null == (c2 = v2.details) ? void 0 : c2.genres) ? u2 : []), ...(null != (h2 = null == (d2 = v2.details) ? void 0 : d2.tags) ? h2 : [])].filter(X), g2[2] = null == (m2 = v2.details) ? void 0 : m2.genres, g2[3] = null == (f2 = v2.details) ? void 0 : f2.tags, g2[4] = w2) : w2 = g2[4];
  const y2 = w2;
  let S2, C2;
  g2[5] !== p2 ? (S2 = p2("artist.about"), g2[5] = p2, g2[6] = S2) : S2 = g2[6], g2[7] === Symbol.for("react.memo_cache_sentinel") ? (C2 = () => b2(K), g2[7] = C2) : C2 = g2[7];
  const T2 = !x2 && "line-clamp-3";
  let A2, N2, P2, $2, B2;
  return g2[8] !== T2 ? (A2 = o("cursor-pointer whitespace-pre-wrap text-body leading-relaxed text-foreground/70 transition-colors hover:text-foreground/85", T2), g2[8] = T2, g2[9] = A2) : A2 = g2[9], g2[10] !== k2 || g2[11] !== A2 ? (N2 = a.jsx("p", {
    onClick: C2,
    className: A2,
    children: k2
  }), g2[10] = k2, g2[11] = A2, g2[12] = N2) : N2 = g2[12], g2[13] !== y2 ? (P2 = y2.length > 0 && a.jsx("div", {
    className: "mt-2 text-footnote text-foreground/40 select-none",
    children: y2.join(", ")
  }), g2[13] = y2, g2[14] = P2) : P2 = g2[14], g2[15] !== N2 || g2[16] !== P2 ? ($2 = a.jsxs("div", {
    className: "min-w-0 max-w-2xl",
    children: [N2, P2]
  }), g2[15] = N2, g2[16] = P2, g2[17] = $2) : $2 = g2[17], g2[18] !== S2 || g2[19] !== $2 ? (B2 = a.jsx(_, {
    title: S2,
    children: $2
  }), g2[18] = S2, g2[19] = $2, g2[20] = B2) : B2 = g2[20], B2;
}
function K(e2) {
  return !e2;
}
function X(e2, t2, a2) {
  return e2 && a2.indexOf(e2) === t2;
}
function Y(t2) {
  const s2 = e.c(107),
    {
      artist: n2,
      formatCount: r2,
      isSubscribed: l2,
      isSubscriptionPending: v2,
      isUnfavorited: p2,
      isSharePending: x2,
      isGeneratingWave: b2,
      canStartWave: j2,
      onPlay: k2,
      onShuffle: w2,
      onAddToQueue: y2,
      canAddToQueue: S2,
      onToggleSubscription: C2,
      onToggleUnfavorite: T2,
      onShare: A2,
      onStartWave: N2,
      queueId: P2
    } = t2,
    {
      t: $2
    } = i();
  let _2;
  s2[0] !== n2.avatar ? (_2 = n2.avatar && !u(n2.avatar) ? c(n2.avatar, d(n2.avatar), "xl") : null, s2[0] = n2.avatar, s2[1] = _2) : _2 = s2[1];
  const L2 = _2;
  let W2, U2, q2;
  s2[2] !== n2.stats.listeners || s2[3] !== r2 || s2[4] !== $2 ? (W2 = n2.stats.listeners ? `${r2(n2.stats.listeners)} ${$2("artist.stats.listeners")}` : null, s2[2] = n2.stats.listeners, s2[3] = r2, s2[4] = $2, s2[5] = W2) : W2 = s2[5], s2[6] !== n2.stats.followers || s2[7] !== r2 || s2[8] !== $2 ? (U2 = n2.stats.followers ? `${r2(n2.stats.followers)} ${$2("search.results.followers")}` : null, s2[6] = n2.stats.followers, s2[7] = r2, s2[8] = $2, s2[9] = U2) : U2 = s2[9], s2[10] !== W2 || s2[11] !== U2 ? (q2 = [W2, U2].filter(Boolean), s2[10] = W2, s2[11] = U2, s2[12] = q2) : q2 = s2[12];
  const F2 = q2,
    O2 = null != L2 ? L2 : void 0;
  let Q2, G2, z2, V2, D2, J2, K2, X2, Y2, Z2;
  s2[13] !== n2.name || s2[14] !== O2 ? (Q2 = a.jsx(H, {
    src: O2,
    name: n2.name,
    size: 200,
    className: "h-full w-full"
  }), s2[13] = n2.name, s2[14] = O2, s2[15] = Q2) : Q2 = s2[15], s2[16] !== n2.name || s2[17] !== P2 ? (G2 = {
    id: P2,
    name: n2.name,
    type: "artist"
  }, s2[16] = n2.name, s2[17] = P2, s2[18] = G2) : G2 = s2[18], s2[19] !== k2 || s2[20] !== G2 ? (z2 = a.jsx(R, {
    onClick: k2,
    queue: G2
  }), s2[19] = k2, s2[20] = G2, s2[21] = z2) : z2 = s2[21], s2[22] !== l2 || s2[23] !== $2 ? (V2 = $2(l2 ? "artist.unsubscribe" : "artist.subscribe"), s2[22] = l2, s2[23] = $2, s2[24] = V2) : V2 = s2[24], s2[25] !== l2 || s2[26] !== v2 ? (D2 = v2 ? a.jsx(h, {
    className: "h-4 w-4 animate-spin"
  }) : a.jsx(m.like, {
    weight: l2 ? "Bold" : "Linear",
    className: o("h-4 w-4", l2 && "text-primary")
  }), s2[25] = l2, s2[26] = v2, s2[27] = D2) : D2 = s2[27], s2[28] !== l2 || s2[29] !== $2 ? (J2 = $2(l2 ? "artist.subscribed" : "artist.subscribe"), s2[28] = l2, s2[29] = $2, s2[30] = J2) : J2 = s2[30], s2[31] !== l2 || s2[32] !== v2 || s2[33] !== C2 || s2[34] !== D2 || s2[35] !== J2 || s2[36] !== V2 ? (K2 = a.jsx(g, {
    variant: "outline",
    size: "cta",
    shape: "pill",
    onClick: C2,
    disabled: v2,
    "aria-pressed": l2,
    "aria-label": V2,
    leadingIcon: D2,
    children: J2
  }), s2[31] = l2, s2[32] = v2, s2[33] = C2, s2[34] = D2, s2[35] = J2, s2[36] = V2, s2[37] = K2) : K2 = s2[37], s2[38] !== $2 ? (X2 = $2("artist.shuffle"), s2[38] = $2, s2[39] = X2) : X2 = s2[39], s2[40] === Symbol.for("react.memo_cache_sentinel") ? (Y2 = a.jsx(m.shuffle, {
    className: "h-4 w-4"
  }), s2[40] = Y2) : Y2 = s2[40], s2[41] !== w2 || s2[42] !== X2 ? (Z2 = a.jsx(B.Button, {
    onClick: w2,
    "aria-label": X2,
    children: Y2
  }), s2[41] = w2, s2[42] = X2, s2[43] = Z2) : Z2 = s2[43];
  const ee2 = !S2;
  let te2, ae, se;
  s2[44] !== $2 ? (te2 = $2("library.actions.queue"), s2[44] = $2, s2[45] = te2) : te2 = s2[45], s2[46] === Symbol.for("react.memo_cache_sentinel") ? (ae = a.jsx(m.addToQueue, {
    className: "h-4 w-4"
  }), s2[46] = ae) : ae = s2[46], s2[47] !== y2 || s2[48] !== ee2 || s2[49] !== te2 ? (se = a.jsx(B.Button, {
    onClick: y2,
    disabled: ee2,
    "aria-label": te2,
    children: ae
  }), s2[47] = y2, s2[48] = ee2, s2[49] = te2, s2[50] = se) : se = s2[50];
  const ne = !j2 || b2;
  let re, le, ie, oe, ce;
  s2[51] !== $2 ? (re = $2("artist.wave"), s2[51] = $2, s2[52] = re) : re = s2[52], s2[53] !== b2 ? (le = b2 ? a.jsx(h, {
    className: "h-4 w-4 animate-spin"
  }) : a.jsx(m.wave, {
    className: "h-4 w-4"
  }), s2[53] = b2, s2[54] = le) : le = s2[54], s2[55] !== N2 || s2[56] !== ne || s2[57] !== re || s2[58] !== le ? (ie = a.jsx(B.Button, {
    onClick: N2,
    disabled: ne,
    "aria-label": re,
    children: le
  }), s2[55] = N2, s2[56] = ne, s2[57] = re, s2[58] = le, s2[59] = ie) : ie = s2[59], s2[60] !== Z2 || s2[61] !== se || s2[62] !== ie ? (oe = a.jsxs(B, {
    children: [Z2, se, ie]
  }), s2[60] = Z2, s2[61] = se, s2[62] = ie, s2[63] = oe) : oe = s2[63], s2[64] !== $2 ? (ce = $2("common.dislike"), s2[64] = $2, s2[65] = ce) : ce = s2[65];
  const ue = p2 ? "Bold" : "Linear";
  let de, he, me, fe, ge, ve, pe, xe, be, je, ke, we;
  return s2[66] !== ue ? (de = a.jsx(m.dislike, {
    weight: ue,
    className: "h-4 w-4"
  }), s2[66] = ue, s2[67] = de) : de = s2[67], s2[68] !== p2 || s2[69] !== T2 || s2[70] !== ce || s2[71] !== de ? (he = a.jsx(B.Button, {
    onClick: T2,
    active: p2,
    "aria-label": ce,
    children: de
  }), s2[68] = p2, s2[69] = T2, s2[70] = ce, s2[71] = de, s2[72] = he) : he = s2[72], s2[73] !== $2 ? (me = $2("common.share"), s2[73] = $2, s2[74] = me) : me = s2[74], s2[75] !== x2 ? (fe = x2 ? a.jsx(h, {
    className: "h-4 w-4 animate-spin"
  }) : a.jsx(m.share, {
    className: "h-4 w-4"
  }), s2[75] = x2, s2[76] = fe) : fe = s2[76], s2[77] !== x2 || s2[78] !== A2 || s2[79] !== me || s2[80] !== fe ? (ge = a.jsx(B.Button, {
    onClick: A2,
    disabled: x2,
    "aria-label": me,
    children: fe
  }), s2[77] = x2, s2[78] = A2, s2[79] = me, s2[80] = fe, s2[81] = ge) : ge = s2[81], s2[82] !== he || s2[83] !== ge ? (ve = a.jsxs(B, {
    children: [he, ge]
  }), s2[82] = he, s2[83] = ge, s2[84] = ve) : ve = s2[84], s2[85] !== K2 || s2[86] !== oe || s2[87] !== ve || s2[88] !== z2 ? (pe = a.jsxs(a.Fragment, {
    children: [z2, K2, oe, ve]
  }), s2[85] = K2, s2[86] = oe, s2[87] = ve, s2[88] = z2, s2[89] = pe) : pe = s2[89], s2[90] !== n2.name ? (xe = a.jsx("span", {
    className: E,
    children: n2.name
  }), s2[90] = n2.name, s2[91] = xe) : xe = s2[91], s2[92] !== n2.verified || s2[93] !== $2 ? (be = n2.verified && a.jsx(f, {
    weight: "Bold",
    className: "h-7 w-7 shrink-0 text-primary",
    "aria-label": $2("common.verified")
  }), s2[92] = n2.verified, s2[93] = $2, s2[94] = be) : be = s2[94], s2[95] !== xe || s2[96] !== be ? (je = a.jsxs("h1", {
    className: "flex min-w-0 items-center gap-3",
    children: [xe, be]
  }), s2[95] = xe, s2[96] = be, s2[97] = je) : je = s2[97], s2[98] !== F2 || s2[99] !== $2 ? (ke = F2.length > 0 && a.jsx(I, {
    children: F2.join(` ${$2("artist.stats.and")} `)
  }), s2[98] = F2, s2[99] = $2, s2[100] = ke) : ke = s2[100], s2[101] !== L2 || s2[102] !== pe || s2[103] !== je || s2[104] !== ke || s2[105] !== Q2 ? (we = a.jsxs(M, {
    banner: L2,
    cover: Q2,
    round: true,
    actions: pe,
    children: [je, ke]
  }), s2[101] = L2, s2[102] = pe, s2[103] = je, s2[104] = ke, s2[105] = Q2, s2[106] = we) : we = s2[106], we;
}
function Z() {
  const t2 = e.c(1);
  let s2;
  return t2[0] === Symbol.for("react.memo_cache_sentinel") ? (s2 = a.jsxs("div", {
    className: "flex h-16 items-center px-3",
    "aria-hidden": true,
    children: [a.jsx("div", {
      className: "mr-3 flex w-5 shrink-0 justify-center",
      children: a.jsx(V, {
        className: "h-3 w-3 rounded"
      })
    }), a.jsx(D, {
      size: "md",
      flush: true,
      dense: true,
      className: "min-w-0 flex-1"
    })]
  }), t2[0] = s2) : s2 = t2[0], s2;
}
function ee(o2) {
  var c2, u2, d2;
  const h2 = e.c(66),
    {
      isOpen: f2,
      onClose: B2,
      artistId: E2,
      source: I2,
      inline: R2,
      onBack: M2
    } = o2,
    V2 = void 0 !== R2 && R2,
    {
      t: D2,
      currentLanguage: H2
    } = i();
  let K2;
  h2[0] !== E2 || h2[1] !== f2 || h2[2] !== M2 || h2[3] !== B2 || h2[4] !== I2 ? (K2 = {
    artistId: E2,
    source: I2,
    isOpen: f2,
    onClose: B2,
    onBack: M2
  }, h2[0] = E2, h2[1] = f2, h2[2] = M2, h2[3] = B2, h2[4] = I2, h2[5] = K2) : K2 = h2[5];
  const {
      artist: X2,
      isLoading: Z2,
      isSharePending: ee2,
      isSubscriptionPending: ae,
      isSubscribed: se,
      isArtistUnfavorited: ne,
      contentScrollRef: re,
      handleToggleArtistUnfavorite: le,
      handleSubscriptionToggle: ie,
      handleShareArtist: oe,
      handlePlayAll: ce,
      handleShuffle: ue,
      handleAddToQueue: de,
      handleStartArtistWave: he,
      handleArtistTrackPlay: me,
      handleRelatedArtistClick: fe,
      popularTracks: ge,
      shownTracks: ve,
      isExpanded: pe,
      canExpand: xe,
      toggleExpanded: be,
      isLoadingTracks: je,
      hasMoreTracks: ke,
      setTracksSentinel: we,
      featuredTracks: ye,
      repostTracks: Se,
      formatFollowers: Ce
    } = function ({
      artistId: e2,
      source: a2,
      isOpen: s2,
      onClose: n2,
      onBack: r2
    }) {
      const {
          t: l2
        } = i(),
        o3 = v(),
        c3 = t.useRef(null != r2 ? r2 : o3);
      c3.current = null != r2 ? r2 : o3;
      const [u3, d3] = t.useState(null),
        [h3, m2] = t.useState(false),
        [f3, g2] = t.useTransition(),
        [P2, $2] = t.useTransition(),
        [_2, B3] = t.useState(false),
        [E3, I3] = t.useState([]),
        [R3, M3] = t.useState(true),
        [q2, F2] = t.useState(false),
        [O2, Q2] = t.useState(false),
        G2 = t.useRef(""),
        z2 = t.useRef(0),
        V3 = t.useRef(null),
        D3 = t.useRef(new Set()),
        H3 = t.useRef(null),
        J2 = t.useRef(null),
        K3 = t.useRef(null),
        X3 = t.useRef(u3);
      X3.current = u3;
      const {
          isSubscribed: Y2,
          toggleSubscription: Z3
        } = p(e2, a2),
        ee3 = x(e2),
        te2 = b(e3 => e3.toggleUnfavorite),
        ae2 = j(e3 => e3.playPlaylist),
        se2 = k(e3 => e3.openArtistModal),
        ne2 = t.useCallback(t2 => {
          if (null == t2 || t2.stopPropagation(), !u3) return;
          const s3 = {
            id: e2,
            title: u3.name,
            artist: u3.name,
            duration: 0,
            cover_art: u3.avatar || "",
            source: a2,
            liked: false,
            url: "",
            type: "audio"
          };
          te2(e2, s3, "artist");
        }, [u3, e2, a2, te2]),
        re2 = t.useCallback(e3 => ({
          ...e3,
          liked: e3.liked
        }), []),
        le2 = t.useCallback((e3, t2) => {
          if (!u3 || 0 === e3.length) return;
          const s3 = e3.map(re2);
          ae2({
            id: L(a2, u3.id),
            title: u3.name,
            cover_art: u3.avatar,
            source: a2,
            tracks: s3
          }, {
            ...t2,
            recordHistory: false,
            type: "artist"
          });
        }, [u3, ae2, re2, a2]),
        ie2 = t.useMemo(() => w(() => {
          try {
            const e3 = y.getState().favorites;
            d3(t2 => {
              if (!t2) return null;
              const a3 = W(t2.popular, e3),
                s3 = W(t2.feats, e3),
                n3 = W(t2.reposts, e3);
              return a3 === t2.popular && s3 === t2.feats && n3 === t2.reposts ? t2 : {
                ...t2,
                popular: a3,
                feats: s3,
                reposts: n3
              };
            }), I3(t2 => W(t2, e3));
          } catch (e3) {
            S.warn("library", "Failed to refresh artist favorite state:", e3);
          }
        }, 500), []),
        oe2 = t.useCallback(async t2 => {
          m2(true);
          try {
            const s3 = await C.media.getArtistInfo(e2, a2);
            if (G2.current !== t2) return;
            if ((e3 => {
              var t3, a3, s4, n3, r3, l3;
              return !e3 || !((null == (t3 = e3.popular) ? void 0 : t3.length) || (null == (a3 = e3.feats) ? void 0 : a3.length) || (null == (s4 = e3.reposts) ? void 0 : s4.length) || (null == (n3 = e3.albums) ? void 0 : n3.length) || (null == (r3 = e3.new) ? void 0 : r3.length) || (null == (l3 = e3.related) ? void 0 : l3.length));
            })(s3)) return S.warn("library", "Artist has nothing to show, closing:", {
              artistId: e2,
              source: a2
            }), void requestAnimationFrame(() => c3.current());
            d3(s3), setTimeout(ie2, 100);
          } catch (s3) {
            if (G2.current !== t2) return;
            S.error("library", "Error fetching artist:", s3), requestAnimationFrame(() => c3.current());
          } finally {
            G2.current === t2 && m2(false);
          }
        }, [e2, a2, ie2]),
        ce2 = t.useCallback(async () => {
          var t2, s3;
          if (!G2.current || V3.current) return;
          const n3 = {};
          V3.current = n3;
          const r3 = z2.current;
          0 === r3 && (D3.current = new Set((null != (s3 = null == (t2 = X3.current) ? void 0 : t2.popular) ? s3 : []).map(e3 => e3.id))), F2(true);
          try {
            const t3 = await C.media.getArtistTracks(e2, a2, 20, r3);
            if (V3.current !== n3) return;
            const s4 = t3.tracks.filter(e3 => !D3.current.has(e3.id));
            s4.forEach(e3 => D3.current.add(e3.id)), z2.current = r3 + 20, s4.length && I3(e3 => [...e3, ...s4]), M3(s4.length > 0 && (t3.total > 0 ? z2.current < t3.total : t3.tracks.length > 0)), setTimeout(ie2, 100);
          } catch (l3) {
            if (V3.current !== n3) return;
            S.error("library", "Error fetching artist tracks:", l3), M3(false);
          } finally {
            V3.current === n3 && (V3.current = null, F2(false));
          }
        }, [e2, a2, ie2]);
      T(ie2), t.useEffect(() => {
        const t2 = s2 && e2 && a2 ? `${e2}-${a2}` : "";
        t2 && G2.current === t2 || (G2.current = t2, d3(null), B3(false), I3([]), M3(true), F2(false), z2.current = 0, V3.current = null, D3.current = new Set(), t2 && oe2(t2));
      }, [s2, e2, a2, oe2]);
      const ue2 = t.useCallback(e3 => {
        var t2;
        if (null == (t2 = H3.current) || t2.disconnect(), H3.current = null, J2.current = e3, !e3) return void Q2(false);
        const a3 = new IntersectionObserver(e4 => {
          var t3;
          return Q2(Boolean(null == (t3 = e4[e4.length - 1]) ? void 0 : t3.isIntersecting));
        }, {
          root: K3.current,
          rootMargin: "0px 0px 400px 0px"
        });
        a3.observe(e3), H3.current = a3;
      }, []);
      t.useEffect(() => () => {
        var e3;
        return null == (e3 = H3.current) ? void 0 : e3.disconnect();
      }, []), t.useEffect(() => {
        if (!_2 || !O2 || !R3 || q2) return;
        const e3 = J2.current,
          t2 = K3.current;
        !e3 || !t2 || e3.getBoundingClientRect().top > t2.getBoundingClientRect().bottom + 400 || ce2();
      }, [_2, O2, R3, q2, ce2]);
      const de2 = t.useMemo(() => {
          var e3;
          return null != (e3 = null == u3 ? void 0 : u3.popular) ? e3 : [];
        }, [u3]),
        he2 = t.useMemo(() => _2 ? [...de2, ...E3] : de2, [_2, de2, E3]),
        me2 = t.useRef(he2);
      me2.current = he2;
      const fe2 = null == u3 ? void 0 : u3.counts.tracks,
        ge2 = de2.length > 0 && (null == fe2 || fe2 > de2.length),
        ve2 = t.useCallback(() => B3(e3 => !e3), []),
        pe2 = t.useCallback(() => {
          le2(he2, {
            startIndex: 0
          });
        }, [he2, le2]),
        xe2 = t.useCallback(() => {
          le2(he2, {
            shuffle: true
          });
        }, [he2, le2]),
        be2 = t.useCallback(() => {
          var e3;
          u3 && 0 !== he2.length && j.getState().addMultipleToQueue(he2, {
            groupId: String(u3.id),
            groupName: u3.name,
            groupCover: null != (e3 = u3.avatar) ? e3 : void 0
          });
        }, [u3, he2]),
        je2 = t.useCallback(async () => {
          var e3;
          if (u3 && !j.getState().isGeneratingWave && 0 !== de2.length) {
            j.getState().setIsGeneratingWave(true);
            try {
              const t2 = (null == (e3 = de2[0]) ? void 0 : e3.source) || a2;
              if (!t2) return;
              const s3 = [...de2];
              for (let e4 = s3.length - 1; e4 > 0; e4--) {
                const t3 = Math.floor(Math.random() * (e4 + 1));
                [s3[e4], s3[t3]] = [s3[t3], s3[e4]];
              }
              const n3 = s3.slice(0, 10).filter(e4 => e4.title && e4.artist).map(e4 => {
                  var a3;
                  return {
                    id: e4.id,
                    title: e4.title,
                    artist: e4.artist,
                    source: null != (a3 = e4.source) ? a3 : t2
                  };
                }),
                r3 = await C.media.generateWave(t2, null, void 0, void 0, void 0, [], n3, "playlist");
              if (r3.length > 0) {
                const e4 = j.getState();
                e4.setCurrentSong(null), e4.setIsPlaying(false), await e4.playContext(r3[0], r3, l2("home.wave.my_wave"), u3.avatar || null, "wave_artist", u3.name);
              }
            } catch (t2) {
              S.error("player", "Error generating artist wave:", t2);
            } finally {
              j.getState().setIsGeneratingWave(false);
            }
          }
        }, [u3, de2, a2, l2]),
        ke2 = t.useCallback((e3, t2 = "popular") => {
          var a3, s3;
          const n3 = X3.current,
            r3 = "feats" === t2 ? null != (a3 = null == n3 ? void 0 : n3.feats) ? a3 : [] : "reposts" === t2 ? (null != (s3 = null == n3 ? void 0 : n3.reposts) ? s3 : []).slice(0, 5) : me2.current,
            l3 = r3.findIndex(t3 => String(t3.id) === String(e3.id));
          le2(r3, {
            startIndex: l3 >= 0 ? l3 : 0
          });
        }, [le2]),
        we2 = t.useCallback(e3 => {
          null == e3 || e3.stopPropagation(), u3 && $2(async () => {
            try {
              await Z3(u3);
            } catch (e4) {
              S.warn("library", "Failed to update artist subscription:", e4);
            }
          });
        }, [u3, Z3]),
        ye2 = t.useCallback(() => c3.current(), []);
      t.useEffect(() => {
        const e3 = e4 => {
          if ("Escape" === e4.key) {
            const t2 = document.activeElement;
            if (t2 && ("INPUT" === t2.tagName || "TEXTAREA" === t2.tagName)) return;
            const a3 = N.getState().isSettingsDialogOpen,
              s3 = null !== document.querySelector('[role="dialog"], [aria-modal="true"]');
            if (a3 || s3) return;
            const n3 = K3.current;
            n3 && null !== n3.offsetParent && (e4.preventDefault(), ye2());
          }
        };
        return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
      }, [ye2]);
      const Se2 = t.useCallback(() => {
          u3 && !f3 && g2(async () => {
            try {
              await U.shareArtist(u3, {
                title: u3.name || l2("common.share")
              });
            } catch (e3) {
              S.error("library", "[ArtistView] Failed to share artist:", e3);
            }
          });
        }, [u3, f3, l2]),
        Ce2 = t.useCallback((e3, t2) => {
          se2(e3, t2);
        }, [se2]),
        Te2 = t.useMemo(() => {
          var e3;
          return null != (e3 = null == u3 ? void 0 : u3.feats) ? e3 : [];
        }, [u3]),
        Ae2 = t.useMemo(() => {
          var e3;
          return (null != (e3 = null == u3 ? void 0 : u3.reposts) ? e3 : []).slice(0, 5);
        }, [u3]);
      return {
        artist: u3,
        isLoading: h3,
        isSharePending: f3,
        isSubscriptionPending: P2,
        isSubscribed: Y2,
        isArtistUnfavorited: ee3,
        contentScrollRef: K3,
        handleToggleArtistUnfavorite: ne2,
        handleSubscriptionToggle: we2,
        handleShareArtist: Se2,
        handlePlayAll: pe2,
        handleShuffle: xe2,
        handleAddToQueue: be2,
        handleStartArtistWave: je2,
        handleArtistTrackPlay: ke2,
        handleRelatedArtistClick: Ce2,
        popularTracks: de2,
        shownTracks: he2,
        isExpanded: _2,
        canExpand: ge2,
        toggleExpanded: ve2,
        isLoadingTracks: q2,
        hasMoreTracks: R3,
        setTracksSentinel: ue2,
        featuredTracks: Te2,
        repostTracks: Ae2,
        formatFollowers: A
      };
    }(K2),
    Te = P(),
    Ae = s();
  let Ne;
  h2[6] !== H2 ? (Ne = e2 => $(e2, H2) || null, h2[6] = H2, h2[7] = Ne) : Ne = h2[7];
  const Pe = Ne;
  let $e;
  h2[8] !== I2 ? ($e = e2 => {
    S.info(`[ArtistView] album opened: ${e2.id} source=${e2.source || I2}`), N.getState().openPlaylistView({
      ...e2,
      source: e2.source || I2
    }, true);
  }, h2[8] = I2, h2[9] = $e) : $e = h2[9];
  const _e = $e;
  let Be;
  h2[10] !== me ? (Be = e2 => me(e2, "popular"), h2[10] = me, h2[11] = Be) : Be = h2[11];
  const Ee = Be;
  let Ie;
  h2[12] !== me ? (Ie = e2 => me(e2, "reposts"), h2[12] = me, h2[13] = Ie) : Ie = h2[13];
  const Re = Ie;
  let Me;
  h2[14] !== me ? (Me = e2 => me(e2, "feats"), h2[14] = me, h2[15] = Me) : Me = h2[15];
  const Le = Me;
  if (!f2 && !V2) return null;
  let We;
  h2[16] !== (null == X2 ? void 0 : X2.new) ? (We = null != (c2 = null == X2 ? void 0 : X2.new) ? c2 : [], h2[16] = null == X2 ? void 0 : X2.new, h2[17] = We) : We = h2[17];
  const Ue = We,
    qe = ge.length > 0;
  let Fe;
  h2[18] !== (null == X2 ? void 0 : X2.name) || h2[19] !== Pe || h2[20] !== _e || h2[21] !== I2 ? (Fe = e2 => a.jsx(Q, {
    children: e2.map((e3, t2) => {
      var s2;
      return a.jsx(F, {
        album: {
          id: e3.id,
          title: e3.title,
          artist: null != (s2 = null == X2 ? void 0 : X2.name) ? s2 : "",
          cover_art: e3.cover_art,
          source: e3.source || I2
        },
        subtitle: Pe(e3.release_date) || void 0,
        onClick: () => _e(e3)
      }, `${e3.id}-${t2}`);
    })
  }), h2[18] = null == X2 ? void 0 : X2.name, h2[19] = Pe, h2[20] = _e, h2[21] = I2, h2[22] = Fe) : Fe = h2[22];
  const Oe = Fe;
  let Qe, Ge;
  return h2[23] !== Oe || h2[24] !== X2 || h2[25] !== xe || h2[26] !== ye || h2[27] !== Pe || h2[28] !== Ce || h2[29] !== de || h2[30] !== ce || h2[31] !== fe || h2[32] !== oe || h2[33] !== ue || h2[34] !== he || h2[35] !== ie || h2[36] !== le || h2[37] !== ke || h2[38] !== qe || h2[39] !== V2 || h2[40] !== ne || h2[41] !== pe || h2[42] !== Te || h2[43] !== Z2 || h2[44] !== je || h2[45] !== f2 || h2[46] !== ee2 || h2[47] !== se || h2[48] !== ae || h2[49] !== Ue || h2[50] !== _e || h2[51] !== Le || h2[52] !== Ee || h2[53] !== Re || h2[54] !== ge || h2[55] !== Ae || h2[56] !== Se || h2[57] !== we || h2[58] !== ve || h2[59] !== I2 || h2[60] !== D2 || h2[61] !== be ? (Qe = Z2 || !X2 && (f2 || V2) ? a.jsx("div", {
    className: "flex-1 w-full h-full min-h-[400px] flex items-center justify-center",
    children: a.jsx(l, {
      className: "relative inset-auto"
    })
  }) : X2 ? a.jsxs("div", {
    className: "animate-in fade-in duration-300 w-full flex flex-col min-w-0",
    children: [a.jsx(Y, {
      queueId: L(I2, X2.id),
      artist: X2,
      formatCount: Ce,
      isSubscribed: se,
      isSubscriptionPending: ae,
      isUnfavorited: ne,
      isSharePending: ee2,
      isGeneratingWave: Te,
      canStartWave: qe,
      onPlay: ce,
      onShuffle: ue,
      onAddToQueue: de,
      canAddToQueue: ge.length > 0,
      onToggleSubscription: ie,
      onToggleUnfavorite: le,
      onShare: oe,
      onStartWave: he
    }), a.jsxs(q, {
      top: "none",
      children: [a.jsx(J, {
        artist: X2
      }), 1 === Ue.length && a.jsx(_, {
        title: D2("artist.tabs.new"),
        children: a.jsx(F, {
          variant: "featured",
          album: {
            id: Ue[0].id,
            title: Ue[0].title,
            artist: X2.name,
            cover_art: Ue[0].cover_art,
            source: Ue[0].source || I2
          },
          kicker: Pe(Ue[0].release_date) || void 0,
          subtitle: D2("common.tabs.album"),
          onClick: () => _e(Ue[0])
        })
      }), Ue.length > 1 && a.jsx(_, {
        title: D2("artist.tabs.new"),
        children: Oe(Ue)
      }), qe && a.jsx(_, {
        title: a.jsx(r.span, {
          initial: !Ae && {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          transition: {
            duration: Ae ? 0 : 0.2,
            ease: "easeOut"
          },
          className: "inline-block",
          children: D2(pe ? "artist.tabs.tracks" : "artist.tabs.popular")
        }, pe ? "tracks" : "popular"),
        trailing: xe ? a.jsx(g, {
          variant: "quiet",
          size: "compact",
          "aria-expanded": pe,
          onClick: be,
          children: D2(pe ? "common.show_less" : "common.show_all")
        }) : void 0,
        children: a.jsxs("div", {
          className: "-mx-2.5 flex flex-col",
          children: [ge.map((e2, t2) => {
            var s2;
            return a.jsx(O, {
              song: e2,
              index: t2,
              showRank: true,
              variant: "artist",
              surface: "borderless",
              showMoreButton: true,
              onPlaySong: Ee,
              playCount: null == (s2 = e2.stats) ? void 0 : s2.plays
            }, `${e2.id}-${t2}`);
          }), a.jsx(n, {
            initial: false,
            children: pe && a.jsxs(r.div, {
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
                duration: Ae ? 0 : 0.2,
                ease: "easeOut"
              },
              children: [ve.slice(ge.length).map((e2, t2) => {
                var s2;
                return a.jsx(O, {
                  song: e2,
                  index: t2 + ge.length,
                  showRank: true,
                  variant: "artist",
                  surface: "borderless",
                  showMoreButton: true,
                  onPlaySong: Ee,
                  playCount: null == (s2 = e2.stats) ? void 0 : s2.plays
                }, `${e2.id}-${t2 + ge.length}`);
              }), je && Array.from({
                length: 3
              }, te), ke && a.jsx("div", {
                ref: we,
                className: "h-px shrink-0",
                "aria-hidden": true
              })]
            }, "additional-tracks")
          })]
        })
      }), Boolean(null == (u2 = X2.albums) ? void 0 : u2.length) && a.jsx(_, {
        title: D2("artist.tabs.albums"),
        children: Oe(null != (d2 = X2.albums) ? d2 : [])
      }), Se.length > 0 && a.jsx(_, {
        title: D2("artist.tabs.reposts"),
        children: a.jsx("div", {
          className: "-mx-2.5 flex flex-col",
          children: Se.map((e2, t2) => a.jsx(O, {
            song: e2,
            variant: "artist",
            hideStats: true,
            surface: "borderless",
            showMoreButton: true,
            onPlaySong: Re,
            titleAccessory: a.jsxs("span", {
              className: "inline-flex h-4 max-w-[140px] items-center gap-1 text-footnote text-foreground/40",
              children: [a.jsx(m.repost, {
                className: "size-3.5 shrink-0"
              }), a.jsx("span", {
                className: "truncate",
                children: X2.name
              })]
            })
          }, `${e2.id}-repost-${t2}`))
        })
      }), ye.length > 0 && a.jsx(_, {
        title: D2("artist.tabs.feats"),
        children: a.jsx(Q, {
          children: ye.map((e2, t2) => {
            var s2;
            return a.jsx("div", {
              className: "w-[160px] flex-shrink-0",
              children: a.jsx(O, {
                song: e2,
                variant: "large_cover",
                onPlaySong: Le,
                playCount: null == (s2 = e2.stats) ? void 0 : s2.plays
              })
            }, `${e2.id}-feat-${t2}`);
          })
        })
      }), X2.related && X2.related.length > 0 && a.jsx(_, {
        title: D2("artist.tabs.related"),
        children: a.jsx(Q, {
          children: X2.related.map((e2, t2) => a.jsx(G, {
            artist: e2,
            onClick: () => fe(e2.id, e2.source || "")
          }, `${e2.id}-${t2}`))
        })
      })]
    })]
  }) : null, h2[23] = Oe, h2[24] = X2, h2[25] = xe, h2[26] = ye, h2[27] = Pe, h2[28] = Ce, h2[29] = de, h2[30] = ce, h2[31] = fe, h2[32] = oe, h2[33] = ue, h2[34] = he, h2[35] = ie, h2[36] = le, h2[37] = ke, h2[38] = qe, h2[39] = V2, h2[40] = ne, h2[41] = pe, h2[42] = Te, h2[43] = Z2, h2[44] = je, h2[45] = f2, h2[46] = ee2, h2[47] = se, h2[48] = ae, h2[49] = Ue, h2[50] = _e, h2[51] = Le, h2[52] = Ee, h2[53] = Re, h2[54] = ge, h2[55] = Ae, h2[56] = Se, h2[57] = we, h2[58] = ve, h2[59] = I2, h2[60] = D2, h2[61] = be, h2[62] = Qe) : Qe = h2[62], h2[63] !== re || h2[64] !== Qe ? (Ge = a.jsx(z, {
    ref: re,
    className: "artist-detail-view",
    children: Qe
  }), h2[63] = re, h2[64] = Qe, h2[65] = Ge) : Ge = h2[65], Ge;
}
function te(e2, t2) {
  return a.jsx(Z, {}, t2);
}
export { ee as A };
