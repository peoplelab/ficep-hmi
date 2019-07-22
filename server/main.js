const path = require('path');
const express = require('express');
const compression = require('compression');
const proxy = require('http-proxy-middleware');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// retrive proxy configuraiton
const proxyConfig = require('./proxy.json');

// retrive webpack configuration
const config = require('../webpack.config.js');


// retrive environment
const { NODE_ENV } = process.env;

// localhost server port
const PORT = 3500;

// defined folder where save files on server start
const contentBase = (NODE_ENV === 'STAGING' || NODE_ENV === 'SYSTEM') ? './dist' : './build';

// add configured webpack compiler
const compiler = webpack(config);

// init node server
const app = express();


// enable gzip compression
app.use(compression());

// services proxy
const proxyInst = proxy(['/api'], proxyConfig[NODE_ENV] || proxyConfig.MOCKS); // dev dsi
app.use(proxyInst);

// configure add webpack middleware to integrate webpack with express
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase,
  hot: true,
  noInfo: true,
  lazy: false,
});
app.use(devMiddleware);

// add webpack hot reloading middleware
app.use(webpackHotMiddleware(compiler));

// retrive applicaiton entry point
app.use((req, res) => {
  res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
});


app.listen(PORT);
