// Contracts inspected in the installed SettingsAPI and ExclusiveModeAPI.
const quality = { auto: 0, low: 1, medium: 2, high: 3, veryhigh: 4, max: 5 };
const fields = { normalization: ['quality', 'normalizeVolume'], gapless: ['playback', 'gapless'], crossfade: ['playback', 'audioCrossfade'] };
export class SpotifyAudio {
  constructor(platform) { this.platform = platform; }
  setting(group, key) {
    const setting = this.platform?.SettingsAPI?.[group]?.[key];
    if (!setting?.getValue) throw new Error('Эта версия Spotify не предоставляет настройки аудио');
    return setting;
  }
  async read(setting) {
    let dispose, timer;
    const first = new Promise(resolve => { dispose = setting.subValue?.(resolve); timer = setTimeout(resolve, 1000); });
    try { const value = await setting.getValue(); if (setting.subValue) await first; return await setting.getValue() ?? value; }
    finally { clearTimeout(timer); dispose?.(); }
  }
  async state() {
    const names = [...Object.keys(fields), 'quality', 'maxQuality'];
    const descriptors = [...Object.values(fields).map(([group,key]) => this.setting(group,key)), this.setting('quality','streamingQuality'), this.setting('quality','maxSupportedQuality')];
    const values = await Promise.all(descriptors.map(setting => this.read(setting)));
    const state = Object.fromEntries(names.map((name,index) => [name, values[index]]));
    const output = this.platform?.ExclusiveModeAPI;
    state.devices = output?.audioDevices?.().filter(device => device.present && device.id && device.description).map(device => ({ deviceId: device.id, label: device.description })) || [];
    state.device = output?.getSelectedAudioOutputDevice ? await output.getSelectedAudioOutputDevice() || 'default' : 'default';
    state.canSelectDevice = !!output?.setSelectedAudioOutputDevice;
    return state;
  }
  async update(patch) {
    if (!patch || typeof patch !== 'object' || Object.keys(patch).length !== 1) throw new Error('Некорректная настройка аудио');
    const [key, value] = Object.entries(patch)[0];
    if (fields[key]) {
      if (typeof value !== 'boolean') throw new Error('Некорректное значение настройки');
      const setting = this.setting(...fields[key]);
      if (!setting.setValue) throw new Error('Spotify не разрешает менять эту настройку');
      await setting.setValue(value);
    } else if (key === 'quality') {
      if (!(value in quality)) throw new Error('Неизвестное качество звука');
      const max = await this.read(this.setting('quality','maxSupportedQuality'));
      if (quality[value] > max && value !== 'auto') throw new Error('Это качество недоступно для текущего аккаунта Spotify');
      await this.setting('quality','streamingQuality').setValue(quality[value]);
    } else if (key === 'device') {
      const api = this.platform?.ExclusiveModeAPI;
      if (!api?.setSelectedAudioOutputDevice || typeof value !== 'string' || value !== 'default' && !api.audioDevices().some(device => device.id === value && device.present)) throw new Error('Устройство вывода Spotify недоступно');
      await api.setSelectedAudioOutputDevice(value === 'default' ? '' : value);
    } else throw new Error('Spotify не поддерживает эту настройку аудио');
    const current = await this.state();
    const expected = key === 'quality' ? quality[value] : value;
    if (current[key] !== expected) throw new Error('Spotify не подтвердил изменение настройки аудио');
    return current;
  }
}
