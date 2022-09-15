import { Module } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { ConverterController } from './converter.controller';

@Module({
  controllers: [ConverterController],
  providers: [ConverterService]
})
export class ConverterModule {}
