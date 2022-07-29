import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateMailDto {
  @ApiProperty()
  @IsString()
  template: string;

  @IsEmail()
  email:string;

  @IsString()
  name:string;

  @IsString()
  subject:string;
}
