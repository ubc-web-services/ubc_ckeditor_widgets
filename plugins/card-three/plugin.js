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
                template: '<div class="widget-card card--three md--flex-grid">' +
                    '<div class="md--flex-1"><div class="ubc-card ubc-card--vert ubc-card--shadow text-black hover--no-underline group">' +
                    '<div class="first-image ubc-card__media object-cover"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="first-content ubc-card__content">' +
                    '<div class="card__meta">metadata</div>' +
                    '<h3 class="card__title">Sample Title</h3>' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>' +
                    '<div class="first-footer ubc-card__actions text-right"><a href="#" class="unit-button unit-button--light unit-button--has-icon-right unit-button--editor">Read more</a></div></div></div>' +
                    '<div class="md--flex-1"><div class="ubc-card ubc-card--vert ubc-card--shadow text-black hover--no-underline group">' +
                    '<div class="second-image ubc-card__media object-cover"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="second-content ubc-card__content">' +
                    '<div class="card__meta">metadata</div>' +
                    '<h3 class="card__title">Sample Title</h3>' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>' +
                    '<div class="second-footer ubc-card__actions text-right"><a href="#" class="unit-button unit-button--light unit-button--has-icon-right unit-button--editor">Read more</a></div></div></div>' +
                    '<div class="md--flex-1"><div class="ubc-card ubc-card--vert ubc-card--shadow text-black hover--no-underline group">' +
                    '<div class="third-image ubc-card__media object-cover"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text" title=""></a></div>' +
                    '<div class="third-content ubc-card__content">' +
                    '<div class="card__meta">metadata</div>' +
                    '<h3 class="card__title">Sample Title</h3>' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>' +
                    '<div class="third-footer ubc-card__actions text-right"><a href="#" class="unit-button unit-button--light unit-button--has-icon-right unit-button--editor">Read more</a></div></div></div>' +
                    '</div>',
                editables: {
                    imagearea1: {
                        selector: '.first-image',
                        allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,title,data-*](*);drupal-entity[data-*]'
                    },
                    content1: {
                        selector: '.first-content',
                        allowedContent: 'div[class](card__meta);h3[!class](!card__title);h4[!class](!card__title);h5[!class](!card__title);h6[!class](!card__title);p[class](*);a[*](*);em'
                    },
                    footer1: {
                        selector: '.first-footer',
                        allowedContent: 'a[*](*)'
                    },
                    imagearea2: {
                        selector: '.second-image',
                        allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,title,data-*](*);drupal-entity[data-*]'
                    },
                    content2: {
                        selector: '.second-content',
                        allowedContent: 'div[class](card__meta);h3[!class](!card__title);h4[!class](!card__title);h5[!class](!card__title);h6[!class](!card__title);p[class](*);a[*](*);em'
                    },
                    footer2: {
                        selector: '.second-footer',
                        allowedContent: 'a[*](*)'
                    },
                    imagearea3: {
                        selector: '.third-image',
                        allowedContent: 'img[!src,class,data-*,alt,title]{width,height};source[data-*,srcset];media;picture[data-*];a[href,class,target,title,data-*](*);drupal-entity[data-*]'
                    },
                    content3: {
                        selector: '.third-content',
                        allowedContent: 'div[class](card__meta);h3[!class](!card__title);h4[!class](!card__title);h5[!class](!card__title);h6[!class](!card__title);p[class](*);a[*](*);em'
                    },
                    footer3: {
                        selector: '.third-footer',
                        allowedContent: 'a[*](*)'
                    },
                },
                allowedContent: 'div(!widget-card!,!card--three,md--flex-grid);' +
                    'div(!md--flex-1);' +
                    'div(!ubc-card,ubc-card--vert,ubc-card--shadow,text-black,hover--no-underline,group);' +
                    'div(!first-image,!ubc-card__media,object-cover);' +
                    'div(!first-content,!ubc-card__content);' +
                    'div(!first-footer,!ubc-card__actions,text-right);' +
                    'div(!second-image,!ubc-card__media,object-cover);' +
                    'div(!second-content,!ubc-card__content);' +
                    'div(!second-footer,!ubc-card__actions,text-right);' +
                    'div(!third-image,!ubc-card__media,object-cover);' +
                    'div(!third-content,!ubc-card__content);' +
                    'div(!third-footer,!ubc-card__actions,text-right)',
                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('card--three');
                }
            });
        }
    });
})(jQuery);
