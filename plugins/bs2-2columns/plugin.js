(function($) {
    CKEDITOR.plugins.add('bs2-2columns', {
        requires: 'widget',
        init: function(editor) {
            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-bs2-2columns.css');
            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('bs2-2columns', {
                label: 'Insert Two Columns: 1/2 1/2',
                icon: this.path + 'icons/bs2-2columns.png',
                command: 'bs2-2columns'
            });
            // Register the widget.
            editor.widgets.add('bs2-2columns', {
                template: '<div class="columns--2--bs2 row-fluid">' +
                    '<div class="span6"><p>First Column</p></div>' +
                    '<div class="span6"><p>Second Column</p></div>' +
                    '</div>',
                // Minimum HTML which is required by this widget to work.
                allowedContent: 'div(!columns--2--bs2,!row-fluid);' +
                    'div(!span6);',
                requiredContent: 'div(columns--2--bs2)',
                editables: {
                    col1: {
                        selector: 'div.columns--2--bs2 > div:nth-child(1)',
                        //allowedContent: 'p br ul ol li strong em img div'
                    },
                    col2: {
                        selector: 'div.columns--2--bs2 > div:nth-child(2)',
                        //allowedContent: 'p br ul ol li strong em img div'
                    }
                },
                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('columns--2--bs2');
                }
            });
        }
    });
})(jQuery);