const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Tipo = db.define(
  "Tipo",
  {
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    imagen: DataTypes.STRING(250),
    activo: { type: DataTypes.BOOLEAN, defaultValue: true },
  },
  {
    timestamps: false,
  }
);

module.exports = Tipo;
