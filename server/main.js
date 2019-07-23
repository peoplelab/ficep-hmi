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


//// enable gzip compression
//app.use(compression());


/// proxy handler (logging requests)
var proxyOpts = {

    target: proxyConfig[NODE_ENV].target,

    onProxyReq: function onProxyReq(proxyReq, req, res) {
        console.log('--> PROXYING ', req.method, req.path, '->', proxyOpts.target + proxyReq.path);
    },
    //onError: function onError(err, req, res) {
    //    console.error(err);
    //    res.status(500);
    //    res.json({ error: 'Error when connecting to remote server.' });
    //},
    logLevel: 'debug',
    changeOrigin: true,
    secure: true
};
const proxyInst = proxy(proxyOpts); // dev dsi
app.use('/api', proxyInst);
// end proxy handler

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




// start server ...
var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('SERVER NODE: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
    console.log('SERVER NODE: -> Environment ' + NODE_ENV);
});