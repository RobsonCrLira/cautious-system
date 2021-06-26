import { Router } from "express";
import { ListProductAllController } from "./products/ListProductAllController";
import { AuthenticateUsersController } from "./users/AuthenticateUsersController";

const routes = Router();
const authenticateUserController = new AuthenticateUsersController();
const listProduct = new ListProductAllController();

routes.post("/login", authenticateUserController.handle);
routes.get("/product", listProduct.handle);

export { routes };
