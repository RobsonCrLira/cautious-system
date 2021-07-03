import { Request, Response } from 'express';

import { AuthenticateUserServices } from './AuthenticateUserServices';

class AuthenticateUsersController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserServices = new AuthenticateUserServices();

    const auth = await authenticateUserServices.execute({ email, password });

    return response.json(auth);
  }
}

export { AuthenticateUsersController };
