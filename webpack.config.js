const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.min.js',
    library: 'EasyTree',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
};