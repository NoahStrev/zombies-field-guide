/* YouTube helpers for finding watch times and making stills from guide videos.
   Open any YouTube watch page (signed out is fine), paste this whole file into the console
   (or run it with the browser tool), then call the functions below. They load other videos
   into the same player, so the page never navigates away.

   Transcripts (to find the second a step or spot is narrated):
     await zgCap('VIDEO_ID')                     -> { title, dur, tx }  tx = "seconds: text" lines
     await zgFind('VIDEO_ID', 'regex', from, to) -> JSON of the matching transcript lines only
   Frames (for spot pictures):
     await zgGrab('VIDEO_ID', [61, 65, 70])      -> grabs those seconds into zgC['VIDEO_ID@61'] ...
     zgSheet2(zgKeys('VIDEO_ID', [61, 65, 70]), 4) draws a contact sheet over the page;
     zgShow2('VIDEO_ID@61') draws one frame full size; zgHide() removes the overlay.
   Then take a browser screenshot. With the viewport set to 1280x720 a full-size frame
   screenshots at 800x455; crop it to 800x450 for the site (16:9).

   Gotchas:
   - Run one zgCap/zgFind/zgGrab per tool call: a loop over several videos can pass the
     browser tool's time limit and abort. zgGrab skips frames after about 36 seconds.
   - Mid-roll ads: zgGrab waits while an ad is showing and clicks Skip.
   - In a hidden browser pane the first screenshot after redrawing can be stale or tiled:
     redraw and take it again.
   - Auto captions mishear names; check the frame before trusting a spot. */
window.zgC = window.zgC || {};
window.zgTxUrls = window.zgTxUrls || [];
(() => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  window.wait = wait;
  const hq = p => { try { p.setPlaybackQualityRange('hd1080', 'hd1080'); } catch (e) {} };
  if (!window.zgHooked) {
    window.zgHooked = true;
    const oo = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (m, u) { try { if (String(u).includes('timedtext')) zgTxUrls.push(String(u)); } catch (e) {} return oo.apply(this, arguments); };
    const of = window.fetch;
    window.fetch = function (input, init) { try { const u = typeof input === 'string' ? input : (input && input.url); if (u && u.includes('timedtext')) zgTxUrls.push(u); } catch (e) {} return of.apply(this, arguments); };
  }
  window.zgLoad = async id => {
    const p = document.getElementById('movie_player');
    if (p.getVideoData().video_id === id) { hq(p); return; }
    p.loadVideoById({ videoId: id, startSeconds: 1 });
    try { p.mute(); } catch (e) {}
    for (let i = 0; i < 60 && p.getVideoData().video_id !== id; i++) await wait(250);
    await wait(2500);
    hq(p);
  };
  window.zgAdWait = async () => {
    const v = document.querySelector('video.html5-main-video');
    for (let i = 0; i < 70 && document.querySelector('.ad-showing'); i++) {
      document.querySelector('.ytp-skip-ad-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button')?.click();
      try { v.muted = true; v.play(); } catch (e) {}
      await wait(500);
    }
    return !document.querySelector('.ad-showing');
  };
  window.zgGrab = async (id, times) => {
    const t0 = Date.now();
    await zgLoad(id); await zgAdWait();
    const p = document.getElementById('movie_player');
    const v = document.querySelector('video.html5-main-video');
    const res = [];
    for (const t of times) {
      if (Date.now() - t0 > 36000) { res.push(t + ':SKIPPED(time)'); continue; }
      for (let attempt = 0; attempt < 3; attempt++) {
        await zgAdWait();
        p.seekTo(t, true); p.playVideo();
        for (let i = 0; i < 30 && (v.seeking || v.readyState < 3 || Math.abs(v.currentTime - t) > 2); i++) await wait(200);
        await wait(500);
        if (document.querySelector('.ad-showing')) continue;
        p.pauseVideo(); p.seekTo(t, true);
        for (let i = 0; i < 30 && (v.seeking || v.readyState < 2); i++) await wait(200);
        await wait(300);
        if (document.querySelector('.ad-showing')) continue;
        const c = document.createElement('canvas'); c.width = v.videoWidth || 1280; c.height = v.videoHeight || 720;
        c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
        zgC[`${id}@${t}`] = c;
        res.push(`${t}:${v.currentTime.toFixed(1)}/${v.videoHeight}`);
        break;
      }
    }
    return res.join(' ');
  };
  window.zgOverlay = () => {
    let o = document.getElementById('zg-still');
    if (!o) { o = document.createElement('canvas'); o.id = 'zg-still'; document.body.appendChild(o); }
    Object.assign(o.style, { position: 'fixed', left: '0', top: '0', width: innerWidth + 'px', height: innerHeight + 'px', background: '#000', zIndex: 2147483646 });
    o.width = innerWidth; o.height = innerHeight;
    return o;
  };
  window.zgSheet2 = (keys, cols) => {
    const o = zgOverlay(), g = o.getContext('2d');
    g.fillStyle = '#000'; g.fillRect(0, 0, o.width, o.height);
    const rows = Math.ceil(keys.length / cols);
    const tw = Math.floor(o.width / cols), th = Math.floor(o.height / rows);
    keys.forEach((k, i) => {
      const x = (i % cols) * tw, y = Math.floor(i / cols) * th, c = zgC[k];
      if (c) g.drawImage(c, x + 1, y + 1, tw - 2, th - 2);
      g.fillStyle = 'rgba(0,0,0,.7)'; g.fillRect(x + 2, y + 2, 64, 22);
      g.fillStyle = '#ff0'; g.font = 'bold 18px sans-serif'; g.fillText(k.split('@')[1], x + 6, y + 19);
    });
    return `${keys.length} tiles`;
  };
  window.zgShow2 = k => { const o = zgOverlay(); o.getContext('2d').drawImage(zgC[k], 0, 0, o.width, o.height); return k; };
  window.zgHide = () => { const o = document.getElementById('zg-still'); if (o) o.remove(); };
  window.zgRange = (a, b, s) => { const r = []; for (let t = a; t <= b; t += s) r.push(t); return r; };
  window.zgKeys = (id, ts) => ts.map(t => `${id}@${t}`);
  window.zgTxRead = async (id, block = 6) => {
    const u = zgTxUrls.filter(x => x.includes('v=' + id)).pop();
    if (!u) return 'none';
    const url = new URL(u, location.href); url.searchParams.set('fmt', 'json3');
    const ctl = new AbortController(); setTimeout(() => ctl.abort(), 15000);
    const j = await (await fetch(url.toString(), { signal: ctl.signal })).json();
    const out = []; let cur = [], start = null;
    for (const ev of j.events || []) {
      const txt = (ev.segs || []).map(s => s.utf8 || '').join('').replace(/\n/g, ' ').trim();
      if (!txt) continue;
      const s = Math.floor((ev.tStartMs || 0) / 1000);
      if (start === null) start = s;
      if (s - start >= block && cur.length) { out.push(`${start}: ${cur.join(' ')}`); cur = []; start = s; }
      cur.push(txt);
    }
    if (cur.length) out.push(`${start}: ${cur.join(' ')}`);
    return out.join('\n');
  };
  window.zgCap = async (id, block = 6) => {
    const p = document.getElementById('movie_player');
    zgTxUrls.length = 0;
    p.loadVideoById(id); try { p.mute(); } catch (e) {}
    await wait(3500);
    try { p.unloadModule('captions'); } catch (e) {}
    await wait(400);
    try { p.loadModule('captions'); p.setOption('captions', 'track', { languageCode: 'en' }); } catch (e) {}
    for (let i = 0; i < 20 && !zgTxUrls.some(u => u.includes('v=' + id)); i++) await wait(300);
    return { title: p.getVideoData().title, dur: Math.round(p.getDuration()), tx: await zgTxRead(id, block) };
  };
  window.zgFind = async (id, re, from = 0, to = 1e9, block = 6) => {
    const r = await zgCap(id, block);
    const L = String(r.tx).split('\n').filter(l => {
      const s = +l.split(':')[0];
      return s >= from && s <= to && (!re || new RegExp(re, 'i').test(l));
    });
    return JSON.stringify({ t: r.title.slice(0, 70), d: r.dur, n: L.length, L: L.map(l => l.slice(0, 210)).slice(0, 24) });
  };
})();
'ready'
