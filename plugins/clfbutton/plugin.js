(function($) {
    CKEDITOR.plugins.add('clfbutton', {
        lang: 'en',
        requires: 'widget,dialog',
        icons: 'clfbutton',
        init: function(editor) {
            var lang = editor.lang.clfbutton;

            CKEDITOR.dialog.add('clfbutton', this.path + 'dialogs/clfbutton.js');
            //editor.addContentsCss( this.path + 'fonts/css/unit-fonts.css' );
            // Add widget
            editor.ui.addButton('clfbutton', {
                label: lang.widgetTitle,
                command: 'clfbutton',
                icon: this.path + 'icons/clfbutton.png'
            });

            editor.widgets.add('clfbutton', {
                dialog: 'clfbutton',
                template: '<a class="clf-btn"></a>',
                requiredContent: 'a(clf-btn)',
                allowedContent: 'a(btn,btn-*,unit-*,text-*,fa,fa-*,clf-btn)[href,title,target,alt,mailto,id,rel]',
                upcast: function(element) {
                    return element.name == 'a' && element.hasClass('clf-btn');
                },
                // When a widget is being initialized, we need to read the data
                // from DOM and set it by using the widget.setData() method.
                // More code which needs to be executed when DOM is available may go here.
                init: function() {

                    // btntype
                    if (this.element.hasClass(lang.buttonLinkClass))
                        this.setData('btntype', lang.buttonLinkClass);
                    if (this.element.hasClass(lang.buttonDefaultClass))
                        this.setData('btntype', lang.buttonDefaultClass);
                    if (this.element.hasClass(lang.buttonPrimaryClass))
                        this.setData('btntype', lang.buttonPrimaryClass);
                    if (this.element.hasClass(lang.buttonSuccessClass))
                        this.setData('btntype', lang.buttonSuccessClass);
                    if (this.element.hasClass(lang.buttonInfoClass))
                        this.setData('btntype', lang.buttonInfoClass);
                    if (this.element.hasClass(lang.buttonWarningClass))
                        this.setData('btntype', lang.buttonWarningClass);
                    if (this.element.hasClass(lang.buttonDangerClass))
                        this.setData('btntype', lang.buttonDangerClass);
                    if (this.element.hasClass(lang.buttonUnitPrimaryClass))
                        this.setData('btntype', lang.buttonUnitPrimaryClass);
                    if (this.element.hasClass(lang.buttonUnitReverseClass))
                        this.setData('btntype', lang.buttonUnitReverseClass);
                    //if (this.element.hasClass(lang.buttonUnitAltClass))
                    //this.setData('btntype', lang.buttonUnitAltClass);
                    if (this.element.hasClass(lang.buttonUnitSecondary))
                        this.setData('btntype', lang.buttonUnitSecondaryClass);
                    if (this.element.hasClass(lang.buttonUnitSecondaryReverse))
                        this.setData('btntype', lang.buttonUnitSecondaryReverseClass);
                    if (this.element.hasClass(lang.buttonUnitSecondaryAlt))
                        this.setData('btntype', lang.buttonUnitSecondaryAltClass);
                    if (this.element.hasClass(lang.buttonUnitPlainClass))
                        this.setData('btntype', lang.buttonUnitPlainClass);

                    // btnsize
                    if (this.element.hasClass(lang.buttonSizeExSmallClass))
                        this.setData('btnsize', lang.buttonSizeExSmallClass);
                    if (this.element.hasClass(lang.buttonSizeSmallClass))
                        this.setData('btnsize', lang.buttonSizeSmallClass);
                    if (this.element.hasClass(lang.buttonSizeNormalClass))
                        this.setData('btnsize', lang.buttonSizeNormalClass);
                    if (this.element.hasClass(lang.buttonSizeLargeClass))
                        this.setData('btnsize', lang.buttonSizeLargeClass);

                    // btnwidth
                    if (this.element.hasClass(lang.buttonWidthInlineClass))
                        this.setData('btnwidth', lang.buttonWidthInlineClass);
                    if (this.element.hasClass(lang.buttonWidthBlockClass))
                        this.setData('btnwidth', lang.buttonWidthBlockClass);

                    // btntextalign
                    if (this.element.hasClass(lang.buttonTextAlignLeftCLass))
                        this.setData('btntextalign', lang.buttonTextAlignLeftCLass);
                    if (this.element.hasClass(lang.buttonTextAlignCenterClass))
                        this.setData('btntextalign', lang.buttonTextAlignCenterClass);
                    if (this.element.hasClass(lang.buttonTextAlignRightClass))
                        this.setData('btntextalign', lang.buttonTextAlignRightClass);

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
                    if (this.element.hasClass(lang.iconNineteenClass))
                        this.setData('btnicon', lang.iconNineteenClass);
                    if (this.element.hasClass(lang.iconTwentyClass))
                        this.setData('btnicon', lang.iconTwentyClass);
                    if (this.element.hasClass(lang.iconTwentyOneClass))
                        this.setData('btnicon', lang.iconTwentyOneClass);
                    if (this.element.hasClass(lang.iconTwentyTwoClass))
                        this.setData('btnicon', lang.iconTwentyTwoClass);
                    if (this.element.hasClass(lang.iconTwentyThreeClass))
                        this.setData('btnicon', lang.iconTwentyThreeClass);
                    if (this.element.hasClass(lang.iconTwentyFourClass))
                        this.setData('btnicon', lang.iconTwentyFourClass);
                    if (this.element.hasClass(lang.iconTwentyFiveClass))
                        this.setData('btnicon', lang.iconTwentyFiveClass);
                    if (this.element.hasClass(lang.iconTwentySixClass))
                        this.setData('btnicon', lang.iconTwentySixClass);
                    if (this.element.hasClass(lang.iconTwentySevenClass))
                        this.setData('btnicon', lang.iconTwentySevenClass);
                    if (this.element.hasClass(lang.iconTwentyEightClass))
                        this.setData('btnicon', lang.iconTwentyEightClass);
                    if (this.element.hasClass(lang.iconTwentyNineClass))
                        this.setData('btnicon', lang.iconTwentyNineClass);
                    if (this.element.hasClass(lang.iconThirtyClass))
                        this.setData('btnicon', lang.iconThirtyClass);
                    if (this.element.hasClass(lang.iconThirtyOneClass))
                        this.setData('btnicon', lang.iconThirtyOneClass);
                    if (this.element.hasClass(lang.iconThirtyTwoClass))
                        this.setData('btnicon', lang.iconThirtyTwoClass);

                    // btniconalign 
                    if (this.element.hasClass(lang.iconNoneClass))
                        this.setData('btniconalign', lang.iconNoneClass);
                    if (this.element.hasClass(lang.iconRightClass))
                        this.setData('btniconalign', lang.iconRightClass);
                    if (this.element.hasClass(lang.iconLeftClass))
                        this.setData('btniconalign', lang.iconLeftClass);

                    // btnhref
                    var btnhref = this.element.getAttribute('href');
                    if (btnhref)
                        this.setData('btnhref', btnhref);

                    // btntarget
                    var btntarget = this.element.getAttribute('target');
                    if (btntarget)
                        this.setData('target', btntarget);

                    // btntext
                    var btntext = this.element.getText();
                    if (btntext)
                        this.setData('btntext', btntext);

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

                    // btnwidth
                    if (this.data.btnwidth) {
                        $el.removeClass(lang.buttonAllWidthClasses).addClass(this.data.btnwidth);
                    }

                    // btntextalign
                    if (this.data.btntextalign) {
                        $el.removeClass(lang.buttonAllTextAlignClasses).addClass(this.data.btntextalign);
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