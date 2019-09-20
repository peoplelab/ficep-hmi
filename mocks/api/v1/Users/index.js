const { base } = require('../../../mock.base');
const responseJSON = require('./response.json');


module.exports = {
  GET: base(
    (req, res) => responseJSON[req.params.id - 1]
  )
};
