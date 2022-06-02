//Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

//Model definition
class Provincia extends Model {}

//Model configuration 1) attributes 2) options
Provincia.init(
  {
    nombre: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "provincias",
    modelName: "provincia",
  }
);

//Exports
module.exports = Provincia;
