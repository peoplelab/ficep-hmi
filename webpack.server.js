const path = require('path');


const { COMPILE_ENV, URL_ENV } = process.env;

const pathOutput = (
  URL_ENV === 'MITROL'
  ? path.resolve(__dirname, './dist/server_dist')
  : path.resolve(__dirname, './build/server_dist')
);
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
    devtoolLineToLine: true,
    sourceMapFilename: 'server.js.map',
    pathinfo: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
  cache: false,
  mode: 'development',
  devtool,
  target: 'node',
};
