/* Die Rise — Black Ops II DLC 1 (Revolution) */
(() => {
  const I = 'assets/img/bo2/dierise/';
  const E = 'AVezhJxdJOY'; // MrDalekJD easter egg guide (both sides)
  const A = 't4gc4E8A7fk'; // AceOfSpades ultimate guide
  const EV = { id: E, title: 'Die Rise easter egg guide (Maxis and Richtofen)', ch: 'MrDalekJD', len: '24:06' };
  const AV = { id: A, title: 'Die Rise: Ultimate Guide', ch: 'AceOfSpades', len: '10:34' };

  // Steps 1–4 are the same for both sides.
  const common = [
    { w: 142, t: 'Everyone stands on a gold ring on top of an elevator at the same time', d: 'Four elevators have a gold ring on their roof: the one on the rooftop that leads to the Bowie Knife, the one just below the roof by the MP5, and the two side by side next to Quick Revive (by the Trample Steam room). Maxis and Richtofen speak when it works.', warn: 'An elevator rising to the top floor crushes anyone standing on it.' },
    { w: 189, t: 'Step on the four gold floor symbols in the right order', d: 'Symbols: by the M14 just outside spawn, below the pylon next to the Semtex wall-buy, in the building across from the Buddha room, and past the SVU in the cafeteria. The order changes every game: step on one, and if it stays lit it\'s next; a wrong one resets them all (the order stays the same).' },
    { w: 251, t: 'Shoot the balls out of both dragons\' mouths with a sniper', d: 'Buy the SVU-AS in the clothing shop (drop down from the spawn side). Shoot the small ball in the mouth of each of the two dragon statues on the roof; fireworks go off and the balls appear under the lion statues\' paws in spawn. Now pick a side.' },
  ];
  // Final step for both sides.
  const pylonCode = [
    { w: 620, t: 'Work out the pylon order from the Mahjong tiles', needs: ['mahjong'] },
    { w: 807, t: 'Buy the Galvaknuckles in the elevator shaft', d: '6,000. Drop down the shaft one ledge.' },
    { w: 823, t: 'Punch the four sides of the pylon in your order', d: 'On the roof. One round, one try: if it fails, wait for the next round. Done right, power surges through the pylon, the dragons fire and everyone gets every perk on the map.', tip: 'Known glitch: sometimes the right order does nothing. Let the round end so the pylon lights up again, punch the other three sides once each (not the side that comes first in your order), then punch your full order even if the pylon stops glowing.' },
  ];

  ZG.addMap({
    game: 'bo2', id: 'die-rise', order: 2,
    name: 'Die Rise', dlc: 'Revolution · DLC 1', eeName: 'High Maintenance',
    hero: I + 'hero.webp', players: 'four',
    tags: ['Sliquifier', 'Trample Steam', 'Elevators'],
    blurb: 'Collapsed skyscrapers in China. Ride the elevators, build the Sliquifier, and power the rooftop pylon for Maxis or Richtofen.',
    quick: [
      ['Main EE', 'High Maintenance (Maxis or Richtofen side)'],
      ['Players', '4 players required (both sides)'],
      ['Wonder weapon', 'Sliquifier (buildable)'],
      ['Key items', 'Trample Steam, NAV table, Mahjong tiles'],
    ],
    intro: {
      start: 'The power switch is in the sewing room of the second building. Pack-a-Punch rides in one of four elevators.',
      parts: 'Trample Steam parts are in the spawn building; Sliquifier parts are in the Dragon building.',
      weapons: 'The Sliquifier leaves a slippery goo that chains through zombies. The Richtofen side needs it.',
      'easter-egg': 'Both checklists start with the same three steps and end with the same pylon code; the middle is different for each side. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP', img: I + 'layout.webp',
        summary: 'Ride the spawn elevator down (it crashes), grab an elevator key, jump the gap into the next building and buy into the sewing room for the power switch. Pack-a-Punch then shows up in one of four elevators.',
        video: AV,
        steps: [
          { w: [E, 31], t: 'Take the spawn elevator down and grab the key on the floor', d: 'Use the key on the panel to send the elevator back up.' },
          { w: 0, t: 'Jump across the gap and buy into the sewing room', d: 'The power switch is at the end of the room.' },
          { w: 16, t: 'Find Pack-a-Punch in one of four elevators', d: 'In the Dragon building: either of the two elevators in the back corner, the one below the ramp into the building, or the one in Dead Man\'s Corner. It swaps with Juggernog, Double Tap and Mule Kick each game.', warn: 'The elevator can move while your gun is in the machine. Don\'t walk away from it.' },
          { w: 31, t: 'Elevator keys', d: 'One-use keys in the hallway after the crashed elevator. A key calls any elevator, or sends one back to the lobby.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'trample-steam', tab: 'parts', type: 'Buildable · Trap', name: 'Trample Steam', img: I + 'trample-steam.webp', color: 'storm',
        summary: 'A spring-loaded launch pad that flings zombies (and players). Both sides of the quest need one per player.',
        facts: [['Parts', '4'], ['Build at', 'The table two floors down from spawn']],
        video: EV,
        parts: [
          { w: 436, name: 'Chicken wire', area: 'Spawn building', spots: ['Left of the dragon statue in spawn.', 'Through the first door out of spawn, against the wall on the left.'] },
          { w: 451, name: 'Motor', area: 'Spawn building', spots: ['On the lobby desk.', 'Out of the first spawn door, left then right: in the corner before the drop.'] },
          { w: 466, name: 'Bellows', area: 'Spawn building', spots: ['Halfway up the spawn stairs, against the wall.', 'Just through the doors, on the floor.'] },
          { w: 482, name: 'Flag', area: 'Spawn building', spots: ['By the broken chair at the bottom right of the spawn stairs.', 'Out of the spawn door, on the right against the railing.'] },
        ],
      },
      {
        id: 'nav-table', tab: 'parts', type: 'Buildable · Quest', name: 'NAV table', img: I + 'nav-table.webp', color: 'gold',
        summary: 'Four parts, all on the roof. The quest won\'t start without it.',
        facts: [['Parts', '4 (fixed spots)'], ['Build at', 'Under the staircase up to the pylon']],
        video: EV,
        parts: [
          { w: 62, name: 'Radio', area: 'Roof', spots: ['In the corner near the crashed water tower.'] },
          { w: 79, name: 'Board', area: 'Roof', spots: ['Directly opposite where the table is built, under the ramp.'] },
          { w: 85, name: 'Meteor', area: 'Roof', spots: ['In a pile of debris across from the Claymores.'] },
          { w: 95, name: 'Power box', area: 'Dead Man\'s Corner', spots: ['Up the pylon stairs, go right past the Semtex wall-buy and drop down: in the corner.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'sliquifier', tab: 'weapons', type: 'Wonder weapon · Buildable', name: 'Sliquifier', img: I + 'sliquifier.webp', color: 'green',
        summary: 'Fires blobs of goo that kill a zombie and leave a slippery puddle that spreads the kill to others. You slide on it too. The Richtofen side needs it.',
        facts: [['Parts', '4'], ['Build at', 'Bottom of the stairs below the power room (Dragon building)'], ['Slot', 'Takes a gun slot; if you lose it, it goes into the Mystery Box']],
        video: EV,
        parts: [
          { w: 312, name: 'Mannequin foot', area: 'Next to the power room', spots: ['Always in the side room to the right of the power room.'] },
          { w: 328, name: 'Handbrake', area: 'Power room or kitchen', spots: ['On the table right of the power switch, opposite the sewing machine.', 'In the kitchen to the left of the build room.'] },
          { w: 349, name: 'Air tank', area: 'Build room or power room', spots: ['In the cage right of the buildable table.', 'On the table in front of the power switch.'] },
          { w: 362, name: 'Ammo cartridge', area: 'Near the bank', spots: ['On a side table in the showers, left before the power room, opposite the bank.', 'On the barrel at the bottom of the stairs opposite the buildable table.'] },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee-richtofen', tab: 'easter-egg', type: 'Main Easter Egg · Richtofen side', name: 'High Maintenance: Richtofen', short: 'Richtofen side',
        summary: 'After the shared opening steps, spin both balls with the Sliquifier, set four Trample Steams on the zombie symbols facing the pylon, then punch the pylon code.',
        facts: [
          ['Players', '4 required'],
          ['Reward', 'Achievement, every perk on the map (lost if you go down); the pylon glows blue'],
          ['Difficulty', 'Original only'],
        ],
        prep: [
          { t: 'Four players, one of them Stuhlinger', d: 'Only Stuhlinger hears Richtofen confirm each step.' },
          { t: 'Power on and the NAV table built', needs: ['power-pap', 'nav-table'] },
          { t: 'Galvaknuckles money (6,000) for the last step' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          ...common,
          { w: 297, t: 'Build the Sliquifier', needs: ['sliquifier'] },
          { w: 388, t: 'Shoot each ball under the lion statues 20 times', d: 'Two full Sliquifier magazines per ball, until it spins. Fireworks and a Richtofen quote confirm each one.' },
          { w: 420, t: 'Build Trample Steams (one per player)', needs: ['trample-steam'] },
          { w: 498, t: 'Place a Trample Steam on each zombie symbol, facing the pylon', d: 'Symbols: outside spawn by the M14; two on the roof below the pylon staircase (left and right); and one up the pylon stairs to the right, past the Semtex wall-buy after the drop. Each correct placement gives Stuhlinger a quote: move any that doesn\'t.' },
          { w: 575, t: 'Let the Trample Steams fire a few times', d: 'Fling zombies or yourselves. Richtofen then asks Stuhlinger to use the Galvaknuckles.' },
          ...pylonCode,
        ],
      },
      {
        id: 'ee-maxis', tab: 'easter-egg', type: 'Main Easter Egg · Maxis side', name: 'High Maintenance: Maxis', short: 'Maxis side',
        summary: 'After the shared opening steps, two players carry the balls, you get 15 kills in the Buddha room and fire an upgraded Ballistic Knife there, then bounce the balls between Trample Steams on the lion symbols and punch the pylon code.',
        facts: [
          ['Players', '4 required'],
          ['Reward', 'Achievement, every perk on the map (lost if you go down); the pylon glows orange'],
          ['Difficulty', 'Original only'],
        ],
        prep: [
          { t: 'Four players', d: 'The Ballistic Knife player must not have bought the Bowie Knife or Galvaknuckles, or bled out.' },
          { t: 'Power on, NAV table built, Pack-a-Punch found', needs: ['power-pap', 'nav-table'] },
          { t: 'Galvaknuckles money (6,000) for the last step' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          ...common,
          { w: 900, t: 'Two players pick up a ball each from the lion paws', d: 'There\'s no on-screen sign that you\'re carrying one; walk up to a lion paw to check. Don\'t bleed out with one.' },
          { w: 915, t: 'Kill 15 zombies in a row on the ground floor of the Buddha room', d: 'Everyone stays inside: a kill outside the room resets the count. Maxis speaks when it\'s done.' },
          { w: 945, t: 'Pack-a-Punch a Ballistic Knife from the Mystery Box and fire it in the Buddha room', d: 'It becomes the Krauss Refibrillator; Maxis speaks when you upgrade it, and again when you fire it in the room.', warn: 'Only works if that player hasn\'t bought the Bowie Knife or Galvaknuckles and hasn\'t bled out this game.' },
          { w: 993, t: 'Build Trample Steams (one per player)', needs: ['trample-steam'] },
          { w: 1070, key: 'place-a-trample-steam-on-each-lion-symbol-facing-the-pylon', t: 'Place a Trample Steam on each lion symbol', d: 'Face each one the way the lion on its symbol faces: placed right, it locks in and can\'t be picked up, and the two pairs end up facing each other. Symbols: in spawn, at the bottom of the escalator out of spawn, on the roof next to the two elevators, and on the far rooftop (up the pylon stairs, go right and drop down twice).' },
          { w: 1118, t: 'Put the balls on the Trample Steams', d: 'Each ball bounces between the two Trample Steams facing each other. With both bouncing, an orange surge runs up the pylon.', tip: 'No prompt to place a ball? Destroy that Trample Steam and put down a fresh one.' },
          ...pylonCode,
        ],
      },
      {
        id: 'mahjong', tab: 'easter-egg', type: 'Final step · both sides', name: 'Pylon code (Mahjong tiles)', short: 'Mahjong tiles',
        summary: 'Eight Mahjong tiles in 11 possible spots give the order to punch the pylon\'s four sides. Four tiles are compass directions and four are numbers (1 is a bird, 2–4 are bamboo). Each comes in red, blue, green or black: a direction and a number of the same colour go together. Example: green North + green 3 means North is third.',
        video: EV,
        steps: [
          { w: 651, t: 'North tile: always on the corner of the pylon', d: 'That corner is North.' },
          { w: 667, anyList: 'Check every spot', t: 'Check the other ten spots', list: [
            'On the desk in the spawn room.',
            'At the bottom of the escalator opposite the M14.',
            'On the broken stairs down to the SVU-AS.',
            'On the couch below the upside-down Mystery Box spot.',
            'On a rock at the bottom of the elevator shaft.',
            'Upstairs in the Buddha room, in the corner (climb the pipe).',
            'On a bookshelf, around the outside of the building from the Sliquifier room.',
            'On the table by the sewing machine in the power room.',
            'On a plastic chair in the small room after the roof drop-down.',
            'On the kitchen table past the MP5, just below the roof.',
          ] },
          { w: 838, t: 'Know which side is which', d: 'North is the corner with the tile and faces the Trample Steam room. South is opposite. Looking at North, West is to its right (it faces the sun) and East to its left.' },
        ],
        blocks: [{ imgs: [{ src: I + 'mahjong.webp', cap: 'Compass tiles, left to right: South, North, West, East' }] }],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'navcard', tab: 'side', type: 'Story link', name: 'Navcard (linking TranZit, Die Rise and Buried)', short: 'Navcard',
        summary: 'Die Rise\'s NAV table takes the navcard from TranZit (behind the dumpster at the back of the Bus Depot). Die Rise\'s own navcard is in the room with the PDW-57, in a broken glass display case near the Speed Cola / Who\'s Who elevator; it goes into Buried\'s table. Not needed for this map\'s quest.',
      },
      {
        id: 'free-perk', tab: 'side', type: 'Free perk', name: 'Perfect Jumping Jack round',
        summary: 'Finish a Jumping Jack (special) round without missing a single shot to get a free perk. Letting Trample Steams do the killing means you never have to shoot.',
      },
      {
        id: 'song', tab: 'side', type: 'Song', name: '"We All Fall Down"',
        summary: 'Interact with three teddy bears.',
        spots: ['On a shelf in the clothing shop.', 'On a ledge in the temple (Buddha) building.', 'In the sewing room (power room).'],
      },
    ],
  });
})();
