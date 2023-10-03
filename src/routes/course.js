import express from "express";
import { courseController } from "../controllers/index.js";
import checkAuth from "../middleware/check-auth.js";
const courseRouter = express.Router();
courseRouter.get("/", checkAuth, courseController.getAllCourses);
courseRouter.post("/create", courseController.createCourse);
courseRouter.delete("/delete/:id", courseController.deleteCourse);
courseRouter.patch("/update/:id", courseController.updateCourse);

export default courseRouter;
