/* Alpha Omega — Black Ops 4 DLC 3 (Aether story) */
(() => {
  const I = 'assets/img/bo4/ao/';
  const D = 'hmHLHACcSN4'; // MrDalekJD ultimate guide
  const R = '-MZy_CiiyLA'; // MrRoflWaffles easter egg guide
  ZG.addMap({
    game: 'bo4', id: 'alpha-omega', order: 6, group: 'aether',
    name: 'Alpha Omega', dlc: 'Black Ops Pass · DLC 3', eeName: 'Electromagnetic Awakening Party',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Rushmore', 'Ray Gun Mark II variants', 'Telepads'],
    blurb: 'Nuketown above a Broken Arrow bunker, with Ultimis and Primis together. Earn the trust of Rushmore, the facility AI, by proving the five Broken Arrow core values, then trap the Avogadro.',
    quick: [
      ['Main EE', 'Electromagnetic Awakening Party'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Ray Gun Mark II-V, X, Y, Z (and the Ray Gun / Mk II in the box)'],
      ['Key items', 'Galvaknuckles, Telepads, Sergeant A.D.A.M.'],
    ],
    intro: {
      start: 'Turn on the power, fix four gas leaks for Pack-a-Punch, and from the next round Rushmore talks to you. The whole easter egg is a conversation with him.',
      parts: 'Three buildables: the Riot Shield, the Telepads (needed in the easter egg) and the Ray Gun Assembly Kit.',
      weapons: 'Each elemental Ray Gun Mark II needs a Pack-a-Punched gun with a specific alternate ammo type, a canister and a soul box.',
      'easter-egg': 'Lots of steps, but none are very hard. Talk to Rushmore after each one. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch (gas leak)', short: 'Power & PaP',
        summary: 'Turn on the power, survive a Nova 6 lockdown at the generators, then repair four leaking vents up in Nuketown. This is also step 1 of the easter egg.',
        img: I + 'generators.webp',
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        steps: [
          { w: 172, t: 'Turn on the power in the Power House', d: 'The garage building in Nuketown (1,000-point door). A few dogs spawn.', imgs: [{ src: I + 'power-room.webp', cap: 'The Power House' }] },
          { w: 203, t: 'Start ventilation at the Generators', d: 'Go down into the bunker (behind the Green or Yellow House) to the Generators room and hold interact on the red terminal. Survive about a minute of zombies and Nova 6 crawlers.' },
          { w: 279, anyList: 'Vents in any order', t: 'Repair the four leaking vents', d: 'Back on the surface, four houses leak green gas. Hold interact on the vent unit in or just outside each (Jolting Jacks and zombies spawn). The houses change every game.' },
          { w: 342, t: 'Pack-a-Punch opens in the Beds area of the bunker', d: 'Finish the round and Rushmore wakes up in Operations.' },
        ],
      },
      {
        id: 'adam', tab: 'start', type: 'Getting started', name: 'Sergeant A.D.A.M. (four codes)', short: 'A.D.A.M.',
        summary: 'A robot helper like the Civil Protector. Unlock him with four staff codes at Rushmore. The first call is free (3,000 after), and the easter egg needs him once, so save the free call.',
        img: I + 'adam.webp',
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        steps: [
          { w: 449, t: 'Operation Toy Soldier code', d: 'Always 7626, on a folder across from Rushmore in Operations.' },
          { w: 465, t: 'Sawyer code', d: 'APD Interrogation: on a counter, by the bottom of the stairs, or on a counter upstairs.' },
          { w: 465, t: 'McCain code', d: 'APD Control: shoot the stack of papers near the base of the APD; the code is underneath.' },
          { w: 481, t: 'Pernell code', d: 'Take the key from the box on the wall opposite the base of the APD, then open the drawer upstairs in the Yellow House.' },
          { w: 497, t: 'Enter them at Rushmore', d: 'On a new round after Pack-a-Punch, enter 7626, then each name\'s code when he asks (Sawyer, McCain, Pernell; order may vary). You have about a minute between codes. Hold interact on a digit to type it, then on Enter.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'riot-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Riot Shield', color: 'gold',
        summary: 'A shield with a machine pistol (aim to fire). Turn your back (shield) to the Avogadro\'s zaps in the boss fight.',
        facts: [['Parts', '3'], ['Build at', 'Any bench: Green House upstairs, APD Control or Operations']],
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        parts: [
          { w: 342, name: 'Part 1', area: 'The house to the right of spawn', spots: ['On a table downstairs.', 'On another table.', 'Upstairs, on a filing cabinet.'] },
          { w: 357, name: 'Part 2', area: 'Nuketown street', spots: ['Next to a car.', 'Against the bus.', 'A third spot on the street nearby.'] },
          { w: 372, name: 'Part 3', area: 'Beds (bunker)', spots: ['On a shelf.', 'Lying on the floor.', 'On a chair.'] },
        ],
      },
      {
        id: 'telepads', tab: 'parts', type: 'Buildable · Utility', name: 'Telepads', img: I + 'telepad.webp', color: 'aether',
        summary: 'A pair of teleport pads you place anywhere; step on one to jump to the other. The easter egg uses them to carry an overheating server, and the Mark II-Y quest uses them too.',
        facts: [['Parts', '3'], ['Build at', 'Any bench (Green House upstairs is handy)']],
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        parts: [
          { w: 388, name: 'Part 1', area: 'Transfusion Facility', spots: ['In a locker.', 'Under the operating table.', 'On cardboard boxes (behind a barrier at the back).'] },
          { w: 404, name: 'Part 2', area: 'Green House', spots: ['Right as you come in.', 'Downstairs kitchen, next to the barrier.', 'Upstairs, on the balcony.'] },
          { w: 419, name: 'Part 3', area: 'Generators (bunker)', spots: ['Right as you come in from Beds.', 'Up by the generator button.', 'By the yellow buckets.'] },
        ],
      },
      {
        id: 'assembly-kit', tab: 'parts', type: 'Buildable · Upgrade station', name: 'Ray Gun Assembly Kit & Mark II frame', img: I + 'assembly-kit.webp', color: 'green',
        summary: 'Every elemental Ray Gun Mark II is built on this kit from a Mark II frame plus a charged canister.',
        facts: [['Parts', '3'], ['Build at', 'The table upstairs in Operations']],
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        parts: [
          { w: 604, name: 'Part 1', area: 'Yellow House', spots: ['Downstairs kitchen table.', 'On a bench downstairs.', 'Upstairs on a shelf, or on a small table.'] },
          { w: 619, name: 'Part 2', area: 'Storage (bunker)', spots: ['On a shelf.', 'On a barrel.', 'On a small tank on the way back to the Generators.'] },
          { w: 635, name: 'Part 3', area: 'Bunker, by the mannequin', spots: ['On the table with the mannequin.', 'On a trolley.', 'On a chair by the workbench.'] },
        ],
        steps: [
          { w: 527, t: 'Unlock the Mark II frames with the TV code', d: 'Four TVs around the map light up one after another (listen for static). Interact with the lit one, kill zombies until it shows a digit, then find the next. Enter the four digits at Rushmore; the frames become available behind you in Operations.' },
          { w: 650, t: 'Build the kit upstairs in Operations' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'galvaknuckles', tab: 'weapons', type: 'Melee weapon', name: 'Galvaknuckles', img: I + 'galvaknuckles.webp', color: 'lightning',
        summary: 'Electric brass knuckles. Needed for the broadcast step and great for knocking the Avogadro into a ball at the end.',
        facts: [['Cost', '5,000 points'], ['Where', 'Inside the red truck in the Cul-de-sac']],
      },
      {
        id: 'rg-v', tab: 'weapons', type: 'Wonder weapon', name: 'Ray Gun Mark II-V', img: I + 'rg-v.webp', color: 'lightning',
        summary: 'An electric beam that stuns up to four enemies and recharges its own ammo over time.',
        facts: [['Needs', 'A weapon with Kill-O-Watt'], ['Upgrade', 'Porter\'s Mark II-V2 (Pack-a-Punch)']],
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        steps: [
          { t: 'Have the Assembly Kit and a Mark II frame', needs: ['assembly-kit'] },
          { w: 840, t: 'Shoot the yellow-smoking panel in the Generators room with Kill-O-Watt', d: 'One of three circuit boxes (near Beds, near the ventilation button, near the Tonic perk). Take the canister.' },
          { w: 855, t: 'Chain the five telephone poles', d: 'One pole outside sparks yellow. Shoot it with Kill-O-Watt until it glows, then find the next sparking pole connected to it. Do all five; power flows to a generator by the Yellow House.' },
          { w: 886, t: 'Charge the canister at that generator', d: 'Place the canister to start a soul circle and kill zombies inside it until full.' },
          { w: 901, t: 'Build it at the Assembly Kit' },
        ],
      },
      {
        id: 'rg-x', tab: 'weapons', type: 'Wonder weapon', name: 'Ray Gun Mark II-X', img: I + 'rg-x.webp', color: 'ice',
        summary: 'A full-auto ray gun. Pack-a-Punched you dual-wield two of them.',
        facts: [['Needs', 'A weapon with Cryofreeze'], ['Upgrade', 'Porter\'s Mark II-X2 (dual wield)']],
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        steps: [
          { t: 'Have the Assembly Kit and a Mark II frame', needs: ['assembly-kit'] },
          { w: 917, t: 'Shoot the blue-smoking filing cabinet with Cryofreeze', d: 'In the APD Interrogation (near the back door), the Operations garage or Prisoner Holding. Take the canister.' },
          { w: 947, t: 'Collect three samples from the scientists', d: 'Zombies with blue mist around their hands appear, mostly in the bunker. Freeze one with Cryofreeze, then melee it to drop a sample. Get three.' },
          { w: 994, t: 'Charge the canister in APD Control', d: 'Place it in the broken 115 container and kill zombies in the soul circle (with Cryofreeze) until full.' },
          { w: 1010, t: 'Build it at the Assembly Kit' },
        ],
      },
      {
        id: 'rg-y', tab: 'weapons', type: 'Wonder weapon', name: 'Ray Gun Mark II-Y', img: I + 'rg-y.webp', color: 'fire',
        summary: 'Explosive rounds that can\'t hurt you; hold to charge a much bigger blast.',
        facts: [['Needs', 'A weapon with Brain Rot, plus the Telepads'], ['Upgrade', 'Porter\'s Mark II-Y2']],
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        steps: [
          { t: 'Have the Assembly Kit, a frame and the Telepads', needs: ['assembly-kit', 'telepads'] },
          { w: 1026, t: 'Make a Brain Rot zombie smash the green-smoking dirt pile', d: 'Behind the Yellow House by the back door, the Green House backyard by the bunker entrance, or the side of Center Street nearest the Yellow House. Take the canister.' },
          { w: 1042, t: 'Follow the orange orb with the Telepads', d: 'An orb appears on one of the teleporter pad spots. Put a Telepad there and shoot the orb; it jumps to another pad spot. Put the second Telepad there, shoot it again and teleport along with it.' },
          { w: 1088, t: 'Charge the canister in Storage', d: 'The orb ends up in Storage. Place the canister in it and fill the soul circle.' },
          { w: 1103, t: 'Build it at the Assembly Kit' },
        ],
      },
      {
        id: 'rg-z', tab: 'weapons', type: 'Wonder weapon', name: 'Ray Gun Mark II-Z', img: I + 'rg-z.webp', color: 'red',
        summary: 'A laser shotgun that pierces several enemies. Pack-a-Punched it fires fully automatic.',
        facts: [['Needs', 'A weapon with Fire Bomb'], ['Upgrade', 'Porter\'s Mark II-Z2']],
        video: { id: D, title: 'Ultimate guide to Alpha Omega', ch: 'MrDalekJD', len: '25:55' },
        steps: [
          { t: 'Have the Assembly Kit and a Mark II frame', needs: ['assembly-kit'] },
          { w: 1119, t: 'Shoot the orange-smoking cabinet with Fire Bomb', d: 'In the Lounge, the Yellow House kitchen or the Green House kitchen. Take the canister.' },
          { w: 1150, t: 'Throw a grenade down the purple-smoking chimney', d: 'One house (Yellow House, Transfusion or Operations) puffs purple smoke from its chimney. Land a Frag, Wraith Fire or Monkey Bomb in the top; purple fire appears in its fireplace.', tip: 'Cook the grenade and throw straight up while standing below a low chimney; tall ones need a careful angle.' },
          { w: 1186, t: 'Charge the canister in that fireplace', d: 'Place it and fill the soul circle.' },
          { w: 1201, t: 'Build it at the Assembly Kit' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Electromagnetic Awakening Party', short: 'Main EE',
        summary: 'Prove Broken Arrow\'s five core values to Rushmore: decode a broadcast, return a sick crawler, recover stolen Element 115, install a server, restore power, rebuild an A.D.A.M. for Peter McCain and finally drag the Avogadro back into the APD.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Ending cutscene, achievement, the Elemental Shard'],
          ['Hardest part', 'The overheating server run and the Avogadro'],
        ],
        prep: [
          { t: 'Power on and Pack-a-Punch open (this is step 1)', needs: ['power-pap'] },
          { t: 'Sergeant A.D.A.M. unlocked, free call unused', needs: ['adam'] },
          { t: 'Galvaknuckles', needs: ['galvaknuckles'] },
          { t: 'Telepads built', needs: ['telepads'] },
          { t: 'A Pack-a-Punched gun with Brain Rot', d: 'The ammo type is random: keep re-packing the gun at Pack-a-Punch until Brain Rot shows up. The free upgraded gun from the Prisoner Holding locker (broadcast step) is a cheap start.' },
          { t: 'Riot Shield', needs: ['riot-shield'] },
        ],
        stepsTitle: 'Quest steps',
        video: { id: R, title: 'Ultimate easy Alpha Omega easter egg guide', ch: 'MrRoflWaffles', len: '20:50' },
        steps: [
          { w: 171, t: 'Trigger the emergency broadcast with Galvaknuckles', d: 'One of the three TVs in the bunker (Beds, Lounge, Diner) is switched on with a blank screen. Melee-kill a zombie next to it with Galvaknuckles. A test card plays five codes: a letter and four digits each. Write them all down in order.', needs: ['galvaknuckles'] },
          { w: 232, t: 'Set the punch clocks in that order', d: 'Each letter is a house (shown on its mailbox). Interacting with a clock adds 15 minutes; meleeing it adds an hour. "F 0930" means set the F house clock to 9:30. A wrong one means starting over from the first.', list: ['A: Yellow House', 'B: Green House', 'C: Prisoner Holding', 'D: Transfusion Facility', 'E: Operations', 'F: APD Interrogation'], tip: 'Bonuses: the E clock unlocks a free Pack-a-Punched Ray Gun Mark II upstairs in Operations; the C clock unlocks a locker in Prisoner Holding with a free upgraded weapon per player.' },
          { w: 312, t: 'Spin the sixth clock and give Rushmore the time', d: 'The house that wasn\'t called out: hit its clock with Galvaknuckles and note where it stops (3:00 means 0300). Enter it on the keypad next to Rushmore.' },
          { w: 357, t: 'Lead the glowing red Nova crawler to the Transfusion Facility', d: 'Talk to Rushmore. A red-glowing crawler appears down near the Generators; one hit kills it, so don\'t shoot it. It follows you: lead it into the Transfusion Facility to the stairs, where it climbs over the bookcase.', tip: 'Easiest on early rounds while zombies are slow.' },
          { w: 406, t: 'Use Sergeant A.D.A.M. to get the canister from Marlton', d: 'Talk to Rushmore. In the stairwell between the Diner and the Green House backyard, melee the metal door: Marlton is hiding behind it. Call Sergeant A.D.A.M. (from Storage) and walk him to the door. Marlton panics and throws out the stolen 115 canister. Put it on the shelf by the doorway to the Green House backyard in the Transfusion Facility.', needs: ['adam'] },
          { w: 469, t: 'Free the server with a Jolting Jack', d: 'Talk to Rushmore. The new server sits in a casing by a teleport pad spot in the Power House (same house as the power switch). Get a Jolting Jack to fire an electric ball into the casing so it opens.' },
          { w: 579, t: 'Rush the server to Rushmore with the Telepads', d: 'It overheats if you carry it too far. Put one Telepad right next to the server and the other in the backyard behind Rushmore. Grab the server, teleport, turn left around the bench and slot it in by the stairwell.', needs: ['telepads'], tip: 'Stamin-Up or a level 2 Path of Sorrows helps. If it fails, wait for the pads to cool down and try again.' },
          { w: 640, anyList: 'Paintings in any order', t: 'Turn zombies with Brain Rot to knock down three paintings', d: 'Three paintings leak green smoke (listen for them). A Brain Rot zombie next to one tears it down to reveal a code:', list: ['Green House: top of the stairs.', 'Beds: opposite Pack-a-Punch.', 'Lounge: on the wall next to the exit stairs.'] },
          { w: 702, t: 'Enter the three codes at Rushmore', d: 'Within about a minute of each other, pressing Enter after each one.' },
          { w: 717, anyList: 'Boxes in any order', t: 'Restore power: set the six switch boxes', d: 'The power fails. Flip each box in the bunker (ignore the lights), then flip the main power switch in the Power House again:', list: ['Diner: up', 'Beds: up', 'Storage: down', 'Generators: up', 'Lounge: down', 'Solitary: down'] },
          { w: 809, t: 'Collect two arms and a head from glowing A.D.A.M. units', d: 'Talk to Rushmore. A.D.A.M. mannequins with a blue glow (and a sound) appear. Hold interact on one with your whole team nearby and stay in the marked area about 30 seconds while it overloads (zombies attack). It explodes and drops a part. Do it three times.' },
          { w: 872, t: 'Repair the broken A.D.A.M. in APD Interrogation', d: 'Put the head and arms on it. It reveals the soul of Peter McCain.' },
          { w: 889, t: 'Escort the Elemental Orb', d: 'Find the floating orb (blue glow, humming), usually just out of reach behind a barrier or zombie spawn. Walk up to it and it starts moving. Stay close all the way until Peter\'s soul enters it in APD Interrogation. Stray too far and it resets until next round.', imgs: [{ src: I + 'orb.webp', cap: 'The Elemental Orb' }] },
          { w: 950, t: 'Get ready and open the APD', d: 'All perks, Pack-a-Punch, monkeys and Galvaknuckles. Talk to Rushmore, then hold interact on the console in APD Control. Kill the A.D.A.M.s near the soul canister until it fills; the APD opens and the Avogadro escapes.' },
          { w: 1012, t: 'Fill the four backup canisters', d: 'The screens in APD Control call out rooms in order (Lounge, Diner, Storage, Beds). Go to the named room, hold interact on its canister and kill zombies until full while the Avogadro hunts you. Turn your back so the shield takes its zaps.', warn: 'Get out of each room as soon as it\'s full: it fills with lethal electricity. Don\'t run back through those rooms.' },
          { w: 1119, t: 'Push the Avogadro back into the APD', d: 'Back in APD Control, melee it (Galvaknuckles) to knock it into a ball, then keep shooting or meleeing it up the stairs to the APD door. It\'s sucked inside. Use the console, then take the Elemental Shard for the ending.', tip: 'Your specialist weapon both clears zombies and pushes the Avogadro.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"I Am The Well"',
        summary: 'Enter 7664 (SONG) at Rushmore, or interact with three A.D.A.M. heads:',
        spots: ['Green House upstairs: under the side of the bed nearest the wall.', 'Solitary: in the corner of the small office before APD Control, in front of the open barrier.', 'Lounge: on a red chair left of the pool table.'],
      },
      {
        id: 'rushmore-codes', tab: 'side', type: 'Cheat codes', name: 'Rushmore keypad codes',
        summary: 'Rushmore accepts words typed as numbers on a phone-style keypad. One cheat code per round, and each one only works once per game. Reported to work only in online Classic games (not offline or with Mutations).',
        blocks: [
          { p: '**Useful**' },
          { table: { head: ['Code', 'Word', 'Effect'], rows: [
            ['2265', 'BANK', 'Everyone gets 1,000 points'],
            ['3667', 'DOOR', 'Your next door (not debris) is free'],
            ['7433', 'SHED', 'Opens the shed behind the Yellow House for free'],
            ['2739 / 7632 / 2652', 'BREW / SODA / COLA', 'That perk type costs half price'],
            ['7225', 'PACK', 'Bonfire Sale power-up'],
            ['6853', 'NUKE', 'Nuke power-up'],
            ['4376', 'HERO', 'Fills your specialist weapon'],
            ['3279', 'EASY', 'Undead Man Walking for 5 minutes (great for the orb escort solo)'],
            ['6662', 'NOOB', 'Zombies have round 1 health for this round (single-digit rounds only)'],
            ['8463', 'TIME', 'Freezes every zombie for 10 seconds'],
            ['4867', 'GUNS', 'A random gun every few seconds for 5 minutes'],
          ] } },
          { p: '**Just for fun**' },
          { table: { head: ['Code', 'Word', 'Effect'], rows: [
            ['2666 / 7836', 'AMMO or BOOM / SUDO', 'Drops a live grenade at your feet'],
            ['9277', 'WARP', 'Teleports players around at random'],
            ['4728', 'GRAV', 'Zombies you kill fly upwards for a minute'],
            ['3255', 'FALL', 'Zombies trip over at random'],
            ['7853', 'PUKE', 'Zombies throw up when killed by melee'],
            ['3825', 'DUCK', 'Specialist kills make duck quacks'],
            ['2582 / 7283', 'CLUB / RAVE', 'Disco party in the Beds area'],
            ['7664', 'SONG', '"I Am The Well"'],
            ['8333', 'TEDD', 'Wakes T.E.D.D. up in the Lounge'],
            ['5653 · 5433 · 5683 · 1841 · 8459 · 8368 · 9296', 'JOKE · LIFE · LOVE · QUIZ · UGLY · VENT · YAWN', 'Rushmore replies with a joke, a quiz or another line'],
            ['0001–0003, 1001–1005', '', 'Rushmore reads out Broken Arrow\'s project files (backstory)'],
          ] } },
        ],
      },
    ],
  });
})();
