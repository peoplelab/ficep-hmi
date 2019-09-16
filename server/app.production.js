//---------------------------------------------------------------------------------------------
// File: app.production.js
//
// Desc: File di configurazione del server dell'applicativo per il rilascio in produzione
// Path: /src/server/app.production
//---------------------------------------------------------------------------------------------


const fs = require('fs');
const express = require('express');
const compression = require('compression');
const { proxyMiddleware } = require('./app/app.proxy');
const { router } = require('./app/app.router');
const { translations } = require('./app/app.translations');


const { LOG_LEVEL } = process.env;

// external file for server configuration
const SERVER_CONFIG = JSON.parse(fs.readFileSync('./server.config.json'));


// init node server
const app = express();


// enable gzip compression
app.use(compression());


// Return as response the translations JSON file required
app.use('/translations', translations({ publicPath: './', LOG_LEVEL }));


// start proxy handler
app.use('/api', proxyMiddleware({ route: '/api', ...SERVER_CONFIG }));


// run router handler
app.use('/', router);


// start server ...
var server = app.listen(SERVER_CONFIG.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('SERVER NODE: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
  console.log('SERVER NODE: -> Environment ' + COMPILE_ENV);
});
