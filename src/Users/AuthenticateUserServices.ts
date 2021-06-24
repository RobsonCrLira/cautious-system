import { sign } from "jsonwebtoken";
import authConfig from "../config/authConfig";
import data from "../fixtures/users.json";
import { IUserLogin } from "./IUserLogin";
import { IUserResponse } from "./IUserResponse";

class AuthenticateUserServices {
  async execute({ email, password }: IUserLogin) {
    //Refatorar
    let userFind: IUserResponse;

    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        userFind = data[i];
        break;
      }
    }

    // const userFind = data.filter((dados, index) => {
    //   if (dados.email === email) {
    //     return dados[index];
    //   }
    //   return [];
    // });

    const user = userFind;

    if (!user) {
      throw new Error("Email/Password Incorrect !");
    }

    const passwordMatch = user.password === password;

    if (!passwordMatch) {
      throw new Error("Email/Password Incorrect !");
    }

    const token = sign(
      {
        email: user.email,
        roles: user.roles,
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
