"""Search the Call of Duty wiki's File namespace. usage: python -X utf8 tools/research/wikifiles.py "query" [query...]
Prints title, size, upload date and the pages that use it."""
import json, sys, urllib.parse, urllib.request
UA = {"User-Agent": "zombies-field-guide research (personal fan guide)"}
def api(**p):
    p["format"] = "json"
    u = "https://callofduty.fandom.com/api.php?" + urllib.parse.urlencode(p)
    return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60))
seen = set()
for q in sys.argv[1:]:
    off = 0
    while True:
        d = api(action="query", list="search", srsearch=q, srnamespace=6, srlimit=50, sroffset=off)
        hits = d["query"]["search"]
        for h in hits:
            t = h["title"]
            if t in seen: continue
            seen.add(t)
        if "continue" not in d or off > 400: break
        off = d["continue"]["sroffset"]
titles = sorted(seen)
print(len(titles), "files")
for i in range(0, len(titles), 40):
    chunk = titles[i:i+40]
    d = api(action="query", titles="|".join(chunk), prop="imageinfo|globalusage", iiprop="size|timestamp|url", gulimit=5)
    for p in d["query"]["pages"].values():
        ii = (p.get("imageinfo") or [{}])[0]
        used = [g["title"] for g in p.get("globalusage", [])][:3]
        print(f'{p["title"]} | {ii.get("width")}x{ii.get("height")} | {ii.get("timestamp","")[:10]} | {used}')
