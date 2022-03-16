(function(Drupal, drupalSettings, once) {
    Drupal.behaviors.ubcCkeditorWidgets = {
        attach: function attach(context, settings) {
            once('widgetAccordions', '.widget-accordion', context).forEach(function(item) {
                var btn = item.querySelector('.js-reveal__trigger');
                btn.addEventListener('click', function() {
                    var expanded = btn.getAttribute('aria-expanded') === 'true';
                    var target = item.querySelector('.js-reveal__target');
                    btn.setAttribute('aria-expanded', !expanded);
                    btn.classList.toggle('is-open');
                    item.classList.toggle('is-open');
                    target.toggleAttribute('hidden');
                    target.animate([
                        {
                            transition: 'opacity',
                            opacity: '0'
                        },
                        {
                            opacity: '100'
                        }
                    ], {
                        duration: 250,
                        easing: 'linear',
                        iterations: 1
                    });
                });
            });
            once('widgetAccordionsAll', '.widget-expandcollapse', context).forEach(function(item) {
                var state = item.getAttribute('data-state');
                item.addEventListener('click', function() {
                    var text = state ? "Close" : "Open";
                    var accordions = document.querySelectorAll('.widget-accordion');
                    state = !state;
                    item.innerText = text + ' All Accordions';
                    accordions.forEach(function(accordion) {
                        var btn = accordion.querySelector('.js-reveal__trigger');
                        var expanded = btn.getAttribute('aria-expanded');
                        var target = accordion.querySelector('.js-reveal__target');
                        btn.setAttribute('aria-expanded', !expanded);
                        btn.classList.toggle('is-open');
                        item.classList.toggle('is-open');
                        target.toggleAttribute('hidden');
                        target.animate([
                            {
                                transition: 'opacity',
                                opacity: '0'
                            },
                            {
                                opacity: '100'
                            }
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


//# sourceMappingURL=ubc_ckeditor_widgets.js.map
