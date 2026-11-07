// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { Nothing as yl, artistNavigationStore as xt, useSavedAlbums as ie, libraryHubStore as Bt, Nothing as hl, queueCollection as aa, LibraryHub as Dr, Nothing as en, useLibraryBundle as Xr, useNavigationType as u, useLocation as d, useSearchParams as c } from "../runtime.jsx";
import { PlaylistShuffleButton as __fork_playlistShuffle } from "../runtime.jsx";
const __vite__mapDeps = (i2, m2 = __vite__mapDeps, d2 = m2.f || (m2.f = ["./globals-Bc3qFUyf.js", "./vendor-ui-BwX-1h7U.js", "./vendor-proto-Cqb7N4jm.js", "./vendor-icons-BAUiYk9X.js", "./vendor-hls-BfEgDoR5.js", "./globals-bA04W_Hq.css"])) => i2.map(i3 => d2[i3]);
import { r as e, c as t, j as l, A as a, m as r, b as n, R as i } from "./vendor-ui-BwX-1h7U.js";
import { b as f, a7 as m, a9 as y, ad as x, ae as b, af as k, s as S, ag as w, ah as j, I as P, ai as _, aj as C, ak as N, u as T, al as I, am as E, an as F, ao as L, ap as R, aq as D, ar as A, T as O, as as M, at as z, au as B, av as $, H as Q, a3 as H, aw as U, ax as W, ay as q, az as K, aA as G, Y as V, X, R as Y, Q as J, W as Z, aB as ee, a0 as re, aF as se, o as oe, Z as ce, E as de, A as ue, aK as ge, aL as xe } from "./main-DVjTVWDM.js";
import { z as be, I as ke, bX as Se, L as we, B as je, k as Pe, b8 as _e, v as Ce, w as Ne, l as Te, fC as Ie, c5 as Ee, fD as Fe, ac as Le, cU as Re, cc as De, c3 as Ae, cS as Oe, s as Me, am as ze, c_ as Be, fE as $e, fj as Qe, fF as He, fG as Ue, aE as We, K as qe, e_ as Ke, aY as Ge, x as Ve, fH as Xe, fI as Ye, fJ as Je, b as Ze, a2 as et, fK as tt, fL as lt, fM as at, br as rt, _ as nt, ey as it, bK as st, cb as ft, fR as kt, p as St, e1 as Lt } from "./globals-Bc3qFUyf.js";
import { C as Rt } from "./reveal-w9O7xfRv.js";
import { M as Dt } from "./progress-B9dXWW2R.js";
import { F as At } from "./friends-D1sx-wsm.js";
import { c as Ot, p as Mt, a as zt } from "./operations-gCk3_j9p.js";
import { C as $t } from "./chips-vEIc28iB.js";
import { u as Qt, a as Ht, P as Ut, d as Wt, K as qt, s as Kt, S as Gt, r as Vt, D as Xt, c as Yt } from "./vendor-dnd-DQ9sAYhI.js";
const rl = e.createContext(null),
  nl = e.createContext(null);
function il() {
  const t2 = e.useContext(rl);
  if (!t2) throw new Error("useLibraryData must be used within LibraryProvider");
  return t2;
}
function sl() {
  const t2 = e.useContext(nl);
  if (!t2) throw new Error("useLibraryActions must be used within LibraryProvider");
  return t2;
}
function ol() {
  const e2 = t.c(3),
    l2 = il(),
    a2 = sl();
  let r2;
  return e2[0] !== a2 || e2[1] !== l2 ? (r2 = {
    ...l2,
    ...a2
  }, e2[0] = a2, e2[1] = l2, e2[2] = r2) : r2 = e2[2], r2;
}
function cl(e2) {
  const a2 = t.c(32),
    {
      variant: r2,
      playlistType: n2,
      children: i2
    } = e2,
    {
      t: s2
    } = be();
  if ("no-playlist" === r2) {
    let e3, t2, r3, n3;
    return a2[0] !== s2 ? (e3 = s2("library.state.select_collection"), a2[0] = s2, a2[1] = e3) : e3 = a2[1], a2[2] !== s2 ? (t2 = s2("library.state.select_collection_subtitle"), a2[2] = s2, a2[3] = t2) : t2 = a2[3], a2[4] !== e3 || a2[5] !== t2 ? (r3 = l.jsx(f.Empty, {
      variant: "playlist",
      title: e3,
      subtitle: t2
    }), a2[4] = e3, a2[5] = t2, a2[6] = r3) : r3 = a2[6], a2[7] !== i2 || a2[8] !== r3 ? (n3 = l.jsxs("div", {
      className: "flex flex-1 flex-col items-center justify-center text-center animate-fade-in",
      children: [r3, i2]
    }), a2[7] = i2, a2[8] = r3, a2[9] = n3) : n3 = a2[9], n3;
  }
  if ("no-search" === r2) {
    let e3;
    return a2[10] === Symbol.for("react.memo_cache_sentinel") ? (e3 = l.jsx("div", {
      className: "flex flex-1 flex-col items-center justify-center text-center animate-fade-in -translate-y-8 page-md:-translate-y-12",
      children: l.jsx(f.Empty, {
        variant: "search",
        title: "",
        subtitle: ""
      })
    }), a2[10] = e3) : e3 = a2[10], e3;
  }
  if ("no-duplicates" === r2) {
    let e3, t2, r3;
    return a2[11] !== s2 ? (e3 = s2("library.state.no_duplicates"), a2[11] = s2, a2[12] = e3) : e3 = a2[12], a2[13] !== s2 ? (t2 = s2("library.state.all_tracks_unique"), a2[13] = s2, a2[14] = t2) : t2 = a2[14], a2[15] !== e3 || a2[16] !== t2 ? (r3 = l.jsx("div", {
      className: "flex flex-1 flex-col items-center justify-center text-center animate-fade-in -translate-y-8 page-md:-translate-y-12",
      children: l.jsx(f.Success, {
        title: e3,
        subtitle: t2
      })
    }), a2[15] = e3, a2[16] = t2, a2[17] = r3) : r3 = a2[17], r3;
  }
  const o2 = "favorites" === n2 ? "liked" : "offline" === n2 ? "local" : "playlist";
  let c2;
  a2[18] !== n2 || a2[19] !== s2 ? (c2 = s2("offline" === n2 ? "library.offline.empty_tracks_title" : "dislikes" === n2 ? "library.dislikes.empty_title" : "library.state.empty_playlist_title"), a2[18] = n2, a2[19] = s2, a2[20] = c2) : c2 = a2[20];
  const d2 = c2;
  let u2;
  a2[21] !== n2 || a2[22] !== s2 ? (u2 = s2("offline" === n2 ? "library.offline.empty_tracks_subtitle" : "dislikes" === n2 ? "library.dislikes.empty_subtitle" : "library.state.empty_playlist_subtitle"), a2[21] = n2, a2[22] = s2, a2[23] = u2) : u2 = a2[23];
  const m2 = u2,
    h2 = "dislikes" === n2 ? ke.dislike : void 0;
  let y2, v2;
  return a2[24] !== m2 || a2[25] !== d2 || a2[26] !== o2 || a2[27] !== h2 ? (y2 = l.jsx(f.Empty, {
    variant: o2,
    icon: h2,
    layout: "vertical",
    size: "md",
    title: d2,
    subtitle: m2
  }), a2[24] = m2, a2[25] = d2, a2[26] = o2, a2[27] = h2, a2[28] = y2) : y2 = a2[28], a2[29] !== i2 || a2[30] !== y2 ? (v2 = l.jsxs("div", {
    className: "flex flex-1 flex-col items-center justify-center text-center animate-fade-in gap-3.5 -translate-y-8 page-md:-translate-y-12",
    children: [y2, i2]
  }), a2[29] = i2, a2[30] = y2, a2[31] = v2) : v2 = a2[31], v2;
}
const vl = x,
  pl = k;
function gl(e2) {
  const a2 = t.c(35),
    {
      friendsAndCollabs: r2,
      collaboratorIds: n2,
      handleAddCollaborator: i2,
      handleRemoveCollaborator: s2,
      isAddingFriend: o2,
      isLoadingCollaborators: c2,
      collaboratorProfiles: d2,
      friendsList: u2,
      isRemovingFriend: f2,
      isPinned: m2,
      user: h2,
      setPage: y2,
      t: v2
    } = e2;
  let p2, g2, x2, k2, S2, w2, j2, P2;
  return a2[0] !== n2 || a2[1] !== r2 || a2[2] !== i2 || a2[3] !== s2 || a2[4] !== o2 || a2[5] !== v2 ? (p2 = r2.length > 0 && l.jsxs("div", {
    className: "space-y-1 mt-2",
    children: [l.jsx("p", {
      className: "text-xs font-medium text-foreground/50 px-1 pb-1",
      children: v2("profile.tabs.friends")
    }), l.jsx(At, {
      friends: r2,
      showSearch: false,
      maxListHeight: "max-h-[140px]",
      onSelect: e3 => {
        const t2 = String(e3.id);
        n2.has(t2) ? s2(t2) : i2(t2);
      },
      renderRight: e3 => {
        const t2 = String(e3.id),
          a3 = n2.has(t2);
        return l.jsx(je, {
          type: "button",
          variant: "ghost",
          size: "icon-xs",
          disabled: o2,
          "aria-label": v2(a3 ? "library.actions.collab.remove" : "common.add"),
          onClick: e4 => {
            e4.stopPropagation(), a3 ? s2(t2) : i2(t2);
          },
          className: Pe("flex rounded-none transition-colors duration-150 ease-in-out disabled:pointer-events-auto disabled:opacity-100", a3 ? "text-primary hover:text-primary/80" : "text-foreground/50 hover:text-foreground"),
          children: a3 ? l.jsx(_e, {
            className: "h-4 w-4 text-primary"
          }) : l.jsx(ke.addUser, {
            className: "h-4 w-4"
          })
        });
      }
    })]
  }), a2[0] = n2, a2[1] = r2, a2[2] = i2, a2[3] = s2, a2[4] = o2, a2[5] = v2, a2[6] = p2) : p2 = a2[6], a2[7] !== c2 ? (g2 = c2 && l.jsx("div", {
    className: "py-2 flex items-center justify-center text-foreground/50",
    children: l.jsx(we, {
      className: "h-4 w-4 animate-spin"
    })
  }), a2[7] = c2, a2[8] = g2) : g2 = a2[8], a2[9] !== d2 || a2[10] !== u2 || a2[11] !== s2 || a2[12] !== c2 || a2[13] !== m2 || a2[14] !== f2 || a2[15] !== (null == h2 ? void 0 : h2.id) ? (x2 = !c2 && d2.filter(e3 => !u2.some(t2 => String(t2.id) === String(e3.id))).length > 0 && l.jsxs(l.Fragment, {
    children: [l.jsx(vl, {}), l.jsx("div", {
      className: "space-y-1 max-h-[140px] overflow-y-auto",
      children: d2.filter(e3 => !u2.some(t2 => String(t2.id) === String(e3.id))).map(e3 => {
        const t2 = String(e3.id),
          a3 = e3.nickname || e3.username || t2,
          r3 = e3.username ? `@${e3.username}` : t2;
        return l.jsx(b, {
          variant: "list",
          user: {
            id: t2,
            nickname: e3.nickname,
            username: e3.username,
            avatar: e3.avatar
          },
          displayName: a3,
          subtitle: r3,
          rightSlot: l.jsx(je, {
            variant: "ghost",
            size: "sm",
            className: "h-7 px-2",
            disabled: f2 === t2 || t2 === (null == h2 ? void 0 : h2.id),
            onClick: () => {
              s2(t2);
            },
            children: f2 === t2 ? l.jsx(we, {
              className: "h-3.5 w-3.5 animate-spin"
            }) : l.jsxs(l.Fragment, {
              children: [m2 && l.jsx(ke.pin, {
                weight: "Bold",
                className: "h-3.5 w-3.5 shrink-0 text-primary"
              }), l.jsx(ke.close, {
                className: "h-3.5 w-3.5"
              })]
            })
          })
        }, t2);
      })
    })]
  }), a2[9] = d2, a2[10] = u2, a2[11] = s2, a2[12] = c2, a2[13] = m2, a2[14] = f2, a2[15] = null == h2 ? void 0 : h2.id, a2[16] = x2) : x2 = a2[16], a2[17] !== d2 || a2[18] !== u2 || a2[19] !== c2 || a2[20] !== v2 ? (k2 = !c2 && 0 === u2.length && 0 === d2.length && l.jsx("p", {
    className: "px-1 py-3 text-center text-xs text-foreground/45",
    children: v2("profile.friends.no.friends")
  }), a2[17] = d2, a2[18] = u2, a2[19] = c2, a2[20] = v2, a2[21] = k2) : k2 = a2[21], a2[22] !== y2 ? (S2 = () => y2("main"), a2[22] = y2, a2[23] = S2) : S2 = a2[23], a2[24] !== v2 ? (w2 = v2("common.back"), a2[24] = v2, a2[25] = w2) : w2 = a2[25], a2[26] !== S2 || a2[27] !== w2 ? (j2 = l.jsx(pl, {
    onClick: S2,
    label: w2
  }), a2[26] = S2, a2[27] = w2, a2[28] = j2) : j2 = a2[28], a2[29] !== p2 || a2[30] !== g2 || a2[31] !== x2 || a2[32] !== k2 || a2[33] !== j2 ? (P2 = l.jsxs("div", {
    className: "space-y-2",
    children: [p2, g2, x2, k2, j2]
  }), a2[29] = p2, a2[30] = g2, a2[31] = x2, a2[32] = k2, a2[33] = j2, a2[34] = P2) : P2 = a2[34], P2;
}
const xl = e2 => {
  if (!e2) return false;
  const t2 = "string" == typeof e2 ? e2 : e2.id;
  return "favorites" === t2 || "offline" === t2 || "import" === t2 || "draft" === t2 || "downloads" === t2 || "local" === t2 || "history" === t2;
};
function bl({
  selectedPlaylist: t2,
  t: l2
}) {
  const [a2, r2] = e.useState(false),
    n2 = e.useCallback(async () => {
      if (a2) return;
      if (!t2) return;
      if ("favorites" === t2.id || "offline" === t2.id || "import" === t2.id) return;
      const e2 = Boolean(t2.cloud);
      try {
        const a3 = !Boolean(t2.public);
        r2(true);
        try {
          Ce.getState().updatePlaylist(t2.id, {
            public: a3,
            updated_at: Date.now()
          }), e2 && (await Ne.library.playlists.setPublic(t2.id, a3));
        } catch (l3) {
          Te.error("library", "Failed to toggle playlist visibility:", l3);
        } finally {
          r2(false);
        }
      } catch (n3) {
        Te.error("library", "Failed to toggle playlist visibility:", n3);
      }
    }, [t2, l2, a2]);
  return {
    handleSharePlaylist: e.useCallback(async () => {
      if (t2) try {
        await S.sharePlaylist(t2, {
          title: t2.title || l2("common.share")
        });
      } catch (e2) {
        Te.error("library", "Failed to share playlist:", e2);
      }
    }, [t2, l2]),
    handleTogglePlaylistPublic: n2,
    isTogglingPublic: a2
  };
}
const kl = x;
function Sl({
  selectedPlaylist: t2,
  trackCount: a2,
  isPinned: r2,
  visibleCollaborators: n2,
  setPage: i2,
  close: s2,
  t: o2,
  menu: c2 = "context",
  quickActions: d2,
  hidden: u2
}) {
  var f2, m2, h2, v2, p2;
  const g2 = e2 => l.jsx(y, {
      ...e2,
      menu: c2
    }),
    x2 = e.useContext(rl),
    k2 = e.useContext(nl),
    S2 = Ie(),
    {
      handleSharePlaylist: w2,
      handleTogglePlaylistPublic: j2,
      isTogglingPublic: P2
    } = bl({
      selectedPlaylist: t2,
      t: o2
    }),
    [_2, C2] = e.useState(false),
    N2 = Ce(e2 => e2.playlists.find(e3 => e3.id === t2.id)),
    T2 = null != (f2 = null == N2 ? void 0 : N2.pinned) ? f2 : r2,
    I2 = null != (h2 = (null == (m2 = null == x2 ? void 0 : x2.selectedPlaylist) ? void 0 : m2.id) === t2.id ? x2.filteredPlaylistSongs : (null == N2 ? void 0 : N2.tracks.length) ? N2.tracks : t2.tracks) ? h2 : [];
  e.useEffect(() => {
    var e2, t3, l2;
    N2 && !N2.tracks.length && (null != (e2 = N2.tracks_count) ? e2 : 0) > 0 && (null == (l2 = (t3 = Ce.getState()).ensurePlaylistLoaded) || l2.call(t3, N2.id).catch(e3 => Te.error("library", "Failed to load actions tracks:", e3)));
  }, [null == N2 ? void 0 : N2.id]);
  const E2 = (null == k2 ? void 0 : k2.handleRefreshPlaylist) ? e2 => k2.handleRefreshPlaylist(e2 || t2) : () => {},
    F2 = Ot(t2.id),
    L2 = null == k2 ? void 0 : k2.onGenerateWave,
    R2 = null == k2 ? void 0 : k2.handleExportPlaylist,
    D2 = null == k2 ? void 0 : k2.onDeletePlaylist,
    A2 = xl(t2.id),
    O2 = Boolean(t2.originals && t2.originals.length > 0),
    M2 = null != (v2 = t2.public) && v2,
    z2 = null != (p2 = t2.cloud) && p2,
    B2 = z2 || !A2 && O2 && "local" !== t2.source,
    $2 = z2 && !A2,
    Q2 = z2 && !A2;
  return l.jsxs(l.Fragment, {
    children: [d2.actions.filter(e2 => "save" !== e2.id && !u2.includes(e2.id)).map(e2 => l.jsx(g2, {
      icon: "play" === e2.id ? l.jsx(ke.play, {
        weight: "Bold"
      }) : "shuffle" === e2.id ? l.jsx(ke.shuffle, {}) : l.jsx(ke.addToQueue, {}),
      label: e2.label,
      disabled: e2.disabled,
      isLoading: d2.busy === e2.id,
      onClick: () => {
        e2.run(), s2();
      }
    }, e2.id)), L2 && l.jsx(g2, {
      icon: S2 ? l.jsx(we, {
        className: "h-4 w-4 animate-spin"
      }) : l.jsx(ke.wave, {
        className: "h-4 w-4"
      }),
      label: o2("library.actions.wave_by_playlist"),
      disabled: S2 || !I2.length,
      onClick: () => {
        s2(), L2({
          ...t2,
          tracks: I2
        });
      }
    }), !A2 && l.jsx(kl, {}), !A2 && l.jsx(g2, {
      icon: F2 ? l.jsx(we, {
        className: "h-4 w-4 animate-spin"
      }) : l.jsx(ke.reload, {
        className: "h-4 w-4"
      }),
      label: o2("common.refresh"),
      disabled: F2 || !O2 || !(null == k2 ? void 0 : k2.handleRefreshPlaylist),
      onClick: () => {
        E2(t2), s2();
      }
    }), !A2 && !u2.includes("share") && l.jsx(g2, {
      icon: l.jsx(ke.share, {
        className: "h-4 w-4"
      }),
      label: o2("common.share"),
      disabled: !B2,
      onClick: () => {
        w2(), s2();
      }
    }), !A2 && l.jsx(g2, {
      icon: P2 ? l.jsx(we, {
        className: "h-4 w-4 animate-spin"
      }) : M2 ? l.jsx(ke.globe, {
        className: "h-4 w-4"
      }) : l.jsx(ke.lock, {
        className: "h-4 w-4"
      }),
      label: o2(M2 ? "library.actions.make_private" : "library.actions.make_public"),
      disabled: P2 || !$2,
      onClick: j2
    }), !A2 && l.jsx(g2, {
      icon: _2 ? l.jsx(we, {
        className: "h-4 w-4 animate-spin"
      }) : l.jsx(ke.pin, {
        weight: T2 ? "Bold" : "Linear",
        className: "h-4 w-4"
      }),
      label: o2(T2 ? "library.actions.unpin" : "library.actions.pin"),
      disabled: _2,
      onClick: () => {
        (async () => {
          try {
            C2(true), (await Mt.togglePin(t2.id, T2)) && (null == k2 ? void 0 : k2.onReloadPlaylist) && (await k2.onReloadPlaylist({
              ...t2,
              pinned: !T2
            }));
          } catch (e2) {
            Te.error("library", "Failed to update pinned playlist:", e2);
          } finally {
            C2(false);
          }
        })();
      }
    }), !A2 && l.jsx(g2, {
      icon: l.jsx(ke.addUser, {
        className: "h-4 w-4"
      }),
      label: o2("library.actions.collab.add_friend"),
      right: l.jsx(Ee, {
        className: "h-4 w-4"
      }),
      disabled: !Q2,
      keepOpen: true,
      onClick: () => i2("add-collaborator")
    }), n2.length > 0 && l.jsx("div", {
      className: "px-1 mt-1",
      children: l.jsx("div", {
        className: "max-h-[140px] overflow-y-auto space-y-0.5 -mx-2 px-2 [&::-webkit-scrollbar]:hidden",
        children: n2.map(e2 => {
          const t3 = String(e2.id),
            a3 = e2.nickname || e2.username || t3,
            r3 = e2.username ? `@${e2.username}` : t3;
          return l.jsx(b, {
            variant: "list",
            user: {
              id: t3,
              nickname: e2.nickname,
              username: e2.username,
              avatar: e2.avatar
            },
            displayName: a3,
            subtitle: r3
          }, t3);
        })
      })
    }), !A2 && l.jsx(kl, {}), !u2.includes("cache") && "favorites" !== t2.id && "offline" !== t2.id && l.jsx(yl, {
      menu: c2,
      collectionId: t2.id,
      tracks: I2,
      disabled: a2 <= 0
    }), R2 && "favorites" !== t2.id && "offline" !== t2.id && "import" !== t2.id && l.jsx(g2, {
      icon: l.jsx(Fe, {
        className: "h-4 w-4"
      }),
      label: o2("downloads.export_button_title"),
      disabled: a2 <= 0,
      onClick: () => {
        R2({
          ...t2,
          tracks: I2
        }), s2();
      }
    }), D2 && "favorites" !== t2.id && "offline" !== t2.id && "import" !== t2.id && l.jsxs(l.Fragment, {
      children: [l.jsx(kl, {}), l.jsx(g2, {
        icon: l.jsx(ke.delete, {
          className: "h-4 w-4"
        }),
        label: o2("common.delete"),
        destructive: true,
        groupHoverIcon: true,
        onClick: () => {
          D2(t2.id), s2();
        }
      })]
    })]
  });
}
function wl(e2) {
  const a2 = t.c(2);
  let r2;
  return a2[0] !== e2 ? (r2 = e2.quickActions ? l.jsx(Pl, {
    ...e2,
    quickActions: e2.quickActions
  }) : l.jsx(jl, {
    ...e2
  }), a2[0] = e2, a2[1] = r2) : r2 = a2[1], r2;
}
function jl(a2) {
  var r2;
  const n2 = t.c(6),
    i2 = e.useContext(rl);
  let s2;
  n2[0] !== i2 || n2[1] !== a2.selectedPlaylist ? (s2 = (null == (r2 = null == i2 ? void 0 : i2.selectedPlaylist) ? void 0 : r2.id) === a2.selectedPlaylist.id ? {
    ...a2.selectedPlaylist,
    tracks: i2.filteredPlaylistSongs
  } : a2.selectedPlaylist, n2[0] = i2, n2[1] = a2.selectedPlaylist, n2[2] = s2) : s2 = n2[2];
  const o2 = j("playlist", s2);
  let c2;
  return n2[3] !== o2 || n2[4] !== a2 ? (c2 = l.jsx(Pl, {
    ...a2,
    quickActions: o2
  }), n2[3] = o2, n2[4] = a2, n2[5] = c2) : c2 = n2[5], c2;
}
function Pl({
  selectedPlaylist: t2,
  menu: a2 = "context",
  quickActions: r2,
  hidden: n2 = []
}) {
  var i2;
  const {
      t: s2,
      currentLanguage: o2
    } = be(),
    [c2, d2] = e.useState("main"),
    [u2, f2] = e.useState(false),
    [m2, h2] = e.useState(null),
    [y2, v2] = e.useState([]),
    [p2, g2] = e.useState(false),
    x2 = e.useMemo(() => {
      var e2;
      return (null != (e2 = t2.collaborators) ? e2 : []).map(e3 => "string" == typeof e3 ? {
        id: e3
      } : e3).filter(e3 => Boolean(e3 && "object" == typeof e3 && "id" in e3 && String(e3.id))).map(e3 => ({
        ...e3,
        id: String(e3.id)
      }));
    }, [t2.collaborators]),
    b2 = y2.length > 0 ? y2 : x2,
    k2 = e.useMemo(() => new Set(b2.map(e2 => String(e2.id))), [b2]),
    S2 = e.useCallback(async () => {
      try {
        g2(true);
        const e2 = await Ne.library.playlists.getCollaborators(t2.id);
        v2(e2);
      } catch (e2) {
        Te.error("library", "Failed to load collaborators:", e2), v2([]);
      } finally {
        g2(false);
      }
    }, [t2.id]);
  e.useEffect(() => {
    "add-collaborator" === c2 && S2();
  }, [c2, S2]);
  const j2 = Le(e2 => e2.user),
    P2 = true === t2.pinned,
    _2 = t2.cover_art,
    C2 = null != (i2 = t2.tracks_count) ? i2 : t2.tracks.length,
    {
      friends: N2
    } = Re(),
    T2 = Le(e2 => e2.loadFriends);
  e.useEffect(() => {
    "add-collaborator" === c2 && T2();
  }, [c2, T2]);
  const I2 = [...N2].sort((e2, t3) => {
    const l2 = k2.has(String(e2.id)),
      a3 = k2.has(String(t3.id));
    return l2 && !a3 ? -1 : !l2 && a3 ? 1 : 0;
  });
  return l.jsxs(l.Fragment, {
    children: [l.jsx(w, {
      artwork: _2,
      background: "favorites" === t2.id ? l.jsx("div", {
        className: "absolute inset-0 bg-red-500/10"
      }) : "offline" === t2.id ? l.jsx("div", {
        className: "absolute inset-0 bg-primary/10"
      }) : void 0,
      cover: "favorites" === t2.id ? l.jsx(Oe, {
        kind: "favorites",
        className: "size-12 shrink-0 rounded-xl"
      }) : "offline" === t2.id ? l.jsx(Oe, {
        kind: "offline",
        className: "size-12 shrink-0 rounded-xl"
      }) : l.jsx(Me, {
        src: _2 || "",
        title: t2.title,
        size: 48,
        className: "size-12 shrink-0 rounded-xl",
        type: "playlist",
        source: t2.source
      }),
      title: l.jsx(Dt, {
        text: t2.title,
        playOnHover: true,
        className: "text-headline font-semibold leading-tight"
      }),
      subtitle: 0 === C2 && "favorites" !== t2.id ? t2.author || s2("common.tabs.playlist") : De(C2, s2, o2),
      meta: t2.created_at ? l.jsxs("span", {
        className: "min-w-0 truncate",
        children: [s2("library.playlist.created_by"), " ", l.jsx("span", {
          className: "font-semibold text-foreground",
          children: Ae(t2.created_at, o2)
        })]
      }) : void 0
    }), l.jsx("div", {
      className: "p-1.5",
      children: l.jsxs(ze, {
        id: String(c2),
        children: ["main" === c2 && l.jsx(l.Fragment, {
          children: l.jsx(Sl, {
            menu: a2,
            quickActions: r2,
            hidden: n2,
            selectedPlaylist: t2,
            trackCount: C2,
            isPinned: P2,
            visibleCollaborators: b2,
            setPage: d2,
            close: () => {
              d2("main");
            },
            t: s2
          })
        }), "add-collaborator" === c2 && l.jsx(gl, {
          friendsAndCollabs: I2,
          collaboratorIds: k2,
          handleAddCollaborator: async e2 => {
            if (e2) try {
              f2(true), await Ne.library.playlists.addCollaborator(t2.id, e2), S2();
            } catch (l2) {
              Te.error("library", "Failed to add collaborator:", l2);
            } finally {
              f2(false);
            }
          },
          handleRemoveCollaborator: async e2 => {
            if (!(m2 || (null == j2 ? void 0 : j2.id) && e2 === j2.id)) try {
              h2(e2), await Ne.library.playlists.removeCollaborator(t2.id, e2), v2(t3 => t3.filter(t4 => t4.id !== e2));
            } catch (l2) {
              Te.error("library", "Failed to remove collaborator:", l2);
            } finally {
              h2(null);
            }
          },
          isAddingFriend: u2,
          isLoadingCollaborators: p2,
          collaboratorProfiles: y2,
          friendsList: N2,
          isRemovingFriend: m2,
          isPinned: P2,
          user: j2,
          setPage: d2,
          t: s2
        })]
      })
    })]
  });
}
const _l = ["title", "artist", "duration", "added"],
  Cl = {
    title: ke.lyrics,
    artist: ke.artist,
    duration: ke.history,
    added: Be
  };
function Nl(e2) {
  const a2 = t.c(28),
    {
      mode: r2,
      onSort: n2,
      duplicates: i2,
      dislikes: s2
    } = e2,
    {
      t: o2
    } = be();
  let c2;
  a2[0] !== r2 ? (c2 = (e3 => "default" === e3 || "downloaded_all" === e3 ? null : e3.split("_")[0])(r2), a2[0] = r2, a2[1] = c2) : c2 = a2[1];
  const d2 = c2;
  let u2;
  a2[2] !== r2 ? (u2 = r2.endsWith("_desc"), a2[2] = r2, a2[3] = u2) : u2 = a2[3];
  const f2 = u2;
  let m2;
  a2[4] !== f2 || a2[5] !== d2 || a2[6] !== n2 ? (m2 = e3 => {
    const t2 = "added" === e3 ? "desc" : "asc";
    if (e3 !== d2) return n2(`${e3}_${t2}`);
    n2((f2 ? "desc" : "asc") === t2 ? `${e3}_${"asc" === t2 ? "desc" : "asc"}` : "default");
  }, a2[4] = f2, a2[5] = d2, a2[6] = n2, a2[7] = m2) : m2 = a2[7];
  const h2 = m2,
    y2 = f2 ? $e : Qe,
    v2 = Tl;
  let p2;
  a2[8] !== o2 ? (p2 = (e3, t2, a3) => e3 && l.jsx($t, {
    size: "md",
    tone: "soft",
    value: e3.active ? "on" : null,
    onChange: e3.onToggle,
    options: [{
      value: "on",
      label: v2(t2, o2(a3), e3.active)
    }]
  }), a2[8] = o2, a2[9] = p2) : p2 = a2[9];
  const g2 = p2;
  let x2, b2, k2, S2, w2;
  return a2[10] !== y2 || a2[11] !== d2 || a2[12] !== o2 ? (x2 = _l.map(e3 => ({
    value: e3,
    label: v2(e3 === d2 ? y2 : Cl[e3], o2("library.sort.by." + e3))
  })), a2[10] = y2, a2[11] = d2, a2[12] = o2, a2[13] = x2) : x2 = a2[13], a2[14] !== d2 || a2[15] !== h2 || a2[16] !== x2 ? (b2 = l.jsx($t, {
    size: "md",
    tone: "soft",
    value: d2,
    onChange: h2,
    options: x2
  }), a2[14] = d2, a2[15] = h2, a2[16] = x2, a2[17] = b2) : b2 = a2[17], a2[18] !== i2 || a2[19] !== g2 ? (k2 = g2(i2, ke.copy, "library.sort.by.duplicates"), a2[18] = i2, a2[19] = g2, a2[20] = k2) : k2 = a2[20], a2[21] !== s2 || a2[22] !== g2 ? (S2 = g2(s2, ke.dislike, "library.dislikes.title"), a2[21] = s2, a2[22] = g2, a2[23] = S2) : S2 = a2[23], a2[24] !== b2 || a2[25] !== k2 || a2[26] !== S2 ? (w2 = l.jsxs(l.Fragment, {
    children: [b2, k2, S2]
  }), a2[24] = b2, a2[25] = k2, a2[26] = S2, a2[27] = w2) : w2 = a2[27], w2;
}
function Tl(e2, t2, a2) {
  const r2 = void 0 !== a2 && a2;
  return l.jsxs("span", {
    className: "flex items-center gap-1.5",
    children: [l.jsx(e2, {
      weight: r2 ? "Bold" : "Linear",
      className: "size-4"
    }), t2]
  });
}
const Il = ["play", "shuffle", "queue", "share", "cache"],
  El = {
    initial: {
      opacity: 0,
      y: 3
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -3,
      transition: {
        duration: 0.14,
        ease: "easeIn"
      }
    }
  };
function Fl({
  selectedPlaylist: t2,
  trackCount: a2,
  tracks: r2 = (e2 => null != (e2 = t2.tracks) ? e2 : [])(),
  playAll: n2,
  shufflePlay: i2,
  onAddToQueue: s2,
  dislikes: o2,
  sorting: c2,
  duplicates: d2
}) {
  const {
      t: u2
    } = be(),
    f2 = e.useRef(null);
  We(f2, {
    wheelDelta: 0.8,
    anyWheel: true
  }), T(f2, {
    axis: "x"
  });
  const h2 = Boolean(null == o2 ? void 0 : o2.active),
    y2 = !r2.length;
  return l.jsxs(l.Fragment, {
    children: [!h2 && l.jsx(I, {
      onClick: n2,
      disabled: y2,
      queue: {
        id: t2.id
      }
    }), l.jsx("div", {
      ref: f2,
      className: "scroll-edges no-scrollbar flex min-w-0 flex-1 overflow-x-auto",
      children: l.jsx(ze, {
        id: String(c2 ? "sort" : "actions"),
        className: "flex shrink-0 items-center gap-2",
        children: c2 ? l.jsx(Nl, {
          ...c2,
          duplicates: d2,
          dislikes: o2
        }) : l.jsxs(l.Fragment, {
          children: [l.jsx(m, {
            children: l.jsx(__fork_playlistShuffle, {
              playlist: t2,
              disabled: y2
            })
          }), !h2 && s2 && l.jsx(je, {
            variant: "outline",
            size: "cta",
            shape: "pill",
            disabled: y2,
            onClick: s2,
            leadingIcon: l.jsx(ke.addToQueue, {
              className: "size-4"
            }),
            children: u2("library.actions.queue")
          }), a2 > 0 && "offline" !== t2.id && !h2 && l.jsx(hl, {
            collectionId: t2.id,
            tracks: r2,
            grouped: true
          })]
        })
      })
    })]
  });
}
function Ll(a2) {
  const r2 = t.c(43),
    {
      selectedPlaylist: n2,
      trackCount: i2,
      searchQuery: s2,
      onSearchChange: o2,
      sortActive: c2,
      sortOpen: d2,
      onSort: u2,
      onStartEdit: f2,
      onShare: m2,
      onAddFiles: h2,
      onAddFolder: y2
    } = a2,
    v2 = void 0 === s2 ? "" : s2,
    {
      t: p2
    } = be(),
    [g2, x2] = e.useState(false);
  let b2;
  r2[0] !== n2.id ? (b2 = xl(n2.id), r2[0] = n2.id, r2[1] = b2) : b2 = r2[1];
  const k2 = b2,
    S2 = "offline" === n2.id;
  let w2, j2, T2, I2, E2, F2, L2, R2;
  return r2[2] !== S2 || r2[3] !== h2 || r2[4] !== p2 ? (w2 = S2 && h2 && l.jsx(je, {
    variant: "quiet",
    size: "icon-sm",
    "aria-label": p2("player.local_track.add.files"),
    onClick: h2,
    children: l.jsx(ke.add, {
      className: "size-4"
    })
  }), r2[2] = S2, r2[3] = h2, r2[4] = p2, r2[5] = w2) : w2 = r2[5], r2[6] !== S2 || r2[7] !== y2 || r2[8] !== p2 ? (j2 = S2 && y2 && l.jsx(je, {
    variant: "quiet",
    size: "icon-sm",
    "aria-label": p2("player.local_track.add.folder"),
    onClick: y2,
    children: l.jsx(He, {
      className: "size-4"
    })
  }), r2[6] = S2, r2[7] = y2, r2[8] = p2, r2[9] = j2) : j2 = r2[9], r2[10] !== f2 || r2[11] !== d2 || r2[12] !== p2 ? (T2 = f2 && !d2 && null, r2[10] = f2, r2[11] = d2, r2[12] = p2, r2[13] = T2) : T2 = r2[13], r2[14] !== m2 || r2[15] !== d2 || r2[16] !== k2 || r2[17] !== p2 ? (I2 = !k2 && m2 && !d2 && l.jsx(je, {
    variant: "quiet",
    size: "icon-sm",
    "aria-label": p2("common.share"),
    onClick: m2,
    children: l.jsx(ke.share, {
      className: "size-4"
    })
  }), r2[14] = m2, r2[15] = d2, r2[16] = k2, r2[17] = p2, r2[18] = I2) : I2 = r2[18], r2[19] !== u2 || r2[20] !== c2 || r2[21] !== d2 || r2[22] !== p2 || r2[23] !== i2 ? (E2 = u2 && l.jsx(je, {
    variant: "quiet",
    size: "icon-sm",
    "aria-label": p2("library.actions.sort"),
    disabled: !i2,
    "aria-pressed": d2 || c2,
    onClick: u2,
    className: Pe((d2 || c2) && "text-primary hover:text-primary"),
    children: l.jsx(Ue, {
      className: "size-4"
    })
  }), r2[19] = u2, r2[20] = c2, r2[21] = d2, r2[22] = p2, r2[23] = i2, r2[24] = E2) : E2 = r2[24], r2[25] !== o2 || r2[26] !== v2 || r2[27] !== p2 ? (F2 = o2 && l.jsx("div", {
    className: "ml-1 w-44",
    children: l.jsx(P, {
      leftIcon: l.jsx(ke.search, {
        className: "size-4"
      }),
      value: v2,
      onChange: e2 => o2(e2.target.value),
      placeholder: p2("library.hub.find"),
      "aria-label": p2("library.actions.search"),
      className: "h-9 rounded-xl text-sm focus:border-transparent focus-visible:border-transparent",
      onKeyDown: e2 => {
        "Escape" === e2.key && o2("");
      }
    })
  }), r2[25] = o2, r2[26] = v2, r2[27] = p2, r2[28] = F2) : F2 = r2[28], r2[29] !== g2 || r2[30] !== n2 || r2[31] !== d2 || r2[32] !== k2 || r2[33] !== p2 ? (L2 = !k2 && !d2 && l.jsxs(_, {
    open: g2,
    onOpenChange: x2,
    children: [l.jsx(C, {
      asChild: true,
      children: l.jsx(je, {
        variant: "quiet",
        size: "icon-sm",
        "aria-label": p2("library.actions.more"),
        children: l.jsx(ke.more, {
          className: "size-5"
        })
      })
    }), l.jsx(N, {
      align: "end",
      className: "w-64 p-0",
      children: l.jsx(wl, {
        selectedPlaylist: n2,
        menu: "dropdown",
        hidden: Il
      })
    })]
  }), r2[29] = g2, r2[30] = n2, r2[31] = d2, r2[32] = k2, r2[33] = p2, r2[34] = L2) : L2 = r2[34], r2[35] !== w2 || r2[36] !== j2 || r2[37] !== T2 || r2[38] !== I2 || r2[39] !== E2 || r2[40] !== F2 || r2[41] !== L2 ? (R2 = l.jsxs("div", {
    className: "ml-auto flex shrink-0 items-center gap-1",
    children: [w2, j2, T2, I2, E2, F2, L2]
  }), r2[35] = w2, r2[36] = j2, r2[37] = T2, r2[38] = I2, r2[39] = E2, r2[40] = F2, r2[41] = L2, r2[42] = R2) : R2 = r2[42], R2;
}
function Rl(e2) {
  const a2 = t.c(41),
    {
      selectedPlaylist: r2,
      isFavorites: n2,
      dislikes: i2,
      isOffline: s2,
      hasCover: o2,
      isRenameMode: c2,
      onChangeIcon: d2,
      setCoverFailed: u2,
      t: f2
    } = e2,
    m2 = void 0 !== i2 && i2;
  if (n2) {
    const e3 = m2 ? "dislikes" : "favorites";
    let t2;
    a2[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = Pe("h-36 w-36 shrink-0 overflow-hidden rounded-cover page-md:h-40 page-md:w-40", "border border-border/30 bg-transparent"), a2[0] = t2) : t2 = a2[0];
    const r3 = m2 ? "text-foreground/70" : "text-primary";
    let n3, i3;
    return a2[1] !== r3 ? (n3 = Pe("h-14 w-14", r3), a2[1] = r3, a2[2] = n3) : n3 = a2[2], a2[3] !== e3 || a2[4] !== n3 ? (i3 = l.jsx(Oe, {
      kind: e3,
      className: t2,
      iconClassName: n3
    }), a2[3] = e3, a2[4] = n3, a2[5] = i3) : i3 = a2[5], i3;
  }
  if (s2) {
    let e3;
    return a2[6] === Symbol.for("react.memo_cache_sentinel") ? (e3 = l.jsx(Oe, {
      kind: "offline",
      className: Pe("h-36 w-36 shrink-0 overflow-hidden rounded-cover page-md:h-40 page-md:w-40", "border border-border/30 bg-transparent"),
      iconClassName: "h-14 w-14 text-foreground/70"
    }), a2[6] = e3) : e3 = a2[6], e3;
  }
  if (o2) {
    const e3 = c2 && d2 ? d2 : void 0;
    let t2;
    a2[7] === Symbol.for("react.memo_cache_sentinel") ? (t2 = Pe("h-36 w-36 shrink-0 overflow-hidden rounded-cover page-md:h-40 page-md:w-40", "group/cover relative bg-muted text-left disabled:cursor-default"), a2[7] = t2) : t2 = a2[7];
    const n3 = !c2 || !d2;
    let i3;
    a2[8] !== c2 || a2[9] !== f2 ? (i3 = c2 ? f2("library.actions.change_icon") : void 0, a2[8] = c2, a2[9] = f2, a2[10] = i3) : i3 = a2[10];
    const s3 = `${r2.id}-${r2.cover_art}`,
      o3 = r2.cover_art || "";
    let m3, h3, y3, v3;
    return a2[11] !== u2 ? (m3 = () => u2(true), a2[11] = u2, a2[12] = m3) : m3 = a2[12], a2[13] !== r2.title || a2[14] !== s3 || a2[15] !== o3 || a2[16] !== m3 ? (h3 = l.jsx(Me, {
      src: o3,
      title: r2.title,
      artist: "",
      size: 176,
      className: "h-full w-full object-cover",
      type: "playlist",
      showSourceBadge: false,
      disableHoverEffect: true,
      onError: m3
    }, s3), a2[13] = r2.title, a2[14] = s3, a2[15] = o3, a2[16] = m3, a2[17] = h3) : h3 = a2[17], a2[18] !== c2 ? (y3 = c2 && l.jsx("span", {
      className: "absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-200 group-hover/cover:opacity-100",
      children: l.jsx(Ke, {
        className: "h-7 w-7 text-white"
      })
    }), a2[18] = c2, a2[19] = y3) : y3 = a2[19], a2[20] !== y3 || a2[21] !== e3 || a2[22] !== n3 || a2[23] !== i3 || a2[24] !== h3 ? (v3 = l.jsxs("button", {
      type: "button",
      onClick: e3,
      className: t2,
      disabled: n3,
      "aria-label": i3,
      children: [h3, y3]
    }), a2[20] = y3, a2[21] = e3, a2[22] = n3, a2[23] = i3, a2[24] = h3, a2[25] = v3) : v3 = a2[25], v3;
  }
  const h2 = c2 && d2 ? d2 : void 0;
  let y2;
  a2[26] === Symbol.for("react.memo_cache_sentinel") ? (y2 = Pe("h-36 w-36 shrink-0 overflow-hidden rounded-cover page-md:h-40 page-md:w-40", "group/cover relative flex items-center justify-center border border-border/30 bg-transparent text-left disabled:cursor-default"), a2[26] = y2) : y2 = a2[26];
  const v2 = !c2 || !d2;
  let p2, g2, x2, b2;
  return a2[27] !== c2 || a2[28] !== f2 ? (p2 = c2 ? f2("library.actions.change_icon") : void 0, a2[27] = c2, a2[28] = f2, a2[29] = p2) : p2 = a2[29], a2[30] !== r2.title || a2[31] !== r2.tracks ? (g2 = E(r2.tracks).length > 0 ? l.jsx(F, {
    title: r2.title,
    tracks: r2.tracks,
    size: 160,
    className: "size-full",
    disableHoverEffect: true
  }) : l.jsx(qe.Playlist, {
    className: "h-10 w-10 text-foreground/35"
  }), a2[30] = r2.title, a2[31] = r2.tracks, a2[32] = g2) : g2 = a2[32], a2[33] !== c2 ? (x2 = c2 && l.jsx("span", {
    className: "absolute inset-0 flex items-center justify-center rounded-cover bg-black/45 opacity-0 transition-opacity duration-200 group-hover/cover:opacity-100",
    children: l.jsx(Ke, {
      className: "h-7 w-7 text-white"
    })
  }), a2[33] = c2, a2[34] = x2) : x2 = a2[34], a2[35] !== h2 || a2[36] !== v2 || a2[37] !== p2 || a2[38] !== g2 || a2[39] !== x2 ? (b2 = l.jsxs("button", {
    type: "button",
    onClick: h2,
    className: y2,
    disabled: v2,
    "aria-label": p2,
    children: [g2, x2]
  }), a2[35] = h2, a2[36] = v2, a2[37] = p2, a2[38] = g2, a2[39] = x2, a2[40] = b2) : b2 = a2[40], b2;
}
function Dl(e2) {
  const a2 = t.c(49),
    {
      onAddMoreFiles: r2,
      onAddMoreFolder: n2,
      isLoadingLocalMetadata: i2,
      isConfirmingImport: s2,
      offlineTracksInfo: o2,
      localImportCount: c2,
      isLimitReached: d2,
      onCancelLocalImport: u2,
      onConfirmImport: f2,
      t: h2
    } = e2,
    y2 = i2 || s2;
  let v2, p2, g2;
  a2[0] !== h2 ? (v2 = h2("player.local_track.add.files"), a2[0] = h2, a2[1] = v2) : v2 = a2[1], a2[2] !== i2 ? (p2 = i2 ? l.jsx(we, {
    className: "h-4 w-4 animate-spin"
  }) : l.jsx(ke.add, {
    className: "h-4 w-4"
  }), a2[2] = i2, a2[3] = p2) : p2 = a2[3], a2[4] !== r2 || a2[5] !== y2 || a2[6] !== v2 || a2[7] !== p2 ? (g2 = l.jsx(m.Button, {
    onClick: r2,
    disabled: y2,
    "aria-label": v2,
    children: p2
  }), a2[4] = r2, a2[5] = y2, a2[6] = v2, a2[7] = p2, a2[8] = g2) : g2 = a2[8];
  const x2 = i2 || s2;
  let b2, k2, S2, w2, j2, P2, _2, C2;
  a2[9] !== h2 ? (b2 = h2("player.local_track.add.folder"), a2[9] = h2, a2[10] = b2) : b2 = a2[10], a2[11] === Symbol.for("react.memo_cache_sentinel") ? (k2 = l.jsx(He, {
    className: "h-4 w-4"
  }), a2[11] = k2) : k2 = a2[11], a2[12] !== n2 || a2[13] !== x2 || a2[14] !== b2 ? (S2 = l.jsx(m.Button, {
    onClick: n2,
    disabled: x2,
    "aria-label": b2,
    children: k2
  }), a2[12] = n2, a2[13] = x2, a2[14] = b2, a2[15] = S2) : S2 = a2[15], a2[16] !== d2 || a2[17] !== c2 || a2[18] !== o2 ? (w2 = o2 && -1 !== o2.limit && l.jsxs(l.Fragment, {
    children: [l.jsx("div", {
      className: "mx-1 h-3.5 w-[1.5px] rounded-full bg-border/50"
    }), l.jsxs("span", {
      className: Pe("px-1.5 text-xs font-medium", d2 ? "text-destructive" : "text-primary/80"),
      children: [o2.current + c2, "/", o2.limit]
    })]
  }), a2[16] = d2, a2[17] = c2, a2[18] = o2, a2[19] = w2) : w2 = a2[19], a2[20] !== g2 || a2[21] !== S2 || a2[22] !== w2 ? (j2 = l.jsxs(m, {
    className: "flex items-center gap-1 px-1",
    children: [g2, S2, w2]
  }), a2[20] = g2, a2[21] = S2, a2[22] = w2, a2[23] = j2) : j2 = a2[23], a2[24] !== h2 ? (P2 = h2("common.cancel"), a2[24] = h2, a2[25] = P2) : P2 = a2[25], a2[26] === Symbol.for("react.memo_cache_sentinel") ? (_2 = l.jsx(ke.close, {
    className: "h-4 w-4"
  }), a2[26] = _2) : _2 = a2[26], a2[27] !== s2 || a2[28] !== u2 || a2[29] !== P2 ? (C2 = l.jsx(m.Button, {
    onClick: u2,
    disabled: s2,
    className: "hover:text-foreground",
    "aria-label": P2,
    children: _2
  }), a2[27] = s2, a2[28] = u2, a2[29] = P2, a2[30] = C2) : C2 = a2[30];
  const N2 = 0 === c2 || s2 || d2,
    T2 = c2 > 0 && !d2 && "bg-primary/10";
  let I2, E2, F2, L2, R2, D2;
  return a2[31] !== T2 ? (I2 = Pe("text-primary hover:text-primary", T2), a2[31] = T2, a2[32] = I2) : I2 = a2[32], a2[33] !== h2 ? (E2 = h2("common.import"), a2[33] = h2, a2[34] = E2) : E2 = a2[34], a2[35] !== s2 ? (F2 = s2 ? l.jsx(we, {
    className: "h-4 w-4 animate-spin"
  }) : l.jsx(Ge, {
    className: "h-4 w-4"
  }), a2[35] = s2, a2[36] = F2) : F2 = a2[36], a2[37] !== f2 || a2[38] !== N2 || a2[39] !== I2 || a2[40] !== E2 || a2[41] !== F2 ? (L2 = l.jsx(m.Button, {
    onClick: f2,
    disabled: N2,
    className: I2,
    "aria-label": E2,
    children: F2
  }), a2[37] = f2, a2[38] = N2, a2[39] = I2, a2[40] = E2, a2[41] = F2, a2[42] = L2) : L2 = a2[42], a2[43] !== C2 || a2[44] !== L2 ? (R2 = l.jsxs(m, {
    className: "flex items-center gap-1 px-1",
    children: [C2, L2]
  }), a2[43] = C2, a2[44] = L2, a2[45] = R2) : R2 = a2[45], a2[46] !== j2 || a2[47] !== R2 ? (D2 = l.jsxs(l.Fragment, {
    children: [j2, R2]
  }), a2[46] = j2, a2[47] = R2, a2[48] = D2) : D2 = a2[48], D2;
}
function Al(a2) {
  const r2 = t.c(20),
    {
      scrollContainerRef: n2,
      playlistId: i2
    } = a2,
    s2 = e.useRef(null),
    o2 = e.useRef(null),
    [c2, d2] = e.useState(false),
    u2 = e.useRef(false),
    [f2, m2] = e.useState(0),
    h2 = e.useRef(0),
    y2 = e.useRef(0),
    v2 = e.useRef(0),
    p2 = e.useRef(0);
  let g2;
  r2[0] === Symbol.for("react.memo_cache_sentinel") ? (g2 = e2 => {
    p2.current = e2;
    const t2 = o2.current;
    t2 && (t2.style.transform = `translateX(${e2 * Math.max(0, v2.current - 80)}px)`);
  }, r2[0] = g2) : g2 = r2[0];
  const x2 = g2;
  let b2, k2;
  r2[1] === Symbol.for("react.memo_cache_sentinel") ? (b2 = () => {
    const e2 = s2.current;
    if (!e2) return;
    const t2 = new ResizeObserver(() => {
      v2.current = e2.clientWidth, x2(p2.current);
    });
    return t2.observe(e2), () => t2.disconnect();
  }, k2 = [x2], r2[1] = b2, r2[2] = k2) : (b2 = r2[1], k2 = r2[2]), e.useEffect(b2, k2);
  const [S2, w2] = e.useState(null);
  let j2, P2, _2, C2, N2, T2, I2;
  r2[3] !== n2 ? (j2 = () => {
    var e2;
    const t2 = null != (e2 = null == n2 ? void 0 : n2.current) ? e2 : null,
      l2 = t2 && t2.isConnected ? t2 : null;
    if (l2) return void w2(l2);
    const a3 = setInterval(() => {
      var e3;
      const t3 = null != (e3 = null == n2 ? void 0 : n2.current) ? e3 : null;
      t3 && t3.isConnected && (w2(t3), clearInterval(a3));
    }, 250);
    return () => clearInterval(a3);
  }, r2[3] = n2, r2[4] = j2) : j2 = r2[4], r2[5] !== i2 || r2[6] !== n2 ? (P2 = [n2, i2], r2[5] = i2, r2[6] = n2, r2[7] = P2) : P2 = r2[7], e.useLayoutEffect(j2, P2), r2[8] !== S2 ? (_2 = () => {
    const e2 = S2;
    if (!e2) return;
    let t2 = false;
    const l2 = () => {
      u2.current || t2 || (window.requestAnimationFrame(() => {
        if (t2 = false, u2.current) return;
        const l3 = e2.scrollTop,
          a4 = e2.scrollHeight - e2.clientHeight;
        x2(a4 > 0 ? l3 / a4 : 0);
      }), t2 = true);
    };
    e2.addEventListener("scroll", l2, {
      passive: true
    });
    const a3 = e2.scrollHeight - e2.clientHeight;
    return x2(a3 > 0 ? e2.scrollTop / a3 : 0), () => e2.removeEventListener("scroll", l2);
  }, C2 = [S2, x2], r2[8] = S2, r2[9] = _2, r2[10] = C2) : (_2 = r2[9], C2 = r2[10]), e.useEffect(_2, C2), r2[11] !== c2 || r2[12] !== n2 ? (N2 = () => {
    if (!c2) return;
    const e2 = e3 => {
        if (!u2.current || !s2.current) return;
        const t3 = null == n2 ? void 0 : n2.current;
        if (!t3) return;
        const l2 = s2.current.getBoundingClientRect().width - 80,
          a3 = e3.clientX - h2.current;
        let r3 = y2.current + a3;
        r3 = Math.max(0, Math.min(r3, l2));
        const i3 = l2 > 0 ? r3 / l2 : 0,
          o3 = t3.scrollHeight - t3.clientHeight;
        var c3;
        x2(i3), c3 = i3 * o3, t3.scrollTop = c3, m2(r3), y2.current = r3, h2.current = e3.clientX;
      },
      t2 = () => {
        d2(false), document.body.style.userSelect = "auto", setTimeout(() => {
          u2.current = false;
        }, 100);
      };
    return document.addEventListener("mousemove", e2), document.addEventListener("mouseup", t2), document.body.style.userSelect = "none", () => {
      document.removeEventListener("mousemove", e2), document.removeEventListener("mouseup", t2), document.body.style.userSelect = "auto";
    };
  }, T2 = [c2, n2, x2], r2[11] = c2, r2[12] = n2, r2[13] = N2, r2[14] = T2) : (N2 = r2[13], T2 = r2[14]), e.useEffect(N2, T2), r2[15] !== f2 ? (I2 = e2 => {
    e2.preventDefault(), h2.current = e2.clientX;
    let t2 = f2;
    if (o2.current && s2.current) {
      const e3 = o2.current.getBoundingClientRect(),
        l2 = s2.current.getBoundingClientRect();
      t2 = e3.left - l2.left, m2(t2);
    }
    y2.current = t2, u2.current = true, d2(true);
  }, r2[15] = f2, r2[16] = I2) : I2 = r2[16];
  const E2 = I2;
  let F2, L2;
  return r2[17] === Symbol.for("react.memo_cache_sentinel") ? (F2 = l.jsx("div", {
    className: "absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-primary transition-colors duration-150 shadow-sm"
  }), r2[17] = F2) : F2 = r2[17], r2[18] !== E2 ? (L2 = l.jsx("div", {
    className: "absolute bottom-[-1px] left-6 right-6 h-[2px] overflow-visible",
    children: l.jsx("div", {
      ref: s2,
      className: "absolute inset-0 pointer-events-none overflow-visible",
      children: l.jsx("div", {
        ref: o2,
        onMouseDown: E2,
        className: "absolute -top-[9px] z-10 h-5 w-[80px] pointer-events-auto cursor-grab active:cursor-grabbing",
        children: F2
      })
    })
  }), r2[18] = E2, r2[19] = L2) : L2 = r2[19], L2;
}
function Ol(e2) {
  const a2 = t.c(6),
    {
      on: r2,
      className: n2
    } = e2,
    i2 = r2 ? "border-primary bg-primary text-primary-foreground" : "border-foreground/30 bg-background/40 text-transparent";
  let s2, o2, c2;
  return a2[0] !== n2 || a2[1] !== i2 ? (s2 = Pe("flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-150", i2, n2), a2[0] = n2, a2[1] = i2, a2[2] = s2) : s2 = a2[2], a2[3] === Symbol.for("react.memo_cache_sentinel") ? (o2 = l.jsx(ke.check, {
    className: "size-3"
  }), a2[3] = o2) : o2 = a2[3], a2[4] !== s2 ? (c2 = l.jsx("span", {
    "aria-hidden": true,
    className: s2,
    children: o2
  }), a2[4] = s2, a2[5] = c2) : c2 = a2[5], c2;
}
function Ml(e2) {
  const a2 = t.c(47),
    {
      edit: r2,
      favorites: n2,
      onDone: i2
    } = e2,
    {
      t: s2
    } = be(),
    o2 = r2.total > 0 && r2.count === r2.total,
    c2 = 0 === r2.count,
    d2 = !r2.total,
    u2 = r2.selectAll,
    f2 = o2 ? "library.actions.deselect_all" : "library.actions.select_all";
  let h2, y2, v2, p2, g2;
  a2[0] !== s2 || a2[1] !== f2 ? (h2 = s2(f2), a2[0] = s2, a2[1] = f2, a2[2] = h2) : h2 = a2[2], a2[3] !== o2 ? (y2 = l.jsx(Ol, {
    on: o2
  }), a2[3] = o2, a2[4] = y2) : y2 = a2[4], a2[5] !== r2.selectAll || a2[6] !== d2 || a2[7] !== h2 || a2[8] !== y2 ? (v2 = l.jsx(je, {
    variant: "quiet",
    size: "icon-sm",
    shape: "circle",
    disabled: d2,
    onClick: u2,
    "aria-label": h2,
    children: y2
  }), a2[5] = r2.selectAll, a2[6] = d2, a2[7] = h2, a2[8] = y2, a2[9] = v2) : v2 = a2[9], a2[10] !== r2.count || a2[11] !== r2.total || a2[12] !== s2 ? (p2 = s2("library.hub.count", {
    current: r2.count,
    total: r2.total
  }), a2[10] = r2.count, a2[11] = r2.total, a2[12] = s2, a2[13] = p2) : p2 = a2[13], a2[14] !== p2 ? (g2 = l.jsx("span", {
    className: "min-w-12 px-1 text-callout font-medium text-muted-foreground select-none",
    children: p2
  }), a2[14] = p2, a2[15] = g2) : g2 = a2[15];
  const x2 = r2.queue;
  let b2, k2, S2, w2, j2, P2, _2, C2, N2;
  return a2[16] !== s2 ? (b2 = s2("library.actions.add.to.queue"), a2[16] = s2, a2[17] = b2) : b2 = a2[17], a2[18] === Symbol.for("react.memo_cache_sentinel") ? (k2 = l.jsx(ke.addToQueue, {}), a2[18] = k2) : k2 = a2[18], a2[19] !== r2.queue || a2[20] !== c2 || a2[21] !== b2 ? (S2 = l.jsx(m.Button, {
    disabled: c2,
    onClick: x2,
    "aria-label": b2,
    children: k2
  }), a2[19] = r2.queue, a2[20] = c2, a2[21] = b2, a2[22] = S2) : S2 = a2[22], a2[23] !== r2 || a2[24] !== n2 || a2[25] !== c2 || a2[26] !== s2 ? (w2 = r2.like && !n2 && l.jsx(m.Button, {
    disabled: c2,
    onClick: () => {
      var e3;
      null == (e3 = r2.like) || e3.call(r2);
    },
    "aria-label": s2("library.actions.add.to.favorites"),
    children: l.jsx(ke.like, {})
  }), a2[23] = r2, a2[24] = n2, a2[25] = c2, a2[26] = s2, a2[27] = w2) : w2 = a2[27], a2[28] !== r2 || a2[29] !== n2 || a2[30] !== c2 || a2[31] !== s2 ? (j2 = r2.remove && l.jsx(m.Button, {
    disabled: c2 || r2.deleting,
    onClick: () => {
      var e3;
      null == (e3 = r2.remove) || e3.call(r2);
    },
    className: "hover:text-destructive",
    "aria-label": s2(n2 ? "library.actions.remove.from.favorites" : "common.delete"),
    children: r2.deleting ? l.jsx(we, {
      className: "animate-spin"
    }) : l.jsx(ke.delete, {})
  }), a2[28] = r2, a2[29] = n2, a2[30] = c2, a2[31] = s2, a2[32] = j2) : j2 = a2[32], a2[33] !== S2 || a2[34] !== w2 || a2[35] !== j2 ? (P2 = l.jsxs(m, {
    children: [S2, w2, j2]
  }), a2[33] = S2, a2[34] = w2, a2[35] = j2, a2[36] = P2) : P2 = a2[36], a2[37] !== s2 ? (_2 = s2("common.done"), a2[37] = s2, a2[38] = _2) : _2 = a2[38], a2[39] !== i2 || a2[40] !== _2 ? (C2 = l.jsx(je, {
    variant: "primary",
    size: "cta",
    className: "ml-auto",
    onClick: i2,
    children: _2
  }), a2[39] = i2, a2[40] = _2, a2[41] = C2) : C2 = a2[41], a2[42] !== P2 || a2[43] !== C2 || a2[44] !== v2 || a2[45] !== g2 ? (N2 = l.jsxs(l.Fragment, {
    children: [v2, g2, P2, C2]
  }), a2[42] = P2, a2[43] = C2, a2[44] = v2, a2[45] = g2, a2[46] = N2) : N2 = a2[46], N2;
}
function zl(n2) {
  var i2, s2, o2, c2, d2, u2, f2, m2;
  const h2 = t.c(152),
    {
      selectedPlaylist: y2,
      localFilteredSongs: v2,
      handlePlayPlaylist: p2,
      scrollContainerRef: g2,
      searchQuery: x2,
      onSearchChange: b2,
      edit: k2,
      onRename: S2,
      totalTracksCount: w2,
      isLocalImporting: j2,
      localImportCount: P2,
      offlineTracksInfo: _2,
      isLimitReached: C2,
      onConfirmImport: N2,
      isConfirmingImport: T2,
      onCancelLocalImport: I2,
      onAddFiles: E2,
      onAddFolder: F2,
      onAddMoreFiles: A2,
      onAddMoreFolder: O2,
      isLoadingLocalMetadata: M2,
      onAddToQueue: z2,
      onSortClick: B2,
      duplicates: $2,
      handleSharePlaylist: Q2,
      dislikes: H2
    } = n2,
    U2 = void 0 === x2 ? "" : x2,
    W2 = void 0 !== j2 && j2,
    q2 = void 0 === P2 ? 0 : P2,
    K2 = void 0 !== C2 && C2,
    G2 = void 0 !== T2 && T2,
    V2 = void 0 !== M2 && M2,
    X2 = e.useContext(rl),
    Y2 = e.useContext(nl);
  let J2;
  h2[0] !== X2 || h2[1] !== v2 || h2[2] !== y2.id || h2[3] !== y2.tracks ? (J2 = null != (s2 = null != v2 ? v2 : (null == (i2 = null == X2 ? void 0 : X2.selectedPlaylist) ? void 0 : i2.id) === y2.id ? X2.filteredPlaylistSongs : y2.tracks) ? s2 : [], h2[0] = X2, h2[1] = v2, h2[2] = y2.id, h2[3] = y2.tracks, h2[4] = J2) : J2 = h2[4];
  const Z2 = J2;
  let ee2;
  h2[5] !== (null == Y2 ? void 0 : Y2.handlePlayPlaylist) || h2[6] !== p2 ? (ee2 = null != (o2 = null != p2 ? p2 : null == Y2 ? void 0 : Y2.handlePlayPlaylist) ? o2 : Ql, h2[5] = null == Y2 ? void 0 : Y2.handlePlayPlaylist, h2[6] = p2, h2[7] = ee2) : ee2 = h2[7];
  const te2 = ee2;
  let le2;
  h2[8] !== Y2 || h2[9] !== y2.id ? (le2 = (null == Y2 ? void 0 : Y2.onChangeIcon) ? () => Y2.onChangeIcon(y2.id) : void 0, h2[8] = Y2, h2[9] = y2.id, h2[10] = le2) : le2 = h2[10];
  const ae2 = le2,
    re2 = null != B2 ? B2 : null == Y2 ? void 0 : Y2.handleSortClick,
    {
      t: ne2,
      currentLanguage: ie2
    } = be(),
    [se2, oe2] = e.useState(y2.title),
    [ce2, de2] = e.useState(false),
    [ue2, fe2] = e.useState(false),
    me2 = "favorites" === y2.id,
    he2 = "offline" === y2.id;
  let ye2;
  h2[11] !== y2.id ? (ye2 = xl(y2.id), h2[11] = y2.id, h2[12] = ye2) : ye2 = h2[12];
  const ve2 = !ye2,
    pe2 = Boolean(null == k2 ? void 0 : k2.editing),
    ge2 = pe2 && ve2 && Boolean(S2),
    xe2 = pe2 ? "selection" : W2 ? "local" : "actions",
    Se2 = me2 && void 0 !== w2 ? w2 : (null == (c2 = y2.tracks) ? void 0 : c2.length) || w2 || y2.tracks_count || 0,
    we2 = Ve($l);
  let je2;
  h2[13] !== y2.id ? (je2 = e2 => {
    var t2;
    return null == (t2 = e2.playlists.find(e3 => String(e3.id) === String(y2.id))) ? void 0 : t2.length;
  }, h2[13] = y2.id, h2[14] = je2) : je2 = h2[14];
  const _e2 = Ce(je2),
    Ne2 = Boolean(me2 && (null == H2 ? void 0 : H2.active)),
    Te2 = Ne2 ? void 0 : me2 ? we2 : null != _e2 ? _e2 : y2.length;
  let Ie2, Ee2, Fe2;
  h2[15] !== ie2 || h2[16] !== ne2 || h2[17] !== Se2 ? (Ie2 = De(Se2, ne2, ie2), h2[15] = ie2, h2[16] = ne2, h2[17] = Se2, h2[18] = Ie2) : Ie2 = h2[18], h2[19] !== ie2 || h2[20] !== Te2 || h2[21] !== ne2 || h2[22] !== Se2 ? (Ee2 = Xe(Ye(Te2, Se2), ne2, ie2), h2[19] = ie2, h2[20] = Te2, h2[21] = ne2, h2[22] = Se2, h2[23] = Ee2) : Ee2 = h2[23], h2[24] !== Ie2 || h2[25] !== Ee2 ? (Fe2 = [Ie2, Ee2].filter(Boolean), h2[24] = Ie2, h2[25] = Ee2, h2[26] = Fe2) : Fe2 = h2[26];
  const Le2 = Fe2.join(", "),
    Re2 = Boolean(y2.cover_art && !ce2),
    Ae2 = y2.id,
    Oe2 = true === y2.pinned;
  let Me2;
  h2[27] !== y2.author ? (Me2 = null == (d2 = y2.author) ? void 0 : d2.trim(), h2[27] = y2.author, h2[28] = Me2) : Me2 = h2[28];
  const Be2 = Me2,
    $e2 = Boolean(ve2 && Be2 && "..." !== Be2);
  let Qe2, He2, Ue2, We2, qe2;
  h2[29] !== y2.title ? (Qe2 = () => {
    oe2(y2.title), de2(false);
  }, h2[29] = y2.title, h2[30] = Qe2) : Qe2 = h2[30], h2[31] !== y2.cover_art || h2[32] !== y2.id || h2[33] !== y2.title ? (He2 = [y2.id, y2.title, y2.cover_art], h2[31] = y2.cover_art, h2[32] = y2.id, h2[33] = y2.title, h2[34] = He2) : He2 = h2[34], e.useEffect(Qe2, He2), h2[35] === Symbol.for("react.memo_cache_sentinel") ? (Ue2 = () => fe2(false), h2[35] = Ue2) : Ue2 = h2[35], h2[36] !== y2.id ? (We2 = [y2.id], h2[36] = y2.id, h2[37] = We2) : We2 = h2[37], e.useEffect(Ue2, We2), h2[38] !== te2 || h2[39] !== Z2 || h2[40] !== y2 ? (qe2 = () => {
    te2({
      ...y2,
      tracks: Z2
    });
  }, h2[38] = te2, h2[39] = Z2, h2[40] = y2, h2[41] = qe2) : qe2 = h2[41];
  const Ke2 = qe2;
  let Ge2;
  h2[42] !== te2 || h2[43] !== Z2 || h2[44] !== y2 ? (Ge2 = () => {
    te2({
      ...y2,
      tracks: Z2
    }, true);
  }, h2[42] = te2, h2[43] = Z2, h2[44] = y2, h2[45] = Ge2) : Ge2 = h2[45];
  const Je2 = Ge2;
  let Ze2;
  h2[46] !== (null == X2 ? void 0 : X2.sortMode) || h2[47] !== re2 ? (Ze2 = re2 ? {
    mode: null != (u2 = null == X2 ? void 0 : X2.sortMode) ? u2 : "default",
    onSort: re2
  } : void 0, h2[46] = null == X2 ? void 0 : X2.sortMode, h2[47] = re2, h2[48] = Ze2) : Ze2 = h2[48];
  const et2 = Ze2,
    tt2 = "default" !== (null != (f2 = null == et2 ? void 0 : et2.mode) ? f2 : "default") || Boolean(null == $2 ? void 0 : $2.active) || Ne2;
  let lt2;
  h2[49] !== H2 || h2[50] !== $2 || h2[51] !== tt2 || h2[52] !== Ne2 || h2[53] !== et2 ? (lt2 = () => {
    tt2 ? (et2 && "default" !== et2.mode && et2.onSort("default"), (null == $2 ? void 0 : $2.active) && $2.onToggle(), Ne2 && (null == H2 || H2.onToggle()), fe2(false)) : fe2(Bl);
  }, h2[49] = H2, h2[50] = $2, h2[51] = tt2, h2[52] = Ne2, h2[53] = et2, h2[54] = lt2) : lt2 = h2[54];
  const at2 = lt2;
  let rt2, nt2, it2, st2, ot2, ct2, dt2;
  h2[55] !== Re2 || h2[56] !== Ne2 || h2[57] !== me2 || h2[58] !== he2 || h2[59] !== ge2 || h2[60] !== ae2 || h2[61] !== y2 || h2[62] !== ne2 ? (rt2 = l.jsx(Rl, {
    selectedPlaylist: y2,
    isFavorites: me2,
    dislikes: Ne2,
    isOffline: he2,
    hasCover: Re2,
    isRenameMode: ge2,
    onChangeIcon: ae2,
    setCoverFailed: de2,
    t: ne2
  }), h2[55] = Re2, h2[56] = Ne2, h2[57] = me2, h2[58] = he2, h2[59] = ge2, h2[60] = ae2, h2[61] = y2, h2[62] = ne2, h2[63] = rt2) : rt2 = h2[63], h2[64] !== k2 || h2[65] !== se2 || h2[66] !== Oe2 || h2[67] !== ge2 || h2[68] !== S2 || h2[69] !== y2.title || h2[70] !== ne2 ? (nt2 = l.jsx(a, {
    mode: "popLayout",
    initial: false,
    children: ge2 ? l.jsx(r.div, {
      ...El,
      className: "mb-1 flex min-w-0 items-center gap-2",
      children: l.jsx("input", {
        value: se2,
        maxLength: 100,
        onChange: e2 => oe2(e2.target.value),
        onKeyDown: e2 => {
          "Enter" === e2.key && se2.trim() && (null == S2 || S2(se2.trim()), null == k2 || k2.stop()), "Escape" === e2.key && (null == k2 || k2.stop());
        },
        style: {
          width: `${Math.max(se2.length, 1) + 2}ch`,
          maxWidth: "calc(100% - 20px)"
        },
        className: Pe("border-0 bg-transparent [background:transparent] p-0 text-foreground outline-none shadow-none caret-primary selection:bg-primary/20 placeholder:text-foreground/30 focus:bg-transparent focus:outline-none focus:ring-0", L),
        autoFocus: true,
        spellCheck: false
      })
    }, "rename") : l.jsxs(r.h1, {
      ...El,
      className: Pe("flex min-w-40 flex-1 items-center gap-2", L),
      children: [l.jsx(Dt, {
        text: y2.title,
        className: "font-inherit leading-tight",
        containerClassName: "w-auto max-w-full",
        durationSec: 16,
        gapClassName: "ml-10"
      }), Oe2 && l.jsx(ke.pinned, {
        size: 24,
        weight: "Linear",
        className: "shrink-0 text-primary/85",
        "aria-label": ne2("library.actions.pin")
      })]
    }, "title")
  }), h2[64] = k2, h2[65] = se2, h2[66] = Oe2, h2[67] = ge2, h2[68] = S2, h2[69] = y2.title, h2[70] = ne2, h2[71] = nt2) : nt2 = h2[71], h2[72] !== Ne2 || h2[73] !== me2 || h2[74] !== he2 || h2[75] !== Be2 || h2[76] !== $e2 || h2[77] !== ne2 ? (it2 = $e2 ? l.jsx(R, {
    children: Be2
  }) : (me2 || he2) && l.jsx(R, {
    children: ne2(Ne2 ? "library.dislikes.subtitle" : me2 ? "library.favorites.subtitle" : "library.offline.subtitle")
  }), h2[72] = Ne2, h2[73] = me2, h2[74] = he2, h2[75] = Be2, h2[76] = $e2, h2[77] = ne2, h2[78] = it2) : it2 = h2[78], h2[79] !== y2.description ? (st2 = (null == (m2 = y2.description) ? void 0 : m2.trim()) && l.jsx("p", {
    className: "mt-1 line-clamp-2 max-w-prose whitespace-pre-line break-words text-callout text-foreground/50",
    children: y2.description.trim()
  }), h2[79] = y2.description, h2[80] = st2) : st2 = h2[80], h2[81] !== Le2 ? (ot2 = Le2 && l.jsx(D, {
    children: Le2
  }), h2[81] = Le2, h2[82] = ot2) : ot2 = h2[82], h2[83] !== nt2 || h2[84] !== it2 || h2[85] !== st2 || h2[86] !== ot2 ? (ct2 = l.jsx("div", {
    className: "min-w-0 flex-1 pb-0.5",
    children: l.jsxs("div", {
      className: "min-w-0",
      children: [nt2, it2, st2, ot2]
    })
  }), h2[83] = nt2, h2[84] = it2, h2[85] = st2, h2[86] = ot2, h2[87] = ct2) : ct2 = h2[87], h2[88] !== rt2 || h2[89] !== ct2 ? (dt2 = l.jsxs("div", {
    className: "flex items-end gap-5 max-sm:flex-col max-sm:items-start page-md:gap-6",
    children: [rt2, ct2]
  }), h2[88] = rt2, h2[89] = ct2, h2[90] = dt2) : dt2 = h2[90];
  const ut2 = String(xe2);
  let ft2, mt2, ht2, yt2, vt2, pt2;
  return h2[91] !== H2 || h2[92] !== $2 || h2[93] !== k2 || h2[94] !== se2 || h2[95] !== Ne2 || h2[96] !== G2 || h2[97] !== pe2 || h2[98] !== me2 || h2[99] !== K2 || h2[100] !== V2 || h2[101] !== W2 || h2[102] !== ge2 || h2[103] !== Z2 || h2[104] !== q2 || h2[105] !== _2 || h2[106] !== A2 || h2[107] !== O2 || h2[108] !== z2 || h2[109] !== I2 || h2[110] !== N2 || h2[111] !== S2 || h2[112] !== Ke2 || h2[113] !== Ae2 || h2[114] !== y2 || h2[115] !== Je2 || h2[116] !== ue2 || h2[117] !== et2 || h2[118] !== ne2 || h2[119] !== Se2 ? (ft2 = k2 && pe2 ? l.jsx(Ml, {
    edit: k2,
    favorites: me2,
    onDone: () => {
      ge2 && se2.trim() && se2.trim() !== y2.title && (null == S2 || S2(se2.trim())), k2.stop();
    }
  }) : W2 ? l.jsx(Dl, {
    onAddMoreFiles: A2,
    onAddMoreFolder: O2,
    isLoadingLocalMetadata: V2,
    isConfirmingImport: G2,
    offlineTracksInfo: _2,
    localImportCount: q2,
    isLimitReached: K2,
    onCancelLocalImport: I2,
    onConfirmImport: N2,
    t: ne2
  }) : l.jsx(Fl, {
    selectedPlaylist: y2,
    trackCount: Se2,
    tracks: Z2,
    playAll: Ke2,
    shufflePlay: Je2,
    dislikes: me2 ? H2 : void 0,
    onAddToQueue: z2,
    sorting: ue2 || Ne2 ? et2 : void 0,
    duplicates: $2
  }, Ae2), h2[91] = H2, h2[92] = $2, h2[93] = k2, h2[94] = se2, h2[95] = Ne2, h2[96] = G2, h2[97] = pe2, h2[98] = me2, h2[99] = K2, h2[100] = V2, h2[101] = W2, h2[102] = ge2, h2[103] = Z2, h2[104] = q2, h2[105] = _2, h2[106] = A2, h2[107] = O2, h2[108] = z2, h2[109] = I2, h2[110] = N2, h2[111] = S2, h2[112] = Ke2, h2[113] = Ae2, h2[114] = y2, h2[115] = Je2, h2[116] = ue2, h2[117] = et2, h2[118] = ne2, h2[119] = Se2, h2[120] = ft2) : ft2 = h2[120], h2[121] !== ut2 || h2[122] !== ft2 ? (mt2 = l.jsx(ze, {
    id: ut2,
    className: "flex min-w-0 flex-1 items-center gap-2",
    children: ft2
  }), h2[121] = ut2, h2[122] = ft2, h2[123] = mt2) : mt2 = h2[123], h2[124] !== (null == k2 ? void 0 : k2.start) || h2[125] !== tt2 || h2[126] !== Q2 || h2[127] !== Ne2 || h2[128] !== pe2 || h2[129] !== E2 || h2[130] !== F2 || h2[131] !== b2 || h2[132] !== at2 || h2[133] !== Ae2 || h2[134] !== U2 || h2[135] !== y2 || h2[136] !== ue2 || h2[137] !== et2 || h2[138] !== Se2 ? (ht2 = !pe2 && l.jsx(Ll, {
    selectedPlaylist: y2,
    trackCount: Se2,
    searchQuery: U2,
    onSearchChange: b2,
    sortActive: tt2,
    sortOpen: ue2 || Ne2,
    onSort: et2 ? at2 : void 0,
    onStartEdit: null == k2 ? void 0 : k2.start,
    onAddFiles: E2,
    onAddFolder: F2,
    onShare: Q2
  }, Ae2), h2[124] = null == k2 ? void 0 : k2.start, h2[125] = tt2, h2[126] = Q2, h2[127] = Ne2, h2[128] = pe2, h2[129] = E2, h2[130] = F2, h2[131] = b2, h2[132] = at2, h2[133] = Ae2, h2[134] = U2, h2[135] = y2, h2[136] = ue2, h2[137] = et2, h2[138] = Se2, h2[139] = ht2) : ht2 = h2[139], h2[140] !== mt2 || h2[141] !== ht2 ? (yt2 = l.jsxs("div", {
    className: "mt-5 flex w-full items-center gap-x-4",
    children: [mt2, ht2]
  }), h2[140] = mt2, h2[141] = ht2, h2[142] = yt2) : yt2 = h2[142], h2[143] !== pe2 || h2[144] !== Ae2 || h2[145] !== g2 || h2[146] !== Se2 ? (vt2 = !pe2 && Se2 > 0 && l.jsx(Al, {
    scrollContainerRef: g2,
    playlistId: Ae2
  }), h2[143] = pe2, h2[144] = Ae2, h2[145] = g2, h2[146] = Se2, h2[147] = vt2) : vt2 = h2[147], h2[148] !== dt2 || h2[149] !== yt2 || h2[150] !== vt2 ? (pt2 = l.jsxs("header", {
    className: "relative shrink-0 px-page pt-page-y pb-5",
    children: [dt2, yt2, vt2]
  }), h2[148] = dt2, h2[149] = yt2, h2[150] = vt2, h2[151] = pt2) : pt2 = h2[151], pt2;
}
function Bl(e2) {
  return !e2;
}
function $l(e2) {
  return e2.length;
}
function Ql() {}
const Hl = n(e2 => ({
  isDragging: false,
  songs: [],
  sourcePlaylistId: null,
  hoveredPlaylistId: null,
  dropTargetId: null,
  setDragStart: (t2, l2) => e2({
    isDragging: true,
    songs: t2,
    sourcePlaylistId: l2,
    hoveredPlaylistId: null,
    dropTargetId: null
  }),
  setHoveredPlaylistId: t2 => e2({
    hoveredPlaylistId: t2
  }),
  setDragEnd: (t2 = null) => e2({
    isDragging: false,
    dropTargetId: t2,
    hoveredPlaylistId: null
  }),
  clearDrop: () => e2({
    dropTargetId: null,
    songs: [],
    sourcePlaylistId: null
  })
}));
let Ul = null;
function Wl({
  x: e2,
  y: t2,
  songs: l2,
  sourcePlaylistId: a2,
  cover: r2,
  label: n2
}) {
  null == Ul || Ul();
  const i2 = {
    active: false,
    startX: e2,
    startY: t2,
    ghost: null,
    hovered: null
  };
  let s2 = null,
    o2 = null;
  const c2 = () => {
      o2 && clearTimeout(o2), o2 = null, s2 = null;
    },
    d2 = e3 => {
      var t3;
      document.removeEventListener("pointermove", u2), document.removeEventListener("pointerup", f2), document.removeEventListener("pointercancel", m2), document.removeEventListener("keydown", h2), c2(), null == (t3 = i2.ghost) || t3.remove(), i2.ghost = null, i2.active && Hl.getState().setDragEnd(e3 ? i2.hovered : null), null !== i2.hovered && Hl.getState().setHoveredPlaylistId(null), i2.active = false, Ul = null;
    },
    u2 = e3 => {
      var t3, d3, u3;
      if (!i2.active) {
        if (Math.hypot(e3.clientX - i2.startX, e3.clientY - i2.startY) <= 5) return;
        i2.active = true, Hl.getState().setDragStart(l2, a2), i2.ghost = (() => {
          const e4 = document.createElement("div");
          if (e4.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99999", "display:flex", "align-items:center", "gap:8px", "background:rgba(20,20,20,0.95)", "border:1px solid rgba(255,255,255,0.15)", "border-radius:10px", "padding:6px 12px 6px 6px", "box-shadow:0 8px 24px rgba(0,0,0,0.6)", "font-size:13px", "color:white", "max-width:240px", "transform:rotate(-2deg)"].join(";"), r2) {
            const t5 = document.createElement("img");
            t5.src = r2, t5.style.cssText = "width:32px;height:32px;border-radius:6px;object-fit:cover;flex-shrink:0;", e4.appendChild(t5);
          }
          const t4 = document.createElement("span");
          return t4.style.cssText = "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px;", t4.textContent = n2, e4.appendChild(t4), document.body.appendChild(e4), e4;
        })();
      }
      i2.ghost && (i2.ghost.style.left = `${e3.clientX + 14}px`, i2.ghost.style.top = e3.clientY - 18 + "px");
      const f3 = document.elementFromPoint(e3.clientX, e3.clientY),
        m3 = null != (d3 = null == (t3 = null == f3 ? void 0 : f3.closest("[data-library-playlist-drop-id]")) ? void 0 : t3.dataset.libraryPlaylistDropId) ? d3 : null;
      m3 !== i2.hovered && (i2.hovered = m3, Hl.getState().setHoveredPlaylistId(m3));
      const h3 = null != (u3 = null == f3 ? void 0 : f3.closest("[data-carry-back]")) ? u3 : null;
      h3 !== s2 && (c2(), h3 && (s2 = h3, o2 = setTimeout(() => {
        h3.click(), c2();
      }, 450)));
    },
    f2 = () => d2(true),
    m2 = () => d2(false),
    h2 = e3 => {
      "Escape" === e3.key && d2(false);
    };
  document.addEventListener("pointermove", u2), document.addEventListener("pointerup", f2), document.addEventListener("pointercancel", m2), document.addEventListener("keydown", h2), Ul = () => d2(false);
}
const ql = i.memo(function (a2) {
  const r2 = t.c(71),
    {
      displayedSongs: n2,
      dragOps: i2,
      selectionOps: s2,
      scrollRef: o2,
      dislikes: c2
    } = a2,
    d2 = void 0 !== c2 && c2;
  let u2;
  r2[0] !== i2 ? (u2 = null != i2 ? i2 : {}, r2[0] = i2, r2[1] = u2) : u2 = r2[1];
  const {
    handleDragStart: f2,
    handleDragOver: m2,
    handleDragEnd: h2
  } = u2;
  let y2;
  r2[2] !== s2 ? (y2 = null != s2 ? s2 : {}, r2[2] = s2, r2[3] = y2) : y2 = r2[3];
  const {
      isEditing: v2,
      selectedIds: p2,
      onToggleSelection: g2
    } = y2,
    {
      onPlaySong: x2,
      onToggleLike: b2,
      onQueueSong: k2,
      handlePlayNext: S2,
      handleRemoveSong: w2,
      onLoadSimilarTracks: j2
    } = sl(),
    {
      selectedPlaylist: P2,
      isRefreshing: _2,
      sortMode: C2
    } = il(),
    {
      t: N2,
      currentLanguage: T2
    } = be(),
    I2 = e.useRef(null),
    E2 = o2 || I2;
  let F2;
  r2[4] !== w2 || r2[5] !== (null == P2 ? void 0 : P2.id) ? (F2 = e2 => {
    w2((null == P2 ? void 0 : P2.id) || "", e2);
  }, r2[4] = w2, r2[5] = null == P2 ? void 0 : P2.id, r2[6] = F2) : F2 = r2[6], null == P2 || P2.id;
  const L2 = F2;
  let R2;
  r2[7] !== n2 || r2[8] !== v2 || r2[9] !== p2 ? (R2 = v2 && p2 ? n2.filter(e2 => p2.has(e2.id)) : [], r2[7] = n2, r2[8] = v2, r2[9] = p2, r2[10] = R2) : R2 = r2[10];
  const D2 = R2;
  let $2;
  r2[11] !== T2 || r2[12] !== v2 || r2[13] !== D2 || r2[14] !== p2 || r2[15] !== (null == P2 ? void 0 : P2.id) || r2[16] !== N2 ? ($2 = e2 => {
    var t2, l2, a3, r3, n3;
    if (!v2 || 0 !== e2.button || 0 === D2.length) return;
    const i3 = e2.target.closest("[data-track-id]"),
      s3 = null == i3 ? void 0 : i3.dataset.trackId;
    i3 && s3 && (null == p2 ? void 0 : p2.has(s3)) && Wl({
      x: e2.clientX,
      y: e2.clientY,
      songs: D2,
      sourcePlaylistId: null != (t2 = null == P2 ? void 0 : P2.id) ? t2 : null,
      cover: null != (a3 = null == (l2 = i3.querySelector("img")) ? void 0 : l2.src) ? a3 : "",
      label: D2.length > 1 ? De(D2.length, N2, T2) : null != (n3 = null == (r3 = D2[0]) ? void 0 : r3.title) ? n3 : N2("common.track.unit.one")
    });
  }, r2[11] = T2, r2[12] = v2, r2[13] = D2, r2[14] = p2, r2[15] = null == P2 ? void 0 : P2.id, r2[16] = N2, r2[17] = $2) : $2 = r2[17], null == P2 || P2.id;
  const Q2 = $2;
  let H2;
  r2[18] === Symbol.for("react.memo_cache_sentinel") ? (H2 = {
    scrollAmount: 228
  }, r2[18] = H2) : H2 = r2[18], Je(E2, H2);
  const U2 = n2.length > 0;
  let W2, q2;
  r2[19] !== E2.current ? (W2 = () => {
    if (E2.current) return A(E2.current);
  }, r2[19] = E2.current, r2[20] = W2) : W2 = r2[20], r2[21] !== U2 || r2[22] !== E2 ? (q2 = [E2, U2], r2[21] = U2, r2[22] = E2, r2[23] = q2) : q2 = r2[23], e.useEffect(W2, q2);
  const K2 = e.useRef(0);
  let G2;
  r2[24] !== d2 || r2[25] !== (null == P2 ? void 0 : P2.id) ? (G2 = e2 => {
    if ("favorites" !== (null == P2 ? void 0 : P2.id) || d2 || K2.current) return;
    const t2 = e2.currentTarget;
    K2.current = requestAnimationFrame(() => {
      K2.current = 0, t2.scrollHeight - t2.scrollTop <= t2.clientHeight + 200 && Ve.getState().loadMoreFavorites();
    });
  }, r2[24] = d2, r2[25] = null == P2 ? void 0 : P2.id, r2[26] = G2) : G2 = r2[26];
  const V2 = G2,
    X2 = Kl;
  null == P2 || P2.id;
  const Y2 = d2 ? X2 : x2,
    J2 = "favorites" !== (null == P2 ? void 0 : P2.id),
    Z2 = "offline" === (null == P2 ? void 0 : P2.id),
    ee2 = Boolean(null == P2 ? void 0 : P2.id) && "offline" !== (null == P2 ? void 0 : P2.id),
    te2 = null == P2 ? void 0 : P2.id;
  let le2;
  r2[27] !== d2 || r2[28] !== S2 || r2[29] !== L2 || r2[30] !== v2 || r2[31] !== j2 || r2[32] !== k2 || r2[33] !== b2 || r2[34] !== g2 || r2[35] !== Y2 || r2[36] !== J2 || r2[37] !== Z2 || r2[38] !== ee2 || r2[39] !== te2 ? (le2 = {
    onPlaySong: Y2,
    dislikes: d2,
    onToggleLike: b2,
    onQueueSong: k2,
    onPlayNext: S2,
    onLoadSimilarTracks: j2,
    onRemove: L2,
    onDelete: L2,
    showRemoveButton: Boolean(P2?.writable),
    showDeleteButton: Z2,
    showContextMenu: true,
    showAddedDate: ee2,
    playlistId: te2,
    variant: "library",
    surface: "default",
    selectionMode: v2,
    onToggleSelection: g2
  }, r2[27] = d2, r2[28] = S2, r2[29] = L2, r2[30] = v2, r2[31] = j2, r2[32] = k2, r2[33] = b2, r2[34] = g2, r2[35] = Y2, r2[36] = J2, r2[37] = Z2, r2[38] = ee2, r2[39] = te2, r2[40] = le2) : le2 = r2[40];
  const ae2 = le2;
  let re2;
  r2[41] !== p2 || r2[42] !== (null == P2 ? void 0 : P2.id) ? (re2 = (e2, t2, a3) => {
    var r3;
    return l.jsx(O, {
      song: e2,
      index: t2,
      className: "mb-1 w-full",
      isSelected: null == p2 ? void 0 : p2.has(e2.id),
      dragHandleProps: a3,
      showCollaborator: "favorites" !== (null == P2 ? void 0 : P2.id) && "offline" !== (null == P2 ? void 0 : P2.id) && Boolean(null == (r3 = e2.collaborators) ? void 0 : r3.length)
    });
  }, r2[41] = p2, r2[42] = null == P2 ? void 0 : P2.id, r2[43] = re2) : re2 = r2[43], null == P2 || P2.id;
  const ne2 = re2,
    ie2 = _2 || void 0;
  let se2;
  r2[44] !== _2 || r2[45] !== N2 ? (se2 = _2 && l.jsx("span", {
    role: "status",
    className: "absolute bottom-3 right-3 z-50 rounded-button bg-background px-3 py-1.5 text-callout text-muted-foreground pointer-events-none",
    children: N2("library.hub.update_loading")
  }), r2[44] = _2, r2[45] = N2, r2[46] = se2) : se2 = r2[46];
  const oe2 = _2 && "pointer-events-none";
  let ce2;
  r2[47] !== oe2 ? (ce2 = Pe("h-full w-full", oe2), r2[47] = oe2, r2[48] = ce2) : ce2 = r2[48];
  const de2 = !h2 || (null == i2 ? void 0 : i2.disabled) || d2 || "default" !== C2 || v2;
  let ue2, fe2, me2, he2, ye2;
  return r2[49] !== n2 || r2[50] !== h2 || r2[51] !== m2 || r2[52] !== f2 || r2[53] !== V2 || r2[54] !== E2 || r2[55] !== ne2 || r2[56] !== de2 ? (ue2 = l.jsx(M, {
    items: n2,
    itemHeight: z.library,
    overscan: 5,
    onDragStart: f2,
    onDragOver: m2,
    onDragEnd: h2,
    disabled: de2,
    scrollRef: E2,
    className: "scrollbar-hide px-2.5",
    onScroll: V2,
    renderItem: ne2
  }), r2[49] = n2, r2[50] = h2, r2[51] = m2, r2[52] = f2, r2[53] = V2, r2[54] = E2, r2[55] = ne2, r2[56] = de2, r2[57] = ue2) : ue2 = r2[57], r2[58] !== ce2 || r2[59] !== ue2 ? (fe2 = l.jsx("div", {
    className: ce2,
    children: ue2
  }), r2[58] = ce2, r2[59] = ue2, r2[60] = fe2) : fe2 = r2[60], r2[61] !== se2 || r2[62] !== fe2 ? (me2 = l.jsxs("div", {
    className: "relative h-full w-full flex-1 min-h-0",
    children: [se2, fe2]
  }), r2[61] = se2, r2[62] = fe2, r2[63] = me2) : me2 = r2[63], r2[64] !== Q2 || r2[65] !== ie2 || r2[66] !== me2 ? (he2 = l.jsx("div", {
    "aria-busy": ie2,
    className: "flex-grow min-h-0 relative h-full w-full flex flex-col",
    onPointerDown: Q2,
    children: me2
  }), r2[64] = Q2, r2[65] = ie2, r2[66] = me2, r2[67] = he2) : he2 = r2[67], r2[68] !== ae2 || r2[69] !== he2 ? (ye2 = l.jsx(B, {
    value: ae2,
    children: he2
  }), r2[68] = ae2, r2[69] = he2, r2[70] = ye2) : ye2 = r2[70], ye2;
});
function Kl(e2) {
  return Ze.getState().playFromList(e2, [e2], null, null, "playlist");
}
function Gl(l2) {
  const a2 = t.c(20),
    {
      selectedPlaylist: r2,
      displayedSongs: n2,
      selectionMode: i2,
      searchQuery: s2,
      updatePlaylistOrder: o2,
      selectedIds: c2
    } = l2,
    [d2, u2] = e.useState(null),
    [f2, m2] = e.useState(null);
  let h2;
  a2[0] !== i2 ? (h2 = {
    activationConstraint: i2 ? {
      delay: 150,
      tolerance: 5
    } : {
      distance: 5
    }
  }, a2[0] = i2, a2[1] = h2) : h2 = a2[1];
  const y2 = Qt(Ht(Ut, h2));
  let v2;
  a2[2] !== s2 ? (v2 = e2 => {
    s2.trim() || u2(e2.active.id);
  }, a2[2] = s2, a2[3] = v2) : v2 = a2[3];
  const p2 = v2;
  let g2;
  a2[4] !== s2 ? (g2 = e2 => {
    if (s2.trim()) return;
    const {
      over: t2
    } = e2;
    m2(t2 ? t2.id : null);
  }, a2[4] = s2, a2[5] = g2) : g2 = a2[5];
  const x2 = g2;
  let b2;
  a2[6] !== n2 || a2[7] !== s2 || a2[8] !== c2 || a2[9] !== r2 || a2[10] !== i2 || a2[11] !== o2 ? (b2 = e2 => {
    if (s2.trim()) return;
    const {
      active: t2,
      over: l3
    } = e2;
    if (u2(null), m2(null), !l3 || !r2) return;
    const a3 = t2.id,
      d3 = l3.id;
    if (a3 !== d3) {
      if (i2 && c2 && c2.has(a3)) {
        const e3 = [...r2.tracks],
          t3 = e3.filter(e4 => c2.has(e4.id)),
          l4 = e3.filter(e4 => !c2.has(e4.id)),
          n3 = l4.findIndex(e4 => e4.id === d3);
        if (-1 === n3) return;
        const i3 = e3.findIndex(e4 => e4.id === a3) < e3.findIndex(e4 => e4.id === d3) ? n3 + 1 : n3,
          s3 = [...l4.slice(0, i3), ...t3, ...l4.slice(i3)];
        o2 && o2(r2.id, s3).catch(Xl);
      } else {
        const e3 = n2.findIndex(e4 => e4.id === a3),
          t3 = n2.findIndex(e4 => e4.id === d3);
        if (-1 === e3 || -1 === t3) return;
        if (o2) {
          const e4 = r2.tracks.findIndex(e5 => e5.id === a3),
            t4 = r2.tracks.findIndex(e5 => e5.id === d3);
          if (-1 !== e4 && -1 !== t4) {
            const l4 = Wt(r2.tracks, e4, t4);
            o2(r2.id, l4).catch(Vl);
          }
        }
      }
    }
  }, a2[6] = n2, a2[7] = s2, a2[8] = c2, a2[9] = r2, a2[10] = i2, a2[11] = o2, a2[12] = b2) : b2 = a2[12];
  const k2 = b2;
  let S2;
  return a2[13] !== d2 || a2[14] !== f2 || a2[15] !== k2 || a2[16] !== x2 || a2[17] !== p2 || a2[18] !== y2 ? (S2 = {
    sensors: y2,
    activeDragId: d2,
    dragOverId: f2,
    handleDragStart: p2,
    handleDragOver: x2,
    handleDragEnd: k2
  }, a2[13] = d2, a2[14] = f2, a2[15] = k2, a2[16] = x2, a2[17] = p2, a2[18] = y2, a2[19] = S2) : S2 = a2[19], S2;
}
function Vl(e2) {
  Te.error("library", "Failed to update playlist order:", e2);
}
function Xl(e2) {
  Te.error("library", "Failed to update playlist order (batch):", e2);
}
function Yl(e2) {
  return {
    id: e2.id,
    title: e2.title,
    artist: e2.artist,
    duration: e2.duration,
    cover_art: e2.cover_art,
    source: e2.source,
    liked: false,
    added_at: e2.added_at
  };
}
function Jl(e2) {
  return Te.error("library", "Failed to read dislikes:", e2);
}
function Zl(e2) {
  return "track" === e2.item_type;
}
function ea(e2) {
  return e2.lastUpdated;
}
function ta(e2) {
  return e2.unfavorites;
}
function la(e2, t2) {
  if (!t2.trim()) return e2;
  const l2 = t2.toLowerCase().trim();
  return e2.filter(e3 => {
    var t3, a2;
    return (null == (t3 = e3.title) ? void 0 : t3.toLowerCase().includes(l2)) || (null == (a2 = e3.artist) ? void 0 : a2.toLowerCase().includes(l2));
  });
}
function ra({
  songs: t2,
  playlist: l2,
  resetKey: a2,
  like: r2,
  remove: n2
}) {
  const [i2, s2] = e.useState(false),
    [o2, c2] = e.useState(() => new Set()),
    [d2, u2] = e.useState(false),
    f2 = e.useCallback(() => {
      s2(false), c2(new Set());
    }, []);
  e.useEffect(f2, [a2, f2]), e.useEffect(() => {
    if (!i2) return;
    const e2 = e3 => {
      var l3;
      (e3.ctrlKey || e3.metaKey) && "KeyA" === e3.code && ((null == (l3 = e3.target) ? void 0 : l3.closest("input, textarea, [contenteditable]")) || (e3.preventDefault(), c2(new Set(t2.map(e4 => e4.id)))));
    };
    return document.addEventListener("keydown", e2), () => document.removeEventListener("keydown", e2);
  }, [i2, t2]);
  const m2 = e.useCallback((e2, l3) => c2(a3 => function (e3, t3, l4, a4) {
      const r3 = new Set(e3);
      if (!l4 || 0 === e3.size) return r3.has(t3) ? r3.delete(t3) : r3.add(t3), r3;
      const n3 = a4.map(e4 => e4.id),
        i3 = n3.indexOf(t3),
        s3 = Array.from(e3).pop(),
        o3 = s3 ? n3.indexOf(s3) : -1;
      if (-1 === i3 || -1 === o3) return r3.has(t3) ? r3.delete(t3) : r3.add(t3), r3;
      const c3 = Math.min(i3, o3),
        d3 = Math.max(i3, o3);
      for (let u3 = c3; u3 <= d3; u3++) r3.add(n3[u3]);
      return r3;
    }(a3, e2, Boolean(l3), t2)), [t2]),
    h2 = e.useMemo(() => t2.filter(e2 => o2.has(e2.id)), [t2, o2]),
    y2 = t2.length > 0 && o2.size === t2.length;
  return {
    editing: i2,
    selected: o2,
    toggle: m2,
    count: o2.size,
    total: t2.length,
    deleting: d2,
    start: () => s2(true),
    stop: f2,
    selectAll: () => c2(y2 ? new Set() : new Set(t2.map(e2 => e2.id))),
    queue: () => {
      var e2;
      h2.length && (Ze.getState().addMultipleToQueue(h2, {
        groupId: crypto.randomUUID(),
        groupName: null != (e2 = null == l2 ? void 0 : l2.title) ? e2 : "",
        groupCover: null == l2 ? void 0 : l2.cover_art
      }), f2());
    },
    like: r2 && (async () => {
      h2.length && (await r2(h2), f2());
    }),
    remove: n2 && (async () => {
      if (h2.length) {
        u2(true);
        try {
          await n2(h2.map(e2 => e2.id)), f2();
        } finally {
          u2(false);
        }
      }
    })
  };
}
function na(l2, a2) {
  const r2 = t.c(24),
    [n2, i2] = e.useState(""),
    [s2, o2] = e.useState(false);
  let c2;
  r2[0] === Symbol.for("react.memo_cache_sentinel") ? (c2 = new Set(), r2[0] = c2) : c2 = r2[0];
  const [d2, u2] = e.useState(c2);
  let f2, m2, h2;
  r2[1] === Symbol.for("react.memo_cache_sentinel") ? (f2 = () => {
    i2(""), o2(false), u2(new Set());
  }, r2[1] = f2) : f2 = r2[1], r2[2] !== l2 ? (m2 = [l2], r2[2] = l2, r2[3] = m2) : m2 = r2[3], e.useEffect(f2, m2), r2[4] !== n2 || r2[5] !== a2 ? (h2 = la(a2, n2), r2[4] = n2, r2[5] = a2, r2[6] = h2) : h2 = r2[6];
  const y2 = h2;
  let v2;
  r2[7] !== s2 || r2[8] !== a2 ? (v2 = () => {
    if (s2) return o2(false), void u2(new Set());
    u2(function (e2) {
      const t2 = new Map();
      e2.forEach(e3 => {
        const l4 = (e3.title || "").toLowerCase().replace(/\s+/g, "") + "|" + (e3.artist || "").toLowerCase().replace(/\s+/g, "");
        t2.has(l4) || t2.set(l4, []);
        const a3 = t2.get(l4);
        a3 && a3.push(e3.id);
      });
      const l3 = Array.from(t2.values()).filter(e3 => e3.length > 1).flat();
      return new Set(l3);
    }(a2)), o2(true);
  }, r2[7] = s2, r2[8] = a2, r2[9] = v2) : v2 = r2[9];
  const p2 = v2;
  let g2 = y2;
  if (s2) {
    let e2;
    if (r2[10] !== d2 || r2[11] !== g2) {
      let t2;
      r2[13] !== d2 ? (t2 = e3 => d2.has(e3.id), r2[13] = d2, r2[14] = t2) : t2 = r2[14], e2 = g2.filter(t2), r2[10] = d2, r2[11] = g2, r2[12] = e2;
    } else e2 = r2[12];
    g2 = e2;
  }
  const x2 = g2;
  let b2, k2;
  return r2[15] !== s2 || r2[16] !== p2 ? (b2 = {
    active: s2,
    onToggle: p2
  }, r2[15] = s2, r2[16] = p2, r2[17] = b2) : b2 = r2[17], r2[18] !== x2 || r2[19] !== y2 || r2[20] !== n2 || r2[21] !== s2 || r2[22] !== b2 ? (k2 = {
    searchQuery: n2,
    setSearchQuery: i2,
    showDuplicatesOnly: s2,
    localFilteredSongs: y2,
    displayedSongs: x2,
    duplicates: b2
  }, r2[18] = x2, r2[19] = y2, r2[20] = n2, r2[21] = s2, r2[22] = b2, r2[23] = k2) : k2 = r2[23], k2;
}
function ia() {
  var a2;
  const r2 = t.c(82),
    {
      t: n2
    } = be(),
    i2 = Ze(ca),
    s2 = Ve(oa),
    {
      selectedPlaylist: o2,
      filteredPlaylistSongs: c2,
      loadingFavorites: d2
    } = il(),
    u2 = Ve(sa),
    {
      onReloadPlaylist: f2,
      updatePlaylistOrder: m2
    } = sl(),
    [h2, y2] = e.useState(false),
    v2 = function (l2) {
      const a3 = t.c(7);
      let r3;
      a3[0] === Symbol.for("react.memo_cache_sentinel") ? (r3 = [], a3[0] = r3) : r3 = a3[0];
      const [n3, i3] = e.useState(r3),
        s3 = et(ta),
        o3 = et(ea);
      let c3, d3;
      return a3[1] !== l2 ? (c3 = () => {
        if (!l2) return;
        let e2 = true;
        return tt.unfavorites.list().then(t2 => {
          e2 && i3(t2.filter(Zl).map(Yl));
        }).catch(Jl), () => {
          e2 = false;
        };
      }, a3[1] = l2, a3[2] = c3) : c3 = a3[2], a3[3] !== l2 || a3[4] !== o3 || a3[5] !== s3 ? (d3 = [l2, s3, o3], a3[3] = l2, a3[4] = o3, a3[5] = s3, a3[6] = d3) : d3 = a3[6], e.useEffect(c3, d3), n3;
    }(h2),
    {
      searchQuery: p2,
      setSearchQuery: g2,
      showDuplicatesOnly: x2,
      localFilteredSongs: b2,
      displayedSongs: k2,
      duplicates: S2
    } = na(h2 ? "dislikes" : null == o2 ? void 0 : o2.id, h2 ? v2 : c2),
    w2 = e.useRef(null),
    j2 = `${null == o2 ? void 0 : o2.id}:${h2}`;
  let P2, _2;
  r2[0] !== s2 || r2[1] !== h2 ? (P2 = async e2 => {
    if (!h2) return void (await s2(e2));
    const {
      removeFromUnfavorited: t2
    } = et.getState();
    for (const l2 of e2) await t2(l2);
  }, r2[0] = s2, r2[1] = h2, r2[2] = P2) : P2 = r2[2], r2[3] !== k2 || r2[4] !== o2 || r2[5] !== j2 || r2[6] !== P2 ? (_2 = {
    songs: k2,
    playlist: o2,
    resetKey: j2,
    remove: P2
  }, r2[3] = k2, r2[4] = o2, r2[5] = j2, r2[6] = P2, r2[7] = _2) : _2 = r2[7];
  const C2 = ra(_2);
  let N2;
  r2[8] !== k2 || r2[9] !== f2 || r2[10] !== p2 || r2[11] !== o2 || r2[12] !== n2 || r2[13] !== m2 ? (N2 = {
    selectedPlaylist: o2,
    displayedSongs: k2,
    selectionMode: false,
    searchQuery: p2,
    updatePlaylistOrder: m2,
    onReloadPlaylist: f2,
    t: n2
  }, r2[8] = k2, r2[9] = f2, r2[10] = p2, r2[11] = o2, r2[12] = n2, r2[13] = m2, r2[14] = N2) : N2 = r2[14];
  const {
    sensors: T2,
    activeDragId: I2,
    handleDragStart: E2,
    handleDragOver: F2,
    handleDragEnd: L2
  } = Gl(N2);
  let R2, D2, A2, O2, M2, z2, B2, Q2, H2, U2, W2, q2, K2;
  if (r2[15] !== I2 || r2[16] !== i2 || r2[17] !== v2 || r2[18] !== k2 || r2[19] !== S2 || r2[20] !== C2 || r2[21] !== u2 || r2[22] !== L2 || r2[23] !== F2 || r2[24] !== E2 || r2[25] !== d2 || r2[26] !== b2 || r2[27] !== p2 || r2[28] !== o2 || r2[29] !== T2 || r2[30] !== g2 || r2[31] !== h2 || r2[32] !== x2 || r2[33] !== n2) {
    O2 = Symbol.for("react.early_return_sentinel");
    e: {
      const e2 = () => p2.trim() && 0 === b2.length ? l.jsx(cl, {
        variant: "no-search"
      }) : x2 && 0 === k2.length ? l.jsx(cl, {
        variant: "no-duplicates"
      }) : h2 ? 0 === v2.length ? l.jsx(cl, {
        variant: "empty-playlist",
        playlistType: "dislikes"
      }) : l.jsx(ql, {
        scrollRef: w2,
        displayedSongs: k2,
        dislikes: true,
        selectionOps: {
          isEditing: C2.editing,
          selectedIds: C2.selected,
          onToggleSelection: C2.toggle
        }
      }) : o2 && o2.tracks && 0 !== o2.tracks.length ? l.jsx(ql, {
        scrollRef: w2,
        displayedSongs: k2,
        dragOps: {
          sensors: T2,
          activeDragId: I2,
          handleDragStart: E2,
          handleDragOver: F2,
          handleDragEnd: L2,
          disabled: Boolean(p2.trim()) || x2
        },
        selectionOps: {
          isEditing: C2.editing,
          selectedIds: C2.selected,
          onToggleSelection: C2.toggle
        }
      }) : l.jsx(cl, {
        variant: "empty-playlist",
        playlistType: "favorites"
      });
      if (!o2) {
        O2 = null;
        break e;
      }
      const t2 = !h2 && !(null == (a2 = o2.tracks) ? void 0 : a2.length) && (d2 || u2 > 0);
      let s3, c3, f3;
      D2 = "flex-1 overflow-hidden flex flex-col ", r2[44] !== v2 || r2[45] !== o2 || r2[46] !== h2 || r2[47] !== n2 ? (s3 = h2 ? {
        ...o2,
        title: n2("library.dislikes.title"),
        tracks: v2
      } : o2, r2[44] = v2, r2[45] = o2, r2[46] = h2, r2[47] = n2, r2[48] = s3) : s3 = r2[48], r2[49] !== h2 ? (c3 = () => y2(!h2), r2[49] = h2, r2[50] = c3) : c3 = r2[50], r2[51] !== h2 || r2[52] !== c3 ? (f3 = {
        active: h2,
        onToggle: c3
      }, r2[51] = h2, r2[52] = c3, r2[53] = f3) : f3 = r2[53];
      const m3 = p2 || h2 ? k2.length : u2;
      let j3;
      r2[54] !== i2 || r2[55] !== b2 || r2[56] !== o2 ? (j3 = () => aa(i2, o2, b2), r2[54] = i2, r2[55] = b2, r2[56] = o2, r2[57] = j3) : j3 = r2[57], r2[58] !== S2 || r2[59] !== C2 || r2[60] !== p2 || r2[61] !== g2 || r2[62] !== s3 || r2[63] !== f3 || r2[64] !== m3 || r2[65] !== j3 ? (A2 = l.jsx(zl, {
        scrollContainerRef: w2,
        selectedPlaylist: s3,
        dislikes: f3,
        searchQuery: p2,
        onSearchChange: g2,
        edit: C2,
        totalTracksCount: m3,
        onAddToQueue: j3,
        duplicates: S2
      }), r2[58] = S2, r2[59] = C2, r2[60] = p2, r2[61] = g2, r2[62] = s3, r2[63] = f3, r2[64] = m3, r2[65] = j3, r2[66] = A2) : A2 = r2[66], U2 = "flex-grow flex flex-col overflow-hidden px-0 min-h-0", R2 = Rt, M2 = h2 ? "dislikes" : o2.id, z2 = t2, r2[67] === Symbol.for("react.memo_cache_sentinel") ? (B2 = l.jsx($, {}), r2[67] = B2) : B2 = r2[67], Q2 = "flex-1 flex flex-col overflow-hidden min-h-0", H2 = e2();
    }
    r2[15] = I2, r2[16] = i2, r2[17] = v2, r2[18] = k2, r2[19] = S2, r2[20] = C2, r2[21] = u2, r2[22] = L2, r2[23] = F2, r2[24] = E2, r2[25] = d2, r2[26] = b2, r2[27] = p2, r2[28] = o2, r2[29] = T2, r2[30] = g2, r2[31] = h2, r2[32] = x2, r2[33] = n2, r2[34] = R2, r2[35] = D2, r2[36] = A2, r2[37] = O2, r2[38] = M2, r2[39] = z2, r2[40] = B2, r2[41] = Q2, r2[42] = H2, r2[43] = U2;
  } else R2 = r2[34], D2 = r2[35], A2 = r2[36], O2 = r2[37], M2 = r2[38], z2 = r2[39], B2 = r2[40], Q2 = r2[41], H2 = r2[42], U2 = r2[43];
  return O2 !== Symbol.for("react.early_return_sentinel") ? O2 : (r2[68] !== R2 || r2[69] !== M2 || r2[70] !== z2 || r2[71] !== B2 || r2[72] !== Q2 || r2[73] !== H2 ? (W2 = l.jsx(R2, {
    contentKey: M2,
    pending: z2,
    placeholder: B2,
    className: Q2,
    children: H2
  }), r2[68] = R2, r2[69] = M2, r2[70] = z2, r2[71] = B2, r2[72] = Q2, r2[73] = H2, r2[74] = W2) : W2 = r2[74], r2[75] !== W2 || r2[76] !== U2 ? (q2 = l.jsx("div", {
    className: U2,
    children: W2
  }), r2[75] = W2, r2[76] = U2, r2[77] = q2) : q2 = r2[77], r2[78] !== D2 || r2[79] !== A2 || r2[80] !== q2 ? (K2 = l.jsxs("div", {
    className: D2,
    children: [A2, q2]
  }), r2[78] = D2, r2[79] = A2, r2[80] = q2, r2[81] = K2) : K2 = r2[81], K2);
}
function sa(e2) {
  return e2.total;
}
function oa(e2) {
  return e2.removeMultipleFromFavorites;
}
function ca(e2) {
  return e2.addMultipleToQueue;
}
function da(e2) {
  const a2 = t.c(20),
    {
      onFiles: r2,
      onFolder: n2,
      info: i2
    } = e2,
    {
      t: s2
    } = be();
  let o2, c2, d2, u2, f2, m2, h2, y2, v2;
  return a2[0] === Symbol.for("react.memo_cache_sentinel") ? (o2 = l.jsx(ke.add, {
    className: "h-4 w-4"
  }), a2[0] = o2) : o2 = a2[0], a2[1] !== s2 ? (c2 = s2("player.local_track.add.files"), a2[1] = s2, a2[2] = c2) : c2 = a2[2], a2[3] !== r2 || a2[4] !== c2 ? (d2 = l.jsx(je, {
    onClick: r2,
    leadingIcon: o2,
    className: "h-10 px-5 rounded-xl font-medium shadow-xs",
    children: c2
  }), a2[3] = r2, a2[4] = c2, a2[5] = d2) : d2 = a2[5], a2[6] === Symbol.for("react.memo_cache_sentinel") ? (u2 = l.jsx(He, {
    className: "h-4 w-4"
  }), a2[6] = u2) : u2 = a2[6], a2[7] !== s2 ? (f2 = s2("player.local_track.add.folder"), a2[7] = s2, a2[8] = f2) : f2 = a2[8], a2[9] !== n2 || a2[10] !== f2 ? (m2 = l.jsx(je, {
    variant: "outline",
    onClick: n2,
    leadingIcon: u2,
    className: "h-10 px-5 rounded-xl font-medium bg-transparent",
    children: f2
  }), a2[9] = n2, a2[10] = f2, a2[11] = m2) : m2 = a2[11], a2[12] !== d2 || a2[13] !== m2 ? (h2 = l.jsxs("div", {
    className: "flex w-[220px] flex-col items-stretch gap-2",
    children: [d2, m2]
  }), a2[12] = d2, a2[13] = m2, a2[14] = h2) : h2 = a2[14], a2[15] !== i2 ? (y2 = i2 && l.jsx("div", {
    className: "animate-in fade-in duration-200",
    children: i2
  }), a2[15] = i2, a2[16] = y2) : y2 = a2[16], a2[17] !== h2 || a2[18] !== y2 ? (v2 = l.jsx(cl, {
    variant: "empty-playlist",
    playlistType: "offline",
    children: l.jsxs("div", {
      className: "flex flex-col items-center gap-3 select-none pt-2",
      children: [h2, y2]
    })
  }), a2[17] = h2, a2[18] = y2, a2[19] = v2) : v2 = a2[19], v2;
}
function ua(e2) {
  const a2 = t.c(17),
    {
      current: r2,
      limit: n2
    } = e2,
    {
      t: i2,
      currentLanguage: s2
    } = be(),
    o2 = -1 === n2,
    c2 = o2 ? 0 : n2;
  let d2;
  a2[0] !== s2 || a2[1] !== c2 ? (d2 = lt(c2, s2), a2[0] = s2, a2[1] = c2, a2[2] = d2) : d2 = a2[2];
  const u2 = `common.track.unit.${d2}`;
  let f2;
  a2[3] !== i2 || a2[4] !== u2 ? (f2 = i2(u2), a2[3] = i2, a2[4] = u2, a2[5] = f2) : f2 = a2[5];
  const m2 = f2;
  let h2, y2;
  a2[6] !== r2 ? (h2 = l.jsx("span", {
    children: r2
  }), a2[6] = r2, a2[7] = h2) : h2 = a2[7], a2[8] === Symbol.for("react.memo_cache_sentinel") ? (y2 = l.jsx("span", {
    className: "text-muted-foreground/35",
    children: "/"
  }), a2[8] = y2) : y2 = a2[8];
  const v2 = o2 ? "\u221E" : n2;
  let p2, g2, x2;
  return a2[9] !== v2 ? (p2 = l.jsx("span", {
    children: v2
  }), a2[9] = v2, a2[10] = p2) : p2 = a2[10], a2[11] !== m2 ? (g2 = l.jsx("span", {
    className: "text-muted-foreground/50 ml-0.5",
    children: m2
  }), a2[11] = m2, a2[12] = g2) : g2 = a2[12], a2[13] !== h2 || a2[14] !== p2 || a2[15] !== g2 ? (x2 = l.jsxs("div", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/35 border border-border/30 text-caption font-medium text-muted-foreground/70 select-none",
    children: [h2, y2, p2, g2]
  }), a2[13] = h2, a2[14] = p2, a2[15] = g2, a2[16] = x2) : x2 = a2[16], x2;
}
function fa(e2) {
  const a2 = t.c(17),
    {
      localTracks: r2,
      offlineTracksInfo: n2,
      onSelectFiles: i2,
      onSelectFolder: s2,
      onRemoveTrack: o2,
      onUpdateTrack: c2,
      onSelectCover: d2
    } = e2;
  if (0 === r2.length) {
    let e3, t2;
    return a2[0] !== n2 ? (e3 = n2 && l.jsx(ua, {
      current: n2.current,
      limit: n2.limit
    }), a2[0] = n2, a2[1] = e3) : e3 = a2[1], a2[2] !== i2 || a2[3] !== s2 || a2[4] !== e3 ? (t2 = l.jsx("div", {
      className: "flex-grow flex flex-col items-center justify-center px-12 pb-12",
      children: l.jsx(da, {
        onFiles: i2,
        onFolder: s2,
        info: e3
      })
    }), a2[2] = i2, a2[3] = s2, a2[4] = e3, a2[5] = t2) : t2 = a2[5], t2;
  }
  let u2, f2;
  if (a2[6] !== r2 || a2[7] !== o2 || a2[8] !== d2 || a2[9] !== c2) {
    let e3;
    a2[11] !== o2 || a2[12] !== d2 || a2[13] !== c2 ? (e3 = (e4, t2) => {
      const a3 = {
        id: e4.filePath,
        title: e4.title,
        artist: e4.artist,
        album: e4.album,
        duration: e4.duration,
        cover_art: e4.cover,
        liked: false,
        source: "local",
        path: e4.filePath
      };
      return l.jsx(O, {
        song: a3,
        index: t2,
        variant: "library",
        showAddToPlaylist: false,
        showContextMenu: false,
        showDeleteButton: true,
        onDelete: () => o2(t2),
        className: "mb-1 w-full",
        editableTitle: e4.title,
        editableArtist: e4.artist,
        onEditTitle: e5 => c2(t2, "title", e5),
        onEditArtist: e5 => c2(t2, "artist", e5),
        onCoverClick: () => d2(t2)
      }, e4.filePath);
    }, a2[11] = o2, a2[12] = d2, a2[13] = c2, a2[14] = e3) : e3 = a2[14], u2 = r2.map(e3), a2[6] = r2, a2[7] = o2, a2[8] = d2, a2[9] = c2, a2[10] = u2;
  } else u2 = a2[10];
  return a2[15] !== u2 ? (f2 = l.jsx(Q, {
    className: "flex-grow px-2",
    children: l.jsx("div", {
      className: "py-1 pb-4",
      children: u2
    })
  }), a2[15] = u2, a2[16] = f2) : f2 = a2[16], f2;
}
function ma({
  isAddingMode: t2,
  setIsAddingMode: l2,
  premiumLevel: a2,
  isOffline: r2,
  selectedPlaylist: n2,
  onReloadPlaylist: i2
}) {
  const {
      t: s2
    } = be(),
    [o2, c2] = e.useState([]),
    [d2, u2] = e.useState(false),
    [f2, m2] = e.useState(false),
    [h2, y2] = e.useState(null);
  e.useEffect(() => {
    t2 && (async () => {
      try {
        const e2 = await at.checkOfflineTracksLimit(a2, r2);
        y2({
          current: e2.currentCount,
          limit: e2.limit
        });
      } catch (e2) {
        Te.error("library", "Error loading offline tracks info:", e2);
      }
    })();
  }, [t2, a2, r2]);
  const v2 = e.useCallback(async e2 => {
      if (0 === e2.length) return;
      u2(true);
      const t3 = [];
      try {
        for (const a3 of e2) {
          const e3 = a3.split(/[\\/]/).pop() || "",
            r3 = e3.replace(/\.[^/.]+$/, "");
          try {
            const l3 = await at.readMetadata(a3);
            t3.push({
              filePath: a3,
              fileName: e3,
              title: l3.title || r3,
              artist: l3.artist || s2("track.unknown_artist"),
              album: l3.album || "",
              duration: l3.duration || 180,
              cover: l3.cover || void 0
            });
          } catch (l3) {
            Te.warn("library", "Failed to read metadata:", a3, l3);
            let n3 = r3,
              i3 = s2("track.unknown_artist");
            const o3 = r3.indexOf(" - ");
            o3 > 0 && (i3 = r3.substring(0, o3), n3 = r3.substring(o3 + 3)), t3.push({
              filePath: a3,
              fileName: e3,
              title: n3,
              artist: i3,
              album: "",
              duration: 180,
              cover: void 0
            });
          }
        }
        t3.length > 0 && c2(e3 => [...e3, ...t3]);
      } catch (a3) {
        Te.error("library", "Error processing files:", a3);
      } finally {
        u2(false);
      }
    }, [s2]),
    p2 = !(!h2 || -1 === h2.limit) && h2.current + o2.length > h2.limit;
  return e.useEffect(() => {
    if (!t2) return;
    let e2,
      l3 = true,
      a3 = false;
    return (async () => {
      try {
        const r3 = rt(),
          n3 = await r3.onDragDropEvent(async e3 => {
            if (t2 && !a3 && "drop" === e3.payload.type) {
              a3 = true;
              const t3 = e3.payload.paths,
                n4 = [];
              try {
                const {
                    readDir: e4,
                    stat: a4
                  } = await nt(async () => {
                    const {
                      readDir: e5,
                      stat: t4
                    } = await import("./globals-Bc3qFUyf.js").then(e6 => e6.gB);
                    return {
                      readDir: e5,
                      stat: t4
                    };
                  }, __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url),
                  r4 = async t4 => {
                    try {
                      if ((await a4(t4)).isDirectory) {
                        const l4 = await e4(t4);
                        for (const e5 of l4) await r4(`${t4}/${e5.name}`);
                      } else t4.match(/\.(mp3|wav|ogg|flac|m4a)$/i) && n4.push(t4);
                    } catch (l4) {
                      Te.error("library", "Error scanning path:", t4, l4);
                    }
                  };
                for (const l4 of t3) await r4(l4);
                n4.length > 0 && l3 && (await v2(n4));
              } catch (r4) {
                Te.error("library", "Error processing dropped files:", r4);
              } finally {
                a3 = false;
              }
            }
          });
        l3 ? e2 = n3 : n3();
      } catch (r3) {
        Te.error("library", "Error setting up drag and drop listener:", r3);
      }
    })(), () => {
      l3 = false, e2 && e2();
    };
  }, [t2, v2]), {
    localTracks: o2,
    setLocalTracks: c2,
    isLoadingMetadata: d2,
    isAddingTracks: f2,
    offlineTracksInfo: h2,
    isLimitReached: p2,
    handleSelectFiles: async () => {
      try {
        const {
            open: e2
          } = await nt(async () => {
            const {
              open: e3
            } = await import("./globals-Bc3qFUyf.js").then(e4 => e4.gA);
            return {
              open: e3
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url),
          t3 = await e2({
            filters: [{
              name: "Audio Files",
              extensions: ["mp3", "wav", "ogg", "flac", "m4a"]
            }],
            multiple: true
          });
        if (!t3) return;
        const a3 = Array.isArray(t3) ? t3 : [t3];
        if (0 === a3.length) return;
        l2(true), await v2(a3);
      } catch (e2) {
        Te.error("library", "Error selecting files:", e2);
      }
    },
    handleSelectFolder: async () => {
      try {
        const {
            open: t3
          } = await nt(async () => {
            const {
              open: e2
            } = await import("./globals-Bc3qFUyf.js").then(e3 => e3.gA);
            return {
              open: e2
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url),
          a3 = await t3({
            directory: true,
            multiple: false
          });
        if (!a3 || "string" != typeof a3) return;
        l2(true), u2(true);
        try {
          const {
              readDir: e2
            } = await nt(async () => {
              const {
                readDir: e3
              } = await import("./globals-Bc3qFUyf.js").then(e4 => e4.gB);
              return {
                readDir: e3
              };
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url),
            t4 = async l4 => {
              const a4 = await e2(l4);
              let r3 = [];
              for (const e3 of a4) {
                const a5 = `${l4}/${e3.name}`;
                e3.isDirectory ? r3 = [...r3, ...(await t4(a5))] : e3.name.match(/\.(mp3|wav|ogg|flac|m4a)$/i) && r3.push(a5);
              }
              return r3;
            },
            l3 = await t4(a3);
          l3.length > 0 && (await v2(l3));
        } catch (e2) {
          Te.error("library", "Error scanning folder:", e2);
        } finally {
          u2(false);
        }
      } catch (t3) {
        Te.error("library", "Error selecting folder:", t3);
      }
    },
    handleRemoveTrack: e2 => {
      c2(t3 => t3.filter((t4, l3) => l3 !== e2));
    },
    handleUpdateTrack: (e2, t3, l3) => {
      c2(a3 => a3.map((a4, r3) => r3 === e2 ? {
        ...a4,
        [t3]: l3
      } : a4));
    },
    handleSelectCover: async e2 => {
      var t3;
      try {
        const l3 = await it({
          filters: [{
            name: "Images",
            extensions: ["jpg", "jpeg", "png", "gif", "webp"]
          }],
          multiple: false
        });
        if (l3 && "string" == typeof l3) {
          const {
              readFile: a3
            } = await nt(async () => {
              const {
                readFile: e3
              } = await import("./globals-Bc3qFUyf.js").then(e4 => e4.gB);
              return {
                readFile: e3
              };
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url),
            r3 = await a3(l3),
            n3 = btoa(String.fromCharCode(...r3)),
            i3 = null == (t3 = l3.split(".").pop()) ? void 0 : t3.toLowerCase(),
            s3 = `data:${"png" === i3 ? "image/png" : "gif" === i3 ? "image/gif" : "image/jpeg"};base64,${n3}`,
            d3 = [...o2];
          d3[e2].cover = s3, c2(d3);
        }
      } catch (l3) {
        Te.error("library", "Error selecting cover:", l3);
      }
    },
    handleAddTracks: async () => {
      if (h2 && 0 !== o2.length && !(-1 !== h2.limit && h2.current + o2.length > h2.limit)) {
        m2(true);
        try {
          let t3 = 0,
            a3 = 0;
          for (const l3 of o2) try {
            await at.addFile(l3.filePath, {
              title: l3.title || s2("player.local_track.unknown_title"),
              artist: l3.artist || s2("player.local_track.unknown_artist"),
              album: l3.album || void 0,
              duration: l3.duration,
              cover: l3.cover || void 0
            }), t3++;
          } catch (e2) {
            Te.error("library", "Failed to add track:", l3.filePath, e2), a3++;
          }
          Te.info("library", `Added ${t3} tracks, ${a3} failed`), i2 && n2 && (await i2(n2)), c2([]), l2(false);
        } catch (t3) {
          Te.error("library", "Error adding tracks:", t3);
        } finally {
          m2(false);
        }
      }
    }
  };
}
function ha() {
  const a2 = t.c(98),
    {
      t: r2
    } = be(),
    n2 = e.useRef(null),
    {
      selectedPlaylist: i2,
      filteredPlaylistSongs: s2,
      isOffline: o2,
      premiumLevel: c2
    } = il(),
    {
      handleRemoveTracksBatch: d2,
      handleSortClick: u2,
      updatePlaylistOrder: f2,
      onReloadPlaylist: m2,
      handlePlayPlaylist: h2
    } = sl(),
    [y2, v2] = e.useState(""),
    [p2, g2] = e.useState(false),
    x2 = Se(va),
    b2 = Ze(ya);
  let k2;
  a2[0] !== p2 || a2[1] !== o2 || a2[2] !== m2 || a2[3] !== c2 || a2[4] !== i2 ? (k2 = {
    isAddingMode: p2,
    setIsAddingMode: g2,
    premiumLevel: c2,
    isOffline: o2,
    selectedPlaylist: i2,
    onReloadPlaylist: m2
  }, a2[0] = p2, a2[1] = o2, a2[2] = m2, a2[3] = c2, a2[4] = i2, a2[5] = k2) : k2 = a2[5];
  const S2 = ma(k2);
  let w2;
  a2[6] !== S2 ? (w2 = () => {
    g2(false), S2.setLocalTracks([]);
  }, a2[6] = S2, a2[7] = w2) : w2 = a2[7];
  const j2 = null == i2 ? void 0 : i2.id;
  let P2, _2, C2, N2;
  a2[8] !== j2 ? (P2 = [j2], a2[8] = j2, a2[9] = P2) : P2 = a2[9], e.useEffect(w2, P2), a2[10] !== x2 ? (_2 = () => {
    x2();
  }, C2 = [x2], a2[10] = x2, a2[11] = _2, a2[12] = C2) : (_2 = a2[11], C2 = a2[12]), e.useEffect(_2, C2), a2[13] !== s2 || a2[14] !== y2 ? (N2 = la(s2, y2), a2[13] = s2, a2[14] = y2, a2[15] = N2) : N2 = a2[15];
  const T2 = N2,
    I2 = T2,
    E2 = null == i2 ? void 0 : i2.id;
  let F2, L2;
  a2[16] !== d2 ? (F2 = async e2 => {
    await d2("offline", e2);
  }, a2[16] = d2, a2[17] = F2) : F2 = a2[17], a2[18] !== I2 || a2[19] !== i2 || a2[20] !== E2 || a2[21] !== F2 ? (L2 = {
    songs: I2,
    playlist: i2,
    resetKey: E2,
    remove: F2
  }, a2[18] = I2, a2[19] = i2, a2[20] = E2, a2[21] = F2, a2[22] = L2) : L2 = a2[22];
  const R2 = ra(L2);
  let D2;
  a2[23] !== I2 || a2[24] !== m2 || a2[25] !== y2 || a2[26] !== i2 || a2[27] !== r2 || a2[28] !== f2 ? (D2 = {
    selectedPlaylist: i2,
    displayedSongs: I2,
    selectionMode: false,
    searchQuery: y2,
    updatePlaylistOrder: f2,
    onReloadPlaylist: m2,
    t: r2
  }, a2[23] = I2, a2[24] = m2, a2[25] = y2, a2[26] = i2, a2[27] = r2, a2[28] = f2, a2[29] = D2) : D2 = a2[29];
  const {
    sensors: A2,
    activeDragId: O2,
    handleDragStart: M2,
    handleDragOver: z2,
    handleDragEnd: B2
  } = Gl(D2);
  if (!i2) return null;
  let $2;
  a2[30] !== p2 || a2[31] !== S2 ? ($2 = p2 ? {
    isLocalImporting: true,
    localImportCount: S2.localTracks.length,
    offlineTracksInfo: S2.offlineTracksInfo,
    isLimitReached: Boolean(S2.isLimitReached),
    onConfirmImport: S2.handleAddTracks,
    isConfirmingImport: S2.isAddingTracks,
    onCancelLocalImport: () => {
      g2(false), S2.setLocalTracks([]);
    },
    onAddMoreFiles: S2.handleSelectFiles,
    onAddMoreFolder: S2.handleSelectFolder,
    isLoadingLocalMetadata: S2.isLoadingMetadata
  } : {}, a2[30] = p2, a2[31] = S2, a2[32] = $2) : $2 = a2[32];
  const Q2 = $2;
  if (y2.trim() && 0 === T2.length) {
    let e2, t2, r3, s3;
    return a2[33] !== b2 || a2[34] !== T2 || a2[35] !== i2 ? (e2 = () => aa(b2, i2, T2), a2[33] = b2, a2[34] = T2, a2[35] = i2, a2[36] = e2) : e2 = a2[36], a2[37] !== h2 || a2[38] !== u2 || a2[39] !== Q2 || a2[40] !== T2 || a2[41] !== S2.handleSelectFiles || a2[42] !== S2.handleSelectFolder || a2[43] !== y2 || a2[44] !== i2 || a2[45] !== e2 ? (t2 = l.jsx(zl, {
      selectedPlaylist: i2,
      localFilteredSongs: T2,
      handlePlayPlaylist: h2,
      searchQuery: y2,
      onSearchChange: v2,
      onAddToQueue: e2,
      onSortClick: u2,
      onAddFiles: S2.handleSelectFiles,
      onAddFolder: S2.handleSelectFolder,
      scrollContainerRef: n2,
      ...Q2
    }), a2[37] = h2, a2[38] = u2, a2[39] = Q2, a2[40] = T2, a2[41] = S2.handleSelectFiles, a2[42] = S2.handleSelectFolder, a2[43] = y2, a2[44] = i2, a2[45] = e2, a2[46] = t2) : t2 = a2[46], a2[47] === Symbol.for("react.memo_cache_sentinel") ? (r3 = l.jsx("div", {
      className: "flex-grow flex flex-col overflow-hidden px-6",
      children: l.jsx(cl, {
        variant: "no-search"
      })
    }), a2[47] = r3) : r3 = a2[47], a2[48] !== t2 ? (s3 = l.jsx(l.Fragment, {
      children: l.jsxs("div", {
        className: "flex-1 overflow-hidden flex flex-col",
        children: [t2, r3]
      })
    }), a2[48] = t2, a2[49] = s3) : s3 = a2[49], s3;
  }
  if (0 === i2.tracks.length && !p2) {
    let e2, t2, r3, s3;
    return a2[50] !== R2 || a2[51] !== h2 || a2[52] !== T2 || a2[53] !== S2.handleSelectFiles || a2[54] !== S2.handleSelectFolder || a2[55] !== i2 ? (e2 = l.jsx(zl, {
      selectedPlaylist: i2,
      localFilteredSongs: T2,
      handlePlayPlaylist: h2,
      edit: R2,
      onAddFiles: S2.handleSelectFiles,
      onAddFolder: S2.handleSelectFolder,
      scrollContainerRef: n2
    }), a2[50] = R2, a2[51] = h2, a2[52] = T2, a2[53] = S2.handleSelectFiles, a2[54] = S2.handleSelectFolder, a2[55] = i2, a2[56] = e2) : e2 = a2[56], a2[57] !== S2.offlineTracksInfo ? (t2 = S2.offlineTracksInfo && l.jsx(ua, {
      current: S2.offlineTracksInfo.current,
      limit: S2.offlineTracksInfo.limit
    }), a2[57] = S2.offlineTracksInfo, a2[58] = t2) : t2 = a2[58], a2[59] !== S2.handleSelectFiles || a2[60] !== S2.handleSelectFolder || a2[61] !== t2 ? (r3 = l.jsx("div", {
      className: "flex-grow flex flex-col items-center justify-center px-6",
      children: l.jsx(da, {
        onFiles: S2.handleSelectFiles,
        onFolder: S2.handleSelectFolder,
        info: t2
      })
    }), a2[59] = S2.handleSelectFiles, a2[60] = S2.handleSelectFolder, a2[61] = t2, a2[62] = r3) : r3 = a2[62], a2[63] !== e2 || a2[64] !== r3 ? (s3 = l.jsx(l.Fragment, {
      children: l.jsxs("div", {
        className: "flex-1 overflow-hidden flex flex-col",
        children: [e2, r3]
      })
    }), a2[63] = e2, a2[64] = r3, a2[65] = s3) : s3 = a2[65], s3;
  }
  let H2, U2, W2, q2;
  return a2[66] !== b2 || a2[67] !== T2 || a2[68] !== i2 ? (H2 = () => aa(b2, i2, T2), a2[66] = b2, a2[67] = T2, a2[68] = i2, a2[69] = H2) : H2 = a2[69], a2[70] !== R2 || a2[71] !== Q2 || a2[72] !== S2.handleSelectFiles || a2[73] !== S2.handleSelectFolder || a2[74] !== y2 || a2[75] !== i2 || a2[76] !== H2 ? (U2 = l.jsx(zl, {
    selectedPlaylist: i2,
    searchQuery: y2,
    onSearchChange: v2,
    edit: R2,
    onAddToQueue: H2,
    onAddFiles: S2.handleSelectFiles,
    onAddFolder: S2.handleSelectFolder,
    scrollContainerRef: n2,
    ...Q2
  }), a2[70] = R2, a2[71] = Q2, a2[72] = S2.handleSelectFiles, a2[73] = S2.handleSelectFolder, a2[74] = y2, a2[75] = i2, a2[76] = H2, a2[77] = U2) : U2 = a2[77], a2[78] !== O2 || a2[79] !== I2 || a2[80] !== R2 || a2[81] !== B2 || a2[82] !== z2 || a2[83] !== M2 || a2[84] !== p2 || a2[85] !== S2.handleRemoveTrack || a2[86] !== S2.handleSelectCover || a2[87] !== S2.handleSelectFiles || a2[88] !== S2.handleSelectFolder || a2[89] !== S2.handleUpdateTrack || a2[90] !== S2.localTracks || a2[91] !== S2.offlineTracksInfo || a2[92] !== y2 || a2[93] !== A2 ? (W2 = l.jsx("div", {
    className: "flex-grow flex flex-col overflow-hidden min-h-0",
    children: p2 ? l.jsx(fa, {
      localTracks: S2.localTracks,
      offlineTracksInfo: S2.offlineTracksInfo,
      onSelectFiles: S2.handleSelectFiles,
      onSelectFolder: S2.handleSelectFolder,
      onRemoveTrack: S2.handleRemoveTrack,
      onUpdateTrack: S2.handleUpdateTrack,
      onSelectCover: S2.handleSelectCover
    }) : l.jsx(ql, {
      displayedSongs: I2,
      dragOps: {
        sensors: A2,
        activeDragId: O2,
        handleDragStart: M2,
        handleDragOver: z2,
        handleDragEnd: B2,
        disabled: Boolean(y2.trim())
      },
      selectionOps: {
        isEditing: R2.editing,
        selectedIds: R2.selected,
        onToggleSelection: R2.toggle
      },
      scrollRef: n2
    })
  }), a2[78] = O2, a2[79] = I2, a2[80] = R2, a2[81] = B2, a2[82] = z2, a2[83] = M2, a2[84] = p2, a2[85] = S2.handleRemoveTrack, a2[86] = S2.handleSelectCover, a2[87] = S2.handleSelectFiles, a2[88] = S2.handleSelectFolder, a2[89] = S2.handleUpdateTrack, a2[90] = S2.localTracks, a2[91] = S2.offlineTracksInfo, a2[92] = y2, a2[93] = A2, a2[94] = W2) : W2 = a2[94], a2[95] !== U2 || a2[96] !== W2 ? (q2 = l.jsx(l.Fragment, {
    children: l.jsxs("div", {
      className: "flex-1 overflow-hidden flex flex-col ",
      children: [U2, W2]
    })
  }), a2[95] = U2, a2[96] = W2, a2[97] = q2) : q2 = a2[97], q2;
}
function ya(e2) {
  return e2.addMultipleToQueue;
}
function va(e2) {
  return e2.loadCache;
}
function pa() {
  var a2, r2, n2, i2;
  const s2 = t.c(83),
    {
      t: o2
    } = be(),
    {
      addMultipleToFavorites: c2
    } = st(),
    d2 = Ze(ga),
    {
      selectedPlaylist: u2,
      filteredPlaylistSongs: f2,
      isLoading: m2,
      isPlaylistLoading: h2
    } = il(),
    {
      handleRemoveTracksBatch: y2,
      onReloadPlaylist: v2,
      onRenamePlaylist: p2,
      updatePlaylistOrder: g2
    } = sl(),
    x2 = e.useRef(null),
    {
      searchQuery: b2,
      setSearchQuery: k2,
      showDuplicatesOnly: S2,
      localFilteredSongs: w2,
      displayedSongs: j2,
      duplicates: P2
    } = na(null == u2 ? void 0 : u2.id, f2),
    _2 = null == u2 ? void 0 : u2.id;
  let C2, N2, T2;
  s2[0] !== c2 ? (C2 = async e2 => {
    await c2(e2);
  }, s2[0] = c2, s2[1] = C2) : C2 = s2[1], s2[2] !== y2 || s2[3] !== u2 ? (N2 = async e2 => {
    u2 && (await y2(u2.id, e2));
  }, s2[2] = y2, s2[3] = u2, s2[4] = N2) : N2 = s2[4], s2[5] !== j2 || s2[6] !== u2 || s2[7] !== _2 || s2[8] !== C2 || s2[9] !== N2 ? (T2 = {
    songs: j2,
    playlist: u2,
    resetKey: _2,
    like: C2,
    remove: N2
  }, s2[5] = j2, s2[6] = u2, s2[7] = _2, s2[8] = C2, s2[9] = N2, s2[10] = T2) : T2 = s2[10];
  const I2 = ra(T2);
  let E2;
  s2[11] !== j2 || s2[12] !== v2 || s2[13] !== b2 || s2[14] !== u2 || s2[15] !== o2 || s2[16] !== g2 ? (E2 = {
    selectedPlaylist: u2,
    displayedSongs: j2,
    selectionMode: false,
    searchQuery: b2,
    updatePlaylistOrder: g2,
    onReloadPlaylist: v2,
    t: o2
  }, s2[11] = j2, s2[12] = v2, s2[13] = b2, s2[14] = u2, s2[15] = o2, s2[16] = g2, s2[17] = E2) : E2 = s2[17];
  const {
    sensors: F2,
    activeDragId: L2,
    handleDragStart: R2,
    handleDragOver: D2,
    handleDragEnd: A2
  } = Gl(E2);
  let O2;
  s2[18] !== u2 || s2[19] !== o2 ? (O2 = {
    selectedPlaylist: u2,
    t: o2
  }, s2[18] = u2, s2[19] = o2, s2[20] = O2) : O2 = s2[20];
  const {
    handleSharePlaylist: M2
  } = bl(O2);
  let z2;
  s2[21] !== u2 ? (z2 = Boolean(u2) && (Boolean(u2.cloud) || !xl(u2.id) && Boolean(null == (a2 = u2.originals) ? void 0 : a2.length) && "local" !== u2.source), s2[21] = u2, s2[22] = z2) : z2 = s2[22];
  const B2 = z2;
  let Q2, H2, U2, W2, q2, K2, G2, V2, X2, Y2, J2, Z2, ee2;
  if (s2[23] !== L2 || s2[24] !== d2 || s2[25] !== B2 || s2[26] !== j2 || s2[27] !== P2 || s2[28] !== I2 || s2[29] !== A2 || s2[30] !== D2 || s2[31] !== R2 || s2[32] !== M2 || s2[33] !== m2 || s2[34] !== h2 || s2[35] !== w2 || s2[36] !== p2 || s2[37] !== b2 || s2[38] !== u2 || s2[39] !== F2 || s2[40] !== k2 || s2[41] !== S2) {
    G2 = Symbol.for("react.early_return_sentinel");
    e: {
      const e2 = () => b2.trim() && 0 === w2.length ? l.jsx(cl, {
        variant: "no-search"
      }) : S2 && 0 === j2.length ? l.jsx(cl, {
        variant: "no-duplicates"
      }) : u2 ? Array.isArray(u2.tracks) && 0 === u2.tracks.length ? l.jsx(cl, {
        variant: "empty-playlist",
        playlistType: "favorites" === u2.id ? "favorites" : "playlist"
      }) : l.jsx(ql, {
        scrollRef: x2,
        displayedSongs: j2,
        dragOps: {
          sensors: F2,
          activeDragId: L2,
          handleDragStart: R2,
          handleDragOver: D2,
          handleDragEnd: A2,
          disabled: Boolean(b2.trim()) || S2
        },
        selectionOps: {
          isEditing: I2.editing,
          selectedIds: I2.selected,
          onToggleSelection: I2.toggle
        }
      }) : null;
      if (!u2) {
        G2 = null;
        break e;
      }
      const t2 = null != (n2 = null != (r2 = u2.tracks_count) ? r2 : u2.count) ? n2 : 0,
        a3 = !(null == (i2 = u2.tracks) ? void 0 : i2.length) && (t2 > 0 || void 0 === u2.tracks) && (h2 || m2 || void 0 === u2.tracks);
      let o3, c3;
      q2 = "flex-1 overflow-hidden flex flex-col", s2[52] !== p2 || s2[53] !== u2.id ? (o3 = e3 => {
        p2(u2.id, e3);
      }, s2[52] = p2, s2[53] = u2.id, s2[54] = o3) : o3 = s2[54], s2[55] !== d2 || s2[56] !== w2 || s2[57] !== u2 ? (c3 = () => aa(d2, u2, w2), s2[55] = d2, s2[56] = w2, s2[57] = u2, s2[58] = c3) : c3 = s2[58];
      const f3 = B2 ? M2 : void 0;
      s2[59] !== P2 || s2[60] !== I2 || s2[61] !== b2 || s2[62] !== u2 || s2[63] !== k2 || s2[64] !== o3 || s2[65] !== c3 || s2[66] !== f3 ? (K2 = l.jsx(zl, {
        scrollContainerRef: x2,
        selectedPlaylist: u2,
        searchQuery: b2,
        onSearchChange: k2,
        edit: I2,
        onRename: o3,
        onAddToQueue: c3,
        duplicates: P2,
        handleSharePlaylist: f3
      }), s2[59] = P2, s2[60] = I2, s2[61] = b2, s2[62] = u2, s2[63] = k2, s2[64] = o3, s2[65] = c3, s2[66] = f3, s2[67] = K2) : K2 = s2[67], W2 = "flex-grow flex flex-col overflow-hidden px-0 min-h-0", Q2 = Rt, V2 = u2.id, X2 = a3, s2[68] === Symbol.for("react.memo_cache_sentinel") ? (Y2 = l.jsx($, {}), s2[68] = Y2) : Y2 = s2[68], H2 = "flex-1 flex flex-col overflow-hidden min-h-0", U2 = e2();
    }
    s2[23] = L2, s2[24] = d2, s2[25] = B2, s2[26] = j2, s2[27] = P2, s2[28] = I2, s2[29] = A2, s2[30] = D2, s2[31] = R2, s2[32] = M2, s2[33] = m2, s2[34] = h2, s2[35] = w2, s2[36] = p2, s2[37] = b2, s2[38] = u2, s2[39] = F2, s2[40] = k2, s2[41] = S2, s2[42] = Q2, s2[43] = H2, s2[44] = U2, s2[45] = W2, s2[46] = q2, s2[47] = K2, s2[48] = G2, s2[49] = V2, s2[50] = X2, s2[51] = Y2;
  } else Q2 = s2[42], H2 = s2[43], U2 = s2[44], W2 = s2[45], q2 = s2[46], K2 = s2[47], G2 = s2[48], V2 = s2[49], X2 = s2[50], Y2 = s2[51];
  return G2 !== Symbol.for("react.early_return_sentinel") ? G2 : (s2[69] !== Q2 || s2[70] !== H2 || s2[71] !== U2 || s2[72] !== V2 || s2[73] !== X2 || s2[74] !== Y2 ? (J2 = l.jsx(Q2, {
    contentKey: V2,
    pending: X2,
    placeholder: Y2,
    className: H2,
    children: U2
  }), s2[69] = Q2, s2[70] = H2, s2[71] = U2, s2[72] = V2, s2[73] = X2, s2[74] = Y2, s2[75] = J2) : J2 = s2[75], s2[76] !== W2 || s2[77] !== J2 ? (Z2 = l.jsx("div", {
    className: W2,
    children: J2
  }), s2[76] = W2, s2[77] = J2, s2[78] = Z2) : Z2 = s2[78], s2[79] !== q2 || s2[80] !== K2 || s2[81] !== Z2 ? (ee2 = l.jsxs("div", {
    className: q2,
    children: [K2, Z2]
  }), s2[79] = q2, s2[80] = K2, s2[81] = Z2, s2[82] = ee2) : ee2 = s2[82], ee2);
}
function ga(e2) {
  return e2.addMultipleToQueue;
}
function xa() {
  const e2 = t.c(7),
    {
      selectedPlaylist: a2
    } = ol();
  let r2;
  e2[0] !== a2 ? (r2 = () => a2 ? "favorites" === a2.id ? l.jsx(ia, {}) : "offline" === a2.id ? l.jsx(ha, {}) : l.jsx(pa, {}) : null, e2[0] = a2, e2[1] = r2) : r2 = e2[1];
  const n2 = r2,
    i2 = null == a2 ? void 0 : a2.id;
  let s2, o2;
  return e2[2] !== n2 ? (s2 = n2(), e2[2] = n2, e2[3] = s2) : s2 = e2[3], e2[4] !== i2 || e2[5] !== s2 ? (o2 = l.jsx(H, {
    scroll: false,
    className: "page-transition",
    children: s2
  }, i2), e2[4] = i2, e2[5] = s2, e2[6] = o2) : o2 = e2[6], o2;
}
function Ca() {
  const l2 = t.c(9),
    a2 = Ce(Da),
    r2 = Ce(Ra),
    n2 = Ce(La),
    i2 = Ce(Fa),
    s2 = Ce(Ea);
  let o2, c2;
  l2[0] !== n2 || l2[1] !== r2 ? (o2 = () => {
    n2 || r2 || zt.initializePlaylists().catch(Ia);
  }, c2 = [n2, r2], l2[0] = n2, l2[1] = r2, l2[2] = o2, l2[3] = c2) : (o2 = l2[2], c2 = l2[3]), e.useEffect(o2, c2);
  const d2 = Ta,
    u2 = Na;
  let f2;
  return l2[4] !== r2 || l2[5] !== a2 || l2[6] !== s2 || l2[7] !== i2 ? (f2 = {
    addToPlaylist: Mt.addToPlaylist,
    addAllTracksToPlaylist: Mt.addAllTracksToPlaylist,
    createPlaylist: Mt.createPlaylist,
    deletePlaylist: Mt.deletePlaylist,
    renamePlaylist: Mt.renamePlaylist,
    updatePlaylistIcon: Mt.updatePlaylistIcon,
    removeTrackFromPlaylist: Mt.removeTrackFromPlaylist,
    removeTracksBatch: Mt.removeTracksBatch,
    exportPlaylist: Mt.exportPlaylist,
    refreshPlaylist: Mt.refreshPlaylist,
    changePlaylistIcon: Mt.changePlaylistIcon,
    togglePin: Mt.togglePin,
    startPlaylistEdit: d2,
    savePlaylistEdit: u2,
    updatePlaylistOrder: Mt.updatePlaylistOrder,
    loadPlaylistWithSongs: zt.loadPlaylistWithSongs,
    loadLocalSongs: zt.loadLocalSongs,
    importPlaylistAfterPreview: Mt.importPlaylistAfterPreview,
    playlistsWithSongs: a2,
    isLoadingPlaylists: r2,
    reloadPlaylist: zt.reloadPlaylist,
    ensurePlaylistLoaded: zt.ensurePlaylistLoaded,
    loadPlaylists: zt.loadPlaylists,
    setPlaylistsOrder: i2,
    playlistsOrder: s2
  }, l2[4] = r2, l2[5] = a2, l2[6] = s2, l2[7] = i2, l2[8] = f2) : f2 = l2[8], f2;
}
async function Na(e2, t2, l2, a2) {
  if (!e2 || !t2.trim()) return a2(null), false;
  return (await Mt.renamePlaylist(e2, t2)) ? ("favorites" === e2 && (await l2()), a2(null), true) : (a2(null), false);
}
function Ta(e2, t2, l2, a2, r2) {
  void 0 !== l2 && l2 || (a2(e2), r2(t2));
}
function Ia() {}
function Ea(e2) {
  return e2.playlistsOrder;
}
function Fa(e2) {
  return e2.setPlaylistsOrder;
}
function La(e2) {
  return e2.isInitialized;
}
function Ra(e2) {
  return e2.isLoading;
}
function Da(e2) {
  return e2.playlists;
}
const Aa = "application/x-dotify-track";
function Oa(t2, l2) {
  const {
      addAllTracksToPlaylist: a2,
      addToPlaylist: r2,
      ensurePlaylistLoaded: n2
    } = Ca(),
    [i2, s2] = e.useState(false),
    [o2, c2] = e.useState(false),
    d2 = e.useRef(null),
    u2 = e.useRef(false);
  e.useEffect(() => (u2.current = true, () => {
    u2.current = false, null !== d2.current && window.clearTimeout(d2.current);
  }), []);
  const f2 = l2,
    m2 = e.useCallback(async (e2, l3) => {
      if (!f2 || 0 === e2.length || l3 === t2.id) return false;
      const i3 = await n2(t2.id);
      if (!i3) return false;
      const s3 = new Set(i3.tracks.map(e3 => e3.id)),
        o3 = e2.filter(e3 => !s3.has(e3.id) && (s3.add(e3.id), true));
      if (0 === o3.length) return false;
      return !!(1 === o3.length ? await r2(o3[0], t2.id) : await a2(o3, t2.id)) && (ft(i3, new Set(o3.map(e3 => e3.id)).size, false, true), window.dispatchEvent(new CustomEvent("playlists_changed")), true);
    }, [a2, r2, n2, f2, t2.id]),
    h2 = e.useCallback(() => {
      u2.current && (d2.current && window.clearTimeout(d2.current), c2(true), d2.current = window.setTimeout(() => {
        c2(false), d2.current = null;
      }, 900));
    }, []),
    y2 = Hl(e2 => e2.hoveredPlaylistId),
    v2 = Hl(e2 => e2.dropTargetId),
    p2 = Hl(e2 => e2.songs),
    g2 = Hl(e2 => e2.sourcePlaylistId),
    x2 = Hl(e2 => e2.clearDrop);
  e.useEffect(() => {
    f2 && s2(y2 === t2.id && g2 !== t2.id);
  }, [y2, t2.id, g2, f2]), e.useEffect(() => {
    f2 && v2 === t2.id && (x2(), (async () => {
      try {
        const e2 = await m2(p2, g2);
        u2.current && s2(false), e2 && h2();
      } catch (e2) {
        Te.error("library", "[LibraryCard] Failed to drop tracks into playlist:", e2);
      }
    })());
  }, [v2, t2.id, p2, g2, m2, h2, x2, f2]);
  const b2 = e2 => {
    var t3;
    f2 && (t3 = e2, Array.from(t3.dataTransfer.types).includes(Aa)) && (e2.preventDefault(), e2.dataTransfer.dropEffect = "copy", s2(true));
  };
  return {
    dropProps: f2 ? {
      onDragOver: b2,
      onDragEnter: b2,
      onDragLeave: () => s2(false),
      onDrop: async e2 => {
        if (!f2) return;
        const t3 = e2.dataTransfer.getData(Aa);
        if (t3) {
          e2.preventDefault(), s2(false);
          try {
            const e3 = JSON.parse(t3),
              l3 = Array.isArray(e3.songs) && e3.songs.length > 0 ? e3.songs : e3.song ? [e3.song] : [];
            (await m2(l3, e3.sourcePlaylistId)) && h2();
          } catch (l3) {
            Te.error("library", "[LibraryCard] Failed to drop track into playlist:", l3);
          }
        }
      }
    } : {},
    isTrackOver: i2,
    dropSuccess: o2
  };
}
function Ma(a2) {
  var r2, n2;
  const i2 = t.c(78),
    {
      playlist: s2,
      album: o2,
      onOpen: c2,
      pick: d2,
      job: u2,
      count: f2,
      confirm: m2,
      className: h2
    } = a2,
    y2 = void 0 !== o2 && o2,
    {
      t: v2,
      currentLanguage: p2
    } = be();
  let g2;
  i2[0] !== f2 || i2[1] !== s2 ? (g2 = void 0 === f2 ? s2 : {
    ...s2,
    tracks_count: f2
  }, i2[0] = f2, i2[1] = s2, i2[2] = g2) : g2 = i2[2];
  const x2 = j(y2 ? "album" : "playlist", g2),
    [b2, k2] = e.useState(false),
    S2 = U(s2.id),
    w2 = null != u2 ? u2 : S2,
    P2 = "favorites" === s2.id || "offline" === s2.id,
    T2 = !(P2 || "import" !== (null == w2 ? void 0 : w2.kind) && "convert" !== (null == w2 ? void 0 : w2.kind) || w2.error),
    I2 = null != (r2 = null == w2 ? void 0 : w2.fraction) ? r2 : (null == w2 ? void 0 : w2.total) ? w2.current / w2.total : 0,
    E2 = !d2 && !w2 && !m2,
    F2 = Oa(s2, E2 && !P2 && !y2);
  let L2;
  i2[3] !== x2 || i2[4] !== s2 ? (L2 = e2 => l.jsx(wl, {
    selectedPlaylist: s2,
    menu: e2,
    quickActions: x2
  }), i2[3] = x2, i2[4] = s2, i2[5] = L2) : L2 = i2[5];
  const R2 = L2;
  let D2, A2, O2, M2, z2;
  i2[6] !== y2 || i2[7] !== R2 || i2[8] !== b2 || i2[9] !== x2 || i2[10] !== E2 || i2[11] !== P2 || i2[12] !== v2 ? (D2 = E2 && !P2 && l.jsx(W, {
    model: x2,
    scope: "library",
    more: !y2 && l.jsxs(_, {
      open: b2,
      onOpenChange: k2,
      children: [l.jsx(C, {
        asChild: true,
        children: l.jsx(je, {
          variant: "quiet",
          size: "icon",
          className: "h-8 w-8 text-white/85 hover:bg-transparent hover:text-white",
          "aria-label": v2("library.actions.more"),
          children: l.jsx(ke.more, {
            className: "size-5"
          })
        })
      }), l.jsx(N, {
        align: "end",
        className: "w-64 p-0",
        children: R2("dropdown")
      })]
    })
  }), i2[6] = y2, i2[7] = R2, i2[8] = b2, i2[9] = x2, i2[10] = E2, i2[11] = P2, i2[12] = v2, i2[13] = D2) : D2 = i2[13], i2[14] !== m2 || i2[15] !== v2 ? (A2 = m2 && l.jsx(q, {
    pinned: true,
    start: l.jsx(K, {
      label: v2("library.actions.import"),
      disabled: m2.busy,
      onClick: m2.onYes,
      children: m2.busy ? l.jsx(we, {
        className: "size-4 animate-spin"
      }) : l.jsx(ke.check, {
        weight: "Bold",
        className: "size-5"
      })
    }),
    end: l.jsx(K, {
      label: v2("common.cancel"),
      onClick: m2.onNo,
      children: l.jsx(ke.close, {
        className: "size-5"
      })
    })
  }), i2[14] = m2, i2[15] = v2, i2[16] = A2) : A2 = i2[16], i2[17] !== d2 ? (O2 = d2 && l.jsx(Ol, {
    on: d2.on,
    className: "absolute right-2.5 top-2.5 z-10"
  }), i2[17] = d2, i2[18] = O2) : O2 = i2[18], i2[19] !== F2.dropSuccess || i2[20] !== F2.isTrackOver ? (M2 = (F2.isTrackOver || F2.dropSuccess) && l.jsx("div", {
    className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-background/60 text-foreground",
    children: F2.dropSuccess ? l.jsx(ke.check, {
      className: "size-8"
    }) : l.jsx(ke.add, {
      className: "size-8"
    })
  }), i2[19] = F2.dropSuccess, i2[20] = F2.isTrackOver, i2[21] = M2) : M2 = i2[21], i2[22] !== D2 || i2[23] !== A2 || i2[24] !== O2 || i2[25] !== M2 ? (z2 = l.jsxs(l.Fragment, {
    children: [D2, A2, O2, M2]
  }), i2[22] = D2, i2[23] = A2, i2[24] = O2, i2[25] = M2, i2[26] = z2) : z2 = i2[26];
  const B2 = z2,
    $2 = null != h2 ? h2 : "w-full",
    Q2 = (null == d2 ? void 0 : d2.disabled) && "pointer-events-none opacity-35";
  let H2;
  i2[27] !== Q2 || i2[28] !== $2 ? (H2 = Pe($2, "transition-opacity duration-200", Q2), i2[27] = Q2, i2[28] = $2, i2[29] = H2) : H2 = i2[29];
  const ee2 = m2 ? void 0 : d2 ? d2.onPick : c2;
  let te2, le2;
  i2[30] !== s2.author || i2[31] !== s2.description || i2[32] !== s2.id || i2[33] !== P2 || i2[34] !== v2 ? (te2 = P2 ? v2("offline" === s2.id ? "library.offline.subtitle" : "library.favorites.subtitle") : s2.description || s2.author, i2[30] = s2.author, i2[31] = s2.description, i2[32] = s2.id, i2[33] = P2, i2[34] = v2, i2[35] = te2) : te2 = i2[35], i2[36] !== y2 || i2[37] !== f2 || i2[38] !== p2 || i2[39] !== s2.tracks || i2[40] !== s2.tracks_count || i2[41] !== v2 ? (le2 = y2 ? void 0 : De(null != (n2 = null != f2 ? f2 : s2.tracks_count) ? n2 : s2.tracks.length, v2, p2), i2[36] = y2, i2[37] = f2, i2[38] = p2, i2[39] = s2.tracks, i2[40] = s2.tracks_count, i2[41] = v2, i2[42] = le2) : le2 = i2[42];
  const ae2 = T2 && !(null == w2 ? void 0 : w2.waiting) && "library-job-reveal";
  let re2, ne2;
  i2[43] !== ae2 ? (re2 = Pe("library-job-name", ae2), i2[43] = ae2, i2[44] = re2) : re2 = i2[44], i2[45] !== I2 || i2[46] !== T2 ? (ne2 = T2 ? {
    "--library-job-progress": 100 * I2 + "%"
  } : void 0, i2[45] = I2, i2[46] = T2, i2[47] = ne2) : ne2 = i2[47];
  const ie2 = !E2 || P2 || y2 ? void 0 : s2.id,
    se2 = d2 ? d2.on : void 0;
  let oe2, ce2, de2;
  i2[48] !== F2.dropProps || i2[49] !== s2.title || i2[50] !== ie2 || i2[51] !== se2 ? (oe2 = {
    ...F2.dropProps,
    "data-library-playlist-drop-id": ie2,
    "aria-label": s2.title,
    "aria-pressed": se2
  }, i2[48] = F2.dropProps, i2[49] = s2.title, i2[50] = ie2, i2[51] = se2, i2[52] = oe2) : oe2 = i2[52], i2[53] !== w2 || i2[54] !== B2 || i2[55] !== le2 || i2[56] !== re2 || i2[57] !== ne2 || i2[58] !== oe2 ? (ce2 = {
    meta: le2,
    job: w2,
    actions: B2,
    titleClassName: re2,
    titleStyle: ne2,
    attributes: oe2
  }, i2[53] = w2, i2[54] = B2, i2[55] = le2, i2[56] = re2, i2[57] = ne2, i2[58] = oe2, i2[59] = ce2) : ce2 = i2[59], i2[60] !== H2 || i2[61] !== ee2 || i2[62] !== te2 || i2[63] !== ce2 ? (de2 = {
    className: H2,
    onClick: ee2,
    subtitle: te2,
    card: ce2
  }, i2[60] = H2, i2[61] = ee2, i2[62] = te2, i2[63] = ce2, i2[64] = de2) : de2 = i2[64];
  const ue2 = de2;
  let fe2;
  i2[65] !== y2 || i2[66] !== s2 || i2[67] !== ue2 || i2[68] !== P2 ? (fe2 = P2 ? l.jsx(G, {
    ...ue2,
    playlist: s2,
    kind: "offline" === s2.id ? "offline" : "favorites"
  }) : y2 ? l.jsx(V, {
    ...ue2,
    album: {
      ...s2,
      artist: s2.author
    }
  }) : l.jsx(X, {
    ...ue2,
    playlist: s2
  }), i2[65] = y2, i2[66] = s2, i2[67] = ue2, i2[68] = P2, i2[69] = fe2) : fe2 = i2[69];
  const me2 = fe2;
  if (!E2 || y2 || P2) return me2;
  let he2, ye2, ve2, pe2;
  return i2[70] === Symbol.for("react.memo_cache_sentinel") ? (he2 = e2 => {
    e2 && k2(false);
  }, i2[70] = he2) : he2 = i2[70], i2[71] !== me2 ? (ye2 = l.jsx(J, {
    asChild: true,
    children: l.jsx("div", {
      children: me2
    })
  }), i2[71] = me2, i2[72] = ye2) : ye2 = i2[72], i2[73] !== R2 ? (ve2 = l.jsx(Y, {
    className: "w-64 p-0",
    children: R2("context")
  }), i2[73] = R2, i2[74] = ve2) : ve2 = i2[74], i2[75] !== ye2 || i2[76] !== ve2 ? (pe2 = l.jsxs(Z, {
    onOpenChange: he2,
    children: [ye2, ve2]
  }), i2[75] = ye2, i2[76] = ve2, i2[77] = pe2) : pe2 = i2[77], pe2;
}
function za(e2) {
  const a2 = t.c(9),
    {
      ids: r2,
      children: n2
    } = e2,
    {
      onDragEnd: i2
    } = ol();
  let s2, o2;
  a2[0] === Symbol.for("react.memo_cache_sentinel") ? (s2 = {
    activationConstraint: {
      distance: 8
    }
  }, a2[0] = s2) : s2 = a2[0], a2[1] === Symbol.for("react.memo_cache_sentinel") ? (o2 = {
    coordinateGetter: Kt
  }, a2[1] = o2) : o2 = a2[1];
  const c2 = Qt(Ht(Ut, s2), Ht(qt, o2));
  let d2, u2;
  return a2[2] !== n2 || a2[3] !== r2 ? (d2 = l.jsx(Gt, {
    items: r2,
    strategy: Vt,
    children: n2
  }), a2[2] = n2, a2[3] = r2, a2[4] = d2) : d2 = a2[4], a2[5] !== i2 || a2[6] !== c2 || a2[7] !== d2 ? (u2 = l.jsx(Xt, {
    sensors: c2,
    collisionDetection: Yt,
    onDragEnd: i2,
    children: d2
  }), a2[5] = i2, a2[6] = c2, a2[7] = d2, a2[8] = u2) : u2 = a2[8], u2;
}
function Ba(e2) {
  const a2 = t.c(13),
    {
      id: n2,
      disabled: i2,
      children: s2
    } = e2,
    {
      playlists: o2
    } = ol();
  let c2;
  a2[0] !== o2 ? (c2 = o2.map($a).join("\0"), a2[0] = o2, a2[1] = c2) : c2 = a2[1];
  const d2 = c2;
  let u2, f2, m2, h2, y2;
  return a2[2] !== n2 ? (u2 = {
    id: n2
  }, a2[2] = n2, a2[3] = u2) : u2 = a2[3], a2[4] === Symbol.for("react.memo_cache_sentinel") ? (f2 = {
    opacity: 0,
    scale: 0.94
  }, a2[4] = f2) : f2 = a2[4], a2[5] === Symbol.for("react.memo_cache_sentinel") ? (m2 = {
    duration: 0.22,
    ease: [0.22, 1, 0.36, 1]
  }, a2[5] = m2) : m2 = a2[5], a2[6] !== s2 || a2[7] !== d2 ? (h2 = l.jsx(r.div, {
    layout: "position",
    layoutDependency: d2,
    initial: false,
    exit: f2,
    transition: m2,
    children: s2
  }), a2[6] = s2, a2[7] = d2, a2[8] = h2) : h2 = a2[8], a2[9] !== i2 || a2[10] !== u2 || a2[11] !== h2 ? (y2 = l.jsx(ee, {
    item: u2,
    disabled: i2,
    className: "min-w-0 shrink-0",
    ignoreInteractive: true,
    children: h2
  }), a2[9] = i2, a2[10] = u2, a2[11] = h2, a2[12] = y2) : y2 = a2[12], y2;
}
function $a(e2) {
  return e2.id;
}
const sr = "grid grid-cols-[repeat(auto-fill,minmax(min(100%,10rem),1fr))] gap-x-5 gap-y-7";
function pr(e2) {
  const r2 = t.c(134),
    {
      section: n2,
      artists: i2,
      onOpen: s2,
      onSection: o2,
      imports: c2,
      draft: d2,
      picking: u2,
      accounts: f2
    } = e2,
    {
      t: m2
    } = be(),
    h2 = Bt(wr),
    {
      playlists: y2,
      favoritesPlaylist: v2,
      offlinePlaylist: p2,
      favoritesCount: g2,
      localSongsCount: x2
    } = ol(),
    b2 = ie(),
    k2 = se(Sr),
    S2 = Ce(kr),
    w2 = xt(br);
  let j2, P2, _2, C2, N2, T2, I2, E2, F2, L2, R2, D2, A2, O2;
  if (r2[0] !== b2 || r2[1] !== i2 || r2[2] !== d2 || r2[3] !== g2 || r2[4] !== v2 || r2[5] !== c2 || r2[6] !== x2 || r2[7] !== p2 || r2[8] !== s2 || r2[9] !== w2 || r2[10] !== u2 || r2[11] !== y2 || r2[12] !== S2 || r2[13] !== n2 || r2[14] !== m2 || r2[15] !== h2) {
    let e3, t2, o3, f3, k3, A3, O3;
    if (L2 = y2.filter(xr), r2[28] !== b2 || r2[29] !== i2 || r2[30] !== g2 || r2[31] !== v2 || r2[32] !== x2 || r2[33] !== p2 || r2[34] !== s2 || r2[35] !== u2 || r2[36] !== n2 || r2[37] !== m2) {
      const a2 = [v2];
      let o4, c3, d3;
      _2 = b2, r2[45] !== i2 ? (o4 = null != i2 ? i2 : [], r2[45] = i2, r2[46] = o4) : o4 = r2[46], N2 = o4, F2 = "all" === n2, t2 = F2 ? "w-44 shrink-0" : "w-full", r2[47] !== m2 ? (c3 = e4 => l.jsx("div", {
        className: "flex flex-1 items-center justify-center",
        children: l.jsx(de, {
          layout: "vertical",
          icon: "playlists" === e4 ? qe.Playlist : "albums" === e4 ? qe.Album : qe.Artist,
          title: m2(`library.hub.empty_${e4}`),
          subtitle: m2(`library.hub.empty_${e4}_hint`)
        })
      }), r2[47] = m2, r2[48] = c3) : c3 = r2[48], I2 = c3, r2[49] !== t2 ? (d3 = e4 => {
        const a3 = void 0 !== e4 && e4;
        return Array.from({
          length: 4
        }, (e5, r3) => l.jsx(re, {
          lines: 2,
          className: t2,
          coverClassName: a3 ? "rounded-full" : void 0
        }, `skeleton:${r3}`));
      }, r2[49] = t2, r2[50] = d3) : d3 = r2[50], R2 = d3, e3 = a2.map(e4 => l.jsx(Ma, {
        playlist: e4,
        count: "favorites" === e4.id ? g2 : x2,
        pick: null == u2 ? void 0 : u2(e4),
        onOpen: () => s2(e4),
        className: t2
      }, e4.id)), r2[28] = b2, r2[29] = i2, r2[30] = g2, r2[31] = v2, r2[32] = x2, r2[33] = p2, r2[34] = s2, r2[35] = u2, r2[36] = n2, r2[37] = m2, r2[38] = _2, r2[39] = N2, r2[40] = I2, r2[41] = F2, r2[42] = R2, r2[43] = e3, r2[44] = t2;
    } else _2 = r2[38], N2 = r2[39], I2 = r2[40], F2 = r2[41], R2 = r2[42], e3 = r2[43], t2 = r2[44];
    if (r2[51] !== s2 || r2[52] !== u2 || r2[53] !== h2 || r2[54] !== t2 ? (o3 = e4 => l.jsx(Ba, {
      id: e4.id,
      disabled: Boolean(u2) || Boolean(h2[e4.id]),
      children: l.jsx(Ma, {
        playlist: e4,
        pick: null == u2 ? void 0 : u2(e4),
        onOpen: () => s2(e4),
        className: t2
      })
    }, kt(e4.id)), r2[51] = s2, r2[52] = u2, r2[53] = h2, r2[54] = t2, r2[55] = o3) : o3 = r2[55], r2[56] !== S2 || r2[57] !== R2 ? (f3 = !S2 && R2(), r2[56] = S2, r2[57] = R2, r2[58] = f3) : f3 = r2[58], E2 = l.jsxs(l.Fragment, {
      children: [e3, !u2 && d2, l.jsx(a, {
        initial: false,
        children: L2.map(o3)
      }), !u2 && c2, f3]
    }), r2[59] !== _2 || r2[60] !== t2) {
      let e4;
      r2[62] !== t2 ? (e4 = e5 => l.jsx(Ma, {
        album: true,
        playlist: {
          ...e5,
          author: e5.artist
        },
        className: t2,
        onOpen: () => St.getState().openPlaylistView(e5, true)
      }, `${e5.source}:${e5.id}`), r2[62] = t2, r2[63] = e4) : e4 = r2[63], k3 = _2.map(e4), r2[59] = _2, r2[60] = t2, r2[61] = k3;
    } else k3 = r2[61];
    if (P2 = k3, r2[64] !== N2 || r2[65] !== w2 || r2[66] !== t2) {
      let e4;
      r2[68] !== w2 || r2[69] !== t2 ? (e4 = e5 => l.jsx(ue, {
        artist: {
          ...e5,
          avatar: e5.avatar_url
        },
        className: t2,
        onClick: () => w2(e5.id, e5.source)
      }, `${e5.source}:${e5.id}`), r2[68] = w2, r2[69] = t2, r2[70] = e4) : e4 = r2[70], A3 = N2.map(e4), r2[64] = N2, r2[65] = w2, r2[66] = t2, r2[67] = A3;
    } else A3 = r2[67];
    C2 = A3, r2[71] !== i2 || r2[72] !== F2 || r2[73] !== R2 ? (O3 = null === i2 ? l.jsx("div", {
      className: F2 ? "flex gap-5" : sr,
      children: R2(true)
    }) : null, r2[71] = i2, r2[72] = F2, r2[73] = R2, r2[74] = O3) : O3 = r2[74], T2 = O3, j2 = za, D2 = L2.map(gr), r2[0] = b2, r2[1] = i2, r2[2] = d2, r2[3] = g2, r2[4] = v2, r2[5] = c2, r2[6] = x2, r2[7] = p2, r2[8] = s2, r2[9] = w2, r2[10] = u2, r2[11] = y2, r2[12] = S2, r2[13] = n2, r2[14] = m2, r2[15] = h2, r2[16] = j2, r2[17] = P2, r2[18] = _2, r2[19] = C2, r2[20] = N2, r2[21] = T2, r2[22] = I2, r2[23] = E2, r2[24] = F2, r2[25] = L2, r2[26] = R2, r2[27] = D2;
  } else j2 = r2[16], P2 = r2[17], _2 = r2[18], C2 = r2[19], N2 = r2[20], T2 = r2[21], I2 = r2[22], E2 = r2[23], F2 = r2[24], L2 = r2[25], R2 = r2[26], D2 = r2[27];
  r2[75] !== E2 || r2[76] !== F2 ? (A2 = F2 ? l.jsx(ce, {
    children: E2
  }) : l.jsx("div", {
    className: sr,
    children: E2
  }), r2[75] = E2, r2[76] = F2, r2[77] = A2) : A2 = r2[77], r2[78] !== j2 || r2[79] !== D2 || r2[80] !== A2 ? (O2 = l.jsx(j2, {
    ids: D2,
    children: A2
  }), r2[78] = j2, r2[79] = D2, r2[80] = A2, r2[81] = O2) : O2 = r2[81];
  const M2 = O2;
  if (F2) {
    let e3, t2, a2, n3, s3, c3;
    return r2[82] !== m2 ? (e3 = m2("library.hub.playlists"), r2[82] = m2, r2[83] = e3) : e3 = r2[83], r2[84] !== o2 ? (t2 = () => o2("playlists"), r2[84] = o2, r2[85] = t2) : t2 = r2[85], r2[86] !== M2 || r2[87] !== e3 || r2[88] !== t2 ? (a2 = l.jsx(oe, {
      title: e3,
      onTitleClick: t2,
      children: M2
    }), r2[86] = M2, r2[87] = e3, r2[88] = t2, r2[89] = a2) : a2 = r2[89], r2[90] !== P2 || r2[91] !== _2.length || r2[92] !== o2 || r2[93] !== m2 ? (n3 = _2.length > 0 && l.jsx(oe, {
      title: m2("library.hub.albums"),
      onTitleClick: () => o2("albums"),
      children: l.jsx(ce, {
        children: P2
      })
    }), r2[90] = P2, r2[91] = _2.length, r2[92] = o2, r2[93] = m2, r2[94] = n3) : n3 = r2[94], r2[95] !== C2 || r2[96] !== N2.length || r2[97] !== i2 || r2[98] !== T2 || r2[99] !== o2 || r2[100] !== m2 ? (s3 = (T2 || N2.length > 0) && l.jsx(oe, {
      title: m2("library.hub.artists"),
      onTitleClick: () => o2("artists"),
      children: l.jsx(Rt, {
        pending: null === i2,
        placeholder: T2,
        children: l.jsx(ce, {
          children: C2
        })
      })
    }), r2[95] = C2, r2[96] = N2.length, r2[97] = i2, r2[98] = T2, r2[99] = o2, r2[100] = m2, r2[101] = s3) : s3 = r2[101], r2[102] !== f2 || r2[103] !== a2 || r2[104] !== n3 || r2[105] !== s3 ? (c3 = l.jsxs("div", {
      className: "flex flex-col gap-section",
      children: [f2, a2, n3, s3]
    }), r2[102] = f2, r2[103] = a2, r2[104] = n3, r2[105] = s3, r2[106] = c3) : c3 = r2[106], c3;
  }
  if ("albums" === n2) {
    const e3 = !k2 && !_2.length;
    let t2, a2, n3;
    return r2[107] !== R2 ? (t2 = l.jsx("div", {
      className: sr,
      children: R2()
    }), r2[107] = R2, r2[108] = t2) : t2 = r2[108], r2[109] !== P2 || r2[110] !== _2.length || r2[111] !== I2 ? (a2 = _2.length ? l.jsx("div", {
      className: sr,
      children: P2
    }) : I2("albums"), r2[109] = P2, r2[110] = _2.length, r2[111] = I2, r2[112] = a2) : a2 = r2[112], r2[113] !== e3 || r2[114] !== t2 || r2[115] !== a2 ? (n3 = l.jsx(Rt, {
      pending: e3,
      placeholder: t2,
      className: "flex flex-1 flex-col",
      children: a2
    }), r2[113] = e3, r2[114] = t2, r2[115] = a2, r2[116] = n3) : n3 = r2[116], n3;
  }
  if ("artists" === n2) {
    const e3 = null === i2;
    let t2, a2;
    return r2[117] !== C2 || r2[118] !== N2.length || r2[119] !== I2 ? (t2 = N2.length ? l.jsx("div", {
      className: sr,
      children: C2
    }) : I2("artists"), r2[117] = C2, r2[118] = N2.length, r2[119] = I2, r2[120] = t2) : t2 = r2[120], r2[121] !== T2 || r2[122] !== e3 || r2[123] !== t2 ? (a2 = l.jsx(Rt, {
      pending: e3,
      placeholder: T2,
      className: "flex flex-1 flex-col",
      children: t2
    }), r2[121] = T2, r2[122] = e3, r2[123] = t2, r2[124] = a2) : a2 = r2[124], a2;
  }
  let z2, B2;
  return r2[125] !== d2 || r2[126] !== c2 || r2[127] !== I2 || r2[128] !== S2 || r2[129] !== L2 ? (z2 = S2 && !L2.length && !c2.length && !d2 && I2("playlists"), r2[125] = d2, r2[126] = c2, r2[127] = I2, r2[128] = S2, r2[129] = L2, r2[130] = z2) : z2 = r2[130], r2[131] !== M2 || r2[132] !== z2 ? (B2 = l.jsxs(l.Fragment, {
    children: [M2, z2]
  }), r2[131] = M2, r2[132] = z2, r2[133] = B2) : B2 = r2[133], B2;
}
function gr(e2) {
  return e2.id;
}
function xr(e2) {
  return "favorites" !== e2.id && "offline" !== e2.id;
}
function br(e2) {
  return e2.openArtistModal;
}
function kr(e2) {
  return e2.isInitialized;
}
function Sr(e2) {
  return e2.isInitialized;
}
function wr(e2) {
  return e2.jobs;
}
const ln = i.memo(function (a2) {
  var r2, n2, i2, s2, o2;
  const f2 = t.c(90),
    [m2, h2] = c(),
    {
      pathname: y2
    } = d(),
    v2 = u();
  let p2;
  f2[0] !== y2 ? (p2 = Lt(y2), f2[0] = y2, f2[1] = p2) : p2 = f2[1];
  const g2 = p2,
    x2 = "library" === g2.tab,
    b2 = g2.isPlaylist || g2.isAlbum;
  let k2;
  f2[2] !== x2 || f2[3] !== m2 ? (k2 = x2 ? m2.get("playlist") : null, f2[2] = x2, f2[3] = m2, f2[4] = k2) : k2 = f2[4];
  const S2 = k2,
    {
      mode: w2
    } = ge();
  let j2;
  f2[5] !== a2 ? (j2 = {
    ...a2,
    activePlaylistId: void 0,
    onDetailViewChange: void 0
  }, f2[5] = a2, f2[6] = j2) : j2 = f2[6];
  const {
      libraryDataValue: P2,
      libraryActionsValue: _2
    } = Xr(j2),
    C2 = _2.setSelectedPlaylist,
    N2 = null == (r2 = P2.selectedPlaylist) ? void 0 : r2.id,
    T2 = e.useRef(null),
    I2 = Ce(an);
  let E2;
  f2[7] !== P2.playlists || f2[8] !== I2 ? (E2 = e2 => Boolean(e2) && (!I2 || "favorites" === e2 || "offline" === e2 || P2.playlists.some(t2 => t2.id === e2)), f2[7] = P2.playlists, f2[8] = I2, f2[9] = E2) : E2 = f2[9];
  const F2 = E2,
    [L2, R2] = e.useState(null),
    [D2, A2] = e.useState(false),
    [O2, M2] = e.useState(null),
    z2 = null != (n2 = a2.activePlaylistId) ? n2 : null,
    B2 = Boolean(z2) && z2 !== O2;
  let $2;
  f2[10] !== F2 || f2[11] !== L2 ? ($2 = F2(L2), f2[10] = F2, f2[11] = L2, f2[12] = $2) : $2 = f2[12];
  const Q2 = $2;
  let H2;
  f2[13] !== F2 || f2[14] !== z2 ? (H2 = F2(z2), f2[13] = F2, f2[14] = z2, f2[15] = H2) : H2 = f2[15];
  const U2 = H2,
    W2 = x2 && !S2 && D2 && "POP" !== v2 && !B2 && Q2,
    q2 = x2 ? null != S2 ? S2 : W2 ? L2 : null : L2;
  let K2;
  f2[16] !== F2 || f2[17] !== q2 ? (K2 = F2(q2), f2[16] = F2, f2[17] = q2, f2[18] = K2) : K2 = f2[18];
  const G2 = K2;
  let V2;
  f2[19] !== P2.favoritesPlaylist || f2[20] !== P2.offlinePlaylist || f2[21] !== P2.playlists || f2[22] !== q2 ? (V2 = "favorites" === q2 ? P2.favoritesPlaylist : "offline" === q2 ? P2.offlinePlaylist : P2.playlists.find(e2 => e2.id === q2), f2[19] = P2.favoritesPlaylist, f2[20] = P2.offlinePlaylist, f2[21] = P2.playlists, f2[22] = q2, f2[23] = V2) : V2 = f2[23];
  const X2 = V2;
  let Y2;
  f2[24] !== P2 || f2[25] !== q2 || f2[26] !== X2 ? (Y2 = (null == (i2 = P2.selectedPlaylist) ? void 0 : i2.id) === q2 ? P2 : {
    ...P2,
    selectedPlaylist: null != X2 ? X2 : null,
    filteredPlaylistSongs: null != (s2 = null == X2 ? void 0 : X2.tracks) ? s2 : [],
    isPlaylistLoading: !(null == (o2 = null == X2 ? void 0 : X2.tracks) ? void 0 : o2.length)
  }, f2[24] = P2, f2[25] = q2, f2[26] = X2, f2[27] = Y2) : Y2 = f2[27];
  const J2 = Y2;
  let Z2;
  f2[28] !== C2 || f2[29] !== h2 ? (Z2 = e2 => {
    C2(e2), T2.current = e2.id, h2({
      playlist: e2.id
    });
  }, f2[28] = C2, f2[29] = h2, f2[30] = Z2) : Z2 = f2[30];
  const ee2 = Z2,
    te2 = e.useRef(null);
  let le2, ae2;
  f2[31] !== z2 || f2[32] !== U2 || f2[33] !== b2 || f2[34] !== L2 || f2[35] !== Q2 || f2[36] !== x2 || f2[37] !== B2 || f2[38] !== W2 || f2[39] !== S2 || f2[40] !== h2 ? (le2 = () => {
    if (z2 || M2(null), !x2) return te2.current = null, A2(true), z2 && b2 && M2(z2), void (L2 && !Q2 && R2(null));
    const e2 = B2 && U2 && z2 !== S2 ? z2 : W2 ? L2 : null;
    e2 ? te2.current !== e2 && (te2.current = e2, h2({
      playlist: e2
    }, {
      replace: e2 === z2 && Boolean(S2)
    })) : (te2.current = null, B2 && M2(z2), A2(false), R2(S2));
  }, ae2 = [x2, b2, z2, B2, U2, W2, S2, L2, Q2, h2], f2[31] = z2, f2[32] = U2, f2[33] = b2, f2[34] = L2, f2[35] = Q2, f2[36] = x2, f2[37] = B2, f2[38] = W2, f2[39] = S2, f2[40] = h2, f2[41] = le2, f2[42] = ae2) : (le2 = f2[41], ae2 = f2[42]), e.useEffect(le2, ae2);
  const {
    onDetailViewChange: re2
  } = a2;
  let ne2, ie2, se2, oe2, ce2, de2, ue2, fe2, me2;
  f2[43] !== q2 || f2[44] !== re2 ? (ne2 = () => {
    null == re2 || re2(Boolean(q2));
  }, ie2 = [q2, re2], f2[43] = q2, f2[44] = re2, f2[45] = ne2, f2[46] = ie2) : (ne2 = f2[45], ie2 = f2[46]), e.useEffect(ne2, ie2), f2[47] !== P2.favoritesPlaylist || f2[48] !== P2.offlinePlaylist || f2[49] !== P2.playlists || f2[50] !== q2 || f2[51] !== I2 || f2[52] !== x2 || f2[53] !== C2 || f2[54] !== N2 || f2[55] !== h2 ? (se2 = () => {
    if (!q2) return T2.current = null, void (N2 && C2(null));
    if (T2.current === q2 && N2 === q2) return;
    const e2 = "favorites" === q2 ? P2.favoritesPlaylist : "offline" === q2 ? P2.offlinePlaylist : P2.playlists.find(e3 => e3.id === q2);
    e2 ? (T2.current = q2, C2(e2)) : I2 && x2 && h2({}, {
      replace: true
    });
  }, oe2 = [q2, x2, I2, N2, P2.playlists, P2.favoritesPlaylist, P2.offlinePlaylist, C2, h2], f2[47] = P2.favoritesPlaylist, f2[48] = P2.offlinePlaylist, f2[49] = P2.playlists, f2[50] = q2, f2[51] = I2, f2[52] = x2, f2[53] = C2, f2[54] = N2, f2[55] = h2, f2[56] = se2, f2[57] = oe2) : (se2 = f2[56], oe2 = f2[57]), e.useEffect(se2, oe2), f2[58] !== S2 || f2[59] !== h2 ? (ce2 = () => {
    const e2 = e3 => {
      const {
        oldId: t2,
        nextId: l2
      } = e3.detail;
      l2 && (S2 === t2 && h2({
        playlist: l2
      }, {
        replace: true
      }), R2(e4 => e4 === t2 ? l2 : e4));
    };
    return window.addEventListener("playlist_id_reconciled", e2), () => window.removeEventListener("playlist_id_reconciled", e2);
  }, de2 = [S2, h2], f2[58] = S2, f2[59] = h2, f2[60] = ce2, f2[61] = de2) : (ce2 = f2[60], de2 = f2[61]), e.useEffect(ce2, de2), f2[62] !== S2 ? (ue2 = () => {
    if (!S2) return;
    const e2 = rn;
    return document.addEventListener("keydown", e2), () => document.removeEventListener("keydown", e2);
  }, fe2 = [S2], f2[62] = S2, f2[63] = ue2, f2[64] = fe2) : (ue2 = f2[63], fe2 = f2[64]), e.useEffect(ue2, fe2), f2[65] !== P2.favoritesPlaylist || f2[66] !== P2.offlinePlaylist || f2[67] !== P2.playlists || f2[68] !== G2 || f2[69] !== q2 || f2[70] !== w2 || f2[71] !== x2 || f2[72] !== ee2 ? (me2 = x2 && G2 && "library" === w2 && l.jsx(xe, {
    children: l.jsx(en, {
      playlists: P2.playlists,
      favorites: P2.favoritesPlaylist,
      offline: P2.offlinePlaylist,
      selectedId: q2,
      onOpen: ee2
    })
  }), f2[65] = P2.favoritesPlaylist, f2[66] = P2.offlinePlaylist, f2[67] = P2.playlists, f2[68] = G2, f2[69] = q2, f2[70] = w2, f2[71] = x2, f2[72] = ee2, f2[73] = me2) : me2 = f2[73];
  const he2 = G2 ? "hidden" : "visible";
  let ye2, ve2, pe2, be2, ke2;
  return f2[74] !== ee2 ? (ye2 = l.jsx("div", {
    className: "h-full min-h-0",
    children: l.jsx(Dr, {
      onOpen: ee2
    })
  }), f2[74] = ee2, f2[75] = ye2) : ye2 = f2[75], f2[76] !== he2 || f2[77] !== ye2 ? (ve2 = l.jsx(e.Activity, {
    mode: he2,
    children: ye2
  }), f2[76] = he2, f2[77] = ye2, f2[78] = ve2) : ve2 = f2[78], f2[79] !== G2 || f2[80] !== J2 ? (pe2 = G2 && l.jsx(rl.Provider, {
    value: J2,
    children: l.jsx(xa, {})
  }), f2[79] = G2, f2[80] = J2, f2[81] = pe2) : pe2 = f2[81], f2[82] !== _2 || f2[83] !== me2 || f2[84] !== ve2 || f2[85] !== pe2 ? (be2 = l.jsxs(nl.Provider, {
    value: _2,
    children: [me2, ve2, pe2]
  }), f2[82] = _2, f2[83] = me2, f2[84] = ve2, f2[85] = pe2, f2[86] = be2) : be2 = f2[86], f2[87] !== P2 || f2[88] !== be2 ? (ke2 = l.jsx(rl.Provider, {
    value: P2,
    children: be2
  }), f2[87] = P2, f2[88] = be2, f2[89] = ke2) : ke2 = f2[89], ke2;
});
function an(e2) {
  return e2.isInitialized;
}
function rn(e2) {
  if ("Escape" !== e2.key || e2.defaultPrevented) return;
  const t2 = document.activeElement;
  t2 instanceof HTMLElement && (t2.isContentEditable || /^(INPUT|TEXTAREA)$/.test(t2.tagName)) || document.querySelector('[role="dialog"], [aria-modal="true"]') || (e2.preventDefault(), St.getState().toLibraryHub());
}
export { pr as OriginalLibrarySections };
export default ln;
