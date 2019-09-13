const { base } = require('../../../mock.base');
const responseJSON = require('./response.json');


module.exports = {
  GET: base(
    (req) => ({
      "responseType": 200,
      "errorCode": null,
      result: { ...responseJSON, id: req.params.id }
    })
  )
};
