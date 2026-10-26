/* Shangri-La — Zombies Chronicles remaster (originally Black Ops) */
(() => {
  const I = 'assets/img/bo3/shang/';
  ZG.addMap({
    game: 'bo3', id: 'shangri-la', order: 8, group: 'chronicles',
    name: 'Shangri-La', dlc: 'Zombies Chronicles', eeName: 'Time Travel Will Tell',
    hero: I + 'hero.webp', players: 'four',
    tags: ['31-79 JGb215', 'Time travel', '4 players'],
    blurb: 'A temple in the Himalayan jungle with geysers, a mine cart and a water slide. Travel between past and present during eclipses to help two explorers stuck in a time loop.',
    quick: [
      ['Main EE', 'Time Travel Will Tell'],
      ['Players', '4 required (solo only with a PC mod)'],
      ['Wonder weapon', '31-79 JGb215 (shrink ray)'],
      ['EE reward', 'Focusing Stone: all perks, kept when downed'],
    ],
    intro: {
      start: 'Power comes from two water levers in the Power Room. Pack-a-Punch rises up the temple stairs when every player stands on a stone slab.',
      'easter-egg': 'A long four-player quest. Most steps happen in the past, during an eclipse, which only lasts a few minutes at a time.',
    },
    items: [
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Pull both water levers in the Power Room, then get every player onto a stone slab at once to raise the temple stairs.',
        steps: [
          { t: 'Reach the Power Room', d: 'From spawn, open either the debris toward the Mine Cart or toward the waterfall. Both routes lead underground to the Power Room.' },
          { t: 'Pull both water levers', d: 'They drive the water-powered generators and turn the power on.' },
          { w: ['tctR5oCbxWk', 737], t: 'Stop the spinning statues', d: 'Four small stone statues around the map now have spinning parts — one spinning part per player in the game. Next to each is a stone slab; standing on it stops that part.', list: [
            'Next to Quick Revive.',
            'Under the big wooden bridge.',
            'Next to the power switches.',
            'In the cave leading to the AK-74u.',
          ], note: 'Solo: only one part spins, so you just stand on that one slab.' },
          { t: 'Climb the temple stairs to Pack-a-Punch', d: 'When every spinning part is stopped, the missing stairs rise. After a while, water washes everyone down and the stairs sink again — repeat the slab step to go back up.' },
        ],
      },
      {
        id: 'shrink-ray', tab: 'weapons', type: 'Wonder weapon', name: '31-79 JGb215', aka: 'Shrink Ray / "Baby Gun"', img: I + 'shrink-ray.webp', color: 'green',
        summary: 'Shrinks zombies so you can kick them to death. Mystery Box only. Needed for the easter egg.',
        upgrade: { name: 'The Fractalizer', img: I + 'fractalizer.webp', summary: 'Pack-a-Punched shrink ray. The easter egg needs it for the crystal steps.', steps: [{ t: 'Pack-a-Punch it', needs: ['power-pap'] }] },
      },
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Time Travel Will Tell', short: 'Main EE',
        summary: 'Help explorers Brock and Gary escape their time loop and claim the Focusing Stone.',
        facts: [
          ['Players', 'Exactly 4 in the base game'],
          ['Reward', 'The player who takes the Focusing Stone gets all perks permanently; everyone gets the achievement'],
          ['Repeatable', 'Up to four times (once per player)'],
        ],
        prep: [
          { t: 'Four players', d: 'Step 1 and several later steps need four people at once.' },
          { t: 'Power on and Pack-a-Punch working', needs: ['power-pap'] },
          { t: 'The 31-79 JGb215 (Pack-a-Punched for the later steps)', needs: ['shrink-ray'] },
          { t: 'Trip Mines, an explosive weapon, and a Napalm Zombie', d: 'Napalm Zombies are the slow, flaming special zombies that come with the fog.' },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { imgs: [{ src: I + 'meteor.webp', cap: 'The 115 meteor that appears over the temple' }], w: 40, t: 'Start an eclipse', needs: ['power-pap'], d: 'Once the power is on, four dials sit on separate walls near Quick Revive in the starting room. All four players press them at the same time. Time distorts: you\'re in the past, the moon eclipses the sun, and a huge 115 meteor sits over the temple.', note: 'Eclipses only last a few minutes. Steps marked "in the past" must be done during one.' },
          { w: 61, t: 'Talk to the trapped explorers', d: 'Behind the Pharo wall-buy, two explorers are stuck in a locked area. Press the button there (like the dials) so they start talking. Afterwards, 24 symbol plates appear on the ground outside spawn, 12 on each side.' },
          { w: 81, t: 'Match all the symbol plates (in the past)', d: 'Plates are on the bridge, near the rotating statue, and in the area with the Pharo. One player stands on a plate and calls out its symbol; a player on the other side finds the matching symbol and both step on their plates together to make the pair vanish. Clear every pair within about 4–5 minutes.', warn: 'A wrong pair brings every plate back. If someone stands on a plate while another player is still searching, the symbols shuffle.', imgs: [{ src: I + 'eclipse-symbols.webp', cap: 'The symbols you\'ll see on the plates' }] },
          { w: 307, t: 'Weigh down the water slide grate (new eclipse)', d: 'Start another eclipse. Three players stand on the grate at the bottom of the water slide where the water lands. The fourth rides the slide and hits the switch on its side on the way down. The eclipse ends when it works.' },
          { w: 345, t: 'Send the diamond up the geyser', needs: ['shrink-ray'], d: 'A crystal appears above the water slide\'s entrance, at the top of the waterfall. Knock it down with an explosive or Ray Gun, shrink it with the 31-79 JGb215, then knife it so it slides to the geyser. Launch it with the geyser so it lands on a tower; a new diamond appears when it works.' },
          { w: 409, t: 'Turn the gas valve four times', d: 'In the tunnel with the pressure plate used for Pack-a-Punch, a wheel on a gas pipe sits next to it. Turn it four times until the characters say the gas is leaking. Gas leaks now line the tunnel from the Pharo entrance to the Power Room (you\'ll cough walking through).' },
          { w: 429, t: 'Light the gas with a Napalm Zombie (in the past)', d: 'During an eclipse, lead a calm Napalm Zombie through the tunnel past every gas leak (at the cave entrance, near the geyser launcher and just before the Power Room). Then, in the same eclipse, go back to the pipe and pull down the raised lever. The characters mention the floor being covered in lava.' },
          { w: 510, anyList: 'Holes in any order', t: 'Plug four holes with Trip Mines (in the past)', d: 'In the tunnel near the Mine Cart where four holes now line the wall, plant a Trip Mine in front of each hole and set them off (crawlers or the Napalm Zombie). Then, at the bottom of the waterfall, find the brick sticking out on the brick wall of the central boulder (it says "do not hold") and hold interact. You return to the present and a diamond appears above the mud-pit temple.' },
          { w: 592, anyList: 'Panels in any order', t: 'Knife 12 wall panels, then blow up the snare (in the past)', d: 'Knife all 12 panels to light them: 5 in the spawn room, 2 in the mud-pit area, 2 by the Mine Cart, 2 in the Stakeout room and 1 by the left power switch. Then throw an explosive (a Monkey Bomb works) at the snare trap out of bounds by the Mine Cart gate. The characters say it worked.' },
          { w: 675, t: 'Enter the dial code 16-1-3-4 (in the past)', d: 'A radio on a box near the Mine Cart gate gives the code. Inside the mud-pit temple, set the four dials (top number) — coming from the eclipse button side:', list: [
            'Far right dial: the symbol for 16 (looks like "[ | -").',
            'The dial directly behind it: one dot.',
            'The dial diagonal from that one (far left): three dots.',
            'The dial behind it (near left): four dots.',
          ], tip: 'A diamond appearing above the mud-pit temple means the code worked.' },
          { w: 778, t: 'Listen to Gary\'s radio, then charge the crystals with the gongs', d: 'In the present, a radio appears on the ground by the statue at the right of the Pack-a-Punch stairs — you must listen to it. Then, in the past, the dynamite hangs from the focusing crystal by the Mine Cart gate. Knife the four gongs that resonate, in the right order: after each hit, watch the crystals — a red glow that fades means wrong; no glow and the hum continues means right. When done, the crystals glow yellow with Treyarch symbols over them.', warn: 'Go straight into the next step while the crystals are still glowing and humming — you need the rest of this eclipse.' },
          { w: 884, t: 'Knock down the dynamite and shrink the meteor (in the past)', needs: ['shrink-ray'], d: 'Shoot the crystal above the mud-pit temple (behind a palm tree, seen from spawn) or the crystal holding the dynamite with the Fractalizer. The beam bounces between crystals and knocks the dynamite off — a player must stand right under it to catch it. Then shoot the mud-pit crystal with the Fractalizer again: three orange beams hit the giant meteor, which shrinks and falls into the temple.', warn: 'Miss the catch and you redo the gongs.' },
          { w: 950, t: 'Give Brock the dynamite and take the Focusing Stone', d: 'Still in the past, climb to where Pack-a-Punch was — it\'s gone and the back wall is reachable. The player with the dynamite hands it through a small hole to Brock. After the talk, water washes you down and you return to the present. Climb the temple again: the wall is blown open and the Focusing Stone floats on the altar. Whoever holds interact on it gets all eight perks for good.' },
        ],
        blocks: [{ note: 'To repeat it: a radio washes out at the base of the temple. Listen to most of it and the eclipse dials pop out again, until all four players have a Focusing Stone.' }],
        video: { id: 'tctR5oCbxWk', title: 'Ultimate Shangri-La Easter Egg Guide (Zombies Chronicles)', ch: 'MrRoflWaffles', len: '18:22' },
      },
      {
        id: 'song-pareidolia', tab: 'side', type: 'Song', name: '"Pareidolia"',
        summary: 'Hold interact on three small meteor pieces.',
        spots: [
          'Starting room behind Quick Revive: left of the window, in the rubble behind the fallen pillar.',
          'By the bridge near spawn and the moving walls, next to the perk machine.',
          'In the room after the AK-74u room, in the broken wall across from the Semtex outline.',
        ],
      },
    ],
  });
})();
