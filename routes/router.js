import express from 'express';
import { productController } from '../controllers/controller.js';

const productRouter = new express.Router();

//product routes

productRouter.post('/', productController.create);
productRouter.get('/allProducts', productController.get);
productRouter.get('/getById/:id', productController.getProductById);
productRouter.delete('/:id', productController.delete);
productRouter.put('/updateById/:id', productController.update);


export default productRouter;



