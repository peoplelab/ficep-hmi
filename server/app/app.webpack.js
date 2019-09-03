const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


// retrive webpack configuration
const config = require('../../webpack.config.js');

// defined folder where save files on server start
const contentBase = 'temp';

// add configured webpack compiler
const compiler = webpack(config);


// configure add webpack middleware to integrate webpack with express
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase,
  hot: true,
  noInfo: true,
  lazy: false,
});

// configure webpack hot middleware to integrate hot reloading in express
const hotMiddleware = webpackHotMiddleware(compiler);

// retrive applicaiton entry point
const entryPointMiddleware = (req, res) => {
  res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
};


module.exports = {
  devMiddleware,
  hotMiddleware,
  entryPointMiddleware,
};
