/* The Giant — Black Ops III bonus map (remake of Der Riese) */
(() => {
  const I = 'assets/img/bo3/giant/';
  ZG.addMap({
    game: 'bo3', id: 'the-giant', order: 2, group: 'original',
    name: 'The Giant', dlc: 'Bonus map (The Giant pack)', eeName: 'Fly Trap · "Paradoxical Prologue"',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Wunderwaffe DG-2', 'Short easter egg'],
    blurb: 'A remake of Der Riese where Primis arrives at the Group 935 factory. The easter egg is a remixed Fly Trap: three hidden toys, a beacon for Maxis, and a free Annihilator.',
    quick: [
      ['Main EE', 'Fly Trap (Paradoxical Prologue)'],
      ['Players', 'Solo or co-op'],
      ['Wonder weapon', 'Wunderwaffe DG-2 (box)'],
      ['EE reward', 'Annihilator + Gateworm icon'],
    ],
    intro: {
      start: 'The Giant is small and quick. Power, link the three teleporters, and Pack-a-Punch opens in the spawn room.',
      'easter-egg': 'The shortest main easter egg in Black Ops III — you only need a Pack-a-Punched weapon.',
    },
    items: [
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power, teleporters & Pack-a-Punch', short: 'Power & PaP',
        summary: 'Turn on the power, then link all three teleporters to the Mainframe. Each link opens the Pack-a-Punch door a little more.',
        video: { id: 'FGQgPX0FbUE', title: 'The Giant: power and Pack-a-Punch', ch: 'JokerAlex 21', len: '3:38' },
        steps: [
          { w: 30, t: 'Turn on the power in the Courtyard', d: 'Drop into the Courtyard from the Animal Testing Lab or the Garage side. The power switch is on the generator at the back.' },
          { w: 135, any: 'Link the three teleporters in any order', t: 'Link Teleporter A', d: 'Behind the Animal Testing Lab (1,250-point door). Activate the teleporter pad, then run back to the Mainframe in the spawn room and link it before the timer runs out.' },
          { w: 160, any: 'Link the three teleporters in any order', t: 'Link Teleporter B', d: 'Up the stairs from the Automobile Garage. Activate, then link at the Mainframe.' },
          { w: 90, any: 'Link the three teleporters in any order', t: 'Link Teleporter C', d: 'Behind the Courtyard (1,250-point door). Activate, then link at the Mainframe.' },
          { w: 182, t: 'Use Pack-a-Punch in the spawn room', d: 'The door in front of the machine is fully open after the third link. 5,000 to upgrade; 2,500 to re-pack for an elemental effect.' },
        ],
      },
      {
        id: 'wunderwaffe', tab: 'weapons', type: 'Wonder weapon', name: 'Wunderwaffe DG-2', img: I + 'wunderwaffe.webp', color: 'lightning',
        summary: 'Lightning gun that chains between zombies. Mystery Box only.',
        upgrade: {
          name: 'Wunderwaffe DG-3 JZ', img: I + 'wunderwaffe-up.webp', summary: 'Pack-a-Punched version: more ammo and longer chains.',
          steps: [{ t: 'Pack-a-Punch it', needs: ['power-pap'] }],
        },
      },
      {
        id: 'annihilator', tab: 'weapons', type: 'Specialist weapon', name: 'Annihilator', img: I + 'annihilator.webp', color: 'gold',
        summary: 'A revolver specialist weapon that vaporises zombies. It is the reward for the Fly Trap easter egg.',
        steps: [{ t: 'Finish the Fly Trap, then take it from the furnace in the Automobile Garage', needs: ['fly-trap'] }],
      },
      {
        id: 'fly-trap', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Fly Trap', aka: 'Paradoxical Prologue', short: 'Fly Trap',
        summary: 'Shoot a hidden panel with an upgraded weapon, then find and shoot three toys that fly off around the map. Maxis uses them as a beacon to find Primis.',
        facts: [['Players', '1–4'], ['Time', 'About as long as getting Pack-a-Punch'], ['Reward', 'Annihilator, Gateworm icon, 1,000 XP']],
        stepsTitle: 'Quest steps',
        steps: [
          { w: 16, t: 'Pack-a-Punch a weapon', needs: ['power-pap'], tip: 'The Wall Power, Crate Power or Ephemeral Enhancement GobbleGums give you an upgraded weapon without linking the teleporters, if you want this done early.' },
          { w: 16, t: 'Shoot the Fly Trap panel with the upgraded weapon', d: 'It\'s in the alley next to the Mainframe on the Animal Testing Lab side (same place as the original Der Riese). Throwing a grenade at it while holding an upgraded weapon also works. Maxis speaks when it triggers.' },
          { w: 79, any: 'Shoot the three toys in any order', t: 'Shoot the Cymbal Monkey in the incinerator', d: 'In the incinerator under Teleporter A.', imgs: [{ src: I + 'fly-monkey.webp', cap: 'Monkey in the incinerator' }, { src: I + 'fly-monkey-close.webp', cap: 'Close-up' }] },
          { w: 47, any: 'Shoot the three toys in any order', t: 'Shoot the teddy bear on the balcony', d: 'From the power switch in the Courtyard, look right at the balconies. The bear sits on top of the tallest one.', imgs: [{ src: I + 'fly-balcony.webp', cap: 'Balcony bear (circled)' }, { src: I + 'fly-balcony-close.webp', cap: 'Close-up' }] },
          { w: 97, any: 'Shoot the three toys in any order', t: 'Shoot the teddy bear in the water container', d: 'Beside Teleporter B, in the water container on the left as you enter the room.', imgs: [{ src: I + 'fly-water.webp', cap: 'Bear in the water container' }, { src: I + 'fly-water-close.webp', cap: 'Close-up' }] },
          { w: 131, t: 'Collect the Annihilator from the furnace', d: 'Maxis says the beacon is lit. Go to the furnace at the back of the Automobile Garage and pick up the Annihilator.', imgs: [{ src: I + 'annihilator.webp', cap: 'The Annihilator in the furnace' }] },
        ],
        blocks: [{ note: 'The toys don\'t have to be shot with an upgraded weapon — only the panel does.' }],
        video: { id: 'ohgjh3Rpbjg', title: 'The Giant — Main Easter Egg Fly Trap Tutorial', ch: 'NoahJ456', len: '3:28' },
      },
      {
        id: 'song-beauty', tab: 'side', type: 'Song', name: '"Beauty of Annihilation" (remix)',
        summary: 'Hold interact on three glowing green jars with spines in them.',
        spots: [
          'Animal Testing Lab (first jar).',
          'Animal Testing Lab (second jar).',
          'Near Teleporter B, in the side room.',
        ],
      },
      {
        id: 'secret-perk', tab: 'side', type: 'Free perk machine', name: 'Hidden perk machine (Giant\'s eye beam)',
        summary: 'Unlock a sixth perk machine: Stamin-Up or Deadshot Daiquiri.',
        steps: [
          { t: 'Get Monkey Bombs from the Mystery Box and link all teleporters', needs: ['power-pap'] },
          { anyList: 'Teleporters in any order', t: 'Teleport a Monkey Bomb from each teleporter', d: 'Throw a Monkey Bomb onto a teleporter pad and teleport with it. Back at the Mainframe, one of three lights on the panel beside it turns from red to green. Repeat for all three teleporters.' },
          { t: 'Press the red button on the panel', d: 'The giant robot\'s head outside fires its eye beam, which bounces off the welcome sign and melts a snow pile, revealing Stamin-Up or Deadshot Daiquiri.' },
        ],
      },
    ],
  });
})();
