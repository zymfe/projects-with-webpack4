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
    inline: true,
    port: devConfig.port,
    open: true,
    progress: true,
    contentBase: resolve('dist'),
    compress: true,
    disableHostCheck: true,
    // https: {
    //   key: fs.readFileSync(resolve('./build/ssl/key.pem')),
    //   cert: fs.readFileSync(resolve('./build/ssl/crt.pem'))
    // },
    // https://www.webpackjs.com/configuration/dev-server/#devserver-historyapifallback
    historyApiFallback: true,
    proxy: {
      '/webpack4-vue-mobile/': {
        target: 'http://localhost:8080',  // 接口的域名
        secure: false,                    // 如果是https接口，需要配置这个参数
        changeOrigin: true,               // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {"^/webpack4-vue-mobile/" : "/"},
        proxyTimeout: 1000 * 10
      }
    }
  }
});