//Imports 
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

//Model definition
class Region extends Model {}

//Model configuration 1) attributes 2) options
Region.init({
    nombre: DataTypes.STRING,
},{
    sequelize,
    tableName: 'regiones',
    modelName: 'region'
})

//Exports
module.exports = Region;