import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { Users } from "./users.model";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // input validation
  const { name, phoneNumber, password, role } = req.body;
  if (
    !name.firstName?.trim() ||
    !name.lastName?.trim() ||
    !phoneNumber?.trim() ||
    !password?.trim() ||
    !role?.trim()
  ) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  // does the user already exist?
  const userExists = await Users.findOne({
    phoneNumber: phoneNumber.trim(),
  });
  if (userExists) {
    const error = createHttpError(409, "User already exists");
    return next(error);
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create a new user
  const newUser = new Users({
    name,
    phoneNumber,
    password: hashedPassword,
    role,
  });
  await newUser.save();

  // response
  res.json({
    statusCode: 201,
    message: "User registered successfully",
    data: {
      id: newUser._id,
      name: newUser.name,
      phoneNumber: newUser.phoneNumber,
      role: newUser.role,
    },
  });
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
