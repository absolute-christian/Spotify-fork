import { findSpotifyTrack } from '../../../frontend/src/matching.js';
import { FeedbackOutbox } from '../../../frontend/src/bridge.js';
import { bestArtwork } from '../../../frontend/src/artwork.js';
import { normalizeTrack } from '../../../frontend/src/catalog.js';

export class WaveController {
  constructor(player, bridge, storage, options = {}) {
    this.player = player; this.bridge = bridge;
    this.uuid = options.uuid || (() => crypto.randomUUID());
    this.now = options.now || (() => performance.now());
    this.wait = options.wait || (ms => new Promise(r => setTimeout(r, ms)));
    this.outbox = new FeedbackOutbox(bridge, storage, this.uuid);
    this.listeners = new Set(); this.generation = 0; this.busy = false;
    this.lastTick = this.now(); this.current = null; this.pending = null; this.savedModes = null;
    this.state = { active: false, loading: false, connected: false, bridgeOnline: false, current: null,
      playing: false, progress: 0, duration: 0, liked: false, error: '', status: 'Всё начинается с одного трека',
      pendingFeedback: this.outbox.items.length, skipped: 0, history: [], volume: 0.7 };
  }
  subscribe(callback) { this.listeners.add(callback); return () => this.listeners.delete(callback); }
  emit(patch = {}) { this.state = { ...this.state, ...patch }; for (const fn of this.listeners) fn(this.state); }
  safe(action) { Promise.resolve().then(action).catch(e => this.emit({ error: e.message })); }
  async checkBridge() {
    if (this.checkingBridge) return this.checkingBridge;
    this.checkingBridge = this.refreshBridge().finally(() => { this.checkingBridge = null; });
    return this.checkingBridge;
  }
  async refreshBridge() {
    try {
      await this.outbox.flush();
      const status = await this.bridge.status();
      this.emit({ connected: status.connected, bridgeOnline: true,
        savedToken: !!status.saved_token, restoringAccount: !!status.restoring, accountError: status.auth_error || '',
        pendingFeedback: status.pending_feedback + this.outbox.items.length,
        syncError: status.feedback_error,
        ...(this.state.error === this.bridgeFailure ? { error: '' } : {}) });
      this.bridgeFailure = null;
    } catch (error) {
      this.bridgeFailure = error.message;
      this.emit({ bridgeOnline: false, connected: false, error: error.message });
    }
  }
  async connect(token) {
    await this.bridge.auth(token); await this.checkBridge();
    if (!this.state.bridgeOnline || !this.state.connected) throw new Error(this.state.error || 'Мост не подтвердил подключение Яндекс Музыки');
    this.emit({ error: '' });
  }
  event(kind, track = this.current) {
    if (!track?.started && kind !== 'trackStarted') return;
    this.outbox.enqueue(track, kind, track.listened || 0);
    this.emit({ pendingFeedback: this.outbox.items.length });
  }
  async start() {
    if (this.state.active) return;
    if (this.busy) throw new Error('Подождите завершения переключения');
    if (!this.state.connected) { await this.checkBridge(); if (!this.state.connected) throw new Error('Подключите Яндекс Музыку в настройках'); }
    this.savedModes = this.player.getModes();
    try {
      await this.player.isolate();
      this.emit({ active: true, error: '' });
      await this.next('start');
    } catch (error) { await this.stop(); throw error; }
  }
  async stop() {
    this.generation++; this.pending = null;
    if (this.current) this.current.ended = true;
    this.current = null;
    this.emit({ active: false, loading: false, status: 'Волна выключена' });
    if (this.savedModes) {
      const modes = this.savedModes; this.savedModes = null;
      await this.player.restore(modes);
    }
  }
  async next(reason = 'skip') {
    if (!this.state.active || this.busy) return;
    this.busy = true;
    const generation = this.generation;
    this.emit({ loading: true, error: '', status: 'Ловим вашу волну' });
    try {
      if (reason === 'skip' || reason === 'dislike') {
        this.tick();
        this.event('skip');
        if (this.current) this.current.ended = true;
        await this.player.pause();
      }
      for (let attempt = 0; attempt < 25; attempt++) {
        if (generation !== this.generation || !this.state.active) return;
        const id = this.uuid();
        // Retry the same candidate request after a lost response
        let wave;
        try { wave = await this.bridge.next(id); }
        catch { wave = await this.bridge.next(id); }
        if (generation !== this.generation) return;
        const spotify = await findSpotifyTrack(wave, q => this.player.search(q));
        if (generation !== this.generation) return;
        if (!spotify) {
          this.emit({ skipped: this.state.skipped + 1, status: 'Ищем совпадение в Spotify' });
          // An unavailable recording was never heard: no false skip/start feedback
          continue;
        }
        const target = { ...wave, uri: spotify.uri, spotifyTitle: spotify.name,
          cover: bestArtwork(spotify.album?.images) || wave.cover_url,
          duration: spotify.duration_ms, listened: 0, started: false, finished: false, ended: false };
        this.pending = target;
        await this.player.isolate();
        if (generation !== this.generation) return;
        await this.player.play(target.uri);
        let confirmed = false;
        for (let n = 0; n < 80; n++) {
          if (generation !== this.generation) return;
          const state = this.player.snapshot();
          if (state.uri === target.uri && state.playing && state.progress > 0) { confirmed = true; break; }
          await this.wait(150);
        }
        if (!confirmed) {
          // Do not label a failed playback as a listened/skipped Yandex track
          throw new Error('Spotify не подтвердил воспроизведение · проверьте устройство и доступность трека');
        }
        this.current = target; this.pending = null; this.lastTick = this.now();
        const snap = this.player.snapshot(); this.lastProgress = snap.progress; this.wasPlaying = snap.playing;
        this.event('trackStarted', target); target.started = true;
        this.emit({ current: target, history: [target, ...this.state.history].slice(0, 12),
          nativeUri: snap.uri, nativeTrack: snap.track || normalizeTrack(spotify),
          playing: snap.playing, liked: snap.liked, progress: snap.progress, duration: snap.duration || target.duration,
          status: 'Подобрано для вас' });
        return;
      }
      throw new Error('В 25 рекомендациях нет надёжного совпадения · попробуйте продолжить волну');
    } catch (error) {
      if (generation === this.generation) {
        this.pending = null;
        this.emit({ error: error.message, status: 'Волна ждёт продолжения' });
      }
    } finally {
      this.busy = false;
      if (generation === this.generation) this.emit({ loading: false });
    }
  }
  tick() {
    const now = this.now(), elapsed = Math.min(2, Math.max(0, (now - this.lastTick) / 1000)); this.lastTick = now;
    const state = this.player.snapshot();
    this.emit({ volume: state.volume, playing: state.playing,
      progress: state.progress, duration: state.duration || this.state.duration, liked: state.liked,
      nativeUri: state.uri || null, nativeTrack: state.track || null, repeat: state.repeat || 0, shuffle: !!state.shuffle, shuffleType: state.shuffleType || (state.shuffle ? 'normal' : 'none'),
      contextName: state.contextName || '', contextUri: state.contextUri || '' });
    if (!this.state.active || !this.current || this.pending || this.current.ended) return;
    const current = this.current;
    if (state.uri !== current.uri) {
      // Native media controls / Connect can bypass patched methods and DOM buttons
      if (!this.busy) {
        const naturalEnd = current.duration > 0 && this.lastProgress >= current.duration - 1500;
        if (naturalEnd) {
          if (!current.finished) { this.event('trackFinished'); current.finished = true; }
        } else this.event('skip');
        current.ended = true;
        this.safe(async () => { await this.player.pause(); await this.next('external'); });
      }
      return;
    }
    const delta = state.progress - (this.lastProgress ?? state.progress);
    if (this.wasPlaying && delta >= 0 && delta <= elapsed * 1000 + 1500) {
      current.listened += Math.min(elapsed, delta / 1000);
    }
    if (state.playing !== this.wasPlaying) this.event(state.playing ? 'resume' : 'pause');
    if (!current.finished && current.listened >= 30) { this.event('trackFinished'); current.finished = true; }
    // Repeat-one fences Spotify autoplay. Advance ourselves at the end or if it loops
    const duration = state.duration || current.duration;
    const wrapped = this.lastProgress > duration - 1800 && state.progress < 1500;
    const reachedEnd = duration > 0 && state.progress >= duration - (state.playing ? 350 : 100);
    if (!this.busy && (wrapped || reachedEnd)) {
      if (!current.finished) { this.event('trackFinished'); current.finished = true; }
      current.ended = true; this.safe(() => this.next('finished'));
    }
    this.lastProgress = state.progress; this.wasPlaying = state.playing;
  }
  async togglePlay() {
    if (!this.state.active) return this.start();
    if (!this.current || this.current.ended) return this.next('retry');
    await this.player.togglePlay(); this.tick();
  }
  async like() {
    if (!this.state.active || !this.current?.started || this.busy || this.liking || this.current.ended) return;
    this.liking = true;
    const track = this.current;
    try {
      const desired = !this.player.snapshot().liked;
      await this.player.setLiked(desired, track.uri);
      this.event(desired ? 'like' : 'unlike', track);
      if (this.current === track) this.emit({ liked: desired });
    } finally { this.liking = false; }
  }
  async dislike() {
    if (!this.state.active || !this.current?.started || this.busy || this.current.ended) return;
    this.event('dislike'); await this.next('dislike');
  }
  seek(ms) { if (this.current && !this.busy) this.player.seek(ms); }
  volume(level) { this.player.volume(level); this.emit({ volume: level }); }
}
