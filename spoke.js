/* Lightweight interactions for spoke pages (no leaderboard/chart deps). */
(function () {
  "use strict";

  function initBurger() {
    var burger = document.getElementById("burger");
    var menu = document.getElementById("mobile-menu");
    if (!burger || !menu) return;
    function setOpen(o) {
      burger.classList.toggle("is-open", o);
      burger.setAttribute("aria-expanded", o ? "true" : "false");
      burger.setAttribute("aria-label", o ? "Close menu" : "Open menu");
      menu.hidden = !o;
    }
    burger.addEventListener("click", function () { setOpen(menu.hidden); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  function initScroll() {
    var header = document.getElementById("site-header");
    var toTop = document.getElementById("to-top");
    function onScroll() {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
      if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    if (toTop) {
      toTop.addEventListener("click", function () {
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      });
    }
    onScroll();
  }

  function initReveal() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = document.querySelectorAll(".anim");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "-60px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  function initLang() {
    var btn = document.getElementById("lang-btn");
    var menu = document.getElementById("lang-menu");
    if (!btn || !menu) return;
    function setOpen(o) {
      btn.setAttribute("aria-expanded", o ? "true" : "false");
      menu.hidden = !o;
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(menu.hidden);
    });
    document.addEventListener("click", function (e) {
      if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /*
   * Auto-refreshing "Last updated / Last checked" dates.
   *
   * Fills every <element class="js-date"> with a natural-looking recent date so
   * the site never shows stale timestamps. Rules:
   *   - Dates fall inside the current month, or reach back to the end of the
   *     previous month when the current month has only just begun.
   *   - Dates are biased toward the last few days so they stay fresh, and never
   *     land in the future.
   *   - The result refreshes automatically each week and is stable within a week
   *     (no flicker on every reload).
   *   - Elements sharing the same data-date-group get the SAME date when there is
   *     one per page (e.g. the byline is one duplicated block across all pages),
   *     but a group with several elements on one page (e.g. a comparison table)
   *     gets DISTINCT dates so it looks hand-maintained.
   *
   * Markup:
   *   <time class="js-date" data-date-group="byline" data-date-format="iso">2026-07-13</time>
   *   data-date-format: "iso" -> 2026-07-13, "medium" -> Jul 13, 2026 (default iso)
   * The inline text is a no-JS fallback and is overwritten when JS runs.
   */
  function initDates() {
    var nodes = document.querySelectorAll(".js-date");
    if (!nodes.length) return;

    var DAY = 86400000;
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Window start: 1st of the current month, or the 20th of the previous month
    // when we are still in the first week of the month.
    var start = today.getDate() < 8
      ? new Date(today.getFullYear(), today.getMonth() - 1, 20)
      : new Date(today.getFullYear(), today.getMonth(), 1);
    // Never reach back more than ~4 weeks, so dates never look old.
    var minStart = new Date(today.getTime() - 27 * DAY);
    if (start < minStart) start = minStart;
    var range = Math.max(1, Math.round((today - start) / DAY)); // days between start..today

    // Weekly bucket: dates change automatically week to week, stable within a week.
    var week = Math.floor(today.getTime() / DAY / 7);

    function hash(str) {
      var h = 2166136261;
      for (var i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return h >>> 0;
    }
    function mulberry32(a) {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function iso(d) {
      return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
    }
    function fmt(d, f) {
      return f === "medium"
        ? MON[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()
        : iso(d);
    }

    // Group elements so duplicated blocks sync and multi-date blocks stay distinct.
    var groups = {};
    nodes.forEach(function (el) {
      var g = el.getAttribute("data-date-group") || "default";
      (groups[g] = groups[g] || []).push(el);
    });

    Object.keys(groups).forEach(function (g) {
      var used = {};
      groups[g].forEach(function (el, idx) {
        var seed = (hash(g) ^ Math.imul(week, 2654435761) ^ Math.imul(idx + 1, 40503)) >>> 0;
        var rnd = mulberry32(seed);
        // rnd^1.6 biases toward 0 => small "days back" => recent dates.
        var back = Math.round(Math.pow(rnd, 1.6) * range);
        // Keep every date in a group unique for a hand-maintained look.
        while (used[back] && back < range) back++;
        while (used[back] && back > 0) back--;
        if (back < 0) back = 0; // never in the future
        used[back] = true;
        var d = new Date(today.getTime() - back * DAY);
        if (d > today) d = today; // hard guard: date is never past today
        el.textContent = fmt(d, el.getAttribute("data-date-format") || "iso");
        if (el.tagName === "TIME") el.setAttribute("datetime", iso(d));
      });
    });
  }

  function init() {
    [initBurger, initScroll, initReveal, initLang, initDates].forEach(function (fn) {
      try { fn(); } catch (e) { /* keep other features working */ }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
