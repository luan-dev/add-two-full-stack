import express, { Application, Request, Response, NextFunction } from "express";

/**
 * Validator Middleware to ensure params are valid
 */
export function validateAddQuery(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const data = req.query;

    // error if no nums
    if (data["nums"] == null) {
        return res
            .status(400)
            .json({ error: "Bad Request: Missing nums query" });
    }

    const nums = data.nums;

    // validate it is an array of numbers
    if (!Array.isArray(nums)) {
        return res
            .status(400)
            .json({ error: "Bad Request: nums is not an array" });
    } else {
        for (const num of nums as string[]) {
            const temp = parseFloat(num);
            if (isNaN(temp)) {
                return res.status(400).json({
                    error: "Bad Request: nums is not an array of numbers",
                });
            }
        }
    }

    // validate nums is at least two nums
    if (nums.length === 0) {
        res.status(400).json({ error: "Bad Request: No numbers provided" });
    } else if (nums.length < 2) {
        res.status(400).json({
            error: "Bad Request: Too few numbers provided",
        });
    }

    next();
}
