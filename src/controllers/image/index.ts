import {Response, Request} from "express";

export function imageController(req: Request, res: Response) {
    res.send("Image Controller");
}
