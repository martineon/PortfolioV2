const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  'name': String,
  'url': { type: String, unique: true },
  'img': [String],
  'description': String
});

module.exports = mongoose.model('works', WorkSchema);
