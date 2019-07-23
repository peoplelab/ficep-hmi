const responseJSON = require('./response.json');

module.exports = {
  GET: (req, res) => {
    res.status(200).json(responseJSON.GET);
  },
  POST: (req, res) => {
    res.status(200).json(25);
  },
  PUT: (req, res) => {
    res.status(200).json(true);
  }
};
