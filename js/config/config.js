
//const drupalSettings = document.querySelector('[data-drupal-selector="drupal-settings-json"]').innerHTML;
//const jsonSettings = JSON.parse(drupalSettings);
//const text = jsonSettings.ubcCkeditorWidgets.background_colors.white;
//console.log(text);

/**
 * The style options of the various plugins.
 */
export const alignStyles = [
    {'label' : 'Left', 'value' : 'align-left'},
    {'label' : 'Center', 'value' : 'align-center'},
    {'label' : 'Right', 'value' : 'align-right'},
];

export const backgroundStyles = [
    {'label' : 'White', 'value' : 'bg-white'},
    {'label' : 'Light Grey', 'value' : 'bg-grey-100'},
    {'label' : 'Unit Primary', 'value' : 'bg-unit-primary'},
    {'label' : 'Unit Secondary', 'value' : 'bg-unit-secondary'},
    {'label' : 'Unit Tertiary', 'value' : 'bg-unit-tertiary'},
    {'label' : 'Unit Accent', 'value' : 'bg-unit-accent'},
    {'label' : 'UBC Blue', 'value' : 'bg-ubc-blue'},
    {'label' : 'UBC Sea Blue', 'value' : 'bg-ubc-blue-sea'},
    {'label' : 'UBC Cobalt Blue', 'value' : 'bg-ubc-blue-cobalt'},
    {'label' : 'UBC Neptune Blue', 'value' : 'bg-ubc-blue-neptune'},
    {'label' : 'UBC Cornflower Blue', 'value' : 'bg-ubc-blue-cornflower'},
    {'label' : 'UBC Polar Blue', 'value' : 'bg-ubc-blue-polar'},
    {'label' : 'UBC Frost Blue', 'value' : 'bg-ubc-blue-frost'},
];

export const gapStyles = [
    {'label' : 'None', 'value' : 'gap-0'},
    {'label' : 'Small', 'value' : 'gap-4'},
    {'label' : 'Medium', 'value' : 'gap-6'},
    {'label' : 'Large', 'value' : 'gap-8'},
    {'label' : 'XLarge', 'value' : 'gap-12'},
    {'label' : 'XXLarge', 'value' : 'gap-16'},
];

export const layoutStyles = [
    {'label' : 'Text Region Right', 'value' : 'widget-card__normal'},
    {'label' : 'Text Region Left', 'value' : 'widget-card__reverse'},
];

export const marginStyles = [
    {'label' : 'None', 'value' : 'my-0'},
    {'label' : 'Small Vertical', 'value' : 'my-4'},
    {'label' : 'Medium Vertical', 'value' : 'my-6'},
    {'label' : 'Large Vertical', 'value' : 'my-8'},
    {'label' : 'XLarge Vertical', 'value' : 'my-12'},
    {'label' : 'XXLarge Vertical', 'value' : 'my-16'},
];

export const paddingStyles = [
    {'label' : 'None', 'value' : 'p-0'},
    {'label' : 'Small', 'value' : 'p-4'},
    {'label' : 'Medium', 'value' : 'p-6'},
    {'label' : 'Large', 'value' : 'p-8'},
    {'label' : 'XLarge', 'value' : 'p-12'},
    {'label' : 'XXLarge', 'value' : 'p-16'},
];

export const shadowStyles = [
    {'label' : 'None', 'value' : 'drop-shadow-none'},
    {'label' : 'Drop Shadow', 'value' : 'drop-shadow-md'},
];

export const threeColumnLayoutStyles = [
    {'label' : 'Equal Width', 'value' : 'align-equal'},
    {'label' : 'Align Large Left', 'value' : 'align-large-left'},
    {'label' : 'Align Large Center', 'value' : 'align-large-center'},
    {'label' : 'Align Large Right', 'value' : 'align-large-right'},
];

export const twoColumnLayoutStyles = [
    {'label' : 'Equal Width', 'value' : 'align-equal'},
    {'label' : 'Align Large Left', 'value' : 'align-large-left'},
    {'label' : 'Align Large Right', 'value' : 'align-large-right'},
];


/**
 * The default styles of the various plugins.
 */
export const defaultCardHorizontalStyles = {
    'backgroundclass': 'bg-white',
    'layoutclass': 'widget-card--normal',
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
    'layoutclass': 'align-equal',
    'marginclass': 'my-6',
    'gapclass': 'gap-6',
    'keylineclass': 'widget-keyline-none'
};

export const defaultColumnsTwoStyles = {
    'layoutclass': 'align-equal',
    'marginclass': 'my-6',
    'gapclass': 'gap-6',
    'keylineclass': 'widget-keyline-none'
};