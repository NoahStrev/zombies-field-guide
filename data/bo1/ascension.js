/* Ascension — Black Ops DLC 1 (First Strike).
   Same quest as the Black Ops III Zombies Chronicles remaster, so this copies that guide
   (data/bo3/ascension.js must load first) and swaps what the original does differently. */
(() => {
  const map = ZG.copyMap('bo3/ascension', { game: 'bo1', id: 'ascension', order: 1, dlc: 'First Strike · DLC 1' }, [
    ["Widow's Wine", 'PhD Flopper'],
    [' (PhD in BO1)', ''],
    ['RK5', 'MP5K'],
    ['Trip Mine wall-buy', 'Claymore wall-buy'],
    [' (or Mk IIs)', ''],
    [' and every perk.', '.'],
  ]);
  if (!map) return;

  map.quick = [
    ['Main EE', 'Casimir Mechanism'],
    ['Players', '4 required'],
    ['Wonder weapons', 'Thundergun, Gersh Device, Matryoshka Dolls'],
    ['EE reward', '90-second Death Machine'],
  ];
  map.intro = Object.assign({}, map.intro, {
    start: 'The original Black Ops version. The quest is the same as the Black Ops III remaster (the videos are from that version), but here you have PhD Flopper instead of Widow\'s Wine, Claymores instead of Trip Mines, no Ray Gun Mark II, and the reward is only the Death Machine. ' + map.intro.start,
  });

  // No Ray Gun Mark II in the original.
  const ray = map.items.find(it => it.id === 'ray-gun');
  Object.assign(ray, { name: 'Ray Gun', summary: 'From the Mystery Box. The final easter egg step needs it Pack-a-Punched (Porter\'s X2 Ray Gun).' });

  const ee = map.items.find(it => it.id === 'main-ee');
  ee.facts = [
    ['Players', 'Exactly 4'],
    ['Reward', '90-second Death Machine for everyone'],
    ['Prep', 'Several box wonder weapons'],
  ];
  ee.prep[0].d = 'Node 2 needs four players pressing four buttons at once.';
  ee.prep.find(p => /Ray Gun/.test(p.t)).t = 'A Pack-a-Punched Ray Gun (Porter\'s X2)';
  delete ee.steps.find(s => s.t.startsWith('Node 3')).tip; // remaster-only crawler and GobbleGum tip
  ee.steps.find(s => s.t.startsWith('Node 5')).tip = 'In Black Ops one of each is enough: one Gersh Device, one Matryoshka throw, one Zeus Cannon shot and one Porter\'s X2 shot.';

  // "Not Ready to Die" is only on the remaster.
  map.items = map.items.filter(it => it.id !== 'song-not-ready');
  ZG.addMap(map);
})();
