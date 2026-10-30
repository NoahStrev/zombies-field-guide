/* Rex Infernus — Black Ops 7, Season Five Reloaded (final map) */
(() => {
  const I = 'assets/img/bo7/rex-infernus/';
  const SE = t => ({ id: 'Jx5m4QMFL6o', title: 'Every side Easter egg in Rex Infernus', ch: 'MrDalekJD', len: '20:51', t }); // MrDalekJD side Easter eggs
  const MV = { id: 'gEWR7Cl9WJo', title: 'All four masks', ch: 'MrDalekJD', len: '12:54' };
  const E = 'KIPa6aiv1Ig'; // MrRoflWaffles easter egg guide
  const P = '8ilTCElwezM'; // TheGamingRevolution Pack-a-Punch guide
  const B = '-dpW7R1EcJs'; // MrRoflWaffles Warden's Blight guide
  const EV = { id: E, title: 'Rex Infernus easter egg guide', ch: 'MrRoflWaffles', len: '51:09' };
  const PV = { id: P, title: 'Rex Infernus Pack-a-Punch', ch: 'TheGamingRevolution', len: '4:07' };
  const BV = { id: B, title: 'Warden\'s Blight (bow) guide', ch: 'MrRoflWaffles', len: '10:56' };

  ZG.addMap({
    game: 'bo7', id: 'rex-infernus', order: 6,
    name: 'Rex Infernus', dlc: 'Season Five Reloaded', eeName: 'Main quest: defeat the Warden',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Warden\'s Blight', 'Void Claw', 'The Warden'],
    blurb: 'The final Black Ops 7 map: the Warden\'s domain, with a temple for each of the four Shadowsmiths around the Nexus Forge. Build the bow Warden\'s Blight, upgrade the Void Claw grapple, cleanse all four temples and fight the Warden himself.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op)'],
      ['Wonder weapon', 'Warden\'s Blight (dual bow), Void Claw grapple'],
      ['Key items', 'Fracture of Nyxara, Eye of the Forge, four corrupted items'],
      ['Boss', 'The Warden'],
    ],
    intro: {
      start: 'You start in Her House; survive a few rounds, answer the phone and take the Twins\' portal to the Nexus Forge. Black Ops 7 rules are explained in the basics on Ashes of the Damned.',
      weapons: 'Warden\'s Blight comes from Dravakar\'s temple after the Nyxara light puzzle and the forest. The Void Claw grapple is free on pedestals once Pack-a-Punch is on (a few charges per round).',
      'easter-egg': 'The four temple cleanses can be done in any order, but each needs the Nexus Forge pillars lined up with that temple, an Astral Flame, and rain at the end. Light Mend kills Shadow Souls fast. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch & Void Claw', short: 'Pack-a-Punch',
        summary: 'Hold out in Her House, answer the phone, place the World Seed in the Nexus Forge and chase two Dread Skulls into Shadowsmith temples. Bring back their flames, turn both crank wheels and the Forge lowers to reveal Pack-a-Punch.',
        video: PV,
        steps: [
          { w: 16, t: 'Survive in Her House until the phone rings, then answer it', d: 'The doors open on their own after a few rounds, so you don\'t need to buy them. The Twins open a portal outside.' },
          { w: 62, t: 'Place the World Seed in the Nexus Forge', d: 'Two Dread Skulls appear.' },
          { w: 77, t: 'Shoot a Dread Skull until it blows up in a temple', d: 'It floats off towards one of the Shadowsmith temples; follow it (opening doors) and keep shooting. It explodes at the back and leaves a flame in a brazier. Grab the red essence it drops for points.' },
          { w: 123, t: 'Carry the usurped flame back and throw it into a brazier by the Forge', d: 'Firing drops it; pick it up again from the brazier.' },
          { w: 138, t: 'Do the same with the second skull' },
          { w: 185, t: 'Turn both crank wheels', d: 'Slow, so do it with one zombie left. The Forge lowers and Pack-a-Punch opens. The glowing rings around it hurt you and zombies.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'void-claw', tab: 'weapons', type: 'Special weapon', name: 'Void Claw → Void Talon', short: 'Void Claw', img: I + 'void-claw.webp', color: 'green',
        summary: 'A grapple from the glowing green pedestals once Pack-a-Punch is on. About 30 seconds of unlimited grapples per pickup, a few pickups per round per player. It also pulls items and orbs towards you. The quest upgrades it to the Void Talon.',
        video: EV,
        steps: [
          { w: 139, t: 'Take a Void Claw from a pedestal with a green orb' },
          { w: 1513, t: 'Upgrade: make the Twins take you back to Her House', d: 'Early on, shoot the basketball in the broken window of the house you can see from the Nexus Forge. Over the next rounds four blue symbols appear on the house one at a time: note the order. On an exfil round, shoot them in that order; the exfil sends you to Her House.', needs: ['blight'] },
          { w: 1622, t: 'Upgrade: charged Blight shot into the locked bathroom', d: 'Upstairs, fire a Pack-a-Punched Warden\'s Blight charged shot into the bathroom. The Eye of the Forge drops. Kill the Ravagers and Doppelghasts, then use the phone to go back.', warn: 'Leave without the Eye and you have to redo the symbols.' },
          { w: 1668, t: 'Upgrade: put the Eye of the Forge into a Void Claw pedestal', d: 'Take the Void Talon from it. You can grapple the Eye back out to move it to another pedestal.' },
        ],
      },
      {
        id: 'blight', tab: 'weapons', type: 'Wonder weapon', name: 'Warden\'s Blight', img: I + 'warden.webp', color: 'fire',
        summary: 'A two-sided bow; each side fires on its own. Pack-a-Punched, each side gets a charged shot that makes a fiery tornado, so you can alternate them for a non-stop stream (it eats ammo). The quest needs Pack-a-Punched charged shots.',
        facts: [['Get it', 'Free quest in Dravakar\'s temple'], ['Upgrade', 'Pack-a-Punch (unlocks the charged shot)']],
        video: BV,
        steps: [
          { w: 126, t: 'Read the riddle and set the four pillar symbols in Dravakar\'s temple', d: 'Interact with the blue writing on the back wall. Three switches turn pairs of pillars (left, back/middle, right); the switch in the middle enters the code. By riddle:', table: { head: ['Riddle begins…', 'Left', 'Middle', 'Right'], rows: [
            ['"I drift to the runner that travels moons…"', '3', '2', '1'],
            ['"I remember the runner that travels to stars…"', '0', '2', '3'],
            ['"I drift to stars that remember moons…"', '1', '2', '2'],
            ['"I remember galaxies that drift to moons…"', '2', '0', '2'],
          ] }, tip: 'Wrong: the pillars reset; try again. The middle pillar lowers to reveal a high room.' },
          { w: 332, t: 'Blow open the wall above Dravakar\'s entrance for the Fracture of Nyxara', d: 'Wall-jump or grapple up to the platform by the entrance and use PhD Flopper or a grenade on the wall to the right.' },
          { w: 364, t: 'Place it in Nyxara\'s temple and aim the crystals', d: 'Put it in the empty holder high on the wall. Hit the pointer under each crystal with the Void Claw to aim it. From the shard above the rubble: middle; above the main door: right; left of that door: left; right of it: right. In the first inner room: the placed shard middle, above the main door middle, by the last door left.' },
          { w: 442, t: 'Make an Astral Flame', d: 'Grapple a floating pink/purple orb (Astral Tear) to Pack-a-Punch and turn a crank: the braziers burn purple. Take the flame. No orbs? Wait a round.' },
          { w: 472, t: 'Shoot the flame at the big eye in Nyxara\'s temple and fix any crystal it stops at', d: 'On a timer. The ball bounces from crystal to crystal; if it hits a dead end, re-aim that crystal. It opens the inner sanctum.' },
          { w: 504, t: 'Eat the fruit from the vine below and find three charred bodies', d: 'Stand by the vines (they drain you) until the bar fills, then eat the fruit (round 8+). In the forest: melee the floorboards left of the body in the broken cabin, the body against the rock in the middle, and one by the cave entrance.' },
          { w: 599, t: 'Build Warden\'s Blight at the anvil in Dravakar\'s inner sanctum', d: 'Grapple up into the room revealed by the pillar. The anvil can also break down other guns into crystals and tools.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Rex Infernus main quest', short: 'Main quest',
        summary: 'Get the Void Talon, take control of the Nexus Forge, collect a corrupted item for each Shadowsmith, cleanse all four temples (each ends with lightning in the rain), then descend under the Forge to fight the Warden.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card and ending cutscene'],
          ['Boss', 'The Warden'],
        ],
        prep: [
          { t: 'Pack-a-Punch on and the Void Claw', needs: ['power-pap', 'void-claw'] },
          { t: 'Warden\'s Blight, Pack-a-Punched', needs: ['blight'] },
          { t: 'Ammo mods: Shatter Blast, Shadow Rift and Light Mend', d: 'Shadow Rift and Light Mend can be found free during the hammer step.' },
          { t: 'Recommended augments: Stamin-Up Free Faller, Double Tap Double Impact, Death Perception Death Stare' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 1513, t: 'Upgrade the Void Claw to the Void Talon', needs: ['void-claw'] },
          { w: 1713, t: 'Take control of the Nexus Forge', d: 'With the Void Talon, yank the small square plates off the columns around the Forge, then off the walls underneath it. Burn the spider webs behind with the Blight or explosives (Deathspinners attack). Surge the Forge with the crank at Pack-a-Punch, then pull the switch in the floor underneath: the rings start turning, and the pillar switches slow their part.', tip: 'Be quick: you have about 10 seconds after cranking. The floor switch is on the ammo-cache side underneath.' },
          { w: 247, any: 'Corrupted items in any order', t: 'Caltheris: Shimmering Thread', d: 'Optional but faster: on each of the four pressure plates near the ammo crate in her main chamber, shoot the four yellow lights within six seconds. It releases more Astral Tears. Grapple Astral Tears close and interact with them until one gives the thread (15 to 20 tears).' },
          { w: 390, any: 'Corrupted items in any order', t: 'Veytharion: Woven Sash (needs rain)', d: 'The sash only appears in rain, on a ledge off the map: behind the Mystery Box spot in Ruinas Insula, below the platform from Nyxara Sanctuary in Spira Insula, or on the north-west ledge of Araena Insula. Jump down and grab it as you fall. Rain comes on Deathspinner rounds, or whenever you like with the pool from the optional cube puzzle in Veytharion\'s sanctuary. Its four cubes (leaf, water, hand, fire; Death Perception shows them) are left of the puzzle, on the window ledge opposite Mule Kick, on the ledge above the window left of Mule Kick, and on the stone column left of the GobbleGum machine in the main chamber. Fire must never touch the leaf or the water, and the slider only moves with the hand in it:', ol: [
            'Put the leaf, water, hand, then fire into the left column.',
            'Move fire and the hand into the slider and shoot the circle to slide it right. Put fire in the right column.',
            'Slide back, add the leaf, slide right. Put the hand, then the leaf, on the right column.',
            'Take fire, then the hand, back into the slider and slide left. Put the hand, then fire, in the left column.',
            'Move the water, then the hand, into the slider, slide right and put the water on the right column.',
            'Slide back, take fire, slide right, then put the hand and finally fire on the right column.',
          ], tip: 'The column explodes if the order is wrong; the cubes come back next round. The first solve also drops a free perk.' },
          { w: 981, any: 'Corrupted items in any order', t: 'Dravakar: Blacksmith\'s Hammer', d: 'In Dravakar\'s inner sanctum, set off Shatter Blast next to each of the four wall shields. They drop: one hides the hammer (others give a Self-Revive, Light Mend or Shadow Rift).' },
          { w: 1233, any: 'Corrupted items in any order', t: 'Nyxara: Ancient Scroll', d: 'With Shadow Rift on your gun, eat the vine fruit again to go to the forest and keep getting Shadow Rift kills until a zombie drops the scroll. Only one player can go.' },
          { w: 1918, t: 'Line up the Nexus Forge pillars with a temple', d: 'Rotate the rings until light enters the mouth of that Shadowsmith\'s head outside the temple. One temple at a time.', tip: 'The pillar whose handle you crank moves least and the other two move further, all the same way. The floor switch under Pack-a-Punch flips the direction.' },
          { w: 1979, t: 'Cleanse each temple', d: 'For each Shadowsmith:', ol: [
            'Put its item in the brazier in its main chamber and light it with an Astral Flame. A rune latches onto a passing zombie: have the matching arm of a Titan Trap crush it. Outside Caltheris\'s passage the inner arm is Caltheris and the outer arm Dravakar; outside Veytharion\'s the inner arm is Veytharion and the other Nyxara.',
            'Stand on the square floor plate doing the right action until it slides away (15 to 30 seconds in total): jump (Veytharion), aim down sights (Caltheris), re-plate your armour (Dravakar) or go prone (Nyxara).',
            'Charged-shot the round plate that appears with the Blight, then shoot it to aim its light at the right wall: west (Veytharion), north-east (Caltheris), south-east above the Mystery Box (Dravakar), down by the lava pit (Nyxara). Kill zombies until the wall cracks open.',
            'Shoot the statue inside, kill the Shadow Souls (weak to Light Mend), shoot the statue again.',
            'Grapple a purple orb under the temple\'s head outside and raise it with a charged Blight shot.',
            'In the rain (a Deathspinner round or Veytharion\'s pool), hit the orb with an Astral Flame. Lightning strikes and the temple is cleansed.',
          ] },
          { w: 2725, t: 'Get ready, then everyone stands in a circle under the Forge', d: 'Light Mend for healing and Shadow Souls, the Eye of the Forge for the Talon in the fight.' },
          { w: 2770, t: 'Beat the Warden', d: 'Shoot him freely, and destroy the Dread Skulls beside him to stun him and open a crit spot on his tail for a few seconds. He charges you and can knock you off the edge (grapple back). Go down near a skull and it drains you: die once and you fight your way out of a jail cell. Phase 2 adds stingers from the ground (kill them before they link for a wipe), a red disc firing mines, and Shadow Souls that make him immune. Shadowsmith Blessings from the earlier maps appear.', imgs: [{ src: I + 'warden.webp', cap: 'The Warden' }] },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'super-toy', tab: 'side', type: 'Super Easter Egg · toy', name: 'Super Easter Egg: Warden toy', short: 'Super EE toy', color: 'aether',
        summary: 'The last toy, which opens only once the other five sit on the shelf in Her House. Climb a parkour course to the toybox, knock three toy horses out of the sky, fill their skate parts with the right kills and take a hidden portal home on an exfil round. Then start the [[bo7/super-easter-egg/easter-egg|playdate]].',
        video: { id: '3KGZlHLMQi0', title: 'Super Easter Egg guide: every map', ch: 'MrDalekJD', len: '42:44' },
        steps: [
          { t: 'Check the other five toys are on the shelf upstairs in Her House', d: 'Interact with the shelf to start this quest.' },
          { w: 1933, t: 'Upgrade the Void Claw to the Void Talon', needs: ['void-claw', 'blight'], d: 'Pack-a-Punch, the Nyxara light puzzle, the house symbols, the forest and Warden\'s Blight, as in the main quest; the Eye of the Forge from Her House goes into a grapple pedestal.' },
          { w: 2028, t: 'Grapple the lock under the bridge in Nyxara\'s Passage', d: 'It pulls everyone into a rock parkour course. Climb all the way round to Her House within 1:30.' },
          { w: 2046, t: 'Open the toybox with Aether Shroud', d: 'It glows blue on the rocks by the house (stand on its rock a while if it hasn\'t tipped over yet). Use Aether Shroud: it opens and three lights fly off.' },
          { w: 2077, t: 'Knock down the three floating toy horses', d: 'One floats high above each island: Spyra Insula (by Juggernog), Aranea Insula (by Widow\'s Wine) and Ruinas Insula (by PhD Flopper). Grapple up to each and melee it mid-air; it drops part of a roller skate.' },
          { w: 2122, t: 'Fill each part with the right kills, then pick it up', d: 'Each needs its own kind of kill nearby before it becomes solid:', list: ['Shoes (Spyra Insula): kills while you\'re in the air', 'Skates (Aranea Insula): PhD Flopper kills (dive into a crowd)', 'Laces (Ruinas Insula): kills while Frenzied Guard is active'] },
          { w: 2183, t: 'On an exfil round, take the portal in the Nexus Forge', d: 'Don\'t call the exfil. A portal opens on a rock in the Nexus Forge and takes you back to Her House.' },
          { w: 2200, t: 'Put the skates in the toybox and take the Warden toy' },
          { w: 2217, t: 'Every player places the Warden toy on the shelf', d: 'Upstairs in Her House.', warn: 'In co-op each player has to pick it up and place it themselves, or they won\'t get the rewards.', tip: 'Next: the playdate, five boss fights in a row. See the [[bo7/super-easter-egg/easter-egg|Super Easter Egg]] page.' },
        ],
      },
      {
        id: 'song', tab: 'side', type: 'Song', name: '"All We Are"',
        summary: 'Interact with three Mister Peeks headphones: on top of a pillar in Nyxara\'s main chamber (wall-jump), at a window in Ruinas Insula, and around a skull between a rock and a low wall in Araena Insula.',
        video: SE(1034),
      },
      {
        id: 'song-dream', tab: 'side', type: 'Song', name: '"Samantha\'s Dream"',
        summary: 'Play the phonograph in the bedroom above Quick Revive in Her House. Only audible close by.',
      },
      {
        id: 'masks', tab: 'side', type: 'Wearable', name: 'The four masks',
        summary: 'Four wearables, all usable in one game. Each has a pedestal (in its Shadowsmith temple) where you can leave it and swap.',
        video: MV,
        steps: [
          { w: 18, t: 'Horned Skull Mask: stay in Her House for nine rounds, then melee the painting right of the chimney', d: 'Standing still makes a damaging ring and boosts damage and armour (1-minute cooldown). Hitting the painting earlier gives smaller prizes instead (600 Essence or ammo after 5 to 6 rounds, a perk can or Rare Aether Tool after 7 to 8) and no mask.', tip: 'Finished the main quest? From then on every exfil round opens a rift that takes you straight back to Her House.' },
          { w: 610, t: 'Cowboy Hat: ride a Web Mother next to Pack-a-Punch and get about 50 kills', d: 'It then jumps into Pack-a-Punch and drops the hat. Gives some protection from Deathspinners and Web Mothers. The ride is timed, so it can take a few tries.' },
          { w: 453, t: 'Astronaut Helmet: win Mister Peeks\'s grapple race in 50 seconds', d: 'Collect six Mister Peeks pieces (the head on a shelf in Her House above Quick Revive; the rest need the Void Claw: outside Caltheris\'s Passage on the right, across the cliff from the Mystery Box spot in Ruinas Insula, floating off an edge in Aranea Insula, on a pillar above Juggernog in Spira Insula, and outside the Nexus Forge between Veytharion\'s and Dravakar\'s temples). With every door open, interact with him on the ledge above the Mystery Box in Caltheris\'s Main Chamber and grapple through his circles to the Nyxara Entrance. The helmet adds 30 seconds to the Void Claw and Talon; the race also drops a crystal, a Mystery Perk and a Ray Gun, and can be rerun for more loot.' },
          { w: 173, t: 'Spiked Skull Mask: beat the Twins\' three games twice in the forest', d: 'In the forest (from Nyxara\'s Inner Sanctum, once a round), use the music box under the fallen tree, leave, come back and use the blue toy box between two trees. Win the teddy bear (collect plushies while enemies move only when you look away), mask (find the Twins in time) and rope (skipping) games, then the harder versions. The mask adds an effect that drops the Twins like lightning onto nearby zombies.' },
        ],
      },
      {
        id: 'corrupted', tab: 'side', type: 'Free weapon', name: 'Corrupted wall weapons',
        summary: 'Turn a wall-buy into an Ultra-rarity wonder gun: the M34 Novaline (Dravakar\'s temple, second room) becomes The Miserable Bastille, the M10 Breacher (left of Caltheris\'s entrance, opposite Wisp Tea) becomes the Stormwrought Pantheon.',
        video: SE(715),
        steps: [
          { w: 715, t: 'Buy the M34 Novaline or M10 Breacher off the wall' },
          { w: 732, t: 'Pack-a-Punch three other weapons' },
          { w: 749, t: 'On a rain round, hit the glowing wall-buy with an Astral Flame', d: 'Veytharion\'s pool can make it rain. An elite Web Mother spawns: kill it.' },
          { w: 783, t: 'Buy the corrupted gun and Pack-a-Punch it before you go down', d: 'It drains your health and you can\'t switch weapons until it\'s upgraded. Go down and you lose it (retry on the next rain round). A trophy at the Nexus Forge then drops loot.' },
        ],
      },
      {
        id: 'anvil-gauntlet', tab: 'side', type: 'Free weapon', name: 'Necrofluid Gauntlet from the anvil', img: I + 'anvil.webp',
        summary: 'Break down one gun of every class at Dravakar\'s Anvil, each at least Pack-a-Punch level 1: assault rifle, SMG, pistol, shotgun, sniper, LMG, marksman rifle, and a launcher or special. The anvil then gives you the Necrofluid Gauntlet from Ashes of the Damned.',
        video: SE(882),
      },
      {
        id: 'dance-off', tab: 'side', type: 'Free reward', name: 'Mister Peeks dance-off',
        summary: 'Dig up dig spots with the Void Claw until one gives a cassette tape. Put it in the tape player in a zombie window in Aranea Insula, near Widow\'s Wine (in co-op everyone votes). You\'re sent to Her House: for 1:15, press the button combos as they appear, left to right (in co-op, highest score wins). Back at the Nexus Forge Mister Peeks dances and leaves a trophy with loot: Salvage, Mystery Perks, ammo mods, even Ray Guns. Repeatable every five rounds.',
        needs: ['void-claw'],
        video: SE(635),
      },
      {
        id: 'conduit-rift', tab: 'side', type: 'Free reward', name: 'Temporal conduit rift (special rounds)',
        summary: 'On every special (spider) round a rift opens in one of the four Shadowsmith temples; the mini-map shows it as a tear. Walk in for a short scene with the Entity, then loot when you come out: points, a Legendary Aether Tool, a Mystery Perk, sometimes a Pack-a-Punch crystal or a wonder weapon.',
        video: SE(926),
      },
      {
        id: 'dig-orbs', tab: 'side', type: 'Map tip', name: 'Better dig spot loot',
        summary: 'Before you dig a dig spot with the Void Claw, grapple one of the purple orbs into the pile. It gives a chance of better loot: perks, Aether Tools, crystals, even a Ray Gun (or a spider jump scare).',
        needs: ['void-claw'],
        video: SE(969),
      },
      {
        id: 'piano', tab: 'side', type: 'Free reward', name: 'Her House piano tunes',
        summary: 'Play one tune a round on the piano in Her House. Each pays 300 points plus 100 for every right key in a row. The fifth also gives an Intel the first time; the seventh pays 1,000 points and a random drop this round and next.',
        spots: [
          { label: 'Tune 1', text: '8 4 1 8 4 1 8 4 8 4 1 8 4 1 8 4' },
          { label: 'Tune 2', text: '5 5 5 8 5 5 4 4 4 8 5 5 5 5 5 6 7 6 5' },
          { label: 'Tune 3', text: '1 1 3 5 6 5 4 3 5 5 6 5 3 5 5 6 5' },
          { label: 'Tune 4', text: '4 5 6 5 5 4 5 6 5 3 7 3 7 3 4 4 5 6 5' },
          { label: 'Tune 5', text: '8 6 7 5 6 5 3 5 4' },
          { label: 'Tune 6', text: '5 3 6 5 3 5 5 3 6 5 3 4 3 2 3 1 2 2 3 2 3 1' },
          { label: 'Tune 7', text: '1 1 1 1 1 1 1 2 3 2 2 1 2 2 2 3 4' },
        ],
        video: SE(15),
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each. The Fire Sale and the Random Perk only appear once you have the other seven.',
        video: SE(1119),
        spots: [
          'Bonus Points: inside the structure out of the map right of Her House, seen from Nyxara\'s Passage.',
          'Max Ammo: behind the interactable painting in Her House.',
          'Double Points: in the structure out of the map behind Her House, seen from Caltheris\'s Passage.',
          'Full Power: at the very top of the left pillar in Veytharion\'s Main Chamber, seen from the temple entrance.',
          'Insta-Kill: in the arch on the right of the pit under the Nyxara Entrance.',
          'Max Armor: on the floor of the left window at the Dravakar Entrance (jump to see it).',
          'Nuke: on the flat roof of a structure out of the map, seen from Caltheris\'s Main Chamber.',
          'Fire Sale: inside the structure out of the map behind the Mystery Box spot in Spira Insula.',
          'Random Perk: on the bridge out of the map below Aranea Insula.',
        ],
      },
    ],
  });
})();
