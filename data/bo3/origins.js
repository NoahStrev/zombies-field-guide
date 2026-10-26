/* Origins — Zombies Chronicles remaster (originally Black Ops II) */
(() => {
  const I = 'assets/img/bo3/ori/';
  const staffEnd = (color, pedestal, kills) => ([
    { t: `Turn the Excavation Site rings ${color}`, d: `In the lower levels of the Excavation Site, pull the four levers (two on the walkway, two on the wooden scaffolding) to rotate the floating rings until all four ring lights are ${color}. Then shoot the ${color} orb in the middle with the staff — it glows and flies up.` },
    { t: `Charge it on the ${pedestal} pedestal in the Crazy Place`, d: `Place the staff on its pedestal in the Crazy Place and kill about ${kills} zombies there. Samantha mentions the element\'s power, the staff icon gets a red outline, and you can pick up the upgraded staff.`, note: 'Lose an upgraded staff and it goes back to its Excavation Site pedestal still upgraded.' },
  ]);
  ZG.addMap({
    game: 'bo3', id: 'origins', order: 10, group: 'chronicles',
    name: 'Origins', dlc: 'Zombies Chronicles', eeName: 'Little Lost Girl',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['4 elemental staffs', 'Zombie Shield', 'Maxis Drone'],
    blurb: 'Primis\'s first appearance: a muddy World War I dig site in northern France, giant robots overhead, and four elemental staffs that unlock Agartha.',
    quick: [
      ['Main EE', 'Little Lost Girl'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Four elemental staffs, G-Strike, One Inch Punch'],
      ['EE reward', 'Achievement + ending cutscene'],
    ],
    intro: {
      start: 'Six generators power Pack-a-Punch. The Crazy Place (where the staff gems are) needs the gramophone and a coloured record.',
      parts: 'The Zombie Shield and Maxis Drone parts have fixed spawn spots. Staff parts are on the Wonder Weapons tab.',
      weapons: 'Each staff has the same shape: three parts + a record + the gem from the Crazy Place, then a puzzle chain to upgrade it. The easter egg needs all four upgraded.',
      'easter-egg': 'Step 1 is "build and upgrade all four staffs" — tap the staff chips to jump into each staff guide and back without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'generators', tab: 'start', type: 'Getting started', name: 'Generators & Pack-a-Punch', short: 'Generators & PaP', img: I + 'map.webp',
        summary: 'Pack-a-Punch, at the top of the Excavation Site in the middle of the map, turns on once all six 115 generators are running.',
        steps: [
          { anyList: 'Generators in any order', t: 'Turn on the six generators', d: 'Pay at a generator to start it, then stay inside its area while zombies rush in until it\'s captured. Templar zombies sometimes try to take generators back later — defend them or turn them on again.', list: [
            'Generator 1: starting room.',
            'Generator 2: near the workshop, by the tank station.',
            'Generator 3: near the workshop and Speed Cola.',
            'Generator 4: far left of No Man\'s Land, by the Wind tunnel and Juggernog.',
            'Generator 5: far right of No Man\'s Land, by the Lightning tunnel and Stamin-Up.',
            'Generator 6: behind the church, where the tank stops.',
          ] },
          { t: 'Use Pack-a-Punch at the top of the Excavation Site', d: 'It works while all six generators are on.' },
        ],
        blocks: [{ imgs: [{ src: I + 'map.webp', cap: 'Generator locations (in-game map)', wide: true }] }],
      },
      {
        id: 'crazy-place', tab: 'start', type: 'Map mechanic', name: 'Gramophone, records & the Crazy Place', short: 'Crazy Place', color: 'aether',
        summary: 'Four elemental tunnels lead to the Crazy Place, where the staff gems and upgrade pedestals are. You need the gramophone plus that element\'s record.',
        blocks: [
          { list: [
            '**Gramophone:** always on the floor inside the Excavation Site.',
            '**Black record:** somewhere outside around the Excavation Site. Use it with the gramophone to open the lower levels of the Excavation Site, where the staffs are built.',
            '**Coloured records:** one per element, near its part of the map (listed in each staff guide).',
            'Place the gramophone and a coloured record at that element\'s tunnel portal to enter. You can only pick up a gem if you entered through the matching tunnel.',
          ] },
          { table: { head: ['Element', 'Tunnel entrance'], rows: [
            ['Fire', 'Near spawn (Generator 1), on the way to Generator 3.'],
            ['Ice', 'Near the church (Generator 6).'],
            ['Wind', 'Near Generator 4.'],
            ['Lightning', 'Near Generator 5.'],
          ] } },
        ],
      },
      {
        id: 'zombie-blood', tab: 'start', type: 'Power-up', name: 'Zombie Blood & shovels', color: 'red',
        summary: 'Shovels let you dig the dirt piles around the map for power-ups and items (the Ice Staff parts come from digging). Zombie Blood is a power-up that makes zombies ignore you and reveals hidden things — the easter egg needs it.',
        blocks: [{ list: [
          'Grab a shovel at the start — they\'re around the starting area, one per player.',
          'Zombie Blood drops from dig spots and zombies. You can also earn one every round by shooting three burning wagons with the {{staff-ice}} (see that guide).',
        ] }],
        video: { id: 'feYr8VGfMBU', title: 'Origins — All Shovel Locations (fast guide)', ch: 'SBZ vSylent', len: '1:07' },
      },
      {
        id: 'ee-roadmap', tab: 'start', stepsOrder: 'suggested', type: 'Plan', name: 'Road to the Easter Egg',
        summary: 'Everything Little Lost Girl needs, roughly in order.',
        steps: [
          { t: 'Turn on all six generators', needs: ['generators'] },
          { t: 'Build the Zombie Shield and Maxis Drone', needs: ['zombie-shield', 'maxis-drone'] },
          { t: 'Get the G-Strike early (melee kills get harder later)', needs: ['g-strike'] },
          { t: 'Build and upgrade all four staffs', needs: ['staff-fire', 'staff-ice', 'staff-wind', 'staff-lightning'] },
          { t: 'Everyone gets the One Inch Punch', needs: ['one-inch-punch'] },
          { t: 'Start Little Lost Girl', needs: ['main-ee'] },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'zombie-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Zombie Shield', color: 'gold',
        summary: 'Blocks hits from the front while you hold it and from behind while it is on your back, and can be planted as a barrier. Build it at any workbench.',
        facts: [['Parts', '3']],
        parts: [
          { w: 60, name: 'Visor', icon: I + 'shield-face.webp', area: 'Fire tunnel / trenches', spots: [
            'In the Fire tunnel, on a table right of the gateway.',
            'Right of the Fire tunnel, in the trench room.',
            'In the trench tunnel near Speed Cola, behind the crate heading to the workshop.',
          ] },
          { w: 11, name: 'Handles', icon: I + 'shield-handles.webp', area: 'Around Generator 2', spots: [
            'Right of the first area leading from spawn to Generator 2, in the trench room.',
            'At the end of the trenches past Generator 2 and the workshop.',
            'On top of the tank station near Generator 2, by some broken piping.',
          ] },
          { w: 101, name: 'Frame', icon: I + 'shield-frame.webp', area: 'Around Generator 4', spots: [
            'Near Generator 4, left of the nearby MP40 wall-buy.',
            'In the marsh just outside Generator 4, heading toward the trenches to the church.',
            'In a giant robot footprint near the Excavation Site.',
          ] },
        ],
        video: { id: 'g00RXa_eibI', title: 'Origins — How to Build the Zombie Shield (part locations)', ch: 'Ricktness', len: '2:41' },
      },
      {
        id: 'maxis-drone', tab: 'parts', type: 'Buildable · Drone', name: 'Maxis Drone', color: 'storm',
        summary: 'A flying drone with Maxis\'s brain that shoots zombies, grabs power-ups and revives you for about 90 seconds before recharging. Essential for the easter egg.',
        facts: [['Parts', '3'], ['Note (BO3)', 'You can carry the drone or Trip Mines, not both']],
        parts: [
          { w: 47, name: 'Brain', icon: I + 'drone-brain.webp', area: 'Starting room', spots: [{ label: 'Fixed', text: 'On a table on the lower floor of the starting room, next to the stairs up to Generator 1.' }] },
          { w: 67, name: 'Frame', icon: I + 'drone-frame.webp', area: 'Ice tunnel / tank path', spots: [
            'In the Ice tunnel near Generator 6, in front of the Crazy Place portal.',
            'By the crossbones sign on the tank\'s muddy path toward Generator 4.',
            'By the crossbones sign on the tank\'s muddy path toward Generator 5.',
          ] },
          { w: 107, name: 'Rotors', icon: I + 'drone-rotors.webp', area: 'Excavation Site', spots: [
            'At the very bottom, on a box on a scaffold next to a lever.',
            'At the top, near Pack-a-Punch.',
            'Around the secret entrance.',
          ] },
        ],
        video: { id: '10_vEyEDbQ4', title: 'How to Build the Maxis Drone (all part locations)', ch: 'GregFPS', len: '3:35' },
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'staff-fire', tab: 'weapons', type: 'Elemental staff', name: 'Staff of Fire', short: 'Fire Staff', img: I + 'staff-fire.webp', color: 'fire',
        summary: 'Shoots three fireballs that burn zombies. Upgrades into Kagutsuchi\'s Blood, whose charged shot leaves an exploding fire patch.',
        stepsTitle: 'Build it',
        steps: [
          { w: ['3d-l8B48Q34', 491], any: 'Get the three parts and the record in any order', t: 'Part 1: the Generator 6 reward box', needs: ['generators'], d: 'Once Generator 6 is on, the box next to it opens with a part.', imgs: [{ src: I + 'fire-part-box.webp', cap: 'The box at Generator 6' }] },
          { any: 'Get the three parts and the record in any order', t: 'Part 2: shoot down the burning plane', d: 'An orange-glowing plane appears the round after you open the path to the church. Shoot it down; the part falls by the soul box closest to the Excavation Site, on the small walkway between two giant footprints.', imgs: [{ src: I + 'fire-part-plane.webp', cap: 'Where the plane\'s part lands' }] },
          { any: 'Get the three parts and the record in any order', t: 'Part 3: kill the round-8 Panzer Soldat', d: 'The Panzer that comes on round 8 drops the last part.' },
          { any: 'Get the three parts and the record in any order', t: 'Find the red record', d: 'Near the church: on boxes between the tank and the stairs up, on the church benches across from the basin, or on boxes next to Generator 6.' },
          { t: 'Get the fire gem from the Crazy Place', needs: ['crazy-place'], d: 'Use the gramophone and red record at the Fire tunnel (near spawn toward Generator 3). Take the gem from the pedestal that opens with a red glow.' },
          { t: 'Build it on the red pedestal', d: 'In the lowest level of the Excavation Site.' },
        ],
        upgrade: {
          name: 'Kagutsuchi\'s Blood', summary: 'Bigger blasts, a charged shot, a melee swipe and a revive shot (Sekhmet\'s Vigor).',
          steps: [
            { w: ['3d-l8B48Q34', 569], t: 'Fill the four cauldrons in the Crazy Place', d: 'In the fire section, kill about 30 zombies standing on the metal grates with the Fire Staff. They burst into black smoke that fills the cauldrons.', tip: 'These kills also count toward the other staffs\' final step.' },
            { t: 'Light the matching church torches', d: 'Upstairs in the church, four of the symbols on the far wall are lit. Each is a number written in base 3 (use the key below). In the basement, seven torches have a number under them (the 4 is a bloodstain). Shoot the four torches whose numbers match. A beam of light shoots up from the Excavation Site when it\'s right.', imgs: [{ src: I + 'fire-key.webp', cap: 'Symbol → number key', wide: true }, { src: I + 'fire-torches.webp', cap: 'Some of the numbered torches' }], tip: '4 is always one of the numbers.' },
            ...staffEnd('red', 'red', 20),
          ],
          video: { id: 'cLtA6ItrbIc', title: 'How to upgrade the Fire Staff', ch: 'CrashPower', len: '12:44' },
        },
      },
      {
        id: 'staff-ice', tab: 'weapons', type: 'Elemental staff', name: 'Staff of Ice', short: 'Ice Staff', img: I + 'staff-ice.webp', color: 'ice',
        summary: 'Freezes and shatters zombies. Upgrades into Ull\'s Arrow, whose charged shot makes a blizzard. Many players\' favourite staff.',
        stepsTitle: 'Build it',
        steps: [
          { w: ['3d-l8B48Q34', 169], any: 'Either order', t: 'Dig up the three parts on a snowy round', needs: ['zombie-blood'], d: 'With a shovel, dig the dirt piles while it\'s snowing (usually rounds 2–4, round 10, and randomly later). One part is in the starting area (spawn to workshop, either side), one in the middle of the map and one near the church.', imgs: [{ src: I + 'ice-part.webp', cap: 'An Ice Staff part' }] },
          { any: 'Either order', t: 'Find the blue record', d: 'On a shelf inside the tank station by Generator 2.' },
          { t: 'Get the ice gem from the Crazy Place', needs: ['crazy-place'], d: 'Gramophone + blue record at the Ice tunnel by the church.' },
          { t: 'Build it on the blue pedestal', d: 'Lowest level of the Excavation Site.' },
        ],
        upgrade: {
          name: 'Ull\'s Arrow', img: I + 'ulls-arrow.webp', summary: 'Wider freeze, a blizzard charged shot, melee swipe and a revive shot.',
          steps: [
            { w: ['3d-l8B48Q34', 220], t: 'Flip the six floating tablets in the Crazy Place', d: 'Above the ice portal, six stone tablets show numbers in one notation; the ice panel on the wall shows a number in dots. Shoot the tablet matching the wall pattern; it flips. Do all six. A wrong shot flips them all back.', imgs: [{ src: I + 'ice-key.webp', cap: 'Wall pattern → tablet key', wide: true }] },
            { anyList: 'Tombstones in any order', t: 'Freeze and break three tombstones', d: 'Each has water running out of it. Freeze it with the Ice Staff, then shoot it with a normal gun.', spots: [
              { label: 'Grave 1', text: 'Right of the MP40/KN-44 wall-buy near Generator 4.', imgs: [{ src: I + 'ice-tomb-1.webp', cap: 'Tombstone 1' }] },
              { label: 'Grave 2', text: 'Between the Excavation Site and a giant footprint, near Generator 4.', imgs: [{ src: I + 'ice-tomb-2.webp', cap: 'Tombstone 2' }] },
              { label: 'Grave 3', text: 'On the small hill to the right of the bunker\'s back exit near Generator 2, by the fallen robot\'s hand.', imgs: [{ src: I + 'ice-tomb-3.webp', cap: 'Tombstone 3' }] },
            ] },
            ...staffEnd('blue', 'blue', 20),
          ],
          video: { id: 'QwX-Y3qTga0', title: 'Origins Ultimate Ice Staff Build & Upgrade Guide', ch: 'MrRoflWaffles', len: '12:35' },
        },
        blocks: [
          { h: 'Bonus: free Zombie Blood every round' },
          { p: 'Shoot three burning wagons with the Ice Staff and a Zombie Blood appears at the top of the Excavation Site: outside the Excavation Site by the MP40 wall-buy · by the footprint with the stone chest outside Generator 5 and Stamin-Up · outside the trenches behind the Excavation Site toward Generator 4. (Not while it\'s raining heavily.)' },
        ],
      },
      {
        id: 'staff-wind', tab: 'weapons', type: 'Elemental staff', name: 'Staff of Wind', short: 'Wind Staff', img: I + 'staff-wind.webp', color: 'wind',
        summary: 'Blasts zombies away like a short-range Thundergun. Upgrades into Boreas\' Fury, whose charged shot makes a tornado.',
        stepsTitle: 'Build it',
        steps: [
          { w: ['3d-l8B48Q34', 45], any: 'Either order', t: 'Get a part from each giant robot\'s head', d: 'Shoot the robot foot that has lights under it and let it step on you — you\'re carried up into the head, where the part is. Each of the three robots (Freya, Odin, Thor) holds one. Only one foot is lit per pass, chosen at random.', imgs: [{ src: I + 'wind-part.webp', cap: 'A Wind Staff part in a robot head' }] },
          { any: 'Either order', t: 'Find the yellow record', d: 'Near Generator 5: on the broken wall right of Stamin-Up, on boxes by the Lightning tunnel entrance, or on the table just inside the Lightning tunnel.' },
          { t: 'Get the wind gem from the Crazy Place', needs: ['crazy-place'], d: 'Gramophone + yellow record at the Wind tunnel near Generator 4.' },
          { t: 'Build it on the yellow pedestal', d: 'Lowest level of the Excavation Site.' },
        ],
        upgrade: {
          name: 'Boreas\' Fury', img: I + 'boreas.webp', summary: 'Longer range, a tornado charged shot, melee swipe and a revive shot.',
          steps: [
            { w: ['3d-l8B48Q34', 101], t: 'Align the four rings above the wind portal', d: 'In the Crazy Place, shoot each ring with the Wind Staff to rotate it until its symbols add up to the totals shown on the pillars. The answer is always the same — use the key.', imgs: [{ src: I + 'wind-key.webp', cap: 'Ring solution', wide: true }], tip: 'Stand between the rocks to the right of the portal for a good view.' },
            { anyList: 'Balls in any order', t: 'Point three smoking stone balls at the Excavation Site', d: 'Shoot each ball so its smoke drifts toward the Excavation Site.', spots: [
              { label: 'Ball 1', text: 'At Generator 4.', imgs: [{ src: I + 'wind-ball-1.webp', cap: 'Ball 1' }] },
              { label: 'Ball 2', text: 'Next to the tank\'s return path — reach it by walking back along the tank path from the church (or jumping off the returning tank).', imgs: [{ src: I + 'wind-ball-2.webp', cap: 'Ball 2' }] },
              { label: 'Ball 3', text: 'Near Generator 5.', imgs: [{ src: I + 'wind-ball-3.webp', cap: 'Ball 3' }] },
            ] },
            ...staffEnd('yellow', 'yellow', 20),
          ],
          video: { id: 'e2aTMTxM06Y', title: 'Wind Staff — How to Build and Upgrade', ch: 'CrashPower', len: '10:07' },
        },
      },
      {
        id: 'staff-lightning', tab: 'weapons', type: 'Elemental staff', name: 'Staff of Lightning', short: 'Lightning Staff', img: I + 'staff-lightning.webp', color: 'lightning',
        summary: 'Chains lightning between zombies. Upgrades into Kimat\'s Bite, whose charged shot is a slow ball of electricity.',
        stepsTitle: 'Build it',
        steps: [
          { w: ['3d-l8B48Q34', 299], any: 'Either order', t: 'Jump off the tank for three parts', d: 'Ride the tank and jump off at these spots:', spots: [
            { label: 'Part 1', text: 'Church → tank station: a cut-off wooden staircase on the right, before the trench to Generator 2. (Thor can step here — watch out.)', imgs: [{ src: I + 'lightning-jump-1.webp', cap: 'Jump spot 1' }] },
            { label: 'Part 2', text: 'Tank station → church: cut-off wooden scaffolding on the left joined to the Excavation Site; the part is in a small hole.', imgs: [{ src: I + 'lightning-jump-2.webp', cap: 'Jump spot 2' }] },
            { label: 'Part 3', text: 'Tank station → church: a dirt path on the right just before the church, leading to the church\'s upper level.', imgs: [{ src: I + 'lightning-jump-3.webp', cap: 'Jump spot 3' }] },
          ], tip: 'Getting both return-trip parts in one ride is very hard solo. Plan two rides.' },
          { any: 'Either order', t: 'Find the purple record', d: 'Near Generator 4: inside the tunnel by the Crazy Place gateway, on the wagon on the left as you enter the tunnel, or on the table next to the Wunderfizz.' },
          { t: 'Get the lightning gem from the Crazy Place', needs: ['crazy-place'], d: 'Gramophone + purple record at the Lightning tunnel near Generator 5.' },
          { t: 'Build it on the purple pedestal', d: 'Lowest level of the Excavation Site.' },
        ],
        upgrade: {
          name: 'Kimat\'s Bite', summary: 'Longer chains, an electric-ball charged shot, melee swipe and a revive shot.',
          steps: [
            { w: ['3d-l8B48Q34', 378], t: 'Play three chords on the Crazy Place keys', d: 'Near the lightning portal, purple triangles on the wall act as a keyboard. Only use the bottom row; number its seven keys 1–7 from left to right and shoot: **1-3-6**, then **3-5-7**, then **2-4-6**.', imgs: [{ src: I + 'lightning-keys.webp', cap: 'Keyboard reference', wide: true }] },
            { t: 'Turn seven panel knobs, in order', d: 'After the chords, the next panel sparks until set correctly (one at a time, in this order):', ol: [
              'Right next to Generator 5 → point down.',
              'Church basement, next to the torch numbered 3 → point right.',
              'Church upstairs, next to the repairable window → point up.',
              'Right of the Wind tunnel entrance → point up.',
              'Spawn room, at the bottom of the stairs → point left.',
              'Tank station by Generator 2, left of the back door → point down.',
              'Behind the Excavation Site, by the path to the church → point up.',
            ], tip: 'You can pre-set knobs any time you walk past them, as long as you remember how far each was turned.' },
            ...staffEnd('purple', 'purple', 25),
          ],
          video: { id: '2wxVU2_J5aQ', title: 'Lightning Staff — Build and Upgrade (Kimat\'s Bite)', ch: 'CrashPower', len: '13:28' },
        },
      },
      {
        id: 'g-strike', tab: 'weapons', type: 'Wonder weapon · Grenade', name: 'G-Strike', img: I + 'g-strike.webp', color: 'red',
        summary: 'A beacon that calls a giant robot\'s missile barrage. Each player earns their own. Needed for step 3 of the easter egg — get it early, it\'s all melee kills.',
        steps: [
          { t: 'Take a dirty stone tablet from the tank station', d: 'One of four tablets at the tank station by Generator 2 (no prompt — just press interact).' },
          { t: 'Cleanse it in the church\'s holy water', d: 'Put it in the water basin in the church and kill 20 zombies near it with melee.' },
          { t: 'Carry it back without touching mud', d: 'Take the clean tablet back to the tank station table. Step in mud and it gets dirty — re-dip it in the basin (no extra kills).' },
          { t: 'Melee 20 more zombies at the tank station', d: 'The G-Strike appears.' },
        ],
      },
      {
        id: 'one-inch-punch', tab: 'weapons', type: 'Wonder weapon · Melee', name: 'One Inch Punch', color: 'gold',
        summary: 'Replaces your knife with a punch that one-hits zombies until about round 19. Every player needs it (and its Iron Fist upgrade) for the easter egg.',
        steps: [
          { anyList: 'Chests in any order', t: 'Fill the four soul chests (30 kills each)', d: 'Each sits in a giant footprint. If a robot steps on an unfinished chest, it resets.', list: [
            'Footprint near Generator 5 and Stamin-Up.',
            'Footprint on the path from the Excavation Site to the church (the only one Odin never steps on).',
            'Footprint on the path from the No Man\'s Land entrance to Generator 4 and Juggernog.',
            'Footprint in the corner by Generator 4, Juggernog and the MP40 wall-buy.',
          ] },
          { imgs: [{ src: I + 'punch-pickup.webp', cap: 'The One Inch Punch at the board' }], t: 'Claim it at a Rituals of the Ancients board', d: 'At Generator 1 or 6, aim at the bottom medal and interact. Anyone who bleeds out can claim it again here.' },
        ],
        blocks: [{ note: 'The Iron Fist upgrade is part of the easter egg (step 6).' }],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Little Lost Girl', short: 'Main EE',
        summary: 'Upgrade the four staffs, break a seal with the robots, hunt down Maxis, earn the Iron Fist and open the portal to Agartha to free Samantha.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Achievement, special ending cutscene'],
          ['Keep in mind', 'All six generators must be on at key moments'],
        ],
        prep: [
          { t: 'All six generators running', needs: ['generators'] },
          { t: 'Maxis Drone built', needs: ['maxis-drone'] },
          { t: 'At least one player has the G-Strike', needs: ['g-strike'] },
          { t: 'Every player has the One Inch Punch', needs: ['one-inch-punch'] },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { w: 91, anyList: 'Staffs in any order', t: 'Secure the keys: build and upgrade all four staffs', needs: ['staff-fire', 'staff-ice', 'staff-wind', 'staff-lightning'], d: 'Every staff must be upgraded.', warn: 'After all staffs are built, all six generators must be on at the same time at least once, or the next step won\'t start.' },
          { imgs: [{ src: I + 'fire-pedestal.webp', cap: 'A staff placed in its pedestal' }], w: 125, anyList: 'Staffs in any order', t: 'Ascend from darkness: place the staffs in the new pedestals', needs: ['staff-fire', 'staff-ice', 'staff-wind', 'staff-lightning', 'generators'], d: 'New pedestals appear. Each takes one specific upgraded staff (any order):', list: [
            '**Ull\'s Arrow (ice)** → inside **Freya**, the left robot that walks by the church.',
            '**Boreas\' Fury (wind)** → inside **Odin**, the centre robot over the Excavation Site.',
            '**Kimat\'s Bite (lightning)** → inside **Thor**, the right robot over Generators 2 and 3.',
            '**Kagutsuchi\'s Blood (fire)** → the new pedestal in the staff room, in front of the original four.',
          ], note: 'Samantha speaks when it\'s done and the staffs return to their usual pedestals. All generators must be on.' },
          { imgs: [{ src: I + 'robot-button.webp', cap: 'The red button inside a robot' }], w: 172, t: 'Rain fire: break the seal with the robots', needs: ['g-strike'], d: 'All three robots now walk at once, with one lit foot. One player gets inside a robot and presses the red button; another immediately throws a G-Strike onto the cracked stone seal behind and to the right of Generator 5 (out of bounds). The robots shell it and it breaks.', tip: 'Solo: enter Odin from the Stamin-Up side footprint. Press the red button the moment Maxis says "one" during the purge countdown, land, sprint to the seal with the G-Strike primed and throw it. It may take several attempts.' },
          { imgs: [{ src: I + 'panzers-pit.webp', cap: 'Panzers flying out of the pit' }], w: 358, t: 'Unleash the horde: send in the Maxis Drone', needs: ['maxis-drone'], d: 'Deploy the drone near the broken seal. It flies into the pit and ten Panzer Soldats burst out. Kill them all.', tip: 'Upgraded staffs and the Ray Gun Mark II make short work of them.' },
          { imgs: [{ src: I + 'drone-dropped.webp', cap: 'The upgraded drone dropping (Zombie Blood view)' }], w: 413, t: 'Skewer the winged beast: find Maxis', needs: ['zombie-blood'], d: 'While in Zombie Blood, a yellow-glowing plane appears in the sky. Shoot it down. Its zombie pilot (only visible in Zombie Blood) circles the Excavation Site clockwise — go counter-clockwise to meet it. Kill it and it drops the upgraded Maxis Drone.' },
          { imgs: [{ src: I + 'glowing-templar.webp', cap: 'A Templar with glowing arms' }], w: 577, t: 'Wield a fist of iron: upgrade the One Inch Punch', needs: ['one-inch-punch'], d: 'Every player hits about 20 Templar zombies with glowing white arms inside the Excavation Site with the One Inch Punch (the punch\'s air blast counts). A glowing tablet drops — pick it up for the Iron Fist.', warn: 'Don\'t hit glowing Templars still climbing in from windows: the tablet can drop where you can\'t reach it, which breaks the easter egg.' },
          { imgs: [{ src: I + 'souls-portal.webp', cap: 'Souls flowing into the portal' }], w: 709, t: 'Raise hell: 100 kills in the Crazy Place', needs: ['staff-fire', 'staff-ice', 'staff-wind', 'staff-lightning'], d: 'Put all four upgraded staffs on their pedestals in the Crazy Place, then kill 100 zombies inside the Crazy Place. Souls flow to the centre; when it\'s full the screen flashes and the ceiling becomes a vortex. The achievement unlocks here.' },
          { imgs: [{ src: I + 'portal-open.webp', cap: 'The open portal' }], w: 796, t: 'Freedom: send Maxis into the portal', needs: ['maxis-drone', 'generators'], d: 'Deploy the upgraded Maxis Drone in the centre of the Crazy Place; it flies into the portal. Then hold interact on the blue rock in the middle to "access the teleporter". The game ends with the special cutscene.', note: 'All six generators must be on for the ending to trigger.' },
        ],
        video: { id: 'yuXhb7kVKJc', title: 'Ultimate Origins Easter Egg Guide (Zombies Chronicles)', ch: 'MrRoflWaffles', len: '15:42' },
        videos: [{ id: '3d-l8B48Q34', title: 'All staffs & upgrades guide: Ice, Fire, Wind & Lightning', ch: 'MrDalekJD', len: '12:12' }],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song-archangel', tab: 'side', type: 'Song', name: '"Archangel"',
        summary: 'Hold interact on three green blocks of raw Divinium.',
        spots: [
          'Spawn room, right of the Rituals of the Ancients chest, on the other side of the bunk bed.',
          'Workshop second floor, across from the stairway, under a bed.',
          'On the scaffolding left of the Excavation Site entrance facing spawn, next to a crate.',
        ],
      },
      {
        id: 'song-shepherd', tab: 'side', type: 'Song', name: '"Shepherd of Fire"',
        summary: 'Hold interact on three red radios.',
        spots: [
          'On the scaffolding inside the Excavation Site, above a Maxis Drone part spot.',
          'Inside the robot Freya, across from the audio log.',
          'On the left edge of the fire section in the Crazy Place.',
        ],
      },
      {
        id: 'song-aether', tab: 'side', type: 'Song', name: '"Aether"',
        summary: 'Go prone and press interact in front of both "1" floor panels at Generator 1, then the "5" panel at Generator 5 (Generator 5 must be on).',
      },
      {
        id: 'song-remember', tab: 'side', type: 'Song (BO3 only)', name: '"Remember Forever"',
        summary: 'Shoot the four Zombie-Blood-only wisps on the lowest ring of the Excavation Site, each with its matching staff (staffs don\'t need upgrading; wrong guesses don\'t reset). Then go to the centre of the Crazy Place, interact with the Samantha doll, and shoot all the dolls that appear around it. One rises, drops a Max Ammo, and the song starts.',
      },
      {
        id: 'magna-collider', tab: 'side', type: 'Free weapon', name: 'Free Magna Collider (upgraded MG08)',
        summary: 'Take the Maxis Drone near four small yellow discs so it collects them. It then drops a Pack-a-Punched MG08/15 in front of Pack-a-Punch.',
        spots: [
          'On the destroyed roof beside Generator 5.',
          'Outside the spawn room door to Generator 2: a hole in the trenches with burning debris; the disc is at the end.',
          'On the roof of the broken church, along the tank path toward Generator 4.',
          'On the scaffold above the Excavation Site entrance closest to the church.',
        ],
      },
      {
        id: 'rituals', tab: 'side', type: 'Rewards', name: 'Rituals of the Ancients',
        summary: 'Boards at Generators 1 and 6 track four challenges. Spend the earned token at either board.',
        blocks: [{ table: { head: ['Challenge', 'Reward'], rows: [
          ['Spend 30,000 points', 'Double Tap (if you don\'t have it)'],
          ['115 headshots on normal zombies', 'A Pack-a-Punched ICR-1, STG-44, Weevil or MP40'],
          ['Capture all 6 generators', 'Max Ammo'],
          ['Fill all 4 soul chests', '{{one-inch-punch}}'],
        ] } }],
      },
    ],
  });
})();
