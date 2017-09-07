<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "bs2-2columns" plugin.
 *
 * @CKEditorPlugin(
 *   id = "bs2-2columns",
 *   label = @Translation("CKEditor Two Columns (Bootstrap 2)"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class BS2_2columns extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/bs2-2columns/plugin.js';
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
      'bs2-2columns' => [
        'label' => t('Two Columns: 1/2 1/2 (Bootstrap 2)'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/bs2-2columns/icons/bs2-2columns.png',
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
