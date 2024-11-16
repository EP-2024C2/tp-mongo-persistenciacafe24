const Producto = require('../models/producto.model');

const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(libros);
  } catch (error) {
    res.status(404).json({ message: `No se encontró la página solicitada. ${error.message}` });
  }
};

const getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findById(id);
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({ message: `No se encontró la página solicitada. ${error.message}` });
  }
};

const createProducto = async (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.json({ message: 'Los campos nombre y precio son obligatorios.' });
  }
  try {
    const producto = await Producto.create({
      ...req.body
    });
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ message: `Error en la creación del producto. ${error.message}` });
  }
};

const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, descripcion, pathImg } = req.body;
  if (!nombre || !precio) {
    return res.status(401).json({ message: 'Los campos nombre y precio son obligatorios.' });
  }
  try {
    const productoActualizado = await Producto.updateOne({ id }, {
      nombre,
      descripcion,
      precio,
      pathImg
    });
    res.status(201).json({ message: 'Producto actualizado con éxito!', productoActualizado });
  } catch (error) {
    return res.status(404).json({ message: `Error en la modificación del producto. ${error.message}` });
  }
};

const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const productoEliminado = await Producto.deleteOne({ id });
    res.status(200).json({ message: 'Producto eliminado con éxito.', productoEliminado });
  } catch (error) {
    res.status(404).json({ message: `Error al eliminar el producto. ${error.message}` });
  }
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
};
