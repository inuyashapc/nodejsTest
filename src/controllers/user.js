import { validationResult } from "express-validator";
import { userRepository } from "../repository/index.js";
const register = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  const { name, email, password, phoneNumber, address } = req.body;

  try {
    const newUser = await userRepository.register({
      name,
      email,
      password,
      phoneNumber,
      address,
    });
    console.log("🚀 ========= newUser:", newUser);
    res.status(201).json({
      message: "Register successful",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const { email, password } = req.body;
  try {
    const existingUser = await userRepository.login({ email, password });
    console.log("🚀 ========= existingUser:", existingUser);
    res.status(200).json({
      message: "Login successful",
      data: existingUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};
const getAllUser = async (req, res) => {
  const userList = await userRepository.getAllUser();
  res.status(200).json({
    data: userList,
  });
};
export default {
  register,
  login,
  getAllUser,
};
