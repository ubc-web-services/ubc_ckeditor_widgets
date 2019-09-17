'use strict';
(function () {
  CKEDITOR.plugins.add('flex-2columns', {
    requires: 'widget',
    init: function (editor) {
      // Add our plugin-specific CSS to style the widget within CKEditor.
      editor.addContentsCss(this.path + 'css/editor-flex-2columns.css');
      // Register the toolbar buttons for the CKEditor editor instance.
      editor.ui.addButton('flex-2columns', {
        label: 'Insert 3 columns',
        icon: this.path + 'icons/flex-2columns.png',
        command: 'flex-2columns'
      });
      // Register the widget.
      editor.widgets.add('flex-2columns', {
        template: '<div class="widget-columns--2 flex-grid">' +
          '<div class="flex-1"><p>First Column</p></div>' +
          '<div class="flex-1"><p>Second Column</p></div>' +
          '</div>',
        allowedContent: 'div(!widget-columns--2,!flex-grid);' +
          'div(!flex-1);' +
          'div(!flex-1);',
        // Minimum HTML which is required by this widget to work.
        requiredContent: 'div(widget-columns--2)',
        editables: {
          col1: {
            selector: 'div.widget-columns--2 > div:nth-child(1)',
          },
          col2: {
            selector: 'div.widget-columns--2 > div:nth-child(2)',
          }
        },
        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-columns--2');
        }
      });
    }
  });
})(jQuery);
