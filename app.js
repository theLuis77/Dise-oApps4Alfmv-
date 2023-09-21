const express = require('express');
const app = express();
const port = 8000; // Cambia el puerto a 8000

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});