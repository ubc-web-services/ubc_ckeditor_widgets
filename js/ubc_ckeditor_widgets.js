(function($, Drupal) {
    Drupal.behaviors.ubcCkeditorWidgets = {
        attach: function(context, settings) {
            // Control Accordion Open / Close
            /*
            $('.accordion', context).once('accordion_widget').each(function() {
                $(this).find('.accordion__tab').first().click(function(e) {
                    e.preventDefault();
                    //Expand or collapse this panel
                    $(this).next().slideToggle('fast');
                    $(this).parent().toggleClass('accordion--closed accordion--open');
                });
            });
            */

            $('.widget-expandcollapse', context).once('toggle_widget').each(function() {
                $(this).click(function(e) {
                    e.preventDefault();
                    var newstate = $(this).attr('data-state') ^ 1,
                        text = newstate ? "Close" : "Open";
                    // if state=0, show all the accordion content on the page
                    if ($(this).attr('data-state') === "0") {
                        $('.widget-accordion .js-reveal__trigger').attr('aria-expanded','true').find('use').attr('xlink:href','#icon-minus');
                        $('.widget-accordion .js-reveal__trigger').addClass('is-open').closest('.js-reveal__parent').next('.js-reveal__target').addClass('is-open').attr('hidden',false);
                    }
                    // otherwise, collapse all the accordion content
                    else {
                        $('.widget-accordion .js-reveal__trigger').attr('aria-expanded','false').find('use').attr('xlink:href','#icon-plus');
                        $('.widget-accordion .js-reveal__trigger').removeClass('is-open').closest('.js-reveal__parent').next('.js-reveal__target').removeClass('is-open').attr('hidden',true);
                    }
                    // toggle expand collapse text
                    $(this).html( text + ' All Accordions');
                    // update the state on the expandcollapse trigger
                    $(this).attr('data-state', newstate);
                });
            });
        }
    };
})(jQuery, Drupal);
