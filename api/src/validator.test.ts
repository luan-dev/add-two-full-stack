import express, { Application, Request, Response, NextFunction } from "express";

import { validateAddQuery } from "./validator";

describe("Test validation middleware", () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction = jest.fn();

    beforeEach(() => {
        mockReq = {};
        mockRes = {
            json: jest.fn(),
            status: function (s) {
                this.statusCode = s;
                return this;
            },
        };
    });

    it("should error without nums", async () => {
        mockReq.query = {};
        const expected = {
            error: "Bad Request: Missing nums query",
        };
        validateAddQuery(mockReq as Request, mockRes as Response, mockNext);
        expect(mockRes.statusCode).toEqual(400);
        expect(mockRes.json).toBeCalledWith(expected);
    });

    it("should error with non-array nums", async () => {
        mockReq.query = { nums: "not a num" };
        const expected = {
            error: "Bad Request: nums is not an array",
        };

        validateAddQuery(mockReq as Request, mockRes as Response, mockNext);
        expect(mockRes.statusCode).toEqual(400);
        expect(mockRes.json).toBeCalledWith(expected);
    });

    it("should error with non-number nums", async () => {
        mockReq.query = { nums: ["a", "b"] };
        const expected = {
            error: "Bad Request: nums is not an array of numbers",
        };

        validateAddQuery(mockReq as Request, mockRes as Response, mockNext);
        expect(mockRes.statusCode).toEqual(400);
        expect(mockRes.json).toBeCalledWith(expected);
    });

    it("should error with no nums", async () => {
        mockReq.query = { nums: [] };
        const expected = {
            error: "Bad Request: No numbers provided",
        };

        validateAddQuery(mockReq as Request, mockRes as Response, mockNext);
        expect(mockRes.statusCode).toEqual(400);
        expect(mockRes.json).toBeCalledWith(expected);
    });

    it("should error with not enough nums", async () => {
        mockReq.query = { nums: ["1"] };
        const expected = {
            error: "Bad Request: Too few numbers provided",
        };

        validateAddQuery(mockReq as Request, mockRes as Response, mockNext);
        expect(mockRes.statusCode).toEqual(400);
        expect(mockRes.json).toBeCalledWith(expected);
    });

    it("should accept the numbers", async () => {
        mockReq.query = { nums: ["1", "2"] };
        const expected = {};

        validateAddQuery(mockReq as Request, mockRes as Response, mockNext);
        expect(mockNext).toBeCalled();
    });
});
