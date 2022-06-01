//Imports
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

//Model definition
class Empleado extends Model {}

//Model configuration 1) attributes 2) options
Empleado.init(
  {
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 8,
      }
    },
    salario: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: true
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
  },
  {
    sequelize,
    tableName: "empleados",
    modelName: "empleado",
  }
);

//Exports
module.exports = Empleado;
