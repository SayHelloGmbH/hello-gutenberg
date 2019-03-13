<?php
/**
 * Plugin Name: Say Hello - Gutenberg Block Collection
 * Plugin URI: https://github.com/SayHelloGmbH/hello-gutenberg
 * Description: This plugin registers one or more Blocks for the WordPress Gutenberg Editor.
 * Author: Say Hello GmbH
 * Author URI: https://sayhello.ch/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: hello-gutenberg-roots
 * Domain Path: /languages
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
	exit;
}

add_action('init', function () {

	if (! function_exists('register_block_type')) {
		// Gutenberg is not active.
		return;
	}

	load_plugin_textdomain('hello-gutenberg-roots', false, basename(dirname(__FILE__)) . '/languages');

	register_block_type('sayhellogmbh/random-image');
	register_block_type('sayhellogmbh/teaser');
});

add_action('enqueue_block_editor_assets', function () {
	wp_enqueue_script(
		'sayhellogmbh/hello-gutenberg-roots',
		plugins_url('blocks/dist/blocks.min.js', __FILE__),
		['wp-blocks', 'wp-element']
	);

	if (file_exists(plugin_dir_path(__FILE__) . 'blocks/dist/blocks.min.css')) {
		wp_enqueue_style(
			'hello-gutenberg-roots',
			plugins_url('blocks/dist/blocks.min.css', __FILE__),
			['wp-edit-blocks'],
			filemtime(plugin_dir_path(__FILE__) . 'blocks/dist/blocks.min.css')
		);
	}
});

add_action('wp_enqueue_scripts', function () {

	wp_enqueue_style(
		'hello-gutenberg-roots',
		plugins_url('blocks/dist/blocks.min.css', __FILE__),
		[],
		null
	);
});
