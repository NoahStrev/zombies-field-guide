/* Gorod Krovi — Black Ops III, Descent DLC */
(() => {
  const I = 'assets/img/bo3/gk/';
  ZG.addMap({
    game: 'bo3', id: 'gorod-krovi', order: 5, group: 'original',
    name: 'Gorod Krovi', dlc: 'Descent · DLC 3', eeName: 'Love and War',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Guard of Fafnir', 'Gauntlet of Siegfried', 'Dragon Strike'],
    blurb: 'A ruined Stalingrad patrolled by dragons, Manglers and Valkyrie Drones. Raise a dragon whelp, earn the Dragon Strike, help S.O.P.H.I.A. and face Nikolai in his mech.',
    quick: [
      ['Main EE', 'Love and War'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Gauntlet, Dragon Strike, GKZ-45 Mk3'],
      ['EE reward', 'All perks (if done within 115 min)'],
    ],
    intro: {
      start: 'Pack-a-Punch is in the Hatchery, reached by riding a dragon once you have built the Dragon Network Controller.',
      parts: 'One shield with three parts, three spots each.',
      'easter-egg': 'Long and random, with lots of timed tasks. Finish within 1 hour 55 minutes of starting the game to also get all perks. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn on the power, defend three Groph Pods for the Dragon Network Controller, then ride a dragon to the Hatchery.',
        steps: [
          { w: ['EDLnCiwz24w', 7], t: 'Turn on the power in Dragon Command', d: 'Work your way to the Dragon Command building and turn the power on.' },
          { w: ['EDLnCiwz24w', 17], t: 'Talk to S.O.P.H.I.A.', d: 'Press the button under her centre console (it flashes green, then red). Zombies now start dropping Code Cylinders.' },
          { w: ['EDLnCiwz24w', 20], anyList: 'Pods in any order', t: 'Defend three Groph Pods', d: 'Each Code Cylinder matches a console in Dragon Command, the Supply Depot or the Tank Factory. Insert it and a Groph Pod crashes somewhere on the map (green beam in the sky). Kill 15 zombies close to the pod before they wreck it; it opens with a module. Get all three.', warn: 'Zombies start attacking the pod right away, even far from you. Lose one and you need another Code Cylinder.', tip: 'Buy Stamin-Up before calling pods, especially solo.' },
          { t: 'Install the modules in the Operations Bunker', d: 'Put all three into the Dragon Network console in the middle of the room. This is the Dragon Network Controller.' },
          { w: ['EDLnCiwz24w', 33], t: 'Ride the dragon to Pack-a-Punch', d: 'Call the dragon (500 points) at the platform in Dragon Command, the Supply Depot or the Tank Factory and hold interact to climb on. It flies you to the Hatchery, where Pack-a-Punch is on the ground floor. The sewer in the Hatchery basement takes you back to Belinski Square.' },
        ],
      },
      {
        id: 'ee-roadmap', tab: 'start', stepsOrder: 'suggested', type: 'Plan', name: 'Road to the Easter Egg',
        summary: 'What Love and War needs. The egg, shield and Dragon Strike can all be worked on at the same time.',
        steps: [
          { t: 'Power, Groph Pods and Pack-a-Punch', needs: ['power-pap'] },
          { t: 'Build the Guard of Fafnir', needs: ['fafnir'] },
          { t: 'Pick up the dragon egg on your first Hatchery visit', needs: ['gauntlet'] },
          { t: 'Get the Dragon Strike (Hatchery lockdown)', needs: ['dragon-strike'] },
          { t: 'Hatch the egg and claim the Gauntlet of Siegfried', needs: ['gauntlet'] },
          { t: 'Optional: unlock the Dragon Wings', needs: ['dragon-wings'] },
          { t: 'Start Love and War', needs: ['main-ee'] },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'fafnir', tab: 'parts', type: 'Buildable · Shield', name: 'Guard of Fafnir', img: I + 'fafnir.webp', color: 'fire',
        summary: 'A dragon-head shield that shoots fireballs and makes you immune to dragon fire while you hold it in front of you.',
        facts: [['Parts', '3'], ['Special', 'Fireball attack · fire immunity'], ['Upgrade', 'Tiamat\'s Maw']],
        parts: [
          { w: 33, name: 'Dragon Visage', icon: I + 'fafnir-visage.webp', area: 'Infirmary', spots: [
            'At the top of the Operations Bunker stairs, look slightly left: on the floor between two small crates by the big broken bookshelf.',
            'On the right-hand bunk bed of the two touching the side of the stairs up to Stamin-Up.',
            'Facing Stamin-Up, look left: on debris under the leftmost of three broken windows on the green wall.',
          ] },
          { w: 8, name: 'Core', icon: I + 'fafnir-core.webp', area: 'Department Store & Operations Bunker', spots: [
            'On a wooden chair in the Juggernog room, by the desk lit by a lamp.',
            'On the door of the truck carrying blue barrels, downstairs from the Department Store before the Operations Bunker (left side, across from the GobbleGum machine).',
            'On a shelf in the Operations Bunker, right of the Electric Trap switch, before the stairs up to the Infirmary.',
          ] },
          { w: 60, name: 'Maw', icon: I + 'fafnir-maw.webp', area: 'Armory', spots: [
            'Lowest level, next to the Wunderfizz, hanging on a big piece of wooden floor debris.',
            'Upstairs, just past the doorway by the GobbleGum machine, on the wall next to the metal doorway to the Supply Depot.',
            'Top level, on the side of a crate straight ahead as you come up the stairs (far right, same wall as the Bridge switch).',
          ] },
        ],
        upgrade: {
          name: 'Tiamat\'s Maw', img: I + 'tiamat.webp', summary: 'Red fireballs and far more durability (35 hits). Progress is shared in co-op; once one player has it, everyone can take it from the workbench.',
          steps: [
            { w: 20, t: 'Kill 50 zombies with the shield', d: 'Melee bashes and fireballs both count (shared in co-op). A ding tells you it\'s done; it sounds different from the shield breaking.' },
            { w: 61, anyList: 'Symbols in any order', t: 'Hit three purple symbols with fireballs', d: 'They only appear once the kills are done:', list: [
              'Dragon Command: stand on the left metal stairs to the dragon platform and look left.',
              'Supply Depot: across from the ramp up to Speed Cola, look up at the broken roof.',
              'Tank Factory: stand on the right metal stairs to the dragon platform, look right at the fallen robot\'s shoulder.',
            ], tip: 'Out of fireballs? Let the shield break and pick up a new one — it comes fully charged.' },
            { w: 141, t: 'Stand in dragon fire with the shield up — twice', d: 'Be in the area before the fire starts, hold the shield in front of you, and stay in the flames for the whole burn. End of a round with a couple of zombies left is safest.', tip: 'This can count before the kills, but you only hear the ding when it comes after them, so doing it last is easiest.' },
            { w: 184, t: 'Dip the shield in the dead dragon in Belinski Square', d: 'Interact with the pool of blood by the dragon remains near the Trials tombstones. The upgraded shield goes back into your inventory a few seconds later.' },
          ],
          video: { id: 'iaY_sbbGd-g', title: 'Tiamat\'s Maw: Gorod Krovi Dragon Shield Upgraded', ch: 'MrRoflWaffles', len: '4:58' },
        },
        video: { id: 'B-hjdFIQEqk', title: 'All Gorod Krovi Shield Part Locations', ch: 'MrRoflWaffles', len: '2:06' },
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'gauntlet', tab: 'weapons', type: 'Specialist · Wonder weapon', name: 'Gauntlet of Siegfried', short: 'Gauntlet', img: I + 'gauntlet.webp', color: 'fire',
        summary: 'Raise a dragon whelp from an egg. The Gauntlet launches the whelp to fight for you and gives you a 115 Punch. Required for the easter egg. You\'ll visit the Hatchery at least three times.',
        stepsTitle: 'Raise the dragon',
        steps: [
          { w: 40, t: 'Shoot down the egg in the Hatchery basement', needs: ['power-pap'], d: 'The only unbroken egg sits on the rafters above the sewer grate. Shoot it, then pick it up where it lands.' },
          { w: 60, t: 'Heat it in a dragon nest', d: 'Place it in a nest where a dragon lands to breathe fire. The easiest one is in front of Dragon Command, in the smouldering debris straight down the centre staircase. The egg must be in the nest before the dragon starts breathing fire.', note: 'It needs the rest of that round plus one full round to cool before you can pick it up.' },
          { w: 100, t: 'Teach it to hunt, in this order', d: 'Check progress on the Trials tombstones in Belinski Square (it\'s the fourth trial):', ol: [
            'Kill Napalm Zombies (zombies set on fire by a dragon).',
            'Get penetration multi-kills — the mounted MG42 on the Hatchery top floor (1,000 points) counts. The GKZ-45 Mk3 doesn\'t.',
            'Get melee kills (knife, Bowie Knife or the shield bash/fireball).',
          ] },
          { w: 141, t: 'Hatch it in the Hatchery basement incubator', d: 'Placing the egg starts a lockdown like a Groph Pod defence. Survive it, then head back to the main map while it cools.', imgs: [{ src: I + 'incubator.webp', cap: 'The incubator' }] },
          { w: 183, t: 'Pick up the egg and claim the Gauntlet', d: 'S.O.P.H.I.A. tells you when it\'s ready (+5,000 XP). Activate the bottom trial on the Trials tombstones in Belinski Square and the Gauntlet rises out of the ground.', imgs: [{ src: I + 'whelp.webp', cap: 'The whelp, launched from the Gauntlet' }] },
        ],
        blocks: [{ tip: 'Do the MG42 and melee trials during the Dragon Strike lockdown to save trips.' }],
        video: { id: 'rRKpJXVOwyg', title: 'Dragon Egg & Gauntlet of Siegfried Tutorial', ch: 'MrDalekJD', len: '3:45' },
      },
      {
        id: 'dragon-strike', tab: 'weapons', type: 'Wonder weapon', name: 'Dragon Strike', img: I + 'dragon-strike.webp', color: 'red',
        summary: 'A controller that marks a spot for a dragon to blast with fire. Earned from a lockdown in the Hatchery.',
        steps: [
          { w: ['EDLnCiwz24w', 681], t: 'Start the Hatchery lockdown', needs: ['power-pap'], d: 'Interact with the crystal on the top floor of the Hatchery (in co-op, everyone must). A Max Ammo floats near Pack-a-Punch — grab it when the fourth wave starts.' },
          { t: 'Survive four waves', d: 'Zombies, Manglers and Valkyrie Drones attack, first one side at a time, then all windows. No points are earned and Pack-a-Punch is closed until it ends. The round number is frozen.', tip: 'Before round 10 the Bowie Knife still one-hits. Shoot Mangler helmets and arm cannons now to unlock the Mangler Helmet.' },
          { t: 'Take the Dragon Strike from the crystal' },
        ],
        upgrade: {
          name: 'Draconite Controller', summary: 'Bigger blast and more damage. Progress is shared in co-op.',
          video: { id: '1yAdvnjykT0', title: 'Dragon Strike upgrade (Draconite Controller)', ch: 'MrRoflWaffles', len: '6:54' },
          steps: [
            { w: 31, t: 'Kill about 40 zombies with Dragon Strikes', d: 'A loud roar plays when done.' },
            { w: 79, anyList: 'Flags in any order', t: 'Mark the red Iron Cross flags', d: 'Solo: one flag (random) remains of four; co-op: more. Mark each remaining flag with the Dragon Strike:', list: [
              'Supply Depot: stand on the left dragon-platform stairs and look left.',
              'Dragon Command: left dragon-platform stairs, look straight ahead at ground level (half behind rubble).',
              'Tank Factory: top of the stairs up to Double Tap, look out of bounds near the hanging tank.',
              'Belinski Square: corner by Quick Revive behind the gushing water pipe, look out of bounds.',
            ] },
            { w: 223, t: 'Redo the Hatchery lockdown, using Dragon Strikes', d: 'Everyone interacts with the crystal again. Fire the Dragon Strike out of the windows as often as you can each wave (it recharges every 15–20 seconds here). Then take the Draconite Controller from the crystal.' },
          ],
        },
      },
      {
        id: 'gkz', tab: 'weapons', type: 'Wonder weapon', name: 'GKZ-45 Mk3', img: I + 'gkz.webp', color: 'aether',
        summary: 'Dual wield: a GKZ-45 that slows zombies and a Ray Gun Mark III that creates black holes. Mystery Box only. Not required, but the best gun for most easter egg steps.',
        upgrade: { name: 'Maelstrom of Eris', summary: 'Pack-a-Punched version. Its Ray Gun Mk III shots are great against Gersh and the bosses.', steps: [{ t: 'Pack-a-Punch it', needs: ['power-pap'] }] },
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Love and War', short: 'Main EE',
        summary: 'Crack S.O.P.H.I.A.\'s code, collect six silver trophies, finish her six tasks and free the original Nikolai — then kill a dragon and defeat Nikolai\'s mech.',
        facts: [
          ['Players', '1–4 (solo works; co-op makes timed tasks easier)'],
          ['Reward', 'Every perk with unlimited perk slots (kept if you go down), achievement, Gateworm icon, 7,500 XP'],
          ['Hardest part', 'Bomb defuse task and the boss'],
        ],
        prep: [
          { t: 'Power on and Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'Guard of Fafnir built', needs: ['fafnir'] },
          { t: 'Dragon Strike obtained', needs: ['dragon-strike'] },
          { t: 'Gauntlet of Siegfried claimed', needs: ['gauntlet'] },
          { t: 'Optional: Dragon Wings or Mangler Helmet', needs: ['dragon-wings'], d: 'Both help a lot in the later steps.' },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { w: 241, t: 'Power the Hatchery generator with a Valkyrie Drone', d: 'In the Hatchery basement, a generator sits under a green/black tarp beside the incubators. Lure a Valkyrie Drone next to it and destroy it there. A hum means it\'s on — and a 5-minute timer starts for the next step.', tip: 'Easiest on a Valkyrie round (first one around rounds 9–12): shoot off all three arms but leave it alive so it self-destructs at you next to the generator. Shoot the red light on the sewer ceiling on your way out — it sets up a trophy for step 4.' },
          { w: 288, t: 'Free the Master Code Cylinder (valves)', d: "There are six valves, each with a dial numbered 1 to 3. A valve's number decides which valve the air goes to next, so the right numbers depend on where the air starts and ends. You need to find two valves: the **start** has a green light on top (only visible while the generator runs), and the **end** whistles and has the pink Master Code Cylinder jammed in it (never turn that one). Pick both below to get the five settings. Hold interact on a valve until its marker lands on the number. When they're all right, the other valves light blue and the cylinder pops out; take it to S.O.P.H.I.A.", list: [
            'Dragon Command, above the left side of S.O.P.H.I.A., right of the Bowie Knife wall-buy.',
            'Infirmary, downstairs below Stamin-Up between the bunk beds, across from the stairs.',
            'Tank Factory, far left of the bottom floor.',
            'Armory top floor, across from the Bridge switch.',
            'Department Store 3rd floor, straight ahead from the walkway coming from the top of the Infirmary.',
            'Supply Depot, right of the Mystery Box spot, under the stairs to Speed Cola.',
          ], lookup: {
            a: 'Green light valve (start)', b: 'Valve with the cylinder (end)',
            options: ['Dragon Command', 'Infirmary', 'Tank Factory', 'Armory', 'Department Store', 'Supply Depot'],
            hint: 'Pick the green valve and the cylinder valve to see the five dial settings.',
            same: 'The green valve and the cylinder valve are always different valves.',
            endNote: "Leave {b} alone: that's the one with the cylinder.",
            answers: {
              'Armory>Department Store': [["Armory", 1], ["Supply Depot", 3], ["Tank Factory", 1], ["Infirmary", 3], ["Dragon Command", 2]],
              'Armory>Dragon Command': [["Armory", 3], ["Department Store", 2], ["Infirmary", 2], ["Tank Factory", 2], ["Supply Depot", 1]],
              'Armory>Infirmary': [["Armory", 2], ["Tank Factory", 2], ["Supply Depot", 1], ["Dragon Command", 2], ["Department Store", 2]],
              'Armory>Supply Depot': [["Armory", 2], ["Tank Factory", 1], ["Infirmary", 1], ["Department Store", 3], ["Dragon Command", 1]],
              'Armory>Tank Factory': [["Armory", 3], ["Department Store", 2], ["Infirmary", 3], ["Dragon Command", 1], ["Supply Depot", 3]],
              'Department Store>Armory': [["Department Store", 3], ["Dragon Command", 3], ["Infirmary", 2], ["Tank Factory", 2], ["Supply Depot", 2]],
              'Department Store>Dragon Command': [["Department Store", 2], ["Infirmary", 2], ["Tank Factory", 3], ["Armory", 1], ["Supply Depot", 1]],
              'Department Store>Infirmary': [["Department Store", 1], ["Armory", 2], ["Tank Factory", 2], ["Supply Depot", 1], ["Dragon Command", 3]],
              'Department Store>Supply Depot': [["Department Store", 1], ["Armory", 2], ["Tank Factory", 1], ["Infirmary", 3], ["Dragon Command", 1]],
              'Department Store>Tank Factory': [["Department Store", 2], ["Infirmary", 3], ["Dragon Command", 1], ["Supply Depot", 2], ["Armory", 2]],
              'Dragon Command>Armory': [["Dragon Command", 1], ["Supply Depot", 3], ["Tank Factory", 1], ["Infirmary", 1], ["Department Store", 1]],
              'Dragon Command>Department Store': [["Dragon Command", 1], ["Supply Depot", 2], ["Armory", 2], ["Tank Factory", 1], ["Infirmary", 1]],
              'Dragon Command>Infirmary': [["Dragon Command", 1], ["Supply Depot", 3], ["Tank Factory", 3], ["Armory", 3], ["Department Store", 2]],
              'Dragon Command>Supply Depot': [["Dragon Command", 2], ["Department Store", 2], ["Infirmary", 2], ["Tank Factory", 3], ["Armory", 1]],
              'Dragon Command>Tank Factory': [["Dragon Command", 3], ["Infirmary", 1], ["Department Store", 1], ["Armory", 1], ["Supply Depot", 3]],
              'Infirmary>Armory': [["Infirmary", 2], ["Tank Factory", 2], ["Supply Depot", 1], ["Dragon Command", 2], ["Department Store", 1]],
              'Infirmary>Department Store': [["Infirmary", 3], ["Dragon Command", 1], ["Supply Depot", 3], ["Tank Factory", 3], ["Armory", 3]],
              'Infirmary>Dragon Command': [["Infirmary", 2], ["Tank Factory", 2], ["Supply Depot", 2], ["Armory", 3], ["Department Store", 3]],
              'Infirmary>Supply Depot': [["Infirmary", 3], ["Dragon Command", 2], ["Department Store", 1], ["Armory", 2], ["Tank Factory", 2]],
              'Infirmary>Tank Factory': [["Infirmary", 3], ["Dragon Command", 2], ["Department Store", 1], ["Armory", 1], ["Supply Depot", 3]],
              'Supply Depot>Armory': [["Supply Depot", 3], ["Tank Factory", 1], ["Infirmary", 3], ["Dragon Command", 2], ["Department Store", 1]],
              'Supply Depot>Department Store': [["Supply Depot", 2], ["Armory", 2], ["Tank Factory", 1], ["Infirmary", 3], ["Dragon Command", 2]],
              'Supply Depot>Dragon Command': [["Supply Depot", 3], ["Tank Factory", 3], ["Armory", 3], ["Department Store", 2], ["Infirmary", 3]],
              'Supply Depot>Infirmary': [["Supply Depot", 3], ["Tank Factory", 3], ["Armory", 3], ["Department Store", 3], ["Dragon Command", 3]],
              'Supply Depot>Tank Factory': [["Supply Depot", 2], ["Armory", 3], ["Department Store", 3], ["Dragon Command", 3], ["Infirmary", 2]],
              'Tank Factory>Armory': [["Tank Factory", 1], ["Infirmary", 1], ["Department Store", 3], ["Dragon Command", 1], ["Supply Depot", 2]],
              'Tank Factory>Department Store': [["Tank Factory", 1], ["Infirmary", 3], ["Dragon Command", 1], ["Supply Depot", 2], ["Armory", 3]],
              'Tank Factory>Dragon Command': [["Tank Factory", 1], ["Infirmary", 1], ["Department Store", 1], ["Armory", 1], ["Supply Depot", 1]],
              'Tank Factory>Infirmary': [["Tank Factory", 2], ["Supply Depot", 2], ["Armory", 3], ["Department Store", 3], ["Dragon Command", 3]],
              'Tank Factory>Supply Depot': [["Tank Factory", 1], ["Infirmary", 3], ["Dragon Command", 2], ["Department Store", 1], ["Armory", 1]],
            },
            source: "Settings from MrRoflWaffles' valve solver on kronorium.com.",
          }, tip: 'Find the whistling cylinder valve before you power the generator (you can hear it any time), so the 5-minute timer only has to cover spotting the green light and turning five dials.', warn: 'Too slow (5 minutes) and the generator shuts off. Press the button next to it in the Hatchery to restart — no drone needed, and nothing re-randomises.' },
          { w: 494, t: 'Enter the password KRONOS', d: 'Shoot the letter wheels left of S.O.P.H.I.A. to spell KRONOS from top to bottom (shoot the left or right edge of a wheel, not the centre). Press interact.', warn: 'A wrong code locks the controls until next round.' },
          { w: 537, anyList: 'Trophies in any order; some can be grabbed early', t: 'Collect six silver trophies', needs: ['fafnir', 'gauntlet', 'dragon-strike'], d: 'Place them under the big monitor across from S.O.P.H.I.A. once the code is entered.', list: [
            '**Gersh trophy** (planet with a ring): stand in front of Dragon Command facing the Armory/Infirmary building. Shoot the raised hand of the statue on the right-hand wall between the two paths. Pick it up by the rubble at ground level on the right.',
            '**Valkyrie trophy**: hit the open, upward-pointing pipe outside the Double Tap room (Tank Factory, metal stairs: through the door right of Double Tap, immediately on your left) with a shield fireball. It drops beside Double Tap.',
            '**Mangler trophy**: use the Gigant laser-beam trap in the Supply Depot and wait about 30 seconds for it to end. Take the trophy from the opened safe.',
            '**Group 935 trophy**: shoot the red light on the sewer pipe ceiling while riding from the Hatchery to Belinski Square, then pick it up from the toilet on the Pack-a-Punch floor of the Hatchery.',
            '**Nuke trophy**: throw a Dragon Strike at the puddle with dead branches sticking out, in the corner you land in when dropping down from Speed Cola outside the Supply Depot.',
            '**Groph Pod trophy**: launch the whelp, then 115-Punch the safe in the Operations Bunker with the Gauntlet. A normal punch doesn\'t work.',
          ] },
          { w: 783, anyList: 'Tasks come in a random order; Information Download is always last', t: 'Finish S.O.P.H.I.A.\'s six tasks', d: 'Press the button under the main monitor to start each task (not during a Valkyrie round). The first five come in random order; "Information Download" is always last. A failed task can be retried next round.', list: [
            '**Simon Says Boom (Nuke trophy):** watch the slow sequence (ignore the fast one) and defuse six bombs in that order — Dragon Command balcony left side · Infirmary brick column between the Bunker stairs and bunk beds · Armory bottom floor left of the window by the Wunderfizz · Tank Factory top room left of the GobbleGum machine · Supply Depot between the wall map and a Valkyrie poster · Department Store 1st floor behind the stairs. 3 minutes solo, 2 in co-op; failing downs everyone outside safe areas (Belinski Square, Hatchery, Dragon Command stairs, on a dragon).',
            '**Capture Gersh (planet trophy):** a yellow orb hums somewhere in the buildings. Damage him with Pack-a-Punched weapons until he stops to talk; after three times he heads to the pad by the monitor himself.',
            '**Escort the green-eyed Mangler:** find it (Tank Factory, Infirmary, Armory or Department Store 3rd floor) and lead it to the pad by the monitor. Shoot off its arm cannon so it sprints. Don\'t use Monkey Bombs, Turned, Idle Eyes, In Plain Sight or Undead Man Walking.',
            '**Escort the damaged Valkyrie:** it enters Belinski Square after ~30 seconds. Stay right next to it so it keeps moving: through the Department Store, up to the 3rd floor, across to the Armory or Infirmary and down to Dragon Command. Don\'t hit it — it dies fast.',
            '**Protect a Groph Pod:** defend it from long range (PaP\'d LMG or sniper), then send the whelp (Gauntlet fully charged) to fetch the cargo and put it in the tray under S.O.P.H.I.A.',
            '**Information Download (always last):** take the keycard from the drawer, put it in the red-lit terminal on the Hatchery middle floor, everyone presses the button, and survive four waves of Manglers. Bring the keycard back to S.O.P.H.I.A.\'s tray.',
          ], tip: 'Gersh tip: the GKZ-45 Mk3\'s Ray Gun (Maelstrom of Eris) takes him down in 1–2 shots.' },
          { w: 1565, t: 'Deliver the power core with the whelp', needs: ['gauntlet'], d: 'S.O.P.H.I.A. gives you a power core. In Belinski Square, launch the whelp toward Nikolai\'s mech (just left of the derailed train is a good spot); it drops off the core. Go back to S.O.P.H.I.A. — she detaches and flies off.' },
          { w: 1634, t: 'Drop into the arena', d: 'Her machine slides back to reveal a floor grate. Everyone stands on it and drops through a sewer to a circular area behind Belinski Square. Press the button in the middle: a giant robot blasts the debris and frees Nikolai\'s mech.', tip: 'Refresh your shield, top up from the Trials Max Ammo, and wear the Mangler Helmet or Dragon Wings.' },
          { w: 1716, t: 'Kill the dragon with Nikolai', needs: ['fafnir'], d: 'Press the button in the middle ring to start (a Max Ammo appears and stays until used). When the dragon lands, Nikolai harpoons a weak spot — focus fire on it: right wing, then left belly, then neck. Keep to the edges and trenches when it breathes fire, or hold your shield up in the flames.' },
          { w: 1799, t: 'Defeat Nikolai\'s mech', d: 'Shoot the two yellow lights on the torso and the two yellow cores that pop out of the shoulders when he attacks (usually when he deploys R.A.P.S.). Then shoot the fifth core where the legs meet the body. Hide behind cover from his minigun and run when embers appear at the edges of your screen (harpoons incoming).', tip: 'Monkey Bombs or a Dragon Strike when he deploys R.A.P.S. give you a window to shoot.' },
        ],
        video: { id: 'EDLnCiwz24w', title: 'Easiest Gorod Krovi Full Easter Egg Guide', ch: 'MrRoflWaffles', len: '31:10' },
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'dragon-wings', tab: 'side', type: 'Wearable', name: 'Dragon Wings', color: 'fire',
        summary: '30% less fire and explosive damage, free dragon rides for everyone, and instant teleport to the Hatchery from the small post with wings at each dragon platform.',
        video: { id: '3SuZgaePBzM', title: 'All helmets and the Dragon Wings', ch: 'SBZ vSylent', len: '1:11', t: 4 },
        steps: [
          { any: 'Do these three in any order', t: 'Ride the dragon from all three platforms', needs: ['power-pap'], d: 'Dragon Command, Tank Factory and Supply Depot (any order; shared in co-op).' },
          { any: 'Do these three in any order', t: 'Get the Dragon Strike', needs: ['dragon-strike'] },
          { any: 'Do these three in any order', t: 'Fully hatch the egg (someone holds the Gauntlet)', needs: ['gauntlet'] },
          { t: 'Put them on', d: 'Department Store 3rd floor, on a mannequin facing a wall near the black valve (along the right wall if you come in from the top of the Infirmary).' },
        ],
      },
      {
        id: 'song-dead-ended', tab: 'side', type: 'Song', name: '"Dead Ended"',
        summary: 'Hold interact on three vodka bottles.',
        spots: [
          'On a couch in the Department Store, right after the first door you buy.',
          'Between the Department Store and the Operations Bunker, on the floor by a crashed truck with corpses and rubble.',
          'Supply Depot, on a shelf next to a crate with a white Iron Cross.',
        ],
      },
      {
        id: 'song-ace', tab: 'side', type: 'Song', name: '"Ace of Spades"',
        summary: 'Interact with three ace of spades cards. (During the boss fight you can also trigger it by hitting the three sparking telephone poles with explosives.)',
        spots: [
          'Bottom-left corner of the blackboard in the Double Tap room, Tank Factory.',
          'On S.O.P.H.I.A.\'s desk in Dragon Command.',
          'Hatchery, right of Pack-a-Punch on a desk, tucked in a book.',
        ],
      },
      {
        id: 'song-sorrow', tab: 'side', type: 'Song', name: '"Samantha\'s Sorrow" (hide and seek)',
        summary: 'Throw Monkey Bombs into three different areas while a dragon is burning them. A Samantha doll appears by the tombstone near the Trials boards in Belinski Square; interact to start the game. Five dolls hide in random spots playing a lullaby — shoot each before time runs out. Finish, and the last doll is dragged into the grave as the song plays.',
      },
      {
        id: 'helmets', tab: 'side', type: 'Wearables', name: 'Mangler Helmet and Valkyrie Drone Hat',
        summary: 'Two more wearables besides the Dragon Wings (you can wear one at a time and swap freely). Progress is shared in co-op.',
        video: { id: '3SuZgaePBzM', title: 'All helmets and the Dragon Wings', ch: 'SBZ vSylent', len: '1:11' },
        steps: [
          { w: 27, t: 'Mangler Helmet: tougher against Manglers', d: 'Shoot the helmet off five Manglers and the arm cannon off five Manglers (both can happen on the same one: cannon first, then the head). The Dragon Strike lockdown is a great place to do it. It hangs on a mannequin on the Department Store\'s second floor, left of the L-CAR 9 wall-buy.', tip: 'Very useful in Love and War: lots of Manglers come during the Hatchery download, and their cannon shots can down you in one hit.' },
          { w: 43, t: 'Valkyrie Drone Hat: tougher against drones and electricity', d: 'On six Valkyrie Drones, shoot off all three arms, and on six, shoot the small red camera underneath (arms first, then the camera, before it self-destructs). It takes the drone rounds and the Dragon Strike lockdown. It\'s on the headless mannequin in front of Juggernog in the Department Store, by the lamp-lit desk.' },
        ],
      },
    ],
  });
})();
