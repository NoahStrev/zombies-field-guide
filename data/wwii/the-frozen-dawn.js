/* The Frozen Dawn — Call of Duty: WWII, United Front DLC */
(() => {
  const I = 'assets/img/wwii/the-frozen-dawn/';
  const E = 'DQtMLo-0OfI'; // MrDalekJD easter egg guide (includes all four weapons)
  const EV = { id: E, title: 'The Frozen Dawn easter egg guide', ch: 'MrDalekJD', len: '35:27' };
  const PV = { id: '1hjF4o4Z18E', title: 'The Frozen Dawn Pack-a-Punch', ch: 'MrDalekJD', len: '3:09' };

  ZG.addMap({
    game: 'wwii', id: 'the-frozen-dawn', order: 5,
    name: 'The Frozen Dawn', dlc: 'United Front (DLC 4)', eeName: 'Kingfall',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Four raven weapons', 'Orrery', 'God-King'],
    blurb: 'The lost city of Thule, buried under the Antarctic ice. Earn the four weapons of Barbarossa\'s Raven Lords, pass a trial with each to awaken it, and put the God-King back to sleep.',
    quick: [
      ['Main EE', 'Kingfall (solo or co-op; four players recommended)'],
      ['Wonder weapons', 'Shield, scythe, flail and hammer, each with a trial upgrade'],
      ['Key items', 'Blood pools, a radio, the Orrery cipher, rune stones'],
      ['Boss', 'The God-King (four phases)'],
    ],
    intro: {
      start: 'Kill zombies on the pad in the spawn room to open the way into Thule. WWII rules are explained in the basics on The Final Reich. Thulian Transports (pods) carry you around the map and to Pack-a-Punch.',
      weapons: 'The four raven weapons are the whole quest. Each one starts as a basic weapon; finishing its puzzle and trial upgrades it. In co-op, split them up.',
      'easter-egg': 'Get all four weapons upgraded, put them on the pedestals in the Ice Caves, then take the pod to the God-King. Each phase of the fight needs a different weapon. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Mark a brick in the Passage, then ride each of the three Thulian Transports. Every trip stops at the Pack-a-Punch room and raises the machine a bit more.',
        video: PV,
        steps: [
          { w: 16, t: 'Kill zombies on the pad in the spawn room', d: 'Their blood opens the gateway. Buy the door into the Ice Caves.' },
          { w: 47, t: 'Open the map up to the Blood Altar', d: 'The transport pods open once you get there. Each ride costs 250, then 500, then 750 in the same round.' },
          { w: 93, t: 'Press the brick with a symbol in the Passage', d: 'It glows red. From now on the pods go through the Pack-a-Punch room.' },
          { w: 109, t: 'Ride from all three pods', d: 'One in the Passage, one in the spawn room and one in the Ice Caves. The machine rises each time; after the third different pod it works.', tip: 'You can also hop straight back into the pod you arrive in when it\'s ready.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'shield', tab: 'weapons', type: 'Bloodraven weapon', name: 'Thulian Shield → Roar of Sang\'ket', short: 'Shield', img: I + 'shield.webp', color: 'red',
        summary: 'A shield you can block with. Upgraded, it reflects the sun-like fire in the boss fight.',
        facts: [['Base', 'Fill three blood pools, kill a shielded Wüstling'], ['Upgrade', 'Corpse Eaters, a radio and the Bloodraven trial']],
        video: EV,
        steps: [
          { w: 82, t: 'Fill the blood pool in the Ice Caves', d: 'Left past the Geistschild machine. Kill about five zombies in it.' },
          { w: 98, t: 'Fill the pool in the Morgue', d: 'Through the room on the far side of the Ice Caves.' },
          { w: 113, t: 'Take the raven stone from the bones downstairs in the Morgue and put it in the Overlook pool', d: 'Then fill that pool too.' },
          { w: 128, t: 'Kill the Wüstling with a shield on its back in the Blood Altar', d: 'It drops the Thulian Shield.' },
        ],
        upgrade: {
          name: 'Roar of Sang\'ket', video: EV,
          summary: 'The hardest upgrade. Only the player who picked up the shield first sees the clues, so pick who does it.',
          steps: [
            { w: 1436, t: 'Look for the blood pool with red mist', d: 'Only the shield holder sees it. It\'s one of the three pools you filled.' },
            { w: 1452, t: 'Kill a fully charged Corpse Eater right in the middle of it', d: 'Corpse Eaters spawn after a trip to Pack-a-Punch. Let one eat five zombies until it glows, then kill it in the pool. Its explosion can down you. A pattern shows in the blood when it works.' },
            { w: 1529, t: 'Do the same at the other two pools, noting each pattern in order' },
            { w: 1591, t: 'Make a Bomber blow up by the plane wreck in spawn', d: 'It uncovers a radio and a speaker.' },
            { w: 1606, t: 'Put both on the stones by the big pool in the Blood Altar' },
            { w: 1623, t: 'Tune the radio to each pattern in turn and kill a zombie in the pool', d: 'First pattern, kill one; second pattern, kill one; third, kill one. The pool flickers between patterns when it\'s right.' },
            { w: 1685, t: 'Let a zombie down you in the big pool: Bloodraven trial', d: 'Kill the zombies, charge the stone, then aim the shield at the sun-like fire to reflect it. Twice.' },
          ],
        },
      },
      {
        id: 'scythe', tab: 'weapons', type: 'Deathraven weapon', name: 'Thulian Scythe → Fang of An\'heist', short: 'Scythe', img: I + 'scythe.webp', color: 'void',
        summary: 'A scythe that pulls spines out of Corpse Eaters. The easiest one to get early.',
        facts: [['Base', 'Survive a lockdown in the Phylactery'], ['Upgrade', 'Wire + Corpse Eater spine, then the Deathraven trial']],
        video: EV,
        steps: [
          { w: 159, t: 'Touch the Deathraven stone in the Phylactery', d: 'By the door to the Morgue. You\'re locked in for about a minute with a horde. The scythe appears when it ends.' },
        ],
        upgrade: {
          name: 'Fang of An\'heist', video: EV,
          summary: 'Feed it a spine and a wire, charge it, let it cool, then pass the Deathraven trial.',
          steps: [
            { w: 190, t: 'Take the wire from the plane wreckage in the spawn room' },
            { w: 207, t: 'Kill a Corpse Eater with the scythe and take its spine', d: 'They show up once someone has ridden through the Pack-a-Punch room.' },
            { w: 239, t: 'Put the spine and wire on the holder by the Phylactery blood pool, then place the scythe', d: 'Kill 15 to 20 zombies nearby. The blade catches fire.' },
            { w: 271, t: 'Wait two full rounds for it to cool, then take it', d: 'You can\'t use it yet.' },
            { w: 287, t: 'Ride a pod: Deathraven trial', d: 'Kill the two charged Corpse Eaters and three Wüstlings in the room.' },
          ],
        },
      },
      {
        id: 'flail', tab: 'weapons', type: 'Moonraven weapon', name: 'Broken Flail → Talon of Lu\'roth', short: 'Flail', img: I + 'flail.webp', color: 'green',
        summary: 'Throws a moon orb you can teleport to. Upgraded, it\'s how you get through the God-King\'s walls of fire.',
        facts: [['Base', 'Two books, three gears, the Orrery cipher'], ['Upgrade', 'Constellations, then the Moonraven trial']],
        video: EV,
        steps: [
          { w: 900, t: 'Find the two books', d: 'One is always on the rocks behind the flaming cauldron on the Overlook. The other is in the Passage, by the big pool in the Blood Altar, or above the drop from the Morgue to the Phylactery.' },
          { w: 945, t: 'Put them on the podium in the Thulian Archives', d: 'A secret cipher room opens. Note or photograph the cipher.' },
          { w: 962, t: 'Find three gears', d: 'Random spots: the cipher room, left of the Overlook stairs to the Phylactery, the doorway between the Gearworks and the Passage, between the Phylactery and the Overlook, left of a pod in spawn, and next to the Mystery Box in the Blood Altar.' },
          { w: 1010, t: 'Fit them in the Gearworks and kill about 20 zombies', d: 'Under the globe room (buy the door down). The Orrery powers on.' },
          { w: 1040, t: 'Stop the four coloured orbs where the cipher shows', d: 'Flip the cipher (mirror it). Its top matches the end of the Orrery by Schnellblitz, its bottom the end by the Combat Shotgun locker. Stop each orb with the switches on the floor; a sound confirms each one. The broken flail appears at the front.', tip: 'Get the red one right first, then place the others relative to it.' },
        ],
        upgrade: {
          name: 'Talon of Lu\'roth', video: EV,
          summary: 'Teleport above the Orrery, fill three stones, find three constellations, then pass the Moonraven trial.',
          steps: [
            { w: 1261, t: 'Throw a moon orb into the room above the Orrery and teleport to it' },
            { w: 1277, t: 'Kill three zombies at the right-hand Moonraven stone', d: 'A rune appears.' },
            { w: 1294, t: 'Find a constellation with the flail\'s aim and join the stars', d: 'Aim (left trigger) to see them. Spots: above the Orrery, behind the Overlook pool, in the Phylactery window, both sides of the Blood Altar, above the entrance to Thule in spawn.' },
            { w: 1341, t: 'Repeat with the middle stone, then the left one', d: 'Three constellations in all.' },
            { w: 1356, t: 'Throw an orb at the glowing Orrery: Moonraven trial', d: 'Kill the zombies, then teleport over the walls of fire with your orb. Twice.' },
          ],
        },
      },
      {
        id: 'hammer', tab: 'weapons', type: 'Stormraven weapon', name: 'Thulian Hammer → Fist of Tal\'rek', short: 'Hammer', img: I + 'hammer.webp', color: 'storm',
        summary: 'A hammer you can throw. Upgraded, it breaks the bubble shields on zombies in the boss fight.',
        facts: [['Base', 'Battery, four stones, a rune code and two pillar puzzles'], ['Upgrade', 'Carry a charge between runes, three tile puzzles, a lightning bridge']],
        video: EV,
        steps: [
          { w: 302, t: 'Carry the battery from the spawn room to the cauldron on the Overlook', d: 'Right of the M30 Drilling locker. Do it early. Kill zombies by it to charge it.' },
          { w: 348, t: 'Collect the four T-shaped stones', list: [
            'Thulian Archives: right of Schnellblitz, by the globe.',
            'Ice Caves: by a raven weapon pedestal, overlooking the Overlook.',
            'Blood Altar: on the ledge opposite Kugelblitz.',
            'Morgue: behind the Geistschild machine.',
          ] },
          { w: 394, t: 'Put them in the slots across from the cauldron and read the code under them', d: 'Four runes, left to right (easiest to read from in front of the Geistschild machine).' },
          { w: 426, t: 'Kill one zombie at each matching rune stone, in order', d: 'The runes are on the rocks in the middle of the Overlook. A mistake means starting the code again.' },
          { w: 490, t: 'Solve the two unfinished lightning pillars', d: 'Two of four pillars already show a purple lightning rune. Shoot blocks on the other two until they match: the block you shoot turns twice, the blocks touching it turn once.', tip: 'MrDalekJD\'s video description links a solver: enter how each block faces and it tells you what to shoot.' },
          { w: 600, t: 'Catch the hammer', d: 'It teleports away when you get close. Go prone and interact with it from below: it turns sideways and flies off. Follow it until it reaches the Overlook pillars and you can take it.' },
        ],
        upgrade: {
          name: 'Fist of Tal\'rek', video: EV,
          summary: 'Pass a charge along a chain of runes with the hammer, solve three tile puzzles, then cross a lightning bridge to the Stormraven trial.',
          steps: [
            { w: 615, t: 'Melee the glowing rune in the spawn room, then run the charge to the next rune', d: 'Charged hammer → rune on the left wall entering the Ice Caves → rune over the Morgue blood pool. Hurry: the charge runs out.' },
            { w: 664, t: 'In the Phylactery, kill a zombie with the charged hammer on the pedestal by the Deathraven stone', d: 'The rune above the door lights up. In co-op, have someone train zombies at that doorway.' },
            { w: 711, t: 'Put the hammer away, take it out again and hit the rune under the strange wall', d: 'In the hallway between the Phylactery and the Blood Altar. It turns into a tile puzzle.' },
            { w: 727, t: 'Solve the three tile puzzles', d: 'Shoot a tile to flip the tiles connected to it; get every tile purple. The second and third have a skull tile that resets the puzzle. They\'re the same every game.' },
            { w: 835, t: 'Walk the invisible lightning bridge off the Overlook, hammer out', d: 'Keep the hammer in your hands the whole way. It takes you to the Stormraven trial: throw the hammer (fire button held) to pop the zombies\' energy bubbles.' },
          ],
        },
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Kingfall',
        summary: 'Upgrade all four raven weapons, set them on the pedestals overlooking Thule, and fight the God-King. Each phase of the fight needs one of the weapons.',
        facts: [
          ['Players', 'Solo or co-op (four players recommended)'],
          ['Reward', 'Achievement, ending cutscene'],
          ['Boss', 'The God-King'],
        ],
        prep: [
          { t: 'Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'Roar of Sang\'ket', needs: ['shield'] },
          { t: 'Fang of An\'heist', needs: ['scythe'] },
          { t: 'Talon of Lu\'roth', needs: ['flail'] },
          { t: 'Fist of Tal\'rek', needs: ['hammer'] },
        ],
        video: EV,
        steps: [
          { w: 1718, t: 'Place all four upgraded weapons on the pedestals at the top of the Ice Caves', d: 'Overlooking Thule. The shield goes on the floor pedestal nearest the spawn room. The pod in the Ice Caves opens.' },
          { w: 1734, t: 'Get ready, then pick the weapons back up', d: 'Full armour, Pack-a-Punch, Laufenblitz, Schnellblitz, Kugelblitz and Lebenblitz. You need the weapons in the fight; on solo or with fewer than four players, the ones nobody carries appear in the arena.', tip: 'An upgraded 9mm SAP is excellent here.' },
          { w: 1796, t: 'Phase 1: fill the rune pads on both sides, then shoot the glowing runes', d: 'Kill zombies on the two pads. Shoot the God-King while he attacks (he can\'t be hurt while moving). When he pulls you towards him, shoot the runes that light up with energy.' },
          { w: 1890, t: 'Phase 2: the same, but hide behind ice pillars', d: '"The sun and moon cower before me" means a big blast: get behind an ice pillar. He also throws bombs and lightning at single players.' },
          { w: 1953, t: 'Phase 3: break the bubble shields with the hammer', d: 'Zombies get energy bubbles; the hammer\'s throw pops them so you can fill the pads. He keeps re-shielding them each time he speaks, so be quick.' },
          { w: 2043, t: 'Phase 4: flail through the walls of fire and finish him', d: 'Throw a moon orb near him and teleport through the fire, then pour damage in during his attacks. He falls and the cutscene plays.', imgs: [{ src: I + 'godking.webp', cap: 'The God-King' }] },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'cold-hearted', tab: 'side', type: 'Super Easter Egg', name: 'Cold Hearted: every WWII main quest', short: 'Cold Hearted', color: 'ice',
        summary: 'WWII\'s Super Easter Egg is a challenge rather than a quest of its own: finish all five main quests (on The Final Reich, the hardcore one) and the rewards unlock.',
        facts: [['Reward', 'Play as the Wicht Warden, the "Über-Schnalle" weapon charm, and a chosen primary weapon at the start of every match']],
        steps: [
          { t: 'The Final Reich: Dark Reunion', d: 'The hardcore quest, not Fireworks. [[wwii/the-final-reich/easter-egg/item-dark-reunion|Open the guide]].' },
          { t: 'The Darkest Shore: Making History', d: '[[wwii/the-darkest-shore/easter-egg|Open the guide]].' },
          { t: 'The Shadowed Throne: Stadtjäger Down', d: '[[wwii/the-shadowed-throne/easter-egg|Open the guide]].' },
          { t: 'The Tortured Path: I Have the Power', d: '[[wwii/the-tortured-path/easter-egg|Open the guide]].' },
          { t: 'The Frozen Dawn: Kingfall', d: 'This map\'s quest, on the Main Easter Egg tab.' },
        ],
      },
    ],
  });
})();
