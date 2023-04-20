import { Plugin } from 'ckeditor5/src/core';
import { toWidget, toWidgetEditable } from 'ckeditor5/src/widget';
import { Widget } from 'ckeditor5/src/widget';
import InsertUbcCardHorizontalCommand from './insertubccardhorizontalcommand';

// cSpell:ignore cardhorizontal insertubccardhorizontalcommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcCardHorizontal as this model:
 * <ubcCardHorizontal>
 *    <ubcCardHorizontalTitle></ubcCardHorizontalTitle>
 *    <ubcCardHorizontalDescription></ubcCardHorizontalDescription>
 * </ubcCardHorizontal>
 *
 * Which is converted for the browser/user as this markup
 * <div class="widget-cardhorizontal">
 *  <div class="cardhorizontal js-reveal__parent">
 *    <div class="js-reveal__trigger cardhorizontal__trigger" aria-expanded="false">
 *      <h3></h3>
 *    </div>
 *  </div>
 *  <div class="js-reveal__target cardhorizontal__content clearfix" hidden>
 *  </div>
 * </div>
 *
 * This file has the logic for defining the ubcCardHorizontal model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcCardHorizontalEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      'insertUbcCardHorizontal',
      new InsertUbcCardHorizontalCommand(this.editor),
    );

    const cardhorizontal_classes = [
      { id: 'open', classes: 'is-open', aria: 'true', hidden: '' },
      { id: 'closed', classes: '', aria: 'false', hidden: 'hidden' },
    ];
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcCardHorizontal>
   *    <ubcCardHorizontalTitle></ubcCardHorizontalTitle>
   *    <ubcCardHorizontalDescription></ubcCardHorizontalDescription>
   * </ubcCardHorizontal>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('ubcCardHorizontal', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
    });

    schema.register('ubcCardHorizontalTitleWrapper', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ubcCardHorizontal.
      allowIn: 'ubcCardHorizontal',
      allowChildren: 'ubcCardHorizontalTitle',
    });


    schema.register('ubcCardHorizontalTitle', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ubcCardHorizontal.
      allowIn: 'ubcCardHorizontal',
      // Allow text only (e.g. text with attributes).
      allowContentOf: '$text',
      // Allow h3 elements.
      allowChildren: ['heading2', 'heading3', 'heading4', 'heading5', 'heading6'],
      allowAttributes: 'aria-expanded',
    });

    schema.register('ubcCardHorizontalDescription', {
      isLimit: true,
      allowIn: 'ubcCardHorizontal',
      allowContentOf: '$root',
      allowAttributes: 'hidden',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow ubcCardHorizontal inside ubcCardHorizontalDescription.
      // Disabled for CardHorizontal
      /*
      if (
        context.endsWith('ubcCardHorizontalDescription') &&
        childDefinition.name === 'ubcCardHorizontal'
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
    const { conversion } = this.editor;

    // Upcast Converters: determine how existing HTML is interpreted by the
    // editor. These trigger when an editor instance loads.
    //
    // If <div class="widget-cardhorizontal"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardHorizontal> model.
    conversion.for('upcast').elementToElement({
      model: 'ubcCardHorizontal',
      view: {
        name: 'div',
        classes: 'widget-cardhorizontal',
      },
    });

    conversion.for('upcast').elementToElement({
      model: 'ubcCardHorizontalTitleWrapper',
      view: {
        name: 'div',
        classes: ['cardhorizontal', 'js-reveal__parent'],
      },
    });

    // If <div class="js-reveal__trigger cardhorizontal__trigger"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardHorizontalTitle> model, provided it is a child element of <ubcCardHorizontal>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcCardHorizontalTitle',
      view: {
        name: 'div',
        classes: ['js-reveal__trigger', 'cardhorizontal__trigger'],
      },
    });

    // If <div class="js-reveal__target cardhorizontal__content clearfix"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardHorizontalDescription> model, provided it is a child element of
    // <ubcCardHorizontal>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcCardHorizontalDescription',
      view: {
        name: 'div',
        classes: ['js-reveal__target', 'cardhorizontal__content', 'clearfix'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcCardHorizontal> are saved as
    // <div class="widget-cardhorizontal">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontal',
      view: {
        name: 'div',
        classes: 'widget-cardhorizontal',
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontalTitleWrapper',
      view: {
        name: 'div',
        classes: ['cardhorizontal', 'js-reveal__parent'],
      },
    });

    // Instances of <ubcCardHorizontalTitle> are saved as
    // <div class="js-reveal__trigger cardhorizontal__trigger" aria-expanded="false">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontalTitle',
      view: ( modelElement, { writer } ) => {
        return writer.createContainerElement(
            'div', {
              class: 'js-reveal__trigger cardhorizontal__trigger',
              'aria-expanded': false,
            },
        );
      },
    });

    // Instances of <ubcCardHorizontalDescription> are saved as
    // <div class="js-reveal__target cardhorizontal__content clearfix" hidden>{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontalDescription',
      view: ( modelElement, { writer } ) => {
        return writer.createContainerElement(
            'div', {
              class: 'js-reveal__target cardhorizontal__content clearfix',
              'hidden': 'hidden',
            },
        );
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <ubcCardHorizontal> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontal',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-cardhorizontal',
        });
        return toWidget(div, viewWriter, { label: 'UBC CardHorizontal widget', hasSelectionHandle: true });
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontalTitleWrapper',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'cardhorizontal js-reveal__parent',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardHorizontalTitle> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontalTitle',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'js-reveal__trigger cardhorizontal__trigger',
          'aria-expanded': 'true',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardHorizontalDescription> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontalDescription',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'js-reveal__target cardhorizontal__content clearfix',
        });
        return toWidgetEditable(div, viewWriter, { label: 'UBC CardHorizontal widget', hasSelectionHandle: true });
      },
    });
  }
}
