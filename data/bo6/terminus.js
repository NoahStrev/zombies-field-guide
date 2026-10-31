/* Terminus — Black Ops 6 launch map */
(() => {
  const I = 'assets/img/bo6/terminus/';
  const SE = t => ({ id: 'WpINur8LRH0', title: 'Every side Easter egg in Terminus', ch: 'MrDalekJD', len: '19:39', t }); // MrDalekJD side Easter eggs
  const E = 'tI9dwinLua0'; // MrRoflWaffles easter egg guide
  const P = 'OJccbSoQtBc'; // MrRoflWaffles power and Pack-a-Punch
  const B = 'wNrHOq7sSqw'; // MrRoflWaffles Beamsmasher guide
  const EV = { id: E, title: 'Terminus easter egg guide', ch: 'MrRoflWaffles', len: '12:28' };
  const PV = { id: P, title: 'Terminus power and Pack-a-Punch', ch: 'MrRoflWaffles', len: '2:44' };
  const BV = { id: B, title: 'Free Beamsmasher on Terminus', ch: 'MrRoflWaffles', len: '4:28' };

  ZG.addMap({
    game: 'bo6', id: 'terminus', order: 2,
    name: 'Terminus', dlc: 'Launch map', eeName: "No Mo' Modi",
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Beamsmasher', 'Boats', 'Patient 13 boss'],
    blurb: 'A prison and research site on an island in the Philippine Sea, with boats between the smaller islands. Free Maya\'s brother Nathan, restore communications, stop a nuclear countdown and fight the sea monster Patient 13.',
    quick: [
      ['Main EE', "No Mo' Modi (solo or co-op)"],
      ['Wonder weapon', 'DRI-11 Beamsmasher (free quest)'],
      ['Key items', 'Hard drive, keycard, node connectors, hacking device'],
      ['Boss', 'Patient 13, a giant sea creature'],
    ],
    intro: {
      start: 'Power is three purple AMP generators you defend; then raise the Pack-a-Punch lift from under the water in the Bio Lab. Black Ops 6 rules are explained in the basics on Liberty Falls.',
      weapons: 'The Beamsmasher is needed for the easter egg. Its free quest uses Dead Wire, three laptops, a briefcase and three islands.',
      'easter-egg': 'Two timed parts: the buoy hacking and the five-minute nuke countdown. The boss needs a Legendary, triple Pack-a-Punched gun. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Start and defend three purple AMP generators (they\'re marked on screen). Then dive into the water in the Bio Lab and raise the lift that carries Pack-a-Punch.',
        video: PV,
        steps: [
          { w: 0, any: 'Generators in any order', t: 'AMP generator in spawn', d: 'Hold interact and defend it for 30 seconds (it has a health bar). Fail and you can retry next round.' },
          { w: 30, any: 'Generators in any order', t: 'AMP generator down the stairs', d: 'Down several levels; buy the door into the building on the right. It also powers Juggernog next to it.' },
          { w: 77, any: 'Generators in any order', t: 'AMP generator past the turret area', d: 'Follow the arrows down the walkway and through the tunnels; it\'s on a pad. Watch out for zombies jumping out of tubes.' },
          { w: 125, t: 'Dive in and raise the Pack-a-Punch lift', d: 'Jump into the water and hold interact on the marker. Pack-a-Punch rides up on the lift.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'beamsmasher', tab: 'weapons', type: 'Wonder weapon', name: 'DRI-11 Beamsmasher', short: 'Beamsmasher', img: I + 'beamsmasher.webp', color: 'lightning',
        summary: 'Fires a damaging beam; its alternate fire is a wide beam that slows and stuns a crowd. No upgrade quest: just Pack-a-Punch it. Ammo caches refill it.',
        facts: [['Get it', 'Free quest, Mystery Box or GobbleGums'], ['Upgraded', 'Supersonic Crusher'], ['Build at', 'The machine in Tonovsky\'s lab']],
        video: BV,
        steps: [
          { w: 47, t: 'Turn on power and Pack-a-Punch', needs: ['power-pap'] },
          { w: 62, anyList: 'Laptops in any order', t: 'Activate the three laptops', list: [
            'Below Quick Revive.',
            'Below Stamin-Up.',
            'By the docks, on a small outcrop.',
          ] },
          { w: 77, t: 'Put Dead Wire on a gun', d: 'Buy it with salvage at an Arsenal machine.' },
          { w: 92, t: 'Ride the lift up and shoot the electrical boxes with Dead Wire', d: 'Ride the Pack-a-Punch lift from the bottom to the top. On the way up, shoot the electrical box in the window on the right; the spark jumps to the next box. Shoot that one (in the living quarters by the AMP unit), then the last one on the outside wall by the lab entrance. The lab opens.' },
          { w: 124, t: 'Kill the trapped zombie in the lab and take the fob' },
          { w: 139, t: 'Take the injector from the briefcase in the Sea Tower and put it in the lab machine' },
          { w: 154, t: 'Get the three-number code and enter it on the dials', d: 'Pay Peck 5,000 at the Security Station and he shows the numbers (or solve the symbol puzzle from the three laptops and the note in the office). Enter them in the lab. It "targets" until the next round, then shows an island.' },
          { w: 169, t: 'Feed the orb on that island', d: 'Place the injector under the glowing orb. Zombies spawn, including one glowing the orb\'s colour: kill it over the injector (or carry the energy it drops to the orb). Do it twice.' },
          { w: 216, t: 'Do the same on the next two islands', d: 'The orb moves clockwise to the next island each time. Take the injector with you.' },
          { w: 247, t: 'Build the Beamsmasher in the lab', d: 'With the charged injector, hold interact on the machine.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: "No Mo' Modi",
        summary: 'Get a hard drive out of a tentacle trap, open Nathan\'s pod with a three-digit code and kill what he\'s become, repair two communication lines, hack three buoys, defuse three nukes in five minutes, then defeat Patient 13.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Achievement and calling card'],
          ['Boss', 'Patient 13 (three phases)'],
        ],
        prep: [
          { t: 'Power on and Pack-a-Punch raised', needs: ['power-pap'] },
          { t: 'The Beamsmasher', needs: ['beamsmasher'] },
          { t: 'For the boss: a bullet gun at Pack-a-Punch 3 and Legendary rarity, with an ammo mod (Dead Wire works well)' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 234, t: 'Get the hard drive out of a tentacle trap with the Beamsmasher', needs: ['beamsmasher'], d: 'One tentacle trap holds it (it looks already used, or has a keycard below it). The one in the Bio Lab is a reliable pick. Turn the trap on and sweep the beam along it; the hard drive drops.' },
          { w: 250, t: 'Give the hard drive to Peck', d: 'At the Security Station in spawn, in the box in front of him.' },
          { w: 266, t: 'Interact with Nathan\'s pod in the Bio Lab, then find the code', d: 'The big tube in the middle of the lab. The code is three numbers, in this order:', ol: [
            'The hour hand of the clock in the caged part of the Interrogation room, near Quick Revive.',
            'The playing card on the corkboard in the Mess Hall (an ace is 1).',
            'The "days since last incident" number on the safety sign in Engineering, next to the crafting bench.',
          ] },
          { w: 311, t: 'Enter the code and turn the valves together', d: 'Every player holds interact on a valve at the same time. This starts a fight.' },
          { w: 327, t: 'Kill Nathan', d: 'He\'s a tougher Amalgam. Bring a Pack-a-Punched gun above green rarity.' },
          { w: 344, t: 'Grab the keycard from the water and use the Communications computer', d: 'Jump down after the fight for the keycard. In Communications, hold interact on the computer with green text for a few seconds.' },
          { w: 374, t: 'Get node connectors from the shipwreck', d: 'Take a boat to the shipwreck and climb the ladder under it. Each player takes a cylinder from the table (you can\'t sprint while carrying one). You\'re locked in for about two minutes of zombies; a Max Ammo ends it.' },
          { w: 390, t: 'Repair the two broken pipes', d: 'Two of these three spots are used each game. Hold interact while your team covers you:', list: [
            'Crab Island (the south island), on the shore to the left as you arrive.',
            'In the Speed Cola sea cave, on the right-hand side.',
            'Under the Sea Tower by the docks, near the rope.',
          ] },
          { w: 437, t: 'Take the hacking device from Peck', d: 'It takes about 30 seconds of talk.' },
          { w: 453, t: 'Hack the three buoys before the timer runs out', d: 'One player drives the boat while the hacker jumps out and holds interact at each buoy (about 10 seconds). Circle back to pick them up; the sea monster targets you. A two-minute timer starts after the first one.', list: [
            'Off the east shore of Crab Island, south-east of the Sea Tower.',
            'Between Crab Island and the shipwreck.',
            'Straight east of Temple Island.',
          ], tip: 'Fail and you can simply start again.' },
          { w: 513, t: 'Defuse the three nukes in the Bio Lab (five-minute timer)', d: 'Each takes about 15 seconds of holding interact, and you can do it in parts. Others defend; solo, use a Monkey Bomb or Aether Shroud.', list: [
            'Bottom floor, next to the ammo cache by the stairs up to the Armory.',
            'Bottom floor, by the stairs under the Crafting Table.',
            'Above Melee Macchiato, below the room with the table.',
          ], warn: 'If the timer runs out, the game ends.' },
          { w: 559, t: 'Get ready, then open the door next to Melee Macchiato', d: 'At least one bullet gun at Pack-a-Punch 3 and Legendary rarity, with an ammo mod. Everyone votes to enter.' },
          { w: 607, t: 'Beat Patient 13', d: 'Shoot the glowing red bubbles on his shoulders. He slams the part of the arena in front of him, so stand in another part. Tentacles in the background spit at you; if you get knocked into the water, climb a ladder. Some phases make you shoot the crit spots on his arms or his mouth instead.', tip: 'Survival first. There\'s ammo to buy at the back of the arena.' },
          { w: 701, t: 'Final phase: shoot his eyes', d: 'He blocks off the back and sides. Stay at the back away from his tongue (it downs you), and get behind cover when he charges a big electric blast.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Can You Hear Me? (Come In)"',
        summary: 'Interact with three Mister Peeks headphones.',
        video: SE(824),
        spots: [
          { text: 'Just before the Juggernog room (from the left side), on a big wooden spool next to a lamp.', imgs: [{ src: I + 'spot-song-1.webp', cap: 'Still from MrDalekJD\'s guide video' }] },
          { text: 'In the mining tunnels, on a red barrel across from PhD Flopper.', imgs: [{ src: I + 'spot-song-2.webp', cap: 'Still from MrDalekJD\'s guide video' }] },
          { text: 'In the Bio Lab, in the upstairs office on top of some white cabinets.', imgs: [{ src: I + 'spot-song-3.webp', cap: 'Still from MrDalekJD\'s guide video' }] },
        ],
      },
      {
        id: 'treasure-hunter', tab: 'side', type: 'Side quest', name: 'Treasure Hunter (Cursed Talisman)',
        summary: 'Help a pirate ghost for the Cursed Talisman: extra points for every kill while you wear it (double, says the wiki), but a zombie hit takes Essence (about 1,500) instead of health. Unlocks the "Treasure Hunter" achievement.',
        video: SE(542),
        steps: [
          { w: 546, t: 'Bring Melee Macchiato and three Molotovs' },
          { w: 561, t: 'Punch through the rocks in the Speed Cola sea cave', d: 'Leaving the Bio Lab through the caves, hug the easternmost wall until you see a hole blocked by rocks. Behind it are a pirate skeleton and a map with an X.' },
          { w: 576, t: 'Fetch the watch from the X and bring it to the skeleton', d: 'Take a raft to the X and pick the watch up from underwater.' },
          { w: 607, t: 'Burn three crewmen with Molotovs and kill the Manglers', d: 'Captain Thomas Gregg marks their bones on his map: the Shipwreck, Castle Rock and Temple Island, in any order. A Molotov on each skeleton spawns an elite Mangler that drops a Cursed Coin: take every coin back to Gregg. After the third he gives you three Legendary guns.' },
          { w: 653, t: 'Hold out on Crab Island for three full rounds', d: 'A chest appears in the middle of the island: open it to put the talisman on.' },
        ],
      },
      {
        id: 'perk-cells', tab: 'side', type: 'Free perk', name: 'Free perk: the Bio Lab cells',
        summary: 'In the Bio Lab jail by the glass vats, kill every zombie locked in the cells and end the round. Next round Vermin are in the cells: kill them and end the round. Then Manglers: kill them and a Random Perk appears.',
        video: SE(61),
      },
      {
        id: 'perk-spores', tab: 'side', type: 'Free perk', name: 'Free perk: spore islands',
        summary: 'Take a raft and find a small island covered in green spores; shoot them all and end the round. Do the same at a second and a third island, one per round. Then shoot the spores that appear in the Speed Cola sea cave for a Random Perk.',
        video: SE(134),
      },
      {
        id: 'mega-stuffy', tab: 'side', type: 'Helper', name: 'Mega-Stuffy pet',
        summary: 'Collect six stuffed toys, then hand them to the blue elephant on the bunk bed next to Juggernog in the Living Quarters. They drop some tactical equipment, float to the middle of the room and merge into the Mega-Stuffy: a pet that kills zombies and revives you if you go down in solo.',
        video: SE(185),
        spots: [
          { text: 'Unicorn: in a green locker left of Stamin-Up.', imgs: [{ src: I + 'spot-mega-stuffy-1.webp', cap: 'Unicorn, still from MrDalekJD\'s guide video' }] },
          { text: 'Monkey: in a corner outside the bridge grating between the Sea Tower and Engineering.', imgs: [{ src: I + 'spot-mega-stuffy-2.webp', cap: 'Monkey, still from MrDalekJD\'s guide video' }] },
          { text: 'Elephant: in the Mining Tunnels, behind a pallet left of the GobbleGum machine.', imgs: [{ src: I + 'spot-mega-stuffy-3.webp', cap: 'Elephant, still from MrDalekJD\'s guide video' }] },
          { text: 'Bear: in the Bio Lab, under a trolley next to the Crafting Table.', imgs: [{ src: I + 'spot-mega-stuffy-4.webp', cap: 'Bear, still from MrDalekJD\'s guide video' }] },
          { text: 'Duck: on the Shipwreck, in a red container right of the Mystery Box.', imgs: [{ src: I + 'spot-mega-stuffy-5.webp', cap: 'Duck, still from MrDalekJD\'s guide video' }] },
          'Giraffe: on Crab Island, right of the Crafting Table.',
        ],
      },
      {
        id: 'meteor', tab: 'side', type: 'Free reward', name: 'Meteor loot',
        summary: 'With Dead Wire on your gun, shoot the satellite tower above the prison (left of the Quick Revive building) until its light turns red, then the one outside Engineering by the Living Quarters. Next round, turn on the Void Cannon trap: a meteor crashes on Castle Rock. Raft over for scorestreaks, ammo mods, Salvage, armour plates and sometimes a Ray Gun.',
        video: SE(266),
      },
      {
        id: 'whack-a-crab', tab: 'side', type: 'Free perk', name: 'Whack-a-crab',
        summary: 'On Crab Island, throw a Molotov at the leftmost tree above the small zombie window in the middle of the island. You get a baseball bat and 30 seconds to whack the crabs as they pop up. Do well and a perk can appears.',
        video: SE(409),
      },
      {
        id: 'slam-dunk', tab: 'side', type: 'Free reward', name: 'Slam dunk (2,000 Essence)',
        summary: 'With a Pack-a-Punched gun, climb the wooden box in Engineering outside the Living Quarters and shoot the basketball stuck where the Living Quarters roof meets the upper level. It drops through the hoop in the courtyard and pays out 2,000 Essence (double it with Double Points).',
        video: SE(461),
      },
      {
        id: 'oxygen-tank', tab: 'side', type: 'Map tip', name: 'Spare oxygen tank',
        summary: 'Once Pack-a-Punch has risen, dive below its spot to the bottom. Throw a grenade at the slightly clearer rock: an oxygen tank appears under it. Take it to stay underwater twice as long.',
        video: SE(498),
      },
      {
        id: 'perkaholic', tab: 'side', type: 'Free perk', name: 'Free Perkaholic (50 fish)',
        summary: 'Kill 50 fish with explosive ammo or explosive equipment. Look for bubbles or splashes: around Crab Island, in and around the Shipwreck, under the Sea Tower and docks, and in the water under the Bio Lab.',
      },
      {
        id: 'culinary', tab: 'side', type: 'Fun', name: 'Culinary Delight (achievement)',
        summary: 'Cook a terrible fish dinner for the achievement. Kill a fish in the Bio Lab water with a grenade and take it. Collect batteries (Engineering tables by the Crafting Table), salt (above the white fridge upstairs in the Living Quarters), beans (between fruit crates in the Mess Hall), oil (by the Mess Hall stoves) and a brain (Bio Lab table by the Crafting Table). At the Mess Hall frying pan add the oil, the fish, then the rest, and end the round.',
        video: SE(738),
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each.',
        video: SE(16),
        spots: [
          { text: 'Bonus Points: in the top right window of the Shipwreck, seen from the front.', imgs: [{ src: I + 'spot-powerups-1.webp', cap: 'Bonus Points, still from MrDalekJD\'s guide video' }] },
          { text: 'Max Ammo: throw a grenade or shoot an explosive into a watchtower outside spawn.', imgs: [{ src: I + 'spot-powerups-2.webp', cap: 'Max Ammo, still from MrDalekJD\'s guide video' }] },
          { text: 'Double Points: in the Bio Lab, behind a shelf.', imgs: [{ src: I + 'spot-powerups-3.webp', cap: 'Double Points, still from MrDalekJD\'s guide video' }] },
          'Full Power: under the Sea Tower; hit it from a raft or the Sea Tower balcony.',
          'Insta-Kill: on Temple Island, above a zombie window.',
          'Nuke: inside a barrier on Crab Island.',
        ],
      },
    ],
  });
})();
