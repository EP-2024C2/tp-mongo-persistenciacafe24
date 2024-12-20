const { Router } = require('express');

const { getAllFabricantes,getFabricanteById,createFabricante,updateFabricante,deleteFabricante,getProductoDeFabricante,asociarFabricante} = require('../controllers/fabricante.controller');
const { fabricantesSchema } = require('../schemas/fabricante.schema');
const schemaValidator = require('../middlewares/schemaValidator');
const {validateIdEnModelo} = require('../middlewares/genericId.middleware')
const Fabricante = require('../models/fabricante.model')

const route = Router();

route.get('/', getAllFabricantes);
route.get('/:id',validateIdEnModelo(Fabricante), getFabricanteById);
route.post('/',schemaValidator(fabricantesSchema), createFabricante);
route.put('/:id',schemaValidator(fabricantesSchema),validateIdEnModelo(Fabricante), updateFabricante);
route.delete('/:id', deleteFabricante);
route.get('/:id/productos',validateIdEnModelo(Fabricante),getProductoDeFabricante);

module.exports = route;
