var baseWebpackConfig = require('./webpack.base.config');
var merge = require('webpack-merge');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin()
    ]
  }
});