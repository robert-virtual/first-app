const { request, response } = require("express");
const Tipo = require("../models/Tipo");

exports.getTipo = async (req = request, res = response) => {
  const { id } = req.params;
  const tipo = await Tipo.findByPk(id);
  res.json(tipo);
};

exports.getAllTipos = async (req = request, res = response) => {
  const tipos = await Tipo.findAll({ where: { activo: true } });
  res.json(tipos);
};

exports.createTipo = async (req = request, res = response) => {
  const tipo = await Tipo.create(req.body);
  res.json(tipo);
};
exports.updateTipo = async (req = request, res = response) => {
  const { id } = req.params;
  const tipo = await Tipo.findByPk(id);
  await tipo.update(req.body);
  res.json({ msg: "tipo actualizado", tipo });
};
exports.deleteTipo = async (req = request, res = response) => {
  const { id } = req.params;
  const tipo = await Tipo.findByPk(id);
  tipo.update({ activo: false });
  res.json({ msg: "tipo eliminado exitosamente" });
};
