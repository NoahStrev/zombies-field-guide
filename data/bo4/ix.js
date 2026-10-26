/* IX — Black Ops 4 launch map (Chaos story) */
(() => {
  const I = 'assets/img/bo4/ix/';
  ZG.addMap({
    game: 'bo4', id: 'ix', order: 1, group: 'chaos',
    name: 'IX', dlc: 'Launch map', eeName: 'Venerated Warrior',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Brazen Bull', 'Death of Orion', 'Crowd affinity'],
    blurb: 'A gladiator arena in ancient Egypt with four god towers (Danu, Ra, Odin and Zeus). Win over the crowd, appease all four gods and slay two war elephants.',
    quick: [
      ['Main EE', 'Venerated Warrior'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapon', 'Death of Orion (Serket\'s Kiss when upgraded)'],
      ['Shield', 'Brazen Bull (upgrade: Iron Bull)'],
    ],
    intro: {
      start: 'IX has no power switch. Open Pack-a-Punch by killing the four tower Champions, and keep an eye on crowd affinity: the easter egg needs it at both extremes.',
      parts: 'One shield (three parts, three spots each) and the Acid Trap, which you need for the free Death of Orion.',
      weapons: 'The Death of Orion is in the box, but a short quest guarantees it from your next box spin.',
      'easter-egg': 'Appease Danu, Ra, Zeus and Odin, then fight two elephants. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'basics', tab: 'start', type: 'Getting started', name: 'Map basics, trials & crowd affinity', short: 'Basics',
        summary: 'How the arena works: rope trials give free rewards, and the crowd hand in the corner of your HUD rewards or punishes you.',
        blocks: [
          { imgs: [{ src: I + 'layout.webp', cap: 'IX layout: the Arena in the middle, a god tower in each corner, the Temple (Pack-a-Punch) underground' }] },
          { p: 'There is no power to turn on. Perks come from the altar in each tower, using the four perks you picked in your loadout. Your specialist weapon charges from kills.' },
          { p: '**Trials:** knife the rope holding a banner next to any temple door in the Arena. A challenge appears on the left of your screen. Finish it and collect the reward from the bowl in the middle of the Arena on that temple\'s side. The next challenge starts only after you collect.' },
          { table: { head: ['Trial', 'Reward'], rows: [
            ['1', 'Self-revive'], ['2', 'Bonus Points'], ['3', 'Pack-a-Punched Strife pistol'], ['4', 'Max Ammo'], ['5', 'Full Power'],
            ['6', 'Random assault or tactical rifle'], ['7', 'Extra perk'], ['8', 'Max Ammo'], ['9', 'Pack-a-Punched Hades'],
          ] } },
          { p: '**Crowd affinity** is the skeletal hand next to your points. Fast kills, Gladiator and Brawler kills, revives and trap kills push it up; taking damage (especially from the floor fire), going down or throwing grenades at the crowd push it down. Near the top, the crowd throws a power-up into the Arena each round; near the bottom, it throws poop (costs 250 points to pick up).' },
          { imgs: [{ src: I + 'affinity.webp', cap: 'The affinity hand on the HUD' }] },
          { tip: 'Do the first three trials in the first rounds: trial 3 gives a Pack-a-Punched pistol, which makes the rest of the game much easier.' },
        ],
      },
      {
        id: 'pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'PaP',
        summary: 'Ring the gong in each of the four tower altar rooms, kill the Champions it summons and put their four heads on the spikes in the Temple.',
        steps: [
          { w: 122, anyList: 'Towers in any order', t: 'Ring all four gongs and kill the Champions', d: 'Each tower\'s altar room (top floor) has a gong. Hold interact on it, kill the Champion(s) that appear and walk over the floating head to pick it up. Do this in Danu, Ra, Odin and Zeus.', tip: 'Grab the shield parts while you\'re in each tower. They are all in the Ra, Zeus and Odin towers.' },
          { w: 171, t: 'Place the heads on the spikes in the Temple', d: 'Go underground to the Temple and hold interact on the metal spikes in front of the Pack-a-Punch altar. Pack-a-Punch opens a few seconds later.' },
          { w: 187, t: 'While you\'re there: grab two Acid Trap parts', d: 'The metal chain hangs over a torch to the left of Pack-a-Punch, and the wooden cog is under a brazier in the opposite corner.', needs: ['acid-trap'] },
        ],
        video: { id: 'YfyJk2TEf2c', title: 'Death of Orion guide (covers trials and Pack-a-Punch)', ch: 'MrRoflWaffles', len: '11:20' },
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'brazen-bull', tab: 'parts', type: 'Buildable · Shield', name: 'Brazen Bull', img: I + 'brazen-bull.webp', color: 'fire',
        summary: 'A bull shield with a katar blade for melee. Aim with it to slot the katar in and fire flaming bursts from the bull\'s nose. Nine melee kills set the katar on fire.',
        facts: [['Parts', '3'], ['Build at', 'Workbench in The Pit'], ['Repair', '1,500 points at the workbench'], ['Upgrade', 'Iron Bull']],
        parts: [
          { w: 49, name: 'Bull head', icon: I + 'part-bull.webp', area: 'Ra Tower: altar room', spots: [
            'To the right of the gong.',
            'Lying on the pillar next to the wall-buy (under the shotgun).',
            'Around the corner, just right of a pot between two pillars.',
          ] },
          { w: 0, name: 'Katar blade', icon: I + 'part-spear.webp', area: 'Zeus Tower', spots: [
            'Zeus altar room: in the hand of the statue near the top of the stairs.',
            'Zeus Tower entrance level: on the statue facing you at the bottom of the stairs.',
            'Bath room (bottom floor, red blood bath): on the shelf/table with the portrait above it.',
          ] },
          { w: 98, name: 'Grille plate', icon: I + 'part-plate.webp', area: 'Odin Tower', spots: [
            'Entrance level: in the shield rack in the bottom-left corner.',
            'Up the stairs (altar room): leaning against a barrel of spears.',
            'Cauldron room (bottom): resting against a wooden pillar, left of the shields on the wall.',
          ] },
        ],
        blocks: [{ note: 'Build it at the workbench just past The Pit, underground.' }, { imgs: [{ src: I + 'bull-gun.webp', cap: 'Aiming slots the katar in and turns the shield into a gun' }] }],
        video: { id: 'W2seH3nYU9s', title: 'IX: How to build the shield / all part locations', ch: 'MrDalekJD', len: '3:38' },
        upgrade: {
          name: 'Iron Bull', summary: 'Silver shield with a permanent green flame on the katar and its shots, more damage and more durability. Collect three shimmering "starry" parts in order, then take the Iron Bull from the workbench.',
          video: { id: 'yggo8Bcu-ZA', title: 'IX shield upgrade guide', ch: 'MrDalekJD', len: '11:21' },
          steps: [
            { w: 170, anyList: 'Heads in any order', t: 'Shoot three metal bull heads in the Zeus altar room with the shield\'s gun', d: 'Aim with the shield to slot the katar in, then fire:', list: ['On the ceiling directly above you as you enter.', 'Above the Mystery Box spot (bottom of a pillar).', 'On top of the pillar above the exit to the bridge (above the Titan wall-buy).'] },
            { w: 216, t: 'Shoot the first part down from the Temple dome', d: 'Look up at the ceiling above Pack-a-Punch for a small shiny shard. Shoot it with anything and pick it up.' },
            { w: 232, t: 'Light the katar on fire four times with special kills', d: 'Get exactly 8 melee kills with the shield, then make the 9th melee kill a Catalyst, Brawler or Gladiator; the katar catches fire. Keep meleeing until the flame goes out, then repeat. Use a different enemy for each 9th kill. After the 4th lighting, **stop** — leave the katar burning.', warn: 'If the shield breaks during a run of kills, that run starts over (a replacement shield doesn\'t lose the runs you already finished).', tip: 'Older videos (including this one) show killing three different Catalysts in quick succession with the shield after trapping them with a charged Serket\'s Kiss shot. If the counting method doesn\'t work in your game, try that.' },
            { w: 422, t: 'Grab the second part from the headless statue', d: 'Go down through Zeus Tower to the Odin–Zeus Temple entrance underground. A headless statue holds the shimmering part.' },
            { w: 516, t: 'With the katar still on fire, melee-kill a Brawler and a Gladiator', d: 'The flame can\'t go out before both kills.' },
            { w: 561, t: 'Shoot the third part down at the Fallen Hero', d: 'It sits on the ceiling above one of the entrances by the giant fallen stone head (a Mystery Box spot).' },
            { w: 578, t: 'Take the Iron Bull from the workbench in The Pit', d: 'Bring all three parts to the workbench where you built the shield.' },
          ],
        },
      },
      {
        id: 'acid-trap', tab: 'parts', type: 'Buildable · Trap', name: 'Acid Trap', img: I + 'acid-trap.webp', color: 'green',
        summary: 'A cauldron trap that pours acid on the zombies below. You need it to melt a stone head for the free Death of Orion.',
        facts: [['Parts', '3'], ['Build at', 'Trap spot in the walkway between the Arena and Ra Tower']],
        parts: [
          { w: ['YfyJk2TEf2c', 77], name: 'Cauldron (pot)', area: 'Arena', spots: ['Appears on the middle podium of the Arena after the first three trials are done (by anyone).'] },
          { w: ['YfyJk2TEf2c', 187], name: 'Metal chain', area: 'Temple (Pack-a-Punch room)', spots: ['Facing Pack-a-Punch, turn sharp left and go around the corner: hanging over a burning torch.'] },
          { w: ['YfyJk2TEf2c', 205], name: 'Wooden cog', area: 'Temple (Pack-a-Punch room)', spots: ['Diagonally across the room from the chain, under a metal brazier in the corner.'] },
        ],
        blocks: [{ note: 'The chain and cog only appear once Pack-a-Punch is open.' }],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'death-of-orion', tab: 'weapons', type: 'Wonder weapon', name: 'Death of Orion', img: I + 'death-of-orion.webp', color: 'lightning',
        summary: 'A living scorpion strapped to a frame that fires lightning bolts. Hold the trigger to charge a shot that traps an enemy in the air and chains lightning to everything nearby. Survivors are slowed to a walk for good.',
        facts: [['Box', 'Yes (950)'], ['Free quest', 'About 10 minutes once Pack-a-Punch is open'], ['Upgrade', 'Serket\'s Kiss (Pack-a-Punch)']],
        video: { id: 'YfyJk2TEf2c', title: 'IX Death of Orion easy guide', ch: 'MrRoflWaffles', len: '11:20' },
        steps: [
          { t: 'Open Pack-a-Punch and build the Acid Trap', needs: ['pap', 'acid-trap'] },
          { w: 220, t: 'Shoot the burning urn through the grate', d: 'Underground, in the hallway near the Danu–Ra Temple entrance, a metal grate "window" opens once Pack-a-Punch is on. Shoot the urn of fire on the pillar behind it (a frag grenade also works). Fire runs up into the corridor.' },
          { w: 266, t: 'Read the fire arrow from the Danu–Ra bridge', d: 'Stand on the bridge between the Danu and Ra towers and look down toward the Arena. A burning arrow on the ground points at one of the four towers.' },
          { w: 313, t: 'Pick up the stone head in that tower', d: 'Only one spawns, in the tower the arrow points to:', list: [
            'Danu: two floors down from the top, right in front of you at the bottom of the stairs, floating in the water.',
            'Ra: in one of the fire pits on the level with the Bowie Knife.',
            'Odin: at the base of the big cauldron (on the way from The Pit up to Odin).',
            'Zeus: in a corner of the red blood bath room at the bottom.',
          ] },
          { w: 390, t: 'Melt it in the Acid Trap', d: 'Place the head on the metal grate under the Acid Trap (walkway between the Arena and Ra), switch the trap on, and pick up the small scorpion when the trap finishes.' },
          { w: 438, t: 'Get maximum positive crowd affinity', d: 'Stay in the Arena and push the hand to a glowing, sparking thumbs-up: lots of kills, specialist kills, power-ups, no damage, no floor fire. Turn on subtitles. When the priest says "A gift from Serket", a gold canopic jar (cup) lands in the Arena; it breaks open when it hits the ground. Pick up the cup.', tip: 'In co-op only one player needs max affinity. Reviving teammates raises it a lot.' },
          { w: 533, t: 'Fill the cup with tree sap in Danu', d: 'At the bottom of the Danu Tower (Arboretum), find the hole in the tree closest to the Mystery Box spot. Hold interact (or knife the hole) to put the scorpion in, then hold interact below it to place the cup.' },
          { w: 566, t: 'Finish the round, then take the cup', d: 'Kill the remaining zombies; the cup can be picked up once the next round starts.' },
          { w: 581, t: 'Poison the Mystery Box and spin', d: 'Hold interact on the box to pour the sap in. Your next spin is guaranteed to be the Death of Orion.' },
        ],
        upgrade: {
          name: 'Serket\'s Kiss', img: I + 'serkets-kiss.webp', summary: 'More damage and more reserve ammo. Its charged shot is the best crowd control on the map, and the easter egg leans on it.',
          steps: [{ t: 'Pack-a-Punch it', needs: ['pap'] }],
        },
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Venerated Warrior', short: 'Main EE',
        summary: 'Make fertilizer from three odd ingredients, then pass a trial for each god (Danu, Ra, Zeus, Odin) and kill the two war elephants, Fury and Wrath.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'Ending cutscene, achievement, free doors on other Chaos maps for that session'],
          ['Hardest part', 'The Ra trial (kill special enemies in a set order)'],
        ],
        prep: [
          { t: 'Pack-a-Punch open', needs: ['pap'] },
          { t: 'Brazen Bull built', needs: ['brazen-bull'] },
          { t: 'Death of Orion (ideally upgraded to Serket\'s Kiss)', needs: ['death-of-orion'] },
          { t: 'A weapon set to Fire Bomb and one set to Kill-O-Watt', d: 'These are Pack-a-Punch alternate ammo types. Set them in your weapon kits before the game, so the guns get them when you Pack-a-Punch.' },
          { t: 'Specialist weapon levelled up', d: 'Level 3 makes the trials much safer.' },
        ],
        stepsTitle: 'Quest steps',
        video: { id: '9B8dywCCi4o', title: 'Ultimate IX easter egg guide', ch: 'MrRoflWaffles', len: '33:29' },
        steps: [
          { w: 184, any: 'Collect the three ingredients in any order', t: 'Burn a wood chunk into charcoal', d: 'Pack-a-Punch must be open. Lure a Gladiator that throws axes to the Arena and stand behind one of the two burning wooden pyres so his axe hits it. Pick up the chunk of wood that breaks off (it can take a few seconds to become grabbable). Hang it on a hook above the big cauldron below Odin Tower and wait 2–3 full rounds, until it glows with embers. Then pick it up.' },
          { w: 263, any: 'Collect the three ingredients in any order', t: 'Get poop from an angry crowd', d: 'One player drops to a full red thumbs-down: stand in the Arena floor fire or throw grenades at the crowd. The crowd starts throwing poop into the Arena instead of power-ups. Run through it holding interact (costs 250 points).' },
          { w: 326, any: 'Collect the three ingredients in any order', t: 'Grab the marked skull and grind it', d: 'In the Temple, find a wall skull with a blue symbol on its forehead (under the gold symbols on either side wall, on the middle stone pillar, or along the walls up the stairs). Stand right in front of it and activate your specialist weapon; the skull drops. Pick it up. Then find the skull grinder (one of a few corners of that underground area), put the skull in and hit the grinder with three **charged** Death of Orion shots. Collect the bone paste from the bottom.', needs: ['death-of-orion'], tip: 'If the skull won\'t drop, level your specialist up and try again. If the grinder seems stuck, give it another charged shot or two.' },
          { w: 495, t: 'Mix the ingredients in the Zeus Tower bowl', d: 'Bottom floor of Zeus Tower (the red blood bath room): hold interact on the bowl to add the charcoal, poop and bone paste. Wait 2–3 full rounds until it gives off green smoke, then pick up the fertilizer.' },
          { w: 527, t: 'Place the fertilizer in the Danu Arboretum', d: 'At the bottom of Danu Tower, put it on the dry patch of ground between the two trees. Wait another 2–3 rounds until it smokes green.', tip: 'Use the wait to level up specialists and Pack-a-Punch the Death of Orion into Serket\'s Kiss.' },
          { w: 572, t: 'Get a Fire Bomb kill on top of it', d: 'Kill a group of zombies right on the fertilizer with a Fire Bomb weapon. The floor cracks and glowing energy seeps into it. It can take a few tries.' },
          { w: 619, t: 'Danu\'s trial: purge the blighted tower', d: 'Everyone stands on the cracked floor and holds interact (if nothing happens, pull out a specialist). You\'re teleported into a grey version of Danu Tower. Shoot the three red pods on the tree on each floor; a Max Ammo drops after each floor. Sprint up the stairs right away each time, before zombies trap you below.' },
          { w: 744, anyList: 'Symbols in any order', t: 'Ra\'s trial, part 1: burn four bull symbols', d: 'Flat bull icons appear on walls around the map (often behind barriers or outside the map). Shoot each with the Brazen Bull\'s gun. A Gladiator spawns; kill it and its soul flies to the Ra statue. Possible spots:', needs: ['brazen-bull'], list: [
            'Arena: high above one of the gates.', 'Zeus Tower: on the bridge out of the tower.', 'Outside Odin Tower: exit at the bottom and turn hard left.',
            'The Pit: through a broken wall on the right.', 'Ra Tower: behind the barrier window by a torch.', 'Danu Tunnel / Danu Temple entrance: in an open metal doorway.',
            'Flooded Crypt: through an open wooden door.', 'Danu altar room: behind a barrier window.', 'The Temple or Ra burial chamber (less common).',
          ] },
          { w: 929, t: 'Ra\'s trial, part 2: kill special enemies in the order shown', d: 'After the 4th soul, the Ra statue burns a blue symbol into the obelisk in the Ra altar room. Hold interact on it; you\'re locked in Ra Tower. Four symbols flash on the obelisk from the **bottom up**; each icon is an enemy type (Catalyst elements, Gladiator, Tiger, Brawler, Blightfather and so on). Kill those enemies in that order. Then interact again and do the next four (positions 5–8).', warn: 'Killing the wrong special enemy fails the attempt (normal zombies are fine). Watch out for Fire Catalysts exploding and Brain Rot zombies killing things for you. If you fail, wait for the next round and interact again.' },
          { w: ['9B8dywCCi4o', 1160], t: 'Zeus\'s trial, part 1: raise four lightning rods', d: 'Everyone holds interact on the stone in the middle of the Arena (white symbols lit up) and you\'re teleported underground. Now shoot the four big screws until each lightning rod rises through the ceiling and the screw stops turning: Collapsed Tunnel, Odin Tunnel, Danu Tunnel and the Cursed Room.', tip: 'The Brazen Bull\'s gun is handy for this, so you don\'t waste your main ammo. Teleport first: the screws don\'t turn before that.' },
          { w: 1176, t: 'Zeus\'s trial, part 2: charge the rods with Kill-O-Watt kills', d: 'Back in the Arena, four electric circles sit at the edges. Stun zombies with a Kill-O-Watt weapon inside a circle and then kill them; their souls fly up into the rod. Gladiators and Brawlers fill it fastest. Fill all four.' },
          { w: 1270, t: 'Zeus\'s trial, part 3: activate the four orbs, then survive', d: 'Orbs appear on the trial bowls in the middle of the Arena. Each player holds interact on one until a red symbol shows inside (solo or with fewer players, rotate until all four stay lit). You\'re pulled into an arena with unlimited specialist weapon; survive Gladiators, Brawlers and Tigers for a minute or two.' },
          { w: 1378, t: 'Odin\'s trial, part 1: light all nine blue symbols', d: 'Nine symbols sit underground in three lines (The Pit, Danu Tunnel, the Crypts). Fire the Death of Orion / Serket\'s Kiss so one beam passes through all three symbols of a line; they stay lit if you got the angle right (otherwise they blink off after a second). Copy the exact positions in the video. A clunk sounds when all nine are lit.' },
          { w: 1475, t: 'Odin\'s trial, part 2: survive at the grate in The Pit', d: 'Everyone stands on the metal grate at the back of The Pit and holds interact for a few seconds (pull out a specialist if needed). Survive several waves; Blightfathers come last. Shoot their back pods; the Brazen Bull\'s gun and charged Serket\'s Kiss shots help a lot. Pick up the key that floats up in the water under the grate.', tip: 'Fill up on wall ammo and buy a fresh shield before starting. Serket\'s Kiss charged shots down each corridor slow everything to a crawl.' },
          { w: 1677, t: 'Get ready for the boss', d: 'New shield, full ammo, all perks. Consider starting a new round to refresh elixirs.' },
          { w: 1708, t: 'Boss: enter through the red portal in the Arena', d: 'Everyone holds interact on the portal across from where you spawned. First, survive waves of Gladiators, Tigers and other enemies (Max Ammos drop and stay on the ground).' },
          { w: 1789, t: 'Kill Fury, the first elephant', d: 'Shoot the armor off its sides and hit the heart showing through the ribs. Shoot the riders throwing spears. Stay behind the stone building in the middle when it slams or charges, then run in and unload. Once the armor is gone, its forehead becomes the weak spot.' },
          { w: 1896, t: 'Kill Wrath, the black elephant', d: 'Same method: armor off, then the head. The ending cutscene plays when it dies.' },
        ],
        blocks: [{ note: 'This is the same order the quest checks for. Nothing earlier in the list can be skipped, but within "Any order" boxes you can mix things up — for example, start the wood chunk burning before you go after the skull.' }],
      },
    ],
  });
})();
