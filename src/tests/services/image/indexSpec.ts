import {getImage} from "../../../services/image";

describe("getImage", () => {
    it("should return path of file", async() => {
        const query = {
            fileName: "fjord",
            width: 1,
            height: 1
        }
        expect(await getImage(query)).toBe("thumb/fjord.jpg");
    });
})
