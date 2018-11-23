(function($) {
    CKEDITOR.plugins.add('card-two', {
        requires: 'widget',
        init: function(editor) {

            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-card-two.css');

            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('card-two', {
                label: 'Insert two cards',
                icon: this.path + 'icons/card-two.png',
                command: 'card-two'
            });

            // Register the widget.
            editor.widgets.add('card-two', {

                template: '<div class="widget-card card--two flex-grid flex-grid-sm-two">' +
                    '<div class="flex-item"><div class="card">' +
                    '<div class="card__image-area first-image"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="card__content first-content"><h3>Sample Title</h3>' +
                    '<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>' +
                    '<div class="card__footer first-footer"><a href="#" class="unit-btn unit-btn--plain">Read more</a></div></div></div>' +
                    '<div class="flex-item"><div class="card">' +
                    '<div class="card__image-area second-image"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="card__content second-content"><h3>Sample Title</h3>' +
                    '<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>' +
                    '<div class="card__footer second-footer"><a href="#" class="unit-btn unit-btn--plain">Read more</a></div></div></div>' +
                    '</div>',

                editables: {
                    imagearea1: {
                        selector: '.first-image',
                        allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,data-*](*);drupal-entity[data-*]'
                    },
                    content1: {
                        selector: '.first-content',
                        allowedContent: 'h3;p(*);a[*](*);em'
                    },
                    footer1: {
                        selector: '.first-footer',
                        allowedContent: 'a[*](*)'
                    },
                    imagearea2: {
                        selector: '.second-image',
                        allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,data-*](*);drupal-entity[data-*]'
                    },
                    content2: {
                        selector: '.second-content',
                        allowedContent: 'h3;p(*);a[*](*);em'
                    },
                    footer2: {
                        selector: '.second-footer',
                        allowedContent: 'a[*](*)'
                    }
                },

                allowedContent: 'div(!card--two,!widget-card,white,light,dark,card,!flex-grid,flex-grid-sm-two);' +
                    'div(!flex-item);' +
                    'div(!card);' +
                    'div(!first-image,card__image-area);' +
                    'div(!first-content,card__content);' +
                    'div(!first-footer,card__footer);' +
                    'div(!second-image,card__image-area);' +
                    'div(!second-content,card__content);' +
                    'div(!second-footer,card__footer)',

                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('card--two');
                }
            });
        }
    });
})(jQuery);
