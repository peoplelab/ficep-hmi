//----------------------------------------------------------------------------------------
// File: webpack.mocks.js
//
// Desc: Entry point del file di configurazione di webpack del server mock
// Path: /src/webpack.mocks
//----------------------------------------------------------------------------------------



const path = require('path');
const globalVars = require('./config/global/mocks');
const { ServerConfig } = require('./config/plugin/webpack.externals');


const config = {
  "PORT": 4000,
  "LOG_LEVEL": "debug"
};


module.exports = {
  entry: './server/mocks.release.js',
  output: {
    path: path.resolve(__dirname, './release/mocks'),
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
    globalVars,
    new ServerConfig(ServerConfig.target.mocks, config),
  ],
  resolve: {
    extensions: ['.js', 'json'],
  },
  cache: false,
  mode: 'production',
  devtool: 'inline-source-map',
  target: 'node',
};
