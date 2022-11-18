const express=require("express");
const { userRegister } = require("../controllers/authController");
const router= express.Router();

router.route("/user/register").post(userRegister)

module.exports= router