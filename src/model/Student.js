import mongoose, { ObjectId, Schema } from "mongoose";
const Student = mongoose.model(
  "Student",
  new Schema({
    id: ObjectId,
    name: String,
    email: String,
    language: [String],
    gender: String,
    phoneNumber: String,
    address: String,
  })
);

export default Student;
