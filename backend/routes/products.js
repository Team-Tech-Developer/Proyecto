const express =require("express");
const router = express.Router();

const {getProducts, newProduct} = require("../controllers/productController") // Trae la respuesta json desde el controlador

router.route('/products').get(getProducts) // Establece desde que ruta ver el getProducts
router.route('/product/new').post(newProduct); //Establece la ruta

module.exports= router;