/* Reckoning — Black Ops 6, Season Five (final map) */
(() => {
  const I = 'assets/img/bo6/reckoning/';
  const SE = t => ({ id: 'wXLYA3OdCCw', title: 'Every side Easter egg in Reckoning', ch: 'MrDalekJD', len: '26:26', t }); // MrDalekJD side Easter eggs
  const E = 'DjaCGge3Mzk'; // MrRoflWaffles easter egg guide (both endings)
  const P = 'K0LuwOJXMIE'; // MrRoflWaffles Pack-a-Punch guide
  const G = 'B27Y1ARMV2A'; // MrRoflWaffles Gorgofex build and upgrades
  const EV = { id: E, title: 'Reckoning easter egg guide (both sides)', ch: 'MrRoflWaffles', len: '30:40' };
  const PV = { id: P, title: 'Reckoning Pack-a-Punch', ch: 'MrRoflWaffles', len: '2:24' };
  const GV = { id: G, title: 'Gorgofex build and upgrades', ch: 'MrRoflWaffles', len: '12:30' };

  ZG.addMap({
    game: 'bo6', id: 'reckoning', order: 6,
    name: 'Reckoning', dlc: 'Season Five', eeName: 'Main quest: unleash the Sentinel Artifact',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Gorgofex', 'Franken-Klaus', 'Choose a side'],
    blurb: 'The Janus Towers above Liberty Falls, the final Black Ops 6 map. Build the Gorgofex, rebuild Klaus, open a portal to Tower 3 and decide the ending: side with Richtofen and fight S.A.M., or side with S.A.M. and fight Richtofen.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op), two endings'],
      ['Wonder weapon', 'Gorgofex (free build)'],
      ['Key items', 'DNA vial, Fowler injection, fungal head, Vacuum-Seal Devices'],
      ['Boss', 'S.A.M. (side with Richtofen) or Richtofen (side with S.A.M.)'],
    ],
    intro: {
      start: 'Pack-a-Punch is in the particle accelerator in Tower 2, reached through a portal from Richtofen\'s office. Before anything else, push the mop bucket in reception under the sprinkler: the quest needs it later. Black Ops 6 rules are explained in the basics on Liberty Falls.',
      weapons: 'The Gorgofex is required (its upgraded versions work too). Its build is free and can overlap with the early quest steps.',
      'easter-egg': 'Many steps can be worked on side by side; Klaus\'s arms only drop on special rounds, so start early. Fighting Richtofen is the harder ending. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Open the way to Richtofen\'s office in Tower 1 and press the button on his desk. Go through the portal to the particle accelerator in Tower 2, flip the switch and destroy every Dark Aether crystal.',
        video: PV,
        steps: [
          { w: 0, t: 'Open the way to Richtofen\'s office', d: 'Either side from spawn; follow the orange markers through the elevators and across the jumps.' },
          { w: 68, t: 'Press the button on his desk and go through the portal' },
          { w: 83, t: 'Flip the switch on the catwalks', d: 'The particle accelerator starts, then fails.' },
          { w: 98, t: 'Destroy every Dark Aether crystal in the room', d: 'Four sets, marked on screen. Pack-a-Punch appears.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'gorgofex', tab: 'weapons', type: 'Wonder weapon', name: 'Gorgofex', img: I + 'gorgofex.webp', color: 'green',
        summary: 'A living weapon grown from a cyst. It has a charged shot that the quest uses several times. It can\'t be Pack-a-Punched; instead there are two optional upgrades, Gorgofex N and C, and taking one locks you out of the other.',
        facts: [['Get it', 'Free build, or the Mystery Box'], ['Upgrades', 'Gorgofex N (green), Gorgofex C (blue)']],
        video: GV,
        steps: [
          { w: 15, t: 'Read the words on the two static monitors in the Mutant Research Lab', needs: ['power-pap'], d: 'Pack-a-Punch has to be on first. One is between the Mangler tank and Deadshot Daiquiri, the other by the tank with Richtofen\'s wife and child. Each flashes a green word now and then; note the first letter of each. Sometimes only one screen works: then you have one letter.' },
          { w: 47, t: 'Turn the letters into a code with the periodic table', d: 'Find the element with those letters (try them reversed if needed) and take its atomic number as three digits: hydrogen (H) is 001. You get two tries per round.' },
          { w: 174, t: 'Enter it on the keypad up the stairs to open the Bioweapons Lab' },
          { w: 192, t: 'Feed the cyst three Vermin and three zombies', d: 'Three Vermin (Parasites work too), then three zombies. Weaken them right next to the open glass hood until they get sucked in. Damaging zombies there can make Vermin burst out. Then take the cyst.' },
          { w: 240, t: 'Drain three yellow plants in the Quantum Computing Core', d: 'Stand near each plant while the cyst sucks it dry. Dodge the acid it spits.' },
          { w: 285, t: 'Start four power surges in Dark Entity Containment', d: 'In Tower 2 by the Forsaken. Hold interact on the computer saying "Initiate Power Surge", then quickly on the other active screens (listen for their sound).' },
          { w: 335, t: 'Break an Uber Klaus\'s shoulder pads and lead it onto the electric plate', d: 'The Forsaken fuses with it. Kill the result and take what it drops; combine it with the cyst for the Gorgofex.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Reckoning main quest', short: 'Main quest',
        summary: 'Gather a DNA vial and a blood sample, wake Dr Fowler for his mutant injection, rebuild Klaus, crack the S.A.M. files code, open a portal to Tower 3 with the Gorgofex, cleanse a fungal head, collect four floating items, then ride the lift up and choose your side for the final fight.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, ending cutscene for your side'],
          ['Boss', 'S.A.M. or Richtofen (your choice)'],
        ],
        prep: [
          { t: 'Pack-a-Punch on', needs: ['power-pap'] },
          { t: 'The Gorgofex', needs: ['gorgofex'] },
          { t: 'Melee Macchiato (for the brain step)' },
          { t: 'For the boss: Pack-a-Punch 3, ammo mods, long-range guns (S.A.M. flies), PhD Flopper with Tribologist' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 46, t: 'At the start: push the mop bucket under the sprinkler in reception', d: 'Melee it until it\'s under the sprinkler, then run through the metal detectors to set the sprinkler off and fill it.' },
          { w: 92, t: 'Take the syringe next to the Mangler tank', d: 'In the Mutant Research Lab, from the genome sequencer to the right of the big blue tank.' },
          { w: 123, t: 'Jump into the accelerator beam to knock down the floating body', d: 'In the Pack-a-Punch room, go up the side walkway and jump into the beam (try the other side if it won\'t let you). Avoid the other objects. Take the blood sample from the body.' },
          { w: 169, t: 'Shoot an arm off a Kommando Klaus on a special round', d: 'Special rounds come every five or six rounds. You only get one arm per special round, so you need two (if the first gives you none, the next one gives both).' },
          { w: 232, t: 'Kill the Geneticist and take the DNA vial from the fridge', d: 'A zombie in a green lab coat (from about round 5 or 6, once Pack-a-Punch is on) drops a keycard. Use it on the fridge in the room with Richtofen\'s wife and child.' },
          { w: 278, t: 'Find Klaus\'s two legs in Android Assembly', d: 'On a shelf above head height, behind a broken mirror, by a broken TV in a scrap pile, or behind a door.' },
          { w: 736, t: 'Put the arms and legs on Klaus\'s body in Android Assembly' },
          { w: 752, t: 'Put the syringe back in the sequencer and kill Dr Fowler', d: 'The Mangler in the tank breaks out: it\'s Fowler. Kill it (an Elder Disciple joins in) and take the green Fowler Mutant Injection.' },
          { w: 797, t: 'Use the injection, then the retina scanner in Dark Entity Containment', d: 'A teleporter opens to the Teleportation Lab. Lost the injection? Buy another at the sequencer for 1,500 salvage.' },
          { w: 827, t: 'Have an Uber Klaus zap Franken-Klaus awake', d: 'Lead one to the hanging Klaus so its electric attack hits him. He hacks the nearby computer.' },
          { w: 892, t: 'Escort Franken-Klaus and win the S.A.M. trial', d: 'Next round, follow him to Dark Entity Containment and let him hack the S.A.M. Trial machine. Complete its challenge. He then walks to the Teleportation Lab.' },
          { w: 955, t: 'Find four S.A.M. file folders and work out the code', d: 'Each shows one of Samantha\'s belongings with a file number and a date. They sit on desks and coffee tables in the Executive Suite and Director\'s Office, on the main desk outside the offices (up the stairs from Juggernog), or on the Teleportation Lab computer where Franken-Klaus hacks. Order the four files by date; their numbers form a four-digit code.', tip: 'Each item always has the same number and date. Oldest to newest: BND badge 6, Notso\'s collar 1, scarf 3, wristwatch 4, combat goggles 5, katana 2. Your code is the numbers of the four you found, in that order.' },
          { w: 1099, t: 'Enter the code on the Teleportation Lab computer' },
          { w: 1116, t: 'Rush the brain from the Quantum Computing Core to Franken-Klaus', d: 'Melee the metal container with Melee Macchiato to break it, grab the brain and run it to the machine next to Klaus before time runs out. You can\'t use weapons while carrying it.' },
          { w: 1162, t: 'Boost the accelerator and charge the Gorgofex', d: 'Press the switch in the Pack-a-Punch room. Kill five blue Quantum Vermin with the Gorgofex, then interact with the device holding the energy orb. Don\'t fire the Gorgofex after this.', needs: ['gorgofex'] },
          { w: 1207, t: 'Charged shot at the crystals on the Teleportation Lab teleporter', d: 'They shatter, opening the portal to Tower 3.', warn: 'Don\'t go through it yet: it kills you.' },
          { w: 1223, t: 'Charged shot at the spore in the Quantum Computing window', d: 'A zombie is in the window; aim for the spore in its corner (easier from above). The fungal head drops.' },
          { w: 1238, t: 'Put the head in the full bucket and feed it souls', d: 'Kill about 30 zombies near it until its eyes glow purple. You can also carry it as a walking soul box (no sprinting).' },
          { w: 1299, t: 'Carry the head to the Tower 3 portal', d: 'A shadowy figure follows and hurts you up close. Place the head on the portal; plants grow around it.' },
          { w: 1330, t: 'Collect four floating items with Vacuum-Seal Devices', d: 'Open the Janus boxes for devices (they work like a Kazimir). Purple-glowing items float around the map: a flower pot near spawn, a toolbox, a bin or box, items in the Executive Suite. Throw a device at each and pick the device back up.' },
          { w: 1454, t: 'Load the devices into the terminal and survive the lockdown', d: 'In front of the portal. Lots of enemies spawn; flip each red lever to green as it appears (six in all). The portal now leads to Tower 3, with no way back.' },
          { w: 1500, t: 'Get ready and choose a side', d: 'Pack-a-Punch 3, all your ammo mods. At the Sentinel Artifact in the lift, vote: side with Richtofen (fight S.A.M., easier) or with S.A.M. (fight Richtofen, harder).' },
          { w: 1560, t: 'Fill three canisters, then destroy the crystals', d: 'The lift stops at Vault 1: get kills near each of three glowing canisters. At Vault 2, shoot every purple crystal. Wunderfizz, the Arsenal and a Crafting Table are on these floors.' },
          { w: 1591, t: 'Sided with Richtofen: beat S.A.M.', d: 'She flies over the roof. Dodge her energy mines (stand under her in phase 1, opposite her later), blasts and laser. After the laser, shoot her four vents to expose her eye, then shoot the eye. Twice she leaves to set a S.A.M. trial (win it for a free perk; fail and you get a penalty). Long-range guns help.' },
          { w: 1686, t: 'Sided with S.A.M.: beat Richtofen', d: 'First he fights in an Uber Klaus suit: very tough, with slams. Then he flies with a jetpack and a Wunderwaffe that downs you in a few hits; break his shield before he takes critical damage. Aether Shroud or smoke hides you. He also carpet-bombs the roof.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Remember Us"',
        summary: 'Interact with three Mister Peeks headphones.',
        video: SE(330),
        spots: [
          'Mutant Research Lab (T1): on the floor next to a body near the cryo tank holding an Elder Disciple.',
          'Dark Entity Containment (T2): worn by a body sitting on a chair in the lower part of the room.',
          'Director\'s Office (T1): in a cabinet on the shelf behind the desk.',
        ],
      },
      {
        id: 'song-peace', tab: 'side', type: 'Song', name: '"Samantha\'s Peace"',
        summary: 'After Pack-a-Punch, run through the metal detectors in reception in this order (looking from spawn): left, right, middle, four times over.',
        video: SE(377),
      },
      {
        id: 'song-soul', tab: 'side', type: 'Song', name: '"Samantha\'s Soul" (Leo Sartwell remix)',
        summary: 'In the T1 Director\'s Office, shoot the pool balls on the wall in the order 1, 1, 5. The remix plays and you also get a free Self-Revive.',
        video: SE(298),
      },
      {
        id: 'gorgofex-n', tab: 'weapons', type: 'Gorgofex upgrade', name: 'Gorgofex N (Blanchard\'s essence)', color: 'aether',
        summary: 'Side with Panos: drain Blanchard\'s life into the Gorgofex. Zombies hit by it writhe in green decay. Taking this upgrade rules out the Gorgofex C (it moves to the Mystery Box instead). Pack-a-Punched it becomes the Gorgofex Necrodystonia.',
        video: GV,
        steps: [
          { w: 366, t: 'Build the Gorgofex', needs: ['gorgofex'] },
          { w: 383, t: 'Talk to Blanchard through the Security Office door', d: 'In the T1 Executive Suite.' },
          { w: 383, t: 'Take the Strauss Counter from the T1 Quantum Computing Core', d: 'From the terminal highlighted in yellow.' },
          { w: 399, t: 'Follow the counter to the life drain serum and hit it with a charged shot', d: 'The reading goes out of range (wrong tower), low (right tower, wrong floor), medium, then high. At high, the number on top climbs as you face the spot: aim where it reaches 9 and fire a charged Gorgofex shot.', list: [
            'Android Assembly: above the elevator door, or in the window right of it.',
            'Dark Entity Containment: in the window on the left as you leave the elevator.',
            'Director\'s Office: the shelf by the TV in the Electric Cherry room (it works from the window side too).',
            'Executive Suite: the window by the cabinets near the Director\'s Office.',
          ] },
          { w: 538, t: 'Collect the extractor parts', d: 'A fan from the broken filing cabinets left of the Arsenal in Dark Entity Containment, and tubing on the floor outside the Quantum Computing lab. The wiki also lists a clean hood from the T1 Bioweapons Lab.' },
          { w: 570, t: 'Build the Essence Extractor at Blanchard\'s door, add the serum and defend it', d: 'About two minutes of heavy lockdown. Blanchard is sucked into the vial.' },
          { w: 602, t: 'Take his essence to the terminal in the Bioweapons Lab for the Gorgofex N', d: 'Where you fed the cyst.' },
        ],
      },
      {
        id: 'gorgofex-c', tab: 'weapons', type: 'Gorgofex upgrade', name: 'Gorgofex C (Panos\'s spirit)', color: 'lightning',
        summary: 'Side with Blanchard: capture Dr Panos\'s spirit in the Gorgofex for its blue upgrade. Taking it rules out the Gorgofex N (it moves to the Mystery Box instead). Pack-a-Punched it becomes the Gorgofex Corpsloder.',
        video: GV,
        steps: [
          { w: 366, t: 'Build the Gorgofex', needs: ['gorgofex'] },
          { w: 633, t: 'Talk to Blanchard through the Security Office door', d: 'In the T1 Executive Suite.' },
          { w: 648, t: 'Press the red button in T1 Project Janus Reception and defend Klaus', d: 'The room turns red while a friendly Klaus runs a shutdown that switches off one elevator.' },
          { w: 664, t: 'Go up the other elevator, then parachute down the dead shaft hitting three red switches', d: 'They\'re on the walls on the way down.' },
          { w: 696, t: 'Kill the blue-glowing zombies in the T1 Quantum Computing Core with the Gorgofex' },
          { w: 712, t: 'Interact with Panos\'s ghost for the Gorgofex C', d: 'The blue orbs gather in the middle of the room and he appears.' },
        ],
      },
      {
        id: 'perk-hoops', tab: 'side', type: 'Free perk', name: 'Free perk: Mister Peeks parachute hoops',
        summary: 'From the Executive Suite level, shoot the Mister Peeks doll on the middle structure above the Mutant Research Lab. It floats up to the railing opposite the Crafting Table; interact with it and it leaves blue hoops down the floors. Glide through every hoop with your parachute: a Random Perk appears when you land at the bottom of Reception.',
        video: SE(10),
      },
      {
        id: 'perk-vermin', tab: 'side', type: 'Free perk', name: 'Free perk: Vermin high score',
        summary: 'During the main quest\'s Gorgofex Vermin step in Sublevel 10, the counter above the red button counts your points. Score over 2,000 and a Random Perk appears in the control room.',
        video: SE(64),
      },
      {
        id: 'aether-blade', tab: 'side', type: 'Free weapon', name: 'Aether Blade (melee weapon)', img: I + 'aether-blade.webp',
        summary: 'Hang three missing paintings in the Director\'s Office, then open a hidden safe for the Aether Blade.',
        video: SE(508),
        steps: [
          { w: 508, t: 'Hang the three paintings left of the Arsenal in the Director\'s Office', d: 'One at a time:', tip: 'Each one you hang pays 500 points (double with Double Points on).', list: [
            'Reception: behind the leftmost door right of the red portal.',
            'Android Assembly: behind a yellow wet-floor sign right of the top Anti-Grav Launcher.',
            'Sublevel 10: in a corner by the broken elevator, opposite the GobbleGum machine.',
          ] },
          { w: 579, t: 'Drive an RC-XD behind the Forsaken\'s cage and blow up the crystal there', d: 'Through the small gap in the fence in the lower part of Dark Entity Containment. Destroy all the crystals that appear until a safe key drops.' },
          { w: 627, t: 'Use a Mister Peeks field upgrade on the painting behind the Director\'s desk', d: 'The one right of a red portal. It falls and reveals a safe.' },
          { w: 644, t: 'Open the safe and survive the lockdown', d: 'Zombies and an elite Elder Disciple. Then take the Aether Blade from the safe.' },
        ],
      },
      {
        id: 'golden-bin', tab: 'side', type: 'Free reward', name: 'Golden bin',
        summary: 'Four of the bins around Janus Towers spit out loot (anything from Salvage to a perk). Find those four, then go back to spawn: a glowing gold bin there gives 1,500 points, 200 Salvage, a scorestreak, a Self-Revive and equipment.',
        video: SE(149),
        spots: [
          'Reception: left of the Rampage Inducer by the broken washroom door.',
          'Reception: opposite Quick Revive, at the end of the corridor.',
          'Executive Suite: right corner before the small break room.',
          'Executive Suite: behind Juggernog, in the corner between a door and a window.',
          'Executive Suite: left of the Security Room door.',
          'Executive Suite: left of an ammo box.',
          'Executive Suite: in the corner before the Director\'s Office door.',
          'Director\'s Office: in a dark corner at the far end.',
        ],
      },
      {
        id: 'target-practice', tab: 'side', type: 'Free reward', name: 'Reception target practice',
        summary: 'After Pack-a-Punch, stand on the Project Janus logo on the floor in front of the little stairs in Reception and shoot the logo in the middle of the TV. Shoot every red-outlined logo that pops up before the timer runs out for an ammo mod. Twice more for an Aether Tool, then a Raw Aetherium Crystal (better in later rounds).',
        video: SE(225),
      },
      {
        id: 'aetherella', tab: 'side', type: 'Helper', name: 'Aetherella laser doll',
        summary: 'With the Gorgofex, look through the broken washroom door by the Rampage Inducer in Reception and use the spray emote on the first stall on the left. Shoot the Aetherella figure inside with a charged Gorgofex shot: she follows you. In Sublevel 10, jump into the laser beam, then jump in again and touch her: she lasers zombies for a few rounds. Repeat the beam to recharge her.',
        video: SE(436),
        needs: ['gorgofex'],
      },
      {
        id: 'basketball', tab: 'side', type: 'Free reward', name: 'Basketball (free Aetherium Crystal)',
        summary: 'In Sublevel 10, from the GobbleGum machine side, shoot the basketball stuck in the ceiling while low gravity is on. Kick it into the zombie window by that GobbleGum machine (top of the first stairs from the Particle Accelerator), then shoot it for a free Aetherium Crystal.',
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each. The Fire Sale only appears once you have the other seven.',
        video: SE(1477),
        spots: [
          'Bonus Points: T1 Executive Suite, on the radio tower above the ceiling, seen from the launcher.',
          'Max Ammo: T2 Android Assembly, on a cabinet near the ceiling left of the launcher to the Mutant Research Lab.',
          'Double Points: T1 Quantum Computing Core, in a rack above the central structure, seen from the turret.',
          'Full Power: above the T1 Mutant Research Lab, seen from Deadshot Daiquiri.',
          'Insta-Kill: T2 Dark Entity Containment, on the servers in the Employees Only window on the right after the elevator shaft.',
          'Max Armor: on the turret of the rightmost armoured vehicle outside Reception.',
          'Nuke: T2 Sublevel 10, above the blue pipe left of the Crafting Table.',
          'Fire Sale: T1 Reception, in the fire inside the window left of Quick Revive.',
        ],
      },
    ],
  });
})();
