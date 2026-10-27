/* Kowakujō — Black Ops 7, Season Four Reloaded */
(() => {
  const I = 'assets/img/bo7/kowakujo/';
  const E = 'cQovwK9NcSk'; // MrRoflWaffles easter egg guide
  const P = '4GSQJSYaLiI'; // TheGamingRevolution power and Pack-a-Punch
  const N = 'tBU2804pKeQ'; // MrRoflWaffles Nekomancer guide
  const EV = { id: E, title: 'Kowakujō easter egg guide', ch: 'MrRoflWaffles', len: '49:48' };
  const PV = { id: P, title: 'Kowakujō power and Pack-a-Punch', ch: 'TheGamingRevolution', len: '3:21' };
  const NV = { id: N, title: 'Free Nekomancer (cat) wonder weapon', ch: 'MrRoflWaffles', len: '8:11' };

  ZG.addMap({
    game: 'bo7', id: 'kowakujo', order: 5,
    name: 'Kowakujō', dlc: 'Season Four Reloaded', eeName: 'Main quest: free Nyxara',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Nekomancer', 'Murder mystery', 'Nyxara boss'],
    blurb: 'A Japanese castle on a volcano, home of Takeo\'s family. Free a spirit cat that becomes the Nekomancer, then solve who poisoned the Shogun: gather evidence for five paintings, question a ghost, set the zodiac dial and fight the Shadowsmith Nyxara.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op)'],
      ['Wonder weapon', 'Nekomancer (free cat quest)'],
      ['Key items', 'Maneki-Neko, Fox Mask, five sets of evidence'],
      ['Boss', 'The Onryo, then Nyxara'],
    ],
    intro: {
      start: 'Areas are locked behind dragon banners: stand in each and kill zombies to recapture it. Pack-a-Punch is in the Shogun\'s Sanctum, opened with the hanko from the first Oni. Black Ops 7 rules are explained in the basics on Ashes of the Damned.',
      weapons: 'The Nekomancer is a cat: it scratches, fires a shot and has a charged blast. The quest needs it, and it needs PhD Flopper and Death Perception to build.',
      'easter-egg': 'A detective story: five evidence sets go on the shelves of the Meditation Room, then you pick the right item for each painting. The answers depend on your game. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Wards & Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Recapture the wards at the dragon banners, remove the glyphs, kill the first Oni for the Shogun\'s Hanko, open the Shogun\'s Sanctum and feed the World Seed with kills.',
        video: PV,
        steps: [
          { w: 15, t: 'Recapture the first ward', d: 'Through the Flower Garden into the Kitchens. Stand in the blue ring by the dragon banner and kill the flaming purple-eyed zombies. Buyables in that area unlock.' },
          { w: 78, t: 'Recapture the second ward in the Tea Garden' },
          { w: 110, t: 'Remove the glyphs and go through the Central Courtyard' },
          { w: 125, t: 'Kill the first Oni for the Shogun\'s Hanko', d: 'It spawns as you head for the Shogun\'s Sanctum. Keep the hanko: the quest needs it later.' },
          { w: 141, t: 'Open the Sanctum and kill purple-eyed zombies by the World Seed', d: 'Use the hanko on the clan symbol. When the seed glows, Pack-a-Punch unlocks.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'nekomancer', tab: 'weapons', type: 'Wonder weapon', name: 'Nekomancer', img: I + 'nekomancer.webp', color: 'gold',
        summary: 'A spirit cat. Melee scratches, the trigger fires a shot, and a charged shot makes a blast with a second cat. Free once you rescue the Nekomata.',
        facts: [['Get it', 'Free quest'], ['Needs', 'PhD Flopper, Death Perception (helps)']],
        video: NV,
        steps: [
          { w: 0, t: 'Build the Maneki-Neko (cat grenade)', d: 'Three parts, each in one of three spots, crafted at the bench next to Vulture Aid in the Workshop:', list: [
            'Cat figure: on barrels in the Gatehouse, or on barrels on either side of the Kitchens.',
            'Wind chime: on the sunken house door in the Stables, by the Warden 308 wall-buy in the Training Area, or left of the door in the Staging Area.',
            'Man figure (Karakuri): in the Storage Rooms across from PhD Flopper, on a table down that hallway, or further along on the left by a wicker vase.',
          ] },
          { w: 79, t: 'Dive-to-prone under the hanging cage with PhD Flopper', d: 'In the back left corner of the Tenshu Entrance (facing the cherry blossom tree). The cage drops.' },
          { w: 95, t: 'Throw the cage into lava, then play to the next round' },
          { w: 111, t: 'Find the cat\'s paw prints by a gateway', d: 'Kill zombies at the four possible gateways until glowing red paw prints appear. You must have the Maneki-Neko equipped (buy another at the bench if you used it).' },
          { w: 218, t: 'Follow the prints by killing zombies where they point', d: 'Each kill in front of the prints makes a new set. When they form a circle, throw the Maneki-Neko into the middle; the lava must be flowing, not cooled.' },
          { w: 281, t: 'Kill the Abomination that climbs out, then flip the round' },
          { w: 296, t: 'Sneak up on the sleeping cat', d: 'Somewhere near the Kitchens or the Training Area, surrounded by creaky floorboards. Crouch and avoid the boards (Death Perception highlights them); don\'t sprint, shoot or use a field upgrade nearby. Pick the cat up.' },
          { w: 392, t: 'Free it from the World Seed', d: 'Hold interact by the seed; the cat is trapped and the seed pulses red. Melee the seed between pulses until the cat is freed, then pick up the Nekomancer.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Kowakujō main quest', short: 'Main quest',
        summary: 'Light the eleven lanterns, earn the Fox Mask, then gather five sets of evidence (suspect, accomplice, poison, location, motive) for the Meditation Room. Hear the ghost name the accomplice, place the right item under each painting, set the zodiac dial, beat the Onryo and Nyxara.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card; an Ultra Path of Sorrows if the mystery is solved without mistakes'],
          ['Boss', 'The Onryo, then Nyxara'],
        ],
        prep: [
          { t: 'Pack-a-Punch on (keep the Shogun\'s Hanko)', needs: ['power-pap'] },
          { t: 'The Nekomancer and a Maneki-Neko', needs: ['nekomancer'] },
          { t: 'Decoy grenades, a Brain Rot gun, a bullet gun with range for the boss' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 641, t: 'Light all 11 stone lanterns with the Nekomancer', d: 'About 10 seconds between each. A good solo order: Outer Ward by spawn, Flower Garden past the arch, Gatehouse across from Speed Cola, the hut in the Staging Area, the lava river by Death Perception in the Stables, the rock across the lava right of Melee Macchiato, the Tea Garden by the Cat Cafe, the big tree in the Central Courtyard, left of the door to the Onsen Baths, the Central Courtyard left of the path to the Staging Area, then right of the stairs into the Kitchens.' },
          { w: 704, t: 'Interact with the spirit body in the War Room, then take the ceramic shard and the Poison Compendium', d: 'The compendium is in the corner left of the door to the Shogun\'s Sanctum.' },
          { w: 719, t: 'Fly the ninja kite to the Fox Mask and hang it on the mask wall', d: 'Right of the cherry blossom tree, hanging off a roof edge. The mask wall is in the Storage Rooms by PhD Flopper.' },
          { w: 751, t: 'Kill masked zombies in the order the masks light up', d: 'Three rounds of this Simon Says. A wrong kill fails it (retry next round). The mask turns blue.' },
          { w: 830, t: 'Suspect evidence: shoot the Fox Mask three times as it hides', d: 'Each time it drops an item: Takeshi\'s pipe (shelf left of the Workshop stairs), Takeo\'s case (ceiling of the Collapsed Study), Mitsuhime\'s comb (outside the window left of Elemental Pop in the Onsen Baths). Put them on the Meditation Room shelves.' },
          { w: 908, t: 'Accomplice evidence: the coin purse', d: 'A wooden coin sits at one Mystery Box spot: move the box there (or wait for a Fire Sale), throw the Maneki-Neko in front and spin. Take the purse to the Outer Ward, right of the Rampage Inducer.' },
          { w: 1052, any: 'Accomplices in any order', t: 'Gardener: water three plants', d: 'Take the bucket from a cupboard in the Tea Garden or the top floor of the Onsen Baths and fill it at a pool there (running, jumping or getting hit spills it) and water the three plants on the Flower Garden path. Shoot the glowing flowers by the doorways to drop the Gardener\'s immunity and kill it for the shears and a note.' },
          { w: 1162, any: 'Accomplices in any order', t: 'Merchant: feed a zombie fruit', d: 'Knock a fruit off the basket on a Kitchens shelf and leave. A zombie picks it up and follows you: kill it by the shack window in the Staging Area. Kill the Merchant for the sales log and abacus.' },
          { w: 1286, any: 'Accomplices in any order', t: 'Noble: decoys in three windows', d: 'Quickly throw a decoy into each of the three high windows opposite Melee Macchiato in the Training Area. Throw the Noble\'s grenades back in until he dies. Take the hat and diary.' },
          { w: 1380, any: 'Poisons in any order', t: 'Monkshood flower', d: 'Charged-shot the beam above the Training Area ammo cache for an empty pouch; stand in an active ash fissure for about a minute to fill it. Pick the tiny Monkshood bud by the lava near the Flower Garden crafting table, plant it in the pot by the exfil phone in the Tenshu Entrance with the ash, melee a cherry blossom tree until it glows, then run circles round the pot until a tornado grows it.' },
          { w: 1614, any: 'Poisons in any order', t: 'Plum pit', d: 'Melee the small basket on the shelf by the Kitchens fire pit, then jump on the plum until it\'s just the pit.' },
          { w: 1645, any: 'Poisons in any order', t: 'Pufferfish', d: 'In the Storage Rooms, melee the sticking-out scroll on the 3×3 rack: each hit flips that scroll and its up/down/left/right neighbours. Push all nine in for the pestle and death records. Put the pestle in the bowl on the Kitchens stove and fill it with Brain Rot or Nekomancer charged-shot kills. Take the pufferfish from the corner.' },
          { w: 1847, t: 'Location evidence: repair the sake cup and visit three trays', d: 'Take the second ceramic shard from the new painting and mend the cup at the Tea Garden table; next round, take the ghostly cup. Defend it on the tray by the map in the War Room (horse statuette), the tray in the Collapsed Study (calligraphy brush) and the Tea Garden tray (a Hellhound runs off with the tea whisk: kill it).', tip: 'Cup broken? Pick up the shards, mend it at the Tea Garden table again and wait a round.' },
          { w: 1986, t: 'Motive evidence: hanko, netsuke and the crest medallion', d: 'The hanko is from the first Oni. The netsuke is stuck in cooled lava behind the sunken Stables house: blow it free. For the medallion, read the four numbers the clock in the Storage Rooms rubble points to. Next round, kill banner-carrying zombies; their banners go to the Staging Area. Blue numerals 一 二 三 四 (1–4) appear around the map: under each, place banners whose shapes add up to that clock number. Then take the medallion from the clock.' },
          { w: 2316, t: 'Ask the ghostly rifleman who the accomplice was', d: 'Turn on a ghostly rifleman trap and get 10–20 kills; walk up to the ghost. A courtier or noble means the Noble, the gardener means the Gardener, a fruit or market merchant means the Merchant. Silence: try another trap.' },
          { w: 2422, t: 'Place one item under each painting', d: 'Left to right:', ol: [
            'Suspect: Mitsuhime\'s comb.',
            'Accomplice: Noble\'s hat, the Gardener\'s shears or the Merchant\'s abacus.',
            'Poison: read the cause of death in the death records. Noxious plant: Monkshood (Noble) or plum pit (Merchant). Paralysis: pufferfish (Merchant) or Monkshood (Gardener). Noxious food and vomiting: plum pit (Gardener) or pufferfish (Noble).',
            'Location: the drawing behind the figure. Fish = tea whisk, bird = calligraphy brush, mountain = horse statuette.',
            'Motive: the crest medallion.',
          ] },
          { w: 2642, t: 'Set the zodiac dial', d: 'Put the hand on the animal in the death records ("Hour of the …": Dog, Boar, Rat, Ox, Tiger or Hare), then move it back (anticlockwise) by the hours your poison takes, from the poison note. Example: Hare and 3 hours lands on Rat.' },
          { w: 2752, t: 'Light the incense on both sides and fight the Onryo', d: 'An orb drifts to the World Seed: interact to fight the Onryo (a special Oni) in the Central Courtyard. Shoot its masks when it goes immune. Then a banner in the Sanctum starts the final fight.' },
          { w: 2831, t: 'Beat Nyxara on the mountain top', d: 'Capture zones by planting flags (from the Oni) to be safe from her attacks while you shoot her eyes and wounds. More zones and new attacks each phase: fire breath, electric tornadoes, then fireballs that down you. Earlier Shadowsmith blessings appear if you beat those maps.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'super-toy', tab: 'side', type: 'Super Easter Egg · toy', name: 'Super Easter Egg: Z-Rex toy', short: 'Super EE toy', color: 'aether',
        summary: 'The quickest toy: you can be done by round 3. Spin up cherry-blossom tornadoes to knock the toybox off the castle roof, follow its bird round three trees, and trade the origami it drops for the Z-Rex toy. Part of the [[bo7/super-easter-egg/easter-egg|Super Easter Egg]].',
        video: { id: '3KGZlHLMQi0', title: 'Super Easter Egg guide: every map', ch: 'MrDalekJD', len: '42:44' },
        steps: [
          { w: 1741, t: 'Turn on power and Pack-a-Punch', needs: ['power-pap'], d: 'The toybox appears spinning on the castle roof, above the wall that blows open onto the rooftops.' },
          { w: 1756, t: 'Charge up at the cherry tree by the Tenshu Entrance', d: 'Melee it until it blooms, then stand under it until your screen glows: that\'s the tornado power.' },
          { w: 1772, t: 'Run circles under the toybox on the rooftops', d: 'A tornado knocks it off the roof. It opens and a bird flies out to perch on the castle.' },
          { w: 1806, t: 'Wake three more cherry trees, in this order', d: 'Melee each until it activates; the bird flies over and chirps each time.', ol: ['Kitchens', 'Staging Area', 'Training Area'] },
          { w: 1852, t: 'Spin on the flat stump in the Central Courtyard', d: 'Still glowing, run circles on it: a tornado sends the bird to the big tree, and an origami bird drops to the ground.' },
          { w: 1868, t: 'Put the origami in the toybox for the Z-Rex toy, then exfil', d: 'The box now sits on the ground at the Tenshu Entrance, left of the tree. Exfil on an exfil round (round 11 is the first) with the toy.', warn: 'Solo: finish in one sitting. Loading a save resets the toy quest.' },
        ],
      },
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Evencry"',
        summary: 'Interact with three Mister Peeks headphones: in the Stables, the Kitchens and the Onsen Baths.',
      },
      {
        id: 'song-tk', tab: 'side', type: 'Song', name: '"When The Stars Go Dark" (Tom Kane tribute)',
        summary: 'In the Central Courtyard, face the "TK" carved into the cherry blossom tree, crouch and look up the tree for a few seconds.',
      },
    ],
  });
})();
