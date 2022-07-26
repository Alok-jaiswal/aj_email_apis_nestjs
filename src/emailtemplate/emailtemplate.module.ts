import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmailtemplateService } from './emailtemplate.service';
import { EmailtemplateController } from './emailtemplate.controller';
import { Emailtemplate } from './entities/emailtemplate.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Emailtemplate])],
  controllers: [EmailtemplateController],
  providers: [EmailtemplateService]
})
export class EmailtemplateModule {}
