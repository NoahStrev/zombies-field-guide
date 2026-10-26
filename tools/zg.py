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

Publishing
  build-artifact [--since REF]  Build the hosted (claude.ai) page and print the files to publish
                                (all files, or only those changed since git REF)
"""
import io, json, os, re, subprocess, sys, time, urllib.parse, urllib.request
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


def audit(args):
    only = args[0] if args else None
    data = load_export()
    problems, videos, watch = [], {}, []
    bad = lambda m, msg: problems.append(f"[{m}] {msg}")
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


# ---------------------------------------------------------------- publishing
def build_artifact(args):
    src = (ROOT / "index.html").read_text(encoding="utf-8")
    head = re.search(r"<head>(.*?)</head>", src, re.S).group(1)
    body = re.search(r"<body>(.*?)</body>", src, re.S).group(1)
    keep = [re.search(r"<title>.*?</title>", head).group(0), '<meta name="claude:viewport-fit-sides" content="cover">']
    keep += re.findall(r'<link rel="preconnect"[^>]*>', head)
    keep += re.findall(r'<link href="https://fonts.googleapis.com[^>]*>', head)
    keep += re.findall(r'<link rel="stylesheet"[^>]*>', head)
    keep += re.findall(r"<script>.*?</script>", head, re.S)
    keep.append("<script>window.ZG_NO_EMBED = true; window.ZG_HOSTED = true;</script>")  # hosted pages can't embed YouTube
    page = re.sub(r'\?v=\d+"', '"', "\n".join(keep) + "\n" + body.strip() + "\n")
    out_dir = CACHE / "artifact"
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "zombies-field-guide.html").write_text(page, encoding="utf-8")
    files = ["css/styles.css", "js/core.js", "js/app.js", "data/games.js"]
    files += sorted(p.relative_to(ROOT).as_posix() for p in (ROOT / "data").glob("*/*.js"))
    files += sorted(p.relative_to(ROOT).as_posix() for p in (ROOT / "assets" / "img").glob("*/*/*.webp"))
    refs = re.findall(r'(?:src|href)="((?:css|js|data)/[^"]+)"', page)
    missing = [r for r in refs if r not in files]
    if "--since" in args:
        ref = args[args.index("--since") + 1]
        changed = set(subprocess.run(["git", "diff", "--name-only", ref], cwd=ROOT, capture_output=True, text=True).stdout.split())
        changed |= set(subprocess.run(["git", "ls-files", "--others", "--exclude-standard"], cwd=ROOT, capture_output=True, text=True).stdout.split())
        files = [f for f in files if f in changed]
    print(f"page: {(out_dir / 'zombies-field-guide.html').relative_to(ROOT)} | files: {len(files)} | missing refs: {missing}")
    print(json.dumps({f: (ROOT / f).as_posix() for f in files}))


COMMANDS = {
    "wiki-fetch": lambda a: wiki_fetch(a), "wiki-show": wiki_show, "wiki-images": wiki_images, "get-images": get_images,
    "yt-search": yt_search, "yt-info": yt_info, "captions": lambda a: captions(),
    "receiver": lambda a: receiver(), "audit": audit, "verify": verify, "build-artifact": build_artifact,
}

if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] not in COMMANDS:
        print(__doc__); sys.exit(1)
    COMMANDS[sys.argv[1]](sys.argv[2:])
