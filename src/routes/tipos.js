const {
  getTipo,
  getAllTipos,
  updateTipo,
  deleteTipo,
  createTipo,
} = require("../controllers/tipos");

const tipos = require("express").Router();

// obtener uno
tipos.get("/:id", getTipo);
// obtener todos
tipos.get("/", getAllTipos);
//crear
tipos.post("/", createTipo);

// actualizar
tipos.put("/:id", updateTipo);
// eliminar
tipos.delete("/:id", deleteTipo);
module.exports = tipos;
