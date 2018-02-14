(function($) {
    CKEDITOR.plugins.add('accordiontoggle', {
        requires: 'widget',
        init: function(editor) {
            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('accordiontoggle', {
                label: 'Insert Accordion Open | Close All Button',
                icon: this.path + 'icons/accordiontoggle.png',
                command: 'accordiontoggle'
            });
            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-accordiontoggle.css');
            // Register the widget.
            editor.widgets.add('accordiontoggle', {
                template: '<button class="widget-expandcollapse" data-state="0">Open All Accordions</button>',
                editables: {
                    content: {
                        selector: '.expandcollapse'
                    }
                },
                allowedContent: 'button(!widget-expandcollapse)[!data-state]; span(!fa-angle-down,!fa)',
                upcast: function(element) {
                    return element.name == 'button' && element.hasClass('widget-expandcollapse');
                }
            });
        }
    });
})(jQuery);
