const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const { COMPILE_ENV } = process.env;

const devtool = COMPILE_ENV === 'PRODUCTION' ? 'eval-source-map' : 'inline-source-map';


module.exports = {
  output: {
    path: path.resolve(__dirname, '../../temp/client_dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    devtoolLineToLine: true,
    sourceMapFilename: '[name].js.map',
    pathinfo: true,
    publicPath: '/',
  },
  cache: false,
  mode: 'development',
  devtool,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      filename: 'index.html',
      inject: true,
      template: './public/index.html',
      title: 'Mitrol',
    }),
  ],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
};
