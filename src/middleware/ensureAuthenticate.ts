import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { IPayload } from '@interface/IPayload';

import authConfig from '../config/authConfig';

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(' ');

  try {
    const { sub, roles } = verify(token, authConfig.secret) as IPayload;
    request.userId = sub;
    request.roles = roles;
    return next();
  } catch (error) {
    return response.status(401).end();
  }
}
