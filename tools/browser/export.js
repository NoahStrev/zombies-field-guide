/* Paste into the browser console on the local site (http://localhost:8080) while
   `python -X utf8 tools/zg.py receiver` is running. Saves tools/.cache/export.json,
   which `zg.py audit` and `zg.py verify` read. */
(async () => {
  const arr = x => (x == null ? [] : Array.isArray(x) ? x : [x]);
  const src = i => i.src || i;
  const spotImgs = spots => arr(spots).flatMap(s => (s && s.imgs ? arr(s.imgs).map(src) : []));
  const out = { games: ZG.games, maps: [] };
  for (const key of ZG.mapOrder) {
    const m = ZG.maps[key];
    const mm = { key, game: m.game, id: m.id, name: m.name, hero: m.hero, items: [] };
    for (const it of m.items) {
      const vid = it.video ? it.video.id : (arr(it.videos)[0] || {}).id;
      const rec = { id: it.id, tab: it.tab, name: it.name, img: it.img || null, video: it.video || null, videos: it.videos || null, lists: [], parts: [], blocksImgs: [] };
      const lists = [];
      if (it.prep) lists.push(['prep', it.prep, vid]);
      if (it.steps) lists.push(['steps', it.steps, vid]);
      if (it.upgrade && it.upgrade.steps) lists.push(['upgrade', it.upgrade.steps, (it.upgrade.video && it.upgrade.video.id) || vid]);
      for (const [list, steps, defVideo] of lists) {
        rec.lists.push({ list, defVideo, steps: steps.map(s => ({ t: s.t, w: s.w ?? null, d: s.d || '', list: s.list || null, imgs: [...arr(s.imgs).map(src), ...spotImgs(s.spots)], tip: s.tip || '', warn: s.warn || '' })) });
      }
      if (it.upgrade) rec.upgrade = { name: it.upgrade.name, img: it.upgrade.img || null, video: it.upgrade.video || null };
      for (const p of arr(it.parts)) rec.parts.push({ name: p.name, w: p.w ?? null, icon: p.icon || null, area: p.area || '', spots: p.spots });
      for (const b of arr(it.blocks)) rec.blocksImgs.push(...arr(b.imgs).map(src), ...spotImgs(b.spots));
      for (const p of arr(it.parts)) rec.blocksImgs.push(...spotImgs(p.spots));
      rec.blocksImgs.push(...spotImgs(it.spots));
      mm.items.push(rec);
    }
    out.maps.push(mm);
  }
  const r = await fetch('http://127.0.0.1:8099/export', { method: 'POST', body: JSON.stringify(out) });
  console.log('export:', r.status, out.maps.length, 'maps');
})();
