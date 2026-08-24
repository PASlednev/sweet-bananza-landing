/* Sweet Bonanza — inline demo that starts loading when the frame scrolls into view.
   Markup follows avia-landing: figure.demo__frame > figcaption.demo__bar + div.demo__video > iframe.

   The iframe carries data-src instead of src, so the game is not fetched while the
   visitor is still reading the top of the page. An IntersectionObserver swaps it in
   shortly before the frame reaches the viewport. Without IntersectionObserver the src
   is set on load and the browser's native loading="lazy" still defers the request. */
(function () {
  "use strict";

  function load(frame) {
    var iframe = frame.querySelector("iframe[data-src]");
    if (!iframe) return;
    iframe.src = iframe.getAttribute("data-src");
    iframe.removeAttribute("data-src");
  }

  function init() {
    var frames = document.querySelectorAll(".demo__video");
    if (!frames.length) return;

    if (!("IntersectionObserver" in window)) {
      frames.forEach(load);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          load(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "200px 0px" }
    );
    frames.forEach(function (el) {
      io.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
