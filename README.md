# Zombies Field Guide

A personal Call of Duty Zombies guide: part locations, wonder weapons and upgrades, and step-by-step easter egg checklists. It works on phones, tablets and desktop.

**Live site:** https://noahstrev.github.io/zombies-field-guide/

Filled in so far:

- **Black Ops II** (5 maps): TranZit, Die Rise, Mob of the Dead, Buried, Origins. Nuketown Zombies is left out (no main quest). Origins reuses the Black Ops III guide, since the quest is the same.
- **Black Ops III** (10 maps): Shadows of Evil, The Giant, Der Eisendrache, Zetsubou No Shima, Gorod Krovi, Revelations, plus the Zombies Chronicles maps that have a main easter egg (Ascension, Shangri-La, Moon, Origins).
- **Infinite Warfare** (5 maps): Zombies in Spaceland, Rave in the Redwoods, Shaolin Shuffle, Attack of the Radioactive Thing, The Beast from Beyond.
- **Black Ops 4** (7 maps): IX, Voyage of Despair, Dead of the Night, Ancient Evil (Chaos story) and Blood of the Dead, Alpha Omega, Tag der Toten (Aether story). Classified is left out because its only quest is a round 150 cutscene.

The other game tabs are placeholders.

## Opening it

Open the live site on any device. Pushing to the `main` branch updates it (GitHub Pages).

To run it on your PC instead, double-click **`start-site.bat`**. It starts a small local server with Python and opens `http://localhost:8080`.

- Opening `index.html` directly also works.
- **On your phone:** while `start-site.bat` is running, connect the phone to the same Wi-Fi and go to `http://<your PC's IP>:8080`. Run `ipconfig` to find the IP (the "IPv4 Address" line). Windows may ask to allow Python through the firewall the first time.

## Using it

- **Tabs per map:** Start Here · Parts & Buildables · Wonder Weapons · Main Easter Egg · Side Quests & Songs.
- **Checklists:** tick steps as you go. Progress is saved in that browser on that device. Each list has a Reset button.
- **Coloured chips** (for example "Ice Staff" on an Origins easter egg step) open that item's guide in a side panel (a bottom sheet on phones). Close it and you're back exactly where you were. "Full guide" jumps to the item's section.
- **"Needed for"** boxes on item guides link back to every easter egg step that uses the item.
- **Order:** numbered steps go top to bottom. Steps inside a green **Any order** box, or marked with the shuffle icon, can be done in whatever order you like.
- **Watch buttons** under steps and part spots play the exact moment from a guide video, right in the page.
- **Next step** button (on easter egg pages) jumps to your first unticked step.
- **Search** (top bar) finds maps, items, upgrades and steps.

## How the files are laid out

```
index.html              page shell (loads everything below)
css/styles.css          all styling (dark + light theme, responsive)
js/core.js              data registry (ZG.addMap)
js/app.js               routing, rendering, checklists, side panel, search
data/games.js           the game tabs (set active: true to enable one)
data/<game>/<map>.js    one file per map: all guide content (bo2, bo3, iw, bo4)
assets/img/<game>/<map>/  images (from the Call of Duty Wiki, converted to WebP)
start-site.bat          local server for Windows
```

## Adding a game or map later

1. In `data/games.js`, set the game's `active: true` (optionally add `blurb` and `groups`).
2. Create `data/<game>/<map>.js` modelled on an existing BO3 map file, then add a `<script>` tag for it in `index.html` before `js/app.js`.
3. Each map is a list of **items**. An item has a `tab` (`start`, `parts`, `weapons`, `easter-egg`, `side`) and can include:
   - `parts`: buildable parts, each with a list of spawn `spots`; `w: <seconds>` links the part to that moment in the item's `video`
   - `steps` / `prep`: checklists. A step's `needs: ['item-id']` shows chips that open that item, and adds a "Needed for" link back. `w: <seconds>` (or `w: ['<YouTube id>', seconds]`) adds a "Watch this step" clip. Consecutive steps with the same `any: '<label>'` are grouped in an "Any order" box; `anyList: '<text>'` marks the list inside one step as any-order; `stepsOrder: 'suggested'` labels a whole list as flexible.
   - `upgrade`: a second checklist for the upgraded version
   - `blocks`: free content (`p`, `list`, `table`, `tip`, `warn`, `note`, `imgs`, `video`, `lookup`)
   - `lookup` (on a step or block): a picker. With `a` and `b` it shows two dropdowns and looks up `answers['A>B']`; with only `a` it shows one dropdown and looks up `answers['A']`. Answers are `[name, number]` pairs or plain lines of text.
   - `video`: `{ id: '<YouTube id>', title, ch, len }`
   - Map-level `players`: `'solo'`, `'four'`, `'coop'`, or `{ text: '<badge text>', warn: true }` for custom wording.
   - A quest with two sides (Black Ops II) is two `easter-egg` items whose `type` starts with `Main Easter Egg`; the map card and the Next step button follow whichever side has the most ticks.
4. In any text, `**bold**` makes bold text and `{{item-id}}` (or `{{item-id|label}}`) makes a quick-look chip.
5. Open the browser console after a change: the site warns about any `needs` or `{{...}}` that points to an item that doesn't exist.
6. After editing files, bump the `?v=` number on the `<link>`/`<script>` tags in `index.html` so browsers load the new version.

## Credits

Guides were written for this site from community research, mainly the [Call of Duty Wiki](https://callofduty.fandom.com/). Images come from that wiki (game screenshots © Activision). Embedded videos belong to their creators (MrRoflWaffles, MrDalekJD, NoahJ456, TheSmithPlays, CrashPower, Ricktness, SBZ vSylent, CodeNamePizza, Pack A Puncher, GregFPS, Ch0pper, AceOfSpades and others). Fan-made; not affiliated with Activision, Treyarch or Infinity Ward.
