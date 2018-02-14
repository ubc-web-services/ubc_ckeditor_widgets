'use strict';
(function () {
  CKEDITOR.plugins.add('flex-2columns-2-1', {
    requires: 'widget',
    init: function (editor) {
      // Add our plugin-specific CSS to style the widget within CKEditor.
      editor.addContentsCss(this.path + 'css/editor-flex-2columns-2-1.css');
      // Register the toolbar buttons for the CKEditor editor instance.
      editor.ui.addButton('flex-2columns-2-1', {
        label: 'Insert 2 columns',
        icon: this.path + 'icons/flex-2columns-2-1.png',
        command: 'flex-2columns-2-1'
      });
      // Register the widget.
      editor.widgets.add('flex-2columns-2-1', {
        template: '<div class="columns--2-1 flex-grid">' +
          '<div class="flex-2"><p>First Column</p></div>' +
          '<div class="flex-1"><p>Second Column</p></div>' +
          '</div>',
        allowedContent: 'div(!columns--2-1,!flex-grid);' +
          'div(!flex-2);' +
          'div(!flex-1);',
        // Minimum HTML which is required by this widget to work.
        requiredContent: 'div(columns--2-1)',
        editables: {
          col1: {
            selector: 'div.columns--2-1 > div:nth-child(1)',
          },
          col2: {
            selector: 'div.columns--2-1 > div:nth-child(2)',
          }
        },
        upcast: function (element) {
          return element.name == 'div' && element.hasClass('columns--2-1');
        }
      });
    }
  });
})(jQuery);
