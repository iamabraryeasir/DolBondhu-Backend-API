import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();

// middlewares
app.use(express.json());

// routes
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

// global error handler
app.use(
  globalErrorHandler as {
    (
      err: any, // eslint-disable-line @typescript-eslint/no-explicit-any
      req: Request,
      res: Response,
      next: NextFunction
    ): void;
  }
);

export default app;
