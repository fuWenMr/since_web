const path = require('path');

const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: outputPath,
  },

};