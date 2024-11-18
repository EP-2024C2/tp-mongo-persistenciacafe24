const { Router } = require('express');

const { getAllFabricantes,getFabricanteById,createFabricante,updateFabricante,deleteFabricante,getProductoDeFabricante,asociarFabricante} = require('../controllers/fabricante.controller');

const route = Router();

route.get('/', getAllFabricantes);
route.get('/:id', getFabricanteById);
route.post('/', createFabricante);
route.put('/:id', updateFabricante);
route.delete('/:id', deleteFabricante);
//id de autor y fabricante que queremos generar
route.post('/:id/fabricantes',asociarFabricante)
route.get('/fabricantes/:id',getProductoDeFabricante)

module.exports = route;
