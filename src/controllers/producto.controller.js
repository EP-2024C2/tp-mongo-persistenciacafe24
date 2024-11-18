const Producto = require('../models/producto.model');

const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(libros);
  } catch (error) {
    res.status(404).json({ message: `No se encontró la página solicitada. ${error.message}` })
  }
};

const getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: `Error al obtener el producto: ${error.message}` });
  }
};

const createProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ message: `Error al crear el producto: ${error.message}` });
  }
};

const updateProducto = async (req, res) => {
  try {
  } catch (error) {}
};

const deleteProducto = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
};
