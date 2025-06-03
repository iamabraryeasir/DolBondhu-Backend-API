import { Router } from "express";
import usersRoute from "./app/users/users.routes";

const appRoute = Router();

// all the app routes root -> /api
appRoute.use("/users", usersRoute);

export default appRoute;
