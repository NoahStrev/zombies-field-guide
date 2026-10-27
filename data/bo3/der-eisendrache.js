/* Der Eisendrache — Black Ops III, Awakening DLC */
(() => {
  const I = 'assets/img/bo3/de/';
  ZG.addMap({
    game: 'bo3', id: 'der-eisendrache', order: 3, group: 'original',
    name: 'Der Eisendrache', dlc: 'Awakening · DLC 1', eeName: "My Brother's Keeper",
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Rocket Shield', '4 bow upgrades', 'Ragnarok DG-4'],
    blurb: "Primis raids Group 935's castle in the Austrian Alps. Feed the dragons to earn the Wrath of the Ancients, upgrade it into one of four elemental bows, and bring down the corrupted Keeper.",
    quick: [
      ['Main EE', "My Brother's Keeper"],
      ['Players', 'Solo or co-op'],
      ['Wonder weapon', 'Wrath of the Ancients'],
      ['EE reward', 'All perks + achievement'],
    ],
    intro: {
      start: 'Do these first. Power, Pack-a-Punch and the three map mechanics below (Anti-Gravity, Wunderspheres and the Death Ray) come up in almost every quest on this map.',
      parts: 'Two buildables. Every part has a few possible spawn spots and only one is used each game, so check each spot in the list.',
      weapons: 'Get the base bow first, then each player picks one of the four upgrades. Only one upgrade quest can be active per player.',
      'easter-egg': 'Tick steps off as you go; your progress is saved in this browser. Tap any coloured chip to open that item\'s guide on top of this page without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Power & Pack-a-Punch',
        summary: 'Turn on the power, then send Pack-a-Punch pieces away from two of its three possible spots so the machine builds at the third.',
        steps: [
          { t: 'Turn on the power', d: 'Open your way up into the castle. The power switch is in the Armory, on the T-shaped hallway that joins Samantha\'s Room and the Church (Mission Control). Power opens the way down to the Undercroft.' },
          { w: ['nwjpp1jWZ5Y', 31], anyList: 'Any two spots, in any order', t: 'Visit the three Pack-a-Punch spots', list: [
            '**Undercroft**: by the large central pillar, on the side opposite the dragon statue.',
            '**Bastion**: the outdoor area behind the power switch, across from the Wundersphere.',
            '**Rocket Launch Pad**: on the walkway next to the rocket. Get there through the Undercroft teleporter, or by {{wundersphere}} from the Bastion once you have visited the pad.',
          ] },
          { w: ['nwjpp1jWZ5Y', 47], t: 'Teleport the pieces away from two spots', d: 'At each spot you\'ll get a prompt to teleport the machine pieces. Once two spots have sent their pieces, the machine builds itself at the third.', tip: 'The machine moves between the three spots during the game. A board near each spot lists where it is right now.' },
        ],
      },
      {
        id: 'anti-gravity', tab: 'start', type: 'Map mechanic', name: 'Anti-Gravity (wall-running)', color: 'storm',
        summary: 'Low gravity in the Undercroft lets you double-jump and wall-run. Several parts and two bow quests need it.',
        steps: [
          { t: 'Stand on each of the four tiles around the Pyramid', d: 'Each tile needs about 4–5 seconds before it stays lit blue. When all four are lit, Anti-Gravity turns on.' },
          { t: 'Wait for it to repeat', d: 'After the first time, Anti-Gravity switches itself back on every few minutes for the rest of the game.' },
        ],
      },
      {
        id: 'wundersphere', tab: 'start', type: 'Map mechanic', name: 'Wunderspheres', color: 'aether',
        summary: 'Launch pads that fling you across the map for 500 points. A sphere can only land on a pad you have already visited on foot.',
        blocks: [
          { list: [
            'Spheres are in the Upper Courtyard (by the Kuda wall-buy), on the second floor of the Lower Courtyard (above Double Tap), on the Bastion and at the Rocket Launch Pad.',
            'You keep facing the direction you were looking when you launched, which helps when you need to shoot something mid-air (Fire Bow rings, Ragnarok part).',
          ] },
        ],
      },
      {
        id: 'death-ray', tab: 'start', type: 'Map mechanic', name: 'Death Ray', color: 'lightning',
        summary: 'The big tesla trap on the Bastion. Turn it on at least once: it is needed for a Ragnarok part and for the main easter egg.',
        blocks: [
          { p: 'It has two settings, "Destroy" and "Protect", switched with a lever. You will flip it during the main easter egg.' },
        ],
      },
      {
        id: 'ee-roadmap', tab: 'start', stepsOrder: 'suggested', type: 'Plan', name: 'Road to the Easter Egg',
        summary: 'Everything the main quest needs, in a sensible order. Tap a chip to see that guide.',
        steps: [
          { t: 'Turn on power and open Pack-a-Punch', needs: ['power-pap'] },
          { t: 'Build the Rocket Shield', needs: ['rocket-shield'] },
          { t: 'Feed the three dragons and grab the bow', needs: ['bow'] },
          { t: 'Use the Death Ray once', needs: ['death-ray'] },
          { t: 'Build the Ragnarok DG-4', needs: ['ragnarok'] },
          { t: 'Upgrade one bow per player', needs: ['storm-bow', 'fire-bow', 'void-bow', 'wolf-bow'], d: 'Solo (online/ranked): one upgraded bow is enough. Four players: all four bows. Private/unranked matches need all four upgraded no matter how many players.' },
          { t: "Start My Brother's Keeper", needs: ['main-ee'] },
        ],
      },

      /* ------------------------------ PARTS ------------------------------ */
      {
        id: 'rocket-shield', tab: 'parts', type: 'Buildable · Shield', name: 'Rocket Shield', img: I + 'rocket-shield.webp',
        summary: 'Blocks hits from the front while you hold it and from behind while it is on your back. Its rocket burst launches you forward through zombies. Build it at any workbench.',
        facts: [['Parts', '3'], ['Recharge', 'Max Ammo or red-valve canisters'], ['Upgrade', 'Goddard Apparatus']],
        parts: [
          { w: 68, name: 'Eagle Plate', icon: I + 'shield-eagle.webp', area: 'Upper Courtyard', spots: [
            'Leaning on a stack of large crates next to a window, to the right of the ground-floor entrance to Mission Control (the Church).',
            'On the floor beside the corpse sitting at the desk on the ground floor of the Clock Tower (Radio Room).',
            'Against some wooden barrels on the left of the staircase that leads up to the Clock Tower and the Wundersphere landing pad.',
          ] },
          { w: 113, name: 'Window', icon: I + 'shield-screen.webp', area: 'Undercroft · needs {{anti-gravity}}', note: 'All three spots are high up. Wait for Anti-Gravity, then double-jump or wall-run to them.', spots: [
            'High on the wall directly above the Pack-a-Punch teleporter platform.',
            'Above the doorway to the Rocket Test teleporter, just under the glowing "eye" glyph.',
            'Hanging on the metal rings that join the four Keeper statues around the Pyramid. From the workbench by the Pyramid, turn to face it and look up and slightly left.',
          ] },
          { w: 27, name: 'Fuel Canisters', icon: 'assets/img/bo3/soe/shield-fuel.webp', area: 'Lower Courtyard', spots: [
            'Coming uphill into the Lower Courtyard from Double Tap: on top of the crates immediately on your right, beside a window.',
            'Same entrance, turn left and climb the short stairs. At the bottom right of the other small staircase (the one that only leads to a window), leaning on small crates.',
            'From the second-floor landing pad, take the stairs toward the Death Ray. At the base of the second set of stairs, on the left against the stone wall.',
          ] },
        ],
        upgrade: {
          name: 'Goddard Apparatus', summary: 'Takes more hits and holds four rocket charges instead of three.',
          steps: [
            { t: 'Hit 10 or more zombies with one rocket burst — twelve times in a row', d: 'A bowling-strike sound confirms each good burst. A burst that hits fewer than 10 zombies resets the streak, but the shield breaking does not.', tip: 'Train a big horde, then burst straight through the middle of it.' },
            { t: 'Pick up the upgraded shield', d: 'It replaces your shield automatically. If it breaks later, the workbench gives you the upgraded version again.' },
          ],
        },
        video: { id: 'hlsb7rVKmOs', title: 'Der Eisendrache: How To Build The Shield / All Part Locations', ch: 'TheSmithPlays', len: '3:47' },
      },
      {
        id: 'ragnarok', tab: 'parts', type: 'Buildable · Specialist weapon', name: 'Ragnarok DG-4', img: I + 'ragnarok.webp',
        summary: 'Electric gravity spikes. Slam them to kill everything around you, or plant them as a trap. Required for the end of the main easter egg.',
        facts: [['Parts', '3 (none are random spawns)'], ['Charge', 'Kill zombies to refill']],
        stepsTitle: 'Get the three parts',
        steps: [
          { w: 30, any: 'Get the three parts in any order', t: 'Kill the first Panzersoldat', d: 'It drops a part when it dies. If you miss it, the next Panzer drops it again.' },
          { w: 140, any: 'Get the three parts in any order', t: 'Win the part from the Rocket Test', d: 'When the rocket is about to test-fire, go behind it to the bottom of the left-hand stairs (closest to the Wundersphere) and pull the lever with the red light. Run into the tunnel, survive the extra zombies until all three console lights next to the teleporter are solid green, then press the console. The part appears in the teleporter.', warn: 'You only get a few seconds once the lights are solid green. Miss it and you wait for the next Rocket Test.', tip: 'Speed-up: during Anti-Gravity, wall-run over the lit panel below and left of the big hole high on the Undercroft wall. The first time drops a Death Machine; after that it can set off a Rocket Test right away.' },
          { w: 45, any: 'Get the three parts in any order', t: 'Grab the part floating above the Bastion', needs: ['death-ray', 'wundersphere'], d: 'After the Death Ray has been used once, a part floats in mid-air above the Bastion. Ride the Wundersphere from the Upper Courtyard (or the one on the Lower Courtyard second floor) and press interact as you fly past it.' },
          { w: 202, t: 'Build it at a workbench', d: 'Every player can pick up their own copy.' },
        ],
        video: { id: '1Y94XgLzrQ0', title: 'Der Eisendrache — Ragnarok DG-4 Gravity Spikes Guide', ch: 'MrDalekJD', len: '4:09' },
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'bow', tab: 'weapons', type: 'Wonder weapon', name: 'Wrath of the Ancients', short: 'Base bow', img: I + 'bow.webp', color: 'gold',
        summary: 'A 60-arrow bow with explosive charged shots that never hurt you. Every player can take one, and each player can upgrade theirs into one of four elemental bows.',
        stepsTitle: 'How to get it',
        steps: [
          { w: ['tLMm9I-xZ8k', 44], any: 'Feed the three dragons in any order', t: 'Feed the dragon head in the Lower Courtyard', d: 'Near Double Tap, above the tunnel that leads to the underground lab.' },
          { w: ['tLMm9I-xZ8k', 122], any: 'Feed the three dragons in any order', t: 'Feed the dragon head in the Church (Mission Control)', d: 'The Speed Cola room: above the fireplace at the back.' },
          { w: ['tLMm9I-xZ8k', 168], any: 'Feed the three dragons in any order', t: 'Feed the dragon head in the Undercroft', d: 'In the Pyramid room, across from the workbench.' },
          { w: ['tLMm9I-xZ8k', 213], t: 'Pick up the bow in the Family Crypt', d: 'The room right above the Undercroft where a stone knight lies. The bow floats above the crate at the back.' },
        ],
        blocks: [
          { h: 'Feeding a dragon' },
          { list: [
            'Kill one zombie near the head to wake it up.',
            'Keep killing zombies near it. It lifts each corpse and eats it: 8 per dragon.',
            'It can only eat one corpse at a time, so kills made while it is still eating do not count. Space your kills out.',
            'When it is full it turns to stone and crumbles.',
          ] },
          { tip: 'Lost your bow? Grab it again from the Family Crypt.' },
          { h: 'Pick an upgrade' },
          { p: 'Each player binds to one quest by picking up that bow\'s broken arrow: {{storm-bow}} {{fire-bow}} {{void-bow}} {{wolf-bow}}' },
        ],
      },
      {
        id: 'storm-bow', tab: 'weapons', type: 'Bow upgrade', name: 'Storm Bow', aka: "Kreema'ahm la Ahmahm · \"Lightning Bow\"", img: I + 'bow-storm.webp', color: 'storm',
        summary: 'Shots leave a ball of lightning; charged shots create a storm that pulls zombies in and fries them. 75 arrows. Many people find this the easiest upgrade.',
        stepsTitle: 'Upgrade steps',
        steps: [
          { w: 2, t: 'Shoot the weathervane to get the broken arrow', needs: ['bow'], d: 'On the Bastion, face the Clock Tower. A small tower with a lightning symbol has a weathervane on top. Shoot it; the bricks crumble and the broken arrow drops.', imgs: [{ src: I + 'storm-arrow.webp', cap: 'Picking up the broken Storm arrow' }] },
          { w: 22, anyList: 'Bonfires in any order', t: 'Light three bonfires out of bounds', d: 'Shoot each with the bow until it catches fire.', spots: [
            { label: 'Fire 1', text: 'Leave the Clock Tower toward the computer terminal and look over the wall to the right: a turret in the distance. You can also shoot it from the Mule Kick room below.' },
            { label: 'Fire 2', text: 'Stand at the outdoor KRM-262 wall-buy by Double Tap, turn about 45° right and look at the far right edge of the ridge above the rocket test site.' },
            { label: 'Fire 3', text: 'At the Rocket Launch Pad, coming out of the teleporter tunnel: high up on the cliff on your right, looking back at the castle.' },
          ] },
          { w: 61, t: 'Wall-run across the five wind symbols', needs: ['anti-gravity'], d: 'In the Undercroft, five long hexagon-shaped wind etchings sit on the walls. During Anti-Gravity, run across all five in one go without touching the ground.', tip: 'Different sounds play when you touch a panel, finish, or fail. If you start right as Anti-Gravity begins, you usually have time for a second try.' },
          { w: 124, anyList: 'Urns in any order', t: 'Fill three lightning urns with 5 kills each', d: 'The urns spark with lightning now.', spots: [
            { label: 'Urn 1', text: 'The room above Double Tap, between the workbench and the L-CAR 9 wall-buy.' },
            { label: 'Urn 2', text: 'Rocket Launch Pad tunnel, against the wall across from the teleporter.' },
            { label: 'Urn 3', text: 'Ground floor of the Clock Tower, on crates under the spiral stairs.' },
          ] },
          { w: 186, anyList: 'Bonfires in any order', t: 'Shoot each bonfire with a charged-up arrow', d: 'Draw the bow next to a full urn and the arrow starts sparking. Shoot a bonfire with it; lightning circles the flames when it works. Missed? Walk back to an urn and try again.' },
          { w: 269, t: 'Reforge the arrow at the weathervane', d: 'Back under the weathervane there is now blue fog on the ground. Interact to place the arrow, wait a few seconds, then pick up the reforged arrow.' },
          { w: 300, t: 'Feed the lightning shrine 20 souls', d: 'Place the reforged arrow on the shrine with the lightning symbol next to the Pyramid. Kill 20 zombies inside the square formed by the stairs around the Pyramid.' },
          { w: 334, t: 'Place your bow in the shrine and collect the Storm Bow' },
        ],
        video: { id: 'cMRBJ2p_2KE', title: 'Best Lightning Bow Upgrade Guide', ch: 'MrRoflWaffles', len: '6:09' },
      },
      {
        id: 'fire-bow', tab: 'weapons', type: 'Bow upgrade', name: 'Fire Bow', aka: "Kreeaho'ahm nal Ahmhogaroc · \"Rune Prison\"", img: I + 'bow-fire.webp', color: 'fire',
        summary: 'Shots splash lava; charged shots trap zombies in volcanic mounds that erupt. Charged-shot kills pay 60 points. The trickiest steps are timed shots.',
        stepsTitle: 'Upgrade steps',
        steps: [
          { w: 2, t: 'Shoot the red symbol at the top of the Clock Tower', needs: ['bow'], d: 'Climb the spiral stairs inside the Clock Tower (Radio Room). Shoot the glowing red symbol on the wall: the clock face opens and the broken arrow pieces drop in a pile.' },
          { w: 17, t: 'Shoot the hot rock after a Rocket Test', d: 'At the Rocket Launch Pad, go through the blast doors. On the right is a small building with the VMP wall-buy and a dark rock on top. When a Rocket Test finishes, run out and shoot the rock while it glows orange. A fireball flies off toward the castle.', tip: 'Spot: from the middle of the blast doors walk straight ahead until you have fully crossed the tracks running sideways (don\'t stand on them), turn right 90° and aim at the orange glow in the upper-left of the rock. Rocket Tests happen every 5–7 minutes.' },
          { w: 97, anyList: 'Rings in any order', t: 'Set three rings on fire from a Wundersphere', needs: ['wundersphere'], d: 'Each ring must be hit while you are flying. A demonic wail plays and the ring stays on fire.', tip: 'Hold a charged shot as you buy the launch — uncharged arrows are too slow.', spots: [
            { label: 'Ring 1', text: 'By spawn, between the KRM-262 wall-buy and Double Tap. Launch from the Bastion or the Rocket Launch Pad.' },
            { label: 'Ring 2', text: 'On the Bastion between the Death Ray and the Wundersphere next to it. Launch from the Upper Courtyard (by the Kuda wall-buy).' },
            { label: 'Ring 3', text: 'Outside the Clock Tower on the way to the Bastion. Launch from the Lower Courtyard sphere above Double Tap.' },
          ] },
          { w: 192, anyList: 'Rings in any order', t: 'Kill zombies while standing in each ring', d: 'The screen edges turn orange while you are inside. Only you need to be in the ring, not the zombies. Each ring sends a fire pillar to the fireball over the Bastion when it is full.' },
          { w: 224, t: 'Read the fireplace symbol at the Clock Tower', d: 'Back at the top of the Clock Tower, interact with the exposed clockwork. A symbol appears that points to one of three fireplaces, and the matching ring is now the only one still burning.', list: [
            'Church/Control Room fireplace under the dragon head (near Speed Cola) → Bastion ring.',
            'Samantha\'s Room fireplace → ring by spawn.',
            'Lower Courtyard supply room fireplace (up the stairs, across from the dragon head) → ring outside the Clock Tower.',
          ] },
          { w: 270, t: 'Hop to the fireplace in 4 shots or fewer', d: 'Stand in the lit ring and shoot the ground as far toward the fireplace as you can. Walk to the mound the arrow leaves, shoot again from there, and repeat until an arrow lands in the fireplace. Interact with the fireplace: the arrow pieces float in the fire.', tip: 'Three shots or fewer also gives a Max Ammo. Run out of shots? Try again next round from the same ring.' },
          { w: 350, t: 'Collect the reforged arrow at the Death Ray', d: 'The fireball now hangs low by the Death Ray. Hold interact underneath it; it hardens, explodes and drops the arrow.', tip: 'If the pick-up prompt won\'t show, stand against the middle of the Death Ray and inch toward the arrow until the prompt changes.' },
          { w: 381, t: 'Feed the fire box 20 souls and collect your bow', d: 'Place the arrow in the box with dark volcanic rocks by the Pyramid, kill 20 zombies close to it, then interact to place your bow. Pick up the Fire Bow a few seconds later.' },
        ],
        video: { id: '2uiPy-gJUiE', title: 'Best Fire Bow Upgrade Guide', ch: 'MrRoflWaffles', len: '7:45' },
      },
      {
        id: 'void-bow', tab: 'weapons', type: 'Bow upgrade', name: 'Void Bow', aka: "Kreegakaleet lu Gosata'ahm · \"Demon Gate\"", img: I + 'bow-void.webp', color: 'void',
        summary: 'Shots release skulls that eat zombies; charged shots open a portal of skulls that holds a crowd in place. Has a random puzzle element.',
        stepsTitle: 'Upgrade steps',
        steps: [
          { w: 15, t: 'Shoot the Demon Gate glyph in the Gate Trap room', needs: ['bow'], d: 'Next to Double Tap, on the slanted ceiling between the two iron gates of the trap. The brickwork breaks and the broken arrow falls.' },
          { w: 31, t: 'Release the urn in the Trophy Room', d: 'A floor tile in the middle of the Trophy Room glows purple. Kill a zombie on it with your knife: the tile breaks and reveals an urn. Interact so it rises and forms a summoning circle.' },
          { w: 63, anyList: 'Skulls in any order', t: 'Return the six Keeper skulls', d: 'Interact with each; it glows purple and flies back to the circle.', spots: [
            { label: 'Skull 1', text: 'A few steps past the L-CAR 9 wall-buy going up from spawn, before the round room with Mule Kick. In a floor nook left of the slumped corpse, under a lantern.' },
            { label: 'Skull 2', text: 'Upper Courtyard, on a windowsill up the stairs past the Vesper wall-buy, before the Church entrance.' },
            { label: 'Skull 3', text: 'Samantha\'s Room, in the open toy chest against the left wall near the bed.' },
            { label: 'Skull 4', text: 'By Double Tap, on the broken wall right of the tipped-over shelves.' },
            { label: 'Skull 5', text: 'Undercroft teleporter room, in the sink beside a bucket on the right as you enter.' },
            { label: 'Skull 6', text: 'Rocket Launch Pad, in the back of the truck left of the Trip Mine wall-buy.' },
          ] },
          { w: 141, t: 'Feed six crawlers to the circle', d: 'Make crawlers (zombies with no legs) and lead them into the circle; a skull flies down and kills each one. Remaining floating skulls show how many are left.', tip: 'Grenades make crawlers early on. The Crawl Space GobbleGum makes this instant.' },
          { w: 156, t: 'Listen for the demon\'s three crests', d: 'The demon names three of six crests: Griffin, Heart, Door, Stag, Crown or Horn. Write down the order. In the T-shaped hallway (Samantha\'s Room / Armory / Church) six suits of armour have crests on their stands. Interact with each to see which glyph goes with which crest (this changes every game).', tip: 'Shoot the urn with your bow to hear the hint again.' },
          { w: 285, t: 'Collect the glyphs from zombies', d: 'Your kills now sometimes drop glyphs into the circle. You need the three that match the named crests; extra wrong ones don\'t hurt. This can take a few rounds.', imgs: [{ src: I + 'void-sigils.webp', cap: 'All six glyphs and their names' }] },
          { w: 349, t: 'Shoot the three glyphs in order', d: 'Shoot the three correct glyphs on the circle floor in the order the demon said them. A flame pillar bursts up: place your broken arrow in it and pick up the reforged arrow after a few seconds.', warn: 'Wrong glyphs anger the demon and reset the name. Check the order again before shooting.', imgs: [{ src: I + 'void-circle.webp', cap: 'The finished summoning circle' }] },
          { w: 482, t: 'Feed the Demon Gate box and collect your bow', d: 'Place the arrow in the box with the Demon Gate glyph by the Pyramid, kill zombies nearby until it\'s full, place your bow, kill 20 more, then press the glyph and take the Void Bow.' },
        ],
        video: { id: 'XxslPcDQXv4', title: 'Best Void Bow Upgrade Guide', ch: 'MrRoflWaffles', len: '10:07' },
      },
      {
        id: 'wolf-bow', tab: 'weapons', type: 'Bow upgrade', name: 'Wolf Bow', aka: "Kreeholo lu Kreemasaleet · \"Wolf Howl\"", img: I + 'bow-wolf.webp', color: 'wolf',
        summary: 'Shots slow zombies; charged shots send spectral wolves tearing through a line of zombies. The quest retells the story of the Wolf King.',
        stepsTitle: 'Upgrade steps',
        steps: [
          { w: 15, t: 'Touch the four Wolf King paintings in story order', needs: ['bow'], d: 'The paintings swap places every game, but the order is always the same. A guitar strum and a wolf symbol mean it worked.', ol: [
            'The king on his throne between two wolves.',
            'The king in his helmet, riding a horse.',
            'A castle on a mountain with lightning.',
            'The king slumped against his shield, with his servant Arthur.',
          ], list: [
            'Painting spots: Trophy Room near the KRM-262 wall-buy · Clock Tower just before the spiral stairs · next to the barrier between Samantha\'s Room and the Armory · balcony inside the Control Room nearest the Armory.',
          ], imgs: [
            { src: I + 'wolf-painting-1.webp', cap: '1 · Throne with wolves' },
            { src: I + 'wolf-painting-2.webp', cap: '2 · On horseback' },
            { src: I + 'wolf-painting-3.webp', cap: '3 · Castle and lightning' },
            { src: I + 'wolf-painting-4.webp', cap: '4 · Mourned by Arthur' },
          ] },
          { w: 127, t: 'Grab the broken arrow at the bottom of the crypt stairs', d: 'Go down into the Undercroft through the Family Crypt. The wolf symbol on the wall at the bottom of the stairs crumbles and drops the arrow.' },
          { w: 144, t: 'Shoot the red flag at the Rocket Launch Pad', d: 'The flag is on the cliff above and slightly left of the big blast doors. Shoot the base where it is planted, not the cloth. A glowing canine skull rolls down the hill — pick it up.', tip: 'Standing on the raised rocket platform gets you closest in height.', imgs: [{ src: I + 'wolf-skull.webp', cap: 'The canine skull' }] },
          { w: 160, t: 'Follow the ghost wolf to three dig spots', d: 'Put the skull in the wolf box by the Pyramid. Follow the wolf; at each spot kill about 10 zombies near the glowing dirt, then pick up the bones it digs up.', ol: [
            'Middle of the Upper Courtyard.',
            'Just outside spawn, before the Gate Trap.',
            'Undercroft, next to the Pack-a-Punch spot.',
          ], tip: 'Lose the wolf and you hear a howl — put the skull back in the box to restart it. You can leave a wolf waiting at a dig spot and come back later.', imgs: [{ src: I + 'wolf-spirit.webp', cap: 'The ghost wolf' }] },
          { w: 269, t: 'Shoot the wall to build a platform', needs: ['anti-gravity'], d: 'The wolf now sits under a big hole high on the Undercroft wall. During Anti-Gravity, wall-run near it until a double wolf-head symbol appears, then shoot it until a platform forms.' },
          { w: 317, t: 'Take the reforged arrow from the Wolf King', d: 'Land on the platform and interact with the coffin. The king\'s skeleton holds out the reforged arrow.' },
          { w: 347, t: 'Feed the wolf box 20 souls and collect your bow', d: 'Put the arrow in the wolf box, kill 20 zombies on the stairs or floor around the Pyramid, then place your bow and take the Wolf Bow.' },
        ],
        video: { id: 'gLQolURWJhc', title: 'Best Wolf Bow Upgrade Guide', ch: 'MrRoflWaffles', len: '7:25' },
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'main-ee', tab: 'easter-egg', type: 'Main Easter Egg', name: "My Brother's Keeper", short: 'Main EE',
        summary: 'Travel back in time, sabotage Group 935, defeat the corrupted Keeper and use the Summoning Key to destroy the Moon.',
        facts: [
          ['Players', '1–4 (solo works)'],
          ['Reward', 'All perks, achievement, Gateworm icon, 2,500 XP'],
          ['Hardest part', 'Keeper boss fight'],
        ],
        prep: [
          { t: 'One upgraded bow per player', needs: ['storm-bow', 'fire-bow', 'void-bow', 'wolf-bow'], d: 'Solo online/ranked: one is enough. Four players: all four. Private/unranked: all four are required at any player count.' },
          { t: 'Build the Ragnarok DG-4 (every player)', needs: ['ragnarok'] },
          { t: 'Use the Death Ray at least once', needs: ['death-ray'] },
          { t: 'Pack-a-Punch strong weapons and grab a fresh shield', needs: ['power-pap', 'rocket-shield'], tip: 'Danger Closest (GobbleGum) cancels the stun from the boss\'s skulls and Panzer shock mines. A PaP\'d shotgun clears Panzers fast; an LMG or Ray Gun works well on the boss.' },
        ],
        stepsTitle: 'Quest steps',
        steps: [
          { w: 30, t: 'Light the rods on the teleporter with the plain bow', needs: ['bow'], d: 'Put your upgraded bow back in its box and take a plain Wrath of the Ancients from the Family Crypt. In the Undercroft teleporter room, shoot each electrified rod on top of the teleporter until its tip glows orange. When all are lit the glow fades and you hear a Margwa-like growl. Swap back to your upgraded bow.' },
          { w: 76, t: 'Shoot four sparking objects (wisps) with an upgraded bow', needs: ['storm-bow', 'fire-bow', 'void-bow', 'wolf-bow'], d: 'One of eight objects starts sparking; shoot it with an upgraded bow, then find the next. Four in total, on a timer. A different growl plays when you finish.', list: [
            'Phone in the small office with Quick Revive.',
            'Truck tyre near Double Tap.',
            'Box near the workbench above Double Tap, on the way to the Wundersphere.',
            'Globe in the small room next to Samantha\'s Room.',
            'Phone on the pillar by the power switch (opposite side from the Bowie Knife).',
            'Clock in the hallway between the Clock Tower and the Church (the Barracks).',
            'Radio in the corner across from Speed Cola in the Church, near the entrance.',
            'Clock above the fireplace in the Church.',
          ], warn: 'Taking too long, shooting a non-sparking object, or using a plain bow fails the step. It restarts on its own at the start of each new round.', tip: 'Learn a loop past all eight spots before you start.' },
          { w: 255, t: 'Travel to the past and steal from Dr. Groph', d: 'The teleporter\'s bottom light is now purple. Everyone gets in. In the past you can\'t use weapons — just do these three things before you are pulled back:', list: [
            'Pick up the tall glowing blue canister in the corner near Groph.',
            'Pick up the small fuses from the wooden box to the right of the teleporter.',
            'Memorise the three symbols shown on Groph\'s safe, top to bottom (lightning bolt, half-circle in a rectangle, circle with dots, or diamond with an arrow).',
          ], warn: 'Everything from here to the safe must happen in the same round. Fail, and you redo step 2 next round (the safe code changes each time).' },
          { w: 382, t: 'Flip the Death Ray and open the safe', needs: ['death-ray'], d: 'You return at the Rocket Pad and a Panzer spawns. Then:', ol: [
            'At the Death Ray, put the small fuse in the side facing the Clock Tower.',
            'Go round the other side and pull the lever from "Destroy" to "Protect".',
            'At the terminal by the Clock Tower, enter the three safe symbols top to bottom.',
            'Open the safe in the lab across from the teleporter and take two large fuses and a keycard from the top shelf (there is no prompt).',
          ], warn: 'A wrong code means redoing steps 2–4. Enter it carefully.' },
          { w: 440, t: 'Win the memory game at both terminals', d: 'Put both large fuses in the tesla coils on either side of the Death Ray and switch it back to "Destroy". Then use one of the two 5-screen terminals (outside the Clock Tower, or at the Rocket Pad): memorise where the four symbols are, then press the screen matching the symbol shown on top until it shuts down with a chime. Do the other terminal next — same symbols, different layout.', tip: 'Take a quick photo or screenshot of the four symbols. Failing the second terminal means replaying both, but you can retry as often as you like that round.' },
          { w: 572, t: 'Sabotage: crash a rocket into the bell tower', d: 'Both tesla orbs glow now. Press the green button on the back of the Death Ray. A rocket smashes the bell and crashes into the Upper Courtyard. Pick up the Vril Generator lying in the snow by the rocket debris (no prompt, no icon).' },
          { w: 632, t: 'Go back in time again for the stone tablet', needs: ['storm-bow', 'fire-bow', 'void-bow', 'wolf-bow'], d: 'Redo step 2 (four sparking objects) to turn the teleporter purple again. In the past, use the computer left of the Kronorium to insert the keycard; a case by the blocked doorway opens. Take the stone tablet with the Keeper symbol and wait to return.' },
          { w: 663, anyList: 'The Keeper picks a random order; follow it', t: 'Guide the ghost Keeper and fill its circles', needs: ['storm-bow', 'fire-bow', 'void-bow', 'wolf-bow'], d: 'In the Family Crypt, place the Vril Generator on the slab under the stone knight. A ghost Keeper appears and Hellhounds spawn nonstop (no points). The Keeper stops at four spots in random order; stand in its white circle and get kills with the bow whose colour tints your screen:', list: [
            'Blue = Storm · Teal = Wolf · Orange = Fire · Purple = Void.',
            'Spots: Church courtyard by the Mystery Box spot · next to Mule Kick · by the suits of armour down the hall from the power switch · next to Double Tap.',
            'At **Double Tap**, first place the stone tablet in the empty slot on the wall left of the Keeper (under the lamp post).',
            'Solo ranked: your single upgraded bow counts for every circle. Hellhound kills and arrow-stab kills don\'t count.',
          ], tip: 'More players inside the circle make it bigger. You can leave and come back.' },
          { w: 772, t: 'Open the Moon Pyramid Device', d: 'The Keeper turns solid, heads to the Undercroft and teleports the MPD down from the Moon. Put the blue canister from the past into the empty corner of the MPD. It opens to reveal the corrupted Keeper — get ready.' },
          { w: 820, t: 'Start the boss fight', needs: ['ragnarok', 'anti-gravity'], d: 'Each player plants their Ragnarok DG-4 (trap mode) on one of the blue Anti-Gravity tiles around the Pyramid. You are teleported into the boss arena.' },
          { w: 901, t: 'Defeat the corrupted Keeper', needs: ['ragnarok'], d: 'Five phases. The Keeper alternates between attacking you and summoning Panzers:', list: [
            '**Phases 1, 3 and 5:** watch for an electric ball forming under the Keeper. Run into it, plant your Ragnarok there, then hide behind a glowing blue pillar from the shockwave. The Keeper is pinned and its chest glows — shoot the chest until the glow fades. Repeat.',
            'The Keeper also drops stunning skulls (shoot them down), raises skeletons and creates damaging mounds.',
            '**Phases 2 and 4:** the Keeper vanishes and Panzersoldats plus skeletons spawn. Kill the Panzers; the first one drops a Max Ammo.',
            'Phase 3 adds Hellhounds; in co-op phase 5 also adds a Panzer before each shockwave.',
          ], tip: 'Max Ammos appear between phases. Use skeletons and Hellhounds to recharge the Ragnarok.' },
          { w: 1120, t: 'Destroy the Moon with the Summoning Key', d: 'Back at the MPD, press interact on the blue circle shaped like the Vril Generator. Take the Summoning Key to the memory-game terminal outside the Clock Tower and interact. The cutscene plays and everyone gets every perk.', note: 'The perks don\'t add slots and are lost if you go down.' },
        ],
        video: { id: 'v3v_IKfgf4U', title: 'Ultimate Der Eisendrache Easter Egg Guide (solo & co-op)', ch: 'MrRoflWaffles', len: '19:33' },
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song-dead-again', tab: 'side', type: 'Song', name: '"Dead Again"',
        summary: 'Hold interact on three teddy bears.',
        spots: [
          'Samantha\'s Room, sitting on a chair.',
          'In the cell opposite the Juggernog cell, sitting on a crate.',
          'Right of the rocket launch pad (looking from the blast doors), in the passenger seat of a truck.',
        ],
      },
      {
        id: 'song-dies-irae', tab: 'side', type: 'Song', name: '"Dies Irae" (gramophones)',
        summary: 'Hold interact on three gramophones.',
        spots: [
          'Samantha\'s Room, on top of a shelf facing away from the teddy bear.',
          'Control Room, sitting on a chair.',
          'Pyramid room, facing the stairs to the crypt.',
        ],
      },
      {
        id: 'song-lullaby', tab: 'side', type: 'Song', name: 'Samantha\'s Lullaby',
        summary: 'Hold interact on the music box on the table next to the bed in Samantha\'s Room.',
      },
      {
        id: 'disco', tab: 'side', type: 'Fun', name: 'Control Room disco',
        summary: 'In the Control Room, shoot the Moon globe to stop it, then shoot the small rocket when it is next to the Moon. Disco lights and 80s music play for about a minute — only for people inside the room. Repeatable.',
      },
      {
        id: 'skeletons', tab: 'side', type: 'Fun', name: 'Turn zombies into skeletons',
        summary: 'Three invisible skulls float around the map. They only show up with the In Plain Sight GobbleGum. Hit them with the bow\'s splash damage.',
        spots: [
          'On the ledge near Double Tap.',
          'On the ledge near Mule Kick.',
          'Upper Courtyard, above the door to the Control Room.',
        ],
        blocks: [{ p: 'Each skull you hit reappears on a chair by the Control Room fireplace. After all three, new zombies spawn as skeletons. Interact with the skulls on the chair to turn it off.' }],
      },
      {
        id: 'free-gum', tab: 'side', type: 'Free item', name: 'Free Mega GobbleGum (plant pot)',
        summary: 'In the Undercroft teleporter room, pick up the plant pot. Take it with you on a trip to the past (main easter egg step 3), and put it back where it belongs in the past. Back in the present the plant has grown — interact with it for a free GobbleGum.',
      },
    ],
  });
})();
