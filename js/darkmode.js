(function (Drupal, once) {
  Drupal.behaviors.desertMoonDarkMode = {
    attach: function (context) {
      once('dark-mode-toggle', context.querySelectorAll('#dark-mode-toggle'))
        .forEach(function (btn) {
          btn.addEventListener('click', function () {
            if (window.halfmoon) {
              window.halfmoon.toggleDarkMode();
            } else {
              console.warn('Halfmoon not loaded');
            }
          });
        });
    }
  };
})(Drupal, once);