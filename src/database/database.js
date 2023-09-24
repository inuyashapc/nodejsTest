import mongoose from "mongoose";

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  // console.log("🚀 ========= connection:", connection);
  return connection;
};

export default connectDB;
