import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMailDto {
  @ApiProperty()
  @IsString()
  template: string;

  // @IsEmail({each:true})
  @ApiProperty()
  @IsString({ each: true })
  @IsNotEmpty()
  email: string[];

  @ApiProperty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsString()
  subject: string;
}
