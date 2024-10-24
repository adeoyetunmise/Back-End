import { signUp, logIn } from "../controllers/userController.js";
import { Router } from "express";


const userRoute = Router();

userRoute.post("/register", signUp )
userRoute.post("/login", logIn )


export default userRoute