const mongoose = require('mongoose');

// Creates an instance of our conditions class (DB collection).
const Conditions = mongoose.model('conditions');

module.exports = app => {

  app.get('/api/conditions/', (req, res) => {
    Conditions.findOne({ keyword: req._parsedUrl.query })
      .then(data => res.send(data));
  });

}