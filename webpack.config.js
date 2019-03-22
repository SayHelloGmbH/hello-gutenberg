const devMode = process.env.NODE_ENV !== 'production'

const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractSass = new MiniCssExtractPlugin({
	filename: '[name].min.css'
});

const uglifyJS = new UglifyJSPlugin();

module.exports = {
	entry: {
		blocks: path.resolve(__dirname, 'blocks/src/blocks'),
	},
	plugins: [
	uglifyJS,
	extractSass,
  ],
	optimization: {
		minimizer: [
	  uglifyJS,
	]
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'blocks/dist')
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
	  },
			{
				test: /\.scss$/,
				exclude: /(node_modules)/,
				use: [
		  MiniCssExtractPlugin.loader,
		  'css-loader',
		  'postcss-loader',
		  'sass-loader',
		]
	  }
	]
	},
	watchOptions: {
		poll: true,
		ignored: /node_modules/
	}
};