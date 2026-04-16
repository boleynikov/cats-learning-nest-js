
import { NextFunction, Request, Response } from 'express';

export function loggerMiddleWare(req: Request, res: Response, next: NextFunction) {
    console.log('Request...', JSON.stringify({ method: req.method, url: req.originalUrl, params: req.params, query: req.query }));
    next();
}
