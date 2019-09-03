const fs = require('fs');
const express = require('express');
const mime = require('mime/lite');


// Initialize router
const router = express.Router();

// external file for server configuration
const { LOG_LEVEL } = JSON.parse(fs.readFileSync('./server.config.json'));


// router logger
const logger = ({ url, filePath, mimeType }) => {
  console.log('\x1b[33m', '> URL request: ' + url, '\n\t - File path: ', filePath, '\n\t - File mime-type: ', mimeType, '\x1b[0m');
};


// common router handler
const commonHandler = (
  LOG_LEVEL === 'debug'
    ? ({ req, res, filePath }) => {
      const mimeType = mime.getType(filePath);

      logger({ url: req.url, filePath, mimeType });

      res.setHeader('Content-Type', mimeType);
      return res.sendFile('.' + filePath, { root: './' });
    }
    : ({ req, res, filePath }) => {
      const mimeType = mime.getType(filePath);

      res.setHeader('Content-Type', mimeType);
      return res.sendFile('.' + filePath, { root: './' });
    }
);


// handle files
router.get(/\.[^/]+$/, (req, res) => {
  const { url } = req;
  const filePath = url.replace(/\?.+$/, '');

  return commonHandler({ req, res, filePath });
});

// handler routes
router.get("/*", (req, res) => commonHandler({ req, res, filePath: '/index.html' }));


module.exports = { router };
