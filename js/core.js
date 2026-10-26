/* Data registry. Every game/map data file calls ZG.addMap({...}). */
window.ZG = {
  games: [],
  maps: {},       // keyed by "<game>/<map id>"
  mapOrder: [],
  addMap(map) {
    const key = map.game + '/' + map.id;
    this.maps[key] = map;
    this.mapOrder.push(key);
  },
  // Copy another map's guide (an original and its remaster share one quest).
  // `swaps` are [from, to] text replacements applied to every string. The caller
  // adjusts the copy further, then passes it to addMap. Ticks stay separate per map.
  copyMap(srcKey, fields, swaps = []) {
    const src = this.maps[srcKey];
    if (!src) { console.warn(`copyMap: load ${srcKey} first`); return null; }
    const fix = v => {
      if (typeof v === 'string') return swaps.reduce((s, [a, b]) => s.split(a).join(b), v);
      if (Array.isArray(v)) return v.map(fix);
      if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fix(x)]));
      return v;
    };
    const map = fix(JSON.parse(JSON.stringify(src)));
    delete map.group;
    return Object.assign(map, fields);
  },
  mapsFor(gameId) {
    return this.mapOrder
      .map(k => this.maps[k])
      .filter(m => m.game === gameId)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  },
};
