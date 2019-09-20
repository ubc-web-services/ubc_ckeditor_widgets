/*
Definition file
----------------------
all text and classes used in the widget, including labels and classes, are defined here for easier updates and control
*/

"use strict"

CKEDITOR.plugins.setLang('svgicon', 'en', {

    // main title
    widgetTitle: 'Insert an icon.',

    // tab titles
    tabInfo: 'Info',
    tabIcons: 'Icons',

    // button styles
    iconColorLabel: '<strong>Icon Color</strong>',
    iconStyleDefault: 'text-black',
    iconColorWhite: 'White',
    iconColorWhiteClass: 'text-white',
    iconColorPolar: 'UBC Polar',
    iconColorPolarClass: 'text-ubc-blue-polar',
    iconColorCornflower: 'UBC Cornflower',
    iconColorCornflowerClass: 'text-ubc-blue-cornflower',
    iconColorNeptune: 'UBC Neptune',
    iconColorNeptuneClass: 'text-ubc-blue-neptune',
    iconColorCobalt: 'UBC Cobalt',
    iconColorCobaltClass: 'text-ubc-blue-cobalt',
    iconColorSea: 'UBC Sea',
    iconColorSeaClass: 'text-ubc-blue-sea',
    iconColorUBC: 'UBC Blue',
    iconColorUBCClass: 'text-ubc-blue',
    iconColorBlack: 'Black',
    iconColorBlackClass: 'text-black',
    iconColorGrey: 'Grey',
    iconColorGreyClass: 'text-grey-300',
    buttonAllClasses: 'text-white text-ubc-blue-polar text-ubc-blue-cornflower text-ubc-blue-neptune text-ubc-blue-cobalt text-ubc-blue-sea text-ubc-blue text-black text-grey-300', // aggregate all so we can check for them in plugin.js file

    // icon sizes
    iconSizeLabel: '<strong>Icon Size</strong>',
    iconSizeXS: 'Extra Small',
    iconSizeXSClass: 'widget-svgicon--xs',
    iconSizeSM: 'Small',
    iconSizeSMClass: 'widget-svgicon--sm',
    iconSizeMD: 'Medium',
    iconSizeMDClass: 'widget-svgicon--md',
    iconSizeLG: 'Large',
    iconSizeLGClass: 'widget-svgicon--lg',
    iconSizeXL: 'Extra Large',
    iconSizeXLClass: 'widget-svgicon--xl',
    iconAllSizeClasses: 'widget-svgicon--xs widget-svgicon--sm widget-svgicon--md widget-svgicon--lg widget-svgicon--xl', // aggregate all so we can check for them in plugin.js file


    // icon width
    iconWidthLabel: '<strong>Icon Stroke Width</strong>',
    iconWidthXS: 'Hairline',
    iconWidthXSClass: 'widget-svgicon--xs',
    iconWidthSM: 'Thin',
    iconWidthSMClass: 'widget-svgicon--sm',
    iconWidthMD: 'Medium',
    iconWidthMDClass: 'widget-svgicon--md',
    iconWidthLG: 'Heavy',
    iconWidthLGClass: 'widget-svgicon--lg',
    iconWidthXL: 'Extra Heavy',
    iconWidthXLClass: 'widget-svgicon--xl',
    iconAllWidthClasses: 'widget-svgicon--xs widget-svgicon--sm widget-svgicon--md widget-svgicon--lg widget-svgicon--xl', // aggregate all so we can check for them in plugin.js file


    // button icons
    iconIconLabel: 'Add an icon',
    iconIconHeader: '<strong>Add an SVG Icon</strong><p>Select from the icons below.<br />Note that they must be enabled with the theme options to work correctly.</p>',
    iconZero: '<svg id="icon-cart" viewBox="0 0 64 64" aria-labelledby="title-icon-cart" aria-describedby="description-icon-cart" role="img" style="width:2rem;height:2rem;display:inline-block;"><title id="title-icon-cart">E-commerce Cart</title><desc id="description-icon-cart">A shopping cart.</desc><path stroke="currentColor" stroke-miterlimit="10" d="M62 22H16M2 6h10l10 40h32" stroke-linejoin="round" stroke-linecap="round" fill="none"></path><circle cx="24" cy="54" r="4" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" fill="none"></circle><circle cx="50" cy="54" r="4" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" fill="none"></circle><path stroke="currentColor" stroke-miterlimit="10" d="M59 30H26m30 8H28" stroke-linejoin="round" stroke-linecap="round" fill="none"></path></svg> Cart icon.',
    iconZeroClass: 'icon-cart',
    iconOne: '<svg id="icon-clock" viewBox="0 0 64 64" aria-labelledby="title-icon-clock" aria-describedby="description-icon-clock" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-clock">Time</title><desc id="description-icon-clock">A clock.</desc><circle cx="32" cy="32" r="30" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></circle><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M32 10v23l13 7" stroke-linejoin="round"></path></svg> Clock icon.',
    iconOneClass: 'icon-clock',
    iconTwo: '<svg id="icon-discussion" viewBox="0 0 64 64" aria-labelledby="title-icon-discussion" aria-describedby="description-icon-discussion" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-discussion">Chats</title><desc id="description-icon-discussion">Two speech clouds.</desc><path d="M49.6 28.5C56.8 30.1 62 35.4 62 41.6a12.4 12.4 0 0 1-5.1 9.7L60 59l-10.3-4.3a21 21 0 0 1-4.7.5c-8.2 0-15.1-4.7-16.7-10.9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 50l15.4-6.3a29.6 29.6 0 0 0 6.6.7c13.3 0 24-8.6 24-19.2S39.3 6 26 6 2 14.6 2 25.2C2 30.6 4.8 35.5 9.3 39z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> Discussion icon.',
    iconTwoClass: 'icon-discussion',
    iconThree: '<svg id="icon-facebook" viewBox="0 0 64 64" aria-labelledby="title-icon-facebook" aria-describedby="description-icon-facebook" role="img"  style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-facebook">Facebook</title><desc id="description-icon-facebook">The logo for the Facebook social media service.</desc><path d="M39.312 13.437H47V2h-9.094C26.938 2.469 24.688 8.656 24.5 15.125v5.719H17V32h7.5v30h11.25V32h9.281l1.781-11.156H35.75v-3.469a3.714 3.714 0 0 1 3.562-3.938z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path></svg> Facebook icon.',
    iconThreeClass: 'icon-facebook',
    iconFour: '<svg id="icon-home" viewBox="0 0 64 64" aria-labelledby="title-icon-home" aria-describedby="title-icon-home" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-home">Home</title><desc id="description-icon-home">A house in silhouette.</desc><path d="M54 26.267l7.555 7.3a.25.25 0 0 1-.174.43H54V62H40V44H24v18H10V34H2.618a.25.25 0 0 1-.174-.43L32 5l13 12.567V12h9z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path></svg> Home icon.',
    iconFourClass: 'icon-home',
    iconFive: '<svg id="icon-instagram" viewBox="0 0 64 64" aria-labelledby="title-icon-instagram" aria-describedby="description-icon-instagram" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-instagram">Instagram</title><desc id="description-icon-instagram">The logo for the Instagram social media service.</desc><path d="M44.122 2H19.87A17.875 17.875 0 0 0 2 19.835v24.2a17.875 17.875 0 0 0 17.87 17.834h24.252A17.875 17.875 0 0 0 62 44.034v-24.2A17.875 17.875 0 0 0 44.122 2zM55.96 44.034a11.825 11.825 0 0 1-11.838 11.812H19.87A11.825 11.825 0 0 1 8.032 44.034v-24.2A11.825 11.825 0 0 1 19.87 8.022h24.252A11.825 11.825 0 0 1 55.96 19.835zm0 0" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M32 16.45a15.484 15.484 0 1 0 15.514 15.484A15.519 15.519 0 0 0 32 16.45zm0 24.95a9.461 9.461 0 1 1 9.482-9.461A9.472 9.472 0 0 1 32 41.4zm19.263-24.834a3.719 3.719 0 1 1-3.719-3.711 3.714 3.714 0 0 1 3.719 3.711zm0 0" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path></svg> Instagram icon.',
    iconFiveClass: 'icon-instagram',
    iconSix: '<svg id="icon-linkedin" viewBox="0 0 64 64" aria-labelledby="title-icon-linkedin" aria-describedby="description-icon-linkedin" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-linkedin">Linkedin</title><desc id="description-icon-linkedin">The logo for the LinkedIn social media service.</desc><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M3.078 22.331h12.188v36.844H3.078z" stroke-linejoin="round"></path><path d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path></svg> Linkedin icon.',
    iconSixClass: 'icon-linkedin',
    iconSeven: '<svg id="icon-location" viewBox="0 0 64 64" aria-labelledby="title-icon-location" aria-describedby="description-icon-location" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-location">Location Pin</title><desc id="description-icon-location">A map location pin.</desc><path stroke-miterlimit="10" stroke="currentColor" d="M32 62c0-17.1 16.3-25.2 17.8-39.7A18 18 0 1 0 14 20a18.1 18.1 0 0 0 .2 2.2C15.7 36.8 32 44.9 32 62z" stroke-linejoin="round" stroke-linecap="round"></path><circle stroke-miterlimit="10" stroke="currentColor" r="6" cy="20" cx="32" stroke-linejoin="round" stroke-linecap="round"></circle></svg> Location icon.',
    iconSevenClass: 'icon-location',
    iconEight: '<svg id="icon-mail" viewBox="0 0 64 64" aria-labelledby="title-icon-mail" aria-describedby="description-icon-mail" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-mail">Mail</title><desc id="description-icon-mail">An envelope.</desc><path stroke="currentColor" stroke-miterlimit="10" d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4" stroke-linejoin="round" stroke-linecap="round"></path><path stroke="currentColor" stroke-miterlimit="10" d="M2 12h60v40H2z" stroke-linejoin="round" stroke-linecap="round"></path></svg> Mail icon.',
    iconEightClass: 'icon-mail',
    iconNine: '<svg id="icon-pencil" viewBox="0 0 64 64" aria-labelledby="title-icon-pencil" aria-describedby="description-icon-pencil" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-pencil">Pencil</title><desc id="description-icon-pencil">A pencil indicating that this is editable.</desc><path stroke-miterlimit="10" stroke="currentColor" d="M55.737 16.309l3.674-3.67a5.675 5.675 0 1 0-8.025-8.025l-3.674 3.669" stroke-linejoin="round" stroke-linecap="round"></path><path d="M17.337 54.667l38.4-38.358-8.025-8.026L9.307 46.642 2.926 61.049l14.411-6.382zm-8.03-8.025l8.03 8.025" stroke-miterlimit="10" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"></path></svg> Pencil icon.',
    iconNineClass: 'icon-pencil',
    iconTen: '<svg id="icon-phone" viewBox="0 0 64 64" aria-labelledby="title-icon-phone" aria-describedby="description-icon-phone" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-phone">Telephone</title><desc id="description-icon-phone">An antique telephone.</desc><path d="M58.9 47l-10.4-6.8a4.8 4.8 0 0 0-6.5 1.3c-2.4 2.9-5.3 7.7-16.2-3.2S19.6 24.4 22.5 22a4.8 4.8 0 0 0 1.3-6.5L17 5.1c-.9-1.3-2.1-3.4-4.9-3S2 6.6 2 15.6s7.1 20 16.8 29.7S39.5 62 48.4 62s13.2-8 13.5-10-1.7-4.1-3-5z" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"></path></svg> Phone icon.',
    iconTenClass: 'icon-phone',
    iconEleven: '<svg id="icon-play" viewBox="0 0 64 64" aria-labelledby="title-icon-play" aria-describedby="description-icon-play" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-play">Play</title><desc id="description-icon-play">A media play button.</desc><path stroke="currentColor" stroke-miterlimit="10" d="M24 18l24 14-24 14V18z" stroke-linejoin="round" stroke-linecap="round"></path><circle cx="32" cy="32" r="30" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"></circle></svg> Play icon.',
    iconElevenClass: 'icon-play',
    iconTwelve: '<svg id="icon-settings" viewBox="0 0 64 64" aria-labelledby="title-icon-settings" aria-describedby="description-icon-settings" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-settings">Settings</title><desc id="description-icon-settings">A single gear.</desc><circle cx="32" cy="32" r="10" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></circle><path d="M61 27h-6.551a22.857 22.857 0 0 0-3.041-7.336l4.634-4.634a1 1 0 0 0 0-1.414l-5.657-5.658a1 1 0 0 0-1.414 0l-4.634 4.634A22.857 22.857 0 0 0 37 9.552V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v6.552a22.857 22.857 0 0 0-7.336 3.041l-4.635-4.635a1 1 0 0 0-1.414 0l-5.657 5.657a1 1 0 0 0 0 1.414l4.634 4.634A22.857 22.857 0 0 0 9.552 27H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6.552a22.856 22.856 0 0 0 3.041 7.336l-4.635 4.635a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0l4.634-4.634A22.86 22.86 0 0 0 27 54.449V61a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6.551a22.86 22.86 0 0 0 7.336-3.041l4.634 4.634a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414l-4.634-4.634A22.856 22.856 0 0 0 54.449 37H61a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path></svg> Settings icon.',
    iconTwelveClass: 'icon-settings',
    iconThirteen: '<svg id="icon-speech" viewBox="0 0 64 64" aria-labelledby="title-icon-speech" aria-describedby="description-icon-speech" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-speech">Speech Bubble</title><desc id="description-icon-speech">A speech bubble.</desc><path d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 1 0 0-40z" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"></path></svg> Speech icon.',
    iconThirteenClass: 'icon-speech',
    iconFourteen: '<svg id="icon-star" viewBox="0 0 64 64" aria-labelledby="title-icon-star" aria-describedby="description-icon-star" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-star">Star</title><desc id="description-icon-star">An outline of a star.</desc><path stroke="currentColor" stroke-miterlimit="10" d="M32 47.2L13.5 61l7.1-22.2L2 25h23l7-22 7 22h23L43.4 38.8 50.5 61 32 47.2z" stroke-linejoin="round" stroke-linecap="round"></path></svg> Star icon.',
    iconFourteenClass: 'icon-star',
    iconFifteen: '<svg id="icon-twitter" viewBox="0 0 64 64" aria-labelledby="title-icon-twitter" aria-describedby="description-icon-twitter" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-twitter">Twitter</title><desc id="description-icon-twitter">The logo for the Twitter social media service.</desc><path d="M60.448 15.109a24.276 24.276 0 0 1-3.288.968.5.5 0 0 1-.451-.853 15.146 15.146 0 0 0 3.119-4.263.5.5 0 0 0-.677-.662 18.6 18.6 0 0 1-6.527 2.071 12.92 12.92 0 0 0-9-3.75A12.363 12.363 0 0 0 31.25 20.994a12.727 12.727 0 0 0 .281 2.719c-9.048-.274-19.61-4.647-25.781-12.249a.5.5 0 0 0-.83.073 12.475 12.475 0 0 0 2.956 14.79.5.5 0 0 1-.344.887 7.749 7.749 0 0 1-3.1-.8.5.5 0 0 0-.725.477 11.653 11.653 0 0 0 7.979 10.567.5.5 0 0 1-.09.964 12.567 12.567 0 0 1-2.834 0 .506.506 0 0 0-.536.635c.849 3.282 5.092 7.125 9.839 7.652a.5.5 0 0 1 .267.87 20.943 20.943 0 0 1-14 4.577.5.5 0 0 0-.255.942 37.29 37.29 0 0 0 17.33 4.266 34.5 34.5 0 0 0 34.687-36.182v-.469a21.11 21.11 0 0 0 4.934-4.839.5.5 0 0 0-.58-.765z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path></svg> Twitter icon.',
    iconFifteenClass: 'icon-twitter',
    iconSixteen: '<svg id="icon-user" viewBox="0 0 64 64" aria-labelledby="title-icon-user" aria-describedby="description-icon-user" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-user">User</title><desc id="description-icon-user">A silhouette of a person.</desc><path d="M46 26c0 6.1-3.4 11.5-7 14.8V44c0 2 1 5.1 11 7a15.5 15.5 0 0 1 12 11H2a13.4 13.4 0 0 1 11-11c10-1.8 12-5 12-7v-3.2c-3.6-3.3-7-8.6-7-14.8v-9.6C18 6 25.4 2 32 2s14 4 14 14.4z" stroke="currentColor" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round"></path></svg> User icon.',
    iconSixteenClass: 'icon-user',
    iconSeventeen: '<svg id="icon-vimeo" viewBox="0 0 64 64" aria-labelledby="title-icon-vimeo" aria-describedby="description-icon-vimeo" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-vimeo">Vimeo</title><desc id="description-icon-vimeo">The logo for the Vimeo video sharing service.</desc><path d="M52.531 6.744c-7.594 0-13.594 4.969-16.219 14.25 2.813-1.312 7.875-2.063 8.344 2.625.375 4.688-6.656 16.687-9.75 16.687s-5.344-13.594-6.188-19.781C27.969 14.244 26.469 7.4 20.656 7.4 14.75 7.4 7.25 16.588 2 20.713l2.719 3.75s3.937-3.094 5.25-2.812c3.563.938 6.563 15.375 8.156 20.906s3.469 16.688 11.156 16.688C41.563 59.244 62 28.682 62 18.651c0-6.563-1.875-11.907-9.469-11.907z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path></svg> Vimeo icon.',
    iconSeventeenClass: 'icon-vimeo',
    iconEighteen: '<svg id="icon-youtube" viewBox="0 0 64 64" aria-labelledby="title-icon-youtube" aria-describedby="description-icon-youtube" role="img" style="width:2rem;height:2rem;display:inline-block;fill:none;"><title id="title-icon-youtube">Youtube</title><desc id="description-icon-youtube">The logo for the YouTube video sharing service.</desc><path d="M49.539 12H14.461A12.4 12.4 0 0 0 2 24.327v17.346A12.4 12.4 0 0 0 14.461 54h35.078A12.4 12.4 0 0 0 62 41.673V24.327A12.4 12.4 0 0 0 49.539 12z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M41.111 33.844L24.7 41.585a.658.658 0 0 1-.938-.585V25.031a.659.659 0 0 1 .956-.581l16.407 8.225a.649.649 0 0 1-.014 1.169z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"></path></svg> Youtube icon.',
    iconEighteenClass: 'icon-youtube',
    iconAllClasses: 'icon-cart icon-clock icon-discussion icon-facebook icon-home icon-instagram icon-linkedin icon-location icon-mail icon-pencil icon-phone icon-play icon-settings icon-speech icon-star icon-twitter icon-user icon-vimeo icon-youtube', // aggregate all so we can check for them in plugin.js file

});
