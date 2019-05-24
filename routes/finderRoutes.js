const passport = require('passport');
const mongoose = require('mongoose');

// Creates an instance of our conditions class (DB collection).
const Conditions = mongoose.model('conditions');
const Herbs = mongoose.model('herbs');

module.exports = app => {

  app.get('/api/conditions/', (req, res) => {
    // console.log(req._parsedUrl.query);
    Conditions.findOne({ keyword: req._parsedUrl.query })
      .then(data => res.send(data));
  })

  app.get('/api/herb/', (req, res) => {
    Herbs.findOne({ name: req._parsedUrl.query })
      .then(data => res.send(data));
  })

}