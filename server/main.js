const path = require('path');
const express = require('express');
const http = require('http');
const compression = require('compression');
const proxy = require('http-proxy-middleware');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const proxyConfig = require('./proxy.json');
const config = require('../webpack.config.js');


const { NODE_ENV } = process.env;

const PORT = 3500;

const contentBase = (NODE_ENV === 'STAGING' || NODE_ENV === 'SYSTEM') ? './dist' : './build';

const compiler = webpack(config);

const app = express();


// enable gzip compression
app.use(compression());

// services proxy
const proxyInst = proxy(['/api'], proxyConfig[NODE_ENV] || proxyConfig.MOCKS); // dev dsi
app.use(proxyInst);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase,
  hot: true,
  noInfo: true,
  lazy: false,
});
app.use(devMiddleware);

app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
  res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
});

if (NODE_ENV === 'MOCKS') {
    app.listen(PORT);
} else {
    http.createServer(app).listen(PORT);
}
