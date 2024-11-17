const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const fabricanteSchema = new mongoose.Schema({
  nombre: {
    type: Schema.Types.String,
    required: true,
  },
  direccion: {
    type: Schema.Types.String,
    required: true,
  },
  numeroContacto: {
    type: Schema.Types.String,
    required: true,
  },
  pathImgPerfil: Schema.Types.String,
  productosId: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto'
  }]
});

module.exports = mongoose.model('Fabricante', fabricanteSchema);
