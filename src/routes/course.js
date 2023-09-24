import express from "express";
import { courseController } from "../controllers/index.js";
const courseRouter = express.Router();
courseRouter.get("/", courseController.getAllCourses);
courseRouter.post("/create", courseController.createCourse);

export default courseRouter;
