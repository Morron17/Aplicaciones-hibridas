const Character = require('../models/Character');
const { validationResult } = require('express-validator');


exports.list = async (req, res) => {
  const { name, race, faction, page = 1, limit = 10 } = req.query;
  const filter = {};

  if (name) filter.name = new RegExp(name, 'i'); 
  if (race) filter.race = race;
  if (faction) filter.faction = faction;

  try {
    const skip = (page - 1) * limit;
    const total = await Character.countDocuments(filter);
    const items = await Character.find(filter).skip(skip).limit(Number(limit));

    res.json({
      total,
      page: Number(page),
      limit: Number(limit),
      items
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};


exports.getById = async (req, res) => {
  try {
    const item = await Character.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Personaje no encontrado' });
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
    const newItem = new Character(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};


exports.update = async (req, res) => {
  try {
    const item = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ msg: 'Personaje no encontrado' });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};


exports.remove = async (req, res) => {
  try {
    const item = await Character.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Personaje no encontrado' });
    res.json({ msg: 'Personaje eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};
