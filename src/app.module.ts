import { Config } from './config/app.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from './api/mail/mail.module';
import { MailEntities } from './database/entities/mail.entities';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './api/user/user.module';
import { EmailtemplateModule } from './api/emailtemplate/emailtemplate.module';
import { Emailtemplate } from './database/entities/emailtemplate.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UserEntity } from './database/entities/user.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: [
      //   '.local.env',
      // ],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/*'],
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
          entities: [MailEntities, Emailtemplate,UserEntity],
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
  controllers: [],
  providers: [],
})
export class AppModule {}
