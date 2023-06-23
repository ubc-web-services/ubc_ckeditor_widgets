import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedUbcColumnsThreeWidget,
  getUbcColumnsThreeWidgetAncestor
} from './utils';

/**
 * The UbcColumnsThree toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsThreeToolbar extends Plugin {

  /**
   * @inheritDoc
   */
  static get requires() {
    return [WidgetToolbarRepository];
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcColumnsThreeToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const ubcColumnsThreeContentToolbarItems = editor.config.get('ubcColumnsThree.contentToolbar');
    const ubcColumnsThreeToolbarItems = editor.config.get('ubcColumnsThree.tableToolbar');

    if (ubcColumnsThreeContentToolbarItems) {
      widgetToolbarRepository.register('ubcColumnsThreeContent', {
        ariaLabel: editor.t('Three Columns toolbar'),
        items: ubcColumnsThreeContentToolbarItems,
        getRelatedElement: getUbcColumnsThreeWidgetAncestor
      });
    }

    if (ubcColumnsThreeToolbarItems) {
      widgetToolbarRepository.register('ubcColumnsThree', {
        ariaLabel: editor.t('Three Columns toolbar'),
        items: ubcColumnsThreeToolbarItems,
        getRelatedElement: getSelectedUbcColumnsThreeWidget
      });
    }
  }
}
