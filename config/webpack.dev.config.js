const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loaders: 'babel'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Basic Webpack and Babel'
    })
  ]
};
