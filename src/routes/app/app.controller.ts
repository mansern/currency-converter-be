import { Controller, Get, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";

@Controller()
@ApiTags("Redirect to Swagger")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello() {
    return "Hello World!";
  }
}
