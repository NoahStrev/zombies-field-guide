/* Terminus — Black Ops 6 launch map */
(() => {
  const I = 'assets/img/bo6/terminus/';
  const E = 'tI9dwinLua0'; // MrRoflWaffles easter egg guide
  const P = 'OJccbSoQtBc'; // MrRoflWaffles power and Pack-a-Punch
  const B = 'wNrHOq7sSqw'; // MrRoflWaffles Beamsmasher guide
  const EV = { id: E, title: 'Terminus easter egg guide', ch: 'MrRoflWaffles', len: '12:28' };
  const PV = { id: P, title: 'Terminus power and Pack-a-Punch', ch: 'MrRoflWaffles', len: '2:44' };
  const BV = { id: B, title: 'Free Beamsmasher on Terminus', ch: 'MrRoflWaffles', len: '4:28' };

  ZG.addMap({
    game: 'bo6', id: 'terminus', order: 2,
    name: 'Terminus', dlc: 'Launch map', eeName: "No Mo' Modi",
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Beamsmasher', 'Boats', 'Patient 13 boss'],
    blurb: 'A prison and research site on an island in the Philippine Sea, with boats between the smaller islands. Free Maya\'s brother Nathan, restore communications, stop a nuclear countdown and fight the sea monster Patient 13.',
    quick: [
      ['Main EE', "No Mo' Modi (solo or co-op)"],
      ['Wonder weapon', 'DRI-11 Beamsmasher (free quest)'],
      ['Key items', 'Hard drive, keycard, node connectors, hacking device'],
      ['Boss', 'Patient 13, a giant sea creature'],
    ],
    intro: {
      start: 'Power is three purple AMP generators you defend; then raise the Pack-a-Punch lift from under the water in the Bio Lab. Black Ops 6 rules are explained in the basics on Liberty Falls.',
      weapons: 'The Beamsmasher is needed for the easter egg. Its free quest uses Dead Wire, three laptops, a briefcase and three islands.',
      'easter-egg': 'Two timed parts: the buoy hacking and the five-minute nuke countdown. The boss needs a Legendary, triple Pack-a-Punched gun. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Start and defend three purple AMP generators (they\'re marked on screen). Then dive into the water in the Bio Lab and raise the lift that carries Pack-a-Punch.',
        video: PV,
        steps: [
          { w: 0, any: 'Generators in any order', t: 'AMP generator in spawn', d: 'Hold interact and defend it for 30 seconds (it has a health bar). Fail and you can retry next round.' },
          { w: 30, any: 'Generators in any order', t: 'AMP generator down the stairs', d: 'Down several levels; buy the door into the building on the right. It also powers Juggernog next to it.' },
          { w: 77, any: 'Generators in any order', t: 'AMP generator past the turret area', d: 'Follow the arrows down the walkway and through the tunnels; it\'s on a pad. Watch out for zombies jumping out of tubes.' },
          { w: 125, t: 'Dive in and raise the Pack-a-Punch lift', d: 'Jump into the water and hold interact on the marker. Pack-a-Punch rides up on the lift.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'beamsmasher', tab: 'weapons', type: 'Wonder weapon', name: 'DRI-11 Beamsmasher', short: 'Beamsmasher', img: I + 'beamsmasher.webp', color: 'lightning',
        summary: 'Fires a damaging beam; its alternate fire is a wide beam that slows and stuns a crowd. No upgrade quest: just Pack-a-Punch it. Ammo caches refill it.',
        facts: [['Get it', 'Free quest, Mystery Box or GobbleGums'], ['Upgraded', 'Supersonic Crusher'], ['Build at', 'The machine in Tonovsky\'s lab']],
        video: BV,
        steps: [
          { w: 47, t: 'Turn on power and Pack-a-Punch', needs: ['power-pap'] },
          { w: 62, anyList: 'Laptops in any order', t: 'Activate the three laptops', list: [
            'Below Quick Revive.',
            'Below Stamin-Up.',
            'By the docks, on a small outcrop.',
          ] },
          { w: 77, t: 'Put Dead Wire on a gun', d: 'Buy it with salvage at an Arsenal machine.' },
          { w: 92, t: 'Ride the lift up and shoot the electrical boxes with Dead Wire', d: 'Ride the Pack-a-Punch lift from the bottom to the top. On the way up, shoot the electrical box in the window on the right; the spark jumps to the next box. Shoot that one (in the living quarters by the AMP unit), then the last one on the outside wall by the lab entrance. The lab opens.' },
          { w: 124, t: 'Kill the trapped zombie in the lab and take the fob' },
          { w: 139, t: 'Take the injector from the briefcase in the Sea Tower and put it in the lab machine' },
          { w: 154, t: 'Get the three-number code and enter it on the dials', d: 'Pay Peck 5,000 at the Security Station and he shows the numbers (or solve the symbol puzzle from the three laptops and the note in the office). Enter them in the lab. It "targets" until the next round, then shows an island.' },
          { w: 169, t: 'Feed the orb on that island', d: 'Place the injector under the glowing orb. Zombies spawn, including one glowing the orb\'s colour: kill it over the injector (or carry the energy it drops to the orb). Do it twice.' },
          { w: 216, t: 'Do the same on the next two islands', d: 'The orb moves clockwise to the next island each time. Take the injector with you.' },
          { w: 247, t: 'Build the Beamsmasher in the lab', d: 'With the charged injector, hold interact on the machine.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: "No Mo' Modi",
        summary: 'Get a hard drive out of a tentacle trap, open Nathan\'s pod with a three-digit code and kill what he\'s become, repair two communication lines, hack three buoys, defuse three nukes in five minutes, then defeat Patient 13.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Achievement and calling card'],
          ['Boss', 'Patient 13 (three phases)'],
        ],
        prep: [
          { t: 'Power on and Pack-a-Punch raised', needs: ['power-pap'] },
          { t: 'The Beamsmasher', needs: ['beamsmasher'] },
          { t: 'For the boss: a bullet gun at Pack-a-Punch 3 and Legendary rarity, with an ammo mod (Dead Wire works well)' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 234, t: 'Get the hard drive out of a tentacle trap with the Beamsmasher', needs: ['beamsmasher'], d: 'One tentacle trap holds it (it looks already used, or has a keycard below it). The one in the Bio Lab is a reliable pick. Turn the trap on and sweep the beam along it; the hard drive drops.' },
          { w: 250, t: 'Give the hard drive to Peck', d: 'At the Security Station in spawn, in the box in front of him.' },
          { w: 266, t: 'Interact with Nathan\'s pod in the Bio Lab, then find the code', d: 'The big tube in the middle of the lab. The code is three numbers, in this order:', ol: [
            'The hour hand of the clock in the caged part of the Interrogation room, near Quick Revive.',
            'The playing card on the corkboard in the Mess Hall (an ace is 1).',
            'The "days since last incident" number on the safety sign in Engineering, next to the crafting bench.',
          ] },
          { w: 311, t: 'Enter the code and turn the valves together', d: 'Every player holds interact on a valve at the same time. This starts a fight.' },
          { w: 327, t: 'Kill Nathan', d: 'He\'s a tougher Amalgam. Bring a Pack-a-Punched gun above green rarity.' },
          { w: 344, t: 'Grab the keycard from the water and use the Communications computer', d: 'Jump down after the fight for the keycard. In Communications, hold interact on the computer with green text for a few seconds.' },
          { w: 374, t: 'Get node connectors from the shipwreck', d: 'Take a boat to the shipwreck and climb the ladder under it. Each player takes a cylinder from the table (you can\'t sprint while carrying one). You\'re locked in for about two minutes of zombies; a Max Ammo ends it.' },
          { w: 390, t: 'Repair the two broken pipes', d: 'Two of these three spots are used each game. Hold interact while your team covers you:', list: [
            'Crab Island (the south island), on the shore to the left as you arrive.',
            'In the Speed Cola sea cave, on the right-hand side.',
            'Under the Sea Tower by the docks, near the rope.',
          ] },
          { w: 437, t: 'Take the hacking device from Peck', d: 'It takes about 30 seconds of talk.' },
          { w: 453, t: 'Hack the three buoys before the timer runs out', d: 'One player drives the boat while the hacker jumps out and holds interact at each buoy (about 10 seconds). Circle back to pick them up; the sea monster targets you. A two-minute timer starts after the first one.', list: [
            'Off the east shore of Crab Island, south-east of the Sea Tower.',
            'Between Crab Island and the shipwreck.',
            'Straight east of Temple Island.',
          ], tip: 'Fail and you can simply start again.' },
          { w: 513, t: 'Defuse the three nukes in the Bio Lab (five-minute timer)', d: 'Each takes about 15 seconds of holding interact, and you can do it in parts. Others defend; solo, use a Monkey Bomb or Aether Shroud.', list: [
            'Bottom floor, next to the ammo cache by the stairs up to the Armory.',
            'Bottom floor, by the stairs under the Crafting Table.',
            'Above Melee Macchiato, below the room with the table.',
          ], warn: 'If the timer runs out, the game ends.' },
          { w: 559, t: 'Get ready, then open the door next to Melee Macchiato', d: 'At least one bullet gun at Pack-a-Punch 3 and Legendary rarity, with an ammo mod. Everyone votes to enter.' },
          { w: 607, t: 'Beat Patient 13', d: 'Shoot the glowing red bubbles on his shoulders. He slams the part of the arena in front of him, so stand in another part. Tentacles in the background spit at you; if you get knocked into the water, climb a ladder. Some phases make you shoot the crit spots on his arms or his mouth instead.', tip: 'Survival first. There\'s ammo to buy at the back of the arena.' },
          { w: 701, t: 'Final phase: shoot his eyes', d: 'He blocks off the back and sides. Stay at the back away from his tongue (it downs you), and get behind cover when he charges a big electric blast.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Can You Hear Me? (Come In)"',
        summary: 'Interact with three Mister Peeks headphones.',
        spots: [
          'Just before the Juggernog room (from the left side), on a big wooden spool next to a lamp.',
          'In the mining tunnels, on a red barrel across from PhD Flopper.',
          'In the Bio Lab, in the upstairs office on top of some white cabinets.',
        ],
      },
    ],
  });
})();
