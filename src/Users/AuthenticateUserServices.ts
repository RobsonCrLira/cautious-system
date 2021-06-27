import authConfig from "@config/authConfig";
import { sign } from "jsonwebtoken";

import data from "../fixtures/users.json";

import { IUserLogin } from "./IUserLogin";

class AuthenticateUserServices {
  async execute({ email, password }: IUserLogin) {
    const userFind = data.filter((data) => data.email === email);

    const [user] = userFind;

    if (!user) {
      throw new Error("Email/Password Incorrect !");
    }

    const passwordMatch = user.password === password;

    if (!passwordMatch) {
      throw new Error("Email/Password Incorrect !");
    }

    const [rolesString] = user.roles;

    const token = sign(
      {
        email: user.email,
        roles: rolesString,
      },
      authConfig.secret,
      {
        subject: user.userId,
        expiresIn: authConfig.tokenExpiryTimeInSeconds,
      }
    );

    return token;
  }
}
export { AuthenticateUserServices };
