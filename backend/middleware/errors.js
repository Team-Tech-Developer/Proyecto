const ErrorHandler = require('../utils/errorHandler')

module.exports= (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"

    res.status(err.statusCode).json({
        success:false,
        message: err.stack
    })

    // Error de clave duplicada en mongoose
    if(err.code === 11000){
        const message=`Duplicate key ${Object.keys(err.keyValue)}`;
        error=new ErrorHandler(message,400)
    }

    // Error de JWT
    if(err.name==="JsonWebTokenError"){
        const message= "Json Web Token invalido, intelo de nuevo"
        error= new ErrorHandler(message,400)
    }

    // JWT TOKEN EXPIRADO
    if(err.name="TokenExpiredError"){
        const message="EL token de JWT esta vencido, ya expiró, intentelo de nuevo"
        error= new ErrorHandler(message,400)
    }
}
