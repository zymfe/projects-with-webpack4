const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader')

function resolve(dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = {
  entry: resolve('src/main.js'),
  output: {
    filename: 'static/js/[name].js',
    path: resolve('dist/'),
    publicPath: process.env.NODE_ENV === 'production' ?
      '/vue-admin/' :
      '/'
  },
  resolve: {
    alias: {
      "@": resolve('src'),
      "static": resolve('static')
    },
    extensions: ['.js', '.vue', '.ejs', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'css/app.[contenthash:8].css'
    }),
    // https://vue-loader.vuejs.org/zh/migrating.html#loader-%E6%8E%A8%E5%AF%BC
    new VueLoaderPlugin()
  ],
  module: {
    noParse: /jquery/,
    rules: [{
        test: /\.less$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
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
        use: [{
            loader: 'vue-loader',
            options: {
              extractCSS: true
            }
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        include: [resolve('static'), resolve('src')],
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [ 
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime',
              ["import", {
                "libraryName": "iview",
                "libraryDirectory": "src/components"
              }]
            ]
          }
        }]
      }
    ]
  }
}
