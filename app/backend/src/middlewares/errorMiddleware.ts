import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import httpException from '../errors/httpException';

const errorMiddleware = (
  err: Error | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues[0].message });
  }
  const { status, message } = err as httpException;
  res.status(status || 500).json({ message });
};

export default errorMiddleware;
