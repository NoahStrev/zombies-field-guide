/* Paradox Junction — Black Ops 7, Season Two Reloaded (Nuketown) */
(() => {
  const I = 'assets/img/bo7/paradox-junction/';
  const SE = t => ({ id: '3sXikcuVUqA', title: 'Every side Easter egg in Paradox Junction', ch: 'MrDalekJD', len: '17:23', t }); // MrDalekJD side Easter eggs
  const E = 'd55f7C4fXqA'; // MrRoflWaffles easter egg guide
  const P = '9phvTKt8OaA'; // TheGamingRevolution Pack-a-Punch guide
  const B = 'Vtg863fWQ9I'; // MrDalekJD Blundergat / Sundergat guide
  const EV = { id: E, title: 'Paradox Junction easter egg guide', ch: 'MrRoflWaffles', len: '36:22' };
  const PV = { id: P, title: 'Paradox Junction Pack-a-Punch', ch: 'TheGamingRevolution', len: '1:48' };
  const BV = { id: B, title: 'Blundergat and Sundergat guide', ch: 'MrDalekJD', len: '4:39' };
  const fill = 'Kill zombies with the Sundergat to fill it with souls, then escort it (it moves as you feed it) to its spot.';

  ZG.addMap({
    game: 'bo7', id: 'paradox-junction', order: 3,
    name: 'Paradox Junction', dlc: 'Season Two Reloaded', eeName: 'Main quest: kill the Dark Heart',
    hero: I + 'hero.webp', players: 'solo',
    tags: ['Blundergat / Sundergat', 'Two Nuketowns', 'Dark Heart boss'],
    blurb: 'Nuketown in two times at once: the town before the bomb and the destroyed town after, with teleporters between them. Build and upgrade the Blundergat, play three children\'s games with the ghostly Twins and destroy the Dark Heart.',
    quick: [
      ['Main EE', 'Main quest (solo or co-op)'],
      ['Wonder weapon', 'Blundergat → Sundergat (both required)'],
      ['Key items', 'Swing seat, chalk, seeds, goggles, headset'],
      ['Boss', 'The Dark Heart (three phases)'],
    ],
    intro: {
      start: 'You start in the destroyed Nuketown. Rounds and manual teleporters move you between the destroyed town and the normal one before the bomb ("the past"). Black Ops 7 rules are explained in the basics on Ashes of the Damned.',
      weapons: 'The quest needs the Sundergat (the upgraded Blundergat). Its parts are split across both towns.',
      'easter-egg': 'After the swing, the three children\'s games (hopscotch, Jacks with the bouncing ball, four square) can be worked on in any order. Tap a chip to open that guide without losing your place.',
    },
    items: [
      /* ------------------------------ START ------------------------------ */
      {
        id: 'power-pap', tab: 'start', type: 'Getting started', name: 'Pack-a-Punch', short: 'Pack-a-Punch',
        summary: 'Grab the truck key behind the yellow house, get to the normal Nuketown, move the truck blocking Trinity Avenue and shoot down the orbs holding up Pack-a-Punch.',
        video: PV,
        steps: [
          { w: 0, t: 'Take the truck key from the yellow house backyard', d: 'Open the barrier into the backyard and go right to the back.' },
          { w: 16, t: 'Get to the normal Nuketown', d: 'After the first dog round you\'re sent there (or use a teleporter once it charges).' },
          { w: 32, t: 'Move the truck', d: 'Open the barricade into the main street and hold interact on the truck for a few seconds (clear zombies first). Trinity Avenue opens up.' },
          { w: 63, t: 'Shoot the yellow orbs and kill the purple-eyed zombies until Pack-a-Punch drops', d: 'Repeat a few times.' },
        ],
      },

      /* ------------------------------ WEAPONS ------------------------------ */
      {
        id: 'blundergat', tab: 'weapons', type: 'Wonder weapon', name: 'Blundergat → Sundergat', short: 'Blundergat', img: I + 'blundergat.webp', color: 'fire',
        summary: 'A wonder shotgun. Build it from four parts across both towns, then feed three Tortured zombies to its bench to upgrade it into the Sundergat, which the quest needs.',
        facts: [['Build at', 'The bench in the destroyed truck trailer (melee it to open)'], ['Upgrade', 'Sundergat']],
        video: BV,
        steps: [
          { w: 15, any: 'Parts in any order', t: 'Barrel: fill the humming loot cyst (destroyed town)', d: 'Several yellow cysts; the right one hums. Kill zombies next to it until it bursts.' },
          { w: 47, any: 'Parts in any order', t: 'Hammer: dissolve the humming mannequin with acid', d: 'Take the SO3 vial from the chemistry set upstairs in the destroyed yellow house, fill it at the destroyed green house kitchen sink (three uses). Find the humming mannequin in the destroyed town, then pour acid on the same mannequin in the past. Back in the destroyed town it has dropped the hammer.' },
          { w: 92, any: 'Parts in any order', t: 'Stock: blow open the humming goo wall', d: 'Find the humming black goo in the destroyed town (top of the green house stairs, the yellow house garage, or the end of the Trinity Ave alley). Throw an explosive at the same wall in the past. Back in the destroyed town, take the stock from the hole.' },
          { w: 138, any: 'Parts in any order', t: 'Sealant: upstairs in the yellow house (the past)', d: 'Crouch at the bookcase by the window; bottom shelf, left.' },
          { w: 154, t: 'Melee the bench in the destroyed truck trailer and build it' },
          { w: 169, t: 'Kill three Tortured zombies at the bench with the Blundergat', d: 'After a few rounds in the destroyed town, a Tortured zombie spins in a fire tornado (green house yard, yellow house yard, or by the Trinity Ave alley). Walk up to free it and lead it to the bench; other zombies nearby drain it, so do it at the end of a round. The third one is a Tortured Mimic.' },
          { w: 234, t: 'Upgrade it: melee the bench in the past, put the Blundergat in, collect the Sundergat in the destroyed town', imgs: [{ src: I + 'sundergat.webp', cap: 'The Sundergat' }] },
        ],
      },

      /* ------------------------------ EASTER EGG ------------------------------ */
      {
        id: 'ee', tab: 'easter-egg', type: 'Main Easter Egg', name: 'Paradox Junction main quest', short: 'Main quest',
        summary: 'Fix the Twins\' swing, then win their three children\'s games (hopscotch, Jacks, four square), filling each golden prize with Sundergat souls. Freeze the clock to bring the Twins back and fight the Dark Heart.',
        facts: [
          ['Players', 'Solo or co-op'],
          ['Reward', 'Calling card, camos in Cursed mode'],
          ['Boss', 'The Dark Heart'],
        ],
        prep: [
          { t: 'Pack-a-Punch on', needs: ['power-pap'] },
          { t: 'The Sundergat', needs: ['blundergat'] },
          { t: 'Wisp Tea and Death Perception', d: 'For the goggles and headset.' },
          { t: 'Brain Rot (or a Psych grenade) and Combat Axes' },
        ],
        stepsTitle: 'Quest steps',
        video: EV,
        steps: [
          { w: 208, t: 'Melee the swing behind the yellow house (the past) for the swing seat' },
          { w: 362, t: 'Drive the RC car into the garage (destroyed town, round 8+)', d: 'The controller is by the boxes right of Pack-a-Punch, against the green house garden fence, or on the back shelf of the yellow house garage. Drive over the ramp into the backyard, across, up the second ramp, over the debris and through the hole, then blow up at the garage door.' },
          { w: 472, t: 'Take the chalk from the garage and fix the swing', d: 'Put the seat and chalk on the swing chains: the Twins appear.' },
          { w: 658, t: 'Hopscotch: plant the irradiated seeds and grow the tree', d: 'Open the red toolbox in the destroyed yellow house garage for the seeds. Plant them in the dirt mound left of Pack-a-Punch in the past and fill the tree with Blundergat kills.' },
          { w: 926, t: 'Hopscotch: chop three firewood and light the fireplace', d: 'In the destroyed town, throw a combat axe at the big tree three times. In the past, put the firewood in the yellow house fireplace and throw a Molotov in.' },
          { w: 1150, t: 'Hopscotch: step on the X, then win the game', d: 'In the destroyed town, stand on the big X on Trinity Ave (facing Der Wunderfizz) until it stays blue. In the past the Twins draw hopscotch there: hop 1 to 12 and back, avoiding the black smoke.', tip: 'Solo, zombies ignore you while you play. Fail and it resets after 30 seconds.' },
          { w: 1266, t: 'Hopscotch: fill the golden music box', d: fill + ' It goes to the fireplace.' },
          { w: 1282, t: 'Four square: goggles and headset in the toy box', d: 'In the destroyed town, shoot the very top of the speaker pole left of Pack-a-Punch to drop goggles; stand near them with your Wisp Tea wisp out to pull them in. With Death Perception, find the headset outline (by the trash cans near the GobbleGum machine, on the coat rack upstairs in the green house, or in a headless mannequin\'s hand by the yellow house perk). Put both in the blue toy box in the past.' },
          { w: 1313, t: 'Four square: roll the red ball onto the X', d: 'In the destroyed town, shoot the red ball down (on the munitions crates, the roof of the M8A1 house, or above the yellow house back porch) and shoot it along until it rolls onto the X behind the green house.' },
          { w: 1373, t: 'Four square: win the game and fill the cymbals', d: 'In the past, behind the green house, start the game and keep the ball bouncing from square to square with your melee (never twice in one square) until time runs out. ' + fill + ' They go to the toy box.' },
          { w: 505, t: 'Jacks: turn the Piano Teacher', d: 'In the destroyed town, wait behind the green house for the slow Piano Teacher zombie. Turn her with Brain Rot or a Psych grenade; she runs to the piano. Teleport to the past right away: she plays and explodes.' },
          { w: 1435, t: 'Jacks: press the eight blue notes in order, then play the piano', d: 'In the destroyed town, eight notes glow blue around the map; each blinks 1 to 8 times. Press them in that order. In the past the notes show above the piano: play the keys 8-6-7-5-6-5-3-5.', tip: 'Notes won\'t respond until the tree step is done. Press one out of order and they come back next round in the same order.' },
          { w: 1651, t: 'Jacks: kill three floating zombies and win the bouncing ball game', d: 'In the destroyed town, kill the three zombies floating outside the map behind the green or yellow house. A new X appears on Trinity Ave; in the past the Twins draw a circle. The ball bounces zombies into the air: kill them all before it lands again.' },
          { w: 1731, t: 'Jacks: fill the golden sheet music', d: fill + ' It goes to the piano.' },
          { w: 1840, t: 'Freeze the clock to bring the Twins back', d: 'In the destroyed town, shoot the broken clock until both hands point at 12. Start a teleport and, during the animation, shoot the red hand once more. In the past a white orb visits the piano, the toy box and the fireplace: follow it to each.' },
          { w: 1921, t: 'Get ready and interact with the Twins at the swing', d: 'A vote starts the fight. Pack-a-Punch 3, Legendary rarity, Kazimirs.' },
          { w: 1953, t: 'Beat the Dark Heart', d: 'Each phase: clear the black goo from the piano, music box and fireplace (fill cysts with kills; then shoot the green orb and kill what comes out; then kill a Tortured zombie by each), defend the field that moves between them, then damage the Heart and its glowing orange spots. Dodge its meteors and fire tornadoes. Rad-Hounds join in phase 2 and Shock Mimics in phase 3.', tip: 'A Molotov in a fire tornado\'s path turns it away. A Max Ammo and Max Armor drop in front of the green house after phases 1 and 2.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'super-toy', tab: 'side', type: 'Super Easter Egg · toy', name: 'Super Easter Egg: Twins toy', short: 'Super EE toy', color: 'aether',
        summary: 'Bring the Twins\' chalk toybox to life in old Nuketown, then rebuild a Peeks doll in the nuked one and win its hide-and-seek. The doll buys the Twins toy. Part of the [[bo7/super-easter-egg/easter-egg|Super Easter Egg]].',
        video: { id: '3KGZlHLMQi0', title: 'Super Easter Egg guide: every map', ch: 'MrDalekJD', len: '42:44' },
        steps: [
          { w: 1238, t: 'Open up and make your first trip back to old Nuketown', d: 'Bring Psych Grenades as your tactical. Get the truck keys and play to the first dog round to go back in time; turn on Pack-a-Punch as prompted.' },
          { w: 1253, t: 'Interact with the chalk toybox on the garage door', d: 'In the cul-de-sac past the Nuketown sign, near the Temporal Conduit. It redraws itself with a padlock.' },
          { w: 1268, t: 'Turn the chalk question mark into a key', d: 'Upstairs in the yellow house, left of the big window. Throw a Psych Grenade at it, then pick up the chalk key it becomes.' },
          { w: 1284, t: 'Unlock the chalk box', d: 'It becomes a real toybox and the Twins ask for their favourite toy.' },
          { w: 1317, t: 'Find the three missing Peeks doll parts in nuked Nuketown', d: 'Three parts already lie on the school bus roof; the other three spawn among these spots. Some you pick up, others you shoot or blow up. Found parts jump to the bus.', list: [
            'Upstairs in the yellow house, in the cabinet behind the chair by the bed',
            'On the bunker roof in the green house\'s backyard',
            'On the roof of the first house on the right of Trinity Avenue',
            'On the roof at the end of Trinity Avenue (climb the boxes and look right)',
            'In the truck bed opposite Pack-a-Punch',
            'On the far-right meat hook in the locked garage: blow its door open with the RC-XD',
          ] },
          { w: 1393, t: 'If needed: open the garage with the RC-XD', d: 'Find the controller behind the barracks at the end of Trinity Avenue, on the bottom shelf of the yellow house garage, or in the mud by the fence behind the perk spot in the green house backyard. Drive the RC-XD to the garage door and blow it up.' },
          { w: 1440, t: 'Win the Peeks hide-and-seek', d: 'Interact with the glowing parts on the bus. Big glowing Peeks dolls appear one at a time around the cul-de-sac and Trinity Avenue: run through each before the timer runs out (each one adds a little time). Co-op gets less time than solo. Fail and you can try again next round.' },
          { w: 1472, t: 'Put the doll in the toybox, take the Twins toy and exfil', d: 'Pick the finished doll up off the bus, trade it at the toybox, then exfil on an exfil round with the toy.', warn: 'Solo: finish in one sitting. Loading a save resets the toy quest.' },
        ],
      },
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Come Back Down"',
        summary: 'Interact with three Mister Peeks headphones: on a round table in the yellow house upstairs bedroom (the past), in the fence gap left of the perk spot on Trinity Ave (the past), and in the back of the wrecked truck by the exfil (destroyed town).',
        video: SE(857),
      },
      {
        id: 'clock-loot', tab: 'side', type: 'Free perk', name: 'Nuketown clock loot',
        summary: 'In the destroyed town, stand on the red truck and shoot the clock on the green house until it reads 1:15. After the next Rad-Hound round you\'re sent to the past, and loot falls by the green house: a Raw Aetherium Crystal, a Rare Aether Tool, a scorestreak, a perk and a Legendary gun.',
        video: SE(16),
      },
      {
        id: 'mini-golf', tab: 'side', type: 'Free power-ups', name: 'Mini-golf hole in one',
        summary: 'In the past, find the golf ball nearest the white-flag hole on the mini-golf course in the yellow house backyard. Shoot it into that hole for an Insta-Kill, Bonus Points and a Max Armor.',
        video: SE(63),
      },
      {
        id: 'mannequin-perk', tab: 'side', type: 'Free perk', name: 'Melted mannequins (free perk)',
        summary: 'Once you have the acid vial from the Blundergat\'s hammer step, pour acid on every mannequin in the past (refill at the green house sink; it takes a few trips). After the last one, its spot in the destroyed town has a Random Perk.',
        video: SE(93),
        needs: ['blundergat'],
      },
      {
        id: 'bunker-gift', tab: 'side', type: 'Free perk', name: 'Bunker door gift',
        summary: 'Needs the Blundergat built. A mannequin story across both towns that ends with a gift box: a Rare gun, 2,000 Essence and a Mystery Perk.',
        video: SE(190),
        needs: ['blundergat'],
        steps: [
          { w: 214, t: 'Look at the white cooker in the destroyed yellow house kitchen, then go to the past and back' },
          { w: 229, t: 'A mannequin now stands at the cooker: go to the past for the frying pan on the stove' },
          { w: 244, t: 'Kill zombies by the pan until one\'s soul makes a steak, then throw a Molotov on it' },
          { w: 260, t: 'Go back and forth: the mannequin eats it, then leaves a Bonus Points over the booth' },
          { w: 285, t: 'In the past, have Brain Rot zombies knock on the green house bunker nine times', d: 'The mannequin stands at the bunker door. Turn three zombies (Psych Grenade or Brain Rot) three separate times; each knocks three times. A sound confirms it.' },
          { w: 310, t: 'Open the gift box by the bunker in the destroyed town' },
        ],
      },
      {
        id: 'weeping-mannequin', tab: 'side', type: 'Free perk', name: 'Mannequin that moves when you look away',
        summary: 'Needs the Blundergat built. In the destroyed town, look at the backwards-headed mannequin just over the fence on the right of Trinity Ave until it snaps into a new pose. It follows you when your back is turned (and can shock you). Go to the past and shoot it in its hiding spot for a Raw Aetherium Crystal, a Rare Aether Tool, a scorestreak, a perk and a Legendary gun.',
        video: SE(327),
        needs: ['blundergat'],
        spots: [
          'In the chimney of the green house next to the yellow house.',
          { text: 'Left of Pack-a-Punch, behind the wooden fence.', imgs: [{ src: I + 'spot-weeping-mannequin-2.webp', cap: 'Still from MrDalekJD\'s guide video' }] },
          { text: 'In the driver\'s seat of the red truck in the cul-de-sac.', imgs: [{ src: I + 'spot-weeping-mannequin-3.webp', cap: 'Still from MrDalekJD\'s guide video' }] },
          { text: 'In the chimney of the blue house right of Pack-a-Punch.', imgs: [{ src: I + 'spot-weeping-mannequin-4.webp', cap: 'Still from MrDalekJD\'s guide video' }] },
          { text: 'In the shed in the green house backyard, behind a Mystery Box spot.', imgs: [{ src: I + 'spot-weeping-mannequin-5.webp', cap: 'Still from MrDalekJD\'s guide video' }] },
        ],
      },
      {
        id: 'masked-head', tab: 'side', type: 'Free perk', name: 'Masked mannequin head',
        summary: 'After the swing seat and chalk steps, interact with the masked mannequin head upstairs in the past green house. It floats to a headless mannequin by a Mystery Box spot: kill the purple-eyed zombies to fill it. It moves on twice more (the yellow house garage, then upstairs in the yellow house); fill it each time. It spins away and drops a Refined Aetherium Crystal, two Epic Aether Tools, Salvage and a Mystery Perk.',
        video: SE(436),
      },
      {
        id: 'purple-cyst', tab: 'side', type: 'Free perk', name: 'Purple cyst offering',
        summary: 'Needs the Blundergat and the RC-XD step. Feed the purple cyst behind the shack in the destroyed green house backyard seven items, fill it with about 25 kills, then kill the four elites that come out (Rad-Hound, Shock Mimic, Doppelghast, armoured zombie). The last one drops 2,000 Salvage, a Flawless Aetherium Crystal and a perk.',
        video: SE(670),
        spots: [
          { text: 'Destroyed town: a cracked skull on a table in the RC-XD garage.', imgs: [{ src: I + 'spot-purple-cyst-1.webp', cap: 'Destroyed town, still from MrDalekJD\'s guide video' }] },
          { text: 'Destroyed town: guts under the army truck nearest Pack-a-Punch, under a gas tank.', imgs: [{ src: I + 'spot-purple-cyst-2.webp', cap: 'Destroyed town, still from MrDalekJD\'s guide video' }] },
          { text: 'Destroyed town: a bone on the dirt mound in the green house backyard nearest an RC-XD remote spot.', imgs: [{ src: I + 'spot-purple-cyst-3.webp', cap: 'Destroyed town, still from MrDalekJD\'s guide video' }] },
          'Past: a car battery on the floor of the truck where the Blundergat is built.',
          { text: 'Past: a bucket in the yellow house garage by the backyard door.', imgs: [{ src: I + 'spot-purple-cyst-5.webp', cap: 'Past, still from MrDalekJD\'s guide video' }] },
          { text: 'Past: a dog collar on the garden floor by the garage door that later explodes, on Trinity Ave.', imgs: [{ src: I + 'spot-purple-cyst-6.webp', cap: 'Past, still from MrDalekJD\'s guide video' }] },
          { text: 'Past: a chunk of meat on the green house kitchen counter.', imgs: [{ src: I + 'spot-purple-cyst-7.webp', cap: 'Past, still from MrDalekJD\'s guide video' }] },
        ],
      },
      {
        id: 'briefcase', tab: 'side', type: 'Free reward', name: 'Lost key briefcase',
        summary: 'With Death Perception, check the 14 flower pots in past Nuketown for the one with a key inside and shoot it. The key jumps to another pot: find it and shoot again, quickly. After five jumps it drops out of the last pot. Take the Lost Key to the briefcase in the green house\'s upstairs bedroom for some Salvage and Essence. If you lose track, teleport to the destroyed town and back to start over.',
        spots: [
          'Three under the stairs in the green house backyard.',
          'One behind the shed in the green house backyard.',
          'One on a table upstairs in the green house.',
          'Three hanging on the house behind the yellow car.',
          'One above the yellow house\'s front door.',
          'One behind the white fence right of the GobbleGum machine.',
          'One by the red house door, past the parked truck.',
          'Three under the stairs in the yellow house backyard.',
        ],
        video: SE(576),
      },
      {
        id: 'powerups', tab: 'side', type: 'Free power-ups', name: 'Hidden power-ups',
        summary: 'Small hidden power-ups you can pick up once each. The Fire Sale and the Random Perk only appear once you have the other seven.',
        video: SE(933),
        spots: [
          { text: 'Bonus Points: in the house rubble left of Pack-a-Punch on destroyed Trinity Ave.', imgs: [{ src: I + 'spot-powerups-1.webp', cap: 'Bonus Points, still from MrDalekJD\'s guide video' }] },
          'Max Ammo: on a generator by the yellow house in the past.',
          'Double Points: behind fences right of the houses at the back of the destroyed cul-de-sac.',
          { text: 'Full Power: by the drawers opposite the TV in the past green house.', imgs: [{ src: I + 'spot-powerups-4.webp', cap: 'Full Power, still from MrDalekJD\'s guide video' }] },
          'Insta-Kill: on the barbecue outside the past green house backyard.',
          'Max Armor: on a bench in the yellow bus in the destroyed cul-de-sac.',
          'Nuke: on top of the clock tower in the past, seen from the green house backyard.',
          { text: 'Fire Sale: in the top room of the destroyed yellow house, seen from the back of the cul-de-sac.', imgs: [{ src: I + 'spot-powerups-8.webp', cap: 'Fire Sale, still from MrDalekJD\'s guide video' }] },
          { text: 'Random Perk: on the cabinet behind the bunk bed upstairs in the past yellow house.', imgs: [{ src: I + 'spot-powerups-9.webp', cap: 'Random Perk, still from MrDalekJD\'s guide video' }] },
        ],
      },
    ],
  });
})();
