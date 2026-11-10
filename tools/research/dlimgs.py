"""Download pictures by URL into tools/.cache/dl/NAME/<label>.jpg (label=URL pairs, or bare URLs numbered 1..n).
Blogger links are fetched at full size (/s0/). usage: python -I -X utf8 tools/research/dlimgs.py NAME [label=]URL ..."""
import io, pathlib, re, sys, urllib.request
from PIL import Image

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36",
      "Accept": "image/avif,image/webp,image/png,image/*;q=0.8,*/*;q=0.5"}
name = sys.argv[1]
ROOT = pathlib.Path(__file__).resolve().parents[2]  # the project folder
out = ROOT / "tools" / ".cache" / "dl" / name
out.mkdir(parents=True, exist_ok=True)
for n, arg in enumerate(sys.argv[2:], 1):
    label, url = (arg.split("=", 1) if "=" in arg.split("://")[0] else (str(n), arg))
    if "blogger.googleusercontent.com" in url:
        url = re.sub(r"/(s\d+|w\d+-h\d+)/", "/s0/", url)
    f = out / f"{label}.jpg"
    try:
        if not f.exists():
            b = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()
            Image.open(io.BytesIO(b)).convert("RGB").save(f, quality=93)
        print(label, Image.open(f).size)
    except Exception as e:
        print(label, "ERR", e)
