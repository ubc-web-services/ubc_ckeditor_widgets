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
                template: '<div class="widget-accordion">' +
                '<div class="accordion accordion__heading js-reveal__parent"><div class="accordion__trigger js-reveal__trigger" aria-expanded="false"><h3>Accordion title goes in here</h3></div></div>' +
                '<div class="accordion__content js-reveal__target clearfix" hidden><p>Accordion contents happen in here</p></div>' +
                '</div>',
                editables: {
                    title: {
                        selector: '.accordion__trigger',
                        allowedContent: 'em;h3;h4;h5;h6'
                    },
                    content: {
                        selector: '.accordion__content'
                    }
                },
                allowedContent: 'div(!widget-accordion); div(!accordion,!accordion__heading,!js-reveal__parent); div(!accordion__trigger,!js-reveal__trigger)[aria-*]; div(!accordion__content,!js-reveal__target,clearfix)[hidden]',
                //
                //      requiredContent: 'div(accordion)',
                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('widget-accordion');
                }
            });
        }
    });
})(jQuery);
