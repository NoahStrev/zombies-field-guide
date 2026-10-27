/* Moon — Zombies Chronicles remaster (originally Black Ops) */
(() => {
  const I = 'assets/img/bo3/moon/';
  ZG.addMap({
    game: 'bo3', id: 'moon', order: 9, group: 'chronicles',
    name: 'Moon', dlc: 'Zombies Chronicles', eeName: "Richtofen's Grand Scheme",
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Wave Gun', 'QED', 'Hacker'],
    blurb: 'From Area 51 to Griffin Station on the Moon. Low gravity, no oxygen outside, and Richtofen\'s plan to swap souls with Samantha — ending with rockets fired at Earth.',
    quick: [
      ['Main EE', "Richtofen's Grand Scheme"],
      ['Players', 'Solo or co-op (play as Richtofen)'],
      ['Wonder weapons', 'Wave Gun, QED, Gersh Device'],
      ['EE reward', 'All eight perks, permanently'],
    ],
    intro: {
      start: 'You start at Area 51, where Pack-a-Punch is. The Moon has no oxygen until the power is on — wear a P.E.S. outdoors.',
      'easter-egg': 'In Black Ops III the whole quest works solo. The second half needs the player who is **Richtofen** (he carries the Golden Rod), so solo players should pick Richtofen.',
    },
    items: [
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power, oxygen & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Teleport to the Moon, put on a P.E.S., turn on the power through Tunnel 6 or 11, and use the teleporter over the power switch to visit Pack-a-Punch at Area 51.',
        steps: [
          { t: 'Teleport from Area 51 to the Moon', d: 'Pack-a-Punch is right there in Area 51 (No Man\'s Land), but you can\'t afford it yet.' },
          { t: 'Put on a P.E.S. suit', d: 'There\'s one right in front of you in the Receiving Bay. Without it you run out of air anywhere without oxygen.' },
          { w: ['2k6L3wBsEyA', 52], t: 'Turn on the power', d: 'Go through Tunnel 6 (cheaper, faster) or Tunnel 11 (has Stamin-Up) to the Power Room. The power switch is next to the tunnel entrances. Power brings oxygen and gravity back indoors.' },
          { w: ['eS9Wq_pIxR8', 31], t: 'Go back to Pack-a-Punch', d: 'All players stand on the teleporter pad above the power switch (jump down onto it from the raised walkway beside it). You\'re sent to Area 51 to use Pack-a-Punch, and a teleporter there takes you back.', note: 'After teleporting back, the pad can\'t be used again until the next round.' },
        ],
      },
      {
        id: 'hacker', tab: 'start', type: 'Equipment', name: 'Hacker', color: 'green',
        summary: 'A gadget that hacks almost anything. It spawns on a desk on one of the three Laboratory floors. Needed for the easter egg and for stopping Excavators.',
        blocks: [{ list: [
          'Excavators periodically try to breach Tunnel 6, Tunnel 11 or the Bio-Dome. Hack the matching panel in the Receiving Bay to stop one; otherwise that area loses oxygen and gravity for the rest of the game.',
          'For the easter egg you must **let Excavator Pi breach Tunnel 6** once — see step 3.',
        ] }],
      },
      {
        id: 'ee-roadmap', tab: 'start', stepsOrder: 'suggested', type: 'Plan', name: 'Road to the Easter Egg',
        summary: 'What Richtofen\'s Grand Scheme needs.',
        steps: [
          { t: 'Pick Richtofen in the lobby (solo)', d: 'The Richtofen player carries the Golden Rod for the second half.' },
          { t: 'Turn on the power', needs: ['power-pap'] },
          { t: 'Pick up the Hacker', needs: ['hacker'] },
          { t: 'Get the Wave Gun from the box', needs: ['wave-gun'] },
          { t: 'Get the QED and Gersh Device from the box (second half)', needs: ['qed', 'gersh'] },
          { t: 'Start Richtofen\'s Grand Scheme', needs: ['main-ee'] },
        ],
      },
      {
        id: 'wave-gun', tab: 'weapons', type: 'Wonder weapon', name: 'Wave Gun', aka: 'Zap Guns (dual) ↔ Wave Gun', img: I + 'wave-gun.webp', color: 'lightning',
        summary: 'Switch between dual Zap Gun pistols and a microwave rifle that makes zombies swell and pop. Mystery Box only. Needed once in the easter egg.',
      },
      {
        id: 'qed', tab: 'weapons', type: 'Wonder weapon · Grenade', name: 'QED (Quantum Entanglement Device)', short: 'QED', img: I + 'qed.webp', color: 'aether',
        summary: 'A grenade with a random effect — anything from a free perk or weapon to reviving players, or something bad. Mystery Box only. Used twice in the easter egg.',
      },
      {
        id: 'gersh', tab: 'weapons', type: 'Wonder weapon · Tactical', name: 'Gersh Device', img: I + 'gersh.webp', color: 'aether',
        summary: 'Opens a black hole that pulls zombies in. Mystery Box only. Used twice in the easter egg.',
      },
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: "Richtofen's Grand Scheme", short: 'Main EE',
        summary: 'Open the Moon Pyramid Device to free Samantha ("Cryogenic Slumber Party"), let Richtofen swap souls with her, then help Maxis launch rockets at Earth ("Big Bang Theory").',
        facts: [
          ['Players', '1–4 (solo works in BO3)'],
          ['Reward', 'Death Machines, then all eight perks for good'],
          ['Achievements', 'Cryogenic Slumber Party, Big Bang Theory'],
        ],
        prep: [
          { t: 'One player is Richtofen', d: 'He places and charges the Golden Rod. Solo: pick Richtofen.' },
          { t: 'Power on and the Hacker in hand', needs: ['power-pap', 'hacker'] },
          { t: 'Wave Gun', needs: ['wave-gun'] },
          { t: 'QED and Gersh Device for later', needs: ['qed', 'gersh'] },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { imgs: [{ src: I + 'simon.webp', cap: 'The four Simon Says computers' }], w: 76, any: 'Steps 1–2 and steps 3–4 are two separate tracks: do them in either order or side by side', t: 'Win Simon Says', d: 'Outside the Receiving Bay on the RK5 side, in front of Tunnel 6, four computers stand by a cliff: red, green, blue, yellow (left to right). At random times they flash a colour sequence; press the matching computers in order, building up to five colours. They flash green when you win.', tip: 'Fail and they flash red — just try again.' },
          { imgs: [{ src: I + 'lab-panels.webp', cap: 'The four switches after activation' }], w: 140, any: 'Steps 1–2 and steps 3–4 are two separate tracks: do them in either order or side by side', t: 'Hack the four green lab panels in 60 seconds', needs: ['hacker'], d: 'On the 2nd lab floor, left of the stairs up to the 3rd floor (near the Bowie Knife), four dim switches sit in a row. Hack one (500 points). A 60-second timer starts: find and hack the four panels with bright green lights among the eight white panels on the three floors (they buzz louder as you get close). Then run back and press all four red buttons quickly.', note: 'When it works, the centre of the Vril interface on the front of the pyramid is pushed in.' },
          { w: 186, any: 'Steps 1–2 and steps 3–4 are two separate tracks: do them in either order or side by side', t: 'Let Excavator Pi breach Tunnel 6, then hack its terminal', needs: ['hacker'], d: 'When the announcer warns about Tunnel 6, let it happen. Right after, take the Hacker to the excavator terminal in the spawn building and hack it. The Vril Sphere now lies in Tunnel 6 near the Kuda wall-buy.' },
          { w: 248, any: 'Steps 1–2 and steps 3–4 are two separate tracks: do them in either order or side by side', t: 'Move the sphere to the pyramid', needs: ['wave-gun'], d: 'Knife or shoot the sphere to make it float. It drifts to a satellite dish on top of the Receiving Bay — shoot it with the **Wave Gun** to drop it. It heads toward Tunnel 11 and gets stuck in the ceiling over a barrier near Stamin-Up; free it with a grenade or Ray Gun splash. It ends up merging with the front of the pyramid.', tip: 'If it stops, knife or shoot it again, and open doors in its path.' },
          { w: 305, t: 'Fill the glass tube with 25 kills', d: 'A glass tube rises at the front-right corner of the pyramid. Kill 25 zombies very close to it (red streams fly up). Nukes and astronaut zombies count.' },
          { w: 328, t: 'Flip the switch: Cryogenic Slumber Party', d: 'Use the power-switch-style lever on the right wall. The pyramid opens to reveal Samantha and everyone gets a 90-second Death Machine.', imgs: [{ src: I + 'mpd.webp', cap: 'The Moon Pyramid Device' }] },
          { imgs: [{ src: I + 'plates.webp', cap: 'Where the plates sit at Area 51' }], w: 350, any: 'Can be done any time before step 10, even early on (step 7 comes before step 8)', t: 'Get the plates from Area 51', needs: ['gersh'], d: 'Back at Area 51, the hexagon plates sit on a beam structure to the right of the teleporter (look over the edge right of Speed Cola). Throw a grenade to knock them loose (the characters mention it), then throw a Gersh Device so the plates land on the teleporter. Teleport with them.' },
          { w: 400, any: 'Can be done any time before step 10, even early on (step 7 comes before step 8)', t: 'Move the plates with a QED', needs: ['qed'], d: 'On the Moon the plates are near Quick Revive in the spawn room. Throw a QED onto them; whatever effect it rolls, they move to the right side of the room and stand upright in two brackets by a computer.' },
          { imgs: [{ src: I + 'wire.webp', cap: 'The wire, in one possible spot' }], w: 412, any: 'Can be done any time before step 10, even early on (step 7 comes before step 8)', t: 'Find the curved wire', d: 'A long curved silver wire spawns somewhere in the labs (any floor — on the floor, against a wall, or in a desk). Rarely it\'s outside near the teleporter entrance, by the crates right of the outside door, or in the spawn room by the excavator switch. It goes into your inventory.' },
          { imgs: [{ src: I + 'computer.webp', cap: 'The computer used to charge it' }], w: 534, t: 'Charge the Golden Rod (Richtofen)', d: 'At the computer with the plates, place the rod between them and connect the wire. Then the Richtofen player presses interact on the computer to the left of the plates again and again (you hear typing) until a voice-over plays and the screen goes red, green, red, green. Pick the glowing rod back up.' },
          { w: 572, t: 'Fill four more tubes and swap souls', d: 'At the open pyramid, four tubes rise. Kill 25 zombies near each (Samantha screams and shakes the screen). Then put the rod in the slot on the front of the pyramid. Richtofen and Samantha swap souls and the Richtofen player gets every perk.' },
          { w: 615, any: 'Do these two in either order', t: 'Win Simon Says three more times', d: 'Same four computers, but harder: starting at three colours, then four, then five. Each win raises one of three rockets in the big gap.' },
          { w: 634, any: 'Do these two in either order', t: 'Move the sphere again', needs: ['qed', 'gersh'], d: 'Throw a QED right onto the Vril interface on the front of the pyramid: the sphere shoots over to the Simon Says area. Throw a Gersh Device next to it to teleport it.' },
          { imgs: [{ src: I + 'rockets.webp', cap: 'The rockets heading for Earth' }], w: 655, t: 'Big Bang Theory', d: 'Maxis starts a countdown and the three rockets fly to Earth and destroy it about 30–40 seconds later (Earth looks different from Area 51 from now on). Everyone gets all eight perks for the rest of the game, even if they go down (solo: Quick Revive can still be used up).' },
        ],
        video: { id: '2k6L3wBsEyA', title: 'Ultimate Moon Easter Egg Guide (Zombies Chronicles)', ch: 'MrRoflWaffles', len: '11:32' },
      },
      {
        id: 'song-coming-home', tab: 'side', type: 'Song', name: '"Coming Home"',
        summary: 'Hold interact on three teddy bears wearing P.E.S. helmets.',
        spots: [
          'Outside the Receiving Bay, on a pile of crates just below the building, by the launch pad.',
          'On the wall opposite the P.E.S. suit in the airlock between Tunnel 6 and the power switch area.',
          'Near Stamin-Up in Tunnel 11, in a hole in the wall (the helmet sticks out).',
        ],
      },
      {
        id: 'songs-8bit', tab: 'side', type: 'Songs', name: 'Terminal songs',
        summary: 'Three computer terminals play short tracks in Black Ops III.',
        blocks: [{ list: [
          '"Re-Damned": computer equipment in Tunnel 11 next to the door to the Power Room.',
          '8-bit "Coming Home": a terminal in the spawn room.',
          '8-bit "Pareidolia": the terminal next to the Bio-Dome door in the labs.',
        ] }],
      },
      {
        id: 'space-dog', tab: 'side', type: 'Fun (BO3 only)', name: 'Space dog',
        summary: 'Kill a Hellhound at Area 51, shoot all the Mystery Box teddy bears (including the one left when the box moves) and the bone on the pipes near the Moon teleporter — all with the Wave Gun. Then hack the pair of dog bowls in the labs and feed them zombie souls. A dog in a space suit skips across the surface outside.',
      },
    ],
  });
})();
