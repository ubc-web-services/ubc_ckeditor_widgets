CKEDITOR.dialog.add('svgicon', function(editor) {
    var lang = editor.lang.svgicon;
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
                                label: lang.iconColorLabel,
                                items: [
                                    [lang.iconColorWhite, lang.iconColorWhiteClass],
                                    [lang.iconColorPolar, lang.iconColorPolarClass],
                                    [lang.iconColorCornflower, lang.iconColorCornflowerClass],
                                    [lang.iconColorNeptune, lang.iconColorNeptuneClass],
                                    [lang.iconColorCobalt, lang.iconColorCobaltClass],
                                    [lang.iconColorSea, lang.iconColorSeaClass],
                                    [lang.iconColorUBC, lang.iconColorUBCClass],
                                    [lang.iconColorBlack, lang.iconColorBlackClass],
                                    [lang.iconColorGrey, lang.iconColorGreyClass]
                                ],
                                setup: function(widget) {
                                    this.setValue(widget.data.btntype || lang.iconStyleDefault);
                                },
                                commit: function(widget) {
                                    widget.setData('btntype', this.getValue());
                                }
                            },
                            {
                                id: 'btnsize',
                                type: 'select',
                                label: lang.iconSizeLabel,
                                items: [
                                    [lang.iconSizeXS, lang.iconSizeXSClass],
                                    [lang.iconSizeSM, lang.iconSizeSMClass],
                                    [lang.iconSizeMD, lang.iconSizeMDClass],
                                    [lang.iconSizeLG, lang.iconSizeLGClass],
                                    [lang.iconSizeXL, lang.iconSizeXLClass]
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
                                type: 'select',
                                label: lang.iconWidthLabel,
                                items: [
                                  [lang.iconWidthXS, lang.iconWidthXSClass],
                                  [lang.iconWidthSM, lang.iconWidthSMClass],
                                  [lang.iconWidthMD, lang.iconWidthMDClass],
                                  [lang.iconWidthLG, lang.iiconWidthLGClass],
                                  [lang.iconWidthXL, lang.iconWidthXLClass]
                                ],
                                setup: function(widget) {
                                    this.setValue(widget.data.btntext || '');
                                },
                                commit: function(widget) {
                                    widget.setData('btntext', this.getValue());
                                }
                            }
                        ]
                    }
                ]
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
                                    html: lang.iconIconHeader
                                },
                                {
                                    id: 'btnicon',
                                    type: 'radio',
                                    label: lang.iconIconLabel,
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
                                        [lang.iconEighteen, lang.iconEighteenClass]
                                    ],
                                    setup: function(widget) {
                                        this.setValue(widget.data.btnicon || '');
                                    },
                                    commit: function(widget) {
                                        widget.setData('btnicon', this.getValue());
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
