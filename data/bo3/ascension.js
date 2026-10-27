/* Ascension — Zombies Chronicles remaster (originally Black Ops) */
(() => {
  const I = 'assets/img/bo3/asc/';
  ZG.addMap({
    game: 'bo3', id: 'ascension', order: 7, group: 'chronicles',
    name: 'Ascension', dlc: 'Zombies Chronicles', eeName: 'Casimir Mechanism',
    hero: I + 'hero.webp', players: 'four',
    tags: ['Thundergun', 'Gersh Device', 'Lunar Landers'],
    blurb: 'A Soviet cosmodrome with lunar landers, Space Monkeys and a rocket to launch. Repair the Casimir Mechanism to free Gersh from the Aether.',
    quick: [
      ['Main EE', 'Casimir Mechanism'],
      ['Players', '4 required (solo only with a PC mod)'],
      ['Wonder weapons', 'Thundergun, Gersh Device, Matryoshka Dolls'],
      ['EE reward', 'All perks + 90 s Death Machine'],
    ],
    intro: {
      start: 'Everything is black and white until the power is on. Launching the rocket opens Pack-a-Punch.',
      'easter-egg': 'Built for four players: one step needs four people pressing buttons at the same moment.',
    },
    items: [
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn on the power, ride all three lunar landers, then launch the rocket. The launch pad opens and Pack-a-Punch is inside.',
        steps: [
          { w: ['RMKLm02BevE', 21], t: 'Turn on the power', d: 'The switch is on the top floor of the central Power Building (Power Room door 1,000, gate 1,250). The map regains its colour.' },
          { w: ['RMKLm02BevE', 147], anyList: 'Pads in any order', t: 'Ride the lunar lander from each of the three outer pads', d: 'Call or board the lander at each outer pad and ride it back to the centrifuge room. Each pad only needs one trip.' },
          { w: ['RMKLm02BevE', 172], t: 'Launch the rocket', d: 'Press the button to the right of the power switch. After take-off the big launch-pad door opens; Pack-a-Punch is inside on the right.', tip: 'Pack-a-Punch before round 8 for the "Space Race" achievement. Destroying the rocket in flight with explosives drops Double Points.' },
        ],
      },
      {
        id: 'thundergun', tab: 'weapons', type: 'Wonder weapon', name: 'Thundergun', img: I + 'thundergun.webp', color: 'storm',
        summary: 'A shockwave cannon that blasts zombies away. Mystery Box only.',
        upgrade: { name: 'Zeus Cannon', img: I + 'zeus.webp', summary: 'More ammo and a stronger blast. Two Zeus Cannon shots are part of the final step of the easter egg.', steps: [{ t: 'Pack-a-Punch it', needs: ['power-pap'] }] },
      },
      {
        id: 'gersh', tab: 'weapons', type: 'Wonder weapon · Tactical', name: 'Gersh Device', img: I + 'gersh.webp', color: 'aether',
        summary: 'A grenade that opens a black hole and pulls zombies in. Walk into it to teleport. Mystery Box only. Needed twice in the easter egg.',
      },
      {
        id: 'matryoshka', tab: 'weapons', type: 'Wonder weapon · Grenade', name: 'Matryoshka Dolls', img: I + 'matryoshka.webp', color: 'gold',
        summary: 'Nesting-doll grenades that split into smaller exploding dolls. Mystery Box only. Needed for the final step of the easter egg.',
      },
      {
        id: 'ray-gun', tab: 'weapons', type: 'Wonder weapon', name: 'Ray Gun / Ray Gun Mark II', img: I + 'ray-gun.webp', color: 'green',
        summary: 'Both come from the Mystery Box. The final easter egg step needs either one Pack-a-Punched Ray Gun (Porter\'s X2) or two Pack-a-Punched Ray Gun Mark IIs.',
      },
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Casimir Mechanism', short: 'Main EE',
        summary: 'Repair the five nodes of the Casimir Mechanism so Gersh can escape the Aether. Takes around 30 minutes, mostly waiting on the Mystery Box.',
        facts: [
          ['Players', 'Exactly 4 in the base game'],
          ['Reward', 'Every perk + 90-second Death Machine for everyone'],
          ['Prep', 'Several box wonder weapons'],
        ],
        prep: [
          { t: 'Four players', d: 'Node 2 needs four players pressing four buttons at once. Solo is only possible with a PC mod.' },
          { t: 'Power on and Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'A Gersh Device (you\'ll need two throws)', needs: ['gersh'] },
          { t: 'A Pack-a-Punched Ray Gun, or two Pack-a-Punched Ray Gun Mk IIs', needs: ['ray-gun'] },
          { t: 'A Zeus Cannon (Pack-a-Punched Thundergun)', needs: ['thundergun'] },
          { t: 'Matryoshka Dolls', needs: ['matryoshka'] },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { imgs: [{ src: I + 'node1.webp', cap: 'Gersh Device on the outside generator' }], w: 62, t: 'Node 1: Gersh Device on the outside generator', needs: ['gersh'], d: 'In the area with the RK5 wall-buy and Widow\'s Wine, look out of the map to the left of the RK5: past the rubble is a generator with a glowing white light (a high whistling is audible from the back of the Widow\'s Wine room). Throw a Gersh Device onto it so it gets sucked in.', tip: 'If it lands too far away, Samantha giggles and the device vanishes — try again.' },
          { imgs: [{ src: I + 'node1-terminal.webp', cap: 'The terminal after activation' }], w: 81, t: 'Node 1: use the terminal by the Stamin-Up lander', d: 'Go through the Stamin-Up area to the junkyard by its lunar lander pad. Just past the small puddle is a big terminal with a bright screen. Hold interact. A message confirms Node 1 and one light turns on at the pod.' },
          { imgs: [{ src: I + 'node2-widows.webp', cap: 'Button by Widow\'s Wine (PhD in BO1)' }, { src: I + 'node2-speed.webp', cap: 'Button by Speed Cola' }, { src: I + 'node2-stamin.webp', cap: 'Button by Stamin-Up' }], w: 105, t: 'Node 2: press four red buttons at once (Space Monkey round)', d: 'Space Monkey rounds come every few rounds once the power is on and someone owns a perk. Four small red buttons pop out near four perks:', list: [
            'Juggernog — across from the machine.',
            'Widow\'s Wine — left of the machine.',
            'Speed Cola — on the other side of the machine\'s door frame.',
            'Stamin-Up — left of the machine.',
          ], warn: 'All four must be pressed within about a second. Count down from three. A buzz means it failed.' },
          { imgs: [{ src: I + 'node3.webp', cap: 'The clock and pressure plate' }], w: 188, t: 'Node 3: wait at the clock until it makes a full turn', needs: ['power-pap'], d: 'Leave a couple of slow crawlers at the end of a round and lead them far away (Stamin-Up). In the room just before Pack-a-Punch, a clock on the left wall shows 12:00. Everyone stands on the pressure plate in front of it and waits, without shooting or throwing anything, until the clock makes a full turn (about two minutes). Stepping off the plate restarts it. An explosion like a Nuke ends the round.', tip: 'In BO3 a crawler left too far away respawns closer as a fresh zombie, so keep an eye on it. Idle Eyes helps.' },
          { imgs: [{ src: I + 'luna-map.webp', cap: 'Lander routes that spell LUNA', wide: true }], w: 236, t: 'Node 4: spell LUNA with the lunar landers', d: 'Letters float over the map. One player rides the lander while another player calls it from the next pad, so the rider flies through the letters in order:', ol: [
            'Lander at spawn, called to the Stamin-Up pad → collects **L**.',
            'Called back to spawn → **U**.',
            'Called to the Speed Cola pad → **N**.',
            'Called to the Stamin-Up pad → **A**.',
          ], tip: 'Do this at the end of a round with crawlers left. All four lights on the pod should now be lit.' },
          { imgs: [{ src: I + 'node5.webp', cap: 'The pod and the glowing orb' }], w: 290, t: 'Node 5: feed the orb by the pod', needs: ['gersh', 'ray-gun', 'thundergun', 'matryoshka'], d: 'The pod is next to the Trip Mine wall-buy in the lander room by Stamin-Up. A small glowing orb sits on the ground nearby. Throw a Gersh Device onto it, and while the black hole is active, pour damage into the glowing white orb itself (not the black hole) with the Pack-a-Punched Ray Gun (or Mk IIs) and the Zeus Cannon, and throw Matryoshka Dolls onto it. If you hear "we need more power", try again with more damage.' },
          { w: 376, t: 'Gersh is free', d: 'Everyone gets a 90-second Death Machine and every perk. Samantha screams and the screen briefly turns black and white.' },
        ],
        video: { id: 'RMKLm02BevE', title: 'Ultimate Ascension Easter Egg Guide (Zombies Chronicles)', ch: 'MrRoflWaffles', len: '8:13' },
      },
      {
        id: 'song-abracadavre', tab: 'side', type: 'Song', name: '"Abracadavre"',
        summary: 'Hold interact on three teddy bears holding sickles.',
        spots: [
          'Centrifuge room: go up the stairs, turn right — at the end of the walkway.',
          'By the lunar lander nearest Stamin-Up there\'s a gate: under the red star.',
          'Near the lunar lander past Speed Cola, sitting on top of a wall.',
        ],
      },
      {
        id: 'song-not-ready', tab: 'side', type: 'Song', name: '"Not Ready to Die" (BO3 only)',
        summary: 'Every 1½–4 minutes one of three red phones rings for 10 seconds. Melee it while it rings (you hear a cord being cut). Do all three.',
        spots: [
          'Just right of Widow\'s Wine.',
          'In the Mule Kick room, left of a Mystery Box spot.',
          'In the centrifuge room near the lunar lander, behind a fuse box.',
        ],
      },
    ],
  });
})();
