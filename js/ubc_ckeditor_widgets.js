(function($, Drupal) {
    Drupal.behaviors.ubcCkeditorWidgets = {
        attach: function(context, settings) {
            // add toggle attribute function
            $.fn.toggleAttr = function (attr, val) {
                var hasAttr = $(this).attr(attr);
                if (hasAttr) {
                $(this).removeAttr(attr);
                } else {
                $(this).attr(attr, val);
                }
                return this;
            };

            // add toggle attribute value function
            $.fn.toggleAttrVal = function (attr, val1, val2) {
                var currentValue = $(this).attr(attr);
                if (currentValue === val1) {
                $(this).attr(attr, val2);
                return this;
                }
                if (currentValue === val2) {
                $(this).attr(attr, val1);
                return this;
                }
                $(this).attr(attr, val1);
                return this;
            };

            // show hidden content when trigger is clicked
            $('.js-reveal__trigger', context).on('click', function (e) {
                e.preventDefault();
                $(this).find('use').toggleAttrVal('xlink:href', '#icon-minus', '#icon-plus');
                $(this).toggleClass('is-open').closest('.js-reveal__parent').next('.js-reveal__target')
                .toggleClass('is-open').toggleAttr('hidden', true);
            });

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
                    // toggle expand collapse text on all occurrences of toggle buttons
                    $('.widget-expandcollapse').html( text + ' All Accordions');
                    // update the state on the expandcollapse trigger
                    $('.widget-expandcollapse').attr('data-state', newstate);
                });
            });
        }
    };
})(jQuery, Drupal);
