const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const { COMPILE_ENV, URL_ENV } = process.env;

const pathOutput = (
  URL_ENV === 'MITROL'
  ? path.resolve(__dirname, '../../dist/client_dist')
  : path.resolve(__dirname, '../../build/client_dist')
);

const devtool = COMPILE_ENV === 'PRODUCTION' ? 'source-map' : 'inline-source-map';


module.exports = {
  output: {
    path: pathOutput,
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/',
  },
  mode: 'production',
  devtool,
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
      title: 'Mitrol',
    }),
  ],
};
