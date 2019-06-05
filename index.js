const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
require('./models/Conditions');
require('./models/Herbs');
require('./models/Medicine');
const conditionRoutes = require('./routes/conditionRoutes');
const herbRoutes = require('./routes/herbRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
require('./models/User');
require('./services/passport');


const app = express();

// Connect mongoose to MongoDB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

// Wiring up express to use cookies, with the help of cookie-session middleware.
app.use(cookieSession({
  name: 'session',
  keys: [keys.cookieKey],

  // Cookie Options
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
}));

// Tell passport to use cookies - set up the middleware (app.use())
app.use(passport.initialize());
app.use(passport.session());

// Use body-parser middleware to parse incoming post requests
app.use(bodyParser.json());

// Pass the app instance to route handler files
authRoutes(app);
conditionRoutes(app);
herbRoutes(app);
medicineRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);