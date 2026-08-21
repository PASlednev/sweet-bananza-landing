/* Sweet Bonanza — opens the official Pragmatic Play demo in an overlay over the landing.
   Own file: does NOT touch styles.css / spoke.js.
   Any element with the class "js-demo-open" opens the demo.
   Markup and behaviour copied from fortune-tiger-landing/demo.js. */
(function () {
  "use strict";

  // Official Pragmatic Play free-demo host. gameSymbol=vs20fruitsw = Sweet Bonanza.
  // Verified: this endpoint returns the PP game loader, while an invalid gameSymbol
  // returns "an error has occurred". Change "lang" / "cur" if needed.
  var DEMO_URL = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=USD&gameSymbol=vs20fruitsw&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net";

  var overlay = null;
  var iframe = null;

  function build() {
    if (overlay) return;
    overlay = document.createElement("div");
    overlay.className = "ftdemo-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Sweet Bonanza free demo");
    overlay.innerHTML =
      '<div class="ftdemo-dialog">' +
      '<button type="button" class="ftdemo-close" aria-label="Close demo">&times;</button>' +
      '<iframe class="ftdemo-iframe" title="Sweet Bonanza demo" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>' +
      "</div>";
    document.body.appendChild(overlay);
    iframe = overlay.querySelector(".ftdemo-iframe");
    overlay.querySelector(".ftdemo-close").addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
  }

  function open(e) {
    if (e) e.preventDefault();
    build();
    iframe.src = DEMO_URL; // load the game only when opened
    overlay.classList.add("is-open");
    document.body.classList.add("ftdemo-lock");
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.classList.remove("ftdemo-lock");
    iframe.src = "about:blank"; // stop the game on close
  }

  function onKey(e) {
    if (e.key === "Escape" || e.key === "Esc") close();
  }

  function init() {
    var triggers = document.querySelectorAll(".js-demo-open");
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener("click", open);
    }
    document.addEventListener("keydown", onKey);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
