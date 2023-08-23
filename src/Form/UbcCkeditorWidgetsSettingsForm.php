<?php

namespace Drupal\ubc_ckeditor_widgets\Form;

use Drupal\ckeditor5\HTMLRestrictions;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\editor\EditorInterface;

/**
 * Class UbcCkeditorWidgetsSettingsForm.
 *
 * @package Drupal\ubc_ckeditor_widgets\Form
 */
class UbcCkeditorWidgetsSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'ubc_ckeditor_widgets_settings_form';
  }

  /**
   * {@inheritdoc}
   */
  public function getEditableConfigNames() {
    return ['ubc_ckeditor_widgets.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('ubc_ckeditor_widgets.settings');

    $form['background_colors'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Add a set of background color classes'),
      '#default_value' => $config->get('background_colors'),
      '#description' => $this->t('These classes will be applied as background colors.<br />Enter one class on each line in the format: <code>class|Label</code><br /><strong>* Note:</strong> this expects a prefix of <strong><code>bg-</code></strong>, so format as <strong><code>bg-[myvalue]</code></strong>.')
    ];

    $form['padding_styles'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Add a set of padding classes'),
      '#default_value' => $config->get('padding_styles'),
      '#description' => $this->t('These classes are intended to be added for adjusting the padding inside of the element.<br />Enter one class on each line in the format: <code>class|Label</code><br /><strong>* Note:</strong> this expects a prefix of <strong><code>p-</code></strong>, so format as <strong><code>p-[myvalue]</code></strong>.')
    ];

    $form['margin_styles'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Add a set of margin classes'),
      '#default_value' => $config->get('margin_styles'),
      '#description' => $this->t('These classes are intended to be added for adjusting the vertical margin outside of the element.<br />Enter one class on each line in the format: <code>class|Label</code><br /><strong>* Note:</strong> this expects a prefix of <strong><code>my-</code></strong>, so format as <strong><code>my-[myvalue]</code></strong>.')
    ];

    $form['gap_styles'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Add a set of classes for changing the gap property'),
      '#default_value' => $config->get('gap_styles'),
      '#description' => $this->t('These classes are intended to be added for adjusting the gap between elements (ie. columns, cards).<br />Enter one class on each line in the format: <code>class|Label</code><br /><strong>* Note:</strong> this expects a prefix of <strong><code>gap-</code></strong>, so format as <strong><code>gap-[myvalue]</code></strong>.')
    ];

    $form['table_styles'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Add a set of classes for adjusting the style of tables'),
      '#default_value' => $config->get('table_styles'),
      '#description' => $this->t('These classes are intended to be added for adjusting the style of tables.<br />Enter one class on each line in the format: <code>class|Label</code><br /><strong>* Note:</strong> this expects a prefix of <strong><code>table--</code></strong>, so format as <strong><code>table--[myvalue]</code></strong>.')
    ];

    $form['three_column_layout_styles'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Add a set of classes for adjusting the layout of Three Columns'),
      '#default_value' => $config->get('three_column_layout_styles'),
      '#description' => $this->t('These classes are intended to be added for adjusting the layout of the three column widget.<br />Enter one class on each line in the format: <code>class|Label</code><br /><strong>* Note:</strong> this expects a prefix of <strong><code>align-</code></strong>, so format as <strong><code>align-[myvalue]</code></strong>.')
    ];

    $form['two_column_layout_styles'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Add a set of classes for adjusting the layout of Two Columns'),
      '#default_value' => $config->get('two_column_layout_styles'),
      '#description' => $this->t('These classes are intended to be added for adjusting the layout of the two column widget.<br />Enter one class on each line in the format: <code>class|Label</code><br /><strong>* Note:</strong> this expects a prefix of <strong><code>align-</code></strong>, so format as <strong><code>align-[myvalue]</code></strong>.')
    ];

    $form['width_styles'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Add a set of classes for adjusting the width of Table Columns'),
      '#default_value' => $config->get('width_styles'),
      '#description' => $this->t('These classes are intended to be added for adjusting the widths of tables.<br />Enter one class on each line in the format: <code>class|Label</code><br /><strong>* Note:</strong> this expects a prefix of <strong><code>w-</code></strong>, so format as <strong><code>w-[myvalue]</code></strong>.')
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('ubc_ckeditor_widgets.settings');
    $values = $form_state->getValues();
    $config->set('background_colors', $values['background_colors']);
    $config->set('gap_styles', $values['gap_styles']);
    $config->set('margin_styles', $values['margin_styles']);
    $config->set('padding_styles', $values['padding_styles']);
    $config->set('table_styles', $values['table_styles']);
    $config->set('three_column_layout_styles', $values['three_column_layout_styles']);
    $config->set('two_column_layout_styles', $values['two_column_layout_styles']);
    $config->set('width_styles', $values['width_styles']);
    $config->save();

    parent::submitForm($form, $form_state);
  }

}

/**  not sure how to best capture these
 * refer to ubc_ckeditor_widgets.module for values
 *
 * defaultCardHorizontalStyles
 * defaultCardVerticalOneStyles
 * defaultCardVerticalTwoStyles
 * defaultCardVerticalThreeStyles
 * defaultColorBoxStyles
 * defaultColumnsTwoStyles
 * defaultColumnsThreeStyles
 * defaultColumnsFourStyles
 *
 */
