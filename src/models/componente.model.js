const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const componenteSchema = new mongoose.Schema({
  nombre: {
    type: Schema.Types.String,
    required: true
  },
  descripcion: Schema.Types.String,
  productosId: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto'
  }]
});

module.exports = mongoose.model('Componente', componenteSchema);