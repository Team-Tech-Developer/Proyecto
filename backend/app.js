const express = require("express");
const app = express();
const errorMiddleware = require('./middleware/errors')
const cookieParser= require("cookie-parser")

//Uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

// Importar rutas (importa el orden)
const products = require("./routes/products")
const users = require("./routes/auth")

app.use('/api', products) // ruta del navegador
app.use('/api',users)

//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app