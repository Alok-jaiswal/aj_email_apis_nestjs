import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmailtemplateService } from './services/emailtemplate.service';
import { EmailtemplateController } from './controller/emailtemplate.controller';
import { Emailtemplate } from '../../database/entities/emailtemplate.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Emailtemplate])],
  controllers: [EmailtemplateController],
  providers: [EmailtemplateService]
})
export class EmailtemplateModule {}
