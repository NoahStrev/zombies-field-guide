# Tools

Scripts used to research, check and publish the guide. They aren't part of the site.
Everything they download (wiki pages, captions, video info, check results) goes in
`tools/.cache/`, which git ignores.

All commands run from the project folder:

```
python -X utf8 tools/zg.py <command>
```

Run it with no command to see the full list. Image downloads need Pillow (`pip install pillow`).

## Adding a map

1. **Read up:** `wiki-fetch "Map Name" "Main Quest Name"`, then `wiki-show "Map Name" "Section"`.
2. **Find videos:** `yt-search "map name easter egg guide"`, then `yt-info <ids>` to check they embed, their length and that they have English captions.
3. **Get captions:** open a YouTube watch page, paste `tools/browser/captions.js` into the console, run `await zgCaptions([...ids])`, paste the result into `tools/.cache/captions.txt`, then run `captions`. Transcripts land in `tools/.cache/tx/<id>.txt` as `seconds [m:ss] text` blocks, which is how the `w:` timestamps are found.
4. **Get images:** `wiki-images "Map Name"` to list them, then `get-images <game>/<map> name="Wiki File.png" hero@1400="Other File.jpg"`.
5. **Write** `data/<game>/<map>.js` (see the main README) and add its `<script>` tag to `index.html`.

## Checking

1. Start the local site (`start-site.bat`) and, in another window, `receiver`.
2. Open the site, paste `tools/browser/export.js` into the console. That writes `tools/.cache/export.json`.
3. `audit`: every image exists, every video still plays and can be embedded, every timestamp is inside its video, and declared video lengths match.
4. `verify <game>/<map> --all`: lists every "watch" timestamp next to what the video says at that moment, in `tools/.cache/verify_<...>.txt`. Without `--all`, only likely mismatches are listed.
5. In the console, `new Function(text)` on each script catches syntax errors (for example an unescaped apostrophe) before they break a whole map.

## Publishing

- **GitHub Pages:** bump the `?v=` numbers in `index.html`, commit and push to `main`.
- **Private claude.ai page:** `build-artifact --since <last published commit>` writes the hosted page to `tools/.cache/artifact/` and prints the changed files to publish. One publish takes at most 255 files, so publish only what changed.
