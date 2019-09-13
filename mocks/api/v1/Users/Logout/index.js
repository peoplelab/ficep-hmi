const { base } = require('../../../../mock.base');


module.exports = {
  PUT: base(
    () => ({
      "responseType": 200,
      "errorCode": null,
      "result": true
    })
  )
};
