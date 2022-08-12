const express = require('express')
const app = express()
const port = 3000

//Establecer ruta estatica
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Escuchando desde el puerto: ${port}`)
})