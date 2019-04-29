const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    inline: false,
    port: 80,
    progress: true,
    contentBase: resolve('./'),
    compress: true,
    disableHostCheck: true,
    proxy: {
      "/sdk/static": {
        target: 'http://localhost',
        pathRewrite: {'^/sdk/static' : '/static'},
        changeOrigin: true
      }
    }
  }
});