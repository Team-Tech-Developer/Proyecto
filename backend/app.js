const express = require("express");
const app = express();

app.use(express.json());

// Importar rutas
const products = require("./routes/products")

app.use('/api', products) // ruta del navegador

module.exports=app