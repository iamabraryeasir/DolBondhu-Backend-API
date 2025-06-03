import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // validation
  const { name, phoneNumber, password, role } = req.body;
  if (
    !name?.trim() ||
    !phoneNumber?.trim() ||
    !password?.trim() ||
    !role?.trim()
  ) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  // process

  // response
  res.json({ name, phoneNumber, password, role });
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    message: "User logged in successfully",
  });
};

export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    message: "User profile retrieved successfully",
  });
};
