import mongoose, { Schema } from "mongoose";
import { IUser } from "./users.interface";

const usersSchema = new Schema<IUser>(
  {
    name: {
      firstName: {
        type: String,
        trim: true,
        required: true,
      },
      lastName: {
        type: String,
        trim: true,
        required: true,
      },
    },
    phoneNumber: {
      type: String,
      unique: true,
      trim: true,
      minlength: 11,
      required: true,
    },
    password: {
      trim: true,
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "participant", "organizer"],
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    otp: {
      type: String,
    },
    otpExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Users = mongoose.model<IUser>("Users", usersSchema);
