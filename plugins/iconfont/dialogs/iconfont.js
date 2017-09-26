/**
 * Copyright (c) 2014-2016, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

// Note: This automatic widget to dialog window binding (the fact that every field is set up from the widget
// and is committed to the widget) is only possible when the dialog is opened by the Widgets System
// (i.e. the widgetDef.dialog property is set).
// When you are opening the dialog window by yourself, you need to take care of this by yourself too.

CKEDITOR.dialog.add('iconfont', function(editor) {
    return {
        title: 'Icon Font',
        minWidth: 200,
        minHeight: 100,
        contents: [{
            id: 'info',
            elements: [{
                    id: 'icon',
                    type: 'select',
                    label: 'Icon',
                    items: [
                        ['none', ''],
                        ['Home', 'home'],
                        ['Chat', 'chat'],
                        ['Plus', 'plus-circled'],
                        ['Minus', 'minus-circled'],
                        ['Up', 'up-open'],
                        ['Down', 'down-open'],
                        ['Left', 'left-open'],
                        ['Right', 'right-open'],
                        ['OK', 'ok'],
                        ['Link', 'link'],
                        ['External Link', 'external-link'],
                        ['Users', 'users'],
                        ['Search', 'search'],
                        ['Thumbs Up', 'thumbs-up'],
                        ['Help', 'help-circled'],
                        ['Info', 'info-circled'],
                        ['Cog', 'cog'],
                        ['Bell', 'bell'],
                        ['Attention', 'attention-circled'],
                        ['Book', 'book'],
                        ['WWW', 'web4'],
                        ['Login, Passwords', 'login_passwords'],
                        ['Information Security', 'information_security'],
                        ['Desktop, Printers', 'desktop_printers'],
                        ['Email, Messaging, Collaboration', 'email_messaging_collab'],
                        ['Audio Visual', 'audio_visual'],
                        ['Bar Chart', 'bar-chart'],
                        ['Lightbulb', 'lightbulb-o'],
                        ['Mobile', 'mobile'],
                        ['ARC', 'arc'],
                        ['Tools', 'tools'],
                        ['Software', 'software'],
                        ['Printer', 'printer'],
                        ['Handshake', 'handshake'],
                        ['Glossary', 'glossary'],
                        ['Cloud', 'cloud'],
                        ['Campus Systems', 'campus_systems'],
                        ['Campus Systems (alt)', 'campus_systems-v2'],
                        ['Servers, Storage', 'servers_storage'],
                        ['Servers, Storage (alt)', 'servers_storage-v2'],
                        ['Research', 'research'],
                        ['Research (alt)', 'research-v2'],
                        ['Comment', 'comment-empty'],
                        ['Teaching and Learning', 'teaching_learning'],
                        ['Angle, Left', 'angle-left'],
                        ['Angle, Right', 'angle-right'],
                        ['Angle, Down', 'angle-down'],
                        ['Angle, Up', 'angle-up'],
                        ['Bank', 'bank'],
                        ['Graduation Cap', 'graduation-cap'],
                        ['Recycle', 'recycle'],
                        ['Database', 'database'],
                        ['Newspaper', 'newspaper']
                    ],
                    // When setting up this field, set its value to the "align" value from widget data.
                    // Note: Align values used in the widget need to be the same as those defined in the "items" array above.
                    setup: function(widget) {
                        this.setValue(widget.data.icon);
                    },
                    // When committing (saving) this field, set its value to the widget data.
                    commit: function(widget) {
                        widget.setData('icon', this.getValue());
                    }
                },
                {
                    id: 'align',
                    type: 'select',
                    label: 'Align',
                    items: [
                        ['Default', ''],
                        ['Right', 'right'],
                        ['Center', 'center']
                    ],
                    // When setting up this field, set its value to the "align" value from widget data.
                    // Note: Align values used in the widget need to be the same as those defined in the "items" array above.
                    setup: function(widget) {
                        this.setValue(widget.data.align);
                    },
                    // When committing (saving) this field, set its value to the widget data.
                    commit: function(widget) {
                        widget.setData('align', this.getValue());
                    }
                },
                {
                    id: 'size',
                    type: 'select',
                    label: 'Size',
                    items: [
                        ['Normal', ''],
                        ['Extra Small', 'xs'],
                        ['Small', 'sm'],
                        ['Large', 'lg'],
                        ['Extra Large', 'xl']
                    ],
                    // When setting up this field, set its value to the "align" value from widget data.
                    // Note: Align values used in the widget need to be the same as those defined in the "items" array above.
                    setup: function(widget) {
                        this.setValue(widget.data.size);
                    },
                    // When committing (saving) this field, set its value to the widget data.
                    commit: function(widget) {
                        widget.setData('size', this.getValue());
                    }
                }
            ]
        }]
    };
});