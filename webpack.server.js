const path = require('path');
const globalVars = require('./config/globals/server');


const { URL_ENV } = process.env;

let pathOutput;
let devtool;
let mode;

if (URL_ENV === 'MITROL') {
  pathOutput = path.resolve(__dirname, './dist');
  devtool = 'source-map';
  mode = 'production';
} else {
  pathOutput = path.resolve(__dirname, './build/app');
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
