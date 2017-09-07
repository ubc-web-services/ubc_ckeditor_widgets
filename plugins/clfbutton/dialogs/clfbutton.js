CKEDITOR.dialog.add('clfbutton', function(editor) {
    var lang = editor.lang.clfbutton;
    return {
        title: lang.widgetTitle,
        minWidth: 500,
        minHeight: 150,
        resizable: false,
        contents: [{
                id: 'info',
                label: lang.tabInfo,
                accessKey: 'I',
                elements: [{
                        type: "hbox",
                        widths: ["50%", "50%"],
                        children: [{
                                id: 'btntype',
                                type: 'select',
                                label: lang.buttonStyleLabel,
                                items: [
                                    [lang.buttonUnitPrimary, lang.buttonUnitPrimaryClass],
                                    [lang.buttonUnitReverse, lang.buttonUnitReverseClass],
                                    //[lang.buttonUnitAlt, lang.buttonUnitAltClass],
                                    [lang.buttonUnitSecondary, lang.buttonUnitSecondaryClass],
                                    [lang.buttonUnitSecondaryReverse, lang.buttonUnitSecondaryReverseClass],
                                    [lang.buttonUnitSecondaryAlt, lang.buttonUnitSecondaryAltClass],
                                    [lang.buttonUnitPlain, lang.buttonUnitPlainClass],
                                    [lang.buttonLink, lang.buttonLinkClass],
                                    [lang.buttonDefault, lang.buttonDefaultClass],
                                    [lang.buttonPrimary, lang.buttonPrimaryClass],
                                    [lang.buttonSuccess, lang.buttonSuccessClass],
                                    [lang.buttonInfo, lang.buttonInfoClass],
                                    [lang.buttonWarning, lang.buttonWarningClass],
                                    [lang.buttonDanger, lang.buttonDangerClass]
                                ],
                                setup: function(widget) {
                                    this.setValue(widget.data.btntype || lang.buttonStyleDefault);
                                },
                                commit: function(widget) {
                                    widget.setData('btntype', this.getValue());
                                }
                            },
                            {
                                id: 'btnsize',
                                type: 'select',
                                label: lang.buttonSizeLabel,
                                items: [
                                    [lang.buttonSizeExSmall, lang.buttonSizeExSmallClass],
                                    [lang.buttonSizeSmall, lang.buttonSizeSmallClass],
                                    [lang.buttonSizeNormal, lang.buttonSizeNormalClass],
                                    [lang.buttonSizeLarge, lang.buttonSizeLargeClass]
                                ],
                                setup: function(widget) {
                                    this.setValue(widget.data.btnsize || '');
                                },
                                commit: function(widget) {
                                    widget.setData('btnsize', this.getValue());
                                }
                            }
                        ]
                    },
                    {
                        type: "hbox",
                        widths: ["50%", "50%"],
                        children: [{
                                id: 'btntext',
                                type: 'text',
                                width: '200px',
                                required: true,
                                label: lang.buttonTextLabel,
                                setup: function(widget) {
                                    this.setValue(widget.data.btntext || lang.buttonTextDefault);
                                },
                                commit: function(widget) {
                                    widget.setData('btntext', this.getValue());
                                }
                            },
                            {
                                id: 'btnhref',
                                type: 'text',
                                width: '200px',
                                required: true,
                                label: lang.buttonUrlLabel,
                                setup: function(widget) {
                                    this.setValue(widget.data.btnhref || lang.buttonUrlDefault);
                                },
                                commit: function(widget) {
                                    widget.setData('btnhref', this.getValue());
                                }
                            }
                        ]
                    },
                    {
                        type: "hbox",
                        widths: ["50%", "50%"],
                        children: [{
                                id: 'btnwidth',
                                type: 'select',
                                label: lang.buttonWidthLabel,
                                items: [
                                    [lang.buttonWidthInline, lang.buttonWidthInlineClass],
                                    [lang.buttonWidthBlock, lang.buttonWidthBlockClass]
                                ],
                                setup: function(widget) {
                                    this.setValue(widget.data.btnwidth || '');
                                },
                                commit: function(widget) {
                                    widget.setData('btnwidth', this.getValue());
                                }
                            },
                            {
                                id: 'btntextalign',
                                type: 'select',
                                label: lang.buttonTextAlignLabel,
                                items: [
                                    [lang.buttonTextAlignLeft, lang.buttonTextAlignLeftCLass],
                                    [lang.buttonTextAlignCenter, lang.buttonTextAlignCenterClass],
                                    [lang.buttonTextAlignRight, lang.buttonTextAlignRightClass]
                                ],
                                setup: function(widget) {
                                    this.setValue(widget.data.btntextalign || '');
                                },
                                commit: function(widget) {
                                    widget.setData('btntextalign', this.getValue());
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 'linktarget',
                label: lang.tabTarget,
                elements: [{
                    id: "target",
                    type: "select",
                    label: lang.buttonTargetLabel,
                    items: [
                        [lang.buttonTargetNotsetLabel, lang.buttonTargetNotset],
                        [lang.buttonTargetFrameLabel, lang.buttonTargetFrame],
                        [lang.buttonTargetPopupLabel, lang.buttonTargetPopup],
                        [lang.buttonTargetBlankLabel, lang.buttonTargetBlank],
                        [lang.buttonTargetTopLabel, lang.buttonTargetTop],
                        [lang.buttonTargetSelfLabel, lang.buttonTargetSelf],
                        [lang.buttonTargetParentLabel, lang.buttonTargetParent]
                    ],
                    setup: function(widget) {
                        this.setValue(widget.data.target || lang.buttonTargetDefault);
                    },
                    commit: function(widget) {
                        widget.setData('target', this.getValue());
                    }
                }]
            },
            {
                id: 'icons',
                label: lang.tabIcons,
                elements: [{
                    type: "hbox",
                    widths: ["50%", "50%"],
                    children: [{
                            type: 'vbox',
                            children: [{
                                    type: 'html',
                                    html: lang.buttonIconHeader
                                },
                                {
                                    id: 'btnicon',
                                    type: 'select',
                                    label: lang.buttonIconLabel,
                                    items: [
                                        [lang.iconZero, lang.iconZeroClass],
                                        [lang.iconOne, lang.iconOneClass],
                                        [lang.iconTwo, lang.iconTwoClass],
                                        [lang.iconThree, lang.iconThreeClass],
                                        [lang.iconFour, lang.iconFourClass],
                                        [lang.iconFive, lang.iconFiveClass],
                                        [lang.iconSix, lang.iconSixClass],
                                        [lang.iconSeven, lang.iconSevenClass],
                                        [lang.iconEight, lang.iconEightClass],
                                        [lang.iconNine, lang.iconNineClass],
                                        [lang.iconTen, lang.iconTenClass],
                                        [lang.iconEleven, lang.iconElevenClass],
                                        [lang.iconTwelve, lang.iconTwelveClass],
                                        [lang.iconThirteen, lang.iconThirteenClass],
                                        [lang.iconFourteen, lang.iconFourteenClass],
                                        [lang.iconFifteen, lang.iconFifteenClass],
                                        [lang.iconSixteen, lang.iconSixteenClass],
                                        [lang.iconSeventeen, lang.iconSeventeenClass],
                                        [lang.iconEighteen, lang.iconEighteenClass],
                                        [lang.iconNineteen, lang.iconNineteenClass],
                                        [lang.iconTwenty, lang.iconTwentyClass],
                                        [lang.iconTwentyOne, lang.iconTwentyOneClass],
                                        [lang.iconTwentyTwo, lang.iconTwentyTwoClass],
                                        [lang.iconTwentyThree, lang.iconTwentyThreeClass],
                                        [lang.iconTwentyFour, lang.iconTwentyFourClass],
                                        [lang.iconTwentyFive, lang.iconTwentyFiveClass],
                                        [lang.iconTwentySix, lang.iconTwentySixClass],
                                        [lang.iconTwentySeven, lang.iconTwentySevenClass],
                                        [lang.iconTwentyEight, lang.iconTwentyEightClass],
                                        [lang.iconTwentyNine, lang.iconTwentyNineClass],
                                        [lang.iconThirty, lang.iconThirtyClass],
                                        [lang.iconThirtyOne, lang.iconThirtyOneClass],
                                        [lang.iconThirtyTwo, lang.iconThirtyTwoClass]
                                    ],
                                    setup: function(widget) {
                                        this.setValue(widget.data.btnicon || '');
                                    },
                                    commit: function(widget) {
                                        widget.setData('btnicon', this.getValue());
                                    }
                                }
                            ]
                        },
                        {
                            type: 'vbox',
                            children: [{
                                    type: 'html',
                                    html: lang.buttonIconAlignHeader
                                },
                                {
                                    id: 'btniconalign',
                                    type: 'select',
                                    label: lang.buttonIconAlignLabel,
                                    items: [
                                        [lang.iconNone, lang.iconNoneClass],
                                        [lang.iconRight, lang.iconRightClass],
                                        [lang.iconLeft, lang.iconLeftClass]
                                    ],
                                    setup: function(widget) {
                                        this.setValue(widget.data.btniconalign || '');
                                    },
                                    commit: function(widget) {
                                        widget.setData('btniconalign', this.getValue());
                                    }
                                }
                            ]
                        }
                    ]
                }]
            }
        ]
    };
});