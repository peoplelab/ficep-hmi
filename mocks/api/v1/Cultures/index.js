const responseJSON = require('./response.json');
const { base } = require('../../../mock.base');

module.exports = {
  GET: (req, res) => {
    res.status(200).json(responseJSON.GET);
  },
  POST: base(
    () => 25
  ),
  DELETE: base(
    req => req.params.id > 6
  ),
  PUT: base(
    req => parseInt(req.body.id) <= 6
  )
};
