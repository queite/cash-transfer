import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/httpException';
import JwtService from '../services/JwtService';

const authnMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) throw new HttpException(401, 'Token not found');

  const user = JwtService.verify(authorization as string);
  if (!user) throw new HttpException(401, 'Invalid token');
  req.user = user;

  next();
};

export default authnMiddleware;
