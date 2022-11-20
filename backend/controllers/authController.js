const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendToken = require("../utils/jwtToken");

// Registrar un nuevo usuario /api/user/register
exports.userRegister= catchAsyncErrors(async (req, res, next) => {
    const {name ,email ,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usq",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp=CAU"
        }
    })

    tokenEnviado(user, 201, res)
})

// Iniciar sesión - Login
exports.loginUser = catchAsyncErrors(async( req, res, next) =>{
    const { email, password} = req.body;

    //Revisar si los campos estan completos
    if(!email || !password){
        return next(new ErrorHandler("Please enter email & password", 400))
    }

    // Buscar al usuario en la BD
    const user = await User.findOne({email}).select("password")

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401))
    }

    // Comparar contraseñas, verificar si es correcta
    const passwordOk = await user.comparePass(password);

    if(!passwordOk){
        return next(new ErrorHandler("Invalid Password",401))
    }
    
    tokenEnviado(user, 200, res)

})