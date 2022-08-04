import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmailtemplateDto } from '../dto/create-emailtemplate.dto';
import { Emailtemplate } from '../../../database/entities/emailtemplate.entity';

@Injectable()
export class EmailtemplateService {
  constructor(
    @InjectRepository(Emailtemplate)
    private readonly emailtempaleRepository: Repository<Emailtemplate>,
  ) {}

  create(
    file: Express.Multer.File,
    req: any,
    createEmailtemplateDto: CreateEmailtemplateDto,
  ) {
    console.log(createEmailtemplateDto);
    const File_Url =
      req.protocol + '://' + req.headers.host + '/' + file.filename;

    let emailtemplate: Emailtemplate = new Emailtemplate();
    emailtemplate.template = createEmailtemplateDto.template;
    emailtemplate.image = File_Url;
    emailtemplate.templateName = createEmailtemplateDto.templateName;
    const result = this.emailtempaleRepository.save(emailtemplate);
    return result;
  }

  findAll() {
    return this.emailtempaleRepository.find();
  }

  findOne(id: number) {
    return this.emailtempaleRepository.findOne({ where: { id } });
  }

  // update(id: number, updateEmailtemplateDto: UpdateEmailtemplateDto) {
  //   return `This action updates a #${id} emailtemplate`;
  // }

  remove(id: number) {
    return this.emailtempaleRepository.delete(id);
  }
}
