//importamos express
const express = require('express');
const app = express();
const sequelize = require('./database/sequelize');

//Models imports
const Region = require('./database/models/Region');
const Provincia = require('./database/models/Provincia');
const Localidad = require('./database/models/Localidad');
const Empleado = require('./database/models/Empleado');

//creamos aplicacion y conf el puerto
const port = 3000;

//rutas
app.get('/', (req, res) => {
  res.send('Hola soy un Server WEB!');
})

//corremos el servidor sobre el puerto que configuramos(3000)
app.listen(port, () => {
  console.log(`App conectada al puerto: ${port}`)
  
  sequelize.sync({force: true}).then(() => {
    console.log('Conectado con sequelize!!!.');
  }).catch((err) => {
    console.error(`Error con sequelize: ${err}`
    );
  })
})