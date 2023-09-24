import Course from "../model/Course.js";
const getAllCourses = async () => {
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
export default {
  getAllCourses,
  createCourse,
};
