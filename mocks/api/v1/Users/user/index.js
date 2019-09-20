const { base } = require('../../../../mock.base');


const randBool = () => Math.random() >= 0.5;


module.exports = {
  PUT: base(
    (req, res) => ({
      "responseType": 200,
      "errorCode": null,
      "result": randBool()
    })
  ),
  DELETE: base(
    (req, res) => ({
      "responseType": 200,
      "errorCode": null,
      "result": randBool()
    })
  )
};
