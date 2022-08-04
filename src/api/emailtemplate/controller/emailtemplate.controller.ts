import { editFileName } from './../../../utilities/file-upload.utility';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  HttpStatus,
} from '@nestjs/common';
import { EmailtemplateService } from '../services/emailtemplate.service';
import { CreateEmailtemplateDto } from '../dto/create-emailtemplate.dto';
import { UpdateEmailtemplateDto } from '../dto/update-emailtemplate.dto';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('emailtemplate')
@ApiTags('templateSending')
export class EmailtemplateController {
  constructor(private readonly emailtemplateService: EmailtemplateService) {}

  @Post('add')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public',
        filename: editFileName,
      }),
    }),
  )
  create(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
    @Body() createEmailtemplateDto: CreateEmailtemplateDto,
  ) {
    return this.emailtemplateService.create(file, req, createEmailtemplateDto);
  }

  @Get('/getalltemplate')
  findAll() {
    return this.emailtemplateService.findAll();
  }

  @Get('/gettemplatebyid/:id')
  findOne(@Param('id') id: number) {
    return this.emailtemplateService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateEmailtemplateDto: UpdateEmailtemplateDto,
  // ) {
  //   return this.emailtemplateService.update(+id);
  // }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.emailtemplateService.remove(+id);
  }
}
