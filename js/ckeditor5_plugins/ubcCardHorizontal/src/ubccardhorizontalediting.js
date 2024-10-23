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
import UbcCardHorizontalCommand from './ubccardhorizontalcommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcCardHorizontal as this model:
 * <ubcCardHorizontal>
 *   <ubcCardHorizontalWrapper>
 *     <ubcCardHorizontalImage></ubcCardHorizontalImage>
 *     <ubcCardHorizontalInner>
 *       <ubcCardHorizontalContent></ubcCardHorizontalContent>
 *       <ubcCardHorizontalFooter>
 *       </ubcCardHorizontalFooter>
 *    </ubcCardHorizontalInner>
 *   </ubcCardHorizontalWrapper>
 * </ubcCardHorizontal>
 *
 * Which is converted for the browser/user as this markup
 * <div class="widget-card widget-card--horizontal">
 *  <div class="ubc-card ubc-card--horiz hover--no-underline group">
 *    <div class="first-image ubc-card__media">
 *      <img src="[any]" alt="[some alt text]">
 *    </div>
 *  </div>
 *  <div class="ubc-card__content_wrapper">
 *    <div class="first-content ubc-card__content">
 *        <h3></h3>
 *        <p></p>
 *    </div>
 *    <div class="first-footer ubc-card__actions">
 *      <p><a href="[any]"></a></p>
 *    </div>
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

  constructor(editor) {
    super(editor);
  }

  init() {
    const editor = this.editor;
    this._defineSchema();
    this._defineConverters();
    editor.conversion.attributeToAttribute({
      model: 'class',
      view: 'class'
    });
    editor.model.schema.extend('ubcCardHorizontal', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardHorizontalWrapper', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardHorizontalImage', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardHorizontalInner', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardHorizontalContent', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardHorizontalFooter', {
      allowAttributes: ['class']
    });
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
    editor.commands.add(
      'ubcCardHorizontal',
      new UbcCardHorizontalCommand(editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcCardHorizontal>
   *   <ubcCardHorizontalWrapper>
   *     <ubcCardHorizontalImage>https://placehold.co/600x400</ubcCardHorizontalImage>
   *     <ubcCardHorizontalInner>
   *       <ubcCardHorizontalContent></ubcCardHorizontalContent>
   *       <ubcCardHorizontalFooter>
   *       </ubcCardHorizontalFooter>
   *    </ubcCardHorizontalInner>
   *   </ubcCardHorizontalWrapper>
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
      //allowAttributes: 'class',
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      allowChildren: ['ubcCardHorizontalWrapper'],
    });

    schema.register('ubcCardHorizontalWrapper', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      //isLimit: true,
      // This is only to be used within ubcCardHorizontal.
      allowIn: 'ubcCardHorizontal',
      allowChildren: ['ubcCardHorizontalImage', 'ubcCardHorizontalInner'],
    });

    schema.register('ubcCardHorizontalImage', {
      isLimit: true,
      isContent: true,
      isSelectable: true,
      allowIn: 'ubcCardHorizontal',
      allowContentOf: ['$block', '$blockObject'],
      // Allow image elements.
      allowChildren: ['drupalMedia', 'imageBlock', 'imageInline', 'htmlImg'],
    });

    schema.register('ubcCardHorizontalInner', {
      //isLimit: true,
      allowIn: 'ubcCardHorizontal',
      allowChildren: ['ubcCardHorizontalContent', 'ubcCardHorizontalFooter'],
    });

    schema.register('ubcCardHorizontalContent', {
      isLimit: true,
      allowIn: 'ubcCardHorizontal',
      // Allow text only (e.g. text with attributes).
      allowContentOf: '$text',
      // Allow heading elements.
      allowChildren: ['heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'paragraph'],
    });

    schema.register('ubcCardHorizontalFooter', {
      isLimit: true,
      allowIn: 'ubcCardHorizontal',
      allowContentOf: '$inlineObject',
      allowChildren: ['paragraph'],
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
    const {
      conversion
    } = this.editor;

    // Upcast Converters: determine how existing HTML is interpreted by the
    // editor. These trigger when an editor instance loads.
    //
    // If <div class="widget-cardhorizontal"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardHorizontal> model.
    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardHorizontal', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['widget-card', 'widget-card--horizontal'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardHorizontalWrapper', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['ubc-card', 'ubc-card--horiz', 'hover--no-underline', 'group'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardHorizontalImage', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['first-image', 'ubc-card__media'],
      },
    });

    // If <div class="ubc-card__content_wrapper"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardHorizontalInner> model, provided it is a child element of <ubcCardHorizontal>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardHorizontalInner', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['ubc-card__content_wrapper'],
      },
    });

    // If <div class="first-content ubc-card__content"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardHorizontalContent> model, provided it is a child element of
    // <ubcCardHorizontal>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardHorizontalContent', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['first-content', 'ubc-card__content'],
      },
    });

    // If <div class="first-footer ubc-card__actions"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcCardHorizontalFooter> model, provided it is a child element of
    // <ubcCardHorizontal>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardHorizontalFooter', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['first-footer', 'ubc-card__actions'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcCardHorizontal> are saved as
    // <div class="widget-card widget-card--horizontal">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontal',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-card widget-card--horizontal',
          },
        );
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontalWrapper',
      view: {
        name: 'div',
        classes: ['ubc-card', 'ubc-card--horiz', 'hover--no-underline', 'group'],
      },
    });

    // Instances of <ubcCardHorizontalImage> are saved as
    // <div class="first-image ubc-card__media">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontalImage',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'first-image ubc-card__media',
          },
        );
      },
    });

    // Instances of <ubcCardHorizontalInner> are saved as
    // <div class="ubc-card__content_wrapper">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontalInner',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'ubc-card__content_wrapper',
          },
        );
      },
    });

    // Instances of <ubcCardHorizontalContent> are saved as
    // <div class="first-content ubc-card__content">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontalContent',
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

    // Instances of <ubcCardHorizontalFooter> are saved as
    // <div class="first-footer ubc-card__actions">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardHorizontalFooter',
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
    // Convert the <ubcCardHorizontal> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontal',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-card widget-card--horizontal',
        });
        return toWidget(div, viewWriter, {
          label: 'UBC Card Horizontal widget',
          hasSelectionHandle: true
        });
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontalWrapper',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'ubc-card ubc-card--horiz hover--no-underline group',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardHorizontalImage> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontalImage',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'first-image ubc-card__media',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardHorizontalInner> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontalInner',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'ubc-card__content_wrapper',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardHorizontalContent> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontalContent',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'first-content ubc-card__content',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardHorizontalFooter> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardHorizontalFooter',
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
