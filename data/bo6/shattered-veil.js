/* Shattered Veil — Black Ops 6, Season Three */
(() => {
  const I = 'assets/img/bo6/shattered-veil/';
  const E = '2pROUb-ECHU'; // MrRoflWaffles easter egg guide
  const P = 'dlI_9pyjiWY'; // TheGamingRevolution Pack-a-Punch guide
  const R = 'kGj2kFb7lvY'; // MrRoflWaffles Ray Gun Mark II build and upgrades
  const W = 'prHegJAzlQg'; // MrRoflWaffles free Wunderwaffe
  const EV = { id: E, title: 'Shattered Veil easter egg guide', ch: 'MrRoflWaffles', len: '28:46' };
  const PV = { id: P, title: 'Shattered Veil Pack-a-Punch and elevator', ch: 'TheGamingRevolution', len: '2:20' };
  const RV = { id: R, title: 'Ray Gun Mark II build and all three upgrades', ch: 'MrRoflWaffles', len: '13:20' };
  const WV = { id: W, title: 'Free Wunderwaffe DG-2 on Shattered Veil', ch: 'MrRoflWaffles', len: '10:11' };

  const ritual = (w, gun, room, boss) => ({ w, t: `Place it in the ${room} and kill the boss with the ${gun}`, d: `Put the item on the pedestal inside the liminal space. Everyone is pulled in. Only the ${gun} breaks the ${boss}'s shield: break it, damage it, repeat. Then hold interact on the Sentinel Artifact.`, warn: `You must be holding the ${gun} for this.` });

  ZG.addMap({
    game: 'bo6', id: 'shattered-veil', order: 5,
    name: 'Shattered Veil', dlc: 'Season Three', eeName: 'Shattered Veil quest',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Ray Gun Mark II', 'Wunderwaffe DG-2', 'Z-Rex boss'],
    blurb: 'Richtofen\'s mansion above Liberty Falls, with S.A.M. waiting in a lab underneath. Build all three elemental Ray Gun Mark IIs, use each to open a liminal room and complete its ritual, then fight a zombie T-Rex.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op)'],
      ['Wonder weapons', 'Ray Gun Mark II (3 elemental versions), Wunderwaffe DG-2'],
      ['Key items', 'Sconce, bell, ritual elixir, three ritual items'],
      ['Boss', 'The Z-Rex'],
    ],
    intro: {
      start: 'Fix the elevator with a fuse and a circuit board; Pack-a-Punch is in the Mainframe Chamber below. Black Ops 6 rules are explained in the basics on Liberty Falls.',
      weapons: 'You need all three elemental Mark IIs (blue W, purple P, yellow R), one for each ritual. You can only carry one at a time, so swap at their crafting benches.',
      'easter-egg': 'Three rituals, one per elemental Mark II, in any order, then the boss. Bring Aether Shroud with extra charges for the yellow ritual. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Elevator & Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Open the way into the mansion, take a fuse from a maintenance worker in the Library and a circuit board from Richtofen\'s computer, fix the elevator and ride down to the Mainframe Chamber.',
        video: PV,
        steps: [
          { w: 0, t: 'Open the way up to the mansion and the Banquet Hall', d: 'Through Shem\'s Henge and the upper terrain into the Grand Foyer (with the T-Rex statue), past Stamin-Up and Double Tap. The elevator is by the Banquet Hall.' },
          { w: 47, t: 'Kill the maintenance worker in the Library for the fuse', d: 'In the corner of the top floor.' },
          { w: 63, t: 'Shoot Richtofen\'s computer for the circuit board', d: 'In the Director\'s Quarters (bedroom), through the West Balcony and West Hallways.' },
          { w: 93, t: 'Repair the elevator and open it', d: 'Calling it brings zombies out. Opening it sends it down; take the zipline down to S.A.M.' },
          { w: 108, t: 'Pack-a-Punch is in the Mainframe Chamber' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'mk2', tab: 'weapons', type: 'Wonder weapon', name: 'Ray Gun Mark II', img: I + 'mk2.webp', color: 'green',
        summary: 'Fires three-round bursts. The quest needs all three elemental versions, and you must build the base gun yourself even if the box gives you one.',
        facts: [['Get it', 'Free build (round 10+), or the Mystery Box'], ['Upgrades', 'Mark II-W (blue SMG), II-P (purple shotgun), II-R (yellow marksman)']],
        video: RV,
        steps: [
          { w: 0, t: 'Kill the lab technician underground for a floppy disk', d: 'From round 10, in the Mainframe Chamber area. A Nuke may already have killed him: check the floor.' },
          { w: 33, t: 'Put the disk in the computer right of the T-Rex, then read the fax', d: 'Kill the zombies, parasites and bugs that spawn. The fax beside it shows a word in capitals: MOTH, CRAB, YETI or WORM.' },
          { w: 64, t: 'Turn the word into a code on the Nursery chalkboard', d: 'For each letter, count how many letters are in its group on the board. Example: Y in a group of 5, E in 4, T in 8, I in 2 makes YETI 5482. The board changes every game.' },
          { w: 112, t: 'Open the Doppelghast\'s cell underground and kill it', d: 'Enter the code on the keypad. It drops a severed arm.' },
          { w: 128, t: 'Use the arm on the scanner in the Armory', d: 'Underground. Hold interact on the right side of the case to take the Mark II.' },
        ],
      },
      {
        id: 'mk2-w', tab: 'weapons', type: 'Mark II upgrade', name: 'Ray Gun Mark II-W (blue)', short: 'Mark II-W', img: I + 'mk2-w.webp', color: 'storm',
        summary: 'A blue SMG version. Its canister is charged by Abominations at Shem\'s Henge.',
        video: RV,
        steps: [
          { w: 144, t: 'Get a canister: throw a Kazimir at the window behind Double Tap', d: 'There\'s a free Kazimir on a body in the Service Tunnel. It sucks the canister out; pick it up.' },
          { w: 175, t: 'Put it in the yellow box at Shem\'s Henge', d: 'Abominations spawn below the steps.' },
          { w: 191, t: 'Get the Abominations to zap, then charge, the three small rocks', d: 'Zapped rocks glow blue; a charge into a glowing rock makes it float. With all three floating, defend the middle from Vermin.' },
          { w: 221, t: 'Craft it at the bench in the Supply Depot (underground)', d: 'Put in the charged canister, then hold interact with the base Mark II.' },
        ],
      },
      {
        id: 'mk2-p', tab: 'weapons', type: 'Mark II upgrade', name: 'Ray Gun Mark II-P (purple)', short: 'Mark II-P', img: I + 'mk2-p.webp', color: 'aether',
        summary: 'A purple shotgun version. Bounce a beam with two reflectors to wake three Doppelghast statues.',
        video: RV,
        steps: [
          { w: 253, t: 'Get a canister: send gas to the tank by the Mainframe Chamber', d: 'Note the letter (A or B) by the tank next to the Mainframe. Outside the Service Tunnel, hit the valve wheels with tomahawks so gas flows only to your letter (left, middle, then your letter on; the other letter off). Then blow the tank open with an explosive and take the canister.' },
          { w: 316, t: 'Find the Essence Bomb in a white Project Janus crate', d: 'Break white crates around the map (Armory, Service Tunnel, balconies, hallways, T-Rex room, Motor Court, Shem\'s Henge, Conservatory) until one has it.' },
          { w: 414, t: 'Take the two reflectors from the fountains', d: 'One by Quick Revive near the Conservatory, one on the South West Balcony.' },
          { w: 430, t: 'Blow open the rubble in the Service Tunnel and start the machine', d: 'Place the bomb, go through and put the canister in the machine. A beam comes down.' },
          { w: 463, t: 'Aim the beam at three Doppelghast statues in turn', d: 'Place the reflectors to bounce the beam onto a statue, melee the source crystal, kill the Doppelghast. Melee or move a reflector (one goes up the slope) to hit the next statue. The third is an elite Doppelghast.' },
          { w: 525, t: 'Craft it at the bench in the Director\'s Quarters' },
        ],
      },
      {
        id: 'mk2-r', tab: 'weapons', type: 'Mark II upgrade', name: 'Ray Gun Mark II-R (yellow)', short: 'Mark II-R', img: I + 'mk2-r.webp', color: 'gold',
        summary: 'A yellow marksman rifle version. Grow four Aether plants in the Conservatory.',
        video: RV,
        steps: [
          { w: 540, t: 'Get a canister: shoot the blue crystal pods with the base Mark II', d: 'Four spots: in the roof near Quick Revive in the Conservatory, up on the wall left inside the mansion, up the stairs right inside the mansion, and high up in the Service Tunnel. One drops it. A normal Ray Gun won\'t work.' },
          { w: 604, t: 'Blow up four plants for Aether seeds', d: 'Use explosives, fire or the base Mark II. They grow on grassy spots: Shem\'s Henge, the fountain by Quick Revive, both sides of the Garden Pond bridge, the Conservatory, the South West Balcony, the Rear Patio, behind Double Tap.' },
          { w: 699, t: 'Put the canister in the Conservatory machine and grow all four seeds', d: 'Plant a seed in each planter and defend it while it grows. If a seed pops out, grab it quickly and try again.' },
          { w: 760, t: 'Craft it at the bench in the spawn area' },
        ],
      },
      {
        id: 'wunderwaffe', tab: 'weapons', type: 'Wonder weapon', name: 'Wunderwaffe DG-2', color: 'lightning',
        summary: 'Chain lightning that kills crowds. Free after one ritual, or from the Mystery Box.',
        video: WV,
        steps: [
          { w: 168, t: 'Finish any one ritual of the main quest', d: 'Richtofen starts talking to you.', needs: ['ee'] },
          { w: 429, t: 'Shoot the smelly laundry under the bed in the Nursery' },
          { w: 461, t: 'Clear the three relics', d: 'A book on a chair, a ball in spawn and a family photo in the Grand Foyer. Hit one: it floats and pulls in debris. Shoot all the debris, then the relic; repeat until it vanishes in purple smoke. Fail and it resets next round.', tip: 'A shotgun with splash (Pack-a-Punched GS45s or Dragon\'s Breath ASG) or a War Machine works best.' },
          { w: 556, t: 'Shoot the purple smoke at the bottom of the elevator', d: 'The Wunderwaffe pops out.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Shattered Veil main quest', short: 'Main quest',
        summary: 'Open three liminal rooms behind paintings, one with each elemental Mark II. In each, place a ritual item and kill a shielded boss with that Mark II. Then give S.A.M. the Sentinel Artifact and fight the Z-Rex.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card'],
          ['Boss', 'The Z-Rex'],
        ],
        prep: [
          { t: 'Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'All three elemental Mark IIs', needs: ['mk2-w', 'mk2-p', 'mk2-r'] },
          { t: 'Aether Shroud with extra charges', d: 'Needed to see the yellow ritual\'s items. Power Keg or Arsenal Accelerator GobbleGums help.' },
          { t: 'For the boss: Chopper Gunners, self-revives, Pack-a-Punch 3 and Legendary rarity' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 970, t: 'Blue: find the sconce and win the lamp game', d: 'The sconce is in a box in the Banquet Hall (by the elevator). Put it on the wall gap in the T-Rex room by Juggernog, then copy the flashing pattern on the two lamps, a step longer each time. A secret door opens to the Distillery.' },
          { w: 1048, t: 'Blue: open the painting with Mark II-W kills', d: 'Holding the Mark II-W, interact with the device next to the painting and kill zombies with it until the portal opens.', needs: ['mk2-w'] },
          { w: 1064, t: 'Blue: find the bell in the Study and get a drink', d: 'Break the glass cabinets; it can be by plates, on the floor or by a statue. Put the bell on the bar upstairs in the T-Rex room (the Overlook), bring a Brain Rot zombie next to it and ring the bell: the zombie serves you the hip flask.', tip: 'Solo: can\'t find it? Save, quit and reload; it moves.' },
          ritual(1155, 'Mark II-W', 'Distillery', 'Mangler'),
          { w: 1201, t: 'Purple: open the portrait with Mark II-P kills and take the elixir', d: 'The portrait of Josiah Shem is in the room with the top of the elevator. Inside the liminal room, take the ritual elixir from the corner of the table.', needs: ['mk2-p'] },
          { w: 1233, t: 'Purple: fill three chalices', d: 'Interact with each and kill the Elder Disciple that spawns (with its escorts). A red symbol shows over each:', list: [
            'In the Bottlery (the wine barrel room).',
            'In spawn, on a bench under the bridge.',
            'In the T-Rex room, up the stairs opposite the T-Rex.',
          ] },
          { w: 1280, t: 'Purple: read the three numbers and open the safe', d: 'Numbers appear on the walls of the elevator room (left, behind, right). Enter them left to right on the safe in the West Hallways and take the antler carving.' },
          ritual(1311, 'Mark II-P', 'Banquet Hall', 'Elder Disciple'),
          { w: 1341, t: 'Yellow: open the Library painting with Mark II-R kills', needs: ['mk2-r'] },
          { w: 1356, t: 'Yellow: find three items while in Aether Shroud', d: 'They\'re only visible during (or just after) Aether Shroud. One of each:', list: [
            'ID tag: in a fireplace in the East Foyer, the Study or the Banquet Hall.',
            'Audio log: on the briefcase outside the Library portal, or on the desk left of the bar in the T-Rex room.',
            'Ledger: on the desk by the Study fireplace, or at the top of a staircase next to a briefcase.',
          ], tip: 'Solo: save, quit and reload if one won\'t show.' },
          { w: 1498, t: 'Yellow: pull the three glowing books in order', d: 'In the real Library: first the book with a single circle (like a sideways 6), then the circle with a line through it, then the three dots. A secret door opens: take the inspection report.' },
          ritual(1528, 'Mark II-R', 'Library', 'Amalgam'),
          { w: 1559, t: 'Get ready', d: 'Chopper Gunners, self-revives, Mark II-W, Kazimirs or decoys, Pack-a-Punch 3, Legendary rarity, Near-Death Experience.' },
          { w: 1576, t: 'Interact with the panel in front of S.A.M. to start the fight' },
          { w: 1592, t: 'Beat the Z-Rex', d: 'Keep away from its tail. It eats glowing toxic zombies: then its ribs glow green, so shoot them for big damage. Its eyes are critical spots. Goo slowly shrinks the arena. After each quarter of its health it jumps out; survive about 45 seconds until it comes back.', tip: 'Save Chopper Gunners for the later phases.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Falling To Pieces"',
        summary: 'Interact with three Mister Peeks headphones.',
        spots: [
          'In the Conservatory, under the stairs in the room with the covered statue, on a wooden crate.',
          'In the Banquet Hall, in the right corner behind the elevator, on a shelf.',
          'In the Service Tunnel, on a cardboard box next to a burnt body right of the tier 3 armour.',
        ],
      },
    ],
  });
})();
