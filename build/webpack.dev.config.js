var baseWebpackConfig = require('./webpack.base.config');
var merge = require('webpack-merge');
var path = require('path');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    host: 'zymfe.com',
    inline: true,
    port: 8080,
    progress: true,
    contentBase: resolve('dist'),
    compress: true,
    disableHostCheck: true
  }
});