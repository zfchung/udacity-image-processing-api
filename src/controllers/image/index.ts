import {Response} from "express";
import {getImage} from "../../services/image";
import {ContainerTypes, ValidatedRequest, ValidatedRequestSchema} from "express-joi-validation";

interface HelloRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        fileName: string;
        width: number;
        height: number;
    }
}

export async function imageController(req: ValidatedRequest<HelloRequestSchema>, res: Response) {
    const {status, result} = await getImage(req.query);
    if (status == 400) {
        res.status(status).send(result);
    } else {
        res.status(status).sendFile(result, {root: "src/data"});
    }
}
