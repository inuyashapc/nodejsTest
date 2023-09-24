import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const register = async ({ name, email, password, phoneNumber, address }) => {
  const existingUser = await User.findOne({ email }).exec();
  if (existingUser != null) throw new Error("User already existing");
  const hashPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SECRET_KEY)
  );
  console.log("data", parseInt(process.env.SECRET_KEY));
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    phoneNumber,
    address,
  });
  return {
    ...newUser._doc,
    password: "Not show",
  };
};

const login = async ({ email, password }) => {
  const existingUser = await User.findOne({ email }).exec();
  if (existingUser == null) {
    throw new Error("User is not exits");
  } else {
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (isMatch == true) {
      const token = jwt.sign(
        {
          data: existingUser,
          expiresIn: "2 days",
        },
        process.env.SECRET_JWT_KEY
      );
      return {
        ...existingUser.toObject(),
        password: "Not show",
        token: token,
      };
    } else {
      throw new Error("Wrong email and password");
    }
  }
};

const getAllUser = async () => {
  return await User.find({});
};
export default {
  register,
  login,
  getAllUser,
};
