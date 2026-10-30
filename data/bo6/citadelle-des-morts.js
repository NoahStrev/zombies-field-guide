/* Citadelle des Morts — Black Ops 6, Season One Reloaded */
(() => {
  const I = 'assets/img/bo6/citadelle-des-morts/';
  const SE = t => ({ id: 'O34bCZtHqIY', title: 'Every side Easter egg in Citadelle des Morts', ch: 'MrDalekJD', len: '15:56', t }); // MrDalekJD side Easter eggs
  const E = 'Qy8OU0A9aLo'; // MrRoflWaffles easter egg guide
  const P = 'CbkYTci0VBw'; // MrRoflWaffles Pack-a-Punch guide
  const S = 'BCltoJb7zec'; // MrRoflWaffles all swords guide
  const EV = { id: E, title: 'Citadelle des Morts easter egg guide', ch: 'MrRoflWaffles', len: '25:53' };
  const PV = { id: P, title: 'Citadelle des Morts Pack-a-Punch', ch: 'MrRoflWaffles', len: '1:48' };
  const SV = { id: S, title: 'All elemental swords and incantations', ch: 'MrRoflWaffles', len: '13:30' };
  const stamp = { w: 45, t: 'Get a sword from a knight statue', d: 'From round 10, zombies in knight helmets drop a stamp. Trade it at that knight\'s statue in the Dining Hall for a plain sword.', needs: ['swords'] };

  ZG.addMap({
    game: 'bo6', id: 'citadelle-des-morts', order: 3,
    name: 'Citadelle des Morts', dlc: 'Season One Reloaded', eeName: 'Main quest: free Gabriel Krafft',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Elemental swords', 'Incantations', 'Guardian boss'],
    blurb: 'A French castle and village overrun by the undead, with four knight statues and their swords. Upgrade all four elemental swords, unlock their incantations, prove yourself to the knights, and fight the stone Guardian.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op)'],
      ['Wonder weapons', 'Four elemental swords: Solais, Caliburn, Durendal, Balmung'],
      ['Key items', 'Four torn pages, Mystic Orb, Guardian Key'],
      ['Boss', 'The Guardian (stone golem)'],
    ],
    intro: {
      start: 'Fire a cannon into the castle gate, then kill a Doppelghast for the crystal that brings Pack-a-Punch. Black Ops 6 rules are explained in the basics on Liberty Falls.',
      weapons: 'The quest needs all four upgraded swords and all four incantations (elemental spells found next to each sword\'s final chest). The order below (light, fire, lightning, dark) is the easiest.',
      'easter-egg': 'Collect the pages early, then finish the swords. The knight statues and the four elemental challenges come after. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Turn and fire the cannon to break the castle gate, then shoot three locks on a blue crate inside, kill the Doppelghast that comes out and put its blood crystal back in the crate.',
        video: PV,
        steps: [
          { w: 15, t: 'Open the doors to the cannon', d: 'Either side from the Town Square works.' },
          { w: 30, t: 'Turn the cannon to face the castle, then fire it', d: 'Turn it all in one go or it swings back; do it with one zombie left or between rounds. Then interact at the back to fire. The castle gate breaks open.' },
          { w: 61, t: 'Shoot the three locks on the blue crate', d: 'Inside the castle. A Doppelghast comes out: come with spare points and kill it.' },
          { w: 92, t: 'Put its blood crystal in the crate', d: 'Pack-a-Punch appears.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'swords', tab: 'weapons', type: 'Wonder weapon', name: 'The four knight swords', short: 'Knight swords', img: I + 'swords.webp', color: 'gold',
        summary: 'From round 10, zombies wearing knight helmets drop a stamp. Trade a stamp at a knight statue in the Dining Hall for that knight\'s plain sword, then upgrade it with its own quest. Each upgraded sword has a charged special attack (both triggers) and opens a chest with its elemental incantation.',
        facts: [['Get them', 'Stamps from helmeted knight zombies (round 10+)'], ['Knights', 'Lion (light), Dragon (fire), Stag (lightning), Raven (dark)']],
        video: SV,
        blocks: [
          { tip: 'Not sure which sword you hold? Put it away and take it out again: its name shows. Every statue has its crest on the chest except the Raven, which has a raven on its shoulder.' },
          { table: { head: ['Knight', 'Upgraded sword', 'Incantation'], rows: [
            ['Lion', 'Solais', 'Light'],
            ['Dragon', 'Caliburn', 'Fire'],
            ['Stag', 'Durendal', 'Lightning'],
            ['Raven', 'Balmung', 'Dark'],
          ] } },
        ],
      },
      {
        id: 'solais', tab: 'weapons', type: 'Sword upgrade · Light', name: 'Solais (Lion)', short: 'Solais', img: I + 'solais.webp', color: 'gold',
        summary: 'Bounce a light beam between crystals for an amulet, charge the sword on glowing parasites, then solve a symbol puzzle in a hidden chamber.',
        video: SV,
        steps: [
          stamp,
          { w: 91, t: 'Shoot the crystals so the light beam reaches the small statue', d: 'With the Lion sword, shoot the crystal above the statues. Stand where the beam points and shoot back at the next crystal, room by room, until the beam hits the small statue. Take the amulet.' },
          { w: 136, t: 'Place the amulet on the yellow circle and fill it with kills', d: 'About 15 to 20 kills. A chest starts glowing yellow.' },
          { w: 152, t: 'Charge the door four times with yellow parasites', d: 'Next round, parasites glow yellow. Kill one with the Lion sword (the sword glows), then melee the door to add a symbol. Four times; if you run out of yellow parasites, wait for the next round.' },
          { w: 199, t: 'Solve the symbol puzzle in the chamber', d: 'Interact with the door to go inside. Put the sword in the podium; it lights a symbol. Shoot that symbol on the ceiling (they move), then the next one, four in all. Take the sword back.', tip: 'The order is always the same: Gold ☉, Sal ammoniac 🜹, Phosphorus 🜍, then Salt 🜔.' },
          { w: 230, t: 'Hit the glowing chest with Solais', d: 'Unlocks the light incantation.' },
        ],
      },
      {
        id: 'caliburn', tab: 'weapons', type: 'Sword upgrade · Fire', name: 'Caliburn (Dragon)', short: 'Caliburn', img: I + 'caliburn.webp', color: 'fire',
        summary: 'Carry fire from three grates to the dragon statue, then light three bonfires and kill the Doppelghast that comes out.',
        video: SV,
        steps: [
          stamp,
          { w: 246, t: 'Put the Dragon sword in the dragon statue', d: 'Up the stairs from Juggernog, in the middle of the castle.' },
          { w: 262, t: 'Carry fire from three grates to the statue', d: 'Hold interact on a fire grate: you start burning. Run to the statue and hold interact. The battlements grate is short; the two by spawn (left side, then right side) are long.', tip: 'Melee a purple-eyed zombie while burning to kill it instantly and refill your health.' },
          { w: 325, t: 'Take Caliburn when the dragon breathes fire' },
          { w: 341, t: 'Light the three bonfires on the battlements', d: 'Throw a Molotov or use Caliburn\'s charged attack (both triggers) on each pile of wood. Kill the zombies that pour out. The third one brings a Doppelghast: kill it with Caliburn for an ankh.' },
          { w: 388, t: 'Place the ankh on the yellow symbol and fill it with kills, then hit the chest with Caliburn', d: 'Unlocks the fire incantation.' },
        ],
      },
      {
        id: 'durendal', tab: 'weapons', type: 'Sword upgrade · Lightning', name: 'Durendal (Stag)', short: 'Durendal', img: I + 'durendal.webp', color: 'lightning',
        summary: 'Find three lightning rods, charge them in a vase during a storm, then fire a horseshoe out of the cannon.',
        video: SV,
        steps: [
          stamp,
          { w: 418, anyList: 'Rods in any order', t: 'Collect three lightning rods', list: [
            'Dropped by a zombie carrying one (usually an armoured zombie near Quick Revive) after you\'ve talked to Krafft. It stays on the ground if you miss it.',
            'Leaning beside Deadshot Daiquiri, up the hill from the left side of spawn.',
            'Shoot the electrical box near the Lion sword\'s door with a Dead Wire gun; the rod drops out.',
          ] },
          { w: 479, t: 'Put the rods in the vase on the battlements and charge them', d: 'A storm starts. Kill purple-eyed zombies with the Stag sword until it charges, then melee the vase; you get shocked and one rod charges. Three times (it doesn\'t always take: keep going).', warn: 'Melee the vase soon after the sword charges: hold the charge too long and lightning hits you and the sword loses it.' },
          { w: 525, t: 'Put the sword in the vase and take Durendal' },
          { w: 540, t: 'Shoot down the horseshoe and fire it from the cannon', d: 'It\'s on the roof by Deadshot Daiquiri. Pick it up, stand in front of the cannon and fire yourself out. A storm forms over a building; the charged horseshoe lands in front of it.' },
          { w: 573, t: 'Place the horseshoe on the yellow symbol by spawn and fill it with kills, then hit the chest with Durendal', d: 'Unlocks the lightning incantation.' },
        ],
      },
      {
        id: 'balmung', tab: 'weapons', type: 'Sword upgrade · Dark', name: 'Balmung (Raven)', short: 'Balmung', img: I + 'balmung.webp', color: 'void',
        summary: 'Find an old curio in the Alchemical Lab, set the ring device in the Tavern cellar to its symbols, lead dark orbs into three portals, then scare a raven out of the sewer slide.',
        video: SV,
        steps: [
          stamp,
          { w: 588, t: 'Find the curio in the Alchemical Lab', d: 'Only one spawns per game: a ram horn, a lion jaw, a fish fossil, a scorpion fossil or a two-headed raven skull.' },
          { w: 650, t: 'Set the rings in the Tavern cellar for your curio', d: 'Under the bar. Place the curio, put in the Raven sword, then turn the inner (zodiac) and outer (element) rings:', table: { head: ['Curio', 'Inner ring', 'Outer ring'], rows: [
            ['Ram horn', 'Aries ♈', 'Fire 🜂'],
            ['Lion jaw', 'Leo ♌', 'Fire 🜂'],
            ['Fish fossil', 'Pisces ♓', 'Water 🜄'],
            ['Scorpion fossil', 'Scorpio ♏', 'Water 🜄'],
            ['Two-headed raven skull', 'Gemini ♊', 'Air 🜁'],
          ] } },
          { w: 696, t: 'Lead the dark orbs into three portals', d: 'Orbs float out of the rings and follow you. Stand behind the purple portal so three of them fall in; it moves twice (into the bar, then up by the pool table). Don\'t leave the Tavern or it resets.' },
          { w: 742, t: 'Take Balmung from the rings' },
          { w: 758, t: 'Scare the raven out of the sewer slide and shoot it', d: 'Behind Pack-a-Punch. Ride the slide with a gun out, shoot the raven at the end, then shoot it in the air. It drops a talon.' },
          { w: 773, t: 'Place the talon on the yellow symbol in the water room, fill it with kills, then hit the chest with Balmung', d: 'In the underground area to the right as you enter the castle. Unlocks the dark incantation.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Citadelle des Morts main quest', short: 'Main quest',
        summary: 'Talk to Krafft, gather four torn pages, decode a symbol wall to open a book, use the traps shown on the pages, salute the four knights in order, finish four elemental challenges with the Mystic Orb, then take the Guardian Key and fight the Guardian.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, Weaver skin'],
          ['Boss', 'The Guardian'],
        ],
        prep: [
          { t: 'Pack-a-Punch on', needs: ['power-pap'] },
          { t: 'All four upgraded swords and all four incantations', needs: ['solais', 'caliburn', 'durendal', 'balmung'], d: 'Only needed from step 5; do the first steps while you work on them.' },
          { t: 'Melee Macchiato', d: 'Its machine is on the castle battlements.' },
          { t: 'For the boss: triple Pack-a-Punched bullet gun, perks, Mutant Injections' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 31, t: 'Talk to Krafft through the wooden door', d: 'In the small hallway behind Quick Revive in the dungeon. Wait for the dialogue, then interact to open the window flap.' },
          { w: 31, t: 'Pick up the four torn pages in the Sitting Rooms', d: 'Each has a glowing red eye. One page per area of the room:', list: [
            'Page I: by the walls and boxes near the door to the Entrance Hall.',
            'Page II: around the bunk beds.',
            'Page III: by the TV stand and sofa next to Stamin-Up.',
            'Page IV: on the corridor wall between the Alchemical Lab and the Oubliette.',
          ] },
          { w: 868, t: 'Punch the odd square in the water room with Melee Macchiato', d: 'A panel of symbols opens.' },
          { w: 884, t: 'Read the six flasks in the Tavern and shoot the symbols in that order', d: 'The six green flasks are numbered I to VI; interact with each to see a blue symbol. Shoot the matching symbols on the panel in that order (they move around; a miss doesn\'t matter). A red orb opens the wall: put the four pages in the book.' },
          { w: 961, t: 'Use the trap shown on each page, in order', d: 'Read the pages top left, bottom left, top right, bottom right. Each shows an eye symbol: find the trap with the same symbol (check your map), turn it on and get about 10 to 15 kills inside. It shuts off early when it worked, and the page goes dark.', tip: 'Watch for spiky eyes with or without a circle around them; they\'re different traps. The last page is always the trap in the Sitting Rooms.' },
          { w: 1118, t: 'Salute the four knights in the order shown by the orb holder', needs: ['solais', 'caliburn', 'durendal', 'balmung'], d: 'Four animal symbols around a new orb holder on the wall (between the Sitting Rooms and the Oubliette) give the order. For each knight: hold its sword, cast its incantation at the statue, then do the weapon inspect right away. The statue glows yellow when it worked; wait for it before the next one.', tip: 'Lion: Solais and light. Dragon: Caliburn and fire. Stag: Durendal and lightning. Raven: Balmung and dark.' },
          { w: 1210, t: 'Pick up the Mystic Orb that drops' },
          { w: 1225, any: 'Challenges in any order', t: 'Fire challenge', d: 'Put the orb in the holder by the trap in the Courtyard and start it. Get fire kills: Caliburn, the fire incantation, Molotovs or Napalm Burst.' },
          { w: 1287, any: 'Challenges in any order', t: 'Light challenge', d: 'Holder above the Dining Hall gate, opposite Vulture Aid. Stand in the big green orbs that appear until enough souls flow in.' },
          { w: 1317, any: 'Challenges in any order', t: 'Dark challenge', d: 'Holder in the water room by the dark incantation. Only kills that suck zombies up and drop them count: Balmung\'s charged attack, the dark incantation or Shadow Rift ammo.' },
          { w: 1363, any: 'Challenges in any order', t: 'Lightning challenge', d: 'Holder against the gate by the light incantation ritual in the Town Square. Get electric kills: Durendal\'s charged attack, the lightning incantation or Dead Wire.' },
          { w: 1393, t: 'Get ready', d: 'All the perks you can, a triple Pack-a-Punched bullet gun, Mutant Injections and GobbleGums.' },
          { w: 1408, t: 'Put the charged orb in the wall and take the Guardian Key', d: 'The wall with the four animal symbols opens into a secret study. Take the key from the table.' },
          { w: 1424, t: 'Put the key in the statue in the Town Square', d: 'At its feet. Everyone votes, and the statue wakes up as the Guardian.' },
          { w: 1440, t: 'Defeat the Guardian', d: 'Get behind him and shoot his back to break a seal. Then shoot whichever spots glow: wrists, shoulders, knees, chest or face. Lava slowly floods the arena and he throws lava geysers later on. Incantation boxes and ammo are in the middle. In the last phase only his chest can be hit.', tip: 'A Mutant Injection lets you hit him hard while zombies leave you alone.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Slave"',
        summary: 'Interact with three Mister Peeks headphones.',
        video: SE(878),
        spots: [
          'In the Tavern, on a round table between the workbench and the armour wall-buy.',
          'In the Courtyard just past Speed Cola: turn right, then right again.',
          'In the Undercroft stairway, right of the red sofa.',
        ],
      },
      {
        id: 'song-caliburn', tab: 'side', type: 'Song', name: '"Caliburn"',
        summary: 'Melee the three unlit dragon braziers with the upgraded Caliburn: on the Village Ramparts, on the Nature Path next to the gate to the Town Square, and in the Town Square near the Rampage Inducer.',
        video: SE(915),
      },
      {
        id: 'mayas-revenge', tab: 'side', type: 'Side quest', name: 'Maya\'s Revenge (play as Maya)',
        summary: 'Standard mode only. Playing as Maya Aguinaldo, from round 13 interact with the radio near Vulture Aid in the Dining Hall. You\'re taken somewhere else to kill zombies, then a cutscene with Franco plays. Back in the Dining Hall you get a Legendary GS45 and other loot.',
        video: SE(708),
      },
      {
        id: 'bartender', tab: 'side', type: 'Free perk', name: 'Bartender: free PhD Flopper and 7,000 Essence',
        summary: 'Collect three bottles and put them on the drink tray on the Tavern bar. Your guns go away and zombies walk up to order: hand each one the drink of the matching colour (100 Essence each). Serve enough and you get 7,000 Essence and PhD Flopper.',
        video: SE(106),
        spots: [
          'Undercroft: under the fold-up table left of the red couch.',
          'Sitting Rooms: bottom shelf of the rack right of the couch facing the TV.',
          'Dining Room: under the fold-up table right of the red couch.',
        ],
      },
      {
        id: 'rat-king', tab: 'side', type: 'Free reward', name: 'Rat King',
        summary: 'Break the cheese display in the Town Square and take the wheel at the bottom. Find the hiding mice, then put the cheese on the empty plate the mice gather round in the north-east corner of the Pack-a-Punch room (Oubliette). They eat it and hand out points, ammo mods, random perks, weapons or Monkey Bombs/Kazimirs, plus a crown you can wear.',
        video: SE(271),
        spots: [
          'Town Square: under a flower pot right of the door to the Nature Path.',
          'Nature Path: by a hole under the round stone structure in front of Deadshot Daiquiri.',
          'Village Ascent: under the pizza truck with road-work signs.',
          'Under a broken step on the south-easternmost wooden stairs by the Lion Cannon.',
          'Dining Hall: under a pallet opposite the ammo crate.',
          'Sitting Rooms: under a small bench between the bunks.',
          'Alchemical Lab: behind the stone tablet under the table.',
          'Undercroft: by a hole in the middle of the westernmost wall.',
          'Dungeon: on the floor of the cell left of the KSV wall-buy.',
        ],
      },
      {
        id: 'floating-peeks', tab: 'side', type: 'Free perk', name: 'Floating Mister Peeks (perk for everyone)',
        summary: 'Shoot four Mister Peeks dolls (a scope helps). The last one gives every player a random perk.',
        video: SE(13),
        spots: [
          'Elemental Pop room: through the south-easternmost window, just above a tree (only visible through that window).',
          'In the barn with Deadshot Daiquiri outside: through the hole above the Mystery Box spot, dancing in a broken castle wall.',
          'Dining Hall upper floor, south-east corner: look up at the red-roofed tower; he\'s in the small window under the roof.',
          'Dungeon: on the bed in the cell left of the ammo crate.',
        ],
      },
      {
        id: 'lockdown', tab: 'side', type: 'Free perk', name: 'Undercroft incantation lockdown',
        summary: 'After the main quest\'s swords, incantations and symbol steps, the symbols on the Undercroft wall disappear. Cast a different incantation on the wall four times to light each row. The Undercroft locks down for three waves; survive for a Random Perk and four ammo mods (better loot in co-op).',
        video: SE(210),
      },
      {
        id: 'chess-knight', tab: 'side', type: 'Helper', name: 'Chess knight protector',
        summary: 'Collect four chess pieces, then interact with the chess board in the Sitting Rooms and kill zombies inside the purple circle. When it\'s full, a life-size blue knight hologram follows you and attacks zombies for a few minutes.',
        video: SE(363),
        spots: [
          'On the table next to the Dragon statue where the sword goes.',
          'Tavern basement: low shelves opposite the Crafting Table.',
          'Elemental Pop room: on a table right of the door to the castle entrance.',
          'Dungeon: on a table next to the Point of Power trap.',
        ],
      },
      {
        id: 'cannon-travel', tab: 'side', type: 'Map tip', name: 'Lion Cannon to the Dining Hall',
        summary: 'Firing the Lion Cannon to open the castle shoots its crank wheel towards the Town Square. Take it from the empty fruit box under the rubble there, and the blowtorch from the north-east corner of the Dining Hall (under Vulture Aid). Put the wheel back and turn it all the way: the cannon can now fire you to the Dining Hall too. Facing spawn, its 100th launch (yes, 100) fires you into the bell tower instead: the bell rings for 30 seconds and pulls every zombie on the map to it like a Monkey Bomb.',
        video: SE(424),
      },
      {
        id: 'wishing-well', tab: 'side', type: 'Free reward', name: 'Wishing well (Essence bank)',
        summary: 'With Vulture Aid, wait on a special round for a Vermin to climb out of the well in the Village Ascent and throw a cooked frag in. It spits out up to 1,000 Essence. Throw Essence back in (up to 10,000), then on the next Max Ammo round throw another frag in to get it all back for the whole team. Double Points or Profit Sharing at that moment boosts it.',
        video: SE(578),
      },
      {
        id: 'fireplaces', tab: 'side', type: 'Map tip', name: 'Fireplace protector',
        summary: 'Light four fireplaces quickly with Molotovs or a charged Caliburn swing. The last one you light shoots fireballs at zombies for a while. You can do it again after a few rounds.',
        video: SE(655),
        spots: [
          'Dining Hall: north wall.',
          'Sitting Rooms: left of Stamin-Up.',
          'Alchemical Lab: under a table in the south-west corner.',
          'Tavern: right of the Arsenal.',
        ],
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each.',
        video: SE(787),
        spots: [
          'Bonus Points: behind a couch in the Undercroft.',
          'Max Ammo: on a window sill in the Upper Village.',
          'Double Points: inside a zombie window in the Alchemical Lab.',
          'Full Power: on the Dining Hall roof.',
          'Insta-Kill: on the scaffolding above the Tavern, over the end of the cave slide.',
          'Max Armor: on the roof inside the Entrance Hall.',
          'Nuke: above the Elemental Pop room on the Hillside Ramparts.',
        ],
      },
    ],
  });
})();
