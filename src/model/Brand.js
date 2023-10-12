import mongoose, { Schema, ObjectId } from "mongoose";

const brandSchema = new Schema({
  id: Number,
  name: String,
});

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;
