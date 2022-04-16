import express from "express";
import { userController } from "../controllers/userController.js";

const userRouter = new express.Router();

//user routes

userRouter.post("/", userController.create);
userRouter.get("/getById/:id", userController.getUserById);
userRouter.delete("/:id", userController.delete);
userRouter.put("/:id", userController.update);

export default userRouter;
