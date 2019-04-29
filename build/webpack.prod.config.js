const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

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
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: resolve('static'), to: resolve('dist/static') }
    ]),
    new webpack.BannerPlugin('created 2019/04/29 by zhaoyimig')
  ]
});