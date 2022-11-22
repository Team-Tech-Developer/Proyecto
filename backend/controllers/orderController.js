const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const Order=require("../models/order")
const Product= require("../models/products")

// Crear una nueva orden
exports.newOrder= catchAsyncErrors( async (req, res, next) =>{
    const {
        items,
        sendInfo,
        priceItems,
        priceTax,
        priceSend,
        priceTotal,
        paymentInfo
    } = req.body;

    const order = await Order.create({
        items,
        sendInfo,
        priceItems,
        priceTax,
        priceSend,
        priceTotal,
        paymentInfo,
        paymentDate: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success:true,
        order
    })

})