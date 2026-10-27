/* TranZit — Black Ops II launch map */
(() => {
  const I = 'assets/img/bo2/tranzit/';
  const E = 'eNqV0nHenSY'; // MrDalekJD easter egg guide (both sides)
  const A = 'Wy01NuWATIM'; // AceOfSpades ultimate guide
  const EV = { id: E, title: 'TranZit easter egg guide (Maxis and Richtofen)', ch: 'MrDalekJD', len: '14:04' };
  const AV = { id: A, title: 'TranZit: Ultimate Guide', ch: 'AceOfSpades', len: '10:10' };
  const lamps = [
    'Outside the Bus Depot.',
    'Outside the shed at the Diner.',
    'On the path from the Diner to the Farm.',
    'On the path through the cornfields.',
    'On the path from the cornfields to the Power Station.',
    'Outside the Hunter\'s Cabin, between the Power Station and Town.',
    'Outside Town, near the bridge.',
    'Between the bridge and the Bus Depot.',
  ];
  ZG.addMap({
    game: 'bo2', id: 'tranzit', order: 1,
    name: 'TranZit', dlc: 'Base game', eeName: 'Tower of Babble',
    hero: I + 'hero.webp', players: { text: 'Maxis side needs 2+ players', warn: true },
    tags: ['Jet Gun', 'Turbine', 'Bus'],
    blurb: 'A bus route through a ruined countryside, with deadly fog between the stops. Power the pylon in the cornfields for either Maxis or Richtofen.',
    quick: [
      ['Main EE', 'Tower of Babble (Maxis or Richtofen side)'],
      ['Players', 'Maxis: 2+. Richtofen: best with 4, solo only as Stuhlinger'],
      ['Wonder weapon', 'Jet Gun (buildable)'],
      ['Key items', 'Turbine, NAV table, EMP Grenades'],
    ],
    intro: {
      start: 'The bus (driven by a robot, T.E.D.D.) links the stops. Walking through the fog spawns Denizens. The Turbine powers doors and perks anywhere, and the power switch has to be built first.',
      parts: 'Every buildable here has fixed or few spawn spots. The Turbine and the NAV table matter most for the quest.',
      weapons: 'The Jet Gun sucks zombies into its rotors, but it overheats and breaks. The Richtofen side needs it.',
      'easter-egg': 'Two separate checklists: pick Maxis or Richtofen for the game. Doing one side locks it on your profile until you do the other. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'getting-around', tab: 'start', type: 'Map mechanic', name: 'The bus, the fog and lamp-post teleporters', short: 'Getting around', img: I + 'layout.webp',
        summary: 'The bus visits each stop in a loop: Bus Depot, Diner, Farm, Power Station, Town. Between stops is thick fog where Denizens jump on you. Under a lit lamp post, a Denizen digs a teleporter hole you can jump into.',
        video: AV,
        steps: [
          { w: 535, t: 'Lamp posts need power', d: 'Either the power switch or a Turbine placed next to the post.' },
          { w: 551, t: 'Lead a Denizen under a lit lamp post to make a teleporter', d: 'The eight lamp posts:', list: lamps, imgs: [{ src: I + 'denizen-portal.webp', cap: 'A Denizen teleporter' }] },
        ],
        blocks: [{ tip: 'The lava on the roads burns you. Jugg helps, but don\'t stand in it.' }],
      },
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Build the Turbine in spawn, build and flip the power switch under the Power Station, then open the bank vault in Town with grenades and power its last door with a Turbine to reach Pack-a-Punch, which you also build.',
        video: AV,
        steps: [
          { w: [E, 45], t: 'Build the Turbine and use it to leave spawn', d: 'Place it in the corner by the workbench and both doors out of the Bus Depot open for free.', needs: ['turbine'] },
          { w: 20, t: 'Build the power switch at the Power Station and turn it on', d: 'The power room is under the Power Station: the way in is through the outhouse.', needs: ['power-switch'], imgs: [{ src: I + 'outhouse.webp', cap: 'The outhouse entrance' }] },
          { w: 55, t: 'In Town, open the bank and blow open both vault doors', d: 'Throw a grenade at each vault door inside. A third door, to a stairwell, stays shut until it gets power.' },
          { w: 61, t: 'Power the bank door from the Power Station', d: 'Drop down through the outhouse: a matching door is right behind you. Place a fresh Turbine next to it (keep the last zombie of the round away from it). Hurry back to the bank: the stairs are down.', imgs: [{ src: I + 'turbine-door.webp', cap: 'A Turbine powering a door' }] },
          { w: 76, t: 'Build Pack-a-Punch in the room under the bank', needs: ['pap-parts'], d: 'Upgrades cost 5,000. If the Turbine dies, the door closes once everyone is out; place a new one to reopen it.', imgs: [{ src: I + 'pap.webp', cap: 'Pack-a-Punch' }] },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'turbine', tab: 'parts', type: 'Buildable · Power', name: 'Turbine', img: I + 'turbine.webp', color: 'storm',
        summary: 'A portable power source. It opens powered doors, runs perks and lamp posts, and gets the bus going again after the Avogadro stops it. It wears out, so pick up a new one when it breaks.',
        facts: [['Parts', '3 (always the same spots)'], ['Build at', 'The table in the corner of the Bus Depot']],
        video: AV,
        parts: [
          { w: 0, name: 'Fan', area: 'Bus Depot', spots: ['On the bench next to the buildable table.'] },
          { w: 0, name: 'Mannequin', area: 'Bus Depot', spots: ['Leaning on the map in the middle of the room.'] },
          { w: 0, name: 'Rudder', area: 'Bus Depot', spots: ['Next to the M14 wall-buy.'] },
        ],
      },
      {
        id: 'power-switch', tab: 'parts', type: 'Buildable · Power', name: 'Power switch', color: 'lightning',
        summary: 'Three parts, all around the power room under the Power Station. Build it at the table in the power room.',
        facts: [['Parts', '3'], ['Build at', 'The power room table']],
        video: { id: E, title: 'TranZit easter egg guide (Maxis and Richtofen)', ch: 'MrDalekJD', len: '14:04' },
        parts: [
          { w: 152, name: 'Panel', area: 'Power Station', spots: ['Against the wall on the left as soon as you drop in.', 'On the walkway in the middle.', 'In the corner of the power room where you build the switch.'] },
          { w: 182, name: 'Handle', area: 'Power Station', spots: ['Wedged between crates.', 'On the desk on the right.', 'On the desk on the left, next to the buildable table.'] },
          { w: 198, name: 'Hand', area: 'Power Station', spots: ['On the floor in front of the staircase.', 'On the floor at the end of the walkway to the left.', 'To the right of the stairs down into the power room.'] },
        ],
      },
      {
        id: 'pap-parts', tab: 'parts', type: 'Buildable · Pack-a-Punch', name: 'Pack-a-Punch parts', short: 'PaP parts', color: 'gold',
        summary: 'Three parts in the hallway under the bank in Town. Build the machine at the table at the end of the hallway.',
        facts: [['Parts', '3'], ['Build at', 'End of the hallway under the bank']],
        video: AV,
        parts: [
          { w: 76, name: 'Platform', area: 'Under the bank', spots: ['Next to the entrance door.', 'On a pallet truck by a window barrier.', 'On another pallet truck near the buildable table.'] },
          { w: 89, name: 'Battery', area: 'Under the bank', spots: ['Just inside the entrance door.', 'On the floor near the buildable table.', 'On the crates next to the buildable table.'] },
          { w: 95, name: 'Machine', area: 'Under the bank', spots: ['Near the entrance door.', 'In the corner of the hallway.'] },
        ],
      },
      {
        id: 'nav-table', tab: 'parts', type: 'Buildable · Quest', name: 'NAV table', img: I + 'nav-table.webp', color: 'gold',
        summary: 'Four parts, built under the pylon in the cornfields. Build it before starting either side of the quest; it\'s also where the Buried navcard goes for the story that links the three maps.',
        facts: [['Parts', '4'], ['Build at', 'Under the pylon in the cornfields, against the fence']],
        video: EV,
        parts: [
          { w: 90, name: 'Meteor', area: 'Bus Depot', spots: ['In the crevice in the broken wall, opposite the bus.'] },
          { w: 136, name: 'Wooden board', area: 'Tunnel or Power Station', spots: ['In the tunnel, near the M16 wall-buy.', 'On the catwalk above the lava at the Power Station.'] },
          { w: 229, name: 'Radio', area: 'Diner or Nacht der Untoten', spots: ['Diner: on top of a cabinet in the room with the Mystery Box.', 'Nacht der Untoten (the old bunker in the cornfields opposite the pylon): on a table.'] },
          { w: 275, name: 'Power box', area: 'Farm or Town', spots: ['Farm: on the wall left of the fridge in the farmhouse.', 'Town: leaning on the dumpster by the Mystery Box spot at the back of town.'] },
        ],
      },
      {
        id: 'zombie-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Zombie Shield', img: I + 'shield.webp', color: 'gold',
        summary: 'Protects your back while it\'s stowed; hold it up to block and bash zombies in front of you. Two parts around the Diner; build it at the gas station.',
        facts: [['Parts', '2'], ['Build at', 'The table in the gas station']],
        video: AV,
        parts: [
          { w: 154, name: 'Dolly', area: 'Diner', spots: ['Behind the counter, left side.', 'Behind the counter, right side.', 'On a booth along the back wall.'] },
          { w: 169, name: 'Car door', area: 'Gas station garage', spots: ['On the car.', 'On the workbench on the back wall.', 'On the floor in the restroom.'] },
        ],
      },
      {
        id: 'turret', tab: 'parts', type: 'Buildable · Trap', name: 'Turret', img: I + 'turret.webp',
        summary: 'A lawnmower with an RPD on top that shoots zombies (and can down you if you stand in front). It only runs with a Turbine next to it. Three parts at the Farm.',
        facts: [['Parts', '3'], ['Build at', 'The table in the farmhouse']],
        video: AV,
        parts: [
          { w: 187, name: 'Ammo', area: 'Farmhouse', spots: ['On a table.', 'On a shelf downstairs.', 'On a shelf upstairs.'] },
          { w: 198, name: 'Lawnmower', area: 'Farm', spots: ['In the barn.', 'Outside the farmhouse back door.', 'Along the fence between the house and the shed.'] },
          { w: 202, name: 'RPD', area: 'Farm', spots: ['Upstairs in the barn.', 'On a couch upstairs in the farmhouse.', 'On the farmhouse balcony.'] },
        ],
      },
      {
        id: 'electric-trap', tab: 'parts', type: 'Buildable · Trap', name: 'Electric Trap', img: I + 'electric-trap.webp',
        summary: 'A placeable trap that shocks zombies that come near it (it doesn\'t stop the Avogadro). It only runs with a Turbine next to it. Three parts in the room above the power switch.',
        facts: [['Parts', '3'], ['Build at', 'The Power Station table']],
        video: AV,
        parts: [
          { w: 217, name: 'Coil', area: 'Power Station', spots: ['Near the stairs.', 'In the corner by the broken wall.', 'On the crates above the lava pit.'] },
          { w: 233, name: 'Battery', area: 'Power Station', spots: ['Near the buildable table.', 'On a barrel across the broken walkway.', 'On barrels near the broken wall.'] },
          { w: 241, name: 'TV screen', area: 'Power Station', spots: ['In the window above the stairs.', 'In the window across the broken walkway.', 'On a barrel next to the broken wall.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'jet-gun', tab: 'weapons', type: 'Wonder weapon · Buildable', name: 'Jet Gun', aka: 'Thrustodyne Aeronautics Model 23', img: I + 'jet-gun.webp', color: 'wind',
        summary: 'Sucks zombies into its rotors. It heats up as you use it: let it cool (hold it out without firing) or it breaks and scatters its parts, which you then rebuild. The Richtofen side of the quest needs it.',
        facts: [['Parts', '4'], ['Build at', 'Ground floor of the bar in Town'], ['Slot', 'Equipment (D-pad), not a gun slot']],
        video: EV,
        parts: [
          { w: 527, name: 'Pressure gauge', area: 'Hunter\'s Cabin (in the fog between the Power Station and Town)', spots: ['On the table.', 'In the fireplace.', 'On the other table (or the end of the bed frame).'] },
          { w: 560, name: 'Wires', area: 'Power Station (appears once the power is on)', spots: ['Drop down onto the catwalk: against the barrier.', 'Further along, right on the edge.', 'On a barrel in the back room.'] },
          { w: 585, name: 'Engine', area: 'Tunnel (Bus Depot to Diner), near the M16 wall-buy', spots: ['By a zombie window.', 'Further down on the right, against the wall.', 'Between two cars near the M16.'] },
          { w: 615, name: 'Handbrake', area: 'Nacht der Untoten (cornfields opposite the pylon)', spots: ['On the shelf.', 'On top of the cabinet at the top of the stairs.', 'On the filing cabinet at the back by the light.'] },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee-maxis', tab: 'easter-egg', type: 'Main Easter Egg · Maxis side', name: 'Tower of Babble: Maxis', short: 'Maxis side',
        summary: 'Turn the power off for Maxis, kill the Avogadro with an EMP under the pylon while two Turbines power it, then put Turbines at two lamp posts.',
        facts: [
          ['Players', '2+ (two Turbines at once)'],
          ['Reward', 'Achievement; the pylon and lamp posts glow orange'],
          ['Difficulty', 'Original only'],
        ],
        prep: [
          { key: 'nav-table-built', t: 'Optional: the NAV table', needs: ['nav-table'], d: 'Not needed for this quest (it has been finished without one), but Buried\'s navcard ending needs every map\'s NAV table.' },
          { t: 'Power switch built', needs: ['power-switch'] },
          { t: 'At least two players carrying a Turbine', needs: ['turbine'] },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 321, t: 'Turn the power on, wait for Maxis, then turn it off', d: 'After his speech, hit the switch again. The power room door closes: place a Turbine to open it, pick it back up and leave.', warn: 'With the power off your perks stop working until it\'s back on.' },
          { w: 352, t: 'Get EMP Grenades from the Mystery Box', d: 'At least one player. It can take a lot of spins.' },
          { w: 368, t: 'Place two Turbines under the pylon in the cornfields', d: 'In opposite corners, so an EMP thrown at the middle doesn\'t hit them.' },
          { w: 384, t: 'End a round under the pylon with the lightning overhead', d: 'Stay under it until the storm lightning is right above you, then let the round end. The Avogadro (the electric enemy) may spawn; keep trying rounds until it does.' },
          { w: 400, t: 'EMP the Avogadro while it\'s under the pylon', d: 'It flies up and charges the pylon.', warn: 'An EMP that hits a Turbine switches it off. A worn-out Turbine also stops this working: let it break and grab a new one.' },
          { w: 448, t: 'Put Turbines next to two different lamp posts', d: 'Two players carry their Turbines to two lit lamp posts; the Bus Depot and the Diner posts are easiest. When the posts beam orange at the pylon, it\'s done.', tip: 'With four Turbines you can have two under the pylon and two already at the lamp posts, so it finishes the moment the Avogadro step is done.' },
        ],
      },
      {
        id: 'ee-richtofen', tab: 'easter-egg', type: 'Main Easter Egg · Richtofen side', name: 'Tower of Babble: Richtofen', short: 'Richtofen side',
        summary: 'Keep the power on, overheat the Jet Gun under the pylon, get 25 explosive kills there, then hit four lamp posts with EMPs at the same time.',
        facts: [
          ['Players', 'Best with 4; solo is possible but very hard'],
          ['Reward', 'Achievement; the pylon and lamp posts glow blue'],
          ['Difficulty', 'Original only'],
        ],
        prep: [
          { t: 'Someone plays as Stuhlinger', d: 'Only he hears Richtofen, and his quotes are how you know each step worked. In solo, restart until you are Stuhlinger.' },
          { key: 'nav-table-built', t: 'Optional: the NAV table', needs: ['nav-table'], d: 'Not needed for this quest (it has been finished without one), but Buried\'s navcard ending needs every map\'s NAV table.' },
          { t: 'Power on (and left on)', needs: ['power-switch'] },
          { key: 'an-explosive-weapon-the-original-ray-gun-or-mustang-sally', t: 'An explosive weapon: Ray Gun, Ray Gun Mark II or Mustang & Sally', d: 'There\'s no PhD Flopper on this map, so mind the splash.' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 518, t: 'Build the Jet Gun', needs: ['jet-gun'] },
          { w: 655, t: 'Fire the Jet Gun at the pylon until it breaks', d: 'Stand under the pylon in the cornfields, look up and hold the trigger until it blows apart. Stuhlinger hears Richtofen.', tip: 'If Richtofen later says the pylon isn\'t hot enough, rebuild the Jet Gun (let it cool fully first) and break it again.' },
          { w: 687, t: 'Kill 25 zombies under the pylon with explosives', d: 'Explosive kills only: the Ray Gun, Ray Gun Mark II and Mustang & Sally all count. Richtofen tells Stuhlinger when there\'s enough power.' },
          { w: 718, t: 'Get EMP Grenades from the Mystery Box', d: 'Ideally every player; at least two.' },
          { w: 733, t: 'Throw EMPs at four different green lamp posts at the same time', d: 'Each player stands at a different lamp post and everyone throws together. The Bus Depot and Diner posts are the easiest; the others are in the fog. Blue beams on the posts mean it\'s done.', list: lamps },
          { w: 779, t: 'Fewer than four players? Use Denizen teleporters', d: 'Place a Turbine by a lamp post, bring a Denizen there so it digs a teleporter, throw an EMP, jump in and throw your second EMP at the post where you land.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'navcard', tab: 'side', type: 'Story link', name: 'Navcard (linking TranZit, Die Rise and Buried)', short: 'Navcard', img: I + 'navcard.webp',
        summary: 'Pick up TranZit\'s navcard behind the dumpster at the back of the Bus Depot; it stays on your profile. It goes into the NAV table on Die Rise. The navcard for this map\'s table comes from Buried. With every table fed and the same side done on all three maps, the ending button on Buried unlocks.',
        video: EV,
        steps: [{ w: 75, t: 'Grab the navcard behind the dumpster at the back of the Bus Depot' }],
      },
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Carry On"',
        summary: 'Interact with three teddy bears.',
        spots: ['On a bench in the Bus Depot.', 'On a mattress upstairs in the farmhouse.', 'On a booth in the bar in Town.'],
      },
    ],
  });
})();
