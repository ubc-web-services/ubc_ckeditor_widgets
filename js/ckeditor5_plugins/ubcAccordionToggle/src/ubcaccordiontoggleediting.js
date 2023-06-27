import {
  Plugin
} from 'ckeditor5/src/core';
import {
  toWidget,
  toWidgetEditable
} from 'ckeditor5/src/widget';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcAccordionToggleCommand from './ubcaccordiontogglecommand';

// cSpell:ignore ubcaccordiontoggle insertubcaccordiontogglecommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcAccordionToggle as this model:
 * <ubcAccordionToggle>
 * </ubcAccordionToggle>
 *
 * Which is converted for the browser/user as this markup
 * <button class="widget-expandcollapse unit-button text-xs" data-state="0">
 * </button>
 *
 * This file has the logic for defining the ubcAccordionToggle model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcAccordionToggleEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      'ubcAccordionToggle',
      new UbcAccordionToggleCommand(this.editor),
    );
    /*
    this.editor.editing.mapper.on(
      'viewToModelPosition',
      viewToModelPositionOutsideModelElement( this.editor.model, viewElement => viewElement.hasClass( 'placeholder' ) )
    );
    */
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcAccordionToggle>
   * </ubcAccordionToggle>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('ubcAccordionToggle', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowIn: 'paragraph',
      allowWhere: '$block',
      allowAttributes: ['data-state', 'class'],
    });

    schema.addChildCheck((context, childDefinition) => {});
  }

  /**
   * Converters determine how CKEditor 5 models are converted into markup and
   * vice-versa.
   */
  _defineConverters() {
    // Converters are registered via the central editor object.
    const {
      conversion
    } = this.editor;

    // Upcast Converters: determine how existing HTML is interpreted by the
    // editor. These trigger when an editor instance loads.
    //
    // If <button class="widget-expandcollapse unit-button text-xs" data-state="1"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcAccordionToggle> model.
    conversion.for('upcast').elementToElement({
      //model: 'ubcAccordionToggle',
      view: {
        name: 'button',
        classes: ['widget-expandcollapse', 'unit-button', 'text-xs'],
        'data-state': '1',
      },
      model: (viewElement, conversionApi) => {
        const modelWriter = conversionApi.writer;
        const element = modelWriter.createElement('ubcAccordionToggle', {
          'data-state': '0'
        });
        modelWriter.insertText('Open All Accordions', element);
        return element;
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcAccordionToggle> are saved as
    // <button class="widget-expandcollapse unit-button text-xs" data-state="1">{{inner content}}</button>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcAccordionToggle',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const button = viewWriter.createContainerElement('button', {
          class: 'widget-expandcollapse unit-button text-xs',
          'data-state': '1',
        });
        return toWidget(button, viewWriter);
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <ubcAccordionToggle> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcAccordionToggle',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const button = viewWriter.createContainerElement('button', {
          class: 'widget-expandcollapse unit-button text-xs',
          'data-state': '1',
        });
        return toWidget(button, viewWriter, {
          label: 'UBC Accordion Toggle widget',
          hasSelectionHandle: true
        });
      },
    });
  }
}
