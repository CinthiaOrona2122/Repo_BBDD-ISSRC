//Imports
const Region = require("./models/Region");
const Provincia = require("./models/Provincia");
const Localidad = require("./models/Localidad");
const Empleado = require("./models/Empleado");

//Association definitions
Region.hasMany(Provincia);
Provincia.belongsTo(Region);

Provincia.hasMany(Localidad, { foreignKey: "provincia_id" });
Localidad.belongsTo(Provincia, { foreignKey: "provincia_id" });

Localidad.hasMany(Empleado);
Empleado.belongsTo(Localidad);

