<?php
/**
 * Plugin Name: Say Hello - Gutenberg Block Collection
 * Plugin URI: https://github.com/SayHelloGmbH/hello-gutenberg
 * Description: This plugin registers one or more Blocks for the WordPress Gutenberg Editor.
 * Author: Say Hello GmbH
 * Author URI: https://sayhello.ch/
 * Version: 1.0.1
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

// register_block_type('sayhellogmbh/random-image');
	register_block_type('sayhellogmbh/teaser');
	register_block_type('sayhellogmbh/call-to-action');
	register_block_type('sayhellogmbh/prefill-example');
});

add_action('enqueue_block_editor_assets', function () {
	wp_enqueue_script(
		'sayhellogmbh/hello-gutenberg-roots',
		plugins_url('blocks/dist/blocks.min.js', __FILE__),
		[ 'wp-blocks', 'wp-element', 'wp-edit-post', 'lodash' ]
	);

	if (file_exists(plugin_dir_path(__FILE__) . 'blocks/dist/blocks.min.css')) {
		wp_enqueue_style(
			'hello-gutenberg-roots',
			plugins_url('blocks/dist/blocks.min.css', __FILE__),
			[ 'wp-edit-blocks' ],
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

add_filter('block_categories', function ($categories, $post) {
	if ($post->post_type !== 'post' && $post->post_type !== 'page') {
		return $categories;
	}
	return array_merge(
		$categories,
		[
		[
		'slug'  => 'hello-gutenberg-roots',
		'title' => __('Gutenberg Blocks by Say Hello', 'hello-gutenberg-roots'),
		//'icon'  => 'wordpress',
		],
		]
	);
}, 10, 2);

add_action('init', function () {
	register_meta(
		'post',
		'sidebar_plugin_meta_block_field',
		array(
		'show_in_rest' => true,
		'single'       => true,
		'type'         => 'string',
		)
	);
	register_meta(
		'page',
		'sidebar_plugin_meta_block_field',
		array(
		'show_in_rest' => true,
		'single'       => true,
		'type'         => 'string',
		)
	);
});
