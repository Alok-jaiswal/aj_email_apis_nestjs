import { Config } from './config/app.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from './api/mail/mail.module';
import { MailEntities } from './database/entities/mail.entities';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmailtemplateModule } from './api/emailtemplate/emailtemplate.module';
import { Emailtemplate } from './database/entities/emailtemplate.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: [
      //   '.local.env',
      // ],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const appConfig = new Config(config);
        const dbConfig = appConfig.getDBConfigurationOnlineAdmission();
        return {
          type: 'postgres',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password:  dbConfig.password,
          database:  dbConfig.database,
          synchronize: false,
          logging:true,
          migrationsRun: false,
          // entities: [__dirname + '/**/*.entity{.ts,.js}'],
          entities: [MailEntities, Emailtemplate],
          namingStrategy: new SnakeNamingStrategy(),
          migrationsTransactionMode: 'all',
          cli: {
            entitiesDir: 'src/database/entities',
            migrationsDir: 'src/database/migrations',
          },
        };
      },
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
