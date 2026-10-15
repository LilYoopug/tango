/* Tamago landing — minimal behaviour. No framework, no build step. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* Kana wall: mark the letters you already know. */
  var grid = document.getElementById('kanaGrid');
  var count = document.getElementById('kanaCount');

  if (grid) {
    var cells = Array.prototype.filter.call(grid.children, function (el) {
      return el.getAttribute('data-empty') !== 'true';
    });

    cells.forEach(function (cell) {
      cell.setAttribute('role', 'button');
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-pressed', 'false');
    });

    var update = function () {
      var done = grid.querySelectorAll('.is-done').length;
      if (count) count.textContent = String(done);
    };

    var toggle = function (cell) {
      if (cell.getAttribute('data-empty') === 'true') return;
      var on = cell.classList.toggle('is-done');
      cell.setAttribute('aria-pressed', on ? 'true' : 'false');
      update();
    };

    grid.addEventListener('click', function (e) {
      var cell = e.target.closest('[role="button"]');
      if (cell) toggle(cell);
    });

    grid.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var cell = e.target.closest('[role="button"]');
      if (!cell) return;
      e.preventDefault();
      toggle(cell);
    });
  }

  /* One authored reveal: sections settle in as they arrive, once. */
  var reveals = document.querySelectorAll('.reveal');

  if (reveals.length && 'IntersectionObserver' in window) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      reveals.forEach(function (el) {
        el.classList.add('is-in');
      });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
      );

      reveals.forEach(function (el) {
        io.observe(el);
      });
    }
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-in');
    });
  }

  /* Episode buttons: honest placeholder state, no fake audio. */
  document.querySelectorAll('.episode__play').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var on = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', on ? 'false' : 'true');
      btn.textContent = on ? '▶' : '❚❚';
    });
  });
})();
