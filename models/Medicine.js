const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  user: String,
  patientName: String,
  date: Date,
  herbs: Array,
  notes: String
});

mongoose.model('medicines', medicineSchema);