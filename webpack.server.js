const path = require('path');
const globalVars = require('./config/globals/server');
const { ServerConfig } = require('./config/plugin/webpack.externals');


const { COMPILE_ENV } = process.env;

const config = {
  "PORT": 3500,
  "URL": COMPILE_ENV === 'PRODUCTION' ? 'http://192.168.11.40:4000' : 'http://localhost:4000',
  "LOG_LEVEL": "debug"
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
  entry: ['./server/production.js'],
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
