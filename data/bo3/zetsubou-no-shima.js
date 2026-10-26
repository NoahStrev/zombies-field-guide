/* Zetsubou No Shima — Black Ops III, Eclipse DLC */
(() => {
  const I = 'assets/img/bo3/zns/';
  ZG.addMap({
    game: 'bo3', id: 'zetsubou-no-shima', order: 4, group: 'original',
    name: 'Zetsubou No Shima', dlc: 'Eclipse · DLC 2', eeName: 'Seeds of Doubt',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Zombie Shield', 'KT-4 → Masamune', 'Skull of Nan Sapwe'],
    blurb: 'A Division 9 jungle island full of spiders, spores and Thrashers. Grow plants with buckets of 115 water, build the KT-4, earn the Skull of Nan Sapwe and fight the giant Thrasher.',
    quick: [
      ['Main EE', 'Seeds of Doubt'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapon', 'KT-4 → Masamune'],
      ['EE reward', 'All perks + achievement'],
    ],
    intro: {
      start: 'Buckets and 115 water run this map: they power the labs and grow plants. Get power and Pack-a-Punch first, then start the Skull and the Trials — both feed into the easter egg.',
      parts: 'Two buildables with three possible spots per part, plus the KT-4 ingredients on the Wonder Weapons tab.',
      'easter-egg': 'Long setup, short quest. Most of the work is the prep list. Tap a chip to see that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'bucket', tab: 'start', type: 'Map mechanic', name: 'Buckets & 115 water', color: 'ice',
        summary: 'Pick up a bucket and fill it at a pool of 115 water. Buckets turn on lab generators and water your plants.',
        blocks: [
          { h: 'Where the buckets are' },
          { list: ['Spawn area.', 'Inside Lab A (including the back room with the GobbleGum machine).', 'Inside Lab B (including upstairs).', 'Around Lab A or Lab B near the water pools.'] },
          { h: 'Water colours' },
          { table: { head: ['Water', 'Where'], rows: [
            ['Blue', 'Behind Lab A, before the path to the giant spider nest.'],
            ['Green', 'Behind Lab B, under scaffolding next to a big chunk of 115.'],
            ['Purple', 'Bunker Living Quarters, in the far left corner.'],
            ['Rainbow (iridescent)', 'Inside the Sewer Pipe ride — only for the Masamune plant. See {{kt4}}.'],
          ] } },
          { tip: 'Each plant can be watered once per round. See {{seeds}} for what each water grows.' },
        ],
      },
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Power both labs with 115 water to open the bunker, turn on the main power underwater, then collect three machine tools to drain the Pack-a-Punch room.',
        steps: [
          { t: 'Power Lab A and Lab B at the same time', needs: ['bucket'], d: 'Fill a bucket and pour it into a lab\'s generator ("Generator needs irradiated water"). The power only lasts a while, so get the second lab running before the first shuts off. When both are on, two green lights show above the bunker door and you can open it.' },
          { t: 'Turn on the bunker\'s main power', d: 'Inside the bunker, take the door on the left from the Pack-a-Punch area into the power room. Dive into the flooded section and look left: a spider web blocks the turbine. Knife it, kill the zombies underwater, then flip the power switch.' },
          { any: 'Collect the three machine tools in any order', t: 'Machine tool 1: the pipe', d: 'After the underwater zombies in the power room die, a small pipe appears in the pool in front of where the web was.' },
          { any: 'Collect the three machine tools in any order', t: 'Machine tool 2: the valve wheel', d: 'Somewhere in the underwater tunnels near Mule Kick.' },
          { any: 'Collect the three machine tools in any order', t: 'Machine tool 3: the pressure gauge', d: 'In the room with cocooned zombies. Knife the cocoons; one of them (random each game) drops the gauge.' },
          { t: 'Fix the pumps', d: 'Take all three tools to the Pack-a-Punch chamber and repair the pumps. The water drains and Pack-a-Punch is usable.' },
        ],
      },
      {
        id: 'trials', tab: 'start', type: 'Challenges', name: 'Trials of the Ancients', color: 'gold',
        summary: 'Each player gets three random challenges at the skull altar. Finishing them earns rewards — and once every player is done, lightning starts striking the altar to electrify Zombie Shields.',
        facts: [['Top trial', 'Empty Perk Bottle (extra perk slot)'], ['Middle trial', 'Dingo, SVG-100 or 205 Brecci'], ['Bottom trial', 'Max Ammo']],
        blocks: [
          { h: 'Possible challenges' },
          { table: { head: ['Tier', 'Challenge', 'How to do it'], rows: [
            ['Top', 'Eat a fruit grown by a plant', 'Water one plant blue, green and purple (once each, no KT-4).'],
            ['Top', 'Kill 8 spiders with spores', 'Lead spiders into spore clouds.'],
            ['Top', 'Kill 3 zombies as they mutate', 'Kill a zombie while it turns into a Thrasher. One is guaranteed when you open the bunker.'],
            ['Top', '30 kills with the Propeller Trap', 'Trap between spawn and Lab A.'],
            ['Top', 'Shoot the heads off 5 Thrashers', 'Aim for the head instead of the spores.'],
            ['Middle', 'Get a power-up from a plant', 'Water a plant blue three rounds in a row; open the pod.'],
            ['Middle', 'Kill 15 zombies drawn to a plant', 'Grow a purple-water plant and kill the zombies it lures.'],
            ['Middle', 'Kill 20 zombies underwater', 'The power-room pool counts.'],
            ['Middle', 'Headshot 10 spore-infected zombies', 'Insta-Kill kills count.'],
            ['Middle', 'Kill a Thrasher before it enrages', 'Skull of Nan Sapwe or a high-damage weapon.'],
            ['Middle', '20 kills with the Fan Trap', 'Stairs at the bunker entrance toward the anti-air platform.'],
            ['Bottom', 'Water the same plant 3 times', 'Once per round for three rounds.'],
            ['Bottom', 'Water 5 plants', 'Any water.'],
            ['Bottom', 'Shoot 5 spores', 'Knifing works too.'],
            ['Bottom', 'Use a spore to regain air underwater', 'Pop an underwater spore and swim into the cloud.'],
            ['Bottom', 'Destroy 5 webs with explosives', 'Frag grenades stick to webs; Ray Gun shots count.'],
          ] } },
        ],
      },
      {
        id: 'seeds', tab: 'start', type: 'Map mechanic', name: 'Seeds & plants', color: 'green',
        summary: 'Plant seeds in the planters and water them for three rounds. The water you use (and whether you shoot them with the KT-4) decides what grows.',
        blocks: [
          { table: { head: ['Water each round', 'Most likely result'], rows: [
            ['Blue ×3', 'A pod with power-ups and weapons. Shooting it with the {{kt4}} each round adds rare drops like Cymbal Monkeys, Bowie Knife, Empty Perk Bottle — and the FlaK shell for the easter egg.'],
            ['Green ×3', 'Grabs a zombie and slowly kills it.'],
            ['Purple ×3', 'Lures zombies and rips their heads off. Hurts you if you stand too close.'],
            ['Blue, green, purple (once each), no KT-4', 'Fruit: a free perk if you have an empty slot.'],
            ['All three + KT-4 every round', 'Clone pod: copies your loadout and respawns you there if you die.'],
          ] } },
          { note: 'Results are likely, not guaranteed. Grow two or three at once.' },
        ],
      },
      {
        id: 'ee-roadmap', tab: 'start', stepsOrder: 'suggested', type: 'Plan', name: 'Road to the Easter Egg',
        summary: 'Everything Seeds of Doubt needs, in a sensible order.',
        steps: [
          { t: 'Power and Pack-a-Punch', needs: ['power-pap'] },
          { t: 'Build the Zombie Shield', needs: ['zombie-shield'] },
          { t: 'Build the Gas Mask (every player)', needs: ['gas-mask'] },
          { t: 'Build the KT-4', needs: ['kt4'] },
          { t: 'Get the Skull of Nan Sapwe', needs: ['skull'] },
          { t: 'Every player finishes their Trials', needs: ['trials'] },
          { t: 'Electrify the shield', needs: ['zombie-shield'] },
          { t: 'Upgrade the KT-4 into the Masamune', needs: ['kt4'] },
          { t: 'Start Seeds of Doubt', needs: ['main-ee'] },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'zombie-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Zombie Shield', img: I + 'shield.webp',
        summary: 'A riot shield you can hold or wear on your back. Once all players finish their Trials, it can be electrified at the skull altar.',
        facts: [['Parts', '3'], ['Upgrade', 'Electric Shield']],
        parts: [
          { w: 13, name: 'Handles', area: 'Directly under Lab A', spots: [
            'Hanging on the pillar with the Kuda wall-buy.',
            'Hanging on the pillar nearest the bottom of the staircase.',
            'Hanging on the pillar closest to the window.',
          ] },
          { w: 40, name: 'Frame', area: 'In front of Lab B (outside)', spots: [
            'On a tree on the hill facing the lab (big boulder and a lit lamp post lead up to it).',
            'On a tree at the water\'s edge on the path from Lab B toward the altar and spawn.',
            'On a tree in the far right corner in front of Lab B, below the one-way drop near the Trip Mine wall-buy.',
          ] },
          { w: 64, name: 'Visor', area: 'Anti-air platform', spots: [
            'By a window with a seed planter.',
            'Near the window in the machine-gun nest.',
            'Up the stairs on the right, in a pile of rubble.',
          ] },
        ],
        upgrade: {
          name: 'Electric Shield', summary: 'Shocks zombies, halves perk and GobbleGum prices while held, and powers three special consoles (the Lab A and Lab B cages and the zipline).',
          steps: [
            { t: 'Every player finishes all three Trials', needs: ['trials'] },
            { t: 'Hold the shield out at the skull altar until lightning strikes you' },
          ],
        },
        video: { id: 'FQ7SHBEsDig', title: 'All Shield Part Locations (Zetsubou No Shima)', ch: 'MrRoflWaffles', len: '1:52' },
      },
      {
        id: 'gas-mask', tab: 'parts', type: 'Buildable · Equipment', name: 'Gas Mask', img: I + 'gas-mask.webp',
        summary: 'Stops you coughing in orange spore clouds and lets you breathe longer underwater. Breaks after about 10 spore clouds. Required for the final step of the easter egg, and doesn\'t use your equipment slot.',
        facts: [['Parts', '3']],
        parts: [
          { w: 39, name: 'Strap', area: 'Crashed plane (Propeller Trap), between spawn and Lab A', spots: [
            'On metal rebar at the back entrance of the crashed plane.',
            'On metal rebar at the front entrance of the crashed plane.',
            'On a boulder just left of the Mystery Box spot, behind the Pharo wall-buy.',
          ] },
          { w: 6, name: 'Visor', area: 'Green pool behind Lab B', spots: [
            'On a wooden crate on the right-hand path as you come from under Lab B, next to a boulder.',
            'On a wooden crate right of the wheelbarrow, next to the giant meteorite.',
            'On a wooden crate against the railing next to the perk machine spot on the iron catwalk.',
          ] },
          { w: 71, name: 'Breathing Tube', area: 'Cleansing pedestal area by the Docks (reached from the bunker power room)', spots: [
            'On a boulder just left of the VMP wall-buy.',
            'On a wooden crate next to the pedestal in the middle of the area.',
            'On a wooden crate by the end of the zipline, before the metal floor plating.',
          ] },
        ],
        video: { id: 'JsTuAlJuQ2A', title: 'All Gas Mask Part Locations (Zetsubou No Shima)', ch: 'MrRoflWaffles', len: '2:09' },
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'kt4', tab: 'weapons', type: 'Wonder weapon', name: 'KT-4', img: I + 'kt4.webp', color: 'green',
        summary: 'Fires a venom that eats through zombies. Mix three ingredients at the KT-4 bench in the bunker; after that every player can roll it from the Mystery Box.',
        stepsTitle: 'Collect the three ingredients',
        steps: [
          { w: 122, any: 'Collect the three ingredients in any order', t: 'Vial: kill the glowing scientist zombie', needs: ['power-pap'], d: 'Once the bunker\'s main power is on, a scientist zombie glowing yellow-green can spawn — usually around or under Lab B. It drops a glowing vial.', imgs: [{ src: I + 'kt4-vial.webp', cap: 'Vial' }] },
          { w: 60, any: 'Collect the three ingredients in any order', t: 'Venom: catch a spider in the Lab A cage', d: 'With power in Lab A, lower the cage into the swamp; it opens and releases a purple mist. Lure a spider into it, then raise the cage. A syringe drains the spider\'s venom.', imgs: [{ src: I + 'kt4-venom.webp', cap: 'Venom' }], tip: 'Do it on the last spider of a spider round and the Max Ammo lands in the cage — lower it again to grab it.' },
          { w: 10, any: 'Collect the three ingredients in any order', t: 'Plant: swim to the end of the tunnel by Mule Kick', d: 'In the flooded bunker lab to the right of Mule Kick, swim to the very end of the raw Divinium tunnel. Use the air pockets and shoot spores for extra air on the way.', imgs: [{ src: I + 'kt4-plant.webp', cap: 'Plant' }] },
          { w: 170, t: 'Mix them at the KT-4 bench in the bunker', imgs: [{ src: I + 'kt4-parts.webp', cap: 'The three KT-4 ingredients' }] },
        ],
        upgrade: {
          name: 'Masamune', img: I + 'masamune.webp', summary: 'Much stronger chaining when charged. Required to fight the giant Thrasher.',
          steps: [
            { w: ['5zlqxnnUCQw', 334], any: 'Collect the three upgrade ingredients in any order', t: 'Divinium vial from the Lab B cage', needs: ['zombie-shield', 'trials'], d: 'With an electrified shield, melee the Lab B cage console to open it. Get in; the cage lowers into a hidden room under the swamp. A skeleton there holds a vial of liquid Divinium. Use the console to come back up.', note: 'Co-op: one player shocks the console to open it and again to lower the other player, then presses it to bring them back.', imgs: [{ src: I + 'divinium.webp', cap: 'Liquid Divinium vial' }] },
            { w: ['5zlqxnnUCQw', 62], any: 'Collect the three upgrade ingredients in any order', t: 'Fang from the giant spider', d: 'Behind the blue water pool near Lab A, a cave is covered in webs. Clear them with the KT-4, kill the giant spider inside, then interact with its body to pull out a fang.' },
            { w: ['5zlqxnnUCQw', 110], any: 'Collect the three upgrade ingredients in any order', t: 'Grow the rainbow plant', needs: ['skull', 'bucket'], d: 'Use the Skull\'s mesmerise on the torn blueprint on the wall across from the purple water in the Living Quarters. Then mesmerise the right-hand wall beside where you found the KT-4 plant underwater to reveal a hidden planter. Plant a seed and water it three rounds in a row with rainbow water.', tip: 'Rainbow water: take the Sewer Pipe from the back of the bunker toward Lab B (500 points). After you pass the second blue-lit section, press interact as the lump of Divinium on the right goes by. Start with an empty bucket.' },
            { w: ['5zlqxnnUCQw', 427], t: 'Process them at the second bench', d: 'On the back wall next to the KT-4 bench. You must be holding the KT-4 to use it.' },
          ],
        },
        videos: [
          { id: 'LXF6tgohM7s', title: 'How to get the KT-4', ch: 'MrRoflWaffles', len: '3:16' },
          { id: '5zlqxnnUCQw', title: 'Easy KT-4 Masamune Upgrade Guide', ch: 'MrRoflWaffles', len: '7:40' },
        ],
      },
      {
        id: 'skull', tab: 'weapons', type: 'Specialist weapon', name: 'Skull of Nan Sapwe', img: I + 'skull.webp', color: 'gold',
        summary: 'Its beam stuns and eventually vaporises zombies. Its "mesmerise" ability also reveals hidden walls and planters for quests.',
        stepsTitle: 'How to get it',
        steps: [
          { imgs: [{ src: I + 'skull-altar.webp', cap: 'The four skulls on the Trials altar' }], anyList: 'Skulls in any order', t: 'Cleanse the four bloody skulls', d: 'Take one skull at a time from the Trials altar to the pedestal with the matching symbol (pedestal symbols are random). Placing it starts a defence: green-glowing zombies go for the skull. Protect it until it\'s clean (+500 points each), then bring it back to the altar.', list: [
            'In front of spawn, next to the big central rock before the GobbleGum machine.',
            'By the Propeller Trap, nearest the lowest switch.',
            'Bunker docks area, left of the main power switch, among wooden crates.',
            'Bunker operations room, downstairs next to the KT-4 and Masamune benches.',
          ], warn: 'Spiders and Thrashers can join the later defences — they attack you, not the skull. If the skull breaks, it goes back to the altar next round.', tip: 'Enemies spawned here don\'t count toward the round, so leaving a crawler alive is safe.' },
          { t: 'Defend the Skull of Nan Sapwe from Keepers', d: 'With all four cleansed, stairs open in front of the altar. Grab the Skull: the room locks and Keepers attack. Kill them (20 in solo) to charge it.' },
        ],
      },
      {
        id: 'spider-bait', tab: 'weapons', type: 'Hidden wonder weapon', name: 'Spider Bait', img: I + 'spider-serum.webp', color: 'red',
        summary: 'Cocoons you and lets you control a spider for about 50 seconds while zombies chase it. Takes the Trip Mine slot. Fully optional.',
        steps: [
          { t: 'Prerequisites', needs: ['skull', 'trials', 'kt4'], d: 'Skull of Nan Sapwe with a full charge, all Trials finished (electric shield), and the Lab A cage already used for the KT-4 venom (leave it at ground level).' },
          { t: 'Find the red-mist spider', d: 'On your second spider round or later, use the Skull\'s mesmerise on the spiders until one emits red mist (characters comment on it). Keep it alive; killing the others makes this easier.' },
          { anyList: 'Waters in any order', t: 'Let it drink all three waters', d: 'Lead it to the blue (Lab A), green (behind Lab B) and purple (Living Quarters) pools. Any order.', warn: 'Wall spores kill it instantly — watch the bunker entrance and the Living Quarters entrance.' },
          { t: 'Catch it in the Lab A cage and supercharge the console', d: 'Raise the cage into Lab A, melee the console with the electric shield, then lower the cage again so it goes fully underground.' },
          { t: 'Survive the next spider round', d: 'Every spider has red mist and is more aggressive.' },
          { t: 'Raise the cage and take the Spider Bait', d: 'The spider is now a cocoon. Extract the venom; everyone can pick up Spider Bait from the machine.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Seeds of Doubt', short: 'Main EE',
        summary: 'Repair a hidden elevator with three cogs, ride it down beneath the bunker and kill the giant Thrasher.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'All perks, achievement, Gateworm icon, 5,000 XP'],
          ['Must-have GobbleGum', 'Anywhere But Here!'],
        ],
        prep: [
          { t: 'Skull of Nan Sapwe', needs: ['skull'] },
          { t: 'At least one Anywhere But Here! GobbleGum', d: 'Have it in your GobbleGum pack.' },
          { t: 'KT-4 upgraded to the Masamune (at least one player)', needs: ['kt4'] },
          { t: 'Gas Mask for every player', needs: ['gas-mask'] },
          { t: 'Electrified Zombie Shield (needs all Trials done)', needs: ['zombie-shield', 'trials'] },
          { t: 'A bucket and at least two seeds (three or more is safer)', needs: ['bucket', 'seeds'] },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { w: 122, t: 'Reveal the blueprint and the elevator generator', needs: ['skull'], d: 'In the bunker Living Quarters, mesmerise the torn paper on the wall across from the purple water to reveal the rest of it. Then go to the elevator across from the door to the anti-air platform and mesmerise the wall just left of it, in the corner. It opens on a broken generator missing three cogs.' },
          { w: 247, any: 'Collect the three cogs in any order', t: 'Cog 1: Anywhere But Here!', d: 'After the generator is revealed, chew Anywhere But Here!. It sends you into a secret room above Lab A with a cog on the floor. Leave through the hole in the wall.' },
          { w: 264, any: 'Collect the three cogs in any order', t: 'Cog 2: shoot down the cargo plane', needs: ['seeds', 'kt4', 'bucket'], d: 'Plant seeds and, for three rounds, water them blue and shoot them with the KT-4. A grown pod may give a FlaK shell. Load it into the back of the FlaK 88 on the anti-air platform. When the cargo plane (every 2–2½ minutes) lines up with the barrel, hold interact to fire. Watch where the smoke trail lands — the cog is at one of these spots, glowing with smoke:', list: [
            'Outside the bunker entrance by the big tree, between the seed planter and the Bowie Knife.',
            'By the back staircase up to the zipline near Lab A.',
            'By the meteorite behind Lab B, near the wheelbarrow and green pool.',
          ], warn: 'The shell isn\'t guaranteed and a miss means growing another. Grow three at once.' },
          { w: 341, any: 'Collect the three cogs in any order', t: 'Cog 3: drop off the zipline', needs: ['zombie-shield'], d: 'The cog is on the small dock under the zipline between Lab A and the Docks.', list: [
            '**Solo:** with the electric shield, melee the zipline console, ride the zipline, and drop off over the dock (press melee; some players pull back on the left stick instead).',
            '**Co-op:** one player rides; the shield player shocks the console while they\'re over the dock to drop them.',
          ], tip: 'Start from the Docks looking up toward Lab A — you\'re over the dock almost immediately and avoid the big death drop.' },
          { w: 434, t: 'Repair the elevator', d: 'Put the three cogs in the generator behind the elevator.' },
          { w: 481, t: 'Ride down and clear the vines', needs: ['gas-mask', 'kt4'], d: 'Everyone wears a gas mask (without one you will go down). Ride the elevator. The Masamune player shoots the glowing part of the three vines blocking the hall to the door at the end.', tip: 'Bring a fresh electric shield, In Plain Sight or Self Medication, and Spider Bait if you have it.' },
          { w: 497, t: 'Kill the giant Thrasher', needs: ['kt4'], d: 'The Masamune player shoots the spore on one of the giant Thrasher\'s arms to start. Zombies, spiders and Thrashers pour in; survive until another spore appears, shoot it with the Masamune, and repeat for all four. The timing is fixed, so it takes several minutes no matter what.' },
          { t: 'Ride the elevator back up', d: 'After the cutscene everyone has every perk (they don\'t add slots and are lost if you go down). Enemies spawn in the arena, so head back up.' },
        ],
        video: { id: 'p4jDXip1v1A', title: 'Zetsubou No Shima Easter Egg Guide — Full Walkthrough', ch: 'MrDalekJD', len: '12:52' },
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song-dead-flowers', tab: 'side', type: 'Song', name: '"Dead Flowers"',
        summary: 'Hold interact on three sock monkeys.',
        spots: [
          'On a power generator, left of a perk machine by the blue 115 water.',
          'Top floor of Lab B, on a table left of a floodlight, in front of zombie diagrams.',
          'On a table in the bunker, right of the KT-4 bench and left of the Masamune bench.',
        ],
      },
      {
        id: 'golden-bucket', tab: 'side', type: 'Upgrade', name: 'Golden Bucket', color: 'gold',
        summary: 'Never runs out of water and lets you switch between blue, green and purple (sprint + melee).',
        steps: [
          { anyList: 'Plants in any order', t: 'Grow one of each plant', needs: ['skull', 'seeds'], list: [
            'One with no water at all.',
            'One watered blue three rounds.',
            'One watered green three rounds.',
            'One watered purple three rounds.',
            'One fruit plant (blue, green, purple once each).',
          ] },
          { t: 'Reveal the bucket planter under Lab B', d: 'Mesmerise the blueprint in the Living Quarters (if not already done). Under the main part of Lab B, face the wall opposite the wall spore and mesmerise the vines. A special planter appears.' },
          { t: 'Feed the three lure plants', d: 'Put your bucket in the planter. Three more planters appear: plant a seed in each. They grow instantly into lure plants — let them eat zombies until they sink back into the ground.' },
          { t: 'Open the bucket plant', d: 'It only ever gives the Golden Bucket, and stays available for the rest of the game.' },
        ],
      },
    ],
  });
})();
