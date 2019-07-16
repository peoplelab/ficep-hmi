module.exports = {
  GET: (req, res) => {
    res.status(200).json([
      {
      "id": 18,
      "type": 68,
      "code": "",
      "diameter": 1,
      "displayName": "TS_68"
      },
      {
      "id": 19,
      "type": 33,
      "code": "DFR",
      "diameter": 14,
      "displayName": "TS_33"
      },
      {
      "id": 20,
      "type": 33,
      "code": "",
      "diameter": 14,
      "displayName": "TS_33"
      },
      {
      "id": 21,
      "type": 33,
      "code": "DFR",
      "diameter": 16,
      "displayName": "TS_33"
      },
      {
      "id": 22,
      "type": 41,
      "code": "",
      "diameter": 16,
      "displayName": "TS_41"
      }
    ]);
  },
  POST: (req, res) => {
    res.status(200).json({
      "attributes": [
        {
          "id": 0,
          "value": 10,
          "toolComponentAttributeDefinition": "Diameter",
          "toolId": 0
        }
      ],
      "id": 0,
      "type": "Punching",
      "code": "string",
      "description": "string"
    });
  }
};
