'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './browser/browser.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};
