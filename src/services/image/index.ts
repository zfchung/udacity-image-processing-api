import sharp from "sharp";

export interface IImage {
    fileName: string;
    width: number;
    height: number;
}

export async function getImage({fileName, width, height}: IImage) {

    const newWidth = Number(width);
    const newHeight = Number(height);

    await sharp(`src/data/image/${fileName}.jpg`)
        .resize(newWidth, newHeight)
        .jpeg()
        .toFile(`src/data/thumb/${fileName}.jpg`);

    return `thumb/${fileName}.jpg`;
}
