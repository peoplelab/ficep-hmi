const responseJSON = require('./response.json');

module.exports = {
  PUT: (req, res) => {
    res.status(200).json(responseJSON);
  },
};
