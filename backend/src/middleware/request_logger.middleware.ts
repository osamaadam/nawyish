import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const start = Date.now();
    res.on("close", () => {
      const elapsed = Date.now() - start;
      const { statusCode } = res;

      this.logger.log(
        `[${method.toUpperCase()}] (${statusCode}) ${elapsed}ms ${originalUrl} ${ip}`,
        this.constructor.name
      );
    });
    next();
  }
}
