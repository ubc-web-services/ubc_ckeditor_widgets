'use strict';
(function () {
  CKEDITOR.plugins.add('fontawesome-icon', {
    requires: 'widget',
    icons: 'fontawesome-icon',
    init: function (editor) {
      //CKEDITOR.scriptLoader.load(this.path + 'resources/select2/select2.full.min.js');
      // Register the editing dialog.
      CKEDITOR.dialog.add('fontawesome-icon', this.path + 'dialogs/fontawesome-icon.js');
      //editor.on( 'dialogShow', function( dialogShowEvent ) {
        //jQuery('.cke_dialog_ui_input_select').select2({
          //placeholder: 'Select an option'
        //});
      //});
      editor.addContentsCss(this.path + 'css/contents.css');
      //editor.addContentsCss(this.path + 'resources/select2/select2.full.min.css');
      editor.addContentsCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
      editor.ui.addButton('fontawesome-icon', {
        label: 'Insert a fontawesome icon',
        icon: this.path + 'icons/fontawesome-icon.png',
        command: 'fontawesome-icon'
      });

      editor.widgets.add('fontawesome-icon', {
        allowedContent: 'div(!unit-icon-widget,fa,fa-*,align-*)[*]',

        requiredContent: 'div(unit-icon-widget)',
        editables: {
          icon: {
            selector: '.unit-icon-widget',
            allowedContent: 'em'
          }
        },
        template: '<div class="unit-icon-widget fa" aria-hidden="true"></div>',
        button: 'Add a Fontawesome icon',
        dialog: 'fontawesome-icon',

        upcast: function (element) {
          return element.name == 'div' && element.hasClass('unit-icon-widget');
        },

        init: function () {

          if (this.element.hasClass('text-white'))
            this.setData('background', 'text-white');
          if (this.element.hasClass('text-grey-100'))
            this.setData('background', 'text-grey-100');
          if (this.element.hasClass('text-unit-primary'))
            this.setData('background', 'text-unit-primary');
          if (this.element.hasClass('text-unit-secondary'))
            this.setData('background', 'text-unit-secondary');
          if (this.element.hasClass('text-unit-tertiary'))
            this.setData('background', 'text-unit-tertiary');
          if (this.element.hasClass('text-unit-accent'))
            this.setData('background', 'text-unit-accent');

          if (this.element.hasClass('text-ubc-blue'))
            this.setData('background', 'text-ubc-blue');
          if (this.element.hasClass('text-ubc-blue-sea'))
            this.setData('background', 'text-ubc-blue-sea');
          if (this.element.hasClass('text-ubc-blue-cobalt'))
            this.setData('background', 'text-ubc-blue-cobalt');
          if (this.element.hasClass('text-ubc-blue-neptune'))
            this.setData('background', 'text-ubc-blue-neptune');
          if (this.element.hasClass('text-ubc-blue-cornflower'))
            this.setData('background', 'text-ubc-blue-cornflower');
          if (this.element.hasClass('text-ubc-blue-polar'))
            this.setData('background', 'text-ubc-blue-polar');
          if (this.element.hasClass('text-ubc-blue-frost'))
            this.setData('background', 'text-ubc-blue-frost');

          if (this.element.hasClass('fa-lg'))
            this.setData('size', 'lg');
          if (this.element.hasClass('fa-2x'))
            this.setData('size', '2x');
          if (this.element.hasClass('fa-3x'))
            this.setData('size', '3x');
          if (this.element.hasClass('fa-4x'))
            this.setData('size', '4x');
          if (this.element.hasClass('fa-5x'))
            this.setData('size', '5x');

          if (this.element.hasClass('fa-fw'))
            this.setData('align', 'fw');
          if (this.element.hasClass('fa-border'))
            this.setData('align', 'border');
          if (this.element.hasClass('fa-pull-right'))
            this.setData('align', 'pull-right');
          if (this.element.hasClass('fa-pull-left'))
            this.setData('align', 'pull-left');

          if (this.element.hasClass('fa-spin'))
            this.setData('animate', 'spin');
          if (this.element.hasClass('fa-pulse'))
            this.setData('animate', 'pulse');

          if (this.element.hasClass('fa-rotate-90'))
            this.setData('rotate', 'rotate-90');
          if (this.element.hasClass('fa-rotate-180'))
            this.setData('rotate', 'rotate-180');
          if (this.element.hasClass('fa-rotate-270'))
            this.setData('rotate', 'rotate-270');
          if (this.element.hasClass('fa-flip-horizontal'))
            this.setData('rotate', 'flip-horizontal');
          if (this.element.hasClass('fa-flip-vertical'))
            this.setData('rotate', 'flip-vertical');

          if (this.element.hasClass('fa-address-book-o'))
            this.setData('icon', 'address-book-o');
          if (this.element.hasClass('fa-address-card-o'))
            this.setData('icon', 'address-card-o');
          if (this.element.hasClass('fa-android'))
            this.setData('icon', 'android');
          if (this.element.hasClass('fa-angle-double-up'))
            this.setData('icon', 'angle-double-up');
          if (this.element.hasClass('fa-angle-up'))
            this.setData('icon', 'angle-up');
          if (this.element.hasClass('fa-apple'))
            this.setData('icon', 'apple');
          if (this.element.hasClass('fa-arrow-circle-up'))
            this.setData('icon', 'arrow-circle-up');
          if (this.element.hasClass('fa-arrow-up'))
            this.setData('icon', 'arrow-up');
          if (this.element.hasClass('fa-bars'))
            this.setData('icon', 'bars');
          if (this.element.hasClass('fa-bell'))
            this.setData('icon', 'bell');
          if (this.element.hasClass('fa-bell-o'))
            this.setData('icon', 'bell-o');
          if (this.element.hasClass('fa-bicycle'))
            this.setData('icon', 'bicycle');
          if (this.element.hasClass('fa-book'))
            this.setData('icon', 'book');
          if (this.element.hasClass('fa-bookmark'))
            this.setData('icon', 'bookmark');
          if (this.element.hasClass('fa-bookmark-o'))
            this.setData('icon', 'bookmark-o');
          if (this.element.hasClass('fa-building'))
            this.setData('icon', 'building');
          if (this.element.hasClass('fa-building-o'))
            this.setData('icon', 'building-o');
          if (this.element.hasClass('fa-bullhorn'))
            this.setData('icon', 'bullhorn');
          if (this.element.hasClass('fa-bus'))
            this.setData('icon', 'bus');
          if (this.element.hasClass('fa-calculator'))
            this.setData('icon', 'calculator');
          if (this.element.hasClass('fa-calendar'))
            this.setData('icon', 'calendar');
          if (this.element.hasClass('fa-calendar-check-o'))
            this.setData('icon', 'calendar-check-o');
          if (this.element.hasClass('fa-calendar-minus-o'))
            this.setData('icon', 'calendar-minus-o');
          if (this.element.hasClass('fa-calendar-o'))
            this.setData('icon', 'calendar-o');
          if (this.element.hasClass('fa-calendar-plus-o'))
            this.setData('icon', 'calendar-plus-o');
          if (this.element.hasClass('fa-calendar-times-o'))
            this.setData('icon', 'calendar-times-o');
          if (this.element.hasClass('fa-camera-retro'))
            this.setData('icon', 'camera-retro');
          if (this.element.hasClass('fa-car'))
            this.setData('icon', 'car');
          if (this.element.hasClass('fa-caret-up'))
            this.setData('icon', 'caret-up');
          if (this.element.hasClass('fa-certificate'))
            this.setData('icon', 'certificate');
          if (this.element.hasClass('fa-check'))
            this.setData('icon', 'check');
          if (this.element.hasClass('fa-check-circle'))
            this.setData('icon', 'check-circle');
          if (this.element.hasClass('fa-check-circle-o'))
            this.setData('icon', 'check-circle-o');
          if (this.element.hasClass('fa-check-square'))
            this.setData('icon', 'check-square');
          if (this.element.hasClass('fa-check-square-o'))
            this.setData('icon', 'check-square-o');
          if (this.element.hasClass('fa-chevron-circle-up'))
            this.setData('icon', 'chevron-circle-up');
          if (this.element.hasClass('fa-chevron-up'))
            this.setData('icon', 'chevron-up');
          if (this.element.hasClass('fa-chrome'))
            this.setData('icon', 'chrome');
          if (this.element.hasClass('fa-circle-o-notch'))
            this.setData('icon', 'circle-o-notch');
          if (this.element.hasClass('fa-circle-thin'))
            this.setData('icon', 'circle-thin');
          if (this.element.hasClass('fa-clock-o'))
            this.setData('icon', 'clock-o');
          if (this.element.hasClass('fa-clone'))
            this.setData('icon', 'clone');
          if (this.element.hasClass('fa-cloud'))
            this.setData('icon', 'cloud');
          if (this.element.hasClass('fa-cloud-download'))
            this.setData('icon', 'cloud-download');
          if (this.element.hasClass('fa-cloud-upload'))
            this.setData('icon', 'cloud-upload');
          if (this.element.hasClass('fa-code'))
            this.setData('icon', 'code');
          if (this.element.hasClass('fa-code-fork'))
            this.setData('icon', 'code-fork');
          if (this.element.hasClass('fa-cog'))
            this.setData('icon', 'cog');
          if (this.element.hasClass('fa-cogs'))
            this.setData('icon', 'cogs');
          if (this.element.hasClass('fa-comment'))
            this.setData('icon', 'comment');
          if (this.element.hasClass('fa-comment-o'))
            this.setData('icon', 'comment-o');
          if (this.element.hasClass('fa-commenting'))
            this.setData('icon', 'commenting');
          if (this.element.hasClass('fa-commenting-o'))
            this.setData('icon', 'commenting-o');
          if (this.element.hasClass('fa-comments'))
            this.setData('icon', 'comments');
          if (this.element.hasClass('fa-comments-o'))
            this.setData('icon', 'comments-o');
          if (this.element.hasClass('fa-compass'))
            this.setData('icon', 'compass');
          if (this.element.hasClass('fa-copyright'))
            this.setData('icon', 'copyright');
          if (this.element.hasClass('fa-cutlery'))
            this.setData('icon', 'cutlery');
          if (this.element.hasClass('fa-database'))
            this.setData('icon', 'database');
          if (this.element.hasClass('fa-desktop'))
            this.setData('icon', 'desktop');
          if (this.element.hasClass('fa-download'))
            this.setData('icon', 'download');
          if (this.element.hasClass('fa-drupal'))
            this.setData('icon', 'drupal');
          if (this.element.hasClass('fa-edge'))
            this.setData('icon', 'edge');
          if (this.element.hasClass('fa-edit'))
            this.setData('icon', 'edit');
          if (this.element.hasClass('fa-ellipsis-h'))
            this.setData('icon', 'ellipsis-h');
          if (this.element.hasClass('fa-ellipsis-v'))
            this.setData('icon', 'ellipsis-v');
          if (this.element.hasClass('fa-envelope'))
            this.setData('icon', 'envelope');
          if (this.element.hasClass('fa-envelope-o'))
            this.setData('icon', 'envelope-o');
          if (this.element.hasClass('fa-envelope-open'))
            this.setData('icon', 'envelope-open');
          if (this.element.hasClass('fa-envelope-open-o'))
            this.setData('icon', 'envelope-open-o');
          if (this.element.hasClass('fa-eraser'))
            this.setData('icon', 'eraser');
          if (this.element.hasClass('fa-exclamation'))
            this.setData('icon', 'exclamation');
          if (this.element.hasClass('fa-exclamation-circle'))
            this.setData('icon', 'exclamation-circle');
          if (this.element.hasClass('fa-exclamation-triangle'))
            this.setData('icon', 'exclamation-triangle');
          if (this.element.hasClass('fa-external-link'))
            this.setData('icon', 'external-link');
          if (this.element.hasClass('fa-external-link-square'))
            this.setData('icon', 'external-link-square');
          if (this.element.hasClass('fa-facebook-f'))
            this.setData('icon', 'facebook-f');
          if (this.element.hasClass('fa-file-image-o'))
            this.setData('icon', 'file-image-o');
          if (this.element.hasClass('fa-file-o'))
            this.setData('icon', 'file-o');
          if (this.element.hasClass('fa-file-pdf-o'))
            this.setData('icon', 'file-pdf-o');
          if (this.element.hasClass('fa-file-text-o'))
            this.setData('icon', 'file-text-o');
          if (this.element.hasClass('fa-firefox'))
            this.setData('icon', 'firefox');
          if (this.element.hasClass('fa-flag'))
            this.setData('icon', 'flag');
          if (this.element.hasClass('fa-flag-o'))
            this.setData('icon', 'flag-o');
          if (this.element.hasClass('fa-flickr'))
            this.setData('icon', 'flickr');
          if (this.element.hasClass('fa-folder'))
            this.setData('icon', 'folder');
          if (this.element.hasClass('fa-folder-o'))
            this.setData('icon', 'folder-o');
          if (this.element.hasClass('fa-folder-open'))
            this.setData('icon', 'folder-open');
          if (this.element.hasClass('fa-folder-open-o'))
            this.setData('icon', 'folder-open-o');
          if (this.element.hasClass('fa-git'))
            this.setData('icon', 'git');
          if (this.element.hasClass('fa-github'))
            this.setData('icon', 'github');
          if (this.element.hasClass('fa-globe'))
            this.setData('icon', 'globe');
          if (this.element.hasClass('fa-google-plus'))
            this.setData('icon', 'google-plus');
          if (this.element.hasClass('fa-graduation-cap'))
            this.setData('icon', 'graduation-cap');
          if (this.element.hasClass('fa-hashtag'))
            this.setData('icon', 'hashtag');
          if (this.element.hasClass('fa-headphones'))
            this.setData('icon', 'headphones');
          if (this.element.hasClass('fa-heart'))
            this.setData('icon', 'heart');
          if (this.element.hasClass('fa-heart-o'))
            this.setData('icon', 'heart-o');
          if (this.element.hasClass('fa-history'))
            this.setData('icon', 'history');
          if (this.element.hasClass('fa-home'))
            this.setData('icon', 'home');
          if (this.element.hasClass('fa-id-badge'))
            this.setData('icon', 'id-badge');
          if (this.element.hasClass('fa-id-card'))
            this.setData('icon', 'id-card');
          if (this.element.hasClass('fa-id-card-o'))
            this.setData('icon', 'id-card-o');
          if (this.element.hasClass('fa-inbox'))
            this.setData('icon', 'inbox');
          if (this.element.hasClass('fa-info'))
            this.setData('icon', 'info');
          if (this.element.hasClass('fa-info-circle'))
            this.setData('icon', 'info-circle');
          if (this.element.hasClass('fa-instagram'))
            this.setData('icon', 'instagram');
          if (this.element.hasClass('fa-internet-explorer'))
            this.setData('icon', 'internet-explorer');
          if (this.element.hasClass('fa-keyboard'))
            this.setData('icon', 'keyboard');
          if (this.element.hasClass('fa-laptop'))
            this.setData('icon', 'laptop');
          if (this.element.hasClass('fa-leaf'))
            this.setData('icon', 'leaf');
          if (this.element.hasClass('fa-level-down'))
            this.setData('icon', 'level-down');
          if (this.element.hasClass('fa-level-up'))
            this.setData('icon', 'level-up');
          if (this.element.hasClass('fa-lightbulb-o'))
            this.setData('icon', 'lightbulb-o');
          if (this.element.hasClass('fa-linkedin'))
            this.setData('icon', 'linkedin');
          if (this.element.hasClass('fa-linux'))
            this.setData('icon', 'linux');
          if (this.element.hasClass('fa-lock'))
            this.setData('icon', 'lock');
          if (this.element.hasClass('fa-magnet'))
            this.setData('icon', 'magnet');
          if (this.element.hasClass('fa-map'))
            this.setData('icon', 'map');
          if (this.element.hasClass('fa-map-marker'))
            this.setData('icon', 'map-marker');
          if (this.element.hasClass('fa-map-o'))
            this.setData('icon', 'map-o');
          if (this.element.hasClass('fa-map-pin'))
            this.setData('icon', 'map-pin');
          if (this.element.hasClass('fa-minus'))
            this.setData('icon', 'minus');
          if (this.element.hasClass('fa-minus-square'))
            this.setData('icon', 'minus-square');
          if (this.element.hasClass('fa-minus-square-o'))
            this.setData('icon', 'minus-square-o');
          if (this.element.hasClass('fa-mobile'))
            this.setData('icon', 'mobile');
          if (this.element.hasClass('fa-motorcycle'))
            this.setData('icon', 'motorcycle');
          if (this.element.hasClass('fa-mouse-pointer'))
            this.setData('icon', 'mouse-pointer');
          if (this.element.hasClass('fa-opera'))
            this.setData('icon', 'opera');
          if (this.element.hasClass('fa-paper-plane'))
            this.setData('icon', 'paper-plane');
          if (this.element.hasClass('fa-pencil'))
            this.setData('icon', 'pencil');
          if (this.element.hasClass('fa-pencil-square'))
            this.setData('icon', 'pencil-square');
          if (this.element.hasClass('fa-pencil-square-o'))
            this.setData('icon', 'pencil-square-o');
          if (this.element.hasClass('fa-percent'))
            this.setData('icon', 'percent');
          if (this.element.hasClass('fa-phone'))
            this.setData('icon', 'phone');
          if (this.element.hasClass('fa-phone-square'))
            this.setData('icon', 'phone-square');
          if (this.element.hasClass('fa-pie-chart'))
            this.setData('icon', 'pie-chart');
          if (this.element.hasClass('fa-pinterest-p'))
            this.setData('icon', 'pinterest-p');
          if (this.element.hasClass('fa-plus-square'))
            this.setData('icon', 'plus-square');
          if (this.element.hasClass('fa-plus-square-o'))
            this.setData('icon', 'plus-square-o');
          if (this.element.hasClass('fa-podcast'))
            this.setData('icon', 'podcast');
          if (this.element.hasClass('fa-power-off'))
            this.setData('icon', 'power-off');
          if (this.element.hasClass('fa-print'))
            this.setData('icon', 'print');
          if (this.element.hasClass('fa-puzzle-piece'))
            this.setData('icon', 'puzzle-piece');
          if (this.element.hasClass('fa-qrcode'))
            this.setData('icon', 'qrcode');
          if (this.element.hasClass('fa-quote-left'))
            this.setData('icon', 'quote-left');
          if (this.element.hasClass('fa-quote-right'))
            this.setData('icon', 'quote-right');
          if (this.element.hasClass('fa-random'))
            this.setData('icon', 'random');
          if (this.element.hasClass('fa-recycle'))
            this.setData('icon', 'recycle');
          if (this.element.hasClass('fa-refresh'))
            this.setData('icon', 'refresh');
          if (this.element.hasClass('fa-registered'))
            this.setData('icon', 'registered');
          if (this.element.hasClass('fa-reply'))
            this.setData('icon', 'reply');
          if (this.element.hasClass('fa-reply-all'))
            this.setData('icon', 'reply-all');
          if (this.element.hasClass('fa-retweet'))
            this.setData('icon', 'retweet');
          if (this.element.hasClass('fa-road'))
            this.setData('icon', 'road');
          if (this.element.hasClass('fa-rss'))
            this.setData('icon', 'rss');
          if (this.element.hasClass('fa-rss-square'))
            this.setData('icon', 'rss-square');
          if (this.element.hasClass('fa-safari'))
            this.setData('icon', 'safari');
          if (this.element.hasClass('fa-search'))
            this.setData('icon', 'search');
          if (this.element.hasClass('fa-search-minus'))
            this.setData('icon', 'search-minus');
          if (this.element.hasClass('fa-search-plus'))
            this.setData('icon', 'search-plus');
          if (this.element.hasClass('fa-server'))
            this.setData('icon', 'server');
          if (this.element.hasClass('fa-share'))
            this.setData('icon', 'share');
          if (this.element.hasClass('fa-share-alt'))
            this.setData('icon', 'share-alt');
          if (this.element.hasClass('fa-share-alt-square'))
            this.setData('icon', 'share-alt-square');
          if (this.element.hasClass('fa-shopping-bag'))
            this.setData('icon', 'shopping-bag');
          if (this.element.hasClass('fa-shopping-basket'))
            this.setData('icon', 'shopping-basket');
          if (this.element.hasClass('fa-shopping-cart'))
            this.setData('icon', 'shopping-cart');
          if (this.element.hasClass('fa-sign-in'))
            this.setData('icon', 'sign-in');
          if (this.element.hasClass('fa-sign-out'))
            this.setData('icon', 'sign-out');
          if (this.element.hasClass('fa-signal'))
            this.setData('icon', 'signal');
          if (this.element.hasClass('fa-sitemap'))
            this.setData('icon', 'sitemap');
          if (this.element.hasClass('fa-skype'))
            this.setData('icon', 'skype');
          if (this.element.hasClass('fa-slack'))
            this.setData('icon', 'slack');
          if (this.element.hasClass('fa-sliders'))
            this.setData('icon', 'sliders');
          if (this.element.hasClass('fa-snowflake-o'))
            this.setData('icon', 'snowflake-o');
          if (this.element.hasClass('fa-spinner'))
            this.setData('icon', 'spinner');
          if (this.element.hasClass('fa-square'))
            this.setData('icon', 'square');
          if (this.element.hasClass('fa-square-o'))
            this.setData('icon', 'square-o');
          if (this.element.hasClass('fa-star'))
            this.setData('icon', 'star');
          if (this.element.hasClass('fa-star-half'))
            this.setData('icon', 'star-half');
          if (this.element.hasClass('fa-star-half-o'))
            this.setData('icon', 'star-half-o');
          if (this.element.hasClass('fa-star-o'))
            this.setData('icon', 'star-o');
          if (this.element.hasClass('fa-sticky-note'))
            this.setData('icon', 'sticky-note');
          if (this.element.hasClass('fa-sticky-note-o'))
            this.setData('icon', 'sticky-note-o');
          if (this.element.hasClass('fa-street-view'))
            this.setData('icon', 'street-view');
          if (this.element.hasClass('fa-suitcase'))
            this.setData('icon', 'suitcase');
          if (this.element.hasClass('fa-sun-o'))
            this.setData('icon', 'sun-o');
          if (this.element.hasClass('fa-tablet'))
            this.setData('icon', 'tablet');
          if (this.element.hasClass('fa-tachometer'))
            this.setData('icon', 'tachometer');
          if (this.element.hasClass('fa-tag'))
            this.setData('icon', 'tag');
          if (this.element.hasClass('fa-tags'))
            this.setData('icon', 'tags');
          if (this.element.hasClass('fa-tasks'))
            this.setData('icon', 'tasks');
          if (this.element.hasClass('fa-taxi'))
            this.setData('icon', 'taxi');
          if (this.element.hasClass('fa-terminal'))
            this.setData('icon', 'terminal');
          if (this.element.hasClass('fa-thumb-tack'))
            this.setData('icon', 'thumb-tack');
          if (this.element.hasClass('fa-times'))
            this.setData('icon', 'times');
          if (this.element.hasClass('fa-times-circle'))
            this.setData('icon', 'times-circle');
          if (this.element.hasClass('fa-trash'))
            this.setData('icon', 'trash');
          if (this.element.hasClass('fa-trash-o'))
            this.setData('icon', 'trash-o');
          if (this.element.hasClass('fa-tree'))
            this.setData('icon', 'tree');
          if (this.element.hasClass('fa-trophy'))
            this.setData('icon', 'trophy');
          if (this.element.hasClass('fa-truck'))
            this.setData('icon', 'truck');
          if (this.element.hasClass('fa-tty'))
            this.setData('icon', 'tty');
          if (this.element.hasClass('fa-twitter'))
            this.setData('icon', 'twitter');
          if (this.element.hasClass('fa-umbrella'))
            this.setData('icon', 'umbrella');
          if (this.element.hasClass('fa-universal-access'))
            this.setData('icon', 'universal-access');
          if (this.element.hasClass('fa-university'))
            this.setData('icon', 'university');
          if (this.element.hasClass('fa-unlock'))
            this.setData('icon', 'unlock');
          if (this.element.hasClass('fa-unlock-alt'))
            this.setData('icon', 'unlock-alt');
          if (this.element.hasClass('fa-upload'))
            this.setData('icon', 'upload');
          if (this.element.hasClass('fa-user'))
            this.setData('icon', 'user');
          if (this.element.hasClass('fa-user-circle'))
            this.setData('icon', 'user-circle');
          if (this.element.hasClass('fa-user-circle-'))
            this.setData('icon', 'user-circle-o');
          if (this.element.hasClass('fa-user-o'))
            this.setData('icon', 'user-o');
          if (this.element.hasClass('fa-user-plus'))
            this.setData('icon', 'user-plus');
          if (this.element.hasClass('fa-user-secret'))
            this.setData('icon', 'user-secret');
          if (this.element.hasClass('fa-user-times'))
            this.setData('icon', 'user-times');
          if (this.element.hasClass('fa-users'))
            this.setData('icon', 'users');
          if (this.element.hasClass('fa-video-camera'))
            this.setData('icon', 'video-camera');
          if (this.element.hasClass('fa-weixin'))
            this.setData('icon', 'weixin');
          if (this.element.hasClass('fa-wheelchair'))
            this.setData('icon', 'wheelchair');
          if (this.element.hasClass('fa-wifi'))
            this.setData('icon', 'wifi');
          if (this.element.hasClass('fa-windows'))
            this.setData('icon', 'windows');
          if (this.element.hasClass('fa-wordpress'))
            this.setData('icon', 'wordpress');
          if (this.element.hasClass('fa-wrench'))
            this.setData('icon', 'wrench');
          if (this.element.hasClass('fa-youtube-play'))
            this.setData('icon', 'youtube-play');
        },

        data: function () {
          this.element.removeClass('text-white');
          this.element.removeClass('text-grey-100');
          this.element.removeClass('text-unit-primary');
          this.element.removeClass('text-unit-secondary');
          this.element.removeClass('text-unit-tertiary');
          this.element.removeClass('text-unit-accent');
          this.element.removeClass('text-ubc-blue');
          this.element.removeClass('text-ubc-blue-sea');
          this.element.removeClass('text-ubc-blue-cobalt');
          this.element.removeClass('text-ubc-blue-neptune');
          this.element.removeClass('text-ubc-blue-cornflower');
          this.element.removeClass('text-ubc-blue-polar');
          this.element.removeClass('text-ubc-blue-frost');

          this.element.removeClass('fa-lg');
          this.element.removeClass('fa-2x');
          this.element.removeClass('fa-3x');
          this.element.removeClass('fa-4x');
          this.element.removeClass('fa-5x');

          this.element.removeClass('fa-fw');
          this.element.removeClass('fa-border');
          this.element.removeClass('fa-pull-right');
          this.element.removeClass('fa-pull-left');

          this.element.removeClass('fa-spin');
          this.element.removeClass('fa-pulse');

          this.element.removeClass('fa-rotate-90');
          this.element.removeClass('fa-rotate-180');
          this.element.removeClass('fa-rotate-270');
          this.element.removeClass('fa-flip-horizontal');
          this.element.removeClass('fa-flip-vertical');

          this.element.removeClass('fa-address-book-o');
          this.element.removeClass('fa-address-card-o');
          this.element.removeClass('fa-android');
          this.element.removeClass('fa-angle-double-up');
          this.element.removeClass('fa-angle-up');
          this.element.removeClass('fa-apple');
          this.element.removeClass('fa-arrow-circle-up');
          this.element.removeClass('fa-arrow-up');
          this.element.removeClass('fa-bars');
          this.element.removeClass('fa-bell');
          this.element.removeClass('fa-bell-o');
          this.element.removeClass('fa-bicycle');
          this.element.removeClass('fa-book');
          this.element.removeClass('fa-bookmark');
          this.element.removeClass('fa-bookmark-o');
          this.element.removeClass('fa-building');
          this.element.removeClass('fa-building-o');
          this.element.removeClass('fa-bullhorn');
          this.element.removeClass('fa-bus');
          this.element.removeClass('fa-calculator');
          this.element.removeClass('fa-calendar');
          this.element.removeClass('fa-calendar-check-o');
          this.element.removeClass('fa-calendar-minus-o');
          this.element.removeClass('fa-calendar-o');
          this.element.removeClass('fa-calendar-plus-o');
          this.element.removeClass('fa-calendar-times-o');
          this.element.removeClass('fa-camera-retro');
          this.element.removeClass('fa-car');
          this.element.removeClass('fa-caret-up');
          this.element.removeClass('fa-certificate');
          this.element.removeClass('fa-check');
          this.element.removeClass('fa-check-circle');
          this.element.removeClass('fa-check-circle-o');
          this.element.removeClass('fa-check-square');
          this.element.removeClass('fa-check-square-o');
          this.element.removeClass('fa-chevron-circle-up');
          this.element.removeClass('fa-chevron-up');
          this.element.removeClass('fa-chrome');
          this.element.removeClass('fa-circle-o-notch');
          this.element.removeClass('fa-circle-thin');
          this.element.removeClass('fa-clock-o');
          this.element.removeClass('fa-clone');
          this.element.removeClass('fa-cloud');
          this.element.removeClass('fa-cloud-download');
          this.element.removeClass('fa-cloud-upload');
          this.element.removeClass('fa-code');
          this.element.removeClass('fa-code-fork');
          this.element.removeClass('fa-cog');
          this.element.removeClass('fa-cogs');
          this.element.removeClass('fa-comment');
          this.element.removeClass('fa-comment-o');
          this.element.removeClass('fa-commenting');
          this.element.removeClass('fa-commenting-o');
          this.element.removeClass('fa-comments');
          this.element.removeClass('fa-comments-o');
          this.element.removeClass('fa-compass');
          this.element.removeClass('fa-copyright');
          this.element.removeClass('fa-cutlery');
          this.element.removeClass('fa-database');
          this.element.removeClass('fa-desktop');
          this.element.removeClass('fa-download');
          this.element.removeClass('fa-drupal');
          this.element.removeClass('fa-edge');
          this.element.removeClass('fa-edit');
          this.element.removeClass('fa-ellipsis-h');
          this.element.removeClass('fa-ellipsis-v');
          this.element.removeClass('fa-envelope');
          this.element.removeClass('fa-envelope-o');
          this.element.removeClass('fa-envelope-open');
          this.element.removeClass('fa-envelope-open-o');
          this.element.removeClass('fa-eraser');
          this.element.removeClass('fa-exclamation');
          this.element.removeClass('fa-exclamation-circle');
          this.element.removeClass('fa-exclamation-triangle');
          this.element.removeClass('fa-external-link');
          this.element.removeClass('fa-external-link-square');
          this.element.removeClass('fa-facebook-f');
          this.element.removeClass('fa-file-image-o');
          this.element.removeClass('fa-file-o');
          this.element.removeClass('fa-file-pdf-o');
          this.element.removeClass('fa-file-text-o');
          this.element.removeClass('fa-firefox');
          this.element.removeClass('fa-flag');
          this.element.removeClass('fa-flag-o');
          this.element.removeClass('fa-flickr');
          this.element.removeClass('fa-folder');
          this.element.removeClass('fa-folder-o');
          this.element.removeClass('fa-folder-open');
          this.element.removeClass('fa-folder-open-o');
          this.element.removeClass('fa-git');
          this.element.removeClass('fa-github');
          this.element.removeClass('fa-globe');
          this.element.removeClass('fa-google-plus');
          this.element.removeClass('fa-graduation-cap');
          this.element.removeClass('fa-hashtag');
          this.element.removeClass('fa-headphones');
          this.element.removeClass('fa-heart');
          this.element.removeClass('fa-heart-o');
          this.element.removeClass('fa-history');
          this.element.removeClass('fa-home');
          this.element.removeClass('fa-id-badge');
          this.element.removeClass('fa-id-card');
          this.element.removeClass('fa-id-card-o');
          this.element.removeClass('fa-inbox');
          this.element.removeClass('fa-info');
          this.element.removeClass('fa-info-circle');
          this.element.removeClass('fa-instagram');
          this.element.removeClass('fa-internet-explorer');
          this.element.removeClass('fa-keyboard');
          this.element.removeClass('fa-laptop');
          this.element.removeClass('fa-leaf');
          this.element.removeClass('fa-level-down');
          this.element.removeClass('fa-level-up');
          this.element.removeClass('fa-lightbulb-o');
          this.element.removeClass('fa-linkedin');
          this.element.removeClass('fa-linux');
          this.element.removeClass('fa-lock');
          this.element.removeClass('fa-magnet');
          this.element.removeClass('fa-map');
          this.element.removeClass('fa-map-marker');
          this.element.removeClass('fa-map-o');
          this.element.removeClass('fa-map-pin');
          this.element.removeClass('fa-minus');
          this.element.removeClass('fa-minus-square');
          this.element.removeClass('fa-minus-square-o');
          this.element.removeClass('fa-mobile');
          this.element.removeClass('fa-motorcycle');
          this.element.removeClass('fa-mouse-pointer');
          this.element.removeClass('fa-opera');
          this.element.removeClass('fa-paper-plane');
          this.element.removeClass('fa-pencil');
          this.element.removeClass('fa-pencil-square');
          this.element.removeClass('fa-pencil-square-o');
          this.element.removeClass('fa-percent');
          this.element.removeClass('fa-phone');
          this.element.removeClass('fa-phone-square');
          this.element.removeClass('fa-pie-chart');
          this.element.removeClass('fa-pinterest-p');
          this.element.removeClass('fa-plus-square');
          this.element.removeClass('fa-plus-square-o');
          this.element.removeClass('fa-podcast');
          this.element.removeClass('fa-power-off');
          this.element.removeClass('fa-print');
          this.element.removeClass('fa-puzzle-piece');
          this.element.removeClass('fa-qrcode');
          this.element.removeClass('fa-quote-left');
          this.element.removeClass('fa-quote-right');
          this.element.removeClass('fa-random');
          this.element.removeClass('fa-recycle');
          this.element.removeClass('fa-refresh');
          this.element.removeClass('fa-registered');
          this.element.removeClass('fa-reply');
          this.element.removeClass('fa-reply-all');
          this.element.removeClass('fa-retweet');
          this.element.removeClass('fa-road');
          this.element.removeClass('fa-rss');
          this.element.removeClass('fa-rss-square');
          this.element.removeClass('fa-safari');
          this.element.removeClass('fa-search');
          this.element.removeClass('fa-search-minus');
          this.element.removeClass('fa-search-plus');
          this.element.removeClass('fa-server');
          this.element.removeClass('fa-share');
          this.element.removeClass('fa-share-alt');
          this.element.removeClass('fa-share-alt-square');
          this.element.removeClass('fa-shopping-bag');
          this.element.removeClass('fa-shopping-basket');
          this.element.removeClass('fa-shopping-cart');
          this.element.removeClass('fa-sign-in');
          this.element.removeClass('fa-sign-out');
          this.element.removeClass('fa-signal');
          this.element.removeClass('fa-sitemap');
          this.element.removeClass('fa-skype');
          this.element.removeClass('fa-slack');
          this.element.removeClass('fa-sliders');
          this.element.removeClass('fa-snowflake-o');
          this.element.removeClass('fa-spinner');
          this.element.removeClass('fa-square');
          this.element.removeClass('fa-square-o');
          this.element.removeClass('fa-star');
          this.element.removeClass('fa-star-half');
          this.element.removeClass('fa-star-half-o');
          this.element.removeClass('fa-star-o');
          this.element.removeClass('fa-sticky-note');
          this.element.removeClass('fa-sticky-note-o');
          this.element.removeClass('fa-street-view');
          this.element.removeClass('fa-suitcase');
          this.element.removeClass('fa-sun-o');
          this.element.removeClass('fa-tablet');
          this.element.removeClass('fa-tachometer');
          this.element.removeClass('fa-tag');
          this.element.removeClass('fa-tags');
          this.element.removeClass('fa-tasks');
          this.element.removeClass('fa-taxi');
          this.element.removeClass('fa-terminal');
          this.element.removeClass('fa-thumb-tack');
          this.element.removeClass('fa-times');
          this.element.removeClass('fa-times-circle');
          this.element.removeClass('fa-trash');
          this.element.removeClass('fa-trash-o');
          this.element.removeClass('fa-tree');
          this.element.removeClass('fa-trophy');
          this.element.removeClass('fa-truck');
          this.element.removeClass('fa-tty');
          this.element.removeClass('fa-twitter');
          this.element.removeClass('fa-umbrella');
          this.element.removeClass('fa-universal-access');
          this.element.removeClass('fa-university');
          this.element.removeClass('fa-unlock');
          this.element.removeClass('fa-unlock-alt');
          this.element.removeClass('fa-upload');
          this.element.removeClass('fa-user');
          this.element.removeClass('fa-user-circle');
          this.element.removeClass('fa-user-circle-o');
          this.element.removeClass('fa-user-o');
          this.element.removeClass('fa-user-plus');
          this.element.removeClass('fa-user-secret');
          this.element.removeClass('fa-user-times');
          this.element.removeClass('fa-users');
          this.element.removeClass('fa-video-camera');
          this.element.removeClass('fa-weixin');
          this.element.removeClass('fa-wheelchair');
          this.element.removeClass('fa-wifi');
          this.element.removeClass('fa-windows');
          this.element.removeClass('fa-wordpress');
          this.element.removeClass('fa-wrench');
          this.element.removeClass('fa-youtube-play');

          if (this.data.background)
            this.element.addClass(this.data.background);
          if (this.data.size)
            this.element.addClass('fa-' + this.data.size);
          if (this.data.align)
            this.element.addClass('fa-' + this.data.align);
          if (this.data.animate)
            this.element.addClass('fa-' + this.data.animate);
          if (this.data.rotate)
            this.element.addClass('fa-' + this.data.rotate);
          if (this.data.icon)
            this.element.addClass('fa-' + this.data.icon);
        }
      });
    }
  });
})(jQuery);
