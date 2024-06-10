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
import UbcColumnsTwoCommand from './ubccolumnstwocommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcColumnsTwo as this model:
 * <ubcColumnsTwo>
 *    <ubcColumnsTwoColumn></ubcColumnsTwoColumn>
 *    <ubcColumnsTwoColumn></ubcColumnsTwoColumn>
 * </ubcColumnsTwo>
 *
 * Which is converted for the browser/user as this markup
 *<div class="widget-column-options widget-columns-2 align-equal">
 *  <div class="widget--md--grid">
 *    <div class="first-child--mt-0">
 *      <p></p>
 *    </div>
 *    <div class="widget-region-two first-child--mt-0">
 *      <p></p>
 *    </div>
 *  </div>
 * </div>
 *
 *
 * This file has the logic for defining the ubcColumnsTwo model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcColumnsTwoEditing extends Plugin {

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
      'ubcColumnsTwo',
      new UbcColumnsTwoCommand(editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcColumnsTwo>
   *  <ubcColumnsTwoWrapper>
   *    <ubcColumnsTwoColumn></ubcColumnsTwoColumn>
   *    <ubcColumnsTwoSecond></ubcColumnsTwoSecond>
   *  <ubcColumnsTwoWrapper>
   * </ubcColumnsTwo>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('ubcColumnsTwo', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      //allowAttributes: 'class',
      allowChildren: ['ubcColumnsTwoWrapper'],
    });

    schema.register('ubcColumnsTwoWrapper', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ubcColumnsTwo.
      allowIn: 'ubcColumnsTwo',
      allowChildren: ['ubcColumnsTwoColumn'],
    });

    schema.register('ubcColumnsTwoColumn', {
      isLimit: true,
      allowIn: 'ubcColumnsTwo',
      allowAttributes: 'class',
      allowContentOf: '$root',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow ubcColumnsTwo inside ubcColumnsTwoSecond.
      // Disabled for ubcColumnsTwo
      /*
      if (
        context.endsWith('ubcColumnsTwoSecond') &&
        childDefinition.name === 'ubcColumnsTwo'
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
    // If <div class="widget-column-options widget-columns-2"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcColumnsTwo> model.
    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsTwo',
      view: {
        name: 'div',
        classes: ['widget-columns-2'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsTwoWrapper',
      view: {
        name: 'div',
        classes: 'widget--md--grid',
      },
    });

    // If <div class="first-child--mt-0"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcColumnsTwoColumn> model, provided it is a child element of <ubcColumnsTwo>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsTwoColumn',
      view: {
        name: 'div',
        classes: ['first-child--mt-0'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcColumnsTwo> are saved as
    // <div class="widget-column-options widget-columns-2">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsTwo',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-column-options widget-columns-2',
          },
        );
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsTwoWrapper',
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

    // Instances of <ubcColumnsTwoColumn> are saved as
    // <div class="first-child--mt-0">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsTwoColumn',
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
    // Convert the <ubcColumnsTwo> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsTwo',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-column-options widget-columns-2',
        });
        return toWidget(div, viewWriter, {
          label: 'UBC Two Columns widget',
          hasSelectionHandle: true
        });
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsTwoWrapper',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'widget--md--grid',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcColumnsTwoColumn> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsTwoColumn',
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
