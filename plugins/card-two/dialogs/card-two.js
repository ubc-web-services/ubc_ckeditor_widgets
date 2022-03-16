CKEDITOR.dialog.add('card-two', function (editor) {
  return {
    title: 'Two Cards',
    minWidth: 300,
    minHeight: 100,
    contents: [{
      id: 'info',
      elements: [
      {
        type: 'html',
        html: '<style>.cke_dialog_ui_input_select{ width: 100%; }</style>'
      },
        {
          id: 'background',
          type: 'select',
          label: 'Background Color',
          items: [
            ['Default', ''],
            ['White', 'bg-white'],
            ['Light Grey', 'bg-grey-100'],
            ['Unit Primary Color', 'bg-unit-primary'],
            ['Unit Secondary Color', 'bg-unit-secondary'],
            ['Unit Tertiary Color', 'bg-unit-tertiary'],
            ['Unit Accent Color', 'bg-unit-accent'],
            ['UBC Blue', 'bg-ubc-blue'],
            ['UBC Blue: Sea', 'bg-ubc-blue-sea'],
            ['UBC Blue: Cobalt', 'bg-ubc-blue-cobalt'],
            ['UBC Blue: Neptune', 'bg-ubc-blue-neptune'],
            ['UBC Blue: Cornflower', 'bg-ubc-blue-cornflower'],
            ['UBC Blue: Polar', 'bg-ubc-blue-polar'],
            ['UBC Blue: Frost', 'bg-ubc-blue-frost']
          ],
          setup: function (widget) {
            this.setValue(widget.data.background);
          },
          commit: function (widget) {
            widget.setData('background', this.getValue());
          }
        }
      ]
    }]
  };
});
