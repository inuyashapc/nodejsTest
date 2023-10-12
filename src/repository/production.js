import Production from "../model/Production.js";
const getListProduct = async () => {
  try {
    return await Production.find({})
      .populate({
        path: "brand",
        model: "Brand",
        select: "name", // Chọn các trường bạn muốn lấy
        localField: "brand", // Trường bạn muốn so sánh trong schema Product
        foreignField: "id", // Trường bạn muốn so sánh trong schema Brand
      })
      .populate({
        path: "category",
        model: "Category",
        select: "name", // Chọn các trường bạn muốn lấy
        localField: "category", // Trường bạn muốn so sánh trong schema Product
        foreignField: "id", // Trường bạn muốn so sánh trong schema Brand
      })
      .exec();
  } catch (error) {
    throw new Error(error);
  }
};
const getProduct = async (id) => {
  try {
    return await Production.findOne({ _id: id })
      .populate({
        path: "brand",
        model: "Brand",
        select: "name", // Chọn các trường bạn muốn lấy
        localField: "brand", // Trường bạn muốn so sánh trong schema Product
        foreignField: "id", // Trường bạn muốn so sánh trong schema Brand
      })
      .populate({
        path: "category",
        model: "Category",
        select: "name", // Chọn các trường bạn muốn lấy
        localField: "category", // Trường bạn muốn so sánh trong schema Product
        foreignField: "id", // Trường bạn muốn so sánh trong schema Brand
      })
      .exec();
  } catch (error) {
    throw new Error(error);
  }
};
const deleteProduct = async (id) => {
  try {
    return await Production.findOneAndDelete({ _id: id });
  } catch (error) {
    throw new Error(error);
  }
};
export default { getListProduct, getProduct, deleteProduct };
