(function($) {
    CKEDITOR.plugins.add('accordion', {
        requires: 'widget',
        init: function(editor) {
            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('accordion', {
                label: 'Insert Accordion',
                icon: this.path + 'icons/accordion.png',
                command: 'accordion'
            });
            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-accordion.css');
            // Register the widget.
            editor.widgets.add('accordion', {
                template: '<div class="widget-accordion accordion accordion--closed">' +
                    '<div class="accordion__tab" tabindex="0">Accordion title goes in here</div>' +
                    '<div class="accordion__content clearfix"><p>Accordion contents happen in here</p></div>' +
                    '</div>',
                editables: {
                    title: {
                        selector: '.accordion__tab',
                        allowedContent: 'em'
                    },
                    content: {
                        selector: '.accordion__content'
                    }
                },
                allowedContent: 'div(!accordion,!widget-accordion,accordion--closed); div(!accordion__content,clearfix); div(!accordion__tab)[tabindex]',
                //
                //      requiredContent: 'div(accordion)',
                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('accordion');
                }
            });
        }
    });
})(jQuery);