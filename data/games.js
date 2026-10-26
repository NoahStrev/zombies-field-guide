/* One tab per game. Set active: true once a game has map data. */
ZG.games = [
  { id: 'waw', name: 'World at War', short: 'WaW', year: 2008, active: false },
  { id: 'bo1', name: 'Black Ops', short: 'BO1', year: 2010, active: false },
  { id: 'bo2', name: 'Black Ops II', short: 'BO2', year: 2012, active: false },
  {
    id: 'bo3', name: 'Black Ops III', short: 'BO3', year: 2015, active: true,
    blurb: 'Every Black Ops III map with a main easter egg: the six Aether story maps plus the four Zombies Chronicles remasters that have a full quest.',
    groups: [
      { id: 'original', label: 'Black Ops III maps' },
      { id: 'chronicles', label: 'Zombies Chronicles' },
    ],
  },
  { id: 'bo4', name: 'Black Ops 4', short: 'BO4', year: 2018, active: false },
  { id: 'bocw', name: 'Cold War', short: 'CW', year: 2020, active: false },
  { id: 'bo6', name: 'Black Ops 6', short: 'BO6', year: 2024, active: false },
  { id: 'bo7', name: 'Black Ops 7', short: 'BO7', year: 2025, active: false },
];
