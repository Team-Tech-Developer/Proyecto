const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const product = require("../models/products");
const ErrorHandler = require("../utils/errorHandler");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

// Ver la lista de productos
exports.getProducts =catchAsyncErrors(async (req, res, next) => {
  const products = await product.find();
  if (!products) {
    return next(new ErrorHandler("Data not found", 404));
  }

  res.status(200).json({
    success: true,
    total: products.length,
    products,
  });
});

// Ver un producto por ID
exports.getProductById =catchAsyncErrors( async (req, res, next) => {
  const producto = await product.findById(req.params.id);
  if (!producto) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Here is the info of your product: ",
    producto,
  });
});

//Update de un producto
exports.updateProduct =catchAsyncErrors(async (req, res, next) => {
  let producto = await product.findById(req.params.id);
  // Para avisarle al usuario si el objeto no existe
  if (!producto) {
    return next(new ErrorHandler("Product not found", 404));
  }
// si el objeto existe se ejecuta la actualizacion
  producto = await product.findByIdAndUpdate(req.params.id, req.body, {
    new:true, // Valida solo los atributos modificados o nuevos
    runValidators:true
  });
  // respode OK si el producto se actualizó
  res.status(200).json({
    success:true,
    message: "Product updated successfully",
    producto
  })
});
// Eliminar producto
exports.deleteProduct =catchAsyncErrors(async (req, res, next) => {
    const producto = await product.findById(req.params.id);
    // Para avisarle al usuario si el objeto no existe
    if (!producto) {
      return next(new ErrorHandler("Product not found", 404));
    }

    await producto.remove();
    res.status(200).json({
        success:true,
        message:"Product removed successfully"
    })
})
// Crear nuevo producto /api/products
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  const producto = await product.create(req.body);

  res.status(201).json({
    success: true,
    producto,
  });
});

// uso del FETCH - no se usa solo para consumo
// ver todos los productos
function showProductos() {
    fetch('http://localhost:4000/api/products')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//showProductos(); // Llamdo al metodo para probar la consulta

// Ver por id
function showProductByID(id) {
    fetch('http://localhost:4000/api/product/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//showProductByID('636819c9e1a5b914b32d6c5b')