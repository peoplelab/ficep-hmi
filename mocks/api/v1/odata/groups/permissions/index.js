const { base } = require('../../../../../mock.base');
const responseJSON = require('./response.json');

module.exports = {
  GET: base(
    (req, res) => req.params.id >= 4 ? responseJSON[4] : responseJSON[req.params.id],
  ),
};
