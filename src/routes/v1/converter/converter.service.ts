import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateConverterDto } from "./dto/create-converter.dto";
import { UpdateConverterDto } from "./dto/update-converter.dto";
const CC = require("currency-converter-lt");

@Injectable()
export class ConverterService {
  async calculateConversion(amount: number, to: string) {
    try {
      let currencyConverter = new CC();
      await currencyConverter.from("AUD").to(to).amount(amount).convert();
      return currencyConverter?.convertedValue;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async currenyCodes() {
    try {
      let currencyConverter = new CC({ from: "USD", to: "JPY", amount: 100 });
      return currencyConverter.currencyCode;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
