const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const outputPath = path.resolve(__dirname, 'build');

function genHtmlWebpackPlugin(chunksnames){
  let ret = [];
  for (let i in chunksnames) {
    let chunksname = chunksnames[i];
    ret[i] = new HtmlWebpackPlugin({
      title: `森思教学的${chunksname}页面`,
      filename: `page/${chunksname}/index.html`,
      template: `./src/page/${chunksname}/index.html`,
      minify: false,
      chunks: [`${chunksname}`],
    });
  }
  return ret;
}

function genEntry(chunksnames){
  let ret = {};
  for (let chunksname of chunksnames) {
    ret[chunksname] = `./src/page/${chunksname}/index.js`;
  }
  return ret;
}

//新增页面只需在此添加你的模块就好
let pages = ['index','login','user'];
entrys = genEntry(pages);
htmlWebpackPlugin = genHtmlWebpackPlugin(pages);



module.exports = {
  entry:genEntry(pages),
  output: {
    filename: 'page/[name]/index.b.js',
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
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'page/[name]/[name].css',
    }),  //打包后的文件名
    ...htmlWebpackPlugin,
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ],
    }),
  ],
};