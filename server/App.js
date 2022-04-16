import express from "express";
import productRouter from "../routes/productRouter.js";
import userRouter from "../routes/userRouter.js";
import cors from "cors";
import logger from "morgan";

let app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/products", productRouter);
app.use("/users", userRouter);

export default app;
