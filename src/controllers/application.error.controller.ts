import { injectable } from "inversify";
import { ErrorController } from "dinoloop";

@injectable()
export class ApplicationErrorController extends ErrorController {
  internalServerError(): void {
    this.response.status(500).json({
      status: "ERROR",
      message: "Internal server error",
      details: {
        errorMessage: this.error.message,
        errorStack: this.error.stack,
      },
    });
  }
}
