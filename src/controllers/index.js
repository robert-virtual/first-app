const { request, response } = require("express");
// modelos
const Person = require("../models/Person");
const User = require("../models/User");
// modelos

exports.getOne = async (req = request, res = response) => {
  const { id: personaPk } = req.params;
  const person = await Person.findOne({ where: { personaPk }, include: User });
  if (!person) {
    return res.json({ error: "No se encontro la persona " });
  }

  res.json(person);
};
exports.getAll = async (req = request, res = response) => {
  const people = await Person.findAll({ where: { estado: true } });
  if (!people) {
    return res.json({ error: "No hay personas en la base de datos" });
  }

  res.json(people);
};
// subir foto
exports.photo = (req = request, res = response) => {
  res.json({ msg: "photo uploaded" });
};

// crear registro
exports.create = async (req = request, res = response) => {
  const { nombre, apellido, telefono, tipo } = req.body;
  if (!nombre || !apellido || !telefono || !tipo) {
    return res.status(401).json({ error: "faltan campos necesarios" });
  }
  try {
    const person = await Person.create(req.body);
    if (!person) {
      throw new Error("No se ha podido crear la persona");
    }
    res.json({ msg: "persona creada con exito", person });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.update = async (req = request, res = response) => {
  const { id } = req.params;
  const { nombre, apellido, telefono, imagenUrl } = req.body;
  try {
    if (!nombre && !apellido && !telefono && !imagenUrl) {
      throw new Error("No envio ningun campo para actualizar");
    }
    const person = await Person.findByPk(id);
    if (!person) {
      throw new Error(`No se encontro la persona con el id ${id}`);
    }
    await person.update({ ...req.body });

    res.json({ msg: "registro actualizado", id, body: req.body, person });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
exports.deletePerson = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Person.findByPk(id);
    person.update({ estado: false });
    res.json({ msg: "Usuario eliminado con exito" });
  } catch (error) {
    res.json({ error: error.toString() });
  }
};
// res.json({ id, body: req.body });
