<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "accordiontoggle" plugin.
 *
 * @CKEditorPlugin(
 *   id = "accordiontoggle",
 *   label = @Translation("CKEditor accordion toggle"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class AccordionToggle extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return \Drupal::service('extension.list.module')->getPath('ubc_ckeditor_widgets') . '/plugins/accordiontoggle/plugin.js';
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
      'accordiontoggle' => [
        'label' => $this->t('Accordion Toggle'),
        'image' => \Drupal::service('extension.list.module')->getPath('ubc_ckeditor_widgets') . '/plugins/accordiontoggle/icons/accordiontoggle.png',
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
