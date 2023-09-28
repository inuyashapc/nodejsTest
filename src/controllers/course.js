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
      message: "Create is not successful",
    });
  }
};

const deleteCourse = async (req, res) => {
  console.log("id", req.params.id);
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  try {
    const result = await courseRepository.deleteCourse({ id: req.params.id });
    console.log("🚀 ========= result1234:", result);
    res.status(200).json({
      message:
        result.deletedCount == 1
          ? "Delete successful"
          : "Delete is not successful",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete is not successful",
    });
  }
};

const updateCourse = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({ errors: error.array() });
  }
  const { name, level, videoId, author, description } = req.body;
  const id = req.params.id;
  console.log("🚀 ========= id:", id);
  try {
    const updateCourse = await courseRepository.updateCourse({
      id,
      name,
      level,
      videoId,
      author,
      description,
    });
    res.status(200).json({
      message: updateCourse.matchedCount
        ? `Update ${name} course successful`
        : `Update ${name} course not successful`,
      data: updateCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: error.array(),
    });
  }
};
export default { getAllCourses, createCourse, deleteCourse, updateCourse };
