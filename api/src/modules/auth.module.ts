import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: No token provided',
      });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid token format',
      });
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string,
      ) as jwt.JwtPayload;
      req['user'] = decoded;
      next();
    } catch (error) {
      let message = 'Unauthorized: Invalid token';
      let errorMessage = 'Unknown error';
      if (error instanceof jwt.TokenExpiredError) {
        message = 'Unauthorized: Token has expired';
        errorMessage = error.message;
      } else if (error instanceof jwt.JsonWebTokenError) {
        message = 'Unauthorized: Invalid token signature';
        errorMessage = error.message;
      } else if (error instanceof jwt.NotBeforeError) {
        message = 'Unauthorized: Token not active yet';
        errorMessage = error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      return res.status(401).json({
        success: false,
        message,
        error: errorMessage,
      });
    }
  }
}
