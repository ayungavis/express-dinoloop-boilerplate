import { injectable } from "inversify";
import { IDinoRequestEndProps, RequestEndMiddleware } from "dinoloop";
import { Request, Response, NextFunction } from "express";

@injectable()
export class JsonResponseMiddleware extends RequestEndMiddleware {
  invoke(
    request: Request,
    response: Response,
    next: NextFunction,
    result: any,
    props?: IDinoRequestEndProps
  ): void {
    response.json({
      status: "SUCCESS",
      result,
    });
  }
}
