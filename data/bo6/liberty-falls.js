/* Liberty Falls — Black Ops 6 launch map */
(() => {
  const I = 'assets/img/bo6/liberty-falls/';
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
        spots: [
          'Between the bowling alley and the motel, on the ground by the fence and railing.',
          'In the church, on the end of a wooden bench.',
          'Washington Avenue, under a wooden bench along the iron fence.',
        ],
      },
      {
        id: 'bowling', tab: 'side', type: 'Free reward', name: 'Mister Peeks bowling',
        summary: 'Shoot five bowling shoes: on the Pump & Pay counter, on a shelf in the hardware store opposite Olly\'s Comics, under a chair in the open window left of the AK-74 wall-buy on Hill Street, hanging from a tree right of the cemetery armour wall-buy, and on a casket in the funeral home. You\'re sent to the bowling alley to bowl at zombies for two minutes; the better your score, the better the prize.',
      },
      {
        id: 'deadshot', tab: 'side', type: 'Free perk', name: 'Free Deadshot Daiquiri',
        summary: 'Past the north end of the cemetery, five soda cans sit on a fence out of the map. Shoot all five without missing for a free Deadshot Daiquiri.',
      },
    ],
  });
})();
