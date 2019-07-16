module.exports = {
  GET: (req, res) => {
    res.status(200).json({
      "attributes": [
        {
          "id": 1,
          "code": "HoleEndPosition",
          "displayName": "EF",
          "value": -3
        },
        {
          "id": 2,
          "code": "FastApproachPosition",
          "displayName": "RA",
          "value": 10
        },
        {
          "id": 3,
          "code": "HoleStartPosition",
          "displayName": "SF",
          "value": 15
        },
        {
          "id": 4,
          "code": "CutterShankDiameter",
          "displayName": "DNG",
          "value": 50.569
        }
      ],
      "id": 18,
      "type": 68,
      "code": "",
      "displayName": "TS_68"
    });
  }
};
