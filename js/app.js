(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- storage (works even when localStorage is blocked) ---------- */
  const mem = {};
  const store = {
    get(k) { try { const v = localStorage.getItem(k); return v === null ? mem[k] : v; } catch (e) { return mem[k]; } },
    set(k, v) { mem[k] = v; try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
    del(k) { delete mem[k]; try { localStorage.removeItem(k); } catch (e) { /* private mode */ } },
    keys() {
      const out = new Set(Object.keys(mem));
      try { for (let i = 0; i < localStorage.length; i++) out.add(localStorage.key(i)); } catch (e) { /* blocked */ }
      return Array.from(out);
    },
  };
  const isDone = k => store.get(k) === '1';
  // Finished steps can be shrunk to just their title (one setting for the whole site).
  const collapseDone = () => store.get('zg-collapse') === '1';
  const applyCollapse = () => document.documentElement.classList.toggle('collapse-done', collapseDone());

  /* ---------- small helpers ---------- */
  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ESC[c]);
  const asArray = v => (v == null ? [] : Array.isArray(v) ? v : [v]);
  const fmtTime = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  const ytUrl = (id, t) => `https://www.youtube.com/watch?v=${encodeURIComponent(id)}${t ? `&t=${Math.floor(t)}s` : ''}`;

  const TABS = [
    { id: 'start', label: 'Start Here' },
    { id: 'parts', label: 'Parts & Buildables' },
    { id: 'weapons', label: 'Wonder Weapons' },
    { id: 'easter-egg', label: 'Main Easter Egg' },
    { id: 'side', label: 'Side Quests & Songs' },
  ];
  const tabLabel = id => (TABS.find(t => t.id === id) || {}).label || id;

  const ICON = {
    play: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    tip: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>',
    warn: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3zM12 10v4M12 17h.01"/></svg>',
    note: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>',
    arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    down: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    out: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    shuffle: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
  };

  /* ---------- index: item lookups, "needed for" backlinks, search ---------- */
  const searchIndex = [];

  function stepLists(item) {
    const lists = [];
    if (item.prep) lists.push(['prep', item.prep]);
    if (item.steps) lists.push(['steps', item.steps]);
    if (item.upgrade && item.upgrade.steps) lists.push(['upgrade', item.upgrade.steps]);
    return lists;
  }

  const stripRefs = s => String(s || '').replace(/\{\{[a-z0-9-]+\|([^}]+)\}\}/g, '$1').replace(/\{\{([a-z0-9-]+)\}\}/g, '$1').replace(/\*\*/g, '');
  const gameName = id => (ZG.games.find(g => g.id === id) || {}).name || id;

  // All the readable text inside a piece of guide data (for search), skipping ids, links and media.
  const SKIP_KEYS = new Set(['id', 'tab', 'img', 'icon', 'src', 'w', 'color', 'needs', 'video', 'videos', 'imgs',
    'steps', 'prep', 'upgrade', 'lookup', 'any', 'anyList', 'stepsOrder', 'prepOrder', 'order', 'short', 'cap']);
  function plainText(v, out = []) {
    if (typeof v === 'string') out.push(stripRefs(v));
    else if (Array.isArray(v)) v.forEach(x => plainText(x, out));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!SKIP_KEYS.has(k)) plainText(x, out);
    return out;
  }
  const stepText = st => plainText([st.d, st.list, st.ol, st.tip, st.warn, st.note, st.table, st.spots]).join(' ');

  function buildIndex() {
    const problems = [];
    for (const key of ZG.mapOrder) {
      const map = ZG.maps[key];
      map.itemById = {};
      map.backlinks = {};
      for (const it of map.items) {
        if (map.itemById[it.id]) problems.push(`${map.id}: duplicate item id "${it.id}"`);
        map.itemById[it.id] = it;
      }
    }
    for (const key of ZG.mapOrder) {
      const map = ZG.maps[key];
      const game = map.game;
      // Same map name in two games (Origins): say which game in search results.
      const shared = ZG.mapOrder.some(k => k !== key && ZG.maps[k].name === map.name);
      const mapLabel = shared ? `${map.name} (${(ZG.games.find(g => g.id === game) || {}).short || game})` : map.name;
      // Each entry: `head` (title-level words) and `body` (the details, searched second and shown as a snippet).
      const entry = (rank, title, sub, href, head, body) => searchIndex.push({
        rank, title, sub, href, mapKey: key, head: head.toLowerCase(), body: body.replace(/\s+/g, ' ').trim(),
        bodyLc: body.replace(/\s+/g, ' ').trim().toLowerCase(),
      });
      entry(0, map.name, `${gameName(game)} · map`, `#/${game}/${map.id}`, `${map.name} ${map.dlc || ''} ${map.eeName || ''} ${asArray(map.tags).join(' ')}`,
        plainText([map.blurb, map.quick]).join(' '));
      for (const it of map.items) {
        const itemHref = `#/${game}/${map.id}/${it.tab}/item-${it.id}`;
        const partNames = asArray(it.parts).map(p => p.name).join(' ');
        entry(1, it.name, `${mapLabel} · ${it.type || tabLabel(it.tab)}`, itemHref,
          `${it.name} ${it.aka || ''} ${it.type || ''} ${map.name} ${partNames}`,
          plainText([it.summary, it.facts, it.blocks, it.spots, it.parts]).join(' '));
        if (it.upgrade) {
          entry(1, it.upgrade.name, `${mapLabel} · upgrade of ${it.name}`, itemHref,
            `${it.upgrade.name} ${it.upgrade.aka || ''} ${it.name} ${map.name} upgrade`, plainText([it.upgrade.summary, it.upgrade.blocks]).join(' '));
        }
        for (const [listKey, steps] of stepLists(it)) {
          const keys = stepKeys(map, it, listKey);
          if (new Set(keys).size !== keys.length) problems.push(`${map.id}/${it.id} ${listKey}: two steps share a tick key`);
          const label = listKey === 'prep' ? 'Prep' : listKey === 'upgrade' ? 'Upgrade step' : 'Step';
          steps.forEach((st, i) => {
            for (const need of asArray(st.needs)) {
              if (!map.itemById[need]) { problems.push(`${map.id}/${it.id}: unknown need "${need}"`); continue; }
              (map.backlinks[need] = map.backlinks[need] || []).push({ item: it, list: listKey, index: i, step: st });
            }
            entry(it.tab === 'easter-egg' ? 2 : 3, `${label} ${i + 1}: ${stripRefs(st.t)}`, `${mapLabel} · ${it.name}`,
              `#/${game}/${map.id}/${it.tab}/${it.id}-${listKey}-${i + 1}`, `${stripRefs(st.t)} ${it.name} ${map.name}`, stepText(st));
          });
        }
      }
      // Clip lengths: each "watch" link plays until the next timestamp in the same video.
      const times = {};
      const addTime = (w, fallback) => {
        const r = resolveWatch(w, fallback);
        if (r) (times[r[0]] = times[r[0]] || []).push(r[1]);
      };
      for (const it of map.items) {
        for (const [listKey, steps] of stepLists(it)) steps.forEach(st => addTime(st.w, stepVideo(it, listKey)));
        for (const p of asArray(it.parts)) addTime(p.w, it.video || asArray(it.videos)[0]);
      }
      for (const vid of Object.keys(times)) times[vid] = [...new Set(times[vid])].sort((a, b) => a - b);
      map.clipEnd = (vid, t) => {
        const next = (times[vid] || []).find(x => x > t);
        let end = next != null ? next + 2 : t + 60;
        return Math.max(t + 10, Math.min(end, t + 120));
      };

      for (const m of JSON.stringify(map.items).matchAll(/\{\{([a-z0-9-]+)/g)) {
        if (!map.itemById[m[1]]) problems.push(`${map.id}: unknown inline ref "${m[1]}"`);
      }
    }
    if (problems.length) console.warn('[Zombies Field Guide] data problems:\n' + problems.join('\n'));
  }

  /* ---------- formatting ---------- */
  function colorVar(it) {
    return it && it.color ? `--c: var(--el-${it.color}, ${it.color});` : '';
  }

  function refBtn(map, id, labelHtml) {
    const it = map.itemById[id];
    if (!it) return labelHtml || esc(id);
    return `<button type="button" class="ref" data-ref="${esc(id)}" style="${colorVar(it)}">${labelHtml || esc(it.short || it.name)}</button>`;
  }

  // **bold**, {{item-id}} and {{item-id|label}} quick-look links
  function fmt(s, map) {
    if (s == null) return '';
    let h = esc(s);
    h = h.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    h = h.replace(/\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}/g, (m, id, label) => refBtn(map, id, label));
    return h;
  }

  const paras = (d, map) => asArray(d).map(p => `<p>${fmt(p, map)}</p>`).join('');

  function bullets(list, map, cls = 'bullets') {
    if (!list || !list.length) return '';
    const out = [];
    for (const li of list) {
      if (Array.isArray(li) && out.length) {
        out[out.length - 1] = out[out.length - 1].replace(/<\/li>$/, bullets(li, map) + '</li>');
      } else {
        out.push(`<li>${fmt(li, map)}</li>`);
      }
    }
    return `<ul class="${cls}">${out.join('')}</ul>`;
  }

  function callouts(o, map) {
    let h = '';
    for (const kind of ['tip', 'warn', 'note']) {
      for (const text of asArray(o[kind])) {
        h += `<div class="callout ${kind}">${ICON[kind]}<div>${fmt(text, map)}</div></div>`;
      }
    }
    return h;
  }

  /* ---------- picture packs (hosted artifact only) ----------
     An artifact version holds at most 511 files, so there a map's pictures (all but its hero banner)
     arrive as one pack script per image folder: window.ZG_IMG_PACKS maps a folder to its pack file,
     and each pack calls ZG.addImgs({path: base64}). On the normal site imgUrl() returns the path as is. */
  const PACKS = window.ZG_IMG_PACKS || null;
  const packed = {};     // image path -> base64 from a pack
  const packUrls = {};   // image path -> object URL (or data URL), made on first use
  const packState = {};  // pack file -> { done, promise }; done once the script loads or fails
  let blobOk = true, probed = false;
  ZG.addImgs = imgs => { Object.assign(packed, imgs); };

  function imgUrl(p) {
    if (!p || !packed[p]) return p;
    if (!packUrls[p]) {
      if (blobOk) {
        const bin = atob(packed[p]);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        packUrls[p] = URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
      } else packUrls[p] = 'data:image/webp;base64,' + packed[p];
    }
    return packUrls[p];
  }

  const packOf = p => (PACKS && p ? PACKS[p.slice(0, p.lastIndexOf('/') + 1)] : null);
  const packsFor = map => [...new Set([...mapImages(map)].map(packOf).filter(Boolean))];
  const packsReady = map => packsFor(map).every(f => packState[f] && packState[f].done);

  function loadPack(file) {
    if (!packState[file]) {
      const st = packState[file] = { done: false };
      st.promise = new Promise(res => {
        const s = document.createElement('script');
        s.src = file;
        s.onload = s.onerror = () => { st.done = true; res(); };
        document.head.appendChild(s);
      });
    }
    return packState[file].promise;
  }

  async function ensurePacks(map) {
    await Promise.all(packsFor(map).map(loadPack));
    if (probed) return;
    probed = true;  // once: fall back to data URLs if this page blocks object URLs
    const first = Object.keys(packed)[0];
    if (!first) return;
    blobOk = await new Promise(res => {
      const im = new Image();
      im.onload = () => res(true);
      im.onerror = () => res(false);
      im.src = imgUrl(first);
    });
    if (!blobOk) for (const k of Object.keys(packUrls)) delete packUrls[k];
  }

  function figures(imgs) {
    if (!imgs || !imgs.length) return '';
    return `<div class="figs">${imgs.map(im => {
      const o = typeof im === 'string' ? { src: im } : im;
      const src = imgUrl(o.src);
      return `<figure class="fig${o.wide ? ' wide' : ''}"><button type="button" class="zoom" data-full="${esc(src)}" data-cap="${esc(o.cap || '')}">` +
        `<img loading="lazy" decoding="async" src="${esc(src)}" alt="${esc(o.cap || '')}"></button>` +
        `${o.cap ? `<figcaption>${esc(o.cap)}</figcaption>` : ''}</figure>`;
    }).join('')}</div>`;
  }

  function needsHtml(map, needs) {
    const ids = asArray(needs);
    if (!ids.length) return '';
    return `<div class="needs"><span class="chip-label">Needs</span>${ids.map(id => refBtn(map, id)).join('')}</div>`;
  }

  function tableHtml(t, map) {
    return `<div class="table-wrap"><table><thead><tr>${t.head.map(h => `<th>${fmt(h, map)}</th>`).join('')}</tr></thead>` +
      `<tbody>${t.rows.map(r => `<tr>${r.map((c, i) => `<td data-label="${esc(t.head[i] || '')}">${fmt(c, map)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function factsHtml(facts, map) {
    if (!facts || !facts.length) return '';
    return `<dl class="facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${fmt(v, map)}</dd></div>`).join('')}</dl>`;
  }

  // Videos play inside the page where embeds are allowed (GitHub Pages, local server);
  // the hosted Claude page can't embed, so there they open on YouTube instead.
  const CAN_EMBED = !window.ZG_NO_EMBED && /^https?:$/.test(location.protocol);

  function resolveWatch(w, fallbackVideo) {
    if (w == null) return null;
    const r = Array.isArray(w) ? w : [fallbackVideo && fallbackVideo.id, w];
    return r[0] ? r : null;
  }

  function videoHtml(v) {
    if (!v) return '';
    return `<a class="video${CAN_EMBED ? ' has-thumb' : ''}" href="${ytUrl(v.id, v.t)}" target="_blank" rel="noopener" data-yt="${esc(v.id)}" data-t="${v.t || 0}">` +
      (CAN_EMBED
        ? `<span class="video-thumb"><img loading="lazy" decoding="async" src="https://i.ytimg.com/vi/${esc(v.id)}/mqdefault.jpg" alt=""><span class="video-icon">${ICON.play}</span></span>`
        : `<span class="video-icon">${ICON.play}</span>`) +
      `<span class="video-meta"><span class="video-kicker">Video guide · ${CAN_EMBED ? 'tap to play here' : 'YouTube'}</span><span class="video-title">${esc(v.title)}</span>` +
      `<span class="video-sub">${esc(v.ch || '')}${v.len ? ' · ' + esc(v.len) : ''}</span></span>` +
      `${CAN_EMBED ? '' : `<span class="video-go">${ICON.out}</span>`}</a>`;
  }

  // "Watch this step" — plays the moment in a guide video that shows it.
  function watchHtml(map, w, fallbackVideo, label) {
    const r = resolveWatch(w, fallbackVideo);
    if (!r) return '';
    const [id, t] = r;
    const end = map.clipEnd ? map.clipEnd(id, t) : t + 60;
    return `<a class="watch" href="${ytUrl(id, t)}" target="_blank" rel="noopener" data-yt="${esc(id)}" data-t="${t}" data-end="${end}">` +
      `${ICON.play}<span class="watch-label">${esc(label)}</span><span class="watch-t">${fmtTime(t)}</span></a>`;
  }

  function clipHtml(id, t, end) {
    const src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?start=${t}${end ? `&end=${end}` : ''}&autoplay=1&rel=0&playsinline=1`;
    return `<div class="clip"><div class="clip-frame"><iframe src="${src}" title="Video clip" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>` +
      `<div class="clip-bar"><span>${end ? `Clip ${fmtTime(t)}–${fmtTime(end)}` : `From ${fmtTime(t)}`}</span><a href="${ytUrl(id, t)}" target="_blank" rel="noopener">Open on YouTube ${ICON.out}</a></div></div>`;
  }

  /* ---------- spots & parts ---------- */
  function spotLi(map, s, i) {
    const o = typeof s === 'string' ? { text: s } : s;
    const label = o.label || `Spot ${i + 1}`;
    return `<li class="spot"><div class="spot-text"><span class="spot-label">${esc(label)}</span><span>${fmt(o.text, map)}</span></div>${o.imgs ? figures(o.imgs) : ''}</li>`;
  }

  function spotsList(map, spots) {
    return `<ol class="spots">${spots.map((s, i) => spotLi(map, s, i)).join('')}</ol>`;
  }

  function partsHtml(map, item) {
    const v = item.video || asArray(item.videos)[0];
    return `<div class="parts">${item.parts.map(p => `
      <div class="part">
        <div class="part-head">${p.icon ? `<button type="button" class="zoom part-icon" data-full="${esc(imgUrl(p.icon))}" data-cap="${esc(p.name)}"><img src="${esc(imgUrl(p.icon))}" alt="${esc(p.name)}" loading="lazy"></button>` : ''}
          <div><h4>${esc(p.name)}</h4>${p.area ? `<div class="part-area">${fmt(p.area, map)}</div>` : ''}</div>
        </div>
        ${p.note ? `<p class="part-note">${fmt(p.note, map)}</p>` : ''}
        ${spotsList(map, p.spots)}
        ${watchHtml(map, p.w, v, p.spots.length > 1 ? 'Watch these spots' : 'Watch it')}
      </div>`).join('')}</div>`;
  }

  /* ---------- checklists ---------- */
  const mapKey = map => `${map.game}/${map.id}`;
  const listPrefix = (map, item, listKey) => `zg:${mapKey(map)}:${item.id}:${listKey}:`;

  /* A tick is saved under its step's title (zg:<map>:<item>:<list>:<title-slug>), not its position,
     so adding or reordering steps keeps everyone's progress on the right step. Punctuation and
     capitals don't matter. Reworded a title? Give the step `key: '<old slug>'` to keep its ticks.
     Repeated titles in one list get -2, -3… on the end. */
  const slug = s => stripRefs(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60).replace(/-+$/, '');
  const stepKeyCache = new Map();
  function stepKeys(map, item, listKey) {
    const id = listPrefix(map, item, listKey);
    if (!stepKeyCache.has(id)) {
      const steps = (stepLists(item).find(([k]) => k === listKey) || [])[1] || [];
      const seen = {};
      stepKeyCache.set(id, steps.map(st => {
        let k = st.key || slug(st.t);
        if (/^\d*$/.test(k)) k = 'step-' + k;  // all-digit keys are the old position keys
        seen[k] = (seen[k] || 0) + 1;
        return seen[k] > 1 ? `${k}-${seen[k]}` : k;
      }));
    }
    return stepKeyCache.get(id);
  }

  function countDone(map, item, listKey) {
    const prefix = listPrefix(map, item, listKey);
    return stepKeys(map, item, listKey).filter(k => isDone(prefix + k)).length;
  }

  // Ticks used to be saved by position (…:steps:3). Move one to the step now at that position;
  // null drops a tick past the end of its list. Unknown items are left alone.
  function migrateSub(mk, sub) {
    const m = /^([^:]+):(prep|steps|upgrade):(\d+)$/.exec(sub);
    if (!m) return sub;
    const map = ZG.maps[mk];
    const item = map && map.itemById[m[1]];
    if (!item) return sub;
    const k = stepKeys(map, item, m[2])[+m[3]];
    return k ? `${m[1]}:${m[2]}:${k}` : null;
  }

  // Once per load, for ticks saved in this browser (synced ones are moved as they arrive).
  function migrateLocal() {
    for (const k of store.keys()) {
      if (!k.startsWith('zg:') || !/:\d+$/.test(k)) continue;
      const mk = mapKeyOfStoreKey(k);
      const sub = k.slice(mk.length + 4);
      const next = migrateSub(mk, sub);
      if (next === sub) continue;
      if (next && isDone(k)) store.set(`zg:${mk}:${next}`, '1');
      store.del(k);
    }
  }

  function stepVideo(item, listKey) {
    if (listKey === 'upgrade' && item.upgrade && item.upgrade.video) return item.upgrade.video;
    return item.video || asArray(item.videos)[0];
  }

  function stepHtml(map, item, listKey, st, i, opts) {
    const key = listPrefix(map, item, listKey) + stepKeys(map, item, listKey)[i];
    const done = isDone(key);
    const anchor = `${item.id}-${listKey}-${i + 1}`;
    return `<li class="step${done ? ' done' : ''}"${opts.drawer ? '' : ` id="${anchor}"`} data-anchor="${anchor}">
      <label class="step-check" title="Mark step ${i + 1} done">
        <input type="checkbox" data-key="${esc(key)}"${done ? ' checked' : ''}>
        <span class="box" aria-hidden="true"></span><span class="step-num">${i + 1}</span>
      </label>
      <div class="step-body">
        <h4 class="step-title">${fmt(st.t, map)}</h4>
        ${needsHtml(map, st.needs)}
        ${paras(st.d, map)}
        ${st.anyList ? `<div class="order-note">${ICON.shuffle}<span>${esc(typeof st.anyList === 'string' ? st.anyList : 'These can be done in any order')}</span></div>` : ''}
        ${bullets(st.list, map)}
        ${st.ol ? `<ol class="numbered">${st.ol.map(x => `<li>${fmt(x, map)}</li>`).join('')}</ol>` : ''}
        ${st.lookup ? lookupHtml(st.lookup, map) : ''}
        ${st.table ? tableHtml(st.table, map) : ''}
        ${st.spots ? spotsList(map, st.spots) : ''}
        ${callouts(st, map)}
        ${figures(st.imgs)}
        ${watchHtml(map, st.w, stepVideo(item, listKey), 'Watch this step')}
      </div>
    </li>`;
  }

  // How a list's order is shown: the whole list ("any"/"suggested"), or groups of steps marked `any`.
  function listOrder(item, listKey) {
    if (listKey === 'prep') return item.prepOrder || 'any';
    if (listKey === 'upgrade') return (item.upgrade && item.upgrade.order) || null;
    return item.stepsOrder || null;
  }

  const ORDER_CHIP = {
    any: `<span class="order-chip any">${ICON.shuffle}Any order</span>`,
    suggested: `<span class="order-chip">${ICON.shuffle}Suggested order · flexible</span>`,
  };

  function stepsListHtml(map, item, listKey, steps, opts) {
    const out = [];
    let i = 0;
    while (i < steps.length) {
      const g = steps[i].any;
      if (!g) { out.push(stepHtml(map, item, listKey, steps[i], i, opts)); i++; continue; }
      const start = i;
      const group = [];
      while (i < steps.length && steps[i].any === g) { group.push(stepHtml(map, item, listKey, steps[i], i, opts)); i++; }
      const label = typeof g === 'string' ? g : `Steps ${start + 1}–${i} can be done in any order`;
      out.push(`<li class="any-group"><div class="any-group-label">${ICON.shuffle}<span><strong>Any order</strong> · ${esc(label)}</span></div><ol class="steps">${group.join('')}</ol></li>`);
    }
    return out.join('');
  }

  function checklistHtml(map, item, listKey, steps, title, opts) {
    const prefix = listPrefix(map, item, listKey);
    const n = steps.length;
    const done = countDone(map, item, listKey);
    const order = listOrder(item, listKey);
    return `<section class="checklist${order === 'any' ? ' order-any' : ''}" data-prefix="${esc(prefix)}">
      <div class="checklist-head">
        <h4>${esc(title)}</h4>
        ${ORDER_CHIP[order] || ''}
        <div class="progress" aria-label="Progress"><div class="bar"><span style="width:${n ? Math.round(done / n * 100) : 0}%"></span></div><span class="count">${done}/${n}</span></div>
        ${n > 1 ? `<button type="button" class="link-btn" data-collapse aria-pressed="${collapseDone() ? 'true' : 'false'}">${collapseDone() ? 'Expand done' : 'Collapse done'}</button>` : ''}
        <button type="button" class="link-btn" data-reset="${esc(prefix)}">Reset</button>
      </div>
      <ol class="steps">${stepsListHtml(map, item, listKey, steps, opts)}</ol>
    </section>`;
  }

  /* ---------- items ---------- */
  function hrefFor(map, tab, anchor) {
    return `#/${map.game}/${map.id}/${tab}${anchor ? '/' + anchor : ''}`;
  }

  function backlinksHtml(map, item) {
    const bl = map.backlinks[item.id];
    if (!bl || !bl.length) return '';
    return `<div class="usedin"><span class="chip-label">Needed for</span>${bl.map(b =>
      `<a class="usedin-link" href="${hrefFor(map, b.item.tab, `${b.item.id}-${b.list}-${b.index + 1}`)}">` +
      `${esc(b.item.short || b.item.name)} · Step ${b.index + 1}<span class="usedin-step">${esc(stripRefs(b.step.t))}</span></a>`).join('')}</div>`;
  }

  /* Dropdown lookup. Two dropdowns (e.g. Gorod Krovi valves: pick A and B) or, without `b`,
     one dropdown (e.g. pick a compound). Answers are [name, number] pairs ("Set name to n")
     or plain strings (one numbered line each, **bold** allowed). */
  let lookupSeq = 0;
  function lookupHtml(lk, map) {
    const id = 'lookup-' + (++lookupSeq);
    const single = !lk.b;
    const opts = lk.options.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('');
    const field = (key, label) => `<label class="lookup-field" for="${id}-${key}"><span>${esc(label)}</span>
        <select id="${id}-${key}" data-lookup="${key}"><option value="">Choose…</option>${opts}</select></label>`;
    const hint = lk.hint || (single ? 'Pick one to see the answer.' : 'Pick both to see the answer.');
    const data = { answers: lk.answers, endNote: lk.endNote || '', same: lk.same || '', single, hint };
    return `<div class="lookup" data-lookup-data="${esc(JSON.stringify(data))}">
      <div class="lookup-fields${single ? ' single' : ''}">${field('a', lk.a)}${single ? '' : field('b', lk.b)}</div>
      <div class="lookup-out" aria-live="polite"><p class="lookup-hint">${esc(hint)}</p></div>
      ${lk.source ? `<p class="lookup-source">${fmt(lk.source, map)}</p>` : ''}
    </div>`;
  }

  function renderLookup(box) {
    const data = JSON.parse(box.dataset.lookupData);
    const a = box.querySelector('[data-lookup="a"]').value;
    const bSel = box.querySelector('[data-lookup="b"]');
    const b = bSel ? bSel.value : '';
    const out = box.querySelector('.lookup-out');
    if (!a || (!data.single && !b)) { out.innerHTML = `<p class="lookup-hint">${esc(data.hint)}</p>`; return; }
    if (!data.single && a === b) { out.innerHTML = `<p class="lookup-hint">${esc(data.same || 'Those can\'t be the same.')}</p>`; return; }
    const ans = data.answers[data.single ? a : `${a}>${b}`];
    if (!ans) { out.innerHTML = '<p class="lookup-hint">No answer for that combination.</p>'; return; }
    const line = x => Array.isArray(x)
      ? `<li>Set <b>${esc(x[0])}</b> <span class="nowrap">to <b class="lookup-num">${esc(x[1])}</b></span></li>`
      : `<li>${esc(x).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')}</li>`;
    out.innerHTML = `<ol class="numbered lookup-result">${ans.map(line).join('')}</ol>` +
      (data.endNote ? `<p class="lookup-end">${esc(data.endNote.replace('{a}', a).replace('{b}', b))}</p>` : '');
  }

  function blocksHtml(map, blocks) {
    return asArray(blocks).map(b => {
      if (b.lookup) return lookupHtml(b.lookup, map);
      if (b.h) return `<h4 class="block-h">${fmt(b.h, map)}</h4>`;
      if (b.p) return paras(b.p, map);
      if (b.list) return bullets(b.list, map);
      if (b.ol) return `<ol class="numbered">${b.ol.map(x => `<li>${fmt(x, map)}</li>`).join('')}</ol>`;
      if (b.imgs) return figures(b.imgs);
      if (b.table) return tableHtml(b.table, map);
      if (b.video) return videoHtml(b.video);
      if (b.spots) return spotsList(map, b.spots);
      if (b.tip || b.warn || b.note) return callouts(b, map);
      return '';
    }).join('');
  }

  function upgradeHtml(map, item, opts) {
    const u = item.upgrade;
    return `<section class="upgrade">
      <div class="upgrade-head${u.img ? '' : ' no-img'}">
        ${u.img ? `<button type="button" class="zoom upgrade-img" data-full="${esc(imgUrl(u.img))}" data-cap="${esc(u.name)}"><img src="${esc(imgUrl(u.img))}" alt="" loading="lazy"></button>` : ''}
        <div><div class="item-type">Upgrade</div><h4 class="upgrade-name">${esc(u.name)}</h4>${u.aka ? `<div class="item-aka">${esc(u.aka)}</div>` : ''}${u.summary ? `<p>${fmt(u.summary, map)}</p>` : ''}</div>
      </div>
      ${checklistHtml(map, item, 'upgrade', u.steps, u.stepsTitle || 'Upgrade steps', opts)}
      ${blocksHtml(map, u.blocks)}
      ${videoHtml(u.video)}
    </section>`;
  }

  function itemHtml(map, item, opts = {}) {
    const imgBtn = item.img
      ? `<button type="button" class="zoom item-img" data-full="${esc(imgUrl(item.img))}" data-cap="${esc(item.name)}"><img src="${esc(imgUrl(item.img))}" alt="${esc(item.name)}" loading="lazy" decoding="async"></button>`
      : '';
    return `<article class="item${opts.drawer ? ' in-drawer' : ''}${item.img ? '' : ' no-img'}"${opts.drawer ? '' : ` id="item-${esc(item.id)}"`} style="${colorVar(item)}">
      <header class="item-head">
        ${imgBtn}
        <div class="item-titles">
          ${item.type && !opts.drawer ? `<div class="item-type">${esc(item.type)}</div>` : ''}
          ${opts.drawer ? '' : `<h3 class="item-name">${esc(item.name)}</h3>`}
          ${item.aka ? `<div class="item-aka">${esc(item.aka)}</div>` : ''}
          ${item.summary ? `<p class="item-summary">${fmt(item.summary, map)}</p>` : ''}
        </div>
      </header>
      ${opts.drawer ? '' : backlinksHtml(map, item)}
      ${factsHtml(item.facts, map)}
      ${item.parts ? partsHtml(map, item) : ''}
      ${item.spots ? `${item.spots.length > 1 ? `<div class="order-note">${ICON.shuffle}<span>Any order</span></div>` : ''}${spotsList(map, item.spots)}` : ''}
      ${item.prep ? checklistHtml(map, item, 'prep', item.prep, item.prepTitle || 'Before you start', opts) : ''}
      ${item.steps ? checklistHtml(map, item, 'steps', item.steps, item.stepsTitle || 'Steps', opts) : ''}
      ${blocksHtml(map, item.blocks)}
      ${item.upgrade ? upgradeHtml(map, item, opts) : ''}
      ${videoHtml(item.video)}
      ${asArray(item.videos).map(videoHtml).join('')}
      ${opts.drawer ? backlinksHtml(map, item) : ''}
    </article>`;
  }

  /* ---------- pages ---------- */
  function renderGameTabs(activeId) {
    $('#gametabs').innerHTML = `<div class="gametabs-inner">${ZG.games.map(g =>
      `<a class="gametab${g.id === activeId ? ' active' : ''}${g.active ? '' : ' soon'}" href="#/${g.id}"${g.id === activeId ? ' aria-current="page"' : ''}>` +
      `<span class="gametab-name">${esc(g.name)}</span>${g.active ? '' : '<em>Soon</em>'}</a>`).join('')}</div>`;
    const act = $('.gametab.active');
    const strip = $('.gametabs-inner');
    if (act && strip) strip.scrollLeft = act.offsetLeft - (strip.clientWidth - act.offsetWidth) / 2;
  }

  // Progress of the main quest. Maps with two sides (Black Ops II: Maxis / Richtofen) have one
  // checklist per side; show whichever side is furthest along.
  function eeProgress(map) {
    const lists = map.items.filter(i => i.tab === 'easter-egg' && i.steps);
    const mains = lists.filter(i => /Main Easter Egg/.test(i.type || ''));
    const candidates = mains.length ? mains : lists.slice(0, 1);
    if (!candidates.length) return null;
    let best = null;
    for (const ee of candidates) {
      const p = { done: countDone(map, ee, 'steps'), total: ee.steps.length };
      if (!best || p.done / p.total > best.done / best.total) best = p;
    }
    return best;
  }

  function playerBadge(map) {
    // A map can also give its own wording: players: { text: '2+ players needed', warn: true }
    if (map.players && typeof map.players === 'object') return `<span class="badge ${map.players.warn ? 'badge-warn' : 'badge-ok'}">${esc(map.players.text)}</span>`;
    if (map.players === 'four') return '<span class="badge badge-warn">4 players required</span>';
    if (map.players === 'coop') return '<span class="badge badge-warn">Full ending needs 4 players</span>';
    return '<span class="badge badge-ok">Solo OK</span>';
  }

  function mapCard(map) {
    const p = eeProgress(map);
    const pct = p && p.total ? Math.round(p.done / p.total * 100) : 0;
    return `<a class="map-card" href="#/${map.game}/${map.id}">
      <div class="map-card-img"><img src="${esc(map.hero)}" alt="" loading="lazy" decoding="async"></div>
      <div class="map-card-body">
        <div class="eyebrow">${esc(map.dlc)}</div>
        <h3>${esc(map.name)}</h3>
        <div class="map-card-ee">${esc(map.eeName || '')}</div>
        <div class="badges">${playerBadge(map)}${asArray(map.tags).map(t => `<span class="badge">${esc(t)}</span>`).join('')}</div>
        ${p && p.done ? `<div class="progress small"><div class="bar"><span style="width:${pct}%"></span></div><span class="count">EE ${p.done}/${p.total}</span></div>` : ''}
      </div>
    </a>`;
  }

  function renderGame(game) {
    const maps = ZG.mapsFor(game.id);
    const groups = game.groups || [{ id: undefined, label: 'Maps' }];
    document.title = `${game.name} — Zombies Field Guide`;
    return `<section class="page-hero"><div class="wrap">
        <p class="eyebrow">${esc(game.year)} · ${maps.length} maps</p>
        <h1>${esc(game.name)} Zombies</h1>
        <p class="lede">${esc(game.blurb || '')}</p>
      </div></section>
      <div class="wrap">
        ${groups.map(g => {
          const list = maps.filter(m => g.id === undefined || m.group === g.id);
          return list.length ? `<h2 class="group-h">${esc(g.label)}</h2><div class="map-grid">${list.map(mapCard).join('')}</div>` : '';
        }).join('')}
      </div>`;
  }

  function renderSoon(game) {
    document.title = `${game.name} — Zombies Field Guide`;
    return `<section class="page-hero"><div class="wrap">
      <p class="eyebrow">${esc(game.year)}</p><h1>${esc(game.name)} Zombies</h1>
      <p class="lede">Guides for ${esc(game.name)} haven't been written yet. This tab is ready for them.</p>
      <p><a class="btn" href="#/">${ICON.arrow} Back to all games</a></p></div></section>`;
  }

  /* ---------- home ---------- */
  function homeMapRow(map, showGame) {
    const p = eeProgress(map);
    const started = p && p.done;
    const finished = started && p.done === p.total;
    const pct = started ? Math.round(p.done / p.total * 100) : 0;
    const sub = showGame ? `${gameName(map.game)} · ${map.eeName || ''}` : (map.eeName || '');
    return `<a class="home-map${finished ? ' finished' : ''}" href="${hrefFor(map, started ? 'easter-egg' : 'start')}">
      <span class="home-map-text"><span class="home-map-name">${esc(map.name)}</span><span class="home-map-ee">${esc(sub)}</span></span>
      ${finished
        ? '<span class="home-map-status done">Done</span>'
        : started
          ? `<span class="progress small"><span class="bar"><span style="width:${pct}%"></span></span><span class="count">${p.done}/${p.total}</span></span>`
          : '<span class="home-map-status">Not started</span>'}
    </a>`;
  }

  function renderHome() {
    document.title = 'Zombies Field Guide';
    const active = ZG.games.filter(g => g.active);
    const soon = ZG.games.filter(g => !g.active);
    const total = active.reduce((n, g) => n + ZG.mapsFor(g.id).length, 0);
    const [lg, lm, lt] = (store.get('zg-last') || '').split('/');
    const last = ZG.maps[`${lg}/${lm}`];
    // Quests you've started but not finished, and how many you've finished.
    const progress = ZG.mapOrder.map(k => ZG.maps[k]).filter(m => active.some(g => g.id === m.game))
      .map(m => ({ m, p: eeProgress(m) })).filter(x => x.p && x.p.done);
    const inProgress = progress.filter(x => x.p.done < x.p.total).map(x => x.m);
    const finished = progress.length - inProgress.length;
    return `<section class="page-hero"><div class="wrap">
        <p class="eyebrow">${active.length} games · ${total} maps${finished ? ` · ${finished} quest${finished === 1 ? '' : 's'} finished` : ''}</p>
        <h1>Zombies Field Guide</h1>
        <p class="lede">Part locations, wonder weapons and step-by-step easter eggs for Call of Duty Zombies maps with a main quest, from Black Ops to Black Ops 7. Tick steps off as you go; your progress is saved.</p>
        ${last ? `<p><a class="btn" href="${hrefFor(last, lt || 'start')}">${ICON.arrow} Continue: ${esc(last.name)} · ${esc(tabLabel(lt || 'start'))}</a></p>` : ''}
      </div></section>
      <div class="wrap home">
        ${inProgress.length ? `<section class="home-game home-progress"><h2 class="group-h">In progress<span class="home-count">${inProgress.length} quest${inProgress.length === 1 ? '' : 's'}</span></h2>
            <div class="home-maps">${inProgress.map(m => homeMapRow(m, true)).join('')}</div></section>` : ''}
        ${active.map(g => {
          const maps = ZG.mapsFor(g.id);
          return `<section class="home-game"><h2 class="group-h"><a href="#/${g.id}">${esc(g.name)}</a><span class="home-count">${maps.length} maps</span></h2>
            <div class="home-maps">${maps.map(m => homeMapRow(m)).join('')}</div></section>`;
        }).join('')}
        ${soon.length ? `<p class="home-soon">Not written yet: ${soon.map(g => esc(g.name)).join(', ')}.</p>` : ''}
        ${offlineHtml()}
      </div>`;
  }

  /* ---------- offline ----------
     On the public site a service worker (sw.js) keeps a copy of every page and image you open.
     "Save everything" fills that copy with all images up front. Not used on the hosted Claude page. */
  const OFFLINE_CACHE = 'zg-v1';
  const CAN_OFFLINE = 'serviceWorker' in navigator && 'caches' in window && !window.ZG_HOSTED &&
    (location.protocol === 'https:' || /[?&]sw=1/.test(location.search));

  function offlineHtml() {
    if (!CAN_OFFLINE) return '';
    const saved = store.get('zg-offline');
    return `<section class="offline-box">
      <h2 class="group-h">Use it offline</h2>
      <p>Pages you open are kept on this device automatically. To have every map ready with no signal, save everything once (${allImageUrls().length} images, about ${Math.max(1, Math.round(allImageUrls().length * 0.046))} MB). Videos still need internet.</p>
      <p><button type="button" class="btn" id="save-offline">${saved ? 'Update the offline copy' : 'Save everything for offline'}</button></p>
      <p class="offline-status" id="offline-status" aria-live="polite">${saved ? `Last saved ${esc(saved)}.` : ''}</p>
    </section>`;
  }

  // Every picture a map shows (its hero, item and upgrade images, part icons, figures and spot photos).
  function mapImages(m, out = new Set()) {
    const add = s => { if (s) out.add(typeof s === 'string' ? s : s.src); };
    // Parts, steps and blocks can all hold a spots list, and each spot can carry its own pictures.
    const addSpots = spots => { for (const s of asArray(spots)) if (s && s.imgs) asArray(s.imgs).forEach(add); };
    add(m.hero);
    for (const it of m.items) {
      add(it.img);
      if (it.upgrade) add(it.upgrade.img);
      for (const p of asArray(it.parts)) { add(p.icon); addSpots(p.spots); }
      for (const b of asArray(it.blocks)) { asArray(b.imgs).forEach(add); addSpots(b.spots); }
      for (const [, steps] of stepLists(it)) for (const st of steps) { asArray(st.imgs).forEach(add); addSpots(st.spots); }
    }
    return out;
  }

  function allImageUrls() {
    const out = new Set();
    for (const key of ZG.mapOrder) mapImages(ZG.maps[key], out);
    return [...out];
  }

  async function saveOffline(btn) {
    const status = $('#offline-status');
    const shell = $$('script[src], link[rel="stylesheet"][href]').map(el => el.getAttribute('src') || el.getAttribute('href'))
      .filter(u => !/^https?:/.test(u));
    const urls = ['index.html', ...shell, ...allImageUrls()].map(u => new URL(u, location.href).href);
    btn.disabled = true;
    let done = 0, failed = 0;
    try {
      const cache = await caches.open(OFFLINE_CACHE);
      const queue = urls.slice();
      const worker = async () => {
        while (queue.length) {
          const u = queue.shift();
          try {
            if (!(await cache.match(u))) {
              const res = await fetch(u);
              if (res.ok) await cache.put(u, res); else failed++;
            }
          } catch (e) { failed++; }
          done++;
          status.textContent = `Saving ${done} of ${urls.length}…`;
        }
      };
      await Promise.all([worker(), worker(), worker(), worker()]);
      store.set('zg-offline', new Date().toLocaleDateString());
      status.textContent = failed
        ? `Saved, but ${failed} file${failed === 1 ? '' : 's'} failed. Try again later.`
        : 'Saved. Everything except the videos now works without internet.';
      btn.textContent = 'Update the offline copy';
    } catch (e) {
      status.textContent = 'This browser won\'t let the guide save files for offline use.';
    }
    btn.disabled = false;
  }

  function registerServiceWorker() {
    if (!CAN_OFFLINE) return;
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  /* ---------- keep the screen on (Screen Wake Lock) ---------- */
  let wakeLock = null;
  let wakeRefused = false;
  const wakeWanted = () => store.get('zg-awake') === '1';

  function syncWakeButton() {
    const btn = $('#wake-toggle');
    if (!btn) return;
    btn.hidden = !('wakeLock' in navigator) || wakeRefused;
    btn.setAttribute('aria-pressed', wakeLock ? 'true' : 'false');
    btn.title = wakeLock ? 'Screen stays on (tap to turn off)' : 'Keep the screen on while you play';
  }

  async function applyWake() {
    if (!('wakeLock' in navigator)) return;
    if (wakeWanted() && document.visibilityState === 'visible' && !wakeLock) {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => { wakeLock = null; syncWakeButton(); });
      } catch (e) {
        // This browser or page doesn't allow it (some embedded pages, battery saver): hide the button.
        wakeLock = null;
        wakeRefused = true;
        store.del('zg-awake');
      }
    } else if (!wakeWanted() && wakeLock) {
      try { await wakeLock.release(); } catch (e) { /* already released */ }
      wakeLock = null;
    }
    syncWakeButton();
  }

  function renderMap(map, tabId) {
    const tabs = TABS.filter(t => map.items.some(i => i.tab === t.id));
    if (!tabs.some(t => t.id === tabId)) tabId = tabs[0].id;
    const items = map.items.filter(i => i.tab === tabId);
    const game = ZG.games.find(g => g.id === map.game);
    document.title = `${map.name} · ${tabLabel(tabId)} — Zombies Field Guide`;
    const intro = map.intro && map.intro[tabId];
    const toc = items.length > 1
      ? items.map(it => `<a href="${hrefFor(map, tabId, 'item-' + it.id)}" style="${colorVar(it)}">${esc(it.short || it.name)}</a>`).join('')
      : '';
    const hasPartVideos = tabId === 'parts' && items.some(it => asArray(it.parts).some(p => p.w != null));
    const hasPartIcons = items.some(it => asArray(it.parts).some(p => p.icon));
    return `<nav class="crumbs wrap" aria-label="Breadcrumb"><a href="#/${game.id}">${esc(game.name)}</a><span aria-hidden="true">/</span><span>${esc(map.name)}</span></nav>
      <section class="map-hero"><img class="map-hero-bg" src="${esc(map.hero)}" alt="">
        <div class="wrap map-hero-inner">
          <p class="eyebrow">${esc(map.dlc)}</p>
          <h1>${esc(map.name)}</h1>
          <p class="lede">${fmt(map.blurb, map)}</p>
          <div class="quick">${asArray(map.quick).map(([k, v]) => `<div class="quick-item"><span>${esc(k)}</span><strong>${fmt(v, map)}</strong></div>`).join('')}</div>
        </div>
      </section>
      <nav class="maptabs" aria-label="${esc(map.name)} sections"><div class="wrap maptabs-inner">
        ${tabs.map(t => `<a class="maptab${t.id === tabId ? ' active' : ''}" href="${hrefFor(map, t.id)}"${t.id === tabId ? ' aria-current="page"' : ''}>${esc(t.label)}</a>`).join('')}
      </div></nav>
      <div class="wrap map-body${toc ? '' : ' no-toc'}">
        <div class="content" data-tab="${tabId}">
          ${toc ? `<nav class="jump" aria-label="Jump to"><span class="chip-label">Jump to</span>${toc}</nav>` : ''}
          ${intro ? `<div class="tab-intro">${paras(intro, map)}</div>` : ''}
          ${items.some(it => it.steps || it.prep || it.upgrade) ? `<div class="order-legend"><span>${ICON.shuffle}</span><p>Work through numbered steps top to bottom. Anything inside a green <strong>Any order</strong> box, or marked with this icon, can be done in whatever order suits you.${CAN_EMBED ? ' <strong>Watch</strong> buttons play the exact moment from a guide video right here.' : ''}</p></div>` : ''}
          ${hasPartVideos ? `<div class="callout note">${ICON.play}<div>${hasPartIcons ? 'The pictures show what each part looks like. ' : ''}<strong>Watch these spots</strong> ${CAN_EMBED ? 'plays the part of a guide video that walks through every spawn spot, right here on the page' : 'opens a guide video at the moment it walks through that part\'s spawn spots'}.</div></div>` : ''}
          ${items.map(it => itemHtml(map, it)).join('')}
        </div>
        ${toc ? `<aside class="toc" aria-label="On this page"><div class="toc-inner"><div class="toc-h">On this page</div>${toc}</div></aside>` : ''}
      </div>
      ${pagerHtml(map, game)}
      ${tabId === 'easter-egg' ? `<button type="button" class="fab" id="next-step">${ICON.down}<span>Next step</span></button>` : ''}`;
  }

  // Previous and next map in the same game, so you can move through a game without going back.
  function pagerHtml(map, game) {
    const maps = ZG.mapsFor(map.game);
    const i = maps.indexOf(map);
    const prev = maps[i - 1];
    const next = maps[i + 1];
    const link = (m, dir) => `<a class="pager-link ${dir}" href="#/${m.game}/${m.id}">` +
      `<span class="pager-dir">${dir === 'prev' ? 'Previous map' : 'Next map'}</span><span class="pager-name">${esc(m.name)}</span></a>`;
    return `<nav class="pager wrap" aria-label="More ${esc(game.name)} maps">
      ${prev ? link(prev, 'prev') : '<span></span>'}
      <a class="pager-all" href="#/${game.id}">All ${esc(game.name)} maps</a>
      ${next ? link(next, 'next') : '<span></span>'}
    </nav>`;
  }

  function renderNotFound() {
    document.title = 'Not found — Zombies Field Guide';
    return `<section class="page-hero"><div class="wrap"><h1>Page not found</h1><p class="lede">That page doesn't exist.</p><p><a class="btn" href="#/">${ICON.arrow} Back to all games</a></p></div></section>`;
  }

  /* ---------- router ----------
     Navigation is kept in `current` (a "#/game/map/tab/anchor?item=id" string) so it
     works inside a hosted frame too; history entries are added when the browser allows it. */
  let current = '';
  let renderedKey = null;
  let drawerPushed = false;
  let historyWorks = true;

  function initialHash() {
    const h = location.hash || '';
    if (h.startsWith('#/')) return h;
    const tok = h.replace(/^#/, '');
    if (tok) {
      const key = ZG.mapOrder.find(k => ZG.maps[k].id === tok);
      if (key) return `#/${ZG.maps[key].game}/${tok}`;
      if (ZG.games.some(g => g.id === tok)) return `#/${tok}`;
    }
    return '#/';
  }

  function go(href, replace) {
    try { history[replace ? 'replaceState' : 'pushState'](null, '', href); } catch (e) { historyWorks = false; }
    current = href;
    route();
  }

  function parseHash() {
    const raw = current.replace(/^#\/?/, '');
    const [path, query] = raw.split('?');
    const parts = (path || '').split('/').filter(Boolean).map(decodeURIComponent);
    return { parts, params: new URLSearchParams(query || ''), path: parts.map(encodeURIComponent).join('/') };
  }

  function currentMap() {
    const { parts } = parseHash();
    return ZG.maps[`${parts[0]}/${parts[1]}`] || null;
  }

  function route() {
    const { parts, params } = parseHash();
    const [g, m, t, anchor] = parts;
    const game = g ? ZG.games.find(x => x.id === g) : null;
    const map = game && m ? ZG.maps[`${g}/${m}`] : null;
    const key = g ? [g, m || '', m ? (t || 'start') : ''].join('/') : 'home';
    const main = $('#main');

    if (renderedKey !== key) {
      const prevMap = renderedKey && renderedKey.split('/').slice(0, 2).join('/');
      renderGameTabs(g);
      if (!g) main.innerHTML = renderHome();
      else if (!game) main.innerHTML = renderNotFound();
      else if (!m) main.innerHTML = game.active ? renderGame(game) : renderSoon(game);
      else if (!map) main.innerHTML = renderNotFound();
      else if (PACKS && !packsReady(map)) {
        // Hosted artifact: fetch this map's picture packs first, then route again.
        if (!main.querySelector('.packs-loading')) main.innerHTML = '<div class="wrap packs-loading" role="status">Loading the map…</div>';
        renderedKey = null;
        ensurePacks(map).then(route);
        return;
      } else {
        main.innerHTML = renderMap(map, t || 'start');
        store.set('zg-last', `${g}/${m}/${$('.maptab.active') ? $('.maptab.active').getAttribute('href').split('/')[3] : 'start'}`);
      }
      renderedKey = key;
      updateFab();
      const sameMap = map && prevMap === `${g}/${m}`;
      setTimeout(() => {
        if (anchor) scrollToAnchor(anchor);
        else if (sameMap) {
          const tabsBar = $('.maptabs');
          const top = tabsBar ? tabsBar.getBoundingClientRect().top + window.scrollY - headerHeight() : 0;
          if (window.scrollY > top) window.scrollTo(0, top);
        } else window.scrollTo(0, 0);
      }, 0);
    } else if (anchor) {
      scrollToAnchor(anchor);
    }
    syncDrawer(params.get('item'));
  }

  function headerHeight() {
    const tb = $('.topbar');
    return tb ? tb.getBoundingClientRect().bottom : 0;
  }

  function scrollToAnchor(anchor) {
    const el = document.getElementById(anchor);
    if (!el) return;
    el.scrollIntoView({ block: 'start' });
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  }

  /* ---------- drawer (quick look) ---------- */
  function openItem(id) {
    const { path } = parseHash();
    const target = `#/${path}?item=${encodeURIComponent(id)}`;
    if (!$('#drawer').hidden) { go(target, true); return; }
    drawerPushed = historyWorks;
    go(target);
  }

  function closeDrawer() {
    if ($('#drawer').hidden) return;
    if (drawerPushed) { drawerPushed = false; history.back(); }
    else go(`#/${parseHash().path}`, true);
  }

  let lastFocus = null;
  function syncDrawer(id) {
    const drawer = $('#drawer');
    const map = currentMap();
    const item = id && map ? map.itemById[id] : null;
    if (!item) {
      if (!drawer.hidden) {
        drawer.classList.remove('open');
        document.documentElement.classList.remove('drawer-open');
        setTimeout(() => { if (!drawer.classList.contains('open')) drawer.hidden = true; }, 220);
        if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
      }
      if (!id) drawerPushed = false;
      return;
    }
    if (drawer.hidden) lastFocus = document.activeElement;
    $('#drawer-kicker').textContent = `${item.type || tabLabel(item.tab)} · ${map.name}`;
    $('#drawer-title').textContent = item.name;
    $('#drawer-full').setAttribute('href', hrefFor(map, item.tab, 'item-' + item.id));
    const body = $('#drawer-body');
    body.innerHTML = itemHtml(map, item, { drawer: true });
    body.scrollTop = 0;
    drawer.hidden = false;
    document.documentElement.classList.add('drawer-open');
    setTimeout(() => { drawer.classList.add('open'); $('.drawer-panel').focus({ preventScroll: true }); }, 20);
  }

  /* ---------- progress UI ---------- */
  function updateProgress(prefix) {
    $$('.checklist').forEach(cl => {
      if (prefix && cl.dataset.prefix !== prefix) return;
      const keys = $$('input[data-key]', cl).map(inp => inp.dataset.key);
      const n = keys.length;
      const done = keys.filter(isDone).length;
      const bar = $('.bar span', cl);
      if (bar) bar.style.width = `${n ? Math.round(done / n * 100) : 0}%`;
      const c = $('.count', cl);
      if (c) c.textContent = `${done}/${n}`;
    });
    updateFab();
  }

  // Re-read every visible checkbox from storage (after progress arrives from another device).
  function refreshChecks() {
    $$('input[data-key]').forEach(inp => {
      const d = isDone(inp.dataset.key);
      inp.checked = d;
      inp.closest('.step').classList.toggle('done', d);
    });
    updateProgress();
    if ($('.map-grid')) {
      const game = ZG.games.find(x => x.id === parseHash().parts[0]);
      if (game && game.active) $('#main').innerHTML = renderGame(game);
    }
    if ($('.home')) $('#main').innerHTML = renderHome();
  }

  function eeStepsOnPage() {
    return $$('#main .content[data-tab="easter-egg"] .step');
  }

  // First unticked quest step. With two side-by-side checklists (Maxis / Richtofen), follow the
  // one with the most ticks so the button stays on the side you're doing. Once any quest step is
  // ticked, unticked prep items are skipped (people rarely tick those off).
  function nextEeStep() {
    const steps = eeStepsOnPage();
    const isDoneStep = s => s.classList.contains('done');
    const isPrep = s => s.dataset.anchor.includes('-prep-');
    const byItem = new Map();
    for (const s of steps) {
      const item = s.closest('.item');
      if (!byItem.has(item)) byItem.set(item, []);
      byItem.get(item).push(s);
    }
    let best = null, bestDone = 0;
    for (const list of byItem.values()) {
      const done = list.filter(isDoneStep).length;
      if (done > bestDone && list.some(s => !isDoneStep(s))) { best = list; bestDone = done; }
    }
    const pool = best || steps;
    const started = pool.some(s => !isPrep(s) && isDoneStep(s));
    return pool.find(s => !isDoneStep(s) && !(started && isPrep(s))) || pool.find(s => !isDoneStep(s));
  }

  function updateFab() {
    const fab = $('#next-step');
    if (!fab) return;
    const next = nextEeStep();
    fab.hidden = !next;
    if (next) {
      const inPrep = next.dataset.anchor.includes('-prep-');
      $('span', fab).textContent = `Next: ${inPrep ? 'prep' : 'step'} ${$('.step-num', next).textContent}`;
    }
  }

  /* ---------- progress sync (hosted page, signed-in viewer) ----------
     Each map's ticks live in one private document: data/users/<id>/<game>_<map>.
     localStorage stays the instant cache; the account copy follows you across devices. */
  const cloud = { col: null, dirty: {}, timers: {}, chain: {} };
  const docIdFor = mk => mk.replace('/', '_');
  const mapKeyForDoc = id => { const mk = id.replace('_', '/'); return ZG.maps[mk] ? mk : null; };
  const mapKeyOfStoreKey = k => (k.startsWith('zg:') ? k.slice(3).split(':')[0] : null);

  function localDone(mk) {
    const prefix = `zg:${mk}:`;
    const done = {};
    for (const k of store.keys()) if (k.startsWith(prefix) && isDone(k)) done[k.slice(prefix.length)] = 1;
    return done;
  }

  // Copy the account's ticks for one map into this browser. Returns true when old position-based
  // ticks were moved to title keys, so the account copy should be written back.
  function applyCloud(mk, done) {
    const fixed = {};
    let moved = false;
    for (const sub of Object.keys(done)) {
      const next = migrateSub(mk, sub);
      if (next !== sub) moved = true;
      if (next) fixed[next] = 1;
    }
    const prefix = `zg:${mk}:`;
    for (const k of store.keys()) if (k.startsWith(prefix) && !fixed[k.slice(prefix.length)]) store.del(k);
    for (const sub of Object.keys(fixed)) store.set(prefix + sub, '1');
    return moved;
  }

  function scheduleWrite(mk, delay) {
    if (!cloud.col) return;
    cloud.dirty[mk] = true;
    clearTimeout(cloud.timers[mk]);
    cloud.timers[mk] = setTimeout(() => {
      cloud.timers[mk] = null;
      cloud.chain[mk] = (cloud.chain[mk] || Promise.resolve())
        .then(() => cloud.col.doc(docIdFor(mk)).set({ done: localDone(mk), updatedAt: Date.now() }))
        .then(() => setSyncStatus('synced'), () => setSyncStatus('error'))
        .then(() => { if (!cloud.timers[mk]) cloud.dirty[mk] = false; });
    }, delay);
  }

  function setSyncStatus(state) {
    const el = $('#sync-status');
    if (!el) return;
    el.textContent = state === 'synced'
      ? 'Checklist progress is saved to your Claude account and syncs across your devices.'
      : state === 'error'
        ? 'Couldn\'t save progress to your account just now; it\'s still saved in this browser.'
        : 'Your checklist progress is saved in this browser.';
  }

  async function initCloud() {
    if (!window.claude || typeof window.claude.use !== 'function') return;
    let db, user;
    try { [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]); } catch (e) { return; }
    if (!db || !user) return;
    const uid = await user.id();
    if (!uid) return;
    let col;
    try { col = db.collection('data/users/' + uid); } catch (e) { return; }
    cloud.col = col;
    let first = true;
    col.onSnapshot(snap => {
      const seen = new Set(), moved = [];
      for (const d of snap.docs) {
        if (!d.exists) continue;
        const mk = mapKeyForDoc(d.id);
        if (!mk) continue;
        seen.add(mk);
        if (!cloud.dirty[mk] && applyCloud(mk, (d.data() || {}).done || {})) moved.push(mk);
      }
      if (moved.length) setTimeout(() => moved.forEach(mk => scheduleWrite(mk, 0)), 0);
      if (first) {
        first = false;
        setSyncStatus('synced');
        // One-time upload of progress made in this browser before signing in.
        const localMaps = new Set(store.keys().map(mapKeyOfStoreKey).filter(mk => mk && ZG.maps[mk]));
        const toUpload = [...localMaps].filter(mk => !seen.has(mk));
        if (toUpload.length) setTimeout(() => toUpload.forEach(mk => scheduleWrite(mk, 0)), 0);
      }
      refreshChecks();
    }, () => { cloud.col = null; setSyncStatus('local'); });
  }

  /* ---------- search ---------- */
  // A short piece of the details around the first matching word, with the words highlighted.
  function snippet(e, words) {
    const at = Math.min(...words.map(w => e.bodyLc.indexOf(w)).filter(i => i >= 0));
    if (!isFinite(at)) return '';
    const start = Math.max(0, e.body.lastIndexOf(' ', Math.max(0, at - 50)) + 1);
    const end = Math.min(e.body.length, at + 90);
    const raw = (start > 0 ? '…' : '') + e.body.slice(start, end) + (end < e.body.length ? '…' : '');
    const re = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    return raw.split(re).map((part, i) => (i % 2 ? `<mark>${esc(part)}</mark>` : esc(part))).join('');
  }

  function runSearch(q) {
    const box = $('#search-results');
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) { box.hidden = true; box.innerHTML = ''; return; }
    const phrase = words.join(' ');
    const here = currentMap();
    const hereKey = here ? mapKey(here) : null;
    // Matches in titles come before matches in the details. Then: the map you're on, the kind of
    // result (map, item, quest step, other step), and titles that equal or start with the query.
    const titleScore = e => {
      const t = e.title.toLowerCase();
      return t === phrase ? 0 : t.startsWith(phrase) ? 1 : t.includes(phrase) ? 2 : 3;
    };
    const scored = [];
    for (const e of searchIndex) {
      let inHead = true;
      let ok = true;
      for (const w of words) {
        if (e.head.includes(w)) continue;
        inHead = false;
        if (!e.bodyLc.includes(w)) { ok = false; break; }
      }
      if (ok) scored.push({ e, tier: inHead ? 0 : 1, here: e.mapKey === hereKey ? 0 : 1, ts: titleScore(e) });
    }
    scored.sort((a, b) => a.tier - b.tier || a.here - b.here || a.e.rank - b.e.rank || a.ts - b.ts);
    const hits = scored.slice(0, 16);
    box.innerHTML = hits.length
      ? hits.map(({ e, tier }) => `<a class="search-hit" role="option" href="${e.href}"><strong>${esc(e.title)}</strong><span>${esc(e.sub)}</span>` +
        `${tier ? `<span class="search-snip">${snippet(e, words)}</span>` : ''}</a>`).join('') +
        (scored.length > hits.length ? `<div class="search-more">${scored.length - hits.length} more. Add another word to narrow it down.</div>` : '')
      : '<div class="search-empty">No matches</div>';
    box.hidden = false;
  }

  // Up and down arrows move through the results; Enter opens the highlighted one.
  function moveSearch(dir) {
    const hits = $$('#search-results .search-hit');
    if (!hits.length) return;
    const cur = hits.findIndex(h => h.classList.contains('kbd'));
    const next = cur < 0 ? (dir > 0 ? 0 : hits.length - 1) : (cur + dir + hits.length) % hits.length;
    hits.forEach((h, i) => h.classList.toggle('kbd', i === next));
    hits[next].scrollIntoView({ block: 'nearest' });
  }

  /* ---------- theme ---------- */
  function effectiveTheme() {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function syncThemeButton() {
    const btn = $('#theme-toggle');
    if (btn) btn.dataset.mode = effectiveTheme();
  }

  /* ---------- events ---------- */
  function bind() {
    window.addEventListener('popstate', () => {
      current = (location.hash || '').startsWith('#/') ? location.hash : initialHash();
      route();
    });
    window.addEventListener('hashchange', () => {
      if ((location.hash || '').startsWith('#/') && location.hash !== current) { current = location.hash; route(); }
    });

    document.addEventListener('click', e => {
      const link = e.target.closest('a[href^="#/"]');
      if (link && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        if (link.classList.contains('search-hit')) {
          $('#search-results').hidden = true;
          $('#search-input').value = '';
          document.documentElement.classList.remove('search-open');
        }
        go(link.getAttribute('href'));
        return;
      }

      const ref = e.target.closest('.ref');
      if (ref) { e.preventDefault(); openItem(ref.dataset.ref); return; }

      // Play clips inside the page where embeds work; otherwise the link opens YouTube.
      const watch = e.target.closest('.watch');
      if (watch && CAN_EMBED) {
        e.preventDefault();
        const open = watch.nextElementSibling && watch.nextElementSibling.classList.contains('clip');
        if (open) {
          watch.nextElementSibling.remove();
          watch.classList.remove('playing');
        } else {
          watch.insertAdjacentHTML('afterend', clipHtml(watch.dataset.yt, +watch.dataset.t, +watch.dataset.end));
          watch.classList.add('playing');
        }
        return;
      }
      const vid = e.target.closest('a.video');
      if (vid && CAN_EMBED) {
        e.preventDefault();
        vid.outerHTML = clipHtml(vid.dataset.yt, +vid.dataset.t || 0, 0);
        return;
      }

      if (e.target.closest('[data-close]')) { closeDrawer(); return; }

      const zoom = e.target.closest('.zoom');
      if (zoom) {
        $('#lightbox-img').src = zoom.dataset.full;
        $('#lightbox-img').alt = zoom.dataset.cap || '';
        $('#lightbox-cap').textContent = zoom.dataset.cap || '';
        $('#lightbox').hidden = false;
        return;
      }
      if (e.target.closest('#lightbox')) { $('#lightbox').hidden = true; return; }

      const reset = e.target.closest('[data-reset]');
      if (reset) {
        // Two taps to clear (pop-up confirm dialogs don't work in hosted pages).
        if (reset.dataset.armed !== '1') {
          reset.dataset.armed = '1';
          reset.textContent = 'Tap again to clear';
          reset.classList.add('armed');
          setTimeout(() => { reset.dataset.armed = ''; reset.textContent = 'Reset'; reset.classList.remove('armed'); }, 3000);
          return;
        }
        const prefix = reset.dataset.reset;
        for (const k of store.keys()) if (k.startsWith(prefix)) store.del(k);
        $$('input[data-key]').forEach(inp => {
          if (!inp.dataset.key.startsWith(prefix)) return;
          inp.checked = false;
          inp.closest('.step').classList.remove('done');
        });
        reset.dataset.armed = '';
        reset.textContent = 'Reset';
        reset.classList.remove('armed');
        updateProgress(prefix);
        scheduleWrite(mapKeyOfStoreKey(prefix), 600);
        return;
      }

      if (e.target.closest('#next-step')) {
        const next = nextEeStep();
        if (next) scrollToAnchor(next.id);
        return;
      }

      if (e.target.closest('[data-collapse]')) {
        store.set('zg-collapse', collapseDone() ? '0' : '1');
        applyCollapse();
        $$('[data-collapse]').forEach(b => {
          b.textContent = collapseDone() ? 'Expand done' : 'Collapse done';
          b.setAttribute('aria-pressed', collapseDone() ? 'true' : 'false');
        });
        return;
      }

      const saveBtn = e.target.closest('#save-offline');
      if (saveBtn) { saveOffline(saveBtn); return; }

      if (e.target.closest('#wake-toggle')) {
        if (wakeWanted()) store.del('zg-awake'); else store.set('zg-awake', '1');
        applyWake();
        return;
      }

      if (e.target.closest('#theme-toggle')) {
        const t = effectiveTheme() === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', t);
        store.set('zg-theme', t);
        syncThemeButton();
        return;
      }

      if (e.target.closest('#search-toggle')) {
        const open = document.documentElement.classList.toggle('search-open');
        if (open) $('#search-input').focus();
        return;
      }

      if (!e.target.closest('#search')) $('#search-results').hidden = true;
    });

    document.addEventListener('change', e => {
      const lookupSel = e.target.closest('.lookup select');
      if (lookupSel) { renderLookup(lookupSel.closest('.lookup')); return; }
      const inp = e.target.closest('input[data-key]');
      if (!inp) return;
      const key = inp.dataset.key;
      if (inp.checked) store.set(key, '1'); else store.del(key);
      $$('input[data-key]').forEach(other => {
        if (other.dataset.key !== key) return;
        other.checked = inp.checked;
        other.closest('.step').classList.toggle('done', inp.checked);
      });
      updateProgress(key.slice(0, key.lastIndexOf(':') + 1));
      scheduleWrite(mapKeyOfStoreKey(key), 600);
    });

    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      if (!$('#lightbox').hidden) { $('#lightbox').hidden = true; return; }
      if (!$('#drawer').hidden) { closeDrawer(); return; }
      if (!$('#search-results').hidden) { $('#search-results').hidden = true; return; }
      document.documentElement.classList.remove('search-open');
    });

    const input = $('#search-input');
    input.addEventListener('input', () => runSearch(input.value));
    input.addEventListener('focus', () => { if (input.value) runSearch(input.value); });
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        moveSearch(e.key === 'ArrowDown' ? 1 : -1);
      } else if (e.key === 'Enter') {
        const pick = $('#search-results .search-hit.kbd') || $('#search-results .search-hit');
        if (pick) pick.click();
      }
    });

    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      if (mq.addEventListener) mq.addEventListener('change', syncThemeButton);
    }
    // The browser drops the wake lock when the tab is hidden; take it again on return.
    document.addEventListener('visibilitychange', applyWake);
  }

  buildIndex();
  migrateLocal();
  bind();
  applyCollapse();
  syncThemeButton();
  syncWakeButton();
  applyWake();
  registerServiceWorker();
  setSyncStatus('local');
  current = initialHash();
  try { history.replaceState(null, '', current); } catch (e) { historyWorks = false; }
  route();
  initCloud();
})();
