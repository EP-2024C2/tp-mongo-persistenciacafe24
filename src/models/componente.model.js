const mongoose = require('mongoose');

const componenteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: String
});

module.exports = mongoose.model('Componente', componenteSchema);