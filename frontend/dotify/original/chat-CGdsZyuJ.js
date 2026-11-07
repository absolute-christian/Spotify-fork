// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { w as e, l as s, ac as a, dh as n, Y as t } from "./globals-Bc3qFUyf.js";
import { b as i } from "./vendor-ui-BwX-1h7U.js";
let o = null,
  r = false;
const c = e2 => e2.startsWith(t),
  l = e2 => {
    const s2 = a.getState().user;
    return s2 && String(e2.user_id) === String(s2.id) ? {
      ...e2,
      username: e2.username || s2.username || void 0,
      nickname: e2.nickname || s2.nickname || s2.username || void 0,
      avatar: e2.avatar || s2.avatar || void 0,
      premium: e2.premium || s2.premium || void 0,
      active: e2.active || s2.active,
      custom: e2.custom || s2.custom || void 0,
      verification: e2.verification || s2.verification || void 0
    } : e2;
  },
  d = new Map();
function m(e2) {
  const s2 = d.get(e2);
  void 0 !== s2 && clearTimeout(s2), d.delete(e2);
}
const h = i((i2, h2) => {
  const g = (e2, s2) => i2(a2 => {
      const n2 = new Map(a2.messages);
      return n2.set(e2, s2(n2.get(e2) || [])), {
        messages: n2
      };
    }),
    u = e2 => {
      m(e2), i2(s2 => ({
        sentMessageIds: s2.sentMessageIds.filter(s3 => s3 !== e2)
      }));
    };
  return {
    messages: new Map(),
    activeChannel: null,
    isLoading: false,
    sentMessageIds: [],
    hasMore: new Map(),
    realtimeConsumers: new Set(),
    isRealtimeActive: false,
    setRealtimeConsumer: (e2, s2) => {
      i2(a2 => {
        const n2 = new Set(a2.realtimeConsumers);
        return s2 ? n2.add(e2) : n2.delete(e2), {
          realtimeConsumers: n2,
          isRealtimeActive: n2.size > 0
        };
      });
    },
    inboxChannels: [],
    inboxLoaded: false,
    syncRoomChannel: e2 => {
      i2(s2 => {
        var a2;
        const n2 = s2.inboxChannels.filter(e3 => "room" !== e3.type && !c(e3.id));
        if (!e2) return {
          inboxChannels: n2,
          activeChannel: s2.activeChannel && c(s2.activeChannel) ? "global" : s2.activeChannel
        };
        const i3 = (o2 = e2.id, `${t}${o2}`);
        var o2;
        const r2 = s2.inboxChannels.find(e3 => e3.id === i3);
        return {
          inboxChannels: [{
            ...r2,
            id: i3,
            type: "room",
            name: e2.name || (null == r2 ? void 0 : r2.name) || "Room",
            avatar: null != (a2 = null == r2 ? void 0 : r2.avatar) ? a2 : null,
            online: e2.participants.length || (null == r2 ? void 0 : r2.online) || 1
          }, ...n2],
          ...(!r2 && {
            activeChannel: i3
          })
        };
      });
    },
    loadInbox: async () => o || (o = (async () => {
      const s2 = await e.chat.getInbox(),
        a2 = h2(),
        n2 = a2.activeChannel,
        t2 = "global" === n2 || "premium" === n2,
        o2 = s2.some(e2 => e2.id === n2);
      let r2 = [...a2.inboxChannels.filter(e2 => ("room" === e2.type || c(e2.id)) && !s2.some(s3 => s3.id === e2.id)), ...s2];
      if (!t2 && !o2) {
        const e2 = a2.inboxChannels.find(e3 => e3.id === n2);
        e2 && (r2 = [e2, ...r2.filter(e3 => e3.id !== n2)]);
      }
      i2({
        inboxChannels: r2,
        inboxLoaded: true
      });
    })().catch(e2 => {
      s.error("chat", "Error loading inbox:", e2);
    }).finally(() => {
      o = null;
    }), o),
    openChatWithUser: async (a2, n2, t2) => {
      try {
        const s2 = await e.chat.createDirectChat(a2);
        i2({
          activeChannel: s2
        });
        const o2 = h2();
        if (!o2.inboxChannels.some(e2 => e2.id === s2)) {
          i2({
            inboxChannels: [{
              id: s2,
              type: "direct",
              name: n2 || "\u0427\u0430\u0442",
              avatar: null != t2 ? t2 : null,
              online: 0,
              recipient_id: a2
            }, ...o2.inboxChannels]
          });
        }
        o2.messages.has(s2) || o2.loadMessages(s2);
      } catch (o2) {
        s.error("chat", "Failed to open chat with user:", o2);
      }
    },
    setActiveChannel: e2 => {
      i2({
        activeChannel: e2
      }), h2().messages.has(e2) || h2().loadMessages(e2);
    },
    loadMessages: async a2 => {
      if (r) return;
      r = true, i2({
        isLoading: true
      });
      const n2 = new Set((h2().messages.get(a2) || []).map(e2 => e2.id));
      try {
        const s2 = await e.chat.getMessages(a2, 30),
          t2 = new Set(s2.map(e2 => e2.id));
        i2(e2 => {
          const i3 = new Map(e2.messages),
            o2 = new Map(e2.hasMore),
            r2 = (e2.messages.get(a2) || []).filter(e3 => !n2.has(e3.id) && !t2.has(e3.id));
          return i3.set(a2, [...s2, ...r2]), o2.set(a2, 30 === s2.length), {
            messages: i3,
            hasMore: o2
          };
        });
      } catch (t2) {
        s.error("chat", "Failed to load messages:", t2);
      } finally {
        r = false, i2({
          isLoading: false
        });
      }
    },
    loadMoreMessages: async a2 => {
      const n2 = h2();
      if (!n2.hasMore.get(a2) || r) return;
      const t2 = (n2.messages.get(a2) || []).find(e2 => !e2.id.startsWith("temp_"));
      if (t2) {
        r = true, i2({
          isLoading: true
        });
        try {
          const s2 = await e.chat.getMessages(a2, 30, t2.id);
          i2(e2 => {
            const n3 = new Map(e2.messages),
              t3 = new Map(e2.hasMore);
            return n3.set(a2, [...s2, ...(n3.get(a2) || [])]), t3.set(a2, 30 === s2.length), {
              messages: n3,
              hasMore: t3
            };
          });
        } catch (o2) {
          s.error("chat", "Failed to load more messages:", o2);
        } finally {
          r = false, i2({
            isLoading: false
          });
        }
      }
    },
    sendMessage: async (t2, o2 = {}) => {
      var r2;
      const c2 = h2().activeChannel,
        v = a.getState().user;
      if (!c2 || !v) return;
      const p = `temp_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
      i2(e2 => ({
        sentMessageIds: [...e2.sentMessageIds, p]
      }));
      const M = l({
        id: p,
        channel_id: c2,
        user_id: v.id,
        content: t2,
        attachments: null != (r2 = o2.attachments) ? r2 : [],
        reply_to: o2.reply_to,
        is_system: false,
        is_edited: false,
        created_at: (new Date()).toISOString()
      });
      g(c2, e2 => [...e2, M].slice(-200));
      try {
        const s2 = l(await e.chat.sendMessage(c2, t2, o2));
        i2(e2 => {
          const a2 = new Map(e2.messages),
            n2 = (a2.get(c2) || []).filter(e3 => e3.id !== p);
          return a2.set(c2, n2.some(e3 => e3.id === s2.id) ? n2.map(e3 => e3.id === s2.id ? {
            ...e3,
            ...s2
          } : e3) : [...n2, s2].slice(-200)), {
            messages: a2,
            sentMessageIds: [...e2.sentMessageIds.filter(e3 => e3 !== p), s2.id]
          };
        }), m(s2.id), d.set(s2.id, setTimeout(() => u(s2.id), n.CLEANUP));
      } catch (C) {
        throw g(c2, e2 => e2.filter(e3 => e3.id !== p)), u(p), s.error("chat", "Failed to send message:", C), C;
      }
    },
    deleteMessage: async s2 => {
      const a2 = h2().activeChannel;
      a2 && (await e.chat.deleteMessage(a2, s2), g(a2, e2 => e2.filter(e3 => e3.id !== s2)));
    },
    editMessage: async (s2, a2) => {
      const n2 = h2().activeChannel;
      if (!n2) return;
      const t2 = l(await e.chat.editMessage(n2, s2, a2));
      g(n2, e2 => e2.map(e3 => e3.id === s2 ? t2 : e3));
    },
    joinChannel: a2 => {
      e.chat.joinChannel(a2).catch(s.error);
    },
    addMessage: e2 => {
      const s2 = l(e2),
        a2 = s2.channel_id || "global";
      i2(e3 => {
        if (e3.sentMessageIds.includes(s2.id)) return e3;
        const n2 = new Map(e3.messages),
          t2 = n2.get(a2) || [];
        if (!t2.some(e4 => e4.id === s2.id)) {
          const e4 = t2.findIndex(e5 => e5.id.startsWith("temp_") && e5.user_id === s2.user_id && e5.content === s2.content);
          n2.set(a2, e4 >= 0 ? t2.map((a3, n3) => n3 === e4 ? s2 : a3) : [...t2, s2].slice(-200));
        }
        return {
          messages: n2,
          inboxChannels: e3.inboxChannels.map(e4 => e4.id === a2 ? {
            ...e4,
            last: {
              content: s2.content,
              created_at: s2.created_at,
              sender: {
                name: s2.nickname || s2.username || "User",
                avatar: s2.avatar
              }
            }
          } : e4)
        };
      });
    }
  };
});
export { h as useChatStore };
