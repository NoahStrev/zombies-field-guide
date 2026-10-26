/* The Tortured Path — Call of Duty: WWII, Shadow Warfare DLC */
(() => {
  const I = 'assets/img/wwii/the-tortured-path/';
  const E = 's4YTCGR5cQI'; // MrDalekJD full easter egg guide
  const EV = { id: E, title: 'The Tortured Path full easter egg guide', ch: 'MrDalekJD', len: '33:12' };

  ZG.addMap({
    game: 'wwii', id: 'the-tortured-path', order: 4,
    name: 'The Tortured Path', dlc: 'Shadow Warfare (DLC 3)', eeName: 'I Have the Power',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Three chapters', 'Sword of Barbarossa', 'Waves, not rounds'],
    blurb: 'Three short maps played back to back: a Spanish farm, a ship at sea and an altar under the Antarctic ice. Each chapter hides one piece of Barbarossa\'s sword, and the last one forges it.',
    quick: [
      ['Main EE', 'I Have the Power (solo or co-op)'],
      ['Format', 'Three chapters of 10 waves, then extraction'],
      ['Collect', 'Hilt (ch. 1), pommel (ch. 2), blade + forge (ch. 3)'],
      ['Unlocks', 'Ending cutscene and three survival maps'],
    ],
    intro: {
      start: 'This map plays differently from the others: no Mystery Box or wall lockers (weapon boxes called Waffenboxes instead), set objectives on waves 3, 6 and 9, a boss on wave 10, then you run to extraction. Failing an objective fails the chapter.',
      'easter-egg': 'Do each chapter\'s piece during that chapter and survive to extraction. For the cutscene and the survival maps, the three chapters have to be beaten one after another without failing. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'how-it-works', tab: 'start', type: 'Map mechanic', name: 'How The Tortured Path works', short: 'How it works',
        summary: 'Each chapter is a short map with ten waves. Survive, finish the objectives, beat the boss and get to the extraction zone.',
        blocks: [
          { list: [
            '**Waffenboxes** replace the Mystery Box and lockers: each one gives a random weapon of its type. More types open after wave 3. Small ammo crates refill your gun (up to three times, getting pricier).',
            '**Objectives** on waves 3, 6 and 9 change each game and have a time limit. Fail one and the chapter is over.',
            'After each objective an Allied supply drop arrives with a Max Ammo, armour and sometimes a Tesla Gun.',
            '**Pack-a-Punch**: fill the soul box in the spawn area, then the next two that light up green as you go. Then the machine opens.',
            'Wave 10 is a boss. After it, everyone has to be standing in the extraction circle when the timer runs out.',
          ] },
          { tip: 'Spread out your special abilities in co-op; Shellshock is the most useful here, and Jack-in-the-Boxes are a lifesaver.' },
          { warn: 'At launch, only the Tortured Path playlist counted the full quest. Later, playing the three chapters in Custom games in order also counts, as long as you don\'t fail one.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'sword', tab: 'weapons', type: 'Quest weapon', name: 'Sword of Barbarossa', img: I + 'sword.webp', color: 'fire',
        summary: 'The finished sword, forged from the hilt, pommel and blade in chapter 3. Picking it up completes the quest.',
        facts: [['Hilt', 'Chapter 1, Into the Storm'], ['Pommel', 'Chapter 2, Across the Depths'], ['Blade', 'Chapter 3, Beneath the Ice']],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'I Have the Power',
        summary: 'Chapter 1: build a zombie on a windmill and follow it to the hilt. Chapter 2: shoot nine fish, follow a red herring and win a shell game for the pommel. Chapter 3: read rune codes, light flares and stand on altars for the blade, then forge the sword.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Achievement, cutscene, three survival maps'],
          ['Bonus', 'Each sword piece also gives you every Blitz'],
        ],
        prep: [
          { t: 'Read how the chapters work', needs: ['how-it-works'] },
        ],
        video: EV,
        steps: [
          { w: 121, any: 'Collect in any order', t: 'Ch. 1 · Collect six zombie body parts', d: 'A head, a torso, two arms and two legs. Each has several random spots around the farmhouse, the winery, the windmill and the cellar. Check fireplaces, sinks, fence posts, hanging baskets, wine racks and the truck.' },
          { w: 330, any: 'Collect in any order', t: 'Ch. 1 · Shoot down the rope hanging from the tree by the first Pack-a-Punch soul box', d: 'Shoot the top where it ties to the branch. It falls into the river. Next round, hold interact on the fallen branch near Kugelblitz to pull it up and take the rope.' },
          { w: 392, any: 'Collect in any order', t: 'Ch. 1 · Take the two lightning rods from the crashed pod by spawn', d: 'One on the front of the half-track, one in the dead cow.' },
          { w: 362, any: 'Collect in any order', t: 'Ch. 1 · Get a Wüstling arm', d: 'From wave 5. Make one Wüstling charge into another (shoot them so they run at each other). One drops its arm.' },
          { w: 425, t: 'Ch. 1 · Stop the windmill with the arm on the right blade and load it up', d: 'Jam the arm in the gears when the most intact blade (right of the windmill door) is level. Put the body parts, rope and rods on it.', tip: 'Have someone call out when the white part of the blade passes the middle of the door; the other player jams the gears. Don\'t end the wave while you try.' },
          { w: 487, t: 'Ch. 1 · Send the zombie to the very top and stop it there', d: 'Pull the arm out, then jam it again when the blade is straight up. End the wave: lightning hits it and it falls.' },
          { w: 535, t: 'Ch. 1 · Escort it to the Faustblitz house', d: 'The wave after it falls, it gets up and limps through the windmill. Keep zombies off it (Jack-in-the-Boxes) until it crawls under the debris.', warn: 'If it dies, the quest can\'t be finished this game.' },
          { w: 580, t: 'Ch. 1 · Next wave, kill lots of zombies right next to it', d: 'It comes out with a battery and walks toward the wine cellar. Kill zombies close to it to charge the battery, but don\'t let them hurt it too much. Skip Shellshock here: you want zombies to keep coming.' },
          { w: 643, t: 'Ch. 1 · Put the battery in the panel by the cellar door and take the hilt', d: 'It drops the battery when it dies or reaches the door. You also get every Blitz.' },
          { w: 674, t: 'Ch. 1 · Finish the waves, beat the boss and extract' },
          { w: 736, t: 'Ch. 2 · Melee the dead battery left of Pack-a-Punch in the barracks', d: 'Your vision changes. Every player has to walk up to it and enter the vision too.' },
          { w: 782, t: 'Ch. 2 · Next wave, shoot all nine fish', d: 'They appear in odd places all over the ship (beds, lockers, vents, food trays). Count out loud. Save a zombie at the end of wave 2 to give yourself time.' },
          { w: 828, t: 'Ch. 2 · Follow the red herring from the raft at the back of the briefing room', d: 'It stops by an empty battery case.' },
          { w: 861, t: 'Ch. 2 · Buy a battery from a hidden wall locker (3,000) and fill it in the case', d: 'Battery lockers appear in a few spots outside on the deck. Put the battery in the case first, then kill zombies by it. When it\'s full, follow the fish to the next case. Three times in all.', tip: 'Shellshock is great here; the ship is narrow.' },
          { w: 1096, t: 'Ch. 2 · Cross the vision world', d: 'Jump between platforms. Each big rock replays a moment from Straub\'s past, then you fight a wave. Miss a jump and you\'re downed on the last platform.', tip: 'In co-op, have one player hang back to revive anyone who falls.' },
          { w: 1288, t: 'Ch. 2 · Win the shell game three times', d: 'The herring hides in a bucket and the buckets shuffle. Shoot the one it\'s in. Each round adds buckets and speed. A wrong guess spawns mini-bosses.' },
          { w: 1368, t: 'Ch. 2 · Take the pommel by Pack-a-Punch, then finish the chapter and extract', d: 'It replaces your Jack-in-the-Boxes. You get every Blitz again.' },
          { w: 1443, t: 'Ch. 3 · Melee the battery in the altar room three times', d: 'Do it right away. On every even wave, hold interact on it to enter the vision and look for rune codes around the map.' },
          { w: 1475, t: 'Ch. 3 · Enter the first rune code on the rune door', d: 'The codes are one of a fixed set, so you can try them all instead (see the picture). Red lightning means correct. Next wave, a supply drop brings the hilt: put it on the altar.', imgs: [{ src: I + 'runes.webp', cap: 'The possible rune codes' }] },
          { w: 1606, t: 'Ch. 3 · Light the flares: four wall pots, two by the rune door, one left of Laufenblitz', d: 'A box of flares falls on the stairs. Throw them into the four pots under the heads in the altar room quickly (they go out), then the two by the rune door, then the bowl left of Laufenblitz. A wall opens with the second rune.' },
          { w: 1668, t: 'Ch. 3 · Put the rune on the door and enter the second code', d: 'Next wave, the drop brings the pommel. Put it on the altar.' },
          { w: 1745, t: 'Ch. 3 · Everyone stands on a pressure pad and kills zombies', d: 'One pad per player sinks when you stand on it: spawn, up by Laufenblitz, behind the rune door and by Faustblitz. Stay on until the completion sound. The statues bleed and drop the third rune.' },
          { w: 1854, t: 'Ch. 3 · Enter the third code: the blade arrives', d: 'Put it on the altar.' },
          { w: 1869, t: 'Ch. 3 · Forge the sword at the altar and pick it up', needs: ['sword'] },
          { w: 1902, t: 'Ch. 3 · Finish the waves, beat the boss and extract', d: 'If all three chapters were done in a row, the ending plays and the survival maps unlock.', imgs: [{ src: I + 'storm.webp', cap: 'One of the chapter bosses' }] },
        ],
      },
    ],
  });
})();
