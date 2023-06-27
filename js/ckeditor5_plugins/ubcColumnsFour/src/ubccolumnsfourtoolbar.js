import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedUbcColumnsFourWidget,
  getUbcColumnsFourWidgetAncestor
} from './utils';

/**
 * The UbcColumnsFour toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsFourToolbar extends Plugin {
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
    return 'UbcColumnsFourToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const ubcColumnsFourContentToolbarItems = editor.config.get('ubcColumnsFour.contentToolbar');
    const ubcColumnsFourToolbarItems = editor.config.get('ubcColumnsFour.tableToolbar');

    if (ubcColumnsFourContentToolbarItems) {
      widgetToolbarRepository.register('ubcColumnsFourContent', {
        ariaLabel: editor.t('Four Columns toolbar'),
        items: ubcColumnsFourContentToolbarItems,
        getRelatedElement: getUbcColumnsFourWidgetAncestor
      });
    }

    if (ubcColumnsFourToolbarItems) {
      widgetToolbarRepository.register('ubcColumnsFour', {
        ariaLabel: editor.t('Four Columns toolbar'),
        items: ubcColumnsFourToolbarItems,
        getRelatedElement: getSelectedUbcColumnsFourWidget
      });
    }
  }
}
