import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailEntities } from './entities/mail.entities';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('EMAIL_HOST'),
          secure: false,
          auth: {
            user: config.get('EMAIL_USER'),
            pass: config.get('EMAIL_PASSWORD'),
          },
        },
        defaults: {
          from: 'alokasha7620@gmail.com',
        },
        template: {
          // dir: join(__dirname, './templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.local.env'] }),
    TypeOrmModule.forFeature([MailEntities]),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
