(function($) {
    CKEDITOR.plugins.add('widget-accordiontoggle', {
        requires: 'widget',
        init: function(editor) {
            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('widget-accordiontoggle', {
                label: 'Insert Accordion Open | Close All Button',
                icon: this.path + 'icons/accordiontoggle.png',
                command: 'widget-accordiontoggle'
            });
            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-accordiontoggle.css');
            // Register the widget.
            editor.widgets.add('widget-accordiontoggle', {
                template: '<button class="widget-expandcollapse unit-button unit-button--mid text-xs" data-state="0">Open All Accordions</button>',
                editables: {
                    content: {
                        selector: '.expandcollapse'
                    }
                },
                allowedContent: 'button(!widget-expandcollapse,unit-button,unit-button--mid,text-xs)[!data-state]',
                upcast: function(element) {
                    return element.name == 'button' && element.hasClass('widget-expandcollapse');
                }
            });
        }
    });
})(jQuery);
