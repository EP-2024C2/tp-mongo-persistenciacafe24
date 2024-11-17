const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const componenteSchema = new mongoose.Schema({
  nombre: {
    type: Schema.Types.String,
    required: true
  },
  descripcion: Schema.Types.String
});

const productoSchema = new mongoose.Schema({
  nombre: {
    type: Schema.Types.String,
    required: true
  },
  descripcion: {
    type: Schema.Types.String
  },
  precio: {
    type: mongoose.Types.Decimal128, // revisar si corresponde el tipo Decimal128
    required: true
  },
  pathImg: Schema.Types.String,
  componentes: [componenteSchema],
  fabricantesId: [{
    type: Schema.Types.ObjectId,
    ref: 'Fabricante'
  }]
});

module.exports = mongoose.model('Producto', productoSchema);