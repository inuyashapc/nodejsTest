import express from "express";
import { courseController } from "../controllers/index.js";
const courseRouter = express.Router();
courseRouter.get("/", courseController.getAllCourses);
courseRouter.post("/create", courseController.createCourse);
courseRouter.delete("/delete/:id", courseController.deleteCourse);
courseRouter.patch("/update/:id", courseController.updateCourse);

export default courseRouter;
