import { decorate, injectable } from "inversify";
import {
  ApiController,
  ErrorController,
  RequestStartMiddleware,
  RequestStartMiddlewareAsync,
  RequestEndMiddleware,
  RequestEndMiddlewareAsync,
  Middleware,
  MiddlewareAsync,
  ActionFilter,
  ActionFilterAsync,
  ErrorMiddleware,
  ErrorMiddlewareAsync,
  ResultFilter,
  ResultFilterAsync,
  ExceptionFilter,
  ExceptionFilterAsync,
  IUserIdentity,
  UserIdentity,
} from "dinoloop";

/**
 * Builtin abstract classes of Dinoloop, must go through decorate().
 * These statements are specific to Inversify.js.
 * Inverisfy expects the inherited members to have @injectable()
 */
decorate(injectable(), ApiController);
decorate(injectable(), ErrorController);
decorate(injectable(), RequestStartMiddleware);
decorate(injectable(), RequestStartMiddlewareAsync);
decorate(injectable(), RequestEndMiddleware);
decorate(injectable(), RequestEndMiddlewareAsync);
decorate(injectable(), Middleware);
decorate(injectable(), MiddlewareAsync);
decorate(injectable(), ActionFilter);
decorate(injectable(), ActionFilterAsync);
decorate(injectable(), ErrorMiddleware);
decorate(injectable(), ErrorMiddlewareAsync);
decorate(injectable(), ResultFilter);
decorate(injectable(), ResultFilterAsync);
decorate(injectable(), ExceptionFilter);
decorate(injectable(), ExceptionFilterAsync);
decorate(injectable(), IUserIdentity);
decorate(injectable(), UserIdentity);
