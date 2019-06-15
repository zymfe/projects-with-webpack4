const path = require('path');
const resolve = dir => path.resolve(__dirname, '../', dir);

module.exports = {
  build: {
    assetsRoot: resolve('dist'),
    index: resolve('index.html'),
    assetsPublicPath: '/vue-admin/',
    assetsSubDirectory: 'static'
  },
  dev: {
    // 与本地配 host 方式相同，无需加 http 或 https
    host: 'localhost',
    port: 8080,
    assetsPublicPath: '/'
  }
};