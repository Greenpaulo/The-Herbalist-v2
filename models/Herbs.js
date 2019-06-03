const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const herbSchema = new Schema({
  name: String,
  title: String,
  commonName: String,
  family: String,
  partsUsed: String,
  image: String,
  actionsIndications: Array,
  contraIndications: Array,
  safety: String,
  dosage: String,
  botanicalDescription: String,
  energeticUsage: Array,
  clinicalTrials: Array,
  externalUsage: Array

})

mongoose.model('herbs', herbSchema);