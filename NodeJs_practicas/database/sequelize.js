//Imports
const { Sequelize } = require('sequelize');
const { sqlite } = require('./config');

console.log("Conexion a la base de datos: ");
//Definición de la conexion
const sequelize = new Sequelize(sqlite.db);

//Exports
module.exports = sequelize;