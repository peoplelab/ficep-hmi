const { base } = require('../../../../mock.base');


module.exports = {
  PUT: base(
    (req, res) => ({
      "responseType": 200,
      "errorCode": null,
      "result": Math.round(Math.random() * 100) % 2 === 0,
    })
  )
};
