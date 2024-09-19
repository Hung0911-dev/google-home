import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestInterceptorMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("hung")
        console.error('Intercepting requests ...', req.url, "..." , req.method);
        console.error('Intercepting requests ...', req.query);
        console.error('Intercepting body ...', req.body);
        console.error('Intercepting header ...', req.headers);  
        next(); // Continue to the next middleware or route handler
    }
}
