const express = require("express");
const app = express();
const errorMiddleware = require('./middleware/errors')

app.use(express.json());

// Importar rutas
const products = require("./routes/products")

app.use('/api', products) // ruta del navegador

//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app