const { Router } = require('express');

const { 
    getAllComponentes,
    getComponenteById,
    createComponente,
    updateComponente,
    deleteComponente,
    getProductosFromComponente,
} = require('../controllers/componente.controller');
const schemaValidator = require('../middlewares/schemaValidator');
const { componentesSchema } = require('../schemas/componente.schema');
const {validateIdEnModelo} = require('../middlewares/genericId.middleware')
const Componente = require('../models/componente.model')

const route = Router();

route.get('/', getAllComponentes);
route.get('/:id',validateIdEnModelo(Componente), getComponenteById);
route.post('/',schemaValidator(componentesSchema), createComponente);
route.put('/:id',schemaValidator(componentesSchema), validateIdEnModelo(Componente), updateComponente);
route.delete('/:id',validateIdEnModelo(Componente), deleteComponente);
route.get('/:id/productos', validateIdEnModelo(Componente), getProductosFromComponente);

module.exports = route;

