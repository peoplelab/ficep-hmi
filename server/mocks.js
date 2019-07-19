const express = require('express');
const bodyParser = require('body-parser');
const mocks = require('../mocks');


// localhost server port
const PORT = 4000;

// init node server
const app = express();


// configure and run requests body parser
const OPTIONS = {
  URL: { extended: false },
  JSON: {
    extended: true,
    strict: false,
    type: 'application/json',
  }
};
app.use(bodyParser.urlencoded(OPTIONS.URL))
app.use(bodyParser.json(OPTIONS.JSON));


// inject app server to maock handler and run run mocks
mocks(app);


// run application on http
app.listen(PORT);
