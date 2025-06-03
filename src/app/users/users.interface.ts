export interface IUser {
  _id?: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  password: string;
  role: "admin" | "participant" | "organizer";
  email?: string;
  isVerified: boolean;
  isActive: boolean;
  otp?: string;
  otpExpires?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
