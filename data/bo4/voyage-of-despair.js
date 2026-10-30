/* Voyage of Despair — Black Ops 4 launch map (Chaos story) */
(() => {
  const I = 'assets/img/bo4/vod/';
  ZG.addMap({
    game: 'bo4', id: 'voyage-of-despair', order: 2, group: 'chaos',
    name: 'Voyage of Despair', dlc: 'Launch map', eeName: 'Abandon Ship',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Kraken', 'Ballistic Shield', 'Sentinel Artifact'],
    blurb: 'The Titanic on the night it sinks. Use the Sentinel Artifact to open the ship, attune it to four elements, shoot the planets out of the sky and destroy the Eye of Malice and Despair.',
    quick: [
      ['Main EE', 'Abandon Ship'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapon', 'Kraken (four elemental upgrades)'],
      ['Shield', 'Ballistic Shield (upgrade: Svalinn Guard)'],
    ],
    intro: {
      start: 'Grab the Sentinel Artifact on the Poop Deck as soon as you can: it opens the red doors and the portals, and starts Pack-a-Punch.',
      parts: 'Two buildables: the Ballistic Shield and the Kraken Distillation Kit (for elemental Kraken upgrades).',
      weapons: 'The Kraken is in the box for everyone, or free through a short chest quest.',
      'easter-egg': 'Long but not too hard until the last boss phase. Equip the Scepter of Ra and Dying Wish if you can. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'pap', tab: 'start', type: 'Getting started', name: 'Sentinel Artifact & Pack-a-Punch', short: 'PaP',
        summary: 'Take the Sentinel Artifact on the Poop Deck, then activate the four Pack-a-Punch pedestals around the ship. The machine forms at the last one you touch.',
        video: { id: '29dJo1EwC74', title: 'How to Pack-a-Punch in Voyage of Despair', ch: 'MrDalekJD', len: '3:55' },
        steps: [
          { w: 31, t: 'Activate the Sentinel Artifact on the Poop Deck', d: 'Run from spawn to the far end of the ship and up to the ship\'s wheel at the back. Hold interact on the glowing artifact. Red doors can now be opened, the portals (fast travel) turn on and four energy bursts fly off to the pedestals.' },
          { w: 62, anyList: 'Pedestals in any order', t: 'Activate all four Pack-a-Punch pedestals', d: 'Hold interact on the floating symbol at each one:', list: [
            'Poop Deck: just down the staircase from the artifact.',
            'Cargo Hold: through the Mail Rooms behind spawn; swim away from the portal to the far end of the hold.',
            'Lower Grand Staircase: all the way down the main staircase.',
            'Turbine/Engine Room: take the Millionaire Suites portal to Provisions, go through the door to the Engine Room and swim through the narrow flooded passage.',
          ], tip: 'Pack-a-Punch appears at the pedestal you activate last, so finish where you want it. It moves to another pedestal after a few uses.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'ballistic-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Ballistic Shield', img: I + 'shield.webp', color: 'gold',
        summary: 'A riot shield with a built-in machine pistol: aim with it to fire. Melee bashes send zombies flying.',
        facts: [['Parts', '3'], ['Build at', 'Workbench up the stairs on the aft side, near the Poop Deck'], ['Upgrade', 'Svalinn Guard']],
        video: { id: 'f8yDvbMDLGI', title: 'Voyage of Despair: how to build the shield', ch: 'MrRoflWaffles', len: '4:59' },
        parts: [
          { w: 61, name: 'Part 1', area: 'Forecastle / Bridge (up the stairs from spawn)', spots: [
            'Turn around at the top of the stairs from spawn: on the wooden bench (plank).',
            'Through the doorway in the Bridge area, on a wooden box.',
            'On a small banister against the back wall.',
          ] },
          { w: 92, name: 'Part 2', area: 'State Rooms (ground-floor doors from spawn)', spots: [
            'On a shelf in the laundry-looking room.',
            'Sitting on the seat of a wooden chair in the next room.',
            'On the cushion of a chair in a broken room on the other side.',
          ] },
          { w: 155, name: 'Part 3', area: 'Below decks on the aft side (down the stairs past the wall-buy on the way to the Poop Deck)', spots: [
            'At the bottom of the stairs, turn hard left: on a pipe.',
            'At the end of the red-lit corridor, on the side of a box.',
            'On a box next to a crate of apples among the wooden crates.',
          ] },
        ],
        blocks: [{ note: 'Build it at the workbench right in front of you when you come back up those stairs (near the Poop Deck). Repairs cost points at the bench.' }],
        upgrade: {
          name: 'Svalinn Guard', summary: 'A frost-covered shield: tougher, more damage, and its shots get the Cryofreeze effect. Turn on the Sentinel Artifact first. Long, but fun: rebuild a skeleton, launch his car with fireworks, and an iceberg chunk upgrades your shield.',
          video: { id: 'EbGCRHmN6So', title: 'Voyage of Despair elemental shield upgrade', ch: 'Fast Guides Glitch', len: '4:13' },
          steps: [
            { w: 130, t: 'Knock the code breaker off the Mail Room safe', d: 'Melee the code breaker on the big safe in the Mail Rooms with the shield. It falls off; pick it up.' },
            { w: 78, t: 'Learn the four skeleton parts and their codes', d: 'Each bone has a 4-digit code written next to it:', list: [
              'Skull: on a table in the small room just above the Mail Rooms. The code is on a box behind it; break the bottles on top and look from the stairs.',
              'Long bone: back right of the Mail Rooms on a shelf, across from the safe. Code on the floor under the shelf.',
              'Hand: on a table to the right as you come down the stairs into the Mail Rooms. Code on the floor under it.',
              'Foot: Cargo Hold, on the pile of wooden boxes left of the room near a car (towards the Pack-a-Punch spot). Code right next to it.',
            ] },
            { w: 138, anyList: 'Safes in any order', t: 'Fill four small safes', d: 'Put the code breaker on a small safe and read the 4 digits it shows. Grab the bone with that code, put it in the safe, then melee the code breaker off with the shield (if it won\'t come off, you got it wrong; try again next round). Safes:', list: [
              '3rd Class Berths: hallway on the first floor.', '1st Class Lounge: against furniture and debris blocking an exit.', 'Bridge: in the bedroom, right next to the bed.', 'Millionaire Suites: next to the large dresser.',
            ] },
            { w: 184, t: 'Interact with the car in the Cargo Hold', d: 'It sinks through the floor and the skeleton starts flying it above the ship.' },
            { w: 32, t: 'Shoot green vials into the pipes (four times)', d: 'Small green vials sit in pipes outside the map. Shoot one and it shoots up the pipe, then drops out of an exit pipe somewhere else; pick it up. Vial pipes: Bridge (through the hallway window left of the wheel, and on the communications room wall behind you), Promenade Starboard Deck (back of a room with a red object), 3rd Class Berths (behind the big window at the bottom of the stairs), 1st Class Lounge (next to a mirror outside a small window). Exit pipes: Engine Room (bottom of the stairs by the "HELP" graffiti), Mail Rooms (back, by a table), Millionaire Suites (other side of the wall left of the portal).' },
            { w: 200, t: 'Launch a firework into the flying car', d: 'Put a vial in one of the white slots (two at the Forecastle, two at the Poop Deck), then shoot the slot. Steer the firework into the bottom of the skeleton\'s car. If you miss, the firework respawns in a few minutes.' },
            { w: 232, t: 'Wait for the ice chunk', d: 'The skeleton crashes into floating ice. A glowing blue chunk floats over to the workbench where you built the shield and upgrades it to the Svalinn Guard for the rest of the game.' },
          ],
        },
      },
      {
        id: 'distill-kit', tab: 'parts', type: 'Buildable · Upgrade station', name: 'Kraken Distillation Kit', img: I + 'distill.webp', color: 'aether',
        summary: 'A workbench that gives the Kraken an elemental upgrade. Kill a Catalyst zombie with the Kraken to make it drop a concentrated element, then pay 3,000 points (6,000 if the Kraken is Pack-a-Punched).',
        facts: [['Parts', '3'], ['Build at', 'Engine Room, just past Provisions (first stairs down, on the right)']],
        video: { id: '8fwpLxvHcdQ', title: 'All elemental Kraken upgrades guide', ch: 'MrRoflWaffles', len: '11:04' },
        parts: [
          { w: 78, name: 'Part 1', area: 'Off the Upper Grand Staircase (door on the right after the stairs)', spots: ['On the sloped wooden table on the right side of the room.', 'On the left side of the same room.'] },
          { w: 125, name: 'Tube', area: 'Galley (kitchen, down the stairs halfway to the Poop Deck)', spots: ['On the kitchen countertop.', 'Through the corridor on a set of shelves (looks like a funnel going into metal tubing).'] },
          { w: 156, name: 'Coiled spring', area: 'Cargo Hold (underwater)', spots: ['Swim to the Pack-a-Punch pedestal, turn around: on the right side of the room.', 'A bit further back, on the wooden boxes under the water.'] },
        ],
        blocks: [
          { p: 'Build it at the table just past Provisions: go down the first stairs into the Engine Room and it\'s on your right (not the shield bench). Then:' },
          { table: { head: ['Kill this Catalyst with the Kraken', 'It drops', 'Kraken becomes'], rows: [
            ['Poison (green gas)', 'Concentrated Decay (heart)', 'Jörmungandr\'s Fang: projectile pierces every zombie in its path; survivors are disoriented'],
            ['Water', 'Concentrated Purity (foot)', 'Grip of Akkorokamui: a freezing cloud that slows zombies'],
            ['Fire (Plasma)', 'Concentrated Plasma (skull)', 'Breath of Leviathan: two chained shots that burst after a second'],
            ['Electric', 'Concentrated Radiance (hand)', 'Inkanyamba\'s Roar: a shotgun spread that knocks zombies down'],
          ] } },
          { imgs: [
            { src: I + 'el-decay.webp', cap: 'Concentrated Decay' }, { src: I + 'el-purity.webp', cap: 'Concentrated Purity' },
            { src: I + 'el-plasma.webp', cap: 'Concentrated Plasma' }, { src: I + 'el-radiance.webp', cap: 'Concentrated Radiance' },
          ] },
          { tip: 'You can swap elements any time: get another drop and pay again. Elemental Krakens can still be Pack-a-Punched.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'kraken', tab: 'weapons', type: 'Wonder weapon', name: 'Kraken', img: I + 'kraken.webp', color: 'aether',
        summary: 'A three-barrel hand cannon that fires explosive shots. It can\'t hurt you, so it\'s great in the tight corridors. Everyone can get their own from the box, and there is a free one from a chest quest.',
        facts: [['Box', 'Yes (950)'], ['Free quest', 'Stoker key + three soul chests'], ['Upgrades', 'Pack-a-Punch, plus four elements (Distillation Kit)']],
        stepsTitle: 'Free Kraken (chest quest)',
        video: { id: 'BFzvwPAlqmE', title: 'Giant Kraken easter egg: free Kraken', ch: 'MrRoflWaffles', len: '5:57' },
        steps: [
          { t: 'Activate the Sentinel Artifact', needs: ['pap'], d: 'It opens the areas where the chest can be.' },
          { w: 142, t: 'Get the Stoker\'s key', d: 'Kill a Stoker (the big fiery enemy with a shovel, usually from around round 10) by shooting the glowing spot on its chest. It drops a key. If not, try the next one.' },
          { w: 31, t: 'Find the big wooden chest and open it', d: 'It spawns in one of five places: Mail Rooms, the Boiler/Turbine Room (right of the portal, or up the stairs on the left), Galley, State Rooms, Provisions. Unlock it with the key.' },
          { w: 172, t: 'Fill it with souls three times', d: 'Kill about 20 zombies near the open chest. When full, it moves to another chest spot (it can be the same one). Find it and fill it again, three times in total.' },
          { w: 234, t: 'Match the item in the last chest', d: 'The chest moves a final time and shows an item. A crate on deck holds the same item:', list: [
            'Binoculars: Forecastle (spawn).', 'Compass: Boat Deck, left side.', 'Globe: Mid Deck, right side.', 'Sextant / drawing tool: Aft Decks, down the stairs on the left.', 'Telescope: Poop Deck.',
          ] },
          { w: 327, t: 'Take the Kraken from the tentacle', d: 'At the matching crate, a giant tentacle rises out of the sea and drops a Kraken on it.' },
        ],
        upgrade: {
          name: 'Cirein-Cròin Crasher', summary: 'Pack-a-Punched Kraken: double magazine (12) and more damage. A plain (non-elemental) upgraded Kraken is one of the best weapons for interrupting the boss\'s team-wipe attack.',
          steps: [
            { t: 'Pack-a-Punch it', needs: ['pap'] },
            { t: 'Optional: give it an element first or after', needs: ['distill-kit'] },
          ],
        },
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Abandon Ship', short: 'Main EE',
        summary: 'Set the ship\'s clocks, attune the Sentinel Artifact to four elements, Pack-a-Punch it in a flooded Turbine Room, shoot the planets out of the sky, race through the ice and destroy the Eye of Malice and Despair.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Ending cutscene, achievement, and free doors on every map except Alpha Omega and Tag der Toten until you close the game'],
          ['Hardest part', 'Boss phase 5 (team-wipe attack)'],
        ],
        prep: [
          { t: 'Sentinel Artifact taken and Pack-a-Punch open', needs: ['pap'] },
          { t: 'Ballistic Shield built', needs: ['ballistic-shield'] },
          { t: 'A Kraken, plus the Distillation Kit built', needs: ['kraken', 'distill-kit'], d: 'One player needs the poison (Decay) upgrade for a step. Get the Kraken early so you can farm Poison Catalysts.' },
          { t: 'Loadout: Scepter of Ra and Dying Wish', d: 'The Scepter\'s beam melts the ice in step 10 and its level 3 bubble revives the team in the boss fight. Dying Wish survives one team-wipe.' },
        ],
        stepsTitle: 'Quest steps',
        video: { id: 'ccHTv2uJ9pQ', title: 'Ultimate Voyage of Despair easter egg guide', ch: 'MrRoflWaffles', len: '39:07' },
        steps: [
          { w: 172, t: 'Find the four chalk symbols and their clocks', d: 'Once Pack-a-Punch is open, four of these six spots have a chalk symbol (a triangle pointing up or down, with or without a line through it). Note each symbol and the time on the clock next to it:', list: [
            'Mail Rooms: symbol under the metal stairs; clock on the wall across from them.',
            'Bridge: symbol on a wooden desk; clock on the wall in front of the ship\'s wheel.',
            'Upper Grand Staircase: symbol above the back-right doorway; clock at the top of the stairs.',
            '1st Class Lounge (Zeus altar): symbol under a candle mount; clock on the mantelpiece.',
            'Galley: symbol on a cabinet under a counter; clock on the wall nearby.',
            '3rd Class Berths: symbol at the base of the wooden stairs behind luggage; clock on the opposite wall.',
          ], imgs: [
            { src: I + 'tri-up.webp', cap: 'Up triangle' }, { src: I + 'tri-down.webp', cap: 'Down triangle' },
            { src: I + 'tri-updash.webp', cap: 'Up triangle with line' }, { src: I + 'tri-downdash.webp', cap: 'Down triangle with line' },
          ], tip: 'Read the hour as the number the hour hand is **closest to**. A clock that really shows 2:50 counts as 3:50 here.' },
          { w: 364, t: 'Set the minutes on the four Bridge levers', d: 'Each Bridge lever has one of the symbols. Treat it like a clock face with 12 at the top; each click is 5 minutes. For :10 move two clicks right; for :45 three clicks left. Aim at the side of the lever you want it to move toward.', warn: 'The leftmost lever is set from its right-hand side; the others from their left.' },
          { w: 443, t: 'Set the hours on the Poop Deck and Engine Room levers', d: 'These have no symbols. Poop Deck (by the artifact, wheel between them): left lever = up triangle with line, right lever = down triangle with line. Engine Room (Odin altar up the stairs behind you): bottom-left lever = up triangle, top-right lever = down triangle. Only two of the four Engine Room levers work.', tip: 'The small gold hand on each Bridge lever shows the hour you set, so you can double-check everything from the Bridge. A chime plays when all eight are right.' },
          { w: 589, anyList: 'Pads in any order', t: 'Create four teleport pads at the sparking outlets', d: 'Four of these outlets now spark with poison, water, electric or fire. Lure the matching Catalyst to each and kill it right in front of the outlet; a symbol (teleport pad) appears on the floor. **Only one pad per round.**', list: [
            'State Rooms: first room on the far left coming from the Forecastle, on the wall by a doorway.',
            'Upper Grand Staircase: top floor, right wall when facing the clock.',
            '1st Class Lounge: on a wooden beam left of the Zeus altar.',
            'Dining Hall: left of the Ra altar, by a table and chair.',
            'Aft Decks: inside a barrier window opposite the Mystery Box spot.',
            '3rd Class Berths: by the stairs (black-and-white tiled floor).',
          ], imgs: [
            { src: I + 'outlet-poison.webp', cap: 'Poison outlet' }, { src: I + 'outlet-water.webp', cap: 'Water outlet' },
            { src: I + 'outlet-electric.webp', cap: 'Electric outlet' }, { src: I + 'outlet-fire.webp', cap: 'Fire outlet' },
          ] },
          { w: 745, t: 'Do the four element trials in order: poison, water, electric, fire', d: 'Everyone stands on the pad and holds interact. Survive a lockdown (zombies, that Catalyst type, Stokers and Blightfathers). After each, the white Sentinel Artifact floats down: **pick it up** or you can\'t start the next one.', list: [
            'Poison: Poop Deck. A Max Ammo waits at the front; save it for the end.',
            'Water: Cargo Hold, which floods. No Max Ammo. The hardest one; drain the hold first and bring Krakens or a Homunculus.',
            'Electric: Boat Deck, with a Max Ammo in the middle.',
            'Fire: Boiler Room. Hold the catwalk and watch both stairways for Stokers. Afterwards grab the **gold** artifact under the catwalk.',
          ], imgs: [{ src: I + 'pads.webp', cap: 'An element teleport pad' }], tip: 'You can make all four pads first and run the trials back-to-back later. Zombies left alive before a trial are still there afterwards.' },
          { w: 935, t: 'Give a Kraken the poison (Decay) upgrade', d: 'Kill a Poison Catalyst with the Kraken, take the heart it drops to the Distillation Kit and pay 3,000 (6,000 if Pack-a-Punched).', needs: ['kraken', 'distill-kit'] },
          { w: 997, t: 'Flood the Turbine Room', d: 'With Jörmungandr\'s Fang, shoot the steam leaks on the nine blue pipes in the Turbine Room. Each one turns into a water leak with a metal clang. Look under the walkways and straight up at the ceiling from different angles. The room floods when all are done.' },
          { w: 1058, t: 'Pack-a-Punch the Sentinel Artifact', d: 'Pack-a-Punch has to be in the flooded Turbine Room. If it isn\'t, use it elsewhere until it moves there. Swim to it and hold interact to upgrade the artifact. You can drain the room afterwards.' },
          { w: 1089, anyList: 'Symbols in any order', t: 'Activate the nine planet symbols', d: 'Hold interact on each. With subtitles on you hear an element name. Learn where they are: the next step drops planets on them.', list: [
            'Bridge: on a wooden cabinet (Saturn).', 'Forecastle: on a metal vent at the back (Sun).', 'Mail Rooms: on the wall by the metal stairs, left of the clock (Mercury).',
            'State Rooms: in the room with sinks, behind a plant (Uranus).', 'Millionaire Suites: under a table (Venus).', 'Lower Grand Staircase: on the wall by a seat and open window (Moon).',
            'Aft Decks: inside a life ring by the lifeboat (Neptune).', 'Engine Room: on the floor in front of the Odin altar (Jupiter).', 'Boiler Room: up the stairs right of the Odin altar, left onto the catwalk, under a pipe. You must go prone (Mars).',
          ] },
          { w: 1249, t: 'Read the planet order from the model in the Cargo Hold', d: 'Drain the Cargo Hold. A crate next to the big crate with the car bursts open, showing a solar system model. Hold interact and record the order the planets light up (it always ends with the Sun). Enemies spawn and kills give no points, so get out quickly.', imgs: [{ src: I + 'solar-model.webp', cap: 'The solar system model in the Cargo Hold' }], tip: 'Missed it? It can be read again once, and again next round.' },
          { w: 1343, t: 'Shoot the planets out of the sky in that order', d: 'Go up on deck. The same planets are in the sky around the Sun (Neptune skims along the horizon, dipping in and out of the sea). Shoot the next planet; it falls as a blue orb onto its symbol from the last step. Get there and grab it within about 30 seconds; zombies spawn and go for it. You can rest between planets.', imgs: [{ src: I + 'solar-sky.webp', cap: 'The planets in the sky' }], warn: 'Wrong planet, a missed orb or a destroyed orb fails the step; start over next round.' },
          { w: 1536, t: 'Bring down the Sun together at the Forecastle', d: 'The Sun is last. The whole team holds interact on it at the Forecastle; this starts a timed trial.' },
          { w: 1599, t: 'Melt your way through the ice to the Poop Deck', d: 'Ice blocks block the route. Break them with Krakens, guns and especially the Scepter of Ra\'s beam, and keep moving or you freeze (and repeat the step). A Max Ammo drops halfway. Break the last big block at the end of the Poop Deck; a teleport pad appears by the flag.', tip: 'Take turns with one Scepter at a time while the others cover and throw Homunculi.' },
          { w: 1709, t: 'Get ready for the boss', d: 'Perks, fresh shields, Pack-a-Punched weapons and level 3 specialists. Save at least one plain upgraded Kraken (no element) or a heavy upgraded LMG for interrupting the wipe attack. You can\'t come back afterwards.' },
          { w: 1853, t: 'Enter the iceberg and place the artifact', d: 'Everyone holds interact on the pad, then swims to the root-like center of the iceberg and holds interact together.', imgs: [{ src: I + 'iceberg.webp', cap: 'Inside the iceberg' }] },
          { w: 1868, t: 'Boss phases 1–2: Poop Deck, then Engine Room', d: 'The Eye can\'t be hurt yet. Kill the zombies, Stokers and Blightfathers. Each phase has a Max Ammo and Carpenter that stay until the end; grab them when the screen flashes, just before you\'re moved on.' },
          { w: 2006, t: 'Boss phase 3: State Rooms', d: 'The Eye fires a freeze beam down the corridors. Stand in the connecting hallway and shoot its eye whenever it fires. Elemental Krakens barely hurt it; use bullets or Hellion Salvo rockets.', imgs: [{ src: I + 'sky-eye.webp', cap: 'The Eye using its freeze beam' }] },
          { w: 2083, t: 'Boss phase 4: Promenade Starboard Deck', d: 'Hide behind the iceberg chunks when it fires and shoot the pupil. A cracked red eye means it\'s working.' },
          { w: 2146, t: 'Boss phase 5: Poop Deck and the team-wipe', d: 'It teleports around the deck. When it screams and starts shaking and charging, pour everything into it to interrupt the charge or it kills the whole team. Repeat about three times; the last interrupt kills it and the cutscene plays.', warn: 'Plant a level 3 Scepter of Ra and stand in its bubble during a charge: it revives you if you go down. Dying Wish saves you once.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'free-perk', tab: 'side', type: 'Free perk', name: 'Six fish: free perk',
        summary: 'Shoot six fish hanging around the ship, pick them up and drop them in the collection box on the Sun Deck for a free perk.',
        spots: [
          'Poop Deck: on the center rope.', 'Forecastle: below the white canopy.', 'Mid Deck: right side of an exhaust pipe.',
          'Promenade Starboard Deck: below the catwalk.', 'Boiler Room: on top of the blue pipe right of the portal.', 'Aft Decks: on the ropes on the left side.',
        ],
      },
      {
        id: 'specialist-sale', tab: 'side', type: 'Fire Sale', name: 'Piano sheets: specialist Fire Sale',
        summary: 'Collect three music sheets and put them on three pianos, then hit each piano with your specialist weapon. For a while the box offers specialist weapons, so you can switch yours mid-game.',
        video: { id: 'Pq61Ubr3K9I', title: 'Specialist weapon Fire Sale', ch: 'SBZ vSylent', len: '1:28' },
        steps: [
          { anyList: 'Sheets in any order', t: 'Collect three music sheets', list: ['Promenade Starboard Deck: on the tiled floor in the revolving door.', 'Dining Hall: on a table near the Lower Grand Staircase.', 'Promenade Port Deck: on a bench near two windows.'] },
          { anyList: 'Pianos in any order', t: 'Place them on three pianos and melee each with your specialist', d: 'They glow blue when it works:', list: ['Upper Grand Staircase: by the door to the Bridge.', 'Lower Grand Staircase: near the SwordFish wall-buy.', 'Dining Hall: near the doorways to the Lower Grand Staircase.'] },
        ],
      },
    ],
  });
})();
