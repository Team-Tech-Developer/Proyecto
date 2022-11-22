const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/products");
const Order=require("../models/order")
const ErrorHandler = require("../utils/errorHandler");
const products = require("../models/products");

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

// Ver una orden
exports.getOneOrder= catchAsyncErrors(async (req,res,next)=>{
    const order = await Order.findById(req.params.id).populate("user","name email") // restricion de usuario

    if(!order){
        return next(new ErrorHandler(`Order with id: ${req.params.id} not found`, 404) )
    }

    res.status(200).json({
        success:true,
        order
    })
})

// Ver todas mis ordenes (Usuario logeado)
exports.myOrders= catchAsyncErrors(async (req, res, next) =>{
    const orders = await Order.find({user: req.user.id})

    res.status(200).json({
        success:true,
        orders
    })
})

// Admin
// Ver todas las ordenes
exports.allOrders = catchAsyncErrors( async (req, res ,next) =>{
    const orders = await Order.find();

    let totalAmount= 0;
    orders.forEach(order => {
        totalAmount+= order.priceTotal;
    });

    res.status(200).json({
        success:true,
        totalAmount,
        orders
    })

})

// Editar una orden (admin)
exports.updateOrder= catchAsyncErrors(async (req, res ,next) =>{
    const order = await Order.findById(req.params.id)

    if(!order){
        return next(new ErrorHandler(`Order not found`, 404))
    }

    if(order.status==="send"){
        return next(new ErrorHandler("The order has already been sent",400))
    }

    order.status= req.body.status;
    order.dateSend= Date.now();
    order.sendInfo= (req.body.sendInfo? req.body.sendInfo: order.sendInfo);// si hay sendInfo en el body la cambia si no la deja igual

    await order.save()

    res.status(200).json({
        success:true,
        order
    })
})

async function updateStock(id, quantity){
    const product =await Product.findById(id)
    product.stock-=quantity;
    await product.save({validateBeforeSave: false}) 
}

// Eliminar una orden (admin)
exports.deleteOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id);

    if(!order){
        return next(new ErrorHandler(`This order is not registered`, 404))
    }

    await order.remove()

    res.status(200).json({
        success:true,
        message:"Order successfully removed"
    })
})