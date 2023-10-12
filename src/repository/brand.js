import Brand from "../model/Brand.js";

const getBrands = async () => {
  try {
    return Brand.find();
  } catch (error) {}
};

export default { getBrands };
