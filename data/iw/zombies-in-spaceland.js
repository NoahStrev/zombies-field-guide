/* Zombies in Spaceland — Infinite Warfare launch map */
(() => {
  const I = 'assets/img/iw/zis/';
  const E = 'yOvdkLUxXLQ'; // MrRoflWaffles easter egg guide
  const P = 'ZYpdUVBHaKc'; // MrRoflWaffles Pack-a-Punch guide
  const W = 'xAAVFbecdK8'; // CodeNamePizza Weapons of Rock parts
  const G = 'gBiyqfnfzXk'; // Pack A Puncher map walkthrough
  const EV = { id: E, title: 'Ultimate Zombies in Spaceland easter egg guide', ch: 'MrRoflWaffles', len: '21:58' };
  const WV = { id: W, title: 'Zombies in Spaceland: all Weapons of Rock parts', ch: 'CodeNamePizza', len: '10:13' };
  ZG.addMap({
    game: 'iw', id: 'zombies-in-spaceland', order: 1,
    name: 'Zombies in Spaceland', dlc: 'Base game', eeName: 'Sooooul Key',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Weapons of Rock', 'Seti-Com', 'Alien boss'],
    blurb: 'An 80s theme park. Link the four portals to reach Pack-a-Punch, build the Seti-Com with David Hasselhoff, then beat the alien and blow up the UFO for the first piece of the Soul Key.',
    quick: [
      ['Main EE', 'Sooooul Key'],
      ['Players', 'Solo or co-op (easier with 1–2)'],
      ['Wonder weapons', 'Dischord, Face Melter, Head Cutter, Shredder, Forge Freeze'],
      ['Key items', 'Seti-Com, Arcane Core, golden teeth'],
    ],
    intro: {
      start: 'Each area has its own power switch and portal. Link all four portals to open Pack-a-Punch, and free the UFO toys while you\'re in there. New to Infinite Warfare zombies? Read the basics first.',
      parts: 'The Seti-Com is the only part hunt the easter egg needs. Its three pieces each have three spots.',
      weapons: 'You need at least one Weapon of Rock for the last step of the easter egg. All four share the same three kinds of part: a battery, a souvenir toy and a crystal.',
      'easter-egg': 'Short on steps but the alien fight is long. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'iw-basics', tab: 'start', type: 'Primer', name: 'Infinite Warfare zombies basics', short: 'IW basics',
        summary: 'Infinite Warfare renames almost everything. Here is what each thing does if you know the Treyarch maps.',
        blocks: [
          { table: { head: ['Infinite Warfare', 'Works like'], rows: [
            ['Up \'N Atoms', 'Quick Revive (500 in solo, 1,500 in co-op)'],
            ['Tuff \'Nuff', 'Juggernog'],
            ['Racin\' Stripes', 'Stamin-Up'],
            ['Quickies', 'Speed Cola'],
            ['Bang Bangs', 'Double Tap'],
            ['Bombstoppers', 'PhD Flopper (no explosive damage)'],
            ['Blue Bolts', 'Electric Cherry'],
            ['Mule Munchies', 'Mule Kick'],
            ['Magic Wheel', 'Mystery Box'],
            ['Fate & Fortune cards', 'GobbleGums (pick a deck before the match, refill at a Fortune Teller)'],
          ] } },
          { list: [
            'Bleed out and you end up in the **Afterlife Arcade**, from where you get back into the game. Buy your guns back from the **Lost and Found** in spawn for 2,000.',
            'Zombies drop **souvenir coins** (green, blue, red). Three coins in a souvenir machine give a prize.',
            'Arcade games, rides and traps give **tickets**. Spend them at prize counters: the Arcane Core (300), the golden teeth (300), Cryo Grenades (350) and the Forge Freeze (500).',
            'Pack-a-Punch costs 5,000. A second upgrade (10,000) needs the **Alien Fuses** from the easter egg.',
          ] },
        ],
      },
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn on the spawn power, then in each of the four areas flip its power switch, hit the control box by its portal and go through. When all four lights above the central portal are on, it takes you to Pack-a-Punch.',
        video: { id: P, title: 'Zombies in Spaceland Pack-a-Punch guide', ch: 'MrRoflWaffles', len: '3:52' },
        steps: [
          { w: [G, 60], t: 'Turn on the power in spawn', d: 'The switch is in the back room on your left. The barriers out of spawn only drop after this.' },
          { w: 31, any: 'Areas in any order', t: 'Kepler System: power switch, control box, portal', d: 'Flip the area\'s power switch, hit the control box next to its portal, then step through. A light turns on above the central portal in Cosmic Way.' },
          { w: 63, any: 'Areas in any order', t: 'Journey into Space: same again', d: 'The portal is in the second area, by Tuff \'Nuff.' },
          { w: 94, any: 'Areas in any order', t: 'Astrocade: same again' },
          { w: 110, any: 'Areas in any order', t: 'Polar Peak: same again', d: 'The switch is at the very top, up the second slope behind a door. The portal is back down in the gift shop.' },
          { w: 141, t: 'Use the central portal to reach the projection room', d: 'Pack-a-Punch costs 5,000. You get 30 seconds in the room, then the portal shuts for a while.' },
          { w: [E, 158], t: 'Release the UFO toys while you\'re in there', d: 'Hold interact on the table of four UFO toys in the left corner. They fly out over four traps. The crystals and the easter egg both need this.' },
        ],
        blocks: [{ imgs: [{ src: I + 'layout.webp', cap: 'Park map: Cosmic Way in the middle, with Journey into Space, Polar Peak and the Kepler System around it' }] }],
      },
      {
        id: 'elemental-cores', tab: 'start', type: 'Upgrade', name: 'Arcane Core & elemental crystals', short: 'Arcane Core',
        img: I + 'arcane-core.webp', color: 'aether',
        summary: 'The crystal for each Weapon of Rock comes from a UFO toy. Kill zombies with a trap to wake the UFO, fill it with souls using a gun that has an Arcane Core, then shoot the matching door in the alligator\'s crystal cabinet.',
        facts: [['Arcane Core', '300 tickets at any prize stand'], ['Needs', 'UFO toys released, crystal cabinet opened']],
        video: WV,
        steps: [
          { w: 121, t: 'Kill 20–30 zombies with one activation of a UFO\'s trap', d: 'The UFO glows and starts flying a bigger loop around the area.', table: { head: ['Trap', 'Area', 'Crystal', 'For'], rows: [
            ['Disco floor', 'Astrocade', 'Green', '{{dischord}}'],
            ['Star Mission (rocket)', 'Journey into Space, by Tuff \'Nuff', 'Blue', '{{face-melter}}'],
            ['Steel Dragon', 'Polar Peak', 'Yellow', '{{head-cutter}}'],
            ['Chromosphere', 'Kepler System, at the back', 'Red', '{{shredder}}'],
          ] } },
          { w: 135, t: 'Fill the UFO with souls using your Arcane Core gun', d: 'Buy an Arcane Core (300 tickets) and kill zombies under the UFO with only that gun. When it\'s full it drops a glowing orb: pick it up to add that element to the core.' },
          { w: 158, t: 'Shoot the matching door of the crystal cabinet', d: 'In the Kepler System alligator\'s mouth. Each door belongs to one element; the right one opens and you can take the crystal.', needs: ['crystal-cabinet'] },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'seti-com', tab: 'parts', type: 'Easter egg item', name: 'Seti-Com', img: I + 'seti-com.webp', color: 'gold',
        summary: 'Three parts, each with three spots. Once you have all three and Pack-a-Punch is open, David Hasselhoff builds it for you (see the easter egg).',
        facts: [['Parts', '3'], ['Built by', 'David Hasselhoff, at a DJ booth']],
        video: EV,
        parts: [
          { w: 206, name: 'Umbrella', area: 'Cosmic Way, Polar Peak or Journey into Space', spots: [
            'Cosmic Way: on a red bench right of the bottom of the slides, by the bridge to Polar Peak.',
            'Polar Peak: on the gift shop counter, right of the stairs up towards the power switch.',
            'Journey into Space: in a shadowy corner by the Star Mission trap switch nearest Tuff \'Nuff.',
          ] },
          { w: 235, name: 'Boom box', area: 'Cosmic Way, Kepler System or Underground', spots: [
            'Cosmic Way: on the lower bridge from spawn to the central portal, by a popcorn machine.',
            'Kepler System: on the counter of the bar (Moonlight Cafe), right of the area\'s power switch.',
            'Underground: on the counter in the coffee break room, left of Racin\' Stripes.',
          ] },
          { w: 257, name: 'Calculator', area: 'Cosmic Way, Kepler System or Astrocade', spots: [
            'Cosmic Way: on a bench in front of the central portal.',
            'Kepler System: on the side of a yellow picnic table on the balcony by the Chromosphere trap switch.',
            'Astrocade: on top of a blue bin on the raised upper floor, between two arcade machines.',
          ] },
        ],
      },
      {
        id: 'crystal-cabinet', tab: 'parts', type: 'Shared step', name: 'Crystal cabinet (golden teeth)', short: 'Crystal cabinet',
        summary: 'Every Weapon of Rock crystal sits in a cabinet inside the Kepler System alligator. Buy the golden teeth, get a Brute to break the alligator\'s real teeth, and fit the gold ones.',
        video: WV,
        steps: [
          { w: 143, t: 'Buy the golden teeth', d: '300 tickets at the Astrocade prize counter.' },
          { w: 158, t: 'Lure a Brute into the alligator\'s mouth as it snaps shut', d: 'The jaws close about three seconds after someone steps in. The Brute holds them open and breaks the teeth.' },
          { w: 174, t: 'Put the golden teeth in', d: 'A cabinet with four doors opens in the throat. Shoot a door with an elemental Arcane Core to get that crystal.', needs: ['elemental-cores'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'dischord', tab: 'weapons', type: 'Weapon of Rock', name: 'Dischord', img: I + 'dischord.webp', color: 'green',
        summary: 'Zombies it hits spin on their heads and kick anything that walks past. Built from a battery (shades targets), a disco ball toy and the green crystal.',
        facts: [['Build at', 'Cardboard cutout in the Astrocade, by the prize counter'], ['Upgraded', 'M.C. Pop Locker']],
        video: WV,
        steps: [
          { w: 315, any: 'Parts in any order', t: 'Battery: shoot five targets while wearing shades', d: 'Zombies sometimes drop a pair of shades. Put them on (black and white vision) and shoot any five of the red-and-grey targets. The battery appears in the middle of the Astrocade dance floor.', list: [
            'Cosmic Way: on the bush before the bridge (left); under the overhang above the left ATM; under the bridge to Polar Peak; in the mountain mouth the roller coaster comes out of.',
            'Astrocade: above the power switch; in a claw machine by the water race game; in the boarded window upstairs; behind the cardboard cutout opposite the prize counter; behind the prize counter; in the top-floor bin by the ball game.',
            'Behind the Astrocade: hanging from the far booth in the alley; behind the pile of cars in the bumper cars.',
            'On the track by a Yeti between the Astrocade and Polar Peak.',
          ] },
          { w: 378, any: 'Parts in any order', t: 'Toy: one coin of each colour in the alley machine', d: 'Put a green, a blue and a red souvenir coin into the souvenir machine in the alley outside the Astrocade (Blue Bolts end). The disco ball toy drops next to it.', imgs: [{ src: I + 'disco-ball.webp', cap: 'Disco ball toy' }] },
          { w: 409, any: 'Parts in any order', t: 'Green crystal: Disco floor UFO', d: 'Kill 20–30 zombies with one run of the Astrocade disco trap, fill the UFO with your Arcane Core gun, then shoot the green door of the crystal cabinet.', needs: ['elemental-cores', 'crystal-cabinet'] },
          { w: 424, t: 'Add the three parts to the cutout and take the Dischord' },
        ],
        upgrade: {
          name: 'M.C. Pop Locker', summary: 'The Pack-a-Punched Dischord. Weapons of Rock can only be upgraded once the Alien Fuses are in the machine.',
          steps: [{ w: [E, 1215], t: 'Pack-a-Punch it after the Alien Fuses are installed', d: '10,000 points. The fuses come from the alien boss in the easter egg.', needs: ['main-ee'] }],
        },
      },
      {
        id: 'face-melter', tab: 'weapons', type: 'Weapon of Rock', name: 'Face Melter', img: I + 'face-melter.webp', color: 'storm',
        summary: 'Launches zombies into the air like fireworks, with fire damage around them. Built from a battery (grenade hot potato), a rocket ship toy and the blue crystal.',
        facts: [['Build at', 'Cardboard cutout by Mule Munchies (Journey into Space)'], ['Upgraded', '4th of July']],
        video: WV,
        steps: [
          { w: 207, any: 'Parts in any order', t: 'Battery: grenade hot potato', d: 'With the Journey into Space portal linked, use it again and throw a grenade into it. It bounces back out blinking red: pick it up and throw it towards the central portal in Cosmic Way before it blows. Keep picking it up and throwing until you throw it into the central portal. The battery appears next to you.' },
          { w: 252, any: 'Parts in any order', t: 'Toy: three blue coins in the Journey into Space machine', d: 'The souvenir machine near the DJ booth, across from the door to the Underground. The rocket ship toy drops next to it.' },
          { w: 267, any: 'Parts in any order', t: 'Blue crystal: Star Mission UFO', d: 'Kill 20–30 zombies with one run of the rocket trap by Tuff \'Nuff, fill the UFO with your Arcane Core gun, then shoot the blue door of the crystal cabinet.', needs: ['elemental-cores', 'crystal-cabinet'] },
          { w: 283, t: 'Add the three parts to the cutout by Mule Munchies and take the Face Melter' },
        ],
        upgrade: {
          name: '4th of July', summary: 'The Pack-a-Punched Face Melter.',
          steps: [{ w: [E, 1215], t: 'Pack-a-Punch it after the Alien Fuses are installed', d: '10,000 points.', needs: ['main-ee'] }],
        },
      },
      {
        id: 'head-cutter', tab: 'weapons', type: 'Weapon of Rock', name: 'Head Cutter', img: I + 'head-cutter.webp', color: 'wind',
        summary: 'Makes zombies\' heads explode, hurting the zombies around them. Built from a battery (Yeti freeze headshots), a Yeti toy and the yellow crystal.',
        facts: [['Build at', 'Cardboard cutout by the Polar Peak portal'], ['Upgraded', 'Guillotine']],
        video: WV,
        steps: [
          { w: 63, any: 'Parts in any order', t: 'Battery: freeze zombies with the Yeti and headshot them', d: 'Buy Cryo Grenades (350 tickets, Astrocade) and throw one at the animatronic Yeti by the Polar Peak entrance. It breathes frost: lead zombies through it and get about 10 headshot kills on frozen ones. When it roars, take the battery from the Yeti statue by the portal in the gift shop.', imgs: [{ src: I + 'hc-battery.webp', cap: 'The battery on the Yeti' }] },
          { w: 99, any: 'Parts in any order', t: 'Toy: three green coins in the Polar Peak machine', d: 'The souvenir machine in the gift shop. The Yeti toy drops next to it.', imgs: [{ src: I + 'yeti-toy.webp', cap: 'Yeti toy' }] },
          { w: 121, any: 'Parts in any order', t: 'Yellow crystal: Steel Dragon UFO', d: 'Kill 20–30 zombies with one run of the Polar Peak trap, fill the UFO with your Arcane Core gun, then shoot the yellow (leftmost) door of the crystal cabinet.', needs: ['elemental-cores', 'crystal-cabinet'] },
          { w: 190, t: 'Add the three parts to the cutout by the Polar Peak portal and take the Head Cutter' },
        ],
        upgrade: {
          name: 'Guillotine', summary: 'The Pack-a-Punched Head Cutter.',
          steps: [{ w: [E, 1215], t: 'Pack-a-Punch it after the Alien Fuses are installed', d: '10,000 points.', needs: ['main-ee'] }],
        },
      },
      {
        id: 'shredder', tab: 'weapons', type: 'Weapon of Rock', name: 'Shredder', img: I + 'shredder.webp', color: 'red',
        summary: 'Freezes groups of zombies and disintegrates them. The guide\'s pick for the alien fight. Built from a battery (log flume), an alien toy and the red crystal.',
        facts: [['Build at', 'Cardboard cutout in the Underground, by the Banshee'], ['Upgraded', 'Meat Grinder']],
        video: WV,
        steps: [
          { w: 456, any: 'Parts in any order', t: 'Battery: shoot it off the log flume', d: 'At the fountains between Polar Peak and the Kepler System, shoot the back of a passing flume boat (centre seam). The battery drops into the water and pops up in one of the four straight fountains; it moves between them. Grab it while it\'s in a water jet (a red flash shows where).' },
          { w: 487, any: 'Parts in any order', t: 'Toy: three red coins in the Kepler System machine', d: 'The souvenir machine behind the 1,250 barrier into the snack bar. The alien toy drops next to it.' },
          { w: 503, any: 'Parts in any order', t: 'Red crystal: Chromosphere UFO', d: 'Kill 20–30 zombies with one run of the Chromosphere trap at the back of the Kepler System, fill the UFO with your Arcane Core gun, then shoot the red door of the crystal cabinet.', needs: ['elemental-cores', 'crystal-cabinet'] },
          { w: 534, t: 'Add the three parts to the cutout in the Underground and take the Shredder' },
        ],
        upgrade: {
          name: 'Meat Grinder', summary: 'The Pack-a-Punched Shredder.',
          steps: [{ w: [E, 1215], t: 'Pack-a-Punch it after the Alien Fuses are installed', d: '10,000 points.', needs: ['main-ee'] }],
        },
      },
      {
        id: 'forge-freeze', tab: 'weapons', type: 'Wonder weapon', name: 'Forge Freeze', img: I + 'forge-freeze.webp', color: 'ice',
        summary: 'An ice gun that freezes zombies solid. No quest: buy it with 500 tickets at the Astrocade prize counter. Not needed for the easter egg.',
        facts: [['Cost', '500 tickets'], ['Where', 'Astrocade prize counter']],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Sooooul Key', short: 'Main EE',
        summary: 'Have David Hasselhoff build the Seti-Com, defend it three times, place his speakers around the central portal, beat the UFO\'s colour game and the alien, then use an upgraded Weapon of Rock to blow up the UFO.',
        facts: [
          ['Players', '1–4 (solo works; harder with more players)'],
          ['Reward', 'First piece of the Soul Key, achievement, and double Pack-a-Punch for the rest of the game'],
          ['Hardest part', 'The alien fight (30 minutes or more)'],
        ],
        prep: [
          { t: 'Pack-a-Punch open and the UFO toys released', needs: ['power-pap'] },
          { t: 'All three Seti-Com parts', needs: ['seti-com'] },
          { t: 'At least one Weapon of Rock built', needs: ['shredder', 'dischord', 'face-melter', 'head-cutter'], d: 'The guide prefers the Shredder for the alien.' },
          { t: 'Keep the starting Kendall and Pack-a-Punch it, and buy Bombstoppers', d: 'Its explosive rounds are great for the Seti-Com defences. Swap it out afterwards.' },
          { t: 'Fate & Fortune cards that help you defend and survive', d: 'Cards that help you hold a spot for the defences, and cards that protect your perks or revive you for the boss.' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 285, t: 'Go to the next round holding the parts', d: 'With Pack-a-Punch open and all three parts on you, finish a round. The UFO stuck in the side of Polar Peak starts honking and lighting up.' },
          { w: 335, t: 'Get the Seti-Com from David Hasselhoff', d: 'Find him at a DJ booth (entrance of Journey into Space, end of Polar Peak, or the Kepler System) and talk to him.', imgs: [{ src: I + 'seti-com.webp', cap: 'The Seti-Com' }] },
          { w: 351, t: 'Find this round\'s Seti-Com spot', d: 'Carry it around until your screen shakes and you get a prompt to place it. Possible spots (with the guide\'s difficulty):', list: [
            'Outside Polar Peak (easy).',
            'Inside the Polar Peak gift shop (medium; use the Steel Dragon trap).',
            'At the fountains past Polar Peak (hard; put it on the pink water jet, which kills zombies attacking it).',
            'Kepler System (medium; keep tripping the alligator\'s jaws).',
            'Journey into Space (hard).',
            'Underground, in front of Racin\' Stripes (easiest).',
            'Next to the bumper cars (medium).',
          ] },
          { w: 537, t: 'Defend it, once per round, three times', d: 'The timer runs 60 seconds, then 90, then 2 minutes. A win drops a Max Ammo; the next spot only shows up next round.', warn: 'If zombies destroy it, a Brute spawns and you go back to the Hoff for a new one.' },
          { w: 585, t: 'Wait two rounds, then get four speakers from the Hoff' },
          { w: 603, t: 'Place the speakers on the gold circles around the central portal', d: 'Three circles around it and one right in front of the portal.' },
          { w: 635, t: 'Get ready before you start the colour game', d: 'Refill your Fate & Fortune deck, keep enough points for the Lost and Found, carry a Repulsor, have all your perks and guns you\'re happy to use for a long fight.' },
          { w: 697, t: 'Match the UFO\'s colours three times', d: 'Hold interact on a speaker (in co-op, everyone holds one at the same time). Each speaker gets a fixed colour; note which is where. The UFO overhead flashes four colours in order. When the speakers glow white, hit them in that order as fast as you can (in co-op, each player takes one).', list: [
            'Right: every speaker beams its colour and the UFO flashes wildly. The next few kills drop a Max Ammo.',
            'Wrong or too slow: Wyler laughs and a Brute spawns.',
            'Not ready? Don\'t touch the speakers. The UFO just plays the sequence again.',
          ] },
          { w: 944, t: 'Survive the clown wave', d: 'Back off to get distance, then turn and shoot. It takes about two minutes.' },
          { w: 976, t: 'Beat the alien (one per player)', d: 'Its collar goes green → amber → red as you damage it. On red, wait until it\'s in front of you and finish the bar: it drops to one knee. Get behind it and knife the backpack to knock out a fuse. Do it again for the second fuse, then the third time just kill it.', tip: 'Play safe. If it kneels somewhere dangerous, let it heal rather than risk going down: you can\'t easily rebuy your perks here.' },
          { w: 1182, t: 'Pick up the Alien Fuses and put them in Pack-a-Punch', d: 'They\'re outside the central portal. The UFO keeps firing energy balls at you from now on. Pack-a-Punch can now upgrade weapons twice and upgrade the Weapons of Rock.' },
          { w: 1215, t: 'Pack-a-Punch a Weapon of Rock', d: '10,000 points.', needs: ['shredder', 'dischord', 'face-melter', 'head-cutter'] },
          { w: 1230, t: 'Shoot the blue lights on the Welcome to Spaceland sign with it', d: 'Use the upgraded Weapon of Rock. The sign is by the spawn; each light turns yellow when hit. Fire at the last one when the UFO is right above the central portal: the beam blows it up.' },
          { w: 1261, t: 'Pick up the piece of the Soul Key', d: 'It lands outside the central portal.' },
        ],
      },
    ],
  });
})();
