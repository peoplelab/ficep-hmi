const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
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
      minify: false,
      template: './src/index.html',
      title: 'React example',
    }),
  ],
};
