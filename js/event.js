/* Event page: event.html?e=<slug>[&drill=<topicId>] */
(function () {
  var h = UI.h;
  UI.header('event');

  var params = new URLSearchParams(location.search);
  var slug = params.get('e');
  var ev = EVENTS.filter(function (e) { return e.slug === slug; })[0];
  var root = document.getElementById('event');

  if (!ev) {
    root.append(h('h1', { text: 'Event not found' }), h('p', null, 'Head back to the ', h('a', { href: 'index.html', text: 'home page' }), ' and pick an event.'));
    return;
  }
  document.title = ev.name + ' - Murphy\'s Review Den';

  var bank = window.QBANK[ev.slug] || { questions: [], pairs: [] };
  var hasQ = bank.questions.length > 0;
  var hasPairs = (bank.pairs || []).length >= 3;

  /* ---------- top ---------- */
  var cb = h('input', { type: 'checkbox', id: 'mine', checked: Store.isMine(ev.slug) });
  cb.addEventListener('change', function () { Store.toggleMine(ev.slug, cb.checked); });
  root.append(
    h('p', { class: 'crumb' }, h('a', { href: 'index.html', text: 'All events' })),
    h('h1', { text: ev.name }),
    h('p', { class: 'lede', text: ev.summary }),
    h('p', { class: 'badges' },
      h('span', { class: 'pill', text: 'Team of ' + ev.team }),
      h('span', { class: 'pill', text: ev.time }),
      h('span', { class: 'pill', text: 'Calculator: ' + ev.calc }),
      h('span', { class: 'pill', text: ev.resource.label })),
    h('label', { class: 'mine', for: 'mine' }, cb, ' I\'m in this event'));

  /* ---------- tabs ---------- */
  var meet = (window.MEET || {})[ev.slug];
  var tabDefs = [['games', 'Games'], ['exam', 'Practice exam']].concat(meet ? [['meet', 'First meet']] : []).concat([['topics', 'My progress'], ['sheet', ev.resource.kind === 'binder' ? 'Binder' : 'Sheet'], ['links', 'Test links']]);
  var tablist = h('div', { class: 'tabs', role: 'tablist' });
  var panels = {};
  tabDefs.forEach(function (d) {
    var b = h('button', { type: 'button', role: 'tab', id: 'tab-' + d[0], 'aria-controls': 'panel-' + d[0], 'aria-selected': 'false', tabindex: '-1', class: 'tab' }, d[1]);
    b.addEventListener('click', function () { show(d[0]); });
    b.addEventListener('keydown', function (e) {
      var i = tabDefs.findIndex(function (x) { return x[0] === d[0]; });
      if (e.key === 'ArrowRight') { show(tabDefs[(i + 1) % tabDefs.length][0], true); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { show(tabDefs[(i + tabDefs.length - 1) % tabDefs.length][0], true); e.preventDefault(); }
    });
    tablist.append(b);
    panels[d[0]] = h('section', { class: 'panel', role: 'tabpanel', id: 'panel-' + d[0], 'aria-labelledby': 'tab-' + d[0], hidden: true });
  });
  root.append(tablist);
  tabDefs.forEach(function (d) { root.append(panels[d[0]]); });

  function show(key, focus) {
    Games.stop();
    tabDefs.forEach(function (d) {
      var on = d[0] === key;
      var t = document.getElementById('tab-' + d[0]);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      t.classList.toggle('on', on);
      panels[d[0]].hidden = !on;
      if (on && focus) t.focus();
    });
    if (key === 'topics') renderTopics();
  }

  /* ---------- games ---------- */
  var gMenu = h('div'), gStage = h('div', { class: 'stage' });
  panels.games.append(gMenu, gStage);

  function ctxFor(stage, exit, topic) {
    return { ev: ev, bank: bank, stage: stage, exit: exit, topic: topic || null };
  }
  function exitGames() { Games.stop(); gStage.replaceChildren(); gMenu.hidden = false; renderTopics(); }
  function startGame(mode, topic) {
    gMenu.hidden = true;
    Games.run(mode, ctxFor(gStage, exitGames, topic));
    gStage.scrollIntoView({ block: 'nearest' });
  }

  function renderGameMenu() {
    gMenu.replaceChildren();
    if (!hasQ && ev.special !== 'cipher') {
      gMenu.append(h('div', { class: 'soon' }, UI.murphy('big'),
        h('h3', { text: 'Games coming soon' }),
        h('p', { text: ev.topics.length ? 'Murphy is still digging up questions for this event. Check the Sheet and Test links tabs in the meantime.' : 'This event has no quiz-style games. See the other tabs for tips.' })));
      return;
    }
    var cards = [];
    if (hasQ) {
      cards.push(['quiz', 'Quiz', '10 questions with instant explanations.']);
      cards.push(['blitz', 'Beat the clock', 'How many can you get right in 60 seconds?']);
      cards.push(['streak', 'Murphy\'s Challenge', 'Keep a streak going. Three misses and you are out.']);
      cards.push(['cards', 'Flashcards', 'Flip, think, then mark what you knew.']);
    }
    if (hasPairs) cards.push(['match', 'Matching', 'Pair each term with its meaning.']);
    if (ev.special === 'cipher') cards.push(['cipher', 'Cipher trainer', 'Decode new Caesar, Atbash, Aristocrat and Patristocrat puzzles every time.']);
    var grid = h('div', { class: 'gmenu' });
    cards.forEach(function (c) {
      grid.append(h('button', { type: 'button', class: 'gcard', onclick: function () { startGame(c[0]); } },
        h('strong', { text: c[1] }), h('span', { text: c[2] })));
    });
    gMenu.append(grid);
    if (hasQ && ev.topics.length) {
      var sel = h('select', { id: 'topic-pick' }, h('option', { value: '', text: 'All topics' }));
      ev.topics.forEach(function (t) { if (bank.questions.some(function (q) { return q.t === t.id; })) sel.append(h('option', { value: t.id, text: t.name })); });
      gMenu.append(h('div', { class: 'drill' },
        h('label', { for: 'topic-pick', text: 'Practice just one topic:' }), sel,
        h('button', { type: 'button', class: 'btn', onclick: function () { startGame('quiz', sel.value || null); } }, 'Quiz me on it')));
    }
  }

  /* ---------- exam ---------- */
  var eIntro = h('div'), eStage = h('div', { class: 'stage' });
  panels.exam.append(eIntro, eStage);
  function renderExamIntro() {
    eIntro.replaceChildren();
    eIntro.hidden = false;
    if (!hasQ) {
      eIntro.append(h('div', { class: 'soon' }, UI.murphy('big'), h('h3', { text: 'Practice exam coming soon' }),
        h('p', { text: 'Use the Test links tab to find real past tests for this event.' })));
      return;
    }
    var n = Math.min(20, bank.questions.length);
    eIntro.append(
      h('h2', { text: 'Practice exam' }),
      h('p', { text: 'Take a ' + n + '-question test with no feedback until you turn it in, just like the real thing. Then review every answer.' }),
      bank.questions.length < 20 ? h('p', { class: 'fine', text: 'This is a mini exam for now because this event has ' + bank.questions.length + ' questions so far.' }) : null,
      h('button', {
        type: 'button', class: 'btn btn-go', onclick: function () {
          eIntro.hidden = true;
          Games.run('exam', ctxFor(eStage, function () { Games.stop(); eStage.replaceChildren(); eIntro.hidden = false; renderTopics(); }));
        }
      }, 'Start exam'));
  }

  /* ---------- progress ---------- */
  function renderTopics() {
    var p = panels.topics;
    p.replaceChildren(h('h2', { text: 'My progress' }));
    if (!ev.topics.length) { p.append(h('p', { text: 'No topics tracked for this event.' })); return; }
    var rows = Plan.forEvent(ev);
    var anyTried = rows.some(function (r) { return r.st.tried > 0; });
    p.append(h('p', { text: anyTried ? 'Weakest topics are listed first. A topic needs at least 3 answers before it is rated.' : 'Play some games and your strongest and weakest topics will show up here.' }));
    var list = h('ul', { class: 'topic-list' });
    rows.forEach(function (r) {
      var drillable = bank.questions.some(function (q) { return q.t === r.id; });
      list.append(h('li', { class: 'tp ' + r.st.key },
        h('div', { class: 'tp-top' },
          h('span', { class: 'tp-name', text: r.name }),
          h('span', { class: 'tp-label', text: r.st.label + (r.st.pct != null ? ' - ' + r.st.right + '/' + r.st.tried + ' (' + r.st.pct + '%)' : '') })),
        h('div', { class: 'bar', 'aria-hidden': 'true' }, h('span', { style: 'width:' + (r.st.pct || 0) + '%' })),
        drillable ? h('button', { type: 'button', class: 'btn btn-small', onclick: function () { show('games'); startGame('quiz', r.id); } }, 'Drill this topic') : null));
    });
    p.append(list);
    if (Store.best(ev.slug)) p.append(h('p', { class: 'fine', text: 'Your best Murphy\'s Challenge streak: ' + Store.best(ev.slug) }));
    p.append(h('p', { class: 'fine' }, 'To keep your progress on another computer, use ',
      h('button', { type: 'button', class: 'linklike', onclick: UI.openProgress }, 'Save or load progress'), '.'));
  }

  /* ---------- first meet ---------- */
  function renderMeet() {
    if (!meet) return;
    var p = panels.meet;
    p.replaceChildren(h('h2', { text: 'What the first meet tested' }),
      h('p', { class: 'fine', text: window.MEET_TITLE + '. Notes in our own words.' }),
      h('h3', { text: 'What showed up' }), h('p', { text: meet.about }),
      h('h3', { text: 'Tip' }), h('p', { text: meet.tip }),
      h('p', { class: 'fine', text: 'Answer keys at invitationals can have mistakes. If a key seems wrong, check the rule book or ask your coach.' }));
  }

  /* ---------- sheet / binder ---------- */
  function renderSheet() {
    var p = panels.sheet, r = ev.resource;
    p.replaceChildren(h('h2', { text: r.kind === 'binder' ? 'Binder' : (r.kind === 'none' ? 'What you can bring' : 'Sheet') }),
      h('div', { class: 'rules' }, h('strong', { text: r.label + '. ' }), r.text,
        h('span', { class: 'fine', text: ' (From the 2027 Division B rule book. If a tournament sends different rules, follow the tournament.)' })));
    if (r.kind === 'none') {
      p.append(h('h3', { text: 'How to prepare' }),
        h('ul', { class: 'tips' }, h('li', { text: 'Nothing goes in with you, so build the skill by repeating it. Short, frequent practice beats one long session.' }), h('li', { text: 'Use the Games tab to rehearse, then time yourself.' })));
      return;
    }
    var many = r.kind === 'sheets2' ? 2 : 1;
    p.append(h('h3', { text: r.kind === 'binder' ? 'Suggested tabs' : 'Sheet planner' }),
      h('p', { text: r.kind === 'binder' ? 'Give each topic its own tab. Put the facts you need to look up fast on top, then the long reference pages behind them.' : 'Plan what goes on your sheet. Space is tight, so keep formulas, tables, diagrams and lists you cannot memorize.' + (many === 2 ? ' You have two sheets, so split by topic.' : '') }));
    var ol = h('ol', { class: 'planner' });
    ev.topics.forEach(function (t) {
      ol.append(h('li', null, h('strong', { text: t.name }), h('div', { class: 'lines', 'aria-hidden': 'true' })));
    });
    if (r.kind === 'binder') ol.append(h('li', null, h('strong', { text: 'Practice tests and mistakes' }), h('div', { class: 'lines', 'aria-hidden': 'true' })));
    p.append(ol, h('div', { class: 'row no-print' }, h('button', { type: 'button', class: 'btn', onclick: function () { window.print(); } }, 'Print this page')));
  }

  /* ---------- links ---------- */
  function renderLinks() {
    var p = panels.links;
    p.replaceChildren(h('h2', { text: 'Find real practice tests' }));
    if (ev.links.length) {
      p.append(h('h3', { text: 'For this event' }));
      var ul1 = h('ul', { class: 'linklist' });
      ev.links.forEach(function (l) { ul1.append(h('li', null, h('a', { href: l.url, target: '_blank', rel: 'noopener', text: l.label }))); });
      p.append(ul1);
    }
    p.append(h('h3', { text: 'Test archives for every event' }));
    var ul = h('ul', { class: 'linklist' });
    GENERAL_LINKS.forEach(function (l) {
      ul.append(h('li', null, h('a', { href: l.url, target: '_blank', rel: 'noopener', text: l.label }), h('span', { class: 'note', text: ' ' + l.note })));
    });
    p.append(ul, h('p', { class: 'fine', text: 'Tests belong to the people who wrote them, so this site links to them instead of copying them. Older tests were written for older rules. Before you study a test, check its topics against this year\'s rule book. Look for the rotation in the title: a topic from last year may no longer be tested.' }));
  }

  renderGameMenu(); renderExamIntro(); renderMeet(); renderSheet(); renderLinks();

  var drill = params.get('drill');
  show('games');
  if (drill && hasQ) startGame('quiz', drill);
})();
