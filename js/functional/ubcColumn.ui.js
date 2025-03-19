(function($, Drupal, once) {
    Drupal.behaviors.updateColumns = {
      attach: function (context, settings) {
        once('updateColumns', '.widget-column-options', context).forEach(function (element) {
            $('.first-child--mt-0:nth-child(1)').addClass('widget-region-one');
            $('.first-child--mt-0:nth-child(2)').addClass('widget-region-two');
            $('.first-child--mt-0:nth-child(3)').addClass('widget-region-three');
            $('.first-child--mt-0:nth-child(4)').addClass('widget-region-four');
        })
      }
    };
  })(jQuery, Drupal, once);