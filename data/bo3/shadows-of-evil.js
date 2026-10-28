/* Shadows of Evil — Black Ops III base map */
(() => {
  const I = 'assets/img/bo3/soe/';
  ZG.addMap({
    game: 'bo3', id: 'shadows-of-evil', order: 1, group: 'original',
    name: 'Shadows of Evil', dlc: 'Base game', eeName: 'Apocalypse Averted',
    hero: I + 'hero.webp', players: 'coop',
    tags: ['Rocket Shield', 'Apothicon Servant', 'Swords'],
    blurb: 'Four cursed sinners in 1940s Morg City. Use Beast Mode to dig up the ritual items, sacrifice your past to open Pack-a-Punch, then forge Apothicon Swords and turn on the Shadowman.',
    quick: [
      ['Main EE', 'Apocalypse Averted'],
      ['Players', 'Solo up to the Shadowman; ending needs 4'],
      ['Wonder weapons', 'Apothicon Servant, Swords'],
      ['Pack-a-Punch', 'Four rituals + the Rift'],
    ],
    intro: {
      start: 'Shadows of Evil has no power switch. Beast Mode powers perks and unlocks everything, and Pack-a-Punch only opens after the four rituals. This is the order most players follow.',
      parts: 'Three buildables. The Rocket Shield parts each have two or three spawn spots; the Civil Protector fuses and Apothicon Servant parts come from fixed spots or enemy drops.',
      weapons: 'Each player earns their own Apothicon Sword and then upgrades it into a Keeper Sword. Both are required for the main easter egg.',
      'easter-egg': 'Solo and 2–3 player games can go as far as capturing the Shadowman. The final step needs four players. Tap a chip to open that guide without leaving this page.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'beast-mode', tab: 'start', type: 'Map mechanic', name: 'Beast Mode', color: 'aether', img: I + 'ritual-easy-street.webp',
        summary: 'Interact with a Beast shrine (a pedestal with blue flames) to turn into the Beast for a short time. The Beast opens nearly everything on this map.',
        blocks: [
          { list: [
            '**Smash** (melee): breaks chained doors and crates marked with the Beast symbol.',
            '**Shock** (fire): powers yellow electrical boxes — including the box next to every Perk-a-Cola, which you must shock before you can buy that perk.',
            '**Grapple**: aim at a glowing grapple point to pull yourself up to it.',
          ] },
          { p: 'Beast Mode recharges every round, and each player needs a different shrine that round. The Beast only lasts a short time, so plan what you\'ll do before you transform.' },
          { tip: 'Shock the box at each perk you plan to buy. Juggernog, Speed Cola and Double Tap move between districts each game: the broken perk bottle in the Junction in front of each district door shows which is where (red = Juggernog, green = Speed Cola, yellow = Double Tap).' },
        ],
      },
      {
        id: 'summoning-key', tab: 'start', type: 'Quest item', name: 'Summoning Key', img: I + 'summoning-key.webp', color: 'gold',
        summary: 'Needed for every ritual. It is locked in a crate on the back of the truck in the starting alley (Easy Street).',
        steps: [
          { w: ['zz9m-MB725o', 61], t: 'Become the Beast and smash the crate on the truck', needs: ['beast-mode'], imgs: [{ src: I + 'key-crate.webp', cap: 'The crate holding the Summoning Key' }] },
          { t: 'Leave Beast Mode and pick up the Key as a human' },
        ],
      },
      {
        id: 'rituals-pap', tab: 'start', type: 'Getting started', name: 'Rituals & Pack-a-Punch', short: 'Rituals & PaP',
        summary: 'Collect four ritual items with the Beast, complete the four rituals for four Gateworms, then perform the fifth ritual in the Rift to open Pack-a-Punch. Doable solo by round 5–6.',
        stepsTitle: 'Steps',
        steps: [
          { w: ['zz9m-MB725o', 61], t: 'Get the Summoning Key', needs: ['summoning-key'] },
          { w: ['zz9m-MB725o', 61], any: 'Get the four ritual items in any order', t: 'Magician\'s item: the Lawyer\'s Pen (starting alley)', needs: ['beast-mode'], d: 'Just outside the entrance to Easy Street, a crane holds a crate. As the Beast, shock the red marker/meter so the crane swings in and drops the crate; it breaks open and the pen falls out. While you\'re the Beast, grapple to the catwalk above the alley entrance and shock it to open the Nero\'s Landing gate at the end of the alley (the way to the Magician\'s ritual).', imgs: [{ src: I + 'pen.webp', cap: 'Lawyer\'s Pen' }] },
          { w: ['zz9m-MB725o', 296], any: 'Get the four ritual items in any order', t: 'Detective\'s item: the Badge (Canal District)', needs: ['beast-mode'], d: 'Drop down into the canal and become the Beast. Smash the crate behind the locked grate, then turn around and find the bricks painted with the Beast symbol: smash them and shock the box behind. The grate opens — grab the badge as a human.', tip: 'Also smash the chained door down here: it leads to a Rift portal you\'ll use later.', imgs: [{ src: I + 'badge.webp', cap: 'Detective\'s Badge' }] },
          { w: ['zz9m-MB725o', 234], any: 'Get the four ritual items in any order', t: 'Boxer\'s item: the Championship Belt (Waterfront District)', needs: ['beast-mode'], d: 'As the Beast, grapple to the high platform with a crate dangling from a chain above the district. Smash the crate so it falls and breaks, then pick up the belt.', imgs: [{ src: I + 'belt.webp', cap: 'Championship Belt' }] },
          { w: ['zz9m-MB725o', 184], any: 'Get the four ritual items in any order', t: 'Femme Fatale\'s item: the Producer\'s Toupee (Footlight District)', needs: ['beast-mode'], d: 'On the walkways leading into Footlight, grapple across to the building edge where a crate sits and smash it down. It breaks on the ground — pick up the toupee.', imgs: [{ src: I + 'toupee.webp', cap: 'Producer\'s Toupee' }] },
          { w: 13, anyList: 'Rituals in any order', t: 'Do the four rituals (any order)', d: 'At each altar, place the item and use the Summoning Key. Survive the Keepers until the victim is sacrificed, then grab the Gateworm that appears.', list: [
            '**Magician** (Nero): his apartment, up through the Nero\'s Landing gate at the back of the starting alley.',
            '**Detective** (Jack Vincent): the Ruby Rabbit club, Canal District.',
            '**Boxer** (Floyd Campbell): The Anvil gym\'s boxing ring, Waterfront District.',
            '**Femme Fatale** (Jessica Rose): the Black Lace burlesque club, Footlight District.',
          ], warn: 'The 2nd and 4th rituals end with a Margwa spawning. Have a plan (or a Rocket Shield).', imgs: [
            { src: I + 'ritual-canal.webp', cap: 'Canal District ritual' },
            { src: I + 'ritual-waterfront.webp', cap: 'Waterfront District ritual' },
            { src: I + 'ritual-footlight.webp', cap: 'Footlight District ritual' },
          ] },
          { w: ['zz9m-MB725o', 372], t: 'Enter the Rift', d: 'Use the Canal portal you opened when getting the badge, or become the Beast and smash the symbol in the far-left alley of the Footlight District. Both lead to the Rift (the subway under the Junction).' },
          { w: 264, t: 'Open the Sacred Place and place the Gateworms', d: 'In the Rift, walk up to the wall covered in glowing symbols — it breaks open into the Sacred Place. Put a Gateworm on a pedestal on the altar side: walls rise out of the pit so you can wall-run across to the two far pedestals. Fill all four.' },
          { w: 301, t: 'Do the Pack-a-Punch ritual', d: 'Use the Summoning Key on the altar in the Sacred Place and survive. The Shadowman thanks you, takes the Key, and a Margwa spawns. The Pack-a-Punch portal is now open.', note: 'Pack-a-Punch costs 5,000. Paying 2,500 more on an upgraded gun adds a random elemental effect (Blast Furnace, Dead Wire, Fireworks, Thunder Wall or Turned).', imgs: [{ src: I + 'sacred-ritual.webp', cap: 'The Sacred Place ritual' }] },
        ],
        video: { id: 'PAJVuZ5znoQ', title: 'Shadows of Evil Pack-a-Punch Guide (all rituals)', ch: 'MrRoflWaffles', len: '6:29' },
      },
      {
        id: 'ee-roadmap', tab: 'start', stepsOrder: 'suggested', type: 'Plan', name: 'Road to the Easter Egg',
        summary: 'What the main quest needs, in order.',
        steps: [
          { t: 'Open Pack-a-Punch (rituals)', needs: ['rituals-pap'] },
          { t: 'Build the Rocket Shield', needs: ['rocket-shield'] },
          { t: 'Turn on the Civil Protector', needs: ['civil-protector'] },
          { t: 'Get an Apothicon Sword for every player', needs: ['apothicon-sword'] },
          { t: 'Upgrade every sword into a Keeper Sword', needs: ['apothicon-sword'] },
          { t: 'Start Apocalypse Averted', needs: ['main-ee'] },
        ],
      },

      {
        id: 'layout', tab: 'start', type: 'Map layout', name: 'Map of Morg City', short: 'Map',
        summary: 'The in-game wall map. The Junction is in the middle, with the Footlight District at the top, the Canal District to the left and the Waterfront District to the right. The four drawn symbols mark the ritual sites.',
        blocks: [{ imgs: [{ src: I + 'layout.webp', cap: 'Morg City wall map', wide: true }] }],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'rocket-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Rocket Shield', img: I + 'rocket-shield.webp',
        summary: 'Blocks hits from the front while you hold it and from behind while it is on your back. Its rocket burst throws you forward through zombies. Build it at any workbench.',
        facts: [['Parts', '3'], ['Recharge', 'Max Ammo, gas canisters or Harvest Pods'], ['Upgrade', 'Goddard Apparatus']],
        parts: [
          { w: 26, name: 'Eagle Plate', icon: I + 'shield-eagle.webp', area: 'Canal District', spots: [
            'Inside the Smoke Lounge, leaning against the window.',
            'Inside the Smoke Lounge, against the wall opposite the window.',
          ] },
          { w: 75, name: 'Fuel Canisters', icon: I + 'shield-fuel.webp', area: 'Waterfront District', spots: [
            'Leaning against the window across from the Perk-a-Cola machine.',
            'On the bridge that leads to the lounge.',
            'Inside the lounge, left of the paid gate to the Waterfront train station, leaning on an overturned coffee table.',
          ] },
          { w: 120, name: 'Window', icon: I + 'shield-screen.webp', area: 'Footlight District', spots: [
            'Next to the Perk-a-Cola machine.',
            'In the tunnel to the train station, on a bench on the left.',
          ] },
        ],
        video: { id: '2nAu_0iOqQU', title: 'Shadows of Evil: How to Find the Shield Parts & Workbenches', ch: 'ChadderManHD', len: '3:53' },
        upgrade: {
          name: 'Goddard Apparatus', summary: 'Takes more hits and holds four charges instead of three.',
          steps: [
            { t: 'Hit 10+ zombies with one burst, twelve bursts in a row', d: 'A bowling-strike sound means the burst counted. Hitting fewer than 10 resets the streak; the shield breaking does not.' },
            { t: 'Collect the upgraded shield', d: 'In solo you can pick it up again from the workbench where you built it.' },
          ],
        },
      },
      {
        id: 'civil-protector', tab: 'parts', type: 'Buildable · Bodyguard', name: 'Civil Protector', img: I + 'civil-protector.webp',
        summary: 'A robot bodyguard with a KN-44 that defends the district it\'s called to and revives downed players. Needs three fuses first.',
        facts: [['Parts', '3 fuses'], ['Cost per call', '2,000 (can be paid in chunks)'], ['After main EE', 'Gold, with a PaP\'d gun']],
        parts: [
          { name: 'Fuse 1', area: 'Canal District', spots: ['In the walkway behind the 1,250-point door near the train station (by the district\'s perk spot).'] },
          { name: 'Fuse 2', area: 'Waterfront District', spots: ['In the walkway behind the 1,250-point door near the train station (by the district\'s perk spot).'] },
          { name: 'Fuse 3', area: 'Footlight District', spots: ['In the walkway behind the 1,250-point door near the train station (by the district\'s perk spot).'] },
        ],
        steps: [
          { t: 'Put the three fuses in the Master Switch', d: 'The fuse box is down below Morg City in the Rift.' },
          { t: 'Call it from an Emergency Response panel when it shows green', list: [
            'Junction: near the GobbleGum machine and Chang\'s laundry.',
            'Canal District: in front of the Ruby Rabbit, over the bridge near the Harsha hotel.',
            'Footlight District: near the Apothicon statue and the gate to the Burlesque/theatre.',
            'Waterfront District: near the Mystery Box spot.',
          ], tip: 'Short on points? "Contribute" whatever you have; it lowers the price of the next call.' },
        ],
      },
      {
        id: 'apothicon-servant', tab: 'parts', type: 'Buildable · Wonder weapon', name: 'Apothicon Servant', img: I + 'servant.webp', color: 'aether',
        summary: 'Fires a black-hole portal that swallows zombies. Building it gives one copy and adds it to the Mystery Box. It cannot be Pack-a-Punched on this map.',
        facts: [['Parts', '3 (enemy drops)'], ['Built at', 'Any workbench']],
        parts: [
          { name: 'Margwa Heart', icon: I + 'margwa-heart.webp', area: 'Enemy drop', spots: [{ label: 'Drop', text: 'Dropped by a killed Margwa. Missed it? The next Margwa drops another.' }] },
          { name: 'Margwa Tentacle', icon: I + 'margwa-tentacle.webp', area: 'Harvest Pods', spots: [{ label: 'Drop', text: 'Can come out of the highest-tier (purple) Harvest Pods.' }] },
          { name: 'Xenomatter', icon: I + 'xenomatter.webp', area: 'Enemy drop', spots: [{ label: 'Drop', text: 'Can drop from Parasites or Insanity Elementals once you reach round 12.' }] },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'apothicon-sword', tab: 'weapons', type: 'Specialist · Wonder weapon', name: 'Apothicon Sword', short: 'Apothicon Sword', img: I + 'sword.webp', color: 'aether',
        summary: 'Each player gets their own sword (each character\'s has a different name), then upgrades it into a Reborn Keeper Sword. Both stages are needed for the main easter egg.',
        stepsTitle: 'Get the sword (every player)',
        steps: [
          { imgs: [{ src: I + 'tram-canals.webp', cap: 'Example symbol in a train-line window' }, { src: I + 'tram-footlight.webp', cap: 'Another example (yours will differ)' }, { src: I + 'tram-docks.webp', cap: 'Another example' }], w: ['zz9m-MB725o', 450], t: 'Spot the three symbols from the train', needs: ['rituals-pap'], d: 'Three symbols show in red backlit windows along the train lines (random each game):', list: [
            'Leaving **Waterfront**: right-hand side, after the small shack on the overpass — top-right window of a square building.',
            'Leaving **Footlight**: left side, after the Peep Show, Rooster\'s Pipe and Celeste\'s signs.',
            'Leaving **Canal**: left side, after the Devil-O-Donuts and Hotel signs.',
          ], tip: 'Two rides cover all three: Waterfront → Footlight looking out the side opposite the Bootlegger wall-buy, then Footlight → Canal looking out the Bootlegger side.' },
          { w: ['zz9m-MB725o', 513], t: 'Shock the matching symbols in the Rift', needs: ['beast-mode'], d: 'In the Rift, across from the Sacred Place, nine symbols surround a doorway next to the Mystery Box and GobbleGum spot. As the Beast, shock the three you saw. The wall dissolves and reveals a statue holding four swords and four eggs.', warn: 'A wrong combination hides the symbols until next round.' },
          { w: ['zz9m-MB725o', 534], t: 'Take an egg from the statue', d: 'Each player takes their own egg.' },
          { w: ['zz9m-MB725o', 538], anyList: 'Statues in any order', t: 'Charge the egg at all four Apothicon statues', d: 'Smash the crate around each statue, place your egg, and kill zombies nearby until it has absorbed 10 to 12 souls and glows white. Pick it up and move to the next one. After the fourth it glows blue.', list: [
            'Footlight District alleyway, under the Perk-a-Cola spot.',
            'Canal District, behind the front stairs of the Ruby Rabbit.',
            'Waterfront District, in the wrecked building in the room past the Perk-a-Cola spot.',
            'In the Rift, across from the sword statue.',
          ], tip: 'One statue can charge everyone\'s eggs at the same time.' },
          { w: ['zz9m-MB725o', 573], t: 'Return the egg to the sword statue and take your sword' },
        ],
        upgrade: {
          name: 'Reborn Keeper Sword', img: I + 'keeper-sword.webp', summary: 'The upgraded sword. Every player needs it before Capture the Flag.',
          steps: [
            { w: ['zz9m-MB725o', 576], t: 'Get the Arch-Ovum from your character\'s ritual altar', d: 'Go to the altar that belongs to your character (Nero = his apartment, Jack = Ruby Rabbit, Floyd = The Anvil, Jessica = Black Lace). A Keeper spirit floats above it; interact to receive the Arch-Ovum.' },
            { w: ['zz9m-MB725o', 612], anyList: 'Circles in any order, one per round', t: 'Complete all four red ritual circles', d: 'Place the Arch-Ovum on a red circle. Margwas spawn (up to 2 solo, up to 4 in co-op) that only chase you. Kill them and the Arch-Ovum returns to you with some of its shell gone.', list: [
              'In front of the Black Lace entrance, Footlight District.',
              'Between the workbench and the Ruby Rabbit entrance, Canal District.',
              'Directly in front of The Anvil gym, Waterfront District.',
              'Outside the entrance to Easy Street, in the Junction.',
            ], warn: 'One circle per player per round. You can\'t start a circle while someone else still has Margwas alive from theirs. These Margwas give no points.' },
            { w: ['zz9m-MB725o', 688], t: 'Give your sword to the Keeper spirit', d: 'Back at your character\'s altar, hand over the sword. It comes back as the Reborn Keeper Sword.' },
          ],
        },
      },
      {
        id: 'lil-arnie', tab: 'weapons', type: 'Tactical upgrade', name: 'Li\'l Arnie', img: I + 'lil-arnie.webp', color: 'green',
        summary: 'A Mystery Box tactical that summons a little Apothicon to maul nearby zombies. It can be upgraded after the rituals.',
        stepsTitle: 'Upgrade steps',
        video: { id: 'H-UEEixc3Bs', title: 'Upgraded Li\'l Arnies', ch: 'MrDalekJD', len: '4:26' },
        steps: [
          { w: 31, t: 'Finish all the rituals', needs: ['rituals-pap'] },
          { w: 47, t: 'Kill 100 zombies with Li\'l Arnies' },
          { w: 109, anyList: 'Items in any order', t: 'Throw a Li\'l Arnie at three items so they vanish', list: [
            'Top hat on a mannequin\'s head in Nero\'s lair.',
            'Bow tie on a shelf in the boxing gym (The Anvil).',
            'Walking cane on a sofa on the first floor of the Ruby Rabbit.',
          ] },
          { w: 154, t: 'Throw one at the ritual stand on the Black Lace stage', d: 'The little creature dances with four Gateworms. When the song ends, your Li\'l Arnies are upgraded: they last longer, kill faster and survive more Margwa hits.' },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Apocalypse Averted', short: 'Main EE',
        summary: 'Turn the Keepers against the Shadowman, trap him in the Summoning Key, and (with four players) destroy the giant Apothicon over Morg City.',
        facts: [
          ['Players', 'Solo–3: up to step 3 · 4 players: full ending'],
          ['Reward', 'Upgraded Civil Protector, calling card, Summoning Key map icon, XP (the achievement comes from opening Pack-a-Punch)'],
          ['Hardest part', 'Capturing the Shadowman'],
        ],
        prep: [
          { t: 'Open Pack-a-Punch and upgrade strong weapons', needs: ['rituals-pap'], tip: 'The KRM-262 wall-buy Pack-a-Punched (Dagon\'s Glare) is a solid choice here.' },
          { t: 'Every player has a Reborn Keeper Sword', needs: ['apothicon-sword'] },
          { t: 'Build the Rocket Shield and turn on the Civil Protector', needs: ['rocket-shield', 'civil-protector'], tip: 'Call the Civil Protector while defending the flag. Li\'l Arnies also buy breathing room.' },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { w: 701, t: 'Open the book in Nero\'s ritual room', d: 'An open book appears on the floor next to the shelves in Nero\'s ritual area. Interact with it: a flag with purple mist falls from the ceiling next to Widow\'s Wine.' },
          { imgs: [{ src: I + 'flag.webp', cap: 'The flag' }], w: 713, anyList: 'The four characters can be done in any order', t: 'Capture the Flag — for all four characters', needs: ['civil-protector', 'rocket-shield'], d: 'Pick up the flag: every zombie vanishes and Insanity Elementals start spawning fast. Carry it to a spot crackling with bright purple lightning, plant it and defend it until you hear a chime. Each character needs two such spots on the way to their ritual site, then the flag goes onto that ritual table. The Keeper spirit there becomes solid and a Margwa spawns.', list: [
            'Example (Nero): from the Rift, the spot near Stamin-Up in front of the Footlight entrance → the spot at the entrance to Easy Street → Nero\'s ritual table.',
            'Avoid the dark purple circles on the ground — they hurt.',
            'A Max Ammo drops each time you finish a spot.',
            'If the flag breaks or its carrier goes down, grab a new one underground and try again.',
          ], warn: 'Only one successful flag run per round, though you can retry a failed one straight away. The flag has little health.', tip: 'Use the portals in the Rift to jump between districts quickly.' },
          { imgs: [{ src: I + 'shadowman-shield.webp', cap: 'The Shadowman inside his shield' }], w: 828, t: 'Capture the Shadowman', needs: ['apothicon-sword'], d: 'All four Keepers now guard the Gateworm pedestals in the Sacred Place. Each player interacts with a pedestal (handing over their Keeper Sword for now). When everyone has, the Keepers break the Shadowman\'s shield. Shoot him fast — he teleports around as he takes damage and drifts toward the summoning table. When he\'s over it, interact with the table to trap him in the Summoning Key.', warn: 'A Margwa spawns every time the shield breaks, and you can\'t leave the room. Too slow and his shield comes back — interact with all four Keepers again to retry.', note: 'With fewer than four players, this is the end of the quest and your swords come back.' },
          { w: 890, t: 'Four players only: kill the giant Gateworm with the train', d: 'A giant Gateworm appears over the centre of the map, zombies stop, and purple Margwas keep coming. Everyone gets unlimited Beast Mode, but you also get "infected" — run through the white orbs around each district to cleanse yourself.', list: [
            'Kill purple Margwas to relight Beast shrines.',
            'Three players, as the Beast, shock the cube-shaped electrical box high on the wall at each train station. The rails turn blue.',
            'The fourth player calls the train. It smashes into the giant Gateworm.',
            'Right after, the three Beasts shock the three Keepers in the centre. Their beams hit the giant Apothicon in the sky.',
          ], tip: 'If anyone bleeds out during this step, calling the train at any station respawns them.' },
        ],
        blocks: [
          { p: 'Finish: the giant Apothicon disappears, a Keeper descends with the Summoning Key — and Richtofen grabs it and leaves through a portal. Your swords return and the Civil Protector is upgraded for the rest of the game.' },
        ],
        video: { id: 'zz9m-MB725o', title: 'Ultimate Shadows of Evil Easter Egg Guide (solo & co-op)', ch: 'MrRoflWaffles', len: '16:51' },
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song-snakeskin', tab: 'side', type: 'Song', name: '"Snakeskin Boots"',
        summary: 'Hold interact on three small wooden radios.',
        spots: [
          'Waterfront: the boxing gym, on a desk on the upper level.',
          'Canal: entrance of the Ruby Rabbit, on a table to the left.',
          'Footlight: the train station, on a bench.',
        ],
        blocks: [{ tip: 'For the instrumental version, use one radio twice, then the other two once each.' }],
      },
      {
        id: 'song-cold-hard-cash', tab: 'side', type: 'Song', name: '"Cold Hard Cash"',
        summary: 'Collect three microphone parts, then interact with the stage of the Black Lace in Footlight.',
        spots: [
          { label: 'Wire', text: 'Under the stairs from the Ruby Rabbit down into the canals, opposite the power box behind the Beast-only wall.' },
          { label: 'Stand', text: 'Nero\'s lair, to the left of a bloody knife-throwing target.' },
          { label: 'Mic', text: 'In the Rift by a trash can, near the portal to the Waterfront.' },
        ],
        video: { id: 'CxjCh4f-WWE', title: 'Secret song in Shadows of Evil (Cold Hard Cash)', ch: 'MrRoflWaffles', len: '5:40' },
      },
      {
        id: 'free-megas', tab: 'side', type: 'Free item', name: 'Free Mega GobbleGum (lions)',
        summary: 'Throw four Widow\'s Wine grenades into the mouths of the four lion heads in the Canal District room connected to the Double Tap room. Each lion then shows a small grey sphere (one per player): take yours and place it on the plate in a shop in the first room. Two rounds later, interact with the plate for a free GobbleGum.',
      },
      {
        id: 'trip-mine-upgrade', tab: 'side', type: 'Upgrade', name: 'Trip Mine upgrade (food carts)',
        summary: 'Pick one food-cart brand and set off a Trip Mine next to every cart of that brand.',
        blocks: [{ list: [
          'Blow up all four **Devil-O-Donuts** carts → your Trip Mines become cream cakes.',
          'Blow up all three **Holly\'s Cream Cake** carts → your Trip Mines become donuts.',
        ] }],
      },
      {
        id: 'round-skip', tab: 'side', type: 'Points boost', name: 'Round skip (Shadowman)',
        summary: 'At the very start, the Shadowman stands on the stairs up to Nero\'s ritual room. If every player shoots him, you can skip to round 5, 10 and then 15, earning 1,000, 4,000 and 11,000 points. Solo, private and local matches only.',
      },
      {
        id: 'noir', tab: 'side', type: 'Fun', name: 'Black-and-white "Noir" mode',
        summary: 'Shoot the picture frame behind the boxing ring in The Anvil, then interact with it.',
      },
    ],
  });
})();
