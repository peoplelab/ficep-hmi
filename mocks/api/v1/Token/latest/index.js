const responseJSON = require('./response.json');

module.exports = {
  POST: (req, res) => {
    res.status(200).json(responseJSON);
  }
};
