/* Rave in the Redwoods — Infinite Warfare DLC 1 (Sabotage) */
(() => {
  const I = 'assets/img/iw/rave/';
  const R = 'NjxUwLRwKSs'; // MrRoflWaffles easter egg guide
  const B = 'PKTxXkdnlYI'; // MrRoflWaffles crossbow guide
  const M = '__BeHhM9_Ok'; // Pack A Puncher map walkthrough
  const RV = { id: R, title: 'Rave in the Redwoods main easter egg guide', ch: 'MrRoflWaffles', len: '13:58' };
  const BV = { id: B, title: 'All upgraded bows guide', ch: 'MrRoflWaffles', len: '8:16' };
  ZG.addMap({
    game: 'iw', id: 'rave-in-the-redwoods', order: 2,
    name: 'Rave in the Redwoods', dlc: 'Sabotage · DLC 1', eeName: 'Locksmith',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Vlad crossbow', 'Rave Mode', 'Kevin Smith'],
    blurb: 'A 90s summer camp hosting a rave. Fix the boat to reach Turtle Island and Pack-a-Punch, help Kevin Smith remember what happened to his friend, then fight the giant Slasher for the second piece of the Soul Key.',
    quick: [
      ['Main EE', 'Locksmith'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Vlad crossbow (4 upgrades), Smiley (EE reward)'],
      ['Key items', 'Boat engine parts, hot dogs, photo halves, skull'],
    ],
    intro: {
      start: 'Turn on the power, build the boat and fix the projector on Turtle Island for Pack-a-Punch. Rave Mode (from a pouch in a fire pit) is needed for the crossbow.',
      parts: 'Three boat engine parts, always in the same places.',
      weapons: 'The Vlad is free from a short quest. An upgraded bow makes the easter egg rituals and the boss much easier.',
      'easter-egg': 'Three rituals that each end with a Slasher, then a three-round boss fight on Turtle Island. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power, boat & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn on the power in the Bear Lodge basement, build the boat, grab a film reel on the dock, ride to Turtle Island and put both reels in the projector in Kevin Smith\'s cabin.',
        video: RV,
        steps: [
          { w: [M, 359], t: 'Turn on the power in the Bear Lodge basement', d: 'Get there through the Old Marvin Mine (doors from the Camper Cabins or the Recreation Area) and follow the minecart tunnel. The switch opens the trapdoor back up into the spawn cabin.' },
          { w: 17, t: 'Collect the three boat engine parts', needs: ['boat-engine'] },
          { w: 64, t: 'Pick up the film reel on the dock, then take the boat', d: 'At the boat launch on the Trading Post docks (White Tail Beach), the reel lies on the floor by the door. Teammates can ride with you; the boat comes back if they miss it.' },
          { w: 79, t: 'On Turtle Island, take the second reel and fix the projector', d: 'The reel is outside the cabin by the zipline. Put both reels in the projector inside the cabin: it opens a portal to Pack-a-Punch (5,000). Ride the zipline back to the mainland.' },
        ],
      },
      {
        id: 'rave-mode', tab: 'start', type: 'Map mechanic', name: 'Rave Mode', color: 'aether',
        summary: 'Zombies drop pouches. Throw one into any fire pit to enter Rave Mode for a limited time: hidden things show up and the crossbow quest works. Fairies extend the timer. The Slasher hunts you while you\'re in it.',
        video: { id: M, title: 'Rave in the Redwoods full map walkthrough', ch: 'Pack A Puncher', len: '19:43' },
        steps: [
          { w: 221, t: 'Get a pouch and hold interact at a fire pit' },
          { w: 1040, t: 'Watch out for the Slasher', d: 'He can down you in one hit while you\'re in Rave Mode.' },
        ],
      },
      {
        id: 'double-pap', tab: 'start', type: 'Upgrade', name: 'Double Pack-a-Punch (Alien Fuses)', short: 'Double PaP',
        summary: 'If you finished the Zombies in Spaceland easter egg, the fuses are already in the machine. If not, boot up the old computer in the Bear Lodge after the power is on; a few rounds later the Alien Fuses appear beside it. Put them in Pack-a-Punch for a second upgrade (10,000).',
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'boat-engine', tab: 'parts', type: 'Buildable', name: 'Boat engine', color: 'gold',
        summary: 'Three parts in fixed spots. With all three, the boat on the Trading Post docks takes you to Turtle Island.',
        facts: [['Parts', '3 (same spots every game)'], ['Use at', 'Boat launch, Trading Post docks']],
        video: RV,
        parts: [
          { w: 17, name: 'Part 1', area: 'Bear Lodge, upstairs bunk room (needs power)', spots: ['On the right side of the bunk room with Tuff \'Nuff.'] },
          { w: 32, name: 'Part 2', area: 'Recreation Area', spots: ['Leaning against the booth below the camper, near the entrance to the Old Marvin Mine.'] },
          { w: 48, name: 'Part 3', area: 'Mess Hall', spots: ['Leaning on the pillar in the middle of the room, by a bin.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'vlad', tab: 'weapons', type: 'Wonder weapon', name: 'Vlad (crossbow)', short: 'Vlad', img: I + 'vlad.webp', color: 'gold',
        summary: 'An explosive-tipped crossbow, free from a short Rave Mode quest. Upgrade it into one of four special bows.',
        facts: [['Cost', 'Free'], ['Cabinet', 'Bear Lodge (spawn)']],
        video: BV,
        steps: [
          { w: 31, t: 'Grab the hot dogs on Turtle Island', d: 'From the bucket in Kevin Smith\'s cabin (in the doorway to the washroom). They replace your tactical. Zipline back.', needs: ['power-pap'] },
          { w: 47, t: 'Enter Rave Mode', needs: ['rave-mode'] },
          { w: 62, anyList: 'Deer heads in any order', t: 'Hot-dog three deer heads and grab their symbols', d: 'Throw a hot dog at a mounted deer head; it floats off the wall. Shoot it, then walk through the symbol that drops and hold interact. Do all three before Rave Mode runs out:', list: [
            'Bear Lodge (spawn), above the golf club.',
            'Mess Hall.',
            'Camper Cabins, inside a cabin on the left of the Transponder station (it sits a little outside the map).',
          ] },
          { w: [M, 1102], t: 'Leave Rave Mode and break the locks on the cabinet in spawn', d: 'Take the Vlad. Every player can take one.' },
        ],
      },
      {
        id: 'vlad-upgrades', tab: 'weapons', type: 'Wonder weapon upgrade', name: 'Upgraded crossbows', short: 'Bow upgrades', img: I + 'acid-rain.webp', color: 'green',
        summary: 'Find a small wooden animal statue, charge it on the speakers in the Recreation Area, then charge it again with Vlad kills at its big statue. The animal decides which bow you get.',
        facts: [['Needs', 'A Vlad'], ['Bows', 'Trap-O-Matic, Acid Rain, Ben Franklin, Whirlwind EF-5']],
        video: BV,
        steps: [
          { w: 123, t: 'Find a small animal statue', d: 'A little wooden carving that glows white. Which animal is where changes every game. Known spots:', list: [
            'Mess Hall walkway to the Camper Cabins (by the Volk).',
            'Camper Cabins: picnic table right of the RPR Evo, and the balcony railing across from Racin\' Stripes.',
            'Old Marvin Mine, on the wooden staircase.',
            'Adventure Course: by the NV4, and at the rock wall by the Reaver.',
            'Recreation Area trailer, next to the Type-2.',
            'Trading Post docks.',
            'White Tail Beach, tucked behind a canoe by the Trail Blazers door.',
          ] },
          { w: 217, t: 'Charge it on the speakers in the Recreation Area', d: 'Place the statue, stay close and kill zombies next to it. Kills that count show a small red flash. Badly damaging zombies before the kill seems to work best. Pick the statue back up when it\'s charged.' },
          { w: 281, t: 'Put it in front of its big statue', table: { head: ['Animal', 'Big statue', 'Bow', 'What it does'], rows: [
            ['Eagle', 'Thunderbird Amphitheater, by the big fire pit', 'Trap-O-Matic', 'Dual bows; bolts make nodes that zap zombies walking between them'],
            ['Owl', 'Camper Cabins (Camp Owl)', 'Acid Rain', 'Explosion, then acid rain; kills count as headshots'],
            ['Wolf', 'Camper Cabins (Camp Wolf)', 'Ben Franklin', 'Calls down lightning where it hits'],
            ['Deer', 'By the docks / beside the gazebo above the lake', 'Whirlwind EF-5', 'A Thundergun-style blast of wind'],
          ] } },
          { w: 330, t: 'Kill about 20 zombies with the Vlad right in front of it', d: 'Pick the small statue up: your Vlad turns into that bow. For another bow, take a fresh Vlad from the cabinet and repeat with a different animal.' },
        ],
        blocks: [{ imgs: [{ src: I + 'trap-o-matic.webp', cap: 'Trap-O-Matic' }, { src: I + 'whirlwind.webp', cap: 'Whirlwind EF-5' }] }],
      },
      {
        id: 'smiley', tab: 'weapons', type: 'Wonder weapon', name: 'Smiley (chainsaw)', short: 'Smiley', img: I + 'smiley.webp', color: 'red',
        summary: 'A spinning saw blade. Fire to hold it out as a chainsaw; aim to throw the disc so it ricochets. Free in the Bear Lodge basement once the main easter egg is done in that game.',
        facts: [['Unlock', 'Finish the main easter egg'], ['Where', 'Bear Lodge basement, by the stairs']],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Locksmith', short: 'Main EE',
        summary: 'Rebuild Kevin Smith\'s torn photo and find his friend\'s skull through three rituals, each finished by killing the Slasher. Then press the buttons in the basement, take the boat with Kevin and beat the giant Slasher.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Second piece of the Soul Key, achievement, the Smiley, and Kevin Smith as a playable character'],
          ['Hardest part', 'The three-cycle boss fight'],
        ],
        prep: [
          { t: 'Power on, boat built, Pack-a-Punch working', needs: ['power-pap', 'boat-engine'] },
          { t: 'A Vlad or an upgraded bow', needs: ['vlad', 'vlad-upgrades'] },
          { t: 'Gas grenades or Bio Spikes', d: 'They melt the Slasher.' },
          { t: 'A balloon trap for the second ritual', d: 'Put two blue gems and one yellow gem into any totem pole.' },
        ],
        stepsTitle: 'Quest steps',
        video: RV,
        steps: [
          { w: 79, t: 'Talk to Kevin Smith on Turtle Island', d: 'He\'s perched above the fireplace in the cabin.' },
          { w: 111, t: 'Find the first photo half in the Recreation Area', d: 'Behind the DJ equipment and the big wooden figure, near the Karma-45.' },
          { w: 128, t: 'Ritual 1: shoot the arms off zombies at the Thunderbird fire pit', d: 'Place the photo opposite the big fire pit with the fallen totem pole. Rave Mode starts and doesn\'t stop. Shoot the arms off about 10 zombies near the photo; plain kills don\'t count.', imgs: [{ src: I + 'slasher.webp', cap: 'The Slasher' }] },
          { w: 175, t: 'Pick up the glowing photo and kill the Slasher fast', d: 'He spawns right in front of you. Gas grenades, Bio Spikes and the Vlad work well. Killing him drops a Max Ammo; then take the photo.', warn: 'Too slow and you get no Max Ammo and lose a perk (in solo that can be Up \'N Atoms).' },
          { w: 237, t: 'Show Kevin the photo' },
          { w: 252, t: 'Find the second photo half in the Bear Lodge bunk room', d: 'On the floor in the corner where the boat part was. It only appears after you\'ve talked to Kevin.' },
          { w: 284, t: 'Ritual 2: place it in the middle of the rave and kill crawlers', d: 'Kill about 10 crawling zombies near the photo. A balloon trap dropped on the photo makes this easy; explosives that blow legs off also work. Then pick it up and kill the Slasher again.' },
          { w: 363, t: 'Show Kevin, then take the skull from the Bear Lodge basement', d: 'In a box of bones in the power switch room, near the way out to the mine.' },
          { w: 396, t: 'Ritual 3: place the skull on White Tail Beach and get headshot kills', d: 'Then pick it up, kill the Slasher one more time and take the skull.' },
          { w: 427, t: 'Press the red buttons in the Bear Lodge basement', d: 'Solo: hold interact on the one that isn\'t lit. Co-op: everyone holds a button at the same time. You hear someone behind the wall.' },
          { w: 458, t: 'Get ready for the boss', d: 'A double Pack-a-Punched assault rifle or SMG with Bang Bangs, an upgraded bow, Up \'N Atoms in co-op, a refilled Fate & Fortune deck and any traps you have.', needs: ['double-pap'] },
          { w: 508, t: 'Everyone gets in the boat with Kevin', d: 'He breaks down, falls into the lake and comes back as the giant Slasher. You\'re stranded on Turtle Island.' },
          { w: 539, t: 'Cycle 1: charge all three skulls, trap him, shoot his weak spots, survive the fire', ol: [
            'Kill zombies near each of the three blue skulls until each rises and shines a beam down. All three must be lit at once.',
            'Lead the Slasher through the lit circle on the ground. Shoot him until a purple symbol appears.',
            'Shoot the purple symbol each time it moves (around five to seven times). He drops spikes and jumps on the roof.',
            'Get into the green circle he marks right away. Everywhere else burns; survive the skeletons for about 30 seconds.',
          ], imgs: [{ src: I + 'layout.webp', cap: 'Camp map (Turtle Island is bottom right)' }] },
          { w: 727, t: 'Cycle 2: the same again, with blue walls blocking paths' },
          { w: 775, t: 'Cycle 3: the same again; keep all three skulls up together', d: 'A skull drops back down if you leave it, so split up in co-op.' },
          { w: 791, t: 'Unload on him until he dies, then grab the Soul Key piece', d: 'He doesn\'t go back on the roof this time. Picking up the piece starts the ending cutscene.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Puppet Strings"',
        video: { id: '1eG_QYQ73EQ', title: 'Rave in the Redwoods secret song: Puppet Strings', ch: 'MrWilliamThor', len: '1:40' },
        summary: 'Shoot ten glowing purple spots in and around the Bear Lodge. They only show up in Rave Mode. The song plays when you hit the last one and is added to your lobby music.',
        spots: [
          'In the rafters above the fireplace.',
          'On a wooden pallet left of the M1 wall buy.',
          'Under the pool table upstairs.',
          'Behind the bar upstairs.',
          'Above the doorway to the Banshee wall buy on the balcony.',
          'Under the table with the computer used for the alien fuses.',
          'On the sloped roof below and right of the Magic Wheel on the balcony.',
          'Under a shelf near one of the boat engine parts.',
          'Behind some boxes left of a barrier in the bunk room.',
          'In an open locker left of Tuff \'Nuff.',
        ],
      },
      {
        id: 'kevin', tab: 'side', type: 'Unlockable character', name: 'Play as Kevin Smith',
        summary: 'Once you\'ve finished Locksmith, quickly press **Right, Left, Left, Down, Down, Right** in the Rave in the Redwoods pre-game lobby. You start the match as Kevin Smith.',
        facts: [['Needs', 'Locksmith completed']],
      },
    ],
  });
})();
