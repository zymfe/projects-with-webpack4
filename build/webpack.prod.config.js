process.env.NODE_ENV = 'production';

const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('_clean-webpack-plugin@3.0.0@clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      // new UglifyjsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true
      // }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  plugins: [
    new webpack.BannerPlugin('created 2019/04/29 by zhaoyimig'),
    new webpack.DefinePlugin({
      MODE: JSON.stringify('prod')
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 100 // Minimum number of characters
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ]
});