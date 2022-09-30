import express from "express";
import imageRouter from "./image";

const router = express.Router();

router.use("/api", imageRouter);

export default router;
