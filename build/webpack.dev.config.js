const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const path = require('path');
const fs = require('fs');
const devConfig = require('../config/index').dev;

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    host: devConfig.host,
    inline: false,
    port: devConfig.port,
    progress: true,
    contentBase: resolve('./'),
    compress: true,
    disableHostCheck: true,
    // https: {
    //   key: fs.readFileSync(resolve('./build/ssl/key.pem')),
    //   cert: fs.readFileSync(resolve('./build/ssl/crt.pem'))
    // },
    // https://www.webpackjs.com/configuration/dev-server/#devserver-historyapifallback
    historyApiFallback: true,
    proxy: {
      '/api': 'http://127.0.0.1:8091',
      '/app': {
        target: 'http://127.0.0.1:8091',
        pathRewrite: {
          '/app': ''
        }
      },
      "/sdk/static": {
        target: 'http://127.0.0.1',
        pathRewrite: {'^/sdk/static' : '/static'},
        changeOrigin: true
      }
    }
  }
});