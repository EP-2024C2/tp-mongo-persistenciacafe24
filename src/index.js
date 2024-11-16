const express = require('express');
require('dotenv').config();
const routes = require('./routes/index');
const { connectToDatabase, mongoose } = require('./db/mongo.db');

const app = express();
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Aplicación corriendo en el puerto ${PORT}...`);
});