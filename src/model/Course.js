import mongoose, { ObjectId, Schema } from "mongoose";
const Course = mongoose.model(
  "Course",
  new Schema({
    id: ObjectId,
    name: {
      type: String,
      required: true,
    },
    level: String,
    videoId: String,
    author: String,
    description: String,
    createAt: {
      type: Date,
      default: Date.now,
    },
    updateAt: {
      type: Date,
      default: Date.now,
    },
  })
);
export default Course;
