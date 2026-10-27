/* The Beast from Beyond — Infinite Warfare DLC 4 (Retribution), the finale */
(() => {
  const I = 'assets/img/iw/beast/';
  const B = 'G8wRsZNLPTY'; // MrDalekJD easter egg guide
  const P = 'iLYDFYUg79k'; // MrDalekJD Pack-a-Punch guide
  const V = 'LJSvY9ypYBQ'; // GregFPS Venom-X guide
  const Y = '9BEFmH2CHrE'; // Ch0pper Venom-X upgrade guide
  const BV = { id: B, title: 'The Beast from Beyond full easter egg guide', ch: 'MrDalekJD', len: '13:55' };
  const morse = {
    15: 'FIFTEEN: ..-. / .. / ..-. / - / . / . / -.',
    18: 'EIGHTEEN: . / .. / --. / .... / - / . / . / -.',
    20: 'TWENTY: - / .-- / . / -. / - / -.--',
    30: 'THIRTY: - / .... / .. / .-. / - / -.--',
  };
  const kills = (n, what) => [`Kill **${n}** ${what}.`, `On the computer by Bombstoppers, enter ${morse[n]}`];
  const twenty = what => ['Kill **20** (or **25**) ' + what + '.', `On the computer by Bombstoppers, enter ${morse[20]}`, 'No activation sound? It\'s 25: also enter FIVE: ..-. / .. / ...- / .'];
  ZG.addMap({
    game: 'iw', id: 'the-beast-from-beyond', order: 5,
    name: 'The Beast from Beyond', dlc: 'Retribution · DLC 4', eeName: 'The End?',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Entangler', 'Venom-X', 'Cryptids'],
    blurb: 'An icy research base from the Extinction films, plus Wyler\'s real theater. Repair N31L, feed him four floppy disks, hack him and carry his head to the projector for the final fight and the last piece of the Soul Key.',
    quick: [
      ['Main EE', 'The End?'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Entangler, Venom-X (upgrades to Venom-Y and Venom-Z)'],
      ['Key items', 'N31L\'s head, four floppy disks, bridge pieces'],
    ],
    intro: {
      start: 'Cryptids attack until N31L\'s head is in the spawn terminal; that also gets the map going. Three bridge pieces open Pack-a-Punch. The Entangler is needed for the easter egg.',
      parts: 'The bridge pieces never move.',
      weapons: 'The Entangler comes from the first two Ghosts \'n Skulls skulls. The Venom-X is optional but strong against cryptids.',
      'easter-egg': 'Fairly short. The disks and the dial puzzle are the only tricky parts, then a long wave fight. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Fetch N31L\'s head from the catwalk below the Ops Center and plug it into the terminal in spawn. Then collect three bridge pieces and repair the bridge outside to reach the Pack-a-Punch portal.',
        video: { id: P, title: 'How to Pack-a-Punch on The Beast from Beyond', ch: 'MrDalekJD', len: '2:05' },
        steps: [
          { w: [B, 94], t: 'Get N31L\'s head and put it in the spawn terminal', d: 'In the Ops Center, drop into the big hole onto the green ledge (not the bottom: the spikes kill you). Follow the cave past Tuff \'Nuff to a catwalk over Water Treatment; the head is in the bottom-left corner of the window at the end. Plug it into the terminal in Staging (spawn).' },
          { w: 31, t: 'Collect the three bridge pieces', needs: ['bridge-pieces'] },
          { w: 93, t: 'Repair the bridge outside and use the portal', d: 'Go out to the Exterior and place the pieces on the broken bridge. The portal on the glacier leads to Pack-a-Punch (5,000).' },
        ],
      },
      {
        id: 'double-pap', tab: 'start', type: 'Upgrade', name: 'Double Pack-a-Punch (Alien Fuses)', short: 'Double PaP',
        summary: 'Find the uncharged fuses, play the Zombies in Spaceland reel in the projector, pull a Brute\'s head out of the movie screen with the Entangler and use it to charge the fuses.',
        steps: [
          { w: ['UMXCxbOWpng', 32], t: 'Shoot or knife the fuse box above the Magic Wheel spot in the Proteus hallway', d: 'Take the uncharged Alien Fuses.' },
          { w: ['UMXCxbOWpng', 63], t: 'Take the Zombies in Spaceland reel to the projector', d: 'It\'s on the counter left of the Fate & Fortune dealer in the theater\'s Afterlife Arcade. Slot it between the two reels on the Pack-a-Punch projector.' },
          { w: ['UMXCxbOWpng', 95], t: 'Pull a Brute\'s head out of the screen', d: 'In the theater, start the Movie Wormhole trap and zap the rift in the middle of the screen with the Entangler. Drop the head, then pick it up.', needs: ['entangler'] },
          { w: ['UMXCxbOWpng', 111], t: 'Charge the fuses with the cardboard cutouts', d: 'In the theater hallway, put the fuses on the left hand of the Sasquatch cutout first, then the head on the Brute cutout. A beam charges the fuses: install them in Pack-a-Punch for second upgrades (10,000).' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'bridge-pieces', tab: 'parts', type: 'Pack-a-Punch parts', name: 'Bridge pieces', color: 'ice',
        summary: 'Three big satellite-dish pieces, always in the same places. One is in the real-world theater.',
        facts: [['Parts', '3 (fixed spots)'], ['Use at', 'Broken bridge, Exterior']],
        video: { id: P, title: 'How to Pack-a-Punch on The Beast from Beyond', ch: 'MrDalekJD', len: '2:05' },
        parts: [
          { w: 46, name: 'Piece 1', area: 'Medical Bay, lower level', spots: ['Leaning right of Blue Bolts, tucked in the corner up the stairs.'] },
          { w: 62, name: 'Piece 2', area: 'Cargo Bay, lowest level', spots: ['Wedged between the bottom staircase and a container.'] },
          { w: 78, name: 'Piece 3', area: 'Outside the theater (real world)', spots: ['On the roof of a crushed car, right of the portal outside the Afterlife Arcade. To get to the theater, hit the button by the Cargo Bay door: a laser opens the portal (N31L must be installed).'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'entangler', tab: 'weapons', type: 'Wonder weapon', name: 'Entangler', img: I + 'entangler.webp', color: 'aether',
        summary: 'The Ghosts \'n Skulls arcade gun, usable in the real map here. It grabs zombies and objects and throws them. The easter egg needs it several times.',
        facts: [['Unlock', 'First two skulls of Ghosts \'n Skulls (Skullbreaker)'], ['Equip', 'D-pad left']],
        video: BV,
        steps: [
          { w: 125, t: 'Skull 1: grenade the electrical box, then shoot the skull', d: 'The box is in one of three places, high on a wall or ceiling. A grenade opens it:', list: [
            'Water Treatment / lower Medical Bay, by the ladder up to Blue Bolts.',
            'The Cargo Bay: down the stairs, look up (right of the door you came in).',
            'The Ops Center, up and to the left above Bombstoppers.',
          ] },
          { w: 171, t: 'Skull 2: everyone stands on a small X in the Cargo Bay', d: 'Each player stands on one of the tiny X marks and stays inside the green area under them while killing zombies. If a zombie pushes you out, it fails. A skull rises in the middle; when it appears, run and jump into it quickly.' },
          { w: 216, t: 'Pick up the Entangler', d: 'It appears in the middle of the Cargo Bay, in front of Trail Blazers.' },
        ],
      },
      {
        id: 'venom-x', tab: 'weapons', type: 'Wonder weapon', name: 'Venom-X', img: I + 'venom-x.webp', color: 'green',
        summary: 'The acid launcher from Extinction. Shock a Phantom in the water trap, pick the right button in the Ops Center cabinet, trap a zombie and solve four hidden mazes. Not needed for the easter egg.',
        facts: [['Cost', 'Free'], ['Upgrades', 'Venom-Y, then Venom-Z']],
        video: { id: V, title: 'How to get the Venom-X', ch: 'GregFPS', len: '6:02' },
        steps: [
          { w: 46, t: 'Get a blue Phantom to spawn', d: 'Go in and out of Pack-a-Punch. When the 30 seconds run out, cryptids spawn, sometimes a blue Phantom. Repeat until you get one.', needs: ['power-pap'] },
          { w: 61, t: 'Shock it in the Water Treatment water', d: 'Lead it into the flooded room and switch on the electric trap while it\'s standing in the water. Then kill it. Keep one zombie alive for later.' },
          { w: 91, t: 'Press the right button in the Ops Center cabinet', d: 'A small cabinet of coloured buttons opens in the Ops Center. The right button closes it quietly.', warn: 'A wrong button buzzes, spawns a Phantom and shuts the cabinet until next round. Trial and error is fine; the wiki also has a colour-rule solution.' },
          { w: 154, t: 'Trap a zombie in the containment pad', d: 'Walk your saved zombie onto the pad in the middle of the room and use the control panel. It holds it for about 5 minutes in solo (3 in co-op).' },
          { w: 171, t: 'Solve the four hidden mazes', d: 'Upstairs in the room above Bombstoppers, use the middle computer, then the left and right terminals. Each shows a red square and a blue square in an invisible maze: steer red to blue with the d-pad. Match your start and finish to one of the 16 layouts below.', warn: 'Hit a wall and the trapped zombie dies and a Phantom spawns.', imgs: [{ src: I + 'mazes.webp', cap: 'All 16 possible mazes (red = start, blue = finish)' }] },
          { w: 265, t: 'Take the Venom-X', d: 'A door opens in the Ops Center with it inside. If you lose it later, it\'s in the Magic Wheel.' },
        ],
        upgrade: {
          name: 'Venom-Y and Venom-Z', summary: 'A Morse code message tells you how many kills to get; then Pack-a-Punch it. The Venom-Z needs a second round of this plus the Alien Fuses.',
          video: { id: Y, title: 'Venom-X upgrade guide', ch: 'Ch0pper', len: '7:22' },
          steps: [
            { w: 217, t: 'Get the key word from the upper terminal by Bang Bangs', d: 'It plays a word in Morse: ARCHER (.- .-. -.-. .... . .-.) or CROSS (-.-. .-. --- ... ...).' },
            { w: 289, t: 'Listen to the lower terminal and find your number', d: 'It plays a coded message. It always starts the same way: with CROSS it\'s M Z Z D G X V F, with ARCHER it\'s K Z N S S M E I. The next two letters tell you the number:', lookup: {
              a: 'Key word and the two letters after the opening',
              options: ['CROSS · X A (-..- .-)', 'CROSS · W A (.-- .-)', 'CROSS · L O (.-.. ---)', 'CROSS · L Z (.-.. --..)', 'ARCHER · H P (.... .--.)', 'ARCHER · G P (--. .--.)', 'ARCHER · V D (...- -..)', 'ARCHER · V O (...- ---)'],
              hint: 'Pick your key word and the two letters you heard.',
              answers: {
                'CROSS · X A (-..- .-)': kills(15, 'cryptids with the Venom-X'),
                'CROSS · W A (.-- .-)': kills(18, 'cryptids with the Venom-X'),
                'CROSS · L O (.-.. ---)': twenty('cryptids with the Venom-X'),
                'CROSS · L Z (.-.. --..)': kills(30, 'cryptids with the Venom-X'),
                'ARCHER · H P (.... .--.)': kills(15, 'cryptids with the Venom-X'),
                'ARCHER · G P (--. .--.)': kills(18, 'cryptids with the Venom-X'),
                'ARCHER · V D (...- -..)': twenty('cryptids with the Venom-X'),
                'ARCHER · V O (...- ---)': kills(30, 'cryptids with the Venom-X'),
              },
              endNote: 'Left red button = dot, right red button = dash.',
              source: 'Cheat sheet from the Call of Duty Wiki (the message is a Vigenère cipher of "KILL OVER" and the number).',
            } },
            { w: 351, t: 'Get the kills, then Pack-a-Punch it for the Venom-Y', d: 'Your inventory shows the percentage. An easy way to farm cryptids: keep a zombie in the containment pad and go in and out of Pack-a-Punch.' },
            { t: 'Venom-Z: repeat the Morse step and get the kills with the Venom-Y', d: 'This time the kills are special enemies (cryptids and guest bosses count).' },
            { t: 'Set the time machine by the Pack-a-Punch portal to 1950 and shoot the hidden figures', d: 'Shoot at least the number from the message in front of the portal within one round.' },
            { t: 'Pack-a-Punch the Venom-Y again', needs: ['double-pap'], d: 'Needs the Alien Fuses installed.' },
          ],
        },
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'The End?', short: 'Main EE',
        summary: 'Collect four floppy disks, put them into N31L in the right order, hack him with a button from the theater and a dial puzzle, carry his head to the projection room, then survive the cryptid onslaught.',
        facts: [
          ['Players', '1–4 (solo works; co-op is easier)'],
          ['Reward', 'Fifth piece of the Soul Key, achievement, and Director\'s Cut if all five IW easter eggs are done'],
          ['Hardest part', 'The final waves and the two armoured Rhinos'],
        ],
        prep: [
          { t: 'N31L\'s head installed and Pack-a-Punch open', needs: ['power-pap', 'bridge-pieces'] },
          { t: 'The Entangler', needs: ['entangler'] },
          { t: 'A way to share symbols in co-op', d: 'Each player holds a disk; screenshots help.' },
        ],
        stepsTitle: 'Quest steps',
        video: BV,
        steps: [
          { w: 238, any: 'Disks in any order', t: 'Disk 1: entangle it from behind the bars', d: 'In the red, smoky hallway near Bang Bangs (the Proteus / fuse box hallway), grab the disk behind the bars with the Entangler and throw it into the grate at the back. It lands in a vent somewhere: left of the Magic Wheel by the hallway, upstairs by the door to Bang Bangs, in the Medical Bay near spawn, or by the Magic Wheel in spawn.', needs: ['entangler'] },
          { w: 285, any: 'Disks in any order', t: 'Disk 2: knock out the force field with a helmet', d: 'Entangle an astronaut helmet in spawn and carry it to the room with the dead cryptid on the table (Medical Bay). Throw it at the green monitor to drop the force field; the disk is by a table inside.' },
          { w: 322, any: 'Disks in any order', t: 'Disk 3: kill the first blue Phantom', d: 'Go into Pack-a-Punch and come back out; when the timer ends a blue Phantom may spawn (or wait for round 10). It drops the disk.' },
          { w: 338, any: 'Disks in any order', t: 'Disk 4: on the ground left of the Pack-a-Punch portal' },
          { w: 368, t: 'Find the paper with all four disk symbols', d: 'Look at the symbol on each disk, then find the scrap of paper that shows all four. Possible spots:', list: [
            'Up the ladder on the left in spawn.',
            'Left of the Magic Wheel in spawn, high on the wall.',
            'The break room table right of the freezer trap (a sheet torn in two halves).',
            'Post-it notes on the monitor above Bombstoppers in the Ops Center.',
          ] },
          { w: 432, t: 'Put the disks into N31L\'s terminal in that order', d: 'Read the scrap from top to bottom: the top symbol goes in slot 1, and so on. If a scrap also has other symbols, skip the ones you don\'t have.', warn: 'Wrong order: cryptids spawn and the disks change symbols, so find the matching paper again.' },
          { w: 494, t: 'N31L goes rogue: steal the button from the theater', d: 'Doors and traps start going off on their own. In the theater by the Brute cutout, entangle the button on the wall just outside the map (right of a lampshade). Drag it into the "The Beast from Beyond" poster in the Afterlife Arcade; the poster swallows it.', tip: 'It\'s a bit buggy. If it doesn\'t go in, grab the button again and retry.' },
          { w: 540, t: 'Press the button under the desk and solve the dials', d: 'In the force field room by the Medical Bay, press the button under the desk. A 4×4 grid of dials appears by the dead cryptid. Take a screenshot, then turn every dial that started vertical to horizontal. If that doesn\'t work, put them back and turn the horizontal ones vertical instead. A message says N31L is hacked.' },
          { w: 617, t: 'Carry N31L\'s head to the projection room computer', d: 'You\'re on a timer. Entangle his head from the spawn terminal and carry it to the computer on the desk in the Pack-a-Punch room. Zombies chase you, so have teammates escort.', warn: 'Fail and a nuke goes off; redo the dials.' },
          { w: 648, t: 'Get ready, then use the computer to start the fight', d: 'All perks, double Pack-a-Punched guns (the guide likes the Mauler, FHR-40 and VPR), the Venom-X if you have it, and good Fate & Fortune cards.', needs: ['double-pap', 'venom-x'] },
          { w: 680, t: 'Kill the Rhinos, then the cryptid waves', d: 'N31L shoots open containers one by one, each releasing a Rhino. Then portals pour out Scouts, then Phantoms, and the arena opens up. Sentry guns, an ammo crate in the starting area and perks help.' },
          { w: 696, t: 'Switch off the terminals in quick succession', d: 'One terminal per player lights up near the portals. Activate them close together; keep trying until it works.' },
          { w: 718, t: 'Survive the countdown', d: 'A terminal in the starting area counts down from about 100 seconds through a bigger wave.' },
          { w: 735, t: 'Kill the two armoured Rhinos (Mammoths)', d: 'Huge health; shooting them in the back seems best. Never step in their blue fire. There\'s a Lost and Found and perks in the arena if you go down. Kill both for the ending and the last Soul Key piece.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Scattered Lies"',
        video: { id: 'c8gQZwqxA5c', title: 'The Beast from Beyond secret song: Scattered Lies', ch: 'MrWilliamThor', len: '7:08' },
        summary: 'Shoot fifteen astronaut plush toys. They\'re always in the same places. The song plays after the last one and is added to your lobby music.',
        spots: [
          'At the very bottom of the pit by Tuff \'Nuff.',
          'Left of a pole outside the map behind Change Chews.',
          'Under the stairs left of Bombstoppers.',
          'Under a small table in the corner of the green-lit barrier by Racin\' Stripes.',
          'Inside the ticket booth in front of Wyler\'s theater.',
          'In the bathroom bin inside Wyler\'s theater.',
          'In the bottom left corner of the barrier behind N31L\'s head spawn.',
          'On a ledge outside the map by the Pack-a-Punch portal (use a sniper scope).',
          'On a ceiling beam in the Cargo Bay.',
          'On top of a fire escape outside Wyler\'s theater.',
          'In a window of the building you face from the Pack-a-Punch portal.',
          'In a corner under the stairs between spawn and the Water Treatment plant.',
          'In a grate in the big hallway between the 2,000 door outside and the Proteus wall buy.',
          'On top of the glacier by the Pack-a-Punch portal (a grenade can hit it).',
          'Inside the red vent that holds one of the four floppy disks.',
        ],
      },
    ],
  });
})();
