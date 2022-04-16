import express from 'express';
import { userController } from '../controllers/controller.js';

const userRouter = new express.Router();

//product routes

userRouter.post('/', userController.create);
userRouter.get('/getById/:id', userController.getUserById);
userRouter.delete('/:id', userController.delete);
userRouter.put('/updateById/:id', userController.update);


export default userRouter;
