import { Router } from "express";

import { ensureAuthenticate } from "./middleware/ensureAuthenticate";
import { ListProductAllController } from "./products/ListProductAllController";
import { AuthenticateUsersController } from "./users/AuthenticateUsersController";

const routes = Router();
const listProduct = new ListProductAllController();
const authenticateUserController = new AuthenticateUsersController();

routes.post("/login", authenticateUserController.handle);
routes.get(
  "/products/:organizationName",
  ensureAuthenticate,
  listProduct.handle
);

export { routes };
