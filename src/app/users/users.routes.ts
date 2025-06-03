import { Router } from "express";
import { registerUser, loginUser, getUserProfile } from "./users.controller";

const usersRoute = Router();

// all the users routes root -> /api/users
usersRoute.post("/register", registerUser);
usersRoute.post("/login", loginUser);
usersRoute.get("/profile", getUserProfile);

export default usersRoute;
