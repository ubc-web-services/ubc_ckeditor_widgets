import { Plugin } from 'ckeditor5/src/core';
import { toWidget, toWidgetEditable, WidgetToolbarRepository } from 'ckeditor5/src/widget';
import { Widget } from 'ckeditor5/src/widget';
import InsertUbcColumnsTwoCommand from './insertUbcColumnsTwocommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with UbcColumnsTwo as this model:
 * <ubcColumnsTwo>
 *  <ubcColumnsTwoInner>
 *    <ubcColumnsTwoFirst></ubcColumnsTwoFirst>
 *    <ubcColumnsTwoSecond></ubcColumnsTwoSecond>
 *  <ubcColumnsTwoInner>
 * </ubcColumnsTwo>
 *
 * Which is converted for the browser/user as this markup
 * <div class="widget-column-options widget-columns-2 align-equal my-6">
 *  <div class="widget--md--grid">
 *    <div class="widget-region-one first-child--mt-0">
 *    </div>
 *    <div class="widget-region-two first-child--mt-0">
 *    </div>
 *  </div>
 * </div>
 *
 * This file has the logic for defining the ubcColumnsTwo model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcColumnsTwoEditing extends Plugin {
  static get requires() {
    return [Widget, WidgetToolbarRepository];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      'insertUbcColumnsTwo',
      new InsertUbcColumnsTwoCommand(this.editor),
    );

    const editor = this.editor;
    const model = editor.model;

    const column_classes = [
      { id: 'equal', classes: 'align-equal' },
      { id: 'lg-left', classes: 'align-large-left' },
      { id: 'lg-right', classes: 'align-large-right' },
    ];

    model.schema.extend( 'ubcColumnsTwo', {
      allowAttributes: [ 'equal', 'lg-left', 'lg-right', 'class' ]
    } );

    // Define all the commands.
    editor.commands.add( 'setColumnClass1', new InsertUbcColumnsTwoCommand( editor, 'equal' ) );
    editor.commands.add( 'setColumnClass2', new InsertUbcColumnsTwoCommand( editor, 'lg-left' ) );
    editor.commands.add( 'setColumnClass3', new InsertUbcColumnsTwoCommand( editor, 'lg-right' ) );

    column_classes.forEach( ( columnClass ) => {
      editor.model.schema.extend( 'ubcColumnsTwo', { allowAttributes: columnClass.id } );

      editor.conversion.for( 'upcast' ).attributeToAttribute( {
        model: {
          name: 'ubcColumnsTwo',
          key: columnClass.id,
          value: true,
        },
        view: {
          key: 'class',
          value: columnClass.classes,
        },
      } );

      const val = 'attribute:' + columnClass.id + ':ubcColumnsTwo';

      // Apply attribute to table element no matter if it's needed or not.
      editor.conversion.for( 'dataDowncast' ).add( dispatcher => {
        dispatcher.on( val, ( evt, data, conversionApi ) => {
          const viewElement = conversionApi.mapper.toViewElement( data.item );
          conversionApi.writer.removeClass( 'align-equal', viewElement );
          conversionApi.writer.removeClass( 'align-large-left', viewElement );
          conversionApi.writer.removeClass( 'align-large-right', viewElement );
          conversionApi.writer.addClass( columnClass.classes, viewElement );
        } );
      });

      editor.conversion.for( 'editingDowncast' ).add( dispatcher => {
        dispatcher.on( val, ( evt, data, conversionApi ) => {
          const viewElement = conversionApi.mapper.toViewElement( data.item );
          conversionApi.writer.removeClass( 'align-equal', viewElement );
          conversionApi.writer.removeClass( 'align-large-left', viewElement );
          conversionApi.writer.removeClass( 'align-large-right', viewElement );
          conversionApi.writer.addClass( columnClass.classes, viewElement );
        } );
      });
    } );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ubcColumnsTwo>
   *  <ubcColumnsTwoInner>
   *    <ubcColumnsTwoFirst></ubcColumnsTwoFirst>
   *    <ubcColumnsTwoSecond></ubcColumnsTwoSecond>
   *  <ubcColumnsTwoInner>
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
    });

    schema.register('ubcColumnsTwoInner', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ubcColumnsTwo.
      allowIn: 'ubcColumnsTwo',
      allowChildren: ['ubcColumnsTwoFirst', 'ubcColumnsTwoSecond'],
    });

    schema.register('ubcColumnsTwoFirst', {
      isLimit: true,
      allowIn: 'ubcColumnsTwo',
      allowContentOf: '$root',
      allowAttributes: 'hidden',
    });

    schema.register('ubcColumnsTwoSecond', {
      isLimit: true,
      allowIn: 'ubcColumnsTwo',
      allowContentOf: '$root',
      allowAttributes: 'hidden',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow ubcColumnsTwo inside ubcColumnsTwoDescription.
      // Disabled for Two Columns
      /*
      if (
        context.endsWith('ubcColumnsTwoDescription') &&
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
    const { conversion } = this.editor;

    // Upcast Converters: determine how existing HTML is interpreted by the
    // editor. These trigger when an editor instance loads.
    //
    // If <div class="widget-accordion"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcColumnsTwo> model.
    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsTwo',
      view: {
        name: 'div',
        classes: ['widget-column-options', 'widget-columns-2', 'align-equal', 'my-6'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsTwoInner',
      view: {
        name: 'div',
        classes: ['widget--md--grid'],
      },
    });

    // If <div class="js-reveal__trigger accordion__trigger"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcColumnsTwoFirst> model, provided it is a child element of <ubcColumnsTwo>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsTwoFirst',
      view: {
        name: 'div',
        classes: ['widget-region-one', 'first-child--mt-0'],
      },
    });

    // If <div class="js-reveal__target accordion__content clearfix"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ubcColumnsTwoDescription> model, provided it is a child element of
    // <ubcColumnsTwo>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ubcColumnsTwoSecond',
      view: {
        name: 'div',
        classes: ['widget-region-two', 'first-child--mt-0'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ubcColumnsTwo> are saved as
    // <div class="widget-column-options widget-columns-2 align-equal my-6">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsTwo',
      view: {
        name: 'div',
        classes: ['widget-column-options', 'widget-columns-2', 'align-equal', 'my-6'],
      },
    });

    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsTwoInner',
      view: {
        name: 'div',
        classes: ['widget--md--grid'],
      },
    });

    // Instances of <ubcColumnsTwoFirst> are saved as
    // <div class="widget-region-one first-child--mt-0">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsTwoFirst',
      view: ( modelElement, { writer } ) => {
        return writer.createContainerElement(
            'div', {
              class: 'widget-region-one first-child--mt-0',
            },
        );
      },
    });

    // Instances of <ubcColumnsTwoSecond> are saved as
    // <div class="widget-region-two first-child--mt-0">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ubcColumnsTwoSecond',
      view: ( modelElement, { writer } ) => {
        return writer.createContainerElement(
            'div', {
              class: 'widget-region-two first-child--mt-0',
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
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-column-options widget-columns-2 align-equal my-6',
        });
        return toWidget(div, viewWriter, { label: 'UBC Two Columns widget', hasSelectionHandle: true });
      },
    });

    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsTwoInner',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'widget--md--grid',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcColumnsTwoFirst> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsTwoFirst',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'widget-region-one first-child--mt-0',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <ubcColumnsTwoSecond> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ubcColumnsTwoSecond',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'widget-region-two first-child--mt-0',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }

  /*
  afterInit( ) {
		const editor = this.editor;
		const widgetToolbarRepository = editor.plugins.get( WidgetToolbarRepository );


    const selection = editor.model.document.selection;
    const selectedElement = selection.getSelectedElement();

    let modelTable = '';

    // Is the command triggered from the `tableToolbar`?
    if ( selectedElement && selectedElement.is( 'element', 'ubcColumnsTwo' ) ) {
      modelTable = selectedElement;
    }
    else {
      modelTable = selection.getFirstPosition().findAncestor( 'ubcColumnsTwo' );
    }

    // Is the command triggered from the `tableToolbar`?
    if ( modelTable ) {
      widgetToolbarRepository.register( 'ubcColumnsTwo', {
        items: editor.config.get( 'ubcColumnsTwo.columnsUbc' ),
        getRelatedElement: selectedElement
      } );
    }
	}
  */
}
