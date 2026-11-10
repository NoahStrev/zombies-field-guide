"""Print a web guide page as headings, text and image URLs in order (no downloads); caches the HTML.
Needs BeautifulSoup (pip install beautifulsoup4). On Blogger pages ([LINK] lines) the full-size picture is the link.
usage: python -I -X utf8 tools/research/pagelist.py URL [grep-regex]   (with a regex, only lines around matching text/images are shown)"""
import hashlib, pathlib, re, sys, urllib.parse, urllib.request
from bs4 import BeautifulSoup, NavigableString, Tag

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36"}
url = sys.argv[1]
pat = re.compile(sys.argv[2], re.I) if len(sys.argv) > 2 else None
ROOT = pathlib.Path(__file__).resolve().parents[2]  # the project folder
cache = ROOT / "tools" / ".cache" / "pagecache"
cache.mkdir(parents=True, exist_ok=True)
f = cache / (hashlib.md5(url.encode()).hexdigest() + ".html")
if not f.exists():
    f.write_bytes(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read())
soup = BeautifulSoup(f.read_bytes().decode("utf-8", "replace"), "html.parser")
lines = []
for el in soup.body.descendants:
    if isinstance(el, Tag) and el.name in ("h1", "h2", "h3", "h4", "h5"):
        lines.append("\n## " + el.get_text(" ", strip=True))
    elif isinstance(el, Tag) and el.name == "img":
        src = el.get("data-src") or el.get("src") or ""
        if src and not src.startswith("data:"):
            lines.append("   [IMG] " + urllib.parse.urljoin(url, src) + (f"  alt={el.get('alt')!r}" if el.get("alt") else ""))
    elif isinstance(el, Tag) and el.name == "a" and re.search(r"\.(webp|png|jpe?g|gif)$", el.get("href", ""), re.I):
        lines.append("   [LINK] " + urllib.parse.urljoin(url, el["href"]) + "  text=" + repr(el.get_text(" ", strip=True)[:80]))
    elif isinstance(el, NavigableString) and el.parent.name not in ("script", "style", "a") and el.strip():
        lines.append("   " + el.strip())
if pat:
    keep = set()
    for i, l in enumerate(lines):
        if pat.search(l):
            keep.update(range(max(0, i - 3), min(len(lines), i + 4)))
    lines = [l for i, l in enumerate(lines) if i in keep or l.startswith("\n## ")]
print("\n".join(lines))
