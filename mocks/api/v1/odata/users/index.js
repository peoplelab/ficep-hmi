const { base } = require('../../../../mock.base');

module.exports = {
  GET: base(
    (req, res) => global.users
  ),
};
