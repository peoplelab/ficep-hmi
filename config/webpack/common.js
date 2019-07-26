const { HotModuleReplacementPlugin } = require('webpack');
const globalVars = require('../globals/client');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const { COMPILE_ENV } = process.env;

const entry = COMPILE_ENV === 'PRODUCTION' ? ['./src/index.js'] : ['./src/index.js', 'webpack-hot-middleware/client'];


module.exports = {
  entry,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `${packageName.replace('@', '')}.npm`;
          },
        },
      },
    },
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
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    globalVars,
  ],
  resolve: {
    extensions: ['.js', '.jsx', 'json', 'scss', 'css'],
  },
};
