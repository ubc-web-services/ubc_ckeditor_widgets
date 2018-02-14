<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "bs3-3columns" plugin.
 *
 * @CKEditorPlugin(
 *   id = "bs3-3columns",
 *   label = @Translation("CKEditor Three Columns"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class BS3_3columns extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/bs3-3columns/plugin.js';
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
      'bs3-3columns' => [
        'label' => t('Three Columns (Bootstrap 3)'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/bs3-3columns/icons/bs3-3columns.png',
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
