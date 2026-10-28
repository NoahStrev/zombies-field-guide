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
3. `audit`: every data file parses (an unescaped apostrophe such as `'it's'` would stop a whole map loading), every map made it into the export, every image exists, every video still plays and can be embedded, every timestamp is inside its video, and declared video lengths match. Export again first if you changed data, or the "missing from the export" check will be out of date.
4. `verify <game>/<map> --all`: lists every "watch" timestamp next to what the video says at that moment, in `tools/.cache/verify_<...>.txt`. Without `--all`, only likely mismatches are listed.
5. `retitled [REF]`: step titles that existed at git REF (default: the last commit) but are gone now. Ticks are saved under each step's title, so if a step was only reworded, add `key: '<old key>'` to it before publishing, or people lose that tick.

## Fact-checking

Every guide was checked step by step against the Call of Duty Wiki in October 2026 (main quests, then weapons, side quests, parts and basics). To repeat it after big changes:

1. With the site and `receiver` running, paste `tools/browser/dump.js` into the console, then run `dump`. Each map's full text lands in `tools/.cache/dump/<game>_<map>.txt`.
2. Fetch the matching wiki pages (`wiki-fetch`, then `wiki-show`). Quest steps are usually on "<Map>/Main Quest"; weapons have their own pages; the "Pack-a-Punch Machine (Treyarch)" page has every Treyarch map's Pack-a-Punch steps.
3. Where the wiki and the guide disagree, the guide video settles it: search its transcript in `tools/.cache/tx/`. If the video shows our version on screen, keep it. Otherwise look for a second written guide.
4. Wording a step differently is fine; a wrong number, place or order is not. Missing locations, retry rules and solo/co-op differences are worth adding.

## Publishing

- **GitHub Pages:** bump the `?v=` numbers in `index.html`, commit and push to `main`.
- **Private claude.ai page:** `build-artifact --since <last published commit>` writes the hosted page to `tools/.cache/artifact/` and prints the changed files to publish. One publish takes at most 255 files, so publish only what changed. One version can hold at most 511 files, so the hosted copy packs things up:
  - every map script goes into a single `data/bundle.js` (built in the same order as `index.html`);
  - every image folder's pictures, except `hero.webp`, go into one pack, `img/<game>-<folder>.js`, which the page loads when a map opens. Hero banners stay separate files because the home and game pages show them.

  That's about 105 files in all. A new or changed picture republishes its folder's pack. To test the hosted copy before publishing, run `build-artifact --mirror` (it also copies css, js and banners into `tools/.cache/artifact/`), start the `artifact-mirror` preview (port 8081) and open `/zombies-field-guide.html`.
- **One copy per picture:** when a map reuses another map's picture (Revelations' Guard of Fafnir and Gorod Krovi's, for example), point at the original's path instead of saving a second copy.
