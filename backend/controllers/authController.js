const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto")

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

// Cerrar sesion - logout
exports.logOut=catchAsyncErrors(async(req, res, next)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "The session has been closed"
    })
})

// Olvide mi contraseña
exports.forgotPassword = catchAsyncErrors(async( req, res, next) =>{
    const user= await User.findOne({email: req.body.email});

    if(!user){
        return next(new ErrorHandler("User not found", 404))
    }
    const resetToken= user.genResetPasswordToken();

    await user.save({validateBeforeSave: false})

    // Crear una url para hacer el reset de la contraseña
    const resetUrl= `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`

    const message=`Hi,\n\nPlease, follow this link to set a new password:
     \n\n${resetUrl}\n\nIf you did not request this link, please contact support.
     \n\nAtt:\n Team Teach Store`

     try{
        await sendEmail({
            email:user.email,
            subject: "Team Teach Store Password recovery",
            message
        })
        res.status(200).json({
            success:true,
            message: `Email send to: ${user.email}`
        })
     }catch(error){
        user.resetPasswordToken= undefined;
        user.resetPasswordExpire= undefined;

        await user.save({validateBeforeSave:false})
        return next(new ErrorHandler(error.message, 500))
     }
})

// resetear la contraseña
exports.resetPassword = catchAsyncErrors(async (req, res, next)=>{
    // Hashear el token que llego con la URL
    const resetPasswordToken= crypto.createHash("sha256").update(req.params.token).digest("hex")
    // Buscar al usuario al que le vamos a resetear la contraseña
    const user =await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt: Date.now()}
    })
    // El usuario si esta en la BD?
    if(!user){
        return next(new ErrorHandler("Invalid Token or it's already expired", 400))
    }
    // Diligenciamos bien los campos?
    if(req.body.password != req.body.confirmPassword){
        return next(new ErrorHandler("The passwords does not match",400))
    }

    // Setear la nueva contraseña
    user.password= req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;

    await user.save();
    tokenEnviado(user, 200, res)

})