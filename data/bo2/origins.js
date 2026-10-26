/* Origins — Black Ops II DLC 4 (Apocalypse).
   The quest, staffs and part spots are the same as the Black Ops III Zombies Chronicles remaster,
   so this reuses that guide (data/bo3/origins.js must load first) minus the remaster-only extras.
   Ticks are kept separately for each version. */
(() => {
  const src = ZG.maps['bo3/origins'];
  if (!src) { console.warn('bo2/origins: load data/bo3/origins.js first'); return; }
  const map = JSON.parse(JSON.stringify(src));
  delete map.group;
  Object.assign(map, { game: 'bo2', id: 'origins', order: 5, dlc: 'Apocalypse · DLC 4' });

  // Remaster-only: the "Remember Forever" song and the drone/Trip Mine note.
  map.items = map.items.filter(it => it.id !== 'song-remember');
  for (const it of map.items) {
    if (it.facts) it.facts = it.facts.filter(([k]) => !/BO3/.test(k));
  }
  map.intro = Object.assign({}, map.intro, {
    start: 'The original version of the map. The quest and every part spot match the Black Ops III remaster (the videos are from that version). ' + map.intro.start,
  });
  ZG.addMap(map);
})();
