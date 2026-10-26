/* Blood of the Dead — Black Ops 4 launch map (Aether story) */
(() => {
  const I = 'assets/img/bo4/botd/';
  const D = 'T05BfsYsBvA'; // MrDalekJD ultimate guide (setup, buildables, upgrades)
  ZG.addMap({
    game: 'bo4', id: 'blood-of-the-dead', order: 3, group: 'aether',
    name: 'Blood of the Dead', dlc: 'Launch map', eeName: 'Most Escape Alive',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Spectral Shield', 'Hell\'s Retriever', 'Blundergat / Magmagat'],
    blurb: 'Primis return to Alcatraz, now trapped in a pocket dimension guarded by the Warden. The Spectral Shield replaces Afterlife: its key drains souls and its spirit blast powers voltmeters and ghosts.',
    quick: [
      ['Main EE', 'Most Escape Alive'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Blundergat → Acidgat / Magmagat'],
      ['Key items', 'Spectral Shield, Hell\'s Retriever, Spoon'],
    ],
    intro: {
      start: 'Two power switches, then a spirit blast on the roof voltmeter opens Pack-a-Punch. Everything on this map runs through the Spectral Shield.',
      parts: 'Build the Spectral Shield first (round 1 if you can). The Acidgat Kit needs the Warden\'s Key that also comes with the shield.',
      weapons: 'The Hell\'s Retriever and the Spoon are both needed for the easter egg. The Blundergat is free from five hidden skulls.',
      'easter-egg': 'Medium length. The bird hunt and the five lighthouse challenges take the longest. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'basics', tab: 'start', type: 'Getting started', name: 'Map basics & the Citadel dials', short: 'Basics',
        summary: 'How the shield\'s spectral vision, spirit blasts and the number dials in the Citadel Tunnels work.',
        blocks: [
          { imgs: [{ src: I + 'layout.webp', cap: 'Blood of the Dead layout' }] },
          { imgs: [{ src: I + 'blast.webp', cap: 'A spirit blast from the Spectral Shield' }] },
          { p: '**Spectral Shield:** aim with the shield to see hidden things (spectral vision). Kill zombies with its key attack to fill spirit blast charges (dogs are the quickest). Aim and fire to spirit blast; this powers voltmeters, switches and ghosts.' },
          { p: '**Free charge:** once per round, a sparking power box gives a full charge if you interact with it while holding the shield (Citadel Tunnels, Showers, Library, Michigan Avenue, Docks bridge, New Industries, Times Square, Power House, Infirmary, Cell Block 3rd floor).' },
          { p: '**The dials** at the bottom of the Citadel Tunnels take three-digit codes after you spirit blast them:' },
          { table: { head: ['Code', 'Effect'], rows: [
            ['872', 'Spawns a Zombie Blood power-up (once per round). Needed in the easter egg.'],
            ['666', 'Spawns the Warden (Brutus). From round 17 it is the slamming kind the easter egg needs.'],
            ['115', 'Plays "Where Are We Going" (song).'],
            ['3 numbers from the Warden\'s Office pillars', 'Drops the cage for the Spoon (see the Spoon guide).'],
          ] } },
        ],
      },
      {
        id: 'power', tab: 'start', type: 'Getting started', name: 'Power & round-1 setup', short: 'Power',
        summary: 'Turn on both power switches. A fast route gets the map open, both powers on and all three shield parts on round 1.',
        video: { id: D, title: 'Ultimate guide to Blood of the Dead', ch: 'MrDalekJD', len: '36:22' },
        steps: [
          { w: 111, t: 'Optional: hold one zombie on round 1 for points', d: 'Kill all but one zombie in the spawn room (Richtofen\'s Laboratory) and rebuild barriers to farm points before opening doors.' },
          { w: 157, t: 'Turn on the Power House switch', d: 'Open the Power House door from spawn and flip the switch. It powers the route across the Catwalk into the prison.' },
          { w: 250, t: 'Cross the Catwalk and grab shield parts on the way', d: 'Lure the first Warden (Brutus) into the open and kill him for the Warden\'s Key. Grab the Spectral Essence and the metal door as you pass their spots.', needs: ['spectral-shield'] },
          { w: 311, t: 'Turn on the second switch in Building 64', d: 'Building 64 (by the Docks) powers the rest of the map, including the roof where Pack-a-Punch first appears.' },
        ],
      },
      {
        id: 'pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'PaP',
        summary: 'Build the shield, charge a spirit blast and blast the voltmeter on the roof. Pack-a-Punch then moves between the Roof, the Power House and Building 64.',
        steps: [
          { t: 'Build the Spectral Shield and fill a charge', needs: ['spectral-shield'], d: 'Kill zombies or dogs with the shield\'s key attack.' },
          { w: [D, 1290], t: 'Spirit blast the voltmeter on the Roof', d: 'Go up through the Infirmary to the roof. Blast the voltmeter where the plane (Icarus) was in Mob of the Dead. Spirits bring Pack-a-Punch in.', imgs: [{ src: I + 'pap-spirit.webp', cap: 'The Pack-a-Punch spirit' }] },
        ],
        blocks: [{ note: 'After a few uses Pack-a-Punch teleports to the Roof, the Power House or Building 64.' }],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'spectral-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Spectral Shield', img: I + 'shield.webp', color: 'aether',
        summary: 'Blocks damage and replaces Afterlife: aim to see spirits, use the key attack to drain souls, and fire a spirit blast to power things.',
        facts: [['Parts', '3'], ['Build at', 'Docks, Cell Block 3rd floor, or the Transverse Tunnel'], ['Upgrade', 'Attuned Spectral Shield (4 charges)']],
        video: { id: D, title: 'Ultimate guide to Blood of the Dead', ch: 'MrDalekJD', len: '36:22' },
        parts: [
          { w: 250, name: 'Spectral Essence', icon: I + 'part-essence.webp', area: 'A glowing blue power box (old Afterlife box)', spots: ['Michigan Avenue.', 'Library.', 'Times Square (outside the Warden\'s Office).'] },
          { w: 296, name: 'Metal door', icon: I + 'part-door.webp', area: 'Leaning on a wall', spots: ['China Alley, by a repairable barrier.', 'Citadel Tunnels, by the doorway to the old elevator room.', 'Citadel Tunnels, a second spot further down.'] },
          { w: 342, name: 'Warden\'s Key', icon: I + 'part-key.webp', area: 'Brutus drop', spots: ['Dropped by the first Warden (Brutus) you kill. It also opens the locked doors and cabinets with Warden symbols.'] },
        ],
        upgrade: {
          name: 'Attuned Spectral Shield', summary: 'Holds four spirit blasts instead of two and takes 200 more damage. Very helpful for the easter egg.',
          steps: [
            { t: 'Have the shield and the Hell\'s Retriever', needs: ['hells-retriever'] },
            { w: [D, 2102], t: 'Spin the Mystery Box until it moves (padlock appears)', d: 'Quickly pull out the shield and drain the padlock with the key attack until the keyhole glows.' },
            { w: [D, 2118], t: 'Throw the Retriever at the padlock', d: 'Your shield becomes the Attuned Spectral Shield. Several players can throw at the same lock to all get it.' },
          ],
        },
      },
      {
        id: 'acidgat-kit', tab: 'parts', type: 'Buildable · Upgrade kit', name: 'Acidgat Kit', img: I + 'acidgat-kit.webp', color: 'green',
        summary: 'Turns a Blundergat into the Acidgat (sticky acid bombs). Two parts are behind Warden\'s Key locks.',
        facts: [['Parts', '3 (fixed spots)'], ['Build at', 'Any buildable bench'], ['Needs', 'Warden\'s Key']],
        video: { id: D, title: 'Ultimate guide to Blood of the Dead', ch: 'MrDalekJD', len: '36:22' },
        parts: [
          { w: 956, name: 'Case', icon: I + 'acid-case.webp', area: 'Transverse Tunnel', spots: ['On the floor next to the Vapr-XKG wall chalk (tunnel between the Power House and New Industries).'] },
          { w: 987, name: 'Motor', area: 'Sally Port', spots: ['On a desk in a small locked room (open it with the Warden\'s Key).'] },
          { w: 995, name: 'Acid bottle', area: 'Infirmary', spots: ['In a locked cabinet near the room that leads to the roof (Warden\'s Key).'] },
        ],
        blocks: [{ note: 'Build the kit at any bench, then put a Blundergat in it. A few seconds later take out the Acidgat.' }],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'hells-retriever', tab: 'weapons', type: 'Tactical · Wonder weapon', name: 'Hell\'s Retriever', img: I + 'retriever.webp', color: 'red',
        summary: 'A throwing tomahawk that comes back to you. Hold to charge it and it kills several zombies in a chain. Needed for the Spoon, the free Blundergat and the easter egg.',
        facts: [['Cost', 'Free quest'], ['Upgrade', 'Hell\'s Redeemer']],
        video: { id: D, title: 'Ultimate guide to Blood of the Dead', ch: 'MrDalekJD', len: '36:22' },
        steps: [
          { w: 515, anyList: 'Heads in any order', t: 'Feed the three Cerberus heads', d: 'Kill zombies one at a time near each glowing dog head on the walls; it eats their souls. After about 6–8 it disappears.', list: ['New Industries, near a Mystery Box spot and the GKS.', 'Cell Block 2nd floor (same place as in Mob of the Dead).', 'Eagle Plaza, on the white house wall in front of the door from the Warden\'s Office.'] },
          { w: 672, t: 'Grab it from the lava during the fast travel', d: 'Ride the underground fast travel between the Warden\'s House and the Showers (either way). Hold interact as you pass the tomahawk on a rock in the lava.' },
        ],
        upgrade: {
          name: 'Hell\'s Redeemer', summary: 'Glows blue and kills zombies and dogs in one hit once charged; holds three charges. Each player must do the steps themselves.',
          steps: [
            { t: 'Have the Retriever and the Spectral Shield', needs: ['spectral-shield'] },
            { w: [D, 1368], t: 'Get Retriever-only kills in the Recreation Yard', d: 'Stand near the burning barrel. The tomahawk glows blue when you\'re in the right area. Keep killing with only the tomahawk until a wolf howls.' },
            { w: [D, 1479], t: 'Throw it at the blue dog mark', d: 'Find a blue hellhound mark with spectral vision (always outside the playable area): Eagle Plaza (behind the house, or on concrete over a lava pit), Citadel Tunnels (through a hole in the wall, by the old Retriever spot, or past a hanging body towards the Showers), or the Recreation Yard (by the steps up to the prison or near the box, over lava). The tomahawk disappears when it hits.' },
            { w: [D, 1992], t: 'Spirit blast the ghost dog on a dog round', d: 'On the next dog round, follow its paw prints. It\'s fully visible in spectral vision; get close and blast it. A howl confirms.' },
            { w: [D, 2071], t: 'Pick up the Redeemer during the fast travel', d: 'Take the Warden\'s House–Showers fast travel again; it sits on the same rock.' },
          ],
        },
      },
      {
        id: 'spoon', tab: 'weapons', type: 'Melee weapon', name: 'Spoon & Golden Spork', img: I + 'spoon.webp', color: 'gold',
        summary: 'The Spoon one-hit kills into the mid teens and is required for the easter egg. Upgrade it to the Golden Spork, which one-hits into the 30s.',
        facts: [['Needs', 'Shield + Hell\'s Retriever'], ['Upgrades', 'Golden Spork → Golden Scalpel → Golden Spork Knife']],
        video: { id: D, title: 'Ultimate guide to Blood of the Dead', ch: 'MrDalekJD', len: '36:22' },
        steps: [
          { t: 'Have the shield and the Retriever', needs: ['spectral-shield', 'hells-retriever'] },
          { w: 703, t: 'Read three numbers in the Warden\'s Office', d: 'Use spectral vision: numbers appear on the pillars. They\'re random each game.' },
          { w: 718, t: 'Enter them on the Citadel dials', d: 'Spirit blast the dials at the bottom of the Citadel Tunnels and enter the numbers. A cage drops; the skeleton\'s key falls into the water.' },
          { w: 814, t: 'Blast the Docks voltmeter and throw at the skeleton', d: 'The crane swings its net over the Docks. When it stops, throw the Retriever at the skeleton in the net. The Spoon falls onto the crate below.' },
        ],
        upgrade: {
          name: 'Golden Spork', img: I + 'spork.webp', summary: 'Gold spork-knife melee weapon: one-hit kills into the 30s.',
          steps: [
            { w: [D, 1084], t: 'Put the Spoon in the bathtub in the Infirmary' },
            { w: [D, 1099], t: 'Kill zombies on the Roof with a Blundergat, Acidgat or Magmagat', d: 'Only its kills count. Blood drips through the ceiling into the tub.' },
            { w: [D, 1131], t: 'Drain the full tub', d: 'Hold interact once it\'s full.' },
            { w: [D, 1179], t: 'Knock over the water tower and collect the Spork', d: 'The water tower by the Catwalk now leaks blood. Shoot off its yellow supports until it falls, then throw the Retriever at the branch in front of it to bring the Golden Spork back.' },
          ],
        },
      },
      {
        id: 'blundergat', tab: 'weapons', type: 'Wonder weapon', name: 'Blundergat', img: I + 'blundergat.webp', color: 'fire',
        summary: 'A huge blunderbuss shotgun. Free from five hidden skulls, then upgradable into the Acidgat (kit) or the Magmagat (fireplace quest), the best weapon on the map.',
        facts: [['Box', 'Yes (950)'], ['Free quest', '5 skulls with the Retriever'], ['Pack-a-Punch', 'The Sweeper']],
        video: { id: D, title: 'Ultimate guide to Blood of the Dead', ch: 'MrDalekJD', len: '36:22' },
        steps: [
          { t: 'Get the Hell\'s Retriever', needs: ['hells-retriever'] },
          { w: 861, anyList: 'Skulls in any order', t: 'Throw the Retriever at five blue skulls', d: 'They show in spectral vision but you can hit them without it:', list: [
            'Docks: on one of the dock poles in the water.', 'Eagle Plaza: on top of an electric pole outside the map, left of the Warden\'s Office entrance.',
            'C-D Street: in the toilet of a cell across from the Library doorway.', 'Roof: back right corner, outside the play area (stand on the Pack-a-Punch platform).',
            'West Grounds: second-floor landing of the outdoor stairs, to your left as you leave New Industries.',
          ] },
          { w: 956, t: 'Take the Blundergat from the Warden\'s desk', d: 'It appears in the Warden\'s Office.', imgs: [{ src: I + 'blundergat-desk.webp', cap: 'The free Blundergat on the Warden\'s desk' }] },
        ],
        upgrade: {
          name: 'Magmagat', img: I + 'magmagat.webp', summary: 'Shoots blobs of lava that attract zombies and burn them. Pack-a-Punched it becomes the Magmus Operandi. Alternatively, build the {{acidgat-kit|Acidgat Kit}} for the Acidgat.',
          steps: [
            { w: [D, 1732], t: 'Put a Blundergat (or Acidgat) in the Warden\'s House fireplace', d: 'You\'re locked inside the house until it\'s done; leaving loses the gun.' },
            { w: [D, 1779], t: 'Collect souls until the three skulls burn blue', d: 'Kill zombies anywhere in the house and walk over the essence they drop. Then interact with the skulls to deposit it and take the Tempered Blundergat.' },
            { w: [D, 1858], t: 'Run the tempered gun to New Industries without firing', d: 'Its fire fades fast. Stop by each blue-flame barrel to refuel, in this order: Eagle Plaza, Michigan Avenue, Cell Block entrance, Recreation Yard, West Grounds.', warn: 'If the fire goes out it reverts to a normal Blundergat; start again at the fireplace.' },
            { w: [D, 1912], t: 'Put it in the press in New Industries', d: 'Two ghosts forge the Magmagat. After the first one, anyone can just put a Blundergat in the press.' },
          ],
        },
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Most Escape Alive', short: 'Main EE',
        summary: 'Get into the Warden\'s secret room, chase a ghost seagull for the Kronorium, complete five lighthouse challenges for red orbs, escape your cell and break the Dark Mechanism.',
        facts: [
          ['Players', '1–4 (solo works; Richtofen\'s part is done by a bot if nobody plays him)'],
          ['Reward', 'Ending cutscene and achievement'],
          ['Hardest part', 'The fourth bird and the New Industries ghost'],
        ],
        prep: [
          { t: 'Pack-a-Punch open', needs: ['pap'] },
          { t: 'Spectral Shield (Attuned recommended)', needs: ['spectral-shield'] },
          { t: 'Hell\'s Retriever', needs: ['hells-retriever'] },
          { t: 'Spoon', needs: ['spoon'] },
          { t: 'Recommended: a Magmagat', needs: ['blundergat'] },
        ],
        stepsTitle: 'Quest steps',
        video: { id: 'ABPZt30LomU', title: 'Ultimate Blood of the Dead easter egg guide', ch: 'MrRoflWaffles', len: '24:18' },
        steps: [
          { w: 63, t: 'Scratch the Warden\'s House wall with the Spoon', d: 'Upstairs in the Warden\'s House, knife the wallpaper on the wall opposite the barrier. It shows scratches.', needs: ['spoon'], imgs: [{ src: I + 'warden-house.webp', cap: 'The Warden's House' }] },
          { w: 79, t: 'Have a slamming Brutus break the wall', d: 'Lead a Brutus that does the jumping electric slam up the stairs. At the top he slams, vanishes and the wall opens.', tip: 'From round 17, spirit blast the Citadel dials and enter 666 to spawn one every time. A Monkey Bomb thrown at the wall can also make a normal Brutus slam it (a bit unreliable).' },
          { w: 109, t: 'In the secret room: take the red stone and unveil the Warden', d: 'Pick up the red stone from the desk, then hold interact on the switch by the draped body to reveal the Warden\'s corpse.' },
          { w: 124, t: 'Place the stone on the map in Richtofen\'s Laboratory', d: 'Back at spawn, hold interact on the map across from the cryo chambers. Then hold interact on the glowing Kronorium in the corner: a ghost seagull steals it.' },
          { w: 156, t: 'Spirit blast the seagull on three separate rounds', d: 'Walk the map with the shield out and listen for squawking. Find the blue ghost bird in spectral vision and spirit blast it. It flies off and comes back next round somewhere else (it can repeat spots). Do this three times.' },
          { w: 248, t: 'Catch the invisible fourth bird with Zombie Blood', d: 'Next round the bird can\'t be seen. Sweep rooms in spectral vision: you hear the Warden sobbing when you look right at it. Spirit blast the Citadel dials and enter 872, grab the Zombie Blood, return, glance at the bird in spectral vision and immediately throw the Retriever at it (**don\'t** spirit blast it). Pick up the Kronorium from the floor.', tip: 'Do this alone in the room; other players in spectral vision can make the bird fly off. If it leaves, try again next round.' },
          { w: 371, t: 'Give the Kronorium to the Warden and get the first code', d: 'In the secret room, place it in his lap and let the pages flip. Read the three numbers with spectral vision and enter them on the Citadel dials. The lighthouse beam points at one of five places.' },
          { w: 402, t: 'Blast the portal where the beam lands to start a challenge', d: 'Look at the beam\'s target in spectral vision and spirit blast the hidden portal. Each challenge ends with a red orb. Place each orb in the map at spawn, then flip the Kronorium for a new code and enter it to move the beam to the next one.', imgs: [{ src: I + 'kronorium.webp', cap: 'The Kronorium' }] },
          { w: 464, any: 'Five challenges (order set by the lighthouse)', t: 'Power House: Simon Says and the lever ghost', d: 'In Building 64 interact with the sparking generator and repeat the light sequence on the panels (1, then 2, up to 5 lights). Note the symbols on the three panels that stay lit. Take the punch card from the shelf to the computer at spawn: the six screens translate symbols into hobo code. In the Power House, a ghost (spectral vision) walks between levers. Spirit blast him when he reaches a lever with one of your hobo symbols; do all three.', warn: 'Mess up the levers and you redo the whole Simon Says.' },
          { w: 668, any: 'Five challenges (order set by the lighthouse)', t: 'Showers: give the banjo back', d: 'Take the banjo from the ghost. You\'re locked in. Stand in the blue fire circle and kill zombies (it may move; follow it). Never step out. When it disappears, return the banjo. The doors can take 30 seconds to unlock.' },
          { w: 744, any: 'Five challenges (order set by the lighthouse)', t: 'Docks: Morse code and the infirmary ghost', d: 'At the Morse tapper (Sally Port, outside the Warden\'s Office) enter the code by trial and error: tap about half a second for a dot, about 3 seconds for a dash. If the Warden laughs, that character was wrong. Around 10 characters; you get a success line. Then kill a zombie in the Infirmary room with the ribcage, blast the ghost visible, interact with it, and feed it kills so it follows you. Ride the gondola down with it to the Docks portal.', tip: 'Very hard solo; in co-op have someone guard the tapper.' },
          { w: 965, any: 'Five challenges (order set by the lighthouse)', t: 'New Industries: drain the murderous ghost', d: 'Kill a zombie in the Library/D-Block area and spirit blast the ghost there. He walks to Michigan Avenue for a spoon, then heads toward spawn. Keep blasting him visible and draining him with the key (6–7 blasts) until he stays red, then kill him with the New Industries trap.', tip: 'Stock up on blasts first; the Attuned shield helps a lot. Body-block him to slow him down.' },
          { w: 1072, any: 'Five challenges (order set by the lighthouse)', t: 'Michigan Avenue: escort the cafeteria ghost', d: 'The beam is hard to see here; check outside the Warden\'s Office in spectral vision. Kill a zombie in the Cafeteria, blast the ghost and protect him until he reaches the portal. He turns red as he takes damage.' },
          { w: 1181, t: 'Interact with the Warden', d: 'With all five orbs placed, hold interact on the Warden\'s body. A cutscene plays and you wake up in cells.' },
          { w: 1196, t: 'Escape to the lab and place the last orb', d: 'Pick up your loadout from the bag on the floor and run along the Catwalk to spawn. Ghosts and the seagull carry off a giant Brutus; pick up the orb he drops and put it in the map.' },
          { w: 1244, t: 'Prepare, then go through the new door', d: 'A door opens next to the map. The garage door upstairs is a point of no return: bring a fresh shield with charges, upgraded weapons and all perks. Everyone stands on the pad and holds interact.' },
          { w: 1259, t: 'Boss: break the Dark Mechanism three times', d: 'Kill zombies, dogs and several Brutuses while building a spirit blast. When a safe zone circle appears, get in fast and shoot the red orbs in the sky (or the team gets wiped). Then spirit blast the top of the Dark Mechanism so its sphere turns blue. Repeat three times; grab Max Ammos and Carpenters when they drop.' },
          { w: 1351, t: 'Richtofen enters the Dark Mechanism', d: 'Richtofen\'s player holds interact on the machine (a bot does it if nobody plays him). He plays a short section as the original Richtofen and walks onto the boss pad to finish off the giant Brutus. The ending cutscene plays.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Where Are We Going"',
        summary: 'Spirit blast the dials at the bottom of the Citadel Tunnels and enter 115.',
      },
      {
        id: 'free-monkeys', tab: 'side', type: 'Free equipment', name: 'Free Monkey Bombs',
        summary: 'Fill a monkey statue with specialist kills and collect Monkey Bombs from the walnut teleporter.',
        steps: [
          { t: 'Level your specialist weapon to at least level 2' },
          { t: 'Fill the monkey statue in C-D Street', d: 'It sits outside the map. Kill zombies next to it with your specialist until its hat glows red.' },
          { t: 'Shoot the monkey', d: 'It floats up and disappears.' },
          { t: 'Collect Monkey Bombs from the walnut teleporter', d: 'On a table in Richtofen\'s Laboratory (spawn).' },
        ],
      },
    ],
  });
})();
