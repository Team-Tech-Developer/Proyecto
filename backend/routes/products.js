const express =require("express");
const router = express.Router();

const {getProducts} = require("../controllers/productController") // Trae la respuesta json desde el controlador

router.route('/products').get(getProducts) // Establece desde que ruta ver el getProducts

module.exports= router;