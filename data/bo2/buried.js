/* Buried — Black Ops II DLC 3 (Vengeance) */
(() => {
  const I = 'assets/img/bo2/buried/';
  const E = 'j_VzYDB5tE4'; // MrDalekJD easter egg guide (both sides)
  const A = 'ofj67D2WCzk'; // AceOfSpades ultimate guide
  const EV = { id: E, title: 'Buried easter egg guide (Maxis and Richtofen)', ch: 'MrDalekJD', len: '33:41' };
  const AV = { id: A, title: 'Buried: Ultimate Guide', ch: 'AceOfSpades', len: '18:13' };

  const orbs = [
    'In the alley between the saloon and the candy store.',
    'Left of the church entrance, behind a rock.',
    'In the mine tunnels above town (up the saloon stairs, along the minecart track, left to the end, then right).',
    'In the hedges at the start of the maze, past the mansion.',
  ];
  const signImgs = [
    { src: I + 'cipher.webp', cap: 'Cipher key: each letter is the shape of its box, with or without a dot' },
    { src: I + 'signs.webp', cap: 'The five sign names in the cipher, top to bottom: Dry Gulcher Shaft, Lunger Undermines, Consumption Cross, Ground Biter Pits, Bone Orchard Vein' },
  ];
  const signSpots = [
    'Dry Gulcher Shaft: right where you enter the mines from the saloon.',
    'Lunger Undermines: further in, before the tunnel splits left and right.',
    'Consumption Cross: jump the gap, go right, then right again to a buyable debris; the sign is in front of it.',
    'Ground Biter Pits: take the left tunnel past Quick Revive, cross the tracks and go right; it\'s at the bottom on the left.',
    'Bone Orchard Vein: buy that debris and follow the track further down.',
  ];
  const decode = w => ({ w, t: 'Decode which three signs to hit', d: 'Only the first letter of each word matters: all five signs start with a different letter (D, L, C, G, B). Match the first symbol of each line to the cipher key.', imgs: signImgs });
  const wish = w => ({ w, t: 'Make a wish: shoot every target without missing', d: 'One player interacts with the fountain in front of the church / mansion. Targets appear in four places at once, one player in each; every target must be hit, with no missed shots. Then everyone gets every perk.', list: [
    'Inside the saloon: 19 targets.',
    'By the jail: 22 targets.',
    'The left side of the mansion, in the windows: 23 targets.',
    'Beside the candy store and in front of the courthouse: 20 targets.',
  ], tip: 'Draw the PDW-57 from the gunsmith chalk for everyone and buy Speed Cola. Give Arthur candy next to a crawler so he holds it and the round can\'t end.' });

  ZG.addMap({
    game: 'bo2', id: 'buried', order: 4,
    name: 'Buried', dlc: 'Vengeance · DLC 3', eeName: 'Mined Games',
    hero: I + 'hero.webp', players: 'four',
    tags: ['Paralyzer', 'Arthur (Leroy)', 'Time Bomb'],
    blurb: 'An old western town buried deep underground, with a giant called Arthur locked in the jail. Build the gallows for Maxis or the guillotine for Richtofen, and finish the story that started in TranZit.',
    quick: [
      ['Main EE', 'Mined Games (Maxis or Richtofen side)'],
      ['Players', '4 players required'],
      ['Wonder weapon', 'Paralyzer (Mystery Box)'],
      ['Key items', 'Time Bomb, lantern, Vulture Aid (Richtofen), Arthur'],
    ],
    intro: {
      start: 'The power switch is upstairs in the candy store. Free Arthur early: booze makes him smash debris and candy makes him do jobs for you. Pack-a-Punch is past the haunted mansion and the maze.',
      parts: 'Every buildable\'s parts are in the General Store; the quest parts are spread around town.',
      weapons: 'The Paralyzer and the Time Bomb both come from the Mystery Box; the quest needs the Time Bomb on both sides and the Paralyzer on Richtofen\'s.',
      'easter-egg': 'Two separate checklists: build the guillotine for Richtofen or the gallows for Maxis (whichever you build first decides the side). Both end with the same shooting-gallery step. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn on the power upstairs in the candy store. Pack-a-Punch is in the gazebo at the bottom of the spiral staircase, through the haunted mansion and across the maze.',
        video: AV,
        steps: [
          { w: [E, 30], t: 'Turn on the power upstairs in the candy store' },
          { w: 170, t: 'Clear the debris in front of the mansion', d: 'Give Arthur booze while his back is to it, so he charges through.', needs: ['arthur'] },
          { w: 178, t: 'Get through the haunted mansion and the maze', d: 'Ghost women in the mansion steal your points when they touch you. The maze has six layouts and changes when nobody is in it.', imgs: [{ src: I + 'mistress.webp', cap: 'A ghost in the mansion' }] },
          { w: 192, t: 'Pack-a-Punch is in the gazebo down the spiral staircase', d: 'Upgrades cost 5,000.' },
        ],
      },
      {
        id: 'arthur', tab: 'start', type: 'Map mechanic', name: 'Arthur (Leroy), booze and candy', short: 'Arthur', img: I + 'arthur.webp', color: 'gold',
        summary: 'The giant locked in the jail. Unlock his cell and give him booze to break out. Booze makes him charge through debris; candy makes him attack zombies or do jobs for you.',
        video: AV,
        steps: [
          { w: 0, t: 'Unlock his cell and give him booze', d: 'The key is next to his cell (if he locks himself back in after being shot, it moves: behind the bank counter, upstairs in the saloon or in the courthouse). There\'s booze in his cell.' },
          { w: 36, t: 'Booze: point him at debris', d: 'A free bottle appears each round in his cell or on the bar or tables of the saloon; extra bottles cost 1,000 at the saloon bar. Give it to him with his back to the debris you want gone: jail entrance, between the jail and the sheriff\'s house, the gunsmith entrance, between the gunsmith and the barn, between the general store and the candy store, the church entrance and the mansion entrance.' },
          { w: 93, t: 'Candy: make him work', d: 'A free bowl appears each round in the candy store; extra bowls cost 1,000 at the counter.', list: [
            'Near zombies: he goes on a rampage and kills them.',
            'Near a crawler: he carries it around so the round can\'t end.',
            'Near a power-up: he changes it into a different one.',
            'Near the Mystery Box: he keeps it there longer, or re-spins it for free right after you spin.',
            'Near a buildable table: he fetches the parts and builds something for you.',
          ] },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'turbine', tab: 'parts', type: 'Buildable · Power', name: 'Turbine', img: 'assets/img/bo2/tranzit/turbine.webp', color: 'storm',
        summary: 'A portable power source. The Maxis side uses it to power the Subsurface Resonator.',
        facts: [['Parts', '3 (General Store)'], ['Build at', 'Any table: sheriff\'s house (top floor), saloon, courthouse or church']],
        video: AV,
        parts: [
          { w: 211, name: 'Fan', area: 'General Store', spots: ['On a shelf upstairs.'] },
          { w: 211, name: 'Mannequin', area: 'General Store', spots: ['In the back room.'] },
          { w: 211, name: 'Rudder', area: 'General Store', spots: ['On a shelf along the wall.'] },
        ],
      },
      {
        id: 'resonator', tab: 'parts', type: 'Buildable · Trap', name: 'Subsurface Resonator', img: I + 'resonator.webp', color: 'storm',
        summary: 'A sonic blaster that kills zombies in front of it and knocks back the ones further away. It only runs with a Turbine next to it. The Maxis side uses it to break four red orbs.',
        facts: [['Parts', '4 (General Store)'], ['Build at', 'Any table']],
        video: EV,
        parts: [
          { w: 1219, name: 'Wheel', area: 'General Store', spots: ['On the front counter.'] },
          { w: 1234, name: 'Speaker', area: 'General Store', spots: ['Just before the weapon locker (fridge).'] },
          { w: 1238, name: 'Mount', area: 'General Store', spots: ['By the back door.'] },
          { w: 1240, name: 'Motor', area: 'General Store', spots: ['At the top of the stairs, in the corner.'] },
        ],
        blocks: [{ tip: 'Pick up one part, add it to a table, then give Arthur candy next to the table: he fetches the rest and builds it.' }],
      },
      {
        id: 'trample-steam', tab: 'parts', type: 'Buildable · Trap', name: 'Trample Steam', img: 'assets/img/bo2/dierise/trample-steam.webp',
        summary: 'A launch pad that flings zombies (and you). Not needed for either quest.',
        facts: [['Parts', '4 (General Store)'], ['Build at', 'Any table']],
        video: AV,
        parts: [
          { w: 227, name: 'Bellows', area: 'General Store', spots: ['On a desk upstairs.'] },
          { w: 242, name: 'Chicken wire', area: 'General Store', spots: ['Leaning on the stair banister.'] },
          { w: 242, name: 'Flag', area: 'General Store', spots: ['In a barrel under the stairs.'] },
          { w: 242, name: 'Motor', area: 'General Store', spots: ['On a shelf in the middle of the room.'] },
        ],
      },
      {
        id: 'head-chopper', tab: 'parts', type: 'Buildable · Trap', name: 'Head Chopper', img: I + 'head-chopper.webp',
        summary: 'A wall-mounted blade that cuts through zombies. Not needed for either quest.',
        facts: [['Parts', '4 (General Store)'], ['Build at', 'Any table']],
        video: AV,
        parts: [
          { w: 275, name: 'Crank', area: 'General Store', spots: ['On a shelf in the middle of the room.'] },
          { w: 291, name: 'Gear', area: 'General Store', spots: ['On the front counter.'] },
          { w: 291, name: 'Blade', area: 'General Store', spots: ['In a barrel behind the counter.'] },
          { w: 291, name: 'Frame', area: 'General Store', spots: ['In the back room.'] },
        ],
      },
      {
        id: 'nav-table', tab: 'parts', type: 'Buildable · Story', name: 'NAV table', img: I + 'nav-table.webp', color: 'gold',
        summary: 'Built up on the surface. It takes the navcard from Die Rise. Not needed for this map\'s quest, only for the ending that links TranZit, Die Rise and Buried.',
        facts: [['Parts', '4'], ['Build at', 'On the surface, above the mines']],
        video: AV,
        parts: [
          { w: 337, name: 'Meteorite', area: 'The surface', spots: ['To get up there, give Arthur booze by the fountain outside the mansion so he smashes it, blow up the fountain in the middle of the maze, and jump into the portal underneath.'] },
          { w: 355, name: 'Board, radio and power box', area: 'Between the barn and the gunsmith', spots: ['All three are in the gap between the two buildings.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'paralyzer', tab: 'weapons', type: 'Wonder weapon', name: 'Paralyzer', img: I + 'paralyzer.webp', color: 'lightning',
        summary: 'A wide beam that slows zombies to a crawl and kills them. It never runs out of ammo but overheats. Aim it down, fire and jump to fly (fire again just before landing to avoid fall damage). From the Mystery Box only; the Richtofen side uses it to charge four orbs.',
        facts: [['Get it', 'Mystery Box'], ['Upgraded', 'Petrifier']],
        video: EV,
        steps: [{ w: 77, t: 'Spin the Mystery Box', tip: 'Give Arthur candy by the box (with his back to it) so it doesn\'t move while you spin for it.' }],
      },
      {
        id: 'time-bomb', tab: 'weapons', type: 'Equipment', name: 'Time Bomb', img: I + 'time-bomb.webp', color: 'aether',
        summary: 'Place it, then detonate it later to send everyone back to the moment it was placed. Both sides of the quest need it. From the Mystery Box.',
        facts: [['Get it', 'Mystery Box'], ['Refill', 'A Max Ammo gives it back']],
        video: EV,
        steps: [{ w: 124, t: 'Spin the Mystery Box for it' }],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee-richtofen', tab: 'easter-egg', type: 'Main Easter Egg · Richtofen side', name: 'Mined Games: Richtofen', short: 'Richtofen side',
        summary: 'Build the guillotine, charge four orbs with the Paralyzer, fill the lantern with mansion ghosts, decode three mine signs, chase a wisp with Vulture Aid, fetch a switch from round infinity, solve the maze levers and win the shooting gallery.',
        facts: [
          ['Players', '4 (steps 1–5 can be done solo, then others join)'],
          ['Reward', 'Achievement, every perk; the pylon glows blue'],
          ['Difficulty', 'Original only'],
        ],
        prep: [
          { t: 'Four players, one of them Stuhlinger', d: 'Only he hears Richtofen confirm each step.' },
          { t: 'Power on and Arthur freed', needs: ['power-pap', 'arthur'] },
          { t: 'Paralyzer and Time Bomb from the Mystery Box', needs: ['paralyzer', 'time-bomb'] },
          { t: 'Galvaknuckles (draw their chalk from the gunsmith wall) or the Bowie Knife', d: 'The gunsmith has five wall-buy chalks; pick one up and draw it on any "?" spot.' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 139, anyList: 'Parts in any order', t: 'Build the guillotine beside the saloon', list: [
            'Antenna: downstairs in the barn, in a stable on the right.',
            'Satellite dish: upstairs in the saloon, out on the balcony by the fence.',
            'Spool of wire: through the tunnel from the bank to the gunsmith, in the corner when you climb out.',
            'Crystal: up the saloon stairs into the mines, left, jump the gap; it\'s in the rocks ahead.',
          ], warn: 'The antenna and wire are shared with the gallows. Building the guillotine commits you to Richtofen for this game.' },
          { w: 201, t: 'Charge the four red orbs with the Paralyzer', d: 'Hold the trigger on each until it dings and turns white.', list: orbs },
          { w: 293, t: 'Knock the lantern out of the air with a grenade', d: 'It floats between the courthouse and the jail (or the church). Cook a grenade so it explodes next to it, then pick it up.' },
          { w: 308, t: 'Fill the lantern by killing 10 ghosts in the mansion', d: 'A rising chime plays with each one; when it stops, it\'s full.', warn: 'If the player carrying the lantern goes down and it vanishes, the game has to be restarted.' },
          { w: 339, t: 'Place the lantern on the symbol on the gunsmith roof', d: 'Up the stairs towards the bank and jump the gap. A coded message appears on the wall.' },
          decode(370),
          { w: 402, t: 'Buy Vulture Aid in the church', d: 'Arthur has to break into the church first (booze). Only players with Vulture Aid can see the wisp.', imgs: [{ src: I + 'vulture.webp', cap: 'Vulture Aid' }] },
          { w: 417, t: 'Melee your three signs in the mines', d: 'Galvaknuckles or Bowie Knife, any order; each glows red.', list: signSpots },
          { w: 479, t: 'Chase the wisp to the guillotine', d: 'After the third sign a wisp appears. Run through it within 15 seconds and it jumps somewhere else (Vulture Aid shows it through walls). Its path usually ends: barn upstairs, jail upstairs, general store upstairs, the candy store power room or the bank–gunsmith tunnel, the gunsmith upstairs by Mule Kick, then the guillotine.', tip: 'Missed it? Hit the three signs again; you can retry in the same round.' },
          { w: 571, t: 'Kill five wisp-charged zombies at the guillotine', d: 'Lead zombies to it; the wisp jumps onto their hands. Kill them there. Richtofen then asks for a Time Bomb.' },
          { w: 604, t: 'Time Bomb on the guillotine: find the switch in round infinity (4 players)', d: 'Throw the Time Bomb onto the guillotine bench with all four players nearby and detonate it. You have 60 seconds in a black-and-white round infinity with unkillable zombies. Search the bodies of Misty, Marlton, Stuhlinger and Russman for the switch. Possible body spots:', list: [
            'In front of the guillotine.', 'Left of the GUNSMITH sign.', 'On the saloon steps.', 'Left of the gunsmith entrance.',
            'In the back corner of the gap between the gunsmith and the barn (Arthur has to clear it).', 'On the way to the jail.', 'In front of the jail entrance.',
            'In front of the boxes opposite the Mystery Box spot.', 'Right of the candy store, coming from the courthouse.', 'Against the rock left of the courthouse entrance.',
            'Left of the church entrance, by the red orb.', 'Inside the church, right of the workbench.', 'By the rock in front of the mansion entrance.',
          ], warn: 'No switch? You need the Time Bomb again (a Max Ammo refills it). If the player carrying the switch goes down and it vanishes, restart.' },
          { w: 746, t: 'Add the switch to the guillotine', d: 'Only once you\'re back in normal time.' },
          { w: 762, t: 'Pull the four coloured maze levers in the right order', d: 'Red, green, blue and yellow levers sit on maze gates. After all four are pulled, the ones in the right position spark. Swap the others and retry: to reset, everyone leaves the maze and comes back through the mansion. Yellow is sometimes in the hedges by the middle instead of on a gate.', tip: 'Flying with the Paralyzer (aim down, fire and jump) gets you over closed gates, but not over the hedges.' },
          wish(855),
        ],
      },
      {
        id: 'ee-maxis', tab: 'easter-egg', type: 'Main Easter Egg · Maxis side', name: 'Mined Games: Maxis', short: 'Maxis side',
        summary: 'Build the gallows, break four orbs with a Turbine-powered Subsurface Resonator, fill the lantern with Arthur\'s kills, decode three mine signs, escort two wisps to the gallows (using the Time Bomb), ring nine bells in order, then win the shooting gallery.',
        facts: [
          ['Players', '4'],
          ['Reward', 'Achievement, every perk; the pylon glows orange'],
          ['Difficulty', 'Original only'],
        ],
        prep: [
          { t: 'Four players', d: 'The bell step needs one player in the mansion and three at the bells.' },
          { t: 'Power on and Arthur freed', needs: ['power-pap', 'arthur'] },
          { t: 'Time Bomb from the Mystery Box', needs: ['time-bomb'] },
          { t: 'Galvaknuckles (chalk from the gunsmith wall) or the Bowie Knife' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 1127, anyList: 'Parts in any order', t: 'Build the gallows beside the courthouse', list: [
            'Antenna: downstairs in the barn, in a stable on the right.',
            'Bulb: in the room above Arthur\'s cell, on boxes near a Mystery Box spot.',
            'Spool of wire: through the tunnel from the bank to the gunsmith, in the corner when you climb out.',
            'Battery: behind the altar in the church (Arthur has to open the church).',
          ], warn: 'The antenna and wire are shared with the guillotine. Building the gallows commits you to Maxis for this game.' },
          { w: 1189, t: 'Build the Turbine and the Subsurface Resonator', needs: ['turbine', 'resonator'] },
          { w: 1298, t: 'Break the four red orbs with the Resonator', d: 'Place the Resonator facing an orb and the Turbine next to it. The orb shatters with a glass sound.', list: orbs },
          { w: 1328, t: 'Knock the lantern out of the air with a grenade', d: 'It floats between the courthouse and the jail. If you miss, it disappears for a bit and comes back.' },
          { w: 1360, t: 'Fill the lantern with Arthur\'s kills', d: 'Give Arthur candy next to zombies and stand close while he kills them. A rising chime plays per kill; when it stops, it\'s full. (Kills from traps, the Resonator or a Nuke also count.)' },
          { w: 1392, t: 'Place the lantern on the symbol on the gunsmith roof', d: 'Up the stairs towards the bank and jump the gap. A coded message appears on the wall.' },
          decode(1407),
          { w: 1501, t: 'Place the Time Bomb, then melee your three signs', d: 'Put the Time Bomb down anywhere first. Then melee the three signs in the mines (any order).', list: signSpots },
          { w: 1516, t: 'Escort the wisp to the gallows', d: 'It travels a long route: through the barn and the tunnels, out of the gunsmith upstairs, past the saloon, through the gap between the general store and the candy store (Arthur must clear it), to the gallows. It needs zombies near it the whole way or it fades.', tip: 'Have one player hold two zombies on the barn\'s ground floor and another hold three by the saloon stairs.' },
          { w: 1577, t: 'Detonate the Time Bomb and escort a second wisp', d: 'You go back to when the bomb was placed. Hit the signs again and bring a second wisp to the gallows.' },
          { w: 1592, t: 'Ring the nine bells in the switchboard\'s order', d: 'One player goes through the mansion past the secret bookcase to the switchboard on a sofa (Galvaknuckles make the ghosts one-hit). The other three wait at the bells. A light turns yellow; that player calls it out and the right bell is rung before time runs out; it turns green and the next lights up until all nine are green. The light columns, left to right, are the candy store, the barn and the courthouse; the video shows a chart of which light is which bell.', table: { head: ['Column', 'Its three bells'], rows: [
            ['Left: candy store, upstairs (not the power room)', 'On the table · on the corner of the square table · on the chair by the stairway door'],
            ['Middle: barn, top floor', 'On the hay by the gap towards the gunsmith · on the hay by the drop down · on the corner facing the Mystery Box'],
            ['Right: courthouse, ground floor', 'On the bench to the left as you enter · on the table on the left · on the edge of the desk'],
          ] }, warn: 'Too slow and the switchboard resets.' },
          wish(1764),
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'navcard', tab: 'side', type: 'Story ending', name: 'The ending that links the three maps', short: 'Super ending',
        summary: 'Buried\'s navcard is on a bookshelf in the mansion (coming back in from the maze side) and goes into TranZit\'s NAV table. Once every player has done the same side on TranZit, Die Rise and Buried and all three NAV tables have the right navcard, the box of lights at the back of the courthouse opens. Press its button for the Maxis or Richtofen ending. Richtofen\'s gives everyone a permanent Fire Sale and a Mule Kick that holds four guns; Maxis\'s turns one zombie at a time into a blue-eyed "Richtofen zombie" that drops a power-up when killed.',
        video: AV,
        steps: [
          { w: 955, t: 'Feed each map\'s NAV table the right navcard', d: 'TranZit\'s card goes into Die Rise, Die Rise\'s into Buried, and Buried\'s into TranZit.' },
          { w: 972, t: 'Check the light box in the back of the courthouse', d: 'Columns are the three maps, rows are the players: orange for Maxis, blue for Richtofen. When all match, the box opens.', warn: 'Pressing the button resets everyone\'s easter egg progress on all three maps.' },
        ],
      },
      {
        id: 'free-perks', tab: 'side', type: 'Free perk', name: 'Free perks from the ghosts',
        summary: 'After you leave the mansion, kill the ghosts that follow you: the last one drops a free perk. Also: shoot the bullseye in the saloon with the Ballistic Knife from behind the chalk line, then put 10 points in the tip jar of the ghost playing the piano in the mansion for another perk.',
      },
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Always Running"',
        summary: 'Interact with three teddy bears.',
        spots: ['In the mines.', 'In a barrel in the candy store.', 'Next to Double Tap in the mansion.'],
      },
    ],
  });
})();
