import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';
import {UserEntity } from 'src/database/entities/user.entity';
import { Auth } from 'src/database/entities/auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),Auth],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
