const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Person = db.define(
  "Person",
  {
    personaPk: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido: DataTypes.STRING,
    telefono: DataTypes.STRING,
    tipo: DataTypes.STRING,
    imagenUrl: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    fechaRegistro: DataTypes.DATE,
    estado: DataTypes.BOOLEAN,
  },
  {
    tableName: "personas",
    timestamps: false,
  }
);

module.exports = Person;
