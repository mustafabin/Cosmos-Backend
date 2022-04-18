import express from "express";
import { userController } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
const userRouter = new express.Router();

//user routes

userRouter.post("/register", userController.create);
userRouter.post("/login", userController.login);
userRouter.post("/me", protect, userController.getMe);
userRouter.delete("/:id", userController.delete);
userRouter.put("/:id", userController.update);

export default userRouter;
