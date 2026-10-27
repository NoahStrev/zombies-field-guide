/* Call of the Dead — Black Ops DLC 2 (Escalation) */
(() => {
  const I = 'assets/img/bo1/call-of-the-dead/';
  const P = 'e6GObxfUC2g'; // JokerAlex 21 power and Pack-a-Punch
  const S = 'ZpEvhf3gdmI'; // MrDalekJD solo Stand-in
  const C = '-Mu6TbiL904'; // SBZ vSylent co-op Ensemble Cast
  const PV = { id: P, title: 'Call of the Dead power and Pack-a-Punch', ch: 'JokerAlex 21', len: '2:20' };
  const SV = { id: S, title: 'Call of the Dead "Stand-in" solo easter egg', ch: 'MrDalekJD', len: '8:00' };
  const CV = { id: C, title: 'Call of the Dead "Ensemble Cast" co-op easter egg', ch: 'SBZ vSylent', len: '3:16' };

  const fuse = w => ({ w, t: 'Knife the door under PhD Flopper, then fix the fuse', d: 'With the power on, go down the stairs below PhD Flopper to a locked door and knife it: the original four characters are trapped inside. Then find the fuse in the PhD Flopper room upstairs (on the table next to PhD Flopper, on the table opposite, or on the floor next to the big cabinet) and put it in the fuse box right of the door.' });
  const generators = w => ({ w, t: 'Blow up the four red generators, then knife the door', d: 'Glowing red orbs on top mark them. Grenades, Semtex, the Scavenger, the crossbow or a launcher work; the top stops glowing when one is done.', list: [
    'Across from the trapped door (you see it while they talk).',
    'Behind the lighthouse, outside the left window of the Stamin-Up building (throw through the far-left gap).',
    'Off the front of the ship, below the railing near the MPL wall-buy route.',
    'Behind the ship, between the second ship and spawn, between two ice shelves.',
  ] });
  const levers = (w, extra) => ({ w, t: 'Set the controls in the power room', d: 'Turn the ship\'s wheel twice (the brown handle ends up at 5 o\'clock), pull the left lever once and the right-hand (third) lever three times. A foghorn sounds and a submarine surfaces off the side of the ship by Juggernog.' + (extra || ''), tip: 'The old levers sometimes need a few presses before they move.', imgs: [{ src: I + 'submarine.webp', cap: 'The submarine' }] });
  const vr11Rod = w => ({ w, t: 'Turn a zombie human with the V-R11 and kill him in the green light', needs: ['vr11'], d: 'Near the lighthouse, shoot a zombie with the V-R11 (a crawler is easiest). The human runs into the green light at the bottom of the lighthouse and floats up. Kill him before he reaches the top (Scavenger, Ray Gun, explosives or lots of bullets); he goes limp when it worked. At the top he drops the **Golden Rod** to the bottom of the stairs.', tip: 'If you go down while carrying the rod, it goes back under the staircase.', imgs: [{ src: I + 'vril.webp', cap: 'The Golden Rod (Vril Device)' }] });
  const finish = (w, wTube) => [
    { w: wTube, t: 'Put the Golden Rod in the tube by the door', d: 'The tube left of the door, where the vodka went in co-op.' },
    { w, t: 'Knife the fuse box', d: 'After Richtofen\'s teleport fails, wait for the talk to end, then knife the fuse box. They teleport away and a Lightning Bolt power-up appears outside the door: the Wunderwaffe DG-2.', needs: ['wunderwaffe'] },
  ];

  ZG.addMap({
    game: 'bo1', id: 'call-of-the-dead', order: 2,
    name: 'Call of the Dead', dlc: 'Escalation · DLC 2', eeName: 'Stand-in / Ensemble Cast',
    hero: I + 'hero.webp', players: { text: 'Solo and co-op versions', warn: false },
    tags: ['V-R11', 'Scavenger', 'George A. Romero'],
    blurb: 'A frozen Siberian shipwreck and lighthouse, with four film stars and an undead George A. Romero who hunts you all game. The original four characters are trapped behind a door: get Richtofen the Golden Rod and they reward you with the Wunderwaffe DG-2.',
    quick: [
      ['Main EE', 'Stand-in (solo) or Ensemble Cast (2+ players)'],
      ['Wonder weapons', 'V-R11, Scavenger; Wunderwaffe DG-2 as the reward'],
      ['Boss zombie', 'George A. Romero, from round 1'],
      ['Unlocks', 'Ensemble Cast is needed for the full Moon quest'],
    ],
    intro: {
      start: 'Power is at the top of the ship. Pack-a-Punch moves around: the lighthouse beam points to it. George A. Romero walks out of the water on round 1; leave him alone until you\'re ready.',
      weapons: 'Both easter egg versions need the V-R11 from the Mystery Box. It gets more likely to show up once you reach the step that needs it.',
      'easter-egg': 'Two separate checklists: a short solo version (Stand-in) and a longer co-op one (Ensemble Cast) for 2 to 4 players. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'The power switch is in a room at the top of the shipwreck. Pack-a-Punch has no fixed spot: it appears for a while in one of three places, and the lighthouse beam points at it.',
        video: PV,
        steps: [
          { w: 0, t: 'Head up onto the ship', d: 'From spawn, open the barrier by the boat on the right, go up the ship\'s stairs past the MPL wall-buy, through the next barrier and up the next stairs.' },
          { w: 30, t: 'Flip the power switch', d: 'Inside the metal door at the top.', imgs: [{ src: I + 'power.webp', cap: 'The power switch' }] },
          { w: 46, t: 'Watch the lighthouse to find Pack-a-Punch', d: 'Lightning flashes when it\'s about to appear. The lighthouse light spins, then locks onto where the machine is. It stays for a while, then moves.', list: [
            'In the water in the spawn room, right of the Quick Revive island.',
            'In the water behind the lighthouse, in front of the Stamin-Up hut.',
            'In the water below Juggernog.',
          ], imgs: [{ src: I + 'lighthouse.webp', cap: 'The lighthouse' }] },
        ],
      },
      {
        id: 'george', tab: 'start', type: 'Boss zombie', name: 'George A. Romero', img: I + 'george.webp', color: 'lightning',
        summary: 'He rises out of the water on round 1 and slowly follows the nearest player. Shoot him (or get hit) and he goes berserk, chasing fast and electrifying nearby zombies. He has 250,000 health per player.',
        blocks: [{ list: [
          'Standing in water while you shoot him stops him going berserk.',
          'The V-R11 calms him for 10 to 15 seconds. One shot of the upgraded V-R11 Lazarus while he\'s in water sends him away for the round.',
          'Bring him down and he retreats into the water, dropping a Death Machine and a random perk bottle. He comes back two rounds later.',
          'Once you have the easter egg achievement, he drops the Wunderwaffe DG-2 instead of a Death Machine.',
        ] }],
      },

      {
        id: 'layout', tab: 'start', type: 'Map layout', name: 'Map of the ship and lighthouse', short: 'Map',
        summary: 'A labelled map showing every level of the lighthouse and ship, the perks, wall weapons, Pack-a-Punch spots and zipline routes.',
        blocks: [{ imgs: [{ src: I + 'layout.webp', cap: 'Call of the Dead layout (fan-made, from the Call of Duty Wiki)', wide: true }] }],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'vr11', tab: 'weapons', type: 'Wonder weapon', name: 'V-R11', img: I + 'vr11.webp', color: 'green',
        summary: 'Turns a zombie back into a human, who runs for the nearest water and draws the other zombies after him. Shoot a teammate and zombies ignore them for a bit. Mystery Box only; both easter egg versions need it.',
        facts: [['Get it', 'Mystery Box'], ['Upgraded', 'V-R11 Lazarus (three hits blow a zombie up)']],
        blocks: [{ imgs: [{ src: I + 'vr11-victim.webp', cap: 'A zombie turned human' }] }],
      },
      {
        id: 'scavenger', tab: 'weapons', type: 'Wonder weapon', name: 'Scavenger', img: I + 'scavenger.webp', color: 'fire',
        summary: 'A sniper rifle that fires explosive bolts which stick and then blow up. Great for the generators and for killing the floating human in the easter egg. Mystery Box only.',
        facts: [['Get it', 'Mystery Box'], ['Upgraded', 'Hyena Infra-Dead']],
      },
      {
        id: 'wunderwaffe', tab: 'weapons', type: 'Wonder weapon · Reward', name: 'Wunderwaffe DG-2', img: I + 'wunderwaffe.webp', color: 'lightning',
        summary: 'A lightning gun whose bolt chains through a crowd of zombies. Not in the Mystery Box here: it\'s the reward for the easter egg, as a Lightning Bolt power-up.',
        facts: [['Get it', 'Finish either easter egg version'], ['Later games', 'George drops it once you have the achievement']],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee-solo', tab: 'easter-egg', type: 'Main Easter Egg · Solo version', name: 'Stand-in (solo)', short: 'Solo version',
        summary: 'The short solo version: fix the fuse, blow up four generators, set the power room controls to raise the submarine, then use the V-R11 to get Richtofen the Golden Rod.',
        facts: [
          ['Players', 'Solo only'],
          ['Reward', 'Stand-in achievement, Wunderwaffe DG-2'],
          ['Needs', 'Power, explosives, the V-R11'],
        ],
        prep: [
          { t: 'Power on', needs: ['power-pap'] },
          { t: 'Explosives for the generators', d: 'Semtex is cheap to refill. The Scavenger is easier to land and becomes more likely in the box during that step.', needs: ['scavenger'] },
          { t: 'The V-R11 from the Mystery Box', needs: ['vr11'] },
          { t: 'Plenty of points and a crawler', d: 'A crawler at the end of a round gives you time.' },
        ],
        stepsTitle: 'Quest steps',
        video: SV,
        steps: [
          fuse(18),
          generators(149),
          levers(263, ' Solo: it shines its green light straight into the lighthouse.'),
          vr11Rod(310),
          ...finish(406, 375),
        ],
      },
      {
        id: 'ee-coop', tab: 'easter-egg', type: 'Main Easter Egg · Co-op version', name: 'Ensemble Cast (co-op)', short: 'Co-op version',
        summary: 'The longer co-op version: everything in the solo one, plus catching vodka for Nikolai, four radios in order, four lighthouse dials, and four foghorns.',
        facts: [
          ['Players', '2 to 4 (not solo)'],
          ['Reward', 'Ensemble Cast achievement, Wunderwaffe DG-2'],
          ['Unlocks', 'Needed (with Shangri-La\'s quest) for the full Moon easter egg'],
        ],
        prep: [
          { t: 'Two or more players', d: 'Catching the vodka needs one player to knife it and another to catch it.' },
          { t: 'Power on', needs: ['power-pap'] },
          { t: 'Explosives for the generators', needs: ['scavenger'] },
          { t: 'The V-R11 from the Mystery Box', needs: ['vr11'] },
        ],
        stepsTitle: 'Quest steps',
        video: CV,
        steps: [
          fuse(0),
          generators(30),
          { w: 46, t: 'Catch the vodka and send it in', d: 'A bottle is frozen into the ice in one of four spots. One player stands under it, another knifes it down. Missed? It moves to another spot. Put it in the tube on the other side of the door from the fuse box, then knife the door.', list: [
            'On the railing above the stairs outside the PhD Flopper room.',
            'On the railing below that one (drop through the hole next to PhD Flopper).',
            'On the ship, on the railing to the right of the stairs up to the power.',
            'On the ledge that joins the two ships.',
          ] },
          { w: 76, any: 'These three in any order', t: 'Set the lighthouse dials to 2-7-4-6', d: 'One dial per floor, top to bottom: yellow, orange, blue, purple. Turning a dial also moves the ones above and below it. A way that works:', ol: [
            'Turn purple until it shows 6.',
            'Turn orange until blue shows 4.',
            'Turn yellow until orange shows 7.',
            'Turn yellow until it shows 2, counting the turns.',
            'Turn purple that many times.',
            'Turn blue until it shows 4 again.',
          ], tip: 'Notes with each number and colour are hidden around the map if you want to check it.' },
          { w: 122, any: 'These three in any order', t: 'Use the four radios in order', d: 'Press interact once on each, in this order. They play a fuzzy Morse sound when it worked.', ol: [
            'Under the power room, on top of a cabinet in the corner.',
            'Behind the lighthouse, on a barrel next to Stamin-Up.',
            'At the back of the second ship, in the train car right of the barrier.',
            'Back at the trapped door, under the staircase on top of a cabinet.',
          ], tip: 'Pressed one early? The game counts every press. Press the first radio twice and carry on in order; repeat until it works.' },
          { w: 137, any: 'These three in any order', t: 'Set the power room controls, then sound the four foghorns', d: 'Wheel twice, left lever once, right lever three times: the submarine surfaces. Then, while there\'s fog on the map, hold interact on the foghorns in this order. The submarine shines a green light at the lighthouse.', ol: [
            'At the bottom of the lighthouse, next to the pool of water.',
            'Down the ice slide past Speed Cola, in the corner on the right.',
            'At the bottom of the lighthouse, by the wall near its entrance.',
            'Past the ice slide, behind the huge rock.',
          ], tip: 'Messed up the order? Start again next round.', imgs: [{ src: I + 'submarine.webp', cap: 'The submarine' }] },
          vr11Rod(158),
          ...finish(175, 167),
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Not Ready to Die"',
        summary: 'Interact with three hidden rocks.',
        spots: [
          'In spawn, on a barrel near the boat that leads to the lighthouse.',
          'On the ship, in the diner.',
          'In the PhD Flopper room, under a small table.',
        ],
      },
    ],
  });
})();
