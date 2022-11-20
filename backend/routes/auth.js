const express=require("express");
const { userRegister, loginUser } = require("../controllers/authController");
const router= express.Router();

router.route("/user/register").post(userRegister)
router.route("/login").get(loginUser)

module.exports= router