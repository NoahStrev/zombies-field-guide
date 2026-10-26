/* One tab per game. Set active: true once a game has map data.
   World at War has no tab: none of its maps has a main easter egg. */
ZG.games = [
  {
    id: 'bo1', name: 'Black Ops', short: 'BO1', year: 2010, active: true,
    blurb: "The four Black Ops maps with a main easter egg. Ascension, Shangri-La and Moon reuse the Black Ops III remaster guides with the original's differences noted; Call of the Dead has its own. Finishing Call of the Dead and Shangri-La unlocks the full Moon quest. (Kino der Toten, Five and the remade World at War maps are left out: no main quest.)",
  },
  {
    id: 'bo2', name: 'Black Ops II', short: 'BO2', year: 2012, active: true,
    blurb: 'Every Black Ops II map with a main easter egg. TranZit, Die Rise and Buried each let you side with Maxis or Richtofen, and together they lead to one ending. Most of these quests need a full team. (Nuketown Zombies is left out: it has no main quest.)',
  },
  {
    id: 'bo3', name: 'Black Ops III', short: 'BO3', year: 2015, active: true,
    blurb: 'Every Black Ops III map with a main easter egg: the six Aether story maps plus the four Zombies Chronicles remasters that have a full quest.',
    groups: [
      { id: 'original', label: 'Black Ops III maps' },
      { id: 'chronicles', label: 'Zombies Chronicles' },
    ],
  },
  {
    id: 'iw', name: 'Infinite Warfare', short: 'IW', year: 2016, active: true,
    blurb: 'All five Infinite Warfare maps. Each main easter egg recovers a piece of the Soul Key; finish all five to unlock Director\'s Cut. Infinity Ward renames most things, so start with the basics on Zombies in Spaceland.',
  },
  {
    id: 'bo4', name: 'Black Ops 4', short: 'BO4', year: 2018, active: true,
    blurb: 'Every Black Ops 4 map with a main easter egg: the four Chaos story maps and the three Aether story maps. (Classified is left out: its only quest is a round 150 cutscene.)',
    groups: [
      { id: 'chaos', label: 'Chaos story' },
      { id: 'aether', label: 'Aether story' },
    ],
  },
  {
    id: 'bocw', name: 'Cold War', short: 'CW', year: 2020, active: true,
    blurb: 'All four Cold War round-based maps. Cold War changed a lot (essence, salvage, armour, tiered Pack-a-Punch), so start with the basics on Die Maschine. Every quest can be done solo.',
  },
  { id: 'bo6', name: 'Black Ops 6', short: 'BO6', year: 2024, active: false },
  { id: 'bo7', name: 'Black Ops 7', short: 'BO7', year: 2025, active: false },
];
