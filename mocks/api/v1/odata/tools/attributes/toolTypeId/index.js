module.exports = {
  GET: (req, res) => {
    res.status(200).json([
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
    ]);
  }
};
