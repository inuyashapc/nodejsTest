import { validationResult } from "express-validator";
import { songRepository } from "../repository/index.js";

const getSong = async (req, res) => {
  try {
    const songList = await songRepository.getSong();
    res.status(200).json({
      message: "Get song",
      data: songList,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
const createSong = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({ errors: error.array() });
  }
  const { name, description, author, singer } = req.body;
  try {
    const newSong = await songRepository.createSong({
      name,
      description,
      author,
      singer,
    });
    res.status(201).json({
      message: "Create successfully",
      data: newSong,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
export default {
  getSong,
  createSong,
};
