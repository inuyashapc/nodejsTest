import { categoryRepository } from "../repository/index.js";

const getCategories = (req, res) => {
  const data = categoryRepository.getCategories;
  res.status(200).json({ data });
};
export default {
  getCategories,
};
