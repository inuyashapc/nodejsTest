import mongoose, { Schema, ObjectId } from "mongoose";

const Category = mongoose.model(
  "Category",
  new Schema({
    id: Number,
    name: String,
  })
);

export default Category;
