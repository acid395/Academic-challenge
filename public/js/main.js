"use strict";
// ---------------------------------------------------------------------------
// Progressive enhancement only: dropdowns work via CSS :hover/:focus-within
// without this file. This adds tap/click toggling for touch users, closes
// menus on outside click / Escape, a mobile nav toggle, and scroll-spy for
// the sticky in-page index.
// ---------------------------------------------------------------------------
(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Dropdown menus (Programs, Team) -----------------------------------
  var dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");

  function closeAllDropdowns(except) {
    dropdownItems.forEach(function (item) {
      if (item === except) return;
      item.classList.remove("dropdown-open");
      var toggle = item.querySelector(".dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  dropdownItems.forEach(function (item) {
    var toggle = item.querySelector(".dropdown-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var isOpen = item.classList.contains("dropdown-open");
      closeAllDropdowns(item);
      item.classList.toggle("dropdown-open", !isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", function (e) {
    var withinDropdown = e.target.closest && e.target.closest(".nav-item.has-dropdown");
    if (!withinDropdown) closeAllDropdowns();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllDropdowns();
  });

  // ---- Mobile nav toggle ---------------------------------------------------
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.contains("nav-open");
      siteNav.classList.toggle("nav-open", !isOpen);
      navToggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  // ---- Sticky in-page index: scroll spy + click-to-scroll ------------------
  var indexLinks = document.querySelectorAll(".page-index-link");
  if (indexLinks.length) {
    var sections = [];
    indexLinks.forEach(function (btn) {
      var target = document.getElementById(btn.getAttribute("data-target"));
      if (target) sections.push({ btn: btn, target: target });
      btn.addEventListener("click", function () {
        if (!target) return;
        target.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
        history.replaceState(null, "", "#" + target.id);
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });

    var ticking = false;
    function updateCurrentSection() {
      ticking = false;
      var line = (document.querySelector(".site-header") ? document.querySelector(".site-header").offsetHeight : 0) + 24;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.target.getBoundingClientRect().top - line <= 0) current = s;
      });
      sections.forEach(function (s) { s.btn.removeAttribute("aria-current"); });
      current.btn.setAttribute("aria-current", "true");
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateCurrentSection);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateCurrentSection();
  }
})();
