/* Firebase Z — Black Ops Cold War, Season One Reloaded */
(() => {
  const I = 'assets/img/bocw/firebase-z/';
  const E = 'GF7mdkdCO3E'; // MrRoflWaffles easter egg guide
  const P = 'robKlmb8YBM'; // MrRoflWaffles power and Pack-a-Punch
  const R = 'TQJV_81R15k'; // MrRoflWaffles RAI K-84 guide
  const EV = { id: E, title: 'Firebase Z easter egg guide', ch: 'MrRoflWaffles', len: '15:38' };
  const PV = { id: P, title: 'Firebase Z power, Pack-a-Punch and Juggernog', ch: 'MrRoflWaffles', len: '2:50' };
  const RV = { id: R, title: 'How to build the RAI K-84', ch: 'MrRoflWaffles', len: '5:24' };

  ZG.addMap({
    game: 'bocw', id: 'firebase-z', order: 2,
    name: 'Firebase Z', dlc: 'Season One Reloaded', eeName: 'Maxis Potential',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['RAI K-84', 'Aether Reactors', 'Orda boss'],
    blurb: 'An Omega Group base in the jungles of Vietnam. Turn on three Aether Reactors, dose Dr Peck with his own truth serum, trap three Mimics that remember the past, and pull Samantha Maxis out of the Dark Aether.',
    quick: [
      ['Main EE', 'Maxis Potential (solo or co-op)'],
      ['Wonder weapon', 'RAI K-84 (build it, Mystery Box or Trials)'],
      ['Key items', 'Truth serum, Essence Traps, shovel, three Aether crystals'],
      ['Boss', 'An Orda in the village'],
    ],
    intro: {
      start: 'You spawn in the village. A teleporter takes you to the main base, where three Aether Reactors act as the power switch. Cold War rules are explained in the basics on Die Maschine.',
      weapons: 'The RAI K-84\'s orb launcher is needed for one crystal in the easter egg. Start building it while you work on the Mimic step.',
      'easter-egg': 'Lots of walking back and forth to talk to Peck and Ravenov. Stamin-Up helps. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Teleport from the village to the base and start the three Aether Reactors. Each one needs zombie souls to charge. When all three are done, Pack-a-Punch in the village turns on.',
        video: PV,
        steps: [
          { w: 15, t: 'Talk to Ravenov, then take the teleporter to the base', d: 'Ravenov is next to Pack-a-Punch in the village; talking to him is also the first easter egg step. Build up points in the village for a few rounds first.' },
          { w: 30, any: 'Reactors in any order', t: 'Military Command reactor', d: 'About 2,000 to open the way, then 500 to start it. Kill zombies nearby until it\'s charged, and keep them off the collection units (they turn red when attacked). It powers Juggernog, so do it first.', imgs: [{ src: I + 'reactor.webp', cap: 'An Aether Reactor (concept art)' }] },
          { w: 75, any: 'Reactors in any order', t: 'Mission Control reactor', d: 'Same again.' },
          { w: 105, any: 'Reactors in any order', t: 'Data Center reactor', d: 'Same again. A voice tells you to go back to the village.' },
          { w: 120, t: 'Teleport back: Pack-a-Punch is on', d: 'Next to Ravenov.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'raik', tab: 'weapons', type: 'Wonder weapon', name: 'RAI K-84', img: I + 'raik.webp', color: 'aether',
        summary: 'Fires heavy energy bolts. Its underbarrel launcher (D-pad up, or B on PC) costs 10 rounds and fires a purple orb; shoot the orb with normal bolts while zombies are inside and it explodes.',
        facts: [['Get it', 'Build it, Mystery Box or a Legendary Trials reward'], ['Upgraded', 'Discordian Disruptor'], ['Build at', 'Workbench in the Weapons Lab']],
        video: RV,
        steps: [
          { w: 16, t: 'Turn on all three Aether Reactors', needs: ['power-pap'] },
          { w: 32, t: 'Take the blueprint in the Weapons Lab', d: 'On the wall left of the computer that says "prove you are me".' },
          { w: 48, t: 'Take the eyeball from the body at Scorched Defense', d: 'The body leans against a vehicle. It only appears after you have the blueprint.' },
          { w: 63, t: 'Put the eyeball in the retinal scanner in the Weapons Lab', d: 'A desk drawer opens: take the key. The computer screen changes colour.' },
          { w: 78, t: 'Open the Barracks lockers until a Mimic drops the barrel stabilizer', d: 'Six lockers in Barracks 1, three in Barracks 2. Several hold Mimics; only one drops the part.' },
          { w: 109, t: 'Kill Manglers until one drops a fuel cell', d: 'They show up from about round 15. It may take a few. Shooting the arm cannon while it charges staggers them.' },
          { w: 139, t: 'Charge the cell in the Weapons Lab machine for a full round', d: 'For example in on round 17, out on round 19.' },
          { w: 154, t: 'Watch the pattern on the computer', d: 'Hold interact on the computer (now green). A highlight moves around a circle and stops three times. Think of it as a dartboard: note the number at each stop.', tip: 'Repeat it as often as you need. A stun grenade buys you time.' },
          { w: 216, t: 'Shoot those numbers on the village dartboard, then the bullseye', d: 'In the mess hall in the village, in the same order. The board spins and drops the last part.' },
          { w: 248, t: 'Build the RAI K-84 in the Weapons Lab', d: 'It can be Pack-a-Punched three times.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Maxis Potential',
        summary: 'Drug Peck with a truth serum, trap three special Mimics so a machine can read their memories, dig up three Aether crystals to overload the reactors, aim a satellite, and fight an Orda in the village.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, ending cutscene'],
          ['Boss', 'Orda (a giant Elder God)'],
        ],
        prep: [
          { t: 'Power on (all three reactors)', needs: ['power-pap'] },
          { t: 'The RAI K-84 before the last crystal', needs: ['raik'], d: 'Built, from the Mystery Box or from a Legendary Trials reward (the Trials machine is by the teleporter at the base).' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 0, t: 'Talk to Ravenov in the village', d: 'Right at the start, next to Pack-a-Punch.' },
          { w: 15, t: 'Turn on all three Aether Reactors', needs: ['power-pap'] },
          { w: 31, t: 'Talk to Ravenov, then Peck, then Ravenov again', d: 'Peck is behind the glass in Mission Control. Back in the village, Ravenov drops a keycard in front of him.' },
          { w: 63, anyList: 'Lockers in any order', t: 'Open three lockers with the keycard and take the serums', list: [
            'In the village, across from Ravenov, on the right side of the building.',
            'In the Colonel\'s Office, on the left.',
            'On the way to Engineering.',
          ] },
          { w: 110, t: 'Mix the serums in the Field Hospital', d: 'Use the chemical mixer near the Barracks. Hellhounds spawn; kill them all, then take the gas device from the mixer.', imgs: [{ src: I + 'mixer.webp', cap: 'The chemical mixer' }] },
          { w: 125, t: 'Put the device on the air conditioner on top of Mission Control', d: 'It pumps the serum into Peck\'s room.' },
          { w: 140, t: 'Talk to Peck', d: 'He dances, then sends you to the Data Center.' },
          { w: 155, t: 'Unlock the station in the Data Center and take an Essence Trap', d: 'Brush against the computer on the left (it can take a moment). Four yellow Essence Traps appear; one replaces your tactical.', imgs: [{ src: I + 'station.webp', cap: 'The memory station in the Data Center' }] },
          { w: 292, t: 'Find a special Mimic', d: 'Look for a pile of items on the floor: one jumps up as a Mimic and the others stay put and can\'t be picked up. That\'s the kind you want. Places they show up:', list: [
            'Peck\'s quarters in the village (lots of items).',
            'In front of the Weapons Lab near the Motor Pool, and inside the Motor Pool office.',
            'The Planning Offices.',
            'Around Juggernog in Military Command and up the walkway to the Colonel\'s Office.',
          ], tip: 'Lost one? Check the jungle areas. Nothing anywhere? Try again next round.' },
          { w: 324, t: 'Weaken it, then trap it', d: 'Get it to about a tenth of its health, throw the trap and double-tap interact. If it breaks out, the trap is gone; get another from the station. Once it\'s trapped you have three minutes to bring it back.' },
          { w: 339, t: 'Put it in the station and listen', d: 'Interact on the side of the machine, not the front. Sokolov, Brahms or Zhabin talking means it\'s a right one. Anyone else, or "memory corrupted", means try another.' },
          { w: 449, t: 'Repeat until you have all three memories', d: 'Then a floppy disk comes out of the station.' },
          { w: 479, t: 'Put the floppy disk in the computer in the Planning Offices', d: 'The OPC (the big metal sphere) opens. Go inside and look.' },
          { w: 510, t: 'Talk to Peck again and open the locker next to him', d: 'You get a code at the end of the talk. Take the device inside.' },
          { w: 541, t: 'Take the shovel from the huts at Scorched Defense', d: 'Leaning against a crate; if not, check the huts next to it.', imgs: [{ src: I + 'shovel.webp', cap: 'The shovel' }] },
          { w: 556, any: 'Crystals in any order', t: 'Dig up the lockdown crystal in Jungle Defense', d: 'Run over the dirt piles and listen for beeping that gets faster. Digging it up traps you in a dome with Manglers, dogs and zombies for a while. When the dome drops, take the crystal.', tip: 'Fresh armour and full ammo first.' },
          { w: 601, any: 'Crystals in any order', t: 'Dig up the crystal at the Open Lot and pick the right copy', d: 'Next to the Planning Offices. Lots of canisters appear around the Open Lot, the Planning Offices and the roof between them. Take the one with only white smoke and no black flakes.', warn: 'Take a wrong one and Mimics spawn; you have to dig it up again next round.' },
          { w: 677, any: 'Crystals in any order', t: 'Dig up the crystal by the Barracks and catch it with the RAI K-84', needs: ['raik'], d: 'It\'s buried in the corner by the stairs up to the Data Center. Once dug up it teleports around the Barracks area. Keep your distance (walking into a room scares it off), fire the orb launcher onto it, and grab it while the orb is spinning on it.' },
          { w: 740, t: 'Put a crystal into each of the three reactors', d: 'This overloads them.' },
          { w: 755, t: 'Go to the OPC, then back to Peck', d: 'His blind is shut. After about 30 seconds Weaver talks to you.' },
          { w: 771, t: 'Aim the satellite from the Planning Offices computer', d: 'Wait for the talk to end and the computer to turn on. Move the dot over the yellow points: skip the US and Soviet flags and confirm on the one with a question mark.' },
          { w: 801, t: 'Get ready, then start the end from the right-hand side of the OPC', d: 'There\'s no going back once it starts. Pack-a-Punch and Der Wunderfizz are in the village during the fight.' },
          { w: 831, t: 'Beat the Orda', d: 'Stay out of reach of its club slam (it downs you instantly). Shoot down its plague clouds and kill the flaming dogs it throws. When everyone calls out its glowing head, unload: that\'s the damage window. Long-range guns are safer than shotguns here.', tip: 'Zombies, Mimics and Manglers are the real danger. Stay alive first.', imgs: [{ src: I + 'orda.webp', cap: 'The Orda' }] },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Lost"',
        summary: 'Interact with three cassette tapes.',
        spots: [
          'Scientist Quarters: on a wooden shelf by the stairs down to the Arsenal.',
          'Equipment Storage: on a shelf left of the locked metal cabinet.',
          'Motor Pool Office: on the floor between a desk and a green filing cabinet.',
        ],
      },
      {
        id: 'bunny', tab: 'side', type: 'Free reward', name: 'Stuffed bunny crate',
        summary: 'Once all three reactors are on, go upstairs in the village Atrium and stare at the stuffed bunny at the end of the blocked balcony. It flies at you and takes you to a dark forest. Shoot the pink glowing bunny three times as it teleports around. A crate appears with loot and a free Juggernog.',
      },
      {
        id: 'head-safe', tab: 'side', type: 'Free reward', name: 'Kravchenko\'s safe',
        summary: 'Pick up a zombie head that sometimes appears around the map and put it on an empty stand in the Field Hospital. Power the stand with an Essence Trap holding any zombie: the head says a code and explodes. Use the code on the safe in Kravchenko\'s office for a free perk and intel (and some Hellhounds).',
      },
      {
        id: 'jump-pads', tab: 'side', type: 'Free reward', name: 'Free jump pads',
        summary: 'After the reactors are on, shoot the green button on a jump pad and follow the five arrows on its screen without stepping off. Do it on all six pads and they\'re free for the rest of the game.',
      },
    ],
  });
})();
