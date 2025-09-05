const Character = require("../models/CharacterModel");

// Obtener todos los personajes
const getCharacters = async (req, res) => {
  try {
    const { name, role } = req.query;
    let filter = {};

    if (name) filter.name = new RegExp(name, "i");
    if (role) filter.role = role;

    const characters = await Character.find(filter);
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener personaje por ID
const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) return res.status(404).json({ message: "Personaje no encontrado" });
    res.json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear personaje
const createCharacter = async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    const savedCharacter = await newCharacter.save();
    res.status(201).json(savedCharacter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar personaje
const updateCharacter = async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCharacter) return res.status(404).json({ message: "Personaje no encontrado" });
    res.json(updatedCharacter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar personaje
const deleteCharacter = async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
    if (!deletedCharacter) return res.status(404).json({ message: "Personaje no encontrado" });
    res.json({ message: "Personaje eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
};