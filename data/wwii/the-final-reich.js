/* The Final Reich — Call of Duty: WWII launch map */
(() => {
  const I = 'assets/img/wwii/the-final-reich/';
  const E = 'iY2yoknG7pg'; // MrRoflWaffles casual quest (Fireworks)
  const H = 'AqObpPkq8G8'; // MrRoflWaffles hardcore quest (Dark Reunion)
  const P = '6wxe1SHH6Ek'; // MrRoflWaffles power and Pack-a-Punch
  const EV = { id: E, title: 'The Final Reich casual main quest (Fireworks)', ch: 'MrRoflWaffles', len: '10:33' };
  const HV = { id: H, title: 'The Final Reich hardcore main quest (Dark Reunion)', ch: 'MrRoflWaffles', len: '25:21' };
  const PV = { id: P, title: 'The Final Reich power and Pack-a-Punch', ch: 'MrRoflWaffles', len: '4:54' };
  const BV = { id: 'VSqV1KvVH6I', title: 'Tesla Gun upgrade: Bloodthirst', ch: 'MrRoflWaffles', len: '6:28' };
  const UV = { id: 'qHwXsDO_odc', title: 'Tesla Gun upgrade: Hurricane', ch: 'MrRoflWaffles', len: '5:10' };
  const MV = { id: 'sOo8UQph9Lo', title: 'Tesla Gun upgrade: Midnight', ch: 'MrRoflWaffles', len: '3:55' };
  const RV = { id: 'of8gqc5PkW8', title: 'Tesla Gun upgrade: Reaper', ch: 'MrRoflWaffles', len: '5:57' };
  const rods = () => ({ t: 'Finish the lightning rod defence of the casual quest first', needs: ['fireworks'], d: 'The battery can\'t go into its machine until the rods at the Tower are raised.' });

  ZG.addMap({
    game: 'wwii', id: 'the-final-reich', order: 1,
    name: 'The Final Reich', dlc: 'Launch map', eeName: 'Fireworks (casual) / Dark Reunion (hardcore)',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Tesla Gun', 'Hilt of Barbarossa', 'Panzermörder'],
    blurb: 'A snowy Bavarian village called Mittelburg, sitting on top of a Nazi research bunker. Build the Tesla Gun, power two ancient machines and pull the hilt of Barbarossa\'s sword free. A harder version of the quest saves Klaus.',
    quick: [
      ['Casual quest', 'Fireworks (solo or co-op, with on-screen hints)'],
      ['Hardcore quest', 'Dark Reunion (needs all four Tesla Gun upgrades)'],
      ['Wonder weapon', 'Tesla Gun (free during the quest) + 4 upgrades'],
      ['Boss', 'The Panzermörder, with a zeppelin overhead'],
    ],
    intro: {
      start: 'New to WWII zombies? Read the basics first: points, perks and armour all have new names. Power and Pack-a-Punch are both a short walk from spawn.',
      weapons: 'The Tesla Gun is built during the casual quest. Its four upgrades all need the lightning rod step of that quest done first, and Dark Reunion needs all four.',
      'easter-egg': 'Two separate checklists. Fireworks is the casual quest and shows hints in your notebook. Dark Reunion is the hardcore one: it uses most Fireworks steps plus extra ones, then changes the ending. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'wwii-basics', tab: 'start', type: 'Primer', name: 'WWII zombies basics', short: 'WWII basics',
        summary: 'Sledgehammer\'s zombies mode renames most of the classic features. This is what\'s what, and it applies to all five WWII maps.',
        blocks: [
          { list: [
            'Points are called **Jolts**. Wall weapons are in **weapon lockers**, and there\'s a Mystery Box.',
            'Perks are **Blitz** machines: **Lebenblitz** (faster revives; on solo it revives you, up to three times), **Kugelblitz** (more damage and fire rate, like Double Tap), **Laufenblitz** (faster sprint that never runs out), **Faustblitz** (double melee damage), **Schildblitz** (electric blast when you reload, like Electric Cherry) and **Schnellblitz** (faster reload, like Speed Cola).',
            '**Geistschild** machines sell armour: each point lets you survive one hit that would down you. The price goes up every time you buy.',
            'Pack-a-Punch is the **Ubersprengen** (5,000). After that it refills an upgraded gun\'s ammo for 4,000.',
            'Your loadout gives you a **special ability** (Shellshock, Camouflage, Frontline and so on) that charges as you kill. Mods in the loadout change how it works.',
            'The **Jack-in-the-Box** is the Monkey Bomb: it pulls zombies away for a few seconds.',
            'Special zombies: **Pests** (fast, covered in flies; a Pest round comes every few rounds), **Bombers** (bomb on the back), **Wüstlings** (huge, with a club arm, they charge you) and **Brenners** (flamethrowers; shoot the tank on the back). A Brenner\'s head works as a torch that shows hidden things.',
          ] },
          { tip: 'On the casual quest the game shows your next objective in the notebook (the pause screen), so you\'re never completely stuck.' },
        ],
      },
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn three gas valves to light the pilot light, drop into the hole it clears and switch on the generator. Pack-a-Punch is in the sewers and opens once you ride all three disposal tubes.',
        video: PV,
        steps: [
          { w: 0, anyList: 'Valves in any order', t: 'Turn the three gas valves around the Village Square', d: 'Hold interact on each. Follow the cables from the generator in the square if you can\'t find them:', list: [
            'Behind the Geistschild machine.',
            'Left of the bunker (Command Room) door.',
            'A bit further on, past the Riverside door.',
          ], imgs: [{ src: I + 'valve.webp', cap: 'The gas valve behind the Geistschild machine' }] },
          { w: 15, t: 'Light the pilot light over the hole in the square', d: 'The fire blows the barricades off the hole and a few burning Pests crawl out. Kill them.' },
          { w: 31, t: 'Drop into the hole and switch on the generator', d: 'Walk up the slope in the tunnel. Powered doors (including the bunker door) can now be bought.' },
          { w: 47, t: 'In the Sewers, press the red button in the bloody room', d: 'Through the door in the tunnel, then right. The machine in the middle of the room is the Ubersprengen, still covered.' },
          { w: 62, anyList: 'Tubes in any order', t: 'Ride all three disposal tubes and press the button at the end of each', d: '250 each. The cover over the machine lifts a little each time.', list: [
            'Command Room: on the right as you go up the stairs.',
            'Laboratory: next to the electric trap.',
            'Near the Tower: through the Pub, just left of the Tower.',
          ] },
          { w: 123, t: 'Pack-a-Punch is open', d: '5,000 per weapon.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'tesla', tab: 'weapons', type: 'Wonder weapon', name: 'Tesla Gun', img: I + 'tesla.webp', color: 'lightning',
        summary: 'Fires an electric ball that stuns everything it splashes, then hits them again with a bigger shock a few seconds later. Small magazine, so don\'t rely on it alone.',
        facts: [['Get it', 'Free, built during the casual quest'], ['Upgrades', 'Bloodthirst, Hurricane, Midnight, Reaper'], ['Build at', 'Weapon Assembly Station, Command Room']],
        video: EV,
        steps: [
          { w: 80, t: 'Open the Salt Mine and take the hilt in the Emperor\'s Chamber', needs: ['fireworks'], d: 'Steps 1 to 4 of the casual quest.' },
          { w: 111, t: 'Escort the Geistkraft device to the Laboratory machine', d: 'It needs kills in its red circle to keep moving. The machine makes the barrel.' },
          { w: 172, t: 'Escort it again to the Morgue machine', d: 'That makes the core.' },
          { w: 218, t: 'Build it at the Weapon Assembly Station', d: 'If you swap it away, take it back from the station with the same ammo.' },
        ],
      },
      {
        id: 'bloodthirst', tab: 'weapons', type: 'Tesla Gun upgrade', name: 'Bloodthirst', color: 'red',
        summary: 'Stuns zombies, then makes them explode and hurt whatever is next to them.',
        facts: [['Battery', 'Lit streetlights, then Pests in the Morgue trap'], ['Machine', 'Morgue, left slot']],
        video: BV,
        steps: [
          { t: 'Build the Tesla Gun', needs: ['tesla'] },
          { w: 30, t: 'Follow the flickering streetlights with the Tesla Gun', d: 'Start at the flickering light outside the Courtyard. Shoot it once: the next light starts sparking. Shoot each light **only once**, in the order they light up (about 27 of them), down to the lowest floor of the Morgue.', tip: 'Lose track or double-hit one? Go back to the first light and start again. Opening doors mid-run has broken it for some players.' },
          { w: 106, t: 'Put the battery that drops into the holder next to it' },
          { w: 136, t: 'Kill Pests with the Morgue (spike) trap next to the battery', d: 'On a Pest round, bring as many as you can right up to the holder. When it glows green, start the trap. Red arcs mean it\'s charging; it can take two or three Pest rounds.' },
          rods(),
          { w: 243, t: 'Put the battery in the left slot of the Morgue machine and defend it', d: 'The machine that made the Tesla core. Hold interact to start the lockdown and keep zombies off it.' },
          { w: 306, t: 'Take the part and build Bloodthirst at the assembly station', d: 'Put the Tesla Gun on its table.' },
        ],
      },
      {
        id: 'hurricane', tab: 'weapons', type: 'Tesla Gun upgrade', name: 'Hurricane', color: 'void',
        summary: 'A very slow ball that drifts through zombies and keeps damaging everything around it after it stops.',
        facts: [['Battery', 'A Bomber blows a locker open; Wüstlings in the Laboratory trap'], ['Machine', 'Laboratory, right slot']],
        video: UV,
        steps: [
          { t: 'Build the Tesla Gun', needs: ['tesla'] },
          { w: 46, t: 'Blow open the locker on the Laboratory stairs with a Bomber', d: 'Lead a Bomber with its bomb still on to the locker near the disposal tube and let it go off next to it.', tip: 'Keep one of the Bombers from the Salt Mine alive and walk it over. Otherwise wait for one from about round 10.' },
          { w: 62, t: 'Put the battery in the holder in the middle of the Laboratory trap' },
          { w: 93, t: 'Kill Wüstlings in the trap', d: 'Get two (or more) in the trap together. When the holder\'s base glows green, start the trap. It usually takes two or three pairs.' },
          rods(),
          { w: 186, t: 'Put the battery in the right slot of the Laboratory machine and defend it', d: 'Once per round.' },
          { w: 249, t: 'Take the part and build Hurricane at the assembly station' },
        ],
      },
      {
        id: 'midnight', tab: 'weapons', type: 'Tesla Gun upgrade', name: 'Midnight', img: I + 'midnight.webp', color: 'green',
        summary: 'A slow green mist that passes through zombies and kills almost anything it touches. The easiest upgrade.',
        facts: [['Battery', 'Brenner head on a Courtyard statue; zombies in the S-Mine trap'], ['Machine', 'Laboratory, left slot']],
        video: MV,
        steps: [
          { t: 'Build the Tesla Gun', needs: ['tesla'] },
          { w: 31, t: 'Shine a Brenner head on the Courtyard statue, then shoot the battery out', d: 'Aim the head at the statue (aim button) and it breaks. Shoot the battery with the Tesla Gun to knock it down.' },
          { w: 47, t: 'Put it in the holder next to it and kill a horde with the S-Mine trap', d: 'Five or more normal zombies near the holder, then start the trap. It sparks when charged.' },
          rods(),
          { w: 108, t: 'Put the battery in the left slot of the Laboratory machine and defend it' },
          { w: 171, t: 'Take the part and build Midnight at the assembly station' },
        ],
      },
      {
        id: 'reaper', tab: 'weapons', type: 'Tesla Gun upgrade', name: 'Reaper', color: 'gold',
        summary: 'Stuns its target, which then runs at the nearest zombie and explodes.',
        facts: [['Battery', 'A Wüstling opens a locker; Bombers in the Sewers saw trap'], ['Machine', 'Morgue, right slot']],
        video: RV,
        steps: [
          { t: 'Build the Tesla Gun', needs: ['tesla'] },
          { w: 46, t: 'Get a Wüstling to break the locker in the Pack-a-Punch room', d: 'Stand in front of the locker and let it charge or swipe at you there.', tip: 'A Wüstling\'s swipe takes health, not armour, but avoid other hits while you wait.' },
          { w: 77, t: 'Put the battery in the holder by the trap switch at the room\'s entrance' },
          { w: 92, t: 'Kill Bombers with the saw trap right next to the holder', d: 'At least two, very close to the holder, while its light is green. Don\'t get near them or they blow up early. This is the fiddliest upgrade.' },
          rods(),
          { w: 199, t: 'Put the battery in the right slot of the Morgue machine and defend it', d: 'The Morgue is cramped; an upgraded Tesla from the Laboratory makes this much easier.' },
          { w: 279, t: 'Take the part and build Reaper at the assembly station' },
        ],
      },
      {
        id: 'red-talon', tab: 'weapons', type: 'Melee weapon', name: 'Red Talon', img: I + 'talon.webp', color: 'red',
        summary: 'A sword earned in Dark Reunion. You need it to charge the gramophone in the Pub. It has a swing and a stronger heavy attack.',
        facts: [['Get it', 'Dark Reunion, after the two safes'], ['Found', 'Barbarossa statue, Emperor\'s Chamber']],
        steps: [
          { t: 'Follow Dark Reunion up to the safes', needs: ['dark-reunion'] },
          { w: [H, 762], t: 'Put both coin halves at the statue\'s feet and take the sword', imgs: [{ src: I + 'statue.webp', cap: 'The Barbarossa statue at the back of the Emperor\'s Chamber' }] },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'fireworks', tab: 'easter-egg', type: 'Main Easter Egg · Casual', name: 'Fireworks', short: 'Casual quest',
        summary: 'Power the bunker, build the Tesla Gun, wake the two Hands of God and tune the Voice of God to free the hilt of Barbarossa\'s sword. Then fight the Panzermörder.',
        facts: [['Players', 'Solo or co-op'], ['Reward', 'Achievement, ending cutscene'], ['Boss', 'Panzermörder (Klaus, fused into a machine)']],
        video: EV,
        steps: [
          { w: 0, t: 'Turn the three gas valves and light the pilot light', needs: ['power-pap'] },
          { w: 32, t: 'Drop into the hole, turn on the generator and open the bunker', d: 'The Command Room door is in the Village Square.' },
          { w: 49, t: 'Flip the two power switches quickly, one after the other', d: 'One in the Morgue (behind the STG44 locker), one in the Laboratory (right of the Geistschild machine). Both have a timer, so run straight from one to the other. The Salt Mine door can then be bought.' },
          { w: 80, t: 'Go down the Salt Mine and touch the hilt', d: 'Bombers wait in the tunnel. In the Emperor\'s Chamber, interact with the floating hilt and get kills in the red circle.', imgs: [{ src: I + 'rhog.webp', cap: 'The Right Hand of God in the Emperor\'s Chamber' }] },
          { w: 111, t: 'Turn the crank in the Command Room', d: 'Opens the canopy so the Geistkraft device can come up.' },
          { w: 126, t: 'Press the red button behind the Weapon Assembly Station and escort the device', d: 'Upstairs in the Command Room. Lights go out. Get kills in the device\'s red circle; it stops a few times. It goes to the Laboratory machine (Tesla barrel), then back and on to the Morgue machine (core).' },
          { w: 202, t: 'Kill the Brenner at the assembly station and keep its head', d: 'It jumps down in flames when you come back. Shoot the tank on its back. Its head is a torch you\'ll need later.' },
          { w: 218, t: 'Build the Tesla Gun, then interact with the Right Hand of God', needs: ['tesla'], d: 'It needs more power.' },
          { w: 233, t: 'Route power to the Tower with the four colour switches', d: 'Press the panel in the Command Room and note its four colours, left to right. Then set switches 1 to 4 to those colours, fast:', ol: [
            'Next to the panel.',
            'Just outside the Morgue door into the Sewers.',
            'In the tunnel from the Sewers to Riverside, before the wooden stairs.',
            'Next to the Tower door (go through the Pub).',
          ], tip: 'Ran out of time? Press the panel again; the colours stay the same.', imgs: [{ src: I + 'panel.webp', cap: 'The panel and switch 1' }] },
          { w: 296, t: 'Defend the lightning rods at the Tower', d: 'Turn the crank in the middle and defend the centre rod for about a minute, then both side rods together. Rounds keep going without a break. Lightning hits the Tower when it\'s done.', tip: 'A Pack-a-Punched gun or the Tesla Gun (it stuns Wüstlings) helps a lot.' },
          { w: 342, t: 'Turn on the Right Hand of God', d: 'Then go back up: a zeppelin is now circling the village.' },
          { w: 358, t: 'Shoot down a battery from the zeppelin and charge it', d: 'Focus fire on one of its yellow lights until it bursts. A battery case drops; get kills next to it until a handheld battery pops out.' },
          { w: 389, t: 'Carry it to the Left Hand of God — three times', d: 'In the Emperor\'s Chamber. You can\'t shoot while carrying it, and you\'re slow. The zeppelin comes back after a round. One of the drops is a fake: the zeppelin pulls it back up, so shoot down another.' },
          { w: 436, t: 'Shine the Brenner head on four paintings', d: 'Each shows a bird (facing towards you, away, left or right) and a Roman numeral. Note all four pairs. They\'re different every game.', list: [
            'The Morgue, a little past the Sewers door.',
            'The Sewers, near the Riverside door.',
            'The Courtyard.',
            'The Pub.',
          ], imgs: [{ src: I + 'painting.webp', cap: 'The Morgue painting under the Brenner head' }] },
          { w: 498, t: 'Set the Voice of God and confirm', d: 'The machine in the middle of the Emperor\'s Chamber: set each bird to its number, then press the button on the front. A wrong answer locks it for a while.', warn: 'Going for Dark Reunion? Stop here and switch to that checklist. Freeing the hilt now locks Dark Reunion out.' },
          { w: 514, t: 'Shoot the shield around the hilt with Tesla Guns, all at once', d: 'Everyone fires together. Take the hilt: it teleports you to the boss.' },
          { w: 545, t: 'Beat the Panzermörder', d: 'You\'re kept to a ring around the village top. Shoot a battery off the zeppelin, charge it with kills, then shoot the Panzermörder until it drops to one knee. You have about three seconds to put the battery on its leg. Do it three times.', tip: 'Every hit from it takes a whole point of Geistschild. Stun it near the battery so you don\'t have to carry it far.', imgs: [{ src: I + 'panzer.webp', cap: 'The Panzermörder' }] },
        ],
      },
      {
        id: 'dark-reunion', tab: 'easter-egg', type: 'Main Easter Egg · Hardcore', name: 'Dark Reunion', short: 'Hardcore quest',
        summary: 'The full version: everything from Fireworks plus a hidden record, the Red Talon sword, a second Voice of God tone and all four Tesla upgrades. Klaus survives the ending.',
        facts: [['Players', 'Solo or co-op (all four upgrades either way)'], ['Reward', 'Every Blitz, kept for the rest of the game'], ['Boss', 'A harder Panzermörder fight']],
        prep: [
          { t: 'All four Tesla Gun upgrades by the chandelier step', needs: ['bloodthirst', 'hurricane', 'midnight', 'reaper'], d: 'On solo, swap between them at the assembly station.' },
          { t: 'A Brenner head on hand for the coil and safes' },
        ],
        video: HV,
        steps: [
          { w: 108, t: 'Shoot down the three spinning tops', d: 'A red, a green and a yellow-orange top sit on rooftops and window ledges around the village. Shoot each one down and pick it up. Do this from round one.' },
          { w: 141, t: 'Put the tops in the toy shop window by the bunker door' },
          { w: 188, t: 'Find a codex and set the tops like clock hands', d: 'Codices (Enigma rotors) sit in zombie spawn windows and on roofs. Each has a coloured bow and a number: that\'s the hour for the top of that colour (arrow up is 12, right is 3, down is 6, left is 9). A record pops out of the drawer under the window.', tip: 'Only found one? Set its top, then for each hour of the second top, spin the third all the way round. The record comes out on the right combination.' },
          { w: 329, t: 'Do Fireworks up to the lightning rods', needs: ['fireworks', 'tesla'], d: 'Valves, power, Salt Mine, hilt, both escorts, Brenner, Tesla Gun, colour switches and the rod defence.', tip: 'Keep a Bomber from the Salt Mine alive for the Hurricane locker.' },
          { w: 635, t: 'Turn on the Right Hand of God', d: 'The rods also unlock all four Tesla upgrades. Shoot the zeppelin whenever you\'re just burning rounds.' },
          { w: 682, t: 'Flip the Morgue and Laboratory switches again, then the new switch by the Salt Mine entrance', d: 'A door opens on a set of coils.' },
          { w: 697, t: 'Shoot the coils with a Tesla Gun, then shine the Brenner head on two safes', d: 'Have the head close by first. New panels open by the Morgue and Laboratory entrances. Shine the head on each safe.' },
          { w: 745, t: 'Turn each safe\'s dials until every digit shows a blue fingerprint', d: 'Each safe holds half a coin.' },
          { w: 762, t: 'Put the coin halves at the Barbarossa statue and take the Red Talon', needs: ['red-talon'] },
          { w: 777, t: 'Interact with the gold weather vane in Riverside and shoot the spark it points to', d: 'By the water wheels. Look exactly where it points: a tiny yellow spark appears on a wall. Shoot it with a normal gun.' },
          { w: 824, t: 'Shoot the new coils on the water wheel with a Tesla Gun', d: 'This powers the Pub. Give it another shot if it doesn\'t take.' },
          { w: 840, t: 'Put the record on the Pub gramophone and kill zombies next to it with the Red Talon', d: 'Lots of kills, fast, right next to it. Red arcs show it\'s working. Pest rounds work well; Faustblitz helps.' },
          { w: 980, t: 'Note the four numbers it taps out', d: 'When the arcs stop, the tune changes. Listen for the taps, or watch the light on its side: green blinks count each number, red means the sequence restarts.' },
          { w: 1046, t: 'Do the zeppelin batteries and the first Voice of God tone', needs: ['fireworks'], d: 'Three batteries into the Left Hand of God, the four paintings, then confirm the bird tone.', warn: 'Don\'t shoot the hilt with Tesla Guns yet.' },
          { w: 1170, t: 'Enter the gramophone numbers on the Voice of God and confirm', d: 'Face the confirm button. Start with the slot to its left and go clockwise, one number each.' },
          { w: 1201, t: 'Shoot the chandelier above the hilt once with each Tesla upgrade', needs: ['bloodthirst', 'hurricane', 'midnight', 'reaper'], warn: 'Don\'t hit the hilt by accident; that starts the normal ending.' },
          { w: 1249, t: 'Now shoot the hilt\'s shield together and take the hilt', d: 'About 10 to 15 seconds later you\'re taken to the fight.' },
          { w: 1280, t: 'Beat the Panzermörder again, the hard way', d: 'Same as before, but the zeppelin\'s lights keep moving (a Pack-a-Punched machine gun helps) and it fires rockets. You get about two seconds to put each battery on. Do it until the zeppelin and Panzermörder go down; Brenners join in.', tip: 'Keep moving clockwise around the ring.' },
          { w: 1451, t: 'Klaus gets up: stay close', d: 'Near him you get unlimited ammo and your Geistschild refills. You get every Blitz in the map, and they stay for the rest of the game.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'bunker-tips', tab: 'side', type: 'Map tips', name: 'Things worth knowing',
        summary: 'Small things that make the map easier.',
        blocks: [
          { list: [
            'Keep the Brenner head: it\'s used for the paintings, Midnight, and the Dark Reunion safes.',
            'The disposal tubes are also shortcuts to the Sewers once Pack-a-Punch is open.',
            'Lost the Geistkraft device or a battery? Hold the scoreboard button (the touchpad on PlayStation): quest items show through walls.',
          ] },
        ],
      },
    ],
  });
})();
