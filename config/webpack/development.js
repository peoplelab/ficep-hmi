//----------------------------------------------------------------------------------------
// File: development.js
//
// Desc: File di configurazione di webpack per i rilasci in ambiente di sviluppo
// Path: /src/config/webpack/development
//----------------------------------------------------------------------------------------


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const { COMPILE_ENV, NODE_ENV } = process.env;

const devtool = COMPILE_ENV === 'PRODUCTION' ? 'eval-source-map' : 'inline-source-map';

const outputPath = NODE_ENV === 'DEVELOPMENT' ? '../../release/temp' : '../../release/build';


module.exports = {
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: 'scripts/bundle.js',
    chunkFilename: 'scripts/[name].js',
    devtoolLineToLine: true,
    sourceMapFilename: 'map/[name].js.map',
    pathinfo: true,
    publicPath: '/',
  },
  cache: false,
  mode: 'development',
  devtool,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images',
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
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css',
    }),
  ],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
};
