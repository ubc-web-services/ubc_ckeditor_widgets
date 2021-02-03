(function (Drupal) {
  Drupal.behaviors.ubcCkeditorWidgets = {
    attach: function (context, settings) {
      context.querySelectorAll('.widget-accordion').forEach(item => {
        var btn = item.querySelector('.js-reveal__trigger');
        btn.addEventListener('click', () => {
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          var target = item.querySelector('.js-reveal__target');
          btn.setAttribute('aria-expanded', !expanded);
          btn.classList.toggle('is-open');
          item.classList.toggle('is-open');
          target.toggleAttribute('hidden');
        });
      });
    }
  };
})(Drupal);
