const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LabSchema = new Schema({
  'name': String,
  'url': { type: String, unique: true },
  'img': [String]
});

module.exports = mongoose.model('labs', LabSchema);
