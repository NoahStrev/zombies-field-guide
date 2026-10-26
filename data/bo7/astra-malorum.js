/* Astra Malorum — Black Ops 7, Season One */
(() => {
  const I = 'assets/img/bo7/astra-malorum/';
  const E = 'MxgEVlnU85s'; // MrRoflWaffles easter egg guide
  const P = 'Gp7Jzdw_F-E'; // MrRoflWaffles Pack-a-Punch guide
  const L = '7a9xNqh6Pq4'; // MrRoflWaffles LGM-1 guide
  const EV = { id: E, title: 'Astra Malorum easter egg guide', ch: 'MrRoflWaffles', len: '27:40' };
  const PV = { id: P, title: 'Astra Malorum power and Pack-a-Punch', ch: 'MrRoflWaffles', len: '3:15' };
  const LV = { id: L, title: 'Free LGM-1 wonder weapon', ch: 'MrRoflWaffles', len: '9:28' };

  ZG.addMap({
    game: 'bo7', id: 'astra-malorum', order: 2,
    name: 'Astra Malorum', dlc: 'Season One', eeName: 'Astra Malorum quest',
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
          { w: 998, t: 'Align three planets using the notes', d: 'Notes on a desk in the Luminarium, a table in Machina Astralis and a table in the Archive each give a planet and a direction (like NE). Shoot those planets in the big model until each points that way (the chandelier around the Sun is the compass).' },
          { w: 1061, t: 'Interact with the brain and defend the portal', d: 'O.S.C.A.R. fires UFOs at the middle structure: shoot them down until the bar fills. A portal pulls you to Mars.' },
          { w: 1091, t: 'Put Thurston\'s canister in the Aegis terminal on Mars' },
          { w: 1107, t: 'Shoot the four outer pylons in order, then the one over the temple entrance', d: 'When the strange sound plays, a small flying "eye" appears outside. Shoot the pylons: back right, back left, front right, front left, then the one above the entrance. The eye flies in.' },
          { w: 1154, t: 'Catch the eye in low gravity and place it in the statue', d: 'Keep shooting the back pylon so it stays close, jump up (from the top platform if needed) and grab it.' },
          { w: 1201, t: 'Harmonise the five pillars', d: 'Shoot each pillar\'s antenna on Mars with the LGM-1. Back on Earth, the organ in the Pack-a-Punch room shows five symbols in order, one blank. On Mars, interact with the pillars in that order (the blank one is the pillar whose symbol you didn\'t see). Red means wait a round.', needs: ['lgm'] },
          { w: 1387, t: 'Get ready and start the fight at the Aegis terminal', d: 'Armour wall-buy by the entrance, ammo against a pillar on the left.' },
          { w: 1403, t: 'Caltheris, skull form: fire the towers', d: 'Kill zombies to fill a defence tower on the wall, then hold interact on the machine at the top of the stairs to fire it at her. Three times (right, left, then both). She adds meteors, then toxic gas: run in the same direction as your team.', imgs: [{ src: I + 'caltheris.webp', cap: 'Caltheris' }] },
          { w: 1515, t: 'Golem, then Ascendant, then Needle forms', d: 'Shoot her glowing crit spots and break off her armour. Jump to avoid her ground slam and break line of sight when she throws boulders. In the last form her rocks leave electricity on the ground: stay out of it. If you finished Ashes of the Damned\'s quest, Veytharion\'s Blessing (infinite ammo) waits at the top of the stairs.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Magic"',
        summary: 'Interact with three Mister Peeks headphones: on the bottom shelf left of the exit door in the Luminarium, in a display case in Machina Astralis, and on a table in the Observatory Dome.',
      },
    ],
  });
})();
