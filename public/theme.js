// Applies the saved theme before first paint, then wires up the toggle.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}

  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Close the mobile menu once a section link is chosen
    document.querySelectorAll('.mobile-menu nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        link.closest('details').removeAttribute('open');
      });
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(current() === 'light'));
      btn.addEventListener('click', function () {
        var next = current() === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(next === 'light'));
        });
      });
    });
  });
})();
