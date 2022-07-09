import supertest from "supertest";
import app from "./app";

describe("API Tests", () => {
    it("should pass", () => {
        expect(true);
    });

    it("should return status up", async () => {
        await supertest(app)
            .get("/")
            .expect(200)
            .then((res) => {
                expect(res.body.status).toBe("up");
            });
    });

    it("should error with no params", async () => {
        await supertest(app)
            .get("/add")
            .expect(400)
            .then((res) => {
                expect(res.body.error).toBe("Bad Request: Missing nums query");
            });
    });

    it("should error with one num", async () => {
        await supertest(app)
            .get("/add?nums=1")
            .expect(400)
            .then((res) => {
                expect(res.body.error).toBe(
                    "Bad Request: nums is not an array"
                );
            });
    });

    it("should error with non-number nums", async () => {
        await supertest(app)
            .get("/add?nums=1&nums=a")
            .expect(400)
            .then((res) => {
                expect(res.body.error).toBe(
                    "Bad Request: nums is not an array of numbers"
                );
            });
    });

    it("should return the sum of 1 and 2", async () => {
        await supertest(app)
            .get("/add?nums=1&nums=2")
            .expect(200)
            .then((res) => {
                expect(res.body.total).toBe("3");
            });
    });

    it("should return the sum of 1.1 and 2.2", async () => {
        await supertest(app)
            .get("/add?nums=1.1&nums=2.2")
            .expect(200)
            .then((res) => {
                expect(res.body.total).toBe("3.3");
            });
    });
});
