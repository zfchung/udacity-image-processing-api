import {sampleFunction} from "../index";

describe("test sample function", () => {
    it("should exist", () => {
        expect(sampleFunction).toBeDefined();
        expect(sampleFunction()).toBe(null);
    });
})
