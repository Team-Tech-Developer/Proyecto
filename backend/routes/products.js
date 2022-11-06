const express =require("express");
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productController") // Trae la respuesta json desde el controlador

router.route('/products').get(getProducts) // Establece desde que ruta ver el getProducts
router.route('/product/new').post(newProduct); //Establece la ruta
router.route('/product/:id').get(getProductById)// Ruta para consultar por ID
router.route('/product/:id').put(updateProduct);// Ruta de actualizacion
router.route('/product/:id').delete(deleteProduct);// Ruta para eliminar por ID

module.exports= router;