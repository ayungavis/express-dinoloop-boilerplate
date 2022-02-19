import "./inversify.decorate";
import { Container } from "inversify";
import { HomeController } from "../controllers/home.controller";
import { ApplicationErrorController } from "../controllers/application.error.controller";
import { AboutService } from "../services/about.service";
import { JsonResponseMiddleware } from "../middlewares/json.response";
import { IAboutService } from "../services/iabout.service";
import { IAppConfigService } from "../services/config/iapp.config.service";
import { AppConfigService } from "../services/config/app.config.service";

let container = new Container();
container.bind(IAboutService).to(AboutService);
container.bind(IAppConfigService).to(AppConfigService);
container.bind(HomeController).toSelf();
container.bind(ApplicationErrorController).toSelf();
container.bind(JsonResponseMiddleware).toSelf();

export { container as AppContainer };
