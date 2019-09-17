'use strict';
(function () {
  CKEDITOR.plugins.add('flex-2columns-1-2', {
    requires: 'widget',
    init: function (editor) {
      // Add our plugin-specific CSS to style the widget within CKEditor.
      editor.addContentsCss(this.path + 'css/editor-flex-2columns-1-2.css');
      // Register the toolbar buttons for the CKEditor editor instance.
      editor.ui.addButton('flex-2columns-1-2', {
        label: 'Insert 2 columns',
        icon: this.path + 'icons/flex-2columns-1-2.png',
        command: 'flex-2columns-1-2'
      });
      // Register the widget.
      editor.widgets.add('flex-2columns-1-2', {
        template: '<div class="widget-columns--1-2 flex-grid">' +
          '<div class="flex-1"><p>First Column</p></div>' +
          '<div class="flex-2"><p>Second Column</p></div>' +
          '</div>',
        allowedContent: 'div(!widget-columns--1-2,!flex-grid);' +
          'div(!flex-1);' +
          'div(!flex-2);',
        // Minimum HTML which is required by this widget to work.
        requiredContent: 'div(widget-columns--1-2)',
        editables: {
          col1: {
            selector: 'div.widget-columns--1-2 > div:nth-child(1)',
          },
          col2: {
            selector: 'div.widget-columns--1-2 > div:nth-child(2)',
          }
        },
        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-columns--1-2');
        }
      });
    }
  });
})(jQuery);
