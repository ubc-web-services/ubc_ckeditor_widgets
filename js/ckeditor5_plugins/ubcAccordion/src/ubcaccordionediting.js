import { Plugin } from 'ckeditor5/src/core';
import { toWidget, toWidgetEditable } from 'ckeditor5/src/widget';
import { Widget } from 'ckeditor5/src/widget';
import InsertUbcAccordionCommand from './insertubcaccordioncommand';

// cSpell:ignore ubcaccordion insertubcaccordioncommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcAccordion as this model:
 * <ubcAccordion>
 *    <ubcAccordionTitle></ubcAccordionTitle>
 *    <ubcAccordionDescription></ubcAccordionDescription>
 * </ubcAccordion>
 *
 * Which is converted for the browser/user as this markup
 * <div class="widget-accordion">
 *  <div class="accordion js-reveal__parent">
 *    <div class="js-reveal__trigger accordion__trigger" aria-expanded="false">
 *      <h3></h3>
 *    </div>
 *  </div>
 *  <div class="js-reveal__target accordion__content clearfix" hidden>
 *  </div>
 * </div>
 *
 * This file has the logic for defining the ubcAccordion model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcAccordionEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      'insertUbcAccordion',
      new InsertUbcAccordionCommand(this.editor),
    );

    const accordion_classes = [
      { id: 'open', classes: 'is-open', aria: 'true', hidden: '' },
      { id: 'closed', classes: '', aria: 'false', hidden: 'hidden' },
    ];
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcAccordion>
   *    <ubcAccordionTitle></ubcAccordionTitle>
   *    <ubcAccordionDescription></ubcAccordionDescription>
   * </ubcAccordion>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('ubcAccordion', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
    });

    schema.register('ubcAccordionTitleWrapper', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ubcAccordion.
      allowIn: 'ubcAccordion',
      allowChildren: 'ubcAccordionTitle',
    });


    schema.register('ubcAccordionTitle', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ubcAccordion.
      allowIn: 'ubcAccordion',
      // Allow text only (e.g. text with attributes).
      allowContentOf: '$text',
      // Allow h3 elements.
      allowChildren: ['heading2', 'heading3', 'heading4', 'heading5', 'heading6'],
      allowAttributes: 'aria-expanded',
    });

    schema.register('ubcAccordionDescription', {
      isLimit: true,
      allowIn: 'ubcAccordion',
      allowContentOf: '$root',
      allowAttributes: 'hidden',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow ubcAccordion inside ubcAccordionDescription.
      // Disabled for Accordion
      /*
      if (
        context.endsWith('ubcAccordionDescription') &&
        childDefinition.name === 'ubcAccordion'
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
    // If <div class="widget-accordion"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcAccordion> model.
    conversion.for('upcast').elementToElement({
      model: 'ubcAccordion',
      view: {
        name: 'div',
        classes: 'widget-accordion',
      },
    });

    conversion.for('upcast').elementToElement({
      model: 'ubcAccordionTitleWrapper',
      view: {
        name: 'div',
        classes: ['accordion', 'js-reveal__parent'],
      },
    });

    // If <div class="js-reveal__trigger accordion__trigger"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcAccordionTitle> model, provided it is a child element of <ubcAccordion>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcAccordionTitle',
      view: {
        name: 'div',
        classes: ['js-reveal__trigger', 'accordion__trigger'],
      },
    });

    // If <div class="js-reveal__target accordion__content clearfix"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcAccordionDescription> model, provided it is a child element of
    // <ubcAccordion>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcAccordionDescription',
      view: {
        name: 'div',
        classes: ['js-reveal__target', 'accordion__content', 'clearfix'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcAccordion> are saved as
    // <div class="widget-accordion">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcAccordion',
      view: {
        name: 'div',
        classes: 'widget-accordion',
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcAccordionTitleWrapper',
      view: {
        name: 'div',
        classes: ['accordion', 'js-reveal__parent'],
      },
    });

    // Instances of <ubcAccordionTitle> are saved as
    // <div class="js-reveal__trigger accordion__trigger" aria-expanded="false">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcAccordionTitle',
      view: ( modelElement, { writer } ) => {
        return writer.createContainerElement(
            'div', {
              class: 'js-reveal__trigger accordion__trigger',
              'aria-expanded': false,
            },
        );
      },
    });

    // Instances of <ubcAccordionDescription> are saved as
    // <div class="js-reveal__target accordion__content clearfix" hidden>{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcAccordionDescription',
      view: ( modelElement, { writer } ) => {
        return writer.createContainerElement(
            'div', {
              class: 'js-reveal__target accordion__content clearfix',
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
    // Convert the <ubcAccordion> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcAccordion',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-accordion',
        });
        return toWidget(div, viewWriter, { label: 'UBC Accordion widget', hasSelectionHandle: true });
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcAccordionTitleWrapper',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'accordion js-reveal__parent',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcAccordionTitle> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcAccordionTitle',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'js-reveal__trigger accordion__trigger',
          'aria-expanded': 'true',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcAccordionDescription> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcAccordionDescription',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'js-reveal__target accordion__content clearfix',
        });
        return toWidgetEditable(div, viewWriter, { label: 'UBC Accordion widget', hasSelectionHandle: true });
      },
    });
  }
}
