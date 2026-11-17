/* Game engine. Every game gets a ctx: { ev, bank, stage, exit, topic? }
   - ev: the event object from events.js
   - bank: { questions, pairs } from questions.js
   - stage: the element to draw into
   - exit(): go back to the game menu
   - topic: optional topic id to drill
   Right/wrong answers are recorded with Store.record(slug, topic, ok). */
(function () {
  var h = UI.h;

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  var timers = [];
  function stopTimers() { timers.forEach(clearInterval); timers = []; }
  function clear(ctx) { stopTimers(); ctx.stage.replaceChildren(); }
  function pool(ctx) {
    var qs = ctx.bank.questions || [];
    if (ctx.topic) {
      var f = qs.filter(function (q) { return q.t === ctx.topic; });
      if (f.length) return f;
    }
    return qs;
  }
  function topicName(ev, id) {
    var t = ev.topics.filter(function (x) { return x.id === id; })[0];
    return t ? t.name : id;
  }
  function mmss(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* One multiple-choice question. reveal:false = pick only (exam mode). */
  function ask(q, opt) {
    opt = opt || {};
    var order = shuffle(q.a.map(function (_, i) { return i; }));
    var chosen = null, locked = false;
    var fb = h('div', { class: 'feedback', role: 'status' });
    var btns = order.map(function (idx, pos) {
      var b = h('button', { type: 'button', class: 'choice', 'aria-pressed': 'false' },
        h('span', { class: 'ckey', text: 'ABCD'.charAt(pos) }), h('span', { class: 'ctext', text: q.a[idx] }));
      b.dataset.idx = idx;
      b.addEventListener('click', function () {
        if (locked) return;
        if (opt.reveal === false) {
          chosen = idx;
          btns.forEach(function (x) { x.classList.remove('picked'); x.setAttribute('aria-pressed', 'false'); });
          b.classList.add('picked'); b.setAttribute('aria-pressed', 'true');
          return;
        }
        locked = true; chosen = idx;
        var ok = idx === q.c;
        btns.forEach(function (x) {
          var i = +x.dataset.idx; x.disabled = true;
          if (i === q.c) x.classList.add('right'); else if (i === idx) x.classList.add('wrong');
        });
        fb.className = 'feedback show ' + (ok ? 'good' : 'bad');
        fb.append(h('strong', { text: ok ? 'Correct! ' : 'Not quite. The answer is ' + q.a[q.c] + '. ' }), q.e || '');
        if (opt.onAnswer) opt.onAnswer(ok);
      });
      return b;
    });
    var el = h('div', { class: 'qcard' },
      h('p', { class: 'qtext', text: q.q }),
      h('div', { class: 'choices', role: 'group', 'aria-label': 'Answer choices' }, btns), fb);
    return { el: el, getChoice: function () { return chosen; } };
  }

  /* End screen shared by every game. */
  function finish(ctx, o) {
    clear(ctx);
    var pct = o.total ? Math.round(100 * o.right / o.total) : 0;
    var weak = Plan.forEvent(ctx.ev).filter(function (t) { return t.st.key === 'work' || t.st.key === 'more'; }).slice(0, 3);
    var box = h('div', { class: 'result' },
      UI.murphy('big'),
      h('h3', { text: o.title }),
      h('p', { class: 'bigscore', text: o.scoreText || (o.right + ' of ' + o.total + ' (' + pct + '%)') }),
      h('p', { class: 'cheer', text: o.note || UI.cheer(pct) }));
    if (weak.length) {
      var list = h('ul', { class: 'next-list' });
      weak.forEach(function (t) {
        list.append(h('li', null,
          h('span', { text: t.name + ' - ' + t.st.label + (t.st.pct != null ? ' (' + t.st.pct + '%)' : '') }),
          h('button', { type: 'button', class: 'btn btn-small', onclick: function () { ctx.topic = t.id; ctx.replay ? ctx.replay('quiz') : ctx.exit(); } }, 'Drill it')));
      });
      box.append(h('div', { class: 'next' }, h('h4', { text: 'Work on next' }), list));
    }
    box.append(h('div', { class: 'row' },
      h('button', { type: 'button', class: 'btn btn-go', onclick: function () { o.again(); } }, 'Play again'),
      h('button', { type: 'button', class: 'btn btn-quiet', onclick: ctx.exit }, 'Back to games')));
    ctx.stage.append(box);
    box.querySelector('h3').setAttribute('tabindex', '-1');
    box.querySelector('h3').focus();
  }

  function topBar(ctx, title, extra) {
    return h('div', { class: 'gbar' },
      h('h3', { text: title + (ctx.topic ? ': ' + topicName(ctx.ev, ctx.topic) : '') }),
      h('div', { class: 'gstats' }, extra || null),
      h('button', { type: 'button', class: 'btn btn-quiet btn-small', onclick: ctx.exit }, 'Quit'));
  }

  var G = {};

  /* 10-question quiz with instant feedback */
  G.quiz = function (ctx) {
    clear(ctx);
    var qs = shuffle(pool(ctx)).slice(0, 10);
    var i = 0, right = 0;
    var count = h('span', { class: 'chip' });
    var holder = h('div');
    ctx.stage.append(topBar(ctx, 'Quiz', count), holder);
    function next() {
      if (i >= qs.length) return finish(ctx, { title: 'Quiz done!', right: right, total: qs.length, again: function () { G.quiz(ctx); } });
      var q = qs[i];
      count.textContent = 'Question ' + (i + 1) + ' of ' + qs.length + '   Score ' + right;
      holder.replaceChildren();
      var nextBtn = h('button', { type: 'button', class: 'btn btn-go', disabled: true, onclick: function () { i++; next(); } }, i === qs.length - 1 ? 'See results' : 'Next question');
      var a = ask(q, {
        onAnswer: function (ok) { Store.record(ctx.ev.slug, q.t, ok); if (ok) right++; nextBtn.disabled = false; nextBtn.focus(); count.textContent = 'Question ' + (i + 1) + ' of ' + qs.length + '   Score ' + right; }
      });
      holder.append(a.el, h('div', { class: 'row' }, nextBtn));
    }
    next();
  };

  /* 60-second blitz */
  G.blitz = function (ctx) {
    clear(ctx);
    var deck = shuffle(pool(ctx)), i = 0, right = 0, tried = 0, left = 60, over = false;
    var clock = h('span', { class: 'chip clock', text: '60s' });
    var score = h('span', { class: 'chip', text: 'Score 0' });
    var holder = h('div');
    ctx.stage.append(topBar(ctx, 'Beat the clock', [clock, score]), holder);
    function end() {
      if (over) return; over = true; stopTimers();
      finish(ctx, { title: 'Time!', right: right, total: tried, scoreText: right + ' right out of ' + tried + ' answered', again: function () { G.blitz(ctx); } });
    }
    timers.push(setInterval(function () { left--; clock.textContent = left + 's'; if (left <= 0) end(); }, 1000));
    function next() {
      if (over) return;
      if (i >= deck.length) { deck = shuffle(deck); i = 0; }
      var q = deck[i++];
      holder.replaceChildren();
      holder.append(ask(q, {
        explain: false,
        onAnswer: function (ok) {
          tried++; if (ok) right++; Store.record(ctx.ev.slug, q.t, ok);
          score.textContent = 'Score ' + right;
          setTimeout(next, ok ? 600 : 1800);
        }
      }).el);
    }
    next();
  };

  /* Murphy's Challenge: 3 lives, streak counts */
  G.streak = function (ctx) {
    clear(ctx);
    var deck = shuffle(pool(ctx)), i = 0, streak = 0, lives = 3;
    var best = Store.best(ctx.ev.slug);
    var lifeChip = h('span', { class: 'chip' });
    var streakChip = h('span', { class: 'chip' });
    var holder = h('div');
    function paint() { lifeChip.textContent = 'Lives ' + '\u25CF'.repeat(lives) + '\u25CB'.repeat(3 - lives); streakChip.textContent = 'Streak ' + streak + '   Best ' + Math.max(best, streak); }
    ctx.stage.append(topBar(ctx, 'Murphy\'s Challenge', [lifeChip, streakChip]), holder);
    paint();
    function next() {
      if (lives <= 0) {
        var isBest = Store.setBest(ctx.ev.slug, streak);
        return finish(ctx, { title: 'Out of lives', right: streak, total: streak, scoreText: 'Streak of ' + streak, note: isBest && streak > 0 ? 'New personal best! Murphy is doing zoomies.' : 'Your best is ' + Store.best(ctx.ev.slug) + '. Go beat it.', again: function () { G.streak(ctx); } });
      }
      if (i >= deck.length) { deck = shuffle(deck); i = 0; }
      var q = deck[i++];
      holder.replaceChildren();
      var nextBtn = h('button', { type: 'button', class: 'btn btn-go', disabled: true, onclick: next }, 'Keep going');
      holder.append(ask(q, {
        onAnswer: function (ok) {
          Store.record(ctx.ev.slug, q.t, ok);
          if (ok) streak++; else lives--;
          paint(); nextBtn.disabled = false; nextBtn.focus();
          if (lives <= 0) nextBtn.textContent = 'See results';
        }
      }).el, h('div', { class: 'row' }, nextBtn));
    }
    next();
  };

  /* Flashcards */
  G.cards = function (ctx) {
    clear(ctx);
    pool(ctx).forEach(function (q) { q._seen = false; });
    var deck = shuffle(pool(ctx)), total = deck.length, known = 0;
    var prog = h('span', { class: 'chip' });
    var holder = h('div');
    ctx.stage.append(topBar(ctx, 'Flashcards', prog), holder);
    function next() {
      if (!deck.length) return finish(ctx, { title: 'Deck complete!', right: known, total: total, scoreText: 'You knew ' + known + ' of ' + total + ' on the first look', note: 'Cards you missed came back until you got them.', again: function () { G.cards(ctx); } });
      var q = deck[0];
      prog.textContent = deck.length + ' cards left';
      holder.replaceChildren();
      var first = !q._seen;
      var back = h('div', { class: 'cardback', hidden: true },
        h('p', { class: 'ans' }, h('strong', { text: 'Answer: ' }), q.a[q.c]),
        h('p', { class: 'why', text: q.e || '' }));
      var knew = h('button', { type: 'button', class: 'btn btn-go', hidden: true, onclick: function () { Store.record(ctx.ev.slug, q.t, true); if (first) known++; q._seen = false; deck.shift(); next(); } }, 'Got it');
      var nope = h('button', { type: 'button', class: 'btn', hidden: true, onclick: function () { Store.record(ctx.ev.slug, q.t, false); q._seen = true; deck.push(deck.shift()); next(); } }, 'Not yet');
      var flip = h('button', {
        type: 'button', class: 'btn btn-go', onclick: function () {
          back.hidden = false; knew.hidden = false; nope.hidden = false; flip.hidden = true; knew.focus();
        }
      }, 'Flip the card');
      holder.append(h('div', { class: 'flash' }, h('p', { class: 'qtext', text: q.q }), back), h('div', { class: 'row' }, flip, knew, nope));
    }
    next();
  };

  /* Matching */
  G.match = function (ctx) {
    clear(ctx);
    var all = ctx.bank.pairs || [];
    var src = ctx.topic ? all.filter(function (p) { return p.t === ctx.topic; }) : all;
    if (src.length < 3) src = all;
    var round = shuffle(src).slice(0, 6);
    var mistakes = 0, matched = 0, sel = null;
    var chip = h('span', { class: 'chip', text: 'Matched 0 of ' + round.length });
    var left = h('div', { class: 'mcol' }), right = h('div', { class: 'mcol' });
    ctx.stage.append(topBar(ctx, 'Matching', chip),
      h('p', { class: 'hint', text: 'Pick a term on the left, then its meaning on the right.' }),
      h('div', { class: 'mgrid' }, left, right));
    shuffle(round).forEach(function (p) {
      var b = h('button', { type: 'button', class: 'mbtn', text: p.term });
      b.addEventListener('click', function () {
        if (b.disabled) return;
        if (sel) sel.btn.classList.remove('sel');
        sel = { p: p, btn: b }; b.classList.add('sel');
      });
      left.append(b);
    });
    shuffle(round).forEach(function (p) {
      var b = h('button', { type: 'button', class: 'mbtn', text: p.def });
      b.addEventListener('click', function () {
        if (!sel || b.disabled) return;
        if (sel.p === p) {
          Store.record(ctx.ev.slug, p.t, true);
          sel.btn.disabled = true; b.disabled = true;
          sel.btn.classList.remove('sel'); sel.btn.classList.add('done'); b.classList.add('done');
          sel = null; matched++;
          chip.textContent = 'Matched ' + matched + ' of ' + round.length;
          if (matched === round.length) {
            var tot = round.length + mistakes;
            setTimeout(function () { finish(ctx, { title: 'All matched!', right: round.length, total: tot, scoreText: mistakes + ' wrong tries', again: function () { G.match(ctx); } }); }, 500);
          }
        } else {
          Store.record(ctx.ev.slug, sel.p.t, false);
          mistakes++; b.classList.add('shake');
          setTimeout(function () { b.classList.remove('shake'); }, 400);
        }
      });
      right.append(b);
    });
  };

  /* Practice exam: no feedback until you submit */
  G.exam = function (ctx) {
    clear(ctx);
    var qs = shuffle(pool(ctx)).slice(0, 20);
    var items = qs.map(function (q) { return { q: q, a: ask(q, { reveal: false }) }; });
    var secs = 0;
    var clock = h('span', { class: 'chip clock', text: '0:00' });
    timers.push(setInterval(function () { secs++; clock.textContent = mmss(secs); }, 1000));
    var list = h('ol', { class: 'exam-list' });
    items.forEach(function (it) { list.append(h('li', null, it.a.el)); });
    var submit = h('button', {
      type: 'button', class: 'btn btn-go', onclick: function () {
        var blank = items.filter(function (it) { return it.a.getChoice() === null; }).length;
        if (blank && !confirm(blank + ' question(s) are blank. Turn it in anyway?')) return;
        grade();
      }
    }, 'Turn in exam');
    ctx.stage.append(topBar(ctx, 'Practice exam', clock),
      h('p', { class: 'hint', text: 'No answers until you turn it in. Real tests give you 50 minutes, so this clock counts up for you to compare.' }),
      list, h('div', { class: 'row' }, submit));

    function grade() {
      stopTimers();
      var right = 0, missed = {};
      var review = h('ol', { class: 'exam-list review' });
      items.forEach(function (it) {
        var q = it.q, ch = it.a.getChoice(), ok = ch === q.c;
        Store.record(ctx.ev.slug, q.t, ok);
        if (ok) right++; else missed[q.t] = (missed[q.t] || 0) + 1;
        review.append(h('li', { class: ok ? 'rv good' : 'rv bad' },
          h('p', { class: 'qtext', text: q.q }),
          h('p', null, h('strong', { text: 'You answered: ' }), ch === null ? 'Left blank' : q.a[ch]),
          ok ? null : h('p', null, h('strong', { text: 'Correct answer: ' }), q.a[q.c]),
          h('p', { class: 'why', text: q.e || '' })));
      });
      var pct = Math.round(100 * right / items.length);
      var topics = Object.keys(missed).sort(function (a, b) { return missed[b] - missed[a]; }).map(function (t) { return topicName(ctx.ev, t); });
      ctx.stage.replaceChildren(
        h('div', { class: 'result' }, UI.murphy('big'),
          h('h3', { text: 'Exam scored', tabindex: '-1', id: 'exam-h' }),
          h('p', { class: 'bigscore', text: right + ' of ' + items.length + ' (' + pct + '%) in ' + mmss(secs) }),
          h('p', { class: 'cheer', text: UI.cheer(pct) }),
          topics.length ? h('p', { class: 'fine', text: 'Review these topics: ' + topics.join('; ') + '.' }) : null,
          h('div', { class: 'row' },
            h('button', { type: 'button', class: 'btn btn-go', onclick: function () { G.exam(ctx); } }, 'New exam'),
            h('button', { type: 'button', class: 'btn btn-quiet', onclick: ctx.exit }, 'Back'))),
        h('h4', { text: 'Review' }), review);
      document.getElementById('exam-h').focus();
    }
  };

  /* Codebusters cipher trainer: Caesar, Atbash, K1 Aristocrat, K1 Patristocrat */
  var PLAIN = [
    'THE WATER CYCLE NEVER STOPS MOVING',
    'A STRAIGHT CHANNEL BECOMES A MEANDER OVER TIME',
    'EUROPA MAY HIDE AN OCEAN UNDER ITS ICE',
    'ALWAYS CHECK YOUR UNITS BEFORE YOU CALCULATE',
    'MURPHY APPROVES OF CAREFUL SCIENCE',
    'A GOOD EXPERIMENT CHANGES ONLY ONE THING',
    'STARS TWINKLE BECAUSE OF OUR ATMOSPHERE',
    'ROCKS TELL STORIES IF YOU LEARN TO READ THEM',
    'LEAVES USE LIGHT TO MAKE SUGAR FROM CARBON DIOXIDE',
    'DOUBLE CHECK THE ARITHMETIC IN YOUR CRYPTARITHM'
  ];
  var LONG = [
    'WHEN WARM MOIST AIR RISES QUICKLY IT CAN BUILD A TOWERING STORM CLOUD OVER THE PLAINS',
    'RIVERS CARVE VALLEYS BY CARRYING SEDIMENT DOWNSTREAM AND DROPPING IT WHERE THE WATER SLOWS DOWN',
    'A CAREFUL SCIENTIST CHANGES ONE VARIABLE AT A TIME AND REPEATS EVERY TRIAL',
    'MURPHY SNIFFS EVERY CLUE BUT ONLY TRUSTS THE EVIDENCE THAT HE CAN TEST',
    'THE ATMOSPHERE OF VENUS TRAPS HEAT SO WELL THAT ITS SURFACE IS HOTTER THAN MERCURY'
  ];
  var KEYWORDS = ['MURPHY', 'PLANET', 'GLACIER', 'CRYSTAL', 'OXYGEN', 'MAGNET', 'COMET'];
  var ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function caesar(t, k) { return t.replace(/[A-Z]/g, function (c) { return String.fromCharCode((c.charCodeAt(0) - 65 + k + 26) % 26 + 65); }); }
  function atbash(t) { return t.replace(/[A-Z]/g, function (c) { return String.fromCharCode(90 - (c.charCodeAt(0) - 65)); }); }
  /* K1: the PLAIN alphabet is in order, the CIPHER alphabet starts with a keyword */
  function k1Alphabet(word) {
    var seen = '', i;
    for (i = 0; i < word.length; i++) if (seen.indexOf(word[i]) === -1) seen += word[i];
    for (i = 0; i < 26; i++) if (seen.indexOf(ALPHA[i]) === -1) seen += ALPHA[i];
    return seen;
  }
  function k1(t, word) {
    var cipher = k1Alphabet(word);
    return t.replace(/[A-Z]/g, function (c) { return cipher[c.charCodeAt(0) - 65]; });
  }
  function blocks(t) { return t.replace(/[^A-Z]/g, '').replace(/(.{5})/g, '$1 ').trim(); }
  function freqTable(text) {
    var counts = {}, out = [];
    text.replace(/[A-Z]/g, function (c) { counts[c] = (counts[c] || 0) + 1; });
    Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a] || (a < b ? -1 : 1); }).forEach(function (c) { out.push(c + ' ' + counts[c]); });
    return out.join('   ');
  }

  var KINDS = [
    ['caesar', 'Caesar shift', 'caesar'],
    ['atbash', 'Atbash', 'atbash'],
    ['aristocrat', 'K1 Aristocrat', 'aristocrat'],
    ['patristocrat', 'K1 Patristocrat', 'aristocrat']
  ];

  G.cipher = function (ctx) {
    clear(ctx);
    var kind = 'caesar';
    var area = h('div');
    var tabs = h('div', { class: 'row' });
    KINDS.forEach(function (k) {
      tabs.append(h('button', { type: 'button', class: 'btn' + (k[0] === kind ? ' btn-go' : ''), onclick: function () { kind = k[0]; paintTabs(); puzzle(); } }, k[1]));
    });
    function paintTabs() {
      Array.prototype.forEach.call(tabs.children, function (b, i) { b.classList.toggle('btn-go', KINDS[i][0] === kind); });
    }
    ctx.stage.append(topBar(ctx, 'Cipher trainer'), tabs, area);

    function puzzle() {
      var topic = KINDS.filter(function (k) { return k[0] === kind; })[0][2];
      var isK1 = kind === 'aristocrat' || kind === 'patristocrat';
      var src = isK1 ? LONG : PLAIN;
      var plain = src[Math.floor(Math.random() * src.length)];
      var shift = 1 + Math.floor(Math.random() * 25);
      var word = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
      var cipher;
      if (kind === 'caesar') cipher = caesar(plain, shift);
      else if (kind === 'atbash') cipher = atbash(plain);
      else if (kind === 'aristocrat') cipher = k1(plain, word);
      else cipher = blocks(k1(plain, word));
      var recorded = false, hinted = false;
      var msg = h('div', { class: 'feedback', role: 'status' });
      var input = h('input', { type: 'text', class: 'cinput', id: 'cipher-in', autocomplete: 'off', autocapitalize: 'characters', spellcheck: 'false', 'aria-label': 'Your decoded message' });
      function rec(ok) { if (!recorded) { recorded = true; Store.record(ctx.ev.slug, topic, ok); } }
      var check = h('button', {
        type: 'button', class: 'btn btn-go', onclick: function () {
          var g = input.value.toUpperCase().replace(/[^A-Z]/g, '');
          var ok = g === plain.replace(/ /g, '');
          rec(ok && !hinted);
          msg.className = 'feedback show ' + (ok ? 'good' : 'bad');
          msg.textContent = ok ? (hinted ? 'Decoded! (You used a hint, so it will count as practice.)' : 'Decoded it! Murphy is impressed.') : 'Not yet. Check each letter, or try the hint.';
        }
      }, 'Check');
      var hint = h('button', {
        type: 'button', class: 'btn', onclick: function () {
          hinted = true;
          msg.className = 'feedback show';
          if (kind === 'caesar') msg.textContent = 'Hint: each letter was shifted ' + shift + ' places forward. Shift back to decode.';
          else if (kind === 'atbash') msg.textContent = 'Hint: the first word is ' + plain.split(' ')[0] + '.';
          else msg.textContent = 'Hint: the keyword is ' + word + '. The cipher alphabet starts with its letters, then the rest of the alphabet in order, and the plain alphabet is in normal order.';
        }
      }, 'Hint');
      var reveal = h('button', { type: 'button', class: 'btn', onclick: function () { rec(false); msg.className = 'feedback show'; msg.textContent = 'Answer: ' + plain; } }, 'Show answer');
      var fresh = h('button', { type: 'button', class: 'btn btn-quiet', onclick: puzzle }, 'New puzzle');
      var how = {
        caesar: 'Caesar: every letter is moved the same number of places along the alphabet. Try each possible shift, or look for short words like A, THE and OF.',
        atbash: 'Atbash: the alphabet is flipped, so A becomes Z, B becomes Y, and so on. It is its own inverse.',
        aristocrat: 'K1 Aristocrat: every plain letter is replaced by one cipher letter, and word spaces are kept. Use letter counts, one-letter words (A and I) and common words (THE, AND). The cipher alphabet starts with a keyword.',
        patristocrat: 'K1 Patristocrat: just like an Aristocrat but with no word spaces, written in blocks of five letters. Look for the common endings and the pattern of letter counts.'
      }[kind];
      area.replaceChildren(
        h('p', { class: 'hint', text: how }),
        kind === 'atbash' ? h('pre', { class: 'alpha', text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nZYXWVUTSRQPONMLKJIHGFEDCBA' }) : null,
        h('p', { class: 'cipher', text: cipher }),
        isK1 ? h('p', { class: 'fine', text: 'Letter counts: ' + freqTable(cipher) }) : null,
        h('label', { for: 'cipher-in', text: 'Type the decoded message' }), input,
        h('div', { class: 'row' }, check, hint, reveal, fresh), msg);
      input.focus();
    }
    puzzle();
  };

  G.run = function (mode, ctx) {
    ctx.replay = function (m) { G.run(m, ctx); };
    G[mode](ctx);
  };
  G.stop = stopTimers;
  window.Games = G;
})();
