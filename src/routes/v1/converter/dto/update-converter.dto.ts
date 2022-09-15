import { PartialType } from '@nestjs/swagger';
import { CreateConverterDto } from './create-converter.dto';

export class UpdateConverterDto extends PartialType(CreateConverterDto) {}
