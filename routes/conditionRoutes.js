const mongoose = require('mongoose');

// Creates an instance of our conditions class (DB collection).
const Conditions = mongoose.model('conditions');

module.exports = app => {

  app.get('/api/conditions/', (req, res) => {

    // There seems to be an issue using parsed URL query in production...both routes using this aren't working.

    // Also need to sort out the login - may need to create a new project, or use the original one - set up new API keys and a mongoDB - and get the login working before pasting it into the orignal code. Probably the last thing to sort though as it may take a while messing around with api keys n stuff.

    // Also need to set up some kind of scroll spy - to get the page to scroll to the top when a Link is clicked

    Conditions.findOne({ keyword: req._parsedUrl.query })
      .then(data => res.send(data));
  });

}