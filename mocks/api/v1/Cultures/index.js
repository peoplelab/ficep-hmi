module.exports = {
  GET: (req, res) => {
    res.status(200).json([
      {
        "id": 2,
        "code": "it-IT",
        "description": "Italian"
      },
      {
        "id": 3,
        "code": "en-GB",
        "description": "English"
      }
    ]);
  },
  POST: (req, res) => {
    res.status(200).json(12);
  },
  PUT: (req, res) => {
    res.status(404).json(false);
  }
};
