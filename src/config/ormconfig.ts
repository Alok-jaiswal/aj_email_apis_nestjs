import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
require('dotenv').config();

const DevelopmentPostgres: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME_1,
  password: process.env.DB_PASSWORD_1,
  database: process.env.DB_DATABASE_1,
  entities: ['dist/database/entities/*.entity.js'],
  synchronize: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ['dist/database/migrations/*.js'],
  cli: {
    entitiesDir: 'src/database/entities',
    migrationsDir: 'src/database/migrations',
  }
};

export default DevelopmentPostgres;
