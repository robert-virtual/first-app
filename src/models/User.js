const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Person = require("./Person");

const User = db.define(
  "User",
  {
    nombreUsuario: {
      primaryKey: true,
      unique: true,
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: DataTypes.STRING,
    clave: DataTypes.STRING,
    personaFk: DataTypes.INTEGER,
    loginsFallidos: DataTypes.INTEGER,
    pinRecuperacion: DataTypes.STRING,
    fechaRegistro: DataTypes.DATE,
    fechaActualizacion: DataTypes.DATE,
    estado: {
      defaultValue: true,
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

User.belongsTo(Person, { foreignKey: "personaFk" }); //
Person.hasMany(User, { foreignKey: "personaFk" });

module.exports = User;
