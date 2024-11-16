const Producto = require('../models/producto.model');

async function seedDatabase() {
  try {
    await Producto.deleteMany({});

  const productos = await Producto.insertMany([
    {
      nombre: 'Celular POCO C65',
      descripcion: 'Sus 2 cámaras traseras de 50 Mpx/2 Mpx te permitirán tomar imágenes con más detalles.',
      precio: 419999.99,
      pathImg: 'https://picsum.photos/200',
    },
    {
      nombre: 'Tablet Tab A9',
      descripcion: 'Disfruta de una experiencia visual inmersiva con la pantalla de alta frecuencia de actualización de la Tab A9.',
      precio: 311999.99,
      pathImg: 'https://picsum.photos/200',
    }
  ]);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = seedDatabase;