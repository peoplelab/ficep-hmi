/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const bodyParser = require('body-parser');
const mocks = require('../mocks');


const PORT = 4000;
const app = express();

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

mocks(app);

app.listen(PORT);
