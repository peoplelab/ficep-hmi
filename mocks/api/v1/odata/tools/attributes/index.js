const { base } = require('../../../../../mock.base');


module.exports = {
  GET: base(
    () => ({
      "responseType": 200,
      "errorCode": null,
      "result": [
        {
          "id": 10,
          "code": "FastApproachPosition",
          "description": "Posizione di accostamento rapido [mm]",
          "displayName": "RA"
        },
        {
          "id": 9,
          "code": "HoleEndPosition",
          "description": "Posizione di fine foro [mm]",
          "displayName": "EF"
        },
        {
          "id": 8,
          "code": "HoleStartPosition",
          "description": "Posizione di partenza foro [mm]",
          "displayName": "SF"
        }
      ]
    })
  )
};
