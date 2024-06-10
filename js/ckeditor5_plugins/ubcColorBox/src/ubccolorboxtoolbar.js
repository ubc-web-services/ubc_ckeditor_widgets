import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedUbcColorBoxWidget,
  getUbcColorBoxWidgetAncestor
} from './utils';

/**
 * The ubcColorBox toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColorBoxToolbar extends Plugin {
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
    return 'UbcColorBoxToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const ubcColorBoxContentToolbarItems = editor.config.get('ubcColorBox.contentToolbar');
    const ubcColorBoxToolbarItems = editor.config.get('ubcColorBox.tableToolbar');

    if (ubcColorBoxContentToolbarItems) {
      widgetToolbarRepository.register('ubcColorBoxContent', {
        ariaLabel: editor.t('Color Box toolbar'),
        items: ubcColorBoxContentToolbarItems,
        getRelatedElement: getUbcColorBoxWidgetAncestor
      });
    }

    if (ubcColorBoxToolbarItems) {
      widgetToolbarRepository.register('ubcColorBox', {
        ariaLabel: editor.t('Color Box toolbar'),
        items: ubcColorBoxToolbarItems,
        getRelatedElement: getSelectedUbcColorBoxWidget
      });
    }
  }
}
