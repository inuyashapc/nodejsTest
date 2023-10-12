import mongoose, { Schema, ObjectId } from "mongoose";
import Brand from "./Brand.js";
const Production = mongoose.model(
  "Production",
  new Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: { type: Number, ref: "Brand" }, // Sử dụng ref để liên kết đến schema Brand
    category: { type: Number, ref: "Category" },
  })
);

export default Production;
