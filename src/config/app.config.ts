import { ConfigService } from '@nestjs/config';

require('dotenv').config();

export class Config {
  constructor(private readonly configService: ConfigService) {}

  getDBConfigurationOnlineAdmission(): any {
    let dbConfig: any = {};

    dbConfig = {
      log:console.log(process.env.DB_PASSWORD_1),
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME_1 || 'postgres',
      password: process.env.DB_PASSWORD_1 || 'root',
      database: process.env.DB_DATABASE_1 || 'email',
    };
    return dbConfig;
  }
}
