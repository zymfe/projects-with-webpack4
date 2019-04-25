const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    progress: true,
    contentBase: resolve('dist'),
    compress: true
  }
});