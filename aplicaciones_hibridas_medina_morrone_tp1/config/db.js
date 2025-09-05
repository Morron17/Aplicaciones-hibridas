const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017');
    console.log(" MongoDB conectado correctamente");
  } catch (error) {
    console.error(" Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;