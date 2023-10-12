import { productionRepository } from "../repository/index.js";
const getAllProducts = async (req, res) => {
  try {
    const productList = await productionRepository.getListProduct();
    console.log("🚀 ========= productList:", productList);
    res.status(200).json({
      message: "Get data successfully",
      data: productList,
    });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productionRepository.getProduct(id);
    console.log("🚀 ========= productList:", product);
    res.status(200).json({
      message: "Get data successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ========= req.params:", req.params);
  try {
    const productList = await productionRepository.deleteProduct(id);
    console.log("🚀 ========= productList:", productList);
    res.status(200).json({
      message: "Get data successfully",
      data: productList,
    });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};
export default {
  getAllProducts,
  getProduct,
  deleteProduct,
};
