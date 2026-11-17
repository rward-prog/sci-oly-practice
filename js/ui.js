/* Shared UI helpers. All dynamic text uses textContent, never innerHTML. */
(function () {
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === false || v == null) return;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), v);
        else if (v === true) el.setAttribute(k, '');
        else el.setAttribute(k, v);
      });
    }
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, kid) {
    if (kid == null || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { append(el, k); }); return; }
    el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }

  /* Murphy, drawn in SVG so there are no image files to host. */
  var MURPHY = '<svg viewBox="0 0 120 120" role="img" aria-label="Murphy the dog">' +
    '<ellipse cx="22" cy="62" rx="15" ry="30" fill="#8A5A36" transform="rotate(14 22 62)"/>' +
    '<ellipse cx="98" cy="62" rx="15" ry="30" fill="#8A5A36" transform="rotate(-14 98 62)"/>' +
    '<circle cx="60" cy="58" r="38" fill="#D9A066"/>' +
    '<ellipse cx="60" cy="74" rx="22" ry="17" fill="#F4DDBB"/>' +
    '<circle cx="46" cy="52" r="6" fill="#1B2540"/><circle cx="74" cy="52" r="6" fill="#1B2540"/>' +
    '<circle cx="48" cy="50" r="2" fill="#fff"/><circle cx="76" cy="50" r="2" fill="#fff"/>' +
    '<ellipse cx="60" cy="68" rx="9" ry="6.5" fill="#1B2540"/>' +
    '<path d="M60 74 v6 M60 80 q-8 8 -14 2 M60 80 q8 8 14 2" fill="none" stroke="#1B2540" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M52 84 q8 18 16 0 z" fill="#F4606B"/>' +
    '<rect x="38" y="30" width="44" height="8" rx="4" fill="#fff" stroke="#1B2540" stroke-width="3"/>' +
    '</svg>';

  function murphy(cls) {
    var d = h('span', { class: 'murphy ' + (cls || '') });
    d.innerHTML = MURPHY; // static string, no user data
    return d;
  }

  var PRAISE = ['Murphy is doing zoomies!', 'Woof! That is a great score.', 'Murphy gives you a treat.', 'Tail wags for you.'];
  var TRY = ['Murphy believes in you. Try again!', 'Every miss is a clue. Check the explanations.', 'Murphy tilts his head. Let us review.'];
  function cheer(pct) {
    var list = pct >= 70 ? PRAISE : TRY;
    return list[Math.floor(Math.random() * list.length)];
  }

  /* ---------- header + progress dialog ---------- */
  function header(where) {
    var top = document.getElementById('top');
    if (!top) return;
    var home = h('a', { class: 'brand', href: 'index.html', 'aria-label': 'Murphy\'s Sci Oly Review Den, home' },
      murphy('brand-dog'),
      h('span', { class: 'brand-text' }, h('strong', { text: 'Murphy\'s Review Den' }), h('small', { text: 'Science Olympiad practice' })));
    var btn = h('button', { class: 'btn btn-save', type: 'button', onclick: openProgress }, 'Save or load progress');
    top.append(home, btn);
  }

  var dlg;
  function openProgress() {
    if (!dlg) buildDialog();
    dlg.querySelector('#code-out').value = window.Store.exportCode();
    dlg.querySelector('#code-in').value = '';
    dlg.querySelector('#code-msg').textContent = '';
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  function buildDialog() {
    var out = h('textarea', { id: 'code-out', readonly: true, rows: 4, 'aria-label': 'Your progress code' });
    var inn = h('textarea', { id: 'code-in', rows: 3, placeholder: 'Paste a code here', 'aria-label': 'Paste a progress code' });
    var msg = h('p', { id: 'code-msg', class: 'msg', role: 'status' });
    var copy = h('button', {
      class: 'btn', type: 'button', onclick: function () {
        out.select();
        var done = function () { msg.textContent = 'Copied! Paste it into a note, email or doc to keep it.'; };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(out.value).then(done, function () { document.execCommand('copy'); done(); });
        else { document.execCommand('copy'); done(); }
      }
    }, 'Copy code');
    var load = h('button', {
      class: 'btn btn-go', type: 'button', onclick: function () {
        var r = window.Store.importCode(inn.value);
        msg.textContent = r.msg;
        msg.className = 'msg ' + (r.ok ? 'good' : 'bad');
        if (r.ok) setTimeout(function () { location.reload(); }, 700);
      }
    }, 'Load code');
    var close = h('button', { class: 'btn btn-quiet', type: 'button', onclick: function () { dlg.close ? dlg.close() : dlg.removeAttribute('open'); } }, 'Close');
    dlg = h('dialog', { class: 'dlg', 'aria-labelledby': 'dlg-title' },
      h('h2', { id: 'dlg-title', text: 'Save or load your progress' }),
      h('p', { text: 'Your progress is saved in this browser automatically. To use it on another computer, or if it ever disappears, copy your code and paste it back later.' }),
      h('label', { for: 'code-out', text: 'Your code' }), out,
      h('div', { class: 'row' }, copy),
      h('hr'),
      h('label', { for: 'code-in', text: 'Have a code already?' }), inn,
      h('div', { class: 'row' }, load),
      msg,
      h('p', { class: 'fine', text: 'The code has no names in it. It holds only which events you picked and your right and total counts for each topic.' }),
      h('div', { class: 'row end' }, close));
    document.body.append(dlg);
  }

  window.UI = { h: h, murphy: murphy, cheer: cheer, header: header, openProgress: openProgress };
})();
