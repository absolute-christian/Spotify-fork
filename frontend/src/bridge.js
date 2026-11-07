export class Bridge {
  constructor(key, base = 'http://127.0.0.1:5000') { this.key = key; this.base = base; }
  async request(path, body) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(this.base + path, {
        method: body ? 'POST' : 'GET', signal: controller.signal,
        headers: { Authorization: `Bearer ${this.key}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
        ...(body ? { body: JSON.stringify(body) } : {}),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.detail || 'Ошибка локального моста');
      return result;
    } catch (error) {
      if (error instanceof TypeError || error.name === 'AbortError') {
        const unavailable = new Error('Фоновое подключение восстанавливается автоматически');
        unavailable.code = 'BRIDGE_UNAVAILABLE';
        throw unavailable;
      }
      throw error;
    } finally { clearTimeout(timeout); }
  }
  status() { return this.request('/status'); }
  next(id) { return this.request(`/get_next_track?request_id=${id}`); }
  feedback(event) { return this.request('/send_feedback', event); }
  auth(token) { return this.request('/auth', { token }); }
  desktopSettings(settings) { return this.request('/desktop/settings', settings); }
  desktopSync(state, acknowledgements, shellActive, layout, wait = false) { return this.request('/desktop/sync', { state, acknowledgements, shellActive, layout, wait }); }
  windowAction(action) { return this.request('/desktop/window', { action }); }
}

export class FeedbackOutbox {
  constructor(bridge, storage, uuid = () => crypto.randomUUID()) {
    this.bridge = bridge; this.storage = storage; this.uuid = uuid;
    try { this.items = JSON.parse(storage.getItem('wave.feedback') || '[]'); }
    catch { this.items = []; }
    this.flushing = null;
  }
  enqueue(track, event_type, seconds) {
    const event = { play_id: track.play_id, track_id: track.yandex_track_id, event_type,
      event_id: this.uuid(), total_played_seconds: Math.round(seconds * 1000) / 1000 };
    this.items.push(event);
    this.save();
    // Delivery retries keep the same event_id, including across Spotify restarts
    void this.flush();
    return event;
  }
  save() { this.storage.setItem('wave.feedback', JSON.stringify(this.items)); }
  flush() {
    if (this.flushing) return this.flushing;
    this.flushing = this.drain().then(delivered => {
      this.flushing = null;
      // An enqueue may land between the final await in drain and this callback
      if (delivered && this.items.length) return this.flush();
    }, error => { this.flushing = null; throw error; });
    return this.flushing;
  }
  async drain() {
    while (this.items.length) {
      try { await this.bridge.feedback(this.items[0]); }
      catch { return false; }
      this.items.shift(); this.save();
    }
    return true;
  }
}
