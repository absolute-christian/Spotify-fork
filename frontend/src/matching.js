const editorial = /\s*[([][^)\]]*(?:remaster(?:ed)?|bonus\s*track|deluxe|anniversary)[^)\]]*[)\]]/gi;
export function cleanTitle(value) {
  return String(value || '').replace(editorial, '').replace(/\s*[-–—]\s*(?:\d{4}\s*)?remaster(?:ed)?.*$/i, '').trim();
}
export function normalize(value) {
  return cleanTitle(value).normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()
    .replace(/ё/g, 'е').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}
export function artistAliases(artists) {
  return [...new Set(artists.filter(a => typeof a === 'string' && a.trim()).flatMap(a => [a, ...a.split(/\s*\/\s*|\s*\([^)]*\)\s*/u),
    ...(a.match(/\(([^)]+)\)/)?.slice(1) || [])]).filter(Boolean))];
}
const cyrillic = { а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'kh',ц:'ts',ч:'ch',ш:'sh',щ:'shch',ъ:'',ы:'y',ь:'',э:'e',ю:'yu',я:'ya' };
const transliterate = value => normalize(value).replace(/[а-я]/g, letter => cyrillic[letter]);
const comparable = value => transliterate(value).replace(/\brmx\b|\bremiks\b/g, 'remix');
const withoutFeature = value => cleanTitle(value)
  .replace(/\s*[(\[]\s*(?:feat\.?|ft\.?|featuring)\s+[^)\]]*[)\]]/gi, '')
  .replace(/\s+(?:feat\.?|ft\.?|featuring)\s+.*?(?=\s[-–—]\s|\s*[(\[]|$)/gi, '').trim();
const versionKinds = [
  /\b(?:live|layv|kontsert\w*)\b/, /\bremix\b/, /\b(?:cover|kaver)\b/,
  /\b(?:karaoke|karaoke version)\b/, /\b(?:instrumental|instrumentalnaya)\b/,
  /\b(?:acoustic|akust\w*)\b/, /\b(?:sped up|speed up|nightcore)\b/,
  /\b(?:slowed|zamedl\w*)\b/, /\bradio edit\b/, /\breverb\b/,
];
const isVersion = value => versionKinds.some(pattern => pattern.test(comparable(value)));
function versionParts(value) {
  return (withoutFeature(value).match(/\([^)]*\)|\[[^\]]*\]|\s[-–—]\s.*$/g) || [])
    .filter(isVersion).map(comparable);
}
function searchTitle(value) {
  return withoutFeature(value).replace(/\([^)]*\)|\[[^\]]*\]|\s[-–—]\s.*$/g, part => isVersion(part) ? '' : part).trim();
}
export function queries(track) {
  const title = withoutFeature(track.title).replace(/[":]/g, ' ');
  const names = artistAliases(track.artists?.length ? track.artists : [track.artist]);
  const plain = searchTitle(track.title).replace(/[":]/g, ' ');
  return [...new Set(names.slice(0, 4).map(a => `track:${title} artist:${a.replace(/[":]/g, ' ')}`)
    .concat(`${title} ${names[0] || ''}`, plain !== title ? `${plain} ${names[0] || ''}` : [],
      /[а-яё]/i.test(title + names.join(' ')) ? `${transliterate(plain)} ${transliterate(names[0] || '')}` : []))].slice(0, 7);
}
function editSimilarity(a, b) {
  if (!a || !b) return 0;
  // Bound work on malformed catalogue metadata, not on the number of results.
  if (Math.max(a.length, b.length) > 250) return 0;
  let row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const next = [i];
    for (let j = 1; j <= b.length; j++) next[j] = Math.min(next[j-1]+1, row[j]+1, row[j-1]+(a[i-1] === b[j-1] ? 0 : 1));
    row = next;
  }
  const distance = row[b.length];
  if (Math.min(a.length, b.length) < 6) return 0;
  return 1 - distance / Math.max(a.length, b.length);
}
function similarity(a, b) {
  a = comparable(a); b = comparable(b);
  if (!a || !b) return 0;
  if (a === b) return 1;
  const aa = new Set(a.split(' ')), bb = new Set(b.split(' '));
  const intersection = [...aa].filter(x => bb.has(x)).length;
  return Math.max(editSimilarity(a, b), 2 * intersection / Math.max(1, aa.size + bb.size));
}
export function scoreTrack(wave, spotify) {
  if (!spotify.uri?.startsWith('spotify:track:') || spotify.is_playable === false) return 0;
  const title = withoutFeature(wave.title), candidate = withoutFeature(spotify.name);
  const titleScore = similarity(title, candidate);
  const aliases = artistAliases(wave.artists?.length ? wave.artists : [wave.artist]);
  const spotifyAliases = artistAliases((spotify.artists || []).map(artist => artist.name));
  const artistScore = Math.max(0, ...aliases.flatMap(a => spotifyAliases.map(b => similarity(a, b))));
  // Never turn a studio recording into a live/cover/remix version accidentally
  for (const variant of versionKinds) {
    if (variant.test(comparable(title)) !== variant.test(comparable(candidate))) return 0;
  }
  const versions = versionParts(title), candidateVersions = versionParts(candidate);
  if (comparable(title) !== comparable(candidate) && (versions.length !== candidateVersions.length || versions.some((part, i) => similarity(part, candidateVersions[i]) < .9))) return 0;
  if ((comparable(title).match(/\d+/g) || []).join(',') !== (comparable(candidate).match(/\d+/g) || []).join(',')) return 0;
  if (titleScore < .86 || artistScore < .88) return 0;
  const knownDuration = wave.duration_ms > 0 && spotify.duration_ms > 0;
  const durationDiff = knownDuration ? Math.abs(wave.duration_ms - spotify.duration_ms) : 0;
  const fuzzy = titleScore < 1 || artistScore < 1;
  if ((fuzzy && !knownDuration) || durationDiff > (fuzzy ? Math.min(10000, Math.max(4000, wave.duration_ms * .04)) : 25000)) return 0;
  return titleScore * 0.65 + artistScore * 0.3 + (durationDiff < 5000 ? 0.05 : 0);
}
export async function findSpotifyTrack(track, search) {
  const candidates = new Map();
  for (const query of queries(track)) {
    const response = await search(query);
    const items = response?.tracks?.items || [];
    for (const item of items) {
      const score = scoreTrack(track, item);
      if (score >= .89) candidates.set(item.uri, { item, score });
    }
    if ([...candidates.values()].some(candidate => candidate.score >= .99)) break;
  }
  const ranked = [...candidates.values()].sort((a, b) => b.score - a.score || Math.abs(track.duration_ms - a.item.duration_ms) - Math.abs(track.duration_ms - b.item.duration_ms));
  const best = ranked[0], second = ranked[1];
  if (!best) return null;
  // Close fuzzy matches with different titles are ambiguous, not a confirmed recording.
  if (second && best.score - second.score < .025 && comparable(best.item.name) !== comparable(second.item.name)) return null;
  return best.item;
}
