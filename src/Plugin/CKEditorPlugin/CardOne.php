<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "card-one" plugin.
 *
 * @CKEditorPlugin(
 *   id = "card-one",
 *   label = @Translation("One Card"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class CardOne extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return \Drupal::service('extension.list.module')->getPath('ubc_ckeditor_widgets') . '/plugins/card-one/plugin.js';
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
      'card-one' => [
        'label' => $this->t('One Card'),
        'image' => \Drupal::service('extension.list.module')->getPath('ubc_ckeditor_widgets') . '/plugins/card-one/icons/card-one.png',
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
