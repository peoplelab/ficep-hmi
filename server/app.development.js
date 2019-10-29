//--------------------------------------------------------------------------------------------------------------
// File: app.development.js
//
// Desc: File di configurazione del server dell'applicativo per l'emulazione dell'ambiente di sviluppo in locale
// Path: /src/server/app.development
//--------------------------------------------------------------------------------------------------------------


const path = require('path');
const express = require('express');
const { proxyMiddleware } = require('./app/app.proxy');
const { devMiddleware, hotMiddleware, entryPointMiddleware } = require('./app/app.webpack');
const { translations } = require('./app/app.translations');


const { URL_ENV, COMPILE_ENV } = process.env;

// server configuration object
const SERVER_CONFIG = {
  PORT: 3500,
  URL: URL_ENV === 'MITROL' ? 'http://172.30.57.26:4000' : 'http://localhost:4000',
  LOG_LEVEL: 'debug',
};


// init node server
const app = express();

// Return as response the translations JSON file required
app.use('/translations', translations({
  publicPath: path.resolve(__dirname, '../public'),
  LOG_LEVEL: SERVER_CONFIG.LOG_LEVEL
}));

// Return CONFIG.JSON file
app.use('/config.json', (req, res) => { 
    const publicPath = path.resolve(__dirname, '../public');
    res.sendFile('./config.json', { root: `${publicPath}` });
});


// start proxy handler
app.use('/api', proxyMiddleware({ route: '/api', ...SERVER_CONFIG }));


// add webpack integration into express server
app.use(devMiddleware);

// add webpack hot reloading middleware
app.use(hotMiddleware);

// retrive applicaiton entry point
app.use(entryPointMiddleware);


// start server ...
var server = app.listen(SERVER_CONFIG.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.group('SERVER NODE');
  console.table({
    server: {
      Host: (host === '::') ? 'localhost' : host,
      Port: port,
      Environment: COMPILE_ENV
    }
  });
  console.groupEnd();
});
