const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./config/routes.js');

const port = 3000

const app = express();

//Para poder leer el json retornado por una petición
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Establecer ruta estatica
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(process.env.PORT || port, () => {
  console.log(`Escuchando desde el puerto: ${port}`)
})