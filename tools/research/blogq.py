"""Search Henry's Zombified blog (codzombified.blogspot.com, posts since 2013) and list matching posts.
Read a post with pagelist.py; the full-size pictures are its [LINK] lines.
usage: python -X utf8 tools/research/blogq.py "search words" [max results, default 25]"""
import json, sys, urllib.parse, urllib.request
UA = {"User-Agent": "zombies-field-guide research (personal fan guide)"}
BASE = "https://codzombified.blogspot.com"
def get(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60).read().decode("utf-8", "replace")
if True:
    q = sys.argv[1]; n = int(sys.argv[2]) if len(sys.argv) > 2 else 25
    d = json.loads(get(BASE + "/feeds/posts/summary?alt=json&max-results=%d&q=%s" % (n, urllib.parse.quote(q))))
    for e in d["feed"].get("entry", []):
        link = next(l["href"] for l in e["link"] if l["rel"] == "alternate")
        print(e["published"]["$t"][:10], e["title"]["$t"], link)
