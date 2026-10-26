/* Dead of the Night — Black Ops 4 DLC 1 (Chaos story) */
(() => {
  const I = 'assets/img/bo4/dotn/';
  const D = '7HDVa71R6Js'; // MrDalekJD ultimate guide
  const E = 'C5s5zwOWpls'; // MrRoflWaffles easter egg guide
  ZG.addMap({
    game: 'bo4', id: 'dead-of-the-night', order: 4, group: 'chaos',
    name: 'Dead of the Night', dlc: 'Black Ops Pass · DLC 1', eeName: 'Trial by Ordeal',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Alistair\'s Folly', 'Savage Impaler', 'Silver bullets'],
    blurb: 'A haunted English manor full of vampires (Nosferatu) and werewolves. Craft silver bullets, upgrade Alistair\'s pistol twice, finish three quest lines and trap the werewolf boss.',
    quick: [
      ['Main EE', 'Trial by Ordeal'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapons', 'Alistair\'s Folly (2 upgrades), Savage Impaler'],
      ['Shield', 'Ballistic Shield'],
    ],
    intro: {
      start: 'Grab the Sentinel Artifact first. Pack-a-Punch needs three tuning forks from crystal challenges, and silver bullets are worth making before you open the Forest.',
      parts: 'One shield with three parts. The Silver Melter and the Library bench make silver bullets.',
      weapons: 'You need the fully upgraded Alistair\'s Annihilator for the easter egg. The Savage Impaler is optional but great against vampires.',
      'easter-egg': 'Three quest lines that can be done in any order, three lockdowns, then the boss. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'pap', tab: 'start', type: 'Getting started', name: 'Sentinel Artifact & Pack-a-Punch', short: 'PaP',
        summary: 'Take the Sentinel Artifact, then find three crystals, gaze into each and win its challenge for a tuning fork. Three forks open the gate to the Forest, where Pack-a-Punch is.',
        video: { id: D, title: 'Ultimate guide to Dead of the Night', ch: 'MrDalekJD', len: '44:54' },
        steps: [
          { w: 124, t: 'Take the Sentinel Artifact', d: 'It\'s on the side of the manor opposite the one you spawn on. It opens extra doors.' },
          { w: 344, anyList: 'Crystals in any order', t: 'Find the three crystals', d: 'Melee the vases (valises) to find each one:', list: [
            'Purple: Alistair\'s bedroom (foot of the bed), the Trophy Room, or the hallway outside his room.',
            'Green: Library (table by the Greek statue, by the stairs next to the workbench) or on a table in the Study above.',
            'Blue: Wine Cellar, in front of a large barrel on the left, or on a table right of the MX9.',
          ] },
          { w: 360, t: 'Charge each crystal and gaze into it', d: 'Kill zombies next to it until it fills (about 4 on solo, more in co-op), then hold interact to look into it. It shows one of three challenges.' },
          { w: 377, any: 'Crystal challenges (any order)', t: 'Clock challenge', d: 'The crystal shows a clock. Find the grandfather clock whose hands are **not** spinning wildly (Main Hall by Atlas, Dining Room right of the box, or the Billiards Room on the left). Interact; a dial appears on the floor and counts down from 12. Stay inside it while it ticks. The tuning fork comes out of the clock.' },
          { w: 502, any: 'Crystal challenges (any order)', t: 'Ghost escort', d: 'The crystal shows an item. Interact with that item to reveal a ghost and follow her until she gives you the fork. Items: the scared maid portrait in the Smoking Room (left of the Essex), the other maid portrait (right of the Strife), the noose over a chair in the Wine Cellar, the doll on a table left of the Danu altar in the Entrance Hall, the lady with scratched-out hands in the Music Room, or the will in a red box on the Study bookshelf.' },
          { w: 642, any: 'Crystal challenges (any order)', t: 'Nosferatu ambush', d: 'The crystal shows a perk altar (Odin, Ra or Zeus). Go to that altar (end of the Cemetery by the portal, or in the Gardens). Your view goes grey and vampires attack; kill them all for the fork.' },
          { w: 1033, t: 'Use the three forks on the gate and kill the werewolf', d: 'The blocked gate is in the North Atrium, past the Main Hall. A werewolf jumps out when it opens. **Kill it with silver bullets** so it drops Werewolf Chaos Material (needed for Chaos Theory). Pack-a-Punch is in the Forest.', needs: ['silver-bullets'] },
        ],
      },
      {
        id: 'silver-bullets', tab: 'start', type: 'Getting started', name: 'Silver bullets', short: 'Silver',
        summary: 'Melt three silver objects, add three powders and craft silver bullets in the Library. Silver bullets do bonus damage to werewolves and vampires, and several easter egg steps need them.',
        img: I + 'dispenser.webp',
        video: { id: E, title: 'Dead of the Night easter egg guide', ch: 'MrRoflWaffles', len: '58:33' },
        steps: [
          { w: 109, anyList: 'Items in any order', t: 'Collect three silver items', list: [
            'Candle holder: Main Hall right of the grandfather clock (facing away from Atlas), a table on the left as you enter the Entrance Hall, or on the floor of the Billiards Room.',
            'Silver bowl: Wine Cellar, on the wall by Godfrey\'s vampire drawing, by the noose on the table, or on a wine cabinet on the opposite side.',
            'Silver trophy: West Hallway floor by the sofa, a corner table in the Dining Room, or the corner of the dining table opposite the clock.',
          ] },
          { w: 189, t: 'Melt them at the Silver Melter in the Wine Cellar', d: 'The bench on the left as you go down. You get molten silver.', imgs: [{ src: I + 'melter.webp', cap: 'The Silver Melter' }] },
          { w: 204, anyList: 'Powders in any order', t: 'Collect three powders', list: [
            'Bat guano: in the Cemetery (by a fence near the entrance, behind a tree up the stairs, or in the shadow on the path past the fencing).',
            'Charcoal: in front of a fireplace. Check the Billiards Room, Master Bedroom and Main Hall first.',
            'Sulfur (gold-looking): on a table in the Greenhouse Laboratory, left or right of the entrance or at the back left.',
          ] },
          { w: 282, t: 'Craft silver bullets at the Library bench', d: 'Then use the dispenser table with any gun (except wonder weapons) and pay to load silver bullets. An icon above your ammo shows it worked. You can top up there later too.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'ballistic-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Ballistic Shield', color: 'gold',
        summary: 'A riot shield with a strong machine pistol (aim to fire). The easter egg uses it to bash things and carry fire and electricity.',
        facts: [['Parts', '3'], ['Build at', 'Smoking Room bench (next to the Billiards Room)']],
        video: { id: 'm6LRjVyZNu4', title: 'Dead of the Night: how to build the shield', ch: 'MrRoflWaffles', len: '2:20' },
        parts: [
          { w: 0, name: 'Part 1', area: 'Balconies', spots: ['East Balcony, against a pillar (near the Sentinel Artifact).', 'Through the Music Room, next to the Saug wall-buy.', 'West Balcony (through the Tea Room).'] },
          { w: 30, name: 'Part 2', area: 'Library & Study', spots: ['On the sofa in the Library.', 'On the broken bookshelf in the Library.', 'Upstairs in the Study, on the table in front of the swirly painting.'] },
          { w: 47, name: 'Part 3', area: 'East Hallway & Dining Room', spots: ['On or next to a chair in the East Hallway.', 'On the counter just ahead, entering the Dining Room.', 'Next to a marble pillar in the main Dining Room.'] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'alistairs-folly', tab: 'weapons', type: 'Wonder weapon', name: 'Alistair\'s Folly', img: I + 'folly.webp', color: 'green',
        summary: 'A ray-gun-like revolver firing green explosive rounds. Free from a safe in the Library, then upgraded twice: Chaos Theory (charged shots) and Alistair\'s Annihilator (four charged shot types).',
        facts: [['Box', 'Yes (950)'], ['Free quest', 'Four coloured symbols → Library safe'], ['Upgrades', 'Chaos Theory → Alistair\'s Annihilator']],
        video: { id: D, title: 'Ultimate guide to Dead of the Night', ch: 'MrDalekJD', len: '44:54' },
        steps: [
          { w: 1237, anyList: 'Symbols in any order', t: 'Note the four coloured symbols', d: 'One of each colour, in a random spot of its area. Write each one down:', list: [
            'Blue (Cemetery): on a tombstone right of the stairs to the Mausoleum, on top of the small mausoleum to its right, under the lion statue left of the portal, or on a stone coffin by the Cemetery entrance.',
            'Green (Gardens / Greenhouse): behind a gate between the Greenhouse Lab entrance and the stairs to the Dining Room, in a small round room by the Gardens perk spot, or behind the gates left or right of it.',
            'Yellow (Forest Terrace): behind vines left of the Bowie Knife, right of the GKS, or along the paths left of the GKS / right of the Bowie Knife.',
            'Red (inside the manor): stairs between the East Gallery and Main Hall, a barrel in a Wine Cellar barrier right of the MX9, the Master Bedroom wall next to the bed, or behind the Dining Room bar.',
          ] },
          { w: 1384, t: 'Set the dials on the Library safe and open it', d: 'Rotate each dial to its colour\'s symbol, then interact with the safe to take Alistair\'s Folly.' },
        ],
        upgrade: {
          name: 'Chaos Theory → Alistair\'s Annihilator', img: I + 'annihilator.webp',
          summary: 'Chaos Theory adds a charged shot (acid confusion pool or a whirlwind). Alistair\'s Annihilator adds two more: a shrinking portal and a fireball. Cycle charged shot types to pick one. Every Prima Materia is made by putting a Chaos Material in the machine under the telescope in the Greenhouse Lab (about 15 seconds).',
          video: { id: E, title: 'Dead of the Night easter egg guide', ch: 'MrRoflWaffles', len: '58:33' },
          steps: [
            { w: 359, t: 'Get Werewolf Chaos Material', d: 'Kill a werewolf with silver bullets (the one at the Forest gate is perfect).', needs: ['silver-bullets'] },
            { w: 1766, t: 'Shield-bash the Library bookshelf for the Chaos Theory part', d: 'The shelf to the right of the silver bullet dispenser opens a secret room.', needs: ['ballistic-shield'] },
            { w: 1781, t: 'Turn the material into Prima Materia and craft Chaos Theory', d: 'Use the machine under the telescope, then the correct one of the two benches in the Greenhouse Lab.', imgs: [{ src: I + 'chaos-theory.webp', cap: 'Chaos Theory' }] },
            { w: 1828, t: 'Fill a jar with Nosferatu bile', d: 'Kill vampires with the charged shot (around 4–5). Each drops a green splat of bile to pick up.' },
            { w: 1859, t: 'Summon and kill a Crimson Nosferatu', d: 'Interact with the coffin lid glowing red in the Cemetery. Kill the Crimson vampire for Nosferatu Chaos Material.', warn: 'From now on, red Crimson vampires appear as normal enemies. They ignore Chaos Theory charged shots.' },
            { w: 1891, t: 'Chase the orange lantern and shoot the bat', d: 'On the railing in front of the Mausoleum, one lantern glows orange instead of yellow. Shoot it with Chaos Theory; another lights up orange. Keep going (4–5 lanterns) until a bat flies out. Shoot it down with Chaos Theory right away for Bat Chaos Material.', tip: 'Too slow? Wait about 90 seconds for the lanterns to reset.' },
            { w: 1989, t: 'Make zombies dig up the frame in the Forest', d: 'Three piles of glowing blue mushrooms are in the Forest. Stand by one and hit a zombie standing on it directly with the charged acid shot; it digs before dying. One of the piles holds the Annihilator frame.' },
            { w: 2085, t: 'Make two more Prima Materia and craft the Annihilator', d: 'Put the Nosferatu and bat materials in the machine, then craft Alistair\'s Annihilator at the other Greenhouse bench.' },
          ],
        },
      },
      {
        id: 'savage-impaler', tab: 'weapons', type: 'Wonder weapon', name: 'Savage Impaler', img: I + 'impaler.webp', color: 'red',
        summary: 'A steampunk crossbow that one-shots zombies with headshots and shreds vampires and werewolves. Free from the Crypt under the Cemetery; after that it\'s in the box.',
        facts: [['First copy', 'Crypt quest (needs everyone in the Crypt)'], ['After that', 'Mystery Box']],
        video: { id: D, title: 'Ultimate guide to Dead of the Night', ch: 'MrDalekJD', len: '44:54' },
        steps: [
          { w: 1529, anyList: 'Candles in any order', t: 'Knife six candles out', d: 'You hear a sound for each:', list: [
            'East Gallery: table across from the Strife.', 'Master Bedroom: bedside table by the Escargot.', 'Music Room: musician\'s bench by the doorway to the East Balcony.',
            'Wine Cellar: small wooden bench on the west side.', 'Study: small table across from a shield part spot.', 'East Hallway: table under the cliffside painting.',
          ] },
          { w: 1628, t: 'Touch the gravestone in the Forest', d: 'It\'s spouting water, right of the portal to the North Atrium. Your view turns red for a limited time.' },
          { w: 1913, t: 'Find the ghost lady and lead her to the Mausoleum', d: 'Look in the Music Room, Entrance Hall, Dining Room and Bedroom Hallway (she can hide behind barriers). Stay near her. If your vision returns to normal, touch the gravestone again.' },
          { w: 2015, anyList: 'Kills in any order', t: 'Kill four possessed zombies four different ways', d: 'At the Mausoleum she possesses glowing zombies one at a time. Kill one each with: a normal gun, a lethal grenade (Wraith Fire is easiest), a shield bash, and your specialist. Each drops jewellery.' },
          { w: 2078, t: 'Place the jewellery and kill vampires on the markers', d: 'Put the four pieces on the white circles in the Mausoleum, then kill a Nosferatu over each one until all the symbols glow blue.' },
          { w: 2126, t: 'Open the Crypt and survive', d: 'Interact with the stone coffin left of the left staircase up to the Mausoleum. Take the Savage Impaler from the altar inside (everyone has to be in the Crypt), then kill the vampires and Crimsons that pour out.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Trial by Ordeal', short: 'Main EE',
        summary: 'Look into the three Pack-a-Punch crystals again to unlock three quest lines (Telescope, Knight and Effigy). Each ends in a stone slab and a lockdown; three slabs open the door to the werewolf boss.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Ending cutscene and achievement'],
          ['Hardest part', 'The Atlas ring puzzle and the final lockdowns'],
        ],
        prep: [
          { t: 'Pack-a-Punch open', needs: ['pap'] },
          { t: 'Silver bullets on a gun', needs: ['silver-bullets'] },
          { t: 'Ballistic Shield built (everyone in co-op)', needs: ['ballistic-shield'] },
          { t: 'Alistair\'s Annihilator (fully upgraded)', needs: ['alistairs-folly'] },
          { t: 'A Fire Core for a fire trap', d: 'Glowing disc lying around the manor (Cemetery entrance, side tables in the Main Hall, Entrance Hall, the path to the Greenhouse). Picking one up lets you build a fire trap.', imgs: [{ src: I + 'fire-core.webp', cap: 'Fire Core' }] },
          { t: 'Optional: Savage Impaler', needs: ['savage-impaler'] },
        ],
        stepsTitle: 'Quest steps',
        video: { id: E, title: 'Dead of the Night easter egg guide', ch: 'MrRoflWaffles', len: '58:33' },
        steps: [
          { w: 374, t: 'Look into the three crystals again', d: 'Each now shows one of three images: a knight, a circular object (telescope) or a pile of twigs (effigy). These are the three quest lines. Do the lines in any order; the steps inside a line go in order.' },
          { w: 498, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Telescope 1: shoot the rod above the Mausoleum with silver bullets', d: 'All players fire at the rod on top of the Mausoleum at the same time. A blue beam shoots into the manor, towards Atlas in the Main Hall.' },
          { w: 530, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Telescope 2: line up the rings above Atlas', d: 'On the North Atrium Bridge (where you spawned) a panel has three levers (L, M, R), each with two settings; use only the first setting of each. The left lever turns the inner (blue) and middle (green) rings; the right lever turns the middle and outer (red) rings in the opposite direction; the middle lever turns all three. A ding means a ring reflects its beam.', list: [
            'Turn **M** until green dings.', 'Turn **L** until blue dings.', 'Turn **R** until red dings.',
            'Repeat M, then L, then R until all three stay lined up. Moving L and R by the same amount leaves green where it is.',
          ], tip: 'Don\'t press levers at random. If you get lost, fix green with M first, then sort out the edges with L and R.' },
          { w: 1020, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Telescope 3: find three zodiac symbols and count their scratches', d: 'Three rooms have a faint zodiac symbol scratched in. Each of those rooms also has scratch marks in three spots (one can be missing, which counts as 0). Add up the scratches per room:', list: [
            'Main Hall: symbol right of the stairs up to the west spawn (behind a candlestick). Scratches: behind the statue on the far wall, above the fireplace by the bullet hole, high around the arch.',
            'Wine Cellar: symbol on the bottom of the wine rack closest to the perk. Scratches: on the big barrel at the bottom of the right stairs, on a cabinet door between the left stairs and the perk, on a barrel behind the workbench.',
            'Entrance Hall: symbol under the table across the room, left of the perk. Scratches: on the statue\'s shield right of the perk, on the corner right of the portal, top right of the painting.',
            'Billiards Room: symbol under the chess table (go prone). Scratches: next to the bookshelf, above the cabinet nearest the Smoking Room, on the floor under the table on the right.',
            'Library: symbol inside a broken cabinet left of the gun cabinet. Scratches: top right of the barrier window, on the back of a crate behind you, by the left foot of the giant skeleton.',
            'Trophy Room / bedroom: symbol behind the lamp at the far back left. Scratches: side of the fireplace, on the desk left of the bed, above the bathtub (through the window past the fire trap).',
            'Dining Room: symbol on the side of the marble pillar by the green sofa. Scratches: on the ceiling in front of the stairs, on the tablecloth corner near the stairs, on the wall left of the light fixture.',
          ] },
          { w: 1306, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Telescope 4: enter the symbols at the telescope', d: 'Upstairs in the Greenhouse Laboratory, turn the dial by holding interact on its left or right side and knife the centre to enter the symbol at the top. Enter them from the **fewest scratches to the most**. The telescope moves if it\'s right.', tip: 'A wrong code just re-randomises the symbols. You can also enter a dud code on purpose to move symbols to spots you know.' },
          { w: 1589, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Telescope 5: open the dome and jam the crank', d: 'Hold interact on the crank behind the dial to open the roof, and while holding it open, shield-bash the crank so it stays open.' },
          { w: 1607, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Telescope 6: electrify your shields and bash the telescope together', d: 'Turn on the electric trap in the Greenhouse Lab. Everyone runs through it with the shield out, then runs upstairs and bashes the telescope at the same time. A beam clears the clouds and reveals the full moon. A stone slab appears under the telescope (leave it for now).' },
          { w: 2474, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Knight 1: light 12 fireplaces with blue fire', d: 'Put a Fire Core in a fire trap (the Library one is easiest) and turn it on. Hit the flames with a charged Annihilator shot so they turn blue, run through with the shield out, then melee four fireplaces in order. A gem appears in the last one. Do three runs:', list: [
            'Run 1: Smoking Room, Library right, Library left, Billiards Room.',
            'Run 2: Main Hall right (facing the clock), upstairs by spawn (East Gallery), Main Hall left, across by the Tea Room (West Gallery).',
            'Run 3: Trophy Room, Master Bedroom, Music Room, Dining Room.',
          ], tip: 'If the flames on a fireplace go out, you hit them out of order or took too long. Restart the run (another 1,000 for the trap).' },
          { w: 2676, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Knight 2: give the gems to the three knight statues', d: 'Hold interact on the knights in the Cemetery (right side as you enter), the Main Hall and near the Greenhouse perk spot. Each knight crumbles and its crystal follows you. Walk slowly to the Forest (they get stuck if you run) and lead each over the floor panel of its colour.' },
          { w: 2755, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Knight 3: feed the ghost knights, then trap a werewolf', d: 'Each knight is a soul box: kill zombies nearby and it moves closer to Pack-a-Punch (10–15 souls per move). When all three form a triangle around Pack-a-Punch, kill a werewolf inside it with silver bullets (stand inside too). A slab appears.' },
          { w: 420, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Effigy 1: shoot down five branches in the Cemetery', d: 'White birch trees with falling leaves each have one branch you can shoot off. Pick up each fallen branch; it flies to the middle of the Cemetery to build a wicker effigy. Do this any time.' },
          { w: 2147, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Effigy 2: find the 1912 gravestone', d: 'In the Cemetery, look for gravestones with your characters\' faces. The player whose stone shows the death year 1912 interacts with it; their screen goes strange.' },
          { w: 2210, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Effigy 3: light the effigy and climb on', d: 'Someone fires the Annihilator\'s fireball charged shot at the ground right in front of the effigy. While it burns, the 1912 player holds interact to climb on, is pulled down into a red corridor and comes back invisible.', tip: 'Solo: fire the shot yourself, then climb on right away.' },
          { w: 2272, any: 'Three quest lines (lines in any order, steps within a line in order)', t: 'Effigy 4: escort the ghost to the effigy', d: 'As the invisible player (zombies can still hit you), find the female ghost in the manor (often the Master Bedroom behind a barrier, the Entrance Hall, Library or Tea Room; she hides in perk spots and outside barriers). Stay close as she walks to the effigy and makes a bonfire. Hold interact on the slab that appears to return.', warn: 'Going down resets this line back to climbing the effigy.' },
          { w: 2833, t: 'Prepare for the lockdowns', d: 'All perks, repacked weapons, silver bullets, a Homunculus or two from the box, specialist ready.' },
          { w: 2880, anyList: 'Lockdowns in any order', t: 'Survive three slab lockdowns', d: 'Everyone holds interact on a slab together. You\'re locked in with zombies, vampires, Crimsons and finally a werewolf wave. When the screen flashes, interact with the slab for a Max Ammo and to take it.', list: [
            'Greenhouse Lab: the slab under the telescope.',
            'Cemetery: the slab where the effigy burned. Holding the Mausoleum with its fire trap on works well.',
            'Forest: the slab in front of Pack-a-Punch. Cover the left, middle and right lanes; the knights help.',
          ] },
          { w: 3206, t: 'Boss: enter through the door in the Forest', d: 'Everyone holds interact on the door. You can\'t come back.' },
          { w: 3222, t: 'Boss phase 1: trap the werewolf in the green square', d: 'Rotate the statues around the arena so their white beams hit the green square (they turn green). Stand in the square to lure the boss in; he\'s stunned for about 15 seconds. Throw a Homunculus and unload. Repeat about five times. Use the Carpenter and Max Ammo when needed.' },
          { w: 3360, t: 'Boss phase 2: survive the werewolf wave', d: 'Lots of zombies, then lots of werewolves. Hellion Salvo and silver bullets shine here.' },
          { w: 3392, t: 'Boss phase 3: find the hidden square', d: 'The green square is invisible now. Sweep one statue\'s beam across the arena until it turns green, point the other two there, then trap and damage him again (5–7 times) until he dies and the cutscene plays.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'secret-rooms', tab: 'side', type: 'Free items', name: 'Secret rooms (pool table, wine barrels, bookshelf)',
        summary: 'Three little puzzles that open hidden rooms with points, a weapon, an elixir or silver bullets.',
        steps: [
          { any: 'Any of the three, in any order', t: 'Billiards: pot the balls 1 to 9 in order', d: 'Shoot the pool balls into the pockets in number order for 500 points. Pot them all on the side away from the fireplace instead and a bookcase opens with an SG12, a Sword Flay elixir or a random power-up.' },
          { any: 'Any of the three, in any order', t: 'Wine Cellar: knife the barrels from fastest to slowest drip', d: 'Six barrels drip wine at different speeds. Knife the nozzle of the fastest, then the next fastest, down to the slowest (you see a wine splash when it\'s right). One wrong barrel and you can\'t retry. A cabinet opens with silver bullets or 500 points.' },
          { any: 'Any of the three, in any order', w: ['7HDVa71R6Js', 172], t: 'Two bookshelves by the stairs: match the symbols', d: 'Hold interact on the symbol shown on one bookshelf, then find and press the matching symbols on the other in turn. A secret room opens with points or a weapon.' },
        ],
      },
    ],
  });
})();
