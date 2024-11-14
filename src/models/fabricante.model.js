const mongoose = require('mongoose');

const fabricanteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  numeroContacto: {
    type: String,
    required: true
  },
  pathImgPerfil: String
});

module.exports = mongoose.model('Fabricante', fabricanteSchema);