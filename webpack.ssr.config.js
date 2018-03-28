const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

var BUILD_DIR = path.resolve(__dirname, './ssr');
var APP_DIR = path.resolve(__dirname, './public');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: BUILD_DIR,
    filename: 'ssr-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};