import express from "express";
import { body } from "express-validator";
const userRouter = express.Router();
import { userController } from "../controllers/index.js";
userRouter.get("/", userController.getAllUser);

userRouter.post(
  "/register",
  body("email").isEmail().withMessage("Email is not valid"),
  body("password").isLength({ min: 5 }),
  userController.register
);
userRouter.post(
  "/login",
  body("email").isEmail().withMessage("Email is not valid"),
  body("password").isLength({ min: 5 }),
  userController.login
);

//export this userRouter to use in our index.js
export default userRouter;
