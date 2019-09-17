'use strict';
(function () {
  CKEDITOR.plugins.add('widget-svg-icon', {
    requires: 'widget',
    icons: 'widget-svg-icon',
    init: function (editor) {
      // Register the editing dialog.
      CKEDITOR.dialog.add('widget-svg-icon', this.path + 'dialogs/widget-svg-icon.js');
      editor.addContentsCss(this.path + 'css/contents.css');
      editor.addContentsCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
      editor.ui.addButton('widget-svg-icon', {
        label: 'Insert a fontawesome icon',
        icon: this.path + 'icons/widget-svg-icon.png',
        command: 'widget-svg-icon'
      });

      editor.widgets.add('widget-svg-icon', {
        template: '<div class="widget-svg-icon" aria-hidden="true"><svg role="presentation" class="unit-button__icon" viewBox="0 0 64 64"><use xlink:href="#icon-mail"></use></svg></div>',
        requiredContent: 'div(widget-svg-icon)',
        editables: {
          icon: {
            selector: '#icon-mail',
            allowedContent: false
          }
        },
        allowedContent: 'div(!widget-svg-icon)[*]; svg(!unit-button__icon)[*]; use[!xlink:href];',
        button: 'Add an icon',
        dialog: 'widget-svg-icon',
        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-svg-icon');
        },

        init: function () {

          if (this.element.hasClass('fa-spin'))
            this.setData('animate', 'spin');
          if (this.element.hasClass('fa-pulse'))
            this.setData('animate', 'pulse');

          if (this.element.hasClass('fa-rotate-90'))
            this.setData('rotate', 'rotate-90');
          if (this.element.hasClass('fa-rotate-180'))
            this.setData('rotate', 'rotate-180');
          if (this.element.hasClass('fa-rotate-270'))
            this.setData('rotate', 'rotate-270');
          if (this.element.hasClass('fa-flip-horizontal'))
            this.setData('rotate', 'flip-horizontal');
          if (this.element.hasClass('fa-flip-vertical'))
            this.setData('rotate', 'flip-vertical');

          if (this.getElementsByTagName('use').getElementById('icon-cart'))
            this.setData('icon', 'icon-cart');
          if (this.getElementsByTagName('use').getElementById('icon-clock'))
            this.setData('icon', 'icon-clock');
          if (this.getElementsByTagName('use').getElementById('icon-discussion'))
            this.setData('icon', 'icon-discussion');
          if (this.getElementsByTagName('use').getElementById('icon-facebook'))
            this.setData('icon', 'icon-facebook');
          if (this.getElementsByTagName('use').getElementById('icon-home'))
            this.setData('icon', 'icon-home');
          if (this.getElementsByTagName('use').getElementById('icon-instagram'))
            this.setData('icon', 'icon-instagram');
          if (this.getElementsByTagName('use').getElementById('icon-linkedin'))
            this.setData('icon', 'icon-linkedin');
          if (this.getElementsByTagName('use').getElementById('icon-location'))
            this.setData('icon', 'icon-location');
          if (this.getElementsByTagName('use').getElementById('icon-mail'))
            this.setData('icon', 'icon-mail');
          if (this.getElementsByTagName('use').getElementById('icon-pencil'))
            this.setData('icon', 'icon-pencil');
          if (this.getElementsByTagName('use').getElementById('icon-phone'))
            this.setData('icon', 'icon-phone');
          if (this.getElementsByTagName('use').getElementById('icon-play'))
            this.setData('icon', 'icon-play');
          if (this.getElementsByTagName('use').getElementById('icon-settings'))
            this.setData('icon', 'icon-settings');
          if (this.getElementsByTagName('use').getElementById('icon-speech'))
            this.setData('icon', 'icon-speech');
          if (this.getElementsByTagName('use').getElementById('icon-star'))
            this.setData('icon', 'icon-star');
          if (this.getElementsByTagName('use').getElementById('icon-twitter'))
            this.setData('icon', 'icon-twitter');
          if (this.getElementsByTagName('use').getElementById('icon-user'))
            this.setData('icon', 'icon-user');
          if (this.getElementsByTagName('use').getElementById('icon-vimeo'))
            this.setData('icon', 'icon-vimeo');
          if (this.getElementsByTagName('use').getElementById('icon-youtube'))
            this.setData('icon', 'icon-youtube');

          
          if (this.element.hasClass('fa-address-card-o'))
            this.setData('icon', 'address-card-o');
          if (this.element.hasClass('fa-android'))
            this.setData('icon', 'android');
          if (this.element.hasClass('fa-angle-double-up'))
            this.setData('icon', 'angle-double-up');
          if (this.element.hasClass('fa-angle-up'))
            this.setData('icon', 'angle-up');
          if (this.element.hasClass('fa-apple'))
            this.setData('icon', 'apple');
          if (this.element.hasClass('fa-arrow-circle-up'))
            this.setData('icon', 'arrow-circle-up');
          if (this.element.hasClass('fa-arrow-up'))
            this.setData('icon', 'arrow-up');

        },

        data: function () {
          this.element.removeClass('fa-spin');
          this.element.removeClass('fa-pulse');

          this.getElementsByTagName('use').removeAttribute('xlink:href');;

          if (this.data.size)
            this.element.addClass('fa-' + this.data.size);
          if (this.data.align)
            this.element.addClass('fa-' + this.data.align);
          if (this.data.animate)
            this.element.addClass('fa-' + this.data.animate);
          if (this.data.rotate)
            this.element.addClass('fa-' + this.data.rotate);
          if (this.data.icon)
            this.getElementsByTagName('svg').setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.data.icon );
        }
      });
    }
  });
})(jQuery);
