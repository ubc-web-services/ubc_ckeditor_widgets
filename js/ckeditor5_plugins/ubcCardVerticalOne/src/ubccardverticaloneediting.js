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
import UbcCardVerticalOneCommand from './ubccardverticalonecommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcCardVerticalOne as this model:
 * <ubcCardVerticalOne>
 *  <ubcCardVerticalOneInner>
 *      <ubcCardVerticalOneImage></ubcCardVerticalOneImage>
 *      <ubcCardVerticalOneContent></ubcCardVerticalOneContent>
 *      <ubcCardVerticalOneFooter></ubcCardVerticalOneFooter>
 *  </ubcCardVerticalOneInner>
 * </ubcCardVerticalOne>
 *
 * Which is converted for the browser/user as this markup
 * <div class="widget-card card--one">
 *  <div class="card">
 *    <div class="card__image-area first-image"></div>
 *    <div class="card__content first-content"></div>
 *    <div class="card__footer first-footer"></div>
 *  </div>
 * </div>
 *
 *
 * This file has the logic for defining the ubcCardVerticalOne model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcCardVerticalOneEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  constructor(editor) {
    super(editor);
  }

  init() {
    const editor = this.editor;
    editor.model.schema.extend('heading2', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('heading3', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('heading4', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('heading5', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('heading6', {
      allowAttributes: ['class']
    });
    editor.conversion.attributeToAttribute({
      model: 'class',
      view: 'class'
    });
    this._defineSchema();
    this._defineConverters();
    editor.commands.add(
      'ubcCardVerticalOne',
      new UbcCardVerticalOneCommand(editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcCardVerticalOne>
   *  <ubcCardVerticalOneInner>
   *      <ubcCardVerticalOneImage></ubcCardVerticalOneImage>
   *      <ubcCardVerticalOneContent></ubcCardVerticalOneContent>
   *      <ubcCardVerticalOneFooter></ubcCardVerticalOneFooter>
   *  </ubcCardVerticalOneInner>
   * </ubcCardVerticalOne>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('ubcCardVerticalOne', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      allowChildren: ['ubcCardVerticalOneInner'],
    });

    schema.register('ubcCardVerticalOneInner', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      // isLimit: true,
      // This is only to be used within ubcCardVerticalOne.
      allowIn: 'ubcCardVerticalOne',
      allowChildren: ['ubcCardVerticalOneImage', 'ubcCardVerticalOneContent', 'ubcCardVerticalOneFooter'],
    });

    schema.register('ubcCardVerticalOneImage', {
      isLimit: true,
      isContent: true,
      isSelectable: true,
      allowIn: 'ubcCardVerticalOne',
      allowContentOf: ['$block', '$blockObject'],
      // Allow image elements.
      allowChildren: ['drupalMedia', 'imageBlock', 'imageInline', 'htmlImg'],
    });

    schema.register('ubcCardVerticalOneContent', {
      isLimit: true,
      allowIn: 'ubcCardVerticalOne',
      // Allow text only (e.g. text with attributes).
      allowContentOf: '$text',
      // Allow heading elements.
      allowChildren: ['heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'paragraph'],
    });

    schema.register('ubcCardVerticalOneFooter', {
      isLimit: true,
      allowIn: 'ubcCardVerticalOne',
      allowContentOf: '$inlineObject',
      allowChildren: ['paragraph'],
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow ubcCardVerticalOne inside ubcCardVerticalOneSecond.
      // Disabled for ubcCardVerticalOne
      /*
      if (
        context.endsWith('ubcCardVerticalOneSecond') &&
        childDefinition.name === 'ubcCardVerticalOne'
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
    // If <div class="widget-column-options widget-columns-2 align-equal"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardVerticalOne> model.
    conversion.for('upcast').elementToElement({
      model: 'ubcCardVerticalOne',
      view: {
        name: 'div',
        classes: ['widget-card', 'card--one', 'widget-card--vertical-one'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: 'ubcCardVerticalOneInner',
      view: {
        name: 'div',
        classes: ['ubc-card', 'ubc-card--vert', 'hover--no-underline', 'group'],
      },
    });

    // If <div class="card__image-area first-image"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardVerticalOneImage> model, provided it is a child element of <ubcCardVerticalOne>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcCardVerticalOneImage',
      view: {
        name: 'div',
        classes: ['first-image', 'ubc-card__media', 'object-cover'],
      },
    });

    // If <div class="card__content first-content"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardVerticalOneContent> model, provided it is a child element of
    // <ubcCardVerticalOne>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcCardVerticalOneContent',
      view: {
        name: 'div',
        classes: ['first-content', 'ubc-card__content'],
      },
    });

    // If <div class="card__footer first-footer"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardVerticalOneFooter> model, provided it is a child element of
    // <ubcCardVerticalOne>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcCardVerticalOneFooter',
      view: {
        name: 'div',
        classes: ['first-footer', 'ubc-card__actions'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcCardVerticalOne> are saved as
    // <div class="widget-card card--one">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalOne',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-card card--one widget-card--vertical-one',
          },
        );
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalOneInner',
      view: {
        name: 'div',
        classes: 'ubc-card ubc-card--vert hover--no-underline group',
      },
    });

    // Instances of <ubcCardVerticalOneImage> are saved as
    // <div class="first-image ubc-card__media object-cover">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalOneImage',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'first-image ubc-card__media object-cover',
          },
        );
      },
    });

    // Instances of <ubcCardVerticalOneContent> are saved as
    // <div class="first-content ubc-card__content">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalOneContent',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'first-content ubc-card__content',
          },
        );
      },
    });

    // Instances of <ubcCardVerticalOneFooter> are saved as
    // <div class="first-footer ubc-card__actions">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalOneFooter',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'first-footer ubc-card__actions',
          },
        );
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <ubcCardVerticalOne> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalOne',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-card card--one widget-card--vertical-one',
        });
        return toWidget(div, viewWriter, {
          label: 'UBC Vertical Card widget',
          hasSelectionHandle: true
        });
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalOneInner',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'ubc-card ubc-card--vert hover--no-underline group',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardVerticalOneImage> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalOneImage',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'first-image ubc-card__media object-cover',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardVerticalOneContent> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalOneContent',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'first-content ubc-card__content',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardVerticalOneFooter> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalOneFooter',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'first-footer ubc-card__actions',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}
