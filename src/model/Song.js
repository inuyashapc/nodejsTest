import mongoose, { ObjectId, Schema } from "mongoose";

const Song = mongoose.model(
  "Song",
  new Schema({
    id: ObjectId,
    name: {
      type: String,
      required: true,
    },
    description: String,
    author: String,
    singer: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  })
);

export default Song;
