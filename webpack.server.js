//----------------------------------------------------------------------------------------
// File: webpack.server.js
//
// Desc: Entry point del file di configurazione di webpack per l'applicativo lato server
// Path: /src/webpack.server
//----------------------------------------------------------------------------------------


const path = require('path');
const globalVars = require('./config/global/server');
const { ServerConfig } = require('./config/plugin/webpack.externals');


const { COMPILE_ENV } = process.env;

const config = {
  "PORT": 3500,
  "URL": COMPILE_ENV === 'PRODUCTION' ? 'http://172.30.57.26:4000' : 'http://localhost:4000',
  "LOG_LEVEL": 'debug', // COMPILE_ENV === 'PRODUCTION' ? 'none' : 'debug'
};

let devtool;
let mode;
let outputPath;

if (COMPILE_ENV === 'PRODUCTION') {
  outputPath = './release/dist';
  devtool = 'source-map';
  mode = 'production';
} else {
  outputPath = './release/build';
  devtool = 'inline-source-map';
  mode = 'development';
}


module.exports = {
  entry: ['./server/app.production.js'],
  output: {
    path: path.resolve(__dirname, outputPath),
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
    globalVars,
    new ServerConfig(ServerConfig.target.app, config),
  ],
  resolve: {
    extensions: ['.js', 'json'],
  },
  cache: false,
  mode,
  devtool,
  target: 'node',
};
