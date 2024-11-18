const Componente = require('../models/componente.model')
const mongoose = require('mongoose')

// Obtener todos los componentes
const getAllComponentes = async (req, res) => {
  try {
    const componentes = await Componente.find()
    res.json(componentes);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Obtener un componente por ID
const getComponenteById = async (req, res) => {
  try {
    const componente = await Componente.findById(req.params.id).populate('productos')
    if (!componente) {
      return res.status(404).json({ message: 'Componente no encontrado' })
    }
    res.json(componente);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Crear un nuevo componente
const createComponente = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const nuevoComponente = new Componente({ nombre, descripcion })
    await nuevoComponente.save();
    res.status(201).json(nuevoComponente)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Eliminar un componente
const deleteComponente = async (req, res) => {
  try {
    const { id } = req.params;
    await Componente.findByIdAndDelete(id);
    res.json({ message: 'Componente eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener los productos asociados a un componente
const getComponentesProductos = async (req, res) => {
  try {
    const componente = await Componente.findById(req.params.id).populate('productos');
    if (!componente) {
      return res.status(404).json({ message: 'Componente no encontrado' });
    }
    res.json(componente.productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllComponentes,
  getComponenteById,
  createComponente,
  deleteComponente,
  getComponentesProductos
};