"""Zombies Field Guide maintenance tool. Run from the project folder:

    python -X utf8 tools/zg.py <command> [args]

Research
  wiki-fetch PAGE...            Save Call of Duty Wiki pages (wikitext) to the cache and list their sections
  wiki-show PAGE [SECTION...]   Print a cached page (or just some sections) as readable text
  wiki-images PAGE... [--all]   List the images used on wiki pages, with sizes
  get-images DEST NAME=FILE...  Download wiki images as WebP into assets/img/DEST/ (NAME@1400=FILE sets the max width)
  yt-search QUERY...            Search YouTube (title, length, channel, views)
  yt-info ID...                 Video title, channel, length, embeddable?, English captions, chapters
  captions                      Download captions listed in tools/.cache/captions.txt to tools/.cache/tx/<id>.txt

Checking (after exporting the site data with tools/browser/export.js)
  receiver                      Local server on 127.0.0.1:8099 that saves POSTs from the site to tools/.cache/<name>.json
  audit [PREFIX]                Images exist, videos play and embed, timestamps fit, declared lengths match
  verify PREFIX [--all]         Pair every "watch" timestamp with what the video says at that moment
  retitled [REF]                Step titles in data/ that existed at git REF (default HEAD) but are gone now.
                                Ticks are saved under the title, so a reworded step needs key: '<old slug>'

Publishing
  build-artifact [--since REF] [--mirror]
                                Build the hosted (claude.ai) page and print the files to publish
                                (all files, or only those changed since git REF). --mirror also
                                copies css/js/hero banners into tools/.cache/artifact for a local test.
"""
import base64, io, json, os, re, shutil, subprocess, sys, time, unicodedata, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / "tools" / ".cache"
WIKI = CACHE / "wiki"
TX = CACHE / "tx"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9"}
WIKI_UA = {"User-Agent": "Mozilla/5.0 (ZombiesFieldGuide research)"}


def get(url, headers=UA, timeout=60, tries=4):
    for attempt in range(tries):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=timeout).read()
        except Exception as e:
            if attempt == tries - 1:
                raise
            print("  retry:", e)
            time.sleep(3 + attempt * 3)


def wiki_api(params):
    url = "https://callofduty.fandom.com/api.php?" + urllib.parse.urlencode({**params, "format": "json"})
    return json.loads(get(url, WIKI_UA))


def safe_name(page):
    return re.sub(r"[^A-Za-z0-9_-]+", "_", page)


# ---------------------------------------------------------------- wiki
def wiki_fetch(pages):
    WIKI.mkdir(parents=True, exist_ok=True)
    for page in pages:
        d = wiki_api({"action": "parse", "page": page, "prop": "wikitext", "redirects": 1})
        if "error" in d:
            print("ERR", page, d["error"]["info"]); continue
        text = d["parse"]["wikitext"]["*"]
        f = WIKI / (safe_name(page) + ".txt")
        f.write_text(text, encoding="utf-8")
        print(f"== {d['parse']['title']} ({len(text)} chars) -> {f.name}")
        for m in re.finditer(r"^(=+)\s*(.*?)\s*=+\s*$", text, re.M):
            if len(m.group(1)) <= 3:
                print("   " * (len(m.group(1)) - 2) + "- " + m.group(2))


def clean(t):
    t = re.sub(r"<ref[^>/]*/>", "", t)
    t = re.sub(r"<ref[^>]*>.*?</ref>", "", t, flags=re.S)
    t = re.sub(r"<!--.*?-->", "", t, flags=re.S)
    t = re.sub(r"\[\[(?:File|Image):([^|\]]+)[^\]]*(?:\[\[[^\]]*\]\][^\]]*)*\]\]", r"[IMG:\1]", t)
    t = re.sub(r"\[\[[^\]|]*\|([^\]]*)\]\]", r"\1", t)
    t = re.sub(r"\[\[([^\]]*)\]\]", r"\1", t)
    t = re.sub(r"\[https?://\S+ ([^\]]*)\]", r"\1", t)
    t = t.replace("'''", "").replace("''", "")
    t = re.sub(r"<br\s*/?>", " / ", t)
    t = re.sub(r"\{\{Quote\|.*?\}\}", "", t, flags=re.S)
    return re.sub(r"\n\s*\n+", "\n", t)


def wiki_show(args):
    page, sections = args[0], args[1:]
    f = WIKI / (safe_name(page.removesuffix(".txt")) + ".txt")
    if not f.exists():
        wiki_fetch([page])
    text = f.read_text(encoding="utf-8")
    if not sections:
        print(clean(text)); return
    heads = list(re.finditer(r"^(=+)\s*(.*?)\s*=+\s*$", text, re.M))
    for name in sections:
        for i, m in enumerate(heads):
            if m.group(2).strip().lower() == name.lower():
                end = next((n.start() for n in heads[i + 1:] if len(n.group(1)) <= len(m.group(1))), len(text))
                print(clean(text[m.start():end])); break
        else:
            print(f"[no section {name}]")


SKIP_IMG = re.compile(r"menu icon|HUD|Achievement|Trophy|Logo|\.ogg$|\.mp3$|\.flac$|\.gif$|Flag|Emblem|Calling Card|Prestige|Rank|topright|top right|Ztr\.png|Quotation", re.I)


def wiki_images(args):
    show_all = "--all" in args
    for page in [a for a in args if not a.startswith("--")]:
        d = wiki_api({"action": "parse", "page": page, "prop": "images", "redirects": 1})
        imgs = [i.replace("_", " ") for i in d.get("parse", {}).get("images", [])]
        names = [i for i in imgs if show_all or not SKIP_IMG.search(i)]
        print("==", page, len(imgs), "images,", len(names), "shown")
        for i in range(0, len(names), 40):
            q = wiki_api({"action": "query", "titles": "|".join("File:" + n for n in names[i:i + 40]), "prop": "imageinfo", "iiprop": "size"})
            for p in q["query"]["pages"].values():
                ii = (p.get("imageinfo") or [{}])[0]
                print(f"   {ii.get('width', '?')}x{ii.get('height', '?')}  {p['title'][5:]}")


def get_images(args):
    from PIL import Image
    dest = ROOT / "assets" / "img" / args[0]
    dest.mkdir(parents=True, exist_ok=True)
    for arg in args[1:]:
        key, wiki_file = arg.split("=", 1)
        name, _, w = key.partition("@")
        width = int(w or 1000)
        out = dest / (name + ".webp")
        if out.exists():
            print("have", out.relative_to(ROOT)); continue
        d = wiki_api({"action": "query", "titles": "File:" + wiki_file, "prop": "imageinfo", "iiprop": "url|size", "iiurlwidth": width})
        ii = (next(iter(d["query"]["pages"].values())).get("imageinfo") or [None])[0]
        if not ii:
            print("MISSING", wiki_file); continue
        try:
            raw = get(ii["thumburl"] if ii.get("width", 0) > width else ii["url"], WIKI_UA)
        except Exception as e:
            print("FAILED", wiki_file, e); continue
        im = Image.open(io.BytesIO(raw))
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA")
        if im.width > width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        im.save(out, "WEBP", quality=82, method=6)
        print(f"ok {out.relative_to(ROOT)} {im.width}x{im.height} {out.stat().st_size // 1024}KB")


# ---------------------------------------------------------------- youtube
def player_response(vid):
    html = get("https://www.youtube.com/watch?v=" + vid).decode("utf-8", "ignore")
    m = re.search(r"ytInitialPlayerResponse\s*=\s*(\{.*?\});(?:var|</script>)", html)
    return json.loads(m.group(1)) if m else {}


def yt_search(queries):
    for q in queries:
        html = get("https://www.youtube.com/results?" + urllib.parse.urlencode({"search_query": q})).decode("utf-8", "ignore")
        m = re.search(r"var ytInitialData = (\{.*?\});</script>", html)
        print("==", q)
        if not m:
            print("  no data"); continue
        found = []

        def walk(o):
            if isinstance(o, dict):
                if "videoRenderer" in o:
                    v = o["videoRenderer"]
                    found.append((v["videoId"], v.get("lengthText", {}).get("simpleText", ""),
                                  "".join(r.get("text", "") for r in v.get("ownerText", {}).get("runs", [])),
                                  v.get("viewCountText", {}).get("simpleText", ""),
                                  "".join(r.get("text", "") for r in v.get("title", {}).get("runs", []))))
                for x in o.values():
                    walk(x)
            elif isinstance(o, list):
                for x in o:
                    walk(x)
        walk(json.loads(m.group(1)))
        for f in found[:8]:
            print("  ", f[0], "|", f[1], "|", f[2], "|", f[3], "|", f[4][:90])


def yt_info(ids):
    for vid in ids:
        try:
            d = player_response(vid)
        except Exception as e:
            print(vid, "ERR", e); continue
        vd, ps = d.get("videoDetails", {}), d.get("playabilityStatus", {})
        tracks = d.get("captions", {}).get("playerCaptionsTracklistRenderer", {}).get("captionTracks", [])
        en = [t["languageCode"] + ("(auto)" if t.get("kind") == "asr" else "") for t in tracks if t.get("languageCode", "").startswith("en")]
        n = int(vd.get("lengthSeconds") or 0)
        print(f"{vid} | {ps.get('status')} | {'embeds' if ps.get('playableInEmbed') else 'NO EMBED'} | {n // 60}:{n % 60:02d} | {en} | {vd.get('author')} | {vd.get('title', '')[:70]}")
        for line in vd.get("shortDescription", "").splitlines():
            if re.match(r"^\s*\(?\d{1,2}:\d{2}", line):
                print("     ", line.strip()[:100])


def captions():
    """Each line of tools/.cache/captions.txt: id|ei|xoaf|expire|signature|pot (from tools/browser/captions.js)."""
    TX.mkdir(parents=True, exist_ok=True)
    for line in (CACHE / "captions.txt").read_text(encoding="utf-8").splitlines():
        parts = line.strip().split("|")
        if len(parts) < 6:
            continue
        vid, ei, xoaf, expire, sig, pot = parts[:6]
        q = urllib.parse.urlencode({"v": vid, "ei": ei, "caps": "asr", "opi": "112496729", "exp": "xpe", "xoaf": xoaf, "xowf": "1",
                                    "hl": "en", "ip": "0.0.0.0", "ipbits": "0", "expire": expire,
                                    "sparams": "ip,ipbits,expire,v,ei,caps,opi,exp,xoaf", "signature": sig, "key": "yt8",
                                    "kind": "asr", "lang": "en", "potc": "1", "pot": pot})
        try:
            j = json.loads(get("https://www.youtube.com/api/timedtext?" + q + "&fmt=json3&c=WEB&cver=2.20261023.01.00", tries=2))
        except Exception as e:
            print(vid, "ERR", e); continue
        blocks, cur, start = [], [], None
        for ev in j.get("events", []):
            txt = "".join(s.get("utf8", "") for s in ev.get("segs") or []).replace("\n", " ").strip()
            if not txt:
                continue
            t = ev.get("tStartMs", 0) // 1000
            if start is None:
                start = t
            if t - start >= 15 and cur:
                blocks.append((start, " ".join(cur))); cur, start = [], t
            cur.append(txt)
        if cur:
            blocks.append((start, " ".join(cur)))
        with open(TX / (vid + ".txt"), "w", encoding="utf-8") as f:
            for s, txt in blocks:
                f.write(f"{s} [{s // 60}:{s % 60:02d}] {re.sub(r'  +', ' ', txt)}\n")
        print(vid, len(blocks), "blocks")


# ---------------------------------------------------------------- checking
def receiver():
    import http.server
    CACHE.mkdir(parents=True, exist_ok=True)

    class H(http.server.BaseHTTPRequestHandler):
        def cors(self):
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            self.send_header("Access-Control-Allow-Private-Network", "true")

        def do_OPTIONS(self):
            self.send_response(204); self.cors(); self.end_headers()

        def do_POST(self):
            name = re.sub(r"[^A-Za-z0-9_-]", "", self.path.strip("/")) or "post"
            body = self.rfile.read(int(self.headers.get("Content-Length", 0)))
            (CACHE / (name + ".json")).write_bytes(body)
            self.send_response(200); self.cors(); self.end_headers(); self.wfile.write(b"ok")
            print("saved", name, len(body), flush=True)

        def log_message(self, *a):
            pass

    print("listening on http://127.0.0.1:8099 (Ctrl+C to stop)")
    http.server.HTTPServer(("127.0.0.1", 8099), H).serve_forever()


def load_export():
    f = CACHE / "export.json"
    if not f.exists():
        sys.exit("No tools/.cache/export.json yet: run `zg.py receiver`, then paste tools/browser/export.js into the site's console.")
    return json.loads(f.read_text(encoding="utf-8"))


def video_info(vid, cache):
    if vid not in cache:
        try:
            d = player_response(vid)
            ps, vd = d.get("playabilityStatus", {}), d.get("videoDetails", {})
            cache[vid] = {"status": ps.get("status"), "embed": ps.get("playableInEmbed"), "len": int(vd.get("lengthSeconds") or 0),
                          "author": vd.get("author"), "title": vd.get("title")}
        except Exception as e:
            return {"status": "ERR " + str(e)}
    return cache[vid]


def js_string_problems(path):
    """Cheap syntax guard for the data files (no Node here): a quote that closes a
    string and is followed straight away by a letter, digit or another quote is
    almost always an unescaped apostrophe, e.g. 'Once it's trapped'."""
    text, out, i, n, line = path.read_text(encoding="utf-8"), [], 0, 0, 1
    n = len(text)

    def scan_string(i, q, line):
        start = line
        i += 1
        while i < n:
            c = text[i]
            if c == "\\":
                i += 2
                continue
            if c == "\n":
                if q != "`":
                    out.append(f"line {start}: string not closed before the end of the line")
                    return i, line
                line += 1
            elif q == "`" and text.startswith("${", i):
                depth, i = 1, i + 2
                while i < n and depth:
                    if text[i] in "'\"`":
                        i, line = scan_string(i, text[i], line)
                        continue
                    depth += {"{": 1, "}": -1}.get(text[i], 0)
                    line += text[i] == "\n"
                    i += 1
                continue
            elif c == q:
                j = i + 1
                while j < n and text[j] in " \t":
                    j += 1
                if j < n and (text[j].isalnum() or text[j] in "_$'\"`"):
                    out.append(f"line {line}: text runs on after a closing quote (unescaped apostrophe?)")
                return i + 1, line
            i += 1
        out.append(f"line {start}: string never closed")
        return i, line

    while i < n:
        c = text[i]
        if text.startswith("//", i):
            i = text.find("\n", i)
            i = n if i < 0 else i
        elif text.startswith("/*", i):
            j = text.find("*/", i + 2)
            j = n if j < 0 else j + 2
            line += text.count("\n", i, j)
            i = j
        elif c in "'\"`":
            i, line = scan_string(i, c, line)
        else:
            line += c == "\n"
            i += 1
    return out


def audit(args):
    only = args[0] if args else None
    data = load_export()
    problems, videos, watch = [], {}, []
    bad = lambda m, msg: problems.append(f"[{m}] {msg}")
    on_disk = set()
    for f in sorted(ROOT.glob("data/*/*.js")):
        key = f"{f.parent.name}/{f.stem}"
        on_disk.add(key)
        if only and not key.startswith(only):
            continue
        for msg in js_string_problems(f):
            bad(key, f"syntax: {msg}")
    for key in sorted(on_disk - {m["key"] for m in data["maps"]}):
        if not only or key.startswith(only):
            bad(key, "missing from the export: it failed to load, or the export is out of date")
    for m in data["maps"]:
        k = m["key"]
        if only and not k.startswith(only):
            continue
        imgs = [m["hero"]]
        ids = [it["id"] for it in m["items"]]
        for d in {i for i in ids if ids.count(i) > 1}:
            bad(k, f"duplicate item id {d}")
        for it in m["items"]:
            imgs += [it["img"], (it.get("upgrade") or {}).get("img")] + it["blocksImgs"]
            for v in [it["video"], (it.get("upgrade") or {}).get("video")] + (it["videos"] or []):
                if v and v.get("id"):
                    videos.setdefault(v["id"], set()).add(k)
            for p in it["parts"]:
                imgs.append(p["icon"])
                if p["w"] is not None:
                    vid, t = (p["w"] if isinstance(p["w"], list) else [(it["video"] or {}).get("id"), p["w"]])
                    if not vid:
                        bad(k, f"{it['id']} part {p['name']}: w without a video")
                    watch.append((k, it["id"], "part", p["name"], p["name"], vid, t))
            for lst in it["lists"]:
                for i, s in enumerate(lst["steps"]):
                    imgs += s["imgs"]
                    if s["w"] is not None:
                        vid, t = (s["w"] if isinstance(s["w"], list) else [lst["defVideo"], s["w"]])
                        if not vid:
                            bad(k, f"{it['id']} {lst['list']}#{i + 1}: w without a video")
                        watch.append((k, it["id"], lst["list"], i + 1, s["t"], vid, t))
                    txt = " ".join(x for x in [s["t"], s["d"], s["tip"], s["warn"]] + (s["list"] or []) if isinstance(x, str) and x)
                    if txt.count("**") % 2:
                        bad(k, f"{it['id']} {lst['list']}#{i + 1}: unbalanced ** markers")
                    if "  " in txt:
                        bad(k, f"{it['id']} {lst['list']}#{i + 1}: double space")
        for p in imgs:
            if p and not (ROOT / p).exists():
                bad(k, f"missing image {p}")
    cache_f = CACHE / "vidinfo.json"
    cache = json.loads(cache_f.read_text()) if cache_f.exists() else {}
    all_vids = sorted(set(videos) | {w[5] for w in watch if w[5]})
    print("videos:", len(all_vids), "watch points:", len(watch))
    infos = {v: video_info(v, cache) for v in all_vids}
    cache_f.write_text(json.dumps(cache))
    for v, inf in infos.items():
        where = ",".join(sorted(videos.get(v, {"?"})))
        if inf.get("status") != "OK":
            bad(where, f"video {v} status {inf.get('status')}")
        elif inf.get("embed") is False:
            bad(where, f"video {v} can't be embedded")
    for (k, iid, lst, idx, title, vid, t) in watch:
        n = (infos.get(vid) or {}).get("len")
        if n and t >= n:
            bad(k, f"{iid} {lst}#{idx} '{title[:40]}': t={t} is past the end ({n}s)")
    for m in data["maps"]:
        for it in m["items"]:
            for v in [it["video"], (it.get("upgrade") or {}).get("video")] + (it["videos"] or []):
                real = (infos.get((v or {}).get("id")) or {}).get("len")
                if v and v.get("len") and real:
                    parts = [int(x) for x in v["len"].split(":")]
                    secs = parts[-1] + parts[-2] * 60 + (parts[-3] * 3600 if len(parts) == 3 else 0)
                    if abs(secs - real) > 2:
                        bad(m["key"], f"{it['id']} video {v['id']} says {v['len']} but is {real // 60}:{real % 60:02d}")
    (CACHE / "watch.json").write_text(json.dumps(watch))
    print("\n".join(problems) if problems else "no problems")


STOP = set("the a an and or to of in on at for with your you it is be this that from by as are then until into up out one two three get go its all any".split())


def verify(args):
    prefix, show_all = args[0], "--all" in args
    watch_f = CACHE / "watch.json"
    if not watch_f.exists():
        sys.exit("Run `zg.py audit` first.")
    data = load_export()
    desc = {}
    for m in data["maps"]:
        for it in m["items"]:
            for lst in it["lists"]:
                for i, s in enumerate(lst["steps"]):
                    desc[(m["key"], it["id"], lst["list"], i + 1)] = " ".join(x for x in [s["t"], s["d"]] + (s["list"] or []) if isinstance(x, str) and x)
            for p in it["parts"]:
                desc[(m["key"], it["id"], "part", p["name"])] = p["name"] + " " + p["area"] + " " + " ".join(x if isinstance(x, str) else json.dumps(x) for x in p["spots"])
    words = lambda s: {w for w in re.findall(r"[a-z]{4,}", s.lower()) if w not in STOP}
    rows_by_vid, out = {}, []
    for (k, iid, lst, idx, title, vid, t) in json.loads(watch_f.read_text()):
        if not k.startswith(prefix):
            continue
        if vid not in rows_by_vid:
            f = TX / (vid + ".txt")
            rows_by_vid[vid] = [(int(m.group(1)), m.group(2)) for m in (re.match(r"(\d+) \[[^\]]+\] (.*)", l.strip()) for l in
                                (f.read_text(encoding="utf-8").splitlines() if f.exists() else [])) if m]
        rows = rows_by_vid[vid]
        if not rows:
            out.append(f"!! {k} {iid} {lst}#{idx}: no captions for {vid} (run `captions` first)"); continue
        window = " ".join(txt for (s, txt) in rows if s + 15 > t and s <= t + 35)
        score = len(words(desc.get((k, iid, lst, idx), title)) & words(window))
        if show_all or score < 2:
            out.append(f"[{score}] {k} | {iid} {lst}#{idx} @ {vid}:{t} ({t // 60}:{t % 60:02d})\n   STEP: {title[:110]}\n   SAYS: {window[:420]}")
    path = CACHE / f"verify_{prefix.replace('/', '_')}.txt"
    path.write_text("\n".join(out), encoding="utf-8")
    print(len(out), "entries ->", path.relative_to(ROOT))


def tick_slug(title):
    """Same as slug() in js/app.js: the key a step's ticks are saved under."""
    s = re.sub(r"\[\[[a-z0-9/-]+\|([^\]]+)\]\]", r"\1", title)
    s = re.sub(r"\{\{[a-z0-9-]+\|([^}]+)\}\}", r"\1", s)
    s = re.sub(r"\{\{([a-z0-9-]+)\}\}", r"\1", s).replace("**", "")
    s = re.sub("[̀-ͯ]", "", unicodedata.normalize("NFD", s)).lower()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")[:60].rstrip("-")


def retitled(args):
    ref = args[0] if args else "HEAD"
    title_re = re.compile(r"""\bt:\s*'((?:[^'\\]|\\.)*)'""")
    key_re = re.compile(r"""[{,]\s*key:\s*'([^']*)'""")
    def keys(text):
        found = {tick_slug(re.sub(r"\\(.)", r"\1", m.group(1))) for m in title_re.finditer(text)}
        return found | {m.group(1) for m in key_re.finditer(text)}
    git = lambda *a: subprocess.run(["git", *a], cwd=ROOT, capture_output=True, text=True, encoding="utf-8")
    old_files = [f for f in git("ls-tree", "-r", "--name-only", ref, "data").stdout.split() if f.endswith(".js")]
    n = 0
    for f in sorted(old_files):
        now = ROOT / f
        gone = keys(git("show", f"{ref}:{f}").stdout) - (keys(now.read_text(encoding="utf-8")) if now.exists() else set())
        for k in sorted(gone):
            print(f"{f}: {k}")
            n += 1
    print(f"{n} step title(s) gone since {ref}." + (" If a step was only reworded, add key: '<old slug>' to it so its ticks stay." if n else ""))


# ---------------------------------------------------------------- publishing
def build_artifact(args):
    # One artifact version holds at most 511 files. So the hosted copy ships every image folder's
    # pictures (all but hero.webp, which home and game pages show) as one pack script,
    # img/<game>-<folder>.js, that the page loads when a map opens (see imgUrl in js/app.js).
    out_dir = CACHE / "artifact"
    shutil.rmtree(out_dir / "img", ignore_errors=True)
    (out_dir / "img").mkdir(parents=True)
    (out_dir / "data").mkdir(parents=True, exist_ok=True)
    heroes, folders = {}, {}
    for p in sorted((ROOT / "assets" / "img").glob("*/*/*.webp")):
        rel = p.relative_to(ROOT).as_posix()
        if p.name == "hero.webp":
            heroes[rel] = p
        else:
            folders.setdefault(rel.rsplit("/", 1)[0] + "/", []).append((rel, p))
    pack_of = lambda folder: "img/{}-{}.js".format(*folder.split("/")[2:4])
    packs = {}
    for folder, imgs in folders.items():
        body = json.dumps({rel: base64.b64encode(p.read_bytes()).decode() for rel, p in imgs}, separators=(",", ":"))
        (out_dir / pack_of(folder)).write_text(f"ZG.addImgs({body});\n", encoding="utf-8")
        packs[pack_of(folder)] = out_dir / pack_of(folder)
    pack_list = json.dumps({folder: pack_of(folder) for folder in folders}, separators=(",", ":"))

    src = (ROOT / "index.html").read_text(encoding="utf-8")
    head = re.search(r"<head>(.*?)</head>", src, re.S).group(1)
    body = re.search(r"<body>(.*?)</body>", src, re.S).group(1)
    keep = [re.search(r"<title>.*?</title>", head).group(0), '<meta name="claude:viewport-fit-sides" content="cover">']
    keep += re.findall(r'<link rel="preconnect"[^>]*>', head)
    keep += re.findall(r'<link href="https://fonts.googleapis.com[^>]*>', head)
    keep += re.findall(r'<link rel="stylesheet"[^>]*>', head)
    keep += re.findall(r"<script>.*?</script>", head, re.S)
    # Hosted pages can't embed YouTube, and they load map pictures from the packs.
    keep.append(f"<script>window.ZG_NO_EMBED = true; window.ZG_HOSTED = true; window.ZG_IMG_PACKS = {pack_list};</script>")
    page = re.sub(r'\?v=\d+"', '"', "\n".join(keep) + "\n" + body.strip() + "\n")
    # One artifact version holds at most 511 files, so the map scripts go out as a single bundle
    # (same load order as index.html). The GitHub Pages site keeps the separate files.
    data_srcs = re.findall(r'<script src="(data/[^"]+\.js)"></script>', page)
    page = re.sub(r'[ \t]*<script src="data/[^"]+\.js"></script>\n?', "", page)
    page = page.replace('<script src="js/app.js"></script>', '<script src="data/bundle.js"></script>\n  <script src="js/app.js"></script>')
    (out_dir / "zombies-field-guide.html").write_text(page, encoding="utf-8")
    missing = [s for s in data_srcs if not (ROOT / s).exists()]
    bundle = "\n".join(f"/* ---- {s} ---- */\n" + (ROOT / s).read_text(encoding="utf-8").rstrip() + "\n;" for s in data_srcs if (ROOT / s).exists())
    (out_dir / "data" / "bundle.js").write_text(bundle + "\n", encoding="utf-8")
    sources = {"css/styles.css": ROOT / "css/styles.css", "js/core.js": ROOT / "js/core.js", "js/app.js": ROOT / "js/app.js",
               "data/bundle.js": out_dir / "data" / "bundle.js", **heroes, **packs}
    refs = re.findall(r'(?:src|href)="((?:css|js|data)/[^"]+)"', page)
    missing += [r for r in refs if r not in sources]
    if "--mirror" in args:  # a full local copy of the hosted files, to serve and test
        for k, v in sources.items():
            if v.parent != out_dir and out_dir not in v.parents:
                (out_dir / k).parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(v, out_dir / k)
    drops = {}
    if "--since" in args:
        ref = args[args.index("--since") + 1]
        git = lambda *a: set(subprocess.run(["git", *a], cwd=ROOT, capture_output=True, text=True).stdout.split())
        changed = git("diff", "--name-only", ref) | git("ls-files", "--others", "--exclude-standard")
        if any(c.startswith("data/") for c in changed):
            changed.add("data/bundle.js")
        for c in list(changed):  # a changed picture means its folder's pack changed
            if c.startswith("assets/img/") and not c.endswith("/hero.webp"):
                folder = c.rsplit("/", 1)[0] + "/"
                if folder in folders:
                    changed.add(pack_of(folder))
                else:
                    drops[pack_of(folder)] = None  # folder emptied: drop its pack
            elif c.startswith("assets/img/") and c not in heroes:
                drops[c] = None  # hero banner deleted
        sources = {k: v for k, v in sources.items() if k in changed}
    out = {k: v.as_posix() for k, v in sources.items()}
    out.update(drops)
    print(f"page: {(out_dir / 'zombies-field-guide.html').relative_to(ROOT)} | files: {len(out)} | data scripts bundled: {len(data_srcs)}"
          f" | picture packs: {len(packs)} | hero banners: {len(heroes)} | missing refs: {missing}")
    print(json.dumps(out))


COMMANDS = {
    "wiki-fetch": lambda a: wiki_fetch(a), "wiki-show": wiki_show, "wiki-images": wiki_images, "get-images": get_images,
    "yt-search": yt_search, "yt-info": yt_info, "captions": lambda a: captions(),
    "receiver": lambda a: receiver(), "audit": audit, "verify": verify, "retitled": retitled, "build-artifact": build_artifact,
}

if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] not in COMMANDS:
        print(__doc__); sys.exit(1)
    COMMANDS[sys.argv[1]](sys.argv[2:])
