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
  } catch (error) {}
};

const createProducto = async (req, res) => {
  try {
  } catch (error) {}
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
