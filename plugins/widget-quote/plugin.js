'use strict';
(function () {
  CKEDITOR.plugins.add('widget-quote', {
    requires: 'widget',
    init: function (editor) {
      // Add our plugin-specific CSS to style the widget within CKEditor.
      //editor.addContentsCss(this.path + 'css/editor-flex-2columns.css');
      // Register the toolbar buttons for the CKEditor editor instance.
      editor.ui.addButton('widget-quote', {
        label: 'Insert a quote',
        icon: this.path + 'icons/quote-left.png',
        command: 'widget-quote'
      });
      // Register the widget.
      editor.widgets.add('widget-quote', {
        template: '<div class="quote">' +
        '<blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>' +
        '<cite>John Smith, Manager</cite>' +
        '</div>',
        allowedContent: 'div(!quote);',
        // Minimum HTML which is required by this widget to work.
        requiredContent: 'div(quote)',
        editables: {
          quote: {
            selector:'blockquote',
            allowedContent:  'p(*);a[*](*)',
          },
          cite: {
              selector: 'cite',
              allowedContent:  'p(*);',
          }

        },
        upcast: function (element) {
          return element.name == 'div' && element.hasClass('quote');
        }
      });
    }
  });
})(jQuery);