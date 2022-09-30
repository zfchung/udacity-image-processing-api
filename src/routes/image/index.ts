import * as Joi from 'joi'
import {createValidator} from 'express-joi-validation';
import express from "express";
import {imageController} from "../../controllers/image";

const validator = createValidator()

const querySchema = Joi.object({
    fileName: Joi.string().required(),
    width: Joi.number().required(),
    height: Joi.number().required()
})

const imageRouter = express.Router();

imageRouter.get("/image", validator.query(querySchema), imageController);

export default imageRouter;
