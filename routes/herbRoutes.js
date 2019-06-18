const mongoose = require('mongoose');

// Creates an instance of our Herbs class (DB collection).
const Herbs = mongoose.model('herbs');

module.exports = app => {

  // Handle request to fetch a single herb's entry
  app.get('/api/herb/', (req, res) => {
    console.log("request received for: " + req._parsedUrl.query)
    Herbs.findOne({ name: req._parsedUrl.query })
      .then(data => res.send(data));
  })

  // // Handle request to fetch a single herb's entry
  // app.get('/api/herb_latin/', (req, res) => {
  //   Herbs.findOne({ title: req._parsedUrl.query })
  //     .then(data => res.send(data));
  // })

  // Handles requests for a list of herbs held in the Herbs collection, and return the titles of those herbs sorted alphabetically.
  app.get('/api/herb_list', (req, res) => {
    Herbs.find({}, { title: 1, _id: 0 }).sort({ title: 1 })
      .then(data => res.send(data));
  })

  // Handles requests for a list of herbs held in the Herbs collection, and return the name of those herbs sorted alphabetically.
  app.get('/api/herb_list_name', (req, res) => {
    Herbs.find({}, { name: 1, _id: 0 }).sort({ name: 1 })
      .then(data => res.send(data));
  })
}