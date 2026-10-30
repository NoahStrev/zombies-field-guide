/* Liberty Falls — Black Ops 6 launch map */
(() => {
  const I = 'assets/img/bo6/liberty-falls/';
  const SE = t => ({ id: 'zerbyzpOakM', title: 'Every side Easter egg in Liberty Falls', ch: 'MrDalekJD', len: '14:03', t }); // MrDalekJD side Easter eggs
  const E = 'iNSPFb5AIz8'; // MrRoflWaffles easter egg guide
  const J = '6giOql4srfQ'; // MrRoflWaffles Jet Gun guide
  const EV = { id: E, title: 'Liberty Falls easter egg guide', ch: 'MrRoflWaffles', len: '8:24' };
  const JV = { id: J, title: 'Free Jet Gun on Liberty Falls', ch: 'MrRoflWaffles', len: '4:09' };

  ZG.addMap({
    game: 'bo6', id: 'liberty-falls', order: 1,
    name: 'Liberty Falls', dlc: 'Launch map', eeName: 'Bye-Bye, Dark Aether',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Jet Gun', 'Aether storms', 'Strauss Counter'],
    blurb: 'A small West Virginia town overrun after the Project Janus breach, with a church half-swallowed by the Dark Aether. Build the Jet Gun, help the trapped scientist Panos fill two Aether canisters from captured bosses, and power his machine.',
    quick: [
      ['Main EE', 'Bye-Bye, Dark Aether (solo or co-op)'],
      ['Wonder weapon', 'Jet Gun (free build), Ray Gun (box)'],
      ['Key items', 'LTG device, two Aether canisters, Strauss Counter'],
      ['Boss', 'Three waves in the church, ending with an Abomination'],
    ],
    intro: {
      start: 'No power switch here: open the doors up the hill to the church, where Pack-a-Punch is. New to Black Ops 6 zombies? Read the basics first.',
      weapons: 'The Jet Gun is needed for the easter egg. It\'s free to build from three parts around town.',
      'easter-egg': 'Two rounds of "defend the device, then trap a boss" make up most of it. The canisters are on a timer once filled. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'bo6-basics', tab: 'start', type: 'Primer', name: 'Black Ops 6 zombies basics', short: 'BO6 basics',
        summary: 'Black Ops 6 builds on Cold War\'s rules and brings back some classics. This applies to every Black Ops 6 map.',
        blocks: [
          { list: [
            'Points are **Essence**. Zombies also drop **Salvage**, spent at the **Crafting Table** (grenades, scorestreaks, Mutant Injections) and the **Arsenal** (armour and weapon rarity).',
            '**Armour** comes in three tiers. Guns have a rarity, from Common to Legendary, that raises damage.',
            '**Pack-a-Punch** has three levels (5,000, then 15,000, then 30,000). Ammo mods such as Dead Wire or Brain Rot add an elemental effect.',
            '**GobbleGums** are back: pick a pack before the match and use the machines on the map.',
            'Your **Field Upgrade** recharges over time. Perks, field upgrades and ammo mods have **Augments** that you research outside matches.',
            'You can dive and slide in any direction (omnimovement).',
            '**Directed Mode** (chosen in the lobby) marks each quest step on screen and is more forgiving. The standard mode is the full version.',
            '**Exfil**: from round 10 you can call a helicopter and leave.',
          ] },
        ],
      },
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'There\'s no power to turn on. Open the doors from spawn up the hill to the church; Pack-a-Punch is inside, in the part taken over by the Dark Aether.',
        video: EV,
        steps: [
          { w: 0, t: 'Open the way from spawn up to the church', d: 'Pack-a-Punch is inside. The machine for the easter egg is on the right side of the church.', imgs: [{ src: I + 'sdg.webp', cap: 'Panos\'s machine in the church' }] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'jet-gun', tab: 'weapons', type: 'Wonder weapon', name: 'Jet Gun', aka: 'Thrustodyne M23', img: I + 'jet-gun.webp', color: 'wind',
        summary: 'Hold fire to suck zombies into its turbine; it no longer overheats and blows up like on TranZit. Its alternate fire makes a big explosion for clearing crowds. Build it for free, or get it from the Mystery Box.',
        facts: [['Get it', 'Free build in the motel, or the Mystery Box'], ['Upgraded', 'Scramjet'], ['Build at', 'Room 202, upstairs in the motel']],
        video: JV,
        steps: [
          { w: 64, t: 'Take the water valve outside the flower shop', d: 'On Washington Avenue.' },
          { w: 79, t: 'Break the breaker in Liberty Lanes and fit the valve', d: 'In the bowling alley. Shoot or melee it open, then put the valve in.' },
          { w: 109, t: 'Hold interact to build up the water pressure', d: 'It takes a while and zombies come at you. Best done at the end of a round with one or two zombies left (or a teammate holding them). The pressure gauge pops out: take it.' },
          { w: 126, t: 'Blast open the radio store with a Mangler cannon', d: 'The radio store is on Riverside near the comic shop. Use a Mutant Injection or a Mangler Cannon crafted with salvage at a Crafting Table, or bait a Mangler\'s shot into the door.' },
          { w: 142, t: 'Search the junk piles inside for the wires', d: 'Piles give salvage, a jump-scaring rat, or the electrical wires.' },
          { w: 159, t: 'Kill the Groundskeeper in the cemetery and open his shed', d: 'He wears a red shirt and overalls. He drops the shed key; the shed is in the back corner of the Groundskeeper\'s Yard and holds the handbrake.' },
          { w: 192, t: 'Build the Jet Gun in motel room 202', d: 'Upstairs in the motel; zombies burst out of the room when you get close. It\'s a dead end, so don\'t bring a big horde in.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Bye-Bye, Dark Aether',
        summary: 'Build a device for the trapped scientist Panos, use it at two Aether storms to pull through a boss each time, kill each boss in a trap to fill an Aether canister, then defend his machine in the church.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Achievement, calling card, Ray Gun skin'],
          ['Boss', 'Three waves in the church (Manglers, then an Abomination)'],
        ],
        prep: [
          { t: 'The Jet Gun', needs: ['jet-gun'] },
          { t: 'For the end: armour level 2+, Pack-a-Punch level 2+, Mutant Injections and scorestreaks' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 0, t: 'Interact with the machine in the church', d: 'On its side panel, on the right side of the church. Panos starts talking.', imgs: [{ src: I + 'sdg.webp', cap: 'The machine' }] },
          { w: 203, anyList: 'Parts in any order', t: 'Suck three parts out of reach with the Jet Gun', needs: ['jet-gun'], list: [
            'In the church: the item floating on the left side of the balcony.',
            'Washington Avenue: in the open window of the barber shop. Go right out of the church onto the roof and jump on the van to see it.',
            'Olly\'s Comics: up in the ceiling above the middle counter.',
          ], imgs: [
            { src: I + 'part-panos.webp', cap: 'In the church' },
            { src: I + 'part-pelletier.webp', cap: 'In the barber shop window' },
            { src: I + 'part-moline.webp', cap: 'In the comic shop ceiling' },
          ] },
          { w: 233, t: 'Build the LTG on the "Alamo" rooftop', d: 'Head up towards the church, mantle onto the roof on the left and take the zipline; the bench is on the left side of the roof.', imgs: [{ src: I + 'ltg-bench.webp', cap: 'The LTG bench' }] },
          { w: 250, t: 'Take an Aether canister and put it on a trap pad', d: 'From the machine in the church. You can only walk while carrying it. Put it on the pad of a Dark Aether trap near the storm you\'ll use.' },
          { w: 265, t: 'Place the LTG under an Aether storm and defend it for a minute', d: 'There\'s a small purple storm in the cemetery and one at Riverside. Zombies run into the device to damage it; Heavies and Manglers join in. At the end a boss comes through: an Abomination or a Mangler.', imgs: [
            { src: I + 'storm-riverside.webp', cap: 'The Riverside storm' },
            { src: I + 'storm-graveyard.webp', cap: 'The cemetery storm' },
          ], tip: 'If the device breaks, start it again after the round.' },
          { w: 280, t: 'Kill the boss inside the trap', d: 'Weaken it first, lure it onto the trap where the canister is, turn the trap on and kill it while it\'s stunned. Its energy fills the canister.' },
          { w: 297, t: 'Rush the canister back to the machine', d: 'The energy fades after about a minute and a half. You get a **Strauss Counter** (it replaces your tactical).', warn: 'If the boss dies elsewhere or time runs out, summon another from the LTG after the round.' },
          { w: 327, anyList: 'Projectors in any order', t: 'Set the three projectors with the Strauss Counter', d: 'One is by the Hilltop Stairway behind Fuller\'s Liberty Lanes, one in the Groundskeeper\'s Yard backyard near the drop to Hill Street, and one on the Yummy Freeze roof (drop from The Alamo). Turn each projector on, then hold out the Strauss Counter next to it and set the projector\'s light like this:', list: [
            'Counter shows green: set the projector to red.',
            'Counter shows yellow: set it to yellow.',
            'Counter shows red: set it to green.',
          ], imgs: [
            { src: I + 'proj-hill.webp', cap: 'On the grass by the stairs up to the church, behind the bowling alley' },
            { src: I + 'proj-yard.webp', cap: 'In the Groundskeeper\'s Yard' },
            { src: I + 'proj-yummy.webp', cap: 'On the Yummy Freeze roof (drop from the Alamo / bank roof)' },
          ], tip: 'The wiki says to match the colours, but most guides (and the video) swap red and green as above.' },
          { w: 372, t: 'Take the second canister by the gas station', d: 'When all three are right, purple beams hit a container by the Pump & Pay gas station and it charges. Pick the canister up.', imgs: [{ src: I + 'canister.webp', cap: 'The container with the second canister' }] },
          { w: 387, t: 'Repeat at the other storm', d: 'Pick up your LTG, put the canister on a trap near the other storm, place the LTG there and defend it. Kill the boss in the trap and rush the canister to the machine.' },
          { w: 419, t: 'Get ready', d: 'Mutant Injections, scorestreaks, at least two Pack-a-Punch levels, better rarity and armour level 2 or more.' },
          { w: 434, t: 'Start the machine and survive', d: 'Both church exits close. Kill zombies to charge the orb above the machine. Three waves: super-sprinters, an elite Mangler, then an Abomination at the end. Save your Mutant Injection or scorestreaks for the Abomination if you\'re solo.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Destroy Something Beautiful"',
        summary: 'Interact with three Mister Peeks headphones.',
        video: SE(732),
        spots: [
          'Between the bowling alley and the motel, on the ground by the fence and railing.',
          'In the church, on the end of a wooden bench.',
          'Washington Avenue, under a wooden bench along the iron fence.',
        ],
      },
      {
        id: 'bowling', tab: 'side', type: 'Free reward', name: 'Mister Peeks bowling',
        summary: 'Shoot five bowling shoes: on the Pump & Pay counter, on a shelf in the hardware store opposite Olly\'s Comics, under a chair in the open window left of the AK-74 wall-buy on Hill Street, hanging from a tree right of the cemetery armour wall-buy, and on a casket in the funeral home. You\'re sent to the bowling alley to bowl at zombies for two minutes; the better your score, the better the prize. Do it three times in one game to unlock the song "Echo".',
        video: SE(210),
      },
      {
        id: 'deadshot', tab: 'side', type: 'Free perk', name: 'Free Deadshot Daiquiri',
        summary: 'Past the north end of the cemetery, five soda cans sit on a fence out of the map. Shoot all five without missing for a free Deadshot Daiquiri.',
        video: SE(160),
      },
      {
        id: 'zombie-head', tab: 'side', type: 'Free reward', name: 'Zombie head on the church steeple',
        summary: 'A zombie head sits on the tip of the church steeple right above Melee Macchiato. Blow it up with an explosive or a Molotov: zombies rain from the sky and die on landing, dropping Essence, Salvage and scorestreaks. When it stops, an Aether Tool appears: Uncommon before round 10, Rare up to 29, Epic up to 49, Legendary from 50.',
        video: SE(124),
      },
      {
        id: 'aetherella', tab: 'side', type: 'Free reward', name: 'Aetherella figures (invincible laser form)',
        summary: 'Suck up all eight little Aetherella figures with the Jet Gun\'s main fire. The player who collects the last one can turn into the Aetherella statue for a while: you can\'t be hurt, and a laser fires itself at zombies\' heads.',
        video: SE(585),
        spots: [
          'Four inside Olly\'s Comics.',
          'On the neon Motel sign, behind the Office sign on East Main Street.',
          'On an air conditioning unit across from the Dark Aether Field Generator on Hill Street.',
          'Drop from The Alamo onto the Yummy Freeze roof: behind the right-hand of the two air vents on the building opposite.',
          'On the window ledge of the church, on the side opposite Melee Macchiato.',
          'Lying flat under the "L" of "Lanes" on the Liberty Lanes sign on West Main Street, nearest the old bus.',
        ],
        needs: ['jet-gun'],
      },
      {
        id: 'vending', tab: 'side', type: 'Free reward', name: 'Vending machine punch',
        summary: 'Crouch and punch the vending machine in the Motor Lodge (next to the barrier into the Motor Lodge Alley) once a round for a random prize: a snack you can\'t use, Essence, a free perk or even a Ray Gun. A punch with Melee Macchiato breaks it for good, spraying out Essence and Salvage.',
        video: SE(19),
      },
      {
        id: 'car-trunk', tab: 'side', type: 'Free reward', name: 'Mister Peeks in a car boot',
        summary: 'Mister Peeks sits in the back seat of one of three cars. Blow that car up with a Mangler Cannon (or a Mutant Injection) and something flies out of the boot. Five rounds later he moves to another of the cars, so you can do it three times.',
        video: SE(650),
        spots: [
          'In front of the Crafting Table in the Groundskeeper\'s Yard.',
          'Right of the GobbleGum machine on Hill Street.',
          'In a parking spot in Backstreet Parking, next to Olly\'s Comics.',
        ],
      },
      {
        id: 'blood-pool', tab: 'side', type: 'Free reward', name: 'Blood pool',
        summary: 'Throw three Semtex into the swimming pool of blood left of the GobbleGum machine on West Main Street. A red orb flies out with Salvage and equipment. You can repeat it every five rounds, twice more; the third time also gives a Fire Sale.',
      },
      {
        id: 'dance-party', tab: 'side', type: 'Fun', name: 'Zombie dance party',
        summary: 'Use both telescopes on Riverside (50 Essence each) and point them at the lone zombie dancing on a cliff. A party starts on the nearby bus: every zombie around it dances and ignores you for a full minute.',
        video: SE(338),
      },
      {
        id: 'graves', tab: 'side', type: 'Free reward', name: 'Grave digging',
        summary: 'A barrel sits on an unreachable ledge west of the Washington Ave rooftops. Destroy it with a scorestreak and a shovel drops down for you. Dig up the cemetery graves for prizes; digging them all gives Essence.',
      },
      {
        id: 'napalm-church', tab: 'side', type: 'Map tip', name: 'Church napalm trap',
        summary: 'Shoot the two candle stands either side of Pack-a-Punch with a Napalm Burst gun. Purple fire pools spread around the Dark Aether church and a fire trap appears in the middle, burning zombies (and you) that walk through. Handy during the boss fight, which happens in the church.',
        video: SE(698),
      },
      {
        id: 'bank-vault', tab: 'side', type: 'Free reward', name: 'Bank vault',
        summary: 'Three Post-it notes each give two digits of the six-digit vault code in Savings and Loan. Enter it and the vault opens for 45 seconds: use the Loot Keys that elite enemies (Manglers, Abominations) drop on the deposit boxes. Better keys mean better loot, from Aether Tools and Pack-a-Punch crystals up to wonder weapons.',
        spots: [
          'Savings and Loan: on the counter right behind the vault.',
          'Olly\'s Comics: under the desk in the middle, on the left.',
          'Liberty Lanes: shoot the bucket of bottles on the snack counter to reveal it.',
        ],
        video: SE(762),
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each. The Fire Sale only appears once you have the other seven.',
        video: SE(60),
        spots: [
          'Bonus Points: on the air conditioner outside Olly\'s Comics, in the alley left of the ammo cache and Arsenal.',
          'Max Ammo: at the base of the yellow arch bridge behind the exfil radio by Pump & Pay.',
          'Double Points: on a support beam of the Washington Ave water tower.',
          'Full Power: out of the map between a wrecked van and a Project Janus truck, behind the bus by Liberty Lanes.',
          'Insta-Kill: next to the brick chimney behind the church, left of the armour wall-buy.',
          'Max Armor: under a service cart in an open window of The Grease Trap on Washington Ave, left of the barrier to the patio.',
          'Nuke: in the big chandelier in the Savings & Loan, seen through the rooftop skylights.',
          'Fire Sale: in a bin left of the park benches next to PhD Flopper on the Hilltop Stairs.',
        ],
      },
    ],
  });
})();
