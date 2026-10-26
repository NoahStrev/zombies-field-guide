/* The Archon — Call of Duty: Vanguard, Season Five */
(() => {
  const I = 'assets/img/vg/the-archon/';
  const E = 'S-5Fu-FNlDA'; // MrRoflWaffles easter egg guide
  const EV = { id: E, title: 'The Archon easter egg guide', ch: 'MrRoflWaffles', len: '8:54' };

  ZG.addMap({
    game: 'vg', id: 'the-archon', order: 2,
    name: 'The Archon', dlc: 'Season Five', eeName: 'There Archon Be Only One',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Decimator Shield', 'Three trials', 'Kortifex'],
    blurb: 'Vanguard\'s finale, back at the desert oasis from Der Anfang. Rebuild Pack-a-Punch with a ritual, pass the Construct\'s three trials, then follow Kortifex into the Dark Aether and destroy his eyes.',
    quick: [
      ['Main EE', 'There Archon Be Only One (solo or co-op)'],
      ['Wonder weapon', 'Decimator Shield (from a trial); Wunderwaffe DG-2 as a reward'],
      ['Needs', 'A shovel, three Molotovs, Ring of Fire, a Pack-a-Punched gun to give away'],
      ['Boss', 'Kortifex, grown into a giant (three phases)'],
    ],
    intro: {
      start: 'Pack-a-Punch is broken at the Temple: rebuilding it is the first step of the quest. Vanguard rules are explained in the basics on Shi No Numa.',
      weapons: 'The Decimator Shield comes from the Trial of Resilience. Its blast (aim button) is what breaks the trial\'s columns of heads.',
      'easter-egg': 'The three trials can be done in any order; each has a short challenge to unlock its obelisk, then the trial itself. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch ritual', short: 'Pack-a-Punch',
        summary: 'Find the two Pack-a-Punch parts marked on screen, put them on the machine at the Temple and kill the ghostly zombies that wake up around it.',
        video: EV,
        steps: [
          { w: 0, anyList: 'Parts in any order', t: 'Pick up the two parts', list: [
            'On top of a train car in the Derailment.',
            'On a plane wing in the Spike.',
          ] },
          { w: 0, t: 'Start the ritual at the Temple and kill zombies by the machine', d: 'Ghostly zombies and Sturmkriegers around the area turn real. Kill them near the machine until your screen flashes white.' },
        ],
      },
      {
        id: 'shovel', tab: 'start', type: 'Map mechanic', name: 'Shovels and dig spots', short: 'Shovels',
        summary: 'Shovels lie around the map (one is right by the green perk fountain). Dig spots are used for the Trial of Mindfulness, the femur in the Trial of Resilience, and the Mr. Peeks reward.',
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'decimator', tab: 'weapons', type: 'Wonder weapon', name: 'Decimator Shield', img: I + 'decimator.webp', color: 'fire',
        summary: 'A shield with a huge blast attack on a 30-second cooldown. Its melee kills normal zombies outright.',
        facts: [['Get it', 'Trial of Resilience challenge'], ['Blast', 'Aim button; recharges in 30 seconds']],
        blocks: [{ p: 'The steps are in the main quest checklist, under the Trial of Resilience.' }],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'There Archon Be Only One',
        summary: 'Rebuild Pack-a-Punch, place the Relic Mirror to free Kortifex, pass the Trials of Resilience, Sacrifice and Mindfulness, then fight Kortifex in the Dark Aether.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Wunderwaffe DG-2, five Sacrificial Hearts, a perk tier upgrade, calling card'],
          ['Boss', 'Kortifex the Deathless'],
        ],
        prep: [
          { t: 'Grab a shovel', needs: ['shovel'] },
          { t: 'Ring of Fire as your Field Upgrade for the Trial of Sacrifice', d: 'You can switch to it mid-game by reselecting your class.' },
        ],
        video: EV,
        steps: [
          { w: 0, t: 'Rebuild Pack-a-Punch', needs: ['power-pap'] },
          { w: 15, t: 'Put the Relic Mirror on the plinth in front of it', d: 'Wait for the plinth to appear after the dialogue.' },
          { w: 31, t: 'Go through the portal into the Dark Aether', d: 'After about a minute you\'re downed on purpose. It doesn\'t use a Self-Revive. You\'re sent back, and the portal is now chained shut.' },
          { w: 46, any: 'Trials in any order', t: 'Resilience: shoot the glowing crystals outside the map until a red orb appears', d: 'High on the walls near the blue and red perk fountains. Hold interact on the orb.' },
          { w: 61, any: 'Trials in any order', t: 'Resilience: bring back the skull, the hat and the femur, one at a time', d: 'Each slows you and gives you a condition on the left of the screen to follow on the way back. The skull is on a table upstairs near the yellow fountain; the hat on a table near the green fountain; the femur is dug up at the far end of the train area (the Derailment, near the Aethereal Haste fountain).' },
          { w: 108, any: 'Trials in any order', t: 'Resilience: take the Decimator Shield and start the trial at the obelisk', needs: ['decimator'], d: 'Blast a column of heads with the shield (aim button), take a chalice from the stump that\'s left, and pour it into the empty perk fountain. Repeat for each column (four in solo). The blast takes 30 seconds to recharge.' },
          { w: 154, any: 'Trials in any order', t: 'Sacrifice: light the three torches in the Derailment with Molotovs, fast', d: 'One is inside the train car on the way in. The Molotov wall buy is on the middle right of the map. Miss one and you start over.' },
          { w: 169, any: 'Trials in any order', t: 'Sacrifice: feed the red orb a Pack-a-Punched gun and kill the Uberkrieger', d: 'You lose the gun for the game and all your armour.', tip: 'Buy a wall weapon that\'s already Pack-a-Punched (the blue one) for 4,000 and give it that.' },
          { w: 199, any: 'Trials in any order', t: 'Sacrifice: charge the obelisks with Ring of Fire', d: 'Start the obelisk on top of the train car. Kill near it until a Full Power drops, then pop Ring of Fire at an outer obelisk and kill about seven or eight zombies there. A beam connects it. Repeat for each (four in solo).' },
          { w: 246, any: 'Trials in any order', t: 'Mindfulness: dig near Pack-a-Punch until a red orb flies out', d: 'Do this with one zombie left in the round.' },
          { w: 261, any: 'Trials in any order', t: 'Mindfulness: copy the symbols, then survive the condition', d: 'The orb shows some symbols. The same ones (and others) appear on the floor: stand on the matching ones in the same order to charge them. Then survive a minute under a rule (no damage, or don\'t move, and so on). Three times: three, four, then five symbols.' },
          { w: 321, any: 'Trials in any order', t: 'Mindfulness: charge the floor symbols without killing', d: 'Start the obelisk. Kill as few zombies as you can: too many kills fails it. A Zaballa spawns; her stun helps you get past zombies.' },
          { w: 351, t: 'Get ready for the boss', d: 'Tier 3 armour, Fiendish Fortitude maxed, your best gun upgraded. Ring of Fire is great for burst damage. Monkey bombs aren\'t much use here.' },
          { w: 382, t: 'Phase 1: shoot Kortifex\'s upper eye', d: 'Go through the portal. He summons zombies, a slow big orb and small electric balls: keep moving. Meanwhile, shoot the crystals around the arena for red shards and throw them into the plant-like anemones; about 30 seconds later each spits back a charged shard. Keep a few for later.', imgs: [{ src: I + 'kortifex.webp', cap: 'Kortifex in The Archon' }] },
          { w: 443, t: 'Phase 2: throw charged crystals at the floating pillars, then shoot his new weak point', d: 'The pillars smash into his shield. Make more charged crystals with the anemones as you go.' },
          { w: 473, t: 'Phase 3: the same, but stop him healing', d: 'When he charges up a heal, pour damage in to interrupt it. If he heals, he only goes back to just over half. Sturmkriegers join in.' },
          { w: 520, t: 'Bring his health to zero', d: 'He shrinks and falls into the Dark Aether. Loot drops, including a Wunderwaffe DG-2.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Vanishing Shore"',
        summary: 'Interact three times with the instrument upstairs in the Radio Outpost.',
      },
      {
        id: 'peeks', tab: 'side', type: 'Free reward', name: 'Mr. Peeks',
        summary: 'Dig up three parts of a Mr. Peeks bunny with a shovel at dig spots around the map. The last part spawns a Ray Gun and some Bonus Points power-ups.',
      },
    ],
  });
})();
