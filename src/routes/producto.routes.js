const { Router } = require('express');
const {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
  asociarFabricantes,
  getFabricantesDelProducto,
  asociarComponentes,
  getComponentesDelProducto
} = require('../controllers/producto.controller');
const {validateIdEnModelo} = require('../middleares/genericId.middleware')
const Producto = require('../models/producto.model')
const route = Router();

route.get('/', getAllProductos);
route.get('/:id', validateIdEnModelo(Producto), getProductoById);
route.post('/', createProducto);
route.put('/:id',validateIdEnModelo(Producto), updateProducto);
route.delete('/:id',validateIdEnModelo(Producto), deleteProducto);
route.post('/:id/fabricantes',validateIdEnModelo(Producto), asociarFabricantes);
route.get('/:id/fabricantes',validateIdEnModelo(Producto), getFabricantesDelProducto);
route.post('/:id/componentes',validateIdEnModelo(Producto), asociarComponentes)
route.get('/:id/componentes',validateIdEnModelo(Producto), getComponentesDelProducto);

module.exports = route;