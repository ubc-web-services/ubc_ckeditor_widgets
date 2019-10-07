(function($) {
    CKEDITOR.plugins.add('card-w-icon', {
        requires: 'widget',
        init: function(editor) {

            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-card-w-icon.css');

            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('card-w-icon', {
                label: 'Insert a card',
                icon: this.path + 'icons/card-w-icon.png',
                command: 'card-w-icon'
            });

            // Register the widget.
            editor.widgets.add('card-w-icon', {

                template: '<div class="widget-card card-w-icon--one"><div class="ubc-card ubc-card--vert ubc-card--shadow text-black hover--no-underline group">' +
                '<div class="first-image ubc-card__media object-cover"><a class="card__link" href="#" ><img src="http://placehold.it/700x350" alt="some alt text"></a></div>' +
                '<div class="first-content ubc-card__content">' +
                '<div class="card__meta">metadata</div>' +
                '<h3 class="card__title">Sample Title</h3>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>' +
                '<div class="first-footer ubc-card__actions text-right"><a href="#" class="unit-button unit-button--light unit-button--has-icon-right unit-button--editor">Read more</a></div>' +
                '</div></div>',

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
                    }
                },

                allowedContent: 'div(!card-w-icon--one,!widget-card);' +
                    'div(!ubc-card,ubc-card--vert,ubc-card--shadow,text-black,hover--no-underline,group);' +
                    'div(!first-image,!ubc-card__media,object-cover);' +
                    'div(!first-content,!ubc-card__content);' +
                    'div(!first-footer,!ubc-card__actions,text-right)',

                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('card--one');
                }
            });
        }
    });
})(jQuery);
