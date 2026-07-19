(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Theme toggle (light / dark) with persistence
  var themeToggle = document.querySelector(".theme-toggle");
  var themeIcon = themeToggle ? themeToggle.querySelector(".icon") : null;
  var themeLabel = themeToggle ? themeToggle.querySelector(".label") : null;
  var stored = null;
  try { stored = localStorage.getItem("ags-theme"); } catch (e) {}

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon) themeIcon.textContent = theme === "light" ? "🌙" : "☀️";
    if (themeLabel) themeLabel.textContent = theme === "light" ? "Dark" : "Light";
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      );
    }
  }

  var prefersLight =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  var initial = stored || (prefersLight ? "light" : "dark");
  applyTheme(initial);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem("ags-theme", next); } catch (e) {}
    });
  }

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
