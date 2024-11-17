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

fabricanteSchema.methods.toJSON = function() { // esto para no mostrar el atributo __v en las queries
  const fabricanteObject = this.toObject();
  delete fabricanteObject.__v;
  return fabricanteObject;
}

module.exports = mongoose.model('Fabricante', fabricanteSchema);
