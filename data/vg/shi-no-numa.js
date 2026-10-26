/* Shi No Numa — Call of Duty: Vanguard, Season Four */
(() => {
  const I = 'assets/img/vg/shi-no-numa/';
  const E = 'KuaegtcdL6U'; // MrRoflWaffles easter egg guide
  const EV = { id: E, title: 'Shi No Numa (Vanguard) easter egg guide', ch: 'MrRoflWaffles', len: '14:04' };

  ZG.addMap({
    game: 'vg', id: 'shi-no-numa', order: 1,
    name: 'Shi No Numa', dlc: 'Season Four', eeName: 'Heads Up!',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Wunderwaffe DG-2', 'Relic Mirror', 'Echo of Saraxis'],
    blurb: 'The World at War swamp, rebuilt for the Dark Aether story with a new dig site. Build the Wunderwaffe, wake an ancient monolith and piece together a broken mirror that restores Saraxis\'s memories.',
    quick: [
      ['Main EE', 'Heads Up! (solo or co-op)'],
      ['Wonder weapon', 'Wunderwaffe DG-2 (build it, or Mystery Box from round 10)'],
      ['Key items', 'Cipher wheel, mirror pieces'],
      ['Boss', 'The Echo of Saraxis'],
    ],
    intro: {
      start: 'You spawn upstairs in the main hut. Four huts surround it, each with a perk fountain, and the Dig Site at the back has Pack-a-Punch. New to Vanguard zombies? Read the basics first.',
      weapons: 'The quest and the boss both need the Wunderwaffe DG-2. One of its parts needs a Zaballa (from about round 15), so don\'t rush the rounds.',
      'easter-egg': 'Most steps can be done in any order before the monolith; this follows a sensible order. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'vg-basics', tab: 'start', type: 'Primer', name: 'Vanguard zombies basics', short: 'Vanguard basics',
        summary: 'Vanguard zombies builds on Cold War\'s rules, with new names. This applies to both Vanguard maps.',
        blocks: [
          { list: [
            'Points are **Essence**. Zombies also drop **Salvage**: spend it at the **Crafting Table** on armour, equipment and the like.',
            'Perks are **Demonic Fountains**. The first tier of each is free; tiers 2 to 4 cost 2,500, 5,000 and 7,500. Going down keeps the perk but loses a tier. **Fiendish Fortitude** is Juggernog (health), **Aethereal Haste** is Stamin-Up, **Demonic Frenzy** is Speed Cola, **Diabolical Damage** is Deadshot (critical damage) and **Venomous Vigor** is health regeneration.',
            'The **Altar of Covenants** sells Covenants (perk-like bonuses, up to three at once) for **Sacrificial Hearts**. On these two maps its stock changes every round.',
            '**Pack-a-Punch** has three tiers.',
            'Your **Field Upgrade** (Aether Shroud, Ring of Fire, Frost Blast and so on) recharges over time. You can swap it mid-game by reselecting your class.',
            'Special enemies: **Boom Schreiers** (run at you and explode, with whole rounds of them), **Sturmkriegers** (armoured) and **Zaballa** (a witch mini-boss who drops zappy traps).',
          ] },
          { tip: 'Aether Shroud is a good pick for both quests: it makes zombies lose track of you for a few seconds.' },
        ],
      },
      {
        id: 'layout', tab: 'start', type: 'Map layout', name: 'The huts', img: I + 'layout.webp',
        summary: 'The starting hut sits in the middle. Around it: Storage Hut, Comm Room, Doctor\'s Quarters and Fishing Hut, each with a perk fountain, a trap and a Mystery Box spot. The Dig Site (Pack-a-Punch and a Crafting Table) is behind, reached from the Storage Hut or Comm Room side. A zipline links the Doctor\'s Quarters to the top of the main hut, and the Flogger trap is just outside it.',
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'dg2', tab: 'weapons', type: 'Wonder weapon', name: 'Wunderwaffe DG-2', img: I + 'wunderwaffe.webp', color: 'lightning',
        summary: 'The classic: arcing lightning that chains through up to ten zombies a shot. Only three charges per magazine, so reloads are slow.',
        facts: [['Get it', 'Build it, or Mystery Box from round 10'], ['Parts', 'Barrel + three vacuum tubes'], ['Build at', 'Workbench in the Storage Hut'], ['Upgraded', 'Wunderwaffe DG-3']],
        video: EV,
        steps: [
          { w: 94, t: 'Take the barrel from the Fishing Hut and put it in the radio tower outside the Comm Room', d: 'On a shelf in the Fishing Hut.' },
          { w: 104, t: 'End the round and defend the tower', d: 'Lightning strikes it. Keep zombies, Boom Schreiers and Sturmkriegers off it until they stop coming.' },
          { w: 110, t: 'Take the barrel back, the charged tube from the box in the Comm Room, and the fuse on the table', d: 'Three things to pick up here.' },
          { w: 157, t: 'Run the Storage Hut trap until it breaks, then fix it with the fuse', d: 'Gather a big horde first: once fixed, it runs another 30 to 45 seconds.', warn: 'Learn the trap\'s area before using it; it kills you too.' },
          { w: 188, t: 'Kill the horde in the trap', d: 'A voice line says the tube on the workbench is charged.' },
          { w: 219, t: 'Let a Zaballa hit the Tesla coil with her traps three times', d: 'In the Excavation Room downstairs in the main hut. She shows up from about round 15. Stand by the coil so her traps land next to it; purple sparks mean it\'s working. Then take the tube.' },
          { w: 250, t: 'Build it on the workbench in the Storage Hut', d: 'On the right-hand bench.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Heads Up!',
        summary: 'Clear the monolith with Boom Schreiers, set three runes on it, feed it souls with the Wunderwaffe, find the two halves of a mirror in a blood vision, chase its essence around the map and beat the Echo of Saraxis.',
        facts: [
          ['Players', 'Solo or co-op (one stone per player)'],
          ['Reward', 'Calling card, loot pile, Max Ammo'],
          ['Boss', 'Echo of Saraxis (three masks)'],
        ],
        prep: [
          { t: 'The Wunderwaffe DG-2 before the lockdown', needs: ['dg2'] },
          { t: 'Demonic Frenzy (reload speed) helps a lot with the slow Wunderwaffe' },
        ],
        video: EV,
        steps: [
          { w: 31, t: 'Open the debris downstairs, then the door to the Doctor\'s Quarters' },
          { w: 47, t: 'Blow up three Boom Schreiers next to the monolith', d: 'Outside the Doctor\'s Quarters. The vines come off. A Boom Schreier round is the easy way.' },
          { w: 265, anyList: 'Pick these up in any order', t: 'Collect the three cipher wheel parts', list: [
            'Downstairs in the main hut, on a small table.',
            'On the bench in front of Pack-a-Punch at the Dig Site.',
            'In the room right of the perk fountain in the Doctor\'s Quarters.',
          ] },
          { w: 296, anyList: 'Read these in any order', t: 'Read the three kanji on scraps of paper', list: [
            'Above the Crafting Table at the Dig Site.',
            'On the table in the Comm Room.',
            'Downstairs in the main hut, under some books: shoot the books away.',
          ], tip: 'Burn the paper on the table in the Doctor\'s Quarters with a Molotov or Thermite to see which rune goes with each kanji. The key is the same every game.', imgs: [{ src: I + 'runes.webp', cap: 'The kanji-to-rune key in the Doctor\'s Quarters' }] },
          { w: 327, t: 'Fit the wheels on the monolith and set the three runes', d: 'Hold interact. Translate each kanji into its rune and set one per row in the middle column (under the small arrow). The video fills them top to bottom in the order Dig Site, Comm Room, main hut.' },
          { w: 404, t: 'Start the lockdown: everyone holds interact on a red stone at once', d: 'One stone per player. Bring decoys or Monkey Bombs.' },
          { w: 438, t: 'Kill the blue-glowing zombies near the monolith with the Wunderwaffe', d: 'Only Wunderwaffe kills close to the middle count, and you need a lot before the lockdown ends. Fail, and try again next round once the stones recharge.', tip: 'Watch the exploding Boom Schreiers: they can kill the blue zombies before you do.' },
          { w: 530, t: 'Fill the broken fountain with the Flogger, then drink', d: 'Run the Flogger trap to fling zombies into the dry fountain by it. When it\'s full of blood, drink it to get a blood vision.' },
          { w: 546, t: 'In the vision, follow the red orb to the first mirror piece', d: 'It floats around the map and turns into a piece at the end. Boom Schreiers chase you; drink again if the vision wears off.' },
          { w: 577, t: 'Find the second piece using the map in the War Room', d: 'The map shows a red X on a hut (only during the vision). Look up at that hut\'s ceiling, shoot the piece down and listen for its ringing.', warn: 'Bunny parts also show up in the vision. They\'re for a side reward, not the mirror.' },
          { w: 639, t: 'Put both pieces on the altar at the Dig Site, then touch your lit stone', d: 'One lit stone per player. Each sends a ball of essence flying across the map.' },
          { w: 669, t: 'Chase your essence and shoot it, three times, back to the Dig Site', d: 'Watch where it lands, run there, shoot it, and watch again. Then do the whole round of three a second time.', tip: 'If you go down it resets this step; stay alive first.' },
          { w: 732, t: 'Touch the stone again to summon the Echo, and beat her', d: 'Prepare first: armour, decoys, Wunderwaffe ammo. Kill blue zombies with the Wunderwaffe near the middle (about 20) until a bubble forms, then shoot her masks. Three rounds of this: blue zombies, then blue Boom Schreiers, then blue Sturmkriegers (two shots each). You get a Max Ammo and fresh armour between phases.' },
          { w: 828, t: 'Pick up the mirror from the middle', d: 'That ends the quest: loot, a Max Ammo and the calling card.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"The One"',
        summary: 'Interact three times with the telephone in the Comm Room.',
      },
      {
        id: 'sorrow', tab: 'side', type: 'Song', name: '"Samantha\'s Sorrow"',
        summary: 'Shoot the four pans in the Fishing Hut with your starting pistol. A Samantha doll appears in the far left room: pick it up. It reappears on the bridge posts between the Fishing Hut and spawn; shoot it there. Keep repeating until it stands upright back in the Fishing Hut, then interact once more. A skeleton arm takes the doll, drops a Max Ammo and the song plays.',
      },
      {
        id: 'peeks', tab: 'side', type: 'Free reward', name: 'Mr. Peeks',
        summary: 'Ride the zipline once and make the Mystery Box move once. Then, during the blood vision from the main quest, collect three bunny parts: a corner outside the Fishing Hut, under the zipline platform at the Doctor\'s Quarters (send the zipline back first), and at a Mystery Box spot after the box moves while you\'re in the vision. A loot pile appears with 5,000 Essence, a Fire Sale and other goodies.',
      },
    ],
  });
})();
