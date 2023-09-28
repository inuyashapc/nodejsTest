import Student from "../model/Student.js";
const create = async ({
  name,
  email,
  language,
  gender,
  phoneNumber,
  address,
}) => {
  try {
    const existingStudent = await Student.findOne({ email });
    console.log("🚀 ========= existingStudent:", existingStudent);
    if (existingStudent != null) {
      throw new Error("Email is existing");
    } else {
      const newStudent = await Student.create({
        name,
        email,
        language,
        gender,
        phoneNumber,
        address,
      });
      return newStudent;
    }
  } catch (error) {
    throw error;
  }
};

const getAllStudent = async ({ page, size, searchString }) => {
  try {
    if (page || size || searchString) {
      const searchCondition = {};

      if (searchString) {
        searchCondition.$or = [
          { name: { $regex: searchString, $options: "i" } },
          { email: { $regex: searchString, $options: "i" } },
        ];
      }

      // Số lượng bản ghi trên mỗi trang
      const pageSize = parseInt(size) || 10;

      // Trang hiện tại
      const currentPage = parseInt(page) || 1;

      return await Student.find({ $and: [searchCondition] })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize);
    } else {
      return await Student.find({});
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getStudent = async ({ id }) => {
  try {
    const student = await Student.findOne({ _id: id });
    return student;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteStudent = async ({ id }) => {
  try {
    const result = await Student.findOneAndDelete({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  create,
  getAllStudent,
  getStudent,
  deleteStudent,
};
