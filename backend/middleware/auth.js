const User = require("../models/auth")
const jwt= require("jsonwebtoken")
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors")

// Verificar si el usuario esta autenticado(existencia y veracidad del token)
exports.isAuthenticatedUser= catchAsyncErrors(async (req, res, next) =>{
    const {token}= req.cookies

    if(!token){
        return next(new ErrorHandler("You must be logged in to access this resource", 401))
    }
    const decoded = jwt.decode(token, process.env.JWT_SECRECT)
    req.user = await User.findById(decoded.id);

    next();
    
})

// Capturar roles
exports.authorizeRoles= (...roles) =>{
    return (req, res, next) =>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role (${req.user.role}) is not allowed to enter this area.`),403)
        }
        next()
    }
}