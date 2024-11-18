const { Router } = require('express');

const route = Router();

const {
    getAllComponentes,
    getComponenteById,
    createComponente,
    deleteComponente,
    getComponentesProductos,
  } = require('../controllers/componente.controller')

route.get('/', getAllComponentes);
route.get('/:id', getComponenteById);
route.post('/', createComponente);
route.delete('/:id', deleteComponente);
route.get('/:id/productos', getComponentesProductos);

module.exports = route  