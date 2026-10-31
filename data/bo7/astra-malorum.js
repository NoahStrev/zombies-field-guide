/* Astra Malorum — Black Ops 7, Season One */
(() => {
  const I = 'assets/img/bo7/astra-malorum/';
  const SE = t => ({ id: 'Di3Y3xND288', title: 'Every side Easter egg in Astra Malorum', ch: 'MrDalekJD', len: '16:48', t }); // MrDalekJD side Easter eggs
  const E = 'MxgEVlnU85s'; // MrRoflWaffles easter egg guide
  const P = 'Gp7Jzdw_F-E'; // MrRoflWaffles Pack-a-Punch guide
  const L = '7a9xNqh6Pq4'; // MrRoflWaffles LGM-1 guide
  const EV = { id: E, title: 'Astra Malorum easter egg guide', ch: 'MrRoflWaffles', len: '27:40' };
  const PV = { id: P, title: 'Astra Malorum power and Pack-a-Punch', ch: 'MrRoflWaffles', len: '3:15' };
  const LV = { id: L, title: 'Free LGM-1 wonder weapon', ch: 'MrRoflWaffles', len: '9:28' };

  ZG.addMap({
    game: 'bo7', id: 'astra-malorum', order: 2,
    name: 'Astra Malorum', dlc: 'Season One', eeName: 'Main quest: free the celestial Shadowsmith',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['LGM-1', 'O.S.C.A.R.', 'Mars'],
    blurb: 'Silas Thurston\'s observatory, haunted by the robot O.S.C.A.R. Kill O.S.C.A.R. with three traps for the LGM-1, steal Thurston\'s brain to power a teleporter to Mars, and fight the Shadowsmith Caltheris in a Martian temple.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op)'],
      ['Wonder weapon', 'LGM-1 (free, from O.S.C.A.R.)'],
      ['Key items', 'Thurston\'s brain, cryo key, Neptune model'],
      ['Boss', 'Caltheris (four forms)'],
    ],
    intro: {
      start: 'Pack-a-Punch needs two harmonic components (random spots) brought to the Observatory Dome. Black Ops 7 rules are explained in the basics on Ashes of the Damned.',
      weapons: 'The LGM-1 drops from the third O.S.C.A.R. you kill with a trap. It\'s needed later in the quest and is great for the boss.',
      'easter-egg': 'Note Mars\'s declination in the telescope early (step 2). Have subtitles on for the eavesdropping step. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Open the way up to the Observatory Dome. Find one harmonic component on each side of the map (next to a dead zombie), bring both to the machine in the dome and defend it for 45 seconds.',
        video: PV,
        steps: [
          { w: 15, t: 'Open doors up to the Observatory Dome' },
          { w: 47, anyList: 'Sides in any order', t: 'Find the two harmonic components', d: 'Each lies next to a dead zombie:', list: [
            'Machina Astralis side: at the top of the stairs by the banister, up the first stairs on the right by a cluttered sofa, or up the first stairs on the left by the popcorn-machine-like device.',
            'Luminarium side: by a display case, by a tidy sofa, or by the machine in the Starlight room (the trap room).',
          ] },
          { w: 129, t: 'Put them in the machine in the dome and defend it', d: '45 seconds, with extra purple-eyed zombies. Pack-a-Punch appears next to it. Fail and retry next round.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'lgm', tab: 'weapons', type: 'Wonder weapon', name: 'LGM-1', aka: 'Little Green Menace-1', img: I + 'lgm.webp', color: 'green',
        summary: 'Fires squads of little UFOs that swarm a target and damage it over time, then fly back, so ammo never runs out (it just recharges). Send them at a boss and switch to another gun. No upgrade quest: Pack-a-Punch it.',
        facts: [['Get it', 'Kill O.S.C.A.R. with three different traps'], ['Upgrade', 'Pack-a-Punch (6 shots)']],
        video: LV,
        steps: [
          { w: 30, t: 'Move the telescope: shoot the steaming vents', d: 'In the Observatory Dome only one vent steams at a time (at floor level, under Pack-a-Punch, or up on the walkway above). Shoot it, find the next, six or seven times. The telescope swings into place. An O.S.C.A.R. usually spawns around now.' },
          { w: 95, t: 'Find O.S.C.A.R.', d: 'He walks a set route (shown on your minimap) rather than chasing you. Shoot one of his UFOs at some point to get a damaged UFO part.' },
          { w: 125, any: 'Traps in any order (one per round)', t: 'Sun trap: lure him under the telescope and aim it at the Sun', d: 'Get him chasing you into the dome, use the telescope eyepiece and point it at the Sun. Keep him in the beam.' },
          { w: 201, any: 'Traps in any order (one per round)', t: 'Laser trap: rebuild the Luminarium trap and zap him', d: 'You need the damaged UFO, the car battery (shoot Ol\' Tessie with a Pack-a-Punched gun) and the wiring (shoot the blinking street light, which moves each game). Install them in the Luminarium trap, lead him in and turn it on. Shoot his UFOs if he seems immune.' },
          { w: 294, any: 'Traps in any order (one per round)', t: 'Rocket trap: freeze him with the museum rocket', d: 'Put Cryo Freeze on a gun and shoot three purple crystals around the map for three shards. In the museum, get O.S.C.A.R. behind the rocket and hold interact on its side: after a 5-second countdown it blasts him.' },
          { w: 402, t: 'The third kill drops the LGM-1' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Astra Malorum main quest', short: 'Main quest',
        summary: 'Overhear O.S.C.A.R.\'s planet code, take Thurston\'s brain from his cryopod, wire it to the teleporter, solve the book busts and planet notes, open a portal to Mars, catch the Ascendant Eye, harmonise five pillars and defeat Caltheris.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, camos in Cursed mode'],
          ['Boss', 'Caltheris'],
        ],
        prep: [
          { t: 'Pack-a-Punch on', needs: ['power-pap'] },
          { t: 'The LGM-1', needs: ['lgm'] },
          { t: 'For the boss: Pack-a-Punch 3, Legendary rarity, a spare 15–20k points, Shields Up' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 386, t: 'Grab the bone saw from the museum cabinet', d: 'Shoot or smash the glass.' },
          { w: 402, t: 'Note Mars\'s declination in the telescope', d: 'In the viewfinder, centre Mars exactly; note the four-digit "Dec" number in the corner.' },
          { w: 542, t: 'Follow O.S.C.A.R. unseen and listen for three planets', d: 'From round 10. Stay 15 to 30 metres behind him while his yellow searchlight is out (he hasn\'t spotted you). Eventually a Thurston recording says "Remember?" and names three planets. Subtitles help.' },
          { w: 605, t: 'Turn the planets into a code and enter it in the Pack-a-Punch room', d: 'Each planet\'s order from the Sun (Mercury 1, Venus 2, Earth 3, Mars 4, Jupiter 5, Saturn 6, Uranus 7, Neptune 8), in the order heard. Example: Earth, Mercury, Mars = 314. A platform lowers next to Pack-a-Punch.' },
          { w: 650, t: 'Take the cryo key from the body on the platform' },
          { w: 665, t: 'Open the cryopod and take Thurston\'s brain', d: 'In the room off Machina Astralis. Use the bone saw.' },
          { w: 696, t: 'Swap it into the brain canister in the Luminarium and defend it', d: 'Hold interact to replace the brain inside, then defend it during a short lockdown. Pick it up again.' },
          { w: 728, t: 'Connect the brain to the machine by the teleporter in Machina Astralis', d: 'Install it and turn it on. Thurston\'s reading list starts flashing on a monitor: note the book titles.' },
          { w: 775, t: 'Enter Mars\'s declination in the small metal box', d: 'It shows "ready".' },
          { w: 790, t: 'Turn the three busts in the Archive of Orbis', d: 'Each bust has bookshelves on one side. Count how many reading-list titles are on that bust\'s shelves and interact with the bust that many times. Once you start, you have about 15 seconds for all three. A hatch above the ladder opens: take the Neptune model and place it in the display at the top of Machina Astralis.' },
          { w: 998, t: 'Align three planets using the notes', d: 'Notes on a desk in the Luminarium, a table in Machina Astralis and a table in the Archive each give a planet and a direction (like NE). Shoot those planets in the big model until each points that way (the chandelier around the Sun is the compass).', tip: 'The planets never line up exactly with the arrows: closest is fine.' },
          { w: 1061, t: 'Interact with the brain and defend the portal', d: 'O.S.C.A.R. fires UFOs at the middle structure: shoot them down until the bar fills. A portal pulls you to Mars.' },
          { w: 1091, t: 'Put Thurston\'s canister in the Aegis terminal on Mars' },
          { w: 1107, t: 'Shoot the four outer pylons in order, then the one over the temple entrance', d: 'When the strange sound plays, a small flying "eye" appears outside (missed it? Interact with the terminal to play the sound again, once a round). Shoot the pylons: back right, back left, front right, front left, then the one above the entrance. The eye flies in.' },
          { w: 1154, t: 'Catch the eye in low gravity and place it in the statue', d: 'Keep shooting the back pylon so it stays close, jump up (from the top platform if needed) and grab it. The statue is on the right of the arena as you look from the stairs.' },
          { w: 1201, t: 'Harmonise the five pillars', d: 'Shoot each pillar\'s antenna on Mars with the LGM-1. Back on Earth, the organ in the Pack-a-Punch room shows five symbols in order, one blank. On Mars, interact with the pillars in that order (the blank one is the pillar whose symbol you didn\'t see). Red means wait a round.', needs: ['lgm'] },
          { w: 1387, t: 'Get ready and start the fight at the Aegis terminal', d: 'Armour wall-buy by the entrance, ammo against a pillar on the left.' },
          { w: 1403, t: 'Caltheris, skull form: fire the towers', d: 'Kill zombies to fill a defence tower on the wall, then hold interact on the machine at the top of the stairs to fire it at her. Three times (right, left, then both). She adds meteors, then toxic gas that pushes you upstairs: everyone run the same way round to dodge her lasers.', imgs: [{ src: I + 'caltheris.webp', cap: 'Caltheris' }] },
          { w: 1515, t: 'Golem, then Ascendant, then Needle forms', d: 'Shoot her glowing crit spots and break off her armour. Jump to avoid her ground slam and break line of sight when she throws boulders. In the last form her rocks leave electricity on the ground: stay out of it. If you finished Ashes of the Damned\'s quest, Veytharion\'s Blessing (infinite ammo) waits at the top of the stairs.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'super-toy', tab: 'side', type: 'Super Easter Egg · toy', name: 'Super Easter Egg: Caltheris toy', short: 'Super EE toy', color: 'aether',
        summary: 'The longest toy, and you do most of the main quest along the way. Blow the toybox across the map, finish O.S.C.A.R. beside it with Ol\' Tessie\'s DG-2 turret, catch a UFO in the telescope while time is slowed, then on Mars knock four floating objects to a second UFO with wisps. Its Little Green Man buys the Caltheris toy. Part of the [[bo7/super-easter-egg/easter-egg|Super Easter Egg]].',
        video: { id: '3KGZlHLMQi0', title: 'Super Easter Egg guide: every map', ch: 'MrDalekJD', len: '42:44' },
        steps: [
          { w: 524, t: 'Turn on power and Pack-a-Punch, then get the {{lgm}}', needs: ['lgm'], d: 'Finishing it before round 10 keeps the run short.' },
          { w: 587, t: 'Blow the floating toybox to the Crash Site', d: 'It starts outside the zombie barrier by the Luminarium. Hit it with an explosive (grenade, Ray Gun or launcher) and it drifts to a spot past the fence on the spawn side of the Luminarium. Blow it up again and it settles behind the rocks at the bottom of the Crash Site, near Ol\' Tessie.' },
          { w: 619, t: 'Bring it down with a Kazimir grenade', d: 'Craft an LT53 Kazimir and throw it on the ground under the box. It falls, wrapped in electricity.' },
          { w: 650, t: 'Get the DG-2 turret and fit it to Ol\' Tessie', d: 'In Abyssal Rim by Wisp Tea, hit the floating rock with an explosive so it drifts closer, then wall-run and jump off its left side: you float over to a DG-2 turret. Back at spawn, install it on the back of Ol\' Tessie.' },
          { w: 682, t: 'Kill O.S.C.A.R. with the DG-2 next to the box', d: 'When he next shows up (with the LGM-1 steps done he also reads out the observatory panel code: note it), bring him low with your guns, lead him to the box and finish him with the turret. The electricity goes and the box opens.' },
          { w: 744, t: 'Slow time and spot a UFO through the telescope', d: 'Melee five grandfather clocks quickly in a row: Museum Infinitum, the corner of the Luminarium, opposite Stamin-Up in Machina Astralis, left of the teleporter controls, then the upstairs corner of Machina Astralis. Your view blurs and a clock ticks. Look through the observatory telescope and hold your crosshair on the UFO that flies across until it stops and blinks.' },
          { w: 824, t: 'Follow the main quest to Mars and place the Ascendant Eye', needs: ['ee'], d: 'Two discs in the right-hand corner of Mars now glow blue (only if the telescope step worked). Light the pillars with the LGM-1 as usual, then stop before the boss.' },
          { w: 885, t: 'Light all nine wisp lanterns', d: 'Around the Crash Site and Luminarium, one unlit wall lantern holds white energy. Aim down sights at it for about three seconds until a wisp circles you, then aim at another unlit lantern and melee to send it in. Repeat until all nine are lit (two in the Crash Site, two outside Museum Infinitum on Scholar\'s Way, the rest around the Luminarium), then finish the round.' },
          { w: 1007, t: 'Throw a Shock Charge onto each blue disc on Mars', d: 'A UFO arrives and blinks Morse code: short is a dot, long a dash. Each letter is the start of one of the four objects floating in the back-left corner.', list: ['Toilet (T): –', 'Space suit (S): • • •', 'Flamingo (F): • • – •', 'Lava lamp (L): • – • •'] },
          { w: 1085, t: 'Knock the objects to the UFO in its order with wisps', d: 'Collect up to five wisps from the lit lanterns (they refill each round), then aim at an object and melee. The right one falls and the UFO takes it; a wrong one does nothing, so you can just try them. It usually starts with the toilet or the flamingo.' },
          { w: 1176, t: 'Trade the Little Green Man for the Caltheris toy', d: 'After the fourth object the UFO drops a little green alien. Put it in the toybox at spawn: it shakes and gives the toy.' },
          { w: 1208, t: 'Exfil with the toy', d: 'On an exfil round, kill the HVT in time and get out.', warn: 'Solo: finish in one sitting. Loading a save resets the toy quest.' },
        ],
      },
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Magic"',
        summary: 'Interact with three Mister Peeks headphones: on the bottom shelf left of the exit door in the Luminarium, in a display case in Machina Astralis, and on a table in the Observatory Dome.',
        video: SE(708),
      },
      {
        id: 'wisps', tab: 'side', type: 'Free weapon', name: 'Upgraded wisps (and a free Ray Gun)',
        summary: 'Aim at a lantern glowing with a white wisp to take it; melee throws it at zombies. Put a wisp into all nine wall lanterns (throw it in, aim to take it back) and end the round: wisps turn yellow-orange, kill about five zombies each, and any lantern gives them (up to five at once). From round 16, throw an upgraded wisp at the Ashes of the Damned rocket floating in front of Saturn: it comes back with a Ray Gun.',
        video: SE(567),
        spots: ['Two in the Crash Site.', 'Three in the courtyard in front of the Luminarium.', 'Two at the back of the Luminarium.', 'Two on Scholar\'s Way.'],
      },
      {
        id: 'gramophones', tab: 'side', type: 'Free perk', name: 'Gramophone trials (three free perks)',
        summary: 'Put each record on its gramophone and, while the music plays, kill five zombies the way it asks. Each trial gives a Mystery Perk plus Essence and Salvage.',
        video: SE(288),
        steps: [
          { w: 298, t: 'Melee kills', d: 'Gramophone on a cabinet across from Speed Cola in Museum Infinitum. Its record is on a pillar left of a painting, left of the Crafting Table.' },
          { w: 325, t: 'Field upgrade kills', d: 'Gramophone in the Luminarium room with the Energy Rock case, in the corner between two sofas. Its record is on a bookshelf left of the grandfather clock.' },
          { w: 357, t: 'Equipment kills', d: 'Gramophone on a table right of Stamin-Up in the Archive of Orbis. Its record is in a wooden box in Machina Astralis, above the armour wall-buy left of the grandfather clock.' },
        ],
      },
      {
        id: 'skull-game', tab: 'side', type: 'Free perk', name: 'Skull memory game',
        summary: 'Shoot five skulls with a Pack-a-Punched gun and pick them up. On the upper floor of Machina Astralis, place them on the table with the empty frame and candles. They rise one at a time: shoot them in the same order and they fuse into a Random Perk.',
        video: SE(384),
        spots: [
          { text: 'In a floor crevice left of the leftmost first buyable door.', imgs: [{ src: I + 'spot-skull-game-1.webp', cap: 'Still from MrDalekJD\'s guide video' }] },
          { text: 'Stargazer\'s Courtyard: left of the wooden bench between the Mystery Box spot and the ammo crate.', imgs: [{ src: I + 'spot-skull-game-2.webp', cap: 'Stargazer\'s Courtyard, still from MrDalekJD\'s guide video' }] },
          'Museum Infinitum: in a glass display behind Speed Cola.',
          { text: 'The Veilwalk: by the door to the Archive of Orbis, against a wall across from a ruined red brick wall.', imgs: [{ src: I + 'spot-skull-game-4.webp', cap: 'The Veilwalk, still from MrDalekJD\'s guide video' }] },
          { text: 'Machina Astralis: in a glass case opposite the Arsenal.', imgs: [{ src: I + 'spot-skull-game-5.webp', cap: 'Machina Astralis, still from MrDalekJD\'s guide video' }] },
        ],
      },
      {
        id: 'bongo', tab: 'side', type: 'Helper', name: 'Bongo the friendly Ravager',
        summary: 'Killing O.S.C.A.R. drops a toy robot (the Shiny Trinket) that takes your tactical slot. Open the tac-map and find a white dot out of bounds: an idle, green-eyed Ravager is there. Throw the trinket at it and it runs off. Do it on two more rounds and Bongo joins you, attacking enemies for several rounds.',
        video: SE(483),
      },
      {
        id: 'ghost-twins', tab: 'side', type: 'Free reward', name: 'Ghost Twins',
        summary: 'On a special round, interact with the leftmost empty cabinet in Museum Infinitum. For the next four rounds one cabinet makes a noise each round: interact with it. The Twins then appear somewhere new each round; walk up to them for Salvage, ammo mods and equipment.',
        video: SE(207),
      },
      {
        id: 'echoes', tab: 'side', type: 'Side quest', name: 'Echoes of the Damned (play as Nikolai)',
        summary: 'As Nikolai, throw a Molotov on the footprints at the bottom of the Abyssal Rim. Keep throwing Molotovs where the burning trail ends, up the stairs, until it reaches a cave you can\'t enter. Pick up the toy on a rock outside: after a cutscene you\'re in a cave. Interact with the altar and survive the looping Ravager waves until the final cutscene. Back on the map you get a Legendary Echo 12, Molotovs, loot and a calling card.',
        video: SE(11),
      },
      {
        id: 'songs-more', tab: 'side', type: 'Songs', name: 'More songs',
        summary: 'A few extra tracks besides "Magic".',
        video: SE(758),
        spots: [
          'Alpha Omega\'s game-over music: take three records to the gramophone in the Luminarium (a wooden box on the middle floor of Machina Astralis, the top of a Luminarium bookshelf, a ledge above a zombie window in the museum).',
          'Pareidolia remix: wall-jump off the left side of the floating rock by Wisp Tea and drift through space.',
          'The original Pareidolia: aim at the giant statue head on Mars for a few seconds.',
          '"Once In A Blown Up Moon": from round 16, aim at the floating rocket in front of Saturn for a while.',
        ],
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each. The Fire Sale and the Random Perk only appear once you have the other seven.',
        video: SE(790),
        spots: [
          { text: 'Bonus Points: outside the Crash Site, near a lamp post.', imgs: [{ src: I + 'spot-powerups-1.webp', cap: 'Bonus Points, still from MrDalekJD\'s guide video' }] },
          'Max Ammo: on top of the wall out of the map, left of the Luminarium trap room as you come from the Crash Site.',
          { text: 'Double Points: under a cabinet on the top floor of Machina Astralis, by the stairs.', imgs: [{ src: I + 'spot-powerups-3.webp', cap: 'Double Points, still from MrDalekJD\'s guide video' }] },
          { text: 'Full Power: on the telescope platform, seen from Stargazer\'s Courtyard.', imgs: [{ src: I + 'spot-powerups-4.webp', cap: 'Full Power, still from MrDalekJD\'s guide video' }] },
          { text: 'Insta-Kill: on top of a pillar on the right of Scholar\'s Way, looking towards Machina Astralis.', imgs: [{ src: I + 'spot-powerups-5.webp', cap: 'Insta-Kill, still from MrDalekJD\'s guide video' }] },
          { text: 'Max Armor: in a rock on the left of Stargazer\'s Courtyard as you come from the Observatory Dome.', imgs: [{ src: I + 'spot-powerups-6.webp', cap: 'Max Armor, still from MrDalekJD\'s guide video' }] },
          { text: 'Nuke: right of the balcony at the top of Machina Astralis, seen from the Veilwalk.', imgs: [{ src: I + 'spot-powerups-7.webp', cap: 'Nuke, still from MrDalekJD\'s guide video' }] },
          { text: 'Fire Sale: in a zombie window in Museum Infinitum, on the left coming from Stargazer\'s Courtyard.', imgs: [{ src: I + 'spot-powerups-8.webp', cap: 'Fire Sale, still from MrDalekJD\'s guide video' }] },
          'Random Perk: next to the ball on the right stair pillar, looking at the Luminarium from the Abyssal Rim.',
        ],
      },
    ],
  });
})();
