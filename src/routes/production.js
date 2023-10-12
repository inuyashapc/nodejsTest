import express from "express";
import { productController } from "../controllers/index.js";
const productRouter = express.Router();
productRouter.get("/", productController.getAllProducts);
productRouter.get("/detail/:id", productController.getProduct);
productRouter.delete("/delete/:id", productController.deleteProduct);
export default productRouter;
