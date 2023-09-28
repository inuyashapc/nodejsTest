import express from "express";
const songRouter = express.Router();
import { songController } from "../controllers/index.js";
songRouter.get("/", songController.getSong);
songRouter.post("/create", songController.createSong);

//export this songRouter to use in our index.js
export default songRouter;
