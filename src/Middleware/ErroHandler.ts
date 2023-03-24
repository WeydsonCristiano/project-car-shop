import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    if (error instanceof Error && error.stack) {
      return res.status(parseInt(error.stack, 10)).send({ message: error.message });
    }
    return res.status(500).send({ message: 'server not found' });
  }
}

export default ErrorHandler;
