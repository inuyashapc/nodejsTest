import express from "express";
import { studentController } from "../controllers/index.js";
import { body } from "express-validator";
const studentRouter = express.Router();

studentRouter.get("/", studentController.getAllStudent);
studentRouter.get("/:id", studentController.getStudent);
studentRouter.post(
  "/create",
  body("email").isEmail().withMessage("Email is not valid"),
  studentController.create
);
studentRouter.delete("/delete/:id", studentController.deleteStudent);
studentRouter.get("/", studentController.paginationList);
export default studentRouter;
