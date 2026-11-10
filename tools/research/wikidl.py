"""Download Call of Duty wiki files (full size) to tools/.cache/wikidl/ for a look before using them,
plus contact sheets of 12 (tools/.cache/wikidl/sheet-<n>.jpg). Use get-images in zg.py to put a chosen one on the site.
usage: python -I -X utf8 tools/research/wikidl.py "File name.png" ..."""
import json, pathlib, sys, urllib.parse, urllib.request
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parents[2]  # the project folder
OUT = ROOT / 'tools' / '.cache' / 'wikidl'
OUT.mkdir(parents=True, exist_ok=True)
UA = {"User-Agent": "zombies-field-guide research (personal fan guide)"}


def api(**p):
    p["format"] = "json"
    u = "https://callofduty.fandom.com/api.php?" + urllib.parse.urlencode(p)
    return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60))


names = sys.argv[1:]
got = []
for i in range(0, len(names), 40):
    chunk = names[i:i + 40]
    d = api(action="query", titles="|".join("File:" + n for n in chunk), prop="imageinfo", iiprop="url|size")
    for p in d["query"]["pages"].values():
        ii = (p.get("imageinfo") or [{}])[0]
        if not ii.get("url"):
            print("MISSING", p["title"])
            continue
        name = p["title"][5:]
        dest = OUT / name.replace('/', '_')
        if not dest.exists():
            req = urllib.request.Request(ii["url"], headers=UA)
            dest.write_bytes(urllib.request.urlopen(req, timeout=120).read())
        got.append(dest)
        print(f'{name} | {ii["width"]}x{ii["height"]} | {dest.stat().st_size // 1024} KB')

F = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 15)
n = 0
for s in range(0, len(got), 12):
    chunk = got[s:s + 12]
    sheet = Image.new('RGB', (4 * 400, 3 * 330), (235, 235, 235))
    dr = ImageDraw.Draw(sheet)
    for j, f in enumerate(chunk):
        x, y = (j % 4) * 400, (j // 4) * 330
        im = Image.open(f).convert('RGBA')
        bg = Image.new('RGBA', im.size, (60, 60, 60, 255))
        im = Image.alpha_composite(bg, im).convert('RGB')
        im.thumbnail((392, 300))
        sheet.paste(im, (x + 4 + (392 - im.width) // 2, y + 4))
        dr.text((x + 6, y + 308), f'{s + j + 1}. {f.name[:48]}', fill=(0, 0, 0), font=F)
    n += 1
    sheet.save(OUT / f'sheet-{n}.jpg', quality=85)
print('sheets:', n)
