
export interface IImage {
    fileName: string;
    width: number;
    height: number;
}

export function getImage({fileName, width, height}: any){
    return `image/${fileName}.jpg`;
}
