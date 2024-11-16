const { Router } = require('express');
const { getAllProductos, getProductoById, createProducto, updateProducto, deleteProducto } = require('../controllers/producto.controller');
const route = Router();

route.get('/', getAllProductos);
route.get('/:id', getProductoById);
route.post('/', createProducto);
route.put('/:id', updateProducto);
route.delete('/:id', deleteProducto);

module.exports = route;