/* Revelations — Black Ops III, Salvation DLC */
(() => {
  const I = 'assets/img/bo3/rev/';
  ZG.addMap({
    game: 'bo3', id: 'revelations', order: 6, group: 'original',
    name: 'Revelations', dlc: 'Salvation · DLC 4', eeName: 'For The Good Of All',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Guard of Fafnir', 'Keeper Protector', 'Thundergun'],
    blurb: 'The Aether story finale: floating fragments of old maps around the Shadowman\'s realm. Rebuild S.O.P.H.I.A., recover the Summoning Key and finish the Shadowman for good.',
    quick: [
      ['Main EE', 'For The Good Of All'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Apothicon Servant, Thundergun (box)'],
      ['Pack-a-Punch', 'Inside the Giant Apothicon'],
    ],
    intro: {
      start: 'Override the four Corruption Engines, trap the Giant Apothicon from Nacht der Untoten, and Pack-a-Punch is inside it.',
      parts: 'Two buildables. Their parts are spread across the old-map islands, three spots each.',
      'easter-egg': 'Doable solo. The audio reels must be done in order. Tap a chip to see that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Corruption Engines & Pack-a-Punch', short: 'Engines & PaP',
        video: { id: 'r4xtsq_skww', title: 'Revelations Pack-a-Punch guide', ch: 'MrRoflWaffles', len: '3:37' },
        summary: 'Four Corruption Engines link portals to Nacht der Untoten. With all four overridden, you can freeze the Giant Apothicon and climb inside to find Pack-a-Punch.',
        steps: [
          { w: 15, anyList: 'Engines in any order', t: 'Override all four Corruption Engines', d: 'One each in the Spawn area, Mob of the Dead, Der Eisendrache and Verrückt sections. Each costs 500; defend it from a small horde for about 30 seconds. Each opens a portal to Nacht der Untoten.', tip: 'Override all four before round 6 for an achievement.' },
          { w: 141, t: 'Go to Nacht der Untoten', d: 'Juggernog is at the top of the curved staircase.' },
          { w: 156, t: 'Freeze the Giant Apothicon', d: 'A panel to the right of Juggernog lights up and buzzes when the Giant Apothicon flies past. Press it right then: four Death Rays freeze the monster in place.', warn: 'Press too early and it just swims past — wait for the buzz.' },
          { w: 187, t: 'Climb inside and shoot Pack-a-Punch loose', d: 'Go down the stairs to the frozen Apothicon and enter its belly. Shoot the Pack-a-Punch machine out of its heart; it drops down and is ready to use.' },
        ],
      },
      {
        id: 'ee-roadmap', tab: 'start', stepsOrder: 'suggested', type: 'Plan', name: 'Road to the Easter Egg',
        summary: 'What For The Good Of All needs.',
        steps: [
          { t: 'Engines overridden and Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'Build the Summoning Altar (Keeper Protector)', needs: ['keeper-protector'] },
          { t: 'Build the Guard of Fafnir', needs: ['fafnir'] },
          { t: 'Get the Apothicon Servant from the box and upgrade it', needs: ['servant'] },
          { t: 'Get Li\'l Arnies from the box', needs: ['lil-arnie'] },
          { t: 'Grab the Thundergun if it shows up', needs: ['thundergun'] },
          { t: 'Start For The Good Of All', needs: ['main-ee'] },
        ],
        blocks: [{ tip: 'Before spinning the box, everyone buys Trip Mines (upstairs in Verrückt) — once you own them the box can\'t roll them, so the Servant and Li\'l Arnies come up more often. Taking the Thundergun when it appears does the same for the whole team.' }],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'keeper-protector', tab: 'parts', type: 'Buildable · Summoning Altar', name: 'Keeper Protector', img: I + 'keeper-protector.webp', color: 'aether',
        summary: 'Build the Summoning Altar, then summon a Keeper bodyguard for 5,000 points. Required for the first audio reel.',
        facts: [['Parts', '3'], ['Build at', 'Any unfinished altar (DE, Kino, Verrückt, Origins)'], ['Summon cost', '5,000']],
        parts: [
          { w: 97, name: 'Skull of Nan Sapwe', area: 'Verrückt section', spots: [
            'On the shelves just right of Speed Cola.',
            'At the top of the stairs right of the Corruption Engine, straight to the left in a wheelchair.',
            'In another wheelchair at a desk with a bloody mattress, across from the Wunderfizz spot near the jump pad to Mob of the Dead (down the hall from the Zetsubou test-tube room).',
          ] },
          { w: 11, name: 'Purple Crystal', area: 'Der Eisendrache / Kino der Toten sections', spots: [
            'Der Eisendrache: in the round room with four Primis statues, on a barrel covered with a white cloth.',
            'Der Eisendrache: in the concrete rubble touching the Pyramid.',
            'Kino: on a small table with a red cloth near the jump pad to Verrückt (up the ramp from the Bowie Knife, through the doorway left of the GobbleGum machine).',
          ] },
          { w: 51, name: 'Keeper Flag', area: 'Origins / Mob of the Dead sections', spots: [
            'Origins: on the sandbags near where Speed Cola was in Origins, right of the VMP wall-buy (across from Double Tap).',
            'Origins: on top of the central dig-site mound where Origins\' Pack-a-Punch was, in a corner.',
            'Mob of the Dead: in the cafeteria, right of Mule Kick.',
          ] },
        ],
        video: { id: 'SysILhxXG3E', title: 'Revelations Keeper Protector Guide (all part locations)', ch: 'MrRoflWaffles', len: '3:37' },
      },
      {
        id: 'fafnir', tab: 'parts', type: 'Buildable · Shield', name: 'Guard of Fafnir', img: I + 'fafnir.webp', color: 'fire',
        summary: 'The dragon shield from Gorod Krovi, with fireball attack. Parts are in the Origins, Verrückt and Der Eisendrache sections.',
        facts: [['Parts', '3']],
        parts: [
          { w: 6, name: 'Dragon Visage', icon: I + 'fafnir-visage.webp', area: 'Origins section', spots: [
            'Entering Origins from the House (spawn): left of the wooden crates just left of the GobbleGum machine.',
            'Past the GobbleGum machine on the left path: right before the Pharo wall-buy, hanging on a big Group 935 crate lit by a broken truck.',
            'Past the Pharo wall-buy, turn right and drop toward the Wunderfizz spot: on a chair across from it, by some shelves.',
          ] },
          { w: 96, name: 'Core', icon: I + 'fafnir-core.webp', area: 'Verrückt section', spots: [
            'On a column right as you land from the Kino → Verrückt jump pad.',
            'Up the stairs next to Speed Cola: walk to the hole in the wall, turn left — on a tipped-over wheelchair in the corner.',
            'On the table in the middle of the kitchen upstairs.',
          ] },
          { w: 30, name: 'Maw', icon: I + 'fafnir-maw.webp', area: 'Der Eisendrache section · needs Anti-Gravity', note: 'All three are high up: stand on the four tiles around the Pyramid for a few seconds each to start Anti-Gravity, then double-jump to them.', spots: [
            'High on the wall close to the VMP wall-buy: turn around to the metal plate showing Der Eisendrache locations and look straight up.',
            'High on the wall above two Primis statues set into the wall, halfway between the VMP wall-buy and the Pyramid, on the left.',
            'High up and left on the wall with the GobbleGum machine, next to small lights hanging on cables (above the small black desk).',
          ] },
        ],
        video: { id: 'E1KheWSobD0', title: 'Revelations: How to Build the Shield (all locations)', ch: 'MrRoflWaffles', len: '3:18' },
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'servant', tab: 'weapons', type: 'Wonder weapon', name: 'Apothicon Servant', img: I + 'servant.webp', color: 'aether',
        summary: 'Black-hole launcher from the Mystery Box (only one in the game at a time). Needed for the easter egg, upgraded.',
        upgrade: {
          name: 'Estoom-oth', summary: 'The Pack-a-Punched Servant: more ammo, longer black holes, bigger blast. You must unlock it first.',
          steps: [
            { anyList: 'Tablets in any order', t: 'Shoot five blue floating tablets with the Servant', d: 'Hit each tablet directly; it disappears when hit (no sound). Aim between the two middle barbs on top of the gun.', list: [
              'Above the jump pad at the House (spawn) that leads to Shangri-La.',
              'Above and behind the doorway joining Shangri-La and Der Eisendrache — easiest from the top of the big Shangri-La staircase.',
              'Above the Origins/Mob of the Dead island toward the jump pad to Verrückt — easiest from the top of the central mound (old Origins PaP).',
              'Above Verrückt: by the jump pad to the Mob of the Dead cafeteria, look down the hall at the Zetsubou test tubes, then up.',
              'Above where the frozen Giant Apothicon sits, next to a big floating rock — look up from the top of the stairs down to it in Nacht.',
            ] },
            { t: 'Pack-a-Punch it', needs: ['power-pap'], d: 'The 115 rocks inside the machine glow once all five tablets are down.' },
          ],
        },
      },
      {
        id: 'thundergun', tab: 'weapons', type: 'Wonder weapon', name: 'Thundergun', img: I + 'thundergun.webp', color: 'storm',
        summary: 'Blasts zombies away with a shockwave. Mystery Box only (one per game). Great for the Margwa waves in the easter egg. Pack-a-Punches into the Zeus Cannon.',
      },
      {
        id: 'lil-arnie', tab: 'weapons', type: 'Tactical', img: I + 'lil-arnie.webp', name: 'Li\'l Arnie', color: 'green',
        summary: 'Mystery Box tactical. Needed for the second audio reel.',
        upgrade: {
          name: 'Upgraded Li\'l Arnie', summary: 'Lasts longer and kills faster.',
          steps: [
            { t: 'Get 150 kills with Li\'l Arnies (whole team combined)' },
            { t: 'Throw one into the church bell-tower window', d: 'Samantha giggles and everyone holding Li\'l Arnies gets upgraded ones.' },
          ],
        },
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'For The Good Of All', short: 'Main EE',
        summary: 'Rebuild S.O.P.H.I.A., recover the Kronorium and Summoning Key, gather the old easter egg relics, and kill the Shadowman.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Achievement — and "A Better Tomorrow" if you finished every earlier BO3 easter egg'],
          ['Watch out', 'Summoning Key glitches (see step 11)'],
        ],
        prep: [
          { t: 'Build the Summoning Altar', needs: ['keeper-protector'] },
          { t: 'Get the Apothicon Servant and unlock its upgrade', needs: ['servant'] },
          { t: 'Get Li\'l Arnies (as many players as possible)', needs: ['lil-arnie'] },
          { t: 'Pack-a-Punch a strong weapon (LMG or big-mag rifle)', needs: ['power-pap'], tip: 'The Thundergun makes the Margwa steps much easier. The Helmet of the King wearable or Danger Closest helps against elemental zombies.' },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { w: 5, t: 'Shoot the four tombstones in order', d: 'From the spawn room, look left outside the map: two floating islands hold four graves of the original crew. Shoot them in the order they died: **Richtofen → Dempsey → Takeo → Nikolai** (that\'s the 2nd, 3rd, 1st, then 4th grave). Thunder and four red lights confirm it.', tip: 'Wrong order? Just start again from Richtofen.' },
          { w: 35, t: 'Audio reel 1: the Keeper ritual', needs: ['keeper-protector'], d: 'A small triangular stone appears at the back of one of three jump pads (Shangri-La → House, Mob of the Dead → Verrückt, or Verrückt → Kino). Summon the Keeper Protector, lead it there and crouch on the stone while the pad is inactive. The Keeper chants for 3 minutes — protect it, zombies only target it. Then pick up the reel and play it on the device upstairs in Nacht near Juggernog.', warn: 'Don\'t do this around rounds 11–13 when the first Margwa shows up: a Margwa reaching the Keeper guarantees failure. Step off the pad before it reactivates.', tip: 'During a Parasite round, Parasites ignore the Keeper. Keep one alive.' },
          { w: 203, t: 'Audio reel 2: Li\'l Arnies in the Apothicon', needs: ['lil-arnie', 'thundergun'], d: 'Inside the Giant Apothicon are nine doorway-shaped holes zombies crawl out of. Throw a Li\'l Arnie into each hole (a couple of steps back, aim just below centre). Every three holes summon three Margwas (regular, then fire, then void). Kill them before leaving. After all nine, the reel appears on the middle top bridge inside the Apothicon — play it on the right side of the Kino stage.', warn: 'Leaving the Apothicon (or going down solo) before the summoned Margwas are dead resets those three holes. Learn the holes first and save the last zombie so nothing blocks your throw.' },
          { w: 392, anyList: 'Bones in any order', t: 'Audio reel 3: bones for S.O.P.H.I.A.', needs: ['servant'], d: 'Shoot each rock below with any Pack-a-Punched gun (not the Servant) so a bone floats out, then suck the bone up with the upgraded Servant (a small sound plays midway through the black hole).', list: [
            'Verrückt: from the Nacht portal turn right; a small tablet-shaped rock floats left of the waterfall, outside the map by the Corruption Engine.',
            'Nacht: halfway up the stairs by the portal to Der Eisendrache, turn around, follow the full column up and shoot the broken roof above it.',
            'Der Eisendrache: on the out-of-bounds wall-run during Anti-Gravity — bottom-right corner brick of the third wall you jump to.',
            'Spawn: in the church, above a candle and slightly left of the top of the window. Easiest from the left side of the Corruption Engine.',
            'Shangri-La: above Stamin-Up, on the crumbled wall.',
            'Origins: by the giant footprint outside the map — from the widest gap in the fence left of the VMP wall-buy, look right of the fire at the rock on the ridge.',
          ] },
          { w: 674, t: 'Rebuild S.O.P.H.I.A.\'s body and play the reel', needs: ['servant'], d: 'The bones pile up on the top floor of Nacht. Shoot them with the upgraded Servant; her body is spat out. Shoot the body with the Servant again to leave the third reel. Play it on the device on the Origins mound by the stairs down to Mob of the Dead.' },
          { w: 745, t: 'Materialise S.O.P.H.I.A. with the Corruption Engine turrets', d: 'Her ghost floats above Nacht. At each of the four Corruption Engines, use the turret (2,000 each — 8,000 total) to shoot the **left** of the two floating blue rocks (as you face the Nacht portal). Adjust the laser until the turret stays on and kicks you off. Then interact with her in Nacht and follow her to the Kino teleporter.' },
          { w: 787, t: 'Get the Kronorium', d: 'Everyone stands in the Kino teleporter. You arrive in Samantha\'s bedroom: pick up the Kronorium from the end of her bed. Back in Kino, place it on the stage podium.', note: 'If someone in your lobby finished A Better Tomorrow, this is when you can place the "spark" on the "?" crate in Samantha\'s room — see Path of Sorrows on the Side Quests tab.' },
          { w: 889, anyList: 'Eggs in any order', t: 'Hatch four Apothicon eggs into Gateworms', d: 'Four small yellow-orange eggs spawn (one per area, one of four spots each). Each player carries one at a time. Put each egg into one of the four yellow pustules in the acid pool inside the Giant Apothicon and kill 10 zombies near it.', list: [
            '**Kino egg:** in the seats behind the music teddy bear · on the high balcony seating by the ramp to Der Eisendrache (run and jump to it) · in a bucket right of the Wunderfizz outside the lower theatre door · in the round Primis statue room at the statues\' feet.',
            '**Shangri-La/Spawn egg:** in the fire pit at the bottom of the grand staircase · on the floor by the window left of Stamin-Up · left of the trash can by the stairs down to the Shangri-La jump pad · on the white-cloth barrel by the jump pad to Origins.',
            '**Verrückt egg:** by the bush at the fence ahead-left of the Nacht portal · on a mattress right of the tilted filing cabinet at the top of the stairs from Speed Cola · between the two big green test tubes in the Zetsubou room · in a corner by two small chairs near the upstairs Wunderfizz.',
            '**Mob/Origins egg:** by the rocks on the right walking from Mob toward the Corruption Engine (flickering firelight) · in the tunnel from Mob to the mound, halfway to the KN-44 wall-buy · half-buried in snow left of the Wunderfizz on the mound · on the rocks past the Vesper wall-buy by the giant footprint.',
          ], note: 'In co-op, only the player who placed an egg can feed it kills and pick up its Gateworm.' },
          { w: 1014, anyList: 'Runes in any order', t: 'Find the four Runes of Creation', d: 'Carry a Gateworm around; it beeps faster near a hidden rune (three possible spots per area). Interact at the right spot and the worm becomes a rune.', list: [
            '**DE/Shangri-La:** on the Anti-Gravity tile in line with the rubble touching the Pyramid · in front of the three Primis statues in the round room (left of the Keeper altar) · on the big floor panel in front of Stamin-Up.',
            '**Spawn:** near the jump pad to Origins, left of the window with two red flowerpots · just left of Quick Revive · in front of the rocky ridge between the Shangri-La jump pad and the window to its right.',
            '**Verrückt:** in front of the metal fence in the electric-trap room · under the window right of the two test tubes in the Zetsubou room · on the grass path to the jump pad to Kino.',
            '**Mob/Origins:** right of the window beside the cafeteria GobbleGum machine, by the fallen bulletin board · upstairs toward Al\'s Hat, in front of the wooden wall before the turn to the footprint trench · under the lantern across from the KN-44 wall-buy in the tunnel below the mound.',
          ] },
          { w: 1116, t: 'Recover the Summoning Key', needs: ['servant', 'lil-arnie', 'thundergun'], d: 'Everyone stands on the purple rift in the Kino projector room to enter the boss arena. Read the Kronorium on the podium: memorise the four symbols. Go back to where you arrived and press interact on the cycling purple symbols in that order. Two Max Ammos appear, then four waves of Margwas (lava, lightning, fire and void rooms, random order). Kill them all and grab the glowing Summoning Key.', imgs: [{ src: I + 'summoning-key.webp', cap: 'The Summoning Key' }], warn: 'A wrong symbol (or waiting too long) sends you back to Kino until next round, with new symbols.' },
          { w: 1403, anyList: 'Any order, but save the red barrel for last', t: 'Collect seven relics with the Summoning Key', d: 'Throw the Key at each object; it absorbs it and bounces back.', list: [
            'The radio in the Kino chandelier (look up from the podium).',
            'The clock above the Der Eisendrache Undercroft — from the Corruption Engine, look up and left back toward the Pyramid.',
            'The green Focusing Crystal on a wooden pike under a tree left of the Shangri-La temple entrance.',
            'The tombstone on the scaffolding on the Origins mound: from the KN-44 wall-buy go up toward the Wunderfizz, turn left into the nook and look left from the wooden post.',
            'A green and blue poster in an open cell in Mob of the Dead (from the GobbleGum machine take the stairs behind it, stop at the loose plank, look left across).',
            'The mounted MG42 on the fountain outside the map in Verrückt, up the ridge above the Corruption Engine sign.',
            'Do this one last: the red barrel outside the window left of the spawn-room portal, from the curved stairs down from Juggernog in Nacht.',
          ], warn: 'Known glitch: going through a Nacht portal while holding the Key can make it vanish. Use jump pads and only take the Nacht portal for the red barrel at the end. A Death Machine power-up or going down brings it back.' },
          { w: 1571, t: 'Kill the Shadowman', d: 'Take the Kino teleporter back to the arena. Put the Key on one of the green pedestals in the corners and kill about 10 zombies near it. Pick it up and throw it into S.O.P.H.I.A.\'s ghost: her beam breaks his shield. Shoot him until he\'s in the mouth of the Apothicon statue, then interact with the Kronorium to finish him.', tip: 'Throw a Li\'l Arnie on the far side of the arena so zombies leave you alone while you shoot. The Thundergun, Servant and Ragnarok barely hurt him. If you fail, use another pedestal and try again.' },
        ],
        video: { id: '0YH6npBuHVg', title: 'Ultimate Revelations Easter Egg Guide', ch: 'MrRoflWaffles', len: '28:40' },
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song-the-gift', tab: 'side', type: 'Song', name: '"The Gift"',
        summary: 'Hold interact on three teddy bears.',
        spots: [
          'Entrance to Mob of the Dead from the mound, on a chair left of a surgery patient.',
          'Kino theatre, on a chair in front of the podium.',
          'Verrückt, on a chair at the start of the hallway to the jump pad.',
        ],
      },
      {
        id: 'chalk-table', tab: 'side', type: 'Utility', name: 'Weapon table (pink chalk)',
        summary: 'Unlocks the table downstairs in Nacht for storing or passing weapons, and adds an M1927 wall-buy.',
        steps: [
          { t: 'Pick up the pink chalk', d: 'During Anti-Gravity in Der Eisendrache, on top of a narrow carved pillar in the hallway between the VMP wall-buy and the Pyramid (slightly above and left of a Fafnir part spot).' },
          { t: 'Use the chalk at each spot, in this order', ol: [
            'Der Eisendrache: on the wall under where the Undercroft dragon used to be.',
            'Verrückt: upstairs in the electric-trap room, on the floor in front of the Mystery Box spot.',
            'Nacht: on the wall in the middle of the curved staircase up to Juggernog.',
            'Nacht: the straight staircase by the portal to Mob of the Dead (no drawing — just face the wall on the stairs and hold use).',
            'Mob of the Dead catwalks: lower wall by the left entrance to the Infirmary.',
            'Kino: on the wall behind the teleporter, above a mannequin on the left of the stage.',
            'Back to Mob of the Dead, same spot by the Infirmary — a chime means it worked.',
          ] },
        ],
      },
      {
        id: 'path-of-sorrows', tab: 'side', type: 'Reward', name: 'Path of Sorrows (A Better Tomorrow bonus)',
        summary: 'Only if someone in the lobby completed A Better Tomorrow. Grab the "spark" from the headlight of the broken truck in the spawn room (don\'t take any damage while carrying it). During the Kronorium step, place it on the wooden crate with a white "?" in Samantha\'s room. Afterwards, the Path of Sorrows sword is a 500-point wall-buy at the top of the Shangri-La staircase, and every wall and box weapon comes Pack-a-Punched.',
      },
    ],
  });
})();
