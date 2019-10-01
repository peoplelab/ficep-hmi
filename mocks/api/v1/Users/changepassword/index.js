const { base } = require('../../../../mock.base');


module.exports = {
  PUT: base(
    () => ({
      "responseType": 200,
      "errorCode": null,
      "result": Math.round(Math.random() * 100) % 2 === 0
    })
  )
};
