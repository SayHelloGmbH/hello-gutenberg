<?php
/**
 * Plugin Name: Say Hello Gutenberg Block Plugin
 * Plugin URI: #
 * Description: Example plugin for the registration of one or more Blocks for the Gutenberg editor.
 * Author: Say Hello GmbH
 * Author URI: https://sayhello.ch/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
	exit;
}

add_action('init', function () {
	register_block_type('sayhellogmbh/hello-gutenberg-roots', [
		'render_callback' => 'sayhellogmbh-hello-gutenberg-roots',
	]);
});

add_action('enqueue_block_editor_assets', function () {
	wp_enqueue_script(
		'sayhellogmbh/hello-gutenberg-roots',
		plugins_url('blocks/dist/blocks.js', __FILE__),
		['wp-blocks', 'wp-element']
	);
});
