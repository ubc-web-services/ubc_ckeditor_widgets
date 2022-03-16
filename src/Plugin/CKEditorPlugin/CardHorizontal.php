<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "card-horizontal" plugin.
 *
 * @CKEditorPlugin(
 *   id = "card-horizontal",
 *   label = @Translation("Horizontal Card"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class CardHorizontal extends CKEditorPluginBase
{

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile()
  {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/card-horizontal/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor)
  {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal()
  {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons()
  {
    return [
      'card-horizontal' => [
        'label' => $this->t('Horizontal Card'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/card-horizontal/icons/card-horizontal.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor)
  {
    return [];
  }
}
