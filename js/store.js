/* Progress storage + save code + "what to work on" planner.
   Progress lives in this browser (localStorage) AND can be copied as a code.
   The code holds no names: only which events you're in and right/total counts per topic. */
(function () {
  var KEY = 'murphy-sciolyreview-v1';
  var state = { v: 1, my: [], s: {}, b: {} };

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && o.v === 1) state = { v: 1, my: o.my || [], s: o.s || {}, b: o.b || {} };
      }
    } catch (e) { /* storage can be blocked; the save code still works */ }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { }
  }

  function b64enc(str) {
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function b64dec(str) {
    var s = str.replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4) s += '=';
    return atob(s);
  }
  function checksum(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return h.toString(36).slice(-4).padStart(4, '0');
  }

  var Store = {
    get: function () { return state; },
    record: function (slug, topic, ok) {
      var ev = state.s[slug] || (state.s[slug] = {});
      var t = ev[topic] || (ev[topic] = [0, 0]);
      t[0]++; if (ok) t[1]++;
      save();
    },
    topicStats: function (slug, topic) {
      var t = (state.s[slug] || {})[topic];
      return t ? { tried: t[0], right: t[1] } : { tried: 0, right: 0 };
    },
    isMine: function (slug) { return state.my.indexOf(slug) !== -1; },
    toggleMine: function (slug, on) {
      var i = state.my.indexOf(slug);
      if (on && i === -1) state.my.push(slug);
      if (!on && i !== -1) state.my.splice(i, 1);
      save();
    },
    best: function (slug) { return state.b[slug] || 0; },
    setBest: function (slug, n) { if (n > (state.b[slug] || 0)) { state.b[slug] = n; save(); return true; } return false; },
    reset: function () { state = { v: 1, my: [], s: {}, b: {} }; save(); },

    exportCode: function () {
      var parts = [];
      parts.push('M:' + state.my.join(','));
      Object.keys(state.s).forEach(function (slug) {
        var topics = Object.keys(state.s[slug]).map(function (t) {
          var p = state.s[slug][t]; return t + '=' + p[0] + '.' + p[1];
        });
        if (topics.length) parts.push('S:' + slug + ':' + topics.join(','));
      });
      Object.keys(state.b).forEach(function (slug) { parts.push('B:' + slug + '=' + state.b[slug]); });
      var body = parts.join('|');
      return 'MUR1.' + b64enc(body) + '.' + checksum(body);
    },

    importCode: function (text) {
      var code = String(text || '').replace(/\s+/g, '');
      var seg = code.split('.');
      if (seg.length !== 3 || seg[0] !== 'MUR1') return { ok: false, msg: 'That does not look like a progress code. It should start with MUR1.' };
      var body;
      try { body = b64dec(seg[1]); } catch (e) { return { ok: false, msg: 'The code has a typo or got cut off. Copy the whole thing again.' }; }
      if (checksum(body) !== seg[2]) return { ok: false, msg: 'The code has a typo or got cut off. Copy the whole thing again.' };
      var next = { v: 1, my: [], s: {}, b: {} };
      var bad = false;
      body.split('|').forEach(function (part) {
        if (part.indexOf('M:') === 0) {
          next.my = part.slice(2).split(',').filter(Boolean);
        } else if (part.indexOf('S:') === 0) {
          var bits = part.slice(2).split(':');
          var slug = bits[0]; next.s[slug] = {};
          (bits[1] || '').split(',').filter(Boolean).forEach(function (kv) {
            var m = kv.match(/^([a-z0-9_]+)=(\d+)\.(\d+)$/);
            if (!m) { bad = true; return; }
            var a = parseInt(m[2], 10), c = parseInt(m[3], 10);
            if (c > a) { bad = true; return; }
            next.s[slug][m[1]] = [a, c];
          });
        } else if (part.indexOf('B:') === 0) {
          var kv2 = part.slice(2).split('=');
          var n = parseInt(kv2[1], 10);
          if (kv2[0] && !isNaN(n)) next.b[kv2[0]] = n; else bad = true;
        }
      });
      if (bad) return { ok: false, msg: 'Part of that code could not be read. Copy the whole thing again.' };
      state = next; save();
      return { ok: true, msg: 'Progress loaded!' };
    }
  };

  /* ---------- planner ---------- */
  var Plan = {
    /* status for one topic */
    status: function (slug, topic) {
      var s = Store.topicStats(slug, topic);
      if (s.tried === 0) return { key: 'new', label: 'Not tried yet', pct: null, tried: 0, right: 0 };
      var pct = Math.round(100 * s.right / s.tried);
      if (s.tried < 3) return { key: 'more', label: 'Try a few more', pct: pct, tried: s.tried, right: s.right };
      if (pct < 70) return { key: 'work', label: 'Work on this', pct: pct, tried: s.tried, right: s.right };
      if (pct < 90) return { key: 'ok', label: 'Getting there', pct: pct, tried: s.tried, right: s.right };
      return { key: 'strong', label: 'Strong', pct: pct, tried: s.tried, right: s.right };
    },
    /* topics of an event, weakest first */
    forEvent: function (ev) {
      var order = { work: 0, more: 1, ok: 2, new: 3, strong: 4 };
      return ev.topics.map(function (t) {
        var st = Plan.status(ev.slug, t.id);
        return { id: t.id, name: t.name, st: st };
      }).sort(function (a, b) {
        if (order[a.st.key] !== order[b.st.key]) return order[a.st.key] - order[b.st.key];
        return (a.st.pct == null ? 101 : a.st.pct) - (b.st.pct == null ? 101 : b.st.pct);
      });
    },
    /* weakest topics across the events you're in (or all events with progress if none picked) */
    overall: function (events, limit) {
      var mine = events.filter(function (e) { return Store.isMine(e.slug); });
      var pool = mine.length ? mine : events.filter(function (e) { return Store.get().s[e.slug]; });
      var out = [];
      pool.forEach(function (ev) {
        Plan.forEvent(ev).forEach(function (t) {
          if (t.st.key === 'work' || t.st.key === 'more') out.push({ ev: ev, id: t.id, name: t.name, st: t.st });
        });
      });
      out.sort(function (a, b) {
        var ka = a.st.key === 'work' ? 0 : 1, kb = b.st.key === 'work' ? 0 : 1;
        if (ka !== kb) return ka - kb;
        return a.st.pct - b.st.pct;
      });
      return out.slice(0, limit || 5);
    }
  };

  load();
  window.Store = Store;
  window.Plan = Plan;
})();
