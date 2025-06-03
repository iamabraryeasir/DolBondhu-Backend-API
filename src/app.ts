import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import appRoute from "./api";
import morgan from "morgan";

const app: Application = express();

// middlewares
app.use(express.json());

// morgan for logging
app.use(morgan("dev"));

// routes
app.use("/api", appRoute);

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
