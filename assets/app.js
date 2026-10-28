/* K-Storyteller Library — renders everything from data.js. Edit data.js, not this file. */
(function () {
  'use strict';

  var LEVELS = ['Beginner 1', 'Beginner 2', 'Beginner 3', 'Intermediate 1', 'Intermediate 2'];
  var NEW_DAYS = 14;        // books
  var VIDEO_NEW_DAYS = 7;   // video cards: NEW for 7 days after the day they were added to this site (date in data.js)
  var NEW_RAIL = 8;
  var LEVELS_KO = { 'Beginner 1': '초급 1', 'Beginner 2': '초급 2', 'Beginner 3': '초급 3', 'Intermediate 1': '중급 1', 'Intermediate 2': '중급 2' };
  var SECTIONS = {
    story: { title: 'Story Videos', ko: '이야기 영상', desc: 'Watch a story in Korean', char: 'peter-fixed' },
    shadowing: { title: 'Shadowing', ko: '섀도잉', desc: 'Watch and repeat out loud', char: 'alien' },
    books: { title: 'Books + Audio', ko: '책과 오디오', desc: 'Read and listen to stories', char: 'ghost' },
    hangul: { title: 'Hangul', ko: '한글', desc: 'Learn the Korean alphabet', char: 'knight' }
  };
  var ORDER = ['story', 'shadowing', 'books', 'hangul'];

  var ICONS = {
    back: '<path d="M15 18l-6-6 6-6"/>',
    headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    chevron: '<path d="M9 18l6-6-6-6"/>',
    book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/>',
    left: '<path d="M15 18l-6-6 6-6"/>',
    right: '<path d="M9 18l6-6-6-6"/>',
    text: '<path d="M4 6h16M4 12h16M4 18h10"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>'
  };
  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
  }
  function charImg(section, cls) {
    return '<img class="' + cls + '" src="brand/char-' + SECTIONS[section].char + '.png" alt="">';
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function slug(s) {
    return String(s).toLowerCase().replace(/[^0-9a-zㄱ-ㆎ가-힣]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function levelOf(s) {
    var key = String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    for (var i = 0; i < LEVELS.length; i++) {
      if (LEVELS[i].toLowerCase().replace(/[^a-z0-9]/g, '') === key) return LEVELS[i];
    }
    return null;
  }
  // Pull the 11-character video id out of any YouTube link (or a bare id).
  function youtubeId(url) {
    url = String(url || '').trim();
    if (/^[\w-]{11}$/.test(url)) return url;
    var m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/|\/v\/)([\w-]{11})/);
    return m ? m[1] : null;
  }
  // Pull the file id out of any Google Drive link (or a bare id).
  function driveId(url) {
    url = String(url || '').trim();
    var m = url.match(/\/file\/d\/([\w-]{10,})/) || url.match(/[?&]id=([\w-]{10,})/) || url.match(/\/d\/([\w-]{10,})/);
    if (m) return m[1];
    return /^[\w-]{20,}$/.test(url) ? url : null;
  }
  // "2:15", "1:02:03", "135", "2m15s" -> seconds
  function seconds(t) {
    if (t == null || t === '') return 0;
    if (typeof t === 'number') return Math.max(0, Math.floor(t));
    t = String(t).trim();
    if (/:/.test(t)) return t.split(':').reduce(function (acc, p) { return acc * 60 + (parseInt(p, 10) || 0); }, 0);
    var hms = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/);
    return hms ? (+hms[1] || 0) * 3600 + (+hms[2] || 0) * 60 + (+hms[3] || 0) : 0;
  }
  function startFromUrl(url) {
    var m = String(url || '').match(/[?&#](?:t|start)=([\dhms]+)/);
    return m ? seconds(m[1]) : 0;
  }
  function imgSrc(name) {
    var base = String(name || '').trim().replace(/^.*[\\/]/, '').replace(/\.[a-z0-9]+$/i, '');
    return 'img/' + encodeURIComponent(base) + '.webp';
  }
  function dayValue(date) {
    var d = new Date(String(date || '').trim() + 'T00:00:00');
    return isNaN(d) ? 0 : d.getTime();
  }
  // English title on top, Korean underneath (smaller).
  function twoLine(en, ko) {
    return '<span class="t-en">' + esc(en) + '</span>' + (ko ? '<span class="t-ko" lang="ko">' + esc(ko) + '</span>' : '');
  }
  // "Beginner Korean Shadowing | Where Is Jerry? | S0001" -> { num: "S0001", text: "Where Is Jerry?" }
  // "S022 제리는 강아지를 가지고 싶어해요" -> { num: "S022", text: "제리는 강아지를 가지고 싶어해요" }
  var CODE = /^(?:S|F)\d{3,4}(?:-[0-9A-Za-z]+)?$/;
  function shortTitle(raw) {
    var t = String(raw || '').replace(/\s+/g, ' ').trim();
    var num = '';
    var parts = t.split(/\s*\|\s*/).filter(Boolean);
    if (parts.length > 1) {
      parts = parts.filter(function (p) { return !/^(?:(?:Beginner|Intermediate|Advanced)\s+)?Korean\s+(?:Shadowing|Story|Stories)$/i.test(p) && !/^Learn Korean\b/i.test(p); });
      parts = parts.filter(function (p) {
        if (!num && (CODE.test(p) || /^EP\s?\d+$/i.test(p))) { num = p; return false; }
        return true;
      });
      t = parts.join(' | ');
    }
    var m;
    if (!num && (m = t.match(/^((?:S|F)\d{3,4}(?:-[0-9A-Za-z]+)?)\s+(.+)$/))) { num = m[1]; t = m[2]; }
    if (!num && (m = t.match(/^(.+?)\s+(EP\s?\d+)$/i))) { num = m[2]; t = m[1]; }
    return { num: num, text: t || String(raw || '') };
  }
  function titleHtml(raw) {
    var s = shortTitle(raw);
    return (s.num ? '<span class="tile-num">' + esc(s.num) + '</span>' : '') + '<p class="tile-title">' + esc(s.text) + '</p>';
  }
  function isNew(date, days) {
    var t = dayValue(date);
    if (!t) return false;
    var age = (Date.now() - t) / 86400000;
    return age >= -1 && (days ? age < days : age <= NEW_DAYS);
  }
  function videoIsNew(v) { return isNew(v.date, VIDEO_NEW_DAYS); }
  function tabHasNew(t) { return t.videos.some(videoIsNew); }
  function sectionHasNew(section) { return (tabsBySection[section] || []).some(tabHasNew); }

  /* ---------- sentences + grammar patterns: videos.json (made daily from the teacher's video list) ---------- */
  var INFO = {};            // id -> { s: [sentences], p: pattern key }
  var PATTERNS = {};
  var PATTERN_ORDER = [];
  var PATTERN_TABS = [];
  function loadVideoList() {
    if (!window.fetch) return;
    fetch('videos.json', { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
      if (!d) return;
      PATTERNS = d.patterns || {};
      PATTERN_ORDER = d.pattern_order || [];
      PATTERN_TABS = d.pattern_tabs || [];
      (d.videos || []).forEach(function (v) { INFO[v.id] = { s: v.sentences || [], p: v.pattern || '', ps: v.patterns || [] }; });
      var q = document.getElementById('q');
      var keep = q && document.activeElement === q;
      render(true);
      if (keep) { q = document.getElementById('q'); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
    }).catch(function () {});
  }
  function squash(s) { return String(s || '').toLowerCase().replace(/[^0-9a-z가-힣]/g, ''); }
  function linkOf(id) { return 'https://youtu.be/' + id; }

  /* ---------- read data.js ---------- */
  var problems = [];
  var tabsBySection = { story: [], shadowing: [], hangul: [] };   // [{ name, label, slug, videos: [] }]
  var allVideos = [];
  var byId = {};
  (window.VIDEOS || []).forEach(function (pl, i) {
    if (!pl) return;
    var where = 'VIDEOS block #' + (i + 1) + ' "' + (pl.playlist || '') + '"';
    var section = String(pl.section || '').toLowerCase().trim();
    if (section === 'repeat') section = 'shadowing';   // old name
    if (!tabsBySection[section]) return problems.push(where + ': section must be "story", "shadowing" or "hangul".');
    var name = String(pl.playlist || '').trim();
    if (!name) return problems.push(where + ': playlist name is missing.');
    var label = name.split(' | ').pop().trim();
    var tab = null;
    tabsBySection[section].forEach(function (t) { if (t.label === label) tab = t; });
    if (!tab) { tab = { name: name, label: label, ko: String(pl.ko || '').trim(), slug: slug(label) || 'list-' + i, videos: [] }; tabsBySection[section].push(tab); }
    (pl.videos || []).forEach(function (v, j) {
      if (!v) return;
      var id = youtubeId(v.youtube);
      if (!id) return problems.push(where + ' video #' + (j + 1) + ' "' + (v.title || '') + '": YouTube link not recognised.');
      var item = { section: section, tab: tab, title: v.title || 'Untitled video', id: id, date: v.date || '' };
      if (!byId[id]) byId[id] = item;
      tab.videos.push(item);
      allVideos.push(item);
    });
  });

  var books = {}; // name -> { name, level, episodes: [] }
  var bookOrder = [];
  (window.EPISODES || []).forEach(function (e, i) {
    if (!e) return;
    var where = 'EPISODES #' + (i + 1) + ' "' + (e.book || '') + ' ' + (e.episode || '') + '"';
    var name = String(e.book || '').trim();
    var level = levelOf(e.level);
    if (!name) return problems.push(where + ': book name is missing.');
    if (!level) return problems.push(where + ': unknown level "' + (e.level || '') + '".');
    var ep = {
      num: parseInt(e.episode, 10) || 0,
      title: String(e.title || '').trim(),
      text: String(e.text || ''),
      images: (e.images || []).filter(Boolean).slice(0, 2),
      date: e.date,
      audio: null
    };
    if (!ep.num) return problems.push(where + ': episode number is missing.');
    if (e.audio) {
      var y = youtubeId(e.audio);
      var d = /drive\.google|docs\.google/.test(e.audio) ? driveId(e.audio) : null;
      if (d) ep.audio = { kind: 'drive', id: d };
      else if (y) ep.audio = { kind: 'youtube', id: y, start: e.start != null && e.start !== '' ? seconds(e.start) : startFromUrl(e.audio) };
      else problems.push(where + ': audio link not recognised (use a Google Drive or YouTube link).');
    }
    if (!books[name]) { books[name] = { name: name, level: level, episodes: [] }; bookOrder.push(name); }
    var b = books[name];
    if (b.episodes.some(function (x) { return x.num === ep.num; })) return problems.push(where + ': this episode number is used twice.');
    b.episodes.push(ep);
  });
  bookOrder.forEach(function (n) { books[n].episodes.sort(function (a, b) { return a.num - b.num; }); });
  function bookIsNew(b) { return b.episodes.some(function (e) { return isNew(e.date); }); }
  function bookDate(b) { return Math.max.apply(null, b.episodes.map(function (e) { return dayValue(e.date); })); }

  // Tabs for a section — only the ones that have something in them.
  function tabsFor(section) {
    if (section === 'books') {
      return LEVELS.filter(function (lv) {
        return bookOrder.some(function (n) { return books[n].level === lv; });
      }).map(function (lv) { return { label: lv, ko: LEVELS_KO[lv], slug: slug(lv) }; });
    }
    var tabs = (tabsBySection[section] || []).filter(function (t) { return t.videos.length; });
    if (section === 'shadowing' && grammarReady()) tabs = tabs.concat([GRAMMAR_TAB]);
    return tabs;
  }
  function hasItems(section) { return tabsFor(section).length > 0; }

  /* ---------- Grammar Index (문형 찾기): patterns from videos.json, ㄱㄴㄷ order ---------- */
  var GRAMMAR_TAB = { label: 'Grammar Index', ko: '문형 찾기', slug: 'grammar-index', grammar: true, videos: [] };
  var HANGUL_ROW = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  function grammarReady() { return Object.keys(PATTERNS).length > 0; }
  function patternVideos(key) {
    return Object.keys(byId).filter(function (id) { return ((INFO[id] || {}).ps || []).indexOf(key) >= 0; })
      .map(function (id) { return byId[id]; });
  }
  function patternLetters(key) { var p = PATTERNS[key]; return (p && p.letters && p.letters.length) ? p.letters : ['ㅇ']; }
  function patternsFor(letter) {        // main ones (first letter) sorted by Korean, then cross-references
    var keys = Object.keys(PATTERNS).filter(function (k) { return patternVideos(k).length; });
    var main = keys.filter(function (k) { return patternLetters(k)[0] === letter; }).sort(function (a, b) {
      return squash(PATTERNS[a].ko).localeCompare(squash(PATTERNS[b].ko), 'ko');
    });
    var cross = keys.filter(function (k) { return patternLetters(k).slice(1).indexOf(letter) >= 0; });
    return { main: main, cross: cross };
  }
  function grammarHref(letter, key) {
    return '#/shadowing/grammar-index/' + encodeURIComponent(letter) + (key ? '/' + encodeURIComponent(key) : '');
  }
  function patternItem(k, letter) {
    var n = patternVideos(k).length;
    return '<a class="pattern-item lift" href="' + grammarHref(letter, k) + '">' +
      '<span class="pattern-ko" lang="ko">' + esc(PATTERNS[k].ko) + '</span>' +
      '<span class="pattern-en">' + esc(PATTERNS[k].en) + '</span>' +
      '<span class="pattern-count">' + n + (n === 1 ? ' video' : ' videos') + '</span></a>';
  }
  function viewGrammar(letter, key) {
    var avail = HANGUL_ROW.filter(function (L) { var x = patternsFor(L); return x.main.length || x.cross.length; });
    if (key && PATTERNS[key] && !letter) letter = patternLetters(key)[0];
    if (avail.indexOf(letter) < 0) letter = avail[0];
    var bar = '<div class="letter-bar" role="tablist" aria-label="Choose a letter">' + HANGUL_ROW.map(function (L) {
      var on = avail.indexOf(L) >= 0;
      return on ? '<a class="letter-btn" role="tab" data-replace href="' + grammarHref(L) + '" aria-selected="' + (L === letter) + '" lang="ko">' + L + '</a>'
        : '<span class="letter-btn" aria-disabled="true" lang="ko">' + L + '</span>';
    }).join('') + '</div>';
    if (key && PATTERNS[key]) {
      var vids = patternVideos(key);
      return bar + '<a class="back pattern-back" href="' + grammarHref(letter) + '">' + icon('back') + '<span lang="ko">' + letter + '</span></a>' +
        '<h2 class="pattern-head"><span class="pattern-ko" lang="ko">' + esc(PATTERNS[key].ko) + '</span>' +
        '<span class="pattern-en">' + esc(PATTERNS[key].en) + '</span></h2>' +
        '<p class="tab-count">' + vids.length + (vids.length === 1 ? ' video' : ' videos') + '</p>' + grid(vids);
    }
    var x = patternsFor(letter);
    return bar + '<div class="pattern-list">' + x.main.map(function (k) { return patternItem(k, letter); }).join('') + '</div>' +
      (x.cross.length ? '<p class="pattern-cross">' + x.cross.map(function (k) {
        var L = patternLetters(k)[0];
        return '<a href="' + grammarHref(L, k) + '"><span lang="ko">' + esc(PATTERNS[k].ko) + '</span> → <span lang="ko">' + L + '</span></a>';
      }).join('') + '</p>' : '');
  }

  /* ---------- views ---------- */
  var app = document.getElementById('app');

  function backLink(href) {
    return '<a class="back" href="' + href + '">' + icon('back') + '<span>Back</span></a>';
  }
  // Old sound-only videos whose YouTube thumbnail is plain black (checked 2026-10-28): drawn as an "Audio only" card instead.
  var AUDIO_ONLY = [
    '8HNzPtbpY3k', '8r6AmILfVjQ', 'C1upUISb21Q', 'CmU6RSyK35A', 'F9JEuWN_z9s', 'KlmRMcPgBco', 'SEfQFY4nl90',
    'TTitkxebJ8k', 'UC4a4QyhRwk', 'WmLcvubxwP8', 'XqqpZi0Ee1c', 'Y9QlQyF8bWg', '_gM4JRbBXBA', 'dhf7yD2Z1so',
    'j4WAE5YFzm8', 'jVHxXAHvwM4', 'puLLAeS_4SI', 't4aILpXaFOU', 'w52HMaNf0b8', 'x4dKLKf7Is0', 'xKY9tm_v1yg',
    'xZN67cYyIQs', 'zoFsR02O5Yg'
  ];
  function thumb(id) {
    if (AUDIO_ONLY.indexOf(id) >= 0) {
      return '<div class="tile-media video audio-lesson">' + icon('headphones') + '<span>Audio only</span></div>';
    }
    return '<div class="tile-media video"><img loading="lazy" src="https://i.ytimg.com/vi/' + id + '/mqdefault.jpg" alt=""></div>';
  }
  // Card = link to YouTube + two small buttons: copy this link / pick it (to copy several at once).
  function videoTile(v) {
    var picked = !!selected[v.id];
    var name = esc(shortTitle(v.title).text);
    return '<div class="tile lift video-tile' + (picked ? ' picked' : '') + '" data-id="' + v.id + '">' +
      '<a class="tile-link" href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener" title="' + esc(v.title) + '">' + thumb(v.id) +
      (videoIsNew(v) ? '<span class="badge-new">New</span>' : '') +
      '<div class="tile-body">' + titleHtml(v.title) + '</div></a>' +
      '<div class="tile-actions">' +
      '<button type="button" class="tile-btn" data-copy="' + v.id + '" aria-label="Copy title and link: ' + name + '">' + icon('link') + '<span>Copy</span></button>' +
      '<button type="button" class="tile-btn pick" data-pick="' + v.id + '" aria-pressed="' + picked + '" aria-label="Pick: ' + name + '">' + icon(picked ? 'check' : 'plus') + '<span>' + (picked ? 'Picked' : 'Pick') + '</span></button>' +
      '</div></div>';
  }
  function grid(list) { return '<div class="grid">' + list.map(videoTile).join('') + '</div>'; }

  /* ---------- copy links ---------- */
  var selected = {};          // id -> true, kept while moving between tabs
  function copyText(text, done) {
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      done(ok);
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
    else fallback();
  }
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }
  function pickedIds() { return Object.keys(byId).filter(function (id) { return selected[id]; }); }
  function pickBar() {
    var bar = document.getElementById('pickbar');
    var n = pickedIds().length;
    bar.hidden = !n;
    document.body.classList.toggle('has-pickbar', !!n);
    if (n) bar.querySelector('.pick-count').textContent = n + (n === 1 ? ' video picked' : ' videos picked');
  }
  function copyPicked() {
    var ids = pickedIds();
    var text = ids.map(function (id) { return shortTitle(byId[id].title).text + '\n' + linkOf(id); }).join('\n\n');
    copyText(text, function (ok) { toast(ok ? 'Copied ' + ids.length + (ids.length === 1 ? ' title + link' : ' titles + links') : 'Could not copy. Please try again.'); });
  }

  /* ---------- search (part of a sentence or a title) ---------- */
  var query = '';
  function searchBox() {                // phones get the short hint so it isn't cut off
    var hint = window.matchMedia('(max-width: 480px)').matches ? 'e.g. 강아지, want to' : 'Search a word or grammar, e.g. 강아지, want to';
    return '<form class="search" role="search" onsubmit="return false">' +
      '<label class="search-field">' + icon('search') +
      '<input type="search" id="q" placeholder="' + hint + '" value="' + esc(query) + '" autocomplete="off" aria-label="Search videos by sentence or title">' +
      '</label></form><div id="search-results" aria-live="polite"></div>';
  }
  function patternHits(q) {             // grammar patterns whose Korean name or English meaning has the words
    var nq = squash(q);
    if (!nq) return [];
    return Object.keys(PATTERNS).filter(function (k) {
      return patternVideos(k).length && (squash(PATTERNS[k].en).indexOf(nq) >= 0 || squash(PATTERNS[k].ko).indexOf(nq) >= 0);
    });
  }
  function searchHits(q) {
    var nq = squash(q);
    if (!nq) return [];
    var pk = patternHits(q);
    return Object.keys(byId).map(function (id) { return byId[id]; }).filter(function (v) {
      var info = INFO[v.id] || {};
      return [v.title].concat(info.s || []).some(function (s) { return squash(s).indexOf(nq) >= 0; }) ||
        (info.ps || []).some(function (k) { return pk.indexOf(k) >= 0; });
    });
  }
  function showSearch() {
    var box = document.getElementById('search-results');
    var body = document.getElementById('page-body');
    if (!box || !body) return;
    var q = query.trim();
    body.hidden = !!q;
    if (!q) { box.innerHTML = ''; return; }
    var hits = searchHits(q);
    var pk = patternHits(q);
    box.innerHTML = (pk.length ? '<div class="search-patterns"><p class="tab-count">Grammar patterns</p><div class="pattern-list">' +
        pk.map(function (k) { return patternItem(k, patternLetters(k)[0]); }).join('') + '</div></div>' : '') +
      '<p class="tab-count">' + (hits.length ? hits.length + (hits.length === 1 ? ' video' : ' videos') : 'No videos') + ' with “' + esc(q) + '”</p>' + grid(hits);
  }

  // "Just added": only items that carry a date in data.js (the day they were added to this site).
  function newRail() {
    var items = allVideos.map(function (v, i) {
      return { t: dayValue(v.date), i: i, html: function () {
        return '<a class="rail-item lift" href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener" title="' + esc(v.title) + '">' + thumb(v.id) +
          '<div class="tile-body"><span class="rail-kind">' + SECTIONS[v.section].title + '</span>' + titleHtml(v.title) + '</div></a>';
      } };
    });
    bookOrder.forEach(function (n, k) {
      var b = books[n];
      items.push({ t: bookDate(b), i: allVideos.length + k, html: function () {
        var cover = b.episodes[0].images[0];
        return '<a class="rail-item lift" href="' + bookHref(b) + '">' +
          '<div class="tile-media video">' + (cover ? '<img loading="lazy" src="' + imgSrc(cover) + '" alt="">' : '') + '</div>' +
          '<div class="tile-body"><span class="rail-kind">Books + Audio</span>' +
          '<p class="tile-title book-font" lang="ko">' + esc(b.name) + '</p></div></a>';
      } });
    });
    items = items.filter(function (x) { return x.t; })
      .sort(function (a, b) { return b.t - a.t || a.i - b.i; })
      .slice(0, NEW_RAIL);
    if (!items.length) return '';
    return '<section class="rail-wrap" aria-labelledby="new-title">' +
      '<h2 class="rail-title" id="new-title"><span class="badge-new">New</span> Just added</h2>' +
      '<div class="rail-frame">' +
      '<button type="button" class="rail-btn prev" data-rail="-1" aria-label="Scroll left">' + icon('left') + '</button>' +
      '<div class="rail" id="rail">' + items.map(function (x) { return x.html(); }).join('') + '</div>' +
      '<button type="button" class="rail-btn next" data-rail="1" aria-label="Scroll right">' + icon('right') + '</button>' +
      '</div></section>';
  }

  // Arrow buttons: one screen per click; dimmed at the start / end. No auto-scroll.
  function railState() {
    var r = document.getElementById('rail');
    if (!r) return;
    var prev = document.querySelector('.rail-btn.prev'), next = document.querySelector('.rail-btn.next');
    prev.disabled = r.scrollLeft <= 2;
    next.disabled = r.scrollLeft + r.clientWidth >= r.scrollWidth - 2;
  }
  function railMove(dir) {
    var r = document.getElementById('rail');
    if (!r) return;
    var smooth = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    r.scrollBy({ left: dir * Math.max(160, r.clientWidth - 48), behavior: smooth ? 'smooth' : 'auto' });
  }

  function viewHome() {
    var cards = ORDER.filter(hasItems).map(function (key) {
      var s = SECTIONS[key];
      return '<a class="home-card lift" href="#/' + key + '">' +
        (sectionHasNew(key) ? '<span class="badge-new home-new">New</span>' : '') +
        '<span class="home-card-text"><span class="home-card-title">' + twoLine(s.title, s.ko) + '</span>' +
        '<span class="home-card-desc">' + s.desc + '</span></span>' +
        charImg(key, 'home-card-char') + '</a>';
    }).join('');
    return '<h1 class="greeting">Welcome back! Happy studying.</h1>' +
      '<p class="greeting-sub">What would you like to do today?</p>' + searchBox() +
      '<div id="page-body"><nav class="home-cards" aria-label="Sections">' + cards +
      (grammarReady() ? '<a class="home-card home-card-wide lift" href="' + '#/shadowing/grammar-index' + '">' +
        '<span class="home-card-text"><span class="home-card-title">' + twoLine('Grammar Index', '문형 찾기') + '</span>' +
        '<span class="home-card-desc">Find videos by grammar pattern (ㄱ ㄴ ㄷ …)</span></span>' +
        '<img class="home-card-char" src="brand/char-peter.png" alt=""></a>' : '') +
      '</nav>' + newRail() + '</div>';
  }

  function heading(section) {
    return '<h1 class="page-title">' + charImg(section, 'title-char') + '<span class="title-stack">' + twoLine(SECTIONS[section].title, SECTIONS[section].ko) + '</span></h1>';
  }

  function pickTab(section, tabSlug) {
    var tabs = tabsFor(section);
    for (var i = 0; i < tabs.length; i++) if (tabs[i].slug === tabSlug) return tabs[i];
    return tabs[0] || null;
  }

  function tabBar(section, current) {
    var tabs = tabsFor(section);
    if (!tabs.length) return '';
    return '<div class="tabs" role="tablist" aria-label="Choose a list">' + tabs.map(function (t) {
      return '<a class="tab" role="tab" data-replace href="#/' + section + '/' + t.slug + '" aria-selected="' + (t.slug === current.slug) + '">' + twoLine(t.label, t.ko) +
        (t.videos && tabHasNew(t) ? '<span class="badge-new tab-new">New</span>' : '') + '</a>';
    }).join('') + '</div>';
  }

  function viewVideos(section, tabSlug, sub, sub2) {
    var tab = pickTab(section, tabSlug);
    if (!tab) return null;
    if (tab.grammar) return backLink('#/') + heading(section) + searchBox() + '<div id="page-body">' + tabBar(section, tab) + viewGrammar(sub, sub2) + '</div>';
    // NEW videos first (in their data.js order), then everything else in its usual order.
    var list = tab.videos.filter(videoIsNew).concat(tab.videos.filter(function (v) { return !videoIsNew(v); }));
    return backLink('#/') + heading(section) + searchBox() + '<div id="page-body">' + tabBar(section, tab) +
      '<p class="tab-count">' + list.length + (list.length === 1 ? ' video' : ' videos') + '</p>' +
      (PATTERN_TABS.indexOf(tab.name) >= 0 ? patternGroups(list) : grid(list)) + '</div>';
  }

  // Big lists (e.g. Beginner 2): one group per grammar pattern, in PATTERN_ORDER; videos without a pattern yet -> "More videos".
  function patternGroups(videos) {
    var groups = {}, keys = [];
    videos.forEach(function (v) {
      var p = (INFO[v.id] || {}).p;
      var k = p && PATTERNS[p] ? p : '';
      if (!groups[k]) { groups[k] = []; keys.push(k); }
      groups[k].push(v);
    });
    function rank(k) { var i = PATTERN_ORDER.indexOf(k); return !k ? 1e6 : i < 0 ? 1e5 : i; }
    keys.sort(function (a, b) { return rank(a) - rank(b); });
    return keys.map(function (k) {
      var p = PATTERNS[k];
      return '<section class="pattern-group"><h2 class="pattern-title">' +
        (p ? '<span class="t-en">' + esc(p.en) + '</span>' + (p.ko ? '<span class="t-ko" lang="ko">' + esc(p.ko) + '</span>' : '') : '<span class="t-en">More videos</span>') +
        '</h2>' + grid(groups[k]) + '</section>';
    }).join('');
  }

  function bookHref(b) { return '#/books/' + slug(b.level) + '/' + encodeURIComponent(b.name); }
  function epLabel(ep) { return 'Episode ' + ep.num; }

  function viewBooks(levelSlug) {
    var tab = pickTab('books', levelSlug);
    if (!tab) return null;
    var list = bookOrder.map(function (n) { return books[n]; }).filter(function (b) { return b.level === tab.label; });
    return backLink('#/') + heading('books') + tabBar('books', tab) +
      '<div class="grid">' + list.map(function (b) {
        var cover = b.episodes[0].images[0];
        var n = b.episodes.length;
        return '<a class="tile lift" href="' + bookHref(b) + '">' +
          '<div class="tile-media book">' + (cover ? '<img loading="lazy" src="' + imgSrc(cover) + '" alt="">' : '') + '</div>' +
          (bookIsNew(b) ? '<span class="badge-new">New</span>' : '') +
          '<div class="tile-body"><p class="tile-title book-font" lang="ko">' + esc(b.name) + '</p>' +
          '<p class="tile-meta">' + n + (n === 1 ? ' episode' : ' episodes') + '</p></div></a>';
      }).join('') + '</div>';
  }

  function viewBook(name) {
    var b = books[name];
    if (!b) return null;
    return backLink('#/books/' + slug(b.level)) +
      '<h1 class="page-title book-font" lang="ko">' + esc(b.name) + '</h1>' +
      '<p class="page-lead">' + b.level + ' · Choose an episode</p>' +
      '<ol class="ep-list">' + b.episodes.map(function (ep) {
        var th = ep.images[0];
        return '<li><a class="ep-row lift" href="' + bookHref(b) + '/' + ep.num + '">' +
          (th ? '<img class="ep-thumb" loading="lazy" src="' + imgSrc(th) + '" alt="">' : '') +
          '<span class="ep-text"><span class="ep-num">' + epLabel(ep) + (isNew(ep.date) ? ' <span class="badge-new">New</span>' : '') + '</span>' +
          (ep.title ? '<span class="ep-name book-font" lang="ko">' + esc(ep.title) + '</span>' : '') +
          '</span><span class="go">' + icon('chevron') + '</span></a></li>';
      }).join('') + '</ol>';
  }

  function paragraphs(text) {
    var marker = /^\s*\[(?:그림|image|picture)\]\s*$/i;
    var blocks = text.replace(/\r\n?/g, '\n').split(/\n[ \t]*\n/);
    var out = [], markerAt = -1;
    blocks.forEach(function (blk) {
      var keep = [];
      blk.split('\n').forEach(function (ln) {
        if (marker.test(ln)) {
          if (keep.join('').trim()) { out.push(keep.join('\n').trim()); keep = []; }
          if (markerAt < 0) markerAt = out.length;
        } else keep.push(ln);
      });
      var p = keep.join('\n').trim();
      if (p) out.push(p);
    });
    return { list: out, markerAt: markerAt };
  }

  function audioPlayer(a) {
    if (a.kind === 'drive') {
      return '<iframe class="drive" src="https://drive.google.com/file/d/' + a.id + '/preview" title="Story audio" allow="autoplay" loading="lazy"></iframe>' +
        '<a class="open-link" href="https://drive.google.com/file/d/' + a.id + '/view" target="_blank" rel="noopener">' + icon('external') + 'Open in Google Drive</a>';
    }
    var t = a.start || 0;
    return '<iframe class="yt" src="https://www.youtube-nocookie.com/embed/' + a.id + '?rel=0&start=' + t + '" title="Story audio" allow="encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>' +
      '<a class="open-link" href="https://www.youtube.com/watch?v=' + a.id + (t ? '&t=' + t + 's' : '') + '" target="_blank" rel="noopener">' + icon('external') + 'Open in YouTube</a>';
  }

  function viewEpisode(name, num) {
    var b = books[name];
    if (!b) return null;
    var idx = -1;
    b.episodes.forEach(function (e, i) { if (e.num === +num) idx = i; });
    if (idx < 0) return null;
    var ep = b.episodes[idx];
    var p = paragraphs(ep.text);
    var fig = function (n, cls) {
      return ep.images[n] ? '<figure class="story-figure ' + cls + '"><img src="' + imgSrc(ep.images[n]) + '" alt="Illustration ' + (n + 1) + '"></figure>' : '';
    };
    var mid = p.markerAt >= 0 ? p.markerAt : Math.ceil(p.list.length / 2);
    var body = '';
    p.list.forEach(function (para, i) {
      if (i === mid) body += '</div>' + fig(1, 'mid') + '<div class="story-text" lang="ko">';
      body += '<p>' + esc(para).replace(/\n/g, '<br>') + '</p>';
    });
    if (mid >= p.list.length) body += '</div>' + fig(1, 'mid') + '<div class="story-text" lang="ko">';

    var modes = '', player = '';
    if (ep.audio) {
      modes = '<div class="modes" role="group" aria-label="How do you want to study?">' +
        '<button type="button" class="mode" data-mode="both" aria-pressed="true">' + icon('book') + 'Read + listen</button>' +
        '<button type="button" class="mode" data-mode="read" aria-pressed="false">' + icon('eye') + 'Read only</button>' +
        '<button type="button" class="mode" data-mode="listen" aria-pressed="false">' + icon('headphones') + 'Listen only</button></div>';
      player = '<section class="player" id="player" aria-label="Audio">' + audioPlayer(ep.audio) + '</section>';
    }
    var prev = b.episodes[idx - 1], next = b.episodes[idx + 1];
    var nav = (prev || next) ? '<nav class="ep-nav">' +
      (prev ? '<a href="' + bookHref(b) + '/' + prev.num + '">' + icon('back') + epLabel(prev) + '</a>' : '') +
      (next ? '<a class="next" href="' + bookHref(b) + '/' + next.num + '">' + epLabel(next) + icon('chevron') + '</a>' : '') +
      '</nav>' : '';

    return backLink(bookHref(b)) +
      '<h1 class="page-title book-font" lang="ko">' + esc(b.name) + '</h1>' +
      '<p class="page-lead">' + epLabel(ep) + (ep.title ? ' · <span class="book-font" lang="ko">' + esc(ep.title) + '</span>' : '') + '</p>' +
      modes + player +
      '<article class="story" id="story">' +
      '<div class="hidden-note" role="status">' + icon('headphones') + '<span>Text is hidden.</span>' +
      '<button type="button" class="show-text">' + icon('text') + ' Show text</button></div>' +
      fig(0, 'top') +
      '<div class="story-text" lang="ko">' + body + '</div>' +
      '</article>' + nav;
  }

  function setMode(mode) {
    var player = document.getElementById('player');
    var story = document.getElementById('story');
    if (!story) return;
    Array.prototype.forEach.call(document.querySelectorAll('.mode'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === mode));
    });
    if (player) player.hidden = mode === 'read';
    story.classList.toggle('text-hidden', mode === 'listen');
  }

  function teacherNote() {
    if (!problems.length) return '';
    return '<div class="teacher-note"><strong>Note for the teacher:</strong> some items in data.js could not be shown.<ul>' +
      problems.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>';
  }

  /* ---------- router ---------- */
  function render(keepScroll) {
    var parts = location.hash.replace(/^#\/?/, '').split('/').map(function (s) {
      try { return decodeURIComponent(s); } catch (e) { return s; }
    });
    var html = null;
    if (parts[0] === 'repeat') { location.replace('#/shadowing' + (parts[1] ? '/' + parts[1] : '')); return; }   // old links
    if (!parts[0]) html = viewHome();
    else if (parts[0] === 'story' || parts[0] === 'shadowing' || parts[0] === 'hangul') html = viewVideos(parts[0], parts[1], parts[2], parts[3]);
    else if (parts[0] === 'books') {
      if (parts[3]) html = viewEpisode(parts[2], parts[3]);
      else if (parts[2]) html = viewBook(parts[2]);
      else html = viewBooks(parts[1]);
    }
    if (html == null) { location.replace('#/'); return; }
    app.innerHTML = html + teacherNote();
    showSearch();
    pickBar();
    var rail = document.getElementById('rail');
    if (rail) { rail.addEventListener('scroll', railState, { passive: true }); railState(); }
    if (keepScroll !== true) window.scrollTo(0, 0);
    document.title = (parts[0] && SECTIONS[parts[0]] ? SECTIONS[parts[0]].title + ' · ' : '') + 'K-Storyteller Library';
  }

  app.addEventListener('input', function (ev) {
    if (ev.target.id !== 'q') return;
    query = ev.target.value;
    showSearch();
  });
  function redrawTile(id) {
    Array.prototype.forEach.call(document.querySelectorAll('.video-tile[data-id="' + id + '"]'), function (tile) { tile.outerHTML = videoTile(byId[id]); });
  }
  app.addEventListener('click', function (ev) {
    var b = ev.target.closest ? ev.target.closest('[data-copy], [data-pick]') : null;
    if (b) {
      var id = b.getAttribute('data-copy');
      if (id) {   // same "title + link" form as copying picked videos
        copyText(shortTitle(byId[id].title).text + '\n' + linkOf(id), function (ok) { toast(ok ? 'Copied title + link' : 'Could not copy. Please try again.'); });
        return;
      }
      id = b.getAttribute('data-pick');
      if (selected[id]) delete selected[id]; else selected[id] = true;
      redrawTile(id);
      pickBar();
      return;
    }
    var t = ev.target.closest ? ev.target.closest('[data-mode], .show-text, [data-replace], [data-rail]') : null;
    if (!t) return;
    if (t.hasAttribute('data-rail')) { railMove(+t.getAttribute('data-rail')); return; }
    if (t.hasAttribute('data-replace')) {          // tabs: don't pile up history
      ev.preventDefault();
      location.replace(t.getAttribute('href'));
      return;
    }
    if (t.classList.contains('show-text')) setMode('both');
    else setMode(t.getAttribute('data-mode'));
  });

  document.body.insertAdjacentHTML('beforeend',
    '<div class="pickbar" id="pickbar" hidden><span class="pick-count"></span>' +
    '<button type="button" class="pick-copy">' + icon('link') + '<span>Copy titles + links</span></button>' +
    '<button type="button" class="pick-clear" aria-label="Clear picks">' + icon('close') + '</button></div>' +
    '<div class="toast" id="toast" role="status" aria-live="polite"></div>');
  document.getElementById('pickbar').addEventListener('click', function (ev) {
    if (ev.target.closest('.pick-copy')) copyPicked();
    else if (ev.target.closest('.pick-clear')) {
      var ids = pickedIds();
      selected = {};
      ids.forEach(redrawTile);
      pickBar();
    }
  });
  window.addEventListener('hashchange', function () { query = ''; render(); });
  loadVideoList();
  window.addEventListener('resize', railState);
  render();
})();
