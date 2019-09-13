const { base } = require('../../../../../mock.base');


module.exports = {
  GET: base(
    () => ({
      "responseType": 200,
      "errorCode": null,
      "result": [
        {
          "toolComponentCategoryId": 1,
          "id": 31,
          "code": "SensitiveTwistDrilling",
          "description": "Foratura elicoidale sensitiva",
          "displayName": "TS_31"
        },
        {
          "toolComponentCategoryId": 1,
          "id": 32,
          "code": "SpecialProgrammDrilling",
          "description": "Foratura a inserti programmata",
          "displayName": "TS_32"
        },
        {
          "toolComponentCategoryId": 1,
          "id": 33,
          "code": "TwistProgramDrilling",
          "description": "Foratura elicoidale programmata",
          "displayName": "TS_33"
        },
        {
          "toolComponentCategoryId": 1,
          "id": 34,
          "code": "NormalDeburring",
          "description": "Sbavatura con utensile tradizionale",
          "displayName": "TS_34"
        }
      ]
    })
  )
};
