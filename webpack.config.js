const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    index: './src/page/index/index.js',
    login: './src/page/login/index.js',
  },
  output: {
    filename: 'page/[name]/index.b.js',
    path: outputPath,
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader']
  //     },
  //     {
  //       test: /\.less$/,
  //       use: ['style-loader','css-loader', 'less-loader'],
  //     },
  //   ],
  // },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'page/[name]/[name].css',
    }),  //打包后的文件名
    new HtmlWebpackPlugin({
      title: '森思教学的indx页面',
      filename: 'page/index/index.html',
      template: './src/page/index/index.html',
      minify: false,
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: '森思教学的login页面',
      filename: 'page/login/index.html',
      template: './src/page/login/index.html',
      minify: false,
      chunks: ['login'],
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ],
    }),
  ],

};