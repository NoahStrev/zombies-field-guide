/* Coverage numbers: how much of the guide has pictures, clips and layouts.
   Open the local site (or the live one), paste this into the console. It returns a JSON
   summary and keeps the gap lists in window.zgGaps for a closer look.
   Maps that copy another (BO1 Ascension, Shangri-La and Moon, BO2 Origins) are counted once,
   and the BO7 Super Easter Egg page is not counted as a map. */
(() => {
  const COPIES = new Set(['bo1/ascension', 'bo1/shangri-la', 'bo1/moon', 'bo2/origins']);
  const arr = x => (x == null ? [] : Array.isArray(x) ? x : [x]);
  const hasImg = s => !!(s && typeof s === 'object' && arr(s.imgs).length);
  const text = s => (typeof s === 'string' ? s : (s && s.text) || '');
  const gaps = { noLayout: [], cardsNoImg: [], sideNoVideo: [], untimedSteps: [], partSpotsNoImg: [], sideSpotsNoImg: [] };
  const n = { maps: 0, layouts: 0, cards: 0, cardsImg: 0, side: 0, sideVideo: 0, steps: 0, stepsTimed: 0 };
  const partSpots = new Map(), sideSpots = new Map(), videos = new Set();

  for (const key of ZG.mapOrder) {
    if (COPIES.has(key)) continue;
    const m = ZG.maps[key];
    if (!m.quest) {
      n.maps++;
      if (arr(m.layout).length) n.layouts++; else gaps.noLayout.push(key);
    }
    for (const it of m.items) {
      const where = `${key} | ${it.name}`;
      if (it.tab === 'weapons' || it.tab === 'parts') {
        n.cards++;
        if (it.img) n.cardsImg++; else gaps.cardsNoImg.push(where);
      }
      const vids = [...arr(it.video), ...arr(it.videos), ...arr(it.upgrade && it.upgrade.video)].map(v => v.id);
      for (const s of [...arr(it.steps), ...arr(it.upgrade && it.upgrade.steps)]) {
        n.steps++;
        if (s.w != null) n.stepsTimed++;
        else if (!s.needs) gaps.untimedSteps.push(`${where} | ${s.t}`);
        if (Array.isArray(s.w)) vids.push(s.w[0]);
        for (const sp of arr(s.spots)) sideSpots.set(`${where} | ${text(sp)}`, hasImg(sp));
      }
      vids.forEach(v => videos.add(v));
      if (it.tab === 'side') {
        n.side++;
        if (vids.length) n.sideVideo++; else gaps.sideNoVideo.push(where);
      }
      for (const p of arr(it.parts)) for (const sp of arr(p.spots)) partSpots.set(`${where} | ${p.name} | ${text(sp)}`, hasImg(sp));
      for (const sp of arr(it.spots)) sideSpots.set(`${where} | ${text(sp)}`, hasImg(sp));
      for (const b of arr(it.blocks)) for (const sp of arr(b.spots)) sideSpots.set(`${where} | ${text(sp)}`, hasImg(sp));
    }
  }
  for (const [k, ok] of partSpots) if (!ok) gaps.partSpotsNoImg.push(k);
  for (const [k, ok] of sideSpots) if (!ok) gaps.sideSpotsNoImg.push(k);
  window.zgGaps = gaps;

  const of = (a, b) => `${a} of ${b}`;
  return JSON.stringify({
    'maps with a Map button': of(n.layouts, n.maps),
    'weapon and part cards with a picture': of(n.cardsImg, n.cards),
    'side quests with a video': of(n.sideVideo, n.side),
    'quest steps with a Watch clip': of(n.stepsTimed, n.steps) + ` (${gaps.untimedSteps.length} untimed steps are not just "needs" links)`,
    'part spots with a picture': of(partSpots.size - gaps.partSpotsNoImg.length, partSpots.size),
    'side-quest spots with a picture': of(sideSpots.size - gaps.sideSpotsNoImg.length, sideSpots.size),
    'guide videos used': videos.size,
  }, null, 1);
})();
