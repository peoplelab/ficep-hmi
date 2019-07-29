const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const server = require('./main');


// retrive webpack configuration
const config = require('../webpack.config.js');
// retrive environment
const { COMPILE_ENV } = process.env;

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


// set dev server
const devServer = (app) => {
  app.use(devMiddleware);

  // add webpack hot reloading middleware
  app.use(webpackHotMiddleware(compiler));


  // retrive applicaiton entry point
  app.use((req, res) => {
    res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
  });
};


// run development server
server(devServer, { COMPILE_ENV });
