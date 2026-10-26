/* Caption grabber. Open any YouTube watch page, paste this into the console, then run
     await zgCaptions(['videoId1', 'videoId2', ...])
   (about 5 seconds per video; do a few at a time). It returns one line per video:
     id|ei|xoaf|expire|signature|pot
   Paste the lines into tools/.cache/captions.txt and run `python -X utf8 tools/zg.py captions`.
   The links expire after a few hours. YouTube's page blocks sending data to localhost,
   which is why the lines are copied by hand. */
(() => {
  const urls = [];
  const open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (m, u, ...rest) { if (String(u).includes('timedtext')) urls.push(String(u)); return open.call(this, m, u, ...rest); };
  const origFetch = window.fetch;
  window.fetch = function (...a) { try { const u = (a[0] && a[0].url) || String(a[0]); if (u.includes('timedtext')) urls.push(u); } catch (e) {} return origFetch.apply(this, a); };
  const wait = ms => new Promise(r => setTimeout(r, ms));

  async function grab(id) {
    const p = document.getElementById('movie_player');
    urls.length = 0;
    p.loadVideoById(id);
    try { p.mute(); } catch (e) {}
    await wait(3200);
    try { p.unloadModule('captions'); } catch (e) {}
    await wait(400);
    try { p.loadModule('captions'); p.setOption('captions', 'track', { languageCode: 'en' }); } catch (e) {}
    for (let i = 0; i < 20 && !urls.some(u => u.includes('v=' + id)); i++) await wait(300);
    const u = urls.filter(x => x.includes('v=' + id)).pop();
    if (!u) return id + '|NONE';
    const q = new URL(u, location.href).searchParams;
    return ['v', 'ei', 'xoaf', 'expire', 'signature', 'pot'].map(n => q.get(n)).join('|');
  }

  window.zgCaptions = async ids => {
    const lines = [];
    for (const id of ids) lines.push(await grab(id));
    try { document.getElementById('movie_player').pauseVideo(); } catch (e) {}
    return lines.join('\n');
  };
})();
