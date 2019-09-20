(function($) {
    CKEDITOR.plugins.add('svgicon', {
        lang: 'en',
        requires: 'widget,dialog',
        icons: 'svgicon',
        init: function(editor) {
            var lang = editor.lang.svgicon;

            CKEDITOR.dialog.add('svgicon', this.path + 'dialogs/svgicon.js');
            //editor.addContentsCss( this.path + 'fonts/css/unit-fonts.css' );
            // Add widget
            editor.ui.addButton('svgicon', {
                label: lang.widgetTitle,
                command: 'svgicon',
                icon: this.path + 'icons/svgicon.png'
            });

            editor.widgets.add('svgicon', {
                dialog: 'svgicon',
                template: '<svg class="widget-svgicon" aria-hidden="true" viewbox="0 0 64 64"><use xlink:href="#icon-arrow"></use></svg>',
                requiredContent: 'svg(!widget-svgicon,widget-svgicon-*)[aria-*,!viewbox]',
                allowedContent: 'use[xlink:href]',
                upcast: function(element) {
                    return element.name == 'svg' && element.hasClass('widget-svgicon');
                },
                // When a widget is being initialized, we need to read the data
                // from DOM and set it by using the widget.setData() method.
                // More code which needs to be executed when DOM is available may go here.
                init: function() {

                    // btntype
                    if (this.element.hasClass(lang.iconColorWhiteClass))
                        this.setData('btntype', lang.iconColorWhiteClass);
                    if (this.element.hasClass(lang.iconColorPolarClass))
                        this.setData('btntype', lang.iconColorPolarClass);
                    if (this.element.hasClass(lang.iconColorCornflowerClass))
                        this.setData('btntype', lang.iconColorCornflowerClass);
                    if (this.element.hasClass(lang.iconColorNeptuneClass))
                        this.setData('btntype', lang.iconColorNeptuneClass);
                    if (this.element.hasClass(lang.iconColorCobaltClass))
                        this.setData('btntype', lang.iconColorCobaltClass);
                    if (this.element.hasClass(lang.iconColorSeaClass))
                        this.setData('btntype', lang.iconColorSeaClass);
                    if (this.element.hasClass(lang.iconColorUBCClass))
                        this.setData('btntype', lang.iconColorUBCClass);
                    if (this.element.hasClass(lang.iconColorBlackClass))
                        this.setData('btntype', lang.iconColorBlackClass);
                    if (this.element.hasClass(lang.iconColorGreyClass))
                        this.setData('btntype', lang.iconColorGreyClass);

                    // btnsize
                    if (this.element.hasClass(lang.iconSizeXSClass))
                        this.setData('btnsize', lang.iconSizeXSClass);
                    if (this.element.hasClass(lang.iconSizeSMClass))
                        this.setData('btnsize', lang.iconSizeSMClass);
                    if (this.element.hasClass(lang.iconSizeMDClass))
                        this.setData('btnsize', lang.iconSizeMDClass);
                    if (this.element.hasClass(lang.iconSizeLGClass))
                        this.setData('btnsize', lang.iconSizeLGClass);
                    if (this.element.hasClass(lang.iconSizeXLClass))
                        this.setData('btnsize', lang.iconSizeXLClass);

                    // btntext
                    if (this.element.hasClass(lang.iconSizeXSClass))
                        this.setData('btntext', lang.iconSizeXSClass);
                    if (this.element.hasClass(lang.iconSizeSMClass))
                        this.setData('btntext', lang.iconSizeSMClass);
                    if (this.element.hasClass(lang.iconSizeMDClass))
                        this.setData('btntext', lang.iconSizeMDClass);
                    if (this.element.hasClass(lang.iconSizeLGClass))
                        this.setData('btntext', lang.iconSizeLGClass);
                    if (this.element.hasClass(lang.iconSizeXLClass))
                        this.setData('btntext', lang.iconSizeXLClass);

                    // btnicon
                    if (this.element.hasClass(lang.iconZeroClass))
                        this.setData('btnicon', lang.iconZeroClass);
                    if (this.element.hasClass(lang.iconOneClass))
                        this.setData('btnicon', lang.iconOneClass);
                    if (this.element.hasClass(lang.iconTwoClass))
                        this.setData('btnicon', lang.iconTwoClass);
                    if (this.element.hasClass(lang.iconThreeClass))
                        this.setData('btnicon', lang.iconThreeClass);
                    if (this.element.hasClass(lang.iconFourClass))
                        this.setData('btnicon', lang.iconFourClass);
                    if (this.element.hasClass(lang.iconFiveClass))
                        this.setData('btnicon', lang.iconFiveClass);
                    if (this.element.hasClass(lang.iconSixClass))
                        this.setData('btnicon', lang.iconSixClass);
                    if (this.element.hasClass(lang.iconSevenClass))
                        this.setData('btnicon', lang.iconSevenClass);
                    if (this.element.hasClass(lang.iconEightClass))
                        this.setData('btnicon', lang.iconEightClass);
                    if (this.element.hasClass(lang.iconNineClass))
                        this.setData('btnicon', lang.iconNineClass);
                    if (this.element.hasClass(lang.iconTenClass))
                        this.setData('btnicon', lang.iconTenClass);
                    if (this.element.hasClass(lang.iconElevenClass))
                        this.setData('btnicon', lang.iconElevenClass);
                    if (this.element.hasClass(lang.iconTwelveClass))
                        this.setData('btnicon', lang.iconTwelveClass);
                    if (this.element.hasClass(lang.iconThirteenClass))
                        this.setData('btnicon', lang.iconThirteenClass);
                    if (this.element.hasClass(lang.iconFourteenClass))
                        this.setData('btnicon', lang.iconFourteenClass);
                    if (this.element.hasClass(lang.iconFifteenClass))
                        this.setData('btnicon', lang.iconFifteenClass);
                    if (this.element.hasClass(lang.iconSixteenClass))
                        this.setData('btnicon', lang.iconSixteenClass);
                    if (this.element.hasClass(lang.iconSeventeenClass))
                        this.setData('btnicon', lang.iconSeventeenClass);
                    if (this.element.hasClass(lang.iconEighteenClass))
                        this.setData('btnicon', lang.iconEighteenClass);

                },

                data: function() {
                    var $el = jQuery(this.element.$);

                    // btntype
                    if (this.data.btntype) {
                        $el.removeClass(lang.buttonAllClasses).addClass(this.data.btntype);
                    }

                    // btnsize
                    if (this.data.btnsize) {
                        $el.removeClass(lang.buttonAllSizeClasses).addClass(this.data.btnsize);
                    }

                    // btnicon
                    if (this.data.btnicon) {
                        $el.removeClass(lang.iconAllClasses).addClass(this.data.btnicon);
                    }

                    // btniconalign
                    if (this.data.btniconalign) {
                        $el.removeClass(lang.iconAlignClasses).addClass(this.data.btniconalign);
                    }

                    // href
                    if (this.data.btnhref) {
                        this.element.removeAttribute('data-cke-saved-href'); // needed to remove the temp ckeditor href
                        this.element.setAttribute('href', this.data.btnhref);
                    }

                    // target
                    if (this.data.target && this.data.target != '') {
                        this.element.setAttribute('target', this.data.target);
                    }

                    // text
                    if (this.data.btntext) {
                        this.element.setText(this.data.btntext);
                    }
                }
            });
        }
    });
})();
