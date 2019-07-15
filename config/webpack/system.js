const prodConfig = require('./production');


module.exports = {
  ...prodConfig,
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],
  devtool: 'source-map',
};
