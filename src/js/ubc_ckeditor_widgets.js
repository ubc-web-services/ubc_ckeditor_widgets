(function (Drupal, drupalSettings, once) {
  Drupal.behaviors.ubcCkeditorWidgets = {
    attach: function (context, settings) {
      once('widgetAccordions', '.widget-accordion', context).forEach(item => {
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
      once('widgetAccordionsAll', '.widget-expandcollapse', context).forEach(item => {
        let state = item.getAttribute('data-state');
        item.addEventListener('click', () => {
          let text = state ? "Close" : "Open";
          const accordions = document.querySelectorAll('.widget-accordion');
          state = !state;
          item.innerText = text + ' All Accordions';
          accordions.forEach(accordion => {
            let btn = accordion.querySelector('.js-reveal__trigger');
            let expanded = btn.getAttribute('aria-expanded');
            let target = accordion.querySelector('.js-reveal__target');
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
      });
    }
  };
})(Drupal, drupalSettings, once);
