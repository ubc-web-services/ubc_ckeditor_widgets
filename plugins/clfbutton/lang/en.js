/*
Definition file
----------------------
all text and classes used in the widget, including labels and classes, are defined here for easier updates and control
*/

"use strict"

CKEDITOR.plugins.setLang('clfbutton', 'en', {

    // main title
    widgetTitle: 'Insert a link formatted as a CLF button.',

    // tab titles
    tabInfo: 'Info',
    tabTarget: 'Target',
    tabIcons: 'Icons',

    // button styles
    buttonStyleLabel: '<strong>Button Style</strong>',
    buttonStyleDefault: 'unit-btn unit-btn--primary',
    buttonUnitPrimary: 'Unit Button',
    buttonUnitPrimaryClass: 'unit-btn unit-btn--primary',
    buttonUnitReverse: 'Unit Button, Reversed',
    buttonUnitReverseClass: 'unit-btn unit-btn--reverse',
    //buttonUnitAlt: 'Unit Button, Alternate',
    //buttonUnitAltClass: 'unit-btn unit-btn--alt',
    buttonUnitSecondary: 'Unit Button, Secondary',
    buttonUnitSecondaryClass: 'unit-btn unit-btn--secondary',
    buttonUnitSecondaryReverse: 'Unit Button, Secondary Reversed',
    buttonUnitSecondaryReverseClass: 'unit-btn unit-btn--secondary-reverse',
    buttonUnitSecondaryAlt: 'Unit Button, White Text',
    buttonUnitSecondaryAltClass: 'unit-btn unit-btn--white',
    buttonUnitPlain: 'Unit Button, Plain',
    buttonUnitPlainClass: 'unit-btn--plain',
    buttonLink: 'CLF Link',
    buttonLinkClass: 'btn btn-link',
    buttonDefault: 'CLF Default',
    buttonDefaultClass: 'btn btn-default',
    buttonPrimary: 'CLF Primary',
    buttonPrimaryClass: 'btn btn-primary',
    buttonSuccess: 'CLF Success',
    buttonSuccessClass: 'btn btn-success',
    buttonInfo: 'CLF Info',
    buttonInfoClass: 'btn btn-info',
    buttonWarning: 'CLF Warning',
    buttonWarningClass: 'btn btn-warning',
    buttonDanger: 'CLF Danger',
    buttonDangerClass: 'btn btn-danger',
    buttonAllClasses: 'btn btn-link btn-default btn-primary btn-info btn-success btn-warning btn-danger unit-btn unit-btn--primary unit-btn--reverse unit-btn--secondary unit-btn--secondary-reverse unit-btn--plain unit-btn--white', // aggregate all so we can check for them in plugin.js file

    // button sizes
    buttonSizeLabel: '<strong>Button Size</strong>',
    buttonSizeExSmall: 'Extra Small',
    buttonSizeExSmallClass: 'btn--xs',
    buttonSizeSmall: 'Small',
    buttonSizeSmallClass: 'btn--sm',
    buttonSizeNormal: 'Normal',
    buttonSizeNormalClass: 'btn--normal',
    buttonSizeLarge: 'Large',
    buttonSizeLargeClass: 'btn--lg',
    buttonAllSizeClasses: 'btn--xs btn--sm btn--normal btn--lg', // aggregate all so we can check for them in plugin.js file

    // button text
    buttonTextLabel: '<strong>Button Text</strong>',
    buttonTextDefault: 'A button',

    // button url
    buttonUrlLabel: '<strong>Button Link</strong> include http:// or https://',
    buttonUrlDefault: '#',

    // button width
    buttonWidthLabel: '<strong>Button Width</strong>',
    buttonWidthInline: 'Text Width',
    buttonWidthInlineClass: 'btn--inline',
    buttonWidthBlock: 'Full Width',
    buttonWidthBlockClass: 'btn--block',
    buttonAllWidthClasses: 'btn--inline btn--block', // aggregate all so we can check for them in plugin.js file

    // button text alignment
    buttonTextAlignLabel: '<strong>Button Text Alignment</strong>',
    buttonTextAlignLeft: 'Text Left',
    buttonTextAlignLeftCLass: 'text--left',
    buttonTextAlignCenter: 'Text Centered',
    buttonTextAlignCenterClass: 'text--center',
    buttonTextAlignRight: 'Text Right',
    buttonTextAlignRightClass: 'text--right',
    buttonAllTextAlignClasses: 'text--left text--center text--right', // aggregate all so we can check for them in plugin.js file

    // button target
    buttonTargetLabel: '<strong>Link Target</strong>',
    buttonTargetDefault: '',
    buttonTargetNotsetLabel: 'Not Set',
    buttonTargetNotset: '',
    buttonTargetFrameLabel: 'Frame',
    buttonTargetFrame: 'frame',
    buttonTargetPopupLabel: 'Popup',
    buttonTargetPopup: 'popup',
    buttonTargetBlankLabel: 'New Window (_blank)',
    buttonTargetBlank: '_blank',
    buttonTargetTopLabel: 'Topmost Window (_top)',
    buttonTargetTop: '_top',
    buttonTargetSelfLabel: 'Same Window (_self)',
    buttonTargetSelf: '_self',
    buttonTargetParentLabel: 'Parent Window (_parent)',
    buttonTargetParent: '_parent',

    // button icons
    buttonIconLabel: 'Add an optional icon',
    buttonIconHeader: '<strong>Add an Icon to the Button</strong><p>Select from the icons below (for unit buttons only).<br />See <a href="http://fontawesome.io/icons/" target="_blank">fontawesome website</a> for samples.</p>',
    iconZero: 'No Icon',
    iconZeroClass: 'no--icon',
    iconOne: 'Address Card',
    iconOneClass: 'fa-address-card-o',
    iconTwo: 'Arrow, Up',
    iconTwoClass: 'fa-angle-up',
    iconThree: 'Arrow, Down',
    iconThreeClass: 'fa-angle-down',
    iconFour: 'Arrow, Left',
    iconFourClass: 'fa-angle-left',
    iconFive: 'Arrow, Right',
    iconFiveClass: 'fa-angle-right',
    iconSix: 'Asterisk',
    iconSixClass: 'fa-asterisk',
    iconSeven: 'Calendar',
    iconSevenClass: 'fa-calendar',
    iconEight: 'Check',
    iconEightClass: 'fa-check',
    iconNine: 'Chevron, Up',
    iconNineClass: 'fa-chevron-up',
    iconTen: 'Chevron, Down',
    iconTenClass: 'fa-chevron-down',
    iconEleven: 'Chevron, Left',
    iconElevenClass: 'fa-chevron-left',
    iconTwelve: 'Chevron, Right',
    iconTwelveClass: 'fa-chevron-right',
    iconThirteen: 'Cogs',
    iconThirteenClass: 'fa-cogs',
    iconFourteen: 'Cloud, Download',
    iconFourteenClass: 'fa-cloud-download',
    iconFifteen: 'Cloud, Upload',
    iconFifteenClass: 'fa-cloud-upload',
    iconSixteen: 'Comments',
    iconSixteenClass: 'fa-comments',
    iconSeventeen: 'Edit',
    iconSeventeenClass: 'fa-edit',
    iconEighteen: 'Envelope',
    iconEighteenClass: 'fa-envelope',
    iconNineteen: 'Exclamation',
    iconNineteenClass: 'fa-exclamation-circle',
    iconTwenty: 'External Link',
    iconTwentyClass: 'fa-external-link',
    iconTwentyOne: 'File, Image',
    iconTwentyOneClass: 'fa-file-image-o',
    iconTwentyTwo: 'File, PDF',
    iconTwentyTwoClass: 'fa-file-pdf-o',
    iconTwentyThree: 'File, Text',
    iconTwentyThreeClass: 'fa-file-text-o',
    iconTwentyFour: 'Group',
    iconTwentyFourClass: 'fa-group',
    iconTwentyFive: 'Info',
    iconTwentyFiveClass: 'fa-info-circle',
    iconTwentySix: 'Phone',
    iconTwentySixClass: 'fa-phone',
    iconTwentySeven: 'Print',
    iconTwentySevenClass: 'fa-print',
    iconTwentyEight: 'Question',
    iconTwentyEightClass: 'fa-question-circle',
    iconTwentyNine: 'RSS',
    iconTwentyNineClass: 'fa-rss',
    iconThirty: 'Search',
    iconThirtyClass: 'fa-search',
    iconThirtyOne: 'Send',
    iconThirtyOneClass: 'fa-send',
    iconThirtyTwo: 'User',
    iconThirtyTwoClass: 'fa-user-circle-o',
    iconAllClasses: 'no--icon fa-address-card-o fa-angle-up fa-angle-down fa-angle-left fa-angle-right fa-asterisk fa-calendar fa-check fa-chevron-up fa-chevron-down fa-chevron-left fa-chevron-right fa-cogs fa-cloud-download fa-cloud-upload fa-comments fa-edit fa-envelope fa-exclamation-circle fa-external-link fa-file-pdf-o fa-file-image-o fa-file-text-o fa-group fa-info-circle fa-phone fa-print fa-question-circle fa-rss fa-search fa-send fa-user-circle-o', // aggregate all so we can check for them in plugin.js file

    // button icon alignment
    buttonIconAlignLabel: 'Required when using icon',
    buttonIconAlignHeader: '<strong>Icon Alignment</strong>' +
        '<p>Choose where to put the icon.</p>',
    iconNone: 'No Icon',
    iconNoneClass: 'btn--wo-icon',
    iconRight: 'Icon on Right',
    iconRightClass: 'btn--w-icon',
    iconLeft: 'Icon on Left',
    iconLeftClass: 'btn--w-icon-reverse',
    iconAlignClasses: 'btn--wo-icon btn--w-icon btn--w-icon-reverse' // aggregate all so we can check for them in plugin.js file

});