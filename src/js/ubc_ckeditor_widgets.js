(function () {
    'use strict';
    class Accordion {
      constructor(node) {
        this.node = node;
      }
      toggleAccordion() {
        const accordionItem = document.querySelectorAll(this.node);
        accordionItem.forEach((item, key) => {
          let btn = item.querySelector('.js-reveal__trigger');
          btn.addEventListener('click', () => {
            let target = item.querySelector('.js-reveal__target');
            let expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            target.hidden.toggle;
            target.hidden = expanded;
            btn.classList.toggle('is-open');
            item.classList.toggle('is-open');
          });
        });
      }
    }
    const accordion = new Accordion('.widget-accordion');
    accordion.toggleAccordion();
  })();
