(function (Drupal) {
  Drupal.behaviors.ubcCkeditorWidgets = {
    attach: function (context, settings) {
      document.querySelectorAll('.widget-accordion').forEach(item => {
        let btn = item.querySelector('.js-reveal__trigger');
        btn.addEventListener('click', () => {
          let expanded = btn.getAttribute('aria-expanded') === 'true';
          let target = item.querySelector('.js-reveal__target');
          btn.setAttribute('aria-expanded', !expanded);
          btn.classList.toggle('is-open');
          item.classList.toggle('is-open');
          target.toggleAttribute('hidden');
          target.animate([
            { transition: 'opacity', opacity: '0' },
            { opacity: '100' }
          ], {
            duration: 250,
            easing: 'linear',
            iterations: 1
          });
        });
      });
    }
  };
})(Drupal);
