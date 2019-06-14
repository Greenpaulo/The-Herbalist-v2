const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// Creates an instance of our user class (DB collection).
const User = mongoose.model('users');

// Sets a token for passport to pass as a cookie to the browser
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Takes the incoming token from the cookie and finds the associated user.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});


// Set up the google strategy
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: "/auth/google/callback",
  proxy: true
},
  async (accessToken, refreshToken, profile, done) => {
    const user = await new User({ googleId: profile.id }).save();
    done(null, user);
    // const existingUser = await User.findOne({ googleId: profile.id });

    // if (existingUser) {
    //   // We already have a record with the given profile ID
    //   done(null, existingUser);
    // } else {
    //   // We don't have a user record with this ID, make a new record.
    //   const user = await new User({ googleId: profile.id }).save();
    //   done(null, user);
    // }
  }
));