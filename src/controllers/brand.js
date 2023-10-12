import { brandRepository } from "../repository/index.js";

const getBrands = (req, res) => {
  try {
    const data = brandRepository.getBrands();
    res.status(200).json(data);
  } catch (error) {}
};
export default { getBrands };
