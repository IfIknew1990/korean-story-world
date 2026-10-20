/* K-Storyteller Library — renders everything from data.js. Edit data.js, not this file. */
(function () {
  'use strict';

  var LEVELS = ['Beginner 1', 'Beginner 2', 'Beginner 3', 'Intermediate 1', 'Intermediate 2'];
  var NEW_DAYS = 14;
  var SECTIONS = {
    story: { title: 'Story Videos', desc: 'Watch a story in Korean', icon: 'film' },
    repeat: { title: 'Repeat Videos', desc: 'Watch and repeat out loud', icon: 'repeat' },
    books: { title: 'Books + Audio', desc: 'Read and listen to stories', icon: 'bookAudio' }
  };

  var ICONS = {
    back: '<path d="M15 18l-6-6 6-6"/>',
    chevron: '<path d="M9 18l6-6-6-6"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
    repeat: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
    bookAudio: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/><path d="M9.5 12V9.6a2.5 2.5 0 0 1 5 0V12"/><rect x="8.5" y="11" width="2" height="3" rx=".8"/><rect x="13.5" y="11" width="2" height="3" rx=".8"/>',
    book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/>',
    text: '<path d="M4 6h16M4 12h16M4 18h10"/>'
  };
  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function levelOf(s) {
    var key = String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    for (var i = 0; i < LEVELS.length; i++) {
      if (LEVELS[i].toLowerCase().replace(/[^a-z0-9]/g, '') === key) return LEVELS[i];
    }
    return null;
  }
  function slug(level) { return level.toLowerCase().replace(/\s+/g, '-'); }
  function levelFromSlug(s) { return levelOf(s); }

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
    var hms = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/);
    if (/:/.test(t)) {
      return t.split(':').reduce(function (acc, p) { return acc * 60 + (parseInt(p, 10) || 0); }, 0);
    }
    if (hms) return (+hms[1] || 0) * 3600 + (+hms[2] || 0) * 60 + (+hms[3] || 0);
    return 0;
  }
  function startFromUrl(url) {
    var m = String(url || '').match(/[?&#](?:t|start)=([\dhms]+)/);
    return m ? seconds(m[1]) : 0;
  }
  function imgSrc(name) {
    var base = String(name || '').trim().replace(/^.*[\\/]/, '').replace(/\.[a-z0-9]+$/i, '');
    return 'img/' + encodeURIComponent(base) + '.webp';
  }
  function isNew(date) {
    if (!date) return false;
    var d = new Date(String(date).trim() + 'T00:00:00');
    if (isNaN(d)) return false;
    var age = (Date.now() - d.getTime()) / 86400000;
    return age >= -1 && age <= NEW_DAYS;
  }

  /* ---------- read data.js ---------- */
  var problems = [];
  var videos = [];
  (window.VIDEOS || []).forEach(function (v, i) {
    if (!v) return;
    var where = 'VIDEOS #' + (i + 1) + ' "' + (v.title || '') + '"';
    var type = String(v.type || '').toLowerCase().trim();
    var level = levelOf(v.level);
    var id = youtubeId(v.youtube);
    if (type !== 'story' && type !== 'repeat') return problems.push(where + ': type must be "story" or "repeat".');
    if (!level) return problems.push(where + ': unknown level "' + (v.level || '') + '".');
    if (!id) return problems.push(where + ': YouTube link not recognised.');
    videos.push({ type: type, level: level, title: v.title || 'Untitled video', id: id });
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

  function levelsFor(section) {
    return LEVELS.filter(function (lv) {
      if (section === 'books') return bookOrder.some(function (n) { return books[n].level === lv; });
      return videos.some(function (v) { return v.type === section && v.level === lv; });
    });
  }
  function sectionHasItems(section) { return levelsFor(section).length > 0; }

  /* ---------- views ---------- */
  var app = document.getElementById('app');

  function backLink(href, label) {
    return '<a class="back" href="' + href + '">' + icon('back') + '<span>' + esc(label || 'Back') + '</span></a>';
  }

  function viewHome() {
    var cards = ['story', 'repeat', 'books'].filter(sectionHasItems).map(function (key) {
      var s = SECTIONS[key];
      return '<a class="home-card lift" href="#/' + key + '">' +
        '<span class="icon-badge">' + icon(s.icon) + '</span>' +
        '<span><span class="home-card-title">' + s.title + '</span>' +
        '<span class="home-card-desc" style="display:block">' + s.desc + '</span></span>' +
        '<span class="go">' + icon('chevron') + '</span></a>';
    }).join('');
    return '<h1 class="greeting">Welcome back! Happy studying.</h1>' +
      '<p class="greeting-sub">What would you like to do today?</p>' +
      '<nav class="home-cards" aria-label="Sections">' + cards + '</nav>';
  }

  function tabs(section, current) {
    var lvls = levelsFor(section);
    if (!lvls.length) return '';
    return '<div class="tabs" role="tablist" aria-label="Level">' + lvls.map(function (lv) {
      return '<a class="tab" role="tab" data-replace href="#/' + section + '/' + slug(lv) + '" aria-selected="' + (lv === current) + '">' + lv + '</a>';
    }).join('') + '</div>';
  }

  function heading(section) {
    var s = SECTIONS[section];
    return '<h1 class="page-title"><span class="icon-badge">' + icon(s.icon) + '</span>' + s.title + '</h1>';
  }

  function pickLevel(section, levelSlug) {
    var lvls = levelsFor(section);
    var lv = levelFromSlug(levelSlug);
    return lvls.indexOf(lv) >= 0 ? lv : lvls[0];
  }

  function viewVideos(section, levelSlug) {
    var lv = pickLevel(section, levelSlug);
    if (!lv) return null;
    var items = videos.filter(function (v) { return v.type === section && v.level === lv; });

    return backLink('#/') + heading(section) + tabs(section, lv) +
      '<div class="grid">' + items.map(function (v) {
        return '<a class="tile lift" href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener">' +
          '<div class="tile-media video"><img loading="lazy" src="https://i.ytimg.com/vi/' + v.id + '/mqdefault.jpg" alt="">' +
          '</div>' +
          '<div class="tile-body"><p class="tile-title">' + esc(v.title) + '</p></div></a>';
      }).join('') + '</div>';
  }

  function bookHref(b) { return '#/books/' + slug(b.level) + '/' + encodeURIComponent(b.name); }
  function epLabel(ep) { return 'Episode ' + ep.num; }

  function viewBooks(levelSlug) {
    var lv = pickLevel('books', levelSlug);
    if (!lv) return null;
    var list = bookOrder.map(function (n) { return books[n]; }).filter(function (b) { return b.level === lv; });

    return backLink('#/') + heading('books') + tabs('books', lv) +
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

  function findBook(levelSlug, name) {
    var b = books[name];
    return b && slug(b.level) === levelSlug ? b : (b || null);
  }

  function viewBook(levelSlug, name) {
    var b = findBook(levelSlug, name);
    if (!b) return null;
    return backLink('#/books/' + slug(b.level)) +
      '<h1 class="page-title book-font" lang="ko">' + esc(b.name) + '</h1>' +
      '<p class="page-lead">' + b.level + ' · Choose an episode</p>' +
      '<ol class="ep-list">' + b.episodes.map(function (ep) {
        var th = ep.images[0];
        return '<li><a class="ep-row lift" href="' + bookHref(b) + '/' + ep.num + '">' +
          (th ? '<img class="ep-thumb" loading="lazy" src="' + imgSrc(th) + '" alt="">' : '') +
          '<span class="ep-text"><span class="ep-num">' + epLabel(ep) + (isNew(ep.date) ? ' <span class="badge-new">New</span>' : '') + '</span>' +
          (ep.title ? '<span class="ep-name book-font" lang="ko" style="display:block">' + esc(ep.title) + '</span>' : '') +
          '</span><span class="go">' + icon('chevron') + '</span></a></li>';
      }).join('') + '</ol>';
  }

  function paragraphs(text) {
    var marker = /^\s*\[(?:그림|image|picture)\]\s*$/i;
    var blocks = text.replace(/\r\n?/g, '\n').split(/\n[ \t]*\n/);
    var out = [], markerAt = -1;
    blocks.forEach(function (blk) {
      var lines = blk.split('\n');
      // a marker line can sit inside a block too
      var keep = [];
      lines.forEach(function (ln) {
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

  function viewEpisode(levelSlug, name, num) {
    var b = findBook(levelSlug, name);
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
    else if (parts[0] === 'story' || parts[0] === 'repeat') html = viewVideos(parts[0], parts[1]);
    else if (parts[0] === 'books') {
      if (parts[3]) html = viewEpisode(parts[1], parts[2], parts[3]);
      else if (parts[2]) html = viewBook(parts[1], parts[2]);
      else html = viewBooks(parts[1]);
    }
    if (html == null) { location.replace('#/'); return; }
    app.innerHTML = html + teacherNote();
    window.scrollTo(0, 0);
    document.title = (parts[0] && SECTIONS[parts[0]] ? SECTIONS[parts[0]].title + ' · ' : '') + 'K-Storyteller Library';
  }

  app.addEventListener('click', function (ev) {
    var t = ev.target.closest ? ev.target.closest('[data-mode], .show-text, [data-replace]') : null;
    if (!t) return;
    if (t.hasAttribute('data-replace')) {          // level tabs: don't pile up history
      ev.preventDefault();
      location.replace(t.getAttribute('href'));
      return;
    }
    if (t.classList.contains('show-text')) setMode('both');
    else setMode(t.getAttribute('data-mode'));
  });

  window.addEventListener('hashchange', render);
  render();
})();
