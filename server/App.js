import express from 'express';
import productRouter from '../routes/router.js';
import userRouter from '../routes/userRouter.js';
import cors from 'cors';

let app = express();

app.use(express.json());
app.use(cors());
app.use('/products', productRouter);
app.use('/users', userRouter);



export default app;
