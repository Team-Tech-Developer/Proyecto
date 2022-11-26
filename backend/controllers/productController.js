const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const product = require("../models/products");
const APIFEATURES = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

// Ver la lista de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const productCount = await product.countDocuments();

  const apiFeatures = new APIFEATURES(product.find(), req.query)
    .search()
    .filter();

  let productos = await apiFeatures.query;
  let filteredProductsCount = productos.length
  apiFeatures.pagination(resPerPage);
  productos = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    productCount,
    resPerPage,
    filteredProductsCount,
    productos,
  });

  const products = await product.find();
  if (!products) {
    return next(new ErrorHandler("Data not found", 404));
  }
});

// Ver un producto por ID
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
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
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let producto = await product.findById(req.params.id);
  // Para avisarle al usuario si el objeto no existe
  if (!producto) {
    return next(new ErrorHandler("Product not found", 404));
  }
  // si el objeto existe se ejecuta la actualizacion
  producto = await product.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Valida solo los atributos modificados o nuevos
    runValidators: true,
  });
  // respode OK si el producto se actualizó
  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    producto,
  });
});
// Eliminar producto
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const producto = await product.findById(req.params.id);
  // Para avisarle al usuario si el objeto no existe
  if (!producto) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await producto.remove();
  res.status(200).json({
    success: true,
    message: "Product removed successfully",
  });
});
// Crear nuevo producto /api/products
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const producto = await product.create(req.body);

  res.status(201).json({
    success: true,
    producto,
  });
});

// Crear o actualizar una review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, commentary, idProduct } = req.body;

  const opinion = {
    nameClient: req.user.name,
    rating: Number(rating),
    commentary,
  };

  const producto = await product.findById(idProduct);

  const isReviewed = producto.reviews.find(
    (item) => item.nameClient === req.user.name
  );

  if (isReviewed) {
    producto.reviews.forEach((opinion) => {
      if (opinion.nameClient === req.user.name) {
        (opinion.commentary = commentary), (opinion.rating = rating);
      }
    });
  } else {
    producto.reviews.push(opinion);
    producto.numScores = producto.reviews.length;
  }

  producto.score =
    producto.reviews.reduce((acc, opinion) => opinion.rating + acc, 0) /
    producto.reviews.length;

  await producto.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "your opinion was registered correctly",
  });
});

// Ver todas las review de un producto
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const producto = await product.findById(req.query.id);

  res.status(200).json({
    success: true,
    reviews: producto.reviews,
  });
});

// Eliminar review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const producto = await product.findById(req.query.idProduct);

  const reviews = producto.reviews.filter(
    (review) => review._id.toString() !== req.query.idReview.toString()
  );

  const numScores = reviews.length;
  const score =
    producto.reviews.reduce((acc, Opinion) => Opinion.rating + acc, 0) /
    reviews.length;

  await product.findByIdAndUpdate(
    req.query.idProduct,
    {
      reviews,
      score,
      numScores,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Review deleted correctly",
  });
});

// uso del FETCH - no se usa solo para consumo
// ver todos los productos
function showProductos() {
  fetch("http://localhost:4000/api/products")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

//showProductos(); // Llamdo al metodo para probar la consulta

// Ver por id
function showProductByID(id) {
  fetch("http://localhost:4000/api/product/" + id)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}
//showProductByID('636819c9e1a5b914b32d6c5b')
