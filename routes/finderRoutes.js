const mongoose = require('mongoose');

// Creates an instance of our conditions class (DB collection).
const Conditions = mongoose.model('conditions');
const Herbs = mongoose.model('herbs');

module.exports = app => {

  app.get('/api/conditions/', (req, res) => {
    Conditions.findOne({ keyword: req._parsedUrl.query })
      .then(data => res.send(data));
  })

  app.get('/api/herb/', (req, res) => {
    Herbs.findOne({ name: req._parsedUrl.query })
      .then(data => res.send(data));
  })

  // Handles requests for a list of herbs held in the Herbs collection, and return the titles of those herbs sorted alphabetically.
  app.get('/api/herb_list', (req, res) => {
    Herbs.find({}, { title: 1, _id: 0 }).sort({ title: 1 })
      .then(data => res.send(data));
  })

}