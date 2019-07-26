const fs = require('fs');
const mime = require('mime/lite');
const compression = require('compression');
const server = require('./main');


// handle routes
const routesHandler = (req, res, next) => {
  console.log('> URL route: ', req.url);

  res.end(fs.readFileSync('../client_dist/index.html'));

  next();
};

// handle files
const filesHandler = function(req, res, next) {
  console.log('> URL request: ', req.url);

  const mimeType = mime.getType(req.url);

  res.header('Content-Type', mimeType);
  // res.header('Content-Security-Policy', 'default-src \'self\'');
  res.end(fs.readFileSync('../client_dist' + req.url));

  next();
};


const prodServer = (app) => {
  // enable gzip compression
  app.use(compression());

  // handle routes
  app.get(/^(\/[A-Za-z-/]*)*$/, routesHandler);

  // handle files
  app.get(/\..+$/, filesHandler);
};


// run production server
server(prodServer);
