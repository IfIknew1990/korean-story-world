/* K-Storyteller Library — renders everything from data.js. Edit data.js, not this file. */
(function () {
  'use strict';

  var LEVELS = ['Beginner 1', 'Beginner 2', 'Beginner 3', 'Intermediate 1', 'Intermediate 2'];
  var NEW_DAYS = 14;
  var NEW_RAIL = 8;
  var LEVELS_KO = { 'Beginner 1': '초급 1', 'Beginner 2': '초급 2', 'Beginner 3': '초급 3', 'Intermediate 1': '중급 1', 'Intermediate 2': '중급 2' };
  var SECTIONS = {
    story: { title: 'Story Videos', ko: '이야기 영상', desc: 'Watch a story in Korean', char: 'peter' },
    repeat: { title: 'Repeat Videos', ko: '따라 하기 영상', desc: 'Watch and repeat out loud', char: 'alien' },
    books: { title: 'Books + Audio', ko: '책과 오디오', desc: 'Read and listen to stories', char: 'ghost' },
    hangul: { title: 'Hangul', ko: '한글', desc: 'Learn the Korean alphabet', char: 'knight' }
  };
  var ORDER = ['story', 'repeat', 'books', 'hangul'];

  var ICONS = {
    back: '<path d="M15 18l-6-6 6-6"/>',
    chevron: '<path d="M9 18l6-6-6-6"/>',
    book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/>',
    left: '<path d="M15 18l-6-6 6-6"/>',
    right: '<path d="M9 18l6-6-6-6"/>',
    text: '<path d="M4 6h16M4 12h16M4 18h10"/>'
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
  function isNew(date) {
    var t = dayValue(date);
    if (!t) return false;
    var age = (Date.now() - t) / 86400000;
    return age >= -1 && age <= NEW_DAYS;
  }

  /* ---------- read data.js ---------- */
  var problems = [];
  var tabsBySection = { story: [], repeat: [], hangul: [] };   // [{ name, label, slug, videos: [] }]
  var allVideos = [];
  (window.VIDEOS || []).forEach(function (pl, i) {
    if (!pl) return;
    var where = 'VIDEOS block #' + (i + 1) + ' "' + (pl.playlist || '') + '"';
    var section = String(pl.section || '').toLowerCase().trim();
    if (!tabsBySection[section]) return problems.push(where + ': section must be "story", "repeat" or "hangul".');
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
    return (tabsBySection[section] || []).filter(function (t) { return t.videos.length; });
  }
  function hasItems(section) { return tabsFor(section).length > 0; }

  /* ---------- views ---------- */
  var app = document.getElementById('app');

  function backLink(href) {
    return '<a class="back" href="' + href + '">' + icon('back') + '<span>Back</span></a>';
  }
  function thumb(id) {
    return '<div class="tile-media video"><img loading="lazy" src="https://i.ytimg.com/vi/' + id + '/mqdefault.jpg" alt=""></div>';
  }
  function videoTile(v) {
    return '<a class="tile lift" href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener" title="' + esc(v.title) + '">' + thumb(v.id) +
      '<div class="tile-body">' + titleHtml(v.title) + '</div></a>';
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
        '<span class="home-card-text"><span class="home-card-title">' + twoLine(s.title, s.ko) + '</span>' +
        '<span class="home-card-desc">' + s.desc + '</span></span>' +
        charImg(key, 'home-card-char') + '</a>';
    }).join('');
    return '<h1 class="greeting">Welcome back! Happy studying.</h1>' +
      '<p class="greeting-sub">What would you like to do today?</p>' +
      '<nav class="home-cards" aria-label="Sections">' + cards + '</nav>' + newRail();
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
      return '<a class="tab" role="tab" data-replace href="#/' + section + '/' + t.slug + '" aria-selected="' + (t.slug === current.slug) + '">' + twoLine(t.label, t.ko) + '</a>';
    }).join('') + '</div>';
  }

  function viewVideos(section, tabSlug) {
    var tab = pickTab(section, tabSlug);
    if (!tab) return null;
    return backLink('#/') + heading(section) + tabBar(section, tab) +
      '<p class="tab-count">' + tab.videos.length + (tab.videos.length === 1 ? ' video' : ' videos') + '</p>' +
      '<div class="grid">' + tab.videos.map(videoTile).join('') + '</div>';
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
  function render() {
    var parts = location.hash.replace(/^#\/?/, '').split('/').map(function (s) {
      try { return decodeURIComponent(s); } catch (e) { return s; }
    });
    var html = null;
    if (!parts[0]) html = viewHome();
    else if (parts[0] === 'story' || parts[0] === 'repeat' || parts[0] === 'hangul') html = viewVideos(parts[0], parts[1]);
    else if (parts[0] === 'books') {
      if (parts[3]) html = viewEpisode(parts[2], parts[3]);
      else if (parts[2]) html = viewBook(parts[2]);
      else html = viewBooks(parts[1]);
    }
    if (html == null) { location.replace('#/'); return; }
    app.innerHTML = html + teacherNote();
    var rail = document.getElementById('rail');
    if (rail) { rail.addEventListener('scroll', railState, { passive: true }); railState(); }
    window.scrollTo(0, 0);
    document.title = (parts[0] && SECTIONS[parts[0]] ? SECTIONS[parts[0]].title + ' · ' : '') + 'K-Storyteller Library';
  }

  app.addEventListener('click', function (ev) {
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

  window.addEventListener('hashchange', render);
  window.addEventListener('resize', railState);
  render();
})();
