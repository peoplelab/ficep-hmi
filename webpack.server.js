const path = require('path');
const globalVars = require('./config/globals/server');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const { URL_ENV } = process.env;

let pathOutput;
let devtool;
let mode;

if (URL_ENV === 'MITROL') {
  pathOutput = path.resolve(__dirname, './dist/server_dist');
  devtool = 'source-map';
  mode = 'production';
} else {
  pathOutput = path.resolve(__dirname, './build/server_dist');
  devtool = 'inline-source-map';
  mode = 'development';
}


module.exports = {
  entry: ['./server/production.js'],
  output: {
    path: pathOutput,
    filename: 'server.js',
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
  mode,
  devtool,
  target: 'node',
};
