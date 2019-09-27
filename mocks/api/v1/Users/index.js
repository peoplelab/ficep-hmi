const { base } = require('../../../mock.base');
const responseJSON = require('./response.json');


const randBool = () => Math.random() >= 0.5;


module.exports = {
  GET: base(
    (req, res) => responseJSON[req.params.id - 1]
  ),
  DELETE: base(
    (req, res) => ({
      "responseType": 200,
      "errorCode": null,
      "result": randBool()
    })
  )
};
