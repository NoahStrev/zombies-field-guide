/* Attack of the Radioactive Thing — Infinite Warfare DLC 3 (Absolution) */
(() => {
  const I = 'assets/img/iw/radioactive/';
  const A = '0KMioQ-3d_k'; // MrDalekJD easter egg guide
  const P = 'YfII5RgMLRI'; // MrDalekJD Pack-a-Punch guide
  const M = 'Z3HFB1-7TXs'; // MrDalekJD MAD upgrade guide
  const AV = { id: A, title: 'Attack of the Radioactive Thing full easter egg guide', ch: 'MrDalekJD', len: '29:50' };
  ZG.addMap({
    game: 'iw', id: 'attack-of-the-radioactive-thing', order: 4,
    name: 'Attack of the Radioactive Thing', dlc: 'Absolution · DLC 3', eeName: 'Soul-Less',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Modular Atomic Disintegrator', 'Chemistry puzzle', 'Elvira'],
    blurb: 'A black-and-white 1950s beach town hosted by Elvira. Bring a zombie back to life for a key, brew the right chemical compound, and nuke the giant Radioactive Thing for the fourth piece of the Soul Key.',
    quick: [
      ['Main EE', 'Soul-Less'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapon', 'Modular Atomic Disintegrator (M.A.D.)'],
      ['Key items', 'Crowbar, Cleaver, Elvira\'s vial, zombie body parts'],
    ],
    intro: {
      start: 'The power handle is on the beach. Pack-a-Punch needs Elvira\'s spell book and a vial filled with Cleaver kills. Get the Crowbar early: half the map\'s secrets need it.',
      parts: 'The Seismic Wave Generator is needed for one of the zombie arms.',
      weapons: 'The M.A.D. comes from the Magic Wheel; its three upgrade parts are behind panels you crowbar open.',
      'easter-egg': 'The hardest IW quest: lots of fetching, a typewriter code, a colour filter, and maths with chalkboard numbers. Pick your compound below to get the recipe. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Take the power handle from the beach to the Power Station. Then bring Elvira her spell book, fill her vial with Cleaver kills, and lead her to a blue portal to open Pack-a-Punch.',
        video: { id: P, title: 'How to Pack-a-Punch on Attack of the Radioactive Thing', ch: 'MrDalekJD', len: '2:37' },
        steps: [
          { t: 'Turn on the power', d: 'A zombie arm sticking out of the sand on the beach holds the power handle. Take it to the switch in the Power Station.' },
          { w: 32, t: 'Talk to Elvira in the TV studio, then fetch her spell book', d: 'After the power is on, a wall panel opens in the diner (by the Ghosts \'n Skulls machine) with the book inside. Give it to her and she hands you an empty vial.', imgs: [{ src: I + 'elvira.webp', cap: 'Elvira' }] },
          { w: 48, t: 'Fill the vial with Cleaver kills', d: 'The Cleaver is in the Beachside Market by the freezer. Melee zombies with it (the glowing radioactive soldiers count); check the vial with the inventory button. About 5–10 kills.', needs: ['cleaver'] },
          { w: 98, t: 'Give Elvira the vial and lead her to a blue portal', d: 'She gets off her couch and fights with you. Walk her to the portal (one is right outside her studio by the Magic Wheel; others are by the trailer park campfire and the diner). She opens it to the projection room. Pack-a-Punch costs 5,000.' },
          { w: 113, t: 'Later visits: look for lightning in the sky', d: 'The portal moves each time you use Pack-a-Punch. A small bolt of lightning every few seconds marks where it is now.' },
        ],
      },
      {
        id: 'crowbar', tab: 'start', type: 'Key tool', name: 'Crowbar', color: 'gold',
        summary: 'A melee weapon that opens panels, knocks off mirrors and sets gauges. Build it from the blueprint in the small motel room behind Bombstoppers (by the pool).',
        video: AV,
        steps: [{ w: 292, t: 'Pick up the Crowbar in the motel room behind Bombstoppers' }],
      },
      {
        id: 'cleaver', tab: 'start', type: 'Key tool', name: 'Cleaver', color: 'red',
        summary: 'A melee weapon in the Beachside Market, next to the freezer. Kills with it fill Elvira\'s vial.',
        video: AV,
        steps: [{ w: 124, t: 'Take the Cleaver from the stand by the market freezer' }],
      },
      {
        id: 'double-pap', tab: 'start', type: 'Upgrade', name: 'Double Pack-a-Punch (Alien Fuses)', short: 'Double PaP',
        summary: 'The fuses don\'t carry over. Find them in the hidden RV, charge them with the Power Station trap and install them.',
        steps: [
          { t: 'Press the button in the projection room, then leave', d: 'You come out inside an RV in the trailer park. Crowbar the shelf to take the Alien Fuses.', needs: ['crowbar'] },
          { t: 'Fill Elvira\'s vial again with Cleaver kills', needs: ['cleaver'] },
          { t: 'Charge the fuses in the Power Station', d: 'Put them down by the entrance closest to the Magic Wheel, run the Power Station\'s electric trap, then pick them up.' },
          { t: 'Install them in Pack-a-Punch', d: 'Second upgrades now cost 10,000.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'seismic', tab: 'parts', type: 'Buildable', name: 'Seismic Wave Generator', color: 'storm',
        summary: 'Three parts and a bench in the diner area. Keep one: the easter egg uses it to dig up a zombie arm on the beach.',
        facts: [['Parts', '3'], ['Build at', 'The bench in the diner']],
        video: AV,
        steps: [{ w: 77, t: 'Pick up the blueprint and all three parts, then build it', d: 'Two parts are around the diner / ice cream parlour; the third is by the portable toilets under the drive-in screen.' }],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'mad', tab: 'weapons', type: 'Wonder weapon', name: 'Modular Atomic Disintegrator (M.A.D.)', short: 'M.A.D.', img: I + 'mad-upgraded.webp', color: 'green',
        summary: 'An atomic blaster from the Magic Wheel. Crowbar three panels for its parts: a crank (charged shot that clears a horde), a grip (full-auto) and a plunger (refill it at the green Crog eggs).',
        facts: [['Get it', 'Magic Wheel only'], ['Ammo', 'Refills from radioactive eggs once the plunger is on'], ['Pack-a-Punch', 'No']],
        video: { id: M, title: 'M.A.D. upgrade guide', ch: 'MrDalekJD', len: '2:50' },
        steps: [
          { w: 32, t: 'Get the M.A.D. from the Magic Wheel', imgs: [{ src: I + 'mad.webp', cap: 'The M.A.D. on the Magic Wheel' }] },
          { w: 47, t: 'Get the Crowbar', needs: ['crowbar'] },
          { w: 62, anyList: 'Panels in any order', t: 'Crowbar the three panels', list: [
            'Grip: trailer park, next to the men\'s restroom (by a shopping cart).',
            'Plunger: behind the gas station, beside a portrait of Willard.',
            'Crank: the control panel outside Elvira\'s TV studio, by the Magic Wheel spot.',
          ] },
          { w: 127, t: 'Refill it at the green eggs', d: 'Walk up to a radioactive egg and hold interact. Each egg needs a few rounds to recharge.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Soul-Less', short: 'Main EE',
        summary: 'Build a zombie from parts and bring it back to life to get a garage key, build a chemistry station, collect bomb parts and nuclear codes, work out your colour and numbers, brew the compound the radio asks for, and deliver the bomb into the Radioactive Thing.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Fourth piece of the Soul Key and achievement (plus Belly of the Beast if you enter the code first try)'],
          ['Hardest part', 'The typewriter codes and the chemistry maths'],
        ],
        prep: [
          { t: 'Power on and Pack-a-Punch open (Elvira summoned)', needs: ['power-pap'] },
          { t: 'Seismic Wave Generator', needs: ['seismic'] },
          { t: 'Crowbar and Cleaver', needs: ['crowbar', 'cleaver'] },
          { t: 'Pen and paper, or your phone\'s camera', d: 'You\'ll note a code, two symbol numbers and the chalkboard diamonds.' },
        ],
        stepsTitle: 'Quest steps',
        video: AV,
        steps: [
          { w: 169, any: 'Body parts in any order', t: 'Leg: blow it out of the tree', d: 'On the tree by the door from the Racin\' Stripes area towards the TV studio. Use an explosive.' },
          { w: 188, any: 'Body parts in any order', t: 'Leg: kill the first radioactive soldier zombie', d: 'The first one killed in the game drops it. Make sure someone picks it up.' },
          { w: 215, any: 'Body parts in any order', t: 'Arm: dig it up on the beach with the Seismic Wave Generator', d: 'Place it on the patch where the power handle\'s hand was; the arm slowly rises out of the sand.', needs: ['seismic'] },
          { w: 237, any: 'Body parts in any order', t: 'Arm: in a fire pit in the trailer park' },
          { w: 272, any: 'Body parts in any order', t: 'Head: inside the hidden RV', d: 'Press the button on the wall of the projection room; you come out inside an RV with the head.' },
          { w: 307, any: 'Body parts in any order', t: 'Torso: freeze the pig in the market freezer', d: 'Take the power box from the crates by the gas station to the freezer trap in the Beachside Market, fit it and run the trap (750). Then crowbar the pig carcass in front of the glowing torso.', needs: ['crowbar'] },
          { w: 286, any: 'Mirrors in any order', t: 'Elvira\'s mirror', d: 'On her couch, while she\'s out fighting after you gave her the vial.' },
          { w: 352, any: 'Mirrors in any order', t: 'Car mirror', d: 'Crowbar the bent wing mirror on the crashed car outside the market.' },
          { w: 366, any: 'Mirrors in any order', t: 'Mirror shard', d: 'Crowbar the mirror in the trailer park restrooms.' },
          { w: 381, t: 'Set up the spawn tent', d: 'Lay the three mirrors out (table by the gurney, wooden crates, ammo crates), put the body parts on the green gurney, and fit the punch card into the typewriter. The punch card is on the desk next to the Skullhop machine in the diner / ice cream parlour.' },
          { w: 400, t: 'Type the code and zap the body, then type it backwards for the key', d: 'Use the typewriter: a light runs across ten dots (digits 0–9); press when it\'s on the digit you want. The code is five digits made of 3, 4, 5, 6 and 8, in the order of the Extinction film reels in the TV studio (opposite the colour console): left two, the one on the floor, then the right two. Fire the ray next to the typewriter: the body becomes a zombie. Enter the same code backwards and fire again: it becomes a key.', table: { head: ['Film reel', 'Digit'], rows: [['Mayday', '3'], ['Awakening', '4'], ['Point of Contact', '5'], ['Nightfall', '6'], ['Exodus (always last)', '8']] }, tip: 'Keep a zombie alive far from spawn while you do this: getting hit kicks you out of the typewriter.' },
          { w: 508, anyList: 'Bomb parts in any order', t: 'Collect three bomb parts', list: [
            'Under the crashed red car between the motel and the TV studio (go prone).',
            'Behind a gate on the path from Racin\' Stripes to the TV studio.',
            'At the end of the stream under the bridge, on the beach.',
          ] },
          { w: 540, t: 'Get the nuclear codes from the market safe', d: 'Read the four-digit number on the blue note under the desk in the market\'s back office. Crowbar each of the four pressure gauges so its needle stops on a digit; the guide sets them in the code\'s order: power station (behind a shack), next to Quickies, the motel room with the Crowbar, behind the gas station. The safe in the back office opens: take the codes and write them down.', needs: ['crowbar'] },
          { w: 631, anyList: 'Parts in any order', t: 'Build the chemistry station in the gas station garage', list: [
            'On the couch in the market\'s back office.',
            'On a bench in the trailer park, next to an open RV.',
            'On a bench on the hill from the beach up to the trailer park.',
          ], d: 'Open the garage with the key and build the station on the table inside. Pick up Elvira\'s spell book pages in there too.' },
          { w: 697, t: 'Find your O number', d: 'Four signs read "O = a number": on the gas station door, above the fridge in the market\'s back office, inside the hidden RV, and under the concrete bridge. Change the map colour at the console in Elvira\'s studio. The sign whose equals sign never gets a slash through it, in red, green or blue, is the real one.' },
          { w: 807, t: 'Find your M number and pick the colour', d: 'A number above an M-like symbol is in the motel office, above a couch with a radio. Multiply O × M. Elvira\'s TV shows which colour each range of numbers needs (in the guide\'s game: under 53 blue, 53–55 red, over 55 green). Switch the map to that colour and leave it there.' },
          { w: 902, t: 'Note the ingredient values on the six chalkboards', d: 'Boards: spawn, the beach, the trailer park, outside the TV studio, the garage, and the hill path behind the market. Each ingredient has a diamond of numbers: its value is the **top number plus the left number**. They only read right in your colour.' },
          { w: 1000, t: 'Listen to the radios for the compound Dr. Bright wants', d: 'Radios: the motel office, the power station, behind the gas station, on the beach towards the trailer park, and a chair in Elvira\'s studio. Some need a battery (dropped by zombies with backpacks). Only the compound he says will destroy the Radioactive Thing matters.' },
          { w: 1203, t: 'Brew it at the chemistry station', d: 'Put the ingredients for one mix on the station, enter (sum of their values) − your O number, and start the reaction. Work up through the chain:', lookup: {
            a: 'Compound Dr. Bright asked for',
            options: ['1,3,5-Tetra-Nitra-Phenol', '3-Methyl-2,4-Di-Nitrobenzene', '3,4-Di-Nitroxy-Methyl-Propane', 'Octa-Hydro-2,5-Nitro-3,4,7-Para-Zocine'],
            hint: 'Pick the compound to see every mix you need, in order.',
            answers: {
              '1,3,5-Tetra-Nitra-Phenol': ['**Phenol** = Motor Oil + Insect Repellent + Wheel Cleaner', '**Phenolsulfonic Acid** = Phenol + Drain Opener', '**1,3,5-Tetra-Nitra-Phenol** = Phenolsulfonic Acid + Detergent'],
              '3-Methyl-2,4-Di-Nitrobenzene': ['**Methylbenzene** = Paint + Drain Opener + Detergent', '**Dinitro** = Methylbenzene + Baking Soda + Vinegar + Detergent', '**3-Methyl-2,4-Di-Nitrobenzene** = Dinitro + Racing Fuel'],
              '3,4-Di-Nitroxy-Methyl-Propane': ['**Acetaldehyde** = Vodka + Pennies', '**Formaldehyde** = Quarters + Racing Fuel', '**Aldehyde Sludge** = Acetaldehyde + Formaldehyde + Detergent', '**3,4-Di-Nitroxy-Methyl-Propane** = Aldehyde Sludge + Nail Polish Remover'],
              'Octa-Hydro-2,5-Nitro-3,4,7-Para-Zocine': ['**Formaldehyde** = Quarters + Racing Fuel', '**Hexamine** = Formaldehyde + Glass Cleaner', '**Octa-Hydro-2,5-Nitro-3,4,7-Para-Zocine** = Hexamine + Vinegar + Plant Food + Detergent'],
            },
            endNote: 'Compounds you make have their own diamonds on the chalkboards. Use those values in the next mix.',
            source: 'Recipes from the Call of Duty Wiki.',
          }, table: { head: ['Ingredient', 'Where'], rows: [
            ['Vodka, Detergent, Wheel Cleaner, Glass Cleaner, Baking Soda', 'Inside the Beachside Market'],
            ['Vinegar', 'Market back office, on the table by the couch'],
            ['Pennies', 'Crowbar the till in the market'],
            ['Quarters', 'Crowbar the phone booth by the gas station'],
            ['Racing Fuel', 'Outside the gas station'],
            ['Motor Oil', 'Inside the garage'],
            ['Paint', 'Next to Racin\' Stripes'],
            ['Plant Food', 'Next to Quickies'],
            ['Nail Polish Remover', 'Motel office'],
            ['Drain Opener', 'Trailer park restrooms'],
            ['Insect Repellent', 'Spawn tent'],
          ] } },
          { w: 1405, t: 'Load the bomb and get ready', d: 'Put the three bomb parts and your compound into the bomb in the garage. Then build up: points, perks, Pack-a-Punched (ideally double) weapons, Fate & Fortune cards that keep your perks or revive you.', needs: ['double-pap'] },
          { w: 1435, t: 'Everyone interacts with the bomb to start the fight' },
          { w: 1450, t: 'Escort the bomb down the beach', d: 'Stand next to it and it rolls towards the Radioactive Thing. Shoot the Crog eggs it spits out before they hatch.' },
          { w: 1514, t: 'Hit the glowing chest spot with the Death Ray cannons', d: 'Cannons: one in each corner of the cliffs, one on the beach and one on the bridge. Fire when the green spot on its chest shows; it twists to block some cannons, so switch.' },
          { w: 1577, t: 'Everyone interacts with the bomb by the shore, then fall back', d: 'Retreat to the back of the beach under the bridge while acid covers the sand and Crogs attack.' },
          { w: 1623, t: 'Run the laser maze and reach the bomb before the timer ends', d: 'Crouch under the first laser, then jump and slide through. The right-hand path is easiest. Everyone must interact with the bomb in time.' },
          { w: 1638, t: 'Inside the Radioactive Thing, enter the nuclear codes', d: 'Same as the typewriter. Get it right and the ending plays; get it wrong and you redo the acid and laser part.' },
        ],
      },
    ],
  });
})();
