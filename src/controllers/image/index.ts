import {Response, Request} from "express";
import {getImage} from "../../services/image";

export function imageController(req: Request, res: Response) {
    const input = {
        fileName: req.query.fileName,
        height: req.query.height,
        width: req.query.width
    }
    const result = getImage(input);
    res.sendFile(result, {root: "src/data"});
}
