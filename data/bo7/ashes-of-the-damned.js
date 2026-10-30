/* Ashes of the Damned — Black Ops 7 launch map */
(() => {
  const I = 'assets/img/bo7/ashes-of-the-damned/';
  const SE = t => ({ id: 'T2NwtMJj2A8', title: 'Every side Easter egg in Ashes of the Damned', ch: 'MrDalekJD', len: '21:10', t }); // MrDalekJD side Easter eggs
  const E = 'XGc-_4sT9dE'; // MrRoflWaffles easter egg guide
  const P = 'OkOnwkWtiSk'; // MrRoflWaffles Pack-a-Punch / Ol' Tessie guide
  const G = '82cQY5NEma4'; // MrRoflWaffles Necrofluid Gauntlet guide
  const EV = { id: E, title: 'Ashes of the Damned easter egg guide', ch: 'MrRoflWaffles', len: '48:06' };
  const PV = { id: P, title: 'Ashes of the Damned Pack-a-Punch and Ol\' Tessie', ch: 'MrRoflWaffles', len: '8:44' };
  const GV = { id: G, title: 'Free Necrofluid Gauntlet', ch: 'MrRoflWaffles', len: '8:53' };
  const purple = 'Turn purple first: shoot a frozen face of the clock tower above Ashwood with the Gauntlet, then explode the barb (aim button) close by. It wears off after a while.';

  ZG.addMap({
    game: 'bo7', id: 'ashes-of-the-damned', order: 1,
    name: 'Ashes of the Damned', dlc: 'Launch map', eeName: 'Dust To Dust',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Ol\' Tessie', 'Necrofluid Gauntlet', 'Veytharion boss'],
    blurb: 'The biggest round-based map ever: towns and a cosmodrome joined by foggy roads, crossed in the armoured truck Ol\' Tessie. Upgrade Tessie, build the Necrofluid Gauntlet, brew a serum, unlock four rituals and drive into a pyramid to fight Veytharion.',
    quick: [
      ['Main EE', 'Dust To Dust (solo or co-op)'],
      ['Wonder weapons', 'Necrofluid Gauntlet (free), Ol\' Tessie (the truck)'],
      ['Helper', 'Klaus the robot'],
      ['Boss', 'Veytharion, fought in Ol\' Tessie'],
    ],
    intro: {
      start: 'You drive Ol\' Tessie between areas; the fog roads are deadly on foot. Pack-a-Punch rides on Tessie\'s back bumper. New to Black Ops 7 zombies? Read the basics first.',
      weapons: 'The quest needs the Necrofluid Gauntlet and all of Tessie\'s upgrades. Klaus is needed for the Gauntlet.',
      'easter-egg': 'Most steps can be worked on side by side; start the serum ingredients early (some need several rounds). Bring long-range guns for the boss. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'bo7-basics', tab: 'start', type: 'Primer', name: 'Black Ops 7 zombies basics', short: 'BO7 basics',
        summary: 'Black Ops 7 keeps Black Ops 6\'s system (see the primer on Liberty Falls) with a few changes. This applies to every Black Ops 7 map.',
        blocks: [
          { list: [
            'Same core rules as Black Ops 6: Essence, Salvage, Arsenal, armour tiers, rarity, three Pack-a-Punch levels, ammo mods, GobbleGums, Field Upgrades and Augments.',
            'Higher-rarity wall-buys and box guns matter more: buying a blue or purple gun can save a lot of salvage compared with upgrading a grey one.',
            'Three ways to play: **Standard**, **Directed** (guided, with quest markers) and **Cursed** (harder, with optional relics). These guides follow Standard.',
            'Ol\' Tessie (the truck) appears on more than one map. Klaus the robot is back as a helper you can call and send places.',
            'New special enemies include Ravagers (packs that swarm you) and Zursa (zombie bears).',
          ] },
        ],
      },
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Ol\' Tessie, power & Pack-a-Punch', short: 'Tessie & PaP',
        summary: 'Fit T.E.D.D.\'s head to Ol\' Tessie, drive to the farm or the lake and clean the fungus off its power pump, do the same at Ashwood, then drive Tessie into the Ashwood garage and fit Pack-a-Punch to her back.',
        video: PV,
        steps: [
          { w: 0, t: 'Melee the marker in the spawn building and take T.E.D.D.\'s head', d: 'Open the door in spawn; the head is under a metal plate on the floor.' },
          { w: 16, t: 'Fit the head to Ol\' Tessie', d: 'The truck outside. Now you can drive her.', imgs: [{ src: I + 'tessie.webp', cap: 'Ol\' Tessie, fully upgraded' }] },
          { w: 62, t: 'Smash through the gate to Vandorn Farm or Blackwater Lake', d: 'Avoid red spores on the road (they hurt Tessie); green ones heal her. Don\'t get out on the fog roads: the zombies there are super-sprinters.' },
          { w: 107, t: 'Shoot all the fungus off the power pump within 30 seconds', d: 'All around the machine, then the big blob that appears on top. A pulse kills nearby zombies. Fail and retry next round.' },
          { w: 152, t: 'Flip the power switch', d: 'Vandorn Farm: upstairs in the barn. Blackwater Lake: upstairs in the cabin.' },
          { w: 197, t: 'Drive on to Ashwood and clear its pump', d: 'Up the zipline, through the building and down the stairs to the bridge. Clean the pump, then flip the switch overlooking the bridge.', warn: 'Don\'t just jump off the bridge: the drop can kill you. Slide onto a structure or take a zipline.' },
          { w: 295, t: 'Drive Tessie into the garage and fit Pack-a-Punch', d: 'The garage door opens. Tessie repairs in there. Take the machine from the table and put it on her back.', imgs: [{ src: I + 'tessie-pap.webp', cap: 'Pack-a-Punch on Tessie' }] },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'klaus', tab: 'parts', type: 'Helper', name: 'Klaus', color: 'gold',
        summary: 'From round 8, kill an Uber Klaus at Janus Towers Plaza for a stabilizer chip, fit it in the Ashwood jail and wake Klaus with stun grenades. His remote takes a grenade slot (bumper, or Q on PC).',
        video: GV,
        steps: [
          { w: 76, t: 'Kill the Uber Klaus at Janus Towers Plaza', d: 'From about round 8 to 10, he comes out of the Project Janus container opposite the Warden 308 wall-buy. He\'s tough: Pack-a-Punch once first; Cryo Freeze or Napalm Burst help. He drops the stabilizer chip.' },
          { w: 140, t: 'Put the chip in the cell panel in the Ashwood sheriff\'s office' },
          { w: 156, t: 'Throw stun grenades at Klaus until he wakes', d: 'About four. Craft them for 250 salvage or pick them up around the map.' },
        ],
      },
      {
        id: 'tessie-upgrades', tab: 'parts', type: 'Ol\' Tessie upgrades', name: 'Abomination Beam and DG-2 turret', color: 'storm',
        summary: 'Tessie\'s other two upgrades. Both are installed in the Ashwood garage, like Pack-a-Punch.',
        video: EV,
        steps: [
          { w: 158, t: 'Abomination Beam: kill the cook in the Exit 115 diner for the freezer key', d: 'Kill zombies inside the diner until the cook drops the key (he may run off: check around). Open the freezer in the back hallway for the Abomination carcass.' },
          { w: 205, t: 'Fit the carcass to the front of Tessie in the garage' },
          { w: 1360, t: 'DG-2 turret: open the Seal of Sorrow (main quest), then fit the barrel', d: 'Part of the main quest: see the key steps.', needs: ['ee'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'gauntlet', tab: 'weapons', type: 'Wonder weapon', name: 'Necrofluid Gauntlet', img: I + 'gauntlet.webp', color: 'green',
        summary: 'Fires a barbed spike: press reload to pull it back (hitting zombies both ways) or the aim button to explode it in place. Damage heals and overheals you. Pull spikes back from close by to keep your ammo. No upgrade quest: Pack-a-Punch it on Tessie.',
        facts: [['Get it', 'Free quest (needs Klaus)'], ['Upgrade', 'Pack-a-Punch on Tessie']],
        video: GV,
        steps: [
          { w: 46, t: 'Turn on all three power switches', needs: ['power-pap'], d: 'Farm or lake, then Ashwood, then the other one.' },
          { w: 76, t: 'Wake Klaus', needs: ['klaus'] },
          { w: 188, t: 'Send Klaus to the broken wall panel in the Zarya Cosmodrome', d: 'In Support Systems, next to a buyable door. He bashes it.' },
          { w: 203, t: 'Interact with the panel and stand alone in the red scanner', d: 'Defend yourself until the bar fills (other players must stay out of the beam). Kill the purple zombies, then take the Aether barrel from the cupboard.' },
          { w: 266, t: 'Charge the barrel at the three power pumps, against the clock', d: 'Ashwood first, then Blackwater Lake, then Vandorn Farm. Defend each while it charges. A timer runs between pumps. Using a jump pad drops the barrel.' },
          { w: 313, t: 'Put the barrel on the cube in the Vandorn Farm cellar' },
          { w: 328, t: 'Read the three symbols from the jump pad', d: 'Ride the jump pad between Janus Towers Plaza and the farm; red symbols are painted on the barn, shed and farmhouse roofs.' },
          { w: 359, t: 'Set the symbols on the cube, then interact with its eye', d: 'Each side cycles through its own symbols. The cube opens.' },
          { w: 406, t: 'Shoot and recall barbs through the green blobs to finish', d: 'You\'re rooted on a sigil until all are gone. Then the Gauntlet is yours.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Dust To Dust',
        summary: 'Brew a serum in Yuri\'s lab, collect three keys from the fog with the Gauntlet to open the Seal of Sorrow, use the clock tower\'s purple charge to finish four area rituals, then rally Tessie through the fog and defeat Veytharion.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Achievement, ending cutscene'],
          ['Boss', 'Veytharion (driving Tessie)'],
        ],
        prep: [
          { t: 'Tessie with Pack-a-Punch and the Abomination Beam', needs: ['power-pap', 'tessie-upgrades'] },
          { t: 'The Necrofluid Gauntlet and Klaus', needs: ['gauntlet', 'klaus'] },
          { t: 'Wisp Tea (bought at the Zarya Cosmodrome) for the powder' },
          { t: 'For the boss: long-range guns at Pack-a-Punch 3 and Legendary rarity, Kazimirs, GobbleGums such as Shields Up' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 63, t: 'Serum: gather the ingredients', d: 'You always need the powder (next step) plus the three ingredients the cipher picks. Start the slow ones early:', list: [
            'Widow\'s Lantern: take the jar of spores from under the Blackwater cabin kitchen cabinet, use it on the mushroom-covered horse by the farm gate towards Ashwood, and come back 3 rounds later.',
            'Ravager Eyes: kill a Ravager with a saw trap (farm or elsewhere).',
            'Hoard Hunk Chunks: hit a purple Aether plant at ground level by a fog road with Tessie\'s Abomination Beam.',
            'Mysterious Limb: kill a Zursa (bear, from round 16, or {{zursa-summon|summon one early}}) with the Abomination Beam as the final blow.',
            'Human Bones: in the farm barn, hit the foot of the hanging body with a combat axe, then burn the fallen foot with a Molotov.',
          ], tip: 'Free combat axes: the Exit 115 diner, or the trophy in the Blackwater Lake toolshed.' },
          { w: 373, t: 'Serum: get the Powder of the Forgotten', d: 'With Wisp Tea and the Gauntlet, bring your wisp into the Ashwood tailor shop: it goes into the mirror. Shoot the mirror with the Gauntlet and the powder drops.', needs: ['gauntlet'] },
          { w: 859, t: 'Serum: read the ciphers in Yuri\'s lab and add the ingredients in order', d: 'In the Zarya Cosmodrome. Interact with the powder: three pigpen-cipher words appear on the board, top to bottom. Interact with the matching ingredient for each line. Red smoke means right; black means wait a round.', table: { head: ['Word', 'Ingredient'], rows: [
            ['FUNGI', 'Widow\'s Lantern'],
            ['LIMBS', 'Mysterious Limb'],
            ['OCULI', 'Ravager Eyes'],
            ['CONCH', 'Hoard Hunk Chunks'],
            ['TALUS', 'Human Bones'],
          ] } },
          { w: 997, t: 'Serum: add your blood and survive', d: 'A lockdown with reduced health: you only heal with Gauntlet kills. Fill the serum with souls until purple gas fills the room.', tip: 'Tier 3 armour, Full Power with Aether Shroud charges, or Frenzied Guard help.' },
          { w: 1043, any: 'Keys in any order', t: 'Red Nightbird key (stops your health regen)', d: 'Shoot it with a Gauntlet barb and recall it to pull it free. On the Ashwood–Exit 115 road: in a T-Rex skull under the dead Orda, in a T-Rex skull hanging over the road from a cliff, or behind the Project Janus vehicle by the Exit 115 gate.' },
          { w: 1218, any: 'Keys in any order', t: 'Yellow Bruin key (melee only)', d: 'On the Ashwood–Cosmodrome road: on the fallen radio tower, on the building left of the cosmodrome exit near the radar, or high on the rocks left of the gate from Ashwood to the crashed rocket.' },
          { w: 1265, any: 'Keys in any order', t: 'Green Terrapin key (slows you down)', d: 'On the ship between Ashwood and Vandorn Farm: in a slightly open blue container, behind a window on deck, or under the boat left of two silver barrels.' },
          { w: 1328, t: 'Put the keys in the Seal of Sorrow in Ruby Alley', d: 'Each one as you get it. A cutscene plays and the DG-2 turret barrel appears: fit it to Tessie in the garage.' },
          { w: 1377, t: 'Freeze the clock tower with Tessie\'s DG-2 turret', d: 'Drive a little out of Ashwood for an angle and shoot the floating clock. Three faces freeze; each gives one purple charge per round.' },
          { w: 1425, t: 'Ritual 1, Zarya Cosmodrome: shoot both radar dishes while purple', d: purple + ' One charge per dish.' },
          { w: 1519, t: 'Ritual 1: launch the rocket from the control room', d: 'The left monitors spell a word in pigpen: LAUNCH, WEAPON, ENGINE or ROCKET. Lock each of the six number monitors (shoot its red button) on these numbers, quickly:', table: { head: ['Word', 'Numbers, left to right'], rows: [
            ['LAUNCH', '11 · 00 · 20 · 13 · 02 · 07'],
            ['WEAPON', '22 · 04 · 00 · 15 · 14 · 13'],
            ['ENGINE', '04 · 13 · 06 · 08 · 13 · 04'],
            ['ROCKET', '17 · 14 · 02 · 10 · 04 · 19'],
          ] } },
          { w: 1630, t: 'Ritual 2, Exit 115: lead three revived zombies into matching lightning', d: 'Wait for coloured lightning at Exit 115 (or shoot the three sparking lamp posts with the DG-2 turret). While purple, shoot the clock at McDougal\'s service station to freeze time for a minute, then revive and lead each zombie into its colour:', list: [
            'Red: ram the red truck trailer by the diner with Tessie; the zombie against the diner wall wakes.',
            'Yellow: send Klaus to the mechanic under the raised car in the garage.',
            'Blue: melee the cash register in the diner to wake the cashier.',
          ], tip: 'Much easier in co-op. In solo, any zombie you got in stays done; retry the rest when lightning returns (2–3 rounds).' },
          { w: 1861, t: 'Ritual 3, Vandorn Farm: wake Pa and defend the ritual items', d: 'While purple, read the clock in the farmhouse dining room, stand on that Roman numeral scratched in the floor and look at Pa at the head of the table. When his eyes go red, shoot his head. Then collect four items (Tasty-Face on the bottom bunk, Junior\'s Fun-Face upstairs in the barn, Pa\'s Pigsticker in the garage, Ma\'s Chalice in the cellar bathtub), place them on the glowing circles and defend them as they rise.' },
          { w: 2038, t: 'Ritual 4, Blackwater Lake: the soul on the pier and the film reels', d: 'Touch the soul on the pier. While purple, shoot the projector in the cabin: it shows four places in order. Shoot a normal Gauntlet barb into the film reel at each, in that order (toolshed shelf, upstairs at the front of the cabin, under the stairs at the back by the ammo box, on a beam in the boathouse). Fail and retry next round: the order stays the same and you don\'t need to shoot the projector again.' },
          { w: 2163, t: 'Ritual 4: Klaus takes the horn', d: 'The soul moves to a box at the foot of a bed in the cabin (the Speed Cola room). Open it, call Klaus and send him to it: he takes the horn and waits on the walkway.' },
          { w: 2212, t: 'Get ready, then talk to Klaus (no turning back)', d: 'Pack-a-Punch 3 and Legendary on everything, all perks; T.E.D.D. trials can make perks permanent. Make sure Tessie is at Blackwater Lake.' },
          { w: 2292, t: 'Rally: drive Tessie through three souls on each fog road, in order', d: 'Lake → Janus Towers, Towers → farm, farm → Ashwood, Ashwood → lake. Grab all three on a road before leaving it; a gong means you failed (talk to Klaus to retry). Turret gunners shoot mines off the road.' },
          { w: 2448, t: 'Beat Veytharion', d: 'Ram him with Tessie and shoot his unarmoured head. Dodge missile barrages by turning constantly. When he goes immune (about 80% and 35%), drive through the purple beams that appear and boost into him; then shoot the yellow spot underneath. Later he fires a charged mouth laser: hide behind a pillar. Bears join in co-op.', tip: 'Power-ups float high up: pull them down with the Gauntlet. Green barnacles around the room repair Tessie.', imgs: [{ src: I + 'veytharion.webp', cap: 'Veytharion' }] },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'super-toy', tab: 'side', type: 'Super Easter Egg · toy', name: 'Super Easter Egg: Ol\' Tessie toy', short: 'Super EE toy', color: 'aether',
        summary: 'Opens up once you\'ve finished all six Black Ops 7 main quests (Standard, Cursed or Directed all count). Find the Twins, drag their toybox off the windmill, pull three crystals out of the Monolith Forest and feed the box the rock inside a meteor. Exfil with the toy to keep it. Part of the [[bo7/super-easter-egg/easter-egg|Super Easter Egg]].',
        video: { id: '3KGZlHLMQi0', title: 'Super Easter Egg guide: every map', ch: 'MrDalekJD', len: '42:44' },
        steps: [
          { w: 94, t: 'Find the Twins and walk up to them', d: 'After the first power is on, they stand in one random spot each game and vanish when you get close: on the platform past the jump pad on the Ashwood bridge (across from the zip line), behind the Lost Cabin between Blackwater Lake and Ashwood, on top of the grounded ship between Vandorn Farm and Ashwood, or in the fog on the road between Blackwater and Ashwood.', tip: 'Bring Stun Grenades as your tactical so you don\'t spend salvage on them.' },
          { w: 155, t: 'Check the Twins are on the barn roof at Vandorn Farm', d: 'They sit at the back of the barn facing the windmill, where the toybox floats in a black storm cloud. No box? Find the Twins again.' },
          { w: 185, t: 'Build the {{gauntlet}}', needs: ['gauntlet'], d: 'Turn on the second power and do the usual main-quest steps; the Uber Klaus container in Janus Towers Plaza opens on round 8.' },
          { w: 231, t: 'Drag the toybox down and open it', d: 'Shoot the box on the windmill with the Gauntlet a few times and reload: it drops lower. Then use a fully charged Dark Flare to clear the storm. The box lands and opens, and the Twins ask for a toy.' },
          { w: 310, t: 'Pick up a Fumigator', d: 'There\'s one in the spawn room. You can only use the crystals while holding it.' },
          { w: 340, t: 'Pull down three pink crystals in the Monolith Forest', d: 'They sit on top of the stone pillars in the forest between Blackwater Lake and Janus Towers Plaza, in different spots each game, and are hard to see in the fog. Shoot one with the Gauntlet to pull it down, then hold interact on it with the Fumigator out until it glows and beams away. Sometimes the next one only appears after you\'ve done the last.', tip: 'Juggernog, Stamin-Up, Monkey Bombs and Aether Shroud buy you time to look around.' },
          { w: 418, t: 'Interact with the meteor, then play into the next round', d: 'After the third crystal a meteor lands where Blackwater Lake meets the forest. Interact with it (Fumigator out). It cracks open at the start of the next round.' },
          { w: 449, t: 'Feed the rock to the toybox and take the Ol\' Tessie toy', d: 'Grab the small Element 115 rock from the meteor and put it in the box at the farm. It throws out some loot and the toy.' },
          { w: 479, t: 'Exfil with the toy', d: 'On an exfil round (every five rounds from round 11) call it from a phone. The toy floats in the exfil booth: kill the HVT in time and get out. On Rex Infernus the toy now sits on the shelf in Her House.', warn: 'Solo: finish in one sitting. Loading a save resets the toy quest.' },
        ],
      },
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Turn to Ashes"',
        summary: 'Interact with three Mister Peeks headphones.',
        video: SE(1112),
        spots: [
          'Server room in front of spawn, on the servers nearest Quick Revive.',
          'Ashwood, in the Double Tap area, right above the VS Recon wall-buy.',
          'Exit 115, inside a jeep north-west of the gas station.',
        ],
      },
      {
        id: 'good-soldiers', tab: 'side', type: 'Side quest', name: '"Good Soldiers" (play as Dempsey)',
        summary: 'As Dempsey, go to the crashed rocket and interact with the dog tags in its nose, between two halves where bodies lie. A cinematic takes you somewhere else; kill zombies until you come back for a Legendary weapon and loot.',
        video: SE(359),
      },
      {
        id: 'claw-talisman', tab: 'side', type: 'Wearable', name: 'Claw Talisman (double melee points)',
        summary: 'With Death Perception, look for a golden-outlined Zursa footprint at the gate from Ashwood to the Zarya Cosmodrome. Stand on it for a moment, then walk the way it points to the next print; after six prints a Zursa attacks and you\'re pulled into a forest with only your melee weapon. Kill the elite Zursa by melee alone for the Claw Talisman: double points from melee kills for the rest of the game.',
        video: SE(480),
      },
      {
        id: 'mixologist', tab: 'side', type: 'Free perk', name: 'Mixologist: four free perks',
        summary: 'Collect three ingredients for a perk, then interact with the cup at the soda machine in Reba\'s Diner at Exit 115 to get it. All four earns the "Mixologist" achievement.',
        video: SE(863),
        steps: [
          { w: 863, t: 'Quick Revive', d: 'A fish at Blackwater Lake, a toilet cleaner bottle on a table in the Server Room (Janus Towers), a stim shot on a shelf in the Zarya Cosmodrome Control Room.' },
          { w: 961, t: 'Stamin-Up', d: 'A box of potatoes in the Vandorn Farm cellar, a bag of beans in Hargrove\'s Mercantile (Ashwood), a jerrycan by a dumpster at Exit 115.' },
          { w: 934, t: 'Speed Cola', d: 'A plant under a truck at Blackwater Lake, a box of cut tomatoes in a crate by the door of Hargrove\'s Mercantile, a box of sugar on the counter in Reba\'s Diner.' },
          { w: 904, t: 'Juggernog', d: 'A weed on the pavement at Janus Towers Plaza, a jar of milk by the barn entrance to the Vandorn Farm cellar, a box of eggs on a shelf in Reba\'s Diner.' },
        ],
      },
      {
        id: 'ghost-twins', tab: 'side', type: 'Free perk', name: 'Ghost Twins (free Wisp Tea and loot)',
        summary: 'With the Vandorn Farm power on, keep using the static TV on the farmhouse ground floor until two girls appear, then one. Find that girl playing tic-tac-toe by the Vault of Flesh in the cellar and walk up to her. Back at the TV, keep going until both appear and then vanish. Find them dancing right of the Mystery Box shed: walk up for a Wisp Tea can and loot. They come back every other round with more (only you can see them).',
        video: SE(292),
      },
      {
        id: 'jump-pads', tab: 'side', type: 'Free reward', name: 'Jump pad tour', img: I + 'jump-pad.webp',
        summary: 'First turn on every power pump, break every wooden gate between the areas with Ol\' Tessie and use every jump pad in both directions (14 jumps; nothing tracks them, so note them down). Four rounds later a skylight on the far left of the Janus Towers Plaza spawn room blinks a seven-number route, always starting with 3 or 7 (Ashwood): 1 Janus Towers, 2 Vandorn Farm, 3 or 7 Ashwood, 4 Blackwater Lake, 5 Exit 115, 6 Zarya Cosmodrome. Get to Ashwood on foot or in Ol\' Tessie (not by jump pad), follow the route by jump pad, ending back at Ashwood. A purple tear then opens in the sky on one pad route: fly through it before it fades. You land in Ashwood among loot: Salvage, equipment, Essence, perks, and in later rounds (after about 18) crystals and Ray Gun Mark IIs. Miss the tear and the skylight needs four more rounds for a new code; get the route wrong and try the next round\'s.',
        video: SE(15),
      },
      {
        id: 'vending', tab: 'side', type: 'Free reward', name: 'Vending machine punch',
        summary: 'Crouch and punch a vending machine once a round for a random prize, up to a free perk or a Ray Gun. There\'s one right behind spawn at Janus Towers Plaza and one at the Exit 115 gas station. A Melee Macchiato punch breaks it for one big payout (perks, even a wonder weapon) but it\'s gone after that.',
        video: SE(532),
      },
      {
        id: 'chompy', tab: 'side', type: 'Free weapon', name: 'Chompy (free Ray Gun)', img: I + 'chompy.webp',
        summary: 'Chompy is a trash can that sometimes rattles and puffs purple smoke. Melee it to open it, then feed it guns or equipment for Salvage and the odd prize. Feed it ten Monkey Bombs and it always gives back a Ray Gun.',
        video: SE(678),
      },
      {
        id: 'arc-race', tab: 'side', type: 'Free reward', name: 'RC-XD race',
        summary: 'Leaving Blackwater Lake towards Ashwood, go upstairs in the first hut on the left and pick up the RC-XD controller by the suitcase. Everyone races RC cars round the Zarya Cosmodrome; Mister Peeks hands out trophies with prizes by finishing place.',
        video: SE(560),
      },
      {
        id: 'axe-target', tab: 'side', type: 'Free reward', name: 'Axe throwing target',
        summary: 'Interact with Dean Roth\'s trophy in the Blackwater Lake toolshed (as one of the eight crew) and a combat axe appears outside. Hit the floating target right of the exfil booth with it, again and again as it changes; on the last hit Mister Peeks dances and drops loot. Only once per game, so later rounds give better prizes.',
        video: SE(702),
      },
      {
        id: 'flora-loot', tab: 'side', type: 'Free reward', name: 'Loot from the purple plants',
        summary: 'The purple plants around the map hide good loot (Pack-a-Punch crystals, Aether Tools, weapons, even Ray Guns). From the start, bring the Toxic Growth field upgrade: take the fumigator part found in each area, spray a plant and drop Toxic Growth on it for much better rewards. Later, blast the purple plants in the fog with Ol\' Tessie\'s Abomination laser as you drive; most players stop after the main quest part they need.',
        video: SE(230),
      },
      {
        id: 'zursa-summon', tab: 'side', type: 'Map tip', name: 'Summon a Zursa on any round', img: I + 'zursa.webp',
        summary: 'With the Necrofluid Gauntlet, shoot three skulls in the Zarya Cosmodrome: in Support Systems behind the DS20 Mirage wall-buy, on a construction panel in the window with the rappel rope behind PhD Flopper, and on the ground in the right corner of the zombie window right of the rocket. A purple-eyed Zursa spawns straight away, handy for the main quest before round 16.',
        needs: ['gauntlet'],
        video: SE(757),
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each. The Fire Sale only appears once you have the other seven.',
        video: SE(994),
        spots: [
          'Bonus Points: under a car on the collapsed middle of the highway bridge at Exit 115.',
          'Max Ammo: in an open ceiling tile by Quick Revive in the Server Room.',
          'Double Points: on a hill out of the map, seen from the opening on the second floor of the north Lost Cabin, looking towards Vandorn Farm.',
          'Full Power: in an open doorway behind the railing of the north-east flame trench ramp under the rocket at the Zarya Cosmodrome.',
          'Insta-Kill: in the opening at the top of the Vandorn Farm silo.',
          'Max Armor: behind two stacked crates in an open container on the Grounded Ship deck, at the top of the ramp from Vandorn Farm.',
          'Nuke: in the Ashwood church steeple.',
          'Fire Sale: in the rafters above the Arsenal at Blackwater Lake.',
        ],
      },
    ],
  });
})();
