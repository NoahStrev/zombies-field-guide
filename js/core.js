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
  mapsFor(gameId) {
    return this.mapOrder
      .map(k => this.maps[k])
      .filter(m => m.game === gameId)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  },
};
