//Imports
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

//Model definition
class Localidad extends Model {}

//Model configuration 1) attributes 2) options
Localidad.init(
  {
    nombre: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "localidades",
    modelName: "localidad",
  }
);

//Exports
module.exports = Localidad;
