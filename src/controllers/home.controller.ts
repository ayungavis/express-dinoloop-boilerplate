import { injectable } from "inversify";
import { ApiController, Controller, HttpGet, SendsResponse, BindNumber } from "dinoloop";
import { IAboutService } from "../services/iabout.service";
import { About } from "../model/about.model";

@injectable()
@Controller("/home")
export class HomeController extends ApiController {
  name: string;

  constructor(private aboutService: IAboutService) {
    super();
    this.name = "HomeController";
  }

  @HttpGet("")
  get(): string {
    return "Hello, world!";
  }

  @HttpGet("/name")
  getName(): string {
    return this.name;
  }

  @HttpGet("/environment")
  environment(): string {
    return this.aboutService.environment();
  }

  @HttpGet("/about")
  getAbout(): About[] {
    return this.aboutService.get();
  }

  @SendsResponse()
  @HttpGet("/about/:id")
  getId(@BindNumber() id: number): void {
    setTimeout(() => {
      this.dino.proceed(`Value of id is ${id}`);
    }, 100);
  }
}
