const responseJSON = require('./response.json');

module.exports = {
  GET: (req, res) => {
    res.status(200).json(responseJSON);
  },
};
