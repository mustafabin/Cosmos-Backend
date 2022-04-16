import express from "express";
import { userController } from "../controllers/userController";

const userRouter = new express.Router();

//user routes

userRouter.post("/", userController.create);
userRouter.get("/getById/:id", userController.getUserById);
userRouter.delete("/:id", userController.delete);
userRouter.put("/updateById/:id", userController.update);

export default userRouter;
