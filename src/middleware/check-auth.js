import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log("🚀 ========= token:", token);
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
    req.userData = decoded;
  } catch (error) {
    return res.status(401).json({
      message: "Auth false",
    });
  }
  next();
};
