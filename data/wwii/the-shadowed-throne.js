/* The Shadowed Throne — Call of Duty: WWII, The War Machine DLC */
(() => {
  const I = 'assets/img/wwii/the-shadowed-throne/';
  const E = 'aaX-agpI5yU'; // MrRoflWaffles easter egg guide
  const EV = { id: E, title: 'The Shadowed Throne easter egg guide', ch: 'MrRoflWaffles', len: '35:50' };
  const PV = { id: 'pJzDV6zaefs', title: 'The Shadowed Throne Pack-a-Punch', ch: 'MrRoflWaffles', len: '1:32' };
  const WV = { id: 'jouoLbsetq8', title: 'How to build the Wunderbuss', ch: 'MrRoflWaffles', len: '5:24' };

  ZG.addMap({
    game: 'wwii', id: 'the-shadowed-throne', order: 3,
    name: 'The Shadowed Throne', dlc: 'The War Machine (DLC 2)', eeName: 'Stadtjäger Down',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Wunderbuss', 'Blade of Barbarossa', 'Stadtjäger'],
    blurb: 'Bombed-out Berlin at the end of the war. Call in the Red Army, lure Straub\'s zeppelin overhead, collect three cursed melee weapons to open Barbarossa\'s hidden refuge, then ride a drop pod up to the zeppelin.',
    quick: [
      ['Main EE', 'Stadtjäger Down (solo or co-op; easier co-op)'],
      ['Wonder weapon', 'Wunderbuss (build it)'],
      ['Key items', 'Radio codes, three melee weapons, Blade of Barbarossa'],
      ['Boss', 'The Stadtjäger, on board the zeppelin'],
    ],
    intro: {
      start: 'You start in the Underbelly. A radio above Main Street is used all game: for the Russians, the Smuggler and a Morse message. WWII rules are explained in the basics on The Final Reich.',
      weapons: 'The Wunderbuss is needed for Pack-a-Punch, several quest steps and getting onto the zeppelin. Its parts only appear once the zeppelin has arrived, which is also the first step of the quest.',
      'easter-egg': 'A long quest with a lot of number puzzles. Have a way to take notes. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'radio', tab: 'start', type: 'Map mechanic', name: 'The radio and the Russians', short: 'Radio',
        summary: 'Calling the Red Army on the radio is how the zeppelin (and with it the Wunderbuss part) arrives. Each game uses a different frequency.',
        video: WV,
        steps: [
          { w: 140, t: 'Read the sticker on top of the radio', d: 'The radio is on the raised area above Main Street, outside the Cabaret. The sticker has two letters (the series) and a number (the model), for example ZX1.' },
          { w: 170, t: 'Find the red pin on the map in the Church', d: 'It shows where the Red Army is this game (for example Oder-Spree).' },
          { w: 186, t: 'Look up the series and model in that place\'s chart', d: 'The charts are left of the map. They give a band and a frequency.' },
          { w: 216, t: 'Tune the radio: left side is the band, right side is the frequency', d: 'The light goes green when the Russians answer.' },
          { w: 231, t: 'Melee the flare box twice', d: 'Next to the corpse by Kugelblitz, on the other side of the barricade from the radio. The flare brings Straub\'s zeppelin overhead. It starts turning zombies into glowing Gekochts.' },
        ],
      },
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Blow open two fuse panels with grenades and charge each with the Wunderbuss beam. The Ubersprengen is in the elevator in the Destroyed Building.',
        video: PV,
        steps: [
          { t: 'Build the Wunderbuss', needs: ['wunderbuss'] },
          { w: 17, t: 'Grenade the panel behind the bars in the spawn area, then beam the fuses', d: 'About three seconds of Wunderbuss beam.' },
          { w: 33, t: 'Do the same to the panel on the wall up the slope', d: 'Pack-a-Punch opens.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'wunderbuss', tab: 'weapons', type: 'Wonder weapon', name: 'Wunderbuss', img: I + 'wunderbuss.webp', color: 'lightning',
        summary: 'Fires a continuous Geistkraft beam. Aim to launch a Geistbolt instead: it sticks in a zombie, drains it and refills your beam ammo.',
        facts: [['Parts', 'Battery + Geistbolt'], ['Build at', 'Workshop in the Apartments basement'], ['Also', 'A spare is on the zeppelin during the boss']],
        video: WV,
        steps: [
          { w: 47, t: 'Find the battery', d: 'Random, on top of an empty weapon locker:', list: [
            'Cabaret: up the stairs, on a box on the right.',
            'Museum top floor: right of Faustblitz, by the body slumped over a box.',
            'Museum ground floor: left of the Geistschild machine, in a wooden box.',
          ] },
          { w: 140, t: 'Call the Russians and bring the zeppelin', needs: ['radio'] },
          { w: 247, t: 'Melee a Gekocht for the Geistbolt', d: 'The zeppelin shoots normal zombies and turns them into fast, glowing Gekochts. Melee one and you pull the bolt out.' },
          { w: 262, t: 'In the Apartments basement, put the battery in the blue device on the wall', d: 'A door opens into the workshop.' },
          { w: 279, t: 'Put the Geistbolt on the bench, then take the battery back out of the wall', d: 'The door shuts behind you. Put the battery on the bench to build the Wunderbuss.' },
          { w: 295, t: 'Shoot the blue device with the Wunderbuss to get out' },
        ],
      },
      {
        id: 'melee', tab: 'weapons', type: 'Special melee weapons', name: 'Perchta, Nachtmahr & Holda', short: 'Melee weapons', img: I + 'perchta.webp', color: 'gold',
        summary: 'Three cursed melee weapons, each earned from its own mini-quest. All three go into the wall by the Church to open Barbarossa\'s Refuge. You can take them back out of the wall afterwards.',
        facts: [['Perchta', 'Dagger. Its heavy attack heals you, or gives back a Geistschild point if your health is full'], ['Nachtmahr', 'Bat. Its ranged swing throws a ball of energy'], ['Holda', 'Axe. Charge kills explode and stagger zombies nearby']],
        blocks: [
          { imgs: [{ src: I + 'perchta.webp', cap: 'Perchta (the dagger)' }, { src: I + 'nachtmahr.webp', cap: 'Nachtmahr (the bat)' }, { src: I + 'holda.webp', cap: 'Holda (the axe)' }] },
          { p: 'The steps for all three are in the main quest checklist.' },
        ],
      },
      {
        id: 'blade', tab: 'weapons', type: 'Quest weapon', name: 'Blade of Barbarossa', img: I + 'blade.webp', color: 'fire',
        summary: 'The broken blade of Barbarossa\'s sword, hidden in his statue. A huge swing, or a wave of energy that wipes out normal zombies for most of the game. Kills with it give no points.',
        facts: [['Get it', 'Statue puzzle in Barbarossa\'s Refuge'], ['Melee', 'Faustblitz makes it even stronger']],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Stadtjäger Down',
        summary: 'Bring the zeppelin, build the Wunderbuss, earn three melee weapons from a dancer\'s safe, a smuggler and a Morse code message, solve the statues in Barbarossa\'s Refuge, then board the zeppelin and kill the Stadtjäger.',
        facts: [
          ['Players', 'Solo or co-op (co-op is easier)'],
          ['Reward', 'Achievement, ending cutscene'],
          ['Boss', 'The Stadtjäger (three phases)'],
        ],
        prep: [
          { t: 'Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'Shellshock as your special ability, and anything that charges it faster' },
        ],
        video: EV,
        steps: [
          { w: 80, t: 'Call the Russians and launch the flare', needs: ['radio'] },
          { w: 189, t: 'Build the Wunderbuss', needs: ['wunderbuss'], d: 'While you look for the battery in the Cabaret, also take the **magnifying glass** from the bench just left of that box.' },
          { w: 266, t: 'Zap the cash register in the workshop and enter its code on the radio', d: 'Before leaving the workshop, beam the register behind you: a code is under it. Entering it on the radio reaches the Smuggler.' },
          { w: 315, t: 'Shoot the gas manhole cover near the Cabaret', d: 'In the sloped area by the puddle trap, before the Church. The Smuggler asks for a gun.' },
          { w: 332, t: 'Give him wall weapons until he takes one', d: 'He refuses most. Try every locker on the map.', warn: 'Don\'t offer him your shovel; it can break the step.' },
          { w: 446, any: 'While you wait three rounds', t: 'Fill the zeppelin\'s three reachable canisters', d: 'Its tethers dropped metal canisters. Charge each until it turns yellow: the one by Kugelblitz (beam or kills next to it), the one up the slope from spawn (beam through a crack) and the one in the Museum ceiling (beam). The fourth comes later.', tip: 'In co-op, take turns beaming them.' },
          { w: 539, any: 'While you wait three rounds', t: 'Take the painting by the bleeding woman and fix the Cabaret projector', d: 'Hang it above the projector on the balcony, shoot down the film reel tucked on the ledge, put it in the projector and zap the projector. It shows a map of the city with a green light.' },
          { w: 649, any: 'While you wait three rounds', t: 'Count the souls at four clown toys', d: 'The green light marks where a clown toy is. Kill zombies by it and count every soul until it finishes. Then check the map for the next spot. Four toys give four digits.', tip: 'Lost count? The loop repeats, so just come round again and recount.' },
          { w: 760, any: 'While you wait three rounds', t: 'Open the safe near the sleeping woman with those digits: the Perchta', d: 'Spin clockwise a few times to reset, then clockwise to the 1st digit, back to the 2nd, clockwise to the 3rd and back to the 4th. Go slowly.', needs: ['melee'] },
          { w: 870, t: 'Put the Perchta in the wall by the Church', d: 'Three weapon-shaped slots to the right of the Church entrance.' },
          { w: 900, t: 'Three rounds later, shoot the manhole cover again and pay the Smuggler', d: 'Drop your Jolts in. He asks you to knock three times.' },
          { w: 948, t: 'Melee the suspicious door in the workshop three times: the Nachtmahr', d: 'Kill the Wüstling that appears behind you. The Smuggler is dead, but his bat is there. Put it in the Church wall.' },
          { w: 995, t: 'Find a pair of numbers scratched into the walls', d: 'Usually on the right of the elevator in the Apartments, on the Museum balcony, or on a wooden dresser in the Cabaret.' },
          { w: 1043, t: 'Enter them on the radio and write down the Morse code', d: 'Each digit is five dots and dashes. The message repeats after a pause. Translate it into two numbers.' },
          { w: 1157, t: 'Use the magnifying glass on the Church map at those coordinates', d: 'Hold interact on the map: first number across, second number down. A cabinet opens with a gold bowl.' },
          { w: 1204, t: 'Put the bowl on the scales in the Museum', d: 'Top left corner of the room.' },
          { w: 1220, t: 'Melee a Gekocht next to a Geistschild machine, then buy armour to get its head', d: 'Its head flies into the machine. Only a Gekocht head works.' },
          { w: 1250, t: 'Put the head in the bowl, then fill the bunny soul box beside the table: the Holda', d: 'A drawer opens with the axe. Put it in the Church wall.' },
          { w: 1313, t: 'Charge the three weapons with souls', d: 'Kill next to the wall: about 20 normal zombies, then Gekochts (stop killing everything and let the zeppelin make more), then Pests. The Refuge door opens.', warn: 'Don\'t stand next to the door as it opens; it can kill you instantly.' },
          { w: 1407, t: 'In the Refuge, charge the fourth canister in the roof', d: 'The door shuts you in. Keep one zombie alive before you start.' },
          { w: 1440, t: 'Turn every statue on each wall to face the middle', d: 'Shoot a statue enough and it turns. Finish a wall and a gold raven appears in its centre: put it at Barbarossa\'s feet, then move to the wall on your left. Four walls in all.', tip: 'MrRoflWaffles\' video description links a solver where you enter how each statue is facing.' },
          { w: 1597, t: 'Put each raven back in its own spot on the statue', d: 'Lightning scatters them. Each raven has a different pose (twisted beak, leaning forward, sitting back…) and only fits one spot. Green means right; red scatters them again.' },
          { w: 1674, t: 'Take the Blade of Barbarossa and put it in the slot by the door', needs: ['blade'], d: 'Upstairs on the left. You keep the blade, and the door opens.' },
          { w: 1689, t: 'Get ready for the boss', d: 'Perks, Pack-a-Punch, full armour and special meter. Jack-in-the-Boxes help. Time it so a Pest round (and its max ammo) comes during the fight.', tip: 'The Hangman sign on the Cabaret can give a max ammo, a full special meter or a free Tesla Gun.' },
          { w: 1848, t: 'Everyone in the drop pod, then empty your Wunderbusses into the red fuse above', d: 'Next to the radio. It only rises if you pour nearly a full Wunderbuss each into it; stop shooting and it sinks.' },
          { w: 1880, t: 'Drag the power along the tracks with the terminals', d: 'Each terminal moves a blue ball of energy under the floor. Use it to open the locked doors. Do the left side, then the right, then drag it from the right into Straub\'s lab in the middle.' },
          { w: 1957, t: 'Kill the Stadtjäger', d: 'It only takes damage while it glows orange: first while it winds up a charge, then while it fires its bolts, and last while it makes an energy storm. Stay in the open starting area, and use Shellshock and Jack-in-the-Boxes to make room.', imgs: [{ src: I + 'stadtjager.webp', cap: 'The Stadtjäger (concept art)' }] },
          { w: 2065, t: 'Everyone back in the pod', d: 'It drops you to the street and the cutscene plays.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'hangman', tab: 'side', type: 'Free reward', name: 'Hangman', img: I + 'hangman.webp',
        summary: 'The sign over the Cabaret entrance is a game of Hangman. Shoot the up and down arrows to pick a letter and the middle button to guess it. Spell these for rewards (each once per game):',
        blocks: [
          { table: { head: ['Word', 'Reward'], rows: [
            ['WONDER', 'A Tesla Gun and a Ripsaw'],
            ['FAMISHED', 'Max Ammo'],
            ['GEISTKRAFT', 'Full special meter'],
            ['GLUTTONY', 'Double Jolts'],
            ['REAPER', 'Insta-Kill'],
            ['DAMNATION', 'Nuke'],
            ['THEJACKBOX', 'A Jack-in-the-Box'],
          ] } },
        ],
      },
    ],
  });
})();
