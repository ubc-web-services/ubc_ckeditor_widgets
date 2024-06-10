import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedUbcColumnsTwoWidget,
  getUbcColumnsTwoWidgetAncestor
} from './utils';

/**
 * The UbcColumnsTwo toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsTwoToolbar extends Plugin {
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
    return 'UbcColumnsTwoToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const ubcColumnsTwoContentToolbarItems = editor.config.get('ubcColumnsTwo.contentToolbar');
    const ubcColumnsTwoToolbarItems = editor.config.get('ubcColumnsTwo.tableToolbar');

    if (ubcColumnsTwoContentToolbarItems) {
      widgetToolbarRepository.register('ubcColumnsTwoContent', {
        ariaLabel: editor.t('Two Columns toolbar'),
        items: ubcColumnsTwoContentToolbarItems,
        getRelatedElement: getUbcColumnsTwoWidgetAncestor
      });
    }

    if (ubcColumnsTwoToolbarItems) {
      widgetToolbarRepository.register('ubcColumnsTwo', {
        ariaLabel: editor.t('Two Columns toolbar'),
        items: ubcColumnsTwoToolbarItems,
        getRelatedElement: getSelectedUbcColumnsTwoWidget
      });
    }
  }
}
