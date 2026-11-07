// Native Spotify ShuffleAPI contract, inspected in installed xpui-modules.js.
export const shuffleType = mode => mode === 2 ? 'smart' : mode === 1 ? 'normal' : 'none';
export const shuffleContext = uri => /^spotify:(?:playlist|album|artist):[a-zA-Z0-9]+$/.test(uri || '') || uri === 'spotify:collection:tracks';
export class SpotifyShuffle {
  constructor(S, wait = ms => new Promise(resolve => setTimeout(resolve, ms))) { this.S = S; this.wait = wait; this.pending = null; }
  context() { return this.S.Platform?.PlayerAPI?.getState?.()?.context?.uri || this.S.Player.data?.context?.uri || ''; }
  current() {
    const state = this.S.Platform?.PlayerAPI?.getState?.() || this.S.Player.data || {};
    const enabled = state.shuffle ?? this.S.Player.getShuffle?.() ?? false;
    return enabled ? state.smartShuffle || state.context?.metadata?.enhanced_context === 'true' ? 2 : 1 : 0;
  }
  async state(uri = this.context()) {
    if (!shuffleContext(uri)) {
      if (!uri || uri === this.context()) return {mode:this.current(),available:[0,1],uri,native:false};
      throw new Error('Перемешивание доступно для плейлиста, альбома или исполнителя');
    }
    const api = this.S.Platform?.ShuffleAPI;
    if (!api?.getAvailableShuffleModes || !api?.getShuffle || !api?.setShuffle) {
      if (uri !== this.context()) throw new Error('В этой версии Spotify недоступны режимы перемешивания плейлиста');
      return {mode:this.current(),available:[0,1],uri,native:false};
    }
    const [mode, modes] = await Promise.all([api.getShuffle(uri),api.getAvailableShuffleModes(uri)]);
    if (![0,1,2].includes(mode) || !Array.isArray(modes)) throw new Error('Spotify вернул неизвестный режим перемешивания');
    return {mode,available:[0,1,2].filter(value=>modes.includes(value)),uri,native:true};
  }
  async set(mode, uri = this.context()) {
    const state = await this.state(uri);
    if (!state.available.includes(mode)) throw new Error('Этот режим перемешивания недоступен для текущего аккаунта или плейлиста');
    const api = this.S.Platform?.ShuffleAPI;
    if (state.native) await api.setShuffle(uri,mode);
    else { if (mode===2) throw new Error('Smart Shuffle недоступен в этой версии Spotify'); await this.S.Player.setShuffle(mode===1); }
    for (let attempt=0;attempt<20;attempt++) {
      const actual = state.native ? await api.getShuffle(uri) : this.current();
      if (actual===mode) return {...state,mode};
      await this.wait(100);
    }
    throw new Error('Spotify не подтвердил изменение режима перемешивания');
  }
  cycle(uri = this.context()) {
    if (this.pending) return this.pending;
    const change = async()=>{
      const state = await this.state(uri);
      if (state.available.length < 2) throw new Error('Spotify запретил изменение режима перемешивания');
      const next = state.available[(state.available.indexOf(state.mode)+1)%state.available.length];
      return this.set(next,uri);
    };
    this.pending=change().finally(()=>{this.pending=null});
    return this.pending;
  }
}
