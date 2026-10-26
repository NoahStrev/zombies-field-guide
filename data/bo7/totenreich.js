/* Totenreich — Black Ops 7, Season Three Reloaded */
(() => {
  const I = 'assets/img/bo7/totenreich/';
  const E = 't4nfWhaLiDs'; // MrRoflWaffles easter egg guide
  const P = 'oOKTzpBOa1A'; // TheGamingRevolution power and Pack-a-Punch
  const J = 'jbauO_oTN1c'; // MrRoflWaffles Jotunn Star guide
  const EV = { id: E, title: 'Totenreich easter egg guide', ch: 'MrRoflWaffles', len: '40:06' };
  const PV = { id: P, title: 'Totenreich power and Pack-a-Punch', ch: 'TheGamingRevolution', len: '4:16' };
  const JV = { id: J, title: 'Free Jotunn Star wonder weapon', ch: 'MrRoflWaffles', len: '6:54' };

  ZG.addMap({
    game: 'bo7', id: 'totenreich', order: 4,
    name: 'Totenreich', dlc: 'Season Three Reloaded', eeName: 'Totenreich quest',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Jotunn Star', 'Giant robot Tyr', 'Dravakar boss'],
    blurb: 'A frozen Norwegian fjord village and Group 935 factory, watched over by the giant robot Tyr. Build the Jotunn Star, repair the Wundersignal, forge an Atomkraft core from three uranium rods, follow the runes and fight the ice Shadowsmith Dravakar.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op)'],
      ['Wonder weapon', 'Jotunn Star (free quest)'],
      ['Scorestreaks', 'Glocke Drop and Wunderbarrage controllers'],
      ['Boss', 'Dravakar, wrestling Tyr'],
    ],
    intro: {
      start: 'Repair two power lines, enter Tyr\'s head and restart his mainframe, then use the Glocke Drop on Fishery Island to bring Pack-a-Punch. Black Ops 7 rules are explained in the basics on Ashes of the Damned.',
      weapons: 'The Jotunn Star is a lantern-flail: melee kills charge it for a ranged fireball, and holding it out protects you from frost. The quest uses its fireball several times.',
      'easter-egg': 'Three big parts after the Jotunn Star: the Wundersignal, the Atomkraft core and the runes. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Repair the broken power lines on both sides of the map, enter Tyr\'s head and use the mainframe, take the admin keycard that falls out, open the Admin Office in the War Factory for the Glocke Drop Controller and sync it on Fishery Island.',
        video: PV,
        steps: [
          { w: 46, t: 'Repair both broken power lines', d: 'One on each side of the map (the Core Foundry side and the Market side). Each takes a few seconds: clear zombies first.' },
          { w: 107, t: 'Enter Tyr\'s head and use the mainframe', d: 'Through the big yellow circle at his shoulder or foot. You get ejected after a minute (or leave by a chute).' },
          { w: 152, t: 'Grab the admin keycard', d: 'A zombie is thrown out with you and drops it where it lands.' },
          { w: 167, t: 'Open the Admin Office in the War Factory and take the Glocke Drop Controller' },
          { w: 198, t: 'Sync it on Fishery Island', d: 'Use it on the purple ring and kill the purple-eyed zombies. The Glocke pod lands and turns into Pack-a-Punch.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'jotunn', tab: 'weapons', type: 'Wonder weapon', name: 'Jotunn Star', img: I + 'jotunn.webp', color: 'fire',
        summary: 'A burning lantern on a chain. Melee hits several zombies; melee kills charge the lantern so the aim button throws a fireball. Holding it out keeps frost off you. Standing in a Flammenfalle trap keeps it charged.',
        facts: [['Get it', 'Free quest (top of the lighthouse)'], ['Charge', 'Melee kills or a Flammenfalle trap']],
        video: JV,
        steps: [
          { w: 142, t: 'Take the chain links from the ship\'s bow', d: 'In the Dry Dock, press the button to lower a wooden wall for 30 seconds, wall-run off it and grab the chains at the tip of the ship.' },
          { w: 174, t: 'Put the Chilly Chunks on the Market table', d: 'The can is behind the truck next to Deadshot Daiquiri on the Storm Bridge. The next special round brings a named Zursa (bear).' },
          { w: 207, t: 'Kill the Zursa for the lantern' },
          { w: 222, t: 'Open the Burial Grounds with the chains and place the lantern', d: 'The little building in the top right corner of the map. Put the lantern on the shrine downstairs.' },
          { w: 237, t: 'Match the four constellations', d: 'Facing the shrine from the stairs, take its symbols in this order: left side, right side, back, front. For each, wait for the same constellation to rotate past on the wall and interact with it.', tip: 'Wrong order: interact with the symbol on the shrine to reset.' },
          { w: 314, t: 'Follow Astrid\'s ghost and feed her souls', d: 'She stops twice; kill the frost zombies around her each time.' },
          { w: 346, t: 'Climb the floating platforms to the top of the lighthouse', d: 'Start from the non-lighthouse side (not the zipline). Lots of zombies: Kazimirs and Aether Shroud help. Take the Jotunn Star at the top.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Totenreich main quest', short: 'Main quest',
        summary: 'Fire a flak round at the Riese head for a transmitter, decode Tyr\'s blinking lights for the Wunderbarrage, collect three uranium rods for an Atomkraft core, roast the Dravakar shard to summon a Necropincer, follow the church runes and fight Dravakar.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, camos in Cursed mode'],
          ['Boss', 'Dravakar'],
        ],
        prep: [
          { t: 'Power and Pack-a-Punch on', needs: ['power-pap'] },
          { t: 'The Jotunn Star', needs: ['jotunn'] },
          { t: 'An RC car (free in the Market crate), Molotovs, a fishing rod' },
          { t: 'For the boss: full armour, GobbleGums, Near-Death Experience' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 450, t: 'Take the crowbar from the lighthouse shelf' },
          { w: 466, t: 'Pry open crates until one holds a flak round', d: 'Wooden crates with red IDs: in the War Factory near the Admin room, the Core Foundry by the VS Recon wall-buy, Fjord Road by the Flammenfalle trap, and the Dry Dock behind the boat. A note on the ground (Dry Dock or by Tyr\'s foot) says which ID is right; a wrong crate shocks, gasses or confuses you for 30 seconds.' },
          { w: 498, t: 'Load it in the right flak gun by the lighthouse and hit it with the Jotunn Star', d: 'The one facing spawn. It shoots the Riese robot head in spawn.' },
          { w: 513, t: 'Take the transmitter from the robot head and fit it in Tyr\'s head', d: 'Second floor, in the sparking slot.' },
          { w: 544, t: 'Count the blinking lights in Tyr\'s head', d: 'Two lights blink together, then one carries on alone. Count each light: that\'s one two-digit pair (left, right). After a pause comes the second pair. Example: three together then two more on the right = 3 and 5.' },
          { w: 606, t: 'Melt the Core Foundry rope with a Molotov and climb to the oscilloscope', d: 'Enter the first pair on the left (frequency) and right (amplitude) dials. A barrage fires. Next round, enter the second pair. A Wunderbarrage Controller appears in the next room.', tip: 'Wrong code: it comes back online after 60 seconds.' },
          { w: 701, any: 'Uranium in any order', t: 'Uranium 1: fish up the glowing green fish', d: 'Grab a fishing rod (Dry Dock, Storm Bridge, Fishery Island, Beacon Island) and fish where green fish jump. It brings an Irradiated Ravager: next round it appears with a pack (look for the HVT icon). Kill it for the rod.' },
          { w: 950, any: 'Uranium in any order', t: 'Uranium 2: the Genetic Lab cell', d: 'Melee the grate by the Core Foundry stairs and send the RC car through, jump it onto the boat and blow up the barrels in the secret room. Inside, the hallway shows which head jars (A to E = 1 to 5) are radioactive: put those in the machine for the purple jar, take the Necrospike from the crab arm and pick the cell lock.' },
          { w: 1157, any: 'Uranium in any order', t: 'Uranium 3: Glocke Drop kills', d: 'Call a Glocke Drop and kill at least 20 floating zombies. It drops the uranium.' },
          { w: 1217, t: 'Barrage the Dry Dock building and load the claw machine', d: 'Call a Wunderbarrage on the debris on the stairs of building 02, go up into the workshop (it can take a minute to open). Put the three rods in the claw machine and play its grid game without overloading the meter: keep your rods away from the lit cluster.' },
          { w: 1545, t: 'Carry the Atomkraft core to Quick Revive and defend it', d: 'You can\'t sprint, and ziplines or Tyr\'s head make you drop it. Put it on the pallets by Quick Revive, start the generator in the shed and defend it, restarting the generator when it cuts out.' },
          { w: 1639, t: 'Put the charged core on the barrel on the Storm Bridge', d: 'A cutscene plays and the Dravakar shard drops by Tyr\'s foot.' },
          { w: 1660, t: 'Roast the shard in Blodheim Hall', d: 'Put it on the spit over the bonfire and light it with a Jotunn Star fireball.' },
          { w: 1707, t: 'Throw zombies at it with a Disciple Injection', d: 'A free one is in the stave church. After about four hits a lockdown starts with a Necropincer: kill it for the sunstone.' },
          { w: 1768, t: 'Light the runes in the order the arrows show', d: 'Put the sunstone in the middle of the church and hit it with a fireball. Three arrows appear in the sky (one, two and three lines through them) pointing at runes. Light the bonfire under each matching rune around the map with a fireball, in that order. When they all point one way, you\'re done.' },
          { w: 1988, t: 'Get ready and start the fight from the console in Tyr\'s head' },
          { w: 2005, t: 'Phase 1: break Dravakar\'s red spots so Tyr wins', d: 'He wrestles Tyr. Shooting the red spots lets Tyr clear the zombies (Wunderbarrage), then drop scorestreaks (Glocke). Miss them and he blasts your area with a storm. Flammenfalle traps keep you warm.' },
          { w: 2036, t: 'Phase 2: destroy the three frost heads, then the red spots', d: 'Stun each head by throwing a grenade (or fireball) into its mouth, then shoot it. Dravakar fires rune-shaped ice volleys: H falls randomly, S and V come straight at you, lines are dodged by going prone. Hide behind cover and stay warm in the traps.' },
          { w: 2301, t: 'Final phase: shoot his face', d: 'He walls you in the middle with faster runes and endless zombies. Pop your last GobbleGums. If you finished Astra Malorum, Caltheris\'s Blessing revives you once if everyone goes down.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"No One There"',
        summary: 'Interact with three Mister Peeks headphones: on boxes near PhD Flopper in the Dry Dock, near Double Tap in the Core Foundry, and at the bottom of a shelf next to a plate in Loven\'s Antiquities.',
      },
    ],
  });
})();
