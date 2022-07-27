import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from './mail/mail.module';
import { MailEntities } from './mail/entities/mail.entities';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmailtemplateModule } from './emailtemplate/emailtemplate.module';
import { Emailtemplate } from './emailtemplate/entities/emailtemplate.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        // '.local.env',
        '.prod.env',
      ],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        logging: configService.get<boolean>('DB_LOGGING'),
        database: configService.get('DB_NAME'),
        // entities: [__dirname + '/**/*.entity{.ts,.js}'],
        entities: [MailEntities, Emailtemplate],
      }),
    }),

    MailModule,

    AuthModule,

    UserModule,

    EmailtemplateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
