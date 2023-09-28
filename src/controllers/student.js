import { validationResult } from "express-validator";
import { studentRepository } from "../repository/index.js";
const getAllStudent = async (req, res) => {
  const { page, size, searchString } = req.query;
  if (page || size || searchString) {
    try {
      const studentList = await studentRepository.getAllStudent({
        page,
        size,
        searchString,
      });
      res.status(200).json({
        message: "Get students successful",
        size,
        page,
        searchString,
        data: studentList,
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  } else {
    try {
      const studentList = await studentRepository.getAllStudent();
      res.status(200).json({
        message: "Get students successful",
        data: studentList,
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  }
};

const create = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const { name, email, language, gender, phoneNumber, address } = req.body;
  try {
    const existingEmail = await studentRepository.create({
      name,
      email,
      language,
      gender,
      phoneNumber,
      address,
    });
    res.status(201).json({
      message: "Insert student successful",
      data: existingEmail,
    });
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const getStudent = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({
      errors: error.array(),
    });
  }
  const { id } = req.params;
  console.log("🚀 ========= id:", id);
  try {
    const student = await studentRepository.getStudent({ id });
    res.status(200).json({
      message: "Get detail students successful",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await studentRepository.deleteStudent({ id });
    res.status(200).json({
      message: "Delete student successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ errors: error.toString() });
  }
};

const paginationList = (req, res) => {};
export default {
  getAllStudent,
  create,
  getStudent,
  deleteStudent,
  paginationList,
};
