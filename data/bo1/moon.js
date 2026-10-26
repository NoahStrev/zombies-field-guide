/* Moon — Black Ops DLC 4 (Rezurrection).
   Same quest as the Black Ops III Zombies Chronicles remaster, so this copies that guide
   (data/bo3/moon.js must load first) and swaps what the original does differently. */
(() => {
  const map = ZG.copyMap('bo3/moon', { game: 'bo1', id: 'moon', order: 4, dlc: 'Rezurrection · DLC 4' }, [
    ['on the RK5 side', 'on the Olympia side'],
    ['Kuda wall-buy', 'M16 wall-buy'],
    [' (solo: Quick Revive can still be used up)', ''],
  ]);
  if (!map) return;

  map.players = { text: 'Full quest needs 2+ players online', warn: true };
  map.quick = map.quick.map(([k, v]) => [k, k === 'Players' ? 'Part 1 solo; the rest needs 2+ online' : v]);
  map.intro = Object.assign({}, map.intro, {
    start: 'The original Black Ops version. The quest is the same as the Black Ops III remaster (the videos are from that version), but it has extra requirements. ' + map.intro.start,
    'easter-egg': 'In Black Ops only the first part (Cryogenic Slumber Party, up to step 6) works solo. The rest needs two or more players online (not split-screen), one of them playing as **Richtofen**, and at least one player who has finished Ensemble Cast on Call of the Dead and Time Travel Will Tell on Shangri-La.',
  });

  // You can't pick a character in Black Ops, and part 2 has extra requirements.
  const road = map.items.find(it => it.id === 'ee-roadmap');
  road.steps[0] = { t: 'Check who is Richtofen', d: 'You can\'t pick characters in Black Ops; with two or more players, one of you is given Richtofen. He carries the Golden Rod for the second half.' };
  road.steps.splice(1, 0, { t: 'For part 2: 2+ players online, and someone who has finished Call of the Dead\'s and Shangri-La\'s quests', d: 'Ensemble Cast (the co-op version on Call of the Dead) and Time Travel Will Tell.' });

  const ee = map.items.find(it => it.id === 'main-ee');
  ee.facts = ee.facts.map(([k, v]) => [k, k === 'Players' ? 'Part 1: 1–4 · Parts 2–3: 2–4 online' : v]);
  ee.prep[0] = { t: 'One player is Richtofen', d: 'He places and charges the Golden Rod. With two or more players, the game gives one of you Richtofen.' };
  ee.prep.push({ t: 'For part 2: 2+ players online, one of whom has finished Ensemble Cast and Time Travel Will Tell', d: 'Not possible solo or in split-screen.' });

  // The terminal songs sit in different places in the original; the space dog is remaster-only.
  const songs = map.items.find(it => it.id === 'songs-8bit');
  songs.summary = 'Three computer terminals play short tracks. Stand close: they\'re only audible near the terminal.';
  songs.blocks = [{ list: [
    '"Re-Damned": a computer in the labs next to the Bio-Dome door.',
    '8-bit "Coming Home": computer equipment at the end of Tunnel 11, next to a radio by the Power Room door.',
    '8-bit "Pareidolia": a computer in the labs, in the corner on the left as you come in from the Power Room.',
  ] }];
  map.items = map.items.filter(it => it.id !== 'space-dog');
  ZG.addMap(map);
})();
