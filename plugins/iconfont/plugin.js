'use strict';
(function () {

  CKEDITOR.plugins.add('iconfont', {
    requires: 'widget',
    icons: 'iconfont',
    init: function (editor) {
      // Register the editing dialog.
      CKEDITOR.dialog.add('iconfont', this.path + 'dialogs/iconfont.js');
      editor.addContentsCss(this.path + 'css/contents.css');
      editor.addContentsCss(this.path + 'fonts/css/unit-fonts.css');
      editor.ui.addButton('iconfont', {
        label: 'Insert an icon',
        icon: this.path + 'icons/iconfont.png',
        command: 'iconfont'
      });

      editor.widgets.add('iconfont', {
        allowedContent: 'div(!unit-icon,unit-icon-*,fa,fa-*,align-*)[*]',

        requiredContent: 'div(unit-icon)',
        editables: {
          icon: {
            selector: '.unit-icon',
            allowedContent: 'em'
          }
        },
        template: '<div class="unit-icon fa" aria-hidden="true"></div>',
        button: 'Add an icon',
        dialog: 'iconfont',

        upcast: function (element) {
          return element.name == 'div' && element.hasClass('unit-icon');
        },

        init: function () {
          if (this.element.hasClass('unit-icon--size-xs'))
            this.setData('size', 'xs');
          if (this.element.hasClass('unit-icon--size-sm'))
            this.setData('size', 'sm');
          if (this.element.hasClass('unit-icon--size-lg'))
            this.setData('size', 'lg');
          if (this.element.hasClass('unit-icon--size-xl'))
            this.setData('size', 'xl');

          if (this.element.hasClass('unit-icon--align-left'))
            this.setData('align', 'left');
          if (this.element.hasClass('unit-icon--align-right'))
            this.setData('align', 'right');
          if (this.element.hasClass('unit-icon--align-center'))
            this.setData('align', 'center');

          if (this.element.hasClass('unit-icon-home'))
            this.setData('icon', 'home');
          if (this.element.hasClass('unit-icon-chat'))
            this.setData('icon', 'chat');
          if (this.element.hasClass('unit-icon-plus-circled'))
            this.setData('icon', 'plus-circled');
          if (this.element.hasClass('unit-icon-minus-circled'))
            this.setData('icon', 'minus-circled');
          if (this.element.hasClass('unit-icon-up-open'))
            this.setData('icon', 'up-open');
          if (this.element.hasClass('unit-icon-right-open'))
            this.setData('icon', 'right-open');
          if (this.element.hasClass('unit-icon-left-open'))
            this.setData('icon', 'left-open');
          if (this.element.hasClass('unit-icon-down-open'))
            this.setData('icon', 'down-open');
          if (this.element.hasClass('unit-icon-ok'))
            this.setData('icon', 'ok');
          if (this.element.hasClass('unit-icon-link'))
            this.setData('icon', 'link');
          if (this.element.hasClass('unit-icon-users'))
            this.setData('icon', 'users');
          if (this.element.hasClass('unit-icon-search'))
            this.setData('icon', 'search');
          if (this.element.hasClass('unit-icon-thumbs-up'))
            this.setData('icon', 'thumbs-up');
          if (this.element.hasClass('unit-icon-help-circled'))
            this.setData('icon', 'help-circled');
          if (this.element.hasClass('unit-icon-info-circled'))
            this.setData('icon', 'info-circled');
          if (this.element.hasClass('unit-icon-cog'))
            this.setData('icon', 'cog');
          if (this.element.hasClass('unit-icon-bell'))
            this.setData('icon', 'bell');
          if (this.element.hasClass('unit-icon-attention-circled'))
            this.setData('icon', 'attention-circled');
          if (this.element.hasClass('unit-icon-megaphone'))
            this.setData('icon', 'megaphone');
          if (this.element.hasClass('unit-icon-book'))
            this.setData('icon', 'book');
          if (this.element.hasClass('unit-icon-web4'))
            this.setData('icon', 'web4');
          if (this.element.hasClass('unit-icon-login_passwords'))
            this.setData('icon', 'login_passwords');
          if (this.element.hasClass('unit-icon-information_security'))
            this.setData('icon', 'information_security');
          if (this.element.hasClass('unit-icon-desktop_printers'))
            this.setData('icon', 'desktop_printers');
          if (this.element.hasClass('unit-icon-email_messaging_collab'))
            this.setData('icon', 'email_messaging_collab');
          if (this.element.hasClass('unit-icon-audio_visual'))
            this.setData('icon', 'audio_visual');
          if (this.element.hasClass('unit-icon-bar-chart'))
            this.setData('icon', 'bar-chart');
          if (this.element.hasClass('unit-icon-external-link'))
            this.setData('icon', 'external-link');
          if (this.element.hasClass('unit-icon-lightbulb-o'))
            this.setData('icon', 'lightbulb-o');
          if (this.element.hasClass('unit-icon-mobile'))
            this.setData('icon', 'mobile');
          if (this.element.hasClass('unit-icon-arc'))
            this.setData('icon', 'arc');
          if (this.element.hasClass('unit-icon-tools'))
            this.setData('icon', 'tools');
          if (this.element.hasClass('unit-icon-software'))
            this.setData('icon', 'software');
          if (this.element.hasClass('unit-icon-printer'))
            this.setData('icon', 'printer');
          if (this.element.hasClass('unit-icon-handshake'))
            this.setData('icon', 'handshake');
          if (this.element.hasClass('unit-icon-glossary'))
            this.setData('icon', 'glossary');
          if (this.element.hasClass('unit-icon-cloud'))
            this.setData('icon', 'cloud');
          if (this.element.hasClass('unit-icon-campus_systems-v2'))
            this.setData('icon', 'campus_systems-v2');
          if (this.element.hasClass('unit-icon-campus_systems'))
            this.setData('icon', 'campus_systems');
          if (this.element.hasClass('unit-icon-servers_storage-v2'))
            this.setData('icon', 'servers_storage-v2');
          if (this.element.hasClass('unit-icon-servers_storage'))
            this.setData('icon', 'servers_storage');
          if (this.element.hasClass('unit-icon-research'))
            this.setData('icon', 'research');
          if (this.element.hasClass('unit-icon-research-v2'))
            this.setData('icon', 'research-v2');
          if (this.element.hasClass('unit-icon-teaching_learning'))
            this.setData('icon', 'teaching_learning');
          if (this.element.hasClass('unit-icon-comment-empty'))
            this.setData('icon', 'comment-empty');
          if (this.element.hasClass('unit-icon-doc-text'))
            this.setData('icon', 'doc-text');
          if (this.element.hasClass('unit-icon-angle-left'))
            this.setData('icon', 'angle-left');
          if (this.element.hasClass('unit-icon-angle-right'))
            this.setData('icon', 'angle-right');
          if (this.element.hasClass('unit-icon-angle-up'))
            this.setData('icon', 'angle-up');
          if (this.element.hasClass('unit-icon-angle-down'))
            this.setData('icon', 'angle-down');
          if (this.element.hasClass('unit-icon-bank'))
            this.setData('icon', 'bank');
          if (this.element.hasClass('unit-icon-graduation-cap'))
            this.setData('icon', 'graduation-cap');
          if (this.element.hasClass('unit-icon-recycle'))
            this.setData('icon', 'recycle');
          if (this.element.hasClass('unit-icon-database'))
            this.setData('icon', 'database');
          if (this.element.hasClass('unit-icon-newspaper'))
            this.setData('icon', 'newspaper');

        },

        data: function () {
          this.element.removeClass('unit-icon--size-xs');
          this.element.removeClass('unit-icon--size-sm');
          this.element.removeClass('unit-icon--size-lg');
          this.element.removeClass('unit-icon--size-xl');

          this.element.removeClass('unit-icon--align-left');
          this.element.removeClass('unit-icon--align-right');
          this.element.removeClass('unit-icon--align-center');

          this.element.removeClass('unit-icon-home');
          this.element.removeClass('unit-icon-chat');
          this.element.removeClass('unit-icon-plus-circled');
          this.element.removeClass('unit-icon-minus-circled');
          this.element.removeClass('unit-icon-up-open');
          this.element.removeClass('unit-icon-right-open');
          this.element.removeClass('unit-icon-left-open');
          this.element.removeClass('unit-icon-down-open');
          this.element.removeClass('unit-icon-ok');
          this.element.removeClass('unit-icon-link');
          this.element.removeClass('unit-icon-users');
          this.element.removeClass('unit-icon-search');
          this.element.removeClass('unit-icon-thumbs-up');
          this.element.removeClass('unit-icon-help-circled');
          this.element.removeClass('unit-icon-info-circled');
          this.element.removeClass('unit-icon-cog');
          this.element.removeClass('unit-icon-bell');
          this.element.removeClass('unit-icon-attention-circled');
          this.element.removeClass('unit-icon-book');
          this.element.removeClass('unit-icon-web4');
          this.element.removeClass('unit-icon-login_passwords');
          this.element.removeClass('unit-icon-information_security');
          this.element.removeClass('unit-icon-desktop_printers');
          this.element.removeClass('unit-icon-email_messaging_collab');
          this.element.removeClass('unit-icon-audio_visual');
          this.element.removeClass('unit-icon-bar-chart');
          this.element.removeClass('unit-icon-external-link');
          this.element.removeClass('unit-icon-lightbulb-o');
          this.element.removeClass('unit-icon-mobile');
          this.element.removeClass('unit-icon-arc');
          this.element.removeClass('unit-icon-tools');
          this.element.removeClass('unit-icon-software');
          this.element.removeClass('unit-icon-printer');
          this.element.removeClass('unit-icon-handshake');
          this.element.removeClass('unit-icon-glossary');
          this.element.removeClass('unit-icon-cloud');
          this.element.removeClass('unit-icon-campus_systems-v2');
          this.element.removeClass('unit-icon-campus_systems');
          this.element.removeClass('unit-icon-servers_storage-v2');
          this.element.removeClass('unit-icon-servers_storage');
          this.element.removeClass('unit-icon-research');
          this.element.removeClass('unit-icon-research-v2');
          this.element.removeClass('unit-icon-teaching_learning');
          this.element.removeClass('unit-icon-comment-empty');
          this.element.removeClass('unit-icon-angle-left');
          this.element.removeClass('unit-icon-angle-right');
          this.element.removeClass('unit-icon-angle-up');
          this.element.removeClass('unit-icon-angle-down');
          this.element.removeClass('unit-icon-bank');
          this.element.removeClass('unit-icon-graduation-cap');
          this.element.removeClass('unit-icon-recycle');
          this.element.removeClass('unit-icon-database');
          this.element.removeClass('unit-icon-newspaper');

          if (this.data.size)
            this.element.addClass('unit-icon--size-' + this.data.size);
          if (this.data.align)
            this.element.addClass('unit-icon--align-' + this.data.align);
          if (this.data.icon)
            this.element.addClass('unit-icon-' + this.data.icon);
        }
      });
    }
  });
})(jQuery);
