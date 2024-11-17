const Producto = require('../models/producto.model');
const mongoose = require('mongoose');

const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find().select('-__v');
    res.status(200).json(productos);
  } catch (error) {
    res.status(404).json({ message: `No se encontró la página solicitada. ${error.message}` });
  }
};

const getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findById(id).select('-__v');
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
    res.status(201).json({ message: 'El producto se creó con éxito.', producto });
  } catch (error) {
    res.status(400).json({ message: `Error en la creación del producto. ${error.message}` });
  }
};

const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, descripcion, pathImg } = req.body;
  // if (!nombre || !precio) {
  //   return res.status(401).json({ message: 'Los campos nombre y precio son obligatorios.' });
  // }
  try {
    const productoActualizado = await Producto.findByIdAndUpdate({ _id: id }, {
      nombre,
      precio,
      descripcion,
      pathImg
    }, { new: true });
    console.log(productoActualizado);
    res.status(201).json(productoActualizado);
  } catch (error) {
    res.status(404).json({ message: `Error en la modificación del producto. ${error.message}` });
  }
};

const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const productoEliminado = await Producto.deleteOne({ _id: id });
    res.status(200).json({ message: 'Producto eliminado con éxito.', productoEliminado });
  } catch (error) {
    res.status(404).json({ message: `Error al eliminar el producto. ${error.message}` });
  }
};

const asociarFabricantes = async (req, res) => {
  const { fabricantes } = req.body; // fabricantes es un arreglo de nombres de los fabricantes
  const { id: idProducto } = req.params;
  const fabrEncontrados = [];
  try {
    for (i = 0; i < fabricantes.length; i++) {
      const unFabricante = await Fabricante.findOne({ nombre: fabricantes[i] });
      fabrEncontrados.push(unFabricante._id);
    }
    const productoActualizado = await Producto.updateOne({ idProducto }, {
      fabricantesId: fabrEncontrados
    });
    res.status(201).json(productoActualizado);
  } catch (error) {
    res.status(404).json({ message: `No se encontró el recurso solicitado. ${error.message}` });
  }
};

const getFabricantesDelProducto = async (req, res) => {
  const { id: idProducto } = req.params;
  try {
    const producto = await Producto.findById(idProducto).populate('fabricantesId');
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({ message: `No se encontró el recurso solicitado. ${error.message}` });
  }
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
  asociarFabricantes,
  getFabricantesDelProducto
};
