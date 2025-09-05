const Location = require("../models/LocationModel");

// Obtener todas las localizaciones
const getLocations = async (req, res) => {
  try {
    const { name, region } = req.query;
    let filter = {};

    if (name) filter.name = new RegExp(name, "i");
    if (region) filter.region = region;

    const locations = await Location.find(filter);
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener localización por ID
const getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) return res.status(404).json({ message: "Localización no encontrada" });
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear localización
const createLocation = async (req, res) => {
  try {
    const newLocation = new Location(req.body);
    const savedLocation = await newLocation.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar localización
const updateLocation = async (req, res) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLocation) return res.status(404).json({ message: "Localización no encontrada" });
    res.json(updatedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar localización
const deleteLocation = async (req, res) => {
  try {
    const deletedLocation = await Location.findByIdAndDelete(req.params.id);
    if (!deletedLocation) return res.status(404).json({ message: "Localización no encontrada" });
    res.json({ message: "Localización eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation
};