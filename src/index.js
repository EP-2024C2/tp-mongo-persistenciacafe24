const express = require('express');
require('dotenv').config();
const { connectToDatabase, mongoose } = require('./db/mongo.db');

const app = express();
app.use(express.json());



const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Aplicación corriendo en el puerto ${PORT}...`);
});