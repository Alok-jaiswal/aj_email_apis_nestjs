import { IsEmail, IsString } from 'class-validator';

export class CreateMailDto {
  @IsString()
  template: string;

  @IsEmail()
  email:string;

  @IsString()
  name:string;

  @IsString()
  subject:string;
}
