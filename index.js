const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./config/routes.js');
const session = require('express-session'); 
const cookieParser = require('cookie-parser');

const port = 3000

const app = express();
app.use(cookieParser());

app.use(session({
  secret: 'incio sesion',
  resave: false,
  saveUninitialized: true
}))

//Para poder leer el json retornado por una petición
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Establecer ruta estatica
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(process.env.PORT || port, () => {
  console.log(`Escuchando desde el puerto: ${port}`)
})