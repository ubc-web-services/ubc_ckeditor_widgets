<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "card-one" plugin.
 *
 * @CKEditorPlugin(
 *   id = "widget-quote",
 *   label = @Translation("Insert Quote"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class WidgetQuote extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/widget-quote/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [
      'widget-quote' => [
        'label' => t('Insert Quote'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/widget-quote/icons/quote-left.svg',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}
