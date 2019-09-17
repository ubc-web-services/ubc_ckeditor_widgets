<?php

namespace Drupal\ubc_clf_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "flex-2columns" plugin.
 *
 * @CKEditorPlugin(
 *   id = "flex-2columns",
 *   label = @Translation("CKEditor Three Columns"),
 *   module = "ubc_clf_widgets"
 * )
 */
class FlexTwoColumns extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_clf_widgets') . '/plugins/columns-two/plugin.js';
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
      'flex-2columns' => [
        'label' => t('Two Columns'),
        'image' => drupal_get_path('module', 'ubc_clf_widgets') . '/plugins/columns-two/icons/flex-2columns.png',
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
