const { Router } = require('express');

const { getAllFabricantes,getFabricanteById,createFabricante,updateFabricante,deleteFabricante,getProductoDeFabricante,asociarFabricante} = require('../controllers/fabricante.controller');
const {validateIdEnModelo} = require('../middleares/genericId.middleware')
const Fabricante = require('../models/fabricante.model')

const route = Router();

route.get('/', getAllFabricantes);
route.get('/:id',validateIdEnModelo(Fabricante), getFabricanteById);
route.post('/', createFabricante);
route.put('/:id',validateIdEnModelo(Fabricante), updateFabricante);
route.delete('/:id', deleteFabricante);
route.get('/:id/productos',validateIdEnModelo(Fabricante),getProductoDeFabricante);

module.exports = route;
