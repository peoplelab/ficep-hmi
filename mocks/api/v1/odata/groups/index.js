const { base } = require('../../../../mock.base');
const responseJSON = require('./responseGET.json');

module.exports = {
    GET: base(
        (req, res) => responseJSON
    ),
};
