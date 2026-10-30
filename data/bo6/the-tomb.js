/* The Tomb — Black Ops 6, Season Two */
(() => {
  const I = 'assets/img/bo6/the-tomb/';
  const SE = t => ({ id: '_00pt1__3Zk', title: 'Every side Easter egg in The Tomb', ch: 'MrDalekJD', len: '14:02', t }); // MrDalekJD side Easter eggs
  const E = 'XLqB2EQ9VNs'; // MrRoflWaffles easter egg guide
  const P = 'pFIPlZfogBo'; // MrRoflWaffles Pack-a-Punch guide
  const S = 'lsMEJ4MNHbc'; // MrRoflWaffles Ice Staff guide
  const EV = { id: E, title: 'The Tomb easter egg guide', ch: 'MrRoflWaffles', len: '19:32' };
  const PV = { id: P, title: 'The Tomb Pack-a-Punch', ch: 'MrRoflWaffles', len: '1:15' };
  const SV = { id: S, title: 'Staff of Ice build and upgrade', ch: 'MrRoflWaffles', len: '9:34' };

  ZG.addMap({
    game: 'bo6', id: 'the-tomb', order: 4,
    name: 'The Tomb', dlc: 'Season Two', eeName: 'Main quest: claim the Sentinel Artifact',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Staff of Ice', 'Dark Aether Nexus', 'Sentinel Artifact'],
    blurb: 'An excavation site in catacombs below Avalon, with portals into a Dark Aether Nexus. Build and upgrade the Staff of Ice, complete four creature challenges, and destroy the Sentinel Artifact.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op)'],
      ['Wonder weapon', 'Staff of Ice → Ull\'s Arrow (build required)'],
      ['Key items', 'Monocle, two staff parts, dark energy'],
      ['Boss', 'The Sentinel Artifact (nine phases)'],
    ],
    intro: {
      start: 'Pack-a-Punch is in the Dark Aether Nexus, through a door that opens after you place the amulet. Black Ops 6 rules are explained in the basics on Liberty Falls.',
      weapons: 'You must build and upgrade the Staff of Ice yourself (a box staff can be upgraded, but the build steps still have to be done).',
      'easter-egg': 'Four portals link the catacombs and the Nexus: blue (spawn), yellow (Stamin-Up), green (Speed Cola) and red (Quick Revive). Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Open the doors from spawn to a table with a purple glow and place the amulet on it. A door opens into the Dark Aether Nexus, where Pack-a-Punch is.',
        video: PV,
        steps: [
          { w: 16, t: 'Open the doors from spawn', d: 'Through the corridor and two more doors. The Rampage Inducer speeds zombies up for faster points (you can turn it off again).' },
          { w: 48, t: 'Place the amulet on the glowing table', d: 'A door opens behind you into the Dark Aether Nexus. Pack-a-Punch is inside.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'ice-staff', tab: 'weapons', type: 'Wonder weapon', name: 'Staff of Ice', img: I + 'staff.webp', color: 'ice',
        summary: 'Freezes zombies. Upgraded to Ull\'s Arrow, its charged shot makes a freezing storm cloud, and its other end (D-pad left, or B on PC), Sekhmet\'s Vigor, fires a healing bolt that revives teammates. The quest uses that healing end.',
        facts: [['Get it', 'Build it (required for the quest); also in the Mystery Box'], ['Upgraded', 'Ull\'s Arrow'], ['Build at', 'The broken wall in the Dark Aether Nexus']],
        video: SV,
        steps: [
          { w: 0, t: 'Kill the Shock Mimic on round 8 for the monocle' },
          { w: 34, t: 'Steer a purple crystal next to the hunter mural and the bull mural', d: 'Purple fiery crystals appear around the map once the Nexus is open. Each mural has four crystal spots nearby. Shoot a crystal that\'s in the wrong spot; it comes back somewhere else 45 seconds later. Repeat until one sits right next to the mural.' },
          { w: 160, any: 'Murals in any order', t: 'Hunter mural (Orion): shoot the symbols in order, then survive', d: 'With the monocle, 10 symbols light up: tally-style Roman numerals. Shoot them from 1 to 10. A lockdown with four waves follows; you get a staff part.', tip: 'Fewer symbols showing is a visual bug: shoot any one to reset the puzzle.' },
          { w: 191, any: 'Murals in any order', t: 'Bull mural (Taurus): same, 1 to 8', d: 'Another lockdown, another part.' },
          { w: 223, t: 'Build the staff at the broken wall in the Nexus', d: 'Defend it for about a minute while it forms, then take it.' },
          { w: 255, t: 'Freeze three purple crystals within 10 seconds', d: 'Shoot them with the staff. Line up three close crystals first by shooting the others with a gun. A quote about the fires going out confirms it.', tip: 'In co-op, two players with staffs can split the three crystals.' },
          { w: 333, t: 'Shoot the three glowing symbols on the floating rocks in the Nexus', d: 'Use the staff. They\'re on the nearer rocks (check their backs). Remember the symbols; one of the four portals closes.' },
          { w: 378, t: 'Shoot the same three symbols at that portal\'s door in the catacombs', d: 'Leave by another portal. Blue is in spawn, red by Quick Revive, yellow by Stamin-Up, green by Speed Cola. Shoot your three symbols out of the eight there.', warn: 'No symbol on the floor in front of the portal means the wrong symbols: going through would kill you.' },
          { w: 410, t: 'Escort the purple orb', d: 'Go through the reopened door; you land high up next to a purple orb. Hold interact and stay close to it as it moves, killing zombies to power it. An Amalgam comes at the end. Everyone in the game must be in the Nexus near the orb.', tip: 'Fail and it flies off: next round, shoot the door symbols again and retry.' },
          { w: 456, t: 'Upgrade the staff at the broken wall', d: 'The orb flies into the wall; hold interact with the staff for Ull\'s Arrow.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'The Tomb main quest', short: 'Main quest',
        summary: 'Take dark energy from four creature pedestals in the Nexus, carry each to its statue in the catacombs and win that creature\'s challenge, bring the energy back, then cross the bridge and destroy the Sentinel Artifact.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, Staff of Ice skin, weapon charm, 5,000 XP'],
          ['Boss', 'The Sentinel Artifact'],
        ],
        prep: [
          { t: 'Pack-a-Punch open', needs: ['power-pap'] },
          { t: 'Ull\'s Arrow (the upgraded Staff of Ice)', needs: ['ice-staff'] },
          { t: 'For the boss: a bullet gun at Pack-a-Punch 3 and Legendary rarity (the artifact ignores the Ray Gun and the staff), Aether Shroud, Gold armour if you can' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 580, t: 'Vermin: shoot its pedestal in the Nexus with Sekhmet\'s Vigor and take the dark energy', d: 'Switch the staff to its other end (D-pad left / B) and fire at the pedestal with the blue crystal and the Vermin. Hold interact to take the energy.', needs: ['ice-staff'] },
          { w: 596, t: 'Put the energy in the Vermin statue at the Dig Site and kill the swarm', d: 'Leave by the blue portal; the statue in spawn glows purple. A lockdown of Vermin follows. Take the energy back from the statue.' },
          { w: 612, t: 'Bring the energy back to the Vermin pedestal', d: 'You can\'t use the portal nearest the challenge, so use another one.', warn: 'Get hit more than twice while carrying energy and you lose it; fetch it again from the statue.' },
          { w: 643, t: 'Parasite: same again at the Shrine of the Hierophants', d: 'Take the energy from the Parasite pedestal and leave by the yellow portal. Parasites fly in glowing purple: kill them, run over the orbs they drop and bank them at the statue until it fills. Bring the energy back through a different portal.' },
          { w: 706, t: 'Doppelghast: same again at the Ossuary', d: 'Leave by the green portal. Lots of Doppelghasts spawn and the floor shoots spikes; kill them all, then bring the energy back.' },
          { w: 752, t: 'Amalgam: same again at Deep Excavation', d: 'Leave by the red portal and go down to Quick Revive. A big Amalgam shields itself and tethers to a zombie: kill that zombie to drop the shield. Kill it and bring the energy back.' },
          { w: 783, t: 'Get ready', d: 'Pack-a-Punch 3, Legendary rarity, Aether Shroud, GobbleGums such as Shields Up, Kazimir grenades, Gold armour if you have it.' },
          { w: 879, t: 'Open the wall, cross the bridge and start the fight', d: 'Four beams hit a wall in the Nexus; hold interact and a bridge forms. Interact with the Sentinel Artifact and vote.' },
          { w: 894, t: 'Phases 1 to 4: dodge the orange beam, shoot it when it turns purple', d: 'It spins a stunning orange laser and moves between the upper and lower level: stand on the other level. When it turns ghostly purple, everyone pours damage into it. From phase 2 there are several artifacts; break one per phase. A Max Ammo follows each phase.' },
          { w: 1021, key: 'phases-5-to-9-kill-the-zombie-carrying-the-artifact', t: 'Phases 5 to 8: kill the zombie carrying the artifact', d: 'A Heavy Zombie, then a red supercharged Doppelghast (it can down you in one hit), a Shock Mimic and an Amalgam each carry an artifact on their back. Kill it, then destroy the artifact it drops. Phases 6 to 8 can add a second carrier with a white fake you can\'t damage.' },
          { w: 1098, t: 'Final phase: focus the artifact in the middle', d: 'The artifacts line up in a semicircle and the middle one slowly backs away. Everyone shoots that one before it finishes its wipe attack. Then interact with the artifact in the middle of the arena.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Dig"',
        summary: 'Interact with three Mister Peeks headphones.',
        video: SE(811),
        spots: [
          'In the Ossuary, on a ledge along the wall by the right-most stairs to the green portal.',
          'In the Shrine of the Hierophants, under a ledge left of Stamin-Up.',
          'In the Dark Aether Nexus, at the south-east edge next to a blue and orange glowing spore.',
        ],
      },
      {
        id: 'song-aether', tab: 'side', type: 'Song', name: '"Aether" (Tomb mix)',
        summary: 'Quickly shoot the symbols I, I and V on both Staff of Ice murals.',
      },
      {
        id: 'golden-armor', tab: 'side', type: 'Upgrade', name: 'Golden Armor (self-repairing)',
        summary: 'Armour that keeps refilling its own plates, free for every player. You get a full tier 3 vest with it.',
        video: SE(279),
        steps: [
          { w: 297, t: 'Break two crates in the Dark Aether Nexus and take the stone heads', d: 'Melee them open: one right of Juggernog, one under a bush left of the green portal.' },
          { w: 312, t: 'Put the heads back on the two headless statues in the Dig Site' },
          { w: 327, t: 'Start a Blood Sacrifice at one statue and win it', d: 'Your health drops to 1 and only armour takes damage. Kill the three elite Doppelghasts or Shock Mimics without leaving the Dig Site (leaving resets it). No scorestreaks while it runs.', tip: 'Buy armour first.' },
          { w: 387, t: 'Do the second statue\'s Blood Sacrifice' },
          { w: 403, t: 'Take the Golden Armor from the wall by the ox statues', d: 'They fire a beam that reveals the vest on the wall over the Pack-a-Punch spot. Everyone can take one.' },
        ],
      },
      {
        id: 'free-raygun', tab: 'side', type: 'Free weapon', name: 'Free Ray Gun (Ancient Gems)',
        summary: 'With a shovel and Death Perception, dig the dig spots around the map: besides the usual loot, some throw out a green Ancient Gem. Bring all three to the leftmost statue facing the bull mural in the Tombs. An elite Doppelghast and a couple of normal ones spawn; kill them and interact with the statue again for 1,000 Essence and a Ray Gun.',
        video: SE(160),
      },
      {
        id: 'free-crystal', tab: 'side', type: 'Free reward', name: 'Free Aetherium Crystal and Cryo Freeze',
        summary: 'In the Dark Aether Nexus, a floating rock sparks blue when you arrive. Shoot it, then shoot all five rocks that start moving: you get a Raw Aetherium Crystal (a free Pack-a-Punch tier) and the Cryo Freeze ammo mod.',
        video: SE(10),
      },
      {
        id: 'free-aether-tool', tab: 'side', type: 'Free reward', name: 'Free Aether Tool (frozen waterfalls)',
        summary: 'With Cryo Freeze on a gun, shoot both waterfalls near the green door in the Dark Aether Nexus. An Aether Tool drops: Rare before round 12, Epic up to 21, Legendary from 22.',
        video: SE(58),
      },
      {
        id: 'generators', tab: 'side', type: 'Free reward', name: 'Free Essence and Full Power (generators)',
        summary: 'With Dead Wire on a gun, shoot the two blue generators in the Dig Site: one under the tier 2 armour wall-buy, one left of the bottom stairs to the GobbleGum machine. A Full Power and two 500 Essence canisters appear on the fallen pillar.',
        video: SE(542),
      },
      {
        id: 'perk-braziers', tab: 'side', type: 'Free perk', name: 'Free perk: Ossuary braziers',
        summary: 'In the Speed Cola room of the Ossuary, light all six stone braziers (two by each entrance) with Napalm Burst or Molotovs. A Random Perk appears in the middle of the room.',
        video: SE(122),
      },
      {
        id: 'vases', tab: 'side', type: 'Free reward', name: 'Ten vases (free Self-Revive and Light Mend)',
        summary: 'Shoot all ten hidden vases for a free Self-Revive kit and the Light Mend ammo mod.',
        spots: [
          'Spawn: on the roof just above the blue teleporter door.',
          'Spawn: high above the right-hand spawn door.',
          'Spawn: on the scaffolding above the Rampage Inducer.',
          'On the way into the tombs: high up on the right.',
          'Stamin-Up room: on the ceiling on the right.',
          'Subterranean Temple: high up left of the red teleporter.',
          'Subterranean Temple: in the crevice right above the red teleporter.',
          'Deep Excavation: on the rock face on the left.',
          'Neolithic Catacombs: out of the window on the right by the Mystery Box spot.',
          'Ossuary: right of the left-hand door.',
        ],
        video: SE(425),
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each. The Fire Sale only appears once you have the other seven.',
        video: SE(686),
        spots: [
          'Bonus Points: in a small hole in the wall left of the blue portal in the Dark Aether Nexus.',
          'Max Ammo: on a ledge right above the foglight near the arrow trap, between the Shrine of the Hierophants and the Subterranean Temple.',
          'Double Points: in the Nexus trench between the red and green portals, above a mushroom on the wall opposite the ammo cache.',
          'Full Power: in the opening left of the Crafting Table in the Shrine of the Hierophants.',
          'Insta-Kill: bottom right of the vase on the rocks in Deep Excavation.',
          'Max Armor: in a small alcove right of Speed Cola in the Ossuary.',
          'Nuke: on a rock out of the map behind the Mystery Box spot in the Neolithic Catacombs.',
          'Fire Sale: in the fire above the red foglight between PhD Flopper and the Rampage Inducer in the Dig Site.',
        ],
      },
    ],
  });
})();
