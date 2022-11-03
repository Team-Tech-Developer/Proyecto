const product=require("../models/products")

// Ver la lista de productos
exports.getProducts =(req, res, next) =>{
    res.status(200).json({
        success: true,
        message: "In this route you will see the products"
    })
}

// Crear nuevo producto /api/products
exports.newProduct = async(req, res, next) =>{
    const producto= await product.create(req.body);

    res.status(201).json({
        success:true,
        producto
    })
}