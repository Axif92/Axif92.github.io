// Progressive enhancement only: every page is fully readable without this file.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode: ignore */ } },
  };

  // ── toast ────────────────────────────────────────────────────────────────
  const toastEl = $('[data-toast]');
  let toastT;
  const toast = (msg) => {
    if (!toastEl) return;
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2400);
  };

  // ── theme ────────────────────────────────────────────────────────────────
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  $$('[data-theme-toggle]').forEach((b) => {
    const sync = () => b.setAttribute('aria-pressed', String(isDark()));
    sync();
    b.addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      store.set('theme', root.dataset.theme); sync();
    });
  });

  // ── clock (time zone from data-tz) ────────────────────────────────────────────────────────────────────────────────────────────
  const clock = $('[data-clock]');
  if (clock) {
    const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: clock.dataset.tz || 'UTC' });
    const tick = () => { clock.textContent = fmt.format(new Date()); };
    tick(); setInterval(tick, 15000);
  }

  // ── mobile menu ──────────────────────────────────────────────────────────
  const menuBtn = $('[data-menu]'), menu = $('#menu');
  const setMenu = (open) => {
    if (!menu) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    if (open) { menu.hidden = false; $$('nav a', menu).forEach((a, i) => a.style.setProperty('--i', i)); requestAnimationFrame(() => $('nav a', menu)?.focus({ preventScroll: true })); }
    else { menu.hidden = true; }
  };
  menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', (e) => e.target.closest('a') && setMenu(false));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); menuBtn.focus(); } });
  addEventListener('resize', () => innerWidth > 980 && document.body.classList.contains('menu-open') && setMenu(false));

  // ── nav state, back-to-top, floating "ask" chip ──────────────────────────
  const nav = $('#nav'), fab = $('.fab-top'), ask = $('[data-ask]');
  const nights = $$('.night, .footer');
  const contact = $('#contact');
  const onScroll = () => {
    const y = scrollY;
    nav?.classList.toggle('scrolled', y > 40);
    fab?.classList.toggle('show', y > innerHeight * 1.2);
    // nav text turns light while it overlaps an always-dark section
    const overNight = nights.some((s) => { const r = s.getBoundingClientRect(); return r.top <= 32 && r.bottom >= 32; });
    nav?.classList.toggle('on-night', overNight && !document.body.classList.contains('menu-open'));
    if (ask) { const r = contact?.getBoundingClientRect(); ask.classList.toggle('hide', overNight || y < innerHeight * .6 || (r && r.top < innerHeight)); }
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  $$('[data-top]').forEach((b) => b.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })));

  // ── scroll-spy ───────────────────────────────────────────────────────────
  const spyLinks = $$('[data-spy]');
  if (spyLinks.length && document.body.classList.contains('home')) {
    const map = new Map(spyLinks.map((a) => [a.dataset.spy, a]));
    const spy = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      spyLinks.forEach((a) => { a.classList.remove('active'); a.removeAttribute('aria-current'); });
      const a = map.get(e.target.id); if (a) { a.classList.add('active'); a.setAttribute('aria-current', 'location'); }
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('main > section[id]').forEach((s) => spy.observe(s)); // unlisted sections clear the highlight
  }

  // ── reveal on scroll ─────────────────────────────────────────────────────
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach((el) => io.observe(el));

  // ── scroll-driven word highlight ─────────────────────────────────────────
  const wordBlocks = $$('[data-words]').map((el) => ({ el, ws: $$('.w', el) }));
  if (reduce) wordBlocks.forEach(({ ws }) => ws.forEach((w) => w.classList.add('lit')));
  else if (wordBlocks.length) {
    let ticking = false;
    const paint = () => {
      ticking = false;
      for (const { el, ws } of wordBlocks) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > innerHeight + 200) continue;
        // 0 when block top hits 85% of viewport, 1 when block bottom reaches 45%
        const start = innerHeight * .85, end = innerHeight * .45;
        const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height * .6)));
        const n = Math.round(p * ws.length);
        ws.forEach((w, i) => w.classList.toggle('lit', i < n));
      }
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
    paint();
  }

  // ── hero headline: two slot-machine word swaps, odometer style. The first swap ticks every 1.6s; the second
  // advances each time the first wraps, so all 3 × 2 word combinations appear. ──
  const swaps = $$('[data-swap]').map((el) => ({ ws: $$('b', el), i: 0 }));
  if (swaps.length === 2 && !reduce) {
    const step = ({ ws, i }, s) => {
      const out = ws[i]; s.i = (i + 1) % ws.length;
      out.classList.replace('on', 'out'); ws[s.i].classList.add('on');
      setTimeout(() => { out.style.transition = 'none'; out.classList.remove('out'); out.offsetHeight; out.style.transition = ''; }, 900); // park it below, unseen
      return s.i === 0; // wrapped
    };
    setInterval(() => { if (step(swaps[0], swaps[0])) step(swaps[1], swaps[1]); }, 1600);
  }

  // ── custom cursor: orange dot that eases after the mouse; grows to a "View" bubble over project cards ──
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    const cur = document.createElement('div');
    cur.id = 'cur'; cur.setAttribute('aria-hidden', 'true'); cur.textContent = 'View';
    document.body.append(cur);
    root.classList.add('has-cursor');
    let mx = -100, my = -100, cx = mx, cy = my, moved = false, bh = null, ws = [];

    // black hole: a lens that bends the page behind the cursor. An SVG displacement map pulls the backdrop
    // toward the centre (backdrop-filter:url() works in Chromium/Edge; other browsers just get the dark core).
    if (!reduce) {
      const N = 256, LENS = 220, c = document.createElement('canvas'); c.width = c.height = N;
      const g = c.getContext('2d'), im = g.createImageData(N, N);
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        const dx = (x + .5) / N * 2 - 1, dy = (y + .5) / N * 2 - 1, r = Math.hypot(dx, dy), m = r < 1 ? (1 - r) ** 2 : 0, i = (y * N + x) * 4;
        im.data[i] = 128 + 127 * (r ? dx / r : 0) * m; im.data[i + 1] = 128 + 127 * (r ? dy / r : 0) * m; im.data[i + 2] = 128; im.data[i + 3] = 255;
      }
      g.putImageData(im, 0, 0);
      const holder = document.createElement('div');
      holder.innerHTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="bhf" filterUnits="userSpaceOnUse" x="0" y="0" width="${LENS}" height="${LENS}" color-interpolation-filters="sRGB"><feImage href="${c.toDataURL()}" x="0" y="0" width="${LENS}" height="${LENS}" preserveAspectRatio="none" result="m"/><feDisplacementMap in="SourceGraphic" in2="m" scale="14" xChannelSelector="R" yChannelSelector="G"/></filter></svg>`;
      document.body.append(holder.firstChild);
      bh = document.createElement('div'); bh.id = 'bh'; bh.setAttribute('aria-hidden', 'true');
      document.body.append(bh); root.classList.add('bh-on');
      root.addEventListener('mouseleave', () => bh.classList.remove('on'));
    }
    addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; moved = true; if (bh) bh.classList.add('on'); });
    (function loop() {
      const px = cx, py = cy;
      cx += (mx - cx) * .18; cy += (my - cy) * .18;
      const vx = cx - px, vy = cy - py, sp = Math.min(.5, Math.hypot(vx, vy) / 40);
      // the dot stretches along its motion (only visible when the black hole is off); big "View" bubble stays round
      cur.style.transform = `translate(${cx}px,${cy}px)${cur.classList.contains('big') ? '' : ` rotate(${Math.atan2(vy, vx)}rad) scale(${1 + sp},${1 - sp * .5})`}`;
      if (bh) bh.style.transform = `translate(${cx}px,${cy}px)`;
      // headline word swaps are tugged toward the cursor like a gravity well, then spring back
      if (!reduce) {
        if (!ws.length) ws = $$('.hero-title .swap').map((el) => ({ el, x: 0, y: 0, s: 1 }));
        ws.forEach((w) => {
          const r = w.el.getBoundingClientRect();
          const ox = r.left + r.width / 2 - w.x, oy = r.top + r.height / 2 - w.y; // resting centre = measured centre minus the current offset
          const dx = mx - ox, dy = my - oy, d = Math.hypot(dx, dy) || 1, R = 180;
          const f = moved && d < R ? (1 - d / R) ** 2 : 0;
          w.x += (dx / d * f * 2 - w.x) * .12; w.y += (dy / d * f * 2 - w.y) * .12; w.s += (1 + f * .00625 - w.s) * .12;
          w.el.style.translate = `${w.x.toFixed(2)}px ${w.y.toFixed(2)}px`; w.el.style.scale = w.s.toFixed(3);
        });
      }
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', (e) => {
      cur.classList.toggle('big', !!e.target.closest('.card:not(.card-all)'));
      if (bh) bh.classList.toggle('flat', !!e.target.closest('img, picture, video, canvas, svg, .card-media')); // bend text only, not pictures
    });
  }

  // ── hero peek carousel ───────────────────────────────────────────────────
  const peek = $('[data-peek]');
  if (peek) {
    const items = $$('.peek-item', peek), dots = $$('.peek-dots i', peek);
    let i = 0;
    const show = (n) => {
      items[i].classList.remove('on'); dots[i]?.classList.remove('on');
      i = n % items.length;
      items[i].classList.add('on'); dots[i]?.classList.add('on');
      peek.href = items[i].dataset.href; peek.setAttribute('aria-label', `Featured project: ${items[i].dataset.title}`);
    };
    show(0);
    if (!reduce && items.length > 1) {
      let t = setInterval(() => show(i + 1), 3200);
      peek.addEventListener('mouseenter', () => clearInterval(t));
      peek.addEventListener('mouseleave', () => { t = setInterval(() => show(i + 1), 3200); });
    }
  }

  // ── resume page preview: prev/next buttons + page counter ────────────────
  $$('[data-pages]').forEach((box) => {
    const track = $('.pdf-track', box), count = $('[data-page-count]', box);
    const prev = $('[data-page-prev]', box), next = $('[data-page-next]', box);
    if (!count) return;
    const total = track.children.length;
    const cur = () => Math.round(track.scrollLeft / track.clientWidth);
    const go = (n) => track.scrollTo({ left: Math.max(0, Math.min(total - 1, n)) * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
    const paint = () => { const i = cur(); count.textContent = `Page ${i + 1} of ${total}`; prev.disabled = i === 0; next.disabled = i === total - 1; };
    prev.addEventListener('click', () => go(cur() - 1));
    next.addEventListener('click', () => go(cur() + 1));
    track.addEventListener('scroll', paint, { passive: true });
    paint();
  });

  // ── horizontal rail: auto-advance, progress, drag ────────────────────────
  $$('[data-rail]').forEach((rail) => {
    const track = $('.rail-track', rail), bar = $('[data-rail-bar]', rail);
    const step = () => (track.firstElementChild?.getBoundingClientRect().width || 400) + 20;
    if (!reduce) {
      // pause while hovered/focused, and for a few seconds after a touch so swiping isn't fought
      let hover = false, touchedAt = 0;
      rail.addEventListener('mouseenter', () => { hover = true; });
      rail.addEventListener('mouseleave', () => { hover = false; });
      rail.addEventListener('touchstart', () => { touchedAt = Date.now(); }, { passive: true });
      setInterval(() => {
        if (hover || document.hidden || rail.contains(document.activeElement) || Date.now() - touchedAt < 6000) return;
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
        track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step(), behavior: 'smooth' });
      }, 2000);
    }
    const progress = () => {
      const max = track.scrollWidth - track.clientWidth;
      const vis = track.clientWidth / track.scrollWidth;
      if (bar) { bar.style.width = `${vis * 100}%`; bar.style.transform = `translateX(${max ? (track.scrollLeft / max) * ((1 - vis) / vis) * 100 : 0}%)`; }
    };
    track.addEventListener('scroll', progress, { passive: true }); addEventListener('resize', progress); progress();
    // mouse drag (touch already scrolls natively)
    let down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; });
    addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (Math.abs(dx) > 5) { moved = true; track.classList.add('dragging'); }
      track.scrollLeft = sl - dx;
    });
    addEventListener('pointerup', () => { if (!down) return; down = false; requestAnimationFrame(() => track.classList.remove('dragging')); });
    track.addEventListener('click', (e) => { if (moved) { e.preventDefault(); moved = false; } }, true);
    track.addEventListener('dragstart', (e) => e.preventDefault());
  });

  // ── coursework tabs (ARIA tabs pattern) ──────────────────────────────────
  $$('.course-tabs').forEach((list) => {
    const tabs = $$('[role="tab"]', list);
    const select = (t, focus) => {
      tabs.forEach((x) => { const on = x === t; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (k) { e.preventDefault(); select(tabs[(i + k + tabs.length) % tabs.length], true); }
        if (e.key === 'Home') { e.preventDefault(); select(tabs[0], true); }
        if (e.key === 'End') { e.preventDefault(); select(tabs[tabs.length - 1], true); }
      });
    });
  });

  // ── copy email ───────────────────────────────────────────────────────────
  $$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); toast('Email copied to clipboard'); }
    catch { toast(`Copy failed. The address is ${b.dataset.copy}`); }
  }));

  // ── contact form → mailto (no backend; says so in the UI) ────────────────
  $$('form[data-mailto]').forEach((f) => {
    const status = $('.form-status', f);
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = $$('input, textarea', f);
      let bad = null;
      fields.forEach((x) => { const ok = x.value.trim().length > 0; x.setAttribute('aria-invalid', String(!ok)); if (!ok && !bad) bad = x; });
      if (bad) { status.textContent = 'Please fill in every field.'; bad.focus(); return; }
      const d = Object.fromEntries(new FormData(f));
      const body = `${d.message.trim()}\n\n${d.name.trim()}`;
      location.href = `mailto:${f.dataset.mailto}?subject=${encodeURIComponent(d.subject.trim())}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Your email app should now be open with the message ready to send. If nothing happened, write to ' + f.dataset.mailto + '.';
    });
    f.addEventListener('input', (e) => e.target.value.trim() && e.target.setAttribute('aria-invalid', 'false'));
  });

  // ── work index: filter + search, synced to the URL ───────────────────────
  const grid = $('[data-grid]');
  if (grid) {
    const cards = $$('.card', grid), chips = $$('[data-filter]'), input = $('[data-search]'), empty = $('[data-empty]'), count = $('[data-count]');
    const params = new URLSearchParams(location.search);
    let cat = params.get('cat') || 'all';
    if (!chips.some((c) => c.dataset.filter === cat)) cat = 'all';
    input.value = params.get('q') || '';
    const apply = () => {
      const q = input.value.trim().toLowerCase();
      let n = 0;
      cards.forEach((c) => { const show = (cat === 'all' || c.dataset.cat === cat) && (!q || q.split(/\s+/).every((t) => c.dataset.search.includes(t))); c.hidden = !show; if (show) n++; });
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === cat)));
      empty.hidden = n > 0;
      count.textContent = `Showing ${n} of ${cards.length} projects`;
      const p = new URLSearchParams(); if (cat !== 'all') p.set('cat', cat); if (q) p.set('q', q);
      history.replaceState(null, '', p.toString() ? `?${p}` : location.pathname);
    };
    chips.forEach((c) => c.addEventListener('click', () => { cat = c.dataset.filter; apply(); }));
    input.addEventListener('input', apply);
    $('[data-clear]')?.addEventListener('click', () => { cat = 'all'; input.value = ''; apply(); input.focus(); });
    apply();
  }

  // ── lightbox ─────────────────────────────────────────────────────────────
  const lb = $('[data-lightbox]');
  if (lb && lb.showModal) {
    const lbImg = $('img', lb), lbCap = $('p', lb);
    $$('[data-zoom]').forEach((b) => b.addEventListener('click', () => {
      lbImg.src = b.dataset.zoom; lbImg.alt = $('img', b).alt; lbCap.textContent = b.dataset.cap; lb.showModal();
    }));
    $('[data-lb-close]', lb).addEventListener('click', () => lb.close());
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  }
})();
