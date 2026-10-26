/* Forsaken — Black Ops Cold War, Season Six */
(() => {
  const I = 'assets/img/bocw/forsaken/';
  const E = 'RtYND6JaLe0'; // MrRoflWaffles easter egg guide
  const P = 'WxHl95nT4NM'; // MrRoflWaffles Pack-a-Punch guide
  const C = 'HQ9nImCSYmA'; // MrRoflWaffles Chrysalax guide
  const EV = { id: E, title: 'Forsaken easter egg guide', ch: 'MrRoflWaffles', len: '10:26' };
  const PV = { id: P, title: 'How to Pack-a-Punch on Forsaken', ch: 'MrRoflWaffles', len: '3:29' };
  const CV = { id: C, title: 'How to build the Chrysalax (and other ways to get it)', ch: 'MrRoflWaffles', len: '8:13' };

  ZG.addMap({
    game: 'bocw', id: 'forsaken', order: 4,
    name: 'Forsaken', dlc: 'Season Six', eeName: 'Pyrrhic Victory',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Chrysalax', 'Aetherium Neutralizer', 'The Forsaken'],
    blurb: 'The last Cold War map: an Omega facility in Ukraine with a fake American town called Anytown. Build an Aetherium Neutralizer, fuel it with crystals fed to Abominations, push it through the Dark Aether and help Samantha bring down the Forsaken.',
    quick: [
      ['Main EE', 'Pyrrhic Victory (solo or co-op)'],
      ['Wonder weapon', 'Chrysalax (build it, Mystery Box, Trials or arcade)'],
      ['Key items', 'Fuel tank, buoy, monitor, three catalysed crystal shards'],
      ['Boss', 'The Forsaken, with Samantha\'s cannons'],
    ],
    intro: {
      start: 'Pack-a-Punch takes three teleporters and an Abomination fight. Cold War rules are explained in the basics on Die Maschine.',
      parts: 'Three parts for the Aetherium Neutralizer, in any order. One needs Dead Wire and an RC car.',
      weapons: 'The Chrysalax is needed to break the three big crystals. Building it is reliable, but the Mystery Box and Trials hand it out often.',
      'easter-egg': 'Press the second red button first: everything else unlocks two rounds later. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Leave spawn by teleporter, find four parts to fix the Main Street teleporter, kill an Abomination at the next one, then end the lockdown with the red button in the Observation Tower.',
        video: PV,
        steps: [
          { w: 0, t: 'Start the spawn teleporter straight away', d: 'It takes 30 seconds, and rounds keep going up on their own until you leave. Kill zombies and grab salvage meanwhile.' },
          { w: 15, t: 'Teleport out', d: 'Rounds now only advance normally. Juggernog is right in front of you and needs no power.' },
          { w: 46, t: 'Open the doors to the broken teleporter', d: 'Taking the left side lets you lie down in front of Stamin-Up for points.' },
          { w: 61, t: 'Find its four parts, one in each shop', d: 'Each part has three possible spots:', list: [
            'Video store: a box on the left, the shelf on the right, or another box.',
            'Cinema: held by the mannequin on the left, behind the candy counter, or on a bench.',
            'TV store: between the TVs in the window, on a small metal bench, or on a shelf.',
            'Burgertown: under the US flag, left of the cola machine, or inside a glass case.',
          ] },
          { w: 122, t: 'Fix the teleporter and go through', d: 'Run straight on and through the metal door on the left into the Amplifier. Walk up to the next teleporter: an Abomination spawns.' },
          { w: 138, t: 'Kill the Abomination', d: 'Shoot whichever head glows purple: it takes extra damage and bursting it takes a big chunk off. Back off during its charge and electric attacks.', tip: 'Leave only one or two zombies alive beforehand. With 500 common salvage you can buy tier 1 armour nearby.' },
          { w: 184, t: 'Teleport and press the red button', d: 'In the Observation Tower. The lockdown ends and Pack-a-Punch is right there.' },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'neutralizer', tab: 'parts', type: 'Buildable · Quest', name: 'Aetherium Neutralizer', color: 'aether',
        summary: 'The machine that carries you through the Dark Aether wall at the end of the easter egg. Three parts in any order, plus three catalysed crystal shards as fuel. They only appear after the cutscene from the second red button.',
        facts: [['Parts', '3 + 3 crystal shards'], ['Build at', 'Workbench in Main Street, facing the collapsed walkway'], ['Unlocks', 'Two rounds after the cutscene']],
        video: EV,
        parts: [
          { w: 199, name: 'Fuel tank', area: 'Fuel Processing', spots: ['Next to a teleporter, four tanks with control panels. Every player holds interact on a different tank at the same time (solo: any one). A lockdown starts: kill zombies nearby until all four fill with red liquid. The central tank then drops. If it doesn\'t start, try again next round.'] },
          { w: 244, name: 'Housing unit (buoy)', area: 'Bunker, Board Room', spots: ['A buoy hangs in the top-right corner. Stand in that corner so an Abomination charges and slams into the wall, and let it bite you for a second: the buoy falls. Back up and retry if it doesn\'t.'] },
          { w: 291, name: 'Monitoring device', area: 'Arcade, then TV store', spots: ['Shock a zombie with Dead Wire (an ammo mod from Pack-a-Punch, 2,000) next to the Grand Prix arcade machine, opposite the pinball machines. It turns on. Pay 2,000 for an RC car and drive it into the TV store behind the counter: its pulse knocks the vent cover off. Drive in and blow it up next to the shelf. The part is now in a hole in the TV store wall.'] },
        ],
        blocks: [{ imgs: [
          { src: I + 'fuel.webp', cap: 'A fuel tank control panel' },
          { src: I + 'buoy.webp', cap: 'The buoy in the Board Room' },
          { src: I + 'grand-prix.webp', cap: 'The Grand Prix machine' },
          { src: I + 'vent.webp', cap: 'The vent in the TV store' },
          { src: I + 'bench.webp', cap: 'The Neutralizer workbench' },
        ] }],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'chrysalax', tab: 'weapons', type: 'Wonder weapon', name: 'Chrysalax', img: I + 'axe.webp', color: 'aether',
        summary: 'Two weapons in one; swap with D-pad up (B on PC). The Savager is an axe that throws energy blades and steals health and armour from zombies. The Storm is a rapid-fire gun that can turn zombies into crystal bombs. Kills with one form drop ammo for the other.',
        facts: [['Get it', 'Build it, Mystery Box, Trials or a gold arcade crate'], ['Upgraded', 'Tenebris'], ['Forms', 'Savager (axe) · Storm (gun)']],
        video: CV,
        steps: [
          { w: 46, t: 'Turn on Pack-a-Punch, then press the second red button', needs: ['power-pap'], d: 'In the same Observation Tower room. It plays a cutscene and starts the main quest.' },
          { w: 61, t: 'Play on until two rounds later', d: 'Finish the current round and the next one.' },
          { w: 77, t: 'Take the orange crystal behind the counter of Jim\'s Donuts', d: 'In Main Street, near Juggernog. Stay by it: waves of special enemies attack. Kill them all and the crystal can be picked up.' },
          { w: 123, t: 'Kill a Tormentor with fire', d: 'A Flamethrower from the Crafting Table or a Ring of Fire. It drops the second crystal.' },
          { w: 153, t: 'Let an Abomination\'s beam break a small purple crystal', d: 'Lead it to one of the small purple Aether crystals around the map (don\'t break it yourself). It leaves the third crystal behind. Abominations come every four or five rounds.' },
          { w: 199, t: 'Put the crystals in the pool in the Particle Accelerator and get 10 melee kills', d: 'A melee weapon or an Insta-Kill makes it quick. Then pick up the Chrysalax.' },
        ],
        blocks: [
          { list: [
            '**Mystery Box**: in it from the start and fairly common.',
            '**Trials**: next to Pack-a-Punch; a Legendary reward often gives it.',
            '**Arcade**: the Der Eisendrache game (fill the dragon with kills in the ring) can give a gold crate with a wonder weapon. Knife the token machine for a free token.',
          ] },
          { tip: 'Buying ammo refills both forms, so empty both first.' },
          { imgs: [{ src: I + 'gun.webp', cap: 'The Storm (gun) form' }] },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Pyrrhic Victory',
        summary: 'Trigger the Forsaken\'s arrival, build the Aetherium Neutralizer from three parts, fuel it by feeding crystal shards to Abominations, escort it through the Dark Aether and help Samantha trap the Forsaken.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, ending cutscene'],
          ['Boss', 'The Forsaken (three phases)'],
        ],
        prep: [
          { t: 'Pack-a-Punch on', needs: ['power-pap'] },
          { t: 'The Chrysalax (any source)', needs: ['chrysalax'] },
          { t: 'Dead Wire on a normal gun, for the arcade machine', needs: ['neutralizer'] },
          { t: 'For the boss: upgrade the Chrysalax as far as you can, plus perks and armour' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 93, t: 'Turn on Pack-a-Punch', needs: ['power-pap'] },
          { w: 108, t: 'Press the second red button, next to the window', d: 'In the Observation Tower. A cutscene plays. Two rounds later, three huge crystals appear around the map.' },
          { w: 199, any: 'Parts in any order', t: 'Fuel tank: the Fuel Processing lockdown', needs: ['neutralizer'] },
          { w: 244, any: 'Parts in any order', t: 'Housing unit: an Abomination knocks the buoy down', needs: ['neutralizer'] },
          { w: 291, any: 'Parts in any order', t: 'Monitoring device: Dead Wire, arcade, RC car', needs: ['neutralizer'] },
          { w: 366, t: 'At a big crystal, shoot its three orbs, then smash it with the axe', needs: ['chrysalax'], d: 'Use the Storm (gun) on the orbs; they speed up and extra enemies spawn. Then switch to the Savager (axe) and smash the crystal. Take the small shard; it goes in your tactical slot.', list: [
            'The Amplifier (the trippy corridor of the particle accelerator).',
            'The spawn (Staging Area); a teleporter by Juggernog takes you back.',
            'The rooftop in the Main Street storage area.',
          ], imgs: [
            { src: I + 'crystal-amp.webp', cap: 'The Amplifier crystal' },
            { src: I + 'crystal-staging.webp', cap: 'The spawn crystal' },
            { src: I + 'crystal-street.webp', cap: 'The Main Street crystal' },
          ] },
          { w: 414, t: 'Throw the shard into an Abomination\'s mouth', d: 'One spawns when the crystal breaks. Missed? Pick up another shard where you found the first. When it swallows it, its tail glows orange.' },
          { w: 430, t: 'Kill it and take the catalysed shard', d: 'The axe\'s energy blade held at its feet kills it in a few seconds.' },
          { w: 446, t: 'Repeat for the other two big crystals', d: 'After the third, a voice says the Neutralizer can be built.' },
          { w: 477, t: 'Get ready', d: 'Upgrade the Chrysalax, buy perks and armour. Your second gun matters less.' },
          { w: 492, t: 'Build the Neutralizer at the workbench, then start it', d: 'Interact again once it\'s built. This is the point of no return.', imgs: [{ src: I + 'bench.webp', cap: 'The workbench' }] },
          { w: 508, t: 'Escort it down the street and keep it fuelled', d: 'Stay next to it. When it runs low, break orange crystals on the street (some are up ladders) and feed it.' },
          { w: 523, t: 'Last chance to Pack-a-Punch, then open the door', d: 'When the Neutralizer shuts down, Pack-a-Punch, Der Wunderfizz, ammo and a Crafting Table appear. Interact with the door to start the fight.' },
          { w: 539, t: 'Phase 1: charge a cannon, break a shoulder, fire', d: 'Stand in the ring under Samantha and kill zombies to fill her meter; she charges one of the big cannons at the sides. Break the armour on a shoulder, then fire the cannon at that weak spot. Not enough damage and it heals, so charge another and retry. Do both shoulders.' },
          { w: 586, t: 'Phases 2 and 3: same loop, new weak spots', d: 'After a short vision you\'re back. Now the weak spot is the crystal on its chest, then the one on its head. Watch for its eye laser; Krasny Soldats join in. When it says it\'s through playing games, you\'ve won.', imgs: [{ src: I + 'boss.webp', cap: 'Samantha against the Forsaken' }] },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Samantha\'s Ballad"',
        summary: 'Needs PhD Slider at tier 5. Slide off Anytown rooftops onto one of three scorched patches of road until an Aether bunny plush drops. Put it in the back of the Bubby animatronic and defend Bubby for three minutes. A loot chest with the cassette appears.',
      },
    ],
  });
})();
