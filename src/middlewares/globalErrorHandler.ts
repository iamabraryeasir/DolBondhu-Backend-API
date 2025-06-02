import { NextFunction, Request, Response } from "express";
import { config } from "../config/config";
import { HttpError } from "http-errors";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction // eslint-disable-line @typescript-eslint/no-unused-vars
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  const errorResponse = {
    statusCode,
    message,
    ...(config.env === "development" && { stack: err.stack }),
  };

  return res.status(statusCode).json(errorResponse);
};

export default globalErrorHandler;
