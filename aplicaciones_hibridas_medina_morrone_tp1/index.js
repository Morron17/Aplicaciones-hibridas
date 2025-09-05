const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const urldb = process.env.URI_DB;
mongoose.connect(urldb)
const db = mongoose.connection;

const userRoutes = require("./routes/userRoutes");

const characterRoutes = require("./routes/characterRoutes");
const locationRoutes = require("./routes/locationRoutes");

const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1> The Last of Us API</h1>
    <p>Bienvenido a la API de The Last of Us. Endpoints disponibles:</p>
    <ul>
      <li><a href="/api/characters">/api/characters</a></li>
      <li><a href="/api/locations">/api/locations</a></li>
    </ul>
    <footer style="margin-top:30px;">
      <p>Alumnos : Santiago Medina y Tomas Morrone</p>
      <p>Materia: Aplicaciones Híbridas</p>
      <p>Docente: Cruz Jonathan Emanuel</p>
      <p>Comisión: DW3AP</p>
    </footer>
  `);
});

app.use("/api/characters", characterRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/users", userRoutes);


