import { validationResult } from "express-validator";
import { courseRepository } from "../repository/index.js";

const getAllCourses = async (req, res) => {
  const courseList = await courseRepository.getAllCourses();
  res.status(200).json({
    message: "Get all list",
    data: courseList,
  });
};

const createCourse = async (req, res) => {
  const error = validationResult(req);
  console.log("🚀 ========= error:", error);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const { name, level, videoId, author, description } = req.body;
  try {
    const newCourse = await courseRepository.createCourse({
      name,
      level,
      videoId,
      author,
      description,
    });
    res.status(201).json({
      message: "Create successful",
      data: newCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create is not successfull",
    });
  }
};

export default { getAllCourses, createCourse };
