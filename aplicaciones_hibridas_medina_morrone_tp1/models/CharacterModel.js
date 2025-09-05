const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true},
  race: { type: String }, 
  faction: { type: String }, 
  description: { type: String },
  firstAppearance: { type: Date },
  image: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Character', CharacterSchema);