import Course from "../model/Course.js";
const getAllCourses = async () => {
  console.log("data", await Course.find({}));
  return await Course.find({});
};
const createCourse = async ({ name, level, videoId, author, description }) => {
  const newCourse = await Course.create({
    name,
    level,
    videoId,
    author,
    description,
  });
  return newCourse;
};
const deleteCourse = async ({ id }) => {
  console.log("🚀 ========= id1234:", id);
  try {
    const result = await Course.deleteOne({ _id: id });
    console.log("🚀 ========= result:", result);
    return result;
  } catch (error) {
    throw new Error("Delete is not successful");
  }
};
const updateCourse = async ({
  id,
  name,
  level,
  videoId,
  author,
  description,
}) => {
  try {
    const updateCourse = await Course.updateOne(
      { _id: id },
      {
        name,
        level,
        videoId,
        author,
        description,
      }
    );
    return updateCourse;
  } catch (error) {
    throw new Error("Update do not successful");
  }
};
export default {
  getAllCourses,
  createCourse,
  deleteCourse,
  updateCourse,
};
