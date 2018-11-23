(function($) {
    CKEDITOR.plugins.add('card-one', {
        requires: 'widget',
        init: function(editor) {

            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-card-one.css');

            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('card-one', {
                label: 'Insert a card',
                icon: this.path + 'icons/card-one.png',
                command: 'card-one'
            });

            // Register the widget.
            editor.widgets.add('card-one', {

                template: '<div class="widget-card card--one"><div class="card">' +
                    '<div class="card__image-area first-image"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="card__content first-content"><h3>Sample Title</h3>' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>' +
                    '<div class="card__footer first-footer"><a href="#" class="unit-btn unit-btn--plain">Read more</a></div>' +
                    '</div></div>',

                editables: {
                    imagearea1: {
                        selector: '.first-image',
                        allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,data-*](*);drupal-entity[data-*'
                    },
                    content1: {
                        selector: '.first-content',
                        allowedContent: 'h3;p(*);a[*](*);em'
                    },
                    footer1: {
                        selector: '.first-footer',
                        allowedContent: 'a[*](*)'
                    }
                },

                allowedContent: 'div(!card--one,!widget-card,white,light,dark,card);' +
                    'div(!card);' +
                    'div(!first-image,!card__image-area);' +
                    'div(!first-content,!card__content);' +
                    'div(!first-footer,!card__footer)',

                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('card--one');
                }
            });
        }
    });
})(jQuery);
