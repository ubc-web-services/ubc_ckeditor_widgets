(function($) {
    CKEDITOR.plugins.add('card-three', {
        requires: 'widget',
        init: function(editor) {
            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-card-three.css');
            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('card-three', {
                label: 'Insert three cards',
                icon: this.path + 'icons/card-three.png',
                command: 'card-three'
            });
            // Register the widget.
            editor.widgets.add('card-three', {
                template: '<div class="widget-card card--three flex-grid flex-grid-sm-three">' +
                    '<div class="flex-item"><div class="card">' +
                    '<div class="card__image-area first-image"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="card__content first-content"><h3>Sample Title</h3>' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>' +
                    '<div class="card__footer first-footer"><a href="#" class="unit-btn unit-btn--plain">Read more</a></div></div></div>' +
                    '<div class="flex-item"><div class="card">' +
                    '<div class="card__image-area second-image"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="card__content second-content"><h3>Sample Title</h3>' +
                    '<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>' +
                    '<div class="card__footer second-footer"><a href="#" class="unit-btn unit-btn--plain">Read more</a></div></div></div>' +
                    '<div class="flex-item"><div class="card">' +
                    '<div class="card__image-area third-image"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="card__content third-content"><h3>Sample Title</h3>' +
                    '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div>' +
                    '<div class="card__footer third-footer"><a href="#" class="unit-btn unit-btn--plain">Read more</a></div></div></div>' +
                    '</div>',
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
                    },
                    imagearea2: {
                        selector: '.second-image',
                        allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,data-*](*);drupal-entity[data-*'
                    },
                    content2: {
                        selector: '.second-content',
                        allowedContent: 'h3;p(*);a[*](*);em'
                    },
                    footer2: {
                        selector: '.second-footer',
                        allowedContent: 'a[*](*)'
                    },
                    imagearea3: {
                        selector: '.third-image',
                        allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,data-*](*);drupal-entity[data-*'
                    },
                    content3: {
                        selector: '.third-content',
                        allowedContent: 'h3;p(*);a[*](*);em'
                    },
                    footer3: {
                        selector: '.third-footer',
                        allowedContent: 'a[*](*)'
                    },
                },
                allowedContent: 'div(!card--three,!widget-card,white,light,dark,card,!flex-grid,flex-grid-sm-three);' +
                    'div(!flex-item);' +
                    'div(!card);' +
                    'div(!first-image,card__image-area);' +
                    'div(!first-content,card__content);' +
                    'div(!first-footer,card__footer);' +
                    'div(!second-image,card__image-area);' +
                    'div(!second-content,card__content);' +
                    'div(!second-footer,card__footer);' +
                    'div(!third-image,card__image-area);' +
                    'div(!third-content,card__content);' +
                    'div(!third-footer,card__footer)',
                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('card--three');
                }
            });
        }
    });
})(jQuery);
