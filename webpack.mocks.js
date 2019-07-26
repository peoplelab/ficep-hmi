const path = require('path');
const globalVars = require('./config/globals/server');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: './server/mocks.js',
  output: {
    path: path.resolve(__dirname, './build/server_mocks'),
    filename: 'mocks.js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: true,
        },
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    globalVars
  ],
  resolve: {
    extensions: ['.js', 'json'],
  },
  cache: false,
  mode: 'production',
  devtool: 'inline-source-map',
  target: 'node',
};
