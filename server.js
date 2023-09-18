const express = require('express');
const ip = require('ip');
const app = express();

// Configurar el servidor para servir los archivos estáticos de la carpeta "public"
app.use(express.static('public'));

// Obtener la dirección IP del servidor
const serverIP = ip.address();

// Iniciar el servidor
const port = 3000;
app.listen(port, serverIP, () => {
  console.log(`Servidor iniciado en http://${serverIP}:${port}`);
});
