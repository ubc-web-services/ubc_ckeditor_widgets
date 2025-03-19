
const drupalSettings = document.querySelector('[data-drupal-selector="drupal-settings-json"]').innerHTML;
const jsonSettings = JSON.parse(drupalSettings);
//const text = jsonSettings.ubcCkeditorWidgets.background_colors.white;
//console.log(text);

/**
 * The style options of the various plugins.
 */

// styles from config
export const backgroundStyles = jsonSettings.ubcCkeditorWidgets.backgroundColors;
export const gapStyles = jsonSettings.ubcCkeditorWidgets.gapStyles;
export const marginStyles = jsonSettings.ubcCkeditorWidgets.marginStyles;
export const paddingStyles = jsonSettings.ubcCkeditorWidgets.paddingStyles;
export const tableStyles = jsonSettings.ubcCkeditorWidgets.tableStyles;
export const threeColumnLayoutStyles = jsonSettings.ubcCkeditorWidgets.threeColumnLayoutStyles;
export const twoColumnLayoutStyles = jsonSettings.ubcCkeditorWidgets.twoColumnLayoutStyles;
export const widthStyles = jsonSettings.ubcCkeditorWidgets.widthStyles;

// assigned styles
export const alignStyles = [
    {'label' : 'Full', 'value' : 'align-full'},
    {'label' : 'Left', 'value' : 'align-left'},
    {'label' : 'Center', 'value' : 'align-center'},
    {'label' : 'Right', 'value' : 'align-right'},
];

export const layoutStyles = [
    {'label' : 'Text Region Right', 'value' : 'widget-card__normal'},
    {'label' : 'Text Region Left', 'value' : 'widget-card__reverse'},
];

export const shadowStyles = [
    {'label' : 'None', 'value' : 'drop-shadow-none'},
    {'label' : 'Drop Shadow', 'value' : 'drop-shadow-md'},
];

/**
 * The default styles of the various plugins.
 */
export const defaultCardHorizontalStyles = {
    'backgroundclass': 'bg-white',
    'layoutclass': 'widget-card__normal',
    'marginclass': 'my-6',
    'shadowclass': 'drop-shadow-none'
};

export const defaultCardVerticalOneStyles = {
    'backgroundclass': 'bg-white',
    'marginclass': 'my-6',
    'shadowclass': 'drop-shadow-none'
};

export const defaultCardVerticalTwoStyles = {
    'backgroundclass': 'bg-white',
    'gapclass': 'gap-6',
    'marginclass': 'my-6',
    'shadowclass': 'drop-shadow-none'
};

export const defaultCardVerticalThreeStyles = {
    'backgroundclass': 'bg-white',
    'gapclass': 'gap-6',
    'marginclass': 'my-6',
    'shadowclass': 'drop-shadow-none'
};

export const defaultColorBoxStyles = {
    'alignclass': 'align-center',
    'backgroundclass': 'bg-white',
    'marginclass': 'my-6',
    'paddingclass': 'p-6',
    'shadowclass': 'drop-shadow-none'
};

export const defaultColumnsFourStyles = {
    'marginclass': 'my-6',
    'gapclass': 'gap-6',
    'keylineclass': 'widget-keyline-none'
};

export const defaultColumnsThreeStyles = {
    'layoutcol3class': 'align-equal',
    'marginclass': 'my-6',
    'gapclass': 'gap-6',
    'keylineclass': 'widget-keyline-none'
};

export const defaultColumnsTwoStyles = {
    'layoutcolclass': 'align-equal',
    'marginclass': 'my-6',
    'keylineclass': 'widget-keyline-none'
};

export const defaultColumnsGapStyle = {
    'gapclass': 'gap-6'
};

export const defaultColumnsExtraStyles = {
    'paddingclass': 'p-0',
    'backgroundclass': 'bg-transparent',
    'shadowclass': 'drop-shadow-none'
};
