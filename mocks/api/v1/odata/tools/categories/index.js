const { base } = require('../../../../../mock.base');


module.exports = {
  GET: base(
    () => [
      {
        "id": 1,
        "code": "Drill",
        "description": "Utensili di Foratura",
        "displayName": "Drill"
      },
      {
        "id": 2,
        "code": "Mill",
        "description": "Utensili di Fresatura",
        "displayName": "Mill"
      },
      {
        "id": 3,
        "code": "Punch",
        "description": "Utensili di Punzonatura",
        "displayName": "Punch"
      }
    ]
  )
};
