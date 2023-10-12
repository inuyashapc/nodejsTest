import Category from "../model/Category.js";
const getCategories = async () => {
  try {
    const data = await Category.find();
    return data;
  } catch (error) {}
};

export default {
  getCategories,
};
