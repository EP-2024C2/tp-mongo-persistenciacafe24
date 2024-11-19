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
const { productosSchema } = require('../schemas/productos.schema');
const schemaValidator = require('../middlewares/schemaValidator');
const arraySchema = require('../schemas/array.schema');
const {validateIdEnModelo} = require('../middlewares/genericId.middleware')
const Producto = require('../models/producto.model')
const route = Router();

route.get('/', getAllProductos);
route.get('/:id', validateIdEnModelo(Producto), getProductoById);
route.post('/',schemaValidator(productosSchema), createProducto);
route.put('/:id',schemaValidator(productosSchema),validateIdEnModelo(Producto), updateProducto);
route.delete('/:id',validateIdEnModelo(Producto), deleteProducto);
route.post('/:id/fabricantes',schemaValidator(arraySchema('fabricantes')),validateIdEnModelo(Producto), asociarFabricantes);
route.get('/:id/fabricantes',validateIdEnModelo(Producto), getFabricantesDelProducto);
route.post('/:id/componentes',schemaValidator(arraySchema('componentes')),validateIdEnModelo(Producto), asociarComponentes)
route.get('/:id/componentes',validateIdEnModelo(Producto), getComponentesDelProducto);

module.exports = route;