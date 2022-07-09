import express, { Application, Request, Response } from "express";
import cors from "cors";

import { add } from "./add";
import { validateAddQuery } from "./validator";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// Basic route
app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({ status: "up" });
});

// Add Route
app.get("/add", validateAddQuery, (req: Request, res: Response) => {
    // pass to add function
    const total: string = add(req.query.nums as string[]);

    // return total
    res.status(200).json({ total: total });
});

export default app;
