const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const config = require('../config/index');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = {
  entry: resolve('src/main.js'),
  output: {
    filename: 'static/js/[name].js',
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' 
      ? config.build.assetsPublicPath 
      : config.dev.assetsPublicPath
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'static': resolve('static')
    },
    extensions: ['.js', '.vue', 'less', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].css'
    }),
    // https://vue-loader.vuejs.org/zh/migrating.html#loader-%E6%8E%A8%E5%AF%BC
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              extractCSS: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('static')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ],
              plugins: [ 
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
                ["component", {
                  "libraryName": "element-ui",
                  "styleLibraryName": "theme-chalk"
                }]
              ]
            }
          }
        ]
      }
    ]
  }
}
