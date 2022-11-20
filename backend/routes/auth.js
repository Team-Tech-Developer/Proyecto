const express=require("express");
const { userRegister, loginUser, logOut, forgotPassword, resetPassword } = require("../controllers/authController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router= express.Router();

router.route("/user/register").post(userRegister)
router.route("/login").get(loginUser)
router.route("/logout").get(isAuthenticatedUser, logOut)
router.route("/forgotPassword").post(forgotPassword)
router.route("/resetPassword/:token").post(resetPassword)

module.exports= router