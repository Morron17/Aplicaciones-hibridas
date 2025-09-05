const validators = {
  character: (character) => {
    if (!character.name) return "El nombre es obligatorio";
    if (character.age && character.age < 0) return "La edad no puede ser negativa";
    return null;
  },
  location: (location) => {
    if (!location.name) return "El nombre es obligatorio";
    if (location.dangerLevel && !["Bajo", "Medio", "Alto"].includes(location.dangerLevel)) {
      return "El nivel de peligro debe ser Bajo, Medio o Alto";
    }
    return null;
  }
};

module.exports = validators;