const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = {
  entry: resolve('src/page/index.js'),
  output: {
    filename: '[name].js',
    path: resolve('dist/')
  },
  resolve: {
    alias: {
      "@": resolve('src'),
      "static": resolve('static')
    },
    extensions: ['.js', '.ejs', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
  ],
  module: {
    noParse: /jquery/,
    rules: [
      {
        test: /\.less$/,
        use: [
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
        test: /\.ejs$/,
        use: [
          'ejs-loader'
        ]
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use: ['url-loader']
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:[{
          loader:'file-loader',
          options:{
            name:'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
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
              ]
            }
          }
        ]
      }
    ]
  }
}