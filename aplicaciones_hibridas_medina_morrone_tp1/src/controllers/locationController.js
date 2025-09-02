const Location = require('../models/Location');
const { validationResult } = require('express-validator');


exports.list = async (req, res) => {
  try {
    const items = await Location.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};


exports.getById = async (req, res) => {
  try {
    const item = await Location.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Locación no encontrada' });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};


exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const newItem = new Location(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};


exports.update = async (req, res) => {
  try {
    const item = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ msg: 'Locación no encontrada' });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};


exports.remove = async (req, res) => {
  try {
    const item = await Location.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Locación no encontrada' });
    res.json({ msg: 'Locación eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};