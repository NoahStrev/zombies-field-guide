/* The Darkest Shore — Call of Duty: WWII, The Resistance DLC */
(() => {
  const I = 'assets/img/wwii/the-darkest-shore/';
  const E = 'QUfl3uQ9rQw'; // MrRoflWaffles easter egg guide
  const EV = { id: E, title: 'The Darkest Shore easter egg guide', ch: 'MrRoflWaffles', len: '27:38' };
  const PV = { id: 'kmTXQFsVsVk', title: 'The Darkest Shore power and Pack-a-Punch', ch: 'MrRoflWaffles', len: '4:40' };
  const RV = { id: '-VwvvpZhbg8', title: 'How to build and upgrade the Ripsaw', ch: 'MrRoflWaffles', len: '3:36' };
  const XV = { id: 'InUcXljCKRE', title: 'How to Pack-a-Punch the Ripsaw (R.I.P. Saw)', ch: 'MrRoflWaffles', len: '5:37' };

  ZG.addMap({
    game: 'wwii', id: 'the-darkest-shore', order: 2,
    name: 'The Darkest Shore', dlc: 'The Resistance (DLC 1)', eeName: 'Making History',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Ripsaw', 'Pommel of Barbarossa', 'Minecarts'],
    blurb: 'A fogged-in island fortress in the North Sea, full of cliffside bunkers and U-boat pens. Build the Ripsaw, call in an Allied bombardment, and solve a monk\'s three riddles to win the pommel of Barbarossa\'s sword.',
    quick: [
      ['Main EE', 'Making History (solo or co-op)'],
      ['Wonder weapon', 'Ripsaw (build + upgrade) → R.I.P. Saw at Pack-a-Punch'],
      ['Key items', 'The monk\'s head, three stone idols, three sacrifices'],
      ['Boss', 'A glowing Meuchler, fought in three places'],
    ],
    intro: {
      start: 'You land on the beach and have to clear a swarm before round 1 starts; the two mounted MG 42s help. WWII rules are explained in the basics on The Final Reich. Minecarts link the beach, the top of the island and the U-boat pens.',
      weapons: 'The quest needs the upgraded Ripsaw (it fires saw blades). Pack-a-Punching it to the R.I.P. Saw is optional but lets you buy saw ammo.',
      'easter-egg': 'Two halves: an Allied bombardment (planes, an artillery escort and ships) and the monk\'s riddles for the pommel. Both are needed before the boss. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Two power switches: one for the facility and one in the Artillery Bunker. Pack-a-Punch rises out of a lift in Bunker 3 once you collect three fuses from the minecart tunnels.',
        video: PV,
        steps: [
          { w: 0, t: 'Turn on the facility power', d: 'In the red room on the left after you climb the cliff (also reachable up the stairs from the U-Boat Pens).' },
          { w: 15, t: 'Turn on the second switch in the Artillery Bunker', d: 'Go in and take a left: it\'s straight ahead.' },
          { w: 45, t: 'Press the fuse already in the lift machine in Bunker 3', d: 'Past the MP-40 locker. It holds four fuses (Elektroschnalle) and has one.' },
          { w: 75, anyList: 'Tunnels in any order', t: 'Ride the minecarts and grab the three green fuses on the way', d: 'Use the switch by each minecart to pick where it goes. One fuse is on each route:', list: [
            'Top of the island ↔ U-Boat Pens.',
            'U-Boat Pens ↔ Beach (this one\'s on the floor).',
            'Top of the island ↔ Beach.',
          ], warn: 'Bombers wait in the tunnels and blow up on you if you get close.' },
          { w: 202, t: 'Put the three fuses in the lift machine', d: 'Pack-a-Punch rises up. 5,000 per weapon; after that it sells ammo for upgraded guns.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'ripsaw', tab: 'weapons', type: 'Wonder weapon', name: 'Ripsaw', img: I + 'ripsaw.webp', color: 'red',
        summary: 'A buzzsaw built on a broken Tesla Gun frame. At first it only cuts up close. Upgraded, it fires saw blades that bounce off walls and go through zombies. Sprint and charge with it to rip out a zombie\'s spine.',
        facts: [['Cost', '2,500 to buy, 500 more for the upgrade'], ['Build at', 'Table in the hallway between the U-Boat Pens and the Bluffs'], ['Pack-a-Punched', 'R.I.P. Saw']],
        video: RV,
        steps: [
          { w: 0, t: 'Turn on both power switches', needs: ['power-pap'] },
          { w: 31, t: 'Take the handle from the Artillery Bunker', d: 'One of three spots: by the gramophone in the corner, by the bunk beds, or on the table near the Blitz machine.' },
          { w: 63, t: 'Take the saw blade in Bunker 3', d: 'On a corpse next to the Pack-a-Punch fuse machine, near the MP-40 locker.' },
          { w: 80, t: 'Build it at the table and buy it (2,500)', d: 'The table is in the hallway by the facility power switch.' },
          { w: 126, t: 'Harvest a charged spine from a normal zombie', d: 'Heavy melee a zombie and hold interact to rip out its spine. You want one that glows red. The U-Boat Pens are a good place to farm.' },
          { w: 141, t: 'Put the spine on the table and kill about 30 zombies nearby', d: 'Somewhere between 20 and 30 kills.' },
          { w: 158, t: 'Take the upgraded Ripsaw', d: 'Infuse it, then pick it up (500 more). It now fires over 20 saw blades.', tip: 'From now on, harvest spines by sprinting into a zombie and charging it with the Ripsaw.' },
        ],
        upgrade: {
          name: 'R.I.P. Saw', img: I + 'ripsaw2.webp',
          summary: 'Pack-a-Punch the Ripsaw by shelling the sea with the artillery gun. More damage and ammo, and the machine refills its blades for 4,000.',
          video: XV,
          steps: [
            { w: 18, t: 'Find the six Enigma rotors', d: 'Each has six slots with one wheel showing a number or a +. Note the symbol and which slot (1 to 6, left to right) it\'s in. Read the number on the front, not the top.', list: [
              'In the window on the way down to the beach.',
              'Under the floorboards on the cliff walk.',
              'By the facility power switch.',
              'By the flak gun near Kugelblitz.',
              'On a shelf in the bunk room of the Artillery Bunker.',
              'Elsewhere in that same bunker.',
            ] },
            { w: 131, t: 'Charge the artillery gun', needs: ['ee'], d: 'Do the main quest up to escorting the shell carrier and charging its battery. That gives the gun ammunition.' },
            { w: 161, t: 'Put the symbols in slot order and aim the gun', d: 'You get two coordinates of a sign and two digits each (for example +05 and +00). Set the gun to them and fire.' },
            { w: 191, t: 'A fuse drops from the gun: Pack-a-Punch the Ripsaw', d: 'No need to place the fuse anywhere. Just take the Ripsaw to the machine.' },
          ],
        },
      },
      {
        id: 'pommel', tab: 'weapons', type: 'Quest item', name: 'Pommel of Barbarossa', img: I + 'pommel.webp', color: 'gold',
        summary: 'Earned from the monk\'s riddles. It replaces your Jack-in-the-Boxes: throw it and it lands with a shockwave that stuns big zombies, then recharges. Everyone should take one before the boss.',
        facts: [['Get it', 'The final monk lockdown in the main quest'], ['Use', 'Stuns the Meuchler during the boss']],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Making History',
        summary: 'Wake the corpse in the U-Boat Pens, call in the Allies (planes, an artillery escort, a radio and enemy ships), then get the pommel from the monk\'s three sacrifices and fight a glowing Meuchler across the island. The Allies part (steps 5–9) and the pommel part (steps 10–21) can be done in either order; the boss needs both.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Achievement, ending cutscene'],
          ['Boss', 'A glowing Meuchler (three stages)'],
        ],
        prep: [
          { t: 'Power on and Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'The upgraded Ripsaw', needs: ['ripsaw'] },
          { t: 'Shellshock or Camouflage as your special ability helps a lot' },
        ],
        video: EV,
        steps: [
          { w: 77, t: 'Cut the head off the corpse hanging outside Bunker 3', d: 'Shoot a saw blade at its neck and pick up the head.' },
          { w: 92, t: 'Put the head on the corpse chained to the wall in the U-Boat Pens', d: 'Then kill zombies next to it to charge it.', tip: 'Armour, a good gun and a full special meter first: a lockdown starts when it\'s full.' },
          { w: 123, t: 'Survive the lockdown and turn the three gas valves', d: 'Patches of floor catch fire. When the flames by a valve go out, hold interact on it. Takes a minute or two. Teammates outside can jump the barrier to help.' },
          { w: 154, t: 'Kill the Brenner that comes out of the small room', d: 'Shoot the tanks on its back. This room (behind the corpse gate) is where the monk will go later.' },
          { w: 186, t: 'Shoot down planes with the flak cannons', d: 'Leave the button in the small room for now. Jump on the new flak guns up top and shoot down strafing planes for about a minute, until the game says you got one.', imgs: [{ src: I + 'flak.webp', cap: 'A flak gun' }] },
          { w: 217, t: 'Press the button in the small room and escort the shell carrier', d: 'A carrier climbs out of the pit with a shell. Protect it (it\'s weak) all the way up to Faustblitz by the big artillery gun.', tip: 'It sometimes falls through the floor. Press the button again, or wait a round.' },
          { w: 263, t: 'Charge its battery next to the artillery gun with kills' },
          { w: 278, t: 'Pick up both radio parts', list: [
            'On a corpse between Kugelblitz and Laufenblitz, coming up the slope.',
            'After the planes: at the cliff with the plane wreck, shoot the hand hanging out with the Ripsaw; it drops a metal box.',
          ] },
          { w: 310, t: 'Build the radio on the table, then sink the ships with the artillery gun', d: 'Straub sends ships that shell the island. Aim with the controls either side of the fire button. Get more kills to recharge shells if you run out.', tip: 'Turn on subtitles: your character says "aim higher" or "aim lower". Build the radio only when you\'re ready to shoot.' },
          { w: 420, t: 'Let a Bomber blow open the wall in the minecart tunnel', d: 'Ride between the beach and the top of the island. Don\'t kill the Bombers that appear in the tunnel: one has to blow a hole in the wall at the junction (on your right going down).' },
          { w: 465, t: 'Hold interact on the hole as you ride past to enter the secret chamber' },
          { w: 481, t: 'Take the monk\'s head from the rocks and put it in the small room', d: 'On the far wall of the chamber. In the small room it sets you three riddles; first you need three stone idols.' },
          { w: 514, any: 'Idols in any order', t: 'Idol 1: shoot the rock below the flak gun by the artillery gun', d: 'Aim as low as you can. The idol lands on the beach. Put each idol in the wall of the secret chamber.' },
          { w: 560, any: 'Idols in any order', t: 'Idol 2: give the monk a charged zombie spine', d: 'Drop it in the bucket before its timer runs out (bottom left). A zombie walks into the sea and comes back with the idol; keep it alive.' },
          { w: 623, any: 'Idols in any order', t: 'Idol 3: shoot red rocks off the cliffs with the Ripsaw', d: 'Small red blobs stuck to the cliff faces. One of them drops the idol; you may need to break four or five. Try the cliffs near Pack-a-Punch, by the flak gun near Kugelblitz and along the misty cliff.' },
          { w: 747, t: 'Kill the three Meuchlers behind the idol wall and take a spine', d: 'Placing the last idol opens a cavity. A charged Meuchler spine saves waiting for a later round.', imgs: [{ src: I + 'meuchler.webp', cap: 'A Meuchler' }] },
          { w: 778, any: 'Sacrifices in any order', t: 'Sacrifice 1: put the Meuchler spine in the bucket and protect your Meuchler', d: 'Fog rolls in. Listen for screams, find your Meuchler being attacked, clear the zombies and shoot it to get it moving. Do this four or five times, then the monk speaks.', tip: 'Common spots: the beach, by the artillery gun, and left of Pack-a-Punch.' },
          { w: 900, any: 'Sacrifices in any order', t: '…then kill it in the secret chamber and hang its head', d: 'Go to the statue in the chamber: a lockdown starts. Kill the sacrifice, take its head and hang it on a hook.' },
          { w: 946, any: 'Sacrifices in any order', t: 'Sacrifice 2: a charged Pest spine, then ricochet saw blades into it', d: 'A glowing Pest runs a fixed route. Open the fuse boxes around the map (in the U-Boat Pens, by the power switch, at Bunker 3, up by the artillery gun) and bounce Ripsaw blades off the fuses so they hit it at each stop. Then kill it in a chamber lockdown and hang its head.', tip: 'This is easiest following the video. A max ammo helps.' },
          { w: 1162, any: 'Sacrifices in any order', t: 'Sacrifice 3: a Wüstling spine, then lead it to four Blitz machines in order', d: 'It follows you. Walk it to Kugelblitz, Faustblitz, Laufenblitz, then Lebenblitz. Stay away from Schnellblitz and don\'t pass the others early. It runs into the crack in the waterfall. Kill it in a chamber lockdown and hang its head.', warn: 'This step can glitch (it gets stuck or dies). Try again with a new spine.' },
          { w: 1337, t: 'Hang the monk\'s head on the last hook and fill the basin', d: 'Another lockdown: the statue cries blood into the basin. When it\'s full you get the pommel.', needs: ['pommel'] },
          { w: 1384, key: 'get-ready-then-touch-the-radio', t: 'Throw a pommel at the radio, get ready, then touch it', d: 'The pommel switches the radio on. Touching it then takes you straight to the boss, so first get full armour, Pack-a-Punch, a full special meter, and everyone holding a pommel.', tip: 'Buy Blitz in the order you can most afford to lose: Schnellblitz first, Kugelblitz last. You lose them in purchase order when you go down.' },
          { w: 1478, t: 'Kill the glowing Meuchler: beach area', d: 'Throw pommels at it to stun it, then hit it hard. Use Shellshock or Camouflage when it gets busy. When it dies you get a max ammo.' },
          { w: 1508, t: 'Take the minecart to the U-Boat Pens and kill it again', d: 'The floor here can be on fire.' },
          { w: 1586, t: 'Minecart to the beach and finish it', d: 'Lots of Meuchlers at once. Focus the glowing one; the cutscene plays about ten seconds after it dies.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'minecart-tips', tab: 'side', type: 'Map tips', name: 'Things worth knowing',
        summary: 'Small things that make the map easier.',
        blocks: [
          { list: [
            'The minecart switch picks the destination; you can call the cart to you.',
            'Once you have the R.I.P. Saw, Pack-a-Punch refills its blades for 4,000.',
            'The upgraded Ripsaw is the best way to harvest spines: sprint, charge and hold interact.',
          ] },
        ],
      },
    ],
  });
})();
