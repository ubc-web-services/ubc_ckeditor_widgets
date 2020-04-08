<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "fontawesome-icon" plugin.
 *
 * @CKEditorPlugin(
 *   id = "fontawesome-icon",
 *   label = @Translation("Fontawesome Icon"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class FontawesomeIcon extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/fontawesome-icon/plugin.js';
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
      'fontawesome-icon' => [
        'label' => $this->t('Fontawesome Icon'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/fontawesome-icon/icons/fontawesome-icon.png',
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
