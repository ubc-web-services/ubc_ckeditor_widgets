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
import UbcColumnsFourCommand from './ubccolumnsfourcommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcColumnsFour as this model:
 * <ubcColumnsFour>
 *    <ubcColumnsFourColumn></ubcColumnsFourColumn>
 *    <ubcColumnsFourSecond></ubcColumnsFourSecond>
 *    <ubcColumnsFourThird></ubcColumnsFourThird>
 *    <ubcColumnsFourFourth></ubcColumnsFourFourth>
 * </ubcColumnsFour>
 *
 * Which is converted for the browser/user as this markup
 *<div class="widget-column-options widget-columns-4 align-equal">
 *  <div class="widget--md--grid">
 *    <div class="first-child--mt-0">
 *      <p></p>
 *    </div>
 *    <div class="widget-region-two first-child--mt-0">
 *      <p></p>
 *    </div>
 *    <div class="widget-region-three first-child--mt-0">
 *      <p></p>
 *    </div>
 *    <div class="widget-region-four first-child--mt-0">
 *      <p></p>
 *    </div>
 *  </div>
 * </div>
 *
 * This file has the logic for defining the ubcColumnsFour model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcColumnsFourEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  constructor(editor) {
    super(editor);
  }

  init() {
    const editor = this.editor;
    editor.conversion.attributeToAttribute({
      model: 'class',
      view: 'class'
    });
    this._defineSchema();
    this._defineConverters();
    editor.commands.add(
      'ubcColumnsFour',
      new UbcColumnsFourCommand(editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcColumnsFour>
   *  <ubcColumnsFourWrapper>
   *    <ubcColumnsFourColumn></ubcColumnsFourColumn>
   *    <ubcColumnsFourColumn></ubcColumnsFourColumn>
   *    <ubcColumnsFourColumn></ubcColumnsFourColumn>
   *    <ubcColumnsFourColumn></ubcColumnsFourColumn>
   *  </ubcColumnsFourWrapper>
   * </ubcColumnsFour>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('ubcColumnsFour', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      //allowAttributes: 'class',
      allowChildren: ['ubcColumnsFourWrapper'],
    });

    schema.register('ubcColumnsFourWrapper', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ubcColumnsFour.
      allowIn: 'ubcColumnsFour',
      allowChildren: ['ubcColumnsFourColumn'],
    });

    schema.register('ubcColumnsFourColumn', {
      isLimit: true,
      allowIn: 'ubcColumnsFour',
      // Allow text only (e.g. text with attributes).
      allowContentOf: '$root',
      allowAttributes: 'class',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow ubcColumnsFour inside ubcColumnsFourSecond.
      // Disabled for ubcColumnsFour
      /*
      if (
        context.endsWith('ubcColumnsFourSecond') &&
        childDefinition.name === 'ubcColumnsFour'
      ) {
        return false;
      }
      */
    });
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
    // If <div class="widget-columns-4"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcColumnsFour> model.
    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsFour',
      view: {
        name: 'div',
        classes: ['widget-columns-4'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsFourWrapper',
      view: {
        name: 'div',
        //classes: 'widget--md--grid',
      },
    });

    // If <div class="first-child--mt-0"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcColumnsFourColumn> model, provided it is a child element of <ubcColumnsFour>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcColumnsFourColumn', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['first-child--mt-0'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcColumnsFour> are saved as
    // <div class="widget-column-options widget-columns-4 align-equal">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsFour',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-column-options widget-columns-4 align-equal',
          },
        );
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsFourWrapper',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget--md--grid',
          },
        );
      },
    });

    // Instances of <ubcColumnsFourColumn> are saved as
    // <div class="first-child--mt-0">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsFourColumn',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'first-child--mt-0',
          },
        );
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <ubcColumnsFour> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsFour',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-column-options widget-columns-4 align-equal',
        });
        return toWidget(div, viewWriter, {
          label: 'UBC Four Columns widget',
          hasSelectionHandle: true
        });
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsFourWrapper',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'widget--md--grid',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcColumnsFourColumn> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsFourColumn',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'first-child--mt-0',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}
