const { request, response } = require("express");
const { hash, compare } = require("bcrypt");
const User = require("../models/User");
const validate = require("../helpers/validate");

async function login(req = request, res = response) {
  const { password } = req.body;
  const storedPassword = await hash("P@ssw0rd", 12);
  const valid = await compare(password, storedPassword);

  if (!valid)
    return res.status(401).json({
      password,
      error: "Acceso Denegado. Credenciales incorrectas",
    });
  res.json({
    password,
    msg: "Acceso autorizado, Bienvenido",
  });
}
// registro
async function register(req = request, res = response) {
  let errors = validate(req.body, [
    "nombreUsuario",
    "email",
    "clave",
    "personaFk",
  ]);
  if (errors.length > 0) {
    return res.json({
      error: `faltan campos obligatorios(${errors})`,
    });
  }
  const { clave, nombreUsuario, personaFk } = req.body;
  const salt = 12;
  try {
    const userExist = await User.findByPk(nombreUsuario);
    if (userExist) {
      throw new Error("El usuario ya existe");
    }
    const encryptedPassword = await hash(clave, salt);
    const user = await User.create({
      ...req.body,
      personaFk,
      clave: encryptedPassword,
    });
    res.json({ user });
  } catch (error) {
    res.json({ error: error.toString() });
  }
}

async function getAll(req = request, res = response) {
  const users = await User.findAll();
  res.json({
    users,
  });
}
async function getOne(req = request, res = response) {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { nombreUsuario: id } });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({
      user,
    });
  } catch (error) {
    res.status(400).json({
      error: error.toString(),
    });
  }
}

module.exports = {
  getAll,
  getOne,
  register,
  login,
};
