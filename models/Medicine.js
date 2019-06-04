const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  user: String,
  patientName: String,
  date: Date,
  herb1: String,
  dosage1: Number,
  herb2: String,
  dosage2: Number,
  herb3: String,
  dosage3: Number,
  herb4: String,
  dosage4: Number,
  herb5: String,
  dosage5: Number,
  herb6: String,
  dosage6: Number,
  herb7: String,
  dosage7: Number,
  notes: String
});

mongoose.model('medicines', medicineSchema);