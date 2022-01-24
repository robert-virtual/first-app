const { request, response } = require("express");
const Person = require("../models/Person");
const User = require("../models/User");

exports.getOne = async (req = request, res = response) => {
  const { id: personaPk } = req.params;
  const person = await Person.findOne({ where: { personaPk }, include: User });
  if (!person) {
    return res.json({ error: "No se encontro la persona " });
  }

  res.json(person);
};
exports.getAll = async (req = request, res = response) => {
  const people = await Person.findAll();
  if (!people) {
    return res.json({ error: "No hay personas en la base de datos" });
  }

  res.json(people);
};
exports.create = async (req = request, res = response) => {
  const { nombre, apellido, telefono, tipo } = req.body;
  if (!nombre || !apellido || !telefono || !tipo) {
    return res.status(401).json({ error: "faltan campos necesarios" });
  }
  const person = await Person.create(req.body);
  res.json({ msg: "persona creada con exito", person });
};
