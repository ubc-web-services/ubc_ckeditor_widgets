'use strict';
(function() {
  CKEDITOR.plugins.add('card-horizontal', {
    requires: 'widget',
    icons: 'card-horizontal',
    init: function(editor) {
      // Register the editing dialog.
      CKEDITOR.dialog.add('card-horizontal', this.path + 'dialogs/card-horizontal.js');
      // Add our plugin-specific CSS to style the widget within CKEditor.
      editor.addContentsCss(this.path + 'css/editor-card-horizontal.css');
      // Register the toolbar buttons for the CKEditor editor instance.
      editor.ui.addButton('card-horizontal', {
        label: 'Insert an horizontal card',
        icon: this.path + 'icons/card-horizontal.png',
        command: 'card-horizontal'
      });
      // Register the widget.
      editor.widgets.add('card-horizontal', {
        template: '<div class="widget-card widget-card--horizontal"><div class="ubc-card ubc-card--horiz hover--no-underline group">' +
        '<div class="first-image ubc-card__media"><img src="https://via.placeholder.com/300x300" alt="some alt text"></div>' +
        '<div class="ubc-card__content_wrapper">' +
        '<div class="first-content ubc-card__content">' +
        '<h3 class="card__title">Sample Title</h3>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>' +
        '<div class="first-footer ubc-card__actions"><p><a href="#" class="unit-button unit-button--editor">Read more</a></p></div>' +
        '</div></div></div>',

        editables: {
          imagearea1: {
            selector: '.first-image',
            allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,data-*,aria-*](*);drupal-entity[data-*]'
          },
          content1: {
            selector: '.first-content',
            allowedContent: 'div[class](card__meta);h3[!class](!card__title);h4[!class](!card__title);h5[!class](!card__title);h6[!class](!card__title);p[class](*);a[*](*);em;span[class](*)'
          },
          footer1: {
            selector: '.first-footer',
            allowedContent: 'p[class](*);a[*](*)'
          }
        },

        allowedContent: 'div(!widget-card--horizontal,!widget-card);' +
        'div(!ubc-card,ubc-card--horiz,hover--no-underline,group);' +
        'div(!first-image,!ubc-card__media,object-cover);' +
        'div(!ubc-card__content_wrapper);' +
        'div(!first-content,!ubc-card__content);' +
        'div(!first-footer,!ubc-card__actions)',

        button: 'Add an horizontal card',
        dialog: 'card-horizontal',

        upcast: function(element) {
          return element.name == 'div' && element.hasClass('widget-card--horizontal');
        },

        init: function () {

          if (this.element.hasClass('bg-white'))
            this.setData('background', 'bg-white');
          if (this.element.hasClass('bg-grey-100'))
            this.setData('background', 'bg-grey-100');
          if (this.element.hasClass('bg-unit-primary'))
            this.setData('background', 'bg-unit-primary');
          if (this.element.hasClass('bg-unit-secondary'))
            this.setData('background', 'bg-unit-secondary');
          if (this.element.hasClass('bg-unit-tertiary'))
            this.setData('background', 'bg-unit-tertiary');
          if (this.element.hasClass('bg-unit-accent'))
            this.setData('background', 'bg-unit-accent');

          if (this.element.hasClass('bg-ubc-blue'))
            this.setData('background', 'bg-ubc-blue');
          if (this.element.hasClass('bg-ubc-blue-sea'))
            this.setData('background', 'bg-ubc-blue-sea');
          if (this.element.hasClass('bg-ubc-blue-cobalt'))
            this.setData('background', 'bg-ubc-blue-cobalt');
          if (this.element.hasClass('bg-ubc-blue-neptune'))
            this.setData('background', 'bg-ubc-blue-neptune');
          if (this.element.hasClass('bg-ubc-blue-cornflower'))
            this.setData('background', 'bg-ubc-blue-cornflower');
          if (this.element.hasClass('bg-ubc-blue-polar'))
            this.setData('background', 'bg-ubc-blue-polar');
          if (this.element.hasClass('bg-ubc-blue-frost'))
            this.setData('background', 'bg-ubc-blue-frost');

          if (this.element.hasClass('widget-card--reverse'))
            this.setData('direction', 'widget-card--reverse');

        },

        data: function () {

          this.element.removeClass('bg-white');
          this.element.removeClass('bg-grey-100');
          this.element.removeClass('bg-unit-primary');
          this.element.removeClass('bg-unit-secondary');
          this.element.removeClass('bg-unit-tertiary');
          this.element.removeClass('bg-unit-accent');
          this.element.removeClass('bg-ubc-blue');
          this.element.removeClass('bg-ubc-blue-sea');
          this.element.removeClass('bg-ubc-blue-cobalt');
          this.element.removeClass('bg-ubc-blue-neptune');
          this.element.removeClass('bg-ubc-blue-cornflower');
          this.element.removeClass('bg-ubc-blue-polar');
          this.element.removeClass('bg-ubc-blue-frost');
          if (this.data.background)
              this.element.addClass(this.data.background);

          this.element.removeClass('widget-card--reverse');
          if (this.data.direction)
              this.element.addClass(this.data.direction);

        }
      });
    }
  });
})(jQuery);
