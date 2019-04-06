const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    port: 3000,
    hot: true,
    open: true,
    watchContentBase: true,
    historyApiFallback: true
  }
});
