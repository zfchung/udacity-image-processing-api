import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test endpoint responses", () => {
    it("should get the api endpoint", async() => {
        const response = await request.get("/api/image?fileName=fjord&height=300&width=300");
        expect(response.status).toBe(200);
    });
})
