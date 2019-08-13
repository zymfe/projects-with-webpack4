const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const path = require('path');
const buildConfig = require('../config/index').build;

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

const fillZero = num => num >= 10 ? num : ('0'+num);
const date = new Date();
const time =  date.getFullYear() + '/' + (fillZero(date.getMonth() + 1)) + '/' + fillZero(date.getDate());

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      }),
      new OptimizeCssAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        "vender": {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { 
        from: resolve(__dirname, 'static'),
        to: buildConfig.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new webpack.BannerPlugin(`created ${time} by zhaoyiming`),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 100
    }),
    new ManifestPlugin()
  ]
});