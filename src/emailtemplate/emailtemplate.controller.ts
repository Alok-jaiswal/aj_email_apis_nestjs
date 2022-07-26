import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailtemplateService } from './emailtemplate.service';
import { CreateEmailtemplateDto } from './dto/create-emailtemplate.dto';
import { UpdateEmailtemplateDto } from './dto/update-emailtemplate.dto';

@Controller('emailtemplate')
export class EmailtemplateController {
  constructor(private readonly emailtemplateService: EmailtemplateService) {}

  @Post("add")
  create(@Body() createEmailtemplateDto: CreateEmailtemplateDto) {
    return this.emailtemplateService.create(createEmailtemplateDto);
  }

  @Get("/getalltemplate")
  findAll() {
    return this.emailtemplateService.findAll();
  }

  @Get('/gettemplatebyid/:id')
  findOne(@Param('id') id: number) {
    return this.emailtemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailtemplateDto: UpdateEmailtemplateDto) {
    return this.emailtemplateService.update(+id, updateEmailtemplateDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.emailtemplateService.remove(+id);
  }
}
