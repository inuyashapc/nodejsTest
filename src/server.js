import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import {
  courseRouter,
  userRouter,
  songRouter,
  studentRouter,
  productRouter,
  brandRouter,
  categoryRouter,
} from "./routes/index.js";
import connectDB from "./database/database.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const port = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/song", songRouter);
app.use("/students", studentRouter);
app.use("/product", productRouter);
app.use("/brands", brandRouter);
app.use("/categories", categoryRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  await connectDB();
  console.log(`Example app listening on port ${port}`);
});
