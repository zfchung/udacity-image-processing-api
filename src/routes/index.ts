import express from "express";
import {imageController} from "../controllers/image";

const router = express.Router();

router.get("/", imageController);

export default router;
