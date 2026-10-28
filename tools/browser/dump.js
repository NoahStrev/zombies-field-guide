/* Paste into the browser console on the local site (http://localhost:8080) while
   `python -X utf8 tools/zg.py receiver` is running. Saves every map's guide text
   (all tabs, every item, step, tip, table and spot) to tools/.cache/fulldump.json;
   then `python -X utf8 tools/zg.py dump` splits it into one text file per map
   in tools/.cache/dump/ for reading side by side with the wiki. */
(async () => {
  const SKIP = new Set(['w', 'video', 'videos', 'icon', 'color', 'src', 'hero', 'short', 'img', 'tab', 'id', 'type']);
  const strip = s => String(s).replace(/\{\{([^}]+)\}\}/g, '<$1>').replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2');
  const spotText = x => typeof x === 'string' ? x
    : [x.label, x.name, x.text, x.cap, ...((x.imgs || []).map(y => y && y.cap))].filter(Boolean).join(' — ');
  const lines = (o, pad, out) => {
    if (o == null) return;
    if (typeof o !== 'object') { out.push(pad + strip(o)); return; }
    if (Array.isArray(o)) {
      o.forEach((x, i) => {
        if (x && typeof x === 'object' && !Array.isArray(x)) { out.push(pad + (i + 1) + '.'); lines(x, pad + '   ', out); }
        else if (Array.isArray(x)) out.push(pad + '- ' + x.map(strip).join(' | '));
        else out.push(pad + '- ' + strip(x));
      });
      return;
    }
    for (const [k, v] of Object.entries(o)) {
      if (SKIP.has(k) || typeof v === 'function') continue;
      if (k === 'imgs') {
        const caps = (Array.isArray(v) ? v : [v]).map(x => x && typeof x === 'object' ? x.cap : '').filter(Boolean);
        if (caps.length) out.push(pad + 'imgs: ' + caps.map(strip).join(' / '));
      } else if (k === 'spots') {
        out.push(pad + 'spots:');
        (Array.isArray(v) ? v : [v]).forEach(x => out.push(pad + '   * ' + strip(spotText(x))));
      } else if (typeof v !== 'object') {
        out.push(pad + k + ': ' + strip(v));
      } else {
        out.push(pad + k + ':');
        lines(v, pad + '   ', out);
      }
    }
  };
  const res = {};
  for (const key of ZG.mapOrder) {
    const m = ZG.maps[key];
    const out = [`# ${m.name} (${key})`];
    for (const it of m.items) {
      out.push('', `## [${it.tab}] ${it.id} · ${it.name}${it.type ? ' · ' + it.type : ''}`);
      const copy = Object.assign({}, it);
      delete copy.name;
      lines(copy, '', out);
    }
    res[key] = out.join('\n');
  }
  const r = await fetch('http://127.0.0.1:8099/fulldump', { method: 'POST', body: JSON.stringify(res) });
  console.log('dump:', r.status, Object.keys(res).length, 'maps');
})();
