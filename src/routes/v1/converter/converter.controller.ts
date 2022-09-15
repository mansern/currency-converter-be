import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ConverterService } from "./converter.service";
import { CreateConverterDto } from "./dto/create-converter.dto";
import { UpdateConverterDto } from "./dto/update-converter.dto";

@Controller("converter")
export class ConverterController {
  constructor(private readonly converterService: ConverterService) {}

  @Get("/:amount/:to")
  calculateConversion(
    @Param("amount") amount: number,
    @Param("to") to: string
  ) {
    return this.converterService.calculateConversion(amount, to);
  }

  @Get("/currenyCodes")
  currenyCodes() {
    return this.converterService.currenyCodes();
  }
}
