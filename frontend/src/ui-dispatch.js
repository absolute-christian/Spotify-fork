export async function dispatchUi(controller, method, args = []) {
  const player = controller.player, state = controller.state;
  const current = state.active ? state.current : state.nativeTrack;
  const uri = args[0] || current?.uri;
  switch (method) {
    case 'audioSettings': return player.audio.state();
    case 'updateAudioSettings': return player.audio.update(args[0]);
    case 'desktopSettings': controller.desktopAppearance = args[0]; return controller.bridge.desktopSettings(args[0]);
    case 'windowAction': if (!controller.bridge.windowAction) throw new Error('Управление окном доступно внутри Spotify'); return controller.bridge.windowAction(args[0]);
    case 'toggle': return state.active ? controller.togglePlay() : current ? player.togglePlay() : controller.start();
    case 'next': return state.active ? controller.next() : player.next();
    case 'back': return state.active ? controller.seek(0) : player.back();
    case 'seek': if (!Number.isFinite(args[0])) throw new Error('Некорректная позиция'); return state.active ? controller.seek(args[0]) : player.seek(args[0]);
    case 'volume': if (!Number.isFinite(args[0])) throw new Error('Некорректная громкость'); return controller.volume(Math.max(0, Math.min(1, args[0])));
    case 'like': if (uri === current?.uri && state.active) { await controller.like(); return controller.state.liked; } if (!/^spotify:track:[a-zA-Z0-9]+$/.test(uri || '')) throw new Error('Некорректный трек'); { const liked = uri === current?.uri ? state.liked : await player.isLiked(uri); await player.setLiked(!liked, uri); controller.tick(); return !liked; }
    case 'dislike': if (!state.active || uri !== current?.uri) throw new Error('Обратная связь Яндексу доступна для текущего трека Моей волны'); return controller.dislike();
    case 'repeat': if (!state.active) return player.repeat(); return;
    case 'shuffle': if (!state.active) { const result = await player.shuffle(); controller.tick(); return result; } return;
    case 'shuffleState': return player.shuffleModes.state(uri);
    case 'cycleCollectionShuffle': if (state.active) throw new Error('Сначала выключите Мою волну или запустите плейлист'); { const result = await player.shuffleModes.cycle(uri); controller.tick(); return result; }
    case 'playFromList': {
      const tracks = args[1];
      if (!/^spotify:track:[a-zA-Z0-9]+$/.test(uri || '') || !Array.isArray(tracks) || tracks.length > 10000 || tracks.some(id => !/^spotify:track:[a-zA-Z0-9]+$/.test(id || '')) || (tracks.length && !tracks.includes(uri))) throw new Error('Некорректный список треков');
      if (state.active) { controller.tick(); controller.event('skip'); await controller.stop(); }
      await player.clearQueue();
      await player.play(uri);
      const remaining = tracks.slice(tracks.indexOf(uri) + 1);
      if (remaining.length) await player.enqueue(remaining);
      controller.tick();
      return;
    }
    case 'play': if (!/^spotify:track:[a-zA-Z0-9]+$/.test(uri || '')) throw new Error('Некорректный трек'); if (state.active) { controller.tick(); controller.event('skip'); await controller.stop(); } await player.play(uri); controller.tick(); return;
    case 'playCollection': if (!/^spotify:(playlist|album):[a-zA-Z0-9]+$/.test(uri || '') && uri !== 'spotify:collection:tracks') throw new Error('Некорректная коллекция'); if (state.active) await controller.stop(); await player.play(uri); if (typeof args[1] === 'boolean') await player.setShuffle(args[1]); controller.tick(); return;
    case 'startWave': return state.active ? controller.togglePlay() : controller.start();
    case 'stopWave': return controller.stop();
    case 'enqueue': if (!uri) return; if (state.active) throw new Error('Ручная очередь доступна после выключения Моей волны'); return player.enqueue([uri]);
    case 'enqueueMany': if (state.active) throw new Error('Ручная очередь доступна после выключения Моей волны'); if (!Array.isArray(args[0]) || args[0].length > 10000 || args[0].some(uri => !/^spotify:track:[a-zA-Z0-9]+$/.test(uri))) throw new Error('Некорректный список треков'); if (!args[0].length) return; return player.enqueue(args[0]);
    case 'removeQueue': if (state.active) throw new Error('Очередь Моей волны управляется Яндексом'); return player.removeQueue(args[0]);
    case 'clearQueue': if (state.active) throw new Error('Сначала выключите Мою волну'); return player.clearQueue();
    case 'lyrics': return player.lyrics(uri);
    case 'home': return player.home();
    case 'catalog': return player.catalog(...args);
    case 'library': return player.library(...args);
    case 'collection': return player.collection(uri);
    case 'writablePlaylists': return player.writablePlaylists();
    case 'open': return player.open(args[0]);
    case 'preferences': return player.preferences();
    case 'openProfile': return player.openProfile();
    case 'followArtist': if (typeof args[1] !== 'boolean') throw new Error('Некорректное состояние подписки'); return player.setArtistFollowed(args[0], args[1]);
    case 'connect': return controller.connect(args[0]);
    case 'status': await controller.checkBridge(); return { connected: controller.state.connected, bridgeOnline: controller.state.bridgeOnline, pendingFeedback: controller.state.pendingFeedback };
    case 'share': if (!/^spotify:track:[a-zA-Z0-9]+$/.test(uri || '')) throw new Error('Некорректный трек'); return player.copyText(`https://open.spotify.com/track/${uri.split(':')[2]}`);
    case 'copyText': if (typeof args[0] !== 'string' || args[0].length > 4096) throw new Error('Некорректный текст'); return player.copyText(args[0]);
    case 'addToPlaylist': return player.addToPlaylist(uri, args[1]);
    case 'removeFromPlaylist': return player.removeFromPlaylist(uri, args[1]);
    default: throw new Error('Действие пока недоступно в форке');
  }
}
