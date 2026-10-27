/* Black Ops 7 Super Easter Egg — Season 06 "The Haunting". Spans all six maps: each toy quest
   lives on its map's Side Quests tab; this page tracks the whole thing and the final boss rush. */
(() => {
  const I = 'assets/img/bo7/super-easter-egg/';
  const SV = { id: '3KGZlHLMQi0', title: 'Super Easter Egg guide: every map', ch: 'MrDalekJD', len: '42:44' };
  const toy = (map, label) => `[[bo7/${map}/side/item-super-toy|${label}]]`;
  const quest = (map, label) => `[[bo7/${map}/easter-egg|${label}]]`;
  const toyText = (map, label) => `Steps: ${toy(map, `${label}, Side Quests`)}. Exfil with the toy to keep it.`;

  ZG.addMap({
    game: 'bo7', id: 'super-easter-egg', order: 7, quest: true,
    name: 'Super Easter Egg', dlc: 'Season 06 · The Haunting', eeName: 'Playdate with the Twins',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['All six maps', 'Boss rush', 'The Warden operator'],
    blurb: 'Black Ops 7\'s last quest. Finish all six main quests and every map gets a side quest for one of the Twins\' toys. Bring all six home, then survive a playdate: five boss fights back to back.',
    quick: [
      ['Unlock', 'All six main quests (Standard, Cursed or Directed)'],
      ['Toys', 'One per map, in any order; Rex Infernus last'],
      ['Finale', 'Five boss fights, started from Her House'],
      ['Reward', 'The Warden operator, a Memento Mori skin, Mister Peeks Mayhem relic'],
    ],
    intro: {
      start: 'This isn\'t a map: it\'s a quest across all six Black Ops 7 maps. Each toy\'s steps are on that map\'s Side Quests tab.',
      'easter-egg': 'Tick the toys off here as you bring them home. Each toy\'s steps are on its map\'s Side Quests tab.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'how-it-works', tab: 'start', type: 'Primer', name: 'How the Super Easter Egg works', short: 'How it works',
        summary: 'Treyarch added it with Season 06 (September 2026), the last Black Ops 7 Zombies update.',
        blocks: [
          { h: 'Unlocking it' },
          { list: [
            'Finish the main quest on all six maps. Standard, Cursed and Directed completions all count.',
            'Each map then has a toy side quest. Do the toy, then **exfil** with it: it appears on the shelf in Her House on Rex Infernus.',
            'The first five toys can come in any order. The Warden toy on Rex Infernus has to be last.',
            'With all six on the shelf, start the playdate: five boss fights in a row.',
          ] },
          { h: 'Rewards' },
          { list: [
            'While you work towards it: finishing earlier maps\' main quests gives Shadowsmith Blessing power-ups in the Astra Malorum, Totenreich, Kowakujō and Rex Infernus boss fights.',
            'Each toy quest also drops a wonder weapon, an Aether crystal and an Aether tool for that match.',
            'At the end: **The Warden** as a playable operator, a "Memento Mori" skin for the crew member you finished with, and the **Mister Peeks Mayhem** Cursed relic.',
            'Mister Peeks Mayhem turns a Cursed game into a party mode: Golden Armor, Ultra rarity and Pack-a-Punch IV without other relics, Der Wunderfizz always on (random Eternal Perks from 5,000 Essence), cheaper Pack-a-Punch, a better Mystery Box and richer Lucky Eggs.',
          ] },
          { warn: 'Solo: do each toy in one sitting. Loading a save resets that toy\'s quest.' },
          { tip: 'Co-op: every player has to pick up and place the Warden toy themselves, or they won\'t get the rewards.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Playdate with the Twins', short: 'Super Easter Egg', color: 'aether',
        summary: 'Collect the Twins\' six toys from the six maps, then survive their playdate: Z-Rex, the Guardian, a Demolition Derby, Caltheris and the Warden, one after another.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Needs', 'All six main quests done'],
          ['Reward', 'The Warden operator, a Memento Mori skin, Mister Peeks Mayhem relic'],
        ],
        video: SV,
        steps: [
          { w: 15, t: 'Finish all six main quests', d: 'Any mode counts.', list: [
            quest('ashes-of-the-damned', 'Ashes of the Damned'), quest('astra-malorum', 'Astra Malorum'), quest('paradox-junction', 'Paradox Junction'),
            quest('totenreich', 'Totenreich'), quest('kowakujo', 'Kowakujō'), quest('rex-infernus', 'Rex Infernus'),
          ] },
          { w: 53, any: 'These five toys can come in any order', t: 'Ol\' Tessie toy (Ashes of the Damned)', d: toyText('ashes-of-the-damned', 'Ashes of the Damned') },
          { w: 509, any: 'These five toys can come in any order', t: 'Caltheris toy (Astra Malorum)', d: toyText('astra-malorum', 'Astra Malorum') + ' The longest one: it runs alongside most of the main quest.' },
          { w: 1223, any: 'These five toys can come in any order', t: 'Twins toy (Paradox Junction)', d: toyText('paradox-junction', 'Paradox Junction') },
          { w: 1488, any: 'These five toys can come in any order', t: 'Guardian toy (Totenreich)', d: toyText('totenreich', 'Totenreich') },
          { w: 1724, any: 'These five toys can come in any order', t: 'Z-Rex toy (Kowakujō)', d: toyText('kowakujo', 'Kowakujō') + ' The quickest one.' },
          { w: 1902, t: 'Warden toy (Rex Infernus), last', d: `Steps: ${toy('rex-infernus', 'Rex Infernus, Side Quests')}. Every player places it on the shelf in Her House.` },
          { w: 2234, t: 'Get ready, then start the playdate from the toy shelf', d: 'Interact with the full shelf upstairs in Her House on Rex Infernus. The fights start straight away, so set your perks, loadout and GobbleGums first: there\'s no GobbleGum machine in the arena.', list: [
            'The first four fights are in Veytharion\'s arena from Ashes of the Damned; the Warden has his own.',
            'Between fights you get Pack-a-Punch, Der Wunderfizz, an Arsenal station and a crafting table; during a fight they switch off.',
            'An ammo crate works during fights.',
            'Stay inside the purple ring: leaving it hurts.',
            'After each fight the Twins drop a Max Ammo, Full Power, Max Armor and a random perk, and you get about a minute.',
          ] },
          { w: 2282, t: 'Fight 1: Z-Rex', d: 'The Shattered Veil boss, without its acid-spitting jumps out of the arena (acid still covers the floor at times). Its eyes are the weak spot. When it vomits toxic zombies it ignores you for a few seconds: free damage. Eating zombies makes a green crit spot open on its chest. It enrages at half health.' },
          { w: 2346, t: 'Fight 2: The Guardian', d: 'The Citadelle des Morts boss, without the breaks between phases. Shoot his shoulder pads, wrists, chest and feet: each opens a crit spot after enough damage. Watch for the lava he flings across the arena and the hammer slam.' },
          { w: 2379, t: 'Fight 3: Demolition Derby', d: 'Not a boss: you get Ol\' Tessie with the DG-2 turret (two in co-op) and have to kill zombies. The Twins keep raising the target (200, 300, 400…) and add Abominations, Ravagers, spiders and later Zursas. Green barnacles repair Tessie; red ones explode. Around 300 kills they call it done for you.' },
          { w: 2427, t: 'Fight 4: Caltheris the Needle', d: 'Her final form from Astra Malorum, but slower. The Twins switch strong low gravity on and off: combat-roll as you land to soften the fall. Keep damaging her until her armour breaks and a crit spot opens, then she goes down fast.' },
          { w: 2458, t: 'Fight 5: The Warden', d: 'Back in his Rex Infernus arena, fought as in the main quest, but he throws you into jail cells more often (kill an HVT or survive a while to get out). Beat all four phases: a cutscene plays and you exfil with the rewards.' },
        ],
      },
    ],
  });
})();
