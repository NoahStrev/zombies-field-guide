# Zombies Field Guide

A personal Call of Duty Zombies guide: part locations, wonder weapons and upgrades, and step-by-step easter egg checklists. It works on phones, tablets and desktop.

**Live site:** https://noahstrev.github.io/zombies-field-guide/

Filled in so far:

- **Black Ops** (4 maps): Ascension, Call of the Dead, Shangri-La, Moon. Kino der Toten, Five and the remade World at War maps are left out (no main quest). Ascension, Shangri-La and Moon reuse the Black Ops III guides, with the original's differences swapped in.
- **Black Ops II** (5 maps): TranZit, Die Rise, Mob of the Dead, Buried, Origins. Nuketown Zombies is left out (no main quest). Origins reuses the Black Ops III guide, since the quest is the same.
- **Black Ops III** (10 maps): Shadows of Evil, The Giant, Der Eisendrache, Zetsubou No Shima, Gorod Krovi, Revelations, plus the Zombies Chronicles maps that have a main easter egg (Ascension, Shangri-La, Moon, Origins).
- **Infinite Warfare** (5 maps): Zombies in Spaceland, Rave in the Redwoods, Shaolin Shuffle, Attack of the Radioactive Thing, The Beast from Beyond. The Beast from Beyond also covers Director's Cut and the Mephistopheles true ending.
- **WWII** (5 maps): The Final Reich (casual and hardcore quests), The Darkest Shore, The Shadowed Throne, The Tortured Path, The Frozen Dawn. The Final Reich has a primer on WWII's rules; The Frozen Dawn lists the Cold Hearted rewards for finishing all five.
- **Black Ops 4** (7 maps): IX, Voyage of Despair, Dead of the Night, Ancient Evil (Chaos story) and Blood of the Dead, Alpha Omega, Tag der Toten (Aether story). Classified is left out because its only quest is a round 150 cutscene.
- **Cold War** (4 maps): Die Maschine, Firebase Z, Mauer der Toten, Forsaken. Die Maschine has a primer on Cold War's new rules. The Outbreak mode quests are left out.
- **Vanguard** (2 maps): Shi No Numa, The Archon. Shi No Numa has a primer on Vanguard's rules. Der Anfang and Terra Maledicta are left out (short story events, no main quest).
- **Black Ops 6** (6 maps): Liberty Falls, Terminus, Citadelle des Morts, The Tomb, Shattered Veil, Reckoning. Liberty Falls has a primer on Black Ops 6's rules.
- **Black Ops 7** (6 maps): Ashes of the Damned, Astra Malorum, Paradox Junction, Totenreich, Kowakujō, Rex Infernus, plus the Super Easter Egg (a toy quest on each map's Side Quests tab, then a five-boss playdate). Ashes of the Damned has a primer on what changed.

Advanced Warfare's Exo Zombies and Modern Warfare III's zombies aren't included. World at War has no tab: none of its maps has a main easter egg.

## Opening it

Open the live site on any device. Pushing to the `main` branch updates it (GitHub Pages).

To run it on your PC instead, double-click **`start-site.bat`**. It starts a small local server with Python and opens `http://localhost:8080`.

- Opening `index.html` directly also works.
- **On your phone:** while `start-site.bat` is running, connect the phone to the same Wi-Fi and go to `http://<your PC's IP>:8080`. Run `ipconfig` to find the IP (the "IPv4 Address" line). Windows may ask to allow Python through the firewall the first time.

## Using it

- **Tabs per map:** Start Here · Parts & Buildables · Wonder Weapons · Main Easter Egg · Side Quests & Songs.
- **Checklists:** tick steps as you go. Progress is saved in that browser on that device. Each list has a Reset button. Ticks are tied to each step's title, so they stay on the right step when the guide adds or reorders steps.
- **Run failed?** At the bottom of every map page, **Start over** clears every tick on that map (parts, weapons, side quests and the main quest) so you can follow it again from step 1 in a new game. Tap twice to confirm. Both Start over and Reset show an **Undo** for 10 seconds afterwards. Start over also keeps a **run history** for the map ("Attempt 3 · last run: 14 of 20 quest steps done · best: 17 of 20"), with a Clear history link.
- **Titles only** (on every checklist) shrinks steps to just their titles for following along mid-game; tap a title to open that step. The Next step button opens the step it jumps to. One setting for the whole site.
- **Move your progress** (home page): make a progress code (and, on the public site, a link) holding every tick and run history in this browser, then load it on another device. Loading adds ticks and never removes any, with an Undo.
- **Coloured chips** (for example "Ice Staff" on an Origins easter egg step) open that item's guide in a side panel (a bottom sheet on phones). Close it and you're back exactly where you were. "Full guide" jumps to the item's section.
- **"Needed for"** boxes on item guides link back to every easter egg step that uses the item.
- **Order:** numbered steps go top to bottom. Steps inside a green **Any order** box, or marked with the shuffle icon, can be done in whatever order you like.
- **Watch buttons** under steps and part spots play the exact moment from a guide video, right in the page. A clip runs about 10 seconds into the next step so the explanation isn't cut short, and **Keep watching** under the clip carries on from where it stopped.
- **Notes:** the flag at the top right of every step and item saves a quick note during a run (quick picks like "Clip ends early" or "Can't find it", or your own words). Flagged steps show their note. **Your notes** at the bottom of each map page, and on the home page, lists them and copies them all as text that says exactly which step each one is about. Notes stay in that browser and aren't cleared by Start over.
- **Next step** button (on easter egg pages) jumps to your first unticked step.
- **Collapse done** (on every checklist) shrinks finished steps to just their title. It's one setting for the whole site.
- **Keep screen on** (phone icon in the top bar, on browsers that support it) stops the screen sleeping while you play.
- **Home page** lists every map with your easter egg progress, an "In progress" list of quests you've started, and a Continue button back to the last page you had open.
- **Previous / Next map** links at the bottom of every map page move through that game's maps.
- **Offline:** on the live site, pages you open are kept on the device. "Save everything for offline" on the home page downloads all images too (about 25 MB). Videos still need internet. On a phone you can also add the site to your home screen.
- **Search** (top bar) finds maps, items, upgrades and steps, including words inside step details and primers (shown as a highlighted snippet). Up and down arrows move through the results; Enter opens one.

## How the files are laid out

```
index.html              page shell (loads everything below)
css/styles.css          all styling (dark + light theme, responsive)
js/core.js              data registry (ZG.addMap)
js/app.js               routing, rendering, checklists, side panel, search
data/games.js           the game tabs (set active: true to enable one)
data/<game>/<map>.js    one file per map: all guide content (bo1, bo2, bo3, iw, wwii, bo4, bocw, vg, bo6, bo7)
assets/img/<game>/<map>/  images (from the Call of Duty Wiki, converted to WebP)
assets/icons/           home-screen icons
sw.js                   offline support (service worker, live site only)
manifest.webmanifest    lets phones add the site to the home screen
start-site.bat          local server for Windows
tools/                  research, checking and publishing scripts (see tools/README.md)
```

## Adding a game or map later

1. In `data/games.js`, set the game's `active: true` (optionally add `blurb` and `groups`).
2. Create `data/<game>/<map>.js` modelled on an existing map file, then add a `<script>` tag for it in `index.html` before `js/app.js`.
   - When two games share one quest (an original and its remaster), copy the guide with `ZG.copyMap('<game>/<map>', { game, id, order, dlc }, [[from, to], ...])`. It swaps text such as perk or wall-buy names; then adjust what else differs and call `ZG.addMap`. The copy's script tag must come after the original's. `data/bo1/*.js` (except Call of the Dead) and `data/bo2/origins.js` work this way.
3. Each map is a list of **items**. An item has a `tab` (`start`, `parts`, `weapons`, `easter-egg`, `side`) and can include:
   - `spots` (on an item, step or part): a list of places; each is a string, or `{ text, imgs: [{ src, cap }], label }` to show a picture of that spot.
   - `parts`: buildable parts, each with a list of spawn `spots`; `w: <seconds>` links the part to that moment in the item's `video`
   - `steps` / `prep`: checklists. A step's `needs: ['item-id']` shows chips that open that item, and adds a "Needed for" link back. `w: <seconds>` (or `w: ['<YouTube id>', seconds]`) adds a "Watch this step" clip. Consecutive steps with the same `any: '<label>'` are grouped in an "Any order" box; `anyList: '<text>'` marks the list inside one step as any-order; `stepsOrder: 'suggested'` labels a whole list as flexible.
   - **Ticks follow the step's title** (`t`), turned into a key like `recover-the-summoning-key` (case and punctuation don't matter). Adding, removing or reordering steps is safe. If you reword a title, keep its ticks by giving the step `key: '<old key>'`. `python -X utf8 tools/zg.py retitled` lists titles that changed since the last commit.
   - `upgrade`: a second checklist for the upgraded version
   - `blocks`: free content (`p`, `list`, `table`, `tip`, `warn`, `note`, `imgs`, `video`, `lookup`)
   - `lookup` (on a step or block): a picker. With `a` and `b` it shows two dropdowns and looks up `answers['A>B']`; with only `a` it shows one dropdown and looks up `answers['A']`. Answers are `[name, number]` pairs or plain lines of text.
   - `video`: `{ id: '<YouTube id>', title, ch, len }`, plus an optional `t: <seconds>` to open the video at that moment (used when one long video covers many side quests; steps' `w` still count from the start of the video)
   - Map-level `players`: `'solo'`, `'four'`, `'coop'`, or `{ text: '<badge text>', warn: true }` for custom wording.
   - A quest with two sides (Black Ops II) is two `easter-egg` items whose `type` starts with `Main Easter Egg`; the map card and the Next step button follow whichever side has the most ticks.
4. In any text, `**bold**` makes bold text and `{{item-id}}` (or `{{item-id|label}}`) makes a quick-look chip. `[[game/map/tab|label]]` (optionally `/item-<id>` after the tab) links to another page of the guide.
5. Open the browser console after a change: the site warns about any `needs` or `{{...}}` that points to an item that doesn't exist, and about two steps in one list sharing a tick key. Then run the checks in `tools/README.md`: `audit` also catches a data file that won't load (usually an apostrophe that needs a backslash, `it\'s`).
6. After editing files, bump the `?v=` number on the `<link>`/`<script>` tags in `index.html` so browsers load the new version.

## Credits

Guides were written for this site from community research, mainly the [Call of Duty Wiki](https://callofduty.fandom.com/), and every guide was cross-checked against it step by step in October 2026, with the guide videos as the tiebreaker. Images come from that wiki (game screenshots © Activision). Where the wiki has no picture of a spot, the Black Ops 6 and 7 side quest spots use stills from MrDalekJD's side Easter egg videos, credited in each caption. Embedded videos belong to their creators: MrRoflWaffles, MrDalekJD, TheGamingRevolution, AceOfSpades, CrashPower, GregFPS, Ch0pper, Pack A Puncher, SBZ vSylent, JokerAlex 21, MrWilliamThor, NoahJ456, TheSmithPlays, Ricktness, CodeNamePizza, Rager6amer, LegoUnlocked, ChadderManHD, Cragusmaximuss, DIG_DUG7, Fast Guides Glitch, JustGamingFella, Jimmxr, MJPW, Ray Pooperton III and THE BROS. Fan-made; not affiliated with Activision, Treyarch, Infinity Ward or Sledgehammer Games.
