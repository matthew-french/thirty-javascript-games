const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const config = {
  entry: {
    home: './src/index.js',
    drumkit: './src/drumkit'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist'),
    chunkFilename: '[id].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|wav|scss)$/,
        loader: 'file-loader',
        options: {
          name: '/assets/[name].[ext]'
        }
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader'
        })
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.wav','.js','.scss']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('[name].css')
  ]
}

module.exports = config;
