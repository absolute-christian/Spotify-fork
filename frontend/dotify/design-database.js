// Browser storage adapter for the original Dotify custom-asset repository.
let database;
function open() {
  return database ||= new Promise((resolve, reject) => {
    const request = indexedDB.open('forkspotify-design', 1);
    request.onupgradeneeded = () => { for (const name of ['customAssets', 'presets', 'customFonts']) request.result.createObjectStore(name, { keyPath: 'id' }); };
    request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error);
  });
}
function table(name) {
  async function perform(mode, run) {
    const db = await open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(name, mode), request = run(transaction.objectStore(name));
      transaction.oncomplete = () => resolve(request?.result);
      transaction.onerror = () => reject(transaction.error); transaction.onabort = () => reject(transaction.error);
    });
  }
  const api = {
    get: id => perform('readonly', store => store.get(id)),
    put: value => perform('readwrite', store => store.put(value)),
    delete: id => perform('readwrite', store => store.delete(id)),
    toArray: () => perform('readonly', store => store.getAll()),
    async update(id, patch) { const old = await api.get(id); if (old) await api.put({ ...old, ...patch }); },
    filter: predicate => query(predicate),
    where: key => ({ equals: value => query(item => item[key] === value) }),
    orderBy: key => query(() => true, key),
  };
  function query(predicate, sort, descending = false) {
    const items = async () => {
      const rows = (await api.toArray()).filter(predicate);
      if (sort) rows.sort((a, b) => a[sort] < b[sort] ? -1 : a[sort] > b[sort] ? 1 : 0);
      return descending ? rows.reverse() : rows;
    };
    return { toArray: items, first: async () => (await items())[0], reverse: () => query(predicate, sort, !descending),
      delete: async () => { for (const item of await items()) await api.delete(item.id); },
      modify: async patch => { for (const item of await items()) await api.update(item.id, patch); } };
  }
  return api;
}
export const designDatabase = Object.fromEntries(['customAssets', 'presets', 'customFonts'].map(name => [name, table(name)]));
