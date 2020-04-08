<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "card-w-icon" plugin.
 *
 * @CKEditorPlugin(
 *   id = "card-w-icon",
 *   label = @Translation("Card with Icon"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class CardWIcon extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/card-w-icon/plugin.js';
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
      'card-w-icon' => [
        'label' => $this->t('Card with Icon'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/card-w-icon/icons/card-w-icon.png',
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
