CKEDITOR.dialog.add('fontawesome-icon', function (editor) {
  return {
    title: 'Fontawesome Icon',
    minWidth: 200,
    minHeight: 100,
    contents: [{
      id: 'info',
      elements: [
      {
        type: 'html',
        html: '<style>.cke_dialog_ui_input_select{ width: 100%; }</style>'
      },
      {
          id: 'icon',
          type: 'select',
          label: 'Icon',
          items: [
            ['none', ''],
            ['address-book-o', 'address-book-o'],
            ['address-card-o', 'address-card-o'],
            ['android', 'android'],
            ['angle-double-up', 'angle-double-up'],
            ['angle-up', 'angle-up'],
            ['apple', 'apple'],
            ['arrow-circle-up', 'arrow-circle-up'],
            ['arrow-up', 'arrow-up'],
            ['bars', 'bars'],
            ['bell', 'bell'],
            ['bell-o', 'bell-o'],
            ['bicycle', 'bicycle'],
            ['book', 'book'],
            ['bookmark', 'bookmark'],
            ['bookmark-o', 'bookmark-o'],
            ['building', 'building'],
            ['building-o', 'building-o'],
            ['bullhorn', 'bullhorn'],
            ['bus', 'bus'],
            ['calculator', 'calculator'],
            ['calendar', 'calendar'],
            ['calendar-check-o', 'calendar-check-o'],
            ['calendar-minus-o', 'calendar-minus-o'],
            ['calendar-o', 'calendar-o'],
            ['calendar-plus-o', 'calendar-plus-o'],
            ['calendar-times-o', 'calendar-times-o'],
            ['camera-retro', 'camera-retro'],
            ['car', 'car'],
            ['caret-up', 'caret-up'],
            ['certificate', 'certificate'],
            ['check', 'check'],
            ['check-circle', 'check-circle'],
            ['check-circle-o', 'check-circle-o'],
            ['check-square', 'check-square'],
            ['check-square-o', 'check-square-o'],
            ['chevron-circle-up', 'chevron-circle-up'],
            ['chevron-up', 'chevron-up'],
            ['chrome', 'chrome'],
            ['circle-o-notch', 'circle-o-notch'],
            ['circle-thin', 'circle-thin'],
            ['clock-o', 'clock-o'],
            ['clone', 'clone'],
            ['cloud', 'cloud'],
            ['cloud-download', 'cloud-download'],
            ['cloud-upload', 'cloud-upload'],
            ['code', 'code'],
            ['code-fork', 'code-fork'],
            ['cog', 'cog'],
            ['cogs', 'cogs'],
            ['comment', 'comment'],
            ['comment-o', 'comment-o'],
            ['commenting', 'commenting'],
            ['commenting-o', 'commenting-o'],
            ['comments', 'comments'],
            ['comments-o', 'comments-o'],
            ['compass', 'compass'],
            ['copyright', 'copyright'],
            ['cutlery', 'cutlery'],
            ['database', 'database'],
            ['desktop', 'desktop'],
            ['download', 'download'],
            ['drupal', 'drupal'],
            ['edge', 'edge'],
            ['edit', 'edit'],
            ['ellipsis-h', 'ellipsis-h'],
            ['ellipsis-v', 'ellipsis-v'],
            ['envelope', 'envelope'],
            ['envelope-o', 'envelope-o'],
            ['envelope-open', 'envelope-open'],
            ['envelope-open-o', 'envelope-open-o'],
            ['eraser', 'eraser'],
            ['exclamation', 'exclamation'],
            ['exclamation-circle', 'exclamation-circle'],
            ['exclamation-triangle', 'exclamation-triangle'],
            ['external-link', 'external-link'],
            ['external-link-square', 'external-link-square'],
            ['facebook-f', 'facebook-f'],
            ['file-image-o', 'file-image-o'],
            ['file-o', 'file-o'],
            ['file-pdf-o', 'file-pdf-o'],
            ['file-text-o', 'file-text-o'],
            ['firefox', 'firefox'],
            ['flag', 'flag'],
            ['flag-o', 'flag-o'],
            ['flickr', 'flickr'],
            ['folder', 'folder'],
            ['folder-o', 'folder-o'],
            ['folder-open', 'folder-open'],
            ['folder-open-o', 'folder-open-o'],
            ['git', 'git'],
            ['github', 'github'],
            ['globe', 'globe'],
            ['google-plus', 'google-plus'],
            ['graduation-cap', 'graduation-cap'],
            ['hashtag', 'hashtag'],
            ['headphones', 'headphones'],
            ['heart', 'heart'],
            ['heart-o', 'heart-o'],
            ['history', 'history'],
            ['home', 'home'],
            ['id-badge', 'id-badge'],
            ['id-card', 'id-card'],
            ['id-card-o', 'id-card-o'],
            ['inbox', 'inbox'],
            ['info', 'info'],
            ['info-circle', 'info-circle'],
            ['instagram', 'instagram'],
            ['internet-explorer', 'internet-explorer'],
            ['keyboard', 'keyboard'],
            ['laptop', 'laptop'],
            ['leaf', 'leaf'],
            ['level-down', 'level-down'],
            ['level-up', 'level-up'],
            ['lightbulb-o', 'lightbulb-o'],
            ['linkedin', 'linkedin'],
            ['linux', 'linux'],
            ['lock', 'lock'],
            ['magnet', 'magnet'],
            ['map', 'map'],
            ['map-marker', 'map-marker'],
            ['map-o', 'map-o'],
            ['map-pin', 'map-pin'],
            ['minus', 'minus'],
            ['minus-square', 'minus-square'],
            ['minus-square-o', 'minus-square-o'],
            ['mobile', 'mobile'],
            ['motorcycle', 'motorcycle'],
            ['mouse-pointer', 'mouse-pointer'],
            ['opera', 'opera'],
            ['paper-plane', 'paper-plane'],
            ['pencil', 'pencil'],
            ['pencil-square', 'pencil-square'],
            ['pencil-square-o', 'pencil-square-o'],
            ['percent', 'percent'],
            ['phone', 'phone'],
            ['phone-square', 'phone-square'],
            ['pie-chart', 'pie-chart'],
            ['pinterest-p', 'pinterest-p'],
            ['plus-square', 'plus-square'],
            ['plus-square-o', 'plus-square-o'],
            ['podcast', 'podcast'],
            ['power-off', 'power-off'],
            ['print', 'print'],
            ['puzzle-piece', 'puzzle-piece'],
            ['qrcode', 'qrcode'],
            ['quote-left', 'quote-left'],
            ['quote-right', 'quote-right'],
            ['random', 'random'],
            ['recycle', 'recycle'],
            ['refresh', 'refresh'],
            ['registered', 'registered'],
            ['reply', 'reply'],
            ['reply-all', 'reply-all'],
            ['retweet', 'retweet'],
            ['road', 'road'],
            ['rss', 'rss'],
            ['rss-square', 'rss-square'],
            ['safari', 'safari'],
            ['search', 'search'],
            ['search-minus', 'search-minus'],
            ['search-plus', 'search-plus'],
            ['server', 'server'],
            ['share', 'share'],
            ['share-alt', 'share-alt'],
            ['share-alt-square', 'share-alt-square'],
            ['shopping-bag', 'shopping-bag'],
            ['shopping-basket', 'shopping-basket'],
            ['shopping-cart', 'shopping-cart'],
            ['sign-in', 'sign-in'],
            ['sign-out', 'sign-out'],
            ['signal', 'signal'],
            ['sitemap', 'sitemap'],
            ['skype', 'skype'],
            ['slack', 'slack'],
            ['sliders', 'sliders'],
            ['snowflake-o', 'snowflake-o'],
            ['spinner', 'spinner'],
            ['square', 'square'],
            ['square-o', 'square-o'],
            ['star', 'star'],
            ['star-half', 'star-half'],
            ['star-half-o', 'star-half-o'],
            ['star-o', 'star-o'],
            ['sticky-note', 'sticky-note'],
            ['sticky-note-o', 'sticky-note-o'],
            ['street-view', 'street-view'],
            ['suitcase', 'suitcase'],
            ['sun-o', 'sun-o'],
            ['tablet', 'tablet'],
            ['tachometer', 'tachometer'],
            ['tag', 'tag'],
            ['tags', 'tags'],
            ['tasks', 'tasks'],
            ['taxi', 'taxi'],
            ['terminal', 'terminal'],
            ['thumb-tack', 'thumb-tack'],
            ['times', 'times'],
            ['times-circle', 'times-circle'],
            ['trash', 'trash'],
            ['trash-o', 'trash-o'],
            ['tree', 'tree'],
            ['trophy', 'trophy'],
            ['truck', 'truck'],
            ['tty', 'tty'],
            ['twitter', 'twitter'],
            ['umbrella', 'umbrella'],
            ['universal-access', 'universal-access'],
            ['university', 'university'],
            ['unlock', 'unlock'],
            ['unlock-alt', 'unlock-alt'],
            ['upload', 'upload'],
            ['user', 'user'],
            ['user-circle', 'user-circle'],
            ['user-circle-o', 'user-circle-o'],
            ['user-o', 'user-o'],
            ['user-plus', 'user-plus'],
            ['user-secret', 'user-secret'],
            ['user-times', 'user-times'],
            ['users', 'users'],
            ['video-camera', 'video-camera'],
            ['weixin', 'weixin'],
            ['wheelchair', 'wheelchair'],
            ['wifi', 'wifi'],
            ['windows', 'windows'],
            ['wordpress', 'wordpress'],
            ['wrench', 'wrench'],
            ['youtube-play', 'youtube-play']
          ],
          setup: function (widget) {
            this.setValue(widget.data.icon);
          },
          commit: function (widget) {
            widget.setData('icon', this.getValue());
          }
        },
        {
          id: 'align',
          type: 'select',
          label: 'Align',
          items: [
            ['Default', ''],
            ['Fixed Width', 'fw'],
            ['Bordered', 'border'],
            ['Right', 'pull-right'],
            ['Left', 'pull-left']
          ],
          setup: function (widget) {
            this.setValue(widget.data.align);
          },
          commit: function (widget) {
            widget.setData('align', this.getValue());
          }
        },

        {
          id: 'animate',
          type: 'select',
          label: 'Animate',
          items: [
            ['No Animation', ''],
            ['Spin', 'spin'],
            ['Pulse', 'pulse']
          ],
          setup: function (widget) {
            this.setValue(widget.data.animate);
          },
          commit: function (widget) {
            widget.setData('animate', this.getValue());
          }
        },
        {
          id: 'rotate',
          type: 'select',
          label: 'Rotate',
          items: [
            ['None', ''],
            ['Rotate 90', 'rotate-90'],
            ['Rotate 180', 'fa-rotate-180'],
            ['Rotate 270', 'rotate-270'],
            ['Flip Horizontal', 'flip-horizontal'],
            ['Flip Vertical', 'flip-vertical']
          ],
          setup: function (widget) {
            this.setValue(widget.data.rotate);
          },
          commit: function (widget) {
            widget.setData('rotate', this.getValue());
          }
        },

        {
          id: 'size',
          type: 'select',
          label: 'Size',
          items: [
            ['Normal', ''],
            ['Large', 'lg'],
            ['2X', '2x'],
            ['3X', '3x'],
            ['4X', '4x'],
            ['5X', '5x']
          ],
          setup: function (widget) {
            this.setValue(widget.data.size);
          },
          commit: function (widget) {
            widget.setData('size', this.getValue());
          }
        }
      ]
    }]
  };
});
