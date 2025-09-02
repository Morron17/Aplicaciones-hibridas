require('dotenv').config();
const express = require('express');
const cors = require('cors');
//const connectDB = require('./config/db');

const app = express();


connectDB();


app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/characters', require('./routes/characters'));
app.use('/api/locations', require('./routes/locations'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));