/* Shangri-La — Black Ops DLC 3 (Annihilation).
   Same quest as the Black Ops III Zombies Chronicles remaster, so this copies that guide
   (data/bo3/shangri-la.js must load first) and swaps what the original does differently. */
(() => {
  const map = ZG.copyMap('bo3/shangri-la', { game: 'bo1', id: 'shangri-la', order: 3, dlc: 'Annihilation · DLC 3' }, [
    ['plant a Trip Mine in front of each hole and set them off', 'place a Spikemore facing each hole and set it off so its spikes stick in the hole'],
    ['Trip Mines', 'Spikemores'],
    ['Trip Mine', 'Spikemore'],
    ['Pharo', 'MPL'],
    ['4 required (solo only with a PC mod)', '4 required'],
    ['Exactly 4 in the base game', 'Exactly 4'],
  ]);
  if (!map) return;

  map.intro = Object.assign({}, map.intro, {
    start: 'The original Black Ops version. The quest is the same as the Black Ops III remaster (the videos are from that version); the holes step uses Spikemores instead of Trip Mines, and the MPL sits where the remaster has the Pharo. ' + map.intro.start,
  });
  ZG.addMap(map);
})();
