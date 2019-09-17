(function($) {
    CKEDITOR.plugins.add('widget-accordion', {
        requires: 'widget',
        init: function(editor) {
            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('widget-accordion', {
                label: 'Insert Accordion',
                icon: this.path + 'icons/accordion.png',
                command: 'widget-accordion'
            });
            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-accordion.css');
            // Register the widget.
            editor.widgets.add('widget-accordion', {
                template: '<div class="widget-accordion">' +
                    '<div class="accordion accordion__heading js-reveal__parent"><div class="accordion__trigger js-reveal__trigger" aria-expanded="false">Accordion title goes in here</div></div>' +
                    '<div class="accordion__content js-reveal__target clearfix" hidden><p>Accordion contents happen in here</p></div>' +
                    '</div>',
                editables: {
                    title: {
                        selector: '.accordion__trigger',
                        allowedContent: 'em'
                    },
                    content: {
                        selector: '.accordion__content'
                    }
                },
                allowedContent: 'div(!widget-accordion); div(!accordion,!accordion__heading,!js-reveal__parent); div(!accordion__trigger,!js-reveal__trigger); div(!accordion__content,!js-reveal__target,clearfix)[hidden]',
                //
                //      requiredContent: 'div(accordion)',
                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('widget-accordion');
                }
            });
        }
    });
})(jQuery);
