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
import UbcCardVerticalTwoCommand from './ubccardverticaltwocommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcCardVerticalTwo as this model:
 * <ubcCardVerticalTwo>
 *  <ubcCardVerticalTwoContainer>
 *    <ubcCardVerticalTwoInner>
 *      <ubcCardVerticalTwoImage></ubcCardVerticalTwoImage>
 *      <ubcCardVerticalTwoContent></ubcCardVerticalTwoContent>
 *      <ubcCardVerticalTwoFooter></ubcCardVerticalTwoFooter>
 *    </ubcCardVerticalTwoInner>
 *  </ubcCardVerticalTwoContainer>
 *  <ubcCardVerticalTwoContainer>
 *    <ubcCardVerticalTwoInner>
 *      <ubcCardVerticalTwoImageTwo></ubcCardVerticalTwoImageTwo>
 *      <ubcCardVerticalTwoContentTwo></ubcCardVerticalTwoContentTwo>
 *      <ubcCardVerticalTwoFooterTwo></ubcCardVerticalTwoFooterTwo>
 *    </ubcCardVerticalTwoInner>
 *  </ubcCardVerticalTwoContainer>
 * </ubcCardVerticalTwo>
 *
 * Which is converted for the browser/user as this markup
 * <div class="widget-card card--two md--flex-grid">
 *  <div class="md--flex-1">
 *    <div class="ubc-card ubc-card--vert hover--no-underline group">
 *      <div class="first-image ubc-card__media object-cover"></div>
 *      <div class="ubc-card__content first-content"></div>
 *      <div class="ubc-card__actions first-footer"></div>
 *    </div>
 *  </div>
 *  <div class="md--flex-1">
 *    <div class="ubc-card ubc-card--vert hover--no-underline group">
 *      <div class="second-image ubc-card__media object-cover"></div>
 *      <div class="ubc-card__content second-content"></div>
 *      <div class="ubc-card__actions second-footer"></div>
 *    </div>
 *  </div>
 * </div>
 *
 * This file has the logic for defining the ubcCardVerticalTwo model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcCardVerticalTwoEditing extends Plugin {
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
    editor.model.schema.extend('ubcCardVerticalTwo', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardVerticalTwoInner', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardVerticalTwoImage', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardVerticalTwoContent', {
      allowAttributes: ['class']
    });
    editor.model.schema.extend('ubcCardVerticalTwoFooter', {
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
    editor.conversion.attributeToAttribute({
      model: 'class',
      view: 'class'
    });
    editor.commands.add(
      'ubcCardVerticalTwo',
      new UbcCardVerticalTwoCommand(editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcCardVerticalTwo>
   * </ubcCardVerticalTwo>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('ubcCardVerticalTwo', {
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      allowChildren: ['ubcCardVerticalTwoContainer'],
    });


    schema.register('ubcCardVerticalTwoContainer', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      //isLimit: true,
      // This is only to be used within ubcCardVerticalTwo.
      allowIn: 'ubcCardVerticalTwo',
      allowChildren: ['ubcCardVerticalTwoInner'],
    });

    schema.register('ubcCardVerticalTwoInner', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ubcCardVerticalTwo.
      allowIn: 'ubcCardVerticalTwoContainer',
      allowChildren: ['ubcCardVerticalTwoImage', 'ubcCardVerticalTwoContent', 'ubcCardVerticalTwoFooter'],
    });

    schema.register('ubcCardVerticalTwoImage', {
      isLimit: true,
      isContent: true,
      isSelectable: true,
      allowIn: 'ubcCardVerticalTwoInner',
      allowAttributes: 'class',
      allowContentOf: ['$block', '$blockObject'],
      // Allow image elements.
      allowChildren: ['drupalMedia', 'imageBlock', 'imageInline', 'htmlImg'],
    });

    schema.register('ubcCardVerticalTwoContent', {
      isLimit: true,
      allowIn: 'ubcCardVerticalTwoInner',
      allowAttributes: 'class',
      // Allow text only (e.g. text with attributes).
      allowContentOf: '$text',
      // Allow heading elements.
      allowChildren: ['heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'paragraph'],
    });

    schema.register('ubcCardVerticalTwoFooter', {
      isLimit: true,
      allowIn: 'ubcCardVerticalTwoInner',
      allowAttributes: 'class',
      allowContentOf: '$inlineObject',
      allowChildren: ['paragraph'],
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
    // <ubcCardVerticalTwo> model.
    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardVerticalTwo', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['widget-card', 'card--two', 'md--flex-grid'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardVerticalTwoContainer', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['md--flex-1'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardVerticalTwoInner', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['ubc-card', 'ubc-card--vert', 'hover--no-underline', 'group'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardVerticalTwoImage', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['ubc-card__media', 'object-cover'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardVerticalTwoContent', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['ubc-card__content'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('ubcCardVerticalTwoFooter', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['ubc-card__actions'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcCardVerticalTwo> are saved as
    // <div class="widget-card card--one">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalTwo',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-card card--two md--flex-grid',
          },
        );
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalTwoContainer',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'md--flex-1',
          },
        );
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalTwoInner',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'ubc-card ubc-card--vert hover--no-underline group',
          },
        );
      },
    });

    // Instances of <ubcCardVerticalTwoImage> are saved as
    // <div class="ubc-card__media object-cover">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalTwoImage',
      view: (modelElement, {
        writer
      }) => {
        return writer.createEditableElement(
          'div', {
            class: 'ubc-card__media object-cover',
          },
        );
      },
    });

    // Instances of <ubcCardVerticalTwoContent> are saved as
    // <div class="ubc-card__content">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalTwoContent',
      view: (modelElement, {
        writer
      }) => {
        return writer.createEditableElement(
          'div', {
            class: 'ubc-card__content',
          },
        );
      },
    });

    // Instances of <ubcCardVerticalTwoFooter> are saved as
    // <div class="ubc-card__actions">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcCardVerticalTwoFooter',
      view: (modelElement, {
        writer
      }) => {
        return writer.createEditableElement(
          'div', {
            class: 'ubc-card__actions',
          },
        );
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <ubcCardVerticalTwo> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalTwo',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-card card--two md--flex-grid',
        });
        return toWidget(div, viewWriter, {
          label: 'UBC Vertical 2 Card widget',
          hasSelectionHandle: true
        });
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalTwoContainer',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'md--flex-1',
        });
        return toWidget(div, viewWriter);
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalTwoInner',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'ubc-card ubc-card--vert hover--no-underline group',
        });
        return toWidget(div, viewWriter);
      },
    });

    // Convert the <ubcCardVerticalTwoImage> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalTwoImage',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'ubc-card__media object-cover',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardVerticalTwoContent> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalTwoContent',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'ubc-card__content',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcCardVerticalTwoFooter> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcCardVerticalTwoFooter',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'ubc-card__actions',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}
