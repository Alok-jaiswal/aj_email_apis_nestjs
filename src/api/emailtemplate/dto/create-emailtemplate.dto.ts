import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateEmailtemplateDto {
  @ApiProperty()
  template: string;

  @ApiProperty({ format: 'binary' })
  @IsDefined()
  image: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  templateName: string;
}
