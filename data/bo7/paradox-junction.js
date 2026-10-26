/* Paradox Junction — Black Ops 7, Season Two Reloaded (Nuketown) */
(() => {
  const I = 'assets/img/bo7/paradox-junction/';
  const E = 'd55f7C4fXqA'; // MrRoflWaffles easter egg guide
  const P = '9phvTKt8OaA'; // TheGamingRevolution Pack-a-Punch guide
  const B = 'Vtg863fWQ9I'; // MrDalekJD Blundergat / Sundergat guide
  const EV = { id: E, title: 'Paradox Junction easter egg guide', ch: 'MrRoflWaffles', len: '36:22' };
  const PV = { id: P, title: 'Paradox Junction Pack-a-Punch', ch: 'TheGamingRevolution', len: '1:48' };
  const BV = { id: B, title: 'Blundergat and Sundergat guide', ch: 'MrDalekJD', len: '4:39' };
  const fill = 'Kill zombies with the Sundergat to fill it with souls, then escort it (it moves as you feed it) to its spot.';

  ZG.addMap({
    game: 'bo7', id: 'paradox-junction', order: 3,
    name: 'Paradox Junction', dlc: 'Season Two Reloaded', eeName: 'Paradox Junction quest',
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
        id: 'blundergat', tab: 'weapons', type: 'Wonder weapon', name: 'Blundergat → Sundergat', short: 'Blundergat', color: 'fire',
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
          { w: 234, t: 'Upgrade it: melee the bench in the past, put the Blundergat in, collect the Sundergat in the destroyed town' },
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
          { w: 1435, t: 'Jacks: press the eight blue notes in order, then play the piano', d: 'In the destroyed town, eight notes glow blue around the map; each blinks 1 to 8 times. Press them in that order. In the past the notes show above the piano: play the keys 8-6-7-5-6-5-3-5.', tip: 'Notes won\'t respond until the tree step is done.' },
          { w: 1651, t: 'Jacks: kill three floating zombies and win the bouncing ball game', d: 'In the destroyed town, kill the three zombies floating outside the map behind one of the houses. A new X appears on Trinity Ave; in the past the Twins draw a circle. The ball bounces zombies into the air: kill them all before it lands again.' },
          { w: 1731, t: 'Jacks: fill the golden sheet music', d: fill + ' It goes to the piano.' },
          { w: 1840, t: 'Freeze the clock to bring the Twins back', d: 'In the destroyed town, shoot the broken clock until both hands point at 12. Start a teleport and, during the animation, shoot the red hand once more. In the past a white orb visits the piano, the toy box and the fireplace: follow it to each.' },
          { w: 1921, t: 'Get ready and interact with the Twins at the swing', d: 'A vote starts the fight. Pack-a-Punch 3, Legendary rarity, Kazimirs.' },
          { w: 1953, t: 'Beat the Dark Heart', d: 'Each phase: clear the black goo from the piano, music box and fireplace (fill cysts with kills; then shoot the green orb and kill what comes out; then kill a Tortured zombie by each), defend the field that moves between them, then damage the Heart and its glowing orange spots. Dodge its meteors and fire tornadoes. Rad-Hounds join in phase 2 and Shock Mimics in phase 3.' },
        ],
      },

      /* ------------------------------ SIDE ------------------------------ */
      {
        id: 'song', tab: 'side', type: 'Song', name: '"Come Back Down"',
        summary: 'Interact with three Mister Peeks headphones: on a round table in the yellow house upstairs bedroom (the past), in the fence gap left of the perk spot on Trinity Ave (the past), and in the back of the wrecked truck by the exfil (destroyed town).',
      },
    ],
  });
})();
