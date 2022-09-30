import express from "express";
import {imageController} from "../../controllers/image";

const imageRouter = express.Router();

imageRouter.get("/image", imageController);

export default imageRouter;
