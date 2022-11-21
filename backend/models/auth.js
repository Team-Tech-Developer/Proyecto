const moongose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt= require("jsonwebtoken")

const userSchema = new moongose.Schema({
    name:{
        type:String,
        required: [true, "Please enter a name "],
        maxlength: [120, "The user name max length is 120 characters"]
    },
    email:{
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password:{
        type:String,
        required: [true, "Please enter a password"],
        minlength: [8, "Your password must have at least 8 characters"],
        select: false
    },
    avatar:{
        public_id:{
            type:String,
            required: true
        },
        url:{
            type:String,
            required: true
        }
    },
    role:{
        type:String,
        default: 'user'
    },
    registrationDate:{
        type:Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
})
// Encripta la contraseña
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// Decodifica las contraseñas y las compara
userSchema.methods.comparePass = async function (passGiven){
    return await bcrypt.compare(passGiven, this.password)
}

// Retornar un JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

module.exports = moongose.model("auth",userSchema)