const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  precio: {
    type: mongoose.Types.Decimal128, // revisar si corresponde el tipo Decimal128
    required: true
  },
  pathImg: String
});

module.exports = mongoose.model('Producto', productoSchema);