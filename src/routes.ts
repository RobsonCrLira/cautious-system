import { Router } from "express";
import { AuthenticateUsersController } from "./Users/AuthenticateUsersController";

const routes = Router();
const authenticateUserController = new AuthenticateUsersController();

routes.post("/login", authenticateUserController.handle);

export { routes };
