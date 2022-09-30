import {getImage} from "../../../services/image";

describe("getImage", () => {
    it("should return path of file", async() => {
        const query = {
            fileName: "fjord",
            width: 1,
            height: 1
        }

        const expectedResult = {
            status: 200,
            result: "thumb/fjord.jpg"
        }
        expect(await getImage(query)).toEqual(expectedResult);
    });
})
