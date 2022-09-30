import {Response, Request} from "express";
import {getImage} from "../../services/image";

export function imageController(req: Request, res: Response) {
    const result = getImage();
    res.send(result);
}
