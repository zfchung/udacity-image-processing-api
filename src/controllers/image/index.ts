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
    const result = await getImage(req.query);
    res.status(200).sendFile(result, {root: "src/data"});
}
