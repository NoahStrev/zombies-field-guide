/* Mob of the Dead — Black Ops II DLC 2 (Uprising) */
(() => {
  const I = 'assets/img/bo2/motd/';
  const R = 'pUPXj6hHnvY'; // MrRoflWaffles easter egg guide
  const A = 'zBqELHeopMs'; // AceOfSpades ultimate guide
  const RV = { id: R, title: 'Ultimate Mob of the Dead easter egg guide', ch: 'MrRoflWaffles', len: '19:11' };
  const AV = { id: A, title: 'Mob of the Dead: Ultimate Guide', ch: 'AceOfSpades', len: '9:35' };
  ZG.addMap({
    game: 'bo2', id: 'mob-of-the-dead', order: 3,
    name: 'Mob of the Dead', dlc: 'Uprising · DLC 2', eeName: 'Pop Goes the Weasel',
    hero: I + 'hero.webp', players: { text: '2+ players for the ending', warn: true },
    tags: ['Afterlife', 'Blundergat', 'Hell\'s Retriever'],
    blurb: 'Four gangsters trapped in Alcatraz. Use Afterlife to get around, build a plane to reach the Golden Gate Bridge, and break (or continue) the cycle in the final showdown.',
    quick: [
      ['Main EE', 'Pop Goes the Weasel'],
      ['Players', '2+ for the ending; one player must be Weasel'],
      ['Wonder weapons', 'Blundergat / Acid Gat, Hell\'s Retriever / Redeemer, Golden Spork'],
      ['Key items', 'Warden\'s key, plane parts, the spoon'],
    ],
    intro: {
      start: 'There\'s no normal power switch: you shock things in Afterlife instead. Get the warden\'s key first; almost everything uses it. Pack-a-Punch is on the bridge, reached by plane.',
      parts: 'The plane parts are each a small puzzle. The Zombie Shield and Acid Gat kit are plain part hunts.',
      weapons: 'The Hell\'s Retriever comes early and unlocks the free Blundergat and the spoon, both needed for the easter egg.',
      'easter-egg': 'Mostly prerequisites: three flights to the bridge, the Retriever, the free Blundergat and the spoon. Then a code, some audio logs, and a player-versus-player ending. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'afterlife', tab: 'start', type: 'Map mechanic', name: 'Afterlife', color: 'storm',
        summary: 'Shock yourself on a red power box to become a ghost. In Afterlife you can zap voltmeters and generators, go through blue Afterlife doors and power things. Then get back to your body and revive yourself before the meter runs out.',
        facts: [['Charges', 'Co-op: one per round (lost if you go down). Solo: three'], ['Drains faster', 'When you sprint, jump or shock things']],
        video: AV,
        steps: [
          { w: 0, t: 'Know the ten power boxes', list: [
            'The library (spawn).', 'Michigan Avenue cell block.', 'The showers.', 'Top floor of the cell block.', 'The infirmary.',
            'Outside the warden\'s office.', 'Top of the Citadel tunnel stairs.', 'Inside Building 64.', 'The top walkway at the docks.', 'Inside the gates at the docks.',
          ] },
          { w: 46, t: 'Useful things to zap', d: 'Three cells in the cell block hold power-ups; all five perk machines need a zap; the gondola can be powered from either end; and a used tower trap can be upgraded to fire rockets.' },
          { w: [R, 157], t: 'Have a teammate stretch your Afterlife', tip: 'While someone is reviving your body the meter pauses. A teammate who keeps starting and cancelling the revive buys you a lot of extra time.' },
        ],
        blocks: [{ imgs: [{ src: I + 'afterlife-door.webp', cap: 'An Afterlife door' }] }],
      },
      {
        id: 'wardens-key', tab: 'start', type: 'Key item', name: 'Warden\'s key', color: 'gold',
        summary: 'Hangs from an electrified cable, either above the cafeteria entrance or above the warden\'s office entrance. Cut its power in Afterlife and it drops to the floor.',
        video: RV,
        steps: [
          { w: 17, t: 'Find which spot it\'s in', d: 'Above the cafeteria entrance, or next to the Citadel tunnels entrance by the warden\'s office.' },
          { w: 48, t: 'Go into Afterlife and zap the generator behind the blue door', d: 'Use the nearest power box, look back at the key: a blue Afterlife doorway has opened in the wall above it. Go through and zap the generator.', tip: 'Still in Afterlife? From the warden\'s office side, zap the voltmeter to the right to open the warden\'s office. From the cafeteria side, go through the blue door by the MP5 and zap the voltmeter above you to open the showers.' },
          { w: 172, t: 'Revive yourself and pick up the key', d: 'The player carrying it opens the locks, so they come along for each plane part.' },
        ],
      },
      {
        id: 'bridge-pap', tab: 'start', type: 'Getting started', name: 'The bridge & Pack-a-Punch', short: 'Bridge & PaP', img: I + 'icarus.webp',
        summary: 'Pack-a-Punch is on the Golden Gate Bridge. Build the plane (Icarus) on the roof and fly there; after about a minute, electric chairs appear to take you back. To fly again, refuel the plane with gas cans.',
        video: RV,
        steps: [
          { w: 470, t: 'Build the plane on the roof', needs: ['icarus'] },
          { w: 797, t: 'Fly to the bridge and Pack-a-Punch', d: 'Brutus spawns when you land. Upgrades cost 5,000.', imgs: [{ src: I + 'brutus.webp', cap: 'Brutus' }] },
          { w: 827, t: 'Ride the electric chairs back', d: 'They appear at the end of the bridge after about 60 seconds. You land in the spawn room in Afterlife.', tip: 'Leave a couple of zombies alive before you head back. Gas cans only appear the round after you return, so you can then end the round straight away.' },
          { w: 843, t: 'Refuel with five gas cans', d: 'They appear next to where each plane part was found. Bring them all to the plane.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'icarus', tab: 'parts', type: 'Buildable · Plane', name: 'Icarus (the plane)', short: 'Plane parts', img: I + 'icarus.webp', color: 'gold',
        summary: 'Five parts, each behind a small Afterlife puzzle. In co-op a player can carry only one part at a time (solo can carry several), so share the work and build them onto the plane on the roof as you go.',
        facts: [['Parts', '5'], ['Build at', 'The runway on the roof'], ['Needs', 'The warden\'s key']],
        video: RV,
        steps: [
          { w: 187, any: 'Parts in any order', t: 'Uniforms: wash them in the showers', d: 'Unlock the washing machine cage with the warden\'s key. In Afterlife, zap the voltmeter that powers the machine (across the room from it). Back in your body, start it: you\'re locked in with extra zombies until the wash finishes (about 30 seconds). Take the uniforms when it\'s done.', needs: ['wardens-key'] },
          { w: 265, any: 'Parts in any order', t: 'Rigging: drop the elevator in the Citadel tunnels', d: 'Go down the big spiral staircase and unlock the cage at the bottom with the key. Go into Afterlife at the top and walk back down: three blue numbers appear on the walls. Zap the number pad to enter them. The elevator drops for 60 seconds; open the gate and grab the rigging.', needs: ['wardens-key'] },
          { w: 330, any: 'Parts in any order', t: 'Engine: switch off the barrier in the warden\'s office', d: 'A cell in the warden\'s office holds it behind an electric barrier. In Afterlife, zap the two generators in Building 64 (follow the blue wires) and the hidden third one through the blue portal. Then open the cell with the key.', needs: ['wardens-key'] },
          { w: 368, any: 'Parts in any order', key: 'oxygen-tanks-the-double-gate-at-the-docks-2-players', t: 'Oxygen tanks: the double gate at the docks', d: 'Unlock the gate left of the Tommy gun with the key. Solo: go into Afterlife, zap the voltmeter and take the tanks. In co-op it needs two players: both go in and one enters Afterlife and zaps the voltmeter. The gate behind you locks and an inner gate opens; the other player grabs the tanks, then the ghost zaps again to let you out.', needs: ['wardens-key'], tip: 'While the ghost is out, run up the big white staircase and zap the gondola to power it.' },
          { w: 438, any: 'Parts in any order', t: 'Valves: in the infirmary, then open the roof', d: 'Unlock the glass case next to the infirmary\'s Cerberus head with the key and take the valves. For roof access: enter Afterlife at the infirmary box, go through the blue door in the corridor, jump onto the roof and zap the voltmeter by the roof door.', needs: ['wardens-key'] },
          { w: 470, t: 'Build each part onto the plane on the roof ramp' },
        ],
      },
      {
        id: 'zombie-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Zombie Shield', color: 'gold',
        summary: 'Three parts, built at any of the three workbenches (cafeteria, top floor of the cell block, outside Building 64).',
        facts: [['Parts', '3'], ['Build at', 'Any workbench']],
        video: AV,
        parts: [
          { w: 255, name: 'Cell door', area: 'Citadel tunnels / Building 64', spots: ['On the Citadel tunnel stairs (third wall on the left going down).', 'In the hallway towards the elevator, on the left through the doorway.', 'In the corner just outside Building 64.'] },
          { w: 264, name: 'Handle', area: 'Building 64 (generator room)', spots: ['On a shelf by the entrance (either side).', 'In a corner of the room.', 'Next to one of the generators.'] },
          { w: 280, name: 'Dolly', area: 'The docks', spots: ['Near the crane.', 'Among the cargo.', 'Beneath the tower trap.'] },
        ],
      },
      {
        id: 'acid-gat-kit', tab: 'parts', type: 'Buildable · Upgrade kit', name: 'Acid Gat kit', color: 'green',
        summary: 'Three parts, built at any workbench. Use the finished kit on a Blundergat to turn it into the Acid Gat.',
        facts: [['Parts', '3'], ['Build at', 'Any workbench']],
        video: AV,
        parts: [
          { w: 325, name: 'Case', area: 'Cell block', spots: ['On a shelf outside the library, in the cell with the toilet.', 'Under the stairs to the middle floor (warden\'s office side).', 'In the corner by the power box at the showers entrance.'] },
          { w: 342, name: 'Acid vial', area: 'Infirmary', spots: ['In the infirmary hallway.', 'Next to the bathtubs.', 'On a desk near the Mystery Box spot.'] },
          { w: 352, name: 'Motor', area: 'Warden\'s office', spots: ['Next to the administration desk / the cell with the plane part.', 'In the corner next to the Mystery Box spot.', 'Next to the fireplace by Speed Cola.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'hells-retriever', tab: 'weapons', type: 'Wonder weapon · Tactical', name: 'Hell\'s Retriever', img: I + 'hells-retriever.webp', color: 'red',
        summary: 'A throwing tomahawk that kills a line of zombies and comes back to you. Hold to charge it. Feed the three Cerberus heads to unlock it; the easter egg needs it for the skulls and the spoon.',
        facts: [['Cost', 'Free'], ['Pick up', 'Citadel tunnels, between the spiral staircase and the showers']],
        video: RV,
        steps: [
          { w: 502, anyList: 'Heads in any order', t: 'Feed each Cerberus head six zombies', d: 'Kill a zombie near the red dog symbol and a head comes out to eat it. Wait for it to finish, then kill the next one. After six it goes back into the wall.', list: [
            'Up the stairs out of spawn, on the right (middle floor of the cell block, near the B23R).',
            'At the docks, on the wall just outside Building 64.',
            'In the infirmary, just before the roof, left of the last plane part.',
          ] },
          { w: 548, t: 'Pick it up in the Citadel tunnels', d: 'A new room opens between the spiral staircase and the showers. Every player can take one.' },
        ],
        upgrade: {
          name: 'Hell\'s Redeemer', img: I + 'hells-redeemer.webp',
          summary: 'Blue, charges three times instead of two, and a charged throw is an instant kill. Each player has to do these steps for themselves, and only on Original difficulty.',
          video: { id: 'vuaZW8sI2sA', title: 'Hell\'s Redeemer guide', ch: 'MrDalekJD', len: '3:52' },
          steps: [
            { w: [A, 200], t: 'Get about 15 kills with the Hell\'s Retriever', d: 'Somewhere between 10 and 15. You hear a sound when it\'s done.' },
            { w: 43, t: 'On round 10 or later, survive a full round on the bridge using only the Retriever', d: 'At least 30 kills with it, and don\'t fire a gun that round. You hear the Afterlife sound when the round ends.' },
            { w: 122, t: 'Back on Alcatraz, throw it into the lava pit under the cell block\'s middle floor', d: 'Below the Cerberus head by the B23R. It doesn\'t come back.' },
            { w: 153, t: 'End the round, go into Afterlife and take the Redeemer', d: 'At the Retriever spot in the Citadel tunnels; it now glows blue.' },
          ],
        },
      },
      {
        id: 'blundergat', tab: 'weapons', type: 'Wonder weapon', name: 'Blundergat', img: I + 'blundergat.webp', color: 'gold',
        summary: 'A blunderbuss-Gatling shotgun. It\'s in the Mystery Box, but the easter egg needs the free one from the five blue skulls.',
        facts: [['Box', 'Yes'], ['Free one', 'Collect five skulls with the Hell\'s Retriever']],
        video: RV,
        steps: [
          { w: 563, anyList: 'Skulls in any order', t: 'Hit five blue skulls with the Hell\'s Retriever', d: 'Throw it at each skull; it comes back carrying it. (They\'re only visible after your first trip to the bridge, but they can be collected any time.)', needs: ['hells-retriever'], list: [
            'At the docks, on the third pillar from the left of the side dock.',
            'On a lamp post up the hill past Juggernog (jump and throw, or throw from the gondola).',
            'On the roof edge in the far back-left corner (also reachable from the ceiling above the stairs to the showers).',
            'In a lit cell by the spawn, on the toilet (on the way to the first Cerberus head).',
            'On a utility pole outside the warden\'s office: look out the window next to Speed Cola.',
          ] },
          { w: 625, t: 'Take the free Blundergat from the warden\'s office desk', d: 'The table is on fire when it\'s ready. Not there? You probably missed the lamp-post skull.' },
        ],
        upgrade: {
          name: 'Acid Gat', img: I + 'acid-gat.webp',
          summary: 'Fires sticky acid bolts that explode. Pack-a-Punched, the Blundergat becomes The Sweeper and the Acid Gat becomes Vitriolic Withering.',
          steps: [{ w: 712, t: 'Use the Acid Gat kit on the Blundergat', needs: ['acid-gat-kit'], d: 'Hold the Blundergat and interact with the finished kit at its workbench.' }],
        },
      },
      {
        id: 'golden-spork', tab: 'weapons', type: 'Melee wonder weapon', name: 'Golden Spork', img: I + 'spork.webp', color: 'gold',
        summary: 'A melee weapon that one-hit kills into the 30s. Needs the spoon and the Acid Gat. Every player who wants one does the spoon and bathtub steps themselves.',
        facts: [['Needs', 'The spoon, the Acid Gat'], ['Where', 'The blood-filled bathtub in the infirmary']],
        video: { id: 'WefePpfO0BQ', title: 'How to get the Golden Spork', ch: 'MrDalekJD', len: '3:32' },
        steps: [
          { w: 57, t: 'Get the spoon', needs: ['main-ee'], d: "After your first trip to the bridge: throw the Hell's Retriever at the 'Escape from the Tomb' poster in a cell near the warden's office, zap the spoon behind it in Afterlife, then hit the spoon in the cafeteria with the Retriever. The full steps are in the easter egg prep." },
          { w: 102, t: 'Put the spoon in the bathtub of blood in the infirmary', d: 'The lone tub opposite a Mystery Box spot, just below the roof. The spoon stirs the blood and disappears.' },
          { w: 119, t: 'Get the Acid Gat', needs: ['blundergat', 'acid-gat-kit'] },
          { w: 135, t: 'Kill about 50–70 zombies in the showers with the Acid Gat', d: 'Until you hear a laugh.' },
          { w: 150, t: 'Take the Golden Spork from the bathtub', d: 'A hand rises out of the blood holding it. If you bleed out later, put the spoon back in and take it again.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Pop Goes the Weasel', short: 'Main EE',
        summary: 'Fly to the bridge three times, collect the free Blundergat and the spoon, enter the four prisoner numbers in Afterlife, listen to the audio logs, then fly one last time in Afterlife for the final fight: Weasel against everyone else.',
        facts: [
          ['Players', '2+ for the ending, one of them Weasel (flat cap)'],
          ['Reward', 'Achievement (either ending) and the end of the game'],
          ['Endings', 'Weasel wins: the cycle is broken. Weasel dies: the cycle continues'],
        ],
        prep: [
          { t: 'Someone plays as Weasel', d: 'Restart until one player is Weasel (the one with the flat cap). Every step but the ending works solo.' },
          { t: 'Hell\'s Retriever', needs: ['hells-retriever'] },
          { t: 'The free Blundergat from the five skulls', needs: ['blundergat'], d: 'One from the Mystery Box doesn\'t count.' },
          { t: 'The spoon (after your first trip to the bridge)', d: 'Throw the Hell\'s Retriever (or a grenade) at the movie poster in a cell near the warden\'s office: a hole with an Afterlife symbol appears. In Afterlife, go through the new doorway opposite the warden\'s office and zap the spoon on the floor (the announcer laughs). Then, back in your body, throw the Retriever at the spoon on the table behind the barrier at the back of the cafeteria.', needs: ['hells-retriever'] },
          { t: 'Three trips to the bridge and back', needs: ['bridge-pap'] },
        ],
        stepsTitle: 'Quest steps',
        video: RV,
        steps: [
          { w: 965, t: 'Check the number pad at the bottom of the spiral staircase', d: 'Its numbers now cycle on their own (you can hear clicking). If not, you\'re missing a bridge trip, the free Blundergat or the spoon.' },
          { w: 980, t: 'In Afterlife, enter the four prisoner numbers: 101, 872, 386, 481', d: 'Any order. The pad blinks and reshuffles after each one. You don\'t have to do all four in one Afterlife.', tip: 'Have a teammate keep starting and cancelling your revive to pause your Afterlife meter.' },
          { w: 1027, t: 'Listen to the audio logs', d: 'The screen goes black and white while Stanley Ferguson narrates. Then headphone drops appear one at a time: up the stairs towards the Citadel tunnels, near Double Tap, on the cell block catwalk, up the stairs from the cafeteria, and in the doorway to the roof. Grab each and wait for the colour to return before the next.' },
          { w: 1088, t: 'End the round, then everyone enters Afterlife and boards the plane', d: 'No refuel needed. The plane flies to the bridge one last time.' },
          { w: 1118, t: 'Revive yourselves in the electric chairs: the final fight starts', d: 'Weasel now fights the other players, and zombies ignore him. The achievement unlocks at this point.', imgs: [{ src: I + 'broken-cycle.webp', cap: 'The "cycle is broken" ending' }] },
          { t: 'Pick your ending', d: 'Weasel kills the others: the cycle is broken (the canon ending). The others kill Weasel: the cycle continues. Either way the game ends.', note: 'The wiki says the achievement unlocks as soon as this fight starts, so either ending counts. One video guide claims only the broken-cycle ending gives it; if you want to be safe, let Weasel win.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'songs', tab: 'side', type: 'Songs', name: '"Rusty Cage" and "Where Are We Going"',
        summary: '"Rusty Cage": interact with three bottles. "Where Are We Going": in Afterlife, enter 935 on the number pad at the bottom of the spiral staircase once it\'s unlocked.',
        spots: ['On a bookshelf in the library (spawn).', 'On a cart in the infirmary, by the blood baths.', 'At the docks, tucked between a crate and a fence.'],
      },
      {
        id: 'lullaby', tab: 'side', type: 'Secret ending', name: 'Samantha\'s Lullaby ending',
        summary: 'At the very start of a game, don\'t move and let your Afterlife meter run out. You get a special death screen with Samantha\'s Lullaby.',
      },
    ],
  });
})();
