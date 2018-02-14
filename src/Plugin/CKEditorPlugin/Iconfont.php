<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "iconfont" plugin.
 *
 * @CKEditorPlugin(
 *   id = "iconfont",
 *   label = @Translation("Iconfont"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class Iconfont extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/iconfont/plugin.js';
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
      'iconfont' => [
        'label' => t('Icon Font'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/iconfont/icons/iconfont.png',
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
