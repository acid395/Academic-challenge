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

  // ---- Instagram carousel: prev/next buttons + keyboard + live status ------
  document.querySelectorAll(".instagram-carousel").forEach(function (carousel) {
    var wrap = carousel.closest(".instagram-carousel-wrap");
    if (!wrap) return;
    var items = Array.prototype.slice.call(carousel.querySelectorAll(".instagram-post"));
    var status = wrap.querySelector(".carousel-status");
    var prevBtn = wrap.querySelector('.carousel-nav[data-dir="-1"]');
    var nextBtn = wrap.querySelector('.carousel-nav[data-dir="1"]');
    if (!items.length) return;

    function currentIndex() {
      var scrollLeft = carousel.scrollLeft;
      var closest = 0;
      var closestDist = Infinity;
      items.forEach(function (item, i) {
        var dist = Math.abs(item.offsetLeft - carousel.offsetLeft - scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      return closest;
    }

    function updateStatus() {
      var idx = currentIndex();
      if (status) status.textContent = "Post " + (idx + 1) + " of " + items.length;
      if (prevBtn) prevBtn.disabled = idx === 0;
      if (nextBtn) nextBtn.disabled = idx === items.length - 1;
    }

    function scrollToIndex(idx) {
      idx = Math.max(0, Math.min(items.length - 1, idx));
      var item = items[idx];
      if (!item) return;
      carousel.scrollTo({
        left: item.offsetLeft - carousel.offsetLeft,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { scrollToIndex(currentIndex() - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { scrollToIndex(currentIndex() + 1); });

    var ticking = false;
    carousel.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            updateStatus();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );

    carousel.setAttribute("tabindex", "0");
    carousel.setAttribute("role", "region");
    carousel.setAttribute("aria-label", "Instagram posts, scrollable");
    carousel.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(currentIndex() + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(currentIndex() - 1);
      }
    });

    updateStatus();
  });
})();
