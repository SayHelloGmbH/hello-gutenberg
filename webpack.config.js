const devMode = process.env.NODE_ENV !== 'production'

const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: '[name].min.css',
});

module.exports = {
  entry: {
    block: path.resolve(__dirname, 'blocks/src/block'),
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        warnings: false,
        parse: {},
        compress: {},
        // mangle: true,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_fnames: false,
      },
    }),
    extractSass
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'blocks/dist')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
};
