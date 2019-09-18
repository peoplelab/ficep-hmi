const mime = require('mime/lite');


// router logger
const logger = ({ url, filePath, mimeType }) => {
  console.table({ transaltion: { url, filePath, mimeType } });
};


// handler routes
const translations = ({ publicPath, LOG_LEVEL }) => (req, res) => {
  const { url } = req;
  const filePath = `/translations${url.replace(/\?.+$/, '')}`;
  const mimeType = mime.getType(filePath);

  if (LOG_LEVEL === 'debug') {
    logger({ url: `/translations${req.url}`, filePath, mimeType });
  }

  res.setHeader('Content-Type', mimeType);
  return res.sendFile('.' + filePath, { root: `${publicPath}` });
};


module.exports = { translations };
