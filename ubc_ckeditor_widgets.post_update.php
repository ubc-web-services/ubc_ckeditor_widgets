<?php

/**
 * Copy theme color settings into ubc_ckeditor_widgets if empty and log changes.
 */
/**
 * Implements hook_post_update_NAME().
 */
function ubc_ckeditor_widgets_post_update_copy_color_settings(&$sandbox = null)
{
    $config_factory = \Drupal::configFactory();
    $logger = \Drupal::logger('mymodule');

    // Load CKEditor widgets settings (editable).
    $ckeditor_config = $config_factory->getEditable('ubc_ckeditor_widgets.settings');

    // CKEditor → Theme key mapping.
    $color_map = [
        'primary_color' => 'clf_theme_unit_colour',
        'secondary_color' => 'clf_theme_secondary_colour',
        'tertiary_color' => 'clf_theme_tertiary_colour',
        'accent_color' => 'clf_theme_accent_colour',
    ];

    $changed = false;
    $changes = [];

    // Get default theme.
    $default_theme = $config_factory->get('system.theme')->get('default');

    if (empty($default_theme)) {
        return t('No default theme found.');
    }

    // Load theme settings.
    $theme_settings = $config_factory->get("$default_theme.settings");

    // Loop and update missing colors.
    foreach ($color_map as $ckeditor_key => $theme_key) {
        $ckeditor_value = $ckeditor_config->get($ckeditor_key);

        if (empty($ckeditor_value)) {
            $theme_value = $theme_settings->get($theme_key);

            if (!empty($theme_value)) {
                $ckeditor_config->set($ckeditor_key, $theme_value);
                $changed = true;
                $changes[$ckeditor_key] = $theme_value;

                // Log individual change.
                $logger->notice(
                    'Set %ckeditor_key to %value from theme setting %theme_key.',
                    [
                        '%ckeditor_key' => $ckeditor_key,
                        '%value' => $theme_value,
                        '%theme_key' => $theme_key,
                    ]
                );
            }
        }
    }

    if ($changed) {
        // Save config.
        $ckeditor_config->save();

        // Return summary for update report.
        return t(
            'Updated CKEditor widget colors: @list', [
            '@list' => implode(', ', array_keys($changes)),
            ]
        );
    }

    return t('No CKEditor widget color settings required updating.');
}