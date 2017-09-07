(function($, Drupal) {
    Drupal.behaviors.ubcCkeditorWidgets = {
        attach: function(context, settings) {
            // Control Accordion Open / Close 
            $('.accordion', context).once('accordion_widget').each(function() {
                $(this).find('.accordion__tab').first().click(function(e) {
                    e.preventDefault();
                    //Expand or collapse this panel
                    $(this).next().slideToggle('fast');
                    $(this).parent().toggleClass('accordion--closed accordion--open');
                });
            });

            $('.widget-expandcollapse', context).once('toggle_widget').each(function() {
                $(this).click(function(e) {
                    e.preventDefault();
                    var newstate = $(this).attr('data-state') ^ 1,
                        text = newstate ? "Close" : "Open";
                    icon = newstate ? "up" : "down";

                    // if state=0, show all the accordion content on the page
                    if ($(this).attr('data-state') === "0") {
                        //console.log('1');
                        $('.accordion--closed .accordion__content').slideDown('fast');
                        $('.accordion').removeClass('accordion--closed').addClass('accordion--open');
                    }
                    // otherwise, collapse all the accordion content
                    else {
                        //console.log('2');
                        $('.accordion--open .accordion__content').slideUp('fast');
                        $('.accordion').removeClass('accordion--open').addClass('accordion--closed');
                    }
                    // toggle expand collapse text
                    $(this).html('<span class="fa fa-angle-' + icon + '">&nbsp;</span>' + text + ' All Accordions');
                    // update the state on the expandcollapse trigger
                    $(this).attr('data-state', newstate);
                });
            });
        }
    };
})(jQuery, Drupal);