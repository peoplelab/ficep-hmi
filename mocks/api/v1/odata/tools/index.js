const { base } = require('../../../../mock.base');
const responseJSON = require('./response.json');


module.exports = {
  GET: base(
    (req, res) => responseJSON.GET,
  ),
  POST: base(
    () => responseJSON.POST
  )
};
