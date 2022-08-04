import { MailEntities } from '../../../database/entities/mail.entities';
import { CreateMailDto } from '../dto/create-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import * as fs from 'fs/promises';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    @InjectRepository(MailEntities)
    private readonly mailRepository: Repository<MailEntities>,
  ) {}

  // async fileCreateAndDelete(template: any, name: any, subject: any) {
  //   await fs.appendFile('src/templates/email.hbs', name);
  //   await fs.appendFile('src/templates/email.hbs', subject);
  //   await fs.appendFile('src/templates/email.hbs', template);
  // }

  async sendDyMail(createMailDto: CreateMailDto) {
    // await this.fileCreateAndDelete(
    //   createMailDto.template,
    //   createMailDto.name,
    //   createMailDto.subject,
    // );
    console.log(createMailDto.email);
    const funSend = await this.mailerService
      .sendMail({
        to: createMailDto.email,
        subject: createMailDto.subject,
        // template: "src/templates/email.hbs", //fro send static template
        html: `${createMailDto.template}`, //to send dynamic template
        context: {
          name: createMailDto.name,
        },
      })
      .then(async (response) => {
        let mail: MailEntities = new MailEntities();
        mail.email = createMailDto.email;
        mail.name = createMailDto.name;
        mail.subject = createMailDto.subject;
        mail.template = createMailDto.template;
        mail.response = response.response;
        mail.createAtDate = new Date();
        const data = await this.mailRepository.save(mail);
        console.log(response, data);
        return [{ response: response, data: data }];
      })
      .catch((e) => {
        console.log(e, 'error sending email');
      });
    return funSend;
  }

  async getMail() {
    const allMail = await this.mailRepository.find();
    return allMail;
  }

  async getMailId() {
    try {
      const res = await this.mailRepository.find({select:['email']});
      const value =[...new Set(res)]
      return value;
    } catch (ex) {
      return `error occurs ${ex}`;
    }
  }

  async getMailById(id: number) {
    const mailById = this.mailRepository.findOne({ where: { id } });
    return mailById;
  }

  async deleteMailById(id: number) {
    const delMail = this.mailRepository.delete(id);
    return delMail;
  }
}
