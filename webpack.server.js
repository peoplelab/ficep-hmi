const path = require('path');
const globalVars = require('./config/globals/server');


const { COMPILE_ENV, URL_ENV } = process.env;

let pathOutput;
if (COMPILE_ENV === 'DEVELOPMENT') { // COMPILE_ENV === DEVELOPMENT && URL_ENV === 'MITROL' || URL_ENV === 'MOCKS')
  pathOutput = path.resolve(__dirname, './temp/server_dist');
} else if (URL_ENV === 'MITROL') { // COMPILE_ENV === PRODUCTION && URL_ENV === 'MITROL'
  pathOutput = path.resolve(__dirname, './dist/server_dist');
} else { // COMPILE_ENV === PRODUCTION && URL_ENV === 'MOCKS'
  pathOutput = path.resolve(__dirname, './build/server_dist');
}

const devtool = (
  COMPILE_ENV === 'PRODUCTION'
  ? 'source-map'
  : 'inline-source-map'
);


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
  plugins: [globalVars],
  resolve: {
    extensions: ['.js', 'json'],
  },
  cache: false,
  mode: 'development',
  // mode: 'production',
  devtool,
  target: 'node',
};
