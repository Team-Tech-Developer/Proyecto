const express=require("express");
const { userRegister, loginUser, logOut, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, getAllUsers, getUserDetails, updateUser, deleteUser } = require("../controllers/authController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router= express.Router();

router.route("/user/register").post(userRegister)
router.route("/login").get(loginUser)
router.route("/logout").get(isAuthenticatedUser, logOut)
router.route("/forgotPassword").post(forgotPassword)
router.route("/resetPassword/:token").post(resetPassword)
router.route("/me").get(isAuthenticatedUser, getUserProfile)
router.route("/me/updatePassword").put(isAuthenticatedUser, updatePassword)
router.route("/me/updateProfile").put(isAuthenticatedUser, updateProfile)

// Rutas Admin 
router.route("/admin/allUsers").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers)
router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles("admin",), getUserDetails)
router.route("/admin/updateUser/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
router.route("/admin/deleteUser/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser)

module.exports= router