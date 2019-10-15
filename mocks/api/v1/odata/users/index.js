// Mock for /api/v1/odata/users

const { base } = require('../../../../mock.base');
const responseJSON = require('./response.json');

module.exports = {
  GET: base(
      (req, res) => responseJSON
  ),
};
