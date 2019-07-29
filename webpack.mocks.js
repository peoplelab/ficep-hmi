const path = require('path');
const globalVars = require('./config/globals/mocks');
const { ServerConfig } = require('./config/plugin/webpack.externals');


const config = {
  "PORT": 4000,
  "LOG_LEVEL": "debug"
};


module.exports = {
  entry: './server/mocks.js',
  output: {
    path: path.resolve(__dirname, './build/mocks'),
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
