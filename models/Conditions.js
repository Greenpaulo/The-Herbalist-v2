const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conditionsSchema = new Schema({
  keyword: String,
  category: String,
  conditions: Array
});

mongoose.model('conditions', conditionsSchema);