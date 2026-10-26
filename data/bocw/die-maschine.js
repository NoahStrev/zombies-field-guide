/* Die Maschine — Black Ops Cold War launch map */
(() => {
  const I = 'assets/img/bocw/die-maschine/';
  const E = 'zr2_6D8iIew'; // MrRoflWaffles easter egg guide
  const P = 'ib0mC2iWjKc'; // MrRoflWaffles Pack-a-Punch guide
  const D = '-zDjqzDkRkg'; // MrRoflWaffles D.I.E. upgrades guide
  const EV = { id: E, title: 'Die Maschine easter egg guide', ch: 'MrRoflWaffles', len: '16:55' };
  const PV = { id: P, title: 'Die Maschine power and Pack-a-Punch', ch: 'MrRoflWaffles', len: '2:34' };
  const DV = { id: D, title: 'D.I.E. free wonder weapon and all four upgrades', ch: 'MrRoflWaffles', len: '8:39' };

  ZG.addMap({
    game: 'bocw', id: 'die-maschine', order: 1,
    name: 'Die Maschine', dlc: 'Launch map', eeName: 'Seal the Deal',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['D.I.E. Shockwave', 'Dark Aether', 'Aetherscope'],
    blurb: 'A Nazi research bunker in Poland built around the ruins of Nacht der Untoten. Step into the Dark Aether through rifts, rebuild the D.I.E. wonder weapon with all four elements, and help a scientist called Orlov shut the particle accelerator down.',
    quick: [
      ['Main EE', 'Seal the Deal (solo or co-op)'],
      ['Wonder weapon', 'D.I.E. Shockwave (free quest) + 4 element upgrades'],
      ['Key items', 'Aetherscope, Vogel\'s diary, wrench, Decontamination Agent'],
      ['Ends with', 'Defend Orlov, then exfil by helicopter'],
    ],
    intro: {
      start: 'Power is a red button in the bunker next to the particle accelerator. New to Cold War zombies? Read the basics first: points, salvage, armour and Pack-a-Punch all work differently.',
      weapons: 'The easter egg needs the D.I.E. and all four of its element upgrades. NOVA-5 and Cryo-Emitter can be done any time; Electrobolt and Thermophasic only unlock after the diary step of the easter egg.',
      'easter-egg': 'The quest switches between the normal map and the Dark Aether a lot. Rifts take a few kills to come back after you use one. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'cw-basics', tab: 'start', type: 'Primer', name: 'Cold War zombies basics', short: 'CW basics',
        summary: 'Cold War changed a lot of the classic rules. This is what\'s different, and it applies to all four Cold War maps.',
        blocks: [
          { list: [
            'Points are called **Essence**. You also start with a gun of your choice from your loadout.',
            'Zombies drop **Salvage** (common and rare). Spend it at the **Crafting Table** (grenades, scorestreaks, Self-Revive) and the **Arsenal** (armour and weapon rarity).',
            '**Armour** has three tiers bought at the Arsenal. It soaks up hits before your health does.',
            'Guns have a **rarity** (Common to Legendary) that raises their damage. Wonder weapons are "Ultra".',
            '**Pack-a-Punch** has three levels: 5,000, then 15,000, then 30,000. It also sells **ammo mods** for 2,000: Brain Rot, Dead Wire, Napalm Burst, Cryo Freeze, Shatter Blast.',
            'Your **Field Upgrade** (chosen in the loadout, such as Ring of Fire or Aether Shroud) recharges over time.',
            'The **Trials** machine gives you a challenge for a few rounds. Finish several to reach a Legendary reward, which can be the map\'s wonder weapon.',
            '**Exfil**: from round 10 (and every 5 rounds after) you can call a helicopter and leave. Die Maschine\'s easter egg ends with a special exfil.',
            'Perks have upgrade tiers that you unlock outside the match with Aetherium crystals, which you earn by playing.',
          ] },
          { tip: 'Juggernog, Stamin-Up and Quick Revive have their own generators on Die Maschine, so you can buy them before the power is on.' },
        ],
      },
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Open your way down into the bunker and press the big red power button. Stabilise the particle accelerator, go through the rift into the Dark Aether, and bring back the Pack-a-Punch part.',
        video: PV,
        steps: [
          { w: 0, t: 'Open the doors from the Yard down into the bunker', d: 'Go through the bunker to the Particle Accelerator room. The power room is through the last door, next to it.' },
          { w: 32, t: 'Press the big red power button', imgs: [{ src: I + 'power-room.webp', cap: 'The power room' }] },
          { w: 47, t: 'Activate the two terminals in the Particle Accelerator', d: 'They\'re on opposite sides of the room and marked on screen.' },
          { w: 62, t: 'Go through the rift in the middle of the room', d: 'It appears a few seconds after both terminals are done and takes you to the Dark Aether.', warn: 'Zombies can still hit you while you teleport.' },
          { w: 93, t: 'Find the Aether tunnel and drop to the machine part', d: 'Head up out of the bunker and look for a purple glow on the floor. Drop through it into a room that\'s normally closed and pick up the part.' },
          { w: 109, t: 'Put the part on the ghost Pack-a-Punch', d: 'It stands where the rift was. That rebuilds the machine.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'die', tab: 'weapons', type: 'Wonder weapon', name: 'D.I.E. Shockwave', short: 'D.I.E.', img: I + 'die.webp', color: 'aether',
        summary: 'Fires a concussive blast (four shots per load). Aim to vacuum zombies instead: it drains them and refills the gun, but only when it isn\'t full. Four element upgrades turn it into a different weapon each.',
        facts: [['Get it', 'Free quest, Mystery Box or a Legendary Trials reward'], ['Upgraded', 'D.E.A.D. Thunderblast'], ['Variants', 'Electrobolt, NOVA-5, Cryo-Emitter, Thermophasic']],
        video: DV,
        steps: [
          { w: 31, t: 'Kill a Megaton and both of its halves', d: 'Megatons show up around rounds 7 to 11. The last half drops a **keycard** (it says "Keycard", not intel).', imgs: [{ src: I + 'megaton.webp', cap: 'A Megaton' }] },
          { w: 46, t: 'Use the keycard at the computer in the Weapons Lab', d: 'The room with the nuke. You get the D.I.E. remote.' },
          { w: 62, t: 'Start the trap from the crack in the Living Room wall', d: 'Upstairs in the old Nacht der Untoten bunker. The D.I.E. fires through the metal door next to the crack for about 25 to 30 seconds. Run a horde back and forth through it.', imgs: [{ src: I + 'living-room.webp', cap: 'The Living Room in the Nacht bunker' }] },
          { w: 79, t: 'Interact with the crack again to blow the door open', d: 'Take the D.I.E. from inside.', tip: 'Not enough kills? Wait for it to cool down (a couple of minutes or the next round) and try again.' },
        ],
      },
      {
        id: 'electrobolt', tab: 'weapons', type: 'D.I.E. upgrade', name: 'Electrobolt', img: I + 'electrobolt.webp', color: 'lightning',
        summary: 'A shocking beam. Three trips to the Dark Aether: vacuum a glowing crystal each time and shoot it into a crate under Pack-a-Punch.',
        facts: [['Unlocks', 'After the diary step of the easter egg'], ['Upgraded', 'D.E.A.D. Joltsurge']],
        video: DV,
        steps: [
          { w: 110, t: 'Do the easter egg up to the diary step first', needs: ['ee'], d: 'Giving Vogel his diary three times opens the special rifts this upgrade uses.' },
          { w: 125, t: 'Go into the Dark Aether through the Particle Accelerator rift' },
          { w: 141, t: 'Vacuum one glowing crystal', d: 'Fire a shot first if the D.I.E. is full: it can only vacuum when it has room. The three crystals:', list: [
            'On the roof of the Nacht bunker, behind Der Wunderfizz.',
            'At the Pond, on the right on the way towards the facility entrance.',
            'Above the rubble between the Crash Site and the tunnel into the facility, up on the right wall.',
          ] },
          { w: 187, t: 'Shoot the crate under Pack-a-Punch with the charged D.I.E.', d: 'It\'s at the far back right on the bottom floor. Don\'t fire before you get there. Getting kicked out of the Dark Aether doesn\'t lose the charge. Use the base D.I.E., not a variant.' },
          { w: 202, t: 'Repeat for the other two crystals', d: 'One at a time, any order. When all three lights on the crate are lit, it opens.' },
        ],
      },
      {
        id: 'nova', tab: 'weapons', type: 'D.I.E. upgrade', name: 'NOVA-5', img: I + 'nova.webp', color: 'green',
        summary: 'Fires grenades that leave a toxic cloud. Fill a canister with Plaguehound gas and blow the vines off a box at the Crash Site.',
        facts: [['Unlocks', 'Any time'], ['Upgraded', 'D.E.A.D. Virulence']],
        video: DV,
        steps: [
          { w: 232, t: 'Vacuum the yellow canister on the top floor of the Nacht bunker', d: 'It sits out of reach behind rubble. Fire a shot first if the D.I.E. is full, then vacuum it over and pick it up (not the intel next to it).' },
          { w: 263, t: 'Place it on the wall next to Deadshot Daiquiri' },
          { w: 279, t: 'Kill a Plaguehound right next to it', d: 'One or two kills fill it. Easiest on a Plaguehound round.' },
          { w: 295, t: 'Put it on the vine-covered box at the Crash Site and shoot it', d: 'The box is against the wall between the plane cockpit and the Pond. The vines burn away; open the box.' },
        ],
      },
      {
        id: 'thermo', tab: 'weapons', type: 'D.I.E. upgrade', name: 'Thermophasic', img: I + 'thermo.webp', color: 'fire',
        summary: 'Fires blasts of burning plasma. Take a fuse from the floating plane cockpit in the Dark Aether and power a laser cutter.',
        facts: [['Unlocks', 'After the diary step of the easter egg'], ['Upgraded', 'D.E.A.D. Immolator']],
        video: DV,
        steps: [
          { w: 310, t: 'Shoot the fuse box in the plane cockpit at the Crash Site', d: 'Use a normal gun. Its lid flips open.' },
          { w: 326, t: 'In the Dark Aether, take the fuse from the floating cockpit', d: 'Use the rift between the Pond and the Crash Site. The cockpit floats in the air there and the box is exposed.' },
          { w: 357, t: 'Next trip in, put the fuse in the laser cutter by Deadshot Daiquiri', d: 'It cuts open a crate and sends you back out.' },
          { w: 373, t: 'Open the crate on the broken truck at the Pond', d: 'Climb onto the truck bed near Quick Revive.' },
        ],
      },
      {
        id: 'cryo', tab: 'weapons', type: 'D.I.E. upgrade', name: 'Cryo-Emitter', img: I + 'cryo.webp', color: 'ice',
        summary: 'Sprays a freezing stream. Get a Megaton to hit a fungus, collect what drips off it and freeze the chains on a box.',
        facts: [['Unlocks', 'Any time'], ['Upgraded', 'D.E.A.D. Glacialator']],
        video: DV,
        steps: [
          { w: 388, t: 'Shoot the wooden crate on the top floor of the Nacht bunker', d: 'With the base D.I.E. It has a beaker painted on it and teeters on the edge. It falls and breaks; pick up the flask on the ground below.' },
          { w: 403, t: 'Make a Megaton hit the fungus on the tree', d: 'The tree is between the Pond and the Crash Site. Stand right by the fungus so the Megaton\'s radioactive shot hits it. It glows purple and you hear a cue.' },
          { w: 451, t: 'Place the flask under the fungus and wait', d: 'A minute or two; if it isn\'t ready, check back next round.' },
          { w: 468, t: 'Pour it on the chained box in the Medical Bay', d: 'Near Speed Cola. The chains freeze and break; open the box.' },
        ],
        blocks: [{ tip: 'You can only carry one variant at a time. Swap by going back to that variant\'s box.' }],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Seal the Deal',
        summary: 'Build the Aetherscope, give Vogel\'s ghost his diary, power the Der Wechsler chamber with all four D.I.E. elements, get the Decontamination Agent out of a tree with a tank, merge a split Megaton back into Orlov, then defend him and exfil.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Achievement, calling card, ending cutscene'],
          ['Boss', 'Defend Orlov, then a timed exfil'],
        ],
        prep: [
          { t: 'Power and Pack-a-Punch on', needs: ['power-pap'] },
          { t: 'The D.I.E. with all four upgrades', needs: ['die', 'electrobolt', 'nova', 'cryo', 'thermo'], d: 'Get the D.I.E. and do NOVA-5 and Cryo-Emitter early. Electrobolt and Thermophasic open up after step 5.' },
          { t: 'Optional: the Aether Shroud field upgrade', d: 'Makes the final exfil much easier.' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 75, t: 'Find the three Aetherscope parts in the Dark Aether', d: 'Go back in through any rift. The parts can only be picked up in a set order, so if a spot is empty, try another and come back. Plaguehounds appear after each one.', list: [
            'Antenna: in the Yard (spawn), under the concrete stairs outside the Nacht bunker.',
            'Middle section: on the plane wing at the Crash Site.',
            'Bottom section: in the Particle Accelerator, on the stairs and metal walkway.',
          ], imgs: [
            { src: I + 'scope-yard.webp', cap: 'Antenna in the Yard' },
            { src: I + 'scope-crash.webp', cap: 'Middle section at the Crash Site' },
            { src: I + 'scope-pa.webp', cap: 'Bottom section in the Particle Accelerator' },
          ] },
          { w: 105, t: 'Build the Aetherscope and pick it up', d: 'At its own table on the bottom floor of the Particle Accelerator, behind Pack-a-Punch.' },
          { w: 121, t: 'Take the Medical Bay rift and grab Vogel\'s diary', d: 'A new rift opens in the Medical Bay (Speed Cola). In the Dark Aether, the diary is on the table in the observation room off the Medical Bay.' },
          { w: 151, t: 'Give the diary to Vogel\'s ghost three times', d: 'Listen for "anomaly detected", find the blue orb, interact to make Vogel appear, then interact again to give him the diary. The three spots, in order:', list: [
            'The Medical Bay floor, near the sink.',
            'The Control Room (the Trials room).',
            'In front of the Aetherscope table in the Particle Accelerator.',
          ], warn: 'A huge Megaton (Mayak) can spawn while anyone is in the Dark Aether.', tip: 'Kicked out early? Go back in through the Medical Bay rift.' },
          { w: 197, t: 'Enter the password at the Medical Bay terminal', d: 'Back in the normal world, in the observation room. The password is written on the desk to the right. The big Der Wechsler chamber starts glowing blue. This also unlocks Electrobolt and Thermophasic.' },
          { w: 227, t: 'Finish all four D.I.E. upgrades', needs: ['electrobolt', 'nova', 'cryo', 'thermo'] },
          { w: 679, t: 'Shoot each leg of the chamber with the matching element', d: 'Each leg is coloured. Facing Speed Cola: right leg Electrobolt, left leg Cryo-Emitter. On the other side: right leg NOVA-5, left leg Thermophasic. A leg folds up when you get it right.' },
          { w: 710, t: 'Take the new rift and watch the soldiers by the red case', d: 'A red case lights up outside the observation room and a rift opens nearby. In the Dark Aether, find the ghost orb next to the case: two Soviet soldiers steal the Decontamination Agent. You\'re sent back and a **wrench** lies where they stood.' },
          { w: 725, t: 'Use the wrench on the broken tank in the Yard three times', d: 'A zombie pops out of the hatch. Kill it.' },
          { w: 740, t: 'Throw an explosive into the tank\'s hatch', d: 'Semtex or C4 (craft one at the Crafting Table in spawn). The tank fires and knocks the gold Decontamination Agent out of a tree at the Crash Site.' },
          { w: 755, t: 'Carry the Agent to the red case', d: 'You can\'t shoot while carrying it, and Plaguehounds attack.' },
          { w: 755, t: 'Lead both halves of a split Megaton under the chamber', d: 'Split a Megaton and bring each half (the Bomber and the Blaster) under Der Wechsler. It sucks them in one at a time.' },
          { w: 770, t: 'Everyone goes to the observation room and starts decontamination', d: 'At the terminal. The room locks, the halves merge back into Orlov, and he breaks out. Plaguehounds spawn.' },
          { w: 786, t: 'Get ready for the final fight', d: 'Last chance for perks, armour and Pack-a-Punch. More D.I.E.s help a lot (Electrobolt and Thermophasic are the best); a Ray Gun works too.' },
          { w: 818, t: 'Take the Living Room rift and listen to Orlov', d: 'In the Dark Aether, find the ghost orb (by the 1911 wall-buy). Orlov talks about a photo of his family, then drops it. Back in the normal world, pick the photo up: that starts the fight.', warn: 'No photo on the floor afterwards? Play to the next round and repeat this step.' },
          { w: 865, t: 'Defend Orlov while he shuts the accelerator down', d: 'He works at three spots around the Particle Accelerator. Zombies interrupt him; Megatons, Mayak and Plaguehounds go after you.', tip: 'Killing Megatons with the D.I.E. refills its ammo. There\'s an ammo cache under the stairs on the bottom floor.' },
          { w: 925, t: 'Exfil', d: 'Run to the marked exfil point before the timer ends. Blue pillars of lightning block the way: going through one hurts, and the middle downs you. Aether Shroud gets you through safely.', tip: 'Get everyone to the helicopter if you can.', imgs: [{ src: I + 'ending.webp', cap: 'The exfil' }] },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Alone"',
        summary: 'Interact with three cassette tapes.',
        spots: [
          'Living Room (Nacht bunker): in the broken fridge right of the sofa.',
          'Particle Accelerator: below Pack-a-Punch, far right, on top of a machine next to a bloody tower.',
          'Medical Bay: on the shelf right of the pill cabinets, opposite the terminal.',
        ],
      },
      {
        id: 'coffin-dance', tab: 'side', type: 'Free reward', name: 'Coffin Dance crate',
        summary: 'After Pack-a-Punch is built, shoot the five blue orbs around the Particle Accelerator room. You\'re pulled into the Dark Aether, where zombies dance with a crate near Pack-a-Punch. When you come back out, the crate is there: open it for loot and a free Juggernog.',
      },
      {
        id: 'giant-hand', tab: 'side', type: 'Free reward', name: 'Free Legendary weapon',
        summary: 'In the Dark Aether, shoot the four buttons in the window behind Speed Cola in the Medical Bay. A giant hand reaches out of a door in the window: let it grab and kill 15 zombies and your gun becomes Legendary.',
      },
      {
        id: 'floating-zombies', tab: 'side', type: 'Free reward', name: 'Free scorestreak',
        summary: 'In the Dark Aether, shoot five floating zombies around the map. A free scorestreak appears. (Standing under the last one gives you a jump scare.)',
      },
    ],
  });
})();
