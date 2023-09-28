import Song from "../model/Song.js";
const getSong = async () => {
  return await Song.find({});
};
const createSong = async ({ name, description, author, singer }) => {
  const newSong = await Song.create({ name, description, author, singer });
  return newSong;
};

export default { getSong, createSong };
