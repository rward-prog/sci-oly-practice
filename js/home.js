/* Home page */
(function () {
  var h = UI.h;
  UI.header('home');

  var COLORS = ['teal', 'coral', 'sun', 'grape'];
  var onlyMine = false;

  function planPanel() {
    var box = document.getElementById('plan');
    box.replaceChildren();
    var items = Plan.overall(EVENTS, 5);
    var mine = EVENTS.filter(function (e) { return Store.isMine(e.slug); });
    box.append(h('h2', { text: 'What to work on' }));
    if (!items.length) {
      box.append(h('p', {
        text: mine.length
          ? 'Play a few games in your events and Murphy will point out the topics that need work.'
          : 'Tick "I\'m in this event" on your events below, then play some games. Murphy will tell you what to practice next.'
      }));
      return;
    }
    var list = h('ul', { class: 'next-list' });
    items.forEach(function (t) {
      list.append(h('li', null,
        h('span', null, h('strong', { text: t.ev.name }), ': ' + t.name + ' - ' + t.st.label + (t.st.pct != null ? ' (' + t.st.pct + '% of ' + t.st.tried + ')' : '')),
        h('a', { class: 'btn btn-small', href: 'event.html?e=' + t.ev.slug + '&drill=' + t.id }, 'Drill it')));
    });
    box.append(list);
  }

  function grid() {
    var g = document.getElementById('grid');
    g.replaceChildren();
    var shown = EVENTS.filter(function (e) { return !onlyMine || Store.isMine(e.slug); });
    if (!shown.length) {
      g.append(h('p', { class: 'empty', text: 'No events picked yet. Turn off the filter and tick the events you are in.' }));
      return;
    }
    shown.forEach(function (ev, i) {
      var bank = window.QBANK[ev.slug];
      var n = bank ? bank.questions.length : 0;
      var cb = h('input', { type: 'checkbox', id: 'my-' + ev.slug, checked: Store.isMine(ev.slug) });
      cb.addEventListener('change', function () { Store.toggleMine(ev.slug, cb.checked); planPanel(); if (onlyMine) grid(); });
      var tag = n ? n + ' questions' : (ev.special ? 'Cipher trainer' : 'Games coming soon');
      var card = h('article', { class: 'card c-' + COLORS[i % 4] },
        h('h3', null, h('a', { href: 'event.html?e=' + ev.slug, text: ev.name })),
        h('p', { class: 'sum', text: ev.summary }),
        h('p', { class: 'badges' },
          h('span', { class: 'pill', text: 'Team of ' + ev.team }),
          h('span', { class: 'pill', text: ev.resource.label }),
          h('span', { class: 'pill soft', text: tag })),
        h('label', { class: 'mine', for: 'my-' + ev.slug }, cb, ' I\'m in this event'));
      g.append(card);
    });
  }

  function links() {
    var ul = document.getElementById('links');
    GENERAL_LINKS.forEach(function (l) {
      ul.append(h('li', null,
        h('a', { href: l.url, target: '_blank', rel: 'noopener', text: l.label }),
        h('span', { class: 'note', text: ' ' + l.note })));
    });
  }

  var filter = document.getElementById('only-mine');
  filter.addEventListener('change', function () { onlyMine = filter.checked; grid(); });

  planPanel(); grid(); links();
})();
