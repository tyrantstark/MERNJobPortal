import express from "express"
import { isAuthenticated } from "../middleware/auth.js";
import { getUser, login, logout, register } from "../controllers/userController.js";
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",isAuthenticated,logout);
router.get("/getuser", isAuthenticated, getUser);


export default router