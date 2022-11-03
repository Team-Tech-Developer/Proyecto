exports.getProducts =(req, res, next) =>{
    res.status(200).json({
        success: true,
        message: "In this route you will see the products"
    })
}