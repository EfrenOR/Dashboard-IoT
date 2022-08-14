const express = require('express')
const  {selectdevices, deletedevice, insetdevice, updatedevice} = require('../controller/controller.js')
const Router = express.Router();


//RUTAS CRUD DISPOSITIVOS IOT
Router.get('/selectdevices', selectdevices);
Router.delete('/deletedevice/:id', deletedevice);
Router.post('/insertdevice', insetdevice);
Router.put('/updatedevice/:id', updatedevice);

module.exports = Router;
