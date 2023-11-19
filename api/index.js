const express = require('express')                                          // importamos express
const app = express()                                                       // instanciamos express
const port = 8080                                                           // definimos el puerto a utilizar

app.listen(port, () => {                                                    // iniciamos el servidor
  console.log(`Example app listening on port ${port}`)                      // mostramos en consola el puerto que estamos utilizando
}) 

app.get('/saludo/:id', (req, res) => {                                       // definimos la ruta con el metodo GET               

  const userId = req.params.id;                                               // obtenemos el parametro id (lo probamos desde postman con el metodo GET)
 
  res.send('Holaa!! '+ userId + ' Como estas?, haces parte de esta API')      // enviamos la respuesta
})

