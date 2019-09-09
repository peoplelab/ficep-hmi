//----------------------------------------------------------------------------------------
// File: production.js
//
// Desc: File di configurazione di webpack per i rilasci in produzione
// Path: /src/config/webpack/production
//----------------------------------------------------------------------------------------


const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const { COMPILE_ENV } = process.env;

const devtool = COMPILE_ENV === 'PRODUCTION' ? 'source-map' : 'inline-source-map';


module.exports = {
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../release/dist'),
    filename: 'scripts/[hash].js',
    chunkFilename: 'scripts/[chunkhash].js',
    sourceMapFilename: 'map/[chunkhash].js.map',
    publicPath: '/',
  },
  mode: 'production',
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
              name: '[contenthash].[ext]',
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
      hash: true,
      minify: true,
      template: './public/index.html',
      title: 'Mitrol',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css',
      chunkFilename: 'styles/[id].[contenthash].css',
    }),
  ],
};
