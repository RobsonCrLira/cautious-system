import authConfig from '@config/authConfig';
import { sign } from 'jsonwebtoken';
import { AppError } from 'src/errors/AppError';

import users from '../fixtures/users.json';

import { IUserLogin } from './IUserLogin';

class AuthenticateUserServices {
  async execute({ email, password }: IUserLogin) {
    const userFind = users.filter((data) => data.email === email);

    const [user] = userFind;

    if (!user) {
      throw new AppError('Email/Password Incorrect !');
    }

    const passwordMatch = user.password === password;

    if (!passwordMatch) {
      throw new AppError('Email/Password Incorrect !');
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
      },
    );

    return token;
  }
}
export { AuthenticateUserServices };
