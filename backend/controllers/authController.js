const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

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

    res.status(201).json({
        success:true,
        user
    })
})