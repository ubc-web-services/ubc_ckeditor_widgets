<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "bs2-3columns" plugin.
 *
 * @CKEditorPlugin(
 *   id = "bs2-3columns",
 *   label = @Translation("CKEditor Three Columns (Bootstrap 2)"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class BS2_3columns extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') .  '/plugins/bs2-3columns/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return array();
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
    return array(
      'bs2-3columns' => array(
        'label' => t('Three Columns (Bootstrap 2)'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/bs2-3columns/icons/bs2-3columns.png',
      ),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return array();
  }

}
