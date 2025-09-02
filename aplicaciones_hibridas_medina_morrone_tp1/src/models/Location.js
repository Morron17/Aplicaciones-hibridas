const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String },
  description: { type: String },
  image: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Location', LocationSchema);