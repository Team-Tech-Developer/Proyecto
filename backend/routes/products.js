const express =require("express");
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productController") // Trae la respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


// Pruba de autenticación
router.route('/products').get(getProducts) // Establece desde que ruta ver el getProducts
router.route('/product/new').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); //Establece la ruta
router.route('/product/:id').get(getProductById)// Ruta para consultar por ID
router.route('/product/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);// Ruta de actualizacion
router.route('/product/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);// Ruta para eliminar por ID

module.exports= router;