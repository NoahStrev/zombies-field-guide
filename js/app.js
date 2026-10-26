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
      searchIndex.push({ rank: 0, title: map.name, sub: `${gameName(game)} · map`, href: `#/${game}/${map.id}`, text: `${map.name} ${map.dlc || ''}`.toLowerCase() });
      for (const it of map.items) {
        const itemHref = `#/${game}/${map.id}/${it.tab}/item-${it.id}`;
        const partNames = asArray(it.parts).map(p => p.name).join(' ');
        searchIndex.push({
          rank: 1, title: it.name, sub: `${map.name} · ${it.type || tabLabel(it.tab)}`, href: itemHref,
          text: `${it.name} ${it.aka || ''} ${it.type || ''} ${map.name} ${partNames} ${stripRefs(it.summary || '')}`.toLowerCase(),
        });
        if (it.upgrade) {
          searchIndex.push({
            rank: 1, title: it.upgrade.name, sub: `${map.name} · upgrade of ${it.name}`, href: itemHref,
            text: `${it.upgrade.name} ${it.upgrade.aka || ''} ${it.name} ${map.name} upgrade`.toLowerCase(),
          });
        }
        for (const [listKey, steps] of stepLists(it)) {
          const label = listKey === 'prep' ? 'Prep' : listKey === 'upgrade' ? 'Upgrade step' : 'Step';
          steps.forEach((st, i) => {
            for (const need of asArray(st.needs)) {
              if (!map.itemById[need]) { problems.push(`${map.id}/${it.id}: unknown need "${need}"`); continue; }
              (map.backlinks[need] = map.backlinks[need] || []).push({ item: it, list: listKey, index: i, step: st });
            }
            searchIndex.push({
              rank: it.tab === 'easter-egg' ? 2 : 3,
              title: `${label} ${i + 1}: ${stripRefs(st.t)}`, sub: `${map.name} · ${it.name}`,
              href: `#/${game}/${map.id}/${it.tab}/${it.id}-${listKey}-${i + 1}`,
              text: `${stripRefs(st.t)} ${it.name} ${map.name}`.toLowerCase(),
            });
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

      const json = JSON.stringify(map.items, (k, v) => (k === 'map' ? undefined : v));
      for (const m of json.matchAll(/\{\{([a-z0-9-]+)/g)) {
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

  function figures(imgs) {
    if (!imgs || !imgs.length) return '';
    return `<div class="figs">${imgs.map(im => {
      const o = typeof im === 'string' ? { src: im } : im;
      return `<figure class="fig${o.wide ? ' wide' : ''}"><button type="button" class="zoom" data-full="${esc(o.src)}" data-cap="${esc(o.cap || '')}">` +
        `<img loading="lazy" decoding="async" src="${esc(o.src)}" alt="${esc(o.cap || '')}"></button>` +
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
        <div class="part-head">${p.icon ? `<button type="button" class="zoom part-icon" data-full="${esc(p.icon)}" data-cap="${esc(p.name)}"><img src="${esc(p.icon)}" alt="${esc(p.name)}" loading="lazy"></button>` : ''}
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

  function countDone(prefix, n) {
    let c = 0;
    for (let i = 0; i < n; i++) if (isDone(prefix + i)) c++;
    return c;
  }

  function stepVideo(item, listKey) {
    if (listKey === 'upgrade' && item.upgrade && item.upgrade.video) return item.upgrade.video;
    return item.video || asArray(item.videos)[0];
  }

  function stepHtml(map, item, listKey, st, i, opts) {
    const key = listPrefix(map, item, listKey) + i;
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
        ${st.lookup ? lookupHtml(st.lookup) : ''}
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
    const done = countDone(prefix, n);
    const order = listOrder(item, listKey);
    return `<section class="checklist${order === 'any' ? ' order-any' : ''}" data-prefix="${esc(prefix)}" data-total="${n}">
      <div class="checklist-head">
        <h4>${esc(title)}</h4>
        ${ORDER_CHIP[order] || ''}
        <div class="progress" aria-label="Progress"><div class="bar"><span style="width:${n ? Math.round(done / n * 100) : 0}%"></span></div><span class="count">${done}/${n}</span></div>
        <button type="button" class="link-btn" data-reset="${esc(prefix)}" data-total="${n}">Reset</button>
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
  function lookupHtml(lk) {
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
      ${lk.source ? `<p class="lookup-source">${fmt(lk.source)}</p>` : ''}
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
      if (b.lookup) return lookupHtml(b.lookup);
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
        ${u.img ? `<button type="button" class="zoom upgrade-img" data-full="${esc(u.img)}" data-cap="${esc(u.name)}"><img src="${esc(u.img)}" alt="" loading="lazy"></button>` : ''}
        <div><div class="item-type">Upgrade</div><h4 class="upgrade-name">${esc(u.name)}</h4>${u.aka ? `<div class="item-aka">${esc(u.aka)}</div>` : ''}${u.summary ? `<p>${fmt(u.summary, map)}</p>` : ''}</div>
      </div>
      ${checklistHtml(map, item, 'upgrade', u.steps, u.stepsTitle || 'Upgrade steps', opts)}
      ${blocksHtml(map, u.blocks)}
      ${videoHtml(u.video)}
    </section>`;
  }

  function itemHtml(map, item, opts = {}) {
    const imgBtn = item.img
      ? `<button type="button" class="zoom item-img" data-full="${esc(item.img)}" data-cap="${esc(item.name)}"><img src="${esc(item.img)}" alt="${esc(item.name)}" loading="lazy" decoding="async"></button>`
      : '';
    return `<article class="item${opts.drawer ? ' in-drawer' : ''}${item.img ? '' : ' no-img'}"${opts.drawer ? '' : ` id="item-${esc(item.id)}"`} style="${colorVar(item)}">
      <header class="item-head">
        ${imgBtn}
        <div class="item-titles">
          ${item.type ? `<div class="item-type">${esc(item.type)}</div>` : ''}
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

  function eeProgress(map) {
    const ee = map.items.find(i => i.tab === 'easter-egg' && i.steps);
    if (!ee) return null;
    const prefix = listPrefix(map, ee, 'steps');
    return { done: countDone(prefix, ee.steps.length), total: ee.steps.length };
  }

  function playerBadge(map) {
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
      <p><a class="btn" href="#/bo3">${ICON.arrow} Go to Black Ops III</a></p></div></section>`;
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
          ${hasPartVideos ? `<div class="callout note">${ICON.play}<div>The pictures show what each part looks like. <strong>Watch these spots</strong> ${CAN_EMBED ? 'plays the part of a guide video that walks through every spawn spot, right here on the page' : 'opens a guide video at the moment it walks through that part\'s spawn spots'}.</div></div>` : ''}
          ${items.map(it => itemHtml(map, it)).join('')}
        </div>
        ${toc ? `<aside class="toc" aria-label="On this page"><div class="toc-inner"><div class="toc-h">On this page</div>${toc}</div></aside>` : ''}
      </div>
      ${tabId === 'easter-egg' ? `<button type="button" class="fab" id="next-step">${ICON.down}<span>Next step</span></button>` : ''}`;
  }

  function renderNotFound() {
    document.title = 'Not found — Zombies Field Guide';
    return `<section class="page-hero"><div class="wrap"><h1>Page not found</h1><p class="lede">That page doesn't exist.</p><p><a class="btn" href="#/bo3">${ICON.arrow} Back to Black Ops III</a></p></div></section>`;
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
    return '#/bo3';
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
    if (!parts.length) { go('#/bo3', true); return; }
    const [g, m, t, anchor] = parts;
    const game = ZG.games.find(x => x.id === g);
    const map = game && m ? ZG.maps[`${g}/${m}`] : null;
    const key = [g, m || '', m ? (t || 'start') : ''].join('/');
    const main = $('#main');

    if (renderedKey !== key) {
      const prevMap = renderedKey && renderedKey.split('/').slice(0, 2).join('/');
      renderGameTabs(g);
      if (!game) main.innerHTML = renderNotFound();
      else if (!m) main.innerHTML = game.active ? renderGame(game) : renderSoon(game);
      else if (!map) main.innerHTML = renderNotFound();
      else main.innerHTML = renderMap(map, t || 'start');
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
      const n = +cl.dataset.total;
      const done = countDone(cl.dataset.prefix, n);
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
  }

  function eeStepsOnPage() {
    return $$('#main .content[data-tab="easter-egg"] .step');
  }

  function updateFab() {
    const fab = $('#next-step');
    if (!fab) return;
    const next = eeStepsOnPage().find(s => !s.classList.contains('done'));
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

  function applyCloud(mk, done) {
    const prefix = `zg:${mk}:`;
    for (const k of store.keys()) if (k.startsWith(prefix) && !done[k.slice(prefix.length)]) store.del(k);
    for (const sub of Object.keys(done)) store.set(prefix + sub, '1');
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
      const seen = new Set();
      for (const d of snap.docs) {
        if (!d.exists) continue;
        const mk = mapKeyForDoc(d.id);
        if (!mk) continue;
        seen.add(mk);
        if (!cloud.dirty[mk]) applyCloud(mk, (d.data() || {}).done || {});
      }
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
  function runSearch(q) {
    const box = $('#search-results');
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) { box.hidden = true; box.innerHTML = ''; return; }
    const phrase = words.join(' ');
    // Within a rank, titles that match the query exactly come first, then titles that start with it.
    const titleScore = e => {
      const t = e.title.toLowerCase();
      return t === phrase ? 0 : t.startsWith(phrase) ? 1 : t.includes(phrase) ? 2 : 3;
    };
    const hits = searchIndex
      .filter(e => words.every(w => e.text.includes(w)))
      .sort((a, b) => a.rank - b.rank || titleScore(a) - titleScore(b))
      .slice(0, 14);
    box.innerHTML = hits.length
      ? hits.map(h => `<a class="search-hit" role="option" href="${h.href}"><strong>${esc(h.title)}</strong><span>${esc(h.sub)}</span></a>`).join('')
      : '<div class="search-empty">No matches</div>';
    box.hidden = false;
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
        for (let i = 0; i < +reset.dataset.total; i++) store.del(prefix + i);
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
        const next = eeStepsOnPage().find(s => !s.classList.contains('done'));
        if (next) scrollToAnchor(next.id);
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
      if (e.key === 'Enter') {
        const first = $('#search-results .search-hit');
        if (first) first.click();
      }
    });

    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      if (mq.addEventListener) mq.addEventListener('change', syncThemeButton);
    }
  }

  buildIndex();
  bind();
  syncThemeButton();
  setSyncStatus('local');
  current = initialHash();
  try { history.replaceState(null, '', current); } catch (e) { historyWorks = false; }
  route();
  initCloud();
})();
