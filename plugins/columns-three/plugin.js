'use strict';
(function () {
  CKEDITOR.plugins.add('flex-3columns', {
    requires: 'widget',
    init: function (editor) {
      // Add our plugin-specific CSS to style the widget within CKEditor.
      editor.addContentsCss(this.path + 'css/editor-flex-3columns.css');
      // Register the toolbar buttons for the CKEditor editor instance.
      editor.ui.addButton('flex-3columns', {
        label: 'Insert 3 columns',
        icon: this.path + 'icons/flex-3columns.png',
        command: 'flex-3columns'
      });
      // Register the widget.
      editor.widgets.add('flex-3columns', {
        template: '<div class="widget-columns--3 flex-grid">' +
          '<div class="flex-1"><p>First Column</p></div>' +
          '<div class="flex-1"><p>Second Column</p></div>' +
          '<div class="flex-1"><p>Third Column</p></div>' +
          '</div>',
        allowedContent: 'div(!widget-columns--3,!flex-grid);' +
        'div(!flex-1);' +
        'div(!flex-1);' +
        'div(!flex-1);',
        // Minimum HTML which is required by this widget to work.
        requiredContent: 'div(widget-columns--3)',
        editables: {
          col1: {
            selector: '.flex-grid > div:nth-child(1)',
          },
          col2: {
            selector: '.flex-grid > div:nth-child(2)',
          },
          col3: {
            selector: '.flex-grid > div:nth-child(3)',
          }
        },
        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-columns--3');
        }
      });
    }
  });
})(jQuery);
