const  Producto  = require('../models/producto.model');
const mongoose = require('mongoose');


const validateIdEnModelo = (modelo) => {
    
    return async (req, res, next ) => {

        const id = req.params.id
        const esFormatoValido = mongoose.Types.ObjectId.isValid(id)
        if (!esFormatoValido) return res.status(404).json({ mensaje: `El id ${id} no cumple el formato` })
        const existeId = await modelo.findById(id);
        if (!existeId) return res.status(404).json({ mensaje: `El ${id} no exite, no se encuentra el recurso solicitado.` });
        next();
};
}

module.exports = { validateIdEnModelo };