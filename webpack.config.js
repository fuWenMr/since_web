const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: outputPath,
  },

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
    new ExtractTextPlugin('styles.css'),  //打包后的文件名
    new HtmlWebpackPlugin({
      title: '森思教学',
      minify: false,
    }),
  ],

};