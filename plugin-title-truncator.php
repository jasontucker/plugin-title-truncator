<?php
/*
Plugin Name: Plugin Title Truncator
Plugin URI: https://yourwebsite.com/plugin-title-truncator
Description: This plugin truncates plugin titles in the WordPress plugin directory to a maximum of 4 words.
Version: 1.0
Author: Your Name
Author URI: https://yourwebsite.com
License: GPLv2 or later
Text Domain: plugin-title-truncator
*/

function enqueue_truncate_plugin_titles_scripts() {
    if (current_user_can('install_plugins') && strpos($_SERVER['REQUEST_URI'], 'plugin-install.php') !== false) {
        wp_enqueue_script(
            'truncate-plugin-titles',
            plugin_dir_url(__FILE__) . 'assets/truncate-plugin-titles.js',
            array('jquery'),
            '1.0.0',
            true
        );
    }
}
add_action('admin_enqueue_scripts', 'enqueue_truncate_plugin_titles_scripts');
