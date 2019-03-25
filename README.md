# Gutenberg Block Plugin Starter

This plugin is provided as an example of registering a custom Block for the WordPress Block Editor, code named “Gutenberg”.

Install it in the usual way and it's ready to go with a simple random image generator, which pulls an image from lorempixel.com according to the category selected in the interface.

## Premise

- Register one or more individual Blocks in the main plugin.php file.
- Add a subfolder in _blocks/src/_ containing _block.js_ or _block.jsx_ and _block.scss_.
- `import` the block.js file via _blocks/blocks.js_.
- Webpack will parse this file, separate out the JavaScript and SCSS, and save a single JS with a single CSS file in the _blocks/dist_ folder for all of your blocks. These two files are alredy registered (and hence enqueued) in the backend and frontend appropriately.

## Development

To make edits to the plugin, first add the NPM dependencies using `npm install`. Then…

- Calling `npm run dev` will watch JS files in _src/blocks_ and compile them using Webpack.
- Calling `npm run build` will build the _dist_ scripts for the production environment.
- Calling `npm run watch` will watch the _src_ scripts and build the dist scripts for the development environment when the code is changed. This process matches the code with the current hashed version, and **will not** rebuild the _dist_ scripts if there are no changes.
- Alternatively, you can use [npx](https://flaviocopes.com/npx/) - `npx webpack -d --watch` (development code) or `npx webpack -p` (production-ready code). If you choose the production-ready version, the JavaScript and CSS will be minified, with whitespace removed.

## Translations

The plugin is translation-ready - in PHP and JavaScript - using usual `gettext` functions and the domain `hello-gutenberg-roots`.

However, the essential JSON file, which provides the translations to the backend editor, cannot currently be generated. A fix for this is pending with the WP CLI team.

## Author

[Say Hello GmbH, Spiez, Switzerland](https://sayhello.ch/) with thanks to [Zac Gordon](https://github.com/zgordon/how-to-gutenberg-plugin), on whose work this starter is based.
