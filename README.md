# Gutenberg Block Plugin Starter

This plugin is provided as an example of registering a custom Block for the WordPress Block Editor, code named “Gutenberg”.

*THIS PLUGIN AND README IS NOT YET CORRECT OR COMPLETE.*

## Development

To make edits to the plugin, first add the NMP dependencies using ``npm install``. Then…

* Calling ``npm run dev`` will watch JS files in _src/blocks_ and compile them using Webpack.
* Calling ``npm run build`` will build the dist scripts for the production environment.

## Adding a new Block

* Add a Block script to the _src/blocks_ folder and import it via _src/blocks/index.js_.
* Run the dev script during development. Then run the build script when you're done.

## Author

[Say Hello GmbH, Spiez, Switzerland](https://sayhello.ch/) with thanks to [Zac Gordon](https://github.com/zgordon/how-to-gutenberg-plugin), on whose work this starter is based.