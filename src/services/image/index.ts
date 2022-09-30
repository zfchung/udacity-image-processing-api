import sharp from "sharp";
import * as fs from "fs";

export interface IImage {
    fileName: string;
    width: number;
    height: number;
}

export async function getImage({fileName, width, height}: IImage) {

    const newWidth = Number(width);
    const newHeight = Number(height);

    if (!fs.existsSync(`src/data/image/${fileName}.jpg`)) {
        return {
            status: 400,
            result: `Image ${fileName} does not exist.`
        }
    }

    if (!fs.existsSync(`src/data/thumb/${fileName}.jpg`)) {
        await sharp(`src/data/image/${fileName}.jpg`)
            .resize(newWidth, newHeight)
            .jpeg()
            .toFile(`src/data/thumb/${fileName}.jpg`);
    }

    return {
        status: 200,
        result: `thumb/${fileName}.jpg`
    };
}
