/* Mauer der Toten — Black Ops Cold War, Season Four */
(() => {
  const I = 'assets/img/bocw/mauer-der-toten/';
  const E = 'KLHziC8D428'; // MrRoflWaffles easter egg guide
  const P = 'VWb7NyeOtGI'; // Rager6amer Pack-a-Punch guide
  const C = 'PEIwtaUhGBU'; // MrRoflWaffles free CRBR-S
  const K = 'fcF3CezdZg8'; // MrRoflWaffles Klaus build and upgrades
  const M = 'qjBpQsfbudQ'; // LegoUnlocked CRBR-S mod kits
  const EV = { id: E, title: 'Mauer der Toten easter egg guide', ch: 'MrRoflWaffles', len: '14:23' };
  const PV = { id: P, title: 'How to Pack-a-Punch in Mauer der Toten', ch: 'Rager6amer', len: '4:27' };
  const CV = { id: C, title: 'Free CRBR-S wonder weapon', ch: 'MrRoflWaffles', len: '3:13' };
  const KV = { id: K, title: 'Build and upgrade Klaus', ch: 'MrRoflWaffles', len: '3:47' };

  const harvesters = [
    'Sewer Access: on the wall in the main room, near the XM4 wall-buy.',
    'West Berlin Street: against the metal shed with the Stoner 63 wall-buy.',
    'Alley: next to the dumpster.',
    'Ghost Station: near the small ticket window on the platform.',
    'Korber Rooftop: across from Speed Cola.',
    'Destroyed Penthouse: in the room right of the zipline to the Grocery Store.',
    'East Berlin Streets: in the alley between the bar and the electronics store.',
  ];
  const uranium = (w, where, again) => ({ w, t: again ? 'Next round, call the strike again and kill the Megaton' : 'Call the satellite strike and kill the Megaton', d: `Use the satellite computer (the Safe House one, or the one in the Military Tent next to Trials). A beam hits ${where}, dropping an Apex Megaton, Mimics and zombies. Clear the extras, then split the Megaton and kill both halves. Each drops a chunk of corrupted uranium and a five-minute timer starts.`, warn: 'If the timer runs out, the uranium explodes and the game ends. Watch this part of the video before you start.' });
  const device = w => ({ w, t: 'Turn both chunks into devices and send them down the zipline', d: 'Carry a chunk to a crafting bench (Military Tent or West Berlin Street) and craft a Uranium Device. Put it on one end of the zipline between the Destroyed Penthouse and the Korber Rooftop. Do the same with the other chunk on the other end. They slide together, explode and drop **cleansed uranium**, which stops the timer.', tip: 'Uranium slowly drains your health. Drop it (D-pad down) to recover, then pick it up again. Solo works the same, one chunk at a time.' });

  ZG.addMap({
    game: 'bocw', id: 'mauer-der-toten', order: 3,
    name: 'Mauer der Toten', dlc: 'Season Four', eeName: 'Tin Man Heart',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['CRBR-S', 'Klaus', 'Valentina boss'],
    blurb: 'A zombie-filled Berlin at Checkpoint Charlie, from rooftops down to the U-Bahn. Wake up Klaus the robot, crack a safe for the CRBR-S, build a warhead from two batches of cleansed uranium, and defeat a corrupted Valentina.',
    quick: [
      ['Main EE', 'Tin Man Heart (solo or co-op)'],
      ['Wonder weapon', 'CRBR-S (free safe quest, Mystery Box or Trials)'],
      ['Helper', 'Klaus the robot (build, upgrade, Hacking Helm)'],
      ['Boss', 'Valentina, across five areas'],
    ],
    intro: {
      start: 'Power needs two fuses from Tempests; Pack-a-Punch then has to be won in a fight. Cold War rules are explained in the basics on Die Maschine.',
      parts: 'Klaus is built from two parts and upgraded in the Garment Factory. The easter egg also needs his Hacking Helm, whose three parts are shot loose with the CRBR-S.',
      weapons: 'The CRBR-S comes out of a safe once you read three blacklight codes. The easter egg needs its blue Blazer mod kit.',
      'easter-egg': 'Two timed uranium runs at the end: read those steps before you start them. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Kill two Tempests for two fuses, fit them in the power room in the Maintenance Tunnel, then fight the zombies and a Disciple around Pack-a-Punch on West Berlin Street to unlock it.',
        video: PV,
        steps: [
          { w: 30, t: 'Zipline from the spawn roof to the Destroyed Penthouse, then the Korber Rooftop', d: 'You start on the 5th Floor Apartments roof. Each zipline door costs a little.' },
          { w: 46, t: 'Kill the Tempest in the electronics store for the first fuse', d: 'Go down past the Garment Factory to the alley and East Berlin Street. Through the bar with the yellow neon sign is the electronics store; a Tempest (an electric special zombie) spawns there.' },
          { w: 91, t: 'Go through the Ghost Station to the power room', d: 'Down at the purple U sign. Cross the tracks (trains kill you), go past Mule Kick to the Switch Control Room and on to the Maintenance Tunnel; the power room is on the left. Flip the switch: it fails.' },
          { w: 122, t: 'Kill the Tempest in the Sewer Access for the second fuse', d: 'At the back of the power room. Fit both fuses and flip the switch.' },
          { w: 152, t: 'Climb the rope up to West Berlin Street', d: 'Turn right out of the alley, over the cars past Checkpoint Charlie (the US flag). Pack-a-Punch is ahead, surrounded by floating zombies.' },
          { w: 182, t: 'Interact with Pack-a-Punch and win the fight', d: 'The floating zombies drop and attack, then a Disciple (skull-faced flyer) appears. Kill them all and the machine works.', tip: 'Kill stray zombies first and save a Ring of Fire for the Disciple.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'klaus', tab: 'parts', type: 'Buildable · Companion', name: 'Klaus', img: I + 'klaus.webp', color: 'gold',
        summary: 'A robot chained to a chair in the underground Safe House. Give him back his hands and a battery and he fights with you and revives you. His remote replaces your tactical: use it to send him somewhere. After a round he goes back to recharge; calling him again costs 2,000 at his chair or a radio (Military Tent, Korber Rooftop, West Berlin Street).',
        facts: [['Parts', '2'], ['Build at', 'His chair in the Safe House'], ['Recall', '2,000 essence']],
        video: KV,
        parts: [
          { w: 16, name: 'Robotic hands', area: 'Hotel Room 305', spots: ['Put Brain Rot on any gun at Pack-a-Punch (no upgrade needed) and turn a zombie by the barricaded door: it tears the barricade down. The hands are around the neck of the body on the bed.'] },
          { w: 32, name: 'Battery', area: 'Anywhere', spots: ['Dropped by the first Krasny Soldat (the armoured flamethrower soldier) you kill. They start around round 10.'] },
        ],
        blocks: [{ warn: 'Skip the Mister Peeks bunny side quest around round 10: it can mess up the Krasny Soldat spawns.' }],
      },
      {
        id: 'klaus-upgrade', tab: 'parts', type: 'Upgrade', name: 'Klaus upgrades', color: 'gold',
        summary: 'Three tiers, done at the Upgrade Station in the Garment Factory. The easter egg only needs the first tier. Each tier gives him a better gun (and new clothes).',
        video: KV,
        steps: [
          { w: 48, t: 'Send Klaus to the locker with a 0 above it and take the blacklight', d: 'In the Switch Control Room. Use the blacklight with D-pad up (5 on PC). Every player can take one.', needs: ['klaus'] },
          { w: 64, t: 'Dig in the Death Strip for a satellite dish', d: 'The middle of the map, between the guard towers. Dig the piles on both sides.' },
          { w: 64, t: 'Put the dish in the Upgrade Station in the Garment Factory' },
          { w: 80, t: 'Have Klaus kill about 45 zombies in front of the station', d: 'Call him back if he leaves. The light on top turns green.' },
          { w: 80, t: 'Send him to the station and survive a one-minute lockdown', d: 'He climbs in. Keep him alive. Tier 1 done: he gets a Pack-a-Punched XM4.' },
          { w: 95, t: 'Find two floppy disks with the blacklight', d: 'Shine it on metal boxes at six spots; the right two show a small robot head. Send Klaus to those and he breaks them open.', list: [
            'West Berlin Street, next to a Klaus radio.',
            'The Blasted Suite, up the rope.',
            'The Maintenance Tunnel, next to the power room.',
            'The Ghost Station, on a wall next to a door.',
            'The Hotel Lounge (Stamin-Up), on the left wall.',
            'Across the zipline, on the wall next to a bookcase.',
          ] },
          { w: 187, t: 'Send him into the station and add a disk, twice', d: 'Interact while he\'s inside. Each disk is one tier.' },
        ],
      },
      {
        id: 'helm', tab: 'parts', type: 'Buildable · Quest', name: 'Hacking Helm', color: 'storm',
        summary: 'Headgear for Klaus that lets him hack the Requiem computer in the easter egg. Shoot three electronic parts loose with the CRBR-S (any variant). You can build it early.',
        facts: [['Parts', '3 (shot loose with the CRBR-S)'], ['Build at', 'On Klaus while he sits in his chair']],
        video: EV,
        parts: [
          { w: 188, name: 'Antenna', area: 'Apartment Rooftop', spots: ['Shoot the metal electrical pylon with the CRBR-S to knock it over.'] },
          { w: 203, name: 'Electronic boards', area: 'Ghost Station', spots: ['A metal box above the ticket window sign, on the platform with the stairs. Shoot it with the CRBR-S.'] },
          { w: 218, name: 'Transistor', area: 'Electronics store', spots: ['Shoot the radios and cassette players with the CRBR-S until one drops it.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'crbrs', tab: 'weapons', type: 'Wonder weapon', name: 'CRBR-S', img: I + 'crbrs.webp', color: 'lightning',
        summary: 'A floating orb next to the gun copies every shot for free. Zombies sometimes drop mod kits: pick one up for the Blazer (blue beam), Diffuser (green shotgun) or Swarm (yellow homing blasts), with full ammo. When the kit\'s ammo runs out it goes back to the base gun with what that had left. The same kit again refills it.',
        facts: [['Get it', 'Free safe quest, Mystery Box or a Legendary Trials reward'], ['Upgraded', 'CRBR-TRN Duality'], ['Mod kits', 'Blazer · Diffuser · Swarm']],
        video: CV,
        steps: [
          { w: 15, t: 'Power and Pack-a-Punch on', needs: ['power-pap'] },
          { w: 30, t: 'Open Hotel Room 305 with Brain Rot', d: 'Same as Klaus\'s hands. The safe is in that room.', needs: ['klaus'] },
          { w: 60, t: 'Build Klaus and take the blacklight from the 0 locker', needs: ['klaus', 'klaus-upgrade'] },
          { w: 91, t: 'Garment Factory: find two numbers with the blacklight', d: 'Stand close to the walls; numbers can be high up or near the floor.' },
          { w: 106, t: 'Service Passage: find two more' },
          { w: 121, t: 'Grocery Store: find the last two' },
          { w: 137, t: 'Enter all three pairs in the safe in that order', d: 'Garment Factory, then Service Passage, then Grocery Store, each left to right. It\'s fiddly. Confirm with the prompt and take the CRBR-S.', imgs: [{ src: I + 'safe.webp', cap: 'The CRBR-S in the safe' }] },
          { w: [M, 232], t: 'Pick up mod kits as they drop', d: 'Kill zombies with the CRBR-S. The easter egg needs the **Blazer** (blue).', imgs: [
            { src: I + 'blazer.webp', cap: 'The Blazer burning through a metal wall' },
            { src: I + 'diffuser.webp', cap: 'The Diffuser' },
          ] },
        ],
        blocks: [{ tip: 'Trials: a teammate who already has one can swap theirs for the reward and drop it for you.' }],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Tin Man Heart',
        summary: 'Open a secret lab behind the sewer, fill three canisters with Tempest souls, stop a train with Klaus for a warhead and keycard, hack a satellite weapon, make two batches of cleansed uranium against the clock, defeat Valentina and protect Klaus to the end.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, ending cutscene'],
          ['Boss', 'Valentina, then escort Klaus'],
        ],
        prep: [
          { t: 'Power and Pack-a-Punch on', needs: ['power-pap'] },
          { t: 'Klaus built, and upgraded to tier 1 before the train step', needs: ['klaus', 'klaus-upgrade'] },
          { t: 'The CRBR-S with the Blazer mod kit', needs: ['crbrs'] },
          { t: 'The Hacking Helm on Klaus (any time before step 11)', needs: ['helm'] },
          { t: 'For the boss: triple Pack-a-Punch, perks, armour; Death Machines are great', d: 'More CRBR-S help too: the Mystery Box and Trials can give them.' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 249, t: 'Send Klaus to the brick wall at the far end of the Sewer Access', d: 'Call him at a radio. He punches it down, showing a metal wall.' },
          { w: 264, t: 'Melt the metal wall with the CRBR-S Blazer', d: 'Keep shooting until it\'s gone. Go into the secret lab: a wave of enemies starts. Once it\'s over, the orange barriers on two machines drop.', imgs: [{ src: I + 'blazer.webp', cap: 'The Blazer melting the wall' }] },
          { w: 280, t: 'Put the three empty canisters into three Essence Harvesters', d: 'Take them from the central machine. Harvesters are boxes with green lights; three of these seven spots are used each game:', list: harvesters },
          { w: 346, t: 'Shoot open the cabinet in the lab and take a lure', d: 'Use the CRBR-S. You can hold two lures; more appear in the cabinet (next round if it\'s empty). In co-op, a teammate takes one too.' },
          { w: 361, t: 'Fill a canister with Tempest souls and bring it back', d: 'Throw the lure by a harvester: three Tempests spawn. Kill them there (three is enough solo, more in co-op) until the canister turns purple. Carry it back to the lab machine; Manglers and Tormentors attack on the way.', tip: 'You can\'t normally mantle while carrying it, but you can climb the small ledge into the lab if you push right up against it.' },
          { w: 407, t: 'Do the same for the other two canisters' },
          { w: 437, t: 'Upgrade Klaus to tier 1 if you haven\'t', needs: ['klaus-upgrade'] },
          { w: 514, t: 'Stop the train with Klaus', d: 'In the Switch Control Room, flip the lever. Then send Klaus onto the far tracks, opposite Mule Kick: he catches the train.' },
          { w: 544, t: 'Grab the warhead and the keycard from the train', d: 'The warhead is in a crate; the keycard is next to some intel (take both). Be quick before the train leaves; missed it? Flip the lever again next round.' },
          { w: 559, t: 'Put the warhead on the central machine in the lab' },
          { w: 559, t: 'Use the keycard on the Requiem computer and browse the files', d: 'Browse four or five times until it offers "activate satellite". Don\'t activate it yet. Klaus\'s Hacking Helm gets you past the security.', needs: ['helm'] },
          uranium(589, 'Checkpoint Charlie'),
          device(621),
          { w: 683, t: 'Bring the cleansed uranium to the lab machine' },
          uranium(699, 'the Apartment Rooftop this time', true),
          device(699),
          { w: 715, t: 'Get ready, then put the second uranium in', d: 'Placing it starts the boss fight.' },
          { w: 747, t: 'Defeat Valentina', d: 'Break her blue shield, then damage her. Every 20% of her health she moves (Destroyed Penthouse, East Berlin Streets, Checkpoint Charlie, West Berlin Street, then back to the lab), which gives you about 45 seconds to rearm.', list: [
            'Three orange orbs above her: a volley that shreds armour. Dodge it.',
            'A ring of floating zombies: she drains them to heal. Shoot them.',
            'A blue mist on your screen: hide behind something out of her sight, or it kills you.',
          ], imgs: [{ src: I + 'valentina.webp', cap: 'Valentina beaten' }] },
          { w: 840, t: 'Protect Klaus as he walks the warhead into the portal', d: 'Zombies pour out of the portal. If Klaus dies, the game ends.', imgs: [{ src: I + 'klaus-warhead.webp', cap: 'Klaus carrying the warhead' }] },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Amoeba"',
        summary: 'Interact with three cassette tapes.',
        spots: [
          'Garment Factory: on top of a mannequin.',
          'East Berlin Streets: on a shelf in the electronics store.',
          'Blasted Suite: next to a vase on a cabinet.',
        ],
      },
      {
        id: 'mister-peeks', tab: 'side', type: 'Free reward', name: 'Mister Peeks nightclub',
        summary: 'Collect six bunny parts: a desk in Hotel Room 304, a tyre stack in the Alley, a couch near Juggernog in the bar, a cardboard box in the Sewer Access, a shelf in the department store, and a shelf in front of the Grocery Store counter. You\'re taken to a nightclub to fight three waves (with a Mangler, a Mimic and a Disciple). Win and pick one of three doors for a reward. You can go back twice more: 15 rounds after each visit, shoot the Mister Peeks bunny that appears in a window of the Hasenbau building.',
      },
      {
        id: 'rooftop-targets', tab: 'side', type: 'Free reward', name: 'Rooftop shooting gallery',
        summary: 'After the power is on, interact with the file on the Apartment Rooftop that looks over the Königshaus and Korber signs. Targets move around the skyline; shoot them all in time for an Aether Tool (a free rarity upgrade).',
      },
    ],
  });
})();
