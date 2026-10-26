/* Ancient Evil — Black Ops 4 DLC 2 (Chaos story) */
(() => {
  const I = 'assets/img/bo4/ae/';
  const U = 'qbxn2E810Nc'; // MrDalekJD ultimate guide
  const HINTS = [
    '"Chaos of the Treasuries": Intersection of Treasuries, the purple-glowing part of the big red crystal (seen coming from the Gymnasium Bathhouse).',
    '"Near the Purple Blossoms": Intersection of Treasuries, a dirt patch by the purple flowers.',
    '"Barque of Gold": Stoa of the Athenians, a pot by the boat full of gold.',
    '"The Shieldbearer\'s Fountain": Stoa of the Athenians, a pot on the fountain under the statue.',
    '"General\'s Column": Spartan Monument, a pot at the base of the column with a statue on top.',
    '"Fallen Statesman": up the stairs left of the Zeus statue, a dirt patch.',
    '"Beneath the Watchful Gaze of Zeus": a dirt patch in front of the Zeus statue.',
    '"Golden Taurus": Spartan Monument, a pot at the base of the golden bull.',
    '"Where the Arrow Splits the Road": a pile of bricks next to the huge arrow between the Treasuries and the Spartan Monument.',
    '"Where Sorrows Flow Beneath": River of Sorrow, down the stairs and left from the Pegasus drop-off, a pile of bricks.',
    '"Sorrow Washes Over": a dirt pile left of the Odin statue.',
    '"Wheel of Water": Cliff Ruins, bricks next to the blue fireplace.',
    '"Workbench": Cliff Ruins, a pot on a desk right of the blue fireplace.',
    '"Where the Serpent Snared the Eagle": Cliff Ruins, a dirt pile left of the yellow eagle cage.',
    '"Broken Bridge": a pot on the right of the bridge from the Cliff Ruins to the Center of the World.',
    '"The Shrine of Wind and Sky": bricks left of the Ouranos shrine.',
    '"Top of the Center of the World": bricks behind Pack-a-Punch.',
    '"Chaos of Venom": purple crystals between the Center of the World and the Python Pass venom trap.',
    '"Where the Mighty Titan Points": Python Pass, a crystal left of the Titan wall-buy.',
    '"The Steps of Flesh and Bone": Python Pass, a stone pile next to the Charon shrine.',
  ];
  ZG.addMap({
    game: 'bo4', id: 'ancient-evil', order: 5, group: 'chaos',
    name: 'Ancient Evil', dlc: 'Black Ops Pass · DLC 2', eeName: 'Greek Tragedy',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Four Hands of the gods', 'Apollo\'s Will', 'Pegasus Strike'],
    blurb: 'Delphi in ancient Greece. Ride Pegasus to the Underworld, earn the four primordial Hands from the gods\' shrines and bring down Perseus.',
    quick: [
      ['Main EE', 'Greek Tragedy'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Hands of Gaia, Charon, Hemera and Ouranos'],
      ['Shield', 'Apollo\'s Will (with throwing spears)'],
    ],
    intro: {
      start: 'Activate the Sentinel Artifact in the Amphitheater, then ride Pegasus to open Pack-a-Punch. Start Oracle tributes early: they light the Eternal Flame the easter egg needs.',
      parts: 'Apollo\'s Will shield and the Pegasus Strike (a free, very strong tactical) each have three parts.',
      weapons: 'Each player can own one Hand. Find a Dormant Hand from the Oracle\'s clue, take it to a shrine, then upgrade it.',
      'easter-egg': 'You need the Hands of Charon, Hemera, Ouranos and Gaia during the quest (one player can carry them one at a time solo). Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'pap', tab: 'start', type: 'Getting started', name: 'Sentinel Artifact, Pegasus & Pack-a-Punch', short: 'PaP',
        summary: 'Activate the artifact, grab the Golden Bridle, ride Pegasus to the Underworld and free two eagles. They break the crystals around Pack-a-Punch.',
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        steps: [
          { w: 156, t: 'Activate the Sentinel Artifact in the Amphitheater', d: 'Skeletons and zombies attack. Headshot the skeletons and survive about 20 seconds until Pegasus swoops in and kills everything. You get a Max Ammo.', imgs: [{ src: I + 'sentinel.webp', cap: 'The Sentinel Artifact in the Amphitheater' }] },
          { w: 470, t: 'Take the Golden Bridle and kill the Gegenees', d: 'It sits on a white and gold cushion on a pedestal, either in the Intersection of Treasuries or the Stoa of the Athenians. A six-armed giant (Gegenees) spawns; kill it (your specialist helps) for a shield part.', needs: ['apollos-will'] },
          { w: 643, t: 'Ride Pegasus from the Spartan Monument', d: 'Everyone stands in the circle in front of the Zeus statue. Pegasus carries you to the River of Sorrow (the Underworld side).' },
          { w: 740, anyList: 'Cages in either order', t: 'Free the two eagles', d: 'With a full specialist meter:', list: [
            'Python Pass: shoot the hanging cage down (a Gegenees spawns; kill it), then melee its door with your specialist.',
            'Cliff Ruins: kill the skeletons around the second cage, then melee its door with your specialist.',
          ] },
          { w: 786, t: 'Survive at the Center of the World', d: 'Walk up to the crystals around Pack-a-Punch. Skeletons attack while the eagles smash the crystals. Pack-a-Punch opens and so do the fast-travel portals.' },
        ],
      },
      {
        id: 'tributes', tab: 'start', type: 'Getting started', name: 'Oracle tributes & the Eternal Flame', short: 'Tributes',
        summary: 'Buy challenges from the Oracle, stack the reward tier up, and redeem it at the fire in front of the gold Apollo statue. Enough rewards turn the fire into a blue Eternal Flame, which the easter egg and the Exalted Hands need.',
        video: { id: 'e8yMyhhudlk', title: 'Complete Ancient Evil easter egg guide', ch: 'MrRoflWaffles', len: '31:17' },
        steps: [
          { w: 326, t: 'Start a tribute challenge', d: 'Hold interact on the Oracle in the Temple of Apollo (spawn) or at Hephaestus\'s forge in the Underworld. It costs 500 points (more in later rounds) and gives a timed task, like headshot kills.' },
          { w: 357, t: 'Stack rewards up the tiers', d: 'Progress goes Common, Rare, Legendary, Epic. Tributes stack, so you can start another challenge to keep climbing before redeeming.' },
          { w: 373, t: 'Redeem at the fire in front of the gold Apollo statue', d: 'Commons give a random power-up, Rares things like a Max Ammo, Legendaries often a Pack-a-Punched gun, Epics a perk, self-revive or similar.' },
          { w: 436, t: 'Keep going until the big fire burns blue', d: 'It grows with every reward. In a 4-player game it takes about five or six Epics across the team (progress is shared). A swirling blue flame means it\'s done.' },
        ],
        blocks: [{ tip: 'Open as little of the map as possible early on: the Oracle only gives challenges for areas you can reach, so they\'re easier. Do the Hand tasks while a tribute timer runs.' }],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'apollos-will', tab: 'parts', type: 'Buildable · Shield', name: 'Apollo\'s Will', img: I + 'apollos-will.webp', color: 'gold',
        summary: 'A shield that holds a spear. Aim and fire to throw spears (15 total). The easter egg uses the spear for fire, cogs and the ballista.',
        facts: [['Parts', '3'], ['Build at', 'Back of the Marketplace']],
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        parts: [
          { w: 536, name: 'Handle (strap)', icon: I + 'part-strap.webp', area: 'Upper Road', spots: ['On a rock before the bridge.', 'On a rock under the bridge.', 'On a rock after the bridge.'] },
          { w: 521, name: 'Spear', icon: I + 'part-spear.webp', area: 'Intersection of Treasuries / Stoa of the Athenians', spots: ['Intersection of Treasuries: against a statue.', 'Intersection of Treasuries: stuck in a low wall.', 'Stoa of the Athenians: against a pillar.'] },
          { w: 504, name: 'Shield (cover)', icon: I + 'part-cover.webp', area: 'Gegenees drop', spots: ['Dropped by the six-armed giant that spawns when you take the Golden Bridle.'] },
        ],
        blocks: [{ imgs: [
          { src: I + 'handle-under.webp', cap: 'Handle under the bridge' }, { src: I + 'handle-after.webp', cap: 'Handle after the bridge' },
          { src: I + 'spear-wall.webp', cap: 'Spear in the low wall' }, { src: I + 'spear-pillar.webp', cap: 'Spear against the pillar' },
          { src: I + 'shield-part.webp', cap: 'Shield part from the Gegenees' }, { src: I + 'workbench.webp', cap: 'The Marketplace workbench' },
        ] }],
      },
      {
        id: 'pegasus-strike', tab: 'parts', type: 'Buildable · Tactical', name: 'Pegasus Strike', img: I + 'pegasus-strike.webp', color: 'lightning',
        summary: 'Throw it down and Pegasus dive-bombs the spot, wiping out zombies. Free to build, then it stays in the box for everyone. The easter egg needs one placed near the end.',
        facts: [['Parts', '3'], ['Build at', 'The forge in the Cliff Ruins']],
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        parts: [
          { w: 723, name: 'Anvil', area: 'Cliff Ruins', spots: ['Against a column near the Mystery Box spot.', 'On a rock between the box spot and the forge.', 'On a rock across from the bird cage.'] },
          { w: 689, name: 'Hammer', area: 'Python Pass', spots: ['In the middle of Python Pass, in sight of the Titan wall-buy.', 'Against an exposed rib next to the Mystery Box spot.', 'Against a small wall across the room from the box spot, on the left.'] },
          { w: 673, name: 'Tongs (prongs)', area: 'River of Sorrow', spots: ['Right of the door with symbols.', 'In a fire on the way to Python Pass (on top of a burning torch).', 'In a skeleton\'s skull leaning against a wall.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'dormant-hand', tab: 'weapons', type: 'Wonder weapon · Step 1', name: 'Dormant Hand', color: 'void',
        summary: 'Every Hand starts as a Dormant Hand. After the Sentinel Artifact is active, talk to the Oracle: she gives a riddle. Find the purple-sparkling object it describes and melee it to dig up the Hand. Then take it to the shrine of the god you want.',
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        steps: [
          { w: 849, t: 'Get a clue from the Oracle and melee the matching spot', d: 'Her clue points to one of these:', list: HINTS },
          { t: 'Place it at a shrine and survive', d: 'Gaia (Spartan Monument, green circle), Charon (Python Pass, red), Hemera (Monument of Craterus by the Amphitheater, orange) or Ouranos (Center of the World in front of Pack-a-Punch, blue). You\'re held in a small circle until a short lockdown ends; then take the Fallen Hand.', needs: ['hand-gaia', 'hand-charon', 'hand-hemera', 'hand-ouranos'] },
        ],
      },
      {
        id: 'hand-charon', tab: 'weapons', type: 'Wonder weapon', name: 'Hand of Charon', img: I + 'hand-charon.webp', color: 'red',
        summary: 'Fires red soul projectiles; the charged shot leaves a pool that drags zombies under. The easter egg needs the Redeemed version for the statue step.',
        facts: [['Shrine', 'Python Pass (red circle)'], ['Upgrade', 'Redeemed → Exalted']],
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        steps: [{ w: 1369, t: 'Place a Dormant Hand at the Charon shrine and survive', needs: ['dormant-hand'] }],
        upgrade: {
          name: 'Redeemed Hand of Charon', summary: 'Pack-a-Punched look and power, earned in Charon\'s trial.',
          steps: [
            { w: [U, 1384], t: 'Get kills in the River of Sorrow water', d: 'Stand in the water in front of the Odin statue and kill zombies with the Fallen Hand until you\'re told to drink. Drink: your screen edges go red and your health stops regenerating.' },
            { w: [U, 1430], t: 'Find three real Charon\'s Obols', d: 'Coins glow through walls on this side of the map. Fake ones can be snuffed out. A real one says "Obtain Charon\'s Obol". Going down means drinking again.' },
            { w: [U, 1430], t: 'Return to the shrine and pass the trial', d: 'You\'re teleported to the Shadow\'s Bank with the Redeemed Hand and infinite ammo. Kill enough zombies to come back with it.' },
          ],
        },
      },
      {
        id: 'hand-hemera', tab: 'weapons', type: 'Wonder weapon', name: 'Hand of Hemera', img: I + 'hand-hemera.webp', color: 'fire',
        summary: 'Shoots beams of light; the charged shot sweeps a laser. The Redeemed version powers the Ra statue in the easter egg.',
        facts: [['Shrine', 'Monument of Craterus (orange circle)'], ['Upgrade', 'Redeemed → Exalted']],
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        steps: [{ w: 1211, t: 'Place a Dormant Hand at the Hemera shrine and survive', needs: ['dormant-hand'] }],
        upgrade: {
          name: 'Redeemed Hand of Hemera', summary: 'Earned in Hemera\'s trial.',
          steps: [
            { w: [U, 1243], anyList: 'Mirrors in any order', t: 'Turn three round mirrors upright', d: 'Shoot each mirror until it stands fully upright: below a blue banner outside the Temple of Apollo, on a bridge outside the map at the Upper Road, and on a pillar at the Temple Terrace.' },
            { w: [U, 1275], t: 'Carry three orbs of light to the shrine', d: 'Shoot a mirror with the Fallen Hand to bounce an orb into a nearby bowl (the Temple of Apollo one lands by the Gymnasium Bathhouse stairs). Melee the bowl with the Hand to pick up the orb and melee it into a bowl at the shrine before it fades. Repeat for all three.' },
            { w: [U, 1306], t: 'Pass Hemera\'s trial', d: 'Go through the portal and survive with the Redeemed Hand and infinite ammo.' },
          ],
        },
      },
      {
        id: 'hand-ouranos', tab: 'weapons', type: 'Wonder weapon', name: 'Hand of Ouranos', img: I + 'hand-ouranos.webp', color: 'wind',
        summary: 'Blasts air; the charged shot is a wide gust that knocks zombies flying. Needed to turn the ballista in the easter egg.',
        facts: [['Shrine', 'Center of the World (blue circle)'], ['Upgrade', 'Redeemed → Exalted']],
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        steps: [{ w: 1070, t: 'Place a Dormant Hand at the Ouranos shrine and survive', needs: ['dormant-hand'] }],
        upgrade: {
          name: 'Redeemed Hand of Ouranos', summary: 'Earned in Ouranos\'s trial.',
          steps: [
            { w: [U, 1102], anyList: 'Arrows in any order', t: 'Launch zombies into three big arrows', d: 'Blast a zombie with the Fallen Hand so its body hits a big arrow; a blue feather pops out. Arrows: Center of the World, Cliff Ruins near a box spot, Python Pass next to the Charon shrine.' },
            { w: [U, 1132], t: 'Keep each feather in the air', d: 'Shoot the feather twice with the Hand so it floats to the shrine. The arrow breaks when that one counts.' },
            { w: [U, 1163], t: 'Pass Ouranos\'s trial', d: 'Go through the portal and survive with the Redeemed Hand and infinite ammo.' },
          ],
        },
      },
      {
        id: 'hand-gaia', tab: 'weapons', type: 'Wonder weapon', name: 'Hand of Gaia', img: I + 'hand-gaia.webp', color: 'green',
        summary: 'Fires splitting earth shots; the charged shot slams the ground in a line of spikes. The easter egg uses it to hit vines (the Fallen version works there).',
        facts: [['Shrine', 'Spartan Monument by the golden bull (green circle)'], ['Upgrade', 'Redeemed → Exalted']],
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        steps: [{ w: 958, t: 'Place a Dormant Hand at the Gaia shrine and survive', needs: ['dormant-hand'] }],
        upgrade: {
          name: 'Redeemed Hand of Gaia', summary: 'Earned in Gaia\'s trial.',
          steps: [
            { w: [U, 990], anyList: 'Plants in any order', t: 'Shoot the red crystals on three plants', d: 'Listen for the ringing: plants in the Temple Terrace, the Stoa of the Athenians and the Intersection of Treasuries. Breaking the three crystals on one makes a seedling sprout.' },
            { w: [U, 1021], t: 'Carry each seedling to the shrine', d: 'While carrying it you can\'t sprint, jump, swap weapons or use anything. Going down drops it; it respawns after a short while.' },
            { w: [U, 1038], t: 'Pass Gaia\'s trial', d: 'Go through the portal and survive with the Redeemed Hand and infinite ammo.' },
          ],
        },
      },
      {
        id: 'exalted', tab: 'weapons', type: 'Wonder weapon · Final upgrade', name: 'Exalted Hands', color: 'aether',
        summary: 'The last upgrade for every Hand: more damage and ammo. It needs all four Redeemed Hands to exist in the game, the Eternal Flame and four god challenges. Not needed for the easter egg.',
        video: { id: U, title: 'Ultimate guide to Ancient Evil', ch: 'MrDalekJD', len: '37:23' },
        steps: [
          { t: 'Light the Eternal Flame', needs: ['tributes'] },
          { w: 1509, t: 'Light the bowl on the pillar outside the temple', d: 'Melee the Eternal Flame with Apollo\'s Will to set the spear on fire. Go outside to the left, look up at the bowl on top of the pillar and throw the spear slightly above it.', needs: ['apollos-will'] },
          { w: 1572, anyList: 'Shrines in any order', t: 'Kill a Catalyst at each shrine, then 10 zombies there', list: ['Fire Catalyst at Gaia.', 'Electric Catalyst at Hemera.', 'Poison Catalyst at Charon.', 'Water Catalyst at Ouranos.'] },
          { w: 1633, t: 'Interact with Pack-a-Punch with a Hand to start the god challenges', d: 'Four challenges, one at a time (no infinite ammo, no elixirs): Gaia (Catalyst lockdown), Ouranos (skeleton lockdown), Hemera (kill three Gegenees), Charon (kill three Blightfathers).' },
          { w: 1793, t: 'Pack-a-Punch your Hand for free', d: 'Each Redeemed Hand becomes Exalted.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Greek Tragedy', short: 'Main EE',
        summary: 'Light the Eternal Flame, burn three oil spills, smash statues, set cogs turning, free the Scepter of Ra, set the sundial, pass the sharpshooter trial in the Amphitheater, load a giant ballista and fight Pegasus and Perseus.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Ending cutscene and achievement'],
          ['Hardest part', 'The sundial timing and the Amphitheater sharpshooter step'],
        ],
        prep: [
          { t: 'Pack-a-Punch open', needs: ['pap'] },
          { t: 'Apollo\'s Will built', needs: ['apollos-will'] },
          { t: 'Pegasus Strike built', needs: ['pegasus-strike'] },
          { t: 'Redeemed Hands of Charon, Hemera and Ouranos', needs: ['hand-charon', 'hand-hemera', 'hand-ouranos'], d: 'Solo, you can swap Hands at their shrines as needed.' },
          { t: 'Hand of Gaia (Fallen is enough for the vines)', needs: ['hand-gaia'], tip: 'In co-op every player needs their own Hand for the Amphitheater step.' },
        ],
        stepsTitle: 'Quest steps',
        video: { id: 'e8yMyhhudlk', title: 'Complete Ancient Evil easter egg guide', ch: 'MrRoflWaffles', len: '31:17' },
        steps: [
          { w: 436, t: 'Light the Eternal Flame (blue fire)', needs: ['tributes'] },
          { w: 483, anyList: 'Oil spills in any order', t: 'Burn three oil spills with a flaming spear', d: 'Melee the blue fire with Apollo\'s Will so the spear tip burns, then hold the shield out and sprint to an oil patch and melee it; a symbol outside the map catches fire. Patches: Upper Road, Intersection of Treasuries, Spartan Monument.', warn: 'The burning spear slowly damages your shield, so don\'t dawdle.' },
          { w: 578, t: 'Smash four statues with the Redeemed Hand of Charon', d: 'In the Spartan Monument, fire a charged shot at the floor in front of the Zeus statue and stand in the blood pool. Look around: one statue has glowing blue eyes. Hit it with an uncharged shot. Repeat until four are destroyed (the ground shakes). Skeletons spawn throughout.', needs: ['hand-charon'] },
          { w: 641, anyList: 'Cogs in any order', t: 'Break three cracked walls and lock the small cogs', d: 'Throw a spear at each suspicious cracked wall (two in the Intersection of Treasuries, one in the Spartan Monument). A small cog moves around behind it; throw a spear when it touches the big cog so it locks in and turns the big one.', tip: 'If the cog in the Stoa room isn\'t turning, one of these didn\'t lock.' },
          { w: 703, t: 'Lock the Stoa statues facing the crystal', d: 'In the Stoa of the Athenians the statues now spin around a white crystal. When all of them face the crystal, throw a spear at the turning cog in the room.' },
          { w: 749, t: 'Hit the vine symbols with the Hand of Gaia', d: 'At the Offering of the Attalids (Danu altar), shoot the vine symbol left of the Danu statue. Two vines appear near the top: get both in view and hit them with one shot (it splits). Back up: three vines appear; hit all three with one shot. You only have a few seconds each time. A Gegenees spawns.', needs: ['hand-gaia'] },
          { w: 812, t: 'Make a Gegenees knock the ankh out, and take its golden rod', d: 'In the Intersection of Treasuries an ankh is stuck in a chaos crystal. Provoke a Gegenees by shooting the red scars on its chest and back until it does a shield blast that hits the crystal. Pick up the ankh. Killing the Gegenees from the vine step drops a golden rod; take it too.', tip: 'Any later Gegenees works for the ankh if this one misbehaves.' },
          { w: 905, t: 'Free the Scepter of Ra', d: 'Put the ankh in the Ra statue\'s hand, then give it the Redeemed Hand of Hemera (stand a little to the side). It fires a beam across the room. Kill the skeletons that try to block it with their shields, plus a Blightfather, for about 45 seconds. The far wall crumbles: take the Scepter of Ra and give it to the statue.', needs: ['hand-hemera'] },
          { w: 998, t: 'Set the three sundial rings', d: 'Plant the golden rod in the middle of the sundial at the Offering of the Attalids. Kill an Electric Catalyst on the sundial to start a ring spinning past orange symbols and one blue one. Close the window (hold interact) so the blue symbol stops right under the rod\'s line of light. Do the outer, middle and inner rings; each spins faster.', tip: 'Count how many positions it is from the window to the light, and press a little early. A miss resets that ring; get another Electric Catalyst. In co-op let the host do this (less lag).' },
          { w: 1182, t: 'Pass the sharpshooter trial in the Amphitheater', d: 'Everyone pulls out their Hand and stands on the circle of its colour at the entrance. When your colour lights up in the arena, run to it and kill the zombies of your colour: in the stands use single shots, on the floor use the charged shot. Black-and-white screen means return to the entrance. Three full rounds; you get 5–6 fails per round.', imgs: [{ src: I + 'amphitheater.webp', cap: 'The Amphitheater' }], tip: 'Start charging the Gaia slam on the way, and line up with the floor zombies so one charge gets them all. Max Ammos from Rare tributes are a good backup.' },
          { w: 1463, t: 'Shoot the six symbols on the River of Sorrow door', d: 'The door is right of the Spitfire wall-buy in the Underworld. Shoot the six glowing symbols in the order shown in the clip, then interact with the door (Stanton and Bruno trigger a short scene; solo just interact).' },
          { w: 1508, t: 'Place the Pegasus Strike on the blue symbol', d: 'At the top of the River of Sorrow stairs. Pegasus brings a giant ballista down at the bottom of the stairs.', needs: ['pegasus-strike'] },
          { w: 1539, t: 'Turn the ballista with the Hand of Ouranos', d: 'Use charged gusts on it (from where the Strike was placed, or at the cog from the side) for 4–5 clicks until it snaps into place, loaded and aimed at the giant python.', needs: ['hand-ouranos'] },
          { w: 1585, t: 'Fire the ballista with a poisoned flaming spear', d: 'Light the spear at the Eternal Flame, fast travel to the Underworld, run through the active venom trap in Python Pass so the tip glows green, then melee the ballista from behind. A boss portal opens at the egg in the Center of the World.' },
          { w: 1616, t: 'Get ready for the boss', d: 'All perks, fresh shield, elixirs, a launcher from the box if you can, and every player with their Hand. Your Pegasus Strike is swapped for a Wraith Fire in the fight.' },
          { w: 1646, t: 'Boss phase 1: Pegasus', d: 'Everyone interacts with the egg. When Pegasus flies over your island, shoot it (Hands home in) so it crashes and glows orange, then hit it with your specialist. Get off an island before it lifts off (fire trail) and before meteors destroy it. Standing in Perseus\'s flaming spears refills your specialist faster.' },
          { w: 1755, t: 'Boss phase 2: Perseus', d: 'He absorbs Pegasus and fights you on the last island. When he teleports in after his lightning strike, shoot him until he kneels, then hit his weak spots (shoulder, torso) with everything. Repeat about six times. Grab the key he drops; the cutscene plays.' },
        ],
      },
    ],
  });
})();
