const responseJSON = require('./response.json');
const { base } = require('../../../mock.base');

module.exports = {
  GET: (req, res) => {
    res.status(200).json(responseJSON);
  },
  POST: base(
    () => ({
      "responseType": 200,
      "errorCode": null,
      "result": 25,
    })
  ),
  DELETE: base(
    req => ({
      "responseType": 200,
      "errorCode": null,
      "result": req.params.id > 6,
    })
  ),
  PUT: base(
    req => ({
      "responseType": 200,
      "errorCode": null,
      "result": parseInt(req.body.id) <= 6,
    })
  )
};
