(function($) {

    CKEDITOR.plugins.add('bs2-2columns-2-1', {
        requires: 'widget',
        init: function(editor) {

            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss(this.path + 'css/editor-bs2-2columns-2-1.css');

            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('bs2-2columns-2-1', {
                label: 'Insert Two Columns: 2/3 1/3',
                icon: this.path + 'icons/bs2-2columns-2-1.png',
                command: 'bs2-2columns-2-1'
            });

            // Register the widget.
            editor.widgets.add('bs2-2columns-2-1', {
                template: '<div class="columns--2-2-1--bs2 row-fluid">' +
                    '<div class="span8"><p>First Column</p></div>' +
                    '<div class="span4"><p>Second Column</p></div>' +
                    '</div>',
                // Minimum HTML which is required by this widget to work.
                allowedContent: 'div(!columns--2-2-1--bs2,!row-fluid");' +
                    'div(!span8);' +
                    'div(!span4);',
                requiredContent: 'div(columns--2-2-1--bs2)',
                editables: {
                    col1: {
                        selector: 'div.columns--2-2-1--bs2 > div:nth-child(1)',
                        //allowedContent: 'p br ul ol li strong em img div'
                    },
                    col2: {
                        selector: 'div.columns--2-2-1--bs2 > div:nth-child(2)',
                        //allowedContent: 'p br ul ol li strong em img div'
                    }
                },

                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('columns--2-2-1--bs2');
                }

            });

        }


    });

})(jQuery);