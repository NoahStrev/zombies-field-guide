/* Shaolin Shuffle — Infinite Warfare DLC 2 (Continuum) */
(() => {
  const I = 'assets/img/iw/shaolin/';
  const S = '6ipByM44x28'; // MrDalekJD easter egg guide
  const P = 'nShQzf0yiiw'; // MrRoflWaffles Pack-a-Punch parts
  const K = '9IfPXeuTBkY'; // MrRoflWaffles kung fu styles
  const SV = { id: S, title: 'Shaolin Shuffle full easter egg guide', ch: 'MrDalekJD', len: '20:13' };
  ZG.addMap({
    game: 'iw', id: 'shaolin-shuffle', order: 3,
    name: 'Shaolin Shuffle', dlc: 'Continuum · DLC 2', eeName: 'Pest Control',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Kung fu styles', 'Rat King', 'Pam Grier'],
    blurb: '1970s New York, from the subway to the disco. Learn kung fu from Pam Grier, chase rats, crack a Morse code and a rooftop cipher, and beat the Rat King three times before the final fight in his lair.',
    quick: [
      ['Main EE', 'Pest Control'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Kung fu styles, Kirisute Gomen (EE reward), Rat King\'s Heart'],
      ['Key items', 'Shurikens, Rat King\'s eye, Nightmare Summer poster'],
    ],
    intro: {
      start: 'Four power generators open the sewers. Pack-a-Punch needs three small parts and lives in a back room of the Pink Cat. Pam Grier teaches kung fu from round 5.',
      parts: 'The Pack-a-Punch parts move between games, so check each spot.',
      weapons: 'Kung fu is the map\'s special weapon. The easter egg only needs the first level (shurikens).',
      'easter-egg': 'The longest IW quest so far, with puzzle steps (Morse code, a letter cipher). Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn on the four power generators to open the sewers. Collect a Pink Cat flyer, a token and a film reel, then fix the projector in the Pink Cat\'s back room for Pack-a-Punch.',
        video: { id: P, title: 'All Pack-a-Punch part locations', ch: 'MrRoflWaffles', len: '4:20' },
        steps: [
          { anyList: 'Generators in any order', t: 'Turn on all four power generators', list: [
            'First subway (spawn): on a pole next to the train.',
            'The park: in the small area at the bottom of the stairs, by Deadeye Dewdrops.',
            'Inferno Club roof (through the 1,500 door in the DJ booth).',
            'Second subway: on the wall next to the train tunnel.',
          ], d: 'With all four on, the sewer doors open: Tuff \'Nuff and the Rat King\'s lair are down there.' },
          { w: 10, t: 'Collect the flyer, the token and a film reel', needs: ['pap-parts'] },
          { w: 127, t: 'Open the Pink Cat, then its back room, and fix the projector', d: 'The flyer opens the Pink Cat\'s front doors on the Strip; the token opens the small back room. Put the reel on the projector to open the portal. Pack-a-Punch costs 5,000.' },
        ],
      },
      {
        id: 'double-pap', tab: 'start', type: 'Upgrade', name: 'Double Pack-a-Punch (Alien Fuses)', short: 'Double PaP',
        summary: 'The fuses don\'t carry over to this map. Free them from a box on the rooftops and charge them on the subway rail.',
        steps: [
          { t: 'Press the button left of Pack-a-Punch and leave right away', d: 'Take the teleporter outside the Pink Cat building; it drops you on the rooftops by Racin\' Stripes. The box just left of that portal is open with the fuses inside.', tip: 'In co-op, one player presses the button while another waits at the box. Too slow and it shuts; press the button again.' },
          { t: 'Put the fuses on the live rail in the Bang Bangs subway', d: 'On the side of the tracks closest to the stairs up. Wait for a train to run over them, then pick them up.' },
          { t: 'Install them in Pack-a-Punch', d: 'Second upgrades now cost 10,000.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'pap-parts', tab: 'parts', type: 'Pack-a-Punch parts', name: 'Flyer, token and film reel', short: 'PaP parts', color: 'gold',
        summary: 'Three parts. The flyer and the reel each have several possible spots; the token is always in the same place.',
        facts: [['Parts', '3'], ['Use at', 'The Pink Cat, on the Strip']],
        video: { id: P, title: 'All Pack-a-Punch part locations', ch: 'MrRoflWaffles', len: '4:20' },
        parts: [
          { w: 10, name: 'Pink Cat flyer', area: 'Four possible spots', spots: [
            'On a pile of rubbish in the alley between the barber shop and the Black Cat Dojo.',
            'On a folding chair on the rooftops, across from the breakable wooden door by Racin\' Stripes.',
            'On the pavement in front of the Pink Cat.',
            'On a stool on the Inferno Club roof.',
          ] },
          { w: 79, name: 'Film reel', area: 'Five possible spots', spots: [
            'On a couch by the Skullbuster arcade machine in the Inferno Club.',
            'On a crate in the sewer passage just before Tuff \'Nuff.',
            'In one of the sewer pipes in the Rat King\'s lair.',
            'On a pile of boxes by the lockers in the second subway.',
            'On a chair inside the Pink Cat.',
          ] },
          { w: 110, name: 'Token', area: 'Sewers', spots: ['Under the Tuff \'Nuff machine. Go prone to reach it.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'kung-fu', tab: 'weapons', type: 'Map special · Kung fu', name: 'Shaolin styles (kung fu)', short: 'Kung fu', color: 'fire',
        summary: 'Pam Grier teaches four styles at the gourds in the Black Cat Dojo: Crane, Tiger, Snake and Dragon. Each has three levels: melee kills unlock shurikens, shuriken kills unlock a Chi power, and Chi kills unlock a super move.',
        facts: [['Available from', 'Round 5, after talking to Pam'], ['EE needs', 'Shurikens (level 1)']],
        video: { id: K, title: 'Shaolin Shuffle super powers guide', ch: 'MrRoflWaffles', len: '4:09' },
        steps: [
          { w: 31, t: 'From round 5, talk to Pam and pick a style at a gourd', d: 'The gourds light up in the dojo. Each player trains their own style; more than one player can pick the same one.' },
          { w: 61, t: 'Get melee kills to unlock shurikens', d: 'Your melee one-hits zombies for a long time.' },
          { w: 76, t: 'Get shuriken kills to unlock your Chi power', d: 'Crane freezes and shatters the zombies in front of you, Snake summons a skeleton helper, Tiger and Dragon blast the area.' },
          { w: 156, t: 'Get Chi kills to unlock the super move', d: 'Crane: a long flying kick. Snake: a flurry of chops. Tiger: a ground slam. Dragon: a dragon strike.' },
        ],
      },
      {
        id: 'kirisute-gomen', tab: 'weapons', type: 'Melee wonder weapon', name: 'Kirisute Gomen (katana)', short: 'Kirisute Gomen', color: 'red',
        summary: 'Pam Grier\'s katana. Free on the Black Cat Dojo wall once the main easter egg is done in that game; in later games it costs 10,000 if you\'ve finished the egg before.',
        facts: [['Upgraded', 'Sprites of Hell (shockwave every third swing)'], ['Upgraded twice', 'Feral Instinct (sends a ghost tiger)']],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Pest Control', short: 'Main EE',
        summary: 'Follow a rat with shurikens to a key, shoot four symbols, beat the Rat King for his eye, use it to find dragon symbols, decode a phone\'s Morse code and spell a rooftop word, then beat him for his brain and heart and finish him in his lair.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Third piece of the Soul Key, achievement, the Kirisute Gomen, and Pam Grier as a playable character'],
          ['Hardest part', 'The Morse code and rooftop cipher, and the Heart trial in the boss fight'],
        ],
        prep: [
          { t: 'All four generators on and Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'Shurikens from a kung fu style', needs: ['kung-fu'] },
          { t: 'A single-shot weapon for the symbols' },
          { t: 'Pen and paper (or a Morse chart) for the phone code' },
        ],
        stepsTitle: 'Quest steps',
        video: SV,
        steps: [
          { w: 63, t: 'Talk to Pam Grier in the Black Cat Dojo', d: 'Then open the map and turn on all the power.' },
          { w: 110, t: 'From round 5, train a style until you have shurikens', needs: ['kung-fu'], d: 'In co-op, one player is enough for this.' },
          { w: 140, t: 'Talk to Pam, then follow the rat between cages', d: 'Throw a shuriken at any rat cage. The rat runs to another cage; shuriken that one too, and keep following.' },
          { w: 172, t: 'Kill zombies in the yellow circle, then the ninjas', d: 'When a cage vanishes a yellow circle appears. Kill zombies while you and they are inside it. Ninja zombies spawn; kill them all and a key appears in the circle.', tip: 'No key? Talk to Pam and come back.' },
          { w: 202, t: 'Open the locker with Chinese writing in the second subway', d: 'Near Bang Bangs.' },
          { w: 218, t: 'Shoot four symbols in order, one bullet each', d: 'Each hit gives a small gong; a wasted extra shot can undo it, so use a single-shot gun.', ol: [
            'The left of the two big symbols on the building wall to the right of the dojo.',
            'In the Inferno Club bathroom (four symbols): the second one.',
            'By the lion statue in the park near Deadeye Dewdrops (four symbols): the far-left one.',
            'Then the one next to it. A big gong ends the step.',
          ] },
          { w: 264, t: 'Rat King fight 1: in front of the Black Cat Dojo', d: 'Interact with the orange Rat King symbol on the road. Shoot him until he leaves and drops an eye. Everyone picks it up. His health goes up with more players, so Pack-a-Punch first.', imgs: [{ src: I + 'rat-king.webp', cap: 'The Rat King' }] },
          { w: 310, t: 'Talk to Pam, then find and shoot six dragon symbols with the eye', d: 'The eye works like a scanner (left shoulder button). Symbols appear one at a time in these spots:', list: [
            'Inside the dojo, above the door.',
            'In the boarded window of the barber shop next to the dojo.',
            'In the first boarded window at the top of the scaffolding by the dojo (towards Racin\' Stripes).',
            'Heebie Geebies: behind the leftmost speaker of the band.',
            'First subway: behind the bars above the train, near the phones.',
            'Rooftops: on a shack outside the map, right of the RPR Evo.',
            'Park: on the back of a cloth on the washing line by the Magic Wheel.',
            'Inferno Club: on the vent above the metal walkway (kung fu may be needed to knock something out of the way).',
            'Inferno Club roof: on the water tower.',
            'Inferno Club lobby: behind the reception desk in the blue room, by Trail Blazers (jump to see it).',
            'On the side of the big Inferno Club sign, across from the Pink Cat.',
            'Behind Bombstoppers: on the bonnet of a police car outside the map (look from the stairs).',
            'Second subway: behind a metal pole on the platform by Bang Bangs (jump).',
          ] },
          { w: 451, t: 'Answer the ringing grey phone and decode the Morse number', d: 'In the first or second subway one phone turns grey and rings. It plays a three-digit number in Morse code: every five beeps is one digit (short = dot, long = dash). Pick it up again to replay it.', imgs: [{ src: I + 'morse.webp', cap: 'Morse digits 1–0' }] },
          { w: 513, t: 'Find the Nightmare Summer poster with that number', d: 'Posters are around the map; pick up the one whose film number matches.', warn: 'The wrong poster means collecting six dragon symbols again.' },
          { w: 528, t: 'Put the poster on the big spotlight on the Inferno Club roof', d: 'An X appears on a window by the roof generator. Blow it out with an explosive and kill the ninjas that spawn.' },
          { w: 559, t: 'Spell the word with the six rooftop symbols', d: 'A red letter appears on the wall by the door back down: it\'s the first letter of your word. Six symbols around the roof each stand for a letter (chart below). Shoot them to spell the word; a gong means it\'s done. Spots: by the door down, under the scaffolding, on the wall before the scaffolding, in a window, on a small ledge, on the white table.', tip: 'Don\'t like your word? Shoot a wrong symbol on purpose and you get a new first letter.', imgs: [{ src: I + 'cipher.webp', cap: 'Rooftop cipher: symbol → letter (made by the community)' }],
            note: 'Known words: ACTORS, AFTERLIFE, ANCESTOR, ARCADE, ARTHUR, AUDITION, BASEMENT, BEVERLYHILLS, BLACKCAT, BOAT, BREEDER, BROADWAY, BRUTE, BUMPERCARS, CHARMS, COMICBOOKS, CRANE, CRYPTID, DANCE, DAVIDARCHER, DEATH, DIRECTOR, DISCO, DRAGON, DRCROSS, FAIRIES, FORGEFREEZE, GEYSER, GHETTO, HARPOON, HIVES, INFERNO, KATANA, KEVINSMITH, KRAKEN, KUNGFU, LOSANGELES, MCINTOSH, MEMORIES, MEPHISTOPHELES, NEWYORK, NIGHTFALL, NUNCHUCKS, OBELISK, OCTONIAN, PAMGRIER, PINKCAT, PUNKS, RATKING, REALITYTV, REDWOODS, ROLLERCOASTER, ROLLERSKATES, SAMANTHA, SHAOLIN, SHIELD, SHUFFLE, SLASHER, SLIDE, SNAKE, SPACELAND, STAFF, SUBWAY, TIGER, TREES, WEREWOLFPOETS, WINONAWYLER, YETIEYES, ZAPPERS.' },
          { w: 700, t: 'Rat King fight 2: on the rooftops by the RPR Evo', d: 'He drops his brain. Pick it up and talk to Pam.' },
          { w: 731, t: 'Three rounds later, survive the "burnt film" lockdown', d: 'The screen cuts out and you\'re trapped in front of the dojo behind fire. Kill every zombie.' },
          { w: 762, t: 'Fit the turnstile piece in the first subway', d: 'It drops when the lockdown ends. One turnstile by the spawn is missing it.' },
          { w: 778, t: 'Shoot the symbol from the alley scaffolding, then follow the yellow circles', d: 'Climb the wooden ladder by the Karma-45 in the alley, go to the far end and shoot the Rat King symbol in the window above the Heebie Geebies. Yellow circles start appearing around the map; kill zombies inside each one until it moves, about five or six times, until a gong. Circle spots: the alley (Karma-45 / Mule Munchies), the first subway by the door to Tuff \'Nuff, the Inferno Club VIP lounge, the rooftops by Racin\' Stripes, the main path in the park.' },
          { w: 824, t: 'Pass the disco ball from zombie to zombie', d: 'Use the turntables in the Inferno Club DJ booth. A zombie on the dance floor below gets a disco ball over its head. Only kill that zombie, and only when another zombie is on the floor, so the ball jumps across. Keep going until no new disco zombie appears. Stay on the dance floor.' },
          { w: 887, t: 'Rat King fight 3: outside the Inferno Club, across from the Pink Cat', d: 'He drops his heart, which goes in your lethal slot as a grenade.' },
          { w: 902, t: 'Talk to Pam, get ready, then go to his lair', d: 'Strong guns, all perks, Fate & Fortune cards ready. Ending a round near the Rat King\'s lair in the sewers starts the fight.' },
          { w: 917, t: 'Boss: damage the Rat King until he retreats', d: 'Pam revives anyone who goes down (endless revives in solo). Melee the crates with kung fu to find perks; they change every few minutes. The Afterlife Arcade has a Lost and Found.', imgs: [{ src: I + 'rat-king-fight.webp', cap: 'The Rat King\'s lair' }] },
          { w: 997, any: 'Trials in any order', t: 'Heart trial: clear the acid', d: 'Place the heart in the middle. Acid covers the edge of the arena. Kill a zombie on each acid pool to clear it; clear them all before they come back. Step back into the shallow middle between pools.' },
          { w: 1094, any: 'Trials in any order', t: 'Brain trial: let the blue-eyed zombies eat it', d: 'Place the brain in the middle. Blue-eyed zombies go for the brain, not you. Keep the Rat King busy and let them destroy it.' },
          { w: 1125, any: 'Trials in any order', t: 'Eye trial: scan and shoot the symbols', d: 'Place the eye in the middle and scan with your own eye. Shoot every symbol: first on the ceiling, then lower on the walls above the sewer holes.' },
          { w: 1156, t: 'Kill the Rat King', d: 'Between trials he comes back stronger. After all three, finish him for the cutscene and the Soul Key piece. The Kirisute Gomen is now free on the dojo wall.' },
        ],
      },
    ],
  });
})();
