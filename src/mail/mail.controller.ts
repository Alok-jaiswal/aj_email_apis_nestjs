import { CreateMailDto } from './dto/create-mail.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/send')
  async sendEmail(@Body(ValidationPipe) createMailDto: CreateMailDto) {
    const test = await this.mailService.sendDyMail(createMailDto);
    console.log(test);

    return test;
  }

  @Get('/getAllMail')
  async getMail() {
    const allMail = await this.mailService.getMail();
    return allMail;
  }

  @Get('/getMailById/:id')
  async getMailById(@Param('id') id: number) {
    const getMailById = await this.mailService.getMailById(id);
    return getMailById;
  }

  @Delete('/deleteMailById/:id')
  async removeMail(@Param('id') id: number) {
    const delMailId = await this.mailService.deleteMailById(id);
    return delMailId;
  }
}
