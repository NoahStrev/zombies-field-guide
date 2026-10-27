/* Tag der Toten — Black Ops 4 DLC 4 (Aether story finale) */
(() => {
  const I = 'assets/img/bo4/tag/';
  const D = 'L_j__xt5DRY'; // MrDalekJD ultimate guide
  const R = 'r0lxoMyWAEM'; // MrRoflWaffles easter egg guide
  ZG.addMap({
    game: 'bo4', id: 'tag-der-toten', order: 7, group: 'aether',
    name: 'Tag der Toten', dlc: 'Black Ops Pass · DLC 4', eeName: 'Salvation Lies Above',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Wunderwaffe DG-Scharfschütze', 'Samantha\'s Music Box', 'Hermit challenges'],
    blurb: 'A remake of Call of the Dead and the final Aether story map. Help the Hermit at the lighthouse, build the Agarthan Device and end the story.',
    quick: [
      ['Main EE', 'Salvation Lies Above'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Wunderwaffe DG-Scharfschütze, Tundragun, Thundergun (all free)'],
      ['Key items', 'Dynamite, Samantha\'s Music Box, snowballs'],
    ],
    intro: {
      start: 'Three power switches. Pack-a-Punch moves around and the lighthouse beam shows where it is. The Hermit at the top of the lighthouse repairs things and hands out rewards.',
      parts: 'The Riot Shield and the Dynamite (from snowballed fire zombies) are both needed. Flinger gearboxes need repairing by the Hermit.',
      weapons: 'Get the free Wunderwaffe and Samantha\'s Music Box before starting the quest; the Thundergun and Tundragun are optional.',
      'easter-egg': 'Long, with a big escort at the end. Pack-a-Punch shuts off partway through, so upgrade everything first. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn on the Docks power, give the Hermit a blue rock to light the lighthouse, then turn on the boat\'s power. Pack-a-Punch moves between four spots; the lighthouse beam points at the current one.',
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [
          { w: 63, t: 'Turn on the power switch at the Docks (spawn)' },
          { w: 235, t: 'Shoot down the blue rock and take it to the Hermit', d: 'A blue rock sticks out of the scenery, often in the cave by the lighthouse (its spot can change). Shoot or knife it, pick it up and bring it to the top of the lighthouse (Level 4). The Hermit lowers his pulley; give it to him. The lighthouse lights up and the challenge totems activate.', imgs: [{ src: I + 'blue-rock.webp', cap: 'Blue rock' }] },
          { w: 283, t: 'Turn on the boat\'s power switch', d: 'From the Beach (the original Call of the Dead spawn), go up the Gangway onto the boat and up the stairs. Pack-a-Punch is now on.' },
          { w: 298, t: 'Follow the lighthouse beam to Pack-a-Punch', d: 'It moves between the Beach, the Lagoon, the Sunken Path and the Boathouse.' },
        ],
      },
      {
        id: 'golden-pap', tab: 'start', type: 'Getting started', name: 'Golden Pack-a-Punch & the third power', short: 'Golden PaP',
        summary: 'Fix two ziplines, get the zipline handle, turn on the Facility power, and the lighthouse starts shining on an island with a Golden Pack-a-Punch that fully upgrades a gun in one go. The easter egg needs it.',
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [
          { w: 313, anyList: 'Cranks in either order', t: 'Place two zipline cranks', list: [
            'Stern crank: on the sand, or near the perk. Put it on the zipline at the Sun Deck and hold interact to swing it into place.',
            'Forecastle crank: in one of three spots around the Forecastle. Put it on the zipline on the Main Deck.',
          ] },
          { w: 424, t: 'Get the zipline handle from the Hermit', d: 'Now every zipline works: to the Cargo Hold, the Facility Entrance and back to spawn.' },
          { w: 440, t: 'Turn on the Facility power switch', d: 'Zipline to the Facility Entrance and work through Geological Processing / Decontamination to the Upper Catwalk debris (1,500 solo). The switch is just past it.' },
          { w: 471, t: 'Use the flinger when the beam points at the island', d: 'Golden Pack-a-Punch fully upgrades a gun (all four tiers). You\'re locked there for about 2½ minutes, then flung back.' },
          { w: 533, t: 'Broken flinger? Get the Hermit to fix its gearbox', d: 'Pick up the gearbox, give it to the Hermit, wait a minute or two and put the fixed one back. The Facility (Loading Platform) flinger first needs dynamite to reach.', needs: ['dynamite'] },
        ],
      },
      {
        id: 'totems', tab: 'start', type: 'Getting started', name: 'Hermit\'s challenge totems', short: 'Totems',
        summary: 'Five totems give three challenges each, with the same rewards every game. The easter egg needs two totems fully completed; all five earn a free Thundergun.',
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [
          { w: 1523, any: 'Totems in any order', t: 'Forecastle totem', list: [
            'Kill 25 enemies while standing still → Carpenter.', 'Kill 10 enemies with melee (shield bashes count) → Fire Sale.',
            'Cook soup → Armor. The ingredients only appear once you reach this challenge: something soupy in the Gangway kitchen, a vegetable on the Beach (crate, wheelbarrow or barrel) and meat in the Boathouse. Put them in the pot at the very front of the ship and throw a snowball in for water.',
          ] },
          { w: 1651, any: 'Totems in any order', t: 'Lighthouse Station totem', list: [
            'Kill 25 with headshots and pick up their brains → Carpenter.', 'Kill 20 with shield bashes → Full Power.',
            'Carry pee jars from Lighthouse Level 4 to the Beach water → Self-Revive. Only one at a time; no sprinting, jumping, sliding, falling or ziplines while carrying.',
          ] },
          { w: 1699, any: 'Totems in any order', t: 'Beach totem', list: [
            'Kill 13 enemies with snowballs → Bonus Points.', 'Kill 15 with a lighthouse trap (Beach, Lighthouse Annex path to the Boathouse, or Lagoon) → Insta-Kill.',
            'Fill the gaps in three S.O.S. signs with snowballs (hull of the Stern from the Beach, above the lighthouse Level 1 door, hull of the Cargo Hold from the Sunken Path) → Ice Pick (break out of freezing faster).',
          ] },
          { w: 1761, any: 'Totems in any order', t: 'Frozen Crevasse totem', list: [
            'Kill 20 while standing in freezing water → Bonus Points.', 'Shatter 6 frozen zombies (freeze with snowballs, then knife) → Max Ammo.',
            'Ring the Docks bells to the Hermit\'s 5-note tune (subtitles on): G = big bell by the spawn ledge, A = smallest bell on the pole by the power switch, E = bell on the ship stuck in the ice behind spawn, C = bell on the Boathouse wall right of the window → snowball capacity 10.',
          ] },
          { w: 1838, any: 'Totems in any order', t: 'Specimen Storage totem', list: [
            'Fling 15 zombies with a flinger → Insta-Kill.', 'Kill 10 enemies while riding a zipline → Full Power.',
            'Whack-a-mole: snowball the target on the Loading Platform, then hit the puppets popping out of the pipes → half-price traps.',
          ] },
          { w: 1917, t: 'All five done: get the Thundergun from the Hermit', d: 'He hands you a key for the Ascension Group crate at the top of the lighthouse.' },
        ],
        blocks: [{ tip: 'Kill fire zombies with snowballs while you do these: it builds your dynamite.' }],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'riot-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Riot Shield', color: 'gold',
        summary: 'A shield with a machine pistol. Shield bashes count as melee kills for the totem challenges.',
        facts: [['Parts', '3'], ['Build at', 'Bench through the door on Lighthouse Level 2']],
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        parts: [
          { w: 95, name: 'Part 1', area: 'Docks (spawn)', spots: ['On a wooden panel.', 'On the boat next to the power switch.', 'On the other side of the docks, by the gas pump.'] },
          { w: 111, name: 'Part 2', area: 'Lagoon (the parkour route from spawn)', spots: ['Up on the rocks on the parkour path.', 'Over past the Mystery Box spot, perched up high.', 'Down in the grassy area.'] },
          { w: 172, name: 'Part 3', area: 'Lighthouse', spots: ['On the outside wall by the lighthouse.', 'Lighthouse Level 2, perched on a ledge.', 'One more flight up, on the side.'] },
        ],
      },
      {
        id: 'dynamite', tab: 'parts', type: 'Buildable · Equipment', name: 'Dynamite', img: I + 'dynamite.webp', color: 'fire',
        summary: 'Blows open shortcuts and safes. Each bundle takes three parts, dropped by fire zombies killed with snowballs. The easter egg needs one for the Seal of Duality safe.',
        facts: [['Parts', '3 (from fire zombies)'], ['Build at', 'Any bench']],
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [
          { w: 718, t: 'Kill three fire zombies with snowballs', d: 'Snowballs lie around almost every area and replace your grenades while you have them. A frozen fire zombie drops a dynamite part a few seconds later.', imgs: [{ src: I + 'snowball.webp', cap: 'Snowball' }] },
          { w: 913, t: 'Craft it at a bench and pick it up', tip: 'Use the first one on the Loading Platform (Facility flinger) and keep the next for the easter egg.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'wunderwaffe', tab: 'weapons', type: 'Wonder weapon', name: 'Wunderwaffe DG-Scharfschütze', img: I + 'wunderwaffe.webp', color: 'lightning',
        summary: 'A sniper-rifle version of the Wunderwaffe that fires chaining lightning. Free from a short quest, and needed for the easter egg.',
        facts: [['Box', 'Yes (950)'], ['Free quest', 'Icicle → key → Vril Device → Hermit']],
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [
          { w: 801, t: 'Shoot down the big icicle', d: 'Larger than the decorative ones, growing on its own: above the cave entrance on the Beach, off the broken railing at Lighthouse Station, or by the stairs at Lighthouse Cove. Pick it up.' },
          { w: 832, t: 'Melt it in the pot at the Forecastle', d: 'Place it in the pot over the campfire at the front of the ship. When it has melted, take the key.' },
          { w: 848, t: 'Open the safe in Specimen Storage and charge the Vril Device', d: 'Kill 10–12 zombies near it until it glows green, then take it.' },
          { w: 879, t: 'Give it to the Hermit and open the crate', d: 'On Lighthouse Level 4, put it on his pulley. He sends down a key: open the Group 935 crate by the stairs for the Wunderwaffe.' },
        ],
      },
      {
        id: 'music-box', tab: 'weapons', type: 'Lethal · Wonder weapon', name: 'Samantha\'s Music Box', img: I + 'music-box.webp', color: 'aether',
        summary: 'A lethal that pulls in nearby zombies and then explodes. The easter egg throws it onto a campfire several times.',
        facts: [['Cost', 'Free (replaces your grenades)'], ['Needs', 'Facility power']],
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [
          { w: 564, anyList: 'Cards in either order', t: 'Find two punch cards in the Facility', list: ['Decontamination: in the washing machine or one of two sinks.', 'Specimen Storage: on the bottom of the shelving, in a toilet, or in the 115 container.'], imgs: [{ src: I + 'punch-card.webp', cap: 'Punch card' }] },
          { w: 611, t: 'Encode them at the console in the Security Lobby' },
          { w: 626, t: 'Insert them either side of the vault in Human Infusion', d: 'Hold interact to open the vault: a lockdown starts while the door rolls open. Take the music boxes when it\'s done.', tip: 'Zombies killed during the lockdown give no points. Keep them alive and kill them after for a big point boost.' },
        ],
      },
      {
        id: 'tundragun', tab: 'weapons', type: 'Wonder weapon', name: 'Tundragun', img: I + 'tundragun.webp', color: 'ice',
        summary: 'An icy Thundergun that freezes and shatters zombies. Free from a timed snowball run. Not needed for the easter egg.',
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [
          { w: 1053, t: 'Hit five snowball targets in a row, quickly', d: 'A ding confirms each. Follow the video\'s route (fixed flingers needed):', list: [
            'Above the Group 935 facility door by the Loading Platform.', 'On a wall in the Ice Grotto.', 'Near the flinger at the Sun Deck (by the second power switch).',
            'On the newel post at the back of Lighthouse Level 3.', 'On a pillar in the Cargo Hold (zipline there and turn about 45°).',
          ] },
          { w: 1131, t: 'Take the Tundragun from the chest in the Cargo Hold' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Salvation Lies Above', short: 'Main EE',
        summary: 'Help the Apothicon Blood with offerings, find the Seal of Duality, charge it at every Pack-a-Punch spot and the Golden Pack-a-Punch, then escort it across a lava-covered map to finish the Agarthan Device and end the Aether story.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Ending cutscene and the final playable scene'],
          ['Hardest part', 'The final moving-bubble escort'],
        ],
        prep: [
          { t: 'All power on, Pack-a-Punch and Golden Pack-a-Punch working', needs: ['power-pap', 'golden-pap'] },
          { t: 'Two totems completed (six challenges)', needs: ['totems'] },
          { t: 'Wunderwaffe DG-Scharfschütze', needs: ['wunderwaffe'] },
          { t: 'Samantha\'s Music Box (several)', needs: ['music-box'] },
          { t: 'A dynamite bundle', needs: ['dynamite'], d: 'Also blow open every dynamite-blocked path (like the Hidden Path) beforehand: some offerings and hints are behind them.' },
          { t: 'Riot Shield, and subtitles turned on', needs: ['riot-shield'], d: 'The Blood\'s hints are spoken only once.' },
        ],
        stepsTitle: 'Quest steps',
        video: { id: R, title: 'Ultimate Tag der Toten easter egg guide', ch: 'MrRoflWaffles', len: '28:51' },
        steps: [
          { w: 453, t: 'Get the four dials from the Hermit and set them', d: 'With two totems done, visit the Hermit. Take the dials to the room next to the Artifact Storage (the red Apothicon Blood room, low on the boat by the old Juggernog spot). Place all four and rotate each until it dings; if you pass the ding, turn it back.', tip: 'Shoot the blue pipe above the fire blocking one entrance to open a shortcut. The intended solution is coloured numbers around the map: blue in the Cargo Hold, orange at the Forecastle, purple at the Stern, yellow on the Sun Deck.' },
          { w: 544, t: 'Bring the Blood three offerings', d: 'It tells you where each one is, one at a time (bones, flesh, a heart). Hint → place:', list: [
            'Where one mysteries: Lighthouse Level 1, a stair step.', 'Where preservation freezes: Main Deck, the life ring.', 'Where crows roost: Forecastle, the barrels at the old Mule Kick spot.',
            'Where bounded slept: Forecastle, inside the shipping container.', 'Where bread breaks: Gangway kitchen island.', 'Where earth crumbles: end of the conveyor in Geological Processing.',
            'Where falls freeze: Cargo Hold water below the zipline.', 'Where feet slip: bottom of the ice slide.', 'Where filth cleanses: Decontamination, among the bags of rubbish.',
            'Where fire sinks: Sunken Path lantern.', 'Where helixes peak: top of the lighthouse, along the wall by the jars.', 'Where lightning aims: Security Lobby bench (by the Wunderwaffe blueprint).',
            'Where lines berth: Docks, in the snow at the base of the zipline.', 'Where lungs close: Lagoon, the floor of the underwater tunnel.', 'Where madness sleeps: Specimen Storage, under the bed in the middle cell.',
            'Where mountains throw: behind the Facility flinger.', 'Where north is found: the compass in the ship\'s Bridge.', 'Where power ends: the vault room, right of the power switch console.',
            'Where hidden burns: Hidden Path, in the fire by the generator.', 'Where thirst dawns: Stern, the ledge left of the soda machine (by the crane).',
          ] },
          { w: 868, t: 'Blow open the safe with the Seal of Duality', d: 'The Blood hints at one of four posters. Knife the poster, place dynamite on the safe behind it, and take the Seal (the Vril Vessel):', needs: ['dynamite'], list: ['Where humans suffer: bulletin board in Specimen Storage.', 'Inside an icy hall: wooden board at the bottom of the ice slide (Ice Grotto).', 'Where Aether was gathered: bulletin board in Geological Processing.', 'Where cages hang: framed map in the Boathouse.'], imgs: [{ src: I + 'seal.webp', cap: 'The Seal of Duality' }] },
          { w: 943, t: 'Wisps 1: snowball the three orange orbs back', d: 'Place the Seal on the barrel in the middle of the Blood room (never interact with the Blood without the Seal; it downs you). Shoot the floating red ball until three orange wisps fly off across the map. Find each, hit it with a snowball from a distance (it turns blue), then shoot it and it flies back. Then do the same three again inside the room. Pick up the Seal.', warn: 'Get too close and a wisp runs away; just find it again.', imgs: [{ src: I + 'blood.webp', cap: 'The Apothicon Blood' }] },
          { w: 1067, t: 'Campfire: Seal plus a Music Box', d: 'Place the Seal on the campfire in the Sunken Path and throw a Samantha\'s Music Box onto the fire (it turns blue). Zombies vanish while a conversation plays; afterwards they come back. Take the Seal.', needs: ['music-box'] },
          { w: 1084, t: 'Heat one soapstone and freeze the other', d: 'The Hermit lowers two soapstones. Put both on the scorch marks behind the lighthouse and run the laser trap over them. Take one to the machine in Human Infusion; take the other to the ice trap in the Decontamination doorway, freeze it, then put it in the machine too. Don\'t go into water while carrying them.' },
          { w: 1146, t: 'Power the fuse in the old Call of the Dead door', d: 'Take the fuse from the machine to the metal door at Lighthouse Station (where Ultimis were trapped in Call of the Dead) and slot it in. To charge it, shoot the red batteries on the two electric pylons near the Facility Entrance / Loading Platform with the Wunderwaffe, then kill an Electric Catalyst next to each of three generators: Lighthouse Station upper platform, Lighthouse Approach near the MX9, and the Boathouse by the trap.', needs: ['wunderwaffe'] },
          { w: 1236, t: 'Take the Elemental Shard from behind the door', imgs: [{ src: I + 'shard.webp', cap: 'The Elemental Shard' }] },
          { w: 1252, t: 'Wisps 2 and campfire 2', d: 'Give the shard to the Blood room (Seal on the barrel), repeat the wisps (three around the map, then three in the room), then the Sunken Path campfire with another Music Box.' },
          { w: 1297, t: 'Hermit lockdown (Pack-a-Punch turns off after this)', d: 'Do all your Pack-a-Punching first. Give the Seal to the Hermit via the pulley; survive about two minutes locked in the lighthouse; take the Seal back.', warn: 'From here on Pack-a-Punch is disabled for the rest of the game.' },
          { w: 1342, t: 'Charge the Seal at the four Pack-a-Punch spots', d: 'Follow the lighthouse beam: place the Seal in the machine at that spot and kill lots of zombies nearby. When it pops out, the beam moves on. Do all four (Beach, Lagoon, Sunken Path, Boathouse).' },
          { w: 1391, t: 'Wisps 3 and campfire 3', d: 'Seal on the barrel again; this time the wisps stay in the room. Then the campfire with a Music Box once more.' },
          { w: 1422, t: 'Point of no return: fling to the Golden Pack-a-Punch', d: 'No more perks or box spins after this. Everyone uses the flinger together, places the Seal in the Golden Pack-a-Punch and fills it with souls.' },
          { w: 1469, t: 'Follow the moving safe bubble across the map', d: 'The Seal forms a red bubble; outside it you take damage. It moves (it may fake a direction), stops as a soul box in the Artifact Storage, then in front of the lighthouse, then zips over to the Facility. The water has turned to lava: jump on the platforms that appear. Ride the zipline with it to the Facility.', imgs: [{ src: I + 'transformed.webp', cap: 'The map after the transformation' }] },
          { w: 1610, t: 'Survive in Human Infusion until the bubble shrinks away', d: 'Throw everything you have: Music Boxes, monkeys, wonder weapons, specialists.' },
          { w: 1656, t: 'Take the Agarthan Device to the Hermit', d: 'Run back to the top of the lighthouse and give it to him. He reveals who he is and leaves; the device floats down onto the boat. Pick it up on the Forecastle to trigger the ending.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'free-perk', tab: 'side', type: 'Free perk', name: 'Five wooden figurines: extra perk',
        summary: 'Pick up a figurine next to each Pack-a-Punch spot while the machine is there, put them in the suitcase in spawn, and kill the electric zombies that come next round for a free perk.',
        spots: ['Boathouse: a musk deer.', 'Beach: a bird (duck).', 'Lagoon: a squirrel (duck).', 'Sunken Path / Artifact Storage: an Apothicon.', 'Golden Pack-a-Punch island: a Margwa.'],
      },
      {
        id: 'golden-snowballs', tab: 'side', type: 'Upgrade', name: 'Golden snowballs',
        summary: 'Snowballs that one-hit kill into the 30s and replace all snowballs on the map.',
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [
          { w: 1255, anyList: 'Puppets in any order', t: 'Snowball four sock puppets', d: 'One in each area (three spots each): the Sunken Path, the Lighthouse, the Sun Deck and Geological Processing.' },
          { w: 1350, anyList: 'Campfires in any order', t: 'Fill three blue campfires', d: 'Kill about 10 zombies near each: Beach, Boathouse, Frozen Crevasse.' },
          { w: 1414, t: 'Shoot the Hermit\'s spleen jar in Human Infusion and run it to him', d: 'A timer starts when you pick it up. Zipline to the Docks and stand in freezing water to slow it, then zipline to Lighthouse Level 4 and give it to him.', imgs: [{ src: I + 'spleen.webp', cap: 'The spleen' }] },
        ],
      },
      {
        id: 'heat-pack', tab: 'side', type: 'Equipment', name: 'Heat Pack', img: I + 'heat-pack.webp',
        summary: 'Slows down freezing. Ride the Facility flinger three times (left, middle and right side); each lands you on a box with a part. Build it at any bench.',
        video: { id: D, title: 'Ultimate guide to Tag der Toten', ch: 'MrDalekJD', len: '33:20' },
        steps: [{ w: 960, t: 'Fling from the left, middle and right of the flinger and collect the three parts' }],
      },
      {
        id: 'songs', tab: 'side', type: 'Songs', name: '"A Light from the Shore" and "Reflections"',
        summary: '"A Light from the Shore": interact with three weapons from the Call of the Dead intro. "Reflections": interact three times with the metal door where Ultimis were trapped.',
        spots: ['A sickle in the Ice Grotto.', 'A machete at the end of the Hidden Path near the Beach.', 'A pitchfork on the Loading Platform at the Facility.'],
      },
    ],
  });
})();
