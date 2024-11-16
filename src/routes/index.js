const { Router } = require('express');
const productoRoutes = require('./producto.routes');

const router = Router();

router.use('/productos', productoRoutes);

// router.use('/fabricantes', /*  */);

// router.use('/componentes', /*  */);

module.exports = router;