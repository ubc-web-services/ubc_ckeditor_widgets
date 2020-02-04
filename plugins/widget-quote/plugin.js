'use strict';
(function () {
  CKEDITOR.plugins.add('widget-quote', {
    requires: 'widget',
    init: function (editor) {
      // Add our plugin-specific CSS to style the widget within CKEditor.
      editor.addContentsCss(this.path + 'css/editor-widget-quote.css');
      // Register the toolbar buttons for the CKEditor editor instance.
      editor.ui.addButton('widget-quote', {
        label: 'Insert a quote',
        icon: this.path + 'icons/quote-left.png',
        command: 'widget-quote'
      });
      // Register the widget.
      editor.widgets.add('widget-quote', {
        template: '<div class="widget-quote">' +
        '<blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>' +
        '<div class="cite">John Smith, Manager</div>' +
        '</div>',
        allowedContent: 'div(!quote);blockquote(!*);div(!*);',
        // Minimum HTML which is required by this widget to work.
        editables: {
          quote: {
            selector:'blockquote',  
          },
          cite: {
            selector: '.cite',
          }

        },
        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-quote');
        }
      });
    }
  });
})(jQuery);